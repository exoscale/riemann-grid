(ns riemann-grid.client.controller
  "Our main entry point"
  (:require [riemann-grid.client.views :as views]
            [goog.events               :as events])
  (:use [jayq.core :only [$ ajax empty inner append on prevent val]]))

(def $grid-header ($ :#grid-header))
(def $grid-body   ($ :#grid-body))
(def $cmdline     ($ :#cmdline))
(def $cmdsubmit   ($ :#cmdsubmit))
(def timer        (atom nil))
(def stored-query (atom "true"))

(defn fixup-metric
  [{:strs [metric] :as event}]
  (let [new-metric (.toFixed metric 2)]
    (assoc event "metric" new-metric)))

(defn update-grid-header
  [elems]
  (empty $grid-header)
  (inner $grid-header (views/grid-header elems)))

(defn update-grid-body
  [hosts]
  (empty $grid-body)
  (doseq [[host services] hosts]
    (append $grid-body (views/grid-body-line host services))))

(defn update-grid
  [events]
  (.log js/console "got events back, updating grid")
  (let [events   (map fixup-metric events)
        services (group-by #(get % "service") events)
        hosts    (group-by #(get % "host") events)]
    (update-grid-header (cons "host" (keys services)))
    (update-grid-body
     (for [[host hostdata] hosts
           :let [hostservices (group-by #(get % "service") hostdata)]]
       (vector host
               (->> (keys services)
                    (map (partial get hostservices))))))))

(defn grid-ajax
  []
  (.log js/console (str "grid ajax! q=" (str @stored-query)))
  (let [success-fn (fn [d] (update-grid (js->clj d)))
        error-fn   (fn [& _] (.log js/console "could not complete query"))
        ftr        (ajax (str "/api/states?q=" @stored-query)
                         {:accepts {:json    "application/json"}
                          :type    "GET"
                          :error   error-fn
                          :success success-fn})]
    (.done ftr #(when-not (.-enabled @timer)
                  (.start @timer)))))

(defn grid
  [q]
  (.log js/console "starting up grid")

  (on $cmdsubmit :click "" {}
      (fn [e]
        (prevent e)
        (reset! stored-query (js/encodeURI (val $cmdline)))
        (.stop @timer)
        (grid-ajax)))
  
  (on $cmdline :click "" {}
      (fn [e]
        (prevent e)
        (val $cmdline "")))
  (reset! timer (goog.Timer. 5000))
  (events/listen @timer goog.Timer/TICK grid-ajax)
  (grid-ajax))