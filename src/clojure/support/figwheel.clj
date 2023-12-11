(ns support.figwheel
(:use protege.core)
(:require
  [figwheel.main.api :as fapi])
(:import
  java.io.FileWriter
  clojuretab.ProgramGenerator))
(defn start-fig
  ([hm inst]
  (let [prg (sv inst "cljs-program")
         ns (sv prg "cloNamespace")
         main (symbol (sv ns "title"))]
    (start-fig main)))
([main]
  (invoke-later
    (fapi/start {:id "dev"
                      :options {:main main}
                      :config {:watch-dirs ["src/cljs"]
                                   :css-dirs ["resources/public/css"]
                                   :mode :serve}}))))

(defn stop-fig [hm inst]
  (fapi/stop "dev"))

(defn save [hm inst]
  (let [save-in "src/cljs"
       epi (sv inst "epilogue")
       nsi (sv inst "cloNamespace")
       nss (sv nsi "title")
       [nam nsf] (ns-folder-and-name nss)
       pgr (ProgramGenerator. inst)
       _ (chk&mk-folder (str save-in SEP nsf))
       fwr (FileWriter. (str save-in SEP nsf SEP nam ".cljs"))]
  (.generateProgram pgr fwr)
  (if (not (empty? epi))
    (.write fwr (str "\n" epi)))
  (.close fwr)))

(defn save-asset [inst ext]
  (let [tit (sv inst "title")
       src (sv inst "source")
       sin (sv inst "save-in")
       _ (chk&mk-folder sin)
       fwr (FileWriter. (str sin SEP tit ext))]
  (.write fwr src)
  (.close fwr)))

(defn save-html [hm inst]
  (save-asset inst ".html"))

(defn save-css [hm inst]
  (save-asset inst ".css"))

(defn save-ns [hm inst]
  (let [save-in "src/cljs"
       refs (.getReferences inst)
       frms (map #(.getFrame %) refs)
       is-prg? #(= (.getDirectType %) (cls "CljsProgram"))
       prog (first (filter is-prg? frms))
       epi (sv prog "epilogue")
       nsi (sv prog "cloNamespace")
       nss (sv nsi "title")
       [nam nsf] (ns-folder-and-name nss)
       pgr (ProgramGenerator. prog)
       _ (chk&mk-folder (str save-in SEP nsf))
       fwr (FileWriter. (str save-in SEP nsf SEP nam ".cljs"))]
  (.generateProgram pgr fwr)
  (if (not (empty? epi))
    (.write fwr (str "\n" epi)))
  (.close fwr)))

