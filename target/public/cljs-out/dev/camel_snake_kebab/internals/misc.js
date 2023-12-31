// Compiled by ClojureScript 1.10.773 {}
goog.provide('camel_snake_kebab.internals.misc');
goog.require('cljs.core');
goog.require('camel_snake_kebab.internals.string_separator');
goog.require('clojure.string');
camel_snake_kebab.internals.misc.convert_case = (function camel_snake_kebab$internals$misc$convert_case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___22499 = arguments.length;
var i__4737__auto___22500 = (0);
while(true){
if((i__4737__auto___22500 < len__4736__auto___22499)){
args__4742__auto__.push((arguments[i__4737__auto___22500]));

var G__22501 = (i__4737__auto___22500 + (1));
i__4737__auto___22500 = G__22501;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,p__22493){
var map__22494 = p__22493;
var map__22494__$1 = (((((!((map__22494 == null))))?(((((map__22494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22494.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22494):map__22494);
var separator = cljs.core.get.call(null,map__22494__$1,new cljs.core.Keyword(null,"separator","separator",-1628749125),camel_snake_kebab.internals.string_separator.generic_separator);
var temp__5802__auto__ = cljs.core.seq.call(null,camel_snake_kebab.internals.string_separator.split.call(null,separator,s));
if(temp__5802__auto__){
var vec__22496 = temp__5802__auto__;
var seq__22497 = cljs.core.seq.call(null,vec__22496);
var first__22498 = cljs.core.first.call(null,seq__22497);
var seq__22497__$1 = cljs.core.next.call(null,seq__22497);
var first = first__22498;
var rest = seq__22497__$1;
return clojure.string.join.call(null,sep,cljs.core.cons.call(null,first_fn.call(null,first),cljs.core.map.call(null,rest_fn,rest)));
} else {
return "";
}
}));

(camel_snake_kebab.internals.misc.convert_case.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(camel_snake_kebab.internals.misc.convert_case.cljs$lang$applyTo = (function (seq22488){
var G__22489 = cljs.core.first.call(null,seq22488);
var seq22488__$1 = cljs.core.next.call(null,seq22488);
var G__22490 = cljs.core.first.call(null,seq22488__$1);
var seq22488__$2 = cljs.core.next.call(null,seq22488__$1);
var G__22491 = cljs.core.first.call(null,seq22488__$2);
var seq22488__$3 = cljs.core.next.call(null,seq22488__$2);
var G__22492 = cljs.core.first.call(null,seq22488__$3);
var seq22488__$4 = cljs.core.next.call(null,seq22488__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22489,G__22490,G__22491,G__22492,seq22488__$4);
}));

camel_snake_kebab.internals.misc.upper_case_http_headers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, ["WWW",null,"TE",null,"CSP",null,"CPU",null,"IP",null,"WAP",null,"HTTP",null,"DNT",null,"UA",null,"ATT",null,"SSL",null,"MD5",null,"XSS",null], null), null);
camel_snake_kebab.internals.misc.capitalize_http_header = (function camel_snake_kebab$internals$misc$capitalize_http_header(s){
var or__4126__auto__ = camel_snake_kebab.internals.misc.upper_case_http_headers.call(null,clojure.string.upper_case.call(null,s));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return clojure.string.capitalize.call(null,s);
}
});

//# sourceMappingURL=misc.js.map
