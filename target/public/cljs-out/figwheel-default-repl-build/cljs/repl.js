// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__13415){
var map__13416 = p__13415;
var map__13416__$1 = (((((!((map__13416 == null))))?(((((map__13416.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13416.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13416):map__13416);
var m = map__13416__$1;
var n = cljs.core.get.call(null,map__13416__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__13416__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__13418_13450 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__13419_13451 = null;
var count__13420_13452 = (0);
var i__13421_13453 = (0);
while(true){
if((i__13421_13453 < count__13420_13452)){
var f_13454 = cljs.core._nth.call(null,chunk__13419_13451,i__13421_13453);
cljs.core.println.call(null,"  ",f_13454);


var G__13455 = seq__13418_13450;
var G__13456 = chunk__13419_13451;
var G__13457 = count__13420_13452;
var G__13458 = (i__13421_13453 + (1));
seq__13418_13450 = G__13455;
chunk__13419_13451 = G__13456;
count__13420_13452 = G__13457;
i__13421_13453 = G__13458;
continue;
} else {
var temp__5804__auto___13459 = cljs.core.seq.call(null,seq__13418_13450);
if(temp__5804__auto___13459){
var seq__13418_13460__$1 = temp__5804__auto___13459;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13418_13460__$1)){
var c__4556__auto___13461 = cljs.core.chunk_first.call(null,seq__13418_13460__$1);
var G__13462 = cljs.core.chunk_rest.call(null,seq__13418_13460__$1);
var G__13463 = c__4556__auto___13461;
var G__13464 = cljs.core.count.call(null,c__4556__auto___13461);
var G__13465 = (0);
seq__13418_13450 = G__13462;
chunk__13419_13451 = G__13463;
count__13420_13452 = G__13464;
i__13421_13453 = G__13465;
continue;
} else {
var f_13466 = cljs.core.first.call(null,seq__13418_13460__$1);
cljs.core.println.call(null,"  ",f_13466);


var G__13467 = cljs.core.next.call(null,seq__13418_13460__$1);
var G__13468 = null;
var G__13469 = (0);
var G__13470 = (0);
seq__13418_13450 = G__13467;
chunk__13419_13451 = G__13468;
count__13420_13452 = G__13469;
i__13421_13453 = G__13470;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_13471 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_13471);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_13471)))?cljs.core.second.call(null,arglists_13471):arglists_13471));
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
var seq__13422_13472 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__13423_13473 = null;
var count__13424_13474 = (0);
var i__13425_13475 = (0);
while(true){
if((i__13425_13475 < count__13424_13474)){
var vec__13436_13476 = cljs.core._nth.call(null,chunk__13423_13473,i__13425_13475);
var name_13477 = cljs.core.nth.call(null,vec__13436_13476,(0),null);
var map__13439_13478 = cljs.core.nth.call(null,vec__13436_13476,(1),null);
var map__13439_13479__$1 = (((((!((map__13439_13478 == null))))?(((((map__13439_13478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13439_13478.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13439_13478):map__13439_13478);
var doc_13480 = cljs.core.get.call(null,map__13439_13479__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_13481 = cljs.core.get.call(null,map__13439_13479__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_13477);

cljs.core.println.call(null," ",arglists_13481);

if(cljs.core.truth_(doc_13480)){
cljs.core.println.call(null," ",doc_13480);
} else {
}


var G__13482 = seq__13422_13472;
var G__13483 = chunk__13423_13473;
var G__13484 = count__13424_13474;
var G__13485 = (i__13425_13475 + (1));
seq__13422_13472 = G__13482;
chunk__13423_13473 = G__13483;
count__13424_13474 = G__13484;
i__13425_13475 = G__13485;
continue;
} else {
var temp__5804__auto___13486 = cljs.core.seq.call(null,seq__13422_13472);
if(temp__5804__auto___13486){
var seq__13422_13487__$1 = temp__5804__auto___13486;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13422_13487__$1)){
var c__4556__auto___13488 = cljs.core.chunk_first.call(null,seq__13422_13487__$1);
var G__13489 = cljs.core.chunk_rest.call(null,seq__13422_13487__$1);
var G__13490 = c__4556__auto___13488;
var G__13491 = cljs.core.count.call(null,c__4556__auto___13488);
var G__13492 = (0);
seq__13422_13472 = G__13489;
chunk__13423_13473 = G__13490;
count__13424_13474 = G__13491;
i__13425_13475 = G__13492;
continue;
} else {
var vec__13441_13493 = cljs.core.first.call(null,seq__13422_13487__$1);
var name_13494 = cljs.core.nth.call(null,vec__13441_13493,(0),null);
var map__13444_13495 = cljs.core.nth.call(null,vec__13441_13493,(1),null);
var map__13444_13496__$1 = (((((!((map__13444_13495 == null))))?(((((map__13444_13495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13444_13495.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13444_13495):map__13444_13495);
var doc_13497 = cljs.core.get.call(null,map__13444_13496__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_13498 = cljs.core.get.call(null,map__13444_13496__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_13494);

cljs.core.println.call(null," ",arglists_13498);

if(cljs.core.truth_(doc_13497)){
cljs.core.println.call(null," ",doc_13497);
} else {
}


var G__13499 = cljs.core.next.call(null,seq__13422_13487__$1);
var G__13500 = null;
var G__13501 = (0);
var G__13502 = (0);
seq__13422_13472 = G__13499;
chunk__13423_13473 = G__13500;
count__13424_13474 = G__13501;
i__13425_13475 = G__13502;
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

var seq__13446 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__13447 = null;
var count__13448 = (0);
var i__13449 = (0);
while(true){
if((i__13449 < count__13448)){
var role = cljs.core._nth.call(null,chunk__13447,i__13449);
var temp__5804__auto___13503__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5804__auto___13503__$1)){
var spec_13504 = temp__5804__auto___13503__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_13504));
} else {
}


var G__13505 = seq__13446;
var G__13506 = chunk__13447;
var G__13507 = count__13448;
var G__13508 = (i__13449 + (1));
seq__13446 = G__13505;
chunk__13447 = G__13506;
count__13448 = G__13507;
i__13449 = G__13508;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq.call(null,seq__13446);
if(temp__5804__auto____$1){
var seq__13446__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13446__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__13446__$1);
var G__13509 = cljs.core.chunk_rest.call(null,seq__13446__$1);
var G__13510 = c__4556__auto__;
var G__13511 = cljs.core.count.call(null,c__4556__auto__);
var G__13512 = (0);
seq__13446 = G__13509;
chunk__13447 = G__13510;
count__13448 = G__13511;
i__13449 = G__13512;
continue;
} else {
var role = cljs.core.first.call(null,seq__13446__$1);
var temp__5804__auto___13513__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5804__auto___13513__$2)){
var spec_13514 = temp__5804__auto___13513__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_13514));
} else {
}


var G__13515 = cljs.core.next.call(null,seq__13446__$1);
var G__13516 = null;
var G__13517 = (0);
var G__13518 = (0);
seq__13446 = G__13515;
chunk__13447 = G__13516;
count__13448 = G__13517;
i__13449 = G__13518;
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
var G__13519 = cljs.core.conj.call(null,via,t);
var G__13520 = cljs.core.ex_cause.call(null,t);
via = G__13519;
t = G__13520;
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
var map__13523 = datafied_throwable;
var map__13523__$1 = (((((!((map__13523 == null))))?(((((map__13523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13523.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13523):map__13523);
var via = cljs.core.get.call(null,map__13523__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__13523__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__13523__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__13524 = cljs.core.last.call(null,via);
var map__13524__$1 = (((((!((map__13524 == null))))?(((((map__13524.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13524.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13524):map__13524);
var type = cljs.core.get.call(null,map__13524__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__13524__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__13524__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__13525 = data;
var map__13525__$1 = (((((!((map__13525 == null))))?(((((map__13525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13525.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13525):map__13525);
var problems = cljs.core.get.call(null,map__13525__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__13525__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__13525__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__13526 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__13526__$1 = (((((!((map__13526 == null))))?(((((map__13526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13526.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13526):map__13526);
var top_data = map__13526__$1;
var source = cljs.core.get.call(null,map__13526__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__13531 = phase;
var G__13531__$1 = (((G__13531 instanceof cljs.core.Keyword))?G__13531.fqn:null);
switch (G__13531__$1) {
case "read-source":
var map__13532 = data;
var map__13532__$1 = (((((!((map__13532 == null))))?(((((map__13532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13532.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13532):map__13532);
var line = cljs.core.get.call(null,map__13532__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__13532__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__13534 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__13534__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__13534,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__13534);
var G__13534__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__13534__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__13534__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__13534__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__13534__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__13535 = top_data;
var G__13535__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__13535,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__13535);
var G__13535__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__13535__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__13535__$1);
var G__13535__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__13535__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__13535__$2);
var G__13535__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__13535__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__13535__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__13535__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__13535__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__13536 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__13536,(0),null);
var method = cljs.core.nth.call(null,vec__13536,(1),null);
var file = cljs.core.nth.call(null,vec__13536,(2),null);
var line = cljs.core.nth.call(null,vec__13536,(3),null);
var G__13539 = top_data;
var G__13539__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__13539,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__13539);
var G__13539__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__13539__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__13539__$1);
var G__13539__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__13539__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__13539__$2);
var G__13539__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__13539__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__13539__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__13539__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__13539__$4;
}

break;
case "execution":
var vec__13540 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__13540,(0),null);
var method = cljs.core.nth.call(null,vec__13540,(1),null);
var file = cljs.core.nth.call(null,vec__13540,(2),null);
var line = cljs.core.nth.call(null,vec__13540,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__13522_SHARP_){
var or__4126__auto__ = (p1__13522_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__13522_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__13543 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__13543__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__13543,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__13543);
var G__13543__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__13543__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__13543__$1);
var G__13543__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__13543__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__13543__$2);
var G__13543__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__13543__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__13543__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__13543__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__13543__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13531__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__13547){
var map__13548 = p__13547;
var map__13548__$1 = (((((!((map__13548 == null))))?(((((map__13548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13548.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13548):map__13548);
var triage_data = map__13548__$1;
var phase = cljs.core.get.call(null,map__13548__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__13548__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__13548__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__13548__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__13548__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__13548__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__13548__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__13548__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__13550 = phase;
var G__13550__$1 = (((G__13550 instanceof cljs.core.Keyword))?G__13550.fqn:null);
switch (G__13550__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__13551_13560 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__13552_13561 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__13553_13562 = true;
var _STAR_print_fn_STAR__temp_val__13554_13563 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__13553_13562);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__13554_13563);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__13545_SHARP_){
return cljs.core.dissoc.call(null,p1__13545_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__13552_13561);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__13551_13560);
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
var _STAR_print_newline_STAR__orig_val__13555_13564 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__13556_13565 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__13557_13566 = true;
var _STAR_print_fn_STAR__temp_val__13558_13567 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__13557_13566);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__13558_13567);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__13546_SHARP_){
return cljs.core.dissoc.call(null,p1__13546_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__13556_13565);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__13555_13564);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13550__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
