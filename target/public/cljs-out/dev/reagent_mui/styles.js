// Compiled by ClojureScript 1.10.773 {}
goog.provide('reagent_mui.styles');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('_CIRCA_mui.material.styles');
goog.require('reagent_mui.util');
reagent_mui.styles.global$module$_CIRCA_mui$material$styles = goog.global["MuiMaterialStyles"];
reagent_mui.styles.theme_provider_STAR_ = reagent.core.adapt_react_class.call(null,reagent_mui.styles.global$module$_CIRCA_mui$material$styles.ThemeProvider);
reagent_mui.styles.experimental_css_vars_provider_STAR_ = reagent.core.adapt_react_class.call(null,reagent_mui.styles.global$module$_CIRCA_mui$material$styles.Experimental_CssVarsProvider);
/**
 * The styled-components pattern. Takes a component and a styles-generating function or a styles object.
 * Creates and returns a new component and gives the input component a `:class-name` prop for applying styles.
 * Note: input component has to take all its props (including children) in a single map.
 */
reagent_mui.styles.styled = (function reagent_mui$styles$styled(var_args){
var G__23292 = arguments.length;
switch (G__23292) {
case 2:
return reagent_mui.styles.styled.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent_mui.styles.styled.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent_mui.styles.styled.cljs$core$IFn$_invoke$arity$2 = (function (component,styles){
return reagent_mui.styles.styled.call(null,component,cljs.core.PersistentArrayMap.EMPTY,styles);
}));

(reagent_mui.styles.styled.cljs$core$IFn$_invoke$arity$3 = (function (component,opts,styles){
var react_component = ((typeof component === 'string')?component:reagent_mui.util.reactify_component.call(null,component));
var styled_component = reagent_mui.styles.global$module$_CIRCA_mui$material$styles.styled(react_component,cljs.core.clj__GT_js.call(null,opts));
return reagent.core.adapt_react_class.call(null,styled_component.call(null,reagent_mui.util.wrap_styles.call(null,styles)));
}));

(reagent_mui.styles.styled.cljs$lang$maxFixedArity = 3);

/**
 * Takes a theme object and enhances it with responsive font options
 * Options may optionally be passed in to override the defaults provided by Material-UI
 * See: https://mui.com/material-ui/customization/theming/#responsivefontsizes-theme-options-theme
 */
reagent_mui.styles.responsive_font_sizes = (function reagent_mui$styles$responsive_font_sizes(var_args){
var G__23295 = arguments.length;
switch (G__23295) {
case 1:
return reagent_mui.styles.responsive_font_sizes.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reagent_mui.styles.responsive_font_sizes.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent_mui.styles.responsive_font_sizes.cljs$core$IFn$_invoke$arity$1 = (function (theme){
return reagent_mui.styles.responsive_font_sizes.call(null,theme,cljs.core.PersistentArrayMap.EMPTY);
}));

(reagent_mui.styles.responsive_font_sizes.cljs$core$IFn$_invoke$arity$2 = (function (theme,options){
return reagent_mui.util.js__GT_clj_SINGLEQUOTE_.call(null,reagent_mui.styles.global$module$_CIRCA_mui$material$styles.responsiveFontSizes(reagent_mui.util.clj__GT_js_SINGLEQUOTE_.call(null,theme),reagent_mui.util.clj__GT_js_SINGLEQUOTE_.call(null,options)));
}));

(reagent_mui.styles.responsive_font_sizes.cljs$lang$maxFixedArity = 2);

/**
 * React hook that returns the theme object.
 * Note: React hooks can't be used in regular Reagent components: https://cljdoc.org/d/reagent/reagent/1.0.0-alpha2/doc/tutorials/react-features#hooks
 */
reagent_mui.styles.use_theme = (function reagent_mui$styles$use_theme(){
return reagent_mui.util.js__GT_clj_SINGLEQUOTE_.call(null,reagent_mui.styles.global$module$_CIRCA_mui$material$styles.useTheme());
});
/**
 * Component that takes a theme object and makes it available in child components.
 * It should preferably be used at the root of your component tree.
 */
reagent_mui.styles.theme_provider = (function reagent_mui$styles$theme_provider(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23299 = arguments.length;
var i__4737__auto___23300 = (0);
while(true){
if((i__4737__auto___23300 < len__4736__auto___23299)){
args__4742__auto__.push((arguments[i__4737__auto___23300]));

var G__23301 = (i__4737__auto___23300 + (1));
i__4737__auto___23300 = G__23301;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return reagent_mui.styles.theme_provider.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(reagent_mui.styles.theme_provider.cljs$core$IFn$_invoke$arity$variadic = (function (theme,children){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.styles.theme_provider_STAR_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"theme","theme",-1247880880),reagent_mui.util.clj__GT_js_SINGLEQUOTE_.call(null,theme)], null)], null),children);
}));

(reagent_mui.styles.theme_provider.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(reagent_mui.styles.theme_provider.cljs$lang$applyTo = (function (seq23297){
var G__23298 = cljs.core.first.call(null,seq23297);
var seq23297__$1 = cljs.core.next.call(null,seq23297);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23298,seq23297__$1);
}));

/**
 * Experimental provider for the theme to inject styles into Material UI components.
 * In addition to providing the theme in the inner React context,
 * this new provider also generates CSS variables out of all tokens in the theme
 * that are not functions, and makes them available in the context as well.
 * Currently only supported by the Button component.
 * See: https://mui.com/material-ui/experimental-api/css-variables/
 */
reagent_mui.styles.experimental_css_vars_provider = (function reagent_mui$styles$experimental_css_vars_provider(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23304 = arguments.length;
var i__4737__auto___23305 = (0);
while(true){
if((i__4737__auto___23305 < len__4736__auto___23304)){
args__4742__auto__.push((arguments[i__4737__auto___23305]));

var G__23306 = (i__4737__auto___23305 + (1));
i__4737__auto___23305 = G__23306;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return reagent_mui.styles.experimental_css_vars_provider.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(reagent_mui.styles.experimental_css_vars_provider.cljs$core$IFn$_invoke$arity$variadic = (function (props,children){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.styles.experimental_css_vars_provider_STAR_,props], null),children);
}));

(reagent_mui.styles.experimental_css_vars_provider.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(reagent_mui.styles.experimental_css_vars_provider.cljs$lang$applyTo = (function (seq23302){
var G__23303 = cljs.core.first.call(null,seq23302);
var seq23302__$1 = cljs.core.next.call(null,seq23302);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23303,seq23302__$1);
}));

/**
 * Hook that provides the current mode and setMode function for experimental-css-vars-provider.
 *   See: https://mui.com/material-ui/experimental-api/css-variables/
 */
reagent_mui.styles.use_color_scheme = (function reagent_mui$styles$use_color_scheme(){
return reagent_mui.util.js__GT_clj_SINGLEQUOTE_.call(null,reagent_mui.styles.global$module$_CIRCA_mui$material$styles.useColorScheme());
});
/**
 * Takes an incomplete theme object and adds the missing parts
 */
reagent_mui.styles.create_theme = (function reagent_mui$styles$create_theme(options){
return reagent_mui.util.js__GT_clj_SINGLEQUOTE_.call(null,reagent_mui.styles.global$module$_CIRCA_mui$material$styles.createTheme(reagent_mui.util.clj__GT_js_SINGLEQUOTE_.call(null,options)));
});

//# sourceMappingURL=styles.js.map
