// Compiled by ClojureScript 1.10.773 {}
goog.provide('hello.reagent');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('clojure.string');
hello.reagent.TIMER = (((typeof hello !== 'undefined') && (typeof hello.reagent !== 'undefined') && (typeof hello.reagent.timer !== 'undefined'))?null:hello.reagent.timer = reagent.core.atom.call(null,(new Date())));
hello.reagent.TIME_COLOR = (((typeof hello !== 'undefined') && (typeof hello.reagent !== 'undefined') && (typeof hello.reagent.time_color !== 'undefined'))?null:hello.reagent.time_color = reagent.core.atom.call(null,"#080"));
hello.reagent.TIME_UPDATER = (((typeof hello !== 'undefined') && (typeof hello.reagent !== 'undefined') && (typeof hello.reagent.time_updater !== 'undefined'))?null:hello.reagent.time_updater = setInterval((function (){
return cljs.core.reset_BANG_.call(null,hello.reagent.timer,(new Date()));
}),(1000)));
hello.reagent.greeting = (function hello$reagent$greeting(message){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),message], null);
});
hello.reagent.clock = (function hello$reagent$clock(){
var time_str = cljs.core.first.call(null,clojure.string.split.call(null,cljs.core.deref.call(null,hello.reagent.timer).toTimeString()," "));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.example-clock","div.example-clock",1559289088),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.deref.call(null,hello.reagent.time_color)], null)], null),time_str], null);
});
hello.reagent.color_input = (function hello$reagent$color_input(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.color-input","div.color-input",-879914246),"Color: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,hello.reagent.time_color),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__11577_SHARP_){
return cljs.core.reset_BANG_.call(null,hello.reagent.time_color,p1__11577_SHARP_.target.value);
})], null)], null)], null);
});
hello.reagent.simple_example = (function hello$reagent$simple_example(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello.reagent.greeting,"Current Time"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello.reagent.clock], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello.reagent.color_input], null)], null);
});
hello.reagent.run = (function hello$reagent$run(){
return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello.reagent.simple_example], null),document.getElementById("app"));
});
cljs.core.enable_console_print_BANG_.call(null);
hello.reagent.run.call(null);

//# sourceMappingURL=reagent.js.map
