// Compiled by ClojureScript 1.10.773 {}
goog.provide('camel_snake_kebab.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('camel_snake_kebab.internals.misc');
goog.require('camel_snake_kebab.internals.alter_name');



























/**
 * Converts the case of a string according to the rule for the first
 *   word, remaining words, and the separator.
 */
camel_snake_kebab.core.convert_case = (function camel_snake_kebab$core$convert_case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___22850 = arguments.length;
var i__4737__auto___22851 = (0);
while(true){
if((i__4737__auto___22851 < len__4736__auto___22850)){
args__4742__auto__.push((arguments[i__4737__auto___22851]));

var G__22852 = (i__4737__auto___22851 + (1));
i__4737__auto___22851 = G__22852;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,rest){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,first_fn,rest_fn,sep,s,rest);
}));

(camel_snake_kebab.core.convert_case.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq22845){
var G__22846 = cljs.core.first.call(null,seq22845);
var seq22845__$1 = cljs.core.next.call(null,seq22845);
var G__22847 = cljs.core.first.call(null,seq22845__$1);
var seq22845__$2 = cljs.core.next.call(null,seq22845__$1);
var G__22848 = cljs.core.first.call(null,seq22845__$2);
var seq22845__$3 = cljs.core.next.call(null,seq22845__$2);
var G__22849 = cljs.core.first.call(null,seq22845__$3);
var seq22845__$4 = cljs.core.next.call(null,seq22845__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22846,G__22847,G__22848,G__22849,seq22845__$4);
}));

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__4742__auto__ = [];
var len__4736__auto___22861 = arguments.length;
var i__4737__auto___22862 = (0);
while(true){
if((i__4737__auto___22862 < len__4736__auto___22861)){
args__4742__auto__.push((arguments[i__4737__auto___22862]));

var G__22863 = (i__4737__auto___22862 + (1));
i__4737__auto___22862 = G__22863;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__22658__auto__,rest__22659__auto__){
var convert_case__22660__auto__ = (function (p1__22657__22661__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__22657__22661__auto__,rest__22659__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__22658__auto__,convert_case__22660__auto__);
}));

(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq22853){
var G__22854 = cljs.core.first.call(null,seq22853);
var seq22853__$1 = cljs.core.next.call(null,seq22853);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22854,seq22853__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__4742__auto__ = [];
var len__4736__auto___22864 = arguments.length;
var i__4737__auto___22865 = (0);
while(true){
if((i__4737__auto___22865 < len__4736__auto___22864)){
args__4742__auto__.push((arguments[i__4737__auto___22865]));

var G__22866 = (i__4737__auto___22865 + (1));
i__4737__auto___22865 = G__22866;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__22663__auto__,rest__22664__auto__){
return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__22663__auto__),rest__22664__auto__));
}));

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq22855){
var G__22856 = cljs.core.first.call(null,seq22855);
var seq22855__$1 = cljs.core.next.call(null,seq22855);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22856,seq22855__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___22867 = arguments.length;
var i__4737__auto___22868 = (0);
while(true){
if((i__4737__auto___22868 < len__4736__auto___22867)){
args__4742__auto__.push((arguments[i__4737__auto___22868]));

var G__22869 = (i__4737__auto___22868 + (1));
i__4737__auto___22868 = G__22869;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__22663__auto__,rest__22664__auto__){
return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__22663__auto__),rest__22664__auto__));
}));

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq22857){
var G__22858 = cljs.core.first.call(null,seq22857);
var seq22857__$1 = cljs.core.next.call(null,seq22857);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22858,seq22857__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___22870 = arguments.length;
var i__4737__auto___22871 = (0);
while(true){
if((i__4737__auto___22871 < len__4736__auto___22870)){
args__4742__auto__.push((arguments[i__4737__auto___22871]));

var G__22872 = (i__4737__auto___22871 + (1));
i__4737__auto___22871 = G__22872;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__22663__auto__,rest__22664__auto__){
return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__22663__auto__),rest__22664__auto__));
}));

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq22859){
var G__22860 = cljs.core.first.call(null,seq22859);
var seq22859__$1 = cljs.core.next.call(null,seq22859);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22860,seq22859__$1);
}));

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___22881 = arguments.length;
var i__4737__auto___22882 = (0);
while(true){
if((i__4737__auto___22882 < len__4736__auto___22881)){
args__4742__auto__.push((arguments[i__4737__auto___22882]));

var G__22883 = (i__4737__auto___22882 + (1));
i__4737__auto___22882 = G__22883;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__22658__auto__,rest__22659__auto__){
var convert_case__22660__auto__ = (function (p1__22657__22661__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__22657__22661__auto__,rest__22659__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__22658__auto__,convert_case__22660__auto__);
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq22873){
var G__22874 = cljs.core.first.call(null,seq22873);
var seq22873__$1 = cljs.core.next.call(null,seq22873);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22874,seq22873__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__4742__auto__ = [];
var len__4736__auto___22884 = arguments.length;
var i__4737__auto___22885 = (0);
while(true){
if((i__4737__auto___22885 < len__4736__auto___22884)){
args__4742__auto__.push((arguments[i__4737__auto___22885]));

var G__22886 = (i__4737__auto___22885 + (1));
i__4737__auto___22885 = G__22886;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__22663__auto__,rest__22664__auto__){
return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__22663__auto__),rest__22664__auto__));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq22875){
var G__22876 = cljs.core.first.call(null,seq22875);
var seq22875__$1 = cljs.core.next.call(null,seq22875);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22876,seq22875__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___22887 = arguments.length;
var i__4737__auto___22888 = (0);
while(true){
if((i__4737__auto___22888 < len__4736__auto___22887)){
args__4742__auto__.push((arguments[i__4737__auto___22888]));

var G__22889 = (i__4737__auto___22888 + (1));
i__4737__auto___22888 = G__22889;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__22663__auto__,rest__22664__auto__){
return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__22663__auto__),rest__22664__auto__));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq22877){
var G__22878 = cljs.core.first.call(null,seq22877);
var seq22877__$1 = cljs.core.next.call(null,seq22877);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22878,seq22877__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___22890 = arguments.length;
var i__4737__auto___22891 = (0);
while(true){
if((i__4737__auto___22891 < len__4736__auto___22890)){
args__4742__auto__.push((arguments[i__4737__auto___22891]));

var G__22892 = (i__4737__auto___22891 + (1));
i__4737__auto___22891 = G__22892;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__22663__auto__,rest__22664__auto__){
return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__22663__auto__),rest__22664__auto__));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq22879){
var G__22880 = cljs.core.first.call(null,seq22879);
var seq22879__$1 = cljs.core.next.call(null,seq22879);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22880,seq22879__$1);
}));

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__4742__auto__ = [];
var len__4736__auto___22901 = arguments.length;
var i__4737__auto___22902 = (0);
while(true){
if((i__4737__auto___22902 < len__4736__auto___22901)){
args__4742__auto__.push((arguments[i__4737__auto___22902]));

var G__22903 = (i__4737__auto___22902 + (1));
i__4737__auto___22902 = G__22903;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__22658__auto__,rest__22659__auto__){
var convert_case__22660__auto__ = (function (p1__22657__22661__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__22657__22661__auto__,rest__22659__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__22658__auto__,convert_case__22660__auto__);
}));

(camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq22893){
var G__22894 = cljs.core.first.call(null,seq22893);
var seq22893__$1 = cljs.core.next.call(null,seq22893);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22894,seq22893__$1);
}));


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__4742__auto__ = [];
var len__4736__auto___22904 = arguments.length;
var i__4737__auto___22905 = (0);
while(true){
if((i__4737__auto___22905 < len__4736__auto___22904)){
args__4742__auto__.push((arguments[i__4737__auto___22905]));

var G__22906 = (i__4737__auto___22905 + (1));
i__4737__auto___22905 = G__22906;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__22663__auto__,rest__22664__auto__){
return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__22663__auto__),rest__22664__auto__));
}));

(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq22895){
var G__22896 = cljs.core.first.call(null,seq22895);
var seq22895__$1 = cljs.core.next.call(null,seq22895);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22896,seq22895__$1);
}));


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___22907 = arguments.length;
var i__4737__auto___22908 = (0);
while(true){
if((i__4737__auto___22908 < len__4736__auto___22907)){
args__4742__auto__.push((arguments[i__4737__auto___22908]));

var G__22909 = (i__4737__auto___22908 + (1));
i__4737__auto___22908 = G__22909;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__22663__auto__,rest__22664__auto__){
return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__22663__auto__),rest__22664__auto__));
}));

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq22897){
var G__22898 = cljs.core.first.call(null,seq22897);
var seq22897__$1 = cljs.core.next.call(null,seq22897);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22898,seq22897__$1);
}));


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___22910 = arguments.length;
var i__4737__auto___22911 = (0);
while(true){
if((i__4737__auto___22911 < len__4736__auto___22910)){
args__4742__auto__.push((arguments[i__4737__auto___22911]));

var G__22912 = (i__4737__auto___22911 + (1));
i__4737__auto___22911 = G__22912;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__22663__auto__,rest__22664__auto__){
return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__22663__auto__),rest__22664__auto__));
}));

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq22899){
var G__22900 = cljs.core.first.call(null,seq22899);
var seq22899__$1 = cljs.core.next.call(null,seq22899);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22900,seq22899__$1);
}));

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__4742__auto__ = [];
var len__4736__auto___22921 = arguments.length;
var i__4737__auto___22922 = (0);
while(true){
if((i__4737__auto___22922 < len__4736__auto___22921)){
args__4742__auto__.push((arguments[i__4737__auto___22922]));

var G__22923 = (i__4737__auto___22922 + (1));
i__4737__auto___22922 = G__22923;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__22658__auto__,rest__22659__auto__){
var convert_case__22660__auto__ = (function (p1__22657__22661__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__22657__22661__auto__,rest__22659__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__22658__auto__,convert_case__22660__auto__);
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq22913){
var G__22914 = cljs.core.first.call(null,seq22913);
var seq22913__$1 = cljs.core.next.call(null,seq22913);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22914,seq22913__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__4742__auto__ = [];
var len__4736__auto___22924 = arguments.length;
var i__4737__auto___22925 = (0);
while(true){
if((i__4737__auto___22925 < len__4736__auto___22924)){
args__4742__auto__.push((arguments[i__4737__auto___22925]));

var G__22926 = (i__4737__auto___22925 + (1));
i__4737__auto___22925 = G__22926;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__22663__auto__,rest__22664__auto__){
return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__22663__auto__),rest__22664__auto__));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq22915){
var G__22916 = cljs.core.first.call(null,seq22915);
var seq22915__$1 = cljs.core.next.call(null,seq22915);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22916,seq22915__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__4742__auto__ = [];
var len__4736__auto___22927 = arguments.length;
var i__4737__auto___22928 = (0);
while(true){
if((i__4737__auto___22928 < len__4736__auto___22927)){
args__4742__auto__.push((arguments[i__4737__auto___22928]));

var G__22929 = (i__4737__auto___22928 + (1));
i__4737__auto___22928 = G__22929;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__22663__auto__,rest__22664__auto__){
return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__22663__auto__),rest__22664__auto__));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq22917){
var G__22918 = cljs.core.first.call(null,seq22917);
var seq22917__$1 = cljs.core.next.call(null,seq22917);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22918,seq22917__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__4742__auto__ = [];
var len__4736__auto___22930 = arguments.length;
var i__4737__auto___22931 = (0);
while(true){
if((i__4737__auto___22931 < len__4736__auto___22930)){
args__4742__auto__.push((arguments[i__4737__auto___22931]));

var G__22932 = (i__4737__auto___22931 + (1));
i__4737__auto___22931 = G__22932;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__22663__auto__,rest__22664__auto__){
return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__22663__auto__),rest__22664__auto__));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq22919){
var G__22920 = cljs.core.first.call(null,seq22919);
var seq22919__$1 = cljs.core.next.call(null,seq22919);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22920,seq22919__$1);
}));

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___22941 = arguments.length;
var i__4737__auto___22942 = (0);
while(true){
if((i__4737__auto___22942 < len__4736__auto___22941)){
args__4742__auto__.push((arguments[i__4737__auto___22942]));

var G__22943 = (i__4737__auto___22942 + (1));
i__4737__auto___22942 = G__22943;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__22658__auto__,rest__22659__auto__){
var convert_case__22660__auto__ = (function (p1__22657__22661__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__22657__22661__auto__,rest__22659__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__22658__auto__,convert_case__22660__auto__);
}));

(camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq22933){
var G__22934 = cljs.core.first.call(null,seq22933);
var seq22933__$1 = cljs.core.next.call(null,seq22933);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22934,seq22933__$1);
}));


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__4742__auto__ = [];
var len__4736__auto___22944 = arguments.length;
var i__4737__auto___22945 = (0);
while(true){
if((i__4737__auto___22945 < len__4736__auto___22944)){
args__4742__auto__.push((arguments[i__4737__auto___22945]));

var G__22946 = (i__4737__auto___22945 + (1));
i__4737__auto___22945 = G__22946;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__22663__auto__,rest__22664__auto__){
return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__22663__auto__),rest__22664__auto__));
}));

(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq22935){
var G__22936 = cljs.core.first.call(null,seq22935);
var seq22935__$1 = cljs.core.next.call(null,seq22935);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22936,seq22935__$1);
}));


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___22947 = arguments.length;
var i__4737__auto___22948 = (0);
while(true){
if((i__4737__auto___22948 < len__4736__auto___22947)){
args__4742__auto__.push((arguments[i__4737__auto___22948]));

var G__22949 = (i__4737__auto___22948 + (1));
i__4737__auto___22948 = G__22949;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__22663__auto__,rest__22664__auto__){
return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__22663__auto__),rest__22664__auto__));
}));

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq22937){
var G__22938 = cljs.core.first.call(null,seq22937);
var seq22937__$1 = cljs.core.next.call(null,seq22937);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22938,seq22937__$1);
}));


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___22950 = arguments.length;
var i__4737__auto___22951 = (0);
while(true){
if((i__4737__auto___22951 < len__4736__auto___22950)){
args__4742__auto__.push((arguments[i__4737__auto___22951]));

var G__22952 = (i__4737__auto___22951 + (1));
i__4737__auto___22951 = G__22952;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__22663__auto__,rest__22664__auto__){
return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__22663__auto__),rest__22664__auto__));
}));

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq22939){
var G__22940 = cljs.core.first.call(null,seq22939);
var seq22939__$1 = cljs.core.next.call(null,seq22939);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22940,seq22939__$1);
}));

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___22961 = arguments.length;
var i__4737__auto___22962 = (0);
while(true){
if((i__4737__auto___22962 < len__4736__auto___22961)){
args__4742__auto__.push((arguments[i__4737__auto___22962]));

var G__22963 = (i__4737__auto___22962 + (1));
i__4737__auto___22962 = G__22963;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__22658__auto__,rest__22659__auto__){
var convert_case__22660__auto__ = (function (p1__22657__22661__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__22657__22661__auto__,rest__22659__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__22658__auto__,convert_case__22660__auto__);
}));

(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq22953){
var G__22954 = cljs.core.first.call(null,seq22953);
var seq22953__$1 = cljs.core.next.call(null,seq22953);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22954,seq22953__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__4742__auto__ = [];
var len__4736__auto___22964 = arguments.length;
var i__4737__auto___22965 = (0);
while(true){
if((i__4737__auto___22965 < len__4736__auto___22964)){
args__4742__auto__.push((arguments[i__4737__auto___22965]));

var G__22966 = (i__4737__auto___22965 + (1));
i__4737__auto___22965 = G__22966;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__22663__auto__,rest__22664__auto__){
return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__22663__auto__),rest__22664__auto__));
}));

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq22955){
var G__22956 = cljs.core.first.call(null,seq22955);
var seq22955__$1 = cljs.core.next.call(null,seq22955);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22956,seq22955__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___22967 = arguments.length;
var i__4737__auto___22968 = (0);
while(true){
if((i__4737__auto___22968 < len__4736__auto___22967)){
args__4742__auto__.push((arguments[i__4737__auto___22968]));

var G__22969 = (i__4737__auto___22968 + (1));
i__4737__auto___22968 = G__22969;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__22663__auto__,rest__22664__auto__){
return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__22663__auto__),rest__22664__auto__));
}));

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq22957){
var G__22958 = cljs.core.first.call(null,seq22957);
var seq22957__$1 = cljs.core.next.call(null,seq22957);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22958,seq22957__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___22970 = arguments.length;
var i__4737__auto___22971 = (0);
while(true){
if((i__4737__auto___22971 < len__4736__auto___22970)){
args__4742__auto__.push((arguments[i__4737__auto___22971]));

var G__22972 = (i__4737__auto___22971 + (1));
i__4737__auto___22971 = G__22972;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__22663__auto__,rest__22664__auto__){
return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__22663__auto__),rest__22664__auto__));
}));

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq22959){
var G__22960 = cljs.core.first.call(null,seq22959);
var seq22959__$1 = cljs.core.next.call(null,seq22959);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22960,seq22959__$1);
}));

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___22981 = arguments.length;
var i__4737__auto___22982 = (0);
while(true){
if((i__4737__auto___22982 < len__4736__auto___22981)){
args__4742__auto__.push((arguments[i__4737__auto___22982]));

var G__22983 = (i__4737__auto___22982 + (1));
i__4737__auto___22982 = G__22983;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__22658__auto__,rest__22659__auto__){
var convert_case__22660__auto__ = (function (p1__22657__22661__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__22657__22661__auto__,rest__22659__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__22658__auto__,convert_case__22660__auto__);
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq22973){
var G__22974 = cljs.core.first.call(null,seq22973);
var seq22973__$1 = cljs.core.next.call(null,seq22973);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22974,seq22973__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__4742__auto__ = [];
var len__4736__auto___22984 = arguments.length;
var i__4737__auto___22985 = (0);
while(true){
if((i__4737__auto___22985 < len__4736__auto___22984)){
args__4742__auto__.push((arguments[i__4737__auto___22985]));

var G__22986 = (i__4737__auto___22985 + (1));
i__4737__auto___22985 = G__22986;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__22663__auto__,rest__22664__auto__){
return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__22663__auto__),rest__22664__auto__));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq22975){
var G__22976 = cljs.core.first.call(null,seq22975);
var seq22975__$1 = cljs.core.next.call(null,seq22975);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22976,seq22975__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___22987 = arguments.length;
var i__4737__auto___22988 = (0);
while(true){
if((i__4737__auto___22988 < len__4736__auto___22987)){
args__4742__auto__.push((arguments[i__4737__auto___22988]));

var G__22989 = (i__4737__auto___22988 + (1));
i__4737__auto___22988 = G__22989;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__22663__auto__,rest__22664__auto__){
return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__22663__auto__),rest__22664__auto__));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq22977){
var G__22978 = cljs.core.first.call(null,seq22977);
var seq22977__$1 = cljs.core.next.call(null,seq22977);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22978,seq22977__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___22990 = arguments.length;
var i__4737__auto___22991 = (0);
while(true){
if((i__4737__auto___22991 < len__4736__auto___22990)){
args__4742__auto__.push((arguments[i__4737__auto___22991]));

var G__22992 = (i__4737__auto___22991 + (1));
i__4737__auto___22991 = G__22992;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__22663__auto__,rest__22664__auto__){
return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__22663__auto__),rest__22664__auto__));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq22979){
var G__22980 = cljs.core.first.call(null,seq22979);
var seq22979__$1 = cljs.core.next.call(null,seq22979);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22980,seq22979__$1);
}));


//# sourceMappingURL=core.js.map
