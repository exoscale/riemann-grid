(ns riemann-grid.server.core
  (:use [compojure.core             :only [GET POST PUT DELETE defroutes]]
        [clojure.tools.cli          :only [cli]]
        [riemann.client             :only [tcp-client query]]
        [ring.middleware.json       :only [wrap-json-body wrap-json-response]]
        [ring.middleware.params     :only [wrap-params]]
        [ring.middleware.resource   :only [wrap-resource]]
        [ring.middleware.stacktrace :only [wrap-stacktrace]]
        [ring.middleware.reload     :only [wrap-reload]]
        [ring.util.response         :only [response status content-type charset]]
        [ring.adapter.jetty         :only [run-jetty]]
        [riemann-grid.server.views  :as views])
  (:gen-class))

(def riemann-client (atom nil))

(defroutes main-routes
  (GET "/api/states"
       {{:strs [q]} :params}
       (->> (query @riemann-client q)
            (map #(->> % seq (map (partial apply hash-map)) (reduce merge)))
            (vec)
            response))

  (GET "/"
       []
       (-> (response (views/main))
           (content-type "text/html")
           (charset "UTF-8"))))

(def api-handler
  (-> main-routes
      (wrap-params)
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