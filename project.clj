(defproject pro-figwheel "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :resource-paths ["src" "src/clojure" "classes" "src/cljs" "resources" "target"]
  :dependencies [[org.clojure/clojure "1.11.1"]
                 [org.clojure/clojurescript "1.10.773"]
                 [com.bhauman/figwheel-main "0.2.6"]
                 [com.bhauman/rebel-readline-cljs "0.1.4"]
                 [protege "3.5.0"]
                 [protege/standard-extensions "3.5.0"]
                 [protege/looks "3.5.0"]
                 [protege/unicode_panel "3.5.0"]
                 [protege/JGo "3.5.0"]
                 [protege/JGoLayout "3.5.0"]
                 [protege/ClojureTab "1.5.0"]
                 [http-kit/http-kit "2.8.0-beta3"]
                 [compojure "1.7.0"]
                 [cljs-ajax "0.8.4"]
                 [reagent "1.2.0"]
                 [cljsjs/react "18.2.0-1"]
                 [cljsjs/react-dom "18.2.0-1"]
                 [arttuka/reagent-material-ui "5.11.12-0"]]
  :repositories {"local" {:url ~(str (.toURI (java.io.File. "repo"))) :checksum :warn}}
  :main pro-figwheel.main)
