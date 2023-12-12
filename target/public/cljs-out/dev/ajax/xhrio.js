// Compiled by ClojureScript 1.10.773 {}
goog.provide('ajax.xhrio');
goog.require('cljs.core');
goog.require('goog.net.EventType');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.XhrIo');
goog.require('goog.net.XhrManager');
goog.require('goog.Uri');
goog.require('goog.json');
goog.require('goog.events');
goog.require('ajax.protocols');
(goog.net.XhrIo.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(goog.net.XhrIo.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__10587,handler){
var map__10588 = p__10587;
var map__10588__$1 = (((((!((map__10588 == null))))?(((((map__10588.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10588.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10588):map__10588);
var uri = cljs.core.get.call(null,map__10588__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__10588__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__10588__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__10588__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__10588__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__10588__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__10588__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var progress_handler = cljs.core.get.call(null,map__10588__$1,new cljs.core.Keyword(null,"progress-handler","progress-handler",333585589));
var this$__$1 = this;
var temp__5804__auto___10592 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5804__auto___10592)){
var response_type_10593 = temp__5804__auto___10592;
this$__$1.setResponseType(cljs.core.name.call(null,response_type_10593));
} else {
}

if(cljs.core.fn_QMARK_.call(null,progress_handler)){
var G__10590_10594 = this$__$1;
G__10590_10594.setProgressEventsEnabled(true);

goog.events.listen(G__10590_10594,goog.net.EventType.UPLOAD_PROGRESS,progress_handler);

} else {
}

var G__10591 = this$__$1;
goog.events.listen(G__10591,goog.net.EventType.COMPLETE,(function (p1__10586_SHARP_){
return handler.call(null,p1__10586_SHARP_.target);
}));

G__10591.setTimeoutInterval(timeout);

G__10591.setWithCredentials(with_credentials);

G__10591.send(uri,method,body,cljs.core.clj__GT_js.call(null,headers));

return G__10591;
}));

(goog.net.XhrIo.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(goog.net.XhrIo.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort(goog.net.ErrorCode.ABORT);
}));

(goog.net.XhrIo.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(goog.net.XhrIo.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getResponse();
}));

(goog.net.XhrIo.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getStatus();
}));

(goog.net.XhrIo.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getStatusText();
}));

(goog.net.XhrIo.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.js__GT_clj.call(null,this$__$1.getResponseHeaders());
}));

(goog.net.XhrIo.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(goog.net.XhrIo.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,this$__$1.getLastErrorCode(),goog.net.ErrorCode.ABORT);
}));
(goog.net.XhrManager.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(goog.net.XhrManager.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__10595,handler){
var map__10596 = p__10595;
var map__10596__$1 = (((((!((map__10596 == null))))?(((((map__10596.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10596.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10596):map__10596);
var uri = cljs.core.get.call(null,map__10596__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__10596__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__10596__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__10596__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var id = cljs.core.get.call(null,map__10596__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var timeout = cljs.core.get.call(null,map__10596__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var priority = cljs.core.get.call(null,map__10596__$1,new cljs.core.Keyword(null,"priority","priority",1431093715));
var max_retries = cljs.core.get.call(null,map__10596__$1,new cljs.core.Keyword(null,"max-retries","max-retries",-1933762121));
var this$__$1 = this;
var G__10598 = this$__$1;
G__10598.setTimeoutInterval(timeout);

G__10598.send(id,uri,method,body,cljs.core.clj__GT_js.call(null,headers),priority,handler,max_retries);

return G__10598;
}));

//# sourceMappingURL=xhrio.js.map
