// Compiled by ClojureScript 1.10.773 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.call(null,(function (headers,header_line){
if(goog.string.isEmptyOrWhitespace(header_line)){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.call(null,headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = (((typeof goog !== 'undefined') && (typeof goog.global !== 'undefined') && (typeof goog.global.XMLHttpRequest !== 'undefined'))?goog.global.XMLHttpRequest:(((typeof require !== 'undefined'))?(function (){var req = require;
return req.call(null,"xmlhttprequest").XMLHttpRequest;
})():null));
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__12553,handler){
var map__12554 = p__12553;
var map__12554__$1 = (((((!((map__12554 == null))))?(((((map__12554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12554.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12554):map__12554);
var uri = cljs.core.get.call(null,map__12554__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__12554__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__12554__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__12554__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__12554__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__12554__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__12554__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__12552_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__12552_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5804__auto___12572 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5804__auto___12572)){
var response_type_12573 = temp__5804__auto___12572;
(this$__$1.responseType = cljs.core.name.call(null,response_type_12573));
} else {
}

var seq__12556_12574 = cljs.core.seq.call(null,headers);
var chunk__12557_12575 = null;
var count__12558_12576 = (0);
var i__12559_12577 = (0);
while(true){
if((i__12559_12577 < count__12558_12576)){
var vec__12566_12578 = cljs.core._nth.call(null,chunk__12557_12575,i__12559_12577);
var k_12579 = cljs.core.nth.call(null,vec__12566_12578,(0),null);
var v_12580 = cljs.core.nth.call(null,vec__12566_12578,(1),null);
this$__$1.setRequestHeader(k_12579,v_12580);


var G__12581 = seq__12556_12574;
var G__12582 = chunk__12557_12575;
var G__12583 = count__12558_12576;
var G__12584 = (i__12559_12577 + (1));
seq__12556_12574 = G__12581;
chunk__12557_12575 = G__12582;
count__12558_12576 = G__12583;
i__12559_12577 = G__12584;
continue;
} else {
var temp__5804__auto___12585 = cljs.core.seq.call(null,seq__12556_12574);
if(temp__5804__auto___12585){
var seq__12556_12586__$1 = temp__5804__auto___12585;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12556_12586__$1)){
var c__4556__auto___12587 = cljs.core.chunk_first.call(null,seq__12556_12586__$1);
var G__12588 = cljs.core.chunk_rest.call(null,seq__12556_12586__$1);
var G__12589 = c__4556__auto___12587;
var G__12590 = cljs.core.count.call(null,c__4556__auto___12587);
var G__12591 = (0);
seq__12556_12574 = G__12588;
chunk__12557_12575 = G__12589;
count__12558_12576 = G__12590;
i__12559_12577 = G__12591;
continue;
} else {
var vec__12569_12592 = cljs.core.first.call(null,seq__12556_12586__$1);
var k_12593 = cljs.core.nth.call(null,vec__12569_12592,(0),null);
var v_12594 = cljs.core.nth.call(null,vec__12569_12592,(1),null);
this$__$1.setRequestHeader(k_12593,v_12594);


var G__12595 = cljs.core.next.call(null,seq__12556_12586__$1);
var G__12596 = null;
var G__12597 = (0);
var G__12598 = (0);
seq__12556_12574 = G__12595;
chunk__12557_12575 = G__12596;
count__12558_12576 = G__12597;
i__12559_12577 = G__12598;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__4126__auto__ = body;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers.call(null,this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
}));

//# sourceMappingURL=xml_http_request.js.map
