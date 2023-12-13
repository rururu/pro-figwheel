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
var G__21625__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__21625 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21626__i = 0, G__21626__a = new Array(arguments.length -  0);
while (G__21626__i < G__21626__a.length) {G__21626__a[G__21626__i] = arguments[G__21626__i + 0]; ++G__21626__i;}
  args = new cljs.core.IndexedSeq(G__21626__a,0,null);
} 
return G__21625__delegate.call(this,args);};
G__21625.cljs$lang$maxFixedArity = 0;
G__21625.cljs$lang$applyTo = (function (arglist__21627){
var args = cljs.core.seq(arglist__21627);
return G__21625__delegate(args);
});
G__21625.cljs$core$IFn$_invoke$arity$variadic = G__21625__delegate;
return G__21625;
})()
);

(o.error = (function() { 
var G__21628__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__21628 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21629__i = 0, G__21629__a = new Array(arguments.length -  0);
while (G__21629__i < G__21629__a.length) {G__21629__a[G__21629__i] = arguments[G__21629__i + 0]; ++G__21629__i;}
  args = new cljs.core.IndexedSeq(G__21629__a,0,null);
} 
return G__21628__delegate.call(this,args);};
G__21628.cljs$lang$maxFixedArity = 0;
G__21628.cljs$lang$applyTo = (function (arglist__21630){
var args = cljs.core.seq(arglist__21630);
return G__21628__delegate(args);
});
G__21628.cljs$core$IFn$_invoke$arity$variadic = G__21628__delegate;
return G__21628;
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
