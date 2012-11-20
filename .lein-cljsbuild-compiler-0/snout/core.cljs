;; Copyright (C) 2012, Eduardo Julián. All rights reserved.
;;
;; The use and distribution terms for this software are covered by the 
;; Eclipse Public License 1.0
;; (http://opensource.org/licenses/eclipse-1.0.php) which can be found
;; in the file epl-v10.html at the root of this distribution.
;;
;; By using this software in any fashion, you are agreeing to be bound
;; by the terms of this license.
;;
;; You must not remove this notice, or any other, from this software.

(ns ^{:author "Eduardo Julian"} snout.core
  (:require [goog.events :as gevents]
            [goog.History :as history]
            [goog.history.Html5History :as history5]))

; <Constants>
(def ^:private +literal+ #"/\w*")
(def ^:private +params+ #"\?.*")

; <Globals>
(def ^:private routes (atom []))

; <Utils>
(defn- param-match "Match GET-like params in the URL."
  [params]
  (if-not (empty? params)
    (let [ss (.split params "&")]
      (->> ss
        .-length range (map #(aget ss %))
        (map #(.split % "="))
        (reduce (fn [m [k v]] (assoc m (keyword k) v)) {}))
      )))

(defn- route-match "Matches the URL to the matcher and (if they coincide) returns a set of route bindings."
  [url matcher]
  (loop [[m & matcher] matcher
         url url
         res {}]
    (if (empty? url)
      (if (empty? matcher) res)
      (if (= "*" m)
        (assoc res :* url)
        (let [r (.substring (re-find +literal+ url) 1)
              url (.substring url (inc (count r)))]
          (cond
            (keyword? m) (recur matcher url (assoc res m r))
            (= m (str "/" r)) (recur matcher url res)
            ))))))

(defn- choose-route "Chooses a valid route based on the installed routes."
  [url]
  (let [params (re-find +params+ url)
        url (.substring url 0 (- (count url) (count params)))
        params (param-match (if params (.substring params 1)))
        [m f] (some (fn [[matcher f]]
                      (if-let [m (route-match url matcher)]
                        [m f]))
                    @routes)]
    (if m (f (merge m params)))))

; <API>
; History...
(defn create-history []
  (let [history (if (history5/isSupported)
                  (goog.history.Html5History.)
                  (goog.History.))]
    (doto history
      (.setEnabled true)
      (gevents/listen "navigate" (fn [_] (choose-route (.getToken history))))
      )))

(def ^{:doc "The history object.", :dynamic true} *history*
  (let [h (create-history)]
    ; A simple hack to avoid the Google Closure History API from firing hash-bang changes twice...
    (gevents/unlisten (.-window_ h) (.-POPSTATE gevents/EventType)
                      (.-onHistoryEvent_ h), false, h)
    h))

(defn get-token [] (.getToken *history*))
(defn set-token! [tok] (.setToken *history* tok))
