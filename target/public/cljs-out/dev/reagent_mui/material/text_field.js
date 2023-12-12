// Compiled by ClojureScript 1.10.773 {}
goog.provide('reagent_mui.material.text_field');
goog.require('cljs.core');
goog.require('react');
goog.require('reagent.core');
goog.require('_CIRCA_mui.material.TextField');
goog.require('reagent_mui.material.textarea_autosize');
goog.require('reagent_mui.util');
reagent_mui.material.text_field.global$module$react = goog.global["React"];
reagent_mui.material.text_field.global$module$_CIRCA_mui$material$TextField = goog.global["MuiMaterialTextField"];
reagent_mui.material.text_field.input_props = (function reagent_mui$material$text_field$input_props(props,ref){
return reagent_mui.util.remove_undefined_vals.call(null,cljs.core.assoc.call(null,reagent_mui.util.js__GT_clj_SINGLEQUOTE_.call(null,props),new cljs.core.Keyword(null,"ref","ref",1289896967),ref));
});
reagent_mui.material.text_field.input = reagent_mui.material.text_field.global$module$react.forwardRef((function reagent_mui$material$text_field$input(props,ref){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),reagent_mui.material.text_field.input_props.call(null,props,ref)], null));
}));
reagent_mui.material.text_field.textarea = reagent_mui.material.text_field.global$module$react.forwardRef((function reagent_mui$material$text_field$textarea(props,ref){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),reagent_mui.material.text_field.input_props.call(null,props,ref)], null));
}));
reagent_mui.material.text_field.mui_text_field = reagent.core.adapt_react_class.call(null,reagent_mui.material.text_field.global$module$_CIRCA_mui$material$TextField.default);
reagent_mui.material.text_field.text_field = (function reagent_mui$material$text_field$text_field(var_args){
var args__4742__auto__ = [];
var len__4736__auto___10071 = arguments.length;
var i__4737__auto___10072 = (0);
while(true){
if((i__4737__auto___10072 < len__4736__auto___10071)){
args__4742__auto__.push((arguments[i__4737__auto___10072]));

var G__10073 = (i__4737__auto___10072 + (1));
i__4737__auto___10072 = G__10073;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return reagent_mui.material.text_field.text_field.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(reagent_mui.material.text_field.text_field.cljs$core$IFn$_invoke$arity$variadic = (function (props,children){
var min_rows = reagent_mui.util.get_anycase.call(null,props,new cljs.core.Keyword(null,"min-rows","min-rows",1428640765));
var max_rows = reagent_mui.util.get_anycase.call(null,props,new cljs.core.Keyword(null,"max-rows","max-rows",-2131113613));
var autosize_QMARK_ = (function (){var and__4115__auto__ = new cljs.core.Keyword(null,"multiline","multiline",-1084693234).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(props));
} else {
return and__4115__auto__;
}
})();
var input_component = (function (){var or__4126__auto__ = reagent_mui.util.get_anycase.call(null,new cljs.core.Keyword(null,"InputProps","InputProps",-1485068760).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"input-component","input-component",-745892912));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.truth_(autosize_QMARK_)){
return reagent_mui.material.textarea_autosize.react_textarea_autosize;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"multiline","multiline",-1084693234).cljs$core$IFn$_invoke$arity$1(props))){
return reagent_mui.material.text_field.textarea;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"select","select",1147833503).cljs$core$IFn$_invoke$arity$1(props))){
return null;
} else {
return reagent_mui.material.text_field.input;

}
}
}
}
})();
var props__$1 = (function (){var G__10070 = props;
var G__10070__$1 = (cljs.core.truth_(input_component)?cljs.core.update.call(null,G__10070,new cljs.core.Keyword(null,"InputProps","InputProps",-1485068760),(function (p1__10067_SHARP_){
return reagent_mui.util.assoc_anycase.call(null,p1__10067_SHARP_,new cljs.core.Keyword(null,"input-component","input-component",-745892912),input_component);
})):G__10070);
if(cljs.core.truth_(autosize_QMARK_)){
return cljs.core.update.call(null,G__10070__$1,new cljs.core.Keyword(null,"input-props","input-props",-1504868202),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"max-rows","max-rows",-2131113613),max_rows,new cljs.core.Keyword(null,"min-rows","min-rows",1428640765),min_rows], null));
} else {
return G__10070__$1;
}
})();
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.material.text_field.mui_text_field,props__$1], null),children);
}));

(reagent_mui.material.text_field.text_field.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(reagent_mui.material.text_field.text_field.cljs$lang$applyTo = (function (seq10068){
var G__10069 = cljs.core.first.call(null,seq10068);
var seq10068__$1 = cljs.core.next.call(null,seq10068);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10069,seq10068__$1);
}));


//# sourceMappingURL=text_field.js.map
