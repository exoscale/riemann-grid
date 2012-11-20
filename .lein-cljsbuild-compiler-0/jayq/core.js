goog.provide('jayq.core');
goog.require('cljs.core');
goog.require('jayq.util');
goog.require('jayq.util');
goog.require('cljs.reader');
goog.require('clojure.string');
jayq.core.crate_meta = (function crate_meta(func){
return func.prototype._crateGroup;
});
jayq.core.__GT_selector = (function __GT_selector(sel){
if(cljs.core.string_QMARK_.call(null,sel))
{return sel;
} else
{if(cljs.core.fn_QMARK_.call(null,sel))
{var temp__3971__auto__ = jayq.core.crate_meta.call(null,sel);
if(cljs.core.truth_(temp__3971__auto__))
{var cm = temp__3971__auto__;
return [cljs.core.str("[crateGroup="),cljs.core.str(cm),cljs.core.str("]")].join('');
} else
{return sel;
}
} else
{if(cljs.core.keyword_QMARK_.call(null,sel))
{return cljs.core.name.call(null,sel);
} else
{if("\uFDD0'else")
{return sel;
} else
{return null;
}
}
}
}
});
/**
* @param {...*} var_args
*/
jayq.core.$ = (function() { 
var $__delegate = function (sel,p__3939){
var vec__3941 = p__3939;
var context = cljs.core.nth.call(null,vec__3941,0,null);
if(cljs.core.not.call(null,context))
{return jQuery(jayq.core.__GT_selector.call(null,sel));
} else
{return jQuery(jayq.core.__GT_selector.call(null,sel),context);
}
};
var $ = function (sel,var_args){
var p__3939 = null;
if (goog.isDef(var_args)) {
  p__3939 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return $__delegate.call(this, sel, p__3939);
};
$.cljs$lang$maxFixedArity = 1;
$.cljs$lang$applyTo = (function (arglist__3942){
var sel = cljs.core.first(arglist__3942);
var p__3939 = cljs.core.rest(arglist__3942);
return $__delegate(sel, p__3939);
});
$.cljs$lang$arity$variadic = $__delegate;
return $;
})()
;
jQuery.prototype.cljs$core$IReduce$ = true;
jQuery.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f){
return cljs.core.ci_reduce.call(null,this$,f);
});
jQuery.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,f,start){
return cljs.core.ci_reduce.call(null,this$,f,start);
});
jQuery.prototype.cljs$core$ILookup$ = true;
jQuery.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var or__3824__auto__ = this$.slice(k,(k + 1));
if(cljs.core.truth_(or__3824__auto__))
{return or__3824__auto__;
} else
{return null;
}
});
jQuery.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
return cljs.core._nth.call(null,this$,k,not_found);
});
jQuery.prototype.cljs$core$ISequential$ = true;
jQuery.prototype.cljs$core$IIndexed$ = true;
jQuery.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
if((n < cljs.core.count.call(null,this$)))
{return this$.slice(n,(n + 1));
} else
{return null;
}
});
jQuery.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
if((n < cljs.core.count.call(null,this$)))
{return this$.slice(n,(n + 1));
} else
{if((void 0 === not_found))
{return null;
} else
{return not_found;
}
}
});
jQuery.prototype.cljs$core$ICounted$ = true;
jQuery.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
return this$.size();
});
jQuery.prototype.cljs$core$ISeq$ = true;
jQuery.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
return this$.get(0);
});
jQuery.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
if((cljs.core.count.call(null,this$) > 1))
{return this$.slice(1);
} else
{return cljs.core.list.call(null);
}
});
jQuery.prototype.cljs$core$ISeqable$ = true;
jQuery.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
if(cljs.core.truth_(this$.get(0)))
{return this$;
} else
{return null;
}
});
jQuery.prototype.call = (function() {
var G__3943 = null;
var G__3943__2 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3943__3 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3943 = function(_,k,not_found){
switch(arguments.length){
case 2:
return G__3943__2.call(this,_,k);
case 3:
return G__3943__3.call(this,_,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3943;
})()
;
jayq.core.anim = (function anim(elem,props,dur){
return elem.animate(jayq.util.clj__GT_js.call(null,props),dur);
});
jayq.core.text = (function() {
var text = null;
var text__1 = (function ($elem){
return $elem.text();
});
var text__2 = (function ($elem,txt){
return $elem.text(txt);
});
text = function($elem,txt){
switch(arguments.length){
case 1:
return text__1.call(this,$elem);
case 2:
return text__2.call(this,$elem,txt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text.cljs$lang$arity$1 = text__1;
text.cljs$lang$arity$2 = text__2;
return text;
})()
;
jayq.core.css = (function css($elem,opts){
if(cljs.core.keyword_QMARK_.call(null,opts))
{return $elem.css(cljs.core.name.call(null,opts));
} else
{return $elem.css(jayq.util.clj__GT_js.call(null,opts));
}
});
/**
* @param {...*} var_args
*/
jayq.core.attr = (function() { 
var attr__delegate = function ($elem,a,p__3944){
var vec__3946 = p__3944;
var v = cljs.core.nth.call(null,vec__3946,0,null);
var a__$1 = cljs.core.name.call(null,a);
if(cljs.core.not.call(null,v))
{return $elem.attr(a__$1);
} else
{return $elem.attr(a__$1,v);
}
};
var attr = function ($elem,a,var_args){
var p__3944 = null;
if (goog.isDef(var_args)) {
  p__3944 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return attr__delegate.call(this, $elem, a, p__3944);
};
attr.cljs$lang$maxFixedArity = 2;
attr.cljs$lang$applyTo = (function (arglist__3947){
var $elem = cljs.core.first(arglist__3947);
var a = cljs.core.first(cljs.core.next(arglist__3947));
var p__3944 = cljs.core.rest(cljs.core.next(arglist__3947));
return attr__delegate($elem, a, p__3944);
});
attr.cljs$lang$arity$variadic = attr__delegate;
return attr;
})()
;
jayq.core.remove_attr = (function remove_attr($elem,a){
return $elem.removeAttr(cljs.core.name.call(null,a));
});
/**
* @param {...*} var_args
*/
jayq.core.data = (function() { 
var data__delegate = function ($elem,k,p__3948){
var vec__3950 = p__3948;
var v = cljs.core.nth.call(null,vec__3950,0,null);
var k__$1 = cljs.core.name.call(null,k);
if(cljs.core.not.call(null,v))
{return $elem.data(k__$1);
} else
{return $elem.data(k__$1,v);
}
};
var data = function ($elem,k,var_args){
var p__3948 = null;
if (goog.isDef(var_args)) {
  p__3948 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return data__delegate.call(this, $elem, k, p__3948);
};
data.cljs$lang$maxFixedArity = 2;
data.cljs$lang$applyTo = (function (arglist__3951){
var $elem = cljs.core.first(arglist__3951);
var k = cljs.core.first(cljs.core.next(arglist__3951));
var p__3948 = cljs.core.rest(cljs.core.next(arglist__3951));
return data__delegate($elem, k, p__3948);
});
data.cljs$lang$arity$variadic = data__delegate;
return data;
})()
;
jayq.core.position = (function position($elem){
return cljs.core.js__GT_clj.call(null,$elem.position(),"\uFDD0'keywordize-keys",true);
});
jayq.core.add_class = (function add_class($elem,cl){
var cl__$1 = cljs.core.name.call(null,cl);
return $elem.addClass(cl__$1);
});
jayq.core.remove_class = (function remove_class($elem,cl){
var cl__$1 = cljs.core.name.call(null,cl);
return $elem.removeClass(cl__$1);
});
jayq.core.toggle_class = (function toggle_class($elem,cl){
var cl__$1 = cljs.core.name.call(null,cl);
return $elem.toggleClass(cl__$1);
});
jayq.core.has_class = (function has_class($elem,cl){
var cl__$1 = cljs.core.name.call(null,cl);
return $elem.hasClass(cl__$1);
});
jayq.core.is = (function is($elem,selector){
return $elem.is(jayq.core.__GT_selector.call(null,selector));
});
jayq.core.after = (function after($elem,content){
return $elem.after(content);
});
jayq.core.before = (function before($elem,content){
return $elem.before(content);
});
jayq.core.append = (function append($elem,content){
return $elem.append(content);
});
jayq.core.prepend = (function prepend($elem,content){
return $elem.prepend(content);
});
jayq.core.append_to = (function append_to($elem,target){
return $elem.appendTo(jayq.core.__GT_selector.call(null,target));
});
jayq.core.prepend_to = (function prepend_to($elem,target){
return $elem.prependTo(jayq.core.__GT_selector.call(null,target));
});
jayq.core.insert_before = (function insert_before($elem,target){
return $elem.insertBefore(jayq.core.__GT_selector.call(null,target));
});
jayq.core.insert_after = (function insert_after($elem,target){
return $elem.insertAfter(jayq.core.__GT_selector.call(null,target));
});
jayq.core.remove = (function remove($elem){
return $elem.remove();
});
/**
* @param {...*} var_args
*/
jayq.core.hide = (function() { 
var hide__delegate = function ($elem,p__3952){
var vec__3954 = p__3952;
var speed = cljs.core.nth.call(null,vec__3954,0,null);
var on_finish = cljs.core.nth.call(null,vec__3954,1,null);
return $elem.hide(speed,on_finish);
};
var hide = function ($elem,var_args){
var p__3952 = null;
if (goog.isDef(var_args)) {
  p__3952 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return hide__delegate.call(this, $elem, p__3952);
};
hide.cljs$lang$maxFixedArity = 1;
hide.cljs$lang$applyTo = (function (arglist__3955){
var $elem = cljs.core.first(arglist__3955);
var p__3952 = cljs.core.rest(arglist__3955);
return hide__delegate($elem, p__3952);
});
hide.cljs$lang$arity$variadic = hide__delegate;
return hide;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.show = (function() { 
var show__delegate = function ($elem,p__3956){
var vec__3958 = p__3956;
var speed = cljs.core.nth.call(null,vec__3958,0,null);
var on_finish = cljs.core.nth.call(null,vec__3958,1,null);
return $elem.show(speed,on_finish);
};
var show = function ($elem,var_args){
var p__3956 = null;
if (goog.isDef(var_args)) {
  p__3956 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return show__delegate.call(this, $elem, p__3956);
};
show.cljs$lang$maxFixedArity = 1;
show.cljs$lang$applyTo = (function (arglist__3959){
var $elem = cljs.core.first(arglist__3959);
var p__3956 = cljs.core.rest(arglist__3959);
return show__delegate($elem, p__3956);
});
show.cljs$lang$arity$variadic = show__delegate;
return show;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.toggle = (function() { 
var toggle__delegate = function ($elem,p__3960){
var vec__3962 = p__3960;
var speed = cljs.core.nth.call(null,vec__3962,0,null);
var on_finish = cljs.core.nth.call(null,vec__3962,1,null);
return $elem.toggle(speed,on_finish);
};
var toggle = function ($elem,var_args){
var p__3960 = null;
if (goog.isDef(var_args)) {
  p__3960 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return toggle__delegate.call(this, $elem, p__3960);
};
toggle.cljs$lang$maxFixedArity = 1;
toggle.cljs$lang$applyTo = (function (arglist__3963){
var $elem = cljs.core.first(arglist__3963);
var p__3960 = cljs.core.rest(arglist__3963);
return toggle__delegate($elem, p__3960);
});
toggle.cljs$lang$arity$variadic = toggle__delegate;
return toggle;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_out = (function() { 
var fade_out__delegate = function ($elem,p__3964){
var vec__3966 = p__3964;
var speed = cljs.core.nth.call(null,vec__3966,0,null);
var on_finish = cljs.core.nth.call(null,vec__3966,1,null);
return $elem.fadeOut(speed,on_finish);
};
var fade_out = function ($elem,var_args){
var p__3964 = null;
if (goog.isDef(var_args)) {
  p__3964 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_out__delegate.call(this, $elem, p__3964);
};
fade_out.cljs$lang$maxFixedArity = 1;
fade_out.cljs$lang$applyTo = (function (arglist__3967){
var $elem = cljs.core.first(arglist__3967);
var p__3964 = cljs.core.rest(arglist__3967);
return fade_out__delegate($elem, p__3964);
});
fade_out.cljs$lang$arity$variadic = fade_out__delegate;
return fade_out;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_in = (function() { 
var fade_in__delegate = function ($elem,p__3968){
var vec__3970 = p__3968;
var speed = cljs.core.nth.call(null,vec__3970,0,null);
var on_finish = cljs.core.nth.call(null,vec__3970,1,null);
return $elem.fadeIn(speed,on_finish);
};
var fade_in = function ($elem,var_args){
var p__3968 = null;
if (goog.isDef(var_args)) {
  p__3968 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_in__delegate.call(this, $elem, p__3968);
};
fade_in.cljs$lang$maxFixedArity = 1;
fade_in.cljs$lang$applyTo = (function (arglist__3971){
var $elem = cljs.core.first(arglist__3971);
var p__3968 = cljs.core.rest(arglist__3971);
return fade_in__delegate($elem, p__3968);
});
fade_in.cljs$lang$arity$variadic = fade_in__delegate;
return fade_in;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_up = (function() { 
var slide_up__delegate = function ($elem,p__3972){
var vec__3974 = p__3972;
var speed = cljs.core.nth.call(null,vec__3974,0,null);
var on_finish = cljs.core.nth.call(null,vec__3974,1,null);
return $elem.slideUp(speed,on_finish);
};
var slide_up = function ($elem,var_args){
var p__3972 = null;
if (goog.isDef(var_args)) {
  p__3972 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_up__delegate.call(this, $elem, p__3972);
};
slide_up.cljs$lang$maxFixedArity = 1;
slide_up.cljs$lang$applyTo = (function (arglist__3975){
var $elem = cljs.core.first(arglist__3975);
var p__3972 = cljs.core.rest(arglist__3975);
return slide_up__delegate($elem, p__3972);
});
slide_up.cljs$lang$arity$variadic = slide_up__delegate;
return slide_up;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_down = (function() { 
var slide_down__delegate = function ($elem,p__3976){
var vec__3978 = p__3976;
var speed = cljs.core.nth.call(null,vec__3978,0,null);
var on_finish = cljs.core.nth.call(null,vec__3978,1,null);
return $elem.slideDown(speed,on_finish);
};
var slide_down = function ($elem,var_args){
var p__3976 = null;
if (goog.isDef(var_args)) {
  p__3976 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_down__delegate.call(this, $elem, p__3976);
};
slide_down.cljs$lang$maxFixedArity = 1;
slide_down.cljs$lang$applyTo = (function (arglist__3979){
var $elem = cljs.core.first(arglist__3979);
var p__3976 = cljs.core.rest(arglist__3979);
return slide_down__delegate($elem, p__3976);
});
slide_down.cljs$lang$arity$variadic = slide_down__delegate;
return slide_down;
})()
;
jayq.core.siblings = (function() {
var siblings = null;
var siblings__1 = (function ($elem){
return $elem.siblings();
});
var siblings__2 = (function ($elem,selector){
return $elem.siblings(cljs.core.name.call(null,selector));
});
siblings = function($elem,selector){
switch(arguments.length){
case 1:
return siblings__1.call(this,$elem);
case 2:
return siblings__2.call(this,$elem,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
siblings.cljs$lang$arity$1 = siblings__1;
siblings.cljs$lang$arity$2 = siblings__2;
return siblings;
})()
;
jayq.core.parent = (function parent($elem){
return $elem.parent();
});
jayq.core.parents = (function() {
var parents = null;
var parents__1 = (function ($elem){
return $elem.parents();
});
var parents__2 = (function ($elem,selector){
return $elem.parents(cljs.core.name.call(null,selector));
});
parents = function($elem,selector){
switch(arguments.length){
case 1:
return parents__1.call(this,$elem);
case 2:
return parents__2.call(this,$elem,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
parents.cljs$lang$arity$1 = parents__1;
parents.cljs$lang$arity$2 = parents__2;
return parents;
})()
;
jayq.core.parents_until = (function() {
var parents_until = null;
var parents_until__1 = (function ($elem){
return $elem.parentsUntil();
});
var parents_until__2 = (function ($elem,selector){
return $elem.parentsUntil(jayq.core.__GT_selector.call(null,selector));
});
var parents_until__3 = (function ($elem,selector,filtr){
return $elem.parentsUntil(jayq.core.__GT_selector.call(null,selector),cljs.core.name.call(null,filtr));
});
parents_until = function($elem,selector,filtr){
switch(arguments.length){
case 1:
return parents_until__1.call(this,$elem);
case 2:
return parents_until__2.call(this,$elem,selector);
case 3:
return parents_until__3.call(this,$elem,selector,filtr);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
parents_until.cljs$lang$arity$1 = parents_until__1;
parents_until.cljs$lang$arity$2 = parents_until__2;
parents_until.cljs$lang$arity$3 = parents_until__3;
return parents_until;
})()
;
jayq.core.children = (function() {
var children = null;
var children__1 = (function ($elem){
return $elem.children();
});
var children__2 = (function ($elem,selector){
return $elem.children(cljs.core.name.call(null,selector));
});
children = function($elem,selector){
switch(arguments.length){
case 1:
return children__1.call(this,$elem);
case 2:
return children__2.call(this,$elem,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
children.cljs$lang$arity$1 = children__1;
children.cljs$lang$arity$2 = children__2;
return children;
})()
;
jayq.core.next = (function() {
var next = null;
var next__1 = (function ($elem){
return $elem.next();
});
var next__2 = (function ($elem,selector){
return $elem.next(cljs.core.name.call(null,selector));
});
next = function($elem,selector){
switch(arguments.length){
case 1:
return next__1.call(this,$elem);
case 2:
return next__2.call(this,$elem,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
next.cljs$lang$arity$1 = next__1;
next.cljs$lang$arity$2 = next__2;
return next;
})()
;
jayq.core.prev = (function() {
var prev = null;
var prev__1 = (function ($elem){
return $elem.prev();
});
var prev__2 = (function ($elem,selector){
return $elem.prev(cljs.core.name.call(null,selector));
});
prev = function($elem,selector){
switch(arguments.length){
case 1:
return prev__1.call(this,$elem);
case 2:
return prev__2.call(this,$elem,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prev.cljs$lang$arity$1 = prev__1;
prev.cljs$lang$arity$2 = prev__2;
return prev;
})()
;
jayq.core.next_all = (function() {
var next_all = null;
var next_all__1 = (function ($elem){
return $elem.nextAll();
});
var next_all__2 = (function ($elem,selector){
return $elem.nextAll(cljs.core.name.call(null,selector));
});
next_all = function($elem,selector){
switch(arguments.length){
case 1:
return next_all__1.call(this,$elem);
case 2:
return next_all__2.call(this,$elem,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
next_all.cljs$lang$arity$1 = next_all__1;
next_all.cljs$lang$arity$2 = next_all__2;
return next_all;
})()
;
jayq.core.prev_all = (function() {
var prev_all = null;
var prev_all__1 = (function ($elem){
return $elem.prevAll();
});
var prev_all__2 = (function ($elem,selector){
return $elem.prevAll(cljs.core.name.call(null,selector));
});
prev_all = function($elem,selector){
switch(arguments.length){
case 1:
return prev_all__1.call(this,$elem);
case 2:
return prev_all__2.call(this,$elem,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prev_all.cljs$lang$arity$1 = prev_all__1;
prev_all.cljs$lang$arity$2 = prev_all__2;
return prev_all;
})()
;
jayq.core.next_until = (function() {
var next_until = null;
var next_until__1 = (function ($elem){
return $elem.nextUntil();
});
var next_until__2 = (function ($elem,selector){
return $elem.nextUntil(jayq.core.__GT_selector.call(null,selector));
});
var next_until__3 = (function ($elem,selector,filtr){
return $elem.nextUntil(jayq.core.__GT_selector.call(null,selector),cljs.core.name.call(null,filtr));
});
next_until = function($elem,selector,filtr){
switch(arguments.length){
case 1:
return next_until__1.call(this,$elem);
case 2:
return next_until__2.call(this,$elem,selector);
case 3:
return next_until__3.call(this,$elem,selector,filtr);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
next_until.cljs$lang$arity$1 = next_until__1;
next_until.cljs$lang$arity$2 = next_until__2;
next_until.cljs$lang$arity$3 = next_until__3;
return next_until;
})()
;
jayq.core.prev_until = (function() {
var prev_until = null;
var prev_until__1 = (function ($elem){
return $elem.prevUntil();
});
var prev_until__2 = (function ($elem,selector){
return $elem.prevUntil(jayq.core.__GT_selector.call(null,selector));
});
var prev_until__3 = (function ($elem,selector,filtr){
return $elem.prevUntil(jayq.core.__GT_selector.call(null,selector),cljs.core.name.call(null,filtr));
});
prev_until = function($elem,selector,filtr){
switch(arguments.length){
case 1:
return prev_until__1.call(this,$elem);
case 2:
return prev_until__2.call(this,$elem,selector);
case 3:
return prev_until__3.call(this,$elem,selector,filtr);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prev_until.cljs$lang$arity$1 = prev_until__1;
prev_until.cljs$lang$arity$2 = prev_until__2;
prev_until.cljs$lang$arity$3 = prev_until__3;
return prev_until;
})()
;
jayq.core.find = (function find($elem,selector){
return $elem.find(cljs.core.name.call(null,selector));
});
/**
* @param {...*} var_args
*/
jayq.core.closest = (function() { 
var closest__delegate = function ($elem,selector,p__3980){
var vec__3982 = p__3980;
var context = cljs.core.nth.call(null,vec__3982,0,null);
return $elem.closest(jayq.core.__GT_selector.call(null,selector),context);
};
var closest = function ($elem,selector,var_args){
var p__3980 = null;
if (goog.isDef(var_args)) {
  p__3980 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return closest__delegate.call(this, $elem, selector, p__3980);
};
closest.cljs$lang$maxFixedArity = 2;
closest.cljs$lang$applyTo = (function (arglist__3983){
var $elem = cljs.core.first(arglist__3983);
var selector = cljs.core.first(cljs.core.next(arglist__3983));
var p__3980 = cljs.core.rest(cljs.core.next(arglist__3983));
return closest__delegate($elem, selector, p__3980);
});
closest.cljs$lang$arity$variadic = closest__delegate;
return closest;
})()
;
jayq.core.clone = (function clone($elem){
return $elem.clone();
});
jayq.core.inner = (function inner($elem,v){
return $elem.html(v);
});
jayq.core.empty = (function empty($elem){
return $elem.empty();
});
/**
* @param {...*} var_args
*/
jayq.core.val = (function() { 
var val__delegate = function ($elem,p__3984){
var vec__3986 = p__3984;
var v = cljs.core.nth.call(null,vec__3986,0,null);
if(cljs.core.truth_(v))
{return $elem.val(v);
} else
{return $elem.val();
}
};
var val = function ($elem,var_args){
var p__3984 = null;
if (goog.isDef(var_args)) {
  p__3984 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return val__delegate.call(this, $elem, p__3984);
};
val.cljs$lang$maxFixedArity = 1;
val.cljs$lang$applyTo = (function (arglist__3987){
var $elem = cljs.core.first(arglist__3987);
var p__3984 = cljs.core.rest(arglist__3987);
return val__delegate($elem, p__3984);
});
val.cljs$lang$arity$variadic = val__delegate;
return val;
})()
;
jayq.core.serialize = (function serialize($elem){
return $elem.serialize();
});
jayq.core.queue = (function queue($elem,callback){
return $elem.queue(callback);
});
jayq.core.dequeue = (function dequeue(elem){
return jayq.core.$.call(null,elem).dequeue();
});
jayq.core.document_ready = (function document_ready(func){
return jayq.core.$.call(null,document).ready(func);
});
jayq.core.xhr = (function xhr(p__3988,content,callback){
var vec__3990 = p__3988;
var method = cljs.core.nth.call(null,vec__3990,0,null);
var uri = cljs.core.nth.call(null,vec__3990,1,null);
var params = jayq.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'data","\uFDD0'success"],{"\uFDD0'type":clojure.string.upper_case.call(null,cljs.core.name.call(null,method)),"\uFDD0'data":jayq.util.clj__GT_js.call(null,content),"\uFDD0'success":callback}));
return jQuery.ajax(uri,params);
});
jayq.core.ajax = (function() {
var ajax = null;
var ajax__1 = (function (settings){
return jQuery.ajax(jayq.util.clj__GT_js.call(null,settings));
});
var ajax__2 = (function (url,settings){
return jQuery.ajax(url,jayq.util.clj__GT_js.call(null,settings));
});
ajax = function(url,settings){
switch(arguments.length){
case 1:
return ajax__1.call(this,url);
case 2:
return ajax__2.call(this,url,settings);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ajax.cljs$lang$arity$1 = ajax__1;
ajax.cljs$lang$arity$2 = ajax__2;
return ajax;
})()
;
jayq.core.mimetype_converter = (function mimetype_converter(s){
return cljs.reader.read_string.call(null,[cljs.core.str(s)].join(''));
});
jQuery.ajaxSetup(jayq.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'accepts","\uFDD0'contents","\uFDD0'converters"],{"\uFDD0'accepts":cljs.core.ObjMap.fromObject(["\uFDD0'edn","\uFDD0'clojure"],{"\uFDD0'edn":"application/edn, text/edn","\uFDD0'clojure":"application/clojure, text/clojure"}),"\uFDD0'contents":cljs.core.ObjMap.fromObject(["clojure"],{"clojure":/edn|clojure/}),"\uFDD0'converters":cljs.core.ObjMap.fromObject(["text edn","text clojure"],{"text edn":jayq.core.mimetype_converter,"text clojure":jayq.core.mimetype_converter})})));
jayq.core.bind = (function bind($elem,ev,func){
return $elem.bind(cljs.core.name.call(null,ev),func);
});
/**
* @param {...*} var_args
*/
jayq.core.unbind = (function() { 
var unbind__delegate = function ($elem,ev,p__3991){
var vec__3993 = p__3991;
var func = cljs.core.nth.call(null,vec__3993,0,null);
return $elem.unbind(cljs.core.name.call(null,ev),func);
};
var unbind = function ($elem,ev,var_args){
var p__3991 = null;
if (goog.isDef(var_args)) {
  p__3991 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return unbind__delegate.call(this, $elem, ev, p__3991);
};
unbind.cljs$lang$maxFixedArity = 2;
unbind.cljs$lang$applyTo = (function (arglist__3994){
var $elem = cljs.core.first(arglist__3994);
var ev = cljs.core.first(cljs.core.next(arglist__3994));
var p__3991 = cljs.core.rest(cljs.core.next(arglist__3994));
return unbind__delegate($elem, ev, p__3991);
});
unbind.cljs$lang$arity$variadic = unbind__delegate;
return unbind;
})()
;
jayq.core.trigger = (function trigger($elem,ev){
return $elem.trigger(cljs.core.name.call(null,ev));
});
jayq.core.delegate = (function delegate($elem,sel,ev,func){
return $elem.delegate(jayq.core.__GT_selector.call(null,sel),cljs.core.name.call(null,ev),func);
});
jayq.core.__GT_event = (function __GT_event(e){
if(cljs.core.keyword_QMARK_.call(null,e))
{return cljs.core.name.call(null,e);
} else
{if(cljs.core.map_QMARK_.call(null,e))
{return jayq.util.clj__GT_js.call(null,e);
} else
{if(cljs.core.coll_QMARK_.call(null,e))
{return clojure.string.join.call(null," ",cljs.core.map.call(null,cljs.core.name,e));
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Unknown event type: "),cljs.core.str(e)].join('')));
} else
{return null;
}
}
}
}
});
/**
* @param {...*} var_args
*/
jayq.core.on = (function() { 
var on__delegate = function ($elem,events,p__3995){
var vec__3997 = p__3995;
var sel = cljs.core.nth.call(null,vec__3997,0,null);
var data = cljs.core.nth.call(null,vec__3997,1,null);
var handler = cljs.core.nth.call(null,vec__3997,2,null);
return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),data,handler);
};
var on = function ($elem,events,var_args){
var p__3995 = null;
if (goog.isDef(var_args)) {
  p__3995 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return on__delegate.call(this, $elem, events, p__3995);
};
on.cljs$lang$maxFixedArity = 2;
on.cljs$lang$applyTo = (function (arglist__3998){
var $elem = cljs.core.first(arglist__3998);
var events = cljs.core.first(cljs.core.next(arglist__3998));
var p__3995 = cljs.core.rest(cljs.core.next(arglist__3998));
return on__delegate($elem, events, p__3995);
});
on.cljs$lang$arity$variadic = on__delegate;
return on;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.one = (function() { 
var one__delegate = function ($elem,events,p__3999){
var vec__4001 = p__3999;
var sel = cljs.core.nth.call(null,vec__4001,0,null);
var data = cljs.core.nth.call(null,vec__4001,1,null);
var handler = cljs.core.nth.call(null,vec__4001,2,null);
return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),data,handler);
};
var one = function ($elem,events,var_args){
var p__3999 = null;
if (goog.isDef(var_args)) {
  p__3999 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return one__delegate.call(this, $elem, events, p__3999);
};
one.cljs$lang$maxFixedArity = 2;
one.cljs$lang$applyTo = (function (arglist__4002){
var $elem = cljs.core.first(arglist__4002);
var events = cljs.core.first(cljs.core.next(arglist__4002));
var p__3999 = cljs.core.rest(cljs.core.next(arglist__4002));
return one__delegate($elem, events, p__3999);
});
one.cljs$lang$arity$variadic = one__delegate;
return one;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.off = (function() { 
var off__delegate = function ($elem,events,p__4003){
var vec__4005 = p__4003;
var sel = cljs.core.nth.call(null,vec__4005,0,null);
var handler = cljs.core.nth.call(null,vec__4005,1,null);
return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),handler);
};
var off = function ($elem,events,var_args){
var p__4003 = null;
if (goog.isDef(var_args)) {
  p__4003 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return off__delegate.call(this, $elem, events, p__4003);
};
off.cljs$lang$maxFixedArity = 2;
off.cljs$lang$applyTo = (function (arglist__4006){
var $elem = cljs.core.first(arglist__4006);
var events = cljs.core.first(cljs.core.next(arglist__4006));
var p__4003 = cljs.core.rest(cljs.core.next(arglist__4006));
return off__delegate($elem, events, p__4003);
});
off.cljs$lang$arity$variadic = off__delegate;
return off;
})()
;
jayq.core.prevent = (function prevent(e){
return e.preventDefault();
});
