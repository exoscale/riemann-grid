(defproject riemann-grid "0.6.3"
  :description "grid like view of riemann alerts"
  :url "https://github.com/exoscale/riemann-grid"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure       "1.5.1"]
                 [org.clojure/tools.logging "0.2.6"]
                 [org.clojure/tools.cli     "0.3.1"]
                 [compojure                 "1.1.3"]
                 [hiccup                    "1.0.5"]
                 [ring/ring-json            "0.2.0"]
                 [riemann-clojure-client    "0.2.9"]
                 [ring/ring-core            "1.2.1"]
                 [ring/ring-jetty-adapter   "1.2.1"]
                 [ring/ring-devel           "1.2.1"]
                 [log4j/log4j               "1.2.17"
                  :exclusions [javax.mail/mail
                               javx.jms/jms
                               com.sun.jdmk/jmxtools
                               com.sun.jmx/jmxri]]]
  :main riemann-grid.core)
