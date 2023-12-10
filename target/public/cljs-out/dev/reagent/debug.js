// Compiled by ClojureScript 1.10.773 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__9615__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__9615 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9616__i = 0, G__9616__a = new Array(arguments.length -  0);
while (G__9616__i < G__9616__a.length) {G__9616__a[G__9616__i] = arguments[G__9616__i + 0]; ++G__9616__i;}
  args = new cljs.core.IndexedSeq(G__9616__a,0,null);
} 
return G__9615__delegate.call(this,args);};
G__9615.cljs$lang$maxFixedArity = 0;
G__9615.cljs$lang$applyTo = (function (arglist__9617){
var args = cljs.core.seq(arglist__9617);
return G__9615__delegate(args);
});
G__9615.cljs$core$IFn$_invoke$arity$variadic = G__9615__delegate;
return G__9615;
})()
);

(o.error = (function() { 
var G__9618__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__9618 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9619__i = 0, G__9619__a = new Array(arguments.length -  0);
while (G__9619__i < G__9619__a.length) {G__9619__a[G__9619__i] = arguments[G__9619__i + 0]; ++G__9619__i;}
  args = new cljs.core.IndexedSeq(G__9619__a,0,null);
} 
return G__9618__delegate.call(this,args);};
G__9618.cljs$lang$maxFixedArity = 0;
G__9618.cljs$lang$applyTo = (function (arglist__9620){
var args = cljs.core.seq(arglist__9620);
return G__9618__delegate(args);
});
G__9618.cljs$core$IFn$_invoke$arity$variadic = G__9618__delegate;
return G__9618;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map
