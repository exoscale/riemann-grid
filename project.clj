(defproject riemann-grid "0.6.5"
  :description "grid like view of riemann alerts"
  :url "https://github.com/exoscale/riemann-grid"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure       "1.10.0"]
                 [org.clojure/tools.logging "0.4.1"]
                 [org.clojure/tools.cli     "0.4.1"]
                 [compojure                 "1.6.1"]
                 [hiccup                    "1.0.5"]
                 [ring/ring-json            "0.5.0-beta1"]
                 [riemann-clojure-client    "0.5.0"]
                 [ring/ring-core            "1.7.1"]
                 [ring/ring-jetty-adapter   "1.7.1"]
                 [ring/ring-devel           "1.7.1"]
                 [javax.xml.bind/jaxb-api "2.4.0-b180830.0359"]
                 [log4j/log4j               "1.2.17"
                  :exclusions [javax.mail/mail
                               javx.jms/jms
                               com.sun.jdmk/jmxtools
                               com.sun.jmx/jmxri]]]
  :main riemann-grid.core)
