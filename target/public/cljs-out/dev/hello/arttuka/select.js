// Compiled by ClojureScript 1.10.773 {}
goog.provide('hello.arttuka.select');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent_mui.styles');
goog.require('reagent_mui.base.select_unstyled_context');
goog.require('reagent_mui.base.use_option');
goog.require('reagent_mui.base.use_select');
goog.require('reagent_mui.util');
hello.arttuka.select.ROOT = reagent_mui.styles.styled.call(null,"div",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null));
hello.arttuka.select.TOGGLE = reagent_mui.styles.styled.call(null,"div",new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"width","width",-384071477),(256),new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #CDD2D7",new cljs.core.Keyword(null,"background-color","background-color",570434026),"var(--color, white)",new cljs.core.Keyword(null,"padding","padding",1660304693),(10),new cljs.core.Keyword(null,"display","display",242065432),"inline-flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center","& .placeholder",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),"0.8"], null)], null));
hello.arttuka.select.LISTBOX = reagent_mui.styles.styled.call(null,"div",new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"padding","padding",1660304693),(5),new cljs.core.Keyword(null,"list-style","list-style",-809622358),"none",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #CDD2D7",new cljs.core.Keyword(null,"outline","outline",793464534),(0),"&.hidden",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(0),new cljs.core.Keyword(null,"visibility","visibility",1338380893),"hidden",new cljs.core.Keyword(null,"transition","transition",765692007),"opacity 0.4s 0.5s ease, visibility 0.4s 0.5s step-end"], null),"& > li",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),(8),"&:hover",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#E7EBF0"], null),"&[aria-selected='true']",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#E0E3E7"], null)], null)], null));
hello.arttuka.select.OPTION = (function hello$arttuka$select$OPTION(arg12250){
var map__12251 = reagent_mui.util.js__GT_clj_SINGLEQUOTE_.call(null,arg12250);
var map__12251__$1 = (((((!((map__12251 == null))))?(((((map__12251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12251.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12251):map__12251);
var value = cljs.core.get.call(null,map__12251__$1,new cljs.core.Keyword(null,"value","value",305978217));
var children = cljs.core.get.call(null,map__12251__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return reagent.core.as_element.call(null,(function (){var map__12253 = reagent_mui.base.use_option.use_option.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),false], null));
var map__12253__$1 = (((((!((map__12253 == null))))?(((((map__12253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12253.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12253):map__12253);
var get_root_props = cljs.core.get.call(null,map__12253__$1,new cljs.core.Keyword(null,"get-root-props","get-root-props",-1680228376));
var highlighted = cljs.core.get.call(null,map__12253__$1,new cljs.core.Keyword(null,"highlighted","highlighted",1723498733));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.foobar","li.foobar",1900185972),cljs.core.merge.call(null,reagent_mui.util.js__GT_clj_SINGLEQUOTE_.call(null,get_root_props.call(null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class-name","class-name",945142584),(cljs.core.truth_(highlighted)?"highlighted":null)], null)),children], null);
})());
});
hello.arttuka.select.component = (function hello$arttuka$select$component(arg12255){
var map__12256 = reagent_mui.util.js__GT_clj_SINGLEQUOTE_.call(null,arg12255);
var map__12256__$1 = (((((!((map__12256 == null))))?(((((map__12256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12256.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12256):map__12256);
var options = cljs.core.get.call(null,map__12256__$1,new cljs.core.Keyword(null,"options","options",99638489));
var placeholder = cljs.core.get.call(null,map__12256__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
return reagent.core.as_element.call(null,(function (){var listbox_ref = reagent_mui.util.use_ref.call(null,null);
var vec__12258 = reagent_mui.util.use_state.call(null,false);
var listbox_visible_QMARK_ = cljs.core.nth.call(null,vec__12258,(0),null);
var set_listbox_visible = cljs.core.nth.call(null,vec__12258,(1),null);
var map__12261 = reagent_mui.base.use_select.use_select.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"listbox-ref","listbox-ref",-1658391884),listbox_ref,new cljs.core.Keyword(null,"options","options",99638489),options], null));
var map__12261__$1 = (((((!((map__12261 == null))))?(((((map__12261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12261.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12261):map__12261);
var get_button_props = cljs.core.get.call(null,map__12261__$1,new cljs.core.Keyword(null,"get-button-props","get-button-props",-79527407));
var get_listbox_props = cljs.core.get.call(null,map__12261__$1,new cljs.core.Keyword(null,"get-listbox-props","get-listbox-props",176400586));
var context_value = cljs.core.get.call(null,map__12261__$1,new cljs.core.Keyword(null,"context-value","context-value",1216098272));
var value = cljs.core.get.call(null,map__12261__$1,new cljs.core.Keyword(null,"value","value",305978217));
reagent_mui.util.use_effect.call(null,(function (){
if(cljs.core.truth_(listbox_visible_QMARK_)){
var G__12263_12272 = listbox_ref.current;
if((G__12263_12272 == null)){
} else {
G__12263_12272.focus();
}
} else {
}

return undefined;
}),[listbox_visible_QMARK_]);

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello.arttuka.select.ROOT,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),(function (){
return set_listbox_visible.call(null,true);
}),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),(function (){
return set_listbox_visible.call(null,false);
}),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),(function (){
return set_listbox_visible.call(null,true);
}),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (){
return set_listbox_visible.call(null,false);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello.arttuka.select.TOGGLE,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, ["--color",value], null)], null),reagent_mui.util.js__GT_clj_SINGLEQUOTE_.call(null,get_button_props.call(null))),(function (){var or__4126__auto__ = value;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.placeholder","span.placeholder",-1002254821),placeholder], null);
}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello.arttuka.select.LISTBOX,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class-name","class-name",945142584),(cljs.core.truth_(listbox_visible_QMARK_)?null:"hidden")], null),reagent_mui.util.js__GT_clj_SINGLEQUOTE_.call(null,get_listbox_props.call(null))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.base.select_unstyled_context.select_unstyled_context_provider,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),context_value], null),(function (){var iter__4529__auto__ = (function hello$arttuka$select$component_$_iter__12264(s__12265){
return (new cljs.core.LazySeq(null,(function (){
var s__12265__$1 = s__12265;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__12265__$1);
if(temp__5804__auto__){
var s__12265__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12265__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__12265__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__12267 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__12266 = (0);
while(true){
if((i__12266 < size__4528__auto__)){
var map__12268 = cljs.core._nth.call(null,c__4527__auto__,i__12266);
var map__12268__$1 = (((((!((map__12268 == null))))?(((((map__12268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12268.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12268):map__12268);
var value__$1 = cljs.core.get.call(null,map__12268__$1,new cljs.core.Keyword(null,"value","value",305978217));
var label = cljs.core.get.call(null,map__12268__$1,new cljs.core.Keyword(null,"label","label",1718410804));
cljs.core.chunk_append.call(null,b__12267,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),hello.arttuka.select.OPTION,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value__$1], null),label], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),value__$1], null)));

var G__12273 = (i__12266 + (1));
i__12266 = G__12273;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12267),hello$arttuka$select$component_$_iter__12264.call(null,cljs.core.chunk_rest.call(null,s__12265__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12267),null);
}
} else {
var map__12270 = cljs.core.first.call(null,s__12265__$2);
var map__12270__$1 = (((((!((map__12270 == null))))?(((((map__12270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12270.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12270):map__12270);
var value__$1 = cljs.core.get.call(null,map__12270__$1,new cljs.core.Keyword(null,"value","value",305978217));
var label = cljs.core.get.call(null,map__12270__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),hello.arttuka.select.OPTION,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value__$1], null),label], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),value__$1], null)),hello$arttuka$select$component_$_iter__12264.call(null,cljs.core.rest.call(null,s__12265__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,options);
})()], null)], null)], null);
})());
});

//# sourceMappingURL=select.js.map
