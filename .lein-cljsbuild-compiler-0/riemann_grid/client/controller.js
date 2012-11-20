goog.provide('riemann_grid.client.controller');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('jayq.core');
goog.require('goog.events');
goog.require('riemann_grid.client.views');
riemann_grid.client.controller.$grid_header = jayq.core.$.call(null,"\uFDD0'#grid-header");
riemann_grid.client.controller.$grid_body = jayq.core.$.call(null,"\uFDD0'#grid-body");
riemann_grid.client.controller.$cmdline = jayq.core.$.call(null,"\uFDD0'#cmdline");
riemann_grid.client.controller.$cmdsubmit = jayq.core.$.call(null,"\uFDD0'#cmdsubmit");
riemann_grid.client.controller.timer = cljs.core.atom.call(null,null);
riemann_grid.client.controller.stored_query = cljs.core.atom.call(null,"true");
riemann_grid.client.controller.update_grid_header = (function update_grid_header(elems){
jayq.core.empty.call(null,riemann_grid.client.controller.$grid_header);
return jayq.core.inner.call(null,riemann_grid.client.controller.$grid_header,riemann_grid.client.views.grid_header.call(null,elems));
});
riemann_grid.client.controller.update_grid_body = (function update_grid_body(hosts){
jayq.core.empty.call(null,riemann_grid.client.controller.$grid_body);
var G__3915 = cljs.core.seq.call(null,hosts);
while(true){
if(G__3915)
{var vec__3916 = cljs.core.first.call(null,G__3915);
var host = cljs.core.nth.call(null,vec__3916,0,null);
var services = cljs.core.nth.call(null,vec__3916,1,null);
jayq.core.append.call(null,riemann_grid.client.controller.$grid_body,riemann_grid.client.views.grid_body_line.call(null,host,services));
{
var G__3917 = cljs.core.next.call(null,G__3915);
G__3915 = G__3917;
continue;
}
} else
{return null;
}
break;
}
});
riemann_grid.client.controller.update_grid = (function update_grid(events){
console.log("got events back, updating grid");
var services = cljs.core.group_by.call(null,(function (p1__3910_SHARP_){
return cljs.core._lookup.call(null,p1__3910_SHARP_,"service",null);
}),events);
var hosts = cljs.core.group_by.call(null,(function (p1__3911_SHARP_){
return cljs.core._lookup.call(null,p1__3911_SHARP_,"host",null);
}),events);
riemann_grid.client.controller.update_grid_header.call(null,cljs.core.cons.call(null,"host",cljs.core.keys.call(null,services)));
return riemann_grid.client.controller.update_grid_body.call(null,(function (){var iter__2470__auto__ = (function iter__3922(s__3923){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3923__$1 = s__3923;
while(true){
if(cljs.core.seq.call(null,s__3923__$1))
{var vec__3925 = cljs.core.first.call(null,s__3923__$1);
var host = cljs.core.nth.call(null,vec__3925,0,null);
var hostdata = cljs.core.nth.call(null,vec__3925,1,null);
var hostservices = cljs.core.group_by.call(null,((function (vec__3925,host,hostdata){
return (function (p1__3912_SHARP_){
return cljs.core._lookup.call(null,p1__3912_SHARP_,"service",null);
});})(vec__3925,host,hostdata))
,hostdata);
return cljs.core.cons.call(null,cljs.core.vector.call(null,host,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.get,hostservices),cljs.core.keys.call(null,services))),iter__3922.call(null,cljs.core.rest.call(null,s__3923__$1)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2470__auto__.call(null,hosts);
})());
});
riemann_grid.client.controller.grid_ajax = (function grid_ajax(){
console.log([cljs.core.str("grid ajax! q="),cljs.core.str([cljs.core.str(cljs.core.deref.call(null,riemann_grid.client.controller.stored_query))].join(''))].join(''));
var success_fn = (function (d){
return riemann_grid.client.controller.update_grid.call(null,cljs.core.js__GT_clj.call(null,d));
});
var error_fn = (function() { 
var G__3926__delegate = function (_){
return console.log("could not complete query");
};
var G__3926 = function (var_args){
var _ = null;
if (goog.isDef(var_args)) {
  _ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3926__delegate.call(this, _);
};
G__3926.cljs$lang$maxFixedArity = 0;
G__3926.cljs$lang$applyTo = (function (arglist__3927){
var _ = cljs.core.seq(arglist__3927);;
return G__3926__delegate(_);
});
G__3926.cljs$lang$arity$variadic = G__3926__delegate;
return G__3926;
})()
;
var ftr = jayq.core.ajax.call(null,[cljs.core.str("/api/states?q="),cljs.core.str(cljs.core.deref.call(null,riemann_grid.client.controller.stored_query))].join(''),cljs.core.ObjMap.fromObject(["\uFDD0'accepts","\uFDD0'type","\uFDD0'error","\uFDD0'success"],{"\uFDD0'accepts":cljs.core.ObjMap.fromObject(["\uFDD0'json"],{"\uFDD0'json":"application/json"}),"\uFDD0'type":"GET","\uFDD0'error":error_fn,"\uFDD0'success":success_fn}));
return ftr.done((function (){
if(cljs.core.truth_(cljs.core.deref.call(null,riemann_grid.client.controller.timer).enabled))
{return null;
} else
{return cljs.core.deref.call(null,riemann_grid.client.controller.timer).start();
}
}));
});
riemann_grid.client.controller.grid = (function grid(q){
console.log("starting up grid");
jayq.core.on.call(null,riemann_grid.client.controller.$cmdsubmit,"\uFDD0'click","",cljs.core.ObjMap.EMPTY,(function (e){
jayq.core.prevent.call(null,e);
cljs.core.reset_BANG_.call(null,riemann_grid.client.controller.stored_query,encodeURI(jayq.core.val.call(null,riemann_grid.client.controller.$cmdline)));
cljs.core.deref.call(null,riemann_grid.client.controller.timer).stop();
return riemann_grid.client.controller.grid_ajax.call(null);
}));
jayq.core.on.call(null,riemann_grid.client.controller.$cmdline,"\uFDD0'click","",cljs.core.ObjMap.EMPTY,(function (e){
jayq.core.prevent.call(null,e);
return jayq.core.val.call(null,riemann_grid.client.controller.$cmdline,"");
}));
cljs.core.reset_BANG_.call(null,riemann_grid.client.controller.timer,(new goog.Timer(5000)));
goog.events.listen(cljs.core.deref.call(null,riemann_grid.client.controller.timer),goog.Timer.TICK,riemann_grid.client.controller.grid_ajax);
return riemann_grid.client.controller.grid_ajax.call(null);
});
