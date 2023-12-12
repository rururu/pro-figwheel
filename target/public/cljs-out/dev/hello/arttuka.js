// Compiled by ClojureScript 1.10.773 {}
goog.provide('hello.arttuka');
goog.require('cljs.core');
goog.require('react');
goog.require('reagent.core');
goog.require('reagent.dom.client');
goog.require('reagent_mui.cljs_time_adapter');
goog.require('reagent_mui.colors');
goog.require('reagent_mui.material.button');
goog.require('reagent_mui.material.chip');
goog.require('reagent_mui.material.css_baseline');
goog.require('reagent_mui.material.input_adornment');
goog.require('reagent_mui.material.menu_item');
goog.require('reagent_mui.material.stack');
goog.require('reagent_mui.material.text_field');
goog.require('reagent_mui.material.toolbar');
goog.require('reagent_mui.material.typography');
goog.require('reagent_mui.icons.add_box');
goog.require('reagent_mui.icons.clear');
goog.require('reagent_mui.icons.face');
goog.require('reagent_mui.icons.face_outlined');
goog.require('reagent_mui.icons.anchor');
goog.require('reagent_mui.styles');
goog.require('hello.arttuka.autocomplete');
goog.require('hello.arttuka.select');
goog.require('_CIRCA_mui.material.TextField');
hello.arttuka.global$module$react = goog.global["React"];
hello.arttuka.global$module$_CIRCA_mui$material$TextField = goog.global["MuiMaterialTextField"];
hello.arttuka.CUSTOM_THEME = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"palette","palette",-456203511),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"primary","primary",817773892),reagent_mui.colors.purple,new cljs.core.Keyword(null,"secondary","secondary",-669381460),reagent_mui.colors.red], null)], null);
hello.arttuka.CLASSES = (function (){var prefix = "rmui-example";
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"root","root",-448657453),[prefix,"-root"].join(''),new cljs.core.Keyword(null,"button","button",1456579943),[prefix,"-button"].join(''),new cljs.core.Keyword(null,"text-field","text-field",1955422445),[prefix,"-text-field"].join('')], null);
})();
hello.arttuka.STATES = (function (){
if((typeof hello !== 'undefined') && (typeof hello.arttuka !== 'undefined') && (typeof hello.arttuka.text_state !== 'undefined')){
} else {
hello.arttuka.text_state = reagent.core.atom.call(null,"foobar");
}

if((typeof hello !== 'undefined') && (typeof hello.arttuka !== 'undefined') && (typeof hello.arttuka.select_state !== 'undefined')){
} else {
hello.arttuka.select_state = reagent.core.atom.call(null,(1));
}

if((typeof hello !== 'undefined') && (typeof hello.arttuka !== 'undefined') && (typeof hello.arttuka.date_picker_state !== 'undefined')){
} else {
hello.arttuka.date_picker_state = reagent.core.atom.call(null,null);
}

if((typeof hello !== 'undefined') && (typeof hello.arttuka !== 'undefined') && (typeof hello.arttuka.autocomplete_state !== 'undefined')){
return null;
} else {
return (
hello.arttuka.autocomplete_state = reagent.core.atom.call(null,null))
;
}
})()
;
hello.arttuka.event_value = (function hello$arttuka$event_value(e){
return e.target.value;
});
hello.arttuka.toolbarr = (function hello$arttuka$toolbarr(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.material.toolbar.toolbar,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disable-gutters","disable-gutters",1438156978),true], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.material.button.button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"variant","variant",-424354234),"contained",new cljs.core.Keyword(null,"color","color",1011675173),"primary",new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"button","button",1456579943).cljs$core$IFn$_invoke$arity$1(hello.arttuka.CLASSES),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,hello.arttuka.text_state,cljs.core.str," foo");
})], null),"Update value property",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.icons.add_box.add_box], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.material.button.button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"variant","variant",-424354234),"outlined",new cljs.core.Keyword(null,"color","color",1011675173),"secondary",new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"button","button",1456579943).cljs$core$IFn$_invoke$arity$1(hello.arttuka.CLASSES),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.reset_BANG_.call(null,hello.arttuka.text_state,"");

cljs.core.reset_BANG_.call(null,hello.arttuka.select_state,(1));

cljs.core.reset_BANG_.call(null,hello.arttuka.date_picker_state,null);

return cljs.core.reset_BANG_.call(null,hello.arttuka.autocomplete_state,null);
})], null),"Reset",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.icons.clear.clear], null)], null)], null);
});
hello.arttuka.tf_text_input = (function hello$arttuka$tf_text_input(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.material.text_field.text_field,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,hello.arttuka.text_state),new cljs.core.Keyword(null,"label","label",1718410804),"Text input",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Placeholder",new cljs.core.Keyword(null,"helper-text","helper-text",-1920318309),"Helper text",new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"text-field","text-field",1955422445).cljs$core$IFn$_invoke$arity$1(hello.arttuka.CLASSES),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
return cljs.core.reset_BANG_.call(null,hello.arttuka.text_state,hello.arttuka.event_value.call(null,e));
})], null)], null);
});
hello.arttuka.tf_text_with_adornment = (function hello$arttuka$tf_text_with_adornment(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.material.text_field.text_field,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,hello.arttuka.text_state),new cljs.core.Keyword(null,"label","label",1718410804),"Text with Adornment",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Placeholder",new cljs.core.Keyword(null,"helper-text","helper-text",-1920318309),"Helper text",new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"text-field","text-field",1955422445).cljs$core$IFn$_invoke$arity$1(hello.arttuka.CLASSES),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
return cljs.core.reset_BANG_.call(null,hello.arttuka.text_state,hello.arttuka.event_value.call(null,e));
}),new cljs.core.Keyword(null,"InputProps","InputProps",-1485068760),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"end-adornment","end-adornment",195120609),reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.material.input_adornment.input_adornment,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"end"], null),"Baz"], null))], null)], null)], null);
});
hello.arttuka.tf_textarea = (function hello$arttuka$tf_textarea(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.material.text_field.text_field,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,hello.arttuka.text_state),new cljs.core.Keyword(null,"label","label",1718410804),"Textarea",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Placeholder",new cljs.core.Keyword(null,"helper-text","helper-text",-1920318309),"Helper text",new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"text-field","text-field",1955422445).cljs$core$IFn$_invoke$arity$1(hello.arttuka.CLASSES),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
return cljs.core.reset_BANG_.call(null,hello.arttuka.text_state,hello.arttuka.event_value.call(null,e));
}),new cljs.core.Keyword(null,"multiline","multiline",-1084693234),true,new cljs.core.Keyword(null,"rows","rows",850049680),(10)], null)], null);
});
hello.arttuka.tf_autosized_textarea = (function hello$arttuka$tf_autosized_textarea(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.material.text_field.text_field,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"textarea-autosize","textarea-autosize",448122844),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,hello.arttuka.text_state),new cljs.core.Keyword(null,"label","label",1718410804),"Autosized textarea",new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"text-field","text-field",1955422445).cljs$core$IFn$_invoke$arity$1(hello.arttuka.CLASSES),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
return cljs.core.reset_BANG_.call(null,hello.arttuka.text_state,hello.arttuka.event_value.call(null,e));
}),new cljs.core.Keyword(null,"multiline","multiline",-1084693234),true,new cljs.core.Keyword(null,"min-rows","min-rows",1428640765),(2),new cljs.core.Keyword(null,"max-rows","max-rows",-2131113613),(10)], null)], null);
});
hello.arttuka.tf_select = (function hello$arttuka$tf_select(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.material.text_field.text_field,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,hello.arttuka.select_state),new cljs.core.Keyword(null,"label","label",1718410804),"Select",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Placeholder",new cljs.core.Keyword(null,"helper-text","helper-text",-1920318309),"Helper text",new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"text-field","text-field",1955422445).cljs$core$IFn$_invoke$arity$1(hello.arttuka.CLASSES),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
return cljs.core.reset_BANG_.call(null,hello.arttuka.select_state,hello.arttuka.event_value.call(null,e));
}),new cljs.core.Keyword(null,"select","select",1147833503),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.material.menu_item.menu_item,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(1)], null),"Item 1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.material.menu_item.menu_item,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(2)], null),"Item 2"], null)], null);
});
hello.arttuka.icons = (function hello$arttuka$icons(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.material.stack.stack,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"spacing","spacing",204422175),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.material.chip.chip,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon","icon",1679606541),reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.icons.face.face], null)),new cljs.core.Keyword(null,"label","label",1718410804),"Icon element example, r/as-element"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.material.chip.chip,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon","icon",1679606541),reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.icons.anchor.anchor], null)),new cljs.core.Keyword(null,"label","label",1718410804),"Another example icon"], null)], null)], null);
});
hello.arttuka.autocompl = (function hello$arttuka$autocompl(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello.arttuka.autocomplete.autocomplete,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"text-field","text-field",1955422445).cljs$core$IFn$_invoke$arity$1(hello.arttuka.CLASSES),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,hello.arttuka.autocomplete_state),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (new_value){
return cljs.core.reset_BANG_.call(null,hello.arttuka.autocomplete_state,new_value);
})], null)], null);
});
hello.arttuka.main = (function hello$arttuka$main(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.material.css_baseline.css_baseline], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.styles.theme_provider,reagent_mui.styles.create_theme.call(null,hello.arttuka.CUSTOM_THEME),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.material.stack.stack,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"alignItems","alignItems",410331199),new cljs.core.Keyword(null,"stretch","stretch",-1888837380),new cljs.core.Keyword(null,"spacing","spacing",204422175),(2),new cljs.core.Keyword(null,"p","p",151049309),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello.arttuka.toolbarr], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello.arttuka.tf_text_input], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello.arttuka.tf_text_with_adornment], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello.arttuka.tf_textarea], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello.arttuka.tf_autosized_textarea], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello.arttuka.tf_select], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello.arttuka.icons], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello.arttuka.autocompl], null)], null)], null)], null);
});
hello.arttuka.run = (function hello$arttuka$run(){
var root = reagent.dom.client.create_root.call(null,document.getElementById("app"));
return reagent.dom.client.render.call(null,root,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello.arttuka.main], null));
});
hello.arttuka.run.call(null);

//# sourceMappingURL=arttuka.js.map
