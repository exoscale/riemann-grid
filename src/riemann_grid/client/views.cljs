(ns riemann-grid.client.views
  (:use-macros [crate.def-macros :only [defpartial]])
  (:require [crate.core :as crate]))

(def nbsp "&nbsp;")
(def state-to-button-type
  {"ok"       :button.btn.btn-success.btn-mini.disabled
   "warning"  :button.btn.btn-warning.btn-mini.disabled
   "critical" :button.btn.btn-danger.btn-mini.disabled})

(defpartial grid-header-elem
  [e]
  [:th e])

(defpartial grid-header
  [elems]
  [:tr
   (map grid-header-elem elems)])

(defpartial grid-body-elem
  [service]
  [:td
   (if service
     (let [{:strs [state metric]} (first service)
           button-type (get state-to-button-type state :btn.disabled.btn-mini)]
       [button-type metric])
     " ")])

(defpartial grid-body-line
  [host services]
  [:tr
   (cons [:td host]
         (map grid-body-elem services))])