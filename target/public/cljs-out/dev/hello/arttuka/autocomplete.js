// Compiled by ClojureScript 1.10.773 {}
goog.provide('hello.arttuka.autocomplete');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent_mui.material.autocomplete');
goog.require('reagent_mui.material.text_field');
hello.arttuka.autocomplete.OPTIONS = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Denmark",new cljs.core.Keyword(null,"code","code",1586293142),"dk",new cljs.core.Keyword(null,"flag","flag",1088647881),"\uD83C\uDDE9\uD83C\uDDF0"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Finland",new cljs.core.Keyword(null,"code","code",1586293142),"fi",new cljs.core.Keyword(null,"flag","flag",1088647881),"\uD83C\uDDEB\uD83C\uDDEE"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"France",new cljs.core.Keyword(null,"code","code",1586293142),"fr",new cljs.core.Keyword(null,"flag","flag",1088647881),"\uD83C\uDDEB\uD83C\uDDF7"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Germany",new cljs.core.Keyword(null,"code","code",1586293142),"de",new cljs.core.Keyword(null,"flag","flag",1088647881),"\uD83C\uDDE9\uD83C\uDDEA"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Iceland",new cljs.core.Keyword(null,"code","code",1586293142),"is",new cljs.core.Keyword(null,"flag","flag",1088647881),"\uD83C\uDDEE\uD83C\uDDF8"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Italy",new cljs.core.Keyword(null,"code","code",1586293142),"it",new cljs.core.Keyword(null,"flag","flag",1088647881),"\uD83C\uDDEE\uD83C\uDDF9"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Norway",new cljs.core.Keyword(null,"code","code",1586293142),"no",new cljs.core.Keyword(null,"flag","flag",1088647881),"\uD83C\uDDF3\uD83C\uDDF4"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Spain",new cljs.core.Keyword(null,"code","code",1586293142),"es",new cljs.core.Keyword(null,"flag","flag",1088647881),"\uD83C\uDDEA\uD83C\uDDF8"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Sweden",new cljs.core.Keyword(null,"code","code",1586293142),"se",new cljs.core.Keyword(null,"flag","flag",1088647881),"\uD83C\uDDF8\uD83C\uDDEA"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"United Kingdom",new cljs.core.Keyword(null,"code","code",1586293142),"gb",new cljs.core.Keyword(null,"flag","flag",1088647881),"\uD83C\uDDEC\uD83C\uDDE7"], null)], null));
hello.arttuka.autocomplete.autocomplete = (function hello$arttuka$autocomplete$autocomplete(p__12242){
var map__12243 = p__12242;
var map__12243__$1 = (((((!((map__12243 == null))))?(((((map__12243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12243.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12243):map__12243);
var class$ = cljs.core.get.call(null,map__12243__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var value = cljs.core.get.call(null,map__12243__$1,new cljs.core.Keyword(null,"value","value",305978217));
var on_change = cljs.core.get.call(null,map__12243__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.material.autocomplete.autocomplete,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),"autocomplete-demo",new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"options","options",99638489),hello.arttuka.autocomplete.OPTIONS,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (event,new_value){
return on_change.call(null,new_value);
}),new cljs.core.Keyword(null,"render-input","render-input",-1397448315),(function (arg12245){
var props = reagent_mui.util.js__GT_clj_SINGLEQUOTE_.call(null,arg12245);
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.material.text_field.text_field,cljs.core.merge.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"Autocomplete"], null))], null));
}),new cljs.core.Keyword(null,"render-option","render-option",1764811966),(function (arg12246,arg12247){
var props = reagent_mui.util.js__GT_clj_SINGLEQUOTE_.call(null,arg12246);
var option = reagent_mui.util.js__GT_clj_SINGLEQUOTE_.call(null,arg12247);
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),props,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(option),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(option)], null));
})], null)], null);
});

//# sourceMappingURL=autocomplete.js.map