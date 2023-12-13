// Compiled by ClojureScript 1.10.773 {}
goog.provide('reagent_mui.base.select_unstyled_context');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('_CIRCA_mui.base.SelectUnstyled');
goog.require('reagent_mui.util');
reagent_mui.base.select_unstyled_context.global$module$_CIRCA_mui$base$SelectUnstyled = goog.global["MuiBaseSelectUnstyled"];
reagent_mui.base.select_unstyled_context.select_unstyled_context_provider = (function reagent_mui$base$select_unstyled_context$select_unstyled_context_provider(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23268 = arguments.length;
var i__4737__auto___23269 = (0);
while(true){
if((i__4737__auto___23269 < len__4736__auto___23268)){
args__4742__auto__.push((arguments[i__4737__auto___23269]));

var G__23270 = (i__4737__auto___23269 + (1));
i__4737__auto___23269 = G__23270;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return reagent_mui.base.select_unstyled_context.select_unstyled_context_provider.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(reagent_mui.base.select_unstyled_context.select_unstyled_context_provider.cljs$core$IFn$_invoke$arity$variadic = (function (p__23265,children){
var map__23266 = p__23265;
var map__23266__$1 = (((((!((map__23266 == null))))?(((((map__23266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23266):map__23266);
var value = cljs.core.get.call(null,map__23266__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),reagent_mui.base.select_unstyled_context.global$module$_CIRCA_mui$base$SelectUnstyled.SelectUnstyledContext.Provider,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),reagent_mui.util.clj__GT_js_SINGLEQUOTE_.call(null,value)], null),children], null);
}));

(reagent_mui.base.select_unstyled_context.select_unstyled_context_provider.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(reagent_mui.base.select_unstyled_context.select_unstyled_context_provider.cljs$lang$applyTo = (function (seq23263){
var G__23264 = cljs.core.first.call(null,seq23263);
var seq23263__$1 = cljs.core.next.call(null,seq23263);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23264,seq23263__$1);
}));


//# sourceMappingURL=select_unstyled_context.js.map
