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
     [:a.brand {:href "#/"} "Riemann Grid"]
     [:div.pull-right.nav {:style "color: grey;"}
      "Last updated: {{timestamp}}"])]])

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
    (include-css "/css/bootstrap-responsive.css")
    (include-css "/css/font-awesome.css")
    (include-css "/css/font-awesome-ie7.css")]
   [:body
    [:div
     content]
    (include-js "/js/vendor/jquery.js")
    (include-js "/js/vendor/bootstrap.js")
    (include-js "/js/vendor/angular.js")
    (include-js "/js/vendor/ui-bootstrap-tpls.js")
    (include-js "/js/vendor/underscore.js")
    (include-js "/js/vendor/moment.js")
    (include-js "/js/app.js")]])

(defn main
  []
  (html
   (layout
    [:ng-view])))

(defn grid
  []
  (html
   (menubar)
   (container-fluid
    (row-fluid
     [:div.span12
      [:form {:ng-submit "update_query()"}
       [:div.input-append {:align "center"}
        [:input.input-append.input-xxlarge {:type "text"
                                            :ng-model "query"}]
        [:button.btn
         {:tooltip-html-unsafe "<a href=\"#/{{query_url()}}\">query shortcut</a>"
          :tooltip-placement "right"
          :tooltip-trigger "click"}
         [:i.icon-share]]]]
      [:table.table.table-condensed
       [:thead
        [:tr
         [:th "host"]
         [:th {:ng-repeat "service in services"} [:small "{{service}}"]]]]
       [:tbody
        [:tr {:ng-repeat "host in hosts"}
         [:td [:a {:href "#/host/{{host}}"} "{{host}}"]]
         [:td {:ng-repeat "service in services"}
          [:button.btn.disabled.btn-mini {:ng-class "event_state(host,service)"}
           "{{event_metric(host,service) | number}}"]]]]]]))))

(defn host
  []
  (html
   (menubar)
   (container-fluid
    (row-fluid
     [:div.span12 {:ng-controller "GridC"}
      [:table.table.table-condensed
       [:thead
        [:tr
         [:th "service"]
         [:th "state"]]]
       [:tbody
        [:tr {:ng-repeat "service in services"}
         [:td "{{service}}"]
         [:td [:button.btn.disabled.btn-mini
               {:ng-class "event_state(host,service)"}
               "{{event_metric(host,service) | number}}"]]]]]]))))