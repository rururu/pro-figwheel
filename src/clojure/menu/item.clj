(ns menu.item
(:use protege.core)
(:import clojuretab.ClojureTab))
(defn clojure-work []
  (println "Loading Clojure Program \"Figwheel Support\" = "
  (ClojureTab/loadProgram (fifos "CloProgram" "title" "Figwheel Support")))
(.show *prj* (foc "FigwheelController" "title" "FigwheelController")))

