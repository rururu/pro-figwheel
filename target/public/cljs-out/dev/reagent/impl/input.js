// Compiled by ClojureScript 1.10.773 {}
goog.provide('reagent.impl.input');
goog.require('cljs.core');
goog.require('reagent.impl.component');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.protocols');
reagent.impl.input.these_inputs_have_selection_api = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, ["url",null,"tel",null,"text",null,"textarea",null,"password",null,"search",null], null), null);
reagent.impl.input.has_selection_api_QMARK_ = (function reagent$impl$input$has_selection_api_QMARK_(input_type){
return cljs.core.contains_QMARK_.call(null,reagent.impl.input.these_inputs_have_selection_api,input_type);
});
reagent.impl.input._STAR_force_set_dom_value_STAR_ = false;
reagent.impl.input.input_node_set_value = (function reagent$impl$input$input_node_set_value(node,rendered_value,dom_value,component,p__9724){
var map__9725 = p__9724;
var map__9725__$1 = (((((!((map__9725 == null))))?(((((map__9725.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9725.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9725):map__9725);
var on_write = cljs.core.get.call(null,map__9725__$1,new cljs.core.Keyword(null,"on-write","on-write",31519475));
if(cljs.core.truth_((function (){var or__4126__auto__ = (!((((node === document.activeElement)) && (reagent.impl.input.has_selection_api_QMARK_.call(null,node.type)) && (typeof rendered_value === 'string') && (typeof dom_value === 'string'))));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return reagent.impl.input._STAR_force_set_dom_value_STAR_;
}
})())){
(component.cljsDOMValue = rendered_value);

(node.value = rendered_value);

if(cljs.core.fn_QMARK_.call(null,on_write)){
return on_write.call(null,rendered_value);
} else {
return null;
}
} else {
var node_value = node.value;
if(cljs.core.not_EQ_.call(null,node_value,dom_value)){
return reagent.impl.batching.do_after_render.call(null,(function (){
var _STAR_force_set_dom_value_STAR__orig_val__9727 = reagent.impl.input._STAR_force_set_dom_value_STAR_;
var _STAR_force_set_dom_value_STAR__temp_val__9728 = true;
(reagent.impl.input._STAR_force_set_dom_value_STAR_ = _STAR_force_set_dom_value_STAR__temp_val__9728);

try{return reagent.impl.input.input_component_set_value.call(null,component);
}finally {(reagent.impl.input._STAR_force_set_dom_value_STAR_ = _STAR_force_set_dom_value_STAR__orig_val__9727);
}}));
} else {
var existing_offset_from_end = (cljs.core.count.call(null,node_value) - node.selectionStart);
var new_cursor_offset = (cljs.core.count.call(null,rendered_value) - existing_offset_from_end);
(component.cljsDOMValue = rendered_value);

(node.value = rendered_value);

if(cljs.core.fn_QMARK_.call(null,on_write)){
on_write.call(null,rendered_value);
} else {
}

(node.selectionStart = new_cursor_offset);

return (node.selectionEnd = new_cursor_offset);
}
}
});
reagent.impl.input.input_component_set_value = (function reagent$impl$input$input_component_set_value(this$){
if(cljs.core.truth_(this$.cljsInputLive)){
(this$.cljsInputDirty = false);

var rendered_value = this$.cljsRenderedValue;
var dom_value = this$.cljsDOMValue;
var node = this$.inputEl;
if(cljs.core.not_EQ_.call(null,rendered_value,dom_value)){
return reagent.impl.input.input_node_set_value.call(null,node,rendered_value,dom_value,this$,cljs.core.PersistentArrayMap.EMPTY);
} else {
return null;
}
} else {
return null;
}
});
reagent.impl.input.input_handle_change = (function reagent$impl$input$input_handle_change(this$,on_change,e){
(this$.cljsDOMValue = e.target.value);

if(cljs.core.truth_(this$.cljsInputDirty)){
} else {
(this$.cljsInputDirty = true);

reagent.impl.batching.do_after_render.call(null,(function (){
return reagent.impl.input.input_component_set_value.call(null,this$);
}));
}

return on_change.call(null,e);
});
reagent.impl.input.input_render_setup = (function reagent$impl$input$input_render_setup(this$,jsprops){
if(cljs.core.truth_((((!((jsprops == null))))?(function (){var and__4115__auto__ = jsprops.hasOwnProperty("onChange");
if(cljs.core.truth_(and__4115__auto__)){
return jsprops.hasOwnProperty("value");
} else {
return and__4115__auto__;
}
})():false))){
var v = jsprops.value;
var value = (((v == null))?"":v);
var on_change = jsprops.onChange;
var original_ref_fn = jsprops.ref;
if(cljs.core.truth_(this$.cljsInputLive)){
} else {
(this$.cljsInputLive = true);

(this$.cljsDOMValue = value);
}

if(cljs.core.truth_(this$.reagentRefFn)){
} else {
(this$.reagentRefFn = ((cljs.core.fn_QMARK_.call(null,original_ref_fn))?(function (el){
(this$.inputEl = el);

return original_ref_fn.call(null,el);
}):(cljs.core.truth_((function (){var and__4115__auto__ = original_ref_fn;
if(cljs.core.truth_(and__4115__auto__)){
return original_ref_fn.hasOwnProperty("current");
} else {
return and__4115__auto__;
}
})())?(function (el){
(this$.inputEl = el);

return (original_ref_fn.current = el);
}):(function (el){
return (this$.inputEl = el);
})
)));
}

(this$.cljsRenderedValue = value);

delete jsprops["value"];

(jsprops.defaultValue = value);

(jsprops.onChange = (function (p1__9729_SHARP_){
return reagent.impl.input.input_handle_change.call(null,this$,on_change,p1__9729_SHARP_);
}));

return (jsprops.ref = this$.reagentRefFn);
} else {
return null;
}
});
reagent.impl.input.input_unmount = (function reagent$impl$input$input_unmount(this$){
return (this$.cljsInputLive = null);
});
reagent.impl.input.input_component_QMARK_ = (function reagent$impl$input$input_component_QMARK_(x){
var G__9730 = x;
switch (G__9730) {
case "input":
case "textarea":
return true;

break;
default:
return false;

}
});
reagent.impl.input.input_spec = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"ReagentInput",new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),reagent.impl.input.input_component_set_value,new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),reagent.impl.input.input_unmount,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (argv,component,jsprops,first_child,compiler){
var this$ = reagent.impl.component._STAR_current_component_STAR_;
reagent.impl.input.input_render_setup.call(null,this$,jsprops);

return reagent.impl.protocols.make_element.call(null,compiler,argv,component,jsprops,first_child);
})], null);

//# sourceMappingURL=input.js.map
