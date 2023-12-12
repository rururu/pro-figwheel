(ns hello.arttuka
(:require-macros [reagent-mui.util :refer [react-component]])
(:require [react :as react]
            [reagent.core :as r]
            [reagent.dom.client :as rdom]
            [reagent-mui.cljs-time-adapter :refer [cljs-time-adapter]]
            [reagent-mui.colors :as colors]
            [reagent-mui.material.button :refer [button]]
            [reagent-mui.material.chip :refer [chip]]
            [reagent-mui.material.css-baseline :refer [css-baseline]]
            [reagent-mui.material.input-adornment :refer [input-adornment]]
            [reagent-mui.material.menu-item :refer [menu-item]]
            [reagent-mui.material.stack :refer [stack]]
            [reagent-mui.material.text-field :refer [text-field]]
            [reagent-mui.material.toolbar :refer [toolbar]]
            [reagent-mui.material.typography :refer [typography]]
            [reagent-mui.icons.add-box :refer [add-box]]
            [reagent-mui.icons.clear :refer [clear]]
            [reagent-mui.icons.face :refer [face]]
            [reagent-mui.icons.face-outlined :refer [face-outlined]]
            [reagent-mui.icons.anchor :refer [anchor]]
            ;;[reagent-mui.x.date-picker :refer [date-picker]]
            ;;[reagent-mui.x.localization-provider :refer [localization-provider]]
            [reagent-mui.styles :as styles]
            [hello.arttuka.autocomplete :refer [autocomplete]]
            [hello.arttuka.select :as select]
            ;;[hello.arttuka.data-grid :as data-grid]
            ["@mui/material/TextField" :as MuiTextField]))
(def CUSTOM-THEME {:palette {:primary   colors/purple
                 :secondary colors/red}})
(def CLASSES (let [prefix "rmui-example"]
  {:root        (str prefix "-root")
    :button    (str prefix "-button")
    :text-field (str prefix "-text-field")}))
(def STATES (do
  (defonce text-state (r/atom "foobar"))
  (defonce select-state (r/atom 1))
  (defonce date-picker-state (r/atom nil))
  (defonce autocomplete-state (r/atom nil))))
(defn event-value [e]
  (.. e -target -value))

(defn toolbarr []
  [toolbar {:disable-gutters true}
    [button
     {:variant  "contained"
      :color    "primary"
      :class    (:button CLASSES)
      :on-click #(swap! text-state str " foo")}
     "Update value property"
     [add-box]]
    [button
     {:variant  "outlined"
      :color    "secondary"
      :class    (:button CLASSES)
      :on-click (fn []
                  (reset! text-state "")
                  (reset! select-state 1)
                  (reset! date-picker-state nil)
                  (reset! autocomplete-state nil))}
     "Reset"
     [clear]]])

(defn tf-text-input []
  [text-field
    {:value       @text-state
     :label       "Text input"
     :placeholder "Placeholder"
     :helper-text "Helper text"
     :class       (:text-field CLASSES)
     :on-change   (fn [e]
                    (reset! text-state (event-value e)))}])

(defn tf-text-with-adornment []
  [text-field
    {:value       @text-state
     :label       "Text with Adornment"
     :placeholder "Placeholder"
     :helper-text "Helper text"
     :class       (:text-field CLASSES)
     :on-change   (fn [e]
                    (reset! text-state (event-value e)))
     :InputProps  {:end-adornment 
                           (r/as-element
                             [input-adornment {:position "end"} "Baz"])}}])

(defn tf-textarea []
  [text-field
    {:value       @text-state
     :label       "Textarea"
     :placeholder "Placeholder"
     :helper-text "Helper text"
     :class       (:text-field CLASSES)
     :on-change   (fn [e]
                    (reset! text-state (event-value e)))
     :multiline   true
     :rows        10}])

(defn tf-autosized-textarea []
  [text-field
    {:id        :textarea-autosize
     :value     @text-state
     :label     "Autosized textarea"
     :class     (:text-field CLASSES)
     :on-change (fn [e]
                  (reset! text-state (event-value e)))
     :multiline true
     :min-rows  2
     :max-rows  10}])

(defn tf-select []
  [text-field
    {:value       @select-state
     :label       "Select"
     :placeholder "Placeholder"
     :helper-text "Helper text"
     :class       (:text-field CLASSES)
     :on-change   (fn [e]
                    (reset! select-state (event-value e)))
     :select      true}
    [menu-item
     {:value 1}
     "Item 1"]
    [menu-item
     {:value 2}
     "Item 2"]])

(defn icons []
  [stack {:direction :row
           :spacing   2}
    [chip {:icon  (r/as-element [face])
           :label "Icon element example, r/as-element"}]
    [chip {:icon  (r/as-element [anchor])
           :label "Another example icon"}]])

(defn autocompl []
  [autocomplete {:class  (:text-field CLASSES)
                          :value  @autocomplete-state
                          :on-change (fn [new-value]
                               (reset! autocomplete-state new-value))}])

(defn main []
  [:div
 [css-baseline]
 [styles/theme-provider (styles/create-theme CUSTOM-THEME)
   [stack {:direction :column
              :alignItems :stretch
              :spacing 2
              :p 2}
      [toolbarr]
      [tf-text-input]
      [tf-text-with-adornment]
      [tf-textarea]
      [tf-autosized-textarea]
      [tf-select]
      [icons]
      [autocompl]]]])

(defn run []
  (let [root (rdom/create-root (js/document.getElementById "app"))]
    (rdom/render root [main])))


(run)