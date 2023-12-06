// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__20791){
var map__20792 = p__20791;
var map__20792__$1 = (((((!((map__20792 == null))))?(((((map__20792.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20792.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20792):map__20792);
var m = map__20792__$1;
var n = cljs.core.get.call(null,map__20792__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__20792__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20794_20826 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20795_20827 = null;
var count__20796_20828 = (0);
var i__20797_20829 = (0);
while(true){
if((i__20797_20829 < count__20796_20828)){
var f_20830 = cljs.core._nth.call(null,chunk__20795_20827,i__20797_20829);
cljs.core.println.call(null,"  ",f_20830);


var G__20831 = seq__20794_20826;
var G__20832 = chunk__20795_20827;
var G__20833 = count__20796_20828;
var G__20834 = (i__20797_20829 + (1));
seq__20794_20826 = G__20831;
chunk__20795_20827 = G__20832;
count__20796_20828 = G__20833;
i__20797_20829 = G__20834;
continue;
} else {
var temp__5804__auto___20835 = cljs.core.seq.call(null,seq__20794_20826);
if(temp__5804__auto___20835){
var seq__20794_20836__$1 = temp__5804__auto___20835;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20794_20836__$1)){
var c__4556__auto___20837 = cljs.core.chunk_first.call(null,seq__20794_20836__$1);
var G__20838 = cljs.core.chunk_rest.call(null,seq__20794_20836__$1);
var G__20839 = c__4556__auto___20837;
var G__20840 = cljs.core.count.call(null,c__4556__auto___20837);
var G__20841 = (0);
seq__20794_20826 = G__20838;
chunk__20795_20827 = G__20839;
count__20796_20828 = G__20840;
i__20797_20829 = G__20841;
continue;
} else {
var f_20842 = cljs.core.first.call(null,seq__20794_20836__$1);
cljs.core.println.call(null,"  ",f_20842);


var G__20843 = cljs.core.next.call(null,seq__20794_20836__$1);
var G__20844 = null;
var G__20845 = (0);
var G__20846 = (0);
seq__20794_20826 = G__20843;
chunk__20795_20827 = G__20844;
count__20796_20828 = G__20845;
i__20797_20829 = G__20846;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_20847 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_20847);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_20847)))?cljs.core.second.call(null,arglists_20847):arglists_20847));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20798_20848 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20799_20849 = null;
var count__20800_20850 = (0);
var i__20801_20851 = (0);
while(true){
if((i__20801_20851 < count__20800_20850)){
var vec__20812_20852 = cljs.core._nth.call(null,chunk__20799_20849,i__20801_20851);
var name_20853 = cljs.core.nth.call(null,vec__20812_20852,(0),null);
var map__20815_20854 = cljs.core.nth.call(null,vec__20812_20852,(1),null);
var map__20815_20855__$1 = (((((!((map__20815_20854 == null))))?(((((map__20815_20854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20815_20854.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20815_20854):map__20815_20854);
var doc_20856 = cljs.core.get.call(null,map__20815_20855__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20857 = cljs.core.get.call(null,map__20815_20855__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_20853);

cljs.core.println.call(null," ",arglists_20857);

if(cljs.core.truth_(doc_20856)){
cljs.core.println.call(null," ",doc_20856);
} else {
}


var G__20858 = seq__20798_20848;
var G__20859 = chunk__20799_20849;
var G__20860 = count__20800_20850;
var G__20861 = (i__20801_20851 + (1));
seq__20798_20848 = G__20858;
chunk__20799_20849 = G__20859;
count__20800_20850 = G__20860;
i__20801_20851 = G__20861;
continue;
} else {
var temp__5804__auto___20862 = cljs.core.seq.call(null,seq__20798_20848);
if(temp__5804__auto___20862){
var seq__20798_20863__$1 = temp__5804__auto___20862;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20798_20863__$1)){
var c__4556__auto___20864 = cljs.core.chunk_first.call(null,seq__20798_20863__$1);
var G__20865 = cljs.core.chunk_rest.call(null,seq__20798_20863__$1);
var G__20866 = c__4556__auto___20864;
var G__20867 = cljs.core.count.call(null,c__4556__auto___20864);
var G__20868 = (0);
seq__20798_20848 = G__20865;
chunk__20799_20849 = G__20866;
count__20800_20850 = G__20867;
i__20801_20851 = G__20868;
continue;
} else {
var vec__20817_20869 = cljs.core.first.call(null,seq__20798_20863__$1);
var name_20870 = cljs.core.nth.call(null,vec__20817_20869,(0),null);
var map__20820_20871 = cljs.core.nth.call(null,vec__20817_20869,(1),null);
var map__20820_20872__$1 = (((((!((map__20820_20871 == null))))?(((((map__20820_20871.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20820_20871.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20820_20871):map__20820_20871);
var doc_20873 = cljs.core.get.call(null,map__20820_20872__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20874 = cljs.core.get.call(null,map__20820_20872__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_20870);

cljs.core.println.call(null," ",arglists_20874);

if(cljs.core.truth_(doc_20873)){
cljs.core.println.call(null," ",doc_20873);
} else {
}


var G__20875 = cljs.core.next.call(null,seq__20798_20863__$1);
var G__20876 = null;
var G__20877 = (0);
var G__20878 = (0);
seq__20798_20848 = G__20875;
chunk__20799_20849 = G__20876;
count__20800_20850 = G__20877;
i__20801_20851 = G__20878;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.call(null,"Spec");

var seq__20822 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__20823 = null;
var count__20824 = (0);
var i__20825 = (0);
while(true){
if((i__20825 < count__20824)){
var role = cljs.core._nth.call(null,chunk__20823,i__20825);
var temp__5804__auto___20879__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5804__auto___20879__$1)){
var spec_20880 = temp__5804__auto___20879__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_20880));
} else {
}


var G__20881 = seq__20822;
var G__20882 = chunk__20823;
var G__20883 = count__20824;
var G__20884 = (i__20825 + (1));
seq__20822 = G__20881;
chunk__20823 = G__20882;
count__20824 = G__20883;
i__20825 = G__20884;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq.call(null,seq__20822);
if(temp__5804__auto____$1){
var seq__20822__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20822__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__20822__$1);
var G__20885 = cljs.core.chunk_rest.call(null,seq__20822__$1);
var G__20886 = c__4556__auto__;
var G__20887 = cljs.core.count.call(null,c__4556__auto__);
var G__20888 = (0);
seq__20822 = G__20885;
chunk__20823 = G__20886;
count__20824 = G__20887;
i__20825 = G__20888;
continue;
} else {
var role = cljs.core.first.call(null,seq__20822__$1);
var temp__5804__auto___20889__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5804__auto___20889__$2)){
var spec_20890 = temp__5804__auto___20889__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_20890));
} else {
}


var G__20891 = cljs.core.next.call(null,seq__20822__$1);
var G__20892 = null;
var G__20893 = (0);
var G__20894 = (0);
seq__20822 = G__20891;
chunk__20823 = G__20892;
count__20824 = G__20893;
i__20825 = G__20894;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__20895 = cljs.core.conj.call(null,via,t);
var G__20896 = cljs.core.ex_cause.call(null,t);
via = G__20895;
t = G__20896;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__20899 = datafied_throwable;
var map__20899__$1 = (((((!((map__20899 == null))))?(((((map__20899.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20899.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20899):map__20899);
var via = cljs.core.get.call(null,map__20899__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__20899__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__20899__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__20900 = cljs.core.last.call(null,via);
var map__20900__$1 = (((((!((map__20900 == null))))?(((((map__20900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20900.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20900):map__20900);
var type = cljs.core.get.call(null,map__20900__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__20900__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__20900__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__20901 = data;
var map__20901__$1 = (((((!((map__20901 == null))))?(((((map__20901.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20901.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20901):map__20901);
var problems = cljs.core.get.call(null,map__20901__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__20901__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__20901__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__20902 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__20902__$1 = (((((!((map__20902 == null))))?(((((map__20902.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20902.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20902):map__20902);
var top_data = map__20902__$1;
var source = cljs.core.get.call(null,map__20902__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__20907 = phase;
var G__20907__$1 = (((G__20907 instanceof cljs.core.Keyword))?G__20907.fqn:null);
switch (G__20907__$1) {
case "read-source":
var map__20908 = data;
var map__20908__$1 = (((((!((map__20908 == null))))?(((((map__20908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20908.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20908):map__20908);
var line = cljs.core.get.call(null,map__20908__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__20908__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__20910 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__20910__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__20910,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20910);
var G__20910__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__20910__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20910__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__20910__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20910__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__20911 = top_data;
var G__20911__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__20911,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20911);
var G__20911__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__20911__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20911__$1);
var G__20911__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__20911__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20911__$2);
var G__20911__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__20911__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20911__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__20911__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20911__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__20912 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__20912,(0),null);
var method = cljs.core.nth.call(null,vec__20912,(1),null);
var file = cljs.core.nth.call(null,vec__20912,(2),null);
var line = cljs.core.nth.call(null,vec__20912,(3),null);
var G__20915 = top_data;
var G__20915__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__20915,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__20915);
var G__20915__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__20915__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__20915__$1);
var G__20915__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__20915__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__20915__$2);
var G__20915__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__20915__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20915__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__20915__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20915__$4;
}

break;
case "execution":
var vec__20916 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__20916,(0),null);
var method = cljs.core.nth.call(null,vec__20916,(1),null);
var file = cljs.core.nth.call(null,vec__20916,(2),null);
var line = cljs.core.nth.call(null,vec__20916,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__20898_SHARP_){
var or__4126__auto__ = (p1__20898_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__20898_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__20919 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__20919__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__20919,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__20919);
var G__20919__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__20919__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20919__$1);
var G__20919__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.call(null,G__20919__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__20919__$2);
var G__20919__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__20919__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__20919__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__20919__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20919__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20907__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__20923){
var map__20924 = p__20923;
var map__20924__$1 = (((((!((map__20924 == null))))?(((((map__20924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20924.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20924):map__20924);
var triage_data = map__20924__$1;
var phase = cljs.core.get.call(null,map__20924__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__20924__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__20924__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__20924__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__20924__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__20924__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__20924__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__20924__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__20926 = phase;
var G__20926__$1 = (((G__20926 instanceof cljs.core.Keyword))?G__20926.fqn:null);
switch (G__20926__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20927_20936 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20928_20937 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20929_20938 = true;
var _STAR_print_fn_STAR__temp_val__20930_20939 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20929_20938);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20930_20939);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__20921_SHARP_){
return cljs.core.dissoc.call(null,p1__20921_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20928_20937);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20927_20936);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20931_20940 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20932_20941 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20933_20942 = true;
var _STAR_print_fn_STAR__temp_val__20934_20943 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20933_20942);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20934_20943);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__20922_SHARP_){
return cljs.core.dissoc.call(null,p1__20922_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20932_20941);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20931_20940);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20926__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
