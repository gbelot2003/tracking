if (!function (t, e) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
            if (!t.document)throw new Error("jQuery requires a window with a document");
            return e(t)
        } : e(t)
    }("undefined" != typeof window ? window : this, function (t, e) {
        function n(t) {
            var e = "length"in t && t.length, n = rt.type(t);
            return "function" === n || rt.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
        }

        function i(t, e, n) {
            if (rt.isFunction(e))return rt.grep(t, function (t, i) {
                return !!e.call(t, i, t) !== n
            });
            if (e.nodeType)return rt.grep(t, function (t) {
                return t === e !== n
            });
            if ("string" == typeof e) {
                if (ht.test(e))return rt.filter(e, t, n);
                e = rt.filter(e, t)
            }
            return rt.grep(t, function (t) {
                return rt.inArray(t, e) >= 0 !== n
            })
        }

        function r(t, e) {
            do t = t[e]; while (t && 1 !== t.nodeType);
            return t
        }

        function o(t) {
            var e = wt[t] = {};
            return rt.each(t.match(bt) || [], function (t, n) {
                e[n] = !0
            }), e
        }

        function a() {
            ft.addEventListener ? (ft.removeEventListener("DOMContentLoaded", s, !1), t.removeEventListener("load", s, !1)) : (ft.detachEvent("onreadystatechange", s), t.detachEvent("onload", s))
        }

        function s() {
            (ft.addEventListener || "load" === event.type || "complete" === ft.readyState) && (a(), rt.ready())
        }

        function l(t, e, n) {
            if (void 0 === n && 1 === t.nodeType) {
                var i = "data-" + e.replace(Dt, "-$1").toLowerCase();
                if (n = t.getAttribute(i), "string" == typeof n) {
                    try {
                        n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Tt.test(n) ? rt.parseJSON(n) : n
                    } catch (r) {
                    }
                    rt.data(t, e, n)
                } else n = void 0
            }
            return n
        }

        function c(t) {
            var e;
            for (e in t)if (("data" !== e || !rt.isEmptyObject(t[e])) && "toJSON" !== e)return !1;
            return !0
        }

        function u(t, e, n, i) {
            if (rt.acceptData(t)) {
                var r, o, a = rt.expando, s = t.nodeType, l = s ? rt.cache : t, c = s ? t[a] : t[a] && a;
                if (c && l[c] && (i || l[c].data) || void 0 !== n || "string" != typeof e)return c || (c = s ? t[a] = X.pop() || rt.guid++ : a), l[c] || (l[c] = s ? {} : {toJSON: rt.noop}), ("object" == typeof e || "function" == typeof e) && (i ? l[c] = rt.extend(l[c], e) : l[c].data = rt.extend(l[c].data, e)), o = l[c], i || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[rt.camelCase(e)] = n), "string" == typeof e ? (r = o[e], null == r && (r = o[rt.camelCase(e)])) : r = o, r
            }
        }

        function d(t, e, n) {
            if (rt.acceptData(t)) {
                var i, r, o = t.nodeType, a = o ? rt.cache : t, s = o ? t[rt.expando] : rt.expando;
                if (a[s]) {
                    if (e && (i = n ? a[s] : a[s].data)) {
                        rt.isArray(e) ? e = e.concat(rt.map(e, rt.camelCase)) : e in i ? e = [e] : (e = rt.camelCase(e), e = e in i ? [e] : e.split(" ")), r = e.length;
                        for (; r--;)delete i[e[r]];
                        if (n ? !c(i) : !rt.isEmptyObject(i))return
                    }
                    (n || (delete a[s].data, c(a[s]))) && (o ? rt.cleanData([t], !0) : nt.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
                }
            }
        }

        function h() {
            return !0
        }

        function p() {
            return !1
        }

        function f() {
            try {
                return ft.activeElement
            } catch (t) {
            }
        }

        function g(t) {
            var e = jt.split("|"), n = t.createDocumentFragment();
            if (n.createElement)for (; e.length;)n.createElement(e.pop());
            return n
        }

        function v(t, e) {
            var n, i, r = 0, o = typeof t.getElementsByTagName !== St ? t.getElementsByTagName(e || "*") : typeof t.querySelectorAll !== St ? t.querySelectorAll(e || "*") : void 0;
            if (!o)for (o = [], n = t.childNodes || t; null != (i = n[r]); r++)!e || rt.nodeName(i, e) ? o.push(i) : rt.merge(o, v(i, e));
            return void 0 === e || e && rt.nodeName(t, e) ? rt.merge([t], o) : o
        }

        function m(t) {
            Ot.test(t.type) && (t.defaultChecked = t.checked)
        }

        function y(t, e) {
            return rt.nodeName(t, "table") && rt.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
        }

        function b(t) {
            return t.type = (null !== rt.find.attr(t, "type")) + "/" + t.type, t
        }

        function w(t) {
            var e = Qt.exec(t.type);
            return e ? t.type = e[1] : t.removeAttribute("type"), t
        }

        function x(t, e) {
            for (var n, i = 0; null != (n = t[i]); i++)rt._data(n, "globalEval", !e || rt._data(e[i], "globalEval"))
        }

        function C(t, e) {
            if (1 === e.nodeType && rt.hasData(t)) {
                var n, i, r, o = rt._data(t), a = rt._data(e, o), s = o.events;
                if (s) {
                    delete a.handle, a.events = {};
                    for (n in s)for (i = 0, r = s[n].length; r > i; i++)rt.event.add(e, n, s[n][i])
                }
                a.data && (a.data = rt.extend({}, a.data))
            }
        }

        function S(t, e) {
            var n, i, r;
            if (1 === e.nodeType) {
                if (n = e.nodeName.toLowerCase(), !nt.noCloneEvent && e[rt.expando]) {
                    r = rt._data(e);
                    for (i in r.events)rt.removeEvent(e, i, r.handle);
                    e.removeAttribute(rt.expando)
                }
                "script" === n && e.text !== t.text ? (b(e).text = t.text, w(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), nt.html5Clone && t.innerHTML && !rt.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && Ot.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
            }
        }

        function T(e, n) {
            var i, r = rt(n.createElement(e)).appendTo(n.body), o = t.getDefaultComputedStyle && (i = t.getDefaultComputedStyle(r[0])) ? i.display : rt.css(r[0], "display");
            return r.detach(), o
        }

        function D(t) {
            var e = ft, n = Zt[t];
            return n || (n = T(t, e), "none" !== n && n || (Jt = (Jt || rt("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = (Jt[0].contentWindow || Jt[0].contentDocument).document, e.write(), e.close(), n = T(t, e), Jt.detach()), Zt[t] = n), n
        }

        function _(t, e) {
            return {
                get: function () {
                    var n = t();
                    return null != n ? n ? void delete this.get : (this.get = e).apply(this, arguments) : void 0
                }
            }
        }

        function k(t, e) {
            if (e in t)return e;
            for (var n = e.charAt(0).toUpperCase() + e.slice(1), i = e, r = he.length; r--;)if (e = he[r] + n, e in t)return e;
            return i
        }

        function E(t, e) {
            for (var n, i, r, o = [], a = 0, s = t.length; s > a; a++)i = t[a], i.style && (o[a] = rt._data(i, "olddisplay"), n = i.style.display, e ? (o[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && Et(i) && (o[a] = rt._data(i, "olddisplay", D(i.nodeName)))) : (r = Et(i), (n && "none" !== n || !r) && rt._data(i, "olddisplay", r ? n : rt.css(i, "display"))));
            for (a = 0; s > a; a++)i = t[a], i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? o[a] || "" : "none"));
            return t
        }

        function A(t, e, n) {
            var i = le.exec(e);
            return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
        }

        function O(t, e, n, i, r) {
            for (var o = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, a = 0; 4 > o; o += 2)"margin" === n && (a += rt.css(t, n + kt[o], !0, r)), i ? ("content" === n && (a -= rt.css(t, "padding" + kt[o], !0, r)), "margin" !== n && (a -= rt.css(t, "border" + kt[o] + "Width", !0, r))) : (a += rt.css(t, "padding" + kt[o], !0, r), "padding" !== n && (a += rt.css(t, "border" + kt[o] + "Width", !0, r)));
            return a
        }

        function N(t, e, n) {
            var i = !0, r = "width" === e ? t.offsetWidth : t.offsetHeight, o = te(t), a = nt.boxSizing && "border-box" === rt.css(t, "boxSizing", !1, o);
            if (0 >= r || null == r) {
                if (r = ee(t, e, o), (0 > r || null == r) && (r = t.style[e]), ie.test(r))return r;
                i = a && (nt.boxSizingReliable() || r === t.style[e]), r = parseFloat(r) || 0
            }
            return r + O(t, e, n || (a ? "border" : "content"), i, o) + "px"
        }

        function $(t, e, n, i, r) {
            return new $.prototype.init(t, e, n, i, r)
        }

        function I() {
            return setTimeout(function () {
                pe = void 0
            }), pe = rt.now()
        }

        function L(t, e) {
            var n, i = {height: t}, r = 0;
            for (e = e ? 1 : 0; 4 > r; r += 2 - e)n = kt[r], i["margin" + n] = i["padding" + n] = t;
            return e && (i.opacity = i.width = t), i
        }

        function P(t, e, n) {
            for (var i, r = (be[e] || []).concat(be["*"]), o = 0, a = r.length; a > o; o++)if (i = r[o].call(n, e, t))return i
        }

        function j(t, e, n) {
            var i, r, o, a, s, l, c, u, d = this, h = {}, p = t.style, f = t.nodeType && Et(t), g = rt._data(t, "fxshow");
            n.queue || (s = rt._queueHooks(t, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function () {
                s.unqueued || l()
            }), s.unqueued++, d.always(function () {
                d.always(function () {
                    s.unqueued--, rt.queue(t, "fx").length || s.empty.fire()
                })
            })), 1 === t.nodeType && ("height"in e || "width"in e) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], c = rt.css(t, "display"), u = "none" === c ? rt._data(t, "olddisplay") || D(t.nodeName) : c, "inline" === u && "none" === rt.css(t, "float") && (nt.inlineBlockNeedsLayout && "inline" !== D(t.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", nt.shrinkWrapBlocks() || d.always(function () {
                p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
            }));
            for (i in e)if (r = e[i], ge.exec(r)) {
                if (delete e[i], o = o || "toggle" === r, r === (f ? "hide" : "show")) {
                    if ("show" !== r || !g || void 0 === g[i])continue;
                    f = !0
                }
                h[i] = g && g[i] || rt.style(t, i)
            } else c = void 0;
            if (rt.isEmptyObject(h))"inline" === ("none" === c ? D(t.nodeName) : c) && (p.display = c); else {
                g ? "hidden"in g && (f = g.hidden) : g = rt._data(t, "fxshow", {}), o && (g.hidden = !f), f ? rt(t).show() : d.done(function () {
                    rt(t).hide()
                }), d.done(function () {
                    var e;
                    rt._removeData(t, "fxshow");
                    for (e in h)rt.style(t, e, h[e])
                });
                for (i in h)a = P(f ? g[i] : 0, i, d), i in g || (g[i] = a.start, f && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
            }
        }

        function M(t, e) {
            var n, i, r, o, a;
            for (n in t)if (i = rt.camelCase(n), r = e[i], o = t[n], rt.isArray(o) && (r = o[1], o = t[n] = o[0]), n !== i && (t[i] = o, delete t[n]), a = rt.cssHooks[i], a && "expand"in a) {
                o = a.expand(o), delete t[i];
                for (n in o)n in t || (t[n] = o[n], e[n] = r)
            } else e[i] = r
        }

        function R(t, e, n) {
            var i, r, o = 0, a = ye.length, s = rt.Deferred().always(function () {
                delete l.elem
            }), l = function () {
                if (r)return !1;
                for (var e = pe || I(), n = Math.max(0, c.startTime + c.duration - e), i = n / c.duration || 0, o = 1 - i, a = 0, l = c.tweens.length; l > a; a++)c.tweens[a].run(o);
                return s.notifyWith(t, [c, o, n]), 1 > o && l ? n : (s.resolveWith(t, [c]), !1)
            }, c = s.promise({
                elem: t,
                props: rt.extend({}, e),
                opts: rt.extend(!0, {specialEasing: {}}, n),
                originalProperties: e,
                originalOptions: n,
                startTime: pe || I(),
                duration: n.duration,
                tweens: [],
                createTween: function (e, n) {
                    var i = rt.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
                    return c.tweens.push(i), i
                },
                stop: function (e) {
                    var n = 0, i = e ? c.tweens.length : 0;
                    if (r)return this;
                    for (r = !0; i > n; n++)c.tweens[n].run(1);
                    return e ? s.resolveWith(t, [c, e]) : s.rejectWith(t, [c, e]), this
                }
            }), u = c.props;
            for (M(u, c.opts.specialEasing); a > o; o++)if (i = ye[o].call(c, t, u, c.opts))return i;
            return rt.map(u, P, c), rt.isFunction(c.opts.start) && c.opts.start.call(t, c), rt.fx.timer(rt.extend(l, {
                elem: t,
                anim: c,
                queue: c.opts.queue
            })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
        }

        function F(t) {
            return function (e, n) {
                "string" != typeof e && (n = e, e = "*");
                var i, r = 0, o = e.toLowerCase().match(bt) || [];
                if (rt.isFunction(n))for (; i = o[r++];)"+" === i.charAt(0) ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
            }
        }

        function q(t, e, n, i) {
            function r(s) {
                var l;
                return o[s] = !0, rt.each(t[s] || [], function (t, s) {
                    var c = s(e, n, i);
                    return "string" != typeof c || a || o[c] ? a ? !(l = c) : void 0 : (e.dataTypes.unshift(c), r(c), !1)
                }), l
            }

            var o = {}, a = t === ze;
            return r(e.dataTypes[0]) || !o["*"] && r("*")
        }

        function H(t, e) {
            var n, i, r = rt.ajaxSettings.flatOptions || {};
            for (i in e)void 0 !== e[i] && ((r[i] ? t : n || (n = {}))[i] = e[i]);
            return n && rt.extend(!0, t, n), t
        }

        function W(t, e, n) {
            for (var i, r, o, a, s = t.contents, l = t.dataTypes; "*" === l[0];)l.shift(), void 0 === r && (r = t.mimeType || e.getResponseHeader("Content-Type"));
            if (r)for (a in s)if (s[a] && s[a].test(r)) {
                l.unshift(a);
                break
            }
            if (l[0]in n)o = l[0]; else {
                for (a in n) {
                    if (!l[0] || t.converters[a + " " + l[0]]) {
                        o = a;
                        break
                    }
                    i || (i = a)
                }
                o = o || i
            }
            return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0
        }

        function z(t, e, n, i) {
            var r, o, a, s, l, c = {}, u = t.dataTypes.slice();
            if (u[1])for (a in t.converters)c[a.toLowerCase()] = t.converters[a];
            for (o = u.shift(); o;)if (t.responseFields[o] && (n[t.responseFields[o]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = u.shift())if ("*" === o)o = l; else if ("*" !== l && l !== o) {
                if (a = c[l + " " + o] || c["* " + o], !a)for (r in c)if (s = r.split(" "), s[1] === o && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                    a === !0 ? a = c[r] : c[r] !== !0 && (o = s[0], u.unshift(s[1]));
                    break
                }
                if (a !== !0)if (a && t["throws"])e = a(e); else try {
                    e = a(e)
                } catch (d) {
                    return {state: "parsererror", error: a ? d : "No conversion from " + l + " to " + o}
                }
            }
            return {state: "success", data: e}
        }

        function B(t, e, n, i) {
            var r;
            if (rt.isArray(e))rt.each(e, function (e, r) {
                n || Qe.test(t) ? i(t, r) : B(t + "[" + ("object" == typeof r ? e : "") + "]", r, n, i)
            }); else if (n || "object" !== rt.type(e))i(t, e); else for (r in e)B(t + "[" + r + "]", e[r], n, i)
        }

        function V() {
            try {
                return new t.XMLHttpRequest
            } catch (e) {
            }
        }

        function U() {
            try {
                return new t.ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {
            }
        }

        function Q(t) {
            return rt.isWindow(t) ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1
        }

        var X = [], Y = X.slice, K = X.concat, G = X.push, J = X.indexOf, Z = {}, tt = Z.toString, et = Z.hasOwnProperty, nt = {}, it = "1.11.3", rt = function (t, e) {
            return new rt.fn.init(t, e)
        }, ot = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, at = /^-ms-/, st = /-([\da-z])/gi, lt = function (t, e) {
            return e.toUpperCase()
        };
        rt.fn = rt.prototype = {
            jquery: it, constructor: rt, selector: "", length: 0, toArray: function () {
                return Y.call(this)
            }, get: function (t) {
                return null != t ? 0 > t ? this[t + this.length] : this[t] : Y.call(this)
            }, pushStack: function (t) {
                var e = rt.merge(this.constructor(), t);
                return e.prevObject = this, e.context = this.context, e
            }, each: function (t, e) {
                return rt.each(this, t, e)
            }, map: function (t) {
                return this.pushStack(rt.map(this, function (e, n) {
                    return t.call(e, n, e)
                }))
            }, slice: function () {
                return this.pushStack(Y.apply(this, arguments))
            }, first: function () {
                return this.eq(0)
            }, last: function () {
                return this.eq(-1)
            }, eq: function (t) {
                var e = this.length, n = +t + (0 > t ? e : 0);
                return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
            }, end: function () {
                return this.prevObject || this.constructor(null)
            }, push: G, sort: X.sort, splice: X.splice
        }, rt.extend = rt.fn.extend = function () {
            var t, e, n, i, r, o, a = arguments[0] || {}, s = 1, l = arguments.length, c = !1;
            for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || rt.isFunction(a) || (a = {}), s === l && (a = this, s--); l > s; s++)if (null != (r = arguments[s]))for (i in r)t = a[i], n = r[i], a !== n && (c && n && (rt.isPlainObject(n) || (e = rt.isArray(n))) ? (e ? (e = !1, o = t && rt.isArray(t) ? t : []) : o = t && rt.isPlainObject(t) ? t : {}, a[i] = rt.extend(c, o, n)) : void 0 !== n && (a[i] = n));
            return a
        }, rt.extend({
            expando: "jQuery" + (it + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (t) {
                throw new Error(t)
            }, noop: function () {
            }, isFunction: function (t) {
                return "function" === rt.type(t)
            }, isArray: Array.isArray || function (t) {
                return "array" === rt.type(t)
            }, isWindow: function (t) {
                return null != t && t == t.window
            }, isNumeric: function (t) {
                return !rt.isArray(t) && t - parseFloat(t) + 1 >= 0
            }, isEmptyObject: function (t) {
                var e;
                for (e in t)return !1;
                return !0
            }, isPlainObject: function (t) {
                var e;
                if (!t || "object" !== rt.type(t) || t.nodeType || rt.isWindow(t))return !1;
                try {
                    if (t.constructor && !et.call(t, "constructor") && !et.call(t.constructor.prototype, "isPrototypeOf"))return !1
                } catch (n) {
                    return !1
                }
                if (nt.ownLast)for (e in t)return et.call(t, e);
                for (e in t);
                return void 0 === e || et.call(t, e)
            }, type: function (t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? Z[tt.call(t)] || "object" : typeof t
            }, globalEval: function (e) {
                e && rt.trim(e) && (t.execScript || function (e) {
                    t.eval.call(t, e)
                })(e)
            }, camelCase: function (t) {
                return t.replace(at, "ms-").replace(st, lt)
            }, nodeName: function (t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
            }, each: function (t, e, i) {
                var r, o = 0, a = t.length, s = n(t);
                if (i) {
                    if (s)for (; a > o && (r = e.apply(t[o], i), r !== !1); o++); else for (o in t)if (r = e.apply(t[o], i), r === !1)break
                } else if (s)for (; a > o && (r = e.call(t[o], o, t[o]), r !== !1); o++); else for (o in t)if (r = e.call(t[o], o, t[o]), r === !1)break;
                return t
            }, trim: function (t) {
                return null == t ? "" : (t + "").replace(ot, "")
            }, makeArray: function (t, e) {
                var i = e || [];
                return null != t && (n(Object(t)) ? rt.merge(i, "string" == typeof t ? [t] : t) : G.call(i, t)), i
            }, inArray: function (t, e, n) {
                var i;
                if (e) {
                    if (J)return J.call(e, t, n);
                    for (i = e.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)if (n in e && e[n] === t)return n
                }
                return -1
            }, merge: function (t, e) {
                for (var n = +e.length, i = 0, r = t.length; n > i;)t[r++] = e[i++];
                if (n !== n)for (; void 0 !== e[i];)t[r++] = e[i++];
                return t.length = r, t
            }, grep: function (t, e, n) {
                for (var i, r = [], o = 0, a = t.length, s = !n; a > o; o++)i = !e(t[o], o), i !== s && r.push(t[o]);
                return r
            }, map: function (t, e, i) {
                var r, o = 0, a = t.length, s = n(t), l = [];
                if (s)for (; a > o; o++)r = e(t[o], o, i), null != r && l.push(r); else for (o in t)r = e(t[o], o, i), null != r && l.push(r);
                return K.apply([], l)
            }, guid: 1, proxy: function (t, e) {
                var n, i, r;
                return "string" == typeof e && (r = t[e], e = t, t = r), rt.isFunction(t) ? (n = Y.call(arguments, 2), i = function () {
                    return t.apply(e || this, n.concat(Y.call(arguments)))
                }, i.guid = t.guid = t.guid || rt.guid++, i) : void 0
            }, now: function () {
                return +new Date
            }, support: nt
        }), rt.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
            Z["[object " + e + "]"] = e.toLowerCase()
        });
        var ct = function (t) {
            function e(t, e, n, i) {
                var r, o, a, s, l, c, d, p, f, g;
                if ((e ? e.ownerDocument || e : q) !== $ && N(e), e = e || $, n = n || [], s = e.nodeType, "string" != typeof t || !t || 1 !== s && 9 !== s && 11 !== s)return n;
                if (!i && L) {
                    if (11 !== s && (r = yt.exec(t)))if (a = r[1]) {
                        if (9 === s) {
                            if (o = e.getElementById(a), !o || !o.parentNode)return n;
                            if (o.id === a)return n.push(o), n
                        } else if (e.ownerDocument && (o = e.ownerDocument.getElementById(a)) && R(e, o) && o.id === a)return n.push(o), n
                    } else {
                        if (r[2])return J.apply(n, e.getElementsByTagName(t)), n;
                        if ((a = r[3]) && x.getElementsByClassName)return J.apply(n, e.getElementsByClassName(a)), n
                    }
                    if (x.qsa && (!P || !P.test(t))) {
                        if (p = d = F, f = e, g = 1 !== s && t, 1 === s && "object" !== e.nodeName.toLowerCase()) {
                            for (c = D(t), (d = e.getAttribute("id")) ? p = d.replace(wt, "\\$&") : e.setAttribute("id", p), p = "[id='" + p + "'] ", l = c.length; l--;)c[l] = p + h(c[l]);
                            f = bt.test(t) && u(e.parentNode) || e, g = c.join(",")
                        }
                        if (g)try {
                            return J.apply(n, f.querySelectorAll(g)), n
                        } catch (v) {
                        } finally {
                            d || e.removeAttribute("id")
                        }
                    }
                }
                return k(t.replace(lt, "$1"), e, n, i)
            }

            function n() {
                function t(n, i) {
                    return e.push(n + " ") > C.cacheLength && delete t[e.shift()], t[n + " "] = i
                }

                var e = [];
                return t
            }

            function i(t) {
                return t[F] = !0, t
            }

            function r(t) {
                var e = $.createElement("div");
                try {
                    return !!t(e)
                } catch (n) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
                }
            }

            function o(t, e) {
                for (var n = t.split("|"), i = t.length; i--;)C.attrHandle[n[i]] = e
            }

            function a(t, e) {
                var n = e && t, i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || Q) - (~t.sourceIndex || Q);
                if (i)return i;
                if (n)for (; n = n.nextSibling;)if (n === e)return -1;
                return t ? 1 : -1
            }

            function s(t) {
                return function (e) {
                    var n = e.nodeName.toLowerCase();
                    return "input" === n && e.type === t
                }
            }

            function l(t) {
                return function (e) {
                    var n = e.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && e.type === t
                }
            }

            function c(t) {
                return i(function (e) {
                    return e = +e, i(function (n, i) {
                        for (var r, o = t([], n.length, e), a = o.length; a--;)n[r = o[a]] && (n[r] = !(i[r] = n[r]))
                    })
                })
            }

            function u(t) {
                return t && "undefined" != typeof t.getElementsByTagName && t
            }

            function d() {
            }

            function h(t) {
                for (var e = 0, n = t.length, i = ""; n > e; e++)i += t[e].value;
                return i
            }

            function p(t, e, n) {
                var i = e.dir, r = n && "parentNode" === i, o = W++;
                return e.first ? function (e, n, o) {
                    for (; e = e[i];)if (1 === e.nodeType || r)return t(e, n, o)
                } : function (e, n, a) {
                    var s, l, c = [H, o];
                    if (a) {
                        for (; e = e[i];)if ((1 === e.nodeType || r) && t(e, n, a))return !0
                    } else for (; e = e[i];)if (1 === e.nodeType || r) {
                        if (l = e[F] || (e[F] = {}), (s = l[i]) && s[0] === H && s[1] === o)return c[2] = s[2];
                        if (l[i] = c, c[2] = t(e, n, a))return !0
                    }
                }
            }

            function f(t) {
                return t.length > 1 ? function (e, n, i) {
                    for (var r = t.length; r--;)if (!t[r](e, n, i))return !1;
                    return !0
                } : t[0]
            }

            function g(t, n, i) {
                for (var r = 0, o = n.length; o > r; r++)e(t, n[r], i);
                return i
            }

            function v(t, e, n, i, r) {
                for (var o, a = [], s = 0, l = t.length, c = null != e; l > s; s++)(o = t[s]) && (!n || n(o, i, r)) && (a.push(o), c && e.push(s));
                return a
            }

            function m(t, e, n, r, o, a) {
                return r && !r[F] && (r = m(r)), o && !o[F] && (o = m(o, a)), i(function (i, a, s, l) {
                    var c, u, d, h = [], p = [], f = a.length, m = i || g(e || "*", s.nodeType ? [s] : s, []), y = !t || !i && e ? m : v(m, h, t, s, l), b = n ? o || (i ? t : f || r) ? [] : a : y;
                    if (n && n(y, b, s, l), r)for (c = v(b, p), r(c, [], s, l), u = c.length; u--;)(d = c[u]) && (b[p[u]] = !(y[p[u]] = d));
                    if (i) {
                        if (o || t) {
                            if (o) {
                                for (c = [], u = b.length; u--;)(d = b[u]) && c.push(y[u] = d);
                                o(null, b = [], c, l)
                            }
                            for (u = b.length; u--;)(d = b[u]) && (c = o ? tt(i, d) : h[u]) > -1 && (i[c] = !(a[c] = d))
                        }
                    } else b = v(b === a ? b.splice(f, b.length) : b), o ? o(null, a, b, l) : J.apply(a, b)
                })
            }

            function y(t) {
                for (var e, n, i, r = t.length, o = C.relative[t[0].type], a = o || C.relative[" "], s = o ? 1 : 0, l = p(function (t) {
                    return t === e
                }, a, !0), c = p(function (t) {
                    return tt(e, t) > -1
                }, a, !0), u = [function (t, n, i) {
                    var r = !o && (i || n !== E) || ((e = n).nodeType ? l(t, n, i) : c(t, n, i));
                    return e = null, r
                }]; r > s; s++)if (n = C.relative[t[s].type])u = [p(f(u), n)]; else {
                    if (n = C.filter[t[s].type].apply(null, t[s].matches), n[F]) {
                        for (i = ++s; r > i && !C.relative[t[i].type]; i++);
                        return m(s > 1 && f(u), s > 1 && h(t.slice(0, s - 1).concat({value: " " === t[s - 2].type ? "*" : ""})).replace(lt, "$1"), n, i > s && y(t.slice(s, i)), r > i && y(t = t.slice(i)), r > i && h(t))
                    }
                    u.push(n)
                }
                return f(u)
            }

            function b(t, n) {
                var r = n.length > 0, o = t.length > 0, a = function (i, a, s, l, c) {
                    var u, d, h, p = 0, f = "0", g = i && [], m = [], y = E, b = i || o && C.find.TAG("*", c), w = H += null == y ? 1 : Math.random() || .1, x = b.length;
                    for (c && (E = a !== $ && a); f !== x && null != (u = b[f]); f++) {
                        if (o && u) {
                            for (d = 0; h = t[d++];)if (h(u, a, s)) {
                                l.push(u);
                                break
                            }
                            c && (H = w)
                        }
                        r && ((u = !h && u) && p--, i && g.push(u))
                    }
                    if (p += f, r && f !== p) {
                        for (d = 0; h = n[d++];)h(g, m, a, s);
                        if (i) {
                            if (p > 0)for (; f--;)g[f] || m[f] || (m[f] = K.call(l));
                            m = v(m)
                        }
                        J.apply(l, m), c && !i && m.length > 0 && p + n.length > 1 && e.uniqueSort(l)
                    }
                    return c && (H = w, E = y), g
                };
                return r ? i(a) : a
            }

            var w, x, C, S, T, D, _, k, E, A, O, N, $, I, L, P, j, M, R, F = "sizzle" + 1 * new Date, q = t.document, H = 0, W = 0, z = n(), B = n(), V = n(), U = function (t, e) {
                return t === e && (O = !0), 0
            }, Q = 1 << 31, X = {}.hasOwnProperty, Y = [], K = Y.pop, G = Y.push, J = Y.push, Z = Y.slice, tt = function (t, e) {
                for (var n = 0, i = t.length; i > n; n++)if (t[n] === e)return n;
                return -1
            }, et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", nt = "[\\x20\\t\\r\\n\\f]", it = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", rt = it.replace("w", "w#"), ot = "\\[" + nt + "*(" + it + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + rt + "))|)" + nt + "*\\]", at = ":(" + it + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ot + ")*)|.*)\\)|)", st = new RegExp(nt + "+", "g"), lt = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"), ct = new RegExp("^" + nt + "*," + nt + "*"), ut = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"), dt = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"), ht = new RegExp(at), pt = new RegExp("^" + rt + "$"), ft = {
                ID: new RegExp("^#(" + it + ")"),
                CLASS: new RegExp("^\\.(" + it + ")"),
                TAG: new RegExp("^(" + it.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + ot),
                PSEUDO: new RegExp("^" + at),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + et + ")$", "i"),
                needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
            }, gt = /^(?:input|select|textarea|button)$/i, vt = /^h\d$/i, mt = /^[^{]+\{\s*\[native \w/, yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, bt = /[+~]/, wt = /'|\\/g, xt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"), Ct = function (t, e, n) {
                var i = "0x" + e - 65536;
                return i !== i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            }, St = function () {
                N()
            };
            try {
                J.apply(Y = Z.call(q.childNodes), q.childNodes), Y[q.childNodes.length].nodeType
            } catch (Tt) {
                J = {
                    apply: Y.length ? function (t, e) {
                        G.apply(t, Z.call(e))
                    } : function (t, e) {
                        for (var n = t.length, i = 0; t[n++] = e[i++];);
                        t.length = n - 1
                    }
                }
            }
            x = e.support = {}, T = e.isXML = function (t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return e ? "HTML" !== e.nodeName : !1
            }, N = e.setDocument = function (t) {
                var e, n, i = t ? t.ownerDocument || t : q;
                return i !== $ && 9 === i.nodeType && i.documentElement ? ($ = i, I = i.documentElement, n = i.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", St, !1) : n.attachEvent && n.attachEvent("onunload", St)), L = !T(i), x.attributes = r(function (t) {
                    return t.className = "i", !t.getAttribute("className")
                }), x.getElementsByTagName = r(function (t) {
                    return t.appendChild(i.createComment("")), !t.getElementsByTagName("*").length
                }), x.getElementsByClassName = mt.test(i.getElementsByClassName), x.getById = r(function (t) {
                    return I.appendChild(t).id = F, !i.getElementsByName || !i.getElementsByName(F).length
                }), x.getById ? (C.find.ID = function (t, e) {
                    if ("undefined" != typeof e.getElementById && L) {
                        var n = e.getElementById(t);
                        return n && n.parentNode ? [n] : []
                    }
                }, C.filter.ID = function (t) {
                    var e = t.replace(xt, Ct);
                    return function (t) {
                        return t.getAttribute("id") === e
                    }
                }) : (delete C.find.ID, C.filter.ID = function (t) {
                    var e = t.replace(xt, Ct);
                    return function (t) {
                        var n = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                        return n && n.value === e
                    }
                }), C.find.TAG = x.getElementsByTagName ? function (t, e) {
                    return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : x.qsa ? e.querySelectorAll(t) : void 0
                } : function (t, e) {
                    var n, i = [], r = 0, o = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; n = o[r++];)1 === n.nodeType && i.push(n);
                        return i
                    }
                    return o
                }, C.find.CLASS = x.getElementsByClassName && function (t, e) {
                    return L ? e.getElementsByClassName(t) : void 0
                }, j = [], P = [], (x.qsa = mt.test(i.querySelectorAll)) && (r(function (t) {
                    I.appendChild(t).innerHTML = "<a id='" + F + "'></a><select id='" + F + "-\f]' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && P.push("[*^$]=" + nt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || P.push("\\[" + nt + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + F + "-]").length || P.push("~="), t.querySelectorAll(":checked").length || P.push(":checked"), t.querySelectorAll("a#" + F + "+*").length || P.push(".#.+[+~]")
                }), r(function (t) {
                    var e = i.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && P.push("name" + nt + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || P.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), P.push(",.*:")
                })), (x.matchesSelector = mt.test(M = I.matches || I.webkitMatchesSelector || I.mozMatchesSelector || I.oMatchesSelector || I.msMatchesSelector)) && r(function (t) {
                    x.disconnectedMatch = M.call(t, "div"), M.call(t, "[s!='']:x"), j.push("!=", at)
                }), P = P.length && new RegExp(P.join("|")), j = j.length && new RegExp(j.join("|")), e = mt.test(I.compareDocumentPosition), R = e || mt.test(I.contains) ? function (t, e) {
                    var n = 9 === t.nodeType ? t.documentElement : t, i = e && e.parentNode;
                    return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                } : function (t, e) {
                    if (e)for (; e = e.parentNode;)if (e === t)return !0;
                    return !1
                }, U = e ? function (t, e) {
                    if (t === e)return O = !0, 0;
                    var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !x.sortDetached && e.compareDocumentPosition(t) === n ? t === i || t.ownerDocument === q && R(q, t) ? -1 : e === i || e.ownerDocument === q && R(q, e) ? 1 : A ? tt(A, t) - tt(A, e) : 0 : 4 & n ? -1 : 1)
                } : function (t, e) {
                    if (t === e)return O = !0, 0;
                    var n, r = 0, o = t.parentNode, s = e.parentNode, l = [t], c = [e];
                    if (!o || !s)return t === i ? -1 : e === i ? 1 : o ? -1 : s ? 1 : A ? tt(A, t) - tt(A, e) : 0;
                    if (o === s)return a(t, e);
                    for (n = t; n = n.parentNode;)l.unshift(n);
                    for (n = e; n = n.parentNode;)c.unshift(n);
                    for (; l[r] === c[r];)r++;
                    return r ? a(l[r], c[r]) : l[r] === q ? -1 : c[r] === q ? 1 : 0
                }, i) : $
            }, e.matches = function (t, n) {
                return e(t, null, null, n)
            }, e.matchesSelector = function (t, n) {
                if ((t.ownerDocument || t) !== $ && N(t), n = n.replace(dt, "='$1']"), !(!x.matchesSelector || !L || j && j.test(n) || P && P.test(n)))try {
                    var i = M.call(t, n);
                    if (i || x.disconnectedMatch || t.document && 11 !== t.document.nodeType)return i
                } catch (r) {
                }
                return e(n, $, null, [t]).length > 0
            }, e.contains = function (t, e) {
                return (t.ownerDocument || t) !== $ && N(t), R(t, e)
            }, e.attr = function (t, e) {
                (t.ownerDocument || t) !== $ && N(t);
                var n = C.attrHandle[e.toLowerCase()], i = n && X.call(C.attrHandle, e.toLowerCase()) ? n(t, e, !L) : void 0;
                return void 0 !== i ? i : x.attributes || !L ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            }, e.error = function (t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, e.uniqueSort = function (t) {
                var e, n = [], i = 0, r = 0;
                if (O = !x.detectDuplicates, A = !x.sortStable && t.slice(0), t.sort(U), O) {
                    for (; e = t[r++];)e === t[r] && (i = n.push(r));
                    for (; i--;)t.splice(n[i], 1)
                }
                return A = null, t
            }, S = e.getText = function (t) {
                var e, n = "", i = 0, r = t.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof t.textContent)return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling)n += S(t)
                    } else if (3 === r || 4 === r)return t.nodeValue
                } else for (; e = t[i++];)n += S(e);
                return n
            }, C = e.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: ft,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {dir: "parentNode", first: !0},
                    " ": {dir: "parentNode"},
                    "+": {dir: "previousSibling", first: !0},
                    "~": {dir: "previousSibling"}
                },
                preFilter: {
                    ATTR: function (t) {
                        return t[1] = t[1].replace(xt, Ct), t[3] = (t[3] || t[4] || t[5] || "").replace(xt, Ct), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    }, CHILD: function (t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                    }, PSEUDO: function (t) {
                        var e, n = !t[6] && t[2];
                        return ft.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && ht.test(n) && (e = D(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (t) {
                        var e = t.replace(xt, Ct).toLowerCase();
                        return "*" === t ? function () {
                            return !0
                        } : function (t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    }, CLASS: function (t) {
                        var e = z[t + " "];
                        return e || (e = new RegExp("(^|" + nt + ")" + t + "(" + nt + "|$)")) && z(t, function (t) {
                                return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                            })
                    }, ATTR: function (t, n, i) {
                        return function (r) {
                            var o = e.attr(r, t);
                            return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(st, " ") + " ").indexOf(i) > -1 : "|=" === n ? o === i || o.slice(0, i.length + 1) === i + "-" : !1) : !0
                        }
                    }, CHILD: function (t, e, n, i, r) {
                        var o = "nth" !== t.slice(0, 3), a = "last" !== t.slice(-4), s = "of-type" === e;
                        return 1 === i && 0 === r ? function (t) {
                            return !!t.parentNode
                        } : function (e, n, l) {
                            var c, u, d, h, p, f, g = o !== a ? "nextSibling" : "previousSibling", v = e.parentNode, m = s && e.nodeName.toLowerCase(), y = !l && !s;
                            if (v) {
                                if (o) {
                                    for (; g;) {
                                        for (d = e; d = d[g];)if (s ? d.nodeName.toLowerCase() === m : 1 === d.nodeType)return !1;
                                        f = g = "only" === t && !f && "nextSibling"
                                    }
                                    return !0
                                }
                                if (f = [a ? v.firstChild : v.lastChild], a && y) {
                                    for (u = v[F] || (v[F] = {}), c = u[t] || [], p = c[0] === H && c[1], h = c[0] === H && c[2], d = p && v.childNodes[p]; d = ++p && d && d[g] || (h = p = 0) || f.pop();)if (1 === d.nodeType && ++h && d === e) {
                                        u[t] = [H, p, h];
                                        break
                                    }
                                } else if (y && (c = (e[F] || (e[F] = {}))[t]) && c[0] === H)h = c[1]; else for (; (d = ++p && d && d[g] || (h = p = 0) || f.pop()) && ((s ? d.nodeName.toLowerCase() !== m : 1 !== d.nodeType) || !++h || (y && ((d[F] || (d[F] = {}))[t] = [H, h]), d !== e)););
                                return h -= r, h === i || h % i === 0 && h / i >= 0
                            }
                        }
                    }, PSEUDO: function (t, n) {
                        var r, o = C.pseudos[t] || C.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                        return o[F] ? o(n) : o.length > 1 ? (r = [t, t, "", n], C.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function (t, e) {
                            for (var i, r = o(t, n), a = r.length; a--;)i = tt(t, r[a]), t[i] = !(e[i] = r[a])
                        }) : function (t) {
                            return o(t, 0, r)
                        }) : o
                    }
                },
                pseudos: {
                    not: i(function (t) {
                        var e = [], n = [], r = _(t.replace(lt, "$1"));
                        return r[F] ? i(function (t, e, n, i) {
                            for (var o, a = r(t, null, i, []), s = t.length; s--;)(o = a[s]) && (t[s] = !(e[s] = o))
                        }) : function (t, i, o) {
                            return e[0] = t, r(e, null, o, n), e[0] = null, !n.pop()
                        }
                    }), has: i(function (t) {
                        return function (n) {
                            return e(t, n).length > 0
                        }
                    }), contains: i(function (t) {
                        return t = t.replace(xt, Ct), function (e) {
                            return (e.textContent || e.innerText || S(e)).indexOf(t) > -1
                        }
                    }), lang: i(function (t) {
                        return pt.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(xt, Ct).toLowerCase(), function (e) {
                            var n;
                            do if (n = L ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-"); while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                    }), target: function (e) {
                        var n = t.location && t.location.hash;
                        return n && n.slice(1) === e.id
                    }, root: function (t) {
                        return t === I
                    }, focus: function (t) {
                        return t === $.activeElement && (!$.hasFocus || $.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    }, enabled: function (t) {
                        return t.disabled === !1
                    }, disabled: function (t) {
                        return t.disabled === !0
                    }, checked: function (t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    }, selected: function (t) {
                        return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                    }, empty: function (t) {
                        for (t = t.firstChild; t; t = t.nextSibling)if (t.nodeType < 6)return !1;
                        return !0
                    }, parent: function (t) {
                        return !C.pseudos.empty(t)
                    }, header: function (t) {
                        return vt.test(t.nodeName)
                    }, input: function (t) {
                        return gt.test(t.nodeName)
                    }, button: function (t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    }, text: function (t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    }, first: c(function () {
                        return [0]
                    }), last: c(function (t, e) {
                        return [e - 1]
                    }), eq: c(function (t, e, n) {
                        return [0 > n ? n + e : n]
                    }), even: c(function (t, e) {
                        for (var n = 0; e > n; n += 2)t.push(n);
                        return t
                    }), odd: c(function (t, e) {
                        for (var n = 1; e > n; n += 2)t.push(n);
                        return t
                    }), lt: c(function (t, e, n) {
                        for (var i = 0 > n ? n + e : n; --i >= 0;)t.push(i);
                        return t
                    }), gt: c(function (t, e, n) {
                        for (var i = 0 > n ? n + e : n; ++i < e;)t.push(i);
                        return t
                    })
                }
            }, C.pseudos.nth = C.pseudos.eq;
            for (w in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})C.pseudos[w] = s(w);
            for (w in{submit: !0, reset: !0})C.pseudos[w] = l(w);
            return d.prototype = C.filters = C.pseudos, C.setFilters = new d, D = e.tokenize = function (t, n) {
                var i, r, o, a, s, l, c, u = B[t + " "];
                if (u)return n ? 0 : u.slice(0);
                for (s = t, l = [], c = C.preFilter; s;) {
                    (!i || (r = ct.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push(o = [])), i = !1, (r = ut.exec(s)) && (i = r.shift(), o.push({
                        value: i,
                        type: r[0].replace(lt, " ")
                    }), s = s.slice(i.length));
                    for (a in C.filter)!(r = ft[a].exec(s)) || c[a] && !(r = c[a](r)) || (i = r.shift(),
                        o.push({value: i, type: a, matches: r}), s = s.slice(i.length));
                    if (!i)break
                }
                return n ? s.length : s ? e.error(t) : B(t, l).slice(0)
            }, _ = e.compile = function (t, e) {
                var n, i = [], r = [], o = V[t + " "];
                if (!o) {
                    for (e || (e = D(t)), n = e.length; n--;)o = y(e[n]), o[F] ? i.push(o) : r.push(o);
                    o = V(t, b(r, i)), o.selector = t
                }
                return o
            }, k = e.select = function (t, e, n, i) {
                var r, o, a, s, l, c = "function" == typeof t && t, d = !i && D(t = c.selector || t);
                if (n = n || [], 1 === d.length) {
                    if (o = d[0] = d[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && x.getById && 9 === e.nodeType && L && C.relative[o[1].type]) {
                        if (e = (C.find.ID(a.matches[0].replace(xt, Ct), e) || [])[0], !e)return n;
                        c && (e = e.parentNode), t = t.slice(o.shift().value.length)
                    }
                    for (r = ft.needsContext.test(t) ? 0 : o.length; r-- && (a = o[r], !C.relative[s = a.type]);)if ((l = C.find[s]) && (i = l(a.matches[0].replace(xt, Ct), bt.test(o[0].type) && u(e.parentNode) || e))) {
                        if (o.splice(r, 1), t = i.length && h(o), !t)return J.apply(n, i), n;
                        break
                    }
                }
                return (c || _(t, d))(i, e, !L, n, bt.test(t) && u(e.parentNode) || e), n
            }, x.sortStable = F.split("").sort(U).join("") === F, x.detectDuplicates = !!O, N(), x.sortDetached = r(function (t) {
                return 1 & t.compareDocumentPosition($.createElement("div"))
            }), r(function (t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
            }) || o("type|href|height|width", function (t, e, n) {
                return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }), x.attributes && r(function (t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
            }) || o("value", function (t, e, n) {
                return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
            }), r(function (t) {
                return null == t.getAttribute("disabled")
            }) || o(et, function (t, e, n) {
                var i;
                return n ? void 0 : t[e] === !0 ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            }), e
        }(t);
        rt.find = ct, rt.expr = ct.selectors, rt.expr[":"] = rt.expr.pseudos, rt.unique = ct.uniqueSort, rt.text = ct.getText, rt.isXMLDoc = ct.isXML, rt.contains = ct.contains;
        var ut = rt.expr.match.needsContext, dt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, ht = /^.[^:#\[\.,]*$/;
        rt.filter = function (t, e, n) {
            var i = e[0];
            return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? rt.find.matchesSelector(i, t) ? [i] : [] : rt.find.matches(t, rt.grep(e, function (t) {
                return 1 === t.nodeType
            }))
        }, rt.fn.extend({
            find: function (t) {
                var e, n = [], i = this, r = i.length;
                if ("string" != typeof t)return this.pushStack(rt(t).filter(function () {
                    for (e = 0; r > e; e++)if (rt.contains(i[e], this))return !0
                }));
                for (e = 0; r > e; e++)rt.find(t, i[e], n);
                return n = this.pushStack(r > 1 ? rt.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
            }, filter: function (t) {
                return this.pushStack(i(this, t || [], !1))
            }, not: function (t) {
                return this.pushStack(i(this, t || [], !0))
            }, is: function (t) {
                return !!i(this, "string" == typeof t && ut.test(t) ? rt(t) : t || [], !1).length
            }
        });
        var pt, ft = t.document, gt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, vt = rt.fn.init = function (t, e) {
            var n, i;
            if (!t)return this;
            if ("string" == typeof t) {
                if (n = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : gt.exec(t), !n || !n[1] && e)return !e || e.jquery ? (e || pt).find(t) : this.constructor(e).find(t);
                if (n[1]) {
                    if (e = e instanceof rt ? e[0] : e, rt.merge(this, rt.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : ft, !0)), dt.test(n[1]) && rt.isPlainObject(e))for (n in e)rt.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                    return this
                }
                if (i = ft.getElementById(n[2]), i && i.parentNode) {
                    if (i.id !== n[2])return pt.find(t);
                    this.length = 1, this[0] = i
                }
                return this.context = ft, this.selector = t, this
            }
            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : rt.isFunction(t) ? "undefined" != typeof pt.ready ? pt.ready(t) : t(rt) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), rt.makeArray(t, this))
        };
        vt.prototype = rt.fn, pt = rt(ft);
        var mt = /^(?:parents|prev(?:Until|All))/, yt = {children: !0, contents: !0, next: !0, prev: !0};
        rt.extend({
            dir: function (t, e, n) {
                for (var i = [], r = t[e]; r && 9 !== r.nodeType && (void 0 === n || 1 !== r.nodeType || !rt(r).is(n));)1 === r.nodeType && i.push(r), r = r[e];
                return i
            }, sibling: function (t, e) {
                for (var n = []; t; t = t.nextSibling)1 === t.nodeType && t !== e && n.push(t);
                return n
            }
        }), rt.fn.extend({
            has: function (t) {
                var e, n = rt(t, this), i = n.length;
                return this.filter(function () {
                    for (e = 0; i > e; e++)if (rt.contains(this, n[e]))return !0
                })
            }, closest: function (t, e) {
                for (var n, i = 0, r = this.length, o = [], a = ut.test(t) || "string" != typeof t ? rt(t, e || this.context) : 0; r > i; i++)for (n = this[i]; n && n !== e; n = n.parentNode)if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && rt.find.matchesSelector(n, t))) {
                    o.push(n);
                    break
                }
                return this.pushStack(o.length > 1 ? rt.unique(o) : o)
            }, index: function (t) {
                return t ? "string" == typeof t ? rt.inArray(this[0], rt(t)) : rt.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            }, add: function (t, e) {
                return this.pushStack(rt.unique(rt.merge(this.get(), rt(t, e))))
            }, addBack: function (t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), rt.each({
            parent: function (t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            }, parents: function (t) {
                return rt.dir(t, "parentNode")
            }, parentsUntil: function (t, e, n) {
                return rt.dir(t, "parentNode", n)
            }, next: function (t) {
                return r(t, "nextSibling")
            }, prev: function (t) {
                return r(t, "previousSibling")
            }, nextAll: function (t) {
                return rt.dir(t, "nextSibling")
            }, prevAll: function (t) {
                return rt.dir(t, "previousSibling")
            }, nextUntil: function (t, e, n) {
                return rt.dir(t, "nextSibling", n)
            }, prevUntil: function (t, e, n) {
                return rt.dir(t, "previousSibling", n)
            }, siblings: function (t) {
                return rt.sibling((t.parentNode || {}).firstChild, t)
            }, children: function (t) {
                return rt.sibling(t.firstChild)
            }, contents: function (t) {
                return rt.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : rt.merge([], t.childNodes)
            }
        }, function (t, e) {
            rt.fn[t] = function (n, i) {
                var r = rt.map(this, e, n);
                return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (r = rt.filter(i, r)), this.length > 1 && (yt[t] || (r = rt.unique(r)), mt.test(t) && (r = r.reverse())), this.pushStack(r)
            }
        });
        var bt = /\S+/g, wt = {};
        rt.Callbacks = function (t) {
            t = "string" == typeof t ? wt[t] || o(t) : rt.extend({}, t);
            var e, n, i, r, a, s, l = [], c = !t.once && [], u = function (o) {
                for (n = t.memory && o, i = !0, a = s || 0, s = 0, r = l.length, e = !0; l && r > a; a++)if (l[a].apply(o[0], o[1]) === !1 && t.stopOnFalse) {
                    n = !1;
                    break
                }
                e = !1, l && (c ? c.length && u(c.shift()) : n ? l = [] : d.disable())
            }, d = {
                add: function () {
                    if (l) {
                        var i = l.length;
                        !function o(e) {
                            rt.each(e, function (e, n) {
                                var i = rt.type(n);
                                "function" === i ? t.unique && d.has(n) || l.push(n) : n && n.length && "string" !== i && o(n)
                            })
                        }(arguments), e ? r = l.length : n && (s = i, u(n))
                    }
                    return this
                }, remove: function () {
                    return l && rt.each(arguments, function (t, n) {
                        for (var i; (i = rt.inArray(n, l, i)) > -1;)l.splice(i, 1), e && (r >= i && r--, a >= i && a--)
                    }), this
                }, has: function (t) {
                    return t ? rt.inArray(t, l) > -1 : !(!l || !l.length)
                }, empty: function () {
                    return l = [], r = 0, this
                }, disable: function () {
                    return l = c = n = void 0, this
                }, disabled: function () {
                    return !l
                }, lock: function () {
                    return c = void 0, n || d.disable(), this
                }, locked: function () {
                    return !c
                }, fireWith: function (t, n) {
                    return !l || i && !c || (n = n || [], n = [t, n.slice ? n.slice() : n], e ? c.push(n) : u(n)), this
                }, fire: function () {
                    return d.fireWith(this, arguments), this
                }, fired: function () {
                    return !!i
                }
            };
            return d
        }, rt.extend({
            Deferred: function (t) {
                var e = [["resolve", "done", rt.Callbacks("once memory"), "resolved"], ["reject", "fail", rt.Callbacks("once memory"), "rejected"], ["notify", "progress", rt.Callbacks("memory")]], n = "pending", i = {
                    state: function () {
                        return n
                    }, always: function () {
                        return r.done(arguments).fail(arguments), this
                    }, then: function () {
                        var t = arguments;
                        return rt.Deferred(function (n) {
                            rt.each(e, function (e, o) {
                                var a = rt.isFunction(t[e]) && t[e];
                                r[o[1]](function () {
                                    var t = a && a.apply(this, arguments);
                                    t && rt.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === i ? n.promise() : this, a ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    }, promise: function (t) {
                        return null != t ? rt.extend(t, i) : i
                    }
                }, r = {};
                return i.pipe = i.then, rt.each(e, function (t, o) {
                    var a = o[2], s = o[3];
                    i[o[1]] = a.add, s && a.add(function () {
                        n = s
                    }, e[1 ^ t][2].disable, e[2][2].lock), r[o[0]] = function () {
                        return r[o[0] + "With"](this === r ? i : this, arguments), this
                    }, r[o[0] + "With"] = a.fireWith
                }), i.promise(r), t && t.call(r, r), r
            }, when: function (t) {
                var e, n, i, r = 0, o = Y.call(arguments), a = o.length, s = 1 !== a || t && rt.isFunction(t.promise) ? a : 0, l = 1 === s ? t : rt.Deferred(), c = function (t, n, i) {
                    return function (r) {
                        n[t] = this, i[t] = arguments.length > 1 ? Y.call(arguments) : r, i === e ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
                    }
                };
                if (a > 1)for (e = new Array(a), n = new Array(a), i = new Array(a); a > r; r++)o[r] && rt.isFunction(o[r].promise) ? o[r].promise().done(c(r, i, o)).fail(l.reject).progress(c(r, n, e)) : --s;
                return s || l.resolveWith(i, o), l.promise()
            }
        });
        var xt;
        rt.fn.ready = function (t) {
            return rt.ready.promise().done(t), this
        }, rt.extend({
            isReady: !1, readyWait: 1, holdReady: function (t) {
                t ? rt.readyWait++ : rt.ready(!0)
            }, ready: function (t) {
                if (t === !0 ? !--rt.readyWait : !rt.isReady) {
                    if (!ft.body)return setTimeout(rt.ready);
                    rt.isReady = !0, t !== !0 && --rt.readyWait > 0 || (xt.resolveWith(ft, [rt]), rt.fn.triggerHandler && (rt(ft).triggerHandler("ready"), rt(ft).off("ready")))
                }
            }
        }), rt.ready.promise = function (e) {
            if (!xt)if (xt = rt.Deferred(), "complete" === ft.readyState)setTimeout(rt.ready); else if (ft.addEventListener)ft.addEventListener("DOMContentLoaded", s, !1), t.addEventListener("load", s, !1); else {
                ft.attachEvent("onreadystatechange", s), t.attachEvent("onload", s);
                var n = !1;
                try {
                    n = null == t.frameElement && ft.documentElement
                } catch (i) {
                }
                n && n.doScroll && !function r() {
                    if (!rt.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (t) {
                            return setTimeout(r, 50)
                        }
                        a(), rt.ready()
                    }
                }()
            }
            return xt.promise(e)
        };
        var Ct, St = "undefined";
        for (Ct in rt(nt))break;
        nt.ownLast = "0" !== Ct, nt.inlineBlockNeedsLayout = !1, rt(function () {
            var t, e, n, i;
            n = ft.getElementsByTagName("body")[0], n && n.style && (e = ft.createElement("div"), i = ft.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), typeof e.style.zoom !== St && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", nt.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (n.style.zoom = 1)), n.removeChild(i))
        }), function () {
            var t = ft.createElement("div");
            if (null == nt.deleteExpando) {
                nt.deleteExpando = !0;
                try {
                    delete t.test
                } catch (e) {
                    nt.deleteExpando = !1
                }
            }
            t = null
        }(), rt.acceptData = function (t) {
            var e = rt.noData[(t.nodeName + " ").toLowerCase()], n = +t.nodeType || 1;
            return 1 !== n && 9 !== n ? !1 : !e || e !== !0 && t.getAttribute("classid") === e
        };
        var Tt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Dt = /([A-Z])/g;
        rt.extend({
            cache: {},
            noData: {"applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},
            hasData: function (t) {
                return t = t.nodeType ? rt.cache[t[rt.expando]] : t[rt.expando], !!t && !c(t)
            },
            data: function (t, e, n) {
                return u(t, e, n)
            },
            removeData: function (t, e) {
                return d(t, e)
            },
            _data: function (t, e, n) {
                return u(t, e, n, !0)
            },
            _removeData: function (t, e) {
                return d(t, e, !0)
            }
        }), rt.fn.extend({
            data: function (t, e) {
                var n, i, r, o = this[0], a = o && o.attributes;
                if (void 0 === t) {
                    if (this.length && (r = rt.data(o), 1 === o.nodeType && !rt._data(o, "parsedAttrs"))) {
                        for (n = a.length; n--;)a[n] && (i = a[n].name, 0 === i.indexOf("data-") && (i = rt.camelCase(i.slice(5)), l(o, i, r[i])));
                        rt._data(o, "parsedAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof t ? this.each(function () {
                    rt.data(this, t)
                }) : arguments.length > 1 ? this.each(function () {
                    rt.data(this, t, e)
                }) : o ? l(o, t, rt.data(o, t)) : void 0
            }, removeData: function (t) {
                return this.each(function () {
                    rt.removeData(this, t)
                })
            }
        }), rt.extend({
            queue: function (t, e, n) {
                var i;
                return t ? (e = (e || "fx") + "queue", i = rt._data(t, e), n && (!i || rt.isArray(n) ? i = rt._data(t, e, rt.makeArray(n)) : i.push(n)), i || []) : void 0
            }, dequeue: function (t, e) {
                e = e || "fx";
                var n = rt.queue(t, e), i = n.length, r = n.shift(), o = rt._queueHooks(t, e), a = function () {
                    rt.dequeue(t, e)
                };
                "inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), delete o.stop, r.call(t, a, o)), !i && o && o.empty.fire()
            }, _queueHooks: function (t, e) {
                var n = e + "queueHooks";
                return rt._data(t, n) || rt._data(t, n, {
                        empty: rt.Callbacks("once memory").add(function () {
                            rt._removeData(t, e + "queue"), rt._removeData(t, n)
                        })
                    })
            }
        }), rt.fn.extend({
            queue: function (t, e) {
                var n = 2;
                return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? rt.queue(this[0], t) : void 0 === e ? this : this.each(function () {
                    var n = rt.queue(this, t, e);
                    rt._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && rt.dequeue(this, t)
                })
            }, dequeue: function (t) {
                return this.each(function () {
                    rt.dequeue(this, t)
                })
            }, clearQueue: function (t) {
                return this.queue(t || "fx", [])
            }, promise: function (t, e) {
                var n, i = 1, r = rt.Deferred(), o = this, a = this.length, s = function () {
                    --i || r.resolveWith(o, [o])
                };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;)n = rt._data(o[a], t + "queueHooks"), n && n.empty && (i++, n.empty.add(s));
                return s(), r.promise(e)
            }
        });
        var _t = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, kt = ["Top", "Right", "Bottom", "Left"], Et = function (t, e) {
            return t = e || t, "none" === rt.css(t, "display") || !rt.contains(t.ownerDocument, t)
        }, At = rt.access = function (t, e, n, i, r, o, a) {
            var s = 0, l = t.length, c = null == n;
            if ("object" === rt.type(n)) {
                r = !0;
                for (s in n)rt.access(t, e, s, n[s], !0, o, a)
            } else if (void 0 !== i && (r = !0, rt.isFunction(i) || (a = !0), c && (a ? (e.call(t, i), e = null) : (c = e, e = function (t, e, n) {
                    return c.call(rt(t), n)
                })), e))for (; l > s; s++)e(t[s], n, a ? i : i.call(t[s], s, e(t[s], n)));
            return r ? t : c ? e.call(t) : l ? e(t[0], n) : o
        }, Ot = /^(?:checkbox|radio)$/i;
        !function () {
            var t = ft.createElement("input"), e = ft.createElement("div"), n = ft.createDocumentFragment();
            if (e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", nt.leadingWhitespace = 3 === e.firstChild.nodeType, nt.tbody = !e.getElementsByTagName("tbody").length, nt.htmlSerialize = !!e.getElementsByTagName("link").length, nt.html5Clone = "<:nav></:nav>" !== ft.createElement("nav").cloneNode(!0).outerHTML, t.type = "checkbox", t.checked = !0, n.appendChild(t), nt.appendChecked = t.checked, e.innerHTML = "<textarea>x</textarea>", nt.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, n.appendChild(e), e.innerHTML = "<input type='radio' checked='checked' name='t'/>", nt.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, nt.noCloneEvent = !0, e.attachEvent && (e.attachEvent("onclick", function () {
                    nt.noCloneEvent = !1
                }), e.cloneNode(!0).click()), null == nt.deleteExpando) {
                nt.deleteExpando = !0;
                try {
                    delete e.test
                } catch (i) {
                    nt.deleteExpando = !1
                }
            }
        }(), function () {
            var e, n, i = ft.createElement("div");
            for (e in{
                submit: !0,
                change: !0,
                focusin: !0
            })n = "on" + e, (nt[e + "Bubbles"] = n in t) || (i.setAttribute(n, "t"), nt[e + "Bubbles"] = i.attributes[n].expando === !1);
            i = null
        }();
        var Nt = /^(?:input|select|textarea)$/i, $t = /^key/, It = /^(?:mouse|pointer|contextmenu)|click/, Lt = /^(?:focusinfocus|focusoutblur)$/, Pt = /^([^.]*)(?:\.(.+)|)$/;
        rt.event = {
            global: {},
            add: function (t, e, n, i, r) {
                var o, a, s, l, c, u, d, h, p, f, g, v = rt._data(t);
                if (v) {
                    for (n.handler && (l = n, n = l.handler, r = l.selector), n.guid || (n.guid = rt.guid++), (a = v.events) || (a = v.events = {}), (u = v.handle) || (u = v.handle = function (t) {
                        return typeof rt === St || t && rt.event.triggered === t.type ? void 0 : rt.event.dispatch.apply(u.elem, arguments)
                    }, u.elem = t), e = (e || "").match(bt) || [""], s = e.length; s--;)o = Pt.exec(e[s]) || [], p = g = o[1], f = (o[2] || "").split(".").sort(), p && (c = rt.event.special[p] || {}, p = (r ? c.delegateType : c.bindType) || p, c = rt.event.special[p] || {}, d = rt.extend({
                        type: p,
                        origType: g,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && rt.expr.match.needsContext.test(r),
                        namespace: f.join(".")
                    }, l), (h = a[p]) || (h = a[p] = [], h.delegateCount = 0, c.setup && c.setup.call(t, i, f, u) !== !1 || (t.addEventListener ? t.addEventListener(p, u, !1) : t.attachEvent && t.attachEvent("on" + p, u))), c.add && (c.add.call(t, d), d.handler.guid || (d.handler.guid = n.guid)), r ? h.splice(h.delegateCount++, 0, d) : h.push(d), rt.event.global[p] = !0);
                    t = null
                }
            },
            remove: function (t, e, n, i, r) {
                var o, a, s, l, c, u, d, h, p, f, g, v = rt.hasData(t) && rt._data(t);
                if (v && (u = v.events)) {
                    for (e = (e || "").match(bt) || [""], c = e.length; c--;)if (s = Pt.exec(e[c]) || [], p = g = s[1], f = (s[2] || "").split(".").sort(), p) {
                        for (d = rt.event.special[p] || {}, p = (i ? d.delegateType : d.bindType) || p, h = u[p] || [], s = s[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = h.length; o--;)a = h[o], !r && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) || (h.splice(o, 1), a.selector && h.delegateCount--, d.remove && d.remove.call(t, a));
                        l && !h.length && (d.teardown && d.teardown.call(t, f, v.handle) !== !1 || rt.removeEvent(t, p, v.handle), delete u[p])
                    } else for (p in u)rt.event.remove(t, p + e[c], n, i, !0);
                    rt.isEmptyObject(u) && (delete v.handle, rt._removeData(t, "events"))
                }
            },
            trigger: function (e, n, i, r) {
                var o, a, s, l, c, u, d, h = [i || ft], p = et.call(e, "type") ? e.type : e, f = et.call(e, "namespace") ? e.namespace.split(".") : [];
                if (s = u = i = i || ft, 3 !== i.nodeType && 8 !== i.nodeType && !Lt.test(p + rt.event.triggered) && (p.indexOf(".") >= 0 && (f = p.split("."), p = f.shift(), f.sort()), a = p.indexOf(":") < 0 && "on" + p, e = e[rt.expando] ? e : new rt.Event(p, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = f.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : rt.makeArray(n, [e]), c = rt.event.special[p] || {}, r || !c.trigger || c.trigger.apply(i, n) !== !1)) {
                    if (!r && !c.noBubble && !rt.isWindow(i)) {
                        for (l = c.delegateType || p, Lt.test(l + p) || (s = s.parentNode); s; s = s.parentNode)h.push(s), u = s;
                        u === (i.ownerDocument || ft) && h.push(u.defaultView || u.parentWindow || t)
                    }
                    for (d = 0; (s = h[d++]) && !e.isPropagationStopped();)e.type = d > 1 ? l : c.bindType || p, o = (rt._data(s, "events") || {})[e.type] && rt._data(s, "handle"), o && o.apply(s, n), o = a && s[a], o && o.apply && rt.acceptData(s) && (e.result = o.apply(s, n), e.result === !1 && e.preventDefault());
                    if (e.type = p, !r && !e.isDefaultPrevented() && (!c._default || c._default.apply(h.pop(), n) === !1) && rt.acceptData(i) && a && i[p] && !rt.isWindow(i)) {
                        u = i[a], u && (i[a] = null), rt.event.triggered = p;
                        try {
                            i[p]()
                        } catch (g) {
                        }
                        rt.event.triggered = void 0, u && (i[a] = u)
                    }
                    return e.result
                }
            },
            dispatch: function (t) {
                t = rt.event.fix(t);
                var e, n, i, r, o, a = [], s = Y.call(arguments), l = (rt._data(this, "events") || {})[t.type] || [], c = rt.event.special[t.type] || {};
                if (s[0] = t, t.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, t) !== !1) {
                    for (a = rt.event.handlers.call(this, t, l), e = 0; (r = a[e++]) && !t.isPropagationStopped();)for (t.currentTarget = r.elem, o = 0; (i = r.handlers[o++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(i.namespace)) && (t.handleObj = i, t.data = i.data, n = ((rt.event.special[i.origType] || {}).handle || i.handler).apply(r.elem, s), void 0 !== n && (t.result = n) === !1 && (t.preventDefault(), t.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, t), t.result
                }
            },
            handlers: function (t, e) {
                var n, i, r, o, a = [], s = e.delegateCount, l = t.target;
                if (s && l.nodeType && (!t.button || "click" !== t.type))for (; l != this; l = l.parentNode || this)if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                    for (r = [], o = 0; s > o; o++)i = e[o], n = i.selector + " ", void 0 === r[n] && (r[n] = i.needsContext ? rt(n, this).index(l) >= 0 : rt.find(n, this, null, [l]).length), r[n] && r.push(i);
                    r.length && a.push({elem: l, handlers: r})
                }
                return s < e.length && a.push({elem: this, handlers: e.slice(s)}), a
            },
            fix: function (t) {
                if (t[rt.expando])return t;
                var e, n, i, r = t.type, o = t, a = this.fixHooks[r];
                for (a || (this.fixHooks[r] = a = It.test(r) ? this.mouseHooks : $t.test(r) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, t = new rt.Event(o), e = i.length; e--;)n = i[e], t[n] = o[n];
                return t.target || (t.target = o.srcElement || ft), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, a.filter ? a.filter(t, o) : t
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "), filter: function (t, e) {
                    return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function (t, e) {
                    var n, i, r, o = e.button, a = e.fromElement;
                    return null == t.pageX && null != e.clientX && (i = t.target.ownerDocument || ft, r = i.documentElement, n = i.body, t.pageX = e.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), t.pageY = e.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)), !t.relatedTarget && a && (t.relatedTarget = a === t.target ? e.toElement : a), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
                }
            },
            special: {
                load: {noBubble: !0}, focus: {
                    trigger: function () {
                        if (this !== f() && this.focus)try {
                            return this.focus(), !1
                        } catch (t) {
                        }
                    }, delegateType: "focusin"
                }, blur: {
                    trigger: function () {
                        return this === f() && this.blur ? (this.blur(), !1) : void 0
                    }, delegateType: "focusout"
                }, click: {
                    trigger: function () {
                        return rt.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                    }, _default: function (t) {
                        return rt.nodeName(t.target, "a")
                    }
                }, beforeunload: {
                    postDispatch: function (t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            },
            simulate: function (t, e, n, i) {
                var r = rt.extend(new rt.Event, n, {type: t, isSimulated: !0, originalEvent: {}});
                i ? rt.event.trigger(r, null, e) : rt.event.dispatch.call(e, r), r.isDefaultPrevented() && n.preventDefault()
            }
        }, rt.removeEvent = ft.removeEventListener ? function (t, e, n) {
            t.removeEventListener && t.removeEventListener(e, n, !1)
        } : function (t, e, n) {
            var i = "on" + e;
            t.detachEvent && (typeof t[i] === St && (t[i] = null), t.detachEvent(i, n))
        }, rt.Event = function (t, e) {
            return this instanceof rt.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? h : p) : this.type = t, e && rt.extend(this, e), this.timeStamp = t && t.timeStamp || rt.now(), void(this[rt.expando] = !0)) : new rt.Event(t, e)
        }, rt.Event.prototype = {
            isDefaultPrevented: p,
            isPropagationStopped: p,
            isImmediatePropagationStopped: p,
            preventDefault: function () {
                var t = this.originalEvent;
                this.isDefaultPrevented = h, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
            },
            stopPropagation: function () {
                var t = this.originalEvent;
                this.isPropagationStopped = h, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
            },
            stopImmediatePropagation: function () {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = h, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, rt.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function (t, e) {
            rt.event.special[t] = {
                delegateType: e, bindType: e, handle: function (t) {
                    var n, i = this, r = t.relatedTarget, o = t.handleObj;
                    return (!r || r !== i && !rt.contains(i, r)) && (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n
                }
            }
        }), nt.submitBubbles || (rt.event.special.submit = {
            setup: function () {
                return rt.nodeName(this, "form") ? !1 : void rt.event.add(this, "click._submit keypress._submit", function (t) {
                    var e = t.target, n = rt.nodeName(e, "input") || rt.nodeName(e, "button") ? e.form : void 0;
                    n && !rt._data(n, "submitBubbles") && (rt.event.add(n, "submit._submit", function (t) {
                        t._submit_bubble = !0
                    }), rt._data(n, "submitBubbles", !0))
                })
            }, postDispatch: function (t) {
                t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && rt.event.simulate("submit", this.parentNode, t, !0))
            }, teardown: function () {
                return rt.nodeName(this, "form") ? !1 : void rt.event.remove(this, "._submit")
            }
        }), nt.changeBubbles || (rt.event.special.change = {
            setup: function () {
                return Nt.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (rt.event.add(this, "propertychange._change", function (t) {
                    "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
                }), rt.event.add(this, "click._change", function (t) {
                    this._just_changed && !t.isTrigger && (this._just_changed = !1), rt.event.simulate("change", this, t, !0)
                })), !1) : void rt.event.add(this, "beforeactivate._change", function (t) {
                    var e = t.target;
                    Nt.test(e.nodeName) && !rt._data(e, "changeBubbles") && (rt.event.add(e, "change._change", function (t) {
                        !this.parentNode || t.isSimulated || t.isTrigger || rt.event.simulate("change", this.parentNode, t, !0)
                    }), rt._data(e, "changeBubbles", !0))
                })
            }, handle: function (t) {
                var e = t.target;
                return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
            }, teardown: function () {
                return rt.event.remove(this, "._change"), !Nt.test(this.nodeName)
            }
        }), nt.focusinBubbles || rt.each({focus: "focusin", blur: "focusout"}, function (t, e) {
            var n = function (t) {
                rt.event.simulate(e, t.target, rt.event.fix(t), !0)
            };
            rt.event.special[e] = {
                setup: function () {
                    var i = this.ownerDocument || this, r = rt._data(i, e);
                    r || i.addEventListener(t, n, !0), rt._data(i, e, (r || 0) + 1)
                }, teardown: function () {
                    var i = this.ownerDocument || this, r = rt._data(i, e) - 1;
                    r ? rt._data(i, e, r) : (i.removeEventListener(t, n, !0), rt._removeData(i, e))
                }
            }
        }), rt.fn.extend({
            on: function (t, e, n, i, r) {
                var o, a;
                if ("object" == typeof t) {
                    "string" != typeof e && (n = n || e, e = void 0);
                    for (o in t)this.on(o, e, n, t[o], r);
                    return this
                }
                if (null == n && null == i ? (i = e, n = e = void 0) : null == i && ("string" == typeof e ? (i = n, n = void 0) : (i = n, n = e, e = void 0)), i === !1)i = p; else if (!i)return this;
                return 1 === r && (a = i, i = function (t) {
                    return rt().off(t), a.apply(this, arguments)
                }, i.guid = a.guid || (a.guid = rt.guid++)), this.each(function () {
                    rt.event.add(this, t, i, n, e)
                })
            }, one: function (t, e, n, i) {
                return this.on(t, e, n, i, 1)
            }, off: function (t, e, n) {
                var i, r;
                if (t && t.preventDefault && t.handleObj)return i = t.handleObj, rt(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof t) {
                    for (r in t)this.off(r, e, t[r]);
                    return this
                }
                return (e === !1 || "function" == typeof e) && (n = e, e = void 0), n === !1 && (n = p), this.each(function () {
                    rt.event.remove(this, t, n, e)
                })
            }, trigger: function (t, e) {
                return this.each(function () {
                    rt.event.trigger(t, e, this)
                })
            }, triggerHandler: function (t, e) {
                var n = this[0];
                return n ? rt.event.trigger(t, e, n, !0) : void 0
            }
        });
        var jt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", Mt = / jQuery\d+="(?:null|\d+)"/g, Rt = new RegExp("<(?:" + jt + ")[\\s/>]", "i"), Ft = /^\s+/, qt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Ht = /<([\w:]+)/, Wt = /<tbody/i, zt = /<|&#?\w+;/, Bt = /<(?:script|style|link)/i, Vt = /checked\s*(?:[^=]|=\s*.checked.)/i, Ut = /^$|\/(?:java|ecma)script/i, Qt = /^true\/(.*)/, Xt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Yt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: nt.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        }, Kt = g(ft), Gt = Kt.appendChild(ft.createElement("div"));
        Yt.optgroup = Yt.option, Yt.tbody = Yt.tfoot = Yt.colgroup = Yt.caption = Yt.thead, Yt.th = Yt.td, rt.extend({
            clone: function (t, e, n) {
                var i, r, o, a, s, l = rt.contains(t.ownerDocument, t);
                if (nt.html5Clone || rt.isXMLDoc(t) || !Rt.test("<" + t.nodeName + ">") ? o = t.cloneNode(!0) : (Gt.innerHTML = t.outerHTML, Gt.removeChild(o = Gt.firstChild)), !(nt.noCloneEvent && nt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || rt.isXMLDoc(t)))for (i = v(o), s = v(t), a = 0; null != (r = s[a]); ++a)i[a] && S(r, i[a]);
                if (e)if (n)for (s = s || v(t), i = i || v(o), a = 0; null != (r = s[a]); a++)C(r, i[a]); else C(t, o);
                return i = v(o, "script"), i.length > 0 && x(i, !l && v(t, "script")), i = s = r = null, o
            }, buildFragment: function (t, e, n, i) {
                for (var r, o, a, s, l, c, u, d = t.length, h = g(e), p = [], f = 0; d > f; f++)if (o = t[f], o || 0 === o)if ("object" === rt.type(o))rt.merge(p, o.nodeType ? [o] : o); else if (zt.test(o)) {
                    for (s = s || h.appendChild(e.createElement("div")), l = (Ht.exec(o) || ["", ""])[1].toLowerCase(), u = Yt[l] || Yt._default, s.innerHTML = u[1] + o.replace(qt, "<$1></$2>") + u[2], r = u[0]; r--;)s = s.lastChild;
                    if (!nt.leadingWhitespace && Ft.test(o) && p.push(e.createTextNode(Ft.exec(o)[0])), !nt.tbody)for (o = "table" !== l || Wt.test(o) ? "<table>" !== u[1] || Wt.test(o) ? 0 : s : s.firstChild, r = o && o.childNodes.length; r--;)rt.nodeName(c = o.childNodes[r], "tbody") && !c.childNodes.length && o.removeChild(c);
                    for (rt.merge(p, s.childNodes), s.textContent = ""; s.firstChild;)s.removeChild(s.firstChild);
                    s = h.lastChild
                } else p.push(e.createTextNode(o));
                for (s && h.removeChild(s), nt.appendChecked || rt.grep(v(p, "input"), m), f = 0; o = p[f++];)if ((!i || -1 === rt.inArray(o, i)) && (a = rt.contains(o.ownerDocument, o), s = v(h.appendChild(o), "script"), a && x(s), n))for (r = 0; o = s[r++];)Ut.test(o.type || "") && n.push(o);
                return s = null, h
            }, cleanData: function (t, e) {
                for (var n, i, r, o, a = 0, s = rt.expando, l = rt.cache, c = nt.deleteExpando, u = rt.event.special; null != (n = t[a]); a++)if ((e || rt.acceptData(n)) && (r = n[s], o = r && l[r])) {
                    if (o.events)for (i in o.events)u[i] ? rt.event.remove(n, i) : rt.removeEvent(n, i, o.handle);
                    l[r] && (delete l[r], c ? delete n[s] : typeof n.removeAttribute !== St ? n.removeAttribute(s) : n[s] = null, X.push(r))
                }
            }
        }), rt.fn.extend({
            text: function (t) {
                return At(this, function (t) {
                    return void 0 === t ? rt.text(this) : this.empty().append((this[0] && this[0].ownerDocument || ft).createTextNode(t))
                }, null, t, arguments.length)
            }, append: function () {
                return this.domManip(arguments, function (t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = y(this, t);
                        e.appendChild(t)
                    }
                })
            }, prepend: function () {
                return this.domManip(arguments, function (t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = y(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            }, before: function () {
                return this.domManip(arguments, function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            }, after: function () {
                return this.domManip(arguments, function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            }, remove: function (t, e) {
                for (var n, i = t ? rt.filter(t, this) : this, r = 0; null != (n = i[r]); r++)e || 1 !== n.nodeType || rt.cleanData(v(n)), n.parentNode && (e && rt.contains(n.ownerDocument, n) && x(v(n, "script")), n.parentNode.removeChild(n));
                return this
            }, empty: function () {
                for (var t, e = 0; null != (t = this[e]); e++) {
                    for (1 === t.nodeType && rt.cleanData(v(t, !1)); t.firstChild;)t.removeChild(t.firstChild);
                    t.options && rt.nodeName(t, "select") && (t.options.length = 0)
                }
                return this
            }, clone: function (t, e) {
                return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function () {
                    return rt.clone(this, t, e)
                })
            }, html: function (t) {
                return At(this, function (t) {
                    var e = this[0] || {}, n = 0, i = this.length;
                    if (void 0 === t)return 1 === e.nodeType ? e.innerHTML.replace(Mt, "") : void 0;
                    if (!("string" != typeof t || Bt.test(t) || !nt.htmlSerialize && Rt.test(t) || !nt.leadingWhitespace && Ft.test(t) || Yt[(Ht.exec(t) || ["", ""])[1].toLowerCase()])) {
                        t = t.replace(qt, "<$1></$2>");
                        try {
                            for (; i > n; n++)e = this[n] || {}, 1 === e.nodeType && (rt.cleanData(v(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (r) {
                        }
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            }, replaceWith: function () {
                var t = arguments[0];
                return this.domManip(arguments, function (e) {
                    t = this.parentNode, rt.cleanData(v(this)), t && t.replaceChild(e, this)
                }), t && (t.length || t.nodeType) ? this : this.remove()
            }, detach: function (t) {
                return this.remove(t, !0)
            }, domManip: function (t, e) {
                t = K.apply([], t);
                var n, i, r, o, a, s, l = 0, c = this.length, u = this, d = c - 1, h = t[0], p = rt.isFunction(h);
                if (p || c > 1 && "string" == typeof h && !nt.checkClone && Vt.test(h))return this.each(function (n) {
                    var i = u.eq(n);
                    p && (t[0] = h.call(this, n, i.html())), i.domManip(t, e)
                });
                if (c && (s = rt.buildFragment(t, this[0].ownerDocument, !1, this), n = s.firstChild, 1 === s.childNodes.length && (s = n), n)) {
                    for (o = rt.map(v(s, "script"), b), r = o.length; c > l; l++)i = s, l !== d && (i = rt.clone(i, !0, !0), r && rt.merge(o, v(i, "script"))), e.call(this[l], i, l);
                    if (r)for (a = o[o.length - 1].ownerDocument, rt.map(o, w), l = 0; r > l; l++)i = o[l], Ut.test(i.type || "") && !rt._data(i, "globalEval") && rt.contains(a, i) && (i.src ? rt._evalUrl && rt._evalUrl(i.src) : rt.globalEval((i.text || i.textContent || i.innerHTML || "").replace(Xt, "")));
                    s = n = null
                }
                return this
            }
        }), rt.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (t, e) {
            rt.fn[t] = function (t) {
                for (var n, i = 0, r = [], o = rt(t), a = o.length - 1; a >= i; i++)n = i === a ? this : this.clone(!0), rt(o[i])[e](n), G.apply(r, n.get());
                return this.pushStack(r)
            }
        });
        var Jt, Zt = {};
        !function () {
            var t;
            nt.shrinkWrapBlocks = function () {
                if (null != t)return t;
                t = !1;
                var e, n, i;
                return n = ft.getElementsByTagName("body")[0], n && n.style ? (e = ft.createElement("div"), i = ft.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), typeof e.style.zoom !== St && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(ft.createElement("div")).style.width = "5px", t = 3 !== e.offsetWidth), n.removeChild(i), t) : void 0
            }
        }();
        var te, ee, ne = /^margin/, ie = new RegExp("^(" + _t + ")(?!px)[a-z%]+$", "i"), re = /^(top|right|bottom|left)$/;
        t.getComputedStyle ? (te = function (e) {
            return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : t.getComputedStyle(e, null)
        }, ee = function (t, e, n) {
            var i, r, o, a, s = t.style;
            return n = n || te(t), a = n ? n.getPropertyValue(e) || n[e] : void 0, n && ("" !== a || rt.contains(t.ownerDocument, t) || (a = rt.style(t, e)), ie.test(a) && ne.test(e) && (i = s.width, r = s.minWidth,
                o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = r, s.maxWidth = o)), void 0 === a ? a : a + ""
        }) : ft.documentElement.currentStyle && (te = function (t) {
            return t.currentStyle
        }, ee = function (t, e, n) {
            var i, r, o, a, s = t.style;
            return n = n || te(t), a = n ? n[e] : void 0, null == a && s && s[e] && (a = s[e]), ie.test(a) && !re.test(e) && (i = s.left, r = t.runtimeStyle, o = r && r.left, o && (r.left = t.currentStyle.left), s.left = "fontSize" === e ? "1em" : a, a = s.pixelLeft + "px", s.left = i, o && (r.left = o)), void 0 === a ? a : a + "" || "auto"
        }), !function () {
            function e() {
                var e, n, i, r;
                n = ft.getElementsByTagName("body")[0], n && n.style && (e = ft.createElement("div"), i = ft.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o = a = !1, l = !0, t.getComputedStyle && (o = "1%" !== (t.getComputedStyle(e, null) || {}).top, a = "4px" === (t.getComputedStyle(e, null) || {width: "4px"}).width, r = e.appendChild(ft.createElement("div")), r.style.cssText = e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", r.style.marginRight = r.style.width = "0", e.style.width = "1px", l = !parseFloat((t.getComputedStyle(r, null) || {}).marginRight), e.removeChild(r)), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", r = e.getElementsByTagName("td"), r[0].style.cssText = "margin:0;border:0;padding:0;display:none", s = 0 === r[0].offsetHeight, s && (r[0].style.display = "", r[1].style.display = "none", s = 0 === r[0].offsetHeight), n.removeChild(i))
            }

            var n, i, r, o, a, s, l;
            n = ft.createElement("div"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r = n.getElementsByTagName("a")[0], (i = r && r.style) && (i.cssText = "float:left;opacity:.5", nt.opacity = "0.5" === i.opacity, nt.cssFloat = !!i.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", nt.clearCloneStyle = "content-box" === n.style.backgroundClip, nt.boxSizing = "" === i.boxSizing || "" === i.MozBoxSizing || "" === i.WebkitBoxSizing, rt.extend(nt, {
                reliableHiddenOffsets: function () {
                    return null == s && e(), s
                }, boxSizingReliable: function () {
                    return null == a && e(), a
                }, pixelPosition: function () {
                    return null == o && e(), o
                }, reliableMarginRight: function () {
                    return null == l && e(), l
                }
            }))
        }(), rt.swap = function (t, e, n, i) {
            var r, o, a = {};
            for (o in e)a[o] = t.style[o], t.style[o] = e[o];
            r = n.apply(t, i || []);
            for (o in e)t.style[o] = a[o];
            return r
        };
        var oe = /alpha\([^)]*\)/i, ae = /opacity\s*=\s*([^)]*)/, se = /^(none|table(?!-c[ea]).+)/, le = new RegExp("^(" + _t + ")(.*)$", "i"), ce = new RegExp("^([+-])=(" + _t + ")", "i"), ue = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, de = {letterSpacing: "0", fontWeight: "400"}, he = ["Webkit", "O", "Moz", "ms"];
        rt.extend({
            cssHooks: {
                opacity: {
                    get: function (t, e) {
                        if (e) {
                            var n = ee(t, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {"float": nt.cssFloat ? "cssFloat" : "styleFloat"},
            style: function (t, e, n, i) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var r, o, a, s = rt.camelCase(e), l = t.style;
                    if (e = rt.cssProps[s] || (rt.cssProps[s] = k(l, s)), a = rt.cssHooks[e] || rt.cssHooks[s], void 0 === n)return a && "get"in a && void 0 !== (r = a.get(t, !1, i)) ? r : l[e];
                    if (o = typeof n, "string" === o && (r = ce.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(rt.css(t, e)), o = "number"), null != n && n === n && ("number" !== o || rt.cssNumber[s] || (n += "px"), nt.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(a && "set"in a && void 0 === (n = a.set(t, n, i)))))try {
                        l[e] = n
                    } catch (c) {
                    }
                }
            },
            css: function (t, e, n, i) {
                var r, o, a, s = rt.camelCase(e);
                return e = rt.cssProps[s] || (rt.cssProps[s] = k(t.style, s)), a = rt.cssHooks[e] || rt.cssHooks[s], a && "get"in a && (o = a.get(t, !0, n)), void 0 === o && (o = ee(t, e, i)), "normal" === o && e in de && (o = de[e]), "" === n || n ? (r = parseFloat(o), n === !0 || rt.isNumeric(r) ? r || 0 : o) : o
            }
        }), rt.each(["height", "width"], function (t, e) {
            rt.cssHooks[e] = {
                get: function (t, n, i) {
                    return n ? se.test(rt.css(t, "display")) && 0 === t.offsetWidth ? rt.swap(t, ue, function () {
                        return N(t, e, i)
                    }) : N(t, e, i) : void 0
                }, set: function (t, n, i) {
                    var r = i && te(t);
                    return A(t, n, i ? O(t, e, i, nt.boxSizing && "border-box" === rt.css(t, "boxSizing", !1, r), r) : 0)
                }
            }
        }), nt.opacity || (rt.cssHooks.opacity = {
            get: function (t, e) {
                return ae.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
            }, set: function (t, e) {
                var n = t.style, i = t.currentStyle, r = rt.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "", o = i && i.filter || n.filter || "";
                n.zoom = 1, (e >= 1 || "" === e) && "" === rt.trim(o.replace(oe, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === e || i && !i.filter) || (n.filter = oe.test(o) ? o.replace(oe, r) : o + " " + r)
            }
        }), rt.cssHooks.marginRight = _(nt.reliableMarginRight, function (t, e) {
            return e ? rt.swap(t, {display: "inline-block"}, ee, [t, "marginRight"]) : void 0
        }), rt.each({margin: "", padding: "", border: "Width"}, function (t, e) {
            rt.cssHooks[t + e] = {
                expand: function (n) {
                    for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++)r[t + kt[i] + e] = o[i] || o[i - 2] || o[0];
                    return r
                }
            }, ne.test(t) || (rt.cssHooks[t + e].set = A)
        }), rt.fn.extend({
            css: function (t, e) {
                return At(this, function (t, e, n) {
                    var i, r, o = {}, a = 0;
                    if (rt.isArray(e)) {
                        for (i = te(t), r = e.length; r > a; a++)o[e[a]] = rt.css(t, e[a], !1, i);
                        return o
                    }
                    return void 0 !== n ? rt.style(t, e, n) : rt.css(t, e)
                }, t, e, arguments.length > 1)
            }, show: function () {
                return E(this, !0)
            }, hide: function () {
                return E(this)
            }, toggle: function (t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                    Et(this) ? rt(this).show() : rt(this).hide()
                })
            }
        }), rt.Tween = $, $.prototype = {
            constructor: $, init: function (t, e, n, i, r, o) {
                this.elem = t, this.prop = n, this.easing = r || "swing", this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = o || (rt.cssNumber[n] ? "" : "px")
            }, cur: function () {
                var t = $.propHooks[this.prop];
                return t && t.get ? t.get(this) : $.propHooks._default.get(this)
            }, run: function (t) {
                var e, n = $.propHooks[this.prop];
                return this.pos = e = this.options.duration ? rt.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : $.propHooks._default.set(this), this
            }
        }, $.prototype.init.prototype = $.prototype, $.propHooks = {
            _default: {
                get: function (t) {
                    var e;
                    return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = rt.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
                }, set: function (t) {
                    rt.fx.step[t.prop] ? rt.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[rt.cssProps[t.prop]] || rt.cssHooks[t.prop]) ? rt.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
                }
            }
        }, $.propHooks.scrollTop = $.propHooks.scrollLeft = {
            set: function (t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, rt.easing = {
            linear: function (t) {
                return t
            }, swing: function (t) {
                return .5 - Math.cos(t * Math.PI) / 2
            }
        }, rt.fx = $.prototype.init, rt.fx.step = {};
        var pe, fe, ge = /^(?:toggle|show|hide)$/, ve = new RegExp("^(?:([+-])=|)(" + _t + ")([a-z%]*)$", "i"), me = /queueHooks$/, ye = [j], be = {
            "*": [function (t, e) {
                var n = this.createTween(t, e), i = n.cur(), r = ve.exec(e), o = r && r[3] || (rt.cssNumber[t] ? "" : "px"), a = (rt.cssNumber[t] || "px" !== o && +i) && ve.exec(rt.css(n.elem, t)), s = 1, l = 20;
                if (a && a[3] !== o) {
                    o = o || a[3], r = r || [], a = +i || 1;
                    do s = s || ".5", a /= s, rt.style(n.elem, t, a + o); while (s !== (s = n.cur() / i) && 1 !== s && --l)
                }
                return r && (a = n.start = +a || +i || 0, n.unit = o, n.end = r[1] ? a + (r[1] + 1) * r[2] : +r[2]), n
            }]
        };
        rt.Animation = rt.extend(R, {
            tweener: function (t, e) {
                rt.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
                for (var n, i = 0, r = t.length; r > i; i++)n = t[i], be[n] = be[n] || [], be[n].unshift(e)
            }, prefilter: function (t, e) {
                e ? ye.unshift(t) : ye.push(t)
            }
        }), rt.speed = function (t, e, n) {
            var i = t && "object" == typeof t ? rt.extend({}, t) : {
                complete: n || !n && e || rt.isFunction(t) && t,
                duration: t,
                easing: n && e || e && !rt.isFunction(e) && e
            };
            return i.duration = rt.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in rt.fx.speeds ? rt.fx.speeds[i.duration] : rt.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function () {
                rt.isFunction(i.old) && i.old.call(this), i.queue && rt.dequeue(this, i.queue)
            }, i
        }, rt.fn.extend({
            fadeTo: function (t, e, n, i) {
                return this.filter(Et).css("opacity", 0).show().end().animate({opacity: e}, t, n, i)
            }, animate: function (t, e, n, i) {
                var r = rt.isEmptyObject(t), o = rt.speed(e, n, i), a = function () {
                    var e = R(this, rt.extend({}, t), o);
                    (r || rt._data(this, "finish")) && e.stop(!0)
                };
                return a.finish = a, r || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
            }, stop: function (t, e, n) {
                var i = function (t) {
                    var e = t.stop;
                    delete t.stop, e(n)
                };
                return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function () {
                    var e = !0, r = null != t && t + "queueHooks", o = rt.timers, a = rt._data(this);
                    if (r)a[r] && a[r].stop && i(a[r]); else for (r in a)a[r] && a[r].stop && me.test(r) && i(a[r]);
                    for (r = o.length; r--;)o[r].elem !== this || null != t && o[r].queue !== t || (o[r].anim.stop(n), e = !1, o.splice(r, 1));
                    (e || !n) && rt.dequeue(this, t)
                })
            }, finish: function (t) {
                return t !== !1 && (t = t || "fx"), this.each(function () {
                    var e, n = rt._data(this), i = n[t + "queue"], r = n[t + "queueHooks"], o = rt.timers, a = i ? i.length : 0;
                    for (n.finish = !0, rt.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--;)o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                    for (e = 0; a > e; e++)i[e] && i[e].finish && i[e].finish.call(this);
                    delete n.finish
                })
            }
        }), rt.each(["toggle", "show", "hide"], function (t, e) {
            var n = rt.fn[e];
            rt.fn[e] = function (t, i, r) {
                return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(L(e, !0), t, i, r)
            }
        }), rt.each({
            slideDown: L("show"),
            slideUp: L("hide"),
            slideToggle: L("toggle"),
            fadeIn: {opacity: "show"},
            fadeOut: {opacity: "hide"},
            fadeToggle: {opacity: "toggle"}
        }, function (t, e) {
            rt.fn[t] = function (t, n, i) {
                return this.animate(e, t, n, i)
            }
        }), rt.timers = [], rt.fx.tick = function () {
            var t, e = rt.timers, n = 0;
            for (pe = rt.now(); n < e.length; n++)t = e[n], t() || e[n] !== t || e.splice(n--, 1);
            e.length || rt.fx.stop(), pe = void 0
        }, rt.fx.timer = function (t) {
            rt.timers.push(t), t() ? rt.fx.start() : rt.timers.pop()
        }, rt.fx.interval = 13, rt.fx.start = function () {
            fe || (fe = setInterval(rt.fx.tick, rt.fx.interval))
        }, rt.fx.stop = function () {
            clearInterval(fe), fe = null
        }, rt.fx.speeds = {slow: 600, fast: 200, _default: 400}, rt.fn.delay = function (t, e) {
            return t = rt.fx ? rt.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function (e, n) {
                var i = setTimeout(e, t);
                n.stop = function () {
                    clearTimeout(i)
                }
            })
        }, function () {
            var t, e, n, i, r;
            e = ft.createElement("div"), e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = e.getElementsByTagName("a")[0], n = ft.createElement("select"), r = n.appendChild(ft.createElement("option")), t = e.getElementsByTagName("input")[0], i.style.cssText = "top:1px", nt.getSetAttribute = "t" !== e.className, nt.style = /top/.test(i.getAttribute("style")), nt.hrefNormalized = "/a" === i.getAttribute("href"), nt.checkOn = !!t.value, nt.optSelected = r.selected, nt.enctype = !!ft.createElement("form").enctype, n.disabled = !0, nt.optDisabled = !r.disabled, t = ft.createElement("input"), t.setAttribute("value", ""), nt.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), nt.radioValue = "t" === t.value
        }();
        var we = /\r/g;
        rt.fn.extend({
            val: function (t) {
                var e, n, i, r = this[0];
                return arguments.length ? (i = rt.isFunction(t), this.each(function (n) {
                    var r;
                    1 === this.nodeType && (r = i ? t.call(this, n, rt(this).val()) : t, null == r ? r = "" : "number" == typeof r ? r += "" : rt.isArray(r) && (r = rt.map(r, function (t) {
                        return null == t ? "" : t + ""
                    })), e = rt.valHooks[this.type] || rt.valHooks[this.nodeName.toLowerCase()], e && "set"in e && void 0 !== e.set(this, r, "value") || (this.value = r))
                })) : r ? (e = rt.valHooks[r.type] || rt.valHooks[r.nodeName.toLowerCase()], e && "get"in e && void 0 !== (n = e.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(we, "") : null == n ? "" : n)) : void 0
            }
        }), rt.extend({
            valHooks: {
                option: {
                    get: function (t) {
                        var e = rt.find.attr(t, "value");
                        return null != e ? e : rt.trim(rt.text(t))
                    }
                }, select: {
                    get: function (t) {
                        for (var e, n, i = t.options, r = t.selectedIndex, o = "select-one" === t.type || 0 > r, a = o ? null : [], s = o ? r + 1 : i.length, l = 0 > r ? s : o ? r : 0; s > l; l++)if (n = i[l], !(!n.selected && l !== r || (nt.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && rt.nodeName(n.parentNode, "optgroup"))) {
                            if (e = rt(n).val(), o)return e;
                            a.push(e)
                        }
                        return a
                    }, set: function (t, e) {
                        for (var n, i, r = t.options, o = rt.makeArray(e), a = r.length; a--;)if (i = r[a], rt.inArray(rt.valHooks.option.get(i), o) >= 0)try {
                            i.selected = n = !0
                        } catch (s) {
                            i.scrollHeight
                        } else i.selected = !1;
                        return n || (t.selectedIndex = -1), r
                    }
                }
            }
        }), rt.each(["radio", "checkbox"], function () {
            rt.valHooks[this] = {
                set: function (t, e) {
                    return rt.isArray(e) ? t.checked = rt.inArray(rt(t).val(), e) >= 0 : void 0
                }
            }, nt.checkOn || (rt.valHooks[this].get = function (t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        });
        var xe, Ce, Se = rt.expr.attrHandle, Te = /^(?:checked|selected)$/i, De = nt.getSetAttribute, _e = nt.input;
        rt.fn.extend({
            attr: function (t, e) {
                return At(this, rt.attr, t, e, arguments.length > 1)
            }, removeAttr: function (t) {
                return this.each(function () {
                    rt.removeAttr(this, t)
                })
            }
        }), rt.extend({
            attr: function (t, e, n) {
                var i, r, o = t.nodeType;
                return t && 3 !== o && 8 !== o && 2 !== o ? typeof t.getAttribute === St ? rt.prop(t, e, n) : (1 === o && rt.isXMLDoc(t) || (e = e.toLowerCase(), i = rt.attrHooks[e] || (rt.expr.match.bool.test(e) ? Ce : xe)), void 0 === n ? i && "get"in i && null !== (r = i.get(t, e)) ? r : (r = rt.find.attr(t, e), null == r ? void 0 : r) : null !== n ? i && "set"in i && void 0 !== (r = i.set(t, n, e)) ? r : (t.setAttribute(e, n + ""), n) : void rt.removeAttr(t, e)) : void 0
            }, removeAttr: function (t, e) {
                var n, i, r = 0, o = e && e.match(bt);
                if (o && 1 === t.nodeType)for (; n = o[r++];)i = rt.propFix[n] || n, rt.expr.match.bool.test(n) ? _e && De || !Te.test(n) ? t[i] = !1 : t[rt.camelCase("default-" + n)] = t[i] = !1 : rt.attr(t, n, ""), t.removeAttribute(De ? n : i)
            }, attrHooks: {
                type: {
                    set: function (t, e) {
                        if (!nt.radioValue && "radio" === e && rt.nodeName(t, "input")) {
                            var n = t.value;
                            return t.setAttribute("type", e), n && (t.value = n), e
                        }
                    }
                }
            }
        }), Ce = {
            set: function (t, e, n) {
                return e === !1 ? rt.removeAttr(t, n) : _e && De || !Te.test(n) ? t.setAttribute(!De && rt.propFix[n] || n, n) : t[rt.camelCase("default-" + n)] = t[n] = !0, n
            }
        }, rt.each(rt.expr.match.bool.source.match(/\w+/g), function (t, e) {
            var n = Se[e] || rt.find.attr;
            Se[e] = _e && De || !Te.test(e) ? function (t, e, i) {
                var r, o;
                return i || (o = Se[e], Se[e] = r, r = null != n(t, e, i) ? e.toLowerCase() : null, Se[e] = o), r
            } : function (t, e, n) {
                return n ? void 0 : t[rt.camelCase("default-" + e)] ? e.toLowerCase() : null
            }
        }), _e && De || (rt.attrHooks.value = {
            set: function (t, e, n) {
                return rt.nodeName(t, "input") ? void(t.defaultValue = e) : xe && xe.set(t, e, n)
            }
        }), De || (xe = {
            set: function (t, e, n) {
                var i = t.getAttributeNode(n);
                return i || t.setAttributeNode(i = t.ownerDocument.createAttribute(n)), i.value = e += "", "value" === n || e === t.getAttribute(n) ? e : void 0
            }
        }, Se.id = Se.name = Se.coords = function (t, e, n) {
            var i;
            return n ? void 0 : (i = t.getAttributeNode(e)) && "" !== i.value ? i.value : null
        }, rt.valHooks.button = {
            get: function (t, e) {
                var n = t.getAttributeNode(e);
                return n && n.specified ? n.value : void 0
            }, set: xe.set
        }, rt.attrHooks.contenteditable = {
            set: function (t, e, n) {
                xe.set(t, "" === e ? !1 : e, n)
            }
        }, rt.each(["width", "height"], function (t, e) {
            rt.attrHooks[e] = {
                set: function (t, n) {
                    return "" === n ? (t.setAttribute(e, "auto"), n) : void 0
                }
            }
        })), nt.style || (rt.attrHooks.style = {
            get: function (t) {
                return t.style.cssText || void 0
            }, set: function (t, e) {
                return t.style.cssText = e + ""
            }
        });
        var ke = /^(?:input|select|textarea|button|object)$/i, Ee = /^(?:a|area)$/i;
        rt.fn.extend({
            prop: function (t, e) {
                return At(this, rt.prop, t, e, arguments.length > 1)
            }, removeProp: function (t) {
                return t = rt.propFix[t] || t, this.each(function () {
                    try {
                        this[t] = void 0, delete this[t]
                    } catch (e) {
                    }
                })
            }
        }), rt.extend({
            propFix: {"for": "htmlFor", "class": "className"}, prop: function (t, e, n) {
                var i, r, o, a = t.nodeType;
                return t && 3 !== a && 8 !== a && 2 !== a ? (o = 1 !== a || !rt.isXMLDoc(t), o && (e = rt.propFix[e] || e, r = rt.propHooks[e]), void 0 !== n ? r && "set"in r && void 0 !== (i = r.set(t, n, e)) ? i : t[e] = n : r && "get"in r && null !== (i = r.get(t, e)) ? i : t[e]) : void 0
            }, propHooks: {
                tabIndex: {
                    get: function (t) {
                        var e = rt.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : ke.test(t.nodeName) || Ee.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            }
        }), nt.hrefNormalized || rt.each(["href", "src"], function (t, e) {
            rt.propHooks[e] = {
                get: function (t) {
                    return t.getAttribute(e, 4)
                }
            }
        }), nt.optSelected || (rt.propHooks.selected = {
            get: function (t) {
                var e = t.parentNode;
                return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
            }
        }), rt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            rt.propFix[this.toLowerCase()] = this
        }), nt.enctype || (rt.propFix.enctype = "encoding");
        var Ae = /[\t\r\n\f]/g;
        rt.fn.extend({
            addClass: function (t) {
                var e, n, i, r, o, a, s = 0, l = this.length, c = "string" == typeof t && t;
                if (rt.isFunction(t))return this.each(function (e) {
                    rt(this).addClass(t.call(this, e, this.className))
                });
                if (c)for (e = (t || "").match(bt) || []; l > s; s++)if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Ae, " ") : " ")) {
                    for (o = 0; r = e[o++];)i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                    a = rt.trim(i), n.className !== a && (n.className = a)
                }
                return this
            }, removeClass: function (t) {
                var e, n, i, r, o, a, s = 0, l = this.length, c = 0 === arguments.length || "string" == typeof t && t;
                if (rt.isFunction(t))return this.each(function (e) {
                    rt(this).removeClass(t.call(this, e, this.className))
                });
                if (c)for (e = (t || "").match(bt) || []; l > s; s++)if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Ae, " ") : "")) {
                    for (o = 0; r = e[o++];)for (; i.indexOf(" " + r + " ") >= 0;)i = i.replace(" " + r + " ", " ");
                    a = t ? rt.trim(i) : "", n.className !== a && (n.className = a)
                }
                return this
            }, toggleClass: function (t, e) {
                var n = typeof t;
                return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : this.each(rt.isFunction(t) ? function (n) {
                    rt(this).toggleClass(t.call(this, n, this.className, e), e)
                } : function () {
                    if ("string" === n)for (var e, i = 0, r = rt(this), o = t.match(bt) || []; e = o[i++];)r.hasClass(e) ? r.removeClass(e) : r.addClass(e); else(n === St || "boolean" === n) && (this.className && rt._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : rt._data(this, "__className__") || "")
                })
            }, hasClass: function (t) {
                for (var e = " " + t + " ", n = 0, i = this.length; i > n; n++)if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Ae, " ").indexOf(e) >= 0)return !0;
                return !1
            }
        }), rt.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (t, e) {
            rt.fn[e] = function (t, n) {
                return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
            }
        }), rt.fn.extend({
            hover: function (t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            }, bind: function (t, e, n) {
                return this.on(t, null, e, n)
            }, unbind: function (t, e) {
                return this.off(t, null, e)
            }, delegate: function (t, e, n, i) {
                return this.on(e, t, n, i)
            }, undelegate: function (t, e, n) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
            }
        });
        var Oe = rt.now(), Ne = /\?/, $e = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        rt.parseJSON = function (e) {
            if (t.JSON && t.JSON.parse)return t.JSON.parse(e + "");
            var n, i = null, r = rt.trim(e + "");
            return r && !rt.trim(r.replace($e, function (t, e, r, o) {
                return n && e && (i = 0), 0 === i ? t : (n = r || e, i += !o - !r, "")
            })) ? Function("return " + r)() : rt.error("Invalid JSON: " + e)
        }, rt.parseXML = function (e) {
            var n, i;
            if (!e || "string" != typeof e)return null;
            try {
                t.DOMParser ? (i = new DOMParser, n = i.parseFromString(e, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(e))
            } catch (r) {
                n = void 0
            }
            return n && n.documentElement && !n.getElementsByTagName("parsererror").length || rt.error("Invalid XML: " + e), n
        };
        var Ie, Le, Pe = /#.*$/, je = /([?&])_=[^&]*/, Me = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Re = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Fe = /^(?:GET|HEAD)$/, qe = /^\/\//, He = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, We = {}, ze = {}, Be = "*/".concat("*");
        try {
            Le = location.href
        } catch (Ve) {
            Le = ft.createElement("a"), Le.href = "", Le = Le.href
        }
        Ie = He.exec(Le.toLowerCase()) || [], rt.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Le,
                type: "GET",
                isLocal: Re.test(Ie[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Be,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {xml: /xml/, html: /html/, json: /json/},
                responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
                converters: {"* text": String, "text html": !0, "text json": rt.parseJSON, "text xml": rt.parseXML},
                flatOptions: {url: !0, context: !0}
            },
            ajaxSetup: function (t, e) {
                return e ? H(H(t, rt.ajaxSettings), e) : H(rt.ajaxSettings, t)
            },
            ajaxPrefilter: F(We),
            ajaxTransport: F(ze),
            ajax: function (t, e) {
                function n(t, e, n, i) {
                    var r, u, m, y, w, C = e;
                    2 !== b && (b = 2, s && clearTimeout(s), c = void 0, a = i || "", x.readyState = t > 0 ? 4 : 0, r = t >= 200 && 300 > t || 304 === t, n && (y = W(d, x, n)), y = z(d, y, x, r), r ? (d.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (rt.lastModified[o] = w), w = x.getResponseHeader("etag"), w && (rt.etag[o] = w)), 204 === t || "HEAD" === d.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = y.state, u = y.data, m = y.error, r = !m)) : (m = C, (t || !C) && (C = "error", 0 > t && (t = 0))), x.status = t, x.statusText = (e || C) + "", r ? f.resolveWith(h, [u, C, x]) : f.rejectWith(h, [x, C, m]), x.statusCode(v), v = void 0, l && p.trigger(r ? "ajaxSuccess" : "ajaxError", [x, d, r ? u : m]), g.fireWith(h, [x, C]), l && (p.trigger("ajaxComplete", [x, d]), --rt.active || rt.event.trigger("ajaxStop")))
                }

                "object" == typeof t && (e = t, t = void 0), e = e || {};
                var i, r, o, a, s, l, c, u, d = rt.ajaxSetup({}, e), h = d.context || d, p = d.context && (h.nodeType || h.jquery) ? rt(h) : rt.event, f = rt.Deferred(), g = rt.Callbacks("once memory"), v = d.statusCode || {}, m = {}, y = {}, b = 0, w = "canceled", x = {
                    readyState: 0,
                    getResponseHeader: function (t) {
                        var e;
                        if (2 === b) {
                            if (!u)for (u = {}; e = Me.exec(a);)u[e[1].toLowerCase()] = e[2];
                            e = u[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function () {
                        return 2 === b ? a : null
                    },
                    setRequestHeader: function (t, e) {
                        var n = t.toLowerCase();
                        return b || (t = y[n] = y[n] || t, m[t] = e), this
                    },
                    overrideMimeType: function (t) {
                        return b || (d.mimeType = t), this
                    },
                    statusCode: function (t) {
                        var e;
                        if (t)if (2 > b)for (e in t)v[e] = [v[e], t[e]]; else x.always(t[x.status]);
                        return this
                    },
                    abort: function (t) {
                        var e = t || w;
                        return c && c.abort(e), n(0, e), this
                    }
                };
                if (f.promise(x).complete = g.add, x.success = x.done, x.error = x.fail, d.url = ((t || d.url || Le) + "").replace(Pe, "").replace(qe, Ie[1] + "//"), d.type = e.method || e.type || d.method || d.type, d.dataTypes = rt.trim(d.dataType || "*").toLowerCase().match(bt) || [""], null == d.crossDomain && (i = He.exec(d.url.toLowerCase()), d.crossDomain = !(!i || i[1] === Ie[1] && i[2] === Ie[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (Ie[3] || ("http:" === Ie[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = rt.param(d.data, d.traditional)), q(We, d, e, x), 2 === b)return x;
                l = rt.event && d.global, l && 0 === rt.active++ && rt.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Fe.test(d.type), o = d.url, d.hasContent || (d.data && (o = d.url += (Ne.test(o) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = je.test(o) ? o.replace(je, "$1_=" + Oe++) : o + (Ne.test(o) ? "&" : "?") + "_=" + Oe++)), d.ifModified && (rt.lastModified[o] && x.setRequestHeader("If-Modified-Since", rt.lastModified[o]), rt.etag[o] && x.setRequestHeader("If-None-Match", rt.etag[o])), (d.data && d.hasContent && d.contentType !== !1 || e.contentType) && x.setRequestHeader("Content-Type", d.contentType), x.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Be + "; q=0.01" : "") : d.accepts["*"]);
                for (r in d.headers)x.setRequestHeader(r, d.headers[r]);
                if (d.beforeSend && (d.beforeSend.call(h, x, d) === !1 || 2 === b))return x.abort();
                w = "abort";
                for (r in{success: 1, error: 1, complete: 1})x[r](d[r]);
                if (c = q(ze, d, e, x)) {
                    x.readyState = 1, l && p.trigger("ajaxSend", [x, d]), d.async && d.timeout > 0 && (s = setTimeout(function () {
                        x.abort("timeout")
                    }, d.timeout));
                    try {
                        b = 1, c.send(m, n)
                    } catch (C) {
                        if (!(2 > b))throw C;
                        n(-1, C)
                    }
                } else n(-1, "No Transport");
                return x
            },
            getJSON: function (t, e, n) {
                return rt.get(t, e, n, "json")
            },
            getScript: function (t, e) {
                return rt.get(t, void 0, e, "script")
            }
        }), rt.each(["get", "post"], function (t, e) {
            rt[e] = function (t, n, i, r) {
                return rt.isFunction(n) && (r = r || i, i = n, n = void 0), rt.ajax({
                    url: t,
                    type: e,
                    dataType: r,
                    data: n,
                    success: i
                })
            }
        }), rt._evalUrl = function (t) {
            return rt.ajax({url: t, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
        }, rt.fn.extend({
            wrapAll: function (t) {
                if (rt.isFunction(t))return this.each(function (e) {
                    rt(this).wrapAll(t.call(this, e))
                });
                if (this[0]) {
                    var e = rt(t, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                        for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;)t = t.firstChild;
                        return t
                    }).append(this)
                }
                return this
            }, wrapInner: function (t) {
                return this.each(rt.isFunction(t) ? function (e) {
                    rt(this).wrapInner(t.call(this, e))
                } : function () {
                    var e = rt(this), n = e.contents();
                    n.length ? n.wrapAll(t) : e.append(t)
                })
            }, wrap: function (t) {
                var e = rt.isFunction(t);
                return this.each(function (n) {
                    rt(this).wrapAll(e ? t.call(this, n) : t)
                })
            }, unwrap: function () {
                return this.parent().each(function () {
                    rt.nodeName(this, "body") || rt(this).replaceWith(this.childNodes)
                }).end()
            }
        }), rt.expr.filters.hidden = function (t) {
            return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !nt.reliableHiddenOffsets() && "none" === (t.style && t.style.display || rt.css(t, "display"))
        }, rt.expr.filters.visible = function (t) {
            return !rt.expr.filters.hidden(t)
        };
        var Ue = /%20/g, Qe = /\[\]$/, Xe = /\r?\n/g, Ye = /^(?:submit|button|image|reset|file)$/i, Ke = /^(?:input|select|textarea|keygen)/i;
        rt.param = function (t, e) {
            var n, i = [], r = function (t, e) {
                e = rt.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
            if (void 0 === e && (e = rt.ajaxSettings && rt.ajaxSettings.traditional), rt.isArray(t) || t.jquery && !rt.isPlainObject(t))rt.each(t, function () {
                r(this.name, this.value)
            }); else for (n in t)B(n, t[n], e, r);
            return i.join("&").replace(Ue, "+")
        }, rt.fn.extend({
            serialize: function () {
                return rt.param(this.serializeArray())
            }, serializeArray: function () {
                return this.map(function () {
                    var t = rt.prop(this, "elements");
                    return t ? rt.makeArray(t) : this
                }).filter(function () {
                    var t = this.type;
                    return this.name && !rt(this).is(":disabled") && Ke.test(this.nodeName) && !Ye.test(t) && (this.checked || !Ot.test(t))
                }).map(function (t, e) {
                    var n = rt(this).val();
                    return null == n ? null : rt.isArray(n) ? rt.map(n, function (t) {
                        return {name: e.name, value: t.replace(Xe, "\r\n")}
                    }) : {name: e.name, value: n.replace(Xe, "\r\n")}
                }).get()
            }
        }), rt.ajaxSettings.xhr = void 0 !== t.ActiveXObject ? function () {
            return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && V() || U()
        } : V;
        var Ge = 0, Je = {}, Ze = rt.ajaxSettings.xhr();
        t.attachEvent && t.attachEvent("onunload", function () {
            for (var t in Je)Je[t](void 0, !0)
        }), nt.cors = !!Ze && "withCredentials"in Ze, Ze = nt.ajax = !!Ze, Ze && rt.ajaxTransport(function (t) {
            if (!t.crossDomain || nt.cors) {
                var e;
                return {
                    send: function (n, i) {
                        var r, o = t.xhr(), a = ++Ge;
                        if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)for (r in t.xhrFields)o[r] = t.xhrFields[r];
                        t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType), t.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                        for (r in n)void 0 !== n[r] && o.setRequestHeader(r, n[r] + "");
                        o.send(t.hasContent && t.data || null), e = function (n, r) {
                            var s, l, c;
                            if (e && (r || 4 === o.readyState))if (delete Je[a], e = void 0, o.onreadystatechange = rt.noop, r)4 !== o.readyState && o.abort(); else {
                                c = {}, s = o.status, "string" == typeof o.responseText && (c.text = o.responseText);
                                try {
                                    l = o.statusText
                                } catch (u) {
                                    l = ""
                                }
                                s || !t.isLocal || t.crossDomain ? 1223 === s && (s = 204) : s = c.text ? 200 : 404
                            }
                            c && i(s, l, c, o.getAllResponseHeaders())
                        }, t.async ? 4 === o.readyState ? setTimeout(e) : o.onreadystatechange = Je[a] = e : e()
                    }, abort: function () {
                        e && e(void 0, !0)
                    }
                }
            }
        }), rt.ajaxSetup({
            accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
            contents: {script: /(?:java|ecma)script/},
            converters: {
                "text script": function (t) {
                    return rt.globalEval(t), t
                }
            }
        }), rt.ajaxPrefilter("script", function (t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
        }), rt.ajaxTransport("script", function (t) {
            if (t.crossDomain) {
                var e, n = ft.head || rt("head")[0] || ft.documentElement;
                return {
                    send: function (i, r) {
                        e = ft.createElement("script"), e.async = !0, t.scriptCharset && (e.charset = t.scriptCharset), e.src = t.url, e.onload = e.onreadystatechange = function (t, n) {
                            (n || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, n || r(200, "success"))
                        }, n.insertBefore(e, n.firstChild)
                    }, abort: function () {
                        e && e.onload(void 0, !0)
                    }
                }
            }
        });
        var tn = [], en = /(=)\?(?=&|$)|\?\?/;
        rt.ajaxSetup({
            jsonp: "callback", jsonpCallback: function () {
                var t = tn.pop() || rt.expando + "_" + Oe++;
                return this[t] = !0, t
            }
        }), rt.ajaxPrefilter("json jsonp", function (e, n, i) {
            var r, o, a, s = e.jsonp !== !1 && (en.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && en.test(e.data) && "data");
            return s || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = rt.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(en, "$1" + r) : e.jsonp !== !1 && (e.url += (Ne.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
                return a || rt.error(r + " was not called"), a[0]
            }, e.dataTypes[0] = "json", o = t[r], t[r] = function () {
                a = arguments
            }, i.always(function () {
                t[r] = o, e[r] && (e.jsonpCallback = n.jsonpCallback, tn.push(r)), a && rt.isFunction(o) && o(a[0]), a = o = void 0
            }), "script") : void 0
        }), rt.parseHTML = function (t, e, n) {
            if (!t || "string" != typeof t)return null;
            "boolean" == typeof e && (n = e, e = !1), e = e || ft;
            var i = dt.exec(t), r = !n && [];
            return i ? [e.createElement(i[1])] : (i = rt.buildFragment([t], e, r), r && r.length && rt(r).remove(), rt.merge([], i.childNodes))
        };
        var nn = rt.fn.load;
        rt.fn.load = function (t, e, n) {
            if ("string" != typeof t && nn)return nn.apply(this, arguments);
            var i, r, o, a = this, s = t.indexOf(" ");
            return s >= 0 && (i = rt.trim(t.slice(s, t.length)), t = t.slice(0, s)), rt.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (o = "POST"), a.length > 0 && rt.ajax({
                url: t,
                type: o,
                dataType: "html",
                data: e
            }).done(function (t) {
                r = arguments, a.html(i ? rt("<div>").append(rt.parseHTML(t)).find(i) : t)
            }).complete(n && function (t, e) {
                a.each(n, r || [t.responseText, e, t])
            }), this
        }, rt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
            rt.fn[e] = function (t) {
                return this.on(e, t)
            }
        }), rt.expr.filters.animated = function (t) {
            return rt.grep(rt.timers, function (e) {
                return t === e.elem
            }).length
        };
        var rn = t.document.documentElement;
        rt.offset = {
            setOffset: function (t, e, n) {
                var i, r, o, a, s, l, c, u = rt.css(t, "position"), d = rt(t), h = {};
                "static" === u && (t.style.position = "relative"), s = d.offset(), o = rt.css(t, "top"), l = rt.css(t, "left"), c = ("absolute" === u || "fixed" === u) && rt.inArray("auto", [o, l]) > -1, c ? (i = d.position(), a = i.top, r = i.left) : (a = parseFloat(o) || 0, r = parseFloat(l) || 0), rt.isFunction(e) && (e = e.call(t, n, s)), null != e.top && (h.top = e.top - s.top + a), null != e.left && (h.left = e.left - s.left + r), "using"in e ? e.using.call(t, h) : d.css(h)
            }
        }, rt.fn.extend({
            offset: function (t) {
                if (arguments.length)return void 0 === t ? this : this.each(function (e) {
                    rt.offset.setOffset(this, t, e)
                });
                var e, n, i = {top: 0, left: 0}, r = this[0], o = r && r.ownerDocument;
                return o ? (e = o.documentElement, rt.contains(e, r) ? (typeof r.getBoundingClientRect !== St && (i = r.getBoundingClientRect()), n = Q(o), {
                    top: i.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                    left: i.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
                }) : i) : void 0
            }, position: function () {
                if (this[0]) {
                    var t, e, n = {top: 0, left: 0}, i = this[0];
                    return "fixed" === rt.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), rt.nodeName(t[0], "html") || (n = t.offset()), n.top += rt.css(t[0], "borderTopWidth", !0), n.left += rt.css(t[0], "borderLeftWidth", !0)), {
                        top: e.top - n.top - rt.css(i, "marginTop", !0),
                        left: e.left - n.left - rt.css(i, "marginLeft", !0)
                    }
                }
            }, offsetParent: function () {
                return this.map(function () {
                    for (var t = this.offsetParent || rn; t && !rt.nodeName(t, "html") && "static" === rt.css(t, "position");)t = t.offsetParent;
                    return t || rn
                })
            }
        }), rt.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, e) {
            var n = /Y/.test(e);
            rt.fn[t] = function (i) {
                return At(this, function (t, i, r) {
                    var o = Q(t);
                    return void 0 === r ? o ? e in o ? o[e] : o.document.documentElement[i] : t[i] : void(o ? o.scrollTo(n ? rt(o).scrollLeft() : r, n ? r : rt(o).scrollTop()) : t[i] = r)
                }, t, i, arguments.length, null)
            }
        }), rt.each(["top", "left"], function (t, e) {
            rt.cssHooks[e] = _(nt.pixelPosition, function (t, n) {
                return n ? (n = ee(t, e), ie.test(n) ? rt(t).position()[e] + "px" : n) : void 0
            })
        }), rt.each({Height: "height", Width: "width"}, function (t, e) {
            rt.each({padding: "inner" + t, content: e, "": "outer" + t}, function (n, i) {
                rt.fn[i] = function (i, r) {
                    var o = arguments.length && (n || "boolean" != typeof i), a = n || (i === !0 || r === !0 ? "margin" : "border");
                    return At(this, function (e, n, i) {
                        var r;
                        return rt.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === i ? rt.css(e, n, a) : rt.style(e, n, i, a)
                    }, e, o ? i : void 0, o, null)
                }
            })
        }), rt.fn.size = function () {
            return this.length
        }, rt.fn.andSelf = rt.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
            return rt
        });
        var on = t.jQuery, an = t.$;
        return rt.noConflict = function (e) {
            return t.$ === rt && (t.$ = an), e && t.jQuery === rt && (t.jQuery = on), rt
        }, typeof e === St && (t.jQuery = t.$ = rt), rt
    }), "undefined" == typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");
+function (t) {
    "use strict";
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(jQuery), +function (t) {
    "use strict";
    function e() {
        var t = document.createElement("bootstrap"), e = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var n in e)if (void 0 !== t.style[n])return {end: e[n]};
        return !1
    }

    t.fn.emulateTransitionEnd = function (e) {
        var n = !1, i = this;
        t(this).one("bsTransitionEnd", function () {
            n = !0
        });
        var r = function () {
            n || t(i).trigger(t.support.transition.end)
        };
        return setTimeout(r, e), this
    }, t(function () {
        t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function (e) {
                return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var n = t(this), r = n.data("bs.alert");
            r || n.data("bs.alert", r = new i(this)), "string" == typeof e && r[e].call(n)
        })
    }

    var n = '[data-dismiss="alert"]', i = function (e) {
        t(e).on("click", n, this.close)
    };
    i.VERSION = "3.3.4", i.TRANSITION_DURATION = 150, i.prototype.close = function (e) {
        function n() {
            a.detach().trigger("closed.bs.alert").remove()
        }

        var r = t(this), o = r.attr("data-target");
        o || (o = r.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, ""));
        var a = t(o);
        e && e.preventDefault(), a.length || (a = r.closest(".alert")), a.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (a.removeClass("in"), t.support.transition && a.hasClass("fade") ? a.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n())
    };
    var r = t.fn.alert;
    t.fn.alert = e, t.fn.alert.Constructor = i, t.fn.alert.noConflict = function () {
        return t.fn.alert = r, this
    }, t(document).on("click.bs.alert.data-api", n, i.prototype.close)
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var i = t(this), r = i.data("bs.button"), o = "object" == typeof e && e;
            r || i.data("bs.button", r = new n(this, o)), "toggle" == e ? r.toggle() : e && r.setState(e)
        })
    }

    var n = function (e, i) {
        this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.isLoading = !1
    };
    n.VERSION = "3.3.4", n.DEFAULTS = {loadingText: "loading..."}, n.prototype.setState = function (e) {
        var n = "disabled", i = this.$element, r = i.is("input") ? "val" : "html", o = i.data();
        e += "Text", null == o.resetText && i.data("resetText", i[r]()), setTimeout(t.proxy(function () {
            i[r](null == o[e] ? this.options[e] : o[e]), "loadingText" == e ? (this.isLoading = !0, i.addClass(n).attr(n, n)) : this.isLoading && (this.isLoading = !1, i.removeClass(n).removeAttr(n))
        }, this), 0)
    }, n.prototype.toggle = function () {
        var t = !0, e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") && (n.prop("checked") && this.$element.hasClass("active") ? t = !1 : e.find(".active").removeClass("active")), t && n.prop("checked", !this.$element.hasClass("active")).trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active"));
        t && this.$element.toggleClass("active")
    };
    var i = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = n, t.fn.button.noConflict = function () {
        return t.fn.button = i, this
    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (n) {
        var i = t(n.target);
        i.hasClass("btn") || (i = i.closest(".btn")), e.call(i, "toggle"), n.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (e) {
        t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
    })
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var i = t(this), r = i.data("bs.carousel"), o = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e), a = "string" == typeof e ? e : o.slide;
            r || i.data("bs.carousel", r = new n(this, o)), "number" == typeof e ? r.to(e) : a ? r[a]() : o.interval && r.pause().cycle()
        })
    }

    var n = function (e, n) {
        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart"in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };
    n.VERSION = "3.3.4", n.TRANSITION_DURATION = 600, n.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, n.prototype.keydown = function (t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            t.preventDefault()
        }
    }, n.prototype.cycle = function (e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, n.prototype.getItemIndex = function (t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, n.prototype.getItemForDirection = function (t, e) {
        var n = this.getItemIndex(e), i = "prev" == t && 0 === n || "next" == t && n == this.$items.length - 1;
        if (i && !this.options.wrap)return e;
        var r = "prev" == t ? -1 : 1, o = (n + r) % this.$items.length;
        return this.$items.eq(o)
    }, n.prototype.to = function (t) {
        var e = this, n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
            e.to(t)
        }) : n == t ? this.pause().cycle() : this.slide(t > n ? "next" : "prev", this.$items.eq(t))
    }, n.prototype.pause = function (e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, n.prototype.next = function () {
        return this.sliding ? void 0 : this.slide("next")
    }, n.prototype.prev = function () {
        return this.sliding ? void 0 : this.slide("prev")
    }, n.prototype.slide = function (e, i) {
        var r = this.$element.find(".item.active"), o = i || this.getItemForDirection(e, r), a = this.interval, s = "next" == e ? "left" : "right", l = this;
        if (o.hasClass("active"))return this.sliding = !1;
        var c = o[0], u = t.Event("slide.bs.carousel", {relatedTarget: c, direction: s});
        if (this.$element.trigger(u), !u.isDefaultPrevented()) {
            if (this.sliding = !0, a && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var d = t(this.$indicators.children()[this.getItemIndex(o)]);
                d && d.addClass("active")
            }
            var h = t.Event("slid.bs.carousel", {relatedTarget: c, direction: s});
            return t.support.transition && this.$element.hasClass("slide") ? (o.addClass(e), o[0].offsetWidth, r.addClass(s), o.addClass(s), r.one("bsTransitionEnd", function () {
                o.removeClass([e, s].join(" ")).addClass("active"), r.removeClass(["active", s].join(" ")), l.sliding = !1, setTimeout(function () {
                    l.$element.trigger(h)
                }, 0)
            }).emulateTransitionEnd(n.TRANSITION_DURATION)) : (r.removeClass("active"), o.addClass("active"), this.sliding = !1, this.$element.trigger(h)), a && this.cycle(), this
        }
    };
    var i = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = n, t.fn.carousel.noConflict = function () {
        return t.fn.carousel = i, this
    };
    var r = function (n) {
        var i, r = t(this), o = t(r.attr("data-target") || (i = r.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
        if (o.hasClass("carousel")) {
            var a = t.extend({}, o.data(), r.data()), s = r.attr("data-slide-to");
            s && (a.interval = !1), e.call(o, a), s && o.data("bs.carousel").to(s), n.preventDefault()
        }
    };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", r).on("click.bs.carousel.data-api", "[data-slide-to]", r), t(window).on("load", function () {
        t('[data-ride="carousel"]').each(function () {
            var n = t(this);
            e.call(n, n.data())
        })
    })
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        var n, i = e.attr("data-target") || (n = e.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
        return t(i)
    }

    function n(e) {
        return this.each(function () {
            var n = t(this), r = n.data("bs.collapse"), o = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);
            !r && o.toggle && /show|hide/.test(e) && (o.toggle = !1), r || n.data("bs.collapse", r = new i(this, o)), "string" == typeof e && r[e]()
        })
    }

    var i = function (e, n) {
        this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, n), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    i.VERSION = "3.3.4", i.TRANSITION_DURATION = 350, i.DEFAULTS = {toggle: !0}, i.prototype.dimension = function () {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height"
    }, i.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, r = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(r && r.length && (e = r.data("bs.collapse"), e && e.transitioning))) {
                var o = t.Event("show.bs.collapse");
                if (this.$element.trigger(o), !o.isDefaultPrevented()) {
                    r && r.length && (n.call(r, "hide"), e || r.data("bs.collapse", null));
                    var a = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var s = function () {
                        this.$element.removeClass("collapsing").addClass("collapse in")[a](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition)return s.call(this);
                    var l = t.camelCase(["scroll", a].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(s, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[a](this.$element[0][l])
                }
            }
        }
    }, i.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var r = function () {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return t.support.transition ? void this.$element[n](0).one("bsTransitionEnd", t.proxy(r, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : r.call(this)
            }
        }
    }, i.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, i.prototype.getParent = function () {
        return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function (n, i) {
            var r = t(i);
            this.addAriaAndCollapsedClass(e(r), r)
        }, this)).end()
    }, i.prototype.addAriaAndCollapsedClass = function (t, e) {
        var n = t.hasClass("in");
        t.attr("aria-expanded", n), e.toggleClass("collapsed", !n).attr("aria-expanded", n)
    };
    var r = t.fn.collapse;
    t.fn.collapse = n, t.fn.collapse.Constructor = i, t.fn.collapse.noConflict = function () {
        return t.fn.collapse = r, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (i) {
        var r = t(this);
        r.attr("data-target") || i.preventDefault();
        var o = e(r), a = o.data("bs.collapse"), s = a ? "toggle" : r.data();
        n.call(o, s)
    })
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        e && 3 === e.which || (t(r).remove(), t(o).each(function () {
            var i = t(this), r = n(i), o = {relatedTarget: this};
            r.hasClass("open") && (r.trigger(e = t.Event("hide.bs.dropdown", o)), e.isDefaultPrevented() || (i.attr("aria-expanded", "false"), r.removeClass("open").trigger("hidden.bs.dropdown", o)))
        }))
    }

    function n(e) {
        var n = e.attr("data-target");
        n || (n = e.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var i = n && t(n);
        return i && i.length ? i : e.parent()
    }

    function i(e) {
        return this.each(function () {
            var n = t(this), i = n.data("bs.dropdown");
            i || n.data("bs.dropdown", i = new a(this)), "string" == typeof e && i[e].call(n)
        })
    }

    var r = ".dropdown-backdrop", o = '[data-toggle="dropdown"]', a = function (e) {
        t(e).on("click.bs.dropdown", this.toggle)
    };
    a.VERSION = "3.3.4", a.prototype.toggle = function (i) {
        var r = t(this);
        if (!r.is(".disabled, :disabled")) {
            var o = n(r), a = o.hasClass("open");
            if (e(), !a) {
                "ontouchstart"in document.documentElement && !o.closest(".navbar-nav").length && t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click", e);
                var s = {relatedTarget: this};
                if (o.trigger(i = t.Event("show.bs.dropdown", s)), i.isDefaultPrevented())return;
                r.trigger("focus").attr("aria-expanded", "true"), o.toggleClass("open").trigger("shown.bs.dropdown", s)
            }
            return !1
        }
    }, a.prototype.keydown = function (e) {
        if (/(38|40|27|32)/.test(e.which) && !/input|textarea/i.test(e.target.tagName)) {
            var i = t(this);
            if (e.preventDefault(), e.stopPropagation(), !i.is(".disabled, :disabled")) {
                var r = n(i), a = r.hasClass("open");
                if (!a && 27 != e.which || a && 27 == e.which)return 27 == e.which && r.find(o).trigger("focus"), i.trigger("click");
                var s = " li:not(.disabled):visible a", l = r.find('[role="menu"]' + s + ', [role="listbox"]' + s);
                if (l.length) {
                    var c = l.index(e.target);
                    38 == e.which && c > 0 && c--, 40 == e.which && c < l.length - 1 && c++, ~c || (c = 0), l.eq(c).trigger("focus")
                }
            }
        }
    };
    var s = t.fn.dropdown;
    t.fn.dropdown = i, t.fn.dropdown.Constructor = a, t.fn.dropdown.noConflict = function () {
        return t.fn.dropdown = s, this
    }, t(document).on("click.bs.dropdown.data-api", e).on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", o, a.prototype.toggle).on("keydown.bs.dropdown.data-api", o, a.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="menu"]', a.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="listbox"]', a.prototype.keydown)
}(jQuery), +function (t) {
    "use strict";
    function e(e, i) {
        return this.each(function () {
            var r = t(this), o = r.data("bs.modal"), a = t.extend({}, n.DEFAULTS, r.data(), "object" == typeof e && e);
            o || r.data("bs.modal", o = new n(this, a)), "string" == typeof e ? o[e](i) : a.show && o.show(i)
        })
    }

    var n = function (e, n) {
        this.options = n, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function () {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    n.VERSION = "3.3.4", n.TRANSITION_DURATION = 300, n.BACKDROP_TRANSITION_DURATION = 150, n.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, n.prototype.toggle = function (t) {
        return this.isShown ? this.hide() : this.show(t)
    }, n.prototype.show = function (e) {
        var i = this, r = t.Event("show.bs.modal", {relatedTarget: e});
        this.$element.trigger(r), this.isShown || r.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
            i.$element.one("mouseup.dismiss.bs.modal", function (e) {
                t(e.target).is(i.$element) && (i.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function () {
            var r = t.support.transition && i.$element.hasClass("fade");
            i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.adjustDialog(), r && i.$element[0].offsetWidth, i.$element.addClass("in").attr("aria-hidden", !1), i.enforceFocus();
            var o = t.Event("shown.bs.modal", {relatedTarget: e});
            r ? i.$dialog.one("bsTransitionEnd", function () {
                i.$element.trigger("focus").trigger(o)
            }).emulateTransitionEnd(n.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(o)
        }))
    }, n.prototype.hide = function (e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
    }, n.prototype.enforceFocus = function () {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function (t) {
            this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, n.prototype.escape = function () {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function (t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, n.prototype.resize = function () {
        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
    }, n.prototype.hideModal = function () {
        var t = this;
        this.$element.hide(), this.backdrop(function () {
            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
        })
    }, n.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, n.prototype.backdrop = function (e) {
        var i = this, r = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var o = t.support.transition && r;
            if (this.$backdrop = t('<div class="modal-backdrop ' + r + '" />').appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function (t) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), o && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e)return;
            o ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var a = function () {
                i.removeBackdrop(), e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : a()
        } else e && e()
    }, n.prototype.handleUpdate = function () {
        this.adjustDialog()
    }, n.prototype.adjustDialog = function () {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }, n.prototype.resetAdjustments = function () {
        this.$element.css({paddingLeft: "", paddingRight: ""})
    }, n.prototype.checkScrollbar = function () {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
    }, n.prototype.setScrollbar = function () {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, n.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad)
    }, n.prototype.measureScrollbar = function () {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var i = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = n, t.fn.modal.noConflict = function () {
        return t.fn.modal = i, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (n) {
        var i = t(this), r = i.attr("href"), o = t(i.attr("data-target") || r && r.replace(/.*(?=#[^\s]+$)/, "")), a = o.data("bs.modal") ? "toggle" : t.extend({remote: !/#/.test(r) && r}, o.data(), i.data());
        i.is("a") && n.preventDefault(), o.one("show.bs.modal", function (t) {
            t.isDefaultPrevented() || o.one("hidden.bs.modal", function () {
                i.is(":visible") && i.trigger("focus")
            })
        }), e.call(o, a, this)
    })
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var i = t(this), r = i.data("bs.tooltip"), o = "object" == typeof e && e;
            (r || !/destroy|hide/.test(e)) && (r || i.data("bs.tooltip", r = new n(this, o)), "string" == typeof e && r[e]())
        })
    }

    var n = function (t, e) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.init("tooltip", t, e)
    };
    n.VERSION = "3.3.4", n.TRANSITION_DURATION = 150, n.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {selector: "body", padding: 0}
    }, n.prototype.init = function (e, n, i) {
        if (this.enabled = !0, this.type = e, this.$element = t(n), this.options = this.getOptions(i), this.$viewport = this.options.viewport && t(this.options.viewport.selector || this.options.viewport), this.$element[0]instanceof document.constructor && !this.options.selector)throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var r = this.options.trigger.split(" "), o = r.length; o--;) {
            var a = r[o];
            if ("click" == a)this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this)); else if ("manual" != a) {
                var s = "hover" == a ? "mouseenter" : "focusin", l = "hover" == a ? "mouseleave" : "focusout";
                this.$element.on(s + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, n.prototype.getDefaults = function () {
        return n.DEFAULTS
    }, n.prototype.getOptions = function (e) {
        return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, n.prototype.getDelegateOptions = function () {
        var e = {}, n = this.getDefaults();
        return this._options && t.each(this._options, function (t, i) {
            n[t] != i && (e[t] = i)
        }), e
    }, n.prototype.enter = function (e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return n && n.$tip && n.$tip.is(":visible") ? void(n.hoverState = "in") : (n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function () {
            "in" == n.hoverState && n.show()
        }, n.options.delay.show)) : n.show())
    }, n.prototype.leave = function (e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function () {
            "out" == n.hoverState && n.hide()
        }, n.options.delay.hide)) : n.hide()
    }, n.prototype.show = function () {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var i = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !i)return;
            var r = this, o = this.tip(), a = this.getUID(this.type);
            this.setContent(), o.attr("id", a), this.$element.attr("aria-describedby", a), this.options.animation && o.addClass("fade");
            var s = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]) : this.options.placement, l = /\s?auto?\s?/i, c = l.test(s);
            c && (s = s.replace(l, "") || "top"), o.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(s).data("bs." + this.type, this), this.options.container ? o.appendTo(this.options.container) : o.insertAfter(this.$element);
            var u = this.getPosition(), d = o[0].offsetWidth, h = o[0].offsetHeight;
            if (c) {
                var p = s, f = this.options.container ? t(this.options.container) : this.$element.parent(), g = this.getPosition(f);
                s = "bottom" == s && u.bottom + h > g.bottom ? "top" : "top" == s && u.top - h < g.top ? "bottom" : "right" == s && u.right + d > g.width ? "left" : "left" == s && u.left - d < g.left ? "right" : s, o.removeClass(p).addClass(s)
            }
            var v = this.getCalculatedOffset(s, u, d, h);
            this.applyPlacement(v, s);
            var m = function () {
                var t = r.hoverState;
                r.$element.trigger("shown.bs." + r.type), r.hoverState = null, "out" == t && r.leave(r)
            };
            t.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", m).emulateTransitionEnd(n.TRANSITION_DURATION) : m()
        }
    }, n.prototype.applyPlacement = function (e, n) {
        var i = this.tip(), r = i[0].offsetWidth, o = i[0].offsetHeight, a = parseInt(i.css("margin-top"), 10), s = parseInt(i.css("margin-left"), 10);
        isNaN(a) && (a = 0), isNaN(s) && (s = 0), e.top = e.top + a, e.left = e.left + s, t.offset.setOffset(i[0], t.extend({
            using: function (t) {
                i.css({top: Math.round(t.top), left: Math.round(t.left)})
            }
        }, e), 0), i.addClass("in");
        var l = i[0].offsetWidth, c = i[0].offsetHeight;
        "top" == n && c != o && (e.top = e.top + o - c);
        var u = this.getViewportAdjustedDelta(n, e, l, c);
        u.left ? e.left += u.left : e.top += u.top;
        var d = /top|bottom/.test(n), h = d ? 2 * u.left - r + l : 2 * u.top - o + c, p = d ? "offsetWidth" : "offsetHeight";
        i.offset(e), this.replaceArrow(h, i[0][p], d)
    }, n.prototype.replaceArrow = function (t, e, n) {
        this.arrow().css(n ? "left" : "top", 50 * (1 - t / e) + "%").css(n ? "top" : "left", "")
    }, n.prototype.setContent = function () {
        var t = this.tip(), e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, n.prototype.hide = function (e) {
        function i() {
            "in" != r.hoverState && o.detach(), r.$element.removeAttr("aria-describedby").trigger("hidden.bs." + r.type), e && e()
        }

        var r = this, o = t(this.$tip), a = t.Event("hide.bs." + this.type);
        return this.$element.trigger(a), a.isDefaultPrevented() ? void 0 : (o.removeClass("in"), t.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i(), this.hoverState = null, this)
    }, n.prototype.fixTitle = function () {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, n.prototype.hasContent = function () {
        return this.getTitle()
    }, n.prototype.getPosition = function (e) {
        e = e || this.$element;
        var n = e[0], i = "BODY" == n.tagName, r = n.getBoundingClientRect();
        null == r.width && (r = t.extend({}, r, {width: r.right - r.left, height: r.bottom - r.top}));
        var o = i ? {
            top: 0,
            left: 0
        } : e.offset(), a = {scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()}, s = i ? {
            width: t(window).width(),
            height: t(window).height()
        } : null;
        return t.extend({}, r, a, s, o)
    }, n.prototype.getCalculatedOffset = function (t, e, n, i) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - n / 2
        } : "top" == t ? {
            top: e.top - i,
            left: e.left + e.width / 2 - n / 2
        } : "left" == t ? {top: e.top + e.height / 2 - i / 2, left: e.left - n} : {
            top: e.top + e.height / 2 - i / 2,
            left: e.left + e.width
        }
    }, n.prototype.getViewportAdjustedDelta = function (t, e, n, i) {
        var r = {top: 0, left: 0};
        if (!this.$viewport)return r;
        var o = this.options.viewport && this.options.viewport.padding || 0, a = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var s = e.top - o - a.scroll, l = e.top + o - a.scroll + i;
            s < a.top ? r.top = a.top - s : l > a.top + a.height && (r.top = a.top + a.height - l)
        } else {
            var c = e.left - o, u = e.left + o + n;
            c < a.left ? r.left = a.left - c : u > a.width && (r.left = a.left + a.width - u)
        }
        return r
    }, n.prototype.getTitle = function () {
        var t, e = this.$element, n = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(e[0]) : n.title)
    }, n.prototype.getUID = function (t) {
        do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
        return t
    }, n.prototype.tip = function () {
        return this.$tip = this.$tip || t(this.options.template)
    }, n.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, n.prototype.enable = function () {
        this.enabled = !0
    }, n.prototype.disable = function () {
        this.enabled = !1
    }, n.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled
    }, n.prototype.toggle = function (e) {
        var n = this;
        e && (n = t(e.currentTarget).data("bs." + this.type), n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n))), n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }, n.prototype.destroy = function () {
        var t = this;
        clearTimeout(this.timeout), this.hide(function () {
            t.$element.off("." + t.type).removeData("bs." + t.type)
        })
    };
    var i = t.fn.tooltip;
    t.fn.tooltip = e, t.fn.tooltip.Constructor = n, t.fn.tooltip.noConflict = function () {
        return t.fn.tooltip = i, this
    }
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var i = t(this), r = i.data("bs.popover"), o = "object" == typeof e && e;
            (r || !/destroy|hide/.test(e)) && (r || i.data("bs.popover", r = new n(this, o)), "string" == typeof e && r[e]())
        })
    }

    var n = function (t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip)throw new Error("Popover requires tooltip.js");
    n.VERSION = "3.3.4", n.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), n.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), n.prototype.constructor = n, n.prototype.getDefaults = function () {
        return n.DEFAULTS
    }, n.prototype.setContent = function () {
        var t = this.tip(), e = this.getTitle(), n = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, n.prototype.hasContent = function () {
        return this.getTitle() || this.getContent()
    }, n.prototype.getContent = function () {
        var t = this.$element, e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, n.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var i = t.fn.popover;
    t.fn.popover = e, t.fn.popover.Constructor = n, t.fn.popover.noConflict = function () {
        return t.fn.popover = i, this
    }
}(jQuery), +function (t) {
    "use strict";
    function e(n, i) {
        this.$body = t(document.body), this.$scrollElement = t(t(n).is(document.body) ? window : n), this.options = t.extend({}, e.DEFAULTS, i), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
    }

    function n(n) {
        return this.each(function () {
            var i = t(this), r = i.data("bs.scrollspy"), o = "object" == typeof n && n;
            r || i.data("bs.scrollspy", r = new e(this, o)), "string" == typeof n && r[n]()
        })
    }

    e.VERSION = "3.3.4", e.DEFAULTS = {offset: 10}, e.prototype.getScrollHeight = function () {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function () {
        var e = this, n = "offset", i = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (n = "position", i = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
            var e = t(this), r = e.data("target") || e.attr("href"), o = /^#./.test(r) && t(r);
            return o && o.length && o.is(":visible") && [[o[n]().top + i, r]] || null
        }).sort(function (t, e) {
            return t[0] - e[0]
        }).each(function () {
            e.offsets.push(this[0]), e.targets.push(this[1])
        })
    }, e.prototype.process = function () {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset, n = this.getScrollHeight(), i = this.options.offset + n - this.$scrollElement.height(), r = this.offsets, o = this.targets, a = this.activeTarget;
        if (this.scrollHeight != n && this.refresh(), e >= i)return a != (t = o[o.length - 1]) && this.activate(t);
        if (a && e < r[0])return this.activeTarget = null, this.clear();
        for (t = r.length; t--;)a != o[t] && e >= r[t] && (void 0 === r[t + 1] || e < r[t + 1]) && this.activate(o[t])
    }, e.prototype.activate = function (e) {
        this.activeTarget = e, this.clear();
        var n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]', i = t(n).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
    }, e.prototype.clear = function () {
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var i = t.fn.scrollspy;
    t.fn.scrollspy = n, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function () {
        return t.fn.scrollspy = i,
            this
    }, t(window).on("load.bs.scrollspy.data-api", function () {
        t('[data-spy="scroll"]').each(function () {
            var e = t(this);
            n.call(e, e.data())
        })
    })
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var i = t(this), r = i.data("bs.tab");
            r || i.data("bs.tab", r = new n(this)), "string" == typeof e && r[e]()
        })
    }

    var n = function (e) {
        this.element = t(e)
    };
    n.VERSION = "3.3.4", n.TRANSITION_DURATION = 150, n.prototype.show = function () {
        var e = this.element, n = e.closest("ul:not(.dropdown-menu)"), i = e.data("target");
        if (i || (i = e.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var r = n.find(".active:last a"), o = t.Event("hide.bs.tab", {relatedTarget: e[0]}), a = t.Event("show.bs.tab", {relatedTarget: r[0]});
            if (r.trigger(o), e.trigger(a), !a.isDefaultPrevented() && !o.isDefaultPrevented()) {
                var s = t(i);
                this.activate(e.closest("li"), n), this.activate(s, s.parent(), function () {
                    r.trigger({type: "hidden.bs.tab", relatedTarget: e[0]}), e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: r[0]
                    })
                })
            }
        }
    }, n.prototype.activate = function (e, i, r) {
        function o() {
            a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), s ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), r && r()
        }

        var a = i.find("> .active"), s = r && t.support.transition && (a.length && a.hasClass("fade") || !!i.find("> .fade").length);
        a.length && s ? a.one("bsTransitionEnd", o).emulateTransitionEnd(n.TRANSITION_DURATION) : o(), a.removeClass("in")
    };
    var i = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = n, t.fn.tab.noConflict = function () {
        return t.fn.tab = i, this
    };
    var r = function (n) {
        n.preventDefault(), e.call(t(this), "show")
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', r).on("click.bs.tab.data-api", '[data-toggle="pill"]', r)
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var i = t(this), r = i.data("bs.affix"), o = "object" == typeof e && e;
            r || i.data("bs.affix", r = new n(this, o)), "string" == typeof e && r[e]()
        })
    }

    var n = function (e, i) {
        this.options = t.extend({}, n.DEFAULTS, i), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    n.VERSION = "3.3.4", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {
        offset: 0,
        target: window
    }, n.prototype.getState = function (t, e, n, i) {
        var r = this.$target.scrollTop(), o = this.$element.offset(), a = this.$target.height();
        if (null != n && "top" == this.affixed)return n > r ? "top" : !1;
        if ("bottom" == this.affixed)return null != n ? r + this.unpin <= o.top ? !1 : "bottom" : t - i >= r + a ? !1 : "bottom";
        var s = null == this.affixed, l = s ? r : o.top, c = s ? a : e;
        return null != n && n >= r ? "top" : null != i && l + c >= t - i ? "bottom" : !1
    }, n.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset)return this.pinnedOffset;
        this.$element.removeClass(n.RESET).addClass("affix");
        var t = this.$target.scrollTop(), e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, n.prototype.checkPositionWithEventLoop = function () {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, n.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
            var e = this.$element.height(), i = this.options.offset, r = i.top, o = i.bottom, a = t(document.body).height();
            "object" != typeof i && (o = r = i), "function" == typeof r && (r = i.top(this.$element)), "function" == typeof o && (o = i.bottom(this.$element));
            var s = this.getState(a, e, r, o);
            if (this.affixed != s) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (s ? "-" + s : ""), c = t.Event(l + ".bs.affix");
                if (this.$element.trigger(c), c.isDefaultPrevented())return;
                this.affixed = s, this.unpin = "bottom" == s ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == s && this.$element.offset({top: a - e - o})
        }
    };
    var i = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = n, t.fn.affix.noConflict = function () {
        return t.fn.affix = i, this
    }, t(window).on("load", function () {
        t('[data-spy="affix"]').each(function () {
            var n = t(this), i = n.data();
            i.offset = i.offset || {}, null != i.offsetBottom && (i.offset.bottom = i.offsetBottom), null != i.offsetTop && (i.offset.top = i.offsetTop), e.call(n, i)
        })
    })
}(jQuery);
var _arrive_unique_id_ = 0;
!function (t, e, n) {
    "use strict";
    function i(t) {
        return t._shouldBeIgnored === n ? t._shouldBeIgnored = -1 != (" " + t.className + " ").indexOf(" ignore-arrive ") ? !0 : null == t.parentNode ? !1 : i(t.parentNode) : t._shouldBeIgnored
    }

    function r(t, e, o) {
        for (var a, s = 0; a = t[s]; s++)i(a) || (d.matchesSelector(a, e.selector) && (a._id === n && (a._id = _arrive_unique_id_++), -1 == e.firedElems.indexOf(a._id) && (e.firedElems.push(a._id), o.push({
            callback: e.callback,
            elem: a
        }))), a.childNodes.length > 0 && r(a.childNodes, e, o))
    }

    function o(t) {
        for (var e, n = 0; e = t[n]; n++)e.callback.call(e.elem)
    }

    function a(t, e) {
        t.forEach(function (t) {
            if (!i(t.target)) {
                var a = t.addedNodes, s = t.target, l = [];
                null !== a && a.length > 0 ? r(a, e, l) : "attributes" === t.type && d.matchesSelector(s, e.selector) && (s._id === n && (s._id = _arrive_unique_id_++), -1 == e.firedElems.indexOf(s._id) && (e.firedElems.push(s._id), l.push({
                    callback: e.callback,
                    elem: s
                }))), o(l)
            }
        })
    }

    function s(t, e) {
        t.forEach(function (t) {
            if (!i(t.target)) {
                var n = t.removedNodes, a = (t.target, []);
                null !== n && n.length > 0 && r(n, e, a), o(a)
            }
        })
    }

    function l(t) {
        var e = {attributes: !1, childList: !0, subtree: !0};
        return t.fireOnAttributesModification && (e.attributes = !0), e
    }

    function c(t) {
        var e = {childList: !0, subtree: !0};
        return e
    }

    function u(t) {
        t.arrive = v.bindEvent, d.addMethod(t, "unbindArrive", v.unbindEvent), d.addMethod(t, "unbindArrive", v.unbindEventWithSelectorOrCallback), d.addMethod(t, "unbindArrive", v.unbindEventWithSelectorAndCallback), t.leave = m.bindEvent, d.addMethod(t, "unbindLeave", m.unbindEvent), d.addMethod(t, "unbindLeave", m.unbindEventWithSelectorOrCallback), d.addMethod(t, "unbindLeave", m.unbindEventWithSelectorAndCallback)
    }

    if (t.MutationObserver && "undefined" != typeof HTMLElement) {
        var d = function () {
            var t = HTMLElement.prototype.matches || HTMLElement.prototype.webkitMatchesSelector || HTMLElement.prototype.mozMatchesSelector || HTMLElement.prototype.msMatchesSelector;
            return {
                matchesSelector: function (e, n) {
                    return e instanceof HTMLElement && t.call(e, n)
                }, addMethod: function (t, e, n) {
                    var i = t[e];
                    t[e] = function () {
                        return n.length == arguments.length ? n.apply(this, arguments) : "function" == typeof i ? i.apply(this, arguments) : void 0
                    }
                }
            }
        }(), h = function () {
            var t = function () {
                this._eventsBucket = [], this._beforeAdding = null, this._beforeRemoving = null
            };
            return t.prototype.addEvent = function (t, e, n, i) {
                var r = {target: t, selector: e, options: n, callback: i, firedElems: []};
                return this._beforeAdding && this._beforeAdding(r), this._eventsBucket.push(r), r
            }, t.prototype.removeEvent = function (t) {
                for (var e, n = this._eventsBucket.length - 1; e = this._eventsBucket[n]; n--)t(e) && (this._beforeRemoving && this._beforeRemoving(e), this._eventsBucket.splice(n, 1))
            }, t.prototype.beforeAdding = function (t) {
                this._beforeAdding = t
            }, t.prototype.beforeRemoving = function (t) {
                this._beforeRemoving = t
            }, t
        }(), p = function (e, n, i) {
            function r(t) {
                return "number" != typeof t.length && (t = [t]), t
            }

            var o = new h;
            return o.beforeAdding(function (n) {
                {
                    var r, o = n.target;
                    n.selector, n.callback
                }
                (o === t.document || o === t) && (o = document.getElementsByTagName("html")[0]), r = new MutationObserver(function (t) {
                    i.call(this, t, n)
                });
                var a = e(n.options);
                r.observe(o, a), n.observer = r
            }), o.beforeRemoving(function (t) {
                t.observer.disconnect()
            }), this.bindEvent = function (t, e, i) {
                "undefined" == typeof i && (i = e, e = n);
                for (var a = r(this), s = 0; s < a.length; s++)o.addEvent(a[s], t, e, i)
            }, this.unbindEvent = function () {
                var t = r(this);
                o.removeEvent(function (e) {
                    for (var n = 0; n < t.length; n++)if (e.target === t[n])return !0;
                    return !1
                })
            }, this.unbindEventWithSelectorOrCallback = function (t) {
                var e, n = r(this), i = t;
                e = "function" == typeof t ? function (t) {
                    for (var e = 0; e < n.length; e++)if (t.target === n[e] && t.callback === i)return !0;
                    return !1
                } : function (e) {
                    for (var i = 0; i < n.length; i++)if (e.target === n[i] && e.selector === t)return !0;
                    return !1
                }, o.removeEvent(e)
            }, this.unbindEventWithSelectorAndCallback = function (t, e) {
                var n = r(this);
                o.removeEvent(function (i) {
                    for (var r = 0; r < n.length; r++)if (i.target === n[r] && i.selector === t && i.callback === e)return !0;
                    return !1
                })
            }, this
        }, f = {fireOnAttributesModification: !1}, g = {}, v = new p(l, f, a), m = new p(c, g, s);
        e && u(e.fn), u(HTMLElement.prototype), u(NodeList.prototype), u(HTMLCollection.prototype), u(HTMLDocument.prototype), u(Window.prototype)
    }
}(this, "undefined" == typeof jQuery ? null : jQuery), !function (t) {
    function e(t) {
        return "undefined" == typeof t.which ? !0 : "number" == typeof t.which && t.which > 0 ? !t.ctrlKey && !t.metaKey && !t.altKey && 8 != t.which && 9 != t.which : !1
    }

    t.expr[":"].notmdproc = function (e) {
        return t(e).data("mdproc") ? !1 : !0
    }, t.material = {
        options: {
            input: !0,
            ripples: !0,
            checkbox: !0,
            togglebutton: !0,
            radio: !0,
            arrive: !0,
            autofill: !1,
            withRipples: [".btn:not(.btn-link)", ".card-image", ".navbar a:not(.withoutripple)", ".dropdown-menu a", ".nav-tabs a:not(.withoutripple)", ".withripple"].join(","),
            inputElements: "input.form-control, textarea.form-control, select.form-control",
            checkboxElements: ".checkbox > label > input[type=checkbox]",
            togglebuttonElements: ".togglebutton > label > input[type=checkbox]",
            radioElements: ".radio > label > input[type=radio]"
        }, checkbox: function (e) {
            t(e ? e : this.options.checkboxElements).filter(":notmdproc").data("mdproc", !0).after("<span class=checkbox-material><span class=check></span></span>")
        }, togglebutton: function (e) {
            t(e ? e : this.options.togglebuttonElements).filter(":notmdproc").data("mdproc", !0).after("<span class=toggle></span>")
        }, radio: function (e) {
            t(e ? e : this.options.radioElements).filter(":notmdproc").data("mdproc", !0).after("<span class=circle></span><span class=check></span>")
        }, input: function (n) {
            t(n ? n : this.options.inputElements).filter(":notmdproc").data("mdproc", !0).each(function () {
                var e = t(this);
                if (t(this).attr("data-hint") || e.hasClass("floating-label")) {
                    if (e.wrap("<div class=form-control-wrapper></div>"), e.after("<span class=material-input></span>"), e.hasClass("floating-label")) {
                        var n = e.attr("placeholder");
                        e.attr("placeholder", null).removeClass("floating-label"), e.after("<div class=floating-label>" + n + "</div>")
                    }
                    if (e.attr("data-hint") && e.after("<div class=hint>" + e.attr("data-hint") + "</div>"), (null === e.val() || "undefined" == e.val() || "" === e.val()) && e.addClass("empty"), e.parent().next().is("[type=file]")) {
                        e.parent().addClass("fileinput");
                        var i = e.parent().next().detach();
                        e.after(i)
                    }
                }
            }), t(document).on("change", ".checkbox input[type=checkbox]", function () {
                t(this).blur()
            }).on("keydown paste", ".form-control", function (n) {
                e(n) && t(this).removeClass("empty")
            }).on("keyup change", ".form-control", function () {
                var e = t(this);
                "" === e.val() && "undefined" != typeof e[0].checkValidity && e[0].checkValidity() ? e.addClass("empty") : e.removeClass("empty")
            }).on("focus", ".form-control-wrapper.fileinput", function () {
                t(this).find("input").addClass("focus")
            }).on("blur", ".form-control-wrapper.fileinput", function () {
                t(this).find("input").removeClass("focus")
            }).on("change", ".form-control-wrapper.fileinput [type=file]", function () {
                var e = "";
                t.each(t(this)[0].files, function (t, n) {
                    e += n.name + ", "
                }), e = e.substring(0, e.length - 2), e ? t(this).prev().removeClass("empty") : t(this).prev().addClass("empty"), t(this).prev().val(e)
            })
        }, ripples: function (e) {
            t(e ? e : this.options.withRipples).ripples()
        }, autofill: function () {
            var e = setInterval(function () {
                t("input[type!=checkbox]").each(function () {
                    t(this).val() && t(this).val() !== t(this).attr("value") && t(this).trigger("change")
                })
            }, 100);
            setTimeout(function () {
                clearInterval(e)
            }, 1e4);
            var n;
            t(document).on("focus", "input", function () {
                var e = t(this).parents("form").find("input").not("[type=file]");
                n = setInterval(function () {
                    e.each(function () {
                        t(this).val() !== t(this).attr("value") && t(this).trigger("change")
                    })
                }, 100)
            }).on("blur", "input", function () {
                clearInterval(n)
            })
        }, init: function () {
            t.fn.ripples && this.options.ripples && this.ripples(), this.options.input && this.input(), this.options.checkbox && this.checkbox(), this.options.togglebutton && this.togglebutton(), this.options.radio && this.radio(), this.options.autofill && this.autofill(), document.arrive && this.options.arrive && (t.fn.ripples && this.options.ripples && t(document).arrive(this.options.withRipples, function () {
                t.material.ripples(t(this))
            }), this.options.input && t(document).arrive(this.options.inputElements, function () {
                t.material.input(t(this))
            }), this.options.checkbox && t(document).arrive(this.options.checkboxElements, function () {
                t.material.checkbox(t(this))
            }), this.options.radio && t(document).arrive(this.options.radioElements, function () {
                t.material.radio(t(this))
            }), this.options.togglebutton && t(document).arrive(this.options.togglebuttonElements, function () {
                t.material.togglebutton(t(this))
            }))
        }
    }
}(jQuery), !function (t, e, n, i) {
    "use strict";
    function r(e, n) {
        a = this, this.element = t(e), this.options = t.extend({}, s, n), this._defaults = s, this._name = o, this.init()
    }

    var o = "ripples", a = null, s = {};
    r.prototype.init = function () {
        var n = this.element;
        n.on("mousedown touchstart", function (i) {
            if (!a.isTouch() || "mousedown" !== i.type) {
                n.find(".ripple-wrapper").length || n.append('<div class="ripple-wrapper"></div>');
                var r = n.children(".ripple-wrapper"), o = a.getRelY(r, i), s = a.getRelX(r, i);
                if (o || s) {
                    var l = a.getRipplesColor(n), c = t("<div></div>");
                    c.addClass("ripple").css({left: s, top: o, "background-color": l}), r.append(c), function () {
                        return e.getComputedStyle(c[0]).opacity
                    }(), a.rippleOn(n, c), setTimeout(function () {
                        a.rippleEnd(c)
                    }, 500), n.on("mouseup mouseleave touchend", function () {
                        c.data("mousedown", "off"), "off" === c.data("animating") && a.rippleOut(c)
                    })
                }
            }
        })
    }, r.prototype.getNewSize = function (t, e) {
        return Math.max(t.outerWidth(), t.outerHeight()) / e.outerWidth() * 2.5
    }, r.prototype.getRelX = function (t, e) {
        var n = t.offset();
        return a.isTouch() ? (e = e.originalEvent, 1 !== e.touches.length ? e.touches[0].pageX - n.left : !1) : e.pageX - n.left
    }, r.prototype.getRelY = function (t, e) {
        var n = t.offset();
        return a.isTouch() ? (e = e.originalEvent, 1 !== e.touches.length ? e.touches[0].pageY - n.top : !1) : e.pageY - n.top
    }, r.prototype.getRipplesColor = function (t) {
        var n = t.data("ripple-color") ? t.data("ripple-color") : e.getComputedStyle(t[0]).color;
        return n
    }, r.prototype.hasTransitionSupport = function () {
        var t = n.body || n.documentElement, e = t.style, r = e.transition !== i || e.WebkitTransition !== i || e.MozTransition !== i || e.MsTransition !== i || e.OTransition !== i;
        return r
    }, r.prototype.isTouch = function () {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    }, r.prototype.rippleEnd = function (t) {
        t.data("animating", "off"), "off" === t.data("mousedown") && a.rippleOut(t)
    }, r.prototype.rippleOut = function (t) {
        t.off(), a.hasTransitionSupport() ? t.addClass("ripple-out") : t.animate({opacity: 0}, 100, function () {
            t.trigger("transitionend")
        }), t.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function () {
            t.remove()
        })
    }, r.prototype.rippleOn = function (t, e) {
        var n = a.getNewSize(t, e);
        a.hasTransitionSupport() ? e.css({
            "-ms-transform": "scale(" + n + ")",
            "-moz-transform": "scale(" + n + ")",
            "-webkit-transform": "scale(" + n + ")",
            transform: "scale(" + n + ")"
        }).addClass("ripple-on").data("animating", "on").data("mousedown", "on") : e.animate({
            width: 2 * Math.max(t.outerWidth(), t.outerHeight()),
            height: 2 * Math.max(t.outerWidth(), t.outerHeight()),
            "margin-left": -1 * Math.max(t.outerWidth(), t.outerHeight()),
            "margin-top": -1 * Math.max(t.outerWidth(), t.outerHeight()),
            opacity: .2
        }, 500, function () {
            e.trigger("transitionend")
        })
    }, t.fn.ripples = function (e) {
        return this.each(function () {
            t.data(this, "plugin_" + o) || t.data(this, "plugin_" + o, new r(this, e))
        })
    }
}(jQuery, window, document), !function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : t.bootbox = e(t.jQuery)
}(this, function t(e, n) {
    "use strict";
    function i(t) {
        var e = v[f.locale];
        return e ? e[t] : v.en[t]
    }

    function r(t, n, i) {
        t.stopPropagation(), t.preventDefault();
        var r = e.isFunction(i) && i.call(n, t) === !1;
        r || n.modal("hide")
    }

    function o(t) {
        var e, n = 0;
        for (e in t)n++;
        return n
    }

    function a(t, n) {
        var i = 0;
        e.each(t, function (t, e) {
            n(t, e, i++)
        })
    }

    function s(t) {
        var n, i;
        if ("object" != typeof t)throw new Error("Please supply an object of options");
        if (!t.message)throw new Error("Please specify a message");
        return t = e.extend({}, f, t), t.buttons || (t.buttons = {}), n = t.buttons, i = o(n), a(n, function (t, r, o) {
            if (e.isFunction(r) && (r = n[t] = {callback: r}), "object" !== e.type(r))throw new Error("button with key " + t + " must be an object");
            r.label || (r.label = t), r.className || (r.className = 2 >= i && o === i - 1 ? "btn-primary" : "btn-default")
        }), t
    }

    function l(t, e) {
        var n = t.length, i = {};
        if (1 > n || n > 2)throw new Error("Invalid argument length");
        return 2 === n || "string" == typeof t[0] ? (i[e[0]] = t[0], i[e[1]] = t[1]) : i = t[0], i
    }

    function c(t, n, i) {
        return e.extend(!0, {}, t, l(n, i))
    }

    function u(t, e, n, i) {
        var r = {className: "bootbox-" + t, buttons: d.apply(null, e)};
        return h(c(r, i, n), e)
    }

    function d() {
        for (var t = {}, e = 0, n = arguments.length; n > e; e++) {
            var r = arguments[e], o = r.toLowerCase(), a = r.toUpperCase();
            t[o] = {label: i(a)}
        }
        return t
    }

    function h(t, e) {
        var i = {};
        return a(e, function (t, e) {
            i[e] = !0
        }), a(t.buttons, function (t) {
            if (i[t] === n)throw new Error("button key " + t + " is not allowed (options are " + e.join("\n") + ")")
        }), t
    }

    var p = {
        dialog: "<div class='bootbox modal' tabindex='-1' role='dialog'><div class='modal-dialog'><div class='modal-content'><div class='modal-body'><div class='bootbox-body'></div></div></div></div></div>",
        header: "<div class='modal-header'><h4 class='modal-title'></h4></div>",
        footer: "<div class='modal-footer'></div>",
        closeButton: "<button type='button' class='bootbox-close-button close' data-dismiss='modal' aria-hidden='true'>&times;</button>",
        form: "<form class='bootbox-form'></form>",
        inputs: {
            text: "<input class='bootbox-input bootbox-input-text form-control' autocomplete=off type=text />",
            textarea: "<textarea class='bootbox-input bootbox-input-textarea form-control'></textarea>",
            email: "<input class='bootbox-input bootbox-input-email form-control' autocomplete='off' type='email' />",
            select: "<select class='bootbox-input bootbox-input-select form-control'></select>",
            checkbox: "<div class='checkbox'><label><input class='bootbox-input bootbox-input-checkbox' type='checkbox' /></label></div>",
            date: "<input class='bootbox-input bootbox-input-date form-control' autocomplete=off type='date' />",
            time: "<input class='bootbox-input bootbox-input-time form-control' autocomplete=off type='time' />",
            number: "<input class='bootbox-input bootbox-input-number form-control' autocomplete=off type='number' />",
            password: "<input class='bootbox-input bootbox-input-password form-control' autocomplete='off' type='password' />"
        }
    }, f = {
        locale: "en",
        backdrop: "static",
        animate: !0,
        className: null,
        closeButton: !0,
        show: !0,
        container: "body"
    }, g = {};
    g.alert = function () {
        var t;
        if (t = u("alert", ["ok"], ["message", "callback"], arguments), t.callback && !e.isFunction(t.callback))throw new Error("alert requires callback property to be a function when provided");
        return t.buttons.ok.callback = t.onEscape = function () {
            return e.isFunction(t.callback) ? t.callback.call(this) : !0
        }, g.dialog(t)
    }, g.confirm = function () {
        var t;
        if (t = u("confirm", ["cancel", "confirm"], ["message", "callback"], arguments), t.buttons.cancel.callback = t.onEscape = function () {
                return t.callback.call(this, !1)
            }, t.buttons.confirm.callback = function () {
                return t.callback.call(this, !0)
            }, !e.isFunction(t.callback))throw new Error("confirm requires a callback");
        return g.dialog(t)
    }, g.prompt = function () {
        var t, i, r, o, s, l, u;
        if (o = e(p.form), i = {
                className: "bootbox-prompt",
                buttons: d("cancel", "confirm"),
                value: "",
                inputType: "text"
            }, t = h(c(i, arguments, ["title", "callback"]), ["cancel", "confirm"]), l = t.show === n ? !0 : t.show, t.message = o, t.buttons.cancel.callback = t.onEscape = function () {
                return t.callback.call(this, null)
            }, t.buttons.confirm.callback = function () {
                var n;
                switch (t.inputType) {
                    case"text":
                    case"textarea":
                    case"email":
                    case"select":
                    case"date":
                    case"time":
                    case"number":
                    case"password":
                        n = s.val();
                        break;
                    case"checkbox":
                        var i = s.find("input:checked");
                        n = [], a(i, function (t, i) {
                            n.push(e(i).val())
                        })
                }
                return t.callback.call(this, n)
            }, t.show = !1, !t.title)throw new Error("prompt requires a title");
        if (!e.isFunction(t.callback))throw new Error("prompt requires a callback");
        if (!p.inputs[t.inputType])throw new Error("invalid prompt type");
        switch (s = e(p.inputs[t.inputType]), t.inputType) {
            case"text":
            case"textarea":
            case"email":
            case"date":
            case"time":
            case"number":
            case"password":
                s.val(t.value);
                break;
            case"select":
                var f = {};
                if (u = t.inputOptions || [], !e.isArray(u))throw new Error("Please pass an array of input options");
                if (!u.length)throw new Error("prompt with select requires options");
                a(u, function (t, i) {
                    var r = s;
                    if (i.value === n || i.text === n)throw new Error("given options in wrong format");
                    i.group && (f[i.group] || (f[i.group] = e("<optgroup/>").attr("label", i.group)), r = f[i.group]), r.append("<option value='" + i.value + "'>" + i.text + "</option>")
                }), a(f, function (t, e) {
                    s.append(e)
                }), s.val(t.value);
                break;
            case"checkbox":
                var v = e.isArray(t.value) ? t.value : [t.value];
                if (u = t.inputOptions || [], !u.length)throw new Error("prompt with checkbox requires options");
                if (!u[0].value || !u[0].text)throw new Error("given options in wrong format");
                s = e("<div/>"), a(u, function (n, i) {
                    var r = e(p.inputs[t.inputType]);
                    r.find("input").attr("value", i.value), r.find("label").append(i.text), a(v, function (t, e) {
                        e === i.value && r.find("input").prop("checked", !0)
                    }), s.append(r)
                })
        }
        return t.placeholder && s.attr("placeholder", t.placeholder), t.pattern && s.attr("pattern", t.pattern), t.maxlength && s.attr("maxlength", t.maxlength), o.append(s), o.on("submit", function (t) {
            t.preventDefault(), t.stopPropagation(), r.find(".btn-primary").click()
        }), r = g.dialog(t), r.off("shown.bs.modal"), r.on("shown.bs.modal", function () {
            s.focus()
        }), l === !0 && r.modal("show"), r
    }, g.dialog = function (t) {
        t = s(t);
        var i = e(p.dialog), o = i.find(".modal-dialog"), l = i.find(".modal-body"), c = t.buttons, u = "", d = {onEscape: t.onEscape};
        if (e.fn.modal === n)throw new Error("$.fn.modal is not defined; please double check you have included the Bootstrap JavaScript library. See http://getbootstrap.com/javascript/ for more details.");
        if (a(c, function (t, e) {
                u += "<button data-bb-handler='" + t + "' type='button' class='btn " + e.className + "'>" + e.label + "</button>", d[t] = e.callback
            }), l.find(".bootbox-body").html(t.message), t.animate === !0 && i.addClass("fade"), t.className && i.addClass(t.className), "large" === t.size ? o.addClass("modal-lg") : "small" === t.size && o.addClass("modal-sm"), t.title && l.before(p.header), t.closeButton) {
            var h = e(p.closeButton);
            t.title ? i.find(".modal-header").prepend(h) : h.css("margin-top", "-10px").prependTo(l)
        }
        return t.title && i.find(".modal-title").html(t.title), u.length && (l.after(p.footer), i.find(".modal-footer").html(u)), i.on("hidden.bs.modal", function (t) {
            t.target === this && i.remove()
        }), i.on("shown.bs.modal", function () {
            i.find(".btn-primary:first").focus()
        }), "static" !== t.backdrop && i.on("click.dismiss.bs.modal", function (t) {
            i.children(".modal-backdrop").length && (t.currentTarget = i.children(".modal-backdrop").get(0)), t.target === t.currentTarget && i.trigger("escape.close.bb")
        }), i.on("escape.close.bb", function (t) {
            d.onEscape && r(t, i, d.onEscape)
        }), i.on("click", ".modal-footer button", function (t) {
            var n = e(this).data("bb-handler");
            r(t, i, d[n])
        }), i.on("click", ".bootbox-close-button", function (t) {
            r(t, i, d.onEscape)
        }), i.on("keyup", function (t) {
            27 === t.which && i.trigger("escape.close.bb")
        }), e(t.container).append(i), i.modal({
            backdrop: t.backdrop ? "static" : !1,
            keyboard: !1,
            show: !1
        }), t.show && i.modal("show"), i
    }, g.setDefaults = function () {
        var t = {};
        2 === arguments.length ? t[arguments[0]] = arguments[1] : t = arguments[0], e.extend(f, t)
    }, g.hideAll = function () {
        return e(".bootbox").modal("hide"), g
    };
    var v = {
        bg_BG: {OK: "Ок", CANCEL: "Отказ", CONFIRM: "Потвърждавам"},
        br: {OK: "OK", CANCEL: "Cancelar", CONFIRM: "Sim"},
        cs: {OK: "OK", CANCEL: "Zrušit", CONFIRM: "Potvrdit"},
        da: {OK: "OK", CANCEL: "Annuller", CONFIRM: "Accepter"},
        de: {OK: "OK", CANCEL: "Abbrechen", CONFIRM: "Akzeptieren"},
        el: {OK: "Εντάξει", CANCEL: "Ακύρωση", CONFIRM: "Επιβεβαίωση"},
        en: {OK: "OK", CANCEL: "Cancel", CONFIRM: "OK"},
        es: {OK: "OK", CANCEL: "Cancelar", CONFIRM: "Aceptar"},
        et: {OK: "OK", CANCEL: "Katkesta", CONFIRM: "OK"},
        fa: {OK: "قبول", CANCEL: "لغو", CONFIRM: "تایید"},
        fi: {OK: "OK", CANCEL: "Peruuta", CONFIRM: "OK"},
        fr: {OK: "OK", CANCEL: "Annuler", CONFIRM: "D'accord"},
        he: {OK: "אישור", CANCEL: "ביטול", CONFIRM: "אישור"},
        hu: {OK: "OK", CANCEL: "Mégsem", CONFIRM: "Megerősít"},
        hr: {OK: "OK", CANCEL: "Odustani", CONFIRM: "Potvrdi"},
        id: {OK: "OK", CANCEL: "Batal", CONFIRM: "OK"},
        it: {OK: "OK", CANCEL: "Annulla", CONFIRM: "Conferma"},
        ja: {OK: "OK", CANCEL: "キャンセル", CONFIRM: "確認"},
        lt: {OK: "Gerai", CANCEL: "Atšaukti", CONFIRM: "Patvirtinti"},
        lv: {OK: "Labi", CANCEL: "Atcelt", CONFIRM: "Apstiprināt"},
        nl: {OK: "OK", CANCEL: "Annuleren", CONFIRM: "Accepteren"},
        no: {OK: "OK", CANCEL: "Avbryt", CONFIRM: "OK"},
        pl: {OK: "OK", CANCEL: "Anuluj", CONFIRM: "Potwierdź"},
        pt: {OK: "OK", CANCEL: "Cancelar", CONFIRM: "Confirmar"},
        ru: {OK: "OK", CANCEL: "Отмена", CONFIRM: "Применить"},
        sq: {OK: "OK", CANCEL: "Anulo", CONFIRM: "Prano"},
        sv: {OK: "OK", CANCEL: "Avbryt", CONFIRM: "OK"},
        th: {OK: "ตกลง", CANCEL: "ยกเลิก", CONFIRM: "ยืนยัน"},
        tr: {OK: "Tamam", CANCEL: "İptal", CONFIRM: "Onayla"},
        zh_CN: {OK: "OK", CANCEL: "取消", CONFIRM: "确认"},
        zh_TW: {OK: "OK", CANCEL: "取消", CONFIRM: "確認"}
    };
    return g.addLocale = function (t, n) {
        return e.each(["OK", "CANCEL", "CONFIRM"], function (t, e) {
            if (!n[e])throw new Error("Please supply a translation for '" + e + "'")
        }), v[t] = {OK: n.OK, CANCEL: n.CANCEL, CONFIRM: n.CONFIRM}, g
    }, g.removeLocale = function (t) {
        return delete v[t], g
    }, g.setLocale = function (t) {
        return g.setDefaults("locale", t)
    }, g.init = function (n) {
        return t(n || e)
    }, g
}), !function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : jQuery)
}(function (t) {
    var e = function () {
        if (t && t.fn && t.fn.select2 && t.fn.select2.amd)var e = t.fn.select2.amd;
        var e;
        return function () {
            if (!e || !e.requirejs) {
                e ? n = e : e = {};
                var t, n, i;
                !function (e) {
                    function r(t, e) {
                        return w.call(t, e)
                    }

                    function o(t, e) {
                        var n, i, r, o, a, s, l, c, u, d, h, p = e && e.split("/"), f = y.map, g = f && f["*"] || {};
                        if (t && "." === t.charAt(0))if (e) {
                            for (p = p.slice(0, p.length - 1), t = t.split("/"), a = t.length - 1, y.nodeIdCompat && C.test(t[a]) && (t[a] = t[a].replace(C, "")), t = p.concat(t), u = 0; u < t.length; u += 1)if (h = t[u], "." === h)t.splice(u, 1), u -= 1; else if (".." === h) {
                                if (1 === u && (".." === t[2] || ".." === t[0]))break;
                                u > 0 && (t.splice(u - 1, 2), u -= 2)
                            }
                            t = t.join("/")
                        } else 0 === t.indexOf("./") && (t = t.substring(2));
                        if ((p || g) && f) {
                            for (n = t.split("/"), u = n.length; u > 0; u -= 1) {
                                if (i = n.slice(0, u).join("/"), p)for (d = p.length; d > 0; d -= 1)if (r = f[p.slice(0, d).join("/")], r && (r = r[i])) {
                                    o = r, s = u;
                                    break
                                }
                                if (o)break;
                                !l && g && g[i] && (l = g[i], c = u)
                            }
                            !o && l && (o = l, s = c), o && (n.splice(0, s, o), t = n.join("/"))
                        }
                        return t
                    }

                    function a(t, n) {
                        return function () {
                            return p.apply(e, x.call(arguments, 0).concat([t, n]))
                        }
                    }

                    function s(t) {
                        return function (e) {
                            return o(e, t)
                        }
                    }

                    function l(t) {
                        return function (e) {
                            v[t] = e
                        }
                    }

                    function c(t) {
                        if (r(m, t)) {
                            var n = m[t];
                            delete m[t], b[t] = !0, h.apply(e, n)
                        }
                        if (!r(v, t) && !r(b, t))throw new Error("No " + t);
                        return v[t]
                    }

                    function u(t) {
                        var e, n = t ? t.indexOf("!") : -1;
                        return n > -1 && (e = t.substring(0, n), t = t.substring(n + 1, t.length)), [e, t]
                    }

                    function d(t) {
                        return function () {
                            return y && y.config && y.config[t] || {}
                        }
                    }

                    var h, p, f, g, v = {}, m = {}, y = {}, b = {}, w = Object.prototype.hasOwnProperty, x = [].slice, C = /\.js$/;
                    f = function (t, e) {
                        var n, i = u(t), r = i[0];
                        return t = i[1], r && (r = o(r, e), n = c(r)), r ? t = n && n.normalize ? n.normalize(t, s(e)) : o(t, e) : (t = o(t, e), i = u(t), r = i[0], t = i[1], r && (n = c(r))), {
                            f: r ? r + "!" + t : t,
                            n: t,
                            pr: r,
                            p: n
                        }
                    }, g = {
                        require: function (t) {
                            return a(t)
                        }, exports: function (t) {
                            var e = v[t];
                            return "undefined" != typeof e ? e : v[t] = {}
                        }, module: function (t) {
                            return {id: t, uri: "", exports: v[t], config: d(t)}
                        }
                    }, h = function (t, n, i, o) {
                        var s, u, d, h, p, y, w = [], x = typeof i;
                        if (o = o || t, "undefined" === x || "function" === x) {
                            for (n = !n.length && i.length ? ["require", "exports", "module"] : n, p = 0; p < n.length; p += 1)if (h = f(n[p], o), u = h.f, "require" === u)w[p] = g.require(t); else if ("exports" === u)w[p] = g.exports(t), y = !0; else if ("module" === u)s = w[p] = g.module(t); else if (r(v, u) || r(m, u) || r(b, u))w[p] = c(u); else {
                                if (!h.p)throw new Error(t + " missing " + u);
                                h.p.load(h.n, a(o, !0), l(u), {}), w[p] = v[u]
                            }
                            d = i ? i.apply(v[t], w) : void 0, t && (s && s.exports !== e && s.exports !== v[t] ? v[t] = s.exports : d === e && y || (v[t] = d))
                        } else t && (v[t] = i)
                    }, t = n = p = function (t, n, i, r, o) {
                        if ("string" == typeof t)return g[t] ? g[t](n) : c(f(t, n).f);
                        if (!t.splice) {
                            if (y = t, y.deps && p(y.deps, y.callback), !n)return;
                            n.splice ? (t = n, n = i, i = null) : t = e
                        }
                        return n = n || function () {
                        }, "function" == typeof i && (i = r, r = o), r ? h(e, t, n, i) : setTimeout(function () {
                            h(e, t, n, i)
                        }, 4), p
                    }, p.config = function (t) {
                        return p(t)
                    }, t._defined = v, i = function (t, e, n) {
                        e.splice || (n = e, e = []), r(v, t) || r(m, t) || (m[t] = [t, e, n])
                    }, i.amd = {jQuery: !0}
                }(), e.requirejs = t, e.require = n, e.define = i
            }
        }(), e.define("almond", function () {
        }), e.define("jquery", [], function () {
            var e = t || $;
            return null == e && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), e
        }), e.define("select2/utils", ["jquery"], function (t) {
            function e(t) {
                var e = t.prototype, n = [];
                for (var i in e) {
                    var r = e[i];
                    "function" == typeof r && "constructor" !== i && n.push(i)
                }
                return n
            }

            var n = {};
            n.Extend = function (t, e) {
                function n() {
                    this.constructor = t
                }

                var i = {}.hasOwnProperty;
                for (var r in e)i.call(e, r) && (t[r] = e[r]);
                return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
            }, n.Decorate = function (t, n) {
                function i() {
                    var e = Array.prototype.unshift, i = n.prototype.constructor.length, r = t.prototype.constructor;
                    i > 0 && (e.call(arguments, t.prototype.constructor), r = n.prototype.constructor), r.apply(this, arguments)
                }

                function r() {
                    this.constructor = i
                }

                var o = e(n), a = e(t);
                n.displayName = t.displayName, i.prototype = new r;
                for (var s = 0; s < a.length; s++) {
                    var l = a[s];
                    i.prototype[l] = t.prototype[l]
                }
                for (var c = (function (t) {
                    var e = function () {
                    };
                    t in i.prototype && (e = i.prototype[t]);
                    var r = n.prototype[t];
                    return function () {
                        var t = Array.prototype.unshift;
                        return t.call(arguments, e), r.apply(this, arguments)
                    }
                }), u = 0; u < o.length; u++) {
                    var d = o[u];
                    i.prototype[d] = c(d)
                }
                return i
            };
            var i = function () {
                this.listeners = {}
            };
            return i.prototype.on = function (t, e) {
                this.listeners = this.listeners || {}, t in this.listeners ? this.listeners[t].push(e) : this.listeners[t] = [e]
            }, i.prototype.trigger = function (t) {
                var e = Array.prototype.slice;
                this.listeners = this.listeners || {}, t in this.listeners && this.invoke(this.listeners[t], e.call(arguments, 1)), "*"in this.listeners && this.invoke(this.listeners["*"], arguments)
            }, i.prototype.invoke = function (t, e) {
                for (var n = 0, i = t.length; i > n; n++)t[n].apply(this, e)
            }, n.Observable = i, n.generateChars = function (t) {
                for (var e = "", n = 0; t > n; n++) {
                    var i = Math.floor(36 * Math.random());
                    e += i.toString(36)
                }
                return e
            }, n.bind = function (t, e) {
                return function () {
                    t.apply(e, arguments)
                }
            }, n._convertData = function (t) {
                for (var e in t) {
                    var n = e.split("-"), i = t;
                    if (1 !== n.length) {
                        for (var r = 0; r < n.length; r++) {
                            var o = n[r];
                            o = o.substring(0, 1).toLowerCase() + o.substring(1), o in i || (i[o] = {}), r == n.length - 1 && (i[o] = t[e]), i = i[o]
                        }
                        delete t[e]
                    }
                }
                return t
            }, n.hasScroll = function (e, n) {
                var i = t(n), r = n.style.overflowX, o = n.style.overflowY;
                return r !== o || "hidden" !== o && "visible" !== o ? "scroll" === r || "scroll" === o ? !0 : i.innerHeight() < n.scrollHeight || i.innerWidth() < n.scrollWidth : !1
            }, n.escapeMarkup = function (t) {
                var e = {
                    "\\": "&#92;",
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;",
                    "/": "&#47;"
                };
                return "string" != typeof t ? t : String(t).replace(/[&<>"'\/\\]/g, function (t) {
                    return e[t]
                })
            }, n.appendMany = function (e, n) {
                if ("1.7" === t.fn.jquery.substr(0, 3)) {
                    var i = t();
                    t.map(n, function (t) {
                        i = i.add(t)
                    }), n = i
                }
                e.append(n)
            }, n
        }), e.define("select2/results", ["jquery", "./utils"], function (t, e) {
            function n(t, e, i) {
                this.$element = t, this.data = i, this.options = e, n.__super__.constructor.call(this)
            }

            return e.Extend(n, e.Observable), n.prototype.render = function () {
                var e = t('<ul class="select2-results__options" role="tree"></ul>');
                return this.options.get("multiple") && e.attr("aria-multiselectable", "true"), this.$results = e, e
            }, n.prototype.clear = function () {
                this.$results.empty()
            }, n.prototype.displayMessage = function (e) {
                var n = this.options.get("escapeMarkup");
                this.clear(), this.hideLoading();
                var i = t('<li role="treeitem" class="select2-results__option"></li>'), r = this.options.get("translations").get(e.message);
                i.append(n(r(e.args))), this.$results.append(i)
            }, n.prototype.append = function (t) {
                this.hideLoading();
                var e = [];
                if (null == t.results || 0 === t.results.length)return void(0 === this.$results.children().length && this.trigger("results:message", {message: "noResults"}));
                t.results = this.sort(t.results);
                for (var n = 0; n < t.results.length; n++) {
                    var i = t.results[n], r = this.option(i);
                    e.push(r)
                }
                this.$results.append(e)
            }, n.prototype.position = function (t, e) {
                var n = e.find(".select2-results");

                n.append(t)
            }, n.prototype.sort = function (t) {
                var e = this.options.get("sorter");
                return e(t)
            }, n.prototype.setClasses = function () {
                var e = this;
                this.data.current(function (n) {
                    var i = t.map(n, function (t) {
                        return t.id.toString()
                    }), r = e.$results.find(".select2-results__option[aria-selected]");
                    r.each(function () {
                        var e = t(this), n = t.data(this, "data"), r = "" + n.id;
                        null != n.element && n.element.selected || null == n.element && t.inArray(r, i) > -1 ? e.attr("aria-selected", "true") : e.attr("aria-selected", "false")
                    });
                    var o = r.filter("[aria-selected=true]");
                    o.length > 0 ? o.first().trigger("mouseenter") : r.first().trigger("mouseenter")
                })
            }, n.prototype.showLoading = function (t) {
                this.hideLoading();
                var e = this.options.get("translations").get("searching"), n = {
                    disabled: !0,
                    loading: !0,
                    text: e(t)
                }, i = this.option(n);
                i.className += " loading-results", this.$results.prepend(i)
            }, n.prototype.hideLoading = function () {
                this.$results.find(".loading-results").remove()
            }, n.prototype.option = function (e) {
                var n = document.createElement("li");
                n.className = "select2-results__option";
                var i = {role: "treeitem", "aria-selected": "false"};
                e.disabled && (delete i["aria-selected"], i["aria-disabled"] = "true"), null == e.id && delete i["aria-selected"], null != e._resultId && (n.id = e._resultId), e.title && (n.title = e.title), e.children && (i.role = "group", i["aria-label"] = e.text, delete i["aria-selected"]);
                for (var r in i) {
                    var o = i[r];
                    n.setAttribute(r, o)
                }
                if (e.children) {
                    var a = t(n), s = document.createElement("strong");
                    s.className = "select2-results__group", t(s), this.template(e, s);
                    for (var l = [], c = 0; c < e.children.length; c++) {
                        var u = e.children[c], d = this.option(u);
                        l.push(d)
                    }
                    var h = t("<ul></ul>", {"class": "select2-results__options select2-results__options--nested"});
                    h.append(l), a.append(s), a.append(h)
                } else this.template(e, n);
                return t.data(n, "data", e), n
            }, n.prototype.bind = function (e) {
                var n = this, i = e.id + "-results";
                this.$results.attr("id", i), e.on("results:all", function (t) {
                    n.clear(), n.append(t.data), e.isOpen() && n.setClasses()
                }), e.on("results:append", function (t) {
                    n.append(t.data), e.isOpen() && n.setClasses()
                }), e.on("query", function (t) {
                    n.showLoading(t)
                }), e.on("select", function () {
                    e.isOpen() && n.setClasses()
                }), e.on("unselect", function () {
                    e.isOpen() && n.setClasses()
                }), e.on("open", function () {
                    n.$results.attr("aria-expanded", "true"), n.$results.attr("aria-hidden", "false"), n.setClasses(), n.ensureHighlightVisible()
                }), e.on("close", function () {
                    n.$results.attr("aria-expanded", "false"), n.$results.attr("aria-hidden", "true"), n.$results.removeAttr("aria-activedescendant")
                }), e.on("results:toggle", function () {
                    var t = n.getHighlightedResults();
                    0 !== t.length && t.trigger("mouseup")
                }), e.on("results:select", function () {
                    var t = n.getHighlightedResults();
                    if (0 !== t.length) {
                        var e = t.data("data");
                        "true" == t.attr("aria-selected") ? n.trigger("close") : n.trigger("select", {data: e})
                    }
                }), e.on("results:previous", function () {
                    var t = n.getHighlightedResults(), e = n.$results.find("[aria-selected]"), i = e.index(t);
                    if (0 !== i) {
                        var r = i - 1;
                        0 === t.length && (r = 0);
                        var o = e.eq(r);
                        o.trigger("mouseenter");
                        var a = n.$results.offset().top, s = o.offset().top, l = n.$results.scrollTop() + (s - a);
                        0 === r ? n.$results.scrollTop(0) : 0 > s - a && n.$results.scrollTop(l)
                    }
                }), e.on("results:next", function () {
                    var t = n.getHighlightedResults(), e = n.$results.find("[aria-selected]"), i = e.index(t), r = i + 1;
                    if (!(r >= e.length)) {
                        var o = e.eq(r);
                        o.trigger("mouseenter");
                        var a = n.$results.offset().top + n.$results.outerHeight(!1), s = o.offset().top + o.outerHeight(!1), l = n.$results.scrollTop() + s - a;
                        0 === r ? n.$results.scrollTop(0) : s > a && n.$results.scrollTop(l)
                    }
                }), e.on("results:focus", function (t) {
                    t.element.addClass("select2-results__option--highlighted")
                }), e.on("results:message", function (t) {
                    n.displayMessage(t)
                }), t.fn.mousewheel && this.$results.on("mousewheel", function (t) {
                    var e = n.$results.scrollTop(), i = n.$results.get(0).scrollHeight - n.$results.scrollTop() + t.deltaY, r = t.deltaY > 0 && e - t.deltaY <= 0, o = t.deltaY < 0 && i <= n.$results.height();
                    r ? (n.$results.scrollTop(0), t.preventDefault(), t.stopPropagation()) : o && (n.$results.scrollTop(n.$results.get(0).scrollHeight - n.$results.height()), t.preventDefault(), t.stopPropagation())
                }), this.$results.on("mouseup", ".select2-results__option[aria-selected]", function (e) {
                    var i = t(this), r = i.data("data");
                    return "true" === i.attr("aria-selected") ? void(n.options.get("multiple") ? n.trigger("unselect", {
                        originalEvent: e,
                        data: r
                    }) : n.trigger("close")) : void n.trigger("select", {originalEvent: e, data: r})
                }), this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function () {
                    var e = t(this).data("data");
                    n.getHighlightedResults().removeClass("select2-results__option--highlighted"), n.trigger("results:focus", {
                        data: e,
                        element: t(this)
                    })
                })
            }, n.prototype.getHighlightedResults = function () {
                var t = this.$results.find(".select2-results__option--highlighted");
                return t
            }, n.prototype.destroy = function () {
                this.$results.remove()
            }, n.prototype.ensureHighlightVisible = function () {
                var t = this.getHighlightedResults();
                if (0 !== t.length) {
                    var e = this.$results.find("[aria-selected]"), n = e.index(t), i = this.$results.offset().top, r = t.offset().top, o = this.$results.scrollTop() + (r - i), a = r - i;
                    o -= 2 * t.outerHeight(!1), 2 >= n ? this.$results.scrollTop(0) : (a > this.$results.outerHeight() || 0 > a) && this.$results.scrollTop(o)
                }
            }, n.prototype.template = function (e, n) {
                var i = this.options.get("templateResult"), r = this.options.get("escapeMarkup"), o = i(e);
                null == o ? n.style.display = "none" : "string" == typeof o ? n.innerHTML = r(o) : t(n).append(o)
            }, n
        }), e.define("select2/keys", [], function () {
            var t = {
                BACKSPACE: 8,
                TAB: 9,
                ENTER: 13,
                SHIFT: 16,
                CTRL: 17,
                ALT: 18,
                ESC: 27,
                SPACE: 32,
                PAGE_UP: 33,
                PAGE_DOWN: 34,
                END: 35,
                HOME: 36,
                LEFT: 37,
                UP: 38,
                RIGHT: 39,
                DOWN: 40,
                DELETE: 46
            };
            return t
        }), e.define("select2/selection/base", ["jquery", "../utils", "../keys"], function (t, e, n) {
            function i(t, e) {
                this.$element = t, this.options = e, i.__super__.constructor.call(this)
            }

            return e.Extend(i, e.Observable), i.prototype.render = function () {
                var e = t('<span class="select2-selection" role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-expanded="false"></span>');
                return this._tabindex = 0, null != this.$element.data("old-tabindex") ? this._tabindex = this.$element.data("old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), e.attr("title", this.$element.attr("title")), e.attr("tabindex", this._tabindex), this.$selection = e, e
            }, i.prototype.bind = function (t) {
                var e = this, i = (t.id + "-container", t.id + "-results");
                this.container = t, this.$selection.on("focus", function (t) {
                    e.trigger("focus", t)
                }), this.$selection.on("blur", function (t) {
                    e.trigger("blur", t)
                }), this.$selection.on("keydown", function (t) {
                    e.trigger("keypress", t), t.which === n.SPACE && t.preventDefault()
                }), t.on("results:focus", function (t) {
                    e.$selection.attr("aria-activedescendant", t.data._resultId)
                }), t.on("selection:update", function (t) {
                    e.update(t.data)
                }), t.on("open", function () {
                    e.$selection.attr("aria-expanded", "true"), e.$selection.attr("aria-owns", i), e._attachCloseHandler(t)
                }), t.on("close", function () {
                    e.$selection.attr("aria-expanded", "false"), e.$selection.removeAttr("aria-activedescendant"), e.$selection.removeAttr("aria-owns"), e.$selection.focus(), e._detachCloseHandler(t)
                }), t.on("enable", function () {
                    e.$selection.attr("tabindex", e._tabindex)
                }), t.on("disable", function () {
                    e.$selection.attr("tabindex", "-1")
                })
            }, i.prototype._attachCloseHandler = function (e) {
                t(document.body).on("mousedown.select2." + e.id, function (e) {
                    var n = t(e.target), i = n.closest(".select2"), r = t(".select2.select2-container--open");
                    r.each(function () {
                        var e = t(this);
                        if (this != i[0]) {
                            var n = e.data("element");
                            n.select2("close")
                        }
                    })
                })
            }, i.prototype._detachCloseHandler = function (e) {
                t(document.body).off("mousedown.select2." + e.id)
            }, i.prototype.position = function (t, e) {
                var n = e.find(".selection");
                n.append(t)
            }, i.prototype.destroy = function () {
                this._detachCloseHandler(this.container)
            }, i.prototype.update = function () {
                throw new Error("The `update` method must be defined in child classes.")
            }, i
        }), e.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function (t, e, n) {
            function i() {
                i.__super__.constructor.apply(this, arguments)
            }

            return n.Extend(i, e), i.prototype.render = function () {
                var t = i.__super__.render.call(this);
                return t.addClass("select2-selection--single"), t.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), t
            }, i.prototype.bind = function (t) {
                var e = this;
                i.__super__.bind.apply(this, arguments);
                var n = t.id + "-container";
                this.$selection.find(".select2-selection__rendered").attr("id", n), this.$selection.attr("aria-labelledby", n), this.$selection.on("mousedown", function (t) {
                    1 === t.which && e.trigger("toggle", {originalEvent: t})
                }), this.$selection.on("focus", function () {
                }), this.$selection.on("blur", function () {
                }), t.on("selection:update", function (t) {
                    e.update(t.data)
                })
            }, i.prototype.clear = function () {
                this.$selection.find(".select2-selection__rendered").empty()
            }, i.prototype.display = function (t) {
                var e = this.options.get("templateSelection"), n = this.options.get("escapeMarkup");
                return n(e(t))
            }, i.prototype.selectionContainer = function () {
                return t("<span></span>")
            }, i.prototype.update = function (t) {
                if (0 === t.length)return void this.clear();
                var e = t[0], n = this.display(e), i = this.$selection.find(".select2-selection__rendered");
                i.empty().append(n), i.prop("title", e.title || e.text)
            }, i
        }), e.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function (t, e, n) {
            function i() {
                i.__super__.constructor.apply(this, arguments)
            }

            return n.Extend(i, e), i.prototype.render = function () {
                var t = i.__super__.render.call(this);
                return t.addClass("select2-selection--multiple"), t.html('<ul class="select2-selection__rendered"></ul>'), t
            }, i.prototype.bind = function () {
                var e = this;
                i.__super__.bind.apply(this, arguments), this.$selection.on("click", function (t) {
                    e.trigger("toggle", {originalEvent: t})
                }), this.$selection.on("click", ".select2-selection__choice__remove", function (n) {
                    var i = t(this), r = i.parent(), o = r.data("data");
                    e.trigger("unselect", {originalEvent: n, data: o})
                })
            }, i.prototype.clear = function () {
                this.$selection.find(".select2-selection__rendered").empty()
            }, i.prototype.display = function (t) {
                var e = this.options.get("templateSelection"), n = this.options.get("escapeMarkup");
                return n(e(t))
            }, i.prototype.selectionContainer = function () {
                var e = t('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>');
                return e
            }, i.prototype.update = function (t) {
                if (this.clear(), 0 !== t.length) {
                    for (var e = [], i = 0; i < t.length; i++) {
                        var r = t[i], o = this.display(r), a = this.selectionContainer();
                        a.append(o), a.prop("title", r.title || r.text), a.data("data", r), e.push(a)
                    }
                    var s = this.$selection.find(".select2-selection__rendered");
                    n.appendMany(s, e)
                }
            }, i
        }), e.define("select2/selection/placeholder", ["../utils"], function () {
            function t(t, e, n) {
                this.placeholder = this.normalizePlaceholder(n.get("placeholder")), t.call(this, e, n)
            }

            return t.prototype.normalizePlaceholder = function (t, e) {
                return "string" == typeof e && (e = {id: "", text: e}), e
            }, t.prototype.createPlaceholder = function (t, e) {
                var n = this.selectionContainer();
                return n.html(this.display(e)), n.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), n
            }, t.prototype.update = function (t, e) {
                var n = 1 == e.length && e[0].id != this.placeholder.id, i = e.length > 1;
                if (i || n)return t.call(this, e);
                this.clear();
                var r = this.createPlaceholder(this.placeholder);
                this.$selection.find(".select2-selection__rendered").append(r)
            }, t
        }), e.define("select2/selection/allowClear", ["jquery", "../keys"], function (t, e) {
            function n() {
            }

            return n.prototype.bind = function (t, e, n) {
                var i = this;
                t.call(this, e, n), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", function (t) {
                    i._handleClear(t)
                }), e.on("keypress", function (t) {
                    i._handleKeyboardClear(t, e)
                })
            }, n.prototype._handleClear = function (t, e) {
                if (!this.options.get("disabled")) {
                    var n = this.$selection.find(".select2-selection__clear");
                    if (0 !== n.length) {
                        e.stopPropagation();
                        for (var i = n.data("data"), r = 0; r < i.length; r++) {
                            var o = {data: i[r]};
                            if (this.trigger("unselect", o), o.prevented)return
                        }
                        this.$element.val(this.placeholder.id).trigger("change"), this.trigger("toggle")
                    }
                }
            }, n.prototype._handleKeyboardClear = function (t, n, i) {
                i.isOpen() || (n.which == e.DELETE || n.which == e.BACKSPACE) && this._handleClear(n)
            }, n.prototype.update = function (e, n) {
                if (e.call(this, n), !(this.$selection.find(".select2-selection__placeholder").length > 0 || 0 === n.length)) {
                    var i = t('<span class="select2-selection__clear">&times;</span>');
                    i.data("data", n), this.$selection.find(".select2-selection__rendered").prepend(i)
                }
            }, n
        }), e.define("select2/selection/search", ["jquery", "../utils", "../keys"], function (t, e, n) {
            function i(t, e, n) {
                t.call(this, e, n)
            }

            return i.prototype.render = function (e) {
                var n = t('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></li>');
                this.$searchContainer = n, this.$search = n.find("input");
                var i = e.call(this);
                return i
            }, i.prototype.bind = function (t, e, i) {
                var r = this;
                t.call(this, e, i), e.on("open", function () {
                    r.$search.attr("tabindex", 0), r.$search.focus()
                }), e.on("close", function () {
                    r.$search.attr("tabindex", -1), r.$search.val(""), r.$search.focus()
                }), e.on("enable", function () {
                    r.$search.prop("disabled", !1)
                }), e.on("disable", function () {
                    r.$search.prop("disabled", !0)
                }), this.$selection.on("focusin", ".select2-search--inline", function (t) {
                    r.trigger("focus", t)
                }), this.$selection.on("focusout", ".select2-search--inline", function (t) {
                    r.trigger("blur", t)
                }), this.$selection.on("keydown", ".select2-search--inline", function (t) {
                    t.stopPropagation(), r.trigger("keypress", t), r._keyUpPrevented = t.isDefaultPrevented();
                    var e = t.which;
                    if (e === n.BACKSPACE && "" === r.$search.val()) {
                        var i = r.$searchContainer.prev(".select2-selection__choice");
                        if (i.length > 0) {
                            var o = i.data("data");
                            r.searchRemoveChoice(o), t.preventDefault()
                        }
                    }
                }), this.$selection.on("input", ".select2-search--inline", function () {
                    r.$selection.off("keyup.search")
                }), this.$selection.on("keyup.search input", ".select2-search--inline", function (t) {
                    r.handleSearch(t)
                })
            }, i.prototype.createPlaceholder = function (t, e) {
                this.$search.attr("placeholder", e.text)
            }, i.prototype.update = function (t, e) {
                this.$search.attr("placeholder", ""), t.call(this, e), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), this.resizeSearch()
            }, i.prototype.handleSearch = function () {
                if (this.resizeSearch(), !this._keyUpPrevented) {
                    var t = this.$search.val();
                    this.trigger("query", {term: t})
                }
                this._keyUpPrevented = !1
            }, i.prototype.searchRemoveChoice = function (t, e) {
                this.trigger("unselect", {data: e}), this.trigger("open"), this.$search.val(e.text + " ")
            }, i.prototype.resizeSearch = function () {
                this.$search.css("width", "25px");
                var t = "";
                if ("" !== this.$search.attr("placeholder"))t = this.$selection.find(".select2-selection__rendered").innerWidth(); else {
                    var e = this.$search.val().length + 1;
                    t = .75 * e + "em"
                }
                this.$search.css("width", t)
            }, i
        }), e.define("select2/selection/eventRelay", ["jquery"], function (t) {
            function e() {
            }

            return e.prototype.bind = function (e, n, i) {
                var r = this, o = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting"], a = ["opening", "closing", "selecting", "unselecting"];
                e.call(this, n, i), n.on("*", function (e, n) {
                    if (-1 !== t.inArray(e, o)) {
                        n = n || {};
                        var i = t.Event("select2:" + e, {params: n});
                        r.$element.trigger(i), -1 !== t.inArray(e, a) && (n.prevented = i.isDefaultPrevented())
                    }
                })
            }, e
        }), e.define("select2/translation", ["jquery", "require"], function (t, e) {
            function n(t) {
                this.dict = t || {}
            }

            return n.prototype.all = function () {
                return this.dict
            }, n.prototype.get = function (t) {
                return this.dict[t]
            }, n.prototype.extend = function (e) {
                this.dict = t.extend({}, e.all(), this.dict)
            }, n._cache = {}, n.loadPath = function (t) {
                if (!(t in n._cache)) {
                    var i = e(t);
                    n._cache[t] = i
                }
                return new n(n._cache[t])
            }, n
        }), e.define("select2/diacritics", [], function () {
            var t = {
                "Ⓐ": "A",
                "Ａ": "A",
                "À": "A",
                "Á": "A",
                "Â": "A",
                "Ầ": "A",
                "Ấ": "A",
                "Ẫ": "A",
                "Ẩ": "A",
                "Ã": "A",
                "Ā": "A",
                "Ă": "A",
                "Ằ": "A",
                "Ắ": "A",
                "Ẵ": "A",
                "Ẳ": "A",
                "Ȧ": "A",
                "Ǡ": "A",
                "Ä": "A",
                "Ǟ": "A",
                "Ả": "A",
                "Å": "A",
                "Ǻ": "A",
                "Ǎ": "A",
                "Ȁ": "A",
                "Ȃ": "A",
                "Ạ": "A",
                "Ậ": "A",
                "Ặ": "A",
                "Ḁ": "A",
                "Ą": "A",
                "Ⱥ": "A",
                "Ɐ": "A",
                "Ꜳ": "AA",
                "Æ": "AE",
                "Ǽ": "AE",
                "Ǣ": "AE",
                "Ꜵ": "AO",
                "Ꜷ": "AU",
                "Ꜹ": "AV",
                "Ꜻ": "AV",
                "Ꜽ": "AY",
                "Ⓑ": "B",
                "Ｂ": "B",
                "Ḃ": "B",
                "Ḅ": "B",
                "Ḇ": "B",
                "Ƀ": "B",
                "Ƃ": "B",
                "Ɓ": "B",
                "Ⓒ": "C",
                "Ｃ": "C",
                "Ć": "C",
                "Ĉ": "C",
                "Ċ": "C",
                "Č": "C",
                "Ç": "C",
                "Ḉ": "C",
                "Ƈ": "C",
                "Ȼ": "C",
                "Ꜿ": "C",
                "Ⓓ": "D",
                "Ｄ": "D",
                "Ḋ": "D",
                "Ď": "D",
                "Ḍ": "D",
                "Ḑ": "D",
                "Ḓ": "D",
                "Ḏ": "D",
                "Đ": "D",
                "Ƌ": "D",
                "Ɗ": "D",
                "Ɖ": "D",
                "Ꝺ": "D",
                "Ǳ": "DZ",
                "Ǆ": "DZ",
                "ǲ": "Dz",
                "ǅ": "Dz",
                "Ⓔ": "E",
                "Ｅ": "E",
                "È": "E",
                "É": "E",
                "Ê": "E",
                "Ề": "E",
                "Ế": "E",
                "Ễ": "E",
                "Ể": "E",
                "Ẽ": "E",
                "Ē": "E",
                "Ḕ": "E",
                "Ḗ": "E",
                "Ĕ": "E",
                "Ė": "E",
                "Ë": "E",
                "Ẻ": "E",
                "Ě": "E",
                "Ȅ": "E",
                "Ȇ": "E",
                "Ẹ": "E",
                "Ệ": "E",
                "Ȩ": "E",
                "Ḝ": "E",
                "Ę": "E",
                "Ḙ": "E",
                "Ḛ": "E",
                "Ɛ": "E",
                "Ǝ": "E",
                "Ⓕ": "F",
                "Ｆ": "F",
                "Ḟ": "F",
                "Ƒ": "F",
                "Ꝼ": "F",
                "Ⓖ": "G",
                "Ｇ": "G",
                "Ǵ": "G",
                "Ĝ": "G",
                "Ḡ": "G",
                "Ğ": "G",
                "Ġ": "G",
                "Ǧ": "G",
                "Ģ": "G",
                "Ǥ": "G",
                "Ɠ": "G",
                "Ꞡ": "G",
                "Ᵹ": "G",
                "Ꝿ": "G",
                "Ⓗ": "H",
                "Ｈ": "H",
                "Ĥ": "H",
                "Ḣ": "H",
                "Ḧ": "H",
                "Ȟ": "H",
                "Ḥ": "H",
                "Ḩ": "H",
                "Ḫ": "H",
                "Ħ": "H",
                "Ⱨ": "H",
                "Ⱶ": "H",
                "Ɥ": "H",
                "Ⓘ": "I",
                "Ｉ": "I",
                "Ì": "I",
                "Í": "I",
                "Î": "I",
                "Ĩ": "I",
                "Ī": "I",
                "Ĭ": "I",
                "İ": "I",
                "Ï": "I",
                "Ḯ": "I",
                "Ỉ": "I",
                "Ǐ": "I",
                "Ȉ": "I",
                "Ȋ": "I",
                "Ị": "I",
                "Į": "I",
                "Ḭ": "I",
                "Ɨ": "I",
                "Ⓙ": "J",
                "Ｊ": "J",
                "Ĵ": "J",
                "Ɉ": "J",
                "Ⓚ": "K",
                "Ｋ": "K",
                "Ḱ": "K",
                "Ǩ": "K",
                "Ḳ": "K",
                "Ķ": "K",
                "Ḵ": "K",
                "Ƙ": "K",
                "Ⱪ": "K",
                "Ꝁ": "K",
                "Ꝃ": "K",
                "Ꝅ": "K",
                "Ꞣ": "K",
                "Ⓛ": "L",
                "Ｌ": "L",
                "Ŀ": "L",
                "Ĺ": "L",
                "Ľ": "L",
                "Ḷ": "L",
                "Ḹ": "L",
                "Ļ": "L",
                "Ḽ": "L",
                "Ḻ": "L",
                "Ł": "L",
                "Ƚ": "L",
                "Ɫ": "L",
                "Ⱡ": "L",
                "Ꝉ": "L",
                "Ꝇ": "L",
                "Ꞁ": "L",
                "Ǉ": "LJ",
                "ǈ": "Lj",
                "Ⓜ": "M",
                "Ｍ": "M",
                "Ḿ": "M",
                "Ṁ": "M",
                "Ṃ": "M",
                "Ɱ": "M",
                "Ɯ": "M",
                "Ⓝ": "N",
                "Ｎ": "N",
                "Ǹ": "N",
                "Ń": "N",
                "Ñ": "N",
                "Ṅ": "N",
                "Ň": "N",
                "Ṇ": "N",
                "Ņ": "N",
                "Ṋ": "N",
                "Ṉ": "N",
                "Ƞ": "N",
                "Ɲ": "N",
                "Ꞑ": "N",
                "Ꞥ": "N",
                "Ǌ": "NJ",
                "ǋ": "Nj",
                "Ⓞ": "O",
                "Ｏ": "O",
                "Ò": "O",
                "Ó": "O",
                "Ô": "O",
                "Ồ": "O",
                "Ố": "O",
                "Ỗ": "O",
                "Ổ": "O",
                "Õ": "O",
                "Ṍ": "O",
                "Ȭ": "O",
                "Ṏ": "O",
                "Ō": "O",
                "Ṑ": "O",
                "Ṓ": "O",
                "Ŏ": "O",
                "Ȯ": "O",
                "Ȱ": "O",
                "Ö": "O",
                "Ȫ": "O",
                "Ỏ": "O",
                "Ő": "O",
                "Ǒ": "O",
                "Ȍ": "O",
                "Ȏ": "O",
                "Ơ": "O",
                "Ờ": "O",
                "Ớ": "O",
                "Ỡ": "O",
                "Ở": "O",
                "Ợ": "O",
                "Ọ": "O",
                "Ộ": "O",
                "Ǫ": "O",
                "Ǭ": "O",
                "Ø": "O",
                "Ǿ": "O",
                "Ɔ": "O",
                "Ɵ": "O",
                "Ꝋ": "O",
                "Ꝍ": "O",
                "Ƣ": "OI",
                "Ꝏ": "OO",
                "Ȣ": "OU",
                "Ⓟ": "P",
                "Ｐ": "P",
                "Ṕ": "P",
                "Ṗ": "P",
                "Ƥ": "P",
                "Ᵽ": "P",
                "Ꝑ": "P",
                "Ꝓ": "P",
                "Ꝕ": "P",
                "Ⓠ": "Q",
                "Ｑ": "Q",
                "Ꝗ": "Q",
                "Ꝙ": "Q",
                "Ɋ": "Q",
                "Ⓡ": "R",
                "Ｒ": "R",
                "Ŕ": "R",
                "Ṙ": "R",
                "Ř": "R",
                "Ȑ": "R",
                "Ȓ": "R",
                "Ṛ": "R",
                "Ṝ": "R",
                "Ŗ": "R",
                "Ṟ": "R",
                "Ɍ": "R",
                "Ɽ": "R",
                "Ꝛ": "R",
                "Ꞧ": "R",
                "Ꞃ": "R",
                "Ⓢ": "S",
                "Ｓ": "S",
                "ẞ": "S",
                "Ś": "S",
                "Ṥ": "S",
                "Ŝ": "S",
                "Ṡ": "S",
                "Š": "S",
                "Ṧ": "S",
                "Ṣ": "S",
                "Ṩ": "S",
                "Ș": "S",
                "Ş": "S",
                "Ȿ": "S",
                "Ꞩ": "S",
                "Ꞅ": "S",
                "Ⓣ": "T",
                "Ｔ": "T",
                "Ṫ": "T",
                "Ť": "T",
                "Ṭ": "T",
                "Ț": "T",
                "Ţ": "T",
                "Ṱ": "T",
                "Ṯ": "T",
                "Ŧ": "T",
                "Ƭ": "T",
                "Ʈ": "T",
                "Ⱦ": "T",
                "Ꞇ": "T",
                "Ꜩ": "TZ",
                "Ⓤ": "U",
                "Ｕ": "U",
                "Ù": "U",
                "Ú": "U",
                "Û": "U",
                "Ũ": "U",
                "Ṹ": "U",
                "Ū": "U",
                "Ṻ": "U",
                "Ŭ": "U",
                "Ü": "U",
                "Ǜ": "U",
                "Ǘ": "U",
                "Ǖ": "U",
                "Ǚ": "U",
                "Ủ": "U",
                "Ů": "U",
                "Ű": "U",
                "Ǔ": "U",
                "Ȕ": "U",
                "Ȗ": "U",
                "Ư": "U",
                "Ừ": "U",
                "Ứ": "U",
                "Ữ": "U",
                "Ử": "U",
                "Ự": "U",
                "Ụ": "U",
                "Ṳ": "U",
                "Ų": "U",
                "Ṷ": "U",
                "Ṵ": "U",
                "Ʉ": "U",
                "Ⓥ": "V",
                "Ｖ": "V",
                "Ṽ": "V",
                "Ṿ": "V",
                "Ʋ": "V",
                "Ꝟ": "V",
                "Ʌ": "V",
                "Ꝡ": "VY",
                "Ⓦ": "W",
                "Ｗ": "W",
                "Ẁ": "W",
                "Ẃ": "W",
                "Ŵ": "W",
                "Ẇ": "W",
                "Ẅ": "W",
                "Ẉ": "W",
                "Ⱳ": "W",
                "Ⓧ": "X",
                "Ｘ": "X",
                "Ẋ": "X",
                "Ẍ": "X",
                "Ⓨ": "Y",
                "Ｙ": "Y",
                "Ỳ": "Y",
                "Ý": "Y",
                "Ŷ": "Y",
                "Ỹ": "Y",
                "Ȳ": "Y",
                "Ẏ": "Y",
                "Ÿ": "Y",
                "Ỷ": "Y",
                "Ỵ": "Y",
                "Ƴ": "Y",
                "Ɏ": "Y",
                "Ỿ": "Y",
                "Ⓩ": "Z",
                "Ｚ": "Z",
                "Ź": "Z",
                "Ẑ": "Z",
                "Ż": "Z",
                "Ž": "Z",
                "Ẓ": "Z",
                "Ẕ": "Z",
                "Ƶ": "Z",
                "Ȥ": "Z",
                "Ɀ": "Z",
                "Ⱬ": "Z",
                "Ꝣ": "Z",
                "ⓐ": "a",
                "ａ": "a",
                "ẚ": "a",
                "à": "a",
                "á": "a",
                "â": "a",
                "ầ": "a",
                "ấ": "a",
                "ẫ": "a",
                "ẩ": "a",
                "ã": "a",
                "ā": "a",
                "ă": "a",
                "ằ": "a",
                "ắ": "a",
                "ẵ": "a",
                "ẳ": "a",
                "ȧ": "a",
                "ǡ": "a",
                "ä": "a",
                "ǟ": "a",
                "ả": "a",
                "å": "a",
                "ǻ": "a",
                "ǎ": "a",
                "ȁ": "a",
                "ȃ": "a",
                "ạ": "a",
                "ậ": "a",
                "ặ": "a",
                "ḁ": "a",
                "ą": "a",
                "ⱥ": "a",
                "ɐ": "a",
                "ꜳ": "aa",
                "æ": "ae",
                "ǽ": "ae",
                "ǣ": "ae",
                "ꜵ": "ao",
                "ꜷ": "au",
                "ꜹ": "av",
                "ꜻ": "av",
                "ꜽ": "ay",
                "ⓑ": "b",
                "ｂ": "b",
                "ḃ": "b",
                "ḅ": "b",
                "ḇ": "b",
                "ƀ": "b",
                "ƃ": "b",
                "ɓ": "b",
                "ⓒ": "c",
                "ｃ": "c",
                "ć": "c",
                "ĉ": "c",
                "ċ": "c",
                "č": "c",
                "ç": "c",
                "ḉ": "c",
                "ƈ": "c",
                "ȼ": "c",
                "ꜿ": "c",
                "ↄ": "c",
                "ⓓ": "d",
                "ｄ": "d",
                "ḋ": "d",
                "ď": "d",
                "ḍ": "d",
                "ḑ": "d",
                "ḓ": "d",
                "ḏ": "d",
                "đ": "d",
                "ƌ": "d",
                "ɖ": "d",
                "ɗ": "d",
                "ꝺ": "d",
                "ǳ": "dz",
                "ǆ": "dz",
                "ⓔ": "e",
                "ｅ": "e",
                "è": "e",
                "é": "e",
                "ê": "e",
                "ề": "e",
                "ế": "e",
                "ễ": "e",
                "ể": "e",
                "ẽ": "e",
                "ē": "e",
                "ḕ": "e",
                "ḗ": "e",
                "ĕ": "e",
                "ė": "e",
                "ë": "e",
                "ẻ": "e",
                "ě": "e",
                "ȅ": "e",
                "ȇ": "e",
                "ẹ": "e",
                "ệ": "e",
                "ȩ": "e",
                "ḝ": "e",
                "ę": "e",
                "ḙ": "e",
                "ḛ": "e",
                "ɇ": "e",
                "ɛ": "e",
                "ǝ": "e",
                "ⓕ": "f",
                "ｆ": "f",
                "ḟ": "f",
                "ƒ": "f",
                "ꝼ": "f",
                "ⓖ": "g",
                "ｇ": "g",
                "ǵ": "g",
                "ĝ": "g",
                "ḡ": "g",
                "ğ": "g",
                "ġ": "g",
                "ǧ": "g",
                "ģ": "g",
                "ǥ": "g",
                "ɠ": "g",
                "ꞡ": "g",
                "ᵹ": "g",
                "ꝿ": "g",
                "ⓗ": "h",
                "ｈ": "h",
                "ĥ": "h",
                "ḣ": "h",
                "ḧ": "h",
                "ȟ": "h",
                "ḥ": "h",
                "ḩ": "h",
                "ḫ": "h",
                "ẖ": "h",
                "ħ": "h",
                "ⱨ": "h",
                "ⱶ": "h",
                "ɥ": "h",
                "ƕ": "hv",
                "ⓘ": "i",
                "ｉ": "i",
                "ì": "i",
                "í": "i",
                "î": "i",
                "ĩ": "i",
                "ī": "i",
                "ĭ": "i",
                "ï": "i",
                "ḯ": "i",
                "ỉ": "i",
                "ǐ": "i",
                "ȉ": "i",
                "ȋ": "i",
                "ị": "i",
                "į": "i",
                "ḭ": "i",
                "ɨ": "i",
                "ı": "i",
                "ⓙ": "j",
                "ｊ": "j",
                "ĵ": "j",
                "ǰ": "j",
                "ɉ": "j",
                "ⓚ": "k",
                "ｋ": "k",
                "ḱ": "k",
                "ǩ": "k",
                "ḳ": "k",
                "ķ": "k",
                "ḵ": "k",
                "ƙ": "k",
                "ⱪ": "k",
                "ꝁ": "k",
                "ꝃ": "k",
                "ꝅ": "k",
                "ꞣ": "k",
                "ⓛ": "l",
                "ｌ": "l",
                "ŀ": "l",
                "ĺ": "l",
                "ľ": "l",
                "ḷ": "l",
                "ḹ": "l",
                "ļ": "l",
                "ḽ": "l",
                "ḻ": "l",
                "ſ": "l",
                "ł": "l",
                "ƚ": "l",
                "ɫ": "l",
                "ⱡ": "l",
                "ꝉ": "l",
                "ꞁ": "l",
                "ꝇ": "l",
                "ǉ": "lj",
                "ⓜ": "m",
                "ｍ": "m",
                "ḿ": "m",
                "ṁ": "m",
                "ṃ": "m",
                "ɱ": "m",
                "ɯ": "m",
                "ⓝ": "n",
                "ｎ": "n",
                "ǹ": "n",
                "ń": "n",
                "ñ": "n",
                "ṅ": "n",
                "ň": "n",
                "ṇ": "n",
                "ņ": "n",
                "ṋ": "n",
                "ṉ": "n",
                "ƞ": "n",
                "ɲ": "n",
                "ŉ": "n",
                "ꞑ": "n",
                "ꞥ": "n",
                "ǌ": "nj",
                "ⓞ": "o",
                "ｏ": "o",
                "ò": "o",
                "ó": "o",
                "ô": "o",
                "ồ": "o",
                "ố": "o",
                "ỗ": "o",
                "ổ": "o",
                "õ": "o",
                "ṍ": "o",
                "ȭ": "o",
                "ṏ": "o",
                "ō": "o",
                "ṑ": "o",
                "ṓ": "o",
                "ŏ": "o",
                "ȯ": "o",
                "ȱ": "o",
                "ö": "o",
                "ȫ": "o",
                "ỏ": "o",
                "ő": "o",
                "ǒ": "o",
                "ȍ": "o",
                "ȏ": "o",
                "ơ": "o",
                "ờ": "o",
                "ớ": "o",
                "ỡ": "o",
                "ở": "o",
                "ợ": "o",
                "ọ": "o",
                "ộ": "o",
                "ǫ": "o",
                "ǭ": "o",
                "ø": "o",
                "ǿ": "o",
                "ɔ": "o",
                "ꝋ": "o",
                "ꝍ": "o",
                "ɵ": "o",
                "ƣ": "oi",
                "ȣ": "ou",
                "ꝏ": "oo",
                "ⓟ": "p",
                "ｐ": "p",
                "ṕ": "p",
                "ṗ": "p",
                "ƥ": "p",
                "ᵽ": "p",
                "ꝑ": "p",
                "ꝓ": "p",
                "ꝕ": "p",
                "ⓠ": "q",
                "ｑ": "q",
                "ɋ": "q",
                "ꝗ": "q",
                "ꝙ": "q",
                "ⓡ": "r",
                "ｒ": "r",
                "ŕ": "r",
                "ṙ": "r",
                "ř": "r",
                "ȑ": "r",
                "ȓ": "r",
                "ṛ": "r",
                "ṝ": "r",
                "ŗ": "r",
                "ṟ": "r",
                "ɍ": "r",
                "ɽ": "r",
                "ꝛ": "r",
                "ꞧ": "r",
                "ꞃ": "r",
                "ⓢ": "s",
                "ｓ": "s",
                "ß": "s",
                "ś": "s",
                "ṥ": "s",
                "ŝ": "s",
                "ṡ": "s",
                "š": "s",
                "ṧ": "s",
                "ṣ": "s",
                "ṩ": "s",
                "ș": "s",
                "ş": "s",
                "ȿ": "s",
                "ꞩ": "s",
                "ꞅ": "s",
                "ẛ": "s",
                "ⓣ": "t",
                "ｔ": "t",
                "ṫ": "t",
                "ẗ": "t",
                "ť": "t",
                "ṭ": "t",
                "ț": "t",
                "ţ": "t",
                "ṱ": "t",
                "ṯ": "t",
                "ŧ": "t",
                "ƭ": "t",
                "ʈ": "t",
                "ⱦ": "t",
                "ꞇ": "t",
                "ꜩ": "tz",
                "ⓤ": "u",
                "ｕ": "u",
                "ù": "u",
                "ú": "u",
                "û": "u",
                "ũ": "u",
                "ṹ": "u",
                "ū": "u",
                "ṻ": "u",
                "ŭ": "u",
                "ü": "u",
                "ǜ": "u",
                "ǘ": "u",
                "ǖ": "u",
                "ǚ": "u",
                "ủ": "u",
                "ů": "u",
                "ű": "u",
                "ǔ": "u",
                "ȕ": "u",
                "ȗ": "u",
                "ư": "u",
                "ừ": "u",
                "ứ": "u",
                "ữ": "u",
                "ử": "u",
                "ự": "u",
                "ụ": "u",
                "ṳ": "u",
                "ų": "u",
                "ṷ": "u",
                "ṵ": "u",
                "ʉ": "u",
                "ⓥ": "v",
                "ｖ": "v",
                "ṽ": "v",
                "ṿ": "v",
                "ʋ": "v",
                "ꝟ": "v",
                "ʌ": "v",
                "ꝡ": "vy",
                "ⓦ": "w",
                "ｗ": "w",
                "ẁ": "w",
                "ẃ": "w",
                "ŵ": "w",
                "ẇ": "w",
                "ẅ": "w",
                "ẘ": "w",
                "ẉ": "w",
                "ⱳ": "w",
                "ⓧ": "x",
                "ｘ": "x",
                "ẋ": "x",
                "ẍ": "x",
                "ⓨ": "y",
                "ｙ": "y",
                "ỳ": "y",
                "ý": "y",
                "ŷ": "y",
                "ỹ": "y",
                "ȳ": "y",
                "ẏ": "y",
                "ÿ": "y",
                "ỷ": "y",
                "ẙ": "y",
                "ỵ": "y",
                "ƴ": "y",
                "ɏ": "y",
                "ỿ": "y",
                "ⓩ": "z",
                "ｚ": "z",
                "ź": "z",
                "ẑ": "z",
                "ż": "z",
                "ž": "z",
                "ẓ": "z",
                "ẕ": "z",
                "ƶ": "z",
                "ȥ": "z",
                "ɀ": "z",
                "ⱬ": "z",
                "ꝣ": "z",
                "Ά": "Α",
                "Έ": "Ε",
                "Ή": "Η",
                "Ί": "Ι",
                "Ϊ": "Ι",
                "Ό": "Ο",
                "Ύ": "Υ",
                "Ϋ": "Υ",
                "Ώ": "Ω",
                "ά": "α",
                "έ": "ε",
                "ή": "η",
                "ί": "ι",
                "ϊ": "ι",
                "ΐ": "ι",
                "ό": "ο",
                "ύ": "υ",
                "ϋ": "υ",
                "ΰ": "υ",
                "ω": "ω",
                "ς": "σ"
            };
            return t
        }), e.define("select2/data/base", ["../utils"], function (t) {
            function e() {
                e.__super__.constructor.call(this)
            }

            return t.Extend(e, t.Observable), e.prototype.current = function () {
                throw new Error("The `current` method must be defined in child classes.")
            }, e.prototype.query = function () {
                throw new Error("The `query` method must be defined in child classes.")
            }, e.prototype.bind = function () {
            }, e.prototype.destroy = function () {
            }, e.prototype.generateResultId = function (e, n) {
                var i = e.id + "-result-";
                return i += t.generateChars(4), i += null != n.id ? "-" + n.id.toString() : "-" + t.generateChars(4)
            }, e
        }), e.define("select2/data/select", ["./base", "../utils", "jquery"], function (t, e, n) {
            function i(t, e) {
                this.$element = t, this.options = e, i.__super__.constructor.call(this)
            }

            return e.Extend(i, t), i.prototype.current = function (t) {
                var e = [], i = this;
                this.$element.find(":selected").each(function () {
                    var t = n(this), r = i.item(t);
                    e.push(r)
                }), t(e)
            }, i.prototype.select = function (t) {
                var e = this;
                if (t.selected = !0, n(t.element).is("option"))return t.element.selected = !0, void this.$element.trigger("change");
                if (this.$element.prop("multiple"))this.current(function (i) {
                    var r = [];
                    t = [t], t.push.apply(t, i);
                    for (var o = 0; o < t.length; o++) {
                        var a = t[o].id;
                        -1 === n.inArray(a, r) && r.push(a)
                    }
                    e.$element.val(r), e.$element.trigger("change")
                }); else {
                    var i = t.id;
                    this.$element.val(i), this.$element.trigger("change")
                }
            }, i.prototype.unselect = function (t) {
                var e = this;
                return this.$element.prop("multiple") ? (t.selected = !1, n(t.element).is("option") ? (t.element.selected = !1, void this.$element.trigger("change")) : void this.current(function (i) {
                    for (var r = [], o = 0; o < i.length; o++) {
                        var a = i[o].id;
                        a !== t.id && -1 === n.inArray(a, r) && r.push(a)
                    }
                    e.$element.val(r), e.$element.trigger("change")
                })) : void 0
            }, i.prototype.bind = function (t) {
                var e = this;
                this.container = t, t.on("select", function (t) {
                    e.select(t.data)
                }), t.on("unselect", function (t) {
                    e.unselect(t.data)
                })
            }, i.prototype.destroy = function () {
                this.$element.find("*").each(function () {
                    n.removeData(this, "data")
                })
            }, i.prototype.query = function (t, e) {
                var i = [], r = this, o = this.$element.children();
                o.each(function () {
                    var e = n(this);
                    if (e.is("option") || e.is("optgroup")) {
                        var o = r.item(e), a = r.matches(t, o);
                        null !== a && i.push(a)
                    }
                }), e({results: i})
            }, i.prototype.addOptions = function (t) {
                e.appendMany(this.$element, t)
            }, i.prototype.option = function (t) {
                var e;
                t.children ? (e = document.createElement("optgroup"), e.label = t.text) : (e = document.createElement("option"), void 0 !== e.textContent ? e.textContent = t.text : e.innerText = t.text), t.id && (e.value = t.id), t.disabled && (e.disabled = !0), t.selected && (e.selected = !0), t.title && (e.title = t.title);
                var i = n(e), r = this._normalizeItem(t);
                return r.element = e, n.data(e, "data", r), i
            }, i.prototype.item = function (t) {
                var e = {};
                if (e = n.data(t[0], "data"), null != e)return e;
                if (t.is("option"))e = {
                    id: t.val(),
                    text: t.text(),
                    disabled: t.prop("disabled"),
                    selected: t.prop("selected"),
                    title: t.prop("title")
                }; else if (t.is("optgroup")) {
                    e = {text: t.prop("label"), children: [], title: t.prop("title")};
                    for (var i = t.children("option"), r = [], o = 0; o < i.length; o++) {
                        var a = n(i[o]), s = this.item(a);
                        r.push(s)
                    }
                    e.children = r
                }
                return e = this._normalizeItem(e), e.element = t[0], n.data(t[0], "data", e), e
            }, i.prototype._normalizeItem = function (t) {
                n.isPlainObject(t) || (t = {id: t, text: t}), t = n.extend({}, {text: ""}, t);
                var e = {selected: !1, disabled: !1};
                return null != t.id && (t.id = t.id.toString()), null != t.text && (t.text = t.text.toString()), null == t._resultId && t.id && null != this.container && (t._resultId = this.generateResultId(this.container, t)), n.extend({}, e, t)
            }, i.prototype.matches = function (t, e) {
                var n = this.options.get("matcher");
                return n(t, e)
            }, i
        }), e.define("select2/data/array", ["./select", "../utils", "jquery"], function (t, e, n) {
            function i(t, e) {
                var n = e.get("data") || [];
                i.__super__.constructor.call(this, t, e), this.addOptions(this.convertToOptions(n))
            }

            return e.Extend(i, t), i.prototype.select = function (t) {
                var e = this.$element.find("option").filter(function (e, n) {
                    return n.value == t.id.toString()
                });
                0 === e.length && (e = this.option(t), this.addOptions(e)), i.__super__.select.call(this, t)
            }, i.prototype.convertToOptions = function (t) {
                function i(t) {
                    return function () {
                        return n(this).val() == t.id
                    }
                }

                for (var r = this, o = this.$element.find("option"), a = o.map(function () {
                    return r.item(n(this)).id
                }).get(), s = [], l = 0; l < t.length; l++) {
                    var c = this._normalizeItem(t[l]);
                    if (n.inArray(c.id, a) >= 0) {
                        var u = o.filter(i(c)), d = this.item(u), h = (n.extend(!0, {}, d, c), this.option(d));
                        u.replaceWith(h)
                    } else {
                        var p = this.option(c);
                        if (c.children) {
                            var f = this.convertToOptions(c.children);
                            e.appendMany(p, f)
                        }
                        s.push(p)
                    }
                }
                return s
            }, i
        }), e.define("select2/data/ajax", ["./array", "../utils", "jquery"], function (t, e, n) {
            function i(e, n) {
                this.ajaxOptions = this._applyDefaults(n.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), t.__super__.constructor.call(this, e, n)
            }

            return e.Extend(i, t), i.prototype._applyDefaults = function (t) {
                var e = {
                    data: function (t) {
                        return {q: t.term}
                    }, transport: function (t, e, i) {
                        var r = n.ajax(t);
                        return r.then(e), r.fail(i), r
                    }
                };
                return n.extend({}, e, t, !0)
            }, i.prototype.processResults = function (t) {
                return t
            }, i.prototype.query = function (t, e) {
                function i() {
                    var i = o.transport(o, function (i) {
                        var o = r.processResults(i, t);
                        r.options.get("debug") && window.console && console.error && (o && o.results && n.isArray(o.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), e(o)
                    }, function () {
                    });
                    r._request = i
                }

                var r = this;
                null != this._request && (n.isFunction(this._request.abort) && this._request.abort(), this._request = null);
                var o = n.extend({type: "GET"}, this.ajaxOptions);
                "function" == typeof o.url && (o.url = o.url(t)), "function" == typeof o.data && (o.data = o.data(t)), this.ajaxOptions.delay && "" !== t.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(i, this.ajaxOptions.delay)) : i()
            }, i
        }), e.define("select2/data/tags", ["jquery"], function (t) {
            function e(e, n, i) {
                var r = i.get("tags"), o = i.get("createTag");
                if (void 0 !== o && (this.createTag = o), e.call(this, n, i), t.isArray(r))for (var a = 0; a < r.length; a++) {
                    var s = r[a], l = this._normalizeItem(s), c = this.option(l);
                    this.$element.append(c)
                }
            }

            return e.prototype.query = function (t, e, n) {
                function i(t, o) {
                    for (var a = t.results, s = 0; s < a.length; s++) {
                        var l = a[s], c = null != l.children && !i({results: l.children}, !0), u = l.text === e.term;
                        if (u || c)return o ? !1 : (t.data = a, void n(t))
                    }
                    if (o)return !0;
                    var d = r.createTag(e);
                    if (null != d) {
                        var h = r.option(d);
                        h.attr("data-select2-tag", !0), r.addOptions([h]), r.insertTag(a, d)
                    }
                    t.results = a, n(t)
                }

                var r = this;
                return this._removeOldTags(), null == e.term || null != e.page ? void t.call(this, e, n) : void t.call(this, e, i)
            }, e.prototype.createTag = function (e, n) {
                var i = t.trim(n.term);
                return "" === i ? null : {id: i, text: i}
            }, e.prototype.insertTag = function (t, e, n) {
                e.unshift(n)
            }, e.prototype._removeOldTags = function () {
                var e = (this._lastTag, this.$element.find("option[data-select2-tag]"));
                e.each(function () {
                    this.selected || t(this).remove()
                })
            }, e
        }), e.define("select2/data/tokenizer", ["jquery"], function (t) {
            function e(t, e, n) {
                var i = n.get("tokenizer");
                void 0 !== i && (this.tokenizer = i), t.call(this, e, n)
            }

            return e.prototype.bind = function (t, e, n) {
                t.call(this, e, n), this.$search = e.dropdown.$search || e.selection.$search || n.find(".select2-search__field")
            }, e.prototype.query = function (t, e, n) {
                function i(t) {
                    r.select(t)
                }

                var r = this;
                e.term = e.term || "";
                var o = this.tokenizer(e, this.options, i);
                o.term !== e.term && (this.$search.length && (this.$search.val(o.term), this.$search.focus()), e.term = o.term), t.call(this, e, n)
            }, e.prototype.tokenizer = function (e, n, i, r) {
                for (var o = i.get("tokenSeparators") || [], a = n.term, s = 0, l = this.createTag || function (t) {
                        return {id: t.term, text: t.term}
                    }; s < a.length;) {
                    var c = a[s];
                    if (-1 !== t.inArray(c, o)) {
                        var u = a.substr(0, s), d = t.extend({}, n, {term: u}), h = l(d);
                        r(h), a = a.substr(s + 1) || "", s = 0
                    } else s++
                }
                return {term: a}
            }, e
        }), e.define("select2/data/minimumInputLength", [], function () {
            function t(t, e, n) {
                this.minimumInputLength = n.get("minimumInputLength"), t.call(this, e, n)
            }

            return t.prototype.query = function (t, e, n) {
                return e.term = e.term || "", e.term.length < this.minimumInputLength ? void this.trigger("results:message", {
                    message: "inputTooShort",
                    args: {minimum: this.minimumInputLength, input: e.term, params: e}
                }) : void t.call(this, e, n)
            }, t
        }), e.define("select2/data/maximumInputLength", [], function () {
            function t(t, e, n) {
                this.maximumInputLength = n.get("maximumInputLength"), t.call(this, e, n)
            }

            return t.prototype.query = function (t, e, n) {
                return e.term = e.term || "", this.maximumInputLength > 0 && e.term.length > this.maximumInputLength ? void this.trigger("results:message", {
                    message: "inputTooLong",
                    args: {maximum: this.maximumInputLength, input: e.term, params: e}
                }) : void t.call(this, e, n)
            }, t
        }), e.define("select2/data/maximumSelectionLength", [], function () {
            function t(t, e, n) {
                this.maximumSelectionLength = n.get("maximumSelectionLength"), t.call(this, e, n)
            }

            return t.prototype.query = function (t, e, n) {
                var i = this;
                this.current(function (r) {
                    var o = null != r ? r.length : 0;
                    return i.maximumSelectionLength > 0 && o >= i.maximumSelectionLength ? void i.trigger("results:message", {
                        message: "maximumSelected",
                        args: {maximum: i.maximumSelectionLength}
                    }) : void t.call(i, e, n)
                })
            }, t
        }), e.define("select2/dropdown", ["jquery", "./utils"], function (t, e) {
            function n(t, e) {
                this.$element = t, this.options = e, n.__super__.constructor.call(this)
            }

            return e.Extend(n, e.Observable), n.prototype.render = function () {
                var e = t('<span class="select2-dropdown"><span class="select2-results"></span></span>');
                return e.attr("dir", this.options.get("dir")), this.$dropdown = e, e
            }, n.prototype.position = function () {
            }, n.prototype.destroy = function () {
                this.$dropdown.remove()
            }, n
        }), e.define("select2/dropdown/search", ["jquery", "../utils"], function (t) {
            function e() {
            }

            return e.prototype.render = function (e) {
                var n = e.call(this), i = t('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></span>');

                return this.$searchContainer = i, this.$search = i.find("input"), n.prepend(i), n
            }, e.prototype.bind = function (e, n, i) {
                var r = this;
                e.call(this, n, i), this.$search.on("keydown", function (t) {
                    r.trigger("keypress", t), r._keyUpPrevented = t.isDefaultPrevented()
                }), this.$search.on("input", function () {
                    t(this).off("keyup")
                }), this.$search.on("keyup input", function (t) {
                    r.handleSearch(t)
                }), n.on("open", function () {
                    r.$search.attr("tabindex", 0), r.$search.focus(), window.setTimeout(function () {
                        r.$search.focus()
                    }, 0)
                }), n.on("close", function () {
                    r.$search.attr("tabindex", -1), r.$search.val("")
                }), n.on("results:all", function (t) {
                    if (null == t.query.term || "" === t.query.term) {
                        var e = r.showSearch(t);
                        e ? r.$searchContainer.removeClass("select2-search--hide") : r.$searchContainer.addClass("select2-search--hide")
                    }
                })
            }, e.prototype.handleSearch = function () {
                if (!this._keyUpPrevented) {
                    var t = this.$search.val();
                    this.trigger("query", {term: t})
                }
                this._keyUpPrevented = !1
            }, e.prototype.showSearch = function () {
                return !0
            }, e
        }), e.define("select2/dropdown/hidePlaceholder", [], function () {
            function t(t, e, n, i) {
                this.placeholder = this.normalizePlaceholder(n.get("placeholder")), t.call(this, e, n, i)
            }

            return t.prototype.append = function (t, e) {
                e.results = this.removePlaceholder(e.results), t.call(this, e)
            }, t.prototype.normalizePlaceholder = function (t, e) {
                return "string" == typeof e && (e = {id: "", text: e}), e
            }, t.prototype.removePlaceholder = function (t, e) {
                for (var n = e.slice(0), i = e.length - 1; i >= 0; i--) {
                    var r = e[i];
                    this.placeholder.id === r.id && n.splice(i, 1)
                }
                return n
            }, t
        }), e.define("select2/dropdown/infiniteScroll", ["jquery"], function (t) {
            function e(t, e, n, i) {
                this.lastParams = {}, t.call(this, e, n, i), this.$loadingMore = this.createLoadingMore(), this.loading = !1
            }

            return e.prototype.append = function (t, e) {
                this.$loadingMore.remove(), this.loading = !1, t.call(this, e), this.showLoadingMore(e) && this.$results.append(this.$loadingMore)
            }, e.prototype.bind = function (e, n, i) {
                var r = this;
                e.call(this, n, i), n.on("query", function (t) {
                    r.lastParams = t, r.loading = !0
                }), n.on("query:append", function (t) {
                    r.lastParams = t, r.loading = !0
                }), this.$results.on("scroll", function () {
                    var e = t.contains(document.documentElement, r.$loadingMore[0]);
                    if (!r.loading && e) {
                        var n = r.$results.offset().top + r.$results.outerHeight(!1), i = r.$loadingMore.offset().top + r.$loadingMore.outerHeight(!1);
                        n + 50 >= i && r.loadMore()
                    }
                })
            }, e.prototype.loadMore = function () {
                this.loading = !0;
                var e = t.extend({}, {page: 1}, this.lastParams);
                e.page++, this.trigger("query:append", e)
            }, e.prototype.showLoadingMore = function (t, e) {
                return e.pagination && e.pagination.more
            }, e.prototype.createLoadingMore = function () {
                var e = t('<li class="option load-more" role="treeitem"></li>'), n = this.options.get("translations").get("loadingMore");
                return e.html(n(this.lastParams)), e
            }, e
        }), e.define("select2/dropdown/attachBody", ["jquery", "../utils"], function (t, e) {
            function n(t, e, n) {
                this.$dropdownParent = n.get("dropdownParent") || document.body, t.call(this, e, n)
            }

            return n.prototype.bind = function (t, e, n) {
                var i = this, r = !1;
                t.call(this, e, n), e.on("open", function () {
                    i._showDropdown(), i._attachPositioningHandler(e), r || (r = !0, e.on("results:all", function () {
                        i._positionDropdown(), i._resizeDropdown()
                    }), e.on("results:append", function () {
                        i._positionDropdown(), i._resizeDropdown()
                    }))
                }), e.on("close", function () {
                    i._hideDropdown(), i._detachPositioningHandler(e)
                }), this.$dropdownContainer.on("mousedown", function (t) {
                    t.stopPropagation()
                })
            }, n.prototype.position = function (t, e, n) {
                e.attr("class", n.attr("class")), e.removeClass("select2"), e.addClass("select2-container--open"), e.css({
                    position: "absolute",
                    top: -999999
                }), this.$container = n
            }, n.prototype.render = function (e) {
                var n = t("<span></span>"), i = e.call(this);
                return n.append(i), this.$dropdownContainer = n, n
            }, n.prototype._hideDropdown = function () {
                this.$dropdownContainer.detach()
            }, n.prototype._attachPositioningHandler = function (n) {
                var i = this, r = "scroll.select2." + n.id, o = "resize.select2." + n.id, a = "orientationchange.select2." + n.id, s = this.$container.parents().filter(e.hasScroll);
                s.each(function () {
                    t(this).data("select2-scroll-position", {x: t(this).scrollLeft(), y: t(this).scrollTop()})
                }), s.on(r, function () {
                    var e = t(this).data("select2-scroll-position");
                    t(this).scrollTop(e.y)
                }), t(window).on(r + " " + o + " " + a, function () {
                    i._positionDropdown(), i._resizeDropdown()
                })
            }, n.prototype._detachPositioningHandler = function (n) {
                var i = "scroll.select2." + n.id, r = "resize.select2." + n.id, o = "orientationchange.select2." + n.id, a = this.$container.parents().filter(e.hasScroll);
                a.off(i), t(window).off(i + " " + r + " " + o)
            }, n.prototype._positionDropdown = function () {
                var e = t(window), n = this.$dropdown.hasClass("select2-dropdown--above"), i = this.$dropdown.hasClass("select2-dropdown--below"), r = null, o = (this.$container.position(), this.$container.offset());
                o.bottom = o.top + this.$container.outerHeight(!1);
                var a = {height: this.$container.outerHeight(!1)};
                a.top = o.top, a.bottom = o.top + a.height;
                var s = {height: this.$dropdown.outerHeight(!1)}, l = {
                    top: e.scrollTop(),
                    bottom: e.scrollTop() + e.height()
                }, c = l.top < o.top - s.height, u = l.bottom > o.bottom + s.height, d = {left: o.left, top: a.bottom};
                n || i || (r = "below"), u || !c || n ? !c && u && n && (r = "below") : r = "above", ("above" == r || n && "below" !== r) && (d.top = a.top - s.height), null != r && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + r), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + r)), this.$dropdownContainer.css(d)
            }, n.prototype._resizeDropdown = function () {
                this.$dropdownContainer.width();
                var t = {width: this.$container.outerWidth(!1) + "px"};
                this.options.get("dropdownAutoWidth") && (t.minWidth = t.width, t.width = "auto"), this.$dropdown.css(t)
            }, n.prototype._showDropdown = function () {
                this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown()
            }, n
        }), e.define("select2/dropdown/minimumResultsForSearch", [], function () {
            function t(e) {
                for (var n = 0, i = 0; i < e.length; i++) {
                    var r = e[i];
                    r.children ? n += t(r.children) : n++
                }
                return n
            }

            function e(t, e, n, i) {
                this.minimumResultsForSearch = n.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), t.call(this, e, n, i)
            }

            return e.prototype.showSearch = function (e, n) {
                return t(n.data.results) < this.minimumResultsForSearch ? !1 : e.call(this, n)
            }, e
        }), e.define("select2/dropdown/selectOnClose", [], function () {
            function t() {
            }

            return t.prototype.bind = function (t, e, n) {
                var i = this;
                t.call(this, e, n), e.on("close", function () {
                    i._handleSelectOnClose()
                })
            }, t.prototype._handleSelectOnClose = function () {
                var t = this.getHighlightedResults();
                t.length < 1 || this.trigger("select", {data: t.data("data")})
            }, t
        }), e.define("select2/dropdown/closeOnSelect", [], function () {
            function t() {
            }

            return t.prototype.bind = function (t, e, n) {
                var i = this;
                t.call(this, e, n), e.on("select", function (t) {
                    i._selectTriggered(t)
                }), e.on("unselect", function (t) {
                    i._selectTriggered(t)
                })
            }, t.prototype._selectTriggered = function (t, e) {
                var n = e.originalEvent;
                n && n.ctrlKey || this.trigger("close")
            }, t
        }), e.define("select2/i18n/en", [], function () {
            return {
                errorLoading: function () {
                    return "The results could not be loaded."
                }, inputTooLong: function (t) {
                    var e = t.input.length - t.maximum, n = "Please delete " + e + " character";
                    return 1 != e && (n += "s"), n
                }, inputTooShort: function (t) {
                    var e = t.minimum - t.input.length, n = "Please enter " + e + " or more characters";
                    return n
                }, loadingMore: function () {
                    return "Loading more results…"
                }, maximumSelected: function (t) {
                    var e = "You can only select " + t.maximum + " item";
                    return 1 != t.maximum && (e += "s"), e
                }, noResults: function () {
                    return "No results found"
                }, searching: function () {
                    return "Searching…"
                }
            }
        }), e.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function (t, e, n, i, r, o, a, s, l, c, u, d, h, p, f, g, v, m, y, b, w, x, C, S, T, D, _, k, E) {
            function A() {
                this.reset()
            }

            A.prototype.apply = function (d) {
                if (d = t.extend({}, this.defaults, d), null == d.dataAdapter) {
                    if (d.dataAdapter = null != d.ajax ? f : null != d.data ? p : h, d.minimumInputLength > 0 && (d.dataAdapter = c.Decorate(d.dataAdapter, m)), d.maximumInputLength > 0 && (d.dataAdapter = c.Decorate(d.dataAdapter, y)), d.maximumSelectionLength > 0 && (d.dataAdapter = c.Decorate(d.dataAdapter, b)), d.tags && (d.dataAdapter = c.Decorate(d.dataAdapter, g)), (null != d.tokenSeparators || null != d.tokenizer) && (d.dataAdapter = c.Decorate(d.dataAdapter, v)), null != d.query) {
                        var E = e(d.amdBase + "compat/query");
                        d.dataAdapter = c.Decorate(d.dataAdapter, E)
                    }
                    if (null != d.initSelection) {
                        var A = e(d.amdBase + "compat/initSelection");
                        d.dataAdapter = c.Decorate(d.dataAdapter, A)
                    }
                }
                if (null == d.resultsAdapter && (d.resultsAdapter = n, null != d.ajax && (d.resultsAdapter = c.Decorate(d.resultsAdapter, S)), null != d.placeholder && (d.resultsAdapter = c.Decorate(d.resultsAdapter, C)), d.selectOnClose && (d.resultsAdapter = c.Decorate(d.resultsAdapter, _))), null == d.dropdownAdapter) {
                    if (d.multiple)d.dropdownAdapter = w; else {
                        var O = c.Decorate(w, x);
                        d.dropdownAdapter = O
                    }
                    if (0 !== d.minimumResultsForSearch && (d.dropdownAdapter = c.Decorate(d.dropdownAdapter, D)), d.closeOnSelect && (d.dropdownAdapter = c.Decorate(d.dropdownAdapter, k)), null != d.dropdownCssClass || null != d.dropdownCss || null != d.adaptDropdownCssClass) {
                        var N = e(d.amdBase + "compat/dropdownCss");
                        d.dropdownAdapter = c.Decorate(d.dropdownAdapter, N)
                    }
                    d.dropdownAdapter = c.Decorate(d.dropdownAdapter, T)
                }
                if (null == d.selectionAdapter) {
                    if (d.selectionAdapter = d.multiple ? r : i, null != d.placeholder && (d.selectionAdapter = c.Decorate(d.selectionAdapter, o)), d.allowClear && (d.selectionAdapter = c.Decorate(d.selectionAdapter, a)), d.multiple && (d.selectionAdapter = c.Decorate(d.selectionAdapter, s)), null != d.containerCssClass || null != d.containerCss || null != d.adaptContainerCssClass) {
                        var $ = e(d.amdBase + "compat/containerCss");
                        d.selectionAdapter = c.Decorate(d.selectionAdapter, $)
                    }
                    d.selectionAdapter = c.Decorate(d.selectionAdapter, l)
                }
                if ("string" == typeof d.language)if (d.language.indexOf("-") > 0) {
                    var I = d.language.split("-"), L = I[0];
                    d.language = [d.language, L]
                } else d.language = [d.language];
                if (t.isArray(d.language)) {
                    var P = new u;
                    d.language.push("en");
                    for (var j = d.language, M = 0; M < j.length; M++) {
                        var R = j[M], F = {};
                        try {
                            F = u.loadPath(R)
                        } catch (q) {
                            try {
                                R = this.defaults.amdLanguageBase + R, F = u.loadPath(R)
                            } catch (H) {
                                d.debug && window.console && console.warn && console.warn('Select2: The language file for "' + R + '" could not be automatically loaded. A fallback will be used instead.');
                                continue
                            }
                        }
                        P.extend(F)
                    }
                    d.translations = P
                } else {
                    var W = u.loadPath(this.defaults.amdLanguageBase + "en"), z = new u(d.language);
                    z.extend(W), d.translations = z
                }
                return d
            }, A.prototype.reset = function () {
                function e(t) {
                    function e(t) {
                        return d[t] || t
                    }

                    return t.replace(/[^\u0000-\u007E]/g, e)
                }

                function n(i, r) {
                    if ("" === t.trim(i.term))return r;
                    if (r.children && r.children.length > 0) {
                        for (var o = t.extend(!0, {}, r), a = r.children.length - 1; a >= 0; a--) {
                            var s = r.children[a], l = n(i, s);
                            null == l && o.children.splice(a, 1)
                        }
                        return o.children.length > 0 ? o : n(i, o)
                    }
                    var c = e(r.text).toUpperCase(), u = e(i.term).toUpperCase();
                    return c.indexOf(u) > -1 ? r : null
                }

                this.defaults = {
                    amdBase: "./",
                    amdLanguageBase: "./i18n/",
                    closeOnSelect: !0,
                    debug: !1,
                    dropdownAutoWidth: !1,
                    escapeMarkup: c.escapeMarkup,
                    language: E,
                    matcher: n,
                    minimumInputLength: 0,
                    maximumInputLength: 0,
                    maximumSelectionLength: 0,
                    minimumResultsForSearch: 0,
                    selectOnClose: !1,
                    sorter: function (t) {
                        return t
                    },
                    templateResult: function (t) {
                        return t.text
                    },
                    templateSelection: function (t) {
                        return t.text
                    },
                    theme: "default",
                    width: "resolve"
                }
            }, A.prototype.set = function (e, n) {
                var i = t.camelCase(e), r = {};
                r[i] = n;
                var o = c._convertData(r);
                t.extend(this.defaults, o)
            };
            var O = new A;
            return O
        }), e.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function (t, e, n, i) {
            function r(e, r) {
                if (this.options = e, null != r && this.fromElement(r), this.options = n.apply(this.options), r && r.is("input")) {
                    var o = t(this.get("amdBase") + "compat/inputData");
                    this.options.dataAdapter = i.Decorate(this.options.dataAdapter, o)
                }
            }

            return r.prototype.fromElement = function (t) {
                var n = ["select2"];
                null == this.options.multiple && (this.options.multiple = t.prop("multiple")), null == this.options.disabled && (this.options.disabled = t.prop("disabled")), null == this.options.language && (t.prop("lang") ? this.options.language = t.prop("lang").toLowerCase() : t.closest("[lang]").prop("lang") && (this.options.language = t.closest("[lang]").prop("lang"))), null == this.options.dir && (this.options.dir = t.prop("dir") ? t.prop("dir") : t.closest("[dir]").prop("dir") ? t.closest("[dir]").prop("dir") : "ltr"), t.prop("disabled", this.options.disabled), t.prop("multiple", this.options.multiple), t.data("select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), t.data("data", t.data("select2Tags")), t.data("tags", !0)), t.data("ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), t.attr("ajax--url", t.data("ajaxUrl")), t.data("ajax--url", t.data("ajaxUrl")));
                var r = {};
                r = e.fn.jquery && "1." == e.fn.jquery.substr(0, 2) && t[0].dataset ? e.extend(!0, {}, t[0].dataset, t.data()) : t.data();
                var o = e.extend(!0, {}, r);
                o = i._convertData(o);
                for (var a in o)e.inArray(a, n) > -1 || (e.isPlainObject(this.options[a]) ? e.extend(this.options[a], o[a]) : this.options[a] = o[a]);
                return this
            }, r.prototype.get = function (t) {
                return this.options[t]
            }, r.prototype.set = function (t, e) {
                this.options[t] = e
            }, r
        }), e.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function (t, e, n, i) {
            var r = function (t, n) {
                null != t.data("select2") && t.data("select2").destroy(), this.$element = t, this.id = this._generateId(t), n = n || {}, this.options = new e(n, t), r.__super__.constructor.call(this);
                var i = t.attr("tabindex") || 0;
                t.data("old-tabindex", i), t.attr("tabindex", "-1");
                var o = this.options.get("dataAdapter");
                this.dataAdapter = new o(t, this.options);
                var a = this.render();
                this._placeContainer(a);
                var s = this.options.get("selectionAdapter");
                this.selection = new s(t, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, a);
                var l = this.options.get("dropdownAdapter");
                this.dropdown = new l(t, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, a);
                var c = this.options.get("resultsAdapter");
                this.results = new c(t, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown);
                var u = this;
                this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current(function (t) {
                    u.trigger("selection:update", {data: t})
                }), t.addClass("select2-hidden-accessible"), t.attr("aria-hidden", "true"), this._syncAttributes(), t.data("select2", this)
            };
            return n.Extend(r, n.Observable), r.prototype._generateId = function (t) {
                var e = "";
                return e = null != t.attr("id") ? t.attr("id") : null != t.attr("name") ? t.attr("name") + "-" + n.generateChars(2) : n.generateChars(4), e = "select2-" + e
            }, r.prototype._placeContainer = function (t) {
                t.insertAfter(this.$element);
                var e = this._resolveWidth(this.$element, this.options.get("width"));
                null != e && t.css("width", e)
            }, r.prototype._resolveWidth = function (t, e) {
                var n = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                if ("resolve" == e) {
                    var i = this._resolveWidth(t, "style");
                    return null != i ? i : this._resolveWidth(t, "element")
                }
                if ("element" == e) {
                    var r = t.outerWidth(!1);
                    return 0 >= r ? "auto" : r + "px"
                }
                if ("style" == e) {
                    var o = t.attr("style");
                    if ("string" != typeof o)return null;
                    for (var a = o.split(";"), s = 0, l = a.length; l > s; s += 1) {
                        var c = a[s].replace(/\s/g, ""), u = c.match(n);
                        if (null !== u && u.length >= 1)return u[1]
                    }
                    return null
                }
                return e
            }, r.prototype._bindAdapters = function () {
                this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container)
            }, r.prototype._registerDomEvents = function () {
                var e = this;
                this.$element.on("change.select2", function () {
                    e.dataAdapter.current(function (t) {
                        e.trigger("selection:update", {data: t})
                    })
                }), this._sync = n.bind(this._syncAttributes, this), this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._sync);
                var i = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                null != i ? (this._observer = new i(function (n) {
                    t.each(n, e._sync)
                }), this._observer.observe(this.$element[0], {
                    attributes: !0,
                    subtree: !1
                })) : this.$element[0].addEventListener && this.$element[0].addEventListener("DOMAttrModified", e._sync, !1)
            }, r.prototype._registerDataEvents = function () {
                var t = this;
                this.dataAdapter.on("*", function (e, n) {
                    t.trigger(e, n)
                })
            }, r.prototype._registerSelectionEvents = function () {
                var e = this, n = ["toggle"];
                this.selection.on("toggle", function () {
                    e.toggleDropdown()
                }), this.selection.on("*", function (i, r) {
                    -1 === t.inArray(i, n) && e.trigger(i, r)
                })
            }, r.prototype._registerDropdownEvents = function () {
                var t = this;
                this.dropdown.on("*", function (e, n) {
                    t.trigger(e, n)
                })
            }, r.prototype._registerResultsEvents = function () {
                var t = this;
                this.results.on("*", function (e, n) {
                    t.trigger(e, n)
                })
            }, r.prototype._registerEvents = function () {
                var t = this;
                this.on("open", function () {
                    t.$container.addClass("select2-container--open")
                }), this.on("close", function () {
                    t.$container.removeClass("select2-container--open")
                }), this.on("enable", function () {
                    t.$container.removeClass("select2-container--disabled")
                }), this.on("disable", function () {
                    t.$container.addClass("select2-container--disabled")
                }), this.on("focus", function () {
                    t.$container.addClass("select2-container--focus")
                }), this.on("blur", function () {
                    t.$container.removeClass("select2-container--focus")
                }), this.on("query", function (e) {
                    t.isOpen() || t.trigger("open"), this.dataAdapter.query(e, function (n) {
                        t.trigger("results:all", {data: n, query: e})
                    })
                }), this.on("query:append", function (e) {
                    this.dataAdapter.query(e, function (n) {
                        t.trigger("results:append", {data: n, query: e})
                    })
                }), this.on("keypress", function (e) {
                    var n = e.which;
                    t.isOpen() ? n === i.ENTER ? (t.trigger("results:select"), e.preventDefault()) : n === i.SPACE && e.ctrlKey ? (t.trigger("results:toggle"), e.preventDefault()) : n === i.UP ? (t.trigger("results:previous"), e.preventDefault()) : n === i.DOWN ? (t.trigger("results:next"), e.preventDefault()) : (n === i.ESC || n === i.TAB) && (t.close(), e.preventDefault()) : (n === i.ENTER || n === i.SPACE || (n === i.DOWN || n === i.UP) && e.altKey) && (t.open(), e.preventDefault())
                })
            }, r.prototype._syncAttributes = function () {
                this.options.set("disabled", this.$element.prop("disabled")), this.options.get("disabled") ? (this.isOpen() && this.close(), this.trigger("disable")) : this.trigger("enable")
            }, r.prototype.trigger = function (t, e) {
                var n = r.__super__.trigger, i = {
                    open: "opening",
                    close: "closing",
                    select: "selecting",
                    unselect: "unselecting"
                };
                if (t in i) {
                    var o = i[t], a = {prevented: !1, name: t, args: e};
                    if (n.call(this, o, a), a.prevented)return void(e.prevented = !0)
                }
                n.call(this, t, e)
            }, r.prototype.toggleDropdown = function () {
                this.options.get("disabled") || (this.isOpen() ? this.close() : this.open())
            }, r.prototype.open = function () {
                this.isOpen() || (this.trigger("query", {}), this.trigger("open"))
            }, r.prototype.close = function () {
                this.isOpen() && this.trigger("close")
            }, r.prototype.isOpen = function () {
                return this.$container.hasClass("select2-container--open")
            }, r.prototype.enable = function (t) {
                this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), (null == t || 0 === t.length) && (t = [!0]);
                var e = !t[0];
                this.$element.prop("disabled", e)
            }, r.prototype.data = function () {
                this.options.get("debug") && arguments.length > 0 && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
                var t = [];
                return this.dataAdapter.current(function (e) {
                    t = e
                }), t
            }, r.prototype.val = function (e) {
                if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == e || 0 === e.length)return this.$element.val();
                var n = e[0];
                t.isArray(n) && (n = t.map(n, function (t) {
                    return t.toString()
                })), this.$element.val(n).trigger("change")
            }, r.prototype.destroy = function () {
                this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._sync), null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && this.$element[0].removeEventListener("DOMAttrModified", this._sync, !1), this._sync = null, this.$element.off(".select2"), this.$element.attr("tabindex", this.$element.data("old-tabindex")), this.$element.removeClass("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null
            }, r.prototype.render = function () {
                var e = t('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
                return e.attr("dir", this.options.get("dir")), this.$container = e, this.$container.addClass("select2-container--" + this.options.get("theme")), e.data("element", this.$element), e
            }, r
        }), e.define("select2/compat/utils", ["jquery"], function (t) {
            function e(e, n, i) {
                var r, o, a = [];
                r = t.trim(e.attr("class")), r && (r = "" + r, t(r.split(/\s+/)).each(function () {
                    0 === this.indexOf("select2-") && a.push(this)
                })), r = t.trim(n.attr("class")), r && (r = "" + r, t(r.split(/\s+/)).each(function () {
                    0 !== this.indexOf("select2-") && (o = i(this), null != o && a.push(o))
                })), e.attr("class", a.join(" "))
            }

            return {syncCssClasses: e}
        }), e.define("select2/compat/containerCss", ["jquery", "./utils"], function (t, e) {
            function n() {
                return null
            }

            function i() {
            }

            return i.prototype.render = function (i) {
                var r = i.call(this), o = this.options.get("containerCssClass") || "";
                t.isFunction(o) && (o = o(this.$element));
                var a = this.options.get("adaptContainerCssClass");
                if (a = a || n, -1 !== o.indexOf(":all:")) {
                    o = o.replace(":all", "");
                    var s = a;
                    a = function (t) {
                        var e = s(t);
                        return null != e ? e + " " + t : t
                    }
                }
                var l = this.options.get("containerCss") || {};
                return t.isFunction(l) && (l = l(this.$element)), e.syncCssClasses(r, this.$element, a), r.css(l), r.addClass(o), r
            }, i
        }), e.define("select2/compat/dropdownCss", ["jquery", "./utils"], function (t, e) {
            function n() {
                return null
            }

            function i() {
            }

            return i.prototype.render = function (i) {
                var r = i.call(this), o = this.options.get("dropdownCssClass") || "";
                t.isFunction(o) && (o = o(this.$element));
                var a = this.options.get("adaptDropdownCssClass");
                if (a = a || n, -1 !== o.indexOf(":all:")) {
                    o = o.replace(":all", "");
                    var s = a;
                    a = function (t) {
                        var e = s(t);
                        return null != e ? e + " " + t : t
                    }
                }
                var l = this.options.get("dropdownCss") || {};
                return t.isFunction(l) && (l = l(this.$element)), e.syncCssClasses(r, this.$element, a), r.css(l), r.addClass(o), r
            }, i
        }), e.define("select2/compat/initSelection", ["jquery"], function (t) {
            function e(t, e, n) {
                n.get("debug") && window.console && console.warn && console.warn("Select2: The `initSelection` option has been deprecated in favor of a custom data adapter that overrides the `current` method. This method is now called multiple times instead of a single time when the instance is initialized. Support will be removed for the `initSelection` option in future versions of Select2"), this.initSelection = n.get("initSelection"), this._isInitialized = !1, t.call(this, e, n)
            }

            return e.prototype.current = function (e, n) {
                var i = this;
                return this._isInitialized ? void e.call(this, n) : void this.initSelection.call(null, this.$element, function (e) {
                    i._isInitialized = !0, t.isArray(e) || (e = [e]), n(e)
                })
            }, e
        }), e.define("select2/compat/inputData", ["jquery"], function (t) {
            function e(t, e, n) {
                this._currentData = [], this._valueSeparator = n.get("valueSeparator") || ",", "hidden" === e.prop("type") && n.get("debug") && console && console.warn && console.warn("Select2: Using a hidden input with Select2 is no longer supported and may stop working in the future. It is recommended to use a `<select>` element instead."), t.call(this, e, n)
            }

            return e.prototype.current = function (e, n) {
                function i(e, n) {
                    var r = [];
                    return e.selected || -1 !== t.inArray(e.id, n) ? (e.selected = !0, r.push(e)) : e.selected = !1, e.children && r.push.apply(r, i(e.children, n)), r
                }

                for (var r = [], o = 0; o < this._currentData.length; o++) {
                    var a = this._currentData[o];
                    r.push.apply(r, i(a, this.$element.val().split(this._valueSeparator)))
                }
                n(r)
            }, e.prototype.select = function (e, n) {
                if (this.options.get("multiple")) {
                    var i = this.$element.val();
                    i += this._valueSeparator + n.id, this.$element.val(i), this.$element.trigger("change")
                } else this.current(function (e) {
                    t.map(e, function (t) {
                        t.selected = !1
                    })
                }), this.$element.val(n.id), this.$element.trigger("change")
            }, e.prototype.unselect = function (t, e) {
                var n = this;
                e.selected = !1, this.current(function (t) {
                    for (var i = [], r = 0; r < t.length; r++) {
                        var o = t[r];
                        e.id != o.id && i.push(o.id)
                    }
                    n.$element.val(i.join(n._valueSeparator)), n.$element.trigger("change")
                })
            }, e.prototype.query = function (t, e, n) {
                for (var i = [], r = 0; r < this._currentData.length; r++) {
                    var o = this._currentData[r], a = this.matches(e, o);
                    null !== a && i.push(a)
                }
                n({results: i})
            }, e.prototype.addOptions = function (e, n) {
                var i = t.map(n, function (e) {
                    return t.data(e[0], "data")
                });
                this._currentData.push.apply(this._currentData, i)
            }, e
        }), e.define("select2/compat/matcher", ["jquery"], function (t) {
            function e(e) {
                function n(n, i) {
                    var r = t.extend(!0, {}, i);
                    if (null == n.term || "" === t.trim(n.term))return r;
                    if (i.children) {
                        for (var o = i.children.length - 1; o >= 0; o--) {
                            var a = i.children[o], s = e(n.term, a.text, a);
                            s || r.children.splice(o, 1)
                        }
                        if (r.children.length > 0)return r
                    }
                    return e(n.term, i.text, i) ? r : null
                }

                return n
            }

            return e
        }), e.define("select2/compat/query", [], function () {
            function t(t, e, n) {
                n.get("debug") && window.console && console.warn && console.warn("Select2: The `query` option has been deprecated in favor of a custom data adapter that overrides the `query` method. Support will be removed for the `query` option in future versions of Select2."), t.call(this, e, n)
            }

            return t.prototype.query = function (t, e, n) {
                e.callback = n;
                var i = this.options.get("query");
                i.call(null, e)
            }, t
        }), e.define("select2/dropdown/attachContainer", [], function () {
            function t(t, e, n) {
                t.call(this, e, n)
            }

            return t.prototype.position = function (t, e, n) {
                var i = n.find(".dropdown-wrapper");
                i.append(e), e.addClass("select2-dropdown--below"), n.addClass("select2-container--below")
            }, t
        }), e.define("select2/dropdown/stopPropagation", [], function () {
            function t() {
            }

            return t.prototype.bind = function (t, e, n) {
                t.call(this, e, n);
                var i = ["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart"];
                this.$dropdown.on(i.join(" "), function (t) {
                    t.stopPropagation()
                })
            }, t
        }), e.define("select2/selection/stopPropagation", [], function () {
            function t() {
            }

            return t.prototype.bind = function (t, e, n) {
                t.call(this, e, n);
                var i = ["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart"];
                this.$selection.on(i.join(" "), function (t) {
                    t.stopPropagation()
                })
            }, t
        }), e.define("jquery.select2", ["jquery", "require", "./select2/core", "./select2/defaults"], function (t, e, n, i) {
            if (e("jquery.mousewheel"), null == t.fn.select2) {
                var r = ["open", "close", "destroy"];
                t.fn.select2 = function (e) {
                    if (e = e || {}, "object" == typeof e)return this.each(function () {
                        var i = t.extend({}, e, !0);
                        new n(t(this), i)
                    }), this;
                    if ("string" == typeof e) {
                        var i = this.data("select2");
                        null == i && window.console && console.error && console.error("The select2('" + e + "') method was called on an element that is not using Select2.");
                        var o = Array.prototype.slice.call(arguments, 1), a = i[e](o);
                        return t.inArray(e, r) > -1 ? this : a
                    }
                    throw new Error("Invalid arguments for Select2: " + e)
                }
            }
            return null == t.fn.select2.defaults && (t.fn.select2.defaults = i), n
        }), function (n) {
            "function" == typeof e.define && e.define.amd ? e.define("jquery.mousewheel", ["jquery"], n) : "object" == typeof exports ? module.exports = n : n(t)
        }(function (t) {
            function e(e) {
                var a = e || window.event, s = l.call(arguments, 1), c = 0, d = 0, h = 0, p = 0, f = 0, g = 0;
                if (e = t.event.fix(a), e.type = "mousewheel", "detail"in a && (h = -1 * a.detail), "wheelDelta"in a && (h = a.wheelDelta), "wheelDeltaY"in a && (h = a.wheelDeltaY), "wheelDeltaX"in a && (d = -1 * a.wheelDeltaX), "axis"in a && a.axis === a.HORIZONTAL_AXIS && (d = -1 * h, h = 0), c = 0 === h ? d : h, "deltaY"in a && (h = -1 * a.deltaY, c = h), "deltaX"in a && (d = a.deltaX, 0 === h && (c = -1 * d)), 0 !== h || 0 !== d) {
                    if (1 === a.deltaMode) {
                        var v = t.data(this, "mousewheel-line-height");
                        c *= v, h *= v, d *= v
                    } else if (2 === a.deltaMode) {
                        var m = t.data(this, "mousewheel-page-height");
                        c *= m, h *= m, d *= m
                    }
                    if (p = Math.max(Math.abs(h), Math.abs(d)), (!o || o > p) && (o = p, i(a, p) && (o /= 40)), i(a, p) && (c /= 40, d /= 40, h /= 40), c = Math[c >= 1 ? "floor" : "ceil"](c / o), d = Math[d >= 1 ? "floor" : "ceil"](d / o), h = Math[h >= 1 ? "floor" : "ceil"](h / o), u.settings.normalizeOffset && this.getBoundingClientRect) {
                        var y = this.getBoundingClientRect();
                        f = e.clientX - y.left, g = e.clientY - y.top
                    }
                    return e.deltaX = d, e.deltaY = h, e.deltaFactor = o, e.offsetX = f, e.offsetY = g, e.deltaMode = 0, s.unshift(e, c, d, h), r && clearTimeout(r), r = setTimeout(n, 200), (t.event.dispatch || t.event.handle).apply(this, s)
                }
            }

            function n() {
                o = null
            }

            function i(t, e) {
                return u.settings.adjustOldDeltas && "mousewheel" === t.type && e % 120 === 0
            }

            var r, o, a = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"], s = "onwheel"in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"], l = Array.prototype.slice;
            if (t.event.fixHooks)for (var c = a.length; c;)t.event.fixHooks[a[--c]] = t.event.mouseHooks;
            var u = t.event.special.mousewheel = {
                version: "3.1.12", setup: function () {
                    if (this.addEventListener)for (var n = s.length; n;)this.addEventListener(s[--n], e, !1); else this.onmousewheel = e;
                    t.data(this, "mousewheel-line-height", u.getLineHeight(this)), t.data(this, "mousewheel-page-height", u.getPageHeight(this))
                }, teardown: function () {
                    if (this.removeEventListener)for (var n = s.length; n;)this.removeEventListener(s[--n], e, !1); else this.onmousewheel = null;
                    t.removeData(this, "mousewheel-line-height"), t.removeData(this, "mousewheel-page-height")
                }, getLineHeight: function (e) {
                    var n = t(e), i = n["offsetParent"in t.fn ? "offsetParent" : "parent"]();
                    return i.length || (i = t("body")), parseInt(i.css("fontSize"), 10) || parseInt(n.css("fontSize"), 10) || 16
                }, getPageHeight: function (e) {
                    return t(e).height()
                }, settings: {adjustOldDeltas: !0, normalizeOffset: !0}
            };
            t.fn.extend({
                mousewheel: function (t) {
                    return t ? this.bind("mousewheel", t) : this.trigger("mousewheel")
                }, unmousewheel: function (t) {
                    return this.unbind("mousewheel", t)
                }
            })
        }), {define: e.define, require: e.require}
    }(), n = e.require("jquery.select2");
    return t.fn.select2.amd = e, n
}), function (t) {
    t.addFlex = function (e, n) {
        if (e.grid)return !1;
        n = t.extend({
            height: 200,
            width: "auto",
            striped: !0,
            novstripe: !1,
            minwidth: 30,
            minheight: 80,
            resizable: !0,
            url: !1,
            method: "POST",
            dataType: "xml",
            errormsg: "Connection Error",
            usepager: !1,
            nowrap: !0,
            page: 1,
            total: 1,
            useRp: !0,
            rp: 15,
            rpOptions: [10, 15, 20, 30, 50],
            title: !1,
            pagestat: "Displaying {from} to {to} of {total} items",
            pagetext: "Page",
            outof: "of",
            findtext: "Find",
            procmsg: "Processing, please wait ...",
            query: "",
            qtype: "",
            nomsg: "No items",
            minColToggle: 1,
            showToggleBtn: !0,
            hideOnSubmit: !0,
            autoload: !0,
            blockOpacity: .5,
            preProcess: !1,
            onDragCol: !1,
            onToggleCol: !1,
            onChangeSort: !1,
            onSuccess: !1,
            onError: !1,
            onSubmit: !1
        }, n), t(e).show().attr({cellPadding: 0, cellSpacing: 0, border: 0}).removeAttr("width");
        var i = {
            hset: {}, rePosDrag: function () {
                var e = 0 - this.hDiv.scrollLeft;
                this.hDiv.scrollLeft > 0 && (e -= Math.floor(n.cgwidth / 2)), t(i.cDrag).css({top: i.hDiv.offsetTop + 1});
                var r = this.cdpad;
                t("div", i.cDrag).hide(), t("thead tr:first th:visible", this.hDiv).each(function () {
                    var o = t("thead tr:first th:visible", i.hDiv).index(this), a = parseInt(t("div", this).width());
                    0 == e && (e -= Math.floor(n.cgwidth / 2)), a = a + e + r, isNaN(a) && (a = 0), t("div:eq(" + o + ")", i.cDrag).css({left: a + "px"}).show(), e = a
                })
            }, fixHeight: function (e) {
                e = !1, e || (e = t(i.bDiv).height());
                var r = t(this.hDiv).height();
                t("div", this.cDrag).each(function () {
                    t(this).height(e + r);

                });
                var o = parseInt(t(i.nDiv).height());
                o > e ? t(i.nDiv).height(e).width(200) : t(i.nDiv).height("auto").width("auto"), t(i.block).css({
                    height: e,
                    marginBottom: -1 * e
                });
                var a = i.bDiv.offsetTop + e;
                "auto" != n.height && n.resizable && (a = i.vDiv.offsetTop), t(i.rDiv).css({height: a})
            }, dragStart: function (e, r, o) {
                if ("colresize" == e) {
                    t(i.nDiv).hide(), t(i.nBtn).hide();
                    var a = t("div", this.cDrag).index(o), s = t("th:visible div:eq(" + a + ")", this.hDiv).width();
                    t(o).addClass("dragging").siblings().hide(), t(o).prev().addClass("dragging").show(), this.colresize = {
                        startX: r.pageX,
                        ol: parseInt(o.style.left),
                        ow: s,
                        n: a
                    }, t("body").css("cursor", "col-resize")
                } else if ("vresize" == e) {
                    var l = !1;
                    t("body").css("cursor", "row-resize"), o && (l = !0, t("body").css("cursor", "col-resize")), this.vresize = {
                        h: n.height,
                        sy: r.pageY,
                        w: n.width,
                        sx: r.pageX,
                        hgo: l
                    }
                } else"colMove" == e && (t(i.nDiv).hide(), t(i.nBtn).hide(), this.hset = t(this.hDiv).offset(), this.hset.right = this.hset.left + t("table", this.hDiv).width(), this.hset.bottom = this.hset.top + t("table", this.hDiv).height(), this.dcol = o, this.dcoln = t("th", this.hDiv).index(o), this.colCopy = document.createElement("div"), this.colCopy.className = "colCopy", this.colCopy.innerHTML = o.innerHTML, t.browser.msie && (this.colCopy.className = "colCopy ie"), t(this.colCopy).css({
                    position: "absolute",
                    "float": "left",
                    display: "none",
                    textAlign: o.align
                }), t("body").append(this.colCopy), t(this.cDrag).hide());
                t("body").noSelect()
            }, dragMove: function (e) {
                if (this.colresize) {
                    var i = this.colresize.n, r = e.pageX - this.colresize.startX, o = this.colresize.ol + r, a = this.colresize.ow + r;
                    a > n.minwidth && (t("div:eq(" + i + ")", this.cDrag).css("left", o), this.colresize.nw = a)
                } else if (this.vresize) {
                    var s = this.vresize, l = e.pageY, r = l - s.sy;
                    if (n.defwidth || (n.defwidth = n.width), "auto" != n.width && !n.nohresize && s.hgo) {
                        var c = e.pageX, u = c - s.sx, d = s.w + u;
                        d > n.defwidth && (this.gDiv.style.width = d + "px", n.width = d)
                    }
                    var h = s.h + r;
                    (h > n.minheight || n.height < n.minheight) && !s.hgo && (this.bDiv.style.height = h + "px", n.height = h, this.fixHeight(h)), s = null
                } else this.colCopy && (t(this.dcol).addClass("thMove").removeClass("thOver"), e.pageX > this.hset.right || e.pageX < this.hset.left || e.pageY > this.hset.bottom || e.pageY < this.hset.top ? t("body").css("cursor", "move") : t("body").css("cursor", "pointer"), t(this.colCopy).css({
                    top: e.pageY + 10,
                    left: e.pageX + 20,
                    display: "block"
                }))
            }, dragEnd: function () {
                if (this.colresize) {
                    var e = this.colresize.n, i = this.colresize.nw;
                    t("th:visible div:eq(" + e + ")", this.hDiv).css("width", i), t("tr", this.bDiv).each(function () {
                        t("td:visible div:eq(" + e + ")", this).css("width", i)
                    }), this.hDiv.scrollLeft = this.bDiv.scrollLeft, t("div:eq(" + e + ")", this.cDrag).siblings().show(), t(".dragging", this.cDrag).removeClass("dragging"), this.rePosDrag(), this.fixHeight(), this.colresize = !1
                } else this.vresize ? this.vresize = !1 : this.colCopy && (t(this.colCopy).remove(), null != this.dcolt && (this.dcoln > this.dcolt ? t("th:eq(" + this.dcolt + ")", this.hDiv).before(this.dcol) : t("th:eq(" + this.dcolt + ")", this.hDiv).after(this.dcol), this.switchCol(this.dcoln, this.dcolt), t(this.cdropleft).remove(), t(this.cdropright).remove(), this.rePosDrag(), n.onDragCol && n.onDragCol(this.dcoln, this.dcolt)), this.dcol = null, this.hset = null, this.dcoln = null, this.dcolt = null, this.colCopy = null, t(".thMove", this.hDiv).removeClass("thMove"), t(this.cDrag).show());
                t("body").css("cursor", "default"), t("body").noSelect(!1)
            }, toggleCol: function (r, o) {
                var a = t("th[axis='col" + r + "']", this.hDiv)[0], s = t("thead th", i.hDiv).index(a), l = t("input[value=" + r + "]", i.nDiv)[0];
                return null == o && (o = a.hidden), t("input:checked", i.nDiv).length < n.minColToggle && !o ? !1 : (o ? (a.hidden = !1, t(a).show(), l.checked = !0) : (a.hidden = !0, t(a).hide(), l.checked = !1), t("tbody tr", e).each(function () {
                    o ? t("td:eq(" + s + ")", this).show() : t("td:eq(" + s + ")", this).hide()
                }), this.rePosDrag(), n.onToggleCol && n.onToggleCol(r, o), o)
            }, switchCol: function (n, i) {
                t("tbody tr", e).each(function () {
                    n > i ? t("td:eq(" + i + ")", this).before(t("td:eq(" + n + ")", this)) : t("td:eq(" + i + ")", this).after(t("td:eq(" + n + ")", this))
                }), n > i ? t("tr:eq(" + i + ")", this.nDiv).before(t("tr:eq(" + n + ")", this.nDiv)) : t("tr:eq(" + i + ")", this.nDiv).after(t("tr:eq(" + n + ")", this.nDiv)), t.browser.msie && t.browser.version < 7 && (t("tr:eq(" + i + ") input", this.nDiv)[0].checked = !0), this.hDiv.scrollLeft = this.bDiv.scrollLeft
            }, scroll: function () {
                this.hDiv.scrollLeft = this.bDiv.scrollLeft, this.rePosDrag()
            }, addData: function (r) {
                if ("json" == n.dataType && (r = t.extend({
                        rows: [],
                        page: 0,
                        total: 0
                    }, r)), n.preProcess && (r = n.preProcess(r)), t(".pReload", this.pDiv).removeClass("loading"), this.loading = !1, !r)return t(".pPageStat", this.pDiv).html(n.errormsg), !1;
                if (n.total = "xml" == n.dataType ? +t("rows total", r).text() : r.total, 0 == n.total)return t("tr, a, td, div", e).unbind(), t(e).empty(), n.pages = 1, n.page = 1, this.buildpager(), t(".pPageStat", this.pDiv).html(n.nomsg), !1;
                n.pages = Math.ceil(n.total / n.rp), n.page = "xml" == n.dataType ? +t("rows page", r).text() : r.page, this.buildpager();
                var o = document.createElement("tbody");
                if ("json" == n.dataType)t.each(r.rows, function (e, r) {
                    var a = document.createElement("tr");
                    if (e % 2 && n.striped && (a.className = "erow"), r.id && (a.id = "row" + r.id), t("thead tr:first th", i.hDiv).each(function () {
                            var e = document.createElement("td"), i = t(this).attr("axis").substr(3);
                            e.align = this.align, e.innerHTML = "undefined" != typeof r.cell[i] ? null != r.cell[i] ? r.cell[i] : "" : r.cell[n.colModel[i].name], t(e).attr("abbr", t(this).attr("abbr")), t(a).append(e), e = null
                        }), t("thead", this.gDiv).length < 1)for (idx = 0; idx < cell.length; idx++) {
                        var s = document.createElement("td");
                        s.innerHTML = "undefined" != typeof r.cell[idx] ? null != r.cell[idx] ? r.cell[idx] : "" : r.cell[n.colModel[idx].name], t(a).append(s), s = null
                    }
                    t(o).append(a), a = null
                }); else if ("xml" == n.dataType) {
                    var a = 1;
                    t("rows row", r).each(function () {
                        a++;
                        var e = document.createElement("tr");
                        a % 2 && n.striped && (e.className = "erow");
                        var r = t(this).attr("id");
                        r && (e.id = "row" + r), r = null;
                        var s = this;
                        t("thead tr:first th", i.hDiv).each(function () {
                            var n = document.createElement("td"), i = t(this).attr("axis").substr(3);
                            n.align = this.align, n.innerHTML = t("cell:eq(" + i + ")", s).text(), t(n).attr("abbr", t(this).attr("abbr")), t(e).append(n), n = null
                        }), t("thead", this.gDiv).length < 1 && t("cell", this).each(function () {
                            var n = document.createElement("td");
                            n.innerHTML = t(this).text(), t(e).append(n), n = null
                        }), t(o).append(e), e = null, s = null
                    })
                }
                t("tr", e).unbind(), t(e).empty(), t(e).append(o), this.addCellProp(), this.addRowProp(), this.rePosDrag(), o = null, r = null, a = null, n.onSuccess && n.onSuccess(this), n.hideOnSubmit && t(i.block).remove(), this.hDiv.scrollLeft = this.bDiv.scrollLeft, t.browser.opera && t(e).css("visibility", "visible")
            }, changeSort: function (e) {
                return this.loading ? !0 : (t(i.nDiv).hide(), t(i.nBtn).hide(), n.sortname == t(e).attr("abbr") && (n.sortorder = "asc" == n.sortorder ? "desc" : "asc"), t(e).addClass("sorted").siblings().removeClass("sorted"), t(".sdesc", this.hDiv).removeClass("sdesc"), t(".sasc", this.hDiv).removeClass("sasc"), t("div", e).addClass("s" + n.sortorder), n.sortname = t(e).attr("abbr"), void(n.onChangeSort ? n.onChangeSort(n.sortname, n.sortorder) : this.populate()))
            }, buildpager: function () {
                t(".pcontrol input", this.pDiv).val(n.page), t(".pcontrol span", this.pDiv).html(n.pages);
                var e = (n.page - 1) * n.rp + 1, i = e + n.rp - 1;
                n.total < i && (i = n.total);
                var r = n.pagestat;
                r = r.replace(/{from}/, e), r = r.replace(/{to}/, i), r = r.replace(/{total}/, n.total), t(".pPageStat", this.pDiv).html(r)
            }, populate: function () {
                if (this.loading)return !0;
                if (n.onSubmit) {
                    var r = n.onSubmit();
                    if (!r)return !1
                }
                if (this.loading = !0, !n.url)return !1;
                t(".pPageStat", this.pDiv).html(n.procmsg), t(".pReload", this.pDiv).addClass("loading"), t(i.block).css({top: i.bDiv.offsetTop}), n.hideOnSubmit && t(this.gDiv).prepend(i.block), t.browser.opera && t(e).css("visibility", "hidden"), n.newp || (n.newp = 1), n.page > n.pages && (n.page = n.pages);
                var o = [{name: "page", value: n.newp}, {name: "rp", value: n.rp}, {
                    name: "sortname",
                    value: n.sortname
                }, {name: "sortorder", value: n.sortorder}, {name: "query", value: n.query}, {
                    name: "qtype",
                    value: n.qtype
                }];
                if (n.params)for (var a = 0; a < n.params.length; a++)o[o.length] = n.params[a];
                t.ajax({
                    type: n.method, url: n.url, data: o, dataType: n.dataType, success: function (t) {
                        i.addData(t)
                    }, error: function (t, e, i) {
                        try {
                            n.onError && n.onError(t, e, i)
                        } catch (r) {
                        }
                    }
                })
            }, doSearch: function () {
                n.query = t("input[name=q]", i.sDiv).val(), n.qtype = t("select[name=qtype]", i.sDiv).val(), n.newp = 1, this.populate()
            }, changePage: function (e) {
                if (this.loading)return !0;
                switch (e) {
                    case"first":
                        n.newp = 1;
                        break;
                    case"prev":
                        n.page > 1 && (n.newp = parseInt(n.page) - 1);
                        break;
                    case"next":
                        n.page < n.pages && (n.newp = parseInt(n.page) + 1);
                        break;
                    case"last":
                        n.newp = n.pages;
                        break;
                    case"input":
                        var i = parseInt(t(".pcontrol input", this.pDiv).val());
                        isNaN(i) && (i = 1), 1 > i ? i = 1 : i > n.pages && (i = n.pages), t(".pcontrol input", this.pDiv).val(i), n.newp = i
                }
                return n.newp == n.page ? !1 : void(n.onChangePage ? n.onChangePage(n.newp) : this.populate())
            }, addCellProp: function () {
                t("tbody tr td", i.bDiv).each(function () {
                    var e = document.createElement("div"), r = t("td", t(this).parent()).index(this), o = t("th:eq(" + r + ")", i.hDiv).get(0);
                    null != o && (n.sortname == t(o).attr("abbr") && n.sortname && (this.className = "sorted"), t(e).css({
                        textAlign: o.align,
                        width: t("div:first", o)[0].style.width
                    }), o.hidden && t(this).css("display", "none")), 0 == n.nowrap && t(e).css("white-space", "normal"), "" == this.innerHTML && (this.innerHTML = "&nbsp;"), e.innerHTML = this.innerHTML;
                    var a = t(this).parent()[0], s = !1;
                    a.id && (s = a.id.substr(3)), null != o && o.process && o.process(e, s), t(this).empty().append(e).removeAttr("width")
                })
            }, getCellDim: function (e) {
                var n = parseInt(t(e).height()), i = parseInt(t(e).parent().height()), r = parseInt(e.style.width), o = parseInt(t(e).parent().width()), a = e.offsetParent.offsetTop, s = e.offsetParent.offsetLeft, l = parseInt(t(e).css("paddingLeft")), c = parseInt(t(e).css("paddingTop"));
                return {ht: n, wt: r, top: a, left: s, pdl: l, pdt: c, pht: i, pwt: o}
            }, addRowProp: function () {
                t("tbody tr", i.bDiv).each(function () {
                    t(this).click(function (e) {
                        var i = e.target || e.srcElement;
                        return i.href || i.type ? !0 : (t(this).toggleClass("trSelected"), void(n.singleSelect && t(this).siblings().removeClass("trSelected")))
                    }).mousedown(function (e) {
                        e.shiftKey && (t(this).toggleClass("trSelected"), i.multisel = !0, this.focus(), t(i.gDiv).noSelect())
                    }).mouseup(function () {
                        i.multisel && (i.multisel = !1, t(i.gDiv).noSelect(!1))
                    }).hover(function (e) {
                        i.multisel && t(this).toggleClass("trSelected")
                    }, function () {
                    }), t.browser.msie && t.browser.version < 7 && t(this).hover(function () {
                        t(this).addClass("trOver")
                    }, function () {
                        t(this).removeClass("trOver")
                    })
                })
            }, pager: 0
        };
        if (n.colModel) {
            d = document.createElement("thead");
            for (var r = document.createElement("tr"), o = 0; o < n.colModel.length; o++) {
                var a = n.colModel[o], s = document.createElement("th");
                s.innerHTML = a.display, a.name && a.sortable && t(s).attr("abbr", a.name), t(s).attr("axis", "col" + o), a.align && (s.align = a.align), a.width && t(s).attr("width", a.width), t(a).attr("hide") && (s.hidden = !0), a.process && (s.process = a.process), t(r).append(s)
            }
            t(d).append(r), t(e).prepend(d)
        }
        if (i.gDiv = document.createElement("div"), i.mDiv = document.createElement("div"), i.hDiv = document.createElement("div"), i.bDiv = document.createElement("div"), i.vDiv = document.createElement("div"), i.rDiv = document.createElement("div"), i.cDrag = document.createElement("div"), i.block = document.createElement("div"), i.nDiv = document.createElement("div"), i.nBtn = document.createElement("div"), i.iDiv = document.createElement("div"), i.tDiv = document.createElement("div"), i.sDiv = document.createElement("div"), i.pDiv = document.createElement("div"), n.usepager || (i.pDiv.style.display = "none"), i.hTable = document.createElement("table"), i.gDiv.className = "flexigrid", "auto" != n.width && (i.gDiv.style.width = n.width + "px"), t.browser.msie && t(i.gDiv).addClass("ie"), n.novstripe && t(i.gDiv).addClass("novstripe"), t(e).before(i.gDiv), t(i.gDiv).append(e), n.buttons) {
            i.tDiv.className = "tDiv";
            var l = document.createElement("div");
            l.className = "tDiv2";
            for (var o = 0; o < n.buttons.length; o++) {
                var c = n.buttons[o];
                if (c.separator)t(l).append("<div class='btnseparator'></div>"); else {
                    var u = document.createElement("div");
                    u.className = "fbutton", u.innerHTML = "<div><span>" + c.name + "</span></div>", c.bclass && t("span", u).addClass(c.bclass).css({paddingLeft: 20}), u.onpress = c.onpress, u.name = c.name, c.onpress && t(u).click(function () {
                        this.onpress(this.name, i.gDiv)
                    }), t(l).append(u), t.browser.msie && t.browser.version < 7 && t(u).hover(function () {
                        t(this).addClass("fbOver")
                    }, function () {
                        t(this).removeClass("fbOver")
                    })
                }
            }
            t(i.tDiv).append(l), t(i.tDiv).append("<div style='clear:both'></div>"), t(i.gDiv).prepend(i.tDiv)
        }
        i.hDiv.className = "hDiv", t(e).before(i.hDiv), i.hTable.cellPadding = 0, i.hTable.cellSpacing = 0, t(i.hDiv).append('<div class="hDivBox"></div>'), t("div", i.hDiv).append(i.hTable);
        var d = t("thead:first", e).get(0);
        if (d && t(i.hTable).append(d), d = null, !n.colmodel)var h = 0;
        t("thead tr:first th", i.hDiv).each(function () {
            var e = document.createElement("div");
            t(this).attr("abbr") && (t(this).click(function (e) {
                if (!t(this).hasClass("thOver"))return !1;
                var n = e.target || e.srcElement;
                return n.href || n.type ? !0 : void i.changeSort(this)
            }), t(this).attr("abbr") == n.sortname && (this.className = "sorted", e.className = "s" + n.sortorder)), this.hidden && t(this).hide(), n.colmodel || t(this).attr("axis", "col" + h++), t(e).css({
                textAlign: this.align,
                width: this.width + "px"
            }), e.innerHTML = this.innerHTML, t(this).empty().append(e).removeAttr("width").mousedown(function (t) {
                i.dragStart("colMove", t, this)
            }).hover(function () {
                if (i.colresize || t(this).hasClass("thMove") || i.colCopy || t(this).addClass("thOver"), t(this).attr("abbr") == n.sortname || i.colCopy || i.colresize || !t(this).attr("abbr")) {
                    if (t(this).attr("abbr") == n.sortname && !i.colCopy && !i.colresize && t(this).attr("abbr")) {
                        var e = "asc" == n.sortorder ? "desc" : "asc";
                        t("div", this).removeClass("s" + n.sortorder).addClass("s" + e)
                    }
                } else t("div", this).addClass("s" + n.sortorder);
                if (i.colCopy) {
                    var r = t("th", i.hDiv).index(this);
                    if (r == i.dcoln)return !1;
                    t(this).append(r < i.dcoln ? i.cdropleft : i.cdropright), i.dcolt = r
                } else if (!i.colresize) {
                    var o = t("th:visible", i.hDiv).index(this), a = parseInt(t("div:eq(" + o + ")", i.cDrag).css("left")), s = jQuery(i.nBtn).outerWidth(), l = a - s + Math.floor(n.cgwidth / 2);
                    t(i.nDiv).hide(), t(i.nBtn).hide(), t(i.nBtn).css({left: l, top: i.hDiv.offsetTop}).show();
                    var c = parseInt(t(i.nDiv).width());
                    t(i.nDiv).css({top: i.bDiv.offsetTop}), l + c > t(i.gDiv).width() ? t(i.nDiv).css("left", a - c + 1) : t(i.nDiv).css("left", l), t(this).hasClass("sorted") ? t(i.nBtn).addClass("srtd") : t(i.nBtn).removeClass("srtd")
                }
            }, function () {
                if (t(this).removeClass("thOver"), t(this).attr("abbr") != n.sortname)t("div", this).removeClass("s" + n.sortorder); else if (t(this).attr("abbr") == n.sortname) {
                    var e = "asc" == n.sortorder ? "desc" : "asc";
                    t("div", this).addClass("s" + n.sortorder).removeClass("s" + e)
                }
                i.colCopy && (t(i.cdropleft).remove(), t(i.cdropright).remove(), i.dcolt = null)
            })
        }), i.bDiv.className = "bDiv", t(e).before(i.bDiv), t(i.bDiv).css({height: "auto" == n.height ? "auto" : n.height + "px"}).scroll(function (t) {
            i.scroll()
        }).append(e), "auto" == n.height && t("table", i.bDiv).addClass("autoht"), i.addCellProp(), i.addRowProp();
        var p = t("thead tr:first th:first", i.hDiv).get(0);
        if (null != p) {
            i.cDrag.className = "cDrag", i.cdpad = 0, i.cdpad += isNaN(parseInt(t("div", p).css("borderLeftWidth"))) ? 0 : parseInt(t("div", p).css("borderLeftWidth")), i.cdpad += isNaN(parseInt(t("div", p).css("borderRightWidth"))) ? 0 : parseInt(t("div", p).css("borderRightWidth")), i.cdpad += isNaN(parseInt(t("div", p).css("paddingLeft"))) ? 0 : parseInt(t("div", p).css("paddingLeft")), i.cdpad += isNaN(parseInt(t("div", p).css("paddingRight"))) ? 0 : parseInt(t("div", p).css("paddingRight")), i.cdpad += isNaN(parseInt(t(p).css("borderLeftWidth"))) ? 0 : parseInt(t(p).css("borderLeftWidth")), i.cdpad += isNaN(parseInt(t(p).css("borderRightWidth"))) ? 0 : parseInt(t(p).css("borderRightWidth")), i.cdpad += isNaN(parseInt(t(p).css("paddingLeft"))) ? 0 : parseInt(t(p).css("paddingLeft")), i.cdpad += isNaN(parseInt(t(p).css("paddingRight"))) ? 0 : parseInt(t(p).css("paddingRight")), t(i.bDiv).before(i.cDrag);
            var f = t(i.bDiv).height(), g = t(i.hDiv).height();
            t(i.cDrag).css({top: -g + "px"}), t("thead tr:first th", i.hDiv).each(function () {
                var e = document.createElement("div");
                t(i.cDrag).append(e), n.cgwidth || (n.cgwidth = t(e).width()), t(e).css({height: f + g}).mousedown(function (t) {
                    i.dragStart("colresize", t, this)
                }), t.browser.msie && t.browser.version < 7 && (i.fixHeight(t(i.gDiv).height()), t(e).hover(function () {
                    i.fixHeight(), t(this).addClass("dragging")
                }, function () {
                    i.colresize || t(this).removeClass("dragging")
                }))
            })
        }
        if (n.striped && t("tbody tr:odd", i.bDiv).addClass("erow"), n.resizable && "auto" != n.height && (i.vDiv.className = "vGrip", t(i.vDiv).mousedown(function (t) {
                i.dragStart("vresize", t)
            }).html("<span></span>"), t(i.bDiv).after(i.vDiv)), n.resizable && "auto" != n.width && !n.nohresize && (i.rDiv.className = "hGrip", t(i.rDiv).mousedown(function (t) {
                i.dragStart("vresize", t, !0)
            }).html("<span></span>").css("height", t(i.gDiv).height()), t.browser.msie && t.browser.version < 7 && t(i.rDiv).hover(function () {
                t(this).addClass("hgOver")
            }, function () {
                t(this).removeClass("hgOver")
            }), t(i.gDiv).append(i.rDiv)), n.usepager) {
            i.pDiv.className = "pDiv", i.pDiv.innerHTML = '<div class="pDiv2"></div>', t(i.bDiv).after(i.pDiv);
            var v = ' <div class="pGroup"> <div class="pFirst pButton"><span></span></div><div class="pPrev pButton"><span></span></div> </div> <div class="btnseparator"></div> <div class="pGroup"><span class="pcontrol">' + n.pagetext + ' <input type="text" size="4" value="1" /> ' + n.outof + ' <span> 1 </span></span></div> <div class="btnseparator"></div> <div class="pGroup"> <div class="pNext pButton"><span></span></div><div class="pLast pButton"><span></span></div> </div> <div class="btnseparator"></div> <div class="pGroup"> <div class="pReload pButton"><span></span></div> </div> <div class="btnseparator"></div> <div class="pGroup"><span class="pPageStat"></span></div>';
            if (t("div", i.pDiv).html(v), t(".pReload", i.pDiv).click(function () {
                    i.populate()
                }), t(".pFirst", i.pDiv).click(function () {
                    i.changePage("first")
                }), t(".pPrev", i.pDiv).click(function () {
                    i.changePage("prev")
                }), t(".pNext", i.pDiv).click(function () {
                    i.changePage("next")
                }), t(".pLast", i.pDiv).click(function () {
                    i.changePage("last")
                }), t(".pcontrol input", i.pDiv).keydown(function (t) {
                    13 == t.keyCode && i.changePage("input")
                }), t.browser.msie && t.browser.version < 7 && t(".pButton", i.pDiv).hover(function () {
                    t(this).addClass("pBtnOver")
                }, function () {
                    t(this).removeClass("pBtnOver")
                }), n.useRp) {
                for (var m = "", y = "", b = 0; b < n.rpOptions.length; b++)y = n.rp == n.rpOptions[b] ? 'selected="selected"' : "", m += "<option value='" + n.rpOptions[b] + "' " + y + " >" + n.rpOptions[b] + "&nbsp;&nbsp;</option>";
                t(".pDiv2", i.pDiv).prepend("<div class='pGroup'><select name='rp'>" + m + "</select></div> <div class='btnseparator'></div>"), t("select", i.pDiv).change(function () {
                    n.onRpChange ? n.onRpChange(+this.value) : (n.newp = 1, n.rp = +this.value, i.populate())
                })
            }
            if (n.searchitems) {
                t(".pDiv2", i.pDiv).prepend("<div class='pGroup'> <div class='pSearch pButton'><span></span></div> </div>  <div class='btnseparator'></div>"), t(".pSearch", i.pDiv).click(function () {
                    t(i.sDiv).slideToggle("fast", function () {
                        t(".sDiv:visible input:first", i.gDiv).trigger("focus")
                    })
                }), i.sDiv.className = "sDiv";
                for (var w = n.searchitems, x = "", y = "", C = 0; C < w.length; C++)"" == n.qtype && 1 == w[C].isdefault ? (n.qtype = w[C].name, y = 'selected="selected"') : y = "", x += "<option value='" + w[C].name + "' " + y + " >" + w[C].display + "&nbsp;&nbsp;</option>";
                "" == n.qtype && (n.qtype = w[0].name), t(i.sDiv).append("<div class='sDiv2'>" + n.findtext + " <input type='text' value='" + n.query + "' size='30' name='q' class='qsbox' />  <select name='qtype'>" + x + "</select></div>"), t("input[name=q]", i.sDiv).keydown(function (t) {
                    13 == t.keyCode && i.doSearch()
                }), t("select[name=qtype]", i.sDiv).keydown(function (t) {
                    13 == t.keyCode && i.doSearch()
                }), t("input[value=Clear]", i.sDiv).click(function () {
                    t("input[name=q]", i.sDiv).val(""), n.query = "", i.doSearch()
                }), t(i.bDiv).after(i.sDiv)
            }
        }
        t(i.pDiv, i.sDiv).append("<div style='clear:both'></div>"), n.title && (i.mDiv.className = "mDiv", i.mDiv.innerHTML = '<div class="ftitle">' + n.title + "</div>", t(i.gDiv).prepend(i.mDiv), n.showTableToggleBtn && (t(i.mDiv).append('<div class="ptogtitle" title="Minimize/Maximize Table"><span></span></div>'), t("div.ptogtitle", i.mDiv).click(function () {
            t(i.gDiv).toggleClass("hideBody"), t(this).toggleClass("vsble")
        }))), i.cdropleft = document.createElement("span"), i.cdropleft.className = "cdropleft", i.cdropright = document.createElement("span"), i.cdropright.className = "cdropright", i.block.className = "gBlock";
        var S = t(i.bDiv).height(), T = i.bDiv.offsetTop;
        if (t(i.block).css({
                width: i.bDiv.style.width,
                height: S,
                background: "white",
                position: "relative",
                marginBottom: -1 * S,
                zIndex: 1,
                top: T,
                left: "0px"
            }), t(i.block).fadeTo(0, n.blockOpacity), t("th", i.hDiv).length) {
            i.nDiv.className = "nDiv", i.nDiv.innerHTML = "<table cellpadding='0' cellspacing='0'><tbody></tbody></table>", t(i.nDiv).css({
                marginBottom: -1 * S,
                display: "none",
                top: T
            }).noSelect();
            var D = 0;
            t("th div", i.hDiv).each(function () {
                var e = t("th[axis='col" + D + "']", i.hDiv)[0], n = 'checked="checked"';
                "none" == e.style.display && (n = ""), t("tbody", i.nDiv).append('<tr><td class="ndcol1"><input type="checkbox" ' + n + ' class="togCol" value="' + D + '" /></td><td class="ndcol2">' + this.innerHTML + "</td></tr>"), D++
            }), t.browser.msie && t.browser.version < 7 && t("tr", i.nDiv).hover(function () {
                t(this).addClass("ndcolover")
            }, function () {
                t(this).removeClass("ndcolover")
            }), t("td.ndcol2", i.nDiv).click(function () {
                return t("input:checked", i.nDiv).length <= n.minColToggle && t(this).prev().find("input")[0].checked ? !1 : i.toggleCol(t(this).prev().find("input").val())
            }), t("input.togCol", i.nDiv).click(function () {
                return t("input:checked", i.nDiv).length < n.minColToggle && 0 == this.checked ? !1 : void t(this).parent().next().trigger("click")
            }), t(i.gDiv).prepend(i.nDiv), t(i.nBtn).addClass("nBtn").html("<div></div>").attr("title", "Hide/Show Columns").click(function () {
                return t(i.nDiv).toggle(), !0
            }), n.showToggleBtn && t(i.gDiv).prepend(i.nBtn)
        }
        return t(i.iDiv).addClass("iDiv").css({display: "none"}), t(i.bDiv).append(i.iDiv), t(i.bDiv).hover(function () {
            t(i.nDiv).hide(), t(i.nBtn).hide()
        }, function () {
            i.multisel && (i.multisel = !1)
        }), t(i.gDiv).hover(function () {
        }, function () {
            t(i.nDiv).hide(), t(i.nBtn).hide()
        }), t(document).mousemove(function (t) {
            i.dragMove(t)
        }).mouseup(function (t) {
            i.dragEnd()
        }).hover(function () {
        }, function () {
            i.dragEnd()
        }), t.browser.msie && t.browser.version < 7 && (t(".hDiv,.bDiv,.mDiv,.pDiv,.vGrip,.tDiv, .sDiv", i.gDiv).css({width: "100%"}), t(i.gDiv).addClass("ie6"), "auto" != n.width && t(i.gDiv).addClass("ie6fullwidthbug")), i.rePosDrag(), i.fixHeight(), e.p = n, e.grid = i, n.url && n.autoload && i.populate(), e
    };
    var e = !1;
    t(document).ready(function () {
        e = !0
    }), t.fn.flexigrid = function (n) {
        return this.each(function () {
            if (e)t.addFlex(this, n); else {
                t(this).hide();
                var i = this;
                t(document).ready(function () {
                    t.addFlex(i, n)
                })
            }
        })
    }, t.fn.flexReload = function (t) {
        return this.each(function () {
            this.grid && this.p.url && this.grid.populate()
        })
    }, t.fn.flexOptions = function (e) {
        return this.each(function () {
            this.grid && t.extend(this.p, e)
        })
    }, t.fn.flexToggleCol = function (t, e) {
        return this.each(function () {
            this.grid && this.grid.toggleCol(t, e)
        })
    }, t.fn.flexAddData = function (t) {
        return this.each(function () {
            this.grid && this.grid.addData(t)
        })
    }, t.fn.noSelect = function (e) {
        var n = null == e ? !0 : e;
        return this.each(n ? function () {
            t.browser.msie || t.browser.safari ? t(this).bind("selectstart", function () {
                return !1
            }) : t.browser.mozilla ? (t(this).css("MozUserSelect", "none"), t("body").trigger("focus")) : t.browser.opera ? t(this).bind("mousedown", function () {
                return !1
            }) : t(this).attr("unselectable", "on")
        } : function () {
            t.browser.msie || t.browser.safari ? t(this).unbind("selectstart") : t.browser.mozilla ? t(this).css("MozUserSelect", "inherit") : t.browser.opera ? t(this).unbind("mousedown") : t(this).removeAttr("unselectable", "on")
        })
    }
}(jQuery), function (t, e, n) {
    !function (t) {
        "use strict";
        "function" == typeof define && define.amd ? define("datatables", ["jquery"], t) : "object" == typeof exports ? module.exports = t(require("jquery")) : jQuery && !jQuery.fn.dataTable && t(jQuery)
    }(function (i) {
        "use strict";
        function r(t) {
            var e, n, o = "a aa ai ao as b fn i m o s ", a = {};
            i.each(t, function (i, s) {
                e = i.match(/^([^A-Z]+?)([A-Z])/), e && -1 !== o.indexOf(e[1] + " ") && (n = i.replace(e[0], e[2].toLowerCase()), a[n] = i, "o" === e[1] && r(t[i]))
            }), t._hungarianMap = a
        }

        function o(t, e, a) {
            t._hungarianMap || r(t);
            var s;
            i.each(e, function (r, l) {
                s = t._hungarianMap[r], s === n || !a && e[s] !== n || ("o" === s.charAt(0) ? (e[s] || (e[s] = {}), i.extend(!0, e[s], e[r]), o(t[s], e[s], a)) : e[s] = e[r])
            })
        }

        function a(t) {
            var e = Xt.defaults.oLanguage, n = t.sZeroRecords;
            !t.sEmptyTable && n && "No data available in table" === e.sEmptyTable && Mt(t, t, "sZeroRecords", "sEmptyTable"), !t.sLoadingRecords && n && "Loading..." === e.sLoadingRecords && Mt(t, t, "sZeroRecords", "sLoadingRecords"), t.sInfoThousands && (t.sThousands = t.sInfoThousands);
            var i = t.sDecimal;
            i && Ut(i)
        }

        function s(t) {
            ye(t, "ordering", "bSort"), ye(t, "orderMulti", "bSortMulti"), ye(t, "orderClasses", "bSortClasses"), ye(t, "orderCellsTop", "bSortCellsTop"), ye(t, "order", "aaSorting"), ye(t, "orderFixed", "aaSortingFixed"), ye(t, "paging", "bPaginate"), ye(t, "pagingType", "sPaginationType"), ye(t, "pageLength", "iDisplayLength"), ye(t, "searching", "bFilter");
            var e = t.aoSearchCols;
            if (e)for (var n = 0, i = e.length; i > n; n++)e[n] && o(Xt.models.oSearch, e[n])
        }

        function l(t) {
            ye(t, "orderable", "bSortable"), ye(t, "orderData", "aDataSort"), ye(t, "orderSequence", "asSorting"), ye(t, "orderDataType", "sortDataType");
            var e = t.aDataSort;
            e && !i.isArray(e) && (t.aDataSort = [e])
        }

        function c(t) {
            var e = t.oBrowser, n = i("<div/>").css({
                position: "absolute",
                top: 0,
                left: 0,
                height: 1,
                width: 1,
                overflow: "hidden"
            }).append(i("<div/>").css({
                position: "absolute",
                top: 1,
                left: 1,
                width: 100,
                overflow: "scroll"
            }).append(i('<div class="test"/>').css({width: "100%", height: 10}))).appendTo("body"), r = n.find(".test");
            e.bScrollOversize = 100 === r[0].offsetWidth, e.bScrollbarLeft = 1 !== Math.round(r.offset().left), n.remove()
        }

        function u(t, e, i, r, o, a) {
            var s, l = r, c = !1;
            for (i !== n && (s = i, c = !0); l !== o;)t.hasOwnProperty(l) && (s = c ? e(s, t[l], l, t) : t[l], c = !0, l += a);
            return s
        }

        function d(t, n) {
            var r = Xt.defaults.column, o = t.aoColumns.length, a = i.extend({}, Xt.models.oColumn, r, {
                nTh: n ? n : e.createElement("th"),
                sTitle: r.sTitle ? r.sTitle : n ? n.innerHTML : "",
                aDataSort: r.aDataSort ? r.aDataSort : [o],
                mData: r.mData ? r.mData : o,
                idx: o
            });
            t.aoColumns.push(a);
            var s = t.aoPreSearchCols;
            s[o] = i.extend({}, Xt.models.oSearch, s[o]), h(t, o, i(n).data())
        }

        function h(t, e, r) {
            var a = t.aoColumns[e], s = t.oClasses, c = i(a.nTh);
            if (!a.sWidthOrig) {
                a.sWidthOrig = c.attr("width") || null;
                var u = (c.attr("style") || "").match(/width:\s*(\d+[pxem%]+)/);
                u && (a.sWidthOrig = u[1])
            }
            r !== n && null !== r && (l(r), o(Xt.defaults.column, r), r.mDataProp === n || r.mData || (r.mData = r.mDataProp), r.sType && (a._sManualType = r.sType), r.className && !r.sClass && (r.sClass = r.className), i.extend(a, r), Mt(a, r, "sWidth", "sWidthOrig"), r.iDataSort !== n && (a.aDataSort = [r.iDataSort]), Mt(a, r, "aDataSort"));
            var d = a.mData, h = k(d), p = a.mRender ? k(a.mRender) : null, f = function (t) {
                return "string" == typeof t && -1 !== t.indexOf("@")
            };
            a._bAttrSrc = i.isPlainObject(d) && (f(d.sort) || f(d.type) || f(d.filter)), a.fnGetData = function (t, e, i) {
                var r = h(t, e, n, i);
                return p && e ? p(r, e, t, i) : r
            }, a.fnSetData = function (t, e, n) {
                return E(d)(t, e, n)
            }, "number" != typeof d && (t._rowReadObject = !0), t.oFeatures.bSort || (a.bSortable = !1, c.addClass(s.sSortableNone));
            var g = -1 !== i.inArray("asc", a.asSorting), v = -1 !== i.inArray("desc", a.asSorting);
            a.bSortable && (g || v) ? g && !v ? (a.sSortingClass = s.sSortableAsc, a.sSortingClassJUI = s.sSortJUIAscAllowed) : !g && v ? (a.sSortingClass = s.sSortableDesc, a.sSortingClassJUI = s.sSortJUIDescAllowed) : (a.sSortingClass = s.sSortable, a.sSortingClassJUI = s.sSortJUI) : (a.sSortingClass = s.sSortableNone, a.sSortingClassJUI = "")
        }

        function p(t) {
            if (t.oFeatures.bAutoWidth !== !1) {
                var e = t.aoColumns;
                yt(t);
                for (var n = 0, i = e.length; i > n; n++)e[n].nTh.style.width = e[n].sWidth
            }
            var r = t.oScroll;
            ("" !== r.sY || "" !== r.sX) && vt(t), Ht(t, null, "column-sizing", [t])
        }

        function f(t, e) {
            var n = m(t, "bVisible");
            return "number" == typeof n[e] ? n[e] : null
        }

        function g(t, e) {
            var n = m(t, "bVisible"), r = i.inArray(e, n);
            return -1 !== r ? r : null
        }

        function v(t) {
            return m(t, "bVisible").length
        }

        function m(t, e) {
            var n = [];
            return i.map(t.aoColumns, function (t, i) {
                t[e] && n.push(i)
            }), n
        }

        function y(t) {
            var e, i, r, o, a, s, l, c, u, d = t.aoColumns, h = t.aoData, p = Xt.ext.type.detect;
            for (e = 0, i = d.length; i > e; e++)if (l = d[e], u = [], !l.sType && l._sManualType)l.sType = l._sManualType; else if (!l.sType) {
                for (r = 0, o = p.length; o > r; r++) {
                    for (a = 0, s = h.length; s > a && (u[a] === n && (u[a] = T(t, a, e, "type")), c = p[r](u[a], t), c || r === p.length - 1) && "html" !== c; a++);
                    if (c) {
                        l.sType = c;
                        break
                    }
                }
                l.sType || (l.sType = "string")
            }
        }

        function b(t, e, r, o) {
            var a, s, l, c, u, h, p, f = t.aoColumns;
            if (e)for (a = e.length - 1; a >= 0; a--) {
                p = e[a];
                var g = p.targets !== n ? p.targets : p.aTargets;
                for (i.isArray(g) || (g = [g]), l = 0, c = g.length; c > l; l++)if ("number" == typeof g[l] && g[l] >= 0) {
                    for (; f.length <= g[l];)d(t);
                    o(g[l], p)
                } else if ("number" == typeof g[l] && g[l] < 0)o(f.length + g[l], p); else if ("string" == typeof g[l])for (u = 0, h = f.length; h > u; u++)("_all" == g[l] || i(f[u].nTh).hasClass(g[l])) && o(u, p)
            }
            if (r)for (a = 0, s = r.length; s > a; a++)o(a, r[a])
        }

        function w(t, e, n, r) {
            var o = t.aoData.length, a = i.extend(!0, {}, Xt.models.oRow, {src: n ? "dom" : "data"});
            a._aData = e, t.aoData.push(a);
            for (var s = t.aoColumns, l = 0, c = s.length; c > l; l++)n && D(t, o, l, T(t, o, l)), s[l].sType = null;
            return t.aiDisplayMaster.push(o), (n || !t.oFeatures.bDeferRender) && L(t, o, n, r), o
        }

        function x(t, e) {
            var n;
            return e instanceof i || (e = i(e)), e.map(function (e, i) {
                return n = I(t, i), w(t, n.data, i, n.cells)
            })
        }

        function C(t, e) {
            return e._DT_RowIndex !== n ? e._DT_RowIndex : null
        }

        function S(t, e, n) {
            return i.inArray(n, t.aoData[e].anCells)
        }

        function T(t, e, i, r) {
            var o = t.iDraw, a = t.aoColumns[i], s = t.aoData[e]._aData, l = a.sDefaultContent, c = a.fnGetData(s, r, {
                settings: t,
                row: e,
                col: i
            });
            if (c === n)return t.iDrawError != o && null === l && (jt(t, 0, "Requested unknown parameter " + ("function" == typeof a.mData ? "{function}" : "'" + a.mData + "'") + " for row " + e, 4), t.iDrawError = o), l;
            if (c !== s && null !== c || null === l) {
                if ("function" == typeof c)return c.call(s)
            } else c = l;
            return null === c && "display" == r ? "" : c
        }

        function D(t, e, n, i) {
            var r = t.aoColumns[n], o = t.aoData[e]._aData;
            r.fnSetData(o, i, {settings: t, row: e, col: n})
        }

        function _(t) {
            return i.map(t.match(/(\\.|[^\.])+/g), function (t) {
                return t.replace(/\\./g, ".")
            })
        }

        function k(t) {
            if (i.isPlainObject(t)) {
                var e = {};
                return i.each(t, function (t, n) {
                    n && (e[t] = k(n))
                }), function (t, i, r, o) {
                    var a = e[i] || e._;
                    return a !== n ? a(t, i, r, o) : t
                }
            }
            if (null === t)return function (t) {
                return t
            };
            if ("function" == typeof t)return function (e, n, i, r) {
                return t(e, n, i, r)
            };
            if ("string" != typeof t || -1 === t.indexOf(".") && -1 === t.indexOf("[") && -1 === t.indexOf("("))return function (e, n) {
                return e[t]
            };
            var r = function (t, e, i) {
                var o, a, s, l;
                if ("" !== i)for (var c = _(i), u = 0, d = c.length; d > u; u++) {
                    if (o = c[u].match(be), a = c[u].match(we), o) {
                        c[u] = c[u].replace(be, ""), "" !== c[u] && (t = t[c[u]]), s = [], c.splice(0, u + 1), l = c.join(".");
                        for (var h = 0, p = t.length; p > h; h++)s.push(r(t[h], e, l));
                        var f = o[0].substring(1, o[0].length - 1);
                        t = "" === f ? s : s.join(f);
                        break
                    }
                    if (a)c[u] = c[u].replace(we, ""), t = t[c[u]](); else {
                        if (null === t || t[c[u]] === n)return n;
                        t = t[c[u]]
                    }
                }
                return t
            };
            return function (e, n) {
                return r(e, n, t)
            }
        }

        function E(t) {
            if (i.isPlainObject(t))return E(t._);
            if (null === t)return function () {
            };
            if ("function" == typeof t)return function (e, n, i) {
                t(e, "set", n, i)
            };
            if ("string" != typeof t || -1 === t.indexOf(".") && -1 === t.indexOf("[") && -1 === t.indexOf("("))return function (e, n) {
                e[t] = n
            };
            var e = function (t, i, r) {
                for (var o, a, s, l, c, u = _(r), d = u[u.length - 1], h = 0, p = u.length - 1; p > h; h++) {
                    if (a = u[h].match(be), s = u[h].match(we), a) {
                        u[h] = u[h].replace(be, ""), t[u[h]] = [], o = u.slice(), o.splice(0, h + 1), c = o.join(".");
                        for (var f = 0, g = i.length; g > f; f++)l = {}, e(l, i[f], c), t[u[h]].push(l);
                        return
                    }
                    s && (u[h] = u[h].replace(we, ""), t = t[u[h]](i)), (null === t[u[h]] || t[u[h]] === n) && (t[u[h]] = {}), t = t[u[h]]
                }
                d.match(we) ? t = t[d.replace(we, "")](i) : t[d.replace(be, "")] = i
            };
            return function (n, i) {
                return e(n, i, t)
            }
        }

        function A(t) {
            return he(t.aoData, "_aData")
        }

        function O(t) {
            t.aoData.length = 0, t.aiDisplayMaster.length = 0, t.aiDisplay.length = 0
        }

        function N(t, e, i) {
            for (var r = -1, o = 0, a = t.length; a > o; o++)t[o] == e ? r = o : t[o] > e && t[o]--;
            -1 != r && i === n && t.splice(r, 1)
        }

        function $(t, e, i, r) {
            var o, a, s = t.aoData[e], l = function (n, i) {
                for (; n.childNodes.length;)n.removeChild(n.firstChild);
                n.innerHTML = T(t, e, i, "display")
            };
            if ("dom" !== i && (i && "auto" !== i || "dom" !== s.src)) {
                var c = s.anCells;
                if (c)if (r !== n)l(c[r], r); else for (o = 0, a = c.length; a > o; o++)l(c[o], o)
            } else s._aData = I(t, s, r, r === n ? n : s._aData).data;
            s._aSortData = null, s._aFilterData = null;
            var u = t.aoColumns;
            if (r !== n)u[r].sType = null; else {
                for (o = 0, a = u.length; a > o; o++)u[o].sType = null;
                P(s)
            }
        }

        function I(t, e, r, o) {
            var a, s, l, c = [], u = e.firstChild, d = 0, h = t.aoColumns, p = t._rowReadObject;
            o = o || p ? {} : [];
            var f = function (t, e) {
                if ("string" == typeof t) {
                    var n = t.indexOf("@");
                    if (-1 !== n) {
                        var i = t.substring(n + 1), r = E(t);
                        r(o, e.getAttribute(i))
                    }
                }
            }, g = function (t) {
                if (r === n || r === d)if (s = h[d], l = i.trim(t.innerHTML), s && s._bAttrSrc) {
                    var e = E(s.mData._);
                    e(o, l),
                        f(s.mData.sort, t), f(s.mData.type, t), f(s.mData.filter, t)
                } else p ? (s._setter || (s._setter = E(s.mData)), s._setter(o, l)) : o[d] = l;
                d++
            };
            if (u)for (; u;)a = u.nodeName.toUpperCase(), ("TD" == a || "TH" == a) && (g(u), c.push(u)), u = u.nextSibling; else {
                c = e.anCells;
                for (var v = 0, m = c.length; m > v; v++)g(c[v])
            }
            return {data: o, cells: c}
        }

        function L(t, n, i, r) {
            var o, a, s, l, c, u = t.aoData[n], d = u._aData, h = [];
            if (null === u.nTr) {
                for (o = i || e.createElement("tr"), u.nTr = o, u.anCells = h, o._DT_RowIndex = n, P(u), l = 0, c = t.aoColumns.length; c > l; l++)s = t.aoColumns[l], a = i ? r[l] : e.createElement(s.sCellType), h.push(a), (!i || s.mRender || s.mData !== l) && (a.innerHTML = T(t, n, l, "display")), s.sClass && (a.className += " " + s.sClass), s.bVisible && !i ? o.appendChild(a) : !s.bVisible && i && a.parentNode.removeChild(a), s.fnCreatedCell && s.fnCreatedCell.call(t.oInstance, a, T(t, n, l), d, n, l);
                Ht(t, "aoRowCreatedCallback", null, [o, d, n])
            }
            u.nTr.setAttribute("role", "row")
        }

        function P(t) {
            var e = t.nTr, n = t._aData;
            if (e) {
                if (n.DT_RowId && (e.id = n.DT_RowId), n.DT_RowClass) {
                    var r = n.DT_RowClass.split(" ");
                    t.__rowc = t.__rowc ? me(t.__rowc.concat(r)) : r, i(e).removeClass(t.__rowc.join(" ")).addClass(n.DT_RowClass)
                }
                n.DT_RowAttr && i(e).attr(n.DT_RowAttr), n.DT_RowData && i(e).data(n.DT_RowData)
            }
        }

        function j(t) {
            var e, n, r, o, a, s = t.nTHead, l = t.nTFoot, c = 0 === i("th, td", s).length, u = t.oClasses, d = t.aoColumns;
            for (c && (o = i("<tr/>").appendTo(s)), e = 0, n = d.length; n > e; e++)a = d[e], r = i(a.nTh).addClass(a.sClass), c && r.appendTo(o), t.oFeatures.bSort && (r.addClass(a.sSortingClass), a.bSortable !== !1 && (r.attr("tabindex", t.iTabIndex).attr("aria-controls", t.sTableId), Ot(t, a.nTh, e))), a.sTitle != r.html() && r.html(a.sTitle), zt(t, "header")(t, r, a, u);
            if (c && H(t.aoHeader, s), i(s).find(">tr").attr("role", "row"), i(s).find(">tr>th, >tr>td").addClass(u.sHeaderTH), i(l).find(">tr>th, >tr>td").addClass(u.sFooterTH), null !== l) {
                var h = t.aoFooter[0];
                for (e = 0, n = h.length; n > e; e++)a = d[e], a.nTf = h[e].cell, a.sClass && i(a.nTf).addClass(a.sClass)
            }
        }

        function M(t, e, r) {
            var o, a, s, l, c, u, d, h, p, f = [], g = [], v = t.aoColumns.length;
            if (e) {
                for (r === n && (r = !1), o = 0, a = e.length; a > o; o++) {
                    for (f[o] = e[o].slice(), f[o].nTr = e[o].nTr, s = v - 1; s >= 0; s--)t.aoColumns[s].bVisible || r || f[o].splice(s, 1);
                    g.push([])
                }
                for (o = 0, a = f.length; a > o; o++) {
                    if (d = f[o].nTr)for (; u = d.firstChild;)d.removeChild(u);
                    for (s = 0, l = f[o].length; l > s; s++)if (h = 1, p = 1, g[o][s] === n) {
                        for (d.appendChild(f[o][s].cell), g[o][s] = 1; f[o + h] !== n && f[o][s].cell == f[o + h][s].cell;)g[o + h][s] = 1, h++;
                        for (; f[o][s + p] !== n && f[o][s].cell == f[o][s + p].cell;) {
                            for (c = 0; h > c; c++)g[o + c][s + p] = 1;
                            p++
                        }
                        i(f[o][s].cell).attr("rowspan", h).attr("colspan", p)
                    }
                }
            }
        }

        function R(t) {
            var e = Ht(t, "aoPreDrawCallback", "preDraw", [t]);
            if (-1 !== i.inArray(!1, e))return void ft(t, !1);
            var r = [], o = 0, a = t.asStripeClasses, s = a.length, l = (t.aoOpenRows.length, t.oLanguage), c = t.iInitDisplayStart, u = "ssp" == Bt(t), d = t.aiDisplay;
            t.bDrawing = !0, c !== n && -1 !== c && (t._iDisplayStart = u ? c : c >= t.fnRecordsDisplay() ? 0 : c, t.iInitDisplayStart = -1);
            var h = t._iDisplayStart, p = t.fnDisplayEnd();
            if (t.bDeferLoading)t.bDeferLoading = !1, t.iDraw++, ft(t, !1); else if (u) {
                if (!t.bDestroying && !B(t))return
            } else t.iDraw++;
            if (0 !== d.length)for (var f = u ? 0 : h, g = u ? t.aoData.length : p, m = f; g > m; m++) {
                var y = d[m], b = t.aoData[y];
                null === b.nTr && L(t, y);
                var w = b.nTr;
                if (0 !== s) {
                    var x = a[o % s];
                    b._sRowStripe != x && (i(w).removeClass(b._sRowStripe).addClass(x), b._sRowStripe = x)
                }
                Ht(t, "aoRowCallback", null, [w, b._aData, o, m]), r.push(w), o++
            } else {
                var C = l.sZeroRecords;
                1 == t.iDraw && "ajax" == Bt(t) ? C = l.sLoadingRecords : l.sEmptyTable && 0 === t.fnRecordsTotal() && (C = l.sEmptyTable), r[0] = i("<tr/>", {"class": s ? a[0] : ""}).append(i("<td />", {
                    valign: "top",
                    colSpan: v(t),
                    "class": t.oClasses.sRowEmpty
                }).html(C))[0]
            }
            Ht(t, "aoHeaderCallback", "header", [i(t.nTHead).children("tr")[0], A(t), h, p, d]), Ht(t, "aoFooterCallback", "footer", [i(t.nTFoot).children("tr")[0], A(t), h, p, d]);
            var S = i(t.nTBody);
            S.children().detach(), S.append(i(r)), Ht(t, "aoDrawCallback", "draw", [t]), t.bSorted = !1, t.bFiltered = !1, t.bDrawing = !1
        }

        function F(t, e) {
            var n = t.oFeatures, i = n.bSort, r = n.bFilter;
            i && kt(t), r ? Y(t, t.oPreviousSearch) : t.aiDisplay = t.aiDisplayMaster.slice(), e !== !0 && (t._iDisplayStart = 0), t._drawHold = e, R(t), t._drawHold = !1
        }

        function q(t) {
            var e = t.oClasses, n = i(t.nTable), r = i("<div/>").insertBefore(n), o = t.oFeatures, a = i("<div/>", {
                id: t.sTableId + "_wrapper",
                "class": e.sWrapper + (t.nTFoot ? "" : " " + e.sNoFooter)
            });
            t.nHolding = r[0], t.nTableWrapper = a[0], t.nTableReinsertBefore = t.nTable.nextSibling;
            for (var s, l, c, u, d, h, p = t.sDom.split(""), f = 0; f < p.length; f++) {
                if (s = null, l = p[f], "<" == l) {
                    if (c = i("<div/>")[0], u = p[f + 1], "'" == u || '"' == u) {
                        for (d = "", h = 2; p[f + h] != u;)d += p[f + h], h++;
                        if ("H" == d ? d = e.sJUIHeader : "F" == d && (d = e.sJUIFooter), -1 != d.indexOf(".")) {
                            var g = d.split(".");
                            c.id = g[0].substr(1, g[0].length - 1), c.className = g[1]
                        } else"#" == d.charAt(0) ? c.id = d.substr(1, d.length - 1) : c.className = d;
                        f += h
                    }
                    a.append(c), a = i(c)
                } else if (">" == l)a = a.parent(); else if ("l" == l && o.bPaginate && o.bLengthChange)s = ut(t); else if ("f" == l && o.bFilter)s = X(t); else if ("r" == l && o.bProcessing)s = pt(t); else if ("t" == l)s = gt(t); else if ("i" == l && o.bInfo)s = rt(t); else if ("p" == l && o.bPaginate)s = dt(t); else if (0 !== Xt.ext.feature.length)for (var v = Xt.ext.feature, m = 0, y = v.length; y > m; m++)if (l == v[m].cFeature) {
                    s = v[m].fnInit(t);
                    break
                }
                if (s) {
                    var b = t.aanFeatures;
                    b[l] || (b[l] = []), b[l].push(s), a.append(s)
                }
            }
            r.replaceWith(a)
        }

        function H(t, e) {
            var n, r, o, a, s, l, c, u, d, h, p, f = i(e).children("tr"), g = function (t, e, n) {
                for (var i = t[e]; i[n];)n++;
                return n
            };
            for (t.splice(0, t.length), o = 0, l = f.length; l > o; o++)t.push([]);
            for (o = 0, l = f.length; l > o; o++)for (n = f[o], u = 0, r = n.firstChild; r;) {
                if ("TD" == r.nodeName.toUpperCase() || "TH" == r.nodeName.toUpperCase())for (d = 1 * r.getAttribute("colspan"), h = 1 * r.getAttribute("rowspan"), d = d && 0 !== d && 1 !== d ? d : 1, h = h && 0 !== h && 1 !== h ? h : 1, c = g(t, o, u), p = 1 === d ? !0 : !1, s = 0; d > s; s++)for (a = 0; h > a; a++)t[o + a][c + s] = {
                    cell: r,
                    unique: p
                }, t[o + a].nTr = n;
                r = r.nextSibling
            }
        }

        function W(t, e, n) {
            var i = [];
            n || (n = t.aoHeader, e && (n = [], H(n, e)));
            for (var r = 0, o = n.length; o > r; r++)for (var a = 0, s = n[r].length; s > a; a++)!n[r][a].unique || i[a] && t.bSortCellsTop || (i[a] = n[r][a].cell);
            return i
        }

        function z(t, e, n) {
            if (Ht(t, "aoServerParams", "serverParams", [e]), e && i.isArray(e)) {
                var r = {}, o = /(.*?)\[\]$/;
                i.each(e, function (t, e) {
                    var n = e.name.match(o);
                    if (n) {
                        var i = n[0];
                        r[i] || (r[i] = []), r[i].push(e.value)
                    } else r[e.name] = e.value
                }), e = r
            }
            var a, s = t.ajax, l = t.oInstance, c = function (e) {
                Ht(t, null, "xhr", [t, e, t.jqXHR]), n(e)
            };
            if (i.isPlainObject(s) && s.data) {
                a = s.data;
                var u = i.isFunction(a) ? a(e, t) : a;
                e = i.isFunction(a) && u ? u : i.extend(!0, e, u), delete s.data
            }
            var d = {
                data: e, success: function (e) {
                    var n = e.error || e.sError;
                    n && jt(t, 0, n), t.json = e, c(e)
                }, dataType: "json", cache: !1, type: t.sServerMethod, error: function (e, n, r) {
                    var o = Ht(t, null, "xhr", [t, null, t.jqXHR]);
                    -1 === i.inArray(!0, o) && ("parsererror" == n ? jt(t, 0, "Invalid JSON response", 1) : 4 === e.readyState && jt(t, 0, "Ajax error", 7)), ft(t, !1)
                }
            };
            t.oAjaxData = e, Ht(t, null, "preXhr", [t, e]), t.fnServerData ? t.fnServerData.call(l, t.sAjaxSource, i.map(e, function (t, e) {
                return {name: e, value: t}
            }), c, t) : t.sAjaxSource || "string" == typeof s ? t.jqXHR = i.ajax(i.extend(d, {url: s || t.sAjaxSource})) : i.isFunction(s) ? t.jqXHR = s.call(l, e, c, t) : (t.jqXHR = i.ajax(i.extend(d, s)), s.data = a)
        }

        function B(t) {
            return t.bAjaxDataGet ? (t.iDraw++, ft(t, !0), z(t, V(t), function (e) {
                U(t, e)
            }), !1) : !0
        }

        function V(t) {
            var e, n, r, o, a = t.aoColumns, s = a.length, l = t.oFeatures, c = t.oPreviousSearch, u = t.aoPreSearchCols, d = [], h = _t(t), p = t._iDisplayStart, f = l.bPaginate !== !1 ? t._iDisplayLength : -1, g = function (t, e) {
                d.push({name: t, value: e})
            };
            g("sEcho", t.iDraw), g("iColumns", s), g("sColumns", he(a, "sName").join(",")), g("iDisplayStart", p), g("iDisplayLength", f);
            var v = {
                draw: t.iDraw,
                columns: [],
                order: [],
                start: p,
                length: f,
                search: {value: c.sSearch, regex: c.bRegex}
            };
            for (e = 0; s > e; e++)r = a[e], o = u[e], n = "function" == typeof r.mData ? "function" : r.mData, v.columns.push({
                data: n,
                name: r.sName,
                searchable: r.bSearchable,
                orderable: r.bSortable,
                search: {value: o.sSearch, regex: o.bRegex}
            }), g("mDataProp_" + e, n), l.bFilter && (g("sSearch_" + e, o.sSearch), g("bRegex_" + e, o.bRegex), g("bSearchable_" + e, r.bSearchable)), l.bSort && g("bSortable_" + e, r.bSortable);
            l.bFilter && (g("sSearch", c.sSearch), g("bRegex", c.bRegex)), l.bSort && (i.each(h, function (t, e) {
                v.order.push({column: e.col, dir: e.dir}), g("iSortCol_" + t, e.col), g("sSortDir_" + t, e.dir)
            }), g("iSortingCols", h.length));
            var m = Xt.ext.legacy.ajax;
            return null === m ? t.sAjaxSource ? d : v : m ? d : v
        }

        function U(t, e) {
            var i = function (t, i) {
                return e[t] !== n ? e[t] : e[i]
            }, r = Q(t, e), o = i("sEcho", "draw"), a = i("iTotalRecords", "recordsTotal"), s = i("iTotalDisplayRecords", "recordsFiltered");
            if (o) {
                if (1 * o < t.iDraw)return;
                t.iDraw = 1 * o
            }
            O(t), t._iRecordsTotal = parseInt(a, 10), t._iRecordsDisplay = parseInt(s, 10);
            for (var l = 0, c = r.length; c > l; l++)w(t, r[l]);
            t.aiDisplay = t.aiDisplayMaster.slice(), t.bAjaxDataGet = !1, R(t), t._bInitComplete || lt(t, e), t.bAjaxDataGet = !0, ft(t, !1)
        }

        function Q(t, e) {
            var r = i.isPlainObject(t.ajax) && t.ajax.dataSrc !== n ? t.ajax.dataSrc : t.sAjaxDataProp;
            return "data" === r ? e.aaData || e[r] : "" !== r ? k(r)(e) : e
        }

        function X(t) {
            var n = t.oClasses, r = t.sTableId, o = t.oLanguage, a = t.oPreviousSearch, s = t.aanFeatures, l = '<input type="search" class="' + n.sFilterInput + '"/>', c = o.sSearch;
            c = c.match(/_INPUT_/) ? c.replace("_INPUT_", l) : c + l;
            var u = i("<div/>", {
                id: s.f ? null : r + "_filter",
                "class": n.sFilter
            }).append(i("<label/>").append(c)), d = function () {
                var e = (s.f, this.value ? this.value : "");
                e != a.sSearch && (Y(t, {
                    sSearch: e,
                    bRegex: a.bRegex,
                    bSmart: a.bSmart,
                    bCaseInsensitive: a.bCaseInsensitive
                }), t._iDisplayStart = 0, R(t))
            }, h = null !== t.searchDelay ? t.searchDelay : "ssp" === Bt(t) ? 400 : 0, p = i("input", u).val(a.sSearch).attr("placeholder", o.sSearchPlaceholder).bind("keyup.DT search.DT input.DT paste.DT cut.DT", h ? bt(d, h) : d).bind("keypress.DT", function (t) {
                return 13 == t.keyCode ? !1 : void 0
            }).attr("aria-controls", r);
            return i(t.nTable).on("search.dt.DT", function (n, i) {
                if (t === i)try {
                    p[0] !== e.activeElement && p.val(a.sSearch)
                } catch (r) {
                }
            }), u[0]
        }

        function Y(t, e, i) {
            var r = t.oPreviousSearch, o = t.aoPreSearchCols, a = function (t) {
                r.sSearch = t.sSearch, r.bRegex = t.bRegex, r.bSmart = t.bSmart, r.bCaseInsensitive = t.bCaseInsensitive
            }, s = function (t) {
                return t.bEscapeRegex !== n ? !t.bEscapeRegex : t.bRegex
            };
            if (y(t), "ssp" != Bt(t)) {
                J(t, e.sSearch, i, s(e), e.bSmart, e.bCaseInsensitive), a(e);
                for (var l = 0; l < o.length; l++)G(t, o[l].sSearch, l, s(o[l]), o[l].bSmart, o[l].bCaseInsensitive);
                K(t)
            } else a(e);
            t.bFiltered = !0, Ht(t, null, "search", [t])
        }

        function K(t) {
            for (var e, n, i = Xt.ext.search, r = t.aiDisplay, o = 0, a = i.length; a > o; o++) {
                for (var s = [], l = 0, c = r.length; c > l; l++)n = r[l], e = t.aoData[n], i[o](t, e._aFilterData, n, e._aData, l) && s.push(n);
                r.length = 0, r.push.apply(r, s)
            }
        }

        function G(t, e, n, i, r, o) {
            if ("" !== e)for (var a, s = t.aiDisplay, l = Z(e, i, r, o), c = s.length - 1; c >= 0; c--)a = t.aoData[s[c]]._aFilterData[n], l.test(a) || s.splice(c, 1)
        }

        function J(t, e, n, i, r, o) {
            var a, s, l, c = Z(e, i, r, o), u = t.oPreviousSearch.sSearch, d = t.aiDisplayMaster;
            if (0 !== Xt.ext.search.length && (n = !0), s = et(t), e.length <= 0)t.aiDisplay = d.slice(); else for ((s || n || u.length > e.length || 0 !== e.indexOf(u) || t.bSorted) && (t.aiDisplay = d.slice()), a = t.aiDisplay, l = a.length - 1; l >= 0; l--)c.test(t.aoData[a[l]]._sFilterRow) || a.splice(l, 1)
        }

        function Z(t, e, n, r) {
            if (t = e ? t : tt(t), n) {
                var o = i.map(t.match(/"[^"]+"|[^ ]+/g) || [""], function (t) {
                    if ('"' === t.charAt(0)) {
                        var e = t.match(/^"(.*)"$/);
                        t = e ? e[1] : t
                    }
                    return t.replace('"', "")
                });
                t = "^(?=.*?" + o.join(")(?=.*?") + ").*$"
            }
            return new RegExp(t, r ? "i" : "")
        }

        function tt(t) {
            return t.replace(re, "\\$1")
        }

        function et(t) {
            var e, n, i, r, o, a, s, l, c = t.aoColumns, u = Xt.ext.type.search, d = !1;
            for (n = 0, r = t.aoData.length; r > n; n++)if (l = t.aoData[n], !l._aFilterData) {
                for (a = [], i = 0, o = c.length; o > i; i++)e = c[i], e.bSearchable ? (s = T(t, n, i, "filter"), u[e.sType] && (s = u[e.sType](s)), null === s && (s = ""), "string" != typeof s && s.toString && (s = s.toString())) : s = "", s.indexOf && -1 !== s.indexOf("&") && (xe.innerHTML = s, s = Ce ? xe.textContent : xe.innerText), s.replace && (s = s.replace(/[\r\n]/g, "")), a.push(s);
                l._aFilterData = a, l._sFilterRow = a.join("  "), d = !0
            }
            return d
        }

        function nt(t) {
            return {search: t.sSearch, smart: t.bSmart, regex: t.bRegex, caseInsensitive: t.bCaseInsensitive}
        }

        function it(t) {
            return {sSearch: t.search, bSmart: t.smart, bRegex: t.regex, bCaseInsensitive: t.caseInsensitive}
        }

        function rt(t) {
            var e = t.sTableId, n = t.aanFeatures.i, r = i("<div/>", {
                "class": t.oClasses.sInfo,
                id: n ? null : e + "_info"
            });
            return n || (t.aoDrawCallback.push({
                fn: ot,
                sName: "information"
            }), r.attr("role", "status").attr("aria-live", "polite"), i(t.nTable).attr("aria-describedby", e + "_info")), r[0]
        }

        function ot(t) {
            var e = t.aanFeatures.i;
            if (0 !== e.length) {
                var n = t.oLanguage, r = t._iDisplayStart + 1, o = t.fnDisplayEnd(), a = t.fnRecordsTotal(), s = t.fnRecordsDisplay(), l = s ? n.sInfo : n.sInfoEmpty;
                s !== a && (l += " " + n.sInfoFiltered), l += n.sInfoPostFix, l = at(t, l);
                var c = n.fnInfoCallback;
                null !== c && (l = c.call(t.oInstance, t, r, o, a, s, l)), i(e).html(l)
            }
        }

        function at(t, e) {
            var n = t.fnFormatNumber, i = t._iDisplayStart + 1, r = t._iDisplayLength, o = t.fnRecordsDisplay(), a = -1 === r;
            return e.replace(/_START_/g, n.call(t, i)).replace(/_END_/g, n.call(t, t.fnDisplayEnd())).replace(/_MAX_/g, n.call(t, t.fnRecordsTotal())).replace(/_TOTAL_/g, n.call(t, o)).replace(/_PAGE_/g, n.call(t, a ? 1 : Math.ceil(i / r))).replace(/_PAGES_/g, n.call(t, a ? 1 : Math.ceil(o / r)))
        }

        function st(t) {
            var e, n, i, r = t.iInitDisplayStart, o = t.aoColumns, a = t.oFeatures;
            if (!t.bInitialised)return void setTimeout(function () {
                st(t)
            }, 200);
            for (q(t), j(t), M(t, t.aoHeader), M(t, t.aoFooter), ft(t, !0), a.bAutoWidth && yt(t), e = 0, n = o.length; n > e; e++)i = o[e], i.sWidth && (i.nTh.style.width = Tt(i.sWidth));
            F(t);
            var s = Bt(t);
            "ssp" != s && ("ajax" == s ? z(t, [], function (n) {
                var i = Q(t, n);
                for (e = 0; e < i.length; e++)w(t, i[e]);
                t.iInitDisplayStart = r, F(t), ft(t, !1), lt(t, n)
            }, t) : (ft(t, !1), lt(t)))
        }

        function lt(t, e) {
            t._bInitComplete = !0, e && p(t), Ht(t, "aoInitComplete", "init", [t, e])
        }

        function ct(t, e) {
            var n = parseInt(e, 10);
            t._iDisplayLength = n, Wt(t), Ht(t, null, "length", [t, n])
        }

        function ut(t) {
            for (var e = t.oClasses, n = t.sTableId, r = t.aLengthMenu, o = i.isArray(r[0]), a = o ? r[0] : r, s = o ? r[1] : r, l = i("<select/>", {
                name: n + "_length",
                "aria-controls": n,
                "class": e.sLengthSelect
            }), c = 0, u = a.length; u > c; c++)l[0][c] = new Option(s[c], a[c]);
            var d = i("<div><label/></div>").addClass(e.sLength);
            return t.aanFeatures.l || (d[0].id = n + "_length"), d.children().append(t.oLanguage.sLengthMenu.replace("_MENU_", l[0].outerHTML)), i("select", d).val(t._iDisplayLength).bind("change.DT", function (e) {
                ct(t, i(this).val()), R(t)
            }), i(t.nTable).bind("length.dt.DT", function (e, n, r) {
                t === n && i("select", d).val(r)
            }), d[0]
        }

        function dt(t) {
            var e = t.sPaginationType, n = Xt.ext.pager[e], r = "function" == typeof n, o = function (t) {
                R(t)
            }, a = i("<div/>").addClass(t.oClasses.sPaging + e)[0], s = t.aanFeatures;
            return r || n.fnInit(t, a, o), s.p || (a.id = t.sTableId + "_paginate", t.aoDrawCallback.push({
                fn: function (t) {
                    if (r) {
                        var e, i, a = t._iDisplayStart, l = t._iDisplayLength, c = t.fnRecordsDisplay(), u = -1 === l, d = u ? 0 : Math.ceil(a / l), h = u ? 1 : Math.ceil(c / l), p = n(d, h);
                        for (e = 0, i = s.p.length; i > e; e++)zt(t, "pageButton")(t, s.p[e], e, p, d, h)
                    } else n.fnUpdate(t, o)
                }, sName: "pagination"
            })), a
        }

        function ht(t, e, n) {
            var i = t._iDisplayStart, r = t._iDisplayLength, o = t.fnRecordsDisplay();
            0 === o || -1 === r ? i = 0 : "number" == typeof e ? (i = e * r, i > o && (i = 0)) : "first" == e ? i = 0 : "previous" == e ? (i = r >= 0 ? i - r : 0, 0 > i && (i = 0)) : "next" == e ? o > i + r && (i += r) : "last" == e ? i = Math.floor((o - 1) / r) * r : jt(t, 0, "Unknown paging action: " + e, 5);
            var a = t._iDisplayStart !== i;
            return t._iDisplayStart = i, a && (Ht(t, null, "page", [t]), n && R(t)), a
        }

        function pt(t) {
            return i("<div/>", {
                id: t.aanFeatures.r ? null : t.sTableId + "_processing",
                "class": t.oClasses.sProcessing
            }).html(t.oLanguage.sProcessing).insertBefore(t.nTable)[0]
        }

        function ft(t, e) {
            t.oFeatures.bProcessing && i(t.aanFeatures.r).css("display", e ? "block" : "none"), Ht(t, null, "processing", [t, e])
        }

        function gt(t) {
            var e = i(t.nTable);
            e.attr("role", "grid");
            var n = t.oScroll;
            if ("" === n.sX && "" === n.sY)return t.nTable;
            var r = n.sX, o = n.sY, a = t.oClasses, s = e.children("caption"), l = s.length ? s[0]._captionSide : null, c = i(e[0].cloneNode(!1)), u = i(e[0].cloneNode(!1)), d = e.children("tfoot"), h = "<div/>", p = function (t) {
                return t ? Tt(t) : null
            };
            n.sX && "100%" === e.attr("width") && e.removeAttr("width"), d.length || (d = null);
            var f = i(h, {"class": a.sScrollWrapper}).append(i(h, {"class": a.sScrollHead}).css({
                overflow: "hidden",
                position: "relative",
                border: 0,
                width: r ? p(r) : "100%"
            }).append(i(h, {"class": a.sScrollHeadInner}).css({
                "box-sizing": "content-box",
                width: n.sXInner || "100%"
            }).append(c.removeAttr("id").css("margin-left", 0).append("top" === l ? s : null).append(e.children("thead"))))).append(i(h, {"class": a.sScrollBody}).css({
                overflow: "auto",
                height: p(o),
                width: p(r)
            }).append(e));
            d && f.append(i(h, {"class": a.sScrollFoot}).css({
                overflow: "hidden",
                border: 0,
                width: r ? p(r) : "100%"
            }).append(i(h, {"class": a.sScrollFootInner}).append(u.removeAttr("id").css("margin-left", 0).append("bottom" === l ? s : null).append(e.children("tfoot")))));
            var g = f.children(), v = g[0], m = g[1], y = d ? g[2] : null;
            return r && i(m).on("scroll.DT", function (t) {
                var e = this.scrollLeft;
                v.scrollLeft = e, d && (y.scrollLeft = e)
            }), t.nScrollHead = v, t.nScrollBody = m, t.nScrollFoot = y, t.aoDrawCallback.push({
                fn: vt,
                sName: "scrolling"
            }), f[0]
        }

        function vt(t) {
            var e, n, r, o, a, s, l, c, u, d = t.oScroll, h = d.sX, p = d.sXInner, g = d.sY, v = d.iBarWidth, m = i(t.nScrollHead), y = m[0].style, b = m.children("div"), w = b[0].style, x = b.children("table"), C = t.nScrollBody, S = i(C), T = C.style, D = i(t.nScrollFoot), _ = D.children("div"), k = _.children("table"), E = i(t.nTHead), A = i(t.nTable), O = A[0], N = O.style, $ = t.nTFoot ? i(t.nTFoot) : null, I = t.oBrowser, L = I.bScrollOversize, P = [], j = [], M = [], R = function (t) {
                var e = t.style;
                e.paddingTop = "0", e.paddingBottom = "0", e.borderTopWidth = "0", e.borderBottomWidth = "0", e.height = 0
            };
            if (A.children("thead, tfoot").remove(), a = E.clone().prependTo(A), e = E.find("tr"), r = a.find("tr"), a.find("th, td").removeAttr("tabindex"), $ && (s = $.clone().prependTo(A), n = $.find("tr"), o = s.find("tr")), h || (T.width = "100%", m[0].style.width = "100%"), i.each(W(t, a), function (e, n) {
                    l = f(t, e), n.style.width = t.aoColumns[l].sWidth
                }), $ && mt(function (t) {
                    t.style.width = ""
                }, o), d.bCollapse && "" !== g && (T.height = S[0].offsetHeight + E[0].offsetHeight + "px"), u = A.outerWidth(), "" === h ? (N.width = "100%", L && (A.find("tbody").height() > C.offsetHeight || "scroll" == S.css("overflow-y")) && (N.width = Tt(A.outerWidth() - v))) : "" !== p ? N.width = Tt(p) : u == S.width() && S.height() < A.height() ? (N.width = Tt(u - v), A.outerWidth() > u - v && (N.width = Tt(u))) : N.width = Tt(u), u = A.outerWidth(), mt(R, r), mt(function (t) {
                    M.push(t.innerHTML), P.push(Tt(i(t).css("width")))
                }, r), mt(function (t, e) {
                    t.style.width = P[e]
                }, e), i(r).height(0), $ && (mt(R, o), mt(function (t) {
                    j.push(Tt(i(t).css("width")))
                }, o), mt(function (t, e) {
                    t.style.width = j[e]
                }, n), i(o).height(0)), mt(function (t, e) {
                    t.innerHTML = '<div class="dataTables_sizing" style="height:0;overflow:hidden;">' + M[e] + "</div>", t.style.width = P[e]
                }, r), $ && mt(function (t, e) {
                    t.innerHTML = "", t.style.width = j[e]
                }, o), A.outerWidth() < u ? (c = C.scrollHeight > C.offsetHeight || "scroll" == S.css("overflow-y") ? u + v : u, L && (C.scrollHeight > C.offsetHeight || "scroll" == S.css("overflow-y")) && (N.width = Tt(c - v)), ("" === h || "" !== p) && jt(t, 1, "Possible column misalignment", 6)) : c = "100%", T.width = Tt(c), y.width = Tt(c), $ && (t.nScrollFoot.style.width = Tt(c)), g || L && (T.height = Tt(O.offsetHeight + v)), g && d.bCollapse) {
                T.height = Tt(g);
                var F = h && O.offsetWidth > C.offsetWidth ? v : 0;
                O.offsetHeight < C.offsetHeight && (T.height = Tt(O.offsetHeight + F))
            }
            var q = A.outerWidth();
            x[0].style.width = Tt(q), w.width = Tt(q);
            var H = A.height() > C.clientHeight || "scroll" == S.css("overflow-y"), z = "padding" + (I.bScrollbarLeft ? "Left" : "Right");
            w[z] = H ? v + "px" : "0px", $ && (k[0].style.width = Tt(q), _[0].style.width = Tt(q), _[0].style[z] = H ? v + "px" : "0px"), S.scroll(), !t.bSorted && !t.bFiltered || t._drawHold || (C.scrollTop = 0)
        }

        function mt(t, e, n) {
            for (var i, r, o = 0, a = 0, s = e.length; s > a;) {
                for (i = e[a].firstChild, r = n ? n[a].firstChild : null; i;)1 === i.nodeType && (n ? t(i, r, o) : t(i, o), o++), i = i.nextSibling, r = n ? r.nextSibling : null;
                a++
            }
        }

        function yt(e) {
            var n, r, o, a, s, l = e.nTable, c = e.aoColumns, u = e.oScroll, d = u.sY, h = u.sX, f = u.sXInner, g = c.length, y = m(e, "bVisible"), b = i("th", e.nTHead), w = l.getAttribute("width"), x = l.parentNode, C = !1, S = l.style.width;
            for (S && -1 !== S.indexOf("%") && (w = S), n = 0; n < y.length; n++)r = c[y[n]], null !== r.sWidth && (r.sWidth = wt(r.sWidthOrig, x), C = !0);
            if (C || h || d || g != v(e) || g != b.length) {
                var T = i(l).clone().css("visibility", "hidden").removeAttr("id");
                T.find("tbody tr").remove();
                var D = i("<tr/>").appendTo(T.find("tbody"));
                for (T.find("tfoot th, tfoot td").css("width", ""), b = W(e, T.find("thead")[0]), n = 0; n < y.length; n++)r = c[y[n]], b[n].style.width = null !== r.sWidthOrig && "" !== r.sWidthOrig ? Tt(r.sWidthOrig) : "";
                if (e.aoData.length)for (n = 0; n < y.length; n++)o = y[n], r = c[o], i(Ct(e, o)).clone(!1).append(r.sContentPadding).appendTo(D);
                if (T.appendTo(x), h && f ? T.width(f) : h ? (T.css("width", "auto"), T.width() < x.offsetWidth && T.width(x.offsetWidth)) : d ? T.width(x.offsetWidth) : w && T.width(w), xt(e, T[0]), h) {
                    var _ = 0;
                    for (n = 0; n < y.length; n++)r = c[y[n]], s = i(b[n]).outerWidth(), _ += null === r.sWidthOrig ? s : parseInt(r.sWidth, 10) + s - i(b[n]).width();
                    T.width(Tt(_)), l.style.width = Tt(_)
                }
                for (n = 0; n < y.length; n++)r = c[y[n]], a = i(b[n]).width(), a && (r.sWidth = Tt(a));
                l.style.width = Tt(T.css("width")), T.remove()
            } else for (n = 0; g > n; n++)c[n].sWidth = Tt(b.eq(n).width());
            if (w && (l.style.width = Tt(w)), (w || h) && !e._reszEvt) {
                var k = function () {
                    i(t).bind("resize.DT-" + e.sInstance, bt(function () {
                        p(e)
                    }))
                };
                e.oBrowser.bScrollOversize ? setTimeout(k, 1e3) : k(), e._reszEvt = !0
            }
        }

        function bt(t, e) {
            var i, r, o = e !== n ? e : 200;
            return function () {
                var e = this, a = +new Date, s = arguments;
                i && i + o > a ? (clearTimeout(r), r = setTimeout(function () {
                    i = n, t.apply(e, s)
                }, o)) : (i = a, t.apply(e, s))
            }
        }

        function wt(t, n) {
            if (!t)return 0;
            var r = i("<div/>").css("width", Tt(t)).appendTo(n || e.body), o = r[0].offsetWidth;
            return r.remove(), o
        }

        function xt(t, e) {
            var n = t.oScroll;
            if (n.sX || n.sY) {
                var r = n.sX ? 0 : n.iBarWidth;
                e.style.width = Tt(i(e).outerWidth() - r)
            }
        }

        function Ct(t, e) {
            var n = St(t, e);
            if (0 > n)return null;
            var r = t.aoData[n];
            return r.nTr ? r.anCells[e] : i("<td/>").html(T(t, n, e, "display"))[0]
        }

        function St(t, e) {
            for (var n, i = -1, r = -1, o = 0, a = t.aoData.length; a > o; o++)n = T(t, o, e, "display") + "", n = n.replace(Se, ""), n.length > i && (i = n.length, r = o);
            return r
        }

        function Tt(t) {
            return null === t ? "0px" : "number" == typeof t ? 0 > t ? "0px" : t + "px" : t.match(/\d$/) ? t + "px" : t
        }

        function Dt() {
            var t = Xt.__scrollbarWidth;
            if (t === n) {
                var e = i("<p/>").css({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: 150,
                    padding: 0,
                    overflow: "scroll",
                    visibility: "hidden"
                }).appendTo("body");
                t = e[0].offsetWidth - e[0].clientWidth, Xt.__scrollbarWidth = t, e.remove()
            }
            return t
        }

        function _t(t) {
            var e, r, o, a, s, l, c, u = [], d = t.aoColumns, h = t.aaSortingFixed, p = i.isPlainObject(h), f = [], g = function (t) {
                t.length && !i.isArray(t[0]) ? f.push(t) : f.push.apply(f, t)
            };
            for (i.isArray(h) && g(h), p && h.pre && g(h.pre), g(t.aaSorting), p && h.post && g(h.post), e = 0; e < f.length; e++)for (c = f[e][0], a = d[c].aDataSort, r = 0, o = a.length; o > r; r++)s = a[r], l = d[s].sType || "string", f[e]._idx === n && (f[e]._idx = i.inArray(f[e][1], d[s].asSorting)), u.push({
                src: c,
                col: s,
                dir: f[e][1],
                index: f[e]._idx,
                type: l,
                formatter: Xt.ext.type.order[l + "-pre"]
            });
            return u
        }

        function kt(t) {
            var e, n, i, r, o, a = [], s = Xt.ext.type.order, l = t.aoData, c = (t.aoColumns, 0), u = t.aiDisplayMaster;
            for (y(t), o = _t(t), e = 0, n = o.length; n > e; e++)r = o[e], r.formatter && c++, $t(t, r.col);
            if ("ssp" != Bt(t) && 0 !== o.length) {
                for (e = 0, i = u.length; i > e; e++)a[u[e]] = e;
                u.sort(c === o.length ? function (t, e) {
                    var n, i, r, s, c, u = o.length, d = l[t]._aSortData, h = l[e]._aSortData;
                    for (r = 0; u > r; r++)if (c = o[r], n = d[c.col], i = h[c.col], s = i > n ? -1 : n > i ? 1 : 0, 0 !== s)return "asc" === c.dir ? s : -s;
                    return n = a[t], i = a[e], i > n ? -1 : n > i ? 1 : 0
                } : function (t, e) {
                    var n, i, r, c, u, d, h = o.length, p = l[t]._aSortData, f = l[e]._aSortData;
                    for (r = 0; h > r; r++)if (u = o[r], n = p[u.col], i = f[u.col], d = s[u.type + "-" + u.dir] || s["string-" + u.dir], c = d(n, i), 0 !== c)return c;
                    return n = a[t], i = a[e], i > n ? -1 : n > i ? 1 : 0
                })
            }
            t.bSorted = !0
        }

        function Et(t) {
            for (var e, n, i = t.aoColumns, r = _t(t), o = t.oLanguage.oAria, a = 0, s = i.length; s > a; a++) {
                var l = i[a], c = l.asSorting, u = l.sTitle.replace(/<.*?>/g, ""), d = l.nTh;
                d.removeAttribute("aria-sort"), l.bSortable ? (r.length > 0 && r[0].col == a ? (d.setAttribute("aria-sort", "asc" == r[0].dir ? "ascending" : "descending"), n = c[r[0].index + 1] || c[0]) : n = c[0], e = u + ("asc" === n ? o.sSortAscending : o.sSortDescending)) : e = u, d.setAttribute("aria-label", e)
            }
        }

        function At(t, e, r, o) {
            var a, s = t.aoColumns[e], l = t.aaSorting, c = s.asSorting, u = function (t, e) {
                var r = t._idx;
                return r === n && (r = i.inArray(t[1], c)), r + 1 < c.length ? r + 1 : e ? null : 0
            };
            if ("number" == typeof l[0] && (l = t.aaSorting = [l]), r && t.oFeatures.bSortMulti) {
                var d = i.inArray(e, he(l, "0"));
                -1 !== d ? (a = u(l[d], !0), null === a && 1 === l.length && (a = 0), null === a ? l.splice(d, 1) : (l[d][1] = c[a], l[d]._idx = a)) : (l.push([e, c[0], 0]), l[l.length - 1]._idx = 0)
            } else l.length && l[0][0] == e ? (a = u(l[0]), l.length = 1, l[0][1] = c[a], l[0]._idx = a) : (l.length = 0, l.push([e, c[0]]), l[0]._idx = 0);
            F(t), "function" == typeof o && o(t)
        }

        function Ot(t, e, n, i) {
            var r = t.aoColumns[n];
            Ft(e, {}, function (e) {
                r.bSortable !== !1 && (t.oFeatures.bProcessing ? (ft(t, !0), setTimeout(function () {
                    At(t, n, e.shiftKey, i), "ssp" !== Bt(t) && ft(t, !1)
                }, 0)) : At(t, n, e.shiftKey, i))
            })
        }

        function Nt(t) {
            var e, n, r, o = t.aLastSort, a = t.oClasses.sSortColumn, s = _t(t), l = t.oFeatures;
            if (l.bSort && l.bSortClasses) {
                for (e = 0, n = o.length; n > e; e++)r = o[e].src, i(he(t.aoData, "anCells", r)).removeClass(a + (2 > e ? e + 1 : 3));
                for (e = 0, n = s.length; n > e; e++)r = s[e].src, i(he(t.aoData, "anCells", r)).addClass(a + (2 > e ? e + 1 : 3))
            }
            t.aLastSort = s
        }

        function $t(t, e) {
            var n, i = t.aoColumns[e], r = Xt.ext.order[i.sSortDataType];
            r && (n = r.call(t.oInstance, t, e, g(t, e)));
            for (var o, a, s = Xt.ext.type.order[i.sType + "-pre"], l = 0, c = t.aoData.length; c > l; l++)o = t.aoData[l], o._aSortData || (o._aSortData = []), (!o._aSortData[e] || r) && (a = r ? n[l] : T(t, l, e, "sort"), o._aSortData[e] = s ? s(a) : a)
        }

        function It(t) {
            if (t.oFeatures.bStateSave && !t.bDestroying) {
                var e = {
                    time: +new Date,
                    start: t._iDisplayStart,
                    length: t._iDisplayLength,
                    order: i.extend(!0, [], t.aaSorting),
                    search: nt(t.oPreviousSearch),
                    columns: i.map(t.aoColumns, function (e, n) {
                        return {visible: e.bVisible, search: nt(t.aoPreSearchCols[n])}
                    })
                };
                Ht(t, "aoStateSaveParams", "stateSaveParams", [t, e]), t.oSavedState = e, t.fnStateSaveCallback.call(t.oInstance, t, e)
            }
        }

        function Lt(t, e) {
            var r, o, a = t.aoColumns;
            if (t.oFeatures.bStateSave) {
                var s = t.fnStateLoadCallback.call(t.oInstance, t);
                if (s && s.time) {
                    var l = Ht(t, "aoStateLoadParams", "stateLoadParams", [t, s]);
                    if (-1 === i.inArray(!1, l)) {
                        var c = t.iStateDuration;
                        if (!(c > 0 && s.time < +new Date - 1e3 * c) && a.length === s.columns.length) {
                            for (t.oLoadedState = i.extend(!0, {}, s), s.start !== n && (t._iDisplayStart = s.start, t.iInitDisplayStart = s.start), s.length !== n && (t._iDisplayLength = s.length), s.order !== n && (t.aaSorting = [], i.each(s.order, function (e, n) {
                                t.aaSorting.push(n[0] >= a.length ? [0, n[1]] : n)
                            })), s.search !== n && i.extend(t.oPreviousSearch, it(s.search)), r = 0, o = s.columns.length; o > r; r++) {
                                var u = s.columns[r];
                                u.visible !== n && (a[r].bVisible = u.visible), u.search !== n && i.extend(t.aoPreSearchCols[r], it(u.search))
                            }
                            Ht(t, "aoStateLoaded", "stateLoaded", [t, s])
                        }
                    }
                }
            }
        }

        function Pt(t) {
            var e = Xt.settings, n = i.inArray(t, he(e, "nTable"));
            return -1 !== n ? e[n] : null
        }

        function jt(e, n, i, r) {
            if (i = "DataTables warning: " + (null !== e ? "table id=" + e.sTableId + " - " : "") + i, r && (i += ". For more information about this error, please see http://datatables.net/tn/" + r), n)t.console && console.log && console.log(i); else {
                var o = Xt.ext, a = o.sErrMode || o.errMode;
                if (Ht(e, null, "error", [e, r, i]), "alert" == a)alert(i); else {
                    if ("throw" == a)throw new Error(i);
                    "function" == typeof a && a(e, r, i)
                }
            }
        }

        function Mt(t, e, r, o) {
            return i.isArray(r) ? void i.each(r, function (n, r) {
                i.isArray(r) ? Mt(t, e, r[0], r[1]) : Mt(t, e, r)
            }) : (o === n && (o = r), void(e[r] !== n && (t[o] = e[r])))
        }

        function Rt(t, e, n) {
            var r;
            for (var o in e)e.hasOwnProperty(o) && (r = e[o], i.isPlainObject(r) ? (i.isPlainObject(t[o]) || (t[o] = {}), i.extend(!0, t[o], r)) : t[o] = n && "data" !== o && "aaData" !== o && i.isArray(r) ? r.slice() : r);
            return t
        }

        function Ft(t, e, n) {
            i(t).bind("click.DT", e, function (e) {
                t.blur(), n(e)
            }).bind("keypress.DT", e, function (t) {
                13 === t.which && (t.preventDefault(), n(t))
            }).bind("selectstart.DT", function () {
                return !1
            })
        }

        function qt(t, e, n, i) {
            n && t[e].push({fn: n, sName: i})
        }

        function Ht(t, e, n, r) {
            var o = [];
            if (e && (o = i.map(t[e].slice().reverse(), function (e, n) {
                    return e.fn.apply(t.oInstance, r)
                })), null !== n) {
                var a = i.Event(n + ".dt");
                i(t.nTable).trigger(a, r), o.push(a.result)
            }
            return o
        }

        function Wt(t) {
            var e = t._iDisplayStart, n = t.fnDisplayEnd(), i = t._iDisplayLength;
            e >= n && (e = n - i), e -= e % i, (-1 === i || 0 > e) && (e = 0), t._iDisplayStart = e
        }

        function zt(t, e) {
            var n = t.renderer, r = Xt.ext.renderer[e];
            return i.isPlainObject(n) && n[e] ? r[n[e]] || r._ : "string" == typeof n ? r[n] || r._ : r._
        }

        function Bt(t) {
            return t.oFeatures.bServerSide ? "ssp" : t.ajax || t.sAjaxSource ? "ajax" : "dom"
        }

        function Vt(t, e) {
            var n = [], i = Ue.numbers_length, r = Math.floor(i / 2);
            return i >= e ? n = fe(0, e) : r >= t ? (n = fe(0, i - 2), n.push("ellipsis"), n.push(e - 1)) : t >= e - 1 - r ? (n = fe(e - (i - 2), e), n.splice(0, 0, "ellipsis"), n.splice(0, 0, 0)) : (n = fe(t - r + 2, t + r - 1), n.push("ellipsis"), n.push(e - 1), n.splice(0, 0, "ellipsis"), n.splice(0, 0, 0)), n.DT_el = "span", n
        }

        function Ut(t) {
            i.each({
                num: function (e) {
                    return Qe(e, t)
                }, "num-fmt": function (e) {
                    return Qe(e, t, oe)
                }, "html-num": function (e) {
                    return Qe(e, t, ee)
                }, "html-num-fmt": function (e) {
                    return Qe(e, t, ee, oe)
                }
            }, function (e, n) {
                Yt.type.order[e + t + "-pre"] = n, e.match(/^html\-/) && (Yt.type.search[e + t] = Yt.type.search.html)
            })
        }

        function Qt(t) {
            return function () {
                var e = [Pt(this[Xt.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));
                return Xt.ext.internal[t].apply(this, e)
            }
        }

        var Xt, Yt, Kt, Gt, Jt, Zt = {}, te = /[\r\n]/g, ee = /<.*?>/g, ne = /^[\w\+\-]/, ie = /[\w\+\-]$/, re = new RegExp("(\\" + ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^", "-"].join("|\\") + ")", "g"), oe = /[',$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfk]/gi, ae = function (t) {
            return t && t !== !0 && "-" !== t ? !1 : !0
        }, se = function (t) {
            var e = parseInt(t, 10);
            return !isNaN(e) && isFinite(t) ? e : null
        }, le = function (t, e) {
            return Zt[e] || (Zt[e] = new RegExp(tt(e), "g")), "string" == typeof t && "." !== e ? t.replace(/\./g, "").replace(Zt[e], ".") : t
        }, ce = function (t, e, n) {
            var i = "string" == typeof t;
            return ae(t) ? !0 : (e && i && (t = le(t, e)), n && i && (t = t.replace(oe, "")), !isNaN(parseFloat(t)) && isFinite(t))
        }, ue = function (t) {
            return ae(t) || "string" == typeof t
        }, de = function (t, e, n) {
            if (ae(t))return !0;
            var i = ue(t);
            return i && ce(ve(t), e, n) ? !0 : null
        }, he = function (t, e, i) {
            var r = [], o = 0, a = t.length;
            if (i !== n)for (; a > o; o++)t[o] && t[o][e] && r.push(t[o][e][i]); else for (; a > o; o++)t[o] && r.push(t[o][e]);
            return r
        }, pe = function (t, e, i, r) {
            var o = [], a = 0, s = e.length;
            if (r !== n)for (; s > a; a++)t[e[a]][i] && o.push(t[e[a]][i][r]); else for (; s > a; a++)o.push(t[e[a]][i]);
            return o
        }, fe = function (t, e) {
            var i, r = [];
            e === n ? (e = 0, i = t) : (i = e, e = t);
            for (var o = e; i > o; o++)r.push(o);
            return r
        }, ge = function (t) {
            for (var e = [], n = 0, i = t.length; i > n; n++)t[n] && e.push(t[n]);
            return e
        }, ve = function (t) {
            return t.replace(ee, "")
        }, me = function (t) {
            var e, n, i, r = [], o = t.length, a = 0;
            t:for (n = 0; o > n; n++) {
                for (e = t[n], i = 0; a > i; i++)if (r[i] === e)continue t;
                r.push(e), a++
            }
            return r
        }, ye = function (t, e, i) {
            t[e] !== n && (t[i] = t[e])
        }, be = /\[.*?\]$/, we = /\(\)$/, xe = i("<div>")[0], Ce = xe.textContent !== n, Se = /<.*?>/g;
        Xt = function (t) {
            this.$ = function (t, e) {
                return this.api(!0).$(t, e)
            }, this._ = function (t, e) {
                return this.api(!0).rows(t, e).data()
            }, this.api = function (t) {
                return new Kt(t ? Pt(this[Yt.iApiIndex]) : this)
            }, this.fnAddData = function (t, e) {
                var r = this.api(!0), o = i.isArray(t) && (i.isArray(t[0]) || i.isPlainObject(t[0])) ? r.rows.add(t) : r.row.add(t);
                return (e === n || e) && r.draw(), o.flatten().toArray()
            }, this.fnAdjustColumnSizing = function (t) {
                var e = this.api(!0).columns.adjust(), i = e.settings()[0], r = i.oScroll;
                t === n || t ? e.draw(!1) : ("" !== r.sX || "" !== r.sY) && vt(i)
            }, this.fnClearTable = function (t) {
                var e = this.api(!0).clear();
                (t === n || t) && e.draw()
            }, this.fnClose = function (t) {
                this.api(!0).row(t).child.hide()
            }, this.fnDeleteRow = function (t, e, i) {
                var r = this.api(!0), o = r.rows(t), a = o.settings()[0], s = a.aoData[o[0][0]];
                return o.remove(), e && e.call(this, a, s), (i === n || i) && r.draw(), s
            }, this.fnDestroy = function (t) {
                this.api(!0).destroy(t)
            }, this.fnDraw = function (t) {
                this.api(!0).draw(t)
            }, this.fnFilter = function (t, e, i, r, o, a) {
                var s = this.api(!0);
                null === e || e === n ? s.search(t, i, r, a) : s.column(e).search(t, i, r, a), s.draw()
            }, this.fnGetData = function (t, e) {
                var i = this.api(!0);
                if (t !== n) {
                    var r = t.nodeName ? t.nodeName.toLowerCase() : "";
                    return e !== n || "td" == r || "th" == r ? i.cell(t, e).data() : i.row(t).data() || null
                }
                return i.data().toArray()
            }, this.fnGetNodes = function (t) {
                var e = this.api(!0);
                return t !== n ? e.row(t).node() : e.rows().nodes().flatten().toArray()
            }, this.fnGetPosition = function (t) {
                var e = this.api(!0), n = t.nodeName.toUpperCase();
                if ("TR" == n)return e.row(t).index();
                if ("TD" == n || "TH" == n) {
                    var i = e.cell(t).index();
                    return [i.row, i.columnVisible, i.column]
                }
                return null
            }, this.fnIsOpen = function (t) {
                return this.api(!0).row(t).child.isShown()
            }, this.fnOpen = function (t, e, n) {
                return this.api(!0).row(t).child(e, n).show().child()[0]
            }, this.fnPageChange = function (t, e) {
                var i = this.api(!0).page(t);
                (e === n || e) && i.draw(!1)
            }, this.fnSetColumnVis = function (t, e, i) {
                var r = this.api(!0).column(t).visible(e);
                (i === n || i) && r.columns.adjust().draw()
            }, this.fnSettings = function () {
                return Pt(this[Yt.iApiIndex])
            }, this.fnSort = function (t) {
                this.api(!0).order(t).draw()
            }, this.fnSortListener = function (t, e, n) {
                this.api(!0).order.listener(t, e, n)
            }, this.fnUpdate = function (t, e, i, r, o) {
                var a = this.api(!0);
                return i === n || null === i ? a.row(e).data(t) : a.cell(e, i).data(t), (o === n || o) && a.columns.adjust(),
                (r === n || r) && a.draw(), 0
            }, this.fnVersionCheck = Yt.fnVersionCheck;
            var e = this, r = t === n, u = this.length;
            r && (t = {}), this.oApi = this.internal = Yt.internal;
            for (var p in Xt.ext.internal)p && (this[p] = Qt(p));
            return this.each(function () {
                var p, f = {}, g = u > 1 ? Rt(f, t, !0) : t, v = 0, m = this.getAttribute("id"), y = !1, C = Xt.defaults, S = i(this);
                if ("table" != this.nodeName.toLowerCase())return void jt(null, 0, "Non-table node initialisation (" + this.nodeName + ")", 2);
                s(C), l(C.column), o(C, C, !0), o(C.column, C.column, !0), o(C, i.extend(g, S.data()));
                var T = Xt.settings;
                for (v = 0, p = T.length; p > v; v++) {
                    var D = T[v];
                    if (D.nTable == this || D.nTHead.parentNode == this || D.nTFoot && D.nTFoot.parentNode == this) {
                        var _ = g.bRetrieve !== n ? g.bRetrieve : C.bRetrieve, k = g.bDestroy !== n ? g.bDestroy : C.bDestroy;
                        if (r || _)return D.oInstance;
                        if (k) {
                            D.oInstance.fnDestroy();
                            break
                        }
                        return void jt(D, 0, "Cannot reinitialise DataTable", 3)
                    }
                    if (D.sTableId == this.id) {
                        T.splice(v, 1);
                        break
                    }
                }
                (null === m || "" === m) && (m = "DataTables_Table_" + Xt.ext._unique++, this.id = m);
                var E = i.extend(!0, {}, Xt.models.oSettings, {
                    sDestroyWidth: S[0].style.width,
                    sInstance: m,
                    sTableId: m
                });
                E.nTable = this, E.oApi = e.internal, E.oInit = g, T.push(E), E.oInstance = 1 === e.length ? e : S.dataTable(), s(g), g.oLanguage && a(g.oLanguage), g.aLengthMenu && !g.iDisplayLength && (g.iDisplayLength = i.isArray(g.aLengthMenu[0]) ? g.aLengthMenu[0][0] : g.aLengthMenu[0]), g = Rt(i.extend(!0, {}, C), g), Mt(E.oFeatures, g, ["bPaginate", "bLengthChange", "bFilter", "bSort", "bSortMulti", "bInfo", "bProcessing", "bAutoWidth", "bSortClasses", "bServerSide", "bDeferRender"]), Mt(E, g, ["asStripeClasses", "ajax", "fnServerData", "fnFormatNumber", "sServerMethod", "aaSorting", "aaSortingFixed", "aLengthMenu", "sPaginationType", "sAjaxSource", "sAjaxDataProp", "iStateDuration", "sDom", "bSortCellsTop", "iTabIndex", "fnStateLoadCallback", "fnStateSaveCallback", "renderer", "searchDelay", ["iCookieDuration", "iStateDuration"], ["oSearch", "oPreviousSearch"], ["aoSearchCols", "aoPreSearchCols"], ["iDisplayLength", "_iDisplayLength"], ["bJQueryUI", "bJUI"]]), Mt(E.oScroll, g, [["sScrollX", "sX"], ["sScrollXInner", "sXInner"], ["sScrollY", "sY"], ["bScrollCollapse", "bCollapse"]]), Mt(E.oLanguage, g, "fnInfoCallback"), qt(E, "aoDrawCallback", g.fnDrawCallback, "user"), qt(E, "aoServerParams", g.fnServerParams, "user"), qt(E, "aoStateSaveParams", g.fnStateSaveParams, "user"), qt(E, "aoStateLoadParams", g.fnStateLoadParams, "user"), qt(E, "aoStateLoaded", g.fnStateLoaded, "user"), qt(E, "aoRowCallback", g.fnRowCallback, "user"), qt(E, "aoRowCreatedCallback", g.fnCreatedRow, "user"), qt(E, "aoHeaderCallback", g.fnHeaderCallback, "user"), qt(E, "aoFooterCallback", g.fnFooterCallback, "user"), qt(E, "aoInitComplete", g.fnInitComplete, "user"), qt(E, "aoPreDrawCallback", g.fnPreDrawCallback, "user");
                var A = E.oClasses;
                if (g.bJQueryUI ? (i.extend(A, Xt.ext.oJUIClasses, g.oClasses), g.sDom === C.sDom && "lfrtip" === C.sDom && (E.sDom = '<"H"lfr>t<"F"ip>'), E.renderer ? i.isPlainObject(E.renderer) && !E.renderer.header && (E.renderer.header = "jqueryui") : E.renderer = "jqueryui") : i.extend(A, Xt.ext.classes, g.oClasses), S.addClass(A.sTable), ("" !== E.oScroll.sX || "" !== E.oScroll.sY) && (E.oScroll.iBarWidth = Dt()), E.oScroll.sX === !0 && (E.oScroll.sX = "100%"), E.iInitDisplayStart === n && (E.iInitDisplayStart = g.iDisplayStart, E._iDisplayStart = g.iDisplayStart), null !== g.iDeferLoading) {
                    E.bDeferLoading = !0;
                    var O = i.isArray(g.iDeferLoading);
                    E._iRecordsDisplay = O ? g.iDeferLoading[0] : g.iDeferLoading, E._iRecordsTotal = O ? g.iDeferLoading[1] : g.iDeferLoading
                }
                var N = E.oLanguage;
                i.extend(!0, N, g.oLanguage), "" !== N.sUrl && (i.ajax({
                    dataType: "json",
                    url: N.sUrl,
                    success: function (t) {
                        a(t), o(C.oLanguage, t), i.extend(!0, N, t), st(E)
                    },
                    error: function () {
                        st(E)
                    }
                }), y = !0), null === g.asStripeClasses && (E.asStripeClasses = [A.sStripeOdd, A.sStripeEven]);
                var $ = E.asStripeClasses, L = S.children("tbody").find("tr").eq(0);
                -1 !== i.inArray(!0, i.map($, function (t, e) {
                    return L.hasClass(t)
                })) && (i("tbody tr", this).removeClass($.join(" ")), E.asDestroyStripes = $.slice());
                var P, j = [], M = this.getElementsByTagName("thead");
                if (0 !== M.length && (H(E.aoHeader, M[0]), j = W(E)), null === g.aoColumns)for (P = [], v = 0, p = j.length; p > v; v++)P.push(null); else P = g.aoColumns;
                for (v = 0, p = P.length; p > v; v++)d(E, j ? j[v] : null);
                if (b(E, g.aoColumnDefs, P, function (t, e) {
                        h(E, t, e)
                    }), L.length) {
                    var R = function (t, e) {
                        return null !== t.getAttribute("data-" + e) ? e : null
                    };
                    i.each(I(E, L[0]).cells, function (t, e) {
                        var i = E.aoColumns[t];
                        if (i.mData === t) {
                            var r = R(e, "sort") || R(e, "order"), o = R(e, "filter") || R(e, "search");
                            (null !== r || null !== o) && (i.mData = {
                                _: t + ".display",
                                sort: null !== r ? t + ".@data-" + r : n,
                                type: null !== r ? t + ".@data-" + r : n,
                                filter: null !== o ? t + ".@data-" + o : n
                            }, h(E, t))
                        }
                    })
                }
                var F = E.oFeatures;
                if (g.bStateSave && (F.bStateSave = !0, Lt(E, g), qt(E, "aoDrawCallback", It, "state_save")), g.aaSorting === n) {
                    var q = E.aaSorting;
                    for (v = 0, p = q.length; p > v; v++)q[v][1] = E.aoColumns[v].asSorting[0]
                }
                Nt(E), F.bSort && qt(E, "aoDrawCallback", function () {
                    if (E.bSorted) {
                        var t = _t(E), e = {};
                        i.each(t, function (t, n) {
                            e[n.src] = n.dir
                        }), Ht(E, null, "order", [E, t, e]), Et(E)
                    }
                }), qt(E, "aoDrawCallback", function () {
                    (E.bSorted || "ssp" === Bt(E) || F.bDeferRender) && Nt(E)
                }, "sc"), c(E);
                var z = S.children("caption").each(function () {
                    this._captionSide = S.css("caption-side")
                }), B = S.children("thead");
                0 === B.length && (B = i("<thead/>").appendTo(this)), E.nTHead = B[0];
                var V = S.children("tbody");
                0 === V.length && (V = i("<tbody/>").appendTo(this)), E.nTBody = V[0];
                var U = S.children("tfoot");
                if (0 === U.length && z.length > 0 && ("" !== E.oScroll.sX || "" !== E.oScroll.sY) && (U = i("<tfoot/>").appendTo(this)), 0 === U.length || 0 === U.children().length ? S.addClass(A.sNoFooter) : U.length > 0 && (E.nTFoot = U[0], H(E.aoFooter, E.nTFoot)), g.aaData)for (v = 0; v < g.aaData.length; v++)w(E, g.aaData[v]); else(E.bDeferLoading || "dom" == Bt(E)) && x(E, i(E.nTBody).children("tr"));
                E.aiDisplay = E.aiDisplayMaster.slice(), E.bInitialised = !0, y === !1 && st(E)
            }), e = null, this
        };
        var Te = [], De = Array.prototype, _e = function (t) {
            var e, n, r = Xt.settings, o = i.map(r, function (t, e) {
                return t.nTable
            });
            return t ? t.nTable && t.oApi ? [t] : t.nodeName && "table" === t.nodeName.toLowerCase() ? (e = i.inArray(t, o), -1 !== e ? [r[e]] : null) : t && "function" == typeof t.settings ? t.settings().toArray() : ("string" == typeof t ? n = i(t) : t instanceof i && (n = t), n ? n.map(function (t) {
                return e = i.inArray(this, o), -1 !== e ? r[e] : null
            }).toArray() : void 0) : []
        };
        Kt = function (t, e) {
            if (!(this instanceof Kt))return new Kt(t, e);
            var n = [], r = function (t) {
                var e = _e(t);
                e && n.push.apply(n, e)
            };
            if (i.isArray(t))for (var o = 0, a = t.length; a > o; o++)r(t[o]); else r(t);
            this.context = me(n), e && this.push.apply(this, e.toArray ? e.toArray() : e), this.selector = {
                rows: null,
                cols: null,
                opts: null
            }, Kt.extend(this, this, Te)
        }, Xt.Api = Kt, Kt.prototype = {
            any: function () {
                return 0 !== this.flatten().length
            },
            concat: De.concat,
            context: [],
            each: function (t) {
                for (var e = 0, n = this.length; n > e; e++)t.call(this, this[e], e, this);
                return this
            },
            eq: function (t) {
                var e = this.context;
                return e.length > t ? new Kt(e[t], this[t]) : null
            },
            filter: function (t) {
                var e = [];
                if (De.filter)e = De.filter.call(this, t, this); else for (var n = 0, i = this.length; i > n; n++)t.call(this, this[n], n, this) && e.push(this[n]);
                return new Kt(this.context, e)
            },
            flatten: function () {
                var t = [];
                return new Kt(this.context, t.concat.apply(t, this.toArray()))
            },
            join: De.join,
            indexOf: De.indexOf || function (t, e) {
                for (var n = e || 0, i = this.length; i > n; n++)if (this[n] === t)return n;
                return -1
            },
            iterator: function (t, e, i, r) {
                var o, a, s, l, c, u, d, h, p = [], f = this.context, g = this.selector;
                for ("string" == typeof t && (r = i, i = e, e = t, t = !1), a = 0, s = f.length; s > a; a++) {
                    var v = new Kt(f[a]);
                    if ("table" === e)o = i.call(v, f[a], a), o !== n && p.push(o); else if ("columns" === e || "rows" === e)o = i.call(v, f[a], this[a], a), o !== n && p.push(o); else if ("column" === e || "column-rows" === e || "row" === e || "cell" === e)for (d = this[a], "column-rows" === e && (u = $e(f[a], g.opts)), l = 0, c = d.length; c > l; l++)h = d[l], o = "cell" === e ? i.call(v, f[a], h.row, h.column, a, l) : i.call(v, f[a], h, a, l, u), o !== n && p.push(o)
                }
                if (p.length || r) {
                    var m = new Kt(f, t ? p.concat.apply([], p) : p), y = m.selector;
                    return y.rows = g.rows, y.cols = g.cols, y.opts = g.opts, m
                }
                return this
            },
            lastIndexOf: De.lastIndexOf || function (t, e) {
                return this.indexOf.apply(this.toArray.reverse(), arguments)
            },
            length: 0,
            map: function (t) {
                var e = [];
                if (De.map)e = De.map.call(this, t, this); else for (var n = 0, i = this.length; i > n; n++)e.push(t.call(this, this[n], n));
                return new Kt(this.context, e)
            },
            pluck: function (t) {
                return this.map(function (e) {
                    return e[t]
                })
            },
            pop: De.pop,
            push: De.push,
            reduce: De.reduce || function (t, e) {
                return u(this, t, e, 0, this.length, 1)
            },
            reduceRight: De.reduceRight || function (t, e) {
                return u(this, t, e, this.length - 1, -1, -1)
            },
            reverse: De.reverse,
            selector: null,
            shift: De.shift,
            sort: De.sort,
            splice: De.splice,
            toArray: function () {
                return De.slice.call(this)
            },
            to$: function () {
                return i(this)
            },
            toJQuery: function () {
                return i(this)
            },
            unique: function () {
                return new Kt(this.context, me(this))
            },
            unshift: De.unshift
        }, Kt.extend = function (t, e, n) {
            if (n.length && e && (e instanceof Kt || e.__dt_wrapper)) {
                var r, o, a, s = function (t, e, n) {
                    return function () {
                        var i = e.apply(t, arguments);
                        return Kt.extend(i, i, n.methodExt), i
                    }
                };
                for (r = 0, o = n.length; o > r; r++)a = n[r], e[a.name] = "function" == typeof a.val ? s(t, a.val, a) : i.isPlainObject(a.val) ? {} : a.val, e[a.name].__dt_wrapper = !0, Kt.extend(t, e[a.name], a.propExt)
            }
        }, Kt.register = Gt = function (t, e) {
            if (i.isArray(t))for (var n = 0, r = t.length; r > n; n++)Kt.register(t[n], e); else {
                var o, a, s, l, c = t.split("."), u = Te, d = function (t, e) {
                    for (var n = 0, i = t.length; i > n; n++)if (t[n].name === e)return t[n];
                    return null
                };
                for (o = 0, a = c.length; a > o; o++) {
                    l = -1 !== c[o].indexOf("()"), s = l ? c[o].replace("()", "") : c[o];
                    var h = d(u, s);
                    h || (h = {
                        name: s,
                        val: {},
                        methodExt: [],
                        propExt: []
                    }, u.push(h)), o === a - 1 ? h.val = e : u = l ? h.methodExt : h.propExt
                }
            }
        }, Kt.registerPlural = Jt = function (t, e, r) {
            Kt.register(t, r), Kt.register(e, function () {
                var t = r.apply(this, arguments);
                return t === this ? this : t instanceof Kt ? t.length ? i.isArray(t[0]) ? new Kt(t.context, t[0]) : t[0] : n : t
            })
        };
        var ke = function (t, e) {
            if ("number" == typeof t)return [e[t]];
            var n = i.map(e, function (t, e) {
                return t.nTable
            });
            return i(n).filter(t).map(function (t) {
                var r = i.inArray(this, n);
                return e[r]
            }).toArray()
        };
        Gt("tables()", function (t) {
            return t ? new Kt(ke(t, this.context)) : this
        }), Gt("table()", function (t) {
            var e = this.tables(t), n = e.context;
            return n.length ? new Kt(n[0]) : e
        }), Jt("tables().nodes()", "table().node()", function () {
            return this.iterator("table", function (t) {
                return t.nTable
            }, 1)
        }), Jt("tables().body()", "table().body()", function () {
            return this.iterator("table", function (t) {
                return t.nTBody
            }, 1)
        }), Jt("tables().header()", "table().header()", function () {
            return this.iterator("table", function (t) {
                return t.nTHead
            }, 1)
        }), Jt("tables().footer()", "table().footer()", function () {
            return this.iterator("table", function (t) {
                return t.nTFoot
            }, 1)
        }), Jt("tables().containers()", "table().container()", function () {
            return this.iterator("table", function (t) {
                return t.nTableWrapper
            }, 1)
        }), Gt("draw()", function (t) {
            return this.iterator("table", function (e) {
                F(e, t === !1)
            })
        }), Gt("page()", function (t) {
            return t === n ? this.page.info().page : this.iterator("table", function (e) {
                ht(e, t)
            })
        }), Gt("page.info()", function (t) {
            if (0 === this.context.length)return n;
            var e = this.context[0], i = e._iDisplayStart, r = e._iDisplayLength, o = e.fnRecordsDisplay(), a = -1 === r;
            return {
                page: a ? 0 : Math.floor(i / r),
                pages: a ? 1 : Math.ceil(o / r),
                start: i,
                end: e.fnDisplayEnd(),
                length: r,
                recordsTotal: e.fnRecordsTotal(),
                recordsDisplay: o
            }
        }), Gt("page.len()", function (t) {
            return t === n ? 0 !== this.context.length ? this.context[0]._iDisplayLength : n : this.iterator("table", function (e) {
                ct(e, t)
            })
        });
        var Ee = function (t, e, n) {
            if (n) {
                var i = new Kt(t);
                i.one("draw", function () {
                    n(i.ajax.json())
                })
            }
            "ssp" == Bt(t) ? F(t, e) : (ft(t, !0), z(t, [], function (n) {
                O(t);
                for (var i = Q(t, n), r = 0, o = i.length; o > r; r++)w(t, i[r]);
                F(t, e), ft(t, !1)
            }))
        };
        Gt("ajax.json()", function () {
            var t = this.context;
            return t.length > 0 ? t[0].json : void 0
        }), Gt("ajax.params()", function () {
            var t = this.context;
            return t.length > 0 ? t[0].oAjaxData : void 0
        }), Gt("ajax.reload()", function (t, e) {
            return this.iterator("table", function (n) {
                Ee(n, e === !1, t)
            })
        }), Gt("ajax.url()", function (t) {
            var e = this.context;
            return t === n ? 0 === e.length ? n : (e = e[0], e.ajax ? i.isPlainObject(e.ajax) ? e.ajax.url : e.ajax : e.sAjaxSource) : this.iterator("table", function (e) {
                i.isPlainObject(e.ajax) ? e.ajax.url = t : e.ajax = t
            })
        }), Gt("ajax.url().load()", function (t, e) {
            return this.iterator("table", function (n) {
                Ee(n, e === !1, t)
            })
        });
        var Ae = function (t, e, r, o, a) {
            var s, l, c, u, d, h, p = [], f = typeof e;
            for (e && "string" !== f && "function" !== f && e.length !== n || (e = [e]), c = 0, u = e.length; u > c; c++)for (l = e[c] && e[c].split ? e[c].split(",") : [e[c]], d = 0, h = l.length; h > d; d++)s = r("string" == typeof l[d] ? i.trim(l[d]) : l[d]), s && s.length && p.push.apply(p, s);
            var g = Yt.selector[t];
            if (g.length)for (c = 0, u = g.length; u > c; c++)p = g[c](o, a, p);
            return p
        }, Oe = function (t) {
            return t || (t = {}), t.filter && t.search === n && (t.search = t.filter), i.extend({
                search: "none",
                order: "current",
                page: "all"
            }, t)
        }, Ne = function (t) {
            for (var e = 0, n = t.length; n > e; e++)if (t[e].length > 0)return t[0] = t[e], t[0].length = 1, t.length = 1, t.context = [t.context[e]], t;
            return t.length = 0, t
        }, $e = function (t, e) {
            var n, r, o, a = [], s = t.aiDisplay, l = t.aiDisplayMaster, c = e.search, u = e.order, d = e.page;
            if ("ssp" == Bt(t))return "removed" === c ? [] : fe(0, l.length);
            if ("current" == d)for (n = t._iDisplayStart, r = t.fnDisplayEnd(); r > n; n++)a.push(s[n]); else if ("current" == u || "applied" == u)a = "none" == c ? l.slice() : "applied" == c ? s.slice() : i.map(l, function (t, e) {
                return -1 === i.inArray(t, s) ? t : null
            }); else if ("index" == u || "original" == u)for (n = 0, r = t.aoData.length; r > n; n++)"none" == c ? a.push(n) : (o = i.inArray(n, s), (-1 === o && "removed" == c || o >= 0 && "applied" == c) && a.push(n));
            return a
        }, Ie = function (t, e, n) {
            var r = function (e) {
                var r = se(e);
                if (null !== r && !n)return [r];
                var o = $e(t, n);
                if (null !== r && -1 !== i.inArray(r, o))return [r];
                if (!e)return o;
                if ("function" == typeof e)return i.map(o, function (n) {
                    var i = t.aoData[n];
                    return e(n, i._aData, i.nTr) ? n : null
                });
                var a = ge(pe(t.aoData, o, "nTr"));
                return e.nodeName && -1 !== i.inArray(e, a) ? [e._DT_RowIndex] : i(a).filter(e).map(function () {
                    return this._DT_RowIndex
                }).toArray()
            };
            return Ae("row", e, r, t, n)
        };
        Gt("rows()", function (t, e) {
            t === n ? t = "" : i.isPlainObject(t) && (e = t, t = ""), e = Oe(e);
            var r = this.iterator("table", function (n) {
                return Ie(n, t, e)
            }, 1);
            return r.selector.rows = t, r.selector.opts = e, r
        }), Gt("rows().nodes()", function () {
            return this.iterator("row", function (t, e) {
                return t.aoData[e].nTr || n
            }, 1)
        }), Gt("rows().data()", function () {
            return this.iterator(!0, "rows", function (t, e) {
                return pe(t.aoData, e, "_aData")
            }, 1)
        }), Jt("rows().cache()", "row().cache()", function (t) {
            return this.iterator("row", function (e, n) {
                var i = e.aoData[n];
                return "search" === t ? i._aFilterData : i._aSortData
            }, 1)
        }), Jt("rows().invalidate()", "row().invalidate()", function (t) {
            return this.iterator("row", function (e, n) {
                $(e, n, t)
            })
        }), Jt("rows().indexes()", "row().index()", function () {
            return this.iterator("row", function (t, e) {
                return e
            }, 1)
        }), Jt("rows().remove()", "row().remove()", function () {
            var t = this;
            return this.iterator("row", function (e, n, r) {
                var o = e.aoData;
                o.splice(n, 1);
                for (var a = 0, s = o.length; s > a; a++)null !== o[a].nTr && (o[a].nTr._DT_RowIndex = a);
                i.inArray(n, e.aiDisplay);
                N(e.aiDisplayMaster, n), N(e.aiDisplay, n), N(t[r], n, !1), Wt(e)
            })
        }), Gt("rows.add()", function (t) {
            var e = this.iterator("table", function (e) {
                var n, i, r, o = [];
                for (i = 0, r = t.length; r > i; i++)n = t[i], o.push(n.nodeName && "TR" === n.nodeName.toUpperCase() ? x(e, n)[0] : w(e, n));
                return o
            }, 1), n = this.rows(-1);
            return n.pop(), n.push.apply(n, e.toArray()), n
        }), Gt("row()", function (t, e) {
            return Ne(this.rows(t, e))
        }), Gt("row().data()", function (t) {
            var e = this.context;
            return t === n ? e.length && this.length ? e[0].aoData[this[0]]._aData : n : (e[0].aoData[this[0]]._aData = t, $(e[0], this[0], "data"), this)
        }), Gt("row().node()", function () {
            var t = this.context;
            return t.length && this.length ? t[0].aoData[this[0]].nTr || null : null
        }), Gt("row.add()", function (t) {
            t instanceof i && t.length && (t = t[0]);
            var e = this.iterator("table", function (e) {
                return t.nodeName && "TR" === t.nodeName.toUpperCase() ? x(e, t)[0] : w(e, t)
            });
            return this.row(e[0])
        });
        var Le = function (t, e, n, r) {
            var o = [], a = function (e, n) {
                if (i.isArray(e) || e instanceof i)for (var r = 0, s = e.length; s > r; r++)a(e[r], n); else if (e.nodeName && "tr" === e.nodeName.toLowerCase())o.push(e); else {
                    var l = i("<tr><td/></tr>").addClass(n);
                    i("td", l).addClass(n).html(e)[0].colSpan = v(t), o.push(l[0])
                }
            };
            a(n, r), e._details && e._details.remove(), e._details = i(o), e._detailsShow && e._details.insertAfter(e.nTr)
        }, Pe = function (t, e) {
            var i = t.context;
            if (i.length) {
                var r = i[0].aoData[e !== n ? e : t[0]];
                r._details && (r._details.remove(), r._detailsShow = n, r._details = n)
            }
        }, je = function (t, e) {
            var n = t.context;
            if (n.length && t.length) {
                var i = n[0].aoData[t[0]];
                i._details && (i._detailsShow = e, e ? i._details.insertAfter(i.nTr) : i._details.detach(), Me(n[0]))
            }
        }, Me = function (t) {
            var e = new Kt(t), n = ".dt.DT_details", i = "draw" + n, r = "column-visibility" + n, o = "destroy" + n, a = t.aoData;
            e.off(i + " " + r + " " + o), he(a, "_details").length > 0 && (e.on(i, function (n, i) {
                t === i && e.rows({page: "current"}).eq(0).each(function (t) {
                    var e = a[t];
                    e._detailsShow && e._details.insertAfter(e.nTr)
                })
            }), e.on(r, function (e, n, i, r) {
                if (t === n)for (var o, s = v(n), l = 0, c = a.length; c > l; l++)o = a[l], o._details && o._details.children("td[colspan]").attr("colspan", s)
            }), e.on(o, function (n, i) {
                if (t === i)for (var r = 0, o = a.length; o > r; r++)a[r]._details && Pe(e, r)
            }))
        }, Re = "", Fe = Re + "row().child", qe = Fe + "()";
        Gt(qe, function (t, e) {
            var i = this.context;
            return t === n ? i.length && this.length ? i[0].aoData[this[0]]._details : n : (t === !0 ? this.child.show() : t === !1 ? Pe(this) : i.length && this.length && Le(i[0], i[0].aoData[this[0]], t, e), this)
        }), Gt([Fe + ".show()", qe + ".show()"], function (t) {
            return je(this, !0), this
        }), Gt([Fe + ".hide()", qe + ".hide()"], function () {
            return je(this, !1), this
        }), Gt([Fe + ".remove()", qe + ".remove()"], function () {
            return Pe(this), this
        }), Gt(Fe + ".isShown()", function () {
            var t = this.context;
            return t.length && this.length ? t[0].aoData[this[0]]._detailsShow || !1 : !1
        });
        var He = /^(.+):(name|visIdx|visible)$/, We = function (t, e, n, i, r) {
            for (var o = [], a = 0, s = r.length; s > a; a++)o.push(T(t, r[a], e));
            return o
        }, ze = function (t, e, n) {
            var r = t.aoColumns, o = he(r, "sName"), a = he(r, "nTh"), s = function (e) {
                var s = se(e);
                if ("" === e)return fe(r.length);
                if (null !== s)return [s >= 0 ? s : r.length + s];
                if ("function" == typeof e) {
                    var l = $e(t, n);
                    return i.map(r, function (n, i) {
                        return e(i, We(t, i, 0, 0, l), a[i]) ? i : null
                    })
                }
                var c = "string" == typeof e ? e.match(He) : "";
                if (!c)return i(a).filter(e).map(function () {
                    return i.inArray(this, a)
                }).toArray();
                switch (c[2]) {
                    case"visIdx":
                    case"visible":
                        var u = parseInt(c[1], 10);
                        if (0 > u) {
                            var d = i.map(r, function (t, e) {
                                return t.bVisible ? e : null
                            });
                            return [d[d.length + u]]
                        }
                        return [f(t, u)];
                    case"name":
                        return i.map(o, function (t, e) {
                            return t === c[1] ? e : null
                        })
                }
            };
            return Ae("column", e, s, t, n)
        }, Be = function (t, e, r, o) {
            var a, s, l, c, u = t.aoColumns, d = u[e], h = t.aoData;
            if (r === n)return d.bVisible;
            if (d.bVisible !== r) {
                if (r) {
                    var f = i.inArray(!0, he(u, "bVisible"), e + 1);
                    for (s = 0, l = h.length; l > s; s++)c = h[s].nTr, a = h[s].anCells, c && c.insertBefore(a[e], a[f] || null)
                } else i(he(t.aoData, "anCells", e)).detach();
                d.bVisible = r, M(t, t.aoHeader), M(t, t.aoFooter), (o === n || o) && (p(t), (t.oScroll.sX || t.oScroll.sY) && vt(t)), Ht(t, null, "column-visibility", [t, e, r]), It(t)
            }
        };
        Gt("columns()", function (t, e) {
            t === n ? t = "" : i.isPlainObject(t) && (e = t, t = ""), e = Oe(e);
            var r = this.iterator("table", function (n) {
                return ze(n, t, e)
            }, 1);
            return r.selector.cols = t, r.selector.opts = e, r
        }), Jt("columns().header()", "column().header()", function (t, e) {
            return this.iterator("column", function (t, e) {
                return t.aoColumns[e].nTh
            }, 1)
        }), Jt("columns().footer()", "column().footer()", function (t, e) {
            return this.iterator("column", function (t, e) {
                return t.aoColumns[e].nTf
            }, 1)
        }), Jt("columns().data()", "column().data()", function () {
            return this.iterator("column-rows", We, 1)
        }), Jt("columns().dataSrc()", "column().dataSrc()", function () {
            return this.iterator("column", function (t, e) {
                return t.aoColumns[e].mData
            }, 1)
        }), Jt("columns().cache()", "column().cache()", function (t) {
            return this.iterator("column-rows", function (e, n, i, r, o) {
                return pe(e.aoData, o, "search" === t ? "_aFilterData" : "_aSortData", n)
            }, 1)
        }), Jt("columns().nodes()", "column().nodes()", function () {
            return this.iterator("column-rows", function (t, e, n, i, r) {
                return pe(t.aoData, r, "anCells", e)
            }, 1)
        }), Jt("columns().visible()", "column().visible()", function (t, e) {
            return this.iterator("column", function (i, r) {
                return t === n ? i.aoColumns[r].bVisible : void Be(i, r, t, e)
            })
        }), Jt("columns().indexes()", "column().index()", function (t) {
            return this.iterator("column", function (e, n) {
                return "visible" === t ? g(e, n) : n
            }, 1)
        }), Gt("columns.adjust()", function () {
            return this.iterator("table", function (t) {
                p(t)
            }, 1)
        }), Gt("column.index()", function (t, e) {
            if (0 !== this.context.length) {
                var n = this.context[0];
                if ("fromVisible" === t || "toData" === t)return f(n, e);
                if ("fromData" === t || "toVisible" === t)return g(n, e)
            }
        }), Gt("column()", function (t, e) {
            return Ne(this.columns(t, e))
        });
        var Ve = function (t, e, r) {
            var o, a, s, l, c, u, d, h = t.aoData, p = $e(t, r), f = ge(pe(h, p, "anCells")), g = i([].concat.apply([], f)), v = t.aoColumns.length, m = function (e) {
                var r = "function" == typeof e;
                if (null === e || e === n || r) {
                    for (a = [], s = 0, l = p.length; l > s; s++)for (o = p[s], c = 0; v > c; c++)u = {
                        row: o,
                        column: c
                    }, r ? (d = t.aoData[o], e(u, T(t, o, c), d.anCells ? d.anCells[c] : null) && a.push(u)) : a.push(u);
                    return a
                }
                return i.isPlainObject(e) ? [e] : g.filter(e).map(function (t, e) {
                    return o = e.parentNode._DT_RowIndex, {row: o, column: i.inArray(e, h[o].anCells)}
                }).toArray()
            };
            return Ae("cell", e, m, t, r)
        };
        Gt("cells()", function (t, e, r) {
            if (i.isPlainObject(t) && (t.row === n ? (r = t, t = null) : (r = e, e = null)), i.isPlainObject(e) && (r = e, e = null), null === e || e === n)return this.iterator("table", function (e) {
                return Ve(e, t, Oe(r))
            });
            var o, a, s, l, c, u = this.columns(e, r), d = this.rows(t, r), h = this.iterator("table", function (t, e) {
                for (o = [], a = 0, s = d[e].length; s > a; a++)for (l = 0, c = u[e].length; c > l; l++)o.push({
                    row: d[e][a],
                    column: u[e][l]
                });
                return o
            }, 1);
            return i.extend(h.selector, {cols: e, rows: t, opts: r}), h
        }), Jt("cells().nodes()", "cell().node()", function () {
            return this.iterator("cell", function (t, e, i) {
                var r = t.aoData[e].anCells;
                return r ? r[i] : n
            }, 1)
        }), Gt("cells().data()", function () {
            return this.iterator("cell", function (t, e, n) {
                return T(t, e, n)
            }, 1)
        }), Jt("cells().cache()", "cell().cache()", function (t) {
            return t = "search" === t ? "_aFilterData" : "_aSortData", this.iterator("cell", function (e, n, i) {
                return e.aoData[n][t][i]
            }, 1)
        }), Jt("cells().render()", "cell().render()", function (t) {
            return this.iterator("cell", function (e, n, i) {
                return T(e, n, i, t)
            }, 1)
        }), Jt("cells().indexes()", "cell().index()", function () {
            return this.iterator("cell", function (t, e, n) {
                return {row: e, column: n, columnVisible: g(t, n)}
            }, 1)
        }), Jt("cells().invalidate()", "cell().invalidate()", function (t) {
            return this.iterator("cell", function (e, n, i) {
                $(e, n, t, i)
            })
        }), Gt("cell()", function (t, e, n) {
            return Ne(this.cells(t, e, n))
        }), Gt("cell().data()", function (t) {
            var e = this.context, i = this[0];
            return t === n ? e.length && i.length ? T(e[0], i[0].row, i[0].column) : n : (D(e[0], i[0].row, i[0].column, t), $(e[0], i[0].row, "data", i[0].column), this)
        }), Gt("order()", function (t, e) {
            var r = this.context;
            return t === n ? 0 !== r.length ? r[0].aaSorting : n : ("number" == typeof t ? t = [[t, e]] : i.isArray(t[0]) || (t = Array.prototype.slice.call(arguments)), this.iterator("table", function (e) {
                e.aaSorting = t.slice()
            }))
        }), Gt("order.listener()", function (t, e, n) {
            return this.iterator("table", function (i) {
                Ot(i, t, e, n)
            })
        }), Gt(["columns().order()", "column().order()"], function (t) {
            var e = this;
            return this.iterator("table", function (n, r) {
                var o = [];
                i.each(e[r], function (e, n) {
                    o.push([n, t])
                }), n.aaSorting = o
            })
        }), Gt("search()", function (t, e, r, o) {
            var a = this.context;
            return t === n ? 0 !== a.length ? a[0].oPreviousSearch.sSearch : n : this.iterator("table", function (n) {
                n.oFeatures.bFilter && Y(n, i.extend({}, n.oPreviousSearch, {
                    sSearch: t + "",
                    bRegex: null === e ? !1 : e,
                    bSmart: null === r ? !0 : r,
                    bCaseInsensitive: null === o ? !0 : o
                }), 1)
            })
        }), Jt("columns().search()", "column().search()", function (t, e, r, o) {
            return this.iterator("column", function (a, s) {
                var l = a.aoPreSearchCols;
                return t === n ? l[s].sSearch : void(a.oFeatures.bFilter && (i.extend(l[s], {
                    sSearch: t + "",
                    bRegex: null === e ? !1 : e,
                    bSmart: null === r ? !0 : r,
                    bCaseInsensitive: null === o ? !0 : o
                }), Y(a, a.oPreviousSearch, 1)))
            })
        }), Gt("state()", function () {
            return this.context.length ? this.context[0].oSavedState : null
        }), Gt("state.clear()", function () {
            return this.iterator("table", function (t) {
                t.fnStateSaveCallback.call(t.oInstance, t, {})
            })
        }), Gt("state.loaded()", function () {
            return this.context.length ? this.context[0].oLoadedState : null
        }), Gt("state.save()", function () {
            return this.iterator("table", function (t) {
                It(t)
            })
        }), Xt.versionCheck = Xt.fnVersionCheck = function (t) {
            for (var e, n, i = Xt.version.split("."), r = t.split("."), o = 0, a = r.length; a > o; o++)if (e = parseInt(i[o], 10) || 0, n = parseInt(r[o], 10) || 0, e !== n)return e > n;
            return !0
        }, Xt.isDataTable = Xt.fnIsDataTable = function (t) {
            var e = i(t).get(0), n = !1;
            return i.each(Xt.settings, function (t, r) {
                var o = r.nScrollHead ? i("table", r.nScrollHead)[0] : null, a = r.nScrollFoot ? i("table", r.nScrollFoot)[0] : null;
                (r.nTable === e || o === e || a === e) && (n = !0)
            }), n
        }, Xt.tables = Xt.fnTables = function (t) {
            return i.map(Xt.settings, function (e) {
                return !t || t && i(e.nTable).is(":visible") ? e.nTable : void 0
            })
        }, Xt.util = {throttle: bt, escapeRegex: tt}, Xt.camelToHungarian = o, Gt("$()", function (t, e) {
            var n = this.rows(e).nodes(), r = i(n);
            return i([].concat(r.filter(t).toArray(), r.find(t).toArray()))
        }), i.each(["on", "one", "off"], function (t, e) {
            Gt(e + "()", function () {
                var t = Array.prototype.slice.call(arguments);
                t[0].match(/\.dt\b/) || (t[0] += ".dt");
                var n = i(this.tables().nodes());
                return n[e].apply(n, t), this
            })
        }), Gt("clear()", function () {
            return this.iterator("table", function (t) {
                O(t)
            })
        }), Gt("settings()", function () {
            return new Kt(this.context, this.context)
        }), Gt("init()", function () {
            var t = this.context;
            return t.length ? t[0].oInit : null
        }), Gt("data()", function () {
            return this.iterator("table", function (t) {
                return he(t.aoData, "_aData")
            }).flatten()
        }), Gt("destroy()", function (e) {
            return e = e || !1, this.iterator("table", function (n) {
                var r, o = n.nTableWrapper.parentNode, a = n.oClasses, s = n.nTable, l = n.nTBody, c = n.nTHead, u = n.nTFoot, d = i(s), h = i(l), p = i(n.nTableWrapper), f = i.map(n.aoData, function (t) {
                    return t.nTr
                });
                n.bDestroying = !0, Ht(n, "aoDestroyCallback", "destroy", [n]), e || new Kt(n).columns().visible(!0), p.unbind(".DT").find(":not(tbody *)").unbind(".DT"), i(t).unbind(".DT-" + n.sInstance), s != c.parentNode && (d.children("thead").detach(), d.append(c)), u && s != u.parentNode && (d.children("tfoot").detach(), d.append(u)), d.detach(), p.detach(), n.aaSorting = [], n.aaSortingFixed = [], Nt(n), i(f).removeClass(n.asStripeClasses.join(" ")), i("th, td", c).removeClass(a.sSortable + " " + a.sSortableAsc + " " + a.sSortableDesc + " " + a.sSortableNone), n.bJUI && (i("th span." + a.sSortIcon + ", td span." + a.sSortIcon, c).detach(), i("th, td", c).each(function () {
                    var t = i("div." + a.sSortJUIWrapper, this);
                    i(this).append(t.contents()), t.detach()
                })), !e && o && o.insertBefore(s, n.nTableReinsertBefore), h.children().detach(), h.append(f), d.css("width", n.sDestroyWidth).removeClass(a.sTable), r = n.asDestroyStripes.length, r && h.children().each(function (t) {
                    i(this).addClass(n.asDestroyStripes[t % r])
                });
                var g = i.inArray(n, Xt.settings);
                -1 !== g && Xt.settings.splice(g, 1)
            })
        }), i.each(["column", "row", "cell"], function (t, e) {
            Gt(e + "s().every()", function (t) {
                return this.iterator(e, function (n, i, r) {
                    t.call(new Kt(n)[e](i, r))
                })
            })
        }), Gt("i18n()", function (t, e, r) {
            var o = this.context[0], a = k(t)(o.oLanguage);
            return a === n && (a = e), r !== n && i.isPlainObject(a) && (a = a[r] !== n ? a[r] : a._), a.replace("%d", r)
        }), Xt.version = "1.10.7", Xt.settings = [], Xt.models = {}, Xt.models.oSearch = {
            bCaseInsensitive: !0,
            sSearch: "",
            bRegex: !1,
            bSmart: !0
        }, Xt.models.oRow = {
            nTr: null,
            anCells: null,
            _aData: [],
            _aSortData: null,
            _aFilterData: null,
            _sFilterRow: null,
            _sRowStripe: "",
            src: null
        }, Xt.models.oColumn = {
            idx: null,
            aDataSort: null,
            asSorting: null,
            bSearchable: null,
            bSortable: null,
            bVisible: null,
            _sManualType: null,
            _bAttrSrc: !1,
            fnCreatedCell: null,
            fnGetData: null,
            fnSetData: null,
            mData: null,
            mRender: null,
            nTh: null,
            nTf: null,
            sClass: null,
            sContentPadding: null,
            sDefaultContent: null,
            sName: null,
            sSortDataType: "std",
            sSortingClass: null,
            sSortingClassJUI: null,
            sTitle: null,
            sType: null,
            sWidth: null,
            sWidthOrig: null
        }, Xt.defaults = {
            aaData: null,
            aaSorting: [[0, "asc"]],
            aaSortingFixed: [],
            ajax: null,
            aLengthMenu: [10, 25, 50, 100],
            aoColumns: null,
            aoColumnDefs: null,
            aoSearchCols: [],
            asStripeClasses: null,
            bAutoWidth: !0,
            bDeferRender: !1,
            bDestroy: !1,
            bFilter: !0,
            bInfo: !0,
            bJQueryUI: !1,
            bLengthChange: !0,
            bPaginate: !0,
            bProcessing: !1,
            bRetrieve: !1,
            bScrollCollapse: !1,
            bServerSide: !1,
            bSort: !0,
            bSortMulti: !0,
            bSortCellsTop: !1,
            bSortClasses: !0,
            bStateSave: !1,
            fnCreatedRow: null,
            fnDrawCallback: null,
            fnFooterCallback: null,
            fnFormatNumber: function (t) {
                return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, this.oLanguage.sThousands)
            },
            fnHeaderCallback: null,
            fnInfoCallback: null,
            fnInitComplete: null,
            fnPreDrawCallback: null,
            fnRowCallback: null,
            fnServerData: null,
            fnServerParams: null,
            fnStateLoadCallback: function (t) {
                try {
                    return JSON.parse((-1 === t.iStateDuration ? sessionStorage : localStorage).getItem("DataTables_" + t.sInstance + "_" + location.pathname))
                } catch (e) {
                }
            },
            fnStateLoadParams: null,
            fnStateLoaded: null,
            fnStateSaveCallback: function (t, e) {
                try {
                    (-1 === t.iStateDuration ? sessionStorage : localStorage).setItem("DataTables_" + t.sInstance + "_" + location.pathname, JSON.stringify(e))
                } catch (n) {
                }
            },
            fnStateSaveParams: null,
            iStateDuration: 7200,
            iDeferLoading: null,
            iDisplayLength: 10,
            iDisplayStart: 0,
            iTabIndex: 0,
            oClasses: {},
            oLanguage: {
                oAria: {
                    sSortAscending: ": activate to sort column ascending",
                    sSortDescending: ": activate to sort column descending"
                },
                oPaginate: {sFirst: "First", sLast: "Last", sNext: "Next", sPrevious: "Previous"},
                sEmptyTable: "No data available in table",
                sInfo: "Showing _START_ to _END_ of _TOTAL_ entries",
                sInfoEmpty: "Showing 0 to 0 of 0 entries",
                sInfoFiltered: "(filtered from _MAX_ total entries)",
                sInfoPostFix: "",
                sDecimal: "",
                sThousands: ",",
                sLengthMenu: "Show _MENU_ entries",
                sLoadingRecords: "Loading...",
                sProcessing: "Processing...",
                sSearch: "Search:",
                sSearchPlaceholder: "",
                sUrl: "",
                sZeroRecords: "No matching records found"
            },
            oSearch: i.extend({}, Xt.models.oSearch),
            sAjaxDataProp: "data",
            sAjaxSource: null,
            sDom: "lfrtip",
            searchDelay: null,
            sPaginationType: "simple_numbers",
            sScrollX: "",
            sScrollXInner: "",
            sScrollY: "",
            sServerMethod: "GET",
            renderer: null
        }, r(Xt.defaults), Xt.defaults.column = {
            aDataSort: null,
            iDataSort: -1,
            asSorting: ["asc", "desc"],
            bSearchable: !0,
            bSortable: !0,
            bVisible: !0,
            fnCreatedCell: null,
            mData: null,
            mRender: null,
            sCellType: "td",
            sClass: "",
            sContentPadding: "",
            sDefaultContent: null,
            sName: "",
            sSortDataType: "std",
            sTitle: null,
            sType: null,
            sWidth: null
        }, r(Xt.defaults.column), Xt.models.oSettings = {
            oFeatures: {
                bAutoWidth: null,
                bDeferRender: null,
                bFilter: null,
                bInfo: null,
                bLengthChange: null,
                bPaginate: null,
                bProcessing: null,
                bServerSide: null,
                bSort: null,
                bSortMulti: null,
                bSortClasses: null,
                bStateSave: null
            },
            oScroll: {bCollapse: null, iBarWidth: 0, sX: null, sXInner: null, sY: null},
            oLanguage: {fnInfoCallback: null},
            oBrowser: {bScrollOversize: !1, bScrollbarLeft: !1},
            ajax: null,
            aanFeatures: [],
            aoData: [],
            aiDisplay: [],
            aiDisplayMaster: [],
            aoColumns: [],
            aoHeader: [],
            aoFooter: [],
            oPreviousSearch: {},
            aoPreSearchCols: [],
            aaSorting: null,
            aaSortingFixed: [],
            asStripeClasses: null,
            asDestroyStripes: [],
            sDestroyWidth: 0,
            aoRowCallback: [],
            aoHeaderCallback: [],
            aoFooterCallback: [],
            aoDrawCallback: [],
            aoRowCreatedCallback: [],
            aoPreDrawCallback: [],
            aoInitComplete: [],
            aoStateSaveParams: [],
            aoStateLoadParams: [],
            aoStateLoaded: [],
            sTableId: "",
            nTable: null,
            nTHead: null,
            nTFoot: null,
            nTBody: null,
            nTableWrapper: null,
            bDeferLoading: !1,
            bInitialised: !1,
            aoOpenRows: [],
            sDom: null,
            searchDelay: null,
            sPaginationType: "two_button",
            iStateDuration: 0,
            aoStateSave: [],
            aoStateLoad: [],
            oSavedState: null,
            oLoadedState: null,
            sAjaxSource: null,
            sAjaxDataProp: null,
            bAjaxDataGet: !0,
            jqXHR: null,
            json: n,
            oAjaxData: n,
            fnServerData: null,
            aoServerParams: [],
            sServerMethod: null,
            fnFormatNumber: null,
            aLengthMenu: null,
            iDraw: 0,
            bDrawing: !1,
            iDrawError: -1,
            _iDisplayLength: 10,
            _iDisplayStart: 0,
            _iRecordsTotal: 0,
            _iRecordsDisplay: 0,
            bJUI: null,
            oClasses: {},
            bFiltered: !1,
            bSorted: !1,
            bSortCellsTop: null,
            oInit: null,
            aoDestroyCallback: [],
            fnRecordsTotal: function () {
                return "ssp" == Bt(this) ? 1 * this._iRecordsTotal : this.aiDisplayMaster.length
            },
            fnRecordsDisplay: function () {
                return "ssp" == Bt(this) ? 1 * this._iRecordsDisplay : this.aiDisplay.length
            },
            fnDisplayEnd: function () {
                var t = this._iDisplayLength, e = this._iDisplayStart, n = e + t, i = this.aiDisplay.length, r = this.oFeatures, o = r.bPaginate;
                return r.bServerSide ? o === !1 || -1 === t ? e + i : Math.min(e + t, this._iRecordsDisplay) : !o || n > i || -1 === t ? i : n
            },
            oInstance: null,
            sInstance: null,
            iTabIndex: 0,
            nScrollHead: null,
            nScrollFoot: null,
            aLastSort: [],
            oPlugins: {}
        }, Xt.ext = Yt = {
            buttons: {},
            classes: {},
            errMode: "alert",
            feature: [],
            search: [],
            selector: {cell: [], column: [], row: []},
            internal: {},
            legacy: {ajax: null},
            pager: {},
            renderer: {pageButton: {}, header: {}},
            order: {},
            type: {detect: [], search: {}, order: {}},
            _unique: 0,
            fnVersionCheck: Xt.fnVersionCheck,
            iApiIndex: 0,
            oJUIClasses: {},
            sVersion: Xt.version
        }, i.extend(Yt, {
            afnFiltering: Yt.search,
            aTypes: Yt.type.detect,
            ofnSearch: Yt.type.search,
            oSort: Yt.type.order,
            afnSortData: Yt.order,
            aoFeatures: Yt.feature,
            oApi: Yt.internal,
            oStdClasses: Yt.classes,
            oPagination: Yt.pager
        }), i.extend(Xt.ext.classes, {
            sTable: "dataTable",
            sNoFooter: "no-footer",
            sPageButton: "paginate_button",
            sPageButtonActive: "current",
            sPageButtonDisabled: "disabled",
            sStripeOdd: "odd",
            sStripeEven: "even",
            sRowEmpty: "dataTables_empty",
            sWrapper: "dataTables_wrapper",
            sFilter: "dataTables_filter",
            sInfo: "dataTables_info",
            sPaging: "dataTables_paginate paging_",
            sLength: "dataTables_length",
            sProcessing: "dataTables_processing",
            sSortAsc: "sorting_asc",
            sSortDesc: "sorting_desc",
            sSortable: "sorting",
            sSortableAsc: "sorting_asc_disabled",
            sSortableDesc: "sorting_desc_disabled",
            sSortableNone: "sorting_disabled",
            sSortColumn: "sorting_",
            sFilterInput: "",
            sLengthSelect: "",
            sScrollWrapper: "dataTables_scroll",
            sScrollHead: "dataTables_scrollHead",
            sScrollHeadInner: "dataTables_scrollHeadInner",
            sScrollBody: "dataTables_scrollBody",
            sScrollFoot: "dataTables_scrollFoot",
            sScrollFootInner: "dataTables_scrollFootInner",
            sHeaderTH: "",
            sFooterTH: "",
            sSortJUIAsc: "",
            sSortJUIDesc: "",
            sSortJUI: "",
            sSortJUIAscAllowed: "",
            sSortJUIDescAllowed: "",
            sSortJUIWrapper: "",
            sSortIcon: "",
            sJUIHeader: "",
            sJUIFooter: ""
        }), function () {
            var t = "";
            t = "";
            var e = t + "ui-state-default", n = t + "css_right ui-icon ui-icon-", r = t + "fg-toolbar ui-toolbar ui-widget-header ui-helper-clearfix";
            i.extend(Xt.ext.oJUIClasses, Xt.ext.classes, {
                sPageButton: "fg-button ui-button " + e,
                sPageButtonActive: "ui-state-disabled",
                sPageButtonDisabled: "ui-state-disabled",
                sPaging: "dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi ui-buttonset-multi paging_",
                sSortAsc: e + " sorting_asc",
                sSortDesc: e + " sorting_desc",
                sSortable: e + " sorting",
                sSortableAsc: e + " sorting_asc_disabled",
                sSortableDesc: e + " sorting_desc_disabled",
                sSortableNone: e + " sorting_disabled",
                sSortJUIAsc: n + "triangle-1-n",
                sSortJUIDesc: n + "triangle-1-s",
                sSortJUI: n + "carat-2-n-s",
                sSortJUIAscAllowed: n + "carat-1-n",
                sSortJUIDescAllowed: n + "carat-1-s",
                sSortJUIWrapper: "DataTables_sort_wrapper",
                sSortIcon: "DataTables_sort_icon",
                sScrollHead: "dataTables_scrollHead " + e,
                sScrollFoot: "dataTables_scrollFoot " + e,
                sHeaderTH: e,
                sFooterTH: e,
                sJUIHeader: r + " ui-corner-tl ui-corner-tr",
                sJUIFooter: r + " ui-corner-bl ui-corner-br"
            })
        }();
        var Ue = Xt.ext.pager;
        i.extend(Ue, {
            simple: function (t, e) {
                return ["previous", "next"]
            }, full: function (t, e) {
                return ["first", "previous", "next", "last"]
            }, simple_numbers: function (t, e) {
                return ["previous", Vt(t, e), "next"]
            }, full_numbers: function (t, e) {
                return ["first", "previous", Vt(t, e), "next", "last"]
            }, _numbers: Vt, numbers_length: 7
        }), i.extend(!0, Xt.ext.renderer, {
            pageButton: {
                _: function (t, n, r, o, a, s) {
                    var l, c, u, d = t.oClasses, h = t.oLanguage.oPaginate, p = 0, f = function (e, n) {
                        var o, u, g, v, m = function (e) {
                            ht(t, e.data.action, !0)
                        };
                        for (o = 0, u = n.length; u > o; o++)if (v = n[o], i.isArray(v)) {
                            var y = i("<" + (v.DT_el || "div") + "/>").appendTo(e);
                            f(y, v)
                        } else {
                            switch (l = "", c = "", v) {
                                case"ellipsis":
                                    e.append('<span class="ellipsis">&#x2026;</span>');
                                    break;
                                case"first":
                                    l = h.sFirst, c = v + (a > 0 ? "" : " " + d.sPageButtonDisabled);
                                    break;
                                case"previous":
                                    l = h.sPrevious, c = v + (a > 0 ? "" : " " + d.sPageButtonDisabled);
                                    break;
                                case"next":
                                    l = h.sNext, c = v + (s - 1 > a ? "" : " " + d.sPageButtonDisabled);
                                    break;
                                case"last":
                                    l = h.sLast, c = v + (s - 1 > a ? "" : " " + d.sPageButtonDisabled);
                                    break;
                                default:
                                    l = v + 1, c = a === v ? d.sPageButtonActive : ""
                            }
                            l && (g = i("<a>", {
                                "class": d.sPageButton + " " + c,
                                "aria-controls": t.sTableId,
                                "data-dt-idx": p,
                                tabindex: t.iTabIndex,
                                id: 0 === r && "string" == typeof v ? t.sTableId + "_" + v : null
                            }).html(l).appendTo(e), Ft(g, {action: v}, m), p++)
                        }
                    };
                    try {
                        u = i(e.activeElement).data("dt-idx")
                    } catch (g) {
                    }
                    f(i(n).empty(), o), u && i(n).find("[data-dt-idx=" + u + "]").focus()
                }
            }
        }), i.extend(Xt.ext.type.detect, [function (t, e) {
            var n = e.oLanguage.sDecimal;
            return ce(t, n) ? "num" + n : null
        }, function (t, e) {
            if (!(!t || t instanceof Date || ne.test(t) && ie.test(t)))return null;
            var n = Date.parse(t);
            return null !== n && !isNaN(n) || ae(t) ? "date" : null
        }, function (t, e) {
            var n = e.oLanguage.sDecimal;
            return ce(t, n, !0) ? "num-fmt" + n : null
        }, function (t, e) {
            var n = e.oLanguage.sDecimal;
            return de(t, n) ? "html-num" + n : null
        }, function (t, e) {
            var n = e.oLanguage.sDecimal;
            return de(t, n, !0) ? "html-num-fmt" + n : null
        }, function (t, e) {
            return ae(t) || "string" == typeof t && -1 !== t.indexOf("<") ? "html" : null
        }]), i.extend(Xt.ext.type.search, {
            html: function (t) {
                return ae(t) ? t : "string" == typeof t ? t.replace(te, " ").replace(ee, "") : ""
            }, string: function (t) {
                return ae(t) ? t : "string" == typeof t ? t.replace(te, " ") : t
            }
        });
        var Qe = function (t, e, n, i) {
            return 0 === t || t && "-" !== t ? (e && (t = le(t, e)), t.replace && (n && (t = t.replace(n, "")), i && (t = t.replace(i, ""))), 1 * t) : -(1 / 0)
        };
        return i.extend(Yt.type.order, {
            "date-pre": function (t) {
                return Date.parse(t) || 0
            }, "html-pre": function (t) {
                return ae(t) ? "" : t.replace ? t.replace(/<.*?>/g, "").toLowerCase() : t + ""
            }, "string-pre": function (t) {
                return ae(t) ? "" : "string" == typeof t ? t.toLowerCase() : t.toString ? t.toString() : ""
            }, "string-asc": function (t, e) {
                return e > t ? -1 : t > e ? 1 : 0
            }, "string-desc": function (t, e) {
                return e > t ? 1 : t > e ? -1 : 0
            }
        }), Ut(""), i.extend(!0, Xt.ext.renderer, {
            header: {
                _: function (t, e, n, r) {
                    i(t.nTable).on("order.dt.DT", function (i, o, a, s) {
                        if (t === o) {
                            var l = n.idx;
                            e.removeClass(n.sSortingClass + " " + r.sSortAsc + " " + r.sSortDesc).addClass("asc" == s[l] ? r.sSortAsc : "desc" == s[l] ? r.sSortDesc : n.sSortingClass)
                        }
                    })
                }, jqueryui: function (t, e, n, r) {
                    i("<div/>").addClass(r.sSortJUIWrapper).append(e.contents()).append(i("<span/>").addClass(r.sSortIcon + " " + n.sSortingClassJUI)).appendTo(e), i(t.nTable).on("order.dt.DT", function (i, o, a, s) {
                        if (t === o) {
                            var l = n.idx;
                            e.removeClass(r.sSortAsc + " " + r.sSortDesc).addClass("asc" == s[l] ? r.sSortAsc : "desc" == s[l] ? r.sSortDesc : n.sSortingClass), e.find("span." + r.sSortIcon).removeClass(r.sSortJUIAsc + " " + r.sSortJUIDesc + " " + r.sSortJUI + " " + r.sSortJUIAscAllowed + " " + r.sSortJUIDescAllowed).addClass("asc" == s[l] ? r.sSortJUIAsc : "desc" == s[l] ? r.sSortJUIDesc : n.sSortingClassJUI)
                        }
                    })
                }
            }
        }), Xt.render = {
            number: function (t, e, n, i) {
                return {
                    display: function (r) {
                        if ("number" != typeof r && "string" != typeof r)return r;
                        var o = 0 > r ? "-" : "";
                        r = Math.abs(parseFloat(r));
                        var a = parseInt(r, 10), s = n ? e + (r - a).toFixed(n).substring(2) : "";
                        return o + (i || "") + a.toString().replace(/\B(?=(\d{3})+(?!\d))/g, t) + s
                    }
                }
            }
        }, i.extend(Xt.ext.internal, {
            _fnExternApiFunc: Qt,
            _fnBuildAjax: z,
            _fnAjaxUpdate: B,
            _fnAjaxParameters: V,
            _fnAjaxUpdateDraw: U,
            _fnAjaxDataSrc: Q,
            _fnAddColumn: d,
            _fnColumnOptions: h,
            _fnAdjustColumnSizing: p,
            _fnVisibleToColumnIndex: f,
            _fnColumnIndexToVisible: g,
            _fnVisbleColumns: v,
            _fnGetColumns: m,
            _fnColumnTypes: y,
            _fnApplyColumnDefs: b,
            _fnHungarianMap: r,
            _fnCamelToHungarian: o,
            _fnLanguageCompat: a,
            _fnBrowserDetect: c,
            _fnAddData: w,
            _fnAddTr: x,
            _fnNodeToDataIndex: C,
            _fnNodeToColumnIndex: S,
            _fnGetCellData: T,
            _fnSetCellData: D,
            _fnSplitObjNotation: _,
            _fnGetObjectDataFn: k,
            _fnSetObjectDataFn: E,
            _fnGetDataMaster: A,
            _fnClearTable: O,
            _fnDeleteIndex: N,
            _fnInvalidate: $,
            _fnGetRowElements: I,
            _fnCreateTr: L,
            _fnBuildHead: j,
            _fnDrawHead: M,
            _fnDraw: R,
            _fnReDraw: F,
            _fnAddOptionsHtml: q,
            _fnDetectHeader: H,
            _fnGetUniqueThs: W,
            _fnFeatureHtmlFilter: X,
            _fnFilterComplete: Y,
            _fnFilterCustom: K,
            _fnFilterColumn: G,
            _fnFilter: J,
            _fnFilterCreateSearch: Z,
            _fnEscapeRegex: tt,
            _fnFilterData: et,
            _fnFeatureHtmlInfo: rt,
            _fnUpdateInfo: ot,
            _fnInfoMacros: at,
            _fnInitialise: st,
            _fnInitComplete: lt,
            _fnLengthChange: ct,
            _fnFeatureHtmlLength: ut,
            _fnFeatureHtmlPaginate: dt,
            _fnPageChange: ht,
            _fnFeatureHtmlProcessing: pt,
            _fnProcessingDisplay: ft,
            _fnFeatureHtmlTable: gt,
            _fnScrollDraw: vt,
            _fnApplyToChildren: mt,
            _fnCalculateColumnWidths: yt,
            _fnThrottle: bt,
            _fnConvertToWidth: wt,
            _fnScrollingWidthAdjust: xt,
            _fnGetWidestNode: Ct,
            _fnGetMaxLenString: St,
            _fnStringToCss: Tt,
            _fnScrollBarWidth: Dt,
            _fnSortFlatten: _t,
            _fnSort: kt,
            _fnSortAria: Et,
            _fnSortListener: At,
            _fnSortAttachListener: Ot,
            _fnSortingClasses: Nt,
            _fnSortData: $t,
            _fnSaveState: It,
            _fnLoadState: Lt,
            _fnSettingsFromNode: Pt,
            _fnLog: jt,
            _fnMap: Mt,
            _fnBindAction: Ft,
            _fnCallbackReg: qt,
            _fnCallbackFire: Ht,
            _fnLengthOverflow: Wt,
            _fnRenderer: zt,
            _fnDataSource: Bt,
            _fnRowAttributes: P,
            _fnCalculateEnd: function () {
            }
        }), i.fn.dataTable = Xt, i.fn.dataTableSettings = Xt.settings, i.fn.dataTableExt = Xt.ext, i.fn.DataTable = function (t) {
            return i(this).dataTable(t).api()
        }, i.each(Xt, function (t, e) {
            i.fn.DataTable[t] = e
        }), i.fn.dataTable
    })
}(window, document), function (t, e, n) {
    function i(n, i, r) {
        var o = e.createElement(n);
        return i && (o.id = Z + i), r && (o.style.cssText = r), t(o)
    }

    function r() {
        return n.innerHeight ? n.innerHeight : t(n).height()
    }

    function o(e, n) {
        n !== Object(n) && (n = {}), this.cache = {}, this.el = e, this.value = function (e) {
            var i;
            return void 0 === this.cache[e] && (i = t(this.el).attr("data-cbox-" + e), void 0 !== i ? this.cache[e] = i : void 0 !== n[e] ? this.cache[e] = n[e] : void 0 !== G[e] && (this.cache[e] = G[e])), this.cache[e]
        }, this.get = function (e) {
            var n = this.value(e);
            return t.isFunction(n) ? n.call(this.el, this) : n
        }
    }

    function a(t) {
        var e = _.length, n = (z + t) % e;
        return 0 > n ? e + n : n
    }

    function s(t, e) {
        return Math.round((/%/.test(t) ? ("x" === e ? k.width() : r()) / 100 : 1) * parseInt(t, 10))
    }

    function l(t, e) {
        return t.get("photo") || t.get("photoRegex").test(e)
    }

    function c(t, e) {
        return t.get("retinaUrl") && n.devicePixelRatio > 1 ? e.replace(t.get("photoRegex"), t.get("retinaSuffix")) : e
    }

    function u(t) {
        "contains"in b[0] && !b[0].contains(t.target) && t.target !== y[0] && (t.stopPropagation(), b.focus())
    }

    function d(t) {
        d.str !== t && (b.add(y).removeClass(d.str).addClass(t), d.str = t)
    }

    function h(e) {
        z = 0, e && e !== !1 && "nofollow" !== e ? (_ = t("." + tt).filter(function () {
            var n = t.data(this, J), i = new o(this, n);
            return i.get("rel") === e
        }), z = _.index(R.el), -1 === z && (_ = _.add(R.el), z = _.length - 1)) : _ = t(R.el)
    }

    function p(n) {
        t(e).trigger(n), st.triggerHandler(n)
    }

    function f(n) {
        var r;
        if (!Q) {
            if (r = t(n).data(J), R = new o(n, r), h(R.get("rel")), !V) {
                V = U = !0, d(R.get("className")), b.css({
                    visibility: "hidden",
                    display: "block",
                    opacity: ""
                }), E = i(lt, "LoadedContent", "width:0; height:0; overflow:hidden; visibility:hidden"), x.css({
                    width: "",
                    height: ""
                }).append(E), F = C.height() + D.height() + x.outerHeight(!0) - x.height(), q = S.width() + T.width() + x.outerWidth(!0) - x.width(), H = E.outerHeight(!0), W = E.outerWidth(!0);
                var a = s(R.get("initialWidth"), "x"), l = s(R.get("initialHeight"), "y"), c = R.get("maxWidth"), f = R.get("maxHeight");
                R.w = (c !== !1 ? Math.min(a, s(c, "x")) : a) - W - q, R.h = (f !== !1 ? Math.min(l, s(f, "y")) : l) - H - F, E.css({
                    width: "",
                    height: R.h
                }), Y.position(), p(et), R.get("onOpen"), M.add(N).hide(), b.focus(), R.get("trapFocus") && e.addEventListener && (e.addEventListener("focus", u, !0), st.one(ot, function () {
                    e.removeEventListener("focus", u, !0)
                })), R.get("returnFocus") && st.one(ot, function () {
                    t(R.el).focus()
                })
            }
            var g = parseFloat(R.get("opacity"));
            y.css({
                opacity: g === g ? g : "",
                cursor: R.get("overlayClose") ? "pointer" : "",
                visibility: "visible"
            }).show(), R.get("closeButton") ? j.html(R.get("close")).appendTo(x) : j.appendTo("<div/>"), m()
        }
    }

    function g() {
        b || (K = !1, k = t(n), b = i(lt).attr({
            id: J,
            "class": t.support.opacity === !1 ? Z + "IE" : "",
            role: "dialog",
            tabindex: "-1"
        }).hide(), y = i(lt, "Overlay").hide(), O = t([i(lt, "LoadingOverlay")[0], i(lt, "LoadingGraphic")[0]]), w = i(lt, "Wrapper"), x = i(lt, "Content").append(N = i(lt, "Title"), $ = i(lt, "Current"), P = t('<button type="button"/>').attr({id: Z + "Previous"}), L = t('<button type="button"/>').attr({id: Z + "Next"}), I = i("button", "Slideshow"), O), j = t('<button type="button"/>').attr({id: Z + "Close"}), w.append(i(lt).append(i(lt, "TopLeft"), C = i(lt, "TopCenter"), i(lt, "TopRight")), i(lt, !1, "clear:left").append(S = i(lt, "MiddleLeft"), x, T = i(lt, "MiddleRight")), i(lt, !1, "clear:left").append(i(lt, "BottomLeft"), D = i(lt, "BottomCenter"), i(lt, "BottomRight"))).find("div div").css({"float": "left"}), A = i(lt, !1, "position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;"), M = L.add(P).add($).add(I)), e.body && !b.parent().length && t(e.body).append(y, b.append(w, A))
    }

    function v() {
        function n(t) {
            t.which > 1 || t.shiftKey || t.altKey || t.metaKey || t.ctrlKey || (t.preventDefault(), f(this))
        }

        return b ? (K || (K = !0, L.click(function () {
            Y.next()
        }), P.click(function () {
            Y.prev()
        }), j.click(function () {
            Y.close()
        }), y.click(function () {
            R.get("overlayClose") && Y.close()
        }), t(e).bind("keydown." + Z, function (t) {
            var e = t.keyCode;
            V && R.get("escKey") && 27 === e && (t.preventDefault(), Y.close()), V && R.get("arrowKey") && _[1] && !t.altKey && (37 === e ? (t.preventDefault(), P.click()) : 39 === e && (t.preventDefault(), L.click()))
        }), t.isFunction(t.fn.on) ? t(e).on("click." + Z, "." + tt, n) : t("." + tt).live("click." + Z, n)), !0) : !1
    }

    function m() {
        var e, r, o, a = Y.prep, u = ++ct;
        if (U = !0, B = !1, p(at), p(nt), R.get("onLoad"), R.h = R.get("height") ? s(R.get("height"), "y") - H - F : R.get("innerHeight") && s(R.get("innerHeight"), "y"), R.w = R.get("width") ? s(R.get("width"), "x") - W - q : R.get("innerWidth") && s(R.get("innerWidth"), "x"), R.mw = R.w, R.mh = R.h, R.get("maxWidth") && (R.mw = s(R.get("maxWidth"), "x") - W - q, R.mw = R.w && R.w < R.mw ? R.w : R.mw), R.get("maxHeight") && (R.mh = s(R.get("maxHeight"), "y") - H - F, R.mh = R.h && R.h < R.mh ? R.h : R.mh), e = R.get("href"), X = setTimeout(function () {
                O.show()
            }, 100), R.get("inline")) {
            var d = t(e);
            o = t("<div>").hide().insertBefore(d), st.one(at, function () {
                o.replaceWith(d)
            }), a(d)
        } else R.get("iframe") ? a(" ") : R.get("html") ? a(R.get("html")) : l(R, e) ? (e = c(R, e), B = R.get("createImg"), t(B).addClass(Z + "Photo").bind("error." + Z, function () {
            a(i(lt, "Error").html(R.get("imgError")))
        }).one("load", function () {
            u === ct && setTimeout(function () {
                var e;
                R.get("retinaImage") && n.devicePixelRatio > 1 && (B.height = B.height / n.devicePixelRatio, B.width = B.width / n.devicePixelRatio), R.get("scalePhotos") && (r = function () {
                    B.height -= B.height * e, B.width -= B.width * e
                }, R.mw && B.width > R.mw && (e = (B.width - R.mw) / B.width, r()), R.mh && B.height > R.mh && (e = (B.height - R.mh) / B.height, r())), R.h && (B.style.marginTop = Math.max(R.mh - B.height, 0) / 2 + "px"), _[1] && (R.get("loop") || _[z + 1]) && (B.style.cursor = "pointer", t(B).bind("click." + Z, function () {
                    Y.next()
                })), B.style.width = B.width + "px", B.style.height = B.height + "px", a(B)
            }, 1)
        }), B.src = e) : e && A.load(e, R.get("data"), function (e, n) {
            u === ct && a("error" === n ? i(lt, "Error").html(R.get("xhrError")) : t(this).contents())
        })
    }

    var y, b, w, x, C, S, T, D, _, k, E, A, O, N, $, I, L, P, j, M, R, F, q, H, W, z, B, V, U, Q, X, Y, K, G = {
        html: !1,
        photo: !1,
        iframe: !1,
        inline: !1,
        transition: "elastic",
        speed: 300,
        fadeOut: 300,
        width: !1,
        initialWidth: "600",
        innerWidth: !1,
        maxWidth: !1,
        height: !1,
        initialHeight: "450",
        innerHeight: !1,
        maxHeight: !1,
        scalePhotos: !0,
        scrolling: !0,
        opacity: .9,
        preloading: !0,
        className: !1,
        overlayClose: !0,
        escKey: !0,
        arrowKey: !0,
        top: !1,
        bottom: !1,
        left: !1,
        right: !1,
        fixed: !1,
        data: void 0,
        closeButton: !0,
        fastIframe: !0,
        open: !1,
        reposition: !0,
        loop: !0,
        slideshow: !1,
        slideshowAuto: !0,
        slideshowSpeed: 2500,
        slideshowStart: "start slideshow",
        slideshowStop: "stop slideshow",
        photoRegex: /\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,
        retinaImage: !1,
        retinaUrl: !1,
        retinaSuffix: "@2x.$1",
        current: "image {current} of {total}",
        previous: "previous",
        next: "next",
        close: "close",
        xhrError: "This content failed to load.",
        imgError: "This image failed to load.",
        returnFocus: !0,
        trapFocus: !0,
        onOpen: !1,
        onLoad: !1,
        onComplete: !1,
        onCleanup: !1,
        onClosed: !1,
        rel: function () {
            return this.rel
        },
        href: function () {
            return t(this).attr("href")
        },
        title: function () {
            return this.title
        },
        createImg: function () {
            var e = new Image, n = t(this).data("cbox-img-attrs");
            return "object" == typeof n && t.each(n, function (t, n) {
                e[t] = n
            }), e
        },
        createIframe: function () {
            var n = e.createElement("iframe"), i = t(this).data("cbox-iframe-attrs");
            return "object" == typeof i && t.each(i, function (t, e) {
                n[t] = e
            }), "frameBorder"in n && (n.frameBorder = 0), "allowTransparency"in n && (n.allowTransparency = "true"), n.name = (new Date).getTime(), n.allowFullScreen = !0, n
        }
    }, J = "colorbox", Z = "cbox", tt = Z + "Element", et = Z + "_open", nt = Z + "_load", it = Z + "_complete", rt = Z + "_cleanup", ot = Z + "_closed", at = Z + "_purge", st = t("<a/>"), lt = "div", ct = 0, ut = {}, dt = function () {
        function t() {
            clearTimeout(a)
        }

        function e() {
            (R.get("loop") || _[z + 1]) && (t(), a = setTimeout(Y.next, R.get("slideshowSpeed")))
        }

        function n() {
            I.html(R.get("slideshowStop")).unbind(l).one(l, i), st.bind(it, e).bind(nt, t), b.removeClass(s + "off").addClass(s + "on")
        }

        function i() {
            t(), st.unbind(it, e).unbind(nt, t), I.html(R.get("slideshowStart")).unbind(l).one(l, function () {
                Y.next(), n()
            }), b.removeClass(s + "on").addClass(s + "off")
        }

        function r() {
            o = !1, I.hide(), t(), st.unbind(it, e).unbind(nt, t), b.removeClass(s + "off " + s + "on")
        }

        var o, a, s = Z + "Slideshow_", l = "click." + Z;
        return function () {
            o ? R.get("slideshow") || (st.unbind(rt, r), r()) : R.get("slideshow") && _[1] && (o = !0, st.one(rt, r), R.get("slideshowAuto") ? n() : i(), I.show())
        }
    }();
    t[J] || (t(g), Y = t.fn[J] = t[J] = function (e, n) {
        var i, r = this;
        return e = e || {}, t.isFunction(r) && (r = t("<a/>"), e.open = !0), r[0] ? (g(), v() && (n && (e.onComplete = n), r.each(function () {
            var n = t.data(this, J) || {};
            t.data(this, J, t.extend(n, e))
        }).addClass(tt), i = new o(r[0], e), i.get("open") && f(r[0])), r) : r
    }, Y.position = function (e, n) {
        function i() {
            C[0].style.width = D[0].style.width = x[0].style.width = parseInt(b[0].style.width, 10) - q + "px", x[0].style.height = S[0].style.height = T[0].style.height = parseInt(b[0].style.height, 10) - F + "px"
        }

        var o, a, l, c = 0, u = 0, d = b.offset();
        if (k.unbind("resize." + Z), b.css({
                top: -9e4,
                left: -9e4
            }), a = k.scrollTop(), l = k.scrollLeft(), R.get("fixed") ? (d.top -= a, d.left -= l, b.css({position: "fixed"})) : (c = a, u = l, b.css({position: "absolute"})), u += R.get("right") !== !1 ? Math.max(k.width() - R.w - W - q - s(R.get("right"), "x"), 0) : R.get("left") !== !1 ? s(R.get("left"), "x") : Math.round(Math.max(k.width() - R.w - W - q, 0) / 2), c += R.get("bottom") !== !1 ? Math.max(r() - R.h - H - F - s(R.get("bottom"), "y"), 0) : R.get("top") !== !1 ? s(R.get("top"), "y") : Math.round(Math.max(r() - R.h - H - F, 0) / 2), b.css({
                top: d.top,
                left: d.left,
                visibility: "visible"
            }), w[0].style.width = w[0].style.height = "9999px", o = {
                width: R.w + W + q,
                height: R.h + H + F,
                top: c,
                left: u
            }, e) {
            var h = 0;
            t.each(o, function (t) {
                return o[t] !== ut[t] ? void(h = e) : void 0
            }), e = h
        }
        ut = o, e || b.css(o), b.dequeue().animate(o, {
            duration: e || 0, complete: function () {
                i(), U = !1, w[0].style.width = R.w + W + q + "px", w[0].style.height = R.h + H + F + "px", R.get("reposition") && setTimeout(function () {
                    k.bind("resize." + Z, Y.position)
                }, 1), t.isFunction(n) && n()
            }, step: i
        })
    }, Y.resize = function (t) {
        var e;
        V && (t = t || {}, t.width && (R.w = s(t.width, "x") - W - q), t.innerWidth && (R.w = s(t.innerWidth, "x")), E.css({width: R.w}), t.height && (R.h = s(t.height, "y") - H - F), t.innerHeight && (R.h = s(t.innerHeight, "y")), t.innerHeight || t.height || (e = E.scrollTop(), E.css({height: "auto"}), R.h = E.height()), E.css({height: R.h}), e && E.scrollTop(e), Y.position("none" === R.get("transition") ? 0 : R.get("speed")))
    }, Y.prep = function (n) {
        function r() {
            return R.w = R.w || E.width(), R.w = R.mw && R.mw < R.w ? R.mw : R.w, R.w
        }

        function s() {
            return R.h = R.h || E.height(), R.h = R.mh && R.mh < R.h ? R.mh : R.h, R.h
        }

        if (V) {
            var u, h = "none" === R.get("transition") ? 0 : R.get("speed");
            E.remove(), E = i(lt, "LoadedContent").append(n), E.hide().appendTo(A.show()).css({
                width: r(),
                overflow: R.get("scrolling") ? "auto" : "hidden"
            }).css({height: s()}).prependTo(x), A.hide(), t(B).css({"float": "none"}), d(R.get("className")), u = function () {
                function n() {
                    t.support.opacity === !1 && b[0].style.removeAttribute("filter")
                }

                var i, r, s = _.length;
                V && (r = function () {
                    clearTimeout(X), O.hide(), p(it), R.get("onComplete")
                }, N.html(R.get("title")).show(), E.show(), s > 1 ? ("string" == typeof R.get("current") && $.html(R.get("current").replace("{current}", z + 1).replace("{total}", s)).show(), L[R.get("loop") || s - 1 > z ? "show" : "hide"]().html(R.get("next")), P[R.get("loop") || z ? "show" : "hide"]().html(R.get("previous")), dt(), R.get("preloading") && t.each([a(-1), a(1)], function () {
                    var n, i = _[this], r = new o(i, t.data(i, J)), a = r.get("href");
                    a && l(r, a) && (a = c(r, a), n = e.createElement("img"), n.src = a)
                })) : M.hide(), R.get("iframe") ? (i = R.get("createIframe"), R.get("scrolling") || (i.scrolling = "no"), t(i).attr({
                    src: R.get("href"),
                    "class": Z + "Iframe"
                }).one("load", r).appendTo(E), st.one(at, function () {
                    i.src = "//about:blank"
                }), R.get("fastIframe") && t(i).trigger("load")) : r(), "fade" === R.get("transition") ? b.fadeTo(h, 1, n) : n())
            }, "fade" === R.get("transition") ? b.fadeTo(h, 0, function () {
                Y.position(0, u)
            }) : Y.position(h, u)
        }
    }, Y.next = function () {
        !U && _[1] && (R.get("loop") || _[z + 1]) && (z = a(1), f(_[z]))
    }, Y.prev = function () {
        !U && _[1] && (R.get("loop") || z) && (z = a(-1), f(_[z]))
    }, Y.close = function () {
        V && !Q && (Q = !0, V = !1, p(rt), R.get("onCleanup"), k.unbind("." + Z), y.fadeTo(R.get("fadeOut") || 0, 0), b.stop().fadeTo(R.get("fadeOut") || 0, 0, function () {
            b.hide(), y.hide(), p(at), E.remove(), setTimeout(function () {
                Q = !1, p(ot), R.get("onClosed")
            }, 1)
        }))
    }, Y.remove = function () {
        b && (b.stop(), t[J].close(), b.stop(!1, !0).remove(), y.remove(), Q = !1, b = null, t("." + tt).removeData(J).removeClass(tt), t(e).unbind("click." + Z).unbind("keydown." + Z))
    }, Y.element = function () {
        return t(R.el)
    }, Y.settings = G)
}(jQuery, document, window), function () {
    var t, e, n, i, r, o = function (t, e) {
        return function () {
            return t.apply(e, arguments)
        }
    }, a = [].indexOf || function (t) {
            for (var e = 0, n = this.length; n > e; e++)if (e in this && this[e] === t)return e;
            return -1
        };
    e = function () {
        function t() {
        }

        return t.prototype.extend = function (t, e) {
            var n, i;
            for (n in e)i = e[n], null == t[n] && (t[n] = i);
            return t
        }, t.prototype.isMobile = function (t) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)
        }, t.prototype.createEvent = function (t, e, n, i) {
            var r;
            return null == e && (e = !1), null == n && (n = !1), null == i && (i = null), null != document.createEvent ? (r = document.createEvent("CustomEvent"), r.initCustomEvent(t, e, n, i)) : null != document.createEventObject ? (r = document.createEventObject(), r.eventType = t) : r.eventName = t, r
        }, t.prototype.emitEvent = function (t, e) {
            return null != t.dispatchEvent ? t.dispatchEvent(e) : e in(null != t) ? t[e]() : "on" + e in(null != t) ? t["on" + e]() : void 0
        }, t.prototype.addEvent = function (t, e, n) {
            return null != t.addEventListener ? t.addEventListener(e, n, !1) : null != t.attachEvent ? t.attachEvent("on" + e, n) : t[e] = n
        }, t.prototype.removeEvent = function (t, e, n) {
            return null != t.removeEventListener ? t.removeEventListener(e, n, !1) : null != t.detachEvent ? t.detachEvent("on" + e, n) : delete t[e]
        }, t.prototype.innerHeight = function () {
            return "innerHeight"in window ? window.innerHeight : document.documentElement.clientHeight
        }, t
    }(), n = this.WeakMap || this.MozWeakMap || (n = function () {
        function t() {
            this.keys = [], this.values = []
        }

        return t.prototype.get = function (t) {
            var e, n, i, r, o;
            for (o = this.keys, e = i = 0, r = o.length; r > i; e = ++i)if (n = o[e], n === t)return this.values[e]
        }, t.prototype.set = function (t, e) {
            var n, i, r, o, a;
            for (a = this.keys, n = r = 0, o = a.length; o > r; n = ++r)if (i = a[n], i === t)return void(this.values[n] = e);
            return this.keys.push(t), this.values.push(e)
        }, t
    }()), t = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (t = function () {
        function t() {
            "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
        }

        return t.notSupported = !0, t.prototype.observe = function () {
        }, t
    }()), i = this.getComputedStyle || function (t) {
        return this.getPropertyValue = function (e) {
            var n;
            return "float" === e && (e = "styleFloat"), r.test(e) && e.replace(r, function (t, e) {
                return e.toUpperCase()
            }), (null != (n = t.currentStyle) ? n[e] : void 0) || null
        }, this
    }, r = /(\-([a-z]){1})/g, this.WOW = function () {
        function r(t) {
            null == t && (t = {}), this.scrollCallback = o(this.scrollCallback, this), this.scrollHandler = o(this.scrollHandler, this), this.resetAnimation = o(this.resetAnimation, this), this.start = o(this.start, this), this.scrolled = !0, this.config = this.util().extend(t, this.defaults), this.animationNameCache = new n, this.wowEvent = this.util().createEvent(this.config.boxClass)
        }

        return r.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0,
            callback: null
        }, r.prototype.init = function () {
            var t;
            return this.element = window.document.documentElement, "interactive" === (t = document.readyState) || "complete" === t ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
        }, r.prototype.start = function () {
            var e, n, i, r;
            if (this.stopped = !1, this.boxes = function () {
                    var t, n, i, r;
                    for (i = this.element.querySelectorAll("." + this.config.boxClass), r = [], t = 0, n = i.length; n > t; t++)e = i[t], r.push(e);
                    return r
                }.call(this), this.all = function () {
                    var t, n, i, r;
                    for (i = this.boxes, r = [], t = 0, n = i.length; n > t; t++)e = i[t], r.push(e);
                    return r
                }.call(this), this.boxes.length)if (this.disabled())this.resetStyle(); else for (r = this.boxes, n = 0, i = r.length; i > n; n++)e = r[n], this.applyStyle(e, !0);
            return this.disabled() || (this.util().addEvent(window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new t(function (t) {
                return function (e) {
                    var n, i, r, o, a;
                    for (a = [], n = 0, i = e.length; i > n; n++)o = e[n], a.push(function () {
                        var t, e, n, i;
                        for (n = o.addedNodes || [], i = [], t = 0, e = n.length; e > t; t++)r = n[t], i.push(this.doSync(r));
                        return i
                    }.call(t));
                    return a
                }
            }(this)).observe(document.body, {childList: !0, subtree: !0}) : void 0
        }, r.prototype.stop = function () {
            return this.stopped = !0, this.util().removeEvent(window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0
        }, r.prototype.sync = function () {
            return t.notSupported ? this.doSync(this.element) : void 0
        }, r.prototype.doSync = function (t) {
            var e, n, i, r, o;
            if (null == t && (t = this.element), 1 === t.nodeType) {
                for (t = t.parentNode || t, r = t.querySelectorAll("." + this.config.boxClass), o = [], n = 0, i = r.length; i > n; n++)e = r[n], a.call(this.all, e) < 0 ? (this.boxes.push(e), this.all.push(e), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(e, !0), o.push(this.scrolled = !0)) : o.push(void 0);
                return o
            }
        }, r.prototype.show = function (t) {
            return this.applyStyle(t), t.className = t.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(t), this.util().emitEvent(t, this.wowEvent), this.util().addEvent(t, "animationend", this.resetAnimation), this.util().addEvent(t, "oanimationend", this.resetAnimation), this.util().addEvent(t, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(t, "MSAnimationEnd", this.resetAnimation), t
        }, r.prototype.applyStyle = function (t, e) {
            var n, i, r;
            return i = t.getAttribute("data-wow-duration"), n = t.getAttribute("data-wow-delay"), r = t.getAttribute("data-wow-iteration"), this.animate(function (o) {
                return function () {
                    return o.customStyle(t, e, i, n, r)
                }
            }(this))
        }, r.prototype.animate = function () {
            return "requestAnimationFrame"in window ? function (t) {
                return window.requestAnimationFrame(t)
            } : function (t) {
                return t()
            }
        }(), r.prototype.resetStyle = function () {
            var t, e, n, i, r;
            for (i = this.boxes, r = [], e = 0, n = i.length; n > e; e++)t = i[e], r.push(t.style.visibility = "visible");
            return r
        }, r.prototype.resetAnimation = function (t) {
            var e;
            return t.type.toLowerCase().indexOf("animationend") >= 0 ? (e = t.target || t.srcElement, e.className = e.className.replace(this.config.animateClass, "").trim()) : void 0
        }, r.prototype.customStyle = function (t, e, n, i, r) {
            return e && this.cacheAnimationName(t), t.style.visibility = e ? "hidden" : "visible", n && this.vendorSet(t.style, {animationDuration: n}), i && this.vendorSet(t.style, {animationDelay: i}), r && this.vendorSet(t.style, {animationIterationCount: r}), this.vendorSet(t.style, {animationName: e ? "none" : this.cachedAnimationName(t)}), t
        }, r.prototype.vendors = ["moz", "webkit"], r.prototype.vendorSet = function (t, e) {
            var n, i, r, o;
            i = [];
            for (n in e)r = e[n], t["" + n] = r, i.push(function () {
                var e, i, a, s;
                for (a = this.vendors, s = [], e = 0, i = a.length; i > e; e++)o = a[e], s.push(t["" + o + n.charAt(0).toUpperCase() + n.substr(1)] = r);
                return s
            }.call(this));
            return i
        }, r.prototype.vendorCSS = function (t, e) {
            var n, r, o, a, s, l;
            for (s = i(t), a = s.getPropertyCSSValue(e), o = this.vendors, n = 0, r = o.length; r > n; n++)l = o[n], a = a || s.getPropertyCSSValue("-" + l + "-" + e);
            return a
        }, r.prototype.animationName = function (t) {
            var e;
            try {
                e = this.vendorCSS(t, "animation-name").cssText
            } catch (n) {
                e = i(t).getPropertyValue("animation-name")
            }
            return "none" === e ? "" : e
        }, r.prototype.cacheAnimationName = function (t) {
            return this.animationNameCache.set(t, this.animationName(t))
        }, r.prototype.cachedAnimationName = function (t) {
            return this.animationNameCache.get(t)
        }, r.prototype.scrollHandler = function () {
            return this.scrolled = !0
        }, r.prototype.scrollCallback = function () {
            var t;
            return !this.scrolled || (this.scrolled = !1, this.boxes = function () {
                var e, n, i, r;
                for (i = this.boxes, r = [], e = 0, n = i.length; n > e; e++)t = i[e], t && (this.isVisible(t) ? this.show(t) : r.push(t));
                return r
            }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
        }, r.prototype.offsetTop = function (t) {
            for (var e; void 0 === t.offsetTop;)t = t.parentNode;
            for (e = t.offsetTop; t = t.offsetParent;)e += t.offsetTop;
            return e
        }, r.prototype.isVisible = function (t) {
            var e, n, i, r, o;
            return n = t.getAttribute("data-wow-offset") || this.config.offset, o = window.pageYOffset, r = o + Math.min(this.element.clientHeight, this.util().innerHeight()) - n, i = this.offsetTop(t), e = i + t.clientHeight, r >= i && e >= o
        }, r.prototype.util = function () {
            return null != this._util ? this._util : this._util = new e
        }, r.prototype.disabled = function () {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent)
        }, r
    }()
}.call(this), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function (t, e, n, i, r) {
        return jQuery.easing[jQuery.easing.def](t, e, n, i, r)
    },
    easeInQuad: function (t, e, n, i, r) {
        return i * (e /= r) * e + n
    },
    easeOutQuad: function (t, e, n, i, r) {
        return -i * (e /= r) * (e - 2) + n
    },
    easeInOutQuad: function (t, e, n, i, r) {
        return (e /= r / 2) < 1 ? i / 2 * e * e + n : -i / 2 * (--e * (e - 2) - 1) + n
    },
    easeInCubic: function (t, e, n, i, r) {
        return i * (e /= r) * e * e + n
    },
    easeOutCubic: function (t, e, n, i, r) {
        return i * ((e = e / r - 1) * e * e + 1) + n
    },
    easeInOutCubic: function (t, e, n, i, r) {
        return (e /= r / 2) < 1 ? i / 2 * e * e * e + n : i / 2 * ((e -= 2) * e * e + 2) + n
    },
    easeInQuart: function (t, e, n, i, r) {
        return i * (e /= r) * e * e * e + n
    },
    easeOutQuart: function (t, e, n, i, r) {
        return -i * ((e = e / r - 1) * e * e * e - 1) + n
    },
    easeInOutQuart: function (t, e, n, i, r) {
        return (e /= r / 2) < 1 ? i / 2 * e * e * e * e + n : -i / 2 * ((e -= 2) * e * e * e - 2) + n
    },
    easeInQuint: function (t, e, n, i, r) {
        return i * (e /= r) * e * e * e * e + n
    },
    easeOutQuint: function (t, e, n, i, r) {
        return i * ((e = e / r - 1) * e * e * e * e + 1) + n
    },
    easeInOutQuint: function (t, e, n, i, r) {
        return (e /= r / 2) < 1 ? i / 2 * e * e * e * e * e + n : i / 2 * ((e -= 2) * e * e * e * e + 2) + n
    },
    easeInSine: function (t, e, n, i, r) {
        return -i * Math.cos(e / r * (Math.PI / 2)) + i + n
    },
    easeOutSine: function (t, e, n, i, r) {
        return i * Math.sin(e / r * (Math.PI / 2)) + n
    },
    easeInOutSine: function (t, e, n, i, r) {
        return -i / 2 * (Math.cos(Math.PI * e / r) - 1) + n
    },
    easeInExpo: function (t, e, n, i, r) {
        return 0 == e ? n : i * Math.pow(2, 10 * (e / r - 1)) + n
    },
    easeOutExpo: function (t, e, n, i, r) {
        return e == r ? n + i : i * (-Math.pow(2, -10 * e / r) + 1) + n
    },
    easeInOutExpo: function (t, e, n, i, r) {
        return 0 == e ? n : e == r ? n + i : (e /= r / 2) < 1 ? i / 2 * Math.pow(2, 10 * (e - 1)) + n : i / 2 * (-Math.pow(2, -10 * --e) + 2) + n
    },
    easeInCirc: function (t, e, n, i, r) {
        return -i * (Math.sqrt(1 - (e /= r) * e) - 1) + n
    },
    easeOutCirc: function (t, e, n, i, r) {
        return i * Math.sqrt(1 - (e = e / r - 1) * e) + n
    },
    easeInOutCirc: function (t, e, n, i, r) {
        return (e /= r / 2) < 1 ? -i / 2 * (Math.sqrt(1 - e * e) - 1) + n : i / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + n
    },
    easeInElastic: function (t, e, n, i, r) {
        var o = 1.70158, a = 0, s = i;
        if (0 == e)return n;
        if (1 == (e /= r))return n + i;
        if (a || (a = .3 * r), s < Math.abs(i)) {
            s = i;
            var o = a / 4
        } else var o = a / (2 * Math.PI) * Math.asin(i / s);
        return -(s * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e * r - o) * Math.PI / a)) + n
    },
    easeOutElastic: function (t, e, n, i, r) {
        var o = 1.70158, a = 0, s = i;
        if (0 == e)return n;
        if (1 == (e /= r))return n + i;
        if (a || (a = .3 * r), s < Math.abs(i)) {
            s = i;
            var o = a / 4
        } else var o = a / (2 * Math.PI) * Math.asin(i / s);
        return s * Math.pow(2, -10 * e) * Math.sin(2 * (e * r - o) * Math.PI / a) + i + n
    },
    easeInOutElastic: function (t, e, n, i, r) {
        var o = 1.70158, a = 0, s = i;
        if (0 == e)return n;
        if (2 == (e /= r / 2))return n + i;
        if (a || (a = .3 * r * 1.5), s < Math.abs(i)) {
            s = i;
            var o = a / 4
        } else var o = a / (2 * Math.PI) * Math.asin(i / s);
        return 1 > e ? -.5 * s * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e * r - o) * Math.PI / a) + n : s * Math.pow(2, -10 * (e -= 1)) * Math.sin(2 * (e * r - o) * Math.PI / a) * .5 + i + n
    },
    easeInBack: function (t, e, n, i, r, o) {
        return void 0 == o && (o = 1.70158), i * (e /= r) * e * ((o + 1) * e - o) + n
    },
    easeOutBack: function (t, e, n, i, r, o) {
        return void 0 == o && (o = 1.70158), i * ((e = e / r - 1) * e * ((o + 1) * e + o) + 1) + n
    },
    easeInOutBack: function (t, e, n, i, r, o) {
        return void 0 == o && (o = 1.70158), (e /= r / 2) < 1 ? i / 2 * e * e * (((o *= 1.525) + 1) * e - o) + n : i / 2 * ((e -= 2) * e * (((o *= 1.525) + 1) * e + o) + 2) + n
    },
    easeInBounce: function (t, e, n, i, r) {
        return i - jQuery.easing.easeOutBounce(t, r - e, 0, i, r) + n
    },
    easeOutBounce: function (t, e, n, i, r) {
        return (e /= r) < 1 / 2.75 ? 7.5625 * i * e * e + n : 2 / 2.75 > e ? i * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + n : 2.5 / 2.75 > e ? i * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + n : i * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + n
    },
    easeInOutBounce: function (t, e, n, i, r) {
        return r / 2 > e ? .5 * jQuery.easing.easeInBounce(t, 2 * e, 0, i, r) + n : .5 * jQuery.easing.easeOutBounce(t, 2 * e - r, 0, i, r) + .5 * i + n
    }
}), jQuery.extend(jQuery.easing, {
    easeInOutMaterial: function (t, e, n, i, r) {
        return (e /= r / 2) < 1 ? i / 2 * e * e + n : i / 4 * ((e -= 2) * e * e + 2) + n
    }
}), !function (t) {
    function e(t) {
        var e = t.length, i = n.type(t);
        return "function" === i || n.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
    }

    if (!t.jQuery) {
        var n = function (t, e) {
            return new n.fn.init(t, e)
        };
        n.isWindow = function (t) {
            return null != t && t == t.window
        }, n.type = function (t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? r[a.call(t)] || "object" : typeof t
        }, n.isArray = Array.isArray || function (t) {
            return "array" === n.type(t)
        }, n.isPlainObject = function (t) {
            var e;
            if (!t || "object" !== n.type(t) || t.nodeType || n.isWindow(t))return !1;
            try {
                if (t.constructor && !o.call(t, "constructor") && !o.call(t.constructor.prototype, "isPrototypeOf"))return !1
            } catch (i) {
                return !1
            }
            for (e in t);
            return void 0 === e || o.call(t, e)
        }, n.each = function (t, n, i) {
            var r, o = 0, a = t.length, s = e(t);
            if (i) {
                if (s)for (; a > o && (r = n.apply(t[o], i), r !== !1); o++); else for (o in t)if (r = n.apply(t[o], i), r === !1)break
            } else if (s)for (; a > o && (r = n.call(t[o], o, t[o]), r !== !1); o++); else for (o in t)if (r = n.call(t[o], o, t[o]), r === !1)break;

            return t
        }, n.data = function (t, e, r) {
            if (void 0 === r) {
                var o = t[n.expando], a = o && i[o];
                if (void 0 === e)return a;
                if (a && e in a)return a[e]
            } else if (void 0 !== e) {
                var o = t[n.expando] || (t[n.expando] = ++n.uuid);
                return i[o] = i[o] || {}, i[o][e] = r, r
            }
        }, n.removeData = function (t, e) {
            var r = t[n.expando], o = r && i[r];
            o && n.each(e, function (t, e) {
                delete o[e]
            })
        }, n.extend = function () {
            var t, e, i, r, o, a, s = arguments[0] || {}, l = 1, c = arguments.length, u = !1;
            for ("boolean" == typeof s && (u = s, s = arguments[l] || {}, l++), "object" != typeof s && "function" !== n.type(s) && (s = {}), l === c && (s = this, l--); c > l; l++)if (null != (o = arguments[l]))for (r in o)t = s[r], i = o[r], s !== i && (u && i && (n.isPlainObject(i) || (e = n.isArray(i))) ? (e ? (e = !1, a = t && n.isArray(t) ? t : []) : a = t && n.isPlainObject(t) ? t : {}, s[r] = n.extend(u, a, i)) : void 0 !== i && (s[r] = i));
            return s
        }, n.queue = function (t, i, r) {
            function o(t, n) {
                var i = n || [];
                return null != t && (e(Object(t)) ? !function (t, e) {
                    for (var n = +e.length, i = 0, r = t.length; n > i;)t[r++] = e[i++];
                    if (n !== n)for (; void 0 !== e[i];)t[r++] = e[i++];
                    return t.length = r, t
                }(i, "string" == typeof t ? [t] : t) : [].push.call(i, t)), i
            }

            if (t) {
                i = (i || "fx") + "queue";
                var a = n.data(t, i);
                return r ? (!a || n.isArray(r) ? a = n.data(t, i, o(r)) : a.push(r), a) : a || []
            }
        }, n.dequeue = function (t, e) {
            n.each(t.nodeType ? [t] : t, function (t, i) {
                e = e || "fx";
                var r = n.queue(i, e), o = r.shift();
                "inprogress" === o && (o = r.shift()), o && ("fx" === e && r.unshift("inprogress"), o.call(i, function () {
                    n.dequeue(i, e)
                }))
            })
        }, n.fn = n.prototype = {
            init: function (t) {
                if (t.nodeType)return this[0] = t, this;
                throw new Error("Not a DOM node.")
            }, offset: function () {
                var e = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {top: 0, left: 0};
                return {
                    top: e.top + (t.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                    left: e.left + (t.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                }
            }, position: function () {
                function t() {
                    for (var t = this.offsetParent || document; t && "html" === !t.nodeType.toLowerCase && "static" === t.style.position;)t = t.offsetParent;
                    return t || document
                }

                var e = this[0], t = t.apply(e), i = this.offset(), r = /^(?:body|html)$/i.test(t.nodeName) ? {
                    top: 0,
                    left: 0
                } : n(t).offset();
                return i.top -= parseFloat(e.style.marginTop) || 0, i.left -= parseFloat(e.style.marginLeft) || 0, t.style && (r.top += parseFloat(t.style.borderTopWidth) || 0, r.left += parseFloat(t.style.borderLeftWidth) || 0), {
                    top: i.top - r.top,
                    left: i.left - r.left
                }
            }
        };
        var i = {};
        n.expando = "velocity" + (new Date).getTime(), n.uuid = 0;
        for (var r = {}, o = r.hasOwnProperty, a = r.toString, s = "Boolean Number String Function Array Date RegExp Object Error".split(" "), l = 0; l < s.length; l++)r["[object " + s[l] + "]"] = s[l].toLowerCase();
        n.fn.init.prototype = n.fn, t.Velocity = {Utilities: n}
    }
}(window), function (t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : t()
}(function () {
    return function (t, e, n, i) {
        function r(t) {
            for (var e = -1, n = t ? t.length : 0, i = []; ++e < n;) {
                var r = t[e];
                r && i.push(r)
            }
            return i
        }

        function o(t) {
            return g.isWrapped(t) ? t = [].slice.call(t) : g.isNode(t) && (t = [t]), t
        }

        function a(t) {
            var e = h.data(t, "velocity");
            return null === e ? i : e
        }

        function s(t) {
            return function (e) {
                return Math.round(e * t) * (1 / t)
            }
        }

        function l(t, n, i, r) {
            function o(t, e) {
                return 1 - 3 * e + 3 * t
            }

            function a(t, e) {
                return 3 * e - 6 * t
            }

            function s(t) {
                return 3 * t
            }

            function l(t, e, n) {
                return ((o(e, n) * t + a(e, n)) * t + s(e)) * t
            }

            function c(t, e, n) {
                return 3 * o(e, n) * t * t + 2 * a(e, n) * t + s(e)
            }

            function u(e, n) {
                for (var r = 0; g > r; ++r) {
                    var o = c(n, t, i);
                    if (0 === o)return n;
                    var a = l(n, t, i) - e;
                    n -= a / o
                }
                return n
            }

            function d() {
                for (var e = 0; b > e; ++e)S[e] = l(e * w, t, i)
            }

            function h(e, n, r) {
                var o, a, s = 0;
                do a = n + (r - n) / 2, o = l(a, t, i) - e, o > 0 ? r = a : n = a; while (Math.abs(o) > m && ++s < y);
                return a
            }

            function p(e) {
                for (var n = 0, r = 1, o = b - 1; r != o && S[r] <= e; ++r)n += w;
                --r;
                var a = (e - S[r]) / (S[r + 1] - S[r]), s = n + a * w, l = c(s, t, i);
                return l >= v ? u(e, s) : 0 == l ? s : h(e, n, n + w)
            }

            function f() {
                T = !0, (t != n || i != r) && d()
            }

            var g = 4, v = .001, m = 1e-7, y = 10, b = 11, w = 1 / (b - 1), x = "Float32Array"in e;
            if (4 !== arguments.length)return !1;
            for (var C = 0; 4 > C; ++C)if ("number" != typeof arguments[C] || isNaN(arguments[C]) || !isFinite(arguments[C]))return !1;
            t = Math.min(t, 1), i = Math.min(i, 1), t = Math.max(t, 0), i = Math.max(i, 0);
            var S = x ? new Float32Array(b) : new Array(b), T = !1, D = function (e) {
                return T || f(), t === n && i === r ? e : 0 === e ? 0 : 1 === e ? 1 : l(p(e), n, r)
            };
            D.getControlPoints = function () {
                return [{x: t, y: n}, {x: i, y: r}]
            };
            var _ = "generateBezier(" + [t, n, i, r] + ")";
            return D.toString = function () {
                return _
            }, D
        }

        function c(t, e) {
            var n = t;
            return g.isString(t) ? b.Easings[t] || (n = !1) : n = g.isArray(t) && 1 === t.length ? s.apply(null, t) : g.isArray(t) && 2 === t.length ? w.apply(null, t.concat([e])) : g.isArray(t) && 4 === t.length ? l.apply(null, t) : !1, n === !1 && (n = b.Easings[b.defaults.easing] ? b.defaults.easing : y), n
        }

        function u(t) {
            if (t) {
                var e = (new Date).getTime(), n = b.State.calls.length;
                n > 1e4 && (b.State.calls = r(b.State.calls));
                for (var o = 0; n > o; o++)if (b.State.calls[o]) {
                    var s = b.State.calls[o], l = s[0], c = s[2], p = s[3], f = !!p, v = null;
                    p || (p = b.State.calls[o][3] = e - 16);
                    for (var m = Math.min((e - p) / c.duration, 1), y = 0, w = l.length; w > y; y++) {
                        var C = l[y], T = C.element;
                        if (a(T)) {
                            var D = !1;
                            if (c.display !== i && null !== c.display && "none" !== c.display) {
                                if ("flex" === c.display) {
                                    var _ = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                                    h.each(_, function (t, e) {
                                        x.setPropertyValue(T, "display", e)
                                    })
                                }
                                x.setPropertyValue(T, "display", c.display)
                            }
                            c.visibility !== i && "hidden" !== c.visibility && x.setPropertyValue(T, "visibility", c.visibility);
                            for (var k in C)if ("element" !== k) {
                                var E, A = C[k], O = g.isString(A.easing) ? b.Easings[A.easing] : A.easing;
                                if (1 === m)E = A.endValue; else {
                                    var N = A.endValue - A.startValue;
                                    if (E = A.startValue + N * O(m, c, N), !f && E === A.currentValue)continue
                                }
                                if (A.currentValue = E, "tween" === k)v = E; else {
                                    if (x.Hooks.registered[k]) {
                                        var $ = x.Hooks.getRoot(k), I = a(T).rootPropertyValueCache[$];
                                        I && (A.rootPropertyValue = I)
                                    }
                                    var L = x.setPropertyValue(T, k, A.currentValue + (0 === parseFloat(E) ? "" : A.unitType), A.rootPropertyValue, A.scrollData);
                                    x.Hooks.registered[k] && (a(T).rootPropertyValueCache[$] = x.Normalizations.registered[$] ? x.Normalizations.registered[$]("extract", null, L[1]) : L[1]), "transform" === L[0] && (D = !0)
                                }
                            }
                            c.mobileHA && a(T).transformCache.translate3d === i && (a(T).transformCache.translate3d = "(0px, 0px, 0px)", D = !0), D && x.flushTransformCache(T)
                        }
                    }
                    c.display !== i && "none" !== c.display && (b.State.calls[o][2].display = !1), c.visibility !== i && "hidden" !== c.visibility && (b.State.calls[o][2].visibility = !1), c.progress && c.progress.call(s[1], s[1], m, Math.max(0, p + c.duration - e), p, v), 1 === m && d(o)
                }
            }
            b.State.isTicking && S(u)
        }

        function d(t, e) {
            if (!b.State.calls[t])return !1;
            for (var n = b.State.calls[t][0], r = b.State.calls[t][1], o = b.State.calls[t][2], s = b.State.calls[t][4], l = !1, c = 0, u = n.length; u > c; c++) {
                var d = n[c].element;
                if (e || o.loop || ("none" === o.display && x.setPropertyValue(d, "display", o.display), "hidden" === o.visibility && x.setPropertyValue(d, "visibility", o.visibility)), o.loop !== !0 && (h.queue(d)[1] === i || !/\.velocityQueueEntryFlag/i.test(h.queue(d)[1])) && a(d)) {
                    a(d).isAnimating = !1, a(d).rootPropertyValueCache = {};
                    var p = !1;
                    h.each(x.Lists.transforms3D, function (t, e) {
                        var n = /^scale/.test(e) ? 1 : 0, r = a(d).transformCache[e];
                        a(d).transformCache[e] !== i && new RegExp("^\\(" + n + "[^.]").test(r) && (p = !0, delete a(d).transformCache[e])
                    }), o.mobileHA && (p = !0, delete a(d).transformCache.translate3d), p && x.flushTransformCache(d), x.Values.removeClass(d, "velocity-animating")
                }
                if (!e && o.complete && !o.loop && c === u - 1)try {
                    o.complete.call(r, r)
                } catch (f) {
                    setTimeout(function () {
                        throw f
                    }, 1)
                }
                s && o.loop !== !0 && s(r), a(d) && o.loop === !0 && !e && (h.each(a(d).tweensContainer, function (t, e) {
                    /^rotate/.test(t) && 360 === parseFloat(e.endValue) && (e.endValue = 0, e.startValue = 360), /^backgroundPosition/.test(t) && 100 === parseFloat(e.endValue) && "%" === e.unitType && (e.endValue = 0, e.startValue = 100)
                }), b(d, "reverse", {loop: !0, delay: o.delay})), o.queue !== !1 && h.dequeue(d, o.queue)
            }
            b.State.calls[t] = !1;
            for (var g = 0, v = b.State.calls.length; v > g; g++)if (b.State.calls[g] !== !1) {
                l = !0;
                break
            }
            l === !1 && (b.State.isTicking = !1, delete b.State.calls, b.State.calls = [])
        }

        var h, p = function () {
            if (n.documentMode)return n.documentMode;
            for (var t = 7; t > 4; t--) {
                var e = n.createElement("div");
                if (e.innerHTML = "<!--[if IE " + t + "]><span></span><![endif]-->", e.getElementsByTagName("span").length)return e = null, t
            }
            return i
        }(), f = function () {
            var t = 0;
            return e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || function (e) {
                    var n, i = (new Date).getTime();
                    return n = Math.max(0, 16 - (i - t)), t = i + n, setTimeout(function () {
                        e(i + n)
                    }, n)
                }
        }(), g = {
            isString: function (t) {
                return "string" == typeof t
            }, isArray: Array.isArray || function (t) {
                return "[object Array]" === Object.prototype.toString.call(t)
            }, isFunction: function (t) {
                return "[object Function]" === Object.prototype.toString.call(t)
            }, isNode: function (t) {
                return t && t.nodeType
            }, isNodeList: function (t) {
                return "object" == typeof t && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(t)) && t.length !== i && (0 === t.length || "object" == typeof t[0] && t[0].nodeType > 0)
            }, isWrapped: function (t) {
                return t && (t.jquery || e.Zepto && e.Zepto.zepto.isZ(t))
            }, isSVG: function (t) {
                return e.SVGElement && t instanceof e.SVGElement
            }, isEmptyObject: function (t) {
                for (var e in t)return !1;
                return !0
            }
        }, v = !1;
        if (t.fn && t.fn.jquery ? (h = t, v = !0) : h = e.Velocity.Utilities, 8 >= p && !v)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
        if (7 >= p)return void(jQuery.fn.velocity = jQuery.fn.animate);
        var m = 400, y = "swing", b = {
            State: {
                isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                isAndroid: /Android/i.test(navigator.userAgent),
                isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                isChrome: e.chrome,
                isFirefox: /Firefox/i.test(navigator.userAgent),
                prefixElement: n.createElement("div"),
                prefixMatches: {},
                scrollAnchor: null,
                scrollPropertyLeft: null,
                scrollPropertyTop: null,
                isTicking: !1,
                calls: []
            },
            CSS: {},
            Utilities: h,
            Redirects: {},
            Easings: {},
            Promise: e.Promise,
            defaults: {
                queue: "",
                duration: m,
                easing: y,
                begin: i,
                complete: i,
                progress: i,
                display: i,
                visibility: i,
                loop: !1,
                delay: !1,
                mobileHA: !0,
                _cacheValues: !0
            },
            init: function (t) {
                h.data(t, "velocity", {
                    isSVG: g.isSVG(t),
                    isAnimating: !1,
                    computedStyle: null,
                    tweensContainer: null,
                    rootPropertyValueCache: {},
                    transformCache: {}
                })
            },
            hook: null,
            mock: !1,
            version: {major: 1, minor: 2, patch: 2},
            debug: !1
        };
        e.pageYOffset !== i ? (b.State.scrollAnchor = e, b.State.scrollPropertyLeft = "pageXOffset", b.State.scrollPropertyTop = "pageYOffset") : (b.State.scrollAnchor = n.documentElement || n.body.parentNode || n.body, b.State.scrollPropertyLeft = "scrollLeft", b.State.scrollPropertyTop = "scrollTop");
        var w = function () {
            function t(t) {
                return -t.tension * t.x - t.friction * t.v
            }

            function e(e, n, i) {
                var r = {x: e.x + i.dx * n, v: e.v + i.dv * n, tension: e.tension, friction: e.friction};
                return {dx: r.v, dv: t(r)}
            }

            function n(n, i) {
                var r = {
                    dx: n.v,
                    dv: t(n)
                }, o = e(n, .5 * i, r), a = e(n, .5 * i, o), s = e(n, i, a), l = 1 / 6 * (r.dx + 2 * (o.dx + a.dx) + s.dx), c = 1 / 6 * (r.dv + 2 * (o.dv + a.dv) + s.dv);
                return n.x = n.x + l * i, n.v = n.v + c * i, n
            }

            return function i(t, e, r) {
                var o, a, s, l = {x: -1, v: 0, tension: null, friction: null}, c = [0], u = 0, d = 1e-4, h = .016;
                for (t = parseFloat(t) || 500, e = parseFloat(e) || 20, r = r || null, l.tension = t, l.friction = e, o = null !== r, o ? (u = i(t, e), a = u / r * h) : a = h; s = n(s || l, a), c.push(1 + s.x), u += 16, Math.abs(s.x) > d && Math.abs(s.v) > d;);
                return o ? function (t) {
                    return c[t * (c.length - 1) | 0]
                } : u
            }
        }();
        b.Easings = {
            linear: function (t) {
                return t
            }, swing: function (t) {
                return .5 - Math.cos(t * Math.PI) / 2
            }, spring: function (t) {
                return 1 - Math.cos(4.5 * t * Math.PI) * Math.exp(6 * -t)
            }
        }, h.each([["ease", [.25, .1, .25, 1]], ["ease-in", [.42, 0, 1, 1]], ["ease-out", [0, 0, .58, 1]], ["ease-in-out", [.42, 0, .58, 1]], ["easeInSine", [.47, 0, .745, .715]], ["easeOutSine", [.39, .575, .565, 1]], ["easeInOutSine", [.445, .05, .55, .95]], ["easeInQuad", [.55, .085, .68, .53]], ["easeOutQuad", [.25, .46, .45, .94]], ["easeInOutQuad", [.455, .03, .515, .955]], ["easeInCubic", [.55, .055, .675, .19]], ["easeOutCubic", [.215, .61, .355, 1]], ["easeInOutCubic", [.645, .045, .355, 1]], ["easeInQuart", [.895, .03, .685, .22]], ["easeOutQuart", [.165, .84, .44, 1]], ["easeInOutQuart", [.77, 0, .175, 1]], ["easeInQuint", [.755, .05, .855, .06]], ["easeOutQuint", [.23, 1, .32, 1]], ["easeInOutQuint", [.86, 0, .07, 1]], ["easeInExpo", [.95, .05, .795, .035]], ["easeOutExpo", [.19, 1, .22, 1]], ["easeInOutExpo", [1, 0, 0, 1]], ["easeInCirc", [.6, .04, .98, .335]], ["easeOutCirc", [.075, .82, .165, 1]], ["easeInOutCirc", [.785, .135, .15, .86]]], function (t, e) {
            b.Easings[e[0]] = l.apply(null, e[1])
        });
        var x = b.CSS = {
            RegEx: {
                isHex: /^#([A-f\d]{3}){1,2}$/i,
                valueUnwrap: /^[A-z]+\((.*)\)$/i,
                wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
            },
            Lists: {
                colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
            },
            Hooks: {
                templates: {
                    textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                    boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                    clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                    backgroundPosition: ["X Y", "0% 0%"],
                    transformOrigin: ["X Y Z", "50% 50% 0px"],
                    perspectiveOrigin: ["X Y", "50% 50%"]
                }, registered: {}, register: function () {
                    for (var t = 0; t < x.Lists.colors.length; t++) {
                        var e = "color" === x.Lists.colors[t] ? "0 0 0 1" : "255 255 255 1";
                        x.Hooks.templates[x.Lists.colors[t]] = ["Red Green Blue Alpha", e]
                    }
                    var n, i, r;
                    if (p)for (n in x.Hooks.templates) {
                        i = x.Hooks.templates[n], r = i[0].split(" ");
                        var o = i[1].match(x.RegEx.valueSplit);
                        "Color" === r[0] && (r.push(r.shift()), o.push(o.shift()), x.Hooks.templates[n] = [r.join(" "), o.join(" ")])
                    }
                    for (n in x.Hooks.templates) {
                        i = x.Hooks.templates[n], r = i[0].split(" ");
                        for (var t in r) {
                            var a = n + r[t], s = t;
                            x.Hooks.registered[a] = [n, s]
                        }
                    }
                }, getRoot: function (t) {
                    var e = x.Hooks.registered[t];
                    return e ? e[0] : t
                }, cleanRootPropertyValue: function (t, e) {
                    return x.RegEx.valueUnwrap.test(e) && (e = e.match(x.RegEx.valueUnwrap)[1]), x.Values.isCSSNullValue(e) && (e = x.Hooks.templates[t][1]), e
                }, extractValue: function (t, e) {
                    var n = x.Hooks.registered[t];
                    if (n) {
                        var i = n[0], r = n[1];
                        return e = x.Hooks.cleanRootPropertyValue(i, e), e.toString().match(x.RegEx.valueSplit)[r]
                    }
                    return e
                }, injectValue: function (t, e, n) {
                    var i = x.Hooks.registered[t];
                    if (i) {
                        var r, o, a = i[0], s = i[1];
                        return n = x.Hooks.cleanRootPropertyValue(a, n), r = n.toString().match(x.RegEx.valueSplit), r[s] = e, o = r.join(" ")
                    }
                    return n
                }
            },
            Normalizations: {
                registered: {
                    clip: function (t, e, n) {
                        switch (t) {
                            case"name":
                                return "clip";
                            case"extract":
                                var i;
                                return x.RegEx.wrappedValueAlreadyExtracted.test(n) ? i = n : (i = n.toString().match(x.RegEx.valueUnwrap), i = i ? i[1].replace(/,(\s+)?/g, " ") : n), i;
                            case"inject":
                                return "rect(" + n + ")"
                        }
                    }, blur: function (t, e, n) {
                        switch (t) {
                            case"name":
                                return b.State.isFirefox ? "filter" : "-webkit-filter";
                            case"extract":
                                var i = parseFloat(n);
                                if (!i && 0 !== i) {
                                    var r = n.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                    i = r ? r[1] : 0
                                }
                                return i;
                            case"inject":
                                return parseFloat(n) ? "blur(" + n + ")" : "none"
                        }
                    }, opacity: function (t, e, n) {
                        if (8 >= p)switch (t) {
                            case"name":
                                return "filter";
                            case"extract":
                                var i = n.toString().match(/alpha\(opacity=(.*)\)/i);
                                return n = i ? i[1] / 100 : 1;
                            case"inject":
                                return e.style.zoom = 1, parseFloat(n) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(n), 10) + ")"
                        } else switch (t) {
                            case"name":
                                return "opacity";
                            case"extract":
                                return n;
                            case"inject":
                                return n
                        }
                    }
                }, register: function () {
                    9 >= p || b.State.isGingerbread || (x.Lists.transformsBase = x.Lists.transformsBase.concat(x.Lists.transforms3D));
                    for (var t = 0; t < x.Lists.transformsBase.length; t++)!function () {
                        var e = x.Lists.transformsBase[t];
                        x.Normalizations.registered[e] = function (t, n, r) {
                            switch (t) {
                                case"name":
                                    return "transform";
                                case"extract":
                                    return a(n) === i || a(n).transformCache[e] === i ? /^scale/i.test(e) ? 1 : 0 : a(n).transformCache[e].replace(/[()]/g, "");
                                case"inject":
                                    var o = !1;
                                    switch (e.substr(0, e.length - 1)) {
                                        case"translate":
                                            o = !/(%|px|em|rem|vw|vh|\d)$/i.test(r);
                                            break;
                                        case"scal":
                                        case"scale":
                                            b.State.isAndroid && a(n).transformCache[e] === i && 1 > r && (r = 1), o = !/(\d)$/i.test(r);
                                            break;
                                        case"skew":
                                            o = !/(deg|\d)$/i.test(r);
                                            break;
                                        case"rotate":
                                            o = !/(deg|\d)$/i.test(r)
                                    }
                                    return o || (a(n).transformCache[e] = "(" + r + ")"), a(n).transformCache[e]
                            }
                        }
                    }();
                    for (var t = 0; t < x.Lists.colors.length; t++)!function () {
                        var e = x.Lists.colors[t];
                        x.Normalizations.registered[e] = function (t, n, r) {
                            switch (t) {
                                case"name":
                                    return e;
                                case"extract":
                                    var o;
                                    if (x.RegEx.wrappedValueAlreadyExtracted.test(r))o = r; else {
                                        var a, s = {
                                            black: "rgb(0, 0, 0)",
                                            blue: "rgb(0, 0, 255)",
                                            gray: "rgb(128, 128, 128)",
                                            green: "rgb(0, 128, 0)",
                                            red: "rgb(255, 0, 0)",
                                            white: "rgb(255, 255, 255)"
                                        };
                                        /^[A-z]+$/i.test(r) ? a = s[r] !== i ? s[r] : s.black : x.RegEx.isHex.test(r) ? a = "rgb(" + x.Values.hexToRgb(r).join(" ") + ")" : /^rgba?\(/i.test(r) || (a = s.black), o = (a || r).toString().match(x.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                    }
                                    return 8 >= p || 3 !== o.split(" ").length || (o += " 1"), o;
                                case"inject":
                                    return 8 >= p ? 4 === r.split(" ").length && (r = r.split(/\s+/).slice(0, 3).join(" ")) : 3 === r.split(" ").length && (r += " 1"), (8 >= p ? "rgb" : "rgba") + "(" + r.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                            }
                        }
                    }()
                }
            },
            Names: {
                camelCase: function (t) {
                    return t.replace(/-(\w)/g, function (t, e) {
                        return e.toUpperCase()
                    })
                }, SVGAttribute: function (t) {
                    var e = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                    return (p || b.State.isAndroid && !b.State.isChrome) && (e += "|transform"), new RegExp("^(" + e + ")$", "i").test(t)
                }, prefixCheck: function (t) {
                    if (b.State.prefixMatches[t])return [b.State.prefixMatches[t], !0];
                    for (var e = ["", "Webkit", "Moz", "ms", "O"], n = 0, i = e.length; i > n; n++) {
                        var r;
                        if (r = 0 === n ? t : e[n] + t.replace(/^\w/, function (t) {
                                return t.toUpperCase()
                            }), g.isString(b.State.prefixElement.style[r]))return b.State.prefixMatches[t] = r, [r, !0]
                    }
                    return [t, !1]
                }
            },
            Values: {
                hexToRgb: function (t) {
                    var e, n = /^#?([a-f\d])([a-f\d])([a-f\d])$/i, i = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
                    return t = t.replace(n, function (t, e, n, i) {
                        return e + e + n + n + i + i
                    }), e = i.exec(t), e ? [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)] : [0, 0, 0]
                }, isCSSNullValue: function (t) {
                    return 0 == t || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(t)
                }, getUnitType: function (t) {
                    return /^(rotate|skew)/i.test(t) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(t) ? "" : "px"
                }, getDisplayType: function (t) {
                    var e = t && t.tagName.toString().toLowerCase();
                    return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(e) ? "inline" : /^(li)$/i.test(e) ? "list-item" : /^(tr)$/i.test(e) ? "table-row" : /^(table)$/i.test(e) ? "table" : /^(tbody)$/i.test(e) ? "table-row-group" : "block"
                }, addClass: function (t, e) {
                    t.classList ? t.classList.add(e) : t.className += (t.className.length ? " " : "") + e
                }, removeClass: function (t, e) {
                    t.classList ? t.classList.remove(e) : t.className = t.className.toString().replace(new RegExp("(^|\\s)" + e.split(" ").join("|") + "(\\s|$)", "gi"), " ")
                }
            },
            getPropertyValue: function (t, n, r, o) {
                function s(t, n) {
                    function r() {
                        c && x.setPropertyValue(t, "display", "none")
                    }

                    var l = 0;
                    if (8 >= p)l = h.css(t, n); else {
                        var c = !1;
                        if (/^(width|height)$/.test(n) && 0 === x.getPropertyValue(t, "display") && (c = !0, x.setPropertyValue(t, "display", x.Values.getDisplayType(t))), !o) {
                            if ("height" === n && "border-box" !== x.getPropertyValue(t, "boxSizing").toString().toLowerCase()) {
                                var u = t.offsetHeight - (parseFloat(x.getPropertyValue(t, "borderTopWidth")) || 0) - (parseFloat(x.getPropertyValue(t, "borderBottomWidth")) || 0) - (parseFloat(x.getPropertyValue(t, "paddingTop")) || 0) - (parseFloat(x.getPropertyValue(t, "paddingBottom")) || 0);
                                return r(), u
                            }
                            if ("width" === n && "border-box" !== x.getPropertyValue(t, "boxSizing").toString().toLowerCase()) {
                                var d = t.offsetWidth - (parseFloat(x.getPropertyValue(t, "borderLeftWidth")) || 0) - (parseFloat(x.getPropertyValue(t, "borderRightWidth")) || 0) - (parseFloat(x.getPropertyValue(t, "paddingLeft")) || 0) - (parseFloat(x.getPropertyValue(t, "paddingRight")) || 0);
                                return r(), d
                            }
                        }
                        var f;
                        f = a(t) === i ? e.getComputedStyle(t, null) : a(t).computedStyle ? a(t).computedStyle : a(t).computedStyle = e.getComputedStyle(t, null), "borderColor" === n && (n = "borderTopColor"), l = 9 === p && "filter" === n ? f.getPropertyValue(n) : f[n], ("" === l || null === l) && (l = t.style[n]), r()
                    }
                    if ("auto" === l && /^(top|right|bottom|left)$/i.test(n)) {
                        var g = s(t, "position");
                        ("fixed" === g || "absolute" === g && /top|left/i.test(n)) && (l = h(t).position()[n] + "px")
                    }
                    return l
                }

                var l;
                if (x.Hooks.registered[n]) {
                    var c = n, u = x.Hooks.getRoot(c);
                    r === i && (r = x.getPropertyValue(t, x.Names.prefixCheck(u)[0])), x.Normalizations.registered[u] && (r = x.Normalizations.registered[u]("extract", t, r)), l = x.Hooks.extractValue(c, r)
                } else if (x.Normalizations.registered[n]) {
                    var d, f;
                    d = x.Normalizations.registered[n]("name", t), "transform" !== d && (f = s(t, x.Names.prefixCheck(d)[0]), x.Values.isCSSNullValue(f) && x.Hooks.templates[n] && (f = x.Hooks.templates[n][1])), l = x.Normalizations.registered[n]("extract", t, f)
                }
                if (!/^[\d-]/.test(l))if (a(t) && a(t).isSVG && x.Names.SVGAttribute(n))if (/^(height|width)$/i.test(n))try {
                    l = t.getBBox()[n]
                } catch (g) {
                    l = 0
                } else l = t.getAttribute(n); else l = s(t, x.Names.prefixCheck(n)[0]);
                return x.Values.isCSSNullValue(l) && (l = 0), b.debug >= 2 && console.log("Get " + n + ": " + l), l
            },
            setPropertyValue: function (t, n, i, r, o) {
                var s = n;
                if ("scroll" === n)o.container ? o.container["scroll" + o.direction] = i : "Left" === o.direction ? e.scrollTo(i, o.alternateValue) : e.scrollTo(o.alternateValue, i); else if (x.Normalizations.registered[n] && "transform" === x.Normalizations.registered[n]("name", t))x.Normalizations.registered[n]("inject", t, i), s = "transform", i = a(t).transformCache[n]; else {
                    if (x.Hooks.registered[n]) {
                        var l = n, c = x.Hooks.getRoot(n);
                        r = r || x.getPropertyValue(t, c), i = x.Hooks.injectValue(l, i, r), n = c
                    }
                    if (x.Normalizations.registered[n] && (i = x.Normalizations.registered[n]("inject", t, i), n = x.Normalizations.registered[n]("name", t)), s = x.Names.prefixCheck(n)[0], 8 >= p)try {
                        t.style[s] = i
                    } catch (u) {
                        b.debug && console.log("Browser does not support [" + i + "] for [" + s + "]")
                    } else a(t) && a(t).isSVG && x.Names.SVGAttribute(n) ? t.setAttribute(n, i) : t.style[s] = i;
                    b.debug >= 2 && console.log("Set " + n + " (" + s + "): " + i)
                }
                return [s, i]
            },
            flushTransformCache: function (t) {
                function e(e) {
                    return parseFloat(x.getPropertyValue(t, e))
                }

                var n = "";
                if ((p || b.State.isAndroid && !b.State.isChrome) && a(t).isSVG) {
                    var i = {
                        translate: [e("translateX"), e("translateY")],
                        skewX: [e("skewX")],
                        skewY: [e("skewY")],
                        scale: 1 !== e("scale") ? [e("scale"), e("scale")] : [e("scaleX"), e("scaleY")],
                        rotate: [e("rotateZ"), 0, 0]
                    };
                    h.each(a(t).transformCache, function (t) {
                        /^translate/i.test(t) ? t = "translate" : /^scale/i.test(t) ? t = "scale" : /^rotate/i.test(t) && (t = "rotate"), i[t] && (n += t + "(" + i[t].join(" ") + ") ", delete i[t])
                    })
                } else {
                    var r, o;
                    h.each(a(t).transformCache, function (e) {
                        return r = a(t).transformCache[e], "transformPerspective" === e ? (o = r, !0) : (9 === p && "rotateZ" === e && (e = "rotate"), void(n += e + r + " "))
                    }), o && (n = "perspective" + o + " " + n)
                }
                x.setPropertyValue(t, "transform", n)
            }
        };
        x.Hooks.register(), x.Normalizations.register(), b.hook = function (t, e, n) {
            var r = i;
            return t = o(t), h.each(t, function (t, o) {
                if (a(o) === i && b.init(o), n === i)r === i && (r = b.CSS.getPropertyValue(o, e)); else {
                    var s = b.CSS.setPropertyValue(o, e, n);
                    "transform" === s[0] && b.CSS.flushTransformCache(o), r = s
                }
            }), r
        };
        var C = function () {
            function t() {
                return s ? k.promise || null : l
            }

            function r() {
                function t() {
                    function t(t, e) {
                        var n = i, r = i, a = i;
                        return g.isArray(t) ? (n = t[0], !g.isArray(t[1]) && /^[\d-]/.test(t[1]) || g.isFunction(t[1]) || x.RegEx.isHex.test(t[1]) ? a = t[1] : (g.isString(t[1]) && !x.RegEx.isHex.test(t[1]) || g.isArray(t[1])) && (r = e ? t[1] : c(t[1], s.duration), t[2] !== i && (a = t[2]))) : n = t, e || (r = r || s.easing), g.isFunction(n) && (n = n.call(o, T, S)), g.isFunction(a) && (a = a.call(o, T, S)), [n || 0, r, a]
                    }

                    function d(t, e) {
                        var n, i;
                        return i = (e || "0").toString().toLowerCase().replace(/[%A-z]+$/, function (t) {
                            return n = t, ""
                        }), n || (n = x.Values.getUnitType(t)), [i, n]
                    }

                    function p() {
                        var t = {
                            myParent: o.parentNode || n.body,
                            position: x.getPropertyValue(o, "position"),
                            fontSize: x.getPropertyValue(o, "fontSize")
                        }, i = t.position === L.lastPosition && t.myParent === L.lastParent, r = t.fontSize === L.lastFontSize;
                        L.lastParent = t.myParent, L.lastPosition = t.position, L.lastFontSize = t.fontSize;
                        var s = 100, l = {};
                        if (r && i)l.emToPx = L.lastEmToPx, l.percentToPxWidth = L.lastPercentToPxWidth, l.percentToPxHeight = L.lastPercentToPxHeight; else {
                            var c = a(o).isSVG ? n.createElementNS("http://www.w3.org/2000/svg", "rect") : n.createElement("div");
                            b.init(c), t.myParent.appendChild(c), h.each(["overflow", "overflowX", "overflowY"], function (t, e) {
                                b.CSS.setPropertyValue(c, e, "hidden")
                            }), b.CSS.setPropertyValue(c, "position", t.position), b.CSS.setPropertyValue(c, "fontSize", t.fontSize), b.CSS.setPropertyValue(c, "boxSizing", "content-box"), h.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function (t, e) {
                                b.CSS.setPropertyValue(c, e, s + "%")
                            }), b.CSS.setPropertyValue(c, "paddingLeft", s + "em"), l.percentToPxWidth = L.lastPercentToPxWidth = (parseFloat(x.getPropertyValue(c, "width", null, !0)) || 1) / s, l.percentToPxHeight = L.lastPercentToPxHeight = (parseFloat(x.getPropertyValue(c, "height", null, !0)) || 1) / s, l.emToPx = L.lastEmToPx = (parseFloat(x.getPropertyValue(c, "paddingLeft")) || 1) / s, t.myParent.removeChild(c)
                        }
                        return null === L.remToPx && (L.remToPx = parseFloat(x.getPropertyValue(n.body, "fontSize")) || 16), null === L.vwToPx && (L.vwToPx = parseFloat(e.innerWidth) / 100, L.vhToPx = parseFloat(e.innerHeight) / 100), l.remToPx = L.remToPx, l.vwToPx = L.vwToPx, l.vhToPx = L.vhToPx, b.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(l), o), l
                    }

                    if (s.begin && 0 === T)try {
                        s.begin.call(f, f)
                    } catch (m) {
                        setTimeout(function () {
                            throw m
                        }, 1)
                    }
                    if ("scroll" === E) {
                        var w, C, D, _ = /^x$/i.test(s.axis) ? "Left" : "Top", A = parseFloat(s.offset) || 0;
                        s.container ? g.isWrapped(s.container) || g.isNode(s.container) ? (s.container = s.container[0] || s.container, w = s.container["scroll" + _], D = w + h(o).position()[_.toLowerCase()] + A) : s.container = null : (w = b.State.scrollAnchor[b.State["scrollProperty" + _]], C = b.State.scrollAnchor[b.State["scrollProperty" + ("Left" === _ ? "Top" : "Left")]], D = h(o).offset()[_.toLowerCase()] + A), l = {
                            scroll: {
                                rootPropertyValue: !1,
                                startValue: w,
                                currentValue: w,
                                endValue: D,
                                unitType: "",
                                easing: s.easing,
                                scrollData: {container: s.container, direction: _, alternateValue: C}
                            }, element: o
                        }, b.debug && console.log("tweensContainer (scroll): ", l.scroll, o)
                    } else if ("reverse" === E) {
                        if (!a(o).tweensContainer)return void h.dequeue(o, s.queue);
                        "none" === a(o).opts.display && (a(o).opts.display = "auto"), "hidden" === a(o).opts.visibility && (a(o).opts.visibility = "visible"), a(o).opts.loop = !1, a(o).opts.begin = null, a(o).opts.complete = null, y.easing || delete s.easing, y.duration || delete s.duration, s = h.extend({}, a(o).opts, s);
                        var O = h.extend(!0, {}, a(o).tweensContainer);
                        for (var N in O)if ("element" !== N) {
                            var $ = O[N].startValue;
                            O[N].startValue = O[N].currentValue = O[N].endValue, O[N].endValue = $, g.isEmptyObject(y) || (O[N].easing = s.easing), b.debug && console.log("reverse tweensContainer (" + N + "): " + JSON.stringify(O[N]), o)
                        }
                        l = O
                    } else if ("start" === E) {
                        var O;
                        a(o).tweensContainer && a(o).isAnimating === !0 && (O = a(o).tweensContainer), h.each(v, function (e, n) {
                            if (RegExp("^" + x.Lists.colors.join("$|^") + "$").test(e)) {
                                var r = t(n, !0), o = r[0], a = r[1], s = r[2];
                                if (x.RegEx.isHex.test(o)) {
                                    for (var l = ["Red", "Green", "Blue"], c = x.Values.hexToRgb(o), u = s ? x.Values.hexToRgb(s) : i, d = 0; d < l.length; d++) {
                                        var h = [c[d]];
                                        a && h.push(a), u !== i && h.push(u[d]), v[e + l[d]] = h
                                    }
                                    delete v[e]
                                }
                            }
                        });
                        for (var I in v) {
                            var j = t(v[I]), M = j[0], R = j[1], F = j[2];
                            I = x.Names.camelCase(I);
                            var q = x.Hooks.getRoot(I), H = !1;
                            if (a(o).isSVG || "tween" === q || x.Names.prefixCheck(q)[1] !== !1 || x.Normalizations.registered[q] !== i) {
                                (s.display !== i && null !== s.display && "none" !== s.display || s.visibility !== i && "hidden" !== s.visibility) && /opacity|filter/.test(I) && !F && 0 !== M && (F = 0), s._cacheValues && O && O[I] ? (F === i && (F = O[I].endValue + O[I].unitType), H = a(o).rootPropertyValueCache[q]) : x.Hooks.registered[I] ? F === i ? (H = x.getPropertyValue(o, q), F = x.getPropertyValue(o, I, H)) : H = x.Hooks.templates[q][1] : F === i && (F = x.getPropertyValue(o, I));
                                var W, z, B, V = !1;
                                if (W = d(I, F), F = W[0], B = W[1], W = d(I, M), M = W[0].replace(/^([+-\/*])=/, function (t, e) {
                                        return V = e, ""
                                    }), z = W[1], F = parseFloat(F) || 0, M = parseFloat(M) || 0, "%" === z && (/^(fontSize|lineHeight)$/.test(I) ? (M /= 100, z = "em") : /^scale/.test(I) ? (M /= 100, z = "") : /(Red|Green|Blue)$/i.test(I) && (M = M / 100 * 255, z = "")), /[\/*]/.test(V))z = B; else if (B !== z && 0 !== F)if (0 === M)z = B; else {
                                    r = r || p();
                                    var U = /margin|padding|left|right|width|text|word|letter/i.test(I) || /X$/.test(I) || "x" === I ? "x" : "y";
                                    switch (B) {
                                        case"%":
                                            F *= "x" === U ? r.percentToPxWidth : r.percentToPxHeight;
                                            break;
                                        case"px":
                                            break;
                                        default:
                                            F *= r[B + "ToPx"]
                                    }
                                    switch (z) {
                                        case"%":
                                            F *= 1 / ("x" === U ? r.percentToPxWidth : r.percentToPxHeight);
                                            break;
                                        case"px":
                                            break;
                                        default:
                                            F *= 1 / r[z + "ToPx"]
                                    }
                                }
                                switch (V) {
                                    case"+":
                                        M = F + M;
                                        break;
                                    case"-":
                                        M = F - M;
                                        break;
                                    case"*":
                                        M = F * M;
                                        break;
                                    case"/":
                                        M = F / M
                                }
                                l[I] = {
                                    rootPropertyValue: H,
                                    startValue: F,
                                    currentValue: F,
                                    endValue: M,
                                    unitType: z,
                                    easing: R
                                }, b.debug && console.log("tweensContainer (" + I + "): " + JSON.stringify(l[I]), o)
                            } else b.debug && console.log("Skipping [" + q + "] due to a lack of browser support.")
                        }
                        l.element = o
                    }
                    l.element && (x.Values.addClass(o, "velocity-animating"), P.push(l), "" === s.queue && (a(o).tweensContainer = l, a(o).opts = s), a(o).isAnimating = !0, T === S - 1 ? (b.State.calls.push([P, f, s, null, k.resolver]), b.State.isTicking === !1 && (b.State.isTicking = !0, u())) : T++)
                }

                var r, o = this, s = h.extend({}, b.defaults, y), l = {};
                switch (a(o) === i && b.init(o), parseFloat(s.delay) && s.queue !== !1 && h.queue(o, s.queue, function (t) {
                    b.velocityQueueEntryFlag = !0, a(o).delayTimer = {
                        setTimeout: setTimeout(t, parseFloat(s.delay)),
                        next: t
                    }
                }), s.duration.toString().toLowerCase()) {
                    case"fast":
                        s.duration = 200;
                        break;
                    case"normal":
                        s.duration = m;
                        break;
                    case"slow":
                        s.duration = 600;
                        break;
                    default:
                        s.duration = parseFloat(s.duration) || 1
                }
                b.mock !== !1 && (b.mock === !0 ? s.duration = s.delay = 1 : (s.duration *= parseFloat(b.mock) || 1, s.delay *= parseFloat(b.mock) || 1)), s.easing = c(s.easing, s.duration), s.begin && !g.isFunction(s.begin) && (s.begin = null), s.progress && !g.isFunction(s.progress) && (s.progress = null), s.complete && !g.isFunction(s.complete) && (s.complete = null), s.display !== i && null !== s.display && (s.display = s.display.toString().toLowerCase(), "auto" === s.display && (s.display = b.CSS.Values.getDisplayType(o))), s.visibility !== i && null !== s.visibility && (s.visibility = s.visibility.toString().toLowerCase()), s.mobileHA = s.mobileHA && b.State.isMobile && !b.State.isGingerbread, s.queue === !1 ? s.delay ? setTimeout(t, s.delay) : t() : h.queue(o, s.queue, function (e, n) {
                    return n === !0 ? (k.promise && k.resolver(f), !0) : (b.velocityQueueEntryFlag = !0, void t(e))
                }), "" !== s.queue && "fx" !== s.queue || "inprogress" === h.queue(o)[0] || h.dequeue(o)
            }

            var s, l, p, f, v, y, w = arguments[0] && (arguments[0].p || h.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || g.isString(arguments[0].properties));
            if (g.isWrapped(this) ? (s = !1, p = 0, f = this, l = this) : (s = !0, p = 1, f = w ? arguments[0].elements || arguments[0].e : arguments[0]), f = o(f)) {
                w ? (v = arguments[0].properties || arguments[0].p, y = arguments[0].options || arguments[0].o) : (v = arguments[p], y = arguments[p + 1]);
                var S = f.length, T = 0;
                if (!/^(stop|finish)$/i.test(v) && !h.isPlainObject(y)) {
                    var D = p + 1;
                    y = {};
                    for (var _ = D; _ < arguments.length; _++)g.isArray(arguments[_]) || !/^(fast|normal|slow)$/i.test(arguments[_]) && !/^\d/.test(arguments[_]) ? g.isString(arguments[_]) || g.isArray(arguments[_]) ? y.easing = arguments[_] : g.isFunction(arguments[_]) && (y.complete = arguments[_]) : y.duration = arguments[_]
                }
                var k = {promise: null, resolver: null, rejecter: null};
                s && b.Promise && (k.promise = new b.Promise(function (t, e) {
                    k.resolver = t, k.rejecter = e
                }));
                var E;
                switch (v) {
                    case"scroll":
                        E = "scroll";
                        break;
                    case"reverse":
                        E = "reverse";
                        break;
                    case"finish":
                    case"stop":
                        h.each(f, function (t, e) {
                            a(e) && a(e).delayTimer && (clearTimeout(a(e).delayTimer.setTimeout), a(e).delayTimer.next && a(e).delayTimer.next(), delete a(e).delayTimer)
                        });
                        var A = [];
                        return h.each(b.State.calls, function (t, e) {
                            e && h.each(e[1], function (n, r) {
                                var o = y === i ? "" : y;
                                return o === !0 || e[2].queue === o || y === i && e[2].queue === !1 ? void h.each(f, function (n, i) {
                                    i === r && ((y === !0 || g.isString(y)) && (h.each(h.queue(i, g.isString(y) ? y : ""), function (t, e) {
                                        g.isFunction(e) && e(null, !0)
                                    }), h.queue(i, g.isString(y) ? y : "", [])), "stop" === v ? (a(i) && a(i).tweensContainer && o !== !1 && h.each(a(i).tweensContainer, function (t, e) {
                                        e.endValue = e.currentValue
                                    }), A.push(t)) : "finish" === v && (e[2].duration = 1))
                                }) : !0
                            })
                        }), "stop" === v && (h.each(A, function (t, e) {
                            d(e, !0)
                        }), k.promise && k.resolver(f)), t();
                    default:
                        if (!h.isPlainObject(v) || g.isEmptyObject(v)) {
                            if (g.isString(v) && b.Redirects[v]) {
                                var O = h.extend({}, y), N = O.duration, $ = O.delay || 0;
                                return O.backwards === !0 && (f = h.extend(!0, [], f).reverse()), h.each(f, function (t, e) {
                                    parseFloat(O.stagger) ? O.delay = $ + parseFloat(O.stagger) * t : g.isFunction(O.stagger) && (O.delay = $ + O.stagger.call(e, t, S)), O.drag && (O.duration = parseFloat(N) || (/^(callout|transition)/.test(v) ? 1e3 : m), O.duration = Math.max(O.duration * (O.backwards ? 1 - t / S : (t + 1) / S), .75 * O.duration, 200)), b.Redirects[v].call(e, e, O || {}, t, S, f, k.promise ? k : i)
                                }), t()
                            }
                            var I = "Velocity: First argument (" + v + ") was not a property map, a known action, or a registered redirect. Aborting.";
                            return k.promise ? k.rejecter(new Error(I)) : console.log(I), t()
                        }
                        E = "start"
                }
                var L = {
                    lastParent: null,
                    lastPosition: null,
                    lastFontSize: null,
                    lastPercentToPxWidth: null,
                    lastPercentToPxHeight: null,
                    lastEmToPx: null,
                    remToPx: null,
                    vwToPx: null,
                    vhToPx: null
                }, P = [];
                h.each(f, function (t, e) {
                    g.isNode(e) && r.call(e)
                });
                var j, O = h.extend({}, b.defaults, y);
                if (O.loop = parseInt(O.loop), j = 2 * O.loop - 1, O.loop)for (var M = 0; j > M; M++) {
                    var R = {delay: O.delay, progress: O.progress};
                    M === j - 1 && (R.display = O.display, R.visibility = O.visibility, R.complete = O.complete), C(f, "reverse", R)
                }
                return t()
            }
        };
        b = h.extend(C, b), b.animate = C;
        var S = e.requestAnimationFrame || f;
        return b.State.isMobile || n.hidden === i || n.addEventListener("visibilitychange", function () {
            n.hidden ? (S = function (t) {
                return setTimeout(function () {
                    t(!0)
                }, 16)
            }, u()) : S = e.requestAnimationFrame || f
        }), t.Velocity = b, t !== e && (t.fn.velocity = C, t.fn.velocity.defaults = b.defaults), h.each(["Down", "Up"], function (t, e) {
            b.Redirects["slide" + e] = function (t, n, r, o, a, s) {
                var l = h.extend({}, n), c = l.begin, u = l.complete, d = {
                    height: "",
                    marginTop: "",
                    marginBottom: "",
                    paddingTop: "",
                    paddingBottom: ""
                }, p = {};
                l.display === i && (l.display = "Down" === e ? "inline" === b.CSS.Values.getDisplayType(t) ? "inline-block" : "block" : "none"), l.begin = function () {
                    c && c.call(a, a);
                    for (var n in d) {
                        p[n] = t.style[n];
                        var i = b.CSS.getPropertyValue(t, n);
                        d[n] = "Down" === e ? [i, 0] : [0, i]
                    }
                    p.overflow = t.style.overflow, t.style.overflow = "hidden"
                }, l.complete = function () {
                    for (var e in p)t.style[e] = p[e];
                    u && u.call(a, a), s && s.resolver(a)
                }, b(t, d, l)
            }
        }), h.each(["In", "Out"], function (t, e) {
            b.Redirects["fade" + e] = function (t, n, r, o, a, s) {
                var l = h.extend({}, n), c = {opacity: "In" === e ? 1 : 0}, u = l.complete;
                l.complete = r !== o - 1 ? l.begin = null : function () {
                    u && u.call(a, a), s && s.resolver(a)
                }, l.display === i && (l.display = "In" === e ? "auto" : "none"), b(this, c, l)
            }
        }), b
    }(window.jQuery || window.Zepto || window, window, document)
}), !function (t, e, n, i) {
    "use strict";
    function r(t, e, n) {
        return setTimeout(u(t, n), e)
    }

    function o(t, e, n) {
        return Array.isArray(t) ? (a(t, n[e], n), !0) : !1
    }

    function a(t, e, n) {
        var r;
        if (t)if (t.forEach)t.forEach(e, n); else if (t.length !== i)for (r = 0; r < t.length;)e.call(n, t[r], r, t), r++; else for (r in t)t.hasOwnProperty(r) && e.call(n, t[r], r, t)
    }

    function s(t, e, n) {
        for (var r = Object.keys(e), o = 0; o < r.length;)(!n || n && t[r[o]] === i) && (t[r[o]] = e[r[o]]), o++;
        return t
    }

    function l(t, e) {
        return s(t, e, !0)
    }

    function c(t, e, n) {
        var i, r = e.prototype;
        i = t.prototype = Object.create(r), i.constructor = t, i._super = r, n && s(i, n)
    }

    function u(t, e) {
        return function () {
            return t.apply(e, arguments)
        }
    }

    function d(t, e) {
        return typeof t == ut ? t.apply(e ? e[0] || i : i, e) : t
    }

    function h(t, e) {
        return t === i ? e : t
    }

    function p(t, e, n) {
        a(m(e), function (e) {
            t.addEventListener(e, n, !1)
        })
    }

    function f(t, e, n) {
        a(m(e), function (e) {
            t.removeEventListener(e, n, !1)
        })
    }

    function g(t, e) {
        for (; t;) {
            if (t == e)return !0;
            t = t.parentNode
        }
        return !1
    }

    function v(t, e) {
        return t.indexOf(e) > -1
    }

    function m(t) {
        return t.trim().split(/\s+/g)
    }

    function y(t, e, n) {
        if (t.indexOf && !n)return t.indexOf(e);
        for (var i = 0; i < t.length;) {
            if (n && t[i][n] == e || !n && t[i] === e)return i;
            i++
        }
        return -1
    }

    function b(t) {
        return Array.prototype.slice.call(t, 0)
    }

    function w(t, e, n) {
        for (var i = [], r = [], o = 0; o < t.length;) {
            var a = e ? t[o][e] : t[o];
            y(r, a) < 0 && i.push(t[o]), r[o] = a, o++
        }
        return n && (i = e ? i.sort(function (t, n) {
            return t[e] > n[e]
        }) : i.sort()), i
    }

    function x(t, e) {
        for (var n, r, o = e[0].toUpperCase() + e.slice(1), a = 0; a < lt.length;) {
            if (n = lt[a], r = n ? n + o : e, r in t)return r;
            a++
        }
        return i
    }

    function C() {
        return ft++
    }

    function S(t) {
        var e = t.ownerDocument;
        return e.defaultView || e.parentWindow
    }

    function T(t, e) {
        var n = this;
        this.manager = t, this.callback = e, this.element = t.element, this.target = t.options.inputTarget, this.domHandler = function (e) {
            d(t.options.enable, [t]) && n.handler(e)
        }, this.init()
    }

    function D(t) {
        var e, n = t.options.inputClass;
        return new (e = n ? n : mt ? F : yt ? W : vt ? B : R)(t, _)
    }

    function _(t, e, n) {
        var i = n.pointers.length, r = n.changedPointers.length, o = e & Tt && 0 === i - r, a = e & (_t | kt) && 0 === i - r;
        n.isFirst = !!o, n.isFinal = !!a, o && (t.session = {}), n.eventType = e, k(t, n), t.emit("hammer.input", n), t.recognize(n), t.session.prevInput = n
    }

    function k(t, e) {
        var n = t.session, i = e.pointers, r = i.length;
        n.firstInput || (n.firstInput = O(e)), r > 1 && !n.firstMultiple ? n.firstMultiple = O(e) : 1 === r && (n.firstMultiple = !1);
        var o = n.firstInput, a = n.firstMultiple, s = a ? a.center : o.center, l = e.center = N(i);
        e.timeStamp = pt(), e.deltaTime = e.timeStamp - o.timeStamp, e.angle = P(s, l), e.distance = L(s, l), E(n, e), e.offsetDirection = I(e.deltaX, e.deltaY), e.scale = a ? M(a.pointers, i) : 1, e.rotation = a ? j(a.pointers, i) : 0, A(n, e);
        var c = t.element;
        g(e.srcEvent.target, c) && (c = e.srcEvent.target), e.target = c
    }

    function E(t, e) {
        var n = e.center, i = t.offsetDelta || {}, r = t.prevDelta || {}, o = t.prevInput || {};
        (e.eventType === Tt || o.eventType === _t) && (r = t.prevDelta = {
            x: o.deltaX || 0,
            y: o.deltaY || 0
        }, i = t.offsetDelta = {x: n.x, y: n.y}), e.deltaX = r.x + (n.x - i.x), e.deltaY = r.y + (n.y - i.y)
    }

    function A(t, e) {
        var n, r, o, a, s = t.lastInterval || e, l = e.timeStamp - s.timeStamp;
        if (e.eventType != kt && (l > St || s.velocity === i)) {
            var c = s.deltaX - e.deltaX, u = s.deltaY - e.deltaY, d = $(l, c, u);
            r = d.x, o = d.y, n = ht(d.x) > ht(d.y) ? d.x : d.y, a = I(c, u), t.lastInterval = e
        } else n = s.velocity, r = s.velocityX, o = s.velocityY, a = s.direction;
        e.velocity = n, e.velocityX = r, e.velocityY = o, e.direction = a
    }

    function O(t) {
        for (var e = [], n = 0; n < t.pointers.length;)e[n] = {
            clientX: dt(t.pointers[n].clientX),
            clientY: dt(t.pointers[n].clientY)
        }, n++;
        return {timeStamp: pt(), pointers: e, center: N(e), deltaX: t.deltaX, deltaY: t.deltaY}
    }

    function N(t) {
        var e = t.length;
        if (1 === e)return {x: dt(t[0].clientX), y: dt(t[0].clientY)};
        for (var n = 0, i = 0, r = 0; e > r;)n += t[r].clientX, i += t[r].clientY, r++;
        return {x: dt(n / e), y: dt(i / e)}
    }

    function $(t, e, n) {
        return {x: e / t || 0, y: n / t || 0}
    }

    function I(t, e) {
        return t === e ? Et : ht(t) >= ht(e) ? t > 0 ? At : Ot : e > 0 ? Nt : $t
    }

    function L(t, e, n) {
        n || (n = jt);
        var i = e[n[0]] - t[n[0]], r = e[n[1]] - t[n[1]];
        return Math.sqrt(i * i + r * r)
    }

    function P(t, e, n) {
        n || (n = jt);
        var i = e[n[0]] - t[n[0]], r = e[n[1]] - t[n[1]];
        return 180 * Math.atan2(r, i) / Math.PI
    }

    function j(t, e) {
        return P(e[1], e[0], Mt) - P(t[1], t[0], Mt)
    }

    function M(t, e) {
        return L(e[0], e[1], Mt) / L(t[0], t[1], Mt)
    }

    function R() {
        this.evEl = Ft, this.evWin = qt, this.allow = !0, this.pressed = !1, T.apply(this, arguments)
    }

    function F() {
        this.evEl = zt, this.evWin = Bt, T.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
    }

    function q() {
        this.evTarget = Ut, this.evWin = Qt, this.started = !1, T.apply(this, arguments)
    }

    function H(t, e) {
        var n = b(t.touches), i = b(t.changedTouches);
        return e & (_t | kt) && (n = w(n.concat(i), "identifier", !0)), [n, i]
    }

    function W() {
        this.evTarget = Yt, this.targetIds = {}, T.apply(this, arguments)
    }

    function z(t, e) {
        var n = b(t.touches), i = this.targetIds;
        if (e & (Tt | Dt) && 1 === n.length)return i[n[0].identifier] = !0, [n, n];
        var r, o, a = b(t.changedTouches), s = [], l = this.target;
        if (o = n.filter(function (t) {
                return g(t.target, l)
            }), e === Tt)for (r = 0; r < o.length;)i[o[r].identifier] = !0, r++;
        for (r = 0; r < a.length;)i[a[r].identifier] && s.push(a[r]), e & (_t | kt) && delete i[a[r].identifier], r++;
        return s.length ? [w(o.concat(s), "identifier", !0), s] : void 0
    }

    function B() {
        T.apply(this, arguments);
        var t = u(this.handler, this);
        this.touch = new W(this.manager, t), this.mouse = new R(this.manager, t)
    }

    function V(t, e) {
        this.manager = t, this.set(e)
    }

    function U(t) {
        if (v(t, ee))return ee;
        var e = v(t, ne), n = v(t, ie);
        return e && n ? ne + " " + ie : e || n ? e ? ne : ie : v(t, te) ? te : Zt
    }

    function Q(t) {
        this.id = C(), this.manager = null, this.options = l(t || {}, this.defaults), this.options.enable = h(this.options.enable, !0), this.state = re, this.simultaneous = {}, this.requireFail = []
    }

    function X(t) {
        return t & ce ? "cancel" : t & se ? "end" : t & ae ? "move" : t & oe ? "start" : ""
    }

    function Y(t) {
        return t == $t ? "down" : t == Nt ? "up" : t == At ? "left" : t == Ot ? "right" : ""
    }

    function K(t, e) {
        var n = e.manager;
        return n ? n.get(t) : t
    }

    function G() {
        Q.apply(this, arguments)
    }

    function J() {
        G.apply(this, arguments), this.pX = null, this.pY = null
    }

    function Z() {
        G.apply(this, arguments)
    }

    function tt() {
        Q.apply(this, arguments), this._timer = null, this._input = null
    }

    function et() {
        G.apply(this, arguments)
    }

    function nt() {
        G.apply(this, arguments)
    }

    function it() {
        Q.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
    }

    function rt(t, e) {
        return e = e || {}, e.recognizers = h(e.recognizers, rt.defaults.preset), new ot(t, e)
    }

    function ot(t, e) {
        e = e || {}, this.options = l(e, rt.defaults), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.element = t, this.input = D(this), this.touchAction = new V(this, this.options.touchAction), at(this, !0), a(e.recognizers, function (t) {
            var e = this.add(new t[0](t[1]));
            t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3])
        }, this)
    }

    function at(t, e) {
        var n = t.element;
        a(t.options.cssProps, function (t, i) {
            n.style[x(n.style, i)] = e ? t : ""
        })
    }

    function st(t, n) {
        var i = e.createEvent("Event");
        i.initEvent(t, !0, !0), i.gesture = n, n.target.dispatchEvent(i)
    }

    var lt = ["", "webkit", "moz", "MS", "ms", "o"], ct = e.createElement("div"), ut = "function", dt = Math.round, ht = Math.abs, pt = Date.now, ft = 1, gt = /mobile|tablet|ip(ad|hone|od)|android/i, vt = "ontouchstart"in t, mt = x(t, "PointerEvent") !== i, yt = vt && gt.test(navigator.userAgent), bt = "touch", wt = "pen", xt = "mouse", Ct = "kinect", St = 25, Tt = 1, Dt = 2, _t = 4, kt = 8, Et = 1, At = 2, Ot = 4, Nt = 8, $t = 16, It = At | Ot, Lt = Nt | $t, Pt = It | Lt, jt = ["x", "y"], Mt = ["clientX", "clientY"];
    T.prototype = {
        handler: function () {
        }, init: function () {
            this.evEl && p(this.element, this.evEl, this.domHandler), this.evTarget && p(this.target, this.evTarget, this.domHandler), this.evWin && p(S(this.element), this.evWin, this.domHandler)
        }, destroy: function () {
            this.evEl && f(this.element, this.evEl, this.domHandler), this.evTarget && f(this.target, this.evTarget, this.domHandler), this.evWin && f(S(this.element), this.evWin, this.domHandler)
        }
    };
    var Rt = {mousedown: Tt, mousemove: Dt, mouseup: _t}, Ft = "mousedown", qt = "mousemove mouseup";
    c(R, T, {
        handler: function (t) {
            var e = Rt[t.type];
            e & Tt && 0 === t.button && (this.pressed = !0), e & Dt && 1 !== t.which && (e = _t), this.pressed && this.allow && (e & _t && (this.pressed = !1), this.callback(this.manager, e, {
                pointers: [t],
                changedPointers: [t],
                pointerType: xt,
                srcEvent: t
            }))
        }
    });
    var Ht = {pointerdown: Tt, pointermove: Dt, pointerup: _t, pointercancel: kt, pointerout: kt}, Wt = {
        2: bt,
        3: wt,
        4: xt,
        5: Ct
    }, zt = "pointerdown", Bt = "pointermove pointerup pointercancel";
    t.MSPointerEvent && (zt = "MSPointerDown", Bt = "MSPointerMove MSPointerUp MSPointerCancel"), c(F, T, {
        handler: function (t) {
            var e = this.store, n = !1, i = t.type.toLowerCase().replace("ms", ""), r = Ht[i], o = Wt[t.pointerType] || t.pointerType, a = o == bt, s = y(e, t.pointerId, "pointerId");
            r & Tt && (0 === t.button || a) ? 0 > s && (e.push(t), s = e.length - 1) : r & (_t | kt) && (n = !0), 0 > s || (e[s] = t, this.callback(this.manager, r, {
                pointers: e,
                changedPointers: [t],
                pointerType: o,
                srcEvent: t
            }), n && e.splice(s, 1))
        }
    });
    var Vt = {
        touchstart: Tt,
        touchmove: Dt,
        touchend: _t,
        touchcancel: kt
    }, Ut = "touchstart", Qt = "touchstart touchmove touchend touchcancel";
    c(q, T, {
        handler: function (t) {
            var e = Vt[t.type];
            if (e === Tt && (this.started = !0), this.started) {
                var n = H.call(this, t, e);
                e & (_t | kt) && 0 === n[0].length - n[1].length && (this.started = !1), this.callback(this.manager, e, {
                    pointers: n[0],
                    changedPointers: n[1],
                    pointerType: bt,
                    srcEvent: t
                })
            }
        }
    });
    var Xt = {
        touchstart: Tt,
        touchmove: Dt,
        touchend: _t,
        touchcancel: kt
    }, Yt = "touchstart touchmove touchend touchcancel";
    c(W, T, {
        handler: function (t) {
            var e = Xt[t.type], n = z.call(this, t, e);
            n && this.callback(this.manager, e, {pointers: n[0], changedPointers: n[1], pointerType: bt, srcEvent: t})
        }
    }), c(B, T, {
        handler: function (t, e, n) {
            var i = n.pointerType == bt, r = n.pointerType == xt;
            if (i)this.mouse.allow = !1; else if (r && !this.mouse.allow)return;
            e & (_t | kt) && (this.mouse.allow = !0), this.callback(t, e, n)
        }, destroy: function () {
            this.touch.destroy(), this.mouse.destroy()
        }
    });
    var Kt = x(ct.style, "touchAction"), Gt = Kt !== i, Jt = "compute", Zt = "auto", te = "manipulation", ee = "none", ne = "pan-x", ie = "pan-y";
    V.prototype = {
        set: function (t) {
            t == Jt && (t = this.compute()), Gt && (this.manager.element.style[Kt] = t), this.actions = t.toLowerCase().trim()
        }, update: function () {
            this.set(this.manager.options.touchAction)
        }, compute: function () {
            var t = [];
            return a(this.manager.recognizers, function (e) {
                d(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()))
            }), U(t.join(" "))
        }, preventDefaults: function (t) {
            if (!Gt) {
                var e = t.srcEvent, n = t.offsetDirection;
                if (this.manager.session.prevented)return void e.preventDefault();
                var i = this.actions, r = v(i, ee), o = v(i, ie), a = v(i, ne);
                return r || o && n & It || a && n & Lt ? this.preventSrc(e) : void 0
            }
        }, preventSrc: function (t) {
            this.manager.session.prevented = !0, t.preventDefault()
        }
    };
    var re = 1, oe = 2, ae = 4, se = 8, le = se, ce = 16, ue = 32;
    Q.prototype = {
        defaults: {}, set: function (t) {
            return s(this.options, t), this.manager && this.manager.touchAction.update(), this
        }, recognizeWith: function (t) {
            if (o(t, "recognizeWith", this))return this;
            var e = this.simultaneous;
            return t = K(t, this), e[t.id] || (e[t.id] = t, t.recognizeWith(this)), this
        }, dropRecognizeWith: function (t) {
            return o(t, "dropRecognizeWith", this) ? this : (t = K(t, this), delete this.simultaneous[t.id], this)
        }, requireFailure: function (t) {
            if (o(t, "requireFailure", this))return this;
            var e = this.requireFail;
            return t = K(t, this), -1 === y(e, t) && (e.push(t), t.requireFailure(this)), this
        }, dropRequireFailure: function (t) {
            if (o(t, "dropRequireFailure", this))return this;
            t = K(t, this);
            var e = y(this.requireFail, t);
            return e > -1 && this.requireFail.splice(e, 1), this
        }, hasRequireFailures: function () {
            return this.requireFail.length > 0
        }, canRecognizeWith: function (t) {
            return !!this.simultaneous[t.id]
        }, emit: function (t) {
            function e(e) {
                n.manager.emit(n.options.event + (e ? X(i) : ""), t)
            }

            var n = this, i = this.state;
            se > i && e(!0), e(), i >= se && e(!0)
        }, tryEmit: function (t) {
            return this.canEmit() ? this.emit(t) : void(this.state = ue)
        }, canEmit: function () {
            for (var t = 0; t < this.requireFail.length;) {
                if (!(this.requireFail[t].state & (ue | re)))return !1;
                t++
            }
            return !0
        }, recognize: function (t) {
            var e = s({}, t);
            return d(this.options.enable, [this, e]) ? (this.state & (le | ce | ue) && (this.state = re), this.state = this.process(e), void(this.state & (oe | ae | se | ce) && this.tryEmit(e))) : (this.reset(), void(this.state = ue))
        }, process: function () {
        }, getTouchAction: function () {
        }, reset: function () {
        }
    }, c(G, Q, {
        defaults: {pointers: 1}, attrTest: function (t) {
            var e = this.options.pointers;
            return 0 === e || t.pointers.length === e
        }, process: function (t) {
            var e = this.state, n = t.eventType, i = e & (oe | ae), r = this.attrTest(t);
            return i && (n & kt || !r) ? e | ce : i || r ? n & _t ? e | se : e & oe ? e | ae : oe : ue
        }
    }), c(J, G, {
        defaults: {event: "pan", threshold: 10, pointers: 1, direction: Pt}, getTouchAction: function () {
            var t = this.options.direction, e = [];
            return t & It && e.push(ie), t & Lt && e.push(ne), e
        }, directionTest: function (t) {
            var e = this.options, n = !0, i = t.distance, r = t.direction, o = t.deltaX, a = t.deltaY;
            return r & e.direction || (e.direction & It ? (r = 0 === o ? Et : 0 > o ? At : Ot, n = o != this.pX, i = Math.abs(t.deltaX)) : (r = 0 === a ? Et : 0 > a ? Nt : $t, n = a != this.pY, i = Math.abs(t.deltaY))), t.direction = r, n && i > e.threshold && r & e.direction
        }, attrTest: function (t) {
            return G.prototype.attrTest.call(this, t) && (this.state & oe || !(this.state & oe) && this.directionTest(t))
        }, emit: function (t) {
            this.pX = t.deltaX, this.pY = t.deltaY;
            var e = Y(t.direction);
            e && this.manager.emit(this.options.event + e, t), this._super.emit.call(this, t)
        }
    }), c(Z, G, {
        defaults: {event: "pinch", threshold: 0, pointers: 2}, getTouchAction: function () {
            return [ee]
        }, attrTest: function (t) {
            return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || this.state & oe)
        }, emit: function (t) {
            if (this._super.emit.call(this, t), 1 !== t.scale) {
                var e = t.scale < 1 ? "in" : "out";
                this.manager.emit(this.options.event + e, t)
            }
        }
    }), c(tt, Q, {
        defaults: {event: "press", pointers: 1, time: 500, threshold: 5}, getTouchAction: function () {
            return [Zt]
        }, process: function (t) {
            var e = this.options, n = t.pointers.length === e.pointers, i = t.distance < e.threshold, o = t.deltaTime > e.time;
            if (this._input = t, !i || !n || t.eventType & (_t | kt) && !o)this.reset(); else if (t.eventType & Tt)this.reset(), this._timer = r(function () {
                this.state = le, this.tryEmit()
            }, e.time, this); else if (t.eventType & _t)return le;
            return ue
        }, reset: function () {
            clearTimeout(this._timer)
        }, emit: function (t) {
            this.state === le && (t && t.eventType & _t ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = pt(), this.manager.emit(this.options.event, this._input)))
        }
    }), c(et, G, {
        defaults: {event: "rotate", threshold: 0, pointers: 2}, getTouchAction: function () {
            return [ee]
        }, attrTest: function (t) {
            return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || this.state & oe)
        }
    }), c(nt, G, {
        defaults: {event: "swipe", threshold: 10, velocity: .65, direction: It | Lt, pointers: 1},
        getTouchAction: function () {
            return J.prototype.getTouchAction.call(this)
        },
        attrTest: function (t) {
            var e, n = this.options.direction;
            return n & (It | Lt) ? e = t.velocity : n & It ? e = t.velocityX : n & Lt && (e = t.velocityY), this._super.attrTest.call(this, t) && n & t.direction && t.distance > this.options.threshold && ht(e) > this.options.velocity && t.eventType & _t
        },
        emit: function (t) {
            var e = Y(t.direction);
            e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t)
        }
    }), c(it, Q, {
        defaults: {
            event: "tap",
            pointers: 1,
            taps: 1,
            interval: 300,
            time: 250,
            threshold: 2,
            posThreshold: 10
        }, getTouchAction: function () {
            return [te]
        }, process: function (t) {
            var e = this.options, n = t.pointers.length === e.pointers, i = t.distance < e.threshold, o = t.deltaTime < e.time;
            if (this.reset(), t.eventType & Tt && 0 === this.count)return this.failTimeout();
            if (i && o && n) {
                if (t.eventType != _t)return this.failTimeout();
                var a = this.pTime ? t.timeStamp - this.pTime < e.interval : !0, s = !this.pCenter || L(this.pCenter, t.center) < e.posThreshold;
                this.pTime = t.timeStamp, this.pCenter = t.center, s && a ? this.count += 1 : this.count = 1, this._input = t;
                var l = this.count % e.taps;
                if (0 === l)return this.hasRequireFailures() ? (this._timer = r(function () {
                    this.state = le, this.tryEmit()
                }, e.interval, this), oe) : le
            }
            return ue
        }, failTimeout: function () {
            return this._timer = r(function () {
                this.state = ue
            }, this.options.interval, this), ue
        }, reset: function () {
            clearTimeout(this._timer)
        }, emit: function () {
            this.state == le && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
        }
    }), rt.VERSION = "2.0.4", rt.defaults = {
        domEvents: !1,
        touchAction: Jt,
        enable: !0,
        inputTarget: null,
        inputClass: null,
        preset: [[et, {enable: !1}], [Z, {enable: !1}, ["rotate"]], [nt, {direction: It}], [J, {direction: It}, ["swipe"]], [it], [it, {
            event: "doubletap",
            taps: 2
        }, ["tap"]], [tt]],
        cssProps: {
            userSelect: "default",
            touchSelect: "none",
            touchCallout: "none",
            contentZooming: "none",
            userDrag: "none",
            tapHighlightColor: "rgba(0,0,0,0)"
        }
    };
    var de = 1, he = 2;
    ot.prototype = {
        set: function (t) {
            return s(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()), this
        }, stop: function (t) {
            this.session.stopped = t ? he : de
        }, recognize: function (t) {
            var e = this.session;
            if (!e.stopped) {
                this.touchAction.preventDefaults(t);
                var n, i = this.recognizers, r = e.curRecognizer;
                (!r || r && r.state & le) && (r = e.curRecognizer = null);
                for (var o = 0; o < i.length;)n = i[o], e.stopped === he || r && n != r && !n.canRecognizeWith(r) ? n.reset() : n.recognize(t), !r && n.state & (oe | ae | se) && (r = e.curRecognizer = n), o++
            }
        }, get: function (t) {
            if (t instanceof Q)return t;
            for (var e = this.recognizers, n = 0; n < e.length; n++)if (e[n].options.event == t)return e[n];
            return null
        }, add: function (t) {
            if (o(t, "add", this))return this;
            var e = this.get(t.options.event);
            return e && this.remove(e), this.recognizers.push(t), t.manager = this, this.touchAction.update(), t
        }, remove: function (t) {
            if (o(t, "remove", this))return this;
            var e = this.recognizers;
            return t = this.get(t), e.splice(y(e, t), 1), this.touchAction.update(), this
        }, on: function (t, e) {
            var n = this.handlers;
            return a(m(t), function (t) {
                n[t] = n[t] || [], n[t].push(e)
            }), this
        }, off: function (t, e) {
            var n = this.handlers;
            return a(m(t), function (t) {
                e ? n[t].splice(y(n[t], e), 1) : delete n[t]
            }), this
        }, emit: function (t, e) {
            this.options.domEvents && st(t, e);
            var n = this.handlers[t] && this.handlers[t].slice();
            if (n && n.length) {
                e.type = t, e.preventDefault = function () {
                    e.srcEvent.preventDefault()
                };
                for (var i = 0; i < n.length;)n[i](e), i++
            }
        }, destroy: function () {
            this.element && at(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
        }
    }, s(rt, {
        INPUT_START: Tt,
        INPUT_MOVE: Dt,
        INPUT_END: _t,
        INPUT_CANCEL: kt,
        STATE_POSSIBLE: re,
        STATE_BEGAN: oe,
        STATE_CHANGED: ae,
        STATE_ENDED: se,
        STATE_RECOGNIZED: le,
        STATE_CANCELLED: ce,
        STATE_FAILED: ue,
        DIRECTION_NONE: Et,
        DIRECTION_LEFT: At,
        DIRECTION_RIGHT: Ot,
        DIRECTION_UP: Nt,
        DIRECTION_DOWN: $t,
        DIRECTION_HORIZONTAL: It,
        DIRECTION_VERTICAL: Lt,
        DIRECTION_ALL: Pt,
        Manager: ot,
        Input: T,
        TouchAction: V,
        TouchInput: W,
        MouseInput: R,
        PointerEventInput: F,
        TouchMouseInput: B,
        SingleTouchInput: q,
        Recognizer: Q,
        AttrRecognizer: G,
        Tap: it,
        Pan: J,
        Swipe: nt,
        Pinch: Z,
        Rotate: et,
        Press: tt,
        on: p,
        off: f,
        each: a,
        merge: l,
        extend: s,
        inherit: c,
        bindFn: u,
        prefixed: x
    }), typeof define == ut && define.amd ? define(function () {
        return rt
    }) : "undefined" != typeof module && module.exports ? module.exports = rt : t[n] = rt
}(window, document, "Hammer"), function (t) {
    "function" == typeof define && define.amd ? define(["jquery", "hammerjs"], t) : "object" == typeof exports ? t(require("jquery"), require("hammerjs")) : t(jQuery, Hammer)
}(function (t, e) {
    function n(n, i) {
        var r = t(n);
        r.data("hammer") || r.data("hammer", new e(r[0], i))
    }

    t.fn.hammer = function (t) {
        return this.each(function () {
            n(this, t)
        })
    }, e.Manager.prototype.emit = function (e) {
        return function (n, i) {
            e.call(this, n, i), t(this.element).trigger({type: n, gesture: i})
        }
    }(e.Manager.prototype.emit)
}), Materialize = {}, Materialize.guid = function () {
    function t() {
        return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
    }

    return function () {
        return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t()
    }
}(), Materialize.elementOrParentIsFixed = function (t) {
    var e = $(t), n = e.add(e.parents()), i = !1;
    return n.each(function () {
        return "fixed" === $(this).css("position") ? (i = !0, !1) : void 0
    }), i
};
var Vel;
Vel = $ ? $.Velocity : Velocity, function (t) {
    t.fn.collapsible = function (e) {
        var n = {accordion: void 0};
        return e = t.extend(n, e), this.each(function () {
            function n(e) {
                s = a.find("> li > .collapsible-header"), e.hasClass("active") ? e.parent().addClass("active") : e.parent().removeClass("active"), e.parent().hasClass("active") ? e.siblings(".collapsible-body").stop(!0, !1).slideDown({
                    duration: 350,
                    easing: "easeOutQuart",
                    queue: !1,
                    complete: function () {
                        t(this).css("height", "")
                    }
                }) : e.siblings(".collapsible-body").stop(!0, !1).slideUp({
                    duration: 350,
                    easing: "easeOutQuart",
                    queue: !1,
                    complete: function () {
                        t(this).css("height", "")
                    }
                }), s.not(e).removeClass("active").parent().removeClass("active"), s.not(e).parent().children(".collapsible-body").stop(!0, !1).slideUp({
                    duration: 350,
                    easing: "easeOutQuart",
                    queue: !1,
                    complete: function () {
                        t(this).css("height", "")
                    }
                })
            }

            function i(e) {
                e.hasClass("active") ? e.parent().addClass("active") : e.parent().removeClass("active"), e.parent().hasClass("active") ? e.siblings(".collapsible-body").stop(!0, !1).slideDown({
                    duration: 350,
                    easing: "easeOutQuart",
                    queue: !1,
                    complete: function () {
                        t(this).css("height", "")
                    }
                }) : e.siblings(".collapsible-body").stop(!0, !1).slideUp({
                    duration: 350,
                    easing: "easeOutQuart",
                    queue: !1,
                    complete: function () {
                        t(this).css("height", "")
                    }
                })
            }

            function r(t) {
                var e = o(t);
                return e.length > 0
            }

            function o(t) {
                return t.closest("li > .collapsible-header")
            }

            var a = t(this), s = t(this).find("> li > .collapsible-header"), l = a.data("collapsible");
            a.off("click.collapse", ".collapsible-header"), s.off("click.collapse"), e.accordion || "accordion" == l || void 0 == l ? (s = a.find("> li > .collapsible-header"), s.on("click.collapse", function (e) {
                var i = t(e.target);
                r(i) && (i = o(i)), i.toggleClass("active"), n(i)
            }), n(s.filter(".active").first())) : s.each(function () {
                t(this).on("click.collapse", function (e) {
                    var n = t(e.target);
                    r(n) && (n = o(n)), n.toggleClass("active"), i(n)
                }), t(this).hasClass("active") && i(t(this))
            })
        })
    }, t(document).ready(function () {
        t(".collapsible").collapsible()
    })
}(jQuery), function (t) {
    t.fn.scrollTo = function (e) {
        return t(this).scrollTop(t(this).scrollTop() - t(this).offset().top + t(e).offset().top), this
    }, t.fn.dropdown = function (e) {
        var n = {inDuration: 300, outDuration: 225, constrain_width: !0, hover: !1, gutter: 0, belowOrigin: !1};
        this.each(function () {
            function i() {
                void 0 != a.data("induration") && (s.inDuration = a.data("inDuration")), void 0 != a.data("outduration") && (s.outDuration = a.data("outDuration")), void 0 != a.data("constrainwidth") && (s.constrain_width = a.data("constrainwidth")), void 0 != a.data("hover") && (s.hover = a.data("hover")), void 0 != a.data("gutter") && (s.gutter = a.data("gutter")), void 0 != a.data("beloworigin") && (s.belowOrigin = a.data("beloworigin"))
            }

            function r() {
                i(), l.addClass("active"), 1 == s.constrain_width && l.css("width", a.outerWidth());
                var e = 0;
                1 == s.belowOrigin && (e = a.height());
                var n = a.offset().left, r = 0, o = s.gutter;
                n + l.innerWidth() > t(window).width() && (r = a.innerWidth() - l.innerWidth(), o = -1 * o), l.css({
                    position: "absolute",
                    top: a.position().top + e,
                    left: a.position().left + r + o
                }), l.stop(!0, !0).css("opacity", 0).slideDown({
                    queue: !1,
                    duration: s.inDuration,
                    easing: "easeOutCubic",
                    complete: function () {
                        t(this).css("height", "")
                    }
                }).animate({opacity: 1}, {queue: !1, duration: s.inDuration, easing: "easeOutSine"})
            }

            function o() {
                l.fadeOut(s.outDuration), l.removeClass("active")
            }

            var a = t(this), s = t.extend({}, n, e), l = t("#" + a.attr("data-activates"));
            if (i(), a.after(l), s.hover) {
                var c = !1;
                a.unbind("click." + a.attr("id")), a.on("mouseenter", function () {
                    c === !1 && (r(), c = !0)
                }), a.on("mouseleave", function (e) {
                    t(e.toElement).closest(".dropdown-content").is(l) || (l.stop(!0, !0), o(), c = !1)
                }), l.on("mouseleave", function (e) {
                    t(e.toElement).closest(".dropdown-button").is(a) || (l.stop(!0, !0), o(), c = !1)
                })
            } else a.unbind("click." + a.attr("id")), a.bind("click." + a.attr("id"), function (e) {
                a[0] == e.currentTarget && 0 === t(e.target).closest(".dropdown-content").length ? (e.preventDefault(), r()) : a.hasClass("active") && (o(), t(document).unbind("click." + l.attr("id"))), l.hasClass("active") && t(document).bind("click." + l.attr("id"), function (e) {
                    !l.is(e.target) && !a.is(e.target) && !a.find(e.target).length > 0 && (o(), t(document).unbind("click." + l.attr("id")))
                })
            });
            a.on("open", r), a.on("close", o)
        })
    }, t(document).ready(function () {
        t(".dropdown-button").dropdown()
    })
}(jQuery), function (t) {
    t.fn.extend({
        openModal: function (e) {
            var n = this, i = t('<div id="lean-overlay"></div>');
            t("body").append(i);
            var r = {
                opacity: .5,
                in_duration: 350,
                out_duration: 250,
                ready: void 0,
                complete: void 0,
                dismissible: !0
            };
            e = t.extend(r, e), e.dismissible && (t("#lean-overlay").click(function () {
                t(n).closeModal(e)
            }), t(document).on("keyup.leanModal", function (i) {
                27 === i.keyCode && t(n).closeModal(e)
            })), t(n).find(".modal-close").click(function () {
                t(n).closeModal(e)
            }), t("#lean-overlay").css({display: "block", opacity: 0}), t(n).css({
                display: "block",
                opacity: 0
            }), t("#lean-overlay").velocity({opacity: e.opacity}, {
                duration: e.in_duration,
                queue: !1,
                ease: "easeOutCubic"
            }), t(n).hasClass("bottom-sheet") ? t(n).velocity({bottom: "0", opacity: 1}, {
                duration: e.in_duration,
                queue: !1,
                ease: "easeOutCubic",
                complete: function () {
                    "function" == typeof e.ready && e.ready()
                }
            }) : (t(n).css({top: "4%"}), t(n).velocity({top: "10%", opacity: 1}, {
                duration: e.in_duration,
                queue: !1,
                ease: "easeOutCubic",
                complete: function () {
                    "function" == typeof e.ready && e.ready()
                }
            }))
        }
    }), t.fn.extend({
        closeModal: function (e) {
            var n = {out_duration: 250, complete: void 0}, e = t.extend(n, e);
            t(".modal-close").off(), t(document).off("keyup.leanModal"), t("#lean-overlay").velocity({opacity: 0}, {
                duration: e.out_duration,
                queue: !1,
                ease: "easeOutQuart"
            }), t(this).hasClass("bottom-sheet") ? t(this).velocity({
                bottom: "-100%",
                opacity: 0
            }, {
                duration: e.out_duration, queue: !1, ease: "easeOutCubic", complete: function () {
                    t("#lean-overlay").css({display: "none"}), "function" == typeof e.complete && e.complete(), t("#lean-overlay").remove()
                }
            }) : t(this).fadeOut(e.out_duration, function () {
                t(this).css({top: 0}), t("#lean-overlay").css({display: "none"}), "function" == typeof e.complete && e.complete(), t("#lean-overlay").remove()
            })
        }
    }), t.fn.extend({
        leanModal: function (e) {
            return this.each(function () {
                t(this).click(function (n) {
                    var i = t(this).attr("href") || "#" + t(this).data("target");
                    t(i).openModal(e), n.preventDefault()
                })
            })
        }
    })
}(jQuery), function (t) {
    t.fn.materialbox = function () {
        return this.each(function () {
            function e() {
                i = !1;
                var e = a.parent(".material-placeholder"), r = (window.innerWidth, window.innerHeight, a.data("width")), s = a.data("height");
                a.velocity("stop", !0), t("#materialbox-overlay").velocity("stop", !0), t(".materialbox-caption").velocity("stop", !0), t("#materialbox-overlay").velocity({opacity: 0}, {
                    duration: o,
                    queue: !1,
                    easing: "easeOutQuad",
                    complete: function () {
                        n = !1, t(this).remove()
                    }
                }), a.velocity({width: r, height: s, left: 0, top: 0}, {
                    duration: o,
                    queue: !1,
                    easing: "easeOutQuad"
                }), t(".materialbox-caption").velocity({opacity: 0}, {
                    duration: o,
                    queue: !1,
                    easing: "easeOutQuad",
                    complete: function () {
                        e.css({height: "", width: "", position: "", top: "", left: ""}), a.css({
                            height: "",
                            top: "",
                            left: "",
                            width: "",
                            "max-width": "",
                            position: "",
                            "z-index": ""
                        }), a.removeClass("active"), i = !0, t(this).remove()
                    }
                })
            }

            if (!t(this).hasClass("intialized")) {
                t(this).addClass("intialized");
                var n = !1, i = !0, r = 275, o = 200, a = t(this), s = t("<div></div>").addClass("material-placeholder");
                a.wrap(s), a.on("click", function () {
                    var o = a.parent(".material-placeholder"), s = window.innerWidth, l = window.innerHeight, c = a.width(), u = a.height();
                    if (i === !1)return e(), !1;
                    if (n && i === !0)return e(), !1;
                    i = !1, a.addClass("active"), n = !0, o.css({
                        width: o[0].getBoundingClientRect().width,
                        height: o[0].getBoundingClientRect().height,
                        position: "relative",
                        top: 0,
                        left: 0
                    }), a.css({position: "absolute", "z-index": 1e3}).data("width", c).data("height", u);
                    var d = t('<div id="materialbox-overlay"></div>').css({opacity: 0}).click(function () {
                        i === !0 && e()
                    });
                    if (t("body").append(d), d.velocity({opacity: 1}, {
                            duration: r,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), "" !== a.data("caption")) {
                        var h = t('<div class="materialbox-caption"></div>');
                        h.text(a.data("caption")), t("body").append(h), h.css({display: "block"}), h.velocity({opacity: 1}, {
                            duration: r,
                            queue: !1,
                            easing: "easeOutQuad"
                        })
                    }
                    var p = 0, f = c / s, g = u / l, v = 0, m = 0;
                    f > g ? (p = u / c, v = .9 * s, m = .9 * s * p) : (p = c / u, v = .9 * l * p, m = .9 * l), a.hasClass("responsive-img") ? a.velocity({
                        "max-width": v,
                        width: c
                    }, {
                        duration: 0, queue: !1, complete: function () {
                            a.css({left: 0, top: 0}).velocity({
                                height: m,
                                width: v,
                                left: t(document).scrollLeft() + s / 2 - a.parent(".material-placeholder").offset().left - v / 2,
                                top: t(document).scrollTop() + l / 2 - a.parent(".material-placeholder").offset().top - m / 2
                            }, {
                                duration: r, queue: !1, easing: "easeOutQuad", complete: function () {
                                    i = !0
                                }
                            })
                        }
                    }) : a.css("left", 0).css("top", 0).velocity({
                        height: m,
                        width: v,
                        left: t(document).scrollLeft() + s / 2 - a.parent(".material-placeholder").offset().left - v / 2,
                        top: t(document).scrollTop() + l / 2 - a.parent(".material-placeholder").offset().top - m / 2
                    }, {
                        duration: r, queue: !1, easing: "easeOutQuad", complete: function () {
                            i = !0
                        }
                    })
                }), t(window).scroll(function () {
                    n && e()
                }), t(document).keyup(function (t) {
                    27 === t.keyCode && i === !0 && n && e()
                })
            }
        })
    }, t(document).ready(function () {
        t(".materialboxed").materialbox()
    })
}(jQuery), function (t) {
    t.fn.parallax = function () {
        var e = t(window).width();
        return this.each(function () {
            function n(n) {
                var r;
                r = 601 > e ? i.height() > 0 ? i.height() : i.children("img").height() : i.height() > 0 ? i.height() : 500;
                var o = i.children("img").first(), a = o.height(), s = a - r, l = i.offset().top + r, c = i.offset().top, u = t(window).scrollTop(), d = window.innerHeight, h = u + d, p = (h - c) / (r + d), f = Math.round(s * p);
                n && o.css("display", "block"), l > u && u + d > c && o.css("transform", "translate3D(-50%," + f + "px, 0)")
            }

            var i = t(this);
            i.addClass("parallax"), i.children("img").one("load", function () {
                n(!0)
            }).each(function () {
                this.complete && t(this).load()
            }), t(window).scroll(function () {
                e = t(window).width(), n(!1)
            }), t(window).resize(function () {
                e = t(window).width(), n(!1)
            })
        })
    }
}(jQuery), function (t) {
    var e = {
        init: function () {
            return this.each(function () {
                var e = t(this);
                t(window).width(), e.width("100%");
                var n = t(this).children("li").length;
                e.children("li").each(function () {
                    t(this).width(100 / n + "%")
                });
                var i, r, o = e.find("li.tab a"), a = e.width(), s = e.find("li").first().outerWidth(), l = 0;
                i = t(o.filter('[href="' + location.hash + '"]')), 0 === i.length && (i = t(this).find("li.tab a.active").first()), 0 === i.length && (i = t(this).find("li.tab a").first()), i.addClass("active"), l = o.index(i), 0 > l && (l = 0), r = t(i[0].hash), e.append('<div class="indicator"></div>');
                var c = e.find(".indicator");
                e.is(":visible") && (c.css({right: a - (l + 1) * s}), c.css({left: l * s})), t(window).resize(function () {
                    a = e.width(), s = e.find("li").first().outerWidth(), 0 > l && (l = 0), 0 !== s && 0 !== a && (c.css({right: a - (l + 1) * s}), c.css({left: l * s}))
                }), o.not(i).each(function () {
                    t(this.hash).hide()
                }), e.on("click", "a", function (n) {
                    a = e.width(), s = e.find("li").first().outerWidth(), i.removeClass("active"), r.hide(), i = t(this), r = t(this.hash), o = e.find("li.tab a"), i.addClass("active");
                    var u = l;
                    l = o.index(t(this)), 0 > l && (l = 0), r.show(), l - u >= 0 ? (c.velocity({right: a - (l + 1) * s}, {
                        duration: 300,
                        queue: !1,
                        easing: "easeOutQuad"
                    }), c.velocity({left: l * s}, {
                        duration: 300,
                        queue: !1,
                        easing: "easeOutQuad",
                        delay: 90
                    })) : (c.velocity({left: l * s}, {
                        duration: 300,
                        queue: !1,
                        easing: "easeOutQuad"
                    }), c.velocity({right: a - (l + 1) * s}, {
                        duration: 300,
                        queue: !1,
                        easing: "easeOutQuad",
                        delay: 90
                    })), n.preventDefault()
                })
            })
        }, select_tab: function (t) {
            this.find('a[href="#' + t + '"]').trigger("click")
        }
    };
    t.fn.tabs = function (n) {
        return e[n] ? e[n].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof n && n ? void t.error("Method " + n + " does not exist on jQuery.tooltip") : e.init.apply(this, arguments)
    }, t(document).ready(function () {
        t("ul.tabs").tabs()
    })
}(jQuery), function (t) {
    t.fn.tooltip = function (e) {
        var n = null, i = !1, r = null, o = 5, a = {delay: 350};
        return e = t.extend(a, e), t(".material-tooltip").remove(),
            this.each(function () {
                var a = t(this), s = t("<span></span>").text(a.attr("data-tooltip")), l = t("<div></div>");
                l.addClass("material-tooltip").append(s), l.appendTo(t("body"));
                var c = t("<div></div>").addClass("backdrop");
                c.appendTo(l), c.css({
                    top: 0,
                    left: 0
                }), t(this).off("mouseenter mouseleave"), t(this).on({
                    mouseenter: function () {
                        var t = a.data("delay");
                        t = void 0 == t || "" == t ? e.delay : t, n = 0, r = setInterval(function () {
                            if (n += 10, n >= t && 0 == i) {
                                i = !0, l.css({
                                    display: "block",
                                    left: "0px",
                                    top: "0px"
                                }), l.children("span").text(a.attr("data-tooltip"));
                                var e = a.outerWidth(), r = a.outerHeight(), s = a.attr("data-position"), u = l.outerHeight(), d = l.outerWidth(), h = "0px", p = "0px", f = 8;
                                "top" === s ? (l.css({
                                    top: a.offset().top - u - o,
                                    left: a.offset().left + e / 2 - d / 2
                                }), h = "-10px", c.css({
                                    borderRadius: "14px 14px 0 0",
                                    transformOrigin: "50% 90%",
                                    marginTop: u,
                                    marginLeft: d / 2 - c.width() / 2
                                })) : "left" === s ? (l.css({
                                    top: a.offset().top + r / 2 - u / 2,
                                    left: a.offset().left - d - o
                                }), p = "-10px", c.css({
                                    width: "14px",
                                    height: "14px",
                                    borderRadius: "14px 0 0 14px",
                                    transformOrigin: "95% 50%",
                                    marginTop: u / 2,
                                    marginLeft: d
                                })) : "right" === s ? (l.css({
                                    top: a.offset().top + r / 2 - u / 2,
                                    left: a.offset().left + e + o
                                }), p = "+10px", c.css({
                                    width: "14px",
                                    height: "14px",
                                    borderRadius: "0 14px 14px 0",
                                    transformOrigin: "5% 50%",
                                    marginTop: u / 2,
                                    marginLeft: "0px"
                                })) : (l.css({
                                    top: a.offset().top + a.outerHeight() + o,
                                    left: a.offset().left + e / 2 - d / 2
                                }), h = "+10px", c.css({marginLeft: d / 2 - c.width() / 2})), f = d / 8, 8 > f && (f = 8), ("right" === s || "left" === s) && (f = d / 10, 6 > f && (f = 6)), l.velocity({
                                    opacity: 1,
                                    marginTop: h,
                                    marginLeft: p
                                }, {
                                    duration: 350,
                                    queue: !1
                                }), c.css({display: "block"}).velocity({opacity: 1}, {
                                    duration: 55,
                                    delay: 0,
                                    queue: !1
                                }).velocity({scale: f}, {duration: 300, delay: 0, queue: !1, easing: "easeInOutQuad"})
                            }
                        }, 10)
                    }, mouseleave: function () {
                        clearInterval(r), n = 0, l.velocity({opacity: 0, marginTop: 0, marginLeft: 0}, {
                            duration: 225,
                            queue: !1,
                            delay: 275
                        }), c.velocity({opacity: 0, scale: 1}, {
                            duration: 225,
                            delay: 275,
                            queue: !1,
                            complete: function () {
                                c.css("display", "none"), l.css("display", "none"), i = !1
                            }
                        })
                    }
                })
            })
    }, t(document).ready(function () {
        t(".tooltipped").tooltip()
    })
}(jQuery), function (t) {
    "use strict";
    function e(t) {
        return null !== t && t === t.window
    }

    function n(t) {
        return e(t) ? t : 9 === t.nodeType && t.defaultView
    }

    function i(t) {
        var e, i, r = {top: 0, left: 0}, o = t && t.ownerDocument;
        return e = o.documentElement, "undefined" != typeof t.getBoundingClientRect && (r = t.getBoundingClientRect()), i = n(o), {
            top: r.top + i.pageYOffset - e.clientTop,
            left: r.left + i.pageXOffset - e.clientLeft
        }
    }

    function r(t) {
        var e = "";
        for (var n in t)t.hasOwnProperty(n) && (e += n + ":" + t[n] + ";");
        return e
    }

    function o(t) {
        if (u.allowEvent(t) === !1)return null;
        for (var e = null, n = t.target || t.srcElement; null !== n.parentElement;) {
            if (!(n instanceof SVGElement || -1 === n.className.indexOf("waves-effect"))) {
                e = n;
                break
            }
            if (n.classList.contains("waves-effect")) {
                e = n;
                break
            }
            n = n.parentElement
        }
        return e
    }

    function a(e) {
        var n = o(e);
        null !== n && (c.show(e, n), "ontouchstart"in t && (n.addEventListener("touchend", c.hide, !1), n.addEventListener("touchcancel", c.hide, !1)), n.addEventListener("mouseup", c.hide, !1), n.addEventListener("mouseleave", c.hide, !1))
    }

    var s = s || {}, l = document.querySelectorAll.bind(document), c = {
        duration: 750, show: function (t, e) {
            if (2 === t.button)return !1;
            var n = e || this, o = document.createElement("div");
            o.className = "waves-ripple", n.appendChild(o);
            var a = i(n), s = t.pageY - a.top, l = t.pageX - a.left, u = "scale(" + n.clientWidth / 100 * 10 + ")";
            "touches"in t && (s = t.touches[0].pageY - a.top, l = t.touches[0].pageX - a.left), o.setAttribute("data-hold", Date.now()), o.setAttribute("data-scale", u), o.setAttribute("data-x", l), o.setAttribute("data-y", s);
            var d = {top: s + "px", left: l + "px"};
            o.className = o.className + " waves-notransition", o.setAttribute("style", r(d)), o.className = o.className.replace("waves-notransition", ""), d["-webkit-transform"] = u, d["-moz-transform"] = u, d["-ms-transform"] = u, d["-o-transform"] = u, d.transform = u, d.opacity = "1", d["-webkit-transition-duration"] = c.duration + "ms", d["-moz-transition-duration"] = c.duration + "ms", d["-o-transition-duration"] = c.duration + "ms", d["transition-duration"] = c.duration + "ms", d["-webkit-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", d["-moz-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", d["-o-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", d["transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", o.setAttribute("style", r(d))
        }, hide: function (t) {
            u.touchup(t);
            var e = this, n = (1.4 * e.clientWidth, null), i = e.getElementsByClassName("waves-ripple");
            if (!(i.length > 0))return !1;
            n = i[i.length - 1];
            var o = n.getAttribute("data-x"), a = n.getAttribute("data-y"), s = n.getAttribute("data-scale"), l = Date.now() - Number(n.getAttribute("data-hold")), d = 350 - l;
            0 > d && (d = 0), setTimeout(function () {
                var t = {
                    top: a + "px",
                    left: o + "px",
                    opacity: "0",
                    "-webkit-transition-duration": c.duration + "ms",
                    "-moz-transition-duration": c.duration + "ms",
                    "-o-transition-duration": c.duration + "ms",
                    "transition-duration": c.duration + "ms",
                    "-webkit-transform": s,
                    "-moz-transform": s,
                    "-ms-transform": s,
                    "-o-transform": s,
                    transform: s
                };
                n.setAttribute("style", r(t)), setTimeout(function () {
                    try {
                        e.removeChild(n)
                    } catch (t) {
                        return !1
                    }
                }, c.duration)
            }, d)
        }, wrapInput: function (t) {
            for (var e = 0; e < t.length; e++) {
                var n = t[e];
                if ("input" === n.tagName.toLowerCase()) {
                    var i = n.parentNode;
                    if ("i" === i.tagName.toLowerCase() && -1 !== i.className.indexOf("waves-effect"))continue;
                    var r = document.createElement("i");
                    r.className = n.className + " waves-input-wrapper";
                    var o = n.getAttribute("style");
                    o || (o = ""), r.setAttribute("style", o), n.className = "waves-button-input", n.removeAttribute("style"), i.replaceChild(r, n), r.appendChild(n)
                }
            }
        }
    }, u = {
        touches: 0, allowEvent: function (t) {
            var e = !0;
            return "touchstart" === t.type ? u.touches += 1 : "touchend" === t.type || "touchcancel" === t.type ? setTimeout(function () {
                u.touches > 0 && (u.touches -= 1)
            }, 500) : "mousedown" === t.type && u.touches > 0 && (e = !1), e
        }, touchup: function (t) {
            u.allowEvent(t)
        }
    };
    s.displayEffect = function (e) {
        e = e || {}, "duration"in e && (c.duration = e.duration), c.wrapInput(l(".waves-effect")), "ontouchstart"in t && document.body.addEventListener("touchstart", a, !1), document.body.addEventListener("mousedown", a, !1)
    }, s.attach = function (e) {
        "input" === e.tagName.toLowerCase() && (c.wrapInput([e]), e = e.parentElement), "ontouchstart"in t && e.addEventListener("touchstart", a, !1), e.addEventListener("mousedown", a, !1)
    }, t.Waves = s, document.addEventListener("DOMContentLoaded", function () {
        s.displayEffect()
    }, !1)
}(window), Materialize.toast = function (t, e, n, i) {
    function r(t) {
        var e = document.createElement("div");
        if (e.classList.add("toast"), n)for (var r = n.split(" "), o = 0, a = r.length; a > o; o++)e.classList.add(r[o]);
        e.innerHTML = t;
        var s = new Hammer(e, {prevent_default: !1});
        return s.on("pan", function (t) {
            var n = t.deltaX, i = 80;
            e.classList.contains("panning") || e.classList.add("panning");
            var r = 1 - Math.abs(n / i);
            0 > r && (r = 0), Vel(e, {left: n, opacity: r}, {duration: 50, queue: !1, easing: "easeOutQuad"})
        }), s.on("panend", function (t) {
            var n = t.deltaX, r = 80;
            Math.abs(n) > r ? Vel(e, {marginTop: "-40px"}, {
                duration: 375,
                easing: "easeOutExpo",
                queue: !1,
                complete: function () {
                    "function" == typeof i && i(), e.parentNode.removeChild(e)
                }
            }) : (e.classList.remove("panning"), Vel(e, {left: 0, opacity: 1}, {
                duration: 300,
                easing: "easeOutExpo",
                queue: !1
            }))
        }), e
    }

    n = n || "";
    var o = document.getElementById("toast-container");
    if (null === o) {
        var o = document.createElement("div");
        o.id = "toast-container", document.body.appendChild(o)
    }
    var a = r(t);
    o.appendChild(a), a.style.top = "35px", a.style.opacity = 0, Vel(a, {top: "0px", opacity: 1}, {
        duration: 300,
        easing: "easeOutCubic",
        queue: !1
    });
    var s = e, l = setInterval(function () {
        null === a.parentNode && window.clearInterval(l), a.classList.contains("panning") || (s -= 20), 0 >= s && (Vel(a, {
            opacity: 0,
            marginTop: "-40px"
        }, {
            duration: 375, easing: "easeOutExpo", queue: !1, complete: function () {
                "function" == typeof i && i(), this[0].parentNode.removeChild(this[0])
            }
        }), window.clearInterval(l))
    }, 20)
}, function (t) {
    var e = {
        init: function (e) {
            var n = {menuWidth: 240, edge: "left", closeOnClick: !1};
            e = t.extend(n, e), t(this).each(function () {
                function n(n) {
                    o = !1, a = !1, t("#sidenav-overlay").velocity({opacity: 0}, {
                        duration: 200,
                        queue: !1,
                        easing: "easeOutQuad",
                        complete: function () {
                            t(this).remove()
                        }
                    }), "left" === e.edge ? (t(".drag-target").css({
                        width: "",
                        right: "",
                        left: "0"
                    }), r.velocity({left: -1 * (e.menuWidth + 10)}, {
                        duration: 200,
                        queue: !1,
                        easing: "easeOutCubic",
                        complete: function () {
                            1 == n && (r.removeAttr("style"), r.css("width", e.menuWidth))
                        }
                    })) : (t(".drag-target").css({
                        width: "",
                        right: "0",
                        left: ""
                    }), r.velocity({right: -1 * (e.menuWidth + 10)}, {
                        duration: 200,
                        queue: !1,
                        easing: "easeOutCubic",
                        complete: function () {
                            1 == n && (r.removeAttr("style"), r.css("width", e.menuWidth))
                        }
                    }))
                }

                var i = t(this), r = t("#" + i.attr("data-activates"));
                240 != e.menuWidth && r.css("width", e.menuWidth), t("body").append(t('<div class="drag-target"></div>')), "left" == e.edge ? (r.css("left", -1 * (e.menuWidth + 10)), t(".drag-target").css({left: 0})) : (r.addClass("right-aligned").css("right", -1 * (e.menuWidth + 10)).css("left", ""), t(".drag-target").css({right: 0})), r.hasClass("fixed") && t(window).width() > 992 && r.css("left", 0), r.hasClass("fixed") && t(window).resize(function () {
                    window.innerWidth > 992 ? 0 != t("#sidenav-overlay").css("opacity") && a ? n(!0) : (r.removeAttr("style"), r.css("width", e.menuWidth)) : a === !1 && ("left" === e.edge ? r.css("left", -1 * (e.menuWidth + 10)) : r.css("right", -1 * (e.menuWidth + 10)))
                }), 1 == e.closeOnClick && r.on("click.itemclick", "a:not(.collapsible-header)", function () {
                    n()
                });
                var o = !1, a = !1;
                t(".drag-target").on("click", function () {
                    n()
                }), t(".drag-target").hammer({prevent_default: !1}).bind("pan", function (i) {
                    if ("touch" == i.gesture.pointerType) {
                        var o = (i.gesture.direction, i.gesture.center.x);
                        if (i.gesture.center.y, i.gesture.velocityX, 0 === t("#sidenav-overlay").length) {
                            var s = t('<div id="sidenav-overlay"></div>');
                            s.css("opacity", 0).click(function () {
                                n()
                            }), t("body").append(s)
                        }
                        if ("left" === e.edge && (o > e.menuWidth ? o = e.menuWidth : 0 > o && (o = 0)), "left" === e.edge)o < e.menuWidth / 2 ? a = !1 : o >= e.menuWidth / 2 && (a = !0), r.css("left", o - e.menuWidth); else {
                            o < t(window).width() - e.menuWidth / 2 ? a = !0 : o >= t(window).width() - e.menuWidth / 2 && (a = !1);
                            var l = -1 * (o - e.menuWidth / 2);
                            l > 0 && (l = 0), r.css("right", l)
                        }
                        if ("left" === e.edge) {
                            var c = o / e.menuWidth;
                            t("#sidenav-overlay").velocity({opacity: c}, {
                                duration: 50,
                                queue: !1,
                                easing: "easeOutQuad"
                            })
                        } else {
                            var c = Math.abs((o - t(window).width()) / e.menuWidth);
                            t("#sidenav-overlay").velocity({opacity: c}, {
                                duration: 50,
                                queue: !1,
                                easing: "easeOutQuad"
                            })
                        }
                    }
                }).bind("panend", function (n) {
                    if ("touch" == n.gesture.pointerType) {
                        var i = n.gesture.velocityX;
                        o = !1, "left" === e.edge ? a && .3 >= i || -.5 > i ? (r.velocity({left: 0}, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), t("#sidenav-overlay").velocity({opacity: 1}, {
                            duration: 50,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), t(".drag-target").css({
                            width: "50%",
                            right: 0,
                            left: ""
                        })) : (!a || i > .3) && (r.velocity({left: -1 * (e.menuWidth + 10)}, {
                            duration: 200,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), t("#sidenav-overlay").velocity({opacity: 0}, {
                            duration: 200,
                            queue: !1,
                            easing: "easeOutQuad",
                            complete: function () {
                                t(this).remove()
                            }
                        }), t(".drag-target").css({
                            width: "10px",
                            right: "",
                            left: 0
                        })) : a && i >= -.3 || i > .5 ? (r.velocity({right: 0}, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), t("#sidenav-overlay").velocity({opacity: 1}, {
                            duration: 50,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), t(".drag-target").css({
                            width: "50%",
                            right: "",
                            left: 0
                        })) : (!a || -.3 > i) && (r.velocity({right: -1 * (e.menuWidth + 10)}, {
                            duration: 200,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), t("#sidenav-overlay").velocity({opacity: 0}, {
                            duration: 200,
                            queue: !1,
                            easing: "easeOutQuad",
                            complete: function () {
                                t(this).remove()
                            }
                        }), t(".drag-target").css({width: "10px", right: 0, left: ""}))
                    }
                }), i.click(function () {
                    if (1 == a)a = !1, o = !1, n(); else {
                        "left" === e.edge ? (t(".drag-target").css({
                            width: "50%",
                            right: 0,
                            left: ""
                        }), r.velocity({left: 0}, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        })) : (t(".drag-target").css({
                            width: "50%",
                            right: "",
                            left: 0
                        }), r.velocity({right: 0}, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), r.css("left", ""));
                        var i = t('<div id="sidenav-overlay"></div>');
                        i.css("opacity", 0).click(function () {
                            a = !1, o = !1, n(), i.velocity({opacity: 0}, {
                                duration: 300,
                                queue: !1,
                                easing: "easeOutQuad",
                                complete: function () {
                                    t(this).remove()
                                }
                            })
                        }), t("body").append(i), i.velocity({opacity: 1}, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad",
                            complete: function () {
                                a = !0, o = !1
                            }
                        })
                    }
                    return !1
                })
            })
        }, show: function () {
            this.trigger("click")
        }, hide: function () {
            t("#sidenav-overlay").trigger("click")
        }
    };
    t.fn.sideNav = function (n) {
        return e[n] ? e[n].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof n && n ? void t.error("Method " + n + " does not exist on jQuery.tooltip") : e.init.apply(this, arguments)
    }
}(jQuery), function (t) {
    function e(e, n, i, r) {
        var o = t();
        return t.each(a, function (t, a) {
            if (a.height() > 0) {
                var s = a.offset().top, l = a.offset().left, c = l + a.width(), u = s + a.height(), d = !(l > n || r > c || s > i || e > u);
                d && o.push(a)
            }
        }), o
    }

    function n() {
        ++c;
        var n = o.scrollTop(), i = o.scrollLeft(), r = i + o.width(), a = n + o.height(), l = e(n + u.top + 200, r + u.right, a + u.bottom, i + u.left);
        t.each(l, function (t, e) {
            var n = e.data("scrollSpy:ticks");
            "number" != typeof n && e.triggerHandler("scrollSpy:enter"), e.data("scrollSpy:ticks", c)
        }), t.each(s, function (t, e) {
            var n = e.data("scrollSpy:ticks");
            "number" == typeof n && n !== c && (e.triggerHandler("scrollSpy:exit"), e.data("scrollSpy:ticks", null))
        }), s = l
    }

    function i() {
        o.trigger("scrollSpy:winSize")
    }

    function r(t, e, n) {
        var i, r, o, a = null, s = 0;
        n || (n = {});
        var l = function () {
            s = n.leading === !1 ? 0 : d(), a = null, o = t.apply(i, r), i = r = null
        };
        return function () {
            var c = d();
            s || n.leading !== !1 || (s = c);
            var u = e - (c - s);
            return i = this, r = arguments, 0 >= u ? (clearTimeout(a), a = null, s = c, o = t.apply(i, r), i = r = null) : a || n.trailing === !1 || (a = setTimeout(l, u)), o
        }
    }

    var o = t(window), a = [], s = [], l = !1, c = 0, u = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    }, d = Date.now || function () {
            return (new Date).getTime()
        };
    t.scrollSpy = function (e, i) {
        var s = [];
        e = t(e), e.each(function (e, n) {
            a.push(t(n)), t(n).data("scrollSpy:id", e), t("a[href=#" + t(n).attr("id") + "]").click(function (e) {
                e.preventDefault();
                var n = t(this.hash).offset().top + 1;
                t("html, body").animate({scrollTop: n - 200}, {duration: 400, queue: !1, easing: "easeOutCubic"})
            })
        }), i = i || {throttle: 100}, u.top = i.offsetTop || 0, u.right = i.offsetRight || 0, u.bottom = i.offsetBottom || 0, u.left = i.offsetLeft || 0;
        var c = r(n, i.throttle || 100), d = function () {
            t(document).ready(c)
        };
        return l || (o.on("scroll", d), o.on("resize", d), l = !0), setTimeout(d, 0), e.on("scrollSpy:enter", function () {
            s = t.grep(s, function (t) {
                return 0 != t.height()
            });
            var e = t(this);
            s[0] ? (t("a[href=#" + s[0].attr("id") + "]").removeClass("active"), e.data("scrollSpy:id") < s[0].data("scrollSpy:id") ? s.unshift(t(this)) : s.push(t(this))) : s.push(t(this)), t("a[href=#" + s[0].attr("id") + "]").addClass("active")
        }), e.on("scrollSpy:exit", function () {
            if (s = t.grep(s, function (t) {
                    return 0 != t.height()
                }), s[0]) {
                t("a[href=#" + s[0].attr("id") + "]").removeClass("active");
                var e = t(this);
                s = t.grep(s, function (t) {
                    return t.attr("id") != e.attr("id")
                }), s[0] && t("a[href=#" + s[0].attr("id") + "]").addClass("active")
            }
        }), e
    }, t.winSizeSpy = function (e) {
        return t.winSizeSpy = function () {
            return o
        }, e = e || {throttle: 100}, o.on("resize", r(i, e.throttle || 100))
    }, t.fn.scrollSpy = function (e) {
        return t.scrollSpy(t(this), e)
    }
}(jQuery), function (t) {
    t(document).ready(function () {
        function e(e) {
            i.text(e.val() + "\n");
            var n = i.html().replace(/\n/g, "<br>");
            i.html(n), e.is(":visible") ? i.css("width", e.width()) : i.css("width", t(window).width() / 2), e.css("height", i.height())
        }

        Materialize.updateTextFields = function () {
            var e = "input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";
            t(e).each(function (e, n) {
                t(n).val().length > 0 || void 0 !== t(this).attr("placeholder") ? t(this).siblings("label, i").addClass("active") : t(this).siblings("label, i").removeClass("active")
            })
        };
        var n = "input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";
        t("input[autofocus]").siblings("label, i").addClass("active"), t(document).on("change", n, function () {
            (0 !== t(this).val().length || void 0 !== t(this).attr("placeholder")) && t(this).siblings("label, i").addClass("active"), validate_field(t(this))
        }), t(document).ready(function () {
            Materialize.updateTextFields()
        }), t(document).on("reset", function (e) {
            t(e.target).is("form") && (t(this).find(n).removeClass("valid").removeClass("invalid"), t(this).find(n).siblings("label, i").removeClass("active"), t(this).find("select.initialized").each(function () {
                var e = t(this).find("option[selected]").text();
                t(this).siblings("input.select-dropdown").val(e)
            }))
        }), t(document).on("focus", n, function () {
            t(this).siblings("label, i").addClass("active")
        }), t(document).on("blur", n, function () {
            0 === t(this).val().length && void 0 === t(this).attr("placeholder") && t(this).siblings("label, i").removeClass("active"), validate_field(t(this))
        }), validate_field = function (t) {
            0 === t.val().length ? t.hasClass("validate") && (t.removeClass("valid"), t.removeClass("invalid")) : t.hasClass("validate") && (t.is(":valid") ? (t.removeClass("invalid"), t.addClass("valid")) : (t.removeClass("valid"), t.addClass("invalid")))
        };
        var i = t(".hiddendiv").first();
        i.length || (i = t('<div class="hiddendiv common"></div>'), t("body").append(i));
        var r = ".materialize-textarea";
        t(r).each(function () {
            var n = t(this);
            n.val().length && e(n)
        }), t("body").on("keyup keydown", r, function () {
            e(t(this))
        }), t(".file-field").each(function () {
            var e = t(this).find("input.file-path");
            t(this).find('input[type="file"]').change(function () {
                e.val(t(this)[0].files[0].name), e.trigger("change")
            })
        });
        var o = "input[type=range]", a = !1;
        t(o).each(function () {
            var e = t('<span class="thumb"><span class="value"></span></span>');
            t(this).after(e)
        });
        var s = ".range-field";
        t(document).on("mousedown", s, function (e) {
            var n = t(this).children(".thumb");
            n.length <= 0 && (n = t('<span class="thumb"><span class="value"></span></span>'), t(this).append(n)), a = !0, t(this).addClass("active"), n.hasClass("active") || n.velocity({
                height: "30px",
                width: "30px",
                top: "-20px",
                marginLeft: "-15px"
            }, {duration: 300, easing: "easeOutExpo"});
            var i = e.pageX - t(this).offset().left, r = t(this).outerWidth();
            0 > i ? i = 0 : i > r && (i = r), n.addClass("active").css("left", i), n.find(".value").html(t(this).children("input[type=range]").val())
        }), t(document).on("mouseup", s, function () {
            a = !1, t(this).removeClass("active")
        }), t(document).on("mousemove", s, function (e) {
            var n = t(this).children(".thumb");
            if (a) {
                n.hasClass("active") || n.velocity({
                    height: "30px",
                    width: "30px",
                    top: "-20px",
                    marginLeft: "-15px"
                }, {duration: 300, easing: "easeOutExpo"});
                var i = e.pageX - t(this).offset().left, r = t(this).outerWidth();
                0 > i ? i = 0 : i > r && (i = r), n.addClass("active").css("left", i), n.find(".value").html(t(this).children("input[type=range]").val())
            }
        }), t(document).on("mouseout", s, function () {
            if (!a) {
                var e = t(this).children(".thumb");
                e.hasClass("active") && e.velocity({
                    height: "0",
                    width: "0",
                    top: "10px",
                    marginLeft: "-6px"
                }, {duration: 100}), e.removeClass("active")
            }
        })
    }), t.fn.material_select = function (e) {
        t(this).each(function () {
            if ($select = t(this), !$select.hasClass("browser-default")) {
                var n = $select.data("select-id");
                if (n && ($select.parent().find("i").remove(), $select.parent().find("input").remove(), $select.unwrap(), t("ul#select-options-" + n).remove()), "destroy" === e)return void $select.data("select-id", null).removeClass("initialized");
                var i = Materialize.guid();
                $select.data("select-id", i);
                var r = t('<div class="select-wrapper"></div>');
                r.addClass($select.attr("class"));
                var o = t('<ul id="select-options-' + i + '" class="dropdown-content select-dropdown"></ul>'), a = $select.children("option");
                if (void 0 !== $select.find("option:selected"))var s = $select.find("option:selected"); else var s = o.first();
                a.each(function () {
                    o.append(t('<li class="' + (t(this).is(":disabled") ? "disabled" : "") + '"><span>' + t(this).html() + "</span></li>"))
                }), o.find("li").each(function (n) {
                    var i = $select;
                    t(this).click(function () {
                        t(this).hasClass("disabled") || (i.find("option").eq(n).prop("selected", !0), i.trigger("change"), i.siblings("input.select-dropdown").val(t(this).text()), "undefined" != typeof e && e())
                    })
                }), $select.wrap(r);
                var l = t('<i class="mdi-navigation-arrow-drop-down"></i>');
                $select.is(":disabled") && l.addClass("disabled");
                var c = t('<input type="text" class="select-dropdown" readonly="true" ' + ($select.is(":disabled") ? "disabled" : "") + ' data-activates="select-options-' + i + '" value="' + s.html() + '"/>');
                $select.before(c), c.before(l), t("body").append(o), $select.is(":disabled") || c.dropdown({hover: !1}), $select.attr("tabindex") && t(c[0]).attr("tabindex", $select.attr("tabindex")), $select.addClass("initialized"), c.on("focus", function () {
                    t(this).trigger("open"), s = t(this).val(), selectedOption = o.find("li").filter(function () {
                        return t(this).text().toLowerCase() === s.toLowerCase()
                    })[0], activateOption(o, selectedOption)
                }), c.on("blur", function () {
                    t(this).trigger("close")
                }), activateOption = function (e, n) {
                    e.find("li.active").removeClass("active"), t(n).addClass("active"), e.scrollTo(n)
                }, filterQuery = [], onKeyDown = function (e) {
                    return 9 == e.which ? void c.trigger("close") : 40 != e.which || o.is(":visible") ? void((13 != e.which || o.is(":visible")) && (e.preventDefault(), letter = String.fromCharCode(e.which).toLowerCase(), letter && (filterQuery.push(letter), string = filterQuery.join(""), newOption = o.find("li").filter(function () {
                        return 0 === t(this).text().toLowerCase().indexOf(string)
                    })[0], newOption && activateOption(o, newOption)), 13 == e.which && (activeOption = o.find("li.active:not(.disabled)")[0], activeOption && (t(activeOption).trigger("click"), c.trigger("close"))), 40 == e.which && (newOption = o.find("li.active").next("li:not(.disabled)")[0], newOption && activateOption(o, newOption)), 27 == e.which && c.trigger("close"), 38 == e.which && (newOption = o.find("li.active").prev("li:not(.disabled)")[0], newOption && activateOption(o, newOption)), setTimeout(function () {
                        filterQuery = []
                    }, 1e3))) : void c.trigger("open")
                }, c.on("keydown", onKeyDown)
            }
        })
    }
}(jQuery), function (t) {
    t.fn.slider = function (e) {
        var n = {indicators: !0, height: 400, transition: 500, interval: 6e3};
        return e = t.extend(n, e), this.each(function () {
            function n(t, e) {
                t.hasClass("center-align") ? t.velocity({opacity: 0, translateY: -100}, {
                    duration: e,
                    queue: !1
                }) : t.hasClass("right-align") ? t.velocity({opacity: 0, translateX: 100}, {
                    duration: e,
                    queue: !1
                }) : t.hasClass("left-align") && t.velocity({opacity: 0, translateX: -100}, {duration: e, queue: !1})
            }

            function i(t) {
                t >= s.length ? t = 0 : 0 > t && (t = s.length - 1), l = a.find(".active").index(), l != t && (r = s.eq(l), $caption = r.find(".caption"), r.removeClass("active"), r.velocity({opacity: 0}, {
                    duration: e.transition,
                    queue: !1,
                    easing: "easeOutQuad",
                    complete: function () {
                        s.not(".active").velocity({opacity: 0, translateX: 0, translateY: 0}, {duration: 0, queue: !1})
                    }
                }), n($caption, e.transition), e.indicators && c.eq(l).removeClass("active"), s.eq(t).velocity({opacity: 1}, {
                    duration: e.transition,
                    queue: !1,
                    easing: "easeOutQuad"
                }), s.eq(t).find(".caption").velocity({
                    opacity: 1,
                    translateX: 0,
                    translateY: 0
                }, {
                    duration: e.transition,
                    delay: e.transition,
                    queue: !1,
                    easing: "easeOutQuad"
                }), s.eq(t).addClass("active"), e.indicators && c.eq(t).addClass("active"))
            }

            var r, o = t(this), a = o.find("ul.slides").first(), s = a.find("li"), l = a.find(".active").index();
            if (-1 != l && (r = s.eq(l)), 400 != e.height && (o.height(e.height + 40), a.height(e.height)), s.find(".caption").each(function () {
                    n(t(this), 0)
                }), s.find("img").each(function () {
                    t(this).css("background-image", "url(" + t(this).attr("src") + ")"), t(this).attr("src", "data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==")
                }), e.indicators) {
                var c = t('<ul class="indicators"></ul>');
                s.each(function () {
                    var n = t('<li class="indicator-item"></li>');
                    n.click(function () {
                        var n = a.parent(), r = n.find(t(this)).index();
                        i(r), clearInterval($interval), $interval = setInterval(function () {
                            l = a.find(".active").index(), s.length == l + 1 ? l = 0 : l += 1, i(l)
                        }, e.transition + e.interval)
                    }), c.append(n)
                }), o.append(c), c = o.find("ul.indicators").find("li.indicator-item")
            }
            r ? r.show() : (s.first().addClass("active").velocity({opacity: 1}, {
                duration: e.transition,
                queue: !1,
                easing: "easeOutQuad"
            }), l = 0, r = s.eq(l), e.indicators && c.eq(l).addClass("active")), r.find("img").each(function () {
                r.find(".caption").velocity({opacity: 1, translateX: 0, translateY: 0}, {
                    duration: e.transition,
                    queue: !1,
                    easing: "easeOutQuad"
                })
            }), $interval = setInterval(function () {
                l = a.find(".active").index(), i(l + 1)
            }, e.transition + e.interval);
            var u = !1, d = !1, h = !1;
            o.hammer({prevent_default: !1}).bind("pan", function (t) {
                if ("touch" === t.gesture.pointerType) {
                    clearInterval($interval);
                    var e = t.gesture.direction, n = t.gesture.deltaX, i = t.gesture.velocityX;
                    $curr_slide = a.find(".active"), $curr_slide.velocity({translateX: n}, {
                        duration: 50,
                        queue: !1,
                        easing: "easeOutQuad"
                    }), 4 === e && (n > o.innerWidth() / 2 || -.65 > i) ? h = !0 : 2 === e && (n < -1 * o.innerWidth() / 2 || i > .65) && (d = !0);
                    var r;
                    d && (r = $curr_slide.next(), 0 === r.length && (r = s.first()), r.velocity({opacity: 1}, {
                        duration: 300,
                        queue: !1,
                        easing: "easeOutQuad"
                    })), h && (r = $curr_slide.prev(), 0 === r.length && (r = s.last()), r.velocity({opacity: 1}, {
                        duration: 300,
                        queue: !1,
                        easing: "easeOutQuad"
                    }))
                }
            }).bind("panend", function (t) {
                "touch" === t.gesture.pointerType && ($curr_slide = a.find(".active"), u = !1, curr_index = a.find(".active").index(), h || d ? d ? (i(curr_index + 1), $curr_slide.velocity({translateX: -1 * o.innerWidth()}, {
                    duration: 300,
                    queue: !1,
                    easing: "easeOutQuad",
                    complete: function () {
                        $curr_slide.velocity({opacity: 0, translateX: 0}, {duration: 0, queue: !1})
                    }
                })) : h && (i(curr_index - 1), $curr_slide.velocity({translateX: o.innerWidth()}, {
                    duration: 300,
                    queue: !1,
                    easing: "easeOutQuad",
                    complete: function () {
                        $curr_slide.velocity({opacity: 0, translateX: 0}, {duration: 0, queue: !1})
                    }
                })) : $curr_slide.velocity({translateX: 0}, {
                    duration: 300,
                    queue: !1,
                    easing: "easeOutQuad"
                }), d = !1, h = !1, clearInterval($interval), $interval = setInterval(function () {
                    l = a.find(".active").index(), s.length == l + 1 ? l = 0 : l += 1, i(l)
                }, e.transition + e.interval))
            })
        })
    }
}(jQuery), function (t) {
    t(document).ready(function () {
        t(document).on("click.card", ".card", function (e) {
            t(this).find(".card-reveal").length && (t(e.target).is(t(".card-reveal .card-title")) || t(e.target).is(t(".card-reveal .card-title i")) ? t(this).find(".card-reveal").velocity({translateY: 0}, {
                duration: 225,
                queue: !1,
                easing: "easeInOutQuad",
                complete: function () {
                    t(this).css({display: "none"})
                }
            }) : (t(e.target).is(t(".card .activator")) || t(e.target).is(t(".card .activator i"))) && t(this).find(".card-reveal").css({display: "block"}).velocity("stop", !1).velocity({translateY: "-100%"}, {
                duration: 300,
                queue: !1,
                easing: "easeInOutQuad"
            }))
        })
    })
}(jQuery), function (t) {
    t(document).ready(function () {
        t.fn.pushpin = function (e) {
            var n = {top: 0, bottom: 1 / 0, offset: 0};
            return e = t.extend(n, e), $index = 0, this.each(function () {
                function n(t) {
                    t.removeClass("pin-top"), t.removeClass("pinned"), t.removeClass("pin-bottom")
                }

                function i(i, r) {
                    i.each(function () {
                        e.top <= r && e.bottom >= r && !t(this).hasClass("pinned") && (n(t(this)), t(this).css("top", e.offset), t(this).addClass("pinned")), r < e.top && !t(this).hasClass("pin-top") && (n(t(this)), t(this).css("top", 0), t(this).addClass("pin-top")), r > e.bottom && !t(this).hasClass("pin-bottom") && (n(t(this)), t(this).addClass("pin-bottom"), t(this).css("top", e.bottom - a))
                    })
                }

                var r = Materialize.guid(), o = t(this), a = t(this).offset().top;
                i(o, t(window).scrollTop()), t(window).on("scroll." + r, function () {
                    var n = t(window).scrollTop() + e.offset;
                    i(o, n)
                })
            })
        }
    })
}(jQuery), function (t) {
    t(document).ready(function () {
        t.fn.reverse = [].reverse, t(document).on("mouseenter.fixedActionBtn", ".fixed-action-btn", function () {
            var e = t(this);
            e.find("ul .btn-floating").velocity({scaleY: ".4", scaleX: ".4", translateY: "40px"}, {duration: 0});
            var n = 0;
            e.find("ul .btn-floating").reverse().each(function () {
                t(this).velocity({opacity: "1", scaleX: "1", scaleY: "1", translateY: "0"}, {
                    duration: 80,
                    delay: n
                }), n += 40
            })
        }), t(document).on("mouseleave.fixedActionBtn", ".fixed-action-btn", function () {
            var e = t(this);
            e.find("ul .btn-floating").velocity("stop", !0), e.find("ul .btn-floating").velocity({
                opacity: "0",
                scaleX: ".4",
                scaleY: ".4",
                translateY: "40px"
            }, {duration: 80})
        })
    })
}(jQuery), function (t) {
    Materialize.fadeInImage = function (e) {
        var n = t(e);
        n.css({opacity: 0}), t(n).velocity({opacity: 1}, {
            duration: 650,
            queue: !1,
            easing: "easeOutSine"
        }), t(n).velocity({opacity: 1}, {
            duration: 1300, queue: !1, easing: "swing", step: function (e, n) {
                n.start = 100;
                var i = e / 100, r = 150 - (100 - e) / 1.75;
                100 > r && (r = 100), e >= 0 && t(this).css({
                    "-webkit-filter": "grayscale(" + i + ")brightness(" + r + "%)",
                    filter: "grayscale(" + i + ")brightness(" + r + "%)"
                })
            }
        })
    }, Materialize.showStaggeredList = function (e) {
        var n = 0;
        t(e).find("li").velocity({translateX: "-100px"}, {duration: 0}), t(e).find("li").each(function () {
            t(this).velocity({opacity: "1", translateX: "0"}, {duration: 800, delay: n, easing: [60, 10]}), n += 120
        })
    }, t(document).ready(function () {
        var e = !1, n = !1;
        t(".dismissable").each(function () {
            t(this).hammer({prevent_default: !1}).bind("pan", function (i) {
                if ("touch" === i.gesture.pointerType) {
                    var r = t(this), o = i.gesture.direction, a = i.gesture.deltaX, s = i.gesture.velocityX;
                    r.velocity({translateX: a}, {
                        duration: 50,
                        queue: !1,
                        easing: "easeOutQuad"
                    }), 4 === o && (a > r.innerWidth() / 2 || -.75 > s) ? e = !0 : 2 === o && (a < -1 * r.innerWidth() / 2 || s > .75) && (n = !0)
                }
            }).bind("panend", function (i) {
                if ("touch" === i.gesture.pointerType) {
                    var r = t(this);
                    if (e || n) {
                        var o;
                        o = e ? r.innerWidth() : -1 * r.innerWidth(), r.velocity({translateX: o}, {
                            duration: 100,
                            queue: !1,
                            easing: "easeOutQuad",
                            complete: function () {
                                r.css("border", "none"), r.velocity({height: 0, padding: 0}, {
                                    duration: 200,
                                    queue: !1,
                                    easing: "easeOutQuad",
                                    complete: function () {
                                        r.remove()
                                    }
                                })
                            }
                        })
                    } else r.velocity({translateX: 0}, {duration: 100, queue: !1, easing: "easeOutQuad"});
                    e = !1, n = !1
                }
            })
        })
    })
}(jQuery), function () {
    Materialize.scrollFire = function (t) {
        var e = !1;
        window.addEventListener("scroll", function () {
            e = !0
        }), setInterval(function () {
            if (e) {
                e = !1;
                for (var n = window.pageYOffset + window.innerHeight, i = 0; i < t.length; i++) {
                    var r = t[i], o = r.selector, a = r.offset, s = r.callback, l = document.querySelector(o);
                    if (null !== l) {
                        var c = l.getBoundingClientRect().top + document.body.scrollTop;
                        if (n > c + a && 1 != r.done) {
                            var u = new Function(s);
                            u(), r.done = !0
                        }
                    }
                }
            }
        }, 100)
    }
}(jQuery), function (t) {
    "function" == typeof define && define.amd ? define("picker", ["jquery"], t) : "object" == typeof exports ? module.exports = t(require("jquery")) : this.Picker = t(jQuery)
}(function (t) {
    function e(o, a, l, d) {
        function h() {
            return e._.node("div", e._.node("div", e._.node("div", e._.node("div", T.component.nodes(b.open), x.box), x.wrap), x.frame), x.holder)
        }

        function p() {
            C.data(a, T).addClass(x.input).attr("tabindex", -1).val(C.data("value") ? T.get("select", w.format) : o.value), w.editable || C.on("focus." + b.id + " click." + b.id, function (t) {
                t.preventDefault(), T.$root[0].focus()
            }).on("keydown." + b.id, v), r(o, {haspopup: !0, expanded: !1, readonly: !1, owns: o.id + "_root"})
        }

        function f() {
            T.$root.on({
                keydown: v, focusin: function (t) {
                    T.$root.removeClass(x.focused), t.stopPropagation()
                }, "mousedown click": function (e) {
                    var n = e.target;
                    n != T.$root.children()[0] && (e.stopPropagation(), "mousedown" != e.type || t(n).is("input, select, textarea, button, option") || (e.preventDefault(), T.$root[0].focus()))
                }
            }).on({
                focus: function () {
                    C.addClass(x.target)
                }, blur: function () {
                    C.removeClass(x.target)
                }
            }).on("focus.toOpen", m).on("click", "[data-pick], [data-nav], [data-clear], [data-close]", function () {
                var e = t(this), n = e.data(), i = e.hasClass(x.navDisabled) || e.hasClass(x.disabled), r = s();
                r = r && (r.type || r.href), (i || r && !t.contains(T.$root[0], r)) && T.$root[0].focus(), !i && n.nav ? T.set("highlight", T.component.item.highlight, {nav: n.nav}) : !i && "pick"in n ? T.set("select", n.pick) : n.clear ? T.clear().close(!0) : n.close && T.close(!0)
            }), r(T.$root[0], "hidden", !0)
        }

        function g() {
            var e;
            w.hiddenName === !0 ? (e = o.name, o.name = "") : (e = ["string" == typeof w.hiddenPrefix ? w.hiddenPrefix : "", "string" == typeof w.hiddenSuffix ? w.hiddenSuffix : "_submit"], e = e[0] + o.name + e[1]), T._hidden = t('<input type=hidden name="' + e + '"' + (C.data("value") || o.value ? ' value="' + T.get("select", w.formatSubmit) + '"' : "") + ">")[0], C.on("change." + b.id, function () {
                T._hidden.value = o.value ? T.get("select", w.formatSubmit) : ""
            }), w.container ? t(w.container).append(T._hidden) : C.after(T._hidden)
        }

        function v(t) {
            var e = t.keyCode, n = /^(8|46)$/.test(e);
            return 27 == e ? (T.close(), !1) : void((32 == e || n || !b.open && T.component.key[e]) && (t.preventDefault(), t.stopPropagation(), n ? T.clear().close() : T.open()))
        }

        function m(t) {
            t.stopPropagation(), "focus" == t.type && T.$root.addClass(x.focused), T.open()
        }

        if (!o)return e;
        var y = !1, b = {id: o.id || "P" + Math.abs(~~(Math.random() * new Date))}, w = l ? t.extend(!0, {}, l.defaults, d) : d || {}, x = t.extend({}, e.klasses(), w.klass), C = t(o), S = function () {
            return this.start()
        }, T = S.prototype = {
            constructor: S, $node: C, start: function () {
                return b && b.start ? T : (b.methods = {}, b.start = !0, b.open = !1, b.type = o.type, o.autofocus = o == s(), o.readOnly = !w.editable, o.id = o.id || b.id, "text" != o.type && (o.type = "text"), T.component = new l(T, w), T.$root = t(e._.node("div", h(), x.picker, 'id="' + o.id + '_root" tabindex="0"')), f(), w.formatSubmit && g(), p(), w.container ? t(w.container).append(T.$root) : C.after(T.$root), T.on({
                    start: T.component.onStart,
                    render: T.component.onRender,
                    stop: T.component.onStop,
                    open: T.component.onOpen,
                    close: T.component.onClose,
                    set: T.component.onSet
                }).on({
                    start: w.onStart, render: w.onRender, stop: w.onStop, open: w.onOpen, close: w.onClose, set: w.onSet
                }), y = n(T.$root.children()[0]), o.autofocus && T.open(), T.trigger("start").trigger("render"))
            }, render: function (t) {
                return t ? T.$root.html(h()) : T.$root.find("." + x.box).html(T.component.nodes(b.open)), T.trigger("render")
            }, stop: function () {
                return b.start ? (T.close(), T._hidden && T._hidden.parentNode.removeChild(T._hidden), T.$root.remove(), C.removeClass(x.input).removeData(a), setTimeout(function () {
                    C.off("." + b.id)
                }, 0), o.type = b.type, o.readOnly = !1, T.trigger("stop"), b.methods = {}, b.start = !1, T) : T
            }, open: function (n) {
                return b.open ? T : (C.addClass(x.active), r(o, "expanded", !0), setTimeout(function () {
                    T.$root.addClass(x.opened), r(T.$root[0], "hidden", !1)
                }, 0), n !== !1 && (b.open = !0, y && u.css("overflow", "hidden").css("padding-right", "+=" + i()), T.$root[0].focus(), c.on("click." + b.id + " focusin." + b.id, function (t) {
                    var e = t.target;
                    e != o && e != document && 3 != t.which && T.close(e === T.$root.children()[0])
                }).on("keydown." + b.id, function (n) {
                    var i = n.keyCode, r = T.component.key[i], o = n.target;
                    27 == i ? T.close(!0) : o != T.$root[0] || !r && 13 != i ? t.contains(T.$root[0], o) && 13 == i && (n.preventDefault(), o.click()) : (n.preventDefault(), r ? e._.trigger(T.component.key.go, T, [e._.trigger(r)]) : T.$root.find("." + x.highlighted).hasClass(x.disabled) || T.set("select", T.component.item.highlight).close())
                })), T.trigger("open"))
            }, close: function (t) {
                return t && (T.$root.off("focus.toOpen")[0].focus(), setTimeout(function () {
                    T.$root.on("focus.toOpen", m)
                }, 0)), C.removeClass(x.active), r(o, "expanded", !1), setTimeout(function () {
                    T.$root.removeClass(x.opened + " " + x.focused), r(T.$root[0], "hidden", !0)
                }, 0), b.open ? (b.open = !1, y && u.css("overflow", "").css("padding-right", "-=" + i()), c.off("." + b.id), T.trigger("close")) : T
            }, clear: function (t) {
                return T.set("clear", null, t)
            }, set: function (e, n, i) {
                var r, o, a = t.isPlainObject(e), s = a ? e : {};
                if (i = a && t.isPlainObject(n) ? n : i || {}, e) {
                    a || (s[e] = n);
                    for (r in s)o = s[r], r in T.component.item && (void 0 === o && (o = null), T.component.set(r, o, i)), ("select" == r || "clear" == r) && C.val("clear" == r ? "" : T.get(r, w.format)).trigger("change");
                    T.render()
                }
                return i.muted ? T : T.trigger("set", s)
            }, get: function (t, n) {
                if (t = t || "value", null != b[t])return b[t];
                if ("valueSubmit" == t) {
                    if (T._hidden)return T._hidden.value;
                    t = "value"
                }
                if ("value" == t)return o.value;
                if (t in T.component.item) {
                    if ("string" == typeof n) {
                        var i = T.component.get(t);
                        return i ? e._.trigger(T.component.formats.toString, T.component, [n, i]) : ""
                    }
                    return T.component.get(t)
                }
            }, on: function (e, n, i) {
                var r, o, a = t.isPlainObject(e), s = a ? e : {};
                if (e) {
                    a || (s[e] = n);
                    for (r in s)o = s[r], i && (r = "_" + r), b.methods[r] = b.methods[r] || [], b.methods[r].push(o)
                }
                return T
            }, off: function () {
                var t, e, n = arguments;
                for (t = 0, namesCount = n.length; t < namesCount; t += 1)e = n[t], e in b.methods && delete b.methods[e];
                return T
            }, trigger: function (t, n) {
                var i = function (t) {
                    var i = b.methods[t];
                    i && i.map(function (t) {
                        e._.trigger(t, T, [n])
                    })
                };
                return i("_" + t), i(t), T
            }
        };
        return new S
    }

    function n(t) {
        var e, n = "position";
        return t.currentStyle ? e = t.currentStyle[n] : window.getComputedStyle && (e = getComputedStyle(t)[n]), "fixed" == e
    }

    function i() {
        if (u.height() <= l.height())return 0;
        var e = t('<div style="visibility:hidden;width:100px" />').appendTo("body"), n = e[0].offsetWidth;
        e.css("overflow", "scroll");
        var i = t('<div style="width:100%" />').appendTo(e), r = i[0].offsetWidth;
        return e.remove(), n - r
    }

    function r(e, n, i) {
        if (t.isPlainObject(n))for (var r in n)o(e, r, n[r]); else o(e, n, i)
    }

    function o(t, e, n) {
        t.setAttribute(("role" == e ? "" : "aria-") + e, n)
    }

    function a(e, n) {
        t.isPlainObject(e) || (e = {attribute: n}), n = "";
        for (var i in e) {
            var r = ("role" == i ? "" : "aria-") + i, o = e[i];
            n += null == o ? "" : r + '="' + e[i] + '"'
        }
        return n
    }

    function s() {
        try {
            return document.activeElement
        } catch (t) {
        }
    }

    var l = t(window), c = t(document), u = t(document.documentElement);
    return e.klasses = function (t) {
        return t = t || "picker", {
            picker: t,
            opened: t + "--opened",
            focused: t + "--focused",
            input: t + "__input",
            active: t + "__input--active",
            target: t + "__input--target",
            holder: t + "__holder",
            frame: t + "__frame",
            wrap: t + "__wrap",
            box: t + "__box"
        }
    }, e._ = {
        group: function (t) {
            for (var n, i = "", r = e._.trigger(t.min, t); r <= e._.trigger(t.max, t, [r]); r += t.i)n = e._.trigger(t.item, t, [r]), i += e._.node(t.node, n[0], n[1], n[2]);
            return i
        }, node: function (e, n, i, r) {
            return n ? (n = t.isArray(n) ? n.join("") : n, i = i ? ' class="' + i + '"' : "", r = r ? " " + r : "", "<" + e + i + r + ">" + n + "</" + e + ">") : ""
        }, lead: function (t) {
            return (10 > t ? "0" : "") + t
        }, trigger: function (t, e, n) {
            return "function" == typeof t ? t.apply(e, n || []) : t
        }, digits: function (t) {
            return /\d/.test(t[1]) ? 2 : 1
        }, isDate: function (t) {
            return {}.toString.call(t).indexOf("Date") > -1 && this.isInteger(t.getDate())
        }, isInteger: function (t) {
            return {}.toString.call(t).indexOf("Number") > -1 && t % 1 === 0
        }, ariaAttr: a
    }, e.extend = function (n, i) {
        t.fn[n] = function (r, o) {
            var a = this.data(n);
            return "picker" == r ? a : a && "string" == typeof r ? e._.trigger(a[r], a, [o]) : this.each(function () {
                var o = t(this);
                o.data(n) || new e(this, n, i, r)
            })
        }, t.fn[n].defaults = i.defaults
    }, e
}), function (t) {
    "function" == typeof define && define.amd ? define(["picker", "jquery"], t) : "object" == typeof exports ? module.exports = t(require("./picker.js"), require("jquery")) : t(Picker, jQuery)
}(function (t, e) {
    function n(t, e) {
        var n = this, i = t.$node[0], r = i.value, o = t.$node.data("value"), a = o || r, s = o ? e.formatSubmit : e.format, l = function () {
            return i.currentStyle ? "rtl" == i.currentStyle.direction : "rtl" == getComputedStyle(t.$root[0]).direction
        };
        n.settings = e, n.$node = t.$node, n.queue = {
            min: "measure create",
            max: "measure create",
            now: "now create",
            select: "parse create validate",
            highlight: "parse navigate create validate",
            view: "parse create validate viewset",
            disable: "deactivate",
            enable: "activate"
        }, n.item = {}, n.item.clear = null, n.item.disable = (e.disable || []).slice(0), n.item.enable = -function (t) {
            return t[0] === !0 ? t.shift() : -1
        }(n.item.disable), n.set("min", e.min).set("max", e.max).set("now"), a ? n.set("select", a, {format: s}) : n.set("select", null).set("highlight", n.item.now), n.key = {
            40: 7,
            38: -7,
            39: function () {
                return l() ? -1 : 1
            },
            37: function () {
                return l() ? 1 : -1
            },
            go: function (t) {
                var e = n.item.highlight, i = new Date(e.year, e.month, e.date + t);
                n.set("highlight", i, {interval: t}), this.render()
            }
        }, t.on("render", function () {
            t.$root.find("." + e.klass.selectMonth).on("change", function () {
                var n = this.value;
                n && (t.set("highlight", [t.get("view").year, n, t.get("highlight").date]), t.$root.find("." + e.klass.selectMonth).trigger("focus"))
            }), t.$root.find("." + e.klass.selectYear).on("change", function () {
                var n = this.value;
                n && (t.set("highlight", [n, t.get("view").month, t.get("highlight").date]), t.$root.find("." + e.klass.selectYear).trigger("focus"))
            })
        }, 1).on("open", function () {
            var i = "";
            n.disabled(n.get("now")) && (i = ":not(." + e.klass.buttonToday + ")"), t.$root.find("button" + i + ", select").attr("disabled", !1)
        }, 1).on("close", function () {
            t.$root.find("button, select").attr("disabled", !0)
        }, 1)
    }

    var i = 7, r = 6, o = t._;
    n.prototype.set = function (t, e, n) {
        var i = this, r = i.item;
        return null === e ? ("clear" == t && (t = "select"), r[t] = e, i) : (r["enable" == t ? "disable" : "flip" == t ? "enable" : t] = i.queue[t].split(" ").map(function (r) {
            return e = i[r](t, e, n)
        }).pop(), "select" == t ? i.set("highlight", r.select, n) : "highlight" == t ? i.set("view", r.highlight, n) : t.match(/^(flip|min|max|disable|enable)$/) && (r.select && i.disabled(r.select) && i.set("select", r.select, n), r.highlight && i.disabled(r.highlight) && i.set("highlight", r.highlight, n)), i)
    }, n.prototype.get = function (t) {
        return this.item[t]
    }, n.prototype.create = function (t, n, i) {
        var r, a = this;
        return n = void 0 === n ? t : n, n == -(1 / 0) || n == 1 / 0 ? r = n : e.isPlainObject(n) && o.isInteger(n.pick) ? n = n.obj : e.isArray(n) ? (n = new Date(n[0], n[1], n[2]), n = o.isDate(n) ? n : a.create().obj) : n = o.isInteger(n) || o.isDate(n) ? a.normalize(new Date(n), i) : a.now(t, n, i), {
            year: r || n.getFullYear(),
            month: r || n.getMonth(),
            date: r || n.getDate(),
            day: r || n.getDay(),
            obj: r || n,
            pick: r || n.getTime()
        }
    }, n.prototype.createRange = function (t, n) {
        var i = this, r = function (t) {
            return t === !0 || e.isArray(t) || o.isDate(t) ? i.create(t) : t
        };
        return o.isInteger(t) || (t = r(t)), o.isInteger(n) || (n = r(n)), o.isInteger(t) && e.isPlainObject(n) ? t = [n.year, n.month, n.date + t] : o.isInteger(n) && e.isPlainObject(t) && (n = [t.year, t.month, t.date + n]), {
            from: r(t),
            to: r(n)
        }
    }, n.prototype.withinRange = function (t, e) {
        return t = this.createRange(t.from, t.to), e.pick >= t.from.pick && e.pick <= t.to.pick
    }, n.prototype.overlapRanges = function (t, e) {
        var n = this;
        return t = n.createRange(t.from, t.to), e = n.createRange(e.from, e.to), n.withinRange(t, e.from) || n.withinRange(t, e.to) || n.withinRange(e, t.from) || n.withinRange(e, t.to)
    }, n.prototype.now = function (t, e, n) {
        return e = new Date, n && n.rel && e.setDate(e.getDate() + n.rel), this.normalize(e, n)
    }, n.prototype.navigate = function (t, n, i) {
        var r, o, a, s, l = e.isArray(n), c = e.isPlainObject(n), u = this.item.view;
        if (l || c) {
            for (c ? (o = n.year, a = n.month, s = n.date) : (o = +n[0], a = +n[1], s = +n[2]), i && i.nav && u && u.month !== a && (o = u.year, a = u.month), r = new Date(o, a + (i && i.nav ? i.nav : 0), 1), o = r.getFullYear(), a = r.getMonth(); new Date(o, a, s).getMonth() !== a;)s -= 1;
            n = [o, a, s]
        }
        return n
    }, n.prototype.normalize = function (t) {
        return t.setHours(0, 0, 0, 0), t
    }, n.prototype.measure = function (t, e) {
        var n = this;
        return e ? "string" == typeof e ? e = n.parse(t, e) : o.isInteger(e) && (e = n.now(t, e, {rel: e})) : e = "min" == t ? -(1 / 0) : 1 / 0, e
    }, n.prototype.viewset = function (t, e) {
        return this.create([e.year, e.month, 1])
    }, n.prototype.validate = function (t, n, i) {
        var r, a, s, l, c = this, u = n, d = i && i.interval ? i.interval : 1, h = -1 === c.item.enable, p = c.item.min, f = c.item.max, g = h && c.item.disable.filter(function (t) {
                if (e.isArray(t)) {
                    var i = c.create(t).pick;
                    i < n.pick ? r = !0 : i > n.pick && (a = !0)
                }
                return o.isInteger(t)
            }).length;
        if ((!i || !i.nav) && (!h && c.disabled(n) || h && c.disabled(n) && (g || r || a) || !h && (n.pick <= p.pick || n.pick >= f.pick)))for (h && !g && (!a && d > 0 || !r && 0 > d) && (d *= -1); c.disabled(n) && (Math.abs(d) > 1 && (n.month < u.month || n.month > u.month) && (n = u, d = d > 0 ? 1 : -1), n.pick <= p.pick ? (s = !0, d = 1, n = c.create([p.year, p.month, p.date + (n.pick === p.pick ? 0 : -1)])) : n.pick >= f.pick && (l = !0, d = -1, n = c.create([f.year, f.month, f.date + (n.pick === f.pick ? 0 : 1)])), !s || !l);)n = c.create([n.year, n.month, n.date + d]);
        return n
    }, n.prototype.disabled = function (t) {
        var n = this, i = n.item.disable.filter(function (i) {
            return o.isInteger(i) ? t.day === (n.settings.firstDay ? i : i - 1) % 7 : e.isArray(i) || o.isDate(i) ? t.pick === n.create(i).pick : e.isPlainObject(i) ? n.withinRange(i, t) : void 0
        });
        return i = i.length && !i.filter(function (t) {
            return e.isArray(t) && "inverted" == t[3] || e.isPlainObject(t) && t.inverted
        }).length, -1 === n.item.enable ? !i : i || t.pick < n.item.min.pick || t.pick > n.item.max.pick
    }, n.prototype.parse = function (t, e, n) {
        var i = this, r = {};
        return e && "string" == typeof e ? (n && n.format || (n = n || {}, n.format = i.settings.format), i.formats.toArray(n.format).map(function (t) {
            var n = i.formats[t], a = n ? o.trigger(n, i, [e, r]) : t.replace(/^!/, "").length;
            n && (r[t] = e.substr(0, a)), e = e.substr(a)
        }), [r.yyyy || r.yy, +(r.mm || r.m) - 1, r.dd || r.d]) : e
    }, n.prototype.formats = function () {
        function t(t, e, n) {
            var i = t.match(/\w+/)[0];
            return n.mm || n.m || (n.m = e.indexOf(i) + 1), i.length
        }

        function e(t) {
            return t.match(/\w+/)[0].length
        }

        return {
            d: function (t, e) {
                return t ? o.digits(t) : e.date
            }, dd: function (t, e) {
                return t ? 2 : o.lead(e.date)
            }, ddd: function (t, n) {
                return t ? e(t) : this.settings.weekdaysShort[n.day]
            }, dddd: function (t, n) {
                return t ? e(t) : this.settings.weekdaysFull[n.day]
            }, m: function (t, e) {
                return t ? o.digits(t) : e.month + 1
            }, mm: function (t, e) {
                return t ? 2 : o.lead(e.month + 1)
            }, mmm: function (e, n) {
                var i = this.settings.monthsShort;
                return e ? t(e, i, n) : i[n.month]
            }, mmmm: function (e, n) {
                var i = this.settings.monthsFull;
                return e ? t(e, i, n) : i[n.month]
            }, yy: function (t, e) {
                return t ? 2 : ("" + e.year).slice(2)
            }, yyyy: function (t, e) {
                return t ? 4 : e.year
            }, toArray: function (t) {
                return t.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g)
            }, toString: function (t, e) {
                var n = this;
                return n.formats.toArray(t).map(function (t) {
                    return o.trigger(n.formats[t], n, [0, e]) || t.replace(/^!/, "")
                }).join("")
            }
        }
    }(), n.prototype.isDateExact = function (t, n) {
        var i = this;
        return o.isInteger(t) && o.isInteger(n) || "boolean" == typeof t && "boolean" == typeof n ? t === n : (o.isDate(t) || e.isArray(t)) && (o.isDate(n) || e.isArray(n)) ? i.create(t).pick === i.create(n).pick : e.isPlainObject(t) && e.isPlainObject(n) ? i.isDateExact(t.from, n.from) && i.isDateExact(t.to, n.to) : !1
    }, n.prototype.isDateOverlap = function (t, n) {
        var i = this, r = i.settings.firstDay ? 1 : 0;
        return o.isInteger(t) && (o.isDate(n) || e.isArray(n)) ? (t = t % 7 + r, t === i.create(n).day + 1) : o.isInteger(n) && (o.isDate(t) || e.isArray(t)) ? (n = n % 7 + r, n === i.create(t).day + 1) : e.isPlainObject(t) && e.isPlainObject(n) ? i.overlapRanges(t, n) : !1
    }, n.prototype.flipEnable = function (t) {
        var e = this.item;
        e.enable = t || (-1 == e.enable ? 1 : -1)
    }, n.prototype.deactivate = function (t, n) {
        var i = this, r = i.item.disable.slice(0);
        return "flip" == n ? i.flipEnable() : n === !1 ? (i.flipEnable(1), r = []) : n === !0 ? (i.flipEnable(-1), r = []) : n.map(function (t) {
            for (var n, a = 0; a < r.length; a += 1)if (i.isDateExact(t, r[a])) {
                n = !0;
                break
            }
            n || (o.isInteger(t) || o.isDate(t) || e.isArray(t) || e.isPlainObject(t) && t.from && t.to) && r.push(t)
        }), r
    }, n.prototype.activate = function (t, n) {
        var i = this, r = i.item.disable, a = r.length;
        return "flip" == n ? i.flipEnable() : n === !0 ? (i.flipEnable(1), r = []) : n === !1 ? (i.flipEnable(-1), r = []) : n.map(function (t) {
            var n, s, l, c;
            for (l = 0; a > l; l += 1) {
                if (s = r[l], i.isDateExact(s, t)) {
                    n = r[l] = null, c = !0;
                    break
                }
                if (i.isDateOverlap(s, t)) {
                    e.isPlainObject(t) ? (t.inverted = !0, n = t) : e.isArray(t) ? (n = t, n[3] || n.push("inverted")) : o.isDate(t) && (n = [t.getFullYear(), t.getMonth(), t.getDate(), "inverted"]);
                    break
                }
            }
            if (n)for (l = 0; a > l; l += 1)if (i.isDateExact(r[l], t)) {
                r[l] = null;
                break
            }
            if (c)for (l = 0; a > l; l += 1)if (i.isDateOverlap(r[l], t)) {
                r[l] = null;
                break
            }
            n && r.push(n)
        }), r.filter(function (t) {
            return null != t
        })
    }, n.prototype.nodes = function (t) {
        var e = this, n = e.settings, a = e.item, s = a.now, l = a.select, c = a.highlight, u = a.view, d = a.disable, h = a.min, p = a.max, f = function (t, e) {
            return n.firstDay && (t.push(t.shift()), e.push(e.shift())), o.node("thead", o.node("tr", o.group({
                min: 0,
                max: i - 1,
                i: 1,
                node: "th",
                item: function (i) {
                    return [t[i], n.klass.weekdays, 'scope=col title="' + e[i] + '"']
                }
            })))
        }((n.showWeekdaysFull ? n.weekdaysFull : n.weekdaysLetter).slice(0), n.weekdaysFull.slice(0)), g = function (t) {
            return o.node("div", " ", n.klass["nav" + (t ? "Next" : "Prev")] + (t && u.year >= p.year && u.month >= p.month || !t && u.year <= h.year && u.month <= h.month ? " " + n.klass.navDisabled : ""), "data-nav=" + (t || -1) + " " + o.ariaAttr({
                role: "button",
                controls: e.$node[0].id + "_table"
            }) + ' title="' + (t ? n.labelMonthNext : n.labelMonthPrev) + '"')
        }, v = function (i) {
            var r = n.showMonthsShort ? n.monthsShort : n.monthsFull;
            return "short_months" == i && (r = n.monthsShort), n.selectMonths && void 0 == i ? o.node("select", o.group({
                min: 0,
                max: 11,
                i: 1,
                node: "option",
                item: function (t) {
                    return [r[t], 0, "value=" + t + (u.month == t ? " selected" : "") + (u.year == h.year && t < h.month || u.year == p.year && t > p.month ? " disabled" : "")]
                }
            }), n.klass.selectMonth + " browser-default", (t ? "" : "disabled") + " " + o.ariaAttr({controls: e.$node[0].id + "_table"}) + ' title="' + n.labelMonthSelect + '"') : "short_months" == i ? null != l ? o.node("div", r[l.month]) : o.node("div", r[u.month]) : o.node("div", r[u.month], n.klass.month)
        }, m = function (i) {
            var r = u.year, a = n.selectYears === !0 ? 5 : ~~(n.selectYears / 2);
            if (a) {
                var s = h.year, l = p.year, c = r - a, d = r + a;
                if (s > c && (d += s - c, c = s), d > l) {
                    var f = c - s, g = d - l;
                    c -= f > g ? g : f, d = l
                }
                if (n.selectYears && void 0 == i)return o.node("select", o.group({
                    min: c,
                    max: d,
                    i: 1,
                    node: "option",
                    item: function (t) {
                        return [t, 0, "value=" + t + (r == t ? " selected" : "")]
                    }
                }), n.klass.selectYear + " browser-default", (t ? "" : "disabled") + " " + o.ariaAttr({controls: e.$node[0].id + "_table"}) + ' title="' + n.labelYearSelect + '"')
            }
            return "raw" == i ? o.node("div", r) : o.node("div", r, n.klass.year)
        };
        return createDayLabel = function () {
            return null != l ? o.node("div", l.date) : o.node("div", s.date)
        }, createWeekdayLabel = function () {
            var t;
            t = null != l ? l.day : s.day;
            var e = n.weekdaysFull[t];
            return e
        }, o.node("div", o.node("div", createWeekdayLabel(), "picker__weekday-display") + o.node("div", v("short_months"), n.klass.month_display) + o.node("div", createDayLabel(), n.klass.day_display) + o.node("div", m("raw"), n.klass.year_display), n.klass.date_display) + o.node("div", o.node("div", (n.selectYears ? v() + m() : v() + m()) + g() + g(1), n.klass.header) + o.node("table", f + o.node("tbody", o.group({
            min: 0,
            max: r - 1,
            i: 1,
            node: "tr",
            item: function (t) {
                var r = n.firstDay && 0 === e.create([u.year, u.month, 1]).day ? -7 : 0;
                return [o.group({
                    min: i * t - u.day + r + 1, max: function () {
                        return this.min + i - 1
                    }, i: 1, node: "td", item: function (t) {
                        t = e.create([u.year, u.month, t + (n.firstDay ? 1 : 0)]);
                        var i = l && l.pick == t.pick, r = c && c.pick == t.pick, a = d && e.disabled(t) || t.pick < h.pick || t.pick > p.pick, f = o.trigger(e.formats.toString, e, [n.format, t]);
                        return [o.node("div", t.date, function (e) {
                            return e.push(u.month == t.month ? n.klass.infocus : n.klass.outfocus), s.pick == t.pick && e.push(n.klass.now), i && e.push(n.klass.selected), r && e.push(n.klass.highlighted), a && e.push(n.klass.disabled), e.join(" ")
                        }([n.klass.day]), "data-pick=" + t.pick + " " + o.ariaAttr({
                            role: "gridcell",
                            label: f,
                            selected: i && e.$node.val() === f ? !0 : null,
                            activedescendant: r ? !0 : null,
                            disabled: a ? !0 : null
                        })), "", o.ariaAttr({role: "presentation"})]
                    }
                })]
            }
        })), n.klass.table, 'id="' + e.$node[0].id + '_table" ' + o.ariaAttr({
            role: "grid",
            controls: e.$node[0].id,
            readonly: !0
        })), n.klass.calendar_container) + o.node("div", o.node("button", n.today, "btn-flat picker__today", "type=button data-pick=" + s.pick + (t && !e.disabled(s) ? "" : " disabled") + " " + o.ariaAttr({controls: e.$node[0].id})) + o.node("button", n.clear, "btn-flat picker__clear", "type=button data-clear=1" + (t ? "" : " disabled") + " " + o.ariaAttr({controls: e.$node[0].id})) + o.node("button", n.close, "btn-flat picker__close", "type=button data-close=true " + (t ? "" : " disabled") + " " + o.ariaAttr({controls: e.$node[0].id})), n.klass.footer)
    }, n.defaults = function (t) {
        return {
            labelMonthNext: "Next month",
            labelMonthPrev: "Previous month",
            labelMonthSelect: "Select a month",
            labelYearSelect: "Select a year",
            monthsFull: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            weekdaysFull: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            weekdaysLetter: ["S", "M", "T", "W", "T", "F", "S"],
            today: "Today",
            clear: "Clear",
            close: "Close",
            format: "d mmmm, yyyy",
            klass: {
                table: t + "table",
                header: t + "header",
                date_display: t + "date-display",
                day_display: t + "day-display",
                month_display: t + "month-display",
                year_display: t + "year-display",
                calendar_container: t + "calendar-container",
                navPrev: t + "nav--prev",
                navNext: t + "nav--next",
                navDisabled: t + "nav--disabled",
                month: t + "month",
                year: t + "year",
                selectMonth: t + "select--month",
                selectYear: t + "select--year",
                weekdays: t + "weekday",
                day: t + "day",
                disabled: t + "day--disabled",
                selected: t + "day--selected",
                highlighted: t + "day--highlighted",
                now: t + "day--today",
                infocus: t + "day--infocus",
                outfocus: t + "day--outfocus",
                footer: t + "footer",
                buttonClear: t + "button--clear",
                buttonToday: t + "button--today",
                buttonClose: t + "button--close"
            }
        }
    }(t.klasses().picker + "__"), t.extend("pickadate", n)
}), function (t) {
    function e() {
        var e = +t(this).attr("length"), n = +t(this).val().length, i = e >= n;
        t(this).parent().find('span[class="character-counter"]').html(n + "/" + e), r(i, t(this))
    }

    function n(e) {
        $counterElement = t("<span/>").addClass("character-counter").css("float", "right").css("font-size", "12px").css("height", 1), e.parent().append($counterElement)
    }

    function i() {
        t(this).parent().find('span[class="character-counter"]').html("")
    }

    function r(t, e) {
        inputHasInvalidClass = e.hasClass("invalid"), t && inputHasInvalidClass ? e.removeClass("invalid") : t || inputHasInvalidClass || (e.removeClass("valid"), e.addClass("invalid"))
    }

    t.fn.characterCounter = function () {
        return this.each(function () {
            itHasLengthAttribute = void 0 != t(this).attr("length"), itHasLengthAttribute && (t(this).on("input", e), t(this).on("focus", e), t(this).on("blur", i), n(t(this)))
        })
    }, t(document).ready(function () {
        t("input, textarea").characterCounter()
    })
}(jQuery), function () {
    "use strict";
    var t, e, n, i, r;
    r = function () {
        t = window.innerHeight, e = document.getElementsByTagName("html")[0].offsetHeight, n = document.getElementById("footer").offsetHeight, t > e && (i = t - e, document.getElementById("footer").style.top = i + "px")
    }, jQuery(window).ready(function () {
        (new WOW).init(), $(".materialboxed").materialbox(), r()
    }), jQuery(window).resize(function () {
        r()
    })
}(), $.material.init();