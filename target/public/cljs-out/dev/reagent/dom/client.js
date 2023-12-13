// Compiled by ClojureScript 1.10.773 {}
goog.provide('reagent.dom.client');
goog.require('cljs.core');
goog.require('react');
goog.require('react_dom.client');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.protocols');
goog.require('reagent.impl.template');
goog.require('reagent.impl.util');
goog.require('goog.object');
reagent.dom.client.global$module$react = goog.global["React"];
reagent.dom.client.global$module$react_dom$client = goog.global["ReactDOM"];
/**
 * Create a React Root connected to given container DOM element.
 */
reagent.dom.client.create_root = (function reagent$dom$client$create_root(container){
return reagent.dom.client.global$module$react_dom$client.createRoot(container);
});
/**
 * Unmount the given React Root
 */
reagent.dom.client.unmount = (function reagent$dom$client$unmount(root){
return root.unmount();
});
reagent.dom.client.reagent_root = (function reagent$dom$client$reagent_root(js_props){
var el = goog.object.get(js_props,"comp");
reagent.dom.client.global$module$react.useEffect((function (){
var _STAR_always_update_STAR__orig_val__23362 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__23363 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__23363);

try{reagent.impl.batching.flush_after_render.call(null);

return undefined;
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__23362);
}}));

var _STAR_always_update_STAR__orig_val__23364 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__23365 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__23365);

try{return el.call(null);
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__23364);
}});
/**
 * Render the given Reagent element (i.e. Hiccup data)
 *   into a given React root.
 */
reagent.dom.client.render = (function reagent$dom$client$render(var_args){
var G__23367 = arguments.length;
switch (G__23367) {
case 2:
return reagent.dom.client.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.client.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.client.render.cljs$core$IFn$_invoke$arity$2 = (function (root,el){
return reagent.dom.client.render.call(null,root,el,reagent.impl.template._STAR_current_default_compiler_STAR_);
}));

(reagent.dom.client.render.cljs$core$IFn$_invoke$arity$3 = (function (root,el,compiler){
var comp = (function (){
return reagent.impl.protocols.as_element.call(null,compiler,el);
});
return root.render(reagent.dom.client.global$module$react.createElement(reagent.dom.client.reagent_root,({"comp": comp})));
}));

(reagent.dom.client.render.cljs$lang$maxFixedArity = 3);

reagent.dom.client.hydrate_root = (function reagent$dom$client$hydrate_root(var_args){
var G__23370 = arguments.length;
switch (G__23370) {
case 2:
return reagent.dom.client.hydrate_root.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.client.hydrate_root.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.client.hydrate_root.cljs$core$IFn$_invoke$arity$2 = (function (container,el){
return reagent.dom.client.hydrate_root.call(null,container,el,null);
}));

(reagent.dom.client.hydrate_root.cljs$core$IFn$_invoke$arity$3 = (function (container,el,p__23371){
var map__23372 = p__23371;
var map__23372__$1 = (((((!((map__23372 == null))))?(((((map__23372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23372.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23372):map__23372);
var compiler = cljs.core.get.call(null,map__23372__$1,new cljs.core.Keyword(null,"compiler","compiler",-267926731),reagent.impl.template._STAR_current_default_compiler_STAR_);
var on_recoverable_error = cljs.core.get.call(null,map__23372__$1,new cljs.core.Keyword(null,"on-recoverable-error","on-recoverable-error",1651056576));
var identifier_prefix = cljs.core.get.call(null,map__23372__$1,new cljs.core.Keyword(null,"identifier-prefix","identifier-prefix",1929840008));
var comp = (function (){
return reagent.impl.protocols.as_element.call(null,compiler,el);
});
return reagent.dom.client.global$module$react_dom$client.hydrateRoot(container,reagent.dom.client.global$module$react.createElement(reagent.dom.client.reagent_root,({"comp": comp})));
}));

(reagent.dom.client.hydrate_root.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=client.js.map
