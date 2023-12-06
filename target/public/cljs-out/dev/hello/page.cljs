(ns hello.page
)
(defn get-element [id]
  (js/document.getElementById id))

(defn set-element [id html]
  (set! (.-innerHTML (get-element id)) html))

(defn update-page [html]
  (set-element "app" html))


(update-page "Stop")