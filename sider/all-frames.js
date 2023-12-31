"use strict";
(() => {
    var oe = Object.create;
    var W = Object.defineProperty;
    var ie = Object.getOwnPropertyDescriptor;
    var ae = Object.getOwnPropertyNames;
    var le = Object.getPrototypeOf,
        ge = Object.prototype.hasOwnProperty;
    var me = (e, n) => () => (n || e((n = {
        exports: {}
    }).exports, n), n.exports);
    var ce = (e, n, m, d) => {
        if (n && typeof n == "object" || typeof n == "function")
            for (let c of ae(n)) !ge.call(e, c) && c !== m && W(e, c, {
                get: () => n[c],
                enumerable: !(d = ie(n, c)) || d.enumerable
            });
        return e
    };
    var _ = (e, n, m) => (m = e != null ? oe(le(e)) : {}, ce(n || !e || !e.__esModule ? W(m, "default", {
        value: e,
        enumerable: !0
    }) : m, e));
    var k = me((O, Q) => {
        (function(e, n) {
            if (typeof define == "function" && define.amd) define("webextension-polyfill", ["module"], n);
            else if (typeof O < "u") n(Q);
            else {
                var m = {
                    exports: {}
                };
                n(m), e.browser = m.exports
            }
        })(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : O, function(e) {
            "use strict";
            if (!globalThis.chrome?.runtime?.id) throw new Error("This script should only be loaded in a browser extension.");
            if (typeof globalThis.browser > "u" || Object.getPrototypeOf(globalThis.browser) !== Object.prototype) {
                let n = "The message port closed before a response was received.",
                    m = d => {
                        let c = {
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
                        if (Object.keys(c).length === 0) throw new Error("api-metadata.json has not been included in browser-polyfill");
                        class E extends WeakMap {
                            constructor(s, i = void 0) {
                                super(i), this.createItem = s
                            }
                            get(s) {
                                return this.has(s) || this.set(s, this.createItem(s)), super.get(s)
                            }
                        }
                        let ee = r => r && typeof r == "object" && typeof r.then == "function",
                            F = (r, s) => (...i) => {
                                d.runtime.lastError ? r.reject(new Error(d.runtime.lastError.message)) : s.singleCallbackArg || i.length <= 1 && s.singleCallbackArg !== !1 ? r.resolve(i[0]) : r.resolve(i)
                            },
                            b = r => r == 1 ? "argument" : "arguments",
                            te = (r, s) => function(a, ...g) {
                                if (g.length < s.minArgs) throw new Error(`Expected at least ${s.minArgs} ${b(s.minArgs)} for ${r}(), got ${g.length}`);
                                if (g.length > s.maxArgs) throw new Error(`Expected at most ${s.maxArgs} ${b(s.maxArgs)} for ${r}(), got ${g.length}`);
                                return new Promise((p, u) => {
                                    if (s.fallbackToNoCallback) try {
                                        a[r](...g, F({
                                            resolve: p,
                                            reject: u
                                        }, s))
                                    } catch {
                                        a[r](...g), s.fallbackToNoCallback = !1, s.noCallback = !0, p()
                                    } else s.noCallback ? (a[r](...g), p()) : a[r](...g, F({
                                        resolve: p,
                                        reject: u
                                    }, s))
                                })
                            },
                            D = (r, s, i) => new Proxy(s, {
                                apply(a, g, p) {
                                    return i.call(g, r, ...p)
                                }
                            }),
                            w = Function.call.bind(Object.prototype.hasOwnProperty),
                            T = (r, s = {}, i = {}) => {
                                let a = Object.create(null),
                                    g = {
                                        has(u, o) {
                                            return o in r || o in a
                                        },
                                        get(u, o, A) {
                                            if (o in a) return a[o];
                                            if (!(o in r)) return;
                                            let l = r[o];
                                            if (typeof l == "function")
                                                if (typeof s[o] == "function") l = D(r, r[o], s[o]);
                                                else if (w(i, o)) {
                                                let y = te(o, i[o]);
                                                l = D(r, r[o], y)
                                            } else l = l.bind(r);
                                            else if (typeof l == "object" && l !== null && (w(s, o) || w(i, o))) l = T(l, s[o], i[o]);
                                            else if (w(i, "*")) l = T(l, s[o], i["*"]);
                                            else return Object.defineProperty(a, o, {
                                                configurable: !0,
                                                enumerable: !0,
                                                get() {
                                                    return r[o]
                                                },
                                                set(y) {
                                                    r[o] = y
                                                }
                                            }), l;
                                            return a[o] = l, l
                                        },
                                        set(u, o, A, l) {
                                            return o in a ? a[o] = A : r[o] = A, !0
                                        },
                                        defineProperty(u, o, A) {
                                            return Reflect.defineProperty(a, o, A)
                                        },
                                        deleteProperty(u, o) {
                                            return Reflect.deleteProperty(a, o)
                                        }
                                    },
                                    p = Object.create(r);
                                return new Proxy(p, g)
                            },
                            R = r => ({
                                addListener(s, i, ...a) {
                                    s.addListener(r.get(i), ...a)
                                },
                                hasListener(s, i) {
                                    return s.hasListener(r.get(i))
                                },
                                removeListener(s, i) {
                                    s.removeListener(r.get(i))
                                }
                            }),
                            re = new E(r => typeof r != "function" ? r : function(i) {
                                let a = T(i, {}, {
                                    getContent: {
                                        minArgs: 0,
                                        maxArgs: 0
                                    }
                                });
                                r(a)
                            }),
                            G = new E(r => typeof r != "function" ? r : function(i, a, g) {
                                let p = !1,
                                    u, o = new Promise(h => {
                                        u = function(x) {
                                            p = !0, h(x)
                                        }
                                    }),
                                    A;
                                try {
                                    A = r(i, a, u)
                                } catch (h) {
                                    A = Promise.reject(h)
                                }
                                let l = A !== !0 && ee(A);
                                if (A !== !0 && !l && !p) return !1;
                                let y = h => {
                                    h.then(x => {
                                        g(x)
                                    }, x => {
                                        let M;
                                        x && (x instanceof Error || typeof x.message == "string") ? M = x.message : M = "An unexpected error occurred", g({
                                            __mozWebExtensionPolyfillReject__: !0,
                                            message: M
                                        })
                                    }).catch(x => {})
                                };
                                return y(l ? A : o), !0
                            }),
                            se = ({
                                reject: r,
                                resolve: s
                            }, i) => {
                                d.runtime.lastError ? d.runtime.lastError.message === n ? s() : r(new Error(d.runtime.lastError.message)) : i && i.__mozWebExtensionPolyfillReject__ ? r(new Error(i.message)) : s(i)
                            },
                            q = (r, s, i, ...a) => {
                                if (a.length < s.minArgs) throw new Error(`Expected at least ${s.minArgs} ${b(s.minArgs)} for ${r}(), got ${a.length}`);
                                if (a.length > s.maxArgs) throw new Error(`Expected at most ${s.maxArgs} ${b(s.maxArgs)} for ${r}(), got ${a.length}`);
                                return new Promise((g, p) => {
                                    let u = se.bind(null, {
                                        resolve: g,
                                        reject: p
                                    });
                                    a.push(u), i.sendMessage(...a)
                                })
                            },
                            ne = {
                                devtools: {
                                    network: {
                                        onRequestFinished: R(re)
                                    }
                                },
                                runtime: {
                                    onMessage: R(G),
                                    onMessageExternal: R(G),
                                    sendMessage: q.bind(null, "sendMessage", {
                                        minArgs: 1,
                                        maxArgs: 3
                                    })
                                },
                                tabs: {
                                    sendMessage: q.bind(null, "sendMessage", {
                                        minArgs: 2,
                                        maxArgs: 3
                                    })
                                }
                            },
                            K = {
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
                        return c.privacy = {
                            network: {
                                "*": K
                            },
                            services: {
                                "*": K
                            },
                            websites: {
                                "*": K
                            }
                        }, T(d, ne, c)
                    };
                e.exports = m(chrome)
            } else e.exports = globalThis.browser
        })
    });
    var f = _(k());
    var B = _(k());
    var pe = _(k());
    var z = B.default.runtime.getManifest(),
        he = z.version_name === z.version + "-e";
    var be = B.default.runtime.getManifest().version;
    var L = "https://sider.ai",
        N = {
            origin: L,
            api: `${L}/api`
        };
    var I = (t => (t.English = "en", t["Chinese(Simplified)"] = "zh_CN", t["Chinese(Traditional)"] = "zh_TW", t.Spanish = "es", t.French = "fr", t.Japanese = "ja", t.German = "de", t.Portuguese = "pt", t.Arabic = "ar", t.Russian = "ru", t.Italian = "it", t.Korean = "ko", t.Hindi = "hi", t.Dutch = "nl", t.Polish = "pl", t.Amharic = "am", t.Bulgarian = "bg", t.Bengali = "bn", t.Catalan = "ca", t.Czech = "cs", t.Danish = "da", t.Greek = "el", t.Estonian = "et", t.Persian = "fa", t.Finnish = "fi", t.Filipino = "fil", t.Gujarati = "gu", t.Hebrew = "he", t.Croatian = "hr", t.Hungarian = "hu", t.Indonesian = "id", t.Kannada = "kn", t.Lithuanian = "lt", t.Latvian = "lv", t.Malayalam = "ml", t.Marathi = "mr", t.Malay = "ms", t.Norwegian = "no", t.Romanian = "ro", t.Slovak = "sk", t.Slovenian = "sl", t.Serbian = "sr", t.Swedish = "sv", t.Swahili = "sw", t.Tamil = "ta", t.Telugu = "te", t.Thai = "th", t.Turkish = "tr", t.Ukrainian = "uk", t.Urdu = "ur", t.Vietnamese = "vi", t))(I || {}),
        ue = {
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
        we = Object.entries(I).reduce((e, [n, m]) => (e[m] = n, e), {}),
        Te = Object.entries(I).map(([e, n]) => ({
            label: e,
            value: n
        })),
        ke = Object.entries(ue).map(([e, n]) => ({
            label: n,
            value: e
        }));
    var Pe = {
            pricing: `${N.origin}/pricing`,
            login: `${N.origin}/login`,
            myChats: `${N.origin}/mychats`,
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
        },
        $ = {
            sidebarShortcut: {
                key: "p",
                keyCode: 80,
                metaKey: !0,
                ctrlKey: !0,
                altKey: !1,
                shiftKey: !1
            },
            sidebarFab: !0,
            selectionSidebarFab: !0
        };
    var j = {
        key: ".",
        keyCode: 190,
        metaKey: !0,
        ctrlKey: !0,
        altKey: !1,
        shiftKey: !1
    };

    function U(e, n) {
        return !(e.key !== n.key || (e.metaKey !== n.metaKey || e.ctrlKey !== n.ctrlKey) && !e.metaKey && !e.ctrlKey || e.shiftKey !== !!n.shiftKey || e.altKey !== !!n.altKey || e.target?.dataset.preventsidershortcut)
    }
    var S = $.sidebarShortcut,
        C = j;

    function v(e, n) {
        e.key = n.key, e.keyCode = n.keyCode, e.metaKey = n.metaKey, e.ctrlKey = n.ctrlKey, e.altKey = n.altKey, e.shiftKey = n.shiftKey
    }

    function V(e) {
        if (e.sidebarShortcut) {
            let n = e.sidebarShortcut.newValue || $.sidebarShortcut;
            v(S, n)
        }
        if (e.translatorShortcut) {
            let n = e.translatorShortcut.newValue || j;
            v(C, n)
        }
    }

    function Z(e) {
        if (!e.isComposing) {
            if (e.key === "Escape") {
                f.default.runtime.id && f.default.runtime.sendMessage({
                    type: "POPUP_OPEN",
                    isShow: !1
                });
                return
            }
            U(e, S) && (e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), f.default.runtime.id && f.default.runtime.sendMessage({
                type: "POPUP_OPEN"
            })), U(e, C) && (e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), f.default.runtime.id && f.default.runtime.sendMessage({
                type: "TOGGLE_TRANSLATOR"
            }))
        }
    }
    var Y = "ALL_FRAMES_LISTEN",
        P = [];

    function J(e = window) {
        e.addEventListener("keydown", Z, !0), e[Y] = !0
    }

    function X(e = window) {
        e.removeEventListener("keydown", Z, !0)
    }

    function H(e) {
        [document, document.querySelector("chatgpt-sidebar")?.shadowRoot].forEach(m => {
            m && m.querySelectorAll("iframe").forEach(d => {
                let c = d.contentWindow;
                try {
                    c && c[Y] != !0 && (J(c), P.push(() => X(c)))
                } catch {}
            })
        })
    }

    function Ae() {
        f.default.storage.local.get({
            sidebarShortcut: S,
            translatorShortcut: C
        }).then(({
            sidebarShortcut: e,
            translatorShortcut: n
        }) => {
            v(S, e), v(C, n)
        }), f.default.storage.local.onChanged.addListener(V), window.addEventListener("blur", H), P.push(() => f.default.storage.local.onChanged.removeListener(V)), P.push(() => window.removeEventListener("blur", H)), J(), P.push(() => X())
    }
    Ae();
})();
