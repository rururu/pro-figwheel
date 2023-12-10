// Compiled by ClojureScript 1.10.773 {}
goog.provide('helix.impl.props');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs_bean.core');
goog.require('goog.object');
helix.impl.props.aria_data_css_custom_prop_special_case_re = /^(aria-|data-|--).*/;
helix.impl.props.camel_regexp = RegExp("-(\\w)","g");
/**
 * Returns camel case version of the string, e.g. "http-equiv" becomes "httpEquiv".
 */
helix.impl.props.camel_case = (function helix$impl$props$camel_case(s){
if((((s instanceof cljs.core.Keyword)) || (typeof s === 'string') || ((s instanceof cljs.core.Symbol)))){
var name_str = cljs.core.name.call(null,s);
if((!((name_str.match(helix.impl.props.aria_data_css_custom_prop_special_case_re) == null)))){
return name_str;
} else {
if(cljs.core._EQ_.call(null,name_str.substring((0),(1)),"'")){
return name_str.substring((1));
} else {
return name_str.replace(helix.impl.props.camel_regexp,(function (p1__10092_SHARP_,p2__10091_SHARP_){
return p2__10091_SHARP_.toUpperCase();
}));

}
}
} else {
return s;
}
});
helix.impl.props.kw__GT_str = (function helix$impl$props$kw__GT_str(kw){
var kw_ns = cljs.core.namespace.call(null,kw);
var kw_name = cljs.core.name.call(null,kw);
if((kw_ns == null)){
return kw_name;
} else {
return [kw_ns,"/",kw_name].join('');
}
});
helix.impl.props.set_obj = (function helix$impl$props$set_obj(o,k,v){
var G__10093 = o;
goog.object.set(G__10093,k,v);

return G__10093;
});
helix.impl.props.__GT_js = (function helix$impl$props$__GT_js(x){
return cljs.core.clj__GT_js.call(null,x,new cljs.core.Keyword(null,"keyword-fn","keyword-fn",-64566675),cljs.core.comp.call(null,helix.impl.props.camel_case,cljs.core.name));
});
helix.impl.props.primitive_obj = (function helix$impl$props$primitive_obj(var_args){
var G__10095 = arguments.length;
switch (G__10095) {
case 0:
return helix.impl.props.primitive_obj.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return helix.impl.props.primitive_obj.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return helix.impl.props.primitive_obj.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(helix.impl.props.primitive_obj.cljs$core$IFn$_invoke$arity$0 = (function (){
return ({});
}));

(helix.impl.props.primitive_obj.cljs$core$IFn$_invoke$arity$1 = (function (m){
return helix.impl.props.primitive_obj.call(null,m,helix.impl.props.primitive_obj.call(null));
}));

(helix.impl.props.primitive_obj.cljs$core$IFn$_invoke$arity$2 = (function (m,o){
while(true){
if(cljs.core.seq.call(null,m)){
var G__10097 = cljs.core.rest.call(null,m);
var G__10098 = (function (){var entry = cljs.core.first.call(null,m);
return helix.impl.props.set_obj.call(null,o,helix.impl.props.camel_case.call(null,helix.impl.props.kw__GT_str.call(null,cljs.core.key.call(null,entry))),helix.impl.props.__GT_js.call(null,cljs.core.val.call(null,entry)));
})();
m = G__10097;
o = G__10098;
continue;
} else {
return o;
}
break;
}
}));

(helix.impl.props.primitive_obj.cljs$lang$maxFixedArity = 2);

helix.impl.props.into_js_array = (function helix$impl$props$into_js_array(aseq){
return cljs.core.into_array.call(null,aseq);
});
helix.impl.props.merge_obj = (function helix$impl$props$merge_obj(o1,o2){
return Object.assign(o1,o2);
});
helix.impl.props.seq_to_class = (function helix$impl$props$seq_to_class(class$){
return clojure.string.join.call(null," ",cljs.core.map.call(null,cljs.core.str,cljs.core.remove.call(null,cljs.core.nil_QMARK_,class$)));
});
helix.impl.props.normalize_class = (function helix$impl$props$normalize_class(class$){
if(typeof class$ === 'string'){
return class$;
} else {
if(cljs.core.sequential_QMARK_.call(null,class$)){
return helix.impl.props.seq_to_class.call(null,class$);
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$);

}
}
});
helix.impl.props.or_undefined = (function helix$impl$props$or_undefined(v){
if((v == null)){
return undefined;
} else {
return v;
}
});
helix.impl.props.dom_style = (function helix$impl$props$dom_style(style){
if(cljs.core.map_QMARK_.call(null,style)){
return helix.impl.props.primitive_obj.call(null,style);
} else {
if(cljs.core.vector_QMARK_.call(null,style)){
return helix.impl.props.into_js_array.call(null,cljs.core.map.call(null,(function (p1__10099_SHARP_){
if(cljs.core.map_QMARK_.call(null,p1__10099_SHARP_)){
return helix.impl.props.primitive_obj.call(null,p1__10099_SHARP_);
} else {
return p1__10099_SHARP_;
}
}),style));
} else {
return style;

}
}
});
helix.impl.props._dom_props = (function helix$impl$props$_dom_props(var_args){
var G__10101 = arguments.length;
switch (G__10101) {
case 1:
return helix.impl.props._dom_props.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return helix.impl.props._dom_props.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(helix.impl.props._dom_props.cljs$core$IFn$_invoke$arity$1 = (function (m){
if(cljs.core.map_QMARK_.call(null,m)){
return helix.impl.props._dom_props.call(null,m,helix.impl.props.primitive_obj.call(null));
} else {
return m;
}
}));

(helix.impl.props._dom_props.cljs$core$IFn$_invoke$arity$2 = (function (m,o){
while(true){
if(cljs.core.seq.call(null,m)){
var G__10104 = cljs.core.rest.call(null,m);
var G__10105 = (function (){var entry = cljs.core.first.call(null,m);
var k = cljs.core.key.call(null,entry);
var v = cljs.core.val.call(null,entry);
var G__10102 = k;
var G__10102__$1 = (((G__10102 instanceof cljs.core.Keyword))?G__10102.fqn:null);
switch (G__10102__$1) {
case "class":
return helix.impl.props.set_obj.call(null,o,"className",helix.impl.props.normalize_class.call(null,v));

break;
case "for":
return helix.impl.props.set_obj.call(null,o,"htmlFor",v);

break;
case "style":
return helix.impl.props.set_obj.call(null,o,"style",helix.impl.props.dom_style.call(null,v));

break;
case "value":
return helix.impl.props.set_obj.call(null,o,"value",helix.impl.props.or_undefined.call(null,v));

break;
default:
return helix.impl.props.set_obj.call(null,o,(((((k instanceof cljs.core.Keyword)) || ((k instanceof cljs.core.Symbol))))?helix.impl.props.camel_case.call(null,helix.impl.props.kw__GT_str.call(null,k)):((typeof k === 'string')?k:(function(){throw cljs.core.ex_info.call(null,"Invalid DOM prop key",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"val","val",128701612),v], null))})()
)),v);

}
})();
m = G__10104;
o = G__10105;
continue;
} else {
return o;
}
break;
}
}));

(helix.impl.props._dom_props.cljs$lang$maxFixedArity = 2);

var ret__4785__auto___10110 = (function (){
helix.impl.props.dom_props = (function helix$impl$props$dom_props(var_args){
var G__10108 = arguments.length;
switch (G__10108) {
case 3:
return helix.impl.props.dom_props.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return helix.impl.props.dom_props.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(helix.impl.props.dom_props.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,m){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("helix.impl.props","dom-props","helix.impl.props/dom-props",-1666702116,null),null,(1),null)),(new cljs.core.List(null,m,null,(1),null)),(new cljs.core.List(null,null,null,(1),null)))));
}));

(helix.impl.props.dom_props.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,m,c){
return helix.impl.props._dom_props.call(null,(function (){var G__10109 = m;
var G__10109__$1 = (cljs.core.truth_(c)?cljs.core.assoc.call(null,G__10109,new cljs.core.Keyword(null,"children","children",-940561982),c):G__10109);
return cljs.core.dissoc.call(null,G__10109__$1,new cljs.core.Keyword(null,"key","key",-1516042587));

})());
}));

(helix.impl.props.dom_props.cljs$lang$maxFixedArity = 4);

return null;
})()
;
(helix.impl.props.dom_props.cljs$lang$macro = true);

helix.impl.props._props = (function helix$impl$props$_props(var_args){
var G__10113 = arguments.length;
switch (G__10113) {
case 1:
return helix.impl.props._props.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return helix.impl.props._props.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(helix.impl.props._props.cljs$core$IFn$_invoke$arity$1 = (function (m){
if(cljs.core.map_QMARK_.call(null,m)){
return helix.impl.props._props.call(null,m,helix.impl.props.primitive_obj.call(null));
} else {
return m;
}
}));

(helix.impl.props._props.cljs$core$IFn$_invoke$arity$2 = (function (m,o){
while(true){
if(cljs.core.seq.call(null,m)){
var G__10115 = cljs.core.rest.call(null,m);
var G__10116 = (function (){var entry = cljs.core.first.call(null,m);
var k = cljs.core.key.call(null,entry);
var v = cljs.core.val.call(null,entry);
return helix.impl.props.set_obj.call(null,o,(((((k instanceof cljs.core.Keyword)) || ((k instanceof cljs.core.Symbol))))?helix.impl.props.kw__GT_str.call(null,k):((typeof k === 'string')?k:(function(){throw cljs.core.ex_info.call(null,"Invalid prop key",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"val","val",128701612),v], null))})()
)),cljs.core.val.call(null,entry));
})();
m = G__10115;
o = G__10116;
continue;
} else {
return o;
}
break;
}
}));

(helix.impl.props._props.cljs$lang$maxFixedArity = 2);

var ret__4785__auto___10120 = (function (){
helix.impl.props.props = (function helix$impl$props$props(var_args){
var G__10118 = arguments.length;
switch (G__10118) {
case 3:
return helix.impl.props.props.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return helix.impl.props.props.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(helix.impl.props.props.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,m){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("helix.impl.props","props","helix.impl.props/props",2022341264,null),null,(1),null)),(new cljs.core.List(null,m,null,(1),null)),(new cljs.core.List(null,null,null,(1),null)))));
}));

(helix.impl.props.props.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,m,c){
return helix.impl.props._props.call(null,(function (){var G__10119 = m;
var G__10119__$1 = (((!((c == null))))?cljs.core.assoc.call(null,G__10119,new cljs.core.Keyword(null,"children","children",-940561982),c):G__10119);
return cljs.core.dissoc.call(null,G__10119__$1,new cljs.core.Keyword(null,"key","key",-1516042587));

})());
}));

(helix.impl.props.props.cljs$lang$maxFixedArity = 4);

return null;
})()
;
(helix.impl.props.props.cljs$lang$macro = true);


//# sourceMappingURL=props.js.map
