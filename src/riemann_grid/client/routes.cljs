(ns riemann-grid.client.routes
  "Our main entry point"
  (:require [snout.core                     :as snout]
            [goog.events                    :as events]
            [riemann-grid.client.controller :as controller])
  (:use [jayq.core :only [$ append prepend delegate on val]]
        [jayq.util :only [clj->js]])
  (:use-macros [snout.macros :only [defroute]]))

(.log js/console (str "starting up with query: " @controller/stored-query))

(controller/grid "true")