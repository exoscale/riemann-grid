(ns riemann-grid.views
  (:require [hiccup.core :refer [html]]
            [hiccup.page :refer [doctype include-css include-js]]
            [hiccup.def  :refer [defhtml]]))

(defhtml row-fluid
  [& content]
  [:div.row-fluid
   content])

(defhtml container-fluid
  [& content]
  [:div.container-fluid
   content])

(defhtml menubar
  []
  [:div.navbar.navbar-inverse
   [:div.navbar-inner
    (container-fluid
     [:a.brand {:href "#"} "Riemann Grid"])]])

(defhtml layout
  [& content]
  ""
  (:html5 doctype)
  [:html {:lang "en-US"
          :ng-app "grid"
          :id "ng-app"
          :xmlns:ng "http://angularjs.org"}
   [:head
    [:meta {:charset "UTF-8"}]
    [:meta {:content "IE=edge,chrome=1"
            :http-equiv "X-UA-Compatible"}]
    [:title "riemann grid"]
    (include-css "/css/bootstrap.css")
    (include-css "/css/bootstrap-responsive.css")]
   [:body
    (menubar)
    (container-fluid
     content)
    (include-js "/js/vendor/jquery.js")
    (include-js "/js/vendor/bootstrap.js")
    (include-js "/js/vendor/angular.js")
    (include-js "/js/vendor/underscore.js")
    (include-js "/js/app.js")]])

(defn main
  []
  (html
   (layout
    (row-fluid
     [:div.span12 {:ng-controller "GridC"}
      [:form {:ng-submit "get_states()"}
       [:div.input-append {:align "center"}
        [:input.input-append.input-xxlarge {:type "text"
                                            :ng-model "query"
                                            :ng-change "update_loc"}]]]
      [:table.table.table-condensed
       [:thead
        [:tr
         [:th "host"]
         [:th {:ng-repeat "service in services"} [:small "{{service}}"]]]]
       [:tbody
        [:tr {:ng-repeat "host in hosts"}
         [:td "{{host}}"]
         [:td {:ng-repeat "service in services"}
          [:button.btn.disabled.btn-mini {:ng-class "event_state(host,service)"}
           "{{event_metric(host,service) | precision:2}}"]]]]]]))))