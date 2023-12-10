// Compiled by ClojureScript 1.10.773 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('react_dom');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.protocols');
goog.require('reagent.ratom');
reagent.dom.global$module$react_dom = goog.global["ReactDOM"];
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return reagent.dom.global$module$react_dom.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__10059 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__10060 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__10060);

try{return reagent.dom.global$module$react_dom.render(comp.call(null),container,(function (){
var _STAR_always_update_STAR__orig_val__10061 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__10062 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__10062);

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render.call(null);

if((!((callback == null)))){
return callback.call(null);
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__10061);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__10059);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__10064 = arguments.length;
switch (G__10064) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,reagent.impl.template._STAR_current_default_compiler_STAR_);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_.call(null);

var vec__10065 = ((cljs.core.map_QMARK_.call(null,callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compiler","compiler",-267926731).cljs$core$IFn$_invoke$arity$1(callback_or_compiler),new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null):((cljs.core.fn_QMARK_.call(null,callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template._STAR_current_default_compiler_STAR_,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,null], null)
));
var compiler = cljs.core.nth.call(null,vec__10065,(0),null);
var callback = cljs.core.nth.call(null,vec__10065,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element.call(null,compiler,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return reagent.dom.global$module$react_dom.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__10069_10085 = cljs.core.seq.call(null,cljs.core.deref.call(null,reagent.dom.roots));
var chunk__10070_10086 = null;
var count__10071_10087 = (0);
var i__10072_10088 = (0);
while(true){
if((i__10072_10088 < count__10071_10087)){
var vec__10079_10089 = cljs.core._nth.call(null,chunk__10070_10086,i__10072_10088);
var container_10090 = cljs.core.nth.call(null,vec__10079_10089,(0),null);
var comp_10091 = cljs.core.nth.call(null,vec__10079_10089,(1),null);
reagent.dom.re_render_component.call(null,comp_10091,container_10090);


var G__10092 = seq__10069_10085;
var G__10093 = chunk__10070_10086;
var G__10094 = count__10071_10087;
var G__10095 = (i__10072_10088 + (1));
seq__10069_10085 = G__10092;
chunk__10070_10086 = G__10093;
count__10071_10087 = G__10094;
i__10072_10088 = G__10095;
continue;
} else {
var temp__5804__auto___10096 = cljs.core.seq.call(null,seq__10069_10085);
if(temp__5804__auto___10096){
var seq__10069_10097__$1 = temp__5804__auto___10096;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10069_10097__$1)){
var c__4556__auto___10098 = cljs.core.chunk_first.call(null,seq__10069_10097__$1);
var G__10099 = cljs.core.chunk_rest.call(null,seq__10069_10097__$1);
var G__10100 = c__4556__auto___10098;
var G__10101 = cljs.core.count.call(null,c__4556__auto___10098);
var G__10102 = (0);
seq__10069_10085 = G__10099;
chunk__10070_10086 = G__10100;
count__10071_10087 = G__10101;
i__10072_10088 = G__10102;
continue;
} else {
var vec__10082_10103 = cljs.core.first.call(null,seq__10069_10097__$1);
var container_10104 = cljs.core.nth.call(null,vec__10082_10103,(0),null);
var comp_10105 = cljs.core.nth.call(null,vec__10082_10103,(1),null);
reagent.dom.re_render_component.call(null,comp_10105,container_10104);


var G__10106 = cljs.core.next.call(null,seq__10069_10097__$1);
var G__10107 = null;
var G__10108 = (0);
var G__10109 = (0);
seq__10069_10085 = G__10106;
chunk__10070_10086 = G__10107;
count__10071_10087 = G__10108;
i__10072_10088 = G__10109;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render.call(null);
});

//# sourceMappingURL=dom.js.map
