// Compiled by ClojureScript 1.10.773 {}
goog.provide('reagent_mui.cljs_time_adapter');
goog.require('cljs.core');
goog.require('cljs_time.core');
goog.require('cljs_time.coerce');
goog.require('goog.object');
goog.require('goog.date.DateTime');
goog.require('goog.i18n.DateTimeFormat');
goog.require('goog.i18n.DateTimeParse');
goog.require('goog.i18n.DateTimeSymbols');
reagent_mui.cljs_time_adapter.default_formats = cljs.core.PersistentHashMap.fromArrays(["normalDateWithWeekday","keyboardDateTime12h","keyboardDate","monthShort","keyboardDateTime24h","fullTime","hours24h","fullDateTime","fullDateWithWeekday","hours12h","fullTime24h","minutes","seconds","normalDate","weekday","year","fullDateTime24h","monthAndYear","weekdayShort","shortDate","fullTime12h","fullDate","monthAndDate","month","keyboardDateTime","fullDateTime12h","dayOfMonth"],["EEE, MMM d","dd MMM yyyy hh:mm a","dd MMM yyyy","MMM","dd MMM yyyy HH:mm","HH:mm","HH","dd MMM yyyy HH:mm","EEEE dd MMMM yyyy","hh","HH:mm","mm","ss","d MMMM","EEEE","yyyy","dd MMM yyyy HH:mm","MMMM yyyy","EEE","MMM d","hh:mm aaa","dd MMM yyyy","MMMM d","MMMM","dd MMM yyyy HH:mm","dd MMM yyyy hh:mm a","d"]);
reagent_mui.cljs_time_adapter.format_token_map = cljs.core.PersistentHashMap.fromArrays(["d","HH","cccc","LLLL","s","MMM","ss","ccc","M","mm","EEEEE","LLL","MM","EEE","H","E","dd","a","hh","b","yyyy","EE","EEEE","h","m","ccccc","yy","c","cc","MMMM"],["day","hours",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sectionType","sectionType",-1800682066),"weekDay",new cljs.core.Keyword(null,"contentType","contentType",-1462509576),"letter"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sectionType","sectionType",-1800682066),"month",new cljs.core.Keyword(null,"contentType","contentType",-1462509576),"letter"], null),"seconds",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sectionType","sectionType",-1800682066),"month",new cljs.core.Keyword(null,"contentType","contentType",-1462509576),"letter"], null),"seconds",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sectionType","sectionType",-1800682066),"weekDay",new cljs.core.Keyword(null,"contentType","contentType",-1462509576),"letter"], null),"month","minutes",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sectionType","sectionType",-1800682066),"weekDay",new cljs.core.Keyword(null,"contentType","contentType",-1462509576),"letter"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sectionType","sectionType",-1800682066),"month",new cljs.core.Keyword(null,"contentType","contentType",-1462509576),"letter"], null),"month",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sectionType","sectionType",-1800682066),"weekDay",new cljs.core.Keyword(null,"contentType","contentType",-1462509576),"letter"], null),"hours",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sectionType","sectionType",-1800682066),"weekDay",new cljs.core.Keyword(null,"contentType","contentType",-1462509576),"letter"], null),"day","meridiem","hours","meridiem","year",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sectionType","sectionType",-1800682066),"weekDay",new cljs.core.Keyword(null,"contentType","contentType",-1462509576),"letter"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sectionType","sectionType",-1800682066),"weekDay",new cljs.core.Keyword(null,"contentType","contentType",-1462509576),"letter"], null),"hours","minutes",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sectionType","sectionType",-1800682066),"weekDay",new cljs.core.Keyword(null,"contentType","contentType",-1462509576),"letter"], null),"year","weekDay","weekDay",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sectionType","sectionType",-1800682066),"month",new cljs.core.Keyword(null,"contentType","contentType",-1462509576),"letter"], null)]);
reagent_mui.cljs_time_adapter.to_cljs_date = (function reagent_mui$cljs_time_adapter$to_cljs_date(value){
if((void 0 === value)){
return cljs_time.core.time_now.call(null);
} else {
if((value == null)){
return null;
} else {
if((value instanceof goog.date.DateTime)){
return value;
} else {
if(cljs_time.core.date_QMARK_.call(null,value)){
return cljs_time.coerce.to_date_time.call(null,value);
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
return null;
} else {
if(cljs.core.array_QMARK_.call(null,value)){
return null;
} else {
return cljs_time.coerce.to_date_time.call(null,value);

}
}
}
}
}
}
});
reagent_mui.cljs_time_adapter.to_start_of_day = (function reagent_mui$cljs_time_adapter$to_start_of_day(date){
var G__24042 = date;
G__24042.setHours((0));

G__24042.setMinutes((0));

G__24042.setSeconds((0));

G__24042.setMilliseconds((0));

return G__24042;
});
reagent_mui.cljs_time_adapter.start_of_day = (function reagent_mui$cljs_time_adapter$start_of_day(date){
return reagent_mui.cljs_time_adapter.to_start_of_day.call(null,date.clone());
});
reagent_mui.cljs_time_adapter.to_end_of_day = (function reagent_mui$cljs_time_adapter$to_end_of_day(date){
var G__24043 = date;
G__24043.setHours((23));

G__24043.setMinutes((59));

G__24043.setSeconds((59));

G__24043.setMilliseconds((999));

return G__24043;
});
reagent_mui.cljs_time_adapter.end_of_day = (function reagent_mui$cljs_time_adapter$end_of_day(date){
return reagent_mui.cljs_time_adapter.to_end_of_day.call(null,date.clone());
});
reagent_mui.cljs_time_adapter.start_of_month = (function reagent_mui$cljs_time_adapter$start_of_month(date){
var G__24044 = date.clone();
G__24044.setDate((1));

reagent_mui.cljs_time_adapter.to_start_of_day.call(null,G__24044);

return G__24044;
});
reagent_mui.cljs_time_adapter.end_of_month = (function reagent_mui$cljs_time_adapter$end_of_month(date){
var G__24045 = cljs_time.core.plus.call(null,date,cljs_time.core.months.call(null,(1)));
G__24045.setDate((0));

reagent_mui.cljs_time_adapter.to_end_of_day.call(null,G__24045);

return G__24045;
});
reagent_mui.cljs_time_adapter.end_of_year = (function reagent_mui$cljs_time_adapter$end_of_year(date){
var G__24046 = cljs_time.core.plus.call(null,date,cljs_time.core.years.call(null,(1)));
G__24046.setMonth((0));

G__24046.setDate((0));

reagent_mui.cljs_time_adapter.to_end_of_day.call(null,G__24046);

return G__24046;
});
reagent_mui.cljs_time_adapter.start_of_year = (function reagent_mui$cljs_time_adapter$start_of_year(date){
var G__24047 = date.clone();
G__24047.setMonth((0));

G__24047.setDate((1));

reagent_mui.cljs_time_adapter.to_start_of_day.call(null,G__24047);

return G__24047;
});
reagent_mui.cljs_time_adapter.start_of_week = (function reagent_mui$cljs_time_adapter$start_of_week(date,locale){
var first_day_of_week = locale.FIRSTDAYOFWEEK;
var day_of_week = cljs.core.mod.call(null,(date.getDay() - (1)),(7));
var diff = (((((day_of_week < first_day_of_week))?(7):(0)) + day_of_week) + (- first_day_of_week));
return reagent_mui.cljs_time_adapter.to_start_of_day.call(null,cljs_time.core.minus.call(null,date,cljs_time.core.days.call(null,diff)));
});
reagent_mui.cljs_time_adapter.end_of_week = (function reagent_mui$cljs_time_adapter$end_of_week(date,locale){
return reagent_mui.cljs_time_adapter.to_end_of_day.call(null,cljs_time.core.plus.call(null,reagent_mui.cljs_time_adapter.start_of_week.call(null,date,locale),cljs_time.core.days.call(null,(6))));
});
reagent_mui.cljs_time_adapter.start_of_hour = (function reagent_mui$cljs_time_adapter$start_of_hour(date){
var G__24048 = date.clone();
G__24048.setMinutes((0));

G__24048.setSeconds((0));

G__24048.setMilliseconds((0));

return G__24048;
});
reagent_mui.cljs_time_adapter.date_seq = (function reagent_mui$cljs_time_adapter$date_seq(from,increment){
return cljs.core.iterate.call(null,(function (p1__24049_SHARP_){
return cljs_time.core.plus.call(null,p1__24049_SHARP_,increment);
}),from);
});
reagent_mui.cljs_time_adapter.locale_code = (function reagent_mui$cljs_time_adapter$locale_code(locale){
var pred__24050 = cljs.core.identical_QMARK_;
var expr__24051 = locale;
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_en_ISO,expr__24051))){
return "en_ISO";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_af,expr__24051))){
return "af";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_am,expr__24051))){
return "am";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_ar,expr__24051))){
return "ar";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_ar_DZ,expr__24051))){
return "ar_DZ";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_ar_EG,expr__24051))){
return "ar_EG";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_az,expr__24051))){
return "az";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_be,expr__24051))){
return "be";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_bg,expr__24051))){
return "bg";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_bn,expr__24051))){
return "bn";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_br,expr__24051))){
return "br";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_bs,expr__24051))){
return "bs";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_ca,expr__24051))){
return "ca";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_chr,expr__24051))){
return "chr";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_cs,expr__24051))){
return "cs";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_cy,expr__24051))){
return "cy";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_da,expr__24051))){
return "da";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_de,expr__24051))){
return "de";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_de_AT,expr__24051))){
return "de_AT";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_de_CH,expr__24051))){
return "de_CH";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_el,expr__24051))){
return "el";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_en,expr__24051))){
return "en";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_en_AU,expr__24051))){
return "en_AU";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_en_CA,expr__24051))){
return "en_CA";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_en_GB,expr__24051))){
return "en_GB";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_en_IE,expr__24051))){
return "en_IE";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_en_IN,expr__24051))){
return "en_IN";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_en_SG,expr__24051))){
return "en_SG";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_en_US,expr__24051))){
return "en_US";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_en_ZA,expr__24051))){
return "en_ZA";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_es,expr__24051))){
return "es";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_es_419,expr__24051))){
return "es_419";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_es_ES,expr__24051))){
return "es_ES";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_es_MX,expr__24051))){
return "es_MX";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_es_US,expr__24051))){
return "es_US";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_et,expr__24051))){
return "et";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_eu,expr__24051))){
return "eu";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_fa,expr__24051))){
return "fa";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_fi,expr__24051))){
return "fi";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_fil,expr__24051))){
return "fil";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_fr,expr__24051))){
return "fr";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_fr_CA,expr__24051))){
return "fr_CA";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_ga,expr__24051))){
return "ga";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_gl,expr__24051))){
return "gl";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_gsw,expr__24051))){
return "gsw";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_gu,expr__24051))){
return "gu";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_haw,expr__24051))){
return "haw";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_he,expr__24051))){
return "he";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_hi,expr__24051))){
return "hi";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_hr,expr__24051))){
return "hr";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_hu,expr__24051))){
return "hu";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_hy,expr__24051))){
return "hy";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_id,expr__24051))){
return "id";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_in,expr__24051))){
return "in";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_is,expr__24051))){
return "is";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_it,expr__24051))){
return "it";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_iw,expr__24051))){
return "iw";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_ja,expr__24051))){
return "ja";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_ka,expr__24051))){
return "ka";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_kk,expr__24051))){
return "kk";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_km,expr__24051))){
return "km";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_kn,expr__24051))){
return "kn";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_ko,expr__24051))){
return "ko";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_ky,expr__24051))){
return "ky";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_ln,expr__24051))){
return "ln";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_lo,expr__24051))){
return "lo";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_lt,expr__24051))){
return "lt";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_lv,expr__24051))){
return "lv";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_mk,expr__24051))){
return "mk";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_ml,expr__24051))){
return "ml";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_mn,expr__24051))){
return "mn";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_mo,expr__24051))){
return "mo";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_mr,expr__24051))){
return "mr";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_ms,expr__24051))){
return "ms";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_mt,expr__24051))){
return "mt";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_my,expr__24051))){
return "my";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_nb,expr__24051))){
return "nb";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_ne,expr__24051))){
return "ne";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_nl,expr__24051))){
return "nl";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_no,expr__24051))){
return "no";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_no_NO,expr__24051))){
return "no_NO";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_or,expr__24051))){
return "or";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_pa,expr__24051))){
return "pa";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_pl,expr__24051))){
return "pl";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_pt,expr__24051))){
return "pt";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_pt_BR,expr__24051))){
return "pt_BR";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_pt_PT,expr__24051))){
return "pt_PT";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_ro,expr__24051))){
return "ro";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_ru,expr__24051))){
return "ru";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_sh,expr__24051))){
return "sh";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_si,expr__24051))){
return "si";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_sk,expr__24051))){
return "sk";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_sl,expr__24051))){
return "sl";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_sq,expr__24051))){
return "sq";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_sr,expr__24051))){
return "sr";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_sr_Latn,expr__24051))){
return "sr_Latn";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_sv,expr__24051))){
return "sv";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_sw,expr__24051))){
return "sw";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_ta,expr__24051))){
return "ta";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_te,expr__24051))){
return "te";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_th,expr__24051))){
return "th";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_tl,expr__24051))){
return "tl";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_tr,expr__24051))){
return "tr";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_uk,expr__24051))){
return "uk";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_ur,expr__24051))){
return "ur";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_uz,expr__24051))){
return "uz";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_vi,expr__24051))){
return "vi";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_zh,expr__24051))){
return "zh";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_zh_CN,expr__24051))){
return "zh_CN";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_zh_HK,expr__24051))){
return "zh_HK";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_zh_TW,expr__24051))){
return "zh_TW";
} else {
if(cljs.core.truth_(pred__24050.call(null,goog.i18n.DateTimeSymbols_zu,expr__24051))){
return "zu";
} else {
return "en";
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
/**
 * Adapter for using cljs-time with reagent-mui.lab.localization-provider
 */
reagent_mui.cljs_time_adapter.cljs_time_adapter = (function reagent_mui$cljs_time_adapter$cljs_time_adapter(opts){
var locale = (function (){var or__4126__auto__ = goog.object.get(opts,"locale");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.i18n.DateTimeSymbols;
}
})();
var formats = (function (){var or__4126__auto__ = cljs.core.js__GT_clj.call(null,goog.object.get(opts,"formats"));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return reagent_mui.cljs_time_adapter.default_formats;
}
})();
var format = (function (date,format_str){
var formatter = (new goog.i18n.DateTimeFormat(format_str,locale));
return formatter.format(date);
});
return ({"setHours": (function (date,n){
var G__24054 = date.clone();
G__24054.setHours(n);

return G__24054;
}), "formats": cljs.core.clj__GT_js.call(null,formats), "setMonth": (function (date,n){
var last_day_of_month = cljs_time.core.day.call(null,cljs_time.core.last_day_of_the_month.call(null,cljs_time.core.year.call(null,date),(n + (1))));
var G__24055 = date.clone();
G__24055.setDate((function (){var x__4217__auto__ = last_day_of_month;
var y__4218__auto__ = cljs_time.core.day.call(null,date);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})());

G__24055.setMonth(n);

return G__24055;
}), "is12HourCycleInCurrentLocale": cljs.core.constantly.call(null,true), "getMinuteText": (function (date){
return format.call(null,date,"mm");
}), "addMinutes": (function (date,n){
return cljs_time.core.plus.call(null,date,cljs_time.core.minutes.call(null,n));
}), "mergeDateAndTime": (function (date,time){
var G__24056 = date.clone();
G__24056.setHours(cljs_time.core.hour.call(null,time));

G__24056.setMinutes(cljs_time.core.minute.call(null,time));

G__24056.setSeconds(cljs_time.core.second.call(null,time));

G__24056.setMilliseconds(cljs_time.core.milli.call(null,time));

return G__24056;
}), "getSecondText": (function (date){
return format.call(null,date,"ss");
}), "formatByString": format, "format": (function (date,format_key){
return format.call(null,date,cljs.core.get.call(null,formats,format_key));
}), "endOfDay": (function (date){
return reagent_mui.cljs_time_adapter.end_of_day.call(null,date);
}), "formatTokenMap": cljs.core.clj__GT_js.call(null,reagent_mui.cljs_time_adapter.format_token_map), "date": reagent_mui.cljs_time_adapter.to_cljs_date, "getWeekdays": (function (){
var weekday_names = locale.STANDALONESHORTWEEKDAYS;
var first_day_of_week = cljs.core.mod.call(null,(locale.FIRSTDAYOFWEEK + (1)),(7));
return cljs.core.clj__GT_js.call(null,cljs.core.concat.call(null,cljs.core.drop.call(null,first_day_of_week,weekday_names),cljs.core.take.call(null,first_day_of_week,weekday_names)));
}), "escapedCharacters": ({"start": "'", "end": "'"}), "getDiff": (function (to,from){
var to__$1 = reagent_mui.cljs_time_adapter.to_cljs_date.call(null,to);
var from__$1 = reagent_mui.cljs_time_adapter.to_cljs_date.call(null,from);
if(cljs.core.truth_(cljs_time.core.before_QMARK_.call(null,from__$1,to__$1))){
return cljs_time.core.in_millis.call(null,cljs_time.core.interval.call(null,from__$1,to__$1));
} else {
return (- cljs_time.core.in_millis.call(null,cljs_time.core.interval.call(null,to__$1,from__$1)));
}
}), "isSameHour": (function (left,right){
return cljs_time.core.equal_QMARK_.call(null,reagent_mui.cljs_time_adapter.start_of_hour.call(null,left),reagent_mui.cljs_time_adapter.start_of_hour.call(null,right));
}), "isSameYear": (function (left,right){
return cljs_time.core.equal_QMARK_.call(null,reagent_mui.cljs_time_adapter.start_of_year.call(null,left),reagent_mui.cljs_time_adapter.start_of_year.call(null,right));
}), "addMonths": (function (date,n){
return cljs_time.core.plus.call(null,date,cljs_time.core.months.call(null,n));
}), "addDays": (function (date,n){
return cljs_time.core.plus.call(null,date,cljs_time.core.days.call(null,n));
}), "getWeekNumber": (function (date){
return date.getWeekNumber();
}), "locale": locale, "getMinutes": (function (date){
return cljs_time.core.minute.call(null,date);
}), "getMonth": (function (date){
return date.getMonth();
}), "getPreviousMonth": (function (date){
return cljs_time.core.minus.call(null,date,cljs_time.core.months.call(null,(1)));
}), "addSeconds": (function (date,n){
return cljs_time.core.plus.call(null,date,cljs_time.core.seconds.call(null,n));
}), "isSameMonth": (function (left,right){
return cljs_time.core.equal_QMARK_.call(null,reagent_mui.cljs_time_adapter.start_of_month.call(null,left),reagent_mui.cljs_time_adapter.start_of_month.call(null,right));
}), "isWithinRange": (function (date,p__24057){
var vec__24058 = p__24057;
var from = cljs.core.nth.call(null,vec__24058,(0),null);
var to = cljs.core.nth.call(null,vec__24058,(1),null);
var or__4126__auto__ = cljs_time.core.within_QMARK_.call(null,from,to,date);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs_time.core.equal_QMARK_.call(null,to,date);
}
}), "getYearText": (function (date){
return format.call(null,date,"yyyy");
}), "setYear": (function (date,n){
var G__24061 = date.clone();
G__24061.setFullYear(n);

return G__24061;
}), "getMonthText": (function (date){
return format.call(null,date,"MMM");
}), "getMonthArray": (function (date){
return cljs.core.clj__GT_js.call(null,cljs.core.take.call(null,(12),reagent_mui.cljs_time_adapter.date_seq.call(null,reagent_mui.cljs_time_adapter.start_of_year.call(null,date),cljs_time.core.months.call(null,(1)))));
}), "isBefore": (function (this$,that){
return cljs_time.core.before_QMARK_.call(null,this$,that);
}), "setSeconds": (function (date,n){
var G__24062 = date.clone();
G__24062.setSeconds(n);

return G__24062;
}), "isAfterDay": (function (this$,that){
return cljs_time.core.after_QMARK_.call(null,this$,reagent_mui.cljs_time_adapter.end_of_day.call(null,that));
}), "getDayText": (function (date){
return format.call(null,date,"d");
}), "getYear": (function (date){
return cljs_time.core.year.call(null,date);
}), "isSameDay": (function (left,right){
return cljs_time.core.equal_QMARK_.call(null,reagent_mui.cljs_time_adapter.start_of_day.call(null,left),reagent_mui.cljs_time_adapter.start_of_day.call(null,right));
}), "getCalendarHeaderText": (function (date){
return format.call(null,date,"MMMM yyyy");
}), "getCurrentLocaleCode": (function (){
return reagent_mui.cljs_time_adapter.locale_code.call(null,locale);
}), "isAfter": (function (this$,that){
return cljs_time.core.after_QMARK_.call(null,this$,that);
}), "isValid": (function (value){
return (!((reagent_mui.cljs_time_adapter.to_cljs_date.call(null,value) == null)));
}), "isBeforeDay": (function (this$,that){
return cljs_time.core.before_QMARK_.call(null,this$,reagent_mui.cljs_time_adapter.start_of_day.call(null,that));
}), "isMUIAdapter": true, "isNull": (function (value){
return (value == null);
}), "getHourText": (function (date,ampm){
return format.call(null,date,(cljs.core.truth_(ampm)?"hh":"HH"));
}), "setMinutes": (function (date,n){
var G__24063 = date.clone();
G__24063.setMinutes(n);

return G__24063;
}), "isAfterYear": (function (this$,that){
return cljs_time.core.after_QMARK_.call(null,this$,reagent_mui.cljs_time_adapter.end_of_year.call(null,that));
}), "getSeconds": (function (date){
return cljs_time.core.second.call(null,date);
}), "getMeridiemText": (function (ampm){
if(cljs.core._EQ_.call(null,"am",ampm)){
return "AM";
} else {
return "PM";
}
}), "startOfDay": (function (date){
return reagent_mui.cljs_time_adapter.start_of_day.call(null,date);
}), "formatNumber": (function (number){
return number;
}), "addWeeks": (function (date,n){
return cljs_time.core.plus.call(null,date,cljs_time.core.weeks.call(null,n));
}), "getDatePickerHeaderText": (function (date){
return format.call(null,date,"EEE, MMM d");
}), "startOfWeek": (function (date){
return reagent_mui.cljs_time_adapter.start_of_week.call(null,date,locale);
}), "parse": (function (value,format_str){
var date = cljs_time.coerce.to_date_time.call(null,(0));
var parser = (new goog.i18n.DateTimeParse(format_str,locale));
var cnt = parser.parse(value,date,({"validate": true}));
if((cnt > (0))){
return date;
} else {
return null;
}
}), "endOfYear": (function (date){
return reagent_mui.cljs_time_adapter.end_of_year.call(null,date);
}), "startOfYear": (function (date){
return reagent_mui.cljs_time_adapter.start_of_year.call(null,date);
}), "getFormatHelperText": (function (s){
return s.replace((new RegExp("(a)","g")),"(a|p)m").toLocaleLowerCase();
}), "lib": "cljs-time", "setDate": (function (date,n){
var G__24064 = date.clone();
G__24064.setDate(n);

return G__24064;
}), "endOfMonth": (function (date){
return reagent_mui.cljs_time_adapter.end_of_month.call(null,date);
}), "getYearRange": (function (from,to){
var start = reagent_mui.cljs_time_adapter.start_of_year.call(null,from);
var end = reagent_mui.cljs_time_adapter.end_of_year.call(null,to);
return cljs.core.clj__GT_js.call(null,cljs.core.take_while.call(null,(function (p1__24053_SHARP_){
return cljs_time.core.before_QMARK_.call(null,p1__24053_SHARP_,end);
}),reagent_mui.cljs_time_adapter.date_seq.call(null,start,cljs_time.core.years.call(null,(1)))));
}), "startOfMonth": (function (date){
return reagent_mui.cljs_time_adapter.start_of_month.call(null,date);
}), "expandFormat": cljs.core.identity, "getHours": (function (date){
return cljs_time.core.hour.call(null,date);
}), "getNextMonth": (function (date){
return cljs_time.core.plus.call(null,date,cljs_time.core.months.call(null,(1)));
}), "getWeekArray": (function (date){
var start = reagent_mui.cljs_time_adapter.start_of_week.call(null,reagent_mui.cljs_time_adapter.start_of_month.call(null,date),locale);
var end = reagent_mui.cljs_time_adapter.end_of_week.call(null,reagent_mui.cljs_time_adapter.end_of_month.call(null,date),locale);
return cljs.core.clj__GT_js.call(null,(function (){var iter__4529__auto__ = (function reagent_mui$cljs_time_adapter$cljs_time_adapter_$_iter__24065(s__24066){
return (new cljs.core.LazySeq(null,(function (){
var s__24066__$1 = s__24066;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__24066__$1);
if(temp__5804__auto__){
var s__24066__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24066__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__24066__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__24068 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__24067 = (0);
while(true){
if((i__24067 < size__4528__auto__)){
var start_of_week = cljs.core._nth.call(null,c__4527__auto__,i__24067);
if(cljs.core.truth_(cljs_time.core.before_QMARK_.call(null,start_of_week,end))){
cljs.core.chunk_append.call(null,b__24068,cljs.core.take.call(null,(7),reagent_mui.cljs_time_adapter.date_seq.call(null,start_of_week,cljs_time.core.days.call(null,(1)))));

var G__24069 = (i__24067 + (1));
i__24067 = G__24069;
continue;
} else {
return null;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24068),reagent_mui$cljs_time_adapter$cljs_time_adapter_$_iter__24065.call(null,cljs.core.chunk_rest.call(null,s__24066__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24068),null);
}
} else {
var start_of_week = cljs.core.first.call(null,s__24066__$2);
if(cljs.core.truth_(cljs_time.core.before_QMARK_.call(null,start_of_week,end))){
return cljs.core.cons.call(null,cljs.core.take.call(null,(7),reagent_mui.cljs_time_adapter.date_seq.call(null,start_of_week,cljs_time.core.days.call(null,(1)))),reagent_mui$cljs_time_adapter$cljs_time_adapter_$_iter__24065.call(null,cljs.core.rest.call(null,s__24066__$2)));
} else {
return null;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,reagent_mui.cljs_time_adapter.date_seq.call(null,start,cljs_time.core.days.call(null,(7))));
})());
}), "isBeforeYear": (function (this$,that){
return cljs_time.core.before_QMARK_.call(null,this$,reagent_mui.cljs_time_adapter.start_of_year.call(null,that));
}), "getDate": (function (date){
return cljs_time.core.day.call(null,date);
}), "toJsDate": (function (value){
return cljs_time.coerce.to_date.call(null,value);
}), "endOfWeek": (function (date){
return reagent_mui.cljs_time_adapter.end_of_week.call(null,date,locale);
}), "getDaysInMonth": (function (date){
return cljs_time.core.number_of_days_in_the_month.call(null,date);
}), "addYears": (function (date,n){
return cljs_time.core.plus.call(null,date,cljs_time.core.years.call(null,n));
}), "getDateTimePickerHeaderText": (function (date){
return format.call(null,date,"MMM d");
}), "addHours": (function (date,n){
return cljs_time.core.plus.call(null,date,cljs_time.core.hours.call(null,n));
}), "isEqual": (function (left,right){
if((((left == null)) && ((right == null)))){
return true;
} else {
if((((left == null)) || ((right == null)))){
return false;
} else {
return cljs_time.core.equal_QMARK_.call(null,reagent_mui.cljs_time_adapter.to_cljs_date.call(null,left),reagent_mui.cljs_time_adapter.to_cljs_date.call(null,right));

}
}
})});
});

//# sourceMappingURL=cljs_time_adapter.js.map
