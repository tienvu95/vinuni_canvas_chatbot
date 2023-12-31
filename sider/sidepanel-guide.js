"use strict";
(() => {
    var Nb = Object.create;
    var lh = Object.defineProperty;
    var kb = Object.getOwnPropertyDescriptor;
    var _b = Object.getOwnPropertyNames;
    var Lb = Object.getPrototypeOf,
        $b = Object.prototype.hasOwnProperty;
    var xt = (e, t) => () => (t || e((t = {
        exports: {}
    }).exports, t), t.exports);
    var Mb = (e, t, r, n) => {
        if (t && typeof t == "object" || typeof t == "function")
            for (let o of _b(t)) !$b.call(e, o) && o !== r && lh(e, o, {
                get: () => t[o],
                enumerable: !(n = kb(t, o)) || n.enumerable
            });
        return e
    };
    var T = (e, t, r) => (r = e != null ? Nb(Lb(e)) : {}, Mb(t || !e || !e.__esModule ? lh(r, "default", {
        value: e,
        enumerable: !0
    }) : r, e));
    var xh = xt(G => {
        "use strict";
        var aa = Symbol.for("react.element"),
            Ib = Symbol.for("react.portal"),
            jb = Symbol.for("react.fragment"),
            Fb = Symbol.for("react.strict_mode"),
            Db = Symbol.for("react.profiler"),
            Bb = Symbol.for("react.provider"),
            zb = Symbol.for("react.context"),
            Hb = Symbol.for("react.forward_ref"),
            Vb = Symbol.for("react.suspense"),
            Ub = Symbol.for("react.memo"),
            Wb = Symbol.for("react.lazy"),
            uh = Symbol.iterator;

        function Qb(e) {
            return e === null || typeof e != "object" ? null : (e = uh && e[uh] || e["@@iterator"], typeof e == "function" ? e : null)
        }
        var dh = {
                isMounted: function() {
                    return !1
                },
                enqueueForceUpdate: function() {},
                enqueueReplaceState: function() {},
                enqueueSetState: function() {}
            },
            ph = Object.assign,
            mh = {};

        function Ho(e, t, r) {
            this.props = e, this.context = t, this.refs = mh, this.updater = r || dh
        }
        Ho.prototype.isReactComponent = {};
        Ho.prototype.setState = function(e, t) {
            if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
            this.updater.enqueueSetState(this, e, t, "setState")
        };
        Ho.prototype.forceUpdate = function(e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate")
        };

        function gh() {}
        gh.prototype = Ho.prototype;

        function xf(e, t, r) {
            this.props = e, this.context = t, this.refs = mh, this.updater = r || dh
        }
        var Sf = xf.prototype = new gh;
        Sf.constructor = xf;
        ph(Sf, Ho.prototype);
        Sf.isPureReactComponent = !0;
        var ch = Array.isArray,
            hh = Object.prototype.hasOwnProperty,
            Cf = {
                current: null
            },
            vh = {
                key: !0,
                ref: !0,
                __self: !0,
                __source: !0
            };

        function yh(e, t, r) {
            var n, o = {},
                i = null,
                a = null;
            if (t != null)
                for (n in t.ref !== void 0 && (a = t.ref), t.key !== void 0 && (i = "" + t.key), t) hh.call(t, n) && !vh.hasOwnProperty(n) && (o[n] = t[n]);
            var s = arguments.length - 2;
            if (s === 1) o.children = r;
            else if (1 < s) {
                for (var l = Array(s), u = 0; u < s; u++) l[u] = arguments[u + 2];
                o.children = l
            }
            if (e && e.defaultProps)
                for (n in s = e.defaultProps, s) o[n] === void 0 && (o[n] = s[n]);
            return {
                $$typeof: aa,
                type: e,
                key: i,
                ref: a,
                props: o,
                _owner: Cf.current
            }
        }

        function Kb(e, t) {
            return {
                $$typeof: aa,
                type: e.type,
                key: t,
                ref: e.ref,
                props: e.props,
                _owner: e._owner
            }
        }

        function wf(e) {
            return typeof e == "object" && e !== null && e.$$typeof === aa
        }

        function Xb(e) {
            var t = {
                "=": "=0",
                ":": "=2"
            };
            return "$" + e.replace(/[=:]/g, function(r) {
                return t[r]
            })
        }
        var fh = /\/+/g;

        function yf(e, t) {
            return typeof e == "object" && e !== null && e.key != null ? Xb("" + e.key) : t.toString(36)
        }

        function Xs(e, t, r, n, o) {
            var i = typeof e;
            (i === "undefined" || i === "boolean") && (e = null);
            var a = !1;
            if (e === null) a = !0;
            else switch (i) {
                case "string":
                case "number":
                    a = !0;
                    break;
                case "object":
                    switch (e.$$typeof) {
                        case aa:
                        case Ib:
                            a = !0
                    }
            }
            if (a) return a = e, o = o(a), e = n === "" ? "." + yf(a, 0) : n, ch(o) ? (r = "", e != null && (r = e.replace(fh, "$&/") + "/"), Xs(o, t, r, "", function(u) {
                return u
            })) : o != null && (wf(o) && (o = Kb(o, r + (!o.key || a && a.key === o.key ? "" : ("" + o.key).replace(fh, "$&/") + "/") + e)), t.push(o)), 1;
            if (a = 0, n = n === "" ? "." : n + ":", ch(e))
                for (var s = 0; s < e.length; s++) {
                    i = e[s];
                    var l = n + yf(i, s);
                    a += Xs(i, t, r, l, o)
                } else if (l = Qb(e), typeof l == "function")
                    for (e = l.call(e), s = 0; !(i = e.next()).done;) i = i.value, l = n + yf(i, s++), a += Xs(i, t, r, l, o);
                else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
            return a
        }

        function Ks(e, t, r) {
            if (e == null) return e;
            var n = [],
                o = 0;
            return Xs(e, n, "", "", function(i) {
                return t.call(r, i, o++)
            }), n
        }

        function Gb(e) {
            if (e._status === -1) {
                var t = e._result;
                t = t(), t.then(function(r) {
                    (e._status === 0 || e._status === -1) && (e._status = 1, e._result = r)
                }, function(r) {
                    (e._status === 0 || e._status === -1) && (e._status = 2, e._result = r)
                }), e._status === -1 && (e._status = 0, e._result = t)
            }
            if (e._status === 1) return e._result.default;
            throw e._result
        }
        var ut = {
                current: null
            },
            Gs = {
                transition: null
            },
            Jb = {
                ReactCurrentDispatcher: ut,
                ReactCurrentBatchConfig: Gs,
                ReactCurrentOwner: Cf
            };
        G.Children = {
            map: Ks,
            forEach: function(e, t, r) {
                Ks(e, function() {
                    t.apply(this, arguments)
                }, r)
            },
            count: function(e) {
                var t = 0;
                return Ks(e, function() {
                    t++
                }), t
            },
            toArray: function(e) {
                return Ks(e, function(t) {
                    return t
                }) || []
            },
            only: function(e) {
                if (!wf(e)) throw Error("React.Children.only expected to receive a single React element child.");
                return e
            }
        };
        G.Component = Ho;
        G.Fragment = jb;
        G.Profiler = Db;
        G.PureComponent = xf;
        G.StrictMode = Fb;
        G.Suspense = Vb;
        G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Jb;
        G.cloneElement = function(e, t, r) {
            if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
            var n = ph({}, e.props),
                o = e.key,
                i = e.ref,
                a = e._owner;
            if (t != null) {
                if (t.ref !== void 0 && (i = t.ref, a = Cf.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
                for (l in t) hh.call(t, l) && !vh.hasOwnProperty(l) && (n[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l])
            }
            var l = arguments.length - 2;
            if (l === 1) n.children = r;
            else if (1 < l) {
                s = Array(l);
                for (var u = 0; u < l; u++) s[u] = arguments[u + 2];
                n.children = s
            }
            return {
                $$typeof: aa,
                type: e.type,
                key: o,
                ref: i,
                props: n,
                _owner: a
            }
        };
        G.createContext = function(e) {
            return e = {
                $$typeof: zb,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null
            }, e.Provider = {
                $$typeof: Bb,
                _context: e
            }, e.Consumer = e
        };
        G.createElement = yh;
        G.createFactory = function(e) {
            var t = yh.bind(null, e);
            return t.type = e, t
        };
        G.createRef = function() {
            return {
                current: null
            }
        };
        G.forwardRef = function(e) {
            return {
                $$typeof: Hb,
                render: e
            }
        };
        G.isValidElement = wf;
        G.lazy = function(e) {
            return {
                $$typeof: Wb,
                _payload: {
                    _status: -1,
                    _result: e
                },
                _init: Gb
            }
        };
        G.memo = function(e, t) {
            return {
                $$typeof: Ub,
                type: e,
                compare: t === void 0 ? null : t
            }
        };
        G.startTransition = function(e) {
            var t = Gs.transition;
            Gs.transition = {};
            try {
                e()
            } finally {
                Gs.transition = t
            }
        };
        G.unstable_act = function() {
            throw Error("act(...) is not supported in production builds of React.")
        };
        G.useCallback = function(e, t) {
            return ut.current.useCallback(e, t)
        };
        G.useContext = function(e) {
            return ut.current.useContext(e)
        };
        G.useDebugValue = function() {};
        G.useDeferredValue = function(e) {
            return ut.current.useDeferredValue(e)
        };
        G.useEffect = function(e, t) {
            return ut.current.useEffect(e, t)
        };
        G.useId = function() {
            return ut.current.useId()
        };
        G.useImperativeHandle = function(e, t, r) {
            return ut.current.useImperativeHandle(e, t, r)
        };
        G.useInsertionEffect = function(e, t) {
            return ut.current.useInsertionEffect(e, t)
        };
        G.useLayoutEffect = function(e, t) {
            return ut.current.useLayoutEffect(e, t)
        };
        G.useMemo = function(e, t) {
            return ut.current.useMemo(e, t)
        };
        G.useReducer = function(e, t, r) {
            return ut.current.useReducer(e, t, r)
        };
        G.useRef = function(e) {
            return ut.current.useRef(e)
        };
        G.useState = function(e) {
            return ut.current.useState(e)
        };
        G.useSyncExternalStore = function(e, t, r) {
            return ut.current.useSyncExternalStore(e, t, r)
        };
        G.useTransition = function() {
            return ut.current.useTransition()
        };
        G.version = "18.2.0"
    });
    var $ = xt((Jk, Sh) => {
        "use strict";
        Sh.exports = xh()
    });
    var Nh = xt(ue => {
        "use strict";

        function Of(e, t) {
            var r = e.length;
            e.push(t);
            e: for (; 0 < r;) {
                var n = r - 1 >>> 1,
                    o = e[n];
                if (0 < Js(o, t)) e[n] = t, e[r] = o, r = n;
                else break e
            }
        }

        function ar(e) {
            return e.length === 0 ? null : e[0]
        }

        function Zs(e) {
            if (e.length === 0) return null;
            var t = e[0],
                r = e.pop();
            if (r !== t) {
                e[0] = r;
                e: for (var n = 0, o = e.length, i = o >>> 1; n < i;) {
                    var a = 2 * (n + 1) - 1,
                        s = e[a],
                        l = a + 1,
                        u = e[l];
                    if (0 > Js(s, r)) l < o && 0 > Js(u, s) ? (e[n] = u, e[l] = r, n = l) : (e[n] = s, e[a] = r, n = a);
                    else if (l < o && 0 > Js(u, r)) e[n] = u, e[l] = r, n = l;
                    else break e
                }
            }
            return t
        }

        function Js(e, t) {
            var r = e.sortIndex - t.sortIndex;
            return r !== 0 ? r : e.id - t.id
        }
        typeof performance == "object" && typeof performance.now == "function" ? (Ch = performance, ue.unstable_now = function() {
            return Ch.now()
        }) : (bf = Date, wh = bf.now(), ue.unstable_now = function() {
            return bf.now() - wh
        });
        var Ch, bf, wh, Or = [],
            mn = [],
            Yb = 1,
            Vt = null,
            et = 3,
            qs = !1,
            Yn = !1,
            la = !1,
            Rh = typeof setTimeout == "function" ? setTimeout : null,
            Oh = typeof clearTimeout == "function" ? clearTimeout : null,
            bh = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

        function Pf(e) {
            for (var t = ar(mn); t !== null;) {
                if (t.callback === null) Zs(mn);
                else if (t.startTime <= e) Zs(mn), t.sortIndex = t.expirationTime, Of(Or, t);
                else break;
                t = ar(mn)
            }
        }

        function Af(e) {
            if (la = !1, Pf(e), !Yn)
                if (ar(Or) !== null) Yn = !0, Nf(Tf);
                else {
                    var t = ar(mn);
                    t !== null && kf(Af, t.startTime - e)
                }
        }

        function Tf(e, t) {
            Yn = !1, la && (la = !1, Oh(ua), ua = -1), qs = !0;
            var r = et;
            try {
                for (Pf(t), Vt = ar(Or); Vt !== null && (!(Vt.expirationTime > t) || e && !Th());) {
                    var n = Vt.callback;
                    if (typeof n == "function") {
                        Vt.callback = null, et = Vt.priorityLevel;
                        var o = n(Vt.expirationTime <= t);
                        t = ue.unstable_now(), typeof o == "function" ? Vt.callback = o : Vt === ar(Or) && Zs(Or), Pf(t)
                    } else Zs(Or);
                    Vt = ar(Or)
                }
                if (Vt !== null) var i = !0;
                else {
                    var a = ar(mn);
                    a !== null && kf(Af, a.startTime - t), i = !1
                }
                return i
            } finally {
                Vt = null, et = r, qs = !1
            }
        }
        var el = !1,
            Ys = null,
            ua = -1,
            Ph = 5,
            Ah = -1;

        function Th() {
            return !(ue.unstable_now() - Ah < Ph)
        }

        function Ef() {
            if (Ys !== null) {
                var e = ue.unstable_now();
                Ah = e;
                var t = !0;
                try {
                    t = Ys(!0, e)
                } finally {
                    t ? sa() : (el = !1, Ys = null)
                }
            } else el = !1
        }
        var sa;
        typeof bh == "function" ? sa = function() {
            bh(Ef)
        } : typeof MessageChannel < "u" ? (Rf = new MessageChannel, Eh = Rf.port2, Rf.port1.onmessage = Ef, sa = function() {
            Eh.postMessage(null)
        }) : sa = function() {
            Rh(Ef, 0)
        };
        var Rf, Eh;

        function Nf(e) {
            Ys = e, el || (el = !0, sa())
        }

        function kf(e, t) {
            ua = Rh(function() {
                e(ue.unstable_now())
            }, t)
        }
        ue.unstable_IdlePriority = 5;
        ue.unstable_ImmediatePriority = 1;
        ue.unstable_LowPriority = 4;
        ue.unstable_NormalPriority = 3;
        ue.unstable_Profiling = null;
        ue.unstable_UserBlockingPriority = 2;
        ue.unstable_cancelCallback = function(e) {
            e.callback = null
        };
        ue.unstable_continueExecution = function() {
            Yn || qs || (Yn = !0, Nf(Tf))
        };
        ue.unstable_forceFrameRate = function(e) {
            0 > e || 125 < e || (Ph = 0 < e ? Math.floor(1e3 / e) : 5)
        };
        ue.unstable_getCurrentPriorityLevel = function() {
            return et
        };
        ue.unstable_getFirstCallbackNode = function() {
            return ar(Or)
        };
        ue.unstable_next = function(e) {
            switch (et) {
                case 1:
                case 2:
                case 3:
                    var t = 3;
                    break;
                default:
                    t = et
            }
            var r = et;
            et = t;
            try {
                return e()
            } finally {
                et = r
            }
        };
        ue.unstable_pauseExecution = function() {};
        ue.unstable_requestPaint = function() {};
        ue.unstable_runWithPriority = function(e, t) {
            switch (e) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    e = 3
            }
            var r = et;
            et = e;
            try {
                return t()
            } finally {
                et = r
            }
        };
        ue.unstable_scheduleCallback = function(e, t, r) {
            var n = ue.unstable_now();
            switch (typeof r == "object" && r !== null ? (r = r.delay, r = typeof r == "number" && 0 < r ? n + r : n) : r = n, e) {
                case 1:
                    var o = -1;
                    break;
                case 2:
                    o = 250;
                    break;
                case 5:
                    o = 1073741823;
                    break;
                case 4:
                    o = 1e4;
                    break;
                default:
                    o = 5e3
            }
            return o = r + o, e = {
                id: Yb++,
                callback: t,
                priorityLevel: e,
                startTime: r,
                expirationTime: o,
                sortIndex: -1
            }, r > n ? (e.sortIndex = r, Of(mn, e), ar(Or) === null && e === ar(mn) && (la ? (Oh(ua), ua = -1) : la = !0, kf(Af, r - n))) : (e.sortIndex = o, Of(Or, e), Yn || qs || (Yn = !0, Nf(Tf))), e
        };
        ue.unstable_shouldYield = Th;
        ue.unstable_wrapCallback = function(e) {
            var t = et;
            return function() {
                var r = et;
                et = t;
                try {
                    return e.apply(this, arguments)
                } finally {
                    et = r
                }
            }
        }
    });
    var _h = xt((Zk, kh) => {
        "use strict";
        kh.exports = Nh()
    });
    var F0 = xt(It => {
        "use strict";
        var Dv = $(),
            $t = _h();

        function I(e) {
            for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++) t += "&args[]=" + encodeURIComponent(arguments[r]);
            return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
        }
        var Bv = new Set,
            ka = {};

        function co(e, t) {
            ui(e, t), ui(e + "Capture", t)
        }

        function ui(e, t) {
            for (ka[e] = t, e = 0; e < t.length; e++) Bv.add(t[e])
        }
        var Gr = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
            ed = Object.prototype.hasOwnProperty,
            Zb = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
            Lh = {},
            $h = {};

        function qb(e) {
            return ed.call($h, e) ? !0 : ed.call(Lh, e) ? !1 : Zb.test(e) ? $h[e] = !0 : (Lh[e] = !0, !1)
        }

        function eE(e, t, r, n) {
            if (r !== null && r.type === 0) return !1;
            switch (typeof t) {
                case "function":
                case "symbol":
                    return !0;
                case "boolean":
                    return n ? !1 : r !== null ? !r.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
                default:
                    return !1
            }
        }

        function tE(e, t, r, n) {
            if (t === null || typeof t > "u" || eE(e, t, r, n)) return !0;
            if (n) return !1;
            if (r !== null) switch (r.type) {
                case 3:
                    return !t;
                case 4:
                    return t === !1;
                case 5:
                    return isNaN(t);
                case 6:
                    return isNaN(t) || 1 > t
            }
            return !1
        }

        function dt(e, t, r, n, o, i, a) {
            this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = n, this.attributeNamespace = o, this.mustUseProperty = r, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = a
        }
        var Xe = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
            Xe[e] = new dt(e, 0, !1, e, null, !1, !1)
        });
        [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"]
        ].forEach(function(e) {
            var t = e[0];
            Xe[t] = new dt(t, 1, !1, e[1], null, !1, !1)
        });
        ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
            Xe[e] = new dt(e, 2, !1, e.toLowerCase(), null, !1, !1)
        });
        ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
            Xe[e] = new dt(e, 2, !1, e, null, !1, !1)
        });
        "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
            Xe[e] = new dt(e, 3, !1, e.toLowerCase(), null, !1, !1)
        });
        ["checked", "multiple", "muted", "selected"].forEach(function(e) {
            Xe[e] = new dt(e, 3, !0, e, null, !1, !1)
        });
        ["capture", "download"].forEach(function(e) {
            Xe[e] = new dt(e, 4, !1, e, null, !1, !1)
        });
        ["cols", "rows", "size", "span"].forEach(function(e) {
            Xe[e] = new dt(e, 6, !1, e, null, !1, !1)
        });
        ["rowSpan", "start"].forEach(function(e) {
            Xe[e] = new dt(e, 5, !1, e.toLowerCase(), null, !1, !1)
        });
        var Qd = /[\-:]([a-z])/g;

        function Kd(e) {
            return e[1].toUpperCase()
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
            var t = e.replace(Qd, Kd);
            Xe[t] = new dt(t, 1, !1, e, null, !1, !1)
        });
        "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
            var t = e.replace(Qd, Kd);
            Xe[t] = new dt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
        });
        ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
            var t = e.replace(Qd, Kd);
            Xe[t] = new dt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
        });
        ["tabIndex", "crossOrigin"].forEach(function(e) {
            Xe[e] = new dt(e, 1, !1, e.toLowerCase(), null, !1, !1)
        });
        Xe.xlinkHref = new dt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
        ["src", "href", "action", "formAction"].forEach(function(e) {
            Xe[e] = new dt(e, 1, !1, e.toLowerCase(), null, !0, !0)
        });

        function Xd(e, t, r, n) {
            var o = Xe.hasOwnProperty(t) ? Xe[t] : null;
            (o !== null ? o.type !== 0 : n || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (tE(t, r, o, n) && (r = null), n || o === null ? qb(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r)) : o.mustUseProperty ? e[o.propertyName] = r === null ? o.type === 3 ? !1 : "" : r : (t = o.attributeName, n = o.attributeNamespace, r === null ? e.removeAttribute(t) : (o = o.type, r = o === 3 || o === 4 && r === !0 ? "" : "" + r, n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))))
        }
        var qr = Dv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
            tl = Symbol.for("react.element"),
            Wo = Symbol.for("react.portal"),
            Qo = Symbol.for("react.fragment"),
            Gd = Symbol.for("react.strict_mode"),
            td = Symbol.for("react.profiler"),
            zv = Symbol.for("react.provider"),
            Hv = Symbol.for("react.context"),
            Jd = Symbol.for("react.forward_ref"),
            rd = Symbol.for("react.suspense"),
            nd = Symbol.for("react.suspense_list"),
            Yd = Symbol.for("react.memo"),
            hn = Symbol.for("react.lazy");
        Symbol.for("react.scope");
        Symbol.for("react.debug_trace_mode");
        var Vv = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden");
        Symbol.for("react.cache");
        Symbol.for("react.tracing_marker");
        var Mh = Symbol.iterator;

        function ca(e) {
            return e === null || typeof e != "object" ? null : (e = Mh && e[Mh] || e["@@iterator"], typeof e == "function" ? e : null)
        }
        var we = Object.assign,
            _f;

        function ya(e) {
            if (_f === void 0) try {
                throw Error()
            } catch (r) {
                var t = r.stack.trim().match(/\n( *(at )?)/);
                _f = t && t[1] || ""
            }
            return `
` + _f + e
        }
        var Lf = !1;

        function $f(e, t) {
            if (!e || Lf) return "";
            Lf = !0;
            var r = Error.prepareStackTrace;
            Error.prepareStackTrace = void 0;
            try {
                if (t)
                    if (t = function() {
                            throw Error()
                        }, Object.defineProperty(t.prototype, "props", {
                            set: function() {
                                throw Error()
                            }
                        }), typeof Reflect == "object" && Reflect.construct) {
                        try {
                            Reflect.construct(t, [])
                        } catch (u) {
                            var n = u
                        }
                        Reflect.construct(e, [], t)
                    } else {
                        try {
                            t.call()
                        } catch (u) {
                            n = u
                        }
                        e.call(t.prototype)
                    }
                else {
                    try {
                        throw Error()
                    } catch (u) {
                        n = u
                    }
                    e()
                }
            } catch (u) {
                if (u && n && typeof u.stack == "string") {
                    for (var o = u.stack.split(`
`), i = n.stack.split(`
`), a = o.length - 1, s = i.length - 1; 1 <= a && 0 <= s && o[a] !== i[s];) s--;
                    for (; 1 <= a && 0 <= s; a--, s--)
                        if (o[a] !== i[s]) {
                            if (a !== 1 || s !== 1)
                                do
                                    if (a--, s--, 0 > s || o[a] !== i[s]) {
                                        var l = `
` + o[a].replace(" at new ", " at ");
                                        return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l
                                    } while (1 <= a && 0 <= s);
                            break
                        }
                }
            } finally {
                Lf = !1, Error.prepareStackTrace = r
            }
            return (e = e ? e.displayName || e.name : "") ? ya(e) : ""
        }

        function rE(e) {
            switch (e.tag) {
                case 5:
                    return ya(e.type);
                case 16:
                    return ya("Lazy");
                case 13:
                    return ya("Suspense");
                case 19:
                    return ya("SuspenseList");
                case 0:
                case 2:
                case 15:
                    return e = $f(e.type, !1), e;
                case 11:
                    return e = $f(e.type.render, !1), e;
                case 1:
                    return e = $f(e.type, !0), e;
                default:
                    return ""
            }
        }

        function od(e) {
            if (e == null) return null;
            if (typeof e == "function") return e.displayName || e.name || null;
            if (typeof e == "string") return e;
            switch (e) {
                case Qo:
                    return "Fragment";
                case Wo:
                    return "Portal";
                case td:
                    return "Profiler";
                case Gd:
                    return "StrictMode";
                case rd:
                    return "Suspense";
                case nd:
                    return "SuspenseList"
            }
            if (typeof e == "object") switch (e.$$typeof) {
                case Hv:
                    return (e.displayName || "Context") + ".Consumer";
                case zv:
                    return (e._context.displayName || "Context") + ".Provider";
                case Jd:
                    var t = e.render;
                    return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
                case Yd:
                    return t = e.displayName || null, t !== null ? t : od(e.type) || "Memo";
                case hn:
                    t = e._payload, e = e._init;
                    try {
                        return od(e(t))
                    } catch {}
            }
            return null
        }

        function nE(e) {
            var t = e.type;
            switch (e.tag) {
                case 24:
                    return "Cache";
                case 9:
                    return (t.displayName || "Context") + ".Consumer";
                case 10:
                    return (t._context.displayName || "Context") + ".Provider";
                case 18:
                    return "DehydratedFragment";
                case 11:
                    return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
                case 7:
                    return "Fragment";
                case 5:
                    return t;
                case 4:
                    return "Portal";
                case 3:
                    return "Root";
                case 6:
                    return "Text";
                case 16:
                    return od(t);
                case 8:
                    return t === Gd ? "StrictMode" : "Mode";
                case 22:
                    return "Offscreen";
                case 12:
                    return "Profiler";
                case 21:
                    return "Scope";
                case 13:
                    return "Suspense";
                case 19:
                    return "SuspenseList";
                case 25:
                    return "TracingMarker";
                case 1:
                case 0:
                case 17:
                case 2:
                case 14:
                case 15:
                    if (typeof t == "function") return t.displayName || t.name || null;
                    if (typeof t == "string") return t
            }
            return null
        }

        function Nn(e) {
            switch (typeof e) {
                case "boolean":
                case "number":
                case "string":
                case "undefined":
                    return e;
                case "object":
                    return e;
                default:
                    return ""
            }
        }

        function Uv(e) {
            var t = e.type;
            return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
        }

        function oE(e) {
            var t = Uv(e) ? "checked" : "value",
                r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                n = "" + e[t];
            if (!e.hasOwnProperty(t) && typeof r < "u" && typeof r.get == "function" && typeof r.set == "function") {
                var o = r.get,
                    i = r.set;
                return Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function() {
                        return o.call(this)
                    },
                    set: function(a) {
                        n = "" + a, i.call(this, a)
                    }
                }), Object.defineProperty(e, t, {
                    enumerable: r.enumerable
                }), {
                    getValue: function() {
                        return n
                    },
                    setValue: function(a) {
                        n = "" + a
                    },
                    stopTracking: function() {
                        e._valueTracker = null, delete e[t]
                    }
                }
            }
        }

        function rl(e) {
            e._valueTracker || (e._valueTracker = oE(e))
        }

        function Wv(e) {
            if (!e) return !1;
            var t = e._valueTracker;
            if (!t) return !0;
            var r = t.getValue(),
                n = "";
            return e && (n = Uv(e) ? e.checked ? "true" : "false" : e.value), e = n, e !== r ? (t.setValue(e), !0) : !1
        }

        function Nl(e) {
            if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
            try {
                return e.activeElement || e.body
            } catch {
                return e.body
            }
        }

        function id(e, t) {
            var r = t.checked;
            return we({}, t, {
                defaultChecked: void 0,
                defaultValue: void 0,
                value: void 0,
                checked: r ?? e._wrapperState.initialChecked
            })
        }

        function Ih(e, t) {
            var r = t.defaultValue == null ? "" : t.defaultValue,
                n = t.checked != null ? t.checked : t.defaultChecked;
            r = Nn(t.value != null ? t.value : r), e._wrapperState = {
                initialChecked: n,
                initialValue: r,
                controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
            }
        }

        function Qv(e, t) {
            t = t.checked, t != null && Xd(e, "checked", t, !1)
        }

        function ad(e, t) {
            Qv(e, t);
            var r = Nn(t.value),
                n = t.type;
            if (r != null) n === "number" ? (r === 0 && e.value === "" || e.value != r) && (e.value = "" + r) : e.value !== "" + r && (e.value = "" + r);
            else if (n === "submit" || n === "reset") {
                e.removeAttribute("value");
                return
            }
            t.hasOwnProperty("value") ? sd(e, t.type, r) : t.hasOwnProperty("defaultValue") && sd(e, t.type, Nn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
        }

        function jh(e, t, r) {
            if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
                var n = t.type;
                if (!(n !== "submit" && n !== "reset" || t.value !== void 0 && t.value !== null)) return;
                t = "" + e._wrapperState.initialValue, r || t === e.value || (e.value = t), e.defaultValue = t
            }
            r = e.name, r !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, r !== "" && (e.name = r)
        }

        function sd(e, t, r) {
            (t !== "number" || Nl(e.ownerDocument) !== e) && (r == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + r && (e.defaultValue = "" + r))
        }
        var xa = Array.isArray;

        function ni(e, t, r, n) {
            if (e = e.options, t) {
                t = {};
                for (var o = 0; o < r.length; o++) t["$" + r[o]] = !0;
                for (r = 0; r < e.length; r++) o = t.hasOwnProperty("$" + e[r].value), e[r].selected !== o && (e[r].selected = o), o && n && (e[r].defaultSelected = !0)
            } else {
                for (r = "" + Nn(r), t = null, o = 0; o < e.length; o++) {
                    if (e[o].value === r) {
                        e[o].selected = !0, n && (e[o].defaultSelected = !0);
                        return
                    }
                    t !== null || e[o].disabled || (t = e[o])
                }
                t !== null && (t.selected = !0)
            }
        }

        function ld(e, t) {
            if (t.dangerouslySetInnerHTML != null) throw Error(I(91));
            return we({}, t, {
                value: void 0,
                defaultValue: void 0,
                children: "" + e._wrapperState.initialValue
            })
        }

        function Fh(e, t) {
            var r = t.value;
            if (r == null) {
                if (r = t.children, t = t.defaultValue, r != null) {
                    if (t != null) throw Error(I(92));
                    if (xa(r)) {
                        if (1 < r.length) throw Error(I(93));
                        r = r[0]
                    }
                    t = r
                }
                t == null && (t = ""), r = t
            }
            e._wrapperState = {
                initialValue: Nn(r)
            }
        }

        function Kv(e, t) {
            var r = Nn(t.value),
                n = Nn(t.defaultValue);
            r != null && (r = "" + r, r !== e.value && (e.value = r), t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)), n != null && (e.defaultValue = "" + n)
        }

        function Dh(e) {
            var t = e.textContent;
            t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
        }

        function Xv(e) {
            switch (e) {
                case "svg":
                    return "http://www.w3.org/2000/svg";
                case "math":
                    return "http://www.w3.org/1998/Math/MathML";
                default:
                    return "http://www.w3.org/1999/xhtml"
            }
        }

        function ud(e, t) {
            return e == null || e === "http://www.w3.org/1999/xhtml" ? Xv(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
        }
        var nl, Gv = function(e) {
            return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, r, n, o) {
                MSApp.execUnsafeLocalFunction(function() {
                    return e(t, r, n, o)
                })
            } : e
        }(function(e, t) {
            if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
            else {
                for (nl = nl || document.createElement("div"), nl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = nl.firstChild; e.firstChild;) e.removeChild(e.firstChild);
                for (; t.firstChild;) e.appendChild(t.firstChild)
            }
        });

        function _a(e, t) {
            if (t) {
                var r = e.firstChild;
                if (r && r === e.lastChild && r.nodeType === 3) {
                    r.nodeValue = t;
                    return
                }
            }
            e.textContent = t
        }
        var wa = {
                animationIterationCount: !0,
                aspectRatio: !0,
                borderImageOutset: !0,
                borderImageSlice: !0,
                borderImageWidth: !0,
                boxFlex: !0,
                boxFlexGroup: !0,
                boxOrdinalGroup: !0,
                columnCount: !0,
                columns: !0,
                flex: !0,
                flexGrow: !0,
                flexPositive: !0,
                flexShrink: !0,
                flexNegative: !0,
                flexOrder: !0,
                gridArea: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowSpan: !0,
                gridRowStart: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnSpan: !0,
                gridColumnStart: !0,
                fontWeight: !0,
                lineClamp: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                tabSize: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0,
                fillOpacity: !0,
                floodOpacity: !0,
                stopOpacity: !0,
                strokeDasharray: !0,
                strokeDashoffset: !0,
                strokeMiterlimit: !0,
                strokeOpacity: !0,
                strokeWidth: !0
            },
            iE = ["Webkit", "ms", "Moz", "O"];
        Object.keys(wa).forEach(function(e) {
            iE.forEach(function(t) {
                t = t + e.charAt(0).toUpperCase() + e.substring(1), wa[t] = wa[e]
            })
        });

        function Jv(e, t, r) {
            return t == null || typeof t == "boolean" || t === "" ? "" : r || typeof t != "number" || t === 0 || wa.hasOwnProperty(e) && wa[e] ? ("" + t).trim() : t + "px"
        }

        function Yv(e, t) {
            e = e.style;
            for (var r in t)
                if (t.hasOwnProperty(r)) {
                    var n = r.indexOf("--") === 0,
                        o = Jv(r, t[r], n);
                    r === "float" && (r = "cssFloat"), n ? e.setProperty(r, o) : e[r] = o
                }
        }
        var aE = we({
            menuitem: !0
        }, {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0
        });

        function cd(e, t) {
            if (t) {
                if (aE[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(I(137, e));
                if (t.dangerouslySetInnerHTML != null) {
                    if (t.children != null) throw Error(I(60));
                    if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(I(61))
                }
                if (t.style != null && typeof t.style != "object") throw Error(I(62))
            }
        }

        function fd(e, t) {
            if (e.indexOf("-") === -1) return typeof t.is == "string";
            switch (e) {
                case "annotation-xml":
                case "color-profile":
                case "font-face":
                case "font-face-src":
                case "font-face-uri":
                case "font-face-format":
                case "font-face-name":
                case "missing-glyph":
                    return !1;
                default:
                    return !0
            }
        }
        var dd = null;

        function Zd(e) {
            return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
        }
        var pd = null,
            oi = null,
            ii = null;

        function Bh(e) {
            if (e = Ja(e)) {
                if (typeof pd != "function") throw Error(I(280));
                var t = e.stateNode;
                t && (t = ou(t), pd(e.stateNode, e.type, t))
            }
        }

        function Zv(e) {
            oi ? ii ? ii.push(e) : ii = [e] : oi = e
        }

        function qv() {
            if (oi) {
                var e = oi,
                    t = ii;
                if (ii = oi = null, Bh(e), t)
                    for (e = 0; e < t.length; e++) Bh(t[e])
            }
        }

        function ey(e, t) {
            return e(t)
        }

        function ty() {}
        var Mf = !1;

        function ry(e, t, r) {
            if (Mf) return e(t, r);
            Mf = !0;
            try {
                return ey(e, t, r)
            } finally {
                Mf = !1, (oi !== null || ii !== null) && (ty(), qv())
            }
        }

        function La(e, t) {
            var r = e.stateNode;
            if (r === null) return null;
            var n = ou(r);
            if (n === null) return null;
            r = n[t];
            e: switch (t) {
                case "onClick":
                case "onClickCapture":
                case "onDoubleClick":
                case "onDoubleClickCapture":
                case "onMouseDown":
                case "onMouseDownCapture":
                case "onMouseMove":
                case "onMouseMoveCapture":
                case "onMouseUp":
                case "onMouseUpCapture":
                case "onMouseEnter":
                    (n = !n.disabled) || (e = e.type, n = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !n;
                    break e;
                default:
                    e = !1
            }
            if (e) return null;
            if (r && typeof r != "function") throw Error(I(231, t, typeof r));
            return r
        }
        var md = !1;
        if (Gr) try {
            Vo = {}, Object.defineProperty(Vo, "passive", {
                get: function() {
                    md = !0
                }
            }), window.addEventListener("test", Vo, Vo), window.removeEventListener("test", Vo, Vo)
        } catch {
            md = !1
        }
        var Vo;

        function sE(e, t, r, n, o, i, a, s, l) {
            var u = Array.prototype.slice.call(arguments, 3);
            try {
                t.apply(r, u)
            } catch (f) {
                this.onError(f)
            }
        }
        var ba = !1,
            kl = null,
            _l = !1,
            gd = null,
            lE = {
                onError: function(e) {
                    ba = !0, kl = e
                }
            };

        function uE(e, t, r, n, o, i, a, s, l) {
            ba = !1, kl = null, sE.apply(lE, arguments)
        }

        function cE(e, t, r, n, o, i, a, s, l) {
            if (uE.apply(this, arguments), ba) {
                if (ba) {
                    var u = kl;
                    ba = !1, kl = null
                } else throw Error(I(198));
                _l || (_l = !0, gd = u)
            }
        }

        function fo(e) {
            var t = e,
                r = e;
            if (e.alternate)
                for (; t.return;) t = t.return;
            else {
                e = t;
                do t = e, t.flags & 4098 && (r = t.return), e = t.return; while (e)
            }
            return t.tag === 3 ? r : null
        }

        function ny(e) {
            if (e.tag === 13) {
                var t = e.memoizedState;
                if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
            }
            return null
        }

        function zh(e) {
            if (fo(e) !== e) throw Error(I(188))
        }

        function fE(e) {
            var t = e.alternate;
            if (!t) {
                if (t = fo(e), t === null) throw Error(I(188));
                return t !== e ? null : e
            }
            for (var r = e, n = t;;) {
                var o = r.return;
                if (o === null) break;
                var i = o.alternate;
                if (i === null) {
                    if (n = o.return, n !== null) {
                        r = n;
                        continue
                    }
                    break
                }
                if (o.child === i.child) {
                    for (i = o.child; i;) {
                        if (i === r) return zh(o), e;
                        if (i === n) return zh(o), t;
                        i = i.sibling
                    }
                    throw Error(I(188))
                }
                if (r.return !== n.return) r = o, n = i;
                else {
                    for (var a = !1, s = o.child; s;) {
                        if (s === r) {
                            a = !0, r = o, n = i;
                            break
                        }
                        if (s === n) {
                            a = !0, n = o, r = i;
                            break
                        }
                        s = s.sibling
                    }
                    if (!a) {
                        for (s = i.child; s;) {
                            if (s === r) {
                                a = !0, r = i, n = o;
                                break
                            }
                            if (s === n) {
                                a = !0, n = i, r = o;
                                break
                            }
                            s = s.sibling
                        }
                        if (!a) throw Error(I(189))
                    }
                }
                if (r.alternate !== n) throw Error(I(190))
            }
            if (r.tag !== 3) throw Error(I(188));
            return r.stateNode.current === r ? e : t
        }

        function oy(e) {
            return e = fE(e), e !== null ? iy(e) : null
        }

        function iy(e) {
            if (e.tag === 5 || e.tag === 6) return e;
            for (e = e.child; e !== null;) {
                var t = iy(e);
                if (t !== null) return t;
                e = e.sibling
            }
            return null
        }
        var ay = $t.unstable_scheduleCallback,
            Hh = $t.unstable_cancelCallback,
            dE = $t.unstable_shouldYield,
            pE = $t.unstable_requestPaint,
            Pe = $t.unstable_now,
            mE = $t.unstable_getCurrentPriorityLevel,
            qd = $t.unstable_ImmediatePriority,
            sy = $t.unstable_UserBlockingPriority,
            Ll = $t.unstable_NormalPriority,
            gE = $t.unstable_LowPriority,
            ly = $t.unstable_IdlePriority,
            eu = null,
            Nr = null;

        function hE(e) {
            if (Nr && typeof Nr.onCommitFiberRoot == "function") try {
                Nr.onCommitFiberRoot(eu, e, void 0, (e.current.flags & 128) === 128)
            } catch {}
        }
        var fr = Math.clz32 ? Math.clz32 : xE,
            vE = Math.log,
            yE = Math.LN2;

        function xE(e) {
            return e >>>= 0, e === 0 ? 32 : 31 - (vE(e) / yE | 0) | 0
        }
        var ol = 64,
            il = 4194304;

        function Sa(e) {
            switch (e & -e) {
                case 1:
                    return 1;
                case 2:
                    return 2;
                case 4:
                    return 4;
                case 8:
                    return 8;
                case 16:
                    return 16;
                case 32:
                    return 32;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                    return e & 4194240;
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    return e & 130023424;
                case 134217728:
                    return 134217728;
                case 268435456:
                    return 268435456;
                case 536870912:
                    return 536870912;
                case 1073741824:
                    return 1073741824;
                default:
                    return e
            }
        }

        function $l(e, t) {
            var r = e.pendingLanes;
            if (r === 0) return 0;
            var n = 0,
                o = e.suspendedLanes,
                i = e.pingedLanes,
                a = r & 268435455;
            if (a !== 0) {
                var s = a & ~o;
                s !== 0 ? n = Sa(s) : (i &= a, i !== 0 && (n = Sa(i)))
            } else a = r & ~o, a !== 0 ? n = Sa(a) : i !== 0 && (n = Sa(i));
            if (n === 0) return 0;
            if (t !== 0 && t !== n && !(t & o) && (o = n & -n, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0)) return t;
            if (n & 4 && (n |= r & 16), t = e.entangledLanes, t !== 0)
                for (e = e.entanglements, t &= n; 0 < t;) r = 31 - fr(t), o = 1 << r, n |= e[r], t &= ~o;
            return n
        }

        function SE(e, t) {
            switch (e) {
                case 1:
                case 2:
                case 4:
                    return t + 250;
                case 8:
                case 16:
                case 32:
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                    return t + 5e3;
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    return -1;
                case 134217728:
                case 268435456:
                case 536870912:
                case 1073741824:
                    return -1;
                default:
                    return -1
            }
        }

        function CE(e, t) {
            for (var r = e.suspendedLanes, n = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i;) {
                var a = 31 - fr(i),
                    s = 1 << a,
                    l = o[a];
                l === -1 ? (!(s & r) || s & n) && (o[a] = SE(s, t)) : l <= t && (e.expiredLanes |= s), i &= ~s
            }
        }

        function hd(e) {
            return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
        }

        function uy() {
            var e = ol;
            return ol <<= 1, !(ol & 4194240) && (ol = 64), e
        }

        function If(e) {
            for (var t = [], r = 0; 31 > r; r++) t.push(e);
            return t
        }

        function Xa(e, t, r) {
            e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - fr(t), e[t] = r
        }

        function wE(e, t) {
            var r = e.pendingLanes & ~t;
            e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
            var n = e.eventTimes;
            for (e = e.expirationTimes; 0 < r;) {
                var o = 31 - fr(r),
                    i = 1 << o;
                t[o] = 0, n[o] = -1, e[o] = -1, r &= ~i
            }
        }

        function ep(e, t) {
            var r = e.entangledLanes |= t;
            for (e = e.entanglements; r;) {
                var n = 31 - fr(r),
                    o = 1 << n;
                o & t | e[n] & t && (e[n] |= t), r &= ~o
            }
        }
        var ie = 0;

        function cy(e) {
            return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
        }
        var fy, tp, dy, py, my, vd = !1,
            al = [],
            wn = null,
            bn = null,
            En = null,
            $a = new Map,
            Ma = new Map,
            yn = [],
            bE = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

        function Vh(e, t) {
            switch (e) {
                case "focusin":
                case "focusout":
                    wn = null;
                    break;
                case "dragenter":
                case "dragleave":
                    bn = null;
                    break;
                case "mouseover":
                case "mouseout":
                    En = null;
                    break;
                case "pointerover":
                case "pointerout":
                    $a.delete(t.pointerId);
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                    Ma.delete(t.pointerId)
            }
        }

        function fa(e, t, r, n, o, i) {
            return e === null || e.nativeEvent !== i ? (e = {
                blockedOn: t,
                domEventName: r,
                eventSystemFlags: n,
                nativeEvent: i,
                targetContainers: [o]
            }, t !== null && (t = Ja(t), t !== null && tp(t)), e) : (e.eventSystemFlags |= n, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e)
        }

        function EE(e, t, r, n, o) {
            switch (t) {
                case "focusin":
                    return wn = fa(wn, e, t, r, n, o), !0;
                case "dragenter":
                    return bn = fa(bn, e, t, r, n, o), !0;
                case "mouseover":
                    return En = fa(En, e, t, r, n, o), !0;
                case "pointerover":
                    var i = o.pointerId;
                    return $a.set(i, fa($a.get(i) || null, e, t, r, n, o)), !0;
                case "gotpointercapture":
                    return i = o.pointerId, Ma.set(i, fa(Ma.get(i) || null, e, t, r, n, o)), !0
            }
            return !1
        }

        function gy(e) {
            var t = eo(e.target);
            if (t !== null) {
                var r = fo(t);
                if (r !== null) {
                    if (t = r.tag, t === 13) {
                        if (t = ny(r), t !== null) {
                            e.blockedOn = t, my(e.priority, function() {
                                dy(r)
                            });
                            return
                        }
                    } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
                        e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
                        return
                    }
                }
            }
            e.blockedOn = null
        }

        function Sl(e) {
            if (e.blockedOn !== null) return !1;
            for (var t = e.targetContainers; 0 < t.length;) {
                var r = yd(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
                if (r === null) {
                    r = e.nativeEvent;
                    var n = new r.constructor(r.type, r);
                    dd = n, r.target.dispatchEvent(n), dd = null
                } else return t = Ja(r), t !== null && tp(t), e.blockedOn = r, !1;
                t.shift()
            }
            return !0
        }

        function Uh(e, t, r) {
            Sl(e) && r.delete(t)
        }

        function RE() {
            vd = !1, wn !== null && Sl(wn) && (wn = null), bn !== null && Sl(bn) && (bn = null), En !== null && Sl(En) && (En = null), $a.forEach(Uh), Ma.forEach(Uh)
        }

        function da(e, t) {
            e.blockedOn === t && (e.blockedOn = null, vd || (vd = !0, $t.unstable_scheduleCallback($t.unstable_NormalPriority, RE)))
        }

        function Ia(e) {
            function t(o) {
                return da(o, e)
            }
            if (0 < al.length) {
                da(al[0], e);
                for (var r = 1; r < al.length; r++) {
                    var n = al[r];
                    n.blockedOn === e && (n.blockedOn = null)
                }
            }
            for (wn !== null && da(wn, e), bn !== null && da(bn, e), En !== null && da(En, e), $a.forEach(t), Ma.forEach(t), r = 0; r < yn.length; r++) n = yn[r], n.blockedOn === e && (n.blockedOn = null);
            for (; 0 < yn.length && (r = yn[0], r.blockedOn === null);) gy(r), r.blockedOn === null && yn.shift()
        }
        var ai = qr.ReactCurrentBatchConfig,
            Ml = !0;

        function OE(e, t, r, n) {
            var o = ie,
                i = ai.transition;
            ai.transition = null;
            try {
                ie = 1, rp(e, t, r, n)
            } finally {
                ie = o, ai.transition = i
            }
        }

        function PE(e, t, r, n) {
            var o = ie,
                i = ai.transition;
            ai.transition = null;
            try {
                ie = 4, rp(e, t, r, n)
            } finally {
                ie = o, ai.transition = i
            }
        }

        function rp(e, t, r, n) {
            if (Ml) {
                var o = yd(e, t, r, n);
                if (o === null) Vf(e, t, n, Il, r), Vh(e, n);
                else if (EE(o, e, t, r, n)) n.stopPropagation();
                else if (Vh(e, n), t & 4 && -1 < bE.indexOf(e)) {
                    for (; o !== null;) {
                        var i = Ja(o);
                        if (i !== null && fy(i), i = yd(e, t, r, n), i === null && Vf(e, t, n, Il, r), i === o) break;
                        o = i
                    }
                    o !== null && n.stopPropagation()
                } else Vf(e, t, n, null, r)
            }
        }
        var Il = null;

        function yd(e, t, r, n) {
            if (Il = null, e = Zd(n), e = eo(e), e !== null)
                if (t = fo(e), t === null) e = null;
                else if (r = t.tag, r === 13) {
                if (e = ny(t), e !== null) return e;
                e = null
            } else if (r === 3) {
                if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
                e = null
            } else t !== e && (e = null);
            return Il = e, null
        }

        function hy(e) {
            switch (e) {
                case "cancel":
                case "click":
                case "close":
                case "contextmenu":
                case "copy":
                case "cut":
                case "auxclick":
                case "dblclick":
                case "dragend":
                case "dragstart":
                case "drop":
                case "focusin":
                case "focusout":
                case "input":
                case "invalid":
                case "keydown":
                case "keypress":
                case "keyup":
                case "mousedown":
                case "mouseup":
                case "paste":
                case "pause":
                case "play":
                case "pointercancel":
                case "pointerdown":
                case "pointerup":
                case "ratechange":
                case "reset":
                case "resize":
                case "seeked":
                case "submit":
                case "touchcancel":
                case "touchend":
                case "touchstart":
                case "volumechange":
                case "change":
                case "selectionchange":
                case "textInput":
                case "compositionstart":
                case "compositionend":
                case "compositionupdate":
                case "beforeblur":
                case "afterblur":
                case "beforeinput":
                case "blur":
                case "fullscreenchange":
                case "focus":
                case "hashchange":
                case "popstate":
                case "select":
                case "selectstart":
                    return 1;
                case "drag":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "mousemove":
                case "mouseout":
                case "mouseover":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "scroll":
                case "toggle":
                case "touchmove":
                case "wheel":
                case "mouseenter":
                case "mouseleave":
                case "pointerenter":
                case "pointerleave":
                    return 4;
                case "message":
                    switch (mE()) {
                        case qd:
                            return 1;
                        case sy:
                            return 4;
                        case Ll:
                        case gE:
                            return 16;
                        case ly:
                            return 536870912;
                        default:
                            return 16
                    }
                default:
                    return 16
            }
        }
        var Sn = null,
            np = null,
            Cl = null;

        function vy() {
            if (Cl) return Cl;
            var e, t = np,
                r = t.length,
                n, o = "value" in Sn ? Sn.value : Sn.textContent,
                i = o.length;
            for (e = 0; e < r && t[e] === o[e]; e++);
            var a = r - e;
            for (n = 1; n <= a && t[r - n] === o[i - n]; n++);
            return Cl = o.slice(e, 1 < n ? 1 - n : void 0)
        }

        function wl(e) {
            var t = e.keyCode;
            return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
        }

        function sl() {
            return !0
        }

        function Wh() {
            return !1
        }

        function Mt(e) {
            function t(r, n, o, i, a) {
                this._reactName = r, this._targetInst = o, this.type = n, this.nativeEvent = i, this.target = a, this.currentTarget = null;
                for (var s in e) e.hasOwnProperty(s) && (r = e[s], this[s] = r ? r(i) : i[s]);
                return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? sl : Wh, this.isPropagationStopped = Wh, this
            }
            return we(t.prototype, {
                preventDefault: function() {
                    this.defaultPrevented = !0;
                    var r = this.nativeEvent;
                    r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = !1), this.isDefaultPrevented = sl)
                },
                stopPropagation: function() {
                    var r = this.nativeEvent;
                    r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0), this.isPropagationStopped = sl)
                },
                persist: function() {},
                isPersistent: sl
            }), t
        }
        var hi = {
                eventPhase: 0,
                bubbles: 0,
                cancelable: 0,
                timeStamp: function(e) {
                    return e.timeStamp || Date.now()
                },
                defaultPrevented: 0,
                isTrusted: 0
            },
            op = Mt(hi),
            Ga = we({}, hi, {
                view: 0,
                detail: 0
            }),
            AE = Mt(Ga),
            jf, Ff, pa, tu = we({}, Ga, {
                screenX: 0,
                screenY: 0,
                clientX: 0,
                clientY: 0,
                pageX: 0,
                pageY: 0,
                ctrlKey: 0,
                shiftKey: 0,
                altKey: 0,
                metaKey: 0,
                getModifierState: ip,
                button: 0,
                buttons: 0,
                relatedTarget: function(e) {
                    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
                },
                movementX: function(e) {
                    return "movementX" in e ? e.movementX : (e !== pa && (pa && e.type === "mousemove" ? (jf = e.screenX - pa.screenX, Ff = e.screenY - pa.screenY) : Ff = jf = 0, pa = e), jf)
                },
                movementY: function(e) {
                    return "movementY" in e ? e.movementY : Ff
                }
            }),
            Qh = Mt(tu),
            TE = we({}, tu, {
                dataTransfer: 0
            }),
            NE = Mt(TE),
            kE = we({}, Ga, {
                relatedTarget: 0
            }),
            Df = Mt(kE),
            _E = we({}, hi, {
                animationName: 0,
                elapsedTime: 0,
                pseudoElement: 0
            }),
            LE = Mt(_E),
            $E = we({}, hi, {
                clipboardData: function(e) {
                    return "clipboardData" in e ? e.clipboardData : window.clipboardData
                }
            }),
            ME = Mt($E),
            IE = we({}, hi, {
                data: 0
            }),
            Kh = Mt(IE),
            jE = {
                Esc: "Escape",
                Spacebar: " ",
                Left: "ArrowLeft",
                Up: "ArrowUp",
                Right: "ArrowRight",
                Down: "ArrowDown",
                Del: "Delete",
                Win: "OS",
                Menu: "ContextMenu",
                Apps: "ContextMenu",
                Scroll: "ScrollLock",
                MozPrintableKey: "Unidentified"
            },
            FE = {
                8: "Backspace",
                9: "Tab",
                12: "Clear",
                13: "Enter",
                16: "Shift",
                17: "Control",
                18: "Alt",
                19: "Pause",
                20: "CapsLock",
                27: "Escape",
                32: " ",
                33: "PageUp",
                34: "PageDown",
                35: "End",
                36: "Home",
                37: "ArrowLeft",
                38: "ArrowUp",
                39: "ArrowRight",
                40: "ArrowDown",
                45: "Insert",
                46: "Delete",
                112: "F1",
                113: "F2",
                114: "F3",
                115: "F4",
                116: "F5",
                117: "F6",
                118: "F7",
                119: "F8",
                120: "F9",
                121: "F10",
                122: "F11",
                123: "F12",
                144: "NumLock",
                145: "ScrollLock",
                224: "Meta"
            },
            DE = {
                Alt: "altKey",
                Control: "ctrlKey",
                Meta: "metaKey",
                Shift: "shiftKey"
            };

        function BE(e) {
            var t = this.nativeEvent;
            return t.getModifierState ? t.getModifierState(e) : (e = DE[e]) ? !!t[e] : !1
        }

        function ip() {
            return BE
        }
        var zE = we({}, Ga, {
                key: function(e) {
                    if (e.key) {
                        var t = jE[e.key] || e.key;
                        if (t !== "Unidentified") return t
                    }
                    return e.type === "keypress" ? (e = wl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? FE[e.keyCode] || "Unidentified" : ""
                },
                code: 0,
                location: 0,
                ctrlKey: 0,
                shiftKey: 0,
                altKey: 0,
                metaKey: 0,
                repeat: 0,
                locale: 0,
                getModifierState: ip,
                charCode: function(e) {
                    return e.type === "keypress" ? wl(e) : 0
                },
                keyCode: function(e) {
                    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
                },
                which: function(e) {
                    return e.type === "keypress" ? wl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
                }
            }),
            HE = Mt(zE),
            VE = we({}, tu, {
                pointerId: 0,
                width: 0,
                height: 0,
                pressure: 0,
                tangentialPressure: 0,
                tiltX: 0,
                tiltY: 0,
                twist: 0,
                pointerType: 0,
                isPrimary: 0
            }),
            Xh = Mt(VE),
            UE = we({}, Ga, {
                touches: 0,
                targetTouches: 0,
                changedTouches: 0,
                altKey: 0,
                metaKey: 0,
                ctrlKey: 0,
                shiftKey: 0,
                getModifierState: ip
            }),
            WE = Mt(UE),
            QE = we({}, hi, {
                propertyName: 0,
                elapsedTime: 0,
                pseudoElement: 0
            }),
            KE = Mt(QE),
            XE = we({}, tu, {
                deltaX: function(e) {
                    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
                },
                deltaY: function(e) {
                    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
                },
                deltaZ: 0,
                deltaMode: 0
            }),
            GE = Mt(XE),
            JE = [9, 13, 27, 32],
            ap = Gr && "CompositionEvent" in window,
            Ea = null;
        Gr && "documentMode" in document && (Ea = document.documentMode);
        var YE = Gr && "TextEvent" in window && !Ea,
            yy = Gr && (!ap || Ea && 8 < Ea && 11 >= Ea),
            Gh = String.fromCharCode(32),
            Jh = !1;

        function xy(e, t) {
            switch (e) {
                case "keyup":
                    return JE.indexOf(t.keyCode) !== -1;
                case "keydown":
                    return t.keyCode !== 229;
                case "keypress":
                case "mousedown":
                case "focusout":
                    return !0;
                default:
                    return !1
            }
        }

        function Sy(e) {
            return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
        }
        var Ko = !1;

        function ZE(e, t) {
            switch (e) {
                case "compositionend":
                    return Sy(t);
                case "keypress":
                    return t.which !== 32 ? null : (Jh = !0, Gh);
                case "textInput":
                    return e = t.data, e === Gh && Jh ? null : e;
                default:
                    return null
            }
        }

        function qE(e, t) {
            if (Ko) return e === "compositionend" || !ap && xy(e, t) ? (e = vy(), Cl = np = Sn = null, Ko = !1, e) : null;
            switch (e) {
                case "paste":
                    return null;
                case "keypress":
                    if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                        if (t.char && 1 < t.char.length) return t.char;
                        if (t.which) return String.fromCharCode(t.which)
                    }
                    return null;
                case "compositionend":
                    return yy && t.locale !== "ko" ? null : t.data;
                default:
                    return null
            }
        }
        var eR = {
            color: !0,
            date: !0,
            datetime: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            password: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0
        };

        function Yh(e) {
            var t = e && e.nodeName && e.nodeName.toLowerCase();
            return t === "input" ? !!eR[e.type] : t === "textarea"
        }

        function Cy(e, t, r, n) {
            Zv(n), t = jl(t, "onChange"), 0 < t.length && (r = new op("onChange", "change", null, r, n), e.push({
                event: r,
                listeners: t
            }))
        }
        var Ra = null,
            ja = null;

        function tR(e) {
            _y(e, 0)
        }

        function ru(e) {
            var t = Jo(e);
            if (Wv(t)) return e
        }

        function rR(e, t) {
            if (e === "change") return t
        }
        var wy = !1;
        Gr && (Gr ? (ul = "oninput" in document, ul || (Bf = document.createElement("div"), Bf.setAttribute("oninput", "return;"), ul = typeof Bf.oninput == "function"), ll = ul) : ll = !1, wy = ll && (!document.documentMode || 9 < document.documentMode));
        var ll, ul, Bf;

        function Zh() {
            Ra && (Ra.detachEvent("onpropertychange", by), ja = Ra = null)
        }

        function by(e) {
            if (e.propertyName === "value" && ru(ja)) {
                var t = [];
                Cy(t, ja, e, Zd(e)), ry(tR, t)
            }
        }

        function nR(e, t, r) {
            e === "focusin" ? (Zh(), Ra = t, ja = r, Ra.attachEvent("onpropertychange", by)) : e === "focusout" && Zh()
        }

        function oR(e) {
            if (e === "selectionchange" || e === "keyup" || e === "keydown") return ru(ja)
        }

        function iR(e, t) {
            if (e === "click") return ru(t)
        }

        function aR(e, t) {
            if (e === "input" || e === "change") return ru(t)
        }

        function sR(e, t) {
            return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
        }
        var pr = typeof Object.is == "function" ? Object.is : sR;

        function Fa(e, t) {
            if (pr(e, t)) return !0;
            if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
            var r = Object.keys(e),
                n = Object.keys(t);
            if (r.length !== n.length) return !1;
            for (n = 0; n < r.length; n++) {
                var o = r[n];
                if (!ed.call(t, o) || !pr(e[o], t[o])) return !1
            }
            return !0
        }

        function qh(e) {
            for (; e && e.firstChild;) e = e.firstChild;
            return e
        }

        function ev(e, t) {
            var r = qh(e);
            e = 0;
            for (var n; r;) {
                if (r.nodeType === 3) {
                    if (n = e + r.textContent.length, e <= t && n >= t) return {
                        node: r,
                        offset: t - e
                    };
                    e = n
                }
                e: {
                    for (; r;) {
                        if (r.nextSibling) {
                            r = r.nextSibling;
                            break e
                        }
                        r = r.parentNode
                    }
                    r = void 0
                }
                r = qh(r)
            }
        }

        function Ey(e, t) {
            return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Ey(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
        }

        function Ry() {
            for (var e = window, t = Nl(); t instanceof e.HTMLIFrameElement;) {
                try {
                    var r = typeof t.contentWindow.location.href == "string"
                } catch {
                    r = !1
                }
                if (r) e = t.contentWindow;
                else break;
                t = Nl(e.document)
            }
            return t
        }

        function sp(e) {
            var t = e && e.nodeName && e.nodeName.toLowerCase();
            return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
        }

        function lR(e) {
            var t = Ry(),
                r = e.focusedElem,
                n = e.selectionRange;
            if (t !== r && r && r.ownerDocument && Ey(r.ownerDocument.documentElement, r)) {
                if (n !== null && sp(r)) {
                    if (t = n.start, e = n.end, e === void 0 && (e = t), "selectionStart" in r) r.selectionStart = t, r.selectionEnd = Math.min(e, r.value.length);
                    else if (e = (t = r.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                        e = e.getSelection();
                        var o = r.textContent.length,
                            i = Math.min(n.start, o);
                        n = n.end === void 0 ? i : Math.min(n.end, o), !e.extend && i > n && (o = n, n = i, i = o), o = ev(r, i);
                        var a = ev(r, n);
                        o && a && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== a.node || e.focusOffset !== a.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), i > n ? (e.addRange(t), e.extend(a.node, a.offset)) : (t.setEnd(a.node, a.offset), e.addRange(t)))
                    }
                }
                for (t = [], e = r; e = e.parentNode;) e.nodeType === 1 && t.push({
                    element: e,
                    left: e.scrollLeft,
                    top: e.scrollTop
                });
                for (typeof r.focus == "function" && r.focus(), r = 0; r < t.length; r++) e = t[r], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
            }
        }
        var uR = Gr && "documentMode" in document && 11 >= document.documentMode,
            Xo = null,
            xd = null,
            Oa = null,
            Sd = !1;

        function tv(e, t, r) {
            var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
            Sd || Xo == null || Xo !== Nl(n) || (n = Xo, "selectionStart" in n && sp(n) ? n = {
                start: n.selectionStart,
                end: n.selectionEnd
            } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = {
                anchorNode: n.anchorNode,
                anchorOffset: n.anchorOffset,
                focusNode: n.focusNode,
                focusOffset: n.focusOffset
            }), Oa && Fa(Oa, n) || (Oa = n, n = jl(xd, "onSelect"), 0 < n.length && (t = new op("onSelect", "select", null, t, r), e.push({
                event: t,
                listeners: n
            }), t.target = Xo)))
        }

        function cl(e, t) {
            var r = {};
            return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit" + e] = "webkit" + t, r["Moz" + e] = "moz" + t, r
        }
        var Go = {
                animationend: cl("Animation", "AnimationEnd"),
                animationiteration: cl("Animation", "AnimationIteration"),
                animationstart: cl("Animation", "AnimationStart"),
                transitionend: cl("Transition", "TransitionEnd")
            },
            zf = {},
            Oy = {};
        Gr && (Oy = document.createElement("div").style, "AnimationEvent" in window || (delete Go.animationend.animation, delete Go.animationiteration.animation, delete Go.animationstart.animation), "TransitionEvent" in window || delete Go.transitionend.transition);

        function nu(e) {
            if (zf[e]) return zf[e];
            if (!Go[e]) return e;
            var t = Go[e],
                r;
            for (r in t)
                if (t.hasOwnProperty(r) && r in Oy) return zf[e] = t[r];
            return e
        }
        var Py = nu("animationend"),
            Ay = nu("animationiteration"),
            Ty = nu("animationstart"),
            Ny = nu("transitionend"),
            ky = new Map,
            rv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

        function _n(e, t) {
            ky.set(e, t), co(t, [e])
        }
        for (fl = 0; fl < rv.length; fl++) dl = rv[fl], nv = dl.toLowerCase(), ov = dl[0].toUpperCase() + dl.slice(1), _n(nv, "on" + ov);
        var dl, nv, ov, fl;
        _n(Py, "onAnimationEnd");
        _n(Ay, "onAnimationIteration");
        _n(Ty, "onAnimationStart");
        _n("dblclick", "onDoubleClick");
        _n("focusin", "onFocus");
        _n("focusout", "onBlur");
        _n(Ny, "onTransitionEnd");
        ui("onMouseEnter", ["mouseout", "mouseover"]);
        ui("onMouseLeave", ["mouseout", "mouseover"]);
        ui("onPointerEnter", ["pointerout", "pointerover"]);
        ui("onPointerLeave", ["pointerout", "pointerover"]);
        co("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
        co("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
        co("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
        co("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
        co("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
        co("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
        var Ca = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
            cR = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ca));

        function iv(e, t, r) {
            var n = e.type || "unknown-event";
            e.currentTarget = r, cE(n, t, void 0, e), e.currentTarget = null
        }

        function _y(e, t) {
            t = (t & 4) !== 0;
            for (var r = 0; r < e.length; r++) {
                var n = e[r],
                    o = n.event;
                n = n.listeners;
                e: {
                    var i = void 0;
                    if (t)
                        for (var a = n.length - 1; 0 <= a; a--) {
                            var s = n[a],
                                l = s.instance,
                                u = s.currentTarget;
                            if (s = s.listener, l !== i && o.isPropagationStopped()) break e;
                            iv(o, s, u), i = l
                        } else
                            for (a = 0; a < n.length; a++) {
                                if (s = n[a], l = s.instance, u = s.currentTarget, s = s.listener, l !== i && o.isPropagationStopped()) break e;
                                iv(o, s, u), i = l
                            }
                }
            }
            if (_l) throw e = gd, _l = !1, gd = null, e
        }

        function de(e, t) {
            var r = t[Rd];
            r === void 0 && (r = t[Rd] = new Set);
            var n = e + "__bubble";
            r.has(n) || (Ly(t, e, 2, !1), r.add(n))
        }

        function Hf(e, t, r) {
            var n = 0;
            t && (n |= 4), Ly(r, e, n, t)
        }
        var pl = "_reactListening" + Math.random().toString(36).slice(2);

        function Da(e) {
            if (!e[pl]) {
                e[pl] = !0, Bv.forEach(function(r) {
                    r !== "selectionchange" && (cR.has(r) || Hf(r, !1, e), Hf(r, !0, e))
                });
                var t = e.nodeType === 9 ? e : e.ownerDocument;
                t === null || t[pl] || (t[pl] = !0, Hf("selectionchange", !1, t))
            }
        }

        function Ly(e, t, r, n) {
            switch (hy(t)) {
                case 1:
                    var o = OE;
                    break;
                case 4:
                    o = PE;
                    break;
                default:
                    o = rp
            }
            r = o.bind(null, t, r, e), o = void 0, !md || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), n ? o !== void 0 ? e.addEventListener(t, r, {
                capture: !0,
                passive: o
            }) : e.addEventListener(t, r, !0) : o !== void 0 ? e.addEventListener(t, r, {
                passive: o
            }) : e.addEventListener(t, r, !1)
        }

        function Vf(e, t, r, n, o) {
            var i = n;
            if (!(t & 1) && !(t & 2) && n !== null) e: for (;;) {
                if (n === null) return;
                var a = n.tag;
                if (a === 3 || a === 4) {
                    var s = n.stateNode.containerInfo;
                    if (s === o || s.nodeType === 8 && s.parentNode === o) break;
                    if (a === 4)
                        for (a = n.return; a !== null;) {
                            var l = a.tag;
                            if ((l === 3 || l === 4) && (l = a.stateNode.containerInfo, l === o || l.nodeType === 8 && l.parentNode === o)) return;
                            a = a.return
                        }
                    for (; s !== null;) {
                        if (a = eo(s), a === null) return;
                        if (l = a.tag, l === 5 || l === 6) {
                            n = i = a;
                            continue e
                        }
                        s = s.parentNode
                    }
                }
                n = n.return
            }
            ry(function() {
                var u = i,
                    f = Zd(r),
                    c = [];
                e: {
                    var d = ky.get(e);
                    if (d !== void 0) {
                        var g = op,
                            v = e;
                        switch (e) {
                            case "keypress":
                                if (wl(r) === 0) break e;
                            case "keydown":
                            case "keyup":
                                g = HE;
                                break;
                            case "focusin":
                                v = "focus", g = Df;
                                break;
                            case "focusout":
                                v = "blur", g = Df;
                                break;
                            case "beforeblur":
                            case "afterblur":
                                g = Df;
                                break;
                            case "click":
                                if (r.button === 2) break e;
                            case "auxclick":
                            case "dblclick":
                            case "mousedown":
                            case "mousemove":
                            case "mouseup":
                            case "mouseout":
                            case "mouseover":
                            case "contextmenu":
                                g = Qh;
                                break;
                            case "drag":
                            case "dragend":
                            case "dragenter":
                            case "dragexit":
                            case "dragleave":
                            case "dragover":
                            case "dragstart":
                            case "drop":
                                g = NE;
                                break;
                            case "touchcancel":
                            case "touchend":
                            case "touchmove":
                            case "touchstart":
                                g = WE;
                                break;
                            case Py:
                            case Ay:
                            case Ty:
                                g = LE;
                                break;
                            case Ny:
                                g = KE;
                                break;
                            case "scroll":
                                g = AE;
                                break;
                            case "wheel":
                                g = GE;
                                break;
                            case "copy":
                            case "cut":
                            case "paste":
                                g = ME;
                                break;
                            case "gotpointercapture":
                            case "lostpointercapture":
                            case "pointercancel":
                            case "pointerdown":
                            case "pointermove":
                            case "pointerout":
                            case "pointerover":
                            case "pointerup":
                                g = Xh
                        }
                        var y = (t & 4) !== 0,
                            b = !y && e === "scroll",
                            p = y ? d !== null ? d + "Capture" : null : d;
                        y = [];
                        for (var m = u, h; m !== null;) {
                            h = m;
                            var x = h.stateNode;
                            if (h.tag === 5 && x !== null && (h = x, p !== null && (x = La(m, p), x != null && y.push(Ba(m, x, h)))), b) break;
                            m = m.return
                        }
                        0 < y.length && (d = new g(d, v, null, r, f), c.push({
                            event: d,
                            listeners: y
                        }))
                    }
                }
                if (!(t & 7)) {
                    e: {
                        if (d = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", d && r !== dd && (v = r.relatedTarget || r.fromElement) && (eo(v) || v[Jr])) break e;
                        if ((g || d) && (d = f.window === f ? f : (d = f.ownerDocument) ? d.defaultView || d.parentWindow : window, g ? (v = r.relatedTarget || r.toElement, g = u, v = v ? eo(v) : null, v !== null && (b = fo(v), v !== b || v.tag !== 5 && v.tag !== 6) && (v = null)) : (g = null, v = u), g !== v)) {
                            if (y = Qh, x = "onMouseLeave", p = "onMouseEnter", m = "mouse", (e === "pointerout" || e === "pointerover") && (y = Xh, x = "onPointerLeave", p = "onPointerEnter", m = "pointer"), b = g == null ? d : Jo(g), h = v == null ? d : Jo(v), d = new y(x, m + "leave", g, r, f), d.target = b, d.relatedTarget = h, x = null, eo(f) === u && (y = new y(p, m + "enter", v, r, f), y.target = h, y.relatedTarget = b, x = y), b = x, g && v) t: {
                                for (y = g, p = v, m = 0, h = y; h; h = Uo(h)) m++;
                                for (h = 0, x = p; x; x = Uo(x)) h++;
                                for (; 0 < m - h;) y = Uo(y),
                                m--;
                                for (; 0 < h - m;) p = Uo(p),
                                h--;
                                for (; m--;) {
                                    if (y === p || p !== null && y === p.alternate) break t;
                                    y = Uo(y), p = Uo(p)
                                }
                                y = null
                            }
                            else y = null;
                            g !== null && av(c, d, g, y, !1), v !== null && b !== null && av(c, b, v, y, !0)
                        }
                    }
                    e: {
                        if (d = u ? Jo(u) : window, g = d.nodeName && d.nodeName.toLowerCase(), g === "select" || g === "input" && d.type === "file") var S = rR;
                        else if (Yh(d))
                            if (wy) S = aR;
                            else {
                                S = oR;
                                var C = nR
                            }
                        else(g = d.nodeName) && g.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (S = iR);
                        if (S && (S = S(e, u))) {
                            Cy(c, S, r, f);
                            break e
                        }
                        C && C(e, d, u),
                        e === "focusout" && (C = d._wrapperState) && C.controlled && d.type === "number" && sd(d, "number", d.value)
                    }
                    switch (C = u ? Jo(u) : window, e) {
                        case "focusin":
                            (Yh(C) || C.contentEditable === "true") && (Xo = C, xd = u, Oa = null);
                            break;
                        case "focusout":
                            Oa = xd = Xo = null;
                            break;
                        case "mousedown":
                            Sd = !0;
                            break;
                        case "contextmenu":
                        case "mouseup":
                        case "dragend":
                            Sd = !1, tv(c, r, f);
                            break;
                        case "selectionchange":
                            if (uR) break;
                        case "keydown":
                        case "keyup":
                            tv(c, r, f)
                    }
                    var w;
                    if (ap) e: {
                        switch (e) {
                            case "compositionstart":
                                var O = "onCompositionStart";
                                break e;
                            case "compositionend":
                                O = "onCompositionEnd";
                                break e;
                            case "compositionupdate":
                                O = "onCompositionUpdate";
                                break e
                        }
                        O = void 0
                    }
                    else Ko ? xy(e, r) && (O = "onCompositionEnd") : e === "keydown" && r.keyCode === 229 && (O = "onCompositionStart");O && (yy && r.locale !== "ko" && (Ko || O !== "onCompositionStart" ? O === "onCompositionEnd" && Ko && (w = vy()) : (Sn = f, np = "value" in Sn ? Sn.value : Sn.textContent, Ko = !0)), C = jl(u, O), 0 < C.length && (O = new Kh(O, e, null, r, f), c.push({
                        event: O,
                        listeners: C
                    }), w ? O.data = w : (w = Sy(r), w !== null && (O.data = w)))),
                    (w = YE ? ZE(e, r) : qE(e, r)) && (u = jl(u, "onBeforeInput"), 0 < u.length && (f = new Kh("onBeforeInput", "beforeinput", null, r, f), c.push({
                        event: f,
                        listeners: u
                    }), f.data = w))
                }
                _y(c, t)
            })
        }

        function Ba(e, t, r) {
            return {
                instance: e,
                listener: t,
                currentTarget: r
            }
        }

        function jl(e, t) {
            for (var r = t + "Capture", n = []; e !== null;) {
                var o = e,
                    i = o.stateNode;
                o.tag === 5 && i !== null && (o = i, i = La(e, r), i != null && n.unshift(Ba(e, i, o)), i = La(e, t), i != null && n.push(Ba(e, i, o))), e = e.return
            }
            return n
        }

        function Uo(e) {
            if (e === null) return null;
            do e = e.return; while (e && e.tag !== 5);
            return e || null
        }

        function av(e, t, r, n, o) {
            for (var i = t._reactName, a = []; r !== null && r !== n;) {
                var s = r,
                    l = s.alternate,
                    u = s.stateNode;
                if (l !== null && l === n) break;
                s.tag === 5 && u !== null && (s = u, o ? (l = La(r, i), l != null && a.unshift(Ba(r, l, s))) : o || (l = La(r, i), l != null && a.push(Ba(r, l, s)))), r = r.return
            }
            a.length !== 0 && e.push({
                event: t,
                listeners: a
            })
        }
        var fR = /\r\n?/g,
            dR = /\u0000|\uFFFD/g;

        function sv(e) {
            return (typeof e == "string" ? e : "" + e).replace(fR, `
`).replace(dR, "")
        }

        function ml(e, t, r) {
            if (t = sv(t), sv(e) !== t && r) throw Error(I(425))
        }

        function Fl() {}
        var Cd = null,
            wd = null;

        function bd(e, t) {
            return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
        }
        var Ed = typeof setTimeout == "function" ? setTimeout : void 0,
            pR = typeof clearTimeout == "function" ? clearTimeout : void 0,
            lv = typeof Promise == "function" ? Promise : void 0,
            mR = typeof queueMicrotask == "function" ? queueMicrotask : typeof lv < "u" ? function(e) {
                return lv.resolve(null).then(e).catch(gR)
            } : Ed;

        function gR(e) {
            setTimeout(function() {
                throw e
            })
        }

        function Uf(e, t) {
            var r = t,
                n = 0;
            do {
                var o = r.nextSibling;
                if (e.removeChild(r), o && o.nodeType === 8)
                    if (r = o.data, r === "/$") {
                        if (n === 0) {
                            e.removeChild(o), Ia(t);
                            return
                        }
                        n--
                    } else r !== "$" && r !== "$?" && r !== "$!" || n++;
                r = o
            } while (r);
            Ia(t)
        }

        function Rn(e) {
            for (; e != null; e = e.nextSibling) {
                var t = e.nodeType;
                if (t === 1 || t === 3) break;
                if (t === 8) {
                    if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
                    if (t === "/$") return null
                }
            }
            return e
        }

        function uv(e) {
            e = e.previousSibling;
            for (var t = 0; e;) {
                if (e.nodeType === 8) {
                    var r = e.data;
                    if (r === "$" || r === "$!" || r === "$?") {
                        if (t === 0) return e;
                        t--
                    } else r === "/$" && t++
                }
                e = e.previousSibling
            }
            return null
        }
        var vi = Math.random().toString(36).slice(2),
            Tr = "__reactFiber$" + vi,
            za = "__reactProps$" + vi,
            Jr = "__reactContainer$" + vi,
            Rd = "__reactEvents$" + vi,
            hR = "__reactListeners$" + vi,
            vR = "__reactHandles$" + vi;

        function eo(e) {
            var t = e[Tr];
            if (t) return t;
            for (var r = e.parentNode; r;) {
                if (t = r[Jr] || r[Tr]) {
                    if (r = t.alternate, t.child !== null || r !== null && r.child !== null)
                        for (e = uv(e); e !== null;) {
                            if (r = e[Tr]) return r;
                            e = uv(e)
                        }
                    return t
                }
                e = r, r = e.parentNode
            }
            return null
        }

        function Ja(e) {
            return e = e[Tr] || e[Jr], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
        }

        function Jo(e) {
            if (e.tag === 5 || e.tag === 6) return e.stateNode;
            throw Error(I(33))
        }

        function ou(e) {
            return e[za] || null
        }
        var Od = [],
            Yo = -1;

        function Ln(e) {
            return {
                current: e
            }
        }

        function pe(e) {
            0 > Yo || (e.current = Od[Yo], Od[Yo] = null, Yo--)
        }

        function ce(e, t) {
            Yo++, Od[Yo] = e.current, e.current = t
        }
        var kn = {},
            ot = Ln(kn),
            wt = Ln(!1),
            io = kn;

        function ci(e, t) {
            var r = e.type.contextTypes;
            if (!r) return kn;
            var n = e.stateNode;
            if (n && n.__reactInternalMemoizedUnmaskedChildContext === t) return n.__reactInternalMemoizedMaskedChildContext;
            var o = {},
                i;
            for (i in r) o[i] = t[i];
            return n && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o
        }

        function bt(e) {
            return e = e.childContextTypes, e != null
        }

        function Dl() {
            pe(wt), pe(ot)
        }

        function cv(e, t, r) {
            if (ot.current !== kn) throw Error(I(168));
            ce(ot, t), ce(wt, r)
        }

        function $y(e, t, r) {
            var n = e.stateNode;
            if (t = t.childContextTypes, typeof n.getChildContext != "function") return r;
            n = n.getChildContext();
            for (var o in n)
                if (!(o in t)) throw Error(I(108, nE(e) || "Unknown", o));
            return we({}, r, n)
        }

        function Bl(e) {
            return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || kn, io = ot.current, ce(ot, e), ce(wt, wt.current), !0
        }

        function fv(e, t, r) {
            var n = e.stateNode;
            if (!n) throw Error(I(169));
            r ? (e = $y(e, t, io), n.__reactInternalMemoizedMergedChildContext = e, pe(wt), pe(ot), ce(ot, e)) : pe(wt), ce(wt, r)
        }
        var Wr = null,
            iu = !1,
            Wf = !1;

        function My(e) {
            Wr === null ? Wr = [e] : Wr.push(e)
        }

        function yR(e) {
            iu = !0, My(e)
        }

        function $n() {
            if (!Wf && Wr !== null) {
                Wf = !0;
                var e = 0,
                    t = ie;
                try {
                    var r = Wr;
                    for (ie = 1; e < r.length; e++) {
                        var n = r[e];
                        do n = n(!0); while (n !== null)
                    }
                    Wr = null, iu = !1
                } catch (o) {
                    throw Wr !== null && (Wr = Wr.slice(e + 1)), ay(qd, $n), o
                } finally {
                    ie = t, Wf = !1
                }
            }
            return null
        }
        var Zo = [],
            qo = 0,
            zl = null,
            Hl = 0,
            Ut = [],
            Wt = 0,
            ao = null,
            Qr = 1,
            Kr = "";

        function Zn(e, t) {
            Zo[qo++] = Hl, Zo[qo++] = zl, zl = e, Hl = t
        }

        function Iy(e, t, r) {
            Ut[Wt++] = Qr, Ut[Wt++] = Kr, Ut[Wt++] = ao, ao = e;
            var n = Qr;
            e = Kr;
            var o = 32 - fr(n) - 1;
            n &= ~(1 << o), r += 1;
            var i = 32 - fr(t) + o;
            if (30 < i) {
                var a = o - o % 5;
                i = (n & (1 << a) - 1).toString(32), n >>= a, o -= a, Qr = 1 << 32 - fr(t) + o | r << o | n, Kr = i + e
            } else Qr = 1 << i | r << o | n, Kr = e
        }

        function lp(e) {
            e.return !== null && (Zn(e, 1), Iy(e, 1, 0))
        }

        function up(e) {
            for (; e === zl;) zl = Zo[--qo], Zo[qo] = null, Hl = Zo[--qo], Zo[qo] = null;
            for (; e === ao;) ao = Ut[--Wt], Ut[Wt] = null, Kr = Ut[--Wt], Ut[Wt] = null, Qr = Ut[--Wt], Ut[Wt] = null
        }
        var Lt = null,
            _t = null,
            ve = !1,
            cr = null;

        function jy(e, t) {
            var r = Qt(5, null, null, 0);
            r.elementType = "DELETED", r.stateNode = t, r.return = e, t = e.deletions, t === null ? (e.deletions = [r], e.flags |= 16) : t.push(r)
        }

        function dv(e, t) {
            switch (e.tag) {
                case 5:
                    var r = e.type;
                    return t = t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Lt = e, _t = Rn(t.firstChild), !0) : !1;
                case 6:
                    return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Lt = e, _t = null, !0) : !1;
                case 13:
                    return t = t.nodeType !== 8 ? null : t, t !== null ? (r = ao !== null ? {
                        id: Qr,
                        overflow: Kr
                    } : null, e.memoizedState = {
                        dehydrated: t,
                        treeContext: r,
                        retryLane: 1073741824
                    }, r = Qt(18, null, null, 0), r.stateNode = t, r.return = e, e.child = r, Lt = e, _t = null, !0) : !1;
                default:
                    return !1
            }
        }

        function Pd(e) {
            return (e.mode & 1) !== 0 && (e.flags & 128) === 0
        }

        function Ad(e) {
            if (ve) {
                var t = _t;
                if (t) {
                    var r = t;
                    if (!dv(e, t)) {
                        if (Pd(e)) throw Error(I(418));
                        t = Rn(r.nextSibling);
                        var n = Lt;
                        t && dv(e, t) ? jy(n, r) : (e.flags = e.flags & -4097 | 2, ve = !1, Lt = e)
                    }
                } else {
                    if (Pd(e)) throw Error(I(418));
                    e.flags = e.flags & -4097 | 2, ve = !1, Lt = e
                }
            }
        }

        function pv(e) {
            for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
            Lt = e
        }

        function gl(e) {
            if (e !== Lt) return !1;
            if (!ve) return pv(e), ve = !0, !1;
            var t;
            if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !bd(e.type, e.memoizedProps)), t && (t = _t)) {
                if (Pd(e)) throw Fy(), Error(I(418));
                for (; t;) jy(e, t), t = Rn(t.nextSibling)
            }
            if (pv(e), e.tag === 13) {
                if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(I(317));
                e: {
                    for (e = e.nextSibling, t = 0; e;) {
                        if (e.nodeType === 8) {
                            var r = e.data;
                            if (r === "/$") {
                                if (t === 0) {
                                    _t = Rn(e.nextSibling);
                                    break e
                                }
                                t--
                            } else r !== "$" && r !== "$!" && r !== "$?" || t++
                        }
                        e = e.nextSibling
                    }
                    _t = null
                }
            } else _t = Lt ? Rn(e.stateNode.nextSibling) : null;
            return !0
        }

        function Fy() {
            for (var e = _t; e;) e = Rn(e.nextSibling)
        }

        function fi() {
            _t = Lt = null, ve = !1
        }

        function cp(e) {
            cr === null ? cr = [e] : cr.push(e)
        }
        var xR = qr.ReactCurrentBatchConfig;

        function lr(e, t) {
            if (e && e.defaultProps) {
                t = we({}, t), e = e.defaultProps;
                for (var r in e) t[r] === void 0 && (t[r] = e[r]);
                return t
            }
            return t
        }
        var Vl = Ln(null),
            Ul = null,
            ei = null,
            fp = null;

        function dp() {
            fp = ei = Ul = null
        }

        function pp(e) {
            var t = Vl.current;
            pe(Vl), e._currentValue = t
        }

        function Td(e, t, r) {
            for (; e !== null;) {
                var n = e.alternate;
                if ((e.childLanes & t) !== t ? (e.childLanes |= t, n !== null && (n.childLanes |= t)) : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t), e === r) break;
                e = e.return
            }
        }

        function si(e, t) {
            Ul = e, fp = ei = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ct = !0), e.firstContext = null)
        }

        function Xt(e) {
            var t = e._currentValue;
            if (fp !== e)
                if (e = {
                        context: e,
                        memoizedValue: t,
                        next: null
                    }, ei === null) {
                    if (Ul === null) throw Error(I(308));
                    ei = e, Ul.dependencies = {
                        lanes: 0,
                        firstContext: e
                    }
                } else ei = ei.next = e;
            return t
        }
        var to = null;

        function mp(e) {
            to === null ? to = [e] : to.push(e)
        }

        function Dy(e, t, r, n) {
            var o = t.interleaved;
            return o === null ? (r.next = r, mp(t)) : (r.next = o.next, o.next = r), t.interleaved = r, Yr(e, n)
        }

        function Yr(e, t) {
            e.lanes |= t;
            var r = e.alternate;
            for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null;) e.childLanes |= t, r = e.alternate, r !== null && (r.childLanes |= t), r = e, e = e.return;
            return r.tag === 3 ? r.stateNode : null
        }
        var vn = !1;

        function gp(e) {
            e.updateQueue = {
                baseState: e.memoizedState,
                firstBaseUpdate: null,
                lastBaseUpdate: null,
                shared: {
                    pending: null,
                    interleaved: null,
                    lanes: 0
                },
                effects: null
            }
        }

        function By(e, t) {
            e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects
            })
        }

        function Xr(e, t) {
            return {
                eventTime: e,
                lane: t,
                tag: 0,
                payload: null,
                callback: null,
                next: null
            }
        }

        function On(e, t, r) {
            var n = e.updateQueue;
            if (n === null) return null;
            if (n = n.shared, Z & 2) {
                var o = n.pending;
                return o === null ? t.next = t : (t.next = o.next, o.next = t), n.pending = t, Yr(e, r)
            }
            return o = n.interleaved, o === null ? (t.next = t, mp(n)) : (t.next = o.next, o.next = t), n.interleaved = t, Yr(e, r)
        }

        function bl(e, t, r) {
            if (t = t.updateQueue, t !== null && (t = t.shared, (r & 4194240) !== 0)) {
                var n = t.lanes;
                n &= e.pendingLanes, r |= n, t.lanes = r, ep(e, r)
            }
        }

        function mv(e, t) {
            var r = e.updateQueue,
                n = e.alternate;
            if (n !== null && (n = n.updateQueue, r === n)) {
                var o = null,
                    i = null;
                if (r = r.firstBaseUpdate, r !== null) {
                    do {
                        var a = {
                            eventTime: r.eventTime,
                            lane: r.lane,
                            tag: r.tag,
                            payload: r.payload,
                            callback: r.callback,
                            next: null
                        };
                        i === null ? o = i = a : i = i.next = a, r = r.next
                    } while (r !== null);
                    i === null ? o = i = t : i = i.next = t
                } else o = i = t;
                r = {
                    baseState: n.baseState,
                    firstBaseUpdate: o,
                    lastBaseUpdate: i,
                    shared: n.shared,
                    effects: n.effects
                }, e.updateQueue = r;
                return
            }
            e = r.lastBaseUpdate, e === null ? r.firstBaseUpdate = t : e.next = t, r.lastBaseUpdate = t
        }

        function Wl(e, t, r, n) {
            var o = e.updateQueue;
            vn = !1;
            var i = o.firstBaseUpdate,
                a = o.lastBaseUpdate,
                s = o.shared.pending;
            if (s !== null) {
                o.shared.pending = null;
                var l = s,
                    u = l.next;
                l.next = null, a === null ? i = u : a.next = u, a = l;
                var f = e.alternate;
                f !== null && (f = f.updateQueue, s = f.lastBaseUpdate, s !== a && (s === null ? f.firstBaseUpdate = u : s.next = u, f.lastBaseUpdate = l))
            }
            if (i !== null) {
                var c = o.baseState;
                a = 0, f = u = l = null, s = i;
                do {
                    var d = s.lane,
                        g = s.eventTime;
                    if ((n & d) === d) {
                        f !== null && (f = f.next = {
                            eventTime: g,
                            lane: 0,
                            tag: s.tag,
                            payload: s.payload,
                            callback: s.callback,
                            next: null
                        });
                        e: {
                            var v = e,
                                y = s;
                            switch (d = t, g = r, y.tag) {
                                case 1:
                                    if (v = y.payload, typeof v == "function") {
                                        c = v.call(g, c, d);
                                        break e
                                    }
                                    c = v;
                                    break e;
                                case 3:
                                    v.flags = v.flags & -65537 | 128;
                                case 0:
                                    if (v = y.payload, d = typeof v == "function" ? v.call(g, c, d) : v, d == null) break e;
                                    c = we({}, c, d);
                                    break e;
                                case 2:
                                    vn = !0
                            }
                        }
                        s.callback !== null && s.lane !== 0 && (e.flags |= 64, d = o.effects, d === null ? o.effects = [s] : d.push(s))
                    } else g = {
                        eventTime: g,
                        lane: d,
                        tag: s.tag,
                        payload: s.payload,
                        callback: s.callback,
                        next: null
                    }, f === null ? (u = f = g, l = c) : f = f.next = g, a |= d;
                    if (s = s.next, s === null) {
                        if (s = o.shared.pending, s === null) break;
                        d = s, s = d.next, d.next = null, o.lastBaseUpdate = d, o.shared.pending = null
                    }
                } while (1);
                if (f === null && (l = c), o.baseState = l, o.firstBaseUpdate = u, o.lastBaseUpdate = f, t = o.shared.interleaved, t !== null) {
                    o = t;
                    do a |= o.lane, o = o.next; while (o !== t)
                } else i === null && (o.shared.lanes = 0);
                lo |= a, e.lanes = a, e.memoizedState = c
            }
        }

        function gv(e, t, r) {
            if (e = t.effects, t.effects = null, e !== null)
                for (t = 0; t < e.length; t++) {
                    var n = e[t],
                        o = n.callback;
                    if (o !== null) {
                        if (n.callback = null, n = r, typeof o != "function") throw Error(I(191, o));
                        o.call(n)
                    }
                }
        }
        var zy = new Dv.Component().refs;

        function Nd(e, t, r, n) {
            t = e.memoizedState, r = r(n, t), r = r == null ? t : we({}, t, r), e.memoizedState = r, e.lanes === 0 && (e.updateQueue.baseState = r)
        }
        var au = {
            isMounted: function(e) {
                return (e = e._reactInternals) ? fo(e) === e : !1
            },
            enqueueSetState: function(e, t, r) {
                e = e._reactInternals;
                var n = ft(),
                    o = An(e),
                    i = Xr(n, o);
                i.payload = t, r != null && (i.callback = r), t = On(e, i, o), t !== null && (dr(t, e, o, n), bl(t, e, o))
            },
            enqueueReplaceState: function(e, t, r) {
                e = e._reactInternals;
                var n = ft(),
                    o = An(e),
                    i = Xr(n, o);
                i.tag = 1, i.payload = t, r != null && (i.callback = r), t = On(e, i, o), t !== null && (dr(t, e, o, n), bl(t, e, o))
            },
            enqueueForceUpdate: function(e, t) {
                e = e._reactInternals;
                var r = ft(),
                    n = An(e),
                    o = Xr(r, n);
                o.tag = 2, t != null && (o.callback = t), t = On(e, o, n), t !== null && (dr(t, e, n, r), bl(t, e, n))
            }
        };

        function hv(e, t, r, n, o, i, a) {
            return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(n, i, a) : t.prototype && t.prototype.isPureReactComponent ? !Fa(r, n) || !Fa(o, i) : !0
        }

        function Hy(e, t, r) {
            var n = !1,
                o = kn,
                i = t.contextType;
            return typeof i == "object" && i !== null ? i = Xt(i) : (o = bt(t) ? io : ot.current, n = t.contextTypes, i = (n = n != null) ? ci(e, o) : kn), t = new t(r, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = au, e.stateNode = t, t._reactInternals = e, n && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t
        }

        function vv(e, t, r, n) {
            e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(r, n), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(r, n), t.state !== e && au.enqueueReplaceState(t, t.state, null)
        }

        function kd(e, t, r, n) {
            var o = e.stateNode;
            o.props = r, o.state = e.memoizedState, o.refs = zy, gp(e);
            var i = t.contextType;
            typeof i == "object" && i !== null ? o.context = Xt(i) : (i = bt(t) ? io : ot.current, o.context = ci(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Nd(e, t, i, r), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && au.enqueueReplaceState(o, o.state, null), Wl(e, r, o, n), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308)
        }

        function ma(e, t, r) {
            if (e = r.ref, e !== null && typeof e != "function" && typeof e != "object") {
                if (r._owner) {
                    if (r = r._owner, r) {
                        if (r.tag !== 1) throw Error(I(309));
                        var n = r.stateNode
                    }
                    if (!n) throw Error(I(147, e));
                    var o = n,
                        i = "" + e;
                    return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(a) {
                        var s = o.refs;
                        s === zy && (s = o.refs = {}), a === null ? delete s[i] : s[i] = a
                    }, t._stringRef = i, t)
                }
                if (typeof e != "string") throw Error(I(284));
                if (!r._owner) throw Error(I(290, e))
            }
            return e
        }

        function hl(e, t) {
            throw e = Object.prototype.toString.call(t), Error(I(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
        }

        function yv(e) {
            var t = e._init;
            return t(e._payload)
        }

        function Vy(e) {
            function t(p, m) {
                if (e) {
                    var h = p.deletions;
                    h === null ? (p.deletions = [m], p.flags |= 16) : h.push(m)
                }
            }

            function r(p, m) {
                if (!e) return null;
                for (; m !== null;) t(p, m), m = m.sibling;
                return null
            }

            function n(p, m) {
                for (p = new Map; m !== null;) m.key !== null ? p.set(m.key, m) : p.set(m.index, m), m = m.sibling;
                return p
            }

            function o(p, m) {
                return p = Tn(p, m), p.index = 0, p.sibling = null, p
            }

            function i(p, m, h) {
                return p.index = h, e ? (h = p.alternate, h !== null ? (h = h.index, h < m ? (p.flags |= 2, m) : h) : (p.flags |= 2, m)) : (p.flags |= 1048576, m)
            }

            function a(p) {
                return e && p.alternate === null && (p.flags |= 2), p
            }

            function s(p, m, h, x) {
                return m === null || m.tag !== 6 ? (m = Zf(h, p.mode, x), m.return = p, m) : (m = o(m, h), m.return = p, m)
            }

            function l(p, m, h, x) {
                var S = h.type;
                return S === Qo ? f(p, m, h.props.children, x, h.key) : m !== null && (m.elementType === S || typeof S == "object" && S !== null && S.$$typeof === hn && yv(S) === m.type) ? (x = o(m, h.props), x.ref = ma(p, m, h), x.return = p, x) : (x = Tl(h.type, h.key, h.props, null, p.mode, x), x.ref = ma(p, m, h), x.return = p, x)
            }

            function u(p, m, h, x) {
                return m === null || m.tag !== 4 || m.stateNode.containerInfo !== h.containerInfo || m.stateNode.implementation !== h.implementation ? (m = qf(h, p.mode, x), m.return = p, m) : (m = o(m, h.children || []), m.return = p, m)
            }

            function f(p, m, h, x, S) {
                return m === null || m.tag !== 7 ? (m = oo(h, p.mode, x, S), m.return = p, m) : (m = o(m, h), m.return = p, m)
            }

            function c(p, m, h) {
                if (typeof m == "string" && m !== "" || typeof m == "number") return m = Zf("" + m, p.mode, h), m.return = p, m;
                if (typeof m == "object" && m !== null) {
                    switch (m.$$typeof) {
                        case tl:
                            return h = Tl(m.type, m.key, m.props, null, p.mode, h), h.ref = ma(p, null, m), h.return = p, h;
                        case Wo:
                            return m = qf(m, p.mode, h), m.return = p, m;
                        case hn:
                            var x = m._init;
                            return c(p, x(m._payload), h)
                    }
                    if (xa(m) || ca(m)) return m = oo(m, p.mode, h, null), m.return = p, m;
                    hl(p, m)
                }
                return null
            }

            function d(p, m, h, x) {
                var S = m !== null ? m.key : null;
                if (typeof h == "string" && h !== "" || typeof h == "number") return S !== null ? null : s(p, m, "" + h, x);
                if (typeof h == "object" && h !== null) {
                    switch (h.$$typeof) {
                        case tl:
                            return h.key === S ? l(p, m, h, x) : null;
                        case Wo:
                            return h.key === S ? u(p, m, h, x) : null;
                        case hn:
                            return S = h._init, d(p, m, S(h._payload), x)
                    }
                    if (xa(h) || ca(h)) return S !== null ? null : f(p, m, h, x, null);
                    hl(p, h)
                }
                return null
            }

            function g(p, m, h, x, S) {
                if (typeof x == "string" && x !== "" || typeof x == "number") return p = p.get(h) || null, s(m, p, "" + x, S);
                if (typeof x == "object" && x !== null) {
                    switch (x.$$typeof) {
                        case tl:
                            return p = p.get(x.key === null ? h : x.key) || null, l(m, p, x, S);
                        case Wo:
                            return p = p.get(x.key === null ? h : x.key) || null, u(m, p, x, S);
                        case hn:
                            var C = x._init;
                            return g(p, m, h, C(x._payload), S)
                    }
                    if (xa(x) || ca(x)) return p = p.get(h) || null, f(m, p, x, S, null);
                    hl(m, x)
                }
                return null
            }

            function v(p, m, h, x) {
                for (var S = null, C = null, w = m, O = m = 0, A = null; w !== null && O < h.length; O++) {
                    w.index > O ? (A = w, w = null) : A = w.sibling;
                    var E = d(p, w, h[O], x);
                    if (E === null) {
                        w === null && (w = A);
                        break
                    }
                    e && w && E.alternate === null && t(p, w), m = i(E, m, O), C === null ? S = E : C.sibling = E, C = E, w = A
                }
                if (O === h.length) return r(p, w), ve && Zn(p, O), S;
                if (w === null) {
                    for (; O < h.length; O++) w = c(p, h[O], x), w !== null && (m = i(w, m, O), C === null ? S = w : C.sibling = w, C = w);
                    return ve && Zn(p, O), S
                }
                for (w = n(p, w); O < h.length; O++) A = g(w, p, O, h[O], x), A !== null && (e && A.alternate !== null && w.delete(A.key === null ? O : A.key), m = i(A, m, O), C === null ? S = A : C.sibling = A, C = A);
                return e && w.forEach(function(N) {
                    return t(p, N)
                }), ve && Zn(p, O), S
            }

            function y(p, m, h, x) {
                var S = ca(h);
                if (typeof S != "function") throw Error(I(150));
                if (h = S.call(h), h == null) throw Error(I(151));
                for (var C = S = null, w = m, O = m = 0, A = null, E = h.next(); w !== null && !E.done; O++, E = h.next()) {
                    w.index > O ? (A = w, w = null) : A = w.sibling;
                    var N = d(p, w, E.value, x);
                    if (N === null) {
                        w === null && (w = A);
                        break
                    }
                    e && w && N.alternate === null && t(p, w), m = i(N, m, O), C === null ? S = N : C.sibling = N, C = N, w = A
                }
                if (E.done) return r(p, w), ve && Zn(p, O), S;
                if (w === null) {
                    for (; !E.done; O++, E = h.next()) E = c(p, E.value, x), E !== null && (m = i(E, m, O), C === null ? S = E : C.sibling = E, C = E);
                    return ve && Zn(p, O), S
                }
                for (w = n(p, w); !E.done; O++, E = h.next()) E = g(w, p, O, E.value, x), E !== null && (e && E.alternate !== null && w.delete(E.key === null ? O : E.key), m = i(E, m, O), C === null ? S = E : C.sibling = E, C = E);
                return e && w.forEach(function(R) {
                    return t(p, R)
                }), ve && Zn(p, O), S
            }

            function b(p, m, h, x) {
                if (typeof h == "object" && h !== null && h.type === Qo && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) {
                    switch (h.$$typeof) {
                        case tl:
                            e: {
                                for (var S = h.key, C = m; C !== null;) {
                                    if (C.key === S) {
                                        if (S = h.type, S === Qo) {
                                            if (C.tag === 7) {
                                                r(p, C.sibling), m = o(C, h.props.children), m.return = p, p = m;
                                                break e
                                            }
                                        } else if (C.elementType === S || typeof S == "object" && S !== null && S.$$typeof === hn && yv(S) === C.type) {
                                            r(p, C.sibling), m = o(C, h.props), m.ref = ma(p, C, h), m.return = p, p = m;
                                            break e
                                        }
                                        r(p, C);
                                        break
                                    } else t(p, C);
                                    C = C.sibling
                                }
                                h.type === Qo ? (m = oo(h.props.children, p.mode, x, h.key), m.return = p, p = m) : (x = Tl(h.type, h.key, h.props, null, p.mode, x), x.ref = ma(p, m, h), x.return = p, p = x)
                            }
                            return a(p);
                        case Wo:
                            e: {
                                for (C = h.key; m !== null;) {
                                    if (m.key === C)
                                        if (m.tag === 4 && m.stateNode.containerInfo === h.containerInfo && m.stateNode.implementation === h.implementation) {
                                            r(p, m.sibling), m = o(m, h.children || []), m.return = p, p = m;
                                            break e
                                        } else {
                                            r(p, m);
                                            break
                                        }
                                    else t(p, m);
                                    m = m.sibling
                                }
                                m = qf(h, p.mode, x),
                                m.return = p,
                                p = m
                            }
                            return a(p);
                        case hn:
                            return C = h._init, b(p, m, C(h._payload), x)
                    }
                    if (xa(h)) return v(p, m, h, x);
                    if (ca(h)) return y(p, m, h, x);
                    hl(p, h)
                }
                return typeof h == "string" && h !== "" || typeof h == "number" ? (h = "" + h, m !== null && m.tag === 6 ? (r(p, m.sibling), m = o(m, h), m.return = p, p = m) : (r(p, m), m = Zf(h, p.mode, x), m.return = p, p = m), a(p)) : r(p, m)
            }
            return b
        }
        var di = Vy(!0),
            Uy = Vy(!1),
            Ya = {},
            kr = Ln(Ya),
            Ha = Ln(Ya),
            Va = Ln(Ya);

        function ro(e) {
            if (e === Ya) throw Error(I(174));
            return e
        }

        function hp(e, t) {
            switch (ce(Va, t), ce(Ha, e), ce(kr, Ya), e = t.nodeType, e) {
                case 9:
                case 11:
                    t = (t = t.documentElement) ? t.namespaceURI : ud(null, "");
                    break;
                default:
                    e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ud(t, e)
            }
            pe(kr), ce(kr, t)
        }

        function pi() {
            pe(kr), pe(Ha), pe(Va)
        }

        function Wy(e) {
            ro(Va.current);
            var t = ro(kr.current),
                r = ud(t, e.type);
            t !== r && (ce(Ha, e), ce(kr, r))
        }

        function vp(e) {
            Ha.current === e && (pe(kr), pe(Ha))
        }
        var Se = Ln(0);

        function Ql(e) {
            for (var t = e; t !== null;) {
                if (t.tag === 13) {
                    var r = t.memoizedState;
                    if (r !== null && (r = r.dehydrated, r === null || r.data === "$?" || r.data === "$!")) return t
                } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
                    if (t.flags & 128) return t
                } else if (t.child !== null) {
                    t.child.return = t, t = t.child;
                    continue
                }
                if (t === e) break;
                for (; t.sibling === null;) {
                    if (t.return === null || t.return === e) return null;
                    t = t.return
                }
                t.sibling.return = t.return, t = t.sibling
            }
            return null
        }
        var Qf = [];

        function yp() {
            for (var e = 0; e < Qf.length; e++) Qf[e]._workInProgressVersionPrimary = null;
            Qf.length = 0
        }
        var El = qr.ReactCurrentDispatcher,
            Kf = qr.ReactCurrentBatchConfig,
            so = 0,
            Ce = null,
            $e = null,
            Be = null,
            Kl = !1,
            Pa = !1,
            Ua = 0,
            SR = 0;

        function tt() {
            throw Error(I(321))
        }

        function xp(e, t) {
            if (t === null) return !1;
            for (var r = 0; r < t.length && r < e.length; r++)
                if (!pr(e[r], t[r])) return !1;
            return !0
        }

        function Sp(e, t, r, n, o, i) {
            if (so = i, Ce = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, El.current = e === null || e.memoizedState === null ? ER : RR, e = r(n, o), Pa) {
                i = 0;
                do {
                    if (Pa = !1, Ua = 0, 25 <= i) throw Error(I(301));
                    i += 1, Be = $e = null, t.updateQueue = null, El.current = OR, e = r(n, o)
                } while (Pa)
            }
            if (El.current = Xl, t = $e !== null && $e.next !== null, so = 0, Be = $e = Ce = null, Kl = !1, t) throw Error(I(300));
            return e
        }

        function Cp() {
            var e = Ua !== 0;
            return Ua = 0, e
        }

        function Ar() {
            var e = {
                memoizedState: null,
                baseState: null,
                baseQueue: null,
                queue: null,
                next: null
            };
            return Be === null ? Ce.memoizedState = Be = e : Be = Be.next = e, Be
        }

        function Gt() {
            if ($e === null) {
                var e = Ce.alternate;
                e = e !== null ? e.memoizedState : null
            } else e = $e.next;
            var t = Be === null ? Ce.memoizedState : Be.next;
            if (t !== null) Be = t, $e = e;
            else {
                if (e === null) throw Error(I(310));
                $e = e, e = {
                    memoizedState: $e.memoizedState,
                    baseState: $e.baseState,
                    baseQueue: $e.baseQueue,
                    queue: $e.queue,
                    next: null
                }, Be === null ? Ce.memoizedState = Be = e : Be = Be.next = e
            }
            return Be
        }

        function Wa(e, t) {
            return typeof t == "function" ? t(e) : t
        }

        function Xf(e) {
            var t = Gt(),
                r = t.queue;
            if (r === null) throw Error(I(311));
            r.lastRenderedReducer = e;
            var n = $e,
                o = n.baseQueue,
                i = r.pending;
            if (i !== null) {
                if (o !== null) {
                    var a = o.next;
                    o.next = i.next, i.next = a
                }
                n.baseQueue = o = i, r.pending = null
            }
            if (o !== null) {
                i = o.next, n = n.baseState;
                var s = a = null,
                    l = null,
                    u = i;
                do {
                    var f = u.lane;
                    if ((so & f) === f) l !== null && (l = l.next = {
                        lane: 0,
                        action: u.action,
                        hasEagerState: u.hasEagerState,
                        eagerState: u.eagerState,
                        next: null
                    }), n = u.hasEagerState ? u.eagerState : e(n, u.action);
                    else {
                        var c = {
                            lane: f,
                            action: u.action,
                            hasEagerState: u.hasEagerState,
                            eagerState: u.eagerState,
                            next: null
                        };
                        l === null ? (s = l = c, a = n) : l = l.next = c, Ce.lanes |= f, lo |= f
                    }
                    u = u.next
                } while (u !== null && u !== i);
                l === null ? a = n : l.next = s, pr(n, t.memoizedState) || (Ct = !0), t.memoizedState = n, t.baseState = a, t.baseQueue = l, r.lastRenderedState = n
            }
            if (e = r.interleaved, e !== null) {
                o = e;
                do i = o.lane, Ce.lanes |= i, lo |= i, o = o.next; while (o !== e)
            } else o === null && (r.lanes = 0);
            return [t.memoizedState, r.dispatch]
        }

        function Gf(e) {
            var t = Gt(),
                r = t.queue;
            if (r === null) throw Error(I(311));
            r.lastRenderedReducer = e;
            var n = r.dispatch,
                o = r.pending,
                i = t.memoizedState;
            if (o !== null) {
                r.pending = null;
                var a = o = o.next;
                do i = e(i, a.action), a = a.next; while (a !== o);
                pr(i, t.memoizedState) || (Ct = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), r.lastRenderedState = i
            }
            return [i, n]
        }

        function Qy() {}

        function Ky(e, t) {
            var r = Ce,
                n = Gt(),
                o = t(),
                i = !pr(n.memoizedState, o);
            if (i && (n.memoizedState = o, Ct = !0), n = n.queue, wp(Jy.bind(null, r, n, e), [e]), n.getSnapshot !== t || i || Be !== null && Be.memoizedState.tag & 1) {
                if (r.flags |= 2048, Qa(9, Gy.bind(null, r, n, o, t), void 0, null), ze === null) throw Error(I(349));
                so & 30 || Xy(r, t, o)
            }
            return o
        }

        function Xy(e, t, r) {
            e.flags |= 16384, e = {
                getSnapshot: t,
                value: r
            }, t = Ce.updateQueue, t === null ? (t = {
                lastEffect: null,
                stores: null
            }, Ce.updateQueue = t, t.stores = [e]) : (r = t.stores, r === null ? t.stores = [e] : r.push(e))
        }

        function Gy(e, t, r, n) {
            t.value = r, t.getSnapshot = n, Yy(t) && Zy(e)
        }

        function Jy(e, t, r) {
            return r(function() {
                Yy(t) && Zy(e)
            })
        }

        function Yy(e) {
            var t = e.getSnapshot;
            e = e.value;
            try {
                var r = t();
                return !pr(e, r)
            } catch {
                return !0
            }
        }

        function Zy(e) {
            var t = Yr(e, 1);
            t !== null && dr(t, e, 1, -1)
        }

        function xv(e) {
            var t = Ar();
            return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Wa,
                lastRenderedState: e
            }, t.queue = e, e = e.dispatch = bR.bind(null, Ce, e), [t.memoizedState, e]
        }

        function Qa(e, t, r, n) {
            return e = {
                tag: e,
                create: t,
                destroy: r,
                deps: n,
                next: null
            }, t = Ce.updateQueue, t === null ? (t = {
                lastEffect: null,
                stores: null
            }, Ce.updateQueue = t, t.lastEffect = e.next = e) : (r = t.lastEffect, r === null ? t.lastEffect = e.next = e : (n = r.next, r.next = e, e.next = n, t.lastEffect = e)), e
        }

        function qy() {
            return Gt().memoizedState
        }

        function Rl(e, t, r, n) {
            var o = Ar();
            Ce.flags |= e, o.memoizedState = Qa(1 | t, r, void 0, n === void 0 ? null : n)
        }

        function su(e, t, r, n) {
            var o = Gt();
            n = n === void 0 ? null : n;
            var i = void 0;
            if ($e !== null) {
                var a = $e.memoizedState;
                if (i = a.destroy, n !== null && xp(n, a.deps)) {
                    o.memoizedState = Qa(t, r, i, n);
                    return
                }
            }
            Ce.flags |= e, o.memoizedState = Qa(1 | t, r, i, n)
        }

        function Sv(e, t) {
            return Rl(8390656, 8, e, t)
        }

        function wp(e, t) {
            return su(2048, 8, e, t)
        }

        function e0(e, t) {
            return su(4, 2, e, t)
        }

        function t0(e, t) {
            return su(4, 4, e, t)
        }

        function r0(e, t) {
            if (typeof t == "function") return e = e(), t(e),
                function() {
                    t(null)
                };
            if (t != null) return e = e(), t.current = e,
                function() {
                    t.current = null
                }
        }

        function n0(e, t, r) {
            return r = r != null ? r.concat([e]) : null, su(4, 4, r0.bind(null, t, e), r)
        }

        function bp() {}

        function o0(e, t) {
            var r = Gt();
            t = t === void 0 ? null : t;
            var n = r.memoizedState;
            return n !== null && t !== null && xp(t, n[1]) ? n[0] : (r.memoizedState = [e, t], e)
        }

        function i0(e, t) {
            var r = Gt();
            t = t === void 0 ? null : t;
            var n = r.memoizedState;
            return n !== null && t !== null && xp(t, n[1]) ? n[0] : (e = e(), r.memoizedState = [e, t], e)
        }

        function a0(e, t, r) {
            return so & 21 ? (pr(r, t) || (r = uy(), Ce.lanes |= r, lo |= r, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ct = !0), e.memoizedState = r)
        }

        function CR(e, t) {
            var r = ie;
            ie = r !== 0 && 4 > r ? r : 4, e(!0);
            var n = Kf.transition;
            Kf.transition = {};
            try {
                e(!1), t()
            } finally {
                ie = r, Kf.transition = n
            }
        }

        function s0() {
            return Gt().memoizedState
        }

        function wR(e, t, r) {
            var n = An(e);
            if (r = {
                    lane: n,
                    action: r,
                    hasEagerState: !1,
                    eagerState: null,
                    next: null
                }, l0(e)) u0(t, r);
            else if (r = Dy(e, t, r, n), r !== null) {
                var o = ft();
                dr(r, e, n, o), c0(r, t, n)
            }
        }

        function bR(e, t, r) {
            var n = An(e),
                o = {
                    lane: n,
                    action: r,
                    hasEagerState: !1,
                    eagerState: null,
                    next: null
                };
            if (l0(e)) u0(t, o);
            else {
                var i = e.alternate;
                if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
                    var a = t.lastRenderedState,
                        s = i(a, r);
                    if (o.hasEagerState = !0, o.eagerState = s, pr(s, a)) {
                        var l = t.interleaved;
                        l === null ? (o.next = o, mp(t)) : (o.next = l.next, l.next = o), t.interleaved = o;
                        return
                    }
                } catch {} finally {}
                r = Dy(e, t, o, n), r !== null && (o = ft(), dr(r, e, n, o), c0(r, t, n))
            }
        }

        function l0(e) {
            var t = e.alternate;
            return e === Ce || t !== null && t === Ce
        }

        function u0(e, t) {
            Pa = Kl = !0;
            var r = e.pending;
            r === null ? t.next = t : (t.next = r.next, r.next = t), e.pending = t
        }

        function c0(e, t, r) {
            if (r & 4194240) {
                var n = t.lanes;
                n &= e.pendingLanes, r |= n, t.lanes = r, ep(e, r)
            }
        }
        var Xl = {
                readContext: Xt,
                useCallback: tt,
                useContext: tt,
                useEffect: tt,
                useImperativeHandle: tt,
                useInsertionEffect: tt,
                useLayoutEffect: tt,
                useMemo: tt,
                useReducer: tt,
                useRef: tt,
                useState: tt,
                useDebugValue: tt,
                useDeferredValue: tt,
                useTransition: tt,
                useMutableSource: tt,
                useSyncExternalStore: tt,
                useId: tt,
                unstable_isNewReconciler: !1
            },
            ER = {
                readContext: Xt,
                useCallback: function(e, t) {
                    return Ar().memoizedState = [e, t === void 0 ? null : t], e
                },
                useContext: Xt,
                useEffect: Sv,
                useImperativeHandle: function(e, t, r) {
                    return r = r != null ? r.concat([e]) : null, Rl(4194308, 4, r0.bind(null, t, e), r)
                },
                useLayoutEffect: function(e, t) {
                    return Rl(4194308, 4, e, t)
                },
                useInsertionEffect: function(e, t) {
                    return Rl(4, 2, e, t)
                },
                useMemo: function(e, t) {
                    var r = Ar();
                    return t = t === void 0 ? null : t, e = e(), r.memoizedState = [e, t], e
                },
                useReducer: function(e, t, r) {
                    var n = Ar();
                    return t = r !== void 0 ? r(t) : t, n.memoizedState = n.baseState = t, e = {
                        pending: null,
                        interleaved: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: e,
                        lastRenderedState: t
                    }, n.queue = e, e = e.dispatch = wR.bind(null, Ce, e), [n.memoizedState, e]
                },
                useRef: function(e) {
                    var t = Ar();
                    return e = {
                        current: e
                    }, t.memoizedState = e
                },
                useState: xv,
                useDebugValue: bp,
                useDeferredValue: function(e) {
                    return Ar().memoizedState = e
                },
                useTransition: function() {
                    var e = xv(!1),
                        t = e[0];
                    return e = CR.bind(null, e[1]), Ar().memoizedState = e, [t, e]
                },
                useMutableSource: function() {},
                useSyncExternalStore: function(e, t, r) {
                    var n = Ce,
                        o = Ar();
                    if (ve) {
                        if (r === void 0) throw Error(I(407));
                        r = r()
                    } else {
                        if (r = t(), ze === null) throw Error(I(349));
                        so & 30 || Xy(n, t, r)
                    }
                    o.memoizedState = r;
                    var i = {
                        value: r,
                        getSnapshot: t
                    };
                    return o.queue = i, Sv(Jy.bind(null, n, i, e), [e]), n.flags |= 2048, Qa(9, Gy.bind(null, n, i, r, t), void 0, null), r
                },
                useId: function() {
                    var e = Ar(),
                        t = ze.identifierPrefix;
                    if (ve) {
                        var r = Kr,
                            n = Qr;
                        r = (n & ~(1 << 32 - fr(n) - 1)).toString(32) + r, t = ":" + t + "R" + r, r = Ua++, 0 < r && (t += "H" + r.toString(32)), t += ":"
                    } else r = SR++, t = ":" + t + "r" + r.toString(32) + ":";
                    return e.memoizedState = t
                },
                unstable_isNewReconciler: !1
            },
            RR = {
                readContext: Xt,
                useCallback: o0,
                useContext: Xt,
                useEffect: wp,
                useImperativeHandle: n0,
                useInsertionEffect: e0,
                useLayoutEffect: t0,
                useMemo: i0,
                useReducer: Xf,
                useRef: qy,
                useState: function() {
                    return Xf(Wa)
                },
                useDebugValue: bp,
                useDeferredValue: function(e) {
                    var t = Gt();
                    return a0(t, $e.memoizedState, e)
                },
                useTransition: function() {
                    var e = Xf(Wa)[0],
                        t = Gt().memoizedState;
                    return [e, t]
                },
                useMutableSource: Qy,
                useSyncExternalStore: Ky,
                useId: s0,
                unstable_isNewReconciler: !1
            },
            OR = {
                readContext: Xt,
                useCallback: o0,
                useContext: Xt,
                useEffect: wp,
                useImperativeHandle: n0,
                useInsertionEffect: e0,
                useLayoutEffect: t0,
                useMemo: i0,
                useReducer: Gf,
                useRef: qy,
                useState: function() {
                    return Gf(Wa)
                },
                useDebugValue: bp,
                useDeferredValue: function(e) {
                    var t = Gt();
                    return $e === null ? t.memoizedState = e : a0(t, $e.memoizedState, e)
                },
                useTransition: function() {
                    var e = Gf(Wa)[0],
                        t = Gt().memoizedState;
                    return [e, t]
                },
                useMutableSource: Qy,
                useSyncExternalStore: Ky,
                useId: s0,
                unstable_isNewReconciler: !1
            };

        function mi(e, t) {
            try {
                var r = "",
                    n = t;
                do r += rE(n), n = n.return; while (n);
                var o = r
            } catch (i) {
                o = `
Error generating stack: ` + i.message + `
` + i.stack
            }
            return {
                value: e,
                source: t,
                stack: o,
                digest: null
            }
        }

        function Jf(e, t, r) {
            return {
                value: e,
                source: null,
                stack: r ?? null,
                digest: t ?? null
            }
        }

        function _d(e, t) {
            try {} catch (r) {
                setTimeout(function() {
                    throw r
                })
            }
        }
        var PR = typeof WeakMap == "function" ? WeakMap : Map;

        function f0(e, t, r) {
            r = Xr(-1, r), r.tag = 3, r.payload = {
                element: null
            };
            var n = t.value;
            return r.callback = function() {
                Jl || (Jl = !0, Hd = n), _d(e, t)
            }, r
        }

        function d0(e, t, r) {
            r = Xr(-1, r), r.tag = 3;
            var n = e.type.getDerivedStateFromError;
            if (typeof n == "function") {
                var o = t.value;
                r.payload = function() {
                    return n(o)
                }, r.callback = function() {
                    _d(e, t)
                }
            }
            var i = e.stateNode;
            return i !== null && typeof i.componentDidCatch == "function" && (r.callback = function() {
                _d(e, t), typeof n != "function" && (Pn === null ? Pn = new Set([this]) : Pn.add(this));
                var a = t.stack;
                this.componentDidCatch(t.value, {
                    componentStack: a !== null ? a : ""
                })
            }), r
        }

        function Cv(e, t, r) {
            var n = e.pingCache;
            if (n === null) {
                n = e.pingCache = new PR;
                var o = new Set;
                n.set(t, o)
            } else o = n.get(t), o === void 0 && (o = new Set, n.set(t, o));
            o.has(r) || (o.add(r), e = zR.bind(null, e, t, r), t.then(e, e))
        }

        function wv(e) {
            do {
                var t;
                if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
                e = e.return
            } while (e !== null);
            return null
        }

        function bv(e, t, r, n, o) {
            return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, r.flags |= 131072, r.flags &= -52805, r.tag === 1 && (r.alternate === null ? r.tag = 17 : (t = Xr(-1, 1), t.tag = 2, On(r, t, 1))), r.lanes |= 1), e)
        }
        var AR = qr.ReactCurrentOwner,
            Ct = !1;

        function ct(e, t, r, n) {
            t.child = e === null ? Uy(t, null, r, n) : di(t, e.child, r, n)
        }

        function Ev(e, t, r, n, o) {
            r = r.render;
            var i = t.ref;
            return si(t, o), n = Sp(e, t, r, n, i, o), r = Cp(), e !== null && !Ct ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Zr(e, t, o)) : (ve && r && lp(t), t.flags |= 1, ct(e, t, n, o), t.child)
        }

        function Rv(e, t, r, n, o) {
            if (e === null) {
                var i = r.type;
                return typeof i == "function" && !kp(i) && i.defaultProps === void 0 && r.compare === null && r.defaultProps === void 0 ? (t.tag = 15, t.type = i, p0(e, t, i, n, o)) : (e = Tl(r.type, null, n, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e)
            }
            if (i = e.child, !(e.lanes & o)) {
                var a = i.memoizedProps;
                if (r = r.compare, r = r !== null ? r : Fa, r(a, n) && e.ref === t.ref) return Zr(e, t, o)
            }
            return t.flags |= 1, e = Tn(i, n), e.ref = t.ref, e.return = t, t.child = e
        }

        function p0(e, t, r, n, o) {
            if (e !== null) {
                var i = e.memoizedProps;
                if (Fa(i, n) && e.ref === t.ref)
                    if (Ct = !1, t.pendingProps = n = i, (e.lanes & o) !== 0) e.flags & 131072 && (Ct = !0);
                    else return t.lanes = e.lanes, Zr(e, t, o)
            }
            return Ld(e, t, r, n, o)
        }

        function m0(e, t, r) {
            var n = t.pendingProps,
                o = n.children,
                i = e !== null ? e.memoizedState : null;
            if (n.mode === "hidden")
                if (!(t.mode & 1)) t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                }, ce(ri, kt), kt |= r;
                else {
                    if (!(r & 1073741824)) return e = i !== null ? i.baseLanes | r : r, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                        baseLanes: e,
                        cachePool: null,
                        transitions: null
                    }, t.updateQueue = null, ce(ri, kt), kt |= e, null;
                    t.memoizedState = {
                        baseLanes: 0,
                        cachePool: null,
                        transitions: null
                    }, n = i !== null ? i.baseLanes : r, ce(ri, kt), kt |= n
                }
            else i !== null ? (n = i.baseLanes | r, t.memoizedState = null) : n = r, ce(ri, kt), kt |= n;
            return ct(e, t, o, r), t.child
        }

        function g0(e, t) {
            var r = t.ref;
            (e === null && r !== null || e !== null && e.ref !== r) && (t.flags |= 512, t.flags |= 2097152)
        }

        function Ld(e, t, r, n, o) {
            var i = bt(r) ? io : ot.current;
            return i = ci(t, i), si(t, o), r = Sp(e, t, r, n, i, o), n = Cp(), e !== null && !Ct ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Zr(e, t, o)) : (ve && n && lp(t), t.flags |= 1, ct(e, t, r, o), t.child)
        }

        function Ov(e, t, r, n, o) {
            if (bt(r)) {
                var i = !0;
                Bl(t)
            } else i = !1;
            if (si(t, o), t.stateNode === null) Ol(e, t), Hy(t, r, n), kd(t, r, n, o), n = !0;
            else if (e === null) {
                var a = t.stateNode,
                    s = t.memoizedProps;
                a.props = s;
                var l = a.context,
                    u = r.contextType;
                typeof u == "object" && u !== null ? u = Xt(u) : (u = bt(r) ? io : ot.current, u = ci(t, u));
                var f = r.getDerivedStateFromProps,
                    c = typeof f == "function" || typeof a.getSnapshotBeforeUpdate == "function";
                c || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s !== n || l !== u) && vv(t, a, n, u), vn = !1;
                var d = t.memoizedState;
                a.state = d, Wl(t, n, a, o), l = t.memoizedState, s !== n || d !== l || wt.current || vn ? (typeof f == "function" && (Nd(t, r, f, n), l = t.memoizedState), (s = vn || hv(t, r, s, n, d, l, u)) ? (c || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = n, t.memoizedState = l), a.props = n, a.state = l, a.context = u, n = s) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), n = !1)
            } else {
                a = t.stateNode, By(e, t), s = t.memoizedProps, u = t.type === t.elementType ? s : lr(t.type, s), a.props = u, c = t.pendingProps, d = a.context, l = r.contextType, typeof l == "object" && l !== null ? l = Xt(l) : (l = bt(r) ? io : ot.current, l = ci(t, l));
                var g = r.getDerivedStateFromProps;
                (f = typeof g == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s !== c || d !== l) && vv(t, a, n, l), vn = !1, d = t.memoizedState, a.state = d, Wl(t, n, a, o);
                var v = t.memoizedState;
                s !== c || d !== v || wt.current || vn ? (typeof g == "function" && (Nd(t, r, g, n), v = t.memoizedState), (u = vn || hv(t, r, u, n, d, v, l) || !1) ? (f || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(n, v, l), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(n, v, l)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || s === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), t.memoizedProps = n, t.memoizedState = v), a.props = n, a.state = v, a.context = l, n = u) : (typeof a.componentDidUpdate != "function" || s === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), n = !1)
            }
            return $d(e, t, r, n, i, o)
        }

        function $d(e, t, r, n, o, i) {
            g0(e, t);
            var a = (t.flags & 128) !== 0;
            if (!n && !a) return o && fv(t, r, !1), Zr(e, t, i);
            n = t.stateNode, AR.current = t;
            var s = a && typeof r.getDerivedStateFromError != "function" ? null : n.render();
            return t.flags |= 1, e !== null && a ? (t.child = di(t, e.child, null, i), t.child = di(t, null, s, i)) : ct(e, t, s, i), t.memoizedState = n.state, o && fv(t, r, !0), t.child
        }

        function h0(e) {
            var t = e.stateNode;
            t.pendingContext ? cv(e, t.pendingContext, t.pendingContext !== t.context) : t.context && cv(e, t.context, !1), hp(e, t.containerInfo)
        }

        function Pv(e, t, r, n, o) {
            return fi(), cp(o), t.flags |= 256, ct(e, t, r, n), t.child
        }
        var Md = {
            dehydrated: null,
            treeContext: null,
            retryLane: 0
        };

        function Id(e) {
            return {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }
        }

        function v0(e, t, r) {
            var n = t.pendingProps,
                o = Se.current,
                i = !1,
                a = (t.flags & 128) !== 0,
                s;
            if ((s = a) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), s ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), ce(Se, o & 1), e === null) return Ad(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (a = n.children, e = n.fallback, i ? (n = t.mode, i = t.child, a = {
                mode: "hidden",
                children: a
            }, !(n & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = a) : i = cu(a, n, 0, null), e = oo(e, n, r, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Id(r), t.memoizedState = Md, e) : Ep(t, a));
            if (o = e.memoizedState, o !== null && (s = o.dehydrated, s !== null)) return TR(e, t, a, n, s, o, r);
            if (i) {
                i = n.fallback, a = t.mode, o = e.child, s = o.sibling;
                var l = {
                    mode: "hidden",
                    children: n.children
                };
                return !(a & 1) && t.child !== o ? (n = t.child, n.childLanes = 0, n.pendingProps = l, t.deletions = null) : (n = Tn(o, l), n.subtreeFlags = o.subtreeFlags & 14680064), s !== null ? i = Tn(s, i) : (i = oo(i, a, r, null), i.flags |= 2), i.return = t, n.return = t, n.sibling = i, t.child = n, n = i, i = t.child, a = e.child.memoizedState, a = a === null ? Id(r) : {
                    baseLanes: a.baseLanes | r,
                    cachePool: null,
                    transitions: a.transitions
                }, i.memoizedState = a, i.childLanes = e.childLanes & ~r, t.memoizedState = Md, n
            }
            return i = e.child, e = i.sibling, n = Tn(i, {
                mode: "visible",
                children: n.children
            }), !(t.mode & 1) && (n.lanes = r), n.return = t, n.sibling = null, e !== null && (r = t.deletions, r === null ? (t.deletions = [e], t.flags |= 16) : r.push(e)), t.child = n, t.memoizedState = null, n
        }

        function Ep(e, t) {
            return t = cu({
                mode: "visible",
                children: t
            }, e.mode, 0, null), t.return = e, e.child = t
        }

        function vl(e, t, r, n) {
            return n !== null && cp(n), di(t, e.child, null, r), e = Ep(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
        }

        function TR(e, t, r, n, o, i, a) {
            if (r) return t.flags & 256 ? (t.flags &= -257, n = Jf(Error(I(422))), vl(e, t, a, n)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = n.fallback, o = t.mode, n = cu({
                mode: "visible",
                children: n.children
            }, o, 0, null), i = oo(i, o, a, null), i.flags |= 2, n.return = t, i.return = t, n.sibling = i, t.child = n, t.mode & 1 && di(t, e.child, null, a), t.child.memoizedState = Id(a), t.memoizedState = Md, i);
            if (!(t.mode & 1)) return vl(e, t, a, null);
            if (o.data === "$!") {
                if (n = o.nextSibling && o.nextSibling.dataset, n) var s = n.dgst;
                return n = s, i = Error(I(419)), n = Jf(i, n, void 0), vl(e, t, a, n)
            }
            if (s = (a & e.childLanes) !== 0, Ct || s) {
                if (n = ze, n !== null) {
                    switch (a & -a) {
                        case 4:
                            o = 2;
                            break;
                        case 16:
                            o = 8;
                            break;
                        case 64:
                        case 128:
                        case 256:
                        case 512:
                        case 1024:
                        case 2048:
                        case 4096:
                        case 8192:
                        case 16384:
                        case 32768:
                        case 65536:
                        case 131072:
                        case 262144:
                        case 524288:
                        case 1048576:
                        case 2097152:
                        case 4194304:
                        case 8388608:
                        case 16777216:
                        case 33554432:
                        case 67108864:
                            o = 32;
                            break;
                        case 536870912:
                            o = 268435456;
                            break;
                        default:
                            o = 0
                    }
                    o = o & (n.suspendedLanes | a) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, Yr(e, o), dr(n, e, o, -1))
                }
                return Np(), n = Jf(Error(I(421))), vl(e, t, a, n)
            }
            return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = HR.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, _t = Rn(o.nextSibling), Lt = t, ve = !0, cr = null, e !== null && (Ut[Wt++] = Qr, Ut[Wt++] = Kr, Ut[Wt++] = ao, Qr = e.id, Kr = e.overflow, ao = t), t = Ep(t, n.children), t.flags |= 4096, t)
        }

        function Av(e, t, r) {
            e.lanes |= t;
            var n = e.alternate;
            n !== null && (n.lanes |= t), Td(e.return, t, r)
        }

        function Yf(e, t, r, n, o) {
            var i = e.memoizedState;
            i === null ? e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: n,
                tail: r,
                tailMode: o
            } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = n, i.tail = r, i.tailMode = o)
        }

        function y0(e, t, r) {
            var n = t.pendingProps,
                o = n.revealOrder,
                i = n.tail;
            if (ct(e, t, n.children, r), n = Se.current, n & 2) n = n & 1 | 2, t.flags |= 128;
            else {
                if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
                    if (e.tag === 13) e.memoizedState !== null && Av(e, r, t);
                    else if (e.tag === 19) Av(e, r, t);
                    else if (e.child !== null) {
                        e.child.return = e, e = e.child;
                        continue
                    }
                    if (e === t) break e;
                    for (; e.sibling === null;) {
                        if (e.return === null || e.return === t) break e;
                        e = e.return
                    }
                    e.sibling.return = e.return, e = e.sibling
                }
                n &= 1
            }
            if (ce(Se, n), !(t.mode & 1)) t.memoizedState = null;
            else switch (o) {
                case "forwards":
                    for (r = t.child, o = null; r !== null;) e = r.alternate, e !== null && Ql(e) === null && (o = r), r = r.sibling;
                    r = o, r === null ? (o = t.child, t.child = null) : (o = r.sibling, r.sibling = null), Yf(t, !1, o, r, i);
                    break;
                case "backwards":
                    for (r = null, o = t.child, t.child = null; o !== null;) {
                        if (e = o.alternate, e !== null && Ql(e) === null) {
                            t.child = o;
                            break
                        }
                        e = o.sibling, o.sibling = r, r = o, o = e
                    }
                    Yf(t, !0, r, null, i);
                    break;
                case "together":
                    Yf(t, !1, null, null, void 0);
                    break;
                default:
                    t.memoizedState = null
            }
            return t.child
        }

        function Ol(e, t) {
            !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
        }

        function Zr(e, t, r) {
            if (e !== null && (t.dependencies = e.dependencies), lo |= t.lanes, !(r & t.childLanes)) return null;
            if (e !== null && t.child !== e.child) throw Error(I(153));
            if (t.child !== null) {
                for (e = t.child, r = Tn(e, e.pendingProps), t.child = r, r.return = t; e.sibling !== null;) e = e.sibling, r = r.sibling = Tn(e, e.pendingProps), r.return = t;
                r.sibling = null
            }
            return t.child
        }

        function NR(e, t, r) {
            switch (t.tag) {
                case 3:
                    h0(t), fi();
                    break;
                case 5:
                    Wy(t);
                    break;
                case 1:
                    bt(t.type) && Bl(t);
                    break;
                case 4:
                    hp(t, t.stateNode.containerInfo);
                    break;
                case 10:
                    var n = t.type._context,
                        o = t.memoizedProps.value;
                    ce(Vl, n._currentValue), n._currentValue = o;
                    break;
                case 13:
                    if (n = t.memoizedState, n !== null) return n.dehydrated !== null ? (ce(Se, Se.current & 1), t.flags |= 128, null) : r & t.child.childLanes ? v0(e, t, r) : (ce(Se, Se.current & 1), e = Zr(e, t, r), e !== null ? e.sibling : null);
                    ce(Se, Se.current & 1);
                    break;
                case 19:
                    if (n = (r & t.childLanes) !== 0, e.flags & 128) {
                        if (n) return y0(e, t, r);
                        t.flags |= 128
                    }
                    if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), ce(Se, Se.current), n) break;
                    return null;
                case 22:
                case 23:
                    return t.lanes = 0, m0(e, t, r)
            }
            return Zr(e, t, r)
        }
        var x0, jd, S0, C0;
        x0 = function(e, t) {
            for (var r = t.child; r !== null;) {
                if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
                else if (r.tag !== 4 && r.child !== null) {
                    r.child.return = r, r = r.child;
                    continue
                }
                if (r === t) break;
                for (; r.sibling === null;) {
                    if (r.return === null || r.return === t) return;
                    r = r.return
                }
                r.sibling.return = r.return, r = r.sibling
            }
        };
        jd = function() {};
        S0 = function(e, t, r, n) {
            var o = e.memoizedProps;
            if (o !== n) {
                e = t.stateNode, ro(kr.current);
                var i = null;
                switch (r) {
                    case "input":
                        o = id(e, o), n = id(e, n), i = [];
                        break;
                    case "select":
                        o = we({}, o, {
                            value: void 0
                        }), n = we({}, n, {
                            value: void 0
                        }), i = [];
                        break;
                    case "textarea":
                        o = ld(e, o), n = ld(e, n), i = [];
                        break;
                    default:
                        typeof o.onClick != "function" && typeof n.onClick == "function" && (e.onclick = Fl)
                }
                cd(r, n);
                var a;
                r = null;
                for (u in o)
                    if (!n.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
                        if (u === "style") {
                            var s = o[u];
                            for (a in s) s.hasOwnProperty(a) && (r || (r = {}), r[a] = "")
                        } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (ka.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
                for (u in n) {
                    var l = n[u];
                    if (s = o?.[u], n.hasOwnProperty(u) && l !== s && (l != null || s != null))
                        if (u === "style")
                            if (s) {
                                for (a in s) !s.hasOwnProperty(a) || l && l.hasOwnProperty(a) || (r || (r = {}), r[a] = "");
                                for (a in l) l.hasOwnProperty(a) && s[a] !== l[a] && (r || (r = {}), r[a] = l[a])
                            } else r || (i || (i = []), i.push(u, r)), r = l;
                    else u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, s = s ? s.__html : void 0, l != null && s !== l && (i = i || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (i = i || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (ka.hasOwnProperty(u) ? (l != null && u === "onScroll" && de("scroll", e), i || s === l || (i = [])) : (i = i || []).push(u, l))
                }
                r && (i = i || []).push("style", r);
                var u = i;
                (t.updateQueue = u) && (t.flags |= 4)
            }
        };
        C0 = function(e, t, r, n) {
            r !== n && (t.flags |= 4)
        };

        function ga(e, t) {
            if (!ve) switch (e.tailMode) {
                case "hidden":
                    t = e.tail;
                    for (var r = null; t !== null;) t.alternate !== null && (r = t), t = t.sibling;
                    r === null ? e.tail = null : r.sibling = null;
                    break;
                case "collapsed":
                    r = e.tail;
                    for (var n = null; r !== null;) r.alternate !== null && (n = r), r = r.sibling;
                    n === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : n.sibling = null
            }
        }

        function rt(e) {
            var t = e.alternate !== null && e.alternate.child === e.child,
                r = 0,
                n = 0;
            if (t)
                for (var o = e.child; o !== null;) r |= o.lanes | o.childLanes, n |= o.subtreeFlags & 14680064, n |= o.flags & 14680064, o.return = e, o = o.sibling;
            else
                for (o = e.child; o !== null;) r |= o.lanes | o.childLanes, n |= o.subtreeFlags, n |= o.flags, o.return = e, o = o.sibling;
            return e.subtreeFlags |= n, e.childLanes = r, t
        }

        function kR(e, t, r) {
            var n = t.pendingProps;
            switch (up(t), t.tag) {
                case 2:
                case 16:
                case 15:
                case 0:
                case 11:
                case 7:
                case 8:
                case 12:
                case 9:
                case 14:
                    return rt(t), null;
                case 1:
                    return bt(t.type) && Dl(), rt(t), null;
                case 3:
                    return n = t.stateNode, pi(), pe(wt), pe(ot), yp(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (gl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, cr !== null && (Wd(cr), cr = null))), jd(e, t), rt(t), null;
                case 5:
                    vp(t);
                    var o = ro(Va.current);
                    if (r = t.type, e !== null && t.stateNode != null) S0(e, t, r, n, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
                    else {
                        if (!n) {
                            if (t.stateNode === null) throw Error(I(166));
                            return rt(t), null
                        }
                        if (e = ro(kr.current), gl(t)) {
                            n = t.stateNode, r = t.type;
                            var i = t.memoizedProps;
                            switch (n[Tr] = t, n[za] = i, e = (t.mode & 1) !== 0, r) {
                                case "dialog":
                                    de("cancel", n), de("close", n);
                                    break;
                                case "iframe":
                                case "object":
                                case "embed":
                                    de("load", n);
                                    break;
                                case "video":
                                case "audio":
                                    for (o = 0; o < Ca.length; o++) de(Ca[o], n);
                                    break;
                                case "source":
                                    de("error", n);
                                    break;
                                case "img":
                                case "image":
                                case "link":
                                    de("error", n), de("load", n);
                                    break;
                                case "details":
                                    de("toggle", n);
                                    break;
                                case "input":
                                    Ih(n, i), de("invalid", n);
                                    break;
                                case "select":
                                    n._wrapperState = {
                                        wasMultiple: !!i.multiple
                                    }, de("invalid", n);
                                    break;
                                case "textarea":
                                    Fh(n, i), de("invalid", n)
                            }
                            cd(r, i), o = null;
                            for (var a in i)
                                if (i.hasOwnProperty(a)) {
                                    var s = i[a];
                                    a === "children" ? typeof s == "string" ? n.textContent !== s && (i.suppressHydrationWarning !== !0 && ml(n.textContent, s, e), o = ["children", s]) : typeof s == "number" && n.textContent !== "" + s && (i.suppressHydrationWarning !== !0 && ml(n.textContent, s, e), o = ["children", "" + s]) : ka.hasOwnProperty(a) && s != null && a === "onScroll" && de("scroll", n)
                                } switch (r) {
                                case "input":
                                    rl(n), jh(n, i, !0);
                                    break;
                                case "textarea":
                                    rl(n), Dh(n);
                                    break;
                                case "select":
                                case "option":
                                    break;
                                default:
                                    typeof i.onClick == "function" && (n.onclick = Fl)
                            }
                            n = o, t.updateQueue = n, n !== null && (t.flags |= 4)
                        } else {
                            a = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Xv(r)), e === "http://www.w3.org/1999/xhtml" ? r === "script" ? (e = a.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof n.is == "string" ? e = a.createElement(r, {
                                is: n.is
                            }) : (e = a.createElement(r), r === "select" && (a = e, n.multiple ? a.multiple = !0 : n.size && (a.size = n.size))) : e = a.createElementNS(e, r), e[Tr] = t, e[za] = n, x0(e, t, !1, !1), t.stateNode = e;
                            e: {
                                switch (a = fd(r, n), r) {
                                    case "dialog":
                                        de("cancel", e), de("close", e), o = n;
                                        break;
                                    case "iframe":
                                    case "object":
                                    case "embed":
                                        de("load", e), o = n;
                                        break;
                                    case "video":
                                    case "audio":
                                        for (o = 0; o < Ca.length; o++) de(Ca[o], e);
                                        o = n;
                                        break;
                                    case "source":
                                        de("error", e), o = n;
                                        break;
                                    case "img":
                                    case "image":
                                    case "link":
                                        de("error", e), de("load", e), o = n;
                                        break;
                                    case "details":
                                        de("toggle", e), o = n;
                                        break;
                                    case "input":
                                        Ih(e, n), o = id(e, n), de("invalid", e);
                                        break;
                                    case "option":
                                        o = n;
                                        break;
                                    case "select":
                                        e._wrapperState = {
                                            wasMultiple: !!n.multiple
                                        }, o = we({}, n, {
                                            value: void 0
                                        }), de("invalid", e);
                                        break;
                                    case "textarea":
                                        Fh(e, n), o = ld(e, n), de("invalid", e);
                                        break;
                                    default:
                                        o = n
                                }
                                cd(r, o),
                                s = o;
                                for (i in s)
                                    if (s.hasOwnProperty(i)) {
                                        var l = s[i];
                                        i === "style" ? Yv(e, l) : i === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && Gv(e, l)) : i === "children" ? typeof l == "string" ? (r !== "textarea" || l !== "") && _a(e, l) : typeof l == "number" && _a(e, "" + l) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (ka.hasOwnProperty(i) ? l != null && i === "onScroll" && de("scroll", e) : l != null && Xd(e, i, l, a))
                                    } switch (r) {
                                    case "input":
                                        rl(e), jh(e, n, !1);
                                        break;
                                    case "textarea":
                                        rl(e), Dh(e);
                                        break;
                                    case "option":
                                        n.value != null && e.setAttribute("value", "" + Nn(n.value));
                                        break;
                                    case "select":
                                        e.multiple = !!n.multiple, i = n.value, i != null ? ni(e, !!n.multiple, i, !1) : n.defaultValue != null && ni(e, !!n.multiple, n.defaultValue, !0);
                                        break;
                                    default:
                                        typeof o.onClick == "function" && (e.onclick = Fl)
                                }
                                switch (r) {
                                    case "button":
                                    case "input":
                                    case "select":
                                    case "textarea":
                                        n = !!n.autoFocus;
                                        break e;
                                    case "img":
                                        n = !0;
                                        break e;
                                    default:
                                        n = !1
                                }
                            }
                            n && (t.flags |= 4)
                        }
                        t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
                    }
                    return rt(t), null;
                case 6:
                    if (e && t.stateNode != null) C0(e, t, e.memoizedProps, n);
                    else {
                        if (typeof n != "string" && t.stateNode === null) throw Error(I(166));
                        if (r = ro(Va.current), ro(kr.current), gl(t)) {
                            if (n = t.stateNode, r = t.memoizedProps, n[Tr] = t, (i = n.nodeValue !== r) && (e = Lt, e !== null)) switch (e.tag) {
                                case 3:
                                    ml(n.nodeValue, r, (e.mode & 1) !== 0);
                                    break;
                                case 5:
                                    e.memoizedProps.suppressHydrationWarning !== !0 && ml(n.nodeValue, r, (e.mode & 1) !== 0)
                            }
                            i && (t.flags |= 4)
                        } else n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n), n[Tr] = t, t.stateNode = n
                    }
                    return rt(t), null;
                case 13:
                    if (pe(Se), n = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                        if (ve && _t !== null && t.mode & 1 && !(t.flags & 128)) Fy(), fi(), t.flags |= 98560, i = !1;
                        else if (i = gl(t), n !== null && n.dehydrated !== null) {
                            if (e === null) {
                                if (!i) throw Error(I(318));
                                if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(I(317));
                                i[Tr] = t
                            } else fi(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                            rt(t), i = !1
                        } else cr !== null && (Wd(cr), cr = null), i = !0;
                        if (!i) return t.flags & 65536 ? t : null
                    }
                    return t.flags & 128 ? (t.lanes = r, t) : (n = n !== null, n !== (e !== null && e.memoizedState !== null) && n && (t.child.flags |= 8192, t.mode & 1 && (e === null || Se.current & 1 ? Me === 0 && (Me = 3) : Np())), t.updateQueue !== null && (t.flags |= 4), rt(t), null);
                case 4:
                    return pi(), jd(e, t), e === null && Da(t.stateNode.containerInfo), rt(t), null;
                case 10:
                    return pp(t.type._context), rt(t), null;
                case 17:
                    return bt(t.type) && Dl(), rt(t), null;
                case 19:
                    if (pe(Se), i = t.memoizedState, i === null) return rt(t), null;
                    if (n = (t.flags & 128) !== 0, a = i.rendering, a === null)
                        if (n) ga(i, !1);
                        else {
                            if (Me !== 0 || e !== null && e.flags & 128)
                                for (e = t.child; e !== null;) {
                                    if (a = Ql(e), a !== null) {
                                        for (t.flags |= 128, ga(i, !1), n = a.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), t.subtreeFlags = 0, n = r, r = t.child; r !== null;) i = r, e = n, i.flags &= 14680066, a = i.alternate, a === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = a.childLanes, i.lanes = a.lanes, i.child = a.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = a.memoizedProps, i.memoizedState = a.memoizedState, i.updateQueue = a.updateQueue, i.type = a.type, e = a.dependencies, i.dependencies = e === null ? null : {
                                            lanes: e.lanes,
                                            firstContext: e.firstContext
                                        }), r = r.sibling;
                                        return ce(Se, Se.current & 1 | 2), t.child
                                    }
                                    e = e.sibling
                                }
                            i.tail !== null && Pe() > gi && (t.flags |= 128, n = !0, ga(i, !1), t.lanes = 4194304)
                        }
                    else {
                        if (!n)
                            if (e = Ql(a), e !== null) {
                                if (t.flags |= 128, n = !0, r = e.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), ga(i, !0), i.tail === null && i.tailMode === "hidden" && !a.alternate && !ve) return rt(t), null
                            } else 2 * Pe() - i.renderingStartTime > gi && r !== 1073741824 && (t.flags |= 128, n = !0, ga(i, !1), t.lanes = 4194304);
                        i.isBackwards ? (a.sibling = t.child, t.child = a) : (r = i.last, r !== null ? r.sibling = a : t.child = a, i.last = a)
                    }
                    return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Pe(), t.sibling = null, r = Se.current, ce(Se, n ? r & 1 | 2 : r & 1), t) : (rt(t), null);
                case 22:
                case 23:
                    return Tp(), n = t.memoizedState !== null, e !== null && e.memoizedState !== null !== n && (t.flags |= 8192), n && t.mode & 1 ? kt & 1073741824 && (rt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : rt(t), null;
                case 24:
                    return null;
                case 25:
                    return null
            }
            throw Error(I(156, t.tag))
        }

        function _R(e, t) {
            switch (up(t), t.tag) {
                case 1:
                    return bt(t.type) && Dl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
                case 3:
                    return pi(), pe(wt), pe(ot), yp(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
                case 5:
                    return vp(t), null;
                case 13:
                    if (pe(Se), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                        if (t.alternate === null) throw Error(I(340));
                        fi()
                    }
                    return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
                case 19:
                    return pe(Se), null;
                case 4:
                    return pi(), null;
                case 10:
                    return pp(t.type._context), null;
                case 22:
                case 23:
                    return Tp(), null;
                case 24:
                    return null;
                default:
                    return null
            }
        }
        var yl = !1,
            nt = !1,
            LR = typeof WeakSet == "function" ? WeakSet : Set,
            B = null;

        function ti(e, t) {
            var r = e.ref;
            if (r !== null)
                if (typeof r == "function") try {
                    r(null)
                } catch (n) {
                    Re(e, t, n)
                } else r.current = null
        }

        function Fd(e, t, r) {
            try {
                r()
            } catch (n) {
                Re(e, t, n)
            }
        }
        var Tv = !1;

        function $R(e, t) {
            if (Cd = Ml, e = Ry(), sp(e)) {
                if ("selectionStart" in e) var r = {
                    start: e.selectionStart,
                    end: e.selectionEnd
                };
                else e: {
                    r = (r = e.ownerDocument) && r.defaultView || window;
                    var n = r.getSelection && r.getSelection();
                    if (n && n.rangeCount !== 0) {
                        r = n.anchorNode;
                        var o = n.anchorOffset,
                            i = n.focusNode;
                        n = n.focusOffset;
                        try {
                            r.nodeType, i.nodeType
                        } catch {
                            r = null;
                            break e
                        }
                        var a = 0,
                            s = -1,
                            l = -1,
                            u = 0,
                            f = 0,
                            c = e,
                            d = null;
                        t: for (;;) {
                            for (var g; c !== r || o !== 0 && c.nodeType !== 3 || (s = a + o), c !== i || n !== 0 && c.nodeType !== 3 || (l = a + n), c.nodeType === 3 && (a += c.nodeValue.length), (g = c.firstChild) !== null;) d = c, c = g;
                            for (;;) {
                                if (c === e) break t;
                                if (d === r && ++u === o && (s = a), d === i && ++f === n && (l = a), (g = c.nextSibling) !== null) break;
                                c = d, d = c.parentNode
                            }
                            c = g
                        }
                        r = s === -1 || l === -1 ? null : {
                            start: s,
                            end: l
                        }
                    } else r = null
                }
                r = r || {
                    start: 0,
                    end: 0
                }
            } else r = null;
            for (wd = {
                    focusedElem: e,
                    selectionRange: r
                }, Ml = !1, B = t; B !== null;)
                if (t = B, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, B = e;
                else
                    for (; B !== null;) {
                        t = B;
                        try {
                            var v = t.alternate;
                            if (t.flags & 1024) switch (t.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    break;
                                case 1:
                                    if (v !== null) {
                                        var y = v.memoizedProps,
                                            b = v.memoizedState,
                                            p = t.stateNode,
                                            m = p.getSnapshotBeforeUpdate(t.elementType === t.type ? y : lr(t.type, y), b);
                                        p.__reactInternalSnapshotBeforeUpdate = m
                                    }
                                    break;
                                case 3:
                                    var h = t.stateNode.containerInfo;
                                    h.nodeType === 1 ? h.textContent = "" : h.nodeType === 9 && h.documentElement && h.removeChild(h.documentElement);
                                    break;
                                case 5:
                                case 6:
                                case 4:
                                case 17:
                                    break;
                                default:
                                    throw Error(I(163))
                            }
                        } catch (x) {
                            Re(t, t.return, x)
                        }
                        if (e = t.sibling, e !== null) {
                            e.return = t.return, B = e;
                            break
                        }
                        B = t.return
                    }
            return v = Tv, Tv = !1, v
        }

        function Aa(e, t, r) {
            var n = t.updateQueue;
            if (n = n !== null ? n.lastEffect : null, n !== null) {
                var o = n = n.next;
                do {
                    if ((o.tag & e) === e) {
                        var i = o.destroy;
                        o.destroy = void 0, i !== void 0 && Fd(t, r, i)
                    }
                    o = o.next
                } while (o !== n)
            }
        }

        function lu(e, t) {
            if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
                var r = t = t.next;
                do {
                    if ((r.tag & e) === e) {
                        var n = r.create;
                        r.destroy = n()
                    }
                    r = r.next
                } while (r !== t)
            }
        }

        function Dd(e) {
            var t = e.ref;
            if (t !== null) {
                var r = e.stateNode;
                switch (e.tag) {
                    case 5:
                        e = r;
                        break;
                    default:
                        e = r
                }
                typeof t == "function" ? t(e) : t.current = e
            }
        }

        function w0(e) {
            var t = e.alternate;
            t !== null && (e.alternate = null, w0(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Tr], delete t[za], delete t[Rd], delete t[hR], delete t[vR])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
        }

        function b0(e) {
            return e.tag === 5 || e.tag === 3 || e.tag === 4
        }

        function Nv(e) {
            e: for (;;) {
                for (; e.sibling === null;) {
                    if (e.return === null || b0(e.return)) return null;
                    e = e.return
                }
                for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
                    if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
                    e.child.return = e, e = e.child
                }
                if (!(e.flags & 2)) return e.stateNode
            }
        }

        function Bd(e, t, r) {
            var n = e.tag;
            if (n === 5 || n === 6) e = e.stateNode, t ? r.nodeType === 8 ? r.parentNode.insertBefore(e, t) : r.insertBefore(e, t) : (r.nodeType === 8 ? (t = r.parentNode, t.insertBefore(e, r)) : (t = r, t.appendChild(e)), r = r._reactRootContainer, r != null || t.onclick !== null || (t.onclick = Fl));
            else if (n !== 4 && (e = e.child, e !== null))
                for (Bd(e, t, r), e = e.sibling; e !== null;) Bd(e, t, r), e = e.sibling
        }

        function zd(e, t, r) {
            var n = e.tag;
            if (n === 5 || n === 6) e = e.stateNode, t ? r.insertBefore(e, t) : r.appendChild(e);
            else if (n !== 4 && (e = e.child, e !== null))
                for (zd(e, t, r), e = e.sibling; e !== null;) zd(e, t, r), e = e.sibling
        }
        var Qe = null,
            ur = !1;

        function gn(e, t, r) {
            for (r = r.child; r !== null;) E0(e, t, r), r = r.sibling
        }

        function E0(e, t, r) {
            if (Nr && typeof Nr.onCommitFiberUnmount == "function") try {
                Nr.onCommitFiberUnmount(eu, r)
            } catch {}
            switch (r.tag) {
                case 5:
                    nt || ti(r, t);
                case 6:
                    var n = Qe,
                        o = ur;
                    Qe = null, gn(e, t, r), Qe = n, ur = o, Qe !== null && (ur ? (e = Qe, r = r.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r)) : Qe.removeChild(r.stateNode));
                    break;
                case 18:
                    Qe !== null && (ur ? (e = Qe, r = r.stateNode, e.nodeType === 8 ? Uf(e.parentNode, r) : e.nodeType === 1 && Uf(e, r), Ia(e)) : Uf(Qe, r.stateNode));
                    break;
                case 4:
                    n = Qe, o = ur, Qe = r.stateNode.containerInfo, ur = !0, gn(e, t, r), Qe = n, ur = o;
                    break;
                case 0:
                case 11:
                case 14:
                case 15:
                    if (!nt && (n = r.updateQueue, n !== null && (n = n.lastEffect, n !== null))) {
                        o = n = n.next;
                        do {
                            var i = o,
                                a = i.destroy;
                            i = i.tag, a !== void 0 && (i & 2 || i & 4) && Fd(r, t, a), o = o.next
                        } while (o !== n)
                    }
                    gn(e, t, r);
                    break;
                case 1:
                    if (!nt && (ti(r, t), n = r.stateNode, typeof n.componentWillUnmount == "function")) try {
                        n.props = r.memoizedProps, n.state = r.memoizedState, n.componentWillUnmount()
                    } catch (s) {
                        Re(r, t, s)
                    }
                    gn(e, t, r);
                    break;
                case 21:
                    gn(e, t, r);
                    break;
                case 22:
                    r.mode & 1 ? (nt = (n = nt) || r.memoizedState !== null, gn(e, t, r), nt = n) : gn(e, t, r);
                    break;
                default:
                    gn(e, t, r)
            }
        }

        function kv(e) {
            var t = e.updateQueue;
            if (t !== null) {
                e.updateQueue = null;
                var r = e.stateNode;
                r === null && (r = e.stateNode = new LR), t.forEach(function(n) {
                    var o = VR.bind(null, e, n);
                    r.has(n) || (r.add(n), n.then(o, o))
                })
            }
        }

        function sr(e, t) {
            var r = t.deletions;
            if (r !== null)
                for (var n = 0; n < r.length; n++) {
                    var o = r[n];
                    try {
                        var i = e,
                            a = t,
                            s = a;
                        e: for (; s !== null;) {
                            switch (s.tag) {
                                case 5:
                                    Qe = s.stateNode, ur = !1;
                                    break e;
                                case 3:
                                    Qe = s.stateNode.containerInfo, ur = !0;
                                    break e;
                                case 4:
                                    Qe = s.stateNode.containerInfo, ur = !0;
                                    break e
                            }
                            s = s.return
                        }
                        if (Qe === null) throw Error(I(160));
                        E0(i, a, o), Qe = null, ur = !1;
                        var l = o.alternate;
                        l !== null && (l.return = null), o.return = null
                    } catch (u) {
                        Re(o, t, u)
                    }
                }
            if (t.subtreeFlags & 12854)
                for (t = t.child; t !== null;) R0(t, e), t = t.sibling
        }

        function R0(e, t) {
            var r = e.alternate,
                n = e.flags;
            switch (e.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                    if (sr(t, e), Pr(e), n & 4) {
                        try {
                            Aa(3, e, e.return), lu(3, e)
                        } catch (y) {
                            Re(e, e.return, y)
                        }
                        try {
                            Aa(5, e, e.return)
                        } catch (y) {
                            Re(e, e.return, y)
                        }
                    }
                    break;
                case 1:
                    sr(t, e), Pr(e), n & 512 && r !== null && ti(r, r.return);
                    break;
                case 5:
                    if (sr(t, e), Pr(e), n & 512 && r !== null && ti(r, r.return), e.flags & 32) {
                        var o = e.stateNode;
                        try {
                            _a(o, "")
                        } catch (y) {
                            Re(e, e.return, y)
                        }
                    }
                    if (n & 4 && (o = e.stateNode, o != null)) {
                        var i = e.memoizedProps,
                            a = r !== null ? r.memoizedProps : i,
                            s = e.type,
                            l = e.updateQueue;
                        if (e.updateQueue = null, l !== null) try {
                            s === "input" && i.type === "radio" && i.name != null && Qv(o, i), fd(s, a);
                            var u = fd(s, i);
                            for (a = 0; a < l.length; a += 2) {
                                var f = l[a],
                                    c = l[a + 1];
                                f === "style" ? Yv(o, c) : f === "dangerouslySetInnerHTML" ? Gv(o, c) : f === "children" ? _a(o, c) : Xd(o, f, c, u)
                            }
                            switch (s) {
                                case "input":
                                    ad(o, i);
                                    break;
                                case "textarea":
                                    Kv(o, i);
                                    break;
                                case "select":
                                    var d = o._wrapperState.wasMultiple;
                                    o._wrapperState.wasMultiple = !!i.multiple;
                                    var g = i.value;
                                    g != null ? ni(o, !!i.multiple, g, !1) : d !== !!i.multiple && (i.defaultValue != null ? ni(o, !!i.multiple, i.defaultValue, !0) : ni(o, !!i.multiple, i.multiple ? [] : "", !1))
                            }
                            o[za] = i
                        } catch (y) {
                            Re(e, e.return, y)
                        }
                    }
                    break;
                case 6:
                    if (sr(t, e), Pr(e), n & 4) {
                        if (e.stateNode === null) throw Error(I(162));
                        o = e.stateNode, i = e.memoizedProps;
                        try {
                            o.nodeValue = i
                        } catch (y) {
                            Re(e, e.return, y)
                        }
                    }
                    break;
                case 3:
                    if (sr(t, e), Pr(e), n & 4 && r !== null && r.memoizedState.isDehydrated) try {
                        Ia(t.containerInfo)
                    } catch (y) {
                        Re(e, e.return, y)
                    }
                    break;
                case 4:
                    sr(t, e), Pr(e);
                    break;
                case 13:
                    sr(t, e), Pr(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (Pp = Pe())), n & 4 && kv(e);
                    break;
                case 22:
                    if (f = r !== null && r.memoizedState !== null, e.mode & 1 ? (nt = (u = nt) || f, sr(t, e), nt = u) : sr(t, e), Pr(e), n & 8192) {
                        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !f && e.mode & 1)
                            for (B = e, f = e.child; f !== null;) {
                                for (c = B = f; B !== null;) {
                                    switch (d = B, g = d.child, d.tag) {
                                        case 0:
                                        case 11:
                                        case 14:
                                        case 15:
                                            Aa(4, d, d.return);
                                            break;
                                        case 1:
                                            ti(d, d.return);
                                            var v = d.stateNode;
                                            if (typeof v.componentWillUnmount == "function") {
                                                n = d, r = d.return;
                                                try {
                                                    t = n, v.props = t.memoizedProps, v.state = t.memoizedState, v.componentWillUnmount()
                                                } catch (y) {
                                                    Re(n, r, y)
                                                }
                                            }
                                            break;
                                        case 5:
                                            ti(d, d.return);
                                            break;
                                        case 22:
                                            if (d.memoizedState !== null) {
                                                Lv(c);
                                                continue
                                            }
                                    }
                                    g !== null ? (g.return = d, B = g) : Lv(c)
                                }
                                f = f.sibling
                            }
                        e: for (f = null, c = e;;) {
                            if (c.tag === 5) {
                                if (f === null) {
                                    f = c;
                                    try {
                                        o = c.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (s = c.stateNode, l = c.memoizedProps.style, a = l != null && l.hasOwnProperty("display") ? l.display : null, s.style.display = Jv("display", a))
                                    } catch (y) {
                                        Re(e, e.return, y)
                                    }
                                }
                            } else if (c.tag === 6) {
                                if (f === null) try {
                                    c.stateNode.nodeValue = u ? "" : c.memoizedProps
                                } catch (y) {
                                    Re(e, e.return, y)
                                }
                            } else if ((c.tag !== 22 && c.tag !== 23 || c.memoizedState === null || c === e) && c.child !== null) {
                                c.child.return = c, c = c.child;
                                continue
                            }
                            if (c === e) break e;
                            for (; c.sibling === null;) {
                                if (c.return === null || c.return === e) break e;
                                f === c && (f = null), c = c.return
                            }
                            f === c && (f = null), c.sibling.return = c.return, c = c.sibling
                        }
                    }
                    break;
                case 19:
                    sr(t, e), Pr(e), n & 4 && kv(e);
                    break;
                case 21:
                    break;
                default:
                    sr(t, e), Pr(e)
            }
        }

        function Pr(e) {
            var t = e.flags;
            if (t & 2) {
                try {
                    e: {
                        for (var r = e.return; r !== null;) {
                            if (b0(r)) {
                                var n = r;
                                break e
                            }
                            r = r.return
                        }
                        throw Error(I(160))
                    }
                    switch (n.tag) {
                        case 5:
                            var o = n.stateNode;
                            n.flags & 32 && (_a(o, ""), n.flags &= -33);
                            var i = Nv(e);
                            zd(e, i, o);
                            break;
                        case 3:
                        case 4:
                            var a = n.stateNode.containerInfo,
                                s = Nv(e);
                            Bd(e, s, a);
                            break;
                        default:
                            throw Error(I(161))
                    }
                }
                catch (l) {
                    Re(e, e.return, l)
                }
                e.flags &= -3
            }
            t & 4096 && (e.flags &= -4097)
        }

        function MR(e, t, r) {
            B = e, O0(e, t, r)
        }

        function O0(e, t, r) {
            for (var n = (e.mode & 1) !== 0; B !== null;) {
                var o = B,
                    i = o.child;
                if (o.tag === 22 && n) {
                    var a = o.memoizedState !== null || yl;
                    if (!a) {
                        var s = o.alternate,
                            l = s !== null && s.memoizedState !== null || nt;
                        s = yl;
                        var u = nt;
                        if (yl = a, (nt = l) && !u)
                            for (B = o; B !== null;) a = B, l = a.child, a.tag === 22 && a.memoizedState !== null ? $v(o) : l !== null ? (l.return = a, B = l) : $v(o);
                        for (; i !== null;) B = i, O0(i, t, r), i = i.sibling;
                        B = o, yl = s, nt = u
                    }
                    _v(e, t, r)
                } else o.subtreeFlags & 8772 && i !== null ? (i.return = o, B = i) : _v(e, t, r)
            }
        }

        function _v(e) {
            for (; B !== null;) {
                var t = B;
                if (t.flags & 8772) {
                    var r = t.alternate;
                    try {
                        if (t.flags & 8772) switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                nt || lu(5, t);
                                break;
                            case 1:
                                var n = t.stateNode;
                                if (t.flags & 4 && !nt)
                                    if (r === null) n.componentDidMount();
                                    else {
                                        var o = t.elementType === t.type ? r.memoizedProps : lr(t.type, r.memoizedProps);
                                        n.componentDidUpdate(o, r.memoizedState, n.__reactInternalSnapshotBeforeUpdate)
                                    } var i = t.updateQueue;
                                i !== null && gv(t, i, n);
                                break;
                            case 3:
                                var a = t.updateQueue;
                                if (a !== null) {
                                    if (r = null, t.child !== null) switch (t.child.tag) {
                                        case 5:
                                            r = t.child.stateNode;
                                            break;
                                        case 1:
                                            r = t.child.stateNode
                                    }
                                    gv(t, a, r)
                                }
                                break;
                            case 5:
                                var s = t.stateNode;
                                if (r === null && t.flags & 4) {
                                    r = s;
                                    var l = t.memoizedProps;
                                    switch (t.type) {
                                        case "button":
                                        case "input":
                                        case "select":
                                        case "textarea":
                                            l.autoFocus && r.focus();
                                            break;
                                        case "img":
                                            l.src && (r.src = l.src)
                                    }
                                }
                                break;
                            case 6:
                                break;
                            case 4:
                                break;
                            case 12:
                                break;
                            case 13:
                                if (t.memoizedState === null) {
                                    var u = t.alternate;
                                    if (u !== null) {
                                        var f = u.memoizedState;
                                        if (f !== null) {
                                            var c = f.dehydrated;
                                            c !== null && Ia(c)
                                        }
                                    }
                                }
                                break;
                            case 19:
                            case 17:
                            case 21:
                            case 22:
                            case 23:
                            case 25:
                                break;
                            default:
                                throw Error(I(163))
                        }
                        nt || t.flags & 512 && Dd(t)
                    } catch (d) {
                        Re(t, t.return, d)
                    }
                }
                if (t === e) {
                    B = null;
                    break
                }
                if (r = t.sibling, r !== null) {
                    r.return = t.return, B = r;
                    break
                }
                B = t.return
            }
        }

        function Lv(e) {
            for (; B !== null;) {
                var t = B;
                if (t === e) {
                    B = null;
                    break
                }
                var r = t.sibling;
                if (r !== null) {
                    r.return = t.return, B = r;
                    break
                }
                B = t.return
            }
        }

        function $v(e) {
            for (; B !== null;) {
                var t = B;
                try {
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            var r = t.return;
                            try {
                                lu(4, t)
                            } catch (l) {
                                Re(t, r, l)
                            }
                            break;
                        case 1:
                            var n = t.stateNode;
                            if (typeof n.componentDidMount == "function") {
                                var o = t.return;
                                try {
                                    n.componentDidMount()
                                } catch (l) {
                                    Re(t, o, l)
                                }
                            }
                            var i = t.return;
                            try {
                                Dd(t)
                            } catch (l) {
                                Re(t, i, l)
                            }
                            break;
                        case 5:
                            var a = t.return;
                            try {
                                Dd(t)
                            } catch (l) {
                                Re(t, a, l)
                            }
                    }
                } catch (l) {
                    Re(t, t.return, l)
                }
                if (t === e) {
                    B = null;
                    break
                }
                var s = t.sibling;
                if (s !== null) {
                    s.return = t.return, B = s;
                    break
                }
                B = t.return
            }
        }
        var IR = Math.ceil,
            Gl = qr.ReactCurrentDispatcher,
            Rp = qr.ReactCurrentOwner,
            Kt = qr.ReactCurrentBatchConfig,
            Z = 0,
            ze = null,
            ke = null,
            Ke = 0,
            kt = 0,
            ri = Ln(0),
            Me = 0,
            Ka = null,
            lo = 0,
            uu = 0,
            Op = 0,
            Ta = null,
            St = null,
            Pp = 0,
            gi = 1 / 0,
            Ur = null,
            Jl = !1,
            Hd = null,
            Pn = null,
            xl = !1,
            Cn = null,
            Yl = 0,
            Na = 0,
            Vd = null,
            Pl = -1,
            Al = 0;

        function ft() {
            return Z & 6 ? Pe() : Pl !== -1 ? Pl : Pl = Pe()
        }

        function An(e) {
            return e.mode & 1 ? Z & 2 && Ke !== 0 ? Ke & -Ke : xR.transition !== null ? (Al === 0 && (Al = uy()), Al) : (e = ie, e !== 0 || (e = window.event, e = e === void 0 ? 16 : hy(e.type)), e) : 1
        }

        function dr(e, t, r, n) {
            if (50 < Na) throw Na = 0, Vd = null, Error(I(185));
            Xa(e, r, n), (!(Z & 2) || e !== ze) && (e === ze && (!(Z & 2) && (uu |= r), Me === 4 && xn(e, Ke)), Et(e, n), r === 1 && Z === 0 && !(t.mode & 1) && (gi = Pe() + 500, iu && $n()))
        }

        function Et(e, t) {
            var r = e.callbackNode;
            CE(e, t);
            var n = $l(e, e === ze ? Ke : 0);
            if (n === 0) r !== null && Hh(r), e.callbackNode = null, e.callbackPriority = 0;
            else if (t = n & -n, e.callbackPriority !== t) {
                if (r != null && Hh(r), t === 1) e.tag === 0 ? yR(Mv.bind(null, e)) : My(Mv.bind(null, e)), mR(function() {
                    !(Z & 6) && $n()
                }), r = null;
                else {
                    switch (cy(n)) {
                        case 1:
                            r = qd;
                            break;
                        case 4:
                            r = sy;
                            break;
                        case 16:
                            r = Ll;
                            break;
                        case 536870912:
                            r = ly;
                            break;
                        default:
                            r = Ll
                    }
                    r = $0(r, P0.bind(null, e))
                }
                e.callbackPriority = t, e.callbackNode = r
            }
        }

        function P0(e, t) {
            if (Pl = -1, Al = 0, Z & 6) throw Error(I(327));
            var r = e.callbackNode;
            if (li() && e.callbackNode !== r) return null;
            var n = $l(e, e === ze ? Ke : 0);
            if (n === 0) return null;
            if (n & 30 || n & e.expiredLanes || t) t = Zl(e, n);
            else {
                t = n;
                var o = Z;
                Z |= 2;
                var i = T0();
                (ze !== e || Ke !== t) && (Ur = null, gi = Pe() + 500, no(e, t));
                do try {
                    DR();
                    break
                } catch (s) {
                    A0(e, s)
                }
                while (1);
                dp(), Gl.current = i, Z = o, ke !== null ? t = 0 : (ze = null, Ke = 0, t = Me)
            }
            if (t !== 0) {
                if (t === 2 && (o = hd(e), o !== 0 && (n = o, t = Ud(e, o))), t === 1) throw r = Ka, no(e, 0), xn(e, n), Et(e, Pe()), r;
                if (t === 6) xn(e, n);
                else {
                    if (o = e.current.alternate, !(n & 30) && !jR(o) && (t = Zl(e, n), t === 2 && (i = hd(e), i !== 0 && (n = i, t = Ud(e, i))), t === 1)) throw r = Ka, no(e, 0), xn(e, n), Et(e, Pe()), r;
                    switch (e.finishedWork = o, e.finishedLanes = n, t) {
                        case 0:
                        case 1:
                            throw Error(I(345));
                        case 2:
                            qn(e, St, Ur);
                            break;
                        case 3:
                            if (xn(e, n), (n & 130023424) === n && (t = Pp + 500 - Pe(), 10 < t)) {
                                if ($l(e, 0) !== 0) break;
                                if (o = e.suspendedLanes, (o & n) !== n) {
                                    ft(), e.pingedLanes |= e.suspendedLanes & o;
                                    break
                                }
                                e.timeoutHandle = Ed(qn.bind(null, e, St, Ur), t);
                                break
                            }
                            qn(e, St, Ur);
                            break;
                        case 4:
                            if (xn(e, n), (n & 4194240) === n) break;
                            for (t = e.eventTimes, o = -1; 0 < n;) {
                                var a = 31 - fr(n);
                                i = 1 << a, a = t[a], a > o && (o = a), n &= ~i
                            }
                            if (n = o, n = Pe() - n, n = (120 > n ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * IR(n / 1960)) - n, 10 < n) {
                                e.timeoutHandle = Ed(qn.bind(null, e, St, Ur), n);
                                break
                            }
                            qn(e, St, Ur);
                            break;
                        case 5:
                            qn(e, St, Ur);
                            break;
                        default:
                            throw Error(I(329))
                    }
                }
            }
            return Et(e, Pe()), e.callbackNode === r ? P0.bind(null, e) : null
        }

        function Ud(e, t) {
            var r = Ta;
            return e.current.memoizedState.isDehydrated && (no(e, t).flags |= 256), e = Zl(e, t), e !== 2 && (t = St, St = r, t !== null && Wd(t)), e
        }

        function Wd(e) {
            St === null ? St = e : St.push.apply(St, e)
        }

        function jR(e) {
            for (var t = e;;) {
                if (t.flags & 16384) {
                    var r = t.updateQueue;
                    if (r !== null && (r = r.stores, r !== null))
                        for (var n = 0; n < r.length; n++) {
                            var o = r[n],
                                i = o.getSnapshot;
                            o = o.value;
                            try {
                                if (!pr(i(), o)) return !1
                            } catch {
                                return !1
                            }
                        }
                }
                if (r = t.child, t.subtreeFlags & 16384 && r !== null) r.return = t, t = r;
                else {
                    if (t === e) break;
                    for (; t.sibling === null;) {
                        if (t.return === null || t.return === e) return !0;
                        t = t.return
                    }
                    t.sibling.return = t.return, t = t.sibling
                }
            }
            return !0
        }

        function xn(e, t) {
            for (t &= ~Op, t &= ~uu, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
                var r = 31 - fr(t),
                    n = 1 << r;
                e[r] = -1, t &= ~n
            }
        }

        function Mv(e) {
            if (Z & 6) throw Error(I(327));
            li();
            var t = $l(e, 0);
            if (!(t & 1)) return Et(e, Pe()), null;
            var r = Zl(e, t);
            if (e.tag !== 0 && r === 2) {
                var n = hd(e);
                n !== 0 && (t = n, r = Ud(e, n))
            }
            if (r === 1) throw r = Ka, no(e, 0), xn(e, t), Et(e, Pe()), r;
            if (r === 6) throw Error(I(345));
            return e.finishedWork = e.current.alternate, e.finishedLanes = t, qn(e, St, Ur), Et(e, Pe()), null
        }

        function Ap(e, t) {
            var r = Z;
            Z |= 1;
            try {
                return e(t)
            } finally {
                Z = r, Z === 0 && (gi = Pe() + 500, iu && $n())
            }
        }

        function uo(e) {
            Cn !== null && Cn.tag === 0 && !(Z & 6) && li();
            var t = Z;
            Z |= 1;
            var r = Kt.transition,
                n = ie;
            try {
                if (Kt.transition = null, ie = 1, e) return e()
            } finally {
                ie = n, Kt.transition = r, Z = t, !(Z & 6) && $n()
            }
        }

        function Tp() {
            kt = ri.current, pe(ri)
        }

        function no(e, t) {
            e.finishedWork = null, e.finishedLanes = 0;
            var r = e.timeoutHandle;
            if (r !== -1 && (e.timeoutHandle = -1, pR(r)), ke !== null)
                for (r = ke.return; r !== null;) {
                    var n = r;
                    switch (up(n), n.tag) {
                        case 1:
                            n = n.type.childContextTypes, n != null && Dl();
                            break;
                        case 3:
                            pi(), pe(wt), pe(ot), yp();
                            break;
                        case 5:
                            vp(n);
                            break;
                        case 4:
                            pi();
                            break;
                        case 13:
                            pe(Se);
                            break;
                        case 19:
                            pe(Se);
                            break;
                        case 10:
                            pp(n.type._context);
                            break;
                        case 22:
                        case 23:
                            Tp()
                    }
                    r = r.return
                }
            if (ze = e, ke = e = Tn(e.current, null), Ke = kt = t, Me = 0, Ka = null, Op = uu = lo = 0, St = Ta = null, to !== null) {
                for (t = 0; t < to.length; t++)
                    if (r = to[t], n = r.interleaved, n !== null) {
                        r.interleaved = null;
                        var o = n.next,
                            i = r.pending;
                        if (i !== null) {
                            var a = i.next;
                            i.next = o, n.next = a
                        }
                        r.pending = n
                    } to = null
            }
            return e
        }

        function A0(e, t) {
            do {
                var r = ke;
                try {
                    if (dp(), El.current = Xl, Kl) {
                        for (var n = Ce.memoizedState; n !== null;) {
                            var o = n.queue;
                            o !== null && (o.pending = null), n = n.next
                        }
                        Kl = !1
                    }
                    if (so = 0, Be = $e = Ce = null, Pa = !1, Ua = 0, Rp.current = null, r === null || r.return === null) {
                        Me = 1, Ka = t, ke = null;
                        break
                    }
                    e: {
                        var i = e,
                            a = r.return,
                            s = r,
                            l = t;
                        if (t = Ke, s.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
                            var u = l,
                                f = s,
                                c = f.tag;
                            if (!(f.mode & 1) && (c === 0 || c === 11 || c === 15)) {
                                var d = f.alternate;
                                d ? (f.updateQueue = d.updateQueue, f.memoizedState = d.memoizedState, f.lanes = d.lanes) : (f.updateQueue = null, f.memoizedState = null)
                            }
                            var g = wv(a);
                            if (g !== null) {
                                g.flags &= -257, bv(g, a, s, i, t), g.mode & 1 && Cv(i, u, t), t = g, l = u;
                                var v = t.updateQueue;
                                if (v === null) {
                                    var y = new Set;
                                    y.add(l), t.updateQueue = y
                                } else v.add(l);
                                break e
                            } else {
                                if (!(t & 1)) {
                                    Cv(i, u, t), Np();
                                    break e
                                }
                                l = Error(I(426))
                            }
                        } else if (ve && s.mode & 1) {
                            var b = wv(a);
                            if (b !== null) {
                                !(b.flags & 65536) && (b.flags |= 256), bv(b, a, s, i, t), cp(mi(l, s));
                                break e
                            }
                        }
                        i = l = mi(l, s),
                        Me !== 4 && (Me = 2),
                        Ta === null ? Ta = [i] : Ta.push(i),
                        i = a;do {
                            switch (i.tag) {
                                case 3:
                                    i.flags |= 65536, t &= -t, i.lanes |= t;
                                    var p = f0(i, l, t);
                                    mv(i, p);
                                    break e;
                                case 1:
                                    s = l;
                                    var m = i.type,
                                        h = i.stateNode;
                                    if (!(i.flags & 128) && (typeof m.getDerivedStateFromError == "function" || h !== null && typeof h.componentDidCatch == "function" && (Pn === null || !Pn.has(h)))) {
                                        i.flags |= 65536, t &= -t, i.lanes |= t;
                                        var x = d0(i, s, t);
                                        mv(i, x);
                                        break e
                                    }
                            }
                            i = i.return
                        } while (i !== null)
                    }
                    k0(r)
                } catch (S) {
                    t = S, ke === r && r !== null && (ke = r = r.return);
                    continue
                }
                break
            } while (1)
        }

        function T0() {
            var e = Gl.current;
            return Gl.current = Xl, e === null ? Xl : e
        }

        function Np() {
            (Me === 0 || Me === 3 || Me === 2) && (Me = 4), ze === null || !(lo & 268435455) && !(uu & 268435455) || xn(ze, Ke)
        }

        function Zl(e, t) {
            var r = Z;
            Z |= 2;
            var n = T0();
            (ze !== e || Ke !== t) && (Ur = null, no(e, t));
            do try {
                FR();
                break
            } catch (o) {
                A0(e, o)
            }
            while (1);
            if (dp(), Z = r, Gl.current = n, ke !== null) throw Error(I(261));
            return ze = null, Ke = 0, Me
        }

        function FR() {
            for (; ke !== null;) N0(ke)
        }

        function DR() {
            for (; ke !== null && !dE();) N0(ke)
        }

        function N0(e) {
            var t = L0(e.alternate, e, kt);
            e.memoizedProps = e.pendingProps, t === null ? k0(e) : ke = t, Rp.current = null
        }

        function k0(e) {
            var t = e;
            do {
                var r = t.alternate;
                if (e = t.return, t.flags & 32768) {
                    if (r = _R(r, t), r !== null) {
                        r.flags &= 32767, ke = r;
                        return
                    }
                    if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
                    else {
                        Me = 6, ke = null;
                        return
                    }
                } else if (r = kR(r, t, kt), r !== null) {
                    ke = r;
                    return
                }
                if (t = t.sibling, t !== null) {
                    ke = t;
                    return
                }
                ke = t = e
            } while (t !== null);
            Me === 0 && (Me = 5)
        }

        function qn(e, t, r) {
            var n = ie,
                o = Kt.transition;
            try {
                Kt.transition = null, ie = 1, BR(e, t, r, n)
            } finally {
                Kt.transition = o, ie = n
            }
            return null
        }

        function BR(e, t, r, n) {
            do li(); while (Cn !== null);
            if (Z & 6) throw Error(I(327));
            r = e.finishedWork;
            var o = e.finishedLanes;
            if (r === null) return null;
            if (e.finishedWork = null, e.finishedLanes = 0, r === e.current) throw Error(I(177));
            e.callbackNode = null, e.callbackPriority = 0;
            var i = r.lanes | r.childLanes;
            if (wE(e, i), e === ze && (ke = ze = null, Ke = 0), !(r.subtreeFlags & 2064) && !(r.flags & 2064) || xl || (xl = !0, $0(Ll, function() {
                    return li(), null
                })), i = (r.flags & 15990) !== 0, r.subtreeFlags & 15990 || i) {
                i = Kt.transition, Kt.transition = null;
                var a = ie;
                ie = 1;
                var s = Z;
                Z |= 4, Rp.current = null, $R(e, r), R0(r, e), lR(wd), Ml = !!Cd, wd = Cd = null, e.current = r, MR(r, e, o), pE(), Z = s, ie = a, Kt.transition = i
            } else e.current = r;
            if (xl && (xl = !1, Cn = e, Yl = o), i = e.pendingLanes, i === 0 && (Pn = null), hE(r.stateNode, n), Et(e, Pe()), t !== null)
                for (n = e.onRecoverableError, r = 0; r < t.length; r++) o = t[r], n(o.value, {
                    componentStack: o.stack,
                    digest: o.digest
                });
            if (Jl) throw Jl = !1, e = Hd, Hd = null, e;
            return Yl & 1 && e.tag !== 0 && li(), i = e.pendingLanes, i & 1 ? e === Vd ? Na++ : (Na = 0, Vd = e) : Na = 0, $n(), null
        }

        function li() {
            if (Cn !== null) {
                var e = cy(Yl),
                    t = Kt.transition,
                    r = ie;
                try {
                    if (Kt.transition = null, ie = 16 > e ? 16 : e, Cn === null) var n = !1;
                    else {
                        if (e = Cn, Cn = null, Yl = 0, Z & 6) throw Error(I(331));
                        var o = Z;
                        for (Z |= 4, B = e.current; B !== null;) {
                            var i = B,
                                a = i.child;
                            if (B.flags & 16) {
                                var s = i.deletions;
                                if (s !== null) {
                                    for (var l = 0; l < s.length; l++) {
                                        var u = s[l];
                                        for (B = u; B !== null;) {
                                            var f = B;
                                            switch (f.tag) {
                                                case 0:
                                                case 11:
                                                case 15:
                                                    Aa(8, f, i)
                                            }
                                            var c = f.child;
                                            if (c !== null) c.return = f, B = c;
                                            else
                                                for (; B !== null;) {
                                                    f = B;
                                                    var d = f.sibling,
                                                        g = f.return;
                                                    if (w0(f), f === u) {
                                                        B = null;
                                                        break
                                                    }
                                                    if (d !== null) {
                                                        d.return = g, B = d;
                                                        break
                                                    }
                                                    B = g
                                                }
                                        }
                                    }
                                    var v = i.alternate;
                                    if (v !== null) {
                                        var y = v.child;
                                        if (y !== null) {
                                            v.child = null;
                                            do {
                                                var b = y.sibling;
                                                y.sibling = null, y = b
                                            } while (y !== null)
                                        }
                                    }
                                    B = i
                                }
                            }
                            if (i.subtreeFlags & 2064 && a !== null) a.return = i, B = a;
                            else e: for (; B !== null;) {
                                if (i = B, i.flags & 2048) switch (i.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Aa(9, i, i.return)
                                }
                                var p = i.sibling;
                                if (p !== null) {
                                    p.return = i.return, B = p;
                                    break e
                                }
                                B = i.return
                            }
                        }
                        var m = e.current;
                        for (B = m; B !== null;) {
                            a = B;
                            var h = a.child;
                            if (a.subtreeFlags & 2064 && h !== null) h.return = a, B = h;
                            else e: for (a = m; B !== null;) {
                                if (s = B, s.flags & 2048) try {
                                    switch (s.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            lu(9, s)
                                    }
                                } catch (S) {
                                    Re(s, s.return, S)
                                }
                                if (s === a) {
                                    B = null;
                                    break e
                                }
                                var x = s.sibling;
                                if (x !== null) {
                                    x.return = s.return, B = x;
                                    break e
                                }
                                B = s.return
                            }
                        }
                        if (Z = o, $n(), Nr && typeof Nr.onPostCommitFiberRoot == "function") try {
                            Nr.onPostCommitFiberRoot(eu, e)
                        } catch {}
                        n = !0
                    }
                    return n
                } finally {
                    ie = r, Kt.transition = t
                }
            }
            return !1
        }

        function Iv(e, t, r) {
            t = mi(r, t), t = f0(e, t, 1), e = On(e, t, 1), t = ft(), e !== null && (Xa(e, 1, t), Et(e, t))
        }

        function Re(e, t, r) {
            if (e.tag === 3) Iv(e, e, r);
            else
                for (; t !== null;) {
                    if (t.tag === 3) {
                        Iv(t, e, r);
                        break
                    } else if (t.tag === 1) {
                        var n = t.stateNode;
                        if (typeof t.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (Pn === null || !Pn.has(n))) {
                            e = mi(r, e), e = d0(t, e, 1), t = On(t, e, 1), e = ft(), t !== null && (Xa(t, 1, e), Et(t, e));
                            break
                        }
                    }
                    t = t.return
                }
        }

        function zR(e, t, r) {
            var n = e.pingCache;
            n !== null && n.delete(t), t = ft(), e.pingedLanes |= e.suspendedLanes & r, ze === e && (Ke & r) === r && (Me === 4 || Me === 3 && (Ke & 130023424) === Ke && 500 > Pe() - Pp ? no(e, 0) : Op |= r), Et(e, t)
        }

        function _0(e, t) {
            t === 0 && (e.mode & 1 ? (t = il, il <<= 1, !(il & 130023424) && (il = 4194304)) : t = 1);
            var r = ft();
            e = Yr(e, t), e !== null && (Xa(e, t, r), Et(e, r))
        }

        function HR(e) {
            var t = e.memoizedState,
                r = 0;
            t !== null && (r = t.retryLane), _0(e, r)
        }

        function VR(e, t) {
            var r = 0;
            switch (e.tag) {
                case 13:
                    var n = e.stateNode,
                        o = e.memoizedState;
                    o !== null && (r = o.retryLane);
                    break;
                case 19:
                    n = e.stateNode;
                    break;
                default:
                    throw Error(I(314))
            }
            n !== null && n.delete(t), _0(e, r)
        }
        var L0;
        L0 = function(e, t, r) {
            if (e !== null)
                if (e.memoizedProps !== t.pendingProps || wt.current) Ct = !0;
                else {
                    if (!(e.lanes & r) && !(t.flags & 128)) return Ct = !1, NR(e, t, r);
                    Ct = !!(e.flags & 131072)
                }
            else Ct = !1, ve && t.flags & 1048576 && Iy(t, Hl, t.index);
            switch (t.lanes = 0, t.tag) {
                case 2:
                    var n = t.type;
                    Ol(e, t), e = t.pendingProps;
                    var o = ci(t, ot.current);
                    si(t, r), o = Sp(null, t, n, e, o, r);
                    var i = Cp();
                    return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, bt(n) ? (i = !0, Bl(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, gp(t), o.updater = au, t.stateNode = o, o._reactInternals = t, kd(t, n, e, r), t = $d(null, t, n, !0, i, r)) : (t.tag = 0, ve && i && lp(t), ct(null, t, o, r), t = t.child), t;
                case 16:
                    n = t.elementType;
                    e: {
                        switch (Ol(e, t), e = t.pendingProps, o = n._init, n = o(n._payload), t.type = n, o = t.tag = WR(n), e = lr(n, e), o) {
                            case 0:
                                t = Ld(null, t, n, e, r);
                                break e;
                            case 1:
                                t = Ov(null, t, n, e, r);
                                break e;
                            case 11:
                                t = Ev(null, t, n, e, r);
                                break e;
                            case 14:
                                t = Rv(null, t, n, lr(n.type, e), r);
                                break e
                        }
                        throw Error(I(306, n, ""))
                    }
                    return t;
                case 0:
                    return n = t.type, o = t.pendingProps, o = t.elementType === n ? o : lr(n, o), Ld(e, t, n, o, r);
                case 1:
                    return n = t.type, o = t.pendingProps, o = t.elementType === n ? o : lr(n, o), Ov(e, t, n, o, r);
                case 3:
                    e: {
                        if (h0(t), e === null) throw Error(I(387));n = t.pendingProps,
                        i = t.memoizedState,
                        o = i.element,
                        By(e, t),
                        Wl(t, n, null, r);
                        var a = t.memoizedState;
                        if (n = a.element, i.isDehydrated)
                            if (i = {
                                    element: n,
                                    isDehydrated: !1,
                                    cache: a.cache,
                                    pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
                                    transitions: a.transitions
                                }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
                                o = mi(Error(I(423)), t), t = Pv(e, t, n, r, o);
                                break e
                            } else if (n !== o) {
                            o = mi(Error(I(424)), t), t = Pv(e, t, n, r, o);
                            break e
                        } else
                            for (_t = Rn(t.stateNode.containerInfo.firstChild), Lt = t, ve = !0, cr = null, r = Uy(t, null, n, r), t.child = r; r;) r.flags = r.flags & -3 | 4096, r = r.sibling;
                        else {
                            if (fi(), n === o) {
                                t = Zr(e, t, r);
                                break e
                            }
                            ct(e, t, n, r)
                        }
                        t = t.child
                    }
                    return t;
                case 5:
                    return Wy(t), e === null && Ad(t), n = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, a = o.children, bd(n, o) ? a = null : i !== null && bd(n, i) && (t.flags |= 32), g0(e, t), ct(e, t, a, r), t.child;
                case 6:
                    return e === null && Ad(t), null;
                case 13:
                    return v0(e, t, r);
                case 4:
                    return hp(t, t.stateNode.containerInfo), n = t.pendingProps, e === null ? t.child = di(t, null, n, r) : ct(e, t, n, r), t.child;
                case 11:
                    return n = t.type, o = t.pendingProps, o = t.elementType === n ? o : lr(n, o), Ev(e, t, n, o, r);
                case 7:
                    return ct(e, t, t.pendingProps, r), t.child;
                case 8:
                    return ct(e, t, t.pendingProps.children, r), t.child;
                case 12:
                    return ct(e, t, t.pendingProps.children, r), t.child;
                case 10:
                    e: {
                        if (n = t.type._context, o = t.pendingProps, i = t.memoizedProps, a = o.value, ce(Vl, n._currentValue), n._currentValue = a, i !== null)
                            if (pr(i.value, a)) {
                                if (i.children === o.children && !wt.current) {
                                    t = Zr(e, t, r);
                                    break e
                                }
                            } else
                                for (i = t.child, i !== null && (i.return = t); i !== null;) {
                                    var s = i.dependencies;
                                    if (s !== null) {
                                        a = i.child;
                                        for (var l = s.firstContext; l !== null;) {
                                            if (l.context === n) {
                                                if (i.tag === 1) {
                                                    l = Xr(-1, r & -r), l.tag = 2;
                                                    var u = i.updateQueue;
                                                    if (u !== null) {
                                                        u = u.shared;
                                                        var f = u.pending;
                                                        f === null ? l.next = l : (l.next = f.next, f.next = l), u.pending = l
                                                    }
                                                }
                                                i.lanes |= r, l = i.alternate, l !== null && (l.lanes |= r), Td(i.return, r, t), s.lanes |= r;
                                                break
                                            }
                                            l = l.next
                                        }
                                    } else if (i.tag === 10) a = i.type === t.type ? null : i.child;
                                    else if (i.tag === 18) {
                                        if (a = i.return, a === null) throw Error(I(341));
                                        a.lanes |= r, s = a.alternate, s !== null && (s.lanes |= r), Td(a, r, t), a = i.sibling
                                    } else a = i.child;
                                    if (a !== null) a.return = i;
                                    else
                                        for (a = i; a !== null;) {
                                            if (a === t) {
                                                a = null;
                                                break
                                            }
                                            if (i = a.sibling, i !== null) {
                                                i.return = a.return, a = i;
                                                break
                                            }
                                            a = a.return
                                        }
                                    i = a
                                }
                        ct(e, t, o.children, r),
                        t = t.child
                    }
                    return t;
                case 9:
                    return o = t.type, n = t.pendingProps.children, si(t, r), o = Xt(o), n = n(o), t.flags |= 1, ct(e, t, n, r), t.child;
                case 14:
                    return n = t.type, o = lr(n, t.pendingProps), o = lr(n.type, o), Rv(e, t, n, o, r);
                case 15:
                    return p0(e, t, t.type, t.pendingProps, r);
                case 17:
                    return n = t.type, o = t.pendingProps, o = t.elementType === n ? o : lr(n, o), Ol(e, t), t.tag = 1, bt(n) ? (e = !0, Bl(t)) : e = !1, si(t, r), Hy(t, n, o), kd(t, n, o, r), $d(null, t, n, !0, e, r);
                case 19:
                    return y0(e, t, r);
                case 22:
                    return m0(e, t, r)
            }
            throw Error(I(156, t.tag))
        };

        function $0(e, t) {
            return ay(e, t)
        }

        function UR(e, t, r, n) {
            this.tag = e, this.key = r, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
        }

        function Qt(e, t, r, n) {
            return new UR(e, t, r, n)
        }

        function kp(e) {
            return e = e.prototype, !(!e || !e.isReactComponent)
        }

        function WR(e) {
            if (typeof e == "function") return kp(e) ? 1 : 0;
            if (e != null) {
                if (e = e.$$typeof, e === Jd) return 11;
                if (e === Yd) return 14
            }
            return 2
        }

        function Tn(e, t) {
            var r = e.alternate;
            return r === null ? (r = Qt(e.tag, t, e.key, e.mode), r.elementType = e.elementType, r.type = e.type, r.stateNode = e.stateNode, r.alternate = e, e.alternate = r) : (r.pendingProps = t, r.type = e.type, r.flags = 0, r.subtreeFlags = 0, r.deletions = null), r.flags = e.flags & 14680064, r.childLanes = e.childLanes, r.lanes = e.lanes, r.child = e.child, r.memoizedProps = e.memoizedProps, r.memoizedState = e.memoizedState, r.updateQueue = e.updateQueue, t = e.dependencies, r.dependencies = t === null ? null : {
                lanes: t.lanes,
                firstContext: t.firstContext
            }, r.sibling = e.sibling, r.index = e.index, r.ref = e.ref, r
        }

        function Tl(e, t, r, n, o, i) {
            var a = 2;
            if (n = e, typeof e == "function") kp(e) && (a = 1);
            else if (typeof e == "string") a = 5;
            else e: switch (e) {
                case Qo:
                    return oo(r.children, o, i, t);
                case Gd:
                    a = 8, o |= 8;
                    break;
                case td:
                    return e = Qt(12, r, t, o | 2), e.elementType = td, e.lanes = i, e;
                case rd:
                    return e = Qt(13, r, t, o), e.elementType = rd, e.lanes = i, e;
                case nd:
                    return e = Qt(19, r, t, o), e.elementType = nd, e.lanes = i, e;
                case Vv:
                    return cu(r, o, i, t);
                default:
                    if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                        case zv:
                            a = 10;
                            break e;
                        case Hv:
                            a = 9;
                            break e;
                        case Jd:
                            a = 11;
                            break e;
                        case Yd:
                            a = 14;
                            break e;
                        case hn:
                            a = 16, n = null;
                            break e
                    }
                    throw Error(I(130, e == null ? e : typeof e, ""))
            }
            return t = Qt(a, r, t, o), t.elementType = e, t.type = n, t.lanes = i, t
        }

        function oo(e, t, r, n) {
            return e = Qt(7, e, n, t), e.lanes = r, e
        }

        function cu(e, t, r, n) {
            return e = Qt(22, e, n, t), e.elementType = Vv, e.lanes = r, e.stateNode = {
                isHidden: !1
            }, e
        }

        function Zf(e, t, r) {
            return e = Qt(6, e, null, t), e.lanes = r, e
        }

        function qf(e, t, r) {
            return t = Qt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = r, t.stateNode = {
                containerInfo: e.containerInfo,
                pendingChildren: null,
                implementation: e.implementation
            }, t
        }

        function QR(e, t, r, n, o) {
            this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = If(0), this.expirationTimes = If(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = If(0), this.identifierPrefix = n, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null
        }

        function _p(e, t, r, n, o, i, a, s, l) {
            return e = new QR(e, t, r, s, l), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Qt(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = {
                element: n,
                isDehydrated: r,
                cache: null,
                transitions: null,
                pendingSuspenseBoundaries: null
            }, gp(i), e
        }

        function KR(e, t, r) {
            var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
            return {
                $$typeof: Wo,
                key: n == null ? null : "" + n,
                children: e,
                containerInfo: t,
                implementation: r
            }
        }

        function M0(e) {
            if (!e) return kn;
            e = e._reactInternals;
            e: {
                if (fo(e) !== e || e.tag !== 1) throw Error(I(170));
                var t = e;do {
                    switch (t.tag) {
                        case 3:
                            t = t.stateNode.context;
                            break e;
                        case 1:
                            if (bt(t.type)) {
                                t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                                break e
                            }
                    }
                    t = t.return
                } while (t !== null);
                throw Error(I(171))
            }
            if (e.tag === 1) {
                var r = e.type;
                if (bt(r)) return $y(e, r, t)
            }
            return t
        }

        function I0(e, t, r, n, o, i, a, s, l) {
            return e = _p(r, n, !0, e, o, i, a, s, l), e.context = M0(null), r = e.current, n = ft(), o = An(r), i = Xr(n, o), i.callback = t ?? null, On(r, i, o), e.current.lanes = o, Xa(e, o, n), Et(e, n), e
        }

        function fu(e, t, r, n) {
            var o = t.current,
                i = ft(),
                a = An(o);
            return r = M0(r), t.context === null ? t.context = r : t.pendingContext = r, t = Xr(i, a), t.payload = {
                element: e
            }, n = n === void 0 ? null : n, n !== null && (t.callback = n), e = On(o, t, a), e !== null && (dr(e, o, a, i), bl(e, o, a)), a
        }

        function ql(e) {
            if (e = e.current, !e.child) return null;
            switch (e.child.tag) {
                case 5:
                    return e.child.stateNode;
                default:
                    return e.child.stateNode
            }
        }

        function jv(e, t) {
            if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
                var r = e.retryLane;
                e.retryLane = r !== 0 && r < t ? r : t
            }
        }

        function Lp(e, t) {
            jv(e, t), (e = e.alternate) && jv(e, t)
        }

        function XR() {
            return null
        }
        var j0 = typeof reportError == "function" ? reportError : function(e) {};

        function $p(e) {
            this._internalRoot = e
        }
        du.prototype.render = $p.prototype.render = function(e) {
            var t = this._internalRoot;
            if (t === null) throw Error(I(409));
            fu(e, t, null, null)
        };
        du.prototype.unmount = $p.prototype.unmount = function() {
            var e = this._internalRoot;
            if (e !== null) {
                this._internalRoot = null;
                var t = e.containerInfo;
                uo(function() {
                    fu(null, e, null, null)
                }), t[Jr] = null
            }
        };

        function du(e) {
            this._internalRoot = e
        }
        du.prototype.unstable_scheduleHydration = function(e) {
            if (e) {
                var t = py();
                e = {
                    blockedOn: null,
                    target: e,
                    priority: t
                };
                for (var r = 0; r < yn.length && t !== 0 && t < yn[r].priority; r++);
                yn.splice(r, 0, e), r === 0 && gy(e)
            }
        };

        function Mp(e) {
            return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
        }

        function pu(e) {
            return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
        }

        function Fv() {}

        function GR(e, t, r, n, o) {
            if (o) {
                if (typeof n == "function") {
                    var i = n;
                    n = function() {
                        var u = ql(a);
                        i.call(u)
                    }
                }
                var a = I0(t, n, e, 0, null, !1, !1, "", Fv);
                return e._reactRootContainer = a, e[Jr] = a.current, Da(e.nodeType === 8 ? e.parentNode : e), uo(), a
            }
            for (; o = e.lastChild;) e.removeChild(o);
            if (typeof n == "function") {
                var s = n;
                n = function() {
                    var u = ql(l);
                    s.call(u)
                }
            }
            var l = _p(e, 0, !1, null, null, !1, !1, "", Fv);
            return e._reactRootContainer = l, e[Jr] = l.current, Da(e.nodeType === 8 ? e.parentNode : e), uo(function() {
                fu(t, l, r, n)
            }), l
        }

        function mu(e, t, r, n, o) {
            var i = r._reactRootContainer;
            if (i) {
                var a = i;
                if (typeof o == "function") {
                    var s = o;
                    o = function() {
                        var l = ql(a);
                        s.call(l)
                    }
                }
                fu(t, a, e, o)
            } else a = GR(r, t, e, o, n);
            return ql(a)
        }
        fy = function(e) {
            switch (e.tag) {
                case 3:
                    var t = e.stateNode;
                    if (t.current.memoizedState.isDehydrated) {
                        var r = Sa(t.pendingLanes);
                        r !== 0 && (ep(t, r | 1), Et(t, Pe()), !(Z & 6) && (gi = Pe() + 500, $n()))
                    }
                    break;
                case 13:
                    uo(function() {
                        var n = Yr(e, 1);
                        if (n !== null) {
                            var o = ft();
                            dr(n, e, 1, o)
                        }
                    }), Lp(e, 1)
            }
        };
        tp = function(e) {
            if (e.tag === 13) {
                var t = Yr(e, 134217728);
                if (t !== null) {
                    var r = ft();
                    dr(t, e, 134217728, r)
                }
                Lp(e, 134217728)
            }
        };
        dy = function(e) {
            if (e.tag === 13) {
                var t = An(e),
                    r = Yr(e, t);
                if (r !== null) {
                    var n = ft();
                    dr(r, e, t, n)
                }
                Lp(e, t)
            }
        };
        py = function() {
            return ie
        };
        my = function(e, t) {
            var r = ie;
            try {
                return ie = e, t()
            } finally {
                ie = r
            }
        };
        pd = function(e, t, r) {
            switch (t) {
                case "input":
                    if (ad(e, r), t = r.name, r.type === "radio" && t != null) {
                        for (r = e; r.parentNode;) r = r.parentNode;
                        for (r = r.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < r.length; t++) {
                            var n = r[t];
                            if (n !== e && n.form === e.form) {
                                var o = ou(n);
                                if (!o) throw Error(I(90));
                                Wv(n), ad(n, o)
                            }
                        }
                    }
                    break;
                case "textarea":
                    Kv(e, r);
                    break;
                case "select":
                    t = r.value, t != null && ni(e, !!r.multiple, t, !1)
            }
        };
        ey = Ap;
        ty = uo;
        var JR = {
                usingClientEntryPoint: !1,
                Events: [Ja, Jo, ou, Zv, qv, Ap]
            },
            ha = {
                findFiberByHostInstance: eo,
                bundleType: 0,
                version: "18.2.0",
                rendererPackageName: "react-dom"
            },
            YR = {
                bundleType: ha.bundleType,
                version: ha.version,
                rendererPackageName: ha.rendererPackageName,
                rendererConfig: ha.rendererConfig,
                overrideHookState: null,
                overrideHookStateDeletePath: null,
                overrideHookStateRenamePath: null,
                overrideProps: null,
                overridePropsDeletePath: null,
                overridePropsRenamePath: null,
                setErrorHandler: null,
                setSuspenseHandler: null,
                scheduleUpdate: null,
                currentDispatcherRef: qr.ReactCurrentDispatcher,
                findHostInstanceByFiber: function(e) {
                    return e = oy(e), e === null ? null : e.stateNode
                },
                findFiberByHostInstance: ha.findFiberByHostInstance || XR,
                findHostInstancesForRefresh: null,
                scheduleRefresh: null,
                scheduleRoot: null,
                setRefreshHandler: null,
                getCurrentFiber: null,
                reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
            };
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && (va = __REACT_DEVTOOLS_GLOBAL_HOOK__, !va.isDisabled && va.supportsFiber)) try {
            eu = va.inject(YR), Nr = va
        } catch {}
        var va;
        It.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = JR;
        It.createPortal = function(e, t) {
            var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
            if (!Mp(t)) throw Error(I(200));
            return KR(e, t, null, r)
        };
        It.createRoot = function(e, t) {
            if (!Mp(e)) throw Error(I(299));
            var r = !1,
                n = "",
                o = j0;
            return t != null && (t.unstable_strictMode === !0 && (r = !0), t.identifierPrefix !== void 0 && (n = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = _p(e, 1, !1, null, null, r, !1, n, o), e[Jr] = t.current, Da(e.nodeType === 8 ? e.parentNode : e), new $p(t)
        };
        It.findDOMNode = function(e) {
            if (e == null) return null;
            if (e.nodeType === 1) return e;
            var t = e._reactInternals;
            if (t === void 0) throw typeof e.render == "function" ? Error(I(188)) : (e = Object.keys(e).join(","), Error(I(268, e)));
            return e = oy(t), e = e === null ? null : e.stateNode, e
        };
        It.flushSync = function(e) {
            return uo(e)
        };
        It.hydrate = function(e, t, r) {
            if (!pu(t)) throw Error(I(200));
            return mu(null, e, t, !0, r)
        };
        It.hydrateRoot = function(e, t, r) {
            if (!Mp(e)) throw Error(I(405));
            var n = r != null && r.hydratedSources || null,
                o = !1,
                i = "",
                a = j0;
            if (r != null && (r.unstable_strictMode === !0 && (o = !0), r.identifierPrefix !== void 0 && (i = r.identifierPrefix), r.onRecoverableError !== void 0 && (a = r.onRecoverableError)), t = I0(t, null, e, 1, r ?? null, o, !1, i, a), e[Jr] = t.current, Da(e), n)
                for (e = 0; e < n.length; e++) r = n[e], o = r._getVersion, o = o(r._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [r, o] : t.mutableSourceEagerHydrationData.push(r, o);
            return new du(t)
        };
        It.render = function(e, t, r) {
            if (!pu(t)) throw Error(I(200));
            return mu(null, e, t, !1, r)
        };
        It.unmountComponentAtNode = function(e) {
            if (!pu(e)) throw Error(I(40));
            return e._reactRootContainer ? (uo(function() {
                mu(null, null, e, !1, function() {
                    e._reactRootContainer = null, e[Jr] = null
                })
            }), !0) : !1
        };
        It.unstable_batchedUpdates = Ap;
        It.unstable_renderSubtreeIntoContainer = function(e, t, r, n) {
            if (!pu(r)) throw Error(I(200));
            if (e == null || e._reactInternals === void 0) throw Error(I(38));
            return mu(e, t, r, !1, n)
        };
        It.version = "18.2.0-next-9e3b772b8-20220608"
    });
    var yi = xt((e_, B0) => {
        "use strict";

        function D0() {
            if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(D0)
            } catch {}
        }
        D0(), B0.exports = F0()
    });
    var H0 = xt(Ip => {
        "use strict";
        var z0 = yi();
        Ip.createRoot = z0.createRoot, Ip.hydrateRoot = z0.hydrateRoot;
        var t_
    });
    var f1 = xt((a2, c1) => {
        c1.exports = {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0
        }
    });
    var ss = xt((Kp, R1) => {
        (function(e, t) {
            if (typeof define == "function" && define.amd) define("webextension-polyfill", ["module"], t);
            else if (typeof Kp < "u") t(R1);
            else {
                var r = {
                    exports: {}
                };
                t(r), e.browser = r.exports
            }
        })(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : Kp, function(e) {
            "use strict";
            if (!globalThis.chrome?.runtime?.id) throw new Error("This script should only be loaded in a browser extension.");
            if (typeof globalThis.browser > "u" || Object.getPrototypeOf(globalThis.browser) !== Object.prototype) {
                let t = "The message port closed before a response was received.",
                    r = n => {
                        let o = {
                            alarms: {
                                clear: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                clearAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                get: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            bookmarks: {
                                create: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                get: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getChildren: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getRecent: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getSubTree: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getTree: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                move: {
                                    minArgs: 2,
                                    maxArgs: 2
                                },
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeTree: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                search: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                update: {
                                    minArgs: 2,
                                    maxArgs: 2
                                }
                            },
                            browserAction: {
                                disable: {
                                    minArgs: 0,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                enable: {
                                    minArgs: 0,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                getBadgeBackgroundColor: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getBadgeText: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getPopup: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getTitle: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                openPopup: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                setBadgeBackgroundColor: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                setBadgeText: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                setIcon: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                setPopup: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                setTitle: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                }
                            },
                            browsingData: {
                                remove: {
                                    minArgs: 2,
                                    maxArgs: 2
                                },
                                removeCache: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeCookies: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeDownloads: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeFormData: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeHistory: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeLocalStorage: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removePasswords: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removePluginData: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                settings: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            commands: {
                                getAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            contextMenus: {
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                update: {
                                    minArgs: 2,
                                    maxArgs: 2
                                }
                            },
                            cookies: {
                                get: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getAll: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getAllCookieStores: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                set: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            devtools: {
                                inspectedWindow: {
                                    eval: {
                                        minArgs: 1,
                                        maxArgs: 2,
                                        singleCallbackArg: !1
                                    }
                                },
                                panels: {
                                    create: {
                                        minArgs: 3,
                                        maxArgs: 3,
                                        singleCallbackArg: !0
                                    },
                                    elements: {
                                        createSidebarPane: {
                                            minArgs: 1,
                                            maxArgs: 1
                                        }
                                    }
                                }
                            },
                            downloads: {
                                cancel: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                download: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                erase: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getFileIcon: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                open: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                pause: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeFile: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                resume: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                search: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                show: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                }
                            },
                            extension: {
                                isAllowedFileSchemeAccess: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                isAllowedIncognitoAccess: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            history: {
                                addUrl: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                deleteAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                deleteRange: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                deleteUrl: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getVisits: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                search: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            i18n: {
                                detectLanguage: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getAcceptLanguages: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            identity: {
                                launchWebAuthFlow: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            idle: {
                                queryState: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            management: {
                                get: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                getSelf: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                setEnabled: {
                                    minArgs: 2,
                                    maxArgs: 2
                                },
                                uninstallSelf: {
                                    minArgs: 0,
                                    maxArgs: 1
                                }
                            },
                            notifications: {
                                clear: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                create: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                getAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                getPermissionLevel: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                update: {
                                    minArgs: 2,
                                    maxArgs: 2
                                }
                            },
                            pageAction: {
                                getPopup: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getTitle: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                hide: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                setIcon: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                setPopup: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                setTitle: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                show: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                }
                            },
                            permissions: {
                                contains: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                request: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            runtime: {
                                getBackgroundPage: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                getPlatformInfo: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                openOptionsPage: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                requestUpdateCheck: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                sendMessage: {
                                    minArgs: 1,
                                    maxArgs: 3
                                },
                                sendNativeMessage: {
                                    minArgs: 2,
                                    maxArgs: 2
                                },
                                setUninstallURL: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            sessions: {
                                getDevices: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getRecentlyClosed: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                restore: {
                                    minArgs: 0,
                                    maxArgs: 1
                                }
                            },
                            storage: {
                                local: {
                                    clear: {
                                        minArgs: 0,
                                        maxArgs: 0
                                    },
                                    get: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    },
                                    getBytesInUse: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    },
                                    remove: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    },
                                    set: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    }
                                },
                                managed: {
                                    get: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    },
                                    getBytesInUse: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    }
                                },
                                sync: {
                                    clear: {
                                        minArgs: 0,
                                        maxArgs: 0
                                    },
                                    get: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    },
                                    getBytesInUse: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    },
                                    remove: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    },
                                    set: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    }
                                }
                            },
                            tabs: {
                                captureVisibleTab: {
                                    minArgs: 0,
                                    maxArgs: 2
                                },
                                create: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                detectLanguage: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                discard: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                duplicate: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                executeScript: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                get: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getCurrent: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                getZoom: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getZoomSettings: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                goBack: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                goForward: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                highlight: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                insertCSS: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                move: {
                                    minArgs: 2,
                                    maxArgs: 2
                                },
                                query: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                reload: {
                                    minArgs: 0,
                                    maxArgs: 2
                                },
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeCSS: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                sendMessage: {
                                    minArgs: 2,
                                    maxArgs: 3
                                },
                                setZoom: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                setZoomSettings: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                update: {
                                    minArgs: 1,
                                    maxArgs: 2
                                }
                            },
                            topSites: {
                                get: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            webNavigation: {
                                getAllFrames: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getFrame: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            webRequest: {
                                handlerBehaviorChanged: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            windows: {
                                create: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                get: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                getAll: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getCurrent: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getLastFocused: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                update: {
                                    minArgs: 2,
                                    maxArgs: 2
                                }
                            }
                        };
                        if (Object.keys(o).length === 0) throw new Error("api-metadata.json has not been included in browser-polyfill");
                        class i extends WeakMap {
                            constructor(S, C = void 0) {
                                super(C), this.createItem = S
                            }
                            get(S) {
                                return this.has(S) || this.set(S, this.createItem(S)), super.get(S)
                            }
                        }
                        let a = x => x && typeof x == "object" && typeof x.then == "function",
                            s = (x, S) => (...C) => {
                                n.runtime.lastError ? x.reject(new Error(n.runtime.lastError.message)) : S.singleCallbackArg || C.length <= 1 && S.singleCallbackArg !== !1 ? x.resolve(C[0]) : x.resolve(C)
                            },
                            l = x => x == 1 ? "argument" : "arguments",
                            u = (x, S) => function(w, ...O) {
                                if (O.length < S.minArgs) throw new Error(`Expected at least ${S.minArgs} ${l(S.minArgs)} for ${x}(), got ${O.length}`);
                                if (O.length > S.maxArgs) throw new Error(`Expected at most ${S.maxArgs} ${l(S.maxArgs)} for ${x}(), got ${O.length}`);
                                return new Promise((A, E) => {
                                    if (S.fallbackToNoCallback) try {
                                        w[x](...O, s({
                                            resolve: A,
                                            reject: E
                                        }, S))
                                    } catch {
                                        w[x](...O), S.fallbackToNoCallback = !1, S.noCallback = !0, A()
                                    } else S.noCallback ? (w[x](...O), A()) : w[x](...O, s({
                                        resolve: A,
                                        reject: E
                                    }, S))
                                })
                            },
                            f = (x, S, C) => new Proxy(S, {
                                apply(w, O, A) {
                                    return C.call(O, x, ...A)
                                }
                            }),
                            c = Function.call.bind(Object.prototype.hasOwnProperty),
                            d = (x, S = {}, C = {}) => {
                                let w = Object.create(null),
                                    O = {
                                        has(E, N) {
                                            return N in x || N in w
                                        },
                                        get(E, N, R) {
                                            if (N in w) return w[N];
                                            if (!(N in x)) return;
                                            let P = x[N];
                                            if (typeof P == "function")
                                                if (typeof S[N] == "function") P = f(x, x[N], S[N]);
                                                else if (c(C, N)) {
                                                let k = u(N, C[N]);
                                                P = f(x, x[N], k)
                                            } else P = P.bind(x);
                                            else if (typeof P == "object" && P !== null && (c(S, N) || c(C, N))) P = d(P, S[N], C[N]);
                                            else if (c(C, "*")) P = d(P, S[N], C["*"]);
                                            else return Object.defineProperty(w, N, {
                                                configurable: !0,
                                                enumerable: !0,
                                                get() {
                                                    return x[N]
                                                },
                                                set(k) {
                                                    x[N] = k
                                                }
                                            }), P;
                                            return w[N] = P, P
                                        },
                                        set(E, N, R, P) {
                                            return N in w ? w[N] = R : x[N] = R, !0
                                        },
                                        defineProperty(E, N, R) {
                                            return Reflect.defineProperty(w, N, R)
                                        },
                                        deleteProperty(E, N) {
                                            return Reflect.deleteProperty(w, N)
                                        }
                                    },
                                    A = Object.create(x);
                                return new Proxy(A, O)
                            },
                            g = x => ({
                                addListener(S, C, ...w) {
                                    S.addListener(x.get(C), ...w)
                                },
                                hasListener(S, C) {
                                    return S.hasListener(x.get(C))
                                },
                                removeListener(S, C) {
                                    S.removeListener(x.get(C))
                                }
                            }),
                            v = new i(x => typeof x != "function" ? x : function(C) {
                                let w = d(C, {}, {
                                    getContent: {
                                        minArgs: 0,
                                        maxArgs: 0
                                    }
                                });
                                x(w)
                            }),
                            y = new i(x => typeof x != "function" ? x : function(C, w, O) {
                                let A = !1,
                                    E, N = new Promise(_ => {
                                        E = function(M) {
                                            A = !0, _(M)
                                        }
                                    }),
                                    R;
                                try {
                                    R = x(C, w, E)
                                } catch (_) {
                                    R = Promise.reject(_)
                                }
                                let P = R !== !0 && a(R);
                                if (R !== !0 && !P && !A) return !1;
                                let k = _ => {
                                    _.then(M => {
                                        O(M)
                                    }, M => {
                                        let j;
                                        M && (M instanceof Error || typeof M.message == "string") ? j = M.message : j = "An unexpected error occurred", O({
                                            __mozWebExtensionPolyfillReject__: !0,
                                            message: j
                                        })
                                    }).catch(M => {})
                                };
                                return k(P ? R : N), !0
                            }),
                            b = ({
                                reject: x,
                                resolve: S
                            }, C) => {
                                n.runtime.lastError ? n.runtime.lastError.message === t ? S() : x(new Error(n.runtime.lastError.message)) : C && C.__mozWebExtensionPolyfillReject__ ? x(new Error(C.message)) : S(C)
                            },
                            p = (x, S, C, ...w) => {
                                if (w.length < S.minArgs) throw new Error(`Expected at least ${S.minArgs} ${l(S.minArgs)} for ${x}(), got ${w.length}`);
                                if (w.length > S.maxArgs) throw new Error(`Expected at most ${S.maxArgs} ${l(S.maxArgs)} for ${x}(), got ${w.length}`);
                                return new Promise((O, A) => {
                                    let E = b.bind(null, {
                                        resolve: O,
                                        reject: A
                                    });
                                    w.push(E), C.sendMessage(...w)
                                })
                            },
                            m = {
                                devtools: {
                                    network: {
                                        onRequestFinished: g(v)
                                    }
                                },
                                runtime: {
                                    onMessage: g(y),
                                    onMessageExternal: g(y),
                                    sendMessage: p.bind(null, "sendMessage", {
                                        minArgs: 1,
                                        maxArgs: 3
                                    })
                                },
                                tabs: {
                                    sendMessage: p.bind(null, "sendMessage", {
                                        minArgs: 2,
                                        maxArgs: 3
                                    })
                                }
                            },
                            h = {
                                clear: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                get: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                set: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            };
                        return o.privacy = {
                            network: {
                                "*": h
                            },
                            services: {
                                "*": h
                            },
                            websites: {
                                "*": h
                            }
                        }, d(n, m, o)
                    };
                e.exports = r(chrome)
            } else e.exports = globalThis.browser
        })
    });
    var be = xt((DI, Vu) => {
        (function() {
            "use strict";
            var e = {}.hasOwnProperty,
                t = "[native code]";

            function r() {
                for (var n = [], o = 0; o < arguments.length; o++) {
                    var i = arguments[o];
                    if (i) {
                        var a = typeof i;
                        if (a === "string" || a === "number") n.push(i);
                        else if (Array.isArray(i)) {
                            if (i.length) {
                                var s = r.apply(null, i);
                                s && n.push(s)
                            }
                        } else if (a === "object") {
                            if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]")) {
                                n.push(i.toString());
                                continue
                            }
                            for (var l in i) e.call(i, l) && i[l] && n.push(l)
                        }
                    }
                }
                return n.join(" ")
            }
            typeof Vu < "u" && Vu.exports ? (r.default = r, Vu.exports = r) : typeof define == "function" && typeof define.amd == "object" && define.amd ? define("classnames", [], function() {
                return r
            }) : window.classNames = r
        })()
    });
    var dx = xt(ae => {
        "use strict";
        var He = typeof Symbol == "function" && Symbol.for,
            fm = He ? Symbol.for("react.element") : 60103,
            dm = He ? Symbol.for("react.portal") : 60106,
            Uu = He ? Symbol.for("react.fragment") : 60107,
            Wu = He ? Symbol.for("react.strict_mode") : 60108,
            Qu = He ? Symbol.for("react.profiler") : 60114,
            Ku = He ? Symbol.for("react.provider") : 60109,
            Xu = He ? Symbol.for("react.context") : 60110,
            pm = He ? Symbol.for("react.async_mode") : 60111,
            Gu = He ? Symbol.for("react.concurrent_mode") : 60111,
            Ju = He ? Symbol.for("react.forward_ref") : 60112,
            Yu = He ? Symbol.for("react.suspense") : 60113,
            CP = He ? Symbol.for("react.suspense_list") : 60120,
            Zu = He ? Symbol.for("react.memo") : 60115,
            qu = He ? Symbol.for("react.lazy") : 60116,
            wP = He ? Symbol.for("react.block") : 60121,
            bP = He ? Symbol.for("react.fundamental") : 60117,
            EP = He ? Symbol.for("react.responder") : 60118,
            RP = He ? Symbol.for("react.scope") : 60119;

        function jt(e) {
            if (typeof e == "object" && e !== null) {
                var t = e.$$typeof;
                switch (t) {
                    case fm:
                        switch (e = e.type, e) {
                            case pm:
                            case Gu:
                            case Uu:
                            case Qu:
                            case Wu:
                            case Yu:
                                return e;
                            default:
                                switch (e = e && e.$$typeof, e) {
                                    case Xu:
                                    case Ju:
                                    case qu:
                                    case Zu:
                                    case Ku:
                                        return e;
                                    default:
                                        return t
                                }
                        }
                    case dm:
                        return t
                }
            }
        }

        function fx(e) {
            return jt(e) === Gu
        }
        ae.AsyncMode = pm;
        ae.ConcurrentMode = Gu;
        ae.ContextConsumer = Xu;
        ae.ContextProvider = Ku;
        ae.Element = fm;
        ae.ForwardRef = Ju;
        ae.Fragment = Uu;
        ae.Lazy = qu;
        ae.Memo = Zu;
        ae.Portal = dm;
        ae.Profiler = Qu;
        ae.StrictMode = Wu;
        ae.Suspense = Yu;
        ae.isAsyncMode = function(e) {
            return fx(e) || jt(e) === pm
        };
        ae.isConcurrentMode = fx;
        ae.isContextConsumer = function(e) {
            return jt(e) === Xu
        };
        ae.isContextProvider = function(e) {
            return jt(e) === Ku
        };
        ae.isElement = function(e) {
            return typeof e == "object" && e !== null && e.$$typeof === fm
        };
        ae.isForwardRef = function(e) {
            return jt(e) === Ju
        };
        ae.isFragment = function(e) {
            return jt(e) === Uu
        };
        ae.isLazy = function(e) {
            return jt(e) === qu
        };
        ae.isMemo = function(e) {
            return jt(e) === Zu
        };
        ae.isPortal = function(e) {
            return jt(e) === dm
        };
        ae.isProfiler = function(e) {
            return jt(e) === Qu
        };
        ae.isStrictMode = function(e) {
            return jt(e) === Wu
        };
        ae.isSuspense = function(e) {
            return jt(e) === Yu
        };
        ae.isValidElementType = function(e) {
            return typeof e == "string" || typeof e == "function" || e === Uu || e === Gu || e === Qu || e === Wu || e === Yu || e === CP || typeof e == "object" && e !== null && (e.$$typeof === qu || e.$$typeof === Zu || e.$$typeof === Ku || e.$$typeof === Xu || e.$$typeof === Ju || e.$$typeof === bP || e.$$typeof === EP || e.$$typeof === RP || e.$$typeof === wP)
        };
        ae.typeOf = jt
    });
    var mm = xt((zI, px) => {
        "use strict";
        px.exports = dx()
    });
    var wb = xt(gf => {
        "use strict";
        var Ik = $(),
            jk = Symbol.for("react.element"),
            Fk = Symbol.for("react.fragment"),
            Dk = Object.prototype.hasOwnProperty,
            Bk = Ik.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
            zk = {
                key: !0,
                ref: !0,
                __self: !0,
                __source: !0
            };

        function Cb(e, t, r) {
            var n, o = {},
                i = null,
                a = null;
            r !== void 0 && (i = "" + r), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (a = t.ref);
            for (n in t) Dk.call(t, n) && !zk.hasOwnProperty(n) && (o[n] = t[n]);
            if (e && e.defaultProps)
                for (n in t = e.defaultProps, t) o[n] === void 0 && (o[n] = t[n]);
            return {
                $$typeof: jk,
                type: e,
                key: i,
                ref: a,
                props: o,
                _owner: Bk.current
            }
        }
        gf.Fragment = Fk;
        gf.jsx = Cb;
        gf.jsxs = Cb
    });
    var Bo = xt((oU, bb) => {
        "use strict";
        bb.exports = wb()
    });
    var Ab = T(H0());

    function U(e) {
        "@babel/helpers - typeof";
        return U = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
            return typeof t
        } : function(t) {
            return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, U(e)
    }

    function ee(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function jp(e, t) {
        if (U(e) !== "object" || e === null) return e;
        var r = e[Symbol.toPrimitive];
        if (r !== void 0) {
            var n = r.call(e, t || "default");
            if (U(n) !== "object") return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return (t === "string" ? String : Number)(e)
    }

    function Za(e) {
        var t = jp(e, "string");
        return U(t) === "symbol" ? t : String(t)
    }

    function V0(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Za(n.key), n)
        }
    }

    function te(e, t, r) {
        return t && V0(e.prototype, t), r && V0(e, r), Object.defineProperty(e, "prototype", {
            writable: !1
        }), e
    }

    function it(e) {
        if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function qa(e, t) {
        return qa = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
            return n.__proto__ = o, n
        }, qa(e, t)
    }

    function Jt(e, t) {
        if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), Object.defineProperty(e, "prototype", {
            writable: !1
        }), t && qa(e, t)
    }

    function en(e, t) {
        if (t && (U(t) === "object" || typeof t == "function")) return t;
        if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
        return it(e)
    }

    function pt(e) {
        return pt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
            return r.__proto__ || Object.getPrototypeOf(r)
        }, pt(e)
    }

    function D(e, t, r) {
        return t = Za(t), t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r, e
    }

    function es(e) {
        if (Array.isArray(e)) return e
    }

    function ts(e) {
        if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e)
    }

    function xi(e, t) {
        (t == null || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
    }

    function po(e, t) {
        if (e) {
            if (typeof e == "string") return xi(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
            if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return xi(e, t)
        }
    }

    function rs() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
    }

    function ns(e) {
        return es(e) || ts(e) || po(e) || rs()
    }

    function U0(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function(o) {
                return Object.getOwnPropertyDescriptor(e, o).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function W0(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t] != null ? arguments[t] : {};
            t % 2 ? U0(Object(r), !0).forEach(function(n) {
                D(e, n, r[n])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : U0(Object(r)).forEach(function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
            })
        }
        return e
    }
    var ZR = {
            type: "logger",
            log: function(t) {
                this.output("log", t)
            },
            warn: function(t) {
                this.output("warn", t)
            },
            error: function(t) {
                this.output("error", t)
            },
            output: function(t, r) {
                console && console[t]
            }
        },
        qR = function() {
            function e(t) {
                var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                ee(this, e), this.init(t, r)
            }
            return te(e, [{
                key: "init",
                value: function(r) {
                    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                    this.prefix = n.prefix || "i18next:", this.logger = r || ZR, this.options = n, this.debug = n.debug
                }
            }, {
                key: "setDebug",
                value: function(r) {
                    this.debug = r
                }
            }, {
                key: "log",
                value: function() {
                    for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++) n[o] = arguments[o];
                    return this.forward(n, "log", "", !0)
                }
            }, {
                key: "warn",
                value: function() {
                    for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++) n[o] = arguments[o];
                    return this.forward(n, "warn", "", !0)
                }
            }, {
                key: "error",
                value: function() {
                    for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++) n[o] = arguments[o];
                    return this.forward(n, "error", "")
                }
            }, {
                key: "deprecate",
                value: function() {
                    for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++) n[o] = arguments[o];
                    return this.forward(n, "warn", "WARNING DEPRECATED: ", !0)
                }
            }, {
                key: "forward",
                value: function(r, n, o, i) {
                    return i && !this.debug ? null : (typeof r[0] == "string" && (r[0] = "".concat(o).concat(this.prefix, " ").concat(r[0])), this.logger[n](r))
                }
            }, {
                key: "create",
                value: function(r) {
                    return new e(this.logger, W0(W0({}, {
                        prefix: "".concat(this.prefix, ":").concat(r, ":")
                    }), this.options))
                }
            }, {
                key: "clone",
                value: function(r) {
                    return r = r || this.options, r.prefix = r.prefix || this.prefix, new e(this.logger, r)
                }
            }]), e
        }(),
        Lr = new qR,
        Mn = function() {
            function e() {
                ee(this, e), this.observers = {}
            }
            return te(e, [{
                key: "on",
                value: function(r, n) {
                    var o = this;
                    return r.split(" ").forEach(function(i) {
                        o.observers[i] = o.observers[i] || [], o.observers[i].push(n)
                    }), this
                }
            }, {
                key: "off",
                value: function(r, n) {
                    if (this.observers[r]) {
                        if (!n) {
                            delete this.observers[r];
                            return
                        }
                        this.observers[r] = this.observers[r].filter(function(o) {
                            return o !== n
                        })
                    }
                }
            }, {
                key: "emit",
                value: function(r) {
                    for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) o[i - 1] = arguments[i];
                    if (this.observers[r]) {
                        var a = [].concat(this.observers[r]);
                        a.forEach(function(l) {
                            l.apply(void 0, o)
                        })
                    }
                    if (this.observers["*"]) {
                        var s = [].concat(this.observers["*"]);
                        s.forEach(function(l) {
                            l.apply(l, [r].concat(o))
                        })
                    }
                }
            }]), e
        }();

    function os() {
        var e, t, r = new Promise(function(n, o) {
            e = n, t = o
        });
        return r.resolve = e, r.reject = t, r
    }

    function Q0(e) {
        return e == null ? "" : "" + e
    }

    function eO(e, t, r) {
        e.forEach(function(n) {
            t[n] && (r[n] = t[n])
        })
    }

    function Dp(e, t, r) {
        function n(s) {
            return s && s.indexOf("###") > -1 ? s.replace(/###/g, ".") : s
        }

        function o() {
            return !e || typeof e == "string"
        }
        for (var i = typeof t != "string" ? [].concat(t) : t.split("."); i.length > 1;) {
            if (o()) return {};
            var a = n(i.shift());
            !e[a] && r && (e[a] = new r), Object.prototype.hasOwnProperty.call(e, a) ? e = e[a] : e = {}
        }
        return o() ? {} : {
            obj: e,
            k: n(i.shift())
        }
    }

    function K0(e, t, r) {
        var n = Dp(e, t, Object),
            o = n.obj,
            i = n.k;
        o[i] = r
    }

    function tO(e, t, r, n) {
        var o = Dp(e, t, Object),
            i = o.obj,
            a = o.k;
        i[a] = i[a] || [], n && (i[a] = i[a].concat(r)), n || i[a].push(r)
    }

    function vu(e, t) {
        var r = Dp(e, t),
            n = r.obj,
            o = r.k;
        if (n) return n[o]
    }

    function rO(e, t, r) {
        var n = vu(e, r);
        return n !== void 0 ? n : vu(t, r)
    }

    function l1(e, t, r) {
        for (var n in t) n !== "__proto__" && n !== "constructor" && (n in e ? typeof e[n] == "string" || e[n] instanceof String || typeof t[n] == "string" || t[n] instanceof String ? r && (e[n] = t[n]) : l1(e[n], t[n], r) : e[n] = t[n]);
        return e
    }

    function Si(e) {
        return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
    }
    var nO = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "/": "&#x2F;"
    };

    function oO(e) {
        return typeof e == "string" ? e.replace(/[&<>"'\/]/g, function(t) {
            return nO[t]
        }) : e
    }
    var Su = typeof window < "u" && window.navigator && typeof window.navigator.userAgentData > "u" && window.navigator.userAgent && window.navigator.userAgent.indexOf("MSIE") > -1,
        iO = [" ", ",", "?", "!", ";"];

    function aO(e, t, r) {
        t = t || "", r = r || "";
        var n = iO.filter(function(s) {
            return t.indexOf(s) < 0 && r.indexOf(s) < 0
        });
        if (n.length === 0) return !0;
        var o = new RegExp("(".concat(n.map(function(s) {
                return s === "?" ? "\\?" : s
            }).join("|"), ")")),
            i = !o.test(e);
        if (!i) {
            var a = e.indexOf(r);
            a > 0 && !o.test(e.substring(0, a)) && (i = !0)
        }
        return i
    }

    function yu(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
        if (e) {
            if (e[t]) return e[t];
            for (var n = t.split(r), o = e, i = 0; i < n.length; ++i) {
                if (!o || typeof o[n[i]] == "string" && i + 1 < n.length) return;
                if (o[n[i]] === void 0) {
                    for (var a = 2, s = n.slice(i, i + a).join(r), l = o[s]; l === void 0 && n.length > i + a;) a++, s = n.slice(i, i + a).join(r), l = o[s];
                    if (l === void 0) return;
                    if (l === null) return null;
                    if (t.endsWith(s)) {
                        if (typeof l == "string") return l;
                        if (s && typeof l[s] == "string") return l[s]
                    }
                    var u = n.slice(i + a).join(r);
                    return u ? yu(l, u, r) : void 0
                }
                o = o[n[i]]
            }
            return o
        }
    }

    function X0(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function(o) {
                return Object.getOwnPropertyDescriptor(e, o).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function gu(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t] != null ? arguments[t] : {};
            t % 2 ? X0(Object(r), !0).forEach(function(n) {
                D(e, n, r[n])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : X0(Object(r)).forEach(function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
            })
        }
        return e
    }

    function sO(e) {
        var t = lO();
        return function() {
            var n = pt(e),
                o;
            if (t) {
                var i = pt(this).constructor;
                o = Reflect.construct(n, arguments, i)
            } else o = n.apply(this, arguments);
            return en(this, o)
        }
    }

    function lO() {
        if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
        if (typeof Proxy == "function") return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
        } catch {
            return !1
        }
    }
    var uO = function(e) {
            Jt(r, e);
            var t = sO(r);

            function r(n) {
                var o, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                    ns: ["translation"],
                    defaultNS: "translation"
                };
                return ee(this, r), o = t.call(this), Su && Mn.call(it(o)), o.data = n || {}, o.options = i, o.options.keySeparator === void 0 && (o.options.keySeparator = "."), o.options.ignoreJSONStructure === void 0 && (o.options.ignoreJSONStructure = !0), o
            }
            return te(r, [{
                key: "addNamespaces",
                value: function(o) {
                    this.options.ns.indexOf(o) < 0 && this.options.ns.push(o)
                }
            }, {
                key: "removeNamespaces",
                value: function(o) {
                    var i = this.options.ns.indexOf(o);
                    i > -1 && this.options.ns.splice(i, 1)
                }
            }, {
                key: "getResource",
                value: function(o, i, a) {
                    var s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
                        l = s.keySeparator !== void 0 ? s.keySeparator : this.options.keySeparator,
                        u = s.ignoreJSONStructure !== void 0 ? s.ignoreJSONStructure : this.options.ignoreJSONStructure,
                        f = [o, i];
                    a && typeof a != "string" && (f = f.concat(a)), a && typeof a == "string" && (f = f.concat(l ? a.split(l) : a)), o.indexOf(".") > -1 && (f = o.split("."));
                    var c = vu(this.data, f);
                    return c || !u || typeof a != "string" ? c : yu(this.data && this.data[o] && this.data[o][i], a, l)
                }
            }, {
                key: "addResource",
                value: function(o, i, a, s) {
                    var l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
                            silent: !1
                        },
                        u = l.keySeparator !== void 0 ? l.keySeparator : this.options.keySeparator,
                        f = [o, i];
                    a && (f = f.concat(u ? a.split(u) : a)), o.indexOf(".") > -1 && (f = o.split("."), s = i, i = f[1]), this.addNamespaces(i), K0(this.data, f, s), l.silent || this.emit("added", o, i, a, s)
                }
            }, {
                key: "addResources",
                value: function(o, i, a) {
                    var s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
                        silent: !1
                    };
                    for (var l in a)(typeof a[l] == "string" || Object.prototype.toString.apply(a[l]) === "[object Array]") && this.addResource(o, i, l, a[l], {
                        silent: !0
                    });
                    s.silent || this.emit("added", o, i, a)
                }
            }, {
                key: "addResourceBundle",
                value: function(o, i, a, s, l) {
                    var u = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
                            silent: !1
                        },
                        f = [o, i];
                    o.indexOf(".") > -1 && (f = o.split("."), s = a, a = i, i = f[1]), this.addNamespaces(i);
                    var c = vu(this.data, f) || {};
                    s ? l1(c, a, l) : c = gu(gu({}, c), a), K0(this.data, f, c), u.silent || this.emit("added", o, i, a)
                }
            }, {
                key: "removeResourceBundle",
                value: function(o, i) {
                    this.hasResourceBundle(o, i) && delete this.data[o][i], this.removeNamespaces(i), this.emit("removed", o, i)
                }
            }, {
                key: "hasResourceBundle",
                value: function(o, i) {
                    return this.getResource(o, i) !== void 0
                }
            }, {
                key: "getResourceBundle",
                value: function(o, i) {
                    return i || (i = this.options.defaultNS), this.options.compatibilityAPI === "v1" ? gu(gu({}, {}), this.getResource(o, i)) : this.getResource(o, i)
                }
            }, {
                key: "getDataByLanguage",
                value: function(o) {
                    return this.data[o]
                }
            }, {
                key: "hasLanguageSomeTranslations",
                value: function(o) {
                    var i = this.getDataByLanguage(o),
                        a = i && Object.keys(i) || [];
                    return !!a.find(function(s) {
                        return i[s] && Object.keys(i[s]).length > 0
                    })
                }
            }, {
                key: "toJSON",
                value: function() {
                    return this.data
                }
            }]), r
        }(Mn),
        u1 = {
            processors: {},
            addPostProcessor: function(t) {
                this.processors[t.name] = t
            },
            handle: function(t, r, n, o, i) {
                var a = this;
                return t.forEach(function(s) {
                    a.processors[s] && (r = a.processors[s].process(r, n, o, i))
                }), r
            }
        };

    function G0(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function(o) {
                return Object.getOwnPropertyDescriptor(e, o).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function at(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t] != null ? arguments[t] : {};
            t % 2 ? G0(Object(r), !0).forEach(function(n) {
                D(e, n, r[n])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : G0(Object(r)).forEach(function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
            })
        }
        return e
    }

    function cO(e) {
        var t = fO();
        return function() {
            var n = pt(e),
                o;
            if (t) {
                var i = pt(this).constructor;
                o = Reflect.construct(n, arguments, i)
            } else o = n.apply(this, arguments);
            return en(this, o)
        }
    }

    function fO() {
        if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
        if (typeof Proxy == "function") return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
        } catch {
            return !1
        }
    }
    var J0 = {},
        Y0 = function(e) {
            Jt(r, e);
            var t = cO(r);

            function r(n) {
                var o, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                return ee(this, r), o = t.call(this), Su && Mn.call(it(o)), eO(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], n, it(o)), o.options = i, o.options.keySeparator === void 0 && (o.options.keySeparator = "."), o.logger = Lr.create("translator"), o
            }
            return te(r, [{
                key: "changeLanguage",
                value: function(o) {
                    o && (this.language = o)
                }
            }, {
                key: "exists",
                value: function(o) {
                    var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                        interpolation: {}
                    };
                    if (o == null) return !1;
                    var a = this.resolve(o, i);
                    return a && a.res !== void 0
                }
            }, {
                key: "extractFromKey",
                value: function(o, i) {
                    var a = i.nsSeparator !== void 0 ? i.nsSeparator : this.options.nsSeparator;
                    a === void 0 && (a = ":");
                    var s = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator,
                        l = i.ns || this.options.defaultNS || [],
                        u = a && o.indexOf(a) > -1,
                        f = !this.options.userDefinedKeySeparator && !i.keySeparator && !this.options.userDefinedNsSeparator && !i.nsSeparator && !aO(o, a, s);
                    if (u && !f) {
                        var c = o.match(this.interpolator.nestingRegexp);
                        if (c && c.length > 0) return {
                            key: o,
                            namespaces: l
                        };
                        var d = o.split(a);
                        (a !== s || a === s && this.options.ns.indexOf(d[0]) > -1) && (l = d.shift()), o = d.join(s)
                    }
                    return typeof l == "string" && (l = [l]), {
                        key: o,
                        namespaces: l
                    }
                }
            }, {
                key: "translate",
                value: function(o, i, a) {
                    var s = this;
                    if (U(i) !== "object" && this.options.overloadTranslationOptionHandler && (i = this.options.overloadTranslationOptionHandler(arguments)), U(i) === "object" && (i = at({}, i)), i || (i = {}), o == null) return "";
                    Array.isArray(o) || (o = [String(o)]);
                    var l = i.returnDetails !== void 0 ? i.returnDetails : this.options.returnDetails,
                        u = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator,
                        f = this.extractFromKey(o[o.length - 1], i),
                        c = f.key,
                        d = f.namespaces,
                        g = d[d.length - 1],
                        v = i.lng || this.language,
                        y = i.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
                    if (v && v.toLowerCase() === "cimode") {
                        if (y) {
                            var b = i.nsSeparator || this.options.nsSeparator;
                            return l ? {
                                res: "".concat(g).concat(b).concat(c),
                                usedKey: c,
                                exactUsedKey: c,
                                usedLng: v,
                                usedNS: g
                            } : "".concat(g).concat(b).concat(c)
                        }
                        return l ? {
                            res: c,
                            usedKey: c,
                            exactUsedKey: c,
                            usedLng: v,
                            usedNS: g
                        } : c
                    }
                    var p = this.resolve(o, i),
                        m = p && p.res,
                        h = p && p.usedKey || c,
                        x = p && p.exactUsedKey || c,
                        S = Object.prototype.toString.apply(m),
                        C = ["[object Number]", "[object Function]", "[object RegExp]"],
                        w = i.joinArrays !== void 0 ? i.joinArrays : this.options.joinArrays,
                        O = !this.i18nFormat || this.i18nFormat.handleAsObject,
                        A = typeof m != "string" && typeof m != "boolean" && typeof m != "number";
                    if (O && m && A && C.indexOf(S) < 0 && !(typeof w == "string" && S === "[object Array]")) {
                        if (!i.returnObjects && !this.options.returnObjects) {
                            this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
                            var E = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(h, m, at(at({}, i), {}, {
                                ns: d
                            })) : "key '".concat(c, " (").concat(this.language, ")' returned an object instead of string.");
                            return l ? (p.res = E, p) : E
                        }
                        if (u) {
                            var N = S === "[object Array]",
                                R = N ? [] : {},
                                P = N ? x : h;
                            for (var k in m)
                                if (Object.prototype.hasOwnProperty.call(m, k)) {
                                    var _ = "".concat(P).concat(u).concat(k);
                                    R[k] = this.translate(_, at(at({}, i), {
                                        joinArrays: !1,
                                        ns: d
                                    })), R[k] === _ && (R[k] = m[k])
                                } m = R
                        }
                    } else if (O && typeof w == "string" && S === "[object Array]") m = m.join(w), m && (m = this.extendTranslation(m, o, i, a));
                    else {
                        var M = !1,
                            j = !1,
                            V = i.count !== void 0 && typeof i.count != "string",
                            Q = r.hasDefaultValue(i),
                            Y = V ? this.pluralResolver.getSuffix(v, i.count, i) : "",
                            re = i["defaultValue".concat(Y)] || i.defaultValue;
                        !this.isValidLookup(m) && Q && (M = !0, m = re), this.isValidLookup(m) || (j = !0, m = c);
                        var K = i.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey,
                            ne = K && j ? void 0 : m,
                            fe = Q && re !== m && this.options.updateMissing;
                        if (j || M || fe) {
                            if (this.logger.log(fe ? "updateKey" : "missingKey", v, g, c, fe ? re : m), u) {
                                var Oe = this.resolve(c, at(at({}, i), {}, {
                                    keySeparator: !1
                                }));
                                Oe && Oe.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")
                            }
                            var yt = [],
                                br = this.languageUtils.getFallbackCodes(this.options.fallbackLng, i.lng || this.language);
                            if (this.options.saveMissingTo === "fallback" && br && br[0])
                                for (var Hr = 0; Hr < br.length; Hr++) yt.push(br[Hr]);
                            else this.options.saveMissingTo === "all" ? yt = this.languageUtils.toResolveHierarchy(i.lng || this.language) : yt.push(i.lng || this.language);
                            var Er = function(q, Nt, H) {
                                var Jn = Q && H !== m ? H : ne;
                                s.options.missingKeyHandler ? s.options.missingKeyHandler(q, g, Nt, Jn, fe, i) : s.backendConnector && s.backendConnector.saveMissing && s.backendConnector.saveMissing(q, g, Nt, Jn, fe, i), s.emit("missingKey", q, g, Nt, m)
                            };
                            this.options.saveMissing && (this.options.saveMissingPlurals && V ? yt.forEach(function(ir) {
                                s.pluralResolver.getSuffixes(ir, i).forEach(function(q) {
                                    Er([ir], c + q, i["defaultValue".concat(q)] || re)
                                })
                            }) : Er(yt, c, re))
                        }
                        m = this.extendTranslation(m, o, i, p, a), j && m === c && this.options.appendNamespaceToMissingKey && (m = "".concat(g, ":").concat(c)), (j || M) && this.options.parseMissingKeyHandler && (this.options.compatibilityAPI !== "v1" ? m = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? "".concat(g, ":").concat(c) : c, M ? m : void 0) : m = this.options.parseMissingKeyHandler(m))
                    }
                    return l ? (p.res = m, p) : m
                }
            }, {
                key: "extendTranslation",
                value: function(o, i, a, s, l) {
                    var u = this;
                    if (this.i18nFormat && this.i18nFormat.parse) o = this.i18nFormat.parse(o, at(at({}, this.options.interpolation.defaultVariables), a), s.usedLng, s.usedNS, s.usedKey, {
                        resolved: s
                    });
                    else if (!a.skipInterpolation) {
                        a.interpolation && this.interpolator.init(at(at({}, a), {
                            interpolation: at(at({}, this.options.interpolation), a.interpolation)
                        }));
                        var f = typeof o == "string" && (a && a.interpolation && a.interpolation.skipOnVariables !== void 0 ? a.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables),
                            c;
                        if (f) {
                            var d = o.match(this.interpolator.nestingRegexp);
                            c = d && d.length
                        }
                        var g = a.replace && typeof a.replace != "string" ? a.replace : a;
                        if (this.options.interpolation.defaultVariables && (g = at(at({}, this.options.interpolation.defaultVariables), g)), o = this.interpolator.interpolate(o, g, a.lng || this.language, a), f) {
                            var v = o.match(this.interpolator.nestingRegexp),
                                y = v && v.length;
                            c < y && (a.nest = !1)
                        }!a.lng && this.options.compatibilityAPI !== "v1" && s && s.res && (a.lng = s.usedLng), a.nest !== !1 && (o = this.interpolator.nest(o, function() {
                            for (var m = arguments.length, h = new Array(m), x = 0; x < m; x++) h[x] = arguments[x];
                            return l && l[0] === h[0] && !a.context ? (u.logger.warn("It seems you are nesting recursively key: ".concat(h[0], " in key: ").concat(i[0])), null) : u.translate.apply(u, h.concat([i]))
                        }, a)), a.interpolation && this.interpolator.reset()
                    }
                    var b = a.postProcess || this.options.postProcess,
                        p = typeof b == "string" ? [b] : b;
                    return o != null && p && p.length && a.applyPostProcessor !== !1 && (o = u1.handle(p, o, i, this.options && this.options.postProcessPassResolved ? at({
                        i18nResolved: s
                    }, a) : a, this)), o
                }
            }, {
                key: "resolve",
                value: function(o) {
                    var i = this,
                        a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                        s, l, u, f, c;
                    return typeof o == "string" && (o = [o]), o.forEach(function(d) {
                        if (!i.isValidLookup(s)) {
                            var g = i.extractFromKey(d, a),
                                v = g.key;
                            l = v;
                            var y = g.namespaces;
                            i.options.fallbackNS && (y = y.concat(i.options.fallbackNS));
                            var b = a.count !== void 0 && typeof a.count != "string",
                                p = b && !a.ordinal && a.count === 0 && i.pluralResolver.shouldUseIntlApi(),
                                m = a.context !== void 0 && (typeof a.context == "string" || typeof a.context == "number") && a.context !== "",
                                h = a.lngs ? a.lngs : i.languageUtils.toResolveHierarchy(a.lng || i.language, a.fallbackLng);
                            y.forEach(function(x) {
                                i.isValidLookup(s) || (c = x, !J0["".concat(h[0], "-").concat(x)] && i.utils && i.utils.hasLoadedNamespace && !i.utils.hasLoadedNamespace(c) && (J0["".concat(h[0], "-").concat(x)] = !0, i.logger.warn('key "'.concat(l, '" for languages "').concat(h.join(", "), `" won't get resolved as namespace "`).concat(c, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), h.forEach(function(S) {
                                    if (!i.isValidLookup(s)) {
                                        f = S;
                                        var C = [v];
                                        if (i.i18nFormat && i.i18nFormat.addLookupKeys) i.i18nFormat.addLookupKeys(C, v, S, x, a);
                                        else {
                                            var w;
                                            b && (w = i.pluralResolver.getSuffix(S, a.count, a));
                                            var O = "".concat(i.options.pluralSeparator, "zero");
                                            if (b && (C.push(v + w), p && C.push(v + O)), m) {
                                                var A = "".concat(v).concat(i.options.contextSeparator).concat(a.context);
                                                C.push(A), b && (C.push(A + w), p && C.push(A + O))
                                            }
                                        }
                                        for (var E; E = C.pop();) i.isValidLookup(s) || (u = E, s = i.getResource(S, x, E, a))
                                    }
                                }))
                            })
                        }
                    }), {
                        res: s,
                        usedKey: l,
                        exactUsedKey: u,
                        usedLng: f,
                        usedNS: c
                    }
                }
            }, {
                key: "isValidLookup",
                value: function(o) {
                    return o !== void 0 && !(!this.options.returnNull && o === null) && !(!this.options.returnEmptyString && o === "")
                }
            }, {
                key: "getResource",
                value: function(o, i, a) {
                    var s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
                    return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(o, i, a, s) : this.resourceStore.getResource(o, i, a, s)
                }
            }], [{
                key: "hasDefaultValue",
                value: function(o) {
                    var i = "defaultValue";
                    for (var a in o)
                        if (Object.prototype.hasOwnProperty.call(o, a) && i === a.substring(0, i.length) && o[a] !== void 0) return !0;
                    return !1
                }
            }]), r
        }(Mn);

    function Fp(e) {
        return e.charAt(0).toUpperCase() + e.slice(1)
    }
    var Z0 = function() {
            function e(t) {
                ee(this, e), this.options = t, this.supportedLngs = this.options.supportedLngs || !1, this.logger = Lr.create("languageUtils")
            }
            return te(e, [{
                key: "getScriptPartFromCode",
                value: function(r) {
                    if (!r || r.indexOf("-") < 0) return null;
                    var n = r.split("-");
                    return n.length === 2 || (n.pop(), n[n.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(n.join("-"))
                }
            }, {
                key: "getLanguagePartFromCode",
                value: function(r) {
                    if (!r || r.indexOf("-") < 0) return r;
                    var n = r.split("-");
                    return this.formatLanguageCode(n[0])
                }
            }, {
                key: "formatLanguageCode",
                value: function(r) {
                    if (typeof r == "string" && r.indexOf("-") > -1) {
                        var n = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"],
                            o = r.split("-");
                        return this.options.lowerCaseLng ? o = o.map(function(i) {
                            return i.toLowerCase()
                        }) : o.length === 2 ? (o[0] = o[0].toLowerCase(), o[1] = o[1].toUpperCase(), n.indexOf(o[1].toLowerCase()) > -1 && (o[1] = Fp(o[1].toLowerCase()))) : o.length === 3 && (o[0] = o[0].toLowerCase(), o[1].length === 2 && (o[1] = o[1].toUpperCase()), o[0] !== "sgn" && o[2].length === 2 && (o[2] = o[2].toUpperCase()), n.indexOf(o[1].toLowerCase()) > -1 && (o[1] = Fp(o[1].toLowerCase())), n.indexOf(o[2].toLowerCase()) > -1 && (o[2] = Fp(o[2].toLowerCase()))), o.join("-")
                    }
                    return this.options.cleanCode || this.options.lowerCaseLng ? r.toLowerCase() : r
                }
            }, {
                key: "isSupportedCode",
                value: function(r) {
                    return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (r = this.getLanguagePartFromCode(r)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(r) > -1
                }
            }, {
                key: "getBestMatchFromCodes",
                value: function(r) {
                    var n = this;
                    if (!r) return null;
                    var o;
                    return r.forEach(function(i) {
                        if (!o) {
                            var a = n.formatLanguageCode(i);
                            (!n.options.supportedLngs || n.isSupportedCode(a)) && (o = a)
                        }
                    }), !o && this.options.supportedLngs && r.forEach(function(i) {
                        if (!o) {
                            var a = n.getLanguagePartFromCode(i);
                            if (n.isSupportedCode(a)) return o = a;
                            o = n.options.supportedLngs.find(function(s) {
                                if (s === a) return s;
                                if (!(s.indexOf("-") < 0 && a.indexOf("-") < 0) && s.indexOf(a) === 0) return s
                            })
                        }
                    }), o || (o = this.getFallbackCodes(this.options.fallbackLng)[0]), o
                }
            }, {
                key: "getFallbackCodes",
                value: function(r, n) {
                    if (!r) return [];
                    if (typeof r == "function" && (r = r(n)), typeof r == "string" && (r = [r]), Object.prototype.toString.apply(r) === "[object Array]") return r;
                    if (!n) return r.default || [];
                    var o = r[n];
                    return o || (o = r[this.getScriptPartFromCode(n)]), o || (o = r[this.formatLanguageCode(n)]), o || (o = r[this.getLanguagePartFromCode(n)]), o || (o = r.default), o || []
                }
            }, {
                key: "toResolveHierarchy",
                value: function(r, n) {
                    var o = this,
                        i = this.getFallbackCodes(n || this.options.fallbackLng || [], r),
                        a = [],
                        s = function(u) {
                            u && (o.isSupportedCode(u) ? a.push(u) : o.logger.warn("rejecting language code not found in supportedLngs: ".concat(u)))
                        };
                    return typeof r == "string" && r.indexOf("-") > -1 ? (this.options.load !== "languageOnly" && s(this.formatLanguageCode(r)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && s(this.getScriptPartFromCode(r)), this.options.load !== "currentOnly" && s(this.getLanguagePartFromCode(r))) : typeof r == "string" && s(this.formatLanguageCode(r)), i.forEach(function(l) {
                        a.indexOf(l) < 0 && s(o.formatLanguageCode(l))
                    }), a
                }
            }]), e
        }(),
        dO = [{
            lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"],
            nr: [1, 2],
            fc: 1
        }, {
            lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kk", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
            nr: [1, 2],
            fc: 2
        }, {
            lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
            nr: [1],
            fc: 3
        }, {
            lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
            nr: [1, 2, 5],
            fc: 4
        }, {
            lngs: ["ar"],
            nr: [0, 1, 2, 3, 11, 100],
            fc: 5
        }, {
            lngs: ["cs", "sk"],
            nr: [1, 2, 5],
            fc: 6
        }, {
            lngs: ["csb", "pl"],
            nr: [1, 2, 5],
            fc: 7
        }, {
            lngs: ["cy"],
            nr: [1, 2, 3, 8],
            fc: 8
        }, {
            lngs: ["fr"],
            nr: [1, 2],
            fc: 9
        }, {
            lngs: ["ga"],
            nr: [1, 2, 3, 7, 11],
            fc: 10
        }, {
            lngs: ["gd"],
            nr: [1, 2, 3, 20],
            fc: 11
        }, {
            lngs: ["is"],
            nr: [1, 2],
            fc: 12
        }, {
            lngs: ["jv"],
            nr: [0, 1],
            fc: 13
        }, {
            lngs: ["kw"],
            nr: [1, 2, 3, 4],
            fc: 14
        }, {
            lngs: ["lt"],
            nr: [1, 2, 10],
            fc: 15
        }, {
            lngs: ["lv"],
            nr: [1, 2, 0],
            fc: 16
        }, {
            lngs: ["mk"],
            nr: [1, 2],
            fc: 17
        }, {
            lngs: ["mnk"],
            nr: [0, 1, 2],
            fc: 18
        }, {
            lngs: ["mt"],
            nr: [1, 2, 11, 20],
            fc: 19
        }, {
            lngs: ["or"],
            nr: [2, 1],
            fc: 2
        }, {
            lngs: ["ro"],
            nr: [1, 2, 20],
            fc: 20
        }, {
            lngs: ["sl"],
            nr: [5, 1, 2, 3],
            fc: 21
        }, {
            lngs: ["he", "iw"],
            nr: [1, 2, 20, 21],
            fc: 22
        }],
        pO = {
            1: function(t) {
                return +(t > 1)
            },
            2: function(t) {
                return +(t != 1)
            },
            3: function(t) {
                return 0
            },
            4: function(t) {
                return t % 10 == 1 && t % 100 != 11 ? 0 : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? 1 : 2
            },
            5: function(t) {
                return t == 0 ? 0 : t == 1 ? 1 : t == 2 ? 2 : t % 100 >= 3 && t % 100 <= 10 ? 3 : t % 100 >= 11 ? 4 : 5
            },
            6: function(t) {
                return t == 1 ? 0 : t >= 2 && t <= 4 ? 1 : 2
            },
            7: function(t) {
                return t == 1 ? 0 : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? 1 : 2
            },
            8: function(t) {
                return t == 1 ? 0 : t == 2 ? 1 : t != 8 && t != 11 ? 2 : 3
            },
            9: function(t) {
                return +(t >= 2)
            },
            10: function(t) {
                return t == 1 ? 0 : t == 2 ? 1 : t < 7 ? 2 : t < 11 ? 3 : 4
            },
            11: function(t) {
                return t == 1 || t == 11 ? 0 : t == 2 || t == 12 ? 1 : t > 2 && t < 20 ? 2 : 3
            },
            12: function(t) {
                return +(t % 10 != 1 || t % 100 == 11)
            },
            13: function(t) {
                return +(t !== 0)
            },
            14: function(t) {
                return t == 1 ? 0 : t == 2 ? 1 : t == 3 ? 2 : 3
            },
            15: function(t) {
                return t % 10 == 1 && t % 100 != 11 ? 0 : t % 10 >= 2 && (t % 100 < 10 || t % 100 >= 20) ? 1 : 2
            },
            16: function(t) {
                return t % 10 == 1 && t % 100 != 11 ? 0 : t !== 0 ? 1 : 2
            },
            17: function(t) {
                return t == 1 || t % 10 == 1 && t % 100 != 11 ? 0 : 1
            },
            18: function(t) {
                return t == 0 ? 0 : t == 1 ? 1 : 2
            },
            19: function(t) {
                return t == 1 ? 0 : t == 0 || t % 100 > 1 && t % 100 < 11 ? 1 : t % 100 > 10 && t % 100 < 20 ? 2 : 3
            },
            20: function(t) {
                return t == 1 ? 0 : t == 0 || t % 100 > 0 && t % 100 < 20 ? 1 : 2
            },
            21: function(t) {
                return t % 100 == 1 ? 1 : t % 100 == 2 ? 2 : t % 100 == 3 || t % 100 == 4 ? 3 : 0
            },
            22: function(t) {
                return t == 1 ? 0 : t == 2 ? 1 : (t < 0 || t > 10) && t % 10 == 0 ? 2 : 3
            }
        },
        mO = ["v1", "v2", "v3"],
        q0 = {
            zero: 0,
            one: 1,
            two: 2,
            few: 3,
            many: 4,
            other: 5
        };

    function gO() {
        var e = {};
        return dO.forEach(function(t) {
            t.lngs.forEach(function(r) {
                e[r] = {
                    numbers: t.nr,
                    plurals: pO[t.fc]
                }
            })
        }), e
    }
    var hO = function() {
        function e(t) {
            var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            ee(this, e), this.languageUtils = t, this.options = r, this.logger = Lr.create("pluralResolver"), (!this.options.compatibilityJSON || this.options.compatibilityJSON === "v4") && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = gO()
        }
        return te(e, [{
            key: "addRule",
            value: function(r, n) {
                this.rules[r] = n
            }
        }, {
            key: "getRule",
            value: function(r) {
                var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                if (this.shouldUseIntlApi()) try {
                    return new Intl.PluralRules(r, {
                        type: n.ordinal ? "ordinal" : "cardinal"
                    })
                } catch {
                    return
                }
                return this.rules[r] || this.rules[this.languageUtils.getLanguagePartFromCode(r)]
            }
        }, {
            key: "needsPlural",
            value: function(r) {
                var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                    o = this.getRule(r, n);
                return this.shouldUseIntlApi() ? o && o.resolvedOptions().pluralCategories.length > 1 : o && o.numbers.length > 1
            }
        }, {
            key: "getPluralFormsOfKey",
            value: function(r, n) {
                var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                return this.getSuffixes(r, o).map(function(i) {
                    return "".concat(n).concat(i)
                })
            }
        }, {
            key: "getSuffixes",
            value: function(r) {
                var n = this,
                    o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                    i = this.getRule(r, o);
                return i ? this.shouldUseIntlApi() ? i.resolvedOptions().pluralCategories.sort(function(a, s) {
                    return q0[a] - q0[s]
                }).map(function(a) {
                    return "".concat(n.options.prepend).concat(a)
                }) : i.numbers.map(function(a) {
                    return n.getSuffix(r, a, o)
                }) : []
            }
        }, {
            key: "getSuffix",
            value: function(r, n) {
                var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
                    i = this.getRule(r, o);
                return i ? this.shouldUseIntlApi() ? "".concat(this.options.prepend).concat(i.select(n)) : this.getSuffixRetroCompatible(i, n) : (this.logger.warn("no plural rule found for: ".concat(r)), "")
            }
        }, {
            key: "getSuffixRetroCompatible",
            value: function(r, n) {
                var o = this,
                    i = r.noAbs ? r.plurals(n) : r.plurals(Math.abs(n)),
                    a = r.numbers[i];
                this.options.simplifyPluralSuffix && r.numbers.length === 2 && r.numbers[0] === 1 && (a === 2 ? a = "plural" : a === 1 && (a = ""));
                var s = function() {
                    return o.options.prepend && a.toString() ? o.options.prepend + a.toString() : a.toString()
                };
                return this.options.compatibilityJSON === "v1" ? a === 1 ? "" : typeof a == "number" ? "_plural_".concat(a.toString()) : s() : this.options.compatibilityJSON === "v2" || this.options.simplifyPluralSuffix && r.numbers.length === 2 && r.numbers[0] === 1 ? s() : this.options.prepend && i.toString() ? this.options.prepend + i.toString() : i.toString()
            }
        }, {
            key: "shouldUseIntlApi",
            value: function() {
                return !mO.includes(this.options.compatibilityJSON)
            }
        }]), e
    }();

    function e1(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function(o) {
                return Object.getOwnPropertyDescriptor(e, o).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function mr(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t] != null ? arguments[t] : {};
            t % 2 ? e1(Object(r), !0).forEach(function(n) {
                D(e, n, r[n])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : e1(Object(r)).forEach(function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
            })
        }
        return e
    }

    function t1(e, t, r) {
        var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".",
            o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0,
            i = rO(e, t, r);
        return !i && o && typeof r == "string" && (i = yu(e, r, n), i === void 0 && (i = yu(t, r, n))), i
    }
    var vO = function() {
        function e() {
            var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            ee(this, e), this.logger = Lr.create("interpolator"), this.options = t, this.format = t.interpolation && t.interpolation.format || function(r) {
                return r
            }, this.init(t)
        }
        return te(e, [{
            key: "init",
            value: function() {
                var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                r.interpolation || (r.interpolation = {
                    escapeValue: !0
                });
                var n = r.interpolation;
                this.escape = n.escape !== void 0 ? n.escape : oO, this.escapeValue = n.escapeValue !== void 0 ? n.escapeValue : !0, this.useRawValueToEscape = n.useRawValueToEscape !== void 0 ? n.useRawValueToEscape : !1, this.prefix = n.prefix ? Si(n.prefix) : n.prefixEscaped || "{{", this.suffix = n.suffix ? Si(n.suffix) : n.suffixEscaped || "}}", this.formatSeparator = n.formatSeparator ? n.formatSeparator : n.formatSeparator || ",", this.unescapePrefix = n.unescapeSuffix ? "" : n.unescapePrefix || "-", this.unescapeSuffix = this.unescapePrefix ? "" : n.unescapeSuffix || "", this.nestingPrefix = n.nestingPrefix ? Si(n.nestingPrefix) : n.nestingPrefixEscaped || Si("$t("), this.nestingSuffix = n.nestingSuffix ? Si(n.nestingSuffix) : n.nestingSuffixEscaped || Si(")"), this.nestingOptionsSeparator = n.nestingOptionsSeparator ? n.nestingOptionsSeparator : n.nestingOptionsSeparator || ",", this.maxReplaces = n.maxReplaces ? n.maxReplaces : 1e3, this.alwaysFormat = n.alwaysFormat !== void 0 ? n.alwaysFormat : !1, this.resetRegExp()
            }
        }, {
            key: "reset",
            value: function() {
                this.options && this.init(this.options)
            }
        }, {
            key: "resetRegExp",
            value: function() {
                var r = "".concat(this.prefix, "(.+?)").concat(this.suffix);
                this.regexp = new RegExp(r, "g");
                var n = "".concat(this.prefix).concat(this.unescapePrefix, "(.+?)").concat(this.unescapeSuffix).concat(this.suffix);
                this.regexpUnescape = new RegExp(n, "g");
                var o = "".concat(this.nestingPrefix, "(.+?)").concat(this.nestingSuffix);
                this.nestingRegexp = new RegExp(o, "g")
            }
        }, {
            key: "interpolate",
            value: function(r, n, o, i) {
                var a = this,
                    s, l, u, f = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};

                function c(b) {
                    return b.replace(/\$/g, "$$$$")
                }
                var d = function(p) {
                    if (p.indexOf(a.formatSeparator) < 0) {
                        var m = t1(n, f, p, a.options.keySeparator, a.options.ignoreJSONStructure);
                        return a.alwaysFormat ? a.format(m, void 0, o, mr(mr(mr({}, i), n), {}, {
                            interpolationkey: p
                        })) : m
                    }
                    var h = p.split(a.formatSeparator),
                        x = h.shift().trim(),
                        S = h.join(a.formatSeparator).trim();
                    return a.format(t1(n, f, x, a.options.keySeparator, a.options.ignoreJSONStructure), S, o, mr(mr(mr({}, i), n), {}, {
                        interpolationkey: x
                    }))
                };
                this.resetRegExp();
                var g = i && i.missingInterpolationHandler || this.options.missingInterpolationHandler,
                    v = i && i.interpolation && i.interpolation.skipOnVariables !== void 0 ? i.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables,
                    y = [{
                        regex: this.regexpUnescape,
                        safeValue: function(p) {
                            return c(p)
                        }
                    }, {
                        regex: this.regexp,
                        safeValue: function(p) {
                            return a.escapeValue ? c(a.escape(p)) : c(p)
                        }
                    }];
                return y.forEach(function(b) {
                    for (u = 0; s = b.regex.exec(r);) {
                        var p = s[1].trim();
                        if (l = d(p), l === void 0)
                            if (typeof g == "function") {
                                var m = g(r, s, i);
                                l = typeof m == "string" ? m : ""
                            } else if (i && Object.prototype.hasOwnProperty.call(i, p)) l = "";
                        else if (v) {
                            l = s[0];
                            continue
                        } else a.logger.warn("missed to pass in variable ".concat(p, " for interpolating ").concat(r)), l = "";
                        else typeof l != "string" && !a.useRawValueToEscape && (l = Q0(l));
                        var h = b.safeValue(l);
                        if (r = r.replace(s[0], h), v ? (b.regex.lastIndex += l.length, b.regex.lastIndex -= s[0].length) : b.regex.lastIndex = 0, u++, u >= a.maxReplaces) break
                    }
                }), r
            }
        }, {
            key: "nest",
            value: function(r, n) {
                var o = this,
                    i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
                    a, s, l;

                function u(g, v) {
                    var y = this.nestingOptionsSeparator;
                    if (g.indexOf(y) < 0) return g;
                    var b = g.split(new RegExp("".concat(y, "[ ]*{"))),
                        p = "{".concat(b[1]);
                    g = b[0], p = this.interpolate(p, l);
                    var m = p.match(/'/g),
                        h = p.match(/"/g);
                    (m && m.length % 2 === 0 && !h || h.length % 2 !== 0) && (p = p.replace(/'/g, '"'));
                    try {
                        l = JSON.parse(p), v && (l = mr(mr({}, v), l))
                    } catch (x) {
                        return this.logger.warn("failed parsing options string in nesting for key ".concat(g), x), "".concat(g).concat(y).concat(p)
                    }
                    return delete l.defaultValue, g
                }
                for (; a = this.nestingRegexp.exec(r);) {
                    var f = [];
                    l = mr({}, i), l = l.replace && typeof l.replace != "string" ? l.replace : l, l.applyPostProcessor = !1, delete l.defaultValue;
                    var c = !1;
                    if (a[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(a[1])) {
                        var d = a[1].split(this.formatSeparator).map(function(g) {
                            return g.trim()
                        });
                        a[1] = d.shift(), f = d, c = !0
                    }
                    if (s = n(u.call(this, a[1].trim(), l), l), s && a[0] === r && typeof s != "string") return s;
                    typeof s != "string" && (s = Q0(s)), s || (this.logger.warn("missed to resolve ".concat(a[1], " for nesting ").concat(r)), s = ""), c && (s = f.reduce(function(g, v) {
                        return o.format(g, v, i.lng, mr(mr({}, i), {}, {
                            interpolationkey: a[1].trim()
                        }))
                    }, s.trim())), r = r.replace(a[0], s), this.regexp.lastIndex = 0
                }
                return r
            }
        }]), e
    }();

    function r1(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function(o) {
                return Object.getOwnPropertyDescriptor(e, o).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function tn(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t] != null ? arguments[t] : {};
            t % 2 ? r1(Object(r), !0).forEach(function(n) {
                D(e, n, r[n])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : r1(Object(r)).forEach(function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
            })
        }
        return e
    }

    function yO(e) {
        var t = e.toLowerCase().trim(),
            r = {};
        if (e.indexOf("(") > -1) {
            var n = e.split("(");
            t = n[0].toLowerCase().trim();
            var o = n[1].substring(0, n[1].length - 1);
            if (t === "currency" && o.indexOf(":") < 0) r.currency || (r.currency = o.trim());
            else if (t === "relativetime" && o.indexOf(":") < 0) r.range || (r.range = o.trim());
            else {
                var i = o.split(";");
                i.forEach(function(a) {
                    if (a) {
                        var s = a.split(":"),
                            l = ns(s),
                            u = l[0],
                            f = l.slice(1),
                            c = f.join(":").trim().replace(/^'+|'+$/g, "");
                        r[u.trim()] || (r[u.trim()] = c), c === "false" && (r[u.trim()] = !1), c === "true" && (r[u.trim()] = !0), isNaN(c) || (r[u.trim()] = parseInt(c, 10))
                    }
                })
            }
        }
        return {
            formatName: t,
            formatOptions: r
        }
    }

    function Ci(e) {
        var t = {};
        return function(n, o, i) {
            var a = o + JSON.stringify(i),
                s = t[a];
            return s || (s = e(o, i), t[a] = s), s(n)
        }
    }
    var xO = function() {
        function e() {
            var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            ee(this, e), this.logger = Lr.create("formatter"), this.options = t, this.formats = {
                number: Ci(function(r, n) {
                    var o = new Intl.NumberFormat(r, tn({}, n));
                    return function(i) {
                        return o.format(i)
                    }
                }),
                currency: Ci(function(r, n) {
                    var o = new Intl.NumberFormat(r, tn(tn({}, n), {}, {
                        style: "currency"
                    }));
                    return function(i) {
                        return o.format(i)
                    }
                }),
                datetime: Ci(function(r, n) {
                    var o = new Intl.DateTimeFormat(r, tn({}, n));
                    return function(i) {
                        return o.format(i)
                    }
                }),
                relativetime: Ci(function(r, n) {
                    var o = new Intl.RelativeTimeFormat(r, tn({}, n));
                    return function(i) {
                        return o.format(i, n.range || "day")
                    }
                }),
                list: Ci(function(r, n) {
                    var o = new Intl.ListFormat(r, tn({}, n));
                    return function(i) {
                        return o.format(i)
                    }
                })
            }, this.init(t)
        }
        return te(e, [{
            key: "init",
            value: function(r) {
                var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                        interpolation: {}
                    },
                    o = n.interpolation;
                this.formatSeparator = o.formatSeparator ? o.formatSeparator : o.formatSeparator || ","
            }
        }, {
            key: "add",
            value: function(r, n) {
                this.formats[r.toLowerCase().trim()] = n
            }
        }, {
            key: "addCached",
            value: function(r, n) {
                this.formats[r.toLowerCase().trim()] = Ci(n)
            }
        }, {
            key: "format",
            value: function(r, n, o) {
                var i = this,
                    a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
                    s = n.split(this.formatSeparator),
                    l = s.reduce(function(u, f) {
                        var c = yO(f),
                            d = c.formatName,
                            g = c.formatOptions;
                        if (i.formats[d]) {
                            var v = u;
                            try {
                                var y = a && a.formatParams && a.formatParams[a.interpolationkey] || {},
                                    b = y.locale || y.lng || a.locale || a.lng || o;
                                v = i.formats[d](u, b, tn(tn(tn({}, g), a), y))
                            } catch (p) {
                                i.logger.warn(p)
                            }
                            return v
                        } else i.logger.warn("there was no format function for ".concat(d));
                        return u
                    }, r);
                return l
            }
        }]), e
    }();

    function n1(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function(o) {
                return Object.getOwnPropertyDescriptor(e, o).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function o1(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t] != null ? arguments[t] : {};
            t % 2 ? n1(Object(r), !0).forEach(function(n) {
                D(e, n, r[n])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : n1(Object(r)).forEach(function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
            })
        }
        return e
    }

    function SO(e) {
        var t = CO();
        return function() {
            var n = pt(e),
                o;
            if (t) {
                var i = pt(this).constructor;
                o = Reflect.construct(n, arguments, i)
            } else o = n.apply(this, arguments);
            return en(this, o)
        }
    }

    function CO() {
        if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
        if (typeof Proxy == "function") return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
        } catch {
            return !1
        }
    }

    function wO(e, t) {
        e.pending[t] !== void 0 && (delete e.pending[t], e.pendingCount--)
    }
    var bO = function(e) {
        Jt(r, e);
        var t = SO(r);

        function r(n, o, i) {
            var a, s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
            return ee(this, r), a = t.call(this), Su && Mn.call(it(a)), a.backend = n, a.store = o, a.services = i, a.languageUtils = i.languageUtils, a.options = s, a.logger = Lr.create("backendConnector"), a.waitingReads = [], a.maxParallelReads = s.maxParallelReads || 10, a.readingCalls = 0, a.maxRetries = s.maxRetries >= 0 ? s.maxRetries : 5, a.retryTimeout = s.retryTimeout >= 1 ? s.retryTimeout : 350, a.state = {}, a.queue = [], a.backend && a.backend.init && a.backend.init(i, s.backend, s), a
        }
        return te(r, [{
            key: "queueLoad",
            value: function(o, i, a, s) {
                var l = this,
                    u = {},
                    f = {},
                    c = {},
                    d = {};
                return o.forEach(function(g) {
                    var v = !0;
                    i.forEach(function(y) {
                        var b = "".concat(g, "|").concat(y);
                        !a.reload && l.store.hasResourceBundle(g, y) ? l.state[b] = 2 : l.state[b] < 0 || (l.state[b] === 1 ? f[b] === void 0 && (f[b] = !0) : (l.state[b] = 1, v = !1, f[b] === void 0 && (f[b] = !0), u[b] === void 0 && (u[b] = !0), d[y] === void 0 && (d[y] = !0)))
                    }), v || (c[g] = !0)
                }), (Object.keys(u).length || Object.keys(f).length) && this.queue.push({
                    pending: f,
                    pendingCount: Object.keys(f).length,
                    loaded: {},
                    errors: [],
                    callback: s
                }), {
                    toLoad: Object.keys(u),
                    pending: Object.keys(f),
                    toLoadLanguages: Object.keys(c),
                    toLoadNamespaces: Object.keys(d)
                }
            }
        }, {
            key: "loaded",
            value: function(o, i, a) {
                var s = o.split("|"),
                    l = s[0],
                    u = s[1];
                i && this.emit("failedLoading", l, u, i), a && this.store.addResourceBundle(l, u, a), this.state[o] = i ? -1 : 2;
                var f = {};
                this.queue.forEach(function(c) {
                    tO(c.loaded, [l], u), wO(c, o), i && c.errors.push(i), c.pendingCount === 0 && !c.done && (Object.keys(c.loaded).forEach(function(d) {
                        f[d] || (f[d] = {});
                        var g = c.loaded[d];
                        g.length && g.forEach(function(v) {
                            f[d][v] === void 0 && (f[d][v] = !0)
                        })
                    }), c.done = !0, c.errors.length ? c.callback(c.errors) : c.callback())
                }), this.emit("loaded", f), this.queue = this.queue.filter(function(c) {
                    return !c.done
                })
            }
        }, {
            key: "read",
            value: function(o, i, a) {
                var s = this,
                    l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0,
                    u = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout,
                    f = arguments.length > 5 ? arguments[5] : void 0;
                if (!o.length) return f(null, {});
                if (this.readingCalls >= this.maxParallelReads) {
                    this.waitingReads.push({
                        lng: o,
                        ns: i,
                        fcName: a,
                        tried: l,
                        wait: u,
                        callback: f
                    });
                    return
                }
                this.readingCalls++;
                var c = function(y, b) {
                        if (s.readingCalls--, s.waitingReads.length > 0) {
                            var p = s.waitingReads.shift();
                            s.read(p.lng, p.ns, p.fcName, p.tried, p.wait, p.callback)
                        }
                        if (y && b && l < s.maxRetries) {
                            setTimeout(function() {
                                s.read.call(s, o, i, a, l + 1, u * 2, f)
                            }, u);
                            return
                        }
                        f(y, b)
                    },
                    d = this.backend[a].bind(this.backend);
                if (d.length === 2) {
                    try {
                        var g = d(o, i);
                        g && typeof g.then == "function" ? g.then(function(v) {
                            return c(null, v)
                        }).catch(c) : c(null, g)
                    } catch (v) {
                        c(v)
                    }
                    return
                }
                return d(o, i, c)
            }
        }, {
            key: "prepareLoading",
            value: function(o, i) {
                var a = this,
                    s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
                    l = arguments.length > 3 ? arguments[3] : void 0;
                if (!this.backend) return this.logger.warn("No backend was added via i18next.use. Will not load resources."), l && l();
                typeof o == "string" && (o = this.languageUtils.toResolveHierarchy(o)), typeof i == "string" && (i = [i]);
                var u = this.queueLoad(o, i, s, l);
                if (!u.toLoad.length) return u.pending.length || l(), null;
                u.toLoad.forEach(function(f) {
                    a.loadOne(f)
                })
            }
        }, {
            key: "load",
            value: function(o, i, a) {
                this.prepareLoading(o, i, {}, a)
            }
        }, {
            key: "reload",
            value: function(o, i, a) {
                this.prepareLoading(o, i, {
                    reload: !0
                }, a)
            }
        }, {
            key: "loadOne",
            value: function(o) {
                var i = this,
                    a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "",
                    s = o.split("|"),
                    l = s[0],
                    u = s[1];
                this.read(l, u, "read", void 0, void 0, function(f, c) {
                    f && i.logger.warn("".concat(a, "loading namespace ").concat(u, " for language ").concat(l, " failed"), f), !f && c && i.logger.log("".concat(a, "loaded namespace ").concat(u, " for language ").concat(l), c), i.loaded(o, f, c)
                })
            }
        }, {
            key: "saveMissing",
            value: function(o, i, a, s, l) {
                var u = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {},
                    f = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : function() {};
                if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(i)) {
                    this.logger.warn('did not save key "'.concat(a, '" as the namespace "').concat(i, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
                    return
                }
                if (!(a == null || a === "")) {
                    if (this.backend && this.backend.create) {
                        var c = o1(o1({}, u), {}, {
                                isUpdate: l
                            }),
                            d = this.backend.create.bind(this.backend);
                        if (d.length < 6) try {
                            var g;
                            d.length === 5 ? g = d(o, i, a, s, c) : g = d(o, i, a, s), g && typeof g.then == "function" ? g.then(function(v) {
                                return f(null, v)
                            }).catch(f) : f(null, g)
                        } catch (v) {
                            f(v)
                        } else d(o, i, a, s, f, c)
                    }!o || !o[0] || this.store.addResource(o[0], i, a, s)
                }
            }
        }]), r
    }(Mn);

    function i1() {
        return {
            debug: !1,
            initImmediate: !0,
            ns: ["translation"],
            defaultNS: ["translation"],
            fallbackLng: ["dev"],
            fallbackNS: !1,
            supportedLngs: !1,
            nonExplicitSupportedLngs: !1,
            load: "all",
            preload: !1,
            simplifyPluralSuffix: !0,
            keySeparator: ".",
            nsSeparator: ":",
            pluralSeparator: "_",
            contextSeparator: "_",
            partialBundledLanguages: !1,
            saveMissing: !1,
            updateMissing: !1,
            saveMissingTo: "fallback",
            saveMissingPlurals: !0,
            missingKeyHandler: !1,
            missingInterpolationHandler: !1,
            postProcess: !1,
            postProcessPassResolved: !1,
            returnNull: !0,
            returnEmptyString: !0,
            returnObjects: !1,
            joinArrays: !1,
            returnedObjectHandler: !1,
            parseMissingKeyHandler: !1,
            appendNamespaceToMissingKey: !1,
            appendNamespaceToCIMode: !1,
            overloadTranslationOptionHandler: function(t) {
                var r = {};
                if (U(t[1]) === "object" && (r = t[1]), typeof t[1] == "string" && (r.defaultValue = t[1]), typeof t[2] == "string" && (r.tDescription = t[2]), U(t[2]) === "object" || U(t[3]) === "object") {
                    var n = t[3] || t[2];
                    Object.keys(n).forEach(function(o) {
                        r[o] = n[o]
                    })
                }
                return r
            },
            interpolation: {
                escapeValue: !0,
                format: function(t, r, n, o) {
                    return t
                },
                prefix: "{{",
                suffix: "}}",
                formatSeparator: ",",
                unescapePrefix: "-",
                nestingPrefix: "$t(",
                nestingSuffix: ")",
                nestingOptionsSeparator: ",",
                maxReplaces: 1e3,
                skipOnVariables: !0
            }
        }
    }

    function a1(e) {
        return typeof e.ns == "string" && (e.ns = [e.ns]), typeof e.fallbackLng == "string" && (e.fallbackLng = [e.fallbackLng]), typeof e.fallbackNS == "string" && (e.fallbackNS = [e.fallbackNS]), e.supportedLngs && e.supportedLngs.indexOf("cimode") < 0 && (e.supportedLngs = e.supportedLngs.concat(["cimode"])), e
    }

    function s1(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function(o) {
                return Object.getOwnPropertyDescriptor(e, o).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function _r(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t] != null ? arguments[t] : {};
            t % 2 ? s1(Object(r), !0).forEach(function(n) {
                D(e, n, r[n])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : s1(Object(r)).forEach(function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
            })
        }
        return e
    }

    function EO(e) {
        var t = RO();
        return function() {
            var n = pt(e),
                o;
            if (t) {
                var i = pt(this).constructor;
                o = Reflect.construct(n, arguments, i)
            } else o = n.apply(this, arguments);
            return en(this, o)
        }
    }

    function RO() {
        if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
        if (typeof Proxy == "function") return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
        } catch {
            return !1
        }
    }

    function hu() {}

    function OO(e) {
        var t = Object.getOwnPropertyNames(Object.getPrototypeOf(e));
        t.forEach(function(r) {
            typeof e[r] == "function" && (e[r] = e[r].bind(e))
        })
    }
    var xu = function(e) {
        Jt(r, e);
        var t = EO(r);

        function r() {
            var n, o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
                i = arguments.length > 1 ? arguments[1] : void 0;
            if (ee(this, r), n = t.call(this), Su && Mn.call(it(n)), n.options = a1(o), n.services = {}, n.logger = Lr, n.modules = {
                    external: []
                }, OO(it(n)), i && !n.isInitialized && !o.isClone) {
                if (!n.options.initImmediate) return n.init(o, i), en(n, it(n));
                setTimeout(function() {
                    n.init(o, i)
                }, 0)
            }
            return n
        }
        return te(r, [{
            key: "init",
            value: function() {
                var o = this,
                    i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
                    a = arguments.length > 1 ? arguments[1] : void 0;
                typeof i == "function" && (a = i, i = {}), !i.defaultNS && i.defaultNS !== !1 && i.ns && (typeof i.ns == "string" ? i.defaultNS = i.ns : i.ns.indexOf("translation") < 0 && (i.defaultNS = i.ns[0]));
                var s = i1();
                this.options = _r(_r(_r({}, s), this.options), a1(i)), this.options.compatibilityAPI !== "v1" && (this.options.interpolation = _r(_r({}, s.interpolation), this.options.interpolation)), i.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = i.keySeparator), i.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = i.nsSeparator);

                function l(p) {
                    return p ? typeof p == "function" ? new p : p : null
                }
                if (!this.options.isClone) {
                    this.modules.logger ? Lr.init(l(this.modules.logger), this.options) : Lr.init(null, this.options);
                    var u;
                    this.modules.formatter ? u = this.modules.formatter : typeof Intl < "u" && (u = xO);
                    var f = new Z0(this.options);
                    this.store = new uO(this.options.resources, this.options);
                    var c = this.services;
                    c.logger = Lr, c.resourceStore = this.store, c.languageUtils = f, c.pluralResolver = new hO(f, {
                        prepend: this.options.pluralSeparator,
                        compatibilityJSON: this.options.compatibilityJSON,
                        simplifyPluralSuffix: this.options.simplifyPluralSuffix
                    }), u && (!this.options.interpolation.format || this.options.interpolation.format === s.interpolation.format) && (c.formatter = l(u), c.formatter.init(c, this.options), this.options.interpolation.format = c.formatter.format.bind(c.formatter)), c.interpolator = new vO(this.options), c.utils = {
                        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
                    }, c.backendConnector = new bO(l(this.modules.backend), c.resourceStore, c, this.options), c.backendConnector.on("*", function(p) {
                        for (var m = arguments.length, h = new Array(m > 1 ? m - 1 : 0), x = 1; x < m; x++) h[x - 1] = arguments[x];
                        o.emit.apply(o, [p].concat(h))
                    }), this.modules.languageDetector && (c.languageDetector = l(this.modules.languageDetector), c.languageDetector.init && c.languageDetector.init(c, this.options.detection, this.options)), this.modules.i18nFormat && (c.i18nFormat = l(this.modules.i18nFormat), c.i18nFormat.init && c.i18nFormat.init(this)), this.translator = new Y0(this.services, this.options), this.translator.on("*", function(p) {
                        for (var m = arguments.length, h = new Array(m > 1 ? m - 1 : 0), x = 1; x < m; x++) h[x - 1] = arguments[x];
                        o.emit.apply(o, [p].concat(h))
                    }), this.modules.external.forEach(function(p) {
                        p.init && p.init(o)
                    })
                }
                if (this.format = this.options.interpolation.format, a || (a = hu), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
                    var d = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
                    d.length > 0 && d[0] !== "dev" && (this.options.lng = d[0])
                }!this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined");
                var g = ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"];
                g.forEach(function(p) {
                    o[p] = function() {
                        var m;
                        return (m = o.store)[p].apply(m, arguments)
                    }
                });
                var v = ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"];
                v.forEach(function(p) {
                    o[p] = function() {
                        var m;
                        return (m = o.store)[p].apply(m, arguments), o
                    }
                });
                var y = os(),
                    b = function() {
                        var m = function(x, S) {
                            o.isInitialized && !o.initializedStoreOnce && o.logger.warn("init: i18next is already initialized. You should call init just once!"), o.isInitialized = !0, o.options.isClone || o.logger.log("initialized", o.options), o.emit("initialized", o.options), y.resolve(S), a(x, S)
                        };
                        if (o.languages && o.options.compatibilityAPI !== "v1" && !o.isInitialized) return m(null, o.t.bind(o));
                        o.changeLanguage(o.options.lng, m)
                    };
                return this.options.resources || !this.options.initImmediate ? b() : setTimeout(b, 0), y
            }
        }, {
            key: "loadResources",
            value: function(o) {
                var i = this,
                    a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : hu,
                    s = a,
                    l = typeof o == "string" ? o : this.language;
                if (typeof o == "function" && (s = o), !this.options.resources || this.options.partialBundledLanguages) {
                    if (l && l.toLowerCase() === "cimode") return s();
                    var u = [],
                        f = function(g) {
                            if (g) {
                                var v = i.services.languageUtils.toResolveHierarchy(g);
                                v.forEach(function(y) {
                                    u.indexOf(y) < 0 && u.push(y)
                                })
                            }
                        };
                    if (l) f(l);
                    else {
                        var c = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
                        c.forEach(function(d) {
                            return f(d)
                        })
                    }
                    this.options.preload && this.options.preload.forEach(function(d) {
                        return f(d)
                    }), this.services.backendConnector.load(u, this.options.ns, function(d) {
                        !d && !i.resolvedLanguage && i.language && i.setResolvedLanguage(i.language), s(d)
                    })
                } else s(null)
            }
        }, {
            key: "reloadResources",
            value: function(o, i, a) {
                var s = os();
                return o || (o = this.languages), i || (i = this.options.ns), a || (a = hu), this.services.backendConnector.reload(o, i, function(l) {
                    s.resolve(), a(l)
                }), s
            }
        }, {
            key: "use",
            value: function(o) {
                if (!o) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
                if (!o.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
                return o.type === "backend" && (this.modules.backend = o), (o.type === "logger" || o.log && o.warn && o.error) && (this.modules.logger = o), o.type === "languageDetector" && (this.modules.languageDetector = o), o.type === "i18nFormat" && (this.modules.i18nFormat = o), o.type === "postProcessor" && u1.addPostProcessor(o), o.type === "formatter" && (this.modules.formatter = o), o.type === "3rdParty" && this.modules.external.push(o), this
            }
        }, {
            key: "setResolvedLanguage",
            value: function(o) {
                if (!(!o || !this.languages) && !(["cimode", "dev"].indexOf(o) > -1))
                    for (var i = 0; i < this.languages.length; i++) {
                        var a = this.languages[i];
                        if (!(["cimode", "dev"].indexOf(a) > -1) && this.store.hasLanguageSomeTranslations(a)) {
                            this.resolvedLanguage = a;
                            break
                        }
                    }
            }
        }, {
            key: "changeLanguage",
            value: function(o, i) {
                var a = this;
                this.isLanguageChangingTo = o;
                var s = os();
                this.emit("languageChanging", o);
                var l = function(d) {
                        a.language = d, a.languages = a.services.languageUtils.toResolveHierarchy(d), a.resolvedLanguage = void 0, a.setResolvedLanguage(d)
                    },
                    u = function(d, g) {
                        g ? (l(g), a.translator.changeLanguage(g), a.isLanguageChangingTo = void 0, a.emit("languageChanged", g), a.logger.log("languageChanged", g)) : a.isLanguageChangingTo = void 0, s.resolve(function() {
                            return a.t.apply(a, arguments)
                        }), i && i(d, function() {
                            return a.t.apply(a, arguments)
                        })
                    },
                    f = function(d) {
                        !o && !d && a.services.languageDetector && (d = []);
                        var g = typeof d == "string" ? d : a.services.languageUtils.getBestMatchFromCodes(d);
                        g && (a.language || l(g), a.translator.language || a.translator.changeLanguage(g), a.services.languageDetector && a.services.languageDetector.cacheUserLanguage && a.services.languageDetector.cacheUserLanguage(g)), a.loadResources(g, function(v) {
                            u(v, g)
                        })
                    };
                return !o && this.services.languageDetector && !this.services.languageDetector.async ? f(this.services.languageDetector.detect()) : !o && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(f) : this.services.languageDetector.detect(f) : f(o), s
            }
        }, {
            key: "getFixedT",
            value: function(o, i, a) {
                var s = this,
                    l = function u(f, c) {
                        var d;
                        if (U(c) !== "object") {
                            for (var g = arguments.length, v = new Array(g > 2 ? g - 2 : 0), y = 2; y < g; y++) v[y - 2] = arguments[y];
                            d = s.options.overloadTranslationOptionHandler([f, c].concat(v))
                        } else d = _r({}, c);
                        d.lng = d.lng || u.lng, d.lngs = d.lngs || u.lngs, d.ns = d.ns || u.ns, d.keyPrefix = d.keyPrefix || a || u.keyPrefix;
                        var b = s.options.keySeparator || ".",
                            p;
                        return d.keyPrefix && Array.isArray(f) ? p = f.map(function(m) {
                            return "".concat(d.keyPrefix).concat(b).concat(m)
                        }) : p = d.keyPrefix ? "".concat(d.keyPrefix).concat(b).concat(f) : f, s.t(p, d)
                    };
                return typeof o == "string" ? l.lng = o : l.lngs = o, l.ns = i, l.keyPrefix = a, l
            }
        }, {
            key: "t",
            value: function() {
                var o;
                return this.translator && (o = this.translator).translate.apply(o, arguments)
            }
        }, {
            key: "exists",
            value: function() {
                var o;
                return this.translator && (o = this.translator).exists.apply(o, arguments)
            }
        }, {
            key: "setDefaultNamespace",
            value: function(o) {
                this.options.defaultNS = o
            }
        }, {
            key: "hasLoadedNamespace",
            value: function(o) {
                var i = this,
                    a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                if (!this.isInitialized) return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
                if (!this.languages || !this.languages.length) return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
                var s = a.lng || this.resolvedLanguage || this.languages[0],
                    l = this.options ? this.options.fallbackLng : !1,
                    u = this.languages[this.languages.length - 1];
                if (s.toLowerCase() === "cimode") return !0;
                var f = function(g, v) {
                    var y = i.services.backendConnector.state["".concat(g, "|").concat(v)];
                    return y === -1 || y === 2
                };
                if (a.precheck) {
                    var c = a.precheck(this, f);
                    if (c !== void 0) return c
                }
                return !!(this.hasResourceBundle(s, o) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || f(s, o) && (!l || f(u, o)))
            }
        }, {
            key: "loadNamespaces",
            value: function(o, i) {
                var a = this,
                    s = os();
                return this.options.ns ? (typeof o == "string" && (o = [o]), o.forEach(function(l) {
                    a.options.ns.indexOf(l) < 0 && a.options.ns.push(l)
                }), this.loadResources(function(l) {
                    s.resolve(), i && i(l)
                }), s) : (i && i(), Promise.resolve())
            }
        }, {
            key: "loadLanguages",
            value: function(o, i) {
                var a = os();
                typeof o == "string" && (o = [o]);
                var s = this.options.preload || [],
                    l = o.filter(function(u) {
                        return s.indexOf(u) < 0
                    });
                return l.length ? (this.options.preload = s.concat(l), this.loadResources(function(u) {
                    a.resolve(), i && i(u)
                }), a) : (i && i(), Promise.resolve())
            }
        }, {
            key: "dir",
            value: function(o) {
                if (o || (o = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), !o) return "rtl";
                var i = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"],
                    a = this.services && this.services.languageUtils || new Z0(i1());
                return i.indexOf(a.getLanguagePartFromCode(o)) > -1 || o.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr"
            }
        }, {
            key: "cloneInstance",
            value: function() {
                var o = this,
                    i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
                    a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : hu,
                    s = _r(_r(_r({}, this.options), i), {
                        isClone: !0
                    }),
                    l = new r(s);
                (i.debug !== void 0 || i.prefix !== void 0) && (l.logger = l.logger.clone(i));
                var u = ["store", "services", "language"];
                return u.forEach(function(f) {
                    l[f] = o[f]
                }), l.services = _r({}, this.services), l.services.utils = {
                    hasLoadedNamespace: l.hasLoadedNamespace.bind(l)
                }, l.translator = new Y0(l.services, l.options), l.translator.on("*", function(f) {
                    for (var c = arguments.length, d = new Array(c > 1 ? c - 1 : 0), g = 1; g < c; g++) d[g - 1] = arguments[g];
                    l.emit.apply(l, [f].concat(d))
                }), l.init(s, a), l.translator.options = l.options, l.translator.backendConnector.services.utils = {
                    hasLoadedNamespace: l.hasLoadedNamespace.bind(l)
                }, l
            }
        }, {
            key: "toJSON",
            value: function() {
                return {
                    options: this.options,
                    store: this.store,
                    language: this.language,
                    languages: this.languages,
                    resolvedLanguage: this.resolvedLanguage
                }
            }
        }]), r
    }(Mn);
    D(xu, "createInstance", function() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
            t = arguments.length > 1 ? arguments[1] : void 0;
        return new xu(e, t)
    });
    var Ge = xu.createInstance();
    Ge.createInstance = xu.createInstance;
    var H_ = Ge.createInstance,
        V_ = Ge.dir,
        U_ = Ge.init,
        W_ = Ge.loadResources,
        Q_ = Ge.reloadResources,
        K_ = Ge.use,
        X_ = Ge.changeLanguage,
        G_ = Ge.getFixedT,
        J_ = Ge.t,
        Y_ = Ge.exists,
        Z_ = Ge.setDefaultNamespace,
        q_ = Ge.hasLoadedNamespace,
        e2 = Ge.loadNamespaces,
        t2 = Ge.loadLanguages;

    function Bp(e, t) {
        if (e == null) return {};
        var r = {},
            n = Object.keys(e),
            o, i;
        for (i = 0; i < n.length; i++) o = n[i], !(t.indexOf(o) >= 0) && (r[o] = e[o]);
        return r
    }

    function me(e, t) {
        if (e == null) return {};
        var r = Bp(e, t),
            n, o;
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (o = 0; o < i.length; o++) n = i[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
        }
        return r
    }
    var LO = T($(), 1);
    var Up = T($(), 1);
    var PO = T(f1());

    function p1() {
        if (console && console.warn) {
            for (var e, t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
            typeof r[0] == "string" && (r[0] = "react-i18next:: ".concat(r[0])), (e = console).warn.apply(e, r)
        }
    }
    var d1 = {};

    function is() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        typeof t[0] == "string" && d1[t[0]] || (typeof t[0] == "string" && (d1[t[0]] = new Date), p1.apply(void 0, t))
    }
    var m1 = function(t, r) {
        return function() {
            if (t.isInitialized) r();
            else {
                var n = function o() {
                    setTimeout(function() {
                        t.off("initialized", o)
                    }, 0), r()
                };
                t.on("initialized", n)
            }
        }
    };

    function zp(e, t, r) {
        e.loadNamespaces(t, m1(e, r))
    }

    function Hp(e, t, r, n) {
        typeof r == "string" && (r = [r]), r.forEach(function(o) {
            e.options.ns.indexOf(o) < 0 && e.options.ns.push(o)
        }), e.loadLanguages(t, m1(e, n))
    }

    function AO(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
            n = t.languages[0],
            o = t.options ? t.options.fallbackLng : !1,
            i = t.languages[t.languages.length - 1];
        if (n.toLowerCase() === "cimode") return !0;
        var a = function(l, u) {
            var f = t.services.backendConnector.state["".concat(l, "|").concat(u)];
            return f === -1 || f === 2
        };
        return r.bindI18n && r.bindI18n.indexOf("languageChanging") > -1 && t.services.backendConnector.backend && t.isLanguageChangingTo && !a(t.isLanguageChangingTo, e) ? !1 : !!(t.hasResourceBundle(n, e) || !t.services.backendConnector.backend || t.options.resources && !t.options.partialBundledLanguages || a(n, e) && (!o || a(i, e)))
    }

    function g1(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        if (!t.languages || !t.languages.length) return is("i18n.languages were undefined or empty", t.languages), !0;
        var n = t.options.ignoreJSONStructure !== void 0;
        return n ? t.hasLoadedNamespace(e, {
            lng: r.lng,
            precheck: function(i, a) {
                if (r.bindI18n && r.bindI18n.indexOf("languageChanging") > -1 && i.services.backendConnector.backend && i.isLanguageChangingTo && !a(i.isLanguageChangingTo, e)) return !1
            }
        }) : AO(e, t, r)
    }
    var TO = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
        NO = {
            "&amp;": "&",
            "&#38;": "&",
            "&lt;": "<",
            "&#60;": "<",
            "&gt;": ">",
            "&#62;": ">",
            "&apos;": "'",
            "&#39;": "'",
            "&quot;": '"',
            "&#34;": '"',
            "&nbsp;": " ",
            "&#160;": " ",
            "&copy;": "\xA9",
            "&#169;": "\xA9",
            "&reg;": "\xAE",
            "&#174;": "\xAE",
            "&hellip;": "\u2026",
            "&#8230;": "\u2026",
            "&#x2F;": "/",
            "&#47;": "/"
        },
        kO = function(t) {
            return NO[t]
        },
        h1 = function(t) {
            return t.replace(TO, kO)
        };

    function v1(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function(o) {
                return Object.getOwnPropertyDescriptor(e, o).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function y1(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t] != null ? arguments[t] : {};
            t % 2 ? v1(Object(r), !0).forEach(function(n) {
                D(e, n, r[n])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : v1(Object(r)).forEach(function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
            })
        }
        return e
    }
    var Vp = {
        bindI18n: "languageChanged",
        bindI18nStore: "",
        transEmptyNodeValue: "",
        transSupportBasicHtmlNodes: !0,
        transWrapTextNodes: "",
        transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
        useSuspense: !0,
        unescape: h1
    };

    function Cu() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        Vp = y1(y1({}, Vp), e)
    }

    function as() {
        return Vp
    }
    var x1;

    function wu(e) {
        x1 = e
    }

    function mo() {
        return x1
    }
    var S1 = T($(), 1);
    var bu = {
        type: "3rdParty",
        init: function(t) {
            Cu(t.options.react), wu(t)
        }
    };
    var wi = (0, S1.createContext)(),
        C1 = function() {
            function e() {
                ee(this, e), this.usedNamespaces = {}
            }
            return te(e, [{
                key: "addUsedNamespaces",
                value: function(r) {
                    var n = this;
                    r.forEach(function(o) {
                        n.usedNamespaces[o] || (n.usedNamespaces[o] = !0)
                    })
                }
            }, {
                key: "getUsedNamespaces",
                value: function() {
                    return Object.keys(this.usedNamespaces)
                }
            }]), e
        }();

    function Wp(e, t) {
        var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
        if (r != null) {
            var n, o, i, a, s = [],
                l = !0,
                u = !1;
            try {
                if (i = (r = r.call(e)).next, t === 0) {
                    if (Object(r) !== r) return;
                    l = !1
                } else
                    for (; !(l = (n = i.call(r)).done) && (s.push(n.value), s.length !== t); l = !0);
            } catch (f) {
                u = !0, o = f
            } finally {
                try {
                    if (!l && r.return != null && (a = r.return(), Object(a) !== a)) return
                } finally {
                    if (u) throw o
                }
            }
            return s
        }
    }

    function F(e, t) {
        return es(e) || Wp(e, t) || po(e, t) || rs()
    }
    var Yt = T($(), 1);

    function w1(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function(o) {
                return Object.getOwnPropertyDescriptor(e, o).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function Qp(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t] != null ? arguments[t] : {};
            t % 2 ? w1(Object(r), !0).forEach(function(n) {
                D(e, n, r[n])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : w1(Object(r)).forEach(function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
            })
        }
        return e
    }
    var $O = function(t, r) {
        var n = (0, Yt.useRef)();
        return (0, Yt.useEffect)(function() {
            n.current = r ? n.current : t
        }, [t, r]), n.current
    };

    function bi(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
            r = t.i18n,
            n = (0, Yt.useContext)(wi) || {},
            o = n.i18n,
            i = n.defaultNS,
            a = r || o || mo();
        if (a && !a.reportNamespaces && (a.reportNamespaces = new C1), !a) {
            is("You will need to pass in an i18next instance by using initReactI18next");
            var s = function(A, E) {
                    return typeof E == "string" ? E : E && U(E) === "object" && typeof E.defaultValue == "string" ? E.defaultValue : Array.isArray(A) ? A[A.length - 1] : A
                },
                l = [s, {}, !1];
            return l.t = s, l.i18n = {}, l.ready = !1, l
        }
        a.options.react && a.options.react.wait !== void 0 && is("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
        var u = Qp(Qp(Qp({}, as()), a.options.react), t),
            f = u.useSuspense,
            c = u.keyPrefix,
            d = e || i || a.options && a.options.defaultNS;
        d = typeof d == "string" ? [d] : d || ["translation"], a.reportNamespaces.addUsedNamespaces && a.reportNamespaces.addUsedNamespaces(d);
        var g = (a.isInitialized || a.initializedStoreOnce) && d.every(function(O) {
            return g1(O, a, u)
        });

        function v() {
            return a.getFixedT(t.lng || null, u.nsMode === "fallback" ? d : d[0], c)
        }
        var y = (0, Yt.useState)(v),
            b = F(y, 2),
            p = b[0],
            m = b[1],
            h = d.join();
        t.lng && (h = "".concat(t.lng).concat(h));
        var x = $O(h),
            S = (0, Yt.useRef)(!0);
        (0, Yt.useEffect)(function() {
            var O = u.bindI18n,
                A = u.bindI18nStore;
            S.current = !0, !g && !f && (t.lng ? Hp(a, t.lng, d, function() {
                S.current && m(v)
            }) : zp(a, d, function() {
                S.current && m(v)
            })), g && x && x !== h && S.current && m(v);

            function E() {
                S.current && m(v)
            }
            return O && a && a.on(O, E), A && a && a.store.on(A, E),
                function() {
                    S.current = !1, O && a && O.split(" ").forEach(function(N) {
                        return a.off(N, E)
                    }), A && a && A.split(" ").forEach(function(N) {
                        return a.store.off(N, E)
                    })
                }
        }, [a, h]);
        var C = (0, Yt.useRef)(!0);
        (0, Yt.useEffect)(function() {
            S.current && !C.current && m(v), C.current = !1
        }, [a, c]);
        var w = [p, a, g];
        if (w.t = p, w.i18n = a, w.ready = g, g || !g && !f) return w;
        throw new Promise(function(O) {
            t.lng ? Hp(a, t.lng, d, function() {
                return O()
            }) : zp(a, d, function() {
                return O()
            })
        })
    }
    var b1 = T($(), 1);
    var E1 = T($(), 1);
    var DO = T($(), 1);
    var IO = T($(), 1);
    Ge.use(bu).init({
        resources: {},
        lng: "en",
        fallbackLng: "en",
        interpolation: {
            escapeValue: !1
        }
    });
    var Zt = T($());
    var Gp = T(ss());
    var BO = T(ss());
    var O1 = Gp.default.runtime.getManifest(),
        zL = O1.version_name === O1.version + "-e";
    var HL = Gp.default.runtime.getManifest().version;
    var P1 = "https://sider.ai",
        Xp = {
            origin: P1,
            api: `${P1}/api`
        };
    var Eu = (H => (H.English = "en", H["Chinese(Simplified)"] = "zh_CN", H["Chinese(Traditional)"] = "zh_TW", H.Spanish = "es", H.French = "fr", H.Japanese = "ja", H.German = "de", H.Portuguese = "pt", H.Arabic = "ar", H.Russian = "ru", H.Italian = "it", H.Korean = "ko", H.Hindi = "hi", H.Dutch = "nl", H.Polish = "pl", H.Amharic = "am", H.Bulgarian = "bg", H.Bengali = "bn", H.Catalan = "ca", H.Czech = "cs", H.Danish = "da", H.Greek = "el", H.Estonian = "et", H.Persian = "fa", H.Finnish = "fi", H.Filipino = "fil", H.Gujarati = "gu", H.Hebrew = "he", H.Croatian = "hr", H.Hungarian = "hu", H.Indonesian = "id", H.Kannada = "kn", H.Lithuanian = "lt", H.Latvian = "lv", H.Malayalam = "ml", H.Marathi = "mr", H.Malay = "ms", H.Norwegian = "no", H.Romanian = "ro", H.Slovak = "sk", H.Slovenian = "sl", H.Serbian = "sr", H.Swedish = "sv", H.Swahili = "sw", H.Tamil = "ta", H.Telugu = "te", H.Thai = "th", H.Turkish = "tr", H.Ukrainian = "uk", H.Urdu = "ur", H.Vietnamese = "vi", H))(Eu || {}),
        zO = {
            en: "English",
            zh_CN: "\u4E2D\u6587(\u7B80\u4F53)",
            zh_TW: "\u4E2D\u6587(\u7E41\u9AD4)",
            es: "Espa\xF1ol",
            fr: "Fran\xE7ais",
            ja: "\u65E5\u672C\u8A9E",
            de: "Deutsch",
            pt: "Portugu\xEAs",
            ar: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629",
            ru: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439",
            it: "Italiano",
            ko: "\uD55C\uAD6D\uC5B4",
            hi: "\u0939\u093F\u0928\u094D\u0926\u0940",
            nl: "Nederlands",
            pl: "Polski",
            am: "\u12A0\u121B\u122D\u129B",
            bg: "\u0411\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438",
            bn: "\u09AC\u09BE\u0982\u09B2\u09BE",
            ca: "Catal\xE0",
            cs: "\u010Ce\u0161tina",
            da: "Dansk",
            el: "\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC",
            et: "Eesti",
            fa: "\u0641\u0627\u0631\u0633\u06CC",
            fi: "Suomi",
            fil: "Filipino",
            gu: "\u0A97\u0AC1\u0A9C\u0AB0\u0ABE\u0AA4\u0AC0",
            he: "\u05E2\u05D1\u05E8\u05D9\u05EA",
            hr: "Hrvatski",
            hu: "Magyar",
            id: "Indonesia",
            kn: "\u0C95\u0CA8\u0CCD\u0CA8\u0CA1",
            lt: "Lietuvi\u0173",
            lv: "Latvie\u0161u",
            ml: "\u0D2E\u0D32\u0D2F\u0D3E\u0D33\u0D02",
            mr: "\u092E\u0930\u093E\u0920\u0940",
            ms: "Bahasa Melayu",
            no: "Norsk",
            ro: "Rom\xE2n\u0103",
            sk: "Sloven\u010Dina",
            sl: "Sloven\u0161\u010Dina",
            sr: "\u0421\u0440\u043F\u0441\u043A\u0438",
            sv: "Svenska",
            sw: "Kiswahili",
            ta: "\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD",
            te: "\u0C24\u0C46\u0C32\u0C41\u0C17\u0C41",
            th: "\u0E44\u0E17\u0E22",
            tr: "T\xFCrk\xE7e",
            uk: "\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430",
            ur: "\u0627\u0631\u062F\u0648",
            vi: "Ti\u1EBFng Vi\u1EC7t"
        },
        VL = Object.entries(Eu).reduce((e, [t, r]) => (e[r] = t, e), {}),
        UL = Object.entries(Eu).map(([e, t]) => ({
            label: e,
            value: t
        })),
        WL = Object.entries(zO).map(([e, t]) => ({
            label: t,
            value: e
        }));
    var QL = {
        pricing: `${Xp.origin}/pricing`,
        login: `${Xp.origin}/login`,
        myChats: `${Xp.origin}/mychats`,
        openaiChat: "https://chat.openai.com",
        openaiLogin: "https://platform.openai.com/login",
        openaiSignup: "https://platform.openai.com/signup",
        openaiApiKey: "https://platform.openai.com/account/api-keys",
        openaiApiSession: "https://chat.openai.com/api/auth/session",
        edgeStore: "https://microsoftedge.microsoft.com/addons/detail/sider-ai-sidebar/dhoenijjpgpeimemopealfcbiecgceod",
        chromeStoreReview: "https://chrome.google.com/webstore/detail/chatgpt-sidebar/difoiogjjojoaoomphldepapgpbgkhkb/reviews",
        chromeStore: "https://chrome.google.com/webstore/detail/chatgpt-sidebar/difoiogjjojoaoomphldepapgpbgkhkb",
        weChatQrCode: "https://sider.ai/resource/weixin/qrcode.jpeg",
        producthuntPromoteApi: "https://sider.ai/resource/promotion/extension-promote.json"
    };
    var go = T($()),
        ls = T(ss());

    function us(e) {
        let [t, r] = (0, go.useState)(e), n = s => {
            r(s), o.current.data = s
        }, o = (0, go.useRef)({
            data: t
        }), [i, a] = (0, go.useState)(!0);
        return (0, go.useEffect)(() => {
            ls.default.storage.local.get(e).then(l => {
                n(l), a(!1)
            });
            let s = l => {
                let u = {
                        ...o.current.data
                    },
                    f = !1;
                for (let [c, {
                        newValue: d,
                        oldValue: g
                    }] of Object.entries(l)) c in e && (f = !0, Object.assign(u, {
                    [c]: typeof d > "u" && typeof g < "u" ? e[c] : d
                }));
                f && n(u)
            };
            return ls.default.storage.local.onChanged.addListener(s), () => {
                ls.default.runtime.id && ls.default.storage?.local?.onChanged?.removeListener(s)
            }
        }, []), [t, i]
    }

    function Jp(...e) {
        let {
            t,
            i18n: r,
            ready: n
        } = bi(...e);
        return {
            t: (0, Zt.useCallback)((i, a) => {
                if (a) {
                    let s = {},
                        l = {};
                    for (let c of Object.keys(a)) {
                        let d = a[c];
                        typeof d == "function" ? (l[c] = d, delete a[c]) : d && typeof d == "object" && ("props" in d || "ref" in d) && (s[c] = d, delete a[c])
                    }
                    let u = Object.keys(l);
                    if (Object.keys(s).length > 0 || u.length > 0) {
                        let c = t(i, a),
                            d = [],
                            g = 0,
                            v = "",
                            y = "",
                            b = !1,
                            p = "",
                            m = !1,
                            h = "",
                            x = !1,
                            S = !1;
                        for (; g < c.length;) {
                            let C = c[g - 1],
                                w = c[g],
                                O = c[g + 1];
                            if (b) {
                                C !== "\\" && w === "}" && O === "}" ? (y in s && d.push(s[y]), y = "", b = !1, g += 2) : (y += w, g++);
                                continue
                            }
                            if (m) {
                                w === ">" ? (m = !1, x = !0, g++) : (p += w, g++);
                                continue
                            }
                            if (x) {
                                w === "<" && O === "/" ? (x = !1, S = !0, g++) : (h += w, g++);
                                continue
                            }
                            if (S) {
                                w === ">" && (S = !1, p in l && d.push(l[p](h)), p = "", h = ""), g++;
                                continue
                            }
                            if (C !== "\\" && w === "{" && O === "{") {
                                v && d.push(v), v = "", b = !0, g += 2;
                                continue
                            }
                            if (C !== "\\" && w === "<" && O !== " ") {
                                v && d.push(v), v = "", m = !0, g++;
                                continue
                            }
                            v += w, g++
                        }
                        return v && d.push(v), (0, Zt.createElement)(Zt.Fragment, null, ...d)
                    }
                }
                return t(i, a || {})
            }, [t]),
            i18n: r,
            ready: n,
            dir: r.dir(r.language),
            lang: r.language
        }
    }

    function A1(e) {
        let [t, r] = (0, Zt.useState)(!0), [n, o] = us({
            language: "en"
        }), i = (0, Zt.useRef)({
            onChange: e
        }), {
            i18n: a
        } = bi();
        return (0, Zt.useEffect)(() => {
            o || (async () => {
                let s = n.language,
                    l = a.language,
                    u = (await import(`/i18n/${s}.json`, {
                        assert: {
                            type: "json"
                        }
                    })).default;
                s === "en" && HO(u), a.addResourceBundle(s, "translation", u), a.changeLanguage(n.language).finally(() => {
                    i.current.onChange?.(n.language, a, l), r(!1)
                })
            })()
        }, [n.language, o, a]), t
    }

    function HO(e, t = "|||") {
        function r(n) {
            for (let [o, i] of Object.entries(n)) i !== null && typeof i == "object" ? r(i) : typeof i == "string" && (n[o] = i.split(t)[0].trim())
        }
        return r(e), e
    }

    function Yp(e) {
        if (Array.isArray(e)) return xi(e)
    }

    function Zp() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
    }

    function z(e) {
        return Yp(e) || ts(e) || po(e) || Zp()
    }

    function T1(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function(o) {
                return Object.getOwnPropertyDescriptor(e, o).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function L(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t] != null ? arguments[t] : {};
            t % 2 ? T1(Object(r), !0).forEach(function(n) {
                D(e, n, r[n])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : T1(Object(r)).forEach(function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
            })
        }
        return e
    }

    function VO(e) {
        for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4) r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= r >>> 24, t = (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
        switch (o) {
            case 3:
                t ^= (e.charCodeAt(n + 2) & 255) << 16;
            case 2:
                t ^= (e.charCodeAt(n + 1) & 255) << 8;
            case 1:
                t ^= e.charCodeAt(n) & 255, t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16)
        }
        return t ^= t >>> 13, t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36)
    }
    var Ei = VO;
    var Pu = T($()),
        H1 = T($());
    var N1 = T($());

    function rn(e, t, r) {
        var n = N1.useRef({});
        return (!("value" in n.current) || r(n.current.condition, t)) && (n.current.value = e(), n.current.condition = t), n.current.value
    }
    var qp = {},
        UO = [],
        WO = function(t) {
            UO.push(t)
        };

    function em(e, t) {
        if (!1) var r
    }

    function QO(e, t) {
        if (!1) var r
    }

    function KO() {
        qp = {}
    }

    function k1(e, t, r) {
        !t && !qp[r] && (e(!1, r), qp[r] = !0)
    }

    function Ru(e, t) {
        k1(em, e, t)
    }

    function XO(e, t) {
        k1(QO, e, t)
    }
    Ru.preMessage = WO;
    Ru.resetWarned = KO;
    Ru.noteOnce = XO;
    var Ie = Ru;

    function GO(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
            n = new Set;

        function o(i, a) {
            var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1,
                l = n.has(i);
            if (Ie(!l, "Warning: There may be circular references"), l) return !1;
            if (i === a) return !0;
            if (r && s > 1) return !1;
            n.add(i);
            var u = s + 1;
            if (Array.isArray(i)) {
                if (!Array.isArray(a) || i.length !== a.length) return !1;
                for (var f = 0; f < i.length; f++)
                    if (!o(i[f], a[f], u)) return !1;
                return !0
            }
            if (i && a && U(i) === "object" && U(a) === "object") {
                var c = Object.keys(i);
                return c.length !== Object.keys(a).length ? !1 : c.every(function(d) {
                    return o(i[d], a[d], u)
                })
            }
            return !1
        }
        return o(e, t)
    }
    var cs = GO;
    var Ri = T($());
    var JO = function() {
            function e(t) {
                ee(this, e), D(this, "instanceId", void 0), D(this, "cache", new Map), this.instanceId = t
            }
            return te(e, [{
                key: "get",
                value: function(r) {
                    return this.cache.get(r.join("%")) || null
                }
            }, {
                key: "update",
                value: function(r, n) {
                    var o = r.join("%"),
                        i = this.cache.get(o),
                        a = n(i);
                    a === null ? this.cache.delete(o) : this.cache.set(o, a)
                }
            }]), e
        }(),
        _1 = JO;
    var YO = ["children"],
        fs = "data-token-hash",
        ho = "data-css-hash";
    var In = "__cssinjs_instance__";

    function rm() {
        var e = Math.random().toString(12).slice(2);
        if (typeof document < "u" && document.head && document.body) {
            var t = document.body.querySelectorAll("style[".concat(ho, "]")) || [],
                r = document.head.firstChild;
            Array.from(t).forEach(function(o) {
                o[In] = o[In] || e, o[In] === e && document.head.insertBefore(o, r)
            });
            var n = {};
            Array.from(document.querySelectorAll("style[".concat(ho, "]"))).forEach(function(o) {
                var i = o.getAttribute(ho);
                if (n[i]) {
                    if (o[In] === e) {
                        var a;
                        (a = o.parentNode) === null || a === void 0 || a.removeChild(o)
                    }
                } else n[i] = !0
            })
        }
        return new _1(e)
    }
    var tm = Ri.createContext({
            hashPriority: "low",
            cache: rm(),
            defaultCache: !0
        }),
        nm = function(t) {
            var r = t.children,
                n = me(t, YO),
                o = Ri.useContext(tm),
                i = rn(function() {
                    var a = L({}, o);
                    Object.keys(n).forEach(function(l) {
                        var u = n[l];
                        n[l] !== void 0 && (a[l] = u)
                    });
                    var s = n.cache;
                    return a.cache = a.cache || rm(), a.defaultCache = !s && o.defaultCache, a
                }, [o, n], function(a, s) {
                    return !cs(a[0], s[0], !0) || !cs(a[1], s[1], !0)
                });
            return Ri.createElement(tm.Provider, {
                value: i
            }, r)
        },
        Oi = tm;

    function ge() {
        return !!(typeof window < "u" && window.document && window.document.createElement)
    }

    function Pi(e, t) {
        if (!e) return !1;
        if (e.contains) return e.contains(t);
        for (var r = t; r;) {
            if (r === e) return !0;
            r = r.parentNode
        }
        return !1
    }
    var L1 = "data-rc-order",
        ZO = "rc-util-key",
        om = new Map;

    function $1() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
            t = e.mark;
        return t ? t.startsWith("data-") ? t : "data-".concat(t) : ZO
    }

    function Ou(e) {
        if (e.attachTo) return e.attachTo;
        var t = document.querySelector("head");
        return t || document.body
    }

    function qO(e) {
        return e === "queue" ? "prependQueue" : e ? "prepend" : "append"
    }

    function M1(e) {
        return Array.from((om.get(e) || e).children).filter(function(t) {
            return t.tagName === "STYLE"
        })
    }

    function I1(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (!ge()) return null;
        var r = t.csp,
            n = t.prepend,
            o = document.createElement("style");
        o.setAttribute(L1, qO(n)), r != null && r.nonce && (o.nonce = r?.nonce), o.innerHTML = e;
        var i = Ou(t),
            a = i.firstChild;
        if (n) {
            if (n === "queue") {
                var s = M1(i).filter(function(l) {
                    return ["prepend", "prependQueue"].includes(l.getAttribute(L1))
                });
                if (s.length) return i.insertBefore(o, s[s.length - 1].nextSibling), o
            }
            i.insertBefore(o, a)
        } else i.appendChild(o);
        return o
    }

    function j1(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
            r = Ou(t);
        return M1(r).find(function(n) {
            return n.getAttribute($1(t)) === e
        })
    }

    function vo(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
            r = j1(e, t);
        if (r) {
            var n = Ou(t);
            n.removeChild(r)
        }
    }

    function eP(e, t) {
        var r = om.get(e);
        if (!r || !Pi(document, r)) {
            var n = I1("", t),
                o = n.parentNode;
            om.set(e, o), e.removeChild(n)
        }
    }

    function gr(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
            n = Ou(r);
        eP(n, r);
        var o = j1(t, r);
        if (o) {
            var i, a;
            if ((i = r.csp) !== null && i !== void 0 && i.nonce && o.nonce !== ((a = r.csp) === null || a === void 0 ? void 0 : a.nonce)) {
                var s;
                o.nonce = (s = r.csp) === null || s === void 0 ? void 0 : s.nonce
            }
            return o.innerHTML !== e && (o.innerHTML = e), o
        }
        var l = I1(e, r);
        return l.setAttribute($1(r), t), l
    }

    function ps(e) {
        var t = "";
        return Object.keys(e).forEach(function(r) {
            var n = e[r];
            t += r, n && U(n) === "object" ? t += ps(n) : t += n
        }), t
    }

    function F1(e, t) {
        return Ei("".concat(t, "_").concat(ps(e)))
    }
    var ds = "layer-".concat(Date.now(), "-").concat(Math.random()).replace(/\./g, ""),
        D1 = "903px";

    function tP(e, t) {
        if (ge()) {
            var r;
            gr(e, ds);
            var n = document.createElement("div");
            n.style.position = "fixed", n.style.left = "0", n.style.top = "0", t?.(n), document.body.appendChild(n);
            var o = getComputedStyle(n).width === D1;
            return (r = n.parentNode) === null || r === void 0 || r.removeChild(n), vo(ds), o
        }
        return !1
    }
    var im = void 0;

    function B1() {
        return im === void 0 && (im = tP("@layer ".concat(ds, " { .").concat(ds, " { width: ").concat(D1, "!important; } }"), function(e) {
            e.className = ds
        })), im
    }
    var Ai = T($());

    function rP() {
        return !1
    }
    var z1 = rP;

    function ms(e, t, r, n) {
        var o = Ai.useContext(Oi),
            i = o.cache,
            a = [e].concat(z(t)),
            s = z1();
        return Ai.useMemo(function() {
            i.update(a, function(l) {
                var u = l || [],
                    f = F(u, 2),
                    c = f[0],
                    d = c === void 0 ? 0 : c,
                    g = f[1],
                    v = g,
                    y = v || r();
                return [d + 1, y]
            })
        }, [a.join("_")]), Ai.useEffect(function() {
            return function() {
                i.update(a, function(l) {
                    var u = l || [],
                        f = F(u, 2),
                        c = f[0],
                        d = c === void 0 ? 0 : c,
                        g = f[1],
                        v = d - 1;
                    return v === 0 ? (n?.(g, !1), null) : [d - 1, g]
                })
            }
        }, a), i.get(a)[1]
    }
    var nP = {},
        oP = "css",
        yo = new Map;

    function iP(e) {
        yo.set(e, (yo.get(e) || 0) + 1)
    }

    function aP(e, t) {
        if (typeof document < "u") {
            var r = document.querySelectorAll("style[".concat(fs, '="').concat(e, '"]'));
            r.forEach(function(n) {
                if (n[In] === t) {
                    var o;
                    (o = n.parentNode) === null || o === void 0 || o.removeChild(n)
                }
            })
        }
    }

    function sP(e, t) {
        yo.set(e, (yo.get(e) || 0) - 1);
        var r = Array.from(yo.keys()),
            n = r.filter(function(o) {
                var i = yo.get(o) || 0;
                return i <= 0
            });
        n.length < r.length && n.forEach(function(o) {
            aP(o, t), yo.delete(o)
        })
    }
    var Au = function(t, r, n, o) {
        var i = n.getDerivativeToken(t),
            a = L(L({}, i), r);
        return o && (a = o(a)), a
    };

    function Tu(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
            n = (0, H1.useContext)(Oi),
            o = n.cache.instanceId,
            i = r.salt,
            a = i === void 0 ? "" : i,
            s = r.override,
            l = s === void 0 ? nP : s,
            u = r.formatToken,
            f = Pu.useMemo(function() {
                return Object.assign.apply(Object, [{}].concat(z(t)))
            }, [t]),
            c = Pu.useMemo(function() {
                return ps(f)
            }, [f]),
            d = Pu.useMemo(function() {
                return ps(l)
            }, [l]),
            g = ms("token", [a, e.id, c, d], function() {
                var v = Au(f, l, e, u),
                    y = F1(v, a);
                v._tokenKey = y, iP(y);
                var b = "".concat(oP, "-").concat(Ei(y));
                return v._hashId = b, [v, b]
            }, function(v) {
                sP(v[0]._tokenKey, o)
            });
        return g
    }

    function X() {
        return X = Object.assign ? Object.assign.bind() : function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        }, X.apply(this, arguments)
    }
    var Fn = T($());
    var lP = {
            animationIterationCount: 1,
            borderImageOutset: 1,
            borderImageSlice: 1,
            borderImageWidth: 1,
            boxFlex: 1,
            boxFlexGroup: 1,
            boxOrdinalGroup: 1,
            columnCount: 1,
            columns: 1,
            flex: 1,
            flexGrow: 1,
            flexPositive: 1,
            flexShrink: 1,
            flexNegative: 1,
            flexOrder: 1,
            gridRow: 1,
            gridRowEnd: 1,
            gridRowSpan: 1,
            gridRowStart: 1,
            gridColumn: 1,
            gridColumnEnd: 1,
            gridColumnSpan: 1,
            gridColumnStart: 1,
            msGridRow: 1,
            msGridRowSpan: 1,
            msGridColumn: 1,
            msGridColumnSpan: 1,
            fontWeight: 1,
            lineHeight: 1,
            opacity: 1,
            order: 1,
            orphans: 1,
            tabSize: 1,
            widows: 1,
            zIndex: 1,
            zoom: 1,
            WebkitLineClamp: 1,
            fillOpacity: 1,
            floodOpacity: 1,
            stopOpacity: 1,
            strokeDasharray: 1,
            strokeDashoffset: 1,
            strokeMiterlimit: 1,
            strokeOpacity: 1,
            strokeWidth: 1
        },
        am = lP;
    var Nu = "comm",
        ku = "rule",
        _u = "decl";
    var V1 = "@import";
    var U1 = "@keyframes";
    var W1 = "@layer";
    var Q1 = Math.abs,
        gs = String.fromCharCode;

    function Lu(e) {
        return e.trim()
    }

    function hs(e, t, r) {
        return e.replace(t, r)
    }

    function K1(e, t) {
        return e.indexOf(t)
    }

    function xo(e, t) {
        return e.charCodeAt(t) | 0
    }

    function So(e, t, r) {
        return e.slice(t, r)
    }

    function hr(e) {
        return e.length
    }

    function $u(e) {
        return e.length
    }

    function Ti(e, t) {
        return t.push(e), e
    }
    var Mu = 1,
        Ni = 1,
        X1 = 0,
        qt = 0,
        _e = 0,
        ki = "";

    function Iu(e, t, r, n, o, i, a) {
        return {
            value: e,
            root: t,
            parent: r,
            type: n,
            props: o,
            children: i,
            line: Mu,
            column: Ni,
            length: a,
            return: ""
        }
    }

    function G1() {
        return _e
    }

    function J1() {
        return _e = qt > 0 ? xo(ki, --qt) : 0, Ni--, _e === 10 && (Ni = 1, Mu--), _e
    }

    function er() {
        return _e = qt < X1 ? xo(ki, qt++) : 0, Ni++, _e === 10 && (Ni = 1, Mu++), _e
    }

    function jn() {
        return xo(ki, qt)
    }

    function vs() {
        return qt
    }

    function ju(e, t) {
        return So(ki, e, t)
    }

    function sm(e) {
        switch (e) {
            case 0:
            case 9:
            case 10:
            case 13:
            case 32:
                return 5;
            case 33:
            case 43:
            case 44:
            case 47:
            case 62:
            case 64:
            case 126:
            case 59:
            case 123:
            case 125:
                return 4;
            case 58:
                return 3;
            case 34:
            case 39:
            case 40:
            case 91:
                return 2;
            case 41:
            case 93:
                return 1
        }
        return 0
    }

    function Y1(e) {
        return Mu = Ni = 1, X1 = hr(ki = e), qt = 0, []
    }

    function Z1(e) {
        return ki = "", e
    }

    function Fu(e) {
        return Lu(ju(qt - 1, lm(e === 91 ? e + 2 : e === 40 ? e + 1 : e)))
    }

    function q1(e) {
        for (;
            (_e = jn()) && _e < 33;) er();
        return sm(e) > 2 || sm(_e) > 3 ? "" : " "
    }

    function ex(e, t) {
        for (; --t && er() && !(_e < 48 || _e > 102 || _e > 57 && _e < 65 || _e > 70 && _e < 97););
        return ju(e, vs() + (t < 6 && jn() == 32 && er() == 32))
    }

    function lm(e) {
        for (; er();) switch (_e) {
            case e:
                return qt;
            case 34:
            case 39:
                e !== 34 && e !== 39 && lm(_e);
                break;
            case 40:
                e === 41 && lm(e);
                break;
            case 92:
                er();
                break
        }
        return qt
    }

    function tx(e, t) {
        for (; er() && e + _e !== 47 + 10;)
            if (e + _e === 42 + 42 && jn() === 47) break;
        return "/*" + ju(t, qt - 1) + "*" + gs(e === 47 ? e : er())
    }

    function rx(e) {
        for (; !sm(jn());) er();
        return ju(e, qt)
    }

    function ix(e) {
        return Z1(Du("", null, null, null, [""], e = Y1(e), 0, [0], e))
    }

    function Du(e, t, r, n, o, i, a, s, l) {
        for (var u = 0, f = 0, c = a, d = 0, g = 0, v = 0, y = 1, b = 1, p = 1, m = 0, h = "", x = o, S = i, C = n, w = h; b;) switch (v = m, m = er()) {
            case 40:
                if (v != 108 && xo(w, c - 1) == 58) {
                    K1(w += hs(Fu(m), "&", "&\f"), "&\f") != -1 && (p = -1);
                    break
                }
            case 34:
            case 39:
            case 91:
                w += Fu(m);
                break;
            case 9:
            case 10:
            case 13:
            case 32:
                w += q1(v);
                break;
            case 92:
                w += ex(vs() - 1, 7);
                continue;
            case 47:
                switch (jn()) {
                    case 42:
                    case 47:
                        Ti(uP(tx(er(), vs()), t, r), l);
                        break;
                    default:
                        w += "/"
                }
                break;
            case 123 * y:
                s[u++] = hr(w) * p;
            case 125 * y:
            case 59:
            case 0:
                switch (m) {
                    case 0:
                    case 125:
                        b = 0;
                    case 59 + f:
                        p == -1 && (w = hs(w, /\f/g, "")), g > 0 && hr(w) - c && Ti(g > 32 ? ox(w + ";", n, r, c - 1) : ox(hs(w, " ", "") + ";", n, r, c - 2), l);
                        break;
                    case 59:
                        w += ";";
                    default:
                        if (Ti(C = nx(w, t, r, u, f, o, s, h, x = [], S = [], c), i), m === 123)
                            if (f === 0) Du(w, t, C, C, x, i, c, s, S);
                            else switch (d === 99 && xo(w, 3) === 110 ? 100 : d) {
                                case 100:
                                case 108:
                                case 109:
                                case 115:
                                    Du(e, C, C, n && Ti(nx(e, C, C, 0, 0, o, s, h, o, x = [], c), S), o, S, c, s, n ? x : S);
                                    break;
                                default:
                                    Du(w, C, C, C, [""], S, 0, s, S)
                            }
                }
                u = f = g = 0, y = p = 1, h = w = "", c = a;
                break;
            case 58:
                c = 1 + hr(w), g = v;
            default:
                if (y < 1) {
                    if (m == 123) --y;
                    else if (m == 125 && y++ == 0 && J1() == 125) continue
                }
                switch (w += gs(m), m * y) {
                    case 38:
                        p = f > 0 ? 1 : (w += "\f", -1);
                        break;
                    case 44:
                        s[u++] = (hr(w) - 1) * p, p = 1;
                        break;
                    case 64:
                        jn() === 45 && (w += Fu(er())), d = jn(), f = c = hr(h = w += rx(vs())), m++;
                        break;
                    case 45:
                        v === 45 && hr(w) == 2 && (y = 0)
                }
        }
        return i
    }

    function nx(e, t, r, n, o, i, a, s, l, u, f) {
        for (var c = o - 1, d = o === 0 ? i : [""], g = $u(d), v = 0, y = 0, b = 0; v < n; ++v)
            for (var p = 0, m = So(e, c + 1, c = Q1(y = a[v])), h = e; p < g; ++p)(h = Lu(y > 0 ? d[p] + " " + m : hs(m, /&\f/g, d[p]))) && (l[b++] = h);
        return Iu(e, t, r, o === 0 ? ku : s, l, u, f)
    }

    function uP(e, t, r) {
        return Iu(e, t, r, Nu, gs(G1()), So(e, 2, -2), 0)
    }

    function ox(e, t, r, n) {
        return Iu(e, t, r, _u, So(e, 0, n), So(e, n + 1, -1), n)
    }

    function Bu(e, t) {
        for (var r = "", n = $u(e), o = 0; o < n; o++) r += t(e[o], o, e, t) || "";
        return r
    }

    function ax(e, t, r, n) {
        switch (e.type) {
            case W1:
                if (e.children.length) break;
            case V1:
            case _u:
                return e.return = e.return || e.value;
            case Nu:
                return "";
            case U1:
                return e.return = e.value + "{" + Bu(e.children, n) + "}";
            case ku:
                e.value = e.props.join(",")
        }
        return hr(r = Bu(e.children, n)) ? e.return = e.value + "{" + r + "}" : ""
    }
    var sx = ge(),
        pP = "_skip_check_",
        ux = "_multi_value_";

    function lx(e) {
        var t = Bu(ix(e), ax);
        return t.replace(/\{%%%\:[^;];}/g, ";")
    }

    function mP(e) {
        return U(e) === "object" && e && (pP in e || ux in e)
    }

    function gP(e, t, r) {
        if (!t) return e;
        var n = ".".concat(t),
            o = r === "low" ? ":where(".concat(n, ")") : n,
            i = e.split(",").map(function(a) {
                var s, l = a.trim().split(/\s+/),
                    u = l[0] || "",
                    f = ((s = u.match(/^\w+/)) === null || s === void 0 ? void 0 : s[0]) || "";
                return u = "".concat(f).concat(o).concat(u.slice(f.length)), [u].concat(z(l.slice(1))).join(" ")
            });
        return i.join(",")
    }
    var hP = function e(t) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
            n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
                root: !0,
                parentSelectors: []
            },
            o = n.root,
            i = n.injectHash,
            a = n.parentSelectors,
            s = r.hashId,
            l = r.layer,
            u = r.path,
            f = r.hashPriority,
            c = r.transformers,
            d = c === void 0 ? [] : c,
            g = r.linters,
            v = g === void 0 ? [] : g,
            y = "",
            b = {};

        function p(C) {
            var w = C.getName(s);
            if (!b[w]) {
                var O = e(C.style, r, {
                        root: !1,
                        parentSelectors: a
                    }),
                    A = F(O, 1),
                    E = A[0];
                b[w] = "@keyframes ".concat(C.getName(s)).concat(E)
            }
        }

        function m(C) {
            var w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
            return C.forEach(function(O) {
                Array.isArray(O) ? m(O, w) : O && w.push(O)
            }), w
        }
        var h = m(Array.isArray(t) ? t : [t]);
        if (h.forEach(function(C) {
                var w = typeof C == "string" && !o ? {} : C;
                if (typeof w == "string") y += "".concat(w, `
`);
                else if (w._keyframe) p(w);
                else {
                    var O = d.reduce(function(A, E) {
                        var N;
                        return (E == null || (N = E.visit) === null || N === void 0 ? void 0 : N.call(E, A)) || A
                    }, w);
                    Object.keys(O).forEach(function(A) {
                        var E = O[A];
                        if (U(E) === "object" && E && (A !== "animationName" || !E._keyframe) && !mP(E)) {
                            var N = !1,
                                R = A.trim(),
                                P = !1;
                            (o || i) && s ? R.startsWith("@") ? N = !0 : R = gP(A, s, f) : o && !s && (R === "&" || R === "") && (R = "", P = !0);
                            var k = e(E, r, {
                                    root: P,
                                    injectHash: N,
                                    parentSelectors: [].concat(z(a), [R])
                                }),
                                _ = F(k, 2),
                                M = _[0],
                                j = _[1];
                            b = L(L({}, b), j), y += "".concat(R).concat(M)
                        } else {
                            let Y = function(re, K) {
                                var ne = re.replace(/[A-Z]/g, function(Oe) {
                                        return "-".concat(Oe.toLowerCase())
                                    }),
                                    fe = K;
                                !am[re] && typeof fe == "number" && fe !== 0 && (fe = "".concat(fe, "px")), re === "animationName" && K !== null && K !== void 0 && K._keyframe && (p(K), fe = K.getName(s)), y += "".concat(ne, ":").concat(fe, ";")
                            };
                            var V, Q = (V = E?.value) !== null && V !== void 0 ? V : E;
                            U(E) === "object" && E !== null && E !== void 0 && E[ux] && Array.isArray(Q) ? Q.forEach(function(re) {
                                Y(A, re)
                            }) : Y(A, Q)
                        }
                    })
                }
            }), !o) y = "{".concat(y, "}");
        else if (l && B1()) {
            var x = l.split(","),
                S = x[x.length - 1].trim();
            y = "@layer ".concat(S, " {").concat(y, "}"), x.length > 1 && (y = "@layer ".concat(l, "{%%%:%}").concat(y))
        }
        return [y, b]
    };

    function vP(e, t) {
        return Ei("".concat(e.join("%")).concat(t))
    }

    function yP() {
        return null
    }

    function Dn(e, t) {
        var r = e.token,
            n = e.path,
            o = e.hashId,
            i = e.layer,
            a = e.nonce,
            s = Fn.useContext(Oi),
            l = s.autoClear,
            u = s.mock,
            f = s.defaultCache,
            c = s.hashPriority,
            d = s.container,
            g = s.ssrInline,
            v = s.transformers,
            y = s.linters,
            b = s.cache,
            p = r._tokenKey,
            m = [p].concat(z(n)),
            h = sx,
            x = ms("style", m, function() {
                var A = t(),
                    E = hP(A, {
                        hashId: o,
                        hashPriority: c,
                        layer: i,
                        path: n.join("-"),
                        transformers: v,
                        linters: y
                    }),
                    N = F(E, 2),
                    R = N[0],
                    P = N[1],
                    k = lx(R),
                    _ = vP(m, k);
                if (h) {
                    var M = {
                            mark: ho,
                            prepend: "queue",
                            attachTo: d
                        },
                        j = typeof a == "function" ? a() : a;
                    j && (M.csp = {
                        nonce: j
                    });
                    var V = gr(k, _, M);
                    V[In] = b.instanceId, V.setAttribute(fs, p), Object.keys(P).forEach(function(Q) {
                        gr(lx(P[Q]), "_effect-".concat(Q), M)
                    })
                }
                return [k, p, _]
            }, function(A, E) {
                var N = F(A, 3),
                    R = N[2];
                (E || l) && sx && vo(R, {
                    mark: ho
                })
            }),
            S = F(x, 3),
            C = S[0],
            w = S[1],
            O = S[2];
        return function(A) {
            var E;
            if (!g || h || !f) E = Fn.createElement(yP, null);
            else {
                var N;
                E = Fn.createElement("style", X({}, (N = {}, D(N, fs, w), D(N, ho, O), N), {
                    dangerouslySetInnerHTML: {
                        __html: C
                    }
                }))
            }
            return Fn.createElement(Fn.Fragment, null, E, A)
        }
    }
    var xP = function() {
            function e(t, r) {
                ee(this, e), D(this, "name", void 0), D(this, "style", void 0), D(this, "_keyframe", !0), this.name = t, this.style = r
            }
            return te(e, [{
                key: "getName",
                value: function() {
                    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
                    return r ? "".concat(r, "-").concat(this.name) : this.name
                }
            }]), e
        }(),
        le = xP;

    function SP(e, t) {
        if (e.length !== t.length) return !1;
        for (var r = 0; r < e.length; r++)
            if (e[r] !== t[r]) return !1;
        return !0
    }
    var ys = function() {
        function e() {
            ee(this, e), D(this, "cache", void 0), D(this, "keys", void 0), D(this, "cacheCallTimes", void 0), this.cache = new Map, this.keys = [], this.cacheCallTimes = 0
        }
        return te(e, [{
            key: "size",
            value: function() {
                return this.keys.length
            }
        }, {
            key: "internalGet",
            value: function(r) {
                var n, o, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
                    a = {
                        map: this.cache
                    };
                return r.forEach(function(s) {
                    if (!a) a = void 0;
                    else {
                        var l, u;
                        a = (l = a) === null || l === void 0 || (u = l.map) === null || u === void 0 ? void 0 : u.get(s)
                    }
                }), (n = a) !== null && n !== void 0 && n.value && i && (a.value[1] = this.cacheCallTimes++), (o = a) === null || o === void 0 ? void 0 : o.value
            }
        }, {
            key: "get",
            value: function(r) {
                var n;
                return (n = this.internalGet(r, !0)) === null || n === void 0 ? void 0 : n[0]
            }
        }, {
            key: "has",
            value: function(r) {
                return !!this.internalGet(r)
            }
        }, {
            key: "set",
            value: function(r, n) {
                var o = this;
                if (!this.has(r)) {
                    if (this.size() + 1 > e.MAX_CACHE_SIZE + e.MAX_CACHE_OFFSET) {
                        var i = this.keys.reduce(function(u, f) {
                                var c = F(u, 2),
                                    d = c[1];
                                return o.internalGet(f)[1] < d ? [f, o.internalGet(f)[1]] : u
                            }, [this.keys[0], this.cacheCallTimes]),
                            a = F(i, 1),
                            s = a[0];
                        this.delete(s)
                    }
                    this.keys.push(r)
                }
                var l = this.cache;
                r.forEach(function(u, f) {
                    if (f === r.length - 1) l.set(u, {
                        value: [n, o.cacheCallTimes++]
                    });
                    else {
                        var c = l.get(u);
                        c ? c.map || (c.map = new Map) : l.set(u, {
                            map: new Map
                        }), l = l.get(u).map
                    }
                })
            }
        }, {
            key: "deleteByPath",
            value: function(r, n) {
                var o = r.get(n[0]);
                if (n.length === 1) {
                    var i;
                    return o.map ? r.set(n[0], {
                        map: o.map
                    }) : r.delete(n[0]), (i = o.value) === null || i === void 0 ? void 0 : i[0]
                }
                var a = this.deleteByPath(o.map, n.slice(1));
                return (!o.map || o.map.size === 0) && !o.value && r.delete(n[0]), a
            }
        }, {
            key: "delete",
            value: function(r) {
                if (this.has(r)) return this.keys = this.keys.filter(function(n) {
                    return !SP(n, r)
                }), this.deleteByPath(this.cache, r)
            }
        }]), e
    }();
    D(ys, "MAX_CACHE_SIZE", 20);
    D(ys, "MAX_CACHE_OFFSET", 5);
    var cx = 0,
        Hu = function() {
            function e(t) {
                ee(this, e), D(this, "derivatives", void 0), D(this, "id", void 0), this.derivatives = Array.isArray(t) ? t : [t], this.id = cx, t.length === 0 && em(t.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), cx += 1
            }
            return te(e, [{
                key: "getDerivativeToken",
                value: function(r) {
                    return this.derivatives.reduce(function(n, o) {
                        return o(r, n)
                    }, void 0)
                }
            }]), e
        }();
    var um = new ys;

    function $r(e) {
        var t = Array.isArray(e) ? e : [e];
        return um.has(t) || um.set(t, new Hu(t)), um.get(t)
    }

    function _i(e) {
        return e.notSplit = !0, e
    }
    var hI = {
        inset: ["top", "right", "bottom", "left"],
        insetBlock: ["top", "bottom"],
        insetBlockStart: ["top"],
        insetBlockEnd: ["bottom"],
        insetInline: ["left", "right"],
        insetInlineStart: ["left"],
        insetInlineEnd: ["right"],
        marginBlock: ["marginTop", "marginBottom"],
        marginBlockStart: ["marginTop"],
        marginBlockEnd: ["marginBottom"],
        marginInline: ["marginLeft", "marginRight"],
        marginInlineStart: ["marginLeft"],
        marginInlineEnd: ["marginRight"],
        paddingBlock: ["paddingTop", "paddingBottom"],
        paddingBlockStart: ["paddingTop"],
        paddingBlockEnd: ["paddingBottom"],
        paddingInline: ["paddingLeft", "paddingRight"],
        paddingInlineStart: ["paddingLeft"],
        paddingInlineEnd: ["paddingRight"],
        borderBlock: _i(["borderTop", "borderBottom"]),
        borderBlockStart: _i(["borderTop"]),
        borderBlockEnd: _i(["borderBottom"]),
        borderInline: _i(["borderLeft", "borderRight"]),
        borderInlineStart: _i(["borderLeft"]),
        borderInlineEnd: _i(["borderRight"]),
        borderBlockWidth: ["borderTopWidth", "borderBottomWidth"],
        borderBlockStartWidth: ["borderTopWidth"],
        borderBlockEndWidth: ["borderBottomWidth"],
        borderInlineWidth: ["borderLeftWidth", "borderRightWidth"],
        borderInlineStartWidth: ["borderLeftWidth"],
        borderInlineEndWidth: ["borderRightWidth"],
        borderBlockStyle: ["borderTopStyle", "borderBottomStyle"],
        borderBlockStartStyle: ["borderTopStyle"],
        borderBlockEndStyle: ["borderBottomStyle"],
        borderInlineStyle: ["borderLeftStyle", "borderRightStyle"],
        borderInlineStartStyle: ["borderLeftStyle"],
        borderInlineEndStyle: ["borderRightStyle"],
        borderBlockColor: ["borderTopColor", "borderBottomColor"],
        borderBlockStartColor: ["borderTopColor"],
        borderBlockEndColor: ["borderBottomColor"],
        borderInlineColor: ["borderLeftColor", "borderRightColor"],
        borderInlineStartColor: ["borderLeftColor"],
        borderInlineEndColor: ["borderRightColor"],
        borderStartStartRadius: ["borderTopLeftRadius"],
        borderStartEndRadius: ["borderTopRightRadius"],
        borderEndStartRadius: ["borderBottomLeftRadius"],
        borderEndEndRadius: ["borderBottomRightRadius"]
    };

    function cm() {
        if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
        if (typeof Proxy == "function") return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
        } catch {
            return !1
        }
    }

    function Co(e) {
        var t = cm();
        return function() {
            var n = pt(e),
                o;
            if (t) {
                var i = pt(this).constructor;
                o = Reflect.construct(n, arguments, i)
            } else o = n.apply(this, arguments);
            return en(this, o)
        }
    }
    var mx = T($()),
        gx = T(mm());

    function Li(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
            r = [];
        return mx.default.Children.forEach(e, function(n) {
            n == null && !t.keepEmpty || (Array.isArray(n) ? r = r.concat(Li(n)) : (0, gx.isFragment)(n) && n.props ? r = r.concat(Li(n.props.children, t)) : r.push(n))
        }), r
    }
    var hx = T(mm());

    function gm(e, t) {
        typeof e == "function" ? e(t) : U(e) === "object" && e && "current" in e && (e.current = t)
    }

    function xs() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        var n = t.filter(function(o) {
            return o
        });
        return n.length <= 1 ? n[0] : function(o) {
            t.forEach(function(i) {
                gm(i, o)
            })
        }
    }

    function vx() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        return rn(function() {
            return xs.apply(void 0, t)
        }, t, function(n, o) {
            return n.length === o.length && n.every(function(i, a) {
                return i === o[a]
            })
        })
    }

    function $i(e) {
        var t, r, n = (0, hx.isMemo)(e) ? e.type.type : e.type;
        return !(typeof n == "function" && !((t = n.prototype) !== null && t !== void 0 && t.render) || typeof e == "function" && !((r = e.prototype) !== null && r !== void 0 && r.render))
    }
    var yx = T($()),
        xx = T(yi());

    function OP(e) {
        return e instanceof HTMLElement || e instanceof SVGElement
    }

    function hm(e) {
        return OP(e) ? e : e instanceof yx.default.Component ? xx.default.findDOMNode(e) : null
    }

    function ec(e, t) {
        var r = L({}, e);
        return Array.isArray(t) && t.forEach(function(n) {
            delete r[n]
        }), r
    }
    var Cx = function(t) {
            return +setTimeout(t, 16)
        },
        wx = function(t) {
            return clearTimeout(t)
        };
    typeof window < "u" && "requestAnimationFrame" in window && (Cx = function(t) {
        return window.requestAnimationFrame(t)
    }, wx = function(t) {
        return window.cancelAnimationFrame(t)
    });
    var Sx = 0,
        vm = new Map;

    function bx(e) {
        vm.delete(e)
    }
    var Ex = function(t) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
        Sx += 1;
        var n = Sx;

        function o(i) {
            if (i === 0) bx(n), t();
            else {
                var a = Cx(function() {
                    o(i - 1)
                });
                vm.set(n, a)
            }
        }
        return o(r), n
    };
    Ex.cancel = function(e) {
        var t = vm.get(e);
        return bx(t), wx(t)
    };
    var Mi = Ex;
    var Rx = T($()),
        PP = (0, Rx.createContext)({}),
        Ii = PP;

    function Ve(e, t) {
        for (var r = e, n = 0; n < t.length; n += 1) {
            if (r == null) return;
            r = r[t[n]]
        }
        return r
    }

    function Px(e, t, r, n) {
        if (!t.length) return r;
        var o = ns(t),
            i = o[0],
            a = o.slice(1),
            s;
        return !e && typeof i == "number" ? s = [] : Array.isArray(e) ? s = z(e) : s = L({}, e), n && r === void 0 && a.length === 1 ? delete s[i][a[0]] : s[i] = Px(s[i], a, r, n), s
    }

    function mt(e, t, r) {
        var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
        return t.length && n && r === void 0 && !Ve(e, t.slice(0, -1)) ? e : Px(e, t, r, n)
    }

    function AP(e) {
        return U(e) === "object" && e !== null && Object.getPrototypeOf(e) === Object.prototype
    }

    function Ox(e) {
        return Array.isArray(e) ? [] : {}
    }
    var TP = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;

    function nn() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        var n = Ox(t[0]);
        return t.forEach(function(o) {
            function i(a, s) {
                var l = new Set(s),
                    u = Ve(o, a),
                    f = Array.isArray(u);
                if (f || AP(u)) {
                    if (!l.has(u)) {
                        l.add(u);
                        var c = Ve(n, a);
                        f ? n = mt(n, a, []) : (!c || U(c) !== "object") && (n = mt(n, a, Ox(u))), TP(u).forEach(function(d) {
                            i([].concat(z(a), [d]), l)
                        })
                    }
                } else n = mt(n, a, u)
            }
            i([])
        }), n
    }
    var Fe = T($());
    var Ax = T($()),
        Tx = (0, Ax.createContext)(void 0);
    var Fi = T($());
    var Nx = {
        items_per_page: "/ page",
        jump_to: "Go to",
        jump_to_confirm: "confirm",
        page: "Page",
        prev_page: "Previous Page",
        next_page: "Next Page",
        prev_5: "Previous 5 Pages",
        next_5: "Next 5 Pages",
        prev_3: "Previous 3 Pages",
        next_3: "Next 3 Pages",
        page_size: "Page Size"
    };
    var NP = {
            locale: "en_US",
            today: "Today",
            now: "Now",
            backToToday: "Back to today",
            ok: "OK",
            clear: "Clear",
            month: "Month",
            year: "Year",
            timeSelect: "select time",
            dateSelect: "select date",
            weekSelect: "Choose a week",
            monthSelect: "Choose a month",
            yearSelect: "Choose a year",
            decadeSelect: "Choose a decade",
            yearFormat: "YYYY",
            dateFormat: "M/D/YYYY",
            dayFormat: "D",
            dateTimeFormat: "M/D/YYYY HH:mm:ss",
            monthBeforeYear: !0,
            previousMonth: "Previous month (PageUp)",
            nextMonth: "Next month (PageDown)",
            previousYear: "Last year (Control + left)",
            nextYear: "Next year (Control + right)",
            previousDecade: "Last decade",
            nextDecade: "Next decade",
            previousCentury: "Last century",
            nextCentury: "Next century"
        },
        kx = NP;
    var kP = {
            placeholder: "Select time",
            rangePlaceholder: ["Start time", "End time"]
        },
        tc = kP;
    var _P = {
            lang: Object.assign({
                placeholder: "Select date",
                yearPlaceholder: "Select year",
                quarterPlaceholder: "Select quarter",
                monthPlaceholder: "Select month",
                weekPlaceholder: "Select week",
                rangePlaceholder: ["Start date", "End date"],
                rangeYearPlaceholder: ["Start year", "End year"],
                rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
                rangeMonthPlaceholder: ["Start month", "End month"],
                rangeWeekPlaceholder: ["Start week", "End week"]
            }, kx),
            timePickerLocale: Object.assign({}, tc)
        },
        rc = _P;
    var _x = rc;
    var Ft = "${label} is not a valid ${type}",
        LP = {
            locale: "en",
            Pagination: Nx,
            DatePicker: rc,
            TimePicker: tc,
            Calendar: _x,
            global: {
                placeholder: "Please select"
            },
            Table: {
                filterTitle: "Filter menu",
                filterConfirm: "OK",
                filterReset: "Reset",
                filterEmptyText: "No filters",
                filterCheckall: "Select all items",
                filterSearchPlaceholder: "Search in filters",
                emptyText: "No data",
                selectAll: "Select current page",
                selectInvert: "Invert current page",
                selectNone: "Clear all data",
                selectionAll: "Select all data",
                sortTitle: "Sort",
                expand: "Expand row",
                collapse: "Collapse row",
                triggerDesc: "Click to sort descending",
                triggerAsc: "Click to sort ascending",
                cancelSort: "Click to cancel sorting"
            },
            Tour: {
                Next: "Next",
                Previous: "Previous",
                Finish: "Finish"
            },
            Modal: {
                okText: "OK",
                cancelText: "Cancel",
                justOkText: "OK"
            },
            Popconfirm: {
                okText: "OK",
                cancelText: "Cancel"
            },
            Transfer: {
                titles: ["", ""],
                searchPlaceholder: "Search here",
                itemUnit: "item",
                itemsUnit: "items",
                remove: "Remove",
                selectCurrent: "Select current page",
                removeCurrent: "Remove current page",
                selectAll: "Select all data",
                removeAll: "Remove all data",
                selectInvert: "Invert current page"
            },
            Upload: {
                uploading: "Uploading...",
                removeFile: "Remove file",
                uploadError: "Upload error",
                previewFile: "Preview file",
                downloadFile: "Download file"
            },
            Empty: {
                description: "No data"
            },
            Icon: {
                icon: "icon"
            },
            Text: {
                edit: "Edit",
                copy: "Copy",
                copied: "Copied",
                expand: "Expand"
            },
            PageHeader: {
                back: "Back"
            },
            Form: {
                optional: "(optional)",
                defaultValidateMessages: {
                    default: "Field validation error for ${label}",
                    required: "Please enter ${label}",
                    enum: "${label} must be one of [${enum}]",
                    whitespace: "${label} cannot be a blank character",
                    date: {
                        format: "${label} date format is invalid",
                        parse: "${label} cannot be converted to a date",
                        invalid: "${label} is an invalid date"
                    },
                    types: {
                        string: Ft,
                        method: Ft,
                        array: Ft,
                        object: Ft,
                        number: Ft,
                        date: Ft,
                        boolean: Ft,
                        integer: Ft,
                        float: Ft,
                        regexp: Ft,
                        email: Ft,
                        url: Ft,
                        hex: Ft
                    },
                    string: {
                        len: "${label} must be ${len} characters",
                        min: "${label} must be at least ${min} characters",
                        max: "${label} must be up to ${max} characters",
                        range: "${label} must be between ${min}-${max} characters"
                    },
                    number: {
                        len: "${label} must be equal to ${len}",
                        min: "${label} must be minimum ${min}",
                        max: "${label} must be maximum ${max}",
                        range: "${label} must be between ${min}-${max}"
                    },
                    array: {
                        len: "Must be ${len} ${label}",
                        min: "At least ${min} ${label}",
                        max: "At most ${max} ${label}",
                        range: "The amount of ${label} must be between ${min}-${max}"
                    },
                    pattern: {
                        mismatch: "${label} does not match the pattern ${pattern}"
                    }
                }
            },
            Image: {
                preview: "Preview"
            },
            QRCode: {
                expired: "QR code expired",
                refresh: "Refresh"
            },
            ColorPicker: {
                presetEmpty: "Empty"
            }
        },
        Mr = LP;
    var nc = Object.assign({}, Mr.Modal);

    function ym(e) {
        e ? nc = Object.assign(Object.assign({}, nc), e) : nc = Object.assign({}, Mr.Modal)
    }

    function Lx() {
        return nc
    }
    var $x = T($()),
        $P = (0, $x.createContext)(void 0),
        ji = $P;
    var Ss = T($());
    var MP = (e, t) => {
            let r = Ss.useContext(ji),
                n = Ss.useMemo(() => {
                    var i;
                    let a = t || Mr[e],
                        s = (i = r?.[e]) !== null && i !== void 0 ? i : {};
                    return Object.assign(Object.assign({}, typeof a == "function" ? a() : a), s || {})
                }, [e, t, r]),
                o = Ss.useMemo(() => {
                    let i = r?.locale;
                    return r?.exist && !i ? Mr.locale : i
                }, [r]);
            return [n, o]
        },
        wo = MP;
    var Mx = "internalMark",
        IP = e => {
            let {
                locale: t = {},
                children: r,
                _ANT_MARK__: n
            } = e;
            Fi.useEffect(() => (ym(t && t.Modal), () => {
                ym()
            }), [t]);
            let o = Fi.useMemo(() => Object.assign(Object.assign({}, t), {
                exist: !0
            }), [t]);
            return Fi.createElement(ji.Provider, {
                value: o
            }, r)
        },
        Ix = IP;
    var _m = T($());
    var jx = "5.6.3";
    var Fx = jx;

    function je(e, t) {
        jP(e) && (e = "100%");
        var r = FP(e);
        return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), r && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e)
    }

    function Cs(e) {
        return Math.min(1, Math.max(0, e))
    }

    function jP(e) {
        return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1
    }

    function FP(e) {
        return typeof e == "string" && e.indexOf("%") !== -1
    }

    function oc(e) {
        return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e
    }

    function ws(e) {
        return e <= 1 ? "".concat(Number(e) * 100, "%") : e
    }

    function Bn(e) {
        return e.length === 1 ? "0" + e : String(e)
    }

    function Dx(e, t, r) {
        return {
            r: je(e, 255) * 255,
            g: je(t, 255) * 255,
            b: je(r, 255) * 255
        }
    }

    function Sm(e, t, r) {
        e = je(e, 255), t = je(t, 255), r = je(r, 255);
        var n = Math.max(e, t, r),
            o = Math.min(e, t, r),
            i = 0,
            a = 0,
            s = (n + o) / 2;
        if (n === o) a = 0, i = 0;
        else {
            var l = n - o;
            switch (a = s > .5 ? l / (2 - n - o) : l / (n + o), n) {
                case e:
                    i = (t - r) / l + (t < r ? 6 : 0);
                    break;
                case t:
                    i = (r - e) / l + 2;
                    break;
                case r:
                    i = (e - t) / l + 4;
                    break;
                default:
                    break
            }
            i /= 6
        }
        return {
            h: i,
            s: a,
            l: s
        }
    }

    function xm(e, t, r) {
        return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * (6 * r) : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
    }

    function Bx(e, t, r) {
        var n, o, i;
        if (e = je(e, 360), t = je(t, 100), r = je(r, 100), t === 0) o = r, i = r, n = r;
        else {
            var a = r < .5 ? r * (1 + t) : r + t - r * t,
                s = 2 * r - a;
            n = xm(s, a, e + 1 / 3), o = xm(s, a, e), i = xm(s, a, e - 1 / 3)
        }
        return {
            r: n * 255,
            g: o * 255,
            b: i * 255
        }
    }

    function bs(e, t, r) {
        e = je(e, 255), t = je(t, 255), r = je(r, 255);
        var n = Math.max(e, t, r),
            o = Math.min(e, t, r),
            i = 0,
            a = n,
            s = n - o,
            l = n === 0 ? 0 : s / n;
        if (n === o) i = 0;
        else {
            switch (n) {
                case e:
                    i = (t - r) / s + (t < r ? 6 : 0);
                    break;
                case t:
                    i = (r - e) / s + 2;
                    break;
                case r:
                    i = (e - t) / s + 4;
                    break;
                default:
                    break
            }
            i /= 6
        }
        return {
            h: i,
            s: l,
            v: a
        }
    }

    function zx(e, t, r) {
        e = je(e, 360) * 6, t = je(t, 100), r = je(r, 100);
        var n = Math.floor(e),
            o = e - n,
            i = r * (1 - t),
            a = r * (1 - o * t),
            s = r * (1 - (1 - o) * t),
            l = n % 6,
            u = [r, a, i, i, s, r][l],
            f = [s, r, r, a, i, i][l],
            c = [i, i, s, r, r, a][l];
        return {
            r: u * 255,
            g: f * 255,
            b: c * 255
        }
    }

    function Es(e, t, r, n) {
        var o = [Bn(Math.round(e).toString(16)), Bn(Math.round(t).toString(16)), Bn(Math.round(r).toString(16))];
        return n && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) : o.join("")
    }

    function Hx(e, t, r, n, o) {
        var i = [Bn(Math.round(e).toString(16)), Bn(Math.round(t).toString(16)), Bn(Math.round(r).toString(16)), Bn(DP(n))];
        return o && i[0].startsWith(i[0].charAt(1)) && i[1].startsWith(i[1].charAt(1)) && i[2].startsWith(i[2].charAt(1)) && i[3].startsWith(i[3].charAt(1)) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) + i[3].charAt(0) : i.join("")
    }

    function DP(e) {
        return Math.round(parseFloat(e) * 255).toString(16)
    }

    function Cm(e) {
        return Rt(e) / 255
    }

    function Rt(e) {
        return parseInt(e, 16)
    }

    function Vx(e) {
        return {
            r: e >> 16,
            g: (e & 65280) >> 8,
            b: e & 255
        }
    }
    var Rs = {
        aliceblue: "#f0f8ff",
        antiquewhite: "#faebd7",
        aqua: "#00ffff",
        aquamarine: "#7fffd4",
        azure: "#f0ffff",
        beige: "#f5f5dc",
        bisque: "#ffe4c4",
        black: "#000000",
        blanchedalmond: "#ffebcd",
        blue: "#0000ff",
        blueviolet: "#8a2be2",
        brown: "#a52a2a",
        burlywood: "#deb887",
        cadetblue: "#5f9ea0",
        chartreuse: "#7fff00",
        chocolate: "#d2691e",
        coral: "#ff7f50",
        cornflowerblue: "#6495ed",
        cornsilk: "#fff8dc",
        crimson: "#dc143c",
        cyan: "#00ffff",
        darkblue: "#00008b",
        darkcyan: "#008b8b",
        darkgoldenrod: "#b8860b",
        darkgray: "#a9a9a9",
        darkgreen: "#006400",
        darkgrey: "#a9a9a9",
        darkkhaki: "#bdb76b",
        darkmagenta: "#8b008b",
        darkolivegreen: "#556b2f",
        darkorange: "#ff8c00",
        darkorchid: "#9932cc",
        darkred: "#8b0000",
        darksalmon: "#e9967a",
        darkseagreen: "#8fbc8f",
        darkslateblue: "#483d8b",
        darkslategray: "#2f4f4f",
        darkslategrey: "#2f4f4f",
        darkturquoise: "#00ced1",
        darkviolet: "#9400d3",
        deeppink: "#ff1493",
        deepskyblue: "#00bfff",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1e90ff",
        firebrick: "#b22222",
        floralwhite: "#fffaf0",
        forestgreen: "#228b22",
        fuchsia: "#ff00ff",
        gainsboro: "#dcdcdc",
        ghostwhite: "#f8f8ff",
        goldenrod: "#daa520",
        gold: "#ffd700",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#adff2f",
        grey: "#808080",
        honeydew: "#f0fff0",
        hotpink: "#ff69b4",
        indianred: "#cd5c5c",
        indigo: "#4b0082",
        ivory: "#fffff0",
        khaki: "#f0e68c",
        lavenderblush: "#fff0f5",
        lavender: "#e6e6fa",
        lawngreen: "#7cfc00",
        lemonchiffon: "#fffacd",
        lightblue: "#add8e6",
        lightcoral: "#f08080",
        lightcyan: "#e0ffff",
        lightgoldenrodyellow: "#fafad2",
        lightgray: "#d3d3d3",
        lightgreen: "#90ee90",
        lightgrey: "#d3d3d3",
        lightpink: "#ffb6c1",
        lightsalmon: "#ffa07a",
        lightseagreen: "#20b2aa",
        lightskyblue: "#87cefa",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#b0c4de",
        lightyellow: "#ffffe0",
        lime: "#00ff00",
        limegreen: "#32cd32",
        linen: "#faf0e6",
        magenta: "#ff00ff",
        maroon: "#800000",
        mediumaquamarine: "#66cdaa",
        mediumblue: "#0000cd",
        mediumorchid: "#ba55d3",
        mediumpurple: "#9370db",
        mediumseagreen: "#3cb371",
        mediumslateblue: "#7b68ee",
        mediumspringgreen: "#00fa9a",
        mediumturquoise: "#48d1cc",
        mediumvioletred: "#c71585",
        midnightblue: "#191970",
        mintcream: "#f5fffa",
        mistyrose: "#ffe4e1",
        moccasin: "#ffe4b5",
        navajowhite: "#ffdead",
        navy: "#000080",
        oldlace: "#fdf5e6",
        olive: "#808000",
        olivedrab: "#6b8e23",
        orange: "#ffa500",
        orangered: "#ff4500",
        orchid: "#da70d6",
        palegoldenrod: "#eee8aa",
        palegreen: "#98fb98",
        paleturquoise: "#afeeee",
        palevioletred: "#db7093",
        papayawhip: "#ffefd5",
        peachpuff: "#ffdab9",
        peru: "#cd853f",
        pink: "#ffc0cb",
        plum: "#dda0dd",
        powderblue: "#b0e0e6",
        purple: "#800080",
        rebeccapurple: "#663399",
        red: "#ff0000",
        rosybrown: "#bc8f8f",
        royalblue: "#4169e1",
        saddlebrown: "#8b4513",
        salmon: "#fa8072",
        sandybrown: "#f4a460",
        seagreen: "#2e8b57",
        seashell: "#fff5ee",
        sienna: "#a0522d",
        silver: "#c0c0c0",
        skyblue: "#87ceeb",
        slateblue: "#6a5acd",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#fffafa",
        springgreen: "#00ff7f",
        steelblue: "#4682b4",
        tan: "#d2b48c",
        teal: "#008080",
        thistle: "#d8bfd8",
        tomato: "#ff6347",
        turquoise: "#40e0d0",
        violet: "#ee82ee",
        wheat: "#f5deb3",
        white: "#ffffff",
        whitesmoke: "#f5f5f5",
        yellow: "#ffff00",
        yellowgreen: "#9acd32"
    };

    function Hn(e) {
        var t = {
                r: 0,
                g: 0,
                b: 0
            },
            r = 1,
            n = null,
            o = null,
            i = null,
            a = !1,
            s = !1;
        return typeof e == "string" && (e = HP(e)), typeof e == "object" && (on(e.r) && on(e.g) && on(e.b) ? (t = Dx(e.r, e.g, e.b), a = !0, s = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : on(e.h) && on(e.s) && on(e.v) ? (n = ws(e.s), o = ws(e.v), t = zx(e.h, n, o), a = !0, s = "hsv") : on(e.h) && on(e.s) && on(e.l) && (n = ws(e.s), i = ws(e.l), t = Bx(e.h, n, i), a = !0, s = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (r = e.a)), r = oc(r), {
            ok: a,
            format: e.format || s,
            r: Math.min(255, Math.max(t.r, 0)),
            g: Math.min(255, Math.max(t.g, 0)),
            b: Math.min(255, Math.max(t.b, 0)),
            a: r
        }
    }
    var BP = "[-\\+]?\\d+%?",
        zP = "[-\\+]?\\d*\\.\\d+%?",
        zn = "(?:".concat(zP, ")|(?:").concat(BP, ")"),
        wm = "[\\s|\\(]+(".concat(zn, ")[,|\\s]+(").concat(zn, ")[,|\\s]+(").concat(zn, ")\\s*\\)?"),
        bm = "[\\s|\\(]+(".concat(zn, ")[,|\\s]+(").concat(zn, ")[,|\\s]+(").concat(zn, ")[,|\\s]+(").concat(zn, ")\\s*\\)?"),
        vr = {
            CSS_UNIT: new RegExp(zn),
            rgb: new RegExp("rgb" + wm),
            rgba: new RegExp("rgba" + bm),
            hsl: new RegExp("hsl" + wm),
            hsla: new RegExp("hsla" + bm),
            hsv: new RegExp("hsv" + wm),
            hsva: new RegExp("hsva" + bm),
            hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
            hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
        };

    function HP(e) {
        if (e = e.trim().toLowerCase(), e.length === 0) return !1;
        var t = !1;
        if (Rs[e]) e = Rs[e], t = !0;
        else if (e === "transparent") return {
            r: 0,
            g: 0,
            b: 0,
            a: 0,
            format: "name"
        };
        var r = vr.rgb.exec(e);
        return r ? {
            r: r[1],
            g: r[2],
            b: r[3]
        } : (r = vr.rgba.exec(e), r ? {
            r: r[1],
            g: r[2],
            b: r[3],
            a: r[4]
        } : (r = vr.hsl.exec(e), r ? {
            h: r[1],
            s: r[2],
            l: r[3]
        } : (r = vr.hsla.exec(e), r ? {
            h: r[1],
            s: r[2],
            l: r[3],
            a: r[4]
        } : (r = vr.hsv.exec(e), r ? {
            h: r[1],
            s: r[2],
            v: r[3]
        } : (r = vr.hsva.exec(e), r ? {
            h: r[1],
            s: r[2],
            v: r[3],
            a: r[4]
        } : (r = vr.hex8.exec(e), r ? {
            r: Rt(r[1]),
            g: Rt(r[2]),
            b: Rt(r[3]),
            a: Cm(r[4]),
            format: t ? "name" : "hex8"
        } : (r = vr.hex6.exec(e), r ? {
            r: Rt(r[1]),
            g: Rt(r[2]),
            b: Rt(r[3]),
            format: t ? "name" : "hex"
        } : (r = vr.hex4.exec(e), r ? {
            r: Rt(r[1] + r[1]),
            g: Rt(r[2] + r[2]),
            b: Rt(r[3] + r[3]),
            a: Cm(r[4] + r[4]),
            format: t ? "name" : "hex8"
        } : (r = vr.hex3.exec(e), r ? {
            r: Rt(r[1] + r[1]),
            g: Rt(r[2] + r[2]),
            b: Rt(r[3] + r[3]),
            format: t ? "name" : "hex"
        } : !1)))))))))
    }

    function on(e) {
        return !!vr.CSS_UNIT.exec(String(e))
    }
    var Ae = function() {
        function e(t, r) {
            t === void 0 && (t = ""), r === void 0 && (r = {});
            var n;
            if (t instanceof e) return t;
            typeof t == "number" && (t = Vx(t)), this.originalInput = t;
            var o = Hn(t);
            this.originalInput = t, this.r = o.r, this.g = o.g, this.b = o.b, this.a = o.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (n = r.format) !== null && n !== void 0 ? n : o.format, this.gradientType = r.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = o.ok
        }
        return e.prototype.isDark = function() {
            return this.getBrightness() < 128
        }, e.prototype.isLight = function() {
            return !this.isDark()
        }, e.prototype.getBrightness = function() {
            var t = this.toRgb();
            return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3
        }, e.prototype.getLuminance = function() {
            var t = this.toRgb(),
                r, n, o, i = t.r / 255,
                a = t.g / 255,
                s = t.b / 255;
            return i <= .03928 ? r = i / 12.92 : r = Math.pow((i + .055) / 1.055, 2.4), a <= .03928 ? n = a / 12.92 : n = Math.pow((a + .055) / 1.055, 2.4), s <= .03928 ? o = s / 12.92 : o = Math.pow((s + .055) / 1.055, 2.4), .2126 * r + .7152 * n + .0722 * o
        }, e.prototype.getAlpha = function() {
            return this.a
        }, e.prototype.setAlpha = function(t) {
            return this.a = oc(t), this.roundA = Math.round(100 * this.a) / 100, this
        }, e.prototype.isMonochrome = function() {
            var t = this.toHsl().s;
            return t === 0
        }, e.prototype.toHsv = function() {
            var t = bs(this.r, this.g, this.b);
            return {
                h: t.h * 360,
                s: t.s,
                v: t.v,
                a: this.a
            }
        }, e.prototype.toHsvString = function() {
            var t = bs(this.r, this.g, this.b),
                r = Math.round(t.h * 360),
                n = Math.round(t.s * 100),
                o = Math.round(t.v * 100);
            return this.a === 1 ? "hsv(".concat(r, ", ").concat(n, "%, ").concat(o, "%)") : "hsva(".concat(r, ", ").concat(n, "%, ").concat(o, "%, ").concat(this.roundA, ")")
        }, e.prototype.toHsl = function() {
            var t = Sm(this.r, this.g, this.b);
            return {
                h: t.h * 360,
                s: t.s,
                l: t.l,
                a: this.a
            }
        }, e.prototype.toHslString = function() {
            var t = Sm(this.r, this.g, this.b),
                r = Math.round(t.h * 360),
                n = Math.round(t.s * 100),
                o = Math.round(t.l * 100);
            return this.a === 1 ? "hsl(".concat(r, ", ").concat(n, "%, ").concat(o, "%)") : "hsla(".concat(r, ", ").concat(n, "%, ").concat(o, "%, ").concat(this.roundA, ")")
        }, e.prototype.toHex = function(t) {
            return t === void 0 && (t = !1), Es(this.r, this.g, this.b, t)
        }, e.prototype.toHexString = function(t) {
            return t === void 0 && (t = !1), "#" + this.toHex(t)
        }, e.prototype.toHex8 = function(t) {
            return t === void 0 && (t = !1), Hx(this.r, this.g, this.b, this.a, t)
        }, e.prototype.toHex8String = function(t) {
            return t === void 0 && (t = !1), "#" + this.toHex8(t)
        }, e.prototype.toHexShortString = function(t) {
            return t === void 0 && (t = !1), this.a === 1 ? this.toHexString(t) : this.toHex8String(t)
        }, e.prototype.toRgb = function() {
            return {
                r: Math.round(this.r),
                g: Math.round(this.g),
                b: Math.round(this.b),
                a: this.a
            }
        }, e.prototype.toRgbString = function() {
            var t = Math.round(this.r),
                r = Math.round(this.g),
                n = Math.round(this.b);
            return this.a === 1 ? "rgb(".concat(t, ", ").concat(r, ", ").concat(n, ")") : "rgba(".concat(t, ", ").concat(r, ", ").concat(n, ", ").concat(this.roundA, ")")
        }, e.prototype.toPercentageRgb = function() {
            var t = function(r) {
                return "".concat(Math.round(je(r, 255) * 100), "%")
            };
            return {
                r: t(this.r),
                g: t(this.g),
                b: t(this.b),
                a: this.a
            }
        }, e.prototype.toPercentageRgbString = function() {
            var t = function(r) {
                return Math.round(je(r, 255) * 100)
            };
            return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")")
        }, e.prototype.toName = function() {
            if (this.a === 0) return "transparent";
            if (this.a < 1) return !1;
            for (var t = "#" + Es(this.r, this.g, this.b, !1), r = 0, n = Object.entries(Rs); r < n.length; r++) {
                var o = n[r],
                    i = o[0],
                    a = o[1];
                if (t === a) return i
            }
            return !1
        }, e.prototype.toString = function(t) {
            var r = !!t;
            t = t ?? this.format;
            var n = !1,
                o = this.a < 1 && this.a >= 0,
                i = !r && o && (t.startsWith("hex") || t === "name");
            return i ? t === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (t === "rgb" && (n = this.toRgbString()), t === "prgb" && (n = this.toPercentageRgbString()), (t === "hex" || t === "hex6") && (n = this.toHexString()), t === "hex3" && (n = this.toHexString(!0)), t === "hex4" && (n = this.toHex8String(!0)), t === "hex8" && (n = this.toHex8String()), t === "name" && (n = this.toName()), t === "hsl" && (n = this.toHslString()), t === "hsv" && (n = this.toHsvString()), n || this.toHexString())
        }, e.prototype.toNumber = function() {
            return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b)
        }, e.prototype.clone = function() {
            return new e(this.toString())
        }, e.prototype.lighten = function(t) {
            t === void 0 && (t = 10);
            var r = this.toHsl();
            return r.l += t / 100, r.l = Cs(r.l), new e(r)
        }, e.prototype.brighten = function(t) {
            t === void 0 && (t = 10);
            var r = this.toRgb();
            return r.r = Math.max(0, Math.min(255, r.r - Math.round(255 * -(t / 100)))), r.g = Math.max(0, Math.min(255, r.g - Math.round(255 * -(t / 100)))), r.b = Math.max(0, Math.min(255, r.b - Math.round(255 * -(t / 100)))), new e(r)
        }, e.prototype.darken = function(t) {
            t === void 0 && (t = 10);
            var r = this.toHsl();
            return r.l -= t / 100, r.l = Cs(r.l), new e(r)
        }, e.prototype.tint = function(t) {
            return t === void 0 && (t = 10), this.mix("white", t)
        }, e.prototype.shade = function(t) {
            return t === void 0 && (t = 10), this.mix("black", t)
        }, e.prototype.desaturate = function(t) {
            t === void 0 && (t = 10);
            var r = this.toHsl();
            return r.s -= t / 100, r.s = Cs(r.s), new e(r)
        }, e.prototype.saturate = function(t) {
            t === void 0 && (t = 10);
            var r = this.toHsl();
            return r.s += t / 100, r.s = Cs(r.s), new e(r)
        }, e.prototype.greyscale = function() {
            return this.desaturate(100)
        }, e.prototype.spin = function(t) {
            var r = this.toHsl(),
                n = (r.h + t) % 360;
            return r.h = n < 0 ? 360 + n : n, new e(r)
        }, e.prototype.mix = function(t, r) {
            r === void 0 && (r = 50);
            var n = this.toRgb(),
                o = new e(t).toRgb(),
                i = r / 100,
                a = {
                    r: (o.r - n.r) * i + n.r,
                    g: (o.g - n.g) * i + n.g,
                    b: (o.b - n.b) * i + n.b,
                    a: (o.a - n.a) * i + n.a
                };
            return new e(a)
        }, e.prototype.analogous = function(t, r) {
            t === void 0 && (t = 6), r === void 0 && (r = 30);
            var n = this.toHsl(),
                o = 360 / r,
                i = [this];
            for (n.h = (n.h - (o * t >> 1) + 720) % 360; --t;) n.h = (n.h + o) % 360, i.push(new e(n));
            return i
        }, e.prototype.complement = function() {
            var t = this.toHsl();
            return t.h = (t.h + 180) % 360, new e(t)
        }, e.prototype.monochromatic = function(t) {
            t === void 0 && (t = 6);
            for (var r = this.toHsv(), n = r.h, o = r.s, i = r.v, a = [], s = 1 / t; t--;) a.push(new e({
                h: n,
                s: o,
                v: i
            })), i = (i + s) % 1;
            return a
        }, e.prototype.splitcomplement = function() {
            var t = this.toHsl(),
                r = t.h;
            return [this, new e({
                h: (r + 72) % 360,
                s: t.s,
                l: t.l
            }), new e({
                h: (r + 216) % 360,
                s: t.s,
                l: t.l
            })]
        }, e.prototype.onBackground = function(t) {
            var r = this.toRgb(),
                n = new e(t).toRgb(),
                o = r.a + n.a * (1 - r.a);
            return new e({
                r: (r.r * r.a + n.r * n.a * (1 - r.a)) / o,
                g: (r.g * r.a + n.g * n.a * (1 - r.a)) / o,
                b: (r.b * r.a + n.b * n.a * (1 - r.a)) / o,
                a: o
            })
        }, e.prototype.triad = function() {
            return this.polyad(3)
        }, e.prototype.tetrad = function() {
            return this.polyad(4)
        }, e.prototype.polyad = function(t) {
            for (var r = this.toHsl(), n = r.h, o = [this], i = 360 / t, a = 1; a < t; a++) o.push(new e({
                h: (n + a * i) % 360,
                s: r.s,
                l: r.l
            }));
            return o
        }, e.prototype.equals = function(t) {
            return this.toRgbString() === new e(t).toRgbString()
        }, e
    }();
    var ic = 2,
        Ux = .16,
        VP = .05,
        UP = .05,
        WP = .15,
        Gx = 5,
        Jx = 4,
        QP = [{
            index: 7,
            opacity: .15
        }, {
            index: 6,
            opacity: .25
        }, {
            index: 5,
            opacity: .3
        }, {
            index: 5,
            opacity: .45
        }, {
            index: 5,
            opacity: .65
        }, {
            index: 5,
            opacity: .85
        }, {
            index: 4,
            opacity: .9
        }, {
            index: 3,
            opacity: .95
        }, {
            index: 2,
            opacity: .97
        }, {
            index: 1,
            opacity: .98
        }];

    function Wx(e) {
        var t = e.r,
            r = e.g,
            n = e.b,
            o = bs(t, r, n);
        return {
            h: o.h * 360,
            s: o.s,
            v: o.v
        }
    }

    function ac(e) {
        var t = e.r,
            r = e.g,
            n = e.b;
        return "#".concat(Es(t, r, n, !1))
    }

    function KP(e, t, r) {
        var n = r / 100,
            o = {
                r: (t.r - e.r) * n + e.r,
                g: (t.g - e.g) * n + e.g,
                b: (t.b - e.b) * n + e.b
            };
        return o
    }

    function Qx(e, t, r) {
        var n;
        return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? n = r ? Math.round(e.h) - ic * t : Math.round(e.h) + ic * t : n = r ? Math.round(e.h) + ic * t : Math.round(e.h) - ic * t, n < 0 ? n += 360 : n >= 360 && (n -= 360), n
    }

    function Kx(e, t, r) {
        if (e.h === 0 && e.s === 0) return e.s;
        var n;
        return r ? n = e.s - Ux * t : t === Jx ? n = e.s + Ux : n = e.s + VP * t, n > 1 && (n = 1), r && t === Gx && n > .1 && (n = .1), n < .06 && (n = .06), Number(n.toFixed(2))
    }

    function Xx(e, t, r) {
        var n;
        return r ? n = e.v + UP * t : n = e.v - WP * t, n > 1 && (n = 1), Number(n.toFixed(2))
    }

    function Je(e) {
        for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = [], n = Hn(e), o = Gx; o > 0; o -= 1) {
            var i = Wx(n),
                a = ac(Hn({
                    h: Qx(i, o, !0),
                    s: Kx(i, o, !0),
                    v: Xx(i, o, !0)
                }));
            r.push(a)
        }
        r.push(ac(n));
        for (var s = 1; s <= Jx; s += 1) {
            var l = Wx(n),
                u = ac(Hn({
                    h: Qx(l, s),
                    s: Kx(l, s),
                    v: Xx(l, s)
                }));
            r.push(u)
        }
        return t.theme === "dark" ? QP.map(function(f) {
            var c = f.index,
                d = f.opacity,
                g = ac(KP(Hn(t.backgroundColor || "#141414"), Hn(r[c]), d * 100));
            return g
        }) : r
    }
    var Em = {
            red: "#F5222D",
            volcano: "#FA541C",
            orange: "#FA8C16",
            gold: "#FAAD14",
            yellow: "#FADB14",
            lime: "#A0D911",
            green: "#52C41A",
            cyan: "#13C2C2",
            blue: "#1677FF",
            geekblue: "#2F54EB",
            purple: "#722ED1",
            magenta: "#EB2F96",
            grey: "#666666"
        },
        Ye = {},
        Rm = {};
    Object.keys(Em).forEach(function(e) {
        Ye[e] = Je(Em[e]), Ye[e].primary = Ye[e][5], Rm[e] = Je(Em[e], {
            theme: "dark",
            backgroundColor: "#141414"
        }), Rm[e].primary = Rm[e][5]
    });
    var Kj = Ye.red,
        Xj = Ye.volcano,
        Gj = Ye.gold,
        Jj = Ye.orange,
        Yj = Ye.yellow,
        Zj = Ye.lime,
        qj = Ye.green,
        eF = Ye.cyan,
        Yx = Ye.blue,
        tF = Ye.geekblue,
        rF = Ye.purple,
        nF = Ye.magenta,
        oF = Ye.grey,
        iF = Ye.grey;
    var XP = e => {
            let {
                controlHeight: t
            } = e;
            return {
                controlHeightSM: t * .75,
                controlHeightXS: t * .5,
                controlHeightLG: t * 1.25
            }
        },
        sc = XP;

    function Om(e) {
        let {
            sizeUnit: t,
            sizeStep: r
        } = e;
        return {
            sizeXXL: t * (r + 8),
            sizeXL: t * (r + 4),
            sizeLG: t * (r + 2),
            sizeMD: t * (r + 1),
            sizeMS: t * r,
            size: t * r,
            sizeSM: t * (r - 1),
            sizeXS: t * (r - 2),
            sizeXXS: t * (r - 3)
        }
    }
    var Os = {
            blue: "#1677ff",
            purple: "#722ED1",
            cyan: "#13C2C2",
            green: "#52C41A",
            magenta: "#EB2F96",
            pink: "#eb2f96",
            red: "#F5222D",
            orange: "#FA8C16",
            yellow: "#FADB14",
            volcano: "#FA541C",
            geekblue: "#2F54EB",
            gold: "#FAAD14",
            lime: "#A0D911"
        },
        GP = Object.assign(Object.assign({}, Os), {
            colorPrimary: "#1677ff",
            colorSuccess: "#52c41a",
            colorWarning: "#faad14",
            colorError: "#ff4d4f",
            colorInfo: "#1677ff",
            colorTextBase: "",
            colorBgBase: "",
            fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
            fontFamilyCode: "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
            fontSize: 14,
            lineWidth: 1,
            lineType: "solid",
            motionUnit: .1,
            motionBase: 0,
            motionEaseOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
            motionEaseInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
            motionEaseOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
            motionEaseInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
            motionEaseOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
            motionEaseInBack: "cubic-bezier(0.71, -0.46, 0.88, 0.6)",
            motionEaseInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
            motionEaseOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
            borderRadius: 6,
            sizeUnit: 4,
            sizeStep: 4,
            sizePopupArrow: 16,
            controlHeight: 32,
            zIndexBase: 0,
            zIndexPopupBase: 1e3,
            opacityImage: 1,
            wireframe: !1,
            motion: !0
        }),
        an = GP;

    function Ps(e, t) {
        let {
            generateColorPalettes: r,
            generateNeutralColorPalettes: n
        } = t, {
            colorSuccess: o,
            colorWarning: i,
            colorError: a,
            colorInfo: s,
            colorPrimary: l,
            colorBgBase: u,
            colorTextBase: f
        } = e, c = r(l), d = r(o), g = r(i), v = r(a), y = r(s), b = n(u, f);
        return Object.assign(Object.assign({}, b), {
            colorPrimaryBg: c[1],
            colorPrimaryBgHover: c[2],
            colorPrimaryBorder: c[3],
            colorPrimaryBorderHover: c[4],
            colorPrimaryHover: c[5],
            colorPrimary: c[6],
            colorPrimaryActive: c[7],
            colorPrimaryTextHover: c[8],
            colorPrimaryText: c[9],
            colorPrimaryTextActive: c[10],
            colorSuccessBg: d[1],
            colorSuccessBgHover: d[2],
            colorSuccessBorder: d[3],
            colorSuccessBorderHover: d[4],
            colorSuccessHover: d[4],
            colorSuccess: d[6],
            colorSuccessActive: d[7],
            colorSuccessTextHover: d[8],
            colorSuccessText: d[9],
            colorSuccessTextActive: d[10],
            colorErrorBg: v[1],
            colorErrorBgHover: v[2],
            colorErrorBorder: v[3],
            colorErrorBorderHover: v[4],
            colorErrorHover: v[5],
            colorError: v[6],
            colorErrorActive: v[7],
            colorErrorTextHover: v[8],
            colorErrorText: v[9],
            colorErrorTextActive: v[10],
            colorWarningBg: g[1],
            colorWarningBgHover: g[2],
            colorWarningBorder: g[3],
            colorWarningBorderHover: g[4],
            colorWarningHover: g[4],
            colorWarning: g[6],
            colorWarningActive: g[7],
            colorWarningTextHover: g[8],
            colorWarningText: g[9],
            colorWarningTextActive: g[10],
            colorInfoBg: y[1],
            colorInfoBgHover: y[2],
            colorInfoBorder: y[3],
            colorInfoBorderHover: y[4],
            colorInfoHover: y[4],
            colorInfo: y[6],
            colorInfoActive: y[7],
            colorInfoTextHover: y[8],
            colorInfoText: y[9],
            colorInfoTextActive: y[10],
            colorBgMask: new Ae("#000").setAlpha(.45).toRgbString(),
            colorWhite: "#fff"
        })
    }
    var JP = e => {
            let t = e,
                r = e,
                n = e,
                o = e;
            return e < 6 && e >= 5 ? t = e + 1 : e < 16 && e >= 6 ? t = e + 2 : e >= 16 && (t = 16), e < 7 && e >= 5 ? r = 4 : e < 8 && e >= 7 ? r = 5 : e < 14 && e >= 8 ? r = 6 : e < 16 && e >= 14 ? r = 7 : e >= 16 && (r = 8), e < 6 && e >= 2 ? n = 1 : e >= 6 && (n = 2), e > 4 && e < 8 ? o = 4 : e >= 8 && (o = 6), {
                borderRadius: e > 16 ? 16 : e,
                borderRadiusXS: n,
                borderRadiusSM: r,
                borderRadiusLG: t,
                borderRadiusOuter: o
            }
        },
        Zx = JP;

    function Pm(e) {
        let {
            motionUnit: t,
            motionBase: r,
            borderRadius: n,
            lineWidth: o
        } = e;
        return Object.assign({
            motionDurationFast: `${(r+t).toFixed(1)}s`,
            motionDurationMid: `${(r+t*2).toFixed(1)}s`,
            motionDurationSlow: `${(r+t*3).toFixed(1)}s`,
            lineWidthBold: o + 1
        }, Zx(n))
    }
    var Ir = (e, t) => new Ae(e).setAlpha(t).toRgbString(),
        Di = (e, t) => new Ae(e).darken(t).toHexString();
    var qx = e => {
            let t = Je(e);
            return {
                1: t[0],
                2: t[1],
                3: t[2],
                4: t[3],
                5: t[4],
                6: t[5],
                7: t[6],
                8: t[4],
                9: t[5],
                10: t[6]
            }
        },
        eS = (e, t) => {
            let r = e || "#fff",
                n = t || "#000";
            return {
                colorBgBase: r,
                colorTextBase: n,
                colorText: Ir(n, .88),
                colorTextSecondary: Ir(n, .65),
                colorTextTertiary: Ir(n, .45),
                colorTextQuaternary: Ir(n, .25),
                colorFill: Ir(n, .15),
                colorFillSecondary: Ir(n, .06),
                colorFillTertiary: Ir(n, .04),
                colorFillQuaternary: Ir(n, .02),
                colorBgLayout: Di(r, 4),
                colorBgContainer: Di(r, 0),
                colorBgElevated: Di(r, 0),
                colorBgSpotlight: Ir(n, .85),
                colorBorder: Di(r, 15),
                colorBorderSecondary: Di(r, 6)
            }
        };

    function Am(e) {
        let t = new Array(10).fill(null).map((r, n) => {
            let o = n - 1,
                i = e * Math.pow(2.71828, o / 5),
                a = n > 1 ? Math.floor(i) : Math.ceil(i);
            return Math.floor(a / 2) * 2
        });
        return t[1] = e, t.map(r => {
            let n = r + 8;
            return {
                size: r,
                lineHeight: n / r
            }
        })
    }
    var YP = e => {
            let t = Am(e),
                r = t.map(o => o.size),
                n = t.map(o => o.lineHeight);
            return {
                fontSizeSM: r[0],
                fontSize: r[1],
                fontSizeLG: r[2],
                fontSizeXL: r[3],
                fontSizeHeading1: r[6],
                fontSizeHeading2: r[5],
                fontSizeHeading3: r[4],
                fontSizeHeading4: r[3],
                fontSizeHeading5: r[2],
                lineHeight: n[1],
                lineHeightLG: n[2],
                lineHeightSM: n[0],
                lineHeightHeading1: n[6],
                lineHeightHeading2: n[5],
                lineHeightHeading3: n[4],
                lineHeightHeading4: n[3],
                lineHeightHeading5: n[2]
            }
        },
        lc = YP;

    function yr(e) {
        let t = Object.keys(Os).map(r => {
            let n = Je(e[r]);
            return new Array(10).fill(1).reduce((o, i, a) => (o[`${r}-${a+1}`] = n[a], o[`${r}${a+1}`] = n[a], o), {})
        }).reduce((r, n) => (r = Object.assign(Object.assign({}, r), n), r), {});
        return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), Ps(e, {
            generateColorPalettes: qx,
            generateNeutralColorPalettes: eS
        })), lc(e.fontSize)), Om(e)), sc(e)), Pm(e))
    }

    function Tm(e) {
        return e >= 0 && e <= 255
    }

    function ZP(e, t) {
        let {
            r,
            g: n,
            b: o,
            a: i
        } = new Ae(e).toRgb();
        if (i < 1) return e;
        let {
            r: a,
            g: s,
            b: l
        } = new Ae(t).toRgb();
        for (let u = .01; u <= 1; u += .01) {
            let f = Math.round((r - a * (1 - u)) / u),
                c = Math.round((n - s * (1 - u)) / u),
                d = Math.round((o - l * (1 - u)) / u);
            if (Tm(f) && Tm(c) && Tm(d)) return new Ae({
                r: f,
                g: c,
                b: d,
                a: Math.round(u * 100) / 100
            }).toRgbString()
        }
        return new Ae({
            r,
            g: n,
            b: o,
            a: 1
        }).toRgbString()
    }
    var As = ZP;
    var qP = function(e, t) {
        var r = {};
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
        if (e != null && typeof Object.getOwnPropertySymbols == "function")
            for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
        return r
    };

    function Ts(e) {
        let {
            override: t
        } = e, r = qP(e, ["override"]), n = Object.assign({}, t);
        Object.keys(an).forEach(d => {
            delete n[d]
        });
        let o = Object.assign(Object.assign({}, r), n),
            i = 480,
            a = 576,
            s = 768,
            l = 992,
            u = 1200,
            f = 1600;
        if (o.motion === !1) {
            let d = "0s";
            o.motionDurationFast = d, o.motionDurationMid = d, o.motionDurationSlow = d
        }
        return Object.assign(Object.assign(Object.assign({}, o), {
            colorLink: o.colorInfoText,
            colorLinkHover: o.colorInfoHover,
            colorLinkActive: o.colorInfoActive,
            colorFillContent: o.colorFillSecondary,
            colorFillContentHover: o.colorFill,
            colorFillAlter: o.colorFillQuaternary,
            colorBgContainerDisabled: o.colorFillTertiary,
            colorBorderBg: o.colorBgContainer,
            colorSplit: As(o.colorBorderSecondary, o.colorBgContainer),
            colorTextPlaceholder: o.colorTextQuaternary,
            colorTextDisabled: o.colorTextQuaternary,
            colorTextHeading: o.colorText,
            colorTextLabel: o.colorTextSecondary,
            colorTextDescription: o.colorTextTertiary,
            colorTextLightSolid: o.colorWhite,
            colorHighlight: o.colorError,
            colorBgTextHover: o.colorFillSecondary,
            colorBgTextActive: o.colorFill,
            colorIcon: o.colorTextTertiary,
            colorIconHover: o.colorText,
            colorErrorOutline: As(o.colorErrorBg, o.colorBgContainer),
            colorWarningOutline: As(o.colorWarningBg, o.colorBgContainer),
            fontSizeIcon: o.fontSizeSM,
            lineWidthFocus: o.lineWidth * 4,
            lineWidth: o.lineWidth,
            controlOutlineWidth: o.lineWidth * 2,
            controlInteractiveSize: o.controlHeight / 2,
            controlItemBgHover: o.colorFillTertiary,
            controlItemBgActive: o.colorPrimaryBg,
            controlItemBgActiveHover: o.colorPrimaryBgHover,
            controlItemBgActiveDisabled: o.colorFill,
            controlTmpOutline: o.colorFillQuaternary,
            controlOutline: As(o.colorPrimaryBg, o.colorBgContainer),
            lineType: o.lineType,
            borderRadius: o.borderRadius,
            borderRadiusXS: o.borderRadiusXS,
            borderRadiusSM: o.borderRadiusSM,
            borderRadiusLG: o.borderRadiusLG,
            fontWeightStrong: 600,
            opacityLoading: .65,
            linkDecoration: "none",
            linkHoverDecoration: "none",
            linkFocusDecoration: "none",
            controlPaddingHorizontal: 12,
            controlPaddingHorizontalSM: 8,
            paddingXXS: o.sizeXXS,
            paddingXS: o.sizeXS,
            paddingSM: o.sizeSM,
            padding: o.size,
            paddingMD: o.sizeMD,
            paddingLG: o.sizeLG,
            paddingXL: o.sizeXL,
            paddingContentHorizontalLG: o.sizeLG,
            paddingContentVerticalLG: o.sizeMS,
            paddingContentHorizontal: o.sizeMS,
            paddingContentVertical: o.sizeSM,
            paddingContentHorizontalSM: o.size,
            paddingContentVerticalSM: o.sizeXS,
            marginXXS: o.sizeXXS,
            marginXS: o.sizeXS,
            marginSM: o.sizeSM,
            margin: o.size,
            marginMD: o.sizeMD,
            marginLG: o.sizeLG,
            marginXL: o.sizeXL,
            marginXXL: o.sizeXXL,
            boxShadow: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
            boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
            boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
            screenXS: i,
            screenXSMin: i,
            screenXSMax: a - 1,
            screenSM: a,
            screenSMMin: a,
            screenSMMax: s - 1,
            screenMD: s,
            screenMDMin: s,
            screenMDMax: l - 1,
            screenLG: l,
            screenLGMin: l,
            screenLGMax: u - 1,
            screenXL: u,
            screenXLMin: u,
            screenXLMax: f - 1,
            screenXXL: f,
            screenXXLMin: f,
            boxShadowPopoverArrow: "2px 2px 5px rgba(0, 0, 0, 0.05)",
            boxShadowCard: `
      0 1px 2px -2px ${new Ae("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new Ae("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new Ae("rgba(0, 0, 0, 0.09)").toRgbString()}
    `,
            boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
            boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
            boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
            boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
            boxShadowTabsOverflowLeft: "inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",
            boxShadowTabsOverflowRight: "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",
            boxShadowTabsOverflowTop: "inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",
            boxShadowTabsOverflowBottom: "inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)"
        }), n)
    }
    var tS = T($());
    var Bi = T($());
    var rS = ge() ? Bi.useLayoutEffect : Bi.useEffect,
        eA = function(t, r) {
            var n = Bi.useRef(!0);
            rS(function() {
                return t(n.current)
            }, r), rS(function() {
                return n.current = !1,
                    function() {
                        n.current = !0
                    }
            }, [])
        };
    var Ns = eA;
    var zi = T($());

    function jr(e) {
        var t = zi.useRef(!1),
            r = zi.useState(e),
            n = F(r, 2),
            o = n[0],
            i = n[1];
        zi.useEffect(function() {
            return t.current = !1,
                function() {
                    t.current = !0
                }
        }, []);

        function a(s, l) {
            l && t.current || i(s)
        }
        return [o, a]
    }
    var lS = T($());
    var nS = T($()),
        Nm = "anticon",
        tA = (e, t) => t || (e ? `ant-${e}` : "ant"),
        Ee = nS.createContext({
            getPrefixCls: tA,
            iconPrefixCls: Nm
        }),
        {
            Consumer: rA
        } = Ee;
    var Hi = e => ({
            boxSizing: "border-box",
            margin: 0,
            padding: 0,
            color: e.colorText,
            fontSize: e.fontSize,
            lineHeight: e.lineHeight,
            listStyle: "none",
            fontFamily: e.fontFamily
        }),
        oS = () => ({
            display: "inline-flex",
            alignItems: "center",
            color: "inherit",
            fontStyle: "normal",
            lineHeight: 0,
            textAlign: "center",
            textTransform: "none",
            verticalAlign: "-0.125em",
            textRendering: "optimizeLegibility",
            "-webkit-font-smoothing": "antialiased",
            "-moz-osx-font-smoothing": "grayscale",
            "> *": {
                lineHeight: 1
            },
            svg: {
                display: "inline-block"
            }
        }),
        iS = () => ({
            "&::before": {
                display: "table",
                content: '""'
            },
            "&::after": {
                display: "table",
                clear: "both",
                content: '""'
            }
        }),
        aS = e => ({
            a: {
                color: e.colorLink,
                textDecoration: e.linkDecoration,
                backgroundColor: "transparent",
                outline: "none",
                cursor: "pointer",
                transition: `color ${e.motionDurationSlow}`,
                "-webkit-text-decoration-skip": "objects",
                "&:hover": {
                    color: e.colorLinkHover
                },
                "&:active": {
                    color: e.colorLinkActive
                },
                "&:active,\n  &:hover": {
                    textDecoration: e.linkHoverDecoration,
                    outline: 0
                },
                "&:focus": {
                    textDecoration: e.linkFocusDecoration,
                    outline: 0
                },
                "&[disabled]": {
                    color: e.colorTextDisabled,
                    cursor: "not-allowed"
                }
            }
        }),
        sS = (e, t) => {
            let {
                fontFamily: r,
                fontSize: n
            } = e, o = `[class^="${t}"], [class*=" ${t}"]`;
            return {
                [o]: {
                    fontFamily: r,
                    fontSize: n,
                    boxSizing: "border-box",
                    "&::before, &::after": {
                        boxSizing: "border-box"
                    },
                    [o]: {
                        boxSizing: "border-box",
                        "&::before, &::after": {
                            boxSizing: "border-box"
                        }
                    }
                }
            }
        },
        nA = e => ({
            outline: `${e.lineWidthFocus}px solid ${e.colorPrimaryBorder}`,
            outlineOffset: 1,
            transition: "outline-offset 0s, outline 0s"
        }),
        uc = e => ({
            "&:focus-visible": Object.assign({}, nA(e))
        });

    function Pt(e, t, r, n) {
        return o => {
            let [i, a, s] = Fr(), {
                getPrefixCls: l,
                iconPrefixCls: u,
                csp: f
            } = (0, lS.useContext)(Ee), c = l(), d = {
                theme: i,
                token: a,
                hashId: s,
                nonce: () => f?.nonce
            };
            return Dn(Object.assign(Object.assign({}, d), {
                path: ["Shared", c]
            }), () => [{
                "&": aS(a)
            }]), [Dn(Object.assign(Object.assign({}, d), {
                path: [e, o, u]
            }), () => {
                let {
                    token: g,
                    flush: v
                } = cc(a), y = Object.assign({}, a[e]);
                if (n?.deprecatedTokens) {
                    let {
                        deprecatedTokens: S
                    } = n;
                    S.forEach(C => {
                        let [w, O] = C;
                        var A;
                        (y?.[w] || y?.[O]) && ((A = y[O]) !== null && A !== void 0 || (y[O] = y?.[w]))
                    })
                }
                let b = typeof r == "function" ? r(Ot(g, y ?? {})) : r,
                    p = Object.assign(Object.assign({}, b), y),
                    m = `.${o}`,
                    h = Ot(g, {
                        componentCls: m,
                        prefixCls: o,
                        iconCls: `.${u}`,
                        antCls: `.${c}`
                    }, p),
                    x = t(h, {
                        hashId: s,
                        prefixCls: o,
                        rootPrefixCls: c,
                        iconPrefixCls: u,
                        overrideComponentToken: y
                    });
                return v(e, p), [n?.resetStyle === !1 ? null : sS(a, o), x]
            }), s]
        }
    }
    var uS = typeof CSSINJS_STATISTIC < "u",
        km = !0;

    function Ot() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        if (!uS) return Object.assign.apply(Object, [{}].concat(t));
        km = !1;
        let n = {};
        return t.forEach(o => {
            Object.keys(o).forEach(a => {
                Object.defineProperty(n, a, {
                    configurable: !0,
                    enumerable: !0,
                    get: () => o[a]
                })
            })
        }), km = !0, n
    }
    var oA = {};

    function iA() {}

    function cc(e) {
        let t, r = e,
            n = iA;
        return uS && (t = new Set, r = new Proxy(e, {
            get(o, i) {
                return km && t.add(i), o[i]
            }
        }), n = (o, i) => {
            oA[o] = {
                global: Array.from(t),
                component: i
            }
        }), {
            token: r,
            keys: t,
            flush: n
        }
    }
    var aA = $r(yr);
    var Vi = {
            token: an,
            hashed: !0
        },
        Lm = _m.default.createContext(Vi);

    function Fr() {
        let {
            token: e,
            hashed: t,
            theme: r,
            components: n
        } = _m.default.useContext(Lm), o = `${Fx}-${t||""}`, i = r || aA, [a, s] = Tu(i, [an, e], {
            salt: o,
            override: Object.assign({
                override: e
            }, n),
            formatToken: Ts
        });
        return [i, a, t ? s : ""]
    }
    var sA = `-ant-${Date.now()}-${Math.random()}`;

    function lA(e, t) {
        let r = {},
            n = (a, s) => {
                let l = a.clone();
                return l = s?.(l) || l, l.toRgbString()
            },
            o = (a, s) => {
                let l = new Ae(a),
                    u = Je(l.toRgbString());
                r[`${s}-color`] = n(l), r[`${s}-color-disabled`] = u[1], r[`${s}-color-hover`] = u[4], r[`${s}-color-active`] = u[6], r[`${s}-color-outline`] = l.clone().setAlpha(.2).toRgbString(), r[`${s}-color-deprecated-bg`] = u[0], r[`${s}-color-deprecated-border`] = u[2]
            };
        if (t.primaryColor) {
            o(t.primaryColor, "primary");
            let a = new Ae(t.primaryColor),
                s = Je(a.toRgbString());
            s.forEach((u, f) => {
                r[`primary-${f+1}`] = u
            }), r["primary-color-deprecated-l-35"] = n(a, u => u.lighten(35)), r["primary-color-deprecated-l-20"] = n(a, u => u.lighten(20)), r["primary-color-deprecated-t-20"] = n(a, u => u.tint(20)), r["primary-color-deprecated-t-50"] = n(a, u => u.tint(50)), r["primary-color-deprecated-f-12"] = n(a, u => u.setAlpha(u.getAlpha() * .12));
            let l = new Ae(s[0]);
            r["primary-color-active-deprecated-f-30"] = n(l, u => u.setAlpha(u.getAlpha() * .3)), r["primary-color-active-deprecated-d-02"] = n(l, u => u.darken(2))
        }
        return t.successColor && o(t.successColor, "success"), t.warningColor && o(t.warningColor, "warning"), t.errorColor && o(t.errorColor, "error"), t.infoColor && o(t.infoColor, "info"), `
  :root {
    ${Object.keys(r).map(a=>`--${e}-${a}: ${r[a]};`).join(`
`)}
  }
  `.trim()
    }

    function cS(e, t) {
        let r = lA(e, t);
        ge() && gr(r, `${sA}-dynamic-theme`)
    }
    var Ui = T($()),
        $m = Ui.createContext(!1),
        fS = e => {
            let {
                children: t,
                disabled: r
            } = e, n = Ui.useContext($m);
            return Ui.createElement($m.Provider, {
                value: r ?? n
            }, t)
        },
        fc = $m;
    var Im = T($());
    var pc = T($());
    var Mm = T($());
    var uA = e => {
            let t = Mm.default.useContext(bo);
            return Mm.default.useMemo(() => e ? typeof e == "string" ? e ?? t : e instanceof Function ? e(t) : t : t, [e, t])
        },
        dc = uA;
    var dS = pc.createContext(void 0),
        pS = e => {
            let {
                children: t,
                size: r
            } = e, n = dc(r);
            return pc.createElement(dS.Provider, {
                value: n
            }, t)
        },
        bo = dS;

    function cA() {
        let e = (0, Im.useContext)(fc),
            t = (0, Im.useContext)(bo);
        return {
            componentDisabled: e,
            componentSize: t
        }
    }
    var mS = cA;

    function jm(e, t) {
        let r = e || {},
            n = r.inherit === !1 || !t ? Vi : t;
        return rn(() => {
            if (!e) return t;
            let i = Object.assign({}, n.components);
            return Object.keys(e.components || {}).forEach(a => {
                i[a] = Object.assign(Object.assign({}, i[a]), e.components[a])
            }), Object.assign(Object.assign(Object.assign({}, n), r), {
                token: Object.assign(Object.assign({}, n.token), r.token),
                components: i
            })
        }, [r, n], (i, a) => i.some((s, l) => {
            let u = a[l];
            return !cs(s, u, !0)
        }))
    }
    var AS = T(be());
    var Tt = T($()),
        Qm = T($());
    var mc = T($()),
        fA = ["children"],
        Fm = mc.createContext({});

    function gc(e) {
        var t = e.children,
            r = me(e, fA);
        return mc.createElement(Fm.Provider, {
            value: r
        }, t)
    }
    var gS = T($()),
        dA = function(e) {
            Jt(r, e);
            var t = Co(r);

            function r() {
                return ee(this, r), t.apply(this, arguments)
            }
            return te(r, [{
                key: "render",
                value: function() {
                    return this.props.children
                }
            }]), r
        }(gS.Component),
        hS = dA;
    var Rc = T($()),
        Un = T($());
    var sn = "none",
        ks = "appear",
        _s = "enter",
        Ls = "leave",
        Dm = "none",
        At = "prepare",
        ln = "start",
        Vn = "active",
        hc = "end",
        vc = "prepared";
    var Sc = T($()),
        Vm = T($());

    function vS(e, t) {
        var r = {};
        return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit".concat(e)] = "webkit".concat(t), r["Moz".concat(e)] = "moz".concat(t), r["ms".concat(e)] = "MS".concat(t), r["O".concat(e)] = "o".concat(t.toLowerCase()), r
    }

    function pA(e, t) {
        var r = {
            animationend: vS("Animation", "AnimationEnd"),
            transitionend: vS("Transition", "TransitionEnd")
        };
        return e && ("AnimationEvent" in t || delete r.animationend.animation, "TransitionEvent" in t || delete r.transitionend.transition), r
    }
    var mA = pA(ge(), typeof window < "u" ? window : {}),
        xS = {};
    ge() && (yS = document.createElement("div"), xS = yS.style);
    var yS, yc = {};

    function SS(e) {
        if (yc[e]) return yc[e];
        var t = mA[e];
        if (t)
            for (var r = Object.keys(t), n = r.length, o = 0; o < n; o += 1) {
                var i = r[o];
                if (Object.prototype.hasOwnProperty.call(t, i) && i in xS) return yc[e] = t[i], yc[e]
            }
        return ""
    }
    var CS = SS("animationend"),
        wS = SS("transitionend"),
        xc = !!(CS && wS),
        Bm = CS || "animationend",
        zm = wS || "transitionend";

    function Hm(e, t) {
        if (!e) return null;
        if (U(e) === "object") {
            var r = t.replace(/-\w/g, function(n) {
                return n[1].toUpperCase()
            });
            return e[r]
        }
        return "".concat(e, "-").concat(t)
    }
    var bS = function(e) {
        var t = (0, Vm.useRef)(),
            r = (0, Vm.useRef)(e);
        r.current = e;
        var n = Sc.useCallback(function(a) {
            r.current(a)
        }, []);

        function o(a) {
            a && (a.removeEventListener(zm, n), a.removeEventListener(Bm, n))
        }

        function i(a) {
            t.current && t.current !== a && o(t.current), a && a !== t.current && (a.addEventListener(zm, n), a.addEventListener(Bm, n), t.current = a)
        }
        return Sc.useEffect(function() {
            return function() {
                o(t.current)
            }
        }, []), [i, o]
    };
    var Cc = T($());
    var gA = ge() ? Cc.useLayoutEffect : Cc.useEffect,
        wc = gA;
    var RS = T($());
    var bc = T($());
    var ES = function() {
        var e = bc.useRef(null);

        function t() {
            Mi.cancel(e.current)
        }

        function r(n) {
            var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
            t();
            var i = Mi(function() {
                o <= 1 ? n({
                    isCanceled: function() {
                        return i !== e.current
                    }
                }) : r(n, o - 1)
            });
            e.current = i
        }
        return bc.useEffect(function() {
            return function() {
                t()
            }
        }, []), [r, t]
    };
    var hA = [At, ln, Vn, hc],
        vA = [At, vc],
        Um = !1,
        OS = !0;

    function Ec(e) {
        return e === Vn || e === hc
    }
    var PS = function(e, t, r) {
        var n = jr(Dm),
            o = F(n, 2),
            i = o[0],
            a = o[1],
            s = ES(),
            l = F(s, 2),
            u = l[0],
            f = l[1];

        function c() {
            a(At, !0)
        }
        var d = t ? vA : hA;
        return wc(function() {
            if (i !== Dm && i !== hc) {
                var g = d.indexOf(i),
                    v = d[g + 1],
                    y = r(i);
                y === Um ? a(v, !0) : v && u(function(b) {
                    function p() {
                        b.isCanceled() || a(v, !0)
                    }
                    y === !0 ? p() : Promise.resolve(y).then(p)
                })
            }
        }, [e, i]), RS.useEffect(function() {
            return function() {
                f()
            }
        }, []), [c, i]
    };

    function Wm(e, t, r, n) {
        var o = n.motionEnter,
            i = o === void 0 ? !0 : o,
            a = n.motionAppear,
            s = a === void 0 ? !0 : a,
            l = n.motionLeave,
            u = l === void 0 ? !0 : l,
            f = n.motionDeadline,
            c = n.motionLeaveImmediately,
            d = n.onAppearPrepare,
            g = n.onEnterPrepare,
            v = n.onLeavePrepare,
            y = n.onAppearStart,
            b = n.onEnterStart,
            p = n.onLeaveStart,
            m = n.onAppearActive,
            h = n.onEnterActive,
            x = n.onLeaveActive,
            S = n.onAppearEnd,
            C = n.onEnterEnd,
            w = n.onLeaveEnd,
            O = n.onVisibleChanged,
            A = jr(),
            E = F(A, 2),
            N = E[0],
            R = E[1],
            P = jr(sn),
            k = F(P, 2),
            _ = k[0],
            M = k[1],
            j = jr(null),
            V = F(j, 2),
            Q = V[0],
            Y = V[1],
            re = (0, Un.useRef)(!1),
            K = (0, Un.useRef)(null);

        function ne() {
            return r()
        }
        var fe = (0, Un.useRef)(!1);

        function Oe() {
            M(sn, !0), Y(null, !0)
        }

        function yt(We) {
            var Te = ne();
            if (!(We && !We.deadline && We.target !== Te)) {
                var oe = fe.current,
                    Ne;
                _ === ks && oe ? Ne = S?.(Te, We) : _ === _s && oe ? Ne = C?.(Te, We) : _ === Ls && oe && (Ne = w?.(Te, We)), _ !== sn && oe && Ne !== !1 && Oe()
            }
        }
        var br = bS(yt),
            Hr = F(br, 1),
            Er = Hr[0],
            ir = function(Te) {
                var oe, Ne, Vr;
                switch (Te) {
                    case ks:
                        return oe = {}, D(oe, At, d), D(oe, ln, y), D(oe, Vn, m), oe;
                    case _s:
                        return Ne = {}, D(Ne, At, g), D(Ne, ln, b), D(Ne, Vn, h), Ne;
                    case Ls:
                        return Vr = {}, D(Vr, At, v), D(Vr, ln, p), D(Vr, Vn, x), Vr;
                    default:
                        return {}
                }
            },
            q = Rc.useMemo(function() {
                return ir(_)
            }, [_]),
            Nt = PS(_, !e, function(We) {
                if (We === At) {
                    var Te = q[At];
                    return Te ? Te(ne()) : Um
                }
                if (Rr in q) {
                    var oe;
                    Y(((oe = q[Rr]) === null || oe === void 0 ? void 0 : oe.call(q, ne(), null)) || null)
                }
                return Rr === Vn && (Er(ne()), f > 0 && (clearTimeout(K.current), K.current = setTimeout(function() {
                    yt({
                        deadline: !0
                    })
                }, f))), Rr === vc && Oe(), OS
            }),
            H = F(Nt, 2),
            Jn = H[0],
            Rr = H[1],
            vf = Ec(Rr);
        fe.current = vf, wc(function() {
            R(t);
            var We = re.current;
            re.current = !0;
            var Te;
            !We && t && s && (Te = ks), We && t && i && (Te = _s), (We && !t && u || !We && c && !t && u) && (Te = Ls);
            var oe = ir(Te);
            Te && (e || oe[At]) ? (M(Te), Jn()) : M(sn)
        }, [t]), (0, Un.useEffect)(function() {
            (_ === ks && !s || _ === _s && !i || _ === Ls && !u) && M(sn)
        }, [s, i, u]), (0, Un.useEffect)(function() {
            return function() {
                re.current = !1, clearTimeout(K.current)
            }
        }, []);
        var ia = Rc.useRef(!1);
        (0, Un.useEffect)(function() {
            N && (ia.current = !0), N !== void 0 && _ === sn && ((ia.current || N) && O?.(N), ia.current = !0)
        }, [N, _]);
        var zo = Q;
        return q[At] && Rr === ln && (zo = L({
            transition: "none"
        }, zo)), [_, Rr, zo, N ?? t]
    }

    function yA(e) {
        var t = e;
        U(e) === "object" && (t = e.transitionSupport);

        function r(o, i) {
            return !!(o.motionName && t && i !== !1)
        }
        var n = Tt.forwardRef(function(o, i) {
            var a = o.visible,
                s = a === void 0 ? !0 : a,
                l = o.removeOnLeave,
                u = l === void 0 ? !0 : l,
                f = o.forceRender,
                c = o.children,
                d = o.motionName,
                g = o.leavedClassName,
                v = o.eventProps,
                y = Tt.useContext(Fm),
                b = y.motion,
                p = r(o, b),
                m = (0, Qm.useRef)(),
                h = (0, Qm.useRef)();

            function x() {
                try {
                    return m.current instanceof HTMLElement ? m.current : hm(h.current)
                } catch {
                    return null
                }
            }
            var S = Wm(p, s, x, o),
                C = F(S, 4),
                w = C[0],
                O = C[1],
                A = C[2],
                E = C[3],
                N = Tt.useRef(E);
            E && (N.current = !0);
            var R = Tt.useCallback(function(Y) {
                    m.current = Y, gm(i, Y)
                }, [i]),
                P, k = L(L({}, v), {}, {
                    visible: s
                });
            if (!c) P = null;
            else if (w === sn) E ? P = c(L({}, k), R) : !u && N.current && g ? P = c(L(L({}, k), {}, {
                className: g
            }), R) : f || !u && !g ? P = c(L(L({}, k), {}, {
                style: {
                    display: "none"
                }
            }), R) : P = null;
            else {
                var _, M;
                O === At ? M = "prepare" : Ec(O) ? M = "active" : O === ln && (M = "start");
                var j = Hm(d, "".concat(w, "-").concat(M));
                P = c(L(L({}, k), {}, {
                    className: (0, AS.default)(Hm(d, w), (_ = {}, D(_, j, j && M), D(_, d, typeof d == "string"), _)),
                    style: A
                }), R)
            }
            if (Tt.isValidElement(P) && $i(P)) {
                var V = P,
                    Q = V.ref;
                Q || (P = Tt.cloneElement(P, {
                    ref: R
                }))
            }
            return Tt.createElement(hS, {
                ref: h
            }, P)
        });
        return n.displayName = "CSSMotion", n
    }
    var Oc = yA(xc);
    var Eo = T($());
    var Pc = "add",
        Ac = "keep",
        Tc = "remove",
        kc = "removed";

    function xA(e) {
        var t;
        return e && U(e) === "object" && "key" in e ? t = e : t = {
            key: e
        }, L(L({}, t), {}, {
            key: String(t.key)
        })
    }

    function Nc() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        return e.map(xA)
    }

    function TS() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
            t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
            r = [],
            n = 0,
            o = t.length,
            i = Nc(e),
            a = Nc(t);
        i.forEach(function(u) {
            for (var f = !1, c = n; c < o; c += 1) {
                var d = a[c];
                if (d.key === u.key) {
                    n < c && (r = r.concat(a.slice(n, c).map(function(g) {
                        return L(L({}, g), {}, {
                            status: Pc
                        })
                    })), n = c), r.push(L(L({}, d), {}, {
                        status: Ac
                    })), n += 1, f = !0;
                    break
                }
            }
            f || r.push(L(L({}, u), {}, {
                status: Tc
            }))
        }), n < o && (r = r.concat(a.slice(n).map(function(u) {
            return L(L({}, u), {}, {
                status: Pc
            })
        })));
        var s = {};
        r.forEach(function(u) {
            var f = u.key;
            s[f] = (s[f] || 0) + 1
        });
        var l = Object.keys(s).filter(function(u) {
            return s[u] > 1
        });
        return l.forEach(function(u) {
            r = r.filter(function(f) {
                var c = f.key,
                    d = f.status;
                return c !== u || d !== Tc
            }), r.forEach(function(f) {
                f.key === u && (f.status = Ac)
            })
        }), r
    }
    var SA = ["component", "children", "onVisibleChanged", "onAllRemoved"],
        CA = ["status"],
        wA = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];

    function bA(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Oc,
            r = function(n) {
                Jt(i, n);
                var o = Co(i);

                function i() {
                    var a;
                    ee(this, i);
                    for (var s = arguments.length, l = new Array(s), u = 0; u < s; u++) l[u] = arguments[u];
                    return a = o.call.apply(o, [this].concat(l)), D(it(a), "state", {
                        keyEntities: []
                    }), D(it(a), "removeKey", function(f) {
                        var c = a.state.keyEntities,
                            d = c.map(function(g) {
                                return g.key !== f ? g : L(L({}, g), {}, {
                                    status: kc
                                })
                            });
                        return a.setState({
                            keyEntities: d
                        }), d.filter(function(g) {
                            var v = g.status;
                            return v !== kc
                        }).length
                    }), a
                }
                return te(i, [{
                    key: "render",
                    value: function() {
                        var s = this,
                            l = this.state.keyEntities,
                            u = this.props,
                            f = u.component,
                            c = u.children,
                            d = u.onVisibleChanged,
                            g = u.onAllRemoved,
                            v = me(u, SA),
                            y = f || Eo.Fragment,
                            b = {};
                        return wA.forEach(function(p) {
                            b[p] = v[p], delete v[p]
                        }), delete v.keys, Eo.createElement(y, v, l.map(function(p) {
                            var m = p.status,
                                h = me(p, CA),
                                x = m === Pc || m === Ac;
                            return Eo.createElement(t, X({}, b, {
                                key: h.key,
                                visible: x,
                                eventProps: h,
                                onVisibleChanged: function(C) {
                                    if (d?.(C, {
                                            key: h.key
                                        }), !C) {
                                        var w = s.removeKey(h.key);
                                        w === 0 && g && g()
                                    }
                                }
                            }), c)
                        }))
                    }
                }], [{
                    key: "getDerivedStateFromProps",
                    value: function(s, l) {
                        var u = s.keys,
                            f = l.keyEntities,
                            c = Nc(u),
                            d = TS(f, c);
                        return {
                            keyEntities: d.filter(function(g) {
                                var v = f.find(function(y) {
                                    var b = y.key;
                                    return g.key === b
                                });
                                return !(v && v.status === kc && g.status === Tc)
                            })
                        }
                    }
                }]), i
            }(Eo.Component);
        return D(r, "defaultProps", {
            component: "div"
        }), r
    }
    var Km = bA(xc);
    var Wn = Oc;
    var _c = T($());

    function Xm(e) {
        let {
            children: t
        } = e, [, r] = Fr(), {
            motion: n
        } = r, o = _c.useRef(!1);
        return o.current = o.current || n === !1, o.current ? _c.createElement(gc, {
            motion: n
        }, t) : t
    }
    var EA = (e, t) => {
            let [r, n] = Fr();
            return Dn({
                theme: r,
                token: n,
                hashId: "",
                path: ["ant-design-icons", e],
                nonce: () => t?.nonce
            }, () => [{
                [`.${e}`]: Object.assign(Object.assign({}, oS()), {
                    [`.${e} .${e}-icon`]: {
                        display: "block"
                    }
                })
            }])
        },
        NS = EA;
    var RA = function(e, t) {
        var r = {};
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
        if (e != null && typeof Object.getOwnPropertySymbols == "function")
            for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
        return r
    };
    var OA = ["getTargetContainer", "getPopupContainer", "renderEmpty", "pageHeader", "input", "pagination", "form", "select", "button"],
        PA = "ant",
        kS, AA, TA;

    function NA() {
        return kS || PA
    }

    function kA(e) {
        return Object.keys(e).some(t => t.endsWith("Color"))
    }
    var _A = e => {
        let {
            prefixCls: t,
            iconPrefixCls: r,
            theme: n
        } = e;
        t !== void 0 && (kS = t), r !== void 0 && (AA = r), n && (kA(n) ? cS(NA(), n) : TA = n)
    };
    var LA = e => {
            let {
                children: t,
                csp: r,
                autoInsertSpaceInButton: n,
                form: o,
                locale: i,
                componentSize: a,
                direction: s,
                space: l,
                virtual: u,
                dropdownMatchSelectWidth: f,
                popupMatchSelectWidth: c,
                popupOverflow: d,
                legacyLocale: g,
                parentContext: v,
                iconPrefixCls: y,
                theme: b,
                componentDisabled: p
            } = e, m = Fe.useCallback((_, M) => {
                let {
                    prefixCls: j
                } = e;
                if (M) return M;
                let V = j || v.getPrefixCls("");
                return _ ? `${V}-${_}` : V
            }, [v.getPrefixCls, e.prefixCls]), h = y || v.iconPrefixCls || Nm, x = h !== v.iconPrefixCls, S = r || v.csp, C = NS(h, S), w = jm(b, v.theme), O = {
                csp: S,
                autoInsertSpaceInButton: n,
                locale: i || g,
                direction: s,
                space: l,
                virtual: u,
                popupMatchSelectWidth: c ?? f,
                popupOverflow: d,
                getPrefixCls: m,
                iconPrefixCls: h,
                theme: w
            }, A = Object.assign({}, v);
            Object.keys(O).forEach(_ => {
                O[_] !== void 0 && (A[_] = O[_])
            }), OA.forEach(_ => {
                let M = e[_];
                M && (A[_] = M)
            });
            let E = rn(() => A, A, (_, M) => {
                    let j = Object.keys(_),
                        V = Object.keys(M);
                    return j.length !== V.length || j.some(Q => _[Q] !== M[Q])
                }),
                N = Fe.useMemo(() => ({
                    prefixCls: h,
                    csp: S
                }), [h, S]),
                R = x ? C(t) : t,
                P = Fe.useMemo(() => {
                    var _, M, j;
                    return nn(((_ = Mr.Form) === null || _ === void 0 ? void 0 : _.defaultValidateMessages) || {}, ((j = (M = E.locale) === null || M === void 0 ? void 0 : M.Form) === null || j === void 0 ? void 0 : j.defaultValidateMessages) || {}, o?.validateMessages || {})
                }, [E, o?.validateMessages]);
            Object.keys(P).length > 0 && (R = Fe.createElement(Tx.Provider, {
                value: P
            }, t)), i && (R = Fe.createElement(Ix, {
                locale: i,
                _ANT_MARK__: Mx
            }, R)), (h || S) && (R = Fe.createElement(Ii.Provider, {
                value: N
            }, R)), a && (R = Fe.createElement(pS, {
                size: a
            }, R)), R = Fe.createElement(Xm, null, R);
            let k = Fe.useMemo(() => {
                let _ = w || {},
                    {
                        algorithm: M,
                        token: j
                    } = _,
                    V = RA(_, ["algorithm", "token"]),
                    Q = M && (!Array.isArray(M) || M.length > 0) ? $r(M) : void 0;
                return Object.assign(Object.assign({}, V), {
                    theme: Q,
                    token: Object.assign(Object.assign({}, an), j)
                })
            }, [w]);
            return b && (R = Fe.createElement(Lm.Provider, {
                value: k
            }, R)), p !== void 0 && (R = Fe.createElement(fS, {
                disabled: p
            }, R)), Fe.createElement(Ee.Provider, {
                value: E
            }, R)
        },
        Wi = e => {
            let t = Fe.useContext(Ee),
                r = Fe.useContext(ji);
            return Fe.createElement(LA, Object.assign({
                parentContext: t,
                legacyLocale: r
            }, e))
        };
    Wi.ConfigContext = Ee;
    Wi.SizeContext = bo;
    Wi.config = _A;
    Wi.useConfig = mS;
    Object.defineProperty(Wi, "SizeContext", {
        get: () => bo
    });
    var Qi = Wi;
    var jc = T($());
    var $A = {
            icon: {
                tag: "svg",
                attrs: {
                    viewBox: "64 64 896 896",
                    focusable: "false"
                },
                children: [{
                    tag: "path",
                    attrs: {
                        d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"
                    }
                }]
            },
            name: "check-circle",
            theme: "filled"
        },
        _S = $A;
    var Oo = T($()),
        BS = T(be());
    var FS = T($());
    var Ro = T($());

    function LS(e) {
        var t;
        return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e)
    }

    function MA(e) {
        return LS(e) !== e?.ownerDocument
    }

    function $S(e) {
        return MA(e) ? LS(e) : null
    }

    function IS(e, t) {
        Ie(e, "[@ant-design/icons] ".concat(t))
    }

    function Gm(e) {
        return U(e) === "object" && typeof e.name == "string" && typeof e.theme == "string" && (U(e.icon) === "object" || typeof e.icon == "function")
    }

    function MS() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        return Object.keys(e).reduce(function(t, r) {
            var n = e[r];
            switch (r) {
                case "class":
                    t.className = n, delete t.class;
                    break;
                default:
                    t[r] = n
            }
            return t
        }, {})
    }

    function Lc(e, t, r) {
        return r ? Ro.default.createElement(e.tag, L(L({
            key: t
        }, MS(e.attrs)), r), (e.children || []).map(function(n, o) {
            return Lc(n, "".concat(t, "-").concat(e.tag, "-").concat(o))
        })) : Ro.default.createElement(e.tag, L({
            key: t
        }, MS(e.attrs)), (e.children || []).map(function(n, o) {
            return Lc(n, "".concat(t, "-").concat(e.tag, "-").concat(o))
        }))
    }

    function Jm(e) {
        return Je(e)[0]
    }

    function $c(e) {
        return e ? Array.isArray(e) ? e : [e] : []
    }
    var IA = `
.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`,
        jS = function(t) {
            var r = (0, Ro.useContext)(Ii),
                n = r.csp,
                o = r.prefixCls,
                i = IA;
            o && (i = i.replace(/anticon/g, o)), (0, Ro.useEffect)(function() {
                var a = t.current,
                    s = $S(a);
                gr(i, "@ant-design-icons", {
                    prepend: !0,
                    csp: n,
                    attachTo: s
                })
            }, [])
        };
    var jA = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"],
        $s = {
            primaryColor: "#333",
            secondaryColor: "#E6E6E6",
            calculated: !1
        };

    function FA(e) {
        var t = e.primaryColor,
            r = e.secondaryColor;
        $s.primaryColor = t, $s.secondaryColor = r || Jm(t), $s.calculated = !!r
    }

    function DA() {
        return L({}, $s)
    }
    var Mc = function(t) {
        var r = t.icon,
            n = t.className,
            o = t.onClick,
            i = t.style,
            a = t.primaryColor,
            s = t.secondaryColor,
            l = me(t, jA),
            u = FS.useRef(),
            f = $s;
        if (a && (f = {
                primaryColor: a,
                secondaryColor: s || Jm(a)
            }), jS(u), IS(Gm(r), "icon should be icon definiton, but got ".concat(r)), !Gm(r)) return null;
        var c = r;
        return c && typeof c.icon == "function" && (c = L(L({}, c), {}, {
            icon: c.icon(f.primaryColor, f.secondaryColor)
        })), Lc(c.icon, "svg-".concat(c.name), L(L({
            className: n,
            onClick: o,
            style: i,
            "data-icon": c.name,
            width: "1em",
            height: "1em",
            fill: "currentColor",
            "aria-hidden": "true"
        }, l), {}, {
            ref: u
        }))
    };
    Mc.displayName = "IconReact";
    Mc.getTwoToneColors = DA;
    Mc.setTwoToneColors = FA;
    var Ms = Mc;

    function Ym(e) {
        var t = $c(e),
            r = F(t, 2),
            n = r[0],
            o = r[1];
        return Ms.setTwoToneColors({
            primaryColor: n,
            secondaryColor: o
        })
    }

    function DS() {
        var e = Ms.getTwoToneColors();
        return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor
    }
    var BA = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
    Ym(Yx.primary);
    var Ic = Oo.forwardRef(function(e, t) {
        var r, n = e.className,
            o = e.icon,
            i = e.spin,
            a = e.rotate,
            s = e.tabIndex,
            l = e.onClick,
            u = e.twoToneColor,
            f = me(e, BA),
            c = Oo.useContext(Ii),
            d = c.prefixCls,
            g = d === void 0 ? "anticon" : d,
            v = c.rootClassName,
            y = (0, BS.default)(v, g, (r = {}, D(r, "".concat(g, "-").concat(o.name), !!o.name), D(r, "".concat(g, "-spin"), !!i || o.name === "loading"), r), n),
            b = s;
        b === void 0 && l && (b = -1);
        var p = a ? {
                msTransform: "rotate(".concat(a, "deg)"),
                transform: "rotate(".concat(a, "deg)")
            } : void 0,
            m = $c(u),
            h = F(m, 2),
            x = h[0],
            S = h[1];
        return Oo.createElement("span", X({
            role: "img",
            "aria-label": o.name
        }, f, {
            ref: t,
            tabIndex: b,
            onClick: l,
            className: y
        }), Oo.createElement(Ms, {
            icon: o,
            primaryColor: x,
            secondaryColor: S,
            style: p
        }))
    });
    Ic.displayName = "AntdIcon";
    Ic.getTwoToneColor = DS;
    Ic.setTwoToneColor = Ym;
    var tr = Ic;
    var zA = function(t, r) {
            return jc.createElement(tr, X({}, t, {
                ref: r,
                icon: _S
            }))
        },
        Ki = jc.forwardRef(zA);
    var Fc = T($());
    var HA = {
            icon: {
                tag: "svg",
                attrs: {
                    viewBox: "64 64 896 896",
                    focusable: "false"
                },
                children: [{
                    tag: "path",
                    attrs: {
                        d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"
                    }
                }]
            },
            name: "close-circle",
            theme: "filled"
        },
        zS = HA;
    var VA = function(t, r) {
            return Fc.createElement(tr, X({}, t, {
                ref: r,
                icon: zS
            }))
        },
        Xi = Fc.forwardRef(VA);
    var Dc = T($());
    var UA = {
            icon: {
                tag: "svg",
                attrs: {
                    viewBox: "64 64 896 896",
                    focusable: "false"
                },
                children: [{
                    tag: "path",
                    attrs: {
                        d: "M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"
                    }
                }]
            },
            name: "close",
            theme: "outlined"
        },
        HS = UA;
    var WA = function(t, r) {
            return Dc.createElement(tr, X({}, t, {
                ref: r,
                icon: HS
            }))
        },
        Gi = Dc.forwardRef(WA);
    var Bc = T($());
    var QA = {
            icon: {
                tag: "svg",
                attrs: {
                    viewBox: "64 64 896 896",
                    focusable: "false"
                },
                children: [{
                    tag: "path",
                    attrs: {
                        d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"
                    }
                }]
            },
            name: "exclamation-circle",
            theme: "filled"
        },
        VS = QA;
    var KA = function(t, r) {
            return Bc.createElement(tr, X({}, t, {
                ref: r,
                icon: VS
            }))
        },
        Ji = Bc.forwardRef(KA);
    var zc = T($());
    var XA = {
            icon: {
                tag: "svg",
                attrs: {
                    viewBox: "64 64 896 896",
                    focusable: "false"
                },
                children: [{
                    tag: "path",
                    attrs: {
                        d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"
                    }
                }]
            },
            name: "info-circle",
            theme: "filled"
        },
        US = XA;
    var GA = function(t, r) {
            return zc.createElement(tr, X({}, t, {
                ref: r,
                icon: US
            }))
        },
        Yi = zc.forwardRef(GA);
    var JA = `accept acceptCharset accessKey action allowFullScreen allowTransparency
    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge
    charSet checked classID className colSpan cols content contentEditable contextMenu
    controls coords crossOrigin data dateTime default defer dir disabled download draggable
    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder
    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity
    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media
    mediaGroup method min minLength multiple muted name noValidate nonce open
    optimum pattern placeholder poster preload radioGroup readOnly rel required
    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected
    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style
    summary tabIndex target title type useMap value width wmode wrap`,
        YA = `onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`,
        ZA = "".concat(JA, " ").concat(YA).split(/[\s\n]+/),
        qA = "aria-",
        eT = "data-";

    function WS(e, t) {
        return e.indexOf(t) === 0
    }

    function Zm(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
            r;
        t === !1 ? r = {
            aria: !0,
            data: !0,
            attr: !0
        } : t === !0 ? r = {
            aria: !0
        } : r = L({}, t);
        var n = {};
        return Object.keys(e).forEach(function(o) {
            (r.aria && (o === "role" || WS(o, qA)) || r.data && WS(o, eT) || r.attr && ZA.includes(o)) && (n[o] = e[o])
        }), n
    }
    var Is = T($()),
        {
            isValidElement: QS
        } = Is;

    function KS(e) {
        return e && QS(e) && e.type === Is.Fragment
    }

    function tT(e, t, r) {
        return QS(e) ? Is.cloneElement(e, typeof r == "function" ? r(e.props || {}) : r) : t
    }

    function Hc(e, t) {
        return tT(e, e, t)
    }
    var pb = T(be()),
        zr = T($());
    var gt = T($());
    var rr = T($());
    var Ue = T($()),
        GS = T(yi());
    var qm = T(be());
    var XS = T(be());
    var W = {
            MAC_ENTER: 3,
            BACKSPACE: 8,
            TAB: 9,
            NUM_CENTER: 12,
            ENTER: 13,
            SHIFT: 16,
            CTRL: 17,
            ALT: 18,
            PAUSE: 19,
            CAPS_LOCK: 20,
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
            PRINT_SCREEN: 44,
            INSERT: 45,
            DELETE: 46,
            ZERO: 48,
            ONE: 49,
            TWO: 50,
            THREE: 51,
            FOUR: 52,
            FIVE: 53,
            SIX: 54,
            SEVEN: 55,
            EIGHT: 56,
            NINE: 57,
            QUESTION_MARK: 63,
            A: 65,
            B: 66,
            C: 67,
            D: 68,
            E: 69,
            F: 70,
            G: 71,
            H: 72,
            I: 73,
            J: 74,
            K: 75,
            L: 76,
            M: 77,
            N: 78,
            O: 79,
            P: 80,
            Q: 81,
            R: 82,
            S: 83,
            T: 84,
            U: 85,
            V: 86,
            W: 87,
            X: 88,
            Y: 89,
            Z: 90,
            META: 91,
            WIN_KEY_RIGHT: 92,
            CONTEXT_MENU: 93,
            NUM_ZERO: 96,
            NUM_ONE: 97,
            NUM_TWO: 98,
            NUM_THREE: 99,
            NUM_FOUR: 100,
            NUM_FIVE: 101,
            NUM_SIX: 102,
            NUM_SEVEN: 103,
            NUM_EIGHT: 104,
            NUM_NINE: 105,
            NUM_MULTIPLY: 106,
            NUM_PLUS: 107,
            NUM_MINUS: 109,
            NUM_PERIOD: 110,
            NUM_DIVISION: 111,
            F1: 112,
            F2: 113,
            F3: 114,
            F4: 115,
            F5: 116,
            F6: 117,
            F7: 118,
            F8: 119,
            F9: 120,
            F10: 121,
            F11: 122,
            F12: 123,
            NUMLOCK: 144,
            SEMICOLON: 186,
            DASH: 189,
            EQUALS: 187,
            COMMA: 188,
            PERIOD: 190,
            SLASH: 191,
            APOSTROPHE: 192,
            SINGLE_QUOTE: 222,
            OPEN_SQUARE_BRACKET: 219,
            BACKSLASH: 220,
            CLOSE_SQUARE_BRACKET: 221,
            WIN_KEY: 224,
            MAC_FF_META: 224,
            WIN_IME: 229,
            isTextModifyingKeyEvent: function(t) {
                var r = t.keyCode;
                if (t.altKey && !t.ctrlKey || t.metaKey || r >= W.F1 && r <= W.F12) return !1;
                switch (r) {
                    case W.ALT:
                    case W.CAPS_LOCK:
                    case W.CONTEXT_MENU:
                    case W.CTRL:
                    case W.DOWN:
                    case W.END:
                    case W.ESC:
                    case W.HOME:
                    case W.INSERT:
                    case W.LEFT:
                    case W.MAC_FF_META:
                    case W.META:
                    case W.NUMLOCK:
                    case W.NUM_CENTER:
                    case W.PAGE_DOWN:
                    case W.PAGE_UP:
                    case W.PAUSE:
                    case W.PRINT_SCREEN:
                    case W.RIGHT:
                    case W.SHIFT:
                    case W.UP:
                    case W.WIN_KEY:
                    case W.WIN_KEY_RIGHT:
                        return !1;
                    default:
                        return !0
                }
            },
            isCharacterKey: function(t) {
                if (t >= W.ZERO && t <= W.NINE || t >= W.NUM_ZERO && t <= W.NUM_MULTIPLY || t >= W.A && t <= W.Z || window.navigator.userAgent.indexOf("WebKit") !== -1 && t === 0) return !0;
                switch (t) {
                    case W.SPACE:
                    case W.QUESTION_MARK:
                    case W.NUM_PLUS:
                    case W.NUM_MINUS:
                    case W.NUM_PERIOD:
                    case W.NUM_DIVISION:
                    case W.SEMICOLON:
                    case W.DASH:
                    case W.EQUALS:
                    case W.COMMA:
                    case W.PERIOD:
                    case W.SLASH:
                    case W.APOSTROPHE:
                    case W.SINGLE_QUOTE:
                    case W.OPEN_SQUARE_BRACKET:
                    case W.BACKSLASH:
                    case W.CLOSE_SQUARE_BRACKET:
                        return !0;
                    default:
                        return !1
                }
            }
        },
        js = W;
    var Dr = T($()),
        rT = Dr.forwardRef(function(e, t) {
            var r = e.prefixCls,
                n = e.style,
                o = e.className,
                i = e.duration,
                a = i === void 0 ? 4.5 : i,
                s = e.eventKey,
                l = e.content,
                u = e.closable,
                f = e.closeIcon,
                c = f === void 0 ? "x" : f,
                d = e.props,
                g = e.onClick,
                v = e.onNoticeClose,
                y = e.times,
                b = Dr.useState(!1),
                p = F(b, 2),
                m = p[0],
                h = p[1],
                x = function() {
                    v(s)
                },
                S = function(O) {
                    (O.key === "Enter" || O.code === "Enter" || O.keyCode === js.ENTER) && x()
                };
            Dr.useEffect(function() {
                if (!m && a > 0) {
                    var w = setTimeout(function() {
                        x()
                    }, a * 1e3);
                    return function() {
                        clearTimeout(w)
                    }
                }
            }, [a, m, y]);
            var C = "".concat(r, "-notice");
            return Dr.createElement("div", X({}, d, {
                ref: t,
                className: (0, XS.default)(C, o, D({}, "".concat(C, "-closable"), u)),
                style: n,
                onMouseEnter: function() {
                    h(!0)
                },
                onMouseLeave: function() {
                    h(!1)
                },
                onClick: g
            }), Dr.createElement("div", {
                className: "".concat(C, "-content")
            }, l), u && Dr.createElement("a", {
                tabIndex: 0,
                className: "".concat(C, "-close"),
                onKeyDown: S,
                onClick: function(O) {
                    O.preventDefault(), O.stopPropagation(), x()
                }
            }, c))
        }),
        Fs = rT;
    var nT = Ue.forwardRef(function(e, t) {
            var r = e.prefixCls,
                n = r === void 0 ? "rc-notification" : r,
                o = e.container,
                i = e.motion,
                a = e.maxCount,
                s = e.className,
                l = e.style,
                u = e.onAllRemoved,
                f = Ue.useState([]),
                c = F(f, 2),
                d = c[0],
                g = c[1],
                v = function(w) {
                    var O, A = d.find(function(E) {
                        return E.key === w
                    });
                    A == null || (O = A.onClose) === null || O === void 0 || O.call(A), g(function(E) {
                        return E.filter(function(N) {
                            return N.key !== w
                        })
                    })
                };
            Ue.useImperativeHandle(t, function() {
                return {
                    open: function(w) {
                        g(function(O) {
                            var A = z(O),
                                E = A.findIndex(function(P) {
                                    return P.key === w.key
                                }),
                                N = L({}, w);
                            if (E >= 0) {
                                var R;
                                N.times = (((R = O[E]) === null || R === void 0 ? void 0 : R.times) || 0) + 1, A[E] = N
                            } else N.times = 0, A.push(N);
                            return a > 0 && A.length > a && (A = A.slice(-a)), A
                        })
                    },
                    close: function(w) {
                        v(w)
                    },
                    destroy: function() {
                        g([])
                    }
                }
            });
            var y = Ue.useState({}),
                b = F(y, 2),
                p = b[0],
                m = b[1];
            Ue.useEffect(function() {
                var C = {};
                d.forEach(function(w) {
                    var O = w.placement,
                        A = O === void 0 ? "topRight" : O;
                    A && (C[A] = C[A] || [], C[A].push(w))
                }), Object.keys(p).forEach(function(w) {
                    C[w] = C[w] || []
                }), m(C)
            }, [d]);
            var h = function(w) {
                    m(function(O) {
                        var A = L({}, O),
                            E = A[w] || [];
                        return E.length || delete A[w], A
                    })
                },
                x = Ue.useRef(!1);
            if (Ue.useEffect(function() {
                    Object.keys(p).length > 0 ? x.current = !0 : x.current && (u?.(), x.current = !1)
                }, [p]), !o) return null;
            var S = Object.keys(p);
            return (0, GS.createPortal)(Ue.createElement(Ue.Fragment, null, S.map(function(C) {
                var w = p[C],
                    O = w.map(function(E) {
                        return {
                            config: E,
                            key: E.key
                        }
                    }),
                    A = typeof i == "function" ? i(C) : i;
                return Ue.createElement(Km, X({
                    key: C,
                    className: (0, qm.default)(n, "".concat(n, "-").concat(C), s?.(C)),
                    style: l?.(C),
                    keys: O,
                    motionAppear: !0
                }, A, {
                    onAllRemoved: function() {
                        h(C)
                    }
                }), function(E, N) {
                    var R = E.config,
                        P = E.className,
                        k = E.style,
                        _ = R.key,
                        M = R.times,
                        j = R.className,
                        V = R.style;
                    return Ue.createElement(Fs, X({}, R, {
                        ref: N,
                        prefixCls: n,
                        className: (0, qm.default)(P, j),
                        style: L(L({}, k), V),
                        times: M,
                        key: _,
                        eventKey: _,
                        onNoticeClose: v
                    }))
                })
            })), o)
        }),
        JS = nT;
    var oT = ["getContainer", "motion", "prefixCls", "maxCount", "className", "style", "onAllRemoved"],
        iT = function() {
            return document.body
        },
        YS = 0;

    function aT() {
        for (var e = {}, t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
        return r.forEach(function(o) {
            o && Object.keys(o).forEach(function(i) {
                var a = o[i];
                a !== void 0 && (e[i] = a)
            })
        }), e
    }

    function Zi() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
            t = e.getContainer,
            r = t === void 0 ? iT : t,
            n = e.motion,
            o = e.prefixCls,
            i = e.maxCount,
            a = e.className,
            s = e.style,
            l = e.onAllRemoved,
            u = me(e, oT),
            f = rr.useState(),
            c = F(f, 2),
            d = c[0],
            g = c[1],
            v = rr.useRef(),
            y = rr.createElement(JS, {
                container: d,
                ref: v,
                prefixCls: o,
                motion: n,
                maxCount: i,
                className: a,
                style: s,
                onAllRemoved: l
            }),
            b = rr.useState([]),
            p = F(b, 2),
            m = p[0],
            h = p[1],
            x = rr.useMemo(function() {
                return {
                    open: function(C) {
                        var w = aT(u, C);
                        (w.key === null || w.key === void 0) && (w.key = "rc-notification-".concat(YS), YS += 1), h(function(O) {
                            return [].concat(z(O), [{
                                type: "open",
                                config: w
                            }])
                        })
                    },
                    close: function(C) {
                        h(function(w) {
                            return [].concat(z(w), [{
                                type: "close",
                                key: C
                            }])
                        })
                    },
                    destroy: function() {
                        h(function(C) {
                            return [].concat(z(C), [{
                                type: "destroy"
                            }])
                        })
                    }
                }
            }, []);
        return rr.useEffect(function() {
            g(r())
        }), rr.useEffect(function() {
            v.current && m.length && (m.forEach(function(S) {
                switch (S.type) {
                    case "open":
                        v.current.open(S.config);
                        break;
                    case "close":
                        v.current.close(S.key);
                        break;
                    case "destroy":
                        v.current.destroy();
                        break
                }
            }), h([]))
        }, [m]), [x, y]
    }
    var eg = T(be());
    var sT = e => {
            let {
                componentCls: t,
                iconCls: r,
                boxShadow: n,
                colorText: o,
                colorSuccess: i,
                colorError: a,
                colorWarning: s,
                colorInfo: l,
                fontSizeLG: u,
                motionEaseInOutCirc: f,
                motionDurationSlow: c,
                marginXS: d,
                paddingXS: g,
                borderRadiusLG: v,
                zIndexPopup: y,
                contentPadding: b,
                contentBg: p
            } = e, m = `${t}-notice`, h = new le("MessageMoveIn", {
                "0%": {
                    padding: 0,
                    transform: "translateY(-100%)",
                    opacity: 0
                },
                "100%": {
                    padding: g,
                    transform: "translateY(0)",
                    opacity: 1
                }
            }), x = new le("MessageMoveOut", {
                "0%": {
                    maxHeight: e.height,
                    padding: g,
                    opacity: 1
                },
                "100%": {
                    maxHeight: 0,
                    padding: 0,
                    opacity: 0
                }
            }), S = {
                padding: g,
                textAlign: "center",
                [`${t}-custom-content > ${r}`]: {
                    verticalAlign: "text-bottom",
                    marginInlineEnd: d,
                    fontSize: u
                },
                [`${m}-content`]: {
                    display: "inline-block",
                    padding: b,
                    background: p,
                    borderRadius: v,
                    boxShadow: n,
                    pointerEvents: "all"
                },
                [`${t}-success > ${r}`]: {
                    color: i
                },
                [`${t}-error > ${r}`]: {
                    color: a
                },
                [`${t}-warning > ${r}`]: {
                    color: s
                },
                [`${t}-info > ${r},
      ${t}-loading > ${r}`]: {
                    color: l
                }
            };
            return [{
                [t]: Object.assign(Object.assign({}, Hi(e)), {
                    color: o,
                    position: "fixed",
                    top: d,
                    width: "100%",
                    pointerEvents: "none",
                    zIndex: y,
                    [`${t}-move-up`]: {
                        animationFillMode: "forwards"
                    },
                    [`
        ${t}-move-up-appear,
        ${t}-move-up-enter
      `]: {
                        animationName: h,
                        animationDuration: c,
                        animationPlayState: "paused",
                        animationTimingFunction: f
                    },
                    [`
        ${t}-move-up-appear${t}-move-up-appear-active,
        ${t}-move-up-enter${t}-move-up-enter-active
      `]: {
                        animationPlayState: "running"
                    },
                    [`${t}-move-up-leave`]: {
                        animationName: x,
                        animationDuration: c,
                        animationPlayState: "paused",
                        animationTimingFunction: f
                    },
                    [`${t}-move-up-leave${t}-move-up-leave-active`]: {
                        animationPlayState: "running"
                    },
                    "&-rtl": {
                        direction: "rtl",
                        span: {
                            direction: "rtl"
                        }
                    }
                })
            }, {
                [t]: {
                    [m]: Object.assign({}, S)
                }
            }, {
                [`${t}-notice-pure-panel`]: Object.assign(Object.assign({}, S), {
                    padding: 0,
                    textAlign: "start"
                })
            }]
        },
        ZS = Pt("Message", e => {
            let t = Ot(e, {
                height: 150
            });
            return [sT(t)]
        }, e => ({
            zIndexPopup: e.zIndexPopupBase + 10,
            contentBg: e.colorBgElevated,
            contentPadding: `${(e.controlHeightLG-e.fontSize*e.lineHeight)/2}px ${e.paddingSM}px`
        }));

    function qS(e, t) {
        return {
            motionName: t ?? `${e}-move-up`
        }
    }

    function eC(e) {
        let t, r = new Promise(o => {
                t = e(() => {
                    o(!0)
                })
            }),
            n = () => {
                t?.()
            };
        return n.then = (o, i) => r.then(o, i), n.promise = r, n
    }
    var un = T($());
    var Vc = T($());
    var lT = {
            icon: {
                tag: "svg",
                attrs: {
                    viewBox: "0 0 1024 1024",
                    focusable: "false"
                },
                children: [{
                    tag: "path",
                    attrs: {
                        d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"
                    }
                }]
            },
            name: "loading",
            theme: "outlined"
        },
        tC = lT;
    var uT = function(t, r) {
            return Vc.createElement(tr, X({}, t, {
                ref: r,
                icon: tC
            }))
        },
        Uc = Vc.forwardRef(uT);
    var rC = T(be());
    var cT = {
        info: un.createElement(Yi, null),
        success: un.createElement(Ki, null),
        error: un.createElement(Xi, null),
        warning: un.createElement(Ji, null),
        loading: un.createElement(Uc, null)
    };

    function nC(e) {
        let {
            prefixCls: t,
            type: r,
            icon: n,
            children: o
        } = e;
        return un.createElement("div", {
            className: (0, rC.default)(`${t}-custom-content`, `${t}-${r}`)
        }, n || cT[r], un.createElement("span", null, o))
    }
    var fT = function(e, t) {
            var r = {};
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
            if (e != null && typeof Object.getOwnPropertySymbols == "function")
                for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
            return r
        },
        dT = 8,
        pT = 3,
        mT = gt.forwardRef((e, t) => {
            let {
                top: r,
                prefixCls: n,
                getContainer: o,
                maxCount: i,
                duration: a = pT,
                rtl: s,
                transitionName: l,
                onAllRemoved: u
            } = e, {
                getPrefixCls: f,
                getPopupContainer: c
            } = gt.useContext(Ee), d = n || f("message"), [, g] = ZS(d), v = () => ({
                left: "50%",
                transform: "translateX(-50%)",
                top: r ?? dT
            }), y = () => (0, eg.default)(g, s ? `${d}-rtl` : ""), b = () => qS(d, l), p = gt.createElement("span", {
                className: `${d}-close-x`
            }, gt.createElement(Gi, {
                className: `${d}-close-icon`
            })), [m, h] = Zi({
                prefixCls: d,
                style: v,
                className: y,
                motion: b,
                closable: !1,
                closeIcon: p,
                duration: a,
                getContainer: () => o?.() || c?.() || document.body,
                maxCount: i,
                onAllRemoved: u
            });
            return gt.useImperativeHandle(t, () => Object.assign(Object.assign({}, m), {
                prefixCls: d,
                hashId: g
            })), h
        }),
        oC = 0;

    function gT(e) {
        let t = gt.useRef(null);
        return [gt.useMemo(() => {
            let n = l => {
                    var u;
                    (u = t.current) === null || u === void 0 || u.close(l)
                },
                o = l => {
                    if (!t.current) {
                        let S = () => {};
                        return S.then = () => {}, S
                    }
                    let {
                        open: u,
                        prefixCls: f,
                        hashId: c
                    } = t.current, d = `${f}-notice`, {
                        content: g,
                        icon: v,
                        type: y,
                        key: b,
                        className: p,
                        onClose: m
                    } = l, h = fT(l, ["content", "icon", "type", "key", "className", "onClose"]), x = b;
                    return x == null && (oC += 1, x = `antd-message-${oC}`), eC(S => (u(Object.assign(Object.assign({}, h), {
                        key: x,
                        content: gt.createElement(nC, {
                            prefixCls: f,
                            type: y,
                            icon: v
                        }, g),
                        placement: "top",
                        className: (0, eg.default)(y && `${d}-${y}`, c, p),
                        onClose: () => {
                            m?.(), S()
                        }
                    })), () => {
                        n(x)
                    }))
                },
                a = {
                    open: o,
                    destroy: l => {
                        var u;
                        l !== void 0 ? n(l) : (u = t.current) === null || u === void 0 || u.destroy()
                    }
                };
            return ["info", "success", "warning", "error", "loading"].forEach(l => {
                let u = (f, c, d) => {
                    let g;
                    f && typeof f == "object" && "content" in f ? g = f : g = {
                        content: f
                    };
                    let v, y;
                    typeof c == "function" ? y = c : (v = c, y = d);
                    let b = Object.assign(Object.assign({
                        onClose: y,
                        duration: v
                    }, g), {
                        type: l
                    });
                    return o(b)
                };
                a[l] = u
            }), a
        }, []), gt.createElement(mT, Object.assign({
            key: "message-holder"
        }, e, {
            ref: t
        }))]
    }

    function tg(e) {
        return gT(e)
    }
    var xe = T($());
    var Wc = T($());

    function rg() {
        let [e, t] = Wc.useState([]), r = Wc.useCallback(n => (t(o => [].concat(z(o), [n])), () => {
            t(o => o.filter(i => i !== n))
        }), []);
        return [e, r]
    }

    function st() {
        "use strict";
        st = function() {
            return e
        };
        var e = {},
            t = Object.prototype,
            r = t.hasOwnProperty,
            n = Object.defineProperty || function(R, P, k) {
                R[P] = k.value
            },
            o = typeof Symbol == "function" ? Symbol : {},
            i = o.iterator || "@@iterator",
            a = o.asyncIterator || "@@asyncIterator",
            s = o.toStringTag || "@@toStringTag";

        function l(R, P, k) {
            return Object.defineProperty(R, P, {
                value: k,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }), R[P]
        }
        try {
            l({}, "")
        } catch {
            l = function(k, _, M) {
                return k[_] = M
            }
        }

        function u(R, P, k, _) {
            var M = P && P.prototype instanceof d ? P : d,
                j = Object.create(M.prototype),
                V = new A(_ || []);
            return n(j, "_invoke", {
                value: S(R, k, V)
            }), j
        }

        function f(R, P, k) {
            try {
                return {
                    type: "normal",
                    arg: R.call(P, k)
                }
            } catch (_) {
                return {
                    type: "throw",
                    arg: _
                }
            }
        }
        e.wrap = u;
        var c = {};

        function d() {}

        function g() {}

        function v() {}
        var y = {};
        l(y, i, function() {
            return this
        });
        var b = Object.getPrototypeOf,
            p = b && b(b(E([])));
        p && p !== t && r.call(p, i) && (y = p);
        var m = v.prototype = d.prototype = Object.create(y);

        function h(R) {
            ["next", "throw", "return"].forEach(function(P) {
                l(R, P, function(k) {
                    return this._invoke(P, k)
                })
            })
        }

        function x(R, P) {
            function k(M, j, V, Q) {
                var Y = f(R[M], R, j);
                if (Y.type !== "throw") {
                    var re = Y.arg,
                        K = re.value;
                    return K && U(K) == "object" && r.call(K, "__await") ? P.resolve(K.__await).then(function(ne) {
                        k("next", ne, V, Q)
                    }, function(ne) {
                        k("throw", ne, V, Q)
                    }) : P.resolve(K).then(function(ne) {
                        re.value = ne, V(re)
                    }, function(ne) {
                        return k("throw", ne, V, Q)
                    })
                }
                Q(Y.arg)
            }
            var _;
            n(this, "_invoke", {
                value: function(j, V) {
                    function Q() {
                        return new P(function(Y, re) {
                            k(j, V, Y, re)
                        })
                    }
                    return _ = _ ? _.then(Q, Q) : Q()
                }
            })
        }

        function S(R, P, k) {
            var _ = "suspendedStart";
            return function(M, j) {
                if (_ === "executing") throw new Error("Generator is already running");
                if (_ === "completed") {
                    if (M === "throw") throw j;
                    return N()
                }
                for (k.method = M, k.arg = j;;) {
                    var V = k.delegate;
                    if (V) {
                        var Q = C(V, k);
                        if (Q) {
                            if (Q === c) continue;
                            return Q
                        }
                    }
                    if (k.method === "next") k.sent = k._sent = k.arg;
                    else if (k.method === "throw") {
                        if (_ === "suspendedStart") throw _ = "completed", k.arg;
                        k.dispatchException(k.arg)
                    } else k.method === "return" && k.abrupt("return", k.arg);
                    _ = "executing";
                    var Y = f(R, P, k);
                    if (Y.type === "normal") {
                        if (_ = k.done ? "completed" : "suspendedYield", Y.arg === c) continue;
                        return {
                            value: Y.arg,
                            done: k.done
                        }
                    }
                    Y.type === "throw" && (_ = "completed", k.method = "throw", k.arg = Y.arg)
                }
            }
        }

        function C(R, P) {
            var k = P.method,
                _ = R.iterator[k];
            if (_ === void 0) return P.delegate = null, k === "throw" && R.iterator.return && (P.method = "return", P.arg = void 0, C(R, P), P.method === "throw") || k !== "return" && (P.method = "throw", P.arg = new TypeError("The iterator does not provide a '" + k + "' method")), c;
            var M = f(_, R.iterator, P.arg);
            if (M.type === "throw") return P.method = "throw", P.arg = M.arg, P.delegate = null, c;
            var j = M.arg;
            return j ? j.done ? (P[R.resultName] = j.value, P.next = R.nextLoc, P.method !== "return" && (P.method = "next", P.arg = void 0), P.delegate = null, c) : j : (P.method = "throw", P.arg = new TypeError("iterator result is not an object"), P.delegate = null, c)
        }

        function w(R) {
            var P = {
                tryLoc: R[0]
            };
            1 in R && (P.catchLoc = R[1]), 2 in R && (P.finallyLoc = R[2], P.afterLoc = R[3]), this.tryEntries.push(P)
        }

        function O(R) {
            var P = R.completion || {};
            P.type = "normal", delete P.arg, R.completion = P
        }

        function A(R) {
            this.tryEntries = [{
                tryLoc: "root"
            }], R.forEach(w, this), this.reset(!0)
        }

        function E(R) {
            if (R) {
                var P = R[i];
                if (P) return P.call(R);
                if (typeof R.next == "function") return R;
                if (!isNaN(R.length)) {
                    var k = -1,
                        _ = function M() {
                            for (; ++k < R.length;)
                                if (r.call(R, k)) return M.value = R[k], M.done = !1, M;
                            return M.value = void 0, M.done = !0, M
                        };
                    return _.next = _
                }
            }
            return {
                next: N
            }
        }

        function N() {
            return {
                value: void 0,
                done: !0
            }
        }
        return g.prototype = v, n(m, "constructor", {
            value: v,
            configurable: !0
        }), n(v, "constructor", {
            value: g,
            configurable: !0
        }), g.displayName = l(v, s, "GeneratorFunction"), e.isGeneratorFunction = function(R) {
            var P = typeof R == "function" && R.constructor;
            return !!P && (P === g || (P.displayName || P.name) === "GeneratorFunction")
        }, e.mark = function(R) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(R, v) : (R.__proto__ = v, l(R, s, "GeneratorFunction")), R.prototype = Object.create(m), R
        }, e.awrap = function(R) {
            return {
                __await: R
            }
        }, h(x.prototype), l(x.prototype, a, function() {
            return this
        }), e.AsyncIterator = x, e.async = function(R, P, k, _, M) {
            M === void 0 && (M = Promise);
            var j = new x(u(R, P, k, _), M);
            return e.isGeneratorFunction(P) ? j : j.next().then(function(V) {
                return V.done ? V.value : j.next()
            })
        }, h(m), l(m, s, "Generator"), l(m, i, function() {
            return this
        }), l(m, "toString", function() {
            return "[object Generator]"
        }), e.keys = function(R) {
            var P = Object(R),
                k = [];
            for (var _ in P) k.push(_);
            return k.reverse(),
                function M() {
                    for (; k.length;) {
                        var j = k.pop();
                        if (j in P) return M.value = j, M.done = !1, M
                    }
                    return M.done = !0, M
                }
        }, e.values = E, A.prototype = {
            constructor: A,
            reset: function(P) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(O), !P)
                    for (var k in this) k.charAt(0) === "t" && r.call(this, k) && !isNaN(+k.slice(1)) && (this[k] = void 0)
            },
            stop: function() {
                this.done = !0;
                var P = this.tryEntries[0].completion;
                if (P.type === "throw") throw P.arg;
                return this.rval
            },
            dispatchException: function(P) {
                if (this.done) throw P;
                var k = this;

                function _(re, K) {
                    return V.type = "throw", V.arg = P, k.next = re, K && (k.method = "next", k.arg = void 0), !!K
                }
                for (var M = this.tryEntries.length - 1; M >= 0; --M) {
                    var j = this.tryEntries[M],
                        V = j.completion;
                    if (j.tryLoc === "root") return _("end");
                    if (j.tryLoc <= this.prev) {
                        var Q = r.call(j, "catchLoc"),
                            Y = r.call(j, "finallyLoc");
                        if (Q && Y) {
                            if (this.prev < j.catchLoc) return _(j.catchLoc, !0);
                            if (this.prev < j.finallyLoc) return _(j.finallyLoc)
                        } else if (Q) {
                            if (this.prev < j.catchLoc) return _(j.catchLoc, !0)
                        } else {
                            if (!Y) throw new Error("try statement without catch or finally");
                            if (this.prev < j.finallyLoc) return _(j.finallyLoc)
                        }
                    }
                }
            },
            abrupt: function(P, k) {
                for (var _ = this.tryEntries.length - 1; _ >= 0; --_) {
                    var M = this.tryEntries[_];
                    if (M.tryLoc <= this.prev && r.call(M, "finallyLoc") && this.prev < M.finallyLoc) {
                        var j = M;
                        break
                    }
                }
                j && (P === "break" || P === "continue") && j.tryLoc <= k && k <= j.finallyLoc && (j = null);
                var V = j ? j.completion : {};
                return V.type = P, V.arg = k, j ? (this.method = "next", this.next = j.finallyLoc, c) : this.complete(V)
            },
            complete: function(P, k) {
                if (P.type === "throw") throw P.arg;
                return P.type === "break" || P.type === "continue" ? this.next = P.arg : P.type === "return" ? (this.rval = this.arg = P.arg, this.method = "return", this.next = "end") : P.type === "normal" && k && (this.next = k), c
            },
            finish: function(P) {
                for (var k = this.tryEntries.length - 1; k >= 0; --k) {
                    var _ = this.tryEntries[k];
                    if (_.finallyLoc === P) return this.complete(_.completion, _.afterLoc), O(_), c
                }
            },
            catch: function(P) {
                for (var k = this.tryEntries.length - 1; k >= 0; --k) {
                    var _ = this.tryEntries[k];
                    if (_.tryLoc === P) {
                        var M = _.completion;
                        if (M.type === "throw") {
                            var j = M.arg;
                            O(_)
                        }
                        return j
                    }
                }
                throw new Error("illegal catch attempt")
            },
            delegateYield: function(P, k, _) {
                return this.delegate = {
                    iterator: E(P),
                    resultName: k,
                    nextLoc: _
                }, this.method === "next" && (this.arg = void 0), c
            }
        }, e
    }

    function iC(e, t, r, n, o, i, a) {
        try {
            var s = e[i](a),
                l = s.value
        } catch (u) {
            r(u);
            return
        }
        s.done ? t(l) : Promise.resolve(l).then(n, o)
    }

    function cn(e) {
        return function() {
            var t = this,
                r = arguments;
            return new Promise(function(n, o) {
                var i = e.apply(t, r);

                function a(l) {
                    iC(i, n, o, a, s, "next", l)
                }

                function s(l) {
                    iC(i, n, o, a, s, "throw", l)
                }
                a(void 0)
            })
        }
    }
    var hT = T(yi()),
        Ds = L({}, hT),
        vT = Ds.version,
        yT = Ds.render,
        xT = Ds.unmountComponentAtNode,
        Kc;
    try {
        aC = Number((vT || "").split(".")[0]), aC >= 18 && (Kc = Ds.createRoot)
    } catch {}
    var aC;

    function sC(e) {
        var t = Ds.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        t && U(t) === "object" && (t.usingClientEntryPoint = e)
    }
    var Qc = "__rc_react_root__";

    function ST(e, t) {
        sC(!0);
        var r = t[Qc] || Kc(t);
        sC(!1), r.render(e), t[Qc] = r
    }

    function CT(e, t) {
        yT(e, t)
    }

    function ig(e, t) {
        if (Kc) {
            ST(e, t);
            return
        }
        CT(e, t)
    }

    function wT(e) {
        return ng.apply(this, arguments)
    }

    function ng() {
        return ng = cn(st().mark(function e(t) {
            return st().wrap(function(n) {
                for (;;) switch (n.prev = n.next) {
                    case 0:
                        return n.abrupt("return", Promise.resolve().then(function() {
                            var o;
                            (o = t[Qc]) === null || o === void 0 || o.unmount(), delete t[Qc]
                        }));
                    case 1:
                    case "end":
                        return n.stop()
                }
            }, e)
        })), ng.apply(this, arguments)
    }

    function bT(e) {
        xT(e)
    }

    function ag(e) {
        return og.apply(this, arguments)
    }

    function og() {
        return og = cn(st().mark(function e(t) {
            return st().wrap(function(n) {
                for (;;) switch (n.prev = n.next) {
                    case 0:
                        if (Kc === void 0) {
                            n.next = 2;
                            break
                        }
                        return n.abrupt("return", wT(t));
                    case 2:
                        bT(t);
                    case 3:
                    case "end":
                        return n.stop()
                }
            }, e)
        })), og.apply(this, arguments)
    }
    var hk = T($());
    var eh = T(be()),
        vt = T($());
    var To = T($());
    var vg = T(be());
    var ye = T($());
    var dC = T(be());
    var lC = function(e) {
        if (!e) return !1;
        if (e instanceof Element) {
            if (e.offsetParent) return !0;
            if (e.getBBox) {
                var t = e.getBBox(),
                    r = t.width,
                    n = t.height;
                if (r || n) return !0
            }
            if (e.getBoundingClientRect) {
                var o = e.getBoundingClientRect(),
                    i = o.width,
                    a = o.height;
                if (i || a) return !0
            }
        }
        return !1
    };
    var Po = T($());
    var ET = e => {
            let {
                componentCls: t,
                colorPrimary: r
            } = e;
            return {
                [t]: {
                    position: "absolute",
                    background: "transparent",
                    pointerEvents: "none",
                    boxSizing: "border-box",
                    color: `var(--wave-color, ${r})`,
                    boxShadow: "0 0 0 0 currentcolor",
                    opacity: .2,
                    "&.wave-motion-appear": {
                        transition: [`box-shadow 0.4s ${e.motionEaseOutCirc}`, `opacity 2s ${e.motionEaseOutCirc}`].join(","),
                        "&-active": {
                            boxShadow: "0 0 0 6px currentcolor",
                            opacity: 0
                        }
                    }
                }
            }
        },
        uC = Pt("Wave", e => [ET(e)]);
    var fC = T(be());
    var lt = T($());

    function RT(e) {
        let t = (e || "").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);
        return t && t[1] && t[2] && t[3] ? !(t[1] === t[2] && t[2] === t[3]) : !0
    }

    function sg(e) {
        return e && e !== "#fff" && e !== "#ffffff" && e !== "rgb(255, 255, 255)" && e !== "rgba(255, 255, 255, 1)" && RT(e) && !/rgba\((?:\d*, ){3}0\)/.test(e) && e !== "transparent"
    }

    function cC(e) {
        let {
            borderTopColor: t,
            borderColor: r,
            backgroundColor: n
        } = getComputedStyle(e);
        return sg(t) ? t : sg(r) ? r : sg(n) ? n : null
    }

    function lg(e) {
        return Number.isNaN(e) ? 0 : e
    }
    var OT = e => {
        let {
            className: t,
            target: r
        } = e, n = lt.useRef(null), [o, i] = lt.useState(null), [a, s] = lt.useState([]), [l, u] = lt.useState(0), [f, c] = lt.useState(0), [d, g] = lt.useState(0), [v, y] = lt.useState(0), [b, p] = lt.useState(!1), m = {
            left: l,
            top: f,
            width: d,
            height: v,
            borderRadius: a.map(x => `${x}px`).join(" ")
        };
        o && (m["--wave-color"] = o);

        function h() {
            let x = getComputedStyle(r);
            i(cC(r));
            let S = x.position === "static",
                {
                    borderLeftWidth: C,
                    borderTopWidth: w
                } = x;
            u(S ? r.offsetLeft : lg(-parseFloat(C))), c(S ? r.offsetTop : lg(-parseFloat(w))), g(r.offsetWidth), y(r.offsetHeight);
            let {
                borderTopLeftRadius: O,
                borderTopRightRadius: A,
                borderBottomLeftRadius: E,
                borderBottomRightRadius: N
            } = x;
            s([O, A, N, E].map(R => lg(parseFloat(R))))
        }
        return lt.useEffect(() => {
            if (r) {
                let x = Mi(() => {
                        h(), p(!0)
                    }),
                    S;
                return typeof ResizeObserver < "u" && (S = new ResizeObserver(h), S.observe(r)), () => {
                    Mi.cancel(x), S?.disconnect()
                }
            }
        }, []), b ? lt.createElement(Wn, {
            visible: !0,
            motionAppear: !0,
            motionName: "wave-motion",
            motionDeadline: 5e3,
            onAppearEnd: (x, S) => {
                var C;
                if (S.deadline || S.propertyName === "opacity") {
                    let w = (C = n.current) === null || C === void 0 ? void 0 : C.parentElement;
                    ag(w).then(() => {
                        w?.remove()
                    })
                }
                return !1
            }
        }, x => {
            let {
                className: S
            } = x;
            return lt.createElement("div", {
                ref: n,
                className: (0, fC.default)(t, S),
                style: m
            })
        }) : null
    };

    function ug(e, t) {
        let r = document.createElement("div");
        r.style.position = "absolute", r.style.left = "0px", r.style.top = "0px", e?.insertBefore(r, e?.firstChild), ig(lt.createElement(OT, {
            target: e,
            className: t
        }), r)
    }

    function cg(e, t) {
        function r() {
            let n = e.current;
            ug(n, t)
        }
        return r
    }
    var PT = e => {
            let {
                children: t,
                disabled: r
            } = e, {
                getPrefixCls: n
            } = (0, Po.useContext)(Ee), o = (0, Po.useRef)(null), i = n("wave"), [, a] = uC(i), s = cg(o, (0, dC.default)(i, a));
            if (Po.default.useEffect(() => {
                    let u = o.current;
                    if (!u || u.nodeType !== 1 || r) return;
                    let f = c => {
                        c.target.tagName === "INPUT" || !lC(c.target) || !u.getAttribute || u.getAttribute("disabled") || u.disabled || u.className.includes("disabled") || u.className.includes("-leave") || s()
                    };
                    return u.addEventListener("click", f, !0), () => {
                        u.removeEventListener("click", f, !0)
                    }
                }, [r]), !Po.default.isValidElement(t)) return t ?? null;
            let l = $i(t) ? xs(t.ref, o) : o;
            return Hc(t, {
                ref: l
            })
        },
        pC = PT;
    var mC = T(be());
    var Qn = T($());
    var gC = Qn.createContext(null),
        hC = (e, t) => {
            let r = Qn.useContext(gC),
                n = Qn.useMemo(() => {
                    if (!r) return "";
                    let {
                        compactDirection: o,
                        isFirstItem: i,
                        isLastItem: a
                    } = r, s = o === "vertical" ? "-vertical-" : "-";
                    return (0, mC.default)({
                        [`${e}-compact${s}item`]: !0,
                        [`${e}-compact${s}first-item`]: i,
                        [`${e}-compact${s}last-item`]: a,
                        [`${e}-compact${s}item-rtl`]: t === "rtl"
                    })
                }, [e, t, r]);
            return {
                compactSize: r?.compactSize,
                compactDirection: r?.compactDirection,
                compactItemClassnames: n
            }
        },
        vC = e => {
            let {
                children: t
            } = e;
            return Qn.createElement(gC.Provider, {
                value: null
            }, t)
        };
    var Xc = T($()),
        yC = T(be()),
        AT = (0, Xc.forwardRef)((e, t) => {
            let {
                className: r,
                style: n,
                children: o,
                prefixCls: i
            } = e, a = (0, yC.default)(`${i}-icon`, r);
            return Xc.default.createElement("span", {
                ref: t,
                className: a,
                style: n
            }, o)
        }),
        Gc = AT;
    var Kn = T($()),
        SC = T(be());
    var xC = (0, Kn.forwardRef)((e, t) => {
            let {
                prefixCls: r,
                className: n,
                style: o,
                iconClassName: i
            } = e, a = (0, SC.default)(`${r}-loading-icon`, n);
            return Kn.default.createElement(Gc, {
                prefixCls: r,
                className: a,
                style: o,
                ref: t
            }, Kn.default.createElement(Uc, {
                className: i
            }))
        }),
        fg = () => ({
            width: 0,
            opacity: 0,
            transform: "scale(0)"
        }),
        dg = e => ({
            width: e.scrollWidth,
            opacity: 1,
            transform: "scale(1)"
        }),
        TT = e => {
            let {
                prefixCls: t,
                loading: r,
                existIcon: n,
                className: o,
                style: i
            } = e, a = !!r;
            return n ? Kn.default.createElement(xC, {
                prefixCls: t,
                className: o,
                style: i
            }) : Kn.default.createElement(Wn, {
                visible: a,
                motionName: `${t}-loading-icon-motion`,
                removeOnLeave: !0,
                onAppearStart: fg,
                onAppearActive: dg,
                onEnterStart: fg,
                onEnterActive: dg,
                onLeaveStart: dg,
                onLeaveActive: fg
            }, (s, l) => {
                let {
                    className: u,
                    style: f
                } = s;
                return Kn.default.createElement(xC, {
                    prefixCls: t,
                    className: o,
                    style: Object.assign(Object.assign({}, i), f),
                    ref: l,
                    iconClassName: u
                })
            })
        },
        CC = TT;
    var wC = T(be()),
        Ao = T($());
    var NT = function(e, t) {
            var r = {};
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
            if (e != null && typeof Object.getOwnPropertySymbols == "function")
                for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
            return r
        },
        pg = Ao.createContext(void 0),
        kT = e => {
            let {
                getPrefixCls: t,
                direction: r
            } = Ao.useContext(Ee), {
                prefixCls: n,
                size: o,
                className: i
            } = e, a = NT(e, ["prefixCls", "size", "className"]), s = t("btn-group", n), [, , l] = Fr(), u = "";
            switch (o) {
                case "large":
                    u = "lg";
                    break;
                case "small":
                    u = "sm";
                    break;
                case "middle":
                case void 0:
                    break;
                default:
            }
            let f = (0, wC.default)(s, {
                [`${s}-${u}`]: u,
                [`${s}-rtl`]: r === "rtl"
            }, i, l);
            return Ao.createElement(pg.Provider, {
                value: o
            }, Ao.createElement("div", Object.assign({}, a, {
                className: f
            })))
        },
        bC = kT;
    var qi = T($());
    var EC = /^[\u4e00-\u9fa5]{2}$/,
        Jc = EC.test.bind(EC);

    function _T(e) {
        return typeof e == "string"
    }

    function Yc(e) {
        return e === "text" || e === "link"
    }

    function LT(e, t) {
        if (e == null) return;
        let r = t ? " " : "";
        return typeof e != "string" && typeof e != "number" && _T(e.type) && Jc(e.props.children) ? Hc(e, {
            children: e.props.children.split("").join(r)
        }) : typeof e == "string" ? Jc(e) ? qi.default.createElement("span", null, e.split("").join(r)) : qi.default.createElement("span", null, e) : KS(e) ? qi.default.createElement("span", null, e) : e
    }

    function RC(e, t) {
        let r = !1,
            n = [];
        return qi.default.Children.forEach(e, o => {
            let i = typeof o,
                a = i === "string" || i === "number";
            if (r && a) {
                let s = n.length - 1,
                    l = n[s];
                n[s] = `${l}${o}`
            } else n.push(o);
            r = a
        }), qi.default.Children.map(n, o => LT(o, t))
    }

    function $T(e, t, r) {
        let {
            focusElCls: n,
            focus: o,
            borderElCls: i
        } = r, a = i ? "> *" : "", s = ["hover", o ? "focus" : null, "active"].filter(Boolean).map(l => `&:${l} ${a}`).join(",");
        return {
            [`&-item:not(${t}-last-item)`]: {
                marginInlineEnd: -e.lineWidth
            },
            "&-item": Object.assign(Object.assign({
                [s]: {
                    zIndex: 2
                }
            }, n ? {
                [`&${n}`]: {
                    zIndex: 2
                }
            } : {}), {
                [`&[disabled] ${a}`]: {
                    zIndex: 0
                }
            })
        }
    }

    function MT(e, t, r) {
        let {
            borderElCls: n
        } = r, o = n ? `> ${n}` : "";
        return {
            [`&-item:not(${t}-first-item):not(${t}-last-item) ${o}`]: {
                borderRadius: 0
            },
            [`&-item:not(${t}-last-item)${t}-first-item`]: {
                [`& ${o}, &${e}-sm ${o}, &${e}-lg ${o}`]: {
                    borderStartEndRadius: 0,
                    borderEndEndRadius: 0
                }
            },
            [`&-item:not(${t}-first-item)${t}-last-item`]: {
                [`& ${o}, &${e}-sm ${o}, &${e}-lg ${o}`]: {
                    borderStartStartRadius: 0,
                    borderEndStartRadius: 0
                }
            }
        }
    }

    function OC(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                focus: !0
            },
            {
                componentCls: r
            } = e,
            n = `${r}-compact`;
        return {
            [n]: Object.assign(Object.assign({}, $T(e, n, t)), MT(r, n, t))
        }
    }

    function IT(e, t) {
        return {
            [`&-item:not(${t}-last-item)`]: {
                marginBottom: -e.lineWidth
            },
            "&-item": {
                "&:hover,&:focus,&:active": {
                    zIndex: 2
                },
                "&[disabled]": {
                    zIndex: 0
                }
            }
        }
    }

    function jT(e, t) {
        return {
            [`&-item:not(${t}-first-item):not(${t}-last-item)`]: {
                borderRadius: 0
            },
            [`&-item${t}-first-item:not(${t}-last-item)`]: {
                [`&, &${e}-sm, &${e}-lg`]: {
                    borderEndEndRadius: 0,
                    borderEndStartRadius: 0
                }
            },
            [`&-item${t}-last-item:not(${t}-first-item)`]: {
                [`&, &${e}-sm, &${e}-lg`]: {
                    borderStartStartRadius: 0,
                    borderStartEndRadius: 0
                }
            }
        }
    }

    function PC(e) {
        let t = `${e.componentCls}-compact-vertical`;
        return {
            [t]: Object.assign(Object.assign({}, IT(e, t)), jT(e.componentCls, t))
        }
    }
    var AC = (e, t) => ({
            [`> span, > ${e}`]: {
                "&:not(:last-child)": {
                    [`&, & > ${e}`]: {
                        "&:not(:disabled)": {
                            borderInlineEndColor: t
                        }
                    }
                },
                "&:not(:first-child)": {
                    [`&, & > ${e}`]: {
                        "&:not(:disabled)": {
                            borderInlineStartColor: t
                        }
                    }
                }
            }
        }),
        FT = e => {
            let {
                componentCls: t,
                fontSize: r,
                lineWidth: n,
                colorPrimaryHover: o,
                colorErrorHover: i
            } = e;
            return {
                [`${t}-group`]: [{
                    position: "relative",
                    display: "inline-flex",
                    [`> span, > ${t}`]: {
                        "&:not(:last-child)": {
                            [`&, & > ${t}`]: {
                                borderStartEndRadius: 0,
                                borderEndEndRadius: 0
                            }
                        },
                        "&:not(:first-child)": {
                            marginInlineStart: -n,
                            [`&, & > ${t}`]: {
                                borderStartStartRadius: 0,
                                borderEndStartRadius: 0
                            }
                        }
                    },
                    [t]: {
                        position: "relative",
                        zIndex: 1,
                        "&:hover,\n          &:focus,\n          &:active": {
                            zIndex: 2
                        },
                        "&[disabled]": {
                            zIndex: 0
                        }
                    },
                    [`${t}-icon-only`]: {
                        fontSize: r
                    }
                }, AC(`${t}-primary`, o), AC(`${t}-danger`, i)]
            }
        },
        TC = FT;
    var DT = e => {
            let {
                componentCls: t,
                iconCls: r,
                buttonFontWeight: n
            } = e;
            return {
                [t]: {
                    outline: "none",
                    position: "relative",
                    display: "inline-block",
                    fontWeight: n,
                    whiteSpace: "nowrap",
                    textAlign: "center",
                    backgroundImage: "none",
                    backgroundColor: "transparent",
                    border: `${e.lineWidth}px ${e.lineType} transparent`,
                    cursor: "pointer",
                    transition: `all ${e.motionDurationMid} ${e.motionEaseInOut}`,
                    userSelect: "none",
                    touchAction: "manipulation",
                    lineHeight: e.lineHeight,
                    color: e.colorText,
                    "&:disabled > *": {
                        pointerEvents: "none"
                    },
                    "> span": {
                        display: "inline-block"
                    },
                    [`${t}-icon`]: {
                        lineHeight: 0
                    },
                    [`> ${r} + span, > span + ${r}`]: {
                        marginInlineStart: e.marginXS
                    },
                    [`&:not(${t}-icon-only) > ${t}-icon`]: {
                        [`&${t}-loading-icon, &:not(:last-child)`]: {
                            marginInlineEnd: e.marginXS
                        }
                    },
                    "> a": {
                        color: "currentColor"
                    },
                    "&:not(:disabled)": Object.assign({}, uc(e)),
                    [`&-icon-only${t}-compact-item`]: {
                        flex: "none"
                    },
                    [`&-compact-item${t}-primary`]: {
                        [`&:not([disabled]) + ${t}-compact-item${t}-primary:not([disabled])`]: {
                            position: "relative",
                            "&:before": {
                                position: "absolute",
                                top: -e.lineWidth,
                                insetInlineStart: -e.lineWidth,
                                display: "inline-block",
                                width: e.lineWidth,
                                height: `calc(100% + ${e.lineWidth*2}px)`,
                                backgroundColor: e.colorPrimaryHover,
                                content: '""'
                            }
                        }
                    },
                    "&-compact-vertical-item": {
                        [`&${t}-primary`]: {
                            [`&:not([disabled]) + ${t}-compact-vertical-item${t}-primary:not([disabled])`]: {
                                position: "relative",
                                "&:before": {
                                    position: "absolute",
                                    top: -e.lineWidth,
                                    insetInlineStart: -e.lineWidth,
                                    display: "inline-block",
                                    width: `calc(100% + ${e.lineWidth*2}px)`,
                                    height: e.lineWidth,
                                    backgroundColor: e.colorPrimaryHover,
                                    content: '""'
                                }
                            }
                        }
                    }
                }
            }
        },
        fn = (e, t) => ({
            "&:not(:disabled)": {
                "&:hover": e,
                "&:active": t
            }
        }),
        BT = e => ({
            minWidth: e.controlHeight,
            paddingInlineStart: 0,
            paddingInlineEnd: 0,
            borderRadius: "50%"
        }),
        zT = e => ({
            borderRadius: e.controlHeight,
            paddingInlineStart: e.controlHeight / 2,
            paddingInlineEnd: e.controlHeight / 2
        }),
        mg = e => ({
            cursor: "not-allowed",
            borderColor: e.colorBorder,
            color: e.colorTextDisabled,
            backgroundColor: e.colorBgContainerDisabled,
            boxShadow: "none"
        }),
        Zc = (e, t, r, n, o, i, a) => ({
            [`&${e}-background-ghost`]: Object.assign(Object.assign({
                color: t || void 0,
                backgroundColor: "transparent",
                borderColor: r || void 0,
                boxShadow: "none"
            }, fn(Object.assign({
                backgroundColor: "transparent"
            }, i), Object.assign({
                backgroundColor: "transparent"
            }, a))), {
                "&:disabled": {
                    cursor: "not-allowed",
                    color: n || void 0,
                    borderColor: o || void 0
                }
            })
        }),
        gg = e => ({
            "&:disabled": Object.assign({}, mg(e))
        }),
        NC = e => Object.assign({}, gg(e)),
        qc = e => ({
            "&:disabled": {
                cursor: "not-allowed",
                color: e.colorTextDisabled
            }
        }),
        kC = e => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, NC(e)), {
            backgroundColor: e.colorBgContainer,
            borderColor: e.colorBorder,
            boxShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlTmpOutline}`
        }), fn({
            color: e.colorPrimaryHover,
            borderColor: e.colorPrimaryHover
        }, {
            color: e.colorPrimaryActive,
            borderColor: e.colorPrimaryActive
        })), Zc(e.componentCls, e.colorBgContainer, e.colorBgContainer, e.colorTextDisabled, e.colorBorder)), {
            [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign(Object.assign({
                color: e.colorError,
                borderColor: e.colorError
            }, fn({
                color: e.colorErrorHover,
                borderColor: e.colorErrorBorderHover
            }, {
                color: e.colorErrorActive,
                borderColor: e.colorErrorActive
            })), Zc(e.componentCls, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder)), gg(e))
        }),
        HT = e => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, NC(e)), {
            color: e.colorTextLightSolid,
            backgroundColor: e.colorPrimary,
            boxShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlOutline}`
        }), fn({
            color: e.colorTextLightSolid,
            backgroundColor: e.colorPrimaryHover
        }, {
            color: e.colorTextLightSolid,
            backgroundColor: e.colorPrimaryActive
        })), Zc(e.componentCls, e.colorPrimary, e.colorPrimary, e.colorTextDisabled, e.colorBorder, {
            color: e.colorPrimaryHover,
            borderColor: e.colorPrimaryHover
        }, {
            color: e.colorPrimaryActive,
            borderColor: e.colorPrimaryActive
        })), {
            [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign(Object.assign({
                backgroundColor: e.colorError,
                boxShadow: `0 ${e.controlOutlineWidth}px 0 ${e.colorErrorOutline}`
            }, fn({
                backgroundColor: e.colorErrorHover
            }, {
                backgroundColor: e.colorErrorActive
            })), Zc(e.componentCls, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder, {
                color: e.colorErrorHover,
                borderColor: e.colorErrorHover
            }, {
                color: e.colorErrorActive,
                borderColor: e.colorErrorActive
            })), gg(e))
        }),
        VT = e => Object.assign(Object.assign({}, kC(e)), {
            borderStyle: "dashed"
        }),
        UT = e => Object.assign(Object.assign(Object.assign({
            color: e.colorLink
        }, fn({
            color: e.colorLinkHover
        }, {
            color: e.colorLinkActive
        })), qc(e)), {
            [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign({
                color: e.colorError
            }, fn({
                color: e.colorErrorHover
            }, {
                color: e.colorErrorActive
            })), qc(e))
        }),
        WT = e => Object.assign(Object.assign(Object.assign({}, fn({
            color: e.colorText,
            backgroundColor: e.colorBgTextHover
        }, {
            color: e.colorText,
            backgroundColor: e.colorBgTextActive
        })), qc(e)), {
            [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign({
                color: e.colorError
            }, qc(e)), fn({
                color: e.colorErrorHover,
                backgroundColor: e.colorErrorBg
            }, {
                color: e.colorErrorHover,
                backgroundColor: e.colorErrorBg
            }))
        }),
        QT = e => Object.assign(Object.assign({}, mg(e)), {
            [`&${e.componentCls}:hover`]: Object.assign({}, mg(e))
        }),
        KT = e => {
            let {
                componentCls: t
            } = e;
            return {
                [`${t}-default`]: kC(e),
                [`${t}-primary`]: HT(e),
                [`${t}-dashed`]: VT(e),
                [`${t}-link`]: UT(e),
                [`${t}-text`]: WT(e),
                [`${t}-disabled`]: QT(e)
            }
        },
        hg = function(e) {
            let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "",
                {
                    componentCls: r,
                    controlHeight: n,
                    fontSize: o,
                    lineHeight: i,
                    lineWidth: a,
                    borderRadius: s,
                    buttonPaddingHorizontal: l,
                    iconCls: u
                } = e,
                f = Math.max(0, (n - o * i) / 2 - a),
                c = l - a,
                d = `${r}-icon-only`;
            return [{
                [`${r}${t}`]: {
                    fontSize: o,
                    height: n,
                    padding: `${f}px ${c}px`,
                    borderRadius: s,
                    [`&${d}`]: {
                        width: n,
                        paddingInlineStart: 0,
                        paddingInlineEnd: 0,
                        [`&${r}-round`]: {
                            width: "auto"
                        },
                        [u]: {
                            fontSize: e.buttonIconOnlyFontSize
                        }
                    },
                    [`&${r}-loading`]: {
                        opacity: e.opacityLoading,
                        cursor: "default"
                    },
                    [`${r}-loading-icon`]: {
                        transition: `width ${e.motionDurationSlow} ${e.motionEaseInOut}, opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`
                    }
                }
            }, {
                [`${r}${r}-circle${t}`]: BT(e)
            }, {
                [`${r}${r}-round${t}`]: zT(e)
            }]
        },
        XT = e => hg(e),
        GT = e => {
            let t = Ot(e, {
                controlHeight: e.controlHeightSM,
                padding: e.paddingXS,
                buttonPaddingHorizontal: 8,
                borderRadius: e.borderRadiusSM,
                buttonIconOnlyFontSize: e.fontSizeLG - 2
            });
            return hg(t, `${e.componentCls}-sm`)
        },
        JT = e => {
            let t = Ot(e, {
                controlHeight: e.controlHeightLG,
                fontSize: e.fontSizeLG,
                borderRadius: e.borderRadiusLG,
                buttonIconOnlyFontSize: e.fontSizeLG + 2
            });
            return hg(t, `${e.componentCls}-lg`)
        },
        YT = e => {
            let {
                componentCls: t
            } = e;
            return {
                [t]: {
                    [`&${t}-block`]: {
                        width: "100%"
                    }
                }
            }
        },
        _C = Pt("Button", e => {
            let {
                controlTmpOutline: t,
                paddingContentHorizontal: r
            } = e, n = Ot(e, {
                colorOutlineDefault: t,
                buttonPaddingHorizontal: r,
                buttonIconOnlyFontSize: e.fontSizeLG,
                buttonFontWeight: 400
            });
            return [DT(n), GT(n), XT(n), JT(n), YT(n), KT(n), TC(n), OC(e), PC(e)]
        });
    var ZT = function(e, t) {
        var r = {};
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
        if (e != null && typeof Object.getOwnPropertySymbols == "function")
            for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
        return r
    };

    function ef(e) {
        return e === "danger" ? {
            danger: !0
        } : {
            type: e
        }
    }

    function qT(e) {
        if (typeof e == "object" && e) {
            let t = e?.delay;
            return {
                loading: !1,
                delay: !Number.isNaN(t) && typeof t == "number" ? t : 0
            }
        }
        return {
            loading: !!e,
            delay: 0
        }
    }
    var eN = (e, t) => {
            var r, n;
            let {
                loading: o = !1,
                prefixCls: i,
                type: a = "default",
                danger: s,
                shape: l = "default",
                size: u,
                styles: f,
                disabled: c,
                className: d,
                rootClassName: g,
                children: v,
                icon: y,
                ghost: b = !1,
                block: p = !1,
                htmlType: m = "button",
                classNames: h,
                style: x = {}
            } = e, S = ZT(e, ["loading", "prefixCls", "type", "danger", "shape", "size", "styles", "disabled", "className", "rootClassName", "children", "icon", "ghost", "block", "htmlType", "classNames", "style"]), {
                getPrefixCls: C,
                autoInsertSpaceInButton: w,
                direction: O,
                button: A
            } = (0, ye.useContext)(Ee), E = C("btn", i), [N, R] = _C(E), P = (0, ye.useContext)(fc), k = c ?? P, _ = (0, ye.useContext)(pg), M = (0, ye.useMemo)(() => qT(o), [o]), [j, V] = (0, ye.useState)(M.loading), [Q, Y] = (0, ye.useState)(!1), K = xs(t, (0, ye.createRef)()), ne = ye.Children.count(v) === 1 && !y && !Yc(a);
            (0, ye.useEffect)(() => {
                let oe = null;
                M.delay > 0 ? oe = setTimeout(() => {
                    oe = null, V(!0)
                }, M.delay) : V(M.loading);

                function Ne() {
                    oe && (clearTimeout(oe), oe = null)
                }
                return Ne
            }, [M]), (0, ye.useEffect)(() => {
                if (!K || !K.current || w === !1) return;
                let oe = K.current.textContent;
                ne && Jc(oe) ? Q || Y(!0) : Q && Y(!1)
            }, [K]);
            let fe = oe => {
                    let {
                        onClick: Ne
                    } = e;
                    if (j || k) {
                        oe.preventDefault();
                        return
                    }
                    Ne?.(oe)
                },
                Oe = w !== !1,
                {
                    compactSize: yt,
                    compactItemClassnames: br
                } = hC(E, O),
                Hr = {
                    large: "lg",
                    small: "sm",
                    middle: void 0
                },
                Er = dc(oe => {
                    var Ne, Vr;
                    return (Vr = (Ne = u ?? yt) !== null && Ne !== void 0 ? Ne : _) !== null && Vr !== void 0 ? Vr : oe
                }),
                ir = Er && Hr[Er] || "",
                q = j ? "loading" : y,
                Nt = ec(S, ["navigate"]),
                H = Nt.href !== void 0 && k,
                Jn = (0, vg.default)(E, R, {
                    [`${E}-${l}`]: l !== "default" && l,
                    [`${E}-${a}`]: a,
                    [`${E}-${ir}`]: ir,
                    [`${E}-icon-only`]: !v && v !== 0 && !!q,
                    [`${E}-background-ghost`]: b && !Yc(a),
                    [`${E}-loading`]: j,
                    [`${E}-two-chinese-chars`]: Q && Oe && !j,
                    [`${E}-block`]: p,
                    [`${E}-dangerous`]: !!s,
                    [`${E}-rtl`]: O === "rtl",
                    [`${E}-disabled`]: H
                }, br, d, g, A?.className),
                Rr = Object.assign(Object.assign({}, A?.style), x),
                vf = (0, vg.default)(h?.icon, (r = A?.classNames) === null || r === void 0 ? void 0 : r.icon),
                ia = Object.assign(Object.assign({}, f?.icon || {}), ((n = A?.styles) === null || n === void 0 ? void 0 : n.icon) || {}),
                zo = y && !j ? ye.default.createElement(Gc, {
                    prefixCls: E,
                    className: vf,
                    style: ia
                }, y) : ye.default.createElement(CC, {
                    existIcon: !!y,
                    prefixCls: E,
                    loading: !!j
                }),
                We = v || v === 0 ? RC(v, ne && Oe) : null;
            if (Nt.href !== void 0) return N(ye.default.createElement("a", Object.assign({}, Nt, {
                className: Jn,
                style: Rr,
                onClick: fe,
                ref: K
            }), zo, We));
            let Te = ye.default.createElement("button", Object.assign({}, S, {
                type: m,
                className: Jn,
                style: Rr,
                onClick: fe,
                disabled: k,
                ref: K
            }), zo, We);
            return Yc(a) || (Te = ye.default.createElement(pC, {
                disabled: !!j
            }, Te)), N(Te)
        },
        yg = (0, ye.forwardRef)(eN);
    yg.Group = bC;
    yg.__ANT_BUTTON = !0;
    var LC = yg;
    var Bs = LC;

    function $C(e) {
        return !!(e && e.then)
    }
    var tN = e => {
            let {
                type: t,
                children: r,
                prefixCls: n,
                buttonProps: o,
                close: i,
                autoFocus: a,
                emitEvent: s,
                quitOnNullishReturnValue: l,
                actionFn: u
            } = e, f = To.useRef(!1), c = To.useRef(null), [d, g] = jr(!1), v = function() {
                i?.apply(void 0, arguments)
            };
            To.useEffect(() => {
                let p = null;
                return a && (p = setTimeout(() => {
                    var m;
                    (m = c.current) === null || m === void 0 || m.focus()
                })), () => {
                    p && clearTimeout(p)
                }
            }, []);
            let y = p => {
                    $C(p) && (g(!0), p.then(function() {
                        g(!1, !0), v.apply(void 0, arguments), f.current = !1
                    }, m => (g(!1, !0), f.current = !1, Promise.reject(m))))
                },
                b = p => {
                    if (f.current) return;
                    if (f.current = !0, !u) {
                        v();
                        return
                    }
                    let m;
                    if (s) {
                        if (m = u(p), l && !$C(m)) {
                            f.current = !1, v(p);
                            return
                        }
                    } else if (u.length) m = u(i), f.current = !1;
                    else if (m = u(), !m) {
                        v();
                        return
                    }
                    y(m)
                };
            return To.createElement(Bs, Object.assign({}, ef(t), {
                onClick: b,
                loading: d,
                prefixCls: n
            }, o, {
                ref: c
            }), r)
        },
        xg = tN;
    var ea = (e, t, r) => r !== void 0 ? r : `${e}-${t}`;
    var pf = T(be());
    var Lo = T($());
    var nr = T($()),
        HC = T(yi());
    var MC = T($()),
        rN = MC.createContext(null),
        tf = rN;
    var No = T($());
    var IC = [];

    function Sg(e, t) {
        var r = No.useState(function() {
                if (!ge()) return null;
                var v = document.createElement("div");
                return v
            }),
            n = F(r, 1),
            o = n[0],
            i = No.useRef(!1),
            a = No.useContext(tf),
            s = No.useState(IC),
            l = F(s, 2),
            u = l[0],
            f = l[1],
            c = a || (i.current ? void 0 : function(v) {
                f(function(y) {
                    var b = [v].concat(z(y));
                    return b
                })
            });

        function d() {
            o.parentElement || document.body.appendChild(o), i.current = !0
        }

        function g() {
            var v;
            (v = o.parentElement) === null || v === void 0 || v.removeChild(o), i.current = !1
        }
        return Ns(function() {
            return e ? a ? a(d) : d() : g(), g
        }, [e]), Ns(function() {
            u.length && (u.forEach(function(v) {
                return v()
            }), f(IC))
        }, [u]), [o, c]
    }
    var DC = T($());
    var Cg;

    function wg(e) {
        if (typeof document > "u") return 0;
        if (e || Cg === void 0) {
            var t = document.createElement("div");
            t.style.width = "100%", t.style.height = "200px";
            var r = document.createElement("div"),
                n = r.style;
            n.position = "absolute", n.top = "0", n.left = "0", n.pointerEvents = "none", n.visibility = "hidden", n.width = "200px", n.height = "150px", n.overflow = "hidden", r.appendChild(t), document.body.appendChild(r);
            var o = t.offsetWidth;
            r.style.overflow = "scroll";
            var i = t.offsetWidth;
            o === i && (i = r.clientWidth), document.body.removeChild(r), Cg = o - i
        }
        return Cg
    }

    function jC() {
        return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth
    }
    var nN = "rc-util-locker-".concat(Date.now()),
        FC = 0;

    function bg(e) {
        var t = !!e,
            r = DC.useState(function() {
                return FC += 1, "".concat(nN, "_").concat(FC)
            }),
            n = F(r, 1),
            o = n[0];
        Ns(function() {
            if (t) {
                var i = wg(),
                    a = jC();
                gr(`
html body {
  overflow-y: hidden;
  `.concat(a ? "width: calc(100% - ".concat(i, "px);") : "", `
}`), o)
            } else vo(o);
            return function() {
                vo(o)
            }
        }, [t, o])
    }
    var BC = !1;

    function Eg(e) {
        return typeof e == "boolean" && (BC = e), BC
    }
    var zC = function(t) {
            return t === !1 ? !1 : !ge() || !t ? null : typeof t == "string" ? document.querySelector(t) : typeof t == "function" ? t() : t
        },
        oN = nr.forwardRef(function(e, t) {
            var r = e.open,
                n = e.autoLock,
                o = e.getContainer,
                i = e.debug,
                a = e.autoDestroy,
                s = a === void 0 ? !0 : a,
                l = e.children,
                u = nr.useState(r),
                f = F(u, 2),
                c = f[0],
                d = f[1],
                g = c || r;
            nr.useEffect(function() {
                (s || r) && d(r)
            }, [r, s]);
            var v = nr.useState(function() {
                    return zC(o)
                }),
                y = F(v, 2),
                b = y[0],
                p = y[1];
            nr.useEffect(function() {
                var R = zC(o);
                p(R ?? null)
            });
            var m = Sg(g && !b, i),
                h = F(m, 2),
                x = h[0],
                S = h[1],
                C = b ?? x;
            bg(n && r && ge() && (C === x || C === document.body));
            var w = null;
            if (l && $i(l) && t) {
                var O = l;
                w = O.ref
            }
            var A = vx(w, t);
            if (!g || !ge() || b === void 0) return null;
            var E = C === !1 || Eg(),
                N = l;
            return t && (N = nr.cloneElement(l, {
                ref: A
            })), nr.createElement(tf.Provider, {
                value: S
            }, E ? N : (0, HC.createPortal)(N, C))
        }),
        VC = oN;
    var UC = VC;
    var Ng = T(be());
    var zs = T($());

    function iN() {
        var e = L({}, zs);
        return e.useId
    }
    var WC = 0;

    function Rg(e) {
        var t = zs.useState("ssr-id"),
            r = F(t, 2),
            n = r[0],
            o = r[1],
            i = iN(),
            a = i?.();
        return zs.useEffect(function() {
            if (!i) {
                var s = WC;
                WC += 1, o("rc_unique_".concat(s))
            }
        }, []), e || a || n
    }
    var _o = T($()),
        dn = T($());

    function Og(e, t, r) {
        var n = t;
        return !n && r && (n = "".concat(e, "-").concat(r)), n
    }

    function QC(e, t) {
        var r = e["page".concat(t ? "Y" : "X", "Offset")],
            n = "scroll".concat(t ? "Top" : "Left");
        if (typeof r != "number") {
            var o = e.document;
            r = o.documentElement[n], typeof r != "number" && (r = o.body[n])
        }
        return r
    }

    function KC(e) {
        var t = e.getBoundingClientRect(),
            r = {
                left: t.left,
                top: t.top
            },
            n = e.ownerDocument,
            o = n.defaultView || n.parentWindow;
        return r.left += QC(o), r.top += QC(o, !0), r
    }
    var ko = T($()),
        ZC = T($()),
        qC = T(be());
    var Ze = T($()),
        YC = T(be());
    var XC = T($()),
        GC = XC.memo(function(e) {
            var t = e.children;
            return t
        }, function(e, t) {
            var r = t.shouldUpdate;
            return !r
        });
    var JC = {
            width: 0,
            height: 0,
            overflow: "hidden",
            outline: "none"
        },
        aN = Ze.default.forwardRef(function(e, t) {
            var r = e.prefixCls,
                n = e.className,
                o = e.style,
                i = e.title,
                a = e.ariaId,
                s = e.footer,
                l = e.closable,
                u = e.closeIcon,
                f = e.onClose,
                c = e.children,
                d = e.bodyStyle,
                g = e.bodyProps,
                v = e.modalRender,
                y = e.onMouseDown,
                b = e.onMouseUp,
                p = e.holderRef,
                m = e.visible,
                h = e.forceRender,
                x = e.width,
                S = e.height,
                C = (0, Ze.useRef)(),
                w = (0, Ze.useRef)();
            Ze.default.useImperativeHandle(t, function() {
                return {
                    focus: function() {
                        var k;
                        (k = C.current) === null || k === void 0 || k.focus()
                    },
                    changeActive: function(k) {
                        var _ = document,
                            M = _.activeElement;
                        k && M === w.current ? C.current.focus() : !k && M === C.current && w.current.focus()
                    }
                }
            });
            var O = {};
            x !== void 0 && (O.width = x), S !== void 0 && (O.height = S);
            var A;
            s && (A = Ze.default.createElement("div", {
                className: "".concat(r, "-footer")
            }, s));
            var E;
            i && (E = Ze.default.createElement("div", {
                className: "".concat(r, "-header")
            }, Ze.default.createElement("div", {
                className: "".concat(r, "-title"),
                id: a
            }, i)));
            var N;
            l && (N = Ze.default.createElement("button", {
                type: "button",
                onClick: f,
                "aria-label": "Close",
                className: "".concat(r, "-close")
            }, u || Ze.default.createElement("span", {
                className: "".concat(r, "-close-x")
            })));
            var R = Ze.default.createElement("div", {
                className: "".concat(r, "-content")
            }, N, E, Ze.default.createElement("div", X({
                className: "".concat(r, "-body"),
                style: d
            }, g), c), A);
            return Ze.default.createElement("div", {
                key: "dialog-element",
                role: "dialog",
                "aria-labelledby": i ? a : null,
                "aria-modal": "true",
                ref: p,
                style: L(L({}, o), O),
                className: (0, YC.default)(r, n),
                onMouseDown: y,
                onMouseUp: b
            }, Ze.default.createElement("div", {
                tabIndex: 0,
                ref: C,
                style: JC,
                "aria-hidden": "true"
            }), Ze.default.createElement(GC, {
                shouldUpdate: m || h
            }, v ? v(R) : R), Ze.default.createElement("div", {
                tabIndex: 0,
                ref: w,
                style: JC,
                "aria-hidden": "true"
            }))
        }),
        Pg = aN;
    var ew = ko.forwardRef(function(e, t) {
        var r = e.prefixCls,
            n = e.title,
            o = e.style,
            i = e.className,
            a = e.visible,
            s = e.forceRender,
            l = e.destroyOnClose,
            u = e.motionName,
            f = e.ariaId,
            c = e.onVisibleChanged,
            d = e.mousePosition,
            g = (0, ZC.useRef)(),
            v = ko.useState(),
            y = F(v, 2),
            b = y[0],
            p = y[1],
            m = {};
        b && (m.transformOrigin = b);

        function h() {
            var x = KC(g.current);
            p(d ? "".concat(d.x - x.left, "px ").concat(d.y - x.top, "px") : "")
        }
        return ko.createElement(Wn, {
            visible: a,
            onVisibleChanged: c,
            onAppearPrepare: h,
            onEnterPrepare: h,
            forceRender: s,
            motionName: u,
            removeOnLeave: l,
            ref: g
        }, function(x, S) {
            var C = x.className,
                w = x.style;
            return ko.createElement(Pg, X({}, e, {
                ref: t,
                title: n,
                ariaId: f,
                prefixCls: r,
                holderRef: S,
                style: L(L(L({}, w), o), m),
                className: (0, qC.default)(i, C)
            }))
        })
    });
    ew.displayName = "Content";
    var tw = ew;
    var Ag = T($()),
        rw = T(be());

    function Tg(e) {
        var t = e.prefixCls,
            r = e.style,
            n = e.visible,
            o = e.maskProps,
            i = e.motionName;
        return Ag.createElement(Wn, {
            key: "mask",
            visible: n,
            motionName: i,
            leavedClassName: "".concat(t, "-mask-hidden")
        }, function(a, s) {
            var l = a.className,
                u = a.style;
            return Ag.createElement("div", X({
                ref: s,
                style: L(L({}, u), r),
                className: (0, rw.default)("".concat(t, "-mask"), l)
            }, o))
        })
    }

    function kg(e) {
        var t = e.prefixCls,
            r = t === void 0 ? "rc-dialog" : t,
            n = e.zIndex,
            o = e.visible,
            i = o === void 0 ? !1 : o,
            a = e.keyboard,
            s = a === void 0 ? !0 : a,
            l = e.focusTriggerAfterClose,
            u = l === void 0 ? !0 : l,
            f = e.wrapStyle,
            c = e.wrapClassName,
            d = e.wrapProps,
            g = e.onClose,
            v = e.afterOpenChange,
            y = e.afterClose,
            b = e.transitionName,
            p = e.animation,
            m = e.closable,
            h = m === void 0 ? !0 : m,
            x = e.mask,
            S = x === void 0 ? !0 : x,
            C = e.maskTransitionName,
            w = e.maskAnimation,
            O = e.maskClosable,
            A = O === void 0 ? !0 : O,
            E = e.maskStyle,
            N = e.maskProps,
            R = e.rootClassName,
            P = (0, dn.useRef)(),
            k = (0, dn.useRef)(),
            _ = (0, dn.useRef)(),
            M = _o.useState(i),
            j = F(M, 2),
            V = j[0],
            Q = j[1],
            Y = Rg();

        function re() {
            Pi(k.current, document.activeElement) || (P.current = document.activeElement)
        }

        function K() {
            if (!Pi(k.current, document.activeElement)) {
                var q;
                (q = _.current) === null || q === void 0 || q.focus()
            }
        }

        function ne(q) {
            if (q) K();
            else {
                if (Q(!1), S && P.current && u) {
                    try {
                        P.current.focus({
                            preventScroll: !0
                        })
                    } catch {}
                    P.current = null
                }
                V && y?.()
            }
            v?.(q)
        }

        function fe(q) {
            g?.(q)
        }
        var Oe = (0, dn.useRef)(!1),
            yt = (0, dn.useRef)(),
            br = function() {
                clearTimeout(yt.current), Oe.current = !0
            },
            Hr = function() {
                yt.current = setTimeout(function() {
                    Oe.current = !1
                })
            },
            Er = null;
        A && (Er = function(Nt) {
            Oe.current ? Oe.current = !1 : k.current === Nt.target && fe(Nt)
        });

        function ir(q) {
            if (s && q.keyCode === js.ESC) {
                q.stopPropagation(), fe(q);
                return
            }
            i && q.keyCode === js.TAB && _.current.changeActive(!q.shiftKey)
        }
        return (0, dn.useEffect)(function() {
            i && (Q(!0), re())
        }, [i]), (0, dn.useEffect)(function() {
            return function() {
                clearTimeout(yt.current)
            }
        }, []), _o.createElement("div", X({
            className: (0, Ng.default)("".concat(r, "-root"), R)
        }, Zm(e, {
            data: !0
        })), _o.createElement(Tg, {
            prefixCls: r,
            visible: S && i,
            motionName: Og(r, C, w),
            style: L({
                zIndex: n
            }, E),
            maskProps: N
        }), _o.createElement("div", X({
            tabIndex: -1,
            onKeyDown: ir,
            className: (0, Ng.default)("".concat(r, "-wrap"), c),
            ref: k,
            onClick: Er,
            style: L(L({
                zIndex: n
            }, f), {}, {
                display: V ? null : "none"
            })
        }, d), _o.createElement(tw, X({}, e, {
            onMouseDown: br,
            onMouseUp: Hr,
            ref: _,
            closable: h,
            ariaId: Y,
            prefixCls: r,
            visible: i && V,
            onClose: fe,
            onVisibleChanged: ne,
            motionName: Og(r, b, p)
        }))))
    }
    var nw = function(t) {
        var r = t.visible,
            n = t.getContainer,
            o = t.forceRender,
            i = t.destroyOnClose,
            a = i === void 0 ? !1 : i,
            s = t.afterClose,
            l = Lo.useState(r),
            u = F(l, 2),
            f = u[0],
            c = u[1];
        return Lo.useEffect(function() {
            r && c(!0)
        }, [r]), !o && a && !f ? null : Lo.createElement(UC, {
            open: r || o || f,
            autoDestroy: !1,
            getContainer: n,
            autoLock: r || f
        }, Lo.createElement(kg, X({}, t, {
            destroyOnClose: a,
            afterClose: function() {
                s?.(), c(!1)
            }
        })))
    };
    nw.displayName = "Dialog";
    var ow = nw;
    var iw = ow;
    var Fo = T($());
    var aw = () => ge() && window.document.documentElement;
    var Tw = T($());
    var ht = T($());
    var sw = T($()),
        xr = "RC_FORM_INTERNAL_HOOKS",
        se = function() {
            Ie(!1, "Can not find FormContext. Please make sure you wrap Field under Form.")
        },
        sN = sw.createContext({
            getFieldValue: se,
            getFieldsValue: se,
            getFieldError: se,
            getFieldWarning: se,
            getFieldsError: se,
            isFieldsTouched: se,
            isFieldTouched: se,
            isFieldValidating: se,
            isFieldsValidating: se,
            resetFields: se,
            setFields: se,
            setFieldValue: se,
            setFieldsValue: se,
            validateFields: se,
            submit: se,
            getInternalHooks: function() {
                return se(), {
                    dispatch: se,
                    initEntityValue: se,
                    registerField: se,
                    useSubscribe: se,
                    setInitialValues: se,
                    destroyForm: se,
                    setCallbacks: se,
                    registerWatch: se,
                    getFields: se,
                    setValidateMessages: se,
                    setPreserve: se,
                    getInitialValue: se
                }
            }
        }),
        Sr = sN;
    var lw = T($()),
        lN = lw.createContext(null),
        Xn = lN;

    function Hs(e) {
        return e == null ? [] : Array.isArray(e) ? e : [e]
    }

    function uw(e) {
        return e && !!e._init
    }

    function $o() {
        return $o = Object.assign ? Object.assign.bind() : function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        }, $o.apply(this, arguments)
    }

    function uN(e, t) {
        e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Ws(e, t)
    }

    function Lg(e) {
        return Lg = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
            return r.__proto__ || Object.getPrototypeOf(r)
        }, Lg(e)
    }

    function Ws(e, t) {
        return Ws = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
            return n.__proto__ = o, n
        }, Ws(e, t)
    }

    function cN() {
        if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
        if (typeof Proxy == "function") return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
        } catch {
            return !1
        }
    }

    function nf(e, t, r) {
        return cN() ? nf = Reflect.construct.bind() : nf = function(o, i, a) {
            var s = [null];
            s.push.apply(s, i);
            var l = Function.bind.apply(o, s),
                u = new l;
            return a && Ws(u, a.prototype), u
        }, nf.apply(null, arguments)
    }

    function fN(e) {
        return Function.toString.call(e).indexOf("[native code]") !== -1
    }

    function $g(e) {
        var t = typeof Map == "function" ? new Map : void 0;
        return $g = function(n) {
            if (n === null || !fN(n)) return n;
            if (typeof n != "function") throw new TypeError("Super expression must either be null or a function");
            if (typeof t < "u") {
                if (t.has(n)) return t.get(n);
                t.set(n, o)
            }

            function o() {
                return nf(n, arguments, Lg(this).constructor)
            }
            return o.prototype = Object.create(n.prototype, {
                constructor: {
                    value: o,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), Ws(o, n)
        }, $g(e)
    }
    var dN = /%[sdj%]/g,
        pN = function() {};
    typeof process < "u" && process.env;

    function Mg(e) {
        if (!e || !e.length) return null;
        var t = {};
        return e.forEach(function(r) {
            var n = r.field;
            t[n] = t[n] || [], t[n].push(r)
        }), t
    }

    function Dt(e) {
        for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
        var o = 0,
            i = r.length;
        if (typeof e == "function") return e.apply(null, r);
        if (typeof e == "string") {
            var a = e.replace(dN, function(s) {
                if (s === "%%") return "%";
                if (o >= i) return s;
                switch (s) {
                    case "%s":
                        return String(r[o++]);
                    case "%d":
                        return Number(r[o++]);
                    case "%j":
                        try {
                            return JSON.stringify(r[o++])
                        } catch {
                            return "[Circular]"
                        }
                        break;
                    default:
                        return s
                }
            });
            return a
        }
        return e
    }

    function mN(e) {
        return e === "string" || e === "url" || e === "hex" || e === "email" || e === "date" || e === "pattern"
    }

    function De(e, t) {
        return !!(e == null || t === "array" && Array.isArray(e) && !e.length || mN(t) && typeof e == "string" && !e)
    }

    function gN(e, t, r) {
        var n = [],
            o = 0,
            i = e.length;

        function a(s) {
            n.push.apply(n, s || []), o++, o === i && r(n)
        }
        e.forEach(function(s) {
            t(s, a)
        })
    }

    function cw(e, t, r) {
        var n = 0,
            o = e.length;

        function i(a) {
            if (a && a.length) {
                r(a);
                return
            }
            var s = n;
            n = n + 1, s < o ? t(e[s], i) : r([])
        }
        i([])
    }

    function hN(e) {
        var t = [];
        return Object.keys(e).forEach(function(r) {
            t.push.apply(t, e[r] || [])
        }), t
    }
    var fw = function(e) {
        uN(t, e);

        function t(r, n) {
            var o;
            return o = e.call(this, "Async Validation Error") || this, o.errors = r, o.fields = n, o
        }
        return t
    }($g(Error));

    function vN(e, t, r, n, o) {
        if (t.first) {
            var i = new Promise(function(d, g) {
                var v = function(p) {
                        return n(p), p.length ? g(new fw(p, Mg(p))) : d(o)
                    },
                    y = hN(e);
                cw(y, r, v)
            });
            return i.catch(function(d) {
                return d
            }), i
        }
        var a = t.firstFields === !0 ? Object.keys(e) : t.firstFields || [],
            s = Object.keys(e),
            l = s.length,
            u = 0,
            f = [],
            c = new Promise(function(d, g) {
                var v = function(b) {
                    if (f.push.apply(f, b), u++, u === l) return n(f), f.length ? g(new fw(f, Mg(f))) : d(o)
                };
                s.length || (n(f), d(o)), s.forEach(function(y) {
                    var b = e[y];
                    a.indexOf(y) !== -1 ? cw(b, r, v) : gN(b, r, v)
                })
            });
        return c.catch(function(d) {
            return d
        }), c
    }

    function yN(e) {
        return !!(e && e.message !== void 0)
    }

    function xN(e, t) {
        for (var r = e, n = 0; n < t.length; n++) {
            if (r == null) return r;
            r = r[t[n]]
        }
        return r
    }

    function dw(e, t) {
        return function(r) {
            var n;
            return e.fullFields ? n = xN(t, e.fullFields) : n = t[r.field || e.fullField], yN(r) ? (r.field = r.field || e.fullField, r.fieldValue = n, r) : {
                message: typeof r == "function" ? r() : r,
                fieldValue: n,
                field: r.field || e.fullField
            }
        }
    }

    function pw(e, t) {
        if (t) {
            for (var r in t)
                if (t.hasOwnProperty(r)) {
                    var n = t[r];
                    typeof n == "object" && typeof e[r] == "object" ? e[r] = $o({}, e[r], n) : e[r] = n
                }
        }
        return e
    }
    var gw = function(t, r, n, o, i, a) {
            t.required && (!n.hasOwnProperty(t.field) || De(r, a || t.type)) && o.push(Dt(i.messages.required, t.fullField))
        },
        SN = function(t, r, n, o, i) {
            (/^\s+$/.test(r) || r === "") && o.push(Dt(i.messages.whitespace, t.fullField))
        },
        rf, CN = function() {
            if (rf) return rf;
            var e = "[a-fA-F\\d:]",
                t = function(x) {
                    return x && x.includeBoundaries ? "(?:(?<=\\s|^)(?=" + e + ")|(?<=" + e + ")(?=\\s|$))" : ""
                },
                r = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",
                n = "[a-fA-F\\d]{1,4}",
                o = (`
(?:
(?:` + n + ":){7}(?:" + n + `|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:` + n + ":){6}(?:" + r + "|:" + n + `|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:` + n + ":){5}(?::" + r + "|(?::" + n + `){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:` + n + ":){4}(?:(?::" + n + "){0,1}:" + r + "|(?::" + n + `){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:` + n + ":){3}(?:(?::" + n + "){0,2}:" + r + "|(?::" + n + `){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:` + n + ":){2}(?:(?::" + n + "){0,3}:" + r + "|(?::" + n + `){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:` + n + ":){1}(?:(?::" + n + "){0,4}:" + r + "|(?::" + n + `){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::` + n + "){0,5}:" + r + "|(?::" + n + `){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`).replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim(),
                i = new RegExp("(?:^" + r + "$)|(?:^" + o + "$)"),
                a = new RegExp("^" + r + "$"),
                s = new RegExp("^" + o + "$"),
                l = function(x) {
                    return x && x.exact ? i : new RegExp("(?:" + t(x) + r + t(x) + ")|(?:" + t(x) + o + t(x) + ")", "g")
                };
            l.v4 = function(h) {
                return h && h.exact ? a : new RegExp("" + t(h) + r + t(h), "g")
            }, l.v6 = function(h) {
                return h && h.exact ? s : new RegExp("" + t(h) + o + t(h), "g")
            };
            var u = "(?:(?:[a-z]+:)?//)",
                f = "(?:\\S+(?::\\S*)?@)?",
                c = l.v4().source,
                d = l.v6().source,
                g = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)",
                v = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*",
                y = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))",
                b = "(?::\\d{2,5})?",
                p = '(?:[/?#][^\\s"]*)?',
                m = "(?:" + u + "|www\\.)" + f + "(?:localhost|" + c + "|" + d + "|" + g + v + y + ")" + b + p;
            return rf = new RegExp("(?:^" + m + "$)", "i"), rf
        },
        mw = {
            email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
            hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
        },
        Vs = {
            integer: function(t) {
                return Vs.number(t) && parseInt(t, 10) === t
            },
            float: function(t) {
                return Vs.number(t) && !Vs.integer(t)
            },
            array: function(t) {
                return Array.isArray(t)
            },
            regexp: function(t) {
                if (t instanceof RegExp) return !0;
                try {
                    return !!new RegExp(t)
                } catch {
                    return !1
                }
            },
            date: function(t) {
                return typeof t.getTime == "function" && typeof t.getMonth == "function" && typeof t.getYear == "function" && !isNaN(t.getTime())
            },
            number: function(t) {
                return isNaN(t) ? !1 : typeof t == "number"
            },
            object: function(t) {
                return typeof t == "object" && !Vs.array(t)
            },
            method: function(t) {
                return typeof t == "function"
            },
            email: function(t) {
                return typeof t == "string" && t.length <= 320 && !!t.match(mw.email)
            },
            url: function(t) {
                return typeof t == "string" && t.length <= 2048 && !!t.match(CN())
            },
            hex: function(t) {
                return typeof t == "string" && !!t.match(mw.hex)
            }
        },
        wN = function(t, r, n, o, i) {
            if (t.required && r === void 0) {
                gw(t, r, n, o, i);
                return
            }
            var a = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"],
                s = t.type;
            a.indexOf(s) > -1 ? Vs[s](r) || o.push(Dt(i.messages.types[s], t.fullField, t.type)) : s && typeof r !== t.type && o.push(Dt(i.messages.types[s], t.fullField, t.type))
        },
        bN = function(t, r, n, o, i) {
            var a = typeof t.len == "number",
                s = typeof t.min == "number",
                l = typeof t.max == "number",
                u = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
                f = r,
                c = null,
                d = typeof r == "number",
                g = typeof r == "string",
                v = Array.isArray(r);
            if (d ? c = "number" : g ? c = "string" : v && (c = "array"), !c) return !1;
            v && (f = r.length), g && (f = r.replace(u, "_").length), a ? f !== t.len && o.push(Dt(i.messages[c].len, t.fullField, t.len)) : s && !l && f < t.min ? o.push(Dt(i.messages[c].min, t.fullField, t.min)) : l && !s && f > t.max ? o.push(Dt(i.messages[c].max, t.fullField, t.max)) : s && l && (f < t.min || f > t.max) && o.push(Dt(i.messages[c].range, t.fullField, t.min, t.max))
        },
        ta = "enum",
        EN = function(t, r, n, o, i) {
            t[ta] = Array.isArray(t[ta]) ? t[ta] : [], t[ta].indexOf(r) === -1 && o.push(Dt(i.messages[ta], t.fullField, t[ta].join(", ")))
        },
        RN = function(t, r, n, o, i) {
            if (t.pattern) {
                if (t.pattern instanceof RegExp) t.pattern.lastIndex = 0, t.pattern.test(r) || o.push(Dt(i.messages.pattern.mismatch, t.fullField, r, t.pattern));
                else if (typeof t.pattern == "string") {
                    var a = new RegExp(t.pattern);
                    a.test(r) || o.push(Dt(i.messages.pattern.mismatch, t.fullField, r, t.pattern))
                }
            }
        },
        J = {
            required: gw,
            whitespace: SN,
            type: wN,
            range: bN,
            enum: EN,
            pattern: RN
        },
        ON = function(t, r, n, o, i) {
            var a = [],
                s = t.required || !t.required && o.hasOwnProperty(t.field);
            if (s) {
                if (De(r, "string") && !t.required) return n();
                J.required(t, r, o, a, i, "string"), De(r, "string") || (J.type(t, r, o, a, i), J.range(t, r, o, a, i), J.pattern(t, r, o, a, i), t.whitespace === !0 && J.whitespace(t, r, o, a, i))
            }
            n(a)
        },
        PN = function(t, r, n, o, i) {
            var a = [],
                s = t.required || !t.required && o.hasOwnProperty(t.field);
            if (s) {
                if (De(r) && !t.required) return n();
                J.required(t, r, o, a, i), r !== void 0 && J.type(t, r, o, a, i)
            }
            n(a)
        },
        AN = function(t, r, n, o, i) {
            var a = [],
                s = t.required || !t.required && o.hasOwnProperty(t.field);
            if (s) {
                if (r === "" && (r = void 0), De(r) && !t.required) return n();
                J.required(t, r, o, a, i), r !== void 0 && (J.type(t, r, o, a, i), J.range(t, r, o, a, i))
            }
            n(a)
        },
        TN = function(t, r, n, o, i) {
            var a = [],
                s = t.required || !t.required && o.hasOwnProperty(t.field);
            if (s) {
                if (De(r) && !t.required) return n();
                J.required(t, r, o, a, i), r !== void 0 && J.type(t, r, o, a, i)
            }
            n(a)
        },
        NN = function(t, r, n, o, i) {
            var a = [],
                s = t.required || !t.required && o.hasOwnProperty(t.field);
            if (s) {
                if (De(r) && !t.required) return n();
                J.required(t, r, o, a, i), De(r) || J.type(t, r, o, a, i)
            }
            n(a)
        },
        kN = function(t, r, n, o, i) {
            var a = [],
                s = t.required || !t.required && o.hasOwnProperty(t.field);
            if (s) {
                if (De(r) && !t.required) return n();
                J.required(t, r, o, a, i), r !== void 0 && (J.type(t, r, o, a, i), J.range(t, r, o, a, i))
            }
            n(a)
        },
        _N = function(t, r, n, o, i) {
            var a = [],
                s = t.required || !t.required && o.hasOwnProperty(t.field);
            if (s) {
                if (De(r) && !t.required) return n();
                J.required(t, r, o, a, i), r !== void 0 && (J.type(t, r, o, a, i), J.range(t, r, o, a, i))
            }
            n(a)
        },
        LN = function(t, r, n, o, i) {
            var a = [],
                s = t.required || !t.required && o.hasOwnProperty(t.field);
            if (s) {
                if (r == null && !t.required) return n();
                J.required(t, r, o, a, i, "array"), r != null && (J.type(t, r, o, a, i), J.range(t, r, o, a, i))
            }
            n(a)
        },
        $N = function(t, r, n, o, i) {
            var a = [],
                s = t.required || !t.required && o.hasOwnProperty(t.field);
            if (s) {
                if (De(r) && !t.required) return n();
                J.required(t, r, o, a, i), r !== void 0 && J.type(t, r, o, a, i)
            }
            n(a)
        },
        MN = "enum",
        IN = function(t, r, n, o, i) {
            var a = [],
                s = t.required || !t.required && o.hasOwnProperty(t.field);
            if (s) {
                if (De(r) && !t.required) return n();
                J.required(t, r, o, a, i), r !== void 0 && J[MN](t, r, o, a, i)
            }
            n(a)
        },
        jN = function(t, r, n, o, i) {
            var a = [],
                s = t.required || !t.required && o.hasOwnProperty(t.field);
            if (s) {
                if (De(r, "string") && !t.required) return n();
                J.required(t, r, o, a, i), De(r, "string") || J.pattern(t, r, o, a, i)
            }
            n(a)
        },
        FN = function(t, r, n, o, i) {
            var a = [],
                s = t.required || !t.required && o.hasOwnProperty(t.field);
            if (s) {
                if (De(r, "date") && !t.required) return n();
                if (J.required(t, r, o, a, i), !De(r, "date")) {
                    var l;
                    r instanceof Date ? l = r : l = new Date(r), J.type(t, l, o, a, i), l && J.range(t, l.getTime(), o, a, i)
                }
            }
            n(a)
        },
        DN = function(t, r, n, o, i) {
            var a = [],
                s = Array.isArray(r) ? "array" : typeof r;
            J.required(t, r, o, a, i, s), n(a)
        },
        _g = function(t, r, n, o, i) {
            var a = t.type,
                s = [],
                l = t.required || !t.required && o.hasOwnProperty(t.field);
            if (l) {
                if (De(r, a) && !t.required) return n();
                J.required(t, r, o, s, i, a), De(r, a) || J.type(t, r, o, s, i)
            }
            n(s)
        },
        BN = function(t, r, n, o, i) {
            var a = [],
                s = t.required || !t.required && o.hasOwnProperty(t.field);
            if (s) {
                if (De(r) && !t.required) return n();
                J.required(t, r, o, a, i)
            }
            n(a)
        },
        Us = {
            string: ON,
            method: PN,
            number: AN,
            boolean: TN,
            regexp: NN,
            integer: kN,
            float: _N,
            array: LN,
            object: $N,
            enum: IN,
            pattern: jN,
            date: FN,
            url: _g,
            hex: _g,
            email: _g,
            required: DN,
            any: BN
        };

    function Ig() {
        return {
            default: "Validation error on field %s",
            required: "%s is required",
            enum: "%s must be one of %s",
            whitespace: "%s cannot be empty",
            date: {
                format: "%s date %s is invalid for format %s",
                parse: "%s date could not be parsed, %s is invalid ",
                invalid: "%s date %s is invalid"
            },
            types: {
                string: "%s is not a %s",
                method: "%s is not a %s (function)",
                array: "%s is not an %s",
                object: "%s is not an %s",
                number: "%s is not a %s",
                date: "%s is not a %s",
                boolean: "%s is not a %s",
                integer: "%s is not an %s",
                float: "%s is not a %s",
                regexp: "%s is not a valid %s",
                email: "%s is not a valid %s",
                url: "%s is not a valid %s",
                hex: "%s is not a valid %s"
            },
            string: {
                len: "%s must be exactly %s characters",
                min: "%s must be at least %s characters",
                max: "%s cannot be longer than %s characters",
                range: "%s must be between %s and %s characters"
            },
            number: {
                len: "%s must equal %s",
                min: "%s cannot be less than %s",
                max: "%s cannot be greater than %s",
                range: "%s must be between %s and %s"
            },
            array: {
                len: "%s must be exactly %s in length",
                min: "%s cannot be less than %s in length",
                max: "%s cannot be greater than %s in length",
                range: "%s must be between %s and %s in length"
            },
            pattern: {
                mismatch: "%s value %s does not match pattern %s"
            },
            clone: function() {
                var t = JSON.parse(JSON.stringify(this));
                return t.clone = this.clone, t
            }
        }
    }
    var jg = Ig(),
        ra = function() {
            function e(r) {
                this.rules = null, this._messages = jg, this.define(r)
            }
            var t = e.prototype;
            return t.define = function(n) {
                var o = this;
                if (!n) throw new Error("Cannot configure a schema with no rules");
                if (typeof n != "object" || Array.isArray(n)) throw new Error("Rules must be an object");
                this.rules = {}, Object.keys(n).forEach(function(i) {
                    var a = n[i];
                    o.rules[i] = Array.isArray(a) ? a : [a]
                })
            }, t.messages = function(n) {
                return n && (this._messages = pw(Ig(), n)), this._messages
            }, t.validate = function(n, o, i) {
                var a = this;
                o === void 0 && (o = {}), i === void 0 && (i = function() {});
                var s = n,
                    l = o,
                    u = i;
                if (typeof l == "function" && (u = l, l = {}), !this.rules || Object.keys(this.rules).length === 0) return u && u(null, s), Promise.resolve(s);

                function f(y) {
                    var b = [],
                        p = {};

                    function m(x) {
                        if (Array.isArray(x)) {
                            var S;
                            b = (S = b).concat.apply(S, x)
                        } else b.push(x)
                    }
                    for (var h = 0; h < y.length; h++) m(y[h]);
                    b.length ? (p = Mg(b), u(b, p)) : u(null, s)
                }
                if (l.messages) {
                    var c = this.messages();
                    c === jg && (c = Ig()), pw(c, l.messages), l.messages = c
                } else l.messages = this.messages();
                var d = {},
                    g = l.keys || Object.keys(this.rules);
                g.forEach(function(y) {
                    var b = a.rules[y],
                        p = s[y];
                    b.forEach(function(m) {
                        var h = m;
                        typeof h.transform == "function" && (s === n && (s = $o({}, s)), p = s[y] = h.transform(p)), typeof h == "function" ? h = {
                            validator: h
                        } : h = $o({}, h), h.validator = a.getValidationMethod(h), h.validator && (h.field = y, h.fullField = h.fullField || y, h.type = a.getType(h), d[y] = d[y] || [], d[y].push({
                            rule: h,
                            value: p,
                            source: s,
                            field: y
                        }))
                    })
                });
                var v = {};
                return vN(d, l, function(y, b) {
                    var p = y.rule,
                        m = (p.type === "object" || p.type === "array") && (typeof p.fields == "object" || typeof p.defaultField == "object");
                    m = m && (p.required || !p.required && y.value), p.field = y.field;

                    function h(C, w) {
                        return $o({}, w, {
                            fullField: p.fullField + "." + C,
                            fullFields: p.fullFields ? [].concat(p.fullFields, [C]) : [C]
                        })
                    }

                    function x(C) {
                        C === void 0 && (C = []);
                        var w = Array.isArray(C) ? C : [C];
                        !l.suppressWarning && w.length && e.warning("async-validator:", w), w.length && p.message !== void 0 && (w = [].concat(p.message));
                        var O = w.map(dw(p, s));
                        if (l.first && O.length) return v[p.field] = 1, b(O);
                        if (!m) b(O);
                        else {
                            if (p.required && !y.value) return p.message !== void 0 ? O = [].concat(p.message).map(dw(p, s)) : l.error && (O = [l.error(p, Dt(l.messages.required, p.field))]), b(O);
                            var A = {};
                            p.defaultField && Object.keys(y.value).map(function(R) {
                                A[R] = p.defaultField
                            }), A = $o({}, A, y.rule.fields);
                            var E = {};
                            Object.keys(A).forEach(function(R) {
                                var P = A[R],
                                    k = Array.isArray(P) ? P : [P];
                                E[R] = k.map(h.bind(null, R))
                            });
                            var N = new e(E);
                            N.messages(l.messages), y.rule.options && (y.rule.options.messages = l.messages, y.rule.options.error = l.error), N.validate(y.value, y.rule.options || l, function(R) {
                                var P = [];
                                O && O.length && P.push.apply(P, O), R && R.length && P.push.apply(P, R), b(P.length ? P : null)
                            })
                        }
                    }
                    var S;
                    if (p.asyncValidator) S = p.asyncValidator(p, y.value, x, y.source, l);
                    else if (p.validator) {
                        try {
                            S = p.validator(p, y.value, x, y.source, l)
                        } catch (C) {
                            console.error == null, l.suppressValidatorError || setTimeout(function() {
                                throw C
                            }, 0), x(C.message)
                        }
                        S === !0 ? x() : S === !1 ? x(typeof p.message == "function" ? p.message(p.fullField || p.field) : p.message || (p.fullField || p.field) + " fails") : S instanceof Array ? x(S) : S instanceof Error && x(S.message)
                    }
                    S && S.then && S.then(function() {
                        return x()
                    }, function(C) {
                        return x(C)
                    })
                }, function(y) {
                    f(y)
                }, s)
            }, t.getType = function(n) {
                if (n.type === void 0 && n.pattern instanceof RegExp && (n.type = "pattern"), typeof n.validator != "function" && n.type && !Us.hasOwnProperty(n.type)) throw new Error(Dt("Unknown rule type %s", n.type));
                return n.type || "string"
            }, t.getValidationMethod = function(n) {
                if (typeof n.validator == "function") return n.validator;
                var o = Object.keys(n),
                    i = o.indexOf("message");
                return i !== -1 && o.splice(i, 1), o.length === 1 && o[0] === "required" ? Us.required : Us[this.getType(n)] || void 0
            }, e
        }();
    ra.register = function(t, r) {
        if (typeof r != "function") throw new Error("Cannot register a validator by type, validator is not a function");
        Us[t] = r
    };
    ra.warning = pN;
    ra.messages = jg;
    ra.validators = Us;
    var af = T($());
    var Bt = "'${name}' is not a valid ${type}",
        of = {
            default: "Validation error on field '${name}'",
            required: "'${name}' is required",
            enum: "'${name}' must be one of [${enum}]",
            whitespace: "'${name}' cannot be empty",
            date: {
                format: "'${name}' is invalid for format date",
                parse: "'${name}' could not be parsed as date",
                invalid: "'${name}' is invalid date"
            },
            types: {
                string: Bt,
                method: Bt,
                array: Bt,
                object: Bt,
                number: Bt,
                date: Bt,
                boolean: Bt,
                integer: Bt,
                float: Bt,
                regexp: Bt,
                email: Bt,
                url: Bt,
                hex: Bt
            },
            string: {
                len: "'${name}' must be exactly ${len} characters",
                min: "'${name}' must be at least ${min} characters",
                max: "'${name}' cannot be longer than ${max} characters",
                range: "'${name}' must be between ${min} and ${max} characters"
            },
            number: {
                len: "'${name}' must equal ${len}",
                min: "'${name}' cannot be less than ${min}",
                max: "'${name}' cannot be greater than ${max}",
                range: "'${name}' must be between ${min} and ${max}"
            },
            array: {
                len: "'${name}' must be exactly ${len} in length",
                min: "'${name}' cannot be less than ${min} in length",
                max: "'${name}' cannot be greater than ${max} in length",
                range: "'${name}' must be between ${min} and ${max} in length"
            },
            pattern: {
                mismatch: "'${name}' does not match pattern ${pattern}"
            }
        };
    var hw = ra;

    function zN(e, t) {
        return e.replace(/\$\{\w+\}/g, function(r) {
            var n = r.slice(2, -1);
            return t[n]
        })
    }
    var vw = "CODE_LOGIC_ERROR";

    function Fg(e, t, r, n, o) {
        return Dg.apply(this, arguments)
    }

    function Dg() {
        return Dg = cn(st().mark(function e(t, r, n, o, i) {
            var a, s, l, u, f, c, d, g, v;
            return st().wrap(function(b) {
                for (;;) switch (b.prev = b.next) {
                    case 0:
                        return a = L({}, n), delete a.ruleIndex, hw.warning = function() {}, a.validator && (s = a.validator, a.validator = function() {
                            try {
                                return s.apply(void 0, arguments)
                            } catch {
                                return Promise.reject(vw)
                            }
                        }), l = null, a && a.type === "array" && a.defaultField && (l = a.defaultField, delete a.defaultField), u = new hw(D({}, t, [a])), f = nn(of, o.validateMessages), u.messages(f), c = [], b.prev = 10, b.next = 13, Promise.resolve(u.validate(D({}, t, r), L({}, o)));
                    case 13:
                        b.next = 18;
                        break;
                    case 15:
                        b.prev = 15, b.t0 = b.catch(10), b.t0.errors && (c = b.t0.errors.map(function(p, m) {
                            var h = p.message,
                                x = h === vw ? f.default : h;
                            return af.isValidElement(x) ? af.cloneElement(x, {
                                key: "error_".concat(m)
                            }) : x
                        }));
                    case 18:
                        if (!(!c.length && l)) {
                            b.next = 23;
                            break
                        }
                        return b.next = 21, Promise.all(r.map(function(p, m) {
                            return Fg("".concat(t, ".").concat(m), p, l, o, i)
                        }));
                    case 21:
                        return d = b.sent, b.abrupt("return", d.reduce(function(p, m) {
                            return [].concat(z(p), z(m))
                        }, []));
                    case 23:
                        return g = L(L({}, n), {}, {
                            name: t,
                            enum: (n.enum || []).join(", ")
                        }, i), v = c.map(function(p) {
                            return typeof p == "string" ? zN(p, g) : p
                        }), b.abrupt("return", v);
                    case 26:
                    case "end":
                        return b.stop()
                }
            }, e, null, [
                [10, 15]
            ])
        })), Dg.apply(this, arguments)
    }

    function yw(e, t, r, n, o, i) {
        var a = e.join("."),
            s = r.map(function(f, c) {
                var d = f.validator,
                    g = L(L({}, f), {}, {
                        ruleIndex: c
                    });
                return d && (g.validator = function(v, y, b) {
                    var p = !1,
                        m = function() {
                            for (var S = arguments.length, C = new Array(S), w = 0; w < S; w++) C[w] = arguments[w];
                            Promise.resolve().then(function() {
                                Ie(!p, "Your validator function has already return a promise. `callback` will be ignored."), p || b.apply(void 0, C)
                            })
                        },
                        h = d(v, y, m);
                    p = h && typeof h.then == "function" && typeof h.catch == "function", Ie(p, "`callback` is deprecated. Please return a promise instead."), p && h.then(function() {
                        b()
                    }).catch(function(x) {
                        b(x || " ")
                    })
                }), g
            }).sort(function(f, c) {
                var d = f.warningOnly,
                    g = f.ruleIndex,
                    v = c.warningOnly,
                    y = c.ruleIndex;
                return !!d == !!v ? g - y : d ? 1 : -1
            }),
            l;
        if (o === !0) l = new Promise(function() {
            var f = cn(st().mark(function c(d, g) {
                var v, y, b;
                return st().wrap(function(m) {
                    for (;;) switch (m.prev = m.next) {
                        case 0:
                            v = 0;
                        case 1:
                            if (!(v < s.length)) {
                                m.next = 12;
                                break
                            }
                            return y = s[v], m.next = 5, Fg(a, t, y, n, i);
                        case 5:
                            if (b = m.sent, !b.length) {
                                m.next = 9;
                                break
                            }
                            return g([{
                                errors: b,
                                rule: y
                            }]), m.abrupt("return");
                        case 9:
                            v += 1, m.next = 1;
                            break;
                        case 12:
                            d([]);
                        case 13:
                        case "end":
                            return m.stop()
                    }
                }, c)
            }));
            return function(c, d) {
                return f.apply(this, arguments)
            }
        }());
        else {
            var u = s.map(function(f) {
                return Fg(a, t, f, n, i).then(function(c) {
                    return {
                        errors: c,
                        rule: f
                    }
                })
            });
            l = (o ? VN(u) : HN(u)).then(function(f) {
                return Promise.reject(f)
            })
        }
        return l.catch(function(f) {
            return f
        }), l
    }

    function HN(e) {
        return Bg.apply(this, arguments)
    }

    function Bg() {
        return Bg = cn(st().mark(function e(t) {
            return st().wrap(function(n) {
                for (;;) switch (n.prev = n.next) {
                    case 0:
                        return n.abrupt("return", Promise.all(t).then(function(o) {
                            var i, a = (i = []).concat.apply(i, z(o));
                            return a
                        }));
                    case 1:
                    case "end":
                        return n.stop()
                }
            }, e)
        })), Bg.apply(this, arguments)
    }

    function VN(e) {
        return zg.apply(this, arguments)
    }

    function zg() {
        return zg = cn(st().mark(function e(t) {
            var r;
            return st().wrap(function(o) {
                for (;;) switch (o.prev = o.next) {
                    case 0:
                        return r = 0, o.abrupt("return", new Promise(function(i) {
                            t.forEach(function(a) {
                                a.then(function(s) {
                                    s.errors.length && i([s]), r += 1, r === t.length && i([])
                                })
                            })
                        }));
                    case 2:
                    case "end":
                        return o.stop()
                }
            }, e)
        })), zg.apply(this, arguments)
    }

    function he(e) {
        return Hs(e)
    }

    function Hg(e, t) {
        var r = {};
        return t.forEach(function(n) {
            var o = Ve(e, n);
            r = mt(r, n, o)
        }), r
    }

    function Mo(e, t) {
        return e && e.some(function(r) {
            return Vg(r, t)
        })
    }

    function Vg(e, t) {
        return !e || !t || e.length !== t.length ? !1 : e.every(function(r, n) {
            return t[n] === r
        })
    }

    function xw(e, t) {
        if (e === t) return !0;
        if (!e && t || e && !t || !e || !t || U(e) !== "object" || U(t) !== "object") return !1;
        var r = Object.keys(e),
            n = Object.keys(t),
            o = new Set([].concat(r, n));
        return z(o).every(function(i) {
            var a = e[i],
                s = t[i];
            return typeof a == "function" && typeof s == "function" ? !0 : a === s
        })
    }

    function Sw(e) {
        var t = arguments.length <= 1 ? void 0 : arguments[1];
        return t && t.target && U(t.target) === "object" && e in t.target ? t.target[e] : t
    }

    function Ug(e, t, r) {
        var n = e.length;
        if (t < 0 || t >= n || r < 0 || r >= n) return e;
        var o = e[t],
            i = t - r;
        return i > 0 ? [].concat(z(e.slice(0, r)), [o], z(e.slice(r, t)), z(e.slice(t + 1, n))) : i < 0 ? [].concat(z(e.slice(0, t)), z(e.slice(t + 1, r + 1)), [o], z(e.slice(r + 1, n))) : e
    }
    var UN = ["name"],
        or = [];

    function Cw(e, t, r, n, o, i) {
        return typeof e == "function" ? e(t, r, "source" in i ? {
            source: i.source
        } : {}) : n !== o
    }
    var Wg = function(e) {
        Jt(r, e);
        var t = Co(r);

        function r(n) {
            var o;
            if (ee(this, r), o = t.call(this, n), o.state = {
                    resetCount: 0
                }, o.cancelRegisterFunc = null, o.mounted = !1, o.touched = !1, o.dirty = !1, o.validatePromise = void 0, o.prevValidating = void 0, o.errors = or, o.warnings = or, o.cancelRegister = function() {
                    var l = o.props,
                        u = l.preserve,
                        f = l.isListField,
                        c = l.name;
                    o.cancelRegisterFunc && o.cancelRegisterFunc(f, u, he(c)), o.cancelRegisterFunc = null
                }, o.getNamePath = function() {
                    var l = o.props,
                        u = l.name,
                        f = l.fieldContext,
                        c = f.prefixName,
                        d = c === void 0 ? [] : c;
                    return u !== void 0 ? [].concat(z(d), z(u)) : []
                }, o.getRules = function() {
                    var l = o.props,
                        u = l.rules,
                        f = u === void 0 ? [] : u,
                        c = l.fieldContext;
                    return f.map(function(d) {
                        return typeof d == "function" ? d(c) : d
                    })
                }, o.refresh = function() {
                    o.mounted && o.setState(function(l) {
                        var u = l.resetCount;
                        return {
                            resetCount: u + 1
                        }
                    })
                }, o.triggerMetaEvent = function(l) {
                    var u = o.props.onMetaChange;
                    u?.(L(L({}, o.getMeta()), {}, {
                        destroy: l
                    }))
                }, o.onStoreChange = function(l, u, f) {
                    var c = o.props,
                        d = c.shouldUpdate,
                        g = c.dependencies,
                        v = g === void 0 ? [] : g,
                        y = c.onReset,
                        b = f.store,
                        p = o.getNamePath(),
                        m = o.getValue(l),
                        h = o.getValue(b),
                        x = u && Mo(u, p);
                    switch (f.type === "valueUpdate" && f.source === "external" && m !== h && (o.touched = !0, o.dirty = !0, o.validatePromise = null, o.errors = or, o.warnings = or, o.triggerMetaEvent()), f.type) {
                        case "reset":
                            if (!u || x) {
                                o.touched = !1, o.dirty = !1, o.validatePromise = void 0, o.errors = or, o.warnings = or, o.triggerMetaEvent(), y?.(), o.refresh();
                                return
                            }
                            break;
                        case "remove": {
                            if (d) {
                                o.reRender();
                                return
                            }
                            break
                        }
                        case "setField": {
                            if (x) {
                                var S = f.data;
                                "touched" in S && (o.touched = S.touched), "validating" in S && !("originRCField" in S) && (o.validatePromise = S.validating ? Promise.resolve([]) : null), "errors" in S && (o.errors = S.errors || or), "warnings" in S && (o.warnings = S.warnings || or), o.dirty = !0, o.triggerMetaEvent(), o.reRender();
                                return
                            }
                            if (d && !p.length && Cw(d, l, b, m, h, f)) {
                                o.reRender();
                                return
                            }
                            break
                        }
                        case "dependenciesUpdate": {
                            var C = v.map(he);
                            if (C.some(function(w) {
                                    return Mo(f.relatedFields, w)
                                })) {
                                o.reRender();
                                return
                            }
                            break
                        }
                        default:
                            if (x || (!v.length || p.length || d) && Cw(d, l, b, m, h, f)) {
                                o.reRender();
                                return
                            }
                            break
                    }
                    d === !0 && o.reRender()
                }, o.validateRules = function(l) {
                    var u = o.getNamePath(),
                        f = o.getValue(),
                        c = l || {},
                        d = c.triggerName,
                        g = c.validateOnly,
                        v = g === void 0 ? !1 : g,
                        y = Promise.resolve().then(function() {
                            if (!o.mounted) return [];
                            var b = o.props,
                                p = b.validateFirst,
                                m = p === void 0 ? !1 : p,
                                h = b.messageVariables,
                                x = o.getRules();
                            d && (x = x.filter(function(C) {
                                return C
                            }).filter(function(C) {
                                var w = C.validateTrigger;
                                if (!w) return !0;
                                var O = Hs(w);
                                return O.includes(d)
                            }));
                            var S = yw(u, f, x, l, m, h);
                            return S.catch(function(C) {
                                return C
                            }).then(function() {
                                var C = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : or;
                                if (o.validatePromise === y) {
                                    var w;
                                    o.validatePromise = null;
                                    var O = [],
                                        A = [];
                                    (w = C.forEach) === null || w === void 0 || w.call(C, function(E) {
                                        var N = E.rule.warningOnly,
                                            R = E.errors,
                                            P = R === void 0 ? or : R;
                                        N ? A.push.apply(A, z(P)) : O.push.apply(O, z(P))
                                    }), o.errors = O, o.warnings = A, o.triggerMetaEvent(), o.reRender()
                                }
                            }), S
                        });
                    return v || (o.validatePromise = y, o.dirty = !0, o.errors = or, o.warnings = or, o.triggerMetaEvent(), o.reRender()), y
                }, o.isFieldValidating = function() {
                    return !!o.validatePromise
                }, o.isFieldTouched = function() {
                    return o.touched
                }, o.isFieldDirty = function() {
                    if (o.dirty || o.props.initialValue !== void 0) return !0;
                    var l = o.props.fieldContext,
                        u = l.getInternalHooks(xr),
                        f = u.getInitialValue;
                    return f(o.getNamePath()) !== void 0
                }, o.getErrors = function() {
                    return o.errors
                }, o.getWarnings = function() {
                    return o.warnings
                }, o.isListField = function() {
                    return o.props.isListField
                }, o.isList = function() {
                    return o.props.isList
                }, o.isPreserve = function() {
                    return o.props.preserve
                }, o.getMeta = function() {
                    o.prevValidating = o.isFieldValidating();
                    var l = {
                        touched: o.isFieldTouched(),
                        validating: o.prevValidating,
                        errors: o.errors,
                        warnings: o.warnings,
                        name: o.getNamePath(),
                        validated: o.validatePromise === null
                    };
                    return l
                }, o.getOnlyChild = function(l) {
                    if (typeof l == "function") {
                        var u = o.getMeta();
                        return L(L({}, o.getOnlyChild(l(o.getControlled(), u, o.props.fieldContext))), {}, {
                            isFunction: !0
                        })
                    }
                    var f = Li(l);
                    return f.length !== 1 || !ht.isValidElement(f[0]) ? {
                        child: f,
                        isFunction: !1
                    } : {
                        child: f[0],
                        isFunction: !1
                    }
                }, o.getValue = function(l) {
                    var u = o.props.fieldContext.getFieldsValue,
                        f = o.getNamePath();
                    return Ve(l || u(!0), f)
                }, o.getControlled = function() {
                    var l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
                        u = o.props,
                        f = u.trigger,
                        c = u.validateTrigger,
                        d = u.getValueFromEvent,
                        g = u.normalize,
                        v = u.valuePropName,
                        y = u.getValueProps,
                        b = u.fieldContext,
                        p = c !== void 0 ? c : b.validateTrigger,
                        m = o.getNamePath(),
                        h = b.getInternalHooks,
                        x = b.getFieldsValue,
                        S = h(xr),
                        C = S.dispatch,
                        w = o.getValue(),
                        O = y || function(R) {
                            return D({}, v, R)
                        },
                        A = l[f],
                        E = L(L({}, l), O(w));
                    E[f] = function() {
                        o.touched = !0, o.dirty = !0, o.triggerMetaEvent();
                        for (var R, P = arguments.length, k = new Array(P), _ = 0; _ < P; _++) k[_] = arguments[_];
                        d ? R = d.apply(void 0, k) : R = Sw.apply(void 0, [v].concat(k)), g && (R = g(R, w, x(!0))), C({
                            type: "updateValue",
                            namePath: m,
                            value: R
                        }), A && A.apply(void 0, k)
                    };
                    var N = Hs(p || []);
                    return N.forEach(function(R) {
                        var P = E[R];
                        E[R] = function() {
                            P && P.apply(void 0, arguments);
                            var k = o.props.rules;
                            k && k.length && C({
                                type: "validateField",
                                namePath: m,
                                triggerName: R
                            })
                        }
                    }), E
                }, n.fieldContext) {
                var i = n.fieldContext.getInternalHooks,
                    a = i(xr),
                    s = a.initEntityValue;
                s(it(o))
            }
            return o
        }
        return te(r, [{
            key: "componentDidMount",
            value: function() {
                var o = this.props,
                    i = o.shouldUpdate,
                    a = o.fieldContext;
                if (this.mounted = !0, a) {
                    var s = a.getInternalHooks,
                        l = s(xr),
                        u = l.registerField;
                    this.cancelRegisterFunc = u(this)
                }
                i === !0 && this.reRender()
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                this.cancelRegister(), this.triggerMetaEvent(!0), this.mounted = !1
            }
        }, {
            key: "reRender",
            value: function() {
                this.mounted && this.forceUpdate()
            }
        }, {
            key: "render",
            value: function() {
                var o = this.state.resetCount,
                    i = this.props.children,
                    a = this.getOnlyChild(i),
                    s = a.child,
                    l = a.isFunction,
                    u;
                return l ? u = s : ht.isValidElement(s) ? u = ht.cloneElement(s, this.getControlled(s.props)) : (Ie(!s, "`children` of Field is not validate ReactElement."), u = s), ht.createElement(ht.Fragment, {
                    key: o
                }, u)
            }
        }]), r
    }(ht.Component);
    Wg.contextType = Sr;
    Wg.defaultProps = {
        trigger: "onChange",
        valuePropName: "value"
    };

    function WN(e) {
        var t = e.name,
            r = me(e, UN),
            n = ht.useContext(Sr),
            o = ht.useContext(Xn),
            i = t !== void 0 ? he(t) : void 0,
            a = "keep";
        return r.isListField || (a = "_".concat((i || []).join("_"))), ht.createElement(Wg, X({
            key: a,
            name: i,
            isListField: !!o
        }, r, {
            fieldContext: n
        }))
    }
    var sf = WN;
    var zt = T($());
    var QN = function(t) {
            var r = t.name,
                n = t.initialValue,
                o = t.children,
                i = t.rules,
                a = t.validateTrigger,
                s = t.isListField,
                l = zt.useContext(Sr),
                u = zt.useContext(Xn),
                f = zt.useRef({
                    keys: [],
                    id: 0
                }),
                c = f.current,
                d = zt.useMemo(function() {
                    var b = he(l.prefixName) || [];
                    return [].concat(z(b), z(he(r)))
                }, [l.prefixName, r]),
                g = zt.useMemo(function() {
                    return L(L({}, l), {}, {
                        prefixName: d
                    })
                }, [l, d]),
                v = zt.useMemo(function() {
                    return {
                        getKey: function(p) {
                            var m = d.length,
                                h = p[m];
                            return [c.keys[h], p.slice(m + 1)]
                        }
                    }
                }, [d]);
            if (typeof o != "function") return Ie(!1, "Form.List only accepts function as children."), null;
            var y = function(p, m, h) {
                var x = h.source;
                return x === "internal" ? !1 : p !== m
            };
            return zt.createElement(Xn.Provider, {
                value: v
            }, zt.createElement(Sr.Provider, {
                value: g
            }, zt.createElement(sf, {
                name: [],
                shouldUpdate: y,
                rules: i,
                validateTrigger: a,
                initialValue: n,
                isList: !0,
                isListField: s ?? !!u
            }, function(b, p) {
                var m = b.value,
                    h = m === void 0 ? [] : m,
                    x = b.onChange,
                    S = l.getFieldValue,
                    C = function() {
                        var E = S(d || []);
                        return E || []
                    },
                    w = {
                        add: function(E, N) {
                            var R = C();
                            N >= 0 && N <= R.length ? (c.keys = [].concat(z(c.keys.slice(0, N)), [c.id], z(c.keys.slice(N))), x([].concat(z(R.slice(0, N)), [E], z(R.slice(N))))) : (c.keys = [].concat(z(c.keys), [c.id]), x([].concat(z(R), [E]))), c.id += 1
                        },
                        remove: function(E) {
                            var N = C(),
                                R = new Set(Array.isArray(E) ? E : [E]);
                            R.size <= 0 || (c.keys = c.keys.filter(function(P, k) {
                                return !R.has(k)
                            }), x(N.filter(function(P, k) {
                                return !R.has(k)
                            })))
                        },
                        move: function(E, N) {
                            if (E !== N) {
                                var R = C();
                                E < 0 || E >= R.length || N < 0 || N >= R.length || (c.keys = Ug(c.keys, E, N), x(Ug(R, E, N)))
                            }
                        }
                    },
                    O = h || [];
                return Array.isArray(O) || (O = []), o(O.map(function(A, E) {
                    var N = c.keys[E];
                    return N === void 0 && (c.keys[E] = c.id, N = c.keys[E], c.id += 1), {
                        name: E,
                        key: N,
                        isListField: !0
                    }
                }), w, p)
            })))
        },
        ww = QN;
    var lf = T($());

    function bw(e) {
        var t = !1,
            r = e.length,
            n = [];
        return e.length ? new Promise(function(o, i) {
            e.forEach(function(a, s) {
                a.catch(function(l) {
                    return t = !0, l
                }).then(function(l) {
                    r -= 1, n[s] = l, !(r > 0) && (t && i(n), o(n))
                })
            })
        }) : Promise.resolve([])
    }
    var Ew = "__@field_split__";

    function Qg(e) {
        return e.map(function(t) {
            return "".concat(U(t), ":").concat(t)
        }).join(Ew)
    }
    var KN = function() {
            function e() {
                ee(this, e), this.kvs = new Map
            }
            return te(e, [{
                key: "set",
                value: function(r, n) {
                    this.kvs.set(Qg(r), n)
                }
            }, {
                key: "get",
                value: function(r) {
                    return this.kvs.get(Qg(r))
                }
            }, {
                key: "update",
                value: function(r, n) {
                    var o = this.get(r),
                        i = n(o);
                    i ? this.set(r, i) : this.delete(r)
                }
            }, {
                key: "delete",
                value: function(r) {
                    this.kvs.delete(Qg(r))
                }
            }, {
                key: "map",
                value: function(r) {
                    return z(this.kvs.entries()).map(function(n) {
                        var o = F(n, 2),
                            i = o[0],
                            a = o[1],
                            s = i.split(Ew);
                        return r({
                            key: s.map(function(l) {
                                var u = l.match(/^([^:]*):(.*)$/),
                                    f = F(u, 3),
                                    c = f[1],
                                    d = f[2];
                                return c === "number" ? Number(d) : d
                            }),
                            value: a
                        })
                    })
                }
            }, {
                key: "toJSON",
                value: function() {
                    var r = {};
                    return this.map(function(n) {
                        var o = n.key,
                            i = n.value;
                        return r[o.join(".")] = i, null
                    }), r
                }
            }]), e
        }(),
        Io = KN;
    var XN = ["name"],
        GN = te(function e(t) {
            var r = this;
            ee(this, e), this.formHooked = !1, this.forceRootUpdate = void 0, this.subscribable = !0, this.store = {}, this.fieldEntities = [], this.initialValues = {}, this.callbacks = {}, this.validateMessages = null, this.preserve = null, this.lastValidatePromise = null, this.getForm = function() {
                return {
                    getFieldValue: r.getFieldValue,
                    getFieldsValue: r.getFieldsValue,
                    getFieldError: r.getFieldError,
                    getFieldWarning: r.getFieldWarning,
                    getFieldsError: r.getFieldsError,
                    isFieldsTouched: r.isFieldsTouched,
                    isFieldTouched: r.isFieldTouched,
                    isFieldValidating: r.isFieldValidating,
                    isFieldsValidating: r.isFieldsValidating,
                    resetFields: r.resetFields,
                    setFields: r.setFields,
                    setFieldValue: r.setFieldValue,
                    setFieldsValue: r.setFieldsValue,
                    validateFields: r.validateFields,
                    submit: r.submit,
                    _init: !0,
                    getInternalHooks: r.getInternalHooks
                }
            }, this.getInternalHooks = function(n) {
                return n === xr ? (r.formHooked = !0, {
                    dispatch: r.dispatch,
                    initEntityValue: r.initEntityValue,
                    registerField: r.registerField,
                    useSubscribe: r.useSubscribe,
                    setInitialValues: r.setInitialValues,
                    destroyForm: r.destroyForm,
                    setCallbacks: r.setCallbacks,
                    setValidateMessages: r.setValidateMessages,
                    getFields: r.getFields,
                    setPreserve: r.setPreserve,
                    getInitialValue: r.getInitialValue,
                    registerWatch: r.registerWatch
                }) : (Ie(!1, "`getInternalHooks` is internal usage. Should not call directly."), null)
            }, this.useSubscribe = function(n) {
                r.subscribable = n
            }, this.prevWithoutPreserves = null, this.setInitialValues = function(n, o) {
                if (r.initialValues = n || {}, o) {
                    var i, a = nn(n, r.store);
                    (i = r.prevWithoutPreserves) === null || i === void 0 || i.map(function(s) {
                        var l = s.key;
                        a = mt(a, l, Ve(n, l))
                    }), r.prevWithoutPreserves = null, r.updateStore(a)
                }
            }, this.destroyForm = function() {
                var n = new Io;
                r.getFieldEntities(!0).forEach(function(o) {
                    r.isMergedPreserve(o.isPreserve()) || n.set(o.getNamePath(), !0)
                }), r.prevWithoutPreserves = n
            }, this.getInitialValue = function(n) {
                var o = Ve(r.initialValues, n);
                return n.length ? nn(o) : o
            }, this.setCallbacks = function(n) {
                r.callbacks = n
            }, this.setValidateMessages = function(n) {
                r.validateMessages = n
            }, this.setPreserve = function(n) {
                r.preserve = n
            }, this.watchList = [], this.registerWatch = function(n) {
                return r.watchList.push(n),
                    function() {
                        r.watchList = r.watchList.filter(function(o) {
                            return o !== n
                        })
                    }
            }, this.notifyWatch = function() {
                var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
                if (r.watchList.length) {
                    var o = r.getFieldsValue(),
                        i = r.getFieldsValue(!0);
                    r.watchList.forEach(function(a) {
                        a(o, i, n)
                    })
                }
            }, this.timeoutId = null, this.warningUnhooked = function() {}, this.updateStore = function(n) {
                r.store = n
            }, this.getFieldEntities = function() {
                var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
                return n ? r.fieldEntities.filter(function(o) {
                    return o.getNamePath().length
                }) : r.fieldEntities
            }, this.getFieldsMap = function() {
                var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1,
                    o = new Io;
                return r.getFieldEntities(n).forEach(function(i) {
                    var a = i.getNamePath();
                    o.set(a, i)
                }), o
            }, this.getFieldEntitiesForNamePathList = function(n) {
                if (!n) return r.getFieldEntities(!0);
                var o = r.getFieldsMap(!0);
                return n.map(function(i) {
                    var a = he(i);
                    return o.get(a) || {
                        INVALIDATE_NAME_PATH: he(i)
                    }
                })
            }, this.getFieldsValue = function(n, o) {
                if (r.warningUnhooked(), n === !0 && !o) return r.store;
                var i = r.getFieldEntitiesForNamePathList(Array.isArray(n) ? n : null),
                    a = [];
                return i.forEach(function(s) {
                    var l, u = "INVALIDATE_NAME_PATH" in s ? s.INVALIDATE_NAME_PATH : s.getNamePath();
                    if (!(!n && (!((l = s.isListField) === null || l === void 0) && l.call(s))))
                        if (!o) a.push(u);
                        else {
                            var f = "getMeta" in s ? s.getMeta() : null;
                            o(f) && a.push(u)
                        }
                }), Hg(r.store, a.map(he))
            }, this.getFieldValue = function(n) {
                r.warningUnhooked();
                var o = he(n);
                return Ve(r.store, o)
            }, this.getFieldsError = function(n) {
                r.warningUnhooked();
                var o = r.getFieldEntitiesForNamePathList(n);
                return o.map(function(i, a) {
                    return i && !("INVALIDATE_NAME_PATH" in i) ? {
                        name: i.getNamePath(),
                        errors: i.getErrors(),
                        warnings: i.getWarnings()
                    } : {
                        name: he(n[a]),
                        errors: [],
                        warnings: []
                    }
                })
            }, this.getFieldError = function(n) {
                r.warningUnhooked();
                var o = he(n),
                    i = r.getFieldsError([o])[0];
                return i.errors
            }, this.getFieldWarning = function(n) {
                r.warningUnhooked();
                var o = he(n),
                    i = r.getFieldsError([o])[0];
                return i.warnings
            }, this.isFieldsTouched = function() {
                r.warningUnhooked();
                for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++) o[i] = arguments[i];
                var a = o[0],
                    s = o[1],
                    l, u = !1;
                o.length === 0 ? l = null : o.length === 1 ? Array.isArray(a) ? (l = a.map(he), u = !1) : (l = null, u = a) : (l = a.map(he), u = s);
                var f = r.getFieldEntities(!0),
                    c = function(b) {
                        return b.isFieldTouched()
                    };
                if (!l) return u ? f.every(c) : f.some(c);
                var d = new Io;
                l.forEach(function(y) {
                    d.set(y, [])
                }), f.forEach(function(y) {
                    var b = y.getNamePath();
                    l.forEach(function(p) {
                        p.every(function(m, h) {
                            return b[h] === m
                        }) && d.update(p, function(m) {
                            return [].concat(z(m), [y])
                        })
                    })
                });
                var g = function(b) {
                        return b.some(c)
                    },
                    v = d.map(function(y) {
                        var b = y.value;
                        return b
                    });
                return u ? v.every(g) : v.some(g)
            }, this.isFieldTouched = function(n) {
                return r.warningUnhooked(), r.isFieldsTouched([n])
            }, this.isFieldsValidating = function(n) {
                r.warningUnhooked();
                var o = r.getFieldEntities();
                if (!n) return o.some(function(a) {
                    return a.isFieldValidating()
                });
                var i = n.map(he);
                return o.some(function(a) {
                    var s = a.getNamePath();
                    return Mo(i, s) && a.isFieldValidating()
                })
            }, this.isFieldValidating = function(n) {
                return r.warningUnhooked(), r.isFieldsValidating([n])
            }, this.resetWithFieldInitialValue = function() {
                var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
                    o = new Io,
                    i = r.getFieldEntities(!0);
                i.forEach(function(l) {
                    var u = l.props.initialValue,
                        f = l.getNamePath();
                    if (u !== void 0) {
                        var c = o.get(f) || new Set;
                        c.add({
                            entity: l,
                            value: u
                        }), o.set(f, c)
                    }
                });
                var a = function(u) {
                        u.forEach(function(f) {
                            var c = f.props.initialValue;
                            if (c !== void 0) {
                                var d = f.getNamePath(),
                                    g = r.getInitialValue(d);
                                if (g !== void 0) Ie(!1, "Form already set 'initialValues' with path '".concat(d.join("."), "'. Field can not overwrite it."));
                                else {
                                    var v = o.get(d);
                                    if (v && v.size > 1) Ie(!1, "Multiple Field with path '".concat(d.join("."), "' set 'initialValue'. Can not decide which one to pick."));
                                    else if (v) {
                                        var y = r.getFieldValue(d);
                                        (!n.skipExist || y === void 0) && r.updateStore(mt(r.store, d, z(v)[0].value))
                                    }
                                }
                            }
                        })
                    },
                    s;
                n.entities ? s = n.entities : n.namePathList ? (s = [], n.namePathList.forEach(function(l) {
                    var u = o.get(l);
                    if (u) {
                        var f;
                        (f = s).push.apply(f, z(z(u).map(function(c) {
                            return c.entity
                        })))
                    }
                })) : s = i, a(s)
            }, this.resetFields = function(n) {
                r.warningUnhooked();
                var o = r.store;
                if (!n) {
                    r.updateStore(nn(r.initialValues)), r.resetWithFieldInitialValue(), r.notifyObservers(o, null, {
                        type: "reset"
                    }), r.notifyWatch();
                    return
                }
                var i = n.map(he);
                i.forEach(function(a) {
                    var s = r.getInitialValue(a);
                    r.updateStore(mt(r.store, a, s))
                }), r.resetWithFieldInitialValue({
                    namePathList: i
                }), r.notifyObservers(o, i, {
                    type: "reset"
                }), r.notifyWatch(i)
            }, this.setFields = function(n) {
                r.warningUnhooked();
                var o = r.store,
                    i = [];
                n.forEach(function(a) {
                    var s = a.name,
                        l = me(a, XN),
                        u = he(s);
                    i.push(u), "value" in l && r.updateStore(mt(r.store, u, l.value)), r.notifyObservers(o, [u], {
                        type: "setField",
                        data: a
                    })
                }), r.notifyWatch(i)
            }, this.getFields = function() {
                var n = r.getFieldEntities(!0),
                    o = n.map(function(i) {
                        var a = i.getNamePath(),
                            s = i.getMeta(),
                            l = L(L({}, s), {}, {
                                name: a,
                                value: r.getFieldValue(a)
                            });
                        return Object.defineProperty(l, "originRCField", {
                            value: !0
                        }), l
                    });
                return o
            }, this.initEntityValue = function(n) {
                var o = n.props.initialValue;
                if (o !== void 0) {
                    var i = n.getNamePath(),
                        a = Ve(r.store, i);
                    a === void 0 && r.updateStore(mt(r.store, i, o))
                }
            }, this.isMergedPreserve = function(n) {
                var o = n !== void 0 ? n : r.preserve;
                return o ?? !0
            }, this.registerField = function(n) {
                r.fieldEntities.push(n);
                var o = n.getNamePath();
                if (r.notifyWatch([o]), n.props.initialValue !== void 0) {
                    var i = r.store;
                    r.resetWithFieldInitialValue({
                        entities: [n],
                        skipExist: !0
                    }), r.notifyObservers(i, [n.getNamePath()], {
                        type: "valueUpdate",
                        source: "internal"
                    })
                }
                return function(a, s) {
                    var l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
                    if (r.fieldEntities = r.fieldEntities.filter(function(c) {
                            return c !== n
                        }), !r.isMergedPreserve(s) && (!a || l.length > 1)) {
                        var u = a ? void 0 : r.getInitialValue(o);
                        if (o.length && r.getFieldValue(o) !== u && r.fieldEntities.every(function(c) {
                                return !Vg(c.getNamePath(), o)
                            })) {
                            var f = r.store;
                            r.updateStore(mt(f, o, u, !0)), r.notifyObservers(f, [o], {
                                type: "remove"
                            }), r.triggerDependenciesUpdate(f, o)
                        }
                    }
                    r.notifyWatch([o])
                }
            }, this.dispatch = function(n) {
                switch (n.type) {
                    case "updateValue": {
                        var o = n.namePath,
                            i = n.value;
                        r.updateValue(o, i);
                        break
                    }
                    case "validateField": {
                        var a = n.namePath,
                            s = n.triggerName;
                        r.validateFields([a], {
                            triggerName: s
                        });
                        break
                    }
                    default:
                }
            }, this.notifyObservers = function(n, o, i) {
                if (r.subscribable) {
                    var a = L(L({}, i), {}, {
                        store: r.getFieldsValue(!0)
                    });
                    r.getFieldEntities().forEach(function(s) {
                        var l = s.onStoreChange;
                        l(n, o, a)
                    })
                } else r.forceRootUpdate()
            }, this.triggerDependenciesUpdate = function(n, o) {
                var i = r.getDependencyChildrenFields(o);
                return i.length && r.validateFields(i), r.notifyObservers(n, i, {
                    type: "dependenciesUpdate",
                    relatedFields: [o].concat(z(i))
                }), i
            }, this.updateValue = function(n, o) {
                var i = he(n),
                    a = r.store;
                r.updateStore(mt(r.store, i, o)), r.notifyObservers(a, [i], {
                    type: "valueUpdate",
                    source: "internal"
                }), r.notifyWatch([i]);
                var s = r.triggerDependenciesUpdate(a, i),
                    l = r.callbacks.onValuesChange;
                if (l) {
                    var u = Hg(r.store, [i]);
                    l(u, r.getFieldsValue())
                }
                r.triggerOnFieldsChange([i].concat(z(s)))
            }, this.setFieldsValue = function(n) {
                r.warningUnhooked();
                var o = r.store;
                if (n) {
                    var i = nn(r.store, n);
                    r.updateStore(i)
                }
                r.notifyObservers(o, null, {
                    type: "valueUpdate",
                    source: "external"
                }), r.notifyWatch()
            }, this.setFieldValue = function(n, o) {
                r.setFields([{
                    name: n,
                    value: o
                }])
            }, this.getDependencyChildrenFields = function(n) {
                var o = new Set,
                    i = [],
                    a = new Io;
                r.getFieldEntities().forEach(function(l) {
                    var u = l.props.dependencies;
                    (u || []).forEach(function(f) {
                        var c = he(f);
                        a.update(c, function() {
                            var d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : new Set;
                            return d.add(l), d
                        })
                    })
                });
                var s = function l(u) {
                    var f = a.get(u) || new Set;
                    f.forEach(function(c) {
                        if (!o.has(c)) {
                            o.add(c);
                            var d = c.getNamePath();
                            c.isFieldDirty() && d.length && (i.push(d), l(d))
                        }
                    })
                };
                return s(n), i
            }, this.triggerOnFieldsChange = function(n, o) {
                var i = r.callbacks.onFieldsChange;
                if (i) {
                    var a = r.getFields();
                    if (o) {
                        var s = new Io;
                        o.forEach(function(u) {
                            var f = u.name,
                                c = u.errors;
                            s.set(f, c)
                        }), a.forEach(function(u) {
                            u.errors = s.get(u.name) || u.errors
                        })
                    }
                    var l = a.filter(function(u) {
                        var f = u.name;
                        return Mo(n, f)
                    });
                    i(l, a)
                }
            }, this.validateFields = function(n, o) {
                r.warningUnhooked();
                var i, a;
                Array.isArray(n) || typeof n == "string" || typeof o == "string" ? (i = n, a = o) : a = n;
                var s = !!i,
                    l = s ? i.map(he) : [],
                    u = [];
                r.getFieldEntities(!0).forEach(function(d) {
                    var g;
                    if (s || l.push(d.getNamePath()), !((g = a) === null || g === void 0) && g.recursive && s) {
                        var v = d.getNamePath();
                        v.every(function(p, m) {
                            return i[m] === p || i[m] === void 0
                        }) && l.push(v)
                    }
                    if (!(!d.props.rules || !d.props.rules.length)) {
                        var y = d.getNamePath();
                        if (!s || Mo(l, y)) {
                            var b = d.validateRules(L({
                                validateMessages: L(L({}, of), r.validateMessages)
                            }, a));
                            u.push(b.then(function() {
                                return {
                                    name: y,
                                    errors: [],
                                    warnings: []
                                }
                            }).catch(function(p) {
                                var m, h = [],
                                    x = [];
                                return (m = p.forEach) === null || m === void 0 || m.call(p, function(S) {
                                    var C = S.rule.warningOnly,
                                        w = S.errors;
                                    C ? x.push.apply(x, z(w)) : h.push.apply(h, z(w))
                                }), h.length ? Promise.reject({
                                    name: y,
                                    errors: h,
                                    warnings: x
                                }) : {
                                    name: y,
                                    errors: h,
                                    warnings: x
                                }
                            }))
                        }
                    }
                });
                var f = bw(u);
                r.lastValidatePromise = f, f.catch(function(d) {
                    return d
                }).then(function(d) {
                    var g = d.map(function(v) {
                        var y = v.name;
                        return y
                    });
                    r.notifyObservers(r.store, g, {
                        type: "validateFinish"
                    }), r.triggerOnFieldsChange(g, d)
                });
                var c = f.then(function() {
                    return r.lastValidatePromise === f ? Promise.resolve(r.getFieldsValue(l)) : Promise.reject([])
                }).catch(function(d) {
                    var g = d.filter(function(v) {
                        return v && v.errors.length
                    });
                    return Promise.reject({
                        values: r.getFieldsValue(l),
                        errorFields: g,
                        outOfDate: r.lastValidatePromise !== f
                    })
                });
                return c.catch(function(d) {
                    return d
                }), r.triggerOnFieldsChange(l), c
            }, this.submit = function() {
                r.warningUnhooked(), r.validateFields().then(function(n) {
                    var o = r.callbacks.onFinish;
                    if (o) try {
                        o(n)
                    } catch {}
                }).catch(function(n) {
                    var o = r.callbacks.onFinishFailed;
                    o && o(n)
                })
            }, this.forceRootUpdate = t
        });

    function JN(e) {
        var t = lf.useRef(),
            r = lf.useState({}),
            n = F(r, 2),
            o = n[1];
        if (!t.current)
            if (e) t.current = e;
            else {
                var i = function() {
                        o({})
                    },
                    a = new GN(i);
                t.current = a.getForm()
            } return [t.current]
    }
    var uf = JN;
    var qe = T($());
    var Gn = T($()),
        Kg = Gn.createContext({
            triggerFormChange: function() {},
            triggerFormFinish: function() {},
            registerForm: function() {},
            unregisterForm: function() {}
        }),
        Xg = function(t) {
            var r = t.validateMessages,
                n = t.onFormChange,
                o = t.onFormFinish,
                i = t.children,
                a = Gn.useContext(Kg),
                s = Gn.useRef({});
            return Gn.createElement(Kg.Provider, {
                value: L(L({}, a), {}, {
                    validateMessages: L(L({}, a.validateMessages), r),
                    triggerFormChange: function(u, f) {
                        n && n(u, {
                            changedFields: f,
                            forms: s.current
                        }), a.triggerFormChange(u, f)
                    },
                    triggerFormFinish: function(u, f) {
                        o && o(u, {
                            values: f,
                            forms: s.current
                        }), a.triggerFormFinish(u, f)
                    },
                    registerForm: function(u, f) {
                        u && (s.current = L(L({}, s.current), {}, D({}, u, f))), a.registerForm(u, f)
                    },
                    unregisterForm: function(u) {
                        var f = L({}, s.current);
                        delete f[u], s.current = f, a.unregisterForm(u)
                    }
                })
            }, i)
        };
    var Rw = Kg;
    var YN = ["name", "initialValues", "fields", "form", "preserve", "children", "component", "validateMessages", "validateTrigger", "onValuesChange", "onFieldsChange", "onFinish", "onFinishFailed"],
        ZN = function(t, r) {
            var n = t.name,
                o = t.initialValues,
                i = t.fields,
                a = t.form,
                s = t.preserve,
                l = t.children,
                u = t.component,
                f = u === void 0 ? "form" : u,
                c = t.validateMessages,
                d = t.validateTrigger,
                g = d === void 0 ? "onChange" : d,
                v = t.onValuesChange,
                y = t.onFieldsChange,
                b = t.onFinish,
                p = t.onFinishFailed,
                m = me(t, YN),
                h = qe.useContext(Rw),
                x = uf(a),
                S = F(x, 1),
                C = S[0],
                w = C.getInternalHooks(xr),
                O = w.useSubscribe,
                A = w.setInitialValues,
                E = w.setCallbacks,
                N = w.setValidateMessages,
                R = w.setPreserve,
                P = w.destroyForm;
            qe.useImperativeHandle(r, function() {
                return C
            }), qe.useEffect(function() {
                return h.registerForm(n, C),
                    function() {
                        h.unregisterForm(n)
                    }
            }, [h, C, n]), N(L(L({}, h.validateMessages), c)), E({
                onValuesChange: v,
                onFieldsChange: function(K) {
                    if (h.triggerFormChange(n, K), y) {
                        for (var ne = arguments.length, fe = new Array(ne > 1 ? ne - 1 : 0), Oe = 1; Oe < ne; Oe++) fe[Oe - 1] = arguments[Oe];
                        y.apply(void 0, [K].concat(fe))
                    }
                },
                onFinish: function(K) {
                    h.triggerFormFinish(n, K), b && b(K)
                },
                onFinishFailed: p
            }), R(s);
            var k = qe.useRef(null);
            A(o, !k.current), k.current || (k.current = !0), qe.useEffect(function() {
                return P
            }, []);
            var _, M = typeof l == "function";
            if (M) {
                var j = C.getFieldsValue(!0);
                _ = l(j, C)
            } else _ = l;
            O(!M);
            var V = qe.useRef();
            qe.useEffect(function() {
                xw(V.current || [], i || []) || C.setFields(i || []), V.current = i
            }, [i, C]);
            var Q = qe.useMemo(function() {
                    return L(L({}, C), {}, {
                        validateTrigger: g
                    })
                }, [C, g]),
                Y = qe.createElement(Xn.Provider, {
                    value: null
                }, qe.createElement(Sr.Provider, {
                    value: Q
                }, _));
            return f === !1 ? Y : qe.createElement(f, X({}, m, {
                onSubmit: function(K) {
                    K.preventDefault(), K.stopPropagation(), C.submit()
                },
                onReset: function(K) {
                    var ne;
                    K.preventDefault(), C.resetFields(), (ne = m.onReset) === null || ne === void 0 || ne.call(m, K)
                }
            }), Y)
        },
        Ow = ZN;
    var Cr = T($());

    function Pw(e) {
        try {
            return JSON.stringify(e)
        } catch {
            return Math.random()
        }
    }
    var qN = function() {};

    function ek() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        var n = t[0],
            o = n === void 0 ? [] : n,
            i = t[1],
            a = i === void 0 ? {} : i,
            s = uw(a) ? {
                form: a
            } : a,
            l = s.form,
            u = (0, Cr.useState)(),
            f = F(u, 2),
            c = f[0],
            d = f[1],
            g = (0, Cr.useMemo)(function() {
                return Pw(c)
            }, [c]),
            v = (0, Cr.useRef)(g);
        v.current = g;
        var y = (0, Cr.useContext)(Sr),
            b = l || y,
            p = b && b._init,
            m = he(o),
            h = (0, Cr.useRef)(m);
        return h.current = m, qN(m), (0, Cr.useEffect)(function() {
            if (p) {
                var x = b.getFieldsValue,
                    S = b.getInternalHooks,
                    C = S(xr),
                    w = C.registerWatch,
                    O = w(function(E, N) {
                        var R = Ve(s.preserve ? N : E, h.current),
                            P = Pw(R);
                        v.current !== P && (v.current = P, d(R))
                    }),
                    A = Ve(s.preserve ? x(!0) : x(), h.current);
                return d(A), O
            }
        }, [p]), c
    }
    var Aw = ek;
    var tk = Tw.forwardRef(Ow),
        Qs = tk;
    Qs.FormProvider = Xg;
    Qs.Field = sf;
    Qs.List = ww;
    Qs.useForm = uf;
    Qs.useWatch = Aw;
    var cf = T($()),
        ff = T($());
    var Nw = cf.createContext({}),
        kw = e => {
            let {
                children: t,
                status: r,
                override: n
            } = e, o = (0, ff.useContext)(Nw), i = (0, ff.useMemo)(() => {
                let a = Object.assign({}, o);
                return n && delete a.isFormItemInput, r && (delete a.status, delete a.hasFeedback, delete a.feedbackIcon), a
            }, [r, n, o]);
            return cf.createElement(Nw.Provider, {
                value: i
            }, t)
        };
    var jo = T($());

    function _w(e, t) {
        return jo.default.createElement("span", {
            className: `${e}-close-x`
        }, t || jo.default.createElement(Gi, {
            className: `${e}-close-icon`
        }))
    }
    var Lw = e => {
        let {
            okText: t,
            okType: r = "primary",
            cancelText: n,
            confirmLoading: o,
            onOk: i,
            onCancel: a,
            okButtonProps: s,
            cancelButtonProps: l
        } = e, [u] = wo("Modal", Lx());
        return jo.default.createElement(jo.default.Fragment, null, jo.default.createElement(Bs, Object.assign({
            onClick: a
        }, l), n || u?.cancelText), jo.default.createElement(Bs, Object.assign({}, ef(r), {
            loading: o,
            onClick: i
        }, s), t || u?.okText))
    };
    var rk = e => ({
            animationDuration: e,
            animationFillMode: "both"
        }),
        nk = e => ({
            animationDuration: e,
            animationFillMode: "both"
        }),
        df = function(e, t, r, n) {
            let i = (arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1) ? "&" : "";
            return {
                [`
      ${i}${e}-enter,
      ${i}${e}-appear
    `]: Object.assign(Object.assign({}, rk(n)), {
                    animationPlayState: "paused"
                }),
                [`${i}${e}-leave`]: Object.assign(Object.assign({}, nk(n)), {
                    animationPlayState: "paused"
                }),
                [`
      ${i}${e}-enter${e}-enter-active,
      ${i}${e}-appear${e}-appear-active
    `]: {
                    animationName: t,
                    animationPlayState: "running"
                },
                [`${i}${e}-leave${e}-leave-active`]: {
                    animationName: r,
                    animationPlayState: "running",
                    pointerEvents: "none"
                }
            }
        };
    var $w = new le("antFadeIn", {
            "0%": {
                opacity: 0
            },
            "100%": {
                opacity: 1
            }
        }),
        Mw = new le("antFadeOut", {
            "0%": {
                opacity: 1
            },
            "100%": {
                opacity: 0
            }
        }),
        Gg = function(e) {
            let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
                {
                    antCls: r
                } = e,
                n = `${r}-fade`,
                o = t ? "&" : "";
            return [df(n, $w, Mw, e.motionDurationMid, t), {
                [`
        ${o}${n}-enter,
        ${o}${n}-appear
      `]: {
                    opacity: 0,
                    animationTimingFunction: "linear"
                },
                [`${o}${n}-leave`]: {
                    animationTimingFunction: "linear"
                }
            }]
        };
    var Iw = new le("antZoomIn", {
            "0%": {
                transform: "scale(0.2)",
                opacity: 0
            },
            "100%": {
                transform: "scale(1)",
                opacity: 1
            }
        }),
        jw = new le("antZoomOut", {
            "0%": {
                transform: "scale(1)"
            },
            "100%": {
                transform: "scale(0.2)",
                opacity: 0
            }
        }),
        Jg = new le("antZoomBigIn", {
            "0%": {
                transform: "scale(0.8)",
                opacity: 0
            },
            "100%": {
                transform: "scale(1)",
                opacity: 1
            }
        }),
        Yg = new le("antZoomBigOut", {
            "0%": {
                transform: "scale(1)"
            },
            "100%": {
                transform: "scale(0.8)",
                opacity: 0
            }
        }),
        Fw = new le("antZoomUpIn", {
            "0%": {
                transform: "scale(0.8)",
                transformOrigin: "50% 0%",
                opacity: 0
            },
            "100%": {
                transform: "scale(1)",
                transformOrigin: "50% 0%"
            }
        }),
        Dw = new le("antZoomUpOut", {
            "0%": {
                transform: "scale(1)",
                transformOrigin: "50% 0%"
            },
            "100%": {
                transform: "scale(0.8)",
                transformOrigin: "50% 0%",
                opacity: 0
            }
        }),
        Bw = new le("antZoomLeftIn", {
            "0%": {
                transform: "scale(0.8)",
                transformOrigin: "0% 50%",
                opacity: 0
            },
            "100%": {
                transform: "scale(1)",
                transformOrigin: "0% 50%"
            }
        }),
        zw = new le("antZoomLeftOut", {
            "0%": {
                transform: "scale(1)",
                transformOrigin: "0% 50%"
            },
            "100%": {
                transform: "scale(0.8)",
                transformOrigin: "0% 50%",
                opacity: 0
            }
        }),
        Hw = new le("antZoomRightIn", {
            "0%": {
                transform: "scale(0.8)",
                transformOrigin: "100% 50%",
                opacity: 0
            },
            "100%": {
                transform: "scale(1)",
                transformOrigin: "100% 50%"
            }
        }),
        Vw = new le("antZoomRightOut", {
            "0%": {
                transform: "scale(1)",
                transformOrigin: "100% 50%"
            },
            "100%": {
                transform: "scale(0.8)",
                transformOrigin: "100% 50%",
                opacity: 0
            }
        }),
        Uw = new le("antZoomDownIn", {
            "0%": {
                transform: "scale(0.8)",
                transformOrigin: "50% 100%",
                opacity: 0
            },
            "100%": {
                transform: "scale(1)",
                transformOrigin: "50% 100%"
            }
        }),
        Ww = new le("antZoomDownOut", {
            "0%": {
                transform: "scale(1)",
                transformOrigin: "50% 100%"
            },
            "100%": {
                transform: "scale(0.8)",
                transformOrigin: "50% 100%",
                opacity: 0
            }
        }),
        ok = {
            zoom: {
                inKeyframes: Iw,
                outKeyframes: jw
            },
            "zoom-big": {
                inKeyframes: Jg,
                outKeyframes: Yg
            },
            "zoom-big-fast": {
                inKeyframes: Jg,
                outKeyframes: Yg
            },
            "zoom-left": {
                inKeyframes: Bw,
                outKeyframes: zw
            },
            "zoom-right": {
                inKeyframes: Hw,
                outKeyframes: Vw
            },
            "zoom-up": {
                inKeyframes: Fw,
                outKeyframes: Dw
            },
            "zoom-down": {
                inKeyframes: Uw,
                outKeyframes: Ww
            }
        },
        Zg = (e, t) => {
            let {
                antCls: r
            } = e, n = `${r}-${t}`, {
                inKeyframes: o,
                outKeyframes: i
            } = ok[t];
            return [df(n, o, i, t === "zoom-big-fast" ? e.motionDurationFast : e.motionDurationMid), {
                [`
        ${n}-enter,
        ${n}-appear
      `]: {
                    transform: "scale(0)",
                    opacity: 0,
                    animationTimingFunction: e.motionEaseOutCirc,
                    "&-prepare": {
                        transform: "none"
                    }
                },
                [`${n}-leave`]: {
                    animationTimingFunction: e.motionEaseInOutCirc
                }
            }]
        };

    function Qw(e) {
        return {
            position: e,
            top: 0,
            insetInlineEnd: 0,
            bottom: 0,
            insetInlineStart: 0
        }
    }
    var ik = e => {
            let {
                componentCls: t,
                antCls: r
            } = e;
            return [{
                [`${t}-root`]: {
                    [`${t}${r}-zoom-enter, ${t}${r}-zoom-appear`]: {
                        transform: "none",
                        opacity: 0,
                        animationDuration: e.motionDurationSlow,
                        userSelect: "none"
                    },
                    [`${t}${r}-zoom-leave ${t}-content`]: {
                        pointerEvents: "none"
                    },
                    [`${t}-mask`]: Object.assign(Object.assign({}, Qw("fixed")), {
                        zIndex: e.zIndexPopupBase,
                        height: "100%",
                        backgroundColor: e.colorBgMask,
                        [`${t}-hidden`]: {
                            display: "none"
                        }
                    }),
                    [`${t}-wrap`]: Object.assign(Object.assign({}, Qw("fixed")), {
                        overflow: "auto",
                        outline: 0,
                        WebkitOverflowScrolling: "touch"
                    })
                }
            }, {
                [`${t}-root`]: Gg(e)
            }]
        },
        ak = e => {
            let {
                componentCls: t
            } = e;
            return [{
                [`${t}-root`]: {
                    [`${t}-wrap`]: {
                        zIndex: e.zIndexPopupBase,
                        position: "fixed",
                        inset: 0,
                        overflow: "auto",
                        outline: 0,
                        WebkitOverflowScrolling: "touch"
                    },
                    [`${t}-wrap-rtl`]: {
                        direction: "rtl"
                    },
                    [`${t}-centered`]: {
                        textAlign: "center",
                        "&::before": {
                            display: "inline-block",
                            width: 0,
                            height: "100%",
                            verticalAlign: "middle",
                            content: '""'
                        },
                        [t]: {
                            top: 0,
                            display: "inline-block",
                            paddingBottom: 0,
                            textAlign: "start",
                            verticalAlign: "middle"
                        }
                    },
                    [`@media (max-width: ${e.screenSMMax})`]: {
                        [t]: {
                            maxWidth: "calc(100vw - 16px)",
                            margin: `${e.marginXS} auto`
                        },
                        [`${t}-centered`]: {
                            [t]: {
                                flex: 1
                            }
                        }
                    }
                }
            }, {
                [t]: Object.assign(Object.assign({}, Hi(e)), {
                    pointerEvents: "none",
                    position: "relative",
                    top: 100,
                    width: "auto",
                    maxWidth: `calc(100vw - ${e.margin*2}px)`,
                    margin: "0 auto",
                    paddingBottom: e.paddingLG,
                    [`${t}-title`]: {
                        margin: 0,
                        color: e.titleColor,
                        fontWeight: e.fontWeightStrong,
                        fontSize: e.titleFontSize,
                        lineHeight: e.titleLineHeight,
                        wordWrap: "break-word"
                    },
                    [`${t}-content`]: {
                        position: "relative",
                        backgroundColor: e.contentBg,
                        backgroundClip: "padding-box",
                        border: 0,
                        borderRadius: e.borderRadiusLG,
                        boxShadow: e.boxShadow,
                        pointerEvents: "auto",
                        padding: `${e.paddingMD}px ${e.paddingContentHorizontalLG}px`
                    },
                    [`${t}-close`]: Object.assign({
                        position: "absolute",
                        top: (e.modalHeaderHeight - e.modalCloseBtnSize) / 2,
                        insetInlineEnd: (e.modalHeaderHeight - e.modalCloseBtnSize) / 2,
                        zIndex: e.zIndexPopupBase + 10,
                        padding: 0,
                        color: e.modalCloseIconColor,
                        fontWeight: e.fontWeightStrong,
                        lineHeight: 1,
                        textDecoration: "none",
                        background: "transparent",
                        borderRadius: e.borderRadiusSM,
                        width: e.modalCloseBtnSize,
                        height: e.modalCloseBtnSize,
                        border: 0,
                        outline: 0,
                        cursor: "pointer",
                        transition: `color ${e.motionDurationMid}, background-color ${e.motionDurationMid}`,
                        "&-x": {
                            display: "flex",
                            fontSize: e.fontSizeLG,
                            fontStyle: "normal",
                            lineHeight: `${e.modalCloseBtnSize}px`,
                            justifyContent: "center",
                            textTransform: "none",
                            textRendering: "auto"
                        },
                        "&:hover": {
                            color: e.modalIconHoverColor,
                            backgroundColor: e.wireframe ? "transparent" : e.colorFillContent,
                            textDecoration: "none"
                        },
                        "&:active": {
                            backgroundColor: e.wireframe ? "transparent" : e.colorFillContentHover
                        }
                    }, uc(e)),
                    [`${t}-header`]: {
                        color: e.colorText,
                        background: e.headerBg,
                        borderRadius: `${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`,
                        marginBottom: e.marginXS
                    },
                    [`${t}-body`]: {
                        fontSize: e.fontSize,
                        lineHeight: e.lineHeight,
                        wordWrap: "break-word"
                    },
                    [`${t}-footer`]: {
                        textAlign: "end",
                        background: e.footerBg,
                        marginTop: e.marginSM,
                        [`${e.antCls}-btn + ${e.antCls}-btn:not(${e.antCls}-dropdown-trigger)`]: {
                            marginBottom: 0,
                            marginInlineStart: e.marginXS
                        }
                    },
                    [`${t}-open`]: {
                        overflow: "hidden"
                    }
                })
            }, {
                [`${t}-pure-panel`]: {
                    top: "auto",
                    padding: 0,
                    display: "flex",
                    flexDirection: "column",
                    [`${t}-content,
          ${t}-body,
          ${t}-confirm-body-wrapper`]: {
                        display: "flex",
                        flexDirection: "column",
                        flex: "auto"
                    },
                    [`${t}-confirm-body`]: {
                        marginBottom: "auto"
                    }
                }
            }]
        },
        sk = e => {
            let {
                componentCls: t
            } = e, r = `${t}-confirm`;
            return {
                [r]: {
                    "&-rtl": {
                        direction: "rtl"
                    },
                    [`${e.antCls}-modal-header`]: {
                        display: "none"
                    },
                    [`${r}-body-wrapper`]: Object.assign({}, iS()),
                    [`${r}-body`]: {
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        [`${r}-title`]: {
                            flex: "0 0 100%",
                            display: "block",
                            overflow: "hidden",
                            color: e.colorTextHeading,
                            fontWeight: e.fontWeightStrong,
                            fontSize: e.titleFontSize,
                            lineHeight: e.titleLineHeight,
                            [`+ ${r}-content`]: {
                                marginBlockStart: e.marginXS,
                                flexBasis: "100%",
                                maxWidth: `calc(100% - ${e.modalConfirmIconSize+e.marginSM}px)`
                            }
                        },
                        [`${r}-content`]: {
                            color: e.colorText,
                            fontSize: e.fontSize
                        },
                        [`> ${e.iconCls}`]: {
                            flex: "none",
                            marginInlineEnd: e.marginSM,
                            fontSize: e.modalConfirmIconSize,
                            [`+ ${r}-title`]: {
                                flex: 1
                            },
                            [`+ ${r}-title + ${r}-content`]: {
                                marginInlineStart: e.modalConfirmIconSize + e.marginSM
                            }
                        }
                    },
                    [`${r}-btns`]: {
                        textAlign: "end",
                        marginTop: e.marginSM,
                        [`${e.antCls}-btn + ${e.antCls}-btn`]: {
                            marginBottom: 0,
                            marginInlineStart: e.marginXS
                        }
                    }
                },
                [`${r}-error ${r}-body > ${e.iconCls}`]: {
                    color: e.colorError
                },
                [`${r}-warning ${r}-body > ${e.iconCls},
        ${r}-confirm ${r}-body > ${e.iconCls}`]: {
                    color: e.colorWarning
                },
                [`${r}-info ${r}-body > ${e.iconCls}`]: {
                    color: e.colorInfo
                },
                [`${r}-success ${r}-body > ${e.iconCls}`]: {
                    color: e.colorSuccess
                }
            }
        },
        lk = e => {
            let {
                componentCls: t
            } = e;
            return {
                [`${t}-root`]: {
                    [`${t}-wrap-rtl`]: {
                        direction: "rtl",
                        [`${t}-confirm-body`]: {
                            direction: "rtl"
                        }
                    }
                }
            }
        },
        uk = e => {
            let {
                componentCls: t,
                antCls: r
            } = e, n = `${t}-confirm`;
            return {
                [t]: {
                    [`${t}-content`]: {
                        padding: 0
                    },
                    [`${t}-header`]: {
                        padding: e.modalHeaderPadding,
                        borderBottom: `${e.modalHeaderBorderWidth}px ${e.modalHeaderBorderStyle} ${e.modalHeaderBorderColorSplit}`,
                        marginBottom: 0
                    },
                    [`${t}-body`]: {
                        padding: e.modalBodyPadding
                    },
                    [`${t}-footer`]: {
                        padding: `${e.modalFooterPaddingVertical}px ${e.modalFooterPaddingHorizontal}px`,
                        borderTop: `${e.modalFooterBorderWidth}px ${e.modalFooterBorderStyle} ${e.modalFooterBorderColorSplit}`,
                        borderRadius: `0 0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px`,
                        marginTop: 0
                    }
                },
                [n]: {
                    [`${r}-modal-body`]: {
                        padding: `${e.padding*2}px ${e.padding*2}px ${e.paddingLG}px`
                    },
                    [`${n}-body`]: {
                        [`> ${e.iconCls}`]: {
                            marginInlineEnd: e.margin,
                            [`+ ${n}-title + ${n}-content`]: {
                                marginInlineStart: e.modalConfirmIconSize + e.margin
                            }
                        }
                    },
                    [`${n}-btns`]: {
                        marginTop: e.marginLG
                    }
                }
            }
        },
        Kw = Pt("Modal", e => {
            let t = e.padding,
                r = e.fontSizeHeading5,
                n = e.lineHeightHeading5,
                o = Ot(e, {
                    modalBodyPadding: e.paddingLG,
                    modalHeaderPadding: `${t}px ${e.paddingLG}px`,
                    modalHeaderBorderWidth: e.lineWidth,
                    modalHeaderBorderStyle: e.lineType,
                    modalHeaderBorderColorSplit: e.colorSplit,
                    modalHeaderHeight: n * r + t * 2,
                    modalFooterBorderColorSplit: e.colorSplit,
                    modalFooterBorderStyle: e.lineType,
                    modalFooterPaddingVertical: e.paddingXS,
                    modalFooterPaddingHorizontal: e.padding,
                    modalFooterBorderWidth: e.lineWidth,
                    modalIconHoverColor: e.colorIconHover,
                    modalCloseIconColor: e.colorIcon,
                    modalCloseBtnSize: e.fontSize * e.lineHeight,
                    modalConfirmIconSize: e.fontSize * e.lineHeight
                });
            return [ak(o), sk(o), lk(o), ik(o), e.wireframe && uk(o), Zg(o, "zoom")]
        }, e => ({
            footerBg: "transparent",
            headerBg: e.colorBgElevated,
            titleLineHeight: e.lineHeightHeading5,
            titleFontSize: e.fontSizeHeading5,
            contentBg: e.colorBgElevated,
            titleColor: e.colorTextHeading
        }));
    var ck = function(e, t) {
            var r = {};
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
            if (e != null && typeof Object.getOwnPropertySymbols == "function")
                for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
            return r
        },
        qg, fk = e => {
            qg = {
                x: e.pageX,
                y: e.pageY
            }, setTimeout(() => {
                qg = null
            }, 100)
        };
    aw() && document.documentElement.addEventListener("click", fk, !0);
    var dk = e => {
            var t;
            let {
                getPopupContainer: r,
                getPrefixCls: n,
                direction: o
            } = Fo.useContext(Ee), i = E => {
                let {
                    onCancel: N
                } = e;
                N?.(E)
            }, a = E => {
                let {
                    onOk: N
                } = e;
                N?.(E)
            }, {
                prefixCls: s,
                className: l,
                rootClassName: u,
                open: f,
                wrapClassName: c,
                centered: d,
                getContainer: g,
                closeIcon: v,
                focusTriggerAfterClose: y = !0,
                visible: b,
                width: p = 520,
                footer: m
            } = e, h = ck(e, ["prefixCls", "className", "rootClassName", "open", "wrapClassName", "centered", "getContainer", "closeIcon", "focusTriggerAfterClose", "visible", "width", "footer"]), x = n("modal", s), S = n(), [C, w] = Kw(x), O = (0, pf.default)(c, {
                [`${x}-centered`]: !!d,
                [`${x}-wrap-rtl`]: o === "rtl"
            }), A = m === void 0 ? Fo.createElement(Lw, Object.assign({}, e, {
                onOk: a,
                onCancel: i
            })) : m;
            return C(Fo.createElement(vC, null, Fo.createElement(kw, {
                status: !0,
                override: !0
            }, Fo.createElement(iw, Object.assign({
                width: p
            }, h, {
                getContainer: g === void 0 ? r : g,
                prefixCls: x,
                rootClassName: (0, pf.default)(w, u),
                wrapClassName: O,
                footer: A,
                visible: f ?? b,
                mousePosition: (t = h.mousePosition) !== null && t !== void 0 ? t : qg,
                onClose: i,
                closeIcon: _w(x, v),
                focusTriggerAfterClose: y,
                transitionName: ea(S, "zoom", e.transitionName),
                maskTransitionName: ea(S, "fade", e.maskTransitionName),
                className: (0, pf.default)(w, l)
            })))))
        },
        Xw = dk;

    function pk(e) {
        let {
            icon: t,
            onCancel: r,
            onOk: n,
            close: o,
            okText: i,
            okButtonProps: a,
            cancelText: s,
            cancelButtonProps: l,
            confirmPrefixCls: u,
            rootPrefixCls: f,
            type: c,
            okCancel: d,
            footer: g,
            locale: v
        } = e, y = t;
        if (!t && t !== null) switch (c) {
            case "info":
                y = vt.createElement(Yi, null);
                break;
            case "success":
                y = vt.createElement(Ki, null);
                break;
            case "error":
                y = vt.createElement(Xi, null);
                break;
            default:
                y = vt.createElement(Ji, null)
        }
        let b = e.okType || "primary",
            p = d ?? c === "confirm",
            m = e.autoFocusButton === null ? !1 : e.autoFocusButton || "ok",
            [h] = wo("Modal"),
            x = v || h,
            S = p && vt.createElement(xg, {
                actionFn: r,
                close: o,
                autoFocus: m === "cancel",
                buttonProps: l,
                prefixCls: `${f}-btn`
            }, s || x?.cancelText);
        return vt.createElement("div", {
            className: `${u}-body-wrapper`
        }, vt.createElement("div", {
            className: `${u}-body`
        }, y, e.title === void 0 ? null : vt.createElement("span", {
            className: `${u}-title`
        }, e.title), vt.createElement("div", {
            className: `${u}-content`
        }, e.content)), g === void 0 ? vt.createElement("div", {
            className: `${u}-btns`
        }, S, vt.createElement(xg, {
            type: b,
            actionFn: n,
            close: o,
            autoFocus: m === "ok",
            buttonProps: a,
            prefixCls: `${f}-btn`
        }, i || (p ? x?.okText : x?.justOkText))) : g)
    }
    var mk = e => {
            let {
                close: t,
                zIndex: r,
                afterClose: n,
                visible: o,
                open: i,
                keyboard: a,
                centered: s,
                getContainer: l,
                maskStyle: u,
                direction: f,
                prefixCls: c,
                wrapClassName: d,
                rootPrefixCls: g,
                iconPrefixCls: v,
                theme: y,
                bodyStyle: b,
                closable: p = !1,
                closeIcon: m,
                modalRender: h,
                focusTriggerAfterClose: x
            } = e, S = `${c}-confirm`, C = e.width || 416, w = e.style || {}, O = e.mask === void 0 ? !0 : e.mask, A = e.maskClosable === void 0 ? !1 : e.maskClosable, E = (0, eh.default)(S, `${S}-${e.type}`, {
                [`${S}-rtl`]: f === "rtl"
            }, e.className);
            return vt.createElement(Qi, {
                prefixCls: g,
                iconPrefixCls: v,
                direction: f,
                theme: y
            }, vt.createElement(Xw, {
                prefixCls: c,
                className: E,
                wrapClassName: (0, eh.default)({
                    [`${S}-centered`]: !!e.centered
                }, d),
                onCancel: () => t?.({
                    triggerCancel: !0
                }),
                open: i,
                title: "",
                footer: null,
                transitionName: ea(g, "zoom", e.transitionName),
                maskTransitionName: ea(g, "fade", e.maskTransitionName),
                mask: O,
                maskClosable: A,
                maskStyle: u,
                style: w,
                bodyStyle: b,
                width: C,
                zIndex: r,
                afterClose: n,
                keyboard: a,
                centered: s,
                getContainer: l,
                closable: p,
                closeIcon: m,
                modalRender: h,
                focusTriggerAfterClose: x
            }, vt.createElement(pk, Object.assign({}, e, {
                confirmPrefixCls: S
            }))))
        },
        Gw = mk;
    var gk = [],
        Jw = gk;

    function Yw(e) {
        return Object.assign(Object.assign({}, e), {
            type: "warning"
        })
    }

    function Zw(e) {
        return Object.assign(Object.assign({}, e), {
            type: "info"
        })
    }

    function qw(e) {
        return Object.assign(Object.assign({}, e), {
            type: "success"
        })
    }

    function eb(e) {
        return Object.assign(Object.assign({}, e), {
            type: "error"
        })
    }

    function tb(e) {
        return Object.assign(Object.assign({}, e), {
            type: "confirm"
        })
    }
    var wr = T($());
    var vk = (e, t) => {
            let {
                afterClose: r,
                config: n
            } = e;
            var o;
            let [i, a] = wr.useState(!0), [s, l] = wr.useState(n), {
                direction: u,
                getPrefixCls: f
            } = wr.useContext(Ee), c = f("modal"), d = f(), g = () => {
                var p;
                r(), (p = s.afterClose) === null || p === void 0 || p.call(s)
            }, v = function() {
                a(!1);
                for (var p = arguments.length, m = new Array(p), h = 0; h < p; h++) m[h] = arguments[h];
                let x = m.some(S => S && S.triggerCancel);
                s.onCancel && x && s.onCancel.apply(s, [() => {}].concat(z(m.slice(1))))
            };
            wr.useImperativeHandle(t, () => ({
                destroy: v,
                update: p => {
                    l(m => Object.assign(Object.assign({}, m), p))
                }
            }));
            let y = (o = s.okCancel) !== null && o !== void 0 ? o : s.type === "confirm",
                [b] = wo("Modal", Mr.Modal);
            return wr.createElement(Gw, Object.assign({
                prefixCls: c,
                rootPrefixCls: d
            }, s, {
                close: v,
                open: i,
                afterClose: g,
                okText: s.okText || (y ? b?.okText : b?.justOkText),
                direction: s.direction || u,
                cancelText: s.cancelText || b?.cancelText
            }))
        },
        rb = wr.forwardRef(vk);
    var nb = 0,
        yk = xe.memo(xe.forwardRef((e, t) => {
            let [r, n] = rg();
            return xe.useImperativeHandle(t, () => ({
                patchElement: n
            }), []), xe.createElement(xe.Fragment, null, r)
        }));

    function xk() {
        let e = xe.useRef(null),
            [t, r] = xe.useState([]);
        xe.useEffect(() => {
            t.length && (z(t).forEach(a => {
                a()
            }), r([]))
        }, [t]);
        let n = xe.useCallback(i => function(s) {
            var l;
            nb += 1;
            let u = xe.createRef(),
                f, c = xe.createElement(rb, {
                    key: `modal-${nb}`,
                    config: i(s),
                    ref: u,
                    afterClose: () => {
                        f?.()
                    }
                });
            return f = (l = e.current) === null || l === void 0 ? void 0 : l.patchElement(c), f && Jw.push(f), {
                destroy: () => {
                    function d() {
                        var g;
                        (g = u.current) === null || g === void 0 || g.destroy()
                    }
                    u.current ? d() : r(g => [].concat(z(g), [d]))
                },
                update: d => {
                    function g() {
                        var v;
                        (v = u.current) === null || v === void 0 || v.update(d)
                    }
                    u.current ? g() : r(v => [].concat(z(v), [g]))
                }
            }
        }, []);
        return [xe.useMemo(() => ({
            info: n(Zw),
            success: n(qw),
            error: n(eb),
            warning: n(Yw),
            confirm: n(tb)
        }), []), xe.createElement(yk, {
            key: "modal-holder",
            ref: e
        })]
    }
    var ob = xk;
    var rh = T(be());
    var Ht = T($());
    var th = T(be());
    var Br = T($());
    var Sk = e => {
            let {
                componentCls: t,
                width: r,
                notificationMarginEdge: n
            } = e, o = new le("antNotificationTopFadeIn", {
                "0%": {
                    marginTop: "-100%",
                    opacity: 0
                },
                "100%": {
                    marginTop: 0,
                    opacity: 1
                }
            }), i = new le("antNotificationBottomFadeIn", {
                "0%": {
                    marginBottom: "-100%",
                    opacity: 0
                },
                "100%": {
                    marginBottom: 0,
                    opacity: 1
                }
            }), a = new le("antNotificationLeftFadeIn", {
                "0%": {
                    right: {
                        _skip_check_: !0,
                        value: r
                    },
                    opacity: 0
                },
                "100%": {
                    right: {
                        _skip_check_: !0,
                        value: 0
                    },
                    opacity: 1
                }
            });
            return {
                [`&${t}-top, &${t}-bottom`]: {
                    marginInline: 0
                },
                [`&${t}-top`]: {
                    [`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]: {
                        animationName: o
                    }
                },
                [`&${t}-bottom`]: {
                    [`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]: {
                        animationName: i
                    }
                },
                [`&${t}-topLeft, &${t}-bottomLeft`]: {
                    marginInlineEnd: 0,
                    marginInlineStart: n,
                    [`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]: {
                        animationName: a
                    }
                }
            }
        },
        ib = Sk;
    var Ck = e => {
            let {
                iconCls: t,
                componentCls: r,
                boxShadow: n,
                fontSizeLG: o,
                notificationMarginBottom: i,
                borderRadiusLG: a,
                colorSuccess: s,
                colorInfo: l,
                colorWarning: u,
                colorError: f,
                colorTextHeading: c,
                notificationBg: d,
                notificationPadding: g,
                notificationMarginEdge: v,
                motionDurationMid: y,
                motionEaseInOut: b,
                fontSize: p,
                lineHeight: m,
                width: h,
                notificationIconSize: x,
                colorText: S
            } = e, C = `${r}-notice`, w = new le("antNotificationFadeIn", {
                "0%": {
                    left: {
                        _skip_check_: !0,
                        value: h
                    },
                    opacity: 0
                },
                "100%": {
                    left: {
                        _skip_check_: !0,
                        value: 0
                    },
                    opacity: 1
                }
            }), O = new le("antNotificationFadeOut", {
                "0%": {
                    maxHeight: e.animationMaxHeight,
                    marginBottom: i,
                    opacity: 1
                },
                "100%": {
                    maxHeight: 0,
                    marginBottom: 0,
                    paddingTop: 0,
                    paddingBottom: 0,
                    opacity: 0
                }
            }), A = {
                position: "relative",
                width: h,
                maxWidth: `calc(100vw - ${v*2}px)`,
                marginBottom: i,
                marginInlineStart: "auto",
                padding: g,
                overflow: "hidden",
                lineHeight: m,
                wordWrap: "break-word",
                background: d,
                borderRadius: a,
                boxShadow: n,
                [`${r}-close-icon`]: {
                    fontSize: p,
                    cursor: "pointer"
                },
                [`${C}-message`]: {
                    marginBottom: e.marginXS,
                    color: c,
                    fontSize: o,
                    lineHeight: e.lineHeightLG
                },
                [`${C}-description`]: {
                    fontSize: p,
                    color: S
                },
                [`&${C}-closable ${C}-message`]: {
                    paddingInlineEnd: e.paddingLG
                },
                [`${C}-with-icon ${C}-message`]: {
                    marginBottom: e.marginXS,
                    marginInlineStart: e.marginSM + x,
                    fontSize: o
                },
                [`${C}-with-icon ${C}-description`]: {
                    marginInlineStart: e.marginSM + x,
                    fontSize: p
                },
                [`${C}-icon`]: {
                    position: "absolute",
                    fontSize: x,
                    lineHeight: 0,
                    [`&-success${t}`]: {
                        color: s
                    },
                    [`&-info${t}`]: {
                        color: l
                    },
                    [`&-warning${t}`]: {
                        color: u
                    },
                    [`&-error${t}`]: {
                        color: f
                    }
                },
                [`${C}-close`]: {
                    position: "absolute",
                    top: e.notificationPaddingVertical,
                    insetInlineEnd: e.notificationPaddingHorizontal,
                    color: e.colorIcon,
                    outline: "none",
                    width: e.notificationCloseButtonSize,
                    height: e.notificationCloseButtonSize,
                    borderRadius: e.borderRadiusSM,
                    transition: `background-color ${e.motionDurationMid}, color ${e.motionDurationMid}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    "&:hover": {
                        color: e.colorIconHover,
                        backgroundColor: e.wireframe ? "transparent" : e.colorFillContent
                    }
                },
                [`${C}-btn`]: {
                    float: "right",
                    marginTop: e.marginSM
                }
            };
            return [{
                [r]: Object.assign(Object.assign(Object.assign(Object.assign({}, Hi(e)), {
                    position: "fixed",
                    zIndex: e.zIndexPopup,
                    marginInlineEnd: v,
                    [`${r}-hook-holder`]: {
                        position: "relative"
                    },
                    [`&${r}-top, &${r}-bottom`]: {
                        [C]: {
                            marginInline: "auto auto"
                        }
                    },
                    [`&${r}-topLeft, &${r}-bottomLeft`]: {
                        [C]: {
                            marginInlineEnd: "auto",
                            marginInlineStart: 0
                        }
                    },
                    [`${r}-fade-enter, ${r}-fade-appear`]: {
                        animationDuration: e.motionDurationMid,
                        animationTimingFunction: b,
                        animationFillMode: "both",
                        opacity: 0,
                        animationPlayState: "paused"
                    },
                    [`${r}-fade-leave`]: {
                        animationTimingFunction: b,
                        animationFillMode: "both",
                        animationDuration: y,
                        animationPlayState: "paused"
                    },
                    [`${r}-fade-enter${r}-fade-enter-active, ${r}-fade-appear${r}-fade-appear-active`]: {
                        animationName: w,
                        animationPlayState: "running"
                    },
                    [`${r}-fade-leave${r}-fade-leave-active`]: {
                        animationName: O,
                        animationPlayState: "running"
                    }
                }), ib(e)), {
                    "&-rtl": {
                        direction: "rtl",
                        [`${C}-btn`]: {
                            float: "left"
                        }
                    }
                })
            }, {
                [r]: {
                    [C]: Object.assign({}, A)
                }
            }, {
                [`${C}-pure-panel`]: Object.assign(Object.assign({}, A), {
                    margin: 0
                })
            }]
        },
        ab = Pt("Notification", e => {
            let t = e.paddingMD,
                r = e.paddingLG,
                n = Ot(e, {
                    notificationBg: e.colorBgElevated,
                    notificationPaddingVertical: t,
                    notificationPaddingHorizontal: r,
                    notificationIconSize: e.fontSizeLG * e.lineHeightLG,
                    notificationCloseButtonSize: e.controlHeightLG * .55,
                    notificationMarginBottom: e.margin,
                    notificationPadding: `${e.paddingMD}px ${e.paddingContentHorizontalLG}px`,
                    notificationMarginEdge: e.marginLG,
                    animationMaxHeight: 150
                });
            return [Ck(n)]
        }, e => ({
            zIndexPopup: e.zIndexPopupBase + 50,
            width: 384
        }));

    function sb(e, t) {
        return t || Br.createElement("span", {
            className: `${e}-close-x`
        }, Br.createElement(Gi, {
            className: `${e}-close-icon`
        }))
    }
    var wk = {
        success: Ki,
        info: Yi,
        error: Xi,
        warning: Ji
    };

    function lb(e) {
        let {
            prefixCls: t,
            icon: r,
            type: n,
            message: o,
            description: i,
            btn: a,
            role: s = "alert"
        } = e, l = null;
        return r ? l = Br.createElement("span", {
            className: `${t}-icon`
        }, r) : n && (l = Br.createElement(wk[n] || null, {
            className: (0, th.default)(`${t}-icon`, `${t}-icon-${n}`)
        })), Br.createElement("div", {
            className: (0, th.default)({
                [`${t}-with-icon`]: l
            }),
            role: s
        }, l, Br.createElement("div", {
            className: `${t}-message`
        }, o), Br.createElement("div", {
            className: `${t}-description`
        }, i), a && Br.createElement("div", {
            className: `${t}-btn`
        }, a))
    }

    function ub(e, t, r) {
        let n;
        switch (e) {
            case "top":
                n = {
                    left: "50%",
                    transform: "translateX(-50%)",
                    right: "auto",
                    top: t,
                    bottom: "auto"
                };
                break;
            case "topLeft":
                n = {
                    left: 0,
                    top: t,
                    bottom: "auto"
                };
                break;
            case "topRight":
                n = {
                    right: 0,
                    top: t,
                    bottom: "auto"
                };
                break;
            case "bottom":
                n = {
                    left: "50%",
                    transform: "translateX(-50%)",
                    right: "auto",
                    top: "auto",
                    bottom: r
                };
                break;
            case "bottomLeft":
                n = {
                    left: 0,
                    top: "auto",
                    bottom: r
                };
                break;
            default:
                n = {
                    right: 0,
                    top: "auto",
                    bottom: r
                };
                break
        }
        return n
    }

    function cb(e) {
        return {
            motionName: `${e}-fade`
        }
    }
    var bk = function(e, t) {
            var r = {};
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
            if (e != null && typeof Object.getOwnPropertySymbols == "function")
                for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
            return r
        },
        fb = 24,
        Ek = 4.5,
        Rk = Ht.forwardRef((e, t) => {
            let {
                top: r,
                bottom: n,
                prefixCls: o,
                getContainer: i,
                maxCount: a,
                rtl: s,
                onAllRemoved: l
            } = e, {
                getPrefixCls: u,
                getPopupContainer: f
            } = Ht.useContext(Ee), c = o || u("notification"), d = m => ub(m, r ?? fb, n ?? fb), [, g] = ab(c), v = () => (0, rh.default)(g, {
                [`${c}-rtl`]: s
            }), y = () => cb(c), [b, p] = Zi({
                prefixCls: c,
                style: d,
                className: v,
                motion: y,
                closable: !0,
                closeIcon: sb(c),
                duration: Ek,
                getContainer: () => i?.() || f?.() || document.body,
                maxCount: a,
                onAllRemoved: l
            });
            return Ht.useImperativeHandle(t, () => Object.assign(Object.assign({}, b), {
                prefixCls: c,
                hashId: g
            })), p
        });

    function Ok(e) {
        let t = Ht.useRef(null);
        return [Ht.useMemo(() => {
            let n = s => {
                    if (!t.current) return;
                    let {
                        open: l,
                        prefixCls: u,
                        hashId: f
                    } = t.current, c = `${u}-notice`, {
                        message: d,
                        description: g,
                        icon: v,
                        type: y,
                        btn: b,
                        className: p,
                        role: m = "alert"
                    } = s, h = bk(s, ["message", "description", "icon", "type", "btn", "className", "role"]);
                    return l(Object.assign(Object.assign({
                        placement: "topRight"
                    }, h), {
                        content: Ht.createElement(lb, {
                            prefixCls: c,
                            icon: v,
                            type: y,
                            message: d,
                            description: g,
                            btn: b,
                            role: m
                        }),
                        className: (0, rh.default)(y && `${c}-${y}`, f, p)
                    }))
                },
                i = {
                    open: n,
                    destroy: s => {
                        var l, u;
                        s !== void 0 ? (l = t.current) === null || l === void 0 || l.close(s) : (u = t.current) === null || u === void 0 || u.destroy()
                    }
                };
            return ["success", "info", "warning", "error"].forEach(s => {
                i[s] = l => n(Object.assign(Object.assign({}, l), {
                    type: s
                }))
            }), i
        }, []), Ht.createElement(Rk, Object.assign({
            key: "notification-holder"
        }, e, {
            ref: t
        }))]
    }

    function nh(e) {
        return Ok(e)
    }
    var oh = T($()),
        ih = oh.default.createContext({}),
        Pk = oh.default.createContext({
            message: {},
            notification: {},
            modal: {}
        }),
        ah = Pk;
    var Ak = e => {
            let {
                componentCls: t,
                colorText: r,
                fontSize: n,
                lineHeight: o,
                fontFamily: i
            } = e;
            return {
                [t]: {
                    color: r,
                    fontSize: n,
                    lineHeight: o,
                    fontFamily: i
                }
            }
        },
        db = Pt("App", e => [Ak(e)]);
    var Tk = () => zr.default.useContext(ah),
        mb = e => {
            let {
                prefixCls: t,
                children: r,
                className: n,
                rootClassName: o,
                message: i,
                notification: a,
                style: s
            } = e, {
                getPrefixCls: l
            } = (0, zr.useContext)(Ee), u = l("app", t), [f, c] = db(u), d = (0, pb.default)(c, u, n, o), g = (0, zr.useContext)(ih), v = zr.default.useMemo(() => ({
                message: Object.assign(Object.assign({}, g.message), i),
                notification: Object.assign(Object.assign({}, g.notification), a)
            }), [i, a, g.message, g.message]), [y, b] = tg(v.message), [p, m] = nh(v.notification), [h, x] = ob(), S = zr.default.useMemo(() => ({
                message: y,
                notification: p,
                modal: h
            }), [y, p, h]);
            return f(zr.default.createElement(ah.Provider, {
                value: S
            }, zr.default.createElement(ih.Provider, {
                value: v
            }, zr.default.createElement("div", {
                className: d,
                style: s
            }, x, b, m, r))))
        };
    mb.useApp = Tk;
    var mf = mb;
    var Nk = e => {
            let t = e?.algorithm ? $r(e.algorithm) : $r(yr),
                r = Object.assign(Object.assign({}, an), e?.token);
            return Au(r, {
                override: e?.token
            }, t, Ts)
        },
        gb = Nk;

    function sh(e) {
        let {
            sizeUnit: t,
            sizeStep: r
        } = e, n = r - 2;
        return {
            sizeXXL: t * (n + 10),
            sizeXL: t * (n + 6),
            sizeLG: t * (n + 2),
            sizeMD: t * (n + 2),
            sizeMS: t * (n + 1),
            size: t * n,
            sizeSM: t * n,
            sizeXS: t * (n - 1),
            sizeXXS: t * (n - 1)
        }
    }
    var kk = (e, t) => {
            let r = t ?? yr(e),
                n = r.fontSizeSM,
                o = r.controlHeight - 4;
            return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, r), sh(t ?? e)), lc(n)), {
                controlHeight: o
            }), sc(Object.assign(Object.assign({}, r), {
                controlHeight: o
            })))
        },
        hb = kk;
    var pn = (e, t) => new Ae(e).setAlpha(t).toRgbString(),
        Do = (e, t) => new Ae(e).lighten(t).toHexString();
    var vb = e => {
            let t = Je(e, {
                theme: "dark"
            });
            return {
                1: t[0],
                2: t[1],
                3: t[2],
                4: t[3],
                5: t[6],
                6: t[5],
                7: t[4],
                8: t[6],
                9: t[5],
                10: t[4]
            }
        },
        yb = (e, t) => {
            let r = e || "#000",
                n = t || "#fff";
            return {
                colorBgBase: r,
                colorTextBase: n,
                colorText: pn(n, .85),
                colorTextSecondary: pn(n, .65),
                colorTextTertiary: pn(n, .45),
                colorTextQuaternary: pn(n, .25),
                colorFill: pn(n, .18),
                colorFillSecondary: pn(n, .12),
                colorFillTertiary: pn(n, .08),
                colorFillQuaternary: pn(n, .04),
                colorBgElevated: Do(r, 12),
                colorBgContainer: Do(r, 8),
                colorBgLayout: Do(r, 0),
                colorBgSpotlight: Do(r, 26),
                colorBorder: Do(r, 26),
                colorBorderSecondary: Do(r, 19)
            }
        };
    var _k = (e, t) => {
            let r = Object.keys(Os).map(o => {
                    let i = Je(e[o], {
                        theme: "dark"
                    });
                    return new Array(10).fill(1).reduce((a, s, l) => (a[`${o}-${l+1}`] = i[l], a[`${o}${l+1}`] = i[l], a), {})
                }).reduce((o, i) => (o = Object.assign(Object.assign({}, o), i), o), {}),
                n = t ?? yr(e);
            return Object.assign(Object.assign(Object.assign({}, n), r), Ps(e, {
                generateColorPalettes: vb,
                generateNeutralColorPalettes: yb
            }))
        },
        xb = _k;

    function Lk() {
        let [e, t, r] = Fr();
        return {
            theme: e,
            token: t,
            hashId: r
        }
    }
    var na = {
        defaultConfig: Vi,
        defaultSeed: Vi.token,
        useToken: Lk,
        defaultAlgorithm: yr,
        darkAlgorithm: xb,
        compactAlgorithm: hb,
        getDesignToken: gb
    };
    var hf = T($());
    var Mk = T(ss());

    function Sb() {
        return matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    }
    var oa = T(Bo());

    function Hk({
        container: e,
        shadowRoot: t,
        colorPrimary: r,
        zIndexPopupBase: n,
        render: o
    }) {
        let [i, a] = us({
            theme: "light"
        }), s = i.theme, l = (0, hf.useMemo)(() => s === "auto" ? Sb() : s, [s]);
        if ((0, hf.useEffect)(() => {
                a || e.setAttribute("data-gpts-theme", l)
            }, [l, a, e]), a) return null;
        let u = r || "#1071f9";
        return t ? (0, oa.jsx)(nm, {
            container: t,
            children: (0, oa.jsx)(Qi, {
                theme: {
                    token: {
                        colorPrimary: u,
                        zIndexPopupBase: n || 1e3,
                        borderRadius: 8,
                        borderRadiusSM: 8,
                        borderRadiusLG: 10,
                        borderRadiusXS: 6
                    },
                    algorithm: l === "dark" ? na.darkAlgorithm : na.defaultAlgorithm
                },
                children: (0, oa.jsx)(mf, {
                    children: o(l)
                })
            })
        }) : (0, oa.jsx)(Qi, {
            theme: {
                token: {
                    borderRadius: 8,
                    borderRadiusSM: 8,
                    borderRadiusLG: 10,
                    borderRadiusXS: 6
                },
                algorithm: l === "dark" ? na.darkAlgorithm : na.defaultAlgorithm
            },
            children: (0, oa.jsx)(mf, {
                children: o(l)
            })
        })
    }
    var Eb = Hk;
    var Rb = "./assets/sidepanel-guide-EDYMPLO6.mp4";
    var Ob = "./assets/logo-FNAHYZVS.png";
    var Le = T(Bo());

    function Wk() {
        let {
            t: e
        } = Jp();
        return A1() ? null : (0, Le.jsx)("div", {
            className: "sidepanel-guide flex items-center justify-center h-full",
            children: (0, Le.jsxs)("div", {
                className: "center flex flex-col items-center",
                children: [(0, Le.jsxs)("div", {
                    className: "right leading-[32px]",
                    children: [(0, Le.jsxs)("div", {
                        className: "text-[30px] flex items-center justify-center font-bold text-center mb-[20px]",
                        children: [(0, Le.jsx)("img", {
                            src: Ob,
                            className: "w-[30px] mr-2"
                        }), e("sidepanel.title")]
                    }), (0, Le.jsxs)("div", {
                        className: "w-[569px] text-[16px] opacity-60 leading-[24px]",
                        children: [(0, Le.jsxs)("ul", {
                            className: "leading-[28px] my-[30px] flex flex-col gap-2",
                            children: [(0, Le.jsx)("li", {
                                children: e("sidepanel.benefit1", {
                                    b: r => (0, Le.jsx)("b", {
                                        children: r
                                    })
                                })
                            }), (0, Le.jsx)("li", {
                                children: e("sidepanel.benefit2", {
                                    b: r => (0, Le.jsx)("b", {
                                        children: r
                                    })
                                })
                            }), (0, Le.jsx)("li", {
                                children: e("sidepanel.benefit3", {
                                    b: r => (0, Le.jsx)("b", {
                                        children: r
                                    })
                                })
                            })]
                        }), (0, Le.jsx)("div", {
                            className: "px-[20px] text-[14px]",
                            children: e("sidepanel.tip")
                        })]
                    })]
                }), (0, Le.jsx)("div", {
                    className: "left w-[569px] text-center mt-[16px]",
                    children: (0, Le.jsx)("video", {
                        src: Rb,
                        controls: !1,
                        autoPlay: !0,
                        loop: !0,
                        className: " rounded-xl w-full"
                    })
                })]
            })
        })
    }

    function Qk() {
        return (0, Le.jsx)(Eb, {
            container: document.documentElement,
            render: () => (0, Le.jsx)(Wk, {})
        })
    }
    var Pb = Qk;
    var Tb = T(Bo());
    window.isInSidepanel = !0;
    var Kk = Ab.default.createRoot(document.getElementById("app"));
    Kk.render((0, Tb.jsx)(Pb, {}));
})();
