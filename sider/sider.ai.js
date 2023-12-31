"use strict";
(() => {
    var zt = Object.create;
    var He = Object.defineProperty;
    var Kt = Object.getOwnPropertyDescriptor;
    var Ht = Object.getOwnPropertyNames;
    var Qt = Object.getPrototypeOf,
        Jt = Object.prototype.hasOwnProperty;
    var Yt = (e, t) => () => (t || e((t = {
        exports: {}
    }).exports, t), t.exports);
    var Zt = (e, t, r, o) => {
        if (t && typeof t == "object" || typeof t == "function")
            for (let l of Ht(t)) !Jt.call(e, l) && l !== r && He(e, l, {
                get: () => t[l],
                enumerable: !(o = Kt(t, l)) || o.enumerable
            });
        return e
    };
    var ee = (e, t, r) => (r = e != null ? zt(Qt(e)) : {}, Zt(t || !e || !e.__esModule ? He(r, "default", {
        value: e,
        enumerable: !0
    }) : r, e));
    var Q = Yt((Pe, Qe) => {
        (function(e, t) {
            if (typeof define == "function" && define.amd) define("webextension-polyfill", ["module"], t);
            else if (typeof Pe < "u") t(Qe);
            else {
                var r = {
                    exports: {}
                };
                t(r), e.browser = r.exports
            }
        })(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : Pe, function(e) {
            "use strict";
            if (!globalThis.chrome?.runtime?.id) throw new Error("This script should only be loaded in a browser extension.");
            if (typeof globalThis.browser > "u" || Object.getPrototypeOf(globalThis.browser) !== Object.prototype) {
                let t = "The message port closed before a response was received.",
                    r = o => {
                        let l = {
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
                        if (Object.keys(l).length === 0) throw new Error("api-metadata.json has not been included in browser-polyfill");
                        class u extends WeakMap {
                            constructor(n, s = void 0) {
                                super(s), this.createItem = n
                            }
                            get(n) {
                                return this.has(n) || this.set(n, this.createItem(n)), super.get(n)
                            }
                        }
                        let b = a => a && typeof a == "object" && typeof a.then == "function",
                            p = (a, n) => (...s) => {
                                o.runtime.lastError ? a.reject(new Error(o.runtime.lastError.message)) : n.singleCallbackArg || s.length <= 1 && n.singleCallbackArg !== !1 ? a.resolve(s[0]) : a.resolve(s)
                            },
                            m = a => a == 1 ? "argument" : "arguments",
                            w = (a, n) => function(c, ...h) {
                                if (h.length < n.minArgs) throw new Error(`Expected at least ${n.minArgs} ${m(n.minArgs)} for ${a}(), got ${h.length}`);
                                if (h.length > n.maxArgs) throw new Error(`Expected at most ${n.maxArgs} ${m(n.maxArgs)} for ${a}(), got ${h.length}`);
                                return new Promise((P, M) => {
                                    if (n.fallbackToNoCallback) try {
                                        c[a](...h, p({
                                            resolve: P,
                                            reject: M
                                        }, n))
                                    } catch {
                                        c[a](...h), n.fallbackToNoCallback = !1, n.noCallback = !0, P()
                                    } else n.noCallback ? (c[a](...h), P()) : c[a](...h, p({
                                        resolve: P,
                                        reject: M
                                    }, n))
                                })
                            },
                            S = (a, n, s) => new Proxy(n, {
                                apply(c, h, P) {
                                    return s.call(h, a, ...P)
                                }
                            }),
                            g = Function.call.bind(Object.prototype.hasOwnProperty),
                            x = (a, n = {}, s = {}) => {
                                let c = Object.create(null),
                                    h = {
                                        has(M, d) {
                                            return d in a || d in c
                                        },
                                        get(M, d, j) {
                                            if (d in c) return c[d];
                                            if (!(d in a)) return;
                                            let v = a[d];
                                            if (typeof v == "function")
                                                if (typeof n[d] == "function") v = S(a, a[d], n[d]);
                                                else if (g(s, d)) {
                                                let X = w(d, s[d]);
                                                v = S(a, a[d], X)
                                            } else v = v.bind(a);
                                            else if (typeof v == "object" && v !== null && (g(n, d) || g(s, d))) v = x(v, n[d], s[d]);
                                            else if (g(s, "*")) v = x(v, n[d], s["*"]);
                                            else return Object.defineProperty(c, d, {
                                                configurable: !0,
                                                enumerable: !0,
                                                get() {
                                                    return a[d]
                                                },
                                                set(X) {
                                                    a[d] = X
                                                }
                                            }), v;
                                            return c[d] = v, v
                                        },
                                        set(M, d, j, v) {
                                            return d in c ? c[d] = j : a[d] = j, !0
                                        },
                                        defineProperty(M, d, j) {
                                            return Reflect.defineProperty(c, d, j)
                                        },
                                        deleteProperty(M, d) {
                                            return Reflect.deleteProperty(c, d)
                                        }
                                    },
                                    P = Object.create(a);
                                return new Proxy(P, h)
                            },
                            f = a => ({
                                addListener(n, s, ...c) {
                                    n.addListener(a.get(s), ...c)
                                },
                                hasListener(n, s) {
                                    return n.hasListener(a.get(s))
                                },
                                removeListener(n, s) {
                                    n.removeListener(a.get(s))
                                }
                            }),
                            A = new u(a => typeof a != "function" ? a : function(s) {
                                let c = x(s, {}, {
                                    getContent: {
                                        minArgs: 0,
                                        maxArgs: 0
                                    }
                                });
                                a(c)
                            }),
                            I = new u(a => typeof a != "function" ? a : function(s, c, h) {
                                let P = !1,
                                    M, d = new Promise(oe => {
                                        M = function(F) {
                                            P = !0, oe(F)
                                        }
                                    }),
                                    j;
                                try {
                                    j = a(s, c, M)
                                } catch (oe) {
                                    j = Promise.reject(oe)
                                }
                                let v = j !== !0 && b(j);
                                if (j !== !0 && !v && !P) return !1;
                                let X = oe => {
                                    oe.then(F => {
                                        h(F)
                                    }, F => {
                                        let Ee;
                                        F && (F instanceof Error || typeof F.message == "string") ? Ee = F.message : Ee = "An unexpected error occurred", h({
                                            __mozWebExtensionPolyfillReject__: !0,
                                            message: Ee
                                        })
                                    }).catch(F => {})
                                };
                                return X(v ? j : d), !0
                            }),
                            C = ({
                                reject: a,
                                resolve: n
                            }, s) => {
                                o.runtime.lastError ? o.runtime.lastError.message === t ? n() : a(new Error(o.runtime.lastError.message)) : s && s.__mozWebExtensionPolyfillReject__ ? a(new Error(s.message)) : n(s)
                            },
                            T = (a, n, s, ...c) => {
                                if (c.length < n.minArgs) throw new Error(`Expected at least ${n.minArgs} ${m(n.minArgs)} for ${a}(), got ${c.length}`);
                                if (c.length > n.maxArgs) throw new Error(`Expected at most ${n.maxArgs} ${m(n.maxArgs)} for ${a}(), got ${c.length}`);
                                return new Promise((h, P) => {
                                    let M = C.bind(null, {
                                        resolve: h,
                                        reject: P
                                    });
                                    c.push(M), s.sendMessage(...c)
                                })
                            },
                            R = {
                                devtools: {
                                    network: {
                                        onRequestFinished: f(A)
                                    }
                                },
                                runtime: {
                                    onMessage: f(I),
                                    onMessageExternal: f(I),
                                    sendMessage: T.bind(null, "sendMessage", {
                                        minArgs: 1,
                                        maxArgs: 3
                                    })
                                },
                                tabs: {
                                    sendMessage: T.bind(null, "sendMessage", {
                                        minArgs: 2,
                                        maxArgs: 3
                                    })
                                }
                            },
                            H = {
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
                        return l.privacy = {
                            network: {
                                "*": H
                            },
                            services: {
                                "*": H
                            },
                            websites: {
                                "*": H
                            }
                        }, x(o, R, l)
                    };
                e.exports = r(chrome)
            } else e.exports = globalThis.browser
        })
    });
    var re = ee(Q());
    var Xt = typeof global == "object" && global && global.Object === Object && global,
        ue = Xt;
    var er = typeof self == "object" && self && self.Object === Object && self,
        tr = ue || er || Function("return this")(),
        k = tr;
    var rr = k.Symbol,
        te = rr;
    var Je = Object.prototype,
        or = Je.hasOwnProperty,
        ar = Je.toString,
        ae = te ? te.toStringTag : void 0;

    function nr(e) {
        var t = or.call(e, ae),
            r = e[ae];
        try {
            e[ae] = void 0;
            var o = !0
        } catch {}
        var l = ar.call(e);
        return o && (t ? e[ae] = r : delete e[ae]), l
    }
    var Ye = nr;
    var sr = Object.prototype,
        ir = sr.toString;

    function fr(e) {
        return ir.call(e)
    }
    var Ze = fr;
    var lr = "[object Null]",
        mr = "[object Undefined]",
        Xe = te ? te.toStringTag : void 0;

    function pr(e) {
        return e == null ? e === void 0 ? mr : lr : Xe && Xe in Object(e) ? Ye(e) : Ze(e)
    }
    var N = pr;

    function ur(e) {
        return e != null && typeof e == "object"
    }
    var z = ur;
    var cr = "[object Symbol]";

    function dr(e) {
        return typeof e == "symbol" || z(e) && N(e) == cr
    }
    var et = dr;
    var gr = Array.isArray,
        tt = gr;
    var xr = /\s/;

    function yr(e) {
        for (var t = e.length; t-- && xr.test(e.charAt(t)););
        return t
    }
    var rt = yr;
    var hr = /^\s+/;

    function br(e) {
        return e && e.slice(0, rt(e) + 1).replace(hr, "")
    }
    var ot = br;

    function Ar(e) {
        var t = typeof e;
        return e != null && (t == "object" || t == "function")
    }
    var W = Ar;
    var at = 0 / 0,
        wr = /^[-+]0x[0-9a-f]+$/i,
        Tr = /^0b[01]+$/i,
        vr = /^0o[0-7]+$/i,
        kr = parseInt;

    function _r(e) {
        if (typeof e == "number") return e;
        if (et(e)) return at;
        if (W(e)) {
            var t = typeof e.valueOf == "function" ? e.valueOf() : e;
            e = W(t) ? t + "" : t
        }
        if (typeof e != "string") return e === 0 ? e : +e;
        e = ot(e);
        var r = Tr.test(e);
        return r || vr.test(e) ? kr(e.slice(2), r ? 2 : 8) : wr.test(e) ? at : +e
    }
    var Se = _r;
    var Er = "[object AsyncFunction]",
        Pr = "[object Function]",
        Sr = "[object GeneratorFunction]",
        Ir = "[object Proxy]";

    function Cr(e) {
        if (!W(e)) return !1;
        var t = N(e);
        return t == Pr || t == Sr || t == Er || t == Ir
    }
    var ce = Cr;
    var Rr = k["__core-js_shared__"],
        de = Rr;
    var nt = function() {
        var e = /[^.]+$/.exec(de && de.keys && de.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : ""
    }();

    function Or(e) {
        return !!nt && nt in e
    }
    var st = Or;
    var Mr = Function.prototype,
        jr = Mr.toString;

    function Nr(e) {
        if (e != null) {
            try {
                return jr.call(e)
            } catch {}
            try {
                return e + ""
            } catch {}
        }
        return ""
    }
    var $ = Nr;
    var Dr = /[\\^$.*+?()[\]{}|]/g,
        Br = /^\[object .+?Constructor\]$/,
        Gr = Function.prototype,
        Ur = Object.prototype,
        Lr = Gr.toString,
        Vr = Ur.hasOwnProperty,
        Fr = RegExp("^" + Lr.call(Vr).replace(Dr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

    function Wr(e) {
        if (!W(e) || st(e)) return !1;
        var t = ce(e) ? Fr : Br;
        return t.test($(e))
    }
    var it = Wr;

    function $r(e, t) {
        return e?.[t]
    }
    var ft = $r;

    function qr(e, t) {
        var r = ft(e, t);
        return it(r) ? r : void 0
    }
    var V = qr;
    var zr = V(k, "WeakMap"),
        ge = zr;
    var Kr = 9007199254740991;

    function Hr(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Kr
    }
    var xe = Hr;

    function Qr(e) {
        return e != null && xe(e.length) && !ce(e)
    }
    var lt = Qr;
    var Jr = Object.prototype;

    function Yr(e) {
        var t = e && e.constructor,
            r = typeof t == "function" && t.prototype || Jr;
        return e === r
    }
    var ye = Yr;
    var Zr = "[object Arguments]";

    function Xr(e) {
        return z(e) && N(e) == Zr
    }
    var Ie = Xr;
    var mt = Object.prototype,
        eo = mt.hasOwnProperty,
        to = mt.propertyIsEnumerable,
        ro = Ie(function() {
            return arguments
        }()) ? Ie : function(e) {
            return z(e) && eo.call(e, "callee") && !to.call(e, "callee")
        },
        pt = ro;

    function oo() {
        return !1
    }
    var ut = oo;
    var gt = typeof exports == "object" && exports && !exports.nodeType && exports,
        ct = gt && typeof module == "object" && module && !module.nodeType && module,
        ao = ct && ct.exports === gt,
        dt = ao ? k.Buffer : void 0,
        no = dt ? dt.isBuffer : void 0,
        so = no || ut,
        xt = so;
    var io = "[object Arguments]",
        fo = "[object Array]",
        lo = "[object Boolean]",
        mo = "[object Date]",
        po = "[object Error]",
        uo = "[object Function]",
        co = "[object Map]",
        go = "[object Number]",
        xo = "[object Object]",
        yo = "[object RegExp]",
        ho = "[object Set]",
        bo = "[object String]",
        Ao = "[object WeakMap]",
        wo = "[object ArrayBuffer]",
        To = "[object DataView]",
        vo = "[object Float32Array]",
        ko = "[object Float64Array]",
        _o = "[object Int8Array]",
        Eo = "[object Int16Array]",
        Po = "[object Int32Array]",
        So = "[object Uint8Array]",
        Io = "[object Uint8ClampedArray]",
        Co = "[object Uint16Array]",
        Ro = "[object Uint32Array]",
        y = {};
    y[vo] = y[ko] = y[_o] = y[Eo] = y[Po] = y[So] = y[Io] = y[Co] = y[Ro] = !0;
    y[io] = y[fo] = y[wo] = y[lo] = y[To] = y[mo] = y[po] = y[uo] = y[co] = y[go] = y[xo] = y[yo] = y[ho] = y[bo] = y[Ao] = !1;

    function Oo(e) {
        return z(e) && xe(e.length) && !!y[N(e)]
    }
    var yt = Oo;

    function Mo(e) {
        return function(t) {
            return e(t)
        }
    }
    var ht = Mo;
    var bt = typeof exports == "object" && exports && !exports.nodeType && exports,
        ne = bt && typeof module == "object" && module && !module.nodeType && module,
        jo = ne && ne.exports === bt,
        Ce = jo && ue.process,
        No = function() {
            try {
                var e = ne && ne.require && ne.require("util").types;
                return e || Ce && Ce.binding && Ce.binding("util")
            } catch {}
        }(),
        Re = No;
    var At = Re && Re.isTypedArray,
        Do = At ? ht(At) : yt,
        wt = Do;

    function Bo(e, t) {
        return function(r) {
            return e(t(r))
        }
    }
    var Tt = Bo;
    var Go = Tt(Object.keys, Object),
        vt = Go;
    var Uo = Object.prototype,
        Lo = Uo.hasOwnProperty;

    function Vo(e) {
        if (!ye(e)) return vt(e);
        var t = [];
        for (var r in Object(e)) Lo.call(e, r) && r != "constructor" && t.push(r);
        return t
    }
    var kt = Vo;
    var Fo = V(k, "Map"),
        he = Fo;
    var Wo = V(k, "DataView"),
        be = Wo;
    var $o = V(k, "Promise"),
        Ae = $o;
    var qo = V(k, "Set"),
        we = qo;
    var _t = "[object Map]",
        zo = "[object Object]",
        Et = "[object Promise]",
        Pt = "[object Set]",
        St = "[object WeakMap]",
        It = "[object DataView]",
        Ko = $(be),
        Ho = $(he),
        Qo = $(Ae),
        Jo = $(we),
        Yo = $(ge),
        J = N;
    (be && J(new be(new ArrayBuffer(1))) != It || he && J(new he) != _t || Ae && J(Ae.resolve()) != Et || we && J(new we) != Pt || ge && J(new ge) != St) && (J = function(e) {
        var t = N(e),
            r = t == zo ? e.constructor : void 0,
            o = r ? $(r) : "";
        if (o) switch (o) {
            case Ko:
                return It;
            case Ho:
                return _t;
            case Qo:
                return Et;
            case Jo:
                return Pt;
            case Yo:
                return St
        }
        return t
    });
    var Ct = J;
    var Zo = function() {
            return k.Date.now()
        },
        Te = Zo;
    var Xo = "Expected a function",
        ea = Math.max,
        ta = Math.min;

    function ra(e, t, r) {
        var o, l, u, b, p, m, w = 0,
            S = !1,
            g = !1,
            x = !0;
        if (typeof e != "function") throw new TypeError(Xo);
        t = Se(t) || 0, W(r) && (S = !!r.leading, g = "maxWait" in r, u = g ? ea(Se(r.maxWait) || 0, t) : u, x = "trailing" in r ? !!r.trailing : x);

        function f(s) {
            var c = o,
                h = l;
            return o = l = void 0, w = s, b = e.apply(h, c), b
        }

        function A(s) {
            return w = s, p = setTimeout(T, t), S ? f(s) : b
        }

        function I(s) {
            var c = s - m,
                h = s - w,
                P = t - c;
            return g ? ta(P, u - h) : P
        }

        function C(s) {
            var c = s - m,
                h = s - w;
            return m === void 0 || c >= t || c < 0 || g && h >= u
        }

        function T() {
            var s = Te();
            if (C(s)) return R(s);
            p = setTimeout(T, I(s))
        }

        function R(s) {
            return p = void 0, x && o ? f(s) : (o = l = void 0, b)
        }

        function H() {
            p !== void 0 && clearTimeout(p), w = 0, o = m = l = p = void 0
        }

        function a() {
            return p === void 0 ? b : R(Te())
        }

        function n() {
            var s = Te(),
                c = C(s);
            if (o = arguments, l = this, m = s, c) {
                if (p === void 0) return A(m);
                if (g) return clearTimeout(p), p = setTimeout(T, t), f(m)
            }
            return p === void 0 && (p = setTimeout(T, t)), b
        }
        return n.cancel = H, n.flush = a, n
    }
    var Oe = ra;
    var oa = "[object Map]",
        aa = "[object Set]",
        na = Object.prototype,
        sa = na.hasOwnProperty;

    function ia(e) {
        if (e == null) return !0;
        if (lt(e) && (tt(e) || typeof e == "string" || typeof e.splice == "function" || xt(e) || wt(e) || pt(e))) return !e.length;
        var t = Ct(e);
        if (t == oa || t == aa) return !e.size;
        if (ye(e)) return !kt(e).length;
        for (var r in e)
            if (sa.call(e, r)) return !1;
        return !0
    }
    var Me = ia;
    var fa = [EvalError, RangeError, ReferenceError, SyntaxError, TypeError, URIError, globalThis.DOMException, globalThis.AssertionError, globalThis.SystemError].filter(Boolean).map(e => [e.name, e]),
        Os = new Map(fa);
    var Ns = Symbol(".toJSON was called");
    var De = ee(Q());
    var O = ee(Q());

    function D(e) {
        return O.default.storage.local.get(e)
    }
    async function B(e) {
        return O.default.storage.local.set(e)
    }
    async function je(e) {
        let t = await O.default.storage.local.get(e);
        return typeof e == "string" ? t[e] : t
    }
    async function Rt(e) {
        return new Promise(t => {
            D({
                [e]: ""
            }).then(r => {
                if (r[e]) {
                    t(r[e]);
                    return
                }

                function o(l) {
                    l[e]?.newValue && (t(l[e]?.newValue), O.default.storage.local.onChanged.removeListener(o))
                }
                O.default.storage.local.onChanged.addListener(o)
            })
        })
    }
    async function se(e) {
        return O.default.storage.local.remove(e)
    }
    async function ve(e) {
        if (O.default?.cookies) {
            let t = await O.default.cookies.get(e);
            return t?.value ? decodeURIComponent(t.value) : ""
        }
        return O.default.runtime.sendMessage({
            type: "GET_COOKIE",
            data: e
        })
    }
    async function Ne(e) {
        return O.default?.cookies ? await O.default.cookies.set(e) : O.default.runtime.sendMessage({
            type: "SET_COOKIE",
            data: e
        })
    }
    var Ot = De.default.runtime.getManifest(),
        jt = Ot.version_name === Ot.version + "-e";
    var Be = De.default.runtime.getManifest().version;
    var Mt = "https://sider.ai",
        G = {
            origin: Mt,
            api: `${Mt}/api`
        };
    var ie = (i => (i.English = "en", i["Chinese(Simplified)"] = "zh_CN", i["Chinese(Traditional)"] = "zh_TW", i.Spanish = "es", i.French = "fr", i.Japanese = "ja", i.German = "de", i.Portuguese = "pt", i.Arabic = "ar", i.Russian = "ru", i.Italian = "it", i.Korean = "ko", i.Hindi = "hi", i.Dutch = "nl", i.Polish = "pl", i.Amharic = "am", i.Bulgarian = "bg", i.Bengali = "bn", i.Catalan = "ca", i.Czech = "cs", i.Danish = "da", i.Greek = "el", i.Estonian = "et", i.Persian = "fa", i.Finnish = "fi", i.Filipino = "fil", i.Gujarati = "gu", i.Hebrew = "he", i.Croatian = "hr", i.Hungarian = "hu", i.Indonesian = "id", i.Kannada = "kn", i.Lithuanian = "lt", i.Latvian = "lv", i.Malayalam = "ml", i.Marathi = "mr", i.Malay = "ms", i.Norwegian = "no", i.Romanian = "ro", i.Slovak = "sk", i.Slovenian = "sl", i.Serbian = "sr", i.Swedish = "sv", i.Swahili = "sw", i.Tamil = "ta", i.Telugu = "te", i.Thai = "th", i.Turkish = "tr", i.Ukrainian = "uk", i.Urdu = "ur", i.Vietnamese = "vi", i))(ie || {}),
        ma = {
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
        Ws = Object.entries(ie).reduce((e, [t, r]) => (e[r] = t, e), {}),
        $s = Object.entries(ie).map(([e, t]) => ({
            label: e,
            value: t
        })),
        qs = Object.entries(ma).map(([e, t]) => ({
            label: t,
            value: e
        }));
    async function Nt() {
        let e = "provider:gpt3",
            [t = "siderApi", r] = await Promise.all([je("provider"), je(e)]);
        return {
            provider: t,
            configs: {
                gpt3: r
            }
        }
    }
    var zs = {
        pricing: `${G.origin}/pricing`,
        login: `${G.origin}/login`,
        myChats: `${G.origin}/mychats`,
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
    var Ke = ee(Q());

    function Dt(e) {
        let t, r, o, l, u, b, p;
        return m(), {
            feed: w,
            reset: m
        };

        function m() {
            t = !0, r = "", o = 0, l = -1, u = void 0, b = void 0, p = ""
        }

        function w(g) {
            r = r ? r + g : g, t && pa(r) && (r = r.slice(Bt.length)), t = !1;
            let x = r.length,
                f = 0,
                A = !1;
            for (; f < x;) {
                A && (r[f] === `
` && ++f, A = !1);
                let I = -1,
                    C = l,
                    T;
                for (let R = o; I < 0 && R < x; ++R) T = r[R], T === ":" && C < 0 ? C = R - f : T === "\r" ? (A = !0, I = R - f) : T === `
` && (I = R - f);
                if (I < 0) {
                    o = x - f, l = C;
                    break
                } else o = 0, l = -1;
                S(r, f, C, I), f += I + 1
            }
            f === x ? r = "" : f > 0 && (r = r.slice(f))
        }

        function S(g, x, f, A) {
            if (A === 0) {
                p.length > 0 && (e({
                    type: "event",
                    id: u,
                    event: b || void 0,
                    data: p.slice(0, -1)
                }), p = "", u = void 0), b = void 0;
                return
            }
            let I = f < 0,
                C = g.slice(x, x + (I ? A : f)),
                T = 0;
            I ? T = A : g[x + f + 1] === " " ? T = f + 2 : T = f + 1;
            let R = x + T,
                H = A - T,
                a = g.slice(R, R + H).toString();
            if (C === "data") p += a ? "".concat(a, `
`) : `
`;
            else if (C === "event") b = a;
            else if (C === "id" && !a.includes("\0")) u = a;
            else if (C === "retry") {
                let n = parseInt(a, 10);
                Number.isNaN(n) || e({
                    type: "reconnect-interval",
                    value: n
                })
            }
        }
    }
    var Bt = [239, 187, 191];

    function pa(e) {
        return Bt.every((t, r) => e.charCodeAt(r) === t)
    }
    var ke, ua = new Uint8Array(16);

    function Ge() {
        if (!ke && (ke = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !ke)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return ke(ua)
    }
    var _ = [];
    for (let e = 0; e < 256; ++e) _.push((e + 256).toString(16).slice(1));

    function Gt(e, t = 0) {
        return (_[e[t + 0]] + _[e[t + 1]] + _[e[t + 2]] + _[e[t + 3]] + "-" + _[e[t + 4]] + _[e[t + 5]] + "-" + _[e[t + 6]] + _[e[t + 7]] + "-" + _[e[t + 8]] + _[e[t + 9]] + "-" + _[e[t + 10]] + _[e[t + 11]] + _[e[t + 12]] + _[e[t + 13]] + _[e[t + 14]] + _[e[t + 15]]).toLowerCase()
    }
    var ca = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
        Ue = {
            randomUUID: ca
        };

    function da(e, t, r) {
        if (Ue.randomUUID && !t && !e) return Ue.randomUUID();
        e = e || {};
        let o = e.random || (e.rng || Ge)();
        if (o[6] = o[6] & 15 | 64, o[8] = o[8] & 63 | 128, t) {
            r = r || 0;
            for (let l = 0; l < 16; ++l) t[r + l] = o[l];
            return t
        }
        return Gt(o)
    }
    var fe = da;
    async function* Ut(e) {
        let t = e.getReader();
        try {
            for (;;) {
                let {
                    done: r,
                    value: o
                } = await t.read();
                if (r) return;
                yield o
            }
        } finally {
            t.releaseLock()
        }
    }
    var ga = ee(Q());
    var Le = (...e) => e.join("/").replace(/([^:])\/{2,}/g, "$1/");

    function Lt(e = 1e3) {
        return new Promise(t => setTimeout(t, e))
    }
    async function le(e, t = 1e3, r = 2) {
        let o = 0;
        for (;;) {
            try {
                return await e()
            } catch (l) {
                if (r >= 0 && o++ >= r) throw l
            }
            await Lt(t)
        }
    }

    function Ve(e, t = 0) {
        let r = !1,
            o;
        return function(...l) {
            return r || (r = !0, o = new Promise((u, b) => {
                e(...l).then(u).catch(b).finally(async () => {
                    t && await Lt(t), r = !1
                })
            })), o
        }
    }
    var Vt = ee(Q());
    async function Y() {
        let {
            generatedRandomId: e
        } = await D({
            generatedRandomId: ""
        });
        if (!e) {
            let t = await xa();
            return t || (t = fe(), ya(t)), Vt.default.storage.local.set({
                generatedRandomId: t
            }), t
        }
        return e
    }
    var Ft = G.origin.replace(/\/\/\w+?\./, "//Y2hhdGdwdC1zaWRlYmFy."),
        Wt = "zgv2awnlswq";
    async function xa() {
        try {
            return await ve({
                url: Ft,
                name: Wt
            })
        } catch {
            return ""
        }
    }
    async function ya(e) {
        let t = Math.round(Date.now() / 1e3) + 31104e3;
        try {
            return await Ne({
                url: Ft,
                name: Wt,
                value: e,
                expirationDate: t,
                secure: !0
            })
        } catch {}
    }

    function Fe(e, t) {
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
                throw Z.getVipInfoCached(), new Error("error_sider_api_limit");
            case 1107:
                throw Z.getVipInfoCached(), new Error("error_sider_api_limit2");
            case 1109:
                throw new Error("error_sider_gpt4_highload");
            case 1110:
                throw new Error("error_sider_gpt_highload");
            case 1112:
            case 1113:
                throw Z.getVipInfoCached(), new Error("error_sider_gpt4_limit");
            case 1121:
                throw Z.getVipInfoCached(), new Error("error_sider_summary_video_limit");
            default:
                break
        }
        throw typeof t == "string" && t.startsWith("504") ? new Error("error_sider_timeout") : new Error(t)
    }
    var U = `ChitChat_${jt?"Edge":"Chrome"}_Ext`,
        q = Be,
        We = Intl.DateTimeFormat().resolvedOptions().timeZone,
        Z = {
            async refreshToken(e) {
                let t = await E("/v1/user/token/refresh", {
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
                p2: o
            }) {
                return await E("/v1/ad/action", {
                    source: e,
                    action: t,
                    p1: r,
                    p2: o
                }, {
                    headers: {
                        Authorization: ""
                    }
                })
            },
            getSiderAnonymousToken: Ve(async () => {
                let e = await Y();
                return E("/v1/user/login/device_id", {
                    device_id: e,
                    uuid: e,
                    app_name: U,
                    app_version: q
                }, {
                    headers: {
                        Authorization: ""
                    }
                })
            }),
            getUserInfo: async () => {
                let e = await L(`/v1/user/info?app_name=${U}&app_version=${q}`);
                return B({
                    userInfo: e
                }), e
            },
            getVipInfo: $t,
            getVipInfoCached: Ve($t, 5e3),
            async getPricingPlan() {
                let e = await L("/v1/app/ipinfo", null, {
                        headers: {
                            Authorization: ""
                        }
                    }),
                    t = e.region === "CN" || We === "Asia/Shanghai" && (await D({
                        language: "en"
                    })).language === "zh_CN",
                    r = await L(`/v1/payment/pricing?from=web&location=${t?"CN":e.region}`, null, {
                        headers: {
                            Authorization: ""
                        }
                    });
                B({
                    pricingPlan: r.plan.map(o => ({
                        currency: o.currency,
                        interval: o.interval,
                        originPrice: o.origin_price / 100,
                        price: o.price / 100
                    }))
                })
            },
            async getUserSettings() {
                return (await L(`/v1/user/settings?app_name=${U}`)).client_setting
            },
            setUserSettings(e) {
                return le(() => E("/v1/user/settings", {
                    app_name: U,
                    client_setting: e
                }))
            },
            getUserPromptList(e) {
                return L(`/v1/prompt/list?type=${e}&page_size=999`)
            },
            createUserPrompt(e) {
                return le(() => E("/v1/prompt/create", {
                    is_template: !1,
                    ...e
                }))
            },
            editUserPrompt(e) {
                return le(() => E("/v1/prompt/edit", e))
            },
            delUserPrompt(e) {
                return le(() => E("/v1/prompt/update", {
                    id: e,
                    status: "Deleted"
                }))
            },
            async uploadHistoryMsg(e) {
                return (await E("/v1/conversation/upload", {
                    app_name: U,
                    app_version: q,
                    messages: e
                })).cid
            },
            uploadConversion(e) {
                return E("/v1/conversation/upload", {
                    share: !0,
                    app_name: U,
                    app_version: q,
                    messages: e
                })
            },
            saveConversion(e) {
                return E("/v1/conversation/upload", {
                    save_by_user: !0,
                    app_name: U,
                    app_version: q,
                    messages: e
                })
            },
            async shareConversion(e) {
                return (await L(`/v1/conversation/share/${e}`)).share_key
            },
            saveSiderConversion(e) {
                return L(`/v1/conversation/save-by-user/${e}`)
            },
            unSaveSiderConversion(e) {
                return L(`/v1/conversation/unsave-by-user/${e}`)
            },
            delConversion(e) {
                return ha(`/v1/conversation/delete/${e}`)
            },
            async sendFeedback({
                title: e,
                detail: t,
                email: r
            }) {
                let o = await qe();
                return E("/v1/app/feedback", {
                    title: e,
                    email: r,
                    data: {
                        detail: t
                    },
                    app_name: U,
                    app_version: q
                }, {
                    headers: {
                        Authorization: o?.token || ""
                    }
                })
            },
            async getInviteRewardConfig() {
                let e = await L("/v1/invite/config", null, {
                    headers: {
                        Authorization: ""
                    }
                });
                return B({
                    inviteRewardConfig: {
                        "gpt3.5": e.GPT3Dot5Count,
                        gpt4: e.GPT4Count
                    }
                }), e
            },
            createInviteLink() {
                return E("/v1/invite/create", {
                    type: "link"
                })
            },
            async getInviteRewardCount() {
                let e = await L("/v1/invite/reward");
                return B({
                    inviteRewardCount: {
                        "gpt3.5": e.reward_gpt3dot5_count,
                        gpt4: e.reward_gpt4_count
                    }
                }), e
            },
            inviteFinish: async () => {
                let e = await Y();
                return E("/v1/invite/finish", {
                    device_id: e
                })
            },
            async summaryVideo(e) {
                function t(f) {
                    if (f?.total)
                        if (e.vip) {
                            let A = {
                                "gpt-3.5": {
                                    total: f.total,
                                    remain: f.remain,
                                    extraTotal: f.extra_total,
                                    extraRemain: f.extra_quota,
                                    period: f.remain_period
                                }
                            };
                            me(A)
                        } else {
                            let A = {
                                summary: {
                                    remain: f.remain
                                }
                            };
                            me(A)
                        }
                }
                let r = Oe(t, 1e3, {
                        leading: !0
                    }),
                    o = {
                        app_name: U,
                        app_version: q,
                        tz_name: We,
                        content: e.text,
                        title: e.title,
                        language: e.lang,
                        source: e.source,
                        source_type: e.sourceType,
                        request_id: fe(),
                        cid: ""
                    },
                    l = [];
                e.getAbortMethod(() => {
                    for (let f of l) f()
                });
                let {
                    content: u,
                    cid: b,
                    ...p
                } = o, m = null;
                try {
                    m = await E("/v1/completion/summarize_init", p, {
                        getAbortMethod(f) {
                            l.push(f)
                        }
                    })
                } catch {}
                m && (o.cid = m.cid || "");
                let w = E("/v1/completion/summarize_all", o, {
                        onStreamData({
                            data: f,
                            done: A
                        }) {
                            !A && f && r(f), e.onStreamData({
                                text: f?.text || "",
                                done: A
                            })
                        },
                        getAbortMethod(f) {
                            l.push(f)
                        }
                    }),
                    S = E("/v1/completion/summarize", o, {
                        getAbortMethod(f) {
                            l.push(f)
                        }
                    }),
                    [g, x] = await Promise.all([w, S]);
                return t(x), {
                    text: x.text,
                    subtitle: x.subtitle
                }
            },
            statUserStop(e, t) {
                return E("/v1/completion/mark-user-stop", {
                    app_name: U,
                    app_version: q,
                    cid: e,
                    mid: t
                })
            }
        };
    async function $t() {
        let e;
        try {
            e = await L(`/v1/completion/limit?app_name=${U}&app_version=${q}&tz_name=${We}`)
        } catch (p) {
            throw me({
                isVIP: !1
            }), p
        }
        if (!e.chat.count) throw B({
            ERR_MUST_LOGIN: !0
        }), new Error("wrong_data");
        let t = e.user_type,
            r = ["device", "login", "premium"],
            o = e.chat_period_info,
            l = e.gpt_4_chat_period_info,
            u = e.search_period_info,
            b = {
                isVIP: e.user_type === "premium",
                "gpt-3.5": {
                    total: e.chat.count,
                    remain: e.chat.remain,
                    extraTotal: e.chat.extra_total,
                    extraRemain: e.chat.extra_quota,
                    period: e.chat.period,
                    maxToken: o[t]?.prompt_max_token,
                    award: r.reduce((p, m) => (p[m] = {
                        count: o[m].count
                    }, p), {})
                },
                "gpt-4": {
                    total: e.gpt_4_chat.count,
                    remain: e.gpt_4_chat.remain,
                    extraTotal: e.gpt_4_chat.extra_total,
                    extraRemain: e.gpt_4_chat.extra_quota,
                    period: e.gpt_4_chat.period,
                    maxToken: l[t]?.prompt_max_token,
                    award: r.reduce((p, m) => (p[m] = {
                        count: l[m].count
                    }, p), {})
                },
                search: {
                    total: e.search.count,
                    remain: e.search.remain,
                    extraTotal: e.search.extra_total,
                    extraRemain: e.search.extra_quota,
                    period: e.search.period,
                    award: r.reduce((p, m) => (p[m] = {
                        count: u[m].count
                    }, p), {})
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
        return me(b), b
    }
    async function $e(e, t = null, r = {}) {
        e.startsWith("http") || (e = Le(G.api, e));
        let {
            onStreamData: o,
            getAbortMethod: l,
            ...u
        } = r;
        if (!u.signal) {
            let w = new AbortController;
            u.signal = w.signal, l?.(() => {
                w.abort()
            })
        }
        u.headers ||= {};
        let b = "";
        if ("Authorization" in u.headers || (b = (await pe()).token), u.headers = Object.assign({
                "Content-Type": "application/json",
                Authorization: b
            }, u.headers), t) try {
            t instanceof FormData || t instanceof Blob || t instanceof URLSearchParams || t instanceof ReadableStream || t instanceof ArrayBuffer || t instanceof DataView ? u.body = t : u.body = JSON.stringify(t)
        } catch {
            u.body = t
        }
        let p = await fetch(e, u),
            m = null;
        if (o || (m = await p.json().catch(() => ({}))), se("ERR_MUST_LOGIN"), !p.ok || m && m.code !== 0) {
            if (m || (m = await p.json().catch(() => ({}))), m.errMsg = m.msg || m.message, Me(m)) m.errMsg = `${p.status} ${p.statusText}`;
            else {
                (m.code === 1003 || m.code === 1006) && B({
                    ERR_MUST_LOGIN: !0
                });
                try {
                    Fe(m.code, m.msg || m.message)
                } catch (w) {
                    m.errMsg = w.message
                }
            }
            throw o && o({
                data: null,
                done: !0
            }), m
        }
        if (o && p.body) {
            let w = Dt(S => {
                if (S.type === "event") {
                    let g = {
                            code: 0,
                            data: null,
                            msg: "",
                            errMsg: "",
                            done: S.data === "[DONE]"
                        },
                        x = null;
                    try {
                        x = JSON.parse(S.data)
                    } catch {}
                    if (x && (g = {
                            ...g,
                            ...x
                        }), g.code !== 0) {
                        try {
                            Fe(g.code, g.msg)
                        } catch (f) {
                            g.errMsg = f.message
                        }
                        throw o({
                            data: null,
                            done: !0
                        }), g
                    }
                    o({
                        data: g.data,
                        done: g.done
                    })
                }
            });
            for await (let S of Ut(p.body)) {
                let g = new TextDecoder().decode(S);
                w.feed(g)
            }
        }
        return m?.data
    }

    function L(e, t = null, r = {}) {
        return $e(e, t, {
            method: "GET",
            ...r
        })
    }

    function E(e, t = null, r = {}) {
        return $e(e, t, {
            method: "POST",
            ...r
        })
    }

    function ha(e, t = null, r = {}) {
        return $e(e, t, {
            method: "DELETE",
            ...r
        })
    }
    async function ba() {
        let e = await ze("userinfo-type");
        return e === null ? null : !!(e && e !== "device")
    }
    async function Aa() {
        let {
            vipInfo: e
        } = await D({
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
    async function me(e) {
        let t = await Aa();
        return B({
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
    async function pe() {
        let e = await qe();
        return e ? {
            ...e,
            anonymous: !1
        } : (e = await wa(), {
            ...e,
            anonymous: !0
        })
    }
    async function qe() {
        if (await ba()) {
            let e = await ze("token"),
                t = await ze("refresh_token");
            return e ? {
                token: e,
                refreshToken: t
            } : null
        }
        return null
    }
    async function wa() {
        let e = await qt();
        if (e) return e;
        let {
            __getSiderAnonymousToken__: t
        } = await D({
            __getSiderAnonymousToken__: !1
        });
        if (t) await Rt("siderApiToken"), e = await qt();
        else {
            B({
                __getSiderAnonymousToken__: !0
            });
            try {
                let r = await Z.getSiderAnonymousToken();
                e = {
                    token: r.token.token,
                    refreshToken: r.token.refresh_token
                }
            } catch (r) {
                throw se("__getSiderAnonymousToken__"), r
            }
            se("__getSiderAnonymousToken__"), Ta(e)
        }
        return e
    }
    async function Ta(e) {
        return Ke.default.storage.local.set({
            siderApiToken: e.token,
            siderApiRefreshToken: e.refreshToken
        })
    }
    async function qt() {
        let {
            siderApiToken: e,
            siderApiRefreshToken: t
        } = await Ke.default.storage.local.get(["siderApiToken", "siderApiRefreshToken"]);
        return e ? {
            token: e,
            refreshToken: t
        } : null
    }
    async function ze(e) {
        try {
            let t = await ve({
                name: e,
                url: G.origin
            });
            if (!t) throw new Error("");
            return B({
                [e]: t
            }), t
        } catch {
            return (await D({
                [e]: ""
            }))[e]
        }
    }
    var K = {};

    function _e(e) {
        let t = new CustomEvent("web-response", {
            detail: e
        });
        window.dispatchEvent(t)
    }
    _e({
        type: "loaded"
    });
    window.addEventListener("web-request", async e => {
        if (location.origin !== G.origin && !(location.protocol == "chrome-extension:" || location.hostname === "localhost")) return;
        let t = e.detail,
            r;
        switch (t.type) {
            case "chat": {
                let o = re.default.runtime.connect();
                K[t.data.originId] = o;
                let l = u => {
                    _e(u), u.type == "chat-answer-end" && (o.disconnect(), delete K[u.data.originId])
                };
                o.onMessage.addListener(l), o.postMessage({
                    type: "chat",
                    data: t.data
                });
                return
            }
            case "chat-abort": {
                try {
                    K[t.data].disconnect(), delete K[t.data], r = {
                        success: !0
                    }
                } catch (o) {
                    r = {
                        success: !1,
                        error: o.toString()
                    }
                }
                break
            }
        }
        switch (t.type) {
            case "chat": {
                let o = re.default.runtime.connect();
                K[t.data.originId] = o;
                let l = u => {
                    _e(u), u.type == "chat-answer-end" && (o.disconnect(), delete K[u.data.originId])
                };
                o.onMessage.addListener(l), o.postMessage({
                    type: "chat",
                    data: t.data
                });
                return
            }
            case "chat-abort": {
                try {
                    K[t.data].disconnect(), delete K[t.data], r = {
                        success: !0
                    }
                } catch (o) {
                    r = {
                        success: !1,
                        error: o.toString()
                    }
                }
                break
            }
        }
        switch (t.type) {
            case "get-token": {
                let o = await pe();
                r = {
                    token: o.token,
                    refreshToken: o.refreshToken
                };
                break
            }
            case "get-device_id": {
                r = await Y();
                break
            }
            case "get-userinfo": {
                let o = await pe();
                r = {
                    token: o.token,
                    refreshToken: o.refreshToken,
                    clientId: await Y()
                };
                break
            }
            case "get-setting-lang":
                r = await D({
                    language: "en"
                });
                break;
            case "pricing": {
                re.default.runtime.sendMessage({
                    type: "REFRESH_VIP_INFO"
                });
                break
            }
            case "open-options": {
                re.default.runtime.sendMessage({
                    type: "OPEN_OPTIONS_PAGE"
                });
                break
            }
            case "chat-get-chatGPT-models": {
                r = await re.default.runtime.sendMessage({
                    type: "chat-get-chatGPT-models"
                });
                break
            }
            case "chat-get-provider-type": {
                r = await (await Nt()).provider;
                break
            }
        }
        _e({
            type: t.type,
            data: r
        })
    });
})();
