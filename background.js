"use strict";
(() => {
    var gf = Object.create;
    var la = Object.defineProperty;
    var hf = Object.getOwnPropertyDescriptor;
    var yf = Object.getOwnPropertyNames;
    var vf = Object.getPrototypeOf,
        bf = Object.prototype.hasOwnProperty;
    var T = (t, e) => () => (e || t((e = {
        exports: {}
    }).exports, e), e.exports);
    var xf = (t, e, r, n) => {
        if (e && typeof e == "object" || typeof e == "function")
            for (let o of yf(e)) !bf.call(t, o) && o !== r && la(t, o, {
                get: () => e[o],
                enumerable: !(n = hf(e, o)) || n.enumerable
            });
        return t
    };
    var N = (t, e, r) => (r = t != null ? gf(vf(t)) : {}, xf(e || !t || !t.__esModule ? la(r, "default", {
        value: t,
        enumerable: !0
    }) : r, t));
    var W = T((Cn, Vi) => {
        (function(t, e) {
            if (typeof define == "function" && define.amd) define("webextension-polyfill", ["module"], e);
            else if (typeof Cn < "u") e(Vi);
            else {
                var r = {
                    exports: {}
                };
                e(r), t.browser = r.exports
            }
        })(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : Cn, function(t) {
            "use strict";
            if (!globalThis.chrome?.runtime?.id) throw new Error("This script should only be loaded in a browser extension.");
            if (typeof globalThis.browser > "u" || Object.getPrototypeOf(globalThis.browser) !== Object.prototype) {
                let e = "The message port closed before a response was received.",
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
                        class a extends WeakMap {
                            constructor(x, w = void 0) {
                                super(w), this.createItem = x
                            }
                            get(x) {
                                return this.has(x) || this.set(x, this.createItem(x)), super.get(x)
                            }
                        }
                        let i = y => y && typeof y == "object" && typeof y.then == "function",
                            s = (y, x) => (...w) => {
                                n.runtime.lastError ? y.reject(new Error(n.runtime.lastError.message)) : x.singleCallbackArg || w.length <= 1 && x.singleCallbackArg !== !1 ? y.resolve(w[0]) : y.resolve(w)
                            },
                            c = y => y == 1 ? "argument" : "arguments",
                            u = (y, x) => function(A, ...k) {
                                if (k.length < x.minArgs) throw new Error(`Expected at least ${x.minArgs} ${c(x.minArgs)} for ${y}(), got ${k.length}`);
                                if (k.length > x.maxArgs) throw new Error(`Expected at most ${x.maxArgs} ${c(x.maxArgs)} for ${y}(), got ${k.length}`);
                                return new Promise((L, F) => {
                                    if (x.fallbackToNoCallback) try {
                                        A[y](...k, s({
                                            resolve: L,
                                            reject: F
                                        }, x))
                                    } catch {
                                        A[y](...k), x.fallbackToNoCallback = !1, x.noCallback = !0, L()
                                    } else x.noCallback ? (A[y](...k), L()) : A[y](...k, s({
                                        resolve: L,
                                        reject: F
                                    }, x))
                                })
                            },
                            f = (y, x, w) => new Proxy(x, {
                                apply(A, k, L) {
                                    return w.call(k, y, ...L)
                                }
                            }),
                            l = Function.call.bind(Object.prototype.hasOwnProperty),
                            d = (y, x = {}, w = {}) => {
                                let A = Object.create(null),
                                    k = {
                                        has(F, O) {
                                            return O in y || O in A
                                        },
                                        get(F, O, V) {
                                            if (O in A) return A[O];
                                            if (!(O in y)) return;
                                            let j = y[O];
                                            if (typeof j == "function")
                                                if (typeof x[O] == "function") j = f(y, y[O], x[O]);
                                                else if (l(w, O)) {
                                                let ae = u(O, w[O]);
                                                j = f(y, y[O], ae)
                                            } else j = j.bind(y);
                                            else if (typeof j == "object" && j !== null && (l(x, O) || l(w, O))) j = d(j, x[O], w[O]);
                                            else if (l(w, "*")) j = d(j, x[O], w["*"]);
                                            else return Object.defineProperty(A, O, {
                                                configurable: !0,
                                                enumerable: !0,
                                                get() {
                                                    return y[O]
                                                },
                                                set(ae) {
                                                    y[O] = ae
                                                }
                                            }), j;
                                            return A[O] = j, j
                                        },
                                        set(F, O, V, j) {
                                            return O in A ? A[O] = V : y[O] = V, !0
                                        },
                                        defineProperty(F, O, V) {
                                            return Reflect.defineProperty(A, O, V)
                                        },
                                        deleteProperty(F, O) {
                                            return Reflect.deleteProperty(A, O)
                                        }
                                    },
                                    L = Object.create(y);
                                return new Proxy(L, k)
                            },
                            p = y => ({
                                addListener(x, w, ...A) {
                                    x.addListener(y.get(w), ...A)
                                },
                                hasListener(x, w) {
                                    return x.hasListener(y.get(w))
                                },
                                removeListener(x, w) {
                                    x.removeListener(y.get(w))
                                }
                            }),
                            m = new a(y => typeof y != "function" ? y : function(w) {
                                let A = d(w, {}, {
                                    getContent: {
                                        minArgs: 0,
                                        maxArgs: 0
                                    }
                                });
                                y(A)
                            }),
                            v = new a(y => typeof y != "function" ? y : function(w, A, k) {
                                let L = !1,
                                    F, O = new Promise(Re => {
                                        F = function(re) {
                                            L = !0, Re(re)
                                        }
                                    }),
                                    V;
                                try {
                                    V = y(w, A, F)
                                } catch (Re) {
                                    V = Promise.reject(Re)
                                }
                                let j = V !== !0 && i(V);
                                if (V !== !0 && !j && !L) return !1;
                                let ae = Re => {
                                    Re.then(re => {
                                        k(re)
                                    }, re => {
                                        let Pe;
                                        re && (re instanceof Error || typeof re.message == "string") ? Pe = re.message : Pe = "An unexpected error occurred", k({
                                            __mozWebExtensionPolyfillReject__: !0,
                                            message: Pe
                                        })
                                    }).catch(re => {})
                                };
                                return ae(j ? V : O), !0
                            }),
                            b = ({
                                reject: y,
                                resolve: x
                            }, w) => {
                                n.runtime.lastError ? n.runtime.lastError.message === e ? x() : y(new Error(n.runtime.lastError.message)) : w && w.__mozWebExtensionPolyfillReject__ ? y(new Error(w.message)) : x(w)
                            },
                            g = (y, x, w, ...A) => {
                                if (A.length < x.minArgs) throw new Error(`Expected at least ${x.minArgs} ${c(x.minArgs)} for ${y}(), got ${A.length}`);
                                if (A.length > x.maxArgs) throw new Error(`Expected at most ${x.maxArgs} ${c(x.maxArgs)} for ${y}(), got ${A.length}`);
                                return new Promise((k, L) => {
                                    let F = b.bind(null, {
                                        resolve: k,
                                        reject: L
                                    });
                                    A.push(F), w.sendMessage(...A)
                                })
                            },
                            h = {
                                devtools: {
                                    network: {
                                        onRequestFinished: p(m)
                                    }
                                },
                                runtime: {
                                    onMessage: p(v),
                                    onMessageExternal: p(v),
                                    sendMessage: g.bind(null, "sendMessage", {
                                        minArgs: 1,
                                        maxArgs: 3
                                    })
                                },
                                tabs: {
                                    sendMessage: g.bind(null, "sendMessage", {
                                        minArgs: 2,
                                        maxArgs: 3
                                    })
                                }
                            },
                            S = {
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
                                "*": S
                            },
                            services: {
                                "*": S
                            },
                            websites: {
                                "*": S
                            }
                        }, d(n, h, o)
                    };
                t.exports = r(chrome)
            } else t.exports = globalThis.browser
        })
    });
    var Fs = T((SO, Ds) => {
        "use strict";
        Ds.exports = () => {
            let t = {};
            return t.promise = new Promise((e, r) => {
                t.resolve = e, t.reject = r
            }), t
        }
    });
    var Gs = T((PO, Us) => {
        "use strict";
        var dh = Fs();

        function mh(t, e = "maxAge") {
            let r, n, o, a = async () => {
                if (r !== void 0) return;
                let c = async u => {
                    o = dh();
                    let f = u[1][e] - Date.now();
                    if (f <= 0) {
                        t.delete(u[0]), o.resolve();
                        return
                    }
                    return r = u[0], n = setTimeout(() => {
                        t.delete(u[0]), o && o.resolve()
                    }, f), typeof n.unref == "function" && n.unref(), o.promise
                };
                try {
                    for (let u of t) await c(u)
                } catch {}
                r = void 0
            }, i = () => {
                r = void 0, n !== void 0 && (clearTimeout(n), n = void 0), o !== void 0 && (o.reject(void 0), o = void 0)
            }, s = t.set.bind(t);
            return t.set = (c, u) => {
                t.has(c) && t.delete(c);
                let f = s(c, u);
                return r && r === c && i(), a(), f
            }, a(), t
        }
        Us.exports = mh
    });
    var Kr = T((OO, qs) => {
        "use strict";
        var gh = Gs(),
            to = class {
                constructor(e, r) {
                    if (this.maxAge = e, this[Symbol.toStringTag] = "Map", this.data = new Map, gh(this.data), r)
                        for (let [n, o] of r) this.set(n, o)
                }
                get size() {
                    return this.data.size
                }
                clear() {
                    this.data.clear()
                }
                delete(e) {
                    return this.data.delete(e)
                }
                has(e) {
                    return this.data.has(e)
                }
                get(e) {
                    let r = this.data.get(e);
                    if (r) return r.data
                }
                set(e, r) {
                    return this.data.set(e, {
                        maxAge: Date.now() + this.maxAge,
                        data: r
                    }), this
                }
                values() {
                    return this.createIterator(e => e[1].data)
                }
                keys() {
                    return this.data.keys()
                }
                entries() {
                    return this.createIterator(e => [e[0], e[1].data])
                }
                forEach(e, r) {
                    for (let [n, o] of this.entries()) e.apply(r, [o, n, this])
                } [Symbol.iterator]() {
                    return this.entries()
                }* createIterator(e) {
                    for (let r of this.data.entries()) yield e(r)
                }
            };
        qs.exports = to
    });
    var gc = T((fE, mc) => {
        "use strict";

        function fc(t) {
            return (fc = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
                return typeof e
            } : function(e) {
                return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(t)
        }

        function nr(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function uc(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }
        }

        function or(t, e, r) {
            return e && uc(t.prototype, e), r && uc(t, r), t
        }

        function cy(t, e) {
            if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && pc(t, e)
        }

        function po(t) {
            return (po = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(t)
        }

        function pc(t, e) {
            return (pc = Object.setPrototypeOf || function(r, n) {
                return r.__proto__ = n, r
            })(t, e)
        }

        function uy() {
            if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
            if (typeof Proxy == "function") return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
            } catch {
                return !1
            }
        }

        function ly(t) {
            if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }

        function fy(t, e) {
            return !e || typeof e != "object" && typeof e != "function" ? ly(t) : e
        }

        function py(t) {
            var e = uy();
            return function() {
                var r, n = po(t);
                if (e) {
                    var o = po(this).constructor;
                    r = Reflect.construct(n, arguments, o)
                } else r = n.apply(this, arguments);
                return fy(this, r)
            }
        }

        function lc(t) {
            return dy(t) || my(t) || gy(t) || hy()
        }

        function dy(t) {
            if (Array.isArray(t)) return mo(t)
        }

        function my(t) {
            if (typeof Symbol < "u" && Symbol.iterator in Object(t)) return Array.from(t)
        }

        function gy(t, e) {
            if (t) {
                if (typeof t == "string") return mo(t, e);
                var r = Object.prototype.toString.call(t).slice(8, -1);
                return r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set" ? Array.from(t) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? mo(t, e) : void 0
            }
        }

        function mo(t, e) {
            (e == null || e > t.length) && (e = t.length);
            for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
            return n
        }

        function hy() {
            throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
        }
        var go = function() {
                function t(e) {
                    nr(this, t), this._listeners = [], this._mute = !1, this._accumulate = !1, this._accumulatedEvents = [], this._name = e || "", this._onListenerAdded = null, this._onFirstListenerAdded = null, this._onListenerRemoved = null, this._onLastListenerRemoved = null
                }
                return or(t, [{
                    key: "addListener",
                    value: function(e, r) {
                        this._pushListener(e, r, !1)
                    }
                }, {
                    key: "addOnceListener",
                    value: function(e, r) {
                        this._pushListener(e, r, !0)
                    }
                }, {
                    key: "removeListener",
                    value: function(e, r) {
                        this._ensureListener(e);
                        var n = this._indexOfListener(e, r);
                        0 <= n && this._spliceListener(n)
                    }
                }, {
                    key: "removeAllListeners",
                    value: function() {
                        for (; this.hasListeners();) this._spliceListener(0)
                    }
                }, {
                    key: "hasListener",
                    value: function(e, r) {
                        return this._ensureListener(e), 0 <= this._indexOfListener(e, r)
                    }
                }, {
                    key: "hasListeners",
                    value: function() {
                        return 0 < this._listeners.length
                    }
                }, {
                    key: "dispatch",
                    value: function() {
                        for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++) r[n] = arguments[n];
                        this._invokeListeners({
                            args: r,
                            async: !1
                        })
                    }
                }, {
                    key: "dispatchAsync",
                    value: function() {
                        for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++) r[n] = arguments[n];
                        this._invokeListeners({
                            args: r,
                            async: !0
                        })
                    }
                }, {
                    key: "mute",
                    value: function(e) {
                        var r = 0 < arguments.length && e !== void 0 ? e : {};
                        this._mute = !0, r.accumulate ? this._accumulate = !0 : (this._accumulate = !1, this._accumulatedEvents = [])
                    }
                }, {
                    key: "unmute",
                    value: function() {
                        this._mute = !1, this._accumulate && (this._dispatchAccumulated(), this._accumulate = !1)
                    }
                }, {
                    key: "_invokeListeners",
                    value: function(e) {
                        var r = this,
                            n = 0 < arguments.length && e !== void 0 ? e : {
                                args: [],
                                async: !1
                            };
                        this._mute ? this._accumulate && this._accumulatedEvents.push(n) : this._listeners.slice().forEach(function(o) {
                            r._invokeListener(o, n), o.once && r.removeListener(o.callback, o.context)
                        })
                    }
                }, {
                    key: "_invokeListener",
                    value: function(e, r) {
                        var n, o, a = e.callback instanceof t;
                        r.async ? a ? (n = e.callback).dispatchAsync.apply(n, lc(r.args)) : setTimeout(function() {
                            return e.callback.apply(e.context, r.args)
                        }, 0) : a ? (o = e.callback).dispatch.apply(o, lc(r.args)) : e.callback.apply(e.context, r.args)
                    }
                }, {
                    key: "_ensureListener",
                    value: function(e) {
                        if (!t.isValidListener(e)) throw new Error("Channel " + this._name + ": listener is not a function and not a Channel")
                    }
                }, {
                    key: "_dispatchInnerAddEvents",
                    value: function() {
                        var e, r;
                        this._onListenerAdded && (e = this._onListenerAdded).dispatch.apply(e, arguments), this._onFirstListenerAdded && this._listeners.length === 1 && (r = this._onFirstListenerAdded).dispatch.apply(r, arguments)
                    }
                }, {
                    key: "_dispatchInnerRemoveEvents",
                    value: function() {
                        var e, r;
                        this._onListenerRemoved && (e = this._onListenerRemoved).dispatch.apply(e, arguments), this._onLastListenerRemoved && this._listeners.length === 0 && (r = this._onLastListenerRemoved).dispatch.apply(r, arguments)
                    }
                }, {
                    key: "_indexOfListener",
                    value: function(e, r) {
                        for (var n = 0; n < this._listeners.length; n++) {
                            var o = this._listeners[n],
                                a = o.callback === e,
                                i = e instanceof t,
                                s = r === void 0 && o.context === void 0,
                                c = r === o.context;
                            if (a && (i || s || c)) return n
                        }
                    }
                }, {
                    key: "_dispatchAccumulated",
                    value: function() {
                        var e = this;
                        this._accumulatedEvents.forEach(function(r) {
                            return e._invokeListeners(r)
                        }), this._accumulatedEvents = []
                    }
                }, {
                    key: "_pushListener",
                    value: function(e, r, n) {
                        this._ensureListener(e), this._checkForDuplicates(e, r), this._listeners.push({
                            callback: e,
                            context: r,
                            once: n
                        }), this._dispatchInnerAddEvents(e, r, n)
                    }
                }, {
                    key: "_checkForDuplicates",
                    value: function(e, r) {
                        if (this.hasListener(e, r)) throw new Error("Channel " + this._name + ": duplicating listeners")
                    }
                }, {
                    key: "_spliceListener",
                    value: function(e) {
                        var r = this._listeners[e],
                            n = r.callback,
                            o = r.context,
                            a = r.once;
                        this._listeners.splice(e, 1), this._dispatchInnerRemoveEvents(n, o, a)
                    }
                }, {
                    key: "onListenerAdded",
                    get: function() {
                        return this._onListenerAdded || (this._onListenerAdded = new t("".concat(this._name, ":onListenerAdded"))), this._onListenerAdded
                    }
                }, {
                    key: "onFirstListenerAdded",
                    get: function() {
                        return this._onFirstListenerAdded || (this._onFirstListenerAdded = new t("".concat(this._name, ":onFirstListenerAdded"))), this._onFirstListenerAdded
                    }
                }, {
                    key: "onListenerRemoved",
                    get: function() {
                        return this._onListenerRemoved || (this._onListenerRemoved = new t("".concat(this._name, ":onListenerRemoved"))), this._onListenerRemoved
                    }
                }, {
                    key: "onLastListenerRemoved",
                    get: function() {
                        return this._onLastListenerRemoved || (this._onLastListenerRemoved = new t("".concat(this._name, ":onLastListenerRemoved"))), this._onLastListenerRemoved
                    }
                }], [{
                    key: "isValidListener",
                    value: function(e) {
                        return typeof e == "function" || e instanceof t
                    }
                }]), t
            }(),
            yy = function() {
                function t() {
                    nr(this, t), this._channels = new Map
                }
                return or(t, [{
                    key: "addListener",
                    value: function(e, r, n) {
                        this._getChannel(e).addListener(r, n)
                    }
                }, {
                    key: "on",
                    value: function(e, r, n) {
                        this.addListener(e, r, n)
                    }
                }, {
                    key: "addOnceListener",
                    value: function(e, r, n) {
                        this._getChannel(e).addOnceListener(r, n)
                    }
                }, {
                    key: "once",
                    value: function(e, r, n) {
                        this.addOnceListener(e, r, n)
                    }
                }, {
                    key: "removeListener",
                    value: function(e, r, n) {
                        this._getChannel(e).removeListener(r, n)
                    }
                }, {
                    key: "off",
                    value: function(e, r, n) {
                        this.removeListener(e, r, n)
                    }
                }, {
                    key: "hasListener",
                    value: function(e, r, n) {
                        return this._getChannel(e).hasListener(r, n)
                    }
                }, {
                    key: "has",
                    value: function(e, r, n) {
                        return this.hasListener(e, r, n)
                    }
                }, {
                    key: "hasListeners",
                    value: function(e) {
                        return this._getChannel(e).hasListeners()
                    }
                }, {
                    key: "dispatch",
                    value: function(e) {
                        for (var r, n = arguments.length, o = new Array(1 < n ? n - 1 : 0), a = 1; a < n; a++) o[a - 1] = arguments[a];
                        (r = this._getChannel(e)).dispatch.apply(r, o)
                    }
                }, {
                    key: "emit",
                    value: function(e) {
                        for (var r = arguments.length, n = new Array(1 < r ? r - 1 : 0), o = 1; o < r; o++) n[o - 1] = arguments[o];
                        this.dispatch.apply(this, [e].concat(n))
                    }
                }, {
                    key: "_getChannel",
                    value: function(e) {
                        return this._channels.has(e) || this._channels.set(e, new go(e)), this._channels.get(e)
                    }
                }]), t
            }(),
            vy = function() {
                function t(e) {
                    nr(this, t), this._params = e, this._isOn = !1, this._assertParams()
                }
                return or(t, [{
                    key: "on",
                    value: function() {
                        if (!this._isOn) {
                            var e = this._params.channel,
                                r = e.addListener || e.addEventListener || e.on;
                            this._applyMethod(r), this._isOn = !0
                        }
                    }
                }, {
                    key: "off",
                    value: function() {
                        if (this._isOn) {
                            var e = this._params.channel,
                                r = e.removeListener || e.removeEventListener || e.off;
                            this._applyMethod(r), this._isOn = !1
                        }
                    }
                }, {
                    key: "_applyMethod",
                    value: function(e) {
                        var r = this._params,
                            n = r.channel,
                            o = r.event,
                            a = r.listener,
                            i = o ? [o, a] : [a];
                        e.apply(n, i)
                    }
                }, {
                    key: "_assertParams",
                    value: function() {
                        var e = this._params,
                            r = e.channel,
                            n = e.event,
                            o = e.listener;
                        if (!r || fc(r) !== "object") throw new Error("Channel should be object");
                        if (n && typeof n != "string") throw new Error("Event should be string");
                        if (!o || !go.isValidListener(o)) throw new Error("Listener should be function or Channel")
                    }
                }]), t
            }(),
            dc = function() {
                function t(e) {
                    nr(this, t), this._items = e.map(function(r) {
                        return new vy(r)
                    })
                }
                return or(t, [{
                    key: "on",
                    value: function() {
                        return this._items.forEach(function(e) {
                            return e.on()
                        }), this
                    }
                }, {
                    key: "off",
                    value: function() {
                        return this._items.forEach(function(e) {
                            return e.off()
                        }), this
                    }
                }]), t
            }(),
            by = function() {
                cy(e, dc);
                var t = py(e);

                function e(r, n) {
                    var o;
                    return nr(this, e), (o = t.call(this, n))._overrideComponentCallback(r, "componentDidMount", "on"), o._overrideComponentCallback(r, "componentWillUnmount", "off"), o
                }
                return or(e, [{
                    key: "_overrideComponentCallback",
                    value: function(r, n, o) {
                        var a = this,
                            i = r[n];
                        r[n] = function() {
                            if (a[o](), typeof i == "function") {
                                for (var s = arguments.length, c = new Array(s), u = 0; u < s; u++) c[u] = arguments[u];
                                return i.apply(r, c)
                            }
                        }
                    }
                }]), e
            }(),
            Jr = go;
        Jr.EventEmitter = yy, Jr.Subscription = dc, Jr.ReactSubscription = by, mc.exports = Jr
    });
    var yc = T((pE, hc) => {
        hc.exports = {
            timeout: 0,
            timeoutReason: "Promise rejected by PromiseController timeout {timeout} ms.",
            resetReason: "Promise rejected by PromiseController reset."
        }
    });
    var vc = T(Yr => {
        Yr.isPromise = function(t) {
            return t && typeof t.then == "function"
        };
        Yr.tryCall = function(t) {
            return typeof t == "function" ? t() : t
        };
        Yr.createErrorType = function(t) {
            function e(r) {
                Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = r
            }
            return e.prototype = new Error, e.prototype.name = t, e.prototype.constructor = e, e
        }
    });
    var ho = T((mE, _c) => {
        var xy = yc(),
            {
                isPromise: bc,
                createErrorType: wc,
                tryCall: xc
            } = vc(),
            ar = class t {
                constructor(e) {
                    this._options = Object.assign({}, xy, e), this._resolve = null, this._reject = null, this._isPending = !1, this._isFulfilled = !1, this._isRejected = !1, this._value = void 0, this._promise = null, this._timer = null
                }
                get promise() {
                    return this._promise
                }
                get value() {
                    return this._value
                }
                get isPending() {
                    return this._isPending
                }
                get isFulfilled() {
                    return this._isFulfilled
                }
                get isRejected() {
                    return this._isRejected
                }
                get isSettled() {
                    return this._isFulfilled || this._isRejected
                }
                call(e) {
                    return this._isPending || (this.reset(), this._createPromise(), this._createTimer(), this._callFn(e)), this._promise
                }
                resolve(e) {
                    this._isPending && (bc(e) ? this._tryAttachToPromise(e) : (this._settle(e), this._isFulfilled = !0, this._resolve(e)))
                }
                reject(e) {
                    this._isPending && (this._settle(e), this._isRejected = !0, this._reject(e))
                }
                reset() {
                    if (this._isPending) {
                        let e = xc(this._options.resetReason),
                            r = new t.ResetError(e);
                        this.reject(r)
                    }
                    this._promise = null, this._isPending = !1, this._isFulfilled = !1, this._isRejected = !1, this._value = void 0, this._clearTimer()
                }
                configure(e) {
                    Object.assign(this._options, e)
                }
                _createPromise() {
                    this._promise = new Promise((e, r) => {
                        this._isPending = !0, this._resolve = e, this._reject = r
                    })
                }
                _handleTimeout() {
                    let e = xc(this._options.timeoutReason),
                        r = typeof e == "string" ? e.replace("{timeout}", this._options.timeout) : "",
                        n = new t.TimeoutError(r);
                    this.reject(n)
                }
                _createTimer() {
                    this._options.timeout && (this._timer = setTimeout(() => this._handleTimeout(), this._options.timeout))
                }
                _clearTimer() {
                    this._timer && (clearTimeout(this._timer), this._timer = null)
                }
                _settle(e) {
                    this._isPending = !1, this._value = e, this._clearTimer()
                }
                _callFn(e) {
                    if (typeof e == "function") try {
                        let r = e();
                        this._tryAttachToPromise(r)
                    } catch (r) {
                        this.reject(r)
                    }
                }
                _tryAttachToPromise(e) {
                    bc(e) && e.then(r => this.resolve(r), r => this.reject(r))
                }
            };
        ar.TimeoutError = wc("TimeoutError");
        ar.ResetError = wc("ResetError");
        _c.exports = ar
    });
    var Tc = T(Qr => {
        "use strict";
        Object.defineProperty(Qr, "__esModule", {
            value: !0
        });
        Qr.PromisedMap = void 0;
        var wy = function() {
            function t() {
                this.map = new Map
            }
            return Object.defineProperty(t.prototype, "size", {
                get: function() {
                    return this.map.size
                },
                enumerable: !1,
                configurable: !0
            }), t.prototype.set = function(e, r) {
                var n = this.createMapItem(r);
                return this.map.set(e, n), n.promise
            }, t.prototype.get = function(e) {
                var r = this.map.get(e);
                return r && r.data
            }, t.prototype.has = function(e) {
                return this.map.has(e)
            }, t.prototype.delete = function(e) {
                return this.map.delete(e)
            }, t.prototype.resolve = function(e, r) {
                var n = this.map.get(e);
                n && (this.delete(e), n.resolve(r))
            }, t.prototype.reject = function(e, r) {
                var n = this.map.get(e);
                n && (this.delete(e), n.reject(r))
            }, t.prototype.resolveAll = function(e) {
                this.map.forEach(function(r) {
                    return r.resolve(e)
                }), this.map.clear()
            }, t.prototype.rejectAll = function(e) {
                this.map.forEach(function(r) {
                    return r.reject(e)
                }), this.map.clear()
            }, t.prototype.forEach = function(e) {
                this.map.forEach(function(r, n, o) {
                    return e(r.data, n, o)
                })
            }, t.prototype.clear = function() {
                return this.map.clear()
            }, t.prototype.createMapItem = function(e) {
                var r = {
                    data: e
                };
                return r.promise = new Promise(function(n, o) {
                    r.resolve = n, r.reject = o
                }), r
            }, t
        }();
        Qr.PromisedMap = wy
    });
    var Sc = T((hE, Ac) => {
        "use strict";
        var _y = "Function.prototype.bind called on incompatible ",
            yo = Array.prototype.slice,
            Ty = Object.prototype.toString,
            Ay = "[object Function]";
        Ac.exports = function(e) {
            var r = this;
            if (typeof r != "function" || Ty.call(r) !== Ay) throw new TypeError(_y + r);
            for (var n = yo.call(arguments, 1), o, a = function() {
                    if (this instanceof o) {
                        var f = r.apply(this, n.concat(yo.call(arguments)));
                        return Object(f) === f ? f : this
                    } else return r.apply(e, n.concat(yo.call(arguments)))
                }, i = Math.max(0, r.length - n.length), s = [], c = 0; c < i; c++) s.push("$" + c);
            if (o = Function("binder", "return function (" + s.join(",") + "){ return binder.apply(this,arguments); }")(a), r.prototype) {
                var u = function() {};
                u.prototype = r.prototype, o.prototype = new u, u.prototype = null
            }
            return o
        }
    });
    var Xr = T((yE, Pc) => {
        "use strict";
        var Sy = Sc();
        Pc.exports = Function.prototype.bind || Sy
    });
    var Ec = T((vE, Oc) => {
        "use strict";
        Oc.exports = function() {
            if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function") return !1;
            if (typeof Symbol.iterator == "symbol") return !0;
            var e = {},
                r = Symbol("test"),
                n = Object(r);
            if (typeof r == "string" || Object.prototype.toString.call(r) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]") return !1;
            var o = 42;
            e[r] = o;
            for (r in e) return !1;
            if (typeof Object.keys == "function" && Object.keys(e).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(e).length !== 0) return !1;
            var a = Object.getOwnPropertySymbols(e);
            if (a.length !== 1 || a[0] !== r || !Object.prototype.propertyIsEnumerable.call(e, r)) return !1;
            if (typeof Object.getOwnPropertyDescriptor == "function") {
                var i = Object.getOwnPropertyDescriptor(e, r);
                if (i.value !== o || i.enumerable !== !0) return !1
            }
            return !0
        }
    });
    var Rc = T((bE, Cc) => {
        "use strict";
        var kc = typeof Symbol < "u" && Symbol,
            Py = Ec();
        Cc.exports = function() {
            return typeof kc != "function" || typeof Symbol != "function" || typeof kc("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : Py()
        }
    });
    var Mc = T((xE, Lc) => {
        "use strict";
        var Ic = {
                foo: {}
            },
            Oy = Object;
        Lc.exports = function() {
            return {
                __proto__: Ic
            }.foo === Ic.foo && !({
                    __proto__: null
                }
                instanceof Oy)
        }
    });
    var Ve = T((wE, jc) => {
        "use strict";
        var Ey = Xr();
        jc.exports = Ey.call(Function.call, Object.prototype.hasOwnProperty)
    });
    var de = T((_E, Gc) => {
        "use strict";
        var E, Ft = SyntaxError,
            Uc = Function,
            Dt = TypeError,
            vo = function(t) {
                try {
                    return Uc('"use strict"; return (' + t + ").constructor;")()
                } catch {}
            },
            ot = Object.getOwnPropertyDescriptor;
        if (ot) try {
            ot({}, "")
        } catch {
            ot = null
        }
        var bo = function() {
                throw new Dt
            },
            ky = ot ? function() {
                try {
                    return arguments.callee, bo
                } catch {
                    try {
                        return ot(arguments, "callee").get
                    } catch {
                        return bo
                    }
                }
            }() : bo,
            jt = Rc()(),
            Cy = Mc()(),
            K = Object.getPrototypeOf || (Cy ? function(t) {
                return t.__proto__
            } : null),
            Nt = {},
            Ry = typeof Uint8Array > "u" || !K ? E : K(Uint8Array),
            at = {
                "%AggregateError%": typeof AggregateError > "u" ? E : AggregateError,
                "%Array%": Array,
                "%ArrayBuffer%": typeof ArrayBuffer > "u" ? E : ArrayBuffer,
                "%ArrayIteratorPrototype%": jt && K ? K([][Symbol.iterator]()) : E,
                "%AsyncFromSyncIteratorPrototype%": E,
                "%AsyncFunction%": Nt,
                "%AsyncGenerator%": Nt,
                "%AsyncGeneratorFunction%": Nt,
                "%AsyncIteratorPrototype%": Nt,
                "%Atomics%": typeof Atomics > "u" ? E : Atomics,
                "%BigInt%": typeof BigInt > "u" ? E : BigInt,
                "%BigInt64Array%": typeof BigInt64Array > "u" ? E : BigInt64Array,
                "%BigUint64Array%": typeof BigUint64Array > "u" ? E : BigUint64Array,
                "%Boolean%": Boolean,
                "%DataView%": typeof DataView > "u" ? E : DataView,
                "%Date%": Date,
                "%decodeURI%": decodeURI,
                "%decodeURIComponent%": decodeURIComponent,
                "%encodeURI%": encodeURI,
                "%encodeURIComponent%": encodeURIComponent,
                "%Error%": Error,
                "%eval%": eval,
                "%EvalError%": EvalError,
                "%Float32Array%": typeof Float32Array > "u" ? E : Float32Array,
                "%Float64Array%": typeof Float64Array > "u" ? E : Float64Array,
                "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? E : FinalizationRegistry,
                "%Function%": Uc,
                "%GeneratorFunction%": Nt,
                "%Int8Array%": typeof Int8Array > "u" ? E : Int8Array,
                "%Int16Array%": typeof Int16Array > "u" ? E : Int16Array,
                "%Int32Array%": typeof Int32Array > "u" ? E : Int32Array,
                "%isFinite%": isFinite,
                "%isNaN%": isNaN,
                "%IteratorPrototype%": jt && K ? K(K([][Symbol.iterator]())) : E,
                "%JSON%": typeof JSON == "object" ? JSON : E,
                "%Map%": typeof Map > "u" ? E : Map,
                "%MapIteratorPrototype%": typeof Map > "u" || !jt || !K ? E : K(new Map()[Symbol.iterator]()),
                "%Math%": Math,
                "%Number%": Number,
                "%Object%": Object,
                "%parseFloat%": parseFloat,
                "%parseInt%": parseInt,
                "%Promise%": typeof Promise > "u" ? E : Promise,
                "%Proxy%": typeof Proxy > "u" ? E : Proxy,
                "%RangeError%": RangeError,
                "%ReferenceError%": ReferenceError,
                "%Reflect%": typeof Reflect > "u" ? E : Reflect,
                "%RegExp%": RegExp,
                "%Set%": typeof Set > "u" ? E : Set,
                "%SetIteratorPrototype%": typeof Set > "u" || !jt || !K ? E : K(new Set()[Symbol.iterator]()),
                "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? E : SharedArrayBuffer,
                "%String%": String,
                "%StringIteratorPrototype%": jt && K ? K("" [Symbol.iterator]()) : E,
                "%Symbol%": jt ? Symbol : E,
                "%SyntaxError%": Ft,
                "%ThrowTypeError%": ky,
                "%TypedArray%": Ry,
                "%TypeError%": Dt,
                "%Uint8Array%": typeof Uint8Array > "u" ? E : Uint8Array,
                "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? E : Uint8ClampedArray,
                "%Uint16Array%": typeof Uint16Array > "u" ? E : Uint16Array,
                "%Uint32Array%": typeof Uint32Array > "u" ? E : Uint32Array,
                "%URIError%": URIError,
                "%WeakMap%": typeof WeakMap > "u" ? E : WeakMap,
                "%WeakRef%": typeof WeakRef > "u" ? E : WeakRef,
                "%WeakSet%": typeof WeakSet > "u" ? E : WeakSet
            };
        if (K) try {
            null.error
        } catch (t) {
            Nc = K(K(t)), at["%Error.prototype%"] = Nc
        }
        var Nc, Iy = function t(e) {
                var r;
                if (e === "%AsyncFunction%") r = vo("async function () {}");
                else if (e === "%GeneratorFunction%") r = vo("function* () {}");
                else if (e === "%AsyncGeneratorFunction%") r = vo("async function* () {}");
                else if (e === "%AsyncGenerator%") {
                    var n = t("%AsyncGeneratorFunction%");
                    n && (r = n.prototype)
                } else if (e === "%AsyncIteratorPrototype%") {
                    var o = t("%AsyncGenerator%");
                    o && K && (r = K(o.prototype))
                }
                return at[e] = r, r
            },
            Dc = {
                "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
                "%ArrayPrototype%": ["Array", "prototype"],
                "%ArrayProto_entries%": ["Array", "prototype", "entries"],
                "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
                "%ArrayProto_keys%": ["Array", "prototype", "keys"],
                "%ArrayProto_values%": ["Array", "prototype", "values"],
                "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
                "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
                "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
                "%BooleanPrototype%": ["Boolean", "prototype"],
                "%DataViewPrototype%": ["DataView", "prototype"],
                "%DatePrototype%": ["Date", "prototype"],
                "%ErrorPrototype%": ["Error", "prototype"],
                "%EvalErrorPrototype%": ["EvalError", "prototype"],
                "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
                "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
                "%FunctionPrototype%": ["Function", "prototype"],
                "%Generator%": ["GeneratorFunction", "prototype"],
                "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
                "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
                "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
                "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
                "%JSONParse%": ["JSON", "parse"],
                "%JSONStringify%": ["JSON", "stringify"],
                "%MapPrototype%": ["Map", "prototype"],
                "%NumberPrototype%": ["Number", "prototype"],
                "%ObjectPrototype%": ["Object", "prototype"],
                "%ObjProto_toString%": ["Object", "prototype", "toString"],
                "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
                "%PromisePrototype%": ["Promise", "prototype"],
                "%PromiseProto_then%": ["Promise", "prototype", "then"],
                "%Promise_all%": ["Promise", "all"],
                "%Promise_reject%": ["Promise", "reject"],
                "%Promise_resolve%": ["Promise", "resolve"],
                "%RangeErrorPrototype%": ["RangeError", "prototype"],
                "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
                "%RegExpPrototype%": ["RegExp", "prototype"],
                "%SetPrototype%": ["Set", "prototype"],
                "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
                "%StringPrototype%": ["String", "prototype"],
                "%SymbolPrototype%": ["Symbol", "prototype"],
                "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
                "%TypedArrayPrototype%": ["TypedArray", "prototype"],
                "%TypeErrorPrototype%": ["TypeError", "prototype"],
                "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
                "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
                "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
                "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
                "%URIErrorPrototype%": ["URIError", "prototype"],
                "%WeakMapPrototype%": ["WeakMap", "prototype"],
                "%WeakSetPrototype%": ["WeakSet", "prototype"]
            },
            ir = Xr(),
            Zr = Ve(),
            Ly = ir.call(Function.call, Array.prototype.concat),
            My = ir.call(Function.apply, Array.prototype.splice),
            Fc = ir.call(Function.call, String.prototype.replace),
            en = ir.call(Function.call, String.prototype.slice),
            jy = ir.call(Function.call, RegExp.prototype.exec),
            Ny = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
            Dy = /\\(\\)?/g,
            Fy = function(e) {
                var r = en(e, 0, 1),
                    n = en(e, -1);
                if (r === "%" && n !== "%") throw new Ft("invalid intrinsic syntax, expected closing `%`");
                if (n === "%" && r !== "%") throw new Ft("invalid intrinsic syntax, expected opening `%`");
                var o = [];
                return Fc(e, Ny, function(a, i, s, c) {
                    o[o.length] = s ? Fc(c, Dy, "$1") : i || a
                }), o
            },
            Uy = function(e, r) {
                var n = e,
                    o;
                if (Zr(Dc, n) && (o = Dc[n], n = "%" + o[0] + "%"), Zr(at, n)) {
                    var a = at[n];
                    if (a === Nt && (a = Iy(n)), typeof a > "u" && !r) throw new Dt("intrinsic " + e + " exists, but is not available. Please file an issue!");
                    return {
                        alias: o,
                        name: n,
                        value: a
                    }
                }
                throw new Ft("intrinsic " + e + " does not exist!")
            };
        Gc.exports = function(e, r) {
            if (typeof e != "string" || e.length === 0) throw new Dt("intrinsic name must be a non-empty string");
            if (arguments.length > 1 && typeof r != "boolean") throw new Dt('"allowMissing" argument must be a boolean');
            if (jy(/^%?[^%]*%?$/, e) === null) throw new Ft("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
            var n = Fy(e),
                o = n.length > 0 ? n[0] : "",
                a = Uy("%" + o + "%", r),
                i = a.name,
                s = a.value,
                c = !1,
                u = a.alias;
            u && (o = u[0], My(n, Ly([0, 1], u)));
            for (var f = 1, l = !0; f < n.length; f += 1) {
                var d = n[f],
                    p = en(d, 0, 1),
                    m = en(d, -1);
                if ((p === '"' || p === "'" || p === "`" || m === '"' || m === "'" || m === "`") && p !== m) throw new Ft("property names with quotes must have matching quotes");
                if ((d === "constructor" || !l) && (c = !0), o += "." + d, i = "%" + o + "%", Zr(at, i)) s = at[i];
                else if (s != null) {
                    if (!(d in s)) {
                        if (!r) throw new Dt("base intrinsic for " + e + " exists, but the property is not available.");
                        return
                    }
                    if (ot && f + 1 >= n.length) {
                        var v = ot(s, d);
                        l = !!v, l && "get" in v && !("originalValue" in v.get) ? s = v.get : s = s[d]
                    } else l = Zr(s, d), s = s[d];
                    l && !c && (at[i] = s)
                }
            }
            return s
        }
    });
    var wo = T((TE, tn) => {
        "use strict";
        var xo = Xr(),
            Ut = de(),
            $c = Ut("%Function.prototype.apply%"),
            Kc = Ut("%Function.prototype.call%"),
            Vc = Ut("%Reflect.apply%", !0) || xo.call(Kc, $c),
            qc = Ut("%Object.getOwnPropertyDescriptor%", !0),
            it = Ut("%Object.defineProperty%", !0),
            Gy = Ut("%Math.max%");
        if (it) try {
            it({}, "a", {
                value: 1
            })
        } catch {
            it = null
        }
        tn.exports = function(e) {
            var r = Vc(xo, Kc, arguments);
            if (qc && it) {
                var n = qc(r, "length");
                n.configurable && it(r, "length", {
                    value: 1 + Gy(0, e.length - (arguments.length - 1))
                })
            }
            return r
        };
        var Bc = function() {
            return Vc(xo, $c, arguments)
        };
        it ? it(tn.exports, "apply", {
            value: Bc
        }) : tn.exports.apply = Bc
    });
    var _o = T((AE, Hc) => {
        "use strict";
        var Wc = Object.prototype.toString;
        Hc.exports = function(e) {
            var r = Wc.call(e),
                n = r === "[object Arguments]";
            return n || (n = r !== "[object Array]" && e !== null && typeof e == "object" && typeof e.length == "number" && e.length >= 0 && Wc.call(e.callee) === "[object Function]"), n
        }
    });
    var ru = T((SE, tu) => {
        "use strict";
        var eu;
        Object.keys || (sr = Object.prototype.hasOwnProperty, To = Object.prototype.toString, zc = _o(), Ao = Object.prototype.propertyIsEnumerable, Jc = !Ao.call({
            toString: null
        }, "toString"), Yc = Ao.call(function() {}, "prototype"), cr = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"], rn = function(t) {
            var e = t.constructor;
            return e && e.prototype === t
        }, Qc = {
            $applicationCache: !0,
            $console: !0,
            $external: !0,
            $frame: !0,
            $frameElement: !0,
            $frames: !0,
            $innerHeight: !0,
            $innerWidth: !0,
            $onmozfullscreenchange: !0,
            $onmozfullscreenerror: !0,
            $outerHeight: !0,
            $outerWidth: !0,
            $pageXOffset: !0,
            $pageYOffset: !0,
            $parent: !0,
            $scrollLeft: !0,
            $scrollTop: !0,
            $scrollX: !0,
            $scrollY: !0,
            $self: !0,
            $webkitIndexedDB: !0,
            $webkitStorageInfo: !0,
            $window: !0
        }, Xc = function() {
            if (typeof window > "u") return !1;
            for (var t in window) try {
                if (!Qc["$" + t] && sr.call(window, t) && window[t] !== null && typeof window[t] == "object") try {
                    rn(window[t])
                } catch {
                    return !0
                }
            } catch {
                return !0
            }
            return !1
        }(), Zc = function(t) {
            if (typeof window > "u" || !Xc) return rn(t);
            try {
                return rn(t)
            } catch {
                return !1
            }
        }, eu = function(e) {
            var r = e !== null && typeof e == "object",
                n = To.call(e) === "[object Function]",
                o = zc(e),
                a = r && To.call(e) === "[object String]",
                i = [];
            if (!r && !n && !o) throw new TypeError("Object.keys called on a non-object");
            var s = Yc && n;
            if (a && e.length > 0 && !sr.call(e, 0))
                for (var c = 0; c < e.length; ++c) i.push(String(c));
            if (o && e.length > 0)
                for (var u = 0; u < e.length; ++u) i.push(String(u));
            else
                for (var f in e) !(s && f === "prototype") && sr.call(e, f) && i.push(String(f));
            if (Jc)
                for (var l = Zc(e), d = 0; d < cr.length; ++d) !(l && cr[d] === "constructor") && sr.call(e, cr[d]) && i.push(cr[d]);
            return i
        });
        var sr, To, zc, Ao, Jc, Yc, cr, rn, Qc, Xc, Zc;
        tu.exports = eu
    });
    var iu = T((PE, au) => {
        "use strict";
        var qy = Array.prototype.slice,
            By = _o(),
            nu = Object.keys,
            nn = nu ? function(e) {
                return nu(e)
            } : ru(),
            ou = Object.keys;
        nn.shim = function() {
            if (Object.keys) {
                var e = function() {
                    var r = Object.keys(arguments);
                    return r && r.length === arguments.length
                }(1, 2);
                e || (Object.keys = function(n) {
                    return By(n) ? ou(qy.call(n)) : ou(n)
                })
            } else Object.keys = nn;
            return Object.keys || nn
        };
        au.exports = nn
    });
    var Oo = T((OE, su) => {
        "use strict";
        var $y = de(),
            So = $y("%Object.defineProperty%", !0),
            Po = function() {
                if (So) try {
                    return So({}, "a", {
                        value: 1
                    }), !0
                } catch {
                    return !1
                }
                return !1
            };
        Po.hasArrayLengthDefineBug = function() {
            if (!Po()) return null;
            try {
                return So([], "length", {
                    value: 1
                }).length !== 1
            } catch {
                return !0
            }
        };
        su.exports = Po
    });
    var Eo = T((EE, fu) => {
        "use strict";
        var Ky = iu(),
            Vy = typeof Symbol == "function" && typeof Symbol("foo") == "symbol",
            Wy = Object.prototype.toString,
            Hy = Array.prototype.concat,
            cu = Object.defineProperty,
            zy = function(t) {
                return typeof t == "function" && Wy.call(t) === "[object Function]"
            },
            Jy = Oo()(),
            uu = cu && Jy,
            Yy = function(t, e, r, n) {
                if (e in t) {
                    if (n === !0) {
                        if (t[e] === r) return
                    } else if (!zy(n) || !n()) return
                }
                uu ? cu(t, e, {
                    configurable: !0,
                    enumerable: !1,
                    value: r,
                    writable: !0
                }) : t[e] = r
            },
            lu = function(t, e) {
                var r = arguments.length > 2 ? arguments[2] : {},
                    n = Ky(e);
                Vy && (n = Hy.call(n, Object.getOwnPropertySymbols(e)));
                for (var o = 0; o < n.length; o += 1) Yy(t, n[o], e[n[o]], r[n[o]])
            };
        lu.supportsDescriptors = !!uu;
        fu.exports = lu
    });
    var on = T((kE, pu) => {
        "use strict";
        pu.exports = function() {
            if (typeof Promise != "function") throw new TypeError("`Promise.prototype.finally` requires a global `Promise` be available.")
        }
    });
    var hu = T((CE, gu) => {
        "use strict";
        var mu = Function.prototype.toString,
            Gt = typeof Reflect == "object" && Reflect !== null && Reflect.apply,
            Co, an;
        if (typeof Gt == "function" && typeof Object.defineProperty == "function") try {
            Co = Object.defineProperty({}, "length", {
                get: function() {
                    throw an
                }
            }), an = {}, Gt(function() {
                throw 42
            }, null, Co)
        } catch (t) {
            t !== an && (Gt = null)
        } else Gt = null;
        var Qy = /^\s*class\b/,
            Ro = function(e) {
                try {
                    var r = mu.call(e);
                    return Qy.test(r)
                } catch {
                    return !1
                }
            },
            ko = function(e) {
                try {
                    return Ro(e) ? !1 : (mu.call(e), !0)
                } catch {
                    return !1
                }
            },
            sn = Object.prototype.toString,
            Xy = "[object Object]",
            Zy = "[object Function]",
            ev = "[object GeneratorFunction]",
            tv = "[object HTMLAllCollection]",
            rv = "[object HTML document.all class]",
            nv = "[object HTMLCollection]",
            ov = typeof Symbol == "function" && !!Symbol.toStringTag,
            av = !(0 in [, ]),
            Io = function() {
                return !1
            };
        typeof document == "object" && (du = document.all, sn.call(du) === sn.call(document.all) && (Io = function(e) {
            if ((av || !e) && (typeof e > "u" || typeof e == "object")) try {
                var r = sn.call(e);
                return (r === tv || r === rv || r === nv || r === Xy) && e("") == null
            } catch {}
            return !1
        }));
        var du;
        gu.exports = Gt ? function(e) {
            if (Io(e)) return !0;
            if (!e || typeof e != "function" && typeof e != "object") return !1;
            try {
                Gt(e, null, Co)
            } catch (r) {
                if (r !== an) return !1
            }
            return !Ro(e) && ko(e)
        } : function(e) {
            if (Io(e)) return !0;
            if (!e || typeof e != "function" && typeof e != "object") return !1;
            if (ov) return ko(e);
            if (Ro(e)) return !1;
            var r = sn.call(e);
            return r !== Zy && r !== ev && !/^\[object HTML/.test(r) ? !1 : ko(e)
        }
    });
    var Lo = T((RE, yu) => {
        "use strict";
        yu.exports = hu()
    });
    var bu = T((IE, vu) => {
        "use strict";
        vu.exports = de()
    });
    var wu = T((LE, xu) => {
        "use strict";
        var iv = de(),
            sv = Ve(),
            cv = iv("%TypeError%");
        xu.exports = function(e, r) {
            if (e.Type(r) !== "Object") return !1;
            var n = {
                "[[Configurable]]": !0,
                "[[Enumerable]]": !0,
                "[[Get]]": !0,
                "[[Set]]": !0,
                "[[Value]]": !0,
                "[[Writable]]": !0
            };
            for (var o in r)
                if (sv(r, o) && !n[o]) return !1;
            if (e.IsDataDescriptor(r) && e.IsAccessorDescriptor(r)) throw new cv("Property Descriptors may not be both accessor and data descriptors");
            return !0
        }
    });
    var Mo = T((ME, Au) => {
        "use strict";
        var _u = de(),
            Tu = wo(),
            uv = Tu(_u("String.prototype.indexOf"));
        Au.exports = function(e, r) {
            var n = _u(e, !!r);
            return typeof n == "function" && uv(e, ".prototype.") > -1 ? Tu(n) : n
        }
    });
    var Ou = T((jE, Pu) => {
        "use strict";
        var lv = de(),
            Su = lv("%Array%"),
            fv = !Su.isArray && Mo()("Object.prototype.toString");
        Pu.exports = Su.isArray || function(e) {
            return fv(e) === "[object Array]"
        }
    });
    var Iu = T((NE, Ru) => {
        "use strict";
        var ku = Oo(),
            pv = de(),
            Eu = ku() && pv("%Object.defineProperty%", !0),
            Cu = ku.hasArrayLengthDefineBug(),
            dv = Cu && Ou(),
            mv = Mo(),
            gv = mv("Object.prototype.propertyIsEnumerable");
        Ru.exports = function(e, r, n, o, a, i) {
            if (!Eu) {
                if (!e(i) || !i["[[Configurable]]"] || !i["[[Writable]]"] || a in o && gv(o, a) !== !!i["[[Enumerable]]"]) return !1;
                var s = i["[[Value]]"];
                return o[a] = s, r(o[a], s)
            }
            return Cu && a === "length" && "[[Value]]" in i && dv(o) && o.length !== i["[[Value]]"] ? (o.length = i["[[Value]]"], o.length === i["[[Value]]"]) : (Eu(o, a, n(i)), !0)
        }
    });
    var ju = T((DE, Mu) => {
        "use strict";
        var Lu = Ve();
        Mu.exports = function(e) {
            return Lu(e, "[[StartIndex]]") && Lu(e, "[[EndIndex]]") && e["[[StartIndex]]"] >= 0 && e["[[EndIndex]]"] >= e["[[StartIndex]]"] && String(parseInt(e["[[StartIndex]]"], 10)) === String(e["[[StartIndex]]"]) && String(parseInt(e["[[EndIndex]]"], 10)) === String(e["[[EndIndex]]"])
        }
    });
    var cn = T((FE, Uu) => {
        "use strict";
        var Nu = de(),
            Du = Nu("%TypeError%"),
            hv = Nu("%SyntaxError%"),
            me = Ve(),
            yv = ju(),
            Fu = {
                "Property Descriptor": function(e) {
                    var r = {
                        "[[Configurable]]": !0,
                        "[[Enumerable]]": !0,
                        "[[Get]]": !0,
                        "[[Set]]": !0,
                        "[[Value]]": !0,
                        "[[Writable]]": !0
                    };
                    if (!e) return !1;
                    for (var n in e)
                        if (me(e, n) && !r[n]) return !1;
                    var o = me(e, "[[Value]]"),
                        a = me(e, "[[Get]]") || me(e, "[[Set]]");
                    if (o && a) throw new Du("Property Descriptors may not be both accessor and data descriptors");
                    return !0
                },
                "Match Record": yv,
                "Iterator Record": function(e) {
                    return me(e, "[[Iterator]]") && me(e, "[[NextMethod]]") && me(e, "[[Done]]")
                },
                "PromiseCapability Record": function(e) {
                    return !!e && me(e, "[[Resolve]]") && typeof e["[[Resolve]]"] == "function" && me(e, "[[Reject]]") && typeof e["[[Reject]]"] == "function" && me(e, "[[Promise]]") && e["[[Promise]]"] && typeof e["[[Promise]]"].then == "function"
                },
                "AsyncGeneratorRequest Record": function(e) {
                    return !!e && me(e, "[[Completion]]") && me(e, "[[Capability]]") && Fu["PromiseCapability Record"](e["[[Capability]]"])
                }
            };
        Uu.exports = function(e, r, n, o) {
            var a = Fu[r];
            if (typeof a != "function") throw new hv("unknown record type: " + r);
            if (e(o) !== "Object" || !a(o)) throw new Du(n + " must be a " + r)
        }
    });
    var qu = T((UE, Gu) => {
        "use strict";
        Gu.exports = function(e) {
            if (typeof e > "u") return e;
            var r = {};
            return "[[Value]]" in e && (r.value = e["[[Value]]"]), "[[Writable]]" in e && (r.writable = !!e["[[Writable]]"]), "[[Get]]" in e && (r.get = e["[[Get]]"]), "[[Set]]" in e && (r.set = e["[[Set]]"]), "[[Enumerable]]" in e && (r.enumerable = !!e["[[Enumerable]]"]), "[[Configurable]]" in e && (r.configurable = !!e["[[Configurable]]"]), r
        }
    });
    var $u = T((GE, Bu) => {
        "use strict";
        Bu.exports = function(e) {
            if (e === null) return "Null";
            if (typeof e > "u") return "Undefined";
            if (typeof e == "function" || typeof e == "object") return "Object";
            if (typeof e == "number") return "Number";
            if (typeof e == "boolean") return "Boolean";
            if (typeof e == "string") return "String"
        }
    });
    var We = T((qE, Ku) => {
        "use strict";
        var vv = $u();
        Ku.exports = function(e) {
            return typeof e == "symbol" ? "Symbol" : typeof e == "bigint" ? "BigInt" : vv(e)
        }
    });
    var Wu = T((BE, Vu) => {
        "use strict";
        var bv = cn(),
            xv = qu(),
            wv = We();
        Vu.exports = function(e) {
            return typeof e < "u" && bv(wv, "Property Descriptor", "Desc", e), xv(e)
        }
    });
    var Ju = T(($E, zu) => {
        "use strict";
        var Hu = Ve(),
            _v = We(),
            Tv = cn();
        zu.exports = function(e) {
            return !(typeof e > "u" || (Tv(_v, "Property Descriptor", "Desc", e), !Hu(e, "[[Get]]") && !Hu(e, "[[Set]]")))
        }
    });
    var Xu = T((KE, Qu) => {
        "use strict";
        var Yu = Ve(),
            Av = We(),
            Sv = cn();
        Qu.exports = function(e) {
            return !(typeof e > "u" || (Sv(Av, "Property Descriptor", "Desc", e), !Yu(e, "[[Value]]") && !Yu(e, "[[Writable]]")))
        }
    });
    var el = T((VE, Zu) => {
        "use strict";
        Zu.exports = function(e) {
            return typeof e == "string" || typeof e == "symbol"
        }
    });
    var rl = T((WE, tl) => {
        "use strict";
        tl.exports = Number.isNaN || function(e) {
            return e !== e
        }
    });
    var al = T((HE, ol) => {
        "use strict";
        var nl = rl();
        ol.exports = function(e, r) {
            return e === r ? e === 0 ? 1 / e === 1 / r : !0 : nl(e) && nl(r)
        }
    });
    var sl = T((zE, il) => {
        "use strict";
        il.exports = function(e) {
            return !!e
        }
    });
    var ll = T((JE, ul) => {
        "use strict";
        var Se = Ve(),
            Pv = de(),
            un = Pv("%TypeError%"),
            Ov = We(),
            jo = sl(),
            cl = Lo();
        ul.exports = function(e) {
            if (Ov(e) !== "Object") throw new un("ToPropertyDescriptor requires an object");
            var r = {};
            if (Se(e, "enumerable") && (r["[[Enumerable]]"] = jo(e.enumerable)), Se(e, "configurable") && (r["[[Configurable]]"] = jo(e.configurable)), Se(e, "value") && (r["[[Value]]"] = e.value), Se(e, "writable") && (r["[[Writable]]"] = jo(e.writable)), Se(e, "get")) {
                var n = e.get;
                if (typeof n < "u" && !cl(n)) throw new un("getter must be a function");
                r["[[Get]]"] = n
            }
            if (Se(e, "set")) {
                var o = e.set;
                if (typeof o < "u" && !cl(o)) throw new un("setter must be a function");
                r["[[Set]]"] = o
            }
            if ((Se(r, "[[Get]]") || Se(r, "[[Set]]")) && (Se(r, "[[Value]]") || Se(r, "[[Writable]]"))) throw new un("Invalid property descriptor. Cannot both specify accessors and a value or writable attribute");
            return r
        }
    });
    var ml = T((YE, dl) => {
        "use strict";
        var Ev = de(),
            No = Ev("%TypeError%"),
            fl = wu(),
            kv = Iu(),
            Cv = Wu(),
            pl = Ju(),
            Do = Xu(),
            Rv = el(),
            Iv = al(),
            Lv = ll(),
            Fo = We();
        dl.exports = function(e, r, n) {
            if (Fo(e) !== "Object") throw new No("Assertion failed: Type(O) is not Object");
            if (!Rv(r)) throw new No("Assertion failed: IsPropertyKey(P) is not true");
            var o = fl({
                Type: Fo,
                IsDataDescriptor: Do,
                IsAccessorDescriptor: pl
            }, n) ? n : Lv(n);
            if (!fl({
                    Type: Fo,
                    IsDataDescriptor: Do,
                    IsAccessorDescriptor: pl
                }, o)) throw new No("Assertion failed: Desc is not a valid Property Descriptor");
            return kv(Do, Iv, Cv, e, r, o)
        }
    });
    var hl = T((QE, qo) => {
        "use strict";
        var Mv = bu(),
            gl = Mv("%Reflect.construct%", !0),
            ln = ml();
        try {
            ln({}, "", {
                "[[Get]]": function() {}
            })
        } catch {
            ln = null
        }
        ln && gl ? (Uo = {}, Go = {}, ln(Go, "length", {
            "[[Get]]": function() {
                throw Uo
            },
            "[[Enumerable]]": !0
        }), qo.exports = function(e) {
            try {
                gl(e, Go)
            } catch (r) {
                return r === Uo
            }
        }) : qo.exports = function(e) {
            return typeof e == "function" && !!e.prototype
        };
        var Uo, Go
    });
    var wl = T((XE, xl) => {
        "use strict";
        var bl = de(),
            yl = bl("%Symbol.species%", !0),
            Bo = bl("%TypeError%"),
            jv = hl(),
            vl = We();
        xl.exports = function(e, r) {
            if (vl(e) !== "Object") throw new Bo("Assertion failed: Type(O) is not Object");
            var n = e.constructor;
            if (typeof n > "u") return r;
            if (vl(n) !== "Object") throw new Bo("O.constructor is not an Object");
            var o = yl ? n[yl] : void 0;
            if (o == null) return r;
            if (jv(o)) return o;
            throw new Bo("no constructor found")
        }
    });
    var Vo = T((ZE, Tl) => {
        "use strict";
        var Nv = on();
        Nv();
        var Dv = Lo(),
            Fv = wl(),
            Uv = We(),
            _l = function(e, r) {
                return new e(function(n) {
                    n(r)
                })
            },
            Gv = Promise,
            qv = function(e, r) {
                return function(n) {
                    var o = r(),
                        a = _l(e, o),
                        i = function() {
                            return n
                        };
                    return a.then(i)
                }
            },
            Bv = function(e, r) {
                return function(n) {
                    var o = r(),
                        a = _l(e, o),
                        i = function() {
                            throw n
                        };
                    return a.then(i)
                }
            },
            Ko = function(e) {
                var r = this;
                if (Uv(r) !== "Object") throw new TypeError("receiver is not an Object");
                var n = Fv(r, Gv),
                    o = e,
                    a = e;
                return Dv(e) && (o = qv(n, e), a = Bv(n, e)), r.then(o, a)
            };
        Object.getOwnPropertyDescriptor && ($o = Object.getOwnPropertyDescriptor(Ko, "name"), $o && $o.configurable && Object.defineProperty(Ko, "name", {
            configurable: !0,
            value: "finally"
        }));
        var $o;
        Tl.exports = Ko
    });
    var Wo = T((e1, Al) => {
        "use strict";
        var $v = on(),
            Kv = Vo();
        Al.exports = function() {
            return $v(), typeof Promise.prototype.finally == "function" ? Promise.prototype.finally : Kv
        }
    });
    var Pl = T((t1, Sl) => {
        "use strict";
        var Vv = on(),
            Wv = Wo(),
            Hv = Eo();
        Sl.exports = function() {
            Vv();
            var e = Wv();
            return Hv(Promise.prototype, {
                finally: e
            }, {
                finally: function() {
                    return Promise.prototype.finally !== e
                }
            }), e
        }
    });
    var Cl = T((r1, kl) => {
        "use strict";
        var zv = wo(),
            Jv = Eo(),
            Yv = Vo(),
            Ol = Wo(),
            Qv = Pl(),
            El = zv(Ol());
        Jv(El, {
            getPolyfill: Ol,
            implementation: Yv,
            shim: Qv
        });
        kl.exports = El
    });
    var Il = T((o1, Rl) => {
        var Xv = ho(),
            Zv = Cl();
        Rl.exports = class {
            constructor() {
                this._items = new Map
            }
            create(e, r, n) {
                return this._rejectExistingRequest(e), this._createNewRequest(e, r, n)
            }
            resolve(e, r) {
                e && this._items.has(e) && this._items.get(e).resolve(r)
            }
            rejectAll(e) {
                this._items.forEach(r => r.isPending ? r.reject(e) : null)
            }
            _rejectExistingRequest(e) {
                let r = this._items.get(e);
                r && r.isPending && r.reject(new Error(`WebSocket request is replaced, id: ${e}`))
            }
            _createNewRequest(e, r, n) {
                let o = new Xv({
                    timeout: n,
                    timeoutReason: `WebSocket request was rejected by timeout (${n} ms). RequestId: ${e}`
                });
                return this._items.set(e, o), Zv(o.call(r), () => this._deleteRequest(e, o))
            }
            _deleteRequest(e, r) {
                this._items.get(e) === r && this._items.delete(e)
            }
        }
    });
    var Ml = T((a1, Ll) => {
        Ll.exports = {
            createWebSocket: t => new WebSocket(t),
            packMessage: null,
            unpackMessage: null,
            attachRequestId: null,
            extractRequestId: null,
            extractMessageData: t => t.data,
            timeout: 0,
            connectionTimeout: 0
        }
    });
    var jl = T(Ho => {
        Ho.throwIf = (t, e) => {
            if (t) throw new Error(e)
        };
        Ho.isPromise = t => t && typeof t.then == "function"
    });
    var Ul = T((s1, Fl) => {
        var He = gc(),
            Nl = ho(),
            {
                PromisedMap: eb
            } = Tc(),
            tb = Il(),
            Dl = Ml(),
            {
                throwIf: fn,
                isPromise: rb
            } = jl(),
            pn = {
                CONNECTING: 0,
                OPEN: 1,
                CLOSING: 2,
                CLOSED: 3
            },
            zo = class {
                constructor(e, r) {
                    this._assertOptions(r), this._url = e, this._options = Object.assign({}, Dl, r), this._requests = new tb, this._promisedMap = new eb, this._ws = null, this._wsSubscription = null, this._createOpeningController(), this._createClosingController(), this._createChannels()
                }
                get ws() {
                    return this._ws
                }
                get url() {
                    return this._url
                }
                get isOpening() {
                    return !!(this._ws && this._ws.readyState === pn.CONNECTING)
                }
                get isOpened() {
                    return !!(this._ws && this._ws.readyState === pn.OPEN)
                }
                get isClosing() {
                    return !!(this._ws && this._ws.readyState === pn.CLOSING)
                }
                get isClosed() {
                    return !this._ws || this._ws.readyState === pn.CLOSED
                }
                get onOpen() {
                    return this._onOpen
                }
                get onSend() {
                    return this._onSend
                }
                get onMessage() {
                    return this._onMessage
                }
                get onUnpackedMessage() {
                    return this._onUnpackedMessage
                }
                get onResponse() {
                    return this._onResponse
                }
                get onClose() {
                    return this._onClose
                }
                get onError() {
                    return this._onError
                }
                open() {
                    return this.isClosing ? Promise.reject(new Error("Can't open WebSocket while closing.")) : this.isOpened ? this._opening.promise : this._opening.call(() => {
                        this._opening.promise.catch(e => this._cleanup(e)), this._createWS()
                    })
                }
                sendRequest(e, r = {}) {
                    let n = r.requestId || `${Math.random()}`,
                        o = r.timeout !== void 0 ? r.timeout : this._options.timeout;
                    return this._requests.create(n, () => {
                        this._assertRequestIdHandlers();
                        let a = this._options.attachRequestId(e, n);
                        this.sendPacked(a)
                    }, o)
                }
                sendPacked(e) {
                    this._assertPackingHandlers();
                    let r = this._options.packMessage(e);
                    this.send(r)
                }
                send(e) {
                    fn(!this.isOpened, "Can't send data because WebSocket is not opened."), this._ws.send(e), this._onSend.dispatchAsync(e)
                }
                waitUnpackedMessage(e, r = {}) {
                    return fn(typeof e != "function", `Predicate must be a function, got ${typeof e}`), r.timeout && setTimeout(() => {
                        if (this._promisedMap.has(e)) {
                            let n = r.timeoutError || new Error("Timeout");
                            this._promisedMap.reject(e, n)
                        }
                    }, r.timeout), this._promisedMap.set(e)
                }
                close(e, r) {
                    return this.isClosed ? Promise.resolve(this._closing.value) : this._closing.call(() => this._ws.close(e, r))
                }
                removeAllListeners() {
                    this._onOpen.removeAllListeners(), this._onMessage.removeAllListeners(), this._onUnpackedMessage.removeAllListeners(), this._onResponse.removeAllListeners(), this._onSend.removeAllListeners(), this._onClose.removeAllListeners(), this._onError.removeAllListeners()
                }
                _createOpeningController() {
                    let e = this._options.connectionTimeout || this._options.timeout;
                    this._opening = new Nl({
                        timeout: e,
                        timeoutReason: `Can't open WebSocket within allowed timeout: ${e} ms.`
                    })
                }
                _createClosingController() {
                    let e = this._options.timeout;
                    this._closing = new Nl({
                        timeout: e,
                        timeoutReason: `Can't close WebSocket within allowed timeout: ${e} ms.`
                    })
                }
                _createChannels() {
                    this._onOpen = new He, this._onMessage = new He, this._onUnpackedMessage = new He, this._onResponse = new He, this._onSend = new He, this._onClose = new He, this._onError = new He
                }
                _createWS() {
                    this._ws = this._options.createWebSocket(this._url), this._wsSubscription = new He.Subscription([{
                        channel: this._ws,
                        event: "open",
                        listener: e => this._handleOpen(e)
                    }, {
                        channel: this._ws,
                        event: "message",
                        listener: e => this._handleMessage(e)
                    }, {
                        channel: this._ws,
                        event: "error",
                        listener: e => this._handleError(e)
                    }, {
                        channel: this._ws,
                        event: "close",
                        listener: e => this._handleClose(e)
                    }]).on()
                }
                _handleOpen(e) {
                    this._onOpen.dispatchAsync(e), this._opening.resolve(e)
                }
                _handleMessage(e) {
                    let r = this._options.extractMessageData(e);
                    this._onMessage.dispatchAsync(r), this._tryUnpack(r)
                }
                _tryUnpack(e) {
                    this._options.unpackMessage && (e = this._options.unpackMessage(e), rb(e) ? e.then(r => this._handleUnpackedData(r)) : this._handleUnpackedData(e))
                }
                _handleUnpackedData(e) {
                    e !== void 0 && (this._onUnpackedMessage.dispatchAsync(e), this._tryHandleResponse(e)), this._tryHandleWaitingMessage(e)
                }
                _tryHandleResponse(e) {
                    if (this._options.extractRequestId) {
                        let r = this._options.extractRequestId(e);
                        r && (this._onResponse.dispatchAsync(e, r), this._requests.resolve(r, e))
                    }
                }
                _tryHandleWaitingMessage(e) {
                    this._promisedMap.forEach((r, n) => {
                        let o = !1;
                        try {
                            o = n(e)
                        } catch (a) {
                            this._promisedMap.reject(n, a);
                            return
                        }
                        o && this._promisedMap.resolve(n, e)
                    })
                }
                _handleError(e) {
                    this._onError.dispatchAsync(e)
                }
                _handleClose(e) {
                    this._onClose.dispatchAsync(e), this._closing.resolve(e);
                    let r = new Error(`WebSocket closed with reason: ${e.reason} (${e.code}).`);
                    this._opening.isPending && this._opening.reject(r), this._cleanup(r)
                }
                _cleanupWS() {
                    this._wsSubscription && (this._wsSubscription.off(), this._wsSubscription = null), this._ws = null
                }
                _cleanup(e) {
                    this._cleanupWS(), this._requests.rejectAll(e)
                }
                _assertOptions(e) {
                    Object.keys(e || {}).forEach(r => {
                        if (!Dl.hasOwnProperty(r)) throw new Error(`Unknown option: ${r}`)
                    })
                }
                _assertPackingHandlers() {
                    let {
                        packMessage: e,
                        unpackMessage: r
                    } = this._options;
                    fn(!e || !r, "Please define 'options.packMessage / options.unpackMessage' for sending packed messages.")
                }
                _assertRequestIdHandlers() {
                    let {
                        attachRequestId: e,
                        extractRequestId: r
                    } = this._options;
                    fn(!e || !r, "Please define 'options.attachRequestId / options.extractRequestId' for sending requests.")
                }
            };
        Fl.exports = zo
    });
    var wf = typeof global == "object" && global && global.Object === Object && global,
        gr = wf;
    var _f = typeof self == "object" && self && self.Object === Object && self,
        Tf = gr || _f || Function("return this")(),
        M = Tf;
    var Af = M.Symbol,
        ct = Af;
    var fa = Object.prototype,
        Sf = fa.hasOwnProperty,
        Pf = fa.toString,
        Vt = ct ? ct.toStringTag : void 0;

    function Of(t) {
        var e = Sf.call(t, Vt),
            r = t[Vt];
        try {
            t[Vt] = void 0;
            var n = !0
        } catch {}
        var o = Pf.call(t);
        return n && (e ? t[Vt] = r : delete t[Vt]), o
    }
    var pa = Of;
    var Ef = Object.prototype,
        kf = Ef.toString;

    function Cf(t) {
        return kf.call(t)
    }
    var da = Cf;
    var Rf = "[object Null]",
        If = "[object Undefined]",
        ma = ct ? ct.toStringTag : void 0;

    function Lf(t) {
        return t == null ? t === void 0 ? If : Rf : ma && ma in Object(t) ? pa(t) : da(t)
    }
    var Z = Lf;

    function Mf(t) {
        return t != null && typeof t == "object"
    }
    var ne = Mf;
    var jf = "[object Symbol]";

    function Nf(t) {
        return typeof t == "symbol" || ne(t) && Z(t) == jf
    }
    var ga = Nf;
    var Df = Array.isArray,
        Oe = Df;
    var Ff = /\s/;

    function Uf(t) {
        for (var e = t.length; e-- && Ff.test(t.charAt(e)););
        return e
    }
    var ha = Uf;
    var Gf = /^\s+/;

    function qf(t) {
        return t && t.slice(0, ha(t) + 1).replace(Gf, "")
    }
    var ya = qf;

    function Bf(t) {
        var e = typeof t;
        return t != null && (e == "object" || e == "function")
    }
    var U = Bf;
    var va = 0 / 0,
        $f = /^[-+]0x[0-9a-f]+$/i,
        Kf = /^0b[01]+$/i,
        Vf = /^0o[0-7]+$/i,
        Wf = parseInt;

    function Hf(t) {
        if (typeof t == "number") return t;
        if (ga(t)) return va;
        if (U(t)) {
            var e = typeof t.valueOf == "function" ? t.valueOf() : t;
            t = U(e) ? e + "" : e
        }
        if (typeof t != "string") return t === 0 ? t : +t;
        t = ya(t);
        var r = Kf.test(t);
        return r || Vf.test(t) ? Wf(t.slice(2), r ? 2 : 8) : $f.test(t) ? va : +t
    }
    var Wt = Hf;
    var ba = 1 / 0,
        zf = 17976931348623157e292;

    function Jf(t) {
        if (!t) return t === 0 ? t : 0;
        if (t = Wt(t), t === ba || t === -ba) {
            var e = t < 0 ? -1 : 1;
            return e * zf
        }
        return t === t ? t : 0
    }
    var Tn = Jf;

    function Yf(t) {
        return t
    }
    var hr = Yf;
    var Qf = "[object AsyncFunction]",
        Xf = "[object Function]",
        Zf = "[object GeneratorFunction]",
        ep = "[object Proxy]";

    function tp(t) {
        if (!U(t)) return !1;
        var e = Z(t);
        return e == Xf || e == Zf || e == Qf || e == ep
    }
    var ut = tp;
    var rp = M["__core-js_shared__"],
        yr = rp;
    var xa = function() {
        var t = /[^.]+$/.exec(yr && yr.keys && yr.keys.IE_PROTO || "");
        return t ? "Symbol(src)_1." + t : ""
    }();

    function np(t) {
        return !!xa && xa in t
    }
    var wa = np;
    var op = Function.prototype,
        ap = op.toString;

    function ip(t) {
        if (t != null) {
            try {
                return ap.call(t)
            } catch {}
            try {
                return t + ""
            } catch {}
        }
        return ""
    }
    var Ee = ip;
    var sp = /[\\^$.*+?()[\]{}|]/g,
        cp = /^\[object .+?Constructor\]$/,
        up = Function.prototype,
        lp = Object.prototype,
        fp = up.toString,
        pp = lp.hasOwnProperty,
        dp = RegExp("^" + fp.call(pp).replace(sp, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

    function mp(t) {
        if (!U(t) || wa(t)) return !1;
        var e = ut(t) ? dp : cp;
        return e.test(Ee(t))
    }
    var _a = mp;

    function gp(t, e) {
        return t?.[e]
    }
    var Ta = gp;

    function hp(t, e) {
        var r = Ta(t, e);
        return _a(r) ? r : void 0
    }
    var oe = hp;
    var yp = oe(M, "WeakMap"),
        vr = yp;
    var Aa = Object.create,
        vp = function() {
            function t() {}
            return function(e) {
                if (!U(e)) return {};
                if (Aa) return Aa(e);
                t.prototype = e;
                var r = new t;
                return t.prototype = void 0, r
            }
        }(),
        Sa = vp;

    function bp(t, e, r) {
        switch (r.length) {
            case 0:
                return t.call(e);
            case 1:
                return t.call(e, r[0]);
            case 2:
                return t.call(e, r[0], r[1]);
            case 3:
                return t.call(e, r[0], r[1], r[2])
        }
        return t.apply(e, r)
    }
    var Pa = bp;

    function xp(t, e) {
        var r = -1,
            n = t.length;
        for (e || (e = Array(n)); ++r < n;) e[r] = t[r];
        return e
    }
    var Oa = xp;
    var wp = 800,
        _p = 16,
        Tp = Date.now;

    function Ap(t) {
        var e = 0,
            r = 0;
        return function() {
            var n = Tp(),
                o = _p - (n - r);
            if (r = n, o > 0) {
                if (++e >= wp) return arguments[0]
            } else e = 0;
            return t.apply(void 0, arguments)
        }
    }
    var Ea = Ap;

    function Sp(t) {
        return function() {
            return t
        }
    }
    var ka = Sp;
    var Pp = function() {
            try {
                var t = oe(Object, "defineProperty");
                return t({}, "", {}), t
            } catch {}
        }(),
        lt = Pp;
    var Op = lt ? function(t, e) {
            return lt(t, "toString", {
                configurable: !0,
                enumerable: !1,
                value: ka(e),
                writable: !0
            })
        } : hr,
        Ca = Op;
    var Ep = Ea(Ca),
        Ra = Ep;
    var kp = 9007199254740991,
        Cp = /^(?:0|[1-9]\d*)$/;

    function Rp(t, e) {
        var r = typeof t;
        return e = e ?? kp, !!e && (r == "number" || r != "symbol" && Cp.test(t)) && t > -1 && t % 1 == 0 && t < e
    }
    var br = Rp;

    function Ip(t, e, r) {
        e == "__proto__" && lt ? lt(t, e, {
            configurable: !0,
            enumerable: !0,
            value: r,
            writable: !0
        }) : t[e] = r
    }
    var ft = Ip;

    function Lp(t, e) {
        return t === e || t !== t && e !== e
    }
    var Ie = Lp;
    var Mp = Object.prototype,
        jp = Mp.hasOwnProperty;

    function Np(t, e, r) {
        var n = t[e];
        (!(jp.call(t, e) && Ie(n, r)) || r === void 0 && !(e in t)) && ft(t, e, r)
    }
    var Ia = Np;

    function Dp(t, e, r, n) {
        var o = !r;
        r || (r = {});
        for (var a = -1, i = e.length; ++a < i;) {
            var s = e[a],
                c = n ? n(r[s], t[s], s, r, t) : void 0;
            c === void 0 && (c = t[s]), o ? ft(r, s, c) : Ia(r, s, c)
        }
        return r
    }
    var La = Dp;
    var Ma = Math.max;

    function Fp(t, e, r) {
        return e = Ma(e === void 0 ? t.length - 1 : e, 0),
            function() {
                for (var n = arguments, o = -1, a = Ma(n.length - e, 0), i = Array(a); ++o < a;) i[o] = n[e + o];
                o = -1;
                for (var s = Array(e + 1); ++o < e;) s[o] = n[o];
                return s[e] = r(i), Pa(t, this, s)
            }
    }
    var ja = Fp;

    function Up(t, e) {
        return Ra(ja(t, e, hr), t + "")
    }
    var Na = Up;
    var Gp = 9007199254740991;

    function qp(t) {
        return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Gp
    }
    var xr = qp;

    function Bp(t) {
        return t != null && xr(t.length) && !ut(t)
    }
    var Le = Bp;

    function $p(t, e, r) {
        if (!U(r)) return !1;
        var n = typeof e;
        return (n == "number" ? Le(r) && br(e, r.length) : n == "string" && e in r) ? Ie(r[e], t) : !1
    }
    var wr = $p;

    function Kp(t) {
        return Na(function(e, r) {
            var n = -1,
                o = r.length,
                a = o > 1 ? r[o - 1] : void 0,
                i = o > 2 ? r[2] : void 0;
            for (a = t.length > 3 && typeof a == "function" ? (o--, a) : void 0, i && wr(r[0], r[1], i) && (a = o < 3 ? void 0 : a, o = 1), e = Object(e); ++n < o;) {
                var s = r[n];
                s && t(e, s, n, a)
            }
            return e
        })
    }
    var Da = Kp;
    var Vp = Object.prototype;

    function Wp(t) {
        var e = t && t.constructor,
            r = typeof e == "function" && e.prototype || Vp;
        return t === r
    }
    var Me = Wp;

    function Hp(t, e) {
        for (var r = -1, n = Array(t); ++r < t;) n[r] = e(r);
        return n
    }
    var Fa = Hp;
    var zp = "[object Arguments]";

    function Jp(t) {
        return ne(t) && Z(t) == zp
    }
    var An = Jp;
    var Ua = Object.prototype,
        Yp = Ua.hasOwnProperty,
        Qp = Ua.propertyIsEnumerable,
        Xp = An(function() {
            return arguments
        }()) ? An : function(t) {
            return ne(t) && Yp.call(t, "callee") && !Qp.call(t, "callee")
        },
        Je = Xp;

    function Zp() {
        return !1
    }
    var Ga = Zp;
    var $a = typeof exports == "object" && exports && !exports.nodeType && exports,
        qa = $a && typeof module == "object" && module && !module.nodeType && module,
        ed = qa && qa.exports === $a,
        Ba = ed ? M.Buffer : void 0,
        td = Ba ? Ba.isBuffer : void 0,
        rd = td || Ga,
        pt = rd;
    var nd = "[object Arguments]",
        od = "[object Array]",
        ad = "[object Boolean]",
        id = "[object Date]",
        sd = "[object Error]",
        cd = "[object Function]",
        ud = "[object Map]",
        ld = "[object Number]",
        fd = "[object Object]",
        pd = "[object RegExp]",
        dd = "[object Set]",
        md = "[object String]",
        gd = "[object WeakMap]",
        hd = "[object ArrayBuffer]",
        yd = "[object DataView]",
        vd = "[object Float32Array]",
        bd = "[object Float64Array]",
        xd = "[object Int8Array]",
        wd = "[object Int16Array]",
        _d = "[object Int32Array]",
        Td = "[object Uint8Array]",
        Ad = "[object Uint8ClampedArray]",
        Sd = "[object Uint16Array]",
        Pd = "[object Uint32Array]",
        I = {};
    I[vd] = I[bd] = I[xd] = I[wd] = I[_d] = I[Td] = I[Ad] = I[Sd] = I[Pd] = !0;
    I[nd] = I[od] = I[hd] = I[ad] = I[yd] = I[id] = I[sd] = I[cd] = I[ud] = I[ld] = I[fd] = I[pd] = I[dd] = I[md] = I[gd] = !1;

    function Od(t) {
        return ne(t) && xr(t.length) && !!I[Z(t)]
    }
    var Ka = Od;

    function Ed(t) {
        return function(e) {
            return t(e)
        }
    }
    var Va = Ed;
    var Wa = typeof exports == "object" && exports && !exports.nodeType && exports,
        Ht = Wa && typeof module == "object" && module && !module.nodeType && module,
        kd = Ht && Ht.exports === Wa,
        Sn = kd && gr.process,
        Cd = function() {
            try {
                var t = Ht && Ht.require && Ht.require("util").types;
                return t || Sn && Sn.binding && Sn.binding("util")
            } catch {}
        }(),
        Pn = Cd;
    var Ha = Pn && Pn.isTypedArray,
        Rd = Ha ? Va(Ha) : Ka,
        dt = Rd;
    var Id = Object.prototype,
        Ld = Id.hasOwnProperty;

    function Md(t, e) {
        var r = Oe(t),
            n = !r && Je(t),
            o = !r && !n && pt(t),
            a = !r && !n && !o && dt(t),
            i = r || n || o || a,
            s = i ? Fa(t.length, String) : [],
            c = s.length;
        for (var u in t)(e || Ld.call(t, u)) && !(i && (u == "length" || o && (u == "offset" || u == "parent") || a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || br(u, c))) && s.push(u);
        return s
    }
    var za = Md;

    function jd(t, e) {
        return function(r) {
            return t(e(r))
        }
    }
    var _r = jd;
    var Nd = _r(Object.keys, Object),
        Ja = Nd;
    var Dd = Object.prototype,
        Fd = Dd.hasOwnProperty;

    function Ud(t) {
        if (!Me(t)) return Ja(t);
        var e = [];
        for (var r in Object(t)) Fd.call(t, r) && r != "constructor" && e.push(r);
        return e
    }
    var Ya = Ud;

    function Gd(t) {
        var e = [];
        if (t != null)
            for (var r in Object(t)) e.push(r);
        return e
    }
    var Qa = Gd;
    var qd = Object.prototype,
        Bd = qd.hasOwnProperty;

    function $d(t) {
        if (!U(t)) return Qa(t);
        var e = Me(t),
            r = [];
        for (var n in t) n == "constructor" && (e || !Bd.call(t, n)) || r.push(n);
        return r
    }
    var Xa = $d;

    function Kd(t) {
        return Le(t) ? za(t, !0) : Xa(t)
    }
    var Tr = Kd;
    var Vd = oe(Object, "create"),
        ke = Vd;

    function Wd() {
        this.__data__ = ke ? ke(null) : {}, this.size = 0
    }
    var Za = Wd;

    function Hd(t) {
        var e = this.has(t) && delete this.__data__[t];
        return this.size -= e ? 1 : 0, e
    }
    var ei = Hd;
    var zd = "__lodash_hash_undefined__",
        Jd = Object.prototype,
        Yd = Jd.hasOwnProperty;

    function Qd(t) {
        var e = this.__data__;
        if (ke) {
            var r = e[t];
            return r === zd ? void 0 : r
        }
        return Yd.call(e, t) ? e[t] : void 0
    }
    var ti = Qd;
    var Xd = Object.prototype,
        Zd = Xd.hasOwnProperty;

    function em(t) {
        var e = this.__data__;
        return ke ? e[t] !== void 0 : Zd.call(e, t)
    }
    var ri = em;
    var tm = "__lodash_hash_undefined__";

    function rm(t, e) {
        var r = this.__data__;
        return this.size += this.has(t) ? 0 : 1, r[t] = ke && e === void 0 ? tm : e, this
    }
    var ni = rm;

    function mt(t) {
        var e = -1,
            r = t == null ? 0 : t.length;
        for (this.clear(); ++e < r;) {
            var n = t[e];
            this.set(n[0], n[1])
        }
    }
    mt.prototype.clear = Za;
    mt.prototype.delete = ei;
    mt.prototype.get = ti;
    mt.prototype.has = ri;
    mt.prototype.set = ni;
    var On = mt;

    function nm() {
        this.__data__ = [], this.size = 0
    }
    var oi = nm;

    function om(t, e) {
        for (var r = t.length; r--;)
            if (Ie(t[r][0], e)) return r;
        return -1
    }
    var je = om;
    var am = Array.prototype,
        im = am.splice;

    function sm(t) {
        var e = this.__data__,
            r = je(e, t);
        if (r < 0) return !1;
        var n = e.length - 1;
        return r == n ? e.pop() : im.call(e, r, 1), --this.size, !0
    }
    var ai = sm;

    function cm(t) {
        var e = this.__data__,
            r = je(e, t);
        return r < 0 ? void 0 : e[r][1]
    }
    var ii = cm;

    function um(t) {
        return je(this.__data__, t) > -1
    }
    var si = um;

    function lm(t, e) {
        var r = this.__data__,
            n = je(r, t);
        return n < 0 ? (++this.size, r.push([t, e])) : r[n][1] = e, this
    }
    var ci = lm;

    function gt(t) {
        var e = -1,
            r = t == null ? 0 : t.length;
        for (this.clear(); ++e < r;) {
            var n = t[e];
            this.set(n[0], n[1])
        }
    }
    gt.prototype.clear = oi;
    gt.prototype.delete = ai;
    gt.prototype.get = ii;
    gt.prototype.has = si;
    gt.prototype.set = ci;
    var Ne = gt;
    var fm = oe(M, "Map"),
        De = fm;

    function pm() {
        this.size = 0, this.__data__ = {
            hash: new On,
            map: new(De || Ne),
            string: new On
        }
    }
    var ui = pm;

    function dm(t) {
        var e = typeof t;
        return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null
    }
    var li = dm;

    function mm(t, e) {
        var r = t.__data__;
        return li(e) ? r[typeof e == "string" ? "string" : "hash"] : r.map
    }
    var Fe = mm;

    function gm(t) {
        var e = Fe(this, t).delete(t);
        return this.size -= e ? 1 : 0, e
    }
    var fi = gm;

    function hm(t) {
        return Fe(this, t).get(t)
    }
    var pi = hm;

    function ym(t) {
        return Fe(this, t).has(t)
    }
    var di = ym;

    function vm(t, e) {
        var r = Fe(this, t),
            n = r.size;
        return r.set(t, e), this.size += r.size == n ? 0 : 1, this
    }
    var mi = vm;

    function ht(t) {
        var e = -1,
            r = t == null ? 0 : t.length;
        for (this.clear(); ++e < r;) {
            var n = t[e];
            this.set(n[0], n[1])
        }
    }
    ht.prototype.clear = ui;
    ht.prototype.delete = fi;
    ht.prototype.get = pi;
    ht.prototype.has = di;
    ht.prototype.set = mi;
    var gi = ht;
    var bm = _r(Object.getPrototypeOf, Object),
        Ar = bm;
    var xm = "[object Object]",
        wm = Function.prototype,
        _m = Object.prototype,
        hi = wm.toString,
        Tm = _m.hasOwnProperty,
        Am = hi.call(Object);

    function Sm(t) {
        if (!ne(t) || Z(t) != xm) return !1;
        var e = Ar(t);
        if (e === null) return !0;
        var r = Tm.call(e, "constructor") && e.constructor;
        return typeof r == "function" && r instanceof r && hi.call(r) == Am
    }
    var yt = Sm;

    function Pm() {
        this.__data__ = new Ne, this.size = 0
    }
    var yi = Pm;

    function Om(t) {
        var e = this.__data__,
            r = e.delete(t);
        return this.size = e.size, r
    }
    var vi = Om;

    function Em(t) {
        return this.__data__.get(t)
    }
    var bi = Em;

    function km(t) {
        return this.__data__.has(t)
    }
    var xi = km;
    var Cm = 200;

    function Rm(t, e) {
        var r = this.__data__;
        if (r instanceof Ne) {
            var n = r.__data__;
            if (!De || n.length < Cm - 1) return n.push([t, e]), this.size = ++r.size, this;
            r = this.__data__ = new gi(n)
        }
        return r.set(t, e), this.size = r.size, this
    }
    var wi = Rm;

    function vt(t) {
        var e = this.__data__ = new Ne(t);
        this.size = e.size
    }
    vt.prototype.clear = yi;
    vt.prototype.delete = vi;
    vt.prototype.get = bi;
    vt.prototype.has = xi;
    vt.prototype.set = wi;
    var _i = vt;
    var Pi = typeof exports == "object" && exports && !exports.nodeType && exports,
        Ti = Pi && typeof module == "object" && module && !module.nodeType && module,
        Im = Ti && Ti.exports === Pi,
        Ai = Im ? M.Buffer : void 0,
        Si = Ai ? Ai.allocUnsafe : void 0;

    function Lm(t, e) {
        if (e) return t.slice();
        var r = t.length,
            n = Si ? Si(r) : new t.constructor(r);
        return t.copy(n), n
    }
    var Oi = Lm;
    var Mm = oe(M, "DataView"),
        Sr = Mm;
    var jm = oe(M, "Promise"),
        Pr = jm;
    var Nm = oe(M, "Set"),
        Or = Nm;
    var Ei = "[object Map]",
        Dm = "[object Object]",
        ki = "[object Promise]",
        Ci = "[object Set]",
        Ri = "[object WeakMap]",
        Ii = "[object DataView]",
        Fm = Ee(Sr),
        Um = Ee(De),
        Gm = Ee(Pr),
        qm = Ee(Or),
        Bm = Ee(vr),
        Ye = Z;
    (Sr && Ye(new Sr(new ArrayBuffer(1))) != Ii || De && Ye(new De) != Ei || Pr && Ye(Pr.resolve()) != ki || Or && Ye(new Or) != Ci || vr && Ye(new vr) != Ri) && (Ye = function(t) {
        var e = Z(t),
            r = e == Dm ? t.constructor : void 0,
            n = r ? Ee(r) : "";
        if (n) switch (n) {
            case Fm:
                return Ii;
            case Um:
                return Ei;
            case Gm:
                return ki;
            case qm:
                return Ci;
            case Bm:
                return Ri
        }
        return e
    });
    var Li = Ye;
    var $m = M.Uint8Array,
        En = $m;

    function Km(t) {
        var e = new t.constructor(t.byteLength);
        return new En(e).set(new En(t)), e
    }
    var Mi = Km;

    function Vm(t, e) {
        var r = e ? Mi(t.buffer) : t.buffer;
        return new t.constructor(r, t.byteOffset, t.length)
    }
    var ji = Vm;

    function Wm(t) {
        return typeof t.constructor == "function" && !Me(t) ? Sa(Ar(t)) : {}
    }
    var Ni = Wm;

    function Hm(t) {
        return function(e, r, n) {
            for (var o = -1, a = Object(e), i = n(e), s = i.length; s--;) {
                var c = i[t ? s : ++o];
                if (r(a[c], c, a) === !1) break
            }
            return e
        }
    }
    var Di = Hm;
    var zm = Di(),
        Fi = zm;
    var Jm = function() {
            return M.Date.now()
        },
        Er = Jm;
    var Ym = "Expected a function",
        Qm = Math.max,
        Xm = Math.min;

    function Zm(t, e, r) {
        var n, o, a, i, s, c, u = 0,
            f = !1,
            l = !1,
            d = !0;
        if (typeof t != "function") throw new TypeError(Ym);
        e = Wt(e) || 0, U(r) && (f = !!r.leading, l = "maxWait" in r, a = l ? Qm(Wt(r.maxWait) || 0, e) : a, d = "trailing" in r ? !!r.trailing : d);

        function p(w) {
            var A = n,
                k = o;
            return n = o = void 0, u = w, i = t.apply(k, A), i
        }

        function m(w) {
            return u = w, s = setTimeout(g, e), f ? p(w) : i
        }

        function v(w) {
            var A = w - c,
                k = w - u,
                L = e - A;
            return l ? Xm(L, a - k) : L
        }

        function b(w) {
            var A = w - c,
                k = w - u;
            return c === void 0 || A >= e || A < 0 || l && k >= a
        }

        function g() {
            var w = Er();
            if (b(w)) return h(w);
            s = setTimeout(g, v(w))
        }

        function h(w) {
            return s = void 0, d && n ? p(w) : (n = o = void 0, i)
        }

        function S() {
            s !== void 0 && clearTimeout(s), u = 0, n = c = o = s = void 0
        }

        function y() {
            return s === void 0 ? i : h(Er())
        }

        function x() {
            var w = Er(),
                A = b(w);
            if (n = arguments, o = this, c = w, A) {
                if (s === void 0) return m(c);
                if (l) return clearTimeout(s), s = setTimeout(g, e), p(c)
            }
            return s === void 0 && (s = setTimeout(g, e)), i
        }
        return x.cancel = S, x.flush = y, x
    }
    var ee = Zm;

    function eg(t, e, r) {
        (r !== void 0 && !Ie(t[e], r) || r === void 0 && !(e in t)) && ft(t, e, r)
    }
    var zt = eg;

    function tg(t) {
        return ne(t) && Le(t)
    }
    var Ui = tg;

    function rg(t, e) {
        if (!(e === "constructor" && typeof t[e] == "function") && e != "__proto__") return t[e]
    }
    var Jt = rg;

    function ng(t) {
        return La(t, Tr(t))
    }
    var Gi = ng;

    function og(t, e, r, n, o, a, i) {
        var s = Jt(t, r),
            c = Jt(e, r),
            u = i.get(c);
        if (u) {
            zt(t, r, u);
            return
        }
        var f = a ? a(s, c, r + "", t, e, i) : void 0,
            l = f === void 0;
        if (l) {
            var d = Oe(c),
                p = !d && pt(c),
                m = !d && !p && dt(c);
            f = c, d || p || m ? Oe(s) ? f = s : Ui(s) ? f = Oa(s) : p ? (l = !1, f = Oi(c, !0)) : m ? (l = !1, f = ji(c, !0)) : f = [] : yt(c) || Je(c) ? (f = s, Je(s) ? f = Gi(s) : (!U(s) || ut(s)) && (f = Ni(c))) : l = !1
        }
        l && (i.set(c, f), o(f, c, n, a, i), i.delete(c)), zt(t, r, f)
    }
    var qi = og;

    function Bi(t, e, r, n, o) {
        t !== e && Fi(e, function(a, i) {
            if (o || (o = new _i), U(a)) qi(t, e, i, r, Bi, n, o);
            else {
                var s = n ? n(Jt(t, i), a, i + "", t, e, o) : void 0;
                s === void 0 && (s = a), zt(t, i, s)
            }
        }, Tr)
    }
    var $i = Bi;
    var ag = "[object String]";

    function ig(t) {
        return typeof t == "string" || !Oe(t) && ne(t) && Z(t) == ag
    }
    var bt = ig;
    var sg = "[object Map]",
        cg = "[object Set]",
        ug = Object.prototype,
        lg = ug.hasOwnProperty;

    function fg(t) {
        if (t == null) return !0;
        if (Le(t) && (Oe(t) || typeof t == "string" || typeof t.splice == "function" || pt(t) || dt(t) || Je(t))) return !t.length;
        var e = Li(t);
        if (e == sg || e == cg) return !t.size;
        if (Me(t)) return !Ya(t).length;
        for (var r in t)
            if (lg.call(t, r)) return !1;
        return !0
    }
    var Qe = fg;
    var pg = Da(function(t, e, r) {
            $i(t, e, r)
        }),
        kn = pg;
    var dg = Math.floor,
        mg = Math.random;

    function gg(t, e) {
        return t + dg(mg() * (e - t + 1))
    }
    var Ki = gg;
    var hg = parseFloat,
        yg = Math.min,
        vg = Math.random;

    function bg(t, e, r) {
        if (r && typeof r != "boolean" && wr(t, e, r) && (e = r = void 0), r === void 0 && (typeof e == "boolean" ? (r = e, e = void 0) : typeof t == "boolean" && (r = t, t = void 0)), t === void 0 && e === void 0 ? (t = 0, e = 1) : (t = Tn(t), e === void 0 ? (e = t, t = 0) : e = Tn(e)), t > e) {
            var n = t;
            t = e, e = n
        }
        if (r || t % 1 || e % 1) {
            var o = vg();
            return yg(t + o * (e - t + hg("1e-" + ((o + "").length - 1))), e)
        }
        return Ki(t, e)
    }
    var Yt = bg;
    var P = N(W());

    function xt(t) {
        let e, r, n, o, a, i, s;
        return c(), {
            feed: u,
            reset: c
        };

        function c() {
            e = !0, r = "", n = 0, o = -1, a = void 0, i = void 0, s = ""
        }

        function u(l) {
            r = r ? r + l : l, e && xg(r) && (r = r.slice(Wi.length)), e = !1;
            let d = r.length,
                p = 0,
                m = !1;
            for (; p < d;) {
                m && (r[p] === `
` && ++p, m = !1);
                let v = -1,
                    b = o,
                    g;
                for (let h = n; v < 0 && h < d; ++h) g = r[h], g === ":" && b < 0 ? b = h - p : g === "\r" ? (m = !0, v = h - p) : g === `
` && (v = h - p);
                if (v < 0) {
                    n = d - p, o = b;
                    break
                } else n = 0, o = -1;
                f(r, p, b, v), p += v + 1
            }
            p === d ? r = "" : p > 0 && (r = r.slice(p))
        }

        function f(l, d, p, m) {
            if (m === 0) {
                s.length > 0 && (t({
                    type: "event",
                    id: a,
                    event: i || void 0,
                    data: s.slice(0, -1)
                }), s = "", a = void 0), i = void 0;
                return
            }
            let v = p < 0,
                b = l.slice(d, d + (v ? m : p)),
                g = 0;
            v ? g = m : l[d + p + 1] === " " ? g = p + 2 : g = p + 1;
            let h = d + g,
                S = m - g,
                y = l.slice(h, h + S).toString();
            if (b === "data") s += y ? "".concat(y, `
`) : `
`;
            else if (b === "event") i = y;
            else if (b === "id" && !y.includes("\0")) a = y;
            else if (b === "retry") {
                let x = parseInt(y, 10);
                Number.isNaN(x) || t({
                    type: "reconnect-interval",
                    value: x
                })
            }
        }
    }
    var Wi = [239, 187, 191];

    function xg(t) {
        return Wi.every((e, r) => t.charCodeAt(r) === e)
    }
    var kr, wg = new Uint8Array(16);

    function Rn() {
        if (!kr && (kr = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !kr)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return kr(wg)
    }
    var H = [];
    for (let t = 0; t < 256; ++t) H.push((t + 256).toString(16).slice(1));

    function Hi(t, e = 0) {
        return (H[t[e + 0]] + H[t[e + 1]] + H[t[e + 2]] + H[t[e + 3]] + "-" + H[t[e + 4]] + H[t[e + 5]] + "-" + H[t[e + 6]] + H[t[e + 7]] + "-" + H[t[e + 8]] + H[t[e + 9]] + "-" + H[t[e + 10]] + H[t[e + 11]] + H[t[e + 12]] + H[t[e + 13]] + H[t[e + 14]] + H[t[e + 15]]).toLowerCase()
    }
    var _g = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
        In = {
            randomUUID: _g
        };

    function Tg(t, e, r) {
        if (In.randomUUID && !e && !t) return In.randomUUID();
        t = t || {};
        let n = t.random || (t.rng || Rn)();
        if (n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, e) {
            r = r || 0;
            for (let o = 0; o < 16; ++o) e[r + o] = n[o];
            return e
        }
        return Hi(n)
    }
    var te = Tg;
    async function* wt(t) {
        let e = t.getReader();
        try {
            for (;;) {
                let {
                    done: r,
                    value: n
                } = await e.read();
                if (r) return;
                yield n
            }
        } finally {
            e.releaseLock()
        }
    }
    var Nn = N(W());
    var R = N(W());

    function J(t) {
        return R.default.storage.local.get(t)
    }
    async function B(t) {
        return R.default.storage.local.set(t)
    }
    async function ie(t) {
        let e = await R.default.storage.local.get(t);
        return typeof t == "string" ? e[t] : e
    }
    async function zi(t) {
        return new Promise(e => {
            J({
                [t]: ""
            }).then(r => {
                if (r[t]) {
                    e(r[t]);
                    return
                }

                function n(o) {
                    o[t]?.newValue && (e(o[t]?.newValue), R.default.storage.local.onChanged.removeListener(n))
                }
                R.default.storage.local.onChanged.addListener(n)
            })
        })
    }
    async function _t(t) {
        return R.default.storage.local.remove(t)
    }
    async function Cr(t) {
        if (R.default?.cookies) {
            let e = await R.default.cookies.get(t);
            return e?.value ? decodeURIComponent(e.value) : ""
        }
        return R.default.runtime.sendMessage({
            type: "GET_COOKIE",
            data: t
        })
    }
    async function Ln(t) {
        return R.default?.cookies ? await R.default.cookies.set(t) : R.default.runtime.sendMessage({
            type: "SET_COOKIE",
            data: t
        })
    }
    async function Mn(t) {
        return R.default?.tabs ? R.default.tabs.create(t) : R.default.runtime.sendMessage({
            type: "OPEN_URL_IN_NEW_TAB",
            details: t
        })
    }
    async function Ji(t, e) {
        let r = await R.default.tabs.query(t);
        for (let n of r) n.id && await R.default.tabs.update(n.id, e)
    }
    async function Yi(t, e) {
        let {
            url: r,
            ...n
        } = t, o = new URL(r), a = `${o.origin}${o.pathname}/*`, i = await R.default.tabs.query({
            url: a,
            ...n
        });
        if (i.length)
            for (let s of i) s.id && (await R.default.tabs.update(s.id, {
                active: !0
            }), await R.default.tabs.reload(s.id, e));
        else {
            let {
                url: s,
                cookieStoreId: c,
                ...u
            } = t, f = {
                url: Array.isArray(s) ? s[0] : s,
                ...u
            };
            await R.default.tabs.create(f)
        }
    }

    function Qi(t, e) {
        let r = "/options.html";
        t && (r += `?section=${t}`), e && (e.startsWith("#") || (e = "#" + e), r += e), R.default.tabs.create({
            url: r
        })
    }
    async function jn(t) {
        if (R.default?.scripting?.executeScript) return R.default.scripting.executeScript(t)
    }
    async function Rr() {
        return (await R.default.tabs.query({
            active: !0,
            currentWindow: !0
        }))[0]
    }
    var Xi = Nn.default.runtime.getManifest(),
        es = Xi.version_name === Xi.version + "-e";
    var Ue = Nn.default.runtime.getManifest().version;
    var Dn = "gpt-3.5-turbo";
    var Zi = "https://sider.ai",
        $ = {
            origin: Zi,
            api: `${Zi}/api`
        };
    var Tt = (_ => (_.English = "en", _["Chinese(Simplified)"] = "zh_CN", _["Chinese(Traditional)"] = "zh_TW", _.Spanish = "es", _.French = "fr", _.Japanese = "ja", _.German = "de", _.Portuguese = "pt", _.Arabic = "ar", _.Russian = "ru", _.Italian = "it", _.Korean = "ko", _.Hindi = "hi", _.Dutch = "nl", _.Polish = "pl", _.Amharic = "am", _.Bulgarian = "bg", _.Bengali = "bn", _.Catalan = "ca", _.Czech = "cs", _.Danish = "da", _.Greek = "el", _.Estonian = "et", _.Persian = "fa", _.Finnish = "fi", _.Filipino = "fil", _.Gujarati = "gu", _.Hebrew = "he", _.Croatian = "hr", _.Hungarian = "hu", _.Indonesian = "id", _.Kannada = "kn", _.Lithuanian = "lt", _.Latvian = "lv", _.Malayalam = "ml", _.Marathi = "mr", _.Malay = "ms", _.Norwegian = "no", _.Romanian = "ro", _.Slovak = "sk", _.Slovenian = "sl", _.Serbian = "sr", _.Swedish = "sv", _.Swahili = "sw", _.Tamil = "ta", _.Telugu = "te", _.Thai = "th", _.Turkish = "tr", _.Ukrainian = "uk", _.Urdu = "ur", _.Vietnamese = "vi", _))(Tt || {}),
        Ag = {
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
        Fn = Object.entries(Tt).reduce((t, [e, r]) => (t[r] = e, t), {}),
        kS = Object.entries(Tt).map(([t, e]) => ({
            label: t,
            value: e
        })),
        CS = Object.entries(Ag).map(([t, e]) => ({
            label: e,
            value: t
        }));
    var Ir = [{
        id: "default",
        title: "Ask ChatGPT",
        template: "Can you tell me something about $[keywords]? If possible, can you give me some links about it?   If $[keywords] is a code related question, please just write the code",
        canEdit: !1
    }, {
        id: "list",
        title: "Keywords to Questions",
        template: 'List 1 most popular question about "$[keywords]". Then, Answer this question. At last,  list another 4 questions.',
        canEdit: !1
    }, {
        id: "suggest",
        title: "Get related keywords",
        template: "$[keywords] are my search keywords in Google. Please give me 5 sets of related keywords.",
        canEdit: !1
    }];
    var At = "provider:siderApi";
    async function Lr() {
        let t = "provider:gpt3",
            [e = "siderApi", r] = await Promise.all([ie("provider"), ie(t)]);
        return {
            provider: e,
            configs: {
                gpt3: r
            }
        }
    }
    var Qt = [{
        key: "summarize",
        title: "Summarize",
        template: "Summarize this for a second-grade student: ",
        visible: !0
    }, {
        key: "similar-pages",
        title: "Similar pages",
        template: "Find 10 similar pages to the following content with link: "
    }, {
        key: "grammar",
        title: "Grammar",
        template: "Correct this to standard English: "
    }, {
        key: "explain",
        title: "Explain",
        template: "Explain the following content: "
    }, {
        key: "explain-codes",
        title: "Explain Codes",
        template: "Explain the following codes: "
    }, {
        key: "rewrite",
        title: "Rewrite",
        template: "Rewrite the following content: "
    }, {
        key: "translate",
        title: "Translate",
        template: "Translate the following content to $[lang] language: "
    }, {
        key: "qa",
        title: "Q&A",
        template: "Answer this question: "
    }];
    var Xe = {
        pricing: `${$.origin}/pricing`,
        login: `${$.origin}/login`,
        myChats: `${$.origin}/mychats`,
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
    var ts = {
        "fab-config.example.com": {
            favicon: "",
            enable: !0
        }
    };
    var St = N(W());
    var Ge = (...t) => t.join("/").replace(/([^:])\/{2,}/g, "$1/");

    function rs(t = 1e3) {
        return new Promise(e => setTimeout(e, t))
    }
    async function Ze(t, e = 1e3, r = 2) {
        let n = 0;
        for (;;) {
            try {
                return await t()
            } catch (o) {
                if (r >= 0 && n++ >= r) throw o
            }
            await rs(e)
        }
    }

    function Pt(t, e = 0) {
        let r = !1,
            n;
        return function(...o) {
            return r || (r = !0, n = new Promise((a, i) => {
                t(...o).then(a).catch(i).finally(async () => {
                    e && await rs(e), r = !1
                })
            })), n
        }
    }
    async function ns() {
        return (await St.default.cookies.getAll({
            domain: ".chat.openai.com"
        })).some(r => r.name == "__Secure-next-auth.session-token")
    }

    function Un(t, e, r) {
        let n = St.default.runtime.getURL("chat/index.html");
        St.default.tabs.query({
            url: n + "*",
            currentWindow: !0
        }).then(async o => {
            o.length ? (await St.default.tabs.update(o[0].id, {
                active: !0
            }), e && e()) : (r && await r(), await St.default.tabs.create({
                url: n + (t ? "?reason=" + t : "")
            }))
        })
    }
    var qn = N(W());
    var os = N(W());
    async function Mr() {
        let {
            generatedRandomId: t
        } = await J({
            generatedRandomId: ""
        });
        if (!t) {
            let e = await Sg();
            return e || (e = te(), Pg(e)), os.default.storage.local.set({
                generatedRandomId: e
            }), e
        }
        return t
    }
    var as = $.origin.replace(/\/\/\w+?\./, "//Y2hhdGdwdC1zaWRlYmFy."),
        is = "zgv2awnlswq";
    async function Sg() {
        try {
            return await Cr({
                url: as,
                name: is
            })
        } catch {
            return ""
        }
    }
    async function Pg(t) {
        let e = Math.round(Date.now() / 1e3) + 31104e3;
        try {
            return await Ln({
                url: as,
                name: is,
                value: t,
                expirationDate: e,
                secure: !0
            })
        } catch {}
    }
    async function et() {
        let t = await Gn("userinfo-type");
        return t === null ? null : !!(t && t !== "device")
    }
    async function Og() {
        let {
            vipInfo: t
        } = await J({
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
        return t
    }
    async function se(t) {
        let e = await Og();
        return B({
            vipInfo: {
                ...e,
                ...t,
                "gpt-3.5": {
                    ...e["gpt-3.5"],
                    ...t["gpt-3.5"]
                },
                "gpt-4": {
                    ...e["gpt-4"],
                    ...t["gpt-4"]
                },
                "image-creator": {
                    ...e["image-creator"],
                    ...t["image-creator"]
                },
                search: {
                    ...e.search,
                    ...t.search
                },
                summary: {
                    ...e.summary,
                    ...t.summary
                }
            }
        })
    }
    async function tt() {
        let t = await Bn();
        return t ? {
            ...t,
            anonymous: !1
        } : (t = await Eg(), {
            ...t,
            anonymous: !0
        })
    }
    async function Bn() {
        if (await et()) {
            let t = await Gn("token"),
                e = await Gn("refresh_token");
            return t ? {
                token: t,
                refreshToken: e
            } : null
        }
        return null
    }
    async function Eg() {
        let t = await ss();
        if (t) return t;
        let {
            __getSiderAnonymousToken__: e
        } = await J({
            __getSiderAnonymousToken__: !1
        });
        if (e) await zi("siderApiToken"), t = await ss();
        else {
            B({
                __getSiderAnonymousToken__: !0
            });
            try {
                let r = await C.getSiderAnonymousToken();
                t = {
                    token: r.token.token,
                    refreshToken: r.token.refresh_token
                }
            } catch (r) {
                throw _t("__getSiderAnonymousToken__"), r
            }
            _t("__getSiderAnonymousToken__"), kg(t)
        }
        return t
    }
    async function kg(t) {
        return qn.default.storage.local.set({
            siderApiToken: t.token,
            siderApiRefreshToken: t.refreshToken
        })
    }
    async function ss() {
        let {
            siderApiToken: t,
            siderApiRefreshToken: e
        } = await qn.default.storage.local.get(["siderApiToken", "siderApiRefreshToken"]);
        return t ? {
            token: t,
            refreshToken: e
        } : null
    }
    async function Gn(t) {
        try {
            let e = await Cr({
                name: t,
                url: $.origin
            });
            if (!e) throw new Error("");
            return B({
                [t]: e
            }), e
        } catch {
            return (await J({
                [t]: ""
            }))[t]
        }
    }
    async function $n(t) {
        return Ge($.origin, t)
    }

    function Xt(t, e) {
        switch (t) {
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
                throw C.getVipInfoCached(), new Error("error_sider_api_limit");
            case 1107:
                throw C.getVipInfoCached(), new Error("error_sider_api_limit2");
            case 1109:
                throw new Error("error_sider_gpt4_highload");
            case 1110:
                throw new Error("error_sider_gpt_highload");
            case 1112:
            case 1113:
                throw C.getVipInfoCached(), new Error("error_sider_gpt4_limit");
            case 1121:
                throw C.getVipInfoCached(), new Error("error_sider_summary_video_limit");
            default:
                break
        }
        throw typeof e == "string" && e.startsWith("504") ? new Error("error_sider_timeout") : new Error(e)
    }
    var q = `ChitChat_${es?"Edge":"Chrome"}_Ext`,
        ue = Ue,
        he = Intl.DateTimeFormat().resolvedOptions().timeZone,
        C = {
            async refreshToken(t) {
                let e = await G("/v1/user/token/refresh", {
                    refresh_token: t
                }, {
                    headers: {
                        Authorization: ""
                    }
                });
                return {
                    token: e.token.token,
                    refreshToken: e.token.refresh_token
                }
            },
            async adAction({
                source: t,
                action: e,
                p1: r,
                p2: n
            }) {
                return await G("/v1/ad/action", {
                    source: t,
                    action: e,
                    p1: r,
                    p2: n
                }, {
                    headers: {
                        Authorization: ""
                    }
                })
            },
            getSiderAnonymousToken: Pt(async () => {
                let t = await Mr();
                return G("/v1/user/login/device_id", {
                    device_id: t,
                    uuid: t,
                    app_name: q,
                    app_version: ue
                }, {
                    headers: {
                        Authorization: ""
                    }
                })
            }),
            getUserInfo: async () => {
                let t = await ge(`/v1/user/info?app_name=${q}&app_version=${ue}`);
                return B({
                    userInfo: t
                }), t
            },
            getVipInfo: cs,
            getVipInfoCached: Pt(cs, 5e3),
            async getPricingPlan() {
                let t = await ge("/v1/app/ipinfo", null, {
                        headers: {
                            Authorization: ""
                        }
                    }),
                    e = t.region === "CN" || he === "Asia/Shanghai" && (await J({
                        language: "en"
                    })).language === "zh_CN",
                    r = await ge(`/v1/payment/pricing?from=web&location=${e?"CN":t.region}`, null, {
                        headers: {
                            Authorization: ""
                        }
                    });
                B({
                    pricingPlan: r.plan.map(n => ({
                        currency: n.currency,
                        interval: n.interval,
                        originPrice: n.origin_price / 100,
                        price: n.price / 100
                    }))
                })
            },
            async getUserSettings() {
                return (await ge(`/v1/user/settings?app_name=${q}`)).client_setting
            },
            setUserSettings(t) {
                return Ze(() => G("/v1/user/settings", {
                    app_name: q,
                    client_setting: t
                }))
            },
            getUserPromptList(t) {
                return ge(`/v1/prompt/list?type=${t}&page_size=999`)
            },
            createUserPrompt(t) {
                return Ze(() => G("/v1/prompt/create", {
                    is_template: !1,
                    ...t
                }))
            },
            editUserPrompt(t) {
                return Ze(() => G("/v1/prompt/edit", t))
            },
            delUserPrompt(t) {
                return Ze(() => G("/v1/prompt/update", {
                    id: t,
                    status: "Deleted"
                }))
            },
            async uploadHistoryMsg(t) {
                return (await G("/v1/conversation/upload", {
                    app_name: q,
                    app_version: ue,
                    messages: t
                })).cid
            },
            uploadConversion(t) {
                return G("/v1/conversation/upload", {
                    share: !0,
                    app_name: q,
                    app_version: ue,
                    messages: t
                })
            },
            saveConversion(t) {
                return G("/v1/conversation/upload", {
                    save_by_user: !0,
                    app_name: q,
                    app_version: ue,
                    messages: t
                })
            },
            async shareConversion(t) {
                return (await ge(`/v1/conversation/share/${t}`)).share_key
            },
            saveSiderConversion(t) {
                return ge(`/v1/conversation/save-by-user/${t}`)
            },
            unSaveSiderConversion(t) {
                return ge(`/v1/conversation/unsave-by-user/${t}`)
            },
            delConversion(t) {
                return Cg(`/v1/conversation/delete/${t}`)
            },
            async sendFeedback({
                title: t,
                detail: e,
                email: r
            }) {
                let n = await Bn();
                return G("/v1/app/feedback", {
                    title: t,
                    email: r,
                    data: {
                        detail: e
                    },
                    app_name: q,
                    app_version: ue
                }, {
                    headers: {
                        Authorization: n?.token || ""
                    }
                })
            },
            async getInviteRewardConfig() {
                let t = await ge("/v1/invite/config", null, {
                    headers: {
                        Authorization: ""
                    }
                });
                return B({
                    inviteRewardConfig: {
                        "gpt3.5": t.GPT3Dot5Count,
                        gpt4: t.GPT4Count
                    }
                }), t
            },
            createInviteLink() {
                return G("/v1/invite/create", {
                    type: "link"
                })
            },
            async getInviteRewardCount() {
                let t = await ge("/v1/invite/reward");
                return B({
                    inviteRewardCount: {
                        "gpt3.5": t.reward_gpt3dot5_count,
                        gpt4: t.reward_gpt4_count
                    }
                }), t
            },
            inviteFinish: async () => {
                let t = await Mr();
                return G("/v1/invite/finish", {
                    device_id: t
                })
            },
            async summaryVideo(t) {
                function e(p) {
                    if (p?.total)
                        if (t.vip) {
                            let m = {
                                "gpt-3.5": {
                                    total: p.total,
                                    remain: p.remain,
                                    extraTotal: p.extra_total,
                                    extraRemain: p.extra_quota,
                                    period: p.remain_period
                                }
                            };
                            se(m)
                        } else {
                            let m = {
                                summary: {
                                    remain: p.remain
                                }
                            };
                            se(m)
                        }
                }
                let r = ee(e, 1e3, {
                        leading: !0
                    }),
                    n = {
                        app_name: q,
                        app_version: ue,
                        tz_name: he,
                        content: t.text,
                        title: t.title,
                        language: t.lang,
                        source: t.source,
                        source_type: t.sourceType,
                        request_id: te(),
                        cid: ""
                    },
                    o = [];
                t.getAbortMethod(() => {
                    for (let p of o) p()
                });
                let {
                    content: a,
                    cid: i,
                    ...s
                } = n, c = null;
                try {
                    c = await G("/v1/completion/summarize_init", s, {
                        getAbortMethod(p) {
                            o.push(p)
                        }
                    })
                } catch {}
                c && (n.cid = c.cid || "");
                let u = G("/v1/completion/summarize_all", n, {
                        onStreamData({
                            data: p,
                            done: m
                        }) {
                            !m && p && r(p), t.onStreamData({
                                text: p?.text || "",
                                done: m
                            })
                        },
                        getAbortMethod(p) {
                            o.push(p)
                        }
                    }),
                    f = G("/v1/completion/summarize", n, {
                        getAbortMethod(p) {
                            o.push(p)
                        }
                    }),
                    [l, d] = await Promise.all([u, f]);
                return e(d), {
                    text: d.text,
                    subtitle: d.subtitle
                }
            },
            statUserStop(t, e) {
                return G("/v1/completion/mark-user-stop", {
                    app_name: q,
                    app_version: ue,
                    cid: t,
                    mid: e
                })
            }
        };
    async function cs() {
        let t;
        try {
            t = await ge(`/v1/completion/limit?app_name=${q}&app_version=${ue}&tz_name=${he}`)
        } catch (s) {
            throw se({
                isVIP: !1
            }), s
        }
        if (!t.chat.count) throw B({
            ERR_MUST_LOGIN: !0
        }), new Error("wrong_data");
        let e = t.user_type,
            r = ["device", "login", "premium"],
            n = t.chat_period_info,
            o = t.gpt_4_chat_period_info,
            a = t.search_period_info,
            i = {
                isVIP: t.user_type === "premium",
                "gpt-3.5": {
                    total: t.chat.count,
                    remain: t.chat.remain,
                    extraTotal: t.chat.extra_total,
                    extraRemain: t.chat.extra_quota,
                    period: t.chat.period,
                    maxToken: n[e]?.prompt_max_token,
                    award: r.reduce((s, c) => (s[c] = {
                        count: n[c].count
                    }, s), {})
                },
                "gpt-4": {
                    total: t.gpt_4_chat.count,
                    remain: t.gpt_4_chat.remain,
                    extraTotal: t.gpt_4_chat.extra_total,
                    extraRemain: t.gpt_4_chat.extra_quota,
                    period: t.gpt_4_chat.period,
                    maxToken: o[e]?.prompt_max_token,
                    award: r.reduce((s, c) => (s[c] = {
                        count: o[c].count
                    }, s), {})
                },
                search: {
                    total: t.search.count,
                    remain: t.search.remain,
                    extraTotal: t.search.extra_total,
                    extraRemain: t.search.extra_quota,
                    period: t.search.period,
                    award: r.reduce((s, c) => (s[c] = {
                        count: a[c].count
                    }, s), {})
                },
                summary: {
                    total: t.summarize.count,
                    remain: t.summarize.remain,
                    cost: t.summarize.deduct_count,
                    period: t.summarize.period
                },
                "image-creator": {
                    total: t.image.count,
                    remain: t.image.remain,
                    extraTotal: t.image.extra_total,
                    extraRemain: t.image.extra_quota,
                    period: t.image.period
                }
            };
        return se(i), i
    }
    async function Kn(t, e = null, r = {}) {
        t.startsWith("http") || (t = Ge($.api, t));
        let {
            onStreamData: n,
            getAbortMethod: o,
            ...a
        } = r;
        if (!a.signal) {
            let u = new AbortController;
            a.signal = u.signal, o?.(() => {
                u.abort()
            })
        }
        a.headers ||= {};
        let i = "";
        if ("Authorization" in a.headers || (i = (await tt()).token), a.headers = Object.assign({
                "Content-Type": "application/json",
                Authorization: i
            }, a.headers), e) try {
            e instanceof FormData || e instanceof Blob || e instanceof URLSearchParams || e instanceof ReadableStream || e instanceof ArrayBuffer || e instanceof DataView ? a.body = e : a.body = JSON.stringify(e)
        } catch {
            a.body = e
        }
        let s = await fetch(t, a),
            c = null;
        if (n || (c = await s.json().catch(() => ({}))), _t("ERR_MUST_LOGIN"), !s.ok || c && c.code !== 0) {
            if (c || (c = await s.json().catch(() => ({}))), c.errMsg = c.msg || c.message, Qe(c)) c.errMsg = `${s.status} ${s.statusText}`;
            else {
                (c.code === 1003 || c.code === 1006) && B({
                    ERR_MUST_LOGIN: !0
                });
                try {
                    Xt(c.code, c.msg || c.message)
                } catch (u) {
                    c.errMsg = u.message
                }
            }
            throw n && n({
                data: null,
                done: !0
            }), c
        }
        if (n && s.body) {
            let u = xt(f => {
                if (f.type === "event") {
                    let l = {
                            code: 0,
                            data: null,
                            msg: "",
                            errMsg: "",
                            done: f.data === "[DONE]"
                        },
                        d = null;
                    try {
                        d = JSON.parse(f.data)
                    } catch {}
                    if (d && (l = {
                            ...l,
                            ...d
                        }), l.code !== 0) {
                        try {
                            Xt(l.code, l.msg)
                        } catch (p) {
                            l.errMsg = p.message
                        }
                        throw n({
                            data: null,
                            done: !0
                        }), l
                    }
                    n({
                        data: l.data,
                        done: l.done
                    })
                }
            });
            for await (let f of wt(s.body)) {
                let l = new TextDecoder().decode(f);
                u.feed(l)
            }
        }
        return c?.data
    }

    function ge(t, e = null, r = {}) {
        return Kn(t, e, {
            method: "GET",
            ...r
        })
    }

    function G(t, e = null, r = {}) {
        return Kn(t, e, {
            method: "POST",
            ...r
        })
    }

    function Cg(t, e = null, r = {}) {
        return Kn(t, e, {
            method: "DELETE",
            ...r
        })
    }

    function Rg(t) {
        return yt(t) && Object.hasOwn(t, "code") && Object.hasOwn(t, "data") && Object.hasOwn(t, "msg") && typeof t.code == "number"
    }
    async function Ot(t, e, r = {}, n = {}) {
        let o = new AbortController,
            {
                signal: a
            } = o,
            i = new URL(`${$.api}${t}`),
            s = r.body ?? e,
            c = new Headers(r.headers),
            u = (r.method ?? "GET").toUpperCase(),
            f = u === "GET" || u === "HEAD";
        c.has("Content-Type") || c.set("Content-Type", "application/json");
        let {
            noAuth: l = !1,
            timeout: d,
            noAppInfo: p = !1
        } = n;
        if (!l && !c.has("Authorization")) {
            let h;
            try {
                h = (await tt()).token
            } catch (S) {
                throw S instanceof Error ? S : Rg(S) && S.msg ? new Error(S.msg, {
                    cause: S
                }) : new Error("Failed to get token")
            }
            c.set("Authorization", h)
        }
        if (r.signal && r.signal.addEventListener("abort", () => o.abort()), s instanceof FormData && c.delete("Content-Type"), !p)
            if (f) {
                let h = i.searchParams;
                h.has("app_name") || h.append("app_name", q), h.has("tz_name") || h.append("tz_name", he), h.has("app_version") || h.append("app_version", ue)
            } else s instanceof FormData ? (s.has("app_name") || s.append("app_name", q), s.has("tz_name") || s.append("tz_name", he), s.has("app_version") || s.append("app_version", ue)) : yt(s) && (Object.hasOwn(s, "app_name") || (s.app_name = q), Object.hasOwn(s, "tz_name") || (s.tz_name = he), Object.hasOwn(s, "app_version") || (s.app_version = ue));
        let m = Object.assign({}, r, {
                signal: a,
                headers: c,
                method: u,
                body: f ? void 0 : c.get("Content-Type") === "application/json" ? JSON.stringify(s) : s
            }),
            v;
        d && (v = setTimeout(() => o.abort(), d));
        let b = await fetch(i, m);
        clearTimeout(v);
        let g = await b.json().catch(() => {});
        if (!b.ok) throw g && g.msg ? new Error(`${b.status}: ${g.msg}`, {
            cause: g
        }) : new Error(`${b.status}: ${b.statusText}`);
        if (!g) throw new Error("Response body is not json");
        if (g.code !== 0) throw (g.code === 1003 || g.code === 1006) && B({
            ERR_MUST_LOGIN: !0
        }), new Error(g.msg, {
            cause: g
        });
        return _t("ERR_MUST_LOGIN"), g.data
    }
    async function us() {
        Mn({
            url: await $n("/login")
        })
    }
    async function ls() {
        Mn({
            url: await $n("/invite")
        })
    }

    function z(t) {
        "@babel/helpers - typeof";
        return z = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
            return typeof e
        } : function(e) {
            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, z(t)
    }

    function le(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function Vn(t, e) {
        if (z(t) !== "object" || t === null) return t;
        var r = t[Symbol.toPrimitive];
        if (r !== void 0) {
            var n = r.call(t, e || "default");
            if (z(n) !== "object") return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return (e === "string" ? String : Number)(t)
    }

    function Zt(t) {
        var e = Vn(t, "string");
        return z(e) === "symbol" ? e : String(e)
    }

    function fs(t, e) {
        for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, Zt(n.key), n)
        }
    }

    function fe(t, e, r) {
        return e && fs(t.prototype, e), r && fs(t, r), Object.defineProperty(t, "prototype", {
            writable: !1
        }), t
    }

    function ye(t) {
        if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function er(t, e) {
        return er = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
            return n.__proto__ = o, n
        }, er(t, e)
    }

    function Et(t, e) {
        if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }), Object.defineProperty(t, "prototype", {
            writable: !1
        }), e && er(t, e)
    }

    function rt(t, e) {
        if (e && (z(e) === "object" || typeof e == "function")) return e;
        if (e !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
        return ye(t)
    }

    function pe(t) {
        return pe = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
            return r.__proto__ || Object.getPrototypeOf(r)
        }, pe(t)
    }

    function xe(t, e, r) {
        return e = Zt(e), e in t ? Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = r, t
    }

    function Wn(t) {
        if (Array.isArray(t)) return t
    }

    function Hn(t) {
        if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t)
    }

    function jr(t, e) {
        (e == null || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n
    }

    function zn(t, e) {
        if (t) {
            if (typeof t == "string") return jr(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set") return Array.from(t);
            if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return jr(t, e)
        }
    }

    function Jn() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
    }

    function Yn(t) {
        return Wn(t) || Hn(t) || zn(t) || Jn()
    }

    function ps(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter(function(o) {
                return Object.getOwnPropertyDescriptor(t, o).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function ds(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e] != null ? arguments[e] : {};
            e % 2 ? ps(Object(r), !0).forEach(function(n) {
                xe(t, n, r[n])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : ps(Object(r)).forEach(function(n) {
                Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n))
            })
        }
        return t
    }
    var Ig = {
            type: "logger",
            log: function(e) {
                this.output("log", e)
            },
            warn: function(e) {
                this.output("warn", e)
            },
            error: function(e) {
                this.output("error", e)
            },
            output: function(e, r) {
                console && console[e]
            }
        },
        Lg = function() {
            function t(e) {
                var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                le(this, t), this.init(e, r)
            }
            return fe(t, [{
                key: "init",
                value: function(r) {
                    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                    this.prefix = n.prefix || "i18next:", this.logger = r || Ig, this.options = n, this.debug = n.debug
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
                value: function(r, n, o, a) {
                    return a && !this.debug ? null : (typeof r[0] == "string" && (r[0] = "".concat(o).concat(this.prefix, " ").concat(r[0])), this.logger[n](r))
                }
            }, {
                key: "create",
                value: function(r) {
                    return new t(this.logger, ds(ds({}, {
                        prefix: "".concat(this.prefix, ":").concat(r, ":")
                    }), this.options))
                }
            }, {
                key: "clone",
                value: function(r) {
                    return r = r || this.options, r.prefix = r.prefix || this.prefix, new t(this.logger, r)
                }
            }]), t
        }(),
        _e = new Lg,
        qe = function() {
            function t() {
                le(this, t), this.observers = {}
            }
            return fe(t, [{
                key: "on",
                value: function(r, n) {
                    var o = this;
                    return r.split(" ").forEach(function(a) {
                        o.observers[a] = o.observers[a] || [], o.observers[a].push(n)
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
                    for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) o[a - 1] = arguments[a];
                    if (this.observers[r]) {
                        var i = [].concat(this.observers[r]);
                        i.forEach(function(c) {
                            c.apply(void 0, o)
                        })
                    }
                    if (this.observers["*"]) {
                        var s = [].concat(this.observers["*"]);
                        s.forEach(function(c) {
                            c.apply(c, [r].concat(o))
                        })
                    }
                }
            }]), t
        }();

    function tr() {
        var t, e, r = new Promise(function(n, o) {
            t = n, e = o
        });
        return r.resolve = t, r.reject = e, r
    }

    function ms(t) {
        return t == null ? "" : "" + t
    }

    function Mg(t, e, r) {
        t.forEach(function(n) {
            e[n] && (r[n] = e[n])
        })
    }

    function Xn(t, e, r) {
        function n(s) {
            return s && s.indexOf("###") > -1 ? s.replace(/###/g, ".") : s
        }

        function o() {
            return !t || typeof t == "string"
        }
        for (var a = typeof e != "string" ? [].concat(e) : e.split("."); a.length > 1;) {
            if (o()) return {};
            var i = n(a.shift());
            !t[i] && r && (t[i] = new r), Object.prototype.hasOwnProperty.call(t, i) ? t = t[i] : t = {}
        }
        return o() ? {} : {
            obj: t,
            k: n(a.shift())
        }
    }

    function gs(t, e, r) {
        var n = Xn(t, e, Object),
            o = n.obj,
            a = n.k;
        o[a] = r
    }

    function jg(t, e, r, n) {
        var o = Xn(t, e, Object),
            a = o.obj,
            i = o.k;
        a[i] = a[i] || [], n && (a[i] = a[i].concat(r)), n || a[i].push(r)
    }

    function Fr(t, e) {
        var r = Xn(t, e),
            n = r.obj,
            o = r.k;
        if (n) return n[o]
    }

    function Ng(t, e, r) {
        var n = Fr(t, r);
        return n !== void 0 ? n : Fr(e, r)
    }

    function Cs(t, e, r) {
        for (var n in e) n !== "__proto__" && n !== "constructor" && (n in t ? typeof t[n] == "string" || t[n] instanceof String || typeof e[n] == "string" || e[n] instanceof String ? r && (t[n] = e[n]) : Cs(t[n], e[n], r) : t[n] = e[n]);
        return t
    }

    function kt(t) {
        return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
    }
    var Dg = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "/": "&#x2F;"
    };

    function Fg(t) {
        return typeof t == "string" ? t.replace(/[&<>"'\/]/g, function(e) {
            return Dg[e]
        }) : t
    }
    var qr = typeof window < "u" && window.navigator && typeof window.navigator.userAgentData > "u" && window.navigator.userAgent && window.navigator.userAgent.indexOf("MSIE") > -1,
        Ug = [" ", ",", "?", "!", ";"];

    function Gg(t, e, r) {
        e = e || "", r = r || "";
        var n = Ug.filter(function(s) {
            return e.indexOf(s) < 0 && r.indexOf(s) < 0
        });
        if (n.length === 0) return !0;
        var o = new RegExp("(".concat(n.map(function(s) {
                return s === "?" ? "\\?" : s
            }).join("|"), ")")),
            a = !o.test(t);
        if (!a) {
            var i = t.indexOf(r);
            i > 0 && !o.test(t.substring(0, i)) && (a = !0)
        }
        return a
    }

    function Ur(t, e) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
        if (t) {
            if (t[e]) return t[e];
            for (var n = e.split(r), o = t, a = 0; a < n.length; ++a) {
                if (!o || typeof o[n[a]] == "string" && a + 1 < n.length) return;
                if (o[n[a]] === void 0) {
                    for (var i = 2, s = n.slice(a, a + i).join(r), c = o[s]; c === void 0 && n.length > a + i;) i++, s = n.slice(a, a + i).join(r), c = o[s];
                    if (c === void 0) return;
                    if (c === null) return null;
                    if (e.endsWith(s)) {
                        if (typeof c == "string") return c;
                        if (s && typeof c[s] == "string") return c[s]
                    }
                    var u = n.slice(a + i).join(r);
                    return u ? Ur(c, u, r) : void 0
                }
                o = o[n[a]]
            }
            return o
        }
    }

    function hs(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter(function(o) {
                return Object.getOwnPropertyDescriptor(t, o).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function Nr(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e] != null ? arguments[e] : {};
            e % 2 ? hs(Object(r), !0).forEach(function(n) {
                xe(t, n, r[n])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : hs(Object(r)).forEach(function(n) {
                Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n))
            })
        }
        return t
    }

    function qg(t) {
        var e = Bg();
        return function() {
            var n = pe(t),
                o;
            if (e) {
                var a = pe(this).constructor;
                o = Reflect.construct(n, arguments, a)
            } else o = n.apply(this, arguments);
            return rt(this, o)
        }
    }

    function Bg() {
        if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
        if (typeof Proxy == "function") return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
        } catch {
            return !1
        }
    }
    var $g = function(t) {
            Et(r, t);
            var e = qg(r);

            function r(n) {
                var o, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                    ns: ["translation"],
                    defaultNS: "translation"
                };
                return le(this, r), o = e.call(this), qr && qe.call(ye(o)), o.data = n || {}, o.options = a, o.options.keySeparator === void 0 && (o.options.keySeparator = "."), o.options.ignoreJSONStructure === void 0 && (o.options.ignoreJSONStructure = !0), o
            }
            return fe(r, [{
                key: "addNamespaces",
                value: function(o) {
                    this.options.ns.indexOf(o) < 0 && this.options.ns.push(o)
                }
            }, {
                key: "removeNamespaces",
                value: function(o) {
                    var a = this.options.ns.indexOf(o);
                    a > -1 && this.options.ns.splice(a, 1)
                }
            }, {
                key: "getResource",
                value: function(o, a, i) {
                    var s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
                        c = s.keySeparator !== void 0 ? s.keySeparator : this.options.keySeparator,
                        u = s.ignoreJSONStructure !== void 0 ? s.ignoreJSONStructure : this.options.ignoreJSONStructure,
                        f = [o, a];
                    i && typeof i != "string" && (f = f.concat(i)), i && typeof i == "string" && (f = f.concat(c ? i.split(c) : i)), o.indexOf(".") > -1 && (f = o.split("."));
                    var l = Fr(this.data, f);
                    return l || !u || typeof i != "string" ? l : Ur(this.data && this.data[o] && this.data[o][a], i, c)
                }
            }, {
                key: "addResource",
                value: function(o, a, i, s) {
                    var c = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
                            silent: !1
                        },
                        u = c.keySeparator !== void 0 ? c.keySeparator : this.options.keySeparator,
                        f = [o, a];
                    i && (f = f.concat(u ? i.split(u) : i)), o.indexOf(".") > -1 && (f = o.split("."), s = a, a = f[1]), this.addNamespaces(a), gs(this.data, f, s), c.silent || this.emit("added", o, a, i, s)
                }
            }, {
                key: "addResources",
                value: function(o, a, i) {
                    var s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
                        silent: !1
                    };
                    for (var c in i)(typeof i[c] == "string" || Object.prototype.toString.apply(i[c]) === "[object Array]") && this.addResource(o, a, c, i[c], {
                        silent: !0
                    });
                    s.silent || this.emit("added", o, a, i)
                }
            }, {
                key: "addResourceBundle",
                value: function(o, a, i, s, c) {
                    var u = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
                            silent: !1
                        },
                        f = [o, a];
                    o.indexOf(".") > -1 && (f = o.split("."), s = i, i = a, a = f[1]), this.addNamespaces(a);
                    var l = Fr(this.data, f) || {};
                    s ? Cs(l, i, c) : l = Nr(Nr({}, l), i), gs(this.data, f, l), u.silent || this.emit("added", o, a, i)
                }
            }, {
                key: "removeResourceBundle",
                value: function(o, a) {
                    this.hasResourceBundle(o, a) && delete this.data[o][a], this.removeNamespaces(a), this.emit("removed", o, a)
                }
            }, {
                key: "hasResourceBundle",
                value: function(o, a) {
                    return this.getResource(o, a) !== void 0
                }
            }, {
                key: "getResourceBundle",
                value: function(o, a) {
                    return a || (a = this.options.defaultNS), this.options.compatibilityAPI === "v1" ? Nr(Nr({}, {}), this.getResource(o, a)) : this.getResource(o, a)
                }
            }, {
                key: "getDataByLanguage",
                value: function(o) {
                    return this.data[o]
                }
            }, {
                key: "hasLanguageSomeTranslations",
                value: function(o) {
                    var a = this.getDataByLanguage(o),
                        i = a && Object.keys(a) || [];
                    return !!i.find(function(s) {
                        return a[s] && Object.keys(a[s]).length > 0
                    })
                }
            }, {
                key: "toJSON",
                value: function() {
                    return this.data
                }
            }]), r
        }(qe),
        Rs = {
            processors: {},
            addPostProcessor: function(e) {
                this.processors[e.name] = e
            },
            handle: function(e, r, n, o, a) {
                var i = this;
                return e.forEach(function(s) {
                    i.processors[s] && (r = i.processors[s].process(r, n, o, a))
                }), r
            }
        };

    function ys(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter(function(o) {
                return Object.getOwnPropertyDescriptor(t, o).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function Y(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e] != null ? arguments[e] : {};
            e % 2 ? ys(Object(r), !0).forEach(function(n) {
                xe(t, n, r[n])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : ys(Object(r)).forEach(function(n) {
                Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n))
            })
        }
        return t
    }

    function Kg(t) {
        var e = Vg();
        return function() {
            var n = pe(t),
                o;
            if (e) {
                var a = pe(this).constructor;
                o = Reflect.construct(n, arguments, a)
            } else o = n.apply(this, arguments);
            return rt(this, o)
        }
    }

    function Vg() {
        if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
        if (typeof Proxy == "function") return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
        } catch {
            return !1
        }
    }
    var vs = {},
        bs = function(t) {
            Et(r, t);
            var e = Kg(r);

            function r(n) {
                var o, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                return le(this, r), o = e.call(this), qr && qe.call(ye(o)), Mg(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], n, ye(o)), o.options = a, o.options.keySeparator === void 0 && (o.options.keySeparator = "."), o.logger = _e.create("translator"), o
            }
            return fe(r, [{
                key: "changeLanguage",
                value: function(o) {
                    o && (this.language = o)
                }
            }, {
                key: "exists",
                value: function(o) {
                    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                        interpolation: {}
                    };
                    if (o == null) return !1;
                    var i = this.resolve(o, a);
                    return i && i.res !== void 0
                }
            }, {
                key: "extractFromKey",
                value: function(o, a) {
                    var i = a.nsSeparator !== void 0 ? a.nsSeparator : this.options.nsSeparator;
                    i === void 0 && (i = ":");
                    var s = a.keySeparator !== void 0 ? a.keySeparator : this.options.keySeparator,
                        c = a.ns || this.options.defaultNS || [],
                        u = i && o.indexOf(i) > -1,
                        f = !this.options.userDefinedKeySeparator && !a.keySeparator && !this.options.userDefinedNsSeparator && !a.nsSeparator && !Gg(o, i, s);
                    if (u && !f) {
                        var l = o.match(this.interpolator.nestingRegexp);
                        if (l && l.length > 0) return {
                            key: o,
                            namespaces: c
                        };
                        var d = o.split(i);
                        (i !== s || i === s && this.options.ns.indexOf(d[0]) > -1) && (c = d.shift()), o = d.join(s)
                    }
                    return typeof c == "string" && (c = [c]), {
                        key: o,
                        namespaces: c
                    }
                }
            }, {
                key: "translate",
                value: function(o, a, i) {
                    var s = this;
                    if (z(a) !== "object" && this.options.overloadTranslationOptionHandler && (a = this.options.overloadTranslationOptionHandler(arguments)), z(a) === "object" && (a = Y({}, a)), a || (a = {}), o == null) return "";
                    Array.isArray(o) || (o = [String(o)]);
                    var c = a.returnDetails !== void 0 ? a.returnDetails : this.options.returnDetails,
                        u = a.keySeparator !== void 0 ? a.keySeparator : this.options.keySeparator,
                        f = this.extractFromKey(o[o.length - 1], a),
                        l = f.key,
                        d = f.namespaces,
                        p = d[d.length - 1],
                        m = a.lng || this.language,
                        v = a.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
                    if (m && m.toLowerCase() === "cimode") {
                        if (v) {
                            var b = a.nsSeparator || this.options.nsSeparator;
                            return c ? {
                                res: "".concat(p).concat(b).concat(l),
                                usedKey: l,
                                exactUsedKey: l,
                                usedLng: m,
                                usedNS: p
                            } : "".concat(p).concat(b).concat(l)
                        }
                        return c ? {
                            res: l,
                            usedKey: l,
                            exactUsedKey: l,
                            usedLng: m,
                            usedNS: p
                        } : l
                    }
                    var g = this.resolve(o, a),
                        h = g && g.res,
                        S = g && g.usedKey || l,
                        y = g && g.exactUsedKey || l,
                        x = Object.prototype.toString.apply(h),
                        w = ["[object Number]", "[object Function]", "[object RegExp]"],
                        A = a.joinArrays !== void 0 ? a.joinArrays : this.options.joinArrays,
                        k = !this.i18nFormat || this.i18nFormat.handleAsObject,
                        L = typeof h != "string" && typeof h != "boolean" && typeof h != "number";
                    if (k && h && L && w.indexOf(x) < 0 && !(typeof A == "string" && x === "[object Array]")) {
                        if (!a.returnObjects && !this.options.returnObjects) {
                            this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
                            var F = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(S, h, Y(Y({}, a), {}, {
                                ns: d
                            })) : "key '".concat(l, " (").concat(this.language, ")' returned an object instead of string.");
                            return c ? (g.res = F, g) : F
                        }
                        if (u) {
                            var O = x === "[object Array]",
                                V = O ? [] : {},
                                j = O ? y : S;
                            for (var ae in h)
                                if (Object.prototype.hasOwnProperty.call(h, ae)) {
                                    var Re = "".concat(j).concat(u).concat(ae);
                                    V[ae] = this.translate(Re, Y(Y({}, a), {
                                        joinArrays: !1,
                                        ns: d
                                    })), V[ae] === Re && (V[ae] = h[ae])
                                } h = V
                        }
                    } else if (k && typeof A == "string" && x === "[object Array]") h = h.join(A), h && (h = this.extendTranslation(h, o, a, i));
                    else {
                        var re = !1,
                            Pe = !1,
                            ia = a.count !== void 0 && typeof a.count != "string",
                            bn = r.hasDefaultValue(a),
                            pf = ia ? this.pluralResolver.getSuffix(m, a.count, a) : "",
                            Bt = a["defaultValue".concat(pf)] || a.defaultValue;
                        !this.isValidLookup(h) && bn && (re = !0, h = Bt), this.isValidLookup(h) || (Pe = !0, h = l);
                        var df = a.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey,
                            mf = df && Pe ? void 0 : h,
                            $t = bn && Bt !== h && this.options.updateMissing;
                        if (Pe || re || $t) {
                            if (this.logger.log($t ? "updateKey" : "missingKey", m, p, l, $t ? Bt : h), u) {
                                var sa = this.resolve(l, Y(Y({}, a), {}, {
                                    keySeparator: !1
                                }));
                                sa && sa.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")
                            }
                            var Kt = [],
                                mr = this.languageUtils.getFallbackCodes(this.options.fallbackLng, a.lng || this.language);
                            if (this.options.saveMissingTo === "fallback" && mr && mr[0])
                                for (var xn = 0; xn < mr.length; xn++) Kt.push(mr[xn]);
                            else this.options.saveMissingTo === "all" ? Kt = this.languageUtils.toResolveHierarchy(a.lng || this.language) : Kt.push(a.lng || this.language);
                            var ca = function(st, _n, _) {
                                var ua = bn && _ !== h ? _ : mf;
                                s.options.missingKeyHandler ? s.options.missingKeyHandler(st, p, _n, ua, $t, a) : s.backendConnector && s.backendConnector.saveMissing && s.backendConnector.saveMissing(st, p, _n, ua, $t, a), s.emit("missingKey", st, p, _n, h)
                            };
                            this.options.saveMissing && (this.options.saveMissingPlurals && ia ? Kt.forEach(function(wn) {
                                s.pluralResolver.getSuffixes(wn, a).forEach(function(st) {
                                    ca([wn], l + st, a["defaultValue".concat(st)] || Bt)
                                })
                            }) : ca(Kt, l, Bt))
                        }
                        h = this.extendTranslation(h, o, a, g, i), Pe && h === l && this.options.appendNamespaceToMissingKey && (h = "".concat(p, ":").concat(l)), (Pe || re) && this.options.parseMissingKeyHandler && (this.options.compatibilityAPI !== "v1" ? h = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? "".concat(p, ":").concat(l) : l, re ? h : void 0) : h = this.options.parseMissingKeyHandler(h))
                    }
                    return c ? (g.res = h, g) : h
                }
            }, {
                key: "extendTranslation",
                value: function(o, a, i, s, c) {
                    var u = this;
                    if (this.i18nFormat && this.i18nFormat.parse) o = this.i18nFormat.parse(o, Y(Y({}, this.options.interpolation.defaultVariables), i), s.usedLng, s.usedNS, s.usedKey, {
                        resolved: s
                    });
                    else if (!i.skipInterpolation) {
                        i.interpolation && this.interpolator.init(Y(Y({}, i), {
                            interpolation: Y(Y({}, this.options.interpolation), i.interpolation)
                        }));
                        var f = typeof o == "string" && (i && i.interpolation && i.interpolation.skipOnVariables !== void 0 ? i.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables),
                            l;
                        if (f) {
                            var d = o.match(this.interpolator.nestingRegexp);
                            l = d && d.length
                        }
                        var p = i.replace && typeof i.replace != "string" ? i.replace : i;
                        if (this.options.interpolation.defaultVariables && (p = Y(Y({}, this.options.interpolation.defaultVariables), p)), o = this.interpolator.interpolate(o, p, i.lng || this.language, i), f) {
                            var m = o.match(this.interpolator.nestingRegexp),
                                v = m && m.length;
                            l < v && (i.nest = !1)
                        }!i.lng && this.options.compatibilityAPI !== "v1" && s && s.res && (i.lng = s.usedLng), i.nest !== !1 && (o = this.interpolator.nest(o, function() {
                            for (var h = arguments.length, S = new Array(h), y = 0; y < h; y++) S[y] = arguments[y];
                            return c && c[0] === S[0] && !i.context ? (u.logger.warn("It seems you are nesting recursively key: ".concat(S[0], " in key: ").concat(a[0])), null) : u.translate.apply(u, S.concat([a]))
                        }, i)), i.interpolation && this.interpolator.reset()
                    }
                    var b = i.postProcess || this.options.postProcess,
                        g = typeof b == "string" ? [b] : b;
                    return o != null && g && g.length && i.applyPostProcessor !== !1 && (o = Rs.handle(g, o, a, this.options && this.options.postProcessPassResolved ? Y({
                        i18nResolved: s
                    }, i) : i, this)), o
                }
            }, {
                key: "resolve",
                value: function(o) {
                    var a = this,
                        i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                        s, c, u, f, l;
                    return typeof o == "string" && (o = [o]), o.forEach(function(d) {
                        if (!a.isValidLookup(s)) {
                            var p = a.extractFromKey(d, i),
                                m = p.key;
                            c = m;
                            var v = p.namespaces;
                            a.options.fallbackNS && (v = v.concat(a.options.fallbackNS));
                            var b = i.count !== void 0 && typeof i.count != "string",
                                g = b && !i.ordinal && i.count === 0 && a.pluralResolver.shouldUseIntlApi(),
                                h = i.context !== void 0 && (typeof i.context == "string" || typeof i.context == "number") && i.context !== "",
                                S = i.lngs ? i.lngs : a.languageUtils.toResolveHierarchy(i.lng || a.language, i.fallbackLng);
                            v.forEach(function(y) {
                                a.isValidLookup(s) || (l = y, !vs["".concat(S[0], "-").concat(y)] && a.utils && a.utils.hasLoadedNamespace && !a.utils.hasLoadedNamespace(l) && (vs["".concat(S[0], "-").concat(y)] = !0, a.logger.warn('key "'.concat(c, '" for languages "').concat(S.join(", "), `" won't get resolved as namespace "`).concat(l, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), S.forEach(function(x) {
                                    if (!a.isValidLookup(s)) {
                                        f = x;
                                        var w = [m];
                                        if (a.i18nFormat && a.i18nFormat.addLookupKeys) a.i18nFormat.addLookupKeys(w, m, x, y, i);
                                        else {
                                            var A;
                                            b && (A = a.pluralResolver.getSuffix(x, i.count, i));
                                            var k = "".concat(a.options.pluralSeparator, "zero");
                                            if (b && (w.push(m + A), g && w.push(m + k)), h) {
                                                var L = "".concat(m).concat(a.options.contextSeparator).concat(i.context);
                                                w.push(L), b && (w.push(L + A), g && w.push(L + k))
                                            }
                                        }
                                        for (var F; F = w.pop();) a.isValidLookup(s) || (u = F, s = a.getResource(x, y, F, i))
                                    }
                                }))
                            })
                        }
                    }), {
                        res: s,
                        usedKey: c,
                        exactUsedKey: u,
                        usedLng: f,
                        usedNS: l
                    }
                }
            }, {
                key: "isValidLookup",
                value: function(o) {
                    return o !== void 0 && !(!this.options.returnNull && o === null) && !(!this.options.returnEmptyString && o === "")
                }
            }, {
                key: "getResource",
                value: function(o, a, i) {
                    var s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
                    return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(o, a, i, s) : this.resourceStore.getResource(o, a, i, s)
                }
            }], [{
                key: "hasDefaultValue",
                value: function(o) {
                    var a = "defaultValue";
                    for (var i in o)
                        if (Object.prototype.hasOwnProperty.call(o, i) && a === i.substring(0, a.length) && o[i] !== void 0) return !0;
                    return !1
                }
            }]), r
        }(qe);

    function Qn(t) {
        return t.charAt(0).toUpperCase() + t.slice(1)
    }
    var xs = function() {
            function t(e) {
                le(this, t), this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = _e.create("languageUtils")
            }
            return fe(t, [{
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
                        return this.options.lowerCaseLng ? o = o.map(function(a) {
                            return a.toLowerCase()
                        }) : o.length === 2 ? (o[0] = o[0].toLowerCase(), o[1] = o[1].toUpperCase(), n.indexOf(o[1].toLowerCase()) > -1 && (o[1] = Qn(o[1].toLowerCase()))) : o.length === 3 && (o[0] = o[0].toLowerCase(), o[1].length === 2 && (o[1] = o[1].toUpperCase()), o[0] !== "sgn" && o[2].length === 2 && (o[2] = o[2].toUpperCase()), n.indexOf(o[1].toLowerCase()) > -1 && (o[1] = Qn(o[1].toLowerCase())), n.indexOf(o[2].toLowerCase()) > -1 && (o[2] = Qn(o[2].toLowerCase()))), o.join("-")
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
                    return r.forEach(function(a) {
                        if (!o) {
                            var i = n.formatLanguageCode(a);
                            (!n.options.supportedLngs || n.isSupportedCode(i)) && (o = i)
                        }
                    }), !o && this.options.supportedLngs && r.forEach(function(a) {
                        if (!o) {
                            var i = n.getLanguagePartFromCode(a);
                            if (n.isSupportedCode(i)) return o = i;
                            o = n.options.supportedLngs.find(function(s) {
                                if (s === i) return s;
                                if (!(s.indexOf("-") < 0 && i.indexOf("-") < 0) && s.indexOf(i) === 0) return s
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
                        a = this.getFallbackCodes(n || this.options.fallbackLng || [], r),
                        i = [],
                        s = function(u) {
                            u && (o.isSupportedCode(u) ? i.push(u) : o.logger.warn("rejecting language code not found in supportedLngs: ".concat(u)))
                        };
                    return typeof r == "string" && r.indexOf("-") > -1 ? (this.options.load !== "languageOnly" && s(this.formatLanguageCode(r)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && s(this.getScriptPartFromCode(r)), this.options.load !== "currentOnly" && s(this.getLanguagePartFromCode(r))) : typeof r == "string" && s(this.formatLanguageCode(r)), a.forEach(function(c) {
                        i.indexOf(c) < 0 && s(o.formatLanguageCode(c))
                    }), i
                }
            }]), t
        }(),
        Wg = [{
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
        Hg = {
            1: function(e) {
                return +(e > 1)
            },
            2: function(e) {
                return +(e != 1)
            },
            3: function(e) {
                return 0
            },
            4: function(e) {
                return e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2
            },
            5: function(e) {
                return e == 0 ? 0 : e == 1 ? 1 : e == 2 ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
            },
            6: function(e) {
                return e == 1 ? 0 : e >= 2 && e <= 4 ? 1 : 2
            },
            7: function(e) {
                return e == 1 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2
            },
            8: function(e) {
                return e == 1 ? 0 : e == 2 ? 1 : e != 8 && e != 11 ? 2 : 3
            },
            9: function(e) {
                return +(e >= 2)
            },
            10: function(e) {
                return e == 1 ? 0 : e == 2 ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4
            },
            11: function(e) {
                return e == 1 || e == 11 ? 0 : e == 2 || e == 12 ? 1 : e > 2 && e < 20 ? 2 : 3
            },
            12: function(e) {
                return +(e % 10 != 1 || e % 100 == 11)
            },
            13: function(e) {
                return +(e !== 0)
            },
            14: function(e) {
                return e == 1 ? 0 : e == 2 ? 1 : e == 3 ? 2 : 3
            },
            15: function(e) {
                return e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2
            },
            16: function(e) {
                return e % 10 == 1 && e % 100 != 11 ? 0 : e !== 0 ? 1 : 2
            },
            17: function(e) {
                return e == 1 || e % 10 == 1 && e % 100 != 11 ? 0 : 1
            },
            18: function(e) {
                return e == 0 ? 0 : e == 1 ? 1 : 2
            },
            19: function(e) {
                return e == 1 ? 0 : e == 0 || e % 100 > 1 && e % 100 < 11 ? 1 : e % 100 > 10 && e % 100 < 20 ? 2 : 3
            },
            20: function(e) {
                return e == 1 ? 0 : e == 0 || e % 100 > 0 && e % 100 < 20 ? 1 : 2
            },
            21: function(e) {
                return e % 100 == 1 ? 1 : e % 100 == 2 ? 2 : e % 100 == 3 || e % 100 == 4 ? 3 : 0
            },
            22: function(e) {
                return e == 1 ? 0 : e == 2 ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3
            }
        },
        zg = ["v1", "v2", "v3"],
        ws = {
            zero: 0,
            one: 1,
            two: 2,
            few: 3,
            many: 4,
            other: 5
        };

    function Jg() {
        var t = {};
        return Wg.forEach(function(e) {
            e.lngs.forEach(function(r) {
                t[r] = {
                    numbers: e.nr,
                    plurals: Hg[e.fc]
                }
            })
        }), t
    }
    var Yg = function() {
        function t(e) {
            var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            le(this, t), this.languageUtils = e, this.options = r, this.logger = _e.create("pluralResolver"), (!this.options.compatibilityJSON || this.options.compatibilityJSON === "v4") && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = Jg()
        }
        return fe(t, [{
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
                return this.getSuffixes(r, o).map(function(a) {
                    return "".concat(n).concat(a)
                })
            }
        }, {
            key: "getSuffixes",
            value: function(r) {
                var n = this,
                    o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                    a = this.getRule(r, o);
                return a ? this.shouldUseIntlApi() ? a.resolvedOptions().pluralCategories.sort(function(i, s) {
                    return ws[i] - ws[s]
                }).map(function(i) {
                    return "".concat(n.options.prepend).concat(i)
                }) : a.numbers.map(function(i) {
                    return n.getSuffix(r, i, o)
                }) : []
            }
        }, {
            key: "getSuffix",
            value: function(r, n) {
                var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
                    a = this.getRule(r, o);
                return a ? this.shouldUseIntlApi() ? "".concat(this.options.prepend).concat(a.select(n)) : this.getSuffixRetroCompatible(a, n) : (this.logger.warn("no plural rule found for: ".concat(r)), "")
            }
        }, {
            key: "getSuffixRetroCompatible",
            value: function(r, n) {
                var o = this,
                    a = r.noAbs ? r.plurals(n) : r.plurals(Math.abs(n)),
                    i = r.numbers[a];
                this.options.simplifyPluralSuffix && r.numbers.length === 2 && r.numbers[0] === 1 && (i === 2 ? i = "plural" : i === 1 && (i = ""));
                var s = function() {
                    return o.options.prepend && i.toString() ? o.options.prepend + i.toString() : i.toString()
                };
                return this.options.compatibilityJSON === "v1" ? i === 1 ? "" : typeof i == "number" ? "_plural_".concat(i.toString()) : s() : this.options.compatibilityJSON === "v2" || this.options.simplifyPluralSuffix && r.numbers.length === 2 && r.numbers[0] === 1 ? s() : this.options.prepend && a.toString() ? this.options.prepend + a.toString() : a.toString()
            }
        }, {
            key: "shouldUseIntlApi",
            value: function() {
                return !zg.includes(this.options.compatibilityJSON)
            }
        }]), t
    }();

    function _s(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter(function(o) {
                return Object.getOwnPropertyDescriptor(t, o).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function ve(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e] != null ? arguments[e] : {};
            e % 2 ? _s(Object(r), !0).forEach(function(n) {
                xe(t, n, r[n])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : _s(Object(r)).forEach(function(n) {
                Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n))
            })
        }
        return t
    }

    function Ts(t, e, r) {
        var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".",
            o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0,
            a = Ng(t, e, r);
        return !a && o && typeof r == "string" && (a = Ur(t, r, n), a === void 0 && (a = Ur(e, r, n))), a
    }
    var Qg = function() {
        function t() {
            var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            le(this, t), this.logger = _e.create("interpolator"), this.options = e, this.format = e.interpolation && e.interpolation.format || function(r) {
                return r
            }, this.init(e)
        }
        return fe(t, [{
            key: "init",
            value: function() {
                var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                r.interpolation || (r.interpolation = {
                    escapeValue: !0
                });
                var n = r.interpolation;
                this.escape = n.escape !== void 0 ? n.escape : Fg, this.escapeValue = n.escapeValue !== void 0 ? n.escapeValue : !0, this.useRawValueToEscape = n.useRawValueToEscape !== void 0 ? n.useRawValueToEscape : !1, this.prefix = n.prefix ? kt(n.prefix) : n.prefixEscaped || "{{", this.suffix = n.suffix ? kt(n.suffix) : n.suffixEscaped || "}}", this.formatSeparator = n.formatSeparator ? n.formatSeparator : n.formatSeparator || ",", this.unescapePrefix = n.unescapeSuffix ? "" : n.unescapePrefix || "-", this.unescapeSuffix = this.unescapePrefix ? "" : n.unescapeSuffix || "", this.nestingPrefix = n.nestingPrefix ? kt(n.nestingPrefix) : n.nestingPrefixEscaped || kt("$t("), this.nestingSuffix = n.nestingSuffix ? kt(n.nestingSuffix) : n.nestingSuffixEscaped || kt(")"), this.nestingOptionsSeparator = n.nestingOptionsSeparator ? n.nestingOptionsSeparator : n.nestingOptionsSeparator || ",", this.maxReplaces = n.maxReplaces ? n.maxReplaces : 1e3, this.alwaysFormat = n.alwaysFormat !== void 0 ? n.alwaysFormat : !1, this.resetRegExp()
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
            value: function(r, n, o, a) {
                var i = this,
                    s, c, u, f = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};

                function l(b) {
                    return b.replace(/\$/g, "$$$$")
                }
                var d = function(g) {
                    if (g.indexOf(i.formatSeparator) < 0) {
                        var h = Ts(n, f, g, i.options.keySeparator, i.options.ignoreJSONStructure);
                        return i.alwaysFormat ? i.format(h, void 0, o, ve(ve(ve({}, a), n), {}, {
                            interpolationkey: g
                        })) : h
                    }
                    var S = g.split(i.formatSeparator),
                        y = S.shift().trim(),
                        x = S.join(i.formatSeparator).trim();
                    return i.format(Ts(n, f, y, i.options.keySeparator, i.options.ignoreJSONStructure), x, o, ve(ve(ve({}, a), n), {}, {
                        interpolationkey: y
                    }))
                };
                this.resetRegExp();
                var p = a && a.missingInterpolationHandler || this.options.missingInterpolationHandler,
                    m = a && a.interpolation && a.interpolation.skipOnVariables !== void 0 ? a.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables,
                    v = [{
                        regex: this.regexpUnescape,
                        safeValue: function(g) {
                            return l(g)
                        }
                    }, {
                        regex: this.regexp,
                        safeValue: function(g) {
                            return i.escapeValue ? l(i.escape(g)) : l(g)
                        }
                    }];
                return v.forEach(function(b) {
                    for (u = 0; s = b.regex.exec(r);) {
                        var g = s[1].trim();
                        if (c = d(g), c === void 0)
                            if (typeof p == "function") {
                                var h = p(r, s, a);
                                c = typeof h == "string" ? h : ""
                            } else if (a && Object.prototype.hasOwnProperty.call(a, g)) c = "";
                        else if (m) {
                            c = s[0];
                            continue
                        } else i.logger.warn("missed to pass in variable ".concat(g, " for interpolating ").concat(r)), c = "";
                        else typeof c != "string" && !i.useRawValueToEscape && (c = ms(c));
                        var S = b.safeValue(c);
                        if (r = r.replace(s[0], S), m ? (b.regex.lastIndex += c.length, b.regex.lastIndex -= s[0].length) : b.regex.lastIndex = 0, u++, u >= i.maxReplaces) break
                    }
                }), r
            }
        }, {
            key: "nest",
            value: function(r, n) {
                var o = this,
                    a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
                    i, s, c;

                function u(p, m) {
                    var v = this.nestingOptionsSeparator;
                    if (p.indexOf(v) < 0) return p;
                    var b = p.split(new RegExp("".concat(v, "[ ]*{"))),
                        g = "{".concat(b[1]);
                    p = b[0], g = this.interpolate(g, c);
                    var h = g.match(/'/g),
                        S = g.match(/"/g);
                    (h && h.length % 2 === 0 && !S || S.length % 2 !== 0) && (g = g.replace(/'/g, '"'));
                    try {
                        c = JSON.parse(g), m && (c = ve(ve({}, m), c))
                    } catch (y) {
                        return this.logger.warn("failed parsing options string in nesting for key ".concat(p), y), "".concat(p).concat(v).concat(g)
                    }
                    return delete c.defaultValue, p
                }
                for (; i = this.nestingRegexp.exec(r);) {
                    var f = [];
                    c = ve({}, a), c = c.replace && typeof c.replace != "string" ? c.replace : c, c.applyPostProcessor = !1, delete c.defaultValue;
                    var l = !1;
                    if (i[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(i[1])) {
                        var d = i[1].split(this.formatSeparator).map(function(p) {
                            return p.trim()
                        });
                        i[1] = d.shift(), f = d, l = !0
                    }
                    if (s = n(u.call(this, i[1].trim(), c), c), s && i[0] === r && typeof s != "string") return s;
                    typeof s != "string" && (s = ms(s)), s || (this.logger.warn("missed to resolve ".concat(i[1], " for nesting ").concat(r)), s = ""), l && (s = f.reduce(function(p, m) {
                        return o.format(p, m, a.lng, ve(ve({}, a), {}, {
                            interpolationkey: i[1].trim()
                        }))
                    }, s.trim())), r = r.replace(i[0], s), this.regexp.lastIndex = 0
                }
                return r
            }
        }]), t
    }();

    function As(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter(function(o) {
                return Object.getOwnPropertyDescriptor(t, o).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function Ce(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e] != null ? arguments[e] : {};
            e % 2 ? As(Object(r), !0).forEach(function(n) {
                xe(t, n, r[n])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : As(Object(r)).forEach(function(n) {
                Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n))
            })
        }
        return t
    }

    function Xg(t) {
        var e = t.toLowerCase().trim(),
            r = {};
        if (t.indexOf("(") > -1) {
            var n = t.split("(");
            e = n[0].toLowerCase().trim();
            var o = n[1].substring(0, n[1].length - 1);
            if (e === "currency" && o.indexOf(":") < 0) r.currency || (r.currency = o.trim());
            else if (e === "relativetime" && o.indexOf(":") < 0) r.range || (r.range = o.trim());
            else {
                var a = o.split(";");
                a.forEach(function(i) {
                    if (i) {
                        var s = i.split(":"),
                            c = Yn(s),
                            u = c[0],
                            f = c.slice(1),
                            l = f.join(":").trim().replace(/^'+|'+$/g, "");
                        r[u.trim()] || (r[u.trim()] = l), l === "false" && (r[u.trim()] = !1), l === "true" && (r[u.trim()] = !0), isNaN(l) || (r[u.trim()] = parseInt(l, 10))
                    }
                })
            }
        }
        return {
            formatName: e,
            formatOptions: r
        }
    }

    function Ct(t) {
        var e = {};
        return function(n, o, a) {
            var i = o + JSON.stringify(a),
                s = e[i];
            return s || (s = t(o, a), e[i] = s), s(n)
        }
    }
    var Zg = function() {
        function t() {
            var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            le(this, t), this.logger = _e.create("formatter"), this.options = e, this.formats = {
                number: Ct(function(r, n) {
                    var o = new Intl.NumberFormat(r, Ce({}, n));
                    return function(a) {
                        return o.format(a)
                    }
                }),
                currency: Ct(function(r, n) {
                    var o = new Intl.NumberFormat(r, Ce(Ce({}, n), {}, {
                        style: "currency"
                    }));
                    return function(a) {
                        return o.format(a)
                    }
                }),
                datetime: Ct(function(r, n) {
                    var o = new Intl.DateTimeFormat(r, Ce({}, n));
                    return function(a) {
                        return o.format(a)
                    }
                }),
                relativetime: Ct(function(r, n) {
                    var o = new Intl.RelativeTimeFormat(r, Ce({}, n));
                    return function(a) {
                        return o.format(a, n.range || "day")
                    }
                }),
                list: Ct(function(r, n) {
                    var o = new Intl.ListFormat(r, Ce({}, n));
                    return function(a) {
                        return o.format(a)
                    }
                })
            }, this.init(e)
        }
        return fe(t, [{
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
                this.formats[r.toLowerCase().trim()] = Ct(n)
            }
        }, {
            key: "format",
            value: function(r, n, o) {
                var a = this,
                    i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
                    s = n.split(this.formatSeparator),
                    c = s.reduce(function(u, f) {
                        var l = Xg(f),
                            d = l.formatName,
                            p = l.formatOptions;
                        if (a.formats[d]) {
                            var m = u;
                            try {
                                var v = i && i.formatParams && i.formatParams[i.interpolationkey] || {},
                                    b = v.locale || v.lng || i.locale || i.lng || o;
                                m = a.formats[d](u, b, Ce(Ce(Ce({}, p), i), v))
                            } catch (g) {
                                a.logger.warn(g)
                            }
                            return m
                        } else a.logger.warn("there was no format function for ".concat(d));
                        return u
                    }, r);
                return c
            }
        }]), t
    }();

    function Ss(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter(function(o) {
                return Object.getOwnPropertyDescriptor(t, o).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function Ps(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e] != null ? arguments[e] : {};
            e % 2 ? Ss(Object(r), !0).forEach(function(n) {
                xe(t, n, r[n])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Ss(Object(r)).forEach(function(n) {
                Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n))
            })
        }
        return t
    }

    function eh(t) {
        var e = th();
        return function() {
            var n = pe(t),
                o;
            if (e) {
                var a = pe(this).constructor;
                o = Reflect.construct(n, arguments, a)
            } else o = n.apply(this, arguments);
            return rt(this, o)
        }
    }

    function th() {
        if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
        if (typeof Proxy == "function") return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
        } catch {
            return !1
        }
    }

    function rh(t, e) {
        t.pending[e] !== void 0 && (delete t.pending[e], t.pendingCount--)
    }
    var nh = function(t) {
        Et(r, t);
        var e = eh(r);

        function r(n, o, a) {
            var i, s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
            return le(this, r), i = e.call(this), qr && qe.call(ye(i)), i.backend = n, i.store = o, i.services = a, i.languageUtils = a.languageUtils, i.options = s, i.logger = _e.create("backendConnector"), i.waitingReads = [], i.maxParallelReads = s.maxParallelReads || 10, i.readingCalls = 0, i.maxRetries = s.maxRetries >= 0 ? s.maxRetries : 5, i.retryTimeout = s.retryTimeout >= 1 ? s.retryTimeout : 350, i.state = {}, i.queue = [], i.backend && i.backend.init && i.backend.init(a, s.backend, s), i
        }
        return fe(r, [{
            key: "queueLoad",
            value: function(o, a, i, s) {
                var c = this,
                    u = {},
                    f = {},
                    l = {},
                    d = {};
                return o.forEach(function(p) {
                    var m = !0;
                    a.forEach(function(v) {
                        var b = "".concat(p, "|").concat(v);
                        !i.reload && c.store.hasResourceBundle(p, v) ? c.state[b] = 2 : c.state[b] < 0 || (c.state[b] === 1 ? f[b] === void 0 && (f[b] = !0) : (c.state[b] = 1, m = !1, f[b] === void 0 && (f[b] = !0), u[b] === void 0 && (u[b] = !0), d[v] === void 0 && (d[v] = !0)))
                    }), m || (l[p] = !0)
                }), (Object.keys(u).length || Object.keys(f).length) && this.queue.push({
                    pending: f,
                    pendingCount: Object.keys(f).length,
                    loaded: {},
                    errors: [],
                    callback: s
                }), {
                    toLoad: Object.keys(u),
                    pending: Object.keys(f),
                    toLoadLanguages: Object.keys(l),
                    toLoadNamespaces: Object.keys(d)
                }
            }
        }, {
            key: "loaded",
            value: function(o, a, i) {
                var s = o.split("|"),
                    c = s[0],
                    u = s[1];
                a && this.emit("failedLoading", c, u, a), i && this.store.addResourceBundle(c, u, i), this.state[o] = a ? -1 : 2;
                var f = {};
                this.queue.forEach(function(l) {
                    jg(l.loaded, [c], u), rh(l, o), a && l.errors.push(a), l.pendingCount === 0 && !l.done && (Object.keys(l.loaded).forEach(function(d) {
                        f[d] || (f[d] = {});
                        var p = l.loaded[d];
                        p.length && p.forEach(function(m) {
                            f[d][m] === void 0 && (f[d][m] = !0)
                        })
                    }), l.done = !0, l.errors.length ? l.callback(l.errors) : l.callback())
                }), this.emit("loaded", f), this.queue = this.queue.filter(function(l) {
                    return !l.done
                })
            }
        }, {
            key: "read",
            value: function(o, a, i) {
                var s = this,
                    c = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0,
                    u = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout,
                    f = arguments.length > 5 ? arguments[5] : void 0;
                if (!o.length) return f(null, {});
                if (this.readingCalls >= this.maxParallelReads) {
                    this.waitingReads.push({
                        lng: o,
                        ns: a,
                        fcName: i,
                        tried: c,
                        wait: u,
                        callback: f
                    });
                    return
                }
                this.readingCalls++;
                var l = function(v, b) {
                        if (s.readingCalls--, s.waitingReads.length > 0) {
                            var g = s.waitingReads.shift();
                            s.read(g.lng, g.ns, g.fcName, g.tried, g.wait, g.callback)
                        }
                        if (v && b && c < s.maxRetries) {
                            setTimeout(function() {
                                s.read.call(s, o, a, i, c + 1, u * 2, f)
                            }, u);
                            return
                        }
                        f(v, b)
                    },
                    d = this.backend[i].bind(this.backend);
                if (d.length === 2) {
                    try {
                        var p = d(o, a);
                        p && typeof p.then == "function" ? p.then(function(m) {
                            return l(null, m)
                        }).catch(l) : l(null, p)
                    } catch (m) {
                        l(m)
                    }
                    return
                }
                return d(o, a, l)
            }
        }, {
            key: "prepareLoading",
            value: function(o, a) {
                var i = this,
                    s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
                    c = arguments.length > 3 ? arguments[3] : void 0;
                if (!this.backend) return this.logger.warn("No backend was added via i18next.use. Will not load resources."), c && c();
                typeof o == "string" && (o = this.languageUtils.toResolveHierarchy(o)), typeof a == "string" && (a = [a]);
                var u = this.queueLoad(o, a, s, c);
                if (!u.toLoad.length) return u.pending.length || c(), null;
                u.toLoad.forEach(function(f) {
                    i.loadOne(f)
                })
            }
        }, {
            key: "load",
            value: function(o, a, i) {
                this.prepareLoading(o, a, {}, i)
            }
        }, {
            key: "reload",
            value: function(o, a, i) {
                this.prepareLoading(o, a, {
                    reload: !0
                }, i)
            }
        }, {
            key: "loadOne",
            value: function(o) {
                var a = this,
                    i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "",
                    s = o.split("|"),
                    c = s[0],
                    u = s[1];
                this.read(c, u, "read", void 0, void 0, function(f, l) {
                    f && a.logger.warn("".concat(i, "loading namespace ").concat(u, " for language ").concat(c, " failed"), f), !f && l && a.logger.log("".concat(i, "loaded namespace ").concat(u, " for language ").concat(c), l), a.loaded(o, f, l)
                })
            }
        }, {
            key: "saveMissing",
            value: function(o, a, i, s, c) {
                var u = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {},
                    f = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : function() {};
                if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(a)) {
                    this.logger.warn('did not save key "'.concat(i, '" as the namespace "').concat(a, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
                    return
                }
                if (!(i == null || i === "")) {
                    if (this.backend && this.backend.create) {
                        var l = Ps(Ps({}, u), {}, {
                                isUpdate: c
                            }),
                            d = this.backend.create.bind(this.backend);
                        if (d.length < 6) try {
                            var p;
                            d.length === 5 ? p = d(o, a, i, s, l) : p = d(o, a, i, s), p && typeof p.then == "function" ? p.then(function(m) {
                                return f(null, m)
                            }).catch(f) : f(null, p)
                        } catch (m) {
                            f(m)
                        } else d(o, a, i, s, f, l)
                    }!o || !o[0] || this.store.addResource(o[0], a, i, s)
                }
            }
        }]), r
    }(qe);

    function Os() {
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
            overloadTranslationOptionHandler: function(e) {
                var r = {};
                if (z(e[1]) === "object" && (r = e[1]), typeof e[1] == "string" && (r.defaultValue = e[1]), typeof e[2] == "string" && (r.tDescription = e[2]), z(e[2]) === "object" || z(e[3]) === "object") {
                    var n = e[3] || e[2];
                    Object.keys(n).forEach(function(o) {
                        r[o] = n[o]
                    })
                }
                return r
            },
            interpolation: {
                escapeValue: !0,
                format: function(e, r, n, o) {
                    return e
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

    function Es(t) {
        return typeof t.ns == "string" && (t.ns = [t.ns]), typeof t.fallbackLng == "string" && (t.fallbackLng = [t.fallbackLng]), typeof t.fallbackNS == "string" && (t.fallbackNS = [t.fallbackNS]), t.supportedLngs && t.supportedLngs.indexOf("cimode") < 0 && (t.supportedLngs = t.supportedLngs.concat(["cimode"])), t
    }

    function ks(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter(function(o) {
                return Object.getOwnPropertyDescriptor(t, o).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function we(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e] != null ? arguments[e] : {};
            e % 2 ? ks(Object(r), !0).forEach(function(n) {
                xe(t, n, r[n])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : ks(Object(r)).forEach(function(n) {
                Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n))
            })
        }
        return t
    }

    function oh(t) {
        var e = ah();
        return function() {
            var n = pe(t),
                o;
            if (e) {
                var a = pe(this).constructor;
                o = Reflect.construct(n, arguments, a)
            } else o = n.apply(this, arguments);
            return rt(this, o)
        }
    }

    function ah() {
        if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
        if (typeof Proxy == "function") return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
        } catch {
            return !1
        }
    }

    function Dr() {}

    function ih(t) {
        var e = Object.getOwnPropertyNames(Object.getPrototypeOf(t));
        e.forEach(function(r) {
            typeof t[r] == "function" && (t[r] = t[r].bind(t))
        })
    }
    var Gr = function(t) {
        Et(r, t);
        var e = oh(r);

        function r() {
            var n, o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
                a = arguments.length > 1 ? arguments[1] : void 0;
            if (le(this, r), n = e.call(this), qr && qe.call(ye(n)), n.options = Es(o), n.services = {}, n.logger = _e, n.modules = {
                    external: []
                }, ih(ye(n)), a && !n.isInitialized && !o.isClone) {
                if (!n.options.initImmediate) return n.init(o, a), rt(n, ye(n));
                setTimeout(function() {
                    n.init(o, a)
                }, 0)
            }
            return n
        }
        return fe(r, [{
            key: "init",
            value: function() {
                var o = this,
                    a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
                    i = arguments.length > 1 ? arguments[1] : void 0;
                typeof a == "function" && (i = a, a = {}), !a.defaultNS && a.defaultNS !== !1 && a.ns && (typeof a.ns == "string" ? a.defaultNS = a.ns : a.ns.indexOf("translation") < 0 && (a.defaultNS = a.ns[0]));
                var s = Os();
                this.options = we(we(we({}, s), this.options), Es(a)), this.options.compatibilityAPI !== "v1" && (this.options.interpolation = we(we({}, s.interpolation), this.options.interpolation)), a.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = a.keySeparator), a.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = a.nsSeparator);

                function c(g) {
                    return g ? typeof g == "function" ? new g : g : null
                }
                if (!this.options.isClone) {
                    this.modules.logger ? _e.init(c(this.modules.logger), this.options) : _e.init(null, this.options);
                    var u;
                    this.modules.formatter ? u = this.modules.formatter : typeof Intl < "u" && (u = Zg);
                    var f = new xs(this.options);
                    this.store = new $g(this.options.resources, this.options);
                    var l = this.services;
                    l.logger = _e, l.resourceStore = this.store, l.languageUtils = f, l.pluralResolver = new Yg(f, {
                        prepend: this.options.pluralSeparator,
                        compatibilityJSON: this.options.compatibilityJSON,
                        simplifyPluralSuffix: this.options.simplifyPluralSuffix
                    }), u && (!this.options.interpolation.format || this.options.interpolation.format === s.interpolation.format) && (l.formatter = c(u), l.formatter.init(l, this.options), this.options.interpolation.format = l.formatter.format.bind(l.formatter)), l.interpolator = new Qg(this.options), l.utils = {
                        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
                    }, l.backendConnector = new nh(c(this.modules.backend), l.resourceStore, l, this.options), l.backendConnector.on("*", function(g) {
                        for (var h = arguments.length, S = new Array(h > 1 ? h - 1 : 0), y = 1; y < h; y++) S[y - 1] = arguments[y];
                        o.emit.apply(o, [g].concat(S))
                    }), this.modules.languageDetector && (l.languageDetector = c(this.modules.languageDetector), l.languageDetector.init && l.languageDetector.init(l, this.options.detection, this.options)), this.modules.i18nFormat && (l.i18nFormat = c(this.modules.i18nFormat), l.i18nFormat.init && l.i18nFormat.init(this)), this.translator = new bs(this.services, this.options), this.translator.on("*", function(g) {
                        for (var h = arguments.length, S = new Array(h > 1 ? h - 1 : 0), y = 1; y < h; y++) S[y - 1] = arguments[y];
                        o.emit.apply(o, [g].concat(S))
                    }), this.modules.external.forEach(function(g) {
                        g.init && g.init(o)
                    })
                }
                if (this.format = this.options.interpolation.format, i || (i = Dr), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
                    var d = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
                    d.length > 0 && d[0] !== "dev" && (this.options.lng = d[0])
                }!this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined");
                var p = ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"];
                p.forEach(function(g) {
                    o[g] = function() {
                        var h;
                        return (h = o.store)[g].apply(h, arguments)
                    }
                });
                var m = ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"];
                m.forEach(function(g) {
                    o[g] = function() {
                        var h;
                        return (h = o.store)[g].apply(h, arguments), o
                    }
                });
                var v = tr(),
                    b = function() {
                        var h = function(y, x) {
                            o.isInitialized && !o.initializedStoreOnce && o.logger.warn("init: i18next is already initialized. You should call init just once!"), o.isInitialized = !0, o.options.isClone || o.logger.log("initialized", o.options), o.emit("initialized", o.options), v.resolve(x), i(y, x)
                        };
                        if (o.languages && o.options.compatibilityAPI !== "v1" && !o.isInitialized) return h(null, o.t.bind(o));
                        o.changeLanguage(o.options.lng, h)
                    };
                return this.options.resources || !this.options.initImmediate ? b() : setTimeout(b, 0), v
            }
        }, {
            key: "loadResources",
            value: function(o) {
                var a = this,
                    i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Dr,
                    s = i,
                    c = typeof o == "string" ? o : this.language;
                if (typeof o == "function" && (s = o), !this.options.resources || this.options.partialBundledLanguages) {
                    if (c && c.toLowerCase() === "cimode") return s();
                    var u = [],
                        f = function(p) {
                            if (p) {
                                var m = a.services.languageUtils.toResolveHierarchy(p);
                                m.forEach(function(v) {
                                    u.indexOf(v) < 0 && u.push(v)
                                })
                            }
                        };
                    if (c) f(c);
                    else {
                        var l = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
                        l.forEach(function(d) {
                            return f(d)
                        })
                    }
                    this.options.preload && this.options.preload.forEach(function(d) {
                        return f(d)
                    }), this.services.backendConnector.load(u, this.options.ns, function(d) {
                        !d && !a.resolvedLanguage && a.language && a.setResolvedLanguage(a.language), s(d)
                    })
                } else s(null)
            }
        }, {
            key: "reloadResources",
            value: function(o, a, i) {
                var s = tr();
                return o || (o = this.languages), a || (a = this.options.ns), i || (i = Dr), this.services.backendConnector.reload(o, a, function(c) {
                    s.resolve(), i(c)
                }), s
            }
        }, {
            key: "use",
            value: function(o) {
                if (!o) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
                if (!o.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
                return o.type === "backend" && (this.modules.backend = o), (o.type === "logger" || o.log && o.warn && o.error) && (this.modules.logger = o), o.type === "languageDetector" && (this.modules.languageDetector = o), o.type === "i18nFormat" && (this.modules.i18nFormat = o), o.type === "postProcessor" && Rs.addPostProcessor(o), o.type === "formatter" && (this.modules.formatter = o), o.type === "3rdParty" && this.modules.external.push(o), this
            }
        }, {
            key: "setResolvedLanguage",
            value: function(o) {
                if (!(!o || !this.languages) && !(["cimode", "dev"].indexOf(o) > -1))
                    for (var a = 0; a < this.languages.length; a++) {
                        var i = this.languages[a];
                        if (!(["cimode", "dev"].indexOf(i) > -1) && this.store.hasLanguageSomeTranslations(i)) {
                            this.resolvedLanguage = i;
                            break
                        }
                    }
            }
        }, {
            key: "changeLanguage",
            value: function(o, a) {
                var i = this;
                this.isLanguageChangingTo = o;
                var s = tr();
                this.emit("languageChanging", o);
                var c = function(d) {
                        i.language = d, i.languages = i.services.languageUtils.toResolveHierarchy(d), i.resolvedLanguage = void 0, i.setResolvedLanguage(d)
                    },
                    u = function(d, p) {
                        p ? (c(p), i.translator.changeLanguage(p), i.isLanguageChangingTo = void 0, i.emit("languageChanged", p), i.logger.log("languageChanged", p)) : i.isLanguageChangingTo = void 0, s.resolve(function() {
                            return i.t.apply(i, arguments)
                        }), a && a(d, function() {
                            return i.t.apply(i, arguments)
                        })
                    },
                    f = function(d) {
                        !o && !d && i.services.languageDetector && (d = []);
                        var p = typeof d == "string" ? d : i.services.languageUtils.getBestMatchFromCodes(d);
                        p && (i.language || c(p), i.translator.language || i.translator.changeLanguage(p), i.services.languageDetector && i.services.languageDetector.cacheUserLanguage && i.services.languageDetector.cacheUserLanguage(p)), i.loadResources(p, function(m) {
                            u(m, p)
                        })
                    };
                return !o && this.services.languageDetector && !this.services.languageDetector.async ? f(this.services.languageDetector.detect()) : !o && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(f) : this.services.languageDetector.detect(f) : f(o), s
            }
        }, {
            key: "getFixedT",
            value: function(o, a, i) {
                var s = this,
                    c = function u(f, l) {
                        var d;
                        if (z(l) !== "object") {
                            for (var p = arguments.length, m = new Array(p > 2 ? p - 2 : 0), v = 2; v < p; v++) m[v - 2] = arguments[v];
                            d = s.options.overloadTranslationOptionHandler([f, l].concat(m))
                        } else d = we({}, l);
                        d.lng = d.lng || u.lng, d.lngs = d.lngs || u.lngs, d.ns = d.ns || u.ns, d.keyPrefix = d.keyPrefix || i || u.keyPrefix;
                        var b = s.options.keySeparator || ".",
                            g;
                        return d.keyPrefix && Array.isArray(f) ? g = f.map(function(h) {
                            return "".concat(d.keyPrefix).concat(b).concat(h)
                        }) : g = d.keyPrefix ? "".concat(d.keyPrefix).concat(b).concat(f) : f, s.t(g, d)
                    };
                return typeof o == "string" ? c.lng = o : c.lngs = o, c.ns = a, c.keyPrefix = i, c
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
                var a = this,
                    i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                if (!this.isInitialized) return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
                if (!this.languages || !this.languages.length) return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
                var s = i.lng || this.resolvedLanguage || this.languages[0],
                    c = this.options ? this.options.fallbackLng : !1,
                    u = this.languages[this.languages.length - 1];
                if (s.toLowerCase() === "cimode") return !0;
                var f = function(p, m) {
                    var v = a.services.backendConnector.state["".concat(p, "|").concat(m)];
                    return v === -1 || v === 2
                };
                if (i.precheck) {
                    var l = i.precheck(this, f);
                    if (l !== void 0) return l
                }
                return !!(this.hasResourceBundle(s, o) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || f(s, o) && (!c || f(u, o)))
            }
        }, {
            key: "loadNamespaces",
            value: function(o, a) {
                var i = this,
                    s = tr();
                return this.options.ns ? (typeof o == "string" && (o = [o]), o.forEach(function(c) {
                    i.options.ns.indexOf(c) < 0 && i.options.ns.push(c)
                }), this.loadResources(function(c) {
                    s.resolve(), a && a(c)
                }), s) : (a && a(), Promise.resolve())
            }
        }, {
            key: "loadLanguages",
            value: function(o, a) {
                var i = tr();
                typeof o == "string" && (o = [o]);
                var s = this.options.preload || [],
                    c = o.filter(function(u) {
                        return s.indexOf(u) < 0
                    });
                return c.length ? (this.options.preload = s.concat(c), this.loadResources(function(u) {
                    i.resolve(), a && a(u)
                }), i) : (a && a(), Promise.resolve())
            }
        }, {
            key: "dir",
            value: function(o) {
                if (o || (o = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), !o) return "rtl";
                var a = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"],
                    i = this.services && this.services.languageUtils || new xs(Os());
                return a.indexOf(i.getLanguagePartFromCode(o)) > -1 || o.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr"
            }
        }, {
            key: "cloneInstance",
            value: function() {
                var o = this,
                    a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
                    i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Dr,
                    s = we(we(we({}, this.options), a), {
                        isClone: !0
                    }),
                    c = new r(s);
                (a.debug !== void 0 || a.prefix !== void 0) && (c.logger = c.logger.clone(a));
                var u = ["store", "services", "language"];
                return u.forEach(function(f) {
                    c[f] = o[f]
                }), c.services = we({}, this.services), c.services.utils = {
                    hasLoadedNamespace: c.hasLoadedNamespace.bind(c)
                }, c.translator = new bs(c.services, c.options), c.translator.on("*", function(f) {
                    for (var l = arguments.length, d = new Array(l > 1 ? l - 1 : 0), p = 1; p < l; p++) d[p - 1] = arguments[p];
                    c.emit.apply(c, [f].concat(d))
                }), c.init(s, i), c.translator.options = c.options, c.translator.backendConnector.services.utils = {
                    hasLoadedNamespace: c.hasLoadedNamespace.bind(c)
                }, c
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
    }(qe);
    xe(Gr, "createInstance", function() {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
            e = arguments.length > 1 ? arguments[1] : void 0;
        return new Gr(t, e)
    });
    var Q = Gr.createInstance();
    Q.createInstance = Gr.createInstance;
    var QP = Q.createInstance,
        XP = Q.dir,
        ZP = Q.init,
        eO = Q.loadResources,
        tO = Q.reloadResources,
        rO = Q.use,
        nO = Q.changeLanguage,
        oO = Q.getFixedT,
        aO = Q.t,
        iO = Q.exists,
        sO = Q.setDefaultNamespace,
        cO = Q.hasLoadedNamespace,
        uO = Q.loadNamespaces,
        lO = Q.loadLanguages;
    var Is = N(W());

    function Ls(t) {
        return Is.default.storage.local.get(t)
    }
    var sh = [EvalError, RangeError, ReferenceError, SyntaxError, TypeError, URIError, globalThis.DOMException, globalThis.AssertionError, globalThis.SystemError].filter(Boolean).map(t => [t.name, t]),
        ch = new Map(sh),
        Zn = ch;
    var uh = [{
            property: "name",
            enumerable: !1
        }, {
            property: "message",
            enumerable: !1
        }, {
            property: "stack",
            enumerable: !1
        }, {
            property: "code",
            enumerable: !0
        }, {
            property: "cause",
            enumerable: !1
        }],
        eo = Symbol(".toJSON was called"),
        lh = t => {
            t[eo] = !0;
            let e = t.toJSON();
            return delete t[eo], e
        },
        fh = t => Zn.get(t) ?? Error,
        js = ({
            from: t,
            seen: e,
            to: r,
            forceEnumerable: n,
            maxDepth: o,
            depth: a,
            useToJSON: i,
            serialize: s
        }) => {
            if (!r)
                if (Array.isArray(t)) r = [];
                else if (!s && Ms(t)) {
                let u = fh(t.name);
                r = new u
            } else r = {};
            if (e.push(t), a >= o) return r;
            if (i && typeof t.toJSON == "function" && t[eo] !== !0) return lh(t);
            let c = u => js({
                from: u,
                seen: [...e],
                forceEnumerable: n,
                maxDepth: o,
                depth: a,
                useToJSON: i,
                serialize: s
            });
            for (let [u, f] of Object.entries(t)) {
                if (typeof Buffer == "function" && Buffer.isBuffer(f)) {
                    r[u] = "[object Buffer]";
                    continue
                }
                if (f !== null && typeof f == "object" && typeof f.pipe == "function") {
                    r[u] = "[object Stream]";
                    continue
                }
                if (typeof f != "function") {
                    if (!f || typeof f != "object") {
                        r[u] = f;
                        continue
                    }
                    if (!e.includes(t[u])) {
                        a++, r[u] = c(t[u]);
                        continue
                    }
                    r[u] = "[Circular]"
                }
            }
            for (let {
                    property: u,
                    enumerable: f
                }
                of uh) typeof t[u] < "u" && t[u] !== null && Object.defineProperty(r, u, {
                value: Ms(t[u]) ? c(t[u]) : t[u],
                enumerable: n ? !0 : f,
                configurable: !0,
                writable: !0
            });
            return r
        };

    function Rt(t, e = {}) {
        let {
            maxDepth: r = Number.POSITIVE_INFINITY,
            useToJSON: n = !0
        } = e;
        return typeof t == "object" && t !== null ? js({
            from: t,
            seen: [],
            forceEnumerable: !0,
            maxDepth: r,
            depth: 0,
            useToJSON: n,
            serialize: !0
        }) : typeof t == "function" ? `[Function: ${t.name??"anonymous"}]` : t
    }

    function Ms(t) {
        return !!t && typeof t == "object" && "name" in t && "message" in t && "stack" in t
    }
    var ph = N(W()),
        Br = new Map,
        Ns = (t, e) => {
            let r = t.type,
                n = Br.get(r);
            if (n) return new Promise(o => {
                o(Promise.resolve(n({
                    sender: e,
                    data: t.data,
                    id: r,
                    timestamp: Date.now()
                })).then(a => ({
                    data: a
                })).catch(a => ({
                    error: Rt(a)
                })))
            })
        };

    function It(t, e) {
        if (Br.get(t)) throw new Error(`Message ID "${t}" already has a listener.`);
        return Br.set(t, e), () => Br.delete(t)
    }
    var Te = N(W());
    async function $r({
        prompt: t,
        windowId: e
    }) {
        let n = (await Te.default.tabs.query({
            url: "https://chat.openai.com/chat*",
            windowId: e
        }))[0];
        n || (n = await Te.default.tabs.create({
            active: !0,
            url: "https://chat.openai.com",
            windowId: e
        }), await new Promise(o => {
            let a = (i, s, c) => {
                i == n.id && s.status == "complete" && (o(), Te.default.tabs.onUpdated.removeListener(a))
            };
            Te.default.tabs.onUpdated.addListener(a)
        })), Te.default.tabs.update(n.id, {
            active: !0
        }), Te.default.tabs.sendMessage(n.id, {
            type: "automate-send-prompt",
            prompt: t
        }), await new Promise(o => {
            let a = 0,
                i = (s, c) => {
                    if (c.tab?.id === n.id) switch (s.type) {
                        case "loaded":
                            a += 1, a < 2 && Te.default.tabs.sendMessage(n.id, {
                                type: "automate-send-prompt",
                                prompt: t
                            });
                            return;
                        case "automate-send-prompt-done":
                            Te.default.runtime.onMessage.removeListener(i), o();
                            return
                    }
                };
            Te.default.runtime.onMessage.addListener(i), setTimeout(o, 1e3 * 60)
        })
    }
    var Hs = N(Kr()),
        D = N(W());
    var Bs = N(Kr());
    var $s = N(W());
    var Vr = class {
        constructor() {
            this.results = [];
            this.isBrowsing = !1
        }
        parseMessage(e) {
            let r = e.message,
                n = this.results.findIndex(o => o.id === r?.id);
            return r && (r.author.role === "assistant" ? this.handleAssistantMessage(r, n) : r.author.role === "tool" && (r.author.name === "browser" ? this.handleBrowserMessage(r) : this.handlePluginMessage(r))), this.results
        }
        handleAssistantMessage(e, r) {
            if (e.recipient !== "all")
                if (e.recipient !== "browser")
                    if (r === -1) this.results.push({
                        id: e?.id,
                        type: "plugin",
                        pluginName: e?.recipient,
                        isLoading: !0,
                        info: [{
                            type: "request",
                            text: e?.content?.parts?.[0]
                        }]
                    });
                    else {
                        let n = this.results[r];
                        n.info[0].text = e?.content?.parts?.[0]
                    }
            else if (!this.isBrowsing) this.results.push({
                id: e?.id,
                type: "browsing",
                isLoading: !0,
                actions: [{
                    messageId: "0",
                    command: "startBrowsing"
                }]
            }), this.isBrowsing = !0;
            else {
                let n = this.results[this.results.length - 1],
                    o = n.actions[n.actions.length - 1];
                o.messageId !== e?.id && (o.command === "search" || o.command === "click" || o.command === "quote" && o.status === "finished") && n.actions.push({
                    messageId: "2",
                    command: "think"
                })
            } else if (r === -1) this.handleNewTextMessage(e);
            else {
                let n = this.results[r],
                    o = this.getTextWithCitations(e);
                n.text = o.text, n.searchSnippets = o.searchSnippets
            }
        }
        handleBrowserMessage(e) {
            if (this.isBrowsing) {
                let r = this.results[this.results.length - 1];
                if (r.type === "browsing") {
                    let n = r,
                        o = e.metadata;
                    (n.actions.length === 0 || o.command !== n.actions[n.actions.length - 1].command || n.actions[n.actions.length - 1].messageId !== e?.id) && (o.command !== "quote" || n.actions[n.actions.length - 1].command !== "quote") ? (n.actions[n.actions.length - 1].command === "think" && n.actions.pop(), n.actions.push({
                        messageId: e?.id,
                        command: o.command,
                        status: o.status,
                        args: o.args,
                        _cite_metadata: o.command === "click" ? this.getClickMetadata(o._cite_metadata) : {}
                    })) : (n.actions[n.actions.length - 1].status = o.status, o.command === "click" && (n.actions[n.actions.length - 1]._cite_metadata = this.getClickMetadata(o._cite_metadata)))
                }
            }
        }
        handlePluginMessage(e) {
            let r = this.results[this.results.length - 1];
            r.isLoading = !1, r.info.push({
                type: "response",
                text: e?.content?.parts?.[0]
            })
        }
        handleNewTextMessage(e) {
            if (this.results.length > 0) {
                let r = this.results[this.results.length - 1];
                if (r.type === "browsing") {
                    let n = r;
                    n.isLoading = !1, n.actions.push({
                        messageId: "1",
                        command: "finishBrowsing"
                    }), this.isBrowsing = !1
                }
            }
            this.results.push({
                id: e?.id,
                type: "text",
                text: e?.content?.parts?.[0]
            })
        }
        getClickMetadata(e) {
            return {
                metadata_list: [{
                    url: e?.metadata_list?.[0]?.url,
                    title: e?.metadata_list?.[0]?.title
                }]
            }
        }
        getTextWithCitations(e) {
            let r = e?.content?.parts?.[0],
                n = e?.metadata?.citations,
                o = {};
            if (n && n.length > 0) {
                let a = r,
                    i = n.length;
                return n.sort((s, c) => c.end_ix - s.end_ix).forEach((s, c) => {
                    let u = s.start_ix,
                        f = s.end_ix,
                        l = s.metadata.url;
                    l ? (a = a.slice(0, u) + `[^${i-c}](${l})` + a.slice(f), o[i - c] = {
                        link: l,
                        title: s.metadata.title,
                        snippet: s.metadata.text
                    }) : a = a.slice(0, u) + a.slice(f)
                }), {
                    text: a,
                    searchSnippets: o
                }
            } else return {
                text: r
            }
        }
    };
    async function Be(t, e, r = !1) {
        let {
            onMessage: n,
            ...o
        } = e, i = await (r ? Ae : fetch)(t, o);
        if (!i.ok) {
            let c = await i.json().catch(() => ({}));
            throw new Error(Qe(c) ? `${i.status} ${i.statusText}` : JSON.stringify(c))
        }
        let s = xt(c => {
            c.type === "event" && n(c.data)
        });
        for await (let c of wt(i.body)) {
            let u = new TextDecoder().decode(c);
            s.feed(u)
        }
    }
    var Lt = "ChatGPT Webapp",
        Hr = `${Lt}: error_chatgpt_auth`;
    async function oo(t, e, r, n) {
        let o = {
            method: e,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${t}`
            }
        };
        return n && (o.body = JSON.stringify(n)), Ae(`https://chat.openai.com/backend-api${r}`, o)
    }
    async function Ks(t, e) {
        await oo(t, "POST", "/conversation/message_feedback", e)
    }
    async function hh(t, e, r) {
        await oo(t, "PATCH", `/conversation/${e}`, r)
    }
    async function Vs(t) {
        let e = await be({
            isForce: !0
        });
        return oo(e, "GET", "/models", null).then(r => r.json())
    }
    async function Ws(t) {
        return t || (t = await be()), await (await Ae("https://chat.openai.com/backend-api/aip/p?offset=0&limit=250&is_installed=true", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${t}`
            }
        })).json()
    }
    var ro = "accessToken",
        no = new Bs.default(10 * 1e3);
    async function ao() {
        if (no.get(ro)) return no.get(ro);
        let t = null;
        try {
            t = await fetch(Xe.openaiApiSession)
        } catch (n) {
            throw new Error(`${Lt}: ${n.message}`)
        }
        let e = Hr;
        if (t?.status === 403) throw new Error(e);
        let r = await t?.json().catch(() => ({}));
        if (!r.accessToken) throw new Error(e);
        return no.set(ro, r.accessToken), r.accessToken
    }
    async function yh(t) {
        try {
            return (await $s.default.storage.local.get({
                selectWebAppModel: "gpt-4"
            })).selectWebAppModel
        } catch {
            return null
        }
    }
    var Wr = class {
        constructor(e) {
            this.token = e;
            this.token = e
        }
        async generateAnswer(e) {
            if (!this.token) throw new Error(Hr);
            let r, n = Promise.resolve(),
                o = async () => {
                    await n, r && (await hh(this.token, r, {
                        is_visible: !1
                    }), r = "")
                };
            e.getCleanupMethod?.(o);
            let a = Array.isArray(e.prompt) ? e.prompt.map(f => ({
                    id: te(),
                    author: {
                        role: f.role
                    },
                    content: {
                        content_type: "text",
                        parts: [f.content]
                    }
                })) : [{
                    id: te(),
                    author: {
                        role: "user"
                    },
                    content: {
                        content_type: "text",
                        parts: [e.prompt]
                    }
                }],
                i = () => {
                    i = null, e.onEvent({
                        type: "done"
                    }), o()
                },
                s = [],
                c = new Vr,
                u = await yh(this.token) || "text-davinci-002-render";
            n = Be("https://chat.openai.com/backend-api/conversation", {
                method: "POST",
                signal: e.signal,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${this.token}`
                },
                body: JSON.stringify({
                    action: "next",
                    messages: a,
                    model: u,
                    parent_message_id: te(),
                    plugin_ids: e.pluginIds,
                    timezone_offset_min: new Date().getTimezoneOffset()
                }),
                onMessage(f) {
                    if (f === "[DONE]") {
                        i?.();
                        return
                    } else if (f.startsWith("event: typing")) return;
                    let l;
                    try {
                        l = JSON.parse(f)
                    } catch {
                        return
                    }
                    if (l.message.author.role === "assistant" && l.message?.recipient === "browser" || l.message.author.role === "tool" && l.message.author.name, !l.message?.content?.parts?.[0] && l.message?.author.role !== "assistant" && !l.message?.metadata?.command || l.message?.author.role === "system" || l.message?.author.role === "user" || l.message?.content?.content_type === "text" && l.message?.author.name === null && l.message?.status === "finished_successfully" && !l.message?.end_turn) return;
                    s = c.parseMessage(l);
                    let d = l.message?.content?.parts?.[0];
                    (d || s.length > 0) && (r = l.conversation_id, e.onEvent({
                        type: "answer",
                        data: {
                            message: l.message,
                            contents: s,
                            text: d,
                            messageId: l.message.id,
                            conversationId: ""
                        }
                    }))
                }
            }, !0).catch(f => {
                let l = f.message;
                try {
                    let d = JSON.parse(l);
                    l = d.message || d.msg || d.error?.message || d.detail?.message || d.detail || l
                } catch {}
                throw e.onEvent({
                    type: "error",
                    data: {
                        error: `${Lt}: ${l}`
                    }
                }), new Error(`${Lt}: ${l}`)
            }).finally(() => {
                i?.()
            })
        }
    };
    var $e = 0,
        zr = !1,
        Mt = new Hs.default(1e3 * 60 * 10),
        io = "accessToken",
        zs = "noCacheToken",
        vh = "alwaysProxyFetch";
    D.default.storage.local.get({
        guardChatgptTabId: 0
    }).then(({
        guardChatgptTabId: t
    }) => {
        $e == 0 && ($e = t), zr = t != 0
    });
    async function Js() {
        let t = null;
        try {
            t = await D.default.tabs.get($e), await D.default.tabs.update(t.id, {
                active: !0
            })
        } catch {}
        t || (t = await D.default.tabs.create({
            url: Xe.openaiChat,
            pinned: !0,
            active: !0
        }));
        let e = t.id;
        await D.default.storage.local.set({
            guardChatgptTabId: e
        }), $e = e, zr = !0, await new Promise(r => {
            let n = (o, a) => {
                switch (o.type) {
                    case "loaded":
                        a.tab?.id == e && D.default.tabs.sendMessage(e, {
                            type: "guard-session-activate"
                        });
                        break;
                    case "guard-session-activated":
                        D.default.runtime.onMessage.removeListener(n), r();
                        break
                }
            };
            D.default.runtime.onMessage.addListener(n), setTimeout(() => r(), 1e3 * 40)
        })
    }
    async function bh() {
        let t = await D.default.tabs.create({
            url: Xe.openaiChat,
            pinned: !0,
            active: !1
        });
        return await D.default.storage.local.set({
            guardChatgptTabId: t.id
        }), $e = t.id, zr = !0, t
    }
    async function xh() {
        let t = "https://chat.openai.com/*",
            e = await D.default.tabs.query({
                pinned: !0,
                url: t
            });
        if (e.length > 0) {
            let r = e[0];
            return $e = r.id, await D.default.tabs.reload(r.id), r
        }
        return null
    }
    async function wh() {
        let t = null;
        try {
            t = await D.default.tabs.get($e), /chat\.openai\.com/.test(t.url || "") ? await D.default.tabs.reload(t.id) : t = await D.default.tabs.update(t.id, {
                url: Xe.openaiChat
            })
        } catch {}
        t || (t = await xh()), t || (t = await bh());
        let e = t?.id || 0;
        await new Promise(r => {
            let n = (o, a) => {
                switch (o.type) {
                    case "loaded":
                        a.tab?.id == e && D.default.tabs.sendMessage(e, {
                            type: "guard-session-activate"
                        });
                        break;
                    case "guard-session-activated":
                        D.default.runtime.onMessage.removeListener(n), r();
                        break;
                    case "guard-session-logout":
                        throw Error("")
                }
            };
            D.default.runtime.onMessage.addListener(n), setTimeout(() => r(), 1e3 * 40)
        })
    }
    async function be({
        onRefresh: t,
        throwGuideError: e,
        isForce: r
    } = {}) {
        if (!r && Mt.get(zs) !== !0 && Mt.get(io)) return Mt.get(io);
        let o = await (await Ae(Xe.openaiApiSession, {}, {
            onRefresh: t,
            throwGuideError: e
        })).json().catch(() => ({}));
        return Mt.set(io, o.accessToken), o.accessToken
    }
    async function _h(t, e, r) {
        let n = D.default.tabs.connect(t, {
                name: "guard-proxy"
            }),
            o = null,
            a = null,
            i = new Promise((p, m) => {
                o = p, a = m
            }),
            s;
        n.onDisconnect.addListener(() => {
            a(new Error("proxy fetch aborted")), s?.close()
        }), r?.signal?.addEventListener("abort", () => {
            s?.close(), n.disconnect()
        });
        let c = {
            type: "guard-proxy-request",
            key: Date.now() + "",
            url: e,
            options: r
        };
        n.postMessage(c);
        let u = new ReadableStream({
                start(p) {
                    s = p
                },
                cancel() {
                    n.disconnect()
                }
            }),
            f = setTimeout(() => a(new Error("connect timeout")), 1e3 * 1),
            l = p => {
                switch (p.type) {
                    case "guard-proxy-request-received":
                        clearTimeout(f);
                        break;
                    case "guard-proxy-response":
                        o(new Response(u, p.options));
                        break;
                    case "guard-proxy-response-chunk":
                        s.enqueue(new TextEncoder().encode(p.value)), p.done && (s.close(), n.onMessage.removeListener(l), n.disconnect());
                        break;
                    case "guard-proxy-response-error":
                        n.onMessage.removeListener(l), n.disconnect(), a(new Error(p.error)), s.close();
                        break
                }
            };
        return n.onMessage.addListener(l), await i
    }
    async function Ae(t, e, r) {
        let n = null;
        try {
            n = await fetch(t, e)
        } catch {}
        if (!n) throw new Error(Hr);
        if (n.status === 401) throw new Error("");
        if (n.status == 403) {
            if (Mt.set(zs, !0), Mt.set(vh, !0), !zr && r?.throwGuideError) throw Error(`${Lt}: error_chatgpt_session_timeout`);
            r?.onRefresh?.(), await wh(), n = await _h($e, t, e)
        }
        return n
    }
    var Th = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
        Ah = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
        Sh = /^\s*["[{]|^\s*-?\d[\d.]{0,14}\s*$/;

    function Ph(t, e) {
        if (t === "__proto__" || t === "constructor" && e && typeof e == "object" && "prototype" in e) {
            return
        }
        return e
    }

    function Ys(t, e = {}) {
        if (typeof t != "string") return t;
        let r = t.trim();
        if (t[0] === '"' && t[t.length - 1] === '"') return r.slice(1, -1);
        let n = r.toLowerCase();
        if (n === "true") return !0;
        if (n === "false") return !1;
        if (n !== "undefined") {
            if (n === "null") return null;
            if (n === "nan") return Number.NaN;
            if (n === "infinity") return Number.POSITIVE_INFINITY;
            if (n === "-infinity") return Number.NEGATIVE_INFINITY;
            if (!Sh.test(t)) {
                if (e.strict) throw new SyntaxError("[destr] Invalid JSON");
                return t
            }
            try {
                if (Th.test(t) || Ah.test(t)) {
                    if (e.strict) throw new Error("[destr] Possible prototype pollution");
                    return JSON.parse(t, Ph)
                }
                return JSON.parse(t)
            } catch (o) {
                if (e.strict) throw o;
                return t
            }
        }
    }
    var VO = String.fromCharCode;
    var Oh = /#/g,
        Eh = /&/g;
    var kh = /=/g;
    var Xs = /\+/g,
        Ch = /%5e/gi,
        Rh = /%60/gi;
    var Ih = /%7c/gi;
    var Lh = /%20/gi;

    function Mh(t) {
        return encodeURI("" + t).replace(Ih, "|")
    }

    function co(t) {
        return Mh(typeof t == "string" ? t : JSON.stringify(t)).replace(Xs, "%2B").replace(Lh, "+").replace(Oh, "%23").replace(Eh, "%26").replace(Rh, "`").replace(Ch, "^")
    }

    function so(t) {
        return co(t).replace(kh, "%3D")
    }

    function Zs(t = "") {
        try {
            return decodeURIComponent("" + t)
        } catch {
            return "" + t
        }
    }

    function jh(t) {
        return Zs(t.replace(Xs, " "))
    }

    function Nh(t = "") {
        let e = {};
        t[0] === "?" && (t = t.slice(1));
        for (let r of t.split("&")) {
            let n = r.match(/([^=]+)=?(.*)/) || [];
            if (n.length < 2) continue;
            let o = Zs(n[1]);
            if (o === "__proto__" || o === "constructor") continue;
            let a = jh(n[2] || "");
            typeof e[o] < "u" ? Array.isArray(e[o]) ? e[o].push(a) : e[o] = [e[o], a] : e[o] = a
        }
        return e
    }

    function Dh(t, e) {
        return (typeof e == "number" || typeof e == "boolean") && (e = String(e)), e ? Array.isArray(e) ? e.map(r => `${so(t)}=${co(r)}`).join("&") : `${so(t)}=${co(e)}` : so(t)
    }

    function Fh(t) {
        return Object.keys(t).filter(e => t[e] !== void 0).map(e => Dh(e, t[e])).join("&")
    }
    var Uh = /^\w{2,}:([/\\]{1,2})/,
        Gh = /^\w{2,}:([/\\]{2})?/,
        qh = /^([/\\]\s*){2,}[^/\\]/;

    function ec(t, e = {}) {
        return typeof e == "boolean" && (e = {
            acceptRelative: e
        }), e.strict ? Uh.test(t) : Gh.test(t) || (e.acceptRelative ? qh.test(t) : !1)
    }
    var Bh = /\/$|\/\?/;

    function uo(t = "", e = !1) {
        return e ? Bh.test(t) : t.endsWith("/")
    }

    function $h(t = "", e = !1) {
        if (!e) return (uo(t) ? t.slice(0, -1) : t) || "/";
        if (!uo(t, !0)) return t || "/";
        let [r, ...n] = t.split("?");
        return (r.slice(0, -1) || "/") + (n.length > 0 ? `?${n.join("?")}` : "")
    }

    function Kh(t = "", e = !1) {
        if (!e) return t.endsWith("/") ? t : t + "/";
        if (uo(t, !0)) return t || "/";
        let [r, ...n] = t.split("?");
        return r + "/" + (n.length > 0 ? `?${n.join("?")}` : "")
    }

    function Vh(t = "") {
        return t.startsWith("/")
    }

    function Wh(t = "") {
        return (Vh(t) ? t.slice(1) : t) || "/"
    }

    function tc(t, e) {
        if (Hh(e) || ec(t)) return t;
        let r = $h(e);
        return t.startsWith(r) ? t : Jh(r, t)
    }

    function rc(t, e) {
        let r = nc(t),
            n = {
                ...Nh(r.search),
                ...e
            };
        return r.search = Fh(n), Yh(r)
    }

    function Hh(t) {
        return !t || t === "/"
    }

    function zh(t) {
        return t && t !== "/"
    }

    function Jh(t, ...e) {
        let r = t || "";
        for (let n of e.filter(o => zh(o))) r = r ? Kh(r) + Wh(n) : n;
        return r
    }

    function nc(t = "", e) {
        if (!ec(t, {
                acceptRelative: !0
            })) return e ? nc(e + t) : Qs(t);
        let [r = "", n, o = ""] = (t.replace(/\\/g, "/").match(/([^/:]+:)?\/\/([^/@]+@)?(.*)/) || []).splice(1), [a = "", i = ""] = (o.match(/([^#/?]*)(.*)?/) || []).splice(1), {
            pathname: s,
            search: c,
            hash: u
        } = Qs(i.replace(/\/(?=[A-Za-z]:)/, ""));
        return {
            protocol: r,
            auth: n ? n.slice(0, Math.max(0, n.length - 1)) : "",
            host: a,
            pathname: s,
            search: c,
            hash: u
        }
    }

    function Qs(t = "") {
        let [e = "", r = "", n = ""] = (t.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
        return {
            pathname: e,
            search: r,
            hash: n
        }
    }

    function Yh(t) {
        let e = t.pathname + (t.search ? (t.search.startsWith("?") ? "" : "?") + t.search : "") + t.hash;
        return t.protocol ? t.protocol + "//" + (t.auth ? t.auth + "@" : "") + t.host + e : e
    }
    var lo = class extends Error {
        constructor() {
            super(...arguments), this.name = "FetchError"
        }
    };

    function Qh(t, e, r) {
        let n = "";
        e && (n = e.message), t && r ? n = `${n} (${r.status} ${r.statusText} (${t.toString()}))` : t && (n = `${n} (${t.toString()})`);
        let o = new lo(n);
        return Object.defineProperty(o, "request", {
            get() {
                return t
            }
        }), Object.defineProperty(o, "response", {
            get() {
                return r
            }
        }), Object.defineProperty(o, "data", {
            get() {
                return r && r._data
            }
        }), Object.defineProperty(o, "status", {
            get() {
                return r && r.status
            }
        }), Object.defineProperty(o, "statusText", {
            get() {
                return r && r.statusText
            }
        }), Object.defineProperty(o, "statusCode", {
            get() {
                return r && r.status
            }
        }), Object.defineProperty(o, "statusMessage", {
            get() {
                return r && r.statusText
            }
        }), o
    }
    var Xh = new Set(Object.freeze(["PATCH", "POST", "PUT", "DELETE"]));

    function oc(t = "GET") {
        return Xh.has(t.toUpperCase())
    }

    function Zh(t) {
        if (t === void 0) return !1;
        let e = typeof t;
        return e === "string" || e === "number" || e === "boolean" || e === null ? !0 : e !== "object" ? !1 : Array.isArray(t) ? !0 : t.constructor && t.constructor.name === "Object" || typeof t.toJSON == "function"
    }
    var ey = new Set(["image/svg", "application/xml", "application/xhtml", "application/html"]),
        ty = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;

    function ry(t = "") {
        if (!t) return "json";
        let e = t.split(";").shift() || "";
        return ty.test(e) ? "json" : ey.has(e) || e.startsWith("text/") ? "text" : "blob"
    }

    function ny(t, e, r = globalThis.Headers) {
        let n = {
            ...e,
            ...t
        };
        if (e?.params && t?.params && (n.params = {
                ...e?.params,
                ...t?.params
            }), e?.query && t?.query && (n.query = {
                ...e?.query,
                ...t?.query
            }), e?.headers && t?.headers) {
            n.headers = new r(e?.headers || {});
            for (let [o, a] of new r(t?.headers || {})) n.headers.set(o, a)
        }
        return n
    }
    var oy = new Set([408, 409, 425, 429, 500, 502, 503, 504]);

    function fo(t) {
        let {
            fetch: e,
            Headers: r
        } = t;

        function n(i) {
            let s = i.error && i.error.name === "AbortError" || !1;
            if (i.options.retry !== !1 && !s) {
                let u;
                typeof i.options.retry == "number" ? u = i.options.retry : u = oc(i.options.method) ? 0 : 1;
                let f = i.response && i.response.status || 500;
                if (u > 0 && oy.has(f)) return o(i.request, {
                    ...i.options,
                    retry: u - 1
                })
            }
            let c = Qh(i.request, i.error, i.response);
            throw Error.captureStackTrace && Error.captureStackTrace(c, o), c
        }
        let o = async function(s, c = {}) {
            let u = {
                request: s,
                options: ny(c, t.defaults, r),
                response: void 0,
                error: void 0
            };
            u.options.onRequest && await u.options.onRequest(u), typeof u.request == "string" && (u.options.baseURL && (u.request = tc(u.request, u.options.baseURL)), (u.options.query || u.options.params) && (u.request = rc(u.request, {
                ...u.options.params,
                ...u.options.query
            })), u.options.body && oc(u.options.method) && Zh(u.options.body) && (u.options.body = typeof u.options.body == "string" ? u.options.body : JSON.stringify(u.options.body), u.options.headers = new r(u.options.headers || {}), u.options.headers.has("content-type") || u.options.headers.set("content-type", "application/json"), u.options.headers.has("accept") || u.options.headers.set("accept", "application/json")));
            try {
                u.response = await e(u.request, u.options)
            } catch (l) {
                return u.error = l, u.options.onRequestError && await u.options.onRequestError(u), await n(u)
            }
            let f = (u.options.parseResponse ? "json" : u.options.responseType) || ry(u.response.headers.get("content-type") || "");
            if (f === "json") {
                let l = await u.response.text(),
                    d = u.options.parseResponse || Ys;
                u.response._data = d(l)
            } else f === "stream" ? u.response._data = u.response.body : u.response._data = await u.response[f]();
            return u.options.onResponse && await u.options.onResponse(u), !u.options.ignoreResponseError && u.response.status >= 400 && u.response.status < 600 ? (u.options.onResponseError && await u.options.onResponseError(u), await n(u)) : u.response
        }, a = async function(s, c) {
            return (await o(s, c))._data
        };
        return a.raw = o, a.native = e, a.create = (i = {}) => fo({
            ...t,
            defaults: {
                ...t.defaults,
                ...i
            }
        }), a
    }
    var ac = function() {
            if (typeof globalThis < "u") return globalThis;
            if (typeof self < "u") return self;
            if (typeof window < "u") return window;
            if (typeof global < "u") return global;
            throw new Error("unable to locate global object")
        }(),
        ay = ac.fetch || (() => Promise.reject(new Error("[ofetch] global.fetch is not supported!"))),
        iy = ac.Headers,
        nt = fo({
            fetch: ay,
            Headers: iy
        });
    var ce = class {
        constructor() {
            this.abortMap = {}
        }
        sendChat(e) {
            return this.option = e, this._sendChat(e)
        }
        async abortChat(e) {
            this.abortMap[e]?.abort?.(), delete this.abortMap[e]
        }
        sendAnswering(e = {}) {
            this.option.onEvent({
                type: "chat-answering",
                data: {
                    conversation_id: this.conversation_id,
                    message_id: this.message_id,
                    originId: this.option.originId,
                    text: this.text,
                    ...e
                }
            })
        }
        sendAnswerEnd(e = {}) {
            this.option.onEvent({
                type: "chat-answer-end",
                data: {
                    conversation_id: this.conversation_id,
                    message_id: this.message_id,
                    originId: this.option.originId,
                    ...e
                }
            })
        }
        sendAnswerErr(e) {
            this.option.onEvent({
                type: "chat-answer-error",
                data: {
                    originId: this.option.originId,
                    text: bt(e.error?.msg) && e.error.msg || bt(e.error) && e.error || e.error?.toString?.() || e.error || "unknown error",
                    position: e?.position ?? e.error?.position ?? "unknown",
                    ...e,
                    error: Rt(e.error)
                }
            })
        }
    };
    var X = class extends Error {
        constructor(r, n, o, a) {
            super(r, a);
            this.message = r;
            this.code = n;
            this.position = o
        }
    };

    function ic(t, e) {
        return new RegExp(`"${t}":"([^"]+)"`).exec(e)?.[1]
    }
    async function sc() {
        let t = await nt("https://bard.google.com/faq"),
            e = ic("SNlM0e", t),
            r = ic("cfb2h", t);
        return {
            atValue: e,
            blValue: r
        }
    }

    function cc(t) {
        let e = JSON.parse(t.split(`
`)[3]),
            r = JSON.parse(e[0][2]);
        if (!r) throw new X("Bard is not available.", "no access", "bard-token");
        return {
            text: r[0][0],
            ids: [...r[1], r[4][0][0]]
        }
    }

    function sy() {
        return Math.floor(Math.random() * 9e5) + 1e5
    }
    var rr = class extends ce {
        async _sendChat(e) {
            let r = e.parent_message_id ? JSON.parse(e.parent_message_id) : ["", "", ""],
                n = e.conversation_id ? JSON.parse(e.conversation_id) : await sc();
            this.conversation_id = JSON.stringify(n), this.message_id = "";
            let o = new AbortController;
            this.abortMap[e.originId] = o;
            let a = await nt("https://bard.google.com/_/BardChatUi/data/assistant.lamda.BardFrontendService/StreamGenerate", {
                method: "POST",
                signal: o.signal,
                query: {
                    bl: n.blValue,
                    _reqid: sy(),
                    rt: "c"
                },
                body: new URLSearchParams({
                    at: n.atValue,
                    "f.req": JSON.stringify([null, `[[${JSON.stringify(e.content)}],null,${JSON.stringify(r)}]`])
                }),
                parseResponse: i => i
            }).catch(i => {
                this.sendAnswerErr({
                    error: i,
                    code: "api error",
                    position: i?.position ?? "bard"
                })
            });
            try {
                let {
                    text: i,
                    ids: s
                } = cc(a);
                this.message_id = JSON.stringify(s), this.text = i, this.sendAnswering(), this.sendAnswerEnd()
            } catch (i) {
                this.sendAnswerErr({
                    error: i,
                    code: i?.code || "system error",
                    position: i?.position ?? "bard-parser message"
                })
            }
        }
    };
    var $l = N(Ul());

    function nb() {
        return `13.${Yt(104,107)}.${Yt(0,255)}.${Yt(0,255)}`
    }
    var Jo = "https://www.bing.com/turing/conversation/create";
    async function Gl() {
        let t = {
                "x-ms-client-request-id": te(),
                "x-ms-useragent": "azsdk-js-api-client-factory/1.0.0-beta.1 core-rest-pipeline/1.10.0 OS/Win32"
            },
            e;
        try {
            if (e = await nt(Jo, {
                    headers: t,
                    redirect: "error"
                }), !e.result) throw new X("Invalid response", "api error", "bing-token")
        } catch {
            if (e = await nt(Jo, {
                    headers: {
                        ...t,
                        "x-forwarded-for": nb()
                    },
                    redirect: "error"
                }), !e) throw new X(`Failed to fetch (${Jo})`, "api error", "bing-token retry create")
        }
        if (e.result.value !== "Success") {
            let r = `${e.result.value}: ${e.result.message}`;
            throw e.result.value === "UnauthorizedRequest" ? new X(r, "no access", "bing-token") : e.result.value === "Forbidden" ? new X(r, "no access", "bing-token") : new Error(r)
        }
        return e
    }

    function Bl(t) {
        if (t.messageType === "InternalSearchQuery") return t.text;
        for (let e of t.adaptiveCards)
            for (let r of e.body)
                if (r.type === "TextBlock") return r.text;
        return ""
    }
    var ql = String.fromCharCode(30),
        Yo = {
            packMessage(t) {
                return `${JSON.stringify(t)}${ql}`
            },
            unpackMessage(t) {
                return t.toString().split(ql).filter(Boolean).map(e => JSON.parse(e))
            }
        };
    var ob = {
            balanced: "harmonyv3",
            creative: "h3imaginative",
            precise: "h3precise"
        },
        ur = class extends ce {
            buildChatRequest(r, n) {
                return {
                    arguments: [{
                        source: "cib",
                        optionsSets: ["deepleo", "nlu_direct_response_filter", "disable_emoji_spoken_text", "responsible_ai_policy_235", "enablemm", "dtappid", "rai253", "dv3sugg", ob[r.conversationStyle]],
                        allowedMessageTypes: ["Chat", "InternalSearchQuery"],
                        isStartOfSession: r.invocationId === 0,
                        message: {
                            author: "user",
                            inputMethod: "Keyboard",
                            text: n,
                            messageType: "Chat"
                        },
                        conversationId: r.conversationId,
                        conversationSignature: r.conversationSignature,
                        participant: {
                            id: r.clientId
                        }
                    }],
                    invocationId: r.invocationId.toString(),
                    target: "chat",
                    type: 4
                }
            }
            async _sendChat(r) {
                let n = r.originId;
                this.message_id = "", this.conversation_id = r.conversation_id || "";
                let o = this.conversation_id && JSON.parse(this.conversation_id);
                if (!o) {
                    let [i] = await Promise.all([Gl()]);
                    o = {
                        conversationId: i.conversationId,
                        conversationSignature: i.conversationSignature,
                        clientId: i.clientId,
                        invocationId: 0,
                        conversationStyle: "balanced"
                    }, this.conversation_id = JSON.stringify(o)
                }
                let a = new $l.default("wss://sydney.bing.com/sydney/ChatHub", {
                    packMessage: Yo.packMessage,
                    unpackMessage: Yo.unpackMessage
                });
                this.wsp = a, a.onUnpackedMessage.addListener(i => {
                    for (let s of i)
                        if (JSON.stringify(s) === "{}") a.sendPacked({
                            type: 6
                        }), a.sendPacked(this.buildChatRequest(o, r.content)), o.invocationId += 1, this.conversation_id = JSON.stringify(o);
                        else if (s.type === 6) a.sendPacked({
                        type: 6
                    });
                    else if (s.type === 3) this.sendAnswerEnd(), a.removeAllListeners(), a.close();
                    else if (s.type === 1) {
                        let c = s.arguments[0].messages?.[0];
                        if (!c) return;
                        let u = Bl(c);
                        this.text = u, this.sendAnswering()
                    } else if (s.type === 2) {
                        let c = s.item.messages;
                        c ? c.some(f => f.contentOrigin === "TurnLimiter") && this.sendAnswerErr({
                            text: "Sorry, you have reached chat turns limit in this conversation.",
                            code: "custom error",
                            error: s.item,
                            position: "bing"
                        }) : s.item.result ? this.sendAnswerErr({
                            error: JSON.stringify(s.item.result),
                            code: "api error",
                            position: "bing"
                        }) : this.sendAnswerErr({
                            error: JSON.stringify(s.item),
                            code: "api error",
                            position: "bing"
                        })
                    }
                }), a.onClose.addListener(() => {
                    this.sendAnswerEnd()
                }), await a.open(), a.sendPacked({
                    protocol: "json",
                    version: 1
                })
            }
            async abortChat(r) {
                this.wsp.removeAllListeners(), this.wsp.close()
            }
        };
    var Kl = N(Kr());
    var Vl = {
        changeConversation: async (t, e) => Ae(`https://chat.openai.com/backend-api/conversation/${t}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${await be()}`
            },
            body: JSON.stringify(e)
        }).then(r => r.json()),
        deleteConversation: t => Vl.changeConversation(t, {
            is_visible: !1
        }),
        getConversations: async () => Ae("https://chat.openai.com/backend-api/conversations", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${await be()}`
            }
        }).then(t => t.json()),
        getModels: async () => Ae("https://chat.openai.com/backend-api/models", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${await be()}`
            }
        }).then(t => t.json())
    };
    var E1 = new Kl.default(10 * 1e3);
    var dn = Vl;
    var qt = class extends ce {
        async _sendChat(e) {
            let r = e.model || "text-davinci-002-render",
                n = e.parent_message_id || te(),
                o = te();
            this.conversation_id = e.conversation_id || "", this.message_id = "";
            let a = e.originId;
            if (e.TTL = e.TTL ?? 2, !e.TTL--) {
                let l = "Too many loop sending times, please resend"
            }
            let i = !e.conversation_id,
                s = !1,
                c = "";
            try {
                c = await be()
            } catch (l) {
                this.sendAnswerErr({
                    error: l,
                    code: l?.code || "system error",
                    position: l?.position ?? "chatGPT-token"
                });
                return
            }
            let u = !1,
                f = new AbortController;
            this.abortMap[e.originId] = f, await Be("https://chat.openai.com/backend-api/conversation", {
                method: "POST",
                signal: f.signal,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${c}`
                },
                body: JSON.stringify({
                    action: "next",
                    messages: [...e.messages ? e.messages?.map?.(l => ({
                        id: te(),
                        role: l.role,
                        content: {
                            content_type: "text",
                            parts: [l.message]
                        }
                    })) : [], {
                        id: o,
                        role: "user",
                        content: {
                            content_type: "text",
                            parts: [e.content]
                        }
                    }],
                    model: r,
                    parent_message_id: n,
                    plugin_ids: e.plugin_ids
                }),
                onMessage: l => {
                    if (u) {
                        try {
                            this.abortChat(a)
                        } catch {}
                        return
                    }
                    if (l === "[DONE]") {
                        u = !0, this.sendAnswerEnd({
                            conversation_id: ""
                        }), dn.deleteConversation(this.conversation_id);
                        return
                    }
                    let d;
                    try {
                        d = JSON.parse(l)
                    } catch {
                        return
                    }
                    let p = d.message?.content?.parts?.[0];
                    d.message?.author?.role == "assistant" && (p && s && (this.conversation_id = d.conversation_id, this.message_id = d.message.id, this.text = p, this.sendAnswering({
                        conversation_id: ""
                    })), p == "" && (s = !0))
                }
            }, !0).catch(async l => {
                this.sendAnswerErr({
                    error: l,
                    code: l?.code || "api error",
                    position: l?.position ?? "chatGPT"
                })
            })
        }
    };
    async function mn(t, e) {
        let {
            onMessage: r,
            ...n
        } = e, o = await fetch(t, n);
        if (!o.ok) {
            let i = await o.json().catch(() => ({}));
            throw new Error(Qe(i) ? `${o.status} ${o.statusText}` : JSON.stringify(i), {
                cause: i
            })
        }
        let a = xt(i => {
            i.type === "event" && r(i.data)
        });
        for await (let i of wt(o.body)) {
            let s = new TextDecoder().decode(i);
            a.feed(s)
        }
    }
    var lr = class extends ce {
        constructor(r) {
            super();
            this.config = r.configs.gpt3
        }
        async _sendChat(r) {
            let n = r.model || this.config.model || "gpt-3.5-turbo",
                o = r.originId;
            this.conversation_id = r.conversation_id || "", this.message_id = "";
            let a = n === "gpt-3.5-turbo",
                i = "",
                s = Ge(this.config.enableCustomURL && this.config.customURL ? this.config.customURL : "https://api.openai.com", "/v1/chat/completions"),
                c = {
                    model: n,
                    stream: !0
                };
            c.messages = [...r.messages ? r.messages?.map?.(f => ({
                role: f.role,
                content: f.message
            })) : [], {
                role: "user",
                content: r.content
            }];
            let u = new AbortController;
            this.abortMap[r.originId] = u, await mn(s, {
                method: "POST",
                signal: u.signal,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${this.config.apiKey}`
                },
                body: JSON.stringify(c),
                onMessage: f => {
                    if (f === "[DONE]") {
                        this.sendAnswerEnd({
                            conversation_id: ""
                        });
                        return
                    }
                    let l;
                    try {
                        l = JSON.parse(f);
                        let d = l.choices[0].delta.content;
                        if (d === "<|im_end|>" || d === "<|im_sep|>" || !d) return;
                        this.conversation_id = l.id, this.message_id = l.id, i += d, this.text = i, this.sendAnswering({
                            conversation_id: ""
                        })
                    } catch (d) {
                        this.sendAnswerErr({
                            error: new X(d.message, "system error", "openai-message parse"),
                            code: "system error",
                            position: "openai-parser message"
                        });
                        return
                    }
                }
            }).catch(f => {
                this.sendAnswerErr({
                    error: f,
                    code: f?.code || "api error",
                    position: f?.position ?? "openai"
                })
            })
        }
    };
    var fr = class extends ce {
        constructor(r) {
            super();
            this.loginCount = 0;
            this.config = r.configs.gpt3
        }
        async _sendChat(r) {
            let n = "";
            this.conversation_id = r.conversation_id, this.message_id = "";
            let o = (await J({
                    [At]: {
                        model: "gpt-3.5"
                    }
                }))[At].model ?? "gpt-3.5",
                a = {};
            if (r.messages?.length && !r.conversation_id) try {
                let s = await G(`${$.api}/v1/conversation/upload`, {
                    app_name: q,
                    app_version: Ue,
                    tz_name: he,
                    messages: r.messages.map(c => ({
                        role: c.role,
                        content: c.message
                    })),
                    ...this.conversation_id ? {
                        cid: this.conversation_id
                    } : {}
                });
                this.conversation_id = s?.cid ?? this.conversation_id
            } catch (s) {
                throw this.sendAnswerErr({
                    error: s,
                    code: s?.code || "api error",
                    position: s?.position ?? "sider-create cid"
                }), s
            }
            let i = new AbortController;
            this.abortMap[r.originId] = i, await mn(`${$.api}/v1/completion/text`, {
                method: "POST",
                signal: i.signal,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: (await tt()).token
                },
                body: JSON.stringify({
                    prompt: r.content,
                    stream: !0,
                    tz_name: he,
                    app_name: q,
                    app_version: Ue,
                    model: o.replace(/-/g, ""),
                    ...this.conversation_id ? {
                        cid: this.conversation_id
                    } : {}
                }),
                onMessage: s => {
                    if (s == "[DONE]") {
                        this.sendAnswerEnd({
                            otherData: a
                        });
                        return
                    }
                    let c = JSON.parse(s);
                    if (c.code !== 0) throw new X(c?.msg || s, "api error", "sider", {
                        cause: c
                    });
                    this.conversation_id = c.data.cid, this.message_id = c.data.message_id, se({
                        [o]: {
                            total: c.data.total,
                            remain: c.data.remain,
                            extraRemain: c.data.extra_quota,
                            extraTotal: c.data.extra_total,
                            period: c.data.remain_period
                        }
                    }), a = c.data;
                    let u = c.data.text;
                    u && (n += u, this.text = n, this.sendAnswering({
                        otherData: a
                    }))
                }
            }).catch(s => {
                throw this.sendAnswerErr({
                    error: s,
                    code: s?.code || "api error",
                    position: s?.position ?? "sider"
                }), new Error(s)
            })
        }
    };
    async function Wl(t, e) {
        let r, n = await Lr(),
            o = !1;
        switch (e.target) {
            case "openai":
            case "chatGPT": {
                o = !0, n.provider === "chatgpt" && (r = new qt), n.provider === "gpt3" && (r = new lr(n)), n.provider === "siderApi" && (r = new fr(n));
                break
            }
            case "bard": {
                r = new rr;
                break
            }
            case "bing": {
                r = new ur;
                break
            }
            default:
                r = new qt
        }
        r.sendChat({
            ...e,
            onEvent(a) {
                t.postMessage({
                    type: a.type,
                    data: {
                        ...a?.data ?? {},
                        sendType: o ? n.provider : e.target
                    }
                })
            }
        }).catch(a => {
            let i = {
                originId: e.originId,
                sendType: o ? n.provider : e.target,
                error: Rt(a)
            };
            a instanceof X ? t.postMessage({
                type: "chat-answer-error",
                data: {
                    text: a.message,
                    code: a.code || "system error",
                    position: "base-" + a.position,
                    ...i
                }
            }) : a?.msg ? t.postMessage({
                type: "chat-answer-error",
                data: {
                    text: a.msg,
                    code: "api error",
                    position: "base",
                    ...i
                }
            }) : t.postMessage({
                type: "chat-answer-error",
                data: {
                    text: bt(a) ? a : a?.toString?.() || a,
                    code: "system error",
                    position: "base",
                    ...i
                }
            })
        }), t.onDisconnect.addListener(() => {
            r.abortChat(e.originId)
        })
    }
    var Xo = N(W());
    async function Zo() {
        let t = await ie("language");
        if (t && t !== "auto") return;
        let e = navigator.languages;
        for (let r of e) {
            r = r.replace("-", "_");
            let n = r.split("_");
            n[0] = n[0].toLowerCase(), n[1] && (n[1] = n[1].toUpperCase()), r = n.join("_");
            let o = "";
            if (r in Fn ? o = r : o = Object.keys(Fn).find(a => n[0] === a.split("_")[0]) || "", o) {
                await Xo.default.storage.local.set({
                    __DONT_SYNC__: `language${Date.now()}`,
                    language: o
                });
                return
            }
        }
        Xo.default.storage.local.set({
            __DONT_SYNC__: `language${Date.now()}`,
            language: "en"
        })
    }
    var Hl = N(W());
    var ib = "OpenAI";
    async function sb(t, e) {
        let r = await Hl.default.storage.local.get("provider:gpt3");
        if (r["provider:gpt3"].apiKey) {
            let n = r["provider:gpt3"].enableCustomURL && r["provider:gpt3"].customURL ? r["provider:gpt3"].customURL : cb;
            return fetch(n + e, {
                method: t,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${r["provider:gpt3"].apiKey}`
                }
            }).then(o => o.json())
        } else return !1
    }
    async function zl() {
        return sb("GET", "/v1/models")
    }
    var cb = "https://api.openai.com",
        gn = class {
            constructor(e, r, n) {
                this.token = e;
                this.model = r;
                this.url = n;
                this.token = e, this.model = r, this.url = n
            }
            async generateAnswer(e) {
                let r = "",
                    n = Ge(this.url ? this.url : "https://api.openai.com", "/v1", "/chat/completions"),
                    o = {
                        model: this.model,
                        stream: !0
                    };
                Array.isArray(e.prompt) ? o.messages = e.prompt : o.messages = [{
                    role: "user",
                    content: e.prompt
                }], await Be(n, {
                    method: "POST",
                    signal: e.signal,
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${this.token}`
                    },
                    body: JSON.stringify(o),
                    onMessage(a) {
                        if (a === "[DONE]") {
                            e.onEvent({
                                type: "done"
                            });
                            return
                        }
                        let i;
                        try {
                            i = JSON.parse(a);
                            let s = i.choices[0].delta.content;
                            if (i.choices[0].finish_reason === "stop") {
                                e.onEvent({
                                    type: "done"
                                });
                                return
                            }
                            if (s === "<|im_end|>" || s === "<|im_sep|>" || !s) return;
                            r += s, e.onEvent({
                                type: "answer",
                                data: {
                                    text: r,
                                    messageId: i.id,
                                    conversationId: ""
                                }
                            })
                        } catch {
                            return
                        }
                    }
                }).catch(a => {
                    let i = a.message;
                    try {
                        let s = JSON.parse(i);
                        i = s.message || s.msg || s.error?.message || s.detail?.message || i
                    } catch {}
                    throw new Error(`${ib}: ${i}`)
                })
            }
        };
    var ub = ee(se, 2e3, {
            leading: !0
        }),
        hn = class {
            constructor(e) {
                this.token = "";
                this.refreshToken = "";
                this.anonymous = !0;
                this.cid = e
            }
            async getToken() {
                let e = await tt();
                this.token = e.token, this.refreshToken = e.refreshToken, this.anonymous = e.anonymous
            }
            async generateAnswer(e) {
                let r = "";
                try {
                    await this.getToken()
                } catch (f) {
                    throw new Error(f.errMsg)
                }
                if (!this.cid && e.historyMsg) try {
                    this.cid = await C.uploadHistoryMsg(e.historyMsg)
                } catch (f) {
                    throw new Error(f.errMsg)
                }
                let {
                    [At]: {
                        model: n
                    }
                } = await J({
                    [At]: {
                        model: "gpt-3.5"
                    }
                }), o = e.model || n, a = "", i = "", s = !1;

                function c() {
                    !s && a && i && C.statUserStop(a, i)
                }
                e.getCleanupMethod?.(c), await (async (f, l, d) => {
                    try {
                        return await Be(f, {
                            method: "POST",
                            signal: e.signal,
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: this.token
                            },
                            body: JSON.stringify(l),
                            onMessage(p) {
                                if (p == "[DONE]") {
                                    s = !0, e.onEvent({
                                        type: "done"
                                    });
                                    return
                                }
                                let m = JSON.parse(p);
                                if (m.code !== 0) throw new Error(JSON.stringify({
                                    code: m.code,
                                    msg: m.msg || m.message
                                }));
                                a = m.data.cid, i = m.data.message_id, d(m.data)
                            }
                        })
                    } catch (p) {
                        let m = p.message,
                            v = null;
                        try {
                            v = JSON.parse(m)
                        } catch {}
                        Xt(v?.code, v?.msg || v?.message || m)
                    }
                })(`${$.api}/v1/completion/text`, {
                    prompt: e.prompt,
                    stream: !0,
                    app_name: q,
                    app_version: Ue,
                    tz_name: he,
                    cid: this.cid,
                    model: o.replace(/-/g, ""),
                    search: e.forceSearch,
                    auto_search: e.autoSearch,
                    filter_search_history: e.filterSearchHistory,
                    from: e.from,
                    prompt_key: e.promptKey
                }, f => {
                    if (!f) return;
                    if (f.total) {
                        let p = {
                            [o]: {
                                total: f.total,
                                remain: f.remain,
                                extraTotal: f.extra_total,
                                extraRemain: f.extra_quota,
                                period: f.remain_period
                            }
                        };
                        ub(p)
                    }
                    let l = f.text;
                    l && (r += l, e.onEvent({
                        type: "answer",
                        data: {
                            text: r,
                            messageId: "",
                            conversationId: f.cid
                        }
                    }));
                    let d = f.search_keywords || "";
                    d && e.onEvent({
                        type: "searchKeywords",
                        data: {
                            searchKeywords: d,
                            searchSnippets: f.search_snippets
                        }
                    })
                })
            }
        };
    var Jl = N(W());
    var ea = 18e4;
    async function Yl({
        prompt: t,
        width: e,
        height: r,
        cid: n,
        samples: o,
        style: a,
        engine: i,
        negativePrompt: s,
        cfgScale: c,
        clipGuidance: u,
        sampler: f,
        seed: l,
        steps: d
    }) {
        let p = await Ot("/v1/image/text-to-image", {
            prompt: t,
            cid: n,
            engine: i,
            height: r,
            width: e,
            style: a,
            samples: o,
            negative_prompt: s,
            cfg_scale: c === void 0 ? void 0 : c.toString(),
            clip_guidance: u,
            sampler: f,
            seed: l,
            steps: d
        }, {
            method: "POST"
        }, {
            timeout: ea
        });
        if (se({
                "image-creator": {
                    total: p.total,
                    remain: p.remain,
                    extraTotal: p.extra_total,
                    extraRemain: p.extra_quota,
                    period: p.remain_period
                }
            }), p.signed_cookie) try {
            await yn(p.signed_cookie)
        } catch (m) {
            throw m instanceof Error ? new Error(`Failed to set cookie: ${m.message}`, {
                cause: {
                    data: p
                }
            }) : new Error("Failed to set cookie: unknown error", {
                cause: {
                    data: p
                }
            })
        }
        return p
    }
    async function Ql({
        prompt: t,
        cid: e,
        samples: r,
        style: n,
        engine: o,
        imageUrl: a,
        fileName: i,
        imageStrength: s,
        cfgScale: c,
        clipGuidance: u,
        negativePrompt: f,
        sampler: l,
        seed: d,
        steps: p
    }) {
        let m = new FormData;
        m.append("prompt", t), m.append("init_image", await fetch(a).then(b => b.blob()), i || "image.png"), r !== void 0 && m.append("samples", String(r)), e && m.append("cid", e), o && m.append("engine", o), n && m.append("style", n), s !== void 0 && m.append("image_strength", String(s)), c !== void 0 && m.append("cfg_scale", String(c)), u && m.append("clip_guidance", u), f && m.append("negative_prompt", f), l && m.append("sampler", l), d !== void 0 && m.append("seed", String(d)), p !== void 0 && m.append("steps", String(p));
        let v = await Ot("/v1/image/image-to-image", m, {
            method: "POST"
        }, {
            timeout: ea
        });
        if (se({
                "image-creator": {
                    total: v.total,
                    remain: v.remain,
                    extraTotal: v.extra_total,
                    extraRemain: v.extra_quota,
                    period: v.remain_period
                }
            }), v.signed_cookie) try {
            await yn(v.signed_cookie)
        } catch (b) {
            throw b instanceof Error ? new Error(`Failed to set cookie: ${b.message}`, {
                cause: {
                    data: v
                }
            }) : new Error("Failed to set cookie: unknown error", {
                cause: {
                    data: v
                }
            })
        }
        return v
    }
    async function Xl({
        cfgScale: t,
        cid: e,
        height: r,
        prompt: n,
        fileName: o,
        seed: a,
        steps: i,
        imageUrl: s,
        width: c
    }) {
        let u = new FormData;
        if (c !== void 0) u.append("width", String(c));
        else {
            if (r === void 0) throw new Error("width or height must be set");
            u.append("height", String(r))
        }
        u.append("init_image", await fetch(s).then(l => l.blob()), o || "image.png"), t !== void 0 && u.append("cfg_scale", String(t)), e && u.append("cid", e), n && u.append("prompt", n), a !== void 0 && u.append("seed", String(a)), i !== void 0 && u.append("steps", String(i));
        let f = await Ot("/v1/image/image-to-image/upscale", u, {
            method: "POST"
        }, {
            timeout: ea
        });
        if (se({
                "image-creator": {
                    total: f.total,
                    remain: f.remain,
                    extraTotal: f.extra_total,
                    extraRemain: f.extra_quota,
                    period: f.remain_period
                }
            }), f.signed_cookie) try {
            await yn(f.signed_cookie)
        } catch (l) {
            throw l instanceof Error ? new Error(`Failed to set cookie: ${l.message}`, {
                cause: {
                    data: f
                }
            }) : new Error("Failed to set cookie: unknown error", {
                cause: {
                    data: f
                }
            })
        }
        return f
    }
    async function Zl() {
        let t = await Ot("/v1/image/sign-cookie", void 0, {
            method: "POST"
        }, {
            noAppInfo: !0
        });
        return await yn(t), t
    }
    async function yn(t) {
        let {
            domain: e,
            cookies: r
        } = t;
        return Promise.all(r.map(({
            Name: n,
            Value: o
        }) => Jl.cookies.set({
            url: `https://${e}`,
            name: n,
            value: o,
            expirationDate: Date.now() / 1e3 + 5184e3
        })))
    }
    async function ef() {
        return Ot("/v1/image/load-engines")
    }
    var pr = N(W());
    var tf = ee(async t => {
            let e = await pr.default.storage.local.get({
                    promptTemplates: Ir
                }),
                r = Ir.reduce((n, {
                    id: o
                }, a) => (n[o] = Ir[a], n), {});
            for (let n of e.promptTemplates) n.id in r && (n.title = t[n.id].title, n.template = t[n.id].template);
            pr.default.storage.local.set({
                __DONT_SYNC__: `searchPromptTPL${Date.now()}`,
                ...e
            })
        }, 200),
        rf = ee(async (t, e) => {
            let r = await pr.default.storage.local.get("sidebarPromptTemplate"),
                n = !1;
            if (r.sidebarPromptTemplate || (n = !0, r.sidebarPromptTemplate = Qt), !t || !e) return;
            let o = Qt.reduce((a, {
                key: i
            }, s) => (a[i] = Qt[s], a), {});
            for (let a of r.sidebarPromptTemplate) a.key in o && (a.title = t[a.key].title, n || a.changed === !1 || a.template.trim() === e[a.key].template.trim() ? (a.template = t[a.key].template, a.changed = !1) : a.changed = !0);
            pr.default.storage.local.set({
                __DONT_SYNC__: `sidebarPromptTPL${Date.now()}`,
                ...r
            })
        }, 100);
    var ze = N(W());
    var nf = {
            provider: "gpt3",
            "provider:gpt3": {
                apiKey: "",
                customURL: "",
                enableCustomURL: !0,
                model: "gpt-3.5-turbo"
            },
            language: "zh_CN",
            theme: "light",
            isShowSearch: !1,
            triggerMode: "questionMark",
            selectedSearchTemplate: {
                id: "suggest",
                title: ""
            },
            promptTemplates: [],
            submitShortcut: "Enter",
            sidebarShortcut: {
                altKey: !1,
                ctrlKey: !0,
                key: "O",
                keyCode: 79,
                metaKey: !1,
                shiftKey: !0
            },
            sidebarLocation: "right",
            sidebarDisplayOption: "overlay",
            sidebarFab: !0,
            selectionSidebarFab: !0,
            sidebarPromptTemplate: [],
            translatorPrimaryTemplates: ["translate", "rewrite", "explain"],
            translatorPinnedTemplates: ["explain"],
            translatorEnable: !0,
            translatorHostConfig: {
                "fab-config.example.com": {
                    favicon: "",
                    enable: !0
                }
            },
            enableWebAssistantVideo: !0,
            enableWebAssistantArticle: !0,
            enableWebAssistantQA: !0
        },
        oa = Date.now();

    function of() {
        ze.default.storage.local.onChanged.addListener(t => {
            if (!t.__DONT_SYNC__?.newValue)
                for (let [e] of Object.entries(t)) e in nf && af()
        })
    }
    var af = ee(async () => {
            if (!await et()) return;
            await sf();
            let e = await uf();
            e["provider:gpt3"] && (e["provider:gpt3"].apiKey = ""), db(e, "translatorHostConfig"), "promptTemplates" in e && (e.promptTemplates = e.promptTemplates.map(r => ({
                uid: r.uid || "",
                id: r.id
            }))), e.sidebarPromptTemplate && (e.sidebarPromptTemplate = e.sidebarPromptTemplate.map(r => r.key.startsWith("custom") ? {
                uid: r.uid || "",
                key: r.key,
                visible: r.visible
            } : r.changed ? r : {
                key: r.key,
                visible: r.visible
            })), C.setUserSettings(e), oa = Date.now()
        }, 2e3),
        sf = async () => {
            let {
                promptTemplates: t,
                sidebarPromptTemplate: e
            } = await ie(["promptTemplates", "sidebarPromptTemplate"]), r = !1;
            t && (await Promise.all(t.map(async n => {
                if (n.canEdit && !n.uid) {
                    r = !0;
                    let o = await C.createUserPrompt({
                        type: "search",
                        name: n.title,
                        content: n.template
                    });
                    n.uid = o.id
                }
            })), r && await ze.default.storage.local.set({
                __DONT_SYNC__: `unsavedSearchTpl${Date.now()}`,
                promptTemplates: t
            })), r = !1, e && (await Promise.all(e.map(async n => {
                if (n.key.startsWith("custom") && !n.uid) {
                    r = !0;
                    let o = await C.createUserPrompt({
                        type: "sidebar",
                        name: n.title,
                        content: n.template
                    });
                    n.uid = o.id
                }
            })), r && await ze.default.storage.local.set({
                __DONT_SYNC__: `unsavedSidebarTpl${Date.now()}`,
                sidebarPromptTemplate: e
            }))
        }, aa = ee(async () => {
            await et() && (await sf(), await fb(), await pb(), oa = Date.now())
        }, 1e3), lb = 1e3 * 60 * 60 * 6, ta = !1, cf = ee(async () => {
            if (!ta && Date.now() - oa > lb) {
                ta = !0;
                try {
                    await aa()
                } catch {}
                ta = !1
            }
        }, 3e3), ra = null, na = null;
    async function fb() {
        let t = await C.getUserSettings();
        if (!t || !Object.keys(t).length) {
            await af();
            return
        }
        let e = await uf(),
            r;
        e["provider:gpt3"] && (r = e["provider:gpt3"].apiKey), mb(t, "translatorHostConfig"), "promptTemplates" in e && delete e.promptTemplates, "promptTemplates" in t && (ra = t.promptTemplates, delete t.promptTemplates), "sidebarPromptTemplate" in e && delete e.sidebarPromptTemplate, "sidebarPromptTemplate" in t && (na = t.sidebarPromptTemplate, delete t.sidebarPromptTemplate), kn(e, t, {
            "provider:gpt3": {
                apiKey: r
            }
        }), await ze.default.storage.local.set({
            __DONT_SYNC__: `pullFromCloud${Date.now()}`,
            ...e
        })
    }
    async function pb() {
        let t = await ie("promptTemplates") || [],
            e = ra ? [...ra] : t,
            r = e.reduce((c, u) => {
                if (c[u.uid || u.id] = u, u.uid || u.id.startsWith("search")) Object.assign(u, {
                    canEdit: !0
                });
                else {
                    let f = t.find(l => l.id === u.id);
                    Object.assign(u, f)
                }
                return c
            }, {}),
            n = await C.getUserPromptList("search");
        if (n?.List?.length) {
            for (let c of n.List) r[c.id] ? Object.assign(r[c.id], {
                uid: c.id,
                title: c.name,
                template: c.content,
                canEdit: !0,
                visible: !0
            }) : e.unshift({
                id: c.id,
                uid: c.id,
                title: c.name,
                template: c.content,
                canEdit: !0,
                visible: !0
            });
            await ze.default.storage.local.set({
                __DONT_SYNC__: `pullSearchTpl${Date.now()}`,
                promptTemplates: e.filter(c => c.title)
            })
        }
        let o = await ie("sidebarPromptTemplate") || [],
            a = na ? [...na] : o,
            i = a.reduce((c, u) => {
                if (u.title) c[u.key] = u;
                else if (u.uid) c[u.uid] = u;
                else if (u.key) {
                    c[u.key] = u;
                    let f = o.find(l => l.key === u.key) || {};
                    Object.assign(u, f, {
                        ...u
                    })
                }
                return c
            }, {}),
            s = await C.getUserPromptList("sidebar");
        if (s?.List?.length) {
            for (let c of s.List) i[c.id] ? Object.assign(i[c.id], {
                uid: c.id,
                title: c.name,
                template: c.content
            }) : a.unshift({
                uid: c.id,
                key: `custom-${Date.now()}${c.id}`,
                title: c.name,
                template: c.content,
                visible: c.status === "Valid"
            });
            await ze.default.storage.local.set({
                __DONT_SYNC__: `pullSidebarTpl${Date.now()}`,
                sidebarPromptTemplate: a.filter(c => c.title)
            })
        }
    }
    async function uf() {
        let t = await ze.default.storage.local.get(null),
            e = {};
        return Object.keys(t).forEach(r => {
            r in nf && (e[r] = t[r])
        }), e
    }

    function db(t, e) {
        let r = [];
        if (t[e] && typeof t[e] == "object") {
            for (let [n, o] of Object.entries(t[e])) r.push({
                __key__: n,
                ...o || {}
            });
            t[e] = r
        }
    }

    function mb(t, e) {
        let r = {};
        if (Array.isArray(t[e])) {
            for (let n of t[e]) r[n.__key__] = n, delete n.__key__;
            t[e] = r
        }
    }
    async function gb(t, {
        question: e,
        type: r,
        cid: n,
        historyMsg: o,
        model: a,
        pluginIds: i,
        forceSearch: s,
        autoSearch: c,
        filterSearchHistory: u,
        from: f,
        promptKey: l
    }) {
        let d = await Lr(),
            p;
        if (d.provider === "chatgpt") {
            let b = await be({
                onRefresh: () => t.postMessage({
                    event: "GUARD_TAB_REFRESHING"
                }),
                throwGuideError: !0
            });
            p = new Wr(b)
        } else if (d.provider === "gpt3") {
            let {
                apiKey: b,
                enableCustomURL: g,
                customURL: h,
                model: S
            } = d.configs.gpt3, y = g && h ? h : "";
            p = new gn(b, S || Dn, y)
        } else if (d.provider === "siderApi") p = new hn(n);
        else throw new Error(`Unknown provider ${d.provider}`);
        let m = () => {},
            v = new AbortController;
        t.onDisconnect.addListener(() => {
            v.abort(), m?.()
        }), await p.generateAnswer({
            prompt: e,
            type: r,
            signal: v.signal,
            historyMsg: o,
            pluginIds: i,
            onEvent(b) {
                if (b.type === "done") {
                    t.postMessage({
                        event: "DONE"
                    });
                    return
                }
                t.postMessage(b.data)
            },
            getCleanupMethod(b) {
                m = b
            },
            forceSearch: s,
            autoSearch: c,
            filterSearchHistory: u,
            from: f,
            promptKey: l,
            model: a
        })
    }
    var hb = async t => {
        let e = await ie("webAppModelsLastUpdateTime"),
            r = await ie("webAppModels");
        if (t || !r || !e || e - Date.now() > 1e3 * 60 * 60 * 24) return Vs().then(n => P.default.storage.local.set({
            webAppModels: n.models,
            webAppModelsLastUpdateTime: Date.now()
        }))
    }, yb = () => zl().then(async t => {
        if (t.data) {
            let e = t.data.filter(o => o.id.startsWith("gpt-3.5") || o.id.startsWith("gpt-4")).map(o => ({
                    name: o.id
                })),
                r = await ie("provider:gpt3"),
                n = {
                    apiModels: e
                };
            return r && r.model && (e.find(o => o.name === r.model) || (n["provider:gpt3"] = {
                ...r,
                model: Dn
            })), P.default.storage.local.set(n)
        } else return t.error?.message || "error"
    });

    function lf(t) {
        jn({
            target: {
                tabId: t
            },
            files: ["content-all.js"]
        }).catch(e => {}), jn({
            target: {
                tabId: t,
                allFrames: !0
            },
            files: ["all-frames.js"]
        }).catch(e => {})
    }
    P.default.runtime.onConnect.addListener(t => {
        t.onMessage.addListener(async e => {
            if (e.type == "chat") try {
                await Wl(t, e.data)
            } catch (r) {
                t.postMessage({
                    type: "chat-answer-error",
                    text: r.toString(),
                    error: r
                })
            } else try {
                await gb(t, {
                    question: e.question,
                    type: e.type,
                    cid: e.cid,
                    historyMsg: e.historyMsg,
                    model: e.model,
                    pluginIds: e.pluginIds,
                    autoSearch: e.autoSearch,
                    forceSearch: e.forceSearch,
                    filterSearchHistory: e.filterSearchHistory,
                    from: e.from,
                    promptKey: e.promptKey
                })
            } catch (r) {
                t.postMessage({
                    error: r.message
                })
            }
        })
    });
    var vb = Pt(async () => {
            let {
                __LAST_REFRESH_DISPLAY_DATA__: t
            } = await J({
                __LAST_REFRESH_DISPLAY_DATA__: 0
            });
            if (Date.now() - t < 6e4) return;
            let e = await et();
            C.getVipInfo(), e && C.getInviteRewardCount(), B({
                __LAST_REFRESH_DISPLAY_DATA__: Date.now()
            })
        }, 6e4),
        bb = ee(vb, 2e3, {
            leading: !0
        }),
        vn = !1;
    P.default.runtime.onMessage.addListener(async (t, e) => {
        let r = Ns(t, e);
        if (r) return r;
        switch (t.type) {
            case "FEEDBACK": {
                let n = await ao();
                await Ks(n, t.data);
                break
            }
            case "OPEN_OPTIONS_PAGE": {
                Qi(t.section, t.hash);
                break
            }
            case "GET_ACCESS_TOKEN":
                return ao();
            case "SEND_CHATGPT":
                return $r({
                    prompt: t.promt
                });
            case "IS_CHAT_LOGIN":
                return ns().then(n => {
                    e.tab?.id && P.default.tabs.sendMessage(e.tab.id, {
                        type: "CHAT_LOGIN_STATE",
                        value: n
                    }), P.default.runtime.sendMessage({
                        type: "CHAT_LOGIN_STATE",
                        value: n
                    })
                });
            case "POPUP_OPEN":
                return dr(t.isShow);
            case "OPEN_URL_IN_NEW_TAB":
                return P.default.tabs.create(t.details);
            case "OPEN_URL": {
                P.default.tabs.create({
                    url: t.url
                });
                break
            }
            case "UPDATE_TAB":
                return Ji(t.queryInfo, t.updateDetails);
            case "RELOAD_TAB":
                return Yi(t.queryInfo);
            case "GET_CHATGPT_MODELS":
                return hb(t.isForce);
            case "GET_API_MODELS":
                return yb();
            case "GET_COOKIE":
                try {
                    let n = await P.default.cookies.get(t.data);
                    return n?.value ? decodeURIComponent(n.value) : ""
                } catch (n) {
                    return Promise.reject(n)
                }
            case "SET_COOKIE":
                try {
                    return await P.default.cookies.set(t.data)
                } catch (n) {
                    return Promise.reject(n)
                }
            case "SET_PROMPT_BY_I18N": {
                if (t.tplType === "search") return tf(t.translation);
                if (t.tplType === "sidebar") return rf(t.translation, t.prevTranslation);
                break
            }
            case "USER_LOGIN": {
                vn || (C.getUserInfo(), C.getVipInfo(), aa(), ff(), vn = !0);
                break
            }
            case "USER_LOGOUT": {
                vn && (C.getVipInfo(), vn = !1);
                break
            }
            case "PULL_SETTINGS_FROM_CLOUD": {
                cf();
                break
            }
            case "REFRESH_DISPALY_DATA": {
                bb();
                break
            }
            case "REFRESH_VIP_INFO": {
                Ze(async () => {
                    if (!(await C.getVipInfo()).isVIP) throw new Error("")
                }, 2e3);
                break
            }
            case "CONTINUE_IN_CHAT": {
                P.default.runtime.sendMessage({
                    type: "is-sidepanel-open"
                }).then(n => {
                    if (n) return P.default.runtime.sendMessage({
                        ...t,
                        type: "DO_CONTINUE_IN_CHAT"
                    });
                    P.default.tabs.sendMessage(e.tab?.id, {
                        ...t,
                        type: "DO_CONTINUE_IN_CHAT"
                    })
                }).catch(() => {
                    P.default.tabs.sendMessage(e.tab?.id, {
                        ...t,
                        type: "DO_CONTINUE_IN_CHAT"
                    })
                });
                return
            }
            case "CHECK_PINNED":
                return !!(await P.default.action.getUserSettings())?.isOnToolbar;
            case "OPEN_CHAT_PAGE": {
                Un("", () => {
                    P.default.runtime.sendMessage({
                        type: "switchChat",
                        data: {
                            contact: t.contact || "chat",
                            conversation: t.currentCid
                        }
                    })
                }, () => B({
                    activeConversation: {
                        contact: t.contact || "chat",
                        conversation: t.currentCid
                    }
                }));
                break
            }
            case "QUERY_SELECTION":
                return P.default.tabs.sendMessage(t.tabId || e.tab?.id, {
                    type: "query-selection",
                    selectionText: t.selectionText
                });
            case "TOGGLE_HOST_TRANSLATOR_FAB":
                return wb(t, e);
            case "TOGGLE_SIDEBAR": {
                dr(t.isShow);
                break
            }
            case "GUARD_CHATGPT_TAB": {
                Js();
                break
            }
            case "TOGGLE_TRANSLATOR":
                P.default.tabs.sendMessage(t.tabId || e.tab?.id, {
                    type: "toggle-translator"
                });
                break;
            case "GO_LOGIN": {
                us();
                break
            }
            case "GO_INVITE": {
                ls();
                break
            }
            case "GET_INVITE_LINK":
                return C.createInviteLink();
            case "chat-get-chatGPT-models":
                return await dn.getModels();
            case "GET_CHATGPT_PLUGINS":
                return _b();
            case "REMOVE_SELECTION": {
                let n = await Rr();
                n?.id && P.default.tabs.sendMessage(n.id, {
                    type: "remove-selection"
                });
                break
            }
            case "SEND_TO_CURRENT_TAB": {
                let n = await Rr();
                n?.id && P.default.tabs.sendMessage(n.id, t.data);
                break
            }
            case "CAN_INSERT_CHANGED": {
                let n = await Rr();
                n?.id && P.default.tabs.sendMessage(n.id, t);
                break
            }
            default:
                break
        }
    });
    It("sider-image-creator-text-to-image", ({
        data: t
    }) => Yl(t));
    It("sider-image-creator-image-to-image", ({
        data: t
    }) => Ql(t));
    It("sider-image-creator-image-to-image-upscale", ({
        data: t
    }) => Xl(t));
    It("sider-image-creator-get-signed-cookie", () => Zl());
    It("sider-image-creator-get-engine-list", () => ef());
    chrome && chrome.sidePanel && !/Edg/.test(navigator.userAgent) && chrome.sidePanel.setPanelBehavior({
        openPanelOnActionClick: !0
    }).catch(t => {});
    P.default.runtime.onInstalled.addListener(async t => {
        if (t.reason === "install" && (Zo(), setTimeout(() => {
                P.default.tabs.create({
                    url: "setup.html"
                })
            }, 200), P.default.storage.local.set({
                installedAt: Date.now(),
                installedFirstVersion: P.default.runtime.getManifest().version
            })), (t.reason === "install" || t.reason === "update") && P.default.tabs.query({
                active: !0,
                currentWindow: !0
            }).then(e => {
                let r = e[0].id;
                P.default.tabs.sendMessage(r, {
                    type: "check"
                }).catch(n => {
                    lf(r)
                })
            }), t.reason === "install") {
            ff();
            let r = (await P.default.cookies.getAll({
                url: $.origin
            })).reduce((n, o) => (o.name === "source" ? n.source = o.value : o.name === "p1" ? n.p1 = o.value : o.name === "p2" && (n.p2 = o.value), n), {
                source: "",
                action: "install-sider-successfully",
                p1: "",
                p2: ""
            });
            C.adAction(r)
        }
    });
    P.default.tabs.onActivated.addListener(t => {
        let e = t.tabId;
        P.default.tabs.sendMessage(e, {
            type: "check"
        }).catch(r => {
            lf(e)
        })
    });
    P.default.contextMenus.create({
        contexts: ["selection"],
        id: "query-selection",
        title: "Ask ChatGPT"
    });
    P.default.contextMenus.onClicked.addListener((t, e) => {
        switch (t.menuItemId) {
            case "query-selection":
                t.selectionText && e?.id && P.default.tabs.sendMessage(e.id, {
                    type: "query-selection",
                    selectionText: t.selectionText
                }).then(r => {
                    r || $r({
                        prompt: t.selectionText
                    })
                }).catch(() => {
                    $r({
                        prompt: t.selectionText
                    })
                });
                break
        }
    });
    P.default.runtime.onMessageExternal.addListener((t, e, r) => {
        r(!0), dr()
    });

    function xb(t) {
        return t ? t.startsWith("chrome://newtab") || t.startsWith("edge://newtab") ? "newTab" : t.startsWith("edge") ? "edgePage" : t.startsWith("chrome") ? "chromePage" : t.startsWith("https://microsoftedge.microsoft.com/addons") ? "edgeStore" : t.startsWith("https://chrome.google.com/webstore") ? "webstore" : "" : ""
    }
    P.default.action.onClicked.addListener(t => {
        t.status === "loading" ? P.default.runtime.onMessage.addListener(function e(r, n) {
            n.tab && n.tab.id === t.id && r.type === "sidebar-ready" && (P.default.runtime.onMessage.removeListener(e), dr())
        }) : dr()
    });
    async function dr(t) {
        let e = await P.default.tabs.query({
            active: !0,
            currentWindow: !0
        });
        try {
            await P.default.tabs.sendMessage(e[0].id, {
                type: "toggle-sidebar",
                isShow: t
            })
        } catch {
            return Un(xb(e[0].url)), !1
        }
        return {
            action: "close"
        }
    }

    function wb(t, e) {
        Ls({
            translatorHostConfig: ts
        }).then(({
            translatorHostConfig: r
        }) => {
            let n = t.host,
                o = t.favicon;
            try {
                n = n || new URL(e.url || "").host, o = o || e.tab?.favIconUrl || e.url + "/favicon.ico"
            } catch {}
            let a = r[n]?.enable === !1;
            return typeof t.enable == "boolean" && (a = t.enable), r = {
                ...r,
                [n]: {
                    favicon: o,
                    enable: a
                }
            }, a == !0 && delete r[n], P.default.storage.local.set({
                translatorHostConfig: r
            })
        })
    }
    var _b = ee(async function() {
            let r = (await Ws()).items;
            if (Array.isArray(r)) {
                let n = r.map(o => ({
                    id: o.id,
                    logo: o.manifest.logo_url,
                    name: o.manifest.name_for_human,
                    description: o.manifest.description_for_human
                }));
                return P.default.storage.local.set({
                    chatgptPlugins: n
                })
            }
        }, 1e3),
        ff = Pt(async () => {
            let {
                __invited_reward_finish__: t
            } = await J({
                __invited_reward_finish__: !1
            });
            if (t) return;
            if (await et()) {
                let r = await C.inviteFinish();
                r.is_invited && r.is_rewarded && (B({
                    userIsInvited: !0,
                    inviteRewardConfig: {
                        "gpt3.5": r.reward.GPT3Dot5Count,
                        gpt4: r.reward.GPT4Count
                    }
                }), r.already_rewarded || B({
                    __show_invited_reward__: !0
                })), B({
                    __invited_reward_finish__: !0
                })
            }
        }, 1e4);
    of();
    C.getPricingPlan();
})();
