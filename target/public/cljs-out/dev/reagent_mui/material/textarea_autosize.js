// Compiled by ClojureScript 1.10.773 {}
goog.provide('reagent_mui.material.textarea_autosize');
goog.require('cljs.core');
goog.require('react');
goog.require('_CIRCA_mui.material.utils');
goog.require('reagent.core');
goog.require('goog.object');
goog.require('reagent_mui.util');
reagent_mui.material.textarea_autosize.global$module$react = goog.global["React"];
reagent_mui.material.textarea_autosize.global$module$_CIRCA_mui$material$utils = goog.global["MuiMaterialUtils"];
reagent_mui.material.textarea_autosize.different_QMARK_ = (function reagent_mui$material$textarea_autosize$different_QMARK_(a,b){
return ((1) < Math.abs(((function (){var or__4126__auto__ = a;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})() - (function (){var or__4126__auto__ = b;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})())));
});
reagent_mui.material.textarea_autosize.get_style_value = (function reagent_mui$material$textarea_autosize$get_style_value(computed_style,property){
var or__4126__auto__ = parseInt(goog.object.get(computed_style,property),(10));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
});
reagent_mui.material.textarea_autosize.react_textarea_autosize = reagent_mui.material.textarea_autosize.global$module$react.forwardRef((function reagent_mui$material$textarea_autosize$textarea_autosize(props,ref){
var props__$1 = reagent_mui.util.js__GT_clj_SINGLEQUOTE_.call(null,props);
var map__23189 = props__$1;
var map__23189__$1 = (((((!((map__23189 == null))))?(((((map__23189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23189.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23189):map__23189);
var on_change = cljs.core.get.call(null,map__23189__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var placeholder = cljs.core.get.call(null,map__23189__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var max_rows = cljs.core.get.call(null,map__23189__$1,new cljs.core.Keyword(null,"max-rows","max-rows",-2131113613));
var min_rows = cljs.core.get.call(null,map__23189__$1,new cljs.core.Keyword(null,"min-rows","min-rows",1428640765),(1));
var style = cljs.core.get.call(null,map__23189__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var value = cljs.core.get.call(null,map__23189__$1,new cljs.core.Keyword(null,"value","value",305978217));
var other_props = cljs.core.dissoc.call(null,props__$1,new cljs.core.Keyword(null,"input-ref","input-ref",575432746),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"max-rows","max-rows",-2131113613),new cljs.core.Keyword(null,"min-rows","min-rows",1428640765),new cljs.core.Keyword(null,"style","style",-496642736));
var controlled_QMARK_ = reagent_mui.util.use_ref.call(null,(!((value == null)))).current;
var input_ref = reagent_mui.util.use_ref.call(null,null);
var shadow_ref = reagent_mui.util.use_ref.call(null,null);
var renders = reagent_mui.util.use_ref.call(null,(0));
var handle_ref = reagent_mui.util.use_fork_ref.call(null,new cljs.core.Keyword(null,"input-ref","input-ref",575432746).cljs$core$IFn$_invoke$arity$1(props__$1),input_ref,ref);
var vec__23190 = reagent_mui.util.use_state.call(null,cljs.core.PersistentArrayMap.EMPTY);
var state = cljs.core.nth.call(null,vec__23190,(0),null);
var set_state = cljs.core.nth.call(null,vec__23190,(1),null);
var sync_height = reagent_mui.util.use_callback.call(null,(function (){
var input = input_ref.current;
var container_window = reagent_mui.material.textarea_autosize.global$module$_CIRCA_mui$material$utils.ownerWindow(input);
var shadow = shadow_ref.current;
var computed_style = container_window.getComputedStyle(input);
if((reagent_mui.material.textarea_autosize.get_style_value.call(null,computed_style,"width") === (0))){
return null;
} else {
(shadow.style.width = goog.object.get(computed_style,"width"));

(shadow.value = (function (){var or__4126__auto__ = input.value;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = placeholder;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return "x";
}
}
})());

if(cljs.core._EQ_.call(null,cljs.core.last.call(null,shadow.value),"\n")){
(shadow.value = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.value)," "].join(''));
} else {
}

var box_sizing = goog.object.get(computed_style,"box-sizing");
var padding = (reagent_mui.material.textarea_autosize.get_style_value.call(null,computed_style,"padding-bottom") + reagent_mui.material.textarea_autosize.get_style_value.call(null,computed_style,"padding-top"));
var border = (reagent_mui.material.textarea_autosize.get_style_value.call(null,computed_style,"border-bottom-width") + reagent_mui.material.textarea_autosize.get_style_value.call(null,computed_style,"border-top-width"));
var inner_height = shadow.scrollHeight;
var _ = (shadow.value = "x");
var single_row_height = shadow.scrollHeight;
var outer_height = (function (){var G__23194 = inner_height;
var G__23194__$1 = (cljs.core.truth_(min_rows)?(function (){var x__4214__auto__ = G__23194;
var y__4215__auto__ = ((new Number(min_rows)) * single_row_height);
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})():G__23194);
var G__23194__$2 = (cljs.core.truth_(max_rows)?(function (){var x__4217__auto__ = G__23194__$1;
var y__4218__auto__ = ((new Number(max_rows)) * single_row_height);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})():G__23194__$1);
var x__4214__auto__ = G__23194__$2;
var y__4215__auto__ = single_row_height;
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);

})();
var outer_height_style = ((cljs.core._EQ_.call(null,"border-box",box_sizing))?((outer_height + padding) + border):outer_height);
var overflow_QMARK_ = (!(reagent_mui.material.textarea_autosize.different_QMARK_.call(null,outer_height,inner_height)));
return set_state.call(null,(function (prev_state){
if((((renders.current < (20))) && ((((((outer_height_style > (0))) && (reagent_mui.material.textarea_autosize.different_QMARK_.call(null,new cljs.core.Keyword(null,"outer-height-style","outer-height-style",426760912).cljs$core$IFn$_invoke$arity$1(prev_state),outer_height_style)))) || (cljs.core.not_EQ_.call(null,overflow_QMARK_,new cljs.core.Keyword(null,"overflow?","overflow?",124924720).cljs$core$IFn$_invoke$arity$1(prev_state))))))){
reagent_mui.util.swap_ref.call(null,renders,cljs.core.inc);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"overflow?","overflow?",124924720),overflow_QMARK_,new cljs.core.Keyword(null,"outer-height-style","outer-height-style",426760912),outer_height_style], null);
} else {
if((((((!((typeof process !== 'undefined')))) || (cljs.core.not_EQ_.call(null,"production",process.env.NODE_ENV)))) && (cljs.core._EQ_.call(null,renders.current,(20))))){
console.error("Material-UI: too many re-renders. The layout is unstable.\nTextareaAutosize limits the number of renders to prevent an infinite loop");
} else {
}

return prev_state;
}
}));
}
}),[max_rows,min_rows,placeholder]);
var handle_change = (function (e){
reagent_mui.util.set_ref.call(null,renders,(0));

if(cljs.core.truth_(controlled_QMARK_)){
} else {
sync_height.call(null);
}

if(cljs.core.truth_(on_change)){
return on_change.call(null,e);
} else {
return null;
}
});
reagent_mui.util.use_effect.call(null,(function (){
var handle_resize = reagent_mui.material.textarea_autosize.global$module$_CIRCA_mui$material$utils.debounce((function (){
reagent_mui.util.set_ref.call(null,renders,(0));

return sync_height.call(null);
}));
var container_window = reagent_mui.material.textarea_autosize.global$module$_CIRCA_mui$material$utils.ownerWindow(input_ref.current);
var resize_observer = reagent.core.atom.call(null,null);
container_window.addEventListener("resize",handle_resize);

if((typeof ResizeObserver !== 'undefined')){
cljs.core.reset_BANG_.call(null,resize_observer,(new ResizeObserver(handle_resize)));

cljs.core.deref.call(null,resize_observer).observe(input_ref.current);
} else {
}

return (function (){
handle_resize.clear();

container_window.removeEventListener("resize",handle_resize);

if(cljs.core.truth_(cljs.core.deref.call(null,resize_observer))){
return cljs.core.deref.call(null,resize_observer).disconnect();
} else {
return null;
}
});
}),[sync_height]);

reagent_mui.material.textarea_autosize.global$module$_CIRCA_mui$material$utils.unstable_useEnhancedEffect(sync_height);

reagent_mui.util.use_effect.call(null,(function (){
return reagent_mui.util.set_ref.call(null,renders,(0));
}),[value]);

return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),reagent_mui.util.remove_undefined_vals.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),handle_change,new cljs.core.Keyword(null,"ref","ref",1289896967),handle_ref,new cljs.core.Keyword(null,"rows","rows",850049680),min_rows,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"outer-height-style","outer-height-style",426760912).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"overflow","overflow",2058931880),(cljs.core.truth_(new cljs.core.Keyword(null,"overflow?","overflow?",124924720).cljs$core$IFn$_invoke$arity$1(state))?new cljs.core.Keyword(null,"hidden","hidden",-312506092):null)], null),style)], null),other_props))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),true,new cljs.core.Keyword(null,"class-name","class-name",945142584),new cljs.core.Keyword(null,"class-name","class-name",945142584).cljs$core$IFn$_invoke$arity$1(props__$1),new cljs.core.Keyword(null,"read-only","read-only",-191706886),true,new cljs.core.Keyword(null,"ref","ref",1289896967),shadow_ref,new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(-1),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),new cljs.core.Keyword(null,"hidden","hidden",-312506092),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"absolute","absolute",1655386478),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"hidden","hidden",-312506092),new cljs.core.Keyword(null,"height","height",1025178622),(0),new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"transform","transform",1381301764),"translateZ(0)"], null),style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),(0)], null))], null)], null)], null));
}));
reagent_mui.material.textarea_autosize.textarea_autosize = reagent.core.adapt_react_class.call(null,reagent_mui.material.textarea_autosize.react_textarea_autosize);

//# sourceMappingURL=textarea_autosize.js.map
