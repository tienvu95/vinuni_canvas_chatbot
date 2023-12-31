"use strict";
(() => {
    var kd = Object.create;
    var N1 = Object.defineProperty;
    var Sd = Object.getOwnPropertyDescriptor;
    var Pd = Object.getOwnPropertyNames;
    var Ed = Object.getPrototypeOf,
        Od = Object.prototype.hasOwnProperty;
    var He = (e, t) => () => (t || e((t = {
        exports: {}
    }).exports, t), t.exports);
    var Ld = (e, t, r, n) => {
        if (t && typeof t == "object" || typeof t == "function")
            for (let o of Pd(t)) !Od.call(e, o) && o !== r && N1(e, o, {
                get: () => t[o],
                enumerable: !(n = Sd(t, o)) || n.enumerable
            });
        return e
    };
    var M = (e, t, r) => (r = e != null ? kd(Ed(e)) : {}, Ld(t || !e || !e.__esModule ? N1(r, "default", {
        value: e,
        enumerable: !0
    }) : r, e));
    var gu = He(j => {
        "use strict";
        var Sn = Symbol.for("react.element"),
            n2 = Symbol.for("react.portal"),
            o2 = Symbol.for("react.fragment"),
            i2 = Symbol.for("react.strict_mode"),
            a2 = Symbol.for("react.profiler"),
            s2 = Symbol.for("react.provider"),
            l2 = Symbol.for("react.context"),
            u2 = Symbol.for("react.forward_ref"),
            c2 = Symbol.for("react.suspense"),
            f2 = Symbol.for("react.memo"),
            p2 = Symbol.for("react.lazy"),
            ou = Symbol.iterator;

        function d2(e) {
            return e === null || typeof e != "object" ? null : (e = ou && e[ou] || e["@@iterator"], typeof e == "function" ? e : null)
        }
        var su = {
                isMounted: function() {
                    return !1
                },
                enqueueForceUpdate: function() {},
                enqueueReplaceState: function() {},
                enqueueSetState: function() {}
            },
            lu = Object.assign,
            uu = {};

        function Ir(e, t, r) {
            this.props = e, this.context = t, this.refs = uu, this.updater = r || su
        }
        Ir.prototype.isReactComponent = {};
        Ir.prototype.setState = function(e, t) {
            if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
            this.updater.enqueueSetState(this, e, t, "setState")
        };
        Ir.prototype.forceUpdate = function(e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate")
        };

        function cu() {}
        cu.prototype = Ir.prototype;

        function ba(e, t, r) {
            this.props = e, this.context = t, this.refs = uu, this.updater = r || su
        }
        var Ha = ba.prototype = new cu;
        Ha.constructor = ba;
        lu(Ha, Ir.prototype);
        Ha.isPureReactComponent = !0;
        var iu = Array.isArray,
            fu = Object.prototype.hasOwnProperty,
            Da = {
                current: null
            },
            pu = {
                key: !0,
                ref: !0,
                __self: !0,
                __source: !0
            };

        function du(e, t, r) {
            var n, o = {},
                i = null,
                a = null;
            if (t != null)
                for (n in t.ref !== void 0 && (a = t.ref), t.key !== void 0 && (i = "" + t.key), t) fu.call(t, n) && !pu.hasOwnProperty(n) && (o[n] = t[n]);
            var s = arguments.length - 2;
            if (s === 1) o.children = r;
            else if (1 < s) {
                for (var l = Array(s), u = 0; u < s; u++) l[u] = arguments[u + 2];
                o.children = l
            }
            if (e && e.defaultProps)
                for (n in s = e.defaultProps, s) o[n] === void 0 && (o[n] = s[n]);
            return {
                $$typeof: Sn,
                type: e,
                key: i,
                ref: a,
                props: o,
                _owner: Da.current
            }
        }

        function g2(e, t) {
            return {
                $$typeof: Sn,
                type: e.type,
                key: t,
                ref: e.ref,
                props: e.props,
                _owner: e._owner
            }
        }

        function Ga(e) {
            return typeof e == "object" && e !== null && e.$$typeof === Sn
        }

        function m2(e) {
            var t = {
                "=": "=0",
                ":": "=2"
            };
            return "$" + e.replace(/[=:]/g, function(r) {
                return t[r]
            })
        }
        var au = /\/+/g;

        function Na(e, t) {
            return typeof e == "object" && e !== null && e.key != null ? m2("" + e.key) : t.toString(36)
        }

        function Ho(e, t, r, n, o) {
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
                        case Sn:
                        case n2:
                            a = !0
                    }
            }
            if (a) return a = e, o = o(a), e = n === "" ? "." + Na(a, 0) : n, iu(o) ? (r = "", e != null && (r = e.replace(au, "$&/") + "/"), Ho(o, t, r, "", function(u) {
                return u
            })) : o != null && (Ga(o) && (o = g2(o, r + (!o.key || a && a.key === o.key ? "" : ("" + o.key).replace(au, "$&/") + "/") + e)), t.push(o)), 1;
            if (a = 0, n = n === "" ? "." : n + ":", iu(e))
                for (var s = 0; s < e.length; s++) {
                    i = e[s];
                    var l = n + Na(i, s);
                    a += Ho(i, t, r, l, o)
                } else if (l = d2(e), typeof l == "function")
                    for (e = l.call(e), s = 0; !(i = e.next()).done;) i = i.value, l = n + Na(i, s++), a += Ho(i, t, r, l, o);
                else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
            return a
        }

        function bo(e, t, r) {
            if (e == null) return e;
            var n = [],
                o = 0;
            return Ho(e, n, "", "", function(i) {
                return t.call(r, i, o++)
            }), n
        }

        function h2(e) {
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
        var he = {
                current: null
            },
            Do = {
                transition: null
            },
            v2 = {
                ReactCurrentDispatcher: he,
                ReactCurrentBatchConfig: Do,
                ReactCurrentOwner: Da
            };
        j.Children = {
            map: bo,
            forEach: function(e, t, r) {
                bo(e, function() {
                    t.apply(this, arguments)
                }, r)
            },
            count: function(e) {
                var t = 0;
                return bo(e, function() {
                    t++
                }), t
            },
            toArray: function(e) {
                return bo(e, function(t) {
                    return t
                }) || []
            },
            only: function(e) {
                if (!Ga(e)) throw Error("React.Children.only expected to receive a single React element child.");
                return e
            }
        };
        j.Component = Ir;
        j.Fragment = o2;
        j.Profiler = a2;
        j.PureComponent = ba;
        j.StrictMode = i2;
        j.Suspense = c2;
        j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = v2;
        j.cloneElement = function(e, t, r) {
            if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
            var n = lu({}, e.props),
                o = e.key,
                i = e.ref,
                a = e._owner;
            if (t != null) {
                if (t.ref !== void 0 && (i = t.ref, a = Da.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
                for (l in t) fu.call(t, l) && !pu.hasOwnProperty(l) && (n[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l])
            }
            var l = arguments.length - 2;
            if (l === 1) n.children = r;
            else if (1 < l) {
                s = Array(l);
                for (var u = 0; u < l; u++) s[u] = arguments[u + 2];
                n.children = s
            }
            return {
                $$typeof: Sn,
                type: e.type,
                key: o,
                ref: i,
                props: n,
                _owner: a
            }
        };
        j.createContext = function(e) {
            return e = {
                $$typeof: l2,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null
            }, e.Provider = {
                $$typeof: s2,
                _context: e
            }, e.Consumer = e
        };
        j.createElement = du;
        j.createFactory = function(e) {
            var t = du.bind(null, e);
            return t.type = e, t
        };
        j.createRef = function() {
            return {
                current: null
            }
        };
        j.forwardRef = function(e) {
            return {
                $$typeof: u2,
                render: e
            }
        };
        j.isValidElement = Ga;
        j.lazy = function(e) {
            return {
                $$typeof: p2,
                _payload: {
                    _status: -1,
                    _result: e
                },
                _init: h2
            }
        };
        j.memo = function(e, t) {
            return {
                $$typeof: f2,
                type: e,
                compare: t === void 0 ? null : t
            }
        };
        j.startTransition = function(e) {
            var t = Do.transition;
            Do.transition = {};
            try {
                e()
            } finally {
                Do.transition = t
            }
        };
        j.unstable_act = function() {
            throw Error("act(...) is not supported in production builds of React.")
        };
        j.useCallback = function(e, t) {
            return he.current.useCallback(e, t)
        };
        j.useContext = function(e) {
            return he.current.useContext(e)
        };
        j.useDebugValue = function() {};
        j.useDeferredValue = function(e) {
            return he.current.useDeferredValue(e)
        };
        j.useEffect = function(e, t) {
            return he.current.useEffect(e, t)
        };
        j.useId = function() {
            return he.current.useId()
        };
        j.useImperativeHandle = function(e, t, r) {
            return he.current.useImperativeHandle(e, t, r)
        };
        j.useInsertionEffect = function(e, t) {
            return he.current.useInsertionEffect(e, t)
        };
        j.useLayoutEffect = function(e, t) {
            return he.current.useLayoutEffect(e, t)
        };
        j.useMemo = function(e, t) {
            return he.current.useMemo(e, t)
        };
        j.useReducer = function(e, t, r) {
            return he.current.useReducer(e, t, r)
        };
        j.useRef = function(e) {
            return he.current.useRef(e)
        };
        j.useState = function(e) {
            return he.current.useState(e)
        };
        j.useSyncExternalStore = function(e, t, r) {
            return he.current.useSyncExternalStore(e, t, r)
        };
        j.useTransition = function() {
            return he.current.useTransition()
        };
        j.version = "18.2.0"
    });
    var ve = He((C8, mu) => {
        "use strict";
        mu.exports = gu()
    });
    var vu = He((k8, hu) => {
        hu.exports = {
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
    var Gu = He(N => {
        "use strict";

        function Ya(e, t) {
            var r = e.length;
            e.push(t);
            e: for (; 0 < r;) {
                var n = r - 1 >>> 1,
                    o = e[n];
                if (0 < Uo(o, t)) e[n] = t, e[r] = o, r = n;
                else break e
            }
        }

        function Xe(e) {
            return e.length === 0 ? null : e[0]
        }

        function Wo(e) {
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
                    if (0 > Uo(s, r)) l < o && 0 > Uo(u, s) ? (e[n] = u, e[l] = r, n = l) : (e[n] = s, e[a] = r, n = a);
                    else if (l < o && 0 > Uo(u, r)) e[n] = u, e[l] = r, n = l;
                    else break e
                }
            }
            return t
        }

        function Uo(e, t) {
            var r = e.sortIndex - t.sortIndex;
            return r !== 0 ? r : e.id - t.id
        }
        typeof performance == "object" && typeof performance.now == "function" ? (Vu = performance, N.unstable_now = function() {
            return Vu.now()
        }) : (Ka = Date, ju = Ka.now(), N.unstable_now = function() {
            return Ka.now() - ju
        });
        var Vu, Ka, ju, pt = [],
            Bt = [],
            V2 = 1,
            Be = null,
            fe = 3,
            Ko = !1,
            fr = !1,
            An = !1,
            _u = typeof setTimeout == "function" ? setTimeout : null,
            Nu = typeof clearTimeout == "function" ? clearTimeout : null,
            Iu = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

        function qa(e) {
            for (var t = Xe(Bt); t !== null;) {
                if (t.callback === null) Wo(Bt);
                else if (t.startTime <= e) Wo(Bt), t.sortIndex = t.expirationTime, Ya(pt, t);
                else break;
                t = Xe(Bt)
            }
        }

        function Xa(e) {
            if (An = !1, qa(e), !fr)
                if (Xe(pt) !== null) fr = !0, es($a);
                else {
                    var t = Xe(Bt);
                    t !== null && ts(Xa, t.startTime - e)
                }
        }

        function $a(e, t) {
            fr = !1, An && (An = !1, Nu(Tn), Tn = -1), Ko = !0;
            var r = fe;
            try {
                for (qa(t), Be = Xe(pt); Be !== null && (!(Be.expirationTime > t) || e && !Du());) {
                    var n = Be.callback;
                    if (typeof n == "function") {
                        Be.callback = null, fe = Be.priorityLevel;
                        var o = n(Be.expirationTime <= t);
                        t = N.unstable_now(), typeof o == "function" ? Be.callback = o : Be === Xe(pt) && Wo(pt), qa(t)
                    } else Wo(pt);
                    Be = Xe(pt)
                }
                if (Be !== null) var i = !0;
                else {
                    var a = Xe(Bt);
                    a !== null && ts(Xa, a.startTime - t), i = !1
                }
                return i
            } finally {
                Be = null, fe = r, Ko = !1
            }
        }
        var Qo = !1,
            Zo = null,
            Tn = -1,
            bu = 5,
            Hu = -1;

        function Du() {
            return !(N.unstable_now() - Hu < bu)
        }

        function Qa() {
            if (Zo !== null) {
                var e = N.unstable_now();
                Hu = e;
                var t = !0;
                try {
                    t = Zo(!0, e)
                } finally {
                    t ? Ln() : (Qo = !1, Zo = null)
                }
            } else Qo = !1
        }
        var Ln;
        typeof Iu == "function" ? Ln = function() {
            Iu(Qa)
        } : typeof MessageChannel < "u" ? (Ja = new MessageChannel, Mu = Ja.port2, Ja.port1.onmessage = Qa, Ln = function() {
            Mu.postMessage(null)
        }) : Ln = function() {
            _u(Qa, 0)
        };
        var Ja, Mu;

        function es(e) {
            Zo = e, Qo || (Qo = !0, Ln())
        }

        function ts(e, t) {
            Tn = _u(function() {
                e(N.unstable_now())
            }, t)
        }
        N.unstable_IdlePriority = 5;
        N.unstable_ImmediatePriority = 1;
        N.unstable_LowPriority = 4;
        N.unstable_NormalPriority = 3;
        N.unstable_Profiling = null;
        N.unstable_UserBlockingPriority = 2;
        N.unstable_cancelCallback = function(e) {
            e.callback = null
        };
        N.unstable_continueExecution = function() {
            fr || Ko || (fr = !0, es($a))
        };
        N.unstable_forceFrameRate = function(e) {
            0 > e || 125 < e || (bu = 0 < e ? Math.floor(1e3 / e) : 5)
        };
        N.unstable_getCurrentPriorityLevel = function() {
            return fe
        };
        N.unstable_getFirstCallbackNode = function() {
            return Xe(pt)
        };
        N.unstable_next = function(e) {
            switch (fe) {
                case 1:
                case 2:
                case 3:
                    var t = 3;
                    break;
                default:
                    t = fe
            }
            var r = fe;
            fe = t;
            try {
                return e()
            } finally {
                fe = r
            }
        };
        N.unstable_pauseExecution = function() {};
        N.unstable_requestPaint = function() {};
        N.unstable_runWithPriority = function(e, t) {
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
            var r = fe;
            fe = e;
            try {
                return t()
            } finally {
                fe = r
            }
        };
        N.unstable_scheduleCallback = function(e, t, r) {
            var n = N.unstable_now();
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
                id: V2++,
                callback: t,
                priorityLevel: e,
                startTime: r,
                expirationTime: o,
                sortIndex: -1
            }, r > n ? (e.sortIndex = r, Ya(Bt, e), Xe(pt) === null && e === Xe(Bt) && (An ? (Nu(Tn), Tn = -1) : An = !0, ts(Xa, r - n))) : (e.sortIndex = o, Ya(pt, e), fr || Ko || (fr = !0, es($a))), e
        };
        N.unstable_shouldYield = Du;
        N.unstable_wrapCallback = function(e) {
            var t = fe;
            return function() {
                var r = fe;
                fe = t;
                try {
                    return e.apply(this, arguments)
                } finally {
                    fe = r
                }
            }
        }
    });
    var zu = He((sg, Bu) => {
        "use strict";
        Bu.exports = Gu()
    });
    var J0 = He(Ne => {
        "use strict";
        var Jc = ve(),
            Me = zu();

        function P(e) {
            for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++) t += "&args[]=" + encodeURIComponent(arguments[r]);
            return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
        }
        var Yc = new Set,
            qn = {};

        function Pr(e, t) {
            rn(e, t), rn(e + "Capture", t)
        }

        function rn(e, t) {
            for (qn[e] = t, e = 0; e < t.length; e++) Yc.add(t[e])
        }
        var Ot = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
            Ps = Object.prototype.hasOwnProperty,
            j2 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
            Fu = {},
            Uu = {};

        function I2(e) {
            return Ps.call(Uu, e) ? !0 : Ps.call(Fu, e) ? !1 : j2.test(e) ? Uu[e] = !0 : (Fu[e] = !0, !1)
        }

        function M2(e, t, r, n) {
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

        function _2(e, t, r, n) {
            if (t === null || typeof t > "u" || M2(e, t, r, n)) return !0;
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

        function we(e, t, r, n, o, i, a) {
            this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = n, this.attributeNamespace = o, this.mustUseProperty = r, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = a
        }
        var se = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
            se[e] = new we(e, 0, !1, e, null, !1, !1)
        });
        [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"]
        ].forEach(function(e) {
            var t = e[0];
            se[t] = new we(t, 1, !1, e[1], null, !1, !1)
        });
        ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
            se[e] = new we(e, 2, !1, e.toLowerCase(), null, !1, !1)
        });
        ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
            se[e] = new we(e, 2, !1, e, null, !1, !1)
        });
        "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
            se[e] = new we(e, 3, !1, e.toLowerCase(), null, !1, !1)
        });
        ["checked", "multiple", "muted", "selected"].forEach(function(e) {
            se[e] = new we(e, 3, !0, e, null, !1, !1)
        });
        ["capture", "download"].forEach(function(e) {
            se[e] = new we(e, 4, !1, e, null, !1, !1)
        });
        ["cols", "rows", "size", "span"].forEach(function(e) {
            se[e] = new we(e, 6, !1, e, null, !1, !1)
        });
        ["rowSpan", "start"].forEach(function(e) {
            se[e] = new we(e, 5, !1, e.toLowerCase(), null, !1, !1)
        });
        var hl = /[\-:]([a-z])/g;

        function vl(e) {
            return e[1].toUpperCase()
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
            var t = e.replace(hl, vl);
            se[t] = new we(t, 1, !1, e, null, !1, !1)
        });
        "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
            var t = e.replace(hl, vl);
            se[t] = new we(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
        });
        ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
            var t = e.replace(hl, vl);
            se[t] = new we(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
        });
        ["tabIndex", "crossOrigin"].forEach(function(e) {
            se[e] = new we(e, 1, !1, e.toLowerCase(), null, !1, !1)
        });
        se.xlinkHref = new we("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
        ["src", "href", "action", "formAction"].forEach(function(e) {
            se[e] = new we(e, 1, !1, e.toLowerCase(), null, !0, !0)
        });

        function yl(e, t, r, n) {
            var o = se.hasOwnProperty(t) ? se[t] : null;
            (o !== null ? o.type !== 0 : n || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (_2(t, r, o, n) && (r = null), n || o === null ? I2(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r)) : o.mustUseProperty ? e[o.propertyName] = r === null ? o.type === 3 ? !1 : "" : r : (t = o.attributeName, n = o.attributeNamespace, r === null ? e.removeAttribute(t) : (o = o.type, r = o === 3 || o === 4 && r === !0 ? "" : "" + r, n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))))
        }
        var Rt = Jc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
            Jo = Symbol.for("react.element"),
            Hr = Symbol.for("react.portal"),
            Dr = Symbol.for("react.fragment"),
            xl = Symbol.for("react.strict_mode"),
            Es = Symbol.for("react.profiler"),
            qc = Symbol.for("react.provider"),
            Xc = Symbol.for("react.context"),
            wl = Symbol.for("react.forward_ref"),
            Os = Symbol.for("react.suspense"),
            Ls = Symbol.for("react.suspense_list"),
            Cl = Symbol.for("react.memo"),
            Ft = Symbol.for("react.lazy");
        Symbol.for("react.scope");
        Symbol.for("react.debug_trace_mode");
        var $c = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden");
        Symbol.for("react.cache");
        Symbol.for("react.tracing_marker");
        var Zu = Symbol.iterator;

        function Rn(e) {
            return e === null || typeof e != "object" ? null : (e = Zu && e[Zu] || e["@@iterator"], typeof e == "function" ? e : null)
        }
        var U = Object.assign,
            rs;

        function Hn(e) {
            if (rs === void 0) try {
                throw Error()
            } catch (r) {
                var t = r.stack.trim().match(/\n( *(at )?)/);
                rs = t && t[1] || ""
            }
            return `
` + rs + e
        }
        var ns = !1;

        function os(e, t) {
            if (!e || ns) return "";
            ns = !0;
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
                ns = !1, Error.prepareStackTrace = r
            }
            return (e = e ? e.displayName || e.name : "") ? Hn(e) : ""
        }

        function N2(e) {
            switch (e.tag) {
                case 5:
                    return Hn(e.type);
                case 16:
                    return Hn("Lazy");
                case 13:
                    return Hn("Suspense");
                case 19:
                    return Hn("SuspenseList");
                case 0:
                case 2:
                case 15:
                    return e = os(e.type, !1), e;
                case 11:
                    return e = os(e.type.render, !1), e;
                case 1:
                    return e = os(e.type, !0), e;
                default:
                    return ""
            }
        }

        function As(e) {
            if (e == null) return null;
            if (typeof e == "function") return e.displayName || e.name || null;
            if (typeof e == "string") return e;
            switch (e) {
                case Dr:
                    return "Fragment";
                case Hr:
                    return "Portal";
                case Es:
                    return "Profiler";
                case xl:
                    return "StrictMode";
                case Os:
                    return "Suspense";
                case Ls:
                    return "SuspenseList"
            }
            if (typeof e == "object") switch (e.$$typeof) {
                case Xc:
                    return (e.displayName || "Context") + ".Consumer";
                case qc:
                    return (e._context.displayName || "Context") + ".Provider";
                case wl:
                    var t = e.render;
                    return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
                case Cl:
                    return t = e.displayName || null, t !== null ? t : As(e.type) || "Memo";
                case Ft:
                    t = e._payload, e = e._init;
                    try {
                        return As(e(t))
                    } catch {}
            }
            return null
        }

        function b2(e) {
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
                    return As(t);
                case 8:
                    return t === xl ? "StrictMode" : "Mode";
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

        function nr(e) {
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

        function ef(e) {
            var t = e.type;
            return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
        }

        function H2(e) {
            var t = ef(e) ? "checked" : "value",
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

        function Yo(e) {
            e._valueTracker || (e._valueTracker = H2(e))
        }

        function tf(e) {
            if (!e) return !1;
            var t = e._valueTracker;
            if (!t) return !0;
            var r = t.getValue(),
                n = "";
            return e && (n = ef(e) ? e.checked ? "true" : "false" : e.value), e = n, e !== r ? (t.setValue(e), !0) : !1
        }

        function Pi(e) {
            if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
            try {
                return e.activeElement || e.body
            } catch {
                return e.body
            }
        }

        function Ts(e, t) {
            var r = t.checked;
            return U({}, t, {
                defaultChecked: void 0,
                defaultValue: void 0,
                value: void 0,
                checked: r ?? e._wrapperState.initialChecked
            })
        }

        function Wu(e, t) {
            var r = t.defaultValue == null ? "" : t.defaultValue,
                n = t.checked != null ? t.checked : t.defaultChecked;
            r = nr(t.value != null ? t.value : r), e._wrapperState = {
                initialChecked: n,
                initialValue: r,
                controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
            }
        }

        function rf(e, t) {
            t = t.checked, t != null && yl(e, "checked", t, !1)
        }

        function Rs(e, t) {
            rf(e, t);
            var r = nr(t.value),
                n = t.type;
            if (r != null) n === "number" ? (r === 0 && e.value === "" || e.value != r) && (e.value = "" + r) : e.value !== "" + r && (e.value = "" + r);
            else if (n === "submit" || n === "reset") {
                e.removeAttribute("value");
                return
            }
            t.hasOwnProperty("value") ? Vs(e, t.type, r) : t.hasOwnProperty("defaultValue") && Vs(e, t.type, nr(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
        }

        function Ku(e, t, r) {
            if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
                var n = t.type;
                if (!(n !== "submit" && n !== "reset" || t.value !== void 0 && t.value !== null)) return;
                t = "" + e._wrapperState.initialValue, r || t === e.value || (e.value = t), e.defaultValue = t
            }
            r = e.name, r !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, r !== "" && (e.name = r)
        }

        function Vs(e, t, r) {
            (t !== "number" || Pi(e.ownerDocument) !== e) && (r == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + r && (e.defaultValue = "" + r))
        }
        var Dn = Array.isArray;

        function Yr(e, t, r, n) {
            if (e = e.options, t) {
                t = {};
                for (var o = 0; o < r.length; o++) t["$" + r[o]] = !0;
                for (r = 0; r < e.length; r++) o = t.hasOwnProperty("$" + e[r].value), e[r].selected !== o && (e[r].selected = o), o && n && (e[r].defaultSelected = !0)
            } else {
                for (r = "" + nr(r), t = null, o = 0; o < e.length; o++) {
                    if (e[o].value === r) {
                        e[o].selected = !0, n && (e[o].defaultSelected = !0);
                        return
                    }
                    t !== null || e[o].disabled || (t = e[o])
                }
                t !== null && (t.selected = !0)
            }
        }

        function js(e, t) {
            if (t.dangerouslySetInnerHTML != null) throw Error(P(91));
            return U({}, t, {
                value: void 0,
                defaultValue: void 0,
                children: "" + e._wrapperState.initialValue
            })
        }

        function Qu(e, t) {
            var r = t.value;
            if (r == null) {
                if (r = t.children, t = t.defaultValue, r != null) {
                    if (t != null) throw Error(P(92));
                    if (Dn(r)) {
                        if (1 < r.length) throw Error(P(93));
                        r = r[0]
                    }
                    t = r
                }
                t == null && (t = ""), r = t
            }
            e._wrapperState = {
                initialValue: nr(r)
            }
        }

        function nf(e, t) {
            var r = nr(t.value),
                n = nr(t.defaultValue);
            r != null && (r = "" + r, r !== e.value && (e.value = r), t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)), n != null && (e.defaultValue = "" + n)
        }

        function Ju(e) {
            var t = e.textContent;
            t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
        }

        function of(e) {
            switch (e) {
                case "svg":
                    return "http://www.w3.org/2000/svg";
                case "math":
                    return "http://www.w3.org/1998/Math/MathML";
                default:
                    return "http://www.w3.org/1999/xhtml"
            }
        }

        function Is(e, t) {
            return e == null || e === "http://www.w3.org/1999/xhtml" ? of(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
        }
        var qo, af = function(e) {
            return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, r, n, o) {
                MSApp.execUnsafeLocalFunction(function() {
                    return e(t, r, n, o)
                })
            } : e
        }(function(e, t) {
            if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
            else {
                for (qo = qo || document.createElement("div"), qo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = qo.firstChild; e.firstChild;) e.removeChild(e.firstChild);
                for (; t.firstChild;) e.appendChild(t.firstChild)
            }
        });

        function Xn(e, t) {
            if (t) {
                var r = e.firstChild;
                if (r && r === e.lastChild && r.nodeType === 3) {
                    r.nodeValue = t;
                    return
                }
            }
            e.textContent = t
        }
        var zn = {
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
            D2 = ["Webkit", "ms", "Moz", "O"];
        Object.keys(zn).forEach(function(e) {
            D2.forEach(function(t) {
                t = t + e.charAt(0).toUpperCase() + e.substring(1), zn[t] = zn[e]
            })
        });

        function sf(e, t, r) {
            return t == null || typeof t == "boolean" || t === "" ? "" : r || typeof t != "number" || t === 0 || zn.hasOwnProperty(e) && zn[e] ? ("" + t).trim() : t + "px"
        }

        function lf(e, t) {
            e = e.style;
            for (var r in t)
                if (t.hasOwnProperty(r)) {
                    var n = r.indexOf("--") === 0,
                        o = sf(r, t[r], n);
                    r === "float" && (r = "cssFloat"), n ? e.setProperty(r, o) : e[r] = o
                }
        }
        var G2 = U({
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

        function Ms(e, t) {
            if (t) {
                if (G2[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(P(137, e));
                if (t.dangerouslySetInnerHTML != null) {
                    if (t.children != null) throw Error(P(60));
                    if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(P(61))
                }
                if (t.style != null && typeof t.style != "object") throw Error(P(62))
            }
        }

        function _s(e, t) {
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
        var Ns = null;

        function kl(e) {
            return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
        }
        var bs = null,
            qr = null,
            Xr = null;

        function Yu(e) {
            if (e = vo(e)) {
                if (typeof bs != "function") throw Error(P(280));
                var t = e.stateNode;
                t && (t = Xi(t), bs(e.stateNode, e.type, t))
            }
        }

        function uf(e) {
            qr ? Xr ? Xr.push(e) : Xr = [e] : qr = e
        }

        function cf() {
            if (qr) {
                var e = qr,
                    t = Xr;
                if (Xr = qr = null, Yu(e), t)
                    for (e = 0; e < t.length; e++) Yu(t[e])
            }
        }

        function ff(e, t) {
            return e(t)
        }

        function pf() {}
        var is = !1;

        function df(e, t, r) {
            if (is) return e(t, r);
            is = !0;
            try {
                return ff(e, t, r)
            } finally {
                is = !1, (qr !== null || Xr !== null) && (pf(), cf())
            }
        }

        function $n(e, t) {
            var r = e.stateNode;
            if (r === null) return null;
            var n = Xi(r);
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
            if (r && typeof r != "function") throw Error(P(231, t, typeof r));
            return r
        }
        var Hs = !1;
        if (Ot) try {
            Nr = {}, Object.defineProperty(Nr, "passive", {
                get: function() {
                    Hs = !0
                }
            }), window.addEventListener("test", Nr, Nr), window.removeEventListener("test", Nr, Nr)
        } catch {
            Hs = !1
        }
        var Nr;

        function B2(e, t, r, n, o, i, a, s, l) {
            var u = Array.prototype.slice.call(arguments, 3);
            try {
                t.apply(r, u)
            } catch (g) {
                this.onError(g)
            }
        }
        var Fn = !1,
            Ei = null,
            Oi = !1,
            Ds = null,
            z2 = {
                onError: function(e) {
                    Fn = !0, Ei = e
                }
            };

        function F2(e, t, r, n, o, i, a, s, l) {
            Fn = !1, Ei = null, B2.apply(z2, arguments)
        }

        function U2(e, t, r, n, o, i, a, s, l) {
            if (F2.apply(this, arguments), Fn) {
                if (Fn) {
                    var u = Ei;
                    Fn = !1, Ei = null
                } else throw Error(P(198));
                Oi || (Oi = !0, Ds = u)
            }
        }

        function Er(e) {
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

        function gf(e) {
            if (e.tag === 13) {
                var t = e.memoizedState;
                if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
            }
            return null
        }

        function qu(e) {
            if (Er(e) !== e) throw Error(P(188))
        }

        function Z2(e) {
            var t = e.alternate;
            if (!t) {
                if (t = Er(e), t === null) throw Error(P(188));
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
                        if (i === r) return qu(o), e;
                        if (i === n) return qu(o), t;
                        i = i.sibling
                    }
                    throw Error(P(188))
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
                        if (!a) throw Error(P(189))
                    }
                }
                if (r.alternate !== n) throw Error(P(190))
            }
            if (r.tag !== 3) throw Error(P(188));
            return r.stateNode.current === r ? e : t
        }

        function mf(e) {
            return e = Z2(e), e !== null ? hf(e) : null
        }

        function hf(e) {
            if (e.tag === 5 || e.tag === 6) return e;
            for (e = e.child; e !== null;) {
                var t = hf(e);
                if (t !== null) return t;
                e = e.sibling
            }
            return null
        }
        var vf = Me.unstable_scheduleCallback,
            Xu = Me.unstable_cancelCallback,
            W2 = Me.unstable_shouldYield,
            K2 = Me.unstable_requestPaint,
            W = Me.unstable_now,
            Q2 = Me.unstable_getCurrentPriorityLevel,
            Sl = Me.unstable_ImmediatePriority,
            yf = Me.unstable_UserBlockingPriority,
            Li = Me.unstable_NormalPriority,
            J2 = Me.unstable_LowPriority,
            xf = Me.unstable_IdlePriority,
            Qi = null,
            ht = null;

        function Y2(e) {
            if (ht && typeof ht.onCommitFiberRoot == "function") try {
                ht.onCommitFiberRoot(Qi, e, void 0, (e.current.flags & 128) === 128)
            } catch {}
        }
        var nt = Math.clz32 ? Math.clz32 : $2,
            q2 = Math.log,
            X2 = Math.LN2;

        function $2(e) {
            return e >>>= 0, e === 0 ? 32 : 31 - (q2(e) / X2 | 0) | 0
        }
        var Xo = 64,
            $o = 4194304;

        function Gn(e) {
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

        function Ai(e, t) {
            var r = e.pendingLanes;
            if (r === 0) return 0;
            var n = 0,
                o = e.suspendedLanes,
                i = e.pingedLanes,
                a = r & 268435455;
            if (a !== 0) {
                var s = a & ~o;
                s !== 0 ? n = Gn(s) : (i &= a, i !== 0 && (n = Gn(i)))
            } else a = r & ~o, a !== 0 ? n = Gn(a) : i !== 0 && (n = Gn(i));
            if (n === 0) return 0;
            if (t !== 0 && t !== n && !(t & o) && (o = n & -n, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0)) return t;
            if (n & 4 && (n |= r & 16), t = e.entangledLanes, t !== 0)
                for (e = e.entanglements, t &= n; 0 < t;) r = 31 - nt(t), o = 1 << r, n |= e[r], t &= ~o;
            return n
        }

        function e3(e, t) {
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

        function t3(e, t) {
            for (var r = e.suspendedLanes, n = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i;) {
                var a = 31 - nt(i),
                    s = 1 << a,
                    l = o[a];
                l === -1 ? (!(s & r) || s & n) && (o[a] = e3(s, t)) : l <= t && (e.expiredLanes |= s), i &= ~s
            }
        }

        function Gs(e) {
            return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
        }

        function wf() {
            var e = Xo;
            return Xo <<= 1, !(Xo & 4194240) && (Xo = 64), e
        }

        function as(e) {
            for (var t = [], r = 0; 31 > r; r++) t.push(e);
            return t
        }

        function mo(e, t, r) {
            e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - nt(t), e[t] = r
        }

        function r3(e, t) {
            var r = e.pendingLanes & ~t;
            e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
            var n = e.eventTimes;
            for (e = e.expirationTimes; 0 < r;) {
                var o = 31 - nt(r),
                    i = 1 << o;
                t[o] = 0, n[o] = -1, e[o] = -1, r &= ~i
            }
        }

        function Pl(e, t) {
            var r = e.entangledLanes |= t;
            for (e = e.entanglements; r;) {
                var n = 31 - nt(r),
                    o = 1 << n;
                o & t | e[n] & t && (e[n] |= t), r &= ~o
            }
        }
        var _ = 0;

        function Cf(e) {
            return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
        }
        var kf, El, Sf, Pf, Ef, Bs = !1,
            ei = [],
            Jt = null,
            Yt = null,
            qt = null,
            eo = new Map,
            to = new Map,
            Zt = [],
            n3 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

        function $u(e, t) {
            switch (e) {
                case "focusin":
                case "focusout":
                    Jt = null;
                    break;
                case "dragenter":
                case "dragleave":
                    Yt = null;
                    break;
                case "mouseover":
                case "mouseout":
                    qt = null;
                    break;
                case "pointerover":
                case "pointerout":
                    eo.delete(t.pointerId);
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                    to.delete(t.pointerId)
            }
        }

        function Vn(e, t, r, n, o, i) {
            return e === null || e.nativeEvent !== i ? (e = {
                blockedOn: t,
                domEventName: r,
                eventSystemFlags: n,
                nativeEvent: i,
                targetContainers: [o]
            }, t !== null && (t = vo(t), t !== null && El(t)), e) : (e.eventSystemFlags |= n, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e)
        }

        function o3(e, t, r, n, o) {
            switch (t) {
                case "focusin":
                    return Jt = Vn(Jt, e, t, r, n, o), !0;
                case "dragenter":
                    return Yt = Vn(Yt, e, t, r, n, o), !0;
                case "mouseover":
                    return qt = Vn(qt, e, t, r, n, o), !0;
                case "pointerover":
                    var i = o.pointerId;
                    return eo.set(i, Vn(eo.get(i) || null, e, t, r, n, o)), !0;
                case "gotpointercapture":
                    return i = o.pointerId, to.set(i, Vn(to.get(i) || null, e, t, r, n, o)), !0
            }
            return !1
        }

        function Of(e) {
            var t = gr(e.target);
            if (t !== null) {
                var r = Er(t);
                if (r !== null) {
                    if (t = r.tag, t === 13) {
                        if (t = gf(r), t !== null) {
                            e.blockedOn = t, Ef(e.priority, function() {
                                Sf(r)
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

        function gi(e) {
            if (e.blockedOn !== null) return !1;
            for (var t = e.targetContainers; 0 < t.length;) {
                var r = zs(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
                if (r === null) {
                    r = e.nativeEvent;
                    var n = new r.constructor(r.type, r);
                    Ns = n, r.target.dispatchEvent(n), Ns = null
                } else return t = vo(r), t !== null && El(t), e.blockedOn = r, !1;
                t.shift()
            }
            return !0
        }

        function ec(e, t, r) {
            gi(e) && r.delete(t)
        }

        function i3() {
            Bs = !1, Jt !== null && gi(Jt) && (Jt = null), Yt !== null && gi(Yt) && (Yt = null), qt !== null && gi(qt) && (qt = null), eo.forEach(ec), to.forEach(ec)
        }

        function jn(e, t) {
            e.blockedOn === t && (e.blockedOn = null, Bs || (Bs = !0, Me.unstable_scheduleCallback(Me.unstable_NormalPriority, i3)))
        }

        function ro(e) {
            function t(o) {
                return jn(o, e)
            }
            if (0 < ei.length) {
                jn(ei[0], e);
                for (var r = 1; r < ei.length; r++) {
                    var n = ei[r];
                    n.blockedOn === e && (n.blockedOn = null)
                }
            }
            for (Jt !== null && jn(Jt, e), Yt !== null && jn(Yt, e), qt !== null && jn(qt, e), eo.forEach(t), to.forEach(t), r = 0; r < Zt.length; r++) n = Zt[r], n.blockedOn === e && (n.blockedOn = null);
            for (; 0 < Zt.length && (r = Zt[0], r.blockedOn === null);) Of(r), r.blockedOn === null && Zt.shift()
        }
        var $r = Rt.ReactCurrentBatchConfig,
            Ti = !0;

        function a3(e, t, r, n) {
            var o = _,
                i = $r.transition;
            $r.transition = null;
            try {
                _ = 1, Ol(e, t, r, n)
            } finally {
                _ = o, $r.transition = i
            }
        }

        function s3(e, t, r, n) {
            var o = _,
                i = $r.transition;
            $r.transition = null;
            try {
                _ = 4, Ol(e, t, r, n)
            } finally {
                _ = o, $r.transition = i
            }
        }

        function Ol(e, t, r, n) {
            if (Ti) {
                var o = zs(e, t, r, n);
                if (o === null) ds(e, t, n, Ri, r), $u(e, n);
                else if (o3(o, e, t, r, n)) n.stopPropagation();
                else if ($u(e, n), t & 4 && -1 < n3.indexOf(e)) {
                    for (; o !== null;) {
                        var i = vo(o);
                        if (i !== null && kf(i), i = zs(e, t, r, n), i === null && ds(e, t, n, Ri, r), i === o) break;
                        o = i
                    }
                    o !== null && n.stopPropagation()
                } else ds(e, t, n, null, r)
            }
        }
        var Ri = null;

        function zs(e, t, r, n) {
            if (Ri = null, e = kl(n), e = gr(e), e !== null)
                if (t = Er(e), t === null) e = null;
                else if (r = t.tag, r === 13) {
                if (e = gf(t), e !== null) return e;
                e = null
            } else if (r === 3) {
                if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
                e = null
            } else t !== e && (e = null);
            return Ri = e, null
        }

        function Lf(e) {
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
                    switch (Q2()) {
                        case Sl:
                            return 1;
                        case yf:
                            return 4;
                        case Li:
                        case J2:
                            return 16;
                        case xf:
                            return 536870912;
                        default:
                            return 16
                    }
                default:
                    return 16
            }
        }
        var Kt = null,
            Ll = null,
            mi = null;

        function Af() {
            if (mi) return mi;
            var e, t = Ll,
                r = t.length,
                n, o = "value" in Kt ? Kt.value : Kt.textContent,
                i = o.length;
            for (e = 0; e < r && t[e] === o[e]; e++);
            var a = r - e;
            for (n = 1; n <= a && t[r - n] === o[i - n]; n++);
            return mi = o.slice(e, 1 < n ? 1 - n : void 0)
        }

        function hi(e) {
            var t = e.keyCode;
            return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
        }

        function ti() {
            return !0
        }

        function tc() {
            return !1
        }

        function _e(e) {
            function t(r, n, o, i, a) {
                this._reactName = r, this._targetInst = o, this.type = n, this.nativeEvent = i, this.target = a, this.currentTarget = null;
                for (var s in e) e.hasOwnProperty(s) && (r = e[s], this[s] = r ? r(i) : i[s]);
                return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? ti : tc, this.isPropagationStopped = tc, this
            }
            return U(t.prototype, {
                preventDefault: function() {
                    this.defaultPrevented = !0;
                    var r = this.nativeEvent;
                    r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = !1), this.isDefaultPrevented = ti)
                },
                stopPropagation: function() {
                    var r = this.nativeEvent;
                    r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0), this.isPropagationStopped = ti)
                },
                persist: function() {},
                isPersistent: ti
            }), t
        }
        var cn = {
                eventPhase: 0,
                bubbles: 0,
                cancelable: 0,
                timeStamp: function(e) {
                    return e.timeStamp || Date.now()
                },
                defaultPrevented: 0,
                isTrusted: 0
            },
            Al = _e(cn),
            ho = U({}, cn, {
                view: 0,
                detail: 0
            }),
            l3 = _e(ho),
            ss, ls, In, Ji = U({}, ho, {
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
                getModifierState: Tl,
                button: 0,
                buttons: 0,
                relatedTarget: function(e) {
                    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
                },
                movementX: function(e) {
                    return "movementX" in e ? e.movementX : (e !== In && (In && e.type === "mousemove" ? (ss = e.screenX - In.screenX, ls = e.screenY - In.screenY) : ls = ss = 0, In = e), ss)
                },
                movementY: function(e) {
                    return "movementY" in e ? e.movementY : ls
                }
            }),
            rc = _e(Ji),
            u3 = U({}, Ji, {
                dataTransfer: 0
            }),
            c3 = _e(u3),
            f3 = U({}, ho, {
                relatedTarget: 0
            }),
            us = _e(f3),
            p3 = U({}, cn, {
                animationName: 0,
                elapsedTime: 0,
                pseudoElement: 0
            }),
            d3 = _e(p3),
            g3 = U({}, cn, {
                clipboardData: function(e) {
                    return "clipboardData" in e ? e.clipboardData : window.clipboardData
                }
            }),
            m3 = _e(g3),
            h3 = U({}, cn, {
                data: 0
            }),
            nc = _e(h3),
            v3 = {
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
            y3 = {
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
            x3 = {
                Alt: "altKey",
                Control: "ctrlKey",
                Meta: "metaKey",
                Shift: "shiftKey"
            };

        function w3(e) {
            var t = this.nativeEvent;
            return t.getModifierState ? t.getModifierState(e) : (e = x3[e]) ? !!t[e] : !1
        }

        function Tl() {
            return w3
        }
        var C3 = U({}, ho, {
                key: function(e) {
                    if (e.key) {
                        var t = v3[e.key] || e.key;
                        if (t !== "Unidentified") return t
                    }
                    return e.type === "keypress" ? (e = hi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? y3[e.keyCode] || "Unidentified" : ""
                },
                code: 0,
                location: 0,
                ctrlKey: 0,
                shiftKey: 0,
                altKey: 0,
                metaKey: 0,
                repeat: 0,
                locale: 0,
                getModifierState: Tl,
                charCode: function(e) {
                    return e.type === "keypress" ? hi(e) : 0
                },
                keyCode: function(e) {
                    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
                },
                which: function(e) {
                    return e.type === "keypress" ? hi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
                }
            }),
            k3 = _e(C3),
            S3 = U({}, Ji, {
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
            oc = _e(S3),
            P3 = U({}, ho, {
                touches: 0,
                targetTouches: 0,
                changedTouches: 0,
                altKey: 0,
                metaKey: 0,
                ctrlKey: 0,
                shiftKey: 0,
                getModifierState: Tl
            }),
            E3 = _e(P3),
            O3 = U({}, cn, {
                propertyName: 0,
                elapsedTime: 0,
                pseudoElement: 0
            }),
            L3 = _e(O3),
            A3 = U({}, Ji, {
                deltaX: function(e) {
                    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
                },
                deltaY: function(e) {
                    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
                },
                deltaZ: 0,
                deltaMode: 0
            }),
            T3 = _e(A3),
            R3 = [9, 13, 27, 32],
            Rl = Ot && "CompositionEvent" in window,
            Un = null;
        Ot && "documentMode" in document && (Un = document.documentMode);
        var V3 = Ot && "TextEvent" in window && !Un,
            Tf = Ot && (!Rl || Un && 8 < Un && 11 >= Un),
            ic = String.fromCharCode(32),
            ac = !1;

        function Rf(e, t) {
            switch (e) {
                case "keyup":
                    return R3.indexOf(t.keyCode) !== -1;
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

        function Vf(e) {
            return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
        }
        var Gr = !1;

        function j3(e, t) {
            switch (e) {
                case "compositionend":
                    return Vf(t);
                case "keypress":
                    return t.which !== 32 ? null : (ac = !0, ic);
                case "textInput":
                    return e = t.data, e === ic && ac ? null : e;
                default:
                    return null
            }
        }

        function I3(e, t) {
            if (Gr) return e === "compositionend" || !Rl && Rf(e, t) ? (e = Af(), mi = Ll = Kt = null, Gr = !1, e) : null;
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
                    return Tf && t.locale !== "ko" ? null : t.data;
                default:
                    return null
            }
        }
        var M3 = {
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

        function sc(e) {
            var t = e && e.nodeName && e.nodeName.toLowerCase();
            return t === "input" ? !!M3[e.type] : t === "textarea"
        }

        function jf(e, t, r, n) {
            uf(n), t = Vi(t, "onChange"), 0 < t.length && (r = new Al("onChange", "change", null, r, n), e.push({
                event: r,
                listeners: t
            }))
        }
        var Zn = null,
            no = null;

        function _3(e) {
            Ff(e, 0)
        }

        function Yi(e) {
            var t = Fr(e);
            if (tf(t)) return e
        }

        function N3(e, t) {
            if (e === "change") return t
        }
        var If = !1;
        Ot && (Ot ? (ni = "oninput" in document, ni || (cs = document.createElement("div"), cs.setAttribute("oninput", "return;"), ni = typeof cs.oninput == "function"), ri = ni) : ri = !1, If = ri && (!document.documentMode || 9 < document.documentMode));
        var ri, ni, cs;

        function lc() {
            Zn && (Zn.detachEvent("onpropertychange", Mf), no = Zn = null)
        }

        function Mf(e) {
            if (e.propertyName === "value" && Yi(no)) {
                var t = [];
                jf(t, no, e, kl(e)), df(_3, t)
            }
        }

        function b3(e, t, r) {
            e === "focusin" ? (lc(), Zn = t, no = r, Zn.attachEvent("onpropertychange", Mf)) : e === "focusout" && lc()
        }

        function H3(e) {
            if (e === "selectionchange" || e === "keyup" || e === "keydown") return Yi(no)
        }

        function D3(e, t) {
            if (e === "click") return Yi(t)
        }

        function G3(e, t) {
            if (e === "input" || e === "change") return Yi(t)
        }

        function B3(e, t) {
            return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
        }
        var it = typeof Object.is == "function" ? Object.is : B3;

        function oo(e, t) {
            if (it(e, t)) return !0;
            if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
            var r = Object.keys(e),
                n = Object.keys(t);
            if (r.length !== n.length) return !1;
            for (n = 0; n < r.length; n++) {
                var o = r[n];
                if (!Ps.call(t, o) || !it(e[o], t[o])) return !1
            }
            return !0
        }

        function uc(e) {
            for (; e && e.firstChild;) e = e.firstChild;
            return e
        }

        function cc(e, t) {
            var r = uc(e);
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
                r = uc(r)
            }
        }

        function _f(e, t) {
            return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? _f(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
        }

        function Nf() {
            for (var e = window, t = Pi(); t instanceof e.HTMLIFrameElement;) {
                try {
                    var r = typeof t.contentWindow.location.href == "string"
                } catch {
                    r = !1
                }
                if (r) e = t.contentWindow;
                else break;
                t = Pi(e.document)
            }
            return t
        }

        function Vl(e) {
            var t = e && e.nodeName && e.nodeName.toLowerCase();
            return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
        }

        function z3(e) {
            var t = Nf(),
                r = e.focusedElem,
                n = e.selectionRange;
            if (t !== r && r && r.ownerDocument && _f(r.ownerDocument.documentElement, r)) {
                if (n !== null && Vl(r)) {
                    if (t = n.start, e = n.end, e === void 0 && (e = t), "selectionStart" in r) r.selectionStart = t, r.selectionEnd = Math.min(e, r.value.length);
                    else if (e = (t = r.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                        e = e.getSelection();
                        var o = r.textContent.length,
                            i = Math.min(n.start, o);
                        n = n.end === void 0 ? i : Math.min(n.end, o), !e.extend && i > n && (o = n, n = i, i = o), o = cc(r, i);
                        var a = cc(r, n);
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
        var F3 = Ot && "documentMode" in document && 11 >= document.documentMode,
            Br = null,
            Fs = null,
            Wn = null,
            Us = !1;

        function fc(e, t, r) {
            var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
            Us || Br == null || Br !== Pi(n) || (n = Br, "selectionStart" in n && Vl(n) ? n = {
                start: n.selectionStart,
                end: n.selectionEnd
            } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = {
                anchorNode: n.anchorNode,
                anchorOffset: n.anchorOffset,
                focusNode: n.focusNode,
                focusOffset: n.focusOffset
            }), Wn && oo(Wn, n) || (Wn = n, n = Vi(Fs, "onSelect"), 0 < n.length && (t = new Al("onSelect", "select", null, t, r), e.push({
                event: t,
                listeners: n
            }), t.target = Br)))
        }

        function oi(e, t) {
            var r = {};
            return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit" + e] = "webkit" + t, r["Moz" + e] = "moz" + t, r
        }
        var zr = {
                animationend: oi("Animation", "AnimationEnd"),
                animationiteration: oi("Animation", "AnimationIteration"),
                animationstart: oi("Animation", "AnimationStart"),
                transitionend: oi("Transition", "TransitionEnd")
            },
            fs = {},
            bf = {};
        Ot && (bf = document.createElement("div").style, "AnimationEvent" in window || (delete zr.animationend.animation, delete zr.animationiteration.animation, delete zr.animationstart.animation), "TransitionEvent" in window || delete zr.transitionend.transition);

        function qi(e) {
            if (fs[e]) return fs[e];
            if (!zr[e]) return e;
            var t = zr[e],
                r;
            for (r in t)
                if (t.hasOwnProperty(r) && r in bf) return fs[e] = t[r];
            return e
        }
        var Hf = qi("animationend"),
            Df = qi("animationiteration"),
            Gf = qi("animationstart"),
            Bf = qi("transitionend"),
            zf = new Map,
            pc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

        function ir(e, t) {
            zf.set(e, t), Pr(t, [e])
        }
        for (ii = 0; ii < pc.length; ii++) ai = pc[ii], dc = ai.toLowerCase(), gc = ai[0].toUpperCase() + ai.slice(1), ir(dc, "on" + gc);
        var ai, dc, gc, ii;
        ir(Hf, "onAnimationEnd");
        ir(Df, "onAnimationIteration");
        ir(Gf, "onAnimationStart");
        ir("dblclick", "onDoubleClick");
        ir("focusin", "onFocus");
        ir("focusout", "onBlur");
        ir(Bf, "onTransitionEnd");
        rn("onMouseEnter", ["mouseout", "mouseover"]);
        rn("onMouseLeave", ["mouseout", "mouseover"]);
        rn("onPointerEnter", ["pointerout", "pointerover"]);
        rn("onPointerLeave", ["pointerout", "pointerover"]);
        Pr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
        Pr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
        Pr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
        Pr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
        Pr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
        Pr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
        var Bn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
            U3 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Bn));

        function mc(e, t, r) {
            var n = e.type || "unknown-event";
            e.currentTarget = r, U2(n, t, void 0, e), e.currentTarget = null
        }

        function Ff(e, t) {
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
                            mc(o, s, u), i = l
                        } else
                            for (a = 0; a < n.length; a++) {
                                if (s = n[a], l = s.instance, u = s.currentTarget, s = s.listener, l !== i && o.isPropagationStopped()) break e;
                                mc(o, s, u), i = l
                            }
                }
            }
            if (Oi) throw e = Ds, Oi = !1, Ds = null, e
        }

        function H(e, t) {
            var r = t[Js];
            r === void 0 && (r = t[Js] = new Set);
            var n = e + "__bubble";
            r.has(n) || (Uf(t, e, 2, !1), r.add(n))
        }

        function ps(e, t, r) {
            var n = 0;
            t && (n |= 4), Uf(r, e, n, t)
        }
        var si = "_reactListening" + Math.random().toString(36).slice(2);

        function io(e) {
            if (!e[si]) {
                e[si] = !0, Yc.forEach(function(r) {
                    r !== "selectionchange" && (U3.has(r) || ps(r, !1, e), ps(r, !0, e))
                });
                var t = e.nodeType === 9 ? e : e.ownerDocument;
                t === null || t[si] || (t[si] = !0, ps("selectionchange", !1, t))
            }
        }

        function Uf(e, t, r, n) {
            switch (Lf(t)) {
                case 1:
                    var o = a3;
                    break;
                case 4:
                    o = s3;
                    break;
                default:
                    o = Ol
            }
            r = o.bind(null, t, r, e), o = void 0, !Hs || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), n ? o !== void 0 ? e.addEventListener(t, r, {
                capture: !0,
                passive: o
            }) : e.addEventListener(t, r, !0) : o !== void 0 ? e.addEventListener(t, r, {
                passive: o
            }) : e.addEventListener(t, r, !1)
        }

        function ds(e, t, r, n, o) {
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
                        if (a = gr(s), a === null) return;
                        if (l = a.tag, l === 5 || l === 6) {
                            n = i = a;
                            continue e
                        }
                        s = s.parentNode
                    }
                }
                n = n.return
            }
            df(function() {
                var u = i,
                    g = kl(r),
                    f = [];
                e: {
                    var d = zf.get(e);
                    if (d !== void 0) {
                        var m = Al,
                            y = e;
                        switch (e) {
                            case "keypress":
                                if (hi(r) === 0) break e;
                            case "keydown":
                            case "keyup":
                                m = k3;
                                break;
                            case "focusin":
                                y = "focus", m = us;
                                break;
                            case "focusout":
                                y = "blur", m = us;
                                break;
                            case "beforeblur":
                            case "afterblur":
                                m = us;
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
                                m = rc;
                                break;
                            case "drag":
                            case "dragend":
                            case "dragenter":
                            case "dragexit":
                            case "dragleave":
                            case "dragover":
                            case "dragstart":
                            case "drop":
                                m = c3;
                                break;
                            case "touchcancel":
                            case "touchend":
                            case "touchmove":
                            case "touchstart":
                                m = E3;
                                break;
                            case Hf:
                            case Df:
                            case Gf:
                                m = d3;
                                break;
                            case Bf:
                                m = L3;
                                break;
                            case "scroll":
                                m = l3;
                                break;
                            case "wheel":
                                m = T3;
                                break;
                            case "copy":
                            case "cut":
                            case "paste":
                                m = m3;
                                break;
                            case "gotpointercapture":
                            case "lostpointercapture":
                            case "pointercancel":
                            case "pointerdown":
                            case "pointermove":
                            case "pointerout":
                            case "pointerover":
                            case "pointerup":
                                m = oc
                        }
                        var w = (t & 4) !== 0,
                            E = !w && e === "scroll",
                            p = w ? d !== null ? d + "Capture" : null : d;
                        w = [];
                        for (var c = u, h; c !== null;) {
                            h = c;
                            var v = h.stateNode;
                            if (h.tag === 5 && v !== null && (h = v, p !== null && (v = $n(c, p), v != null && w.push(ao(c, v, h)))), E) break;
                            c = c.return
                        }
                        0 < w.length && (d = new m(d, y, null, r, g), f.push({
                            event: d,
                            listeners: w
                        }))
                    }
                }
                if (!(t & 7)) {
                    e: {
                        if (d = e === "mouseover" || e === "pointerover", m = e === "mouseout" || e === "pointerout", d && r !== Ns && (y = r.relatedTarget || r.fromElement) && (gr(y) || y[Lt])) break e;
                        if ((m || d) && (d = g.window === g ? g : (d = g.ownerDocument) ? d.defaultView || d.parentWindow : window, m ? (y = r.relatedTarget || r.toElement, m = u, y = y ? gr(y) : null, y !== null && (E = Er(y), y !== E || y.tag !== 5 && y.tag !== 6) && (y = null)) : (m = null, y = u), m !== y)) {
                            if (w = rc, v = "onMouseLeave", p = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (w = oc, v = "onPointerLeave", p = "onPointerEnter", c = "pointer"), E = m == null ? d : Fr(m), h = y == null ? d : Fr(y), d = new w(v, c + "leave", m, r, g), d.target = E, d.relatedTarget = h, v = null, gr(g) === u && (w = new w(p, c + "enter", y, r, g), w.target = h, w.relatedTarget = E, v = w), E = v, m && y) t: {
                                for (w = m, p = y, c = 0, h = w; h; h = br(h)) c++;
                                for (h = 0, v = p; v; v = br(v)) h++;
                                for (; 0 < c - h;) w = br(w),
                                c--;
                                for (; 0 < h - c;) p = br(p),
                                h--;
                                for (; c--;) {
                                    if (w === p || p !== null && w === p.alternate) break t;
                                    w = br(w), p = br(p)
                                }
                                w = null
                            }
                            else w = null;
                            m !== null && hc(f, d, m, w, !1), y !== null && E !== null && hc(f, E, y, w, !0)
                        }
                    }
                    e: {
                        if (d = u ? Fr(u) : window, m = d.nodeName && d.nodeName.toLowerCase(), m === "select" || m === "input" && d.type === "file") var x = N3;
                        else if (sc(d))
                            if (If) x = G3;
                            else {
                                x = H3;
                                var C = b3
                            }
                        else(m = d.nodeName) && m.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (x = D3);
                        if (x && (x = x(e, u))) {
                            jf(f, x, r, g);
                            break e
                        }
                        C && C(e, d, u),
                        e === "focusout" && (C = d._wrapperState) && C.controlled && d.type === "number" && Vs(d, "number", d.value)
                    }
                    switch (C = u ? Fr(u) : window, e) {
                        case "focusin":
                            (sc(C) || C.contentEditable === "true") && (Br = C, Fs = u, Wn = null);
                            break;
                        case "focusout":
                            Wn = Fs = Br = null;
                            break;
                        case "mousedown":
                            Us = !0;
                            break;
                        case "contextmenu":
                        case "mouseup":
                        case "dragend":
                            Us = !1, fc(f, r, g);
                            break;
                        case "selectionchange":
                            if (F3) break;
                        case "keydown":
                        case "keyup":
                            fc(f, r, g)
                    }
                    var k;
                    if (Rl) e: {
                        switch (e) {
                            case "compositionstart":
                                var S = "onCompositionStart";
                                break e;
                            case "compositionend":
                                S = "onCompositionEnd";
                                break e;
                            case "compositionupdate":
                                S = "onCompositionUpdate";
                                break e
                        }
                        S = void 0
                    }
                    else Gr ? Rf(e, r) && (S = "onCompositionEnd") : e === "keydown" && r.keyCode === 229 && (S = "onCompositionStart");S && (Tf && r.locale !== "ko" && (Gr || S !== "onCompositionStart" ? S === "onCompositionEnd" && Gr && (k = Af()) : (Kt = g, Ll = "value" in Kt ? Kt.value : Kt.textContent, Gr = !0)), C = Vi(u, S), 0 < C.length && (S = new nc(S, e, null, r, g), f.push({
                        event: S,
                        listeners: C
                    }), k ? S.data = k : (k = Vf(r), k !== null && (S.data = k)))),
                    (k = V3 ? j3(e, r) : I3(e, r)) && (u = Vi(u, "onBeforeInput"), 0 < u.length && (g = new nc("onBeforeInput", "beforeinput", null, r, g), f.push({
                        event: g,
                        listeners: u
                    }), g.data = k))
                }
                Ff(f, t)
            })
        }

        function ao(e, t, r) {
            return {
                instance: e,
                listener: t,
                currentTarget: r
            }
        }

        function Vi(e, t) {
            for (var r = t + "Capture", n = []; e !== null;) {
                var o = e,
                    i = o.stateNode;
                o.tag === 5 && i !== null && (o = i, i = $n(e, r), i != null && n.unshift(ao(e, i, o)), i = $n(e, t), i != null && n.push(ao(e, i, o))), e = e.return
            }
            return n
        }

        function br(e) {
            if (e === null) return null;
            do e = e.return; while (e && e.tag !== 5);
            return e || null
        }

        function hc(e, t, r, n, o) {
            for (var i = t._reactName, a = []; r !== null && r !== n;) {
                var s = r,
                    l = s.alternate,
                    u = s.stateNode;
                if (l !== null && l === n) break;
                s.tag === 5 && u !== null && (s = u, o ? (l = $n(r, i), l != null && a.unshift(ao(r, l, s))) : o || (l = $n(r, i), l != null && a.push(ao(r, l, s)))), r = r.return
            }
            a.length !== 0 && e.push({
                event: t,
                listeners: a
            })
        }
        var Z3 = /\r\n?/g,
            W3 = /\u0000|\uFFFD/g;

        function vc(e) {
            return (typeof e == "string" ? e : "" + e).replace(Z3, `
`).replace(W3, "")
        }

        function li(e, t, r) {
            if (t = vc(t), vc(e) !== t && r) throw Error(P(425))
        }

        function ji() {}
        var Zs = null,
            Ws = null;

        function Ks(e, t) {
            return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
        }
        var Qs = typeof setTimeout == "function" ? setTimeout : void 0,
            K3 = typeof clearTimeout == "function" ? clearTimeout : void 0,
            yc = typeof Promise == "function" ? Promise : void 0,
            Q3 = typeof queueMicrotask == "function" ? queueMicrotask : typeof yc < "u" ? function(e) {
                return yc.resolve(null).then(e).catch(J3)
            } : Qs;

        function J3(e) {
            setTimeout(function() {
                throw e
            })
        }

        function gs(e, t) {
            var r = t,
                n = 0;
            do {
                var o = r.nextSibling;
                if (e.removeChild(r), o && o.nodeType === 8)
                    if (r = o.data, r === "/$") {
                        if (n === 0) {
                            e.removeChild(o), ro(t);
                            return
                        }
                        n--
                    } else r !== "$" && r !== "$?" && r !== "$!" || n++;
                r = o
            } while (r);
            ro(t)
        }

        function Xt(e) {
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

        function xc(e) {
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
        var fn = Math.random().toString(36).slice(2),
            mt = "__reactFiber$" + fn,
            so = "__reactProps$" + fn,
            Lt = "__reactContainer$" + fn,
            Js = "__reactEvents$" + fn,
            Y3 = "__reactListeners$" + fn,
            q3 = "__reactHandles$" + fn;

        function gr(e) {
            var t = e[mt];
            if (t) return t;
            for (var r = e.parentNode; r;) {
                if (t = r[Lt] || r[mt]) {
                    if (r = t.alternate, t.child !== null || r !== null && r.child !== null)
                        for (e = xc(e); e !== null;) {
                            if (r = e[mt]) return r;
                            e = xc(e)
                        }
                    return t
                }
                e = r, r = e.parentNode
            }
            return null
        }

        function vo(e) {
            return e = e[mt] || e[Lt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
        }

        function Fr(e) {
            if (e.tag === 5 || e.tag === 6) return e.stateNode;
            throw Error(P(33))
        }

        function Xi(e) {
            return e[so] || null
        }
        var Ys = [],
            Ur = -1;

        function ar(e) {
            return {
                current: e
            }
        }

        function D(e) {
            0 > Ur || (e.current = Ys[Ur], Ys[Ur] = null, Ur--)
        }

        function b(e, t) {
            Ur++, Ys[Ur] = e.current, e.current = t
        }
        var or = {},
            me = ar(or),
            Le = ar(!1),
            xr = or;

        function nn(e, t) {
            var r = e.type.contextTypes;
            if (!r) return or;
            var n = e.stateNode;
            if (n && n.__reactInternalMemoizedUnmaskedChildContext === t) return n.__reactInternalMemoizedMaskedChildContext;
            var o = {},
                i;
            for (i in r) o[i] = t[i];
            return n && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o
        }

        function Ae(e) {
            return e = e.childContextTypes, e != null
        }

        function Ii() {
            D(Le), D(me)
        }

        function wc(e, t, r) {
            if (me.current !== or) throw Error(P(168));
            b(me, t), b(Le, r)
        }

        function Zf(e, t, r) {
            var n = e.stateNode;
            if (t = t.childContextTypes, typeof n.getChildContext != "function") return r;
            n = n.getChildContext();
            for (var o in n)
                if (!(o in t)) throw Error(P(108, b2(e) || "Unknown", o));
            return U({}, r, n)
        }

        function Mi(e) {
            return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || or, xr = me.current, b(me, e), b(Le, Le.current), !0
        }

        function Cc(e, t, r) {
            var n = e.stateNode;
            if (!n) throw Error(P(169));
            r ? (e = Zf(e, t, xr), n.__reactInternalMemoizedMergedChildContext = e, D(Le), D(me), b(me, e)) : D(Le), b(Le, r)
        }
        var kt = null,
            $i = !1,
            ms = !1;

        function Wf(e) {
            kt === null ? kt = [e] : kt.push(e)
        }

        function X3(e) {
            $i = !0, Wf(e)
        }

        function sr() {
            if (!ms && kt !== null) {
                ms = !0;
                var e = 0,
                    t = _;
                try {
                    var r = kt;
                    for (_ = 1; e < r.length; e++) {
                        var n = r[e];
                        do n = n(!0); while (n !== null)
                    }
                    kt = null, $i = !1
                } catch (o) {
                    throw kt !== null && (kt = kt.slice(e + 1)), vf(Sl, sr), o
                } finally {
                    _ = t, ms = !1
                }
            }
            return null
        }
        var Zr = [],
            Wr = 0,
            _i = null,
            Ni = 0,
            ze = [],
            Fe = 0,
            wr = null,
            St = 1,
            Pt = "";

        function pr(e, t) {
            Zr[Wr++] = Ni, Zr[Wr++] = _i, _i = e, Ni = t
        }

        function Kf(e, t, r) {
            ze[Fe++] = St, ze[Fe++] = Pt, ze[Fe++] = wr, wr = e;
            var n = St;
            e = Pt;
            var o = 32 - nt(n) - 1;
            n &= ~(1 << o), r += 1;
            var i = 32 - nt(t) + o;
            if (30 < i) {
                var a = o - o % 5;
                i = (n & (1 << a) - 1).toString(32), n >>= a, o -= a, St = 1 << 32 - nt(t) + o | r << o | n, Pt = i + e
            } else St = 1 << i | r << o | n, Pt = e
        }

        function jl(e) {
            e.return !== null && (pr(e, 1), Kf(e, 1, 0))
        }

        function Il(e) {
            for (; e === _i;) _i = Zr[--Wr], Zr[Wr] = null, Ni = Zr[--Wr], Zr[Wr] = null;
            for (; e === wr;) wr = ze[--Fe], ze[Fe] = null, Pt = ze[--Fe], ze[Fe] = null, St = ze[--Fe], ze[Fe] = null
        }
        var Ie = null,
            je = null,
            B = !1,
            rt = null;

        function Qf(e, t) {
            var r = Ue(5, null, null, 0);
            r.elementType = "DELETED", r.stateNode = t, r.return = e, t = e.deletions, t === null ? (e.deletions = [r], e.flags |= 16) : t.push(r)
        }

        function kc(e, t) {
            switch (e.tag) {
                case 5:
                    var r = e.type;
                    return t = t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ie = e, je = Xt(t.firstChild), !0) : !1;
                case 6:
                    return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ie = e, je = null, !0) : !1;
                case 13:
                    return t = t.nodeType !== 8 ? null : t, t !== null ? (r = wr !== null ? {
                        id: St,
                        overflow: Pt
                    } : null, e.memoizedState = {
                        dehydrated: t,
                        treeContext: r,
                        retryLane: 1073741824
                    }, r = Ue(18, null, null, 0), r.stateNode = t, r.return = e, e.child = r, Ie = e, je = null, !0) : !1;
                default:
                    return !1
            }
        }

        function qs(e) {
            return (e.mode & 1) !== 0 && (e.flags & 128) === 0
        }

        function Xs(e) {
            if (B) {
                var t = je;
                if (t) {
                    var r = t;
                    if (!kc(e, t)) {
                        if (qs(e)) throw Error(P(418));
                        t = Xt(r.nextSibling);
                        var n = Ie;
                        t && kc(e, t) ? Qf(n, r) : (e.flags = e.flags & -4097 | 2, B = !1, Ie = e)
                    }
                } else {
                    if (qs(e)) throw Error(P(418));
                    e.flags = e.flags & -4097 | 2, B = !1, Ie = e
                }
            }
        }

        function Sc(e) {
            for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
            Ie = e
        }

        function ui(e) {
            if (e !== Ie) return !1;
            if (!B) return Sc(e), B = !0, !1;
            var t;
            if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Ks(e.type, e.memoizedProps)), t && (t = je)) {
                if (qs(e)) throw Jf(), Error(P(418));
                for (; t;) Qf(e, t), t = Xt(t.nextSibling)
            }
            if (Sc(e), e.tag === 13) {
                if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(P(317));
                e: {
                    for (e = e.nextSibling, t = 0; e;) {
                        if (e.nodeType === 8) {
                            var r = e.data;
                            if (r === "/$") {
                                if (t === 0) {
                                    je = Xt(e.nextSibling);
                                    break e
                                }
                                t--
                            } else r !== "$" && r !== "$!" && r !== "$?" || t++
                        }
                        e = e.nextSibling
                    }
                    je = null
                }
            } else je = Ie ? Xt(e.stateNode.nextSibling) : null;
            return !0
        }

        function Jf() {
            for (var e = je; e;) e = Xt(e.nextSibling)
        }

        function on() {
            je = Ie = null, B = !1
        }

        function Ml(e) {
            rt === null ? rt = [e] : rt.push(e)
        }
        var $3 = Rt.ReactCurrentBatchConfig;

        function et(e, t) {
            if (e && e.defaultProps) {
                t = U({}, t), e = e.defaultProps;
                for (var r in e) t[r] === void 0 && (t[r] = e[r]);
                return t
            }
            return t
        }
        var bi = ar(null),
            Hi = null,
            Kr = null,
            _l = null;

        function Nl() {
            _l = Kr = Hi = null
        }

        function bl(e) {
            var t = bi.current;
            D(bi), e._currentValue = t
        }

        function $s(e, t, r) {
            for (; e !== null;) {
                var n = e.alternate;
                if ((e.childLanes & t) !== t ? (e.childLanes |= t, n !== null && (n.childLanes |= t)) : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t), e === r) break;
                e = e.return
            }
        }

        function en(e, t) {
            Hi = e, _l = Kr = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Oe = !0), e.firstContext = null)
        }

        function We(e) {
            var t = e._currentValue;
            if (_l !== e)
                if (e = {
                        context: e,
                        memoizedValue: t,
                        next: null
                    }, Kr === null) {
                    if (Hi === null) throw Error(P(308));
                    Kr = e, Hi.dependencies = {
                        lanes: 0,
                        firstContext: e
                    }
                } else Kr = Kr.next = e;
            return t
        }
        var mr = null;

        function Hl(e) {
            mr === null ? mr = [e] : mr.push(e)
        }

        function Yf(e, t, r, n) {
            var o = t.interleaved;
            return o === null ? (r.next = r, Hl(t)) : (r.next = o.next, o.next = r), t.interleaved = r, At(e, n)
        }

        function At(e, t) {
            e.lanes |= t;
            var r = e.alternate;
            for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null;) e.childLanes |= t, r = e.alternate, r !== null && (r.childLanes |= t), r = e, e = e.return;
            return r.tag === 3 ? r.stateNode : null
        }
        var Ut = !1;

        function Dl(e) {
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

        function qf(e, t) {
            e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects
            })
        }

        function Et(e, t) {
            return {
                eventTime: e,
                lane: t,
                tag: 0,
                payload: null,
                callback: null,
                next: null
            }
        }

        function $t(e, t, r) {
            var n = e.updateQueue;
            if (n === null) return null;
            if (n = n.shared, I & 2) {
                var o = n.pending;
                return o === null ? t.next = t : (t.next = o.next, o.next = t), n.pending = t, At(e, r)
            }
            return o = n.interleaved, o === null ? (t.next = t, Hl(n)) : (t.next = o.next, o.next = t), n.interleaved = t, At(e, r)
        }

        function vi(e, t, r) {
            if (t = t.updateQueue, t !== null && (t = t.shared, (r & 4194240) !== 0)) {
                var n = t.lanes;
                n &= e.pendingLanes, r |= n, t.lanes = r, Pl(e, r)
            }
        }

        function Pc(e, t) {
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

        function Di(e, t, r, n) {
            var o = e.updateQueue;
            Ut = !1;
            var i = o.firstBaseUpdate,
                a = o.lastBaseUpdate,
                s = o.shared.pending;
            if (s !== null) {
                o.shared.pending = null;
                var l = s,
                    u = l.next;
                l.next = null, a === null ? i = u : a.next = u, a = l;
                var g = e.alternate;
                g !== null && (g = g.updateQueue, s = g.lastBaseUpdate, s !== a && (s === null ? g.firstBaseUpdate = u : s.next = u, g.lastBaseUpdate = l))
            }
            if (i !== null) {
                var f = o.baseState;
                a = 0, g = u = l = null, s = i;
                do {
                    var d = s.lane,
                        m = s.eventTime;
                    if ((n & d) === d) {
                        g !== null && (g = g.next = {
                            eventTime: m,
                            lane: 0,
                            tag: s.tag,
                            payload: s.payload,
                            callback: s.callback,
                            next: null
                        });
                        e: {
                            var y = e,
                                w = s;
                            switch (d = t, m = r, w.tag) {
                                case 1:
                                    if (y = w.payload, typeof y == "function") {
                                        f = y.call(m, f, d);
                                        break e
                                    }
                                    f = y;
                                    break e;
                                case 3:
                                    y.flags = y.flags & -65537 | 128;
                                case 0:
                                    if (y = w.payload, d = typeof y == "function" ? y.call(m, f, d) : y, d == null) break e;
                                    f = U({}, f, d);
                                    break e;
                                case 2:
                                    Ut = !0
                            }
                        }
                        s.callback !== null && s.lane !== 0 && (e.flags |= 64, d = o.effects, d === null ? o.effects = [s] : d.push(s))
                    } else m = {
                        eventTime: m,
                        lane: d,
                        tag: s.tag,
                        payload: s.payload,
                        callback: s.callback,
                        next: null
                    }, g === null ? (u = g = m, l = f) : g = g.next = m, a |= d;
                    if (s = s.next, s === null) {
                        if (s = o.shared.pending, s === null) break;
                        d = s, s = d.next, d.next = null, o.lastBaseUpdate = d, o.shared.pending = null
                    }
                } while (1);
                if (g === null && (l = f), o.baseState = l, o.firstBaseUpdate = u, o.lastBaseUpdate = g, t = o.shared.interleaved, t !== null) {
                    o = t;
                    do a |= o.lane, o = o.next; while (o !== t)
                } else i === null && (o.shared.lanes = 0);
                kr |= a, e.lanes = a, e.memoizedState = f
            }
        }

        function Ec(e, t, r) {
            if (e = t.effects, t.effects = null, e !== null)
                for (t = 0; t < e.length; t++) {
                    var n = e[t],
                        o = n.callback;
                    if (o !== null) {
                        if (n.callback = null, n = r, typeof o != "function") throw Error(P(191, o));
                        o.call(n)
                    }
                }
        }
        var Xf = new Jc.Component().refs;

        function el(e, t, r, n) {
            t = e.memoizedState, r = r(n, t), r = r == null ? t : U({}, t, r), e.memoizedState = r, e.lanes === 0 && (e.updateQueue.baseState = r)
        }
        var ea = {
            isMounted: function(e) {
                return (e = e._reactInternals) ? Er(e) === e : !1
            },
            enqueueSetState: function(e, t, r) {
                e = e._reactInternals;
                var n = xe(),
                    o = tr(e),
                    i = Et(n, o);
                i.payload = t, r != null && (i.callback = r), t = $t(e, i, o), t !== null && (ot(t, e, o, n), vi(t, e, o))
            },
            enqueueReplaceState: function(e, t, r) {
                e = e._reactInternals;
                var n = xe(),
                    o = tr(e),
                    i = Et(n, o);
                i.tag = 1, i.payload = t, r != null && (i.callback = r), t = $t(e, i, o), t !== null && (ot(t, e, o, n), vi(t, e, o))
            },
            enqueueForceUpdate: function(e, t) {
                e = e._reactInternals;
                var r = xe(),
                    n = tr(e),
                    o = Et(r, n);
                o.tag = 2, t != null && (o.callback = t), t = $t(e, o, n), t !== null && (ot(t, e, n, r), vi(t, e, n))
            }
        };

        function Oc(e, t, r, n, o, i, a) {
            return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(n, i, a) : t.prototype && t.prototype.isPureReactComponent ? !oo(r, n) || !oo(o, i) : !0
        }

        function $f(e, t, r) {
            var n = !1,
                o = or,
                i = t.contextType;
            return typeof i == "object" && i !== null ? i = We(i) : (o = Ae(t) ? xr : me.current, n = t.contextTypes, i = (n = n != null) ? nn(e, o) : or), t = new t(r, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ea, e.stateNode = t, t._reactInternals = e, n && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t
        }

        function Lc(e, t, r, n) {
            e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(r, n), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(r, n), t.state !== e && ea.enqueueReplaceState(t, t.state, null)
        }

        function tl(e, t, r, n) {
            var o = e.stateNode;
            o.props = r, o.state = e.memoizedState, o.refs = Xf, Dl(e);
            var i = t.contextType;
            typeof i == "object" && i !== null ? o.context = We(i) : (i = Ae(t) ? xr : me.current, o.context = nn(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (el(e, t, i, r), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && ea.enqueueReplaceState(o, o.state, null), Di(e, r, o, n), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308)
        }

        function Mn(e, t, r) {
            if (e = r.ref, e !== null && typeof e != "function" && typeof e != "object") {
                if (r._owner) {
                    if (r = r._owner, r) {
                        if (r.tag !== 1) throw Error(P(309));
                        var n = r.stateNode
                    }
                    if (!n) throw Error(P(147, e));
                    var o = n,
                        i = "" + e;
                    return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(a) {
                        var s = o.refs;
                        s === Xf && (s = o.refs = {}), a === null ? delete s[i] : s[i] = a
                    }, t._stringRef = i, t)
                }
                if (typeof e != "string") throw Error(P(284));
                if (!r._owner) throw Error(P(290, e))
            }
            return e
        }

        function ci(e, t) {
            throw e = Object.prototype.toString.call(t), Error(P(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
        }

        function Ac(e) {
            var t = e._init;
            return t(e._payload)
        }

        function e0(e) {
            function t(p, c) {
                if (e) {
                    var h = p.deletions;
                    h === null ? (p.deletions = [c], p.flags |= 16) : h.push(c)
                }
            }

            function r(p, c) {
                if (!e) return null;
                for (; c !== null;) t(p, c), c = c.sibling;
                return null
            }

            function n(p, c) {
                for (p = new Map; c !== null;) c.key !== null ? p.set(c.key, c) : p.set(c.index, c), c = c.sibling;
                return p
            }

            function o(p, c) {
                return p = rr(p, c), p.index = 0, p.sibling = null, p
            }

            function i(p, c, h) {
                return p.index = h, e ? (h = p.alternate, h !== null ? (h = h.index, h < c ? (p.flags |= 2, c) : h) : (p.flags |= 2, c)) : (p.flags |= 1048576, c)
            }

            function a(p) {
                return e && p.alternate === null && (p.flags |= 2), p
            }

            function s(p, c, h, v) {
                return c === null || c.tag !== 6 ? (c = ks(h, p.mode, v), c.return = p, c) : (c = o(c, h), c.return = p, c)
            }

            function l(p, c, h, v) {
                var x = h.type;
                return x === Dr ? g(p, c, h.props.children, v, h.key) : c !== null && (c.elementType === x || typeof x == "object" && x !== null && x.$$typeof === Ft && Ac(x) === c.type) ? (v = o(c, h.props), v.ref = Mn(p, c, h), v.return = p, v) : (v = Si(h.type, h.key, h.props, null, p.mode, v), v.ref = Mn(p, c, h), v.return = p, v)
            }

            function u(p, c, h, v) {
                return c === null || c.tag !== 4 || c.stateNode.containerInfo !== h.containerInfo || c.stateNode.implementation !== h.implementation ? (c = Ss(h, p.mode, v), c.return = p, c) : (c = o(c, h.children || []), c.return = p, c)
            }

            function g(p, c, h, v, x) {
                return c === null || c.tag !== 7 ? (c = yr(h, p.mode, v, x), c.return = p, c) : (c = o(c, h), c.return = p, c)
            }

            function f(p, c, h) {
                if (typeof c == "string" && c !== "" || typeof c == "number") return c = ks("" + c, p.mode, h), c.return = p, c;
                if (typeof c == "object" && c !== null) {
                    switch (c.$$typeof) {
                        case Jo:
                            return h = Si(c.type, c.key, c.props, null, p.mode, h), h.ref = Mn(p, null, c), h.return = p, h;
                        case Hr:
                            return c = Ss(c, p.mode, h), c.return = p, c;
                        case Ft:
                            var v = c._init;
                            return f(p, v(c._payload), h)
                    }
                    if (Dn(c) || Rn(c)) return c = yr(c, p.mode, h, null), c.return = p, c;
                    ci(p, c)
                }
                return null
            }

            function d(p, c, h, v) {
                var x = c !== null ? c.key : null;
                if (typeof h == "string" && h !== "" || typeof h == "number") return x !== null ? null : s(p, c, "" + h, v);
                if (typeof h == "object" && h !== null) {
                    switch (h.$$typeof) {
                        case Jo:
                            return h.key === x ? l(p, c, h, v) : null;
                        case Hr:
                            return h.key === x ? u(p, c, h, v) : null;
                        case Ft:
                            return x = h._init, d(p, c, x(h._payload), v)
                    }
                    if (Dn(h) || Rn(h)) return x !== null ? null : g(p, c, h, v, null);
                    ci(p, h)
                }
                return null
            }

            function m(p, c, h, v, x) {
                if (typeof v == "string" && v !== "" || typeof v == "number") return p = p.get(h) || null, s(c, p, "" + v, x);
                if (typeof v == "object" && v !== null) {
                    switch (v.$$typeof) {
                        case Jo:
                            return p = p.get(v.key === null ? h : v.key) || null, l(c, p, v, x);
                        case Hr:
                            return p = p.get(v.key === null ? h : v.key) || null, u(c, p, v, x);
                        case Ft:
                            var C = v._init;
                            return m(p, c, h, C(v._payload), x)
                    }
                    if (Dn(v) || Rn(v)) return p = p.get(h) || null, g(c, p, v, x, null);
                    ci(c, v)
                }
                return null
            }

            function y(p, c, h, v) {
                for (var x = null, C = null, k = c, S = c = 0, R = null; k !== null && S < h.length; S++) {
                    k.index > S ? (R = k, k = null) : R = k.sibling;
                    var L = d(p, k, h[S], v);
                    if (L === null) {
                        k === null && (k = R);
                        break
                    }
                    e && k && L.alternate === null && t(p, k), c = i(L, c, S), C === null ? x = L : C.sibling = L, C = L, k = R
                }
                if (S === h.length) return r(p, k), B && pr(p, S), x;
                if (k === null) {
                    for (; S < h.length; S++) k = f(p, h[S], v), k !== null && (c = i(k, c, S), C === null ? x = k : C.sibling = k, C = k);
                    return B && pr(p, S), x
                }
                for (k = n(p, k); S < h.length; S++) R = m(k, p, S, h[S], v), R !== null && (e && R.alternate !== null && k.delete(R.key === null ? S : R.key), c = i(R, c, S), C === null ? x = R : C.sibling = R, C = R);
                return e && k.forEach(function(V) {
                    return t(p, V)
                }), B && pr(p, S), x
            }

            function w(p, c, h, v) {
                var x = Rn(h);
                if (typeof x != "function") throw Error(P(150));
                if (h = x.call(h), h == null) throw Error(P(151));
                for (var C = x = null, k = c, S = c = 0, R = null, L = h.next(); k !== null && !L.done; S++, L = h.next()) {
                    k.index > S ? (R = k, k = null) : R = k.sibling;
                    var V = d(p, k, L.value, v);
                    if (V === null) {
                        k === null && (k = R);
                        break
                    }
                    e && k && V.alternate === null && t(p, k), c = i(V, c, S), C === null ? x = V : C.sibling = V, C = V, k = R
                }
                if (L.done) return r(p, k), B && pr(p, S), x;
                if (k === null) {
                    for (; !L.done; S++, L = h.next()) L = f(p, L.value, v), L !== null && (c = i(L, c, S), C === null ? x = L : C.sibling = L, C = L);
                    return B && pr(p, S), x
                }
                for (k = n(p, k); !L.done; S++, L = h.next()) L = m(k, p, S, L.value, v), L !== null && (e && L.alternate !== null && k.delete(L.key === null ? S : L.key), c = i(L, c, S), C === null ? x = L : C.sibling = L, C = L);
                return e && k.forEach(function(Y) {
                    return t(p, Y)
                }), B && pr(p, S), x
            }

            function E(p, c, h, v) {
                if (typeof h == "object" && h !== null && h.type === Dr && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) {
                    switch (h.$$typeof) {
                        case Jo:
                            e: {
                                for (var x = h.key, C = c; C !== null;) {
                                    if (C.key === x) {
                                        if (x = h.type, x === Dr) {
                                            if (C.tag === 7) {
                                                r(p, C.sibling), c = o(C, h.props.children), c.return = p, p = c;
                                                break e
                                            }
                                        } else if (C.elementType === x || typeof x == "object" && x !== null && x.$$typeof === Ft && Ac(x) === C.type) {
                                            r(p, C.sibling), c = o(C, h.props), c.ref = Mn(p, C, h), c.return = p, p = c;
                                            break e
                                        }
                                        r(p, C);
                                        break
                                    } else t(p, C);
                                    C = C.sibling
                                }
                                h.type === Dr ? (c = yr(h.props.children, p.mode, v, h.key), c.return = p, p = c) : (v = Si(h.type, h.key, h.props, null, p.mode, v), v.ref = Mn(p, c, h), v.return = p, p = v)
                            }
                            return a(p);
                        case Hr:
                            e: {
                                for (C = h.key; c !== null;) {
                                    if (c.key === C)
                                        if (c.tag === 4 && c.stateNode.containerInfo === h.containerInfo && c.stateNode.implementation === h.implementation) {
                                            r(p, c.sibling), c = o(c, h.children || []), c.return = p, p = c;
                                            break e
                                        } else {
                                            r(p, c);
                                            break
                                        }
                                    else t(p, c);
                                    c = c.sibling
                                }
                                c = Ss(h, p.mode, v),
                                c.return = p,
                                p = c
                            }
                            return a(p);
                        case Ft:
                            return C = h._init, E(p, c, C(h._payload), v)
                    }
                    if (Dn(h)) return y(p, c, h, v);
                    if (Rn(h)) return w(p, c, h, v);
                    ci(p, h)
                }
                return typeof h == "string" && h !== "" || typeof h == "number" ? (h = "" + h, c !== null && c.tag === 6 ? (r(p, c.sibling), c = o(c, h), c.return = p, p = c) : (r(p, c), c = ks(h, p.mode, v), c.return = p, p = c), a(p)) : r(p, c)
            }
            return E
        }
        var an = e0(!0),
            t0 = e0(!1),
            yo = {},
            vt = ar(yo),
            lo = ar(yo),
            uo = ar(yo);

        function hr(e) {
            if (e === yo) throw Error(P(174));
            return e
        }

        function Gl(e, t) {
            switch (b(uo, t), b(lo, e), b(vt, yo), e = t.nodeType, e) {
                case 9:
                case 11:
                    t = (t = t.documentElement) ? t.namespaceURI : Is(null, "");
                    break;
                default:
                    e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Is(t, e)
            }
            D(vt), b(vt, t)
        }

        function sn() {
            D(vt), D(lo), D(uo)
        }

        function r0(e) {
            hr(uo.current);
            var t = hr(vt.current),
                r = Is(t, e.type);
            t !== r && (b(lo, e), b(vt, r))
        }

        function Bl(e) {
            lo.current === e && (D(vt), D(lo))
        }
        var z = ar(0);

        function Gi(e) {
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
        var hs = [];

        function zl() {
            for (var e = 0; e < hs.length; e++) hs[e]._workInProgressVersionPrimary = null;
            hs.length = 0
        }
        var yi = Rt.ReactCurrentDispatcher,
            vs = Rt.ReactCurrentBatchConfig,
            Cr = 0,
            F = null,
            X = null,
            ee = null,
            Bi = !1,
            Kn = !1,
            co = 0,
            e5 = 0;

        function pe() {
            throw Error(P(321))
        }

        function Fl(e, t) {
            if (t === null) return !1;
            for (var r = 0; r < t.length && r < e.length; r++)
                if (!it(e[r], t[r])) return !1;
            return !0
        }

        function Ul(e, t, r, n, o, i) {
            if (Cr = i, F = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, yi.current = e === null || e.memoizedState === null ? o5 : i5, e = r(n, o), Kn) {
                i = 0;
                do {
                    if (Kn = !1, co = 0, 25 <= i) throw Error(P(301));
                    i += 1, ee = X = null, t.updateQueue = null, yi.current = a5, e = r(n, o)
                } while (Kn)
            }
            if (yi.current = zi, t = X !== null && X.next !== null, Cr = 0, ee = X = F = null, Bi = !1, t) throw Error(P(300));
            return e
        }

        function Zl() {
            var e = co !== 0;
            return co = 0, e
        }

        function gt() {
            var e = {
                memoizedState: null,
                baseState: null,
                baseQueue: null,
                queue: null,
                next: null
            };
            return ee === null ? F.memoizedState = ee = e : ee = ee.next = e, ee
        }

        function Ke() {
            if (X === null) {
                var e = F.alternate;
                e = e !== null ? e.memoizedState : null
            } else e = X.next;
            var t = ee === null ? F.memoizedState : ee.next;
            if (t !== null) ee = t, X = e;
            else {
                if (e === null) throw Error(P(310));
                X = e, e = {
                    memoizedState: X.memoizedState,
                    baseState: X.baseState,
                    baseQueue: X.baseQueue,
                    queue: X.queue,
                    next: null
                }, ee === null ? F.memoizedState = ee = e : ee = ee.next = e
            }
            return ee
        }

        function fo(e, t) {
            return typeof t == "function" ? t(e) : t
        }

        function ys(e) {
            var t = Ke(),
                r = t.queue;
            if (r === null) throw Error(P(311));
            r.lastRenderedReducer = e;
            var n = X,
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
                    var g = u.lane;
                    if ((Cr & g) === g) l !== null && (l = l.next = {
                        lane: 0,
                        action: u.action,
                        hasEagerState: u.hasEagerState,
                        eagerState: u.eagerState,
                        next: null
                    }), n = u.hasEagerState ? u.eagerState : e(n, u.action);
                    else {
                        var f = {
                            lane: g,
                            action: u.action,
                            hasEagerState: u.hasEagerState,
                            eagerState: u.eagerState,
                            next: null
                        };
                        l === null ? (s = l = f, a = n) : l = l.next = f, F.lanes |= g, kr |= g
                    }
                    u = u.next
                } while (u !== null && u !== i);
                l === null ? a = n : l.next = s, it(n, t.memoizedState) || (Oe = !0), t.memoizedState = n, t.baseState = a, t.baseQueue = l, r.lastRenderedState = n
            }
            if (e = r.interleaved, e !== null) {
                o = e;
                do i = o.lane, F.lanes |= i, kr |= i, o = o.next; while (o !== e)
            } else o === null && (r.lanes = 0);
            return [t.memoizedState, r.dispatch]
        }

        function xs(e) {
            var t = Ke(),
                r = t.queue;
            if (r === null) throw Error(P(311));
            r.lastRenderedReducer = e;
            var n = r.dispatch,
                o = r.pending,
                i = t.memoizedState;
            if (o !== null) {
                r.pending = null;
                var a = o = o.next;
                do i = e(i, a.action), a = a.next; while (a !== o);
                it(i, t.memoizedState) || (Oe = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), r.lastRenderedState = i
            }
            return [i, n]
        }

        function n0() {}

        function o0(e, t) {
            var r = F,
                n = Ke(),
                o = t(),
                i = !it(n.memoizedState, o);
            if (i && (n.memoizedState = o, Oe = !0), n = n.queue, Wl(s0.bind(null, r, n, e), [e]), n.getSnapshot !== t || i || ee !== null && ee.memoizedState.tag & 1) {
                if (r.flags |= 2048, po(9, a0.bind(null, r, n, o, t), void 0, null), te === null) throw Error(P(349));
                Cr & 30 || i0(r, t, o)
            }
            return o
        }

        function i0(e, t, r) {
            e.flags |= 16384, e = {
                getSnapshot: t,
                value: r
            }, t = F.updateQueue, t === null ? (t = {
                lastEffect: null,
                stores: null
            }, F.updateQueue = t, t.stores = [e]) : (r = t.stores, r === null ? t.stores = [e] : r.push(e))
        }

        function a0(e, t, r, n) {
            t.value = r, t.getSnapshot = n, l0(t) && u0(e)
        }

        function s0(e, t, r) {
            return r(function() {
                l0(t) && u0(e)
            })
        }

        function l0(e) {
            var t = e.getSnapshot;
            e = e.value;
            try {
                var r = t();
                return !it(e, r)
            } catch {
                return !0
            }
        }

        function u0(e) {
            var t = At(e, 1);
            t !== null && ot(t, e, 1, -1)
        }

        function Tc(e) {
            var t = gt();
            return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: fo,
                lastRenderedState: e
            }, t.queue = e, e = e.dispatch = n5.bind(null, F, e), [t.memoizedState, e]
        }

        function po(e, t, r, n) {
            return e = {
                tag: e,
                create: t,
                destroy: r,
                deps: n,
                next: null
            }, t = F.updateQueue, t === null ? (t = {
                lastEffect: null,
                stores: null
            }, F.updateQueue = t, t.lastEffect = e.next = e) : (r = t.lastEffect, r === null ? t.lastEffect = e.next = e : (n = r.next, r.next = e, e.next = n, t.lastEffect = e)), e
        }

        function c0() {
            return Ke().memoizedState
        }

        function xi(e, t, r, n) {
            var o = gt();
            F.flags |= e, o.memoizedState = po(1 | t, r, void 0, n === void 0 ? null : n)
        }

        function ta(e, t, r, n) {
            var o = Ke();
            n = n === void 0 ? null : n;
            var i = void 0;
            if (X !== null) {
                var a = X.memoizedState;
                if (i = a.destroy, n !== null && Fl(n, a.deps)) {
                    o.memoizedState = po(t, r, i, n);
                    return
                }
            }
            F.flags |= e, o.memoizedState = po(1 | t, r, i, n)
        }

        function Rc(e, t) {
            return xi(8390656, 8, e, t)
        }

        function Wl(e, t) {
            return ta(2048, 8, e, t)
        }

        function f0(e, t) {
            return ta(4, 2, e, t)
        }

        function p0(e, t) {
            return ta(4, 4, e, t)
        }

        function d0(e, t) {
            if (typeof t == "function") return e = e(), t(e),
                function() {
                    t(null)
                };
            if (t != null) return e = e(), t.current = e,
                function() {
                    t.current = null
                }
        }

        function g0(e, t, r) {
            return r = r != null ? r.concat([e]) : null, ta(4, 4, d0.bind(null, t, e), r)
        }

        function Kl() {}

        function m0(e, t) {
            var r = Ke();
            t = t === void 0 ? null : t;
            var n = r.memoizedState;
            return n !== null && t !== null && Fl(t, n[1]) ? n[0] : (r.memoizedState = [e, t], e)
        }

        function h0(e, t) {
            var r = Ke();
            t = t === void 0 ? null : t;
            var n = r.memoizedState;
            return n !== null && t !== null && Fl(t, n[1]) ? n[0] : (e = e(), r.memoizedState = [e, t], e)
        }

        function v0(e, t, r) {
            return Cr & 21 ? (it(r, t) || (r = wf(), F.lanes |= r, kr |= r, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Oe = !0), e.memoizedState = r)
        }

        function t5(e, t) {
            var r = _;
            _ = r !== 0 && 4 > r ? r : 4, e(!0);
            var n = vs.transition;
            vs.transition = {};
            try {
                e(!1), t()
            } finally {
                _ = r, vs.transition = n
            }
        }

        function y0() {
            return Ke().memoizedState
        }

        function r5(e, t, r) {
            var n = tr(e);
            if (r = {
                    lane: n,
                    action: r,
                    hasEagerState: !1,
                    eagerState: null,
                    next: null
                }, x0(e)) w0(t, r);
            else if (r = Yf(e, t, r, n), r !== null) {
                var o = xe();
                ot(r, e, n, o), C0(r, t, n)
            }
        }

        function n5(e, t, r) {
            var n = tr(e),
                o = {
                    lane: n,
                    action: r,
                    hasEagerState: !1,
                    eagerState: null,
                    next: null
                };
            if (x0(e)) w0(t, o);
            else {
                var i = e.alternate;
                if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
                    var a = t.lastRenderedState,
                        s = i(a, r);
                    if (o.hasEagerState = !0, o.eagerState = s, it(s, a)) {
                        var l = t.interleaved;
                        l === null ? (o.next = o, Hl(t)) : (o.next = l.next, l.next = o), t.interleaved = o;
                        return
                    }
                } catch {} finally {}
                r = Yf(e, t, o, n), r !== null && (o = xe(), ot(r, e, n, o), C0(r, t, n))
            }
        }

        function x0(e) {
            var t = e.alternate;
            return e === F || t !== null && t === F
        }

        function w0(e, t) {
            Kn = Bi = !0;
            var r = e.pending;
            r === null ? t.next = t : (t.next = r.next, r.next = t), e.pending = t
        }

        function C0(e, t, r) {
            if (r & 4194240) {
                var n = t.lanes;
                n &= e.pendingLanes, r |= n, t.lanes = r, Pl(e, r)
            }
        }
        var zi = {
                readContext: We,
                useCallback: pe,
                useContext: pe,
                useEffect: pe,
                useImperativeHandle: pe,
                useInsertionEffect: pe,
                useLayoutEffect: pe,
                useMemo: pe,
                useReducer: pe,
                useRef: pe,
                useState: pe,
                useDebugValue: pe,
                useDeferredValue: pe,
                useTransition: pe,
                useMutableSource: pe,
                useSyncExternalStore: pe,
                useId: pe,
                unstable_isNewReconciler: !1
            },
            o5 = {
                readContext: We,
                useCallback: function(e, t) {
                    return gt().memoizedState = [e, t === void 0 ? null : t], e
                },
                useContext: We,
                useEffect: Rc,
                useImperativeHandle: function(e, t, r) {
                    return r = r != null ? r.concat([e]) : null, xi(4194308, 4, d0.bind(null, t, e), r)
                },
                useLayoutEffect: function(e, t) {
                    return xi(4194308, 4, e, t)
                },
                useInsertionEffect: function(e, t) {
                    return xi(4, 2, e, t)
                },
                useMemo: function(e, t) {
                    var r = gt();
                    return t = t === void 0 ? null : t, e = e(), r.memoizedState = [e, t], e
                },
                useReducer: function(e, t, r) {
                    var n = gt();
                    return t = r !== void 0 ? r(t) : t, n.memoizedState = n.baseState = t, e = {
                        pending: null,
                        interleaved: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: e,
                        lastRenderedState: t
                    }, n.queue = e, e = e.dispatch = r5.bind(null, F, e), [n.memoizedState, e]
                },
                useRef: function(e) {
                    var t = gt();
                    return e = {
                        current: e
                    }, t.memoizedState = e
                },
                useState: Tc,
                useDebugValue: Kl,
                useDeferredValue: function(e) {
                    return gt().memoizedState = e
                },
                useTransition: function() {
                    var e = Tc(!1),
                        t = e[0];
                    return e = t5.bind(null, e[1]), gt().memoizedState = e, [t, e]
                },
                useMutableSource: function() {},
                useSyncExternalStore: function(e, t, r) {
                    var n = F,
                        o = gt();
                    if (B) {
                        if (r === void 0) throw Error(P(407));
                        r = r()
                    } else {
                        if (r = t(), te === null) throw Error(P(349));
                        Cr & 30 || i0(n, t, r)
                    }
                    o.memoizedState = r;
                    var i = {
                        value: r,
                        getSnapshot: t
                    };
                    return o.queue = i, Rc(s0.bind(null, n, i, e), [e]), n.flags |= 2048, po(9, a0.bind(null, n, i, r, t), void 0, null), r
                },
                useId: function() {
                    var e = gt(),
                        t = te.identifierPrefix;
                    if (B) {
                        var r = Pt,
                            n = St;
                        r = (n & ~(1 << 32 - nt(n) - 1)).toString(32) + r, t = ":" + t + "R" + r, r = co++, 0 < r && (t += "H" + r.toString(32)), t += ":"
                    } else r = e5++, t = ":" + t + "r" + r.toString(32) + ":";
                    return e.memoizedState = t
                },
                unstable_isNewReconciler: !1
            },
            i5 = {
                readContext: We,
                useCallback: m0,
                useContext: We,
                useEffect: Wl,
                useImperativeHandle: g0,
                useInsertionEffect: f0,
                useLayoutEffect: p0,
                useMemo: h0,
                useReducer: ys,
                useRef: c0,
                useState: function() {
                    return ys(fo)
                },
                useDebugValue: Kl,
                useDeferredValue: function(e) {
                    var t = Ke();
                    return v0(t, X.memoizedState, e)
                },
                useTransition: function() {
                    var e = ys(fo)[0],
                        t = Ke().memoizedState;
                    return [e, t]
                },
                useMutableSource: n0,
                useSyncExternalStore: o0,
                useId: y0,
                unstable_isNewReconciler: !1
            },
            a5 = {
                readContext: We,
                useCallback: m0,
                useContext: We,
                useEffect: Wl,
                useImperativeHandle: g0,
                useInsertionEffect: f0,
                useLayoutEffect: p0,
                useMemo: h0,
                useReducer: xs,
                useRef: c0,
                useState: function() {
                    return xs(fo)
                },
                useDebugValue: Kl,
                useDeferredValue: function(e) {
                    var t = Ke();
                    return X === null ? t.memoizedState = e : v0(t, X.memoizedState, e)
                },
                useTransition: function() {
                    var e = xs(fo)[0],
                        t = Ke().memoizedState;
                    return [e, t]
                },
                useMutableSource: n0,
                useSyncExternalStore: o0,
                useId: y0,
                unstable_isNewReconciler: !1
            };

        function ln(e, t) {
            try {
                var r = "",
                    n = t;
                do r += N2(n), n = n.return; while (n);
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

        function ws(e, t, r) {
            return {
                value: e,
                source: null,
                stack: r ?? null,
                digest: t ?? null
            }
        }

        function rl(e, t) {
            try {} catch (r) {
                setTimeout(function() {
                    throw r
                })
            }
        }
        var s5 = typeof WeakMap == "function" ? WeakMap : Map;

        function k0(e, t, r) {
            r = Et(-1, r), r.tag = 3, r.payload = {
                element: null
            };
            var n = t.value;
            return r.callback = function() {
                Ui || (Ui = !0, pl = n), rl(e, t)
            }, r
        }

        function S0(e, t, r) {
            r = Et(-1, r), r.tag = 3;
            var n = e.type.getDerivedStateFromError;
            if (typeof n == "function") {
                var o = t.value;
                r.payload = function() {
                    return n(o)
                }, r.callback = function() {
                    rl(e, t)
                }
            }
            var i = e.stateNode;
            return i !== null && typeof i.componentDidCatch == "function" && (r.callback = function() {
                rl(e, t), typeof n != "function" && (er === null ? er = new Set([this]) : er.add(this));
                var a = t.stack;
                this.componentDidCatch(t.value, {
                    componentStack: a !== null ? a : ""
                })
            }), r
        }

        function Vc(e, t, r) {
            var n = e.pingCache;
            if (n === null) {
                n = e.pingCache = new s5;
                var o = new Set;
                n.set(t, o)
            } else o = n.get(t), o === void 0 && (o = new Set, n.set(t, o));
            o.has(r) || (o.add(r), e = C5.bind(null, e, t, r), t.then(e, e))
        }

        function jc(e) {
            do {
                var t;
                if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
                e = e.return
            } while (e !== null);
            return null
        }

        function Ic(e, t, r, n, o) {
            return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, r.flags |= 131072, r.flags &= -52805, r.tag === 1 && (r.alternate === null ? r.tag = 17 : (t = Et(-1, 1), t.tag = 2, $t(r, t, 1))), r.lanes |= 1), e)
        }
        var l5 = Rt.ReactCurrentOwner,
            Oe = !1;

        function ye(e, t, r, n) {
            t.child = e === null ? t0(t, null, r, n) : an(t, e.child, r, n)
        }

        function Mc(e, t, r, n, o) {
            r = r.render;
            var i = t.ref;
            return en(t, o), n = Ul(e, t, r, n, i, o), r = Zl(), e !== null && !Oe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Tt(e, t, o)) : (B && r && jl(t), t.flags |= 1, ye(e, t, n, o), t.child)
        }

        function _c(e, t, r, n, o) {
            if (e === null) {
                var i = r.type;
                return typeof i == "function" && !t1(i) && i.defaultProps === void 0 && r.compare === null && r.defaultProps === void 0 ? (t.tag = 15, t.type = i, P0(e, t, i, n, o)) : (e = Si(r.type, null, n, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e)
            }
            if (i = e.child, !(e.lanes & o)) {
                var a = i.memoizedProps;
                if (r = r.compare, r = r !== null ? r : oo, r(a, n) && e.ref === t.ref) return Tt(e, t, o)
            }
            return t.flags |= 1, e = rr(i, n), e.ref = t.ref, e.return = t, t.child = e
        }

        function P0(e, t, r, n, o) {
            if (e !== null) {
                var i = e.memoizedProps;
                if (oo(i, n) && e.ref === t.ref)
                    if (Oe = !1, t.pendingProps = n = i, (e.lanes & o) !== 0) e.flags & 131072 && (Oe = !0);
                    else return t.lanes = e.lanes, Tt(e, t, o)
            }
            return nl(e, t, r, n, o)
        }

        function E0(e, t, r) {
            var n = t.pendingProps,
                o = n.children,
                i = e !== null ? e.memoizedState : null;
            if (n.mode === "hidden")
                if (!(t.mode & 1)) t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                }, b(Jr, Ve), Ve |= r;
                else {
                    if (!(r & 1073741824)) return e = i !== null ? i.baseLanes | r : r, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                        baseLanes: e,
                        cachePool: null,
                        transitions: null
                    }, t.updateQueue = null, b(Jr, Ve), Ve |= e, null;
                    t.memoizedState = {
                        baseLanes: 0,
                        cachePool: null,
                        transitions: null
                    }, n = i !== null ? i.baseLanes : r, b(Jr, Ve), Ve |= n
                }
            else i !== null ? (n = i.baseLanes | r, t.memoizedState = null) : n = r, b(Jr, Ve), Ve |= n;
            return ye(e, t, o, r), t.child
        }

        function O0(e, t) {
            var r = t.ref;
            (e === null && r !== null || e !== null && e.ref !== r) && (t.flags |= 512, t.flags |= 2097152)
        }

        function nl(e, t, r, n, o) {
            var i = Ae(r) ? xr : me.current;
            return i = nn(t, i), en(t, o), r = Ul(e, t, r, n, i, o), n = Zl(), e !== null && !Oe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Tt(e, t, o)) : (B && n && jl(t), t.flags |= 1, ye(e, t, r, o), t.child)
        }

        function Nc(e, t, r, n, o) {
            if (Ae(r)) {
                var i = !0;
                Mi(t)
            } else i = !1;
            if (en(t, o), t.stateNode === null) wi(e, t), $f(t, r, n), tl(t, r, n, o), n = !0;
            else if (e === null) {
                var a = t.stateNode,
                    s = t.memoizedProps;
                a.props = s;
                var l = a.context,
                    u = r.contextType;
                typeof u == "object" && u !== null ? u = We(u) : (u = Ae(r) ? xr : me.current, u = nn(t, u));
                var g = r.getDerivedStateFromProps,
                    f = typeof g == "function" || typeof a.getSnapshotBeforeUpdate == "function";
                f || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s !== n || l !== u) && Lc(t, a, n, u), Ut = !1;
                var d = t.memoizedState;
                a.state = d, Di(t, n, a, o), l = t.memoizedState, s !== n || d !== l || Le.current || Ut ? (typeof g == "function" && (el(t, r, g, n), l = t.memoizedState), (s = Ut || Oc(t, r, s, n, d, l, u)) ? (f || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = n, t.memoizedState = l), a.props = n, a.state = l, a.context = u, n = s) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), n = !1)
            } else {
                a = t.stateNode, qf(e, t), s = t.memoizedProps, u = t.type === t.elementType ? s : et(t.type, s), a.props = u, f = t.pendingProps, d = a.context, l = r.contextType, typeof l == "object" && l !== null ? l = We(l) : (l = Ae(r) ? xr : me.current, l = nn(t, l));
                var m = r.getDerivedStateFromProps;
                (g = typeof m == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s !== f || d !== l) && Lc(t, a, n, l), Ut = !1, d = t.memoizedState, a.state = d, Di(t, n, a, o);
                var y = t.memoizedState;
                s !== f || d !== y || Le.current || Ut ? (typeof m == "function" && (el(t, r, m, n), y = t.memoizedState), (u = Ut || Oc(t, r, u, n, d, y, l) || !1) ? (g || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(n, y, l), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(n, y, l)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || s === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), t.memoizedProps = n, t.memoizedState = y), a.props = n, a.state = y, a.context = l, n = u) : (typeof a.componentDidUpdate != "function" || s === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), n = !1)
            }
            return ol(e, t, r, n, i, o)
        }

        function ol(e, t, r, n, o, i) {
            O0(e, t);
            var a = (t.flags & 128) !== 0;
            if (!n && !a) return o && Cc(t, r, !1), Tt(e, t, i);
            n = t.stateNode, l5.current = t;
            var s = a && typeof r.getDerivedStateFromError != "function" ? null : n.render();
            return t.flags |= 1, e !== null && a ? (t.child = an(t, e.child, null, i), t.child = an(t, null, s, i)) : ye(e, t, s, i), t.memoizedState = n.state, o && Cc(t, r, !0), t.child
        }

        function L0(e) {
            var t = e.stateNode;
            t.pendingContext ? wc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && wc(e, t.context, !1), Gl(e, t.containerInfo)
        }

        function bc(e, t, r, n, o) {
            return on(), Ml(o), t.flags |= 256, ye(e, t, r, n), t.child
        }
        var il = {
            dehydrated: null,
            treeContext: null,
            retryLane: 0
        };

        function al(e) {
            return {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }
        }

        function A0(e, t, r) {
            var n = t.pendingProps,
                o = z.current,
                i = !1,
                a = (t.flags & 128) !== 0,
                s;
            if ((s = a) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), s ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), b(z, o & 1), e === null) return Xs(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (a = n.children, e = n.fallback, i ? (n = t.mode, i = t.child, a = {
                mode: "hidden",
                children: a
            }, !(n & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = a) : i = oa(a, n, 0, null), e = yr(e, n, r, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = al(r), t.memoizedState = il, e) : Ql(t, a));
            if (o = e.memoizedState, o !== null && (s = o.dehydrated, s !== null)) return u5(e, t, a, n, s, o, r);
            if (i) {
                i = n.fallback, a = t.mode, o = e.child, s = o.sibling;
                var l = {
                    mode: "hidden",
                    children: n.children
                };
                return !(a & 1) && t.child !== o ? (n = t.child, n.childLanes = 0, n.pendingProps = l, t.deletions = null) : (n = rr(o, l), n.subtreeFlags = o.subtreeFlags & 14680064), s !== null ? i = rr(s, i) : (i = yr(i, a, r, null), i.flags |= 2), i.return = t, n.return = t, n.sibling = i, t.child = n, n = i, i = t.child, a = e.child.memoizedState, a = a === null ? al(r) : {
                    baseLanes: a.baseLanes | r,
                    cachePool: null,
                    transitions: a.transitions
                }, i.memoizedState = a, i.childLanes = e.childLanes & ~r, t.memoizedState = il, n
            }
            return i = e.child, e = i.sibling, n = rr(i, {
                mode: "visible",
                children: n.children
            }), !(t.mode & 1) && (n.lanes = r), n.return = t, n.sibling = null, e !== null && (r = t.deletions, r === null ? (t.deletions = [e], t.flags |= 16) : r.push(e)), t.child = n, t.memoizedState = null, n
        }

        function Ql(e, t) {
            return t = oa({
                mode: "visible",
                children: t
            }, e.mode, 0, null), t.return = e, e.child = t
        }

        function fi(e, t, r, n) {
            return n !== null && Ml(n), an(t, e.child, null, r), e = Ql(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
        }

        function u5(e, t, r, n, o, i, a) {
            if (r) return t.flags & 256 ? (t.flags &= -257, n = ws(Error(P(422))), fi(e, t, a, n)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = n.fallback, o = t.mode, n = oa({
                mode: "visible",
                children: n.children
            }, o, 0, null), i = yr(i, o, a, null), i.flags |= 2, n.return = t, i.return = t, n.sibling = i, t.child = n, t.mode & 1 && an(t, e.child, null, a), t.child.memoizedState = al(a), t.memoizedState = il, i);
            if (!(t.mode & 1)) return fi(e, t, a, null);
            if (o.data === "$!") {
                if (n = o.nextSibling && o.nextSibling.dataset, n) var s = n.dgst;
                return n = s, i = Error(P(419)), n = ws(i, n, void 0), fi(e, t, a, n)
            }
            if (s = (a & e.childLanes) !== 0, Oe || s) {
                if (n = te, n !== null) {
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
                    o = o & (n.suspendedLanes | a) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, At(e, o), ot(n, e, o, -1))
                }
                return e1(), n = ws(Error(P(421))), fi(e, t, a, n)
            }
            return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = k5.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, je = Xt(o.nextSibling), Ie = t, B = !0, rt = null, e !== null && (ze[Fe++] = St, ze[Fe++] = Pt, ze[Fe++] = wr, St = e.id, Pt = e.overflow, wr = t), t = Ql(t, n.children), t.flags |= 4096, t)
        }

        function Hc(e, t, r) {
            e.lanes |= t;
            var n = e.alternate;
            n !== null && (n.lanes |= t), $s(e.return, t, r)
        }

        function Cs(e, t, r, n, o) {
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

        function T0(e, t, r) {
            var n = t.pendingProps,
                o = n.revealOrder,
                i = n.tail;
            if (ye(e, t, n.children, r), n = z.current, n & 2) n = n & 1 | 2, t.flags |= 128;
            else {
                if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
                    if (e.tag === 13) e.memoizedState !== null && Hc(e, r, t);
                    else if (e.tag === 19) Hc(e, r, t);
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
            if (b(z, n), !(t.mode & 1)) t.memoizedState = null;
            else switch (o) {
                case "forwards":
                    for (r = t.child, o = null; r !== null;) e = r.alternate, e !== null && Gi(e) === null && (o = r), r = r.sibling;
                    r = o, r === null ? (o = t.child, t.child = null) : (o = r.sibling, r.sibling = null), Cs(t, !1, o, r, i);
                    break;
                case "backwards":
                    for (r = null, o = t.child, t.child = null; o !== null;) {
                        if (e = o.alternate, e !== null && Gi(e) === null) {
                            t.child = o;
                            break
                        }
                        e = o.sibling, o.sibling = r, r = o, o = e
                    }
                    Cs(t, !0, r, null, i);
                    break;
                case "together":
                    Cs(t, !1, null, null, void 0);
                    break;
                default:
                    t.memoizedState = null
            }
            return t.child
        }

        function wi(e, t) {
            !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
        }

        function Tt(e, t, r) {
            if (e !== null && (t.dependencies = e.dependencies), kr |= t.lanes, !(r & t.childLanes)) return null;
            if (e !== null && t.child !== e.child) throw Error(P(153));
            if (t.child !== null) {
                for (e = t.child, r = rr(e, e.pendingProps), t.child = r, r.return = t; e.sibling !== null;) e = e.sibling, r = r.sibling = rr(e, e.pendingProps), r.return = t;
                r.sibling = null
            }
            return t.child
        }

        function c5(e, t, r) {
            switch (t.tag) {
                case 3:
                    L0(t), on();
                    break;
                case 5:
                    r0(t);
                    break;
                case 1:
                    Ae(t.type) && Mi(t);
                    break;
                case 4:
                    Gl(t, t.stateNode.containerInfo);
                    break;
                case 10:
                    var n = t.type._context,
                        o = t.memoizedProps.value;
                    b(bi, n._currentValue), n._currentValue = o;
                    break;
                case 13:
                    if (n = t.memoizedState, n !== null) return n.dehydrated !== null ? (b(z, z.current & 1), t.flags |= 128, null) : r & t.child.childLanes ? A0(e, t, r) : (b(z, z.current & 1), e = Tt(e, t, r), e !== null ? e.sibling : null);
                    b(z, z.current & 1);
                    break;
                case 19:
                    if (n = (r & t.childLanes) !== 0, e.flags & 128) {
                        if (n) return T0(e, t, r);
                        t.flags |= 128
                    }
                    if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), b(z, z.current), n) break;
                    return null;
                case 22:
                case 23:
                    return t.lanes = 0, E0(e, t, r)
            }
            return Tt(e, t, r)
        }
        var R0, sl, V0, j0;
        R0 = function(e, t) {
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
        sl = function() {};
        V0 = function(e, t, r, n) {
            var o = e.memoizedProps;
            if (o !== n) {
                e = t.stateNode, hr(vt.current);
                var i = null;
                switch (r) {
                    case "input":
                        o = Ts(e, o), n = Ts(e, n), i = [];
                        break;
                    case "select":
                        o = U({}, o, {
                            value: void 0
                        }), n = U({}, n, {
                            value: void 0
                        }), i = [];
                        break;
                    case "textarea":
                        o = js(e, o), n = js(e, n), i = [];
                        break;
                    default:
                        typeof o.onClick != "function" && typeof n.onClick == "function" && (e.onclick = ji)
                }
                Ms(r, n);
                var a;
                r = null;
                for (u in o)
                    if (!n.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
                        if (u === "style") {
                            var s = o[u];
                            for (a in s) s.hasOwnProperty(a) && (r || (r = {}), r[a] = "")
                        } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (qn.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
                for (u in n) {
                    var l = n[u];
                    if (s = o?.[u], n.hasOwnProperty(u) && l !== s && (l != null || s != null))
                        if (u === "style")
                            if (s) {
                                for (a in s) !s.hasOwnProperty(a) || l && l.hasOwnProperty(a) || (r || (r = {}), r[a] = "");
                                for (a in l) l.hasOwnProperty(a) && s[a] !== l[a] && (r || (r = {}), r[a] = l[a])
                            } else r || (i || (i = []), i.push(u, r)), r = l;
                    else u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, s = s ? s.__html : void 0, l != null && s !== l && (i = i || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (i = i || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (qn.hasOwnProperty(u) ? (l != null && u === "onScroll" && H("scroll", e), i || s === l || (i = [])) : (i = i || []).push(u, l))
                }
                r && (i = i || []).push("style", r);
                var u = i;
                (t.updateQueue = u) && (t.flags |= 4)
            }
        };
        j0 = function(e, t, r, n) {
            r !== n && (t.flags |= 4)
        };

        function _n(e, t) {
            if (!B) switch (e.tailMode) {
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

        function de(e) {
            var t = e.alternate !== null && e.alternate.child === e.child,
                r = 0,
                n = 0;
            if (t)
                for (var o = e.child; o !== null;) r |= o.lanes | o.childLanes, n |= o.subtreeFlags & 14680064, n |= o.flags & 14680064, o.return = e, o = o.sibling;
            else
                for (o = e.child; o !== null;) r |= o.lanes | o.childLanes, n |= o.subtreeFlags, n |= o.flags, o.return = e, o = o.sibling;
            return e.subtreeFlags |= n, e.childLanes = r, t
        }

        function f5(e, t, r) {
            var n = t.pendingProps;
            switch (Il(t), t.tag) {
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
                    return de(t), null;
                case 1:
                    return Ae(t.type) && Ii(), de(t), null;
                case 3:
                    return n = t.stateNode, sn(), D(Le), D(me), zl(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (ui(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, rt !== null && (ml(rt), rt = null))), sl(e, t), de(t), null;
                case 5:
                    Bl(t);
                    var o = hr(uo.current);
                    if (r = t.type, e !== null && t.stateNode != null) V0(e, t, r, n, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
                    else {
                        if (!n) {
                            if (t.stateNode === null) throw Error(P(166));
                            return de(t), null
                        }
                        if (e = hr(vt.current), ui(t)) {
                            n = t.stateNode, r = t.type;
                            var i = t.memoizedProps;
                            switch (n[mt] = t, n[so] = i, e = (t.mode & 1) !== 0, r) {
                                case "dialog":
                                    H("cancel", n), H("close", n);
                                    break;
                                case "iframe":
                                case "object":
                                case "embed":
                                    H("load", n);
                                    break;
                                case "video":
                                case "audio":
                                    for (o = 0; o < Bn.length; o++) H(Bn[o], n);
                                    break;
                                case "source":
                                    H("error", n);
                                    break;
                                case "img":
                                case "image":
                                case "link":
                                    H("error", n), H("load", n);
                                    break;
                                case "details":
                                    H("toggle", n);
                                    break;
                                case "input":
                                    Wu(n, i), H("invalid", n);
                                    break;
                                case "select":
                                    n._wrapperState = {
                                        wasMultiple: !!i.multiple
                                    }, H("invalid", n);
                                    break;
                                case "textarea":
                                    Qu(n, i), H("invalid", n)
                            }
                            Ms(r, i), o = null;
                            for (var a in i)
                                if (i.hasOwnProperty(a)) {
                                    var s = i[a];
                                    a === "children" ? typeof s == "string" ? n.textContent !== s && (i.suppressHydrationWarning !== !0 && li(n.textContent, s, e), o = ["children", s]) : typeof s == "number" && n.textContent !== "" + s && (i.suppressHydrationWarning !== !0 && li(n.textContent, s, e), o = ["children", "" + s]) : qn.hasOwnProperty(a) && s != null && a === "onScroll" && H("scroll", n)
                                } switch (r) {
                                case "input":
                                    Yo(n), Ku(n, i, !0);
                                    break;
                                case "textarea":
                                    Yo(n), Ju(n);
                                    break;
                                case "select":
                                case "option":
                                    break;
                                default:
                                    typeof i.onClick == "function" && (n.onclick = ji)
                            }
                            n = o, t.updateQueue = n, n !== null && (t.flags |= 4)
                        } else {
                            a = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = of(r)), e === "http://www.w3.org/1999/xhtml" ? r === "script" ? (e = a.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof n.is == "string" ? e = a.createElement(r, {
                                is: n.is
                            }) : (e = a.createElement(r), r === "select" && (a = e, n.multiple ? a.multiple = !0 : n.size && (a.size = n.size))) : e = a.createElementNS(e, r), e[mt] = t, e[so] = n, R0(e, t, !1, !1), t.stateNode = e;
                            e: {
                                switch (a = _s(r, n), r) {
                                    case "dialog":
                                        H("cancel", e), H("close", e), o = n;
                                        break;
                                    case "iframe":
                                    case "object":
                                    case "embed":
                                        H("load", e), o = n;
                                        break;
                                    case "video":
                                    case "audio":
                                        for (o = 0; o < Bn.length; o++) H(Bn[o], e);
                                        o = n;
                                        break;
                                    case "source":
                                        H("error", e), o = n;
                                        break;
                                    case "img":
                                    case "image":
                                    case "link":
                                        H("error", e), H("load", e), o = n;
                                        break;
                                    case "details":
                                        H("toggle", e), o = n;
                                        break;
                                    case "input":
                                        Wu(e, n), o = Ts(e, n), H("invalid", e);
                                        break;
                                    case "option":
                                        o = n;
                                        break;
                                    case "select":
                                        e._wrapperState = {
                                            wasMultiple: !!n.multiple
                                        }, o = U({}, n, {
                                            value: void 0
                                        }), H("invalid", e);
                                        break;
                                    case "textarea":
                                        Qu(e, n), o = js(e, n), H("invalid", e);
                                        break;
                                    default:
                                        o = n
                                }
                                Ms(r, o),
                                s = o;
                                for (i in s)
                                    if (s.hasOwnProperty(i)) {
                                        var l = s[i];
                                        i === "style" ? lf(e, l) : i === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && af(e, l)) : i === "children" ? typeof l == "string" ? (r !== "textarea" || l !== "") && Xn(e, l) : typeof l == "number" && Xn(e, "" + l) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (qn.hasOwnProperty(i) ? l != null && i === "onScroll" && H("scroll", e) : l != null && yl(e, i, l, a))
                                    } switch (r) {
                                    case "input":
                                        Yo(e), Ku(e, n, !1);
                                        break;
                                    case "textarea":
                                        Yo(e), Ju(e);
                                        break;
                                    case "option":
                                        n.value != null && e.setAttribute("value", "" + nr(n.value));
                                        break;
                                    case "select":
                                        e.multiple = !!n.multiple, i = n.value, i != null ? Yr(e, !!n.multiple, i, !1) : n.defaultValue != null && Yr(e, !!n.multiple, n.defaultValue, !0);
                                        break;
                                    default:
                                        typeof o.onClick == "function" && (e.onclick = ji)
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
                    return de(t), null;
                case 6:
                    if (e && t.stateNode != null) j0(e, t, e.memoizedProps, n);
                    else {
                        if (typeof n != "string" && t.stateNode === null) throw Error(P(166));
                        if (r = hr(uo.current), hr(vt.current), ui(t)) {
                            if (n = t.stateNode, r = t.memoizedProps, n[mt] = t, (i = n.nodeValue !== r) && (e = Ie, e !== null)) switch (e.tag) {
                                case 3:
                                    li(n.nodeValue, r, (e.mode & 1) !== 0);
                                    break;
                                case 5:
                                    e.memoizedProps.suppressHydrationWarning !== !0 && li(n.nodeValue, r, (e.mode & 1) !== 0)
                            }
                            i && (t.flags |= 4)
                        } else n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n), n[mt] = t, t.stateNode = n
                    }
                    return de(t), null;
                case 13:
                    if (D(z), n = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                        if (B && je !== null && t.mode & 1 && !(t.flags & 128)) Jf(), on(), t.flags |= 98560, i = !1;
                        else if (i = ui(t), n !== null && n.dehydrated !== null) {
                            if (e === null) {
                                if (!i) throw Error(P(318));
                                if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(P(317));
                                i[mt] = t
                            } else on(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                            de(t), i = !1
                        } else rt !== null && (ml(rt), rt = null), i = !0;
                        if (!i) return t.flags & 65536 ? t : null
                    }
                    return t.flags & 128 ? (t.lanes = r, t) : (n = n !== null, n !== (e !== null && e.memoizedState !== null) && n && (t.child.flags |= 8192, t.mode & 1 && (e === null || z.current & 1 ? $ === 0 && ($ = 3) : e1())), t.updateQueue !== null && (t.flags |= 4), de(t), null);
                case 4:
                    return sn(), sl(e, t), e === null && io(t.stateNode.containerInfo), de(t), null;
                case 10:
                    return bl(t.type._context), de(t), null;
                case 17:
                    return Ae(t.type) && Ii(), de(t), null;
                case 19:
                    if (D(z), i = t.memoizedState, i === null) return de(t), null;
                    if (n = (t.flags & 128) !== 0, a = i.rendering, a === null)
                        if (n) _n(i, !1);
                        else {
                            if ($ !== 0 || e !== null && e.flags & 128)
                                for (e = t.child; e !== null;) {
                                    if (a = Gi(e), a !== null) {
                                        for (t.flags |= 128, _n(i, !1), n = a.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), t.subtreeFlags = 0, n = r, r = t.child; r !== null;) i = r, e = n, i.flags &= 14680066, a = i.alternate, a === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = a.childLanes, i.lanes = a.lanes, i.child = a.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = a.memoizedProps, i.memoizedState = a.memoizedState, i.updateQueue = a.updateQueue, i.type = a.type, e = a.dependencies, i.dependencies = e === null ? null : {
                                            lanes: e.lanes,
                                            firstContext: e.firstContext
                                        }), r = r.sibling;
                                        return b(z, z.current & 1 | 2), t.child
                                    }
                                    e = e.sibling
                                }
                            i.tail !== null && W() > un && (t.flags |= 128, n = !0, _n(i, !1), t.lanes = 4194304)
                        }
                    else {
                        if (!n)
                            if (e = Gi(a), e !== null) {
                                if (t.flags |= 128, n = !0, r = e.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), _n(i, !0), i.tail === null && i.tailMode === "hidden" && !a.alternate && !B) return de(t), null
                            } else 2 * W() - i.renderingStartTime > un && r !== 1073741824 && (t.flags |= 128, n = !0, _n(i, !1), t.lanes = 4194304);
                        i.isBackwards ? (a.sibling = t.child, t.child = a) : (r = i.last, r !== null ? r.sibling = a : t.child = a, i.last = a)
                    }
                    return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = W(), t.sibling = null, r = z.current, b(z, n ? r & 1 | 2 : r & 1), t) : (de(t), null);
                case 22:
                case 23:
                    return $l(), n = t.memoizedState !== null, e !== null && e.memoizedState !== null !== n && (t.flags |= 8192), n && t.mode & 1 ? Ve & 1073741824 && (de(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : de(t), null;
                case 24:
                    return null;
                case 25:
                    return null
            }
            throw Error(P(156, t.tag))
        }

        function p5(e, t) {
            switch (Il(t), t.tag) {
                case 1:
                    return Ae(t.type) && Ii(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
                case 3:
                    return sn(), D(Le), D(me), zl(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
                case 5:
                    return Bl(t), null;
                case 13:
                    if (D(z), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                        if (t.alternate === null) throw Error(P(340));
                        on()
                    }
                    return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
                case 19:
                    return D(z), null;
                case 4:
                    return sn(), null;
                case 10:
                    return bl(t.type._context), null;
                case 22:
                case 23:
                    return $l(), null;
                case 24:
                    return null;
                default:
                    return null
            }
        }
        var pi = !1,
            ge = !1,
            d5 = typeof WeakSet == "function" ? WeakSet : Set,
            O = null;

        function Qr(e, t) {
            var r = e.ref;
            if (r !== null)
                if (typeof r == "function") try {
                    r(null)
                } catch (n) {
                    Z(e, t, n)
                } else r.current = null
        }

        function ll(e, t, r) {
            try {
                r()
            } catch (n) {
                Z(e, t, n)
            }
        }
        var Dc = !1;

        function g5(e, t) {
            if (Zs = Ti, e = Nf(), Vl(e)) {
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
                            g = 0,
                            f = e,
                            d = null;
                        t: for (;;) {
                            for (var m; f !== r || o !== 0 && f.nodeType !== 3 || (s = a + o), f !== i || n !== 0 && f.nodeType !== 3 || (l = a + n), f.nodeType === 3 && (a += f.nodeValue.length), (m = f.firstChild) !== null;) d = f, f = m;
                            for (;;) {
                                if (f === e) break t;
                                if (d === r && ++u === o && (s = a), d === i && ++g === n && (l = a), (m = f.nextSibling) !== null) break;
                                f = d, d = f.parentNode
                            }
                            f = m
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
            for (Ws = {
                    focusedElem: e,
                    selectionRange: r
                }, Ti = !1, O = t; O !== null;)
                if (t = O, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, O = e;
                else
                    for (; O !== null;) {
                        t = O;
                        try {
                            var y = t.alternate;
                            if (t.flags & 1024) switch (t.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    break;
                                case 1:
                                    if (y !== null) {
                                        var w = y.memoizedProps,
                                            E = y.memoizedState,
                                            p = t.stateNode,
                                            c = p.getSnapshotBeforeUpdate(t.elementType === t.type ? w : et(t.type, w), E);
                                        p.__reactInternalSnapshotBeforeUpdate = c
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
                                    throw Error(P(163))
                            }
                        } catch (v) {
                            Z(t, t.return, v)
                        }
                        if (e = t.sibling, e !== null) {
                            e.return = t.return, O = e;
                            break
                        }
                        O = t.return
                    }
            return y = Dc, Dc = !1, y
        }

        function Qn(e, t, r) {
            var n = t.updateQueue;
            if (n = n !== null ? n.lastEffect : null, n !== null) {
                var o = n = n.next;
                do {
                    if ((o.tag & e) === e) {
                        var i = o.destroy;
                        o.destroy = void 0, i !== void 0 && ll(t, r, i)
                    }
                    o = o.next
                } while (o !== n)
            }
        }

        function ra(e, t) {
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

        function ul(e) {
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

        function I0(e) {
            var t = e.alternate;
            t !== null && (e.alternate = null, I0(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[mt], delete t[so], delete t[Js], delete t[Y3], delete t[q3])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
        }

        function M0(e) {
            return e.tag === 5 || e.tag === 3 || e.tag === 4
        }

        function Gc(e) {
            e: for (;;) {
                for (; e.sibling === null;) {
                    if (e.return === null || M0(e.return)) return null;
                    e = e.return
                }
                for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
                    if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
                    e.child.return = e, e = e.child
                }
                if (!(e.flags & 2)) return e.stateNode
            }
        }

        function cl(e, t, r) {
            var n = e.tag;
            if (n === 5 || n === 6) e = e.stateNode, t ? r.nodeType === 8 ? r.parentNode.insertBefore(e, t) : r.insertBefore(e, t) : (r.nodeType === 8 ? (t = r.parentNode, t.insertBefore(e, r)) : (t = r, t.appendChild(e)), r = r._reactRootContainer, r != null || t.onclick !== null || (t.onclick = ji));
            else if (n !== 4 && (e = e.child, e !== null))
                for (cl(e, t, r), e = e.sibling; e !== null;) cl(e, t, r), e = e.sibling
        }

        function fl(e, t, r) {
            var n = e.tag;
            if (n === 5 || n === 6) e = e.stateNode, t ? r.insertBefore(e, t) : r.appendChild(e);
            else if (n !== 4 && (e = e.child, e !== null))
                for (fl(e, t, r), e = e.sibling; e !== null;) fl(e, t, r), e = e.sibling
        }
        var ie = null,
            tt = !1;

        function zt(e, t, r) {
            for (r = r.child; r !== null;) _0(e, t, r), r = r.sibling
        }

        function _0(e, t, r) {
            if (ht && typeof ht.onCommitFiberUnmount == "function") try {
                ht.onCommitFiberUnmount(Qi, r)
            } catch {}
            switch (r.tag) {
                case 5:
                    ge || Qr(r, t);
                case 6:
                    var n = ie,
                        o = tt;
                    ie = null, zt(e, t, r), ie = n, tt = o, ie !== null && (tt ? (e = ie, r = r.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r)) : ie.removeChild(r.stateNode));
                    break;
                case 18:
                    ie !== null && (tt ? (e = ie, r = r.stateNode, e.nodeType === 8 ? gs(e.parentNode, r) : e.nodeType === 1 && gs(e, r), ro(e)) : gs(ie, r.stateNode));
                    break;
                case 4:
                    n = ie, o = tt, ie = r.stateNode.containerInfo, tt = !0, zt(e, t, r), ie = n, tt = o;
                    break;
                case 0:
                case 11:
                case 14:
                case 15:
                    if (!ge && (n = r.updateQueue, n !== null && (n = n.lastEffect, n !== null))) {
                        o = n = n.next;
                        do {
                            var i = o,
                                a = i.destroy;
                            i = i.tag, a !== void 0 && (i & 2 || i & 4) && ll(r, t, a), o = o.next
                        } while (o !== n)
                    }
                    zt(e, t, r);
                    break;
                case 1:
                    if (!ge && (Qr(r, t), n = r.stateNode, typeof n.componentWillUnmount == "function")) try {
                        n.props = r.memoizedProps, n.state = r.memoizedState, n.componentWillUnmount()
                    } catch (s) {
                        Z(r, t, s)
                    }
                    zt(e, t, r);
                    break;
                case 21:
                    zt(e, t, r);
                    break;
                case 22:
                    r.mode & 1 ? (ge = (n = ge) || r.memoizedState !== null, zt(e, t, r), ge = n) : zt(e, t, r);
                    break;
                default:
                    zt(e, t, r)
            }
        }

        function Bc(e) {
            var t = e.updateQueue;
            if (t !== null) {
                e.updateQueue = null;
                var r = e.stateNode;
                r === null && (r = e.stateNode = new d5), t.forEach(function(n) {
                    var o = S5.bind(null, e, n);
                    r.has(n) || (r.add(n), n.then(o, o))
                })
            }
        }

        function $e(e, t) {
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
                                    ie = s.stateNode, tt = !1;
                                    break e;
                                case 3:
                                    ie = s.stateNode.containerInfo, tt = !0;
                                    break e;
                                case 4:
                                    ie = s.stateNode.containerInfo, tt = !0;
                                    break e
                            }
                            s = s.return
                        }
                        if (ie === null) throw Error(P(160));
                        _0(i, a, o), ie = null, tt = !1;
                        var l = o.alternate;
                        l !== null && (l.return = null), o.return = null
                    } catch (u) {
                        Z(o, t, u)
                    }
                }
            if (t.subtreeFlags & 12854)
                for (t = t.child; t !== null;) N0(t, e), t = t.sibling
        }

        function N0(e, t) {
            var r = e.alternate,
                n = e.flags;
            switch (e.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                    if ($e(t, e), dt(e), n & 4) {
                        try {
                            Qn(3, e, e.return), ra(3, e)
                        } catch (w) {
                            Z(e, e.return, w)
                        }
                        try {
                            Qn(5, e, e.return)
                        } catch (w) {
                            Z(e, e.return, w)
                        }
                    }
                    break;
                case 1:
                    $e(t, e), dt(e), n & 512 && r !== null && Qr(r, r.return);
                    break;
                case 5:
                    if ($e(t, e), dt(e), n & 512 && r !== null && Qr(r, r.return), e.flags & 32) {
                        var o = e.stateNode;
                        try {
                            Xn(o, "")
                        } catch (w) {
                            Z(e, e.return, w)
                        }
                    }
                    if (n & 4 && (o = e.stateNode, o != null)) {
                        var i = e.memoizedProps,
                            a = r !== null ? r.memoizedProps : i,
                            s = e.type,
                            l = e.updateQueue;
                        if (e.updateQueue = null, l !== null) try {
                            s === "input" && i.type === "radio" && i.name != null && rf(o, i), _s(s, a);
                            var u = _s(s, i);
                            for (a = 0; a < l.length; a += 2) {
                                var g = l[a],
                                    f = l[a + 1];
                                g === "style" ? lf(o, f) : g === "dangerouslySetInnerHTML" ? af(o, f) : g === "children" ? Xn(o, f) : yl(o, g, f, u)
                            }
                            switch (s) {
                                case "input":
                                    Rs(o, i);
                                    break;
                                case "textarea":
                                    nf(o, i);
                                    break;
                                case "select":
                                    var d = o._wrapperState.wasMultiple;
                                    o._wrapperState.wasMultiple = !!i.multiple;
                                    var m = i.value;
                                    m != null ? Yr(o, !!i.multiple, m, !1) : d !== !!i.multiple && (i.defaultValue != null ? Yr(o, !!i.multiple, i.defaultValue, !0) : Yr(o, !!i.multiple, i.multiple ? [] : "", !1))
                            }
                            o[so] = i
                        } catch (w) {
                            Z(e, e.return, w)
                        }
                    }
                    break;
                case 6:
                    if ($e(t, e), dt(e), n & 4) {
                        if (e.stateNode === null) throw Error(P(162));
                        o = e.stateNode, i = e.memoizedProps;
                        try {
                            o.nodeValue = i
                        } catch (w) {
                            Z(e, e.return, w)
                        }
                    }
                    break;
                case 3:
                    if ($e(t, e), dt(e), n & 4 && r !== null && r.memoizedState.isDehydrated) try {
                        ro(t.containerInfo)
                    } catch (w) {
                        Z(e, e.return, w)
                    }
                    break;
                case 4:
                    $e(t, e), dt(e);
                    break;
                case 13:
                    $e(t, e), dt(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (ql = W())), n & 4 && Bc(e);
                    break;
                case 22:
                    if (g = r !== null && r.memoizedState !== null, e.mode & 1 ? (ge = (u = ge) || g, $e(t, e), ge = u) : $e(t, e), dt(e), n & 8192) {
                        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !g && e.mode & 1)
                            for (O = e, g = e.child; g !== null;) {
                                for (f = O = g; O !== null;) {
                                    switch (d = O, m = d.child, d.tag) {
                                        case 0:
                                        case 11:
                                        case 14:
                                        case 15:
                                            Qn(4, d, d.return);
                                            break;
                                        case 1:
                                            Qr(d, d.return);
                                            var y = d.stateNode;
                                            if (typeof y.componentWillUnmount == "function") {
                                                n = d, r = d.return;
                                                try {
                                                    t = n, y.props = t.memoizedProps, y.state = t.memoizedState, y.componentWillUnmount()
                                                } catch (w) {
                                                    Z(n, r, w)
                                                }
                                            }
                                            break;
                                        case 5:
                                            Qr(d, d.return);
                                            break;
                                        case 22:
                                            if (d.memoizedState !== null) {
                                                Fc(f);
                                                continue
                                            }
                                    }
                                    m !== null ? (m.return = d, O = m) : Fc(f)
                                }
                                g = g.sibling
                            }
                        e: for (g = null, f = e;;) {
                            if (f.tag === 5) {
                                if (g === null) {
                                    g = f;
                                    try {
                                        o = f.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (s = f.stateNode, l = f.memoizedProps.style, a = l != null && l.hasOwnProperty("display") ? l.display : null, s.style.display = sf("display", a))
                                    } catch (w) {
                                        Z(e, e.return, w)
                                    }
                                }
                            } else if (f.tag === 6) {
                                if (g === null) try {
                                    f.stateNode.nodeValue = u ? "" : f.memoizedProps
                                } catch (w) {
                                    Z(e, e.return, w)
                                }
                            } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
                                f.child.return = f, f = f.child;
                                continue
                            }
                            if (f === e) break e;
                            for (; f.sibling === null;) {
                                if (f.return === null || f.return === e) break e;
                                g === f && (g = null), f = f.return
                            }
                            g === f && (g = null), f.sibling.return = f.return, f = f.sibling
                        }
                    }
                    break;
                case 19:
                    $e(t, e), dt(e), n & 4 && Bc(e);
                    break;
                case 21:
                    break;
                default:
                    $e(t, e), dt(e)
            }
        }

        function dt(e) {
            var t = e.flags;
            if (t & 2) {
                try {
                    e: {
                        for (var r = e.return; r !== null;) {
                            if (M0(r)) {
                                var n = r;
                                break e
                            }
                            r = r.return
                        }
                        throw Error(P(160))
                    }
                    switch (n.tag) {
                        case 5:
                            var o = n.stateNode;
                            n.flags & 32 && (Xn(o, ""), n.flags &= -33);
                            var i = Gc(e);
                            fl(e, i, o);
                            break;
                        case 3:
                        case 4:
                            var a = n.stateNode.containerInfo,
                                s = Gc(e);
                            cl(e, s, a);
                            break;
                        default:
                            throw Error(P(161))
                    }
                }
                catch (l) {
                    Z(e, e.return, l)
                }
                e.flags &= -3
            }
            t & 4096 && (e.flags &= -4097)
        }

        function m5(e, t, r) {
            O = e, b0(e, t, r)
        }

        function b0(e, t, r) {
            for (var n = (e.mode & 1) !== 0; O !== null;) {
                var o = O,
                    i = o.child;
                if (o.tag === 22 && n) {
                    var a = o.memoizedState !== null || pi;
                    if (!a) {
                        var s = o.alternate,
                            l = s !== null && s.memoizedState !== null || ge;
                        s = pi;
                        var u = ge;
                        if (pi = a, (ge = l) && !u)
                            for (O = o; O !== null;) a = O, l = a.child, a.tag === 22 && a.memoizedState !== null ? Uc(o) : l !== null ? (l.return = a, O = l) : Uc(o);
                        for (; i !== null;) O = i, b0(i, t, r), i = i.sibling;
                        O = o, pi = s, ge = u
                    }
                    zc(e, t, r)
                } else o.subtreeFlags & 8772 && i !== null ? (i.return = o, O = i) : zc(e, t, r)
            }
        }

        function zc(e) {
            for (; O !== null;) {
                var t = O;
                if (t.flags & 8772) {
                    var r = t.alternate;
                    try {
                        if (t.flags & 8772) switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                ge || ra(5, t);
                                break;
                            case 1:
                                var n = t.stateNode;
                                if (t.flags & 4 && !ge)
                                    if (r === null) n.componentDidMount();
                                    else {
                                        var o = t.elementType === t.type ? r.memoizedProps : et(t.type, r.memoizedProps);
                                        n.componentDidUpdate(o, r.memoizedState, n.__reactInternalSnapshotBeforeUpdate)
                                    } var i = t.updateQueue;
                                i !== null && Ec(t, i, n);
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
                                    Ec(t, a, r)
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
                                        var g = u.memoizedState;
                                        if (g !== null) {
                                            var f = g.dehydrated;
                                            f !== null && ro(f)
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
                                throw Error(P(163))
                        }
                        ge || t.flags & 512 && ul(t)
                    } catch (d) {
                        Z(t, t.return, d)
                    }
                }
                if (t === e) {
                    O = null;
                    break
                }
                if (r = t.sibling, r !== null) {
                    r.return = t.return, O = r;
                    break
                }
                O = t.return
            }
        }

        function Fc(e) {
            for (; O !== null;) {
                var t = O;
                if (t === e) {
                    O = null;
                    break
                }
                var r = t.sibling;
                if (r !== null) {
                    r.return = t.return, O = r;
                    break
                }
                O = t.return
            }
        }

        function Uc(e) {
            for (; O !== null;) {
                var t = O;
                try {
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            var r = t.return;
                            try {
                                ra(4, t)
                            } catch (l) {
                                Z(t, r, l)
                            }
                            break;
                        case 1:
                            var n = t.stateNode;
                            if (typeof n.componentDidMount == "function") {
                                var o = t.return;
                                try {
                                    n.componentDidMount()
                                } catch (l) {
                                    Z(t, o, l)
                                }
                            }
                            var i = t.return;
                            try {
                                ul(t)
                            } catch (l) {
                                Z(t, i, l)
                            }
                            break;
                        case 5:
                            var a = t.return;
                            try {
                                ul(t)
                            } catch (l) {
                                Z(t, a, l)
                            }
                    }
                } catch (l) {
                    Z(t, t.return, l)
                }
                if (t === e) {
                    O = null;
                    break
                }
                var s = t.sibling;
                if (s !== null) {
                    s.return = t.return, O = s;
                    break
                }
                O = t.return
            }
        }
        var h5 = Math.ceil,
            Fi = Rt.ReactCurrentDispatcher,
            Jl = Rt.ReactCurrentOwner,
            Ze = Rt.ReactCurrentBatchConfig,
            I = 0,
            te = null,
            J = null,
            ae = 0,
            Ve = 0,
            Jr = ar(0),
            $ = 0,
            go = null,
            kr = 0,
            na = 0,
            Yl = 0,
            Jn = null,
            Ee = null,
            ql = 0,
            un = 1 / 0,
            Ct = null,
            Ui = !1,
            pl = null,
            er = null,
            di = !1,
            Qt = null,
            Zi = 0,
            Yn = 0,
            dl = null,
            Ci = -1,
            ki = 0;

        function xe() {
            return I & 6 ? W() : Ci !== -1 ? Ci : Ci = W()
        }

        function tr(e) {
            return e.mode & 1 ? I & 2 && ae !== 0 ? ae & -ae : $3.transition !== null ? (ki === 0 && (ki = wf()), ki) : (e = _, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Lf(e.type)), e) : 1
        }

        function ot(e, t, r, n) {
            if (50 < Yn) throw Yn = 0, dl = null, Error(P(185));
            mo(e, r, n), (!(I & 2) || e !== te) && (e === te && (!(I & 2) && (na |= r), $ === 4 && Wt(e, ae)), Te(e, n), r === 1 && I === 0 && !(t.mode & 1) && (un = W() + 500, $i && sr()))
        }

        function Te(e, t) {
            var r = e.callbackNode;
            t3(e, t);
            var n = Ai(e, e === te ? ae : 0);
            if (n === 0) r !== null && Xu(r), e.callbackNode = null, e.callbackPriority = 0;
            else if (t = n & -n, e.callbackPriority !== t) {
                if (r != null && Xu(r), t === 1) e.tag === 0 ? X3(Zc.bind(null, e)) : Wf(Zc.bind(null, e)), Q3(function() {
                    !(I & 6) && sr()
                }), r = null;
                else {
                    switch (Cf(n)) {
                        case 1:
                            r = Sl;
                            break;
                        case 4:
                            r = yf;
                            break;
                        case 16:
                            r = Li;
                            break;
                        case 536870912:
                            r = xf;
                            break;
                        default:
                            r = Li
                    }
                    r = Z0(r, H0.bind(null, e))
                }
                e.callbackPriority = t, e.callbackNode = r
            }
        }

        function H0(e, t) {
            if (Ci = -1, ki = 0, I & 6) throw Error(P(327));
            var r = e.callbackNode;
            if (tn() && e.callbackNode !== r) return null;
            var n = Ai(e, e === te ? ae : 0);
            if (n === 0) return null;
            if (n & 30 || n & e.expiredLanes || t) t = Wi(e, n);
            else {
                t = n;
                var o = I;
                I |= 2;
                var i = G0();
                (te !== e || ae !== t) && (Ct = null, un = W() + 500, vr(e, t));
                do try {
                    x5();
                    break
                } catch (s) {
                    D0(e, s)
                }
                while (1);
                Nl(), Fi.current = i, I = o, J !== null ? t = 0 : (te = null, ae = 0, t = $)
            }
            if (t !== 0) {
                if (t === 2 && (o = Gs(e), o !== 0 && (n = o, t = gl(e, o))), t === 1) throw r = go, vr(e, 0), Wt(e, n), Te(e, W()), r;
                if (t === 6) Wt(e, n);
                else {
                    if (o = e.current.alternate, !(n & 30) && !v5(o) && (t = Wi(e, n), t === 2 && (i = Gs(e), i !== 0 && (n = i, t = gl(e, i))), t === 1)) throw r = go, vr(e, 0), Wt(e, n), Te(e, W()), r;
                    switch (e.finishedWork = o, e.finishedLanes = n, t) {
                        case 0:
                        case 1:
                            throw Error(P(345));
                        case 2:
                            dr(e, Ee, Ct);
                            break;
                        case 3:
                            if (Wt(e, n), (n & 130023424) === n && (t = ql + 500 - W(), 10 < t)) {
                                if (Ai(e, 0) !== 0) break;
                                if (o = e.suspendedLanes, (o & n) !== n) {
                                    xe(), e.pingedLanes |= e.suspendedLanes & o;
                                    break
                                }
                                e.timeoutHandle = Qs(dr.bind(null, e, Ee, Ct), t);
                                break
                            }
                            dr(e, Ee, Ct);
                            break;
                        case 4:
                            if (Wt(e, n), (n & 4194240) === n) break;
                            for (t = e.eventTimes, o = -1; 0 < n;) {
                                var a = 31 - nt(n);
                                i = 1 << a, a = t[a], a > o && (o = a), n &= ~i
                            }
                            if (n = o, n = W() - n, n = (120 > n ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * h5(n / 1960)) - n, 10 < n) {
                                e.timeoutHandle = Qs(dr.bind(null, e, Ee, Ct), n);
                                break
                            }
                            dr(e, Ee, Ct);
                            break;
                        case 5:
                            dr(e, Ee, Ct);
                            break;
                        default:
                            throw Error(P(329))
                    }
                }
            }
            return Te(e, W()), e.callbackNode === r ? H0.bind(null, e) : null
        }

        function gl(e, t) {
            var r = Jn;
            return e.current.memoizedState.isDehydrated && (vr(e, t).flags |= 256), e = Wi(e, t), e !== 2 && (t = Ee, Ee = r, t !== null && ml(t)), e
        }

        function ml(e) {
            Ee === null ? Ee = e : Ee.push.apply(Ee, e)
        }

        function v5(e) {
            for (var t = e;;) {
                if (t.flags & 16384) {
                    var r = t.updateQueue;
                    if (r !== null && (r = r.stores, r !== null))
                        for (var n = 0; n < r.length; n++) {
                            var o = r[n],
                                i = o.getSnapshot;
                            o = o.value;
                            try {
                                if (!it(i(), o)) return !1
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

        function Wt(e, t) {
            for (t &= ~Yl, t &= ~na, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
                var r = 31 - nt(t),
                    n = 1 << r;
                e[r] = -1, t &= ~n
            }
        }

        function Zc(e) {
            if (I & 6) throw Error(P(327));
            tn();
            var t = Ai(e, 0);
            if (!(t & 1)) return Te(e, W()), null;
            var r = Wi(e, t);
            if (e.tag !== 0 && r === 2) {
                var n = Gs(e);
                n !== 0 && (t = n, r = gl(e, n))
            }
            if (r === 1) throw r = go, vr(e, 0), Wt(e, t), Te(e, W()), r;
            if (r === 6) throw Error(P(345));
            return e.finishedWork = e.current.alternate, e.finishedLanes = t, dr(e, Ee, Ct), Te(e, W()), null
        }

        function Xl(e, t) {
            var r = I;
            I |= 1;
            try {
                return e(t)
            } finally {
                I = r, I === 0 && (un = W() + 500, $i && sr())
            }
        }

        function Sr(e) {
            Qt !== null && Qt.tag === 0 && !(I & 6) && tn();
            var t = I;
            I |= 1;
            var r = Ze.transition,
                n = _;
            try {
                if (Ze.transition = null, _ = 1, e) return e()
            } finally {
                _ = n, Ze.transition = r, I = t, !(I & 6) && sr()
            }
        }

        function $l() {
            Ve = Jr.current, D(Jr)
        }

        function vr(e, t) {
            e.finishedWork = null, e.finishedLanes = 0;
            var r = e.timeoutHandle;
            if (r !== -1 && (e.timeoutHandle = -1, K3(r)), J !== null)
                for (r = J.return; r !== null;) {
                    var n = r;
                    switch (Il(n), n.tag) {
                        case 1:
                            n = n.type.childContextTypes, n != null && Ii();
                            break;
                        case 3:
                            sn(), D(Le), D(me), zl();
                            break;
                        case 5:
                            Bl(n);
                            break;
                        case 4:
                            sn();
                            break;
                        case 13:
                            D(z);
                            break;
                        case 19:
                            D(z);
                            break;
                        case 10:
                            bl(n.type._context);
                            break;
                        case 22:
                        case 23:
                            $l()
                    }
                    r = r.return
                }
            if (te = e, J = e = rr(e.current, null), ae = Ve = t, $ = 0, go = null, Yl = na = kr = 0, Ee = Jn = null, mr !== null) {
                for (t = 0; t < mr.length; t++)
                    if (r = mr[t], n = r.interleaved, n !== null) {
                        r.interleaved = null;
                        var o = n.next,
                            i = r.pending;
                        if (i !== null) {
                            var a = i.next;
                            i.next = o, n.next = a
                        }
                        r.pending = n
                    } mr = null
            }
            return e
        }

        function D0(e, t) {
            do {
                var r = J;
                try {
                    if (Nl(), yi.current = zi, Bi) {
                        for (var n = F.memoizedState; n !== null;) {
                            var o = n.queue;
                            o !== null && (o.pending = null), n = n.next
                        }
                        Bi = !1
                    }
                    if (Cr = 0, ee = X = F = null, Kn = !1, co = 0, Jl.current = null, r === null || r.return === null) {
                        $ = 1, go = t, J = null;
                        break
                    }
                    e: {
                        var i = e,
                            a = r.return,
                            s = r,
                            l = t;
                        if (t = ae, s.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
                            var u = l,
                                g = s,
                                f = g.tag;
                            if (!(g.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                                var d = g.alternate;
                                d ? (g.updateQueue = d.updateQueue, g.memoizedState = d.memoizedState, g.lanes = d.lanes) : (g.updateQueue = null, g.memoizedState = null)
                            }
                            var m = jc(a);
                            if (m !== null) {
                                m.flags &= -257, Ic(m, a, s, i, t), m.mode & 1 && Vc(i, u, t), t = m, l = u;
                                var y = t.updateQueue;
                                if (y === null) {
                                    var w = new Set;
                                    w.add(l), t.updateQueue = w
                                } else y.add(l);
                                break e
                            } else {
                                if (!(t & 1)) {
                                    Vc(i, u, t), e1();
                                    break e
                                }
                                l = Error(P(426))
                            }
                        } else if (B && s.mode & 1) {
                            var E = jc(a);
                            if (E !== null) {
                                !(E.flags & 65536) && (E.flags |= 256), Ic(E, a, s, i, t), Ml(ln(l, s));
                                break e
                            }
                        }
                        i = l = ln(l, s),
                        $ !== 4 && ($ = 2),
                        Jn === null ? Jn = [i] : Jn.push(i),
                        i = a;do {
                            switch (i.tag) {
                                case 3:
                                    i.flags |= 65536, t &= -t, i.lanes |= t;
                                    var p = k0(i, l, t);
                                    Pc(i, p);
                                    break e;
                                case 1:
                                    s = l;
                                    var c = i.type,
                                        h = i.stateNode;
                                    if (!(i.flags & 128) && (typeof c.getDerivedStateFromError == "function" || h !== null && typeof h.componentDidCatch == "function" && (er === null || !er.has(h)))) {
                                        i.flags |= 65536, t &= -t, i.lanes |= t;
                                        var v = S0(i, s, t);
                                        Pc(i, v);
                                        break e
                                    }
                            }
                            i = i.return
                        } while (i !== null)
                    }
                    z0(r)
                } catch (x) {
                    t = x, J === r && r !== null && (J = r = r.return);
                    continue
                }
                break
            } while (1)
        }

        function G0() {
            var e = Fi.current;
            return Fi.current = zi, e === null ? zi : e
        }

        function e1() {
            ($ === 0 || $ === 3 || $ === 2) && ($ = 4), te === null || !(kr & 268435455) && !(na & 268435455) || Wt(te, ae)
        }

        function Wi(e, t) {
            var r = I;
            I |= 2;
            var n = G0();
            (te !== e || ae !== t) && (Ct = null, vr(e, t));
            do try {
                y5();
                break
            } catch (o) {
                D0(e, o)
            }
            while (1);
            if (Nl(), I = r, Fi.current = n, J !== null) throw Error(P(261));
            return te = null, ae = 0, $
        }

        function y5() {
            for (; J !== null;) B0(J)
        }

        function x5() {
            for (; J !== null && !W2();) B0(J)
        }

        function B0(e) {
            var t = U0(e.alternate, e, Ve);
            e.memoizedProps = e.pendingProps, t === null ? z0(e) : J = t, Jl.current = null
        }

        function z0(e) {
            var t = e;
            do {
                var r = t.alternate;
                if (e = t.return, t.flags & 32768) {
                    if (r = p5(r, t), r !== null) {
                        r.flags &= 32767, J = r;
                        return
                    }
                    if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
                    else {
                        $ = 6, J = null;
                        return
                    }
                } else if (r = f5(r, t, Ve), r !== null) {
                    J = r;
                    return
                }
                if (t = t.sibling, t !== null) {
                    J = t;
                    return
                }
                J = t = e
            } while (t !== null);
            $ === 0 && ($ = 5)
        }

        function dr(e, t, r) {
            var n = _,
                o = Ze.transition;
            try {
                Ze.transition = null, _ = 1, w5(e, t, r, n)
            } finally {
                Ze.transition = o, _ = n
            }
            return null
        }

        function w5(e, t, r, n) {
            do tn(); while (Qt !== null);
            if (I & 6) throw Error(P(327));
            r = e.finishedWork;
            var o = e.finishedLanes;
            if (r === null) return null;
            if (e.finishedWork = null, e.finishedLanes = 0, r === e.current) throw Error(P(177));
            e.callbackNode = null, e.callbackPriority = 0;
            var i = r.lanes | r.childLanes;
            if (r3(e, i), e === te && (J = te = null, ae = 0), !(r.subtreeFlags & 2064) && !(r.flags & 2064) || di || (di = !0, Z0(Li, function() {
                    return tn(), null
                })), i = (r.flags & 15990) !== 0, r.subtreeFlags & 15990 || i) {
                i = Ze.transition, Ze.transition = null;
                var a = _;
                _ = 1;
                var s = I;
                I |= 4, Jl.current = null, g5(e, r), N0(r, e), z3(Ws), Ti = !!Zs, Ws = Zs = null, e.current = r, m5(r, e, o), K2(), I = s, _ = a, Ze.transition = i
            } else e.current = r;
            if (di && (di = !1, Qt = e, Zi = o), i = e.pendingLanes, i === 0 && (er = null), Y2(r.stateNode, n), Te(e, W()), t !== null)
                for (n = e.onRecoverableError, r = 0; r < t.length; r++) o = t[r], n(o.value, {
                    componentStack: o.stack,
                    digest: o.digest
                });
            if (Ui) throw Ui = !1, e = pl, pl = null, e;
            return Zi & 1 && e.tag !== 0 && tn(), i = e.pendingLanes, i & 1 ? e === dl ? Yn++ : (Yn = 0, dl = e) : Yn = 0, sr(), null
        }

        function tn() {
            if (Qt !== null) {
                var e = Cf(Zi),
                    t = Ze.transition,
                    r = _;
                try {
                    if (Ze.transition = null, _ = 16 > e ? 16 : e, Qt === null) var n = !1;
                    else {
                        if (e = Qt, Qt = null, Zi = 0, I & 6) throw Error(P(331));
                        var o = I;
                        for (I |= 4, O = e.current; O !== null;) {
                            var i = O,
                                a = i.child;
                            if (O.flags & 16) {
                                var s = i.deletions;
                                if (s !== null) {
                                    for (var l = 0; l < s.length; l++) {
                                        var u = s[l];
                                        for (O = u; O !== null;) {
                                            var g = O;
                                            switch (g.tag) {
                                                case 0:
                                                case 11:
                                                case 15:
                                                    Qn(8, g, i)
                                            }
                                            var f = g.child;
                                            if (f !== null) f.return = g, O = f;
                                            else
                                                for (; O !== null;) {
                                                    g = O;
                                                    var d = g.sibling,
                                                        m = g.return;
                                                    if (I0(g), g === u) {
                                                        O = null;
                                                        break
                                                    }
                                                    if (d !== null) {
                                                        d.return = m, O = d;
                                                        break
                                                    }
                                                    O = m
                                                }
                                        }
                                    }
                                    var y = i.alternate;
                                    if (y !== null) {
                                        var w = y.child;
                                        if (w !== null) {
                                            y.child = null;
                                            do {
                                                var E = w.sibling;
                                                w.sibling = null, w = E
                                            } while (w !== null)
                                        }
                                    }
                                    O = i
                                }
                            }
                            if (i.subtreeFlags & 2064 && a !== null) a.return = i, O = a;
                            else e: for (; O !== null;) {
                                if (i = O, i.flags & 2048) switch (i.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Qn(9, i, i.return)
                                }
                                var p = i.sibling;
                                if (p !== null) {
                                    p.return = i.return, O = p;
                                    break e
                                }
                                O = i.return
                            }
                        }
                        var c = e.current;
                        for (O = c; O !== null;) {
                            a = O;
                            var h = a.child;
                            if (a.subtreeFlags & 2064 && h !== null) h.return = a, O = h;
                            else e: for (a = c; O !== null;) {
                                if (s = O, s.flags & 2048) try {
                                    switch (s.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            ra(9, s)
                                    }
                                } catch (x) {
                                    Z(s, s.return, x)
                                }
                                if (s === a) {
                                    O = null;
                                    break e
                                }
                                var v = s.sibling;
                                if (v !== null) {
                                    v.return = s.return, O = v;
                                    break e
                                }
                                O = s.return
                            }
                        }
                        if (I = o, sr(), ht && typeof ht.onPostCommitFiberRoot == "function") try {
                            ht.onPostCommitFiberRoot(Qi, e)
                        } catch {}
                        n = !0
                    }
                    return n
                } finally {
                    _ = r, Ze.transition = t
                }
            }
            return !1
        }

        function Wc(e, t, r) {
            t = ln(r, t), t = k0(e, t, 1), e = $t(e, t, 1), t = xe(), e !== null && (mo(e, 1, t), Te(e, t))
        }

        function Z(e, t, r) {
            if (e.tag === 3) Wc(e, e, r);
            else
                for (; t !== null;) {
                    if (t.tag === 3) {
                        Wc(t, e, r);
                        break
                    } else if (t.tag === 1) {
                        var n = t.stateNode;
                        if (typeof t.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (er === null || !er.has(n))) {
                            e = ln(r, e), e = S0(t, e, 1), t = $t(t, e, 1), e = xe(), t !== null && (mo(t, 1, e), Te(t, e));
                            break
                        }
                    }
                    t = t.return
                }
        }

        function C5(e, t, r) {
            var n = e.pingCache;
            n !== null && n.delete(t), t = xe(), e.pingedLanes |= e.suspendedLanes & r, te === e && (ae & r) === r && ($ === 4 || $ === 3 && (ae & 130023424) === ae && 500 > W() - ql ? vr(e, 0) : Yl |= r), Te(e, t)
        }

        function F0(e, t) {
            t === 0 && (e.mode & 1 ? (t = $o, $o <<= 1, !($o & 130023424) && ($o = 4194304)) : t = 1);
            var r = xe();
            e = At(e, t), e !== null && (mo(e, t, r), Te(e, r))
        }

        function k5(e) {
            var t = e.memoizedState,
                r = 0;
            t !== null && (r = t.retryLane), F0(e, r)
        }

        function S5(e, t) {
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
                    throw Error(P(314))
            }
            n !== null && n.delete(t), F0(e, r)
        }
        var U0;
        U0 = function(e, t, r) {
            if (e !== null)
                if (e.memoizedProps !== t.pendingProps || Le.current) Oe = !0;
                else {
                    if (!(e.lanes & r) && !(t.flags & 128)) return Oe = !1, c5(e, t, r);
                    Oe = !!(e.flags & 131072)
                }
            else Oe = !1, B && t.flags & 1048576 && Kf(t, Ni, t.index);
            switch (t.lanes = 0, t.tag) {
                case 2:
                    var n = t.type;
                    wi(e, t), e = t.pendingProps;
                    var o = nn(t, me.current);
                    en(t, r), o = Ul(null, t, n, e, o, r);
                    var i = Zl();
                    return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ae(n) ? (i = !0, Mi(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Dl(t), o.updater = ea, t.stateNode = o, o._reactInternals = t, tl(t, n, e, r), t = ol(null, t, n, !0, i, r)) : (t.tag = 0, B && i && jl(t), ye(null, t, o, r), t = t.child), t;
                case 16:
                    n = t.elementType;
                    e: {
                        switch (wi(e, t), e = t.pendingProps, o = n._init, n = o(n._payload), t.type = n, o = t.tag = E5(n), e = et(n, e), o) {
                            case 0:
                                t = nl(null, t, n, e, r);
                                break e;
                            case 1:
                                t = Nc(null, t, n, e, r);
                                break e;
                            case 11:
                                t = Mc(null, t, n, e, r);
                                break e;
                            case 14:
                                t = _c(null, t, n, et(n.type, e), r);
                                break e
                        }
                        throw Error(P(306, n, ""))
                    }
                    return t;
                case 0:
                    return n = t.type, o = t.pendingProps, o = t.elementType === n ? o : et(n, o), nl(e, t, n, o, r);
                case 1:
                    return n = t.type, o = t.pendingProps, o = t.elementType === n ? o : et(n, o), Nc(e, t, n, o, r);
                case 3:
                    e: {
                        if (L0(t), e === null) throw Error(P(387));n = t.pendingProps,
                        i = t.memoizedState,
                        o = i.element,
                        qf(e, t),
                        Di(t, n, null, r);
                        var a = t.memoizedState;
                        if (n = a.element, i.isDehydrated)
                            if (i = {
                                    element: n,
                                    isDehydrated: !1,
                                    cache: a.cache,
                                    pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
                                    transitions: a.transitions
                                }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
                                o = ln(Error(P(423)), t), t = bc(e, t, n, r, o);
                                break e
                            } else if (n !== o) {
                            o = ln(Error(P(424)), t), t = bc(e, t, n, r, o);
                            break e
                        } else
                            for (je = Xt(t.stateNode.containerInfo.firstChild), Ie = t, B = !0, rt = null, r = t0(t, null, n, r), t.child = r; r;) r.flags = r.flags & -3 | 4096, r = r.sibling;
                        else {
                            if (on(), n === o) {
                                t = Tt(e, t, r);
                                break e
                            }
                            ye(e, t, n, r)
                        }
                        t = t.child
                    }
                    return t;
                case 5:
                    return r0(t), e === null && Xs(t), n = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, a = o.children, Ks(n, o) ? a = null : i !== null && Ks(n, i) && (t.flags |= 32), O0(e, t), ye(e, t, a, r), t.child;
                case 6:
                    return e === null && Xs(t), null;
                case 13:
                    return A0(e, t, r);
                case 4:
                    return Gl(t, t.stateNode.containerInfo), n = t.pendingProps, e === null ? t.child = an(t, null, n, r) : ye(e, t, n, r), t.child;
                case 11:
                    return n = t.type, o = t.pendingProps, o = t.elementType === n ? o : et(n, o), Mc(e, t, n, o, r);
                case 7:
                    return ye(e, t, t.pendingProps, r), t.child;
                case 8:
                    return ye(e, t, t.pendingProps.children, r), t.child;
                case 12:
                    return ye(e, t, t.pendingProps.children, r), t.child;
                case 10:
                    e: {
                        if (n = t.type._context, o = t.pendingProps, i = t.memoizedProps, a = o.value, b(bi, n._currentValue), n._currentValue = a, i !== null)
                            if (it(i.value, a)) {
                                if (i.children === o.children && !Le.current) {
                                    t = Tt(e, t, r);
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
                                                    l = Et(-1, r & -r), l.tag = 2;
                                                    var u = i.updateQueue;
                                                    if (u !== null) {
                                                        u = u.shared;
                                                        var g = u.pending;
                                                        g === null ? l.next = l : (l.next = g.next, g.next = l), u.pending = l
                                                    }
                                                }
                                                i.lanes |= r, l = i.alternate, l !== null && (l.lanes |= r), $s(i.return, r, t), s.lanes |= r;
                                                break
                                            }
                                            l = l.next
                                        }
                                    } else if (i.tag === 10) a = i.type === t.type ? null : i.child;
                                    else if (i.tag === 18) {
                                        if (a = i.return, a === null) throw Error(P(341));
                                        a.lanes |= r, s = a.alternate, s !== null && (s.lanes |= r), $s(a, r, t), a = i.sibling
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
                        ye(e, t, o.children, r),
                        t = t.child
                    }
                    return t;
                case 9:
                    return o = t.type, n = t.pendingProps.children, en(t, r), o = We(o), n = n(o), t.flags |= 1, ye(e, t, n, r), t.child;
                case 14:
                    return n = t.type, o = et(n, t.pendingProps), o = et(n.type, o), _c(e, t, n, o, r);
                case 15:
                    return P0(e, t, t.type, t.pendingProps, r);
                case 17:
                    return n = t.type, o = t.pendingProps, o = t.elementType === n ? o : et(n, o), wi(e, t), t.tag = 1, Ae(n) ? (e = !0, Mi(t)) : e = !1, en(t, r), $f(t, n, o), tl(t, n, o, r), ol(null, t, n, !0, e, r);
                case 19:
                    return T0(e, t, r);
                case 22:
                    return E0(e, t, r)
            }
            throw Error(P(156, t.tag))
        };

        function Z0(e, t) {
            return vf(e, t)
        }

        function P5(e, t, r, n) {
            this.tag = e, this.key = r, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
        }

        function Ue(e, t, r, n) {
            return new P5(e, t, r, n)
        }

        function t1(e) {
            return e = e.prototype, !(!e || !e.isReactComponent)
        }

        function E5(e) {
            if (typeof e == "function") return t1(e) ? 1 : 0;
            if (e != null) {
                if (e = e.$$typeof, e === wl) return 11;
                if (e === Cl) return 14
            }
            return 2
        }

        function rr(e, t) {
            var r = e.alternate;
            return r === null ? (r = Ue(e.tag, t, e.key, e.mode), r.elementType = e.elementType, r.type = e.type, r.stateNode = e.stateNode, r.alternate = e, e.alternate = r) : (r.pendingProps = t, r.type = e.type, r.flags = 0, r.subtreeFlags = 0, r.deletions = null), r.flags = e.flags & 14680064, r.childLanes = e.childLanes, r.lanes = e.lanes, r.child = e.child, r.memoizedProps = e.memoizedProps, r.memoizedState = e.memoizedState, r.updateQueue = e.updateQueue, t = e.dependencies, r.dependencies = t === null ? null : {
                lanes: t.lanes,
                firstContext: t.firstContext
            }, r.sibling = e.sibling, r.index = e.index, r.ref = e.ref, r
        }

        function Si(e, t, r, n, o, i) {
            var a = 2;
            if (n = e, typeof e == "function") t1(e) && (a = 1);
            else if (typeof e == "string") a = 5;
            else e: switch (e) {
                case Dr:
                    return yr(r.children, o, i, t);
                case xl:
                    a = 8, o |= 8;
                    break;
                case Es:
                    return e = Ue(12, r, t, o | 2), e.elementType = Es, e.lanes = i, e;
                case Os:
                    return e = Ue(13, r, t, o), e.elementType = Os, e.lanes = i, e;
                case Ls:
                    return e = Ue(19, r, t, o), e.elementType = Ls, e.lanes = i, e;
                case $c:
                    return oa(r, o, i, t);
                default:
                    if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                        case qc:
                            a = 10;
                            break e;
                        case Xc:
                            a = 9;
                            break e;
                        case wl:
                            a = 11;
                            break e;
                        case Cl:
                            a = 14;
                            break e;
                        case Ft:
                            a = 16, n = null;
                            break e
                    }
                    throw Error(P(130, e == null ? e : typeof e, ""))
            }
            return t = Ue(a, r, t, o), t.elementType = e, t.type = n, t.lanes = i, t
        }

        function yr(e, t, r, n) {
            return e = Ue(7, e, n, t), e.lanes = r, e
        }

        function oa(e, t, r, n) {
            return e = Ue(22, e, n, t), e.elementType = $c, e.lanes = r, e.stateNode = {
                isHidden: !1
            }, e
        }

        function ks(e, t, r) {
            return e = Ue(6, e, null, t), e.lanes = r, e
        }

        function Ss(e, t, r) {
            return t = Ue(4, e.children !== null ? e.children : [], e.key, t), t.lanes = r, t.stateNode = {
                containerInfo: e.containerInfo,
                pendingChildren: null,
                implementation: e.implementation
            }, t
        }

        function O5(e, t, r, n, o) {
            this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = as(0), this.expirationTimes = as(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = as(0), this.identifierPrefix = n, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null
        }

        function r1(e, t, r, n, o, i, a, s, l) {
            return e = new O5(e, t, r, s, l), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Ue(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = {
                element: n,
                isDehydrated: r,
                cache: null,
                transitions: null,
                pendingSuspenseBoundaries: null
            }, Dl(i), e
        }

        function L5(e, t, r) {
            var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
            return {
                $$typeof: Hr,
                key: n == null ? null : "" + n,
                children: e,
                containerInfo: t,
                implementation: r
            }
        }

        function W0(e) {
            if (!e) return or;
            e = e._reactInternals;
            e: {
                if (Er(e) !== e || e.tag !== 1) throw Error(P(170));
                var t = e;do {
                    switch (t.tag) {
                        case 3:
                            t = t.stateNode.context;
                            break e;
                        case 1:
                            if (Ae(t.type)) {
                                t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                                break e
                            }
                    }
                    t = t.return
                } while (t !== null);
                throw Error(P(171))
            }
            if (e.tag === 1) {
                var r = e.type;
                if (Ae(r)) return Zf(e, r, t)
            }
            return t
        }

        function K0(e, t, r, n, o, i, a, s, l) {
            return e = r1(r, n, !0, e, o, i, a, s, l), e.context = W0(null), r = e.current, n = xe(), o = tr(r), i = Et(n, o), i.callback = t ?? null, $t(r, i, o), e.current.lanes = o, mo(e, o, n), Te(e, n), e
        }

        function ia(e, t, r, n) {
            var o = t.current,
                i = xe(),
                a = tr(o);
            return r = W0(r), t.context === null ? t.context = r : t.pendingContext = r, t = Et(i, a), t.payload = {
                element: e
            }, n = n === void 0 ? null : n, n !== null && (t.callback = n), e = $t(o, t, a), e !== null && (ot(e, o, a, i), vi(e, o, a)), a
        }

        function Ki(e) {
            if (e = e.current, !e.child) return null;
            switch (e.child.tag) {
                case 5:
                    return e.child.stateNode;
                default:
                    return e.child.stateNode
            }
        }

        function Kc(e, t) {
            if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
                var r = e.retryLane;
                e.retryLane = r !== 0 && r < t ? r : t
            }
        }

        function n1(e, t) {
            Kc(e, t), (e = e.alternate) && Kc(e, t)
        }

        function A5() {
            return null
        }
        var Q0 = typeof reportError == "function" ? reportError : function(e) {};

        function o1(e) {
            this._internalRoot = e
        }
        aa.prototype.render = o1.prototype.render = function(e) {
            var t = this._internalRoot;
            if (t === null) throw Error(P(409));
            ia(e, t, null, null)
        };
        aa.prototype.unmount = o1.prototype.unmount = function() {
            var e = this._internalRoot;
            if (e !== null) {
                this._internalRoot = null;
                var t = e.containerInfo;
                Sr(function() {
                    ia(null, e, null, null)
                }), t[Lt] = null
            }
        };

        function aa(e) {
            this._internalRoot = e
        }
        aa.prototype.unstable_scheduleHydration = function(e) {
            if (e) {
                var t = Pf();
                e = {
                    blockedOn: null,
                    target: e,
                    priority: t
                };
                for (var r = 0; r < Zt.length && t !== 0 && t < Zt[r].priority; r++);
                Zt.splice(r, 0, e), r === 0 && Of(e)
            }
        };

        function i1(e) {
            return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
        }

        function sa(e) {
            return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
        }

        function Qc() {}

        function T5(e, t, r, n, o) {
            if (o) {
                if (typeof n == "function") {
                    var i = n;
                    n = function() {
                        var u = Ki(a);
                        i.call(u)
                    }
                }
                var a = K0(t, n, e, 0, null, !1, !1, "", Qc);
                return e._reactRootContainer = a, e[Lt] = a.current, io(e.nodeType === 8 ? e.parentNode : e), Sr(), a
            }
            for (; o = e.lastChild;) e.removeChild(o);
            if (typeof n == "function") {
                var s = n;
                n = function() {
                    var u = Ki(l);
                    s.call(u)
                }
            }
            var l = r1(e, 0, !1, null, null, !1, !1, "", Qc);
            return e._reactRootContainer = l, e[Lt] = l.current, io(e.nodeType === 8 ? e.parentNode : e), Sr(function() {
                ia(t, l, r, n)
            }), l
        }

        function la(e, t, r, n, o) {
            var i = r._reactRootContainer;
            if (i) {
                var a = i;
                if (typeof o == "function") {
                    var s = o;
                    o = function() {
                        var l = Ki(a);
                        s.call(l)
                    }
                }
                ia(t, a, e, o)
            } else a = T5(r, t, e, o, n);
            return Ki(a)
        }
        kf = function(e) {
            switch (e.tag) {
                case 3:
                    var t = e.stateNode;
                    if (t.current.memoizedState.isDehydrated) {
                        var r = Gn(t.pendingLanes);
                        r !== 0 && (Pl(t, r | 1), Te(t, W()), !(I & 6) && (un = W() + 500, sr()))
                    }
                    break;
                case 13:
                    Sr(function() {
                        var n = At(e, 1);
                        if (n !== null) {
                            var o = xe();
                            ot(n, e, 1, o)
                        }
                    }), n1(e, 1)
            }
        };
        El = function(e) {
            if (e.tag === 13) {
                var t = At(e, 134217728);
                if (t !== null) {
                    var r = xe();
                    ot(t, e, 134217728, r)
                }
                n1(e, 134217728)
            }
        };
        Sf = function(e) {
            if (e.tag === 13) {
                var t = tr(e),
                    r = At(e, t);
                if (r !== null) {
                    var n = xe();
                    ot(r, e, t, n)
                }
                n1(e, t)
            }
        };
        Pf = function() {
            return _
        };
        Ef = function(e, t) {
            var r = _;
            try {
                return _ = e, t()
            } finally {
                _ = r
            }
        };
        bs = function(e, t, r) {
            switch (t) {
                case "input":
                    if (Rs(e, r), t = r.name, r.type === "radio" && t != null) {
                        for (r = e; r.parentNode;) r = r.parentNode;
                        for (r = r.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < r.length; t++) {
                            var n = r[t];
                            if (n !== e && n.form === e.form) {
                                var o = Xi(n);
                                if (!o) throw Error(P(90));
                                tf(n), Rs(n, o)
                            }
                        }
                    }
                    break;
                case "textarea":
                    nf(e, r);
                    break;
                case "select":
                    t = r.value, t != null && Yr(e, !!r.multiple, t, !1)
            }
        };
        ff = Xl;
        pf = Sr;
        var R5 = {
                usingClientEntryPoint: !1,
                Events: [vo, Fr, Xi, uf, cf, Xl]
            },
            Nn = {
                findFiberByHostInstance: gr,
                bundleType: 0,
                version: "18.2.0",
                rendererPackageName: "react-dom"
            },
            V5 = {
                bundleType: Nn.bundleType,
                version: Nn.version,
                rendererPackageName: Nn.rendererPackageName,
                rendererConfig: Nn.rendererConfig,
                overrideHookState: null,
                overrideHookStateDeletePath: null,
                overrideHookStateRenamePath: null,
                overrideProps: null,
                overridePropsDeletePath: null,
                overridePropsRenamePath: null,
                setErrorHandler: null,
                setSuspenseHandler: null,
                scheduleUpdate: null,
                currentDispatcherRef: Rt.ReactCurrentDispatcher,
                findHostInstanceByFiber: function(e) {
                    return e = mf(e), e === null ? null : e.stateNode
                },
                findFiberByHostInstance: Nn.findFiberByHostInstance || A5,
                findHostInstancesForRefresh: null,
                scheduleRefresh: null,
                scheduleRoot: null,
                setRefreshHandler: null,
                getCurrentFiber: null,
                reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
            };
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && (bn = __REACT_DEVTOOLS_GLOBAL_HOOK__, !bn.isDisabled && bn.supportsFiber)) try {
            Qi = bn.inject(V5), ht = bn
        } catch {}
        var bn;
        Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = R5;
        Ne.createPortal = function(e, t) {
            var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
            if (!i1(t)) throw Error(P(200));
            return L5(e, t, null, r)
        };
        Ne.createRoot = function(e, t) {
            if (!i1(e)) throw Error(P(299));
            var r = !1,
                n = "",
                o = Q0;
            return t != null && (t.unstable_strictMode === !0 && (r = !0), t.identifierPrefix !== void 0 && (n = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = r1(e, 1, !1, null, null, r, !1, n, o), e[Lt] = t.current, io(e.nodeType === 8 ? e.parentNode : e), new o1(t)
        };
        Ne.findDOMNode = function(e) {
            if (e == null) return null;
            if (e.nodeType === 1) return e;
            var t = e._reactInternals;
            if (t === void 0) throw typeof e.render == "function" ? Error(P(188)) : (e = Object.keys(e).join(","), Error(P(268, e)));
            return e = mf(t), e = e === null ? null : e.stateNode, e
        };
        Ne.flushSync = function(e) {
            return Sr(e)
        };
        Ne.hydrate = function(e, t, r) {
            if (!sa(t)) throw Error(P(200));
            return la(null, e, t, !0, r)
        };
        Ne.hydrateRoot = function(e, t, r) {
            if (!i1(e)) throw Error(P(405));
            var n = r != null && r.hydratedSources || null,
                o = !1,
                i = "",
                a = Q0;
            if (r != null && (r.unstable_strictMode === !0 && (o = !0), r.identifierPrefix !== void 0 && (i = r.identifierPrefix), r.onRecoverableError !== void 0 && (a = r.onRecoverableError)), t = K0(t, null, e, 1, r ?? null, o, !1, i, a), e[Lt] = t.current, io(e), n)
                for (e = 0; e < n.length; e++) r = n[e], o = r._getVersion, o = o(r._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [r, o] : t.mutableSourceEagerHydrationData.push(r, o);
            return new aa(t)
        };
        Ne.render = function(e, t, r) {
            if (!sa(t)) throw Error(P(200));
            return la(null, e, t, !1, r)
        };
        Ne.unmountComponentAtNode = function(e) {
            if (!sa(e)) throw Error(P(40));
            return e._reactRootContainer ? (Sr(function() {
                la(null, null, e, !1, function() {
                    e._reactRootContainer = null, e[Lt] = null
                })
            }), !0) : !1
        };
        Ne.unstable_batchedUpdates = Xl;
        Ne.unstable_renderSubtreeIntoContainer = function(e, t, r, n) {
            if (!sa(r)) throw Error(P(200));
            if (e == null || e._reactInternals === void 0) throw Error(P(38));
            return la(e, t, r, !1, n)
        };
        Ne.version = "18.2.0-next-9e3b772b8-20220608"
    });
    var X0 = He((ug, q0) => {
        "use strict";

        function Y0() {
            if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Y0)
            } catch {}
        }
        Y0(), q0.exports = J0()
    });
    var ep = He(a1 => {
        "use strict";
        var $0 = X0();
        a1.createRoot = $0.createRoot, a1.hydrateRoot = $0.hydrateRoot;
        var cg
    });
    var It = He((d1, Np) => {
        (function(e, t) {
            if (typeof define == "function" && define.amd) define("webextension-polyfill", ["module"], t);
            else if (typeof d1 < "u") t(Np);
            else {
                var r = {
                    exports: {}
                };
                t(r), e.browser = r.exports
            }
        })(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : d1, function(e) {
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
                            constructor(x, C = void 0) {
                                super(C), this.createItem = x
                            }
                            get(x) {
                                return this.has(x) || this.set(x, this.createItem(x)), super.get(x)
                            }
                        }
                        let a = v => v && typeof v == "object" && typeof v.then == "function",
                            s = (v, x) => (...C) => {
                                n.runtime.lastError ? v.reject(new Error(n.runtime.lastError.message)) : x.singleCallbackArg || C.length <= 1 && x.singleCallbackArg !== !1 ? v.resolve(C[0]) : v.resolve(C)
                            },
                            l = v => v == 1 ? "argument" : "arguments",
                            u = (v, x) => function(k, ...S) {
                                if (S.length < x.minArgs) throw new Error(`Expected at least ${x.minArgs} ${l(x.minArgs)} for ${v}(), got ${S.length}`);
                                if (S.length > x.maxArgs) throw new Error(`Expected at most ${x.maxArgs} ${l(x.maxArgs)} for ${v}(), got ${S.length}`);
                                return new Promise((R, L) => {
                                    if (x.fallbackToNoCallback) try {
                                        k[v](...S, s({
                                            resolve: R,
                                            reject: L
                                        }, x))
                                    } catch {
                                        k[v](...S), x.fallbackToNoCallback = !1, x.noCallback = !0, R()
                                    } else x.noCallback ? (k[v](...S), R()) : k[v](...S, s({
                                        resolve: R,
                                        reject: L
                                    }, x))
                                })
                            },
                            g = (v, x, C) => new Proxy(x, {
                                apply(k, S, R) {
                                    return C.call(S, v, ...R)
                                }
                            }),
                            f = Function.call.bind(Object.prototype.hasOwnProperty),
                            d = (v, x = {}, C = {}) => {
                                let k = Object.create(null),
                                    S = {
                                        has(L, V) {
                                            return V in v || V in k
                                        },
                                        get(L, V, Y) {
                                            if (V in k) return k[V];
                                            if (!(V in v)) return;
                                            let K = v[V];
                                            if (typeof K == "function")
                                                if (typeof x[V] == "function") K = g(v, v[V], x[V]);
                                                else if (f(C, V)) {
                                                let Re = u(V, C[V]);
                                                K = g(v, v[V], Re)
                                            } else K = K.bind(v);
                                            else if (typeof K == "object" && K !== null && (f(x, V) || f(C, V))) K = d(K, x[V], C[V]);
                                            else if (f(C, "*")) K = d(K, x[V], C["*"]);
                                            else return Object.defineProperty(k, V, {
                                                configurable: !0,
                                                enumerable: !0,
                                                get() {
                                                    return v[V]
                                                },
                                                set(Re) {
                                                    v[V] = Re
                                                }
                                            }), K;
                                            return k[V] = K, K
                                        },
                                        set(L, V, Y, K) {
                                            return V in k ? k[V] = Y : v[V] = Y, !0
                                        },
                                        defineProperty(L, V, Y) {
                                            return Reflect.defineProperty(k, V, Y)
                                        },
                                        deleteProperty(L, V) {
                                            return Reflect.deleteProperty(k, V)
                                        }
                                    },
                                    R = Object.create(v);
                                return new Proxy(R, S)
                            },
                            m = v => ({
                                addListener(x, C, ...k) {
                                    x.addListener(v.get(C), ...k)
                                },
                                hasListener(x, C) {
                                    return x.hasListener(v.get(C))
                                },
                                removeListener(x, C) {
                                    x.removeListener(v.get(C))
                                }
                            }),
                            y = new i(v => typeof v != "function" ? v : function(C) {
                                let k = d(C, {}, {
                                    getContent: {
                                        minArgs: 0,
                                        maxArgs: 0
                                    }
                                });
                                v(k)
                            }),
                            w = new i(v => typeof v != "function" ? v : function(C, k, S) {
                                let R = !1,
                                    L, V = new Promise(Dt => {
                                        L = function(ke) {
                                            R = !0, Dt(ke)
                                        }
                                    }),
                                    Y;
                                try {
                                    Y = v(C, k, L)
                                } catch (Dt) {
                                    Y = Promise.reject(Dt)
                                }
                                let K = Y !== !0 && a(Y);
                                if (Y !== !0 && !K && !R) return !1;
                                let Re = Dt => {
                                    Dt.then(ke => {
                                        S(ke)
                                    }, ke => {
                                        let xt;
                                        ke && (ke instanceof Error || typeof ke.message == "string") ? xt = ke.message : xt = "An unexpected error occurred", S({
                                            __mozWebExtensionPolyfillReject__: !0,
                                            message: xt
                                        })
                                    }).catch(ke => {})
                                };
                                return Re(K ? Y : V), !0
                            }),
                            E = ({
                                reject: v,
                                resolve: x
                            }, C) => {
                                n.runtime.lastError ? n.runtime.lastError.message === t ? x() : v(new Error(n.runtime.lastError.message)) : C && C.__mozWebExtensionPolyfillReject__ ? v(new Error(C.message)) : x(C)
                            },
                            p = (v, x, C, ...k) => {
                                if (k.length < x.minArgs) throw new Error(`Expected at least ${x.minArgs} ${l(x.minArgs)} for ${v}(), got ${k.length}`);
                                if (k.length > x.maxArgs) throw new Error(`Expected at most ${x.maxArgs} ${l(x.maxArgs)} for ${v}(), got ${k.length}`);
                                return new Promise((S, R) => {
                                    let L = E.bind(null, {
                                        resolve: S,
                                        reject: R
                                    });
                                    k.push(L), C.sendMessage(...k)
                                })
                            },
                            c = {
                                devtools: {
                                    network: {
                                        onRequestFinished: m(y)
                                    }
                                },
                                runtime: {
                                    onMessage: m(w),
                                    onMessageExternal: m(w),
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
                        }, d(n, c, o)
                    };
                e.exports = r(chrome)
            } else e.exports = globalThis.browser
        })
    });
    var Wp = He((bh, Sa) => {
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
            typeof Sa < "u" && Sa.exports ? (r.default = r, Sa.exports = r) : typeof define == "function" && typeof define.amd == "object" && define.amd ? define("classnames", [], function() {
                return r
            }) : window.classNames = r
        })()
    });
    var ud = He(Oa => {
        "use strict";
        var o7 = ve(),
            i7 = Symbol.for("react.element"),
            a7 = Symbol.for("react.fragment"),
            s7 = Object.prototype.hasOwnProperty,
            l7 = o7.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
            u7 = {
                key: !0,
                ref: !0,
                __self: !0,
                __source: !0
            };

        function ld(e, t, r) {
            var n, o = {},
                i = null,
                a = null;
            r !== void 0 && (i = "" + r), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (a = t.ref);
            for (n in t) s7.call(t, n) && !u7.hasOwnProperty(n) && (o[n] = t[n]);
            if (e && e.defaultProps)
                for (n in t = e.defaultProps, t) o[n] === void 0 && (o[n] = t[n]);
            return {
                $$typeof: i7,
                type: e,
                key: i,
                ref: a,
                props: o,
                _owner: l7.current
            }
        }
        Oa.Fragment = a7;
        Oa.jsx = ld;
        Oa.jsxs = ld
    });
    var bt = He((jv, cd) => {
        "use strict";
        cd.exports = ud()
    });

    function Q(e) {
        "@babel/helpers - typeof";
        return Q = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
            return typeof t
        } : function(t) {
            return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, Q(e)
    }

    function Se(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function Va(e, t) {
        if (Q(e) !== "object" || e === null) return e;
        var r = e[Symbol.toPrimitive];
        if (r !== void 0) {
            var n = r.call(e, t || "default");
            if (Q(n) !== "object") return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return (t === "string" ? String : Number)(e)
    }

    function vn(e) {
        var t = Va(e, "string");
        return Q(t) === "symbol" ? t : String(t)
    }

    function b1(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, vn(n.key), n)
        }
    }

    function Pe(e, t, r) {
        return t && b1(e.prototype, t), r && b1(e, r), Object.defineProperty(e, "prototype", {
            writable: !1
        }), e
    }

    function Ye(e) {
        if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function yn(e, t) {
        return yn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
            return n.__proto__ = o, n
        }, yn(e, t)
    }

    function Rr(e, t) {
        if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), Object.defineProperty(e, "prototype", {
            writable: !1
        }), t && yn(e, t)
    }

    function ur(e, t) {
        if (t && (Q(t) === "object" || typeof t == "function")) return t;
        if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
        return Ye(e)
    }

    function De(e) {
        return De = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
            return r.__proto__ || Object.getPrototypeOf(r)
        }, De(e)
    }

    function q(e, t, r) {
        return t = vn(t), t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r, e
    }

    function xn(e) {
        if (Array.isArray(e)) return e
    }

    function ja(e) {
        if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e)
    }

    function Ro(e, t) {
        (t == null || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
    }

    function wn(e, t) {
        if (e) {
            if (typeof e == "string") return Ro(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
            if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ro(e, t)
        }
    }

    function Cn() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
    }

    function Ia(e) {
        return xn(e) || ja(e) || wn(e) || Cn()
    }

    function H1(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function(o) {
                return Object.getOwnPropertyDescriptor(e, o).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function D1(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t] != null ? arguments[t] : {};
            t % 2 ? H1(Object(r), !0).forEach(function(n) {
                q(e, n, r[n])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : H1(Object(r)).forEach(function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
            })
        }
        return e
    }
    var Ad = {
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
        Td = function() {
            function e(t) {
                var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                Se(this, e), this.init(t, r)
            }
            return Pe(e, [{
                key: "init",
                value: function(r) {
                    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                    this.prefix = n.prefix || "i18next:", this.logger = r || Ad, this.options = n, this.debug = n.debug
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
                    return new e(this.logger, D1(D1({}, {
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
        ft = new Td,
        Gt = function() {
            function e() {
                Se(this, e), this.observers = {}
            }
            return Pe(e, [{
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

    function kn() {
        var e, t, r = new Promise(function(n, o) {
            e = n, t = o
        });
        return r.resolve = e, r.reject = t, r
    }

    function G1(e) {
        return e == null ? "" : "" + e
    }

    function Rd(e, t, r) {
        e.forEach(function(n) {
            t[n] && (r[n] = t[n])
        })
    }

    function _a(e, t, r) {
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

    function B1(e, t, r) {
        var n = _a(e, t, Object),
            o = n.obj,
            i = n.k;
        o[i] = r
    }

    function Vd(e, t, r, n) {
        var o = _a(e, t, Object),
            i = o.obj,
            a = o.k;
        i[a] = i[a] || [], n && (i[a] = i[a].concat(r)), n || i[a].push(r)
    }

    function Io(e, t) {
        var r = _a(e, t),
            n = r.obj,
            o = r.k;
        if (n) return n[o]
    }

    function jd(e, t, r) {
        var n = Io(e, r);
        return n !== void 0 ? n : Io(t, r)
    }

    function ru(e, t, r) {
        for (var n in t) n !== "__proto__" && n !== "constructor" && (n in e ? typeof e[n] == "string" || e[n] instanceof String || typeof t[n] == "string" || t[n] instanceof String ? r && (e[n] = t[n]) : ru(e[n], t[n], r) : e[n] = t[n]);
        return e
    }

    function Vr(e) {
        return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
    }
    var Id = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "/": "&#x2F;"
    };

    function Md(e) {
        return typeof e == "string" ? e.replace(/[&<>"'\/]/g, function(t) {
            return Id[t]
        }) : e
    }
    var No = typeof window < "u" && window.navigator && typeof window.navigator.userAgentData > "u" && window.navigator.userAgent && window.navigator.userAgent.indexOf("MSIE") > -1,
        _d = [" ", ",", "?", "!", ";"];

    function Nd(e, t, r) {
        t = t || "", r = r || "";
        var n = _d.filter(function(s) {
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

    function Mo(e, t) {
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
                    return u ? Mo(l, u, r) : void 0
                }
                o = o[n[i]]
            }
            return o
        }
    }

    function z1(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function(o) {
                return Object.getOwnPropertyDescriptor(e, o).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function Vo(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t] != null ? arguments[t] : {};
            t % 2 ? z1(Object(r), !0).forEach(function(n) {
                q(e, n, r[n])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : z1(Object(r)).forEach(function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
            })
        }
        return e
    }

    function bd(e) {
        var t = Hd();
        return function() {
            var n = De(e),
                o;
            if (t) {
                var i = De(this).constructor;
                o = Reflect.construct(n, arguments, i)
            } else o = n.apply(this, arguments);
            return ur(this, o)
        }
    }

    function Hd() {
        if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
        if (typeof Proxy == "function") return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
        } catch {
            return !1
        }
    }
    var Dd = function(e) {
            Rr(r, e);
            var t = bd(r);

            function r(n) {
                var o, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                    ns: ["translation"],
                    defaultNS: "translation"
                };
                return Se(this, r), o = t.call(this), No && Gt.call(Ye(o)), o.data = n || {}, o.options = i, o.options.keySeparator === void 0 && (o.options.keySeparator = "."), o.options.ignoreJSONStructure === void 0 && (o.options.ignoreJSONStructure = !0), o
            }
            return Pe(r, [{
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
                        g = [o, i];
                    a && typeof a != "string" && (g = g.concat(a)), a && typeof a == "string" && (g = g.concat(l ? a.split(l) : a)), o.indexOf(".") > -1 && (g = o.split("."));
                    var f = Io(this.data, g);
                    return f || !u || typeof a != "string" ? f : Mo(this.data && this.data[o] && this.data[o][i], a, l)
                }
            }, {
                key: "addResource",
                value: function(o, i, a, s) {
                    var l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
                            silent: !1
                        },
                        u = l.keySeparator !== void 0 ? l.keySeparator : this.options.keySeparator,
                        g = [o, i];
                    a && (g = g.concat(u ? a.split(u) : a)), o.indexOf(".") > -1 && (g = o.split("."), s = i, i = g[1]), this.addNamespaces(i), B1(this.data, g, s), l.silent || this.emit("added", o, i, a, s)
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
                        g = [o, i];
                    o.indexOf(".") > -1 && (g = o.split("."), s = a, a = i, i = g[1]), this.addNamespaces(i);
                    var f = Io(this.data, g) || {};
                    s ? ru(f, a, l) : f = Vo(Vo({}, f), a), B1(this.data, g, f), u.silent || this.emit("added", o, i, a)
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
                    return i || (i = this.options.defaultNS), this.options.compatibilityAPI === "v1" ? Vo(Vo({}, {}), this.getResource(o, i)) : this.getResource(o, i)
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
        }(Gt),
        nu = {
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

    function F1(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function(o) {
                return Object.getOwnPropertyDescriptor(e, o).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function ce(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t] != null ? arguments[t] : {};
            t % 2 ? F1(Object(r), !0).forEach(function(n) {
                q(e, n, r[n])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : F1(Object(r)).forEach(function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
            })
        }
        return e
    }

    function Gd(e) {
        var t = Bd();
        return function() {
            var n = De(e),
                o;
            if (t) {
                var i = De(this).constructor;
                o = Reflect.construct(n, arguments, i)
            } else o = n.apply(this, arguments);
            return ur(this, o)
        }
    }

    function Bd() {
        if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
        if (typeof Proxy == "function") return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
        } catch {
            return !1
        }
    }
    var U1 = {},
        Z1 = function(e) {
            Rr(r, e);
            var t = Gd(r);

            function r(n) {
                var o, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                return Se(this, r), o = t.call(this), No && Gt.call(Ye(o)), Rd(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], n, Ye(o)), o.options = i, o.options.keySeparator === void 0 && (o.options.keySeparator = "."), o.logger = ft.create("translator"), o
            }
            return Pe(r, [{
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
                        g = !this.options.userDefinedKeySeparator && !i.keySeparator && !this.options.userDefinedNsSeparator && !i.nsSeparator && !Nd(o, a, s);
                    if (u && !g) {
                        var f = o.match(this.interpolator.nestingRegexp);
                        if (f && f.length > 0) return {
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
                    if (Q(i) !== "object" && this.options.overloadTranslationOptionHandler && (i = this.options.overloadTranslationOptionHandler(arguments)), Q(i) === "object" && (i = ce({}, i)), i || (i = {}), o == null) return "";
                    Array.isArray(o) || (o = [String(o)]);
                    var l = i.returnDetails !== void 0 ? i.returnDetails : this.options.returnDetails,
                        u = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator,
                        g = this.extractFromKey(o[o.length - 1], i),
                        f = g.key,
                        d = g.namespaces,
                        m = d[d.length - 1],
                        y = i.lng || this.language,
                        w = i.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
                    if (y && y.toLowerCase() === "cimode") {
                        if (w) {
                            var E = i.nsSeparator || this.options.nsSeparator;
                            return l ? {
                                res: "".concat(m).concat(E).concat(f),
                                usedKey: f,
                                exactUsedKey: f,
                                usedLng: y,
                                usedNS: m
                            } : "".concat(m).concat(E).concat(f)
                        }
                        return l ? {
                            res: f,
                            usedKey: f,
                            exactUsedKey: f,
                            usedLng: y,
                            usedNS: m
                        } : f
                    }
                    var p = this.resolve(o, i),
                        c = p && p.res,
                        h = p && p.usedKey || f,
                        v = p && p.exactUsedKey || f,
                        x = Object.prototype.toString.apply(c),
                        C = ["[object Number]", "[object Function]", "[object RegExp]"],
                        k = i.joinArrays !== void 0 ? i.joinArrays : this.options.joinArrays,
                        S = !this.i18nFormat || this.i18nFormat.handleAsObject,
                        R = typeof c != "string" && typeof c != "boolean" && typeof c != "number";
                    if (S && c && R && C.indexOf(x) < 0 && !(typeof k == "string" && x === "[object Array]")) {
                        if (!i.returnObjects && !this.options.returnObjects) {
                            this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
                            var L = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(h, c, ce(ce({}, i), {}, {
                                ns: d
                            })) : "key '".concat(f, " (").concat(this.language, ")' returned an object instead of string.");
                            return l ? (p.res = L, p) : L
                        }
                        if (u) {
                            var V = x === "[object Array]",
                                Y = V ? [] : {},
                                K = V ? v : h;
                            for (var Re in c)
                                if (Object.prototype.hasOwnProperty.call(c, Re)) {
                                    var Dt = "".concat(K).concat(u).concat(Re);
                                    Y[Re] = this.translate(Dt, ce(ce({}, i), {
                                        joinArrays: !1,
                                        ns: d
                                    })), Y[Re] === Dt && (Y[Re] = c[Re])
                                } c = Y
                        }
                    } else if (S && typeof k == "string" && x === "[object Array]") c = c.join(k), c && (c = this.extendTranslation(c, o, i, a));
                    else {
                        var ke = !1,
                            xt = !1,
                            j1 = i.count !== void 0 && typeof i.count != "string",
                            La = r.hasDefaultValue(i),
                            xd = j1 ? this.pluralResolver.getSuffix(y, i.count, i) : "",
                            gn = i["defaultValue".concat(xd)] || i.defaultValue;
                        !this.isValidLookup(c) && La && (ke = !0, c = gn), this.isValidLookup(c) || (xt = !0, c = f);
                        var wd = i.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey,
                            Cd = wd && xt ? void 0 : c,
                            mn = La && gn !== c && this.options.updateMissing;
                        if (xt || ke || mn) {
                            if (this.logger.log(mn ? "updateKey" : "missingKey", y, m, f, mn ? gn : c), u) {
                                var I1 = this.resolve(f, ce(ce({}, i), {}, {
                                    keySeparator: !1
                                }));
                                I1 && I1.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")
                            }
                            var hn = [],
                                To = this.languageUtils.getFallbackCodes(this.options.fallbackLng, i.lng || this.language);
                            if (this.options.saveMissingTo === "fallback" && To && To[0])
                                for (var Aa = 0; Aa < To.length; Aa++) hn.push(To[Aa]);
                            else this.options.saveMissingTo === "all" ? hn = this.languageUtils.toResolveHierarchy(i.lng || this.language) : hn.push(i.lng || this.language);
                            var M1 = function(Tr, Ra, T) {
                                var _1 = La && T !== c ? T : Cd;
                                s.options.missingKeyHandler ? s.options.missingKeyHandler(Tr, m, Ra, _1, mn, i) : s.backendConnector && s.backendConnector.saveMissing && s.backendConnector.saveMissing(Tr, m, Ra, _1, mn, i), s.emit("missingKey", Tr, m, Ra, c)
                            };
                            this.options.saveMissing && (this.options.saveMissingPlurals && j1 ? hn.forEach(function(Ta) {
                                s.pluralResolver.getSuffixes(Ta, i).forEach(function(Tr) {
                                    M1([Ta], f + Tr, i["defaultValue".concat(Tr)] || gn)
                                })
                            }) : M1(hn, f, gn))
                        }
                        c = this.extendTranslation(c, o, i, p, a), xt && c === f && this.options.appendNamespaceToMissingKey && (c = "".concat(m, ":").concat(f)), (xt || ke) && this.options.parseMissingKeyHandler && (this.options.compatibilityAPI !== "v1" ? c = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? "".concat(m, ":").concat(f) : f, ke ? c : void 0) : c = this.options.parseMissingKeyHandler(c))
                    }
                    return l ? (p.res = c, p) : c
                }
            }, {
                key: "extendTranslation",
                value: function(o, i, a, s, l) {
                    var u = this;
                    if (this.i18nFormat && this.i18nFormat.parse) o = this.i18nFormat.parse(o, ce(ce({}, this.options.interpolation.defaultVariables), a), s.usedLng, s.usedNS, s.usedKey, {
                        resolved: s
                    });
                    else if (!a.skipInterpolation) {
                        a.interpolation && this.interpolator.init(ce(ce({}, a), {
                            interpolation: ce(ce({}, this.options.interpolation), a.interpolation)
                        }));
                        var g = typeof o == "string" && (a && a.interpolation && a.interpolation.skipOnVariables !== void 0 ? a.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables),
                            f;
                        if (g) {
                            var d = o.match(this.interpolator.nestingRegexp);
                            f = d && d.length
                        }
                        var m = a.replace && typeof a.replace != "string" ? a.replace : a;
                        if (this.options.interpolation.defaultVariables && (m = ce(ce({}, this.options.interpolation.defaultVariables), m)), o = this.interpolator.interpolate(o, m, a.lng || this.language, a), g) {
                            var y = o.match(this.interpolator.nestingRegexp),
                                w = y && y.length;
                            f < w && (a.nest = !1)
                        }!a.lng && this.options.compatibilityAPI !== "v1" && s && s.res && (a.lng = s.usedLng), a.nest !== !1 && (o = this.interpolator.nest(o, function() {
                            for (var c = arguments.length, h = new Array(c), v = 0; v < c; v++) h[v] = arguments[v];
                            return l && l[0] === h[0] && !a.context ? (u.logger.warn("It seems you are nesting recursively key: ".concat(h[0], " in key: ").concat(i[0])), null) : u.translate.apply(u, h.concat([i]))
                        }, a)), a.interpolation && this.interpolator.reset()
                    }
                    var E = a.postProcess || this.options.postProcess,
                        p = typeof E == "string" ? [E] : E;
                    return o != null && p && p.length && a.applyPostProcessor !== !1 && (o = nu.handle(p, o, i, this.options && this.options.postProcessPassResolved ? ce({
                        i18nResolved: s
                    }, a) : a, this)), o
                }
            }, {
                key: "resolve",
                value: function(o) {
                    var i = this,
                        a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                        s, l, u, g, f;
                    return typeof o == "string" && (o = [o]), o.forEach(function(d) {
                        if (!i.isValidLookup(s)) {
                            var m = i.extractFromKey(d, a),
                                y = m.key;
                            l = y;
                            var w = m.namespaces;
                            i.options.fallbackNS && (w = w.concat(i.options.fallbackNS));
                            var E = a.count !== void 0 && typeof a.count != "string",
                                p = E && !a.ordinal && a.count === 0 && i.pluralResolver.shouldUseIntlApi(),
                                c = a.context !== void 0 && (typeof a.context == "string" || typeof a.context == "number") && a.context !== "",
                                h = a.lngs ? a.lngs : i.languageUtils.toResolveHierarchy(a.lng || i.language, a.fallbackLng);
                            w.forEach(function(v) {
                                i.isValidLookup(s) || (f = v, !U1["".concat(h[0], "-").concat(v)] && i.utils && i.utils.hasLoadedNamespace && !i.utils.hasLoadedNamespace(f) && (U1["".concat(h[0], "-").concat(v)] = !0, i.logger.warn('key "'.concat(l, '" for languages "').concat(h.join(", "), `" won't get resolved as namespace "`).concat(f, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), h.forEach(function(x) {
                                    if (!i.isValidLookup(s)) {
                                        g = x;
                                        var C = [y];
                                        if (i.i18nFormat && i.i18nFormat.addLookupKeys) i.i18nFormat.addLookupKeys(C, y, x, v, a);
                                        else {
                                            var k;
                                            E && (k = i.pluralResolver.getSuffix(x, a.count, a));
                                            var S = "".concat(i.options.pluralSeparator, "zero");
                                            if (E && (C.push(y + k), p && C.push(y + S)), c) {
                                                var R = "".concat(y).concat(i.options.contextSeparator).concat(a.context);
                                                C.push(R), E && (C.push(R + k), p && C.push(R + S))
                                            }
                                        }
                                        for (var L; L = C.pop();) i.isValidLookup(s) || (u = L, s = i.getResource(x, v, L, a))
                                    }
                                }))
                            })
                        }
                    }), {
                        res: s,
                        usedKey: l,
                        exactUsedKey: u,
                        usedLng: g,
                        usedNS: f
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
        }(Gt);

    function Ma(e) {
        return e.charAt(0).toUpperCase() + e.slice(1)
    }
    var W1 = function() {
            function e(t) {
                Se(this, e), this.options = t, this.supportedLngs = this.options.supportedLngs || !1, this.logger = ft.create("languageUtils")
            }
            return Pe(e, [{
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
                        }) : o.length === 2 ? (o[0] = o[0].toLowerCase(), o[1] = o[1].toUpperCase(), n.indexOf(o[1].toLowerCase()) > -1 && (o[1] = Ma(o[1].toLowerCase()))) : o.length === 3 && (o[0] = o[0].toLowerCase(), o[1].length === 2 && (o[1] = o[1].toUpperCase()), o[0] !== "sgn" && o[2].length === 2 && (o[2] = o[2].toUpperCase()), n.indexOf(o[1].toLowerCase()) > -1 && (o[1] = Ma(o[1].toLowerCase())), n.indexOf(o[2].toLowerCase()) > -1 && (o[2] = Ma(o[2].toLowerCase()))), o.join("-")
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
        zd = [{
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
        Fd = {
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
        Ud = ["v1", "v2", "v3"],
        K1 = {
            zero: 0,
            one: 1,
            two: 2,
            few: 3,
            many: 4,
            other: 5
        };

    function Zd() {
        var e = {};
        return zd.forEach(function(t) {
            t.lngs.forEach(function(r) {
                e[r] = {
                    numbers: t.nr,
                    plurals: Fd[t.fc]
                }
            })
        }), e
    }
    var Wd = function() {
        function e(t) {
            var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            Se(this, e), this.languageUtils = t, this.options = r, this.logger = ft.create("pluralResolver"), (!this.options.compatibilityJSON || this.options.compatibilityJSON === "v4") && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = Zd()
        }
        return Pe(e, [{
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
                    return K1[a] - K1[s]
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
                return !Ud.includes(this.options.compatibilityJSON)
            }
        }]), e
    }();

    function Q1(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function(o) {
                return Object.getOwnPropertyDescriptor(e, o).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function qe(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t] != null ? arguments[t] : {};
            t % 2 ? Q1(Object(r), !0).forEach(function(n) {
                q(e, n, r[n])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Q1(Object(r)).forEach(function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
            })
        }
        return e
    }

    function J1(e, t, r) {
        var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".",
            o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0,
            i = jd(e, t, r);
        return !i && o && typeof r == "string" && (i = Mo(e, r, n), i === void 0 && (i = Mo(t, r, n))), i
    }
    var Kd = function() {
        function e() {
            var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            Se(this, e), this.logger = ft.create("interpolator"), this.options = t, this.format = t.interpolation && t.interpolation.format || function(r) {
                return r
            }, this.init(t)
        }
        return Pe(e, [{
            key: "init",
            value: function() {
                var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                r.interpolation || (r.interpolation = {
                    escapeValue: !0
                });
                var n = r.interpolation;
                this.escape = n.escape !== void 0 ? n.escape : Md, this.escapeValue = n.escapeValue !== void 0 ? n.escapeValue : !0, this.useRawValueToEscape = n.useRawValueToEscape !== void 0 ? n.useRawValueToEscape : !1, this.prefix = n.prefix ? Vr(n.prefix) : n.prefixEscaped || "{{", this.suffix = n.suffix ? Vr(n.suffix) : n.suffixEscaped || "}}", this.formatSeparator = n.formatSeparator ? n.formatSeparator : n.formatSeparator || ",", this.unescapePrefix = n.unescapeSuffix ? "" : n.unescapePrefix || "-", this.unescapeSuffix = this.unescapePrefix ? "" : n.unescapeSuffix || "", this.nestingPrefix = n.nestingPrefix ? Vr(n.nestingPrefix) : n.nestingPrefixEscaped || Vr("$t("), this.nestingSuffix = n.nestingSuffix ? Vr(n.nestingSuffix) : n.nestingSuffixEscaped || Vr(")"), this.nestingOptionsSeparator = n.nestingOptionsSeparator ? n.nestingOptionsSeparator : n.nestingOptionsSeparator || ",", this.maxReplaces = n.maxReplaces ? n.maxReplaces : 1e3, this.alwaysFormat = n.alwaysFormat !== void 0 ? n.alwaysFormat : !1, this.resetRegExp()
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
                    s, l, u, g = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};

                function f(E) {
                    return E.replace(/\$/g, "$$$$")
                }
                var d = function(p) {
                    if (p.indexOf(a.formatSeparator) < 0) {
                        var c = J1(n, g, p, a.options.keySeparator, a.options.ignoreJSONStructure);
                        return a.alwaysFormat ? a.format(c, void 0, o, qe(qe(qe({}, i), n), {}, {
                            interpolationkey: p
                        })) : c
                    }
                    var h = p.split(a.formatSeparator),
                        v = h.shift().trim(),
                        x = h.join(a.formatSeparator).trim();
                    return a.format(J1(n, g, v, a.options.keySeparator, a.options.ignoreJSONStructure), x, o, qe(qe(qe({}, i), n), {}, {
                        interpolationkey: v
                    }))
                };
                this.resetRegExp();
                var m = i && i.missingInterpolationHandler || this.options.missingInterpolationHandler,
                    y = i && i.interpolation && i.interpolation.skipOnVariables !== void 0 ? i.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables,
                    w = [{
                        regex: this.regexpUnescape,
                        safeValue: function(p) {
                            return f(p)
                        }
                    }, {
                        regex: this.regexp,
                        safeValue: function(p) {
                            return a.escapeValue ? f(a.escape(p)) : f(p)
                        }
                    }];
                return w.forEach(function(E) {
                    for (u = 0; s = E.regex.exec(r);) {
                        var p = s[1].trim();
                        if (l = d(p), l === void 0)
                            if (typeof m == "function") {
                                var c = m(r, s, i);
                                l = typeof c == "string" ? c : ""
                            } else if (i && Object.prototype.hasOwnProperty.call(i, p)) l = "";
                        else if (y) {
                            l = s[0];
                            continue
                        } else a.logger.warn("missed to pass in variable ".concat(p, " for interpolating ").concat(r)), l = "";
                        else typeof l != "string" && !a.useRawValueToEscape && (l = G1(l));
                        var h = E.safeValue(l);
                        if (r = r.replace(s[0], h), y ? (E.regex.lastIndex += l.length, E.regex.lastIndex -= s[0].length) : E.regex.lastIndex = 0, u++, u >= a.maxReplaces) break
                    }
                }), r
            }
        }, {
            key: "nest",
            value: function(r, n) {
                var o = this,
                    i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
                    a, s, l;

                function u(m, y) {
                    var w = this.nestingOptionsSeparator;
                    if (m.indexOf(w) < 0) return m;
                    var E = m.split(new RegExp("".concat(w, "[ ]*{"))),
                        p = "{".concat(E[1]);
                    m = E[0], p = this.interpolate(p, l);
                    var c = p.match(/'/g),
                        h = p.match(/"/g);
                    (c && c.length % 2 === 0 && !h || h.length % 2 !== 0) && (p = p.replace(/'/g, '"'));
                    try {
                        l = JSON.parse(p), y && (l = qe(qe({}, y), l))
                    } catch (v) {
                        return this.logger.warn("failed parsing options string in nesting for key ".concat(m), v), "".concat(m).concat(w).concat(p)
                    }
                    return delete l.defaultValue, m
                }
                for (; a = this.nestingRegexp.exec(r);) {
                    var g = [];
                    l = qe({}, i), l = l.replace && typeof l.replace != "string" ? l.replace : l, l.applyPostProcessor = !1, delete l.defaultValue;
                    var f = !1;
                    if (a[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(a[1])) {
                        var d = a[1].split(this.formatSeparator).map(function(m) {
                            return m.trim()
                        });
                        a[1] = d.shift(), g = d, f = !0
                    }
                    if (s = n(u.call(this, a[1].trim(), l), l), s && a[0] === r && typeof s != "string") return s;
                    typeof s != "string" && (s = G1(s)), s || (this.logger.warn("missed to resolve ".concat(a[1], " for nesting ").concat(r)), s = ""), f && (s = g.reduce(function(m, y) {
                        return o.format(m, y, i.lng, qe(qe({}, i), {}, {
                            interpolationkey: a[1].trim()
                        }))
                    }, s.trim())), r = r.replace(a[0], s), this.regexp.lastIndex = 0
                }
                return r
            }
        }]), e
    }();

    function Y1(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function(o) {
                return Object.getOwnPropertyDescriptor(e, o).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function wt(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t] != null ? arguments[t] : {};
            t % 2 ? Y1(Object(r), !0).forEach(function(n) {
                q(e, n, r[n])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Y1(Object(r)).forEach(function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
            })
        }
        return e
    }

    function Qd(e) {
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
                            l = Ia(s),
                            u = l[0],
                            g = l.slice(1),
                            f = g.join(":").trim().replace(/^'+|'+$/g, "");
                        r[u.trim()] || (r[u.trim()] = f), f === "false" && (r[u.trim()] = !1), f === "true" && (r[u.trim()] = !0), isNaN(f) || (r[u.trim()] = parseInt(f, 10))
                    }
                })
            }
        }
        return {
            formatName: t,
            formatOptions: r
        }
    }

    function jr(e) {
        var t = {};
        return function(n, o, i) {
            var a = o + JSON.stringify(i),
                s = t[a];
            return s || (s = e(o, i), t[a] = s), s(n)
        }
    }
    var Jd = function() {
        function e() {
            var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            Se(this, e), this.logger = ft.create("formatter"), this.options = t, this.formats = {
                number: jr(function(r, n) {
                    var o = new Intl.NumberFormat(r, wt({}, n));
                    return function(i) {
                        return o.format(i)
                    }
                }),
                currency: jr(function(r, n) {
                    var o = new Intl.NumberFormat(r, wt(wt({}, n), {}, {
                        style: "currency"
                    }));
                    return function(i) {
                        return o.format(i)
                    }
                }),
                datetime: jr(function(r, n) {
                    var o = new Intl.DateTimeFormat(r, wt({}, n));
                    return function(i) {
                        return o.format(i)
                    }
                }),
                relativetime: jr(function(r, n) {
                    var o = new Intl.RelativeTimeFormat(r, wt({}, n));
                    return function(i) {
                        return o.format(i, n.range || "day")
                    }
                }),
                list: jr(function(r, n) {
                    var o = new Intl.ListFormat(r, wt({}, n));
                    return function(i) {
                        return o.format(i)
                    }
                })
            }, this.init(t)
        }
        return Pe(e, [{
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
                this.formats[r.toLowerCase().trim()] = jr(n)
            }
        }, {
            key: "format",
            value: function(r, n, o) {
                var i = this,
                    a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
                    s = n.split(this.formatSeparator),
                    l = s.reduce(function(u, g) {
                        var f = Qd(g),
                            d = f.formatName,
                            m = f.formatOptions;
                        if (i.formats[d]) {
                            var y = u;
                            try {
                                var w = a && a.formatParams && a.formatParams[a.interpolationkey] || {},
                                    E = w.locale || w.lng || a.locale || a.lng || o;
                                y = i.formats[d](u, E, wt(wt(wt({}, m), a), w))
                            } catch (p) {
                                i.logger.warn(p)
                            }
                            return y
                        } else i.logger.warn("there was no format function for ".concat(d));
                        return u
                    }, r);
                return l
            }
        }]), e
    }();

    function q1(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function(o) {
                return Object.getOwnPropertyDescriptor(e, o).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function X1(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t] != null ? arguments[t] : {};
            t % 2 ? q1(Object(r), !0).forEach(function(n) {
                q(e, n, r[n])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : q1(Object(r)).forEach(function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
            })
        }
        return e
    }

    function Yd(e) {
        var t = qd();
        return function() {
            var n = De(e),
                o;
            if (t) {
                var i = De(this).constructor;
                o = Reflect.construct(n, arguments, i)
            } else o = n.apply(this, arguments);
            return ur(this, o)
        }
    }

    function qd() {
        if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
        if (typeof Proxy == "function") return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
        } catch {
            return !1
        }
    }

    function Xd(e, t) {
        e.pending[t] !== void 0 && (delete e.pending[t], e.pendingCount--)
    }
    var $d = function(e) {
        Rr(r, e);
        var t = Yd(r);

        function r(n, o, i) {
            var a, s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
            return Se(this, r), a = t.call(this), No && Gt.call(Ye(a)), a.backend = n, a.store = o, a.services = i, a.languageUtils = i.languageUtils, a.options = s, a.logger = ft.create("backendConnector"), a.waitingReads = [], a.maxParallelReads = s.maxParallelReads || 10, a.readingCalls = 0, a.maxRetries = s.maxRetries >= 0 ? s.maxRetries : 5, a.retryTimeout = s.retryTimeout >= 1 ? s.retryTimeout : 350, a.state = {}, a.queue = [], a.backend && a.backend.init && a.backend.init(i, s.backend, s), a
        }
        return Pe(r, [{
            key: "queueLoad",
            value: function(o, i, a, s) {
                var l = this,
                    u = {},
                    g = {},
                    f = {},
                    d = {};
                return o.forEach(function(m) {
                    var y = !0;
                    i.forEach(function(w) {
                        var E = "".concat(m, "|").concat(w);
                        !a.reload && l.store.hasResourceBundle(m, w) ? l.state[E] = 2 : l.state[E] < 0 || (l.state[E] === 1 ? g[E] === void 0 && (g[E] = !0) : (l.state[E] = 1, y = !1, g[E] === void 0 && (g[E] = !0), u[E] === void 0 && (u[E] = !0), d[w] === void 0 && (d[w] = !0)))
                    }), y || (f[m] = !0)
                }), (Object.keys(u).length || Object.keys(g).length) && this.queue.push({
                    pending: g,
                    pendingCount: Object.keys(g).length,
                    loaded: {},
                    errors: [],
                    callback: s
                }), {
                    toLoad: Object.keys(u),
                    pending: Object.keys(g),
                    toLoadLanguages: Object.keys(f),
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
                var g = {};
                this.queue.forEach(function(f) {
                    Vd(f.loaded, [l], u), Xd(f, o), i && f.errors.push(i), f.pendingCount === 0 && !f.done && (Object.keys(f.loaded).forEach(function(d) {
                        g[d] || (g[d] = {});
                        var m = f.loaded[d];
                        m.length && m.forEach(function(y) {
                            g[d][y] === void 0 && (g[d][y] = !0)
                        })
                    }), f.done = !0, f.errors.length ? f.callback(f.errors) : f.callback())
                }), this.emit("loaded", g), this.queue = this.queue.filter(function(f) {
                    return !f.done
                })
            }
        }, {
            key: "read",
            value: function(o, i, a) {
                var s = this,
                    l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0,
                    u = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout,
                    g = arguments.length > 5 ? arguments[5] : void 0;
                if (!o.length) return g(null, {});
                if (this.readingCalls >= this.maxParallelReads) {
                    this.waitingReads.push({
                        lng: o,
                        ns: i,
                        fcName: a,
                        tried: l,
                        wait: u,
                        callback: g
                    });
                    return
                }
                this.readingCalls++;
                var f = function(w, E) {
                        if (s.readingCalls--, s.waitingReads.length > 0) {
                            var p = s.waitingReads.shift();
                            s.read(p.lng, p.ns, p.fcName, p.tried, p.wait, p.callback)
                        }
                        if (w && E && l < s.maxRetries) {
                            setTimeout(function() {
                                s.read.call(s, o, i, a, l + 1, u * 2, g)
                            }, u);
                            return
                        }
                        g(w, E)
                    },
                    d = this.backend[a].bind(this.backend);
                if (d.length === 2) {
                    try {
                        var m = d(o, i);
                        m && typeof m.then == "function" ? m.then(function(y) {
                            return f(null, y)
                        }).catch(f) : f(null, m)
                    } catch (y) {
                        f(y)
                    }
                    return
                }
                return d(o, i, f)
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
                u.toLoad.forEach(function(g) {
                    a.loadOne(g)
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
                this.read(l, u, "read", void 0, void 0, function(g, f) {
                    g && i.logger.warn("".concat(a, "loading namespace ").concat(u, " for language ").concat(l, " failed"), g), !g && f && i.logger.log("".concat(a, "loaded namespace ").concat(u, " for language ").concat(l), f), i.loaded(o, g, f)
                })
            }
        }, {
            key: "saveMissing",
            value: function(o, i, a, s, l) {
                var u = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {},
                    g = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : function() {};
                if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(i)) {
                    this.logger.warn('did not save key "'.concat(a, '" as the namespace "').concat(i, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
                    return
                }
                if (!(a == null || a === "")) {
                    if (this.backend && this.backend.create) {
                        var f = X1(X1({}, u), {}, {
                                isUpdate: l
                            }),
                            d = this.backend.create.bind(this.backend);
                        if (d.length < 6) try {
                            var m;
                            d.length === 5 ? m = d(o, i, a, s, f) : m = d(o, i, a, s), m && typeof m.then == "function" ? m.then(function(y) {
                                return g(null, y)
                            }).catch(g) : g(null, m)
                        } catch (y) {
                            g(y)
                        } else d(o, i, a, s, g, f)
                    }!o || !o[0] || this.store.addResource(o[0], i, a, s)
                }
            }
        }]), r
    }(Gt);

    function $1() {
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
                if (Q(t[1]) === "object" && (r = t[1]), typeof t[1] == "string" && (r.defaultValue = t[1]), typeof t[2] == "string" && (r.tDescription = t[2]), Q(t[2]) === "object" || Q(t[3]) === "object") {
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

    function eu(e) {
        return typeof e.ns == "string" && (e.ns = [e.ns]), typeof e.fallbackLng == "string" && (e.fallbackLng = [e.fallbackLng]), typeof e.fallbackNS == "string" && (e.fallbackNS = [e.fallbackNS]), e.supportedLngs && e.supportedLngs.indexOf("cimode") < 0 && (e.supportedLngs = e.supportedLngs.concat(["cimode"])), e
    }

    function tu(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function(o) {
                return Object.getOwnPropertyDescriptor(e, o).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function ct(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t] != null ? arguments[t] : {};
            t % 2 ? tu(Object(r), !0).forEach(function(n) {
                q(e, n, r[n])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : tu(Object(r)).forEach(function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
            })
        }
        return e
    }

    function e2(e) {
        var t = t2();
        return function() {
            var n = De(e),
                o;
            if (t) {
                var i = De(this).constructor;
                o = Reflect.construct(n, arguments, i)
            } else o = n.apply(this, arguments);
            return ur(this, o)
        }
    }

    function t2() {
        if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
        if (typeof Proxy == "function") return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
        } catch {
            return !1
        }
    }

    function jo() {}

    function r2(e) {
        var t = Object.getOwnPropertyNames(Object.getPrototypeOf(e));
        t.forEach(function(r) {
            typeof e[r] == "function" && (e[r] = e[r].bind(e))
        })
    }
    var _o = function(e) {
        Rr(r, e);
        var t = e2(r);

        function r() {
            var n, o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
                i = arguments.length > 1 ? arguments[1] : void 0;
            if (Se(this, r), n = t.call(this), No && Gt.call(Ye(n)), n.options = eu(o), n.services = {}, n.logger = ft, n.modules = {
                    external: []
                }, r2(Ye(n)), i && !n.isInitialized && !o.isClone) {
                if (!n.options.initImmediate) return n.init(o, i), ur(n, Ye(n));
                setTimeout(function() {
                    n.init(o, i)
                }, 0)
            }
            return n
        }
        return Pe(r, [{
            key: "init",
            value: function() {
                var o = this,
                    i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
                    a = arguments.length > 1 ? arguments[1] : void 0;
                typeof i == "function" && (a = i, i = {}), !i.defaultNS && i.defaultNS !== !1 && i.ns && (typeof i.ns == "string" ? i.defaultNS = i.ns : i.ns.indexOf("translation") < 0 && (i.defaultNS = i.ns[0]));
                var s = $1();
                this.options = ct(ct(ct({}, s), this.options), eu(i)), this.options.compatibilityAPI !== "v1" && (this.options.interpolation = ct(ct({}, s.interpolation), this.options.interpolation)), i.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = i.keySeparator), i.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = i.nsSeparator);

                function l(p) {
                    return p ? typeof p == "function" ? new p : p : null
                }
                if (!this.options.isClone) {
                    this.modules.logger ? ft.init(l(this.modules.logger), this.options) : ft.init(null, this.options);
                    var u;
                    this.modules.formatter ? u = this.modules.formatter : typeof Intl < "u" && (u = Jd);
                    var g = new W1(this.options);
                    this.store = new Dd(this.options.resources, this.options);
                    var f = this.services;
                    f.logger = ft, f.resourceStore = this.store, f.languageUtils = g, f.pluralResolver = new Wd(g, {
                        prepend: this.options.pluralSeparator,
                        compatibilityJSON: this.options.compatibilityJSON,
                        simplifyPluralSuffix: this.options.simplifyPluralSuffix
                    }), u && (!this.options.interpolation.format || this.options.interpolation.format === s.interpolation.format) && (f.formatter = l(u), f.formatter.init(f, this.options), this.options.interpolation.format = f.formatter.format.bind(f.formatter)), f.interpolator = new Kd(this.options), f.utils = {
                        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
                    }, f.backendConnector = new $d(l(this.modules.backend), f.resourceStore, f, this.options), f.backendConnector.on("*", function(p) {
                        for (var c = arguments.length, h = new Array(c > 1 ? c - 1 : 0), v = 1; v < c; v++) h[v - 1] = arguments[v];
                        o.emit.apply(o, [p].concat(h))
                    }), this.modules.languageDetector && (f.languageDetector = l(this.modules.languageDetector), f.languageDetector.init && f.languageDetector.init(f, this.options.detection, this.options)), this.modules.i18nFormat && (f.i18nFormat = l(this.modules.i18nFormat), f.i18nFormat.init && f.i18nFormat.init(this)), this.translator = new Z1(this.services, this.options), this.translator.on("*", function(p) {
                        for (var c = arguments.length, h = new Array(c > 1 ? c - 1 : 0), v = 1; v < c; v++) h[v - 1] = arguments[v];
                        o.emit.apply(o, [p].concat(h))
                    }), this.modules.external.forEach(function(p) {
                        p.init && p.init(o)
                    })
                }
                if (this.format = this.options.interpolation.format, a || (a = jo), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
                    var d = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
                    d.length > 0 && d[0] !== "dev" && (this.options.lng = d[0])
                }!this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined");
                var m = ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"];
                m.forEach(function(p) {
                    o[p] = function() {
                        var c;
                        return (c = o.store)[p].apply(c, arguments)
                    }
                });
                var y = ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"];
                y.forEach(function(p) {
                    o[p] = function() {
                        var c;
                        return (c = o.store)[p].apply(c, arguments), o
                    }
                });
                var w = kn(),
                    E = function() {
                        var c = function(v, x) {
                            o.isInitialized && !o.initializedStoreOnce && o.logger.warn("init: i18next is already initialized. You should call init just once!"), o.isInitialized = !0, o.options.isClone || o.logger.log("initialized", o.options), o.emit("initialized", o.options), w.resolve(x), a(v, x)
                        };
                        if (o.languages && o.options.compatibilityAPI !== "v1" && !o.isInitialized) return c(null, o.t.bind(o));
                        o.changeLanguage(o.options.lng, c)
                    };
                return this.options.resources || !this.options.initImmediate ? E() : setTimeout(E, 0), w
            }
        }, {
            key: "loadResources",
            value: function(o) {
                var i = this,
                    a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : jo,
                    s = a,
                    l = typeof o == "string" ? o : this.language;
                if (typeof o == "function" && (s = o), !this.options.resources || this.options.partialBundledLanguages) {
                    if (l && l.toLowerCase() === "cimode") return s();
                    var u = [],
                        g = function(m) {
                            if (m) {
                                var y = i.services.languageUtils.toResolveHierarchy(m);
                                y.forEach(function(w) {
                                    u.indexOf(w) < 0 && u.push(w)
                                })
                            }
                        };
                    if (l) g(l);
                    else {
                        var f = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
                        f.forEach(function(d) {
                            return g(d)
                        })
                    }
                    this.options.preload && this.options.preload.forEach(function(d) {
                        return g(d)
                    }), this.services.backendConnector.load(u, this.options.ns, function(d) {
                        !d && !i.resolvedLanguage && i.language && i.setResolvedLanguage(i.language), s(d)
                    })
                } else s(null)
            }
        }, {
            key: "reloadResources",
            value: function(o, i, a) {
                var s = kn();
                return o || (o = this.languages), i || (i = this.options.ns), a || (a = jo), this.services.backendConnector.reload(o, i, function(l) {
                    s.resolve(), a(l)
                }), s
            }
        }, {
            key: "use",
            value: function(o) {
                if (!o) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
                if (!o.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
                return o.type === "backend" && (this.modules.backend = o), (o.type === "logger" || o.log && o.warn && o.error) && (this.modules.logger = o), o.type === "languageDetector" && (this.modules.languageDetector = o), o.type === "i18nFormat" && (this.modules.i18nFormat = o), o.type === "postProcessor" && nu.addPostProcessor(o), o.type === "formatter" && (this.modules.formatter = o), o.type === "3rdParty" && this.modules.external.push(o), this
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
                var s = kn();
                this.emit("languageChanging", o);
                var l = function(d) {
                        a.language = d, a.languages = a.services.languageUtils.toResolveHierarchy(d), a.resolvedLanguage = void 0, a.setResolvedLanguage(d)
                    },
                    u = function(d, m) {
                        m ? (l(m), a.translator.changeLanguage(m), a.isLanguageChangingTo = void 0, a.emit("languageChanged", m), a.logger.log("languageChanged", m)) : a.isLanguageChangingTo = void 0, s.resolve(function() {
                            return a.t.apply(a, arguments)
                        }), i && i(d, function() {
                            return a.t.apply(a, arguments)
                        })
                    },
                    g = function(d) {
                        !o && !d && a.services.languageDetector && (d = []);
                        var m = typeof d == "string" ? d : a.services.languageUtils.getBestMatchFromCodes(d);
                        m && (a.language || l(m), a.translator.language || a.translator.changeLanguage(m), a.services.languageDetector && a.services.languageDetector.cacheUserLanguage && a.services.languageDetector.cacheUserLanguage(m)), a.loadResources(m, function(y) {
                            u(y, m)
                        })
                    };
                return !o && this.services.languageDetector && !this.services.languageDetector.async ? g(this.services.languageDetector.detect()) : !o && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(g) : this.services.languageDetector.detect(g) : g(o), s
            }
        }, {
            key: "getFixedT",
            value: function(o, i, a) {
                var s = this,
                    l = function u(g, f) {
                        var d;
                        if (Q(f) !== "object") {
                            for (var m = arguments.length, y = new Array(m > 2 ? m - 2 : 0), w = 2; w < m; w++) y[w - 2] = arguments[w];
                            d = s.options.overloadTranslationOptionHandler([g, f].concat(y))
                        } else d = ct({}, f);
                        d.lng = d.lng || u.lng, d.lngs = d.lngs || u.lngs, d.ns = d.ns || u.ns, d.keyPrefix = d.keyPrefix || a || u.keyPrefix;
                        var E = s.options.keySeparator || ".",
                            p;
                        return d.keyPrefix && Array.isArray(g) ? p = g.map(function(c) {
                            return "".concat(d.keyPrefix).concat(E).concat(c)
                        }) : p = d.keyPrefix ? "".concat(d.keyPrefix).concat(E).concat(g) : g, s.t(p, d)
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
                var g = function(m, y) {
                    var w = i.services.backendConnector.state["".concat(m, "|").concat(y)];
                    return w === -1 || w === 2
                };
                if (a.precheck) {
                    var f = a.precheck(this, g);
                    if (f !== void 0) return f
                }
                return !!(this.hasResourceBundle(s, o) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || g(s, o) && (!l || g(u, o)))
            }
        }, {
            key: "loadNamespaces",
            value: function(o, i) {
                var a = this,
                    s = kn();
                return this.options.ns ? (typeof o == "string" && (o = [o]), o.forEach(function(l) {
                    a.options.ns.indexOf(l) < 0 && a.options.ns.push(l)
                }), this.loadResources(function(l) {
                    s.resolve(), i && i(l)
                }), s) : (i && i(), Promise.resolve())
            }
        }, {
            key: "loadLanguages",
            value: function(o, i) {
                var a = kn();
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
                    a = this.services && this.services.languageUtils || new W1($1());
                return i.indexOf(a.getLanguagePartFromCode(o)) > -1 || o.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr"
            }
        }, {
            key: "cloneInstance",
            value: function() {
                var o = this,
                    i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
                    a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : jo,
                    s = ct(ct(ct({}, this.options), i), {
                        isClone: !0
                    }),
                    l = new r(s);
                (i.debug !== void 0 || i.prefix !== void 0) && (l.logger = l.logger.clone(i));
                var u = ["store", "services", "language"];
                return u.forEach(function(g) {
                    l[g] = o[g]
                }), l.services = ct({}, this.services), l.services.utils = {
                    hasLoadedNamespace: l.hasLoadedNamespace.bind(l)
                }, l.translator = new Z1(l.services, l.options), l.translator.on("*", function(g) {
                    for (var f = arguments.length, d = new Array(f > 1 ? f - 1 : 0), m = 1; m < f; m++) d[m - 1] = arguments[m];
                    l.emit.apply(l, [g].concat(d))
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
    }(Gt);
    q(_o, "createInstance", function() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
            t = arguments.length > 1 ? arguments[1] : void 0;
        return new _o(e, t)
    });
    var oe = _o.createInstance();
    oe.createInstance = _o.createInstance;
    var t8 = oe.createInstance,
        r8 = oe.dir,
        n8 = oe.init,
        o8 = oe.loadResources,
        i8 = oe.reloadResources,
        a8 = oe.use,
        s8 = oe.changeLanguage,
        l8 = oe.getFixedT,
        u8 = oe.t,
        c8 = oe.exists,
        f8 = oe.setDefaultNamespace,
        p8 = oe.hasLoadedNamespace,
        d8 = oe.loadNamespaces,
        g8 = oe.loadLanguages;
    var P2 = M(ve(), 1);
    var Ua = M(ve(), 1);
    var y2 = M(vu());

    function xu() {
        if (console && console.warn) {
            for (var e, t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
            typeof r[0] == "string" && (r[0] = "react-i18next:: ".concat(r[0])), (e = console).warn.apply(e, r)
        }
    }
    var yu = {};

    function Pn() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        typeof t[0] == "string" && yu[t[0]] || (typeof t[0] == "string" && (yu[t[0]] = new Date), xu.apply(void 0, t))
    }
    var wu = function(t, r) {
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

    function Ba(e, t, r) {
        e.loadNamespaces(t, wu(e, r))
    }

    function za(e, t, r, n) {
        typeof r == "string" && (r = [r]), r.forEach(function(o) {
            e.options.ns.indexOf(o) < 0 && e.options.ns.push(o)
        }), e.loadLanguages(t, wu(e, n))
    }

    function x2(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
            n = t.languages[0],
            o = t.options ? t.options.fallbackLng : !1,
            i = t.languages[t.languages.length - 1];
        if (n.toLowerCase() === "cimode") return !0;
        var a = function(l, u) {
            var g = t.services.backendConnector.state["".concat(l, "|").concat(u)];
            return g === -1 || g === 2
        };
        return r.bindI18n && r.bindI18n.indexOf("languageChanging") > -1 && t.services.backendConnector.backend && t.isLanguageChangingTo && !a(t.isLanguageChangingTo, e) ? !1 : !!(t.hasResourceBundle(n, e) || !t.services.backendConnector.backend || t.options.resources && !t.options.partialBundledLanguages || a(n, e) && (!o || a(i, e)))
    }

    function Cu(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        if (!t.languages || !t.languages.length) return Pn("i18n.languages were undefined or empty", t.languages), !0;
        var n = t.options.ignoreJSONStructure !== void 0;
        return n ? t.hasLoadedNamespace(e, {
            lng: r.lng,
            precheck: function(i, a) {
                if (r.bindI18n && r.bindI18n.indexOf("languageChanging") > -1 && i.services.backendConnector.backend && i.isLanguageChangingTo && !a(i.isLanguageChangingTo, e)) return !1
            }
        }) : x2(e, t, r)
    }
    var w2 = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
        C2 = {
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
        k2 = function(t) {
            return C2[t]
        },
        ku = function(t) {
            return t.replace(w2, k2)
        };

    function Su(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function(o) {
                return Object.getOwnPropertyDescriptor(e, o).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function Pu(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t] != null ? arguments[t] : {};
            t % 2 ? Su(Object(r), !0).forEach(function(n) {
                q(e, n, r[n])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Su(Object(r)).forEach(function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
            })
        }
        return e
    }
    var Fa = {
        bindI18n: "languageChanged",
        bindI18nStore: "",
        transEmptyNodeValue: "",
        transSupportBasicHtmlNodes: !0,
        transWrapTextNodes: "",
        transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
        useSuspense: !0,
        unescape: ku
    };

    function Go() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        Fa = Pu(Pu({}, Fa), e)
    }

    function En() {
        return Fa
    }
    var Eu;

    function Bo(e) {
        Eu = e
    }

    function cr() {
        return Eu
    }
    var Ou = M(ve(), 1);
    var Fo = {
        type: "3rdParty",
        init: function(t) {
            Go(t.options.react), Bo(t)
        }
    };
    var Mr = (0, Ou.createContext)(),
        Lu = function() {
            function e() {
                Se(this, e), this.usedNamespaces = {}
            }
            return Pe(e, [{
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

    function Za(e, t) {
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
            } catch (g) {
                u = !0, o = g
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

    function On(e, t) {
        return xn(e) || Za(e, t) || wn(e, t) || Cn()
    }
    var Ge = M(ve(), 1);

    function Au(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function(o) {
                return Object.getOwnPropertyDescriptor(e, o).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function Wa(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t] != null ? arguments[t] : {};
            t % 2 ? Au(Object(r), !0).forEach(function(n) {
                q(e, n, r[n])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Au(Object(r)).forEach(function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
            })
        }
        return e
    }
    var E2 = function(t, r) {
        var n = (0, Ge.useRef)();
        return (0, Ge.useEffect)(function() {
            n.current = r ? n.current : t
        }, [t, r]), n.current
    };

    function _r(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
            r = t.i18n,
            n = (0, Ge.useContext)(Mr) || {},
            o = n.i18n,
            i = n.defaultNS,
            a = r || o || cr();
        if (a && !a.reportNamespaces && (a.reportNamespaces = new Lu), !a) {
            Pn("You will need to pass in an i18next instance by using initReactI18next");
            var s = function(R, L) {
                    return typeof L == "string" ? L : L && Q(L) === "object" && typeof L.defaultValue == "string" ? L.defaultValue : Array.isArray(R) ? R[R.length - 1] : R
                },
                l = [s, {}, !1];
            return l.t = s, l.i18n = {}, l.ready = !1, l
        }
        a.options.react && a.options.react.wait !== void 0 && Pn("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
        var u = Wa(Wa(Wa({}, En()), a.options.react), t),
            g = u.useSuspense,
            f = u.keyPrefix,
            d = e || i || a.options && a.options.defaultNS;
        d = typeof d == "string" ? [d] : d || ["translation"], a.reportNamespaces.addUsedNamespaces && a.reportNamespaces.addUsedNamespaces(d);
        var m = (a.isInitialized || a.initializedStoreOnce) && d.every(function(S) {
            return Cu(S, a, u)
        });

        function y() {
            return a.getFixedT(t.lng || null, u.nsMode === "fallback" ? d : d[0], f)
        }
        var w = (0, Ge.useState)(y),
            E = On(w, 2),
            p = E[0],
            c = E[1],
            h = d.join();
        t.lng && (h = "".concat(t.lng).concat(h));
        var v = E2(h),
            x = (0, Ge.useRef)(!0);
        (0, Ge.useEffect)(function() {
            var S = u.bindI18n,
                R = u.bindI18nStore;
            x.current = !0, !m && !g && (t.lng ? za(a, t.lng, d, function() {
                x.current && c(y)
            }) : Ba(a, d, function() {
                x.current && c(y)
            })), m && v && v !== h && x.current && c(y);

            function L() {
                x.current && c(y)
            }
            return S && a && a.on(S, L), R && a && a.store.on(R, L),
                function() {
                    x.current = !1, S && a && S.split(" ").forEach(function(V) {
                        return a.off(V, L)
                    }), R && a && R.split(" ").forEach(function(V) {
                        return a.store.off(V, L)
                    })
                }
        }, [a, h]);
        var C = (0, Ge.useRef)(!0);
        (0, Ge.useEffect)(function() {
            x.current && !C.current && c(y), C.current = !1
        }, [a, f]);
        var k = [p, a, m];
        if (k.t = p, k.i18n = a, k.ready = m, m || !m && !g) return k;
        throw new Promise(function(S) {
            t.lng ? za(a, t.lng, d, function() {
                return S()
            }) : Ba(a, d, function() {
                return S()
            })
        })
    }
    var Tu = M(ve(), 1);
    var Ru = M(ve(), 1);
    var R2 = M(ve(), 1);
    var L2 = M(ve(), 1);
    oe.use(Fo).init({
        resources: {},
        lng: "en",
        fallbackLng: "en",
        interpolation: {
            escapeValue: !1
        }
    });
    var vd = M(ep());
    var Je = M(ve());
    var j5 = typeof global == "object" && global && global.Object === Object && global,
        ua = j5;
    var I5 = typeof self == "object" && self && self.Object === Object && self,
        M5 = ua || I5 || Function("return this")(),
        re = M5;
    var _5 = re.Symbol,
        pn = _5;
    var tp = Object.prototype,
        N5 = tp.hasOwnProperty,
        b5 = tp.toString,
        xo = pn ? pn.toStringTag : void 0;

    function H5(e) {
        var t = N5.call(e, xo),
            r = e[xo];
        try {
            e[xo] = void 0;
            var n = !0
        } catch {}
        var o = b5.call(e);
        return n && (t ? e[xo] = r : delete e[xo]), o
    }
    var rp = H5;
    var D5 = Object.prototype,
        G5 = D5.toString;

    function B5(e) {
        return G5.call(e)
    }
    var np = B5;
    var z5 = "[object Null]",
        F5 = "[object Undefined]",
        op = pn ? pn.toStringTag : void 0;

    function U5(e) {
        return e == null ? e === void 0 ? F5 : z5 : op && op in Object(e) ? rp(e) : np(e)
    }
    var at = U5;

    function Z5(e) {
        return e != null && typeof e == "object"
    }
    var lr = Z5;
    var W5 = "[object Symbol]";

    function K5(e) {
        return typeof e == "symbol" || lr(e) && at(e) == W5
    }
    var ip = K5;
    var Q5 = Array.isArray,
        ap = Q5;
    var J5 = /\s/;

    function Y5(e) {
        for (var t = e.length; t-- && J5.test(e.charAt(t)););
        return t
    }
    var sp = Y5;
    var q5 = /^\s+/;

    function X5(e) {
        return e && e.slice(0, sp(e) + 1).replace(q5, "")
    }
    var lp = X5;

    function $5(e) {
        var t = typeof e;
        return e != null && (t == "object" || t == "function")
    }
    var Vt = $5;
    var up = 0 / 0,
        e4 = /^[-+]0x[0-9a-f]+$/i,
        t4 = /^0b[01]+$/i,
        r4 = /^0o[0-7]+$/i,
        n4 = parseInt;

    function o4(e) {
        if (typeof e == "number") return e;
        if (ip(e)) return up;
        if (Vt(e)) {
            var t = typeof e.valueOf == "function" ? e.valueOf() : e;
            e = Vt(t) ? t + "" : t
        }
        if (typeof e != "string") return e === 0 ? e : +e;
        e = lp(e);
        var r = t4.test(e);
        return r || r4.test(e) ? n4(e.slice(2), r ? 2 : 8) : e4.test(e) ? up : +e
    }
    var s1 = o4;
    var i4 = "[object AsyncFunction]",
        a4 = "[object Function]",
        s4 = "[object GeneratorFunction]",
        l4 = "[object Proxy]";

    function u4(e) {
        if (!Vt(e)) return !1;
        var t = at(e);
        return t == a4 || t == s4 || t == i4 || t == l4
    }
    var ca = u4;
    var c4 = re["__core-js_shared__"],
        fa = c4;
    var cp = function() {
        var e = /[^.]+$/.exec(fa && fa.keys && fa.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : ""
    }();

    function f4(e) {
        return !!cp && cp in e
    }
    var fp = f4;
    var p4 = Function.prototype,
        d4 = p4.toString;

    function g4(e) {
        if (e != null) {
            try {
                return d4.call(e)
            } catch {}
            try {
                return e + ""
            } catch {}
        }
        return ""
    }
    var jt = g4;
    var m4 = /[\\^$.*+?()[\]{}|]/g,
        h4 = /^\[object .+?Constructor\]$/,
        v4 = Function.prototype,
        y4 = Object.prototype,
        x4 = v4.toString,
        w4 = y4.hasOwnProperty,
        C4 = RegExp("^" + x4.call(w4).replace(m4, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

    function k4(e) {
        if (!Vt(e) || fp(e)) return !1;
        var t = ca(e) ? C4 : h4;
        return t.test(jt(e))
    }
    var pp = k4;

    function S4(e, t) {
        return e?.[t]
    }
    var dp = S4;

    function P4(e, t) {
        var r = dp(e, t);
        return pp(r) ? r : void 0
    }
    var yt = P4;
    var E4 = yt(re, "WeakMap"),
        pa = E4;
    var O4 = 9007199254740991;

    function L4(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= O4
    }
    var da = L4;

    function A4(e) {
        return e != null && da(e.length) && !ca(e)
    }
    var gp = A4;
    var T4 = Object.prototype;

    function R4(e) {
        var t = e && e.constructor,
            r = typeof t == "function" && t.prototype || T4;
        return e === r
    }
    var ga = R4;
    var V4 = "[object Arguments]";

    function j4(e) {
        return lr(e) && at(e) == V4
    }
    var l1 = j4;
    var mp = Object.prototype,
        I4 = mp.hasOwnProperty,
        M4 = mp.propertyIsEnumerable,
        _4 = l1(function() {
            return arguments
        }()) ? l1 : function(e) {
            return lr(e) && I4.call(e, "callee") && !M4.call(e, "callee")
        },
        hp = _4;

    function N4() {
        return !1
    }
    var vp = N4;
    var wp = typeof exports == "object" && exports && !exports.nodeType && exports,
        yp = wp && typeof module == "object" && module && !module.nodeType && module,
        b4 = yp && yp.exports === wp,
        xp = b4 ? re.Buffer : void 0,
        H4 = xp ? xp.isBuffer : void 0,
        D4 = H4 || vp,
        Cp = D4;
    var G4 = "[object Arguments]",
        B4 = "[object Array]",
        z4 = "[object Boolean]",
        F4 = "[object Date]",
        U4 = "[object Error]",
        Z4 = "[object Function]",
        W4 = "[object Map]",
        K4 = "[object Number]",
        Q4 = "[object Object]",
        J4 = "[object RegExp]",
        Y4 = "[object Set]",
        q4 = "[object String]",
        X4 = "[object WeakMap]",
        $4 = "[object ArrayBuffer]",
        e6 = "[object DataView]",
        t6 = "[object Float32Array]",
        r6 = "[object Float64Array]",
        n6 = "[object Int8Array]",
        o6 = "[object Int16Array]",
        i6 = "[object Int32Array]",
        a6 = "[object Uint8Array]",
        s6 = "[object Uint8ClampedArray]",
        l6 = "[object Uint16Array]",
        u6 = "[object Uint32Array]",
        G = {};
    G[t6] = G[r6] = G[n6] = G[o6] = G[i6] = G[a6] = G[s6] = G[l6] = G[u6] = !0;
    G[G4] = G[B4] = G[$4] = G[z4] = G[e6] = G[F4] = G[U4] = G[Z4] = G[W4] = G[K4] = G[Q4] = G[J4] = G[Y4] = G[q4] = G[X4] = !1;

    function c6(e) {
        return lr(e) && da(e.length) && !!G[at(e)]
    }
    var kp = c6;

    function f6(e) {
        return function(t) {
            return e(t)
        }
    }
    var Sp = f6;
    var Pp = typeof exports == "object" && exports && !exports.nodeType && exports,
        wo = Pp && typeof module == "object" && module && !module.nodeType && module,
        p6 = wo && wo.exports === Pp,
        u1 = p6 && ua.process,
        d6 = function() {
            try {
                var e = wo && wo.require && wo.require("util").types;
                return e || u1 && u1.binding && u1.binding("util")
            } catch {}
        }(),
        c1 = d6;
    var Ep = c1 && c1.isTypedArray,
        g6 = Ep ? Sp(Ep) : kp,
        Op = g6;

    function m6(e, t) {
        return function(r) {
            return e(t(r))
        }
    }
    var Lp = m6;
    var h6 = Lp(Object.keys, Object),
        Ap = h6;
    var v6 = Object.prototype,
        y6 = v6.hasOwnProperty;

    function x6(e) {
        if (!ga(e)) return Ap(e);
        var t = [];
        for (var r in Object(e)) y6.call(e, r) && r != "constructor" && t.push(r);
        return t
    }
    var Tp = x6;
    var w6 = yt(re, "Map"),
        ma = w6;
    var C6 = yt(re, "DataView"),
        ha = C6;
    var k6 = yt(re, "Promise"),
        va = k6;
    var S6 = yt(re, "Set"),
        ya = S6;
    var Rp = "[object Map]",
        P6 = "[object Object]",
        Vp = "[object Promise]",
        jp = "[object Set]",
        Ip = "[object WeakMap]",
        Mp = "[object DataView]",
        E6 = jt(ha),
        O6 = jt(ma),
        L6 = jt(va),
        A6 = jt(ya),
        T6 = jt(pa),
        Or = at;
    (ha && Or(new ha(new ArrayBuffer(1))) != Mp || ma && Or(new ma) != Rp || va && Or(va.resolve()) != Vp || ya && Or(new ya) != jp || pa && Or(new pa) != Ip) && (Or = function(e) {
        var t = at(e),
            r = t == P6 ? e.constructor : void 0,
            n = r ? jt(r) : "";
        if (n) switch (n) {
            case E6:
                return Mp;
            case O6:
                return Rp;
            case L6:
                return Vp;
            case A6:
                return jp;
            case T6:
                return Ip
        }
        return t
    });
    var _p = Or;
    var R6 = function() {
            return re.Date.now()
        },
        xa = R6;
    var V6 = "Expected a function",
        j6 = Math.max,
        I6 = Math.min;

    function M6(e, t, r) {
        var n, o, i, a, s, l, u = 0,
            g = !1,
            f = !1,
            d = !0;
        if (typeof e != "function") throw new TypeError(V6);
        t = s1(t) || 0, Vt(r) && (g = !!r.leading, f = "maxWait" in r, i = f ? j6(s1(r.maxWait) || 0, t) : i, d = "trailing" in r ? !!r.trailing : d);

        function m(C) {
            var k = n,
                S = o;
            return n = o = void 0, u = C, a = e.apply(S, k), a
        }

        function y(C) {
            return u = C, s = setTimeout(p, t), g ? m(C) : a
        }

        function w(C) {
            var k = C - l,
                S = C - u,
                R = t - k;
            return f ? I6(R, i - S) : R
        }

        function E(C) {
            var k = C - l,
                S = C - u;
            return l === void 0 || k >= t || k < 0 || f && S >= i
        }

        function p() {
            var C = xa();
            if (E(C)) return c(C);
            s = setTimeout(p, w(C))
        }

        function c(C) {
            return s = void 0, d && n ? m(C) : (n = o = void 0, a)
        }

        function h() {
            s !== void 0 && clearTimeout(s), u = 0, n = l = o = s = void 0
        }

        function v() {
            return s === void 0 ? a : c(xa())
        }

        function x() {
            var C = xa(),
                k = E(C);
            if (n = arguments, o = this, l = C, k) {
                if (s === void 0) return y(l);
                if (f) return clearTimeout(s), s = setTimeout(p, t), m(l)
            }
            return s === void 0 && (s = setTimeout(p, t)), a
        }
        return x.cancel = h, x.flush = v, x
    }
    var f1 = M6;
    var _6 = "[object Map]",
        N6 = "[object Set]",
        b6 = Object.prototype,
        H6 = b6.hasOwnProperty;

    function D6(e) {
        if (e == null) return !0;
        if (gp(e) && (ap(e) || typeof e == "string" || typeof e.splice == "function" || Cp(e) || Op(e) || hp(e))) return !e.length;
        var t = _p(e);
        if (t == _6 || t == N6) return !e.size;
        if (ga(e)) return !Tp(e).length;
        for (var r in e)
            if (H6.call(e, r)) return !1;
        return !0
    }
    var p1 = D6;
    var h1 = M(It());
    var Ce = M(It());

    function Mt(e) {
        return Ce.default.storage.local.get(e)
    }
    async function st(e) {
        return Ce.default.storage.local.set(e)
    }
    async function bp(e) {
        return new Promise(t => {
            Mt({
                [e]: ""
            }).then(r => {
                if (r[e]) {
                    t(r[e]);
                    return
                }

                function n(o) {
                    o[e]?.newValue && (t(o[e]?.newValue), Ce.default.storage.local.onChanged.removeListener(n))
                }
                Ce.default.storage.local.onChanged.addListener(n)
            })
        })
    }
    async function Co(e) {
        return Ce.default.storage.local.remove(e)
    }
    async function wa(e) {
        if (Ce.default?.cookies) {
            let t = await Ce.default.cookies.get(e);
            return t?.value ? decodeURIComponent(t.value) : ""
        }
        return Ce.default.runtime.sendMessage({
            type: "GET_COOKIE",
            data: e
        })
    }
    async function g1(e) {
        return Ce.default?.cookies ? await Ce.default.cookies.set(e) : Ce.default.runtime.sendMessage({
            type: "SET_COOKIE",
            data: e
        })
    }
    async function m1() {
        return Ce.default?.action ? !!(await Ce.default.action.getUserSettings())?.isOnToolbar : Ce.default.runtime.sendMessage({
            type: "CHECK_PINNED"
        })
    }
    var Hp = h1.default.runtime.getManifest(),
        Ca = Hp.version_name === Hp.version + "-e",
        ka = "Sider",
        Gp = "ChatGPT Sidebar",
        v1 = h1.default.runtime.getManifest().version;
    var Dp = "https://sider.ai",
        Qe = {
            origin: Dp,
            api: `${Dp}/api`
        };
    var ko = (T => (T.English = "en", T["Chinese(Simplified)"] = "zh_CN", T["Chinese(Traditional)"] = "zh_TW", T.Spanish = "es", T.French = "fr", T.Japanese = "ja", T.German = "de", T.Portuguese = "pt", T.Arabic = "ar", T.Russian = "ru", T.Italian = "it", T.Korean = "ko", T.Hindi = "hi", T.Dutch = "nl", T.Polish = "pl", T.Amharic = "am", T.Bulgarian = "bg", T.Bengali = "bn", T.Catalan = "ca", T.Czech = "cs", T.Danish = "da", T.Greek = "el", T.Estonian = "et", T.Persian = "fa", T.Finnish = "fi", T.Filipino = "fil", T.Gujarati = "gu", T.Hebrew = "he", T.Croatian = "hr", T.Hungarian = "hu", T.Indonesian = "id", T.Kannada = "kn", T.Lithuanian = "lt", T.Latvian = "lv", T.Malayalam = "ml", T.Marathi = "mr", T.Malay = "ms", T.Norwegian = "no", T.Romanian = "ro", T.Slovak = "sk", T.Slovenian = "sl", T.Serbian = "sr", T.Swedish = "sv", T.Swahili = "sw", T.Tamil = "ta", T.Telugu = "te", T.Thai = "th", T.Turkish = "tr", T.Ukrainian = "uk", T.Urdu = "ur", T.Vietnamese = "vi", T))(ko || {}),
        G6 = {
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
        kh = Object.entries(ko).reduce((e, [t, r]) => (e[r] = t, e), {}),
        Sh = Object.entries(ko).map(([e, t]) => ({
            label: e,
            value: t
        })),
        Ph = Object.entries(G6).map(([e, t]) => ({
            label: t,
            value: e
        }));
    var Eh = {
        pricing: `${Qe.origin}/pricing`,
        login: `${Qe.origin}/login`,
        myChats: `${Qe.origin}/mychats`,
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
    var Lr = M(ve()),
        So = M(It());

    function y1(e) {
        let [t, r] = (0, Lr.useState)(e), n = s => {
            r(s), o.current.data = s
        }, o = (0, Lr.useRef)({
            data: t
        }), [i, a] = (0, Lr.useState)(!0);
        return (0, Lr.useEffect)(() => {
            So.default.storage.local.get(e).then(l => {
                n(l), a(!1)
            });
            let s = l => {
                let u = {
                        ...o.current.data
                    },
                    g = !1;
                for (let [f, {
                        newValue: d,
                        oldValue: m
                    }] of Object.entries(l)) f in e && (g = !0, Object.assign(u, {
                    [f]: typeof d > "u" && typeof m < "u" ? e[f] : d
                }));
                g && n(u)
            };
            return So.default.storage.local.onChanged.addListener(s), () => {
                So.default.runtime.id && So.default.storage?.local?.onChanged?.removeListener(s)
            }
        }, []), [t, i]
    }

    function x1(...e) {
        let {
            t,
            i18n: r,
            ready: n
        } = _r(...e);
        return {
            t: (0, Je.useCallback)((i, a) => {
                if (a) {
                    let s = {},
                        l = {};
                    for (let f of Object.keys(a)) {
                        let d = a[f];
                        typeof d == "function" ? (l[f] = d, delete a[f]) : d && typeof d == "object" && ("props" in d || "ref" in d) && (s[f] = d, delete a[f])
                    }
                    let u = Object.keys(l);
                    if (Object.keys(s).length > 0 || u.length > 0) {
                        let f = t(i, a),
                            d = [],
                            m = 0,
                            y = "",
                            w = "",
                            E = !1,
                            p = "",
                            c = !1,
                            h = "",
                            v = !1,
                            x = !1;
                        for (; m < f.length;) {
                            let C = f[m - 1],
                                k = f[m],
                                S = f[m + 1];
                            if (E) {
                                C !== "\\" && k === "}" && S === "}" ? (w in s && d.push(s[w]), w = "", E = !1, m += 2) : (w += k, m++);
                                continue
                            }
                            if (c) {
                                k === ">" ? (c = !1, v = !0, m++) : (p += k, m++);
                                continue
                            }
                            if (v) {
                                k === "<" && S === "/" ? (v = !1, x = !0, m++) : (h += k, m++);
                                continue
                            }
                            if (x) {
                                k === ">" && (x = !1, p in l && d.push(l[p](h)), p = "", h = ""), m++;
                                continue
                            }
                            if (C !== "\\" && k === "{" && S === "{") {
                                y && d.push(y), y = "", E = !0, m += 2;
                                continue
                            }
                            if (C !== "\\" && k === "<" && S !== " ") {
                                y && d.push(y), y = "", c = !0, m++;
                                continue
                            }
                            y += k, m++
                        }
                        return y && d.push(y), (0, Je.createElement)(Je.Fragment, null, ...d)
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

    function Bp(e) {
        let [t, r] = (0, Je.useState)(!0), [n, o] = y1({
            language: "en"
        }), i = (0, Je.useRef)({
            onChange: e
        }), {
            i18n: a
        } = _r();
        return (0, Je.useEffect)(() => {
            o || (async () => {
                let s = n.language,
                    l = a.language,
                    u = (await import(`/i18n/${s}.json`, {
                        assert: {
                            type: "json"
                        }
                    })).default;
                s === "en" && B6(u), a.addResourceBundle(s, "translation", u), a.changeLanguage(n.language).finally(() => {
                    i.current.onChange?.(n.language, a, l), r(!1)
                })
            })()
        }, [n.language, o, a]), t
    }

    function B6(e, t = "|||") {
        function r(n) {
            for (let [o, i] of Object.entries(n)) i !== null && typeof i == "object" ? r(i) : typeof i == "string" && (n[o] = i.split(t)[0].trim())
        }
        return r(e), e
    }
    var zp = "./assets/pin-guide-edge-UKZUPUJI.png";
    var Fp = "./assets/pin-guide-A4LZL7OD.png";
    var Up = "./assets/setup-bg-5DVP5DSQ.svg";
    var Zp = "./assets/logo-FNAHYZVS.png";
    var be = M(Wp()),
        Ht = M(ve()),
        md = M(It());
    var Nt = M(ve()),
        A1 = M(It());
    var W6 = M(It());

    function Kp(e, t) {
        if (Object.is(e, t)) return !0;
        if (typeof e != "object" || !e || typeof t != "object" || !t) return !1;
        let r = Object.keys(e),
            n = Object.keys(t);
        if (r.length !== n.length) return !1;
        let o = Object.prototype.hasOwnProperty.bind(t);
        for (let i of r)
            if (!o(i)) return !1;
        return !0
    }
    var dn = (...e) => e.join("/").replace(/([^:])\/{2,}/g, "$1/");

    function Qp(e = 1e3) {
        return new Promise(t => setTimeout(t, e))
    }
    async function Po(e, t = 1e3, r = 2) {
        let n = 0;
        for (;;) {
            try {
                return await e()
            } catch (o) {
                if (r >= 0 && n++ >= r) throw o
            }
            await Qp(t)
        }
    }

    function Eo(e, t = 0) {
        let r = !1,
            n;
        return function(...o) {
            return r || (r = !0, n = new Promise((i, a) => {
                e(...o).then(i).catch(a).finally(async () => {
                    t && await Qp(t), r = !1
                })
            })), n
        }
    }
    var O1 = M(It());

    function Jp(e) {
        let t, r, n, o, i, a, s;
        return l(), {
            feed: u,
            reset: l
        };

        function l() {
            t = !0, r = "", n = 0, o = -1, i = void 0, a = void 0, s = ""
        }

        function u(f) {
            r = r ? r + f : f, t && K6(r) && (r = r.slice(Yp.length)), t = !1;
            let d = r.length,
                m = 0,
                y = !1;
            for (; m < d;) {
                y && (r[m] === `
` && ++m, y = !1);
                let w = -1,
                    E = o,
                    p;
                for (let c = n; w < 0 && c < d; ++c) p = r[c], p === ":" && E < 0 ? E = c - m : p === "\r" ? (y = !0, w = c - m) : p === `
` && (w = c - m);
                if (w < 0) {
                    n = d - m, o = E;
                    break
                } else n = 0, o = -1;
                g(r, m, E, w), m += w + 1
            }
            m === d ? r = "" : m > 0 && (r = r.slice(m))
        }

        function g(f, d, m, y) {
            if (y === 0) {
                s.length > 0 && (e({
                    type: "event",
                    id: i,
                    event: a || void 0,
                    data: s.slice(0, -1)
                }), s = "", i = void 0), a = void 0;
                return
            }
            let w = m < 0,
                E = f.slice(d, d + (w ? y : m)),
                p = 0;
            w ? p = y : f[d + m + 1] === " " ? p = m + 2 : p = m + 1;
            let c = d + p,
                h = y - p,
                v = f.slice(c, c + h).toString();
            if (E === "data") s += v ? "".concat(v, `
`) : `
`;
            else if (E === "event") a = v;
            else if (E === "id" && !v.includes("\0")) i = v;
            else if (E === "retry") {
                let x = parseInt(v, 10);
                Number.isNaN(x) || e({
                    type: "reconnect-interval",
                    value: x
                })
            }
        }
    }
    var Yp = [239, 187, 191];

    function K6(e) {
        return Yp.every((t, r) => e.charCodeAt(r) === t)
    }
    var Pa, Q6 = new Uint8Array(16);

    function w1() {
        if (!Pa && (Pa = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Pa)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return Pa(Q6)
    }
    var le = [];
    for (let e = 0; e < 256; ++e) le.push((e + 256).toString(16).slice(1));

    function qp(e, t = 0) {
        return (le[e[t + 0]] + le[e[t + 1]] + le[e[t + 2]] + le[e[t + 3]] + "-" + le[e[t + 4]] + le[e[t + 5]] + "-" + le[e[t + 6]] + le[e[t + 7]] + "-" + le[e[t + 8]] + le[e[t + 9]] + "-" + le[e[t + 10]] + le[e[t + 11]] + le[e[t + 12]] + le[e[t + 13]] + le[e[t + 14]] + le[e[t + 15]]).toLowerCase()
    }
    var J6 = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
        C1 = {
            randomUUID: J6
        };

    function Y6(e, t, r) {
        if (C1.randomUUID && !t && !e) return C1.randomUUID();
        e = e || {};
        let n = e.random || (e.rng || w1)();
        if (n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, t) {
            r = r || 0;
            for (let o = 0; o < 16; ++o) t[r + o] = n[o];
            return t
        }
        return qp(n)
    }
    var Oo = Y6;
    async function* Xp(e) {
        let t = e.getReader();
        try {
            for (;;) {
                let {
                    done: r,
                    value: n
                } = await t.read();
                if (r) return;
                yield n
            }
        } finally {
            t.releaseLock()
        }
    }
    var $p = M(It());
    async function Ea() {
        let {
            generatedRandomId: e
        } = await Mt({
            generatedRandomId: ""
        });
        if (!e) {
            let t = await q6();
            return t || (t = Oo(), X6(t)), $p.default.storage.local.set({
                generatedRandomId: t
            }), t
        }
        return e
    }
    var ed = Qe.origin.replace(/\/\/\w+?\./, "//Y2hhdGdwdC1zaWRlYmFy."),
        td = "zgv2awnlswq";
    async function q6() {
        try {
            return await wa({
                url: ed,
                name: td
            })
        } catch {
            return ""
        }
    }
    async function X6(e) {
        let t = Math.round(Date.now() / 1e3) + 31104e3;
        try {
            return await g1({
                url: ed,
                name: td,
                value: e,
                expirationDate: t,
                secure: !0
            })
        } catch {}
    }

    function k1(e, t) {
        switch (e) {
            case 609:
                throw new Error("error_sider_premium_required");
            case 610:
                throw new Error("error_sider_high_traffic");
            case 1003:
                throw new Error("error_sider_need_login");
            case 1006:
                throw new Error("error_sider_device_bind_account");
            case 1101:
                throw new Error("error_sider_processing");
            case 1102:
                throw Ar.getVipInfoCached(), new Error("error_sider_api_limit");
            case 1107:
                throw Ar.getVipInfoCached(), new Error("error_sider_api_limit2");
            case 1109:
                throw new Error("error_sider_gpt4_highload");
            case 1110:
                throw new Error("error_sider_gpt_highload");
            case 1112:
            case 1113:
                throw Ar.getVipInfoCached(), new Error("error_sider_gpt4_limit");
            case 1121:
                throw Ar.getVipInfoCached(), new Error("error_sider_summary_video_limit");
            default:
                break
        }
        throw typeof t == "string" && t.startsWith("504") ? new Error("error_sider_timeout") : new Error(t)
    }
    var lt = `ChitChat_${Ca?"Edge":"Chrome"}_Ext`,
        _t = v1,
        S1 = Intl.DateTimeFormat().resolvedOptions().timeZone,
        Ar = {
            async refreshToken(e) {
                let t = await ue("/v1/user/token/refresh", {
                    refresh_token: e
                }, {
                    headers: {
                        Authorization: ""
                    }
                });
                return {
                    token: t.token.token,
                    refreshToken: t.token.refresh_token
                }
            },
            async adAction({
                source: e,
                action: t,
                p1: r,
                p2: n
            }) {
                return await ue("/v1/ad/action", {
                    source: e,
                    action: t,
                    p1: r,
                    p2: n
                }, {
                    headers: {
                        Authorization: ""
                    }
                })
            },
            getSiderAnonymousToken: Eo(async () => {
                let e = await Ea();
                return ue("/v1/user/login/device_id", {
                    device_id: e,
                    uuid: e,
                    app_name: lt,
                    app_version: _t
                }, {
                    headers: {
                        Authorization: ""
                    }
                })
            }),
            getUserInfo: async () => {
                let e = await ut(`/v1/user/info?app_name=${lt}&app_version=${_t}`);
                return st({
                    userInfo: e
                }), e
            },
            getVipInfo: rd,
            getVipInfoCached: Eo(rd, 5e3),
            async getPricingPlan() {
                let e = await ut("/v1/app/ipinfo", null, {
                        headers: {
                            Authorization: ""
                        }
                    }),
                    t = e.region === "CN" || S1 === "Asia/Shanghai" && (await Mt({
                        language: "en"
                    })).language === "zh_CN",
                    r = await ut(`/v1/payment/pricing?from=web&location=${t?"CN":e.region}`, null, {
                        headers: {
                            Authorization: ""
                        }
                    });
                st({
                    pricingPlan: r.plan.map(n => ({
                        currency: n.currency,
                        interval: n.interval,
                        originPrice: n.origin_price / 100,
                        price: n.price / 100
                    }))
                })
            },
            async getUserSettings() {
                return (await ut(`/v1/user/settings?app_name=${lt}`)).client_setting
            },
            setUserSettings(e) {
                return Po(() => ue("/v1/user/settings", {
                    app_name: lt,
                    client_setting: e
                }))
            },
            getUserPromptList(e) {
                return ut(`/v1/prompt/list?type=${e}&page_size=999`)
            },
            createUserPrompt(e) {
                return Po(() => ue("/v1/prompt/create", {
                    is_template: !1,
                    ...e
                }))
            },
            editUserPrompt(e) {
                return Po(() => ue("/v1/prompt/edit", e))
            },
            delUserPrompt(e) {
                return Po(() => ue("/v1/prompt/update", {
                    id: e,
                    status: "Deleted"
                }))
            },
            async uploadHistoryMsg(e) {
                return (await ue("/v1/conversation/upload", {
                    app_name: lt,
                    app_version: _t,
                    messages: e
                })).cid
            },
            uploadConversion(e) {
                return ue("/v1/conversation/upload", {
                    share: !0,
                    app_name: lt,
                    app_version: _t,
                    messages: e
                })
            },
            saveConversion(e) {
                return ue("/v1/conversation/upload", {
                    save_by_user: !0,
                    app_name: lt,
                    app_version: _t,
                    messages: e
                })
            },
            async shareConversion(e) {
                return (await ut(`/v1/conversation/share/${e}`)).share_key
            },
            saveSiderConversion(e) {
                return ut(`/v1/conversation/save-by-user/${e}`)
            },
            unSaveSiderConversion(e) {
                return ut(`/v1/conversation/unsave-by-user/${e}`)
            },
            delConversion(e) {
                return $6(`/v1/conversation/delete/${e}`)
            },
            async sendFeedback({
                title: e,
                detail: t,
                email: r
            }) {
                let n = await E1();
                return ue("/v1/app/feedback", {
                    title: e,
                    email: r,
                    data: {
                        detail: t
                    },
                    app_name: lt,
                    app_version: _t
                }, {
                    headers: {
                        Authorization: n?.token || ""
                    }
                })
            },
            async getInviteRewardConfig() {
                let e = await ut("/v1/invite/config", null, {
                    headers: {
                        Authorization: ""
                    }
                });
                return st({
                    inviteRewardConfig: {
                        "gpt3.5": e.GPT3Dot5Count,
                        gpt4: e.GPT4Count
                    }
                }), e
            },
            createInviteLink() {
                return ue("/v1/invite/create", {
                    type: "link"
                })
            },
            async getInviteRewardCount() {
                let e = await ut("/v1/invite/reward");
                return st({
                    inviteRewardCount: {
                        "gpt3.5": e.reward_gpt3dot5_count,
                        gpt4: e.reward_gpt4_count
                    }
                }), e
            },
            inviteFinish: async () => {
                let e = await Ea();
                return ue("/v1/invite/finish", {
                    device_id: e
                })
            },
            async summaryVideo(e) {
                function t(m) {
                    if (m?.total)
                        if (e.vip) {
                            let y = {
                                "gpt-3.5": {
                                    total: m.total,
                                    remain: m.remain,
                                    extraTotal: m.extra_total,
                                    extraRemain: m.extra_quota,
                                    period: m.remain_period
                                }
                            };
                            Lo(y)
                        } else {
                            let y = {
                                summary: {
                                    remain: m.remain
                                }
                            };
                            Lo(y)
                        }
                }
                let r = f1(t, 1e3, {
                        leading: !0
                    }),
                    n = {
                        app_name: lt,
                        app_version: _t,
                        tz_name: S1,
                        content: e.text,
                        title: e.title,
                        language: e.lang,
                        source: e.source,
                        source_type: e.sourceType,
                        request_id: Oo(),
                        cid: ""
                    },
                    o = [];
                e.getAbortMethod(() => {
                    for (let m of o) m()
                });
                let {
                    content: i,
                    cid: a,
                    ...s
                } = n, l = null;
                try {
                    l = await ue("/v1/completion/summarize_init", s, {
                        getAbortMethod(m) {
                            o.push(m)
                        }
                    })
                } catch {}
                l && (n.cid = l.cid || "");
                let u = ue("/v1/completion/summarize_all", n, {
                        onStreamData({
                            data: m,
                            done: y
                        }) {
                            !y && m && r(m), e.onStreamData({
                                text: m?.text || "",
                                done: y
                            })
                        },
                        getAbortMethod(m) {
                            o.push(m)
                        }
                    }),
                    g = ue("/v1/completion/summarize", n, {
                        getAbortMethod(m) {
                            o.push(m)
                        }
                    }),
                    [f, d] = await Promise.all([u, g]);
                return t(d), {
                    text: d.text,
                    subtitle: d.subtitle
                }
            },
            statUserStop(e, t) {
                return ue("/v1/completion/mark-user-stop", {
                    app_name: lt,
                    app_version: _t,
                    cid: e,
                    mid: t
                })
            }
        };
    async function rd() {
        let e;
        try {
            e = await ut(`/v1/completion/limit?app_name=${lt}&app_version=${_t}&tz_name=${S1}`)
        } catch (s) {
            throw Lo({
                isVIP: !1
            }), s
        }
        if (!e.chat.count) throw st({
            ERR_MUST_LOGIN: !0
        }), new Error("wrong_data");
        let t = e.user_type,
            r = ["device", "login", "premium"],
            n = e.chat_period_info,
            o = e.gpt_4_chat_period_info,
            i = e.search_period_info,
            a = {
                isVIP: e.user_type === "premium",
                "gpt-3.5": {
                    total: e.chat.count,
                    remain: e.chat.remain,
                    extraTotal: e.chat.extra_total,
                    extraRemain: e.chat.extra_quota,
                    period: e.chat.period,
                    maxToken: n[t]?.prompt_max_token,
                    award: r.reduce((s, l) => (s[l] = {
                        count: n[l].count
                    }, s), {})
                },
                "gpt-4": {
                    total: e.gpt_4_chat.count,
                    remain: e.gpt_4_chat.remain,
                    extraTotal: e.gpt_4_chat.extra_total,
                    extraRemain: e.gpt_4_chat.extra_quota,
                    period: e.gpt_4_chat.period,
                    maxToken: o[t]?.prompt_max_token,
                    award: r.reduce((s, l) => (s[l] = {
                        count: o[l].count
                    }, s), {})
                },
                search: {
                    total: e.search.count,
                    remain: e.search.remain,
                    extraTotal: e.search.extra_total,
                    extraRemain: e.search.extra_quota,
                    period: e.search.period,
                    award: r.reduce((s, l) => (s[l] = {
                        count: i[l].count
                    }, s), {})
                },
                summary: {
                    total: e.summarize.count,
                    remain: e.summarize.remain,
                    cost: e.summarize.deduct_count,
                    period: e.summarize.period
                },
                "image-creator": {
                    total: e.image.count,
                    remain: e.image.remain,
                    extraTotal: e.image.extra_total,
                    extraRemain: e.image.extra_quota,
                    period: e.image.period
                }
            };
        return Lo(a), a
    }
    async function P1(e, t = null, r = {}) {
        e.startsWith("http") || (e = dn(Qe.api, e));
        let {
            onStreamData: n,
            getAbortMethod: o,
            ...i
        } = r;
        if (!i.signal) {
            let u = new AbortController;
            i.signal = u.signal, o?.(() => {
                u.abort()
            })
        }
        i.headers ||= {};
        let a = "";
        if ("Authorization" in i.headers || (a = (await nd()).token), i.headers = Object.assign({
                "Content-Type": "application/json",
                Authorization: a
            }, i.headers), t) try {
            t instanceof FormData || t instanceof Blob || t instanceof URLSearchParams || t instanceof ReadableStream || t instanceof ArrayBuffer || t instanceof DataView ? i.body = t : i.body = JSON.stringify(t)
        } catch {
            i.body = t
        }
        let s = await fetch(e, i),
            l = null;
        if (n || (l = await s.json().catch(() => ({}))), Co("ERR_MUST_LOGIN"), !s.ok || l && l.code !== 0) {
            if (l || (l = await s.json().catch(() => ({}))), l.errMsg = l.msg || l.message, p1(l)) l.errMsg = `${s.status} ${s.statusText}`;
            else {
                (l.code === 1003 || l.code === 1006) && st({
                    ERR_MUST_LOGIN: !0
                });
                try {
                    k1(l.code, l.msg || l.message)
                } catch (u) {
                    l.errMsg = u.message
                }
            }
            throw n && n({
                data: null,
                done: !0
            }), l
        }
        if (n && s.body) {
            let u = Jp(g => {
                if (g.type === "event") {
                    let f = {
                            code: 0,
                            data: null,
                            msg: "",
                            errMsg: "",
                            done: g.data === "[DONE]"
                        },
                        d = null;
                    try {
                        d = JSON.parse(g.data)
                    } catch {}
                    if (d && (f = {
                            ...f,
                            ...d
                        }), f.code !== 0) {
                        try {
                            k1(f.code, f.msg)
                        } catch (m) {
                            f.errMsg = m.message
                        }
                        throw n({
                            data: null,
                            done: !0
                        }), f
                    }
                    n({
                        data: f.data,
                        done: f.done
                    })
                }
            });
            for await (let g of Xp(s.body)) {
                let f = new TextDecoder().decode(g);
                u.feed(f)
            }
        }
        return l?.data
    }

    function ut(e, t = null, r = {}) {
        return P1(e, t, {
            method: "GET",
            ...r
        })
    }

    function ue(e, t = null, r = {}) {
        return P1(e, t, {
            method: "POST",
            ...r
        })
    }

    function $6(e, t = null, r = {}) {
        return P1(e, t, {
            method: "DELETE",
            ...r
        })
    }
    async function L1() {
        let e = await Ao("userinfo-type");
        return e === null ? null : !!(e && e !== "device")
    }
    async function e7() {
        let {
            vipInfo: e
        } = await Mt({
            vipInfo: {
                isVIP: !1,
                "gpt-3.5": {
                    total: 0,
                    remain: 0,
                    extraTotal: 0,
                    extraRemain: 0,
                    period: "total"
                },
                "gpt-4": {
                    total: 0,
                    remain: 0,
                    extraTotal: 0,
                    extraRemain: 0,
                    period: "total"
                },
                search: {
                    total: 0,
                    remain: 0,
                    extraTotal: 0,
                    extraRemain: 0,
                    period: "total"
                },
                "image-creator": {
                    total: 0,
                    remain: 0,
                    extraTotal: 0,
                    extraRemain: 0,
                    period: "total"
                },
                summary: {
                    total: 0,
                    remain: 0,
                    cost: 3,
                    period: "total"
                }
            }
        });
        return e
    }
    async function Lo(e) {
        let t = await e7();
        return st({
            vipInfo: {
                ...t,
                ...e,
                "gpt-3.5": {
                    ...t["gpt-3.5"],
                    ...e["gpt-3.5"]
                },
                "gpt-4": {
                    ...t["gpt-4"],
                    ...e["gpt-4"]
                },
                "image-creator": {
                    ...t["image-creator"],
                    ...e["image-creator"]
                },
                search: {
                    ...t.search,
                    ...e.search
                },
                summary: {
                    ...t.summary,
                    ...e.summary
                }
            }
        })
    }
    async function nd() {
        let e = await E1();
        return e ? {
            ...e,
            anonymous: !1
        } : (e = await t7(), {
            ...e,
            anonymous: !0
        })
    }
    async function E1() {
        if (await L1()) {
            let e = await Ao("token"),
                t = await Ao("refresh_token");
            return e ? {
                token: e,
                refreshToken: t
            } : null
        }
        return null
    }
    async function t7() {
        let e = await od();
        if (e) return e;
        let {
            __getSiderAnonymousToken__: t
        } = await Mt({
            __getSiderAnonymousToken__: !1
        });
        if (t) await bp("siderApiToken"), e = await od();
        else {
            st({
                __getSiderAnonymousToken__: !0
            });
            try {
                let r = await Ar.getSiderAnonymousToken();
                e = {
                    token: r.token.token,
                    refreshToken: r.token.refresh_token
                }
            } catch (r) {
                throw Co("__getSiderAnonymousToken__"), r
            }
            Co("__getSiderAnonymousToken__"), r7(e)
        }
        return e
    }
    async function r7(e) {
        return O1.default.storage.local.set({
            siderApiToken: e.token,
            siderApiRefreshToken: e.refreshToken
        })
    }
    async function od() {
        let {
            siderApiToken: e,
            siderApiRefreshToken: t
        } = await O1.default.storage.local.get(["siderApiToken", "siderApiRefreshToken"]);
        return e ? {
            token: e,
            refreshToken: t
        } : null
    }
    async function id() {
        let e = await Ao("userinfo-avatar"),
            t = await Ao("userinfo-name");
        return {
            avatar: e,
            name: t
        }
    }
    async function Ao(e) {
        try {
            let t = await wa({
                name: e,
                url: Qe.origin
            });
            if (!t) throw new Error("");
            return st({
                [e]: t
            }), t
        } catch {
            return (await Mt({
                [e]: ""
            }))[e]
        }
    }
    async function ad(e) {
        return dn(Qe.origin, e)
    }
    var n7 = Eo(async () => {
        let e = await L1(),
            t = null;
        return e ? (await A1.default.runtime.sendMessage({
            type: "USER_LOGIN"
        }), t = await id()) : e === !1 && await A1.default.runtime.sendMessage({
            type: "USER_LOGOUT"
        }), {
            logged: !!e,
            userInfo: t
        }
    });

    function sd() {
        let [e, t] = (0, Nt.useState)(!1), [r, n] = (0, Nt.useState)(null), o = (0, Nt.useRef)(e), i = (0, Nt.useRef)(r);
        return (0, Nt.useEffect)(() => {
            o.current = e, i.current = r
        }, [e, r]), (0, Nt.useEffect)(() => {
            a();
            async function a() {
                let {
                    logged: s,
                    userInfo: l
                } = await n7();
                o.current !== s && t(s), Kp(i.current, l) || n(l)
            }
            return window.addEventListener("focus", a), () => {
                window.removeEventListener("focus", a)
            }
        }, []), {
            logged: e,
            userInfo: r
        }
    }
    var ne = M(bt());
    var fd = e => (0, ne.jsx)("svg", {
        width: "14",
        height: "14",
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e,
        children: (0, ne.jsx)("path", {
            d: "M12.218 6.60429H11.2273V3.96258C11.2273 3.2328 10.6362 2.64171 9.90645 2.64171H7.26472V1.65107C7.26472 0.739675 6.52505 0 5.61365 0C4.70225 0 3.96258 0.739675 3.96258 1.65107V2.64171H1.32086C0.591087 2.64171 0.0066035 3.2328 0.0066035 3.96258L0.00329375 6.4722H0.99064C1.97468 6.4722 2.7738 7.27133 2.7738 8.25536C2.7738 9.2394 1.97468 10.0385 0.99064 10.0385H0.00330975L0 12.5481C0 13.2779 0.591087 13.869 1.32086 13.869H3.83049V12.8784C3.83049 11.8943 4.62961 11.0952 5.61365 11.0952C6.59769 11.0952 7.39681 11.8943 7.39681 12.8784V13.869H9.90644C10.6362 13.869 11.2273 13.2779 11.2273 12.5481V9.90645H12.2179C13.1293 9.90645 13.869 9.16678 13.869 8.25538C13.869 7.34398 13.1293 6.60429 12.218 6.60429Z",
            fill: "currentColor",
            fillOpacity: "0.85"
        })
    });
    var pd = e => (0, ne.jsxs)("svg", {
            width: "30",
            height: "30",
            viewBox: "0 0 30 30",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: [(0, ne.jsx)("g", {
                clipPath: "url(#clip0_1026_12)",
                children: (0, ne.jsx)("path", {
                    d: "M21.9688 0.503906L17.1641 29H11.6758L15.4844 7.10547L8.57031 9.23438L9.37109 4.58594L21.2656 0.503906H21.9688Z",
                    fill: "currentColor"
                })
            }), (0, ne.jsx)("defs", {
                children: (0, ne.jsx)("clipPath", {
                    id: "clip0_1026_12",
                    children: (0, ne.jsx)("rect", {
                        width: "14",
                        height: "29",
                        fill: "white",
                        transform: "translate(8)"
                    })
                })
            })]
        }),
        dd = e => (0, ne.jsx)("svg", {
            width: "30",
            height: "30",
            viewBox: "0 0 30 30",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0, ne.jsx)("path", {
                d: "M23.6484 24.6055L22.9453 29H4.05859L4.66406 25.0352L14.918 15.3672C15.5169 14.7812 16.1549 14.1302 16.832 13.4141C17.5221 12.6979 18.1276 11.9362 18.6484 11.1289C19.1823 10.3086 19.5143 9.44922 19.6445 8.55078C19.7357 7.86068 19.7031 7.21615 19.5469 6.61719C19.3906 6.00521 19.0911 5.50391 18.6484 5.11328C18.2057 4.72266 17.5938 4.52083 16.8125 4.50781C15.875 4.48177 15.0807 4.70964 14.4297 5.19141C13.7786 5.66016 13.2643 6.27865 12.8867 7.04688C12.5221 7.80208 12.2812 8.59635 12.1641 9.42969L6.71484 9.46875C6.83203 7.61979 7.37891 5.99219 8.35547 4.58594C9.34505 3.16667 10.6081 2.06641 12.1445 1.28516C13.694 0.490885 15.3802 0.113281 17.2031 0.152344C18.8177 0.178385 20.263 0.497396 21.5391 1.10938C22.8151 1.70833 23.7982 2.59375 24.4883 3.76562C25.1784 4.92448 25.4518 6.35677 25.3086 8.0625C25.2044 9.23438 24.8984 10.3281 24.3906 11.3438C23.8958 12.3594 23.2708 13.3164 22.5156 14.2148C21.7734 15.1133 20.9792 15.9661 20.1328 16.7734C19.2865 17.5677 18.4661 18.3359 17.6719 19.0781L11.9492 24.5664L23.6484 24.6055Z",
                fill: "currentColor"
            })
        }),
        T1 = e => (0, ne.jsxs)("svg", {
            width: "30",
            height: "30",
            viewBox: "0 0 30 30",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: [(0, ne.jsx)("path", {
                d: "M12.3588 22C12.1474 22 11.9404 21.922 11.7784 21.7703L6.23959 16.436C5.92014 16.1284 5.92014 15.6301 6.23959 15.3224C6.55907 15.0147 7.0765 15.0147 7.39596 15.3224L12.3543 20.0977L22.6041 10.2308C22.9235 9.92308 23.4409 9.92308 23.7604 10.2308C24.0799 10.5384 24.0799 11.0368 23.7604 11.3444L12.9348 21.7703C12.7773 21.922 12.5658 22 12.3588 22Z",
                fill: "currentColor",
                stroke: "currentColor"
            }), (0, ne.jsx)("circle", {
                cx: "15",
                cy: "15",
                r: "14",
                stroke: "currentColor",
                strokeWidth: "2"
            })]
        }),
        gd = e => (0, ne.jsxs)("svg", {
            width: "30",
            height: "30",
            viewBox: "0 0 30 30",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: [(0, ne.jsx)("circle", {
                cx: "15",
                cy: "15",
                r: "14",
                stroke: "#3771E0",
                strokeWidth: "2"
            }), (0, ne.jsx)("rect", {
                x: "6",
                y: "14",
                width: "18",
                height: "2",
                rx: "1",
                fill: "currentColor"
            })]
        });
    var A = M(bt());

    function R1() {
        let {
            t: e,
            dir: t
        } = x1(), {
            logged: r,
            userInfo: n
        } = sd(), [o, i] = (0, Ht.useState)(1), [a, s] = (0, Ht.useState)(!1), [l, u] = (0, Ht.useState)(dn(Qe.origin, "/login/popup"));
        (0, Ht.useEffect)(() => {
            m1().then(s), ad("/login/popup").then(u)
        }, []), (0, Ht.useEffect)(() => {
            if (!a) {
                let f = setInterval(() => {
                    m1().then(d => {
                        d && s(!0)
                    })
                }, 500);
                return () => clearInterval(f)
            }
        }, [a]), (0, Ht.useEffect)(() => {
            o === 1 && a && i(2), o === 2 && r && i(3)
        }, [a, o, r]), (0, Ht.useEffect)(() => {
            document.documentElement.dir = t
        }, [t]);
        let g = () => {
            let m = Math.max((innerWidth - 400) / 2, 0),
                y = Math.max((innerHeight - 600) / 2, 0),
                w = `popup,width=400,height=600,left=${m},top=${y}`;
            open(l, "", w)
        };
        return (0, A.jsx)("div", {
            className: (0, be.default)("w-full h-full flex items-center justify-center bg-cover "),
            style: {
                backgroundImage: `url('${Up}')`
            },
            children: (0, A.jsxs)("main", {
                className: (0, be.default)("w-[800px]"),
                children: [(0, A.jsxs)("div", {
                    className: "flex items-center justify-center mb-[60px]",
                    children: [(0, A.jsx)("img", {
                        className: "w-12 h-12 ltr:mr-3 rtl:ml-3",
                        src: Zp
                    }), (0, A.jsxs)("div", {
                        children: [(0, A.jsx)("div", {
                            className: "text-3xl font-bold",
                            children: ka
                        }), (0, A.jsx)("div", {
                            className: " text-sm",
                            children: Gp
                        })]
                    })]
                }), (0, A.jsxs)("div", {
                    className: (0, be.default)("relative flex flex-col rounded-[20px] py-5 px-5 bg-white h-[400px] shadow-[0px_2px_12px_rgba(0,0,0,0.06)]", "overflow-hidden"),
                    children: [(0, A.jsxs)("div", {
                        className: "flex items-center justify-center mt-[15px]",
                        children: [(0, A.jsxs)("div", {
                            className: "flex items-center",
                            children: [(0, A.jsxs)("div", {
                                className: (0, be.default)("mx-3", {
                                    "text-[#3771E0]": o >= 1
                                }),
                                children: [o <= 1 && (0, A.jsx)(pd, {}), o > 1 && (a ? (0, A.jsx)(T1, {}) : (0, A.jsx)(gd, {
                                    className: "opactiy-60"
                                }))]
                            }), (0, A.jsxs)("div", {
                                children: [(0, A.jsx)("h3", {
                                    className: "text-lg m-0",
                                    children: e("pinExt")
                                }), (0, A.jsx)("div", {
                                    className: "text-sm opacity-60",
                                    children: e("setupPage.step1Label")
                                })]
                            })]
                        }), (0, A.jsx)("svg", {
                            className: "w-[184px] h-px mx-5",
                            height: "1",
                            viewBox: "0 0 184 1",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0, A.jsx)("line", {
                                opacity: "0.2",
                                y1: "0.5",
                                x2: "184",
                                y2: "0.5",
                                stroke: "rgb(var(--gpts-fg-rgb))",
                                strokeDasharray: "8 8"
                            })
                        }), (0, A.jsxs)("div", {
                            className: (0, be.default)("flex items-center", {
                                "text-[rgba(var(--gpts-fg-rgb),0.4)]": o < 2
                            }),
                            children: [(0, A.jsxs)("div", {
                                className: (0, be.default)("mx-3", {
                                    "text-[#3771E0]": o >= 2
                                }),
                                children: [o <= 2 && (0, A.jsx)(dd, {}), o > 2 && (0, A.jsx)(T1, {})]
                            }), (0, A.jsxs)("div", {
                                children: [(0, A.jsx)("h3", {
                                    className: "text-lg m-0",
                                    children: e("signin")
                                }), (0, A.jsx)("div", {
                                    className: "text-sm opacity-60",
                                    children: e("setupPage.step2Label")
                                })]
                            })]
                        })]
                    }), (0, A.jsxs)("div", {
                        className: "h-full flex flex-col relative",
                        children: [(0, A.jsxs)("div", {
                            className: (0, be.default)("flex py-10 m-auto", {
                                hidden: o != 1
                            }),
                            children: [(0, A.jsx)("div", {
                                className: "w-1/2",
                                children: (0, A.jsx)("img", {
                                    className: "w-full",
                                    src: Ca ? zp : Fp
                                })
                            }), (0, A.jsx)("div", {
                                className: "w-1/2 text-sm leading-loose whitespace-pre-line m-2",
                                children: e("setupPage.pinGuideDesc", {
                                    b: () => (0, A.jsx)(fd, {}),
                                    APP_NAME: ka
                                })
                            }), (0, A.jsx)("div", {
                                role: "button",
                                className: "absolute text-sm text-[#3771E0] bottom-0 right-0 opacity-60 cursor-pointer",
                                onClick: () => i(2),
                                children: e("skip")
                            })]
                        }), (0, A.jsxs)("div", {
                            className: (0, be.default)("flex flex-col items-center", {
                                hidden: o != 2
                            }),
                            children: [(0, A.jsxs)("div", {
                                className: "text-sm my-6 py-8 whitespace-pre-line leading-relaxed",
                                children: [(0, A.jsx)("b", {
                                    children: e("setupPage.signInGuideTitle")
                                }), (0, A.jsxs)("ol", {
                                    className: "list-decimal p-0 my-3 marker:font-bold",
                                    children: [(0, A.jsx)("li", {
                                        className: "list-decimal ",
                                        children: e("setupPage.signInGuideStep1")
                                    }), (0, A.jsx)("li", {
                                        className: "list-decimal",
                                        children: e("setupPage.signInGuideStep2")
                                    }), (0, A.jsx)("li", {
                                        className: "list-decimal",
                                        children: e("setupPage.signInGuideStep3")
                                    }), (0, A.jsx)("li", {
                                        className: "list-decimal",
                                        children: e("setupPage.signInGuideStep4")
                                    })]
                                })]
                            }), (0, A.jsx)("button", {
                                onClick: g,
                                className: (0, be.default)("h-12 min-w-[266px] rounded-full text-base text-white border-0 cursor-pointer", "bg-[linear-gradient(95.96deg,#8A57EA_8.04%,#3771E0_57.11%)]"),
                                children: e("signin")
                            }), (0, A.jsx)("div", {
                                role: "button",
                                className: "absolute text-sm text-[#3771E0] bottom-0 right-0 opacity-60 cursor-pointer",
                                onClick: () => i(3),
                                children: e("skip")
                            })]
                        })]
                    }), (0, A.jsxs)("div", {
                        className: (0, be.default)("absolute w-full h-full flex flex-col items-center justify-center", "top-0 left-0 bg-white", {
                            hidden: o <= 2
                        }),
                        children: [(0, A.jsx)("div", {
                            className: "mb-4",
                            children: (0, A.jsx)(c7, {
                                className: (0, be.default)({
                                    hidden: !r
                                }),
                                url: n?.avatar || ""
                            })
                        }), (0, A.jsx)("div", {
                            className: "text-sm",
                            children: n?.name || ""
                        }), (0, A.jsx)("div", {
                            className: "text-xl font-bold mt-7 mb-[75px]",
                            children: e("setupPage.welcomeGuide", {
                                APP_NAME: ka
                            })
                        }), (0, A.jsx)("button", {
                            className: (0, be.default)("h-12 min-w-[266px] rounded-full text-base text-white border-0 cursor-pointer", "bg-[linear-gradient(95.96deg,#8A57EA_8.04%,#3771E0_57.11%)]"),
                            onClick: () => md.default.runtime.sendMessage({
                                type: "QUERY_SELECTION",
                                selectionText: ""
                            }),
                            children: e("setupPage.tryOut")
                        })]
                    })]
                })]
            })
        })
    }

    function c7({
        className: e,
        url: t
    }) {
        return (0, A.jsxs)("svg", {
            width: "106",
            height: "80",
            viewBox: "0 0 106 80",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: e,
            children: [(0, A.jsx)("circle", {
                cx: "53",
                cy: "36",
                r: "35",
                stroke: "url(#paint0_linear_1027_15)",
                strokeWidth: "2",
                fill: "url(#avatar)"
            }), (0, A.jsx)("text", {
                fill: "black",
                xmlSpace: "preserve",
                fontFamily: "Roboto",
                fontSize: "32",
                fontWeight: "500",
                letterSpacing: "0.21875px",
                children: (0, A.jsx)("tspan", {
                    x: "0",
                    y: "73.76",
                    children: "\u{1F389}"
                })
            }), (0, A.jsx)("text", {
                transform: "matrix(-1 0 0 1 106 44)",
                fill: "black",
                xmlSpace: "preserve",
                fontFamily: "Roboto",
                fontSize: "32",
                fontWeight: "500",
                letterSpacing: "0.21875px",
                children: (0, A.jsx)("tspan", {
                    x: "0",
                    y: "29.76",
                    children: "\u{1F389}"
                })
            }), (0, A.jsxs)("defs", {
                children: [(0, A.jsxs)("linearGradient", {
                    id: "paint0_linear_1027_15",
                    x1: "31.5",
                    y1: "1.16312e-05",
                    x2: "63.3599",
                    y2: "2.95154",
                    gradientUnits: "userSpaceOnUse",
                    children: [(0, A.jsx)("stop", {
                        stopColor: "#8A57EA"
                    }), (0, A.jsx)("stop", {
                        offset: "1",
                        stopColor: "#3771E0"
                    })]
                }), (0, A.jsx)("pattern", {
                    id: "avatar",
                    viewBox: "0,0,70,70",
                    width: "100%",
                    height: "100%",
                    children: (0, A.jsx)("image", {
                        href: t,
                        width: "70",
                        height: "70"
                    })
                })]
            })]
        })
    }
    var V1 = M(bt());

    function f7() {
        return Bp() ? null : (0, V1.jsx)("div", {
            children: (0, V1.jsx)(R1, {})
        })
    }
    var hd = f7;
    var yd = M(bt());
    (0, vd.createRoot)(document.getElementById("app")).render((0, yd.jsx)(hd, {}));
})();
