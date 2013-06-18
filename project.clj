(def bootbase "https://netdna.bootstrapcdn.com/twitter-bootstrap/2.2.1/")

(defproject riemann-grid "0.5"
  :description "grid like view of riemann alerts"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :dependencies [[org.clojure/clojure                           "1.4.0"]]
  :profiles {:client {:dependencies [[jayq                      "0.2.2"]
                                     [crate                     "0.2.1"]
                                     [snout                     "0.1.0"]]}
             :server {:dependencies [[org.clojure/tools.logging "0.2.3"]
                                     [org.clojure/tools.cli     "0.2.2"]
                                     [compojure                 "1.1.3"]
                                     [hiccup                    "1.0.2"]
                                     [ring/ring-json            "0.1.2"]
                                     [riemann-clojure-client    "0.2.7-SNAPSHOT"]
                                     [ring/ring-core            "1.1.6"]
                                     [ring/ring-jetty-adapter   "1.1.6"]
                                     [ring/ring-devel           "1.1.6"]
                                     [log4j/log4j               "1.2.17"
                                      :exclusions [javax.mail/mail
                                                   javx.jms/jms
                                                   com.sun.jdmk/jmxtools
                                                   com.sun.jmx/jmxri]]]
                      :file-specs [{:type :path :path "resources/public/javascripts/bundle.js"}]}}
  :cljsbuild
  {:builds
   [{:compiler {:output-to "resources/public/javascripts/bundle.js"
                :pretty-print true}
     :source-path "src/riemann_grid/client"
     :jar true
     :externs
     [(str bootbase "js/bootstrap.min.js")
      "https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"]}]}
  :plugins [[lein-cljsbuild "0.2.9"]]
  :main riemann-grid.server.core)
