// Compiled by ClojureScript 1.10.773 {}
goog.provide('reagent_mui.base.select_unstyled_context');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('_CIRCA_mui.base.SelectUnstyled');
goog.require('reagent_mui.util');
reagent_mui.base.select_unstyled_context.global$module$_CIRCA_mui$base$SelectUnstyled = goog.global["MuiBaseSelectUnstyled"];
reagent_mui.base.select_unstyled_context.select_unstyled_context_provider = (function reagent_mui$base$select_unstyled_context$select_unstyled_context_provider(var_args){
var args__4742__auto__ = [];
var len__4736__auto___17078 = arguments.length;
var i__4737__auto___17079 = (0);
while(true){
if((i__4737__auto___17079 < len__4736__auto___17078)){
args__4742__auto__.push((arguments[i__4737__auto___17079]));

var G__17080 = (i__4737__auto___17079 + (1));
i__4737__auto___17079 = G__17080;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return reagent_mui.base.select_unstyled_context.select_unstyled_context_provider.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(reagent_mui.base.select_unstyled_context.select_unstyled_context_provider.cljs$core$IFn$_invoke$arity$variadic = (function (p__17075,children){
var map__17076 = p__17075;
var map__17076__$1 = (((((!((map__17076 == null))))?(((((map__17076.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17076.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17076):map__17076);
var value = cljs.core.get.call(null,map__17076__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),reagent_mui.base.select_unstyled_context.global$module$_CIRCA_mui$base$SelectUnstyled.SelectUnstyledContext.Provider,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),reagent_mui.util.clj__GT_js_SINGLEQUOTE_.call(null,value)], null),children], null);
}));

(reagent_mui.base.select_unstyled_context.select_unstyled_context_provider.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(reagent_mui.base.select_unstyled_context.select_unstyled_context_provider.cljs$lang$applyTo = (function (seq17073){
var G__17074 = cljs.core.first.call(null,seq17073);
var seq17073__$1 = cljs.core.next.call(null,seq17073);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17074,seq17073__$1);
}));


//# sourceMappingURL=select_unstyled_context.js.map
