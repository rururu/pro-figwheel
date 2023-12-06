// Compiled by ClojureScript 1.10.773 {}
goog.provide('hello.page');
goog.require('cljs.core');
hello.page.get_element = (function hello$page$get_element(id){
return document.getElementById(id);
});
hello.page.set_element = (function hello$page$set_element(id,html){
return (hello.page.get_element.call(null,id).innerHTML = html);
});
hello.page.update_page = (function hello$page$update_page(html){
return hello.page.set_element.call(null,"app",html);
});
hello.page.update_page.call(null,"Stop");

//# sourceMappingURL=page.js.map
