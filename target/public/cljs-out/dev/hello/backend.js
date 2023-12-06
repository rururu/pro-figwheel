// Compiled by ClojureScript 1.10.773 {}
goog.provide('hello.backend');
goog.require('cljs.core');
goog.require('ajax.core');
hello.backend.error_handler = (function hello$backend$error_handler(response){
var map__19267 = response;
var map__19267__$1 = (((((!((map__19267 == null))))?(((((map__19267.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19267.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19267):map__19267);
var status = cljs.core.get.call(null,map__19267__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__19267__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,["AJAX ERROR: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
hello.backend.get_element = (function hello$backend$get_element(id){
return document.getElementById(id);
});
hello.backend.set_element = (function hello$backend$set_element(id,html){
return (hello.backend.get_element.call(null,id).innerHTML = html);
});
hello.backend.handler = (function hello$backend$handler(response){
return hello.backend.set_element.call(null,"bkd",["<h2>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(response),"</h2>"].join(''));
});
hello.backend.get_backend = (function hello$backend$get_backend(){
return ajax.core.GET.call(null,"http://localhost:8888/",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),hello.backend.handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),hello.backend.error_handler], null));
});
hello.backend.get_backend.call(null);

//# sourceMappingURL=backend.js.map
