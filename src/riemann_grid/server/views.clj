(ns riemann-grid.server.views
  (:use [hiccup.core :only [html]]
        [hiccup.page :only [html5 include-css include-js]]
        [hiccup.def  :only [defhtml]]))

(def bootbase "//netdna.bootstrapcdn.com/twitter-bootstrap/2.2.1/")
(def bootcss  (str bootbase "css/bootstrap-combined.min.css"))
(def bootjs   (str bootbase "js/bootstrap.min.js"))
(def jqueryjs "//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js")

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
  (html5
   [:head
    [:title "riemann grid"]
    (include-css bootcss)]
   [:body
    (menubar)
    (container-fluid
     content)
    (include-js jqueryjs)
    (include-js bootjs)
    (include-js "/javascripts/bundle.js")]))

(defhtml success
  [str]
  [:td
   [:a.btn.btn-success.disabled str]])

(defhtml warning
  [str]
  [:td
   [:a.btn.btn-warning.disabled str]])

(defhtml error
  [str]
  [:td
   [:a.btn.btn-danger.disabled str]])

(defn main
  []
  (html
   (layout
    [:h2#dashname "main alerts"]
    [:div.offset1
     [:form
      [:div.input-append {:align "center"}
       [:input#cmdline.input-append.input-xxlarge {:type "text"}]
       [:button#cmdsubmit.btn {:type "submit"} "query"]]]]
    [:table#alerts.table.table-condensed
     [:thead#grid-header]
     [:tbody#grid-body]])))