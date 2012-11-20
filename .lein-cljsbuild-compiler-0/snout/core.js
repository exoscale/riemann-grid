goog.provide('snout.core');
goog.require('cljs.core');
goog.require('goog.history.Html5History');
goog.require('goog.History');
goog.require('goog.events');
snout.core._PLUS_literal_PLUS_ = /\/\w*/;
snout.core._PLUS_params_PLUS_ = /\?.*/;
snout.core.routes = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
/**
* Match GET-like params in the URL.
*/
snout.core.param_match = (function param_match(params){
if(!(cljs.core.empty_QMARK_.call(null,params)))
{var ss = params.split("&");
return cljs.core.reduce.call(null,(function (m,p__3886){
var vec__3887 = p__3886;
var k = cljs.core.nth.call(null,vec__3887,0,null);
var v = cljs.core.nth.call(null,vec__3887,1,null);
return cljs.core.assoc.call(null,m,cljs.core.keyword.call(null,k),v);
}),cljs.core.ObjMap.EMPTY,cljs.core.map.call(null,(function (p1__3883_SHARP_){
return p1__3883_SHARP_.split("=");
}),cljs.core.map.call(null,(function (p1__3882_SHARP_){
return (ss[p1__3882_SHARP_]);
}),cljs.core.range.call(null,ss.length))));
} else
{return null;
}
});
/**
* Matches the URL to the matcher and (if they coincide) returns a set of route bindings.
*/
snout.core.route_match = (function route_match(url,matcher){
var G__3893 = matcher;
var vec__3894 = G__3893;
var m = cljs.core.nth.call(null,vec__3894,0,null);
var matcher__$1 = cljs.core.nthnext.call(null,vec__3894,1);
var url__$1 = url;
var res = cljs.core.ObjMap.EMPTY;
var G__3893__$1 = G__3893;
var url__$2 = url__$1;
var res__$1 = res;
while(true){
var vec__3895 = G__3893__$1;
var m__$1 = cljs.core.nth.call(null,vec__3895,0,null);
var matcher__$2 = cljs.core.nthnext.call(null,vec__3895,1);
var url__$3 = url__$2;
var res__$2 = res__$1;
if(cljs.core.empty_QMARK_.call(null,url__$3))
{if(cljs.core.empty_QMARK_.call(null,matcher__$2))
{return res__$2;
} else
{return null;
}
} else
{if(cljs.core._EQ_.call(null,"*",m__$1))
{return cljs.core.assoc.call(null,res__$2,"\uFDD0'*",url__$3);
} else
{var r = cljs.core.re_find.call(null,snout.core._PLUS_literal_PLUS_,url__$3).substring(1);
var url__$4 = url__$3.substring((cljs.core.count.call(null,r) + 1));
if(cljs.core.keyword_QMARK_.call(null,m__$1))
{{
var G__3896 = matcher__$2;
var G__3897 = url__$4;
var G__3898 = cljs.core.assoc.call(null,res__$2,m__$1,r);
G__3893__$1 = G__3896;
url__$2 = G__3897;
res__$1 = G__3898;
continue;
}
} else
{if(cljs.core._EQ_.call(null,m__$1,[cljs.core.str("/"),cljs.core.str(r)].join('')))
{{
var G__3899 = matcher__$2;
var G__3900 = url__$4;
var G__3901 = res__$2;
G__3893__$1 = G__3899;
url__$2 = G__3900;
res__$1 = G__3901;
continue;
}
} else
{return null;
}
}
}
}
break;
}
});
/**
* Chooses a valid route based on the installed routes.
*/
snout.core.choose_route = (function choose_route(url){
var params = cljs.core.re_find.call(null,snout.core._PLUS_params_PLUS_,url);
var url__$1 = url.substring(0,(cljs.core.count.call(null,url) - cljs.core.count.call(null,params)));
var params__$1 = snout.core.param_match.call(null,(cljs.core.truth_(params)?params.substring(1):null));
var vec__3905 = cljs.core.some.call(null,(function (p__3906){
var vec__3907 = p__3906;
var matcher = cljs.core.nth.call(null,vec__3907,0,null);
var f = cljs.core.nth.call(null,vec__3907,1,null);
var temp__3971__auto__ = snout.core.route_match.call(null,url__$1,matcher);
if(cljs.core.truth_(temp__3971__auto__))
{var m = temp__3971__auto__;
return cljs.core.PersistentVector.fromArray([m,f], true);
} else
{return null;
}
}),cljs.core.deref.call(null,snout.core.routes));
var m = cljs.core.nth.call(null,vec__3905,0,null);
var f = cljs.core.nth.call(null,vec__3905,1,null);
if(cljs.core.truth_(m))
{return f.call(null,cljs.core.merge.call(null,m,params__$1));
} else
{return null;
}
});
snout.core.create_history = (function create_history(){
var history = (cljs.core.truth_(goog.history.Html5History.isSupported())?(new goog.history.Html5History()):(new goog.History()));
var G__3909 = history;
G__3909.setEnabled(true);
goog.events.listen(G__3909,"navigate",(function (_){
return snout.core.choose_route.call(null,history.getToken());
}));
return G__3909;
});
/**
* The history object.
*/
snout.core._STAR_history_STAR_ = (function (){var h = snout.core.create_history.call(null);
goog.events.unlisten(h.window_,goog.events.EventType.POPSTATE,h.onHistoryEvent_,false,h);
return h;
})();
snout.core.get_token = (function get_token(){
return snout.core._STAR_history_STAR_.getToken();
});
snout.core.set_token_BANG_ = (function set_token_BANG_(tok){
return snout.core._STAR_history_STAR_.setToken(tok);
});
