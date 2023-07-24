"use strict";
(() => {
    var Ky = Object.create;
    var bp = Object.defineProperty;
    var Gy = Object.getOwnPropertyDescriptor;
    var Qy = Object.getOwnPropertyNames;
    var Xy = Object.getPrototypeOf,
        Yy = Object.prototype.hasOwnProperty;
    var Ge = (e, t) => () => (t || e((t = {
        exports: {}
    }).exports, t), t.exports);
    var Zy = (e, t, r, n) => {
        if (t && typeof t == "object" || typeof t == "function")
            for (let o of Qy(t)) !Yy.call(e, o) && o !== r && bp(e, o, {
                get: () => t[o],
                enumerable: !(n = Gy(t, o)) || n.enumerable
            });
        return e
    };
    var M = (e, t, r) => (r = e != null ? Ky(Xy(e)) : {}, Zy(t || !e || !e.__esModule ? bp(r, "default", {
        value: e,
        enumerable: !0
    }) : r, e));
    var jp = Ge(V => {
        "use strict";
        var $o = Symbol.for("react.element"),
            qy = Symbol.for("react.portal"),
            Jy = Symbol.for("react.fragment"),
            e2 = Symbol.for("react.strict_mode"),
            t2 = Symbol.for("react.profiler"),
            r2 = Symbol.for("react.provider"),
            n2 = Symbol.for("react.context"),
            o2 = Symbol.for("react.forward_ref"),
            i2 = Symbol.for("react.suspense"),
            a2 = Symbol.for("react.memo"),
            s2 = Symbol.for("react.lazy"),
            Ep = Symbol.iterator;

        function l2(e) {
            return e === null || typeof e != "object" ? null : (e = Ep && e[Ep] || e["@@iterator"], typeof e == "function" ? e : null)
        }
        var Op = {
                isMounted: function() {
                    return !1
                },
                enqueueForceUpdate: function() {},
                enqueueReplaceState: function() {},
                enqueueSetState: function() {}
            },
            Tp = Object.assign,
            Rp = {};

        function Fn(e, t, r) {
            this.props = e, this.context = t, this.refs = Rp, this.updater = r || Op
        }
        Fn.prototype.isReactComponent = {};
        Fn.prototype.setState = function(e, t) {
            if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
            this.updater.enqueueSetState(this, e, t, "setState")
        };
        Fn.prototype.forceUpdate = function(e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate")
        };

        function Ap() {}
        Ap.prototype = Fn.prototype;

        function Cu(e, t, r) {
            this.props = e, this.context = t, this.refs = Rp, this.updater = r || Op
        }
        var wu = Cu.prototype = new Ap;
        wu.constructor = Cu;
        Tp(wu, Fn.prototype);
        wu.isPureReactComponent = !0;
        var kp = Array.isArray,
            _p = Object.prototype.hasOwnProperty,
            bu = {
                current: null
            },
            Np = {
                key: !0,
                ref: !0,
                __self: !0,
                __source: !0
            };

        function Lp(e, t, r) {
            var n, o = {},
                i = null,
                a = null;
            if (t != null)
                for (n in t.ref !== void 0 && (a = t.ref), t.key !== void 0 && (i = "" + t.key), t) _p.call(t, n) && !Np.hasOwnProperty(n) && (o[n] = t[n]);
            var s = arguments.length - 2;
            if (s === 1) o.children = r;
            else if (1 < s) {
                for (var l = Array(s), u = 0; u < s; u++) l[u] = arguments[u + 2];
                o.children = l
            }
            if (e && e.defaultProps)
                for (n in s = e.defaultProps, s) o[n] === void 0 && (o[n] = s[n]);
            return {
                $$typeof: $o,
                type: e,
                key: i,
                ref: a,
                props: o,
                _owner: bu.current
            }
        }

        function u2(e, t) {
            return {
                $$typeof: $o,
                type: e.type,
                key: t,
                ref: e.ref,
                props: e.props,
                _owner: e._owner
            }
        }

        function Eu(e) {
            return typeof e == "object" && e !== null && e.$$typeof === $o
        }

        function c2(e) {
            var t = {
                "=": "=0",
                ":": "=2"
            };
            return "$" + e.replace(/[=:]/g, function(r) {
                return t[r]
            })
        }
        var Pp = /\/+/g;

        function Su(e, t) {
            return typeof e == "object" && e !== null && e.key != null ? c2("" + e.key) : t.toString(36)
        }

        function va(e, t, r, n, o) {
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
                        case $o:
                        case qy:
                            a = !0
                    }
            }
            if (a) return a = e, o = o(a), e = n === "" ? "." + Su(a, 0) : n, kp(o) ? (r = "", e != null && (r = e.replace(Pp, "$&/") + "/"), va(o, t, r, "", function(u) {
                return u
            })) : o != null && (Eu(o) && (o = u2(o, r + (!o.key || a && a.key === o.key ? "" : ("" + o.key).replace(Pp, "$&/") + "/") + e)), t.push(o)), 1;
            if (a = 0, n = n === "" ? "." : n + ":", kp(e))
                for (var s = 0; s < e.length; s++) {
                    i = e[s];
                    var l = n + Su(i, s);
                    a += va(i, t, r, l, o)
                } else if (l = l2(e), typeof l == "function")
                    for (e = l.call(e), s = 0; !(i = e.next()).done;) i = i.value, l = n + Su(i, s++), a += va(i, t, r, l, o);
                else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
            return a
        }

        function ha(e, t, r) {
            if (e == null) return e;
            var n = [],
                o = 0;
            return va(e, n, "", "", function(i) {
                return t.call(r, i, o++)
            }), n
        }

        function f2(e) {
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
        var He = {
                current: null
            },
            ya = {
                transition: null
            },
            d2 = {
                ReactCurrentDispatcher: He,
                ReactCurrentBatchConfig: ya,
                ReactCurrentOwner: bu
            };
        V.Children = {
            map: ha,
            forEach: function(e, t, r) {
                ha(e, function() {
                    t.apply(this, arguments)
                }, r)
            },
            count: function(e) {
                var t = 0;
                return ha(e, function() {
                    t++
                }), t
            },
            toArray: function(e) {
                return ha(e, function(t) {
                    return t
                }) || []
            },
            only: function(e) {
                if (!Eu(e)) throw Error("React.Children.only expected to receive a single React element child.");
                return e
            }
        };
        V.Component = Fn;
        V.Fragment = Jy;
        V.Profiler = t2;
        V.PureComponent = Cu;
        V.StrictMode = e2;
        V.Suspense = i2;
        V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = d2;
        V.cloneElement = function(e, t, r) {
            if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
            var n = Tp({}, e.props),
                o = e.key,
                i = e.ref,
                a = e._owner;
            if (t != null) {
                if (t.ref !== void 0 && (i = t.ref, a = bu.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
                for (l in t) _p.call(t, l) && !Np.hasOwnProperty(l) && (n[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l])
            }
            var l = arguments.length - 2;
            if (l === 1) n.children = r;
            else if (1 < l) {
                s = Array(l);
                for (var u = 0; u < l; u++) s[u] = arguments[u + 2];
                n.children = s
            }
            return {
                $$typeof: $o,
                type: e.type,
                key: o,
                ref: i,
                props: n,
                _owner: a
            }
        };
        V.createContext = function(e) {
            return e = {
                $$typeof: n2,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null
            }, e.Provider = {
                $$typeof: r2,
                _context: e
            }, e.Consumer = e
        };
        V.createElement = Lp;
        V.createFactory = function(e) {
            var t = Lp.bind(null, e);
            return t.type = e, t
        };
        V.createRef = function() {
            return {
                current: null
            }
        };
        V.forwardRef = function(e) {
            return {
                $$typeof: o2,
                render: e
            }
        };
        V.isValidElement = Eu;
        V.lazy = function(e) {
            return {
                $$typeof: s2,
                _payload: {
                    _status: -1,
                    _result: e
                },
                _init: f2
            }
        };
        V.memo = function(e, t) {
            return {
                $$typeof: a2,
                type: e,
                compare: t === void 0 ? null : t
            }
        };
        V.startTransition = function(e) {
            var t = ya.transition;
            ya.transition = {};
            try {
                e()
            } finally {
                ya.transition = t
            }
        };
        V.unstable_act = function() {
            throw Error("act(...) is not supported in production builds of React.")
        };
        V.useCallback = function(e, t) {
            return He.current.useCallback(e, t)
        };
        V.useContext = function(e) {
            return He.current.useContext(e)
        };
        V.useDebugValue = function() {};
        V.useDeferredValue = function(e) {
            return He.current.useDeferredValue(e)
        };
        V.useEffect = function(e, t) {
            return He.current.useEffect(e, t)
        };
        V.useId = function() {
            return He.current.useId()
        };
        V.useImperativeHandle = function(e, t, r) {
            return He.current.useImperativeHandle(e, t, r)
        };
        V.useInsertionEffect = function(e, t) {
            return He.current.useInsertionEffect(e, t)
        };
        V.useLayoutEffect = function(e, t) {
            return He.current.useLayoutEffect(e, t)
        };
        V.useMemo = function(e, t) {
            return He.current.useMemo(e, t)
        };
        V.useReducer = function(e, t, r) {
            return He.current.useReducer(e, t, r)
        };
        V.useRef = function(e) {
            return He.current.useRef(e)
        };
        V.useState = function(e) {
            return He.current.useState(e)
        };
        V.useSyncExternalStore = function(e, t, r) {
            return He.current.useSyncExternalStore(e, t, r)
        };
        V.useTransition = function() {
            return He.current.useTransition()
        };
        V.version = "18.2.0"
    });
    var D = Ge((rS, Mp) => {
        "use strict";
        Mp.exports = jp()
    });
    var Vp = Ge(q => {
        "use strict";

        function Tu(e, t) {
            var r = e.length;
            e.push(t);
            e: for (; 0 < r;) {
                var n = r - 1 >>> 1,
                    o = e[n];
                if (0 < xa(o, t)) e[n] = t, e[r] = o, r = n;
                else break e
            }
        }

        function Pt(e) {
            return e.length === 0 ? null : e[0]
        }

        function Ca(e) {
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
                    if (0 > xa(s, r)) l < o && 0 > xa(u, s) ? (e[n] = u, e[l] = r, n = l) : (e[n] = s, e[a] = r, n = a);
                    else if (l < o && 0 > xa(u, r)) e[n] = u, e[l] = r, n = l;
                    else break e
                }
            }
            return t
        }

        function xa(e, t) {
            var r = e.sortIndex - t.sortIndex;
            return r !== 0 ? r : e.id - t.id
        }
        typeof performance == "object" && typeof performance.now == "function" ? (Ip = performance, q.unstable_now = function() {
            return Ip.now()
        }) : (ku = Date, Dp = ku.now(), q.unstable_now = function() {
            return ku.now() - Dp
        });
        var Ip, ku, Dp, $t = [],
            xr = [],
            p2 = 1,
            pt = null,
            Ne = 3,
            wa = !1,
            nn = !1,
            Bo = !1,
            $p = typeof setTimeout == "function" ? setTimeout : null,
            Hp = typeof clearTimeout == "function" ? clearTimeout : null,
            Fp = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

        function Ru(e) {
            for (var t = Pt(xr); t !== null;) {
                if (t.callback === null) Ca(xr);
                else if (t.startTime <= e) Ca(xr), t.sortIndex = t.expirationTime, Tu($t, t);
                else break;
                t = Pt(xr)
            }
        }

        function Au(e) {
            if (Bo = !1, Ru(e), !nn)
                if (Pt($t) !== null) nn = !0, Nu(_u);
                else {
                    var t = Pt(xr);
                    t !== null && Lu(Au, t.startTime - e)
                }
        }

        function _u(e, t) {
            nn = !1, Bo && (Bo = !1, Hp(Uo), Uo = -1), wa = !0;
            var r = Ne;
            try {
                for (Ru(t), pt = Pt($t); pt !== null && (!(pt.expirationTime > t) || e && !Wp());) {
                    var n = pt.callback;
                    if (typeof n == "function") {
                        pt.callback = null, Ne = pt.priorityLevel;
                        var o = n(pt.expirationTime <= t);
                        t = q.unstable_now(), typeof o == "function" ? pt.callback = o : pt === Pt($t) && Ca($t), Ru(t)
                    } else Ca($t);
                    pt = Pt($t)
                }
                if (pt !== null) var i = !0;
                else {
                    var a = Pt(xr);
                    a !== null && Lu(Au, a.startTime - t), i = !1
                }
                return i
            } finally {
                pt = null, Ne = r, wa = !1
            }
        }
        var ba = !1,
            Sa = null,
            Uo = -1,
            Bp = 5,
            Up = -1;

        function Wp() {
            return !(q.unstable_now() - Up < Bp)
        }

        function Pu() {
            if (Sa !== null) {
                var e = q.unstable_now();
                Up = e;
                var t = !0;
                try {
                    t = Sa(!0, e)
                } finally {
                    t ? Ho() : (ba = !1, Sa = null)
                }
            } else ba = !1
        }
        var Ho;
        typeof Fp == "function" ? Ho = function() {
            Fp(Pu)
        } : typeof MessageChannel < "u" ? (Ou = new MessageChannel, zp = Ou.port2, Ou.port1.onmessage = Pu, Ho = function() {
            zp.postMessage(null)
        }) : Ho = function() {
            $p(Pu, 0)
        };
        var Ou, zp;

        function Nu(e) {
            Sa = e, ba || (ba = !0, Ho())
        }

        function Lu(e, t) {
            Uo = $p(function() {
                e(q.unstable_now())
            }, t)
        }
        q.unstable_IdlePriority = 5;
        q.unstable_ImmediatePriority = 1;
        q.unstable_LowPriority = 4;
        q.unstable_NormalPriority = 3;
        q.unstable_Profiling = null;
        q.unstable_UserBlockingPriority = 2;
        q.unstable_cancelCallback = function(e) {
            e.callback = null
        };
        q.unstable_continueExecution = function() {
            nn || wa || (nn = !0, Nu(_u))
        };
        q.unstable_forceFrameRate = function(e) {
            0 > e || 125 < e || (Bp = 0 < e ? Math.floor(1e3 / e) : 5)
        };
        q.unstable_getCurrentPriorityLevel = function() {
            return Ne
        };
        q.unstable_getFirstCallbackNode = function() {
            return Pt($t)
        };
        q.unstable_next = function(e) {
            switch (Ne) {
                case 1:
                case 2:
                case 3:
                    var t = 3;
                    break;
                default:
                    t = Ne
            }
            var r = Ne;
            Ne = t;
            try {
                return e()
            } finally {
                Ne = r
            }
        };
        q.unstable_pauseExecution = function() {};
        q.unstable_requestPaint = function() {};
        q.unstable_runWithPriority = function(e, t) {
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
            var r = Ne;
            Ne = e;
            try {
                return t()
            } finally {
                Ne = r
            }
        };
        q.unstable_scheduleCallback = function(e, t, r) {
            var n = q.unstable_now();
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
                id: p2++,
                callback: t,
                priorityLevel: e,
                startTime: r,
                expirationTime: o,
                sortIndex: -1
            }, r > n ? (e.sortIndex = r, Tu(xr, e), Pt($t) === null && e === Pt(xr) && (Bo ? (Hp(Uo), Uo = -1) : Bo = !0, Lu(Au, r - n))) : (e.sortIndex = o, Tu($t, e), nn || wa || (nn = !0, Nu(_u))), e
        };
        q.unstable_shouldYield = Wp;
        q.unstable_wrapCallback = function(e) {
            var t = Ne;
            return function() {
                var r = Ne;
                Ne = t;
                try {
                    return e.apply(this, arguments)
                } finally {
                    Ne = r
                }
            }
        }
    });
    var Gp = Ge((oS, Kp) => {
        "use strict";
        Kp.exports = Vp()
    });
    var J1 = Ge(lt => {
        "use strict";
        var eg = D(),
            at = Gp();

        function N(e) {
            for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++) t += "&args[]=" + encodeURIComponent(arguments[r]);
            return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
        }
        var tg = new Set,
            fi = {};

        function vn(e, t) {
            io(e, t), io(e + "Capture", t)
        }

        function io(e, t) {
            for (fi[e] = t, e = 0; e < t.length; e++) tg.add(t[e])
        }
        var ir = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
            rc = Object.prototype.hasOwnProperty,
            m2 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
            Qp = {},
            Xp = {};

        function g2(e) {
            return rc.call(Xp, e) ? !0 : rc.call(Qp, e) ? !1 : m2.test(e) ? Xp[e] = !0 : (Qp[e] = !0, !1)
        }

        function h2(e, t, r, n) {
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

        function v2(e, t, r, n) {
            if (t === null || typeof t > "u" || h2(e, t, r, n)) return !0;
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

        function We(e, t, r, n, o, i, a) {
            this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = n, this.attributeNamespace = o, this.mustUseProperty = r, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = a
        }
        var Re = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
            Re[e] = new We(e, 0, !1, e, null, !1, !1)
        });
        [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"]
        ].forEach(function(e) {
            var t = e[0];
            Re[t] = new We(t, 1, !1, e[1], null, !1, !1)
        });
        ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
            Re[e] = new We(e, 2, !1, e.toLowerCase(), null, !1, !1)
        });
        ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
            Re[e] = new We(e, 2, !1, e, null, !1, !1)
        });
        "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
            Re[e] = new We(e, 3, !1, e.toLowerCase(), null, !1, !1)
        });
        ["checked", "multiple", "muted", "selected"].forEach(function(e) {
            Re[e] = new We(e, 3, !0, e, null, !1, !1)
        });
        ["capture", "download"].forEach(function(e) {
            Re[e] = new We(e, 4, !1, e, null, !1, !1)
        });
        ["cols", "rows", "size", "span"].forEach(function(e) {
            Re[e] = new We(e, 6, !1, e, null, !1, !1)
        });
        ["rowSpan", "start"].forEach(function(e) {
            Re[e] = new We(e, 5, !1, e.toLowerCase(), null, !1, !1)
        });
        var Qc = /[\-:]([a-z])/g;

        function Xc(e) {
            return e[1].toUpperCase()
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
            var t = e.replace(Qc, Xc);
            Re[t] = new We(t, 1, !1, e, null, !1, !1)
        });
        "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
            var t = e.replace(Qc, Xc);
            Re[t] = new We(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
        });
        ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
            var t = e.replace(Qc, Xc);
            Re[t] = new We(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
        });
        ["tabIndex", "crossOrigin"].forEach(function(e) {
            Re[e] = new We(e, 1, !1, e.toLowerCase(), null, !1, !1)
        });
        Re.xlinkHref = new We("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
        ["src", "href", "action", "formAction"].forEach(function(e) {
            Re[e] = new We(e, 1, !1, e.toLowerCase(), null, !0, !0)
        });

        function Yc(e, t, r, n) {
            var o = Re.hasOwnProperty(t) ? Re[t] : null;
            (o !== null ? o.type !== 0 : n || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (v2(t, r, o, n) && (r = null), n || o === null ? g2(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r)) : o.mustUseProperty ? e[o.propertyName] = r === null ? o.type === 3 ? !1 : "" : r : (t = o.attributeName, n = o.attributeNamespace, r === null ? e.removeAttribute(t) : (o = o.type, r = o === 3 || o === 4 && r === !0 ? "" : "" + r, n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))))
        }
        var ur = eg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
            Ea = Symbol.for("react.element"),
            Hn = Symbol.for("react.portal"),
            Bn = Symbol.for("react.fragment"),
            Zc = Symbol.for("react.strict_mode"),
            nc = Symbol.for("react.profiler"),
            rg = Symbol.for("react.provider"),
            ng = Symbol.for("react.context"),
            qc = Symbol.for("react.forward_ref"),
            oc = Symbol.for("react.suspense"),
            ic = Symbol.for("react.suspense_list"),
            Jc = Symbol.for("react.memo"),
            Cr = Symbol.for("react.lazy");
        Symbol.for("react.scope");
        Symbol.for("react.debug_trace_mode");
        var og = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden");
        Symbol.for("react.cache");
        Symbol.for("react.tracing_marker");
        var Yp = Symbol.iterator;

        function Wo(e) {
            return e === null || typeof e != "object" ? null : (e = Yp && e[Yp] || e["@@iterator"], typeof e == "function" ? e : null)
        }
        var ue = Object.assign,
            ju;

        function qo(e) {
            if (ju === void 0) try {
                throw Error()
            } catch (r) {
                var t = r.stack.trim().match(/\n( *(at )?)/);
                ju = t && t[1] || ""
            }
            return `
` + ju + e
        }
        var Mu = !1;

        function Iu(e, t) {
            if (!e || Mu) return "";
            Mu = !0;
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
                Mu = !1, Error.prepareStackTrace = r
            }
            return (e = e ? e.displayName || e.name : "") ? qo(e) : ""
        }

        function y2(e) {
            switch (e.tag) {
                case 5:
                    return qo(e.type);
                case 16:
                    return qo("Lazy");
                case 13:
                    return qo("Suspense");
                case 19:
                    return qo("SuspenseList");
                case 0:
                case 2:
                case 15:
                    return e = Iu(e.type, !1), e;
                case 11:
                    return e = Iu(e.type.render, !1), e;
                case 1:
                    return e = Iu(e.type, !0), e;
                default:
                    return ""
            }
        }

        function ac(e) {
            if (e == null) return null;
            if (typeof e == "function") return e.displayName || e.name || null;
            if (typeof e == "string") return e;
            switch (e) {
                case Bn:
                    return "Fragment";
                case Hn:
                    return "Portal";
                case nc:
                    return "Profiler";
                case Zc:
                    return "StrictMode";
                case oc:
                    return "Suspense";
                case ic:
                    return "SuspenseList"
            }
            if (typeof e == "object") switch (e.$$typeof) {
                case ng:
                    return (e.displayName || "Context") + ".Consumer";
                case rg:
                    return (e._context.displayName || "Context") + ".Provider";
                case qc:
                    var t = e.render;
                    return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
                case Jc:
                    return t = e.displayName || null, t !== null ? t : ac(e.type) || "Memo";
                case Cr:
                    t = e._payload, e = e._init;
                    try {
                        return ac(e(t))
                    } catch {}
            }
            return null
        }

        function x2(e) {
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
                    return ac(t);
                case 8:
                    return t === Zc ? "StrictMode" : "Mode";
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

        function Mr(e) {
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

        function ig(e) {
            var t = e.type;
            return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
        }

        function S2(e) {
            var t = ig(e) ? "checked" : "value",
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

        function ka(e) {
            e._valueTracker || (e._valueTracker = S2(e))
        }

        function ag(e) {
            if (!e) return !1;
            var t = e._valueTracker;
            if (!t) return !0;
            var r = t.getValue(),
                n = "";
            return e && (n = ig(e) ? e.checked ? "true" : "false" : e.value), e = n, e !== r ? (t.setValue(e), !0) : !1
        }

        function Ja(e) {
            if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
            try {
                return e.activeElement || e.body
            } catch {
                return e.body
            }
        }

        function sc(e, t) {
            var r = t.checked;
            return ue({}, t, {
                defaultChecked: void 0,
                defaultValue: void 0,
                value: void 0,
                checked: r ?? e._wrapperState.initialChecked
            })
        }

        function Zp(e, t) {
            var r = t.defaultValue == null ? "" : t.defaultValue,
                n = t.checked != null ? t.checked : t.defaultChecked;
            r = Mr(t.value != null ? t.value : r), e._wrapperState = {
                initialChecked: n,
                initialValue: r,
                controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
            }
        }

        function sg(e, t) {
            t = t.checked, t != null && Yc(e, "checked", t, !1)
        }

        function lc(e, t) {
            sg(e, t);
            var r = Mr(t.value),
                n = t.type;
            if (r != null) n === "number" ? (r === 0 && e.value === "" || e.value != r) && (e.value = "" + r) : e.value !== "" + r && (e.value = "" + r);
            else if (n === "submit" || n === "reset") {
                e.removeAttribute("value");
                return
            }
            t.hasOwnProperty("value") ? uc(e, t.type, r) : t.hasOwnProperty("defaultValue") && uc(e, t.type, Mr(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
        }

        function qp(e, t, r) {
            if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
                var n = t.type;
                if (!(n !== "submit" && n !== "reset" || t.value !== void 0 && t.value !== null)) return;
                t = "" + e._wrapperState.initialValue, r || t === e.value || (e.value = t), e.defaultValue = t
            }
            r = e.name, r !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, r !== "" && (e.name = r)
        }

        function uc(e, t, r) {
            (t !== "number" || Ja(e.ownerDocument) !== e) && (r == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + r && (e.defaultValue = "" + r))
        }
        var Jo = Array.isArray;

        function Jn(e, t, r, n) {
            if (e = e.options, t) {
                t = {};
                for (var o = 0; o < r.length; o++) t["$" + r[o]] = !0;
                for (r = 0; r < e.length; r++) o = t.hasOwnProperty("$" + e[r].value), e[r].selected !== o && (e[r].selected = o), o && n && (e[r].defaultSelected = !0)
            } else {
                for (r = "" + Mr(r), t = null, o = 0; o < e.length; o++) {
                    if (e[o].value === r) {
                        e[o].selected = !0, n && (e[o].defaultSelected = !0);
                        return
                    }
                    t !== null || e[o].disabled || (t = e[o])
                }
                t !== null && (t.selected = !0)
            }
        }

        function cc(e, t) {
            if (t.dangerouslySetInnerHTML != null) throw Error(N(91));
            return ue({}, t, {
                value: void 0,
                defaultValue: void 0,
                children: "" + e._wrapperState.initialValue
            })
        }

        function Jp(e, t) {
            var r = t.value;
            if (r == null) {
                if (r = t.children, t = t.defaultValue, r != null) {
                    if (t != null) throw Error(N(92));
                    if (Jo(r)) {
                        if (1 < r.length) throw Error(N(93));
                        r = r[0]
                    }
                    t = r
                }
                t == null && (t = ""), r = t
            }
            e._wrapperState = {
                initialValue: Mr(r)
            }
        }

        function lg(e, t) {
            var r = Mr(t.value),
                n = Mr(t.defaultValue);
            r != null && (r = "" + r, r !== e.value && (e.value = r), t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)), n != null && (e.defaultValue = "" + n)
        }

        function em(e) {
            var t = e.textContent;
            t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
        }

        function ug(e) {
            switch (e) {
                case "svg":
                    return "http://www.w3.org/2000/svg";
                case "math":
                    return "http://www.w3.org/1998/Math/MathML";
                default:
                    return "http://www.w3.org/1999/xhtml"
            }
        }

        function fc(e, t) {
            return e == null || e === "http://www.w3.org/1999/xhtml" ? ug(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
        }
        var Pa, cg = function(e) {
            return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, r, n, o) {
                MSApp.execUnsafeLocalFunction(function() {
                    return e(t, r, n, o)
                })
            } : e
        }(function(e, t) {
            if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
            else {
                for (Pa = Pa || document.createElement("div"), Pa.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Pa.firstChild; e.firstChild;) e.removeChild(e.firstChild);
                for (; t.firstChild;) e.appendChild(t.firstChild)
            }
        });

        function di(e, t) {
            if (t) {
                var r = e.firstChild;
                if (r && r === e.lastChild && r.nodeType === 3) {
                    r.nodeValue = t;
                    return
                }
            }
            e.textContent = t
        }
        var ri = {
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
            C2 = ["Webkit", "ms", "Moz", "O"];
        Object.keys(ri).forEach(function(e) {
            C2.forEach(function(t) {
                t = t + e.charAt(0).toUpperCase() + e.substring(1), ri[t] = ri[e]
            })
        });

        function fg(e, t, r) {
            return t == null || typeof t == "boolean" || t === "" ? "" : r || typeof t != "number" || t === 0 || ri.hasOwnProperty(e) && ri[e] ? ("" + t).trim() : t + "px"
        }

        function dg(e, t) {
            e = e.style;
            for (var r in t)
                if (t.hasOwnProperty(r)) {
                    var n = r.indexOf("--") === 0,
                        o = fg(r, t[r], n);
                    r === "float" && (r = "cssFloat"), n ? e.setProperty(r, o) : e[r] = o
                }
        }
        var w2 = ue({
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

        function dc(e, t) {
            if (t) {
                if (w2[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(N(137, e));
                if (t.dangerouslySetInnerHTML != null) {
                    if (t.children != null) throw Error(N(60));
                    if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(N(61))
                }
                if (t.style != null && typeof t.style != "object") throw Error(N(62))
            }
        }

        function pc(e, t) {
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
        var mc = null;

        function ef(e) {
            return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
        }
        var gc = null,
            eo = null,
            to = null;

        function tm(e) {
            if (e = Ai(e)) {
                if (typeof gc != "function") throw Error(N(280));
                var t = e.stateNode;
                t && (t = Os(t), gc(e.stateNode, e.type, t))
            }
        }

        function pg(e) {
            eo ? to ? to.push(e) : to = [e] : eo = e
        }

        function mg() {
            if (eo) {
                var e = eo,
                    t = to;
                if (to = eo = null, tm(e), t)
                    for (e = 0; e < t.length; e++) tm(t[e])
            }
        }

        function gg(e, t) {
            return e(t)
        }

        function hg() {}
        var Du = !1;

        function vg(e, t, r) {
            if (Du) return e(t, r);
            Du = !0;
            try {
                return gg(e, t, r)
            } finally {
                Du = !1, (eo !== null || to !== null) && (hg(), mg())
            }
        }

        function pi(e, t) {
            var r = e.stateNode;
            if (r === null) return null;
            var n = Os(r);
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
            if (r && typeof r != "function") throw Error(N(231, t, typeof r));
            return r
        }
        var hc = !1;
        if (ir) try {
            zn = {}, Object.defineProperty(zn, "passive", {
                get: function() {
                    hc = !0
                }
            }), window.addEventListener("test", zn, zn), window.removeEventListener("test", zn, zn)
        } catch {
            hc = !1
        }
        var zn;

        function b2(e, t, r, n, o, i, a, s, l) {
            var u = Array.prototype.slice.call(arguments, 3);
            try {
                t.apply(r, u)
            } catch (f) {
                this.onError(f)
            }
        }
        var ni = !1,
            es = null,
            ts = !1,
            vc = null,
            E2 = {
                onError: function(e) {
                    ni = !0, es = e
                }
            };

        function k2(e, t, r, n, o, i, a, s, l) {
            ni = !1, es = null, b2.apply(E2, arguments)
        }

        function P2(e, t, r, n, o, i, a, s, l) {
            if (k2.apply(this, arguments), ni) {
                if (ni) {
                    var u = es;
                    ni = !1, es = null
                } else throw Error(N(198));
                ts || (ts = !0, vc = u)
            }
        }

        function yn(e) {
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

        function yg(e) {
            if (e.tag === 13) {
                var t = e.memoizedState;
                if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
            }
            return null
        }

        function rm(e) {
            if (yn(e) !== e) throw Error(N(188))
        }

        function O2(e) {
            var t = e.alternate;
            if (!t) {
                if (t = yn(e), t === null) throw Error(N(188));
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
                        if (i === r) return rm(o), e;
                        if (i === n) return rm(o), t;
                        i = i.sibling
                    }
                    throw Error(N(188))
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
                        if (!a) throw Error(N(189))
                    }
                }
                if (r.alternate !== n) throw Error(N(190))
            }
            if (r.tag !== 3) throw Error(N(188));
            return r.stateNode.current === r ? e : t
        }

        function xg(e) {
            return e = O2(e), e !== null ? Sg(e) : null
        }

        function Sg(e) {
            if (e.tag === 5 || e.tag === 6) return e;
            for (e = e.child; e !== null;) {
                var t = Sg(e);
                if (t !== null) return t;
                e = e.sibling
            }
            return null
        }
        var Cg = at.unstable_scheduleCallback,
            nm = at.unstable_cancelCallback,
            T2 = at.unstable_shouldYield,
            R2 = at.unstable_requestPaint,
            fe = at.unstable_now,
            A2 = at.unstable_getCurrentPriorityLevel,
            tf = at.unstable_ImmediatePriority,
            wg = at.unstable_UserBlockingPriority,
            rs = at.unstable_NormalPriority,
            _2 = at.unstable_LowPriority,
            bg = at.unstable_IdlePriority,
            bs = null,
            Wt = null;

        function N2(e) {
            if (Wt && typeof Wt.onCommitFiberRoot == "function") try {
                Wt.onCommitFiberRoot(bs, e, void 0, (e.current.flags & 128) === 128)
            } catch {}
        }
        var _t = Math.clz32 ? Math.clz32 : M2,
            L2 = Math.log,
            j2 = Math.LN2;

        function M2(e) {
            return e >>>= 0, e === 0 ? 32 : 31 - (L2(e) / j2 | 0) | 0
        }
        var Oa = 64,
            Ta = 4194304;

        function ei(e) {
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

        function ns(e, t) {
            var r = e.pendingLanes;
            if (r === 0) return 0;
            var n = 0,
                o = e.suspendedLanes,
                i = e.pingedLanes,
                a = r & 268435455;
            if (a !== 0) {
                var s = a & ~o;
                s !== 0 ? n = ei(s) : (i &= a, i !== 0 && (n = ei(i)))
            } else a = r & ~o, a !== 0 ? n = ei(a) : i !== 0 && (n = ei(i));
            if (n === 0) return 0;
            if (t !== 0 && t !== n && !(t & o) && (o = n & -n, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0)) return t;
            if (n & 4 && (n |= r & 16), t = e.entangledLanes, t !== 0)
                for (e = e.entanglements, t &= n; 0 < t;) r = 31 - _t(t), o = 1 << r, n |= e[r], t &= ~o;
            return n
        }

        function I2(e, t) {
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

        function D2(e, t) {
            for (var r = e.suspendedLanes, n = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i;) {
                var a = 31 - _t(i),
                    s = 1 << a,
                    l = o[a];
                l === -1 ? (!(s & r) || s & n) && (o[a] = I2(s, t)) : l <= t && (e.expiredLanes |= s), i &= ~s
            }
        }

        function yc(e) {
            return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
        }

        function Eg() {
            var e = Oa;
            return Oa <<= 1, !(Oa & 4194240) && (Oa = 64), e
        }

        function Fu(e) {
            for (var t = [], r = 0; 31 > r; r++) t.push(e);
            return t
        }

        function Ti(e, t, r) {
            e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - _t(t), e[t] = r
        }

        function F2(e, t) {
            var r = e.pendingLanes & ~t;
            e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
            var n = e.eventTimes;
            for (e = e.expirationTimes; 0 < r;) {
                var o = 31 - _t(r),
                    i = 1 << o;
                t[o] = 0, n[o] = -1, e[o] = -1, r &= ~i
            }
        }

        function rf(e, t) {
            var r = e.entangledLanes |= t;
            for (e = e.entanglements; r;) {
                var n = 31 - _t(r),
                    o = 1 << n;
                o & t | e[n] & t && (e[n] |= t), r &= ~o
            }
        }
        var X = 0;

        function kg(e) {
            return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
        }
        var Pg, nf, Og, Tg, Rg, xc = !1,
            Ra = [],
            Or = null,
            Tr = null,
            Rr = null,
            mi = new Map,
            gi = new Map,
            br = [],
            z2 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

        function om(e, t) {
            switch (e) {
                case "focusin":
                case "focusout":
                    Or = null;
                    break;
                case "dragenter":
                case "dragleave":
                    Tr = null;
                    break;
                case "mouseover":
                case "mouseout":
                    Rr = null;
                    break;
                case "pointerover":
                case "pointerout":
                    mi.delete(t.pointerId);
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                    gi.delete(t.pointerId)
            }
        }

        function Vo(e, t, r, n, o, i) {
            return e === null || e.nativeEvent !== i ? (e = {
                blockedOn: t,
                domEventName: r,
                eventSystemFlags: n,
                nativeEvent: i,
                targetContainers: [o]
            }, t !== null && (t = Ai(t), t !== null && nf(t)), e) : (e.eventSystemFlags |= n, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e)
        }

        function $2(e, t, r, n, o) {
            switch (t) {
                case "focusin":
                    return Or = Vo(Or, e, t, r, n, o), !0;
                case "dragenter":
                    return Tr = Vo(Tr, e, t, r, n, o), !0;
                case "mouseover":
                    return Rr = Vo(Rr, e, t, r, n, o), !0;
                case "pointerover":
                    var i = o.pointerId;
                    return mi.set(i, Vo(mi.get(i) || null, e, t, r, n, o)), !0;
                case "gotpointercapture":
                    return i = o.pointerId, gi.set(i, Vo(gi.get(i) || null, e, t, r, n, o)), !0
            }
            return !1
        }

        function Ag(e) {
            var t = sn(e.target);
            if (t !== null) {
                var r = yn(t);
                if (r !== null) {
                    if (t = r.tag, t === 13) {
                        if (t = yg(r), t !== null) {
                            e.blockedOn = t, Rg(e.priority, function() {
                                Og(r)
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

        function Ua(e) {
            if (e.blockedOn !== null) return !1;
            for (var t = e.targetContainers; 0 < t.length;) {
                var r = Sc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
                if (r === null) {
                    r = e.nativeEvent;
                    var n = new r.constructor(r.type, r);
                    mc = n, r.target.dispatchEvent(n), mc = null
                } else return t = Ai(r), t !== null && nf(t), e.blockedOn = r, !1;
                t.shift()
            }
            return !0
        }

        function im(e, t, r) {
            Ua(e) && r.delete(t)
        }

        function H2() {
            xc = !1, Or !== null && Ua(Or) && (Or = null), Tr !== null && Ua(Tr) && (Tr = null), Rr !== null && Ua(Rr) && (Rr = null), mi.forEach(im), gi.forEach(im)
        }

        function Ko(e, t) {
            e.blockedOn === t && (e.blockedOn = null, xc || (xc = !0, at.unstable_scheduleCallback(at.unstable_NormalPriority, H2)))
        }

        function hi(e) {
            function t(o) {
                return Ko(o, e)
            }
            if (0 < Ra.length) {
                Ko(Ra[0], e);
                for (var r = 1; r < Ra.length; r++) {
                    var n = Ra[r];
                    n.blockedOn === e && (n.blockedOn = null)
                }
            }
            for (Or !== null && Ko(Or, e), Tr !== null && Ko(Tr, e), Rr !== null && Ko(Rr, e), mi.forEach(t), gi.forEach(t), r = 0; r < br.length; r++) n = br[r], n.blockedOn === e && (n.blockedOn = null);
            for (; 0 < br.length && (r = br[0], r.blockedOn === null);) Ag(r), r.blockedOn === null && br.shift()
        }
        var ro = ur.ReactCurrentBatchConfig,
            os = !0;

        function B2(e, t, r, n) {
            var o = X,
                i = ro.transition;
            ro.transition = null;
            try {
                X = 1, of(e, t, r, n)
            } finally {
                X = o, ro.transition = i
            }
        }

        function U2(e, t, r, n) {
            var o = X,
                i = ro.transition;
            ro.transition = null;
            try {
                X = 4, of(e, t, r, n)
            } finally {
                X = o, ro.transition = i
            }
        }

        function of(e, t, r, n) {
            if (os) {
                var o = Sc(e, t, r, n);
                if (o === null) Vu(e, t, n, is, r), om(e, n);
                else if ($2(o, e, t, r, n)) n.stopPropagation();
                else if (om(e, n), t & 4 && -1 < z2.indexOf(e)) {
                    for (; o !== null;) {
                        var i = Ai(o);
                        if (i !== null && Pg(i), i = Sc(e, t, r, n), i === null && Vu(e, t, n, is, r), i === o) break;
                        o = i
                    }
                    o !== null && n.stopPropagation()
                } else Vu(e, t, n, null, r)
            }
        }
        var is = null;

        function Sc(e, t, r, n) {
            if (is = null, e = ef(n), e = sn(e), e !== null)
                if (t = yn(e), t === null) e = null;
                else if (r = t.tag, r === 13) {
                if (e = yg(t), e !== null) return e;
                e = null
            } else if (r === 3) {
                if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
                e = null
            } else t !== e && (e = null);
            return is = e, null
        }

        function _g(e) {
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
                    switch (A2()) {
                        case tf:
                            return 1;
                        case wg:
                            return 4;
                        case rs:
                        case _2:
                            return 16;
                        case bg:
                            return 536870912;
                        default:
                            return 16
                    }
                default:
                    return 16
            }
        }
        var kr = null,
            af = null,
            Wa = null;

        function Ng() {
            if (Wa) return Wa;
            var e, t = af,
                r = t.length,
                n, o = "value" in kr ? kr.value : kr.textContent,
                i = o.length;
            for (e = 0; e < r && t[e] === o[e]; e++);
            var a = r - e;
            for (n = 1; n <= a && t[r - n] === o[i - n]; n++);
            return Wa = o.slice(e, 1 < n ? 1 - n : void 0)
        }

        function Va(e) {
            var t = e.keyCode;
            return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
        }

        function Aa() {
            return !0
        }

        function am() {
            return !1
        }

        function st(e) {
            function t(r, n, o, i, a) {
                this._reactName = r, this._targetInst = o, this.type = n, this.nativeEvent = i, this.target = a, this.currentTarget = null;
                for (var s in e) e.hasOwnProperty(s) && (r = e[s], this[s] = r ? r(i) : i[s]);
                return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Aa : am, this.isPropagationStopped = am, this
            }
            return ue(t.prototype, {
                preventDefault: function() {
                    this.defaultPrevented = !0;
                    var r = this.nativeEvent;
                    r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = !1), this.isDefaultPrevented = Aa)
                },
                stopPropagation: function() {
                    var r = this.nativeEvent;
                    r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0), this.isPropagationStopped = Aa)
                },
                persist: function() {},
                isPersistent: Aa
            }), t
        }
        var po = {
                eventPhase: 0,
                bubbles: 0,
                cancelable: 0,
                timeStamp: function(e) {
                    return e.timeStamp || Date.now()
                },
                defaultPrevented: 0,
                isTrusted: 0
            },
            sf = st(po),
            Ri = ue({}, po, {
                view: 0,
                detail: 0
            }),
            W2 = st(Ri),
            zu, $u, Go, Es = ue({}, Ri, {
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
                getModifierState: lf,
                button: 0,
                buttons: 0,
                relatedTarget: function(e) {
                    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
                },
                movementX: function(e) {
                    return "movementX" in e ? e.movementX : (e !== Go && (Go && e.type === "mousemove" ? (zu = e.screenX - Go.screenX, $u = e.screenY - Go.screenY) : $u = zu = 0, Go = e), zu)
                },
                movementY: function(e) {
                    return "movementY" in e ? e.movementY : $u
                }
            }),
            sm = st(Es),
            V2 = ue({}, Es, {
                dataTransfer: 0
            }),
            K2 = st(V2),
            G2 = ue({}, Ri, {
                relatedTarget: 0
            }),
            Hu = st(G2),
            Q2 = ue({}, po, {
                animationName: 0,
                elapsedTime: 0,
                pseudoElement: 0
            }),
            X2 = st(Q2),
            Y2 = ue({}, po, {
                clipboardData: function(e) {
                    return "clipboardData" in e ? e.clipboardData : window.clipboardData
                }
            }),
            Z2 = st(Y2),
            q2 = ue({}, po, {
                data: 0
            }),
            lm = st(q2),
            J2 = {
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
            e5 = {
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
            t5 = {
                Alt: "altKey",
                Control: "ctrlKey",
                Meta: "metaKey",
                Shift: "shiftKey"
            };

        function r5(e) {
            var t = this.nativeEvent;
            return t.getModifierState ? t.getModifierState(e) : (e = t5[e]) ? !!t[e] : !1
        }

        function lf() {
            return r5
        }
        var n5 = ue({}, Ri, {
                key: function(e) {
                    if (e.key) {
                        var t = J2[e.key] || e.key;
                        if (t !== "Unidentified") return t
                    }
                    return e.type === "keypress" ? (e = Va(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? e5[e.keyCode] || "Unidentified" : ""
                },
                code: 0,
                location: 0,
                ctrlKey: 0,
                shiftKey: 0,
                altKey: 0,
                metaKey: 0,
                repeat: 0,
                locale: 0,
                getModifierState: lf,
                charCode: function(e) {
                    return e.type === "keypress" ? Va(e) : 0
                },
                keyCode: function(e) {
                    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
                },
                which: function(e) {
                    return e.type === "keypress" ? Va(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
                }
            }),
            o5 = st(n5),
            i5 = ue({}, Es, {
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
            um = st(i5),
            a5 = ue({}, Ri, {
                touches: 0,
                targetTouches: 0,
                changedTouches: 0,
                altKey: 0,
                metaKey: 0,
                ctrlKey: 0,
                shiftKey: 0,
                getModifierState: lf
            }),
            s5 = st(a5),
            l5 = ue({}, po, {
                propertyName: 0,
                elapsedTime: 0,
                pseudoElement: 0
            }),
            u5 = st(l5),
            c5 = ue({}, Es, {
                deltaX: function(e) {
                    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
                },
                deltaY: function(e) {
                    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
                },
                deltaZ: 0,
                deltaMode: 0
            }),
            f5 = st(c5),
            d5 = [9, 13, 27, 32],
            uf = ir && "CompositionEvent" in window,
            oi = null;
        ir && "documentMode" in document && (oi = document.documentMode);
        var p5 = ir && "TextEvent" in window && !oi,
            Lg = ir && (!uf || oi && 8 < oi && 11 >= oi),
            cm = String.fromCharCode(32),
            fm = !1;

        function jg(e, t) {
            switch (e) {
                case "keyup":
                    return d5.indexOf(t.keyCode) !== -1;
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

        function Mg(e) {
            return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
        }
        var Un = !1;

        function m5(e, t) {
            switch (e) {
                case "compositionend":
                    return Mg(t);
                case "keypress":
                    return t.which !== 32 ? null : (fm = !0, cm);
                case "textInput":
                    return e = t.data, e === cm && fm ? null : e;
                default:
                    return null
            }
        }

        function g5(e, t) {
            if (Un) return e === "compositionend" || !uf && jg(e, t) ? (e = Ng(), Wa = af = kr = null, Un = !1, e) : null;
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
                    return Lg && t.locale !== "ko" ? null : t.data;
                default:
                    return null
            }
        }
        var h5 = {
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

        function dm(e) {
            var t = e && e.nodeName && e.nodeName.toLowerCase();
            return t === "input" ? !!h5[e.type] : t === "textarea"
        }

        function Ig(e, t, r, n) {
            pg(n), t = as(t, "onChange"), 0 < t.length && (r = new sf("onChange", "change", null, r, n), e.push({
                event: r,
                listeners: t
            }))
        }
        var ii = null,
            vi = null;

        function v5(e) {
            Gg(e, 0)
        }

        function ks(e) {
            var t = Kn(e);
            if (ag(t)) return e
        }

        function y5(e, t) {
            if (e === "change") return t
        }
        var Dg = !1;
        ir && (ir ? (Na = "oninput" in document, Na || (Bu = document.createElement("div"), Bu.setAttribute("oninput", "return;"), Na = typeof Bu.oninput == "function"), _a = Na) : _a = !1, Dg = _a && (!document.documentMode || 9 < document.documentMode));
        var _a, Na, Bu;

        function pm() {
            ii && (ii.detachEvent("onpropertychange", Fg), vi = ii = null)
        }

        function Fg(e) {
            if (e.propertyName === "value" && ks(vi)) {
                var t = [];
                Ig(t, vi, e, ef(e)), vg(v5, t)
            }
        }

        function x5(e, t, r) {
            e === "focusin" ? (pm(), ii = t, vi = r, ii.attachEvent("onpropertychange", Fg)) : e === "focusout" && pm()
        }

        function S5(e) {
            if (e === "selectionchange" || e === "keyup" || e === "keydown") return ks(vi)
        }

        function C5(e, t) {
            if (e === "click") return ks(t)
        }

        function w5(e, t) {
            if (e === "input" || e === "change") return ks(t)
        }

        function b5(e, t) {
            return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
        }
        var Lt = typeof Object.is == "function" ? Object.is : b5;

        function yi(e, t) {
            if (Lt(e, t)) return !0;
            if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
            var r = Object.keys(e),
                n = Object.keys(t);
            if (r.length !== n.length) return !1;
            for (n = 0; n < r.length; n++) {
                var o = r[n];
                if (!rc.call(t, o) || !Lt(e[o], t[o])) return !1
            }
            return !0
        }

        function mm(e) {
            for (; e && e.firstChild;) e = e.firstChild;
            return e
        }

        function gm(e, t) {
            var r = mm(e);
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
                r = mm(r)
            }
        }

        function zg(e, t) {
            return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? zg(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
        }

        function $g() {
            for (var e = window, t = Ja(); t instanceof e.HTMLIFrameElement;) {
                try {
                    var r = typeof t.contentWindow.location.href == "string"
                } catch {
                    r = !1
                }
                if (r) e = t.contentWindow;
                else break;
                t = Ja(e.document)
            }
            return t
        }

        function cf(e) {
            var t = e && e.nodeName && e.nodeName.toLowerCase();
            return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
        }

        function E5(e) {
            var t = $g(),
                r = e.focusedElem,
                n = e.selectionRange;
            if (t !== r && r && r.ownerDocument && zg(r.ownerDocument.documentElement, r)) {
                if (n !== null && cf(r)) {
                    if (t = n.start, e = n.end, e === void 0 && (e = t), "selectionStart" in r) r.selectionStart = t, r.selectionEnd = Math.min(e, r.value.length);
                    else if (e = (t = r.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                        e = e.getSelection();
                        var o = r.textContent.length,
                            i = Math.min(n.start, o);
                        n = n.end === void 0 ? i : Math.min(n.end, o), !e.extend && i > n && (o = n, n = i, i = o), o = gm(r, i);
                        var a = gm(r, n);
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
        var k5 = ir && "documentMode" in document && 11 >= document.documentMode,
            Wn = null,
            Cc = null,
            ai = null,
            wc = !1;

        function hm(e, t, r) {
            var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
            wc || Wn == null || Wn !== Ja(n) || (n = Wn, "selectionStart" in n && cf(n) ? n = {
                start: n.selectionStart,
                end: n.selectionEnd
            } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = {
                anchorNode: n.anchorNode,
                anchorOffset: n.anchorOffset,
                focusNode: n.focusNode,
                focusOffset: n.focusOffset
            }), ai && yi(ai, n) || (ai = n, n = as(Cc, "onSelect"), 0 < n.length && (t = new sf("onSelect", "select", null, t, r), e.push({
                event: t,
                listeners: n
            }), t.target = Wn)))
        }

        function La(e, t) {
            var r = {};
            return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit" + e] = "webkit" + t, r["Moz" + e] = "moz" + t, r
        }
        var Vn = {
                animationend: La("Animation", "AnimationEnd"),
                animationiteration: La("Animation", "AnimationIteration"),
                animationstart: La("Animation", "AnimationStart"),
                transitionend: La("Transition", "TransitionEnd")
            },
            Uu = {},
            Hg = {};
        ir && (Hg = document.createElement("div").style, "AnimationEvent" in window || (delete Vn.animationend.animation, delete Vn.animationiteration.animation, delete Vn.animationstart.animation), "TransitionEvent" in window || delete Vn.transitionend.transition);

        function Ps(e) {
            if (Uu[e]) return Uu[e];
            if (!Vn[e]) return e;
            var t = Vn[e],
                r;
            for (r in t)
                if (t.hasOwnProperty(r) && r in Hg) return Uu[e] = t[r];
            return e
        }
        var Bg = Ps("animationend"),
            Ug = Ps("animationiteration"),
            Wg = Ps("animationstart"),
            Vg = Ps("transitionend"),
            Kg = new Map,
            vm = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

        function Dr(e, t) {
            Kg.set(e, t), vn(t, [e])
        }
        for (ja = 0; ja < vm.length; ja++) Ma = vm[ja], ym = Ma.toLowerCase(), xm = Ma[0].toUpperCase() + Ma.slice(1), Dr(ym, "on" + xm);
        var Ma, ym, xm, ja;
        Dr(Bg, "onAnimationEnd");
        Dr(Ug, "onAnimationIteration");
        Dr(Wg, "onAnimationStart");
        Dr("dblclick", "onDoubleClick");
        Dr("focusin", "onFocus");
        Dr("focusout", "onBlur");
        Dr(Vg, "onTransitionEnd");
        io("onMouseEnter", ["mouseout", "mouseover"]);
        io("onMouseLeave", ["mouseout", "mouseover"]);
        io("onPointerEnter", ["pointerout", "pointerover"]);
        io("onPointerLeave", ["pointerout", "pointerover"]);
        vn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
        vn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
        vn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
        vn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
        vn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
        vn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
        var ti = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
            P5 = new Set("cancel close invalid load scroll toggle".split(" ").concat(ti));

        function Sm(e, t, r) {
            var n = e.type || "unknown-event";
            e.currentTarget = r, P2(n, t, void 0, e), e.currentTarget = null
        }

        function Gg(e, t) {
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
                            Sm(o, s, u), i = l
                        } else
                            for (a = 0; a < n.length; a++) {
                                if (s = n[a], l = s.instance, u = s.currentTarget, s = s.listener, l !== i && o.isPropagationStopped()) break e;
                                Sm(o, s, u), i = l
                            }
                }
            }
            if (ts) throw e = vc, ts = !1, vc = null, e
        }

        function ee(e, t) {
            var r = t[Oc];
            r === void 0 && (r = t[Oc] = new Set);
            var n = e + "__bubble";
            r.has(n) || (Qg(t, e, 2, !1), r.add(n))
        }

        function Wu(e, t, r) {
            var n = 0;
            t && (n |= 4), Qg(r, e, n, t)
        }
        var Ia = "_reactListening" + Math.random().toString(36).slice(2);

        function xi(e) {
            if (!e[Ia]) {
                e[Ia] = !0, tg.forEach(function(r) {
                    r !== "selectionchange" && (P5.has(r) || Wu(r, !1, e), Wu(r, !0, e))
                });
                var t = e.nodeType === 9 ? e : e.ownerDocument;
                t === null || t[Ia] || (t[Ia] = !0, Wu("selectionchange", !1, t))
            }
        }

        function Qg(e, t, r, n) {
            switch (_g(t)) {
                case 1:
                    var o = B2;
                    break;
                case 4:
                    o = U2;
                    break;
                default:
                    o = of
            }
            r = o.bind(null, t, r, e), o = void 0, !hc || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), n ? o !== void 0 ? e.addEventListener(t, r, {
                capture: !0,
                passive: o
            }) : e.addEventListener(t, r, !0) : o !== void 0 ? e.addEventListener(t, r, {
                passive: o
            }) : e.addEventListener(t, r, !1)
        }

        function Vu(e, t, r, n, o) {
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
                        if (a = sn(s), a === null) return;
                        if (l = a.tag, l === 5 || l === 6) {
                            n = i = a;
                            continue e
                        }
                        s = s.parentNode
                    }
                }
                n = n.return
            }
            vg(function() {
                var u = i,
                    f = ef(r),
                    c = [];
                e: {
                    var p = Kg.get(e);
                    if (p !== void 0) {
                        var g = sf,
                            v = e;
                        switch (e) {
                            case "keypress":
                                if (Va(r) === 0) break e;
                            case "keydown":
                            case "keyup":
                                g = o5;
                                break;
                            case "focusin":
                                v = "focus", g = Hu;
                                break;
                            case "focusout":
                                v = "blur", g = Hu;
                                break;
                            case "beforeblur":
                            case "afterblur":
                                g = Hu;
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
                                g = sm;
                                break;
                            case "drag":
                            case "dragend":
                            case "dragenter":
                            case "dragexit":
                            case "dragleave":
                            case "dragover":
                            case "dragstart":
                            case "drop":
                                g = K2;
                                break;
                            case "touchcancel":
                            case "touchend":
                            case "touchmove":
                            case "touchstart":
                                g = s5;
                                break;
                            case Bg:
                            case Ug:
                            case Wg:
                                g = X2;
                                break;
                            case Vg:
                                g = u5;
                                break;
                            case "scroll":
                                g = W2;
                                break;
                            case "wheel":
                                g = f5;
                                break;
                            case "copy":
                            case "cut":
                            case "paste":
                                g = Z2;
                                break;
                            case "gotpointercapture":
                            case "lostpointercapture":
                            case "pointercancel":
                            case "pointerdown":
                            case "pointermove":
                            case "pointerout":
                            case "pointerover":
                            case "pointerup":
                                g = um
                        }
                        var x = (t & 4) !== 0,
                            P = !x && e === "scroll",
                            m = x ? p !== null ? p + "Capture" : null : p;
                        x = [];
                        for (var d = u, h; d !== null;) {
                            h = d;
                            var y = h.stateNode;
                            if (h.tag === 5 && y !== null && (h = y, m !== null && (y = pi(d, m), y != null && x.push(Si(d, y, h)))), P) break;
                            d = d.return
                        }
                        0 < x.length && (p = new g(p, v, null, r, f), c.push({
                            event: p,
                            listeners: x
                        }))
                    }
                }
                if (!(t & 7)) {
                    e: {
                        if (p = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", p && r !== mc && (v = r.relatedTarget || r.fromElement) && (sn(v) || v[ar])) break e;
                        if ((g || p) && (p = f.window === f ? f : (p = f.ownerDocument) ? p.defaultView || p.parentWindow : window, g ? (v = r.relatedTarget || r.toElement, g = u, v = v ? sn(v) : null, v !== null && (P = yn(v), v !== P || v.tag !== 5 && v.tag !== 6) && (v = null)) : (g = null, v = u), g !== v)) {
                            if (x = sm, y = "onMouseLeave", m = "onMouseEnter", d = "mouse", (e === "pointerout" || e === "pointerover") && (x = um, y = "onPointerLeave", m = "onPointerEnter", d = "pointer"), P = g == null ? p : Kn(g), h = v == null ? p : Kn(v), p = new x(y, d + "leave", g, r, f), p.target = P, p.relatedTarget = h, y = null, sn(f) === u && (x = new x(m, d + "enter", v, r, f), x.target = h, x.relatedTarget = P, y = x), P = y, g && v) t: {
                                for (x = g, m = v, d = 0, h = x; h; h = $n(h)) d++;
                                for (h = 0, y = m; y; y = $n(y)) h++;
                                for (; 0 < d - h;) x = $n(x),
                                d--;
                                for (; 0 < h - d;) m = $n(m),
                                h--;
                                for (; d--;) {
                                    if (x === m || m !== null && x === m.alternate) break t;
                                    x = $n(x), m = $n(m)
                                }
                                x = null
                            }
                            else x = null;
                            g !== null && Cm(c, p, g, x, !1), v !== null && P !== null && Cm(c, P, v, x, !0)
                        }
                    }
                    e: {
                        if (p = u ? Kn(u) : window, g = p.nodeName && p.nodeName.toLowerCase(), g === "select" || g === "input" && p.type === "file") var S = y5;
                        else if (dm(p))
                            if (Dg) S = w5;
                            else {
                                S = S5;
                                var w = x5
                            }
                        else(g = p.nodeName) && g.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (S = C5);
                        if (S && (S = S(e, u))) {
                            Ig(c, S, r, f);
                            break e
                        }
                        w && w(e, p, u),
                        e === "focusout" && (w = p._wrapperState) && w.controlled && p.type === "number" && uc(p, "number", p.value)
                    }
                    switch (w = u ? Kn(u) : window, e) {
                        case "focusin":
                            (dm(w) || w.contentEditable === "true") && (Wn = w, Cc = u, ai = null);
                            break;
                        case "focusout":
                            ai = Cc = Wn = null;
                            break;
                        case "mousedown":
                            wc = !0;
                            break;
                        case "contextmenu":
                        case "mouseup":
                        case "dragend":
                            wc = !1, hm(c, r, f);
                            break;
                        case "selectionchange":
                            if (k5) break;
                        case "keydown":
                        case "keyup":
                            hm(c, r, f)
                    }
                    var C;
                    if (uf) e: {
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
                    else Un ? jg(e, r) && (O = "onCompositionEnd") : e === "keydown" && r.keyCode === 229 && (O = "onCompositionStart");O && (Lg && r.locale !== "ko" && (Un || O !== "onCompositionStart" ? O === "onCompositionEnd" && Un && (C = Ng()) : (kr = f, af = "value" in kr ? kr.value : kr.textContent, Un = !0)), w = as(u, O), 0 < w.length && (O = new lm(O, e, null, r, f), c.push({
                        event: O,
                        listeners: w
                    }), C ? O.data = C : (C = Mg(r), C !== null && (O.data = C)))),
                    (C = p5 ? m5(e, r) : g5(e, r)) && (u = as(u, "onBeforeInput"), 0 < u.length && (f = new lm("onBeforeInput", "beforeinput", null, r, f), c.push({
                        event: f,
                        listeners: u
                    }), f.data = C))
                }
                Gg(c, t)
            })
        }

        function Si(e, t, r) {
            return {
                instance: e,
                listener: t,
                currentTarget: r
            }
        }

        function as(e, t) {
            for (var r = t + "Capture", n = []; e !== null;) {
                var o = e,
                    i = o.stateNode;
                o.tag === 5 && i !== null && (o = i, i = pi(e, r), i != null && n.unshift(Si(e, i, o)), i = pi(e, t), i != null && n.push(Si(e, i, o))), e = e.return
            }
            return n
        }

        function $n(e) {
            if (e === null) return null;
            do e = e.return; while (e && e.tag !== 5);
            return e || null
        }

        function Cm(e, t, r, n, o) {
            for (var i = t._reactName, a = []; r !== null && r !== n;) {
                var s = r,
                    l = s.alternate,
                    u = s.stateNode;
                if (l !== null && l === n) break;
                s.tag === 5 && u !== null && (s = u, o ? (l = pi(r, i), l != null && a.unshift(Si(r, l, s))) : o || (l = pi(r, i), l != null && a.push(Si(r, l, s)))), r = r.return
            }
            a.length !== 0 && e.push({
                event: t,
                listeners: a
            })
        }
        var O5 = /\r\n?/g,
            T5 = /\u0000|\uFFFD/g;

        function wm(e) {
            return (typeof e == "string" ? e : "" + e).replace(O5, `
`).replace(T5, "")
        }

        function Da(e, t, r) {
            if (t = wm(t), wm(e) !== t && r) throw Error(N(425))
        }

        function ss() {}
        var bc = null,
            Ec = null;

        function kc(e, t) {
            return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
        }
        var Pc = typeof setTimeout == "function" ? setTimeout : void 0,
            R5 = typeof clearTimeout == "function" ? clearTimeout : void 0,
            bm = typeof Promise == "function" ? Promise : void 0,
            A5 = typeof queueMicrotask == "function" ? queueMicrotask : typeof bm < "u" ? function(e) {
                return bm.resolve(null).then(e).catch(_5)
            } : Pc;

        function _5(e) {
            setTimeout(function() {
                throw e
            })
        }

        function Ku(e, t) {
            var r = t,
                n = 0;
            do {
                var o = r.nextSibling;
                if (e.removeChild(r), o && o.nodeType === 8)
                    if (r = o.data, r === "/$") {
                        if (n === 0) {
                            e.removeChild(o), hi(t);
                            return
                        }
                        n--
                    } else r !== "$" && r !== "$?" && r !== "$!" || n++;
                r = o
            } while (r);
            hi(t)
        }

        function Ar(e) {
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

        function Em(e) {
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
        var mo = Math.random().toString(36).slice(2),
            Ut = "__reactFiber$" + mo,
            Ci = "__reactProps$" + mo,
            ar = "__reactContainer$" + mo,
            Oc = "__reactEvents$" + mo,
            N5 = "__reactListeners$" + mo,
            L5 = "__reactHandles$" + mo;

        function sn(e) {
            var t = e[Ut];
            if (t) return t;
            for (var r = e.parentNode; r;) {
                if (t = r[ar] || r[Ut]) {
                    if (r = t.alternate, t.child !== null || r !== null && r.child !== null)
                        for (e = Em(e); e !== null;) {
                            if (r = e[Ut]) return r;
                            e = Em(e)
                        }
                    return t
                }
                e = r, r = e.parentNode
            }
            return null
        }

        function Ai(e) {
            return e = e[Ut] || e[ar], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
        }

        function Kn(e) {
            if (e.tag === 5 || e.tag === 6) return e.stateNode;
            throw Error(N(33))
        }

        function Os(e) {
            return e[Ci] || null
        }
        var Tc = [],
            Gn = -1;

        function Fr(e) {
            return {
                current: e
            }
        }

        function te(e) {
            0 > Gn || (e.current = Tc[Gn], Tc[Gn] = null, Gn--)
        }

        function J(e, t) {
            Gn++, Tc[Gn] = e.current, e.current = t
        }
        var Ir = {},
            Ie = Fr(Ir),
            Ye = Fr(!1),
            dn = Ir;

        function ao(e, t) {
            var r = e.type.contextTypes;
            if (!r) return Ir;
            var n = e.stateNode;
            if (n && n.__reactInternalMemoizedUnmaskedChildContext === t) return n.__reactInternalMemoizedMaskedChildContext;
            var o = {},
                i;
            for (i in r) o[i] = t[i];
            return n && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o
        }

        function Ze(e) {
            return e = e.childContextTypes, e != null
        }

        function ls() {
            te(Ye), te(Ie)
        }

        function km(e, t, r) {
            if (Ie.current !== Ir) throw Error(N(168));
            J(Ie, t), J(Ye, r)
        }

        function Xg(e, t, r) {
            var n = e.stateNode;
            if (t = t.childContextTypes, typeof n.getChildContext != "function") return r;
            n = n.getChildContext();
            for (var o in n)
                if (!(o in t)) throw Error(N(108, x2(e) || "Unknown", o));
            return ue({}, r, n)
        }

        function us(e) {
            return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ir, dn = Ie.current, J(Ie, e), J(Ye, Ye.current), !0
        }

        function Pm(e, t, r) {
            var n = e.stateNode;
            if (!n) throw Error(N(169));
            r ? (e = Xg(e, t, dn), n.__reactInternalMemoizedMergedChildContext = e, te(Ye), te(Ie), J(Ie, e)) : te(Ye), J(Ye, r)
        }
        var tr = null,
            Ts = !1,
            Gu = !1;

        function Yg(e) {
            tr === null ? tr = [e] : tr.push(e)
        }

        function j5(e) {
            Ts = !0, Yg(e)
        }

        function zr() {
            if (!Gu && tr !== null) {
                Gu = !0;
                var e = 0,
                    t = X;
                try {
                    var r = tr;
                    for (X = 1; e < r.length; e++) {
                        var n = r[e];
                        do n = n(!0); while (n !== null)
                    }
                    tr = null, Ts = !1
                } catch (o) {
                    throw tr !== null && (tr = tr.slice(e + 1)), Cg(tf, zr), o
                } finally {
                    X = t, Gu = !1
                }
            }
            return null
        }
        var Qn = [],
            Xn = 0,
            cs = null,
            fs = 0,
            mt = [],
            gt = 0,
            pn = null,
            rr = 1,
            nr = "";

        function on(e, t) {
            Qn[Xn++] = fs, Qn[Xn++] = cs, cs = e, fs = t
        }

        function Zg(e, t, r) {
            mt[gt++] = rr, mt[gt++] = nr, mt[gt++] = pn, pn = e;
            var n = rr;
            e = nr;
            var o = 32 - _t(n) - 1;
            n &= ~(1 << o), r += 1;
            var i = 32 - _t(t) + o;
            if (30 < i) {
                var a = o - o % 5;
                i = (n & (1 << a) - 1).toString(32), n >>= a, o -= a, rr = 1 << 32 - _t(t) + o | r << o | n, nr = i + e
            } else rr = 1 << i | r << o | n, nr = e
        }

        function ff(e) {
            e.return !== null && (on(e, 1), Zg(e, 1, 0))
        }

        function df(e) {
            for (; e === cs;) cs = Qn[--Xn], Qn[Xn] = null, fs = Qn[--Xn], Qn[Xn] = null;
            for (; e === pn;) pn = mt[--gt], mt[gt] = null, nr = mt[--gt], mt[gt] = null, rr = mt[--gt], mt[gt] = null
        }
        var it = null,
            ot = null,
            ie = !1,
            At = null;

        function qg(e, t) {
            var r = ht(5, null, null, 0);
            r.elementType = "DELETED", r.stateNode = t, r.return = e, t = e.deletions, t === null ? (e.deletions = [r], e.flags |= 16) : t.push(r)
        }

        function Om(e, t) {
            switch (e.tag) {
                case 5:
                    var r = e.type;
                    return t = t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, it = e, ot = Ar(t.firstChild), !0) : !1;
                case 6:
                    return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, it = e, ot = null, !0) : !1;
                case 13:
                    return t = t.nodeType !== 8 ? null : t, t !== null ? (r = pn !== null ? {
                        id: rr,
                        overflow: nr
                    } : null, e.memoizedState = {
                        dehydrated: t,
                        treeContext: r,
                        retryLane: 1073741824
                    }, r = ht(18, null, null, 0), r.stateNode = t, r.return = e, e.child = r, it = e, ot = null, !0) : !1;
                default:
                    return !1
            }
        }

        function Rc(e) {
            return (e.mode & 1) !== 0 && (e.flags & 128) === 0
        }

        function Ac(e) {
            if (ie) {
                var t = ot;
                if (t) {
                    var r = t;
                    if (!Om(e, t)) {
                        if (Rc(e)) throw Error(N(418));
                        t = Ar(r.nextSibling);
                        var n = it;
                        t && Om(e, t) ? qg(n, r) : (e.flags = e.flags & -4097 | 2, ie = !1, it = e)
                    }
                } else {
                    if (Rc(e)) throw Error(N(418));
                    e.flags = e.flags & -4097 | 2, ie = !1, it = e
                }
            }
        }

        function Tm(e) {
            for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
            it = e
        }

        function Fa(e) {
            if (e !== it) return !1;
            if (!ie) return Tm(e), ie = !0, !1;
            var t;
            if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !kc(e.type, e.memoizedProps)), t && (t = ot)) {
                if (Rc(e)) throw Jg(), Error(N(418));
                for (; t;) qg(e, t), t = Ar(t.nextSibling)
            }
            if (Tm(e), e.tag === 13) {
                if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(N(317));
                e: {
                    for (e = e.nextSibling, t = 0; e;) {
                        if (e.nodeType === 8) {
                            var r = e.data;
                            if (r === "/$") {
                                if (t === 0) {
                                    ot = Ar(e.nextSibling);
                                    break e
                                }
                                t--
                            } else r !== "$" && r !== "$!" && r !== "$?" || t++
                        }
                        e = e.nextSibling
                    }
                    ot = null
                }
            } else ot = it ? Ar(e.stateNode.nextSibling) : null;
            return !0
        }

        function Jg() {
            for (var e = ot; e;) e = Ar(e.nextSibling)
        }

        function so() {
            ot = it = null, ie = !1
        }

        function pf(e) {
            At === null ? At = [e] : At.push(e)
        }
        var M5 = ur.ReactCurrentBatchConfig;

        function Tt(e, t) {
            if (e && e.defaultProps) {
                t = ue({}, t), e = e.defaultProps;
                for (var r in e) t[r] === void 0 && (t[r] = e[r]);
                return t
            }
            return t
        }
        var ds = Fr(null),
            ps = null,
            Yn = null,
            mf = null;

        function gf() {
            mf = Yn = ps = null
        }

        function hf(e) {
            var t = ds.current;
            te(ds), e._currentValue = t
        }

        function _c(e, t, r) {
            for (; e !== null;) {
                var n = e.alternate;
                if ((e.childLanes & t) !== t ? (e.childLanes |= t, n !== null && (n.childLanes |= t)) : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t), e === r) break;
                e = e.return
            }
        }

        function no(e, t) {
            ps = e, mf = Yn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Xe = !0), e.firstContext = null)
        }

        function yt(e) {
            var t = e._currentValue;
            if (mf !== e)
                if (e = {
                        context: e,
                        memoizedValue: t,
                        next: null
                    }, Yn === null) {
                    if (ps === null) throw Error(N(308));
                    Yn = e, ps.dependencies = {
                        lanes: 0,
                        firstContext: e
                    }
                } else Yn = Yn.next = e;
            return t
        }
        var ln = null;

        function vf(e) {
            ln === null ? ln = [e] : ln.push(e)
        }

        function e1(e, t, r, n) {
            var o = t.interleaved;
            return o === null ? (r.next = r, vf(t)) : (r.next = o.next, o.next = r), t.interleaved = r, sr(e, n)
        }

        function sr(e, t) {
            e.lanes |= t;
            var r = e.alternate;
            for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null;) e.childLanes |= t, r = e.alternate, r !== null && (r.childLanes |= t), r = e, e = e.return;
            return r.tag === 3 ? r.stateNode : null
        }
        var wr = !1;

        function yf(e) {
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

        function t1(e, t) {
            e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects
            })
        }

        function or(e, t) {
            return {
                eventTime: e,
                lane: t,
                tag: 0,
                payload: null,
                callback: null,
                next: null
            }
        }

        function _r(e, t, r) {
            var n = e.updateQueue;
            if (n === null) return null;
            if (n = n.shared, K & 2) {
                var o = n.pending;
                return o === null ? t.next = t : (t.next = o.next, o.next = t), n.pending = t, sr(e, r)
            }
            return o = n.interleaved, o === null ? (t.next = t, vf(n)) : (t.next = o.next, o.next = t), n.interleaved = t, sr(e, r)
        }

        function Ka(e, t, r) {
            if (t = t.updateQueue, t !== null && (t = t.shared, (r & 4194240) !== 0)) {
                var n = t.lanes;
                n &= e.pendingLanes, r |= n, t.lanes = r, rf(e, r)
            }
        }

        function Rm(e, t) {
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

        function ms(e, t, r, n) {
            var o = e.updateQueue;
            wr = !1;
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
                    var p = s.lane,
                        g = s.eventTime;
                    if ((n & p) === p) {
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
                                x = s;
                            switch (p = t, g = r, x.tag) {
                                case 1:
                                    if (v = x.payload, typeof v == "function") {
                                        c = v.call(g, c, p);
                                        break e
                                    }
                                    c = v;
                                    break e;
                                case 3:
                                    v.flags = v.flags & -65537 | 128;
                                case 0:
                                    if (v = x.payload, p = typeof v == "function" ? v.call(g, c, p) : v, p == null) break e;
                                    c = ue({}, c, p);
                                    break e;
                                case 2:
                                    wr = !0
                            }
                        }
                        s.callback !== null && s.lane !== 0 && (e.flags |= 64, p = o.effects, p === null ? o.effects = [s] : p.push(s))
                    } else g = {
                        eventTime: g,
                        lane: p,
                        tag: s.tag,
                        payload: s.payload,
                        callback: s.callback,
                        next: null
                    }, f === null ? (u = f = g, l = c) : f = f.next = g, a |= p;
                    if (s = s.next, s === null) {
                        if (s = o.shared.pending, s === null) break;
                        p = s, s = p.next, p.next = null, o.lastBaseUpdate = p, o.shared.pending = null
                    }
                } while (1);
                if (f === null && (l = c), o.baseState = l, o.firstBaseUpdate = u, o.lastBaseUpdate = f, t = o.shared.interleaved, t !== null) {
                    o = t;
                    do a |= o.lane, o = o.next; while (o !== t)
                } else i === null && (o.shared.lanes = 0);
                gn |= a, e.lanes = a, e.memoizedState = c
            }
        }

        function Am(e, t, r) {
            if (e = t.effects, t.effects = null, e !== null)
                for (t = 0; t < e.length; t++) {
                    var n = e[t],
                        o = n.callback;
                    if (o !== null) {
                        if (n.callback = null, n = r, typeof o != "function") throw Error(N(191, o));
                        o.call(n)
                    }
                }
        }
        var r1 = new eg.Component().refs;

        function Nc(e, t, r, n) {
            t = e.memoizedState, r = r(n, t), r = r == null ? t : ue({}, t, r), e.memoizedState = r, e.lanes === 0 && (e.updateQueue.baseState = r)
        }
        var Rs = {
            isMounted: function(e) {
                return (e = e._reactInternals) ? yn(e) === e : !1
            },
            enqueueSetState: function(e, t, r) {
                e = e._reactInternals;
                var n = Ue(),
                    o = Lr(e),
                    i = or(n, o);
                i.payload = t, r != null && (i.callback = r), t = _r(e, i, o), t !== null && (Nt(t, e, o, n), Ka(t, e, o))
            },
            enqueueReplaceState: function(e, t, r) {
                e = e._reactInternals;
                var n = Ue(),
                    o = Lr(e),
                    i = or(n, o);
                i.tag = 1, i.payload = t, r != null && (i.callback = r), t = _r(e, i, o), t !== null && (Nt(t, e, o, n), Ka(t, e, o))
            },
            enqueueForceUpdate: function(e, t) {
                e = e._reactInternals;
                var r = Ue(),
                    n = Lr(e),
                    o = or(r, n);
                o.tag = 2, t != null && (o.callback = t), t = _r(e, o, n), t !== null && (Nt(t, e, n, r), Ka(t, e, n))
            }
        };

        function _m(e, t, r, n, o, i, a) {
            return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(n, i, a) : t.prototype && t.prototype.isPureReactComponent ? !yi(r, n) || !yi(o, i) : !0
        }

        function n1(e, t, r) {
            var n = !1,
                o = Ir,
                i = t.contextType;
            return typeof i == "object" && i !== null ? i = yt(i) : (o = Ze(t) ? dn : Ie.current, n = t.contextTypes, i = (n = n != null) ? ao(e, o) : Ir), t = new t(r, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Rs, e.stateNode = t, t._reactInternals = e, n && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t
        }

        function Nm(e, t, r, n) {
            e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(r, n), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(r, n), t.state !== e && Rs.enqueueReplaceState(t, t.state, null)
        }

        function Lc(e, t, r, n) {
            var o = e.stateNode;
            o.props = r, o.state = e.memoizedState, o.refs = r1, yf(e);
            var i = t.contextType;
            typeof i == "object" && i !== null ? o.context = yt(i) : (i = Ze(t) ? dn : Ie.current, o.context = ao(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Nc(e, t, i, r), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Rs.enqueueReplaceState(o, o.state, null), ms(e, r, o, n), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308)
        }

        function Qo(e, t, r) {
            if (e = r.ref, e !== null && typeof e != "function" && typeof e != "object") {
                if (r._owner) {
                    if (r = r._owner, r) {
                        if (r.tag !== 1) throw Error(N(309));
                        var n = r.stateNode
                    }
                    if (!n) throw Error(N(147, e));
                    var o = n,
                        i = "" + e;
                    return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(a) {
                        var s = o.refs;
                        s === r1 && (s = o.refs = {}), a === null ? delete s[i] : s[i] = a
                    }, t._stringRef = i, t)
                }
                if (typeof e != "string") throw Error(N(284));
                if (!r._owner) throw Error(N(290, e))
            }
            return e
        }

        function za(e, t) {
            throw e = Object.prototype.toString.call(t), Error(N(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
        }

        function Lm(e) {
            var t = e._init;
            return t(e._payload)
        }

        function o1(e) {
            function t(m, d) {
                if (e) {
                    var h = m.deletions;
                    h === null ? (m.deletions = [d], m.flags |= 16) : h.push(d)
                }
            }

            function r(m, d) {
                if (!e) return null;
                for (; d !== null;) t(m, d), d = d.sibling;
                return null
            }

            function n(m, d) {
                for (m = new Map; d !== null;) d.key !== null ? m.set(d.key, d) : m.set(d.index, d), d = d.sibling;
                return m
            }

            function o(m, d) {
                return m = jr(m, d), m.index = 0, m.sibling = null, m
            }

            function i(m, d, h) {
                return m.index = h, e ? (h = m.alternate, h !== null ? (h = h.index, h < d ? (m.flags |= 2, d) : h) : (m.flags |= 2, d)) : (m.flags |= 1048576, d)
            }

            function a(m) {
                return e && m.alternate === null && (m.flags |= 2), m
            }

            function s(m, d, h, y) {
                return d === null || d.tag !== 6 ? (d = ec(h, m.mode, y), d.return = m, d) : (d = o(d, h), d.return = m, d)
            }

            function l(m, d, h, y) {
                var S = h.type;
                return S === Bn ? f(m, d, h.props.children, y, h.key) : d !== null && (d.elementType === S || typeof S == "object" && S !== null && S.$$typeof === Cr && Lm(S) === d.type) ? (y = o(d, h.props), y.ref = Qo(m, d, h), y.return = m, y) : (y = qa(h.type, h.key, h.props, null, m.mode, y), y.ref = Qo(m, d, h), y.return = m, y)
            }

            function u(m, d, h, y) {
                return d === null || d.tag !== 4 || d.stateNode.containerInfo !== h.containerInfo || d.stateNode.implementation !== h.implementation ? (d = tc(h, m.mode, y), d.return = m, d) : (d = o(d, h.children || []), d.return = m, d)
            }

            function f(m, d, h, y, S) {
                return d === null || d.tag !== 7 ? (d = fn(h, m.mode, y, S), d.return = m, d) : (d = o(d, h), d.return = m, d)
            }

            function c(m, d, h) {
                if (typeof d == "string" && d !== "" || typeof d == "number") return d = ec("" + d, m.mode, h), d.return = m, d;
                if (typeof d == "object" && d !== null) {
                    switch (d.$$typeof) {
                        case Ea:
                            return h = qa(d.type, d.key, d.props, null, m.mode, h), h.ref = Qo(m, null, d), h.return = m, h;
                        case Hn:
                            return d = tc(d, m.mode, h), d.return = m, d;
                        case Cr:
                            var y = d._init;
                            return c(m, y(d._payload), h)
                    }
                    if (Jo(d) || Wo(d)) return d = fn(d, m.mode, h, null), d.return = m, d;
                    za(m, d)
                }
                return null
            }

            function p(m, d, h, y) {
                var S = d !== null ? d.key : null;
                if (typeof h == "string" && h !== "" || typeof h == "number") return S !== null ? null : s(m, d, "" + h, y);
                if (typeof h == "object" && h !== null) {
                    switch (h.$$typeof) {
                        case Ea:
                            return h.key === S ? l(m, d, h, y) : null;
                        case Hn:
                            return h.key === S ? u(m, d, h, y) : null;
                        case Cr:
                            return S = h._init, p(m, d, S(h._payload), y)
                    }
                    if (Jo(h) || Wo(h)) return S !== null ? null : f(m, d, h, y, null);
                    za(m, h)
                }
                return null
            }

            function g(m, d, h, y, S) {
                if (typeof y == "string" && y !== "" || typeof y == "number") return m = m.get(h) || null, s(d, m, "" + y, S);
                if (typeof y == "object" && y !== null) {
                    switch (y.$$typeof) {
                        case Ea:
                            return m = m.get(y.key === null ? h : y.key) || null, l(d, m, y, S);
                        case Hn:
                            return m = m.get(y.key === null ? h : y.key) || null, u(d, m, y, S);
                        case Cr:
                            var w = y._init;
                            return g(m, d, h, w(y._payload), S)
                    }
                    if (Jo(y) || Wo(y)) return m = m.get(h) || null, f(d, m, y, S, null);
                    za(d, y)
                }
                return null
            }

            function v(m, d, h, y) {
                for (var S = null, w = null, C = d, O = d = 0, A = null; C !== null && O < h.length; O++) {
                    C.index > O ? (A = C, C = null) : A = C.sibling;
                    var k = p(m, C, h[O], y);
                    if (k === null) {
                        C === null && (C = A);
                        break
                    }
                    e && C && k.alternate === null && t(m, C), d = i(k, d, O), w === null ? S = k : w.sibling = k, w = k, C = A
                }
                if (O === h.length) return r(m, C), ie && on(m, O), S;
                if (C === null) {
                    for (; O < h.length; O++) C = c(m, h[O], y), C !== null && (d = i(C, d, O), w === null ? S = C : w.sibling = C, w = C);
                    return ie && on(m, O), S
                }
                for (C = n(m, C); O < h.length; O++) A = g(C, m, O, h[O], y), A !== null && (e && A.alternate !== null && C.delete(A.key === null ? O : A.key), d = i(A, d, O), w === null ? S = A : w.sibling = A, w = A);
                return e && C.forEach(function(L) {
                    return t(m, L)
                }), ie && on(m, O), S
            }

            function x(m, d, h, y) {
                var S = Wo(h);
                if (typeof S != "function") throw Error(N(150));
                if (h = S.call(h), h == null) throw Error(N(151));
                for (var w = S = null, C = d, O = d = 0, A = null, k = h.next(); C !== null && !k.done; O++, k = h.next()) {
                    C.index > O ? (A = C, C = null) : A = C.sibling;
                    var L = p(m, C, k.value, y);
                    if (L === null) {
                        C === null && (C = A);
                        break
                    }
                    e && C && L.alternate === null && t(m, C), d = i(L, d, O), w === null ? S = L : w.sibling = L, w = L, C = A
                }
                if (k.done) return r(m, C), ie && on(m, O), S;
                if (C === null) {
                    for (; !k.done; O++, k = h.next()) k = c(m, k.value, y), k !== null && (d = i(k, d, O), w === null ? S = k : w.sibling = k, w = k);
                    return ie && on(m, O), S
                }
                for (C = n(m, C); !k.done; O++, k = h.next()) k = g(C, m, O, k.value, y), k !== null && (e && k.alternate !== null && C.delete(k.key === null ? O : k.key), d = i(k, d, O), w === null ? S = k : w.sibling = k, w = k);
                return e && C.forEach(function(E) {
                    return t(m, E)
                }), ie && on(m, O), S
            }

            function P(m, d, h, y) {
                if (typeof h == "object" && h !== null && h.type === Bn && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) {
                    switch (h.$$typeof) {
                        case Ea:
                            e: {
                                for (var S = h.key, w = d; w !== null;) {
                                    if (w.key === S) {
                                        if (S = h.type, S === Bn) {
                                            if (w.tag === 7) {
                                                r(m, w.sibling), d = o(w, h.props.children), d.return = m, m = d;
                                                break e
                                            }
                                        } else if (w.elementType === S || typeof S == "object" && S !== null && S.$$typeof === Cr && Lm(S) === w.type) {
                                            r(m, w.sibling), d = o(w, h.props), d.ref = Qo(m, w, h), d.return = m, m = d;
                                            break e
                                        }
                                        r(m, w);
                                        break
                                    } else t(m, w);
                                    w = w.sibling
                                }
                                h.type === Bn ? (d = fn(h.props.children, m.mode, y, h.key), d.return = m, m = d) : (y = qa(h.type, h.key, h.props, null, m.mode, y), y.ref = Qo(m, d, h), y.return = m, m = y)
                            }
                            return a(m);
                        case Hn:
                            e: {
                                for (w = h.key; d !== null;) {
                                    if (d.key === w)
                                        if (d.tag === 4 && d.stateNode.containerInfo === h.containerInfo && d.stateNode.implementation === h.implementation) {
                                            r(m, d.sibling), d = o(d, h.children || []), d.return = m, m = d;
                                            break e
                                        } else {
                                            r(m, d);
                                            break
                                        }
                                    else t(m, d);
                                    d = d.sibling
                                }
                                d = tc(h, m.mode, y),
                                d.return = m,
                                m = d
                            }
                            return a(m);
                        case Cr:
                            return w = h._init, P(m, d, w(h._payload), y)
                    }
                    if (Jo(h)) return v(m, d, h, y);
                    if (Wo(h)) return x(m, d, h, y);
                    za(m, h)
                }
                return typeof h == "string" && h !== "" || typeof h == "number" ? (h = "" + h, d !== null && d.tag === 6 ? (r(m, d.sibling), d = o(d, h), d.return = m, m = d) : (r(m, d), d = ec(h, m.mode, y), d.return = m, m = d), a(m)) : r(m, d)
            }
            return P
        }
        var lo = o1(!0),
            i1 = o1(!1),
            _i = {},
            Vt = Fr(_i),
            wi = Fr(_i),
            bi = Fr(_i);

        function un(e) {
            if (e === _i) throw Error(N(174));
            return e
        }

        function xf(e, t) {
            switch (J(bi, t), J(wi, e), J(Vt, _i), e = t.nodeType, e) {
                case 9:
                case 11:
                    t = (t = t.documentElement) ? t.namespaceURI : fc(null, "");
                    break;
                default:
                    e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = fc(t, e)
            }
            te(Vt), J(Vt, t)
        }

        function uo() {
            te(Vt), te(wi), te(bi)
        }

        function a1(e) {
            un(bi.current);
            var t = un(Vt.current),
                r = fc(t, e.type);
            t !== r && (J(wi, e), J(Vt, r))
        }

        function Sf(e) {
            wi.current === e && (te(Vt), te(wi))
        }
        var se = Fr(0);

        function gs(e) {
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
        var Qu = [];

        function Cf() {
            for (var e = 0; e < Qu.length; e++) Qu[e]._workInProgressVersionPrimary = null;
            Qu.length = 0
        }
        var Ga = ur.ReactCurrentDispatcher,
            Xu = ur.ReactCurrentBatchConfig,
            mn = 0,
            le = null,
            ve = null,
            we = null,
            hs = !1,
            si = !1,
            Ei = 0,
            I5 = 0;

        function Le() {
            throw Error(N(321))
        }

        function wf(e, t) {
            if (t === null) return !1;
            for (var r = 0; r < t.length && r < e.length; r++)
                if (!Lt(e[r], t[r])) return !1;
            return !0
        }

        function bf(e, t, r, n, o, i) {
            if (mn = i, le = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ga.current = e === null || e.memoizedState === null ? $5 : H5, e = r(n, o), si) {
                i = 0;
                do {
                    if (si = !1, Ei = 0, 25 <= i) throw Error(N(301));
                    i += 1, we = ve = null, t.updateQueue = null, Ga.current = B5, e = r(n, o)
                } while (si)
            }
            if (Ga.current = vs, t = ve !== null && ve.next !== null, mn = 0, we = ve = le = null, hs = !1, t) throw Error(N(300));
            return e
        }

        function Ef() {
            var e = Ei !== 0;
            return Ei = 0, e
        }

        function Bt() {
            var e = {
                memoizedState: null,
                baseState: null,
                baseQueue: null,
                queue: null,
                next: null
            };
            return we === null ? le.memoizedState = we = e : we = we.next = e, we
        }

        function xt() {
            if (ve === null) {
                var e = le.alternate;
                e = e !== null ? e.memoizedState : null
            } else e = ve.next;
            var t = we === null ? le.memoizedState : we.next;
            if (t !== null) we = t, ve = e;
            else {
                if (e === null) throw Error(N(310));
                ve = e, e = {
                    memoizedState: ve.memoizedState,
                    baseState: ve.baseState,
                    baseQueue: ve.baseQueue,
                    queue: ve.queue,
                    next: null
                }, we === null ? le.memoizedState = we = e : we = we.next = e
            }
            return we
        }

        function ki(e, t) {
            return typeof t == "function" ? t(e) : t
        }

        function Yu(e) {
            var t = xt(),
                r = t.queue;
            if (r === null) throw Error(N(311));
            r.lastRenderedReducer = e;
            var n = ve,
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
                    if ((mn & f) === f) l !== null && (l = l.next = {
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
                        l === null ? (s = l = c, a = n) : l = l.next = c, le.lanes |= f, gn |= f
                    }
                    u = u.next
                } while (u !== null && u !== i);
                l === null ? a = n : l.next = s, Lt(n, t.memoizedState) || (Xe = !0), t.memoizedState = n, t.baseState = a, t.baseQueue = l, r.lastRenderedState = n
            }
            if (e = r.interleaved, e !== null) {
                o = e;
                do i = o.lane, le.lanes |= i, gn |= i, o = o.next; while (o !== e)
            } else o === null && (r.lanes = 0);
            return [t.memoizedState, r.dispatch]
        }

        function Zu(e) {
            var t = xt(),
                r = t.queue;
            if (r === null) throw Error(N(311));
            r.lastRenderedReducer = e;
            var n = r.dispatch,
                o = r.pending,
                i = t.memoizedState;
            if (o !== null) {
                r.pending = null;
                var a = o = o.next;
                do i = e(i, a.action), a = a.next; while (a !== o);
                Lt(i, t.memoizedState) || (Xe = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), r.lastRenderedState = i
            }
            return [i, n]
        }

        function s1() {}

        function l1(e, t) {
            var r = le,
                n = xt(),
                o = t(),
                i = !Lt(n.memoizedState, o);
            if (i && (n.memoizedState = o, Xe = !0), n = n.queue, kf(f1.bind(null, r, n, e), [e]), n.getSnapshot !== t || i || we !== null && we.memoizedState.tag & 1) {
                if (r.flags |= 2048, Pi(9, c1.bind(null, r, n, o, t), void 0, null), be === null) throw Error(N(349));
                mn & 30 || u1(r, t, o)
            }
            return o
        }

        function u1(e, t, r) {
            e.flags |= 16384, e = {
                getSnapshot: t,
                value: r
            }, t = le.updateQueue, t === null ? (t = {
                lastEffect: null,
                stores: null
            }, le.updateQueue = t, t.stores = [e]) : (r = t.stores, r === null ? t.stores = [e] : r.push(e))
        }

        function c1(e, t, r, n) {
            t.value = r, t.getSnapshot = n, d1(t) && p1(e)
        }

        function f1(e, t, r) {
            return r(function() {
                d1(t) && p1(e)
            })
        }

        function d1(e) {
            var t = e.getSnapshot;
            e = e.value;
            try {
                var r = t();
                return !Lt(e, r)
            } catch {
                return !0
            }
        }

        function p1(e) {
            var t = sr(e, 1);
            t !== null && Nt(t, e, 1, -1)
        }

        function jm(e) {
            var t = Bt();
            return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: ki,
                lastRenderedState: e
            }, t.queue = e, e = e.dispatch = z5.bind(null, le, e), [t.memoizedState, e]
        }

        function Pi(e, t, r, n) {
            return e = {
                tag: e,
                create: t,
                destroy: r,
                deps: n,
                next: null
            }, t = le.updateQueue, t === null ? (t = {
                lastEffect: null,
                stores: null
            }, le.updateQueue = t, t.lastEffect = e.next = e) : (r = t.lastEffect, r === null ? t.lastEffect = e.next = e : (n = r.next, r.next = e, e.next = n, t.lastEffect = e)), e
        }

        function m1() {
            return xt().memoizedState
        }

        function Qa(e, t, r, n) {
            var o = Bt();
            le.flags |= e, o.memoizedState = Pi(1 | t, r, void 0, n === void 0 ? null : n)
        }

        function As(e, t, r, n) {
            var o = xt();
            n = n === void 0 ? null : n;
            var i = void 0;
            if (ve !== null) {
                var a = ve.memoizedState;
                if (i = a.destroy, n !== null && wf(n, a.deps)) {
                    o.memoizedState = Pi(t, r, i, n);
                    return
                }
            }
            le.flags |= e, o.memoizedState = Pi(1 | t, r, i, n)
        }

        function Mm(e, t) {
            return Qa(8390656, 8, e, t)
        }

        function kf(e, t) {
            return As(2048, 8, e, t)
        }

        function g1(e, t) {
            return As(4, 2, e, t)
        }

        function h1(e, t) {
            return As(4, 4, e, t)
        }

        function v1(e, t) {
            if (typeof t == "function") return e = e(), t(e),
                function() {
                    t(null)
                };
            if (t != null) return e = e(), t.current = e,
                function() {
                    t.current = null
                }
        }

        function y1(e, t, r) {
            return r = r != null ? r.concat([e]) : null, As(4, 4, v1.bind(null, t, e), r)
        }

        function Pf() {}

        function x1(e, t) {
            var r = xt();
            t = t === void 0 ? null : t;
            var n = r.memoizedState;
            return n !== null && t !== null && wf(t, n[1]) ? n[0] : (r.memoizedState = [e, t], e)
        }

        function S1(e, t) {
            var r = xt();
            t = t === void 0 ? null : t;
            var n = r.memoizedState;
            return n !== null && t !== null && wf(t, n[1]) ? n[0] : (e = e(), r.memoizedState = [e, t], e)
        }

        function C1(e, t, r) {
            return mn & 21 ? (Lt(r, t) || (r = Eg(), le.lanes |= r, gn |= r, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Xe = !0), e.memoizedState = r)
        }

        function D5(e, t) {
            var r = X;
            X = r !== 0 && 4 > r ? r : 4, e(!0);
            var n = Xu.transition;
            Xu.transition = {};
            try {
                e(!1), t()
            } finally {
                X = r, Xu.transition = n
            }
        }

        function w1() {
            return xt().memoizedState
        }

        function F5(e, t, r) {
            var n = Lr(e);
            if (r = {
                    lane: n,
                    action: r,
                    hasEagerState: !1,
                    eagerState: null,
                    next: null
                }, b1(e)) E1(t, r);
            else if (r = e1(e, t, r, n), r !== null) {
                var o = Ue();
                Nt(r, e, n, o), k1(r, t, n)
            }
        }

        function z5(e, t, r) {
            var n = Lr(e),
                o = {
                    lane: n,
                    action: r,
                    hasEagerState: !1,
                    eagerState: null,
                    next: null
                };
            if (b1(e)) E1(t, o);
            else {
                var i = e.alternate;
                if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
                    var a = t.lastRenderedState,
                        s = i(a, r);
                    if (o.hasEagerState = !0, o.eagerState = s, Lt(s, a)) {
                        var l = t.interleaved;
                        l === null ? (o.next = o, vf(t)) : (o.next = l.next, l.next = o), t.interleaved = o;
                        return
                    }
                } catch {} finally {}
                r = e1(e, t, o, n), r !== null && (o = Ue(), Nt(r, e, n, o), k1(r, t, n))
            }
        }

        function b1(e) {
            var t = e.alternate;
            return e === le || t !== null && t === le
        }

        function E1(e, t) {
            si = hs = !0;
            var r = e.pending;
            r === null ? t.next = t : (t.next = r.next, r.next = t), e.pending = t
        }

        function k1(e, t, r) {
            if (r & 4194240) {
                var n = t.lanes;
                n &= e.pendingLanes, r |= n, t.lanes = r, rf(e, r)
            }
        }
        var vs = {
                readContext: yt,
                useCallback: Le,
                useContext: Le,
                useEffect: Le,
                useImperativeHandle: Le,
                useInsertionEffect: Le,
                useLayoutEffect: Le,
                useMemo: Le,
                useReducer: Le,
                useRef: Le,
                useState: Le,
                useDebugValue: Le,
                useDeferredValue: Le,
                useTransition: Le,
                useMutableSource: Le,
                useSyncExternalStore: Le,
                useId: Le,
                unstable_isNewReconciler: !1
            },
            $5 = {
                readContext: yt,
                useCallback: function(e, t) {
                    return Bt().memoizedState = [e, t === void 0 ? null : t], e
                },
                useContext: yt,
                useEffect: Mm,
                useImperativeHandle: function(e, t, r) {
                    return r = r != null ? r.concat([e]) : null, Qa(4194308, 4, v1.bind(null, t, e), r)
                },
                useLayoutEffect: function(e, t) {
                    return Qa(4194308, 4, e, t)
                },
                useInsertionEffect: function(e, t) {
                    return Qa(4, 2, e, t)
                },
                useMemo: function(e, t) {
                    var r = Bt();
                    return t = t === void 0 ? null : t, e = e(), r.memoizedState = [e, t], e
                },
                useReducer: function(e, t, r) {
                    var n = Bt();
                    return t = r !== void 0 ? r(t) : t, n.memoizedState = n.baseState = t, e = {
                        pending: null,
                        interleaved: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: e,
                        lastRenderedState: t
                    }, n.queue = e, e = e.dispatch = F5.bind(null, le, e), [n.memoizedState, e]
                },
                useRef: function(e) {
                    var t = Bt();
                    return e = {
                        current: e
                    }, t.memoizedState = e
                },
                useState: jm,
                useDebugValue: Pf,
                useDeferredValue: function(e) {
                    return Bt().memoizedState = e
                },
                useTransition: function() {
                    var e = jm(!1),
                        t = e[0];
                    return e = D5.bind(null, e[1]), Bt().memoizedState = e, [t, e]
                },
                useMutableSource: function() {},
                useSyncExternalStore: function(e, t, r) {
                    var n = le,
                        o = Bt();
                    if (ie) {
                        if (r === void 0) throw Error(N(407));
                        r = r()
                    } else {
                        if (r = t(), be === null) throw Error(N(349));
                        mn & 30 || u1(n, t, r)
                    }
                    o.memoizedState = r;
                    var i = {
                        value: r,
                        getSnapshot: t
                    };
                    return o.queue = i, Mm(f1.bind(null, n, i, e), [e]), n.flags |= 2048, Pi(9, c1.bind(null, n, i, r, t), void 0, null), r
                },
                useId: function() {
                    var e = Bt(),
                        t = be.identifierPrefix;
                    if (ie) {
                        var r = nr,
                            n = rr;
                        r = (n & ~(1 << 32 - _t(n) - 1)).toString(32) + r, t = ":" + t + "R" + r, r = Ei++, 0 < r && (t += "H" + r.toString(32)), t += ":"
                    } else r = I5++, t = ":" + t + "r" + r.toString(32) + ":";
                    return e.memoizedState = t
                },
                unstable_isNewReconciler: !1
            },
            H5 = {
                readContext: yt,
                useCallback: x1,
                useContext: yt,
                useEffect: kf,
                useImperativeHandle: y1,
                useInsertionEffect: g1,
                useLayoutEffect: h1,
                useMemo: S1,
                useReducer: Yu,
                useRef: m1,
                useState: function() {
                    return Yu(ki)
                },
                useDebugValue: Pf,
                useDeferredValue: function(e) {
                    var t = xt();
                    return C1(t, ve.memoizedState, e)
                },
                useTransition: function() {
                    var e = Yu(ki)[0],
                        t = xt().memoizedState;
                    return [e, t]
                },
                useMutableSource: s1,
                useSyncExternalStore: l1,
                useId: w1,
                unstable_isNewReconciler: !1
            },
            B5 = {
                readContext: yt,
                useCallback: x1,
                useContext: yt,
                useEffect: kf,
                useImperativeHandle: y1,
                useInsertionEffect: g1,
                useLayoutEffect: h1,
                useMemo: S1,
                useReducer: Zu,
                useRef: m1,
                useState: function() {
                    return Zu(ki)
                },
                useDebugValue: Pf,
                useDeferredValue: function(e) {
                    var t = xt();
                    return ve === null ? t.memoizedState = e : C1(t, ve.memoizedState, e)
                },
                useTransition: function() {
                    var e = Zu(ki)[0],
                        t = xt().memoizedState;
                    return [e, t]
                },
                useMutableSource: s1,
                useSyncExternalStore: l1,
                useId: w1,
                unstable_isNewReconciler: !1
            };

        function co(e, t) {
            try {
                var r = "",
                    n = t;
                do r += y2(n), n = n.return; while (n);
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

        function qu(e, t, r) {
            return {
                value: e,
                source: null,
                stack: r ?? null,
                digest: t ?? null
            }
        }

        function jc(e, t) {
            try {} catch (r) {
                setTimeout(function() {
                    throw r
                })
            }
        }
        var U5 = typeof WeakMap == "function" ? WeakMap : Map;

        function P1(e, t, r) {
            r = or(-1, r), r.tag = 3, r.payload = {
                element: null
            };
            var n = t.value;
            return r.callback = function() {
                xs || (xs = !0, Wc = n), jc(e, t)
            }, r
        }

        function O1(e, t, r) {
            r = or(-1, r), r.tag = 3;
            var n = e.type.getDerivedStateFromError;
            if (typeof n == "function") {
                var o = t.value;
                r.payload = function() {
                    return n(o)
                }, r.callback = function() {
                    jc(e, t)
                }
            }
            var i = e.stateNode;
            return i !== null && typeof i.componentDidCatch == "function" && (r.callback = function() {
                jc(e, t), typeof n != "function" && (Nr === null ? Nr = new Set([this]) : Nr.add(this));
                var a = t.stack;
                this.componentDidCatch(t.value, {
                    componentStack: a !== null ? a : ""
                })
            }), r
        }

        function Im(e, t, r) {
            var n = e.pingCache;
            if (n === null) {
                n = e.pingCache = new U5;
                var o = new Set;
                n.set(t, o)
            } else o = n.get(t), o === void 0 && (o = new Set, n.set(t, o));
            o.has(r) || (o.add(r), e = n6.bind(null, e, t, r), t.then(e, e))
        }

        function Dm(e) {
            do {
                var t;
                if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
                e = e.return
            } while (e !== null);
            return null
        }

        function Fm(e, t, r, n, o) {
            return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, r.flags |= 131072, r.flags &= -52805, r.tag === 1 && (r.alternate === null ? r.tag = 17 : (t = or(-1, 1), t.tag = 2, _r(r, t, 1))), r.lanes |= 1), e)
        }
        var W5 = ur.ReactCurrentOwner,
            Xe = !1;

        function Be(e, t, r, n) {
            t.child = e === null ? i1(t, null, r, n) : lo(t, e.child, r, n)
        }

        function zm(e, t, r, n, o) {
            r = r.render;
            var i = t.ref;
            return no(t, o), n = bf(e, t, r, n, i, o), r = Ef(), e !== null && !Xe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, lr(e, t, o)) : (ie && r && ff(t), t.flags |= 1, Be(e, t, n, o), t.child)
        }

        function $m(e, t, r, n, o) {
            if (e === null) {
                var i = r.type;
                return typeof i == "function" && !jf(i) && i.defaultProps === void 0 && r.compare === null && r.defaultProps === void 0 ? (t.tag = 15, t.type = i, T1(e, t, i, n, o)) : (e = qa(r.type, null, n, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e)
            }
            if (i = e.child, !(e.lanes & o)) {
                var a = i.memoizedProps;
                if (r = r.compare, r = r !== null ? r : yi, r(a, n) && e.ref === t.ref) return lr(e, t, o)
            }
            return t.flags |= 1, e = jr(i, n), e.ref = t.ref, e.return = t, t.child = e
        }

        function T1(e, t, r, n, o) {
            if (e !== null) {
                var i = e.memoizedProps;
                if (yi(i, n) && e.ref === t.ref)
                    if (Xe = !1, t.pendingProps = n = i, (e.lanes & o) !== 0) e.flags & 131072 && (Xe = !0);
                    else return t.lanes = e.lanes, lr(e, t, o)
            }
            return Mc(e, t, r, n, o)
        }

        function R1(e, t, r) {
            var n = t.pendingProps,
                o = n.children,
                i = e !== null ? e.memoizedState : null;
            if (n.mode === "hidden")
                if (!(t.mode & 1)) t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                }, J(qn, nt), nt |= r;
                else {
                    if (!(r & 1073741824)) return e = i !== null ? i.baseLanes | r : r, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                        baseLanes: e,
                        cachePool: null,
                        transitions: null
                    }, t.updateQueue = null, J(qn, nt), nt |= e, null;
                    t.memoizedState = {
                        baseLanes: 0,
                        cachePool: null,
                        transitions: null
                    }, n = i !== null ? i.baseLanes : r, J(qn, nt), nt |= n
                }
            else i !== null ? (n = i.baseLanes | r, t.memoizedState = null) : n = r, J(qn, nt), nt |= n;
            return Be(e, t, o, r), t.child
        }

        function A1(e, t) {
            var r = t.ref;
            (e === null && r !== null || e !== null && e.ref !== r) && (t.flags |= 512, t.flags |= 2097152)
        }

        function Mc(e, t, r, n, o) {
            var i = Ze(r) ? dn : Ie.current;
            return i = ao(t, i), no(t, o), r = bf(e, t, r, n, i, o), n = Ef(), e !== null && !Xe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, lr(e, t, o)) : (ie && n && ff(t), t.flags |= 1, Be(e, t, r, o), t.child)
        }

        function Hm(e, t, r, n, o) {
            if (Ze(r)) {
                var i = !0;
                us(t)
            } else i = !1;
            if (no(t, o), t.stateNode === null) Xa(e, t), n1(t, r, n), Lc(t, r, n, o), n = !0;
            else if (e === null) {
                var a = t.stateNode,
                    s = t.memoizedProps;
                a.props = s;
                var l = a.context,
                    u = r.contextType;
                typeof u == "object" && u !== null ? u = yt(u) : (u = Ze(r) ? dn : Ie.current, u = ao(t, u));
                var f = r.getDerivedStateFromProps,
                    c = typeof f == "function" || typeof a.getSnapshotBeforeUpdate == "function";
                c || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s !== n || l !== u) && Nm(t, a, n, u), wr = !1;
                var p = t.memoizedState;
                a.state = p, ms(t, n, a, o), l = t.memoizedState, s !== n || p !== l || Ye.current || wr ? (typeof f == "function" && (Nc(t, r, f, n), l = t.memoizedState), (s = wr || _m(t, r, s, n, p, l, u)) ? (c || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = n, t.memoizedState = l), a.props = n, a.state = l, a.context = u, n = s) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), n = !1)
            } else {
                a = t.stateNode, t1(e, t), s = t.memoizedProps, u = t.type === t.elementType ? s : Tt(t.type, s), a.props = u, c = t.pendingProps, p = a.context, l = r.contextType, typeof l == "object" && l !== null ? l = yt(l) : (l = Ze(r) ? dn : Ie.current, l = ao(t, l));
                var g = r.getDerivedStateFromProps;
                (f = typeof g == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s !== c || p !== l) && Nm(t, a, n, l), wr = !1, p = t.memoizedState, a.state = p, ms(t, n, a, o);
                var v = t.memoizedState;
                s !== c || p !== v || Ye.current || wr ? (typeof g == "function" && (Nc(t, r, g, n), v = t.memoizedState), (u = wr || _m(t, r, u, n, p, v, l) || !1) ? (f || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(n, v, l), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(n, v, l)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || s === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = n, t.memoizedState = v), a.props = n, a.state = v, a.context = l, n = u) : (typeof a.componentDidUpdate != "function" || s === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), n = !1)
            }
            return Ic(e, t, r, n, i, o)
        }

        function Ic(e, t, r, n, o, i) {
            A1(e, t);
            var a = (t.flags & 128) !== 0;
            if (!n && !a) return o && Pm(t, r, !1), lr(e, t, i);
            n = t.stateNode, W5.current = t;
            var s = a && typeof r.getDerivedStateFromError != "function" ? null : n.render();
            return t.flags |= 1, e !== null && a ? (t.child = lo(t, e.child, null, i), t.child = lo(t, null, s, i)) : Be(e, t, s, i), t.memoizedState = n.state, o && Pm(t, r, !0), t.child
        }

        function _1(e) {
            var t = e.stateNode;
            t.pendingContext ? km(e, t.pendingContext, t.pendingContext !== t.context) : t.context && km(e, t.context, !1), xf(e, t.containerInfo)
        }

        function Bm(e, t, r, n, o) {
            return so(), pf(o), t.flags |= 256, Be(e, t, r, n), t.child
        }
        var Dc = {
            dehydrated: null,
            treeContext: null,
            retryLane: 0
        };

        function Fc(e) {
            return {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }
        }

        function N1(e, t, r) {
            var n = t.pendingProps,
                o = se.current,
                i = !1,
                a = (t.flags & 128) !== 0,
                s;
            if ((s = a) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), s ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), J(se, o & 1), e === null) return Ac(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (a = n.children, e = n.fallback, i ? (n = t.mode, i = t.child, a = {
                mode: "hidden",
                children: a
            }, !(n & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = a) : i = Ls(a, n, 0, null), e = fn(e, n, r, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Fc(r), t.memoizedState = Dc, e) : Of(t, a));
            if (o = e.memoizedState, o !== null && (s = o.dehydrated, s !== null)) return V5(e, t, a, n, s, o, r);
            if (i) {
                i = n.fallback, a = t.mode, o = e.child, s = o.sibling;
                var l = {
                    mode: "hidden",
                    children: n.children
                };
                return !(a & 1) && t.child !== o ? (n = t.child, n.childLanes = 0, n.pendingProps = l, t.deletions = null) : (n = jr(o, l), n.subtreeFlags = o.subtreeFlags & 14680064), s !== null ? i = jr(s, i) : (i = fn(i, a, r, null), i.flags |= 2), i.return = t, n.return = t, n.sibling = i, t.child = n, n = i, i = t.child, a = e.child.memoizedState, a = a === null ? Fc(r) : {
                    baseLanes: a.baseLanes | r,
                    cachePool: null,
                    transitions: a.transitions
                }, i.memoizedState = a, i.childLanes = e.childLanes & ~r, t.memoizedState = Dc, n
            }
            return i = e.child, e = i.sibling, n = jr(i, {
                mode: "visible",
                children: n.children
            }), !(t.mode & 1) && (n.lanes = r), n.return = t, n.sibling = null, e !== null && (r = t.deletions, r === null ? (t.deletions = [e], t.flags |= 16) : r.push(e)), t.child = n, t.memoizedState = null, n
        }

        function Of(e, t) {
            return t = Ls({
                mode: "visible",
                children: t
            }, e.mode, 0, null), t.return = e, e.child = t
        }

        function $a(e, t, r, n) {
            return n !== null && pf(n), lo(t, e.child, null, r), e = Of(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
        }

        function V5(e, t, r, n, o, i, a) {
            if (r) return t.flags & 256 ? (t.flags &= -257, n = qu(Error(N(422))), $a(e, t, a, n)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = n.fallback, o = t.mode, n = Ls({
                mode: "visible",
                children: n.children
            }, o, 0, null), i = fn(i, o, a, null), i.flags |= 2, n.return = t, i.return = t, n.sibling = i, t.child = n, t.mode & 1 && lo(t, e.child, null, a), t.child.memoizedState = Fc(a), t.memoizedState = Dc, i);
            if (!(t.mode & 1)) return $a(e, t, a, null);
            if (o.data === "$!") {
                if (n = o.nextSibling && o.nextSibling.dataset, n) var s = n.dgst;
                return n = s, i = Error(N(419)), n = qu(i, n, void 0), $a(e, t, a, n)
            }
            if (s = (a & e.childLanes) !== 0, Xe || s) {
                if (n = be, n !== null) {
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
                    o = o & (n.suspendedLanes | a) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, sr(e, o), Nt(n, e, o, -1))
                }
                return Lf(), n = qu(Error(N(421))), $a(e, t, a, n)
            }
            return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = o6.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, ot = Ar(o.nextSibling), it = t, ie = !0, At = null, e !== null && (mt[gt++] = rr, mt[gt++] = nr, mt[gt++] = pn, rr = e.id, nr = e.overflow, pn = t), t = Of(t, n.children), t.flags |= 4096, t)
        }

        function Um(e, t, r) {
            e.lanes |= t;
            var n = e.alternate;
            n !== null && (n.lanes |= t), _c(e.return, t, r)
        }

        function Ju(e, t, r, n, o) {
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

        function L1(e, t, r) {
            var n = t.pendingProps,
                o = n.revealOrder,
                i = n.tail;
            if (Be(e, t, n.children, r), n = se.current, n & 2) n = n & 1 | 2, t.flags |= 128;
            else {
                if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
                    if (e.tag === 13) e.memoizedState !== null && Um(e, r, t);
                    else if (e.tag === 19) Um(e, r, t);
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
            if (J(se, n), !(t.mode & 1)) t.memoizedState = null;
            else switch (o) {
                case "forwards":
                    for (r = t.child, o = null; r !== null;) e = r.alternate, e !== null && gs(e) === null && (o = r), r = r.sibling;
                    r = o, r === null ? (o = t.child, t.child = null) : (o = r.sibling, r.sibling = null), Ju(t, !1, o, r, i);
                    break;
                case "backwards":
                    for (r = null, o = t.child, t.child = null; o !== null;) {
                        if (e = o.alternate, e !== null && gs(e) === null) {
                            t.child = o;
                            break
                        }
                        e = o.sibling, o.sibling = r, r = o, o = e
                    }
                    Ju(t, !0, r, null, i);
                    break;
                case "together":
                    Ju(t, !1, null, null, void 0);
                    break;
                default:
                    t.memoizedState = null
            }
            return t.child
        }

        function Xa(e, t) {
            !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
        }

        function lr(e, t, r) {
            if (e !== null && (t.dependencies = e.dependencies), gn |= t.lanes, !(r & t.childLanes)) return null;
            if (e !== null && t.child !== e.child) throw Error(N(153));
            if (t.child !== null) {
                for (e = t.child, r = jr(e, e.pendingProps), t.child = r, r.return = t; e.sibling !== null;) e = e.sibling, r = r.sibling = jr(e, e.pendingProps), r.return = t;
                r.sibling = null
            }
            return t.child
        }

        function K5(e, t, r) {
            switch (t.tag) {
                case 3:
                    _1(t), so();
                    break;
                case 5:
                    a1(t);
                    break;
                case 1:
                    Ze(t.type) && us(t);
                    break;
                case 4:
                    xf(t, t.stateNode.containerInfo);
                    break;
                case 10:
                    var n = t.type._context,
                        o = t.memoizedProps.value;
                    J(ds, n._currentValue), n._currentValue = o;
                    break;
                case 13:
                    if (n = t.memoizedState, n !== null) return n.dehydrated !== null ? (J(se, se.current & 1), t.flags |= 128, null) : r & t.child.childLanes ? N1(e, t, r) : (J(se, se.current & 1), e = lr(e, t, r), e !== null ? e.sibling : null);
                    J(se, se.current & 1);
                    break;
                case 19:
                    if (n = (r & t.childLanes) !== 0, e.flags & 128) {
                        if (n) return L1(e, t, r);
                        t.flags |= 128
                    }
                    if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), J(se, se.current), n) break;
                    return null;
                case 22:
                case 23:
                    return t.lanes = 0, R1(e, t, r)
            }
            return lr(e, t, r)
        }
        var j1, zc, M1, I1;
        j1 = function(e, t) {
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
        zc = function() {};
        M1 = function(e, t, r, n) {
            var o = e.memoizedProps;
            if (o !== n) {
                e = t.stateNode, un(Vt.current);
                var i = null;
                switch (r) {
                    case "input":
                        o = sc(e, o), n = sc(e, n), i = [];
                        break;
                    case "select":
                        o = ue({}, o, {
                            value: void 0
                        }), n = ue({}, n, {
                            value: void 0
                        }), i = [];
                        break;
                    case "textarea":
                        o = cc(e, o), n = cc(e, n), i = [];
                        break;
                    default:
                        typeof o.onClick != "function" && typeof n.onClick == "function" && (e.onclick = ss)
                }
                dc(r, n);
                var a;
                r = null;
                for (u in o)
                    if (!n.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
                        if (u === "style") {
                            var s = o[u];
                            for (a in s) s.hasOwnProperty(a) && (r || (r = {}), r[a] = "")
                        } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (fi.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
                for (u in n) {
                    var l = n[u];
                    if (s = o?.[u], n.hasOwnProperty(u) && l !== s && (l != null || s != null))
                        if (u === "style")
                            if (s) {
                                for (a in s) !s.hasOwnProperty(a) || l && l.hasOwnProperty(a) || (r || (r = {}), r[a] = "");
                                for (a in l) l.hasOwnProperty(a) && s[a] !== l[a] && (r || (r = {}), r[a] = l[a])
                            } else r || (i || (i = []), i.push(u, r)), r = l;
                    else u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, s = s ? s.__html : void 0, l != null && s !== l && (i = i || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (i = i || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (fi.hasOwnProperty(u) ? (l != null && u === "onScroll" && ee("scroll", e), i || s === l || (i = [])) : (i = i || []).push(u, l))
                }
                r && (i = i || []).push("style", r);
                var u = i;
                (t.updateQueue = u) && (t.flags |= 4)
            }
        };
        I1 = function(e, t, r, n) {
            r !== n && (t.flags |= 4)
        };

        function Xo(e, t) {
            if (!ie) switch (e.tailMode) {
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

        function je(e) {
            var t = e.alternate !== null && e.alternate.child === e.child,
                r = 0,
                n = 0;
            if (t)
                for (var o = e.child; o !== null;) r |= o.lanes | o.childLanes, n |= o.subtreeFlags & 14680064, n |= o.flags & 14680064, o.return = e, o = o.sibling;
            else
                for (o = e.child; o !== null;) r |= o.lanes | o.childLanes, n |= o.subtreeFlags, n |= o.flags, o.return = e, o = o.sibling;
            return e.subtreeFlags |= n, e.childLanes = r, t
        }

        function G5(e, t, r) {
            var n = t.pendingProps;
            switch (df(t), t.tag) {
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
                    return je(t), null;
                case 1:
                    return Ze(t.type) && ls(), je(t), null;
                case 3:
                    return n = t.stateNode, uo(), te(Ye), te(Ie), Cf(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (Fa(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, At !== null && (Gc(At), At = null))), zc(e, t), je(t), null;
                case 5:
                    Sf(t);
                    var o = un(bi.current);
                    if (r = t.type, e !== null && t.stateNode != null) M1(e, t, r, n, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
                    else {
                        if (!n) {
                            if (t.stateNode === null) throw Error(N(166));
                            return je(t), null
                        }
                        if (e = un(Vt.current), Fa(t)) {
                            n = t.stateNode, r = t.type;
                            var i = t.memoizedProps;
                            switch (n[Ut] = t, n[Ci] = i, e = (t.mode & 1) !== 0, r) {
                                case "dialog":
                                    ee("cancel", n), ee("close", n);
                                    break;
                                case "iframe":
                                case "object":
                                case "embed":
                                    ee("load", n);
                                    break;
                                case "video":
                                case "audio":
                                    for (o = 0; o < ti.length; o++) ee(ti[o], n);
                                    break;
                                case "source":
                                    ee("error", n);
                                    break;
                                case "img":
                                case "image":
                                case "link":
                                    ee("error", n), ee("load", n);
                                    break;
                                case "details":
                                    ee("toggle", n);
                                    break;
                                case "input":
                                    Zp(n, i), ee("invalid", n);
                                    break;
                                case "select":
                                    n._wrapperState = {
                                        wasMultiple: !!i.multiple
                                    }, ee("invalid", n);
                                    break;
                                case "textarea":
                                    Jp(n, i), ee("invalid", n)
                            }
                            dc(r, i), o = null;
                            for (var a in i)
                                if (i.hasOwnProperty(a)) {
                                    var s = i[a];
                                    a === "children" ? typeof s == "string" ? n.textContent !== s && (i.suppressHydrationWarning !== !0 && Da(n.textContent, s, e), o = ["children", s]) : typeof s == "number" && n.textContent !== "" + s && (i.suppressHydrationWarning !== !0 && Da(n.textContent, s, e), o = ["children", "" + s]) : fi.hasOwnProperty(a) && s != null && a === "onScroll" && ee("scroll", n)
                                } switch (r) {
                                case "input":
                                    ka(n), qp(n, i, !0);
                                    break;
                                case "textarea":
                                    ka(n), em(n);
                                    break;
                                case "select":
                                case "option":
                                    break;
                                default:
                                    typeof i.onClick == "function" && (n.onclick = ss)
                            }
                            n = o, t.updateQueue = n, n !== null && (t.flags |= 4)
                        } else {
                            a = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = ug(r)), e === "http://www.w3.org/1999/xhtml" ? r === "script" ? (e = a.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof n.is == "string" ? e = a.createElement(r, {
                                is: n.is
                            }) : (e = a.createElement(r), r === "select" && (a = e, n.multiple ? a.multiple = !0 : n.size && (a.size = n.size))) : e = a.createElementNS(e, r), e[Ut] = t, e[Ci] = n, j1(e, t, !1, !1), t.stateNode = e;
                            e: {
                                switch (a = pc(r, n), r) {
                                    case "dialog":
                                        ee("cancel", e), ee("close", e), o = n;
                                        break;
                                    case "iframe":
                                    case "object":
                                    case "embed":
                                        ee("load", e), o = n;
                                        break;
                                    case "video":
                                    case "audio":
                                        for (o = 0; o < ti.length; o++) ee(ti[o], e);
                                        o = n;
                                        break;
                                    case "source":
                                        ee("error", e), o = n;
                                        break;
                                    case "img":
                                    case "image":
                                    case "link":
                                        ee("error", e), ee("load", e), o = n;
                                        break;
                                    case "details":
                                        ee("toggle", e), o = n;
                                        break;
                                    case "input":
                                        Zp(e, n), o = sc(e, n), ee("invalid", e);
                                        break;
                                    case "option":
                                        o = n;
                                        break;
                                    case "select":
                                        e._wrapperState = {
                                            wasMultiple: !!n.multiple
                                        }, o = ue({}, n, {
                                            value: void 0
                                        }), ee("invalid", e);
                                        break;
                                    case "textarea":
                                        Jp(e, n), o = cc(e, n), ee("invalid", e);
                                        break;
                                    default:
                                        o = n
                                }
                                dc(r, o),
                                s = o;
                                for (i in s)
                                    if (s.hasOwnProperty(i)) {
                                        var l = s[i];
                                        i === "style" ? dg(e, l) : i === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && cg(e, l)) : i === "children" ? typeof l == "string" ? (r !== "textarea" || l !== "") && di(e, l) : typeof l == "number" && di(e, "" + l) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (fi.hasOwnProperty(i) ? l != null && i === "onScroll" && ee("scroll", e) : l != null && Yc(e, i, l, a))
                                    } switch (r) {
                                    case "input":
                                        ka(e), qp(e, n, !1);
                                        break;
                                    case "textarea":
                                        ka(e), em(e);
                                        break;
                                    case "option":
                                        n.value != null && e.setAttribute("value", "" + Mr(n.value));
                                        break;
                                    case "select":
                                        e.multiple = !!n.multiple, i = n.value, i != null ? Jn(e, !!n.multiple, i, !1) : n.defaultValue != null && Jn(e, !!n.multiple, n.defaultValue, !0);
                                        break;
                                    default:
                                        typeof o.onClick == "function" && (e.onclick = ss)
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
                    return je(t), null;
                case 6:
                    if (e && t.stateNode != null) I1(e, t, e.memoizedProps, n);
                    else {
                        if (typeof n != "string" && t.stateNode === null) throw Error(N(166));
                        if (r = un(bi.current), un(Vt.current), Fa(t)) {
                            if (n = t.stateNode, r = t.memoizedProps, n[Ut] = t, (i = n.nodeValue !== r) && (e = it, e !== null)) switch (e.tag) {
                                case 3:
                                    Da(n.nodeValue, r, (e.mode & 1) !== 0);
                                    break;
                                case 5:
                                    e.memoizedProps.suppressHydrationWarning !== !0 && Da(n.nodeValue, r, (e.mode & 1) !== 0)
                            }
                            i && (t.flags |= 4)
                        } else n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n), n[Ut] = t, t.stateNode = n
                    }
                    return je(t), null;
                case 13:
                    if (te(se), n = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                        if (ie && ot !== null && t.mode & 1 && !(t.flags & 128)) Jg(), so(), t.flags |= 98560, i = !1;
                        else if (i = Fa(t), n !== null && n.dehydrated !== null) {
                            if (e === null) {
                                if (!i) throw Error(N(318));
                                if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(N(317));
                                i[Ut] = t
                            } else so(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                            je(t), i = !1
                        } else At !== null && (Gc(At), At = null), i = !0;
                        if (!i) return t.flags & 65536 ? t : null
                    }
                    return t.flags & 128 ? (t.lanes = r, t) : (n = n !== null, n !== (e !== null && e.memoizedState !== null) && n && (t.child.flags |= 8192, t.mode & 1 && (e === null || se.current & 1 ? ye === 0 && (ye = 3) : Lf())), t.updateQueue !== null && (t.flags |= 4), je(t), null);
                case 4:
                    return uo(), zc(e, t), e === null && xi(t.stateNode.containerInfo), je(t), null;
                case 10:
                    return hf(t.type._context), je(t), null;
                case 17:
                    return Ze(t.type) && ls(), je(t), null;
                case 19:
                    if (te(se), i = t.memoizedState, i === null) return je(t), null;
                    if (n = (t.flags & 128) !== 0, a = i.rendering, a === null)
                        if (n) Xo(i, !1);
                        else {
                            if (ye !== 0 || e !== null && e.flags & 128)
                                for (e = t.child; e !== null;) {
                                    if (a = gs(e), a !== null) {
                                        for (t.flags |= 128, Xo(i, !1), n = a.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), t.subtreeFlags = 0, n = r, r = t.child; r !== null;) i = r, e = n, i.flags &= 14680066, a = i.alternate, a === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = a.childLanes, i.lanes = a.lanes, i.child = a.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = a.memoizedProps, i.memoizedState = a.memoizedState, i.updateQueue = a.updateQueue, i.type = a.type, e = a.dependencies, i.dependencies = e === null ? null : {
                                            lanes: e.lanes,
                                            firstContext: e.firstContext
                                        }), r = r.sibling;
                                        return J(se, se.current & 1 | 2), t.child
                                    }
                                    e = e.sibling
                                }
                            i.tail !== null && fe() > fo && (t.flags |= 128, n = !0, Xo(i, !1), t.lanes = 4194304)
                        }
                    else {
                        if (!n)
                            if (e = gs(a), e !== null) {
                                if (t.flags |= 128, n = !0, r = e.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), Xo(i, !0), i.tail === null && i.tailMode === "hidden" && !a.alternate && !ie) return je(t), null
                            } else 2 * fe() - i.renderingStartTime > fo && r !== 1073741824 && (t.flags |= 128, n = !0, Xo(i, !1), t.lanes = 4194304);
                        i.isBackwards ? (a.sibling = t.child, t.child = a) : (r = i.last, r !== null ? r.sibling = a : t.child = a, i.last = a)
                    }
                    return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = fe(), t.sibling = null, r = se.current, J(se, n ? r & 1 | 2 : r & 1), t) : (je(t), null);
                case 22:
                case 23:
                    return Nf(), n = t.memoizedState !== null, e !== null && e.memoizedState !== null !== n && (t.flags |= 8192), n && t.mode & 1 ? nt & 1073741824 && (je(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : je(t), null;
                case 24:
                    return null;
                case 25:
                    return null
            }
            throw Error(N(156, t.tag))
        }

        function Q5(e, t) {
            switch (df(t), t.tag) {
                case 1:
                    return Ze(t.type) && ls(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
                case 3:
                    return uo(), te(Ye), te(Ie), Cf(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
                case 5:
                    return Sf(t), null;
                case 13:
                    if (te(se), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                        if (t.alternate === null) throw Error(N(340));
                        so()
                    }
                    return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
                case 19:
                    return te(se), null;
                case 4:
                    return uo(), null;
                case 10:
                    return hf(t.type._context), null;
                case 22:
                case 23:
                    return Nf(), null;
                case 24:
                    return null;
                default:
                    return null
            }
        }
        var Ha = !1,
            Me = !1,
            X5 = typeof WeakSet == "function" ? WeakSet : Set,
            I = null;

        function Zn(e, t) {
            var r = e.ref;
            if (r !== null)
                if (typeof r == "function") try {
                    r(null)
                } catch (n) {
                    ce(e, t, n)
                } else r.current = null
        }

        function $c(e, t, r) {
            try {
                r()
            } catch (n) {
                ce(e, t, n)
            }
        }
        var Wm = !1;

        function Y5(e, t) {
            if (bc = os, e = $g(), cf(e)) {
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
                            p = null;
                        t: for (;;) {
                            for (var g; c !== r || o !== 0 && c.nodeType !== 3 || (s = a + o), c !== i || n !== 0 && c.nodeType !== 3 || (l = a + n), c.nodeType === 3 && (a += c.nodeValue.length), (g = c.firstChild) !== null;) p = c, c = g;
                            for (;;) {
                                if (c === e) break t;
                                if (p === r && ++u === o && (s = a), p === i && ++f === n && (l = a), (g = c.nextSibling) !== null) break;
                                c = p, p = c.parentNode
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
            for (Ec = {
                    focusedElem: e,
                    selectionRange: r
                }, os = !1, I = t; I !== null;)
                if (t = I, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, I = e;
                else
                    for (; I !== null;) {
                        t = I;
                        try {
                            var v = t.alternate;
                            if (t.flags & 1024) switch (t.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    break;
                                case 1:
                                    if (v !== null) {
                                        var x = v.memoizedProps,
                                            P = v.memoizedState,
                                            m = t.stateNode,
                                            d = m.getSnapshotBeforeUpdate(t.elementType === t.type ? x : Tt(t.type, x), P);
                                        m.__reactInternalSnapshotBeforeUpdate = d
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
                                    throw Error(N(163))
                            }
                        } catch (y) {
                            ce(t, t.return, y)
                        }
                        if (e = t.sibling, e !== null) {
                            e.return = t.return, I = e;
                            break
                        }
                        I = t.return
                    }
            return v = Wm, Wm = !1, v
        }

        function li(e, t, r) {
            var n = t.updateQueue;
            if (n = n !== null ? n.lastEffect : null, n !== null) {
                var o = n = n.next;
                do {
                    if ((o.tag & e) === e) {
                        var i = o.destroy;
                        o.destroy = void 0, i !== void 0 && $c(t, r, i)
                    }
                    o = o.next
                } while (o !== n)
            }
        }

        function _s(e, t) {
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

        function Hc(e) {
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

        function D1(e) {
            var t = e.alternate;
            t !== null && (e.alternate = null, D1(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ut], delete t[Ci], delete t[Oc], delete t[N5], delete t[L5])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
        }

        function F1(e) {
            return e.tag === 5 || e.tag === 3 || e.tag === 4
        }

        function Vm(e) {
            e: for (;;) {
                for (; e.sibling === null;) {
                    if (e.return === null || F1(e.return)) return null;
                    e = e.return
                }
                for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
                    if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
                    e.child.return = e, e = e.child
                }
                if (!(e.flags & 2)) return e.stateNode
            }
        }

        function Bc(e, t, r) {
            var n = e.tag;
            if (n === 5 || n === 6) e = e.stateNode, t ? r.nodeType === 8 ? r.parentNode.insertBefore(e, t) : r.insertBefore(e, t) : (r.nodeType === 8 ? (t = r.parentNode, t.insertBefore(e, r)) : (t = r, t.appendChild(e)), r = r._reactRootContainer, r != null || t.onclick !== null || (t.onclick = ss));
            else if (n !== 4 && (e = e.child, e !== null))
                for (Bc(e, t, r), e = e.sibling; e !== null;) Bc(e, t, r), e = e.sibling
        }

        function Uc(e, t, r) {
            var n = e.tag;
            if (n === 5 || n === 6) e = e.stateNode, t ? r.insertBefore(e, t) : r.appendChild(e);
            else if (n !== 4 && (e = e.child, e !== null))
                for (Uc(e, t, r), e = e.sibling; e !== null;) Uc(e, t, r), e = e.sibling
        }
        var Oe = null,
            Rt = !1;

        function Sr(e, t, r) {
            for (r = r.child; r !== null;) z1(e, t, r), r = r.sibling
        }

        function z1(e, t, r) {
            if (Wt && typeof Wt.onCommitFiberUnmount == "function") try {
                Wt.onCommitFiberUnmount(bs, r)
            } catch {}
            switch (r.tag) {
                case 5:
                    Me || Zn(r, t);
                case 6:
                    var n = Oe,
                        o = Rt;
                    Oe = null, Sr(e, t, r), Oe = n, Rt = o, Oe !== null && (Rt ? (e = Oe, r = r.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r)) : Oe.removeChild(r.stateNode));
                    break;
                case 18:
                    Oe !== null && (Rt ? (e = Oe, r = r.stateNode, e.nodeType === 8 ? Ku(e.parentNode, r) : e.nodeType === 1 && Ku(e, r), hi(e)) : Ku(Oe, r.stateNode));
                    break;
                case 4:
                    n = Oe, o = Rt, Oe = r.stateNode.containerInfo, Rt = !0, Sr(e, t, r), Oe = n, Rt = o;
                    break;
                case 0:
                case 11:
                case 14:
                case 15:
                    if (!Me && (n = r.updateQueue, n !== null && (n = n.lastEffect, n !== null))) {
                        o = n = n.next;
                        do {
                            var i = o,
                                a = i.destroy;
                            i = i.tag, a !== void 0 && (i & 2 || i & 4) && $c(r, t, a), o = o.next
                        } while (o !== n)
                    }
                    Sr(e, t, r);
                    break;
                case 1:
                    if (!Me && (Zn(r, t), n = r.stateNode, typeof n.componentWillUnmount == "function")) try {
                        n.props = r.memoizedProps, n.state = r.memoizedState, n.componentWillUnmount()
                    } catch (s) {
                        ce(r, t, s)
                    }
                    Sr(e, t, r);
                    break;
                case 21:
                    Sr(e, t, r);
                    break;
                case 22:
                    r.mode & 1 ? (Me = (n = Me) || r.memoizedState !== null, Sr(e, t, r), Me = n) : Sr(e, t, r);
                    break;
                default:
                    Sr(e, t, r)
            }
        }

        function Km(e) {
            var t = e.updateQueue;
            if (t !== null) {
                e.updateQueue = null;
                var r = e.stateNode;
                r === null && (r = e.stateNode = new X5), t.forEach(function(n) {
                    var o = i6.bind(null, e, n);
                    r.has(n) || (r.add(n), n.then(o, o))
                })
            }
        }

        function Ot(e, t) {
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
                                    Oe = s.stateNode, Rt = !1;
                                    break e;
                                case 3:
                                    Oe = s.stateNode.containerInfo, Rt = !0;
                                    break e;
                                case 4:
                                    Oe = s.stateNode.containerInfo, Rt = !0;
                                    break e
                            }
                            s = s.return
                        }
                        if (Oe === null) throw Error(N(160));
                        z1(i, a, o), Oe = null, Rt = !1;
                        var l = o.alternate;
                        l !== null && (l.return = null), o.return = null
                    } catch (u) {
                        ce(o, t, u)
                    }
                }
            if (t.subtreeFlags & 12854)
                for (t = t.child; t !== null;) $1(t, e), t = t.sibling
        }

        function $1(e, t) {
            var r = e.alternate,
                n = e.flags;
            switch (e.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                    if (Ot(t, e), Ht(e), n & 4) {
                        try {
                            li(3, e, e.return), _s(3, e)
                        } catch (x) {
                            ce(e, e.return, x)
                        }
                        try {
                            li(5, e, e.return)
                        } catch (x) {
                            ce(e, e.return, x)
                        }
                    }
                    break;
                case 1:
                    Ot(t, e), Ht(e), n & 512 && r !== null && Zn(r, r.return);
                    break;
                case 5:
                    if (Ot(t, e), Ht(e), n & 512 && r !== null && Zn(r, r.return), e.flags & 32) {
                        var o = e.stateNode;
                        try {
                            di(o, "")
                        } catch (x) {
                            ce(e, e.return, x)
                        }
                    }
                    if (n & 4 && (o = e.stateNode, o != null)) {
                        var i = e.memoizedProps,
                            a = r !== null ? r.memoizedProps : i,
                            s = e.type,
                            l = e.updateQueue;
                        if (e.updateQueue = null, l !== null) try {
                            s === "input" && i.type === "radio" && i.name != null && sg(o, i), pc(s, a);
                            var u = pc(s, i);
                            for (a = 0; a < l.length; a += 2) {
                                var f = l[a],
                                    c = l[a + 1];
                                f === "style" ? dg(o, c) : f === "dangerouslySetInnerHTML" ? cg(o, c) : f === "children" ? di(o, c) : Yc(o, f, c, u)
                            }
                            switch (s) {
                                case "input":
                                    lc(o, i);
                                    break;
                                case "textarea":
                                    lg(o, i);
                                    break;
                                case "select":
                                    var p = o._wrapperState.wasMultiple;
                                    o._wrapperState.wasMultiple = !!i.multiple;
                                    var g = i.value;
                                    g != null ? Jn(o, !!i.multiple, g, !1) : p !== !!i.multiple && (i.defaultValue != null ? Jn(o, !!i.multiple, i.defaultValue, !0) : Jn(o, !!i.multiple, i.multiple ? [] : "", !1))
                            }
                            o[Ci] = i
                        } catch (x) {
                            ce(e, e.return, x)
                        }
                    }
                    break;
                case 6:
                    if (Ot(t, e), Ht(e), n & 4) {
                        if (e.stateNode === null) throw Error(N(162));
                        o = e.stateNode, i = e.memoizedProps;
                        try {
                            o.nodeValue = i
                        } catch (x) {
                            ce(e, e.return, x)
                        }
                    }
                    break;
                case 3:
                    if (Ot(t, e), Ht(e), n & 4 && r !== null && r.memoizedState.isDehydrated) try {
                        hi(t.containerInfo)
                    } catch (x) {
                        ce(e, e.return, x)
                    }
                    break;
                case 4:
                    Ot(t, e), Ht(e);
                    break;
                case 13:
                    Ot(t, e), Ht(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (Af = fe())), n & 4 && Km(e);
                    break;
                case 22:
                    if (f = r !== null && r.memoizedState !== null, e.mode & 1 ? (Me = (u = Me) || f, Ot(t, e), Me = u) : Ot(t, e), Ht(e), n & 8192) {
                        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !f && e.mode & 1)
                            for (I = e, f = e.child; f !== null;) {
                                for (c = I = f; I !== null;) {
                                    switch (p = I, g = p.child, p.tag) {
                                        case 0:
                                        case 11:
                                        case 14:
                                        case 15:
                                            li(4, p, p.return);
                                            break;
                                        case 1:
                                            Zn(p, p.return);
                                            var v = p.stateNode;
                                            if (typeof v.componentWillUnmount == "function") {
                                                n = p, r = p.return;
                                                try {
                                                    t = n, v.props = t.memoizedProps, v.state = t.memoizedState, v.componentWillUnmount()
                                                } catch (x) {
                                                    ce(n, r, x)
                                                }
                                            }
                                            break;
                                        case 5:
                                            Zn(p, p.return);
                                            break;
                                        case 22:
                                            if (p.memoizedState !== null) {
                                                Qm(c);
                                                continue
                                            }
                                    }
                                    g !== null ? (g.return = p, I = g) : Qm(c)
                                }
                                f = f.sibling
                            }
                        e: for (f = null, c = e;;) {
                            if (c.tag === 5) {
                                if (f === null) {
                                    f = c;
                                    try {
                                        o = c.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (s = c.stateNode, l = c.memoizedProps.style, a = l != null && l.hasOwnProperty("display") ? l.display : null, s.style.display = fg("display", a))
                                    } catch (x) {
                                        ce(e, e.return, x)
                                    }
                                }
                            } else if (c.tag === 6) {
                                if (f === null) try {
                                    c.stateNode.nodeValue = u ? "" : c.memoizedProps
                                } catch (x) {
                                    ce(e, e.return, x)
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
                    Ot(t, e), Ht(e), n & 4 && Km(e);
                    break;
                case 21:
                    break;
                default:
                    Ot(t, e), Ht(e)
            }
        }

        function Ht(e) {
            var t = e.flags;
            if (t & 2) {
                try {
                    e: {
                        for (var r = e.return; r !== null;) {
                            if (F1(r)) {
                                var n = r;
                                break e
                            }
                            r = r.return
                        }
                        throw Error(N(160))
                    }
                    switch (n.tag) {
                        case 5:
                            var o = n.stateNode;
                            n.flags & 32 && (di(o, ""), n.flags &= -33);
                            var i = Vm(e);
                            Uc(e, i, o);
                            break;
                        case 3:
                        case 4:
                            var a = n.stateNode.containerInfo,
                                s = Vm(e);
                            Bc(e, s, a);
                            break;
                        default:
                            throw Error(N(161))
                    }
                }
                catch (l) {
                    ce(e, e.return, l)
                }
                e.flags &= -3
            }
            t & 4096 && (e.flags &= -4097)
        }

        function Z5(e, t, r) {
            I = e, H1(e, t, r)
        }

        function H1(e, t, r) {
            for (var n = (e.mode & 1) !== 0; I !== null;) {
                var o = I,
                    i = o.child;
                if (o.tag === 22 && n) {
                    var a = o.memoizedState !== null || Ha;
                    if (!a) {
                        var s = o.alternate,
                            l = s !== null && s.memoizedState !== null || Me;
                        s = Ha;
                        var u = Me;
                        if (Ha = a, (Me = l) && !u)
                            for (I = o; I !== null;) a = I, l = a.child, a.tag === 22 && a.memoizedState !== null ? Xm(o) : l !== null ? (l.return = a, I = l) : Xm(o);
                        for (; i !== null;) I = i, H1(i, t, r), i = i.sibling;
                        I = o, Ha = s, Me = u
                    }
                    Gm(e, t, r)
                } else o.subtreeFlags & 8772 && i !== null ? (i.return = o, I = i) : Gm(e, t, r)
            }
        }

        function Gm(e) {
            for (; I !== null;) {
                var t = I;
                if (t.flags & 8772) {
                    var r = t.alternate;
                    try {
                        if (t.flags & 8772) switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                Me || _s(5, t);
                                break;
                            case 1:
                                var n = t.stateNode;
                                if (t.flags & 4 && !Me)
                                    if (r === null) n.componentDidMount();
                                    else {
                                        var o = t.elementType === t.type ? r.memoizedProps : Tt(t.type, r.memoizedProps);
                                        n.componentDidUpdate(o, r.memoizedState, n.__reactInternalSnapshotBeforeUpdate)
                                    } var i = t.updateQueue;
                                i !== null && Am(t, i, n);
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
                                    Am(t, a, r)
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
                                            c !== null && hi(c)
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
                                throw Error(N(163))
                        }
                        Me || t.flags & 512 && Hc(t)
                    } catch (p) {
                        ce(t, t.return, p)
                    }
                }
                if (t === e) {
                    I = null;
                    break
                }
                if (r = t.sibling, r !== null) {
                    r.return = t.return, I = r;
                    break
                }
                I = t.return
            }
        }

        function Qm(e) {
            for (; I !== null;) {
                var t = I;
                if (t === e) {
                    I = null;
                    break
                }
                var r = t.sibling;
                if (r !== null) {
                    r.return = t.return, I = r;
                    break
                }
                I = t.return
            }
        }

        function Xm(e) {
            for (; I !== null;) {
                var t = I;
                try {
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            var r = t.return;
                            try {
                                _s(4, t)
                            } catch (l) {
                                ce(t, r, l)
                            }
                            break;
                        case 1:
                            var n = t.stateNode;
                            if (typeof n.componentDidMount == "function") {
                                var o = t.return;
                                try {
                                    n.componentDidMount()
                                } catch (l) {
                                    ce(t, o, l)
                                }
                            }
                            var i = t.return;
                            try {
                                Hc(t)
                            } catch (l) {
                                ce(t, i, l)
                            }
                            break;
                        case 5:
                            var a = t.return;
                            try {
                                Hc(t)
                            } catch (l) {
                                ce(t, a, l)
                            }
                    }
                } catch (l) {
                    ce(t, t.return, l)
                }
                if (t === e) {
                    I = null;
                    break
                }
                var s = t.sibling;
                if (s !== null) {
                    s.return = t.return, I = s;
                    break
                }
                I = t.return
            }
        }
        var q5 = Math.ceil,
            ys = ur.ReactCurrentDispatcher,
            Tf = ur.ReactCurrentOwner,
            vt = ur.ReactCurrentBatchConfig,
            K = 0,
            be = null,
            me = null,
            Te = 0,
            nt = 0,
            qn = Fr(0),
            ye = 0,
            Oi = null,
            gn = 0,
            Ns = 0,
            Rf = 0,
            ui = null,
            Qe = null,
            Af = 0,
            fo = 1 / 0,
            er = null,
            xs = !1,
            Wc = null,
            Nr = null,
            Ba = !1,
            Pr = null,
            Ss = 0,
            ci = 0,
            Vc = null,
            Ya = -1,
            Za = 0;

        function Ue() {
            return K & 6 ? fe() : Ya !== -1 ? Ya : Ya = fe()
        }

        function Lr(e) {
            return e.mode & 1 ? K & 2 && Te !== 0 ? Te & -Te : M5.transition !== null ? (Za === 0 && (Za = Eg()), Za) : (e = X, e !== 0 || (e = window.event, e = e === void 0 ? 16 : _g(e.type)), e) : 1
        }

        function Nt(e, t, r, n) {
            if (50 < ci) throw ci = 0, Vc = null, Error(N(185));
            Ti(e, r, n), (!(K & 2) || e !== be) && (e === be && (!(K & 2) && (Ns |= r), ye === 4 && Er(e, Te)), qe(e, n), r === 1 && K === 0 && !(t.mode & 1) && (fo = fe() + 500, Ts && zr()))
        }

        function qe(e, t) {
            var r = e.callbackNode;
            D2(e, t);
            var n = ns(e, e === be ? Te : 0);
            if (n === 0) r !== null && nm(r), e.callbackNode = null, e.callbackPriority = 0;
            else if (t = n & -n, e.callbackPriority !== t) {
                if (r != null && nm(r), t === 1) e.tag === 0 ? j5(Ym.bind(null, e)) : Yg(Ym.bind(null, e)), A5(function() {
                    !(K & 6) && zr()
                }), r = null;
                else {
                    switch (kg(n)) {
                        case 1:
                            r = tf;
                            break;
                        case 4:
                            r = wg;
                            break;
                        case 16:
                            r = rs;
                            break;
                        case 536870912:
                            r = bg;
                            break;
                        default:
                            r = rs
                    }
                    r = X1(r, B1.bind(null, e))
                }
                e.callbackPriority = t, e.callbackNode = r
            }
        }

        function B1(e, t) {
            if (Ya = -1, Za = 0, K & 6) throw Error(N(327));
            var r = e.callbackNode;
            if (oo() && e.callbackNode !== r) return null;
            var n = ns(e, e === be ? Te : 0);
            if (n === 0) return null;
            if (n & 30 || n & e.expiredLanes || t) t = Cs(e, n);
            else {
                t = n;
                var o = K;
                K |= 2;
                var i = W1();
                (be !== e || Te !== t) && (er = null, fo = fe() + 500, cn(e, t));
                do try {
                    t6();
                    break
                } catch (s) {
                    U1(e, s)
                }
                while (1);
                gf(), ys.current = i, K = o, me !== null ? t = 0 : (be = null, Te = 0, t = ye)
            }
            if (t !== 0) {
                if (t === 2 && (o = yc(e), o !== 0 && (n = o, t = Kc(e, o))), t === 1) throw r = Oi, cn(e, 0), Er(e, n), qe(e, fe()), r;
                if (t === 6) Er(e, n);
                else {
                    if (o = e.current.alternate, !(n & 30) && !J5(o) && (t = Cs(e, n), t === 2 && (i = yc(e), i !== 0 && (n = i, t = Kc(e, i))), t === 1)) throw r = Oi, cn(e, 0), Er(e, n), qe(e, fe()), r;
                    switch (e.finishedWork = o, e.finishedLanes = n, t) {
                        case 0:
                        case 1:
                            throw Error(N(345));
                        case 2:
                            an(e, Qe, er);
                            break;
                        case 3:
                            if (Er(e, n), (n & 130023424) === n && (t = Af + 500 - fe(), 10 < t)) {
                                if (ns(e, 0) !== 0) break;
                                if (o = e.suspendedLanes, (o & n) !== n) {
                                    Ue(), e.pingedLanes |= e.suspendedLanes & o;
                                    break
                                }
                                e.timeoutHandle = Pc(an.bind(null, e, Qe, er), t);
                                break
                            }
                            an(e, Qe, er);
                            break;
                        case 4:
                            if (Er(e, n), (n & 4194240) === n) break;
                            for (t = e.eventTimes, o = -1; 0 < n;) {
                                var a = 31 - _t(n);
                                i = 1 << a, a = t[a], a > o && (o = a), n &= ~i
                            }
                            if (n = o, n = fe() - n, n = (120 > n ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * q5(n / 1960)) - n, 10 < n) {
                                e.timeoutHandle = Pc(an.bind(null, e, Qe, er), n);
                                break
                            }
                            an(e, Qe, er);
                            break;
                        case 5:
                            an(e, Qe, er);
                            break;
                        default:
                            throw Error(N(329))
                    }
                }
            }
            return qe(e, fe()), e.callbackNode === r ? B1.bind(null, e) : null
        }

        function Kc(e, t) {
            var r = ui;
            return e.current.memoizedState.isDehydrated && (cn(e, t).flags |= 256), e = Cs(e, t), e !== 2 && (t = Qe, Qe = r, t !== null && Gc(t)), e
        }

        function Gc(e) {
            Qe === null ? Qe = e : Qe.push.apply(Qe, e)
        }

        function J5(e) {
            for (var t = e;;) {
                if (t.flags & 16384) {
                    var r = t.updateQueue;
                    if (r !== null && (r = r.stores, r !== null))
                        for (var n = 0; n < r.length; n++) {
                            var o = r[n],
                                i = o.getSnapshot;
                            o = o.value;
                            try {
                                if (!Lt(i(), o)) return !1
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

        function Er(e, t) {
            for (t &= ~Rf, t &= ~Ns, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
                var r = 31 - _t(t),
                    n = 1 << r;
                e[r] = -1, t &= ~n
            }
        }

        function Ym(e) {
            if (K & 6) throw Error(N(327));
            oo();
            var t = ns(e, 0);
            if (!(t & 1)) return qe(e, fe()), null;
            var r = Cs(e, t);
            if (e.tag !== 0 && r === 2) {
                var n = yc(e);
                n !== 0 && (t = n, r = Kc(e, n))
            }
            if (r === 1) throw r = Oi, cn(e, 0), Er(e, t), qe(e, fe()), r;
            if (r === 6) throw Error(N(345));
            return e.finishedWork = e.current.alternate, e.finishedLanes = t, an(e, Qe, er), qe(e, fe()), null
        }

        function _f(e, t) {
            var r = K;
            K |= 1;
            try {
                return e(t)
            } finally {
                K = r, K === 0 && (fo = fe() + 500, Ts && zr())
            }
        }

        function hn(e) {
            Pr !== null && Pr.tag === 0 && !(K & 6) && oo();
            var t = K;
            K |= 1;
            var r = vt.transition,
                n = X;
            try {
                if (vt.transition = null, X = 1, e) return e()
            } finally {
                X = n, vt.transition = r, K = t, !(K & 6) && zr()
            }
        }

        function Nf() {
            nt = qn.current, te(qn)
        }

        function cn(e, t) {
            e.finishedWork = null, e.finishedLanes = 0;
            var r = e.timeoutHandle;
            if (r !== -1 && (e.timeoutHandle = -1, R5(r)), me !== null)
                for (r = me.return; r !== null;) {
                    var n = r;
                    switch (df(n), n.tag) {
                        case 1:
                            n = n.type.childContextTypes, n != null && ls();
                            break;
                        case 3:
                            uo(), te(Ye), te(Ie), Cf();
                            break;
                        case 5:
                            Sf(n);
                            break;
                        case 4:
                            uo();
                            break;
                        case 13:
                            te(se);
                            break;
                        case 19:
                            te(se);
                            break;
                        case 10:
                            hf(n.type._context);
                            break;
                        case 22:
                        case 23:
                            Nf()
                    }
                    r = r.return
                }
            if (be = e, me = e = jr(e.current, null), Te = nt = t, ye = 0, Oi = null, Rf = Ns = gn = 0, Qe = ui = null, ln !== null) {
                for (t = 0; t < ln.length; t++)
                    if (r = ln[t], n = r.interleaved, n !== null) {
                        r.interleaved = null;
                        var o = n.next,
                            i = r.pending;
                        if (i !== null) {
                            var a = i.next;
                            i.next = o, n.next = a
                        }
                        r.pending = n
                    } ln = null
            }
            return e
        }

        function U1(e, t) {
            do {
                var r = me;
                try {
                    if (gf(), Ga.current = vs, hs) {
                        for (var n = le.memoizedState; n !== null;) {
                            var o = n.queue;
                            o !== null && (o.pending = null), n = n.next
                        }
                        hs = !1
                    }
                    if (mn = 0, we = ve = le = null, si = !1, Ei = 0, Tf.current = null, r === null || r.return === null) {
                        ye = 1, Oi = t, me = null;
                        break
                    }
                    e: {
                        var i = e,
                            a = r.return,
                            s = r,
                            l = t;
                        if (t = Te, s.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
                            var u = l,
                                f = s,
                                c = f.tag;
                            if (!(f.mode & 1) && (c === 0 || c === 11 || c === 15)) {
                                var p = f.alternate;
                                p ? (f.updateQueue = p.updateQueue, f.memoizedState = p.memoizedState, f.lanes = p.lanes) : (f.updateQueue = null, f.memoizedState = null)
                            }
                            var g = Dm(a);
                            if (g !== null) {
                                g.flags &= -257, Fm(g, a, s, i, t), g.mode & 1 && Im(i, u, t), t = g, l = u;
                                var v = t.updateQueue;
                                if (v === null) {
                                    var x = new Set;
                                    x.add(l), t.updateQueue = x
                                } else v.add(l);
                                break e
                            } else {
                                if (!(t & 1)) {
                                    Im(i, u, t), Lf();
                                    break e
                                }
                                l = Error(N(426))
                            }
                        } else if (ie && s.mode & 1) {
                            var P = Dm(a);
                            if (P !== null) {
                                !(P.flags & 65536) && (P.flags |= 256), Fm(P, a, s, i, t), pf(co(l, s));
                                break e
                            }
                        }
                        i = l = co(l, s),
                        ye !== 4 && (ye = 2),
                        ui === null ? ui = [i] : ui.push(i),
                        i = a;do {
                            switch (i.tag) {
                                case 3:
                                    i.flags |= 65536, t &= -t, i.lanes |= t;
                                    var m = P1(i, l, t);
                                    Rm(i, m);
                                    break e;
                                case 1:
                                    s = l;
                                    var d = i.type,
                                        h = i.stateNode;
                                    if (!(i.flags & 128) && (typeof d.getDerivedStateFromError == "function" || h !== null && typeof h.componentDidCatch == "function" && (Nr === null || !Nr.has(h)))) {
                                        i.flags |= 65536, t &= -t, i.lanes |= t;
                                        var y = O1(i, s, t);
                                        Rm(i, y);
                                        break e
                                    }
                            }
                            i = i.return
                        } while (i !== null)
                    }
                    K1(r)
                } catch (S) {
                    t = S, me === r && r !== null && (me = r = r.return);
                    continue
                }
                break
            } while (1)
        }

        function W1() {
            var e = ys.current;
            return ys.current = vs, e === null ? vs : e
        }

        function Lf() {
            (ye === 0 || ye === 3 || ye === 2) && (ye = 4), be === null || !(gn & 268435455) && !(Ns & 268435455) || Er(be, Te)
        }

        function Cs(e, t) {
            var r = K;
            K |= 2;
            var n = W1();
            (be !== e || Te !== t) && (er = null, cn(e, t));
            do try {
                e6();
                break
            } catch (o) {
                U1(e, o)
            }
            while (1);
            if (gf(), K = r, ys.current = n, me !== null) throw Error(N(261));
            return be = null, Te = 0, ye
        }

        function e6() {
            for (; me !== null;) V1(me)
        }

        function t6() {
            for (; me !== null && !T2();) V1(me)
        }

        function V1(e) {
            var t = Q1(e.alternate, e, nt);
            e.memoizedProps = e.pendingProps, t === null ? K1(e) : me = t, Tf.current = null
        }

        function K1(e) {
            var t = e;
            do {
                var r = t.alternate;
                if (e = t.return, t.flags & 32768) {
                    if (r = Q5(r, t), r !== null) {
                        r.flags &= 32767, me = r;
                        return
                    }
                    if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
                    else {
                        ye = 6, me = null;
                        return
                    }
                } else if (r = G5(r, t, nt), r !== null) {
                    me = r;
                    return
                }
                if (t = t.sibling, t !== null) {
                    me = t;
                    return
                }
                me = t = e
            } while (t !== null);
            ye === 0 && (ye = 5)
        }

        function an(e, t, r) {
            var n = X,
                o = vt.transition;
            try {
                vt.transition = null, X = 1, r6(e, t, r, n)
            } finally {
                vt.transition = o, X = n
            }
            return null
        }

        function r6(e, t, r, n) {
            do oo(); while (Pr !== null);
            if (K & 6) throw Error(N(327));
            r = e.finishedWork;
            var o = e.finishedLanes;
            if (r === null) return null;
            if (e.finishedWork = null, e.finishedLanes = 0, r === e.current) throw Error(N(177));
            e.callbackNode = null, e.callbackPriority = 0;
            var i = r.lanes | r.childLanes;
            if (F2(e, i), e === be && (me = be = null, Te = 0), !(r.subtreeFlags & 2064) && !(r.flags & 2064) || Ba || (Ba = !0, X1(rs, function() {
                    return oo(), null
                })), i = (r.flags & 15990) !== 0, r.subtreeFlags & 15990 || i) {
                i = vt.transition, vt.transition = null;
                var a = X;
                X = 1;
                var s = K;
                K |= 4, Tf.current = null, Y5(e, r), $1(r, e), E5(Ec), os = !!bc, Ec = bc = null, e.current = r, Z5(r, e, o), R2(), K = s, X = a, vt.transition = i
            } else e.current = r;
            if (Ba && (Ba = !1, Pr = e, Ss = o), i = e.pendingLanes, i === 0 && (Nr = null), N2(r.stateNode, n), qe(e, fe()), t !== null)
                for (n = e.onRecoverableError, r = 0; r < t.length; r++) o = t[r], n(o.value, {
                    componentStack: o.stack,
                    digest: o.digest
                });
            if (xs) throw xs = !1, e = Wc, Wc = null, e;
            return Ss & 1 && e.tag !== 0 && oo(), i = e.pendingLanes, i & 1 ? e === Vc ? ci++ : (ci = 0, Vc = e) : ci = 0, zr(), null
        }

        function oo() {
            if (Pr !== null) {
                var e = kg(Ss),
                    t = vt.transition,
                    r = X;
                try {
                    if (vt.transition = null, X = 16 > e ? 16 : e, Pr === null) var n = !1;
                    else {
                        if (e = Pr, Pr = null, Ss = 0, K & 6) throw Error(N(331));
                        var o = K;
                        for (K |= 4, I = e.current; I !== null;) {
                            var i = I,
                                a = i.child;
                            if (I.flags & 16) {
                                var s = i.deletions;
                                if (s !== null) {
                                    for (var l = 0; l < s.length; l++) {
                                        var u = s[l];
                                        for (I = u; I !== null;) {
                                            var f = I;
                                            switch (f.tag) {
                                                case 0:
                                                case 11:
                                                case 15:
                                                    li(8, f, i)
                                            }
                                            var c = f.child;
                                            if (c !== null) c.return = f, I = c;
                                            else
                                                for (; I !== null;) {
                                                    f = I;
                                                    var p = f.sibling,
                                                        g = f.return;
                                                    if (D1(f), f === u) {
                                                        I = null;
                                                        break
                                                    }
                                                    if (p !== null) {
                                                        p.return = g, I = p;
                                                        break
                                                    }
                                                    I = g
                                                }
                                        }
                                    }
                                    var v = i.alternate;
                                    if (v !== null) {
                                        var x = v.child;
                                        if (x !== null) {
                                            v.child = null;
                                            do {
                                                var P = x.sibling;
                                                x.sibling = null, x = P
                                            } while (x !== null)
                                        }
                                    }
                                    I = i
                                }
                            }
                            if (i.subtreeFlags & 2064 && a !== null) a.return = i, I = a;
                            else e: for (; I !== null;) {
                                if (i = I, i.flags & 2048) switch (i.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        li(9, i, i.return)
                                }
                                var m = i.sibling;
                                if (m !== null) {
                                    m.return = i.return, I = m;
                                    break e
                                }
                                I = i.return
                            }
                        }
                        var d = e.current;
                        for (I = d; I !== null;) {
                            a = I;
                            var h = a.child;
                            if (a.subtreeFlags & 2064 && h !== null) h.return = a, I = h;
                            else e: for (a = d; I !== null;) {
                                if (s = I, s.flags & 2048) try {
                                    switch (s.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            _s(9, s)
                                    }
                                } catch (S) {
                                    ce(s, s.return, S)
                                }
                                if (s === a) {
                                    I = null;
                                    break e
                                }
                                var y = s.sibling;
                                if (y !== null) {
                                    y.return = s.return, I = y;
                                    break e
                                }
                                I = s.return
                            }
                        }
                        if (K = o, zr(), Wt && typeof Wt.onPostCommitFiberRoot == "function") try {
                            Wt.onPostCommitFiberRoot(bs, e)
                        } catch {}
                        n = !0
                    }
                    return n
                } finally {
                    X = r, vt.transition = t
                }
            }
            return !1
        }

        function Zm(e, t, r) {
            t = co(r, t), t = P1(e, t, 1), e = _r(e, t, 1), t = Ue(), e !== null && (Ti(e, 1, t), qe(e, t))
        }

        function ce(e, t, r) {
            if (e.tag === 3) Zm(e, e, r);
            else
                for (; t !== null;) {
                    if (t.tag === 3) {
                        Zm(t, e, r);
                        break
                    } else if (t.tag === 1) {
                        var n = t.stateNode;
                        if (typeof t.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (Nr === null || !Nr.has(n))) {
                            e = co(r, e), e = O1(t, e, 1), t = _r(t, e, 1), e = Ue(), t !== null && (Ti(t, 1, e), qe(t, e));
                            break
                        }
                    }
                    t = t.return
                }
        }

        function n6(e, t, r) {
            var n = e.pingCache;
            n !== null && n.delete(t), t = Ue(), e.pingedLanes |= e.suspendedLanes & r, be === e && (Te & r) === r && (ye === 4 || ye === 3 && (Te & 130023424) === Te && 500 > fe() - Af ? cn(e, 0) : Rf |= r), qe(e, t)
        }

        function G1(e, t) {
            t === 0 && (e.mode & 1 ? (t = Ta, Ta <<= 1, !(Ta & 130023424) && (Ta = 4194304)) : t = 1);
            var r = Ue();
            e = sr(e, t), e !== null && (Ti(e, t, r), qe(e, r))
        }

        function o6(e) {
            var t = e.memoizedState,
                r = 0;
            t !== null && (r = t.retryLane), G1(e, r)
        }

        function i6(e, t) {
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
                    throw Error(N(314))
            }
            n !== null && n.delete(t), G1(e, r)
        }
        var Q1;
        Q1 = function(e, t, r) {
            if (e !== null)
                if (e.memoizedProps !== t.pendingProps || Ye.current) Xe = !0;
                else {
                    if (!(e.lanes & r) && !(t.flags & 128)) return Xe = !1, K5(e, t, r);
                    Xe = !!(e.flags & 131072)
                }
            else Xe = !1, ie && t.flags & 1048576 && Zg(t, fs, t.index);
            switch (t.lanes = 0, t.tag) {
                case 2:
                    var n = t.type;
                    Xa(e, t), e = t.pendingProps;
                    var o = ao(t, Ie.current);
                    no(t, r), o = bf(null, t, n, e, o, r);
                    var i = Ef();
                    return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ze(n) ? (i = !0, us(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, yf(t), o.updater = Rs, t.stateNode = o, o._reactInternals = t, Lc(t, n, e, r), t = Ic(null, t, n, !0, i, r)) : (t.tag = 0, ie && i && ff(t), Be(null, t, o, r), t = t.child), t;
                case 16:
                    n = t.elementType;
                    e: {
                        switch (Xa(e, t), e = t.pendingProps, o = n._init, n = o(n._payload), t.type = n, o = t.tag = s6(n), e = Tt(n, e), o) {
                            case 0:
                                t = Mc(null, t, n, e, r);
                                break e;
                            case 1:
                                t = Hm(null, t, n, e, r);
                                break e;
                            case 11:
                                t = zm(null, t, n, e, r);
                                break e;
                            case 14:
                                t = $m(null, t, n, Tt(n.type, e), r);
                                break e
                        }
                        throw Error(N(306, n, ""))
                    }
                    return t;
                case 0:
                    return n = t.type, o = t.pendingProps, o = t.elementType === n ? o : Tt(n, o), Mc(e, t, n, o, r);
                case 1:
                    return n = t.type, o = t.pendingProps, o = t.elementType === n ? o : Tt(n, o), Hm(e, t, n, o, r);
                case 3:
                    e: {
                        if (_1(t), e === null) throw Error(N(387));n = t.pendingProps,
                        i = t.memoizedState,
                        o = i.element,
                        t1(e, t),
                        ms(t, n, null, r);
                        var a = t.memoizedState;
                        if (n = a.element, i.isDehydrated)
                            if (i = {
                                    element: n,
                                    isDehydrated: !1,
                                    cache: a.cache,
                                    pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
                                    transitions: a.transitions
                                }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
                                o = co(Error(N(423)), t), t = Bm(e, t, n, r, o);
                                break e
                            } else if (n !== o) {
                            o = co(Error(N(424)), t), t = Bm(e, t, n, r, o);
                            break e
                        } else
                            for (ot = Ar(t.stateNode.containerInfo.firstChild), it = t, ie = !0, At = null, r = i1(t, null, n, r), t.child = r; r;) r.flags = r.flags & -3 | 4096, r = r.sibling;
                        else {
                            if (so(), n === o) {
                                t = lr(e, t, r);
                                break e
                            }
                            Be(e, t, n, r)
                        }
                        t = t.child
                    }
                    return t;
                case 5:
                    return a1(t), e === null && Ac(t), n = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, a = o.children, kc(n, o) ? a = null : i !== null && kc(n, i) && (t.flags |= 32), A1(e, t), Be(e, t, a, r), t.child;
                case 6:
                    return e === null && Ac(t), null;
                case 13:
                    return N1(e, t, r);
                case 4:
                    return xf(t, t.stateNode.containerInfo), n = t.pendingProps, e === null ? t.child = lo(t, null, n, r) : Be(e, t, n, r), t.child;
                case 11:
                    return n = t.type, o = t.pendingProps, o = t.elementType === n ? o : Tt(n, o), zm(e, t, n, o, r);
                case 7:
                    return Be(e, t, t.pendingProps, r), t.child;
                case 8:
                    return Be(e, t, t.pendingProps.children, r), t.child;
                case 12:
                    return Be(e, t, t.pendingProps.children, r), t.child;
                case 10:
                    e: {
                        if (n = t.type._context, o = t.pendingProps, i = t.memoizedProps, a = o.value, J(ds, n._currentValue), n._currentValue = a, i !== null)
                            if (Lt(i.value, a)) {
                                if (i.children === o.children && !Ye.current) {
                                    t = lr(e, t, r);
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
                                                    l = or(-1, r & -r), l.tag = 2;
                                                    var u = i.updateQueue;
                                                    if (u !== null) {
                                                        u = u.shared;
                                                        var f = u.pending;
                                                        f === null ? l.next = l : (l.next = f.next, f.next = l), u.pending = l
                                                    }
                                                }
                                                i.lanes |= r, l = i.alternate, l !== null && (l.lanes |= r), _c(i.return, r, t), s.lanes |= r;
                                                break
                                            }
                                            l = l.next
                                        }
                                    } else if (i.tag === 10) a = i.type === t.type ? null : i.child;
                                    else if (i.tag === 18) {
                                        if (a = i.return, a === null) throw Error(N(341));
                                        a.lanes |= r, s = a.alternate, s !== null && (s.lanes |= r), _c(a, r, t), a = i.sibling
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
                        Be(e, t, o.children, r),
                        t = t.child
                    }
                    return t;
                case 9:
                    return o = t.type, n = t.pendingProps.children, no(t, r), o = yt(o), n = n(o), t.flags |= 1, Be(e, t, n, r), t.child;
                case 14:
                    return n = t.type, o = Tt(n, t.pendingProps), o = Tt(n.type, o), $m(e, t, n, o, r);
                case 15:
                    return T1(e, t, t.type, t.pendingProps, r);
                case 17:
                    return n = t.type, o = t.pendingProps, o = t.elementType === n ? o : Tt(n, o), Xa(e, t), t.tag = 1, Ze(n) ? (e = !0, us(t)) : e = !1, no(t, r), n1(t, n, o), Lc(t, n, o, r), Ic(null, t, n, !0, e, r);
                case 19:
                    return L1(e, t, r);
                case 22:
                    return R1(e, t, r)
            }
            throw Error(N(156, t.tag))
        };

        function X1(e, t) {
            return Cg(e, t)
        }

        function a6(e, t, r, n) {
            this.tag = e, this.key = r, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
        }

        function ht(e, t, r, n) {
            return new a6(e, t, r, n)
        }

        function jf(e) {
            return e = e.prototype, !(!e || !e.isReactComponent)
        }

        function s6(e) {
            if (typeof e == "function") return jf(e) ? 1 : 0;
            if (e != null) {
                if (e = e.$$typeof, e === qc) return 11;
                if (e === Jc) return 14
            }
            return 2
        }

        function jr(e, t) {
            var r = e.alternate;
            return r === null ? (r = ht(e.tag, t, e.key, e.mode), r.elementType = e.elementType, r.type = e.type, r.stateNode = e.stateNode, r.alternate = e, e.alternate = r) : (r.pendingProps = t, r.type = e.type, r.flags = 0, r.subtreeFlags = 0, r.deletions = null), r.flags = e.flags & 14680064, r.childLanes = e.childLanes, r.lanes = e.lanes, r.child = e.child, r.memoizedProps = e.memoizedProps, r.memoizedState = e.memoizedState, r.updateQueue = e.updateQueue, t = e.dependencies, r.dependencies = t === null ? null : {
                lanes: t.lanes,
                firstContext: t.firstContext
            }, r.sibling = e.sibling, r.index = e.index, r.ref = e.ref, r
        }

        function qa(e, t, r, n, o, i) {
            var a = 2;
            if (n = e, typeof e == "function") jf(e) && (a = 1);
            else if (typeof e == "string") a = 5;
            else e: switch (e) {
                case Bn:
                    return fn(r.children, o, i, t);
                case Zc:
                    a = 8, o |= 8;
                    break;
                case nc:
                    return e = ht(12, r, t, o | 2), e.elementType = nc, e.lanes = i, e;
                case oc:
                    return e = ht(13, r, t, o), e.elementType = oc, e.lanes = i, e;
                case ic:
                    return e = ht(19, r, t, o), e.elementType = ic, e.lanes = i, e;
                case og:
                    return Ls(r, o, i, t);
                default:
                    if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                        case rg:
                            a = 10;
                            break e;
                        case ng:
                            a = 9;
                            break e;
                        case qc:
                            a = 11;
                            break e;
                        case Jc:
                            a = 14;
                            break e;
                        case Cr:
                            a = 16, n = null;
                            break e
                    }
                    throw Error(N(130, e == null ? e : typeof e, ""))
            }
            return t = ht(a, r, t, o), t.elementType = e, t.type = n, t.lanes = i, t
        }

        function fn(e, t, r, n) {
            return e = ht(7, e, n, t), e.lanes = r, e
        }

        function Ls(e, t, r, n) {
            return e = ht(22, e, n, t), e.elementType = og, e.lanes = r, e.stateNode = {
                isHidden: !1
            }, e
        }

        function ec(e, t, r) {
            return e = ht(6, e, null, t), e.lanes = r, e
        }

        function tc(e, t, r) {
            return t = ht(4, e.children !== null ? e.children : [], e.key, t), t.lanes = r, t.stateNode = {
                containerInfo: e.containerInfo,
                pendingChildren: null,
                implementation: e.implementation
            }, t
        }

        function l6(e, t, r, n, o) {
            this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Fu(0), this.expirationTimes = Fu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Fu(0), this.identifierPrefix = n, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null
        }

        function Mf(e, t, r, n, o, i, a, s, l) {
            return e = new l6(e, t, r, s, l), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = ht(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = {
                element: n,
                isDehydrated: r,
                cache: null,
                transitions: null,
                pendingSuspenseBoundaries: null
            }, yf(i), e
        }

        function u6(e, t, r) {
            var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
            return {
                $$typeof: Hn,
                key: n == null ? null : "" + n,
                children: e,
                containerInfo: t,
                implementation: r
            }
        }

        function Y1(e) {
            if (!e) return Ir;
            e = e._reactInternals;
            e: {
                if (yn(e) !== e || e.tag !== 1) throw Error(N(170));
                var t = e;do {
                    switch (t.tag) {
                        case 3:
                            t = t.stateNode.context;
                            break e;
                        case 1:
                            if (Ze(t.type)) {
                                t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                                break e
                            }
                    }
                    t = t.return
                } while (t !== null);
                throw Error(N(171))
            }
            if (e.tag === 1) {
                var r = e.type;
                if (Ze(r)) return Xg(e, r, t)
            }
            return t
        }

        function Z1(e, t, r, n, o, i, a, s, l) {
            return e = Mf(r, n, !0, e, o, i, a, s, l), e.context = Y1(null), r = e.current, n = Ue(), o = Lr(r), i = or(n, o), i.callback = t ?? null, _r(r, i, o), e.current.lanes = o, Ti(e, o, n), qe(e, n), e
        }

        function js(e, t, r, n) {
            var o = t.current,
                i = Ue(),
                a = Lr(o);
            return r = Y1(r), t.context === null ? t.context = r : t.pendingContext = r, t = or(i, a), t.payload = {
                element: e
            }, n = n === void 0 ? null : n, n !== null && (t.callback = n), e = _r(o, t, a), e !== null && (Nt(e, o, a, i), Ka(e, o, a)), a
        }

        function ws(e) {
            if (e = e.current, !e.child) return null;
            switch (e.child.tag) {
                case 5:
                    return e.child.stateNode;
                default:
                    return e.child.stateNode
            }
        }

        function qm(e, t) {
            if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
                var r = e.retryLane;
                e.retryLane = r !== 0 && r < t ? r : t
            }
        }

        function If(e, t) {
            qm(e, t), (e = e.alternate) && qm(e, t)
        }

        function c6() {
            return null
        }
        var q1 = typeof reportError == "function" ? reportError : function(e) {};

        function Df(e) {
            this._internalRoot = e
        }
        Ms.prototype.render = Df.prototype.render = function(e) {
            var t = this._internalRoot;
            if (t === null) throw Error(N(409));
            js(e, t, null, null)
        };
        Ms.prototype.unmount = Df.prototype.unmount = function() {
            var e = this._internalRoot;
            if (e !== null) {
                this._internalRoot = null;
                var t = e.containerInfo;
                hn(function() {
                    js(null, e, null, null)
                }), t[ar] = null
            }
        };

        function Ms(e) {
            this._internalRoot = e
        }
        Ms.prototype.unstable_scheduleHydration = function(e) {
            if (e) {
                var t = Tg();
                e = {
                    blockedOn: null,
                    target: e,
                    priority: t
                };
                for (var r = 0; r < br.length && t !== 0 && t < br[r].priority; r++);
                br.splice(r, 0, e), r === 0 && Ag(e)
            }
        };

        function Ff(e) {
            return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
        }

        function Is(e) {
            return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
        }

        function Jm() {}

        function f6(e, t, r, n, o) {
            if (o) {
                if (typeof n == "function") {
                    var i = n;
                    n = function() {
                        var u = ws(a);
                        i.call(u)
                    }
                }
                var a = Z1(t, n, e, 0, null, !1, !1, "", Jm);
                return e._reactRootContainer = a, e[ar] = a.current, xi(e.nodeType === 8 ? e.parentNode : e), hn(), a
            }
            for (; o = e.lastChild;) e.removeChild(o);
            if (typeof n == "function") {
                var s = n;
                n = function() {
                    var u = ws(l);
                    s.call(u)
                }
            }
            var l = Mf(e, 0, !1, null, null, !1, !1, "", Jm);
            return e._reactRootContainer = l, e[ar] = l.current, xi(e.nodeType === 8 ? e.parentNode : e), hn(function() {
                js(t, l, r, n)
            }), l
        }

        function Ds(e, t, r, n, o) {
            var i = r._reactRootContainer;
            if (i) {
                var a = i;
                if (typeof o == "function") {
                    var s = o;
                    o = function() {
                        var l = ws(a);
                        s.call(l)
                    }
                }
                js(t, a, e, o)
            } else a = f6(r, t, e, o, n);
            return ws(a)
        }
        Pg = function(e) {
            switch (e.tag) {
                case 3:
                    var t = e.stateNode;
                    if (t.current.memoizedState.isDehydrated) {
                        var r = ei(t.pendingLanes);
                        r !== 0 && (rf(t, r | 1), qe(t, fe()), !(K & 6) && (fo = fe() + 500, zr()))
                    }
                    break;
                case 13:
                    hn(function() {
                        var n = sr(e, 1);
                        if (n !== null) {
                            var o = Ue();
                            Nt(n, e, 1, o)
                        }
                    }), If(e, 1)
            }
        };
        nf = function(e) {
            if (e.tag === 13) {
                var t = sr(e, 134217728);
                if (t !== null) {
                    var r = Ue();
                    Nt(t, e, 134217728, r)
                }
                If(e, 134217728)
            }
        };
        Og = function(e) {
            if (e.tag === 13) {
                var t = Lr(e),
                    r = sr(e, t);
                if (r !== null) {
                    var n = Ue();
                    Nt(r, e, t, n)
                }
                If(e, t)
            }
        };
        Tg = function() {
            return X
        };
        Rg = function(e, t) {
            var r = X;
            try {
                return X = e, t()
            } finally {
                X = r
            }
        };
        gc = function(e, t, r) {
            switch (t) {
                case "input":
                    if (lc(e, r), t = r.name, r.type === "radio" && t != null) {
                        for (r = e; r.parentNode;) r = r.parentNode;
                        for (r = r.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < r.length; t++) {
                            var n = r[t];
                            if (n !== e && n.form === e.form) {
                                var o = Os(n);
                                if (!o) throw Error(N(90));
                                ag(n), lc(n, o)
                            }
                        }
                    }
                    break;
                case "textarea":
                    lg(e, r);
                    break;
                case "select":
                    t = r.value, t != null && Jn(e, !!r.multiple, t, !1)
            }
        };
        gg = _f;
        hg = hn;
        var d6 = {
                usingClientEntryPoint: !1,
                Events: [Ai, Kn, Os, pg, mg, _f]
            },
            Yo = {
                findFiberByHostInstance: sn,
                bundleType: 0,
                version: "18.2.0",
                rendererPackageName: "react-dom"
            },
            p6 = {
                bundleType: Yo.bundleType,
                version: Yo.version,
                rendererPackageName: Yo.rendererPackageName,
                rendererConfig: Yo.rendererConfig,
                overrideHookState: null,
                overrideHookStateDeletePath: null,
                overrideHookStateRenamePath: null,
                overrideProps: null,
                overridePropsDeletePath: null,
                overridePropsRenamePath: null,
                setErrorHandler: null,
                setSuspenseHandler: null,
                scheduleUpdate: null,
                currentDispatcherRef: ur.ReactCurrentDispatcher,
                findHostInstanceByFiber: function(e) {
                    return e = xg(e), e === null ? null : e.stateNode
                },
                findFiberByHostInstance: Yo.findFiberByHostInstance || c6,
                findHostInstancesForRefresh: null,
                scheduleRefresh: null,
                scheduleRoot: null,
                setRefreshHandler: null,
                getCurrentFiber: null,
                reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
            };
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && (Zo = __REACT_DEVTOOLS_GLOBAL_HOOK__, !Zo.isDisabled && Zo.supportsFiber)) try {
            bs = Zo.inject(p6), Wt = Zo
        } catch {}
        var Zo;
        lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = d6;
        lt.createPortal = function(e, t) {
            var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
            if (!Ff(t)) throw Error(N(200));
            return u6(e, t, null, r)
        };
        lt.createRoot = function(e, t) {
            if (!Ff(e)) throw Error(N(299));
            var r = !1,
                n = "",
                o = q1;
            return t != null && (t.unstable_strictMode === !0 && (r = !0), t.identifierPrefix !== void 0 && (n = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = Mf(e, 1, !1, null, null, r, !1, n, o), e[ar] = t.current, xi(e.nodeType === 8 ? e.parentNode : e), new Df(t)
        };
        lt.findDOMNode = function(e) {
            if (e == null) return null;
            if (e.nodeType === 1) return e;
            var t = e._reactInternals;
            if (t === void 0) throw typeof e.render == "function" ? Error(N(188)) : (e = Object.keys(e).join(","), Error(N(268, e)));
            return e = xg(t), e = e === null ? null : e.stateNode, e
        };
        lt.flushSync = function(e) {
            return hn(e)
        };
        lt.hydrate = function(e, t, r) {
            if (!Is(t)) throw Error(N(200));
            return Ds(null, e, t, !0, r)
        };
        lt.hydrateRoot = function(e, t, r) {
            if (!Ff(e)) throw Error(N(405));
            var n = r != null && r.hydratedSources || null,
                o = !1,
                i = "",
                a = q1;
            if (r != null && (r.unstable_strictMode === !0 && (o = !0), r.identifierPrefix !== void 0 && (i = r.identifierPrefix), r.onRecoverableError !== void 0 && (a = r.onRecoverableError)), t = Z1(t, null, e, 1, r ?? null, o, !1, i, a), e[ar] = t.current, xi(e), n)
                for (e = 0; e < n.length; e++) r = n[e], o = r._getVersion, o = o(r._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [r, o] : t.mutableSourceEagerHydrationData.push(r, o);
            return new Ms(t)
        };
        lt.render = function(e, t, r) {
            if (!Is(t)) throw Error(N(200));
            return Ds(null, e, t, !1, r)
        };
        lt.unmountComponentAtNode = function(e) {
            if (!Is(e)) throw Error(N(40));
            return e._reactRootContainer ? (hn(function() {
                Ds(null, null, e, !1, function() {
                    e._reactRootContainer = null, e[ar] = null
                })
            }), !0) : !1
        };
        lt.unstable_batchedUpdates = _f;
        lt.unstable_renderSubtreeIntoContainer = function(e, t, r, n) {
            if (!Is(r)) throw Error(N(200));
            if (e == null || e._reactInternals === void 0) throw Error(N(38));
            return Ds(e, t, r, !1, n)
        };
        lt.version = "18.2.0-next-9e3b772b8-20220608"
    });
    var Fs = Ge((aS, th) => {
        "use strict";

        function eh() {
            if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(eh)
            } catch {}
        }
        eh(), th.exports = J1()
    });
    var nh = Ge(zf => {
        "use strict";
        var rh = Fs();
        zf.createRoot = rh.createRoot, zf.hydrateRoot = rh.hydrateRoot;
        var sS
    });
    var Ph = Ge((d8, kh) => {
        kh.exports = {
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
    var Xt = Ge((XC, Qs) => {
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
            typeof Qs < "u" && Qs.exports ? (r.default = r, Qs.exports = r) : typeof define == "function" && typeof define.amd == "object" && define.amd ? define("classnames", [], function() {
                return r
            }) : window.classNames = r
        })()
    });
    var Hh = Ge(Y => {
        "use strict";
        var Ee = typeof Symbol == "function" && Symbol.for,
            Zf = Ee ? Symbol.for("react.element") : 60103,
            qf = Ee ? Symbol.for("react.portal") : 60106,
            Xs = Ee ? Symbol.for("react.fragment") : 60107,
            Ys = Ee ? Symbol.for("react.strict_mode") : 60108,
            Zs = Ee ? Symbol.for("react.profiler") : 60114,
            qs = Ee ? Symbol.for("react.provider") : 60109,
            Js = Ee ? Symbol.for("react.context") : 60110,
            Jf = Ee ? Symbol.for("react.async_mode") : 60111,
            el = Ee ? Symbol.for("react.concurrent_mode") : 60111,
            tl = Ee ? Symbol.for("react.forward_ref") : 60112,
            rl = Ee ? Symbol.for("react.suspense") : 60113,
            rx = Ee ? Symbol.for("react.suspense_list") : 60120,
            nl = Ee ? Symbol.for("react.memo") : 60115,
            ol = Ee ? Symbol.for("react.lazy") : 60116,
            nx = Ee ? Symbol.for("react.block") : 60121,
            ox = Ee ? Symbol.for("react.fundamental") : 60117,
            ix = Ee ? Symbol.for("react.responder") : 60118,
            ax = Ee ? Symbol.for("react.scope") : 60119;

        function ut(e) {
            if (typeof e == "object" && e !== null) {
                var t = e.$$typeof;
                switch (t) {
                    case Zf:
                        switch (e = e.type, e) {
                            case Jf:
                            case el:
                            case Xs:
                            case Zs:
                            case Ys:
                            case rl:
                                return e;
                            default:
                                switch (e = e && e.$$typeof, e) {
                                    case Js:
                                    case tl:
                                    case ol:
                                    case nl:
                                    case qs:
                                        return e;
                                    default:
                                        return t
                                }
                        }
                    case qf:
                        return t
                }
            }
        }

        function $h(e) {
            return ut(e) === el
        }
        Y.AsyncMode = Jf;
        Y.ConcurrentMode = el;
        Y.ContextConsumer = Js;
        Y.ContextProvider = qs;
        Y.Element = Zf;
        Y.ForwardRef = tl;
        Y.Fragment = Xs;
        Y.Lazy = ol;
        Y.Memo = nl;
        Y.Portal = qf;
        Y.Profiler = Zs;
        Y.StrictMode = Ys;
        Y.Suspense = rl;
        Y.isAsyncMode = function(e) {
            return $h(e) || ut(e) === Jf
        };
        Y.isConcurrentMode = $h;
        Y.isContextConsumer = function(e) {
            return ut(e) === Js
        };
        Y.isContextProvider = function(e) {
            return ut(e) === qs
        };
        Y.isElement = function(e) {
            return typeof e == "object" && e !== null && e.$$typeof === Zf
        };
        Y.isForwardRef = function(e) {
            return ut(e) === tl
        };
        Y.isFragment = function(e) {
            return ut(e) === Xs
        };
        Y.isLazy = function(e) {
            return ut(e) === ol
        };
        Y.isMemo = function(e) {
            return ut(e) === nl
        };
        Y.isPortal = function(e) {
            return ut(e) === qf
        };
        Y.isProfiler = function(e) {
            return ut(e) === Zs
        };
        Y.isStrictMode = function(e) {
            return ut(e) === Ys
        };
        Y.isSuspense = function(e) {
            return ut(e) === rl
        };
        Y.isValidElementType = function(e) {
            return typeof e == "string" || typeof e == "function" || e === Xs || e === el || e === Zs || e === Ys || e === rl || e === rx || typeof e == "object" && e !== null && (e.$$typeof === ol || e.$$typeof === nl || e.$$typeof === qs || e.$$typeof === Js || e.$$typeof === tl || e.$$typeof === ox || e.$$typeof === ix || e.$$typeof === ax || e.$$typeof === nx)
        };
        Y.typeOf = ut
    });
    var ed = Ge((qC, Bh) => {
        "use strict";
        Bh.exports = Hh()
    });
    var Fo = Ge((yp, _y) => {
        (function(e, t) {
            if (typeof define == "function" && define.amd) define("webextension-polyfill", ["module"], t);
            else if (typeof yp < "u") t(_y);
            else {
                var r = {
                    exports: {}
                };
                t(r), e.browser = r.exports
            }
        })(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : yp, function(e) {
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
                            constructor(S, w = void 0) {
                                super(w), this.createItem = S
                            }
                            get(S) {
                                return this.has(S) || this.set(S, this.createItem(S)), super.get(S)
                            }
                        }
                        let a = y => y && typeof y == "object" && typeof y.then == "function",
                            s = (y, S) => (...w) => {
                                n.runtime.lastError ? y.reject(new Error(n.runtime.lastError.message)) : S.singleCallbackArg || w.length <= 1 && S.singleCallbackArg !== !1 ? y.resolve(w[0]) : y.resolve(w)
                            },
                            l = y => y == 1 ? "argument" : "arguments",
                            u = (y, S) => function(C, ...O) {
                                if (O.length < S.minArgs) throw new Error(`Expected at least ${S.minArgs} ${l(S.minArgs)} for ${y}(), got ${O.length}`);
                                if (O.length > S.maxArgs) throw new Error(`Expected at most ${S.maxArgs} ${l(S.maxArgs)} for ${y}(), got ${O.length}`);
                                return new Promise((A, k) => {
                                    if (S.fallbackToNoCallback) try {
                                        C[y](...O, s({
                                            resolve: A,
                                            reject: k
                                        }, S))
                                    } catch {
                                        C[y](...O), S.fallbackToNoCallback = !1, S.noCallback = !0, A()
                                    } else S.noCallback ? (C[y](...O), A()) : C[y](...O, s({
                                        resolve: A,
                                        reject: k
                                    }, S))
                                })
                            },
                            f = (y, S, w) => new Proxy(S, {
                                apply(C, O, A) {
                                    return w.call(O, y, ...A)
                                }
                            }),
                            c = Function.call.bind(Object.prototype.hasOwnProperty),
                            p = (y, S = {}, w = {}) => {
                                let C = Object.create(null),
                                    O = {
                                        has(k, L) {
                                            return L in y || L in C
                                        },
                                        get(k, L, E) {
                                            if (L in C) return C[L];
                                            if (!(L in y)) return;
                                            let b = y[L];
                                            if (typeof b == "function")
                                                if (typeof S[L] == "function") b = f(y, y[L], S[L]);
                                                else if (c(w, L)) {
                                                let T = u(L, w[L]);
                                                b = f(y, y[L], T)
                                            } else b = b.bind(y);
                                            else if (typeof b == "object" && b !== null && (c(S, L) || c(w, L))) b = p(b, S[L], w[L]);
                                            else if (c(w, "*")) b = p(b, S[L], w["*"]);
                                            else return Object.defineProperty(C, L, {
                                                configurable: !0,
                                                enumerable: !0,
                                                get() {
                                                    return y[L]
                                                },
                                                set(T) {
                                                    y[L] = T
                                                }
                                            }), b;
                                            return C[L] = b, b
                                        },
                                        set(k, L, E, b) {
                                            return L in C ? C[L] = E : y[L] = E, !0
                                        },
                                        defineProperty(k, L, E) {
                                            return Reflect.defineProperty(C, L, E)
                                        },
                                        deleteProperty(k, L) {
                                            return Reflect.deleteProperty(C, L)
                                        }
                                    },
                                    A = Object.create(y);
                                return new Proxy(A, O)
                            },
                            g = y => ({
                                addListener(S, w, ...C) {
                                    S.addListener(y.get(w), ...C)
                                },
                                hasListener(S, w) {
                                    return S.hasListener(y.get(w))
                                },
                                removeListener(S, w) {
                                    S.removeListener(y.get(w))
                                }
                            }),
                            v = new i(y => typeof y != "function" ? y : function(w) {
                                let C = p(w, {}, {
                                    getContent: {
                                        minArgs: 0,
                                        maxArgs: 0
                                    }
                                });
                                y(C)
                            }),
                            x = new i(y => typeof y != "function" ? y : function(w, C, O) {
                                let A = !1,
                                    k, L = new Promise(R => {
                                        k = function(_) {
                                            A = !0, R(_)
                                        }
                                    }),
                                    E;
                                try {
                                    E = y(w, C, k)
                                } catch (R) {
                                    E = Promise.reject(R)
                                }
                                let b = E !== !0 && a(E);
                                if (E !== !0 && !b && !A) return !1;
                                let T = R => {
                                    R.then(_ => {
                                        O(_)
                                    }, _ => {
                                        let j;
                                        _ && (_ instanceof Error || typeof _.message == "string") ? j = _.message : j = "An unexpected error occurred", O({
                                            __mozWebExtensionPolyfillReject__: !0,
                                            message: j
                                        })
                                    }).catch(_ => {})
                                };
                                return T(b ? E : L), !0
                            }),
                            P = ({
                                reject: y,
                                resolve: S
                            }, w) => {
                                n.runtime.lastError ? n.runtime.lastError.message === t ? S() : y(new Error(n.runtime.lastError.message)) : w && w.__mozWebExtensionPolyfillReject__ ? y(new Error(w.message)) : S(w)
                            },
                            m = (y, S, w, ...C) => {
                                if (C.length < S.minArgs) throw new Error(`Expected at least ${S.minArgs} ${l(S.minArgs)} for ${y}(), got ${C.length}`);
                                if (C.length > S.maxArgs) throw new Error(`Expected at most ${S.maxArgs} ${l(S.maxArgs)} for ${y}(), got ${C.length}`);
                                return new Promise((O, A) => {
                                    let k = P.bind(null, {
                                        resolve: O,
                                        reject: A
                                    });
                                    C.push(k), w.sendMessage(...C)
                                })
                            },
                            d = {
                                devtools: {
                                    network: {
                                        onRequestFinished: g(v)
                                    }
                                },
                                runtime: {
                                    onMessage: g(x),
                                    onMessageExternal: g(x),
                                    sendMessage: m.bind(null, "sendMessage", {
                                        minArgs: 1,
                                        maxArgs: 3
                                    })
                                },
                                tabs: {
                                    sendMessage: m.bind(null, "sendMessage", {
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
                        }, p(n, d, o)
                    };
                e.exports = r(chrome)
            } else e.exports = globalThis.browser
        })
    });
    var $y = Ge(yu => {
        "use strict";
        var G4 = D(),
            Q4 = Symbol.for("react.element"),
            X4 = Symbol.for("react.fragment"),
            Y4 = Object.prototype.hasOwnProperty,
            Z4 = G4.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
            q4 = {
                key: !0,
                ref: !0,
                __self: !0,
                __source: !0
            };

        function zy(e, t, r) {
            var n, o = {},
                i = null,
                a = null;
            r !== void 0 && (i = "" + r), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (a = t.ref);
            for (n in t) Y4.call(t, n) && !q4.hasOwnProperty(n) && (o[n] = t[n]);
            if (e && e.defaultProps)
                for (n in t = e.defaultProps, t) o[n] === void 0 && (o[n] = t[n]);
            return {
                $$typeof: Q4,
                type: e,
                key: i,
                ref: a,
                props: o,
                _owner: Z4.current
            }
        }
        yu.Fragment = X4;
        yu.jsx = zy;
        yu.jsxs = zy
    });
    var ma = Ge((RR, Hy) => {
        "use strict";
        Hy.exports = $y()
    });
    var Wy = M(nh());

    function H(e) {
        "@babel/helpers - typeof";
        return H = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
            return typeof t
        } : function(t) {
            return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, H(e)
    }

    function re(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function $f(e, t) {
        if (H(e) !== "object" || e === null) return e;
        var r = e[Symbol.toPrimitive];
        if (r !== void 0) {
            var n = r.call(e, t || "default");
            if (H(n) !== "object") return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return (t === "string" ? String : Number)(e)
    }

    function Ni(e) {
        var t = $f(e, "string");
        return H(t) === "symbol" ? t : String(t)
    }

    function oh(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Ni(n.key), n)
        }
    }

    function ne(e, t, r) {
        return t && oh(e.prototype, t), r && oh(e, r), Object.defineProperty(e, "prototype", {
            writable: !1
        }), e
    }

    function Je(e) {
        if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function Li(e, t) {
        return Li = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
            return n.__proto__ = o, n
        }, Li(e, t)
    }

    function Kt(e, t) {
        if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), Object.defineProperty(e, "prototype", {
            writable: !1
        }), t && Li(e, t)
    }

    function cr(e, t) {
        if (t && (H(t) === "object" || typeof t == "function")) return t;
        if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
        return Je(e)
    }

    function Ve(e) {
        return Ve = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
            return r.__proto__ || Object.getPrototypeOf(r)
        }, Ve(e)
    }

    function z(e, t, r) {
        return t = Ni(t), t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r, e
    }

    function ji(e) {
        if (Array.isArray(e)) return e
    }

    function Mi(e) {
        if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e)
    }

    function go(e, t) {
        (t == null || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
    }

    function xn(e, t) {
        if (e) {
            if (typeof e == "string") return go(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
            if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return go(e, t)
        }
    }

    function Ii() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
    }

    function Di(e) {
        return ji(e) || Mi(e) || xn(e) || Ii()
    }

    function ih(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function(o) {
                return Object.getOwnPropertyDescriptor(e, o).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function ah(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t] != null ? arguments[t] : {};
            t % 2 ? ih(Object(r), !0).forEach(function(n) {
                z(e, n, r[n])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ih(Object(r)).forEach(function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
            })
        }
        return e
    }
    var m6 = {
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
        g6 = function() {
            function e(t) {
                var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                re(this, e), this.init(t, r)
            }
            return ne(e, [{
                key: "init",
                value: function(r) {
                    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                    this.prefix = n.prefix || "i18next:", this.logger = r || m6, this.options = n, this.debug = n.debug
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
                    return new e(this.logger, ah(ah({}, {
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
        Qt = new g6,
        $r = function() {
            function e() {
                re(this, e), this.observers = {}
            }
            return ne(e, [{
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

    function Fi() {
        var e, t, r = new Promise(function(n, o) {
            e = n, t = o
        });
        return r.resolve = e, r.reject = t, r
    }

    function sh(e) {
        return e == null ? "" : "" + e
    }

    function h6(e, t, r) {
        e.forEach(function(n) {
            t[n] && (r[n] = t[n])
        })
    }

    function Bf(e, t, r) {
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

    function lh(e, t, r) {
        var n = Bf(e, t, Object),
            o = n.obj,
            i = n.k;
        o[i] = r
    }

    function v6(e, t, r, n) {
        var o = Bf(e, t, Object),
            i = o.obj,
            a = o.k;
        i[a] = i[a] || [], n && (i[a] = i[a].concat(r)), n || i[a].push(r)
    }

    function Hs(e, t) {
        var r = Bf(e, t),
            n = r.obj,
            o = r.k;
        if (n) return n[o]
    }

    function y6(e, t, r) {
        var n = Hs(e, r);
        return n !== void 0 ? n : Hs(t, r)
    }

    function bh(e, t, r) {
        for (var n in t) n !== "__proto__" && n !== "constructor" && (n in e ? typeof e[n] == "string" || e[n] instanceof String || typeof t[n] == "string" || t[n] instanceof String ? r && (e[n] = t[n]) : bh(e[n], t[n], r) : e[n] = t[n]);
        return e
    }

    function ho(e) {
        return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
    }
    var x6 = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "/": "&#x2F;"
    };

    function S6(e) {
        return typeof e == "string" ? e.replace(/[&<>"'\/]/g, function(t) {
            return x6[t]
        }) : e
    }
    var Ws = typeof window < "u" && window.navigator && typeof window.navigator.userAgentData > "u" && window.navigator.userAgent && window.navigator.userAgent.indexOf("MSIE") > -1,
        C6 = [" ", ",", "?", "!", ";"];

    function w6(e, t, r) {
        t = t || "", r = r || "";
        var n = C6.filter(function(s) {
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

    function Bs(e, t) {
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
                    return u ? Bs(l, u, r) : void 0
                }
                o = o[n[i]]
            }
            return o
        }
    }

    function uh(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function(o) {
                return Object.getOwnPropertyDescriptor(e, o).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function zs(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t] != null ? arguments[t] : {};
            t % 2 ? uh(Object(r), !0).forEach(function(n) {
                z(e, n, r[n])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : uh(Object(r)).forEach(function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
            })
        }
        return e
    }

    function b6(e) {
        var t = E6();
        return function() {
            var n = Ve(e),
                o;
            if (t) {
                var i = Ve(this).constructor;
                o = Reflect.construct(n, arguments, i)
            } else o = n.apply(this, arguments);
            return cr(this, o)
        }
    }

    function E6() {
        if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
        if (typeof Proxy == "function") return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
        } catch {
            return !1
        }
    }
    var k6 = function(e) {
            Kt(r, e);
            var t = b6(r);

            function r(n) {
                var o, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                    ns: ["translation"],
                    defaultNS: "translation"
                };
                return re(this, r), o = t.call(this), Ws && $r.call(Je(o)), o.data = n || {}, o.options = i, o.options.keySeparator === void 0 && (o.options.keySeparator = "."), o.options.ignoreJSONStructure === void 0 && (o.options.ignoreJSONStructure = !0), o
            }
            return ne(r, [{
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
                    var c = Hs(this.data, f);
                    return c || !u || typeof a != "string" ? c : Bs(this.data && this.data[o] && this.data[o][i], a, l)
                }
            }, {
                key: "addResource",
                value: function(o, i, a, s) {
                    var l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
                            silent: !1
                        },
                        u = l.keySeparator !== void 0 ? l.keySeparator : this.options.keySeparator,
                        f = [o, i];
                    a && (f = f.concat(u ? a.split(u) : a)), o.indexOf(".") > -1 && (f = o.split("."), s = i, i = f[1]), this.addNamespaces(i), lh(this.data, f, s), l.silent || this.emit("added", o, i, a, s)
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
                    var c = Hs(this.data, f) || {};
                    s ? bh(c, a, l) : c = zs(zs({}, c), a), lh(this.data, f, c), u.silent || this.emit("added", o, i, a)
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
                    return i || (i = this.options.defaultNS), this.options.compatibilityAPI === "v1" ? zs(zs({}, {}), this.getResource(o, i)) : this.getResource(o, i)
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
        }($r),
        Eh = {
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

    function ch(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function(o) {
                return Object.getOwnPropertyDescriptor(e, o).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function De(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t] != null ? arguments[t] : {};
            t % 2 ? ch(Object(r), !0).forEach(function(n) {
                z(e, n, r[n])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ch(Object(r)).forEach(function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
            })
        }
        return e
    }

    function P6(e) {
        var t = O6();
        return function() {
            var n = Ve(e),
                o;
            if (t) {
                var i = Ve(this).constructor;
                o = Reflect.construct(n, arguments, i)
            } else o = n.apply(this, arguments);
            return cr(this, o)
        }
    }

    function O6() {
        if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
        if (typeof Proxy == "function") return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
        } catch {
            return !1
        }
    }
    var fh = {},
        dh = function(e) {
            Kt(r, e);
            var t = P6(r);

            function r(n) {
                var o, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                return re(this, r), o = t.call(this), Ws && $r.call(Je(o)), h6(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], n, Je(o)), o.options = i, o.options.keySeparator === void 0 && (o.options.keySeparator = "."), o.logger = Qt.create("translator"), o
            }
            return ne(r, [{
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
                        f = !this.options.userDefinedKeySeparator && !i.keySeparator && !this.options.userDefinedNsSeparator && !i.nsSeparator && !w6(o, a, s);
                    if (u && !f) {
                        var c = o.match(this.interpolator.nestingRegexp);
                        if (c && c.length > 0) return {
                            key: o,
                            namespaces: l
                        };
                        var p = o.split(a);
                        (a !== s || a === s && this.options.ns.indexOf(p[0]) > -1) && (l = p.shift()), o = p.join(s)
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
                    if (H(i) !== "object" && this.options.overloadTranslationOptionHandler && (i = this.options.overloadTranslationOptionHandler(arguments)), H(i) === "object" && (i = De({}, i)), i || (i = {}), o == null) return "";
                    Array.isArray(o) || (o = [String(o)]);
                    var l = i.returnDetails !== void 0 ? i.returnDetails : this.options.returnDetails,
                        u = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator,
                        f = this.extractFromKey(o[o.length - 1], i),
                        c = f.key,
                        p = f.namespaces,
                        g = p[p.length - 1],
                        v = i.lng || this.language,
                        x = i.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
                    if (v && v.toLowerCase() === "cimode") {
                        if (x) {
                            var P = i.nsSeparator || this.options.nsSeparator;
                            return l ? {
                                res: "".concat(g).concat(P).concat(c),
                                usedKey: c,
                                exactUsedKey: c,
                                usedLng: v,
                                usedNS: g
                            } : "".concat(g).concat(P).concat(c)
                        }
                        return l ? {
                            res: c,
                            usedKey: c,
                            exactUsedKey: c,
                            usedLng: v,
                            usedNS: g
                        } : c
                    }
                    var m = this.resolve(o, i),
                        d = m && m.res,
                        h = m && m.usedKey || c,
                        y = m && m.exactUsedKey || c,
                        S = Object.prototype.toString.apply(d),
                        w = ["[object Number]", "[object Function]", "[object RegExp]"],
                        C = i.joinArrays !== void 0 ? i.joinArrays : this.options.joinArrays,
                        O = !this.i18nFormat || this.i18nFormat.handleAsObject,
                        A = typeof d != "string" && typeof d != "boolean" && typeof d != "number";
                    if (O && d && A && w.indexOf(S) < 0 && !(typeof C == "string" && S === "[object Array]")) {
                        if (!i.returnObjects && !this.options.returnObjects) {
                            this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
                            var k = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(h, d, De(De({}, i), {}, {
                                ns: p
                            })) : "key '".concat(c, " (").concat(this.language, ")' returned an object instead of string.");
                            return l ? (m.res = k, m) : k
                        }
                        if (u) {
                            var L = S === "[object Array]",
                                E = L ? [] : {},
                                b = L ? y : h;
                            for (var T in d)
                                if (Object.prototype.hasOwnProperty.call(d, T)) {
                                    var R = "".concat(b).concat(u).concat(T);
                                    E[T] = this.translate(R, De(De({}, i), {
                                        joinArrays: !1,
                                        ns: p
                                    })), E[T] === R && (E[T] = d[T])
                                } d = E
                        }
                    } else if (O && typeof C == "string" && S === "[object Array]") d = d.join(C), d && (d = this.extendTranslation(d, o, i, a));
                    else {
                        var _ = !1,
                            j = !1,
                            B = i.count !== void 0 && typeof i.count != "string",
                            U = r.hasDefaultValue(i),
                            G = B ? this.pluralResolver.getSuffix(v, i.count, i) : "",
                            oe = i["defaultValue".concat(G)] || i.defaultValue;
                        !this.isValidLookup(d) && U && (_ = !0, d = oe), this.isValidLookup(d) || (j = !0, d = c);
                        var Z = i.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey,
                            he = Z && j ? void 0 : d,
                            Ce = U && oe !== d && this.options.updateMissing;
                        if (j || _ || Ce) {
                            if (this.logger.log(Ce ? "updateKey" : "missingKey", v, g, c, Ce ? oe : d), u) {
                                var kt = this.resolve(c, De(De({}, i), {}, {
                                    keySeparator: !1
                                }));
                                kt && kt.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")
                            }
                            var Ft = [],
                                yr = this.languageUtils.getFallbackCodes(this.options.fallbackLng, i.lng || this.language);
                            if (this.options.saveMissingTo === "fallback" && yr && yr[0])
                                for (var en = 0; en < yr.length; en++) Ft.push(yr[en]);
                            else this.options.saveMissingTo === "all" ? Ft = this.languageUtils.toResolveHierarchy(i.lng || this.language) : Ft.push(i.lng || this.language);
                            var tn = function(Ke, qt, F) {
                                var rn = U && F !== d ? F : he;
                                s.options.missingKeyHandler ? s.options.missingKeyHandler(Ke, g, qt, rn, Ce, i) : s.backendConnector && s.backendConnector.saveMissing && s.backendConnector.saveMissing(Ke, g, qt, rn, Ce, i), s.emit("missingKey", Ke, g, qt, d)
                            };
                            this.options.saveMissing && (this.options.saveMissingPlurals && B ? Ft.forEach(function(Zt) {
                                s.pluralResolver.getSuffixes(Zt, i).forEach(function(Ke) {
                                    tn([Zt], c + Ke, i["defaultValue".concat(Ke)] || oe)
                                })
                            }) : tn(Ft, c, oe))
                        }
                        d = this.extendTranslation(d, o, i, m, a), j && d === c && this.options.appendNamespaceToMissingKey && (d = "".concat(g, ":").concat(c)), (j || _) && this.options.parseMissingKeyHandler && (this.options.compatibilityAPI !== "v1" ? d = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? "".concat(g, ":").concat(c) : c, _ ? d : void 0) : d = this.options.parseMissingKeyHandler(d))
                    }
                    return l ? (m.res = d, m) : d
                }
            }, {
                key: "extendTranslation",
                value: function(o, i, a, s, l) {
                    var u = this;
                    if (this.i18nFormat && this.i18nFormat.parse) o = this.i18nFormat.parse(o, De(De({}, this.options.interpolation.defaultVariables), a), s.usedLng, s.usedNS, s.usedKey, {
                        resolved: s
                    });
                    else if (!a.skipInterpolation) {
                        a.interpolation && this.interpolator.init(De(De({}, a), {
                            interpolation: De(De({}, this.options.interpolation), a.interpolation)
                        }));
                        var f = typeof o == "string" && (a && a.interpolation && a.interpolation.skipOnVariables !== void 0 ? a.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables),
                            c;
                        if (f) {
                            var p = o.match(this.interpolator.nestingRegexp);
                            c = p && p.length
                        }
                        var g = a.replace && typeof a.replace != "string" ? a.replace : a;
                        if (this.options.interpolation.defaultVariables && (g = De(De({}, this.options.interpolation.defaultVariables), g)), o = this.interpolator.interpolate(o, g, a.lng || this.language, a), f) {
                            var v = o.match(this.interpolator.nestingRegexp),
                                x = v && v.length;
                            c < x && (a.nest = !1)
                        }!a.lng && this.options.compatibilityAPI !== "v1" && s && s.res && (a.lng = s.usedLng), a.nest !== !1 && (o = this.interpolator.nest(o, function() {
                            for (var d = arguments.length, h = new Array(d), y = 0; y < d; y++) h[y] = arguments[y];
                            return l && l[0] === h[0] && !a.context ? (u.logger.warn("It seems you are nesting recursively key: ".concat(h[0], " in key: ").concat(i[0])), null) : u.translate.apply(u, h.concat([i]))
                        }, a)), a.interpolation && this.interpolator.reset()
                    }
                    var P = a.postProcess || this.options.postProcess,
                        m = typeof P == "string" ? [P] : P;
                    return o != null && m && m.length && a.applyPostProcessor !== !1 && (o = Eh.handle(m, o, i, this.options && this.options.postProcessPassResolved ? De({
                        i18nResolved: s
                    }, a) : a, this)), o
                }
            }, {
                key: "resolve",
                value: function(o) {
                    var i = this,
                        a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                        s, l, u, f, c;
                    return typeof o == "string" && (o = [o]), o.forEach(function(p) {
                        if (!i.isValidLookup(s)) {
                            var g = i.extractFromKey(p, a),
                                v = g.key;
                            l = v;
                            var x = g.namespaces;
                            i.options.fallbackNS && (x = x.concat(i.options.fallbackNS));
                            var P = a.count !== void 0 && typeof a.count != "string",
                                m = P && !a.ordinal && a.count === 0 && i.pluralResolver.shouldUseIntlApi(),
                                d = a.context !== void 0 && (typeof a.context == "string" || typeof a.context == "number") && a.context !== "",
                                h = a.lngs ? a.lngs : i.languageUtils.toResolveHierarchy(a.lng || i.language, a.fallbackLng);
                            x.forEach(function(y) {
                                i.isValidLookup(s) || (c = y, !fh["".concat(h[0], "-").concat(y)] && i.utils && i.utils.hasLoadedNamespace && !i.utils.hasLoadedNamespace(c) && (fh["".concat(h[0], "-").concat(y)] = !0, i.logger.warn('key "'.concat(l, '" for languages "').concat(h.join(", "), `" won't get resolved as namespace "`).concat(c, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), h.forEach(function(S) {
                                    if (!i.isValidLookup(s)) {
                                        f = S;
                                        var w = [v];
                                        if (i.i18nFormat && i.i18nFormat.addLookupKeys) i.i18nFormat.addLookupKeys(w, v, S, y, a);
                                        else {
                                            var C;
                                            P && (C = i.pluralResolver.getSuffix(S, a.count, a));
                                            var O = "".concat(i.options.pluralSeparator, "zero");
                                            if (P && (w.push(v + C), m && w.push(v + O)), d) {
                                                var A = "".concat(v).concat(i.options.contextSeparator).concat(a.context);
                                                w.push(A), P && (w.push(A + C), m && w.push(A + O))
                                            }
                                        }
                                        for (var k; k = w.pop();) i.isValidLookup(s) || (u = k, s = i.getResource(S, y, k, a))
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
        }($r);

    function Hf(e) {
        return e.charAt(0).toUpperCase() + e.slice(1)
    }
    var ph = function() {
            function e(t) {
                re(this, e), this.options = t, this.supportedLngs = this.options.supportedLngs || !1, this.logger = Qt.create("languageUtils")
            }
            return ne(e, [{
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
                        }) : o.length === 2 ? (o[0] = o[0].toLowerCase(), o[1] = o[1].toUpperCase(), n.indexOf(o[1].toLowerCase()) > -1 && (o[1] = Hf(o[1].toLowerCase()))) : o.length === 3 && (o[0] = o[0].toLowerCase(), o[1].length === 2 && (o[1] = o[1].toUpperCase()), o[0] !== "sgn" && o[2].length === 2 && (o[2] = o[2].toUpperCase()), n.indexOf(o[1].toLowerCase()) > -1 && (o[1] = Hf(o[1].toLowerCase())), n.indexOf(o[2].toLowerCase()) > -1 && (o[2] = Hf(o[2].toLowerCase()))), o.join("-")
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
        T6 = [{
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
        R6 = {
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
        A6 = ["v1", "v2", "v3"],
        mh = {
            zero: 0,
            one: 1,
            two: 2,
            few: 3,
            many: 4,
            other: 5
        };

    function _6() {
        var e = {};
        return T6.forEach(function(t) {
            t.lngs.forEach(function(r) {
                e[r] = {
                    numbers: t.nr,
                    plurals: R6[t.fc]
                }
            })
        }), e
    }
    var N6 = function() {
        function e(t) {
            var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            re(this, e), this.languageUtils = t, this.options = r, this.logger = Qt.create("pluralResolver"), (!this.options.compatibilityJSON || this.options.compatibilityJSON === "v4") && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = _6()
        }
        return ne(e, [{
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
                    return mh[a] - mh[s]
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
                return !A6.includes(this.options.compatibilityJSON)
            }
        }]), e
    }();

    function gh(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function(o) {
                return Object.getOwnPropertyDescriptor(e, o).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function jt(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t] != null ? arguments[t] : {};
            t % 2 ? gh(Object(r), !0).forEach(function(n) {
                z(e, n, r[n])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : gh(Object(r)).forEach(function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
            })
        }
        return e
    }

    function hh(e, t, r) {
        var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".",
            o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0,
            i = y6(e, t, r);
        return !i && o && typeof r == "string" && (i = Bs(e, r, n), i === void 0 && (i = Bs(t, r, n))), i
    }
    var L6 = function() {
        function e() {
            var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            re(this, e), this.logger = Qt.create("interpolator"), this.options = t, this.format = t.interpolation && t.interpolation.format || function(r) {
                return r
            }, this.init(t)
        }
        return ne(e, [{
            key: "init",
            value: function() {
                var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                r.interpolation || (r.interpolation = {
                    escapeValue: !0
                });
                var n = r.interpolation;
                this.escape = n.escape !== void 0 ? n.escape : S6, this.escapeValue = n.escapeValue !== void 0 ? n.escapeValue : !0, this.useRawValueToEscape = n.useRawValueToEscape !== void 0 ? n.useRawValueToEscape : !1, this.prefix = n.prefix ? ho(n.prefix) : n.prefixEscaped || "{{", this.suffix = n.suffix ? ho(n.suffix) : n.suffixEscaped || "}}", this.formatSeparator = n.formatSeparator ? n.formatSeparator : n.formatSeparator || ",", this.unescapePrefix = n.unescapeSuffix ? "" : n.unescapePrefix || "-", this.unescapeSuffix = this.unescapePrefix ? "" : n.unescapeSuffix || "", this.nestingPrefix = n.nestingPrefix ? ho(n.nestingPrefix) : n.nestingPrefixEscaped || ho("$t("), this.nestingSuffix = n.nestingSuffix ? ho(n.nestingSuffix) : n.nestingSuffixEscaped || ho(")"), this.nestingOptionsSeparator = n.nestingOptionsSeparator ? n.nestingOptionsSeparator : n.nestingOptionsSeparator || ",", this.maxReplaces = n.maxReplaces ? n.maxReplaces : 1e3, this.alwaysFormat = n.alwaysFormat !== void 0 ? n.alwaysFormat : !1, this.resetRegExp()
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

                function c(P) {
                    return P.replace(/\$/g, "$$$$")
                }
                var p = function(m) {
                    if (m.indexOf(a.formatSeparator) < 0) {
                        var d = hh(n, f, m, a.options.keySeparator, a.options.ignoreJSONStructure);
                        return a.alwaysFormat ? a.format(d, void 0, o, jt(jt(jt({}, i), n), {}, {
                            interpolationkey: m
                        })) : d
                    }
                    var h = m.split(a.formatSeparator),
                        y = h.shift().trim(),
                        S = h.join(a.formatSeparator).trim();
                    return a.format(hh(n, f, y, a.options.keySeparator, a.options.ignoreJSONStructure), S, o, jt(jt(jt({}, i), n), {}, {
                        interpolationkey: y
                    }))
                };
                this.resetRegExp();
                var g = i && i.missingInterpolationHandler || this.options.missingInterpolationHandler,
                    v = i && i.interpolation && i.interpolation.skipOnVariables !== void 0 ? i.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables,
                    x = [{
                        regex: this.regexpUnescape,
                        safeValue: function(m) {
                            return c(m)
                        }
                    }, {
                        regex: this.regexp,
                        safeValue: function(m) {
                            return a.escapeValue ? c(a.escape(m)) : c(m)
                        }
                    }];
                return x.forEach(function(P) {
                    for (u = 0; s = P.regex.exec(r);) {
                        var m = s[1].trim();
                        if (l = p(m), l === void 0)
                            if (typeof g == "function") {
                                var d = g(r, s, i);
                                l = typeof d == "string" ? d : ""
                            } else if (i && Object.prototype.hasOwnProperty.call(i, m)) l = "";
                        else if (v) {
                            l = s[0];
                            continue
                        } else a.logger.warn("missed to pass in variable ".concat(m, " for interpolating ").concat(r)), l = "";
                        else typeof l != "string" && !a.useRawValueToEscape && (l = sh(l));
                        var h = P.safeValue(l);
                        if (r = r.replace(s[0], h), v ? (P.regex.lastIndex += l.length, P.regex.lastIndex -= s[0].length) : P.regex.lastIndex = 0, u++, u >= a.maxReplaces) break
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
                    var x = this.nestingOptionsSeparator;
                    if (g.indexOf(x) < 0) return g;
                    var P = g.split(new RegExp("".concat(x, "[ ]*{"))),
                        m = "{".concat(P[1]);
                    g = P[0], m = this.interpolate(m, l);
                    var d = m.match(/'/g),
                        h = m.match(/"/g);
                    (d && d.length % 2 === 0 && !h || h.length % 2 !== 0) && (m = m.replace(/'/g, '"'));
                    try {
                        l = JSON.parse(m), v && (l = jt(jt({}, v), l))
                    } catch (y) {
                        return this.logger.warn("failed parsing options string in nesting for key ".concat(g), y), "".concat(g).concat(x).concat(m)
                    }
                    return delete l.defaultValue, g
                }
                for (; a = this.nestingRegexp.exec(r);) {
                    var f = [];
                    l = jt({}, i), l = l.replace && typeof l.replace != "string" ? l.replace : l, l.applyPostProcessor = !1, delete l.defaultValue;
                    var c = !1;
                    if (a[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(a[1])) {
                        var p = a[1].split(this.formatSeparator).map(function(g) {
                            return g.trim()
                        });
                        a[1] = p.shift(), f = p, c = !0
                    }
                    if (s = n(u.call(this, a[1].trim(), l), l), s && a[0] === r && typeof s != "string") return s;
                    typeof s != "string" && (s = sh(s)), s || (this.logger.warn("missed to resolve ".concat(a[1], " for nesting ").concat(r)), s = ""), c && (s = f.reduce(function(g, v) {
                        return o.format(g, v, i.lng, jt(jt({}, i), {}, {
                            interpolationkey: a[1].trim()
                        }))
                    }, s.trim())), r = r.replace(a[0], s), this.regexp.lastIndex = 0
                }
                return r
            }
        }]), e
    }();

    function vh(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function(o) {
                return Object.getOwnPropertyDescriptor(e, o).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function fr(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t] != null ? arguments[t] : {};
            t % 2 ? vh(Object(r), !0).forEach(function(n) {
                z(e, n, r[n])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : vh(Object(r)).forEach(function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
            })
        }
        return e
    }

    function j6(e) {
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
                            l = Di(s),
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

    function vo(e) {
        var t = {};
        return function(n, o, i) {
            var a = o + JSON.stringify(i),
                s = t[a];
            return s || (s = e(o, i), t[a] = s), s(n)
        }
    }
    var M6 = function() {
        function e() {
            var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            re(this, e), this.logger = Qt.create("formatter"), this.options = t, this.formats = {
                number: vo(function(r, n) {
                    var o = new Intl.NumberFormat(r, fr({}, n));
                    return function(i) {
                        return o.format(i)
                    }
                }),
                currency: vo(function(r, n) {
                    var o = new Intl.NumberFormat(r, fr(fr({}, n), {}, {
                        style: "currency"
                    }));
                    return function(i) {
                        return o.format(i)
                    }
                }),
                datetime: vo(function(r, n) {
                    var o = new Intl.DateTimeFormat(r, fr({}, n));
                    return function(i) {
                        return o.format(i)
                    }
                }),
                relativetime: vo(function(r, n) {
                    var o = new Intl.RelativeTimeFormat(r, fr({}, n));
                    return function(i) {
                        return o.format(i, n.range || "day")
                    }
                }),
                list: vo(function(r, n) {
                    var o = new Intl.ListFormat(r, fr({}, n));
                    return function(i) {
                        return o.format(i)
                    }
                })
            }, this.init(t)
        }
        return ne(e, [{
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
                this.formats[r.toLowerCase().trim()] = vo(n)
            }
        }, {
            key: "format",
            value: function(r, n, o) {
                var i = this,
                    a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
                    s = n.split(this.formatSeparator),
                    l = s.reduce(function(u, f) {
                        var c = j6(f),
                            p = c.formatName,
                            g = c.formatOptions;
                        if (i.formats[p]) {
                            var v = u;
                            try {
                                var x = a && a.formatParams && a.formatParams[a.interpolationkey] || {},
                                    P = x.locale || x.lng || a.locale || a.lng || o;
                                v = i.formats[p](u, P, fr(fr(fr({}, g), a), x))
                            } catch (m) {
                                i.logger.warn(m)
                            }
                            return v
                        } else i.logger.warn("there was no format function for ".concat(p));
                        return u
                    }, r);
                return l
            }
        }]), e
    }();

    function yh(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function(o) {
                return Object.getOwnPropertyDescriptor(e, o).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function xh(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t] != null ? arguments[t] : {};
            t % 2 ? yh(Object(r), !0).forEach(function(n) {
                z(e, n, r[n])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : yh(Object(r)).forEach(function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
            })
        }
        return e
    }

    function I6(e) {
        var t = D6();
        return function() {
            var n = Ve(e),
                o;
            if (t) {
                var i = Ve(this).constructor;
                o = Reflect.construct(n, arguments, i)
            } else o = n.apply(this, arguments);
            return cr(this, o)
        }
    }

    function D6() {
        if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
        if (typeof Proxy == "function") return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
        } catch {
            return !1
        }
    }

    function F6(e, t) {
        e.pending[t] !== void 0 && (delete e.pending[t], e.pendingCount--)
    }
    var z6 = function(e) {
        Kt(r, e);
        var t = I6(r);

        function r(n, o, i) {
            var a, s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
            return re(this, r), a = t.call(this), Ws && $r.call(Je(a)), a.backend = n, a.store = o, a.services = i, a.languageUtils = i.languageUtils, a.options = s, a.logger = Qt.create("backendConnector"), a.waitingReads = [], a.maxParallelReads = s.maxParallelReads || 10, a.readingCalls = 0, a.maxRetries = s.maxRetries >= 0 ? s.maxRetries : 5, a.retryTimeout = s.retryTimeout >= 1 ? s.retryTimeout : 350, a.state = {}, a.queue = [], a.backend && a.backend.init && a.backend.init(i, s.backend, s), a
        }
        return ne(r, [{
            key: "queueLoad",
            value: function(o, i, a, s) {
                var l = this,
                    u = {},
                    f = {},
                    c = {},
                    p = {};
                return o.forEach(function(g) {
                    var v = !0;
                    i.forEach(function(x) {
                        var P = "".concat(g, "|").concat(x);
                        !a.reload && l.store.hasResourceBundle(g, x) ? l.state[P] = 2 : l.state[P] < 0 || (l.state[P] === 1 ? f[P] === void 0 && (f[P] = !0) : (l.state[P] = 1, v = !1, f[P] === void 0 && (f[P] = !0), u[P] === void 0 && (u[P] = !0), p[x] === void 0 && (p[x] = !0)))
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
                    toLoadNamespaces: Object.keys(p)
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
                    v6(c.loaded, [l], u), F6(c, o), i && c.errors.push(i), c.pendingCount === 0 && !c.done && (Object.keys(c.loaded).forEach(function(p) {
                        f[p] || (f[p] = {});
                        var g = c.loaded[p];
                        g.length && g.forEach(function(v) {
                            f[p][v] === void 0 && (f[p][v] = !0)
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
                var c = function(x, P) {
                        if (s.readingCalls--, s.waitingReads.length > 0) {
                            var m = s.waitingReads.shift();
                            s.read(m.lng, m.ns, m.fcName, m.tried, m.wait, m.callback)
                        }
                        if (x && P && l < s.maxRetries) {
                            setTimeout(function() {
                                s.read.call(s, o, i, a, l + 1, u * 2, f)
                            }, u);
                            return
                        }
                        f(x, P)
                    },
                    p = this.backend[a].bind(this.backend);
                if (p.length === 2) {
                    try {
                        var g = p(o, i);
                        g && typeof g.then == "function" ? g.then(function(v) {
                            return c(null, v)
                        }).catch(c) : c(null, g)
                    } catch (v) {
                        c(v)
                    }
                    return
                }
                return p(o, i, c)
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
                        var c = xh(xh({}, u), {}, {
                                isUpdate: l
                            }),
                            p = this.backend.create.bind(this.backend);
                        if (p.length < 6) try {
                            var g;
                            p.length === 5 ? g = p(o, i, a, s, c) : g = p(o, i, a, s), g && typeof g.then == "function" ? g.then(function(v) {
                                return f(null, v)
                            }).catch(f) : f(null, g)
                        } catch (v) {
                            f(v)
                        } else p(o, i, a, s, f, c)
                    }!o || !o[0] || this.store.addResource(o[0], i, a, s)
                }
            }
        }]), r
    }($r);

    function Sh() {
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
                if (H(t[1]) === "object" && (r = t[1]), typeof t[1] == "string" && (r.defaultValue = t[1]), typeof t[2] == "string" && (r.tDescription = t[2]), H(t[2]) === "object" || H(t[3]) === "object") {
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

    function Ch(e) {
        return typeof e.ns == "string" && (e.ns = [e.ns]), typeof e.fallbackLng == "string" && (e.fallbackLng = [e.fallbackLng]), typeof e.fallbackNS == "string" && (e.fallbackNS = [e.fallbackNS]), e.supportedLngs && e.supportedLngs.indexOf("cimode") < 0 && (e.supportedLngs = e.supportedLngs.concat(["cimode"])), e
    }

    function wh(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function(o) {
                return Object.getOwnPropertyDescriptor(e, o).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function Gt(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t] != null ? arguments[t] : {};
            t % 2 ? wh(Object(r), !0).forEach(function(n) {
                z(e, n, r[n])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : wh(Object(r)).forEach(function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
            })
        }
        return e
    }

    function $6(e) {
        var t = H6();
        return function() {
            var n = Ve(e),
                o;
            if (t) {
                var i = Ve(this).constructor;
                o = Reflect.construct(n, arguments, i)
            } else o = n.apply(this, arguments);
            return cr(this, o)
        }
    }

    function H6() {
        if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
        if (typeof Proxy == "function") return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
        } catch {
            return !1
        }
    }

    function $s() {}

    function B6(e) {
        var t = Object.getOwnPropertyNames(Object.getPrototypeOf(e));
        t.forEach(function(r) {
            typeof e[r] == "function" && (e[r] = e[r].bind(e))
        })
    }
    var Us = function(e) {
        Kt(r, e);
        var t = $6(r);

        function r() {
            var n, o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
                i = arguments.length > 1 ? arguments[1] : void 0;
            if (re(this, r), n = t.call(this), Ws && $r.call(Je(n)), n.options = Ch(o), n.services = {}, n.logger = Qt, n.modules = {
                    external: []
                }, B6(Je(n)), i && !n.isInitialized && !o.isClone) {
                if (!n.options.initImmediate) return n.init(o, i), cr(n, Je(n));
                setTimeout(function() {
                    n.init(o, i)
                }, 0)
            }
            return n
        }
        return ne(r, [{
            key: "init",
            value: function() {
                var o = this,
                    i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
                    a = arguments.length > 1 ? arguments[1] : void 0;
                typeof i == "function" && (a = i, i = {}), !i.defaultNS && i.defaultNS !== !1 && i.ns && (typeof i.ns == "string" ? i.defaultNS = i.ns : i.ns.indexOf("translation") < 0 && (i.defaultNS = i.ns[0]));
                var s = Sh();
                this.options = Gt(Gt(Gt({}, s), this.options), Ch(i)), this.options.compatibilityAPI !== "v1" && (this.options.interpolation = Gt(Gt({}, s.interpolation), this.options.interpolation)), i.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = i.keySeparator), i.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = i.nsSeparator);

                function l(m) {
                    return m ? typeof m == "function" ? new m : m : null
                }
                if (!this.options.isClone) {
                    this.modules.logger ? Qt.init(l(this.modules.logger), this.options) : Qt.init(null, this.options);
                    var u;
                    this.modules.formatter ? u = this.modules.formatter : typeof Intl < "u" && (u = M6);
                    var f = new ph(this.options);
                    this.store = new k6(this.options.resources, this.options);
                    var c = this.services;
                    c.logger = Qt, c.resourceStore = this.store, c.languageUtils = f, c.pluralResolver = new N6(f, {
                        prepend: this.options.pluralSeparator,
                        compatibilityJSON: this.options.compatibilityJSON,
                        simplifyPluralSuffix: this.options.simplifyPluralSuffix
                    }), u && (!this.options.interpolation.format || this.options.interpolation.format === s.interpolation.format) && (c.formatter = l(u), c.formatter.init(c, this.options), this.options.interpolation.format = c.formatter.format.bind(c.formatter)), c.interpolator = new L6(this.options), c.utils = {
                        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
                    }, c.backendConnector = new z6(l(this.modules.backend), c.resourceStore, c, this.options), c.backendConnector.on("*", function(m) {
                        for (var d = arguments.length, h = new Array(d > 1 ? d - 1 : 0), y = 1; y < d; y++) h[y - 1] = arguments[y];
                        o.emit.apply(o, [m].concat(h))
                    }), this.modules.languageDetector && (c.languageDetector = l(this.modules.languageDetector), c.languageDetector.init && c.languageDetector.init(c, this.options.detection, this.options)), this.modules.i18nFormat && (c.i18nFormat = l(this.modules.i18nFormat), c.i18nFormat.init && c.i18nFormat.init(this)), this.translator = new dh(this.services, this.options), this.translator.on("*", function(m) {
                        for (var d = arguments.length, h = new Array(d > 1 ? d - 1 : 0), y = 1; y < d; y++) h[y - 1] = arguments[y];
                        o.emit.apply(o, [m].concat(h))
                    }), this.modules.external.forEach(function(m) {
                        m.init && m.init(o)
                    })
                }
                if (this.format = this.options.interpolation.format, a || (a = $s), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
                    var p = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
                    p.length > 0 && p[0] !== "dev" && (this.options.lng = p[0])
                }!this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined");
                var g = ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"];
                g.forEach(function(m) {
                    o[m] = function() {
                        var d;
                        return (d = o.store)[m].apply(d, arguments)
                    }
                });
                var v = ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"];
                v.forEach(function(m) {
                    o[m] = function() {
                        var d;
                        return (d = o.store)[m].apply(d, arguments), o
                    }
                });
                var x = Fi(),
                    P = function() {
                        var d = function(y, S) {
                            o.isInitialized && !o.initializedStoreOnce && o.logger.warn("init: i18next is already initialized. You should call init just once!"), o.isInitialized = !0, o.options.isClone || o.logger.log("initialized", o.options), o.emit("initialized", o.options), x.resolve(S), a(y, S)
                        };
                        if (o.languages && o.options.compatibilityAPI !== "v1" && !o.isInitialized) return d(null, o.t.bind(o));
                        o.changeLanguage(o.options.lng, d)
                    };
                return this.options.resources || !this.options.initImmediate ? P() : setTimeout(P, 0), x
            }
        }, {
            key: "loadResources",
            value: function(o) {
                var i = this,
                    a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : $s,
                    s = a,
                    l = typeof o == "string" ? o : this.language;
                if (typeof o == "function" && (s = o), !this.options.resources || this.options.partialBundledLanguages) {
                    if (l && l.toLowerCase() === "cimode") return s();
                    var u = [],
                        f = function(g) {
                            if (g) {
                                var v = i.services.languageUtils.toResolveHierarchy(g);
                                v.forEach(function(x) {
                                    u.indexOf(x) < 0 && u.push(x)
                                })
                            }
                        };
                    if (l) f(l);
                    else {
                        var c = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
                        c.forEach(function(p) {
                            return f(p)
                        })
                    }
                    this.options.preload && this.options.preload.forEach(function(p) {
                        return f(p)
                    }), this.services.backendConnector.load(u, this.options.ns, function(p) {
                        !p && !i.resolvedLanguage && i.language && i.setResolvedLanguage(i.language), s(p)
                    })
                } else s(null)
            }
        }, {
            key: "reloadResources",
            value: function(o, i, a) {
                var s = Fi();
                return o || (o = this.languages), i || (i = this.options.ns), a || (a = $s), this.services.backendConnector.reload(o, i, function(l) {
                    s.resolve(), a(l)
                }), s
            }
        }, {
            key: "use",
            value: function(o) {
                if (!o) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
                if (!o.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
                return o.type === "backend" && (this.modules.backend = o), (o.type === "logger" || o.log && o.warn && o.error) && (this.modules.logger = o), o.type === "languageDetector" && (this.modules.languageDetector = o), o.type === "i18nFormat" && (this.modules.i18nFormat = o), o.type === "postProcessor" && Eh.addPostProcessor(o), o.type === "formatter" && (this.modules.formatter = o), o.type === "3rdParty" && this.modules.external.push(o), this
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
                var s = Fi();
                this.emit("languageChanging", o);
                var l = function(p) {
                        a.language = p, a.languages = a.services.languageUtils.toResolveHierarchy(p), a.resolvedLanguage = void 0, a.setResolvedLanguage(p)
                    },
                    u = function(p, g) {
                        g ? (l(g), a.translator.changeLanguage(g), a.isLanguageChangingTo = void 0, a.emit("languageChanged", g), a.logger.log("languageChanged", g)) : a.isLanguageChangingTo = void 0, s.resolve(function() {
                            return a.t.apply(a, arguments)
                        }), i && i(p, function() {
                            return a.t.apply(a, arguments)
                        })
                    },
                    f = function(p) {
                        !o && !p && a.services.languageDetector && (p = []);
                        var g = typeof p == "string" ? p : a.services.languageUtils.getBestMatchFromCodes(p);
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
                        var p;
                        if (H(c) !== "object") {
                            for (var g = arguments.length, v = new Array(g > 2 ? g - 2 : 0), x = 2; x < g; x++) v[x - 2] = arguments[x];
                            p = s.options.overloadTranslationOptionHandler([f, c].concat(v))
                        } else p = Gt({}, c);
                        p.lng = p.lng || u.lng, p.lngs = p.lngs || u.lngs, p.ns = p.ns || u.ns, p.keyPrefix = p.keyPrefix || a || u.keyPrefix;
                        var P = s.options.keySeparator || ".",
                            m;
                        return p.keyPrefix && Array.isArray(f) ? m = f.map(function(d) {
                            return "".concat(p.keyPrefix).concat(P).concat(d)
                        }) : m = p.keyPrefix ? "".concat(p.keyPrefix).concat(P).concat(f) : f, s.t(m, p)
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
                    var x = i.services.backendConnector.state["".concat(g, "|").concat(v)];
                    return x === -1 || x === 2
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
                    s = Fi();
                return this.options.ns ? (typeof o == "string" && (o = [o]), o.forEach(function(l) {
                    a.options.ns.indexOf(l) < 0 && a.options.ns.push(l)
                }), this.loadResources(function(l) {
                    s.resolve(), i && i(l)
                }), s) : (i && i(), Promise.resolve())
            }
        }, {
            key: "loadLanguages",
            value: function(o, i) {
                var a = Fi();
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
                    a = this.services && this.services.languageUtils || new ph(Sh());
                return i.indexOf(a.getLanguagePartFromCode(o)) > -1 || o.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr"
            }
        }, {
            key: "cloneInstance",
            value: function() {
                var o = this,
                    i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
                    a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : $s,
                    s = Gt(Gt(Gt({}, this.options), i), {
                        isClone: !0
                    }),
                    l = new r(s);
                (i.debug !== void 0 || i.prefix !== void 0) && (l.logger = l.logger.clone(i));
                var u = ["store", "services", "language"];
                return u.forEach(function(f) {
                    l[f] = o[f]
                }), l.services = Gt({}, this.services), l.services.utils = {
                    hasLoadedNamespace: l.hasLoadedNamespace.bind(l)
                }, l.translator = new dh(l.services, l.options), l.translator.on("*", function(f) {
                    for (var c = arguments.length, p = new Array(c > 1 ? c - 1 : 0), g = 1; g < c; g++) p[g - 1] = arguments[g];
                    l.emit.apply(l, [f].concat(p))
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
    }($r);
    z(Us, "createInstance", function() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
            t = arguments.length > 1 ? arguments[1] : void 0;
        return new Us(e, t)
    });
    var Ae = Us.createInstance();
    Ae.createInstance = Us.createInstance;
    var QS = Ae.createInstance,
        XS = Ae.dir,
        YS = Ae.init,
        ZS = Ae.loadResources,
        qS = Ae.reloadResources,
        JS = Ae.use,
        e8 = Ae.changeLanguage,
        t8 = Ae.getFixedT,
        r8 = Ae.t,
        n8 = Ae.exists,
        o8 = Ae.setDefaultNamespace,
        i8 = Ae.hasLoadedNamespace,
        a8 = Ae.loadNamespaces,
        s8 = Ae.loadLanguages;

    function Uf(e, t) {
        if (e == null) return {};
        var r = {},
            n = Object.keys(e),
            o, i;
        for (i = 0; i < n.length; i++) o = n[i], !(t.indexOf(o) >= 0) && (r[o] = e[o]);
        return r
    }

    function Fe(e, t) {
        if (e == null) return {};
        var r = Uf(e, t),
            n, o;
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (o = 0; o < i.length; o++) n = i[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
        }
        return r
    }
    var X6 = M(D(), 1);
    var Gf = M(D(), 1);
    var U6 = M(Ph());

    function Th() {
        if (console && console.warn) {
            for (var e, t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
            typeof r[0] == "string" && (r[0] = "react-i18next:: ".concat(r[0])), (e = console).warn.apply(e, r)
        }
    }
    var Oh = {};

    function zi() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        typeof t[0] == "string" && Oh[t[0]] || (typeof t[0] == "string" && (Oh[t[0]] = new Date), Th.apply(void 0, t))
    }
    var Rh = function(t, r) {
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

    function Wf(e, t, r) {
        e.loadNamespaces(t, Rh(e, r))
    }

    function Vf(e, t, r, n) {
        typeof r == "string" && (r = [r]), r.forEach(function(o) {
            e.options.ns.indexOf(o) < 0 && e.options.ns.push(o)
        }), e.loadLanguages(t, Rh(e, n))
    }

    function W6(e, t) {
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

    function Ah(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        if (!t.languages || !t.languages.length) return zi("i18n.languages were undefined or empty", t.languages), !0;
        var n = t.options.ignoreJSONStructure !== void 0;
        return n ? t.hasLoadedNamespace(e, {
            lng: r.lng,
            precheck: function(i, a) {
                if (r.bindI18n && r.bindI18n.indexOf("languageChanging") > -1 && i.services.backendConnector.backend && i.isLanguageChangingTo && !a(i.isLanguageChangingTo, e)) return !1
            }
        }) : W6(e, t, r)
    }
    var V6 = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
        K6 = {
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
        G6 = function(t) {
            return K6[t]
        },
        _h = function(t) {
            return t.replace(V6, G6)
        };

    function Nh(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function(o) {
                return Object.getOwnPropertyDescriptor(e, o).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function Lh(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t] != null ? arguments[t] : {};
            t % 2 ? Nh(Object(r), !0).forEach(function(n) {
                z(e, n, r[n])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Nh(Object(r)).forEach(function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
            })
        }
        return e
    }
    var Kf = {
        bindI18n: "languageChanged",
        bindI18nStore: "",
        transEmptyNodeValue: "",
        transSupportBasicHtmlNodes: !0,
        transWrapTextNodes: "",
        transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
        useSuspense: !0,
        unescape: _h
    };

    function Vs() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        Kf = Lh(Lh({}, Kf), e)
    }

    function $i() {
        return Kf
    }
    var jh;

    function Ks(e) {
        jh = e
    }

    function Sn() {
        return jh
    }
    var Mh = M(D(), 1);
    var Gs = {
        type: "3rdParty",
        init: function(t) {
            Vs(t.options.react), Ks(t)
        }
    };
    var yo = (0, Mh.createContext)(),
        Ih = function() {
            function e() {
                re(this, e), this.usedNamespaces = {}
            }
            return ne(e, [{
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

    function Qf(e, t) {
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

    function W(e, t) {
        return ji(e) || Qf(e, t) || xn(e, t) || Ii()
    }
    var St = M(D(), 1);

    function Dh(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function(o) {
                return Object.getOwnPropertyDescriptor(e, o).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function Xf(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t] != null ? arguments[t] : {};
            t % 2 ? Dh(Object(r), !0).forEach(function(n) {
                z(e, n, r[n])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Dh(Object(r)).forEach(function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
            })
        }
        return e
    }
    var Y6 = function(t, r) {
        var n = (0, St.useRef)();
        return (0, St.useEffect)(function() {
            n.current = r ? n.current : t
        }, [t, r]), n.current
    };

    function xo(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
            r = t.i18n,
            n = (0, St.useContext)(yo) || {},
            o = n.i18n,
            i = n.defaultNS,
            a = r || o || Sn();
        if (a && !a.reportNamespaces && (a.reportNamespaces = new Ih), !a) {
            zi("You will need to pass in an i18next instance by using initReactI18next");
            var s = function(A, k) {
                    return typeof k == "string" ? k : k && H(k) === "object" && typeof k.defaultValue == "string" ? k.defaultValue : Array.isArray(A) ? A[A.length - 1] : A
                },
                l = [s, {}, !1];
            return l.t = s, l.i18n = {}, l.ready = !1, l
        }
        a.options.react && a.options.react.wait !== void 0 && zi("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
        var u = Xf(Xf(Xf({}, $i()), a.options.react), t),
            f = u.useSuspense,
            c = u.keyPrefix,
            p = e || i || a.options && a.options.defaultNS;
        p = typeof p == "string" ? [p] : p || ["translation"], a.reportNamespaces.addUsedNamespaces && a.reportNamespaces.addUsedNamespaces(p);
        var g = (a.isInitialized || a.initializedStoreOnce) && p.every(function(O) {
            return Ah(O, a, u)
        });

        function v() {
            return a.getFixedT(t.lng || null, u.nsMode === "fallback" ? p : p[0], c)
        }
        var x = (0, St.useState)(v),
            P = W(x, 2),
            m = P[0],
            d = P[1],
            h = p.join();
        t.lng && (h = "".concat(t.lng).concat(h));
        var y = Y6(h),
            S = (0, St.useRef)(!0);
        (0, St.useEffect)(function() {
            var O = u.bindI18n,
                A = u.bindI18nStore;
            S.current = !0, !g && !f && (t.lng ? Vf(a, t.lng, p, function() {
                S.current && d(v)
            }) : Wf(a, p, function() {
                S.current && d(v)
            })), g && y && y !== h && S.current && d(v);

            function k() {
                S.current && d(v)
            }
            return O && a && a.on(O, k), A && a && a.store.on(A, k),
                function() {
                    S.current = !1, O && a && O.split(" ").forEach(function(L) {
                        return a.off(L, k)
                    }), A && a && A.split(" ").forEach(function(L) {
                        return a.store.off(L, k)
                    })
                }
        }, [a, h]);
        var w = (0, St.useRef)(!0);
        (0, St.useEffect)(function() {
            S.current && !w.current && d(v), w.current = !1
        }, [a, c]);
        var C = [m, a, g];
        if (C.t = m, C.i18n = a, C.ready = g, g || !g && !f) return C;
        throw new Promise(function(O) {
            t.lng ? Vf(a, t.lng, p, function() {
                return O()
            }) : Wf(a, p, function() {
                return O()
            })
        })
    }
    var Fh = M(D(), 1);
    var zh = M(D(), 1);
    var tx = M(D(), 1);
    var q6 = M(D(), 1);
    Ae.use(Gs).init({
        resources: {},
        lng: "en",
        fallbackLng: "en",
        interpolation: {
            escapeValue: !1
        }
    });

    function Yf() {
        if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
        if (typeof Proxy == "function") return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
        } catch {
            return !1
        }
    }

    function Hi(e) {
        var t = Yf();
        return function() {
            var n = Ve(e),
                o;
            if (t) {
                var i = Ve(this).constructor;
                o = Reflect.construct(n, arguments, i)
            } else o = n.apply(this, arguments);
            return cr(this, o)
        }
    }

    function Mt() {
        return Mt = Object.assign ? Object.assign.bind() : function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        }, Mt.apply(this, arguments)
    }
    var sx = M(D()),
        lx = M(ed());
    var td = {},
        ux = [],
        cx = function(t) {
            ux.push(t)
        };

    function rd(e, t) {
        if (!1) var r
    }

    function fx(e, t) {
        if (!1) var r
    }

    function dx() {
        td = {}
    }

    function Uh(e, t, r) {
        !t && !td[r] && (e(!1, r), td[r] = !0)
    }

    function il(e, t) {
        Uh(rd, e, t)
    }

    function px(e, t) {
        Uh(fx, e, t)
    }
    il.preMessage = cx;
    il.resetWarned = dx;
    il.noteOnce = px;
    var So = il;

    function Wh(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function(o) {
                return Object.getOwnPropertyDescriptor(e, o).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function $(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t] != null ? arguments[t] : {};
            t % 2 ? Wh(Object(r), !0).forEach(function(n) {
                z(e, n, r[n])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Wh(Object(r)).forEach(function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
            })
        }
        return e
    }
    var Kh = M(ed());
    var Vh = M(D());

    function Cn(e, t, r) {
        var n = Vh.useRef({});
        return (!("value" in n.current) || r(n.current.condition, t)) && (n.current.value = e(), n.current.condition = t), n.current.value
    }

    function nd(e, t) {
        typeof e == "function" ? e(t) : H(e) === "object" && e && "current" in e && (e.current = t)
    }

    function al() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        var n = t.filter(function(o) {
            return o
        });
        return n.length <= 1 ? n[0] : function(o) {
            t.forEach(function(i) {
                nd(i, o)
            })
        }
    }

    function sl(e) {
        var t, r, n = (0, Kh.isMemo)(e) ? e.type.type : e.type;
        return !(typeof n == "function" && !((t = n.prototype) !== null && t !== void 0 && t.render) || typeof e == "function" && !((r = e.prototype) !== null && r !== void 0 && r.render))
    }
    var Gh = M(D()),
        Qh = M(Fs());

    function mx(e) {
        return e instanceof HTMLElement || e instanceof SVGElement
    }

    function od(e) {
        return mx(e) ? e : e instanceof Gh.default.Component ? Qh.default.findDOMNode(e) : null
    }

    function id(e, t) {
        var r = $({}, e);
        return Array.isArray(t) && t.forEach(function(n) {
            delete r[n]
        }), r
    }

    function ad(e) {
        if (Array.isArray(e)) return go(e)
    }

    function sd() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
    }

    function Ct(e) {
        return ad(e) || Mi(e) || xn(e) || sd()
    }
    var Yh = function(t) {
            return +setTimeout(t, 16)
        },
        Zh = function(t) {
            return clearTimeout(t)
        };
    typeof window < "u" && "requestAnimationFrame" in window && (Yh = function(t) {
        return window.requestAnimationFrame(t)
    }, Zh = function(t) {
        return window.cancelAnimationFrame(t)
    });
    var Xh = 0,
        ld = new Map;

    function qh(e) {
        ld.delete(e)
    }
    var Jh = function(t) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
        Xh += 1;
        var n = Xh;

        function o(i) {
            if (i === 0) qh(n), t();
            else {
                var a = Yh(function() {
                    o(i - 1)
                });
                ld.set(n, a)
            }
        }
        return o(r), n
    };
    Jh.cancel = function(e) {
        var t = ld.get(e);
        return qh(t), Zh(t)
    };
    var Co = Jh;

    function gx(e) {
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
    var wo = gx;
    var fl = M(D()),
        f0 = M(D());

    function hx(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
            n = new Set;

        function o(i, a) {
            var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1,
                l = n.has(i);
            if (So(!l, "Warning: There may be circular references"), l) return !1;
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
            if (i && a && H(i) === "object" && H(a) === "object") {
                var c = Object.keys(i);
                return c.length !== Object.keys(a).length ? !1 : c.every(function(p) {
                    return o(i[p], a[p], u)
                })
            }
            return !1
        }
        return o(e, t)
    }
    var ud = hx;
    var ll = M(D());
    var vx = function() {
            function e(t) {
                re(this, e), z(this, "instanceId", void 0), z(this, "cache", new Map), this.instanceId = t
            }
            return ne(e, [{
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
        e0 = vx;
    var Bi = "data-token-hash",
        wn = "data-css-hash";
    var Hr = "__cssinjs_instance__";

    function t0() {
        var e = Math.random().toString(12).slice(2);
        if (typeof document < "u" && document.head && document.body) {
            var t = document.body.querySelectorAll("style[".concat(wn, "]")) || [],
                r = document.head.firstChild;
            Array.from(t).forEach(function(o) {
                o[Hr] = o[Hr] || e, o[Hr] === e && document.head.insertBefore(o, r)
            });
            var n = {};
            Array.from(document.querySelectorAll("style[".concat(wn, "]"))).forEach(function(o) {
                var i = o.getAttribute(wn);
                if (n[i]) {
                    if (o[Hr] === e) {
                        var a;
                        (a = o.parentNode) === null || a === void 0 || a.removeChild(o)
                    }
                } else n[i] = !0
            })
        }
        return new e0(e)
    }
    var yx = ll.createContext({
        hashPriority: "low",
        cache: t0(),
        defaultCache: !0
    });
    var bo = yx;

    function ze() {
        return !!(typeof window < "u" && window.document && window.document.createElement)
    }

    function cd(e, t) {
        if (!e) return !1;
        if (e.contains) return e.contains(t);
        for (var r = t; r;) {
            if (r === e) return !0;
            r = r.parentNode
        }
        return !1
    }
    var r0 = "data-rc-order",
        xx = "rc-util-key",
        fd = new Map;

    function n0() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
            t = e.mark;
        return t ? t.startsWith("data-") ? t : "data-".concat(t) : xx
    }

    function ul(e) {
        if (e.attachTo) return e.attachTo;
        var t = document.querySelector("head");
        return t || document.body
    }

    function Sx(e) {
        return e === "queue" ? "prependQueue" : e ? "prepend" : "append"
    }

    function o0(e) {
        return Array.from((fd.get(e) || e).children).filter(function(t) {
            return t.tagName === "STYLE"
        })
    }

    function i0(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (!ze()) return null;
        var r = t.csp,
            n = t.prepend,
            o = document.createElement("style");
        o.setAttribute(r0, Sx(n)), r != null && r.nonce && (o.nonce = r?.nonce), o.innerHTML = e;
        var i = ul(t),
            a = i.firstChild;
        if (n) {
            if (n === "queue") {
                var s = o0(i).filter(function(l) {
                    return ["prepend", "prependQueue"].includes(l.getAttribute(r0))
                });
                if (s.length) return i.insertBefore(o, s[s.length - 1].nextSibling), o
            }
            i.insertBefore(o, a)
        } else i.appendChild(o);
        return o
    }

    function a0(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
            r = ul(t);
        return o0(r).find(function(n) {
            return n.getAttribute(n0(t)) === e
        })
    }

    function cl(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
            r = a0(e, t);
        if (r) {
            var n = ul(t);
            n.removeChild(r)
        }
    }

    function Cx(e, t) {
        var r = fd.get(e);
        if (!r || !cd(document, r)) {
            var n = i0("", t),
                o = n.parentNode;
            fd.set(e, o), e.removeChild(n)
        }
    }

    function dr(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
            n = ul(r);
        Cx(n, r);
        var o = a0(t, r);
        if (o) {
            var i, a;
            if ((i = r.csp) !== null && i !== void 0 && i.nonce && o.nonce !== ((a = r.csp) === null || a === void 0 ? void 0 : a.nonce)) {
                var s;
                o.nonce = (s = r.csp) === null || s === void 0 ? void 0 : s.nonce
            }
            return o.innerHTML !== e && (o.innerHTML = e), o
        }
        var l = i0(e, r);
        return l.setAttribute(n0(r), t), l
    }

    function Wi(e) {
        var t = "";
        return Object.keys(e).forEach(function(r) {
            var n = e[r];
            t += r, n && H(n) === "object" ? t += Wi(n) : t += n
        }), t
    }

    function s0(e, t) {
        return wo("".concat(t, "_").concat(Wi(e)))
    }
    var Ui = "layer-".concat(Date.now(), "-").concat(Math.random()).replace(/\./g, ""),
        l0 = "903px";

    function wx(e, t) {
        if (ze()) {
            var r;
            dr(e, Ui);
            var n = document.createElement("div");
            n.style.position = "fixed", n.style.left = "0", n.style.top = "0", t?.(n), document.body.appendChild(n);
            var o = getComputedStyle(n).width === l0;
            return (r = n.parentNode) === null || r === void 0 || r.removeChild(n), cl(Ui), o
        }
        return !1
    }
    var dd = void 0;

    function u0() {
        return dd === void 0 && (dd = wx("@layer ".concat(Ui, " { .").concat(Ui, " { width: ").concat(l0, "!important; } }"), function(e) {
            e.className = Ui
        })), dd
    }
    var Eo = M(D());

    function bx() {
        return !1
    }
    var c0 = bx;

    function Vi(e, t, r, n) {
        var o = Eo.useContext(bo),
            i = o.cache,
            a = [e].concat(Ct(t)),
            s = c0();
        return Eo.useMemo(function() {
            i.update(a, function(l) {
                var u = l || [],
                    f = W(u, 2),
                    c = f[0],
                    p = c === void 0 ? 0 : c,
                    g = f[1],
                    v = g,
                    x = v || r();
                return [p + 1, x]
            })
        }, [a.join("_")]), Eo.useEffect(function() {
            return function() {
                i.update(a, function(l) {
                    var u = l || [],
                        f = W(u, 2),
                        c = f[0],
                        p = c === void 0 ? 0 : c,
                        g = f[1],
                        v = p - 1;
                    return v === 0 ? (n?.(g, !1), null) : [p - 1, g]
                })
            }
        }, a), i.get(a)[1]
    }
    var Ex = {},
        kx = "css",
        bn = new Map;

    function Px(e) {
        bn.set(e, (bn.get(e) || 0) + 1)
    }

    function Ox(e, t) {
        if (typeof document < "u") {
            var r = document.querySelectorAll("style[".concat(Bi, '="').concat(e, '"]'));
            r.forEach(function(n) {
                if (n[Hr] === t) {
                    var o;
                    (o = n.parentNode) === null || o === void 0 || o.removeChild(n)
                }
            })
        }
    }

    function Tx(e, t) {
        bn.set(e, (bn.get(e) || 0) - 1);
        var r = Array.from(bn.keys()),
            n = r.filter(function(o) {
                var i = bn.get(o) || 0;
                return i <= 0
            });
        n.length < r.length && n.forEach(function(o) {
            Ox(o, t), bn.delete(o)
        })
    }
    var d0 = function(t, r, n, o) {
        var i = n.getDerivativeToken(t),
            a = $($({}, i), r);
        return o && (a = o(a)), a
    };

    function dl(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
            n = (0, f0.useContext)(bo),
            o = n.cache.instanceId,
            i = r.salt,
            a = i === void 0 ? "" : i,
            s = r.override,
            l = s === void 0 ? Ex : s,
            u = r.formatToken,
            f = fl.useMemo(function() {
                return Object.assign.apply(Object, [{}].concat(Ct(t)))
            }, [t]),
            c = fl.useMemo(function() {
                return Wi(f)
            }, [f]),
            p = fl.useMemo(function() {
                return Wi(l)
            }, [l]),
            g = Vi("token", [a, e.id, c, p], function() {
                var v = d0(f, l, e, u),
                    x = s0(v, a);
                v._tokenKey = x, Px(x);
                var P = "".concat(kx, "-").concat(wo(x));
                return v._hashId = P, [v, P]
            }, function(v) {
                Tx(v[0]._tokenKey, o)
            });
        return g
    }
    var Ur = M(D());
    var Rx = {
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
        pd = Rx;
    var pl = "comm",
        ml = "rule",
        gl = "decl";
    var p0 = "@import";
    var m0 = "@keyframes";
    var g0 = "@layer";
    var h0 = Math.abs,
        Ki = String.fromCharCode;

    function hl(e) {
        return e.trim()
    }

    function Gi(e, t, r) {
        return e.replace(t, r)
    }

    function v0(e, t) {
        return e.indexOf(t)
    }

    function En(e, t) {
        return e.charCodeAt(t) | 0
    }

    function kn(e, t, r) {
        return e.slice(t, r)
    }

    function It(e) {
        return e.length
    }

    function vl(e) {
        return e.length
    }

    function ko(e, t) {
        return t.push(e), e
    }
    var yl = 1,
        Po = 1,
        y0 = 0,
        wt = 0,
        ge = 0,
        Oo = "";

    function xl(e, t, r, n, o, i, a) {
        return {
            value: e,
            root: t,
            parent: r,
            type: n,
            props: o,
            children: i,
            line: yl,
            column: Po,
            length: a,
            return: ""
        }
    }

    function x0() {
        return ge
    }

    function S0() {
        return ge = wt > 0 ? En(Oo, --wt) : 0, Po--, ge === 10 && (Po = 1, yl--), ge
    }

    function bt() {
        return ge = wt < y0 ? En(Oo, wt++) : 0, Po++, ge === 10 && (Po = 1, yl++), ge
    }

    function Br() {
        return En(Oo, wt)
    }

    function Qi() {
        return wt
    }

    function Sl(e, t) {
        return kn(Oo, e, t)
    }

    function md(e) {
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

    function C0(e) {
        return yl = Po = 1, y0 = It(Oo = e), wt = 0, []
    }

    function w0(e) {
        return Oo = "", e
    }

    function Cl(e) {
        return hl(Sl(wt - 1, gd(e === 91 ? e + 2 : e === 40 ? e + 1 : e)))
    }

    function b0(e) {
        for (;
            (ge = Br()) && ge < 33;) bt();
        return md(e) > 2 || md(ge) > 3 ? "" : " "
    }

    function E0(e, t) {
        for (; --t && bt() && !(ge < 48 || ge > 102 || ge > 57 && ge < 65 || ge > 70 && ge < 97););
        return Sl(e, Qi() + (t < 6 && Br() == 32 && bt() == 32))
    }

    function gd(e) {
        for (; bt();) switch (ge) {
            case e:
                return wt;
            case 34:
            case 39:
                e !== 34 && e !== 39 && gd(ge);
                break;
            case 40:
                e === 41 && gd(e);
                break;
            case 92:
                bt();
                break
        }
        return wt
    }

    function k0(e, t) {
        for (; bt() && e + ge !== 47 + 10;)
            if (e + ge === 42 + 42 && Br() === 47) break;
        return "/*" + Sl(t, wt - 1) + "*" + Ki(e === 47 ? e : bt())
    }

    function P0(e) {
        for (; !md(Br());) bt();
        return Sl(e, wt)
    }

    function R0(e) {
        return w0(wl("", null, null, null, [""], e = C0(e), 0, [0], e))
    }

    function wl(e, t, r, n, o, i, a, s, l) {
        for (var u = 0, f = 0, c = a, p = 0, g = 0, v = 0, x = 1, P = 1, m = 1, d = 0, h = "", y = o, S = i, w = n, C = h; P;) switch (v = d, d = bt()) {
            case 40:
                if (v != 108 && En(C, c - 1) == 58) {
                    v0(C += Gi(Cl(d), "&", "&\f"), "&\f") != -1 && (m = -1);
                    break
                }
            case 34:
            case 39:
            case 91:
                C += Cl(d);
                break;
            case 9:
            case 10:
            case 13:
            case 32:
                C += b0(v);
                break;
            case 92:
                C += E0(Qi() - 1, 7);
                continue;
            case 47:
                switch (Br()) {
                    case 42:
                    case 47:
                        ko(Ax(k0(bt(), Qi()), t, r), l);
                        break;
                    default:
                        C += "/"
                }
                break;
            case 123 * x:
                s[u++] = It(C) * m;
            case 125 * x:
            case 59:
            case 0:
                switch (d) {
                    case 0:
                    case 125:
                        P = 0;
                    case 59 + f:
                        m == -1 && (C = Gi(C, /\f/g, "")), g > 0 && It(C) - c && ko(g > 32 ? T0(C + ";", n, r, c - 1) : T0(Gi(C, " ", "") + ";", n, r, c - 2), l);
                        break;
                    case 59:
                        C += ";";
                    default:
                        if (ko(w = O0(C, t, r, u, f, o, s, h, y = [], S = [], c), i), d === 123)
                            if (f === 0) wl(C, t, w, w, y, i, c, s, S);
                            else switch (p === 99 && En(C, 3) === 110 ? 100 : p) {
                                case 100:
                                case 108:
                                case 109:
                                case 115:
                                    wl(e, w, w, n && ko(O0(e, w, w, 0, 0, o, s, h, o, y = [], c), S), o, S, c, s, n ? y : S);
                                    break;
                                default:
                                    wl(C, w, w, w, [""], S, 0, s, S)
                            }
                }
                u = f = g = 0, x = m = 1, h = C = "", c = a;
                break;
            case 58:
                c = 1 + It(C), g = v;
            default:
                if (x < 1) {
                    if (d == 123) --x;
                    else if (d == 125 && x++ == 0 && S0() == 125) continue
                }
                switch (C += Ki(d), d * x) {
                    case 38:
                        m = f > 0 ? 1 : (C += "\f", -1);
                        break;
                    case 44:
                        s[u++] = (It(C) - 1) * m, m = 1;
                        break;
                    case 64:
                        Br() === 45 && (C += Cl(bt())), p = Br(), f = c = It(h = C += P0(Qi())), d++;
                        break;
                    case 45:
                        v === 45 && It(C) == 2 && (x = 0)
                }
        }
        return i
    }

    function O0(e, t, r, n, o, i, a, s, l, u, f) {
        for (var c = o - 1, p = o === 0 ? i : [""], g = vl(p), v = 0, x = 0, P = 0; v < n; ++v)
            for (var m = 0, d = kn(e, c + 1, c = h0(x = a[v])), h = e; m < g; ++m)(h = hl(x > 0 ? p[m] + " " + d : Gi(d, /&\f/g, p[m]))) && (l[P++] = h);
        return xl(e, t, r, o === 0 ? ml : s, l, u, f)
    }

    function Ax(e, t, r) {
        return xl(e, t, r, pl, Ki(x0()), kn(e, 2, -2), 0)
    }

    function T0(e, t, r, n) {
        return xl(e, t, r, gl, kn(e, 0, n), kn(e, n + 1, -1), n)
    }

    function bl(e, t) {
        for (var r = "", n = vl(e), o = 0; o < n; o++) r += t(e[o], o, e, t) || "";
        return r
    }

    function A0(e, t, r, n) {
        switch (e.type) {
            case g0:
                if (e.children.length) break;
            case p0:
            case gl:
                return e.return = e.return || e.value;
            case pl:
                return "";
            case m0:
                return e.return = e.value + "{" + bl(e.children, n) + "}";
            case ml:
                e.value = e.props.join(",")
        }
        return It(r = bl(e.children, n)) ? e.return = e.value + "{" + r + "}" : ""
    }
    var _0 = ze(),
        jx = "_skip_check_",
        L0 = "_multi_value_";

    function N0(e) {
        var t = bl(R0(e), A0);
        return t.replace(/\{%%%\:[^;];}/g, ";")
    }

    function Mx(e) {
        return H(e) === "object" && e && (jx in e || L0 in e)
    }

    function Ix(e, t, r) {
        if (!t) return e;
        var n = ".".concat(t),
            o = r === "low" ? ":where(".concat(n, ")") : n,
            i = e.split(",").map(function(a) {
                var s, l = a.trim().split(/\s+/),
                    u = l[0] || "",
                    f = ((s = u.match(/^\w+/)) === null || s === void 0 ? void 0 : s[0]) || "";
                return u = "".concat(f).concat(o).concat(u.slice(f.length)), [u].concat(Ct(l.slice(1))).join(" ")
            });
        return i.join(",")
    }
    var Dx = function e(t) {
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
            p = c === void 0 ? [] : c,
            g = r.linters,
            v = g === void 0 ? [] : g,
            x = "",
            P = {};

        function m(w) {
            var C = w.getName(s);
            if (!P[C]) {
                var O = e(w.style, r, {
                        root: !1,
                        parentSelectors: a
                    }),
                    A = W(O, 1),
                    k = A[0];
                P[C] = "@keyframes ".concat(w.getName(s)).concat(k)
            }
        }

        function d(w) {
            var C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
            return w.forEach(function(O) {
                Array.isArray(O) ? d(O, C) : O && C.push(O)
            }), C
        }
        var h = d(Array.isArray(t) ? t : [t]);
        if (h.forEach(function(w) {
                var C = typeof w == "string" && !o ? {} : w;
                if (typeof C == "string") x += "".concat(C, `
`);
                else if (C._keyframe) m(C);
                else {
                    var O = p.reduce(function(A, k) {
                        var L;
                        return (k == null || (L = k.visit) === null || L === void 0 ? void 0 : L.call(k, A)) || A
                    }, C);
                    Object.keys(O).forEach(function(A) {
                        var k = O[A];
                        if (H(k) === "object" && k && (A !== "animationName" || !k._keyframe) && !Mx(k)) {
                            var L = !1,
                                E = A.trim(),
                                b = !1;
                            (o || i) && s ? E.startsWith("@") ? L = !0 : E = Ix(A, s, f) : o && !s && (E === "&" || E === "") && (E = "", b = !0);
                            var T = e(k, r, {
                                    root: b,
                                    injectHash: L,
                                    parentSelectors: [].concat(Ct(a), [E])
                                }),
                                R = W(T, 2),
                                _ = R[0],
                                j = R[1];
                            P = $($({}, P), j), x += "".concat(E).concat(_)
                        } else {
                            let G = function(oe, Z) {
                                var he = oe.replace(/[A-Z]/g, function(kt) {
                                        return "-".concat(kt.toLowerCase())
                                    }),
                                    Ce = Z;
                                !pd[oe] && typeof Ce == "number" && Ce !== 0 && (Ce = "".concat(Ce, "px")), oe === "animationName" && Z !== null && Z !== void 0 && Z._keyframe && (m(Z), Ce = Z.getName(s)), x += "".concat(he, ":").concat(Ce, ";")
                            };
                            var B, U = (B = k?.value) !== null && B !== void 0 ? B : k;
                            H(k) === "object" && k !== null && k !== void 0 && k[L0] && Array.isArray(U) ? U.forEach(function(oe) {
                                G(A, oe)
                            }) : G(A, U)
                        }
                    })
                }
            }), !o) x = "{".concat(x, "}");
        else if (l && u0()) {
            var y = l.split(","),
                S = y[y.length - 1].trim();
            x = "@layer ".concat(S, " {").concat(x, "}"), y.length > 1 && (x = "@layer ".concat(l, "{%%%:%}").concat(x))
        }
        return [x, P]
    };

    function Fx(e, t) {
        return wo("".concat(e.join("%")).concat(t))
    }

    function zx() {
        return null
    }

    function Wr(e, t) {
        var r = e.token,
            n = e.path,
            o = e.hashId,
            i = e.layer,
            a = e.nonce,
            s = Ur.useContext(bo),
            l = s.autoClear,
            u = s.mock,
            f = s.defaultCache,
            c = s.hashPriority,
            p = s.container,
            g = s.ssrInline,
            v = s.transformers,
            x = s.linters,
            P = s.cache,
            m = r._tokenKey,
            d = [m].concat(Ct(n)),
            h = _0,
            y = Vi("style", d, function() {
                var A = t(),
                    k = Dx(A, {
                        hashId: o,
                        hashPriority: c,
                        layer: i,
                        path: n.join("-"),
                        transformers: v,
                        linters: x
                    }),
                    L = W(k, 2),
                    E = L[0],
                    b = L[1],
                    T = N0(E),
                    R = Fx(d, T);
                if (h) {
                    var _ = {
                            mark: wn,
                            prepend: "queue",
                            attachTo: p
                        },
                        j = typeof a == "function" ? a() : a;
                    j && (_.csp = {
                        nonce: j
                    });
                    var B = dr(T, R, _);
                    B[Hr] = P.instanceId, B.setAttribute(Bi, m), Object.keys(b).forEach(function(U) {
                        dr(N0(b[U]), "_effect-".concat(U), _)
                    })
                }
                return [T, m, R]
            }, function(A, k) {
                var L = W(A, 3),
                    E = L[2];
                (k || l) && _0 && cl(E, {
                    mark: wn
                })
            }),
            S = W(y, 3),
            w = S[0],
            C = S[1],
            O = S[2];
        return function(A) {
            var k;
            if (!g || h || !f) k = Ur.createElement(zx, null);
            else {
                var L;
                k = Ur.createElement("style", Mt({}, (L = {}, z(L, Bi, C), z(L, wn, O), L), {
                    dangerouslySetInnerHTML: {
                        __html: w
                    }
                }))
            }
            return Ur.createElement(Ur.Fragment, null, k, A)
        }
    }

    function $x(e, t) {
        if (e.length !== t.length) return !1;
        for (var r = 0; r < e.length; r++)
            if (e[r] !== t[r]) return !1;
        return !0
    }
    var Xi = function() {
        function e() {
            re(this, e), z(this, "cache", void 0), z(this, "keys", void 0), z(this, "cacheCallTimes", void 0), this.cache = new Map, this.keys = [], this.cacheCallTimes = 0
        }
        return ne(e, [{
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
                                var c = W(u, 2),
                                    p = c[1];
                                return o.internalGet(f)[1] < p ? [f, o.internalGet(f)[1]] : u
                            }, [this.keys[0], this.cacheCallTimes]),
                            a = W(i, 1),
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
                    return !$x(n, r)
                }), this.deleteByPath(this.cache, r)
            }
        }]), e
    }();
    z(Xi, "MAX_CACHE_SIZE", 20);
    z(Xi, "MAX_CACHE_OFFSET", 5);
    var j0 = 0,
        kl = function() {
            function e(t) {
                re(this, e), z(this, "derivatives", void 0), z(this, "id", void 0), this.derivatives = Array.isArray(t) ? t : [t], this.id = j0, t.length === 0 && rd(t.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), j0 += 1
            }
            return ne(e, [{
                key: "getDerivativeToken",
                value: function(r) {
                    return this.derivatives.reduce(function(n, o) {
                        return o(r, n)
                    }, void 0)
                }
            }]), e
        }();
    var hd = new Xi;

    function Pn(e) {
        var t = Array.isArray(e) ? e : [e];
        return hd.has(t) || hd.set(t, new kl(t)), hd.get(t)
    }

    function To(e) {
        return e.notSplit = !0, e
    }
    var w7 = {
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
        borderBlock: To(["borderTop", "borderBottom"]),
        borderBlockStart: To(["borderTop"]),
        borderBlockEnd: To(["borderBottom"]),
        borderInline: To(["borderLeft", "borderRight"]),
        borderInlineStart: To(["borderLeft"]),
        borderInlineEnd: To(["borderRight"]),
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
    var M0 = M(D()),
        Hx = (0, M0.createContext)({}),
        Ro = Hx;

    function Ao(e, t) {
        for (var r = e, n = 0; n < t.length; n += 1) {
            if (r == null) return;
            r = r[t[n]]
        }
        return r
    }

    function D0(e, t, r, n) {
        if (!t.length) return r;
        var o = Di(t),
            i = o[0],
            a = o.slice(1),
            s;
        return !e && typeof i == "number" ? s = [] : Array.isArray(e) ? s = Ct(e) : s = $({}, e), n && r === void 0 && a.length === 1 ? delete s[i][a[0]] : s[i] = D0(s[i], a, r, n), s
    }

    function Yi(e, t, r) {
        var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
        return t.length && n && r === void 0 && !Ao(e, t.slice(0, -1)) ? e : D0(e, t, r, n)
    }

    function Bx(e) {
        return H(e) === "object" && e !== null && Object.getPrototypeOf(e) === Object.prototype
    }

    function I0(e) {
        return Array.isArray(e) ? [] : {}
    }
    var Ux = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;

    function F0() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        var n = I0(t[0]);
        return t.forEach(function(o) {
            function i(a, s) {
                var l = new Set(s),
                    u = Ao(o, a),
                    f = Array.isArray(u);
                if (f || Bx(u)) {
                    if (!l.has(u)) {
                        l.add(u);
                        var c = Ao(n, a);
                        f ? n = Yi(n, a, []) : (!c || H(c) !== "object") && (n = Yi(n, a, I0(u))), Ux(u).forEach(function(p) {
                            i([].concat(Ct(a), [p]), l)
                        })
                    }
                } else n = Yi(n, a, u)
            }
            i([])
        }), n
    }
    var Se = M(D());
    var z0 = M(D()),
        $0 = (0, z0.createContext)(void 0);
    var _o = M(D());
    var H0 = {
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
    var Wx = {
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
        B0 = Wx;
    var Vx = {
            placeholder: "Select time",
            rangePlaceholder: ["Start time", "End time"]
        },
        Pl = Vx;
    var Kx = {
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
            }, B0),
            timePickerLocale: Object.assign({}, Pl)
        },
        Ol = Kx;
    var U0 = Ol;
    var ct = "${label} is not a valid ${type}",
        Gx = {
            locale: "en",
            Pagination: H0,
            DatePicker: Ol,
            TimePicker: Pl,
            Calendar: U0,
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
                        string: ct,
                        method: ct,
                        array: ct,
                        object: ct,
                        number: ct,
                        date: ct,
                        boolean: ct,
                        integer: ct,
                        float: ct,
                        regexp: ct,
                        email: ct,
                        url: ct,
                        hex: ct
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
        Zi = Gx;
    var vd = Object.assign({}, Zi.Modal);

    function yd(e) {
        e ? vd = Object.assign(Object.assign({}, vd), e) : vd = Object.assign({}, Zi.Modal)
    }
    var W0 = M(D()),
        Qx = (0, W0.createContext)(void 0),
        Tl = Qx;
    var V0 = "internalMark",
        Xx = e => {
            let {
                locale: t = {},
                children: r,
                _ANT_MARK__: n
            } = e;
            _o.useEffect(() => (yd(t && t.Modal), () => {
                yd()
            }), [t]);
            let o = _o.useMemo(() => Object.assign(Object.assign({}, t), {
                exist: !0
            }), [t]);
            return _o.createElement(Tl.Provider, {
                value: o
            }, r)
        },
        K0 = Xx;
    var Id = M(D());
    var G0 = "5.6.3";
    var Q0 = G0;

    function xe(e, t) {
        Yx(e) && (e = "100%");
        var r = Zx(e);
        return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), r && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e)
    }

    function qi(e) {
        return Math.min(1, Math.max(0, e))
    }

    function Yx(e) {
        return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1
    }

    function Zx(e) {
        return typeof e == "string" && e.indexOf("%") !== -1
    }

    function Rl(e) {
        return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e
    }

    function Ji(e) {
        return e <= 1 ? "".concat(Number(e) * 100, "%") : e
    }

    function Vr(e) {
        return e.length === 1 ? "0" + e : String(e)
    }

    function X0(e, t, r) {
        return {
            r: xe(e, 255) * 255,
            g: xe(t, 255) * 255,
            b: xe(r, 255) * 255
        }
    }

    function Sd(e, t, r) {
        e = xe(e, 255), t = xe(t, 255), r = xe(r, 255);
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

    function xd(e, t, r) {
        return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * (6 * r) : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
    }

    function Y0(e, t, r) {
        var n, o, i;
        if (e = xe(e, 360), t = xe(t, 100), r = xe(r, 100), t === 0) o = r, i = r, n = r;
        else {
            var a = r < .5 ? r * (1 + t) : r + t - r * t,
                s = 2 * r - a;
            n = xd(s, a, e + 1 / 3), o = xd(s, a, e), i = xd(s, a, e - 1 / 3)
        }
        return {
            r: n * 255,
            g: o * 255,
            b: i * 255
        }
    }

    function ea(e, t, r) {
        e = xe(e, 255), t = xe(t, 255), r = xe(r, 255);
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

    function Z0(e, t, r) {
        e = xe(e, 360) * 6, t = xe(t, 100), r = xe(r, 100);
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

    function ta(e, t, r, n) {
        var o = [Vr(Math.round(e).toString(16)), Vr(Math.round(t).toString(16)), Vr(Math.round(r).toString(16))];
        return n && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) : o.join("")
    }

    function q0(e, t, r, n, o) {
        var i = [Vr(Math.round(e).toString(16)), Vr(Math.round(t).toString(16)), Vr(Math.round(r).toString(16)), Vr(qx(n))];
        return o && i[0].startsWith(i[0].charAt(1)) && i[1].startsWith(i[1].charAt(1)) && i[2].startsWith(i[2].charAt(1)) && i[3].startsWith(i[3].charAt(1)) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) + i[3].charAt(0) : i.join("")
    }

    function qx(e) {
        return Math.round(parseFloat(e) * 255).toString(16)
    }

    function Cd(e) {
        return et(e) / 255
    }

    function et(e) {
        return parseInt(e, 16)
    }

    function J0(e) {
        return {
            r: e >> 16,
            g: (e & 65280) >> 8,
            b: e & 255
        }
    }
    var ra = {
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

    function Gr(e) {
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
        return typeof e == "string" && (e = t3(e)), typeof e == "object" && (pr(e.r) && pr(e.g) && pr(e.b) ? (t = X0(e.r, e.g, e.b), a = !0, s = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : pr(e.h) && pr(e.s) && pr(e.v) ? (n = Ji(e.s), o = Ji(e.v), t = Z0(e.h, n, o), a = !0, s = "hsv") : pr(e.h) && pr(e.s) && pr(e.l) && (n = Ji(e.s), i = Ji(e.l), t = Y0(e.h, n, i), a = !0, s = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (r = e.a)), r = Rl(r), {
            ok: a,
            format: e.format || s,
            r: Math.min(255, Math.max(t.r, 0)),
            g: Math.min(255, Math.max(t.g, 0)),
            b: Math.min(255, Math.max(t.b, 0)),
            a: r
        }
    }
    var Jx = "[-\\+]?\\d+%?",
        e3 = "[-\\+]?\\d*\\.\\d+%?",
        Kr = "(?:".concat(e3, ")|(?:").concat(Jx, ")"),
        wd = "[\\s|\\(]+(".concat(Kr, ")[,|\\s]+(").concat(Kr, ")[,|\\s]+(").concat(Kr, ")\\s*\\)?"),
        bd = "[\\s|\\(]+(".concat(Kr, ")[,|\\s]+(").concat(Kr, ")[,|\\s]+(").concat(Kr, ")[,|\\s]+(").concat(Kr, ")\\s*\\)?"),
        Dt = {
            CSS_UNIT: new RegExp(Kr),
            rgb: new RegExp("rgb" + wd),
            rgba: new RegExp("rgba" + bd),
            hsl: new RegExp("hsl" + wd),
            hsla: new RegExp("hsla" + bd),
            hsv: new RegExp("hsv" + wd),
            hsva: new RegExp("hsva" + bd),
            hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
            hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
        };

    function t3(e) {
        if (e = e.trim().toLowerCase(), e.length === 0) return !1;
        var t = !1;
        if (ra[e]) e = ra[e], t = !0;
        else if (e === "transparent") return {
            r: 0,
            g: 0,
            b: 0,
            a: 0,
            format: "name"
        };
        var r = Dt.rgb.exec(e);
        return r ? {
            r: r[1],
            g: r[2],
            b: r[3]
        } : (r = Dt.rgba.exec(e), r ? {
            r: r[1],
            g: r[2],
            b: r[3],
            a: r[4]
        } : (r = Dt.hsl.exec(e), r ? {
            h: r[1],
            s: r[2],
            l: r[3]
        } : (r = Dt.hsla.exec(e), r ? {
            h: r[1],
            s: r[2],
            l: r[3],
            a: r[4]
        } : (r = Dt.hsv.exec(e), r ? {
            h: r[1],
            s: r[2],
            v: r[3]
        } : (r = Dt.hsva.exec(e), r ? {
            h: r[1],
            s: r[2],
            v: r[3],
            a: r[4]
        } : (r = Dt.hex8.exec(e), r ? {
            r: et(r[1]),
            g: et(r[2]),
            b: et(r[3]),
            a: Cd(r[4]),
            format: t ? "name" : "hex8"
        } : (r = Dt.hex6.exec(e), r ? {
            r: et(r[1]),
            g: et(r[2]),
            b: et(r[3]),
            format: t ? "name" : "hex"
        } : (r = Dt.hex4.exec(e), r ? {
            r: et(r[1] + r[1]),
            g: et(r[2] + r[2]),
            b: et(r[3] + r[3]),
            a: Cd(r[4] + r[4]),
            format: t ? "name" : "hex8"
        } : (r = Dt.hex3.exec(e), r ? {
            r: et(r[1] + r[1]),
            g: et(r[2] + r[2]),
            b: et(r[3] + r[3]),
            format: t ? "name" : "hex"
        } : !1)))))))))
    }

    function pr(e) {
        return !!Dt.CSS_UNIT.exec(String(e))
    }
    var ke = function() {
        function e(t, r) {
            t === void 0 && (t = ""), r === void 0 && (r = {});
            var n;
            if (t instanceof e) return t;
            typeof t == "number" && (t = J0(t)), this.originalInput = t;
            var o = Gr(t);
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
            return this.a = Rl(t), this.roundA = Math.round(100 * this.a) / 100, this
        }, e.prototype.isMonochrome = function() {
            var t = this.toHsl().s;
            return t === 0
        }, e.prototype.toHsv = function() {
            var t = ea(this.r, this.g, this.b);
            return {
                h: t.h * 360,
                s: t.s,
                v: t.v,
                a: this.a
            }
        }, e.prototype.toHsvString = function() {
            var t = ea(this.r, this.g, this.b),
                r = Math.round(t.h * 360),
                n = Math.round(t.s * 100),
                o = Math.round(t.v * 100);
            return this.a === 1 ? "hsv(".concat(r, ", ").concat(n, "%, ").concat(o, "%)") : "hsva(".concat(r, ", ").concat(n, "%, ").concat(o, "%, ").concat(this.roundA, ")")
        }, e.prototype.toHsl = function() {
            var t = Sd(this.r, this.g, this.b);
            return {
                h: t.h * 360,
                s: t.s,
                l: t.l,
                a: this.a
            }
        }, e.prototype.toHslString = function() {
            var t = Sd(this.r, this.g, this.b),
                r = Math.round(t.h * 360),
                n = Math.round(t.s * 100),
                o = Math.round(t.l * 100);
            return this.a === 1 ? "hsl(".concat(r, ", ").concat(n, "%, ").concat(o, "%)") : "hsla(".concat(r, ", ").concat(n, "%, ").concat(o, "%, ").concat(this.roundA, ")")
        }, e.prototype.toHex = function(t) {
            return t === void 0 && (t = !1), ta(this.r, this.g, this.b, t)
        }, e.prototype.toHexString = function(t) {
            return t === void 0 && (t = !1), "#" + this.toHex(t)
        }, e.prototype.toHex8 = function(t) {
            return t === void 0 && (t = !1), q0(this.r, this.g, this.b, this.a, t)
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
                return "".concat(Math.round(xe(r, 255) * 100), "%")
            };
            return {
                r: t(this.r),
                g: t(this.g),
                b: t(this.b),
                a: this.a
            }
        }, e.prototype.toPercentageRgbString = function() {
            var t = function(r) {
                return Math.round(xe(r, 255) * 100)
            };
            return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")")
        }, e.prototype.toName = function() {
            if (this.a === 0) return "transparent";
            if (this.a < 1) return !1;
            for (var t = "#" + ta(this.r, this.g, this.b, !1), r = 0, n = Object.entries(ra); r < n.length; r++) {
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
            return r.l += t / 100, r.l = qi(r.l), new e(r)
        }, e.prototype.brighten = function(t) {
            t === void 0 && (t = 10);
            var r = this.toRgb();
            return r.r = Math.max(0, Math.min(255, r.r - Math.round(255 * -(t / 100)))), r.g = Math.max(0, Math.min(255, r.g - Math.round(255 * -(t / 100)))), r.b = Math.max(0, Math.min(255, r.b - Math.round(255 * -(t / 100)))), new e(r)
        }, e.prototype.darken = function(t) {
            t === void 0 && (t = 10);
            var r = this.toHsl();
            return r.l -= t / 100, r.l = qi(r.l), new e(r)
        }, e.prototype.tint = function(t) {
            return t === void 0 && (t = 10), this.mix("white", t)
        }, e.prototype.shade = function(t) {
            return t === void 0 && (t = 10), this.mix("black", t)
        }, e.prototype.desaturate = function(t) {
            t === void 0 && (t = 10);
            var r = this.toHsl();
            return r.s -= t / 100, r.s = qi(r.s), new e(r)
        }, e.prototype.saturate = function(t) {
            t === void 0 && (t = 10);
            var r = this.toHsl();
            return r.s += t / 100, r.s = qi(r.s), new e(r)
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
    var Al = 2,
        ev = .16,
        r3 = .05,
        n3 = .05,
        o3 = .15,
        iv = 5,
        av = 4,
        i3 = [{
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

    function tv(e) {
        var t = e.r,
            r = e.g,
            n = e.b,
            o = ea(t, r, n);
        return {
            h: o.h * 360,
            s: o.s,
            v: o.v
        }
    }

    function _l(e) {
        var t = e.r,
            r = e.g,
            n = e.b;
        return "#".concat(ta(t, r, n, !1))
    }

    function a3(e, t, r) {
        var n = r / 100,
            o = {
                r: (t.r - e.r) * n + e.r,
                g: (t.g - e.g) * n + e.g,
                b: (t.b - e.b) * n + e.b
            };
        return o
    }

    function rv(e, t, r) {
        var n;
        return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? n = r ? Math.round(e.h) - Al * t : Math.round(e.h) + Al * t : n = r ? Math.round(e.h) + Al * t : Math.round(e.h) - Al * t, n < 0 ? n += 360 : n >= 360 && (n -= 360), n
    }

    function nv(e, t, r) {
        if (e.h === 0 && e.s === 0) return e.s;
        var n;
        return r ? n = e.s - ev * t : t === av ? n = e.s + ev : n = e.s + r3 * t, n > 1 && (n = 1), r && t === iv && n > .1 && (n = .1), n < .06 && (n = .06), Number(n.toFixed(2))
    }

    function ov(e, t, r) {
        var n;
        return r ? n = e.v + n3 * t : n = e.v - o3 * t, n > 1 && (n = 1), Number(n.toFixed(2))
    }

    function ft(e) {
        for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = [], n = Gr(e), o = iv; o > 0; o -= 1) {
            var i = tv(n),
                a = _l(Gr({
                    h: rv(i, o, !0),
                    s: nv(i, o, !0),
                    v: ov(i, o, !0)
                }));
            r.push(a)
        }
        r.push(_l(n));
        for (var s = 1; s <= av; s += 1) {
            var l = tv(n),
                u = _l(Gr({
                    h: rv(l, s),
                    s: nv(l, s),
                    v: ov(l, s)
                }));
            r.push(u)
        }
        return t.theme === "dark" ? i3.map(function(f) {
            var c = f.index,
                p = f.opacity,
                g = _l(a3(Gr(t.backgroundColor || "#141414"), Gr(r[c]), p * 100));
            return g
        }) : r
    }
    var Ed = {
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
        _e = {},
        kd = {};
    Object.keys(Ed).forEach(function(e) {
        _e[e] = ft(Ed[e]), _e[e].primary = _e[e][5], kd[e] = ft(Ed[e], {
            theme: "dark",
            backgroundColor: "#141414"
        }), kd[e].primary = kd[e][5]
    });
    var Mb = _e.red,
        Ib = _e.volcano,
        Db = _e.gold,
        Fb = _e.orange,
        zb = _e.yellow,
        $b = _e.lime,
        Hb = _e.green,
        Bb = _e.cyan,
        sv = _e.blue,
        Ub = _e.geekblue,
        Wb = _e.purple,
        Vb = _e.magenta,
        Kb = _e.grey,
        Gb = _e.grey;
    var s3 = e => {
            let {
                controlHeight: t
            } = e;
            return {
                controlHeightSM: t * .75,
                controlHeightXS: t * .5,
                controlHeightLG: t * 1.25
            }
        },
        lv = s3;

    function Pd(e) {
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
    var Od = {
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
        l3 = Object.assign(Object.assign({}, Od), {
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
        On = l3;

    function Td(e, t) {
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
        } = e, c = r(l), p = r(o), g = r(i), v = r(a), x = r(s), P = n(u, f);
        return Object.assign(Object.assign({}, P), {
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
            colorSuccessBg: p[1],
            colorSuccessBgHover: p[2],
            colorSuccessBorder: p[3],
            colorSuccessBorderHover: p[4],
            colorSuccessHover: p[4],
            colorSuccess: p[6],
            colorSuccessActive: p[7],
            colorSuccessTextHover: p[8],
            colorSuccessText: p[9],
            colorSuccessTextActive: p[10],
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
            colorInfoBg: x[1],
            colorInfoBgHover: x[2],
            colorInfoBorder: x[3],
            colorInfoBorderHover: x[4],
            colorInfoHover: x[4],
            colorInfo: x[6],
            colorInfoActive: x[7],
            colorInfoTextHover: x[8],
            colorInfoText: x[9],
            colorInfoTextActive: x[10],
            colorBgMask: new ke("#000").setAlpha(.45).toRgbString(),
            colorWhite: "#fff"
        })
    }
    var u3 = e => {
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
        uv = u3;

    function Rd(e) {
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
        }, uv(n))
    }
    var Yt = (e, t) => new ke(e).setAlpha(t).toRgbString(),
        No = (e, t) => new ke(e).darken(t).toHexString();
    var cv = e => {
            let t = ft(e);
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
        fv = (e, t) => {
            let r = e || "#fff",
                n = t || "#000";
            return {
                colorBgBase: r,
                colorTextBase: n,
                colorText: Yt(n, .88),
                colorTextSecondary: Yt(n, .65),
                colorTextTertiary: Yt(n, .45),
                colorTextQuaternary: Yt(n, .25),
                colorFill: Yt(n, .15),
                colorFillSecondary: Yt(n, .06),
                colorFillTertiary: Yt(n, .04),
                colorFillQuaternary: Yt(n, .02),
                colorBgLayout: No(r, 4),
                colorBgContainer: No(r, 0),
                colorBgElevated: No(r, 0),
                colorBgSpotlight: Yt(n, .85),
                colorBorder: No(r, 15),
                colorBorderSecondary: No(r, 6)
            }
        };

    function Ad(e) {
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
    var c3 = e => {
            let t = Ad(e),
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
        dv = c3;

    function _d(e) {
        let t = Object.keys(Od).map(r => {
            let n = ft(e[r]);
            return new Array(10).fill(1).reduce((o, i, a) => (o[`${r}-${a+1}`] = n[a], o[`${r}${a+1}`] = n[a], o), {})
        }).reduce((r, n) => (r = Object.assign(Object.assign({}, r), n), r), {});
        return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), Td(e, {
            generateColorPalettes: cv,
            generateNeutralColorPalettes: fv
        })), dv(e.fontSize)), Pd(e)), lv(e)), Rd(e))
    }

    function Nd(e) {
        return e >= 0 && e <= 255
    }

    function f3(e, t) {
        let {
            r,
            g: n,
            b: o,
            a: i
        } = new ke(e).toRgb();
        if (i < 1) return e;
        let {
            r: a,
            g: s,
            b: l
        } = new ke(t).toRgb();
        for (let u = .01; u <= 1; u += .01) {
            let f = Math.round((r - a * (1 - u)) / u),
                c = Math.round((n - s * (1 - u)) / u),
                p = Math.round((o - l * (1 - u)) / u);
            if (Nd(f) && Nd(c) && Nd(p)) return new ke({
                r: f,
                g: c,
                b: p,
                a: Math.round(u * 100) / 100
            }).toRgbString()
        }
        return new ke({
            r,
            g: n,
            b: o,
            a: 1
        }).toRgbString()
    }
    var na = f3;
    var d3 = function(e, t) {
        var r = {};
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
        if (e != null && typeof Object.getOwnPropertySymbols == "function")
            for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
        return r
    };

    function Ld(e) {
        let {
            override: t
        } = e, r = d3(e, ["override"]), n = Object.assign({}, t);
        Object.keys(On).forEach(p => {
            delete n[p]
        });
        let o = Object.assign(Object.assign({}, r), n),
            i = 480,
            a = 576,
            s = 768,
            l = 992,
            u = 1200,
            f = 1600;
        if (o.motion === !1) {
            let p = "0s";
            o.motionDurationFast = p, o.motionDurationMid = p, o.motionDurationSlow = p
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
            colorSplit: na(o.colorBorderSecondary, o.colorBgContainer),
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
            colorErrorOutline: na(o.colorErrorBg, o.colorBgContainer),
            colorWarningOutline: na(o.colorWarningBg, o.colorBgContainer),
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
            controlOutline: na(o.colorPrimaryBg, o.colorBgContainer),
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
      0 1px 2px -2px ${new ke("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new ke("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new ke("rgba(0, 0, 0, 0.09)").toRgbString()}
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
    var pv = M(D());
    var oa = M(D());
    var TE = ze() ? oa.useLayoutEffect : oa.useEffect;
    var Lo = M(D());

    function Qr(e) {
        var t = Lo.useRef(!1),
            r = Lo.useState(e),
            n = W(r, 2),
            o = n[0],
            i = n[1];
        Lo.useEffect(function() {
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
    var xv = M(D());
    var mv = M(D()),
        jd = "anticon",
        p3 = (e, t) => t || (e ? `ant-${e}` : "ant"),
        dt = mv.createContext({
            getPrefixCls: p3,
            iconPrefixCls: jd
        }),
        {
            Consumer: m3
        } = dt;
    var gv = () => ({
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
    });
    var hv = e => ({
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
        vv = (e, t) => {
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
        g3 = e => ({
            outline: `${e.lineWidthFocus}px solid ${e.colorPrimaryBorder}`,
            outlineOffset: 1,
            transition: "outline-offset 0s, outline 0s"
        }),
        yv = e => ({
            "&:focus-visible": Object.assign({}, g3(e))
        });

    function jo(e, t, r, n) {
        return o => {
            let [i, a, s] = Yr(), {
                getPrefixCls: l,
                iconPrefixCls: u,
                csp: f
            } = (0, xv.useContext)(dt), c = l(), p = {
                theme: i,
                token: a,
                hashId: s,
                nonce: () => f?.nonce
            };
            return Wr(Object.assign(Object.assign({}, p), {
                path: ["Shared", c]
            }), () => [{
                "&": hv(a)
            }]), [Wr(Object.assign(Object.assign({}, p), {
                path: [e, o, u]
            }), () => {
                let {
                    token: g,
                    flush: v
                } = Nl(a), x = Object.assign({}, a[e]);
                if (n?.deprecatedTokens) {
                    let {
                        deprecatedTokens: S
                    } = n;
                    S.forEach(w => {
                        let [C, O] = w;
                        var A;
                        (x?.[C] || x?.[O]) && ((A = x[O]) !== null && A !== void 0 || (x[O] = x?.[C]))
                    })
                }
                let P = typeof r == "function" ? r(Xr(g, x ?? {})) : r,
                    m = Object.assign(Object.assign({}, P), x),
                    d = `.${o}`,
                    h = Xr(g, {
                        componentCls: d,
                        prefixCls: o,
                        iconCls: `.${u}`,
                        antCls: `.${c}`
                    }, m),
                    y = t(h, {
                        hashId: s,
                        prefixCls: o,
                        rootPrefixCls: c,
                        iconPrefixCls: u,
                        overrideComponentToken: x
                    });
                return v(e, m), [n?.resetStyle === !1 ? null : vv(a, o), y]
            }), s]
        }
    }
    var Sv = typeof CSSINJS_STATISTIC < "u",
        Md = !0;

    function Xr() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        if (!Sv) return Object.assign.apply(Object, [{}].concat(t));
        Md = !1;
        let n = {};
        return t.forEach(o => {
            Object.keys(o).forEach(a => {
                Object.defineProperty(n, a, {
                    configurable: !0,
                    enumerable: !0,
                    get: () => o[a]
                })
            })
        }), Md = !0, n
    }
    var h3 = {};

    function v3() {}

    function Nl(e) {
        let t, r = e,
            n = v3;
        return Sv && (t = new Set, r = new Proxy(e, {
            get(o, i) {
                return Md && t.add(i), o[i]
            }
        }), n = (o, i) => {
            h3[o] = {
                global: Array.from(t),
                component: i
            }
        }), {
            token: r,
            keys: t,
            flush: n
        }
    }
    var y3 = Pn(_d);
    var Dd = {
            token: On,
            hashed: !0
        },
        Fd = Id.default.createContext(Dd);

    function Yr() {
        let {
            token: e,
            hashed: t,
            theme: r,
            components: n
        } = Id.default.useContext(Fd), o = `${Q0}-${t||""}`, i = r || y3, [a, s] = dl(i, [On, e], {
            salt: o,
            override: Object.assign({
                override: e
            }, n),
            formatToken: Ld
        });
        return [i, a, t ? s : ""]
    }
    var x3 = `-ant-${Date.now()}-${Math.random()}`;

    function S3(e, t) {
        let r = {},
            n = (a, s) => {
                let l = a.clone();
                return l = s?.(l) || l, l.toRgbString()
            },
            o = (a, s) => {
                let l = new ke(a),
                    u = ft(l.toRgbString());
                r[`${s}-color`] = n(l), r[`${s}-color-disabled`] = u[1], r[`${s}-color-hover`] = u[4], r[`${s}-color-active`] = u[6], r[`${s}-color-outline`] = l.clone().setAlpha(.2).toRgbString(), r[`${s}-color-deprecated-bg`] = u[0], r[`${s}-color-deprecated-border`] = u[2]
            };
        if (t.primaryColor) {
            o(t.primaryColor, "primary");
            let a = new ke(t.primaryColor),
                s = ft(a.toRgbString());
            s.forEach((u, f) => {
                r[`primary-${f+1}`] = u
            }), r["primary-color-deprecated-l-35"] = n(a, u => u.lighten(35)), r["primary-color-deprecated-l-20"] = n(a, u => u.lighten(20)), r["primary-color-deprecated-t-20"] = n(a, u => u.tint(20)), r["primary-color-deprecated-t-50"] = n(a, u => u.tint(50)), r["primary-color-deprecated-f-12"] = n(a, u => u.setAlpha(u.getAlpha() * .12));
            let l = new ke(s[0]);
            r["primary-color-active-deprecated-f-30"] = n(l, u => u.setAlpha(u.getAlpha() * .3)), r["primary-color-active-deprecated-d-02"] = n(l, u => u.darken(2))
        }
        return t.successColor && o(t.successColor, "success"), t.warningColor && o(t.warningColor, "warning"), t.errorColor && o(t.errorColor, "error"), t.infoColor && o(t.infoColor, "info"), `
  :root {
    ${Object.keys(r).map(a=>`--${e}-${a}: ${r[a]};`).join(`
`)}
  }
  `.trim()
    }

    function Cv(e, t) {
        let r = S3(e, t);
        ze() && dr(r, `${x3}-dynamic-theme`)
    }
    var Mo = M(D()),
        zd = Mo.createContext(!1),
        wv = e => {
            let {
                children: t,
                disabled: r
            } = e, n = Mo.useContext(zd);
            return Mo.createElement(zd.Provider, {
                value: r ?? n
            }, t)
        },
        Ll = zd;
    var Hd = M(D());
    var Ml = M(D());
    var $d = M(D());
    var C3 = e => {
            let t = $d.default.useContext(Tn);
            return $d.default.useMemo(() => e ? typeof e == "string" ? e ?? t : e instanceof Function ? e(t) : t : t, [e, t])
        },
        jl = C3;
    var bv = Ml.createContext(void 0),
        Ev = e => {
            let {
                children: t,
                size: r
            } = e, n = jl(r);
            return Ml.createElement(bv.Provider, {
                value: n
            }, t)
        },
        Tn = bv;

    function w3() {
        let e = (0, Hd.useContext)(Ll),
            t = (0, Hd.useContext)(Tn);
        return {
            componentDisabled: e,
            componentSize: t
        }
    }
    var kv = w3;

    function Bd(e, t) {
        let r = e || {},
            n = r.inherit === !1 || !t ? Dd : t;
        return Cn(() => {
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
            return !ud(s, u, !0)
        }))
    }
    var zv = M(Xt());
    var rt = M(D()),
        Zd = M(D());
    var Il = M(D()),
        b3 = ["children"],
        Ud = Il.createContext({});

    function Dl(e) {
        var t = e.children,
            r = Fe(e, b3);
        return Il.createElement(Ud.Provider, {
            value: r
        }, t)
    }
    var Pv = M(D()),
        E3 = function(e) {
            Kt(r, e);
            var t = Hi(r);

            function r() {
                return re(this, r), t.apply(this, arguments)
            }
            return ne(r, [{
                key: "render",
                value: function() {
                    return this.props.children
                }
            }]), r
        }(Pv.Component),
        Ov = E3;
    var Gl = M(D()),
        qr = M(D());
    var mr = "none",
        ia = "appear",
        aa = "enter",
        sa = "leave",
        Wd = "none",
        tt = "prepare",
        gr = "start",
        Zr = "active",
        Fl = "end",
        zl = "prepared";
    var Bl = M(D()),
        Qd = M(D());

    function Tv(e, t) {
        var r = {};
        return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit".concat(e)] = "webkit".concat(t), r["Moz".concat(e)] = "moz".concat(t), r["ms".concat(e)] = "MS".concat(t), r["O".concat(e)] = "o".concat(t.toLowerCase()), r
    }

    function k3(e, t) {
        var r = {
            animationend: Tv("Animation", "AnimationEnd"),
            transitionend: Tv("Transition", "TransitionEnd")
        };
        return e && ("AnimationEvent" in t || delete r.animationend.animation, "TransitionEvent" in t || delete r.transitionend.transition), r
    }
    var P3 = k3(ze(), typeof window < "u" ? window : {}),
        Av = {};
    ze() && (Rv = document.createElement("div"), Av = Rv.style);
    var Rv, $l = {};

    function _v(e) {
        if ($l[e]) return $l[e];
        var t = P3[e];
        if (t)
            for (var r = Object.keys(t), n = r.length, o = 0; o < n; o += 1) {
                var i = r[o];
                if (Object.prototype.hasOwnProperty.call(t, i) && i in Av) return $l[e] = t[i], $l[e]
            }
        return ""
    }
    var Nv = _v("animationend"),
        Lv = _v("transitionend"),
        Hl = !!(Nv && Lv),
        Vd = Nv || "animationend",
        Kd = Lv || "transitionend";

    function Gd(e, t) {
        if (!e) return null;
        if (H(e) === "object") {
            var r = t.replace(/-\w/g, function(n) {
                return n[1].toUpperCase()
            });
            return e[r]
        }
        return "".concat(e, "-").concat(t)
    }
    var jv = function(e) {
        var t = (0, Qd.useRef)(),
            r = (0, Qd.useRef)(e);
        r.current = e;
        var n = Bl.useCallback(function(a) {
            r.current(a)
        }, []);

        function o(a) {
            a && (a.removeEventListener(Kd, n), a.removeEventListener(Vd, n))
        }

        function i(a) {
            t.current && t.current !== a && o(t.current), a && a !== t.current && (a.addEventListener(Kd, n), a.addEventListener(Vd, n), t.current = a)
        }
        return Bl.useEffect(function() {
            return function() {
                o(t.current)
            }
        }, []), [i, o]
    };
    var Ul = M(D());
    var O3 = ze() ? Ul.useLayoutEffect : Ul.useEffect,
        Wl = O3;
    var Iv = M(D());
    var Vl = M(D());
    var Mv = function() {
        var e = Vl.useRef(null);

        function t() {
            Co.cancel(e.current)
        }

        function r(n) {
            var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
            t();
            var i = Co(function() {
                o <= 1 ? n({
                    isCanceled: function() {
                        return i !== e.current
                    }
                }) : r(n, o - 1)
            });
            e.current = i
        }
        return Vl.useEffect(function() {
            return function() {
                t()
            }
        }, []), [r, t]
    };
    var T3 = [tt, gr, Zr, Fl],
        R3 = [tt, zl],
        Xd = !1,
        Dv = !0;

    function Kl(e) {
        return e === Zr || e === Fl
    }
    var Fv = function(e, t, r) {
        var n = Qr(Wd),
            o = W(n, 2),
            i = o[0],
            a = o[1],
            s = Mv(),
            l = W(s, 2),
            u = l[0],
            f = l[1];

        function c() {
            a(tt, !0)
        }
        var p = t ? R3 : T3;
        return Wl(function() {
            if (i !== Wd && i !== Fl) {
                var g = p.indexOf(i),
                    v = p[g + 1],
                    x = r(i);
                x === Xd ? a(v, !0) : v && u(function(P) {
                    function m() {
                        P.isCanceled() || a(v, !0)
                    }
                    x === !0 ? m() : Promise.resolve(x).then(m)
                })
            }
        }, [e, i]), Iv.useEffect(function() {
            return function() {
                f()
            }
        }, []), [c, i]
    };

    function Yd(e, t, r, n) {
        var o = n.motionEnter,
            i = o === void 0 ? !0 : o,
            a = n.motionAppear,
            s = a === void 0 ? !0 : a,
            l = n.motionLeave,
            u = l === void 0 ? !0 : l,
            f = n.motionDeadline,
            c = n.motionLeaveImmediately,
            p = n.onAppearPrepare,
            g = n.onEnterPrepare,
            v = n.onLeavePrepare,
            x = n.onAppearStart,
            P = n.onEnterStart,
            m = n.onLeaveStart,
            d = n.onAppearActive,
            h = n.onEnterActive,
            y = n.onLeaveActive,
            S = n.onAppearEnd,
            w = n.onEnterEnd,
            C = n.onLeaveEnd,
            O = n.onVisibleChanged,
            A = Qr(),
            k = W(A, 2),
            L = k[0],
            E = k[1],
            b = Qr(mr),
            T = W(b, 2),
            R = T[0],
            _ = T[1],
            j = Qr(null),
            B = W(j, 2),
            U = B[0],
            G = B[1],
            oe = (0, qr.useRef)(!1),
            Z = (0, qr.useRef)(null);

        function he() {
            return r()
        }
        var Ce = (0, qr.useRef)(!1);

        function kt() {
            _(mr, !0), G(null, !0)
        }

        function Ft(Pe) {
            var de = he();
            if (!(Pe && !Pe.deadline && Pe.target !== de)) {
                var Q = Ce.current,
                    pe;
                R === ia && Q ? pe = S?.(de, Pe) : R === aa && Q ? pe = w?.(de, Pe) : R === sa && Q && (pe = C?.(de, Pe)), R !== mr && Q && pe !== !1 && kt()
            }
        }
        var yr = jv(Ft),
            en = W(yr, 1),
            tn = en[0],
            Zt = function(de) {
                var Q, pe, Jt;
                switch (de) {
                    case ia:
                        return Q = {}, z(Q, tt, p), z(Q, gr, x), z(Q, Zr, d), Q;
                    case aa:
                        return pe = {}, z(pe, tt, g), z(pe, gr, P), z(pe, Zr, h), pe;
                    case sa:
                        return Jt = {}, z(Jt, tt, v), z(Jt, gr, m), z(Jt, Zr, y), Jt;
                    default:
                        return {}
                }
            },
            Ke = Gl.useMemo(function() {
                return Zt(R)
            }, [R]),
            qt = Fv(R, !e, function(Pe) {
                if (Pe === tt) {
                    var de = Ke[tt];
                    return de ? de(he()) : Xd
                }
                if (zt in Ke) {
                    var Q;
                    G(((Q = Ke[zt]) === null || Q === void 0 ? void 0 : Q.call(Ke, he(), null)) || null)
                }
                return zt === Zr && (tn(he()), f > 0 && (clearTimeout(Z.current), Z.current = setTimeout(function() {
                    Ft({
                        deadline: !0
                    })
                }, f))), zt === zl && kt(), Dv
            }),
            F = W(qt, 2),
            rn = F[0],
            zt = F[1],
            xu = Kl(zt);
        Ce.current = xu, Wl(function() {
            E(t);
            var Pe = oe.current;
            oe.current = !0;
            var de;
            !Pe && t && s && (de = ia), Pe && t && i && (de = aa), (Pe && !t && u || !Pe && c && !t && u) && (de = sa);
            var Q = Zt(de);
            de && (e || Q[tt]) ? (_(de), rn()) : _(mr)
        }, [t]), (0, qr.useEffect)(function() {
            (R === ia && !s || R === aa && !i || R === sa && !u) && _(mr)
        }, [s, i, u]), (0, qr.useEffect)(function() {
            return function() {
                oe.current = !1, clearTimeout(Z.current)
            }
        }, []);
        var zo = Gl.useRef(!1);
        (0, qr.useEffect)(function() {
            L && (zo.current = !0), L !== void 0 && R === mr && ((zo.current || L) && O?.(L), zo.current = !0)
        }, [L, R]);
        var Dn = U;
        return Ke[tt] && zt === gr && (Dn = $({
            transition: "none"
        }, Dn)), [R, zt, Dn, L ?? t]
    }

    function A3(e) {
        var t = e;
        H(e) === "object" && (t = e.transitionSupport);

        function r(o, i) {
            return !!(o.motionName && t && i !== !1)
        }
        var n = rt.forwardRef(function(o, i) {
            var a = o.visible,
                s = a === void 0 ? !0 : a,
                l = o.removeOnLeave,
                u = l === void 0 ? !0 : l,
                f = o.forceRender,
                c = o.children,
                p = o.motionName,
                g = o.leavedClassName,
                v = o.eventProps,
                x = rt.useContext(Ud),
                P = x.motion,
                m = r(o, P),
                d = (0, Zd.useRef)(),
                h = (0, Zd.useRef)();

            function y() {
                try {
                    return d.current instanceof HTMLElement ? d.current : od(h.current)
                } catch {
                    return null
                }
            }
            var S = Yd(m, s, y, o),
                w = W(S, 4),
                C = w[0],
                O = w[1],
                A = w[2],
                k = w[3],
                L = rt.useRef(k);
            k && (L.current = !0);
            var E = rt.useCallback(function(G) {
                    d.current = G, nd(i, G)
                }, [i]),
                b, T = $($({}, v), {}, {
                    visible: s
                });
            if (!c) b = null;
            else if (C === mr) k ? b = c($({}, T), E) : !u && L.current && g ? b = c($($({}, T), {}, {
                className: g
            }), E) : f || !u && !g ? b = c($($({}, T), {}, {
                style: {
                    display: "none"
                }
            }), E) : b = null;
            else {
                var R, _;
                O === tt ? _ = "prepare" : Kl(O) ? _ = "active" : O === gr && (_ = "start");
                var j = Gd(p, "".concat(C, "-").concat(_));
                b = c($($({}, T), {}, {
                    className: (0, zv.default)(Gd(p, C), (R = {}, z(R, j, j && _), z(R, p, typeof p == "string"), R)),
                    style: A
                }), E)
            }
            if (rt.isValidElement(b) && sl(b)) {
                var B = b,
                    U = B.ref;
                U || (b = rt.cloneElement(b, {
                    ref: E
                }))
            }
            return rt.createElement(Ov, {
                ref: h
            }, b)
        });
        return n.displayName = "CSSMotion", n
    }
    var Ql = A3(Hl);
    var Rn = M(D());
    var Xl = "add",
        Yl = "keep",
        Zl = "remove",
        Jl = "removed";

    function _3(e) {
        var t;
        return e && H(e) === "object" && "key" in e ? t = e : t = {
            key: e
        }, $($({}, t), {}, {
            key: String(t.key)
        })
    }

    function ql() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        return e.map(_3)
    }

    function $v() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
            t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
            r = [],
            n = 0,
            o = t.length,
            i = ql(e),
            a = ql(t);
        i.forEach(function(u) {
            for (var f = !1, c = n; c < o; c += 1) {
                var p = a[c];
                if (p.key === u.key) {
                    n < c && (r = r.concat(a.slice(n, c).map(function(g) {
                        return $($({}, g), {}, {
                            status: Xl
                        })
                    })), n = c), r.push($($({}, p), {}, {
                        status: Yl
                    })), n += 1, f = !0;
                    break
                }
            }
            f || r.push($($({}, u), {}, {
                status: Zl
            }))
        }), n < o && (r = r.concat(a.slice(n).map(function(u) {
            return $($({}, u), {}, {
                status: Xl
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
                    p = f.status;
                return c !== u || p !== Zl
            }), r.forEach(function(f) {
                f.key === u && (f.status = Yl)
            })
        }), r
    }
    var N3 = ["component", "children", "onVisibleChanged", "onAllRemoved"],
        L3 = ["status"],
        j3 = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];

    function M3(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ql,
            r = function(n) {
                Kt(i, n);
                var o = Hi(i);

                function i() {
                    var a;
                    re(this, i);
                    for (var s = arguments.length, l = new Array(s), u = 0; u < s; u++) l[u] = arguments[u];
                    return a = o.call.apply(o, [this].concat(l)), z(Je(a), "state", {
                        keyEntities: []
                    }), z(Je(a), "removeKey", function(f) {
                        var c = a.state.keyEntities,
                            p = c.map(function(g) {
                                return g.key !== f ? g : $($({}, g), {}, {
                                    status: Jl
                                })
                            });
                        return a.setState({
                            keyEntities: p
                        }), p.filter(function(g) {
                            var v = g.status;
                            return v !== Jl
                        }).length
                    }), a
                }
                return ne(i, [{
                    key: "render",
                    value: function() {
                        var s = this,
                            l = this.state.keyEntities,
                            u = this.props,
                            f = u.component,
                            c = u.children,
                            p = u.onVisibleChanged,
                            g = u.onAllRemoved,
                            v = Fe(u, N3),
                            x = f || Rn.Fragment,
                            P = {};
                        return j3.forEach(function(m) {
                            P[m] = v[m], delete v[m]
                        }), delete v.keys, Rn.createElement(x, v, l.map(function(m) {
                            var d = m.status,
                                h = Fe(m, L3),
                                y = d === Xl || d === Yl;
                            return Rn.createElement(t, Mt({}, P, {
                                key: h.key,
                                visible: y,
                                eventProps: h,
                                onVisibleChanged: function(w) {
                                    if (p?.(w, {
                                            key: h.key
                                        }), !w) {
                                        var C = s.removeKey(h.key);
                                        C === 0 && g && g()
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
                            c = ql(u),
                            p = $v(f, c);
                        return {
                            keyEntities: p.filter(function(g) {
                                var v = f.find(function(x) {
                                    var P = x.key;
                                    return g.key === P
                                });
                                return !(v && v.status === Jl && g.status === Zl)
                            })
                        }
                    }
                }]), i
            }(Rn.Component);
        return z(r, "defaultProps", {
            component: "div"
        }), r
    }
    var I3 = M3(Hl);
    var eu = Ql;
    var tu = M(D());

    function qd(e) {
        let {
            children: t
        } = e, [, r] = Yr(), {
            motion: n
        } = r, o = tu.useRef(!1);
        return o.current = o.current || n === !1, o.current ? tu.createElement(Dl, {
            motion: n
        }, t) : t
    }
    var D3 = (e, t) => {
            let [r, n] = Yr();
            return Wr({
                theme: r,
                token: n,
                hashId: "",
                path: ["ant-design-icons", e],
                nonce: () => t?.nonce
            }, () => [{
                [`.${e}`]: Object.assign(Object.assign({}, gv()), {
                    [`.${e} .${e}-icon`]: {
                        display: "block"
                    }
                })
            }])
        },
        Hv = D3;
    var F3 = function(e, t) {
        var r = {};
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
        if (e != null && typeof Object.getOwnPropertySymbols == "function")
            for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
        return r
    };
    var z3 = ["getTargetContainer", "getPopupContainer", "renderEmpty", "pageHeader", "input", "pagination", "form", "select", "button"],
        $3 = "ant",
        Bv, H3, B3;

    function U3() {
        return Bv || $3
    }

    function W3(e) {
        return Object.keys(e).some(t => t.endsWith("Color"))
    }
    var V3 = e => {
        let {
            prefixCls: t,
            iconPrefixCls: r,
            theme: n
        } = e;
        t !== void 0 && (Bv = t), r !== void 0 && (H3 = r), n && (W3(n) ? Cv(U3(), n) : B3 = n)
    };
    var K3 = e => {
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
                popupOverflow: p,
                legacyLocale: g,
                parentContext: v,
                iconPrefixCls: x,
                theme: P,
                componentDisabled: m
            } = e, d = Se.useCallback((R, _) => {
                let {
                    prefixCls: j
                } = e;
                if (_) return _;
                let B = j || v.getPrefixCls("");
                return R ? `${B}-${R}` : B
            }, [v.getPrefixCls, e.prefixCls]), h = x || v.iconPrefixCls || jd, y = h !== v.iconPrefixCls, S = r || v.csp, w = Hv(h, S), C = Bd(P, v.theme), O = {
                csp: S,
                autoInsertSpaceInButton: n,
                locale: i || g,
                direction: s,
                space: l,
                virtual: u,
                popupMatchSelectWidth: c ?? f,
                popupOverflow: p,
                getPrefixCls: d,
                iconPrefixCls: h,
                theme: C
            }, A = Object.assign({}, v);
            Object.keys(O).forEach(R => {
                O[R] !== void 0 && (A[R] = O[R])
            }), z3.forEach(R => {
                let _ = e[R];
                _ && (A[R] = _)
            });
            let k = Cn(() => A, A, (R, _) => {
                    let j = Object.keys(R),
                        B = Object.keys(_);
                    return j.length !== B.length || j.some(U => R[U] !== _[U])
                }),
                L = Se.useMemo(() => ({
                    prefixCls: h,
                    csp: S
                }), [h, S]),
                E = y ? w(t) : t,
                b = Se.useMemo(() => {
                    var R, _, j;
                    return F0(((R = Zi.Form) === null || R === void 0 ? void 0 : R.defaultValidateMessages) || {}, ((j = (_ = k.locale) === null || _ === void 0 ? void 0 : _.Form) === null || j === void 0 ? void 0 : j.defaultValidateMessages) || {}, o?.validateMessages || {})
                }, [k, o?.validateMessages]);
            Object.keys(b).length > 0 && (E = Se.createElement($0.Provider, {
                value: b
            }, t)), i && (E = Se.createElement(K0, {
                locale: i,
                _ANT_MARK__: V0
            }, E)), (h || S) && (E = Se.createElement(Ro.Provider, {
                value: L
            }, E)), a && (E = Se.createElement(Ev, {
                size: a
            }, E)), E = Se.createElement(qd, null, E);
            let T = Se.useMemo(() => {
                let R = C || {},
                    {
                        algorithm: _,
                        token: j
                    } = R,
                    B = F3(R, ["algorithm", "token"]),
                    U = _ && (!Array.isArray(_) || _.length > 0) ? Pn(_) : void 0;
                return Object.assign(Object.assign({}, B), {
                    theme: U,
                    token: Object.assign(Object.assign({}, On), j)
                })
            }, [C]);
            return P && (E = Se.createElement(Fd.Provider, {
                value: T
            }, E)), m !== void 0 && (E = Se.createElement(wv, {
                disabled: m
            }, E)), Se.createElement(dt.Provider, {
                value: k
            }, E)
        },
        Io = e => {
            let t = Se.useContext(dt),
                r = Se.useContext(Tl);
            return Se.createElement(K3, Object.assign({
                parentContext: t,
                legacyLocale: r
            }, e))
        };
    Io.ConfigContext = dt;
    Io.SizeContext = Tn;
    Io.config = V3;
    Io.useConfig = kv;
    Object.defineProperty(Io, "SizeContext", {
        get: () => Tn
    });
    var Jd = Io;
    var _n = M(D()),
        Yv = M(Xt());
    var Qv = M(D());
    var An = M(D());

    function Uv(e) {
        var t;
        return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e)
    }

    function G3(e) {
        return Uv(e) !== e?.ownerDocument
    }

    function Wv(e) {
        return G3(e) ? Uv(e) : null
    }

    function Kv(e, t) {
        So(e, "[@ant-design/icons] ".concat(t))
    }

    function ep(e) {
        return H(e) === "object" && typeof e.name == "string" && typeof e.theme == "string" && (H(e.icon) === "object" || typeof e.icon == "function")
    }

    function Vv() {
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

    function ru(e, t, r) {
        return r ? An.default.createElement(e.tag, $($({
            key: t
        }, Vv(e.attrs)), r), (e.children || []).map(function(n, o) {
            return ru(n, "".concat(t, "-").concat(e.tag, "-").concat(o))
        })) : An.default.createElement(e.tag, $({
            key: t
        }, Vv(e.attrs)), (e.children || []).map(function(n, o) {
            return ru(n, "".concat(t, "-").concat(e.tag, "-").concat(o))
        }))
    }

    function tp(e) {
        return ft(e)[0]
    }

    function nu(e) {
        return e ? Array.isArray(e) ? e : [e] : []
    }
    var Q3 = `
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
        Gv = function(t) {
            var r = (0, An.useContext)(Ro),
                n = r.csp,
                o = r.prefixCls,
                i = Q3;
            o && (i = i.replace(/anticon/g, o)), (0, An.useEffect)(function() {
                var a = t.current,
                    s = Wv(a);
                dr(i, "@ant-design-icons", {
                    prepend: !0,
                    csp: n,
                    attachTo: s
                })
            }, [])
        };
    var X3 = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"],
        la = {
            primaryColor: "#333",
            secondaryColor: "#E6E6E6",
            calculated: !1
        };

    function Y3(e) {
        var t = e.primaryColor,
            r = e.secondaryColor;
        la.primaryColor = t, la.secondaryColor = r || tp(t), la.calculated = !!r
    }

    function Z3() {
        return $({}, la)
    }
    var ou = function(t) {
        var r = t.icon,
            n = t.className,
            o = t.onClick,
            i = t.style,
            a = t.primaryColor,
            s = t.secondaryColor,
            l = Fe(t, X3),
            u = Qv.useRef(),
            f = la;
        if (a && (f = {
                primaryColor: a,
                secondaryColor: s || tp(a)
            }), Gv(u), Kv(ep(r), "icon should be icon definiton, but got ".concat(r)), !ep(r)) return null;
        var c = r;
        return c && typeof c.icon == "function" && (c = $($({}, c), {}, {
            icon: c.icon(f.primaryColor, f.secondaryColor)
        })), ru(c.icon, "svg-".concat(c.name), $($({
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
    ou.displayName = "IconReact";
    ou.getTwoToneColors = Z3;
    ou.setTwoToneColors = Y3;
    var ua = ou;

    function rp(e) {
        var t = nu(e),
            r = W(t, 2),
            n = r[0],
            o = r[1];
        return ua.setTwoToneColors({
            primaryColor: n,
            secondaryColor: o
        })
    }

    function Xv() {
        var e = ua.getTwoToneColors();
        return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor
    }
    var q3 = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
    rp(sv.primary);
    var iu = _n.forwardRef(function(e, t) {
        var r, n = e.className,
            o = e.icon,
            i = e.spin,
            a = e.rotate,
            s = e.tabIndex,
            l = e.onClick,
            u = e.twoToneColor,
            f = Fe(e, q3),
            c = _n.useContext(Ro),
            p = c.prefixCls,
            g = p === void 0 ? "anticon" : p,
            v = c.rootClassName,
            x = (0, Yv.default)(v, g, (r = {}, z(r, "".concat(g, "-").concat(o.name), !!o.name), z(r, "".concat(g, "-spin"), !!i || o.name === "loading"), r), n),
            P = s;
        P === void 0 && l && (P = -1);
        var m = a ? {
                msTransform: "rotate(".concat(a, "deg)"),
                transform: "rotate(".concat(a, "deg)")
            } : void 0,
            d = nu(u),
            h = W(d, 2),
            y = h[0],
            S = h[1];
        return _n.createElement("span", Mt({
            role: "img",
            "aria-label": o.name
        }, f, {
            ref: t,
            tabIndex: P,
            onClick: l,
            className: x
        }), _n.createElement(ua, {
            icon: o,
            primaryColor: y,
            secondaryColor: S,
            style: m
        }))
    });
    iu.displayName = "AntdIcon";
    iu.getTwoToneColor = Xv;
    iu.setTwoToneColor = rp;
    var Zv = iu;
    var ca = M(D()),
        {
            isValidElement: qv
        } = ca;

    function Jv(e) {
        return e && qv(e) && e.type === ca.Fragment
    }

    function J3(e, t, r) {
        return qv(e) ? ca.cloneElement(e, typeof r == "function" ? r(e.props || {}) : r) : t
    }

    function au(e, t) {
        return J3(e, e, t)
    }
    var su = M(D());
    var e4 = {
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
        ey = e4;
    var t4 = function(t, r) {
            return su.createElement(Zv, Mt({}, t, {
                ref: r,
                icon: ey
            }))
        },
        ty = su.forwardRef(t4);

    function Nn() {
        "use strict";
        Nn = function() {
            return e
        };
        var e = {},
            t = Object.prototype,
            r = t.hasOwnProperty,
            n = Object.defineProperty || function(E, b, T) {
                E[b] = T.value
            },
            o = typeof Symbol == "function" ? Symbol : {},
            i = o.iterator || "@@iterator",
            a = o.asyncIterator || "@@asyncIterator",
            s = o.toStringTag || "@@toStringTag";

        function l(E, b, T) {
            return Object.defineProperty(E, b, {
                value: T,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }), E[b]
        }
        try {
            l({}, "")
        } catch {
            l = function(T, R, _) {
                return T[R] = _
            }
        }

        function u(E, b, T, R) {
            var _ = b && b.prototype instanceof p ? b : p,
                j = Object.create(_.prototype),
                B = new A(R || []);
            return n(j, "_invoke", {
                value: S(E, T, B)
            }), j
        }

        function f(E, b, T) {
            try {
                return {
                    type: "normal",
                    arg: E.call(b, T)
                }
            } catch (R) {
                return {
                    type: "throw",
                    arg: R
                }
            }
        }
        e.wrap = u;
        var c = {};

        function p() {}

        function g() {}

        function v() {}
        var x = {};
        l(x, i, function() {
            return this
        });
        var P = Object.getPrototypeOf,
            m = P && P(P(k([])));
        m && m !== t && r.call(m, i) && (x = m);
        var d = v.prototype = p.prototype = Object.create(x);

        function h(E) {
            ["next", "throw", "return"].forEach(function(b) {
                l(E, b, function(T) {
                    return this._invoke(b, T)
                })
            })
        }

        function y(E, b) {
            function T(_, j, B, U) {
                var G = f(E[_], E, j);
                if (G.type !== "throw") {
                    var oe = G.arg,
                        Z = oe.value;
                    return Z && H(Z) == "object" && r.call(Z, "__await") ? b.resolve(Z.__await).then(function(he) {
                        T("next", he, B, U)
                    }, function(he) {
                        T("throw", he, B, U)
                    }) : b.resolve(Z).then(function(he) {
                        oe.value = he, B(oe)
                    }, function(he) {
                        return T("throw", he, B, U)
                    })
                }
                U(G.arg)
            }
            var R;
            n(this, "_invoke", {
                value: function(j, B) {
                    function U() {
                        return new b(function(G, oe) {
                            T(j, B, G, oe)
                        })
                    }
                    return R = R ? R.then(U, U) : U()
                }
            })
        }

        function S(E, b, T) {
            var R = "suspendedStart";
            return function(_, j) {
                if (R === "executing") throw new Error("Generator is already running");
                if (R === "completed") {
                    if (_ === "throw") throw j;
                    return L()
                }
                for (T.method = _, T.arg = j;;) {
                    var B = T.delegate;
                    if (B) {
                        var U = w(B, T);
                        if (U) {
                            if (U === c) continue;
                            return U
                        }
                    }
                    if (T.method === "next") T.sent = T._sent = T.arg;
                    else if (T.method === "throw") {
                        if (R === "suspendedStart") throw R = "completed", T.arg;
                        T.dispatchException(T.arg)
                    } else T.method === "return" && T.abrupt("return", T.arg);
                    R = "executing";
                    var G = f(E, b, T);
                    if (G.type === "normal") {
                        if (R = T.done ? "completed" : "suspendedYield", G.arg === c) continue;
                        return {
                            value: G.arg,
                            done: T.done
                        }
                    }
                    G.type === "throw" && (R = "completed", T.method = "throw", T.arg = G.arg)
                }
            }
        }

        function w(E, b) {
            var T = b.method,
                R = E.iterator[T];
            if (R === void 0) return b.delegate = null, T === "throw" && E.iterator.return && (b.method = "return", b.arg = void 0, w(E, b), b.method === "throw") || T !== "return" && (b.method = "throw", b.arg = new TypeError("The iterator does not provide a '" + T + "' method")), c;
            var _ = f(R, E.iterator, b.arg);
            if (_.type === "throw") return b.method = "throw", b.arg = _.arg, b.delegate = null, c;
            var j = _.arg;
            return j ? j.done ? (b[E.resultName] = j.value, b.next = E.nextLoc, b.method !== "return" && (b.method = "next", b.arg = void 0), b.delegate = null, c) : j : (b.method = "throw", b.arg = new TypeError("iterator result is not an object"), b.delegate = null, c)
        }

        function C(E) {
            var b = {
                tryLoc: E[0]
            };
            1 in E && (b.catchLoc = E[1]), 2 in E && (b.finallyLoc = E[2], b.afterLoc = E[3]), this.tryEntries.push(b)
        }

        function O(E) {
            var b = E.completion || {};
            b.type = "normal", delete b.arg, E.completion = b
        }

        function A(E) {
            this.tryEntries = [{
                tryLoc: "root"
            }], E.forEach(C, this), this.reset(!0)
        }

        function k(E) {
            if (E) {
                var b = E[i];
                if (b) return b.call(E);
                if (typeof E.next == "function") return E;
                if (!isNaN(E.length)) {
                    var T = -1,
                        R = function _() {
                            for (; ++T < E.length;)
                                if (r.call(E, T)) return _.value = E[T], _.done = !1, _;
                            return _.value = void 0, _.done = !0, _
                        };
                    return R.next = R
                }
            }
            return {
                next: L
            }
        }

        function L() {
            return {
                value: void 0,
                done: !0
            }
        }
        return g.prototype = v, n(d, "constructor", {
            value: v,
            configurable: !0
        }), n(v, "constructor", {
            value: g,
            configurable: !0
        }), g.displayName = l(v, s, "GeneratorFunction"), e.isGeneratorFunction = function(E) {
            var b = typeof E == "function" && E.constructor;
            return !!b && (b === g || (b.displayName || b.name) === "GeneratorFunction")
        }, e.mark = function(E) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(E, v) : (E.__proto__ = v, l(E, s, "GeneratorFunction")), E.prototype = Object.create(d), E
        }, e.awrap = function(E) {
            return {
                __await: E
            }
        }, h(y.prototype), l(y.prototype, a, function() {
            return this
        }), e.AsyncIterator = y, e.async = function(E, b, T, R, _) {
            _ === void 0 && (_ = Promise);
            var j = new y(u(E, b, T, R), _);
            return e.isGeneratorFunction(b) ? j : j.next().then(function(B) {
                return B.done ? B.value : j.next()
            })
        }, h(d), l(d, s, "Generator"), l(d, i, function() {
            return this
        }), l(d, "toString", function() {
            return "[object Generator]"
        }), e.keys = function(E) {
            var b = Object(E),
                T = [];
            for (var R in b) T.push(R);
            return T.reverse(),
                function _() {
                    for (; T.length;) {
                        var j = T.pop();
                        if (j in b) return _.value = j, _.done = !1, _
                    }
                    return _.done = !0, _
                }
        }, e.values = k, A.prototype = {
            constructor: A,
            reset: function(b) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(O), !b)
                    for (var T in this) T.charAt(0) === "t" && r.call(this, T) && !isNaN(+T.slice(1)) && (this[T] = void 0)
            },
            stop: function() {
                this.done = !0;
                var b = this.tryEntries[0].completion;
                if (b.type === "throw") throw b.arg;
                return this.rval
            },
            dispatchException: function(b) {
                if (this.done) throw b;
                var T = this;

                function R(oe, Z) {
                    return B.type = "throw", B.arg = b, T.next = oe, Z && (T.method = "next", T.arg = void 0), !!Z
                }
                for (var _ = this.tryEntries.length - 1; _ >= 0; --_) {
                    var j = this.tryEntries[_],
                        B = j.completion;
                    if (j.tryLoc === "root") return R("end");
                    if (j.tryLoc <= this.prev) {
                        var U = r.call(j, "catchLoc"),
                            G = r.call(j, "finallyLoc");
                        if (U && G) {
                            if (this.prev < j.catchLoc) return R(j.catchLoc, !0);
                            if (this.prev < j.finallyLoc) return R(j.finallyLoc)
                        } else if (U) {
                            if (this.prev < j.catchLoc) return R(j.catchLoc, !0)
                        } else {
                            if (!G) throw new Error("try statement without catch or finally");
                            if (this.prev < j.finallyLoc) return R(j.finallyLoc)
                        }
                    }
                }
            },
            abrupt: function(b, T) {
                for (var R = this.tryEntries.length - 1; R >= 0; --R) {
                    var _ = this.tryEntries[R];
                    if (_.tryLoc <= this.prev && r.call(_, "finallyLoc") && this.prev < _.finallyLoc) {
                        var j = _;
                        break
                    }
                }
                j && (b === "break" || b === "continue") && j.tryLoc <= T && T <= j.finallyLoc && (j = null);
                var B = j ? j.completion : {};
                return B.type = b, B.arg = T, j ? (this.method = "next", this.next = j.finallyLoc, c) : this.complete(B)
            },
            complete: function(b, T) {
                if (b.type === "throw") throw b.arg;
                return b.type === "break" || b.type === "continue" ? this.next = b.arg : b.type === "return" ? (this.rval = this.arg = b.arg, this.method = "return", this.next = "end") : b.type === "normal" && T && (this.next = T), c
            },
            finish: function(b) {
                for (var T = this.tryEntries.length - 1; T >= 0; --T) {
                    var R = this.tryEntries[T];
                    if (R.finallyLoc === b) return this.complete(R.completion, R.afterLoc), O(R), c
                }
            },
            catch: function(b) {
                for (var T = this.tryEntries.length - 1; T >= 0; --T) {
                    var R = this.tryEntries[T];
                    if (R.tryLoc === b) {
                        var _ = R.completion;
                        if (_.type === "throw") {
                            var j = _.arg;
                            O(R)
                        }
                        return j
                    }
                }
                throw new Error("illegal catch attempt")
            },
            delegateYield: function(b, T, R) {
                return this.delegate = {
                    iterator: k(b),
                    resultName: T,
                    nextLoc: R
                }, this.method === "next" && (this.arg = void 0), c
            }
        }, e
    }

    function ry(e, t, r, n, o, i, a) {
        try {
            var s = e[i](a),
                l = s.value
        } catch (u) {
            r(u);
            return
        }
        s.done ? t(l) : Promise.resolve(l).then(n, o)
    }

    function lu(e) {
        return function() {
            var t = this,
                r = arguments;
            return new Promise(function(n, o) {
                var i = e.apply(t, r);

                function a(l) {
                    ry(i, n, o, a, s, "next", l)
                }

                function s(l) {
                    ry(i, n, o, a, s, "throw", l)
                }
                a(void 0)
            })
        }
    }
    var r4 = M(Fs()),
        fa = $({}, r4),
        n4 = fa.version,
        o4 = fa.render,
        i4 = fa.unmountComponentAtNode,
        cu;
    try {
        ny = Number((n4 || "").split(".")[0]), ny >= 18 && (cu = fa.createRoot)
    } catch {}
    var ny;

    function oy(e) {
        var t = fa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        t && H(t) === "object" && (t.usingClientEntryPoint = e)
    }
    var uu = "__rc_react_root__";

    function a4(e, t) {
        oy(!0);
        var r = t[uu] || cu(t);
        oy(!1), r.render(e), t[uu] = r
    }

    function s4(e, t) {
        o4(e, t)
    }

    function iy(e, t) {
        if (cu) {
            a4(e, t);
            return
        }
        s4(e, t)
    }

    function l4(e) {
        return np.apply(this, arguments)
    }

    function np() {
        return np = lu(Nn().mark(function e(t) {
            return Nn().wrap(function(n) {
                for (;;) switch (n.prev = n.next) {
                    case 0:
                        return n.abrupt("return", Promise.resolve().then(function() {
                            var o;
                            (o = t[uu]) === null || o === void 0 || o.unmount(), delete t[uu]
                        }));
                    case 1:
                    case "end":
                        return n.stop()
                }
            }, e)
        })), np.apply(this, arguments)
    }

    function u4(e) {
        i4(e)
    }

    function ay(e) {
        return op.apply(this, arguments)
    }

    function op() {
        return op = lu(Nn().mark(function e(t) {
            return Nn().wrap(function(n) {
                for (;;) switch (n.prev = n.next) {
                    case 0:
                        if (cu === void 0) {
                            n.next = 2;
                            break
                        }
                        return n.abrupt("return", l4(t));
                    case 2:
                        u4(t);
                    case 3:
                    case "end":
                        return n.stop()
                }
            }, e)
        })), op.apply(this, arguments)
    }
    var gp = M(Xt());
    var ae = M(D());
    var fy = M(Xt());
    var sy = function(e) {
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
    var Ln = M(D());
    var c4 = e => {
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
        ly = jo("Wave", e => [c4(e)]);
    var cy = M(Xt());
    var $e = M(D());

    function f4(e) {
        let t = (e || "").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);
        return t && t[1] && t[2] && t[3] ? !(t[1] === t[2] && t[2] === t[3]) : !0
    }

    function ip(e) {
        return e && e !== "#fff" && e !== "#ffffff" && e !== "rgb(255, 255, 255)" && e !== "rgba(255, 255, 255, 1)" && f4(e) && !/rgba\((?:\d*, ){3}0\)/.test(e) && e !== "transparent"
    }

    function uy(e) {
        let {
            borderTopColor: t,
            borderColor: r,
            backgroundColor: n
        } = getComputedStyle(e);
        return ip(t) ? t : ip(r) ? r : ip(n) ? n : null
    }

    function ap(e) {
        return Number.isNaN(e) ? 0 : e
    }
    var d4 = e => {
        let {
            className: t,
            target: r
        } = e, n = $e.useRef(null), [o, i] = $e.useState(null), [a, s] = $e.useState([]), [l, u] = $e.useState(0), [f, c] = $e.useState(0), [p, g] = $e.useState(0), [v, x] = $e.useState(0), [P, m] = $e.useState(!1), d = {
            left: l,
            top: f,
            width: p,
            height: v,
            borderRadius: a.map(y => `${y}px`).join(" ")
        };
        o && (d["--wave-color"] = o);

        function h() {
            let y = getComputedStyle(r);
            i(uy(r));
            let S = y.position === "static",
                {
                    borderLeftWidth: w,
                    borderTopWidth: C
                } = y;
            u(S ? r.offsetLeft : ap(-parseFloat(w))), c(S ? r.offsetTop : ap(-parseFloat(C))), g(r.offsetWidth), x(r.offsetHeight);
            let {
                borderTopLeftRadius: O,
                borderTopRightRadius: A,
                borderBottomLeftRadius: k,
                borderBottomRightRadius: L
            } = y;
            s([O, A, L, k].map(E => ap(parseFloat(E))))
        }
        return $e.useEffect(() => {
            if (r) {
                let y = Co(() => {
                        h(), m(!0)
                    }),
                    S;
                return typeof ResizeObserver < "u" && (S = new ResizeObserver(h), S.observe(r)), () => {
                    Co.cancel(y), S?.disconnect()
                }
            }
        }, []), P ? $e.createElement(eu, {
            visible: !0,
            motionAppear: !0,
            motionName: "wave-motion",
            motionDeadline: 5e3,
            onAppearEnd: (y, S) => {
                var w;
                if (S.deadline || S.propertyName === "opacity") {
                    let C = (w = n.current) === null || w === void 0 ? void 0 : w.parentElement;
                    ay(C).then(() => {
                        C?.remove()
                    })
                }
                return !1
            }
        }, y => {
            let {
                className: S
            } = y;
            return $e.createElement("div", {
                ref: n,
                className: (0, cy.default)(t, S),
                style: d
            })
        }) : null
    };

    function sp(e, t) {
        let r = document.createElement("div");
        r.style.position = "absolute", r.style.left = "0px", r.style.top = "0px", e?.insertBefore(r, e?.firstChild), iy($e.createElement(d4, {
            target: e,
            className: t
        }), r)
    }

    function lp(e, t) {
        function r() {
            let n = e.current;
            sp(n, t)
        }
        return r
    }
    var p4 = e => {
            let {
                children: t,
                disabled: r
            } = e, {
                getPrefixCls: n
            } = (0, Ln.useContext)(dt), o = (0, Ln.useRef)(null), i = n("wave"), [, a] = ly(i), s = lp(o, (0, fy.default)(i, a));
            if (Ln.default.useEffect(() => {
                    let u = o.current;
                    if (!u || u.nodeType !== 1 || r) return;
                    let f = c => {
                        c.target.tagName === "INPUT" || !sy(c.target) || !u.getAttribute || u.getAttribute("disabled") || u.disabled || u.className.includes("disabled") || u.className.includes("-leave") || s()
                    };
                    return u.addEventListener("click", f, !0), () => {
                        u.removeEventListener("click", f, !0)
                    }
                }, [r]), !Ln.default.isValidElement(t)) return t ?? null;
            let l = sl(t) ? al(t.ref, o) : o;
            return au(t, {
                ref: l
            })
        },
        dy = p4;
    var py = M(Xt());
    var jn = M(D());
    var m4 = jn.createContext(null),
        my = (e, t) => {
            let r = jn.useContext(m4),
                n = jn.useMemo(() => {
                    if (!r) return "";
                    let {
                        compactDirection: o,
                        isFirstItem: i,
                        isLastItem: a
                    } = r, s = o === "vertical" ? "-vertical-" : "-";
                    return (0, py.default)({
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
        };
    var fu = M(D()),
        gy = M(Xt()),
        g4 = (0, fu.forwardRef)((e, t) => {
            let {
                className: r,
                style: n,
                children: o,
                prefixCls: i
            } = e, a = (0, gy.default)(`${i}-icon`, r);
            return fu.default.createElement("span", {
                ref: t,
                className: a,
                style: n
            }, o)
        }),
        du = g4;
    var Jr = M(D()),
        vy = M(Xt());
    var hy = (0, Jr.forwardRef)((e, t) => {
            let {
                prefixCls: r,
                className: n,
                style: o,
                iconClassName: i
            } = e, a = (0, vy.default)(`${r}-loading-icon`, n);
            return Jr.default.createElement(du, {
                prefixCls: r,
                className: a,
                style: o,
                ref: t
            }, Jr.default.createElement(ty, {
                className: i
            }))
        }),
        up = () => ({
            width: 0,
            opacity: 0,
            transform: "scale(0)"
        }),
        cp = e => ({
            width: e.scrollWidth,
            opacity: 1,
            transform: "scale(1)"
        }),
        h4 = e => {
            let {
                prefixCls: t,
                loading: r,
                existIcon: n,
                className: o,
                style: i
            } = e, a = !!r;
            return n ? Jr.default.createElement(hy, {
                prefixCls: t,
                className: o,
                style: i
            }) : Jr.default.createElement(eu, {
                visible: a,
                motionName: `${t}-loading-icon-motion`,
                removeOnLeave: !0,
                onAppearStart: up,
                onAppearActive: cp,
                onEnterStart: up,
                onEnterActive: cp,
                onLeaveStart: cp,
                onLeaveActive: up
            }, (s, l) => {
                let {
                    className: u,
                    style: f
                } = s;
                return Jr.default.createElement(hy, {
                    prefixCls: t,
                    className: o,
                    style: Object.assign(Object.assign({}, i), f),
                    ref: l,
                    iconClassName: u
                })
            })
        },
        yy = h4;
    var xy = M(Xt()),
        Mn = M(D());
    var v4 = function(e, t) {
            var r = {};
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
            if (e != null && typeof Object.getOwnPropertySymbols == "function")
                for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
            return r
        },
        fp = Mn.createContext(void 0),
        y4 = e => {
            let {
                getPrefixCls: t,
                direction: r
            } = Mn.useContext(dt), {
                prefixCls: n,
                size: o,
                className: i
            } = e, a = v4(e, ["prefixCls", "size", "className"]), s = t("btn-group", n), [, , l] = Yr(), u = "";
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
            let f = (0, xy.default)(s, {
                [`${s}-${u}`]: u,
                [`${s}-rtl`]: r === "rtl"
            }, i, l);
            return Mn.createElement(fp.Provider, {
                value: o
            }, Mn.createElement("div", Object.assign({}, a, {
                className: f
            })))
        },
        Sy = y4;
    var Do = M(D());
    var Cy = /^[\u4e00-\u9fa5]{2}$/,
        pu = Cy.test.bind(Cy);

    function x4(e) {
        return typeof e == "string"
    }

    function mu(e) {
        return e === "text" || e === "link"
    }

    function S4(e, t) {
        if (e == null) return;
        let r = t ? " " : "";
        return typeof e != "string" && typeof e != "number" && x4(e.type) && pu(e.props.children) ? au(e, {
            children: e.props.children.split("").join(r)
        }) : typeof e == "string" ? pu(e) ? Do.default.createElement("span", null, e.split("").join(r)) : Do.default.createElement("span", null, e) : Jv(e) ? Do.default.createElement("span", null, e) : e
    }

    function wy(e, t) {
        let r = !1,
            n = [];
        return Do.default.Children.forEach(e, o => {
            let i = typeof o,
                a = i === "string" || i === "number";
            if (r && a) {
                let s = n.length - 1,
                    l = n[s];
                n[s] = `${l}${o}`
            } else n.push(o);
            r = a
        }), Do.default.Children.map(n, o => S4(o, t))
    }

    function C4(e, t, r) {
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

    function w4(e, t, r) {
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

    function by(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                focus: !0
            },
            {
                componentCls: r
            } = e,
            n = `${r}-compact`;
        return {
            [n]: Object.assign(Object.assign({}, C4(e, n, t)), w4(r, n, t))
        }
    }

    function b4(e, t) {
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

    function E4(e, t) {
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

    function Ey(e) {
        let t = `${e.componentCls}-compact-vertical`;
        return {
            [t]: Object.assign(Object.assign({}, b4(e, t)), E4(e.componentCls, t))
        }
    }
    var ky = (e, t) => ({
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
        k4 = e => {
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
                }, ky(`${t}-primary`, o), ky(`${t}-danger`, i)]
            }
        },
        Py = k4;
    var P4 = e => {
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
                    "&:not(:disabled)": Object.assign({}, yv(e)),
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
        hr = (e, t) => ({
            "&:not(:disabled)": {
                "&:hover": e,
                "&:active": t
            }
        }),
        O4 = e => ({
            minWidth: e.controlHeight,
            paddingInlineStart: 0,
            paddingInlineEnd: 0,
            borderRadius: "50%"
        }),
        T4 = e => ({
            borderRadius: e.controlHeight,
            paddingInlineStart: e.controlHeight / 2,
            paddingInlineEnd: e.controlHeight / 2
        }),
        dp = e => ({
            cursor: "not-allowed",
            borderColor: e.colorBorder,
            color: e.colorTextDisabled,
            backgroundColor: e.colorBgContainerDisabled,
            boxShadow: "none"
        }),
        gu = (e, t, r, n, o, i, a) => ({
            [`&${e}-background-ghost`]: Object.assign(Object.assign({
                color: t || void 0,
                backgroundColor: "transparent",
                borderColor: r || void 0,
                boxShadow: "none"
            }, hr(Object.assign({
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
        pp = e => ({
            "&:disabled": Object.assign({}, dp(e))
        }),
        Oy = e => Object.assign({}, pp(e)),
        hu = e => ({
            "&:disabled": {
                cursor: "not-allowed",
                color: e.colorTextDisabled
            }
        }),
        Ty = e => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Oy(e)), {
            backgroundColor: e.colorBgContainer,
            borderColor: e.colorBorder,
            boxShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlTmpOutline}`
        }), hr({
            color: e.colorPrimaryHover,
            borderColor: e.colorPrimaryHover
        }, {
            color: e.colorPrimaryActive,
            borderColor: e.colorPrimaryActive
        })), gu(e.componentCls, e.colorBgContainer, e.colorBgContainer, e.colorTextDisabled, e.colorBorder)), {
            [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign(Object.assign({
                color: e.colorError,
                borderColor: e.colorError
            }, hr({
                color: e.colorErrorHover,
                borderColor: e.colorErrorBorderHover
            }, {
                color: e.colorErrorActive,
                borderColor: e.colorErrorActive
            })), gu(e.componentCls, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder)), pp(e))
        }),
        R4 = e => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Oy(e)), {
            color: e.colorTextLightSolid,
            backgroundColor: e.colorPrimary,
            boxShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlOutline}`
        }), hr({
            color: e.colorTextLightSolid,
            backgroundColor: e.colorPrimaryHover
        }, {
            color: e.colorTextLightSolid,
            backgroundColor: e.colorPrimaryActive
        })), gu(e.componentCls, e.colorPrimary, e.colorPrimary, e.colorTextDisabled, e.colorBorder, {
            color: e.colorPrimaryHover,
            borderColor: e.colorPrimaryHover
        }, {
            color: e.colorPrimaryActive,
            borderColor: e.colorPrimaryActive
        })), {
            [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign(Object.assign({
                backgroundColor: e.colorError,
                boxShadow: `0 ${e.controlOutlineWidth}px 0 ${e.colorErrorOutline}`
            }, hr({
                backgroundColor: e.colorErrorHover
            }, {
                backgroundColor: e.colorErrorActive
            })), gu(e.componentCls, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder, {
                color: e.colorErrorHover,
                borderColor: e.colorErrorHover
            }, {
                color: e.colorErrorActive,
                borderColor: e.colorErrorActive
            })), pp(e))
        }),
        A4 = e => Object.assign(Object.assign({}, Ty(e)), {
            borderStyle: "dashed"
        }),
        _4 = e => Object.assign(Object.assign(Object.assign({
            color: e.colorLink
        }, hr({
            color: e.colorLinkHover
        }, {
            color: e.colorLinkActive
        })), hu(e)), {
            [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign({
                color: e.colorError
            }, hr({
                color: e.colorErrorHover
            }, {
                color: e.colorErrorActive
            })), hu(e))
        }),
        N4 = e => Object.assign(Object.assign(Object.assign({}, hr({
            color: e.colorText,
            backgroundColor: e.colorBgTextHover
        }, {
            color: e.colorText,
            backgroundColor: e.colorBgTextActive
        })), hu(e)), {
            [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign({
                color: e.colorError
            }, hu(e)), hr({
                color: e.colorErrorHover,
                backgroundColor: e.colorErrorBg
            }, {
                color: e.colorErrorHover,
                backgroundColor: e.colorErrorBg
            }))
        }),
        L4 = e => Object.assign(Object.assign({}, dp(e)), {
            [`&${e.componentCls}:hover`]: Object.assign({}, dp(e))
        }),
        j4 = e => {
            let {
                componentCls: t
            } = e;
            return {
                [`${t}-default`]: Ty(e),
                [`${t}-primary`]: R4(e),
                [`${t}-dashed`]: A4(e),
                [`${t}-link`]: _4(e),
                [`${t}-text`]: N4(e),
                [`${t}-disabled`]: L4(e)
            }
        },
        mp = function(e) {
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
                p = `${r}-icon-only`;
            return [{
                [`${r}${t}`]: {
                    fontSize: o,
                    height: n,
                    padding: `${f}px ${c}px`,
                    borderRadius: s,
                    [`&${p}`]: {
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
                [`${r}${r}-circle${t}`]: O4(e)
            }, {
                [`${r}${r}-round${t}`]: T4(e)
            }]
        },
        M4 = e => mp(e),
        I4 = e => {
            let t = Xr(e, {
                controlHeight: e.controlHeightSM,
                padding: e.paddingXS,
                buttonPaddingHorizontal: 8,
                borderRadius: e.borderRadiusSM,
                buttonIconOnlyFontSize: e.fontSizeLG - 2
            });
            return mp(t, `${e.componentCls}-sm`)
        },
        D4 = e => {
            let t = Xr(e, {
                controlHeight: e.controlHeightLG,
                fontSize: e.fontSizeLG,
                borderRadius: e.borderRadiusLG,
                buttonIconOnlyFontSize: e.fontSizeLG + 2
            });
            return mp(t, `${e.componentCls}-lg`)
        },
        F4 = e => {
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
        Ry = jo("Button", e => {
            let {
                controlTmpOutline: t,
                paddingContentHorizontal: r
            } = e, n = Xr(e, {
                colorOutlineDefault: t,
                buttonPaddingHorizontal: r,
                buttonIconOnlyFontSize: e.fontSizeLG,
                buttonFontWeight: 400
            });
            return [P4(n), I4(n), M4(n), D4(n), F4(n), j4(n), Py(n), by(e), Ey(e)]
        });
    var z4 = function(e, t) {
        var r = {};
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
        if (e != null && typeof Object.getOwnPropertySymbols == "function")
            for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
        return r
    };

    function $4(e) {
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
    var H4 = (e, t) => {
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
                className: p,
                rootClassName: g,
                children: v,
                icon: x,
                ghost: P = !1,
                block: m = !1,
                htmlType: d = "button",
                classNames: h,
                style: y = {}
            } = e, S = z4(e, ["loading", "prefixCls", "type", "danger", "shape", "size", "styles", "disabled", "className", "rootClassName", "children", "icon", "ghost", "block", "htmlType", "classNames", "style"]), {
                getPrefixCls: w,
                autoInsertSpaceInButton: C,
                direction: O,
                button: A
            } = (0, ae.useContext)(dt), k = w("btn", i), [L, E] = Ry(k), b = (0, ae.useContext)(Ll), T = c ?? b, R = (0, ae.useContext)(fp), _ = (0, ae.useMemo)(() => $4(o), [o]), [j, B] = (0, ae.useState)(_.loading), [U, G] = (0, ae.useState)(!1), Z = al(t, (0, ae.createRef)()), he = ae.Children.count(v) === 1 && !x && !mu(a);
            (0, ae.useEffect)(() => {
                let Q = null;
                _.delay > 0 ? Q = setTimeout(() => {
                    Q = null, B(!0)
                }, _.delay) : B(_.loading);

                function pe() {
                    Q && (clearTimeout(Q), Q = null)
                }
                return pe
            }, [_]), (0, ae.useEffect)(() => {
                if (!Z || !Z.current || C === !1) return;
                let Q = Z.current.textContent;
                he && pu(Q) ? U || G(!0) : U && G(!1)
            }, [Z]);
            let Ce = Q => {
                    let {
                        onClick: pe
                    } = e;
                    if (j || T) {
                        Q.preventDefault();
                        return
                    }
                    pe?.(Q)
                },
                kt = C !== !1,
                {
                    compactSize: Ft,
                    compactItemClassnames: yr
                } = my(k, O),
                en = {
                    large: "lg",
                    small: "sm",
                    middle: void 0
                },
                tn = jl(Q => {
                    var pe, Jt;
                    return (Jt = (pe = u ?? Ft) !== null && pe !== void 0 ? pe : R) !== null && Jt !== void 0 ? Jt : Q
                }),
                Zt = tn && en[tn] || "",
                Ke = j ? "loading" : x,
                qt = id(S, ["navigate"]),
                F = qt.href !== void 0 && T,
                rn = (0, gp.default)(k, E, {
                    [`${k}-${l}`]: l !== "default" && l,
                    [`${k}-${a}`]: a,
                    [`${k}-${Zt}`]: Zt,
                    [`${k}-icon-only`]: !v && v !== 0 && !!Ke,
                    [`${k}-background-ghost`]: P && !mu(a),
                    [`${k}-loading`]: j,
                    [`${k}-two-chinese-chars`]: U && kt && !j,
                    [`${k}-block`]: m,
                    [`${k}-dangerous`]: !!s,
                    [`${k}-rtl`]: O === "rtl",
                    [`${k}-disabled`]: F
                }, yr, p, g, A?.className),
                zt = Object.assign(Object.assign({}, A?.style), y),
                xu = (0, gp.default)(h?.icon, (r = A?.classNames) === null || r === void 0 ? void 0 : r.icon),
                zo = Object.assign(Object.assign({}, f?.icon || {}), ((n = A?.styles) === null || n === void 0 ? void 0 : n.icon) || {}),
                Dn = x && !j ? ae.default.createElement(du, {
                    prefixCls: k,
                    className: xu,
                    style: zo
                }, x) : ae.default.createElement(yy, {
                    existIcon: !!x,
                    prefixCls: k,
                    loading: !!j
                }),
                Pe = v || v === 0 ? wy(v, he && kt) : null;
            if (qt.href !== void 0) return L(ae.default.createElement("a", Object.assign({}, qt, {
                className: rn,
                style: zt,
                onClick: Ce,
                ref: Z
            }), Dn, Pe));
            let de = ae.default.createElement("button", Object.assign({}, S, {
                type: d,
                className: rn,
                style: zt,
                onClick: Ce,
                disabled: T,
                ref: Z
            }), Dn, Pe);
            return mu(a) || (de = ae.default.createElement(dy, {
                disabled: !!j
            }, de)), L(de)
        },
        hp = (0, ae.forwardRef)(H4);
    hp.Group = Sy;
    hp.__ANT_BUTTON = !0;
    var Ay = hp;
    var vp = Ay;
    var ga = M(D()),
        By = M(Fo());
    var Ny = "./assets/chat-WWCHBTBE.svg";
    var Ly = "./assets/popup-img-EAA7J5M2.svg";
    var Sp = M(Fo());
    var W4 = M(Fo());
    var jy = Sp.default.runtime.getManifest(),
        uR = jy.version_name === jy.version + "-e",
        Iy = "Sider";
    var cR = Sp.default.runtime.getManifest().version;
    var My = "https://sider.ai",
        xp = {
            origin: My,
            api: `${My}/api`
        };
    var vu = (F => (F.English = "en", F["Chinese(Simplified)"] = "zh_CN", F["Chinese(Traditional)"] = "zh_TW", F.Spanish = "es", F.French = "fr", F.Japanese = "ja", F.German = "de", F.Portuguese = "pt", F.Arabic = "ar", F.Russian = "ru", F.Italian = "it", F.Korean = "ko", F.Hindi = "hi", F.Dutch = "nl", F.Polish = "pl", F.Amharic = "am", F.Bulgarian = "bg", F.Bengali = "bn", F.Catalan = "ca", F.Czech = "cs", F.Danish = "da", F.Greek = "el", F.Estonian = "et", F.Persian = "fa", F.Finnish = "fi", F.Filipino = "fil", F.Gujarati = "gu", F.Hebrew = "he", F.Croatian = "hr", F.Hungarian = "hu", F.Indonesian = "id", F.Kannada = "kn", F.Lithuanian = "lt", F.Latvian = "lv", F.Malayalam = "ml", F.Marathi = "mr", F.Malay = "ms", F.Norwegian = "no", F.Romanian = "ro", F.Slovak = "sk", F.Slovenian = "sl", F.Serbian = "sr", F.Swedish = "sv", F.Swahili = "sw", F.Tamil = "ta", F.Telugu = "te", F.Thai = "th", F.Turkish = "tr", F.Ukrainian = "uk", F.Urdu = "ur", F.Vietnamese = "vi", F))(vu || {}),
        V4 = {
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
        fR = Object.entries(vu).reduce((e, [t, r]) => (e[r] = t, e), {}),
        dR = Object.entries(vu).map(([e, t]) => ({
            label: e,
            value: t
        })),
        pR = Object.entries(V4).map(([e, t]) => ({
            label: t,
            value: e
        }));
    var mR = {
        pricing: `${xp.origin}/pricing`,
        login: `${xp.origin}/login`,
        myChats: `${xp.origin}/mychats`,
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
    var Et = M(D());
    var In = M(D()),
        da = M(Fo());

    function Cp(e) {
        let [t, r] = (0, In.useState)(e), n = s => {
            r(s), o.current.data = s
        }, o = (0, In.useRef)({
            data: t
        }), [i, a] = (0, In.useState)(!0);
        return (0, In.useEffect)(() => {
            da.default.storage.local.get(e).then(l => {
                n(l), a(!1)
            });
            let s = l => {
                let u = {
                        ...o.current.data
                    },
                    f = !1;
                for (let [c, {
                        newValue: p,
                        oldValue: g
                    }] of Object.entries(l)) c in e && (f = !0, Object.assign(u, {
                    [c]: typeof p > "u" && typeof g < "u" ? e[c] : p
                }));
                f && n(u)
            };
            return da.default.storage.local.onChanged.addListener(s), () => {
                da.default.runtime.id && da.default.storage?.local?.onChanged?.removeListener(s)
            }
        }, []), [t, i]
    }

    function wp(...e) {
        let {
            t,
            i18n: r,
            ready: n
        } = xo(...e);
        return {
            t: (0, Et.useCallback)((i, a) => {
                if (a) {
                    let s = {},
                        l = {};
                    for (let c of Object.keys(a)) {
                        let p = a[c];
                        typeof p == "function" ? (l[c] = p, delete a[c]) : p && typeof p == "object" && ("props" in p || "ref" in p) && (s[c] = p, delete a[c])
                    }
                    let u = Object.keys(l);
                    if (Object.keys(s).length > 0 || u.length > 0) {
                        let c = t(i, a),
                            p = [],
                            g = 0,
                            v = "",
                            x = "",
                            P = !1,
                            m = "",
                            d = !1,
                            h = "",
                            y = !1,
                            S = !1;
                        for (; g < c.length;) {
                            let w = c[g - 1],
                                C = c[g],
                                O = c[g + 1];
                            if (P) {
                                w !== "\\" && C === "}" && O === "}" ? (x in s && p.push(s[x]), x = "", P = !1, g += 2) : (x += C, g++);
                                continue
                            }
                            if (d) {
                                C === ">" ? (d = !1, y = !0, g++) : (m += C, g++);
                                continue
                            }
                            if (y) {
                                C === "<" && O === "/" ? (y = !1, S = !0, g++) : (h += C, g++);
                                continue
                            }
                            if (S) {
                                C === ">" && (S = !1, m in l && p.push(l[m](h)), m = "", h = ""), g++;
                                continue
                            }
                            if (w !== "\\" && C === "{" && O === "{") {
                                v && p.push(v), v = "", P = !0, g += 2;
                                continue
                            }
                            if (w !== "\\" && C === "<" && O !== " ") {
                                v && p.push(v), v = "", d = !0, g++;
                                continue
                            }
                            v += C, g++
                        }
                        return v && p.push(v), (0, Et.createElement)(Et.Fragment, null, ...p)
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

    function Dy(e) {
        let [t, r] = (0, Et.useState)(!0), [n, o] = Cp({
            language: "en"
        }), i = (0, Et.useRef)({
            onChange: e
        }), {
            i18n: a
        } = xo();
        return (0, Et.useEffect)(() => {
            o || (async () => {
                let s = n.language,
                    l = a.language,
                    u = (await import(`/i18n/${s}.json`, {
                        assert: {
                            type: "json"
                        }
                    })).default;
                s === "en" && K4(u), a.addResourceBundle(s, "translation", u), a.changeLanguage(n.language).finally(() => {
                    i.current.onChange?.(n.language, a, l), r(!1)
                })
            })()
        }, [n.language, o, a]), t
    }

    function K4(e, t = "|||") {
        function r(n) {
            for (let [o, i] of Object.entries(n)) i !== null && typeof i == "object" ? r(i) : typeof i == "string" && (n[o] = i.split(t)[0].trim())
        }
        return r(e), e
    }
    var pa = M(Fo());

    function Fy(e, t, r) {
        let n = pa.default.runtime.getURL("chat/index.html");
        pa.default.tabs.query({
            url: n + "*",
            currentWindow: !0
        }).then(async o => {
            o.length ? (await pa.default.tabs.update(o[0].id, {
                active: !0
            }), t && t()) : (r && await r(), await pa.default.tabs.create({
                url: n + (e ? "?reason=" + e : "")
            }))
        })
    }
    var vr = M(ma());

    function J4() {
        let {
            t: e,
            dir: t
        } = wp(), [r, n] = (0, ga.useState)(!1);
        return (0, ga.useEffect)(() => {
            By.default.runtime.sendMessage({
                type: "POPUP_OPEN"
            }).then(i => {
                i.action, window.close()
            }).catch(i => {})
        }, []), (0, ga.useEffect)(() => {
            document.documentElement.dir = t
        }, [t]), Dy() ? null : r ? (0, vr.jsx)(Jd, {
            theme: {
                token: {
                    colorPrimary: "#8A57EA"
                }
            },
            children: (0, vr.jsxs)("div", {
                className: "w-[356] p-[4px] text-[14px] pb-[12px] text-base leading-[18px]",
                children: [(0, vr.jsx)("img", {
                    src: Ly,
                    alt: "",
                    className: "w-[100%] pb-[20px]"
                }), (0, vr.jsx)("p", {
                    className: "mt-0 mb-[12px] font-[700]",
                    children: e("popupPage.thank", {
                        APP_NAME: Iy
                    })
                }), (0, vr.jsx)("p", {
                    className: "mt-0 mb-[20px]",
                    children: e("popupPage.desc")
                }), (0, vr.jsxs)(vp, {
                    className: "px-[20px] h-[40px] mx-[auto] rounded-[40px] flex items-center text-[16px]",
                    type: "primary",
                    onClick: () => Fy(),
                    children: [(0, vr.jsx)("img", {
                        src: Ny,
                        className: "mr-[8px]"
                    }), e("popupPage.chatNow")]
                })]
            })
        }) : null
    }
    var Uy = J4;
    var Vy = M(ma());
    (0, Wy.createRoot)(document.getElementById("app")).render((0, Vy.jsx)(Uy, {}));
})();
