goog.provide('crate.compiler');
goog.require('cljs.core');
goog.require('crate.binding');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('goog.dom');
crate.compiler.xmlns = cljs.core.ObjMap.fromObject(["\uFDD0'xhtml","\uFDD0'svg"],{"\uFDD0'xhtml":"http://www.w3.org/1999/xhtml","\uFDD0'svg":"http://www.w3.org/2000/svg"});
crate.compiler.group_id = cljs.core.atom.call(null,0);
crate.compiler.bindings = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
crate.compiler.capture_binding = (function capture_binding(tag,b){
return cljs.core.swap_BANG_.call(null,crate.compiler.bindings,cljs.core.conj,cljs.core.PersistentVector.fromArray([tag,b], true));
});
crate.compiler.as_content = (function as_content(parent,content){
var G__3749 = cljs.core.seq.call(null,content);
while(true){
if(G__3749)
{var c = cljs.core.first.call(null,G__3749);
var child = (((c == null))?null:((cljs.core.map_QMARK_.call(null,c))?(function(){throw "Maps cannot be used as content"})():((cljs.core.string_QMARK_.call(null,c))?goog.dom.createTextNode(c):((cljs.core.vector_QMARK_.call(null,c))?crate.compiler.elem_factory.call(null,c):((cljs.core.seq_QMARK_.call(null,c))?as_content.call(null,parent,c):(cljs.core.truth_(crate.binding.binding_coll_QMARK_.call(null,c))?(function (){crate.compiler.capture_binding.call(null,"\uFDD0'coll",c);
return as_content.call(null,parent,cljs.core.PersistentVector.fromArray([crate.binding.value.call(null,c)], true));
})():(cljs.core.truth_(crate.binding.binding_QMARK_.call(null,c))?(function (){crate.compiler.capture_binding.call(null,"\uFDD0'text",c);
return as_content.call(null,parent,cljs.core.PersistentVector.fromArray([crate.binding.value.call(null,c)], true));
})():(cljs.core.truth_(c.nodeName)?c:(cljs.core.truth_(c.get)?c.get(0):(("\uFDD0'else")?goog.dom.createTextNode([cljs.core.str(c)].join('')):null))))))))));
if(cljs.core.truth_(child))
{goog.dom.appendChild(parent,child);
} else
{}
{
var G__3750 = cljs.core.next.call(null,G__3749);
G__3749 = G__3750;
continue;
}
} else
{return null;
}
break;
}
});
crate.compiler.dom_binding = (function (){var method_table__2545__auto__ = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var prefer_table__2546__auto__ = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var method_cache__2547__auto__ = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var cached_hierarchy__2548__auto__ = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var hierarchy__2549__auto__ = cljs.core._lookup.call(null,cljs.core.ObjMap.EMPTY,"\uFDD0'hierarchy",cljs.core.global_hierarchy);
return (new cljs.core.MultiFn("dom-binding",(function (type,_,___$1){
return type;
}),"\uFDD0'default",hierarchy__2549__auto__,method_table__2545__auto__,prefer_table__2546__auto__,method_cache__2547__auto__,cached_hierarchy__2548__auto__));
})();
cljs.core._add_method.call(null,crate.compiler.dom_binding,"\uFDD0'text",(function (_,b,elem){
return crate.binding.on_change.call(null,b,(function (v){
goog.dom.removeChildren(elem);
return crate.compiler.as_content.call(null,elem,cljs.core.PersistentVector.fromArray([v], true));
}));
}));
cljs.core._add_method.call(null,crate.compiler.dom_binding,"\uFDD0'attr",(function (_,p__3751,elem){
var vec__3752 = p__3751;
var k = cljs.core.nth.call(null,vec__3752,0,null);
var b = cljs.core.nth.call(null,vec__3752,1,null);
return crate.binding.on_change.call(null,b,(function (v){
return crate.compiler.dom_attr.call(null,elem,k,v);
}));
}));
cljs.core._add_method.call(null,crate.compiler.dom_binding,"\uFDD0'style",(function (_,p__3753,elem){
var vec__3754 = p__3753;
var k = cljs.core.nth.call(null,vec__3754,0,null);
var b = cljs.core.nth.call(null,vec__3754,1,null);
return crate.binding.on_change.call(null,b,(function (v){
if(cljs.core.truth_(k))
{return crate.compiler.dom_style.call(null,elem,k,v);
} else
{return crate.compiler.dom_style.call(null,elem,v);
}
}));
}));
crate.compiler.dom_add = (function dom_add(bc,parent,elem,v){
var temp__3971__auto__ = crate.binding.opt.call(null,bc,"\uFDD0'add");
if(cljs.core.truth_(temp__3971__auto__))
{var adder = temp__3971__auto__;
return adder.call(null,parent,elem,v);
} else
{return goog.dom.appendChild(parent,elem);
}
});
crate.compiler.dom_remove = (function dom_remove(bc,elem){
var temp__3971__auto__ = crate.binding.opt.call(null,bc,"\uFDD0'remove");
if(cljs.core.truth_(temp__3971__auto__))
{var remover = temp__3971__auto__;
return remover.call(null,elem);
} else
{return goog.dom.removeNode(elem);
}
});
cljs.core._add_method.call(null,crate.compiler.dom_binding,"\uFDD0'coll",(function (_,bc,parent){
return crate.binding.on_change.call(null,bc,(function (type,elem,v){
var pred__3755 = cljs.core._EQ_;
var expr__3756 = type;
if(pred__3755.call(null,"\uFDD0'add",expr__3756))
{return crate.compiler.dom_add.call(null,bc,parent,elem,v);
} else
{if(pred__3755.call(null,"\uFDD0'remove",expr__3756))
{return crate.compiler.dom_remove.call(null,bc,elem);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__3756)].join('')));
}
}
}));
}));
crate.compiler.handle_bindings = (function handle_bindings(bs,elem){
var G__3760 = cljs.core.seq.call(null,bs);
while(true){
if(G__3760)
{var vec__3761 = cljs.core.first.call(null,G__3760);
var type = cljs.core.nth.call(null,vec__3761,0,null);
var b = cljs.core.nth.call(null,vec__3761,1,null);
crate.compiler.dom_binding.call(null,type,b,elem);
{
var G__3762 = cljs.core.next.call(null,G__3760);
G__3760 = G__3762;
continue;
}
} else
{return null;
}
break;
}
});
crate.compiler.dom_style = (function() {
var dom_style = null;
var dom_style__2 = (function (elem,v){
if(cljs.core.string_QMARK_.call(null,v))
{elem.setAttribute("style",v);
} else
{if(cljs.core.map_QMARK_.call(null,v))
{var G__3765 = cljs.core.seq.call(null,v);
while(true){
if(G__3765)
{var vec__3766 = cljs.core.first.call(null,G__3765);
var k = cljs.core.nth.call(null,vec__3766,0,null);
var v__$1 = cljs.core.nth.call(null,vec__3766,1,null);
dom_style.call(null,elem,k,v__$1);
{
var G__3767 = cljs.core.next.call(null,G__3765);
G__3765 = G__3767;
continue;
}
} else
{}
break;
}
} else
{if(cljs.core.truth_(crate.binding.binding_QMARK_.call(null,v)))
{crate.compiler.capture_binding.call(null,"\uFDD0'style",cljs.core.PersistentVector.fromArray([null,v], true));
dom_style.call(null,elem,crate.binding.value.call(null,v));
} else
{}
}
}
return elem;
});
var dom_style__3 = (function (elem,k,v){
var v__$1 = (cljs.core.truth_(crate.binding.binding_QMARK_.call(null,v))?(function (){crate.compiler.capture_binding.call(null,"\uFDD0'style",cljs.core.PersistentVector.fromArray([k,v], true));
return crate.binding.value.call(null,v);
})():v);
return goog.style.setStyle(elem,cljs.core.name.call(null,k),v__$1);
});
dom_style = function(elem,k,v){
switch(arguments.length){
case 2:
return dom_style__2.call(this,elem,k);
case 3:
return dom_style__3.call(this,elem,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dom_style.cljs$lang$arity$2 = dom_style__2;
dom_style.cljs$lang$arity$3 = dom_style__3;
return dom_style;
})()
;
crate.compiler.dom_attr = (function() {
var dom_attr = null;
var dom_attr__2 = (function (elem,attrs){
if(cljs.core.truth_(elem))
{if(!(cljs.core.map_QMARK_.call(null,attrs)))
{return elem.getAttribute(cljs.core.name.call(null,attrs));
} else
{var G__3770 = cljs.core.seq.call(null,attrs);
while(true){
if(G__3770)
{var vec__3771 = cljs.core.first.call(null,G__3770);
var k = cljs.core.nth.call(null,vec__3771,0,null);
var v = cljs.core.nth.call(null,vec__3771,1,null);
dom_attr.call(null,elem,k,v);
{
var G__3772 = cljs.core.next.call(null,G__3770);
G__3770 = G__3772;
continue;
}
} else
{}
break;
}
return elem;
}
} else
{return null;
}
});
var dom_attr__3 = (function (elem,k,v){
if(cljs.core._EQ_.call(null,k,"\uFDD0'style"))
{crate.compiler.dom_style.call(null,elem,v);
} else
{var v__$1 = (cljs.core.truth_(crate.binding.binding_QMARK_.call(null,v))?(function (){crate.compiler.capture_binding.call(null,"\uFDD0'attr",cljs.core.PersistentVector.fromArray([k,v], true));
return crate.binding.value.call(null,v);
})():v);
elem.setAttribute(cljs.core.name.call(null,k),v__$1);
}
return elem;
});
dom_attr = function(elem,k,v){
switch(arguments.length){
case 2:
return dom_attr__2.call(this,elem,k);
case 3:
return dom_attr__3.call(this,elem,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dom_attr.cljs$lang$arity$2 = dom_attr__2;
dom_attr.cljs$lang$arity$3 = dom_attr__3;
return dom_attr;
})()
;
/**
* Regular expression that parses a CSS-style id and class from a tag name.
*/
crate.compiler.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
crate.compiler.normalize_map_attrs = (function normalize_map_attrs(map_attrs){
return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,cljs.core.map.call(null,(function (p__3776){
var vec__3777 = p__3776;
var n = cljs.core.nth.call(null,vec__3777,0,null);
var v = cljs.core.nth.call(null,vec__3777,1,null);
if(v === true)
{return cljs.core.PersistentVector.fromArray([n,cljs.core.name.call(null,n)], true);
} else
{return cljs.core.PersistentVector.fromArray([n,v], true);
}
}),cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.boolean$,cljs.core.second),map_attrs)));
});
/**
* Ensure a tag vector is of the form [tag-name attrs content].
*/
crate.compiler.normalize_element = (function normalize_element(p__3778){
var vec__3783 = p__3778;
var tag = cljs.core.nth.call(null,vec__3783,0,null);
var content = cljs.core.nthnext.call(null,vec__3783,1);
if(!((function (){var or__3824__auto__ = cljs.core.keyword_QMARK_.call(null,tag);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = cljs.core.symbol_QMARK_.call(null,tag);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{return cljs.core.string_QMARK_.call(null,tag);
}
}
})()))
{throw [cljs.core.str(tag),cljs.core.str(" is not a valid tag name.")].join('');
} else
{}
var vec__3784 = cljs.core.re_matches.call(null,crate.compiler.re_tag,cljs.core.name.call(null,tag));
var _ = cljs.core.nth.call(null,vec__3784,0,null);
var tag__$1 = cljs.core.nth.call(null,vec__3784,1,null);
var id = cljs.core.nth.call(null,vec__3784,2,null);
var class$ = cljs.core.nth.call(null,vec__3784,3,null);
var vec__3785 = (function (){var vec__3786 = clojure.string.split.call(null,tag__$1,/:/);
var nsp = cljs.core.nth.call(null,vec__3786,0,null);
var t = cljs.core.nth.call(null,vec__3786,1,null);
var ns_xmlns = crate.compiler.xmlns.call(null,cljs.core.keyword.call(null,nsp));
if(cljs.core.truth_(t))
{return cljs.core.PersistentVector.fromArray([(function (){var or__3824__auto__ = ns_xmlns;
if(cljs.core.truth_(or__3824__auto__))
{return or__3824__auto__;
} else
{return nsp;
}
})(),t], true);
} else
{return cljs.core.PersistentVector.fromArray([(new cljs.core.Keyword("\uFDD0'xhtml")).call(null,crate.compiler.xmlns),nsp], true);
}
})();
var nsp = cljs.core.nth.call(null,vec__3785,0,null);
var tag__$2 = cljs.core.nth.call(null,vec__3785,1,null);
var tag_attrs = cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,cljs.core.filter.call(null,(function (p1__3773_SHARP_){
return !((cljs.core.second.call(null,p1__3773_SHARP_) == null));
}),cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":(function (){var or__3824__auto__ = id;
if(cljs.core.truth_(or__3824__auto__))
{return or__3824__auto__;
} else
{return null;
}
})(),"\uFDD0'class":(cljs.core.truth_(class$)?clojure.string.replace.call(null,class$,/\./," "):null)})));
var map_attrs = cljs.core.first.call(null,content);
if(cljs.core.map_QMARK_.call(null,map_attrs))
{return cljs.core.PersistentVector.fromArray([nsp,tag__$2,cljs.core.merge.call(null,tag_attrs,crate.compiler.normalize_map_attrs.call(null,map_attrs)),cljs.core.next.call(null,content)], true);
} else
{return cljs.core.PersistentVector.fromArray([nsp,tag__$2,tag_attrs,content], true);
}
});
crate.compiler.parse_content = (function parse_content(elem,content){
var attrs = cljs.core.first.call(null,content);
if(cljs.core.map_QMARK_.call(null,attrs))
{crate.compiler.dom_attr.call(null,elem,attrs);
return cljs.core.rest.call(null,content);
} else
{return content;
}
});
crate.compiler.create_elem = (cljs.core.truth_(document.createElementNS)?(function (nsp,tag){
return document.createElementNS(nsp,tag);
}):(function (_,tag){
return document.createElement(tag);
}));
crate.compiler.elem_factory = (function elem_factory(tag_def){
var bindings3790 = crate.compiler.bindings;
try{crate.compiler.bindings = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var vec__3792 = crate.compiler.normalize_element.call(null,tag_def);
var nsp = cljs.core.nth.call(null,vec__3792,0,null);
var tag = cljs.core.nth.call(null,vec__3792,1,null);
var attrs = cljs.core.nth.call(null,vec__3792,2,null);
var content = cljs.core.nth.call(null,vec__3792,3,null);
var elem = crate.compiler.create_elem.call(null,nsp,tag);
crate.compiler.dom_attr.call(null,elem,attrs);
crate.compiler.as_content.call(null,elem,content);
crate.compiler.handle_bindings.call(null,cljs.core.deref.call(null,crate.compiler.bindings),elem);
return elem;
}finally {crate.compiler.bindings = bindings3790;
}});
/**
* Add an optional attribute argument to a function that returns a vector tag.
*/
crate.compiler.add_optional_attrs = (function add_optional_attrs(func){
return (function() { 
var G__3795__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__3794 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__3794,0,null);
var body = cljs.core.nthnext.call(null,vec__3794,1);
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__3795 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3795__delegate.call(this, args);
};
G__3795.cljs$lang$maxFixedArity = 0;
G__3795.cljs$lang$applyTo = (function (arglist__3796){
var args = cljs.core.seq(arglist__3796);;
return G__3795__delegate(args);
});
G__3795.cljs$lang$arity$variadic = G__3795__delegate;
return G__3795;
})()
;
});
