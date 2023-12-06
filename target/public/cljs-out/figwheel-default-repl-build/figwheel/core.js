// Compiled by ClojureScript 1.10.773 {}
goog.provide('figwheel.core');
goog.require('cljs.core');
goog.require('figwheel.tools.heads_up');
goog.require('goog.object');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('goog.log');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('goog.debug.Console');
goog.require('goog.async.Deferred');
goog.require('goog.Promise');
goog.require('goog.events.EventTarget');
goog.require('goog.events.Event');
figwheel.core.distinct_by = (function figwheel$core$distinct_by(f,coll){
var seen = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
return cljs.core.filter.call(null,(function (p1__10835_SHARP_){
var k = f.call(null,p1__10835_SHARP_);
var res = cljs.core.not.call(null,cljs.core.deref.call(null,seen).call(null,k));
cljs.core._vreset_BANG_.call(null,seen,cljs.core.conj.call(null,cljs.core._deref.call(null,seen),k));

return res;
}),coll);
});
figwheel.core.map_keys = (function figwheel$core$map_keys(f,coll){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__10836){
var vec__10837 = p__10836;
var k = cljs.core.nth.call(null,vec__10837,(0),null);
var v = cljs.core.nth.call(null,vec__10837,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,k),v], null);
})),coll);
});
figwheel.core._STAR_inline_code_message_max_column_STAR_ = (80);
figwheel.core.wrap_line = (function figwheel$core$wrap_line(text,size){
return cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,[".{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}\\s|.{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}"].join('')),[clojure.string.replace.call(null,text,/\n/," ")," "].join(''));
});
figwheel.core.cross_format = (function figwheel$core$cross_format(var_args){
var args__4742__auto__ = [];
var len__4736__auto___10841 = arguments.length;
var i__4737__auto___10842 = (0);
while(true){
if((i__4737__auto___10842 < len__4736__auto___10841)){
args__4742__auto__.push((arguments[i__4737__auto___10842]));

var G__10843 = (i__4737__auto___10842 + (1));
i__4737__auto___10842 = G__10843;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.core.cross_format.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.core.cross_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,goog.string.format,args);
}));

(figwheel.core.cross_format.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.core.cross_format.cljs$lang$applyTo = (function (seq10840){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10840));
}));

figwheel.core.pointer_message_lines = (function figwheel$core$pointer_message_lines(p__10846){
var map__10847 = p__10846;
var map__10847__$1 = (((((!((map__10847 == null))))?(((((map__10847.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10847.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10847):map__10847);
var message = cljs.core.get.call(null,map__10847__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var column = cljs.core.get.call(null,map__10847__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(((column + cljs.core.count.call(null,message)) > figwheel.core._STAR_inline_code_message_max_column_STAR_)){
return cljs.core.mapv.call(null,(function (p1__10845_SHARP_){
return cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10845_SHARP_], null)));
}),cljs.core.cons.call(null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s"].join('');
})(),"","^---"),cljs.core.map.call(null,(function (p1__10844_SHARP_){
return figwheel.core.cross_format.call(null,["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.core._STAR_inline_code_message_max_column_STAR_),"s"].join(''),p1__10844_SHARP_);
}),figwheel.core.wrap_line.call(null,message,(figwheel.core._STAR_inline_code_message_max_column_STAR_ - (10))))));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s %s"].join('');
})(),"","^---",message)], null)], null);
}
});
figwheel.core.inline_message_display_data = (function figwheel$core$inline_message_display_data(p__10850){
var map__10851 = p__10850;
var map__10851__$1 = (((((!((map__10851 == null))))?(((((map__10851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10851.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10851):map__10851);
var message_data = map__10851__$1;
var message = cljs.core.get.call(null,map__10851__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var line = cljs.core.get.call(null,map__10851__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__10851__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var file_excerpt = cljs.core.get.call(null,map__10851__$1,new cljs.core.Keyword(null,"file-excerpt","file-excerpt",-1132330744));
if(cljs.core.truth_(file_excerpt)){
var map__10853 = file_excerpt;
var map__10853__$1 = (((((!((map__10853 == null))))?(((((map__10853.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10853.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10853):map__10853);
var start_line = cljs.core.get.call(null,map__10853__$1,new cljs.core.Keyword(null,"start-line","start-line",-41746654));
var path = cljs.core.get.call(null,map__10853__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var excerpt = cljs.core.get.call(null,map__10853__$1,new cljs.core.Keyword(null,"excerpt","excerpt",219850763));
var lines = cljs.core.map_indexed.call(null,(function (i,l){
var ln = (i + start_line);
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[((cljs.core._EQ_.call(null,line,ln))?new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357):new cljs.core.Keyword(null,"code-line","code-line",-2138627853)),ln,l],null));
}),clojure.string.split_lines.call(null,excerpt));
var vec__10854 = cljs.core.split_with.call(null,(function (p1__10849_SHARP_){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),cljs.core.first.call(null,p1__10849_SHARP_));
}),lines);
var begin = cljs.core.nth.call(null,vec__10854,(0),null);
var end = cljs.core.nth.call(null,vec__10854,(1),null);
return cljs.core.concat.call(null,cljs.core.take_last.call(null,(5),begin),cljs.core.take.call(null,(1),end),figwheel.core.pointer_message_lines.call(null,message_data),cljs.core.take.call(null,(5),cljs.core.rest.call(null,end)));
} else {
return null;
}
});
figwheel.core.file_line_column = (function figwheel$core$file_line_column(p__10858){
var map__10859 = p__10858;
var map__10859__$1 = (((((!((map__10859 == null))))?(((((map__10859.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10859.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10859):map__10859);
var file = cljs.core.get.call(null,map__10859__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__10859__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__10859__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__10861 = "";
var G__10861__$1 = (cljs.core.truth_(file)?[G__10861,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__10861);
var G__10861__$2 = (cljs.core.truth_(line)?[G__10861__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__10861__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = line;
if(cljs.core.truth_(and__4115__auto__)){
return column;
} else {
return and__4115__auto__;
}
})())){
return [G__10861__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__10861__$2;
}
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.logger !== 'undefined')){
} else {
figwheel.core.logger = goog.log.getLogger("Figwheel");
}

figwheel.core.console_logging = (function figwheel$core$console_logging(){
if(cljs.core.truth_(goog.object.get(goog.debug.Console,"instance"))){
} else {
var c_10916 = (new goog.debug.Console());
var G__10868_10917 = c_10916.getFormatter();
goog.object.set(G__10868_10917,"showAbsoluteTime",false);

goog.object.set(G__10868_10917,"showRelativeTime",false);


goog.object.set(goog.debug.Console,"instance",c_10916);

}

var temp__5804__auto__ = goog.object.get(goog.debug.Console,"instance");
if(cljs.core.truth_(temp__5804__auto__)){
var console_instance = temp__5804__auto__;
console_instance.setCapturing(true);

return true;
} else {
return null;
}
});
goog.exportSymbol('figwheel.core.console_logging', figwheel.core.console_logging);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.log_console !== 'undefined')){
} else {
figwheel.core.log_console = figwheel.core.console_logging.call(null);
}

figwheel.core.event_target = (((typeof document !== 'undefined'))?document:(new goog.events.EventTarget()));
goog.exportSymbol('figwheel.core.event_target', figwheel.core.event_target);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.listener_key_map !== 'undefined')){
} else {
figwheel.core.listener_key_map = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}

figwheel.core.unlisten = (function figwheel$core$unlisten(ky,event_name){
var temp__5804__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.core.listener_key_map),ky);
if(cljs.core.truth_(temp__5804__auto__)){
var f = temp__5804__auto__;
return figwheel.core.event_target.removeEventListener(cljs.core.name.call(null,event_name),f);
} else {
return null;
}
});

figwheel.core.listen = (function figwheel$core$listen(ky,event_name,f){
figwheel.core.unlisten.call(null,ky,event_name);

figwheel.core.event_target.addEventListener(cljs.core.name.call(null,event_name),f);

return cljs.core.swap_BANG_.call(null,figwheel.core.listener_key_map,cljs.core.assoc,ky,f);
});

figwheel.core.dispatch_event = (function figwheel$core$dispatch_event(event_name,data){
return figwheel.core.event_target.dispatchEvent((function (){var G__10869 = (((figwheel.core.event_target instanceof goog.events.EventTarget))?(new goog.events.Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)):(new Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)));
goog.object.add(G__10869,"data",(function (){var or__4126__auto__ = data;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());

return G__10869;
})());
});

figwheel.core.event_data = (function figwheel$core$event_data(e){
return goog.object.get((function (){var temp__5802__auto__ = e.event_;
if(cljs.core.truth_(temp__5802__auto__)){
var e__$1 = temp__5802__auto__;
return e__$1;
} else {
return e;
}
})(),"data");
});


/**
 * @define {boolean}
 */
figwheel.core.load_warninged_code = goog.define("figwheel.core.load_warninged_code",false);


/**
 * @define {boolean}
 */
figwheel.core.heads_up_display = goog.define("figwheel.core.heads_up_display",true);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.state !== 'undefined')){
} else {
figwheel.core.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),cljs.core.PersistentArrayMap.EMPTY], null));
}

figwheel.core.heads_up_display_QMARK_ = (function figwheel$core$heads_up_display_QMARK_(){
var and__4115__auto__ = figwheel.core.heads_up_display;
if(cljs.core.truth_(and__4115__auto__)){
return (!((goog.global.document == null)));
} else {
return and__4115__auto__;
}
});

var last_reload_timestamp_10918 = cljs.core.atom.call(null,(0));
var promise_chain_10919 = (new goog.Promise((function (r,_){
return r.call(null,true);
})));
figwheel.core.render_watcher = (function figwheel$core$render_watcher(_,___$1,o,n){
if(cljs.core.truth_(figwheel.core.heads_up_display_QMARK_.call(null))){
var temp__5802__auto__ = (function (){var temp__5804__auto__ = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null));
if(cljs.core.truth_(temp__5804__auto__)){
var ts = temp__5804__auto__;
if((cljs.core.deref.call(null,last_reload_timestamp_10918) < ts)){
return ts;
} else {
return false;
}
} else {
return null;
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var ts = temp__5802__auto__;
var warnings = cljs.core.not_empty.call(null,cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null)));
var exception = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null));
cljs.core.reset_BANG_.call(null,last_reload_timestamp_10918,ts);

if(cljs.core.truth_(warnings)){
return promise_chain_10919.then((function (){
var warn = cljs.core.first.call(null,warnings);
var _STAR_inline_code_message_max_column_STAR__orig_val__10870 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
var _STAR_inline_code_message_max_column_STAR__temp_val__10871 = (132);
(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__temp_val__10871);

try{return figwheel.tools.heads_up.display_warning.call(null,cljs.core.assoc.call(null,warn,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,warn))).then((function (){
var seq__10872 = cljs.core.seq.call(null,cljs.core.rest.call(null,warnings));
var chunk__10873 = null;
var count__10874 = (0);
var i__10875 = (0);
while(true){
if((i__10875 < count__10874)){
var w = cljs.core._nth.call(null,chunk__10873,i__10875);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__10920 = seq__10872;
var G__10921 = chunk__10873;
var G__10922 = count__10874;
var G__10923 = (i__10875 + (1));
seq__10872 = G__10920;
chunk__10873 = G__10921;
count__10874 = G__10922;
i__10875 = G__10923;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__10872);
if(temp__5804__auto__){
var seq__10872__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10872__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__10872__$1);
var G__10924 = cljs.core.chunk_rest.call(null,seq__10872__$1);
var G__10925 = c__4556__auto__;
var G__10926 = cljs.core.count.call(null,c__4556__auto__);
var G__10927 = (0);
seq__10872 = G__10924;
chunk__10873 = G__10925;
count__10874 = G__10926;
i__10875 = G__10927;
continue;
} else {
var w = cljs.core.first.call(null,seq__10872__$1);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__10928 = cljs.core.next.call(null,seq__10872__$1);
var G__10929 = null;
var G__10930 = (0);
var G__10931 = (0);
seq__10872 = G__10928;
chunk__10873 = G__10929;
count__10874 = G__10930;
i__10875 = G__10931;
continue;
}
} else {
return null;
}
}
break;
}
}));
}finally {(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__orig_val__10870);
}}));
} else {
if(cljs.core.truth_(exception)){
return promise_chain_10919.then((function (){
var _STAR_inline_code_message_max_column_STAR__orig_val__10876 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
var _STAR_inline_code_message_max_column_STAR__temp_val__10877 = (132);
(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__temp_val__10877);

try{return figwheel.tools.heads_up.display_exception.call(null,cljs.core.assoc.call(null,exception,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,exception)));
}finally {(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__orig_val__10876);
}}));
} else {
return promise_chain_10919.then((function (){
return figwheel.tools.heads_up.flash_loaded.call(null);
}));

}
}
} else {
return null;
}
} else {
return null;
}
});

cljs.core.add_watch.call(null,figwheel.core.state,new cljs.core.Keyword("figwheel.core","render-watcher","figwheel.core/render-watcher",2046135910),figwheel.core.render_watcher);

figwheel.core.immutable_ns_QMARK_ = (function figwheel$core$immutable_ns_QMARK_(ns){
var ns__$1 = cljs.core.name.call(null,ns);
var or__4126__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["cljs.nodejs",null,"goog",null,"figwheel.connect",null,"cljs.core",null,"figwheel.preload",null], null), null).call(null,ns__$1);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return ((goog.string.startsWith("clojure.",ns__$1)) || (goog.string.startsWith("goog.",ns__$1)));
}
});

figwheel.core.ns_exists_QMARK_ = (function figwheel$core$ns_exists_QMARK_(ns){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,ns),".")) == null)));
});

figwheel.core.reload_ns_QMARK_ = (function figwheel$core$reload_ns_QMARK_(namespace){
var meta_data = cljs.core.meta.call(null,namespace);
if(cljs.core.not.call(null,figwheel.core.immutable_ns_QMARK_.call(null,namespace))){
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data))){
var or__4126__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return figwheel.core.ns_exists_QMARK_.call(null,namespace);
}
}
} else {
return false;
}
} else {
return false;
}
});

figwheel.core.call_hooks = (function figwheel$core$call_hooks(var_args){
var args__4742__auto__ = [];
var len__4736__auto___10932 = arguments.length;
var i__4737__auto___10933 = (0);
while(true){
if((i__4737__auto___10933 < len__4736__auto___10932)){
args__4742__auto__.push((arguments[i__4737__auto___10933]));

var G__10934 = (i__4737__auto___10933 + (1));
i__4737__auto___10933 = G__10934;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic = (function (hook_key,args){
var hooks = cljs.core.keep.call(null,(function (p__10880){
var vec__10881 = p__10880;
var n = cljs.core.nth.call(null,vec__10881,(0),null);
var mdata = cljs.core.nth.call(null,vec__10881,(1),null);
var temp__5804__auto__ = cljs.core.get_in.call(null,mdata,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),hook_key], null));
if(cljs.core.truth_(temp__5804__auto__)){
var f = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,f], null);
} else {
return null;
}
}),new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,figwheel.core.state)));
var seq__10884 = cljs.core.seq.call(null,hooks);
var chunk__10885 = null;
var count__10886 = (0);
var i__10887 = (0);
while(true){
if((i__10887 < count__10886)){
var vec__10894 = cljs.core._nth.call(null,chunk__10885,i__10887);
var n = cljs.core.nth.call(null,vec__10894,(0),null);
var f = cljs.core.nth.call(null,vec__10894,(1),null);
var temp__5802__auto___10935 = cljs.core.reduce.call(null,((function (seq__10884,chunk__10885,count__10886,i__10887,vec__10894,n,f,hooks){
return (function (p1__10862_SHARP_,p2__10863_SHARP_){
if(cljs.core.truth_(p1__10862_SHARP_)){
return goog.object.get(p1__10862_SHARP_,p2__10863_SHARP_);
} else {
return null;
}
});})(seq__10884,chunk__10885,count__10886,i__10887,vec__10894,n,f,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5802__auto___10935)){
var hook_10936 = temp__5802__auto___10935;
goog.log.info(figwheel.core.logger,["Calling ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

cljs.core.apply.call(null,hook_10936,args);
} else {
goog.log.warning(figwheel.core.logger,["Unable to find ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__10937 = seq__10884;
var G__10938 = chunk__10885;
var G__10939 = count__10886;
var G__10940 = (i__10887 + (1));
seq__10884 = G__10937;
chunk__10885 = G__10938;
count__10886 = G__10939;
i__10887 = G__10940;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__10884);
if(temp__5804__auto__){
var seq__10884__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10884__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__10884__$1);
var G__10941 = cljs.core.chunk_rest.call(null,seq__10884__$1);
var G__10942 = c__4556__auto__;
var G__10943 = cljs.core.count.call(null,c__4556__auto__);
var G__10944 = (0);
seq__10884 = G__10941;
chunk__10885 = G__10942;
count__10886 = G__10943;
i__10887 = G__10944;
continue;
} else {
var vec__10897 = cljs.core.first.call(null,seq__10884__$1);
var n = cljs.core.nth.call(null,vec__10897,(0),null);
var f = cljs.core.nth.call(null,vec__10897,(1),null);
var temp__5802__auto___10945 = cljs.core.reduce.call(null,((function (seq__10884,chunk__10885,count__10886,i__10887,vec__10897,n,f,seq__10884__$1,temp__5804__auto__,hooks){
return (function (p1__10862_SHARP_,p2__10863_SHARP_){
if(cljs.core.truth_(p1__10862_SHARP_)){
return goog.object.get(p1__10862_SHARP_,p2__10863_SHARP_);
} else {
return null;
}
});})(seq__10884,chunk__10885,count__10886,i__10887,vec__10897,n,f,seq__10884__$1,temp__5804__auto__,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5802__auto___10945)){
var hook_10946 = temp__5802__auto___10945;
goog.log.info(figwheel.core.logger,["Calling ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

cljs.core.apply.call(null,hook_10946,args);
} else {
goog.log.warning(figwheel.core.logger,["Unable to find ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__10947 = cljs.core.next.call(null,seq__10884__$1);
var G__10948 = null;
var G__10949 = (0);
var G__10950 = (0);
seq__10884 = G__10947;
chunk__10885 = G__10948;
count__10886 = G__10949;
i__10887 = G__10950;
continue;
}
} else {
return null;
}
}
break;
}
}));

(figwheel.core.call_hooks.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(figwheel.core.call_hooks.cljs$lang$applyTo = (function (seq10878){
var G__10879 = cljs.core.first.call(null,seq10878);
var seq10878__$1 = cljs.core.next.call(null,seq10878);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10879,seq10878__$1);
}));


figwheel.core.reload_namespaces = (function figwheel$core$reload_namespaces(namespaces,figwheel_meta){
var figwheel_meta__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__10900){
var vec__10901 = p__10900;
var k = cljs.core.nth.call(null,vec__10901,(0),null);
var v = cljs.core.nth.call(null,vec__10901,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),v], null);
})),cljs.core.js__GT_clj.call(null,figwheel_meta,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
var namespaces__$1 = cljs.core.map.call(null,(function (p1__10864_SHARP_){
return cljs.core.with_meta.call(null,cljs.core.symbol.call(null,p1__10864_SHARP_),cljs.core.get.call(null,figwheel_meta__$1,p1__10864_SHARP_));
}),namespaces);
cljs.core.swap_BANG_.call(null,figwheel.core.state,(function (p1__10865_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,p1__10865_SHARP_,new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885),figwheel_meta__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime());
}));

var to_reload = (cljs.core.truth_(((cljs.core.not.call(null,figwheel.core.load_warninged_code))?cljs.core.not_empty.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.core.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null))):false))?null:cljs.core.filter.call(null,(function (p1__10866_SHARP_){
return figwheel.core.reload_ns_QMARK_.call(null,p1__10866_SHARP_);
}),namespaces__$1));
if(cljs.core.empty_QMARK_.call(null,to_reload)){
} else {
figwheel.core.call_hooks.call(null,new cljs.core.Keyword(null,"before-load","before-load",-2060117064),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1], null));

setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.before-load","figwheel.before-load",58978771),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1], null));
}),(0));
}

var seq__10904_10951 = cljs.core.seq.call(null,to_reload);
var chunk__10905_10952 = null;
var count__10906_10953 = (0);
var i__10907_10954 = (0);
while(true){
if((i__10907_10954 < count__10906_10953)){
var ns_10955 = cljs.core._nth.call(null,chunk__10905_10952,i__10907_10954);
goog.require(cljs.core.name.call(null,ns_10955),true);


var G__10956 = seq__10904_10951;
var G__10957 = chunk__10905_10952;
var G__10958 = count__10906_10953;
var G__10959 = (i__10907_10954 + (1));
seq__10904_10951 = G__10956;
chunk__10905_10952 = G__10957;
count__10906_10953 = G__10958;
i__10907_10954 = G__10959;
continue;
} else {
var temp__5804__auto___10960 = cljs.core.seq.call(null,seq__10904_10951);
if(temp__5804__auto___10960){
var seq__10904_10961__$1 = temp__5804__auto___10960;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10904_10961__$1)){
var c__4556__auto___10962 = cljs.core.chunk_first.call(null,seq__10904_10961__$1);
var G__10963 = cljs.core.chunk_rest.call(null,seq__10904_10961__$1);
var G__10964 = c__4556__auto___10962;
var G__10965 = cljs.core.count.call(null,c__4556__auto___10962);
var G__10966 = (0);
seq__10904_10951 = G__10963;
chunk__10905_10952 = G__10964;
count__10906_10953 = G__10965;
i__10907_10954 = G__10966;
continue;
} else {
var ns_10967 = cljs.core.first.call(null,seq__10904_10961__$1);
goog.require(cljs.core.name.call(null,ns_10967),true);


var G__10968 = cljs.core.next.call(null,seq__10904_10961__$1);
var G__10969 = null;
var G__10970 = (0);
var G__10971 = (0);
seq__10904_10951 = G__10968;
chunk__10905_10952 = G__10969;
count__10906_10953 = G__10970;
i__10907_10954 = G__10971;
continue;
}
} else {
}
}
break;
}

var after_reload_fn_10972 = (function (){
try{if(cljs.core.truth_(cljs.core.not_empty.call(null,to_reload))){
goog.log.info(figwheel.core.logger,["loaded ",cljs.core.pr_str.call(null,to_reload)].join(''));

figwheel.core.call_hooks.call(null,new cljs.core.Keyword(null,"after-load","after-load",-1278503285),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reloaded-namespaces","reloaded-namespaces",1589557425),to_reload], null));

figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.after-load","figwheel.after-load",-1913099389),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reloaded-namespaces","reloaded-namespaces",1589557425),to_reload], null));
} else {
}

var temp__5804__auto__ = cljs.core.not_empty.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.set.call(null,to_reload)),namespaces__$1));
if(cljs.core.truth_(temp__5804__auto__)){
var not_loaded = temp__5804__auto__;
return goog.log.info(figwheel.core.logger,["did not load ",cljs.core.pr_str.call(null,not_loaded)].join(''));
} else {
return null;
}
}finally {cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.assoc,new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),cljs.core.PersistentArrayMap.EMPTY);
}});
if((((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined')) && ((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.after_reloads !== 'undefined')))){
figwheel.repl.after_reloads(after_reload_fn_10972);
} else {
setTimeout(after_reload_fn_10972,(100));
}

return null;
});
goog.exportSymbol('figwheel.core.reload_namespaces', figwheel.core.reload_namespaces);

figwheel.core.compile_warnings = (function figwheel$core$compile_warnings(warnings){
if(cljs.core.empty_QMARK_.call(null,warnings)){
} else {
setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.compile-warnings","figwheel.compile-warnings",-2015032448),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"warnings","warnings",-735437651),warnings], null));
}),(0));
}

cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null),cljs.core.concat,warnings);

var seq__10908 = cljs.core.seq.call(null,warnings);
var chunk__10909 = null;
var count__10910 = (0);
var i__10911 = (0);
while(true){
if((i__10911 < count__10910)){
var warning = cljs.core._nth.call(null,chunk__10909,i__10911);
goog.log.warning(figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",figwheel.core.file_line_column.call(null,warning)].join(''));


var G__10973 = seq__10908;
var G__10974 = chunk__10909;
var G__10975 = count__10910;
var G__10976 = (i__10911 + (1));
seq__10908 = G__10973;
chunk__10909 = G__10974;
count__10910 = G__10975;
i__10911 = G__10976;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__10908);
if(temp__5804__auto__){
var seq__10908__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10908__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__10908__$1);
var G__10977 = cljs.core.chunk_rest.call(null,seq__10908__$1);
var G__10978 = c__4556__auto__;
var G__10979 = cljs.core.count.call(null,c__4556__auto__);
var G__10980 = (0);
seq__10908 = G__10977;
chunk__10909 = G__10978;
count__10910 = G__10979;
i__10911 = G__10980;
continue;
} else {
var warning = cljs.core.first.call(null,seq__10908__$1);
goog.log.warning(figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",figwheel.core.file_line_column.call(null,warning)].join(''));


var G__10981 = cljs.core.next.call(null,seq__10908__$1);
var G__10982 = null;
var G__10983 = (0);
var G__10984 = (0);
seq__10908 = G__10981;
chunk__10909 = G__10982;
count__10910 = G__10983;
i__10911 = G__10984;
continue;
}
} else {
return null;
}
}
break;
}
});
goog.exportSymbol('figwheel.core.compile_warnings', figwheel.core.compile_warnings);

figwheel.core.compile_warnings_remote = (function figwheel$core$compile_warnings_remote(warnings_json){
return figwheel.core.compile_warnings.call(null,cljs.core.js__GT_clj.call(null,warnings_json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
goog.exportSymbol('figwheel.core.compile_warnings_remote', figwheel.core.compile_warnings_remote);

figwheel.core.handle_exception = (function figwheel$core$handle_exception(p__10912){
var map__10913 = p__10912;
var map__10913__$1 = (((((!((map__10913 == null))))?(((((map__10913.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10913.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10913):map__10913);
var exception_data = map__10913__$1;
var file = cljs.core.get.call(null,map__10913__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var type = cljs.core.get.call(null,map__10913__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__10913__$1,new cljs.core.Keyword(null,"message","message",-406056002));
try{setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.compile-exception","figwheel.compile-exception",1092880746),exception_data);
}),(0));

cljs.core.swap_BANG_.call(null,figwheel.core.state,(function (p1__10867_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,p1__10867_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null),exception_data);
}));

return goog.log.warning(figwheel.core.logger,(function (){var G__10915 = "Compile Exception - ";
var G__10915__$1 = (cljs.core.truth_((function (){var or__4126__auto__ = type;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return message;
}
})())?[G__10915,clojure.string.join.call(null," : ",cljs.core.filter.call(null,cljs.core.some_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,message], null)))].join(''):G__10915);
if(cljs.core.truth_(file)){
return [G__10915__$1," in ",figwheel.core.file_line_column.call(null,exception_data)].join('');
} else {
return G__10915__$1;
}
})());
}finally {cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715)], null),cljs.core.PersistentArrayMap.EMPTY);
}});
goog.exportSymbol('figwheel.core.handle_exception', figwheel.core.handle_exception);

figwheel.core.handle_exception_remote = (function figwheel$core$handle_exception_remote(exception_data){
return figwheel.core.handle_exception.call(null,cljs.core.js__GT_clj.call(null,exception_data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
goog.exportSymbol('figwheel.core.handle_exception_remote', figwheel.core.handle_exception_remote);

//# sourceMappingURL=core.js.map
