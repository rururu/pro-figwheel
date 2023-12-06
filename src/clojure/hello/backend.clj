(ns hello.backend
(:require 
  [ajax.core :refer [GET]]))
(def error-handler (fn [response]
  (let [{:keys [status status-text]} response]
    (println (str "AJAX ERROR: " status " " status-text)))))
(defn get-element [id]
  (js/document.getElementById id))

(defn set-element [id html]
  (set! (.-innerHTML (get-element id)) html))

(defn handler [response]
  (set-element "bkd" (str "<h2>" response "</h2>")))

(defn get-backend []
  (GET "http://localhost:8888/" 
  {:handler handler
    :error-handler error-handler}))

