(ns riemann-grid.core
  (:require [compojure.core             :refer [GET POST PUT DELETE defroutes]]
            [clojure.tools.cli          :refer [cli]]
            [riemann.client             :refer [tcp-client query]]
            [ring.middleware.json       :refer [wrap-json-body
                                                wrap-json-response]]
            [ring.middleware.params     :refer [wrap-params]]
            [ring.middleware.resource   :refer [wrap-resource]]
            [ring.middleware.stacktrace :refer [wrap-stacktrace]]
            [ring.middleware.reload     :refer [wrap-reload]]
            [ring.util.response         :refer [response status content-type
                                                charset]]
            [ring.adapter.jetty         :refer [run-jetty]]
            [riemann-grid.views         :as views])
  (:gen-class))

(def riemann-client (atom nil))

(defn format-host-states
  [[host states]]
  [host (->> states
             (group-by :service)
             (map (juxt key (comp first val)))
             (reduce merge {}))])

(defn format-states
  [states]
  {:hosts    (->> states (group-by :host) keys sort)
   :services (->> states (group-by :service) keys sort)
   :events   (->> states
                  (group-by :host)
                  (map format-host-states)
                  (reduce merge {}))})

(defroutes main-routes
  (POST "/api/states"
        {{:keys [q]} :body}
        (->> (query @riemann-client q)
            (map #(->> % seq (map (partial apply hash-map)) (reduce merge)))
            (vec)
            format-states
            response))

  (GET "/"
       []
       (-> (response (views/main))
           (content-type "text/html")
           (charset "UTF-8"))))

(def api-handler
  (-> main-routes
      (wrap-json-body {:keywords? true})
      (wrap-json-response)
      (wrap-resource "public")))

(def cli-opts
  [["-l" "--listen"       "listen on"    :default "127.0.0.1"]
   ["-p" "--listen-port"  "listen port"  :parse-fn #(Integer. %) :default 8484]
   ["-H" "--riemann-host" "riemann host" :default "127.0.0.1"]
   ["-P" "--riemann-port" "riemann port" :parse-fn #(Integer. %) :default 5555]
   ["-h" "--help"         "show help"    :flag true :default false]
   ["-e" "--env"          "environment"  :default "production"]])

(defn -main
  [& args]
  (let [[options args banner] (apply cli args cli-opts)]
    (when (:help options)
      (println banner)
      (System/exit 0))
    
    (reset! riemann-client (tcp-client :host (:riemann-host options)
                                       :port (:riemann-port options)))
    (run-jetty (if (= "development" (:env options))
                 (-> api-handler (wrap-reload))
                 api-handler)
               {:address (:listen options) :port (:listen-port options)})))