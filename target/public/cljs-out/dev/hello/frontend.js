// Compiled by ClojureScript 1.10.773 {}
goog.provide('hello.frontend');
goog.require('cljs.core');
goog.require('ajax.core');
hello.frontend.error_handler = (function hello$frontend$error_handler(response){
var map__14349 = response;
var map__14349__$1 = (((((!((map__14349 == null))))?(((((map__14349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14349):map__14349);
var status = cljs.core.get.call(null,map__14349__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__14349__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,["AJAX ERROR: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
hello.frontend.get_element = (function hello$frontend$get_element(id){
return document.getElementById(id);
});
hello.frontend.set_element = (function hello$frontend$set_element(id,html){
return (hello.frontend.get_element.call(null,id).innerHTML = html);
});
hello.frontend.handler = (function hello$frontend$handler(response){
return hello.frontend.set_element.call(null,"bkd",["<h2>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(response),"</h2>"].join(''));
});
hello.frontend.get_backend = (function hello$frontend$get_backend(){
return ajax.core.GET.call(null,"http://localhost:8888/",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),hello.frontend.handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),hello.frontend.error_handler], null));
});
setInterval(hello.frontend.get_backend,(4000));

//# sourceMappingURL=frontend.js.map
