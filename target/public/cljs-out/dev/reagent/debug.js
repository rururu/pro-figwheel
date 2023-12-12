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
var G__10108__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__10108 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10109__i = 0, G__10109__a = new Array(arguments.length -  0);
while (G__10109__i < G__10109__a.length) {G__10109__a[G__10109__i] = arguments[G__10109__i + 0]; ++G__10109__i;}
  args = new cljs.core.IndexedSeq(G__10109__a,0,null);
} 
return G__10108__delegate.call(this,args);};
G__10108.cljs$lang$maxFixedArity = 0;
G__10108.cljs$lang$applyTo = (function (arglist__10110){
var args = cljs.core.seq(arglist__10110);
return G__10108__delegate(args);
});
G__10108.cljs$core$IFn$_invoke$arity$variadic = G__10108__delegate;
return G__10108;
})()
);

(o.error = (function() { 
var G__10111__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__10111 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10112__i = 0, G__10112__a = new Array(arguments.length -  0);
while (G__10112__i < G__10112__a.length) {G__10112__a[G__10112__i] = arguments[G__10112__i + 0]; ++G__10112__i;}
  args = new cljs.core.IndexedSeq(G__10112__a,0,null);
} 
return G__10111__delegate.call(this,args);};
G__10111.cljs$lang$maxFixedArity = 0;
G__10111.cljs$lang$applyTo = (function (arglist__10113){
var args = cljs.core.seq(arglist__10113);
return G__10111__delegate(args);
});
G__10111.cljs$core$IFn$_invoke$arity$variadic = G__10111__delegate;
return G__10111;
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
