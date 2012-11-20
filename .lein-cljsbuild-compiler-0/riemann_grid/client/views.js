goog.provide('riemann_grid.client.views');
goog.require('cljs.core');
goog.require('crate.core');
riemann_grid.client.views.nbsp = "&nbsp;";
riemann_grid.client.views.state_to_button_type = cljs.core.ObjMap.fromObject(["ok","warning","critical"],{"ok":"\uFDD0'button.btn.btn-success.disabled","warning":"\uFDD0'button.btn.btn-warning.disabled","critical":"\uFDD0'button.btn.btn-danger.disabled"});
var group__2927__auto__ = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);
riemann_grid.client.views.grid_header_elem = (function grid_header_elem(e){
var elem__2928__auto__ = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'th",e], true));
elem__2928__auto__.setAttribute("crateGroup",group__2927__auto__);
return elem__2928__auto__;
});
riemann_grid.client.views.grid_header_elem.prototype._crateGroup = group__2927__auto__;
var group__2927__auto__ = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);
riemann_grid.client.views.grid_header = (function grid_header(elems){
var elem__2928__auto__ = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'tr",cljs.core.map.call(null,riemann_grid.client.views.grid_header_elem,elems)], true));
elem__2928__auto__.setAttribute("crateGroup",group__2927__auto__);
return elem__2928__auto__;
});
riemann_grid.client.views.grid_header.prototype._crateGroup = group__2927__auto__;
var group__2927__auto__ = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);
riemann_grid.client.views.grid_body_elem = (function grid_body_elem(service){
var elem__2928__auto__ = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'td",(cljs.core.truth_(service)?(function (){var map__4048 = cljs.core.first.call(null,service);
var map__4048__$1 = ((cljs.core.seq_QMARK_.call(null,map__4048))?cljs.core.apply.call(null,cljs.core.hash_map,map__4048):map__4048);
var metric = cljs.core._lookup.call(null,map__4048__$1,"metric",null);
var state = cljs.core._lookup.call(null,map__4048__$1,"state",null);
var button_type = cljs.core._lookup.call(null,riemann_grid.client.views.state_to_button_type,state,"\uFDD0'btn.disabled");
return cljs.core.PersistentVector.fromArray([button_type,metric], true);
})():" ")], true));
elem__2928__auto__.setAttribute("crateGroup",group__2927__auto__);
return elem__2928__auto__;
});
riemann_grid.client.views.grid_body_elem.prototype._crateGroup = group__2927__auto__;
var group__2927__auto__ = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);
riemann_grid.client.views.grid_body_line = (function grid_body_line(host,services){
var elem__2928__auto__ = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'tr",cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'td",host], true),cljs.core.map.call(null,riemann_grid.client.views.grid_body_elem,services))], true));
elem__2928__auto__.setAttribute("crateGroup",group__2927__auto__);
return elem__2928__auto__;
});
riemann_grid.client.views.grid_body_line.prototype._crateGroup = group__2927__auto__;
