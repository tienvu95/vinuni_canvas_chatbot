"use strict";
(() => {
    var V = Object.create;
    var D = Object.defineProperty;
    var K = Object.getOwnPropertyDescriptor;
    var J = Object.getOwnPropertyNames;
    var Q = Object.getPrototypeOf,
        X = Object.prototype.hasOwnProperty;
    var Y = (e, t) => () => (t || e((t = {
        exports: {}
    }).exports, t), t.exports);
    var ee = (e, t, i, o) => {
        if (t && typeof t == "object" || typeof t == "function")
            for (let m of J(t)) !X.call(e, m) && m !== i && D(e, m, {
                get: () => t[m],
                enumerable: !(o = K(t, m)) || o.enumerable
            });
        return e
    };
    var B = (e, t, i) => (i = e != null ? V(Q(e)) : {}, ee(t || !e || !e.__esModule ? D(i, "default", {
        value: e,
        enumerable: !0
    }) : i, e));
    var C = Y((q, _) => {
        (function(e, t) {
            if (typeof define == "function" && define.amd) define("webextension-polyfill", ["module"], t);
            else if (typeof q < "u") t(_);
            else {
                var i = {
                    exports: {}
                };
                t(i), e.browser = i.exports
            }
        })(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : q, function(e) {
            "use strict";
            if (!globalThis.chrome?.runtime?.id) throw new Error("This script should only be loaded in a browser extension.");
            if (typeof globalThis.browser > "u" || Object.getPrototypeOf(globalThis.browser) !== Object.prototype) {
                let t = "The message port closed before a response was received.",
                    i = o => {
                        let m = {
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
                        if (Object.keys(m).length === 0) throw new Error("api-metadata.json has not been included in browser-polyfill");
                        class y extends WeakMap {
                            constructor(r, a = void 0) {
                                super(a), this.createItem = r
                            }
                            get(r) {
                                return this.has(r) || this.set(r, this.createItem(r)), super.get(r)
                            }
                        }
                        let c = s => s && typeof s == "object" && typeof s.then == "function",
                            l = (s, r) => (...a) => {
                                o.runtime.lastError ? s.reject(new Error(o.runtime.lastError.message)) : r.singleCallbackArg || a.length <= 1 && r.singleCallbackArg !== !1 ? s.resolve(a[0]) : s.resolve(a)
                            },
                            u = s => s == 1 ? "argument" : "arguments",
                            k = (s, r) => function(g, ...x) {
                                if (x.length < r.minArgs) throw new Error(`Expected at least ${r.minArgs} ${u(r.minArgs)} for ${s}(), got ${x.length}`);
                                if (x.length > r.maxArgs) throw new Error(`Expected at most ${r.maxArgs} ${u(r.maxArgs)} for ${s}(), got ${x.length}`);
                                return new Promise((d, f) => {
                                    if (r.fallbackToNoCallback) try {
                                        g[s](...x, l({
                                            resolve: d,
                                            reject: f
                                        }, r))
                                    } catch {
                                        g[s](...x), r.fallbackToNoCallback = !1, r.noCallback = !0, d()
                                    } else r.noCallback ? (g[s](...x), d()) : g[s](...x, l({
                                        resolve: d,
                                        reject: f
                                    }, r))
                                })
                            },
                            T = (s, r, a) => new Proxy(r, {
                                apply(g, x, d) {
                                    return a.call(x, s, ...d)
                                }
                            }),
                            M = Function.call.bind(Object.prototype.hasOwnProperty),
                            P = (s, r = {}, a = {}) => {
                                let g = Object.create(null),
                                    x = {
                                        has(f, n) {
                                            return n in s || n in g
                                        },
                                        get(f, n, b) {
                                            if (n in g) return g[n];
                                            if (!(n in s)) return;
                                            let A = s[n];
                                            if (typeof A == "function")
                                                if (typeof r[n] == "function") A = T(s, s[n], r[n]);
                                                else if (M(a, n)) {
                                                let w = k(n, a[n]);
                                                A = T(s, s[n], w)
                                            } else A = A.bind(s);
                                            else if (typeof A == "object" && A !== null && (M(r, n) || M(a, n))) A = P(A, r[n], a[n]);
                                            else if (M(a, "*")) A = P(A, r[n], a["*"]);
                                            else return Object.defineProperty(g, n, {
                                                configurable: !0,
                                                enumerable: !0,
                                                get() {
                                                    return s[n]
                                                },
                                                set(w) {
                                                    s[n] = w
                                                }
                                            }), A;
                                            return g[n] = A, A
                                        },
                                        set(f, n, b, A) {
                                            return n in g ? g[n] = b : s[n] = b, !0
                                        },
                                        defineProperty(f, n, b) {
                                            return Reflect.defineProperty(g, n, b)
                                        },
                                        deleteProperty(f, n) {
                                            return Reflect.deleteProperty(g, n)
                                        }
                                    },
                                    d = Object.create(s);
                                return new Proxy(d, x)
                            },
                            S = s => ({
                                addListener(r, a, ...g) {
                                    r.addListener(s.get(a), ...g)
                                },
                                hasListener(r, a) {
                                    return r.hasListener(s.get(a))
                                },
                                removeListener(r, a) {
                                    r.removeListener(s.get(a))
                                }
                            }),
                            Z = new y(s => typeof s != "function" ? s : function(a) {
                                let g = P(a, {}, {
                                    getContent: {
                                        minArgs: 0,
                                        maxArgs: 0
                                    }
                                });
                                s(g)
                            }),
                            F = new y(s => typeof s != "function" ? s : function(a, g, x) {
                                let d = !1,
                                    f, n = new Promise(v => {
                                        f = function(p) {
                                            d = !0, v(p)
                                        }
                                    }),
                                    b;
                                try {
                                    b = s(a, g, f)
                                } catch (v) {
                                    b = Promise.reject(v)
                                }
                                let A = b !== !0 && c(b);
                                if (b !== !0 && !A && !d) return !1;
                                let w = v => {
                                    v.then(p => {
                                        x(p)
                                    }, p => {
                                        let L;
                                        p && (p instanceof Error || typeof p.message == "string") ? L = p.message : L = "An unexpected error occurred", x({
                                            __mozWebExtensionPolyfillReject__: !0,
                                            message: L
                                        })
                                    }).catch(p => {})
                                };
                                return w(A ? b : n), !0
                            }),
                            z = ({
                                reject: s,
                                resolve: r
                            }, a) => {
                                o.runtime.lastError ? o.runtime.lastError.message === t ? r() : s(new Error(o.runtime.lastError.message)) : a && a.__mozWebExtensionPolyfillReject__ ? s(new Error(a.message)) : r(a)
                            },
                            j = (s, r, a, ...g) => {
                                if (g.length < r.minArgs) throw new Error(`Expected at least ${r.minArgs} ${u(r.minArgs)} for ${s}(), got ${g.length}`);
                                if (g.length > r.maxArgs) throw new Error(`Expected at most ${r.maxArgs} ${u(r.maxArgs)} for ${s}(), got ${g.length}`);
                                return new Promise((x, d) => {
                                    let f = z.bind(null, {
                                        resolve: x,
                                        reject: d
                                    });
                                    g.push(f), a.sendMessage(...g)
                                })
                            },
                            G = {
                                devtools: {
                                    network: {
                                        onRequestFinished: S(Z)
                                    }
                                },
                                runtime: {
                                    onMessage: S(F),
                                    onMessageExternal: S(F),
                                    sendMessage: j.bind(null, "sendMessage", {
                                        minArgs: 1,
                                        maxArgs: 3
                                    })
                                },
                                tabs: {
                                    sendMessage: j.bind(null, "sendMessage", {
                                        minArgs: 2,
                                        maxArgs: 3
                                    })
                                }
                            },
                            R = {
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
                        return m.privacy = {
                            network: {
                                "*": R
                            },
                            services: {
                                "*": R
                            },
                            websites: {
                                "*": R
                            }
                        }, P(o, G, m)
                    };
                e.exports = i(chrome)
            } else e.exports = globalThis.browser
        })
    });
    var E = B(C());
    var W = B(C());
    var se = "form",
        re = "form textarea",
        te = "form textarea ~ button";

    function h() {
        let e = {
                loading: !1,
                login: !1,
                error: !1,
                busy: !1,
                chat: !1,
                occupy: !1,
                occupyText: ""
            },
            t = !!document.querySelector(".challenge-form #spinner"),
            i = !location.pathname.startsWith("/auth/login"),
            o = document.querySelector(re),
            m = document.querySelector(te),
            y = i && !!document.querySelector(se) && !o,
            c = i && !!m && m.disabled,
            l = !t && i && !!o && !!m,
            u = i && !!o && o.value.length > 0,
            k = u ? o.value : "";
        return e.loading = t, e.login = i, e.error = y, e.busy = c, e.chat = l, e.occupy = u, e.occupyText = k, e
    }

    function ne() {
        let e = document.querySelector("form textarea"),
            t = document.querySelector("form textarea ~ button");
        return {
            textarea: e,
            sendButton: t
        }
    }
    async function ae(e, t) {
        e.value = t
    }
    async function oe(e) {
        e.click()
    }
    async function N(e) {
        await new Promise(t => {
            setTimeout(t, e)
        })
    }
    async function O(e, t = 5) {
        if (t <= 0) return;
        let i = Date.now(),
            o = h();
        if (o.loading)
            for (; Date.now() - i < 1e3 * 30 && (await N(200), o = h(), !!o.loading););
        if (!o.login) return;
        if (o.error) return location.reload();
        o.occupy;
        let m = ne();
        if (!m.textarea || !m.sendButton) return O(e, t = t - 1);
        await ae(m.textarea, e), await oe(m.sendButton);
        let y = Date.now(),
            c = 0;
        for (; c < 50 && (c += 1, await N(100), !h().busy););
        let l = 0;
        for (; l < 200;) {
            l += 1, await N(300);
            let u = h();
            if (!(!u.error && u.busy)) {
                if (!u.error && !u.busy) break;
                return location.reload()
            }
        }
        W.default.runtime.sendMessage({
            type: "automate-send-prompt-done"
        })
    }
    var $ = B(C());
    async function* I(e) {
        let t = e.getReader();
        try {
            for (;;) {
                let {
                    done: i,
                    value: o
                } = await t.read();
                if (i) return;
                yield o
            }
        } finally {
            t.releaseLock()
        }
    }
    async function H() {
        ge();
        let e, t = new Promise(m => {
                e = m
            }),
            i = (m, y) => {
                let c = h();
                c.chat && ($.default.runtime.sendMessage({
                    type: "guard-session-activated"
                }), e()), !c.loading && !c.login && ($.default.runtime.sendMessage({
                    type: "guard-session-logout"
                }), e())
            };
        setTimeout(() => e(), 1e3 * 40);
        let o = new MutationObserver(i);
        o.observe(document.body, {
            subtree: !0,
            childList: !0
        }), await t, o.disconnect()
    }

    function ge() {
        window.guardTipVisible = !0
    }
    async function U(e) {
        let t, i = new Promise(l => {
                t = l
            }),
            o = new AbortController,
            m = l => {
                switch (l.type) {
                    case "guard-proxy-request":
                        t(l), e.postMessage({
                            type: "guard-proxy-request-received",
                            key: l.key
                        });
                        break
                }
            };
        e.onMessage.addListener(m);
        let y = () => {
            o.abort()
        };
        e.onDisconnect.addListener(y);
        let c = await i;
        try {
            let l = await fetch(c.url, {
                    ...c.options,
                    signal: o.signal
                }),
                u = {
                    type: "guard-proxy-response",
                    key: c.key,
                    options: {
                        status: l.status,
                        statusText: l.statusText,
                        headers: l.headers
                    }
                };
            e.postMessage(u);
            for await (let k of I(l.body)) {
                let T = {
                    type: "guard-proxy-response-chunk",
                    key: c.key,
                    value: new TextDecoder().decode(k),
                    done: !1
                };
                e.postMessage(T)
            }
            e.postMessage({
                type: "guard-proxy-response-chunk",
                key: c.key,
                value: "",
                done: !0
            })
        } catch (l) {
            let u = {
                type: "guard-proxy-response-error",
                key: c.key,
                error: l.message
            };
            e.postMessage(u)
        }
        e.onMessage.removeListener(m), e.onDisconnect.removeListener(y), e.disconnect()
    }
    E.default.runtime.onMessage.addListener(e => {
        switch (e.type) {
            case "automate-send-prompt":
                return O(e.prompt);
            case "guard-session-activate":
                H();
                break;
            case "guard-session-start":
                break;
            default:
                break
        }
    });
    E.default.runtime.onConnect.addListener(e => {
        switch (e.name) {
            case "guard-proxy":
                U(e);
                break
        }
    });
    E.default.runtime.sendMessage({
        type: "loaded"
    });
})();
