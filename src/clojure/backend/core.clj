(ns backend.core
(:use
  protege.core)
(:require
  [compojure.core :refer [defroutes GET POST]]
  [compojure.route :as route]
  [org.httpkit.server :refer [run-server]]))

(def init-server (do
  (defonce server (atom nil))

  (defn backend-response [] nil)

  (defroutes app
    (GET "/" [] {:status 200
                      :headers {"Access-Control-Allow-Origin" "*"}
                      :body (backend-response)}))))
(defn start-server []
  (reset! server (run-server app {:port 8888}))
(println "Backend server started on port 8888.."))

(defn stop-server []
  (when @server
  (@server :timeout 100)
  (println "Server stopped on port 8888.")))

(defn restart-server []
  (stop-server)
(start-server))

(defn backend-response []
  (if-let [beg (sv (first (cls-instances "BackendGUI")) "source")]
  (str "<b2>" beg "</b2>")
  (str "<b3>Create on the server a class \"BackendGUI\" with
                   a slot \"source\" and fill the slot with a text.</b2>")))

