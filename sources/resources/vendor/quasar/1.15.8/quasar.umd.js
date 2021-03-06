/*!
 * Quasar Framework v1.15.8
 * (c) 2015-present Razvan Stoenescu
 * Released under the MIT License.
 */
!(function (t, e) {
 "object" == typeof exports && "undefined" != typeof module ? (module.exports = e(require("vue"))) : "function" == typeof define && define.amd ? define(["vue"], e) : ((t = t || self).Quasar = e(t.Vue));
})(this, function (t) {
 "use strict";
 t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
 var e,
         i = "undefined" == typeof window,
         n = !1,
         s = i,
         o = !1;
 var r = !1 === i && ("ontouchstart" in window || window.navigator.maxTouchPoints > 0);
 function a(t) {
  var o = t.toLowerCase(),
          a = (function (t, e) {
           var i =
                   /(edge|edga|edgios)\/([\w.]+)/.exec(t) ||
                   /(opr)[\/]([\w.]+)/.exec(t) ||
                   /(vivaldi)[\/]([\w.]+)/.exec(t) ||
                   /(chrome|crios)[\/]([\w.]+)/.exec(t) ||
                   /(iemobile)[\/]([\w.]+)/.exec(t) ||
                   /(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(t) ||
                   /(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(t) ||
                   /(firefox|fxios)[\/]([\w.]+)/.exec(t) ||
                   /(webkit)[\/]([\w.]+)/.exec(t) ||
                   /(opera)(?:.*version|)[\/]([\w.]+)/.exec(t) ||
                   /(msie) ([\w.]+)/.exec(t) ||
                   (t.indexOf("trident") >= 0 && /(rv)(?::| )([\w.]+)/.exec(t)) ||
                   (t.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)) ||
                   [];
           return {browser: i[5] || i[3] || i[1] || "", version: i[2] || i[4] || "0", versionNumber: i[4] || i[2] || "0", platform: e[0] || ""};
          })(
          o,
          (function (t) {
           return (
                   /(ipad)/.exec(t) ||
                   /(ipod)/.exec(t) ||
                   /(windows phone)/.exec(t) ||
                   /(iphone)/.exec(t) ||
                   /(kindle)/.exec(t) ||
                   /(silk)/.exec(t) ||
                   /(android)/.exec(t) ||
                   /(win)/.exec(t) ||
                   /(mac)/.exec(t) ||
                   /(linux)/.exec(t) ||
                   /(cros)/.exec(t) ||
                   /(playbook)/.exec(t) ||
                   /(bb)/.exec(t) ||
                   /(blackberry)/.exec(t) ||
                   []
                   );
          })(o)
          ),
          l = {};
  a.browser && ((l[a.browser] = !0), (l.version = a.version), (l.versionNumber = parseInt(a.versionNumber, 10))), a.platform && (l[a.platform] = !0);
  var c = l.android || l.ios || l.bb || l.blackberry || l.ipad || l.iphone || l.ipod || l.kindle || l.playbook || l.silk || l["windows phone"];
  return (
          !0 === c || o.indexOf("mobile") > -1
          ? ((l.mobile = !0), l.edga || l.edgios ? ((l.edge = !0), (a.browser = "edge")) : l.crios ? ((l.chrome = !0), (a.browser = "chrome")) : l.fxios && ((l.firefox = !0), (a.browser = "firefox")))
          : (l.desktop = !0),
          (l.ipod || l.ipad || l.iphone) && (l.ios = !0),
          l["windows phone"] && ((l.winphone = !0), delete l["windows phone"]),
          (l.chrome || l.opr || l.safari || l.vivaldi || (!0 === l.mobile && !0 !== l.ios && !0 !== c)) && (l.webkit = !0),
          (l.rv || l.iemobile) && ((a.browser = "ie"), (l.ie = !0)),
          ((l.safari && l.blackberry) || l.bb) && ((a.browser = "blackberry"), (l.blackberry = !0)),
          l.safari && l.playbook && ((a.browser = "playbook"), (l.playbook = !0)),
          l.opr && ((a.browser = "opera"), (l.opera = !0)),
          l.safari && l.android && ((a.browser = "android"), (l.android = !0)),
          l.safari && l.kindle && ((a.browser = "kindle"), (l.kindle = !0)),
          l.safari && l.silk && ((a.browser = "silk"), (l.silk = !0)),
          l.vivaldi && ((a.browser = "vivaldi"), (l.vivaldi = !0)),
          (l.name = a.browser),
          (l.platform = a.platform),
          !1 === i &&
          (o.indexOf("electron") > -1
                  ? (l.electron = !0)
                  : document.location.href.indexOf("-extension://") > -1
                  ? (l.bex = !0)
                  : (void 0 !== window.Capacitor
                          ? ((l.capacitor = !0), (l.nativeMobile = !0), (l.nativeMobileWrapper = "capacitor"))
                          : (void 0 === window._cordovaNative && void 0 === window.cordova) || ((l.cordova = !0), (l.nativeMobile = !0), (l.nativeMobileWrapper = "cordova")),
                          !0 === r &&
                          !0 === l.mac &&
                          ((!0 === l.desktop && !0 === l.safari) || (!0 === l.nativeMobile && !0 !== l.android && !0 !== l.ios && !0 !== l.ipad)) &&
                          (function (t) {
                           var i;
                           (e = {is: Object.assign({}, t)}), delete t.mac, delete t.desktop;
                           var n = Math.min(window.innerHeight, window.innerWidth) > 414 ? "ipad" : "iphone";
                           Object.assign(t, (((i = {mobile: !0, ios: !0, platform: n})[n] = !0), i));
                          })(l)),
                  !0 === (n = void 0 === l.nativeMobile && void 0 === l.electron && null !== document.querySelector("[data-server-rendered]")) && (s = !0)),
          l
          );
 }
 var l = !0 !== i ? navigator.userAgent || navigator.vendor || window.opera : "",
         c = {has: {touch: !1, webStorage: !1}, within: {iframe: !1}},
         u =
         !1 === i
         ? {
          userAgent: l,
          is: a(l),
          has: {
           touch: r,
           webStorage: (function () {
            try {
             if (window.localStorage)
              return !0;
            } catch (t) {
            }
            return !1;
           })(),
          },
          within: {iframe: window.self !== window.top},
         }
 : c,
         h = {
          install: function (o, r) {
           var a = this;
           !0 === i
                   ? r.server.push(function (t, e) {
                    t.platform = a.parseSSR(e.ssr);
                   })
                   : !0 === n
                   ? (Object.assign(this, u, e, c),
                           r.takeover.push(function (t) {
                            (s = n = !1), Object.assign(t.platform, u), (e = void 0);
                           }),
                           t.util.defineReactive(o, "platform", this))
                   : (Object.assign(this, u), (o.platform = this));
          },
         };
 !0 === i
         ? (h.parseSSR = function (t) {
          var e = t.req.headers["user-agent"] || t.req.headers["User-Agent"] || "";
          return Object.assign({}, u, {userAgent: e, is: a(e)});
         })
         : (o = !0 === u.is.ios && -1 === window.navigator.vendor.toLowerCase().indexOf("apple"));
 var d = {hasPassive: !1, passiveCapture: !0, notPassiveCapture: !0};
 try {
  var p = Object.defineProperty({}, "passive", {
   get: function () {
    Object.assign(d, {hasPassive: !0, passive: {passive: !0}, notPassive: {passive: !1}, passiveCapture: {passive: !0, capture: !0}, notPassiveCapture: {passive: !1, capture: !0}});
   },
  });
  window.addEventListener("qtest", null, p), window.removeEventListener("qtest", null, p);
 } catch (t) {
 }
 function f() {}
 function m(t) {
  return 0 === t.button;
 }
 function v(t) {
  return t.touches && t.touches[0] ? (t = t.touches[0]) : t.changedTouches && t.changedTouches[0] ? (t = t.changedTouches[0]) : t.targetTouches && t.targetTouches[0] && (t = t.targetTouches[0]), {top: t.clientY, left: t.clientX};
 }
 function g(t) {
  if (t.path)
   return t.path;
  if (t.composedPath)
   return t.composedPath();
  for (var e = [], i = t.target; i; ) {
   if ((e.push(i), "HTML" === i.tagName))
    return e.push(document), e.push(window), e;
   i = i.parentElement;
  }
 }
 var _ = 40,
         b = 800;
 function y(t) {
  t.stopPropagation();
 }
 function w(t) {
  !1 !== t.cancelable && t.preventDefault();
 }
 function S(t) {
  !1 !== t.cancelable && t.preventDefault(), t.stopPropagation();
 }
 function x(t, e) {
  if (void 0 !== t && (!0 !== e || !0 !== t.__dragPrevented)) {
   var i =
           !0 === e
           ? function (t) {
            (t.__dragPrevented = !0), t.addEventListener("dragstart", w, d.notPassiveCapture);
           }
   : function (t) {
    delete t.__dragPrevented, t.removeEventListener("dragstart", w, d.notPassiveCapture);
   };
   t.querySelectorAll("a, img").forEach(i);
  }
 }
 function C(t, e) {
  void 0 === e && (e = {});
  var i = e.bubbles;
  void 0 === i && (i = !1);
  var n = e.cancelable;
  void 0 === n && (n = !1);
  try {
   return new CustomEvent(t, {bubbles: i, cancelable: n});
  } catch (e) {
   var s = document.createEvent("Event");
   return s.initEvent(t, i, n), s;
  }
 }
 function k(t, e, i) {
  var n = "__q_" + e + "_evt";
  (t[n] = void 0 !== t[n] ? t[n].concat(i) : i),
          i.forEach(function (e) {
           e[0].addEventListener(e[1], t[e[2]], d[e[3]]);
          });
 }
 function q(t, e) {
  var i = "__q_" + e + "_evt";
  void 0 !== t[i] &&
          (t[i].forEach(function (e) {
           e[0].removeEventListener(e[1], t[e[2]], d[e[3]]);
          }),
                  (t[i] = void 0));
 }
 var T = {
  listenOpts: d,
  leftClick: m,
  middleClick: function (t) {
   return 1 === t.button;
  },
  rightClick: function (t) {
   return 2 === t.button;
  },
  position: v,
  getEventPath: g,
  getMouseWheelDistance: function (t) {
   var e,
           i = t.deltaX,
           n = t.deltaY;
   if ((i || n) && t.deltaMode) {
    var s = 1 === t.deltaMode ? _ : b;
    (i *= s), (n *= s);
   }
   return t.shiftKey && !i && ((n = (e = [i, n])[0]), (i = e[1])), {x: i, y: n};
  },
  stop: y,
  prevent: w,
  stopAndPrevent: S,
  preventDraggable: x,
  create: C,
 };
 function M(t, e, i) {
  var n;
  function s() {
   var s = this,
           o = arguments;
   clearTimeout(n),
           !0 === i && void 0 === n && t.apply(this, o),
           (n = setTimeout(function () {
            (n = void 0), !0 !== i && t.apply(s, o);
           }, e));
  }
  return (
          void 0 === e && (e = 250),
          (s.cancel = function () {
           clearTimeout(n);
          }),
          s
          );
 }
 var $ = ["sm", "md", "lg", "xl"],
         L = d.passive,
         O = {
          width: 0,
          height: 0,
          name: "xs",
          sizes: {sm: 600, md: 1024, lg: 1440, xl: 1920},
          lt: {sm: !0, md: !0, lg: !0, xl: !0},
          gt: {xs: !1, sm: !1, md: !1, lg: !1},
          xs: !0,
          sm: !1,
          md: !1,
          lg: !1,
          xl: !1,
          setSizes: f,
          setDebounce: f,
          install: function (e, s, o) {
           var r = this;
           if (!0 !== i) {
            var a,
                    l = void 0 !== o.screen && !0 === o.screen.bodyClasses,
                    c = function (t) {
                     var e = window.innerWidth,
                             i = window.innerHeight;
                     if ((i !== r.height && (r.height = i), e !== r.width))
                      r.width = e;
                     else if (!0 !== t)
                      return;
                     var n = r.sizes;
                     (r.gt.xs = e >= n.sm),
                             (r.gt.sm = e >= n.md),
                             (r.gt.md = e >= n.lg),
                             (r.gt.lg = e >= n.xl),
                             (r.lt.sm = e < n.sm),
                             (r.lt.md = e < n.md),
                             (r.lt.lg = e < n.lg),
                             (r.lt.xl = e < n.xl),
                             (r.xs = r.lt.sm),
                             (r.sm = !0 === r.gt.xs && !0 === r.lt.md),
                             (r.md = !0 === r.gt.sm && !0 === r.lt.lg),
                             (r.lg = !0 === r.gt.md && !0 === r.lt.xl),
                             (r.xl = r.gt.lg),
                             (n = (!0 === r.xs ? "xs" : !0 === r.sm && "sm") || (!0 === r.md && "md") || (!0 === r.lg && "lg") || "xl") !== r.name &&
                             (!0 === l && (document.body.classList.remove("screen--" + r.name), document.body.classList.add("screen--" + n)), (r.name = n));
                    },
                    u = {},
                    h = 16;
            (this.setSizes = function (t) {
             $.forEach(function (e) {
              void 0 !== t[e] && (u[e] = t[e]);
             });
            }),
                    (this.setDebounce = function (t) {
                     h = t;
                    });
            var d = function () {
             var t = getComputedStyle(document.body),
                     e = void 0 !== window.visualViewport ? window.visualViewport : window;
             t.getPropertyValue("--q-size-sm") &&
                     $.forEach(function (e) {
                      r.sizes[e] = parseInt(t.getPropertyValue("--q-size-" + e), 10);
                     }),
                     (r.setSizes = function (t) {
                      $.forEach(function (e) {
                       t[e] && (r.sizes[e] = t[e]);
                      }),
                              c(!0);
                     }),
                     (r.setDebounce = function (t) {
                      void 0 !== a && e.removeEventListener("resize", a, L), (a = t > 0 ? M(c, t) : c), e.addEventListener("resize", a, L);
                     }),
                     r.setDebounce(h),
                     Object.keys(u).length > 0 ? (r.setSizes(u), (u = void 0)) : c(),
                     !0 === l && "xs" === r.name && document.body.classList.add("screen--xs");
            };
            !0 === n ? s.takeover.push(d) : d(), t.util.defineReactive(e, "screen", this);
           } else
            e.screen = this;
          },
         },
         B = {
          isActive: !1,
          mode: !1,
          install: function (e, s, o) {
           var r = this,
                   a = o.dark;
           if (((this.isActive = !0 === a), !0 === i))
            return (
                    s.server.push(function (t, e) {
                     (t.dark = {
                      isActive: !1,
                      mode: !1,
                      set: function (i) {
                       (e.ssr.Q_BODY_CLASSES = e.ssr.Q_BODY_CLASSES.replace(" body--light", "").replace(" body--dark", "") + " body--" + (!0 === i ? "dark" : "light")), (t.dark.isActive = !0 === i), (t.dark.mode = i);
                      },
                      toggle: function () {
                       t.dark.set(!1 === t.dark.isActive);
                      },
                     }),
                             t.dark.set(a);
                    }),
                    void (this.set = f)
                    );
           var l = void 0 !== a && a;
           if (!0 === n) {
            var c = function (t) {
             r.__fromSSR = t;
            },
                    u = this.set;
            (this.set = c),
                    c(l),
                    s.takeover.push(function () {
                     (r.set = u), r.set(r.__fromSSR);
                    });
           } else
            this.set(l);
           t.util.defineReactive(this, "isActive", this.isActive), t.util.defineReactive(e, "dark", this);
          },
          set: function (t) {
           var e = this;
           (this.mode = t),
                   "auto" === t
                   ? (void 0 === this.__media &&
                           ((this.__media = window.matchMedia("(prefers-color-scheme: dark)")),
                                   (this.__updateMedia = function () {
                                    e.set("auto");
                                   }),
                                   this.__media.addListener(this.__updateMedia)),
                           (t = this.__media.matches))
                   : void 0 !== this.__media && (this.__media.removeListener(this.__updateMedia), (this.__media = void 0)),
                   (this.isActive = !0 === t),
                   document.body.classList.remove("body--" + (!0 === t ? "light" : "dark")),
                   document.body.classList.add("body--" + (!0 === t ? "dark" : "light"));
          },
          toggle: function () {
           B.set(!1 === B.isActive);
          },
          __media: void 0,
         },
         E = function () {
          return !0;
         };
 function P(t) {
  return "string" == typeof t && "" !== t && "/" !== t && "#/" !== t;
 }
 function z(t) {
  return !0 === t.startsWith("#") && (t = t.substr(1)), !1 === t.startsWith("/") && (t = "/" + t), !0 === t.endsWith("/") && (t = t.substr(0, t.length - 1)), "#" + t;
 }
 var A = {
  __history: [],
  add: f,
  remove: f,
  install: function (t) {
   var e = this;
   if (!0 !== i) {
    var n = u.is,
            s = n.cordova,
            o = n.capacitor;
    if (!0 === s || !0 === o) {
     var r = t[!0 === s ? "cordova" : "capacitor"];
     if ((void 0 === r || !1 !== r.backButton) && (!0 !== o || (void 0 !== window.Capacitor && void 0 !== window.Capacitor.Plugins.App))) {
      (this.add = function (t) {
       void 0 === t.condition && (t.condition = E), e.__history.push(t);
      }),
              (this.remove = function (t) {
               var i = e.__history.indexOf(t);
               i >= 0 && e.__history.splice(i, 1);
              });
      var a = (function (t) {
       if (!1 === t.backButtonExit)
        return function () {
         return !1;
        };
       if ("*" === t.backButtonExit)
        return E;
       var e = ["#/"];
       return (
               !0 === Array.isArray(t.backButtonExit) && e.push.apply(e, t.backButtonExit.filter(P).map(z)),
               function () {
                return e.includes(window.location.hash);
               }
       );
      })(Object.assign({backButtonExit: !0}, r)),
              l = function () {
               if (e.__history.length) {
                var t = e.__history[e.__history.length - 1];
                !0 === t.condition() && (e.__history.pop(), t.handler());
               } else
                !0 === a() ? navigator.app.exitApp() : window.history.back();
              };
      !0 === s
              ? document.addEventListener("deviceready", function () {
               document.addEventListener("backbutton", l, !1);
              })
              : window.Capacitor.Plugins.App.addListener("backButton", l);
     }
    }
   }
  },
 },
         D = {
          isoName: "en-us",
          nativeName: "English (US)",
          label: {clear: "Clear", ok: "OK", cancel: "Cancel", close: "Close", set: "Set", select: "Select", reset: "Reset", remove: "Remove", update: "Update", create: "Create", search: "Search", filter: "Filter", refresh: "Refresh"},
          date: {
           days: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
           daysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
           months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
           monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
           firstDayOfWeek: 0,
           format24h: !1,
           pluralDay: "days",
          },
          table: {
           noData: "No data available",
           noResults: "No matching records found",
           loading: "Loading...",
           selectedRecords: function (t) {
            return 1 === t ? "1 record selected." : (0 === t ? "No" : t) + " records selected.";
           },
           recordsPerPage: "Records per page:",
           allRows: "All",
           pagination: function (t, e, i) {
            return t + "-" + e + " of " + i;
           },
           columns: "Columns",
          },
          editor: {
           url: "URL",
           bold: "Bold",
           italic: "Italic",
           strikethrough: "Strikethrough",
           underline: "Underline",
           unorderedList: "Unordered List",
           orderedList: "Ordered List",
           subscript: "Subscript",
           superscript: "Superscript",
           hyperlink: "Hyperlink",
           toggleFullscreen: "Toggle Fullscreen",
           quote: "Quote",
           left: "Left align",
           center: "Center align",
           right: "Right align",
           justify: "Justify align",
           print: "Print",
           outdent: "Decrease indentation",
           indent: "Increase indentation",
           removeFormat: "Remove formatting",
           formatting: "Formatting",
           fontSize: "Font Size",
           align: "Align",
           hr: "Insert Horizontal Rule",
           undo: "Undo",
           redo: "Redo",
           heading1: "Heading 1",
           heading2: "Heading 2",
           heading3: "Heading 3",
           heading4: "Heading 4",
           heading5: "Heading 5",
           heading6: "Heading 6",
           paragraph: "Paragraph",
           code: "Code",
           size1: "Very small",
           size2: "A bit small",
           size3: "Normal",
           size4: "Medium-large",
           size5: "Big",
           size6: "Very big",
           size7: "Maximum",
           defaultFont: "Default Font",
           viewSource: "View Source",
          },
          tree: {noNodes: "No nodes available", noResults: "No matching nodes found"},
         };
 function I() {
  if (!0 !== i) {
   var t = navigator.language || navigator.languages[0] || navigator.browserLanguage || navigator.userLanguage || navigator.systemLanguage;
   return t ? t.toLowerCase() : void 0;
  }
 }
 var R = {
  getLocale: I,
  install: function (e, s, o) {
   var r = this,
           a = o || D;
   (this.set = function (t, s) {
    void 0 === t && (t = D);
    var o = Object.assign({}, t, {rtl: !0 === t.rtl, getLocale: I});
    if (!0 === i) {
     if (void 0 === s)
      return void console.error("SSR ERROR: second param required: Quasar.lang.set(lang, ssrContext)");
     var a = !0 === o.rtl ? "rtl" : "ltr",
             l = "lang=" + o.isoName + " dir=" + a;
     (o.set = s.$q.lang.set), (s.Q_HTML_ATTRS = void 0 !== s.Q_PREV_LANG ? s.Q_HTML_ATTRS.replace(s.Q_PREV_LANG, l) : l), (s.Q_PREV_LANG = l), (s.$q.lang = o);
    } else {
     if (!1 === n) {
      var c = document.documentElement;
      c.setAttribute("dir", !0 === o.rtl ? "rtl" : "ltr"), c.setAttribute("lang", o.isoName);
     }
     (o.set = r.set), (e.lang = r.props = o), (r.isoName = o.isoName), (r.nativeName = o.nativeName);
    }
   }),
           !0 === i
           ? (s.server.push(function (t, e) {
            (t.lang = {}),
                    (t.lang.set = function (t) {
                     r.set(t, e.ssr);
                    }),
                    t.lang.set(a);
           }),
                   (this.isoName = a.isoName),
                   (this.nativeName = a.nativeName),
                   (this.props = a))
           : (t.util.defineReactive(e, "lang", {}), this.set(a));
  },
 },
         F = /^rgb(a)?\((\d{1,3}),(\d{1,3}),(\d{1,3}),?([01]?\.?\d*?)?\)$/;
 function j(t) {
  var e = t.r,
          i = t.g,
          n = t.b,
          s = t.a,
          o = void 0 !== s;
  if (((e = Math.round(e)), (i = Math.round(i)), (n = Math.round(n)), e > 255 || i > 255 || n > 255 || (o && s > 100)))
   throw new TypeError("Expected 3 numbers below 256 (and optionally one below 100)");
  return (s = o ? (256 | Math.round((255 * s) / 100)).toString(16).slice(1) : ""), "#" + (n | (i << 8) | (e << 16) | (1 << 24)).toString(16).slice(1) + s;
 }
 function V(t) {
  var e = t.r,
          i = t.g,
          n = t.b,
          s = t.a;
  return "rgb" + (void 0 !== s ? "a" : "") + "(" + e + "," + i + "," + n + (void 0 !== s ? "," + s / 100 : "") + ")";
 }
 function N(t) {
  if ("string" != typeof t)
   throw new TypeError("Expected a string");
  3 === (t = t.replace(/^#/, "")).length ? (t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2]) : 4 === t.length && (t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2] + t[3] + t[3]);
  var e = parseInt(t, 16);
  return t.length > 6 ? {r: (e >> 24) & 255, g: (e >> 16) & 255, b: (e >> 8) & 255, a: Math.round((255 & e) / 2.55)} : {r: e >> 16, g: (e >> 8) & 255, b: 255 & e};
 }
 function H(t) {
  var e,
          i,
          n,
          s = t.h,
          o = t.s,
          r = t.v,
          a = t.a;
  (o /= 100), (r /= 100), (s /= 360);
  var l = Math.floor(6 * s),
          c = 6 * s - l,
          u = r * (1 - o),
          h = r * (1 - c * o),
          d = r * (1 - (1 - c) * o);
  switch (l % 6) {
   case 0:
    (e = r), (i = d), (n = u);
    break;
   case 1:
    (e = h), (i = r), (n = u);
    break;
   case 2:
    (e = u), (i = r), (n = d);
    break;
   case 3:
    (e = u), (i = h), (n = r);
    break;
   case 4:
    (e = d), (i = u), (n = r);
    break;
   case 5:
    (e = r), (i = u), (n = h);
  }
  return {r: Math.round(255 * e), g: Math.round(255 * i), b: Math.round(255 * n), a: a};
 }
 function Q(t) {
  var e,
          i = t.r,
          n = t.g,
          s = t.b,
          o = t.a,
          r = Math.max(i, n, s),
          a = Math.min(i, n, s),
          l = r - a,
          c = 0 === r ? 0 : l / r,
          u = r / 255;
  switch (r) {
   case a:
    e = 0;
    break;
   case i:
    (e = n - s + l * (n < s ? 6 : 0)), (e /= 6 * l);
    break;
   case n:
    (e = s - i + 2 * l), (e /= 6 * l);
    break;
   case s:
    (e = i - n + 4 * l), (e /= 6 * l);
  }
  return {h: Math.round(360 * e), s: Math.round(100 * c), v: Math.round(100 * u), a: o};
 }
 function W(t) {
  if ("string" != typeof t)
   throw new TypeError("Expected a string");
  var e = t.replace(/ /g, ""),
          i = F.exec(e);
  if (null === i)
   return N(e);
  var n = {r: Math.min(255, parseInt(i[2], 10)), g: Math.min(255, parseInt(i[3], 10)), b: Math.min(255, parseInt(i[4], 10))};
  if (i[1]) {
   var s = parseFloat(i[5]);
   n.a = 100 * Math.min(1, !0 === isNaN(s) ? 1 : s);
  }
  return n;
 }
 function Y(t) {
  if ("string" != typeof t && (!t || void 0 === t.r))
   throw new TypeError("Expected a string or a {r, g, b} object as color");
  var e = "string" == typeof t ? W(t) : t,
          i = e.r / 255,
          n = e.g / 255,
          s = e.b / 255;
  return 0.2126 * (i <= 0.03928 ? i / 12.92 : Math.pow((i + 0.055) / 1.055, 2.4)) + 0.7152 * (n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4)) + 0.0722 * (s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4));
 }
 function U(t, e, i) {
  if ((void 0 === i && (i = document.body), "string" != typeof t))
   throw new TypeError("Expected a string as color");
  if ("string" != typeof e)
   throw new TypeError("Expected a string as value");
  if (!(i instanceof Element))
   throw new TypeError("Expected a DOM element");
  i.style.setProperty("--q-color-" + t, e);
 }
 function K(t, e) {
  if ((void 0 === e && (e = document.body), "string" != typeof t))
   throw new TypeError("Expected a string as color");
  if (!(e instanceof Element))
   throw new TypeError("Expected a DOM element");
  return (
          getComputedStyle(e)
          .getPropertyValue("--q-color-" + t)
          .trim() || null
          );
 }
 var X = {
  rgbToHex: j,
  hexToRgb: N,
  hsvToRgb: H,
  rgbToHsv: Q,
  textToRgb: W,
  lighten: function (t, e) {
   if ("string" != typeof t)
    throw new TypeError("Expected a string as color");
   if ("number" != typeof e)
    throw new TypeError("Expected a numeric percent");
   var i = W(t),
           n = e < 0 ? 0 : 255,
           s = Math.abs(e) / 100,
           o = i.r,
           r = i.g,
           a = i.b;
   return "#" + (16777216 + 65536 * (Math.round((n - o) * s) + o) + 256 * (Math.round((n - r) * s) + r) + (Math.round((n - a) * s) + a)).toString(16).slice(1);
  },
  luminosity: Y,
  brightness: function (t) {
   if ("string" != typeof t && (!t || void 0 === t.r))
    throw new TypeError("Expected a string or a {r, g, b} object as color");
   var e = "string" == typeof t ? W(t) : t;
   return (299 * e.r + 587 * e.g + 114 * e.b) / 1e3;
  },
  blend: function (t, e) {
   if ("string" != typeof t && (!t || void 0 === t.r))
    throw new TypeError("Expected a string or a {r, g, b[, a]} object as fgColor");
   if ("string" != typeof e && (!e || void 0 === e.r))
    throw new TypeError("Expected a string or a {r, g, b[, a]} object as bgColor");
   var i = "string" == typeof t ? W(t) : t,
           n = i.r / 255,
           s = i.g / 255,
           o = i.b / 255,
           r = void 0 !== i.a ? i.a / 100 : 1,
           a = "string" == typeof e ? W(e) : e,
           l = a.r / 255,
           c = a.g / 255,
           u = a.b / 255,
           h = void 0 !== a.a ? a.a / 100 : 1,
           d = r + h * (1 - r),
           p = {r: Math.round(((n * r + l * h * (1 - r)) / d) * 255), g: Math.round(((s * r + c * h * (1 - r)) / d) * 255), b: Math.round(((o * r + u * h * (1 - r)) / d) * 255), a: Math.round(100 * d)};
   return "string" == typeof t ? j(p) : p;
  },
  changeAlpha: function (t, e) {
   if ("string" != typeof t)
    throw new TypeError("Expected a string as color");
   if (void 0 === e || e < -1 || e > 1)
    throw new TypeError("Expected offset to be between -1 and 1");
   var i = W(t),
           n = i.r,
           s = i.g,
           o = i.b,
           r = i.a,
           a = void 0 !== r ? r / 100 : 0;
   return j({r: n, g: s, b: o, a: Math.round(100 * Math.min(1, Math.max(0, a + e)))});
  },
  setBrand: U,
  getBrand: K,
  getPaletteColor: function (t) {
   if ("string" != typeof t)
    throw new TypeError("Expected a string as color");
   var e = document.createElement("div");
   (e.className = "text-" + t + " invisible fixed no-pointer-events"), document.body.appendChild(e);
   var i = getComputedStyle(e).getPropertyValue("color");
   return e.remove(), j(W(i));
  },
 },
         G = !1;
 function Z(t) {
  G = !0 === t.isComposing;
 }
 function J(t) {
  return !0 === G || t !== Object(t) || !0 === t.isComposing || !0 === t.qKeyEvent;
 }
 function tt(t, e) {
  return !0 !== J(t) && [].concat(e).includes(t.keyCode);
 }
 function et(t, e) {
  var i = t.is,
          n = t.has,
          s = t.within,
          o = [!0 === i.desktop ? "desktop" : "mobile", (!1 === n.touch ? "no-" : "") + "touch"];
  if (!0 === i.mobile) {
   var r = (function (t) {
    return !0 === t.ios ? "ios" : !0 === t.android ? "android" : void 0;
   })(i);
   void 0 !== r && o.push("platform-" + r);
  }
  if (!0 === i.nativeMobile) {
   var a = i.nativeMobileWrapper;
   o.push(a), o.push("native-mobile"), !0 !== i.ios || (void 0 !== e[a] && !1 === e[a].iosStatusBarPadding) || o.push("q-ios-padding");
  } else
   !0 === i.electron ? o.push("electron") : !0 === i.bex && o.push("bex");
  return !0 === s.iframe && o.push("within-iframe"), o;
 }
 var it = {
  install: function (t, s) {
   if (!0 !== i) {
    if (!0 === n)
     (r = document.body.className),
             (a = r),
             void 0 !== e && (a = a.replace("desktop", "platform-ios mobile")),
             !0 === u.has.touch && (a = a.replace("no-touch", "touch")),
             !0 === u.within.iframe && (a += " within-iframe"),
             r !== a && (document.body.className = a);
    else {
     var o = et(u, s);
     !0 === u.is.ie && 11 === u.is.versionNumber
             ? o.forEach(function (t) {
              return document.body.classList.add(t);
             })
             : document.body.classList.add.apply(document.body.classList, o);
    }
    var r, a;
    void 0 !== s.brand &&
            (function (t) {
             for (var e in t)
              U(e, t[e]);
            })(s.brand),
            !0 === u.is.ios && document.body.addEventListener("touchstart", f),
            window.addEventListener("keydown", Z, !0);
   } else
    t.server.push(function (t, e) {
     var i = et(t.platform, s),
             n = e.ssr.setBodyClasses;
     void 0 !== s.screen && !0 === s.screen.bodyClass && i.push("screen--xs"), "function" == typeof n ? n(i) : (e.ssr.Q_BODY_CLASSES = i.join(" "));
    });
  },
 },
         nt = {
          name: "material-icons",
          type: {positive: "check_circle", negative: "warning", info: "info", warning: "priority_high"},
          arrow: {up: "arrow_upward", right: "arrow_forward", down: "arrow_downward", left: "arrow_back", dropdown: "arrow_drop_down"},
          chevron: {left: "chevron_left", right: "chevron_right"},
          colorPicker: {spectrum: "gradient", tune: "tune", palette: "style"},
          pullToRefresh: {icon: "refresh"},
          carousel: {left: "chevron_left", right: "chevron_right", up: "keyboard_arrow_up", down: "keyboard_arrow_down", navigationIcon: "lens"},
          chip: {remove: "cancel", selected: "check"},
          datetime: {arrowLeft: "chevron_left", arrowRight: "chevron_right", now: "access_time", today: "today"},
          editor: {
           bold: "format_bold",
           italic: "format_italic",
           strikethrough: "strikethrough_s",
           underline: "format_underlined",
           unorderedList: "format_list_bulleted",
           orderedList: "format_list_numbered",
           subscript: "vertical_align_bottom",
           superscript: "vertical_align_top",
           hyperlink: "link",
           toggleFullscreen: "fullscreen",
           quote: "format_quote",
           left: "format_align_left",
           center: "format_align_center",
           right: "format_align_right",
           justify: "format_align_justify",
           print: "print",
           outdent: "format_indent_decrease",
           indent: "format_indent_increase",
           removeFormat: "format_clear",
           formatting: "text_format",
           fontSize: "format_size",
           align: "format_align_left",
           hr: "remove",
           undo: "undo",
           redo: "redo",
           heading: "format_size",
           code: "code",
           size: "format_size",
           font: "font_download",
           viewSource: "code",
          },
          expansionItem: {icon: "keyboard_arrow_down", denseIcon: "arrow_drop_down"},
          fab: {icon: "add", activeIcon: "close"},
          field: {clear: "cancel", error: "error"},
          pagination: {first: "first_page", prev: "keyboard_arrow_left", next: "keyboard_arrow_right", last: "last_page"},
          rating: {icon: "grade"},
          stepper: {done: "check", active: "edit", error: "warning"},
          tabs: {left: "chevron_left", right: "chevron_right", up: "keyboard_arrow_up", down: "keyboard_arrow_down"},
          table: {arrowUp: "arrow_upward", warning: "warning", firstPage: "first_page", prevPage: "chevron_left", nextPage: "chevron_right", lastPage: "last_page"},
          tree: {icon: "play_arrow"},
          uploader: {done: "done", clear: "clear", add: "add_box", upload: "cloud_upload", removeQueue: "clear_all", removeUploaded: "done_all"},
         },
         st = {
          install: function (e, n, s) {
           var o = this,
                   r = s || nt;
           (this.set = function (t, n) {
            var s = Object.assign({}, t);
            if (!0 === i) {
             if (void 0 === n)
              return void console.error("SSR ERROR: second param required: Quasar.iconSet.set(iconSet, ssrContext)");
             (s.set = n.$q.iconSet.set), (n.$q.iconSet = s);
            } else
             (s.set = o.set), (e.iconSet = s);
           }),
                   !0 === i
                   ? n.server.push(function (t, e) {
                    (t.iconSet = {}),
                            (t.iconSet.set = function (t) {
                             o.set(t, e.ssr);
                            }),
                            t.iconSet.set(r);
                   })
                   : (t.util.defineReactive(e, "iconMapFn", void 0), t.util.defineReactive(e, "iconSet", {}), this.set(r));
          },
         },
         ot = [h, O, B],
         rt = {server: [], takeover: []},
         at = {version: "1.15.8", config: {}};
 var lt = ["B", "KB", "MB", "GB", "TB", "PB"];
 function ct(t) {
  for (var e = 0; parseInt(t, 10) >= 1024 && e < lt.length - 1; )
   (t /= 1024), ++e;
  return "" + t.toFixed(1) + lt[e];
 }
 function ut(t) {
  return t.charAt(0).toUpperCase() + t.slice(1);
 }
 function ht(t, e, i) {
  return i <= e ? e : Math.min(i, Math.max(e, t));
 }
 function dt(t, e, i) {
  if (i <= e)
   return e;
  var n = i - e + 1,
          s = e + ((t - e) % n);
  return s < e && (s = n + s), 0 === s ? 0 : s;
 }
 function pt(t, e, i) {
  if ((void 0 === e && (e = 2), void 0 === i && (i = "0"), void 0 === t || null === t))
   return t;
  var n = "" + t;
  return n.length >= e ? n : new Array(e - n.length + 1).join(i) + n;
 }
 var ft = {humanStorageSize: ct, capitalize: ut, between: ht, normalizeToInterval: dt, pad: pt};
 function mt(t, e, n) {
  if (!0 === i)
   return n;
  var s = "__qcache_" + e;
  return void 0 === t[s] ? (t[s] = n) : t[s];
 }
 function vt(t, e, n) {
  if (!0 === i)
   return n();
  var s = "__qcache_" + e;
  return void 0 === t[s] ? (t[s] = n()) : t[s];
 }
 function gt(t, e) {
  var i;
  return {
   data: function () {
    var i,
            n = {},
            s = this[t];
    for (var o in s)
     n[o] = s[o];
    return ((i = {})[e] = n), i;
   },
   watch:
           ((i = {}),
                   (i[t] = function (t, i) {
                    var n = this[e];
                    if (void 0 !== i)
                     for (var s in i)
                      void 0 === t[s] && this.$delete(n, s);
                    for (var o in t)
                     n[o] !== t[o] && this.$set(n, o, t[o]);
                   }),
                   i),
  };
 }
 var _t = {"aria-hidden": "true"},
         bt = gt("$attrs", "qAttrs"),
         yt = i ? null : XMLHttpRequest,
         wt = i ? null : yt.prototype.send,
         St = [],
         xt = [],
         Ct = 0;
 var kt = t.extend({
  name: "QAjaxBar",
  props: {
   position: {
    type: String,
    default: "top",
    validator: function (t) {
     return ["top", "right", "bottom", "left"].includes(t);
    },
   },
   size: {type: String, default: "2px"},
   color: String,
   skipHijack: Boolean,
   reverse: Boolean,
  },
  data: function () {
   return {calls: 0, progress: 0, onScreen: !1, animate: !0};
  },
  computed: {
   classes: function () {
    return "q-loading-bar q-loading-bar--" + this.position + (void 0 !== this.color ? " bg-" + this.color : "") + (!0 === this.animate ? "" : " no-transition");
   },
   style: function () {
    var t = this.onScreen,
            e = (function (t) {
             var e = t.p,
                     i = t.pos,
                     n = t.active,
                     s = t.horiz,
                     o = t.reverse,
                     r = t.dir,
                     a = 1,
                     l = 1;
             return s
                     ? (o && (a = -1), "bottom" === i && (l = -1), {transform: "translate3d(" + a * (e - 100) + "%," + (n ? 0 : -200 * l) + "%,0)"})
                     : (o && (l = -1), "right" === i && (a = -1), {transform: "translate3d(" + (n ? 0 : r * a * -200) + "%," + l * (e - 100) + "%,0)"});
            })({
     p: this.progress,
     pos: this.position,
     active: t,
     horiz: this.horizontal,
     reverse: !0 === this.$q.lang.rtl && ["top", "bottom"].includes(this.position) ? !this.reverse : this.reverse,
     dir: !0 === this.$q.lang.rtl ? -1 : 1,
    });
    return (e[this.sizeProp] = this.size), (e.opacity = t ? 1 : 0), e;
   },
   horizontal: function () {
    return "top" === this.position || "bottom" === this.position;
   },
   sizeProp: function () {
    return this.horizontal ? "height" : "width";
   },
   attrs: function () {
    return !0 === this.onScreen ? {role: "progressbar", "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": this.progress} : _t;
   },
  },
  methods: {
   start: function (t) {
    var e = this;
    void 0 === t && (t = 300);
    var i = this.speed;
    (this.speed = Math.max(0, t) || 0),
            this.calls++,
            this.calls > 1
            ? 0 === i && t > 0
            ? this.__work()
            : i > 0 && t <= 0 && clearTimeout(this.timer)
            : (clearTimeout(this.timer),
                    this.$emit("start"),
                    (this.progress = 0),
                    !0 !== this.onScreen &&
                    ((this.onScreen = !0),
                            (this.animate = !1),
                            (this.timer = setTimeout(function () {
                             (e.animate = !0), t > 0 && e.__work();
                            }, 100))));
   },
   increment: function (t) {
    this.calls > 0 &&
            (this.progress = (function (t, e) {
             return "number" != typeof e && (e = t < 25 ? 3 * Math.random() + 3 : t < 65 ? 3 * Math.random() : t < 85 ? 2 * Math.random() : t < 99 ? 0.6 : 0), ht(t + e, 0, 100);
            })(this.progress, t));
   },
   stop: function () {
    var t = this;
    if (((this.calls = Math.max(0, this.calls - 1)), !(this.calls > 0))) {
     clearTimeout(this.timer), this.$emit("stop");
     var e = function () {
      (t.animate = !0),
              (t.progress = 100),
              (t.timer = setTimeout(function () {
               t.onScreen = !1;
              }, 1e3));
     };
     0 === this.progress ? (this.timer = setTimeout(e, 1)) : e();
    }
   },
   __work: function () {
    var t = this;
    this.progress < 100 &&
            (this.timer = setTimeout(function () {
             t.increment(), t.__work();
            }, this.speed));
   },
  },
  mounted: function () {
   !0 !== this.skipHijack &&
           ((this.hijacked = !0),
                   (function (t, e) {
                    function i() {
                     xt.forEach(function (t) {
                      t();
                     });
                    }
                    St.push(t),
                            xt.push(e),
                            ++Ct > 1 ||
                            (yt.prototype.send = function () {
                             St.forEach(function (t) {
                              t();
                             }),
                                     this.addEventListener("loadend", i, !1),
                                     wt.apply(this, arguments);
                            });
                   })(this.start, this.stop));
  },
  beforeDestroy: function () {
   var t, e;
   clearTimeout(this.timer), !0 === this.hijacked && ((t = this.start), (e = this.stop), St.splice(St.indexOf(t), 1), xt.splice(xt.indexOf(e), 1), (Ct = Math.max(0, Ct - 1)) || (yt.prototype.send = wt));
  },
  render: function (t) {
   return t("div", {class: this.classes, style: this.style, attrs: this.attrs});
  },
 }),
         qt = {xs: 18, sm: 24, md: 32, lg: 38, xl: 46};
 function Tt(t) {
  return {
   props: {size: String},
   computed: {
    sizeStyle: function () {
     if (void 0 !== this.size)
      return {fontSize: this.size in t ? t[this.size] + "px" : this.size};
    },
   },
  };
 }
 var Mt = Tt(qt),
         $t = {props: {tag: {type: String, default: "div"}}},
         Lt = gt("$listeners", "qListeners");
 function Ot(t, e, i) {
  return void 0 !== t.$scopedSlots[e] ? t.$scopedSlots[e]() : i;
 }
 function Bt(t, e, i) {
  return void 0 !== t.$scopedSlots[e] ? t.$scopedSlots[e]().slice() : i;
 }
 function Et(t, e, i) {
  return void 0 !== e.$scopedSlots[i] ? t.concat(e.$scopedSlots[i]()) : t;
 }
 function Pt(t, e, i) {
  if (void 0 === e.$scopedSlots[i])
   return t;
  var n = e.$scopedSlots[i]();
  return void 0 !== t ? t.concat(n) : n;
 }
 var zt = t.extend({
  name: "QIcon",
  mixins: [Lt, Mt, $t],
  props: {tag: {default: "i"}, name: String, color: String, left: Boolean, right: Boolean},
  computed: {
   classes: function () {
    return "q-icon notranslate" + (!0 === this.left ? " on-left" : "") + (!0 === this.right ? " on-right" : "") + (void 0 !== this.color ? " text-" + this.color : "");
   },
   type: function () {
    var t,
            e = this,
            i = this.name;
    if (!i)
     return {none: !0, cls: this.classes};
    if (void 0 !== this.$q.iconMapFn) {
     var n = this.$q.iconMapFn(i);
     if (void 0 !== n) {
      if (void 0 === n.icon)
       return {cls: n.cls + " " + this.classes, content: void 0 !== n.content ? n.content : " "};
      i = n.icon;
     }
    }
    if (!0 === i.startsWith("M")) {
     var s = i.split("|"),
             o = s[0],
             r = s[1];
     return {
      svg: !0,
      cls: this.classes,
      nodes: o.split("&&").map(function (t) {
       var i = t.split("@@"),
               n = i[0],
               s = i[1],
               o = i[2];
       return e.$createElement("path", {attrs: {d: n, transform: o}, style: s});
      }),
      viewBox: void 0 !== r ? r : "0 0 24 24",
     };
    }
    if (!0 === i.startsWith("img:"))
     return {img: !0, cls: this.classes, src: i.substring(4)};
    if (!0 === i.startsWith("svguse:")) {
     var a = i.split("|"),
             l = a[0],
             c = a[1];
     return {svguse: !0, cls: this.classes, src: l.substring(7), viewBox: void 0 !== c ? c : "0 0 24 24"};
    }
    var u = " ";
    return (
            /^[l|f]a[s|r|l|b|d]{0,1} /.test(i) || !0 === i.startsWith("icon-")
            ? (t = i)
            : !0 === i.startsWith("bt-")
            ? (t = "bt " + i)
            : !0 === i.startsWith("eva-")
            ? (t = "eva " + i)
            : !0 === /^ion-(md|ios|logo)/.test(i)
            ? (t = "ionicons " + i)
            : !0 === i.startsWith("ion-")
            ? (t = "ionicons ion-" + (!0 === this.$q.platform.is.ios ? "ios" : "md") + i.substr(3))
            : !0 === i.startsWith("mdi-")
            ? (t = "mdi " + i)
            : !0 === i.startsWith("iconfont ")
            ? (t = "" + i)
            : !0 === i.startsWith("ti-")
            ? (t = "themify-icon " + i)
            : ((t = "material-icons"),
                    !0 === i.startsWith("o_")
                    ? ((i = i.substring(2)), (t += "-outlined"))
                    : !0 === i.startsWith("r_")
                    ? ((i = i.substring(2)), (t += "-round"))
                    : !0 === i.startsWith("s_") && ((i = i.substring(2)), (t += "-sharp")),
                    (u = i)),
            {cls: t + " " + this.classes, content: u}
    );
   },
  },
  render: function (t) {
   var e = {class: this.type.cls, style: this.sizeStyle, on: Object.assign({}, this.qListeners), attrs: {"aria-hidden": "true", role: "presentation"}};
   return !0 === this.type.none
           ? t(this.tag, e, Ot(this, "default"))
           : !0 === this.type.img
           ? ((e.attrs.src = this.type.src), t("img", e))
           : !0 === this.type.svg
           ? ((e.attrs.focusable = "false"), (e.attrs.viewBox = this.type.viewBox), t("svg", e, Et(this.type.nodes, this, "default")))
           : !0 === this.type.svguse
           ? ((e.attrs.focusable = "false"), (e.attrs.viewBox = this.type.viewBox), t("svg", e, [t("use", {attrs: {"xlink:href": this.type.src}}), Et(this.type.nodes, this, "default")]))
           : t(this.tag, e, Et([this.type.content], this, "default"));
  },
 }),
         At = t.extend({
          name: "QAvatar",
          mixins: [Lt, Mt],
          props: {fontSize: String, color: String, textColor: String, icon: String, square: Boolean, rounded: Boolean},
          computed: {
           classes: function () {
            var t;
            return ((t = {})["bg-" + this.color] = this.color), (t["text-" + this.textColor + " q-chip--colored"] = this.textColor), (t["q-avatar--square"] = this.square), (t["rounded-borders"] = this.rounded), t;
           },
           contentStyle: function () {
            if (this.fontSize)
             return {fontSize: this.fontSize};
           },
          },
          render: function (t) {
           var e = void 0 !== this.icon ? [t(zt, {props: {name: this.icon}})] : void 0;
           return t("div", {staticClass: "q-avatar", style: this.sizeStyle, class: this.classes, on: Object.assign({}, this.qListeners)}, [
            t("div", {staticClass: "q-avatar__content row flex-center overflow-hidden", style: this.contentStyle}, Pt(e, this, "default")),
           ]);
          },
         }),
         Dt = t.extend({
          name: "QBadge",
          mixins: [Lt],
          props: {
           color: String,
           textColor: String,
           floating: Boolean,
           transparent: Boolean,
           multiLine: Boolean,
           outline: Boolean,
           rounded: Boolean,
           label: [Number, String],
           align: {
            type: String,
            validator: function (t) {
             return ["top", "middle", "bottom"].includes(t);
            },
           },
          },
          computed: {
           style: function () {
            if (void 0 !== this.align)
             return {verticalAlign: this.align};
           },
           classes: function () {
            var t = (!0 === this.outline && this.color) || this.textColor;
            return (
                    "q-badge flex inline items-center no-wrap q-badge--" +
                    (!0 === this.multiLine ? "multi" : "single") +
                    "-line" +
                    (!0 === this.outline ? " q-badge--outline" : void 0 !== this.color ? " bg-" + this.color : "") +
                    (void 0 !== t ? " text-" + t : "") +
                    (!0 === this.floating ? " q-badge--floating" : "") +
                    (!0 === this.rounded ? " q-badge--rounded" : "") +
                    (!0 === this.transparent ? " q-badge--transparent" : "")
                    );
           },
           attrs: function () {
            return {role: "alert", "aria-label": this.label};
           },
          },
          render: function (t) {
           return t("div", {style: this.style, class: this.classes, attrs: this.attrs, on: Object.assign({}, this.qListeners)}, void 0 !== this.label ? [this.label] : Ot(this, "default"));
          },
         }),
         It = {
          props: {dark: {type: Boolean, default: null}},
          computed: {
           isDark: function () {
            return null === this.dark ? this.$q.dark.isActive : this.dark;
           },
          },
         },
         Rt = {role: "alert"},
         Ft = t.extend({
          name: "QBanner",
          mixins: [Lt, It],
          props: {inlineActions: Boolean, dense: Boolean, rounded: Boolean},
          render: function (t) {
           var e = Ot(this, "action"),
                   i = [t("div", {staticClass: "q-banner__avatar col-auto row items-center self-start"}, Ot(this, "avatar")), t("div", {staticClass: "q-banner__content col text-body2"}, Ot(this, "default"))];
           return (
                   void 0 !== e && i.push(t("div", {staticClass: "q-banner__actions row items-center justify-end", class: "col-" + (!0 === this.inlineActions ? "auto" : "all")}, e)),
                   t(
                           "div",
                           {
                            staticClass: "q-banner row items-center",
                            class: {"q-banner--top-padding": void 0 !== e && !this.inlineActions, "q-banner--dense": this.dense, "q-banner--dark q-dark": this.isDark, "rounded-borders": this.rounded},
                            attrs: Rt,
                            on: Object.assign({}, this.qListeners),
                           },
                           i
                           )
                   );
          },
         }),
         jt = {role: "toolbar"},
         Vt = t.extend({
          name: "QBar",
          mixins: [Lt, It],
          props: {dense: Boolean},
          computed: {
           classes: function () {
            return "q-bar--" + (!0 === this.dense ? "dense" : "standard") + " q-bar--" + (!0 === this.isDark ? "dark" : "light");
           },
          },
          render: function (t) {
           return t("div", {staticClass: "q-bar row no-wrap items-center", class: this.classes, attrs: jt, on: Object.assign({}, this.qListeners)}, Ot(this, "default"));
          },
         }),
         Nt = {left: "start", center: "center", right: "end", between: "between", around: "around", evenly: "evenly", stretch: "stretch"},
         Ht = Object.keys(Nt),
         Qt = {
          props: {
           align: {
            type: String,
            validator: function (t) {
             return Ht.includes(t);
            },
           },
          },
          computed: {
           alignClass: function () {
            var t = void 0 === this.align ? (!0 === this.vertical ? "stretch" : "left") : this.align;
            return (!0 === this.vertical ? "items" : "justify") + "-" + Nt[t];
           },
          },
         },
         Wt = t.extend({
          name: "QBreadcrumbs",
          mixins: [Lt, Qt],
          props: {
           separator: {type: String, default: "/"},
           separatorColor: String,
           activeColor: {type: String, default: "primary"},
           gutter: {
            type: String,
            validator: function (t) {
             return ["none", "xs", "sm", "md", "lg", "xl"].includes(t);
            },
            default: "sm",
           },
          },
          computed: {
           classes: function () {
            return this.alignClass + ("none" === this.gutter ? "" : " q-gutter-" + this.gutter);
           },
           sepClass: function () {
            if (this.separatorColor)
             return "text-" + this.separatorColor;
           },
           activeClass: function () {
            return "text-" + this.activeColor;
           },
          },
          render: function (t) {
           var e = this,
                   i = Ot(this, "default");
           if (void 0 !== i) {
            var n = 1,
                    s = [],
                    o = i.filter(function (t) {
                     return void 0 !== t.tag && t.tag.endsWith("-QBreadcrumbsEl");
                    }).length,
                    r =
                    void 0 !== this.$scopedSlots.separator
                    ? this.$scopedSlots.separator
                    : function () {
                     return e.separator;
                    };
            return (
                    i.forEach(function (i) {
                     if (void 0 !== i.tag && i.tag.endsWith("-QBreadcrumbsEl")) {
                      var a = n < o;
                      n++, s.push(t("div", {staticClass: "flex items-center", class: a ? e.activeClass : "q-breadcrumbs--last"}, [i])), a && s.push(t("div", {staticClass: "q-breadcrumbs__separator", class: e.sepClass}, r()));
                     } else
                      s.push(i);
                    }),
                    t("div", {staticClass: "q-breadcrumbs", on: Object.assign({}, this.qListeners)}, [t("div", {staticClass: "flex items-center", class: this.classes}, s)])
                    );
           }
          },
         }),
         Yt = {
          props: {to: [String, Object], exact: Boolean, append: Boolean, replace: Boolean, activeClass: String, exactActiveClass: String, disable: Boolean},
          computed: {
           hasRouterLink: function () {
            return !0 !== this.disable && void 0 !== this.to && null !== this.to && "" !== this.to;
           },
           routerLinkProps: function () {
            return {
             to: this.to,
             exact: this.exact,
             append: this.append,
             replace: this.replace,
             activeClass: this.activeClass || "q-router-link--active",
             exactActiveClass: this.exactActiveClass || "q-router-link--exact-active",
             event: !0 === this.disable ? [] : void 0,
            };
           },
          },
         },
         Ut = t.extend({
          name: "QBreadcrumbsEl",
          mixins: [Lt, Yt],
          props: {label: String, icon: String},
          render: function (t) {
           var e,
                   i = [];
           return (
                   void 0 !== this.icon && i.push(t(zt, {staticClass: "q-breadcrumbs__el-icon", class: void 0 !== this.label ? "q-breadcrumbs__el-icon--with-label" : null, props: {name: this.icon}})),
                   this.label && i.push(this.label),
                   t(
                           !0 === this.hasRouterLink ? "router-link" : "span",
                           (((e = {staticClass: "q-breadcrumbs__el q-link flex inline items-center relative-position", props: !0 === this.hasRouterLink ? this.routerLinkProps : null})[
                                   !0 === this.hasRouterLink ? "nativeOn" : "on"
                           ] = Object.assign({}, this.qListeners)),
                                   e),
                           Et(i, this, "default")
                           )
                   );
          },
         }),
         Kt = {
          mixins: [Lt],
          props: {color: String, size: {type: [Number, String], default: "1em"}},
          computed: {
           cSize: function () {
            return this.size in qt ? qt[this.size] + "px" : this.size;
           },
           classes: function () {
            if (this.color)
             return "text-" + this.color;
           },
          },
         },
         Xt = t.extend({
          name: "QSpinner",
          mixins: [Kt],
          props: {thickness: {type: Number, default: 5}},
          render: function (t) {
           return t("svg", {staticClass: "q-spinner q-spinner-mat", class: this.classes, on: Object.assign({}, this.qListeners), attrs: {focusable: "false", width: this.cSize, height: this.cSize, viewBox: "25 25 50 50"}}, [
            t("circle", {staticClass: "path", attrs: {cx: "50", cy: "50", r: "20", fill: "none", stroke: "currentColor", "stroke-width": this.thickness, "stroke-miterlimit": "10"}}),
           ]);
          },
         });
 function Gt(t) {
  if (t === window)
   return {top: 0, left: 0};
  var e = t.getBoundingClientRect();
  return {top: e.top, left: e.left};
 }
 function Zt(t) {
  return t === window ? window.innerHeight : t.getBoundingClientRect().height;
 }
 function Jt(t, e) {
  var i = t.style;
  Object.keys(e).forEach(function (t) {
   i[t] = e[t];
  });
 }
 function te(t, e) {
  return !0 === t ? (e === document.documentElement || null === e ? document.body : e) : document.body;
 }
 var ee = {
  offset: Gt,
  style: function (t, e) {
   return window.getComputedStyle(t).getPropertyValue(e);
  },
  height: Zt,
  width: function (t) {
   return t === window ? window.innerWidth : t.getBoundingClientRect().width;
  },
  css: Jt,
  cssBatch: function (t, e) {
   t.forEach(function (t) {
    return Jt(t, e);
   });
  },
  ready: function (t) {
   if ("function" == typeof t)
    return "loading" !== document.readyState ? t() : void document.addEventListener("DOMContentLoaded", t, !1);
  },
 };
 function ie(t, e) {
  void 0 === e && (e = 250);
  var i,
          n = !1;
  return function () {
   return (
           !1 === n &&
           ((n = !0),
                   setTimeout(function () {
                    n = !1;
                   }, e),
                   (i = t.apply(this, arguments))),
           i
           );
  };
 }
 function ne(t, e, i, n) {
  !0 === i.modifiers.stop && y(t);
  var s = i.modifiers.color,
          o = i.modifiers.center;
  o = !0 === o || !0 === n;
  var r = document.createElement("span"),
          a = document.createElement("span"),
          l = v(t),
          c = e.getBoundingClientRect(),
          u = c.left,
          h = c.top,
          d = c.width,
          p = c.height,
          f = Math.sqrt(d * d + p * p),
          m = f / 2,
          g = (d - f) / 2 + "px",
          _ = o ? g : l.left - u - m + "px",
          b = (p - f) / 2 + "px",
          w = o ? b : l.top - h - m + "px";
  (a.className = "q-ripple__inner"),
          Jt(a, {height: f + "px", width: f + "px", transform: "translate3d(" + _ + "," + w + ",0) scale3d(.2,.2,1)", opacity: 0}),
          (r.className = "q-ripple" + (s ? " text-" + s : "")),
          r.setAttribute("dir", "ltr"),
          r.appendChild(a),
          e.appendChild(r);
  var S = function () {
   r.remove(), clearTimeout(x);
  };
  i.abort.push(S);
  var x = setTimeout(function () {
   a.classList.add("q-ripple__inner--enter"),
           (a.style.transform = "translate3d(" + g + "," + b + ",0) scale3d(1,1,1)"),
           (a.style.opacity = 0.2),
           (x = setTimeout(function () {
            a.classList.remove("q-ripple__inner--enter"),
                    a.classList.add("q-ripple__inner--leave"),
                    (a.style.opacity = 0),
                    (x = setTimeout(function () {
                     r.remove(), i.abort.splice(i.abort.indexOf(S), 1);
                    }, 275));
           }, 250));
  }, 50);
 }
 function se(t, e) {
  var i = e.modifiers,
          n = e.value,
          s = e.arg,
          o = Object.assign({}, at.config.ripple, i, n);
  t.modifiers = {early: !0 === o.early, stop: !0 === o.stop, center: !0 === o.center, color: o.color || s, keyCodes: [].concat(o.keyCodes || 13)};
 }
 function oe(t) {
  var e = t.__qripple;
  void 0 !== e &&
          (e.abort.forEach(function (t) {
           t();
          }),
                  q(e, "main"),
                  delete t._qripple);
 }
 var re = {
  name: "ripple",
  inserted: function (t, e) {
   void 0 !== t.__qripple && (oe(t), (t.__qripple_destroyed = !0));
   var i = {
    enabled: !1 !== e.value,
    modifiers: {},
    abort: [],
    start: function (e) {
     !0 === i.enabled &&
             !0 !== e.qSkipRipple &&
             (!0 !== u.is.ie || e.clientX >= 0) &&
             (!0 === i.modifiers.early ? !0 === ["mousedown", "touchstart"].includes(e.type) : "click" === e.type) &&
             ne(e, t, i, !0 === e.qKeyEvent);
    },
    keystart: ie(function (e) {
     !0 === i.enabled && !0 !== e.qSkipRipple && !0 === tt(e, i.modifiers.keyCodes) && e.type === "key" + (!0 === i.modifiers.early ? "down" : "up") && ne(e, t, i, !0);
    }, 300),
   };
   se(i, e),
           (t.__qripple = i),
           k(i, "main", [
            [t, "mousedown", "start", "passive"],
            [t, "touchstart", "start", "passive"],
            [t, "click", "start", "passive"],
            [t, "keydown", "keystart", "passive"],
            [t, "keyup", "keystart", "passive"],
           ]);
  },
  update: function (t, e) {
   var i = t.__qripple;
   void 0 !== i && e.oldValue !== e.value && ((i.enabled = !1 !== e.value), !0 === i.enabled && Object(e.value) === e.value && se(i, e));
  },
  unbind: function (t) {
   void 0 === t.__qripple_destroyed ? oe(t) : delete t.__qripple_destroyed;
  },
 },
         ae = {directives: {Ripple: re}, props: {ripple: {type: [Boolean, Object], default: !0}}},
         le = {none: 0, xs: 4, sm: 8, md: 16, lg: 24, xl: 32},
         ce = {
          mixins: [Lt, ae, Qt, Tt({xs: 8, sm: 10, md: 14, lg: 20, xl: 24})],
          props: {
           type: String,
           to: [Object, String],
           replace: Boolean,
           append: Boolean,
           label: [Number, String],
           icon: String,
           iconRight: String,
           round: Boolean,
           outline: Boolean,
           flat: Boolean,
           unelevated: Boolean,
           rounded: Boolean,
           push: Boolean,
           glossy: Boolean,
           size: String,
           fab: Boolean,
           fabMini: Boolean,
           padding: String,
           color: String,
           textColor: String,
           noCaps: Boolean,
           noWrap: Boolean,
           dense: Boolean,
           tabindex: [Number, String],
           align: {default: "center"},
           stack: Boolean,
           stretch: Boolean,
           loading: {type: Boolean, default: null},
           disable: Boolean,
          },
          computed: {
           style: function () {
            if (!1 === this.fab && !1 === this.fabMini)
             return this.sizeStyle;
           },
           isRounded: function () {
            return !0 === this.rounded || !0 === this.fab || !0 === this.fabMini;
           },
           isActionable: function () {
            return !0 !== this.disable && !0 !== this.loading;
           },
           computedTabIndex: function () {
            return !0 === this.isActionable ? this.tabindex || 0 : -1;
           },
           hasRouterLink: function () {
            return !0 !== this.disable && void 0 !== this.to && null !== this.to && "" !== this.to;
           },
           isLink: function () {
            return "a" === this.type || !0 === this.hasRouterLink;
           },
           design: function () {
            return !0 === this.flat ? "flat" : !0 === this.outline ? "outline" : !0 === this.push ? "push" : !0 === this.unelevated ? "unelevated" : "standard";
           },
           currentLocation: function () {
            if (!0 === this.hasRouterLink)
             return !0 === this.append ? this.$router.resolve(this.to, this.$route, !0) : this.$router.resolve(this.to);
           },
           attrs: function () {
            var t = {tabindex: this.computedTabIndex};
            return (
                    "a" !== this.type && (t.type = this.type || "button"),
                    !0 === this.hasRouterLink ? ((t.href = this.currentLocation.href), (t.role = "link")) : (t.role = "a" === this.type ? "link" : "button"),
                    !0 === this.loading && void 0 !== this.percentage && ((t.role = "progressbar"), (t["aria-valuemin"] = 0), (t["aria-valuemax"] = 100), (t["aria-valuenow"] = this.percentage)),
                    !0 === this.disable && ((t.disabled = ""), (t["aria-disabled"] = "true")),
                    t
                    );
           },
           classes: function () {
            var t;
            return (
                    void 0 !== this.color
                    ? (t = !0 === this.flat || !0 === this.outline ? "text-" + (this.textColor || this.color) : "bg-" + this.color + " text-" + (this.textColor || "white"))
                    : this.textColor && (t = "text-" + this.textColor),
                    "q-btn--" +
                    this.design +
                    " q-btn--" +
                    (!0 === this.round ? "round" : "rectangle" + (!0 === this.isRounded ? " q-btn--rounded" : "")) +
                    (void 0 !== t ? " " + t : "") +
                    (!0 === this.isActionable ? " q-btn--actionable q-focusable q-hoverable" : !0 === this.disable ? " disabled" : "") +
                    (!0 === this.fab ? " q-btn--fab" : !0 === this.fabMini ? " q-btn--fab-mini" : "") +
                    (!0 === this.noCaps ? " q-btn--no-uppercase" : "") +
                    (!0 === this.noWrap ? "" : " q-btn--wrap") +
                    (!0 === this.dense ? " q-btn--dense" : "") +
                    (!0 === this.stretch ? " no-border-radius self-stretch" : "") +
                    (!0 === this.glossy ? " glossy" : "")
                    );
           },
           innerClasses: function () {
            return this.alignClass + (!0 === this.stack ? " column" : " row") + (!0 === this.noWrap ? " no-wrap text-no-wrap" : "") + (!0 === this.loading ? " q-btn__content--hidden" : "");
           },
           wrapperStyle: function () {
            if (void 0 !== this.padding)
             return {
              padding: this.padding
                      .split(/\s+/)
                      .map(function (t) {
                       return t in le ? le[t] + "px" : t;
                      })
                      .join(" "),
              minWidth: "0",
              minHeight: "0",
             };
           },
          },
         },
         ue = ["left", "right", "up", "down", "horizontal", "vertical"],
         he = {left: !0, right: !0, up: !0, down: !0, horizontal: !0, vertical: !0, all: !0};
 function de(t) {
  var e = {};
  return (
          ue.forEach(function (i) {
           t[i] && (e[i] = !0);
          }),
          0 === Object.keys(e).length
          ? he
          : (!0 === e.horizontal && (e.left = e.right = !0),
                  !0 === e.vertical && (e.up = e.down = !0),
                  !0 === e.left && !0 === e.right && (e.horizontal = !0),
                  !0 === e.up && !0 === e.down && (e.vertical = !0),
                  !0 === e.horizontal && !0 === e.vertical && (e.all = !0),
                  e)
          );
 }
 var pe =
         !1 === i && !0 !== o && (!0 === u.is.ios || window.navigator.vendor.toLowerCase().indexOf("apple") > -1)
         ? function () {
          return document;
         }
 : function (t) {
  return t;
 };
 function fe(t, e) {
  return void 0 === e.event && void 0 !== t.target && !0 !== t.target.draggable && "function" == typeof e.handler && "INPUT" !== t.target.nodeName.toUpperCase() && (void 0 === t.qClonedBy || -1 === t.qClonedBy.indexOf(e.uid));
 }
 var me = d.passiveCapture,
         ve = void 0,
         ge = void 0,
         _e = void 0,
         be = {role: "img", "aria-hidden": "true"},
         ye = t.extend({
          name: "QBtn",
          mixins: [ce],
          props: {percentage: Number, darkPercentage: Boolean},
          computed: {
           hasLabel: function () {
            return void 0 !== this.label && null !== this.label && "" !== this.label;
           },
           computedRipple: function () {
            return !1 !== this.ripple && Object.assign({}, {keyCodes: !0 === this.isLink ? [13, 32] : [13]}, !0 === this.ripple ? {} : this.ripple);
           },
           percentageStyle: function () {
            var t = Math.max(0, Math.min(100, this.percentage));
            if (t > 0)
             return {transition: "transform 0.6s", transform: "translateX(" + (t - 100) + "%)"};
           },
           onEvents: function () {
            if (!0 === this.loading)
             return {mousedown: this.__onLoadingEvt, touchstart: this.__onLoadingEvt, click: this.__onLoadingEvt, keydown: this.__onLoadingEvt, keyup: this.__onLoadingEvt};
            if (!0 === this.isActionable) {
             var t = Object.assign({}, this.qListeners, {click: this.click, keydown: this.__onKeydown, mousedown: this.__onMousedown});
             return !0 === this.$q.platform.has.touch && (t.touchstart = this.__onTouchstart), t;
            }
            return {};
           },
           directives: function () {
            if (!0 !== this.disable && !1 !== this.ripple)
             return [{name: "ripple", value: this.computedRipple, modifiers: {center: this.round}}];
           },
          },
          methods: {
           click: function (t) {
            var e = this;
            if (void 0 !== t) {
             if (!0 === t.defaultPrevented)
              return;
             var i = document.activeElement;
             if ("submit" === this.type && ((!0 === this.$q.platform.is.ie && (t.clientX < 0 || t.clientY < 0)) || (i !== document.body && !1 === this.$el.contains(i) && !1 === i.contains(this.$el)))) {
              this.$el.focus();
              var n = function () {
               document.removeEventListener("keydown", S, !0), document.removeEventListener("keyup", n, me), void 0 !== e.$el && e.$el.removeEventListener("blur", n, me);
              };
              document.addEventListener("keydown", S, !0), document.addEventListener("keyup", n, me), this.$el.addEventListener("blur", n, me);
             }
             if (!0 === this.hasRouterLink) {
              if (!0 === t.ctrlKey || !0 === t.shiftKey || !0 === t.altKey || !0 === t.metaKey)
               return;
              S(t);
             }
            }
            var s = function () {
             e.$router[!0 === e.replace ? "replace" : "push"](e.currentLocation.route, void 0, f);
            };
            this.$emit("click", t, s), !0 === this.hasRouterLink && !1 !== t.navigate && s();
           },
           __onKeydown: function (t) {
            !0 === tt(t, [13, 32]) &&
                    (S(t),
                            ge !== this.$el &&
                            (void 0 !== ge && this.__cleanup(),
                                    this.$el.focus(),
                                    (ge = this.$el),
                                    this.$el.classList.add("q-btn--active"),
                                    document.addEventListener("keyup", this.__onPressEnd, !0),
                                    this.$el.addEventListener("blur", this.__onPressEnd, me))),
                    this.$emit("keydown", t);
           },
           __onTouchstart: function (t) {
            var e = this;
            if (ve !== this.$el) {
             void 0 !== ve && this.__cleanup(), (ve = this.$el);
             var i = (this.touchTargetEl = pe(t.target));
             i.addEventListener("touchcancel", this.__onPressEnd, me), i.addEventListener("touchend", this.__onPressEnd, me);
            }
            (this.avoidMouseRipple = !0),
                    clearTimeout(this.mouseTimer),
                    (this.mouseTimer = setTimeout(function () {
                     e.avoidMouseRipple = !1;
                    }, 200)),
                    this.$emit("touchstart", t);
           },
           __onMousedown: function (t) {
            _e !== this.$el && (void 0 !== _e && this.__cleanup(), (_e = this.$el), this.$el.classList.add("q-btn--active"), document.addEventListener("mouseup", this.__onPressEnd, me)),
                    (t.qSkipRipple = !0 === this.avoidMouseRipple),
                    this.$emit("mousedown", t);
           },
           __onPressEnd: function (t) {
            if (void 0 === t || "blur" !== t.type || document.activeElement !== this.$el) {
             if (void 0 !== t && "keyup" === t.type) {
              if (ge === this.$el && !0 === tt(t, [13, 32])) {
               var e = new MouseEvent("click", t);
               (e.qKeyEvent = !0), !0 === t.defaultPrevented && w(e), !0 === t.cancelBubble && y(e), this.$el.dispatchEvent(e), S(t), (t.qKeyEvent = !0);
              }
              this.$emit("keyup", t);
             }
             this.__cleanup();
            }
           },
           __cleanup: function (t) {
            var e = this.$refs.blurTarget;
            if ((!0 === t || (ve !== this.$el && _e !== this.$el) || void 0 === e || e === document.activeElement || (e.setAttribute("tabindex", -1), e.focus()), ve === this.$el)) {
             var i = this.touchTargetEl;
             i.removeEventListener("touchcancel", this.__onPressEnd, me), i.removeEventListener("touchend", this.__onPressEnd, me), (ve = this.touchTargetEl = void 0);
            }
            _e === this.$el && (document.removeEventListener("mouseup", this.__onPressEnd, me), (_e = void 0)),
                    ge === this.$el && (document.removeEventListener("keyup", this.__onPressEnd, !0), void 0 !== this.$el && this.$el.removeEventListener("blur", this.__onPressEnd, me), (ge = void 0)),
                    void 0 !== this.$el && this.$el.classList.remove("q-btn--active");
           },
           __onLoadingEvt: function (t) {
            S(t), (t.qSkipRipple = !0);
           },
          },
          beforeDestroy: function () {
           this.__cleanup(!0);
          },
          render: function (t) {
           var e = [];
           void 0 !== this.icon && e.push(t(zt, {attrs: be, props: {name: this.icon, left: !1 === this.stack && !0 === this.hasLabel}})),
                   !0 === this.hasLabel && e.push(t("span", {staticClass: "block"}, [this.label])),
                   (e = Et(e, this, "default")),
                   void 0 !== this.iconRight && !1 === this.round && e.push(t(zt, {attrs: be, props: {name: this.iconRight, right: !1 === this.stack && !0 === this.hasLabel}}));
           var i = [t("span", {staticClass: "q-focus-helper", ref: "blurTarget"})];
           return (
                   !0 === this.loading &&
                   void 0 !== this.percentage &&
                   i.push(
                           t("span", {staticClass: "q-btn__progress absolute-full overflow-hidden"}, [
                            t("span", {staticClass: "q-btn__progress-indicator fit block", class: !0 === this.darkPercentage ? "q-btn__progress--dark" : "", style: this.percentageStyle}),
                           ])
                           ),
                   i.push(
                           t("span", {staticClass: "q-btn__wrapper col row q-anchor--skip", style: this.wrapperStyle}, [t("span", {staticClass: "q-btn__content text-center col items-center q-anchor--skip", class: this.innerClasses}, e)])
                           ),
                   null !== this.loading &&
                   i.push(
                           t(
                                   "transition",
                                   {props: {name: "q-transition--fade"}},
                                   !0 === this.loading ? [t("span", {key: "loading", staticClass: "absolute-full flex flex-center"}, void 0 !== this.$scopedSlots.loading ? this.$scopedSlots.loading() : [t(Xt)])] : void 0
                                   )
                           ),
                   t(!0 === this.isLink ? "a" : "button", {staticClass: "q-btn q-btn-item non-selectable no-outline", class: this.classes, style: this.style, attrs: this.attrs, on: this.onEvents, directives: this.directives}, i)
                   );
          },
         }),
         we = t.extend({
          name: "QBtnGroup",
          mixin: [Lt],
          props: {unelevated: Boolean, outline: Boolean, flat: Boolean, rounded: Boolean, push: Boolean, stretch: Boolean, glossy: Boolean, spread: Boolean},
          computed: {
           classes: function () {
            var t = this;
            return ["unelevated", "outline", "flat", "rounded", "push", "stretch", "glossy"]
                    .filter(function (e) {
                     return !0 === t[e];
                    })
                    .map(function (t) {
                     return "q-btn-group--" + t;
                    })
                    .join(" ");
           },
          },
          render: function (t) {
           return t("div", {staticClass: "q-btn-group row no-wrap " + (!0 === this.spread ? "q-btn-group--spread" : "inline"), class: this.classes, on: Object.assign({}, this.qListeners)}, Ot(this, "default"));
          },
         });
 function Se() {
  if (void 0 !== window.getSelection) {
   var t = window.getSelection();
   void 0 !== t.empty ? t.empty() : void 0 !== t.removeAllRanges && (t.removeAllRanges(), !0 !== h.is.mobile && t.addRange(document.createRange()));
  } else
   void 0 !== document.selection && document.selection.empty();
 }
 var xe = {
  props: {target: {default: !0}, noParentEvent: Boolean, contextMenu: Boolean},
  watch: {
   contextMenu: function (t) {
    void 0 !== this.anchorEl && (this.__unconfigureAnchorEl(), this.__configureAnchorEl(t));
   },
   target: function () {
    void 0 !== this.anchorEl && this.__unconfigureAnchorEl(), this.__pickAnchorEl();
   },
   noParentEvent: function (t) {
    void 0 !== this.anchorEl && (!0 === t ? this.__unconfigureAnchorEl() : this.__configureAnchorEl());
   },
  },
  methods: {
   __showCondition: function (t) {
    return void 0 !== this.anchorEl && (void 0 === t || void 0 === t.touches || t.touches.length <= 1);
   },
   __contextClick: function (t) {
    var e = this;
    this.hide(t),
            this.$nextTick(function () {
             e.show(t);
            }),
            w(t);
   },
   __toggleKey: function (t) {
    !0 === tt(t, 13) && this.toggle(t);
   },
   __mobileCleanup: function (t) {
    this.anchorEl.classList.remove("non-selectable"), clearTimeout(this.touchTimer), !0 === this.showing && void 0 !== t && Se();
   },
   __mobilePrevent: w,
   __mobileTouch: function (t) {
    var e = this;
    if ((this.__mobileCleanup(t), !0 === this.__showCondition(t))) {
     this.hide(t), this.anchorEl.classList.add("non-selectable");
     var i = pe(t.target);
     k(this, "anchor", [
      [i, "touchmove", "__mobileCleanup", "passive"],
      [i, "touchend", "__mobileCleanup", "passive"],
      [i, "touchcancel", "__mobileCleanup", "passive"],
      [this.anchorEl, "contextmenu", "__mobilePrevent", "notPassive"],
     ]),
             (this.touchTimer = setTimeout(function () {
              e.show(t);
             }, 300));
    }
   },
   __unconfigureAnchorEl: function () {
    q(this, "anchor");
   },
   __configureAnchorEl: function (t) {
    (void 0 === t && (t = this.contextMenu), !0 !== this.noParentEvent && void 0 !== this.anchorEl) &&
            k(
                    this,
                    "anchor",
                    !0 === t
                    ? !0 === this.$q.platform.is.mobile
                    ? [[this.anchorEl, "touchstart", "__mobileTouch", "passive"]]
                    : [
                     [this.anchorEl, "click", "hide", "passive"],
                     [this.anchorEl, "contextmenu", "__contextClick", "notPassive"],
                    ]
                    : [
                     [this.anchorEl, "click", "toggle", "passive"],
                     [this.anchorEl, "keyup", "__toggleKey", "passive"],
                    ]
                    );
   },
   __setAnchorEl: function (t) {
    for (this.anchorEl = t; this.anchorEl.classList.contains("q-anchor--skip"); )
     this.anchorEl = this.anchorEl.parentNode;
    this.__configureAnchorEl();
   },
   __pickAnchorEl: function () {
    if (!1 === this.target || "" === this.target)
     this.anchorEl = void 0;
    else if (!0 === this.target)
     this.__setAnchorEl(this.parentEl);
    else {
     var t = this.target;
     if ("string" == typeof this.target)
      try {
       t = document.querySelector(this.target);
      } catch (e) {
       t = void 0;
      }
     void 0 !== t && null !== t
             ? ((this.anchorEl = !0 === t._isVue && void 0 !== t.$el ? t.$el : t), this.__configureAnchorEl())
             : ((this.anchorEl = void 0), console.error('Anchor: target "' + this.target + '" not found', this));
    }
   },
   __changeScrollEvent: function (t, e) {
    var i = (void 0 !== e ? "add" : "remove") + "EventListener",
            n = void 0 !== e ? e : this.__scrollFn;
    t !== window && t[i]("scroll", n, d.passive), window[i]("scroll", n, d.passive), (this.__scrollFn = e);
   },
  },
  created: function () {
   var t = this;
   "function" == typeof this.__configureScrollTarget &&
           "function" == typeof this.__unconfigureScrollTarget &&
           (this.noParentEventWatcher = this.$watch("noParentEvent", function () {
            void 0 !== t.__scrollTarget && (t.__unconfigureScrollTarget(), t.__configureScrollTarget());
           }));
  },
  mounted: function () {
   (this.parentEl = this.$el.parentNode), this.__pickAnchorEl(), !0 === this.value && void 0 === this.anchorEl && this.$emit("input", !1);
  },
  beforeDestroy: function () {
   clearTimeout(this.touchTimer), void 0 !== this.noParentEventWatcher && this.noParentEventWatcher(), void 0 !== this.__anchorCleanup && this.__anchorCleanup(), this.__unconfigureAnchorEl();
  },
 },
         Ce = {
          methods: {
           __nextTick: function (t) {
            this.__tickFn = t;
           },
           __prepareTick: function () {
            var t = this;
            if (void 0 !== this.__tickFn) {
             var e = this.__tickFn;
             this.$nextTick(function () {
              t.__tickFn === e && (t.__tickFn(), (t.__tickFn = void 0));
             });
            }
           },
           __clearTick: function () {
            this.__tickFn = void 0;
           },
           __setTimeout: function (t, e) {
            clearTimeout(this.__timer), (this.__timer = setTimeout(t, e));
           },
           __clearTimeout: function () {
            clearTimeout(this.__timer);
           },
          },
          beforeDestroy: function () {
           (this.__tickFn = void 0), clearTimeout(this.__timer);
          },
         },
         ke = {
          mixins: [Ce, Lt],
          props: {value: {type: Boolean, default: void 0}},
          data: function () {
           return {showing: !1};
          },
          watch: {
           value: function (t) {
            this.__processModelChange(t);
           },
           $route: function () {
            !0 === this.hideOnRouteChange && !0 === this.showing && this.hide();
           },
          },
          methods: {
           toggle: function (t) {
            this[!0 === this.showing ? "hide" : "show"](t);
           },
           show: function (t) {
            var e = this;
            !0 === this.disable ||
                    (void 0 !== this.__showCondition && !0 !== this.__showCondition(t)) ||
                    (void 0 !== this.qListeners.input &&
                            !1 === i &&
                            (this.$emit("input", !0),
                                    (this.payload = t),
                                    this.$nextTick(function () {
                                     e.payload === t && (e.payload = void 0);
                                    })),
                            (void 0 !== this.value && void 0 !== this.qListeners.input && !0 !== i) || this.__processShow(t));
           },
           __processShow: function (t) {
            !0 !== this.showing &&
                    (void 0 !== this.__preparePortal && this.__preparePortal(),
                            (this.showing = !0),
                            this.$emit("before-show", t),
                            void 0 !== this.__show ? (this.__clearTick(), this.__show(t), this.__prepareTick()) : this.$emit("show", t));
           },
           hide: function (t) {
            var e = this;
            !0 !== this.disable &&
                    (void 0 !== this.qListeners.input &&
                            !1 === i &&
                            (this.$emit("input", !1),
                                    (this.payload = t),
                                    this.$nextTick(function () {
                                     e.payload === t && (e.payload = void 0);
                                    })),
                            (void 0 !== this.value && void 0 !== this.qListeners.input && !0 !== i) || this.__processHide(t));
           },
           __processHide: function (t) {
            !1 !== this.showing && ((this.showing = !1), this.$emit("before-hide", t), void 0 !== this.__hide ? (this.__clearTick(), this.__hide(t), this.__prepareTick()) : this.$emit("hide", t));
           },
           __processModelChange: function (t) {
            !0 === this.disable && !0 === t ? void 0 !== this.qListeners.input && this.$emit("input", !1) : (!0 === t) !== this.showing && this["__process" + (!0 === t ? "Show" : "Hide")](this.payload);
           },
          },
         };
 function qe(t, e) {
  do {
   if ("QMenu" === t.$options.name) {
    if ((t.hide(e), !0 === t.separateClosePopup))
     return t.$parent;
   } else if (void 0 !== t.__renderPortal)
    return void 0 !== t.$parent && "QPopupProxy" === t.$parent.$options.name ? (t.hide(e), t.$parent) : t;
   t = t.$parent;
  } while (void 0 !== t && (void 0 === t.$el.contains || !0 !== t.$el.contains(e.target)));
 }
 var Te = {
  inheritAttrs: !1,
  props: {contentClass: [Array, String, Object], contentStyle: [Array, String, Object]},
  methods: {
   __showPortal: function () {
    var t = this;
    if (void 0 !== this.$q.fullscreen && !0 === this.$q.fullscreen.isCapable) {
     var e = function (e) {
      if (void 0 !== t.__portal) {
       var i = te(e, t.$q.fullscreen.activeEl);
       t.__portal.$el.parentElement !== i && i.contains(t.$el) === (!1 === t.__onGlobalDialog) && i.appendChild(t.__portal.$el);
      }
     };
     this.unwatchFullscreen = this.$watch("$q.fullscreen.isActive", e);
     var i = this.$q.fullscreen.isActive;
     (!1 !== this.__onGlobalDialog && !0 !== i) || e(i);
    } else
     void 0 !== this.__portal && !1 === this.__onGlobalDialog && document.body.appendChild(this.__portal.$el);
   },
   __hidePortal: function () {
    void 0 !== this.__portal &&
            (void 0 !== this.unwatchFullscreen && (this.unwatchFullscreen(), (this.unwatchFullscreen = void 0)), !1 === this.__onGlobalDialog && (this.__portal.$destroy(), this.__portal.$el.remove()), (this.__portal = void 0));
   },
   __preparePortal: function () {
    var e = this;
    void 0 === this.__portal &&
            (this.__portal =
                    !0 === this.__onGlobalDialog
                    ? {$el: this.$el, $refs: this.$refs}
            : new t({
             name: "QPortal",
             parent: this,
             inheritAttrs: !1,
             render: function (t) {
              return e.__renderPortal(t);
             },
             components: this.$options.components,
             directives: this.$options.directives,
            }).$mount());
   },
  },
  render: function (t) {
   if (!0 === this.__onGlobalDialog)
    return this.__renderPortal(t);
   void 0 !== this.__portal && this.__portal.$forceUpdate();
  },
  beforeDestroy: function () {
   this.__hidePortal();
  },
 };
 !1 === i &&
         (Te.created = function () {
          this.__onGlobalDialog = (function (t) {
           for (; void 0 !== t; ) {
            if ("QGlobalDialog" === t.$options.name)
             return !0;
            if ("QDialog" === t.$options.name)
             return !1;
            t = t.$parent;
           }
           return !1;
          })(this.$parent);
         });
 var Me,
         $e = {
          props: {transitionShow: {type: String, default: "fade"}, transitionHide: {type: String, default: "fade"}},
          data: function () {
           return {transitionState: this.showing};
          },
          watch: {
           showing: function (t) {
            var e = this;
            this.transitionShow !== this.transitionHide &&
                    this.$nextTick(function () {
                     e.transitionState = t;
                    });
           },
          },
          computed: {
           transition: function () {
            return "q-transition--" + (!0 === this.transitionState ? this.transitionHide : this.transitionShow);
           },
          },
         };
 var Le = d.notPassiveCapture,
         Oe = d.passiveCapture,
         Be = {click: [], focus: []};
 function Ee(t, e) {
  for (var i = t.length - 1; i >= 0; i--)
   if (void 0 === t[i](e))
    return;
 }
 function Pe(t) {
  clearTimeout(Me),
          "focusin" === t.type && ((!0 === u.is.ie && t.target === document.body) || !0 === t.target.hasAttribute("tabindex"))
          ? (Me = setTimeout(
                  function () {
                   Ee(Be.focus, t);
                  },
                  !0 === u.is.ie ? 500 : 200
                  ))
          : Ee(Be.click, t);
 }
 var ze,
         Ae = {
          name: "click-outside",
          bind: function (t, e, i) {
           var n = e.value,
                   s = e.arg,
                   o = i.componentInstance || i.context,
                   r = {
                    trigger: n,
                    toggleEl: s,
                    handler: function (e) {
                     var i = e.target;
                     if (
                             !(
                                     !0 === e.qClickOutside ||
                                     void 0 === i ||
                                     8 === i.nodeType ||
                                     i === document.documentElement ||
                                     !1 !== i.classList.contains("no-pointer-events") ||
                                     !0 ===
                                     (function (t) {
                                      for (; null !== (t = t.nextElementSibling); )
                                       if (t.classList.contains("q-dialog--modal"))
                                        return !0;
                                      return !1;
                                     })(t) ||
                                     (void 0 !== r.toggleEl && !1 !== r.toggleEl.contains(i)) ||
                                     (i !== document.body &&
                                             !1 !==
                                             (function (t, e) {
                                              for (var i = t; void 0 !== i; i = i.$parent)
                                               if (i === e)
                                                return !0;
                                              return !1;
                                             })(
                                             (function (t) {
                                              for (var e = t; null !== e; e = e.parentNode) {
                                               if (null === e.__vue__)
                                                return;
                                               if (void 0 !== e.__vue__)
                                                return e.__vue__;
                                              }
                                             })(i),
                                             o
                                             ))
                                     )
                             )
                      return (e.qClickOutside = !0), r.trigger(e);
                    },
                   };
           t.__qclickoutside && (t.__qclickoutside_old = t.__qclickoutside),
                   (t.__qclickoutside = r),
                   0 === Be.click.length && (document.addEventListener("mousedown", Pe, Le), document.addEventListener("touchstart", Pe, Le), document.addEventListener("focusin", Pe, Oe)),
                   Be.click.push(r.handler),
                   (r.timerFocusin = setTimeout(function () {
                    Be.focus.push(r.handler);
                   }, 500));
          },
          update: function (t, e) {
           var i = e.value,
                   n = e.oldValue,
                   s = e.arg,
                   o = t.__qclickoutside;
           i !== n && (o.trigger = i), s !== o.arg && (o.toggleEl = s);
          },
          unbind: function (t) {
           var e = t.__qclickoutside_old || t.__qclickoutside;
           if (void 0 !== e) {
            clearTimeout(e.timerFocusin);
            var i = Be.click.findIndex(function (t) {
             return t === e.handler;
            }),
                    n = Be.focus.findIndex(function (t) {
                     return t === e.handler;
                    });
            i > -1 && Be.click.splice(i, 1),
                    n > -1 && Be.focus.splice(n, 1),
                    0 === Be.click.length && (clearTimeout(Me), document.removeEventListener("mousedown", Pe, Le), document.removeEventListener("touchstart", Pe, Le), document.removeEventListener("focusin", Pe, Oe)),
                    delete t[t.__qclickoutside_old ? "__qclickoutside_old" : "__qclickoutside"];
           }
          },
         },
         De = !1 === i ? [null, document, document.body, document.scrollingElement, document.documentElement] : [];
 function Ie(t, e) {
  if ("string" == typeof e)
   try {
    e = document.querySelector(e);
   } catch (t) {
    e = void 0;
   }
  return void 0 === e || null === e ? (e = t.closest(".scroll,.scroll-y,.overflow-auto")) : !0 === e._isVue && void 0 !== e.$el && (e = e.$el), De.includes(e) ? window : e;
 }
 function Re(t) {
  return (t === window ? document.body : t).scrollHeight;
 }
 function Fe(t) {
  return t === window ? window.pageYOffset || window.scrollY || document.body.scrollTop || 0 : t.scrollTop;
 }
 function je(t) {
  return t === window ? window.pageXOffset || window.scrollX || document.body.scrollLeft || 0 : t.scrollLeft;
 }
 function Ve(t, e, i) {
  void 0 === i && (i = 0);
  var n = void 0 === arguments[3] ? performance.now() : arguments[3],
          s = Fe(t);
  i <= 0
          ? s !== e && He(t, e)
          : requestAnimationFrame(function (o) {
           var r = o - n,
                   a = s + ((e - s) / Math.max(r, i)) * r;
           He(t, a), a !== e && Ve(t, e, i - r, o);
          });
 }
 function Ne(t, e, i) {
  void 0 === i && (i = 0);
  var n = void 0 === arguments[3] ? performance.now() : arguments[3],
          s = je(t);
  i <= 0
          ? s !== e && Qe(t, e)
          : requestAnimationFrame(function (o) {
           var r = o - n,
                   a = s + ((e - s) / Math.max(r, i)) * r;
           Qe(t, a), a !== e && Ne(t, e, i - r, o);
          });
 }
 function He(t, e) {
  t !== window ? (t.scrollTop = e) : window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, e);
 }
 function Qe(t, e) {
  t !== window ? (t.scrollLeft = e) : window.scrollTo(e, window.pageYOffset || window.scrollY || document.body.scrollTop || 0);
 }
 function We(t, e, i) {
  i ? Ve(t, e, i) : He(t, e);
 }
 function Ye(t, e, i) {
  i ? Ne(t, e, i) : Qe(t, e);
 }
 function Ue() {
  if (void 0 !== ze)
   return ze;
  var t = document.createElement("p"),
          e = document.createElement("div");
  Jt(t, {width: "100%", height: "200px"}), Jt(e, {position: "absolute", top: "0px", left: "0px", visibility: "hidden", width: "200px", height: "150px", overflow: "hidden"}), e.appendChild(t), document.body.appendChild(e);
  var i = t.offsetWidth;
  e.style.overflow = "scroll";
  var n = t.offsetWidth;
  return i === n && (n = e.clientWidth), e.remove(), (ze = i - n);
 }
 function Ke(t, e) {
  return (
          void 0 === e && (e = !0),
          !(!t || t.nodeType !== Node.ELEMENT_NODE) &&
          (e
                  ? t.scrollHeight > t.clientHeight && (t.classList.contains("scroll") || t.classList.contains("overflow-auto") || ["auto", "scroll"].includes(window.getComputedStyle(t)["overflow-y"]))
                  : t.scrollWidth > t.clientWidth && (t.classList.contains("scroll") || t.classList.contains("overflow-auto") || ["auto", "scroll"].includes(window.getComputedStyle(t)["overflow-x"])))
          );
 }
 var Xe,
         Ge,
         Ze = {
          getScrollTarget: Ie,
          getScrollHeight: Re,
          getScrollWidth: function (t) {
           return (t === window ? document.body : t).scrollWidth;
          },
          getScrollPosition: Fe,
          getHorizontalScrollPosition: je,
          animScrollTo: Ve,
          animHorizontalScrollTo: Ne,
          setScrollPosition: We,
          setHorizontalScrollPosition: Ye,
          getScrollbarWidth: Ue,
          hasScrollbar: Ke,
         },
         Je = [],
         ti = !1,
         ei = {
          __install: function () {
           (this.__installed = !0),
                   window.addEventListener("keydown", function (t) {
                    ti = 27 === t.keyCode;
                   }),
                   window.addEventListener("blur", function () {
                    !0 === ti && (ti = !1);
                   }),
                   window.addEventListener("keyup", function (t) {
                    !0 === ti && ((ti = !1), 0 !== Je.length && !0 === tt(t, 27) && Je[Je.length - 1].fn(t));
                   });
          },
          register: function (t, e) {
           !0 === t.$q.platform.is.desktop && (!0 !== this.__installed && this.__install(), Je.push({comp: t, fn: e}));
          },
          pop: function (t) {
           if (!0 === t.$q.platform.is.desktop) {
            var e = Je.findIndex(function (e) {
             return e.comp === t;
            });
            e > -1 && Je.splice(e, 1);
           }
          },
         };
 function ii(t) {
  var e = t.split(" ");
  return (
          2 === e.length &&
          (!0 !== ["top", "center", "bottom"].includes(e[0])
                  ? (console.error("Anchor/Self position must start with one of top/center/bottom"), !1)
                  : !0 === ["left", "middle", "right", "start", "end"].includes(e[1]) || (console.error("Anchor/Self position must end with one of left/middle/right/start/end"), !1))
          );
 }
 function ni(t) {
  return !t || (2 === t.length && "number" == typeof t[0] && "number" == typeof t[1]);
 }
 var si = {"start#ltr": "left", "start#rtl": "right", "end#ltr": "right", "end#rtl": "left"};
 function oi(t, e) {
  var i = t.split(" ");
  return {vertical: i[0], horizontal: si[i[1] + "#" + (!0 === e ? "rtl" : "ltr")]};
 }
 function ri(t) {
  if (!0 === u.is.ios && void 0 !== window.visualViewport) {
   var e = document.body.style,
           i = window.visualViewport,
           n = i.offsetLeft,
           s = i.offsetTop;
   n !== Xe && (e.setProperty("--q-pe-left", n + "px"), (Xe = n)), s !== Ge && (e.setProperty("--q-pe-top", s + "px"), (Ge = s));
  }
  var o,
          r = t.el,
          a = r.scrollLeft,
          l = r.scrollTop;
  if (void 0 === t.absoluteOffset)
   o = (function (t, e) {
    var i = t.getBoundingClientRect(),
            n = i.top,
            s = i.left,
            o = i.right,
            r = i.bottom,
            a = i.width,
            l = i.height;
    return void 0 !== e && ((n -= e[1]), (s -= e[0]), (r += e[1]), (o += e[0]), (a += e[0]), (l += e[1])), {top: n, left: s, right: o, bottom: r, width: a, height: l, middle: s + (o - s) / 2, center: n + (r - n) / 2};
   })(t.anchorEl, !0 === t.cover ? [0, 0] : t.offset);
  else {
   var c = t.anchorEl.getBoundingClientRect(),
           h = c.top,
           d = c.left,
           p = h + t.absoluteOffset.top,
           f = d + t.absoluteOffset.left;
   o = {top: p, left: f, width: 1, height: 1, right: f + 1, center: p, middle: f, bottom: p + 1};
  }
  var m = {maxHeight: t.maxHeight, maxWidth: t.maxWidth, visibility: "visible"};
  (!0 !== t.fit && !0 !== t.cover) || ((m.minWidth = o.width + "px"), !0 === t.cover && (m.minHeight = o.height + "px")), Object.assign(t.el.style, m);
  var v = (function (t) {
   return {top: 0, center: t.offsetHeight / 2, bottom: t.offsetHeight, left: 0, middle: t.offsetWidth / 2, right: t.offsetWidth};
  })(t.el),
          g = {top: o[t.anchorOrigin.vertical] - v[t.selfOrigin.vertical], left: o[t.anchorOrigin.horizontal] - v[t.selfOrigin.horizontal]};
  !(function (t, e, i, n, s) {
   var o = i.bottom,
           r = i.right,
           a = Ue(),
           l = window.innerHeight - a,
           c = document.body.clientWidth;
   if (t.top < 0 || t.top + o > l)
    if ("center" === s.vertical)
     (t.top = e[n.vertical] > l / 2 ? Math.max(0, l - o) : 0), (t.maxHeight = Math.min(o, l));
    else if (e[n.vertical] > l / 2) {
     var u = Math.min(l, "center" === n.vertical ? e.center : n.vertical === s.vertical ? e.bottom : e.top);
     (t.maxHeight = Math.min(o, u)), (t.top = Math.max(0, u - o));
    } else
     (t.top = Math.max(0, "center" === n.vertical ? e.center : n.vertical === s.vertical ? e.top : e.bottom)), (t.maxHeight = Math.min(o, l - t.top));
   if (t.left < 0 || t.left + r > c)
    if (((t.maxWidth = Math.min(r, c)), "middle" === s.horizontal))
     t.left = e[n.horizontal] > c / 2 ? Math.max(0, c - r) : 0;
    else if (e[n.horizontal] > c / 2) {
     var h = Math.min(c, "middle" === n.horizontal ? e.middle : n.horizontal === s.horizontal ? e.right : e.left);
     (t.maxWidth = Math.min(r, h)), (t.left = Math.max(0, h - t.maxWidth));
    } else
     (t.left = Math.max(0, "middle" === n.horizontal ? e.middle : n.horizontal === s.horizontal ? e.left : e.right)), (t.maxWidth = Math.min(r, c - t.left));
  })(g, o, v, t.anchorOrigin, t.selfOrigin),
          (m = {top: g.top + "px", left: g.left + "px"}),
          void 0 !== g.maxHeight && ((m.maxHeight = g.maxHeight + "px"), o.height > g.maxHeight && (m.minHeight = m.maxHeight)),
          void 0 !== g.maxWidth && ((m.maxWidth = g.maxWidth + "px"), o.width > g.maxWidth && (m.minWidth = m.maxWidth)),
          Object.assign(t.el.style, m),
          t.el.scrollTop !== l && (t.el.scrollTop = l),
          t.el.scrollLeft !== a && (t.el.scrollLeft = a);
 }
 ["left", "middle", "right"].forEach(function (t) {
  (si[t + "#ltr"] = t), (si[t + "#rtl"] = t);
 });
 var ai = t.extend({
  name: "QMenu",
  mixins: [bt, It, xe, ke, Te, $e],
  directives: {ClickOutside: Ae},
  props: {
   persistent: Boolean,
   autoClose: Boolean,
   separateClosePopup: Boolean,
   noRouteDismiss: Boolean,
   noRefocus: Boolean,
   noFocus: Boolean,
   fit: Boolean,
   cover: Boolean,
   square: Boolean,
   anchor: {type: String, validator: ii},
   self: {type: String, validator: ii},
   offset: {type: Array, validator: ni},
   scrollTarget: {default: void 0},
   touchPosition: Boolean,
   maxHeight: {type: String, default: null},
   maxWidth: {type: String, default: null},
  },
  computed: {
   anchorOrigin: function () {
    return oi(this.anchor || (!0 === this.cover ? "center middle" : "bottom start"), this.$q.lang.rtl);
   },
   selfOrigin: function () {
    return !0 === this.cover ? this.anchorOrigin : oi(this.self || "top start", this.$q.lang.rtl);
   },
   menuClass: function () {
    return (!0 === this.square ? " q-menu--square" : "") + (!0 === this.isDark ? " q-menu--dark q-dark" : "");
   },
   hideOnRouteChange: function () {
    return !0 !== this.persistent && !0 !== this.noRouteDismiss;
   },
   onEvents: function () {
    var t = Object.assign({}, this.qListeners, {input: y, "popup-show": y, "popup-hide": y});
    return !0 === this.autoClose && (t.click = this.__onAutoClose), t;
   },
   attrs: function () {
    return Object.assign({}, {tabindex: -1}, this.qAttrs);
   },
  },
  methods: {
   focus: function () {
    var t = void 0 !== this.__portal && void 0 !== this.__portal.$refs ? this.__portal.$refs.inner : void 0;
    void 0 !== t && !0 !== t.contains(document.activeElement) && (t = t.querySelector("[autofocus], [data-autofocus]") || t).focus();
   },
   __show: function (t) {
    var e = this;
    if (
            ((this.__refocusTarget = !1 === this.noRefocus && null !== document.activeElement ? document.activeElement : void 0),
                    ei.register(this, function () {
                     !0 !== e.persistent && (e.$emit("escape-key"), e.hide());
                    }),
                    this.__showPortal(),
                    this.__configureScrollTarget(),
                    (this.absoluteOffset = void 0),
                    void 0 !== t && (this.touchPosition || this.contextMenu))
            ) {
     var i = v(t);
     if (void 0 !== i.left) {
      var n = this.anchorEl.getBoundingClientRect(),
              s = n.top,
              o = n.left;
      this.absoluteOffset = {left: i.left - o, top: i.top - s};
     }
    }
    void 0 === this.unwatch &&
            (this.unwatch = this.$watch(function () {
             return e.$q.screen.width + "|" + e.$q.screen.height + "|" + e.self + "|" + e.anchor + "|" + e.$q.lang.rtl;
            }, this.updatePosition)),
            this.$el.dispatchEvent(C("popup-show", {bubbles: !0})),
            !0 !== this.noFocus && null !== document.activeElement && document.activeElement.blur(),
            this.__nextTick(function () {
             e.updatePosition(), !0 !== e.noFocus && e.focus();
            }),
            this.__setTimeout(function () {
             !0 === e.$q.platform.is.ios && ((e.__avoidAutoClose = e.autoClose), e.__portal.$el.click()), e.updatePosition(), e.$emit("show", t);
            }, 300);
   },
   __hide: function (t) {
    var e = this;
    this.__anchorCleanup(!0),
            void 0 === this.__refocusTarget || null === this.__refocusTarget || (void 0 !== t && !0 === t.qClickOutside) || this.__refocusTarget.focus(),
            this.$el.dispatchEvent(C("popup-hide", {bubbles: !0})),
            this.__setTimeout(function () {
             e.__hidePortal(), e.$emit("hide", t);
            }, 300);
   },
   __anchorCleanup: function (t) {
    (this.absoluteOffset = void 0), void 0 !== this.unwatch && (this.unwatch(), (this.unwatch = void 0)), (!0 !== t && !0 !== this.showing) || (ei.pop(this), this.__unconfigureScrollTarget());
   },
   __unconfigureScrollTarget: function () {
    void 0 !== this.__scrollTarget && (this.__changeScrollEvent(this.__scrollTarget), (this.__scrollTarget = void 0));
   },
   __configureScrollTarget: function () {
    (void 0 === this.anchorEl && void 0 === this.scrollTarget) || ((this.__scrollTarget = Ie(this.anchorEl, this.scrollTarget)), this.__changeScrollEvent(this.__scrollTarget, this.updatePosition));
   },
   __onAutoClose: function (t) {
    !0 !== this.__avoidAutoClose ? (qe(this, t), void 0 !== this.qListeners.click && this.$emit("click", t)) : (this.__avoidAutoClose = !1);
   },
   updatePosition: function () {
    if (void 0 !== this.anchorEl && void 0 !== this.__portal) {
     var t = this.__portal.$el;
     8 !== t.nodeType
             ? ri({
              el: t,
              offset: this.offset,
              anchorEl: this.anchorEl,
              anchorOrigin: this.anchorOrigin,
              selfOrigin: this.selfOrigin,
              absoluteOffset: this.absoluteOffset,
              fit: this.fit,
              cover: this.cover,
              maxHeight: this.maxHeight,
              maxWidth: this.maxWidth,
             })
             : setTimeout(this.updatePosition, 25);
    }
   },
   __onClickOutside: function (t) {
    if (!0 !== this.persistent && !0 === this.showing) {
     var e = t.target.classList;
     return (
             qe(this, t),
             ("touchstart" === t.type || e.contains("q-dialog__backdrop")) &&
             (function (t) {
              if ((S(t), "mousedown" === t.type)) {
               var e = function (i) {
                i.target === t.target && S(i), document.removeEventListener("click", e, d.notPassiveCapture);
               };
               document.addEventListener("click", e, d.notPassiveCapture);
              }
             })(t),
             !0
             );
    }
   },
   __renderPortal: function (t) {
    return t("transition", {props: {name: this.transition}}, [
     !0 === this.showing
             ? t(
                     "div",
                     {
                      ref: "inner",
                      staticClass: "q-menu q-position-engine scroll" + this.menuClass,
                      class: this.contentClass,
                      style: this.contentStyle,
                      attrs: this.attrs,
                      on: this.onEvents,
                      directives: [{name: "click-outside", value: this.__onClickOutside, arg: this.anchorEl}],
                     },
                     Ot(this, "default")
                     )
             : null,
    ]);
   },
  },
  mounted: function () {
   this.__processModelChange(this.value);
  },
  beforeDestroy: function () {
   !0 === this.showing && void 0 !== this.anchorEl && this.anchorEl.dispatchEvent(C("popup-hide", {bubbles: !0}));
  },
 }),
         li = t.extend({
          name: "QBtnDropdown",
          mixins: [ce, bt],
          inheritAttrs: !1,
          props: {
           value: Boolean,
           split: Boolean,
           dropdownIcon: String,
           contentClass: [Array, String, Object],
           contentStyle: [Array, String, Object],
           cover: Boolean,
           persistent: Boolean,
           noRouteDismiss: Boolean,
           autoClose: Boolean,
           menuAnchor: {type: String, default: "bottom end"},
           menuSelf: {type: String, default: "top end"},
           menuOffset: Array,
           disableMainBtn: Boolean,
           disableDropdown: Boolean,
           noIconAnimation: Boolean,
          },
          data: function () {
           return {showing: this.value};
          },
          watch: {
           value: function (t) {
            void 0 !== this.$refs.menu && this.$refs.menu[t ? "show" : "hide"]();
           },
           split: function () {
            this.hide();
           },
          },
          render: function (t) {
           var e = this,
                   i = Ot(this, "label", []),
                   n = {"aria-expanded": !0 === this.showing ? "true" : "false", "aria-haspopup": "true"};
           (!0 === this.disable || (!1 === this.split && !0 === this.disableMainBtn) || !0 === this.disableDropdown) && (n["aria-disabled"] = "true");
           var s = [
            t(zt, {
             props: {name: this.dropdownIcon || this.$q.iconSet.arrow.dropdown},
             class: "q-btn-dropdown__arrow" + (!0 === this.showing && !1 === this.noIconAnimation ? " rotate-180" : "") + (!1 === this.split ? " q-btn-dropdown__arrow-container" : ""),
            }),
           ];
           if (
                   (!0 !== this.disableDropdown &&
                           s.push(
                                   t(
                                           ai,
                                           {
                                            ref: "menu",
                                            props: {
                                             cover: this.cover,
                                             fit: !0,
                                             persistent: this.persistent,
                                             noRouteDismiss: this.noRouteDismiss,
                                             autoClose: this.autoClose,
                                             anchor: this.menuAnchor,
                                             self: this.menuSelf,
                                             offset: this.menuOffset,
                                             contentClass: this.contentClass,
                                             contentStyle: this.contentStyle,
                                             separateClosePopup: !0,
                                            },
                                            on: mt(this, "menu", {
                                             "before-show": function (t) {
                                              (e.showing = !0), e.$emit("before-show", t);
                                             },
                                             show: function (t) {
                                              e.$emit("show", t), e.$emit("input", !0);
                                             },
                                             "before-hide": function (t) {
                                              (e.showing = !1), e.$emit("before-hide", t);
                                             },
                                             hide: function (t) {
                                              e.$emit("hide", t), e.$emit("input", !1);
                                             },
                                            }),
                                           },
                                           Ot(this, "default")
                                           )
                                   ),
                           !1 === this.split)
                   )
            return t(
                    ye,
                    {
                     class: "q-btn-dropdown q-btn-dropdown--simple",
                     props: Object.assign({}, this.$props, {disable: !0 === this.disable || !0 === this.disableMainBtn, noWrap: !0, round: !1}),
                     attrs: Object.assign({}, this.qAttrs, n),
                     on: mt(this, "nonSpl", {
                      click: function (t) {
                       e.$emit("click", t);
                      },
                     }),
                    },
                    i.concat(s)
                    );
           var o = t(
                   ye,
                   {
                    class: "q-btn-dropdown--current",
                    props: Object.assign({}, this.$props, {disable: !0 === this.disable || !0 === this.disableMainBtn, noWrap: !0, iconRight: this.iconRight, round: !1}),
                    attrs: this.qAttrs,
                    on: mt(this, "spl", {
                     click: function (t) {
                      y(t), e.hide(), e.$emit("click", t);
                     },
                    }),
                   },
                   i
                   );
           return t(
                   we,
                   {
                    props: {outline: this.outline, flat: this.flat, rounded: this.rounded, push: this.push, unelevated: this.unelevated, glossy: this.glossy, stretch: this.stretch},
                    staticClass: "q-btn-dropdown q-btn-dropdown--split no-wrap q-btn-item",
                   },
                   [
                    o,
                    t(
                            ye,
                            {
                             staticClass: "q-btn-dropdown__arrow-container q-anchor--skip",
                             attrs: n,
                             props: {
                              disable: !0 === this.disable || !0 === this.disableDropdown,
                              outline: this.outline,
                              flat: this.flat,
                              rounded: this.rounded,
                              push: this.push,
                              size: this.size,
                              color: this.color,
                              textColor: this.textColor,
                              dense: this.dense,
                              ripple: this.ripple,
                             },
                            },
                            s
                            ),
                   ]
                   );
          },
          methods: {
           toggle: function (t) {
            this.$refs.menu && this.$refs.menu.toggle(t);
           },
           show: function (t) {
            this.$refs.menu && this.$refs.menu.show(t);
           },
           hide: function (t) {
            this.$refs.menu && this.$refs.menu.hide(t);
           },
          },
          mounted: function () {
           !0 === this.value && this.show();
          },
         }),
         ci = {
          props: {name: String},
          computed: {
           formAttrs: function () {
            return {type: "hidden", name: this.name, value: this.value};
           },
          },
          methods: {
           __injectFormInput: function (t, e, i) {
            t[e](this.$createElement("input", {staticClass: "hidden", class: i, attrs: this.formAttrs, domProps: this.formDomProps}));
           },
          },
         },
         ui = {
          props: {name: String},
          computed: {
           nameProp: function () {
            return this.name || this.for;
           },
          },
         },
         hi = t.extend({
          name: "QBtnToggle",
          mixins: [Lt, ae, ci],
          props: {
           value: {required: !0},
           options: {
            type: Array,
            required: !0,
            validator: function (t) {
             return t.every(function (t) {
              return ("label" in t || "icon" in t || "slot" in t) && "value" in t;
             });
            },
           },
           color: String,
           textColor: String,
           toggleColor: {type: String, default: "primary"},
           toggleTextColor: String,
           outline: Boolean,
           flat: Boolean,
           unelevated: Boolean,
           rounded: Boolean,
           push: Boolean,
           glossy: Boolean,
           size: String,
           padding: String,
           noCaps: Boolean,
           noWrap: Boolean,
           dense: Boolean,
           readonly: Boolean,
           disable: Boolean,
           stack: Boolean,
           stretch: Boolean,
           spread: Boolean,
           clearable: Boolean,
          },
          computed: {
           hasActiveValue: function () {
            var t = this;
            return (
                    void 0 !==
                    this.options.find(function (e) {
                     return e.value === t.value;
                    })
                    );
           },
           formAttrs: function () {
            return {type: "hidden", name: this.name, value: this.value};
           },
           btnOptions: function () {
            var t = this,
                    e = function (e, i) {
                     return void 0 === e[i] ? t[i] : e[i];
                    };
            return this.options.map(function (i, n) {
             return {
              slot: i.slot,
              options: {
               key: n,
               class: i.class,
               style: i.style,
               on: Object.assign({}, t.qListeners, {
                click: function (e) {
                 return t.__set(i.value, i, e);
                },
               }),
               attrs: i.attrs,
               props: Object.assign({}, i, {
                slot: void 0,
                class: void 0,
                style: void 0,
                value: void 0,
                attrs: void 0,
                outline: t.outline,
                flat: t.flat,
                rounded: t.rounded,
                push: t.push,
                unelevated: t.unelevated,
                dense: t.dense,
                disable: !0 === t.disable || !0 === i.disable,
                color: i.value === t.value ? e(i, "toggleColor") : e(i, "color"),
                textColor: i.value === t.value ? e(i, "toggleTextColor") : e(i, "textColor"),
                noCaps: !0 === e(i, "noCaps"),
                noWrap: !0 === e(i, "noWrap"),
                size: e(i, "size"),
                padding: e(i, "padding"),
                ripple: e(i, "ripple"),
                stack: !0 === e(i, "stack"),
                stretch: !0 === e(i, "stretch"),
               }),
              },
             };
            });
           },
          },
          methods: {
           __set: function (t, e, i) {
            !0 !== this.readonly && (this.value === t ? !0 === this.clearable && (this.$emit("input", null, null), this.$emit("clear")) : this.$emit("input", t, e), this.$emit("click", i));
           },
          },
          render: function (t) {
           var e = this,
                   i = this.btnOptions.map(function (i) {
                    return t(ye, Object.assign({}, i.options), void 0 !== i.slot ? Ot(e, i.slot) : void 0);
                   });
           return (
                   void 0 !== this.name && !0 !== this.disable && !0 === this.hasActiveValue && this.__injectFormInput(i, "push"),
                   t(
                           we,
                           {
                            staticClass: "q-btn-toggle",
                            props: {outline: this.outline, flat: this.flat, rounded: this.rounded, push: this.push, stretch: this.stretch, unelevated: this.unelevated, glossy: this.glossy, spread: this.spread},
                           },
                           Et(i, this, "default")
                           )
                   );
          },
         }),
         di = t.extend({
          name: "QCard",
          mixins: [Lt, It, $t],
          props: {square: Boolean, flat: Boolean, bordered: Boolean},
          computed: {
           classes: function () {
            return (
                    "q-card" +
                    (!0 === this.isDark ? " q-card--dark q-dark" : "") +
                    (!0 === this.bordered ? " q-card--bordered" : "") +
                    (!0 === this.square ? " q-card--square no-border-radius" : "") +
                    (!0 === this.flat ? " q-card--flat no-shadow" : "")
                    );
           },
          },
          render: function (t) {
           return t(this.tag, {class: this.classes, on: Object.assign({}, this.qListeners)}, Ot(this, "default"));
          },
         }),
         pi = t.extend({
          name: "QCardSection",
          mixins: [Lt, $t],
          props: {horizontal: Boolean},
          computed: {
           classes: function () {
            return "q-card__section q-card__section--" + (!0 === this.horizontal ? "horiz row no-wrap" : "vert");
           },
          },
          render: function (t) {
           return t(this.tag, {class: this.classes, on: Object.assign({}, this.qListeners)}, Ot(this, "default"));
          },
         }),
         fi = t.extend({
          name: "QCardActions",
          mixins: [Lt, Qt],
          props: {vertical: Boolean},
          computed: {
           classes: function () {
            return "q-card__actions--" + (!0 === this.vertical ? "vert column" : "horiz row") + " " + this.alignClass;
           },
          },
          render: function (t) {
           return t("div", {staticClass: "q-card__actions", class: this.classes, on: Object.assign({}, this.qListeners)}, Ot(this, "default"));
          },
         });
 function mi(t) {
  var e = t.__qtouchswipe;
  void 0 !== e && (q(e, "main"), q(e, "temp"), !0 === u.is.firefox && x(t, !1), void 0 !== e.styleCleanup && e.styleCleanup(), delete t.__qtouchswipe);
 }
 var vi = {
  name: "touch-swipe",
  bind: function (t, e) {
   var i = e.value,
           n = e.arg,
           s = e.modifiers;
   if ((void 0 !== t.__qtouchswipe && (mi(t), (t.__qtouchswipe_destroyed = !0)), !0 === s.mouse || !0 === u.has.touch)) {
    var o = !0 === s.mouseCapture ? "Capture" : "",
            r = {
             handler: i,
             sensitivity: (function (t) {
              var e = [0.06, 6, 50];
              return (
                      "string" == typeof t &&
                      t.length &&
                      t.split(":").forEach(function (t, i) {
               var n = parseFloat(t);
               n && (e[i] = n);
              }),
                      e
                      );
             })(n),
             modifiers: s,
             direction: de(s),
             noop: f,
             mouseStart: function (t) {
              fe(t, r) &&
                      m(t) &&
                      (k(r, "temp", [
                       [document, "mousemove", "move", "notPassive" + o],
                       [document, "mouseup", "end", "notPassiveCapture"],
                      ]),
                              r.start(t, !0));
             },
             touchStart: function (t) {
              if (fe(t, r)) {
               var e = pe(t.target);
               k(r, "temp", [
                [e, "touchmove", "move", "notPassiveCapture"],
                [e, "touchcancel", "end", "notPassiveCapture"],
                [e, "touchend", "end", "notPassiveCapture"],
               ]),
                       r.start(t);
              }
             },
             start: function (e, i) {
              !0 === u.is.firefox && x(t, !0);
              var n = v(e);
              r.event = {x: n.left, y: n.top, time: Date.now(), mouse: !0 === i, dir: !1};
             },
             move: function (t) {
              if (void 0 !== r.event)
               if (!1 === r.event.dir) {
                var e = Date.now() - r.event.time;
                if (0 !== e) {
                 var i = v(t),
                         n = i.left - r.event.x,
                         s = Math.abs(n),
                         o = i.top - r.event.y,
                         a = Math.abs(o);
                 if (!0 !== r.event.mouse) {
                  if (s < r.sensitivity[1] && a < r.sensitivity[1])
                   return void r.end(t);
                 } else if (s < r.sensitivity[2] && a < r.sensitivity[2])
                  return;
                 var l = s / e,
                         c = a / e;
                 !0 === r.direction.vertical && s < a && s < 100 && c > r.sensitivity[0] && (r.event.dir = o < 0 ? "up" : "down"),
                         !0 === r.direction.horizontal && s > a && a < 100 && l > r.sensitivity[0] && (r.event.dir = n < 0 ? "left" : "right"),
                         !0 === r.direction.up && s < a && o < 0 && s < 100 && c > r.sensitivity[0] && (r.event.dir = "up"),
                         !0 === r.direction.down && s < a && o > 0 && s < 100 && c > r.sensitivity[0] && (r.event.dir = "down"),
                         !0 === r.direction.left && s > a && n < 0 && a < 100 && l > r.sensitivity[0] && (r.event.dir = "left"),
                         !0 === r.direction.right && s > a && n > 0 && a < 100 && l > r.sensitivity[0] && (r.event.dir = "right"),
                         !1 !== r.event.dir
                         ? (S(t),
                                 !0 === r.event.mouse &&
                                 (document.body.classList.add("no-pointer-events--children"),
                                         document.body.classList.add("non-selectable"),
                                         Se(),
                                         (r.styleCleanup = function (t) {
                                          (r.styleCleanup = void 0), document.body.classList.remove("non-selectable");
                                          var e = function () {
                                           document.body.classList.remove("no-pointer-events--children");
                                          };
                                          !0 === t ? setTimeout(e, 50) : e();
                                         })),
                                 r.handler({evt: t, touch: !0 !== r.event.mouse, mouse: r.event.mouse, direction: r.event.dir, duration: e, distance: {x: s, y: a}}))
                         : r.end(t);
                }
               } else
                S(t);
             },
             end: function (e) {
              void 0 !== r.event && (q(r, "temp"), !0 === u.is.firefox && x(t, !1), void 0 !== r.styleCleanup && r.styleCleanup(!0), void 0 !== e && !1 !== r.event.dir && S(e), (r.event = void 0));
             },
            };
    (t.__qtouchswipe = r),
            !0 === s.mouse && k(r, "main", [[t, "mousedown", "mouseStart", "passive" + o]]),
            !0 === u.has.touch &&
            k(r, "main", [
             [t, "touchstart", "touchStart", "passive" + (!0 === s.capture ? "Capture" : "")],
             [t, "touchmove", "noop", "notPassiveCapture"],
            ]);
   }
  },
  update: function (t, e) {
   var i = e.oldValue,
           n = e.value,
           s = t.__qtouchswipe;
   void 0 !== s && i !== n && ("function" != typeof n && s.end(), (s.handler = n));
  },
  unbind: function (t) {
   void 0 === t.__qtouchswipe_destroyed ? mi(t) : delete t.__qtouchswipe_destroyed;
  },
 };
 function gi(t) {
  return t("div", {staticClass: "q-panel scroll", attrs: {role: "tabpanel"}, on: mt(this, "stop", {input: y})}, Ot(this, "default"));
 }
 var _i = t.extend({render: gi}),
         bi = {
          mixins: [Lt],
          directives: {TouchSwipe: vi},
          props: {
           value: {required: !0},
           animated: Boolean,
           infinite: Boolean,
           swipeable: Boolean,
           vertical: Boolean,
           transitionPrev: String,
           transitionNext: String,
           keepAlive: Boolean,
           keepAliveInclude: [String, Array, RegExp],
           keepAliveExclude: [String, Array, RegExp],
           keepAliveMax: Number,
          },
          data: function () {
           return {panelIndex: null, panelTransition: null};
          },
          computed: {
           panelDirectives: function () {
            if (!0 === this.swipeable)
             return [{name: "touch-swipe", value: this.__swipe, modifiers: {horizontal: !0 !== this.vertical, vertical: this.vertical, mouse: !0}}];
           },
           contentKey: function () {
            return "string" == typeof this.value || "number" == typeof this.value ? this.value : String(this.value);
           },
           transitionPrevComputed: function () {
            return this.transitionPrev || "slide-" + (!0 === this.vertical ? "down" : "right");
           },
           transitionNextComputed: function () {
            return this.transitionNext || "slide-" + (!0 === this.vertical ? "up" : "left");
           },
           keepAliveProps: function () {
            return {include: this.keepAliveInclude, exclude: this.keepAliveExclude, max: this.keepAliveMax};
           },
           needsUniqueWrapper: function () {
            return void 0 !== this.keepAliveInclude || void 0 !== this.keepAliveExclude;
           },
          },
          watch: {
           value: function (t, e) {
            var i = this,
                    n = !0 === this.__isValidPanelName(t) ? this.__getPanelIndex(t) : -1;
            !0 !== this.__forcedPanelTransition && this.__updatePanelTransition(-1 === n ? 0 : n < this.__getPanelIndex(e) ? -1 : 1),
                    this.panelIndex !== n &&
                    ((this.panelIndex = n),
                            this.$emit("before-transition", t, e),
                            this.$nextTick(function () {
                             i.$emit("transition", t, e);
                            }));
           },
          },
          methods: {
           next: function () {
            this.__go(1);
           },
           previous: function () {
            this.__go(-1);
           },
           goTo: function (t) {
            this.$emit("input", t);
           },
           __isValidPanelName: function (t) {
            return void 0 !== t && null !== t && "" !== t;
           },
           __getPanelIndex: function (t) {
            return this.panels.findIndex(function (e) {
             var i = e.componentOptions.propsData;
             return i.name === t && "" !== i.disable && !0 !== i.disable;
            });
           },
           __getEnabledPanels: function () {
            return this.panels.filter(function (t) {
             var e = t.componentOptions.propsData;
             return "" !== e.disable && !0 !== e.disable;
            });
           },
           __updatePanelTransition: function (t) {
            var e = 0 !== t && !0 === this.animated && -1 !== this.panelIndex ? "q-transition--" + (-1 === t ? this.transitionPrevComputed : this.transitionNextComputed) : null;
            this.panelTransition !== e && (this.panelTransition = e);
           },
           __go: function (t, e) {
            var i = this;
            void 0 === e && (e = this.panelIndex);
            for (var n = e + t, s = this.panels; n > -1 && n < s.length; ) {
             var o = s[n].componentOptions;
             if (void 0 !== o && "" !== o.propsData.disable && !0 !== o.propsData.disable)
              return (
                      this.__updatePanelTransition(t),
                      (this.__forcedPanelTransition = !0),
                      this.$emit("input", s[n].componentOptions.propsData.name),
                      void setTimeout(function () {
                       i.__forcedPanelTransition = !1;
                      })
                      );
             n += t;
            }
            !0 === this.infinite && s.length > 0 && -1 !== e && e !== s.length && this.__go(t, -1 === t ? s.length : -1);
           },
           __swipe: function (t) {
            var e = !0 === this.vertical ? "up" : "left";
            this.__go((!0 === this.$q.lang.rtl ? -1 : 1) * (t.direction === e ? 1 : -1));
           },
           __updatePanelIndex: function () {
            var t = this.__getPanelIndex(this.value);
            return this.panelIndex !== t && (this.panelIndex = t), !0;
           },
           __getPanelContent: function (e) {
            var i = this;
            if (0 !== this.panels.length) {
             var n = this.__isValidPanelName(this.value) && this.__updatePanelIndex() && this.panels[this.panelIndex],
                     s =
                     !0 === this.keepAlive
                     ? [
                      e("keep-alive", {props: this.keepAliveProps}, [
                       e(
                               !0 === this.needsUniqueWrapper
                               ? vt(this, this.contentKey, function () {
                                return t.extend({name: i.contentKey, render: gi});
                               })
                               : _i,
                               {key: this.contentKey},
                               [n]
                               ),
                      ]),
                     ]
                     : [e("div", {staticClass: "q-panel scroll", key: this.contentKey, attrs: {role: "tabpanel"}, on: mt(this, "stop", {input: y})}, [n])];
             return !0 === this.animated ? [e("transition", {props: {name: this.panelTransition}}, s)] : s;
            }
           },
          },
          render: function (t) {
           var e = this;
           return (
                   (this.panels = Ot(this, "default", []).filter(function (t) {
                    return void 0 !== t && void 0 !== t.componentOptions && void 0 !== t.componentOptions.propsData && e.__isValidPanelName(t.componentOptions.propsData.name);
                   })),
                   this.__renderPanels(t)
                   );
          },
         },
         yi = {mixins: [Lt], props: {name: {required: !0}, disable: Boolean}},
         wi = {
          props: {fullscreen: Boolean, noRouteFullscreenExit: Boolean},
          data: function () {
           return {inFullscreen: !1};
          },
          watch: {
           $route: function () {
            !0 !== this.noRouteFullscreenExit && this.exitFullscreen();
           },
           fullscreen: function (t) {
            this.inFullscreen !== t && this.toggleFullscreen();
           },
           inFullscreen: function (t) {
            this.$emit("update:fullscreen", t), this.$emit("fullscreen", t);
           },
          },
          methods: {
           toggleFullscreen: function () {
            !0 === this.inFullscreen ? this.exitFullscreen() : this.setFullscreen();
           },
           setFullscreen: function () {
            !0 !== this.inFullscreen &&
                    ((this.inFullscreen = !0),
                            (this.container = this.$el.parentNode),
                            this.container.replaceChild(this.fullscreenFillerNode, this.$el),
                            document.body.appendChild(this.$el),
                            document.body.classList.add("q-body--fullscreen-mixin"),
                            (this.__historyFullscreen = {handler: this.exitFullscreen}),
                            A.add(this.__historyFullscreen));
           },
           exitFullscreen: function () {
            var t = this;
            !0 === this.inFullscreen &&
                    (void 0 !== this.__historyFullscreen && (A.remove(this.__historyFullscreen), (this.__historyFullscreen = void 0)),
                            this.container.replaceChild(this.$el, this.fullscreenFillerNode),
                            document.body.classList.remove("q-body--fullscreen-mixin"),
                            (this.inFullscreen = !1),
                            void 0 !== this.$el.scrollIntoView &&
                            setTimeout(function () {
                             t.$el.scrollIntoView();
                            }));
           },
          },
          beforeMount: function () {
           this.fullscreenFillerNode = document.createElement("span");
          },
          mounted: function () {
           !0 === this.fullscreen && this.setFullscreen();
          },
          beforeDestroy: function () {
           this.exitFullscreen();
          },
         },
         Si = "function" == typeof Map,
         xi = "function" == typeof Set,
         Ci = "function" == typeof ArrayBuffer;
 function ki(t, e) {
  if (t === e)
   return !0;
  if (null !== t && null !== e && "object" == typeof t && "object" == typeof e) {
   if (t.constructor !== e.constructor)
    return !1;
   var i, n;
   if (t.constructor === Array) {
    if ((i = t.length) !== e.length)
     return !1;
    for (n = i; 0 != n--; )
     if (!0 !== ki(t[n], e[n]))
      return !1;
    return !0;
   }
   if (!0 === Si && t.constructor === Map) {
    if (t.size !== e.size)
     return !1;
    for (n = t.entries().next(); !0 !== n.done; ) {
     if (!0 !== e.has(n.value[0]))
      return !1;
     n = n.next();
    }
    for (n = t.entries().next(); !0 !== n.done; ) {
     if (!0 !== ki(n.value[1], e.get(n.value[0])))
      return !1;
     n = n.next();
    }
    return !0;
   }
   if (!0 === xi && t.constructor === Set) {
    if (t.size !== e.size)
     return !1;
    for (n = t.entries().next(); !0 !== n.done; ) {
     if (!0 !== e.has(n.value[0]))
      return !1;
     n = n.next();
    }
    return !0;
   }
   if (!0 === Ci && null != t.buffer && t.buffer.constructor === ArrayBuffer) {
    if ((i = t.length) !== e.length)
     return !1;
    for (n = i; 0 != n--; )
     if (t[n] !== e[n])
      return !1;
    return !0;
   }
   if (t.constructor === RegExp)
    return t.source === e.source && t.flags === e.flags;
   if (t.valueOf !== Object.prototype.valueOf)
    return t.valueOf() === e.valueOf();
   if (t.toString !== Object.prototype.toString)
    return t.toString() === e.toString();
   var s = Object.keys(t);
   if ((i = s.length) !== Object.keys(e).length)
    return !1;
   for (n = i; 0 != n--; ) {
    var o = s[n];
    if (!0 !== ki(t[o], e[o]))
     return !1;
   }
   return !0;
  }
  return t != t && e != e;
 }
 function qi(t) {
  return "[object Date]" === Object.prototype.toString.call(t);
 }
 function Ti(t) {
  return "number" == typeof t && isFinite(t);
 }
 var Mi = t.extend({
  name: "QCarousel",
  mixins: [It, bi, wi],
  props: {
   height: String,
   padding: Boolean,
   controlType: {
    type: String,
    validator: function (t) {
     return ["regular", "flat", "outline", "push", "unelevated"].includes(t);
    },
    default: "flat",
   },
   controlColor: String,
   controlTextColor: String,
   autoplay: [Number, Boolean],
   arrows: Boolean,
   prevIcon: String,
   nextIcon: String,
   navigation: Boolean,
   navigationPosition: {
    type: String,
    validator: function (t) {
     return ["top", "right", "bottom", "left"].includes(t);
    },
   },
   navigationIcon: String,
   navigationActiveIcon: String,
   thumbnails: Boolean,
  },
  computed: {
   style: function () {
    if (!0 !== this.inFullscreen && void 0 !== this.height)
     return {height: this.height};
   },
   direction: function () {
    return !0 === this.vertical ? "vertical" : "horizontal";
   },
   classes: function () {
    return (
            "q-carousel q-panel-parent q-carousel--with" +
            (!0 === this.padding ? "" : "out") +
            "-padding" +
            (!0 === this.inFullscreen ? " fullscreen" : "") +
            (!0 === this.isDark ? " q-carousel--dark q-dark" : "") +
            (!0 === this.arrows ? " q-carousel--arrows-" + this.direction : "") +
            (!0 === this.navigation ? " q-carousel--navigation-" + this.navigationPositionComputed : "")
            );
   },
   arrowIcons: function () {
    var t = [this.prevIcon || this.$q.iconSet.carousel[!0 === this.vertical ? "up" : "left"], this.nextIcon || this.$q.iconSet.carousel[!0 === this.vertical ? "down" : "right"]];
    return !1 === this.vertical && !0 === this.$q.lang.rtl ? t.reverse() : t;
   },
   navIcon: function () {
    return this.navigationIcon || this.$q.iconSet.carousel.navigationIcon;
   },
   navActiveIcon: function () {
    return this.navigationActiveIcon || this.navIcon;
   },
   navigationPositionComputed: function () {
    return this.navigationPosition || (!0 === this.vertical ? "right" : "bottom");
   },
   controlProps: function () {
    var t;
    return ((t = {color: this.controlColor, textColor: this.controlTextColor, round: !0})[this.controlType] = !0), (t.dense = !0), t;
   },
   transitionPrevComputed: function () {
    return this.transitionPrev || "fade";
   },
   transitionNextComputed: function () {
    return this.transitionNext || "fade";
   },
  },
  watch: {
   value: function () {
    this.autoplay && (clearInterval(this.timer), this.__startTimer());
   },
   autoplay: function (t) {
    t ? this.__startTimer() : clearInterval(this.timer);
   },
  },
  methods: {
   __startTimer: function () {
    this.timer = setTimeout(this.next, Ti(this.autoplay) ? this.autoplay : 5e3);
   },
   __getNavigationContainer: function (t, e, i) {
    return t(
            "div",
            {
             class:
                     "q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--" +
                     e +
                     " q-carousel__navigation--" +
                     this.navigationPositionComputed +
                     (void 0 !== this.controlColor ? " text-" + this.controlColor : ""),
            },
            [t("div", {staticClass: "q-carousel__navigation-inner flex flex-center no-wrap"}, this.__getEnabledPanels().map(i))]
            );
   },
   __getContent: function (t) {
    var e = this,
            i = [];
    if (!0 === this.navigation) {
     var n =
             void 0 !== this.$scopedSlots["navigation-icon"]
             ? this.$scopedSlots["navigation-icon"]
             : function (i) {
              return t(ye, {
               key: "nav" + i.name,
               class: "q-carousel__navigation-icon q-carousel__navigation-icon--" + (!0 === i.active ? "" : "in") + "active",
               props: i.btnProps,
               on: mt(e, "nav#" + i.name, {click: i.onClick}),
              });
             },
             s = this.panels.length - 1;
     i.push(
             this.__getNavigationContainer(t, "buttons", function (t, i) {
              var o = t.componentOptions.propsData.name,
                      r = e.panelIndex === i;
              return n({
               index: i,
               maxIndex: s,
               name: o,
               active: r,
               btnProps: Object.assign({}, {icon: !0 === r ? e.navActiveIcon : e.navIcon, size: "sm"}, e.controlProps),
               onClick: function () {
                e.goTo(o);
               },
              });
             })
             );
    } else if (!0 === this.thumbnails) {
     var o = void 0 !== this.controlColor ? " text-" + this.controlColor : "";
     i.push(
             this.__getNavigationContainer(t, "thumbnails", function (i) {
              var n = i.componentOptions.propsData;
              return t("img", {
               class: "q-carousel__thumbnail q-carousel__thumbnail--" + (n.name === e.value ? "" : "in") + "active" + o,
               attrs: {src: n.imgSrc},
               key: "tmb#" + n.name,
               on: mt(e, "tmb#" + n.name, {
                click: function () {
                 e.goTo(n.name);
                },
               }),
              });
             })
             );
    }
    return (
            !0 === this.arrows &&
            this.panelIndex >= 0 &&
            ((!0 === this.infinite || this.panelIndex > 0) &&
                    i.push(
                            t("div", {key: "prev", staticClass: "q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--" + this.direction + " absolute flex flex-center"}, [
                             t(ye, {props: Object.assign({}, {icon: this.arrowIcons[0]}, this.controlProps), on: mt(this, "prev", {click: this.previous})}),
                            ])
                            ),
                    (!0 === this.infinite || this.panelIndex < this.panels.length - 1) &&
                    i.push(
                            t("div", {key: "next", staticClass: "q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--" + this.direction + " absolute flex flex-center"}, [
                             t(ye, {props: Object.assign({}, {icon: this.arrowIcons[1]}, this.controlProps), on: mt(this, "next", {click: this.next})}),
                            ])
                            )),
            Et(i, this, "control")
            );
   },
   __renderPanels: function (t) {
    return t(
            "div",
            {style: this.style, class: this.classes, on: Object.assign({}, this.qListeners)},
            [t("div", {staticClass: "q-carousel__slides-container", directives: this.panelDirectives}, this.__getPanelContent(t))].concat(this.__getContent(t))
            );
   },
  },
  mounted: function () {
   this.autoplay && this.__startTimer();
  },
  beforeDestroy: function () {
   clearInterval(this.timer);
  },
 }),
         $i = t.extend({
          name: "QCarouselSlide",
          mixins: [yi],
          props: {imgSrc: String},
          computed: {
           style: function () {
            if (this.imgSrc)
             return {backgroundImage: 'url("' + this.imgSrc + '")'};
           },
          },
          render: function (t) {
           return t("div", {staticClass: "q-carousel__slide", style: this.style, on: Object.assign({}, this.qListeners)}, Ot(this, "default"));
          },
         }),
         Li = t.extend({
          name: "QCarouselControl",
          mixins: [Lt],
          props: {
           position: {
            type: String,
            default: "bottom-right",
            validator: function (t) {
             return ["top-right", "top-left", "bottom-right", "bottom-left", "top", "right", "bottom", "left"].includes(t);
            },
           },
           offset: {
            type: Array,
            default: function () {
             return [18, 18];
            },
            validator: function (t) {
             return 2 === t.length;
            },
           },
          },
          computed: {
           classes: function () {
            return "absolute-" + this.position;
           },
           style: function () {
            return {margin: this.offset[1] + "px " + this.offset[0] + "px"};
           },
          },
          render: function (t) {
           return t("div", {staticClass: "q-carousel__control absolute", style: this.style, class: this.classes, on: Object.assign({}, this.qListeners)}, Ot(this, "default"));
          },
         }),
         Oi = t.extend({
          name: "QChatMessage",
          mixins: [Lt],
          props: {
           sent: Boolean,
           label: String,
           bgColor: String,
           textColor: String,
           name: String,
           avatar: String,
           text: Array,
           stamp: String,
           size: String,
           labelSanitize: Boolean,
           nameSanitize: Boolean,
           textSanitize: Boolean,
           stampSanitize: Boolean,
          },
          computed: {
           textClass: function () {
            return "q-message-text-content q-message-text-content--" + this.op + (void 0 !== this.textColor ? " text-" + this.textColor : "");
           },
           messageClass: function () {
            return "q-message-text q-message-text--" + this.op + (void 0 !== this.bgColor ? " text-" + this.bgColor : "");
           },
           containerClass: function () {
            return "q-message-container row items-end no-wrap" + (!0 === this.sent ? " reverse" : "");
           },
           sizeClass: function () {
            if (void 0 !== this.size)
             return "col-" + this.size;
           },
           op: function () {
            return !0 === this.sent ? "sent" : "received";
           },
          },
          methods: {
           __getText: function (t) {
            var e = this,
                    i = !0 === this.textSanitize ? "textContent" : "innerHTML",
                    n = !0 === this.stampSanitize ? "textContent" : "innerHTML";
            return this.text.map(function (s, o) {
             var r, a;
             return t("div", {key: o, class: e.messageClass}, [
              t("div", {class: e.textClass}, [t("div", {domProps: ((r = {}), (r[i] = s), r)}), e.stamp ? t("div", {staticClass: "q-message-stamp", domProps: ((a = {}), (a[n] = e.stamp), a)}) : null]),
             ]);
            });
           },
           __getMessage: function (t) {
            var e,
                    i = Bt(this, "default", []);
            return (
                    void 0 !== this.stamp && i.push(t("div", {staticClass: "q-message-stamp", domProps: ((e = {}), (e[!0 === this.stampSanitize ? "textContent" : "innerHTML"] = this.stamp), e)})),
                    t("div", {class: this.messageClass}, [t("div", {staticClass: "q-message-text-content", class: this.textClass}, i)])
                    );
           },
          },
          render: function (t) {
           var e,
                   i,
                   n = [];
           void 0 !== this.$scopedSlots.avatar
                   ? n.push(this.$scopedSlots.avatar())
                   : void 0 !== this.avatar && n.push(t("img", {class: "q-message-avatar q-message-avatar--" + this.op, attrs: {src: this.avatar, "aria-hidden": "true"}}));
           var s = [];
           void 0 !== this.name && s.push(t("div", {class: "q-message-name q-message-name--" + this.op, domProps: ((e = {}), (e[!0 === this.nameSanitize ? "textContent" : "innerHTML"] = this.name), e)})),
                   void 0 !== this.text && s.push(this.__getText(t)),
                   void 0 !== this.$scopedSlots.default && s.push(this.__getMessage(t)),
                   n.push(t("div", {class: this.sizeClass}, s));
           var o = [];
           return (
                   this.label && o.push(t("div", {staticClass: "q-message-label text-center", domProps: ((i = {}), (i[!0 === this.labelSanitize ? "textContent" : "innerHTML"] = this.label), i)})),
                   o.push(t("div", {class: this.containerClass}, n)),
                   t("div", {class: "q-message q-message-" + this.op, on: Object.assign({}, this.qListeners)}, o)
                   );
          },
         }),
         Bi = Tt({xs: 30, sm: 35, md: 40, lg: 50, xl: 60}),
         Ei = {
          computed: {
           __refocusTargetEl: function () {
            if (!0 !== this.disable)
             return this.$createElement("span", {ref: "refocusTarget", staticClass: "no-outline", attrs: {tabindex: -1}});
           },
          },
          methods: {
           __refocusTarget: function (t) {
            void 0 !== t && 0 === t.type.indexOf("key")
                    ? document.activeElement !== this.$el && !0 === this.$el.contains(document.activeElement) && this.$el.focus()
                    : (void 0 !== t && !0 !== this.$el.contains(t.target)) || void 0 === this.$refs.refocusTarget || this.$refs.refocusTarget.focus();
           },
          },
         },
         Pi = {
          mixins: [It, Bi, ci, Ei],
          props: {
           value: {required: !0, default: null},
           val: {},
           trueValue: {default: !0},
           falseValue: {default: !1},
           indeterminateValue: {default: null},
           toggleOrder: {
            type: String,
            validator: function (t) {
             return "tf" === t || "ft" === t;
            },
           },
           toggleIndeterminate: Boolean,
           label: String,
           leftLabel: Boolean,
           color: String,
           keepColor: Boolean,
           dense: Boolean,
           disable: Boolean,
           tabindex: [String, Number],
          },
          computed: {
           isTrue: function () {
            return !0 === this.modelIsArray ? this.index > -1 : this.value === this.trueValue;
           },
           isFalse: function () {
            return !0 === this.modelIsArray ? -1 === this.index : this.value === this.falseValue;
           },
           isIndeterminate: function () {
            return !1 === this.isTrue && !1 === this.isFalse;
           },
           index: function () {
            if (!0 === this.modelIsArray)
             return this.value.indexOf(this.val);
           },
           modelIsArray: function () {
            return void 0 !== this.val && Array.isArray(this.value);
           },
           computedTabindex: function () {
            return !0 === this.disable ? -1 : this.tabindex || 0;
           },
           classes: function () {
            return (
                    "q-" +
                    this.type +
                    " cursor-pointer no-outline row inline no-wrap items-center" +
                    (!0 === this.disable ? " disabled" : "") +
                    (!0 === this.isDark ? " q-" + this.type + "--dark" : "") +
                    (!0 === this.dense ? " q-" + this.type + "--dense" : "") +
                    (!0 === this.leftLabel ? " reverse" : "")
                    );
           },
           innerClass: function () {
            var t = !0 === this.isTrue ? "truthy" : !0 === this.isFalse ? "falsy" : "indet",
                    e = void 0 === this.color || (!0 !== this.keepColor && ("toggle" === this.type ? !0 !== this.isTrue : !0 === this.isFalse)) ? "" : " text-" + this.color;
            return "q-" + this.type + "__inner--" + t + e;
           },
           formAttrs: function () {
            var t = {type: "checkbox"};
            return void 0 !== this.name && Object.assign(t, {checked: this.isTrue, name: this.name, value: !0 === this.modelIsArray ? this.val : this.trueValue}), t;
           },
           attrs: function () {
            var t = {tabindex: this.computedTabindex, role: "checkbox", "aria-label": this.label, "aria-checked": !0 === this.isIndeterminate ? "mixed" : !0 === this.isTrue ? "true" : "false"};
            return !0 === this.disable && (t["aria-disabled"] = "true"), t;
           },
          },
          methods: {
           toggle: function (t) {
            void 0 !== t && (S(t), this.__refocusTarget(t)), !0 !== this.disable && this.$emit("input", this.__getNextValue(), t);
           },
           __getNextValue: function () {
            if (!0 === this.modelIsArray) {
             if (!0 === this.isTrue) {
              var t = this.value.slice();
              return t.splice(this.index, 1), t;
             }
             return this.value.concat([this.val]);
            }
            if (!0 === this.isTrue) {
             if ("ft" !== this.toggleOrder || !1 === this.toggleIndeterminate)
              return this.falseValue;
            } else {
             if (!0 !== this.isFalse)
              return "ft" !== this.toggleOrder ? this.trueValue : this.falseValue;
             if ("ft" === this.toggleOrder || !1 === this.toggleIndeterminate)
              return this.trueValue;
            }
            return this.indeterminateValue;
           },
           __onKeydown: function (t) {
            (13 !== t.keyCode && 32 !== t.keyCode) || S(t);
           },
           __onKeyup: function (t) {
            (13 !== t.keyCode && 32 !== t.keyCode) || this.toggle(t);
           },
          },
          render: function (t) {
           var e = this.__getInner(t);
           !0 !== this.disable && this.__injectFormInput(e, "unshift", "q-" + this.type + "__native absolute q-ma-none q-pa-none");
           var i = [t("div", {staticClass: "q-" + this.type + "__inner relative-position non-selectable", class: this.innerClass, style: this.sizeStyle}, e)];
           void 0 !== this.__refocusTargetEl && i.push(this.__refocusTargetEl);
           var n = void 0 !== this.label ? Et([this.label], this, "default") : Ot(this, "default");
           return (
                   void 0 !== n && i.push(t("div", {staticClass: "q-" + this.type + "__label q-anchor--skip"}, n)),
                   t("div", {class: this.classes, attrs: this.attrs, on: mt(this, "inpExt", {click: this.toggle, keydown: this.__onKeydown, keyup: this.__onKeyup})}, i)
                   );
          },
         },
         zi = t.extend({
          name: "QCheckbox",
          mixins: [Pi],
          methods: {
           __getInner: function (t) {
            return [
             t("div", {staticClass: "q-checkbox__bg absolute"}, [
              t("svg", {staticClass: "q-checkbox__svg fit absolute-full", attrs: {focusable: "false", viewBox: "0 0 24 24", "aria-hidden": "true"}}, [
               t("path", {staticClass: "q-checkbox__truthy", attrs: {fill: "none", d: "M1.73,12.91 8.1,19.28 22.79,4.59"}}),
               t("path", {staticClass: "q-checkbox__indet", attrs: {d: "M4,14H20V10H4"}}),
              ]),
             ]),
            ];
           },
          },
          created: function () {
           this.type = "checkbox";
          },
         }),
         Ai = t.extend({
          name: "QChip",
          mixins: [ae, It, Tt({xs: 8, sm: 10, md: 14, lg: 20, xl: 24})],
          model: {event: "remove"},
          props: {
           dense: Boolean,
           icon: String,
           iconRight: String,
           iconRemove: String,
           iconSelected: String,
           label: [String, Number],
           color: String,
           textColor: String,
           value: {type: Boolean, default: !0},
           selected: {type: Boolean, default: null},
           square: Boolean,
           outline: Boolean,
           clickable: Boolean,
           removable: Boolean,
           tabindex: [String, Number],
           disable: Boolean,
          },
          computed: {
           classes: function () {
            var t,
                    e = (!0 === this.outline && this.color) || this.textColor;
            return (
                    ((t = {})["bg-" + this.color] = !1 === this.outline && void 0 !== this.color),
                    (t["text-" + e + " q-chip--colored"] = e),
                    (t.disabled = this.disable),
                    (t["q-chip--dense"] = this.dense),
                    (t["q-chip--outline"] = this.outline),
                    (t["q-chip--selected"] = this.selected),
                    (t["q-chip--clickable cursor-pointer non-selectable q-hoverable"] = this.isClickable),
                    (t["q-chip--square"] = this.square),
                    (t["q-chip--dark q-dark"] = this.isDark),
                    t
                    );
           },
           hasLeftIcon: function () {
            return !0 === this.selected || void 0 !== this.icon;
           },
           leftIcon: function () {
            return !0 === this.selected ? this.iconSelected || this.$q.iconSet.chip.selected : this.icon;
           },
           removeIcon: function () {
            return this.iconRemove || this.$q.iconSet.chip.remove;
           },
           isClickable: function () {
            return !1 === this.disable && (!0 === this.clickable || null !== this.selected);
           },
           attrs: function () {
            return !0 === this.disable ? {tabindex: -1, "aria-disabled": "true"} : {tabindex: this.tabindex || 0};
           },
          },
          methods: {
           __onKeyup: function (t) {
            13 === t.keyCode && this.__onClick(t);
           },
           __onClick: function (t) {
            this.disable || (this.$emit("update:selected", !this.selected), this.$emit("click", t));
           },
           __onRemove: function (t) {
            (void 0 !== t.keyCode && 13 !== t.keyCode) || (S(t), !this.disable && this.$emit("remove", !1));
           },
           __getContent: function (t) {
            var e = [];
            !0 === this.isClickable && e.push(t("div", {staticClass: "q-focus-helper"})), !0 === this.hasLeftIcon && e.push(t(zt, {staticClass: "q-chip__icon q-chip__icon--left", props: {name: this.leftIcon}}));
            var i = void 0 !== this.label ? [t("div", {staticClass: "ellipsis"}, [this.label])] : void 0;
            return (
                    e.push(t("div", {staticClass: "q-chip__content col row no-wrap items-center q-anchor--skip"}, Pt(i, this, "default"))),
                    this.iconRight && e.push(t(zt, {staticClass: "q-chip__icon q-chip__icon--right", props: {name: this.iconRight}})),
                    !0 === this.removable &&
                    e.push(t(zt, {staticClass: "q-chip__icon q-chip__icon--remove cursor-pointer", props: {name: this.removeIcon}, attrs: this.attrs, on: mt(this, "non", {click: this.__onRemove, keyup: this.__onRemove})})),
                    e
                    );
           },
          },
          render: function (t) {
           if (!1 !== this.value) {
            var e = {staticClass: "q-chip row inline no-wrap items-center", class: this.classes, style: this.sizeStyle};
            return (
                    !0 === this.isClickable &&
                    Object.assign(e, {attrs: this.attrs, on: mt(this, "click", {click: this.__onClick, keyup: this.__onKeyup}), directives: mt(this, "dir#" + this.ripple, [{name: "ripple", value: this.ripple}])}),
                    t("div", e, this.__getContent(t))
                    );
           }
          },
         }),
         Di = 100 * Math.PI,
         Ii = Math.round(1e3 * Di) / 1e3,
         Ri = t.extend({
          name: "QCircularProgress",
          mixins: [Lt, Mt],
          props: {
           value: {type: Number, default: 0},
           min: {type: Number, default: 0},
           max: {type: Number, default: 100},
           color: String,
           centerColor: String,
           trackColor: String,
           fontSize: String,
           thickness: {
            type: Number,
            default: 0.2,
            validator: function (t) {
             return t >= 0 && t <= 1;
            },
           },
           angle: {type: Number, default: 0},
           indeterminate: Boolean,
           showValue: Boolean,
           reverse: Boolean,
           instantFeedback: Boolean,
          },
          computed: {
           normalizedValue: function () {
            return ht(this.value, this.min, this.max);
           },
           svgStyle: function () {
            var t = !0 === this.$q.lang.rtl ? -this.angle : this.angle;
            return {transform: this.reverse !== (!0 === this.$q.lang.rtl) ? "scale3d(-1, 1, 1) rotate3d(0, 0, 1, " + (-90 - t) + "deg)" : "rotate3d(0, 0, 1, " + (t - 90) + "deg)"};
           },
           circleStyle: function () {
            if (!0 !== this.instantFeedback && !0 !== this.indeterminate)
             return {transition: "stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease"};
           },
           viewBox: function () {
            return 100 / (1 - this.thickness / 2);
           },
           viewBoxAttr: function () {
            return this.viewBox / 2 + " " + this.viewBox / 2 + " " + this.viewBox + " " + this.viewBox;
           },
           strokeDashOffset: function () {
            return (1 - (this.normalizedValue - this.min) / (this.max - this.min)) * Di;
           },
           strokeWidth: function () {
            return (this.thickness / 2) * this.viewBox;
           },
           attrs: function () {
            return {role: "progressbar", "aria-valuemin": this.min, "aria-valuemax": this.max, "aria-valuenow": !0 === this.indeterminate ? void 0 : this.normalizedValue};
           },
          },
          methods: {
           __getCircle: function (t, e) {
            var i = e.thickness,
                    n = e.offset,
                    s = e.color;
            return t("circle", {
             staticClass: "q-circular-progress__" + e.cls,
             class: void 0 !== s ? "text-" + s : null,
             style: this.circleStyle,
             attrs: {fill: "transparent", stroke: "currentColor", "stroke-width": i, "stroke-dasharray": Ii, "stroke-dashoffset": n, cx: this.viewBox, cy: this.viewBox, r: 50},
            });
           },
          },
          render: function (t) {
           var e = [];
           void 0 !== this.centerColor &&
                   "transparent" !== this.centerColor &&
                   e.push(t("circle", {staticClass: "q-circular-progress__center", class: "text-" + this.centerColor, attrs: {fill: "currentColor", r: 50 - this.strokeWidth / 2, cx: this.viewBox, cy: this.viewBox}})),
                   void 0 !== this.trackColor && "transparent" !== this.trackColor && e.push(this.__getCircle(t, {cls: "track", thickness: this.strokeWidth, offset: 0, color: this.trackColor})),
                   e.push(this.__getCircle(t, {cls: "circle", thickness: this.strokeWidth, offset: this.strokeDashOffset, color: this.color}));
           var i = [t("svg", {staticClass: "q-circular-progress__svg", style: this.svgStyle, attrs: {focusable: "false", viewBox: this.viewBoxAttr, "aria-hidden": "true"}}, e)];
           return (
                   !0 === this.showValue &&
                   i.push(
                           t(
                                   "div",
                                   {staticClass: "q-circular-progress__text absolute-full row flex-center content-center", style: {fontSize: this.fontSize}},
                                   void 0 !== this.$scopedSlots.default ? this.$scopedSlots.default() : [t("div", [this.normalizedValue])]
                                   )
                           ),
                   t(
                           "div",
                           {staticClass: "q-circular-progress", class: "q-circular-progress--" + (!0 === this.indeterminate ? "in" : "") + "determinate", style: this.sizeStyle, on: Object.assign({}, this.qListeners), attrs: this.attrs},
                           Pt(i, this, "internal")
                           )
                   );
          },
         }),
         Fi = /^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,
         ji = /^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,
         Vi = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,
         Ni = /^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,
         Hi = /^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,
         Qi = {
          date: function (t) {
           return /^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(t);
          },
          time: function (t) {
           return /^([0-1]?\d|2[0-3]):[0-5]\d$/.test(t);
          },
          fulltime: function (t) {
           return /^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(t);
          },
          timeOrFulltime: function (t) {
           return /^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(t);
          },
          hexColor: function (t) {
           return Fi.test(t);
          },
          hexaColor: function (t) {
           return ji.test(t);
          },
          hexOrHexaColor: function (t) {
           return Vi.test(t);
          },
          rgbColor: function (t) {
           return Ni.test(t);
          },
          rgbaColor: function (t) {
           return Hi.test(t);
          },
          rgbOrRgbaColor: function (t) {
           return Ni.test(t) || Hi.test(t);
          },
          hexOrRgbColor: function (t) {
           return Fi.test(t) || Ni.test(t);
          },
          hexaOrRgbaColor: function (t) {
           return ji.test(t) || Hi.test(t);
          },
          anyColor: function (t) {
           return Vi.test(t) || Ni.test(t) || Hi.test(t);
          },
         },
         Wi = {testPattern: Qi};
 function Yi(t, e, i) {
  var n,
          s = v(t),
          o = s.left - e.event.x,
          r = s.top - e.event.y,
          a = Math.abs(o),
          l = Math.abs(r),
          c = e.direction;
  !0 === c.horizontal && !0 !== c.vertical
          ? (n = o < 0 ? "left" : "right")
          : !0 !== c.horizontal && !0 === c.vertical
          ? (n = r < 0 ? "up" : "down")
          : !0 === c.up && r < 0
          ? ((n = "up"), a > l && (!0 === c.left && o < 0 ? (n = "left") : !0 === c.right && o > 0 && (n = "right")))
          : !0 === c.down && r > 0
          ? ((n = "down"), a > l && (!0 === c.left && o < 0 ? (n = "left") : !0 === c.right && o > 0 && (n = "right")))
          : !0 === c.left && o < 0
          ? ((n = "left"), a < l && (!0 === c.up && r < 0 ? (n = "up") : !0 === c.down && r > 0 && (n = "down")))
          : !0 === c.right && o > 0 && ((n = "right"), a < l && (!0 === c.up && r < 0 ? (n = "up") : !0 === c.down && r > 0 && (n = "down")));
  var u = !1;
  if (void 0 === n && !1 === i) {
   if (!0 === e.event.isFirst || void 0 === e.event.lastDir)
    return {};
   (u = !0), "left" === (n = e.event.lastDir) || "right" === n ? ((s.left -= o), (a = 0), (o = 0)) : ((s.top -= r), (l = 0), (r = 0));
  }
  return {
   synthetic: u,
   payload: {
    evt: t,
    touch: !0 !== e.event.mouse,
    mouse: !0 === e.event.mouse,
    position: s,
    direction: n,
    isFirst: e.event.isFirst,
    isFinal: !0 === i,
    duration: Date.now() - e.event.time,
    distance: {x: a, y: l},
    offset: {x: o, y: r},
    delta: {x: s.left - e.event.lastX, y: s.top - e.event.lastY},
   },
  };
 }
 function Ui(t) {
  var e = t.__qtouchpan;
  void 0 !== e && (void 0 !== e.event && e.end(), q(e, "main"), q(e, "temp"), !0 === u.is.firefox && x(t, !1), void 0 !== e.styleCleanup && e.styleCleanup(), delete t.__qtouchpan);
 }
 var Ki = 0,
         Xi = {
          name: "touch-pan",
          bind: function (t, e) {
           var i = e.value,
                   n = e.modifiers;
           if ((void 0 !== t.__qtouchpan && (Ui(t), (t.__qtouchpan_destroyed = !0)), !0 === n.mouse || !0 === u.has.touch)) {
            var s = {
             uid: "qvtp_" + Ki++,
             handler: i,
             modifiers: n,
             direction: de(n),
             noop: f,
             mouseStart: function (t) {
              fe(t, s) &&
                      m(t) &&
                      (k(s, "temp", [
                       [document, "mousemove", "move", "notPassiveCapture"],
                       [document, "mouseup", "end", "passiveCapture"],
                      ]),
                              s.start(t, !0));
             },
             touchStart: function (t) {
              if (fe(t, s)) {
               var e = pe(t.target);
               k(s, "temp", [
                [e, "touchmove", "move", "notPassiveCapture"],
                [e, "touchcancel", "end", "passiveCapture"],
                [e, "touchend", "end", "passiveCapture"],
               ]),
                       s.start(t);
              }
             },
             start: function (e, i) {
              !0 === u.is.firefox && x(t, !0), (s.lastEvt = e);
              var o = v(e);
              if (!0 === i || !0 === n.stop) {
               if (!0 !== s.direction.all && (!0 !== i || !0 !== s.direction.mouseAllDir)) {
                var r = e.type.indexOf("mouse") > -1 ? new MouseEvent(e.type, e) : new TouchEvent(e.type, e);
                !0 === e.defaultPrevented && w(r),
                        !0 === e.cancelBubble && y(r),
                        (r.qClonedBy = void 0 === e.qClonedBy ? [s.uid] : e.qClonedBy.concat(s.uid)),
                        (r.qKeyEvent = e.qKeyEvent),
                        (r.qClickOutside = e.qClickOutside),
                        (s.initialEvent = {target: e.target, event: r});
               }
               y(e);
              }
              s.event = {x: o.left, y: o.top, time: Date.now(), mouse: !0 === i, detected: !1, isFirst: !0, isFinal: !1, lastX: o.left, lastY: o.top};
             },
             move: function (t) {
              if (void 0 !== s.event) {
               s.lastEvt = t;
               var e = !0 === s.event.mouse,
                       i = function () {
                        o(t, e),
                                !0 !== n.preserveCursor && (document.documentElement.style.cursor = "grabbing"),
                                !0 === e && document.body.classList.add("no-pointer-events--children"),
                                document.body.classList.add("non-selectable"),
                                Se(),
                                (s.styleCleanup = function (t) {
                                 if (((s.styleCleanup = void 0), !0 !== n.preserveCursor && (document.documentElement.style.cursor = ""), document.body.classList.remove("non-selectable"), !0 === e)) {
                                  var i = function () {
                                   document.body.classList.remove("no-pointer-events--children");
                                  };
                                  void 0 !== t
                                          ? setTimeout(function () {
                                           i(), t();
                                          }, 50)
                                          : i();
                                 } else
                                  void 0 !== t && t();
                                });
                       };
               if (!0 !== s.event.detected) {
                if (!0 === s.direction.all || (!0 === e && !0 === s.modifiers.mouseAllDir))
                 return i(), (s.event.detected = !0), void s.move(t);
                var r = v(t),
                        a = r.left - s.event.x,
                        l = r.top - s.event.y,
                        c = Math.abs(a),
                        u = Math.abs(l);
                c !== u &&
                        ((!0 === s.direction.horizontal && c > u) ||
                                (!0 === s.direction.vertical && c < u) ||
                                (!0 === s.direction.up && c < u && l < 0) ||
                                (!0 === s.direction.down && c < u && l > 0) ||
                                (!0 === s.direction.left && c > u && a < 0) ||
                                (!0 === s.direction.right && c > u && a > 0)
                                ? ((s.event.detected = !0), s.move(t))
                                : s.end(t, !0));
               } else {
                !0 !== s.event.isFirst && o(t, s.event.mouse);
                var h = Yi(t, s, !1),
                        d = h.payload,
                        p = h.synthetic;
                void 0 !== d &&
                        (!1 === s.handler(d)
                                ? s.end(t)
                                : (void 0 === s.styleCleanup && !0 === s.event.isFirst && i(),
                                        (s.event.lastX = d.position.left),
                                        (s.event.lastY = d.position.top),
                                        (s.event.lastDir = !0 === p ? void 0 : d.direction),
                                        (s.event.isFirst = !1)));
               }
              }
             },
             end: function (e, i) {
              if (void 0 !== s.event) {
               if ((q(s, "temp"), !0 === u.is.firefox && x(t, !1), !0 === i))
                void 0 !== s.styleCleanup && s.styleCleanup(), !0 !== s.event.detected && void 0 !== s.initialEvent && s.initialEvent.target.dispatchEvent(s.initialEvent.event);
               else if (!0 === s.event.detected) {
                !0 === s.event.isFirst && s.handler(Yi(void 0 === e ? s.lastEvt : e, s).payload);
                var n = Yi(void 0 === e ? s.lastEvt : e, s, !0).payload,
                        o = function () {
                         s.handler(n);
                        };
                void 0 !== s.styleCleanup ? s.styleCleanup(o) : o();
               }
               (s.event = void 0), (s.initialEvent = void 0), (s.lastEvt = void 0);
              }
             },
            };
            (t.__qtouchpan = s),
                    !0 === n.mouse && k(s, "main", [[t, "mousedown", "mouseStart", "passive" + (!0 === n.mouseCapture ? "Capture" : "")]]),
                    !0 === u.has.touch &&
                    k(s, "main", [
                     [t, "touchstart", "touchStart", "passive" + (!0 === n.capture ? "Capture" : "")],
                     [t, "touchmove", "noop", "notPassiveCapture"],
                    ]);
           }
           function o(t, e) {
            !0 === n.mouse && !0 === e ? S(t) : (!0 === n.stop && y(t), !0 === n.prevent && w(t));
           }
          },
          update: function (t, e) {
           var i = e.oldValue,
                   n = e.value,
                   s = t.__qtouchpan;
           void 0 !== s && i !== n && ("function" != typeof n && s.end(), (s.handler = n));
          },
          unbind: function (t) {
           void 0 === t.__qtouchpan_destroyed ? Ui(t) : delete t.__qtouchpan_destroyed;
          },
         },
         Gi = [34, 37, 40, 33, 39, 38];
 function Zi(t, e, i, n) {
  var s = v(t),
          o = ht(!0 === n ? (s.top - e.top) / e.height : (s.left - e.left) / e.width, 0, 1);
  return !0 === i ? 1 - o : o;
 }
 function Ji(t, e, i, n, s) {
  var o = e + t * (i - e);
  if (n > 0) {
   var r = (o - e) % n;
   o += (Math.abs(r) >= n / 2 ? (r < 0 ? -1 : 1) * n : 0) - r;
  }
  return s > 0 && (o = parseFloat(o.toFixed(s))), ht(o, e, i);
 }
 var tn = {
  mixins: [It, ci],
  directives: {TouchPan: Xi},
  props: {
   min: {type: Number, default: 0},
   max: {type: Number, default: 100},
   step: {
    type: Number,
    default: 1,
    validator: function (t) {
     return t >= 0;
    },
   },
   color: String,
   labelColor: String,
   labelTextColor: String,
   dense: Boolean,
   label: Boolean,
   labelAlways: Boolean,
   markers: Boolean,
   snap: Boolean,
   vertical: Boolean,
   reverse: Boolean,
   disable: Boolean,
   readonly: Boolean,
   tabindex: [String, Number],
   thumbPath: {type: String, default: "M 4, 10 a 6,6 0 1,0 12,0 a 6,6 0 1,0 -12,0"},
  },
  data: function () {
   return {active: !1, preventFocus: !1, focus: !1};
  },
  computed: {
   axis: function () {
    return !0 === this.vertical ? "--v" : "--h";
   },
   classes: function () {
    return (
            "q-slider q-slider" +
            this.axis +
            " q-slider--" +
            (!0 === this.active ? "" : "in") +
            "active" +
            (!0 === this.isReversed ? " q-slider--reversed" : "") +
            (void 0 !== this.color ? " text-" + this.color : "") +
            (!0 === this.disable ? " disabled" : " q-slider--enabled" + (!0 === this.editable ? " q-slider--editable" : "")) +
            ("both" === this.focus ? " q-slider--focus" : "") +
            (this.label || !0 === this.labelAlways ? " q-slider--label" : "") +
            (!0 === this.labelAlways ? " q-slider--label-always" : "") +
            (!0 === this.isDark ? " q-slider--dark" : "") +
            (!0 === this.dense ? " q-slider--dense q-slider--dense" + this.axis : "")
            );
   },
   editable: function () {
    return !0 !== this.disable && !0 !== this.readonly && this.min < this.max;
   },
   decimals: function () {
    return (String(this.step).trim("0").split(".")[1] || "").length;
   },
   computedStep: function () {
    return 0 === this.step ? 1 : this.step;
   },
   minMaxDiff: function () {
    return this.max - this.min;
   },
   markerStyle: function () {
    if (0 !== this.minMaxDiff) {
     var t = (100 * this.computedStep) / this.minMaxDiff;
     return {backgroundSize: !0 === this.vertical ? "2px " + t + "%" : t + "% 2px"};
    }
   },
   computedTabindex: function () {
    return !0 === this.editable ? this.tabindex || 0 : -1;
   },
   isReversed: function () {
    return !0 === this.vertical ? !0 === this.reverse : this.reverse !== (!0 === this.$q.lang.rtl);
   },
   positionProp: function () {
    return !0 === this.vertical ? (!0 === this.isReversed ? "bottom" : "top") : !0 === this.isReversed ? "right" : "left";
   },
   sizeProp: function () {
    return !0 === this.vertical ? "height" : "width";
   },
   orientation: function () {
    return !0 === this.vertical ? "vertical" : "horizontal";
   },
   attrs: function () {
    var t = {role: "slider", "aria-valuemin": this.min, "aria-valuemax": this.max, "aria-orientation": this.orientation, "data-step": this.step};
    return !0 === this.disable ? (t["aria-disabled"] = "true") : !0 === this.readonly && (t["aria-readonly"] = "true"), t;
   },
   panDirectives: function () {
    var t;
    return !0 === this.editable ? [{name: "touch-pan", value: this.__pan, modifiers: ((t = {}), (t[this.orientation] = !0), (t.prevent = !0), (t.stop = !0), (t.mouse = !0), (t.mouseAllDir = !0), t)}] : null;
   },
  },
  methods: {
   __getThumbSvg: function (t) {
    return t("svg", {staticClass: "q-slider__thumb absolute", attrs: {focusable: "false", viewBox: "0 0 20 20", width: "20", height: "20", "aria-hidden": "true"}}, [t("path", {attrs: {d: this.thumbPath}})]);
   },
   __getPinStyle: function (t, e) {
    var i;
    if (!0 === this.vertical)
     return {};
    var n = Math.ceil(20 * Math.abs(0.5 - e)) + "px";
    return {
     pin: {transformOrigin: (!0 === this.$q.lang.rtl ? n : !0 === this.$q.platform.is.ie ? "100%" : "calc(100% - " + n + ")") + " 50%"},
     pinTextContainer: ((i = {}), (i[!0 === this.$q.lang.rtl ? "left" : "right"] = 100 * t + "%"), (i.transform = "translateX(" + Math.ceil(20 * (!0 === this.$q.lang.rtl ? -1 : 1) * t) + "px)"), i),
    };
   },
   __pan: function (t) {
    t.isFinal
            ? (void 0 !== this.dragging && (this.__updatePosition(t.evt), !0 === t.touch && this.__updateValue(!0), (this.dragging = void 0), this.$emit("pan", "end")), (this.active = !1))
            : t.isFirst
            ? ((this.dragging = this.__getDragging(t.evt)), this.__updatePosition(t.evt), this.__updateValue(), (this.active = !0), this.$emit("pan", "start"))
            : (this.__updatePosition(t.evt), this.__updateValue());
   },
   __blur: function () {
    this.focus = !1;
   },
   __activate: function (t) {
    this.__updatePosition(t, this.__getDragging(t)), this.__updateValue(), (this.preventFocus = !0), (this.active = !0), document.addEventListener("mouseup", this.__deactivate, !0);
   },
   __deactivate: function () {
    (this.preventFocus = !1), void 0 === this.dragging && (this.active = !1), this.__updateValue(!0), this.__blur(), document.removeEventListener("mouseup", this.__deactivate, !0);
   },
   __mobileClick: function (t) {
    this.__updatePosition(t, this.__getDragging(t)), this.__updateValue(!0);
   },
   __keyup: function (t) {
    Gi.includes(t.keyCode) && this.__updateValue(!0);
   },
  },
  beforeDestroy: function () {
   document.removeEventListener("mouseup", this.__deactivate, !0);
  },
 },
         en = t.extend({
          name: "QSlider",
          mixins: [tn],
          props: {
           value: {
            required: !0,
            default: null,
            validator: function (t) {
             return "number" == typeof t || null === t;
            },
           },
           labelValue: [String, Number],
          },
          data: function () {
           return {model: null === this.value ? this.min : this.value, curRatio: 0};
          },
          watch: {
           value: function (t) {
            this.model = null === t ? 0 : ht(t, this.min, this.max);
           },
           min: function (t) {
            this.model = ht(this.model, t, this.max);
           },
           max: function (t) {
            this.model = ht(this.model, this.min, t);
           },
          },
          computed: {
           ratio: function () {
            return !0 === this.active ? this.curRatio : this.modelRatio;
           },
           modelRatio: function () {
            return 0 === this.minMaxDiff ? 0 : (this.model - this.min) / this.minMaxDiff;
           },
           trackStyle: function () {
            var t;
            return ((t = {})[this.positionProp] = 0), (t[this.sizeProp] = 100 * this.ratio + "%"), t;
           },
           thumbStyle: function () {
            var t;
            return ((t = {})[this.positionProp] = 100 * this.ratio + "%"), t;
           },
           thumbClass: function () {
            if (!1 === this.preventFocus && !0 === this.focus)
             return "q-slider--focus";
           },
           pinClass: function () {
            if (void 0 !== this.labelColor)
             return "text-" + this.labelColor;
           },
           pinTextClass: function () {
            return "q-slider__pin-value-marker-text" + (void 0 !== this.labelTextColor ? " text-" + this.labelTextColor : "");
           },
           events: function () {
            if (!0 === this.editable)
             return !0 === this.$q.platform.is.mobile ? {click: this.__mobileClick} : {mousedown: this.__activate, focus: this.__focus, blur: this.__blur, keydown: this.__keydown, keyup: this.__keyup};
           },
           computedLabel: function () {
            return void 0 !== this.labelValue ? this.labelValue : this.model;
           },
           pinStyle: function () {
            var t = !0 === this.reverse ? -this.ratio : this.ratio - 1;
            return this.__getPinStyle(t, this.ratio);
           },
          },
          methods: {
           __updateValue: function (t) {
            this.model !== this.value && this.$emit("input", this.model), !0 === t && this.$emit("change", this.model);
           },
           __getDragging: function () {
            return this.$el.getBoundingClientRect();
           },
           __updatePosition: function (t, e) {
            void 0 === e && (e = this.dragging);
            var i = Zi(t, e, this.isReversed, this.vertical);
            (this.model = Ji(i, this.min, this.max, this.step, this.decimals)), (this.curRatio = !0 !== this.snap || 0 === this.step ? i : 0 === this.minMaxDiff ? 0 : (this.model - this.min) / this.minMaxDiff);
           },
           __focus: function () {
            this.focus = !0;
           },
           __keydown: function (t) {
            if (Gi.includes(t.keyCode)) {
             S(t);
             var e = ([34, 33].includes(t.keyCode) ? 10 : 1) * this.computedStep,
                     i = [34, 37, 40].includes(t.keyCode) ? -e : e;
             (this.model = ht(parseFloat((this.model + i).toFixed(this.decimals)), this.min, this.max)), this.__updateValue();
            }
           },
          },
          render: function (t) {
           var e = [this.__getThumbSvg(t), t("div", {staticClass: "q-slider__focus-ring"})];
           (!0 !== this.label && !0 !== this.labelAlways) ||
                   e.push(
                           t("div", {staticClass: "q-slider__pin q-slider__pin" + this.axis + " absolute", style: this.pinStyle.pin, class: this.pinClass}, [
                            t("div", {staticClass: "q-slider__pin-text-container q-slider__pin-text-container" + this.axis, style: this.pinStyle.pinTextContainer}, [
                             t("span", {staticClass: "q-slider__pin-text", class: this.pinTextClass}, [this.computedLabel]),
                            ]),
                           ]),
                           t("div", {staticClass: "q-slider__arrow q-slider__arrow" + this.axis, class: this.pinClass})
                           ),
                   void 0 !== this.name && !0 !== this.disable && this.__injectFormInput(e, "push");
           var i = [t("div", {staticClass: "q-slider__track q-slider__track" + this.axis + " absolute", style: this.trackStyle})];
           return (
                   !0 === this.markers && i.push(t("div", {staticClass: "q-slider__track-markers q-slider__track-markers" + this.axis + " absolute-full fit", style: this.markerStyle})),
                   t(
                           "div",
                           {
                            staticClass: null === this.value ? " q-slider--no-value" : "",
                            attrs: Object.assign({}, this.attrs, {"aria-valuenow": this.value, tabindex: this.computedTabindex}),
                            class: this.classes,
                            on: this.events,
                            directives: this.panDirectives,
                           },
                           [
                            t("div", {staticClass: "q-slider__track-container q-slider__track-container" + this.axis + " absolute"}, i),
                            t("div", {staticClass: "q-slider__thumb-container q-slider__thumb-container" + this.axis + " absolute non-selectable", class: this.thumbClass, style: this.thumbStyle}, e),
                           ]
                           )
                   );
          },
         }),
         nn = {
          data: function () {
           return {canRender: !s};
          },
          mounted: function () {
           !1 === this.canRender && (this.canRender = !0);
          },
         },
         sn = t.extend({
          name: "QResizeObserver",
          mixins: [nn],
          props: {debounce: {type: [String, Number], default: 100}},
          data: function () {
           return !0 === this.hasObserver ? {} : {url: !0 === this.$q.platform.is.ie ? null : "about:blank"};
          },
          methods: {
           trigger: function (t) {
            !0 === t || 0 === this.debounce || "0" === this.debounce ? this.__onResize() : this.timer || (this.timer = setTimeout(this.__onResize, this.debounce));
           },
           __onResize: function () {
            if (((this.timer = null), this.$el && this.$el.parentNode)) {
             var t = this.$el.parentNode,
                     e = {width: t.offsetWidth, height: t.offsetHeight};
             (e.width === this.size.width && e.height === this.size.height) || ((this.size = e), this.$emit("resize", this.size));
            }
           },
           __cleanup: function () {
            void 0 !== this.curDocView && (void 0 !== this.curDocView.removeEventListener && this.curDocView.removeEventListener("resize", this.trigger, d.passive), (this.curDocView = void 0));
           },
           __onObjLoad: function () {
            this.__cleanup(), this.$el.contentDocument && ((this.curDocView = this.$el.contentDocument.defaultView), this.curDocView.addEventListener("resize", this.trigger, d.passive)), this.__onResize();
           },
          },
          render: function (t) {
           if (!1 !== this.canRender && !0 !== this.hasObserver)
            return t("object", {style: this.style, attrs: {tabindex: -1, type: "text/html", data: this.url, "aria-hidden": "true"}, on: mt(this, "load", {load: this.__onObjLoad})});
          },
          beforeCreate: function () {
           (this.size = {width: -1, height: -1}),
                   !0 !== i &&
                   ((this.hasObserver = "undefined" != typeof ResizeObserver),
                           !0 !== this.hasObserver &&
                           (this.style = (this.$q.platform.is.ie ? "visibility:hidden;" : "") + "display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;"));
          },
          mounted: function () {
           if (!0 === this.hasObserver)
            return (this.observer = new ResizeObserver(this.trigger)), this.observer.observe(this.$el.parentNode), void this.__onResize();
           !0 === this.$q.platform.is.ie ? ((this.url = "about:blank"), this.__onResize()) : this.__onObjLoad();
          },
          beforeDestroy: function () {
           clearTimeout(this.timer), !0 !== this.hasObserver ? this.__cleanup() : void 0 !== this.observer && this.$el.parentNode && this.observer.unobserve(this.$el.parentNode);
          },
         });
 function on(t, e, i) {
  var n = !0 === i ? ["left", "right"] : ["top", "bottom"];
  return "absolute-" + (!0 === e ? n[0] : n[1]) + (t ? " text-" + t : "");
 }
 function rn(t, e) {
  return t.priorityMatched === e.priorityMatched ? e.priorityHref - t.priorityHref : e.priorityMatched - t.priorityMatched;
 }
 function an(t) {
  return (t.selected = !1), t;
 }
 var ln = [
  function (t) {
   return !0 === t.selected && !0 === t.exact && !0 !== t.redirected;
  },
  function (t) {
   return !0 === t.selected && !0 === t.exact;
  },
  function (t) {
   return !0 === t.selected && !0 !== t.redirected;
  },
  function (t) {
   return !0 === t.selected;
  },
  function (t) {
   return !0 === t.exact && !0 !== t.redirected;
  },
  function (t) {
   return !0 !== t.redirected;
  },
  function (t) {
   return !0 === t.exact;
  },
  function (t) {
   return !0;
  },
 ],
         cn = ln.length,
         un = t.extend({
          name: "QTabs",
          mixins: [Ce, Lt],
          provide: function () {
           return {tabs: this.tabs, __recalculateScroll: this.__recalculateScroll, __activateTab: this.__activateTab, __activateRoute: this.__activateRoute};
          },
          props: {
           value: [Number, String],
           align: {
            type: String,
            default: "center",
            validator: function (t) {
             return ["left", "center", "right", "justify"].includes(t);
            },
           },
           breakpoint: {type: [String, Number], default: 600},
           vertical: Boolean,
           shrink: Boolean,
           stretch: Boolean,
           activeColor: String,
           activeBgColor: String,
           indicatorColor: String,
           leftIcon: String,
           rightIcon: String,
           outsideArrows: Boolean,
           mobileArrows: Boolean,
           switchIndicator: Boolean,
           narrowIndicator: Boolean,
           inlineLabel: Boolean,
           noCaps: Boolean,
           dense: Boolean,
           contentClass: String,
          },
          data: function () {
           return {
            tabs: {
             current: this.value,
             activeColor: this.activeColor,
             activeBgColor: this.activeBgColor,
             indicatorClass: on(this.indicatorColor, this.switchIndicator, this.vertical),
             narrowIndicator: this.narrowIndicator,
             inlineLabel: this.inlineLabel,
             noCaps: this.noCaps,
            },
            scrollable: !1,
            leftArrow: !0,
            rightArrow: !1,
            justify: !1,
           };
          },
          watch: {
           value: function (t) {
            this.__activateTab(t, !0, !0);
           },
           activeColor: function (t) {
            this.tabs.activeColor = t;
           },
           activeBgColor: function (t) {
            this.tabs.activeBgColor = t;
           },
           vertical: function (t) {
            this.tabs.indicatorClass = on(this.indicatorColor, this.switchIndicator, t);
           },
           indicatorColor: function (t) {
            this.tabs.indicatorClass = on(t, this.switchIndicator, this.vertical);
           },
           switchIndicator: function (t) {
            this.tabs.indicatorClass = on(this.indicatorColor, t, this.vertical);
           },
           narrowIndicator: function (t) {
            this.tabs.narrowIndicator = t;
           },
           inlineLabel: function (t) {
            this.tabs.inlineLabel = t;
           },
           noCaps: function (t) {
            this.tabs.noCaps = t;
           },
           outsideArrows: function () {
            this.$nextTick(this.__recalculateScroll());
           },
           arrowsEnabled: function (t) {
            (this.__updateArrows = !0 === t ? this.__updateArrowsFn : f), this.$nextTick(this.__recalculateScroll());
           },
          },
          computed: {
           arrowsEnabled: function () {
            return !0 === this.$q.platform.is.desktop || !0 === this.mobileArrows;
           },
           alignClass: function () {
            return "q-tabs__content--align-" + (!0 === this.scrollable ? "left" : !0 === this.justify ? "justify" : this.align);
           },
           classes: function () {
            return (
                    "q-tabs--" +
                    (!0 === this.scrollable ? "" : "not-") +
                    "scrollable q-tabs--" +
                    (!0 === this.vertical ? "vertical" : "horizontal") +
                    " q-tabs__arrows--" +
                    (!0 === this.arrowsEnabled && !0 === this.outsideArrows ? "outside" : "inside") +
                    (!0 === this.dense ? " q-tabs--dense" : "") +
                    (!0 === this.shrink ? " col-shrink" : "") +
                    (!0 === this.stretch ? " self-stretch" : "")
                    );
           },
           innerClass: function () {
            return this.alignClass + (void 0 !== this.contentClass ? " " + this.contentClass : "") + (!0 === this.$q.platform.is.mobile ? " scroll" : "");
           },
           domProps: function () {
            return !0 === this.vertical ? {container: "height", content: "offsetHeight", scroll: "scrollHeight"} : {container: "width", content: "offsetWidth", scroll: "scrollWidth"};
           },
           onEvents: function () {
            return Object.assign({}, {input: y}, this.qListeners);
           },
          },
          methods: {
           __activateTab: function (t, e, i) {
            this.tabs.current !== t && (!0 !== i && this.$emit("input", t), (!0 !== e && void 0 !== this.qListeners.input) || (this.__animate(this.tabs.current, t), (this.tabs.current = t)));
           },
           __activateRoute: function (t) {
            var e = this;
            this.bufferRoute !== this.$route && this.buffer.length > 0 && (clearTimeout(this.bufferTimer), (this.bufferTimer = void 0), (this.buffer.length = 0)),
                    (this.bufferRoute = this.$route),
                    void 0 !== t &&
                    (!0 === t.remove
                            ? (this.buffer = this.buffer.filter(function (e) {
                             return e.name !== t.name;
                            }))
                            : this.buffer.push(t)),
                    void 0 === this.bufferTimer &&
                    (this.bufferTimer = setTimeout(function () {
                     for (var t = [], i = 0; i < cn && 0 === t.length; i++)
                      t = e.buffer.filter(ln[i]);
                     t.sort(rn), e.__activateTab(0 === t.length ? null : t[0].name, !0), (e.buffer = e.buffer.map(an)), (e.bufferTimer = void 0);
                    }, 1));
           },
           __recalculateScroll: function () {
            var t = this;
            this.__nextTick(function () {
             !0 !== t._isDestroyed && t.__updateContainer({width: t.$el.offsetWidth, height: t.$el.offsetHeight});
            }),
                    this.__prepareTick();
           },
           __updateContainer: function (t) {
            var e = this,
                    i = t[this.domProps.container],
                    n = Math.min(
                            this.$refs.content[this.domProps.scroll],
                            Array.prototype.reduce.call(
                                    this.$refs.content.children,
                                    function (t, i) {
                                     return t + i[e.domProps.content];
                                    },
                                    0
                                    )
                            ),
                    s = i > 0 && n > i;
            this.scrollable !== s && (this.scrollable = s),
                    !0 === s &&
                    this.$nextTick(function () {
                     return e.__updateArrows();
                    });
            var o = i < parseInt(this.breakpoint, 10);
            this.justify !== o && (this.justify = o);
           },
           __animate: function (t, e) {
            var i = this,
                    n =
                    void 0 !== t && null !== t && "" !== t
                    ? this.$children.find(function (e) {
                     return e.name === t;
                    })
                    : null,
                    s =
                    void 0 !== e && null !== e && "" !== e
                    ? this.$children.find(function (t) {
                     return t.name === e;
                    })
                    : null;
            if (n && s) {
             var o = n.$el.getElementsByClassName("q-tab__indicator")[0],
                     r = s.$el.getElementsByClassName("q-tab__indicator")[0];
             clearTimeout(this.animateTimer), (o.style.transition = "none"), (o.style.transform = "none"), (r.style.transition = "none"), (r.style.transform = "none");
             var a = o.getBoundingClientRect(),
                     l = r.getBoundingClientRect();
             (r.style.transform =
                     !0 === this.vertical
                     ? "translate3d(0," + (a.top - l.top) + "px,0) scale3d(1," + (l.height ? a.height / l.height : 1) + ",1)"
                     : "translate3d(" + (a.left - l.left) + "px,0,0) scale3d(" + (l.width ? a.width / l.width : 1) + ",1,1)"),
                     this.$nextTick(function () {
                      i.animateTimer = setTimeout(function () {
                       (r.style.transition = "transform .25s cubic-bezier(.4, 0, .2, 1)"), (r.style.transform = "none");
                      }, 70);
                     });
            }
            if (s && !0 === this.scrollable) {
             var c = this.$refs.content.getBoundingClientRect(),
                     u = c.left,
                     h = c.width,
                     d = c.top,
                     p = c.height,
                     f = s.$el.getBoundingClientRect(),
                     m = !0 === this.vertical ? f.top - d : f.left - u;
             if (m < 0)
              return (this.$refs.content[!0 === this.vertical ? "scrollTop" : "scrollLeft"] += Math.floor(m)), void this.__updateArrows();
             (m += !0 === this.vertical ? f.height - p : f.width - h) > 0 && ((this.$refs.content[!0 === this.vertical ? "scrollTop" : "scrollLeft"] += Math.ceil(m)), this.__updateArrows());
            }
           },
           __updateArrowsFn: function () {
            var t = this.$refs.content,
                    e = t.getBoundingClientRect(),
                    i = !0 === this.vertical ? t.scrollTop : t.scrollLeft;
            (this.leftArrow = i > 0), (this.rightArrow = !0 === this.vertical ? Math.ceil(i + e.height) < t.scrollHeight : Math.ceil(i + e.width) < t.scrollWidth);
           },
           __animScrollTo: function (t) {
            var e = this;
            this.__stopAnimScroll(),
                    this.__scrollTowards(t),
                    (this.scrollTimer = setInterval(function () {
                     e.__scrollTowards(t) && e.__stopAnimScroll();
                    }, 5));
           },
           __scrollToStart: function () {
            this.__animScrollTo(0);
           },
           __scrollToEnd: function () {
            this.__animScrollTo(9999);
           },
           __stopAnimScroll: function () {
            clearInterval(this.scrollTimer);
           },
           __scrollTowards: function (t) {
            var e = this.$refs.content,
                    i = !0 === this.vertical ? e.scrollTop : e.scrollLeft,
                    n = !1,
                    s = t < i ? -1 : 1;
            return (i += 5 * s) < 0 ? ((n = !0), (i = 0)) : ((-1 === s && i <= t) || (1 === s && i >= t)) && ((n = !0), (i = t)), (e[!0 === this.vertical ? "scrollTop" : "scrollLeft"] = i), this.__updateArrows(), n;
           },
          },
          activated: function () {
           this.__recalculateScroll();
          },
          created: function () {
           (this.buffer = []), (this.__updateArrows = !0 === this.arrowsEnabled ? this.__updateArrowsFn : f);
          },
          beforeDestroy: function () {
           clearTimeout(this.bufferTimer), clearTimeout(this.animateTimer);
          },
          render: function (t) {
           var e = [
            t(sn, {on: mt(this, "resize", {resize: this.__updateContainer})}),
            t(
                    "div",
                    {
                     ref: "content",
                     staticClass: "q-tabs__content row no-wrap items-center self-stretch hide-scrollbar",
                     class: this.innerClass,
                     on: !0 === this.arrowsEnabled ? mt(this, "scroll", {scroll: this.__updateArrowsFn}) : void 0,
                    },
                    Ot(this, "default")
                    ),
           ];
           return (
                   !0 === this.arrowsEnabled &&
                   e.push(
                           t(zt, {
                            staticClass: "q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon",
                            class: !0 === this.leftArrow ? "" : "q-tabs__arrow--faded",
                            props: {name: this.leftIcon || (!0 === this.vertical ? this.$q.iconSet.tabs.up : this.$q.iconSet.tabs.left)},
                            on: mt(this, "onL", {mousedown: this.__scrollToStart, touchstart: this.__scrollToStart, mouseup: this.__stopAnimScroll, mouseleave: this.__stopAnimScroll, touchend: this.__stopAnimScroll}),
                           }),
                           t(zt, {
                            staticClass: "q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon",
                            class: !0 === this.rightArrow ? "" : "q-tabs__arrow--faded",
                            props: {name: this.rightIcon || (!0 === this.vertical ? this.$q.iconSet.tabs.down : this.$q.iconSet.tabs.right)},
                            on: mt(this, "onR", {mousedown: this.__scrollToEnd, touchstart: this.__scrollToEnd, mouseup: this.__stopAnimScroll, mouseleave: this.__stopAnimScroll, touchend: this.__stopAnimScroll}),
                           })
                           ),
                   t("div", {staticClass: "q-tabs row no-wrap items-center", class: this.classes, on: this.onEvents, attrs: {role: "tablist"}}, e)
                   );
          },
         }),
         hn = 0,
         dn = t.extend({
          name: "QTab",
          mixins: [ae, Lt],
          inject: {
           tabs: {
            default: function () {
             console.error("QTab/QRouteTab components need to be child of QTabs");
            },
           },
           __activateTab: {},
           __recalculateScroll: {},
          },
          props: {
           icon: String,
           label: [Number, String],
           alert: [Boolean, String],
           alertIcon: String,
           name: {
            type: [Number, String],
            default: function () {
             return "t_" + hn++;
            },
           },
           noCaps: Boolean,
           tabindex: [String, Number],
           disable: Boolean,
           contentClass: String,
          },
          computed: {
           isActive: function () {
            return this.tabs.current === this.name;
           },
           classes: function () {
            var t;
            return (
                    ((t = {})["q-tab--" + (this.isActive ? "" : "in") + "active"] = !0),
                    (t["text-" + this.tabs.activeColor] = this.isActive && this.tabs.activeColor),
                    (t["bg-" + this.tabs.activeBgColor] = this.isActive && this.tabs.activeBgColor),
                    (t["q-tab--full"] = this.icon && this.label && !this.tabs.inlineLabel),
                    (t["q-tab--no-caps"] = !0 === this.noCaps || !0 === this.tabs.noCaps),
                    (t["q-focusable q-hoverable cursor-pointer"] = !this.disable),
                    (t.disabled = this.disable),
                    t
                    );
           },
           innerClass: function () {
            return (!0 === this.tabs.inlineLabel ? "row no-wrap q-tab__content--inline" : "column") + (void 0 !== this.contentClass ? " " + this.contentClass : "");
           },
           computedTabIndex: function () {
            return !0 === this.disable || !0 === this.isActive ? -1 : this.tabindex || 0;
           },
           onEvents: function () {
            return Object.assign({}, {input: y}, this.qListeners, {click: this.__activate, keyup: this.__onKeyup});
           },
           attrs: function () {
            var t = {tabindex: this.computedTabIndex, role: "tab", "aria-selected": this.isActive};
            return !0 === this.disable && (t["aria-disabled"] = "true"), t;
           },
          },
          methods: {
           __activate: function (t, e) {
            !0 !== e && void 0 !== this.$refs.blurTarget && this.$refs.blurTarget.focus(), !0 !== this.disable && (void 0 !== this.qListeners.click && this.$emit("click", t), this.__activateTab(this.name));
           },
           __onKeyup: function (t) {
            !0 === tt(t, 13) && this.__activate(t, !0);
           },
           __getContent: function (t) {
            var e = this.tabs.narrowIndicator,
                    i = [],
                    n = t("div", {staticClass: "q-tab__indicator", class: this.tabs.indicatorClass});
            void 0 !== this.icon && i.push(t(zt, {staticClass: "q-tab__icon", props: {name: this.icon}})),
                    void 0 !== this.label && i.push(t("div", {staticClass: "q-tab__label"}, [this.label])),
                    !1 !== this.alert &&
                    i.push(
                            void 0 !== this.alertIcon
                            ? t(zt, {staticClass: "q-tab__alert-icon", props: {color: !0 !== this.alert ? this.alert : void 0, name: this.alertIcon}})
                            : t("div", {staticClass: "q-tab__alert", class: !0 !== this.alert ? "text-" + this.alert : null})
                            ),
                    !0 === e && i.push(n);
            var s = [
             t("div", {staticClass: "q-focus-helper", attrs: {tabindex: -1}, ref: "blurTarget"}),
             t("div", {staticClass: "q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable", class: this.innerClass}, Et(i, this, "default")),
            ];
            return !1 === e && s.push(n), s;
           },
           __renderTab: function (t, e, i) {
            var n = {
             staticClass: "q-tab relative-position self-stretch flex flex-center text-center",
             class: this.classes,
             attrs: this.attrs,
             directives: !1 !== this.ripple && !0 === this.disable ? null : [{name: "ripple", value: this.ripple}],
            };
            return (n["div" === e ? "on" : "nativeOn"] = this.onEvents), void 0 !== i && (n.props = i), t(e, n, this.__getContent(t));
           },
          },
          mounted: function () {
           this.__recalculateScroll();
          },
          beforeDestroy: function () {
           this.__recalculateScroll();
          },
          render: function (t) {
           return this.__renderTab(t, "div");
          },
         }),
         pn = t.extend({
          name: "QTabPanels",
          mixins: [It, bi],
          computed: {
           classes: function () {
            return "q-tab-panels q-panel-parent" + (!0 === this.isDark ? " q-tab-panels--dark q-dark" : "");
           },
          },
          methods: {
           __renderPanels: function (t) {
            return t("div", {class: this.classes, directives: this.panelDirectives, on: Object.assign({}, this.qListeners)}, this.__getPanelContent(t));
           },
          },
         }),
         fn = t.extend({
          name: "QTabPanel",
          mixins: [yi],
          render: function (t) {
           return t("div", {staticClass: "q-tab-panel", on: Object.assign({}, this.qListeners)}, Ot(this, "default"));
          },
         }),
         mn = [
          "rgb(255,204,204)",
          "rgb(255,230,204)",
          "rgb(255,255,204)",
          "rgb(204,255,204)",
          "rgb(204,255,230)",
          "rgb(204,255,255)",
          "rgb(204,230,255)",
          "rgb(204,204,255)",
          "rgb(230,204,255)",
          "rgb(255,204,255)",
          "rgb(255,153,153)",
          "rgb(255,204,153)",
          "rgb(255,255,153)",
          "rgb(153,255,153)",
          "rgb(153,255,204)",
          "rgb(153,255,255)",
          "rgb(153,204,255)",
          "rgb(153,153,255)",
          "rgb(204,153,255)",
          "rgb(255,153,255)",
          "rgb(255,102,102)",
          "rgb(255,179,102)",
          "rgb(255,255,102)",
          "rgb(102,255,102)",
          "rgb(102,255,179)",
          "rgb(102,255,255)",
          "rgb(102,179,255)",
          "rgb(102,102,255)",
          "rgb(179,102,255)",
          "rgb(255,102,255)",
          "rgb(255,51,51)",
          "rgb(255,153,51)",
          "rgb(255,255,51)",
          "rgb(51,255,51)",
          "rgb(51,255,153)",
          "rgb(51,255,255)",
          "rgb(51,153,255)",
          "rgb(51,51,255)",
          "rgb(153,51,255)",
          "rgb(255,51,255)",
          "rgb(255,0,0)",
          "rgb(255,128,0)",
          "rgb(255,255,0)",
          "rgb(0,255,0)",
          "rgb(0,255,128)",
          "rgb(0,255,255)",
          "rgb(0,128,255)",
          "rgb(0,0,255)",
          "rgb(128,0,255)",
          "rgb(255,0,255)",
          "rgb(245,0,0)",
          "rgb(245,123,0)",
          "rgb(245,245,0)",
          "rgb(0,245,0)",
          "rgb(0,245,123)",
          "rgb(0,245,245)",
          "rgb(0,123,245)",
          "rgb(0,0,245)",
          "rgb(123,0,245)",
          "rgb(245,0,245)",
          "rgb(214,0,0)",
          "rgb(214,108,0)",
          "rgb(214,214,0)",
          "rgb(0,214,0)",
          "rgb(0,214,108)",
          "rgb(0,214,214)",
          "rgb(0,108,214)",
          "rgb(0,0,214)",
          "rgb(108,0,214)",
          "rgb(214,0,214)",
          "rgb(163,0,0)",
          "rgb(163,82,0)",
          "rgb(163,163,0)",
          "rgb(0,163,0)",
          "rgb(0,163,82)",
          "rgb(0,163,163)",
          "rgb(0,82,163)",
          "rgb(0,0,163)",
          "rgb(82,0,163)",
          "rgb(163,0,163)",
          "rgb(92,0,0)",
          "rgb(92,46,0)",
          "rgb(92,92,0)",
          "rgb(0,92,0)",
          "rgb(0,92,46)",
          "rgb(0,92,92)",
          "rgb(0,46,92)",
          "rgb(0,0,92)",
          "rgb(46,0,92)",
          "rgb(92,0,92)",
          "rgb(255,255,255)",
          "rgb(205,205,205)",
          "rgb(178,178,178)",
          "rgb(153,153,153)",
          "rgb(127,127,127)",
          "rgb(102,102,102)",
          "rgb(76,76,76)",
          "rgb(51,51,51)",
          "rgb(25,25,25)",
          "rgb(0,0,0)",
         ],
         vn = t.extend({
          name: "QColor",
          mixins: [Lt, It, ci],
          directives: {TouchPan: Xi},
          props: {
           value: String,
           defaultValue: String,
           defaultView: {
            type: String,
            default: "spectrum",
            validator: function (t) {
             return ["spectrum", "tune", "palette"].includes(t);
            },
           },
           formatModel: {
            type: String,
            default: "auto",
            validator: function (t) {
             return ["auto", "hex", "rgb", "hexa", "rgba"].includes(t);
            },
           },
           palette: Array,
           noHeader: Boolean,
           noFooter: Boolean,
           square: Boolean,
           flat: Boolean,
           bordered: Boolean,
           disable: Boolean,
           readonly: Boolean,
          },
          data: function () {
           return {
            topView: "auto" === this.formatModel ? (void 0 === this.value || null === this.value || "" === this.value || this.value.startsWith("#") ? "hex" : "rgb") : this.formatModel.startsWith("hex") ? "hex" : "rgb",
            view: this.defaultView,
            model: this.__parseModel(this.value || this.defaultValue),
           };
          },
          watch: {
           value: function (t) {
            var e = this.__parseModel(t || this.defaultValue);
            e.hex !== this.model.hex && (this.model = e);
           },
           defaultValue: function (t) {
            if (!this.value && t) {
             var e = this.__parseModel(t);
             e.hex !== this.model.hex && (this.model = e);
            }
           },
          },
          computed: {
           editable: function () {
            return !0 !== this.disable && !0 !== this.readonly;
           },
           forceHex: function () {
            return "auto" === this.formatModel ? null : this.formatModel.indexOf("hex") > -1;
           },
           forceAlpha: function () {
            return "auto" === this.formatModel ? null : this.formatModel.indexOf("a") > -1;
           },
           isHex: function () {
            return void 0 === this.value || null === this.value || "" === this.value || this.value.startsWith("#");
           },
           isOutputHex: function () {
            return null !== this.forceHex ? this.forceHex : this.isHex;
           },
           formAttrs: function () {
            return {type: "hidden", name: this.name, value: this.model[!0 === this.isOutputHex ? "hex" : "rgb"]};
           },
           hasAlpha: function () {
            return null !== this.forceAlpha ? this.forceAlpha : void 0 !== this.model.a;
           },
           currentBgColor: function () {
            return {backgroundColor: this.model.rgb || "#000"};
           },
           headerClass: function () {
            return "q-color-picker__header-content--" + ((void 0 !== this.model.a && this.model.a < 65) || Y(this.model) > 0.4 ? "light" : "dark");
           },
           spectrumStyle: function () {
            return {background: "hsl(" + this.model.h + ",100%,50%)"};
           },
           spectrumPointerStyle: function () {
            var t;
            return ((t = {top: 100 - this.model.v + "%"})[!0 === this.$q.lang.rtl ? "right" : "left"] = this.model.s + "%"), t;
           },
           computedPalette: function () {
            return void 0 !== this.palette && this.palette.length > 0 ? this.palette : mn;
           },
           classes: function () {
            return (
                    "q-color-picker" +
                    (!0 === this.bordered ? " q-color-picker--bordered" : "") +
                    (!0 === this.square ? " q-color-picker--square no-border-radius" : "") +
                    (!0 === this.flat ? " q-color-picker--flat no-shadow" : "") +
                    (!0 === this.disable ? " disabled" : "") +
                    (!0 === this.isDark ? " q-color-picker--dark q-dark" : "")
                    );
           },
           attrs: function () {
            return !0 === this.disable ? {"aria-disabled": "true"} : !0 === this.readonly ? {"aria-readonly": "true"} : void 0;
           },
          },
          created: function () {
           this.__spectrumChange = ie(this.__spectrumChange, 20);
          },
          render: function (t) {
           var e = [this.__getContent(t)];
           return (
                   void 0 !== this.name && !0 !== this.disable && this.__injectFormInput(e, "push"),
                   !0 !== this.noHeader && e.unshift(this.__getHeader(t)),
                   !0 !== this.noFooter && e.push(this.__getFooter(t)),
                   t("div", {class: this.classes, attrs: this.attrs, on: Object.assign({}, this.qListeners)}, e)
                   );
          },
          methods: {
           __getHeader: function (t) {
            var e = this;
            return t("div", {staticClass: "q-color-picker__header relative-position overflow-hidden"}, [
             t("div", {staticClass: "q-color-picker__header-bg absolute-full"}),
             t("div", {staticClass: "q-color-picker__header-content absolute-full", class: this.headerClass, style: this.currentBgColor}, [
              t(
                      un,
                      {
                       props: {value: this.topView, dense: !0, align: "justify"},
                       on: mt(this, "topVTab", {
                        input: function (t) {
                         e.topView = t;
                        },
                       }),
                      },
                      [t(dn, {props: {label: "HEX" + (!0 === this.hasAlpha ? "A" : ""), name: "hex", ripple: !1}}), t(dn, {props: {label: "RGB" + (!0 === this.hasAlpha ? "A" : ""), name: "rgb", ripple: !1}})]
                      ),
              t("div", {staticClass: "q-color-picker__header-banner row flex-center no-wrap"}, [
               t("input", {
                staticClass: "fit",
                domProps: {value: this.model[this.topView]},
                attrs: !0 !== this.editable ? {readonly: !0} : null,
                on: mt(this, "topIn", {
                 input: function (t) {
                  e.__updateErrorIcon(!0 === e.__onEditorChange(t));
                 },
                 change: y,
                 blur: function (t) {
                  !0 === e.__onEditorChange(t, !0) && e.$forceUpdate(), e.__updateErrorIcon(!1);
                 },
                }),
               }),
               t(zt, {ref: "errorIcon", staticClass: "q-color-picker__error-icon absolute no-pointer-events", props: {name: this.$q.iconSet.type.negative}}),
              ]),
             ]),
            ]);
           },
           __getContent: function (t) {
            return t(pn, {props: {value: this.view, animated: !0}}, [
             t(fn, {staticClass: "q-color-picker__spectrum-tab overflow-hidden", props: {name: "spectrum"}}, this.__getSpectrumTab(t)),
             t(fn, {staticClass: "q-pa-md q-color-picker__tune-tab", props: {name: "tune"}}, this.__getTuneTab(t)),
             t(fn, {staticClass: "q-color-picker__palette-tab", props: {name: "palette"}}, this.__getPaletteTab(t)),
            ]);
           },
           __getFooter: function (t) {
            var e = this;
            return t("div", {staticClass: "q-color-picker__footer relative-position overflow-hidden"}, [
             t(
                     un,
                     {
                      staticClass: "absolute-full",
                      props: {value: this.view, dense: !0, align: "justify"},
                      on: mt(this, "ftIn", {
                       input: function (t) {
                        e.view = t;
                       },
                      }),
                     },
                     [
                      t(dn, {props: {icon: this.$q.iconSet.colorPicker.spectrum, name: "spectrum", ripple: !1}}),
                      t(dn, {props: {icon: this.$q.iconSet.colorPicker.tune, name: "tune", ripple: !1}}),
                      t(dn, {props: {icon: this.$q.iconSet.colorPicker.palette, name: "palette", ripple: !1}}),
                     ]
                     ),
            ]);
           },
           __getSpectrumTab: function (t) {
            var e = this;
            return [
             t(
                     "div",
                     {
                      ref: "spectrum",
                      staticClass: "q-color-picker__spectrum non-selectable relative-position cursor-pointer",
                      style: this.spectrumStyle,
                      class: {readonly: !0 !== this.editable},
                      on: !0 === this.editable ? mt(this, "spectrT", {click: this.__spectrumClick, mousedown: this.__activate}) : null,
                      directives: !0 === this.editable ? mt(this, "spectrDir", [{name: "touch-pan", modifiers: {prevent: !0, stop: !0, mouse: !0}, value: this.__spectrumPan}]) : null,
                     },
                     [
                      t("div", {style: {paddingBottom: "100%"}}),
                      t("div", {staticClass: "q-color-picker__spectrum-white absolute-full"}),
                      t("div", {staticClass: "q-color-picker__spectrum-black absolute-full"}),
                      t("div", {staticClass: "absolute", style: this.spectrumPointerStyle}, [void 0 !== this.model.hex ? t("div", {staticClass: "q-color-picker__spectrum-circle"}) : null]),
                     ]
                     ),
             t("div", {staticClass: "q-color-picker__sliders"}, [
              t("div", {staticClass: "q-color-picker__hue non-selectable"}, [
               t(en, {
                props: {value: this.model.h, min: 0, max: 360, fillHandleAlways: !0, readonly: !0 !== this.editable, thumbPath: "M5 5 h10 v10 h-10 v-10 z"},
                on: mt(this, "hueSlide", {
                 input: this.__onHueChange,
                 change: function (t) {
                  return e.__onHueChange(t, !0);
                 },
                }),
               }),
              ]),
              !0 === this.hasAlpha
                      ? t("div", {staticClass: "q-color-picker__alpha non-selectable"}, [
                       t(en, {
                        props: {value: this.model.a, min: 0, max: 100, fillHandleAlways: !0, readonly: !0 !== this.editable, thumbPath: "M5 5 h10 v10 h-10 v-10 z"},
                        on: mt(this, "alphaSlide", {
                         input: function (t) {
                          return e.__onNumericChange(t, "a", 100);
                         },
                         change: function (t) {
                          return e.__onNumericChange(t, "a", 100, void 0, !0);
                         },
                        }),
                       }),
                      ])
                      : null,
             ]),
            ];
           },
           __getTuneTab: function (t) {
            var e = this,
                    i = {inputmode: "numeric", maxlength: 3, readonly: !0 !== this.editable};
            return [
             t("div", {staticClass: "row items-center no-wrap"}, [
              t("div", ["R"]),
              t(en, {
               props: {value: this.model.r, min: 0, max: 255, color: "red", dark: this.isDark, readonly: !0 !== this.editable},
               on: mt(this, "rSlide", {
                input: function (t) {
                 return e.__onNumericChange(t, "r", 255);
                },
                change: function (t) {
                 return e.__onNumericChange(t, "r", 255, void 0, !0);
                },
               }),
              }),
              t("input", {
               domProps: {value: this.model.r},
               attrs: i,
               on: mt(this, "rIn", {
                input: function (t) {
                 return e.__onNumericChange(t.target.value, "r", 255, t);
                },
                change: y,
                blur: function (t) {
                 return e.__onNumericChange(t.target.value, "r", 255, t, !0);
                },
               }),
              }),
             ]),
             t("div", {staticClass: "row items-center no-wrap"}, [
              t("div", ["G"]),
              t(en, {
               props: {value: this.model.g, min: 0, max: 255, color: "green", dark: this.isDark, readonly: !0 !== this.editable},
               on: mt(this, "gSlide", {
                input: function (t) {
                 return e.__onNumericChange(t, "g", 255);
                },
                change: function (t) {
                 return e.__onNumericChange(t, "g", 255, void 0, !0);
                },
               }),
              }),
              t("input", {
               domProps: {value: this.model.g},
               attrs: i,
               on: mt(this, "gIn", {
                input: function (t) {
                 return e.__onNumericChange(t.target.value, "g", 255, t);
                },
                change: y,
                blur: function (t) {
                 return e.__onNumericChange(t.target.value, "g", 255, t, !0);
                },
               }),
              }),
             ]),
             t("div", {staticClass: "row items-center no-wrap"}, [
              t("div", ["B"]),
              t(en, {
               props: {value: this.model.b, min: 0, max: 255, color: "blue", readonly: !0 !== this.editable, dark: this.isDark},
               on: mt(this, "bSlide", {
                input: function (t) {
                 return e.__onNumericChange(t, "b", 255);
                },
                change: function (t) {
                 return e.__onNumericChange(t, "b", 255, void 0, !0);
                },
               }),
              }),
              t("input", {
               domProps: {value: this.model.b},
               attrs: i,
               on: mt(this, "bIn", {
                input: function (t) {
                 return e.__onNumericChange(t.target.value, "b", 255, t);
                },
                change: y,
                blur: function (t) {
                 return e.__onNumericChange(t.target.value, "b", 255, t, !0);
                },
               }),
              }),
             ]),
             !0 === this.hasAlpha
                     ? t("div", {staticClass: "row items-center no-wrap"}, [
                      t("div", ["A"]),
                      t(en, {
                       props: {value: this.model.a, color: "grey", readonly: !0 !== this.editable, dark: this.isDark},
                       on: mt(this, "aSlide", {
                        input: function (t) {
                         return e.__onNumericChange(t, "a", 100);
                        },
                        change: function (t) {
                         return e.__onNumericChange(t, "a", 100, void 0, !0);
                        },
                       }),
                      }),
                      t("input", {
                       domProps: {value: this.model.a},
                       attrs: i,
                       on: mt(this, "aIn", {
                        input: function (t) {
                         return e.__onNumericChange(t.target.value, "a", 100, t);
                        },
                        change: y,
                        blur: function (t) {
                         return e.__onNumericChange(t.target.value, "a", 100, t, !0);
                        },
                       }),
                      }),
                     ])
                     : null,
            ];
           },
           __getPaletteTab: function (t) {
            var e = this;
            return [
             t(
                     "div",
                     {staticClass: "row items-center q-color-picker__palette-rows", class: !0 === this.editable ? "q-color-picker__palette-rows--editable" : ""},
                     this.computedPalette.map(function (i) {
                      return t("div", {
                       staticClass: "q-color-picker__cube col-auto",
                       style: {backgroundColor: i},
                       on:
                               !0 === e.editable
                               ? mt(e, "palette#" + i, {
                                click: function () {
                                 e.__onPalettePick(i);
                                },
                               })
                               : null,
                      });
                     })
                     ),
            ];
           },
           __onSpectrumChange: function (t, e, i) {
            var n = this.$refs.spectrum;
            if (void 0 !== n) {
             var s = n.clientWidth,
                     o = n.clientHeight,
                     r = n.getBoundingClientRect(),
                     a = Math.min(s, Math.max(0, t - r.left));
             !0 === this.$q.lang.rtl && (a = s - a);
             var l = Math.min(o, Math.max(0, e - r.top)),
                     c = Math.round((100 * a) / s),
                     u = Math.round(100 * Math.max(0, Math.min(1, -l / o + 1))),
                     h = H({h: this.model.h, s: c, v: u, a: !0 === this.hasAlpha ? this.model.a : void 0});
             (this.model.s = c), (this.model.v = u), this.__update(h, i);
            }
           },
           __onHueChange: function (t, e) {
            var i = H({h: (t = Math.round(t)), s: this.model.s, v: this.model.v, a: !0 === this.hasAlpha ? this.model.a : void 0});
            (this.model.h = t), this.__update(i, e);
           },
           __onNumericChange: function (t, e, i, n, s) {
            if ((void 0 !== n && y(n), /^[0-9]+$/.test(t))) {
             var o = Math.floor(Number(t));
             if (o < 0 || o > i)
              !0 === s && this.$forceUpdate();
             else {
              var r = {r: "r" === e ? o : this.model.r, g: "g" === e ? o : this.model.g, b: "b" === e ? o : this.model.b, a: !0 === this.hasAlpha ? ("a" === e ? o : this.model.a) : void 0};
              if ("a" !== e) {
               var a = Q(r);
               (this.model.h = a.h), (this.model.s = a.s), (this.model.v = a.v);
              }
              if ((this.__update(r, s), void 0 !== n && !0 !== s && void 0 !== n.target.selectionEnd)) {
               var l = n.target.selectionEnd;
               this.$nextTick(function () {
                n.target.setSelectionRange(l, l);
               });
              }
             }
            } else
             !0 === s && this.$forceUpdate();
           },
           __onEditorChange: function (t, e) {
            var i,
                    n = t.target.value;
            if ((y(t), "hex" === this.topView)) {
             if (n.length !== (!0 === this.hasAlpha ? 9 : 7) || !/^#[0-9A-Fa-f]+$/.test(n))
              return !0;
             i = N(n);
            } else {
             var s;
             if (!n.endsWith(")"))
              return !0;
             if (!0 !== this.hasAlpha && n.startsWith("rgb(")) {
              if (
                      3 !==
                      (s = n
                              .substring(4, n.length - 1)
                              .split(",")
                              .map(function (t) {
                               return parseInt(t, 10);
                              })).length ||
                      !/^rgb\([0-9]{1,3},[0-9]{1,3},[0-9]{1,3}\)$/.test(n)
                      )
               return !0;
             } else {
              if (!0 !== this.hasAlpha || !n.startsWith("rgba("))
               return !0;
              if (4 !== (s = n.substring(5, n.length - 1).split(",")).length || !/^rgba\([0-9]{1,3},[0-9]{1,3},[0-9]{1,3},(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/.test(n))
               return !0;
              for (var o = 0; o < 3; o++) {
               var r = parseInt(s[o], 10);
               if (r < 0 || r > 255)
                return !0;
               s[o] = r;
              }
              var a = parseFloat(s[3]);
              if (a < 0 || a > 1)
               return !0;
              s[3] = a;
             }
             if (s[0] < 0 || s[0] > 255 || s[1] < 0 || s[1] > 255 || s[2] < 0 || s[2] > 255 || (!0 === this.hasAlpha && (s[3] < 0 || s[3] > 1)))
              return !0;
             i = {r: s[0], g: s[1], b: s[2], a: !0 === this.hasAlpha ? 100 * s[3] : void 0};
            }
            var l = Q(i);
            if (((this.model.h = l.h), (this.model.s = l.s), (this.model.v = l.v), this.__update(i, e), !0 !== e)) {
             var c = t.target.selectionEnd;
             this.$nextTick(function () {
              t.target.setSelectionRange(c, c);
             });
            }
           },
           __onPalettePick: function (t) {
            var e = this.__parseModel(t),
                    i = {r: e.r, g: e.g, b: e.b, a: e.a};
            void 0 === i.a && (i.a = this.model.a), (this.model.h = e.h), (this.model.s = e.s), (this.model.v = e.v), this.__update(i, !0);
           },
           __update: function (t, e) {
            (this.model.hex = j(t)), (this.model.rgb = V(t)), (this.model.r = t.r), (this.model.g = t.g), (this.model.b = t.b), (this.model.a = t.a);
            var i = this.model[!0 === this.isOutputHex ? "hex" : "rgb"];
            this.$emit("input", i), !0 === e && this.$emit("change", i);
           },
           __updateErrorIcon: function (t) {
            void 0 !== this.$refs.errorIcon && (this.$refs.errorIcon.$el.style.opacity = t ? 1 : 0);
           },
           __parseModel: function (t) {
            var e = void 0 !== this.forceAlpha ? this.forceAlpha : "auto" === this.formatModel ? null : this.formatModel.indexOf("a") > -1;
            if ("string" != typeof t || 0 === t.length || !0 !== Qi.anyColor(t.replace(/ /g, "")))
             return {h: 0, s: 0, v: 0, r: 0, g: 0, b: 0, a: !0 === e ? 100 : void 0, hex: void 0, rgb: void 0};
            var i = W(t);
            return !0 === e && void 0 === i.a && (i.a = 100), (i.hex = j(i)), (i.rgb = V(i)), Object.assign(i, Q(i));
           },
           __spectrumPan: function (t) {
            t.isFinal ? this.__onSpectrumChange(t.position.left, t.position.top, !0) : this.__spectrumChange(t);
           },
           __spectrumChange: function (t) {
            this.__onSpectrumChange(t.position.left, t.position.top);
           },
           __spectrumClick: function (t) {
            this.__onSpectrumChange(t.pageX - window.pageXOffset, t.pageY - window.pageYOffset, !0);
           },
           __activate: function (t) {
            this.__onSpectrumChange(t.pageX - window.pageXOffset, t.pageY - window.pageYOffset);
           },
          },
         }),
         gn = [-61, 9, 38, 199, 426, 686, 756, 818, 1111, 1181, 1210, 1635, 2060, 2097, 2192, 2262, 2324, 2394, 2456, 3178];
 function _n(t, e, i) {
  return (
          "[object Date]" === Object.prototype.toString.call(t) && ((i = t.getDate()), (e = t.getMonth() + 1), (t = t.getFullYear())),
          (function (t) {
           var e,
                   i,
                   n,
                   s = Cn(t).gy,
                   o = s - 621,
                   r = Sn(o, !1),
                   a = xn(s, 3, r.march);
           if ((n = t - a) >= 0) {
            if (n <= 185)
             return (i = 1 + kn(n, 31)), (e = qn(n, 31) + 1), {jy: o, jm: i, jd: e};
            n -= 186;
           } else
            (o -= 1), (n += 179), 1 === r.leap && (n += 1);
           return (i = 7 + kn(n, 30)), (e = qn(n, 30) + 1), {jy: o, jm: i, jd: e};
          })(xn(t, e, i))
          );
 }
 function bn(t, e, i) {
  return Cn(
          (function (t, e, i) {
           var n = Sn(t, !0);
           return xn(n.gy, 3, n.march) + 31 * (e - 1) - kn(e, 7) * (e - 7) + i - 1;
          })(t, e, i)
          );
 }
 function yn(t) {
  return (
          0 ===
          (function (t) {
           var e,
                   i,
                   n,
                   s,
                   o,
                   r = gn.length,
                   a = gn[0];
           if (t < a || t >= gn[r - 1])
            throw new Error("Invalid Jalaali year " + t);
           for (o = 1; o < r && ((e = gn[o]), (i = e - a), !(t < e)); o += 1)
            a = e;
           i - (s = t - a) < 6 && (s = s - i + 33 * kn(i + 4, 33));
           -1 === (n = qn(qn(s + 1, 33) - 1, 4)) && (n = 4);
           return n;
          })(t)
          );
 }
 function wn(t, e) {
  return e <= 6 ? 31 : e <= 11 ? 30 : yn(t) ? 30 : 29;
 }
 function Sn(t, e) {
  var i,
          n,
          s,
          o,
          r,
          a = gn.length,
          l = t + 621,
          c = -14,
          u = gn[0];
  if (t < u || t >= gn[a - 1])
   throw new Error("Invalid Jalaali year " + t);
  for (r = 1; r < a && ((n = (i = gn[r]) - u), !(t < i)); r += 1)
   (c = c + 8 * kn(n, 33) + kn(qn(n, 33), 4)), (u = i);
  (c = c + 8 * kn((o = t - u), 33) + kn(qn(o, 33) + 3, 4)), 4 === qn(n, 33) && n - o == 4 && (c += 1);
  var h = 20 + c - (kn(l, 4) - kn(3 * (kn(l, 100) + 1), 4) - 150);
  return e || (n - o < 6 && (o = o - n + 33 * kn(n + 4, 33)), -1 === (s = qn(qn(o + 1, 33) - 1, 4)) && (s = 4)), {leap: s, gy: l, march: h};
 }
 function xn(t, e, i) {
  var n = kn(1461 * (t + kn(e - 8, 6) + 100100), 4) + kn(153 * qn(e + 9, 12) + 2, 5) + i - 34840408;
  return (n = n - kn(3 * kn(t + 100100 + kn(e - 8, 6), 100), 4) + 752);
 }
 function Cn(t) {
  var e = 4 * t + 139361631,
          i = 5 * kn(qn((e = e + 4 * kn(3 * kn(4 * t + 183187720, 146097), 4) - 3908), 1461), 4) + 308,
          n = kn(qn(i, 153), 5) + 1,
          s = qn(kn(i, 153), 12) + 1;
  return {gy: kn(e, 1461) - 100100 + kn(8 - s, 6), gm: s, gd: n};
 }
 function kn(t, e) {
  return ~~(t / e);
 }
 function qn(t, e) {
  return t - ~~(t / e) * e;
 }
 var Tn = ["gregorian", "persian"],
         Mn = {
          mixins: [It, ci, Lt],
          props: {
           value: {required: !0},
           mask: {type: String},
           locale: Object,
           calendar: {
            type: String,
            validator: function (t) {
             return Tn.includes(t);
            },
            default: "gregorian",
           },
           landscape: Boolean,
           color: String,
           textColor: String,
           square: Boolean,
           flat: Boolean,
           bordered: Boolean,
           readonly: Boolean,
           disable: Boolean,
          },
          computed: {
           computedMask: function () {
            return this.__getMask();
           },
           computedLocale: function () {
            return this.__getLocale();
           },
           editable: function () {
            return !0 !== this.disable && !0 !== this.readonly;
           },
           computedColor: function () {
            return this.color || "primary";
           },
           computedTextColor: function () {
            return this.textColor || "white";
           },
           computedTabindex: function () {
            return !0 === this.editable ? 0 : -1;
           },
           headerClass: function () {
            var t = [];
            return void 0 !== this.color && t.push("bg-" + this.color), void 0 !== this.textColor && t.push("text-" + this.textColor), t.join(" ");
           },
          },
          methods: {
           __getLocale: function () {
            return this.locale || this.$q.lang.date;
           },
           __getCurrentDate: function (t) {
            var e = new Date(),
                    i = !0 === t ? null : 0;
            if ("persian" === this.calendar) {
             var n = _n(e);
             return {year: n.jy, month: n.jm, day: n.jd};
            }
            return {year: e.getFullYear(), month: e.getMonth() + 1, day: e.getDate(), hour: i, minute: i, second: i, millisecond: i};
           },
           __getCurrentTime: function () {
            var t = new Date();
            return {hour: t.getHours(), minute: t.getMinutes(), second: t.getSeconds(), millisecond: t.getMilliseconds()};
           },
           __getDayHash: function (t) {
            return t.year + "/" + pt(t.month) + "/" + pt(t.day);
           },
          },
         },
         $n = 864e5,
         Ln = 36e5,
         On = 6e4,
         Bn = "YYYY-MM-DDTHH:mm:ss.SSSZ",
         En = /\[((?:[^\]\\]|\\]|\\)*)\]|d{1,4}|M{1,4}|m{1,2}|w{1,2}|Qo|Do|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]/g,
         Pn = /(\[[^\]]*\])|d{1,4}|M{1,4}|m{1,2}|w{1,2}|Qo|Do|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]|([.*+:?^,\s${}()|\\]+)/g,
         zn = {};
 function An(t, e, i, n, s) {
  var o = {year: null, month: null, day: null, hour: null, minute: null, second: null, millisecond: null, timezoneOffset: null, dateHash: null, timeHash: null};
  if ((void 0 !== s && Object.assign(o, s), void 0 === t || null === t || "" === t || "string" != typeof t))
   return o;
  void 0 === e && (e = Bn);
  var r = void 0 !== i ? i : R.props.date,
          a = r.months,
          l = r.monthsShort,
          c = (function (t, e) {
           var i = "(" + e.days.join("|") + ")",
                   n = t + i;
           if (void 0 !== zn[n])
            return zn[n];
           var s = "(" + e.daysShort.join("|") + ")",
                   o = "(" + e.months.join("|") + ")",
                   r = "(" + e.monthsShort.join("|") + ")",
                   a = {},
                   l = 0,
                   c = t.replace(Pn, function (t) {
                    switch ((l++, t)) {
                     case "YY":
                      return (a.YY = l), "(-?\\d{1,2})";
                     case "YYYY":
                      return (a.YYYY = l), "(-?\\d{1,4})";
                     case "M":
                      return (a.M = l), "(\\d{1,2})";
                     case "MM":
                      return (a.M = l), "(\\d{2})";
                     case "MMM":
                      return (a.MMM = l), r;
                     case "MMMM":
                      return (a.MMMM = l), o;
                     case "D":
                      return (a.D = l), "(\\d{1,2})";
                     case "Do":
                      return (a.D = l++), "(\\d{1,2}(st|nd|rd|th))";
                     case "DD":
                      return (a.D = l), "(\\d{2})";
                     case "H":
                      return (a.H = l), "(\\d{1,2})";
                     case "HH":
                      return (a.H = l), "(\\d{2})";
                     case "h":
                      return (a.h = l), "(\\d{1,2})";
                     case "hh":
                      return (a.h = l), "(\\d{2})";
                     case "m":
                      return (a.m = l), "(\\d{1,2})";
                     case "mm":
                      return (a.m = l), "(\\d{2})";
                     case "s":
                      return (a.s = l), "(\\d{1,2})";
                     case "ss":
                      return (a.s = l), "(\\d{2})";
                     case "S":
                      return (a.S = l), "(\\d{1})";
                     case "SS":
                      return (a.S = l), "(\\d{2})";
                     case "SSS":
                      return (a.S = l), "(\\d{3})";
                     case "A":
                      return (a.A = l), "(AM|PM)";
                     case "a":
                      return (a.a = l), "(am|pm)";
                     case "aa":
                      return (a.aa = l), "(a\\.m\\.|p\\.m\\.)";
                     case "ddd":
                      return s;
                     case "dddd":
                      return i;
                     case "Q":
                     case "d":
                     case "E":
                      return "(\\d{1})";
                     case "Qo":
                      return "(1st|2nd|3rd|4th)";
                     case "DDD":
                     case "DDDD":
                      return "(\\d{1,3})";
                     case "w":
                      return "(\\d{1,2})";
                     case "ww":
                      return "(\\d{2})";
                     case "Z":
                      return (a.Z = l), "(Z|[+-]\\d{2}:\\d{2})";
                     case "ZZ":
                      return (a.ZZ = l), "(Z|[+-]\\d{2}\\d{2})";
                     case "X":
                      return (a.X = l), "(-?\\d+)";
                     case "x":
                      return (a.x = l), "(-?\\d{4,})";
                     default:
                      return l--, "[" === t[0] && (t = t.substring(1, t.length - 1)), t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
                    }
                   }),
                   u = {map: a, regex: new RegExp("^" + c)};
           return (zn[n] = u), u;
          })(e, r),
          u = c.regex,
          h = c.map,
          d = t.match(u);
  if (null === d)
   return o;
  var p = "";
  if (void 0 !== h.X || void 0 !== h.x) {
   var f = parseInt(d[void 0 !== h.X ? h.X : h.x], 10);
   if (!0 === isNaN(f) || f < 0)
    return o;
   var m = new Date(f * (void 0 !== h.X ? 1e3 : 1));
   (o.year = m.getFullYear()), (o.month = m.getMonth() + 1), (o.day = m.getDate()), (o.hour = m.getHours()), (o.minute = m.getMinutes()), (o.second = m.getSeconds()), (o.millisecond = m.getMilliseconds());
  } else {
   if (void 0 !== h.YYYY)
    o.year = parseInt(d[h.YYYY], 10);
   else if (void 0 !== h.YY) {
    var v = parseInt(d[h.YY], 10);
    o.year = v < 0 ? v : 2e3 + v;
   }
   if (void 0 !== h.M) {
    if (((o.month = parseInt(d[h.M], 10)), o.month < 1 || o.month > 12))
     return o;
   } else
    void 0 !== h.MMM ? (o.month = l.indexOf(d[h.MMM]) + 1) : void 0 !== h.MMMM && (o.month = a.indexOf(d[h.MMMM]) + 1);
   if (void 0 !== h.D) {
    if (((o.day = parseInt(d[h.D], 10)), null === o.year || null === o.month || o.day < 1))
     return o;
    var g = "persian" !== n ? new Date(o.year, o.month, 0).getDate() : wn(o.year, o.month);
    if (o.day > g)
     return o;
   }
   void 0 !== h.H
           ? (o.hour = parseInt(d[h.H], 10) % 24)
           : void 0 !== h.h && ((o.hour = parseInt(d[h.h], 10) % 12), ((h.A && "PM" === d[h.A]) || (h.a && "pm" === d[h.a]) || (h.aa && "p.m." === d[h.aa])) && (o.hour += 12), (o.hour = o.hour % 24)),
           void 0 !== h.m && (o.minute = parseInt(d[h.m], 10) % 60),
           void 0 !== h.s && (o.second = parseInt(d[h.s], 10) % 60),
           void 0 !== h.S && (o.millisecond = parseInt(d[h.S], 10) * Math.pow(10, 3 - d[h.S].length)),
           (void 0 === h.Z && void 0 === h.ZZ) || ((p = void 0 !== h.Z ? d[h.Z].replace(":", "") : d[h.ZZ]), (o.timezoneOffset = ("+" === p[0] ? -1 : 1) * (60 * p.slice(1, 3) + 1 * p.slice(3, 5))));
  }
  return (o.dateHash = o.year + "/" + pt(o.month) + "/" + pt(o.day)), (o.timeHash = pt(o.hour) + ":" + pt(o.minute) + ":" + pt(o.second) + p), o;
 }
 function Dn(t, e) {
  void 0 === e && (e = "");
  var i = t > 0 ? "-" : "+",
          n = Math.abs(t),
          s = n % 60;
  return i + pt(Math.floor(n / 60)) + e + pt(s);
 }
 function In(t, e) {
  var i = new Date(t.getFullYear(), e, 0, 0, 0, 0, 0).getDate();
  t.setMonth(e - 1, Math.min(i, t.getDate()));
 }
 function Rn(t, e, i) {
  var n = new Date(t),
          s = i ? 1 : -1;
  return (
          Object.keys(e).forEach(function (t) {
   if ("month" !== t) {
    var i = "year" === t ? "FullYear" : ut("days" === t ? "date" : t);
    n["set" + i](n["get" + i]() + s * e[t]);
   } else
    In(n, n.getMonth() + 1 + s * e.month);
  }),
          n
          );
 }
 function Fn(t) {
  var e = new Date(t.getFullYear(), t.getMonth(), t.getDate());
  e.setDate(e.getDate() - ((e.getDay() + 6) % 7) + 3);
  var i = new Date(e.getFullYear(), 0, 4);
  i.setDate(i.getDate() - ((i.getDay() + 6) % 7) + 3);
  var n = e.getTimezoneOffset() - i.getTimezoneOffset();
  e.setHours(e.getHours() - n);
  var s = (e - i) / (7 * $n);
  return 1 + Math.floor(s);
 }
 function jn(t, e) {
  var i = new Date(t);
  return !0 === e
          ? (function (t) {
           return 1e4 * t.getFullYear() + 100 * t.getMonth() + t.getDate();
          })(i)
          : i.getTime();
 }
 function Vn(t, e, i) {
  var n = new Date(t),
          s = "set" + (!0 === i ? "UTC" : "");
  return (
          Object.keys(e).forEach(function (t) {
   if ("month" !== t) {
    var i = "year" === t ? "FullYear" : t.charAt(0).toUpperCase() + t.slice(1);
    n["" + s + i](e[t]);
   } else
    In(n, e.month);
  }),
          n
          );
 }
 function Nn(t, e, i) {
  var n = new Date(t),
          s = "set" + (!0 === i ? "UTC" : "");
  switch (e) {
   case "year":
    n[s + "Month"](0);
   case "month":
    n[s + "Date"](1);
   case "day":
    n[s + "Hours"](0);
   case "hour":
    n[s + "Minutes"](0);
   case "minute":
    n[s + "Seconds"](0);
   case "second":
    n[s + "Milliseconds"](0);
  }
  return n;
 }
 function Hn(t, e, i) {
  return (t.getTime() - t.getTimezoneOffset() * On - (e.getTime() - e.getTimezoneOffset() * On)) / i;
 }
 function Qn(t, e, i) {
  void 0 === i && (i = "days");
  var n = new Date(t),
          s = new Date(e);
  switch (i) {
   case "years":
    return n.getFullYear() - s.getFullYear();
   case "months":
    return 12 * (n.getFullYear() - s.getFullYear()) + n.getMonth() - s.getMonth();
   case "days":
    return Hn(Nn(n, "day"), Nn(s, "day"), $n);
   case "hours":
    return Hn(Nn(n, "hour"), Nn(s, "hour"), Ln);
   case "minutes":
    return Hn(Nn(n, "minute"), Nn(s, "minute"), On);
   case "seconds":
    return Hn(Nn(n, "second"), Nn(s, "second"), 1e3);
  }
 }
 function Wn(t) {
  return Qn(t, Nn(t, "year"), "days") + 1;
 }
 function Yn(t) {
  return new Date(t.getFullYear(), t.getMonth() + 1, 0).getDate();
 }
 function Un(t) {
  if (t >= 11 && t <= 13)
   return t + "th";
  switch (t % 10) {
   case 1:
    return t + "st";
   case 2:
    return t + "nd";
   case 3:
    return t + "rd";
  }
  return t + "th";
 }
 var Kn = {
  YY: function (t, e, i) {
   var n = this.YYYY(t, e, i) % 100;
   return n > 0 ? pt(n) : "-" + pt(Math.abs(n));
  },
  YYYY: function (t, e, i) {
   return void 0 !== i && null !== i ? i : t.getFullYear();
  },
  M: function (t) {
   return t.getMonth() + 1;
  },
  MM: function (t) {
   return pt(t.getMonth() + 1);
  },
  MMM: function (t, e) {
   return e.monthsShort[t.getMonth()];
  },
  MMMM: function (t, e) {
   return e.months[t.getMonth()];
  },
  Q: function (t) {
   return Math.ceil((t.getMonth() + 1) / 3);
  },
  Qo: function (t) {
   return Un(this.Q(t));
  },
  D: function (t) {
   return t.getDate();
  },
  Do: function (t) {
   return Un(t.getDate());
  },
  DD: function (t) {
   return pt(t.getDate());
  },
  DDD: function (t) {
   return Wn(t);
  },
  DDDD: function (t) {
   return pt(Wn(t), 3);
  },
  d: function (t) {
   return t.getDay();
  },
  dd: function (t, e) {
   return this.dddd(t, e).slice(0, 2);
  },
  ddd: function (t, e) {
   return e.daysShort[t.getDay()];
  },
  dddd: function (t, e) {
   return e.days[t.getDay()];
  },
  E: function (t) {
   return t.getDay() || 7;
  },
  w: function (t) {
   return Fn(t);
  },
  ww: function (t) {
   return pt(Fn(t));
  },
  H: function (t) {
   return t.getHours();
  },
  HH: function (t) {
   return pt(t.getHours());
  },
  h: function (t) {
   var e = t.getHours();
   return 0 === e ? 12 : e > 12 ? e % 12 : e;
  },
  hh: function (t) {
   return pt(this.h(t));
  },
  m: function (t) {
   return t.getMinutes();
  },
  mm: function (t) {
   return pt(t.getMinutes());
  },
  s: function (t) {
   return t.getSeconds();
  },
  ss: function (t) {
   return pt(t.getSeconds());
  },
  S: function (t) {
   return Math.floor(t.getMilliseconds() / 100);
  },
  SS: function (t) {
   return pt(Math.floor(t.getMilliseconds() / 10));
  },
  SSS: function (t) {
   return pt(t.getMilliseconds(), 3);
  },
  A: function (t) {
   return this.H(t) < 12 ? "AM" : "PM";
  },
  a: function (t) {
   return this.H(t) < 12 ? "am" : "pm";
  },
  aa: function (t) {
   return this.H(t) < 12 ? "a.m." : "p.m.";
  },
  Z: function (t, e, i, n) {
   return Dn(void 0 === n || null === n ? t.getTimezoneOffset() : n, ":");
  },
  ZZ: function (t, e, i, n) {
   return Dn(void 0 === n || null === n ? t.getTimezoneOffset() : n);
  },
  X: function (t) {
   return Math.floor(t.getTime() / 1e3);
  },
  x: function (t) {
   return t.getTime();
  },
 };
 function Xn(t, e, i, n, s) {
  if ((0 === t || t) && t !== 1 / 0 && t !== -1 / 0) {
   var o = new Date(t);
   if (!isNaN(o)) {
    void 0 === e && (e = Bn);
    var r = void 0 !== i ? i : R.props.date;
    return e.replace(En, function (t, e) {
     return t in Kn ? Kn[t](o, r, n, s) : void 0 === e ? t : e.split("\\]").join("]");
    });
   }
  }
 }
 var Gn,
         Zn,
         Jn,
         ts,
         es,
         is,
         ns = {
          isValid: function (t) {
           return "number" == typeof t || !1 === isNaN(Date.parse(t));
          },
          extractDate: function (t, e, i) {
           var n = An(t, e, i),
                   s = new Date(n.year, null === n.month ? null : n.month - 1, n.day, n.hour, n.minute, n.second, n.millisecond),
                   o = s.getTimezoneOffset();
           return null === n.timezoneOffset || n.timezoneOffset === o ? s : Rn(s, {minutes: n.timezoneOffset - o}, !0);
          },
          buildDate: function (t, e) {
           return Vn(new Date(), t, e);
          },
          getDayOfWeek: function (t) {
           var e = new Date(t).getDay();
           return 0 === e ? 7 : e;
          },
          getWeekOfYear: Fn,
          isBetweenDates: function (t, e, i, n) {
           void 0 === n && (n = {});
           var s = jn(e, n.onlyDate),
                   o = jn(i, n.onlyDate),
                   r = jn(t, n.onlyDate);
           return (r > s || (!0 === n.inclusiveFrom && r === s)) && (r < o || (!0 === n.inclusiveTo && r === o));
          },
          addToDate: function (t, e) {
           return Rn(t, e, !0);
          },
          subtractFromDate: function (t, e) {
           return Rn(t, e, !1);
          },
          adjustDate: Vn,
          startOfDate: Nn,
          endOfDate: function (t, e, i) {
           var n = new Date(t),
                   s = "set" + (!0 === i ? "UTC" : "");
           switch (e) {
            case "year":
             n[s + "Month"](11);
            case "month":
             n[s + "Date"](Yn(n));
            case "day":
             n[s + "Hours"](23);
            case "hour":
             n[s + "Minutes"](59);
            case "minute":
             n[s + "Seconds"](59);
            case "second":
             n[s + "Milliseconds"](999);
           }
           return n;
          },
          getMaxDate: function (t) {
           var e = new Date(t);
           return (
                   Array.prototype.slice.call(arguments, 1).forEach(function (t) {
            e = Math.max(e, new Date(t));
           }),
                   e
                   );
          },
          getMinDate: function (t) {
           var e = new Date(t);
           return (
                   Array.prototype.slice.call(arguments, 1).forEach(function (t) {
            e = Math.min(e, new Date(t));
           }),
                   e
                   );
          },
          getDateDiff: Qn,
          getDayOfYear: Wn,
          inferDateFormat: function (t) {
           return !0 === qi(t) ? "date" : "number" == typeof t ? "number" : "string";
          },
          getDateBetween: function (t, e, i) {
           var n = new Date(t);
           if (e) {
            var s = new Date(e);
            if (n < s)
             return s;
           }
           if (i) {
            var o = new Date(i);
            if (n > o)
             return o;
           }
           return n;
          },
          isSameDate: function (t, e, i) {
           var n = new Date(t),
                   s = new Date(e);
           if (void 0 === i)
            return n.getTime() === s.getTime();
           switch (i) {
            case "second":
             if (n.getSeconds() !== s.getSeconds())
              return !1;
            case "minute":
             if (n.getMinutes() !== s.getMinutes())
              return !1;
            case "hour":
             if (n.getHours() !== s.getHours())
              return !1;
            case "day":
             if (n.getDate() !== s.getDate())
              return !1;
            case "month":
             if (n.getMonth() !== s.getMonth())
              return !1;
            case "year":
             if (n.getFullYear() !== s.getFullYear())
              return !1;
             break;
            default:
             throw new Error("date isSameDate unknown unit " + i);
           }
           return !0;
          },
          daysInMonth: Yn,
          formatDate: Xn,
          clone: function (t) {
           return !0 === qi(t) ? new Date(t.getTime()) : t;
          },
         },
         ss = ["Calendar", "Years", "Months"],
         os = function (t) {
          return ss.includes(t);
         },
         rs = function (t) {
          return /^-?[\d]+\/[0-1]\d$/.test(t);
         },
         as = t.extend({
          name: "QDate",
          mixins: [Mn],
          props: {
           multiple: Boolean,
           range: Boolean,
           title: String,
           subtitle: String,
           mask: {default: "YYYY/MM/DD"},
           defaultYearMonth: {type: String, validator: rs},
           yearsInMonthView: Boolean,
           events: [Array, Function],
           eventColor: [String, Function],
           emitImmediately: Boolean,
           options: [Array, Function],
           navigationMinYearMonth: {type: String, validator: rs},
           navigationMaxYearMonth: {type: String, validator: rs},
           noUnset: Boolean,
           firstDayOfWeek: [String, Number],
           todayBtn: Boolean,
           minimal: Boolean,
           defaultView: {type: String, default: "Calendar", validator: os},
          },
          data: function () {
           var t = this.__getMask(),
                   e = this.__getLocale(),
                   i = this.__getViewModel(t, e),
                   n = i.year,
                   s = !0 === this.$q.lang.rtl ? "right" : "left";
           return {view: this.defaultView, monthDirection: s, yearDirection: s, startYear: n - (n % 20) - (n < 0 ? 20 : 0), editRange: void 0, innerMask: t, innerLocale: e, viewModel: i};
          },
          watch: {
           value: function (t) {
            if (this.lastEmitValue === t)
             this.lastEmitValue = 0;
            else {
             var e = this.__getViewModel(this.innerMask, this.innerLocale),
                     i = e.year,
                     n = e.month;
             this.__updateViewModel(i, n);
            }
           },
           view: function () {
            void 0 !== this.$refs.blurTarget && this.$refs.blurTarget.focus();
           },
           "viewModel.year": function (t) {
            this.$emit("navigation", {year: t, month: this.viewModel.month});
           },
           "viewModel.month": function (t) {
            this.$emit("navigation", {year: this.viewModel.year, month: t});
           },
           computedMask: function (t) {
            this.__updateValue(t, this.innerLocale, "mask"), (this.innerMask = t);
           },
           computedLocale: function (t) {
            this.__updateValue(this.innerMask, t, "locale"), (this.innerLocale = t);
           },
          },
          computed: {
           classes: function () {
            var t = !0 === this.landscape ? "landscape" : "portrait";
            return (
                    "q-date q-date--" +
                    t +
                    " q-date--" +
                    t +
                    "-" +
                    (!0 === this.minimal ? "minimal" : "standard") +
                    (!0 === this.isDark ? " q-date--dark q-dark" : "") +
                    (!0 === this.bordered ? " q-date--bordered" : "") +
                    (!0 === this.square ? " q-date--square no-border-radius" : "") +
                    (!0 === this.flat ? " q-date--flat no-shadow" : "") +
                    (!0 === this.disable ? " disabled" : !0 === this.readonly ? " q-date--readonly" : "")
                    );
           },
           isImmediate: function () {
            return !0 === this.emitImmediately && !0 !== this.multiple && !0 !== this.range;
           },
           normalizedModel: function () {
            return !0 === Array.isArray(this.value) ? this.value : null !== this.value && void 0 !== this.value ? [this.value] : [];
           },
           daysModel: function () {
            var t = this;
            return this.normalizedModel
                    .filter(function (t) {
                     return "string" == typeof t;
                    })
                    .map(function (e) {
                     return t.__decodeString(e, t.innerMask, t.innerLocale);
                    })
                    .filter(function (t) {
                     return null !== t.dateHash;
                    });
           },
           rangeModel: function () {
            var t = this,
                    e = function (e) {
                     return t.__decodeString(e, t.innerMask, t.innerLocale);
                    };
            return this.normalizedModel
                    .filter(function (t) {
                     return Object(t) === t && void 0 !== t.from && void 0 !== t.to;
                    })
                    .map(function (t) {
                     return {from: e(t.from), to: e(t.to)};
                    })
                    .filter(function (t) {
                     return null !== t.from.dateHash && null !== t.to.dateHash && t.from.dateHash < t.to.dateHash;
                    });
           },
           getNativeDateFn: function () {
            return "persian" !== this.calendar
                    ? function (t) {
                     return new Date(t.year, t.month - 1, t.day);
                    }
            : function (t) {
             var e = bn(t.year, t.month, t.day);
             return new Date(e.gy, e.gm - 1, e.gd);
            };
           },
           encodeObjectFn: function () {
            var t = this;
            return "persian" === this.calendar
                    ? this.__getDayHash
                    : function (e, i, n) {
                     return Xn(new Date(e.year, e.month - 1, e.day, e.hour, e.minute, e.second, e.millisecond), void 0 === i ? t.innerMask : i, void 0 === n ? t.innerLocale : n, e.year, e.timezoneOffset);
                    };
           },
           daysInModel: function () {
            var t = this;
            return (
                    this.daysModel.length +
                    this.rangeModel.reduce(function (e, i) {
                     return e + 1 + Qn(t.getNativeDateFn(i.to), t.getNativeDateFn(i.from));
                    }, 0)
                    );
           },
           headerTitle: function () {
            if (void 0 !== this.title && null !== this.title && this.title.length > 0)
             return this.title;
            if (void 0 !== this.editRange) {
             var t = this.editRange.init,
                     e = this.getNativeDateFn(t);
             return this.innerLocale.daysShort[e.getDay()] + ", " + this.innerLocale.monthsShort[t.month - 1] + " " + t.day + " ??? ?";
            }
            if (0 === this.daysInModel)
             return " ??? ";
            if (this.daysInModel > 1)
             return this.daysInModel + " " + this.innerLocale.pluralDay;
            var i = this.daysModel[0],
                    n = this.getNativeDateFn(i);
            return !0 === isNaN(n.valueOf())
                    ? " ??? "
                    : void 0 !== this.innerLocale.headerTitle
                    ? this.innerLocale.headerTitle(n, i)
                    : this.innerLocale.daysShort[n.getDay()] + ", " + this.innerLocale.monthsShort[i.month - 1] + " " + i.day;
           },
           headerSubtitle: function () {
            if (void 0 !== this.subtitle && null !== this.subtitle && this.subtitle.length > 0)
             return this.subtitle;
            if (0 === this.daysInModel)
             return " ??? ";
            if (this.daysInModel > 1) {
             var t = this.minSelectedModel,
                     e = this.maxSelectedModel,
                     i = this.innerLocale.monthsShort;
             return i[t.month - 1] + (t.year !== e.year ? " " + t.year + " ??? " + i[e.month - 1] + " " : t.month !== e.month ? " ??? " + i[e.month - 1] : "") + " " + e.year;
            }
            return this.daysModel[0].year;
           },
           minSelectedModel: function () {
            return this.daysModel
                    .concat(
                            this.rangeModel.map(function (t) {
                             return t.from;
                            })
                            )
                    .sort(function (t, e) {
                     return t.year - e.year || t.month - e.month;
                    })[0];
           },
           maxSelectedModel: function () {
            return this.daysModel
                    .concat(
                            this.rangeModel.map(function (t) {
                             return t.to;
                            })
                            )
                    .sort(function (t, e) {
                     return e.year - t.year || e.month - t.month;
                    })[0];
           },
           dateArrow: function () {
            var t = [this.$q.iconSet.datetime.arrowLeft, this.$q.iconSet.datetime.arrowRight];
            return !0 === this.$q.lang.rtl ? t.reverse() : t;
           },
           computedFirstDayOfWeek: function () {
            return void 0 !== this.firstDayOfWeek ? Number(this.firstDayOfWeek) : this.innerLocale.firstDayOfWeek;
           },
           daysOfWeek: function () {
            var t = this.innerLocale.daysShort,
                    e = this.computedFirstDayOfWeek;
            return e > 0 ? t.slice(e, 7).concat(t.slice(0, e)) : t;
           },
           daysInMonth: function () {
            var t = this.viewModel;
            return "persian" !== this.calendar ? new Date(t.year, t.month, 0).getDate() : wn(t.year, t.month);
           },
           today: function () {
            return this.__getCurrentDate();
           },
           evtColor: function () {
            var t = this;
            return "function" == typeof this.eventColor
                    ? this.eventColor
                    : function () {
                     return t.eventColor;
                    };
           },
           minNav: function () {
            if (void 0 !== this.navigationMinYearMonth) {
             var t = this.navigationMinYearMonth.split("/");
             return {year: parseInt(t[0], 10), month: parseInt(t[1], 10)};
            }
           },
           maxNav: function () {
            if (void 0 !== this.navigationMaxYearMonth) {
             var t = this.navigationMaxYearMonth.split("/");
             return {year: parseInt(t[0], 10), month: parseInt(t[1], 10)};
            }
           },
           navBoundaries: function () {
            var t = {month: {prev: !0, next: !0}, year: {prev: !0, next: !0}};
            return (
                    void 0 !== this.minNav && this.minNav.year >= this.viewModel.year && ((t.year.prev = !1), this.minNav.year === this.viewModel.year && this.minNav.month >= this.viewModel.month && (t.month.prev = !1)),
                    void 0 !== this.maxNav && this.maxNav.year <= this.viewModel.year && ((t.year.next = !1), this.maxNav.year === this.viewModel.year && this.maxNav.month <= this.viewModel.month && (t.month.next = !1)),
                    t
                    );
           },
           daysMap: function () {
            var t = this,
                    e = {};
            return (
                    this.daysModel.forEach(function (i) {
                     var n = t.__getMonthHash(i);
                     void 0 === e[n] && (e[n] = []), e[n].push(i.day);
                    }),
                    e
                    );
           },
           rangeMap: function () {
            var t = this,
                    e = {};
            return (
                    this.rangeModel.forEach(function (i) {
                     var n = t.__getMonthHash(i.from),
                             s = t.__getMonthHash(i.to);
                     if ((void 0 === e[n] && (e[n] = []), e[n].push({from: i.from.day, to: n === s ? i.to.day : void 0, range: i}), n < s))
                      for (var o, r = i.from, a = r.year, l = r.month, c = l < 12 ? {year: a, month: l + 1} : {year: a + 1, month: 1}; (o = t.__getMonthHash(c)) <= s; )
                       void 0 === e[o] && (e[o] = []), e[o].push({from: void 0, to: o === s ? i.to.day : void 0, range: i}), c.month++, c.month > 12 && (c.year++, (c.month = 1));
                    }),
                    e
                    );
           },
           rangeView: function () {
            if (void 0 !== this.editRange) {
             var t = this.editRange,
                     e = t.init,
                     i = t.initHash,
                     n = t.final,
                     s = i <= t.finalHash ? [e, n] : [n, e],
                     o = s[0],
                     r = s[1],
                     a = this.__getMonthHash(o),
                     l = this.__getMonthHash(r);
             if (a === this.viewMonthHash || l === this.viewMonthHash) {
              var c = {};
              return a === this.viewMonthHash ? ((c.from = o.day), (c.includeFrom = !0)) : (c.from = 1), l === this.viewMonthHash ? ((c.to = r.day), (c.includeTo = !0)) : (c.to = this.daysInMonth), c;
             }
            }
           },
           viewMonthHash: function () {
            return this.__getMonthHash(this.viewModel);
           },
           selectionDaysMap: function () {
            var t = this,
                    e = {};
            if (void 0 === this.options) {
             for (var i = 1; i <= this.daysInMonth; i++)
              e[i] = !0;
             return e;
            }
            for (
                    var n =
                    "function" == typeof this.options
                    ? this.options
                    : function (e) {
                     return t.options.includes(e);
                    },
                    s = 1;
                    s <= this.daysInMonth;
                    s++
                    ) {
             var o = this.viewMonthHash + "/" + pt(s);
             e[s] = n(o);
            }
            return e;
           },
           eventDaysMap: function () {
            var t = this,
                    e = {};
            if (void 0 === this.events)
             for (var i = 1; i <= this.daysInMonth; i++)
              e[i] = !1;
            else
             for (
                     var n =
                     "function" == typeof this.events
                     ? this.events
                     : function (e) {
                      return t.events.includes(e);
                     },
                     s = 1;
                     s <= this.daysInMonth;
                     s++
                     ) {
              var o = this.viewMonthHash + "/" + pt(s);
              e[s] = !0 === n(o) && this.evtColor(o);
             }
            return e;
           },
           viewDays: function () {
            var t,
                    e,
                    i = this.viewModel,
                    n = i.year,
                    s = i.month;
            if ("persian" !== this.calendar)
             (t = new Date(n, s - 1, 1)), (e = new Date(n, s - 1, 0).getDate());
            else {
             var o = bn(n, s, 1);
             t = new Date(o.gy, o.gm - 1, o.gd);
             var r = s - 1,
                     a = n;
             0 === r && ((r = 12), a--), (e = wn(a, r));
            }
            return {days: t.getDay() - this.computedFirstDayOfWeek - 1, endDay: e};
           },
           days: function () {
            var t = this,
                    e = [],
                    i = this.viewDays,
                    n = i.days,
                    s = i.endDay,
                    o = n < 0 ? n + 7 : n;
            if (o < 6)
             for (var r = s - o; r <= s; r++)
              e.push({i: r, fill: !0});
            for (var a = e.length, l = 1; l <= this.daysInMonth; l++) {
             var c = {i: l, event: this.eventDaysMap[l], classes: []};
             !0 === this.selectionDaysMap[l] && ((c.in = !0), (c.flat = !0)), e.push(c);
            }
            if (
                    (void 0 !== this.daysMap[this.viewMonthHash] &&
                            this.daysMap[this.viewMonthHash].forEach(function (i) {
                     var n = a + i - 1;
                     Object.assign(e[n], {selected: !0, unelevated: !0, flat: !1, color: t.computedColor, textColor: t.computedTextColor});
                    }),
                            void 0 !== this.rangeMap[this.viewMonthHash] &&
                            this.rangeMap[this.viewMonthHash].forEach(function (i) {
                     if (void 0 !== i.from) {
                      for (var n = a + i.from - 1, s = a + (i.to || t.daysInMonth) - 1, o = n; o <= s; o++)
                       Object.assign(e[o], {range: i.range, unelevated: !0, color: t.computedColor, textColor: t.computedTextColor});
                      Object.assign(e[n], {rangeFrom: !0, flat: !1}), void 0 !== i.to && Object.assign(e[s], {rangeTo: !0, flat: !1});
                     } else if (void 0 !== i.to) {
                      for (var r = a + i.to - 1, l = a; l <= r; l++)
                       Object.assign(e[l], {range: i.range, unelevated: !0, color: t.computedColor, textColor: t.computedTextColor});
                      Object.assign(e[r], {flat: !1, rangeTo: !0});
                     } else
                      for (var c = a + t.daysInMonth - 1, u = a; u <= c; u++)
                       Object.assign(e[u], {range: i.range, unelevated: !0, color: t.computedColor, textColor: t.computedTextColor});
                    }),
                            void 0 !== this.rangeView)
                    ) {
             for (var u = a + this.rangeView.from - 1, h = a + this.rangeView.to - 1, d = u; d <= h; d++)
              (e[d].color = this.computedColor), (e[d].editRange = !0);
             !0 === this.rangeView.includeFrom && (e[u].editRangeFrom = !0), !0 === this.rangeView.includeTo && (e[h].editRangeTo = !0);
            }
            this.viewModel.year === this.today.year && this.viewModel.month === this.today.month && (e[a + this.today.day - 1].today = !0);
            var p = e.length % 7;
            if (p > 0)
             for (var f = 7 - p, m = 1; m <= f; m++)
              e.push({i: m, fill: !0});
            return (
                    e.forEach(function (t) {
                     var e = "q-date__calendar-item ";
                     !0 === t.fill
                             ? (e += "q-date__calendar-item--fill")
                             : ((e += "q-date__calendar-item--" + (!0 === t.in ? "in" : "out")),
                                     void 0 !== t.range && (e += " q-date__range" + (!0 === t.rangeTo ? "-to" : !0 === t.rangeFrom ? "-from" : "")),
                                     !0 === t.editRange && (e += " q-date__edit-range" + (!0 === t.editRangeFrom ? "-from" : "") + (!0 === t.editRangeTo ? "-to" : "")),
                                     (void 0 === t.range && !0 !== t.editRange) || (e += " text-" + t.color)),
                             (t.classes = e);
                    }),
                    e
                    );
           },
           attrs: function () {
            return !0 === this.disable ? {"aria-disabled": "true"} : !0 === this.readonly ? {"aria-readonly": "true"} : void 0;
           },
          },
          methods: {
           setToday: function () {
            this.__toggleDate(this.today, this.__getMonthHash(this.today)), this.setCalendarTo(this.today.year, this.today.month);
           },
           setView: function (t) {
            !0 === os(t) && (this.view = t);
           },
           offsetCalendar: function (t, e) {
            ["month", "year"].includes(t) && this["__goTo" + ("month" === t ? "Month" : "Year")](!0 === e ? -1 : 1);
           },
           setCalendarTo: function (t, e) {
            (this.view = "Calendar"), this.__updateViewModel(t, e);
           },
           setEditingRange: function (t, e) {
            if (!1 !== this.range && t) {
             var i = Object.assign(Object.assign({}, this.viewModel), t),
                     n = void 0 !== e ? Object.assign(Object.assign({}, this.viewModel), e) : i;
             (this.editRange = {init: i, initHash: this.__getDayHash(i), final: n, finalHash: this.__getDayHash(n)}), this.setCalendarTo(i.year, i.month);
            } else
             this.editRange = void 0;
           },
           __getMask: function () {
            return "persian" === this.calendar ? "YYYY/MM/DD" : this.mask;
           },
           __decodeString: function (t, e, i) {
            return An(t, e, i, this.calendar, {hour: 0, minute: 0, second: 0, millisecond: 0});
           },
           __getViewModel: function (t, e) {
            var i = !0 === Array.isArray(this.value) ? this.value : this.value ? [this.value] : [];
            if (0 === i.length)
             return this.__getDefaultViewModel();
            var n = this.__decodeString(void 0 !== i[0].from ? i[0].from : i[0], t, e);
            return null === n.dateHash ? this.__getDefaultViewModel() : n;
           },
           __getDefaultViewModel: function () {
            var t, e;
            if (void 0 !== this.defaultYearMonth) {
             var i = this.defaultYearMonth.split("/");
             (t = parseInt(i[0], 10)), (e = parseInt(i[1], 10));
            } else {
             var n = void 0 !== this.today ? this.today : this.__getCurrentDate();
             (t = n.year), (e = n.month);
            }
            return {year: t, month: e, day: 1, hour: 0, minute: 0, second: 0, millisecond: 0, dateHash: t + "/" + pt(e) + "/01"};
           },
           __getHeader: function (t) {
            var e = this;
            if (!0 !== this.minimal)
             return t("div", {staticClass: "q-date__header", class: this.headerClass}, [
              t("div", {staticClass: "relative-position"}, [
               t("transition", {props: {name: "q-transition--fade"}}, [
                t(
                        "div",
                        {
                         key: "h-yr-" + this.headerSubtitle,
                         staticClass: "q-date__header-subtitle q-date__header-link",
                         class: "Years" === this.view ? "q-date__header-link--active" : "cursor-pointer",
                         attrs: {tabindex: this.computedTabindex},
                         on: mt(this, "vY", {
                          click: function () {
                           e.view = "Years";
                          },
                          keyup: function (t) {
                           13 === t.keyCode && (e.view = "Years");
                          },
                         }),
                        },
                        [this.headerSubtitle]
                        ),
               ]),
              ]),
              t("div", {staticClass: "q-date__header-title relative-position flex no-wrap"}, [
               t("div", {staticClass: "relative-position col"}, [
                t("transition", {props: {name: "q-transition--fade"}}, [
                 t(
                         "div",
                         {
                          key: "h-sub" + this.headerTitle,
                          staticClass: "q-date__header-title-label q-date__header-link",
                          class: "Calendar" === this.view ? "q-date__header-link--active" : "cursor-pointer",
                          attrs: {tabindex: this.computedTabindex},
                          on: mt(this, "vC", {
                           click: function () {
                            e.view = "Calendar";
                           },
                           keyup: function (t) {
                            13 === t.keyCode && (e.view = "Calendar");
                           },
                          }),
                         },
                         [this.headerTitle]
                         ),
                ]),
               ]),
               !0 === this.todayBtn
                       ? t(ye, {
                        staticClass: "q-date__header-today self-start",
                        props: {icon: this.$q.iconSet.datetime.today, flat: !0, size: "sm", round: !0, tabindex: this.computedTabindex},
                        on: mt(this, "today", {click: this.setToday}),
                       })
                       : null,
              ]),
             ]);
           },
           __getNavigation: function (t, e) {
            var i = this,
                    n = e.label,
                    s = e.view,
                    o = e.key,
                    r = e.dir,
                    a = e.goTo,
                    l = e.boundaries,
                    c = e.cls;
            return [
             t("div", {staticClass: "row items-center q-date__arrow"}, [
              t(ye, {
               props: {round: !0, dense: !0, size: "sm", flat: !0, icon: this.dateArrow[0], tabindex: this.computedTabindex, disable: !1 === l.prev},
               on: mt(this, "go-#" + s, {
                click: function () {
                 a(-1);
                },
               }),
              }),
             ]),
             t("div", {staticClass: "relative-position overflow-hidden flex flex-center" + c}, [
              t("transition", {props: {name: "q-transition--jump-" + r}}, [
               t("div", {key: o}, [
                t(ye, {
                 props: {flat: !0, dense: !0, noCaps: !0, label: n, tabindex: this.computedTabindex},
                 on: mt(this, "view#" + s, {
                  click: function () {
                   i.view = s;
                  },
                 }),
                }),
               ]),
              ]),
             ]),
             t("div", {staticClass: "row items-center q-date__arrow"}, [
              t(ye, {
               props: {round: !0, dense: !0, size: "sm", flat: !0, icon: this.dateArrow[1], tabindex: this.computedTabindex, disable: !1 === l.next},
               on: mt(this, "go+#" + s, {
                click: function () {
                 a(1);
                },
               }),
              }),
             ]),
            ];
           },
           __getCalendarView: function (t) {
            var e = this;
            return [
             t("div", {key: "calendar-view", staticClass: "q-date__view q-date__calendar"}, [
              t(
                      "div",
                      {staticClass: "q-date__navigation row items-center no-wrap"},
                      this.__getNavigation(t, {
                       label: this.innerLocale.months[this.viewModel.month - 1],
                       view: "Months",
                       key: this.viewModel.month,
                       dir: this.monthDirection,
                       goTo: this.__goToMonth,
                       boundaries: this.navBoundaries.month,
                       cls: " col",
                      }).concat(this.__getNavigation(t, {label: this.viewModel.year, view: "Years", key: this.viewModel.year, dir: this.yearDirection, goTo: this.__goToYear, boundaries: this.navBoundaries.year, cls: ""}))
                      ),
              t(
                      "div",
                      {staticClass: "q-date__calendar-weekdays row items-center no-wrap"},
                      this.daysOfWeek.map(function (e) {
                       return t("div", {staticClass: "q-date__calendar-item"}, [t("div", [e])]);
                      })
                      ),
              t("div", {staticClass: "q-date__calendar-days-container relative-position overflow-hidden"}, [
               t("transition", {props: {name: "q-transition--slide-" + this.monthDirection}}, [
                t(
                        "div",
                        {key: this.viewMonthHash, staticClass: "q-date__calendar-days fit"},
                        this.days.map(function (i) {
                         return t("div", {staticClass: i.classes}, [
                          !0 === i.in
                                  ? t(
                                          ye,
                                          {
                                           staticClass: !0 === i.today ? "q-date__today" : null,
                                           props: {dense: !0, flat: i.flat, unelevated: i.unelevated, color: i.color, textColor: i.textColor, label: i.i, tabindex: e.computedTabindex},
                                           on: mt(e, "day#" + i.i, {
                                            click: function () {
                                             e.__onDayClick(i.i);
                                            },
                                            mouseover: function () {
                                             e.__onDayMouseover(i.i);
                                            },
                                           }),
                                          },
                                          !1 !== i.event ? [t("div", {staticClass: "q-date__event bg-" + i.event})] : null
                                          )
                                  : t("div", [i.i]),
                         ]);
                        })
                        ),
               ]),
              ]),
             ]),
            ];
           },
           __getMonthsView: function (t) {
            var e = this,
                    i = this.viewModel.year === this.today.year,
                    n = this.innerLocale.monthsShort.map(function (n, s) {
                     var o = e.viewModel.month === s + 1;
                     return t("div", {staticClass: "q-date__months-item flex flex-center"}, [
                      t(ye, {
                       staticClass: !0 === i && e.today.month === s + 1 ? "q-date__today" : null,
                       props: {
                        flat: !0 !== o,
                        label: n,
                        unelevated: o,
                        color: !0 === o ? e.computedColor : null,
                        textColor: !0 === o ? e.computedTextColor : null,
                        tabindex: e.computedTabindex,
                        disable: (function (t) {
                         return (void 0 !== e.minNav && e.viewModel.year === e.minNav.year && e.minNav.month > t) || (void 0 !== e.maxNav && e.viewModel.year === e.maxNav.year && e.maxNav.month < t);
                        })(s + 1),
                       },
                       on: mt(e, "month#" + s, {
                        click: function () {
                         e.__setMonth(s + 1);
                        },
                       }),
                      }),
                     ]);
                    });
            return (
                    !0 === this.yearsInMonthView &&
                    n.unshift(
                            t("div", {staticClass: "row no-wrap full-width"}, [
                             this.__getNavigation(t, {label: this.viewModel.year, view: "Years", key: this.viewModel.year, dir: this.yearDirection, goTo: this.__goToYear, boundaries: this.navBoundaries.year, cls: " col"}),
                            ])
                            ),
                    t("div", {key: "months-view", staticClass: "q-date__view q-date__months flex flex-center"}, n)
                    );
           },
           __getYearsView: function (t) {
            for (
                    var e = this,
                    i = this.startYear,
                    n = i + 20,
                    s = [],
                    o = function (t) {
                     return (void 0 !== e.minNav && e.minNav.year > t) || (void 0 !== e.maxNav && e.maxNav.year < t);
                    },
                    r = function (i) {
                     var n = e.viewModel.year === i;
                     s.push(
                             t("div", {staticClass: "q-date__years-item flex flex-center"}, [
                              t(ye, {
                               key: "yr" + i,
                               staticClass: e.today.year === i ? "q-date__today" : null,
                               props: {flat: !n, label: i, dense: !0, unelevated: n, color: !0 === n ? e.computedColor : null, textColor: !0 === n ? e.computedTextColor : null, tabindex: e.computedTabindex, disable: o(i)},
                               on: mt(e, "yr#" + i, {
                                click: function () {
                                 e.__setYear(i);
                                },
                               }),
                              }),
                             ])
                             );
                    },
                    a = i;
                    a <= n;
                    a++
                    )
             r(a);
            return t("div", {staticClass: "q-date__view q-date__years flex flex-center"}, [
             t("div", {staticClass: "col-auto"}, [
              t(ye, {
               props: {round: !0, dense: !0, flat: !0, icon: this.dateArrow[0], tabindex: this.computedTabindex, disable: o(i)},
               on: mt(this, "y-", {
                click: function () {
                 e.startYear -= 20;
                },
               }),
              }),
             ]),
             t("div", {staticClass: "q-date__years-content col self-stretch row items-center"}, s),
             t("div", {staticClass: "col-auto"}, [
              t(ye, {
               props: {round: !0, dense: !0, flat: !0, icon: this.dateArrow[1], tabindex: this.computedTabindex, disable: o(n)},
               on: mt(this, "y+", {
                click: function () {
                 e.startYear += 20;
                },
               }),
              }),
             ]),
            ]);
           },
           __goToMonth: function (t) {
            var e = this.viewModel.year,
                    i = Number(this.viewModel.month) + t;
            13 === i ? ((i = 1), e++) : 0 === i && ((i = 12), e--), this.__updateViewModel(e, i), !0 === this.isImmediate && this.__emitImmediately("month");
           },
           __goToYear: function (t) {
            var e = Number(this.viewModel.year) + t;
            this.__updateViewModel(e, this.viewModel.month), !0 === this.isImmediate && this.__emitImmediately("year");
           },
           __setYear: function (t) {
            this.__updateViewModel(t, this.viewModel.month), (this.view = "Years" === this.defaultView ? "Months" : "Calendar"), !0 === this.isImmediate && this.__emitImmediately("year");
           },
           __setMonth: function (t) {
            this.__updateViewModel(this.viewModel.year, t), (this.view = "Calendar"), !0 === this.isImmediate && this.__emitImmediately("month");
           },
           __getMonthHash: function (t) {
            return t.year + "/" + pt(t.month);
           },
           __toggleDate: function (t, e) {
            var i = this.daysMap[e];
            (void 0 !== i && !0 === i.includes(t.day) ? this.__removeFromModel : this.__addToModel)(t);
           },
           __getShortDate: function (t) {
            return {year: t.year, month: t.month, day: t.day};
           },
           __onDayClick: function (t) {
            var e = Object.assign({}, this.viewModel, {day: t});
            if (!1 !== this.range)
             if (void 0 === this.editRange) {
              var i = this.days.find(function (e) {
               return !0 !== e.fill && e.i === t;
              });
              if (void 0 !== i.range)
               return void this.__removeFromModel({target: e, from: i.range.from, to: i.range.to});
              if (!0 === i.selected)
               return void this.__removeFromModel(e);
              var n = this.__getDayHash(e);
              (this.editRange = {init: e, initHash: n, final: e, finalHash: n}), this.$emit("range-start", this.__getShortDate(e));
             } else {
              var s = this.editRange.initHash,
                      o = this.__getDayHash(e),
                      r = s <= o ? {from: this.editRange.init, to: e} : {from: e, to: this.editRange.init};
              (this.editRange = void 0), this.__addToModel(s === o ? e : Object.assign({}, {target: e}, r)), this.$emit("range-end", {from: this.__getShortDate(r.from), to: this.__getShortDate(r.to)});
             }
            else
             this.__toggleDate(e, this.viewMonthHash);
           },
           __onDayMouseover: function (t) {
            if (void 0 !== this.editRange) {
             var e = Object.assign({}, this.viewModel, {day: t});
             Object.assign(this.editRange, {final: e, finalHash: this.__getDayHash(e)});
            }
           },
           __updateViewModel: function (t, e) {
            var i = this;
            void 0 !== this.minNav && t <= this.minNav.year && ((t = this.minNav.year), e < this.minNav.month && (e = this.minNav.month)),
                    void 0 !== this.maxNav && t >= this.maxNav.year && ((t = this.maxNav.year), e > this.maxNav.month && (e = this.maxNav.month));
            var n = t + "/" + pt(e) + "/01";
            n !== this.viewModel.dateHash &&
                    ((this.monthDirection = this.viewModel.dateHash < n == (!0 !== this.$q.lang.rtl) ? "left" : "right"),
                            t !== this.viewModel.year && (this.yearDirection = this.monthDirection),
                            this.$nextTick(function () {
                             (i.startYear = t - (t % 20) - (t < 0 ? 20 : 0)), Object.assign(i.viewModel, {year: t, month: e, day: 1, dateHash: n});
                            }));
           },
           __emitValue: function (t, e, i) {
            var n = null !== t && 1 === t.length && !1 === this.multiple ? t[0] : t;
            this.lastEmitValue = n;
            var s = this.__getEmitParams(e, i),
                    o = s.reason,
                    r = s.details;
            this.$emit("input", n, o, r);
           },
           __emitImmediately: function (t) {
            var e = this,
                    i = void 0 !== this.daysModel[0] && null !== this.daysModel[0].dateHash ? this.daysModel[0] : Object.assign({}, this.viewModel);
            this.$nextTick(function () {
             (i.year = e.viewModel.year), (i.month = e.viewModel.month);
             var n = "persian" !== e.calendar ? new Date(i.year, i.month, 0).getDate() : wn(i.year, i.month);
             i.day = Math.min(Math.max(1, i.day), n);
             var s = e.__encodeEntry(i);
             e.lastEmitValue = s;
             var o = e.__getEmitParams("", i).details;
             e.$emit("input", s, t, o);
            });
           },
           __getEmitParams: function (t, e) {
            return void 0 !== e.from
                    ? {reason: t + "-range", details: Object.assign({}, this.__getShortDate(e.target), {from: this.__getShortDate(e.from), to: this.__getShortDate(e.to), changed: !0})}
            : {reason: t + "-day", details: Object.assign({}, this.__getShortDate(e), {changed: !0})};
           },
           __encodeEntry: function (t, e, i) {
            return void 0 !== t.from ? {from: this.encodeObjectFn(t.from, e, i), to: this.encodeObjectFn(t.to, e, i)} : this.encodeObjectFn(t, e, i);
           },
           __addToModel: function (t) {
            var e,
                    i = this;
            if (!0 === this.multiple)
             if (void 0 !== t.from) {
              var n = this.__getDayHash(t.from),
                      s = this.__getDayHash(t.to),
                      o = this.daysModel.filter(function (t) {
                       return t.dateHash < n || t.dateHash > s;
                      }),
                      r = this.rangeModel.filter(function (t) {
                       var e = t.from;
                       return t.to.dateHash < n || e.dateHash > s;
                      });
              e = o
                      .concat(r)
                      .concat(t)
                      .map(function (t) {
                       return i.__encodeEntry(t);
                      });
             } else {
              var a = this.normalizedModel.slice();
              a.push(this.__encodeEntry(t)), (e = a);
             }
            else
             e = this.__encodeEntry(t);
            this.__emitValue(e, "add", t);
           },
           __removeFromModel: function (t) {
            if (!0 !== this.noUnset) {
             var e = null;
             if (!0 === this.multiple && !0 === Array.isArray(this.value)) {
              var i = this.__encodeEntry(t);
              0 ===
                      (e =
                              void 0 !== t.from
                              ? this.value.filter(function (t) {
                               return void 0 === t.from || (t.from !== i.from && t.to !== i.to);
                              })
                              : this.value.filter(function (t) {
                               return t !== i;
                              })).length && (e = null);
             }
             this.__emitValue(e, "remove", t);
            }
           },
           __updateValue: function (t, e, i) {
            var n = this,
                    s = this.daysModel
                    .concat(this.rangeModel)
                    .map(function (i) {
                     return n.__encodeEntry(i, t, e);
                    })
                    .filter(function (t) {
                     return void 0 !== t.from ? null !== t.from.dateHash && null !== t.to.dateHash : null !== t.dateHash;
                    });
            this.$emit("input", (!0 === this.multiple ? s : s[0]) || null, i);
           },
          },
          render: function (t) {
           var e = [t("div", {staticClass: "q-date__content col relative-position"}, [t("transition", {props: {name: "q-transition--fade"}}, [this["__get" + this.view + "View"](t)])])],
                   i = Ot(this, "default");
           return (
                   void 0 !== i && e.push(t("div", {staticClass: "q-date__actions"}, i)),
                   void 0 !== this.name && !0 !== this.disable && this.__injectFormInput(e, "push"),
                   t("div", {class: this.classes, attrs: this.attrs, on: Object.assign({}, this.qListeners)}, [this.__getHeader(t), t("div", {staticClass: "q-date__main col column", attrs: {tabindex: -1}, ref: "blurTarget"}, e)])
                   );
          },
         }),
         ls = {
          methods: {
           __addHistory: function () {
            var t = this;
            (this.__historyEntry = {
             condition: function () {
              return !0 === t.hideOnRouteChange;
             },
             handler: this.hide,
            }),
                    A.add(this.__historyEntry);
           },
           __removeHistory: function () {
            void 0 !== this.__historyEntry && (A.remove(this.__historyEntry), (this.__historyEntry = void 0));
           },
          },
          beforeDestroy: function () {
           !0 === this.showing && this.__removeHistory();
          },
         },
         cs = 0,
         us = !1;
 function hs(t) {
  (function (t) {
   if (t.target === document.body || t.target.classList.contains("q-layout__backdrop"))
    return !0;
   for (var e = g(t), i = t.shiftKey && !t.deltaX, n = !i && Math.abs(t.deltaX) <= Math.abs(t.deltaY), s = i || n ? t.deltaY : t.deltaX, o = 0; o < e.length; o++) {
    var r = e[o];
    if (Ke(r, n))
     return n ? (s < 0 && 0 === r.scrollTop) || (s > 0 && r.scrollTop + r.clientHeight === r.scrollHeight) : (s < 0 && 0 === r.scrollLeft) || (s > 0 && r.scrollLeft + r.clientWidth === r.scrollWidth);
   }
   return !0;
  })(t) && S(t);
 }
 function ds(t) {
  t.target === document && (document.scrollingElement.scrollTop = document.scrollingElement.scrollTop);
 }
 function ps(t) {
  !0 !== us &&
          ((us = !0),
                  requestAnimationFrame(function () {
                   us = !1;
                   var e = t.target.height,
                           i = document.scrollingElement,
                           n = i.clientHeight,
                           s = i.scrollTop;
                   (void 0 !== Jn && e === window.innerHeight) || ((Jn = n - e), (document.scrollingElement.scrollTop = s)), s > Jn && (document.scrollingElement.scrollTop -= Math.ceil((s - Jn) / 8));
                  }));
 }
 function fs(t) {
  var e = document.body,
          i = void 0 !== window.visualViewport;
  if ("add" === t) {
   var n = window.getComputedStyle(e).overflowY;
   (Gn = je(window)),
           (Zn = Fe(window)),
           (ts = e.style.left),
           (es = e.style.top),
           (e.style.left = "-" + Gn + "px"),
           (e.style.top = "-" + Zn + "px"),
           "hidden" !== n && ("scroll" === n || e.scrollHeight > window.innerHeight) && e.classList.add("q-body--force-scrollbar"),
           e.classList.add("q-body--prevent-scroll"),
           (document.qScrollPrevented = !0),
           !0 === u.is.ios &&
           (!0 === i
                   ? (window.scrollTo(0, 0), window.visualViewport.addEventListener("resize", ps, d.passiveCapture), window.visualViewport.addEventListener("scroll", ps, d.passiveCapture), window.scrollTo(0, 0))
                   : window.addEventListener("scroll", ds, d.passiveCapture));
  }
  !0 === u.is.desktop && !0 === u.is.mac && window[t + "EventListener"]("wheel", hs, d.notPassive),
          "remove" === t &&
          (!0 === u.is.ios &&
                  (!0 === i
                          ? (window.visualViewport.removeEventListener("resize", ps, d.passiveCapture), window.visualViewport.removeEventListener("scroll", ps, d.passiveCapture))
                          : window.removeEventListener("scroll", ds, d.passiveCapture)),
                  e.classList.remove("q-body--prevent-scroll"),
                  e.classList.remove("q-body--force-scrollbar"),
                  (document.qScrollPrevented = !1),
                  (e.style.left = ts),
                  (e.style.top = es),
                  window.scrollTo(Gn, Zn),
                  (Jn = void 0));
 }
 function ms(t) {
  var e = "add";
  if (!0 === t) {
   if ((cs++, void 0 !== is))
    return clearTimeout(is), void (is = void 0);
   if (cs > 1)
    return;
  } else {
   if (0 === cs)
    return;
   if (--cs > 0)
    return;
   if (((e = "remove"), !0 === u.is.ios && !0 === u.is.nativeMobile))
    return (
            clearTimeout(is),
            void (is = setTimeout(function () {
             fs(e), (is = void 0);
            }, 100))
            );
  }
  fs(e);
 }
 var vs = {
  methods: {
   __preventScroll: function (t) {
    t === this.preventedScroll || (void 0 === this.preventedScroll && !0 !== t) || ((this.preventedScroll = t), ms(t));
   },
  },
 },
         gs = 0,
         _s = {standard: "fixed-full flex-center", top: "fixed-top justify-center", bottom: "fixed-bottom justify-center", right: "fixed-right items-center", left: "fixed-left items-center"},
         bs = {standard: ["scale", "scale"], top: ["slide-down", "slide-up"], bottom: ["slide-up", "slide-down"], right: ["slide-left", "slide-right"], left: ["slide-right", "slide-left"]},
         ys = t.extend({
          name: "QDialog",
          mixins: [bt, ls, ke, Te, vs],
          props: {
           persistent: Boolean,
           autoClose: Boolean,
           noEscDismiss: Boolean,
           noBackdropDismiss: Boolean,
           noRouteDismiss: Boolean,
           noRefocus: Boolean,
           noFocus: Boolean,
           seamless: Boolean,
           maximized: Boolean,
           fullWidth: Boolean,
           fullHeight: Boolean,
           square: Boolean,
           position: {
            type: String,
            default: "standard",
            validator: function (t) {
             return "standard" === t || ["top", "bottom", "left", "right"].includes(t);
            },
           },
           transitionShow: String,
           transitionHide: String,
          },
          data: function () {
           return {transitionState: this.showing};
          },
          watch: {
           showing: function (t) {
            var e = this;
            this.transitionShowComputed !== this.transitionHideComputed &&
                    this.$nextTick(function () {
                     e.transitionState = t;
                    });
           },
           maximized: function (t) {
            !0 === this.showing && this.__updateMaximized(t);
           },
           useBackdrop: function (t) {
            this.__preventScroll(t), this.__preventFocusout(t);
           },
          },
          computed: {
           classes: function () {
            return (
                    "q-dialog__inner--" +
                    (!0 === this.maximized ? "maximized" : "minimized") +
                    " q-dialog__inner--" +
                    this.position +
                    " " +
                    _s[this.position] +
                    (!0 === this.fullWidth ? " q-dialog__inner--fullwidth" : "") +
                    (!0 === this.fullHeight ? " q-dialog__inner--fullheight" : "") +
                    (!0 === this.square ? " q-dialog__inner--square" : "")
                    );
           },
           transitionShowComputed: function () {
            return "q-transition--" + (void 0 === this.transitionShow ? bs[this.position][0] : this.transitionShow);
           },
           transitionHideComputed: function () {
            return "q-transition--" + (void 0 === this.transitionHide ? bs[this.position][1] : this.transitionHide);
           },
           transition: function () {
            return !0 === this.transitionState ? this.transitionHideComputed : this.transitionShowComputed;
           },
           useBackdrop: function () {
            return !0 === this.showing && !0 !== this.seamless;
           },
           hideOnRouteChange: function () {
            return !0 !== this.persistent && !0 !== this.noRouteDismiss && !0 !== this.seamless;
           },
           onEvents: function () {
            var t = Object.assign({}, this.qListeners, {input: y, "popup-show": y, "popup-hide": y});
            return !0 === this.autoClose && (t.click = this.__onAutoClose), t;
           },
          },
          methods: {
           focus: function () {
            var t = this.__getInnerNode();
            void 0 !== t && !0 !== t.contains(document.activeElement) && (t = t.querySelector("[autofocus], [data-autofocus]") || t).focus();
           },
           shake: function () {
            this.focus(), this.$emit("shake");
            var t = this.__getInnerNode();
            void 0 !== t &&
                    (t.classList.remove("q-animate--scale"),
                            t.classList.add("q-animate--scale"),
                            clearTimeout(this.shakeTimeout),
                            (this.shakeTimeout = setTimeout(function () {
                             t.classList.remove("q-animate--scale");
                            }, 170)));
           },
           __getInnerNode: function () {
            return void 0 !== this.__portal && void 0 !== this.__portal.$refs ? this.__portal.$refs.inner : void 0;
           },
           __show: function (t) {
            var e = this;
            this.__addHistory(),
                    (this.__refocusTarget = !1 === this.noRefocus && null !== document.activeElement ? document.activeElement : void 0),
                    this.$el.dispatchEvent(C("popup-show", {bubbles: !0})),
                    this.__updateMaximized(this.maximized),
                    ei.register(this, function () {
                     !0 !== e.seamless && (!0 === e.persistent || !0 === e.noEscDismiss ? !0 !== e.maximized && e.shake() : (e.$emit("escape-key"), e.hide()));
                    }),
                    this.__showPortal(),
                    !0 !== this.noFocus && (null !== document.activeElement && document.activeElement.blur(), this.__nextTick(this.focus)),
                    this.__setTimeout(function () {
                     if (!0 === e.$q.platform.is.ios) {
                      if (!0 !== e.seamless && document.activeElement) {
                       var i = document.activeElement.getBoundingClientRect(),
                               n = i.top,
                               s = i.bottom,
                               o = window.innerHeight,
                               r = void 0 !== window.visualViewport ? window.visualViewport.height : o;
                       n > 0 && s > r / 2 && (document.scrollingElement.scrollTop = Math.min(document.scrollingElement.scrollHeight - r, s >= o ? 1 / 0 : Math.ceil(document.scrollingElement.scrollTop + s - r / 2))),
                               document.activeElement.scrollIntoView();
                      }
                      e.__portal.$el.click();
                     }
                     e.$emit("show", t);
                    }, 300);
           },
           __hide: function (t) {
            var e = this;
            this.__removeHistory(),
                    this.__cleanup(!0),
                    void 0 !== this.__refocusTarget && null !== this.__refocusTarget && this.__refocusTarget.focus(),
                    this.$el.dispatchEvent(C("popup-hide", {bubbles: !0})),
                    this.__setTimeout(function () {
                     e.__hidePortal(), e.$emit("hide", t);
                    }, 300);
           },
           __cleanup: function (t) {
            clearTimeout(this.shakeTimeout), (!0 !== t && !0 !== this.showing) || (ei.pop(this), this.__updateMaximized(!1), !0 !== this.seamless && (this.__preventScroll(!1), this.__preventFocusout(!1)));
           },
           __updateMaximized: function (t) {
            !0 === t
                    ? !0 !== this.isMaximized && (gs < 1 && document.body.classList.add("q-body--dialog"), gs++, (this.isMaximized = !0))
                    : !0 === this.isMaximized && (gs < 2 && document.body.classList.remove("q-body--dialog"), gs--, (this.isMaximized = !1));
           },
           __preventFocusout: function (t) {
            if (!0 === this.$q.platform.is.desktop) {
             var e = (!0 === t ? "add" : "remove") + "EventListener";
             document.body[e]("focusin", this.__onFocusChange);
            }
           },
           __onAutoClose: function (t) {
            this.hide(t), void 0 !== this.qListeners.click && this.$emit("click", t);
           },
           __onBackdropClick: function (t) {
            !0 !== this.persistent && !0 !== this.noBackdropDismiss ? this.hide(t) : this.shake();
           },
           __onFocusChange: function (t) {
            !0 === this.showing &&
                    void 0 !== this.__portal &&
                    !0 !==
                    (function (t, e) {
                     if (void 0 === t || !0 === t.contains(e))
                      return !0;
                     for (var i = t.nextElementSibling; null !== i; i = i.nextElementSibling)
                      if (i.contains(e))
                       return !0;
                     return !1;
                    })(this.__portal.$el, t.target) &&
                    this.focus();
           },
           __renderPortal: function (t) {
            return t("div", {staticClass: "q-dialog fullscreen no-pointer-events q-dialog--" + (!0 === this.useBackdrop ? "modal" : "seamless"), class: this.contentClass, style: this.contentStyle, attrs: this.qAttrs}, [
             t(
                     "transition",
                     {props: {name: "q-transition--fade"}},
                     !0 === this.useBackdrop ? [t("div", {staticClass: "q-dialog__backdrop fixed-full", attrs: _t, on: mt(this, "bkdrop", {click: this.__onBackdropClick})})] : null
                     ),
             t("transition", {props: {name: this.transition}}, [
              !0 === this.showing ? t("div", {ref: "inner", staticClass: "q-dialog__inner flex no-pointer-events", class: this.classes, attrs: {tabindex: -1}, on: this.onEvents}, Ot(this, "default")) : null,
             ]),
            ]);
           },
          },
          mounted: function () {
           this.__processModelChange(this.value);
          },
          beforeDestroy: function () {
           this.__cleanup();
          },
         }),
         ws = ["mouseover", "mouseout", "mouseenter", "mouseleave"],
         Ss = t.extend({
          name: "QDrawer",
          inject: {
           layout: {
            default: function () {
             console.error("QDrawer needs to be child of QLayout");
            },
           },
          },
          mixins: [It, ls, ke, vs],
          directives: {TouchPan: Xi},
          props: {
           side: {
            type: String,
            default: "left",
            validator: function (t) {
             return ["left", "right"].includes(t);
            },
           },
           width: {type: Number, default: 300},
           mini: Boolean,
           miniToOverlay: Boolean,
           miniWidth: {type: Number, default: 57},
           breakpoint: {type: Number, default: 1023},
           showIfAbove: Boolean,
           behavior: {
            type: String,
            validator: function (t) {
             return ["default", "desktop", "mobile"].includes(t);
            },
            default: "default",
           },
           bordered: Boolean,
           elevated: Boolean,
           contentStyle: [String, Object, Array],
           contentClass: [String, Object, Array],
           overlay: Boolean,
           persistent: Boolean,
           noSwipeOpen: Boolean,
           noSwipeClose: Boolean,
           noSwipeBackdrop: Boolean,
          },
          data: function () {
           var t = "mobile" === this.behavior || ("desktop" !== this.behavior && this.layout.totalWidth <= this.breakpoint);
           return {belowBreakpoint: t, showing: (!0 === this.showIfAbove && !1 === t) || !0 === this.value};
          },
          watch: {
           belowBreakpoint: function (t) {
            !0 === t
                    ? ((this.lastDesktopState = this.showing), !0 === this.showing && this.hide(!1))
                    : !1 === this.overlay && "mobile" !== this.behavior && !1 !== this.lastDesktopState && (!0 === this.showing ? (this.__applyPosition(0), this.__applyBackdrop(0), this.__cleanup()) : this.show(!1));
           },
           "layout.totalWidth": function (t) {
            this.__updateLocal("belowBreakpoint", "mobile" === this.behavior || ("desktop" !== this.behavior && t <= this.breakpoint));
           },
           side: function (t, e) {
            this.layout.instances[e] === this && ((this.layout.instances[e] = void 0), (this.layout[e].space = !1), (this.layout[e].offset = 0)),
                    (this.layout.instances[t] = this),
                    (this.layout[t].size = this.size),
                    (this.layout[t].space = this.onLayout),
                    (this.layout[t].offset = this.offset);
           },
           behavior: function (t) {
            this.__updateLocal("belowBreakpoint", "mobile" === t || ("desktop" !== t && this.layout.totalWidth <= this.breakpoint));
           },
           breakpoint: function (t) {
            this.__updateLocal("belowBreakpoint", "mobile" === this.behavior || ("desktop" !== this.behavior && this.layout.totalWidth <= t));
           },
           "layout.container": function (t) {
            !0 === this.showing && this.__preventScroll(!0 !== t);
           },
           "layout.scrollbarWidth": function () {
            this.__applyPosition(!0 === this.showing ? 0 : void 0);
           },
           offset: function (t) {
            this.__update("offset", t);
           },
           onLayout: function (t) {
            this.$emit("on-layout", t), this.__update("space", t);
           },
           rightSide: function () {
            this.__applyPosition();
           },
           size: function (t) {
            this.__applyPosition(), this.__updateSizeOnLayout(this.miniToOverlay, t);
           },
           miniToOverlay: function (t) {
            this.__updateSizeOnLayout(t, this.size);
           },
           "$q.lang.rtl": function () {
            this.__applyPosition();
           },
           mini: function () {
            !0 === this.value && (this.__animateMini(), this.layout.__animate());
           },
           isMini: function (t) {
            this.$emit("mini-state", t);
           },
          },
          computed: {
           rightSide: function () {
            return "right" === this.side;
           },
           otherSide: function () {
            return !0 === this.rightSide ? "left" : "right";
           },
           offset: function () {
            return !0 === this.showing && !1 === this.belowBreakpoint && !1 === this.overlay ? (!0 === this.miniToOverlay ? this.miniWidth : this.size) : 0;
           },
           size: function () {
            return !0 === this.isMini ? this.miniWidth : this.width;
           },
           fixed: function () {
            return !0 === this.overlay || !0 === this.miniToOverlay || this.layout.view.indexOf(this.rightSide ? "R" : "L") > -1 || (this.$q.platform.is.ios && !0 === this.layout.container);
           },
           onLayout: function () {
            return !0 === this.showing && !1 === this.belowBreakpoint && !1 === this.overlay;
           },
           onScreenOverlay: function () {
            return !0 === this.showing && !1 === this.belowBreakpoint && !0 === this.overlay;
           },
           backdropClass: function () {
            return !1 === this.showing ? "hidden" : null;
           },
           headerSlot: function () {
            return !0 === this.rightSide ? "r" === this.layout.rows.top[2] : "l" === this.layout.rows.top[0];
           },
           footerSlot: function () {
            return !0 === this.rightSide ? "r" === this.layout.rows.bottom[2] : "l" === this.layout.rows.bottom[0];
           },
           aboveStyle: function () {
            var t = {};
            return (
                    !0 === this.layout.header.space && !1 === this.headerSlot && (!0 === this.fixed ? (t.top = this.layout.header.offset + "px") : !0 === this.layout.header.space && (t.top = this.layout.header.size + "px")),
                    !0 === this.layout.footer.space && !1 === this.footerSlot && (!0 === this.fixed ? (t.bottom = this.layout.footer.offset + "px") : !0 === this.layout.footer.space && (t.bottom = this.layout.footer.size + "px")),
                    t
                    );
           },
           style: function () {
            var t = {width: this.size + "px"};
            return !0 === this.belowBreakpoint ? t : Object.assign(t, this.aboveStyle);
           },
           classes: function () {
            return (
                    "q-drawer--" +
                    this.side +
                    (!0 === this.bordered ? " q-drawer--bordered" : "") +
                    (!0 === this.isDark ? " q-drawer--dark q-dark" : "") +
                    (!0 !== this.showing ? " q-layout--prevent-focus" : "") +
                    (!0 === this.belowBreakpoint
                            ? " fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding"
                            : " q-drawer--" +
                            (!0 === this.isMini ? "mini" : "standard") +
                            (!0 === this.fixed || !0 !== this.onLayout ? " fixed" : "") +
                            (!0 === this.overlay || !0 === this.miniToOverlay ? " q-drawer--on-top" : "") +
                            (!0 === this.headerSlot ? " q-drawer--top-padding" : ""))
                    );
           },
           stateDirection: function () {
            return (!0 === this.$q.lang.rtl ? -1 : 1) * (!0 === this.rightSide ? 1 : -1);
           },
           isMini: function () {
            return !0 === this.mini && !0 !== this.belowBreakpoint;
           },
           onNativeEvents: function () {
            var t = this;
            if (!0 !== this.belowBreakpoint) {
             var e = {
              "!click": function (e) {
               t.$emit("click", e);
              },
             };
             return (
                     ws.forEach(function (i) {
                      e[i] = function (e) {
                       void 0 !== t.qListeners[i] && t.$emit(i, e);
                      };
                     }),
                     e
                     );
            }
           },
           hideOnRouteChange: function () {
            return !0 !== this.persistent && (!0 === this.belowBreakpoint || !0 === this.onScreenOverlay);
           },
           openDirective: function () {
            var t,
                    e = !0 === this.$q.lang.rtl ? this.side : this.otherSide;
            return [{name: "touch-pan", value: this.__openByTouch, modifiers: ((t = {}), (t[e] = !0), (t.mouse = !0), t)}];
           },
           contentCloseDirective: function () {
            var t;
            if (!0 !== this.noSwipeClose) {
             var e = !0 === this.$q.lang.rtl ? this.otherSide : this.side;
             return [{name: "touch-pan", value: this.__closeByTouch, modifiers: ((t = {}), (t[e] = !0), (t.mouse = !0), t)}];
            }
           },
           backdropCloseDirective: function () {
            var t;
            if (!0 !== this.noSwipeBackdrop) {
             var e = !0 === this.$q.lang.rtl ? this.otherSide : this.side;
             return [{name: "touch-pan", value: this.__closeByTouch, modifiers: ((t = {}), (t[e] = !0), (t.mouse = !0), (t.mouseAllDir = !0), t)}];
            }
           },
          },
          methods: {
           __applyPosition: function (t) {
            var e = this;
            void 0 === t
                    ? this.$nextTick(function () {
                     (t = !0 === e.showing ? 0 : e.size), e.__applyPosition(e.stateDirection * t);
                    })
                    : void 0 !== this.$refs.content &&
                    (!0 !== this.layout.container || !0 !== this.rightSide || (!0 !== this.belowBreakpoint && Math.abs(t) !== this.size) || (t += this.stateDirection * this.layout.scrollbarWidth),
                            this.__lastPosition !== t && ((this.$refs.content.style.transform = "translateX(" + t + "px)"), (this.__lastPosition = t)));
           },
           __applyBackdrop: function (t, e) {
            var i = this;
            void 0 !== this.$refs.backdrop
                    ? (this.$refs.backdrop.style.backgroundColor = this.lastBackdropBg = "rgba(0,0,0," + 0.4 * t + ")")
                    : !0 !== e &&
                    this.$nextTick(function () {
                     i.__applyBackdrop(t, !0);
                    });
           },
           __setBackdropVisible: function (t) {
            void 0 !== this.$refs.backdrop && this.$refs.backdrop.classList[!0 === t ? "remove" : "add"]("hidden");
           },
           __setScrollable: function (t) {
            var e = !0 === t ? "remove" : !0 !== this.layout.container ? "add" : "";
            "" !== e && document.body.classList[e]("q-body--drawer-toggle");
           },
           __animateMini: function () {
            var t = this;
            void 0 !== this.timerMini ? clearTimeout(this.timerMini) : void 0 !== this.$el && this.$el.classList.add("q-drawer--mini-animate"),
                    (this.timerMini = setTimeout(function () {
                     void 0 !== t.$el && t.$el.classList.remove("q-drawer--mini-animate"), (t.timerMini = void 0);
                    }, 150));
           },
           __openByTouch: function (t) {
            if (!1 === this.showing) {
             var e = this.size,
                     i = ht(t.distance.x, 0, e);
             if (!0 === t.isFinal) {
              var n = this.$refs.content,
                      s = i >= Math.min(75, e);
              return (
                      n.classList.remove("no-transition"),
                      void (!0 === s
                              ? this.show()
                              : (this.layout.__animate(),
                                      this.__applyBackdrop(0),
                                      this.__applyPosition(this.stateDirection * e),
                                      n.classList.remove("q-drawer--delimiter"),
                                      n.classList.add("q-layout--prevent-focus"),
                                      this.__setBackdropVisible(!1)))
                      );
             }
             if ((this.__applyPosition((!0 === this.$q.lang.rtl ? !0 !== this.rightSide : this.rightSide) ? Math.max(e - i, 0) : Math.min(0, i - e)), this.__applyBackdrop(ht(i / e, 0, 1)), !0 === t.isFirst)) {
              var o = this.$refs.content;
              o.classList.add("no-transition"), o.classList.add("q-drawer--delimiter"), o.classList.remove("q-layout--prevent-focus"), this.__setBackdropVisible(!0);
             }
            }
           },
           __closeByTouch: function (t) {
            if (!0 === this.showing) {
             var e = this.size,
                     i = t.direction === this.side,
                     n = (!0 === this.$q.lang.rtl ? !0 !== i : i) ? ht(t.distance.x, 0, e) : 0;
             if (!0 === t.isFinal) {
              var s = Math.abs(n) < Math.min(75, e);
              return this.$refs.content.classList.remove("no-transition"), void (!0 === s ? (this.layout.__animate(), this.__applyBackdrop(1), this.__applyPosition(0)) : this.hide());
             }
             this.__applyPosition(this.stateDirection * n), this.__applyBackdrop(ht(1 - n / e, 0, 1)), !0 === t.isFirst && this.$refs.content.classList.add("no-transition");
            }
           },
           __show: function (t, e) {
            var i = this;
            if ((this.__addHistory(), this.__setBackdropVisible(!0), !1 !== t && this.layout.__animate(), this.__applyPosition(0), !0 === this.belowBreakpoint)) {
             var n = this.layout.instances[this.otherSide];
             void 0 !== n && !0 === n.belowBreakpoint && n.hide(!1), this.__applyBackdrop(1), !0 !== this.layout.container && this.__preventScroll(!0);
            } else
             this.__applyBackdrop(0), !1 !== t && this.__setScrollable(!1);
            this.__setTimeout(function () {
             !1 !== t && i.__setScrollable(!0), !0 !== e && i.$emit("show", t);
            }, 150);
           },
           __hide: function (t, e) {
            var i = this;
            this.__removeHistory(),
                    !1 !== t && this.layout.__animate(),
                    this.__applyBackdrop(0),
                    this.__applyPosition(this.stateDirection * this.size),
                    this.__setBackdropVisible(!1),
                    this.__cleanup(),
                    !0 !== e &&
                    this.__setTimeout(function () {
                     i.$emit("hide", t);
                    }, 150);
           },
           __cleanup: function () {
            this.__preventScroll(!1), this.__setScrollable(!0);
           },
           __update: function (t, e) {
            this.layout[this.side][t] !== e && (this.layout[this.side][t] = e);
           },
           __updateLocal: function (t, e) {
            this[t] !== e && (this[t] = e);
           },
           __updateSizeOnLayout: function (t, e) {
            this.__update("size", !0 === t ? this.miniWidth : e);
           },
          },
          created: function () {
           (this.layout.instances[this.side] = this),
                   this.__updateSizeOnLayout(this.miniToOverlay, this.size),
                   this.__update("space", this.onLayout),
                   this.__update("offset", this.offset),
                   !0 === this.showIfAbove && !0 !== this.value && !0 === this.showing && void 0 !== this.qListeners.input && this.$emit("input", !0);
          },
          mounted: function () {
           var t = this;
           this.$emit("on-layout", this.onLayout), this.$emit("mini-state", this.isMini), (this.lastDesktopState = !0 === this.showIfAbove);
           var e = function () {
            var e = !0 === t.showing ? "show" : "hide";
            t["__" + e](!1, !0);
           };
           0 === this.layout.totalWidth
                   ? (this.watcher = this.$watch("layout.totalWidth", function () {
                    t.watcher(), (t.watcher = void 0), !1 === t.showing && !0 === t.showIfAbove && !1 === t.belowBreakpoint ? t.show(!1) : e();
                   }))
                   : this.$nextTick(e);
          },
          beforeDestroy: function () {
           void 0 !== this.watcher && this.watcher(),
                   clearTimeout(this.timerMini),
                   !0 === this.showing && this.__cleanup(),
                   this.layout.instances[this.side] === this && ((this.layout.instances[this.side] = void 0), this.__update("size", 0), this.__update("offset", 0), this.__update("space", !1));
          },
          render: function (t) {
           var e = [];
           !0 === this.belowBreakpoint &&
                   (!0 !== this.noSwipeOpen && e.push(t("div", {staticClass: "q-drawer__opener fixed-" + this.side, attrs: _t, directives: this.openDirective})),
                           e.push(
                                   t("div", {
                                    ref: "backdrop",
                                    staticClass: "fullscreen q-drawer__backdrop",
                                    class: this.backdropClass,
                                    attrs: _t,
                                    style: void 0 !== this.lastBackdropBg ? {backgroundColor: this.lastBackdropBg} : null,
                                    on: mt(this, "bkdrop", {click: this.hide}),
                                    directives: !1 === this.showing ? void 0 : this.backdropCloseDirective,
                                   })
                                   ));
           var i = [
            t(
                    "div",
                    {staticClass: "q-drawer__content fit " + (!0 === this.layout.container ? "overflow-auto" : "scroll"), class: this.contentClass, style: this.contentStyle},
                    !0 === this.isMini && void 0 !== this.$scopedSlots.mini ? this.$scopedSlots.mini() : Ot(this, "default")
                    ),
           ];
           return (
                   !0 === this.elevated && !0 === this.showing && i.push(t("div", {staticClass: "q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),
                   e.push(t("aside", {ref: "content", staticClass: "q-drawer", class: this.classes, style: this.style, on: this.onNativeEvents, directives: !0 === this.belowBreakpoint ? this.contentCloseDirective : void 0}, i)),
                   t("div", {staticClass: "q-drawer-container"}, e)
                   );
          },
         }),
         xs = t.extend({
          name: "QTooltip",
          mixins: [xe, ke, Te, $e],
          props: {
           maxHeight: {type: String, default: null},
           maxWidth: {type: String, default: null},
           transitionShow: {default: "jump-down"},
           transitionHide: {default: "jump-up"},
           anchor: {type: String, default: "bottom middle", validator: ii},
           self: {type: String, default: "top middle", validator: ii},
           offset: {
            type: Array,
            default: function () {
             return [14, 14];
            },
            validator: ni,
           },
           scrollTarget: {default: void 0},
           delay: {type: Number, default: 0},
           hideDelay: {type: Number, default: 0},
          },
          computed: {
           anchorOrigin: function () {
            return oi(this.anchor, this.$q.lang.rtl);
           },
           selfOrigin: function () {
            return oi(this.self, this.$q.lang.rtl);
           },
           hideOnRouteChange: function () {
            return !0 !== this.persistent;
           },
          },
          methods: {
           __show: function (t) {
            var e = this;
            this.__showPortal(),
                    this.__nextTick(function () {
                     (e.observer = new MutationObserver(function () {
                      return e.updatePosition();
                     })),
                             e.observer.observe(e.__portal.$el, {attributes: !1, childList: !0, characterData: !0, subtree: !0}),
                             e.updatePosition(),
                             e.__configureScrollTarget();
                    }),
                    void 0 === this.unwatch &&
                    (this.unwatch = this.$watch(function () {
                     return e.$q.screen.width + "|" + e.$q.screen.height + "|" + e.self + "|" + e.anchor + "|" + e.$q.lang.rtl;
                    }, this.updatePosition)),
                    this.__setTimeout(function () {
                     e.$emit("show", t);
                    }, 300);
           },
           __hide: function (t) {
            var e = this;
            this.__anchorCleanup(),
                    this.__setTimeout(function () {
                     e.__hidePortal(), e.$emit("hide", t);
                    }, 300);
           },
           __anchorCleanup: function () {
            void 0 !== this.observer && (this.observer.disconnect(), (this.observer = void 0)), void 0 !== this.unwatch && (this.unwatch(), (this.unwatch = void 0)), this.__unconfigureScrollTarget(), q(this, "tooltipTemp");
           },
           updatePosition: function () {
            if (void 0 !== this.anchorEl && void 0 !== this.__portal) {
             var t = this.__portal.$el;
             8 !== t.nodeType
                     ? ri({el: t, offset: this.offset, anchorEl: this.anchorEl, anchorOrigin: this.anchorOrigin, selfOrigin: this.selfOrigin, maxHeight: this.maxHeight, maxWidth: this.maxWidth})
                     : setTimeout(this.updatePosition, 25);
            }
           },
           __delayShow: function (t) {
            var e = this;
            if (!0 === this.$q.platform.is.mobile) {
             Se(), document.body.classList.add("non-selectable");
             var i = pe(this.anchorEl);
             k(
                     this,
                     "tooltipTemp",
                     ["touchmove", "touchcancel", "touchend", "click"].map(function (t) {
              return [i, t, "__delayHide", "passiveCapture"];
             })
                     );
            }
            this.__setTimeout(function () {
             e.show(t);
            }, this.delay);
           },
           __delayHide: function (t) {
            var e = this;
            this.__clearTimeout(),
                    !0 === this.$q.platform.is.mobile &&
                    (q(this, "tooltipTemp"),
                            Se(),
                            setTimeout(function () {
                             document.body.classList.remove("non-selectable");
                            }, 10)),
                    this.__setTimeout(function () {
                     e.hide(t);
                    }, this.hideDelay);
           },
           __configureAnchorEl: function () {
            !0 !== this.noParentEvent &&
                    void 0 !== this.anchorEl &&
                    k(
                            this,
                            "anchor",
                            !0 === this.$q.platform.is.mobile
                            ? [[this.anchorEl, "touchstart", "__delayShow", "passive"]]
                            : [
                             [this.anchorEl, "mouseenter", "__delayShow", "passive"],
                             [this.anchorEl, "mouseleave", "__delayHide", "passive"],
                            ]
                            );
           },
           __unconfigureScrollTarget: function () {
            void 0 !== this.__scrollTarget && (this.__changeScrollEvent(this.__scrollTarget), (this.__scrollTarget = void 0));
           },
           __configureScrollTarget: function () {
            if (void 0 !== this.anchorEl || void 0 !== this.scrollTarget) {
             this.__scrollTarget = Ie(this.anchorEl, this.scrollTarget);
             var t = !0 === this.noParentEvent ? this.updatePosition : this.hide;
             this.__changeScrollEvent(this.__scrollTarget, t);
            }
           },
           __renderPortal: function (t) {
            return t("transition", {props: {name: this.transition}}, [
             !0 === this.showing
                     ? t("div", {staticClass: "q-tooltip q-tooltip--style q-position-engine no-pointer-events", class: this.contentClass, style: this.contentStyle, attrs: {role: "complementary"}}, Ot(this, "default"))
                     : null,
            ]);
           },
          },
          mounted: function () {
           this.__processModelChange(this.value);
          },
         }),
         Cs = t.extend({
          name: "QList",
          mixins: [Lt, It],
          props: {bordered: Boolean, dense: Boolean, separator: Boolean, padding: Boolean},
          computed: {
           classes: function () {
            return (
                    "q-list" +
                    (!0 === this.bordered ? " q-list--bordered" : "") +
                    (!0 === this.dense ? " q-list--dense" : "") +
                    (!0 === this.separator ? " q-list--separator" : "") +
                    (!0 === this.isDark ? " q-list--dark" : "") +
                    (!0 === this.padding ? " q-list--padding" : "")
                    );
           },
          },
          render: function (t) {
           return t("div", {class: this.classes, on: Object.assign({}, this.qListeners)}, Ot(this, "default"));
          },
         }),
         ks = t.extend({
          name: "QItem",
          mixins: [It, Yt, $t, Lt],
          props: {active: Boolean, clickable: Boolean, dense: Boolean, insetLevel: Number, tabindex: [String, Number], focused: Boolean, manualFocus: Boolean},
          computed: {
           isActionable: function () {
            return !0 === this.clickable || !0 === this.hasRouterLink || "a" === this.tag || "label" === this.tag;
           },
           isClickable: function () {
            return !0 !== this.disable && !0 === this.isActionable;
           },
           classes: function () {
            var t;
            return (
                    ((t = {
                     "q-item--clickable q-link cursor-pointer": this.isClickable,
                     "q-focusable q-hoverable": !0 === this.isClickable && !1 === this.manualFocus,
                     "q-manual-focusable": !0 === this.isClickable && !0 === this.manualFocus,
                     "q-manual-focusable--focused": !0 === this.isClickable && !0 === this.focused,
                     "q-item--dense": this.dense,
                     "q-item--dark": this.isDark,
                     "q-item--active": this.active,
                    })[this.activeClass] = !0 === this.active && !0 !== this.hasRouterLink && void 0 !== this.activeClass),
                    (t.disabled = this.disable),
                    t
                    );
           },
           style: function () {
            var t;
            if (void 0 !== this.insetLevel)
             return ((t = {})["padding" + (!0 === this.$q.lang.rtl ? "Right" : "Left")] = 16 + 56 * this.insetLevel + "px"), t;
           },
           onEvents: function () {
            return Object.assign({}, this.qListeners, {click: this.__onClick, keyup: this.__onKeyup});
           },
          },
          methods: {
           __getContent: function (t) {
            var e = Bt(this, "default", []);
            return !0 === this.isClickable && e.unshift(t("div", {staticClass: "q-focus-helper", attrs: {tabindex: -1}, ref: "blurTarget"})), e;
           },
           __onClick: function (t) {
            !0 === this.isClickable &&
                    (void 0 !== this.$refs.blurTarget && (!0 !== t.qKeyEvent && document.activeElement === this.$el ? this.$refs.blurTarget.focus() : document.activeElement === this.$refs.blurTarget && this.$el.focus()),
                            this.$emit("click", t));
           },
           __onKeyup: function (t) {
            if (!0 === this.isClickable && !0 === tt(t, 13)) {
             S(t), (t.qKeyEvent = !0);
             var e = new MouseEvent("click", t);
             (e.qKeyEvent = !0), this.$el.dispatchEvent(e);
            }
            this.$emit("keyup", t);
           },
          },
          render: function (t) {
           var e = {staticClass: "q-item q-item-type row no-wrap", class: this.classes, style: this.style};
           return (
                   (e[!0 === this.hasRouterLink ? "nativeOn" : "on"] = this.onEvents),
                   !0 === this.isClickable ? (e.attrs = {tabindex: this.tabindex || "0"}) : !0 === this.isActionable && (e.attrs = {"aria-disabled": "true"}),
                   !0 === this.hasRouterLink ? ((e.tag = "a"), (e.props = this.routerLinkProps), t("router-link", e, this.__getContent(t))) : t(this.tag, e, this.__getContent(t))
                   );
          },
         }),
         qs = t.extend({
          name: "QItemSection",
          mixins: [Lt],
          props: {avatar: Boolean, thumbnail: Boolean, side: Boolean, top: Boolean, noWrap: Boolean},
          computed: {
           classes: function () {
            var t,
                    e = this.avatar || this.side || this.thumbnail;
            return (
                    ((t = {
                     "q-item__section--top": this.top,
                     "q-item__section--avatar": this.avatar,
                     "q-item__section--thumbnail": this.thumbnail,
                     "q-item__section--side": e,
                     "q-item__section--nowrap": this.noWrap,
                     "q-item__section--main": !e,
                    })["justify-" + (this.top ? "start" : "center")] = !0),
                    t
                    );
           },
          },
          render: function (t) {
           return t("div", {staticClass: "q-item__section column", class: this.classes, on: Object.assign({}, this.qListeners)}, Ot(this, "default"));
          },
         });
 function Ts(t, e, i) {
  e.handler ? e.handler(t, i, i.caret) : i.runCmd(e.cmd, e.param);
 }
 function Ms(t, e) {
  return t("div", {staticClass: "q-editor__toolbar-group"}, e);
 }
 function $s(t, e, i, n, s) {
  void 0 === s && (s = !1);
  var o = s || ("toggle" === i.type && (i.toggled ? i.toggled(e) : i.cmd && e.caret.is(i.cmd, i.param))),
          r = [],
          a = {
           click: function (t) {
            n && n(), Ts(t, i, e);
           },
          };
  if (i.tip && e.$q.platform.is.desktop) {
   var l = i.key ? t("div", [t("small", "(CTRL + " + String.fromCharCode(i.key) + ")")]) : null;
   r.push(t(xs, {props: {delay: 1e3}}, [t("div", {domProps: {innerHTML: i.tip}}), l]));
  }
  return t(
          ye,
          {
           props: Object.assign({}, e.buttonProps, {
            icon: null !== i.icon ? i.icon : void 0,
            color: o ? i.toggleColor || e.toolbarToggleColor : i.color || e.toolbarColor,
            textColor: o && !e.toolbarPush ? null : i.textColor || e.toolbarTextColor,
            label: i.label,
            disable: !!i.disable && ("function" != typeof i.disable || i.disable(e)),
            size: "sm",
           }),
           on: a,
          },
          r
          );
 }
 function Ls(t, e) {
  if (e.caret)
   return e.buttons
           .filter(function (t) {
            return (
                    !e.isViewingSource ||
                    t.find(function (t) {
                     return "viewsource" === t.cmd;
                    })
                    );
           })
           .map(function (i) {
            return Ms(
                    t,
                    i.map(function (i) {
                     return (
                             (!e.isViewingSource || "viewsource" === i.cmd) &&
                             ("slot" === i.type
                                     ? Ot(e, i.slot)
                                     : "dropdown" === i.type
                                     ? (function (t, e, i) {
                                      var n,
                                              s,
                                              o = "only-icons" === i.list,
                                              r = i.label,
                                              a = null !== i.icon ? i.icon : void 0;
                                      function l() {
                                       p.componentInstance.hide();
                                      }
                                      if (o)
                                       (s = i.options.map(function (i) {
                                        var n = void 0 === i.type && e.caret.is(i.cmd, i.param);
                                        return n && ((r = i.tip), (a = null !== i.icon ? i.icon : void 0)), $s(t, e, i, l, n);
                                       })),
                                               (n = e.toolbarBackgroundClass),
                                               (s = [Ms(t, s)]);
                                      else {
                                       var c = void 0 !== e.toolbarToggleColor ? "text-" + e.toolbarToggleColor : null,
                                               u = void 0 !== e.toolbarTextColor ? "text-" + e.toolbarTextColor : null,
                                               h = "no-icons" === i.list;
                                       (s = i.options.map(function (i) {
                                        var n = !!i.disable && i.disable(e),
                                                s = void 0 === i.type && e.caret.is(i.cmd, i.param);
                                        s && ((r = i.tip), (a = null !== i.icon ? i.icon : void 0));
                                        var o = i.htmlTip;
                                        return t(
                                                ks,
                                                {
                                                 props: {active: s, activeClass: c, clickable: !0, disable: n, dense: !0},
                                                 on: {
                                                  click: function (t) {
                                                   l(), e.$refs.content && e.$refs.content.focus(), e.caret.restore(), Ts(t, i, e);
                                                  },
                                                 },
                                                },
                                                [
                                                 !0 === h ? null : t(qs, {class: s ? c : u, props: {side: !0}}, [t(zt, {props: {name: null !== i.icon ? i.icon : void 0}})]),
                                                 t(qs, [o ? t("div", {staticClass: "text-no-wrap", domProps: {innerHTML: i.htmlTip}}) : i.tip ? t("div", {staticClass: "text-no-wrap"}, [i.tip]) : null]),
                                                ]
                                                );
                                       })),
                                               (n = [e.toolbarBackgroundClass, u]),
                                               (s = [t(Cs, [s])]);
                                      }
                                      var d = i.highlight && r !== i.label,
                                              p = t(
                                                      li,
                                                      {
                                                       props: Object.assign({}, e.buttonProps, {
                                                        noCaps: !0,
                                                        noWrap: !0,
                                                        color: d ? e.toolbarToggleColor : e.toolbarColor,
                                                        textColor: d && !e.toolbarPush ? null : e.toolbarTextColor,
                                                        label: i.fixedLabel ? i.label : r,
                                                        icon: i.fixedIcon ? (null !== i.icon ? i.icon : void 0) : a,
                                                        contentClass: n,
                                                       }),
                                                      },
                                                      s
                                                      );
                                      return p;
                                     })(t, e, i)
                                     : $s(t, e, i))
                             );
                    })
                    );
           });
 }
 function Os(t, e, i) {
  return !(!t || t === document.body) && ((!0 === i && t === e) || (e === document ? document.body : e).contains(t.parentNode));
 }
 var Bs = /^https?:\/\//,
         Es = function (t, e) {
          (this.el = t), (this.vm = e), (this._range = null);
         },
         Ps = {selection: {configurable: !0}, hasSelection: {configurable: !0}, range: {configurable: !0}, parent: {configurable: !0}, blockParent: {configurable: !0}};
 (Ps.selection.get = function () {
  if (this.el) {
   var t = document.getSelection();
   if (Os(t.anchorNode, this.el, !0) && Os(t.focusNode, this.el, !0))
    return t;
  }
  return null;
 }),
         (Ps.hasSelection.get = function () {
          return null !== this.selection && this.selection.toString().length > 0;
         }),
         (Ps.range.get = function () {
          var t = this.selection;
          return null !== t && t.rangeCount ? t.getRangeAt(0) : this._range;
         }),
         (Ps.parent.get = function () {
          var t = this.range;
          if (null !== t) {
           var e = t.startContainer;
           return e.nodeType === document.ELEMENT_NODE ? e : e.parentNode;
          }
          return null;
         }),
         (Ps.blockParent.get = function () {
          var t = this.parent;
          return null !== t
                  ? (function t(e, i) {
                   if (i && e === i)
                    return null;
                   var n = e.nodeName.toLowerCase();
                   if (!0 === ["div", "li", "ul", "ol", "blockquote"].includes(n))
                    return e;
                   var s = (window.getComputedStyle ? window.getComputedStyle(e) : e.currentStyle).display;
                   return "block" === s || "table" === s ? e : t(e.parentNode);
                  })(t, this.el)
                  : null;
         }),
         (Es.prototype.save = function (t) {
          void 0 === t && (t = this.range), null !== t && (this._range = t);
         }),
         (Es.prototype.restore = function (t) {
          void 0 === t && (t = this._range);
          var e = document.createRange(),
                  i = document.getSelection();
          null !== t ? (e.setStart(t.startContainer, t.startOffset), e.setEnd(t.endContainer, t.endOffset), i.removeAllRanges(), i.addRange(e)) : (i.selectAllChildren(this.el), i.collapseToEnd());
         }),
         (Es.prototype.savePosition = function () {
          var t,
                  e = -1,
                  i = document.getSelection(),
                  n = this.el.parentNode;
          if (i.focusNode && Os(i.focusNode, n))
           for (t = i.focusNode, e = i.focusOffset; t && t !== n; )
            t !== this.el && t.previousSibling ? (e += (t = t.previousSibling).textContent.length) : (t = t.parentNode);
          this.savedPos = e;
         }),
         (Es.prototype.restorePosition = function (t) {
          if ((void 0 === t && (t = 0), this.savedPos > 0 && this.savedPos < t)) {
           var e = window.getSelection(),
                   i = (function t(e, i, n) {
                    if ((n || ((n = document.createRange()).selectNode(e), n.setStart(e, 0)), 0 === i.count))
                     n.setEnd(e, i.count);
                    else if (i.count > 0)
                     if (e.nodeType === Node.TEXT_NODE)
                      e.textContent.length < i.count ? (i.count -= e.textContent.length) : (n.setEnd(e, i.count), (i.count = 0));
                     else
                      for (var s = 0; 0 !== i.count && s < e.childNodes.length; s++)
                       n = t(e.childNodes[s], i, n);
                    return n;
                   })(this.el, {count: this.savedPos});
           i && (i.collapse(!1), e.removeAllRanges(), e.addRange(i));
          }
         }),
         (Es.prototype.hasParent = function (t, e) {
          var i = e ? this.parent : this.blockParent;
          return null !== i && i.nodeName.toLowerCase() === t.toLowerCase();
         }),
         (Es.prototype.hasParents = function (t, e, i) {
          return void 0 === i && (i = this.parent), null !== i && ((null !== i && !0 === t.includes(i.nodeName.toLowerCase())) || (!0 === e && this.hasParents(t, e, i.parentNode)));
         }),
         (Es.prototype.is = function (t, e) {
          if (null === this.selection)
           return !1;
          switch (t) {
           case "formatBlock":
            return ("DIV" === e && this.parent === this.el) || this.hasParent(e, "PRE" === e);
           case "link":
            return this.hasParent("A", !0);
           case "fontSize":
            return document.queryCommandValue(t) === e;
           case "fontName":
            var i = document.queryCommandValue(t);
            return i === '"' + e + '"' || i === e;
           case "fullscreen":
            return this.vm.inFullscreen;
           case "viewsource":
            return this.vm.isViewingSource;
           case void 0:
            return !1;
           default:
            var n = document.queryCommandState(t);
            return void 0 !== e ? n === e : n;
          }
         }),
         (Es.prototype.getParentAttribute = function (t) {
          return null !== this.parent ? this.parent.getAttribute(t) : null;
         }),
         (Es.prototype.can = function (t) {
          return "outdent" === t ? this.hasParents(["blockquote", "li"], !0) : "indent" === t ? this.hasParents(["li"], !0) : "link" === t ? null !== this.selection || this.is("link") : void 0;
         }),
         (Es.prototype.apply = function (t, e, i) {
          if ((void 0 === i && (i = f), "formatBlock" === t))
           ["BLOCKQUOTE", "H1", "H2", "H3", "H4", "H5", "H6"].includes(e) && this.is(t, e) && ((t = "outdent"), (e = null)), "PRE" === e && this.is(t, "PRE") && (e = "P");
          else {
           if ("print" === t) {
            i();
            var n = window.open();
            return (
                    n.document.write(
                            "\n        <!doctype html>\n        <html>\n          <head>\n            <title>Print - " +
                            document.title +
                            "</title>\n          </head>\n          <body>\n            <div>" +
                            this.el.innerHTML +
                            "</div>\n          </body>\n        </html>\n      "
                            ),
                    n.print(),
                    void n.close()
                    );
           }
           if ("link" === t) {
            var s = this.getParentAttribute("href");
            if (null === s) {
             var o = this.selectWord(this.selection),
                     r = o ? o.toString() : "";
             if (!(r.length || (this.range && this.range.cloneContents().querySelector("img"))))
              return;
             (this.vm.editLinkUrl = Bs.test(r) ? r : "https://"), document.execCommand("createLink", !1, this.vm.editLinkUrl), this.save(o.getRangeAt(0));
            } else
             (this.vm.editLinkUrl = s), this.range.selectNodeContents(this.parent), this.save();
            return;
           }
           if ("fullscreen" === t)
            return this.vm.toggleFullscreen(), void i();
           if ("viewsource" === t)
            return (this.vm.isViewingSource = !1 === this.vm.isViewingSource), this.vm.__setContent(this.vm.value), void i();
          }
          document.execCommand(t, !1, e), i();
         }),
         (Es.prototype.selectWord = function (t) {
          if (null === t || !0 !== t.isCollapsed || void 0 === t.modify)
           return t;
          var e = document.createRange();
          e.setStart(t.anchorNode, t.anchorOffset), e.setEnd(t.focusNode, t.focusOffset);
          var i = e.collapsed ? ["backward", "forward"] : ["forward", "backward"];
          e.detach();
          var n = t.focusNode,
                  s = t.focusOffset;
          return t.collapse(t.anchorNode, t.anchorOffset), t.modify("move", i[0], "character"), t.modify("move", i[1], "word"), t.extend(n, s), t.modify("extend", i[1], "character"), t.modify("extend", i[0], "word"), t;
         }),
         Object.defineProperties(Es.prototype, Ps);
 var zs = Object.prototype.toString,
         As = Object.prototype.hasOwnProperty,
         Ds = {};
 function Is(t) {
  return null === t ? String(t) : Ds[zs.call(t)] || "object";
 }
 function Rs(t) {
  if (!t || "object" !== Is(t))
   return !1;
  if (t.constructor && !As.call(t, "constructor") && !As.call(t.constructor.prototype, "isPrototypeOf"))
   return !1;
  var e;
  for (e in t)
   ;
  return void 0 === e || As.call(t, e);
 }
 function Fs() {
  var t,
          e,
          i,
          n,
          s,
          o,
          r = arguments,
          a = arguments[0] || {},
          l = 1,
          c = !1,
          u = arguments.length;
  for ("boolean" == typeof a && ((c = a), (a = arguments[1] || {}), (l = 2)), Object(a) !== a && "function" !== Is(a) && (a = {}), u === l && ((a = this), l--); l < u; l++)
   if (null !== (t = r[l]))
    for (e in t)
     (i = a[e]), a !== (n = t[e]) && (c && n && (Rs(n) || (s = "array" === Is(n))) ? (s ? ((s = !1), (o = i && "array" === Is(i) ? i : [])) : (o = i && Rs(i) ? i : {}), (a[e] = Fs(c, o, n))) : void 0 !== n && (a[e] = n));
  return a;
 }
 "Boolean Number String Function Array Date RegExp Object".split(" ").forEach(function (t) {
  Ds["[object " + t + "]"] = t.toLowerCase();
 });
 for (
         var js,
         Vs = t.extend({
          name: "QEditor",
          mixins: [Lt, wi, It],
          props: {
           value: {type: String, required: !0},
           readonly: Boolean,
           disable: Boolean,
           minHeight: {type: String, default: "10rem"},
           maxHeight: String,
           height: String,
           definitions: Object,
           fonts: Object,
           placeholder: String,
           toolbar: {
            type: Array,
            validator: function (t) {
             return (
                     0 === t.length ||
                     t.every(function (t) {
                      return t.length;
                     })
                     );
            },
            default: function () {
             return [
              ["left", "center", "right", "justify"],
              ["bold", "italic", "underline", "strike"],
              ["undo", "redo"],
             ];
            },
           },
           toolbarColor: String,
           toolbarBg: String,
           toolbarTextColor: String,
           toolbarToggleColor: {type: String, default: "primary"},
           toolbarOutline: Boolean,
           toolbarPush: Boolean,
           toolbarRounded: Boolean,
           paragraphTag: {
            type: String,
            validator: function (t) {
             return ["div", "p"].includes(t);
            },
            default: "div",
           },
           contentStyle: Object,
           contentClass: [Object, Array, String],
           square: Boolean,
           flat: Boolean,
           dense: Boolean,
          },
          computed: {
           editable: function () {
            return !this.readonly && !this.disable;
           },
           hasToolbar: function () {
            return this.toolbar && this.toolbar.length > 0;
           },
           toolbarBackgroundClass: function () {
            if (this.toolbarBg)
             return "bg-" + this.toolbarBg;
           },
           buttonProps: function () {
            return {
             type: "a",
             flat: !0 !== this.toolbarOutline && !0 !== this.toolbarPush,
             noWrap: !0,
             outline: this.toolbarOutline,
             push: this.toolbarPush,
             rounded: this.toolbarRounded,
             dense: !0,
             color: this.toolbarColor,
             disable: !this.editable,
             size: "sm",
            };
           },
           buttonDef: function () {
            var t = this.$q.lang.editor,
                    e = this.$q.iconSet.editor;
            return {
             bold: {cmd: "bold", icon: e.bold, tip: t.bold, key: 66},
             italic: {cmd: "italic", icon: e.italic, tip: t.italic, key: 73},
             strike: {cmd: "strikeThrough", icon: e.strikethrough, tip: t.strikethrough, key: 83},
             underline: {cmd: "underline", icon: e.underline, tip: t.underline, key: 85},
             unordered: {cmd: "insertUnorderedList", icon: e.unorderedList, tip: t.unorderedList},
             ordered: {cmd: "insertOrderedList", icon: e.orderedList, tip: t.orderedList},
             subscript: {cmd: "subscript", icon: e.subscript, tip: t.subscript, htmlTip: "x<subscript>2</subscript>"},
             superscript: {cmd: "superscript", icon: e.superscript, tip: t.superscript, htmlTip: "x<superscript>2</superscript>"},
             link: {
              cmd: "link",
              disable: function (t) {
               return t.caret && !t.caret.can("link");
              },
              icon: e.hyperlink,
              tip: t.hyperlink,
              key: 76,
             },
             fullscreen: {cmd: "fullscreen", icon: e.toggleFullscreen, tip: t.toggleFullscreen, key: 70},
             viewsource: {cmd: "viewsource", icon: e.viewSource, tip: t.viewSource},
             quote: {cmd: "formatBlock", param: "BLOCKQUOTE", icon: e.quote, tip: t.quote, key: 81},
             left: {cmd: "justifyLeft", icon: e.left, tip: t.left},
             center: {cmd: "justifyCenter", icon: e.center, tip: t.center},
             right: {cmd: "justifyRight", icon: e.right, tip: t.right},
             justify: {cmd: "justifyFull", icon: e.justify, tip: t.justify},
             print: {type: "no-state", cmd: "print", icon: e.print, tip: t.print, key: 80},
             outdent: {
              type: "no-state",
              disable: function (t) {
               return t.caret && !t.caret.can("outdent");
              },
              cmd: "outdent",
              icon: e.outdent,
              tip: t.outdent,
             },
             indent: {
              type: "no-state",
              disable: function (t) {
               return t.caret && !t.caret.can("indent");
              },
              cmd: "indent",
              icon: e.indent,
              tip: t.indent,
             },
             removeFormat: {type: "no-state", cmd: "removeFormat", icon: e.removeFormat, tip: t.removeFormat},
             hr: {type: "no-state", cmd: "insertHorizontalRule", icon: e.hr, tip: t.hr},
             undo: {type: "no-state", cmd: "undo", icon: e.undo, tip: t.undo, key: 90},
             redo: {type: "no-state", cmd: "redo", icon: e.redo, tip: t.redo, key: 89},
             h1: {cmd: "formatBlock", param: "H1", icon: e.heading1 || e.heading, tip: t.heading1, htmlTip: '<h1 class="q-ma-none">' + t.heading1 + "</h1>"},
             h2: {cmd: "formatBlock", param: "H2", icon: e.heading2 || e.heading, tip: t.heading2, htmlTip: '<h2 class="q-ma-none">' + t.heading2 + "</h2>"},
             h3: {cmd: "formatBlock", param: "H3", icon: e.heading3 || e.heading, tip: t.heading3, htmlTip: '<h3 class="q-ma-none">' + t.heading3 + "</h3>"},
             h4: {cmd: "formatBlock", param: "H4", icon: e.heading4 || e.heading, tip: t.heading4, htmlTip: '<h4 class="q-ma-none">' + t.heading4 + "</h4>"},
             h5: {cmd: "formatBlock", param: "H5", icon: e.heading5 || e.heading, tip: t.heading5, htmlTip: '<h5 class="q-ma-none">' + t.heading5 + "</h5>"},
             h6: {cmd: "formatBlock", param: "H6", icon: e.heading6 || e.heading, tip: t.heading6, htmlTip: '<h6 class="q-ma-none">' + t.heading6 + "</h6>"},
             p: {cmd: "formatBlock", param: this.paragraphTag.toUpperCase(), icon: e.heading, tip: t.paragraph},
             code: {cmd: "formatBlock", param: "PRE", icon: e.code, htmlTip: "<code>" + t.code + "</code>"},
             "size-1": {cmd: "fontSize", param: "1", icon: e.size1 || e.size, tip: t.size1, htmlTip: '<font size="1">' + t.size1 + "</font>"},
             "size-2": {cmd: "fontSize", param: "2", icon: e.size2 || e.size, tip: t.size2, htmlTip: '<font size="2">' + t.size2 + "</font>"},
             "size-3": {cmd: "fontSize", param: "3", icon: e.size3 || e.size, tip: t.size3, htmlTip: '<font size="3">' + t.size3 + "</font>"},
             "size-4": {cmd: "fontSize", param: "4", icon: e.size4 || e.size, tip: t.size4, htmlTip: '<font size="4">' + t.size4 + "</font>"},
             "size-5": {cmd: "fontSize", param: "5", icon: e.size5 || e.size, tip: t.size5, htmlTip: '<font size="5">' + t.size5 + "</font>"},
             "size-6": {cmd: "fontSize", param: "6", icon: e.size6 || e.size, tip: t.size6, htmlTip: '<font size="6">' + t.size6 + "</font>"},
             "size-7": {cmd: "fontSize", param: "7", icon: e.size7 || e.size, tip: t.size7, htmlTip: '<font size="7">' + t.size7 + "</font>"},
            };
           },
           buttons: function () {
            var t = this,
                    e = this.definitions || {},
                    i =
                    this.definitions || this.fonts
                    ? Fs(
                            !0,
                            {},
                            this.buttonDef,
                            e,
                            (function (t, e, i, n) {
                             void 0 === n && (n = {});
                             var s = Object.keys(n);
                             if (0 === s.length)
                              return {};
                             var o = {default_font: {cmd: "fontName", param: t, icon: i, tip: e}};
                             return (
                                     s.forEach(function (t) {
                                      var e = n[t];
                                      o[t] = {cmd: "fontName", param: e, icon: i, tip: e, htmlTip: '<font face="' + e + '">' + e + "</font>"};
                                     }),
                                     o
                                     );
                            })(this.defaultFont, this.$q.lang.editor.defaultFont, this.$q.iconSet.editor.font, this.fonts)
                            )
                    : this.buttonDef;
            return this.toolbar.map(function (n) {
             return n.map(function (n) {
              if (n.options)
               return {
                type: "dropdown",
                icon: n.icon,
                label: n.label,
                size: "sm",
                dense: !0,
                fixedLabel: n.fixedLabel,
                fixedIcon: n.fixedIcon,
                highlight: n.highlight,
                list: n.list,
                options: n.options.map(function (t) {
                 return i[t];
                }),
               };
              var s = i[n];
              return s ? ("no-state" === s.type || (e[n] && (void 0 === s.cmd || (t.buttonDef[s.cmd] && "no-state" === t.buttonDef[s.cmd].type))) ? s : Object.assign({type: "toggle"}, s)) : {type: "slot", slot: n};
             });
            });
           },
           keys: function () {
            var t = {},
                    e = function (e) {
                     e.key && (t[e.key] = {cmd: e.cmd, param: e.param});
                    };
            return (
                    this.buttons.forEach(function (t) {
                     t.forEach(function (t) {
                      t.options ? t.options.forEach(e) : e(t);
                     });
                    }),
                    t
                    );
           },
           innerStyle: function () {
            return this.inFullscreen ? this.contentStyle : [{minHeight: this.minHeight, height: this.height, maxHeight: this.maxHeight}, this.contentStyle];
           },
           classes: function () {
            return (
                    "q-editor q-editor--" +
                    (!0 === this.isViewingSource ? "source" : "default") +
                    (!0 === this.disable ? " disabled" : "") +
                    (!0 === this.inFullscreen ? " fullscreen column" : "") +
                    (!0 === this.square ? " q-editor--square no-border-radius" : "") +
                    (!0 === this.flat ? " q-editor--flat" : "") +
                    (!0 === this.dense ? " q-editor--dense" : "") +
                    (!0 === this.isDark ? " q-editor--dark q-dark" : "")
                    );
           },
           innerClass: function () {
            return [this.contentClass, {col: this.inFullscreen, "overflow-auto": this.inFullscreen || this.maxHeight}];
           },
           attrs: function () {
            return !0 === this.disable ? {"aria-disabled": "true"} : !0 === this.readonly ? {"aria-readonly": "true"} : void 0;
           },
           onEditor: function () {
            return {focusin: this.__onFocusin, focusout: this.__onFocusout};
           },
          },
          data: function () {
           return {lastEmit: this.value, editLinkUrl: null, isViewingSource: !1};
          },
          watch: {
           value: function (t) {
            this.lastEmit !== t && ((this.lastEmit = t), this.__setContent(t, !0));
           },
          },
          methods: {
           __onInput: function () {
            if (void 0 !== this.$refs.content) {
             var t = !0 === this.isViewingSource ? this.$refs.content.innerText : this.$refs.content.innerHTML;
             t !== this.value && ((this.lastEmit = t), this.$emit("input", t));
            }
           },
           __onKeydown: function (t) {
            if ((this.$emit("keydown", t), !0 !== t.ctrlKey || !0 === J(t)))
             return this.refreshToolbar(), void (this.$q.platform.is.ie && this.$nextTick(this.__onInput));
            var e = t.keyCode,
                    i = this.keys[e];
            if (void 0 !== i) {
             var n = i.cmd,
                     s = i.param;
             S(t), this.runCmd(n, s, !1);
            }
           },
           __onClick: function (t) {
            this.refreshToolbar(), this.$emit("click", t);
           },
           __onBlur: function (t) {
            if (void 0 !== this.$refs.content) {
             var e = this.$refs.content,
                     i = e.scrollTop,
                     n = e.scrollHeight;
             this.__offsetBottom = n - i;
            }
            !0 !== this.$q.platform.is.ie && this.caret.save(), this.$emit("blur", t);
           },
           __onFocus: function (t) {
            var e = this;
            this.$nextTick(function () {
             void 0 !== e.$refs.content && void 0 !== e.__offsetBottom && (e.$refs.content.scrollTop = e.$refs.content.scrollHeight - e.__offsetBottom);
            }),
                    this.$emit("focus", t);
           },
           __onFocusin: function (t) {
            if (!0 === this.$el.contains(t.target) && (null === t.relatedTarget || !0 !== this.$el.contains(t.relatedTarget))) {
             var e = "inner" + (!0 === this.isViewingSource ? "Text" : "HTML");
             this.caret.restorePosition(this.$refs.content[e].length), this.refreshToolbar();
            }
           },
           __onFocusout: function (t) {
            !0 !== this.$el.contains(t.target) || (null !== t.relatedTarget && !0 === this.$el.contains(t.relatedTarget)) || (this.caret.savePosition(), this.refreshToolbar());
           },
           __onMousedown: function () {
            this.__offsetBottom = void 0;
           },
           __onMouseup: function (t) {
            this.caret.save(), void 0 !== this.qListeners.mouseup && this.$emit("mouseup", t);
           },
           __onKeyup: function (t) {
            this.caret.save(), void 0 !== this.qListeners.keyup && this.$emit("keyup", t);
           },
           __onTouchstart: function () {
            this.__offsetBottom = void 0;
           },
           __onTouchend: function (t) {
            this.caret.save(), void 0 !== this.qListeners.touchend && this.$emit("touchend", t);
           },
           runCmd: function (t, e, i) {
            var n = this;
            void 0 === i && (i = !0),
                    this.focus(),
                    this.caret.restore(),
                    this.caret.apply(t, e, function () {
                     n.focus(), n.caret.save(), (!0 !== n.$q.platform.is.ie && !0 !== n.$q.platform.is.edge) || n.$nextTick(n.__onInput), i && n.refreshToolbar();
                    });
           },
           refreshToolbar: function () {
            var t = this;
            setTimeout(function () {
             (t.editLinkUrl = null), t.$forceUpdate();
            }, 1);
           },
           focus: function () {
            void 0 !== this.$refs.content && this.$refs.content.focus();
           },
           getContentEl: function () {
            return this.$refs.content;
           },
           __setContent: function (t, e) {
            if (void 0 !== this.$refs.content) {
             !0 === e && this.caret.savePosition();
             var i = "inner" + (!0 === this.isViewingSource ? "Text" : "HTML");
             (this.$refs.content[i] = t), !0 === e && (this.caret.restorePosition(this.$refs.content[i].length), this.refreshToolbar());
            }
           },
          },
          created: function () {
           !1 === i && (document.execCommand("defaultParagraphSeparator", !1, this.paragraphTag), (this.defaultFont = window.getComputedStyle(document.body).fontFamily));
          },
          mounted: function () {
           (this.caret = new Es(this.$refs.content, this)), this.__setContent(this.value), this.refreshToolbar();
          },
          render: function (t) {
           var e;
           if (this.hasToolbar) {
            var n = [t("div", {key: "qedt_top", staticClass: "q-editor__toolbar row no-wrap scroll-x", class: this.toolbarBackgroundClass}, Ls(t, this))];
            null !== this.editLinkUrl &&
                    n.push(
                            t(
                                    "div",
                                    {key: "qedt_btm", staticClass: "q-editor__toolbar row no-wrap items-center scroll-x", class: this.toolbarBackgroundClass},
                                    (function (t, e, i) {
                                     if (e.caret) {
                                      var n = e.toolbarColor || e.toolbarTextColor,
                                              s = e.editLinkUrl,
                                              o = function () {
                                               e.caret.restore(), s !== e.editLinkUrl && document.execCommand("createLink", !1, "" === s ? " " : s), (e.editLinkUrl = null), !0 === i && e.$nextTick(e.__onInput);
                                              };
                                      return [
                                       t("div", {staticClass: "q-mx-xs", class: "text-" + n}, [e.$q.lang.editor.url + ": "]),
                                       t("input", {
                                        key: "qedt_btm_input",
                                        staticClass: "col q-editor__link-input",
                                        domProps: {value: s},
                                        on: {
                                         input: function (t) {
                                          y(t), (s = t.target.value);
                                         },
                                         keydown: function (t) {
                                          if (!0 !== J(t))
                                           switch (t.keyCode) {
                                            case 13:
                                             return w(t), o();
                                            case 27:
                                             w(t), e.caret.restore(), (e.editLinkUrl && "https://" !== e.editLinkUrl) || document.execCommand("unlink"), (e.editLinkUrl = null);
                                           }
                                         },
                                        },
                                       }),
                                       Ms(t, [
                                        t(ye, {
                                         key: "qedt_btm_rem",
                                         attrs: {tabindex: -1},
                                         props: Object.assign({}, e.buttonProps, {label: e.$q.lang.label.remove, noCaps: !0}),
                                         on: {
                                          click: function () {
                                           e.caret.restore(), document.execCommand("unlink"), (e.editLinkUrl = null), !0 === i && e.$nextTick(e.__onInput);
                                          },
                                         },
                                        }),
                                        t(ye, {key: "qedt_btm_upd", props: Object.assign({}, e.buttonProps, {label: e.$q.lang.label.update, noCaps: !0}), on: {click: o}}),
                                       ]),
                                      ];
                                     }
                                    })(t, this, this.$q.platform.is.ie)
                                    )
                            ),
                    (e = t("div", {key: "toolbar_ctainer", staticClass: "q-editor__toolbars-container"}, n));
           }
           var s = Object.assign({}, this.qListeners, {
            input: this.__onInput,
            keydown: this.__onKeydown,
            click: this.__onClick,
            blur: this.__onBlur,
            focus: this.__onFocus,
            mousedown: this.__onMousedown,
            touchstart: this.__onTouchstart,
            mouseup: this.__onMouseup,
            keyup: this.__onKeyup,
            touchend: this.__onTouchend,
           });
           return t("div", {style: {height: !0 === this.inFullscreen ? "100vh" : null}, class: this.classes, attrs: this.attrs, on: this.onEditor}, [
            e,
            t("div", {
             ref: "content",
             staticClass: "q-editor__content",
             style: this.innerStyle,
             class: this.innerClass,
             attrs: {contenteditable: this.editable, placeholder: this.placeholder},
             domProps: i ? {innerHTML: this.value} : void 0,
             on: s,
            }),
           ]);
          },
         }),
         Ns = t.extend({
          name: "QItemLabel",
          mixins: [Lt],
          props: {overline: Boolean, caption: Boolean, header: Boolean, lines: [Number, String]},
          computed: {
           classes: function () {
            return {"q-item__label--overline text-overline": this.overline, "q-item__label--caption text-caption": this.caption, "q-item__label--header": this.header, ellipsis: 1 === parseInt(this.lines, 10)};
           },
           style: function () {
            if (void 0 !== this.lines && parseInt(this.lines, 10) > 1)
             return {overflow: "hidden", display: "-webkit-box", "-webkit-box-orient": "vertical", "-webkit-line-clamp": this.lines};
           },
          },
          render: function (t) {
           return t("div", {staticClass: "q-item__label", style: this.style, class: this.classes, on: Object.assign({}, this.qListeners)}, Ot(this, "default"));
          },
         }),
         Hs = t.extend({
          name: "QSlideTransition",
          props: {appear: Boolean, duration: {type: Number, default: 300}},
          methods: {
           __begin: function (t, e, i) {
            (t.style.overflowY = "hidden"), void 0 !== e && (t.style.height = e + "px"), (t.style.transition = "height " + this.duration + "ms cubic-bezier(.25, .8, .50, 1)"), (this.animating = !0), (this.done = i);
           },
           __end: function (t, e) {
            (t.style.overflowY = null), (t.style.height = null), (t.style.transition = null), this.__cleanup(), e !== this.lastEvent && this.$emit(e);
           },
           __cleanup: function () {
            this.done && this.done(),
                    (this.done = null),
                    (this.animating = !1),
                    clearTimeout(this.timer),
                    clearTimeout(this.timerFallback),
                    void 0 !== this.el && this.el.removeEventListener("transitionend", this.animListener),
                    (this.animListener = null);
           },
          },
          beforeDestroy: function () {
           this.animating && this.__cleanup();
          },
          render: function (t) {
           var e = this;
           return t(
                   "transition",
                   {
                    props: {css: !1, appear: this.appear},
                    on: mt(this, "tr", {
                     enter: function (t, i) {
                      var n = 0;
                      (e.el = t),
                              !0 === e.animating ? (e.__cleanup(), (n = t.offsetHeight === t.scrollHeight ? 0 : void 0)) : (e.lastEvent = "hide"),
                              e.__begin(t, n, i),
                              (e.timer = setTimeout(function () {
                               (t.style.height = t.scrollHeight + "px"),
                                       (e.animListener = function (i) {
                                        (Object(i) === i && i.target !== t) || e.__end(t, "show");
                                       }),
                                       t.addEventListener("transitionend", e.animListener),
                                       (e.timerFallback = setTimeout(e.animListener, 1.1 * e.duration));
                              }, 100));
                     },
                     leave: function (t, i) {
                      var n;
                      (e.el = t),
                              !0 === e.animating ? e.__cleanup() : ((e.lastEvent = "show"), (n = t.scrollHeight)),
                              e.__begin(t, n, i),
                              (e.timer = setTimeout(function () {
                               (t.style.height = 0),
                                       (e.animListener = function (i) {
                                        (Object(i) === i && i.target !== t) || e.__end(t, "hide");
                                       }),
                                       t.addEventListener("transitionend", e.animListener),
                                       (e.timerFallback = setTimeout(e.animListener, 1.1 * e.duration));
                              }, 100));
                     },
                    }),
                   },
                   Ot(this, "default")
                   );
          },
         }),
         Qs = {true: "inset", item: "item-inset", "item-thumbnail": "item-thumbnail-inset"},
         Ws = {xs: 2, sm: 4, md: 8, lg: 16, xl: 24},
         Ys = t.extend({
          name: "QSeparator",
          mixins: [It, Lt],
          props: {spaced: [Boolean, String], inset: [Boolean, String], vertical: Boolean, color: String, size: String},
          computed: {
           orientation: function () {
            return !0 === this.vertical ? "vertical" : "horizontal";
           },
           classPrefix: function () {
            return " q-separator--" + this.orientation;
           },
           insetClass: function () {
            return !1 !== this.inset ? this.classPrefix + "-" + Qs[this.inset] : "";
           },
           classes: function () {
            return "q-separator" + this.classPrefix + this.insetClass + (void 0 !== this.color ? " bg-" + this.color : "") + (!0 === this.isDark ? " q-separator--dark" : "");
           },
           style: function () {
            var t = {};
            if ((void 0 !== this.size && (t[!0 === this.vertical ? "width" : "height"] = this.size), !1 !== this.spaced)) {
             var e = !0 === this.spaced ? Ws.md + "px" : (this.spaced in Ws) ? Ws[this.spaced] + "px" : this.spaced,
                     i = !0 === this.vertical ? ["Left", "Right"] : ["Top", "Bottom"];
             t["margin" + i[0]] = t["margin" + i[1]] = e;
            }
            return t;
           },
           attrs: function () {
            return {role: "separator", "aria-orientation": this.orientation};
           },
          },
          render: function (t) {
           return t("hr", {staticClass: "q-separator", class: this.classes, style: this.style, attrs: this.attrs, on: Object.assign({}, this.qListeners)});
          },
         }),
         Us = "q:expansion-item:close",
         Ks = t.extend({
          name: "QExpansionItem",
          mixins: [It, Yt, ke],
          props: {
           icon: String,
           label: String,
           labelLines: [Number, String],
           caption: String,
           captionLines: [Number, String],
           dense: Boolean,
           expandIcon: String,
           expandedIcon: String,
           expandIconClass: [Array, String, Object],
           duration: Number,
           headerInsetLevel: Number,
           contentInsetLevel: Number,
           expandSeparator: Boolean,
           defaultOpened: Boolean,
           expandIconToggle: Boolean,
           switchToggleSide: Boolean,
           denseToggle: Boolean,
           group: String,
           popup: Boolean,
           headerStyle: [Array, String, Object],
           headerClass: [Array, String, Object],
          },
          data: function () {
           return {showing: void 0 !== this.value ? this.value : this.defaultOpened};
          },
          watch: {
           showing: function (t) {
            !0 === t && void 0 !== this.group && this.$root.$emit(Us, this);
           },
           group: function (t, e) {
            void 0 !== t && void 0 === e ? this.$root.$on(Us, this.__eventHandler) : void 0 === t && void 0 !== e && this.$root.$off(Us, this.__eventHandler);
           },
          },
          computed: {
           classes: function () {
            return "q-expansion-item--" + (!0 === this.showing ? "expanded" : "collapsed") + " q-expansion-item--" + (!0 === this.popup ? "popup" : "standard");
           },
           contentStyle: function () {
            var t;
            if (void 0 !== this.contentInsetLevel)
             return ((t = {})["padding" + (!0 === this.$q.lang.rtl ? "Right" : "Left")] = 56 * this.contentInsetLevel + "px"), t;
           },
           isClickable: function () {
            return !0 === this.hasRouterLink || !0 !== this.expandIconToggle;
           },
           expansionIcon: function () {
            return void 0 !== this.expandedIcon && !0 === this.showing ? this.expandedIcon : this.expandIcon || this.$q.iconSet.expansionItem[!0 === this.denseToggle ? "denseIcon" : "icon"];
           },
           activeToggleIcon: function () {
            return !0 !== this.disable && (!0 === this.hasRouterLink || !0 === this.expandIconToggle);
           },
          },
          methods: {
           __onHeaderClick: function (t) {
            !0 !== this.hasRouterLink && this.toggle(t), this.$emit("click", t);
           },
           __toggleIconKeyboard: function (t) {
            13 === t.keyCode && this.__toggleIcon(t, !0);
           },
           __toggleIcon: function (t, e) {
            !0 !== e && void 0 !== this.$refs.blurTarget && this.$refs.blurTarget.focus(), this.toggle(t), S(t);
           },
           __eventHandler: function (t) {
            this !== t && this.group === t.group && this.hide();
           },
           __getToggleIcon: function (t) {
            var e = {
             staticClass: "q-focusable relative-position cursor-pointer" + (!0 === this.denseToggle && !0 === this.switchToggleSide ? " items-end" : ""),
             class: this.expandIconClass,
             props: {side: !0 !== this.switchToggleSide, avatar: this.switchToggleSide},
            },
                    i = [t(zt, {staticClass: "q-expansion-item__toggle-icon", class: void 0 === this.expandedIcon && !0 === this.showing ? "q-expansion-item__toggle-icon--rotated" : void 0, props: {name: this.expansionIcon}})];
            return (
                    !0 === this.activeToggleIcon &&
                    (Object.assign(e, {attrs: {tabindex: 0}, on: mt(this, "inpExt", {click: this.__toggleIcon, keyup: this.__toggleIconKeyboard})}),
                            i.unshift(t("div", {ref: "blurTarget", staticClass: "q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded", attrs: {tabindex: -1}}))),
                    t(qs, e, i)
                    );
           },
           __getHeader: function (t) {
            var e;
            void 0 !== this.$scopedSlots.header
                    ? (e = this.$scopedSlots.header().slice())
                    : ((e = [t(qs, [t(Ns, {props: {lines: this.labelLines}}, [this.label || ""]), this.caption ? t(Ns, {props: {lines: this.captionLines, caption: !0}}, [this.caption]) : null])]),
                            this.icon && e[!0 === this.switchToggleSide ? "push" : "unshift"](t(qs, {props: {side: !0 === this.switchToggleSide, avatar: !0 !== this.switchToggleSide}}, [t(zt, {props: {name: this.icon}})]))),
                    !0 !== this.disable && e[!0 === this.switchToggleSide ? "unshift" : "push"](this.__getToggleIcon(t));
            var i = {ref: "item", style: this.headerStyle, class: this.headerClass, props: {dark: this.isDark, disable: this.disable, dense: this.dense, insetLevel: this.headerInsetLevel}};
            if (!0 === this.isClickable) {
             var n = !0 === this.hasRouterLink ? "nativeOn" : "on";
             (i.props.clickable = !0), (i[n] = Object.assign({}, this.qListeners, {click: this.__onHeaderClick})), !0 === this.hasRouterLink && Object.assign(i.props, this.routerLinkProps);
            }
            return t(ks, i, e);
           },
           __getContent: function (t) {
            var e = this,
                    i = [
                     this.__getHeader(t),
                     t(
                             Hs,
                             {
                              props: {duration: this.duration},
                              on: mt(this, "slide", {
                               show: function () {
                                e.$emit("after-show");
                               },
                               hide: function () {
                                e.$emit("after-hide");
                               },
                              }),
                             },
                             [t("div", {staticClass: "q-expansion-item__content relative-position", style: this.contentStyle, directives: [{name: "show", value: this.showing}]}, Ot(this, "default"))]
                             ),
                    ];
            return (
                    this.expandSeparator &&
                    i.push(
                            t(Ys, {staticClass: "q-expansion-item__border q-expansion-item__border--top absolute-top", props: {dark: this.isDark}}),
                            t(Ys, {staticClass: "q-expansion-item__border q-expansion-item__border--bottom absolute-bottom", props: {dark: this.isDark}})
                            ),
                    i
                    );
           },
          },
          render: function (t) {
           return t("div", {staticClass: "q-expansion-item q-item-type", class: this.classes}, [t("div", {staticClass: "q-expansion-item__container relative-position"}, this.__getContent(t))]);
          },
          created: function () {
           void 0 !== this.group && this.$root.$on(Us, this.__eventHandler);
          },
          beforeDestroy: function () {
           void 0 !== this.group && this.$root.$off(Us, this.__eventHandler);
          },
         }),
         Xs = ["top", "right", "bottom", "left"],
         Gs = {
          mixins: [Lt],
          props: {
           type: {type: String, default: "a"},
           outline: Boolean,
           push: Boolean,
           flat: Boolean,
           unelevated: Boolean,
           color: String,
           textColor: String,
           glossy: Boolean,
           square: Boolean,
           padding: String,
           label: {type: [String, Number], default: ""},
           labelPosition: {
            type: String,
            default: "right",
            validator: function (t) {
             return Xs.includes(t);
            },
           },
           externalLabel: Boolean,
           hideLabel: {type: Boolean},
           labelClass: [Array, String, Object],
           labelStyle: [Array, String, Object],
           disable: Boolean,
           tabindex: [Number, String],
          },
          computed: {
           formClass: function () {
            return "q-fab--form-" + (!0 === this.square ? "square" : "rounded");
           },
           stacked: function () {
            return !1 === this.externalLabel && ["top", "bottom"].includes(this.labelPosition);
           },
           labelProps: function () {
            if (!0 === this.externalLabel) {
             var t = null === this.hideLabel ? !1 === this.showing : this.hideLabel;
             return {
              action: "push",
              data: {
               staticClass: "q-fab__label q-tooltip--style q-fab__label--external q-fab__label--external-" + this.labelPosition + (!0 === t ? " q-fab__label--external-hidden" : ""),
               style: this.labelStyle,
               class: this.labelClass,
              },
             };
            }
            return {
             action: ["left", "top"].includes(this.labelPosition) ? "unshift" : "push",
             data: {
              staticClass: "q-fab__label q-fab__label--internal q-fab__label--internal-" + this.labelPosition + (!0 === this.hideLabel ? " q-fab__label--internal-hidden" : ""),
              style: this.labelStyle,
              class: this.labelClass,
             },
            };
           },
          },
         },
         Zs = ["up", "right", "down", "left"],
         Js = ["left", "center", "right"],
         to = t.extend({
          name: "QFab",
          inheritAttrs: !1,
          mixins: [Gs, bt, ke],
          provide: function () {
           return {__qFab: this};
          },
          props: {
           icon: String,
           activeIcon: String,
           hideIcon: Boolean,
           hideLabel: {default: null},
           direction: {
            type: String,
            default: "right",
            validator: function (t) {
             return Zs.includes(t);
            },
           },
           persistent: Boolean,
           verticalActionsAlign: {
            type: String,
            default: "center",
            validator: function (t) {
             return Js.includes(t);
            },
           },
          },
          data: function () {
           return {showing: !0 === this.value};
          },
          computed: {
           hideOnRouteChange: function () {
            return !0 !== this.persistent;
           },
           classes: function () {
            return "q-fab--align-" + this.verticalActionsAlign + " " + this.formClass + (!0 === this.showing ? " q-fab--opened" : "");
           },
           attrs: function () {
            return Object.assign({}, {"aria-expanded": !0 === this.showing ? "true" : "false", "aria-haspopup": "true"}, this.qAttrs);
           },
          },
          methods: {
           __onChildClick: function (t) {
            this.hide(t), this.$refs.trigger && this.$refs.trigger.$el && this.$refs.trigger.$el.focus();
           },
          },
          render: function (t) {
           var e = [];
           return (
                   !0 !== this.hideIcon &&
                   e.push(
                           t("div", {staticClass: "q-fab__icon-holder"}, [
                            t(zt, {staticClass: "q-fab__icon absolute-full", props: {name: this.icon || this.$q.iconSet.fab.icon}}),
                            t(zt, {staticClass: "q-fab__active-icon absolute-full", props: {name: this.activeIcon || this.$q.iconSet.fab.activeIcon}}),
                           ])
                           ),
                   "" !== this.label && e[this.labelProps.action](t("div", this.labelProps.data, [this.label])),
                   t("div", {staticClass: "q-fab z-fab row inline justify-center", class: this.classes, on: Object.assign({}, this.qListeners)}, [
                    t(
                            ye,
                            {
                             ref: "trigger",
                             class: this.formClass,
                             props: Object.assign({}, this.$props, {noWrap: !0, stack: this.stacked, align: void 0, icon: void 0, label: void 0, noCaps: !0, fab: !0}),
                             attrs: this.attrs,
                             on: mt(this, "tog", {click: this.toggle}),
                            },
                            Et(e, this, "tooltip")
                            ),
                    t("div", {staticClass: "q-fab__actions flex no-wrap inline", class: "q-fab__actions--" + this.direction}, Ot(this, "default")),
                   ])
                   );
          },
         }),
         eo = {start: "self-end", center: "self-center", end: "self-start"},
         io = Object.keys(eo),
         no = t.extend({
          name: "QFabAction",
          mixins: [Gs],
          props: {
           icon: {type: String, default: ""},
           anchor: {
            type: String,
            validator: function (t) {
             return io.includes(t);
            },
           },
           to: [String, Object],
           replace: Boolean,
          },
          inject: {
           __qFab: {
            default: function () {
             return {showing: !0, __onChildClick: f};
            },
           },
          },
          computed: {
           classes: function () {
            var t = eo[this.anchor];
            return this.formClass + (void 0 !== t ? " " + t : "");
           },
           onEvents: function () {
            return Object.assign({}, this.qListeners, {click: this.click});
           },
           isDisabled: function () {
            return !0 !== this.__qFab.showing || !0 === this.disable;
           },
          },
          methods: {
           click: function (t) {
            this.__qFab.__onChildClick(t), this.$emit("click", t);
           },
          },
          render: function (t) {
           var e = [];
           return (
                   "" !== this.icon && e.push(t(zt, {props: {name: this.icon}})),
                   "" !== this.label && e[this.labelProps.action](t("div", this.labelProps.data, [this.label])),
                   t(
                           ye,
                           {class: this.classes, props: Object.assign({}, this.$props, {noWrap: !0, stack: this.stacked, icon: void 0, label: void 0, noCaps: !0, fabMini: !0, disable: this.isDisabled}), on: this.onEvents},
                           Et(e, this, "default")
                           )
                   );
          },
         }),
         so = [!0, !1, "ondemand"],
         oo = {
          props: {
           value: {},
           error: {type: Boolean, default: null},
           errorMessage: String,
           noErrorIcon: Boolean,
           rules: Array,
           reactiveRules: Boolean,
           lazyRules: {
            type: [Boolean, String],
            validator: function (t) {
             return so.includes(t);
            },
           },
          },
          data: function () {
           return {isDirty: null, innerError: !1, innerErrorMessage: void 0};
          },
          watch: {
           value: function () {
            this.__validateIfNeeded();
           },
           disable: function (t) {
            !0 === t && this.resetValidation();
           },
           reactiveRules: {
            handler: function (t) {
             var e = this;
             !0 === t
                     ? void 0 === this.unwatchRules &&
                     (this.unwatchRules = this.$watch("rules", function () {
                      e.__validateIfNeeded(!0);
                     }))
                     : void 0 !== this.unwatchRules && (this.unwatchRules(), (this.unwatchRules = void 0));
            },
            immediate: !0,
           },
           focused: function (t) {
            "ondemand" !== this.lazyRules && (!0 === t ? null === this.isDirty && (this.isDirty = !1) : !1 === this.isDirty && !0 === this.hasRules && ((this.isDirty = !0), this.validate()));
           },
          },
          computed: {
           hasRules: function () {
            return void 0 !== this.rules && null !== this.rules && this.rules.length > 0;
           },
           hasError: function () {
            return !0 === this.error || !0 === this.innerError;
           },
           computedErrorMessage: function () {
            return "string" == typeof this.errorMessage && this.errorMessage.length > 0 ? this.errorMessage : this.innerErrorMessage;
           },
          },
          mounted: function () {
           this.validateIndex = 0;
          },
          beforeDestroy: function () {
           void 0 !== this.unwatchRules && this.unwatchRules();
          },
          methods: {
           resetValidation: function () {
            this.validateIndex++, (this.innerLoading = !1), (this.isDirty = null), (this.innerError = !1), (this.innerErrorMessage = void 0);
           },
           validate: function (t) {
            var e = this;
            if ((void 0 === t && (t = this.value), !0 !== this.hasRules))
             return !0;
            this.validateIndex++, !0 !== this.innerLoading && !0 !== this.lazyRules && (this.isDirty = !0);
            for (
                    var i = function (t, i) {
                     e.innerError !== t && (e.innerError = t);
                     var n = i || void 0;
                     e.innerErrorMessage !== n && (e.innerErrorMessage = n), !1 !== e.innerLoading && (e.innerLoading = !1);
                    },
                    n = [],
                    s = 0;
                    s < this.rules.length;
                    s++
                    ) {
             var o = this.rules[s],
                     r = void 0;
             if (("function" == typeof o ? (r = o(t)) : "string" == typeof o && void 0 !== Qi[o] && (r = Qi[o](t)), !1 === r || "string" == typeof r))
              return i(!0, r), !1;
             !0 !== r && void 0 !== r && n.push(r);
            }
            if (0 === n.length)
             return i(!1), !0;
            !0 !== this.innerLoading && (this.innerLoading = !0);
            var a = this.validateIndex;
            return Promise.all(n).then(
                    function (t) {
                     if (a !== e.validateIndex)
                      return !0;
                     if (void 0 === t || !1 === Array.isArray(t) || 0 === t.length)
                      return i(!1), !0;
                     var n = t.find(function (t) {
                      return !1 === t || "string" == typeof t;
                     });
                     return i(void 0 !== n, n), void 0 === n;
                    },
                    function (t) {
                     return a !== e.validateIndex || (console.error(t), i(!0), !1);
                    }
            );
           },
           __validateIfNeeded: function (t) {
            !0 === this.hasRules && "ondemand" !== this.lazyRules && (!0 === this.isDirty || (!0 !== this.lazyRules && !0 !== t)) && this.validate();
           },
          },
         },
         ro = 0,
         ao = new Array(256),
         lo = 0;
         lo < 256;
         lo++
         )
  ao[lo] = (lo + 256).toString(16).substr(1);
 var co = (function () {
  var t = "undefined" != typeof crypto ? crypto : "undefined" != typeof window ? window.msCrypto : void 0;
  if (void 0 !== t) {
   if (void 0 !== t.randomBytes)
    return t.randomBytes;
   if (void 0 !== t.getRandomValues)
    return function (e) {
     var i = new Uint8Array(e);
     return t.getRandomValues(i), i;
    };
  }
  return function (t) {
   for (var e = [], i = t; i > 0; i--)
    e.push(Math.floor(256 * Math.random()));
   return e;
  };
 })(),
         uo = 4096;
 function ho() {
  (void 0 === js || ro + 16 > uo) && ((ro = 0), (js = co(uo)));
  var t = Array.prototype.slice.call(js, ro, (ro += 16));
  return (
          (t[6] = (15 & t[6]) | 64),
          (t[8] = (63 & t[8]) | 128),
          ao[t[0]] + ao[t[1]] + ao[t[2]] + ao[t[3]] + "-" + ao[t[4]] + ao[t[5]] + "-" + ao[t[6]] + ao[t[7]] + "-" + ao[t[8]] + ao[t[9]] + "-" + ao[t[10]] + ao[t[11]] + ao[t[12]] + ao[t[13]] + ao[t[14]] + ao[t[15]]
          );
 }
 function po(t) {
  return void 0 === t ? "f_" + ho() : t;
 }
 var fo = t.extend({
  name: "QField",
  mixins: [It, oo, bt],
  inheritAttrs: !1,
  props: {
   label: String,
   stackLabel: Boolean,
   hint: String,
   hideHint: Boolean,
   prefix: String,
   suffix: String,
   labelColor: String,
   color: String,
   bgColor: String,
   filled: Boolean,
   outlined: Boolean,
   borderless: Boolean,
   standout: [Boolean, String],
   square: Boolean,
   loading: Boolean,
   labelSlot: Boolean,
   bottomSlots: Boolean,
   hideBottomSpace: Boolean,
   rounded: Boolean,
   dense: Boolean,
   itemAligned: Boolean,
   counter: Boolean,
   clearable: Boolean,
   clearIcon: String,
   disable: Boolean,
   readonly: Boolean,
   autofocus: Boolean,
   for : String,
   maxlength: [Number, String],
   maxValues: [Number, String],
  },
  data: function () {
   return {focused: !1, targetUid: po(this.for), innerLoading: !1};
  },
  watch: {
   for : function (t) {
    this.targetUid = po(t);
   },
  },
  computed: {
   editable: function () {
    return !0 !== this.disable && !0 !== this.readonly;
   },
   hasValue: function () {
    var t = void 0 === this.__getControl ? this.value : this.innerValue;
    return void 0 !== t && null !== t && ("" + t).length > 0;
   },
   computedCounter: function () {
    if (!1 !== this.counter) {
     var t = "string" == typeof this.value || "number" == typeof this.value ? ("" + this.value).length : !0 === Array.isArray(this.value) ? this.value.length : 0,
             e = void 0 !== this.maxlength ? this.maxlength : this.maxValues;
     return t + (void 0 !== e ? " / " + e : "");
    }
   },
   floatingLabel: function () {
    return (
            !0 === this.stackLabel ||
            !0 === this.focused ||
            (void 0 !== this.inputValue && !0 === this.hideSelected ? this.inputValue.length > 0 : !0 === this.hasValue) ||
            (void 0 !== this.displayValue && null !== this.displayValue && ("" + this.displayValue).length > 0)
            );
   },
   shouldRenderBottom: function () {
    return !0 === this.bottomSlots || void 0 !== this.hint || !0 === this.hasRules || !0 === this.counter || null !== this.error;
   },
   classes: function () {
    var t;
    return (
            ((t = {})[this.fieldClass] = void 0 !== this.fieldClass),
            (t["q-field--" + this.styleType] = !0),
            (t["q-field--rounded"] = this.rounded),
            (t["q-field--square"] = this.square),
            (t["q-field--focused"] = !0 === this.focused),
            (t["q-field--highlighted"] = !0 === this.focused || !0 === this.hasError),
            (t["q-field--float"] = this.floatingLabel),
            (t["q-field--labeled"] = this.hasLabel),
            (t["q-field--dense"] = this.dense),
            (t["q-field--item-aligned q-item-type"] = this.itemAligned),
            (t["q-field--dark"] = this.isDark),
            (t["q-field--auto-height"] = void 0 === this.__getControl),
            (t["q-field--with-bottom"] = !0 !== this.hideBottomSpace && !0 === this.shouldRenderBottom),
            (t["q-field--error"] = this.hasError),
            (t["q-field--readonly"] = !0 === this.readonly && !0 !== this.disable),
            (t[!0 === this.disable ? "q-field--disabled" : "q-validation-component"] = !0),
            t
            );
   },
   styleType: function () {
    return !0 === this.filled ? "filled" : !0 === this.outlined ? "outlined" : !0 === this.borderless ? "borderless" : this.standout ? "standout" : "standard";
   },
   contentClass: function () {
    var t = [];
    if (!0 === this.hasError)
     t.push("text-negative");
    else {
     if ("string" == typeof this.standout && this.standout.length > 0 && !0 === this.focused)
      return this.standout;
     void 0 !== this.color && t.push("text-" + this.color);
    }
    return void 0 !== this.bgColor && t.push("bg-" + this.bgColor), t;
   },
   hasLabel: function () {
    return !0 === this.labelSlot || void 0 !== this.label;
   },
   labelClass: function () {
    if (void 0 !== this.labelColor && !0 !== this.hasError)
     return "text-" + this.labelColor;
   },
   controlSlotScope: function () {
    return {id: this.targetUid, field: this.$el, editable: this.editable, focused: this.focused, floatingLabel: this.floatingLabel, value: this.value, emitValue: this.__emitValue};
   },
   attrs: function () {
    var t = {for : this.targetUid};
    return !0 === this.disable ? (t["aria-disabled"] = "true") : !0 === this.readonly && (t["aria-readonly"] = "true"), t;
   },
  },
  methods: {
   focus: function () {
    void 0 === this.showPopup ? this.__focus() : this.showPopup();
   },
   blur: function () {
    var t = document.activeElement;
    null !== t && this.$el.contains(t) && t.blur();
   },
   __focus: function () {
    var t = document.activeElement,
            e = this.$refs.target;
    void 0 === e || (null !== t && t.id === this.targetUid) || (!0 === e.hasAttribute("tabindex") || (e = e.querySelector("[tabindex]")), null !== e && e !== t && e.focus());
   },
   __getContent: function (t) {
    var e = [];
    return (
            void 0 !== this.$scopedSlots.prepend && e.push(t("div", {staticClass: "q-field__prepend q-field__marginal row no-wrap items-center", key: "prepend", on: this.slotsEvents}, this.$scopedSlots.prepend())),
            e.push(t("div", {staticClass: "q-field__control-container col relative-position row no-wrap q-anchor--skip"}, this.__getControlContainer(t))),
            void 0 !== this.$scopedSlots.append && e.push(t("div", {staticClass: "q-field__append q-field__marginal row no-wrap items-center", key: "append", on: this.slotsEvents}, this.$scopedSlots.append())),
            !0 === this.hasError && !1 === this.noErrorIcon && e.push(this.__getInnerAppendNode(t, "error", [t(zt, {props: {name: this.$q.iconSet.field.error, color: "negative"}})])),
            !0 === this.loading || !0 === this.innerLoading
            ? e.push(this.__getInnerAppendNode(t, "inner-loading-append", void 0 !== this.$scopedSlots.loading ? this.$scopedSlots.loading() : [t(Xt, {props: {color: this.color}})]))
            : !0 === this.clearable &&
            !0 === this.hasValue &&
            !0 === this.editable &&
            e.push(
                    this.__getInnerAppendNode(t, "inner-clearable-append", [
                     t(zt, {staticClass: "q-field__focusable-action", props: {tag: "button", name: this.clearIcon || this.$q.iconSet.field.clear}, attrs: {tabindex: 0, type: "button"}, on: this.clearableEvents}),
                    ])
                    ),
            void 0 !== this.__getInnerAppend && e.push(this.__getInnerAppendNode(t, "inner-append", this.__getInnerAppend(t))),
            void 0 !== this.__getControlChild && e.push(this.__getControlChild(t)),
            e
            );
   },
   __getControlContainer: function (t) {
    var e = [];
    return (
            void 0 !== this.prefix && null !== this.prefix && e.push(t("div", {staticClass: "q-field__prefix no-pointer-events row items-center"}, [this.prefix])),
            !0 === this.hasShadow && void 0 !== this.__getShadowControl && e.push(this.__getShadowControl(t)),
            void 0 !== this.__getControl
            ? e.push(this.__getControl(t))
            : void 0 !== this.$scopedSlots.rawControl
            ? e.push(this.$scopedSlots.rawControl())
            : void 0 !== this.$scopedSlots.control &&
            e.push(t("div", {ref: "target", staticClass: "q-field__native row", attrs: Object.assign({}, this.qAttrs, {"data-autofocus": this.autofocus})}, this.$scopedSlots.control(this.controlSlotScope))),
            !0 === this.hasLabel && e.push(t("div", {staticClass: "q-field__label no-pointer-events absolute ellipsis", class: this.labelClass}, [Ot(this, "label", this.label)])),
            void 0 !== this.suffix && null !== this.suffix && e.push(t("div", {staticClass: "q-field__suffix no-pointer-events row items-center"}, [this.suffix])),
            e.concat(void 0 !== this.__getDefaultSlot ? this.__getDefaultSlot(t) : Ot(this, "default"))
            );
   },
   __getBottom: function (t) {
    var e, i;
    !0 === this.hasError
            ? void 0 !== this.computedErrorMessage
            ? ((e = [t("div", [this.computedErrorMessage])]), (i = this.computedErrorMessage))
            : ((e = Ot(this, "error")), (i = "q--slot-error"))
            : (!0 === this.hideHint && !0 !== this.focused) || (void 0 !== this.hint ? ((e = [t("div", [this.hint])]), (i = this.hint)) : ((e = Ot(this, "hint")), (i = "q--slot-hint")));
    var n = !0 === this.counter || void 0 !== this.$scopedSlots.counter;
    if (!0 !== this.hideBottomSpace || !1 !== n || void 0 !== e) {
     var s = t("div", {key: i, staticClass: "q-field__messages col"}, e);
     return t("div", {staticClass: "q-field__bottom row items-start q-field__bottom--" + (!0 !== this.hideBottomSpace ? "animated" : "stale")}, [
      !0 === this.hideBottomSpace ? s : t("transition", {props: {name: "q-transition--field-message"}}, [s]),
      !0 === n ? t("div", {staticClass: "q-field__counter"}, void 0 !== this.$scopedSlots.counter ? this.$scopedSlots.counter() : [this.computedCounter]) : null,
     ]);
    }
   },
   __getInnerAppendNode: function (t, e, i) {
    return null === i ? null : t("div", {staticClass: "q-field__append q-field__marginal row no-wrap items-center q-anchor--skip", key: e}, i);
   },
   __onControlPopupShow: function (t) {
    void 0 !== t && y(t), this.$emit("popup-show", t), (this.hasPopupOpen = !0), this.__onControlFocusin(t);
   },
   __onControlPopupHide: function (t) {
    void 0 !== t && y(t), this.$emit("popup-hide", t), (this.hasPopupOpen = !1), this.__onControlFocusout(t);
   },
   __onControlFocusin: function (t) {
    !0 === this.editable && !1 === this.focused && ((this.focused = !0), this.$emit("focus", t));
   },
   __onControlFocusout: function (t, e) {
    var i = this;
    clearTimeout(this.focusoutTimer),
            (this.focusoutTimer = setTimeout(function () {
             (!0 !== document.hasFocus() || (!0 !== i.hasPopupOpen && void 0 !== i.$refs && void 0 !== i.$refs.control && !1 === i.$refs.control.contains(document.activeElement))) &&
                     (!0 === i.focused && ((i.focused = !1), i.$emit("blur", t)), void 0 !== e && e());
            }));
   },
   __clearValue: function (t) {
    var e = this;
    (S(t), !0 !== this.$q.platform.is.mobile) ? (this.$refs.target || this.$el).focus() : !0 === this.$el.contains(document.activeElement) && document.activeElement.blur();
    "file" === this.type && (this.$refs.input.value = null),
            this.$emit("input", null),
            this.$emit("clear", this.value),
            this.$nextTick(function () {
             e.resetValidation(), "ondemand" !== e.lazyRules && !0 !== e.$q.platform.is.mobile && (e.isDirty = !1);
            });
   },
   __emitValue: function (t) {
    this.$emit("input", t);
   },
  },
  render: function (t) {
   return (
           void 0 !== this.__onPreRender && this.__onPreRender(),
           void 0 !== this.__onPostRender && this.$nextTick(this.__onPostRender),
           t("label", {staticClass: "q-field row no-wrap items-start", class: this.classes, attrs: this.attrs}, [
            void 0 !== this.$scopedSlots.before ? t("div", {staticClass: "q-field__before q-field__marginal row no-wrap items-center", on: this.slotsEvents}, this.$scopedSlots.before()) : null,
            t("div", {staticClass: "q-field__inner relative-position col self-stretch"}, [
             t("div", {ref: "control", staticClass: "q-field__control relative-position row no-wrap", class: this.contentClass, attrs: {tabindex: -1}, on: this.controlEvents}, this.__getContent(t)),
             !0 === this.shouldRenderBottom ? this.__getBottom(t) : null,
            ]),
            void 0 !== this.$scopedSlots.after ? t("div", {staticClass: "q-field__after q-field__marginal row no-wrap items-center", on: this.slotsEvents}, this.$scopedSlots.after()) : null,
           ])
           );
  },
  created: function () {
   void 0 !== this.__onPreRender && this.__onPreRender(),
           (this.slotsEvents = {click: w}),
           (this.clearableEvents = {click: this.__clearValue}),
           (this.controlEvents =
                   void 0 !== this.__getControlEvents
                   ? this.__getControlEvents()
                   : {focusin: this.__onControlFocusin, focusout: this.__onControlFocusout, "popup-show": this.__onControlPopupShow, "popup-hide": this.__onControlPopupHide});
  },
  mounted: function () {
   !0 === n && void 0 === this.for && (this.targetUid = po()), !0 === this.autofocus && this.focus();
  },
  beforeDestroy: function () {
   clearTimeout(this.focusoutTimer);
  },
 });
 function mo(t, e, i, n) {
  var s = [];
  return (
          t.forEach(function (t) {
           !0 === n(t) ? s.push(t) : e.push({failedPropValidation: i, file: t});
          }),
          s
          );
 }
 function vo(t) {
  t && t.dataTransfer && (t.dataTransfer.dropEffect = "copy"), S(t);
 }
 var go = {
  props: {multiple: Boolean, accept: String, capture: String, maxFileSize: [Number, String], maxTotalSize: [Number, String], maxFiles: [Number, String], filter: Function},
  computed: {
   extensions: function () {
    if (void 0 !== this.accept)
     return this.accept.split(",").map(function (t) {
      return "*" === (t = t.trim()) ? "*/" : (t.endsWith("/*") && (t = t.slice(0, t.length - 1)), t.toUpperCase());
     });
   },
   maxFilesNumber: function () {
    return parseInt(this.maxFiles, 10);
   },
   maxTotalSizeNumber: function () {
    return parseInt(this.maxTotalSize, 10);
   },
  },
  methods: {
   pickFiles: function (t) {
    if (this.editable) {
     var e = this.__getFileInput();
     e && e.click(t);
    }
   },
   addFiles: function (t) {
    this.editable && t && this.__addFiles(null, t);
   },
   __processFiles: function (t, e, i, n) {
    var s = this,
            o = Array.from(e || t.target.files),
            r = [],
            a = function () {
             r.length > 0 && s.$emit("rejected", r);
            };
    if (
            void 0 !== this.accept &&
            -1 === this.extensions.indexOf("*/") &&
            0 ===
            (o = mo(o, r, "accept", function (t) {
             return s.extensions.some(function (e) {
              return t.type.toUpperCase().startsWith(e) || t.name.toUpperCase().endsWith(e);
             });
            })).length
            )
     return a();
    if (void 0 !== this.maxFileSize) {
     var l = parseInt(this.maxFileSize, 10);
     if (
             0 ===
             (o = mo(o, r, "max-file-size", function (t) {
              return t.size <= l;
             })).length
             )
      return a();
    }
    if ((!0 !== this.multiple && (o = [o[0]]), void 0 !== this.maxTotalSize)) {
     var c =
             !0 === n
             ? i.reduce(function (t, e) {
              return t + e.size;
             }, 0)
             : 0;
     if (
             0 ===
             (o = mo(o, r, "max-total-size", function (t) {
              return (c += t.size) <= s.maxTotalSizeNumber;
             })).length
             )
      return a();
    }
    if ("function" == typeof this.filter) {
     var u = this.filter(o);
     o = mo(o, r, "filter", function (t) {
      return u.includes(t);
     });
    }
    if (void 0 !== this.maxFiles) {
     var h = !0 === n ? i.length : 0;
     if (
             0 ===
             (o = mo(o, r, "max-files", function () {
              return ++h <= s.maxFilesNumber;
             })).length
             )
      return a();
    }
    return a(), o.length > 0 ? o : void 0;
   },
   __onDragOver: function (t) {
    vo(t), !0 !== this.dnd && (this.dnd = !0);
   },
   __onDragLeave: function (t) {
    S(t), (this.dnd = !1);
   },
   __onDrop: function (t) {
    vo(t);
    var e = t.dataTransfer.files;
    e.length > 0 && this.__addFiles(null, e), (this.dnd = !1);
   },
   __getDnd: function (t, e) {
    if (!0 === this.dnd)
     return t("div", {staticClass: "q-" + e + "__dnd absolute-full", on: mt(this, "dnd", {dragenter: vo, dragover: vo, dragleave: this.__onDragLeave, drop: this.__onDrop})});
   },
  },
 },
         _o = {
          computed: {
           formDomProps: function () {
            if ("file" === this.type)
             try {
              var t = "DataTransfer" in window ? new DataTransfer() : "ClipboardEvent" in window ? new ClipboardEvent("").clipboardData : void 0;
              return (
                      Object(this.value) === this.value &&
                      ("length" in this.value ? Array.from(this.value) : [this.value]).forEach(function (e) {
               t.items.add(e);
              }),
                      {files: t.files}
              );
             } catch (t) {
              return {files: void 0};
             }
           },
          },
         },
         bo = t.extend({
          name: "QFile",
          mixins: [fo, go, ui, _o],
          props: {
           value: !0 === i ? {} : [File, FileList, Array],
           append: Boolean,
           useChips: Boolean,
           displayValue: [String, Number],
           tabindex: {type: [String, Number], default: 0},
           counterLabel: Function,
           inputClass: [Array, String, Object],
           inputStyle: [Array, String, Object],
          },
          data: function () {
           return {dnd: !1};
          },
          computed: {
           innerValue: function () {
            return Object(this.value) === this.value ? ("length" in this.value ? Array.from(this.value) : [this.value]) : [];
           },
           selectedString: function () {
            return this.innerValue
                    .map(function (t) {
                     return t.name;
                    })
                    .join(", ");
           },
           totalSize: function () {
            return ct(
                    this.innerValue.reduce(function (t, e) {
                     return t + e.size;
                    }, 0)
                    );
           },
           counterProps: function () {
            return {totalSize: this.totalSize, filesNumber: this.innerValue.length, maxFiles: this.maxFiles};
           },
           computedCounter: function () {
            if (void 0 !== this.counterLabel)
             return this.counterLabel(this.counterProps);
            var t = this.maxFiles;
            return this.innerValue.length + (void 0 !== t ? " / " + t : "") + " (" + this.totalSize + ")";
           },
           inputAttrs: function () {
            return Object.assign({}, {tabindex: -1, type: "file", title: "", accept: this.accept, capture: this.capture, name: this.nameProp}, this.qAttrs, {id: this.targetUid, disabled: !0 !== this.editable});
           },
           isAppending: function () {
            return !0 === this.multiple && !0 === this.append;
           },
          },
          methods: {
           removeAtIndex: function (t) {
            var e = this.innerValue.slice();
            e.splice(t, 1), this.__emitValue(e);
           },
           removeFile: function (t) {
            var e = this.innerValue.findIndex(t);
            e > -1 && this.removeAtIndex(e);
           },
           __emitValue: function (t) {
            this.$emit("input", !0 === this.multiple ? t : t[0]);
           },
           __onKeyup: function (t) {
            13 === t.keyCode && this.pickFiles(t);
           },
           __getFileInput: function () {
            return this.$refs.input;
           },
           __addFiles: function (t, e) {
            var i = this.__processFiles(t, e, this.innerValue, this.isAppending);
            void 0 !== i && this.__emitValue(!0 === this.isAppending ? this.innerValue.concat(i) : i);
           },
           __getControl: function (t) {
            var e = {ref: "target", staticClass: "q-field__native row items-center cursor-pointer", attrs: {tabindex: this.tabindex}};
            return !0 === this.editable && (e.on = mt(this, "native", {dragover: this.__onDragOver, keyup: this.__onKeyup})), t("div", e, [this.__getInput(t)].concat(this.__getSelection(t)));
           },
           __getControlChild: function (t) {
            return this.__getDnd(t, "file");
           },
           __getSelection: function (t) {
            var e = this;
            return void 0 !== this.$scopedSlots.file
                    ? this.innerValue.map(function (t, i) {
                     return e.$scopedSlots.file({index: i, file: t, ref: e});
                    })
                    : void 0 !== this.$scopedSlots.selected
                    ? this.$scopedSlots.selected({files: this.innerValue, ref: this})
                    : !0 === this.useChips
                    ? this.innerValue.map(function (i, n) {
                     return t(
                             Ai,
                             {
                              key: "file-" + n,
                              props: {removable: e.editable, dense: !0, textColor: e.color, tabindex: e.tabindex},
                              on: mt(e, "rem#" + n, {
                               remove: function () {
                                e.removeAtIndex(n);
                               },
                              }),
                             },
                             [t("span", {staticClass: "ellipsis", domProps: {textContent: i.name}})]
                             );
                    })
                    : [t("div", {style: this.inputStyle, class: this.inputClass, domProps: {textContent: void 0 !== this.displayValue ? this.displayValue : this.selectedString}})];
           },
           __getInput: function (t) {
            var e = {ref: "input", staticClass: "q-field__input fit absolute-full cursor-pointer", attrs: this.inputAttrs, domProps: this.formDomProps, on: mt(this, "input", {change: this.__addFiles})};
            return !0 === this.multiple && (e.attrs.multiple = !0), t("input", e);
           },
          },
          created: function () {
           (this.fieldClass = "q-file q-field--auto-height"), (this.type = "file");
          },
         }),
         yo = t.extend({
          name: "QFooter",
          mixins: [Lt],
          inject: {
           layout: {
            default: function () {
             console.error("QFooter needs to be child of QLayout");
            },
           },
          },
          props: {value: {type: Boolean, default: !0}, reveal: Boolean, bordered: Boolean, elevated: Boolean, heightHint: {type: [String, Number], default: 50}},
          data: function () {
           return {size: parseInt(this.heightHint, 10), revealed: !0, windowHeight: s || this.layout.container ? 0 : window.innerHeight};
          },
          watch: {
           value: function (t) {
            this.__update("space", t), this.__updateLocal("revealed", !0), this.layout.__animate();
           },
           offset: function (t) {
            this.__update("offset", t);
           },
           reveal: function (t) {
            !1 === t && this.__updateLocal("revealed", this.value);
           },
           revealed: function (t) {
            this.layout.__animate(), this.$emit("reveal", t);
           },
           "layout.scroll": function () {
            this.__updateRevealed();
           },
           "layout.height": function () {
            this.__updateRevealed();
           },
           size: function () {
            this.__updateRevealed();
           },
           "$q.screen.height": function (t) {
            !0 !== this.layout.container && this.__updateLocal("windowHeight", t);
           },
          },
          computed: {
           fixed: function () {
            return !0 === this.reveal || this.layout.view.indexOf("F") > -1 || !0 === this.layout.container;
           },
           containerHeight: function () {
            return !0 === this.layout.container ? this.layout.containerHeight : this.windowHeight;
           },
           offset: function () {
            if (!0 !== this.value)
             return 0;
            if (!0 === this.fixed)
             return !0 === this.revealed ? this.size : 0;
            var t = this.layout.scroll.position + this.containerHeight + this.size - this.layout.height;
            return t > 0 ? t : 0;
           },
           hidden: function () {
            return !0 !== this.value || (!0 === this.fixed && !0 !== this.revealed);
           },
           revealOnFocus: function () {
            return !0 === this.value && !0 === this.hidden && !0 === this.reveal;
           },
           classes: function () {
            return (
                    (!0 === this.fixed ? "fixed" : "absolute") +
                    "-bottom" +
                    (!0 === this.bordered ? " q-footer--bordered" : "") +
                    (!0 === this.hidden ? " q-footer--hidden" : "") +
                    (!0 !== this.value ? " q-layout--prevent-focus" : "") +
                    (!0 !== this.value && !0 !== this.fixed ? " hidden" : "")
                    );
           },
           style: function () {
            var t = this.layout.rows.bottom,
                    e = {};
            return (
                    "l" === t[0] && !0 === this.layout.left.space && (e[!0 === this.$q.lang.rtl ? "right" : "left"] = this.layout.left.size + "px"),
                    "r" === t[2] && !0 === this.layout.right.space && (e[!0 === this.$q.lang.rtl ? "left" : "right"] = this.layout.right.size + "px"),
                    e
                    );
           },
           onEvents: function () {
            return Object.assign({}, this.qListeners, {focusin: this.__onFocusin, input: y});
           },
          },
          render: function (t) {
           var e = Et([t(sn, {props: {debounce: 0}, on: mt(this, "resize", {resize: this.__onResize})})], this, "default");
           return (
                   !0 === this.elevated && e.push(t("div", {staticClass: "q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),
                   t("footer", {staticClass: "q-footer q-layout__section--marginal", class: this.classes, style: this.style, on: this.onEvents}, e)
                   );
          },
          created: function () {
           (this.layout.instances.footer = this), !0 === this.value && this.__update("size", this.size), this.__update("space", this.value), this.__update("offset", this.offset);
          },
          beforeDestroy: function () {
           this.layout.instances.footer === this && ((this.layout.instances.footer = void 0), this.__update("size", 0), this.__update("offset", 0), this.__update("space", !1));
          },
          methods: {
           __onResize: function (t) {
            var e = t.height;
            this.__updateLocal("size", e), this.__update("size", e);
           },
           __update: function (t, e) {
            this.layout.footer[t] !== e && (this.layout.footer[t] = e);
           },
           __updateLocal: function (t, e) {
            this[t] !== e && (this[t] = e);
           },
           __updateRevealed: function () {
            if (!0 === this.reveal) {
             var t = this.layout.scroll,
                     e = t.direction,
                     i = t.position,
                     n = t.inflexionPosition;
             this.__updateLocal("revealed", "up" === e || i - n < 100 || this.layout.height - this.containerHeight - i - this.size < 300);
            }
           },
           __onFocusin: function (t) {
            !0 === this.revealOnFocus && this.__updateLocal("revealed", !0), this.$emit("focusin", t);
           },
          },
         }),
         wo = t.extend({
          name: "QForm",
          mixins: [Lt],
          props: {autofocus: Boolean, noErrorFocus: Boolean, noResetFocus: Boolean, greedy: Boolean},
          computed: {
           onEvents: function () {
            return Object.assign({}, this.qListeners, {submit: this.submit, reset: this.reset});
           },
          },
          mounted: function () {
           (this.validateIndex = 0), !0 === this.autofocus && this.focus();
          },
          methods: {
           validate: function (t) {
            var e = this,
                    i = [],
                    n = "boolean" == typeof t ? t : !0 !== this.noErrorFocus;
            this.validateIndex++;
            for (
                    var s = this.getValidationComponents(),
                    o = function (t, i) {
                     e.$emit("validation-" + (!0 === t ? "success" : "error"), i);
                    },
                    r = function (t) {
                     var r = s[t],
                             a = r.validate();
                     if ("function" == typeof a.then)
                      i.push(
                              a.then(
                                      function (t) {
                                       return {valid: t, comp: r};
                                      },
                                      function (t) {
                                       return {valid: !1, comp: r, error: t};
                                      }
                              )
                              );
                     else if (!0 !== a) {
                      if (!1 === e.greedy)
                       return o(!1, r), !0 === n && "function" == typeof r.focus && r.focus(), {v: Promise.resolve(!1)};
                      i.push({valid: !1, comp: r});
                     }
                    },
                    a = 0;
                    a < s.length;
                    a++
                    ) {
             var l = r(a);
             if (l)
              return l.v;
            }
            if (0 === i.length)
             return o(!0), Promise.resolve(!0);
            var c = this.validateIndex;
            return Promise.all(i).then(function (t) {
             if (c === e.validateIndex) {
              var i = t.filter(function (t) {
               return !0 !== t.valid;
              });
              if (0 === i.length)
               return o(!0), !0;
              var s = i[0],
                      r = s.valid,
                      a = s.comp;
              return o(!1, a), !0 === n && !0 !== r && "function" == typeof a.focus && a.focus(), !1;
             }
            });
           },
           resetValidation: function () {
            this.validateIndex++,
                    this.getValidationComponents().forEach(function (t) {
             "function" == typeof t.resetValidation && t.resetValidation();
            });
           },
           submit: function (t) {
            var e = this;
            void 0 !== t && S(t),
                    this.validate().then(function (i) {
             !0 === i && (void 0 !== e.qListeners.submit ? e.$emit("submit", t) : void 0 !== t && void 0 !== t.target && "function" == typeof t.target.submit && t.target.submit());
            });
           },
           reset: function (t) {
            var e = this;
            void 0 !== t && S(t),
                    this.$emit("reset"),
                    this.$nextTick(function () {
                     e.resetValidation(), !0 === e.autofocus && !0 !== e.noResetFocus && e.focus();
                    });
           },
           focus: function () {
            var t =
                    this.$el.querySelector("[autofocus], [data-autofocus]") ||
                    Array.prototype.find.call(this.$el.querySelectorAll("[tabindex]"), function (t) {
                     return t.tabIndex > -1;
                    });
            null !== t && void 0 !== t && t.focus();
           },
           getValidationComponents: function () {
            return Array.prototype.map
                    .call(this.$el.getElementsByClassName("q-validation-component"), function (t) {
                     return t.__vue__;
                    })
                    .filter(function (t) {
                     return void 0 !== t && "function" == typeof t.validate;
                    });
           },
          },
          render: function (t) {
           return t("form", {staticClass: "q-form", on: this.onEvents}, Ot(this, "default"));
          },
         }),
         So = t.extend({
          name: "QHeader",
          mixins: [Lt],
          inject: {
           layout: {
            default: function () {
             console.error("QHeader needs to be child of QLayout");
            },
           },
          },
          props: {value: {type: Boolean, default: !0}, reveal: Boolean, revealOffset: {type: Number, default: 250}, bordered: Boolean, elevated: Boolean, heightHint: {type: [String, Number], default: 50}},
          data: function () {
           return {size: parseInt(this.heightHint, 10), revealed: !0};
          },
          watch: {
           value: function (t) {
            this.__update("space", t), this.__updateLocal("revealed", !0), this.layout.__animate();
           },
           offset: function (t) {
            this.__update("offset", t);
           },
           reveal: function (t) {
            !1 === t && this.__updateLocal("revealed", this.value);
           },
           revealed: function (t) {
            this.layout.__animate(), this.$emit("reveal", t);
           },
           "layout.scroll": function (t) {
            !0 === this.reveal && this.__updateLocal("revealed", "up" === t.direction || t.position <= this.revealOffset || t.position - t.inflexionPosition < 100);
           },
          },
          computed: {
           fixed: function () {
            return !0 === this.reveal || this.layout.view.indexOf("H") > -1 || !0 === this.layout.container;
           },
           offset: function () {
            if (!0 !== this.value)
             return 0;
            if (!0 === this.fixed)
             return !0 === this.revealed ? this.size : 0;
            var t = this.size - this.layout.scroll.position;
            return t > 0 ? t : 0;
           },
           hidden: function () {
            return !0 !== this.value || (!0 === this.fixed && !0 !== this.revealed);
           },
           revealOnFocus: function () {
            return !0 === this.value && !0 === this.hidden && !0 === this.reveal;
           },
           classes: function () {
            return (!0 === this.fixed ? "fixed" : "absolute") + "-top" + (!0 === this.bordered ? " q-header--bordered" : "") + (!0 === this.hidden ? " q-header--hidden" : "") + (!0 !== this.value ? " q-layout--prevent-focus" : "");
           },
           style: function () {
            var t = this.layout.rows.top,
                    e = {};
            return (
                    "l" === t[0] && !0 === this.layout.left.space && (e[!0 === this.$q.lang.rtl ? "right" : "left"] = this.layout.left.size + "px"),
                    "r" === t[2] && !0 === this.layout.right.space && (e[!0 === this.$q.lang.rtl ? "left" : "right"] = this.layout.right.size + "px"),
                    e
                    );
           },
           onEvents: function () {
            return Object.assign({}, this.qListeners, {focusin: this.__onFocusin, input: y});
           },
          },
          render: function (t) {
           var e = Bt(this, "default", []);
           return (
                   !0 === this.elevated && e.push(t("div", {staticClass: "q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),
                   e.push(t(sn, {props: {debounce: 0}, on: mt(this, "resize", {resize: this.__onResize})})),
                   t("header", {staticClass: "q-header q-layout__section--marginal", class: this.classes, style: this.style, on: this.onEvents}, e)
                   );
          },
          created: function () {
           (this.layout.instances.header = this), !0 === this.value && this.__update("size", this.size), this.__update("space", this.value), this.__update("offset", this.offset);
          },
          beforeDestroy: function () {
           this.layout.instances.header === this && ((this.layout.instances.header = void 0), this.__update("size", 0), this.__update("offset", 0), this.__update("space", !1));
          },
          methods: {
           __onResize: function (t) {
            var e = t.height;
            this.__updateLocal("size", e), this.__update("size", e);
           },
           __update: function (t, e) {
            this.layout.header[t] !== e && (this.layout.header[t] = e);
           },
           __updateLocal: function (t, e) {
            this[t] !== e && (this[t] = e);
           },
           __onFocusin: function (t) {
            !0 === this.revealOnFocus && this.__updateLocal("revealed", !0), this.$emit("focusin", t);
           },
          },
         }),
         xo = {
          props: {ratio: [String, Number]},
          computed: {
           ratioStyle: function () {
            var t = this.ratio || this.naturalRatio;
            if (void 0 !== t)
             return {paddingBottom: 100 / t + "%"};
           },
          },
         },
         Co = t.extend({
          name: "QImg",
          mixins: [Lt, xo],
          props: {
           src: String,
           srcset: String,
           sizes: String,
           alt: String,
           width: String,
           height: String,
           placeholderSrc: String,
           basic: Boolean,
           contain: Boolean,
           position: {type: String, default: "50% 50%"},
           transition: {type: String, default: "fade"},
           imgClass: [Array, String, Object],
           imgStyle: Object,
           nativeContextMenu: Boolean,
           noDefaultSpinner: Boolean,
           spinnerColor: String,
           spinnerSize: String,
          },
          data: function () {
           return {currentSrc: "", image: null, isLoading: !!this.src, hasError: !1, naturalRatio: void 0};
          },
          watch: {
           src: function () {
            this.__load();
           },
           srcset: function (t) {
            this.__updateWatcher(t);
           },
          },
          computed: {
           url: function () {
            return this.currentSrc || this.placeholderSrc || void 0;
           },
           attrs: function () {
            var t = {role: "img"};
            return void 0 !== this.alt && (t["aria-label"] = this.alt), t;
           },
           imgContainerStyle: function () {
            return Object.assign({backgroundSize: !0 === this.contain ? "contain" : "cover", backgroundPosition: this.position}, this.imgStyle, {backgroundImage: 'url("' + this.url + '")'});
           },
           style: function () {
            return {width: this.width, height: this.height};
           },
           classes: function () {
            return "q-img overflow-hidden" + (!0 === this.nativeContextMenu ? " q-img--menu" : "");
           },
          },
          methods: {
           __onLoad: function (t) {
            (this.isLoading = !1), (this.hasError = !1), this.__computeRatio(t), this.__updateSrc(), this.__updateWatcher(this.srcset), this.$emit("load", this.currentSrc);
           },
           __onError: function (t) {
            clearTimeout(this.ratioTimer), (this.isLoading = !1), (this.hasError = !0), (this.currentSrc = ""), this.$emit("error", t);
           },
           __updateSrc: function () {
            if (void 0 !== this.image && !1 === this.isLoading) {
             var t = this.image.currentSrc || this.image.src;
             this.currentSrc !== t && (this.currentSrc = t);
            }
           },
           __updateWatcher: function (t) {
            t ? void 0 === this.unwatch && (this.unwatch = this.$watch("$q.screen.width", this.__updateSrc)) : void 0 !== this.unwatch && (this.unwatch(), (this.unwatch = void 0));
           },
           __load: function () {
            var t = this;
            if ((clearTimeout(this.ratioTimer), (this.hasError = !1), !this.src))
             return (this.isLoading = !1), (this.image = void 0), void (this.currentSrc = "");
            this.isLoading = !0;
            var e = new Image();
            (this.image = e),
                    (e.onerror = function (i) {
                     t.image === e && !0 !== t.destroyed && t.__onError(i);
                    }),
                    (e.onload = function () {
                     !0 !== t.destroyed &&
                             t.image === e &&
                             (void 0 !== e.decode
                                     ? e
                                     .decode()
                                     .catch(function (i) {
                                      t.image === e && !0 !== t.destroyed && t.__onError(i);
                                     })
                                     .then(function () {
                                      t.image === e && !0 !== t.destroyed && t.__onLoad(e);
                                     })
                                     : t.__onLoad(e));
                    }),
                    (e.src = this.src),
                    this.srcset && (e.srcset = this.srcset),
                    void 0 !== this.sizes ? (e.sizes = this.sizes) : Object.assign(e, {height: this.height, width: this.width});
           },
           __computeRatio: function (t) {
            var e = this,
                    i = t.naturalHeight,
                    n = t.naturalWidth;
            i || n
                    ? (this.naturalRatio = 0 === i ? 1 : n / i)
                    : (this.ratioTimer = setTimeout(function () {
                     e.image === t && !0 !== e.destroyed && e.__computeRatio(t);
                    }, 100));
           },
           __getImage: function (t) {
            var e = !0 === this.nativeContextMenu ? [t("img", {staticClass: "absolute-full fit", attrs: {src: this.url, "aria-hidden": "true"}})] : void 0,
                    i = void 0 !== this.url ? t("div", {key: this.url, staticClass: "q-img__image absolute-full", class: this.imgClass, style: this.imgContainerStyle}, e) : null;
            return !0 === this.basic ? i : t("transition", {props: {name: "q-transition--" + this.transition}}, [i]);
           },
           __getContent: function (t) {
            var e = Ot(this, !0 === this.hasError ? "error" : "default");
            return !0 === this.basic
                    ? t("div", {key: "content", staticClass: "q-img__content absolute-full"}, e)
                    : t("transition", {props: {name: "q-transition--fade"}}, [
                     !0 === this.isLoading
                             ? t(
                                     "div",
                                     {key: "placeholder", staticClass: "q-img__loading absolute-full flex flex-center"},
                                     void 0 !== this.$scopedSlots.loading ? this.$scopedSlots.loading() : !1 === this.noDefaultSpinner ? [t(Xt, {props: {color: this.spinnerColor, size: this.spinnerSize}})] : void 0
                                     )
                             : t("div", {key: "content", staticClass: "q-img__content absolute-full"}, e),
                    ]);
           },
          },
          render: function (t) {
           return t("div", {class: this.classes, style: this.style, attrs: this.attrs, on: Object.assign({}, this.qListeners)}, [t("div", {style: this.ratioStyle}), this.__getImage(t), this.__getContent(t)]);
          },
          beforeMount: function () {
           if (void 0 !== this.placeholderSrc && void 0 === this.ratio) {
            var t = new Image();
            (t.src = this.placeholderSrc), this.__computeRatio(t);
           }
           !0 === this.isLoading && this.__load();
          },
          beforeDestroy: function () {
           (this.destroyed = !0), clearTimeout(this.ratioTimer), void 0 !== this.unwatch && this.unwatch();
          },
         }),
         ko = t.extend({
          name: "QInfiniteScroll",
          mixins: [Lt],
          props: {offset: {type: Number, default: 500}, debounce: {type: [String, Number], default: 100}, scrollTarget: {default: void 0}, initialIndex: Number, disable: Boolean, reverse: Boolean},
          data: function () {
           return {index: this.initialIndex || 0, fetching: !1, working: !0};
          },
          watch: {
           disable: function (t) {
            !0 === t ? this.stop() : this.resume();
           },
           scrollTarget: function () {
            this.updateScrollTarget();
           },
           debounce: function (t) {
            this.__setDebounce(t);
           },
          },
          methods: {
           poll: function () {
            if (!0 !== this.disable && !0 !== this.fetching && !1 !== this.working) {
             var t = Re(this.__scrollTarget),
                     e = Fe(this.__scrollTarget),
                     i = Zt(this.__scrollTarget);
             !1 === this.reverse ? e + i + this.offset >= t && this.trigger() : e < this.offset && this.trigger();
            }
           },
           trigger: function () {
            var t = this;
            if (!0 !== this.disable && !0 !== this.fetching && !1 !== this.working) {
             this.index++, (this.fetching = !0);
             var e = Re(this.__scrollTarget);
             this.$emit("load", this.index, function (i) {
              !0 === t.working &&
                      ((t.fetching = !1),
                              t.$nextTick(function () {
                               if (!0 === t.reverse) {
                                var n = Re(t.__scrollTarget),
                                        s = Fe(t.__scrollTarget),
                                        o = n - e;
                                We(t.__scrollTarget, s + o);
                               }
                               !0 === i ? t.stop() : t.$el.closest("body") && t.poll();
                              }));
             });
            }
           },
           reset: function () {
            this.index = 0;
           },
           resume: function () {
            !1 === this.working && ((this.working = !0), this.__scrollTarget.addEventListener("scroll", this.poll, d.passive)), this.immediatePoll();
           },
           stop: function () {
            !0 === this.working && ((this.working = !1), (this.fetching = !1), this.__scrollTarget.removeEventListener("scroll", this.poll, d.passive));
           },
           updateScrollTarget: function () {
            this.__scrollTarget && !0 === this.working && this.__scrollTarget.removeEventListener("scroll", this.poll, d.passive),
                    (this.__scrollTarget = Ie(this.$el, this.scrollTarget)),
                    !0 === this.working && this.__scrollTarget.addEventListener("scroll", this.poll, d.passive);
           },
           setIndex: function (t) {
            this.index = t;
           },
           __setDebounce: function (t) {
            t = parseInt(t, 10);
            var e = this.poll;
            (this.poll = t <= 0 ? this.immediatePoll : M(this.immediatePoll, !0 === isNaN(t) ? 100 : t)),
                    this.__scrollTarget && !0 === this.working && (void 0 !== e && this.__scrollTarget.removeEventListener("scroll", e, d.passive), this.__scrollTarget.addEventListener("scroll", this.poll, d.passive));
           },
          },
          mounted: function () {
           if (((this.immediatePoll = this.poll), this.__setDebounce(this.debounce), this.updateScrollTarget(), !0 === this.reverse)) {
            var t = Re(this.__scrollTarget),
                    e = Zt(this.__scrollTarget);
            We(this.__scrollTarget, t - e);
           }
           this.immediatePoll();
          },
          beforeDestroy: function () {
           !0 === this.working && this.__scrollTarget.removeEventListener("scroll", this.poll, d.passive);
          },
          render: function (t) {
           var e = Bt(this, "default", []);
           return (
                   !0 !== this.disable && !0 === this.working && e[!1 === this.reverse ? "push" : "unshift"](t("div", {staticClass: "q-infinite-scroll__loading", class: !0 === this.fetching ? "" : "invisible"}, Ot(this, "loading"))),
                   t("div", {staticClass: "q-infinite-scroll", on: Object.assign({}, this.qListeners)}, e)
                   );
          },
         }),
         qo = t.extend({
          name: "QInnerLoading",
          mixins: [Lt, It, $e],
          props: {showing: Boolean, color: String, size: {type: [String, Number], default: 42}},
          render: function (t) {
           var e =
                   !0 === this.showing
                   ? [
                    t(
                            "div",
                            {staticClass: "q-inner-loading absolute-full column flex-center", class: !0 === this.isDark ? "q-inner-loading--dark" : null, on: Object.assign({}, this.qListeners)},
                            void 0 !== this.$scopedSlots.default ? this.$scopedSlots.default() : [t(Xt, {props: {size: this.size, color: this.color}})]
                            ),
                   ]
                   : void 0;
           return t("transition", {props: {name: this.transition, appear: !0}}, e);
          },
         }),
         To = {date: "####/##/##", datetime: "####/##/## ##:##", time: "##:##", fulltime: "##:##:##", phone: "(###) ### - ####", card: "#### #### #### ####"},
         Mo = {
          "#": {pattern: "[\\d]", negate: "[^\\d]"},
          S: {pattern: "[a-zA-Z]", negate: "[^a-zA-Z]"},
          N: {pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]"},
          A: {
           pattern: "[a-zA-Z]",
           negate: "[^a-zA-Z]",
           transform: function (t) {
            return t.toLocaleUpperCase();
           },
          },
          a: {
           pattern: "[a-zA-Z]",
           negate: "[^a-zA-Z]",
           transform: function (t) {
            return t.toLocaleLowerCase();
           },
          },
          X: {
           pattern: "[0-9a-zA-Z]",
           negate: "[^0-9a-zA-Z]",
           transform: function (t) {
            return t.toLocaleUpperCase();
           },
          },
          x: {
           pattern: "[0-9a-zA-Z]",
           negate: "[^0-9a-zA-Z]",
           transform: function (t) {
            return t.toLocaleLowerCase();
           },
          },
         },
         $o = Object.keys(Mo);
 $o.forEach(function (t) {
  Mo[t].regex = new RegExp(Mo[t].pattern);
 });
 var Lo = new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|([" + $o.join("") + "])|(.)", "g"),
         Oo = /[.*+?^${}()|[\]\\]/g,
         Bo = String.fromCharCode(1),
         Eo = {
          props: {mask: String, reverseFillMask: Boolean, fillMask: [Boolean, String], unmaskedValue: Boolean},
          watch: {
           type: function () {
            this.__updateMaskInternals();
           },
           mask: function (t) {
            if (void 0 !== t)
             this.__updateMaskValue(this.innerValue, !0);
            else {
             var e = this.__unmask(this.innerValue);
             this.__updateMaskInternals(), this.value !== e && this.$emit("input", e);
            }
           },
           fillMask: function () {
            !0 === this.hasMask && this.__updateMaskValue(this.innerValue, !0);
           },
           reverseFillMask: function () {
            !0 === this.hasMask && this.__updateMaskValue(this.innerValue, !0);
           },
           unmaskedValue: function () {
            !0 === this.hasMask && this.__updateMaskValue(this.innerValue);
           },
          },
          methods: {
           __getInitialMaskedValue: function () {
            if ((this.__updateMaskInternals(), !0 === this.hasMask)) {
             var t = this.__mask(this.__unmask(this.value));
             return !1 !== this.fillMask ? this.__fillWithMask(t) : t;
            }
            return this.value;
           },
           __getPaddedMaskMarked: function (t) {
            if (t < this.maskMarked.length)
             return this.maskMarked.slice(-t);
            var e = this.maskMarked,
                    i = "",
                    n = e.indexOf(Bo);
            if (n > -1) {
             for (var s = t - e.length; s > 0; s--)
              i += Bo;
             e = e.slice(0, n) + i + e.slice(n);
            }
            return e;
           },
           __updateMaskInternals: function () {
            var t = this;
            if (((this.hasMask = void 0 !== this.mask && this.mask.length > 0 && ["text", "search", "url", "tel", "password"].includes(this.type)), !1 === this.hasMask))
             return (this.computedUnmask = void 0), (this.maskMarked = ""), void (this.maskReplaced = "");
            var e = void 0 === To[this.mask] ? this.mask : To[this.mask],
                    i = "string" == typeof this.fillMask && this.fillMask.length > 0 ? this.fillMask.slice(0, 1) : "_",
                    n = i.replace(Oo, "\\$&"),
                    s = [],
                    o = [],
                    r = [],
                    a = !0 === this.reverseFillMask,
                    l = "",
                    c = "";
            e.replace(Lo, function (t, e, i, n, u) {
             if (void 0 !== n) {
              var h = Mo[n];
              r.push(h), (c = h.negate), !0 === a && (o.push("(?:" + c + "+)?(" + h.pattern + "+)?(?:" + c + "+)?(" + h.pattern + "+)?"), (a = !1)), o.push("(?:" + c + "+)?(" + h.pattern + ")?");
             } else if (void 0 !== i)
              (l = "\\" + ("\\" === i ? "" : i)), r.push(i), s.push("([^" + l + "]+)?" + l + "?");
             else {
              var d = void 0 !== e ? e : u;
              (l = "\\" === d ? "\\\\\\\\" : d.replace(Oo, "\\\\$&")), r.push(d), s.push("([^" + l + "]+)?" + l + "?");
             }
            });
            var u = new RegExp("^" + s.join("") + "(" + ("" === l ? "." : "[^" + l + "]") + "+)?$"),
                    h = o.length - 1,
                    d = o.map(function (e, i) {
                     return 0 === i && !0 === t.reverseFillMask ? new RegExp("^" + n + "*" + e) : i === h ? new RegExp("^" + e + "(" + ("" === c ? "." : c) + "+)?" + (!0 === t.reverseFillMask ? "$" : n + "*")) : new RegExp("^" + e);
                    });
            (this.computedMask = r),
                    (this.computedUnmask = function (t) {
                     var e = u.exec(t);
                     null !== e && (t = e.slice(1).join(""));
                     for (var i = [], n = d.length, s = 0, o = t; s < n; s++) {
                      var r = d[s].exec(o);
                      if (null === r)
                       break;
                      (o = o.slice(r.shift().length)), i.push.apply(i, r);
                     }
                     return i.length > 0 ? i.join("") : t;
                    }),
                    (this.maskMarked = r
                            .map(function (t) {
                             return "string" == typeof t ? t : Bo;
                            })
                            .join("")),
                    (this.maskReplaced = this.maskMarked.split(Bo).join(i));
           },
           __updateMaskValue: function (t, e, i) {
            var n = this,
                    s = this.$refs.input,
                    o = s.selectionEnd,
                    r = s.value.length - o,
                    a = this.__unmask(t);
            !0 === e && this.__updateMaskInternals();
            var l = this.__mask(a),
                    c = !1 !== this.fillMask ? this.__fillWithMask(l) : l,
                    u = this.innerValue !== c;
            s.value !== c && (s.value = c),
                    !0 === u && (this.innerValue = c),
                    document.activeElement === s &&
                    this.$nextTick(function () {
                     if (c !== n.maskReplaced)
                      if ("insertFromPaste" !== i || !0 === n.reverseFillMask)
                       if (["deleteContentBackward", "deleteContentForward"].indexOf(i) > -1) {
                        var t = !0 === n.reverseFillMask ? Math.max(0, c.length - (c === n.maskReplaced ? 0 : Math.min(l.length, r) + 1)) + 1 : o;
                        s.setSelectionRange(t, t, "forward");
                       } else if (!0 === n.reverseFillMask)
                        if (!0 === u) {
                         var e = Math.max(0, c.length - (c === n.maskReplaced ? 0 : Math.min(l.length, r + 1)));
                         n.__moveCursorRightReverse(s, e, e);
                        } else {
                         var a = c.length - r;
                         s.setSelectionRange(a, a, "backward");
                        }
                       else if (!0 === u) {
                        var h = Math.max(0, n.maskMarked.indexOf(Bo), Math.min(l.length, o) - 1);
                        n.__moveCursorRight(s, h, h);
                       } else {
                        var d = o - 1;
                        n.__moveCursorRight(s, d, d);
                       }
                      else {
                       var p = o - 1;
                       n.__moveCursorRight(s, p, p);
                      }
                     else {
                      var f = !0 === n.reverseFillMask ? n.maskReplaced.length : 0;
                      s.setSelectionRange(f, f, "forward");
                     }
                    });
            var h = !0 === this.unmaskedValue ? this.__unmask(c) : c;
            this.value !== h && this.__emitValue(h, !0);
           },
           __moveCursorForPaste: function (t, e, i) {
            var n = this.__mask(this.__unmask(t.value));
            (e = Math.max(0, this.maskMarked.indexOf(Bo), Math.min(n.length, e))), t.setSelectionRange(e, i, "forward");
           },
           __moveCursorLeft: function (t, e, i, n) {
            for (var s = -1 === this.maskMarked.slice(e - 1).indexOf(Bo), o = Math.max(0, e - 1); o >= 0; o--)
             if (this.maskMarked[o] === Bo) {
              (e = o), !0 === s && e++;
              break;
             }
            if (o < 0 && void 0 !== this.maskMarked[e] && this.maskMarked[e] !== Bo)
             return this.__moveCursorRight(t, 0, 0);
            e >= 0 && t.setSelectionRange(e, !0 === n ? i : e, "backward");
           },
           __moveCursorRight: function (t, e, i, n) {
            for (var s = t.value.length, o = Math.min(s, i + 1); o <= s; o++) {
             if (this.maskMarked[o] === Bo) {
              i = o;
              break;
             }
             this.maskMarked[o - 1] === Bo && (i = o);
            }
            if (o > s && void 0 !== this.maskMarked[i - 1] && this.maskMarked[i - 1] !== Bo)
             return this.__moveCursorLeft(t, s, s);
            t.setSelectionRange(n ? e : i, i, "forward");
           },
           __moveCursorLeftReverse: function (t, e, i, n) {
            for (var s = this.__getPaddedMaskMarked(t.value.length), o = Math.max(0, e - 1); o >= 0; o--) {
             if (s[o - 1] === Bo) {
              e = o;
              break;
             }
             if (s[o] === Bo && ((e = o), 0 === o))
              break;
            }
            if (o < 0 && void 0 !== s[e] && s[e] !== Bo)
             return this.__moveCursorRightReverse(t, 0, 0);
            e >= 0 && t.setSelectionRange(e, !0 === n ? i : e, "backward");
           },
           __moveCursorRightReverse: function (t, e, i, n) {
            for (var s = t.value.length, o = this.__getPaddedMaskMarked(s), r = -1 === o.slice(0, i + 1).indexOf(Bo), a = Math.min(s, i + 1); a <= s; a++)
             if (o[a - 1] === Bo) {
              (i = a) > 0 && !0 === r && i--;
              break;
             }
            if (a > s && void 0 !== o[i - 1] && o[i - 1] !== Bo)
             return this.__moveCursorLeftReverse(t, s, s);
            t.setSelectionRange(!0 === n ? e : i, i, "forward");
           },
           __onMaskedKeydown: function (t) {
            if (!0 !== J(t)) {
             var e = this.$refs.input,
                     i = e.selectionStart,
                     n = e.selectionEnd;
             if (37 === t.keyCode || 39 === t.keyCode) {
              var s = this["__moveCursor" + (39 === t.keyCode ? "Right" : "Left") + (!0 === this.reverseFillMask ? "Reverse" : "")];
              t.preventDefault(), s(e, i, n, t.shiftKey);
             } else
              8 === t.keyCode && !0 !== this.reverseFillMask && i === n ? this.__moveCursorLeft(e, i, n, !0) : 46 === t.keyCode && !0 === this.reverseFillMask && i === n && this.__moveCursorRightReverse(e, i, n, !0);
             this.$emit("keydown", t);
            }
           },
           __mask: function (t) {
            if (void 0 === t || null === t || "" === t)
             return "";
            if (!0 === this.reverseFillMask)
             return this.__maskReverse(t);
            for (var e = this.computedMask, i = 0, n = "", s = 0; s < e.length; s++) {
             var o = t[i],
                     r = e[s];
             if ("string" == typeof r)
              (n += r), o === r && i++;
             else {
              if (void 0 === o || !r.regex.test(o))
               return n;
              (n += void 0 !== r.transform ? r.transform(o) : o), i++;
             }
            }
            return n;
           },
           __maskReverse: function (t) {
            for (var e = this.computedMask, i = this.maskMarked.indexOf(Bo), n = t.length - 1, s = "", o = e.length - 1; o >= 0; o--) {
             var r = e[o],
                     a = t[n];
             if ("string" == typeof r)
              (s = r + s), a === r && n--;
             else {
              if (void 0 === a || !r.regex.test(a))
               return s;
              do {
               (s = (void 0 !== r.transform ? r.transform(a) : a) + s), (a = t[--n]);
              } while (i === o && void 0 !== a && r.regex.test(a));
             }
            }
            return s;
           },
           __unmask: function (t) {
            return "string" != typeof t || void 0 === this.computedUnmask ? ("number" == typeof t ? this.computedUnmask("" + t) : t) : this.computedUnmask(t);
           },
           __fillWithMask: function (t) {
            return this.maskReplaced.length - t.length <= 0 ? t : !0 === this.reverseFillMask && t.length > 0 ? this.maskReplaced.slice(0, -t.length) + t : t + this.maskReplaced.slice(t.length);
           },
          },
         },
         Po = /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,
         zo = /(?:[\u3300-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF\uFE30-\uFE4F]|[\uD840-\uD868\uD86A-\uD872][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD873[\uDC00-\uDEAF]|\uD87E[\uDC00-\uDE1F])/,
         Ao = /[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,
         Do = {
          methods: {
           __onComposition: function (t) {
            if ("compositionend" === t.type || "change" === t.type) {
             if (!0 !== t.target.composing)
              return;
             (t.target.composing = !1), this.__onInput(t);
            } else
             "compositionupdate" === t.type ? "string" == typeof t.data && !1 === Po.test(t.data) && !1 === zo.test(t.data) && !1 === Ao.test(t.data) && (t.target.composing = !1) : (t.target.composing = !0);
           },
          },
         },
         Io = t.extend({
          name: "QInput",
          mixins: [fo, Eo, Do, ui, _o, Lt],
          props: {value: {required: !1}, shadowText: String, type: {type: String, default: "text"}, debounce: [String, Number], autogrow: Boolean, inputClass: [Array, String, Object], inputStyle: [Array, String, Object]},
          watch: {
           value: function (t) {
            if (!0 === this.hasMask) {
             if (!0 === this.stopValueWatcher)
              return void (this.stopValueWatcher = !1);
             this.__updateMaskValue(t);
            } else
             this.innerValue !== t && ((this.innerValue = t), "number" === this.type && !0 === this.hasOwnProperty("tempValue") && (!0 === this.typedNumber ? (this.typedNumber = !1) : delete this.tempValue));
            !0 === this.autogrow && this.$nextTick(this.__adjustHeight);
           },
           autogrow: function (t) {
            if (!0 === t)
             this.$nextTick(this.__adjustHeight);
            else if (this.qAttrs.rows > 0 && void 0 !== this.$refs.input) {
             this.$refs.input.style.height = "auto";
            }
           },
           dense: function () {
            !0 === this.autogrow && this.$nextTick(this.__adjustHeight);
           },
          },
          data: function () {
           return {innerValue: this.__getInitialMaskedValue()};
          },
          computed: {
           isTextarea: function () {
            return "textarea" === this.type || !0 === this.autogrow;
           },
           fieldClass: function () {
            return "q-" + (!0 === this.isTextarea ? "textarea" : "input") + (!0 === this.autogrow ? " q-textarea--autogrow" : "");
           },
           hasShadow: function () {
            return "file" !== this.type && "string" == typeof this.shadowText && this.shadowText.length > 0;
           },
           onEvents: function () {
            var t = Object.assign({}, this.qListeners, {input: this.__onInput, paste: this.__onPaste, change: this.__onChange, blur: this.__onFinishEditing, focus: y});
            return (t.compositionstart = t.compositionupdate = t.compositionend = this.__onComposition), !0 === this.hasMask && (t.keydown = this.__onMaskedKeydown), !0 === this.autogrow && (t.animationend = this.__adjustHeight), t;
           },
           inputAttrs: function () {
            var t = Object.assign({}, {tabindex: 0, "data-autofocus": this.autofocus, rows: "textarea" === this.type ? 6 : void 0, "aria-label": this.label, name: this.nameProp}, this.qAttrs, {
             id: this.targetUid,
             type: this.type,
             maxlength: this.maxlength,
             disabled: !0 === this.disable,
             readonly: !0 === this.readonly,
            });
            return !0 === this.autogrow && (t.rows = 1), t;
           },
          },
          methods: {
           focus: function () {
            var t = document.activeElement;
            void 0 === this.$refs.input || this.$refs.input === t || (null !== t && t.id === this.targetUid) || this.$refs.input.focus();
           },
           select: function () {
            void 0 !== this.$refs.input && this.$refs.input.select();
           },
           __onPaste: function (t) {
            if (!0 === this.hasMask && !0 !== this.reverseFillMask) {
             var e = t.target;
             this.__moveCursorForPaste(e, e.selectionStart, e.selectionEnd);
            }
            this.$emit("paste", t);
           },
           __onInput: function (t) {
            if (t && t.target && !0 !== t.target.composing)
             if ("file" !== this.type) {
              var e = t.target.value;
              if (!0 === this.hasMask)
               this.__updateMaskValue(e, !1, t.inputType);
              else if ((this.__emitValue(e), ["text", "search", "url", "tel", "password"].includes(this.type) && t.target === document.activeElement)) {
               var i = t.target.selectionEnd;
               void 0 !== i &&
                       this.$nextTick(function () {
                        t.target === document.activeElement && 0 === e.indexOf(t.target.value) && t.target.setSelectionRange(i, i);
                       });
              }
              !0 === this.autogrow && this.__adjustHeight();
             } else
              this.$emit("input", t.target.files);
           },
           __emitValue: function (t, e) {
            var i = this;
            (this.emitValueFn = function () {
             "number" !== i.type && !0 === i.hasOwnProperty("tempValue") && delete i.tempValue,
                     i.value !== t &&
                     i.emitCachedValue !== t &&
                     ((i.emitCachedValue = t),
                             !0 === e && (i.stopValueWatcher = !0),
                             i.$emit("input", t),
                             i.$nextTick(function () {
                              i.emitCachedValue === t && (i.emitCachedValue = NaN);
                             })),
                     (i.emitValueFn = void 0);
            }),
                    "number" === this.type && ((this.typedNumber = !0), (this.tempValue = t)),
                    void 0 !== this.debounce ? (clearTimeout(this.emitTimer), (this.tempValue = t), (this.emitTimer = setTimeout(this.emitValueFn, this.debounce))) : this.emitValueFn();
           },
           __adjustHeight: function () {
            var t = this.$refs.input;
            if (void 0 !== t) {
             var e = t.parentNode.style;
             (e.marginBottom = t.scrollHeight - 1 + "px"), (t.style.height = "1px"), (t.style.height = t.scrollHeight + "px"), (e.marginBottom = "");
            }
           },
           __onChange: function (t) {
            this.__onComposition(t), clearTimeout(this.emitTimer), void 0 !== this.emitValueFn && this.emitValueFn(), this.$emit("change", t);
           },
           __onFinishEditing: function (t) {
            var e = this;
            void 0 !== t && y(t),
                    clearTimeout(this.emitTimer),
                    void 0 !== this.emitValueFn && this.emitValueFn(),
                    (this.typedNumber = !1),
                    (this.stopValueWatcher = !1),
                    delete this.tempValue,
                    "file" !== this.type &&
                    setTimeout(function () {
                     void 0 !== e.$refs.input && (e.$refs.input.value = void 0 !== e.innerValue ? e.innerValue : "");
                    });
           },
           __getCurValue: function () {
            return !0 === this.hasOwnProperty("tempValue") ? this.tempValue : void 0 !== this.innerValue ? this.innerValue : "";
           },
           __getShadowControl: function (t) {
            return t("div", {staticClass: "q-field__native q-field__shadow absolute-bottom no-pointer-events" + (!0 === this.isTextarea ? "" : " text-no-wrap")}, [
             t("span", {staticClass: "invisible"}, this.__getCurValue()),
             t("span", this.shadowText),
            ]);
           },
           __getControl: function (t) {
            return t(!0 === this.isTextarea ? "textarea" : "input", {
             ref: "input",
             staticClass: "q-field__native q-placeholder",
             style: this.inputStyle,
             class: this.inputClass,
             attrs: this.inputAttrs,
             on: this.onEvents,
             domProps: "file" !== this.type ? {value: this.__getCurValue()} : this.formDomProps,
            });
           },
          },
          created: function () {
           this.emitCachedValue = NaN;
          },
          mounted: function () {
           !0 === this.autogrow && this.__adjustHeight();
          },
          beforeDestroy: function () {
           this.__onFinishEditing();
          },
         }),
         Ro = {threshold: 0, root: null, rootMargin: "0px"};
 function Fo(t, e, i) {
  var n, s, o;
  "function" == typeof i ? ((n = i), (s = Ro), (o = void 0 === e.cfg)) : ((n = i.handler), (s = Object.assign({}, Ro, i.cfg)), (o = void 0 === e.cfg || !1 === ki(e.cfg, s))),
          e.handler !== n && (e.handler = n),
          !0 === o &&
          ((e.cfg = s),
                  void 0 !== e.observer && e.observer.unobserve(t),
                  (e.observer = new IntersectionObserver(function (i) {
                   var n = i[0];
                   if ("function" == typeof e.handler) {
                    if (null === n.rootBounds && (void 0 !== t.__vue__ ? !0 !== t.__vue__._inactive : !0 === document.body.contains(t)))
                     return e.observer.unobserve(t), void e.observer.observe(t);
                    (!1 === e.handler(n, e.observer) || (!0 === e.once && !0 === n.isIntersecting)) && jo(t);
                   }
                  }, s)),
                  e.observer.observe(t));
 }
 function jo(t) {
  var e = t.__qvisible;
  void 0 !== e && (void 0 !== e.observer && e.observer.unobserve(t), delete t.__qvisible);
 }
 var Vo = {
  name: "intersection",
  inserted: function (t, e) {
   var i = e.modifiers,
           n = e.value;
   void 0 !== t.__qvisible && (jo(t), (t.__qvisible_destroyed = !0));
   var s = {once: !0 === i.once};
   Fo(t, s, n), (t.__qvisible = s);
  },
  update: function (t, e) {
   var i = t.__qvisible;
   void 0 !== i && Fo(t, i, e.value);
  },
  unbind: function (t) {
   void 0 === t.__qvisible_destroyed ? jo(t) : delete t.__qvisible_destroyed;
  },
 },
         No = t.extend({
          name: "QIntersection",
          mixins: [$t, Lt],
          directives: {Intersection: Vo},
          props: {once: Boolean, transition: String, ssrPrerender: Boolean, margin: String, threshold: [Number, Array], root: {default: null}, disable: Boolean},
          data: function () {
           return {showing: !0 === s && this.ssrPrerender};
          },
          computed: {
           value: function () {
            return void 0 !== this.margin || void 0 !== this.threshold ? {handler: this.__trigger, cfg: {root: this.root, rootMargin: this.margin, threshold: this.threshold}} : this.__trigger;
           },
           directives: function () {
            if (!0 !== this.disable && (!0 !== s || !0 !== this.once || !0 !== this.ssrPrerender))
             return [{name: "intersection", value: this.value, modifiers: {once: this.once}}];
           },
          },
          methods: {
           __trigger: function (t) {
            this.showing !== t.isIntersecting && ((this.showing = t.isIntersecting), void 0 !== this.qListeners.visibility && this.$emit("visibility", this.showing));
           },
          },
          render: function (t) {
           var e = !0 === this.showing ? [t("div", {key: "content"}, Ot(this, "default"))] : void 0;
           return t(this.tag, {staticClass: "q-intersection", on: Object.assign({}, this.qListeners), directives: this.directives}, this.transition ? [t("transition", {props: {name: "q-transition--" + this.transition}}, e)] : e);
          },
         }),
         Ho = [34, 37, 40, 33, 39, 38],
         Qo = t.extend({
          name: "QKnob",
          mixins: [{props: Ri.options.props}, ci],
          directives: {TouchPan: Xi},
          props: {
           step: {
            type: Number,
            default: 1,
            validator: function (t) {
             return t >= 0;
            },
           },
           tabindex: {type: [Number, String], default: 0},
           disable: Boolean,
           readonly: Boolean,
          },
          data: function () {
           return {model: this.value, dragging: !1};
          },
          watch: {
           value: function (t) {
            if (t < this.min)
             this.model = this.min;
            else {
             if (!(t > this.max))
              return void (t !== this.model && (this.model = t));
             this.model = this.max;
            }
            this.model !== this.value && (this.$emit("input", this.model), this.$emit("change", this.model));
           },
          },
          computed: {
           classes: function () {
            return "q-knob non-selectable" + (!0 === this.editable ? " q-knob--editable" : !0 === this.disable ? " disabled" : "");
           },
           editable: function () {
            return !1 === this.disable && !1 === this.readonly;
           },
           decimals: function () {
            return (String(this.step).trim("0").split(".")[1] || "").length;
           },
           computedStep: function () {
            return 0 === this.step ? 1 : this.step;
           },
           computedInstantFeedback: function () {
            return !0 === this.instantFeedback || !0 === this.dragging;
           },
           onEvents: function () {
            return !0 === this.$q.platform.is.mobile ? {click: this.__click} : {mousedown: this.__activate, click: this.__click, keydown: this.__keydown, keyup: this.__keyup};
           },
           attrs: function () {
            var t = {role: "slider", "aria-valuemin": this.min, "aria-valuemax": this.max, "aria-valuenow": this.value};
            return !0 === this.editable ? (t.tabindex = this.tabindex) : (t["aria-" + (!0 === this.disable ? "disabled" : "readonly")] = ""), t;
           },
          },
          methods: {
           __updateCenterPosition: function () {
            var t = this.$el.getBoundingClientRect(),
                    e = t.top,
                    i = t.left,
                    n = t.width,
                    s = t.height;
            this.centerPosition = {top: e + s / 2, left: i + n / 2};
           },
           __pan: function (t) {
            t.isFinal ? (this.__updatePosition(t.evt, !0), (this.dragging = !1)) : t.isFirst ? (this.__updateCenterPosition(), (this.dragging = !0), this.__updatePosition(t.evt)) : this.__updatePosition(t.evt);
           },
           __click: function (t) {
            this.__updateCenterPosition(), this.__updatePosition(t, !0);
           },
           __keydown: function (t) {
            if (Ho.includes(t.keyCode)) {
             S(t);
             var e = ([34, 33].includes(t.keyCode) ? 10 : 1) * this.computedStep,
                     i = [34, 37, 40].includes(t.keyCode) ? -e : e;
             (this.model = ht(parseFloat((this.model + i).toFixed(this.decimals)), this.min, this.max)), this.__updateValue();
            }
           },
           __keyup: function (t) {
            Ho.includes(t.keyCode) && this.__updateValue(!0);
           },
           __activate: function (t) {
            this.__updateCenterPosition(), this.__updatePosition(t);
           },
           __updatePosition: function (t, e) {
            var i = this.centerPosition,
                    n = v(t),
                    s = Math.abs(n.top - i.top),
                    o = Math.sqrt(Math.pow(s, 2) + Math.pow(Math.abs(n.left - i.left), 2)),
                    r = Math.asin(s / o) * (180 / Math.PI);
            (r = n.top < i.top ? (i.left < n.left ? 90 - r : 270 + r) : i.left < n.left ? r + 90 : 270 - r), this.angle && (r = dt(r - this.angle, 0, 360)), !0 === this.$q.lang.rtl && (r = 360 - r);
            var a = this.min + (r / 360) * (this.max - this.min);
            if (0 !== this.step) {
             var l = this.computedStep,
                     c = a % l;
             (a = a - c + (Math.abs(c) >= l / 2 ? (c < 0 ? -1 : 1) * l : 0)), (a = parseFloat(a.toFixed(this.decimals)));
            }
            (a = ht(a, this.min, this.max)), this.$emit("drag-value", a), this.model !== a && (this.model = a), this.__updateValue(e);
           },
           __updateValue: function (t) {
            this.value !== this.model && this.$emit("input", this.model), !0 === t && this.$emit("change", this.model);
           },
           __getNameInput: function () {
            return this.$createElement("input", {attrs: this.formAttrs});
           },
          },
          render: function (t) {
           var e = {class: this.classes, attrs: this.attrs, props: Object.assign({}, this.$props, {value: this.model, instantFeedback: this.computedInstantFeedback})};
           return (
                   !0 === this.editable &&
                   ((e.on = this.onEvents),
                           (e.directives = mt(this, "dir", [{name: "touch-pan", value: this.__pan, modifiers: {prevent: !0, stop: !0, mouse: !0}}])),
                           void 0 !== this.name && (e.scopedSlots = {internal: this.__getNameInput})),
                   t(Ri, e, Ot(this, "default"))
                   );
          },
         }),
         Wo = d.passive,
         Yo = t.extend({
          name: "QScrollObserver",
          props: {debounce: [String, Number], horizontal: Boolean, scrollTarget: {default: void 0}},
          render: f,
          data: function () {
           return {pos: 0, dir: !0 === this.horizontal ? "right" : "down", dirChanged: !1, dirChangePos: 0};
          },
          watch: {
           scrollTarget: function () {
            this.__unconfigureScrollTarget(), this.__configureScrollTarget();
           },
          },
          methods: {
           getPosition: function () {
            return {position: this.pos, direction: this.dir, directionChanged: this.dirChanged, inflexionPosition: this.dirChangePos};
           },
           trigger: function (t) {
            !0 === t || 0 === this.debounce || "0" === this.debounce ? this.__emit() : this.timer || (this.timer = this.debounce ? setTimeout(this.__emit, this.debounce) : requestAnimationFrame(this.__emit));
           },
           __emit: function () {
            var t = !0 === this.horizontal ? je : Fe,
                    e = Math.max(0, t(this.__scrollTarget)),
                    i = e - this.pos,
                    n = !0 === this.horizontal ? (i < 0 ? "left" : "right") : i < 0 ? "up" : "down";
            (this.dirChanged = this.dir !== n), this.dirChanged && ((this.dir = n), (this.dirChangePos = this.pos)), (this.timer = null), (this.pos = e), this.$emit("scroll", this.getPosition());
           },
           __configureScrollTarget: function () {
            (this.__scrollTarget = Ie(this.$el.parentNode, this.scrollTarget)), this.__scrollTarget.addEventListener("scroll", this.trigger, Wo), this.trigger(!0);
           },
           __unconfigureScrollTarget: function () {
            void 0 !== this.__scrollTarget && (this.__scrollTarget.removeEventListener("scroll", this.trigger, Wo), (this.__scrollTarget = void 0));
           },
          },
          mounted: function () {
           this.__configureScrollTarget();
          },
          beforeDestroy: function () {
           clearTimeout(this.timer), cancelAnimationFrame(this.timer), this.__unconfigureScrollTarget();
          },
         }),
         Uo = t.extend({
          name: "QLayout",
          mixins: [Lt],
          provide: function () {
           return {layout: this};
          },
          props: {
           container: Boolean,
           view: {
            type: String,
            default: "hhh lpr fff",
            validator: function (t) {
             return /^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(t.toLowerCase());
            },
           },
          },
          data: function () {
           return {
            height: this.$q.screen.height,
            width: !0 === this.container ? 0 : this.$q.screen.width,
            containerHeight: 0,
            scrollbarWidth: !0 === s ? 0 : Ue(),
            header: {size: 0, offset: 0, space: !1},
            right: {size: 300, offset: 0, space: !1},
            footer: {size: 0, offset: 0, space: !1},
            left: {size: 300, offset: 0, space: !1},
            scroll: {position: 0, direction: "down"},
           };
          },
          computed: {
           rows: function () {
            var t = this.view.toLowerCase().split(" ");
            return {top: t[0].split(""), middle: t[1].split(""), bottom: t[2].split("")};
           },
           style: function () {
            return !0 === this.container ? null : {minHeight: this.$q.screen.height + "px"};
           },
           targetStyle: function () {
            var t;
            if (0 !== this.scrollbarWidth)
             return ((t = {})[!0 === this.$q.lang.rtl ? "left" : "right"] = this.scrollbarWidth + "px"), t;
           },
           targetChildStyle: function () {
            var t;
            if (0 !== this.scrollbarWidth)
             return ((t = {})[!0 === this.$q.lang.rtl ? "right" : "left"] = 0), (t[!0 === this.$q.lang.rtl ? "left" : "right"] = "-" + this.scrollbarWidth + "px"), (t.width = "calc(100% + " + this.scrollbarWidth + "px)"), t;
           },
           totalWidth: function () {
            return this.width + this.scrollbarWidth;
           },
           classes: function () {
            return "q-layout q-layout--" + (!0 === this.container ? "containerized" : "standard");
           },
          },
          created: function () {
           this.instances = {};
          },
          render: function (t) {
           var e = t(
                   "div",
                   {class: this.classes, style: this.style, on: Object.assign({}, this.qListeners)},
                   Et([t(Yo, {on: mt(this, "scroll", {scroll: this.__onPageScroll})}), t(sn, {on: mt(this, "resizeOut", {resize: this.__onPageResize})})], this, "default")
                   );
           return !0 === this.container
                   ? t("div", {staticClass: "q-layout-container overflow-hidden"}, [
                    t(sn, {on: mt(this, "resizeIn", {resize: this.__onContainerResize})}),
                    t("div", {staticClass: "absolute-full", style: this.targetStyle}, [t("div", {staticClass: "scroll", style: this.targetChildStyle}, [e])]),
                   ])
                   : e;
          },
          methods: {
           __animate: function () {
            var t = this;
            void 0 !== this.timer ? clearTimeout(this.timer) : document.body.classList.add("q-body--layout-animate"),
                    (this.timer = setTimeout(function () {
                     document.body.classList.remove("q-body--layout-animate"), (t.timer = void 0);
                    }, 150));
           },
           __onPageScroll: function (t) {
            (!0 !== this.container && !0 === document.qScrollPrevented) || (this.scroll = t), void 0 !== this.qListeners.scroll && this.$emit("scroll", t);
           },
           __onPageResize: function (t) {
            var e = t.height,
                    i = t.width,
                    n = !1;
            this.height !== e && ((n = !0), (this.height = e), void 0 !== this.qListeners["scroll-height"] && this.$emit("scroll-height", e), this.__updateScrollbarWidth()),
                    this.width !== i && ((n = !0), (this.width = i)),
                    !0 === n && void 0 !== this.qListeners.resize && this.$emit("resize", {height: e, width: i});
           },
           __onContainerResize: function (t) {
            var e = t.height;
            this.containerHeight !== e && ((this.containerHeight = e), this.__updateScrollbarWidth());
           },
           __updateScrollbarWidth: function () {
            if (!0 === this.container) {
             var t = this.height > this.containerHeight ? Ue() : 0;
             this.scrollbarWidth !== t && (this.scrollbarWidth = t);
            }
           },
          },
         }),
         Ko = t.extend({
          name: "QMarkupTable",
          mixins: [It, Lt],
          props: {
           dense: Boolean,
           flat: Boolean,
           bordered: Boolean,
           square: Boolean,
           separator: {
            type: String,
            default: "horizontal",
            validator: function (t) {
             return ["horizontal", "vertical", "cell", "none"].includes(t);
            },
           },
           wrapCells: Boolean,
          },
          computed: {
           classes: function () {
            return (
                    "q-table--" +
                    this.separator +
                    "-separator" +
                    (!0 === this.isDark ? " q-table--dark q-table__card--dark q-dark" : "") +
                    (!0 === this.dense ? " q-table--dense" : "") +
                    (!0 === this.flat ? " q-table--flat" : "") +
                    (!0 === this.bordered ? " q-table--bordered" : "") +
                    (!0 === this.square ? " q-table--square" : "") +
                    (!1 === this.wrapCells ? " q-table--no-wrap" : "")
                    );
           },
          },
          render: function (t) {
           return t("div", {staticClass: "q-markup-table q-table__container q-table__card", class: this.classes, on: Object.assign({}, this.qListeners)}, [t("table", {staticClass: "q-table"}, Ot(this, "default"))]);
          },
         }),
         Xo = t.extend({
          name: "QNoSsr",
          mixins: [nn, $t, Lt],
          props: {placeholder: String},
          render: function (t) {
           var e = {on: Object.assign({}, this.qListeners)};
           if (!0 === this.canRender) {
            var i = Ot(this, "default");
            return void 0 === i ? i : i.length > 1 ? t(this.tag, e, i) : i[0];
           }
           e.staticClass = "q-no-ssr-placeholder";
           var n = Ot(this, "placeholder");
           return void 0 !== n ? (n.length > 1 ? t(this.tag, e, n) : n[0]) : void 0 !== this.placeholder ? t(this.tag, e, [this.placeholder]) : void 0;
          },
         }),
         Go = t.extend({
          name: "QRadio",
          mixins: [It, Bi, ci, Ei],
          props: {value: {required: !0}, val: {required: !0}, label: String, leftLabel: Boolean, color: String, keepColor: Boolean, dense: Boolean, disable: Boolean, tabindex: [String, Number]},
          computed: {
           isTrue: function () {
            return this.value === this.val;
           },
           classes: function () {
            return (
                    "q-radio cursor-pointer no-outline row inline no-wrap items-center" +
                    (!0 === this.disable ? " disabled" : "") +
                    (!0 === this.isDark ? " q-radio--dark" : "") +
                    (!0 === this.dense ? " q-radio--dense" : "") +
                    (!0 === this.leftLabel ? " reverse" : "")
                    );
           },
           innerClass: function () {
            var t = void 0 === this.color || (!0 !== this.keepColor && !0 !== this.isTrue) ? "" : " text-" + this.color;
            return "q-radio__inner--" + (!0 === this.isTrue ? "truthy" : "falsy") + t;
           },
           computedTabindex: function () {
            return !0 === this.disable ? -1 : this.tabindex || 0;
           },
           formAttrs: function () {
            var t = {type: "radio"};
            return void 0 !== this.name && Object.assign(t, {name: this.name, value: this.val}), t;
           },
           formDomProps: function () {
            if (void 0 !== this.name && !0 === this.isTrue)
             return {checked: !0};
           },
           attrs: function () {
            var t = {tabindex: this.computedTabindex, role: "radio", "aria-label": this.label, "aria-checked": !0 === this.isTrue ? "true" : "false"};
            return !0 === this.disable && (t["aria-disabled"] = "true"), t;
           },
          },
          methods: {
           set: function (t) {
            void 0 !== t && (S(t), this.__refocusTarget(t)), !0 !== this.disable && !0 !== this.isTrue && this.$emit("input", this.val, t);
           },
          },
          render: function (t) {
           var e = this,
                   i = [
                    t("svg", {staticClass: "q-radio__bg absolute non-selectable", attrs: {focusable: "false", viewBox: "0 0 24 24", "aria-hidden": "true"}}, [
                     t("path", {attrs: {d: "M12,22a10,10 0 0 1 -10,-10a10,10 0 0 1 10,-10a10,10 0 0 1 10,10a10,10 0 0 1 -10,10m0,-22a12,12 0 0 0 -12,12a12,12 0 0 0 12,12a12,12 0 0 0 12,-12a12,12 0 0 0 -12,-12"}}),
                     t("path", {staticClass: "q-radio__check", attrs: {d: "M12,6a6,6 0 0 0 -6,6a6,6 0 0 0 6,6a6,6 0 0 0 6,-6a6,6 0 0 0 -6,-6"}}),
                    ]),
                   ];
           !0 !== this.disable && this.__injectFormInput(i, "unshift", "q-radio__native q-ma-none q-pa-none");
           var n = [t("div", {staticClass: "q-radio__inner relative-position", class: this.innerClass, style: this.sizeStyle}, i)];
           void 0 !== this.__refocusTargetEl && n.push(this.__refocusTargetEl);
           var s = void 0 !== this.label ? Et([this.label], this, "default") : Ot(this, "default");
           return (
                   void 0 !== s && n.push(t("div", {staticClass: "q-radio__label q-anchor--skip"}, s)),
                   t(
                           "div",
                           {
                            class: this.classes,
                            attrs: this.attrs,
                            on: mt(this, "inpExt", {
                             click: this.set,
                             keydown: function (t) {
                              (13 !== t.keyCode && 32 !== t.keyCode) || S(t);
                             },
                             keyup: function (t) {
                              (13 !== t.keyCode && 32 !== t.keyCode) || e.set(t);
                             },
                            }),
                           },
                           n
                           )
                   );
          },
         }),
         Zo = t.extend({
          name: "QToggle",
          mixins: [Pi],
          props: {icon: String, checkedIcon: String, uncheckedIcon: String, indeterminateIcon: String, iconColor: String},
          computed: {
           computedIcon: function () {
            return (!0 === this.isTrue ? this.checkedIcon : !0 === this.isIndeterminate ? this.indeterminateIcon : this.uncheckedIcon) || this.icon;
           },
           computedIconColor: function () {
            if (!0 === this.isTrue)
             return this.iconColor;
           },
          },
          methods: {
           __getInner: function (t) {
            return [
             t("div", {staticClass: "q-toggle__track"}),
             t("div", {staticClass: "q-toggle__thumb absolute flex flex-center no-wrap"}, void 0 !== this.computedIcon ? [t(zt, {props: {name: this.computedIcon, color: this.computedIconColor}})] : void 0),
            ];
           },
          },
          created: function () {
           this.type = "toggle";
          },
         }),
         Jo = {radio: Go, checkbox: zi, toggle: Zo},
         tr = Object.keys(Jo),
         er = t.extend({
          name: "QOptionGroup",
          mixins: [It, Lt],
          props: {
           value: {required: !0},
           options: {
            type: Array,
            validator: function (t) {
             return t.every(function (t) {
              return "value" in t && "label" in t;
             });
            },
           },
           name: String,
           type: {
            default: "radio",
            validator: function (t) {
             return tr.includes(t);
            },
           },
           color: String,
           keepColor: Boolean,
           dense: Boolean,
           size: String,
           leftLabel: Boolean,
           inline: Boolean,
           disable: Boolean,
          },
          computed: {
           component: function () {
            return Jo[this.type];
           },
           model: function () {
            return Array.isArray(this.value) ? this.value.slice() : this.value;
           },
           classes: function () {
            return "q-option-group q-gutter-x-sm" + (!0 === this.inline ? " q-option-group--inline" : "");
           },
           attrs: function () {
            if ("radio" === this.type) {
             var t = {role: "radiogroup"};
             return !0 === this.disable && (t["aria-disabled"] = "true"), t;
            }
           },
          },
          methods: {
           __update: function (t) {
            this.$emit("input", t);
           },
          },
          created: function () {
           var t = Array.isArray(this.value);
           "radio" === this.type ? t && console.error("q-option-group: model should not be array") : !1 === t && console.error("q-option-group: model should be array in your case");
          },
          render: function (t) {
           var e = this;
           return t(
                   "div",
                   {class: this.classes, attrs: this.attrs, on: Object.assign({}, this.qListeners)},
                   this.options.map(function (i) {
                    return t("div", [
                     t(e.component, {
                      props: {
                       value: e.value,
                       val: i.value,
                       name: void 0 === i.name ? e.name : i.name,
                       disable: e.disable || i.disable,
                       label: i.label,
                       leftLabel: void 0 === i.leftLabel ? e.leftLabel : i.leftLabel,
                       color: void 0 === i.color ? e.color : i.color,
                       checkedIcon: i.checkedIcon,
                       uncheckedIcon: i.uncheckedIcon,
                       dark: i.dark || e.isDark,
                       size: void 0 === i.size ? e.size : i.size,
                       dense: e.dense,
                       keepColor: void 0 === i.keepColor ? e.keepColor : i.keepColor,
                      },
                      on: mt(e, "inp", {input: e.__update}),
                     }),
                    ]);
                   })
                   );
          },
         }),
         ir = t.extend({
          name: "QPage",
          mixins: [Lt],
          inject: {
           pageContainer: {
            default: function () {
             console.error("QPage needs to be child of QPageContainer");
            },
           },
           layout: {},
          },
          props: {padding: Boolean, styleFn: Function},
          computed: {
           style: function () {
            var t = (!0 === this.layout.header.space ? this.layout.header.size : 0) + (!0 === this.layout.footer.space ? this.layout.footer.size : 0);
            if ("function" == typeof this.styleFn) {
             var e = !0 === this.layout.container ? this.layout.containerHeight : this.$q.screen.height;
             return this.styleFn(t, e);
            }
            return {minHeight: !0 === this.layout.container ? this.layout.containerHeight - t + "px" : 0 === this.$q.screen.height ? "calc(100vh - " + t + "px)" : this.$q.screen.height - t + "px"};
           },
           classes: function () {
            if (!0 === this.padding)
             return "q-layout-padding";
           },
          },
          render: function (t) {
           return t("main", {staticClass: "q-page", style: this.style, class: this.classes, on: Object.assign({}, this.qListeners)}, Ot(this, "default"));
          },
         }),
         nr = t.extend({
          name: "QPageContainer",
          mixins: [Lt],
          inject: {
           layout: {
            default: function () {
             console.error("QPageContainer needs to be child of QLayout");
            },
           },
          },
          provide: {pageContainer: !0},
          computed: {
           style: function () {
            var t = {};
            return (
                    !0 === this.layout.header.space && (t.paddingTop = this.layout.header.size + "px"),
                    !0 === this.layout.right.space && (t["padding" + (!0 === this.$q.lang.rtl ? "Left" : "Right")] = this.layout.right.size + "px"),
                    !0 === this.layout.footer.space && (t.paddingBottom = this.layout.footer.size + "px"),
                    !0 === this.layout.left.space && (t["padding" + (!0 === this.$q.lang.rtl ? "Right" : "Left")] = this.layout.left.size + "px"),
                    t
                    );
           },
          },
          render: function (t) {
           return t("div", {staticClass: "q-page-container", style: this.style, on: Object.assign({}, this.qListeners)}, Ot(this, "default"));
          },
         }),
         sr = t.extend({
          name: "QPageSticky",
          mixins: [Lt],
          inject: {
           layout: {
            default: function () {
             console.error("QPageSticky needs to be child of QLayout");
            },
           },
          },
          props: {
           position: {
            type: String,
            default: "bottom-right",
            validator: function (t) {
             return ["top-right", "top-left", "bottom-right", "bottom-left", "top", "right", "bottom", "left"].includes(t);
            },
           },
           offset: {
            type: Array,
            validator: function (t) {
             return 2 === t.length;
            },
           },
           expand: Boolean,
          },
          computed: {
           attach: function () {
            var t = this.position;
            return {top: t.indexOf("top") > -1, right: t.indexOf("right") > -1, bottom: t.indexOf("bottom") > -1, left: t.indexOf("left") > -1, vertical: "top" === t || "bottom" === t, horizontal: "left" === t || "right" === t};
           },
           top: function () {
            return this.layout.header.offset;
           },
           right: function () {
            return this.layout.right.offset;
           },
           bottom: function () {
            return this.layout.footer.offset;
           },
           left: function () {
            return this.layout.left.offset;
           },
           style: function () {
            var t = 0,
                    e = 0,
                    i = this.attach,
                    n = !0 === this.$q.lang.rtl ? -1 : 1;
            !0 === i.top && 0 !== this.top ? (e = this.top + "px") : !0 === i.bottom && 0 !== this.bottom && (e = -this.bottom + "px"),
                    !0 === i.left && 0 !== this.left ? (t = n * this.left + "px") : !0 === i.right && 0 !== this.right && (t = -n * this.right + "px");
            var s = {transform: "translate(" + t + ", " + e + ")"};
            return (
                    this.offset && (s.margin = this.offset[1] + "px " + this.offset[0] + "px"),
                    !0 === i.vertical
                    ? (0 !== this.left && (s[!0 === this.$q.lang.rtl ? "right" : "left"] = this.left + "px"), 0 !== this.right && (s[!0 === this.$q.lang.rtl ? "left" : "right"] = this.right + "px"))
                    : !0 === i.horizontal && (0 !== this.top && (s.top = this.top + "px"), 0 !== this.bottom && (s.bottom = this.bottom + "px")),
                    s
                    );
           },
           classes: function () {
            return "fixed-" + this.position + " q-page-sticky--" + (!0 === this.expand ? "expand" : "shrink");
           },
          },
          render: function (t) {
           var e = Ot(this, "default");
           return t("div", {staticClass: "q-page-sticky row flex-center", class: this.classes, style: this.style, on: Object.assign({}, this.qListeners)}, !0 === this.expand ? e : [t("div", e)]);
          },
         }),
         or = t.extend({
          name: "QPageScroller",
          mixins: [sr],
          props: {
           scrollOffset: {type: Number, default: 1e3},
           reverse: Boolean,
           duration: {type: Number, default: 300},
           offset: {
            default: function () {
             return [18, 18];
            },
           },
          },
          inject: {
           layout: {
            default: function () {
             console.error("QPageScroller needs to be used within a QLayout");
            },
           },
          },
          data: function () {
           return {showing: this.__isVisible()};
          },
          computed: {
           scrollHeight: function () {
            return this.layout.height - (!0 === this.layout.container ? this.layout.containerHeight : this.$q.screen.height);
           },
           onEvents: function () {
            return Object.assign({}, this.qListeners, {click: this.__onClick});
           },
          },
          watch: {
           "layout.scroll.position": function () {
            this.__updateVisibility();
           },
           reverse: {
            handler: function (t) {
             !0 === t ? void 0 === this.heightWatcher && (this.heightWatcher = this.$watch("scrollHeight", this.__updateVisibility)) : void 0 !== this.heightWatcher && this.__cleanup();
            },
            immediate: !0,
           },
          },
          methods: {
           __isVisible: function () {
            return !0 === this.reverse ? this.scrollHeight - this.layout.scroll.position > this.scrollOffset : this.layout.scroll.position > this.scrollOffset;
           },
           __onClick: function (t) {
            We(Ie(!0 === this.layout.container ? this.$el : this.layout.$el), !0 === this.reverse ? this.layout.height : 0, this.duration), this.$emit("click", t);
           },
           __updateVisibility: function () {
            var t = this.__isVisible();
            this.showing !== t && (this.showing = t);
           },
           __cleanup: function () {
            this.heightWatcher(), (this.heightWatcher = void 0);
           },
          },
          render: function (t) {
           return t("transition", {props: {name: "q-transition--fade"}}, !0 === this.showing ? [t("div", {staticClass: "q-page-scroller", on: this.onEvents}, [sr.options.render.call(this, t)])] : null);
          },
          beforeDestroy: function () {
           void 0 !== this.heightWatcher && this.__cleanup();
          },
         }),
         rr = t.extend({
          name: "QPagination",
          mixins: [It, Lt],
          props: {
           value: {type: Number, required: !0},
           min: {type: Number, default: 1},
           max: {type: Number, required: !0},
           color: {type: String, default: "primary"},
           textColor: String,
           activeColor: String,
           activeTextColor: String,
           inputStyle: [Array, String, Object],
           inputClass: [Array, String, Object],
           size: String,
           disable: Boolean,
           input: Boolean,
           iconPrev: String,
           iconNext: String,
           iconFirst: String,
           iconLast: String,
           toFn: Function,
           boundaryLinks: {type: Boolean, default: null},
           boundaryNumbers: {type: Boolean, default: null},
           directionLinks: {type: Boolean, default: null},
           ellipses: {type: Boolean, default: null},
           maxPages: {
            type: Number,
            default: 0,
            validator: function (t) {
             return t >= 0;
            },
           },
           ripple: {type: [Boolean, Object], default: null},
           round: Boolean,
           rounded: Boolean,
           flat: Boolean,
           outline: Boolean,
           unelevated: Boolean,
           push: Boolean,
           glossy: Boolean,
           dense: Boolean,
           padding: {type: String, default: "3px 2px"},
          },
          data: function () {
           return {newPage: null};
          },
          watch: {
           min: function () {
            this.model = this.value;
           },
           max: function () {
            this.model = this.value;
           },
          },
          computed: {
           model: {
            get: function () {
             return this.value;
            },
            set: function (t) {
             if (((t = parseInt(t, 10)), !this.disable && !isNaN(t) && 0 !== t)) {
              var e = ht(t, this.min, this.max);
              this.$emit("input", e);
             }
            },
           },
           inputPlaceholder: function () {
            return this.model + " / " + this.max;
           },
           __boundaryLinks: function () {
            return this.__getBool(this.boundaryLinks, this.input);
           },
           __boundaryNumbers: function () {
            return this.__getBool(this.boundaryNumbers, !this.input);
           },
           __directionLinks: function () {
            return this.__getBool(this.directionLinks, this.input);
           },
           __ellipses: function () {
            return this.__getBool(this.ellipses, !this.input);
           },
           icons: function () {
            var t = [this.iconFirst || this.$q.iconSet.pagination.first, this.iconPrev || this.$q.iconSet.pagination.prev, this.iconNext || this.$q.iconSet.pagination.next, this.iconLast || this.$q.iconSet.pagination.last];
            return !0 === this.$q.lang.rtl ? t.reverse() : t;
           },
           attrs: function () {
            if (!0 === this.disable)
             return {"aria-disabled": "true"};
           },
           btnProps: function () {
            return {
             round: this.round,
             rounded: this.rounded,
             outline: this.outline,
             unelevated: this.unelevated,
             push: this.push,
             glossy: this.glossy,
             dense: this.dense,
             padding: this.padding,
             color: this.color,
             flat: !0,
             size: this.size,
             ripple: null === this.ripple || this.ripple,
            };
           },
           activeBtnProps: function () {
            return {flat: this.flat, color: this.activeColor || this.color, textColor: this.activeTextColor || this.textColor};
           },
          },
          methods: {
           set: function (t) {
            this.model = t;
           },
           setByOffset: function (t) {
            this.model = this.model + t;
           },
           __update: function () {
            (this.model = this.newPage), (this.newPage = null);
           },
           __getBool: function (t, e) {
            return [!0, !1].includes(t) ? t : e;
           },
           __getBtn: function (t, e, i, n) {
            var s = this;
            return (
                    (e.props = Object.assign({}, this.btnProps, i)),
                    void 0 !== n &&
                    (void 0 !== this.toFn
                            ? (e.props.to = this.toFn(n))
                            : (e.on = {
                             click: function () {
                              return s.set(n);
                             },
                            })),
                    t(ye, e)
                    );
           },
          },
          render: function (t) {
           var e = this,
                   i = [],
                   n = [],
                   s = [];
           if (
                   (this.__boundaryLinks &&
                           (i.push(this.__getBtn(t, {key: "bls"}, {disable: this.disable || this.value <= this.min, icon: this.icons[0]}, this.min)),
                                   n.unshift(this.__getBtn(t, {key: "ble"}, {disable: this.disable || this.value >= this.max, icon: this.icons[3]}, this.max))),
                           this.__directionLinks &&
                           (i.push(this.__getBtn(t, {key: "bdp"}, {disable: this.disable || this.value <= this.min, icon: this.icons[1]}, this.value - 1)),
                                   n.unshift(this.__getBtn(t, {key: "bdn"}, {disable: this.disable || this.value >= this.max, icon: this.icons[2]}, this.value + 1))),
                           !0 === this.input)
                   )
            s.push(
                    t(Io, {
                     staticClass: "inline",
                     style: {width: this.inputPlaceholder.length / 1.5 + "em"},
                     props: {type: "number", dense: !0, value: this.newPage, disable: this.disable, dark: this.isDark, borderless: !0, inputClass: this.inputClass, inputStyle: this.inputStyle},
                     attrs: {placeholder: this.inputPlaceholder, min: this.min, max: this.max},
                     on: mt(this, "inp", {
                      input: function (t) {
                       e.newPage = t;
                      },
                      keyup: function (t) {
                       !0 === tt(t, 13) && e.__update();
                      },
                      blur: this.__update,
                     }),
                    })
                    );
           else {
            var o = Math.max(this.maxPages, 1 + (this.__ellipses ? 2 : 0) + (this.__boundaryNumbers ? 2 : 0)),
                    r = this.min,
                    a = this.max,
                    l = !1,
                    c = !1,
                    u = !1,
                    h = !1;
            this.maxPages &&
                    o < this.max - this.min + 1 &&
                    ((o = 1 + 2 * Math.floor(o / 2)),
                            (r = Math.max(this.min, Math.min(this.max - o + 1, this.value - Math.floor(o / 2)))),
                            (a = Math.min(this.max, r + o - 1)),
                            this.__boundaryNumbers && ((u = !0), (r += 1)),
                            this.__ellipses && r > this.min + (this.__boundaryNumbers ? 1 : 0) && ((l = !0), (r += 1)),
                            this.__boundaryNumbers && ((h = !0), (a -= 1)),
                            this.__ellipses && a < this.max - (this.__boundaryNumbers ? 1 : 0) && ((c = !0), (a -= 1)));
            var d = {minWidth: Math.max(2, String(this.max).length) + "em"};
            if (u) {
             var p = this.min === this.value;
             i.push(this.__getBtn(t, {key: "bns", style: d}, {disable: this.disable, flat: !p, textColor: p ? this.textColor : null, label: this.min}, this.min));
            }
            if (h) {
             var f = this.max === this.value;
             n.unshift(this.__getBtn(t, {key: "bne", style: d}, {disable: this.disable, flat: !f, textColor: f ? this.textColor : null, label: this.max}, this.max));
            }
            l && i.push(this.__getBtn(t, {key: "bes", style: d}, {disable: this.disable, label: "???", ripple: !1}, r - 1)),
                    c && n.unshift(this.__getBtn(t, {key: "bee", style: d}, {disable: this.disable, label: "???", ripple: !1}, a + 1));
            for (var m = r; m <= a; m++) {
             var v = {disable: this.disable, flat: !0, label: m};
             m === this.value && Object.assign(v, this.activeBtnProps), s.push(this.__getBtn(t, {key: "bpg" + m, style: d}, v, m));
            }
           }
           return t("div", {staticClass: "q-pagination row no-wrap items-center", class: {disabled: this.disable}, attrs: this.attrs, on: Object.assign({}, this.qListeners)}, [
            i,
            t("div", {staticClass: "row justify-center", on: !0 === this.input ? mt(this, "stop", {input: y}) : null}, [s]),
            n,
           ]);
          },
         });
 function ar(t) {
  var e,
          i,
          n = !1;
  function s() {
   var s = this;
   (i = arguments),
           !0 !== n &&
           ((n = !0),
                   (e = requestAnimationFrame(function () {
                    t.apply(s, i), (i = void 0), (n = !1);
                   })));
  }
  return (
          (s.cancel = function () {
           window.cancelAnimationFrame(e), (n = !1);
          }),
          s
          );
 }
 var lr = d.passive,
         cr = t.extend({
          name: "QParallax",
          mixins: [Lt],
          props: {
           src: String,
           height: {type: Number, default: 500},
           speed: {
            type: Number,
            default: 1,
            validator: function (t) {
             return t >= 0 && t <= 1;
            },
           },
           scrollTarget: {default: void 0},
          },
          data: function () {
           return {scrolling: !1, percentScrolled: 0};
          },
          watch: {
           height: function () {
            !0 === this.working && this.__updatePos();
           },
           scrollTarget: function () {
            !0 === this.working && (this.__stop(), this.__start());
           },
          },
          methods: {
           __update: function (t) {
            (this.percentScrolled = t), void 0 !== this.qListeners.scroll && this.$emit("scroll", t);
           },
           __updatePos: function () {
            var t, e, i;
            this.__scrollTarget === window ? ((t = 0), (i = e = window.innerHeight)) : (i = (t = Gt(this.__scrollTarget).top) + (e = Zt(this.__scrollTarget)));
            var n = Gt(this.$el).top,
                    s = n + this.height;
            if (void 0 !== this.observer || (s > t && n < i)) {
             var o = (i - n) / (this.height + e);
             this.__setPos((this.mediaHeight - this.height) * o * this.speed), this.__update(o);
            }
           },
           __setPos: function (t) {
            this.media.style.transform = "translate3d(-50%," + Math.round(t) + "px,0)";
           },
           __onResize: function () {
            (this.mediaHeight = this.media.naturalHeight || this.media.videoHeight || Zt(this.media)), !0 === this.working && this.__updatePos();
           },
           __start: function () {
            (this.working = !0),
                    (this.__scrollTarget = Ie(this.$el, this.scrollTarget)),
                    this.__scrollTarget.addEventListener("scroll", this.__updatePos, lr),
                    window.addEventListener("resize", this.__resizeHandler, lr),
                    this.__updatePos();
           },
           __stop: function () {
            !0 === this.working && ((this.working = !1), this.__scrollTarget.removeEventListener("scroll", this.__updatePos, lr), window.removeEventListener("resize", this.__resizeHandler, lr), (this.__scrollTarget = void 0));
           },
          },
          render: function (t) {
           return t("div", {staticClass: "q-parallax", style: {height: this.height + "px"}, on: Object.assign({}, this.qListeners)}, [
            t("div", {ref: "mediaParent", staticClass: "q-parallax__media absolute-full"}, void 0 !== this.$scopedSlots.media ? this.$scopedSlots.media() : [t("img", {ref: "media", attrs: {src: this.src}})]),
            t("div", {staticClass: "q-parallax__content absolute-full column flex-center"}, void 0 !== this.$scopedSlots.content ? this.$scopedSlots.content({percentScrolled: this.percentScrolled}) : Ot(this, "default")),
           ]);
          },
          mounted: function () {
           var t = this;
           (this.__setPos = ar(this.__setPos)),
                   (this.__update = ar(this.__update)),
                   (this.__resizeHandler = ar(this.__onResize)),
                   (this.media = void 0 !== this.$scopedSlots.media ? this.$refs.mediaParent.children[0] : this.$refs.media),
                   (this.media.onload = this.media.onloadstart = this.media.loadedmetadata = this.__onResize),
                   this.__onResize(),
                   (this.media.style.display = "initial"),
                   void 0 !== window.IntersectionObserver
                   ? ((this.observer = new IntersectionObserver(function (e) {
                    t[!0 === e[0].isIntersecting ? "__start" : "__stop"]();
                   })),
                           this.observer.observe(this.$el))
                   : this.__start();
          },
          beforeDestroy: function () {
           this.__stop(), void 0 !== this.observer && this.observer.disconnect(), (this.media.onload = this.media.onloadstart = this.media.loadedmetadata = null);
          },
         });
 function ur(t) {
  var e = JSON.stringify(t);
  if (e)
   return JSON.parse(e);
 }
 var hr = t.extend({
  name: "QPopupEdit",
  mixins: [bt],
  props: {
   value: {required: !0},
   title: String,
   buttons: Boolean,
   labelSet: String,
   labelCancel: String,
   color: {type: String, default: "primary"},
   validate: {
    type: Function,
    default: function () {
     return !0;
    },
   },
   autoSave: Boolean,
   cover: {type: Boolean, default: !0},
   contentClass: String,
   disable: Boolean,
  },
  data: function () {
   return {initialValue: ""};
  },
  computed: {
   classes: function () {
    return "q-popup-edit" + (void 0 !== this.contentClass ? " " + this.contentClass : "");
   },
   defaultSlotScope: function () {
    return {initialValue: this.initialValue, value: this.value, emitValue: this.__emitValue, validate: this.validate, set: this.set, cancel: this.cancel};
   },
   menuProps: function () {
    return Object.assign({}, this.qAttrs, {cover: this.cover, contentClass: this.classes});
   },
  },
  methods: {
   set: function () {
    !0 === this.validate(this.value) && (!0 === this.__hasChanged() && this.$emit("save", this.value, this.initialValue), this.__close());
   },
   cancel: function () {
    !0 === this.__hasChanged() && (this.$emit("input", this.initialValue), this.$emit("cancel", this.value, this.initialValue)), this.__close();
   },
   show: function (t) {
    void 0 !== this.$refs.menu && this.$refs.menu.show(t);
   },
   hide: function (t) {
    void 0 !== this.$refs.menu && this.$refs.menu.hide(t);
   },
   __hasChanged: function () {
    return !1 === ki(this.value, this.initialValue);
   },
   __emitValue: function (t) {
    !0 !== this.disable && this.$emit("input", t);
   },
   __close: function () {
    (this.validated = !0), !0 === this.$refs.menu.showing && this.$refs.menu.hide();
   },
   __reposition: function () {
    var t = this;
    this.$nextTick(function () {
     t.$refs.menu.updatePosition();
    });
   },
   __getContent: function (t) {
    var e = Ot(this, "title", this.title),
            i = void 0 === this.$scopedSlots.default ? [] : this.$scopedSlots.default(this.defaultSlotScope).slice();
    return (
            e && i.unshift(t("div", {staticClass: "q-dialog__title q-mt-sm q-mb-sm"}, [e])),
            !0 === this.buttons &&
            i.push(
                    t("div", {staticClass: "q-popup-edit__buttons row justify-center no-wrap"}, [
                     t(ye, {props: {flat: !0, color: this.color, label: this.labelCancel || this.$q.lang.label.cancel}, on: mt(this, "cancel", {click: this.cancel})}),
                     t(ye, {props: {flat: !0, color: this.color, label: this.labelSet || this.$q.lang.label.set}, on: mt(this, "ok", {click: this.set})}),
                    ])
                    ),
            i
            );
   },
  },
  render: function (t) {
   var e = this;
   if (!0 !== this.disable)
    return t(
            ai,
            {
             ref: "menu",
             props: this.menuProps,
             on: mt(this, "menu", {
              "before-show": function () {
               (e.validated = !1), (e.initialValue = ur(e.value)), (e.watcher = e.$watch("value", e.__reposition)), e.$emit("before-show");
              },
              show: function () {
               e.$emit("show");
              },
              "escape-key": this.cancel,
              "before-hide": function () {
               e.watcher(),
                       !1 === e.validated &&
                       !0 === e.__hasChanged() &&
                       (!0 === e.autoSave && !0 === e.validate(e.value) ? e.$emit("save", e.value, e.initialValue) : (e.$emit("cancel", e.value, e.initialValue), e.$emit("input", e.initialValue))),
                       e.$emit("before-hide");
              },
              hide: function () {
               e.$emit("hide");
              },
              keyup: function (t) {
               !0 === tt(t, 13) && e.set();
              },
             }),
            },
            this.__getContent(t)
            );
  },
 }),
         dr = t.extend({
          name: "QPopupProxy",
          mixins: [bt, Lt, xe],
          props: {breakpoint: {type: [String, Number], default: 450}},
          data: function () {
           var t = parseInt(this.breakpoint, 10);
           return {type: this.$q.screen.width < t || this.$q.screen.height < t ? "dialog" : "menu"};
          },
          computed: {
           parsedBreakpoint: function () {
            return parseInt(this.breakpoint, 10);
           },
           onEvents: function () {
            return Object.assign({}, this.qListeners, {hide: this.__onHide});
           },
          },
          watch: {
           "$q.screen.width": function (t) {
            !0 !== this.$refs.popup.showing && this.__updateType(t, this.$q.screen.height, this.parsedBreakpoint);
           },
           "$q.screen.height": function (t) {
            !0 !== this.$refs.popup.showing && this.__updateType(this.$q.screen.width, t, this.parsedBreakpoint);
           },
           breakpoint: function (t) {
            !0 !== this.$refs.popup.showing && this.__updateType(this.$q.screen.width, this.$q.screen.height, parseInt(t, 10));
           },
          },
          methods: {
           toggle: function (t) {
            this.$refs.popup.toggle(t);
           },
           show: function (t) {
            this.$refs.popup.show(t);
           },
           hide: function (t) {
            this.$refs.popup.hide(t);
           },
           __onHide: function (t) {
            this.__updateType(this.$q.screen.width, this.$q.screen.height, this.parsedBreakpoint), this.$emit("hide", t);
           },
           __updateType: function (t, e, i) {
            var n = t < i || e < i ? "dialog" : "menu";
            this.type !== n && (this.type = n);
           },
          },
          render: function (t) {
           var e,
                   i = Ot(this, "default"),
                   n =
                   "menu" === this.type &&
                   void 0 !== i &&
                   void 0 !== i[0] &&
                   void 0 !== i[0].componentOptions &&
                   void 0 !== i[0].componentOptions.Ctor &&
                   void 0 !== i[0].componentOptions.Ctor.sealedOptions &&
                   ["QDate", "QTime", "QCarousel", "QColor"].includes(i[0].componentOptions.Ctor.sealedOptions.name)
                   ? {cover: !0, maxHeight: "99vh"}
           : {},
                   s = {ref: "popup", props: Object.assign({}, n, this.qAttrs), on: this.onEvents};
           return "dialog" === this.type ? (e = ys) : ((e = ai), (s.props.target = this.target), (s.props.contextMenu = this.contextMenu), (s.props.noParentEvent = !0), (s.props.separateClosePopup = !0)), t(e, s, i);
          },
         });
 function pr(t, e) {
  return !0 === e ? {transform: "translateX(100%) scale3d(" + -t + ",1,1)"} : {transform: "scale3d(" + t + ",1,1)"};
 }
 var fr = t.extend({
  name: "QLinearProgress",
  mixins: [Lt, It, Tt({xs: 2, sm: 4, md: 6, lg: 10, xl: 14})],
  props: {value: {type: Number, default: 0}, buffer: Number, color: String, trackColor: String, reverse: Boolean, stripe: Boolean, indeterminate: Boolean, query: Boolean, rounded: Boolean, instantFeedback: Boolean},
  computed: {
   motion: function () {
    return !0 === this.indeterminate || !0 === this.query;
   },
   classes: function () {
    return "q-linear-progress" + (void 0 !== this.color ? " text-" + this.color : "") + (!0 === this.reverse || !0 === this.query ? " q-linear-progress--reverse" : "") + (!0 === this.rounded ? " rounded-borders" : "");
   },
   trackStyle: function () {
    return pr(void 0 !== this.buffer ? this.buffer : 1, this.reverse);
   },
   trackClass: function () {
    return (
            "q-linear-progress__track--with" +
            (!0 === this.instantFeedback ? "out" : "") +
            "-transition q-linear-progress__track--" +
            (!0 === this.isDark ? "dark" : "light") +
            (void 0 !== this.trackColor ? " bg-" + this.trackColor : "")
            );
   },
   modelStyle: function () {
    return pr(!0 === this.motion ? 1 : this.value, this.reverse);
   },
   modelClasses: function () {
    return "q-linear-progress__model--with" + (!0 === this.instantFeedback ? "out" : "") + "-transition q-linear-progress__model--" + (!0 === this.motion ? "in" : "") + "determinate";
   },
   stripeStyle: function () {
    return {width: 100 * this.value + "%"};
   },
   attrs: function () {
    return {role: "progressbar", "aria-valuemin": 0, "aria-valuemax": 1, "aria-valuenow": !0 === this.indeterminate ? void 0 : this.value};
   },
  },
  render: function (t) {
   var e = [
    t("div", {staticClass: "q-linear-progress__track absolute-full", style: this.trackStyle, class: this.trackClass}),
    t("div", {staticClass: "q-linear-progress__model absolute-full", style: this.modelStyle, class: this.modelClasses}),
   ];
   return (
           !0 === this.stripe && !1 === this.motion && e.push(t("div", {staticClass: "q-linear-progress__stripe absolute-full", style: this.stripeStyle})),
           t("div", {style: this.sizeStyle, class: this.classes, attrs: this.attrs, on: Object.assign({}, this.qListeners)}, Et(e, this, "default"))
           );
  },
 }),
         mr = t.extend({
          name: "QPullToRefresh",
          mixins: [Lt],
          directives: {TouchPan: Xi},
          props: {color: String, bgColor: String, icon: String, noMouse: Boolean, disable: Boolean, scrollTarget: {default: void 0}},
          data: function () {
           return {state: "pull", pullRatio: 0, pulling: !1, pullPosition: -40, animating: !1, positionCSS: {}};
          },
          computed: {
           style: function () {
            return {opacity: this.pullRatio, transform: "translateY(" + this.pullPosition + "px) rotate(" + 360 * this.pullRatio + "deg)"};
           },
           classes: function () {
            return "q-pull-to-refresh__puller row flex-center" + (!0 === this.animating ? " q-pull-to-refresh__puller--animating" : "") + (void 0 !== this.bgColor ? " bg-" + this.bgColor : "");
           },
           directives: function () {
            if (!0 !== this.disable) {
             var t = {down: !0, mightPrevent: !0};
             return !0 !== this.noMouse && (t.mouse = !0), [{name: "touch-pan", modifiers: t, value: this.__pull}];
            }
           },
           contentClass: function () {
            return "q-pull-to-refresh__content" + (!0 === this.pulling ? " no-pointer-events" : "");
           },
          },
          watch: {
           scrollTarget: function () {
            this.updateScrollTarget();
           },
          },
          methods: {
           trigger: function () {
            var t = this;
            this.$emit("refresh", function () {
             t.__animateTo({pos: -40, ratio: 0}, function () {
              t.state = "pull";
             });
            });
           },
           updateScrollTarget: function () {
            this.__scrollTarget = Ie(this.$el, this.scrollTarget);
           },
           __pull: function (t) {
            if (!0 !== t.isFinal) {
             if (!0 === this.animating || "refreshing" === this.state)
              return !1;
             if (!0 === t.isFirst) {
              if (0 !== Fe(this.__scrollTarget))
               return !0 === this.pulling && ((this.pulling = !1), (this.state = "pull"), this.__animateTo({pos: -40, ratio: 0})), !1;
              this.pulling = !0;
              var e = this.$el.getBoundingClientRect(),
                      i = e.top,
                      n = e.left;
              this.positionCSS = {top: i + "px", left: n + "px", width: window.getComputedStyle(this.$el).getPropertyValue("width")};
             }
             w(t.evt);
             var s = Math.min(140, Math.max(0, t.distance.y));
             (this.pullPosition = s - 40), (this.pullRatio = ht(s / 60, 0, 1));
             var o = this.pullPosition > 20 ? "pulled" : "pull";
             this.state !== o && (this.state = o);
            } else
             !0 === this.pulling &&
                     ((this.pulling = !1), "pulled" === this.state ? ((this.state = "refreshing"), this.__animateTo({pos: 20}), this.trigger()) : "pull" === this.state && this.__animateTo({pos: -40, ratio: 0}));
           },
           __animateTo: function (t, e) {
            var i = this,
                    n = t.pos,
                    s = t.ratio;
            (this.animating = !0),
                    (this.pullPosition = n),
                    void 0 !== s && (this.pullRatio = s),
                    clearTimeout(this.timer),
                    (this.timer = setTimeout(function () {
                     (i.animating = !1), e && e();
                    }, 300));
           },
          },
          mounted: function () {
           this.updateScrollTarget();
          },
          beforeDestroy: function () {
           clearTimeout(this.timer);
          },
          render: function (t) {
           return t("div", {staticClass: "q-pull-to-refresh", on: Object.assign({}, this.qListeners), directives: this.directives}, [
            t("div", {class: this.contentClass}, Ot(this, "default")),
            t("div", {staticClass: "q-pull-to-refresh__puller-container fixed row flex-center no-pointer-events z-top", style: this.positionCSS}, [
             t("div", {style: this.style, class: this.classes}, [
              "refreshing" !== this.state ? t(zt, {props: {name: this.icon || this.$q.iconSet.pullToRefresh.icon, color: this.color, size: "32px"}}) : t(Xt, {props: {size: "24px", color: this.color}}),
             ]),
            ]),
           ]);
          },
         }),
         vr = 0,
         gr = 1,
         _r = 2,
         br = t.extend({
          name: "QRange",
          mixins: [tn],
          props: {
           value: {
            type: Object,
            default: function () {
             return {min: null, max: null};
            },
            validator: function (t) {
             return "min" in t && "max" in t;
            },
           },
           name: String,
           dragRange: Boolean,
           dragOnlyRange: Boolean,
           leftLabelColor: String,
           leftLabelTextColor: String,
           rightLabelColor: String,
           rightLabelTextColor: String,
           leftLabelValue: [String, Number],
           rightLabelValue: [String, Number],
          },
          data: function () {
           return {model: {min: null === this.value.min ? this.min : this.value.min, max: null === this.value.max ? this.max : this.value.max}, curMinRatio: 0, curMaxRatio: 0};
          },
          watch: {
           "value.min": function (t) {
            this.model.min = null === t ? this.min : t;
           },
           "value.max": function (t) {
            this.model.max = null === t ? this.max : t;
           },
           min: function (t) {
            this.model.min < t && (this.model.min = t), this.model.max < t && (this.model.max = t);
           },
           max: function (t) {
            this.model.min > t && (this.model.min = t), this.model.max > t && (this.model.max = t);
           },
          },
          computed: {
           ratioMin: function () {
            return !0 === this.active ? this.curMinRatio : this.modelMinRatio;
           },
           ratioMax: function () {
            return !0 === this.active ? this.curMaxRatio : this.modelMaxRatio;
           },
           modelMinRatio: function () {
            return 0 === this.minMaxDiff ? 0 : (this.model.min - this.min) / this.minMaxDiff;
           },
           modelMaxRatio: function () {
            return 0 === this.minMaxDiff ? 0 : (this.model.max - this.min) / this.minMaxDiff;
           },
           trackStyle: function () {
            var t;
            return ((t = {})[this.positionProp] = 100 * this.ratioMin + "%"), (t[this.sizeProp] = 100 * (this.ratioMax - this.ratioMin) + "%"), t;
           },
           minThumbStyle: function () {
            var t;
            return ((t = {})[this.positionProp] = 100 * this.ratioMin + "%"), (t["z-index"] = "min" === this.__nextFocus ? 2 : void 0), t;
           },
           maxThumbStyle: function () {
            var t;
            return ((t = {})[this.positionProp] = 100 * this.ratioMax + "%"), t;
           },
           minThumbClass: function () {
            if (!1 === this.preventFocus && "min" === this.focus)
             return "q-slider--focus";
           },
           maxThumbClass: function () {
            if (!1 === this.preventFocus && "max" === this.focus)
             return "q-slider--focus";
           },
           events: function () {
            var t = this;
            if (!0 === this.editable) {
             if (!0 === this.$q.platform.is.mobile)
              return {click: this.__mobileClick};
             var e = {mousedown: this.__activate};
             return (
                     !0 === this.dragOnlyRange &&
                     Object.assign(e, {
                      focus: function () {
                       t.__focus("both");
                      },
                      blur: this.__blur,
                      keydown: this.__keydown,
                      keyup: this.__keyup,
                     }),
                     e
                     );
            }
           },
           minEvents: function () {
            var t = this;
            if (!0 === this.editable && !0 !== this.$q.platform.is.mobile && !0 !== this.dragOnlyRange)
             return {
              focus: function () {
               t.__focus("min");
              },
              blur: this.__blur,
              keydown: this.__keydown,
              keyup: this.__keyup,
             };
           },
           maxEvents: function () {
            var t = this;
            if (!0 === this.editable && !0 !== this.$q.platform.is.mobile && !0 !== this.dragOnlyRange)
             return {
              focus: function () {
               t.__focus("max");
              },
              blur: this.__blur,
              keydown: this.__keydown,
              keyup: this.__keyup,
             };
           },
           minPinClass: function () {
            var t = this.leftLabelColor || this.labelColor;
            if (t)
             return "text-" + t;
           },
           minPinTextClass: function () {
            var t = this.leftLabelTextColor || this.labelTextColor;
            if (t)
             return "text-" + t;
           },
           maxPinClass: function () {
            var t = this.rightLabelColor || this.labelColor;
            if (t)
             return "text-" + t;
           },
           maxPinTextClass: function () {
            var t = this.rightLabelTextColor || this.labelTextColor;
            if (t)
             return "text-" + t;
           },
           minLabel: function () {
            return void 0 !== this.leftLabelValue ? this.leftLabelValue : this.model.min;
           },
           maxLabel: function () {
            return void 0 !== this.rightLabelValue ? this.rightLabelValue : this.model.max;
           },
           minPinStyle: function () {
            var t = !0 === this.reverse ? -this.ratioMin : this.ratioMin - 1;
            return this.__getPinStyle(t, this.ratioMin);
           },
           maxPinStyle: function () {
            var t = !0 === this.reverse ? -this.ratioMax : this.ratioMax - 1;
            return this.__getPinStyle(t, this.ratioMax);
           },
           formAttrs: function () {
            return {type: "hidden", name: this.name, value: this.value.min + "|" + this.value.max};
           },
          },
          methods: {
           __updateValue: function (t) {
            (this.model.min === this.value.min && this.model.max === this.value.max) || this.$emit("input", this.model), !0 === t && this.$emit("change", this.model);
           },
           __getDragging: function (t) {
            var e,
                    i = this.$el.getBoundingClientRect(),
                    n = i.left,
                    s = i.top,
                    o = i.width,
                    r = i.height,
                    a = !0 === this.dragOnlyRange ? 0 : !0 === this.vertical ? this.$refs.minThumb.offsetHeight / (2 * r) : this.$refs.minThumb.offsetWidth / (2 * o),
                    l = {left: n, top: s, width: o, height: r, valueMin: this.model.min, valueMax: this.model.max, ratioMin: this.modelMinRatio, ratioMax: this.modelMaxRatio},
                    c = Zi(t, l, this.isReversed, this.vertical);
            return (
                    !0 !== this.dragOnlyRange && c < l.ratioMin + a
                    ? (e = vr)
                    : !0 === this.dragOnlyRange || c < l.ratioMax - a
                    ? !0 === this.dragRange || !0 === this.dragOnlyRange
                    ? ((e = gr), Object.assign(l, {offsetRatio: c, offsetModel: Ji(c, this.min, this.max, this.step, this.decimals), rangeValue: l.valueMax - l.valueMin, rangeRatio: l.ratioMax - l.ratioMin}))
                    : (e = l.ratioMax - c < c - l.ratioMin ? _r : vr)
                    : (e = _r),
                    (l.type = e),
                    (this.__nextFocus = void 0),
                    l
                    );
           },
           __updatePosition: function (t, e) {
            void 0 === e && (e = this.dragging);
            var i,
                    n = Zi(t, e, this.isReversed, this.vertical),
                    s = Ji(n, this.min, this.max, this.step, this.decimals);
            switch (e.type) {
             case vr:
              n <= e.ratioMax ? ((i = {minR: n, maxR: e.ratioMax, min: s, max: e.valueMax}), (this.__nextFocus = "min")) : ((i = {minR: e.ratioMax, maxR: n, min: e.valueMax, max: s}), (this.__nextFocus = "max"));
              break;
             case _r:
              n >= e.ratioMin ? ((i = {minR: e.ratioMin, maxR: n, min: e.valueMin, max: s}), (this.__nextFocus = "max")) : ((i = {minR: n, maxR: e.ratioMin, min: s, max: e.valueMin}), (this.__nextFocus = "min"));
              break;
             case gr:
              var o = n - e.offsetRatio,
                      r = ht(e.ratioMin + o, 0, 1 - e.rangeRatio),
                      a = s - e.offsetModel,
                      l = ht(e.valueMin + a, this.min, this.max - e.rangeValue);
              i = {minR: r, maxR: r + e.rangeRatio, min: parseFloat(l.toFixed(this.decimals)), max: parseFloat((l + e.rangeValue).toFixed(this.decimals))};
            }
            (this.model = {min: i.min, max: i.max}),
                    (null !== this.model.min && null !== this.model.max) || ((this.model.min = i.min || this.min), (this.model.max = i.max || this.max)),
                    !0 !== this.snap || 0 === this.step
                    ? ((this.curMinRatio = i.minR), (this.curMaxRatio = i.maxR))
                    : ((this.curMinRatio = 0 === this.minMaxDiff ? 0 : (this.model.min - this.min) / this.minMaxDiff), (this.curMaxRatio = 0 === this.minMaxDiff ? 0 : (this.model.max - this.min) / this.minMaxDiff));
           },
           __focus: function (t) {
            this.focus = t;
           },
           __keydown: function (t) {
            var e;
            if (Gi.includes(t.keyCode)) {
             S(t);
             var i = ([34, 33].includes(t.keyCode) ? 10 : 1) * this.computedStep,
                     n = [34, 37, 40].includes(t.keyCode) ? -i : i;
             if (this.dragOnlyRange) {
              var s = this.dragOnlyRange ? this.model.max - this.model.min : 0,
                      o = ht(parseFloat((this.model.min + n).toFixed(this.decimals)), this.min, this.max - s);
              this.model = {min: o, max: parseFloat((o + s).toFixed(this.decimals))};
             } else {
              if (!1 === this.focus)
               return;
              var r = this.focus;
              this.model = Object.assign({}, this.model, (((e = {})[r] = ht(parseFloat((this.model[r] + n).toFixed(this.decimals)), "min" === r ? this.min : this.model.min, "max" === r ? this.max : this.model.max)), e));
             }
             this.__updateValue();
            }
           },
           __getThumb: function (t, e) {
            var i = [this.__getThumbSvg(t), t("div", {staticClass: "q-slider__focus-ring"})];
            return (
                    (!0 !== this.label && !0 !== this.labelAlways) ||
                    i.push(
                            t("div", {staticClass: "q-slider__pin q-slider__pin" + this.axis + " absolute", style: this[e + "PinStyle"].pin, class: this[e + "PinClass"]}, [
                             t("div", {staticClass: "q-slider__pin-text-container q-slider__pin-text-container" + this.axis, style: this[e + "PinStyle"].pinTextContainer}, [
                              t("span", {staticClass: "q-slider__pin-text", class: this[e + "PinTextClass"]}, [this[e + "Label"]]),
                             ]),
                            ]),
                            t("div", {staticClass: "q-slider__arrow q-slider__arrow" + this.axis, class: this[e + "PinClass"]})
                            ),
                    t(
                            "div",
                            {
                             ref: e + "Thumb",
                             staticClass: "q-slider__thumb-container q-slider__thumb-container" + this.axis + " absolute non-selectable",
                             style: this[e + "ThumbStyle"],
                             class: this[e + "ThumbClass"],
                             on: this[e + "Events"],
                             attrs: {tabindex: !0 !== this.dragOnlyRange ? this.computedTabindex : null},
                            },
                            i
                            )
                    );
           },
          },
          render: function (t) {
           var e = [t("div", {staticClass: "q-slider__track q-slider__track" + this.axis + " absolute", style: this.trackStyle})];
           !0 === this.markers && e.push(t("div", {staticClass: "q-slider__track-markers q-slider__track-markers" + this.axis + " absolute-full fit", style: this.markerStyle}));
           var i = [t("div", {staticClass: "q-slider__track-container q-slider__track-container" + this.axis + " absolute"}, e), this.__getThumb(t, "min"), this.__getThumb(t, "max")];
           return (
                   void 0 !== this.name && !0 !== this.disable && this.__injectFormInput(i, "push"),
                   t(
                           "div",
                           {
                            staticClass: null === this.value.min || null === this.value.max ? "q-slider--no-value" : void 0,
                            attrs: Object.assign({}, this.attrs, {"aria-valuenow": this.value.min + "|" + this.value.max, tabindex: !0 === this.dragOnlyRange && !0 !== this.$q.platform.is.mobile ? this.computedTabindex : null}),
                            class: this.classes,
                            on: this.events,
                            directives: this.panDirectives,
                           },
                           i
                           )
                   );
          },
         }),
         yr = t.extend({
          name: "QRating",
          mixins: [Mt, ci, Lt],
          props: {
           value: {type: Number, required: !0},
           max: {type: [String, Number], default: 5},
           icon: [String, Array],
           iconHalf: [String, Array],
           iconSelected: [String, Array],
           color: [String, Array],
           colorHalf: [String, Array],
           colorSelected: [String, Array],
           noReset: Boolean,
           noDimming: Boolean,
           readonly: Boolean,
           disable: Boolean,
          },
          data: function () {
           return {mouseModel: 0};
          },
          computed: {
           editable: function () {
            return !0 !== this.readonly && !0 !== this.disable;
           },
           classes: function () {
            return (
                    "q-rating--" +
                    (!0 === this.editable ? "" : "non-") +
                    "editable" +
                    (!0 === this.noDimming ? " q-rating--no-dimming" : "") +
                    (!0 === this.disable ? " disabled" : "") +
                    (void 0 !== this.color && !1 === Array.isArray(this.color) ? " text-" + this.color : "")
                    );
           },
           iconData: function () {
            var t = !0 === Array.isArray(this.icon) ? this.icon.length : 0,
                    e = !0 === Array.isArray(this.iconSelected) ? this.iconSelected.length : 0,
                    i = !0 === Array.isArray(this.iconHalf) ? this.iconHalf.length : 0,
                    n = !0 === Array.isArray(this.color) ? this.color.length : 0,
                    s = !0 === Array.isArray(this.colorSelected) ? this.colorSelected.length : 0,
                    o = !0 === Array.isArray(this.colorHalf) ? this.colorHalf.length : 0;
            return {
             iconLen: t,
             icon: t > 0 ? this.icon[t - 1] : this.icon,
             selIconLen: e,
             selIcon: e > 0 ? this.iconSelected[e - 1] : this.iconSelected,
             halfIconLen: i,
             halfIcon: i > 0 ? this.iconHalf[e - 1] : this.iconHalf,
             colorLen: n,
             color: n > 0 ? this.color[n - 1] : this.color,
             selColorLen: s,
             selColor: s > 0 ? this.colorSelected[s - 1] : this.colorSelected,
             halfColorLen: o,
             halfColor: o > 0 ? this.colorHalf[o - 1] : this.colorHalf,
            };
           },
           attrs: function () {
            return !0 === this.disable ? {"aria-disabled": "true"} : !0 === this.readonly ? {"aria-readonly": "true"} : void 0;
           },
          },
          methods: {
           __set: function (t) {
            if (!0 === this.editable) {
             var e = ht(parseInt(t, 10), 1, parseInt(this.max, 10)),
                     i = !0 !== this.noReset && this.value === e ? 0 : e;
             i !== this.value && this.$emit("input", i), (this.mouseModel = 0);
            }
           },
           __setHoverValue: function (t) {
            !0 === this.editable && (this.mouseModel = t);
           },
           __keyup: function (t, e) {
            switch (t.keyCode) {
             case 13:
             case 32:
              return this.__set(e), S(t);
             case 37:
             case 40:
              return this.$refs["rt" + (e - 1)] && this.$refs["rt" + (e - 1)].focus(), S(t);
             case 39:
             case 38:
              return this.$refs["rt" + (e + 1)] && this.$refs["rt" + (e + 1)].focus(), S(t);
            }
           },
          },
          render: function (t) {
           for (
                   var e,
                   i = this,
                   n = [],
                   s = !0 === this.editable ? 0 : null,
                   o = this.iconData,
                   r = Math.ceil(this.value),
                   a = void 0 === this.iconHalf || r === this.value ? -1 : r,
                   l = function (l) {
                    var c = (0 === i.mouseModel && i.value >= l) || (i.mouseModel > 0 && i.mouseModel >= l),
                            u = a === l && i.mouseModel < l,
                            h = i.mouseModel > 0 && (!0 === u ? r : i.value) >= l && i.mouseModel < l,
                            d =
                            !0 === u
                            ? l <= o.halfIconLen
                            ? i.iconHalf[l - 1]
                            : o.halfIcon
                            : void 0 === o.selIcon || (!0 !== c && !0 !== h)
                            ? l <= o.iconLen
                            ? i.icon[l - 1]
                            : o.icon
                            : l <= o.selIconLen
                            ? i.iconSelected[l - 1]
                            : o.selIcon,
                            p =
                            !0 === u
                            ? l <= o.halfColorLen
                            ? i.colorHalf[l - 1]
                            : o.halfColor
                            : void 0 !== o.selColor && !0 === c
                            ? l <= o.selColorLen
                            ? i.colorSelected[l - 1]
                            : o.selColor
                            : l <= o.colorLen
                            ? i.color[l - 1]
                            : o.color;
                    n.push(
                            t(
                                    zt,
                                    {
                                     key: l,
                                     ref: "rt" + l,
                                     staticClass: "q-rating__icon",
                                     class: ((e = {"q-rating__icon--active": !0 === c || !0 === u, "q-rating__icon--exselected": h, "q-rating__icon--hovered": i.mouseModel === l}), (e["text-" + p] = void 0 !== p), e),
                                     props: {name: d || i.$q.iconSet.rating.icon},
                                     attrs: {tabindex: s},
                                     on: mt(i, "i#" + l, {
                                      click: function () {
                                       i.__set(l);
                                      },
                                      mouseover: function () {
                                       i.__setHoverValue(l);
                                      },
                                      mouseout: function () {
                                       i.mouseModel = 0;
                                      },
                                      focus: function () {
                                       i.__setHoverValue(l);
                                      },
                                      blur: function () {
                                       i.mouseModel = 0;
                                      },
                                      keyup: function (t) {
                                       i.__keyup(t, l);
                                      },
                                     }),
                                    },
                                    Ot(i, "tip-" + l)
                                    )
                            );
                   },
                   c = 1;
                   c <= i.max;
                   c++
                   )
            l(c);
           return (
                   void 0 !== this.name && !0 !== this.disable && this.__injectFormInput(n, "push"),
                   t("div", {staticClass: "q-rating row inline items-center", class: this.classes, style: this.sizeStyle, attrs: this.attrs, on: Object.assign({}, this.qListeners)}, n)
                   );
          },
         }),
         wr = t.extend({
          name: "QResponsive",
          mixins: [xo, Lt],
          render: function (t) {
           return t("div", {staticClass: "q-responsive", on: Object.assign({}, this.qListeners)}, [
            t("div", {staticClass: "q-responsive__filler overflow-hidden"}, [t("div", {style: this.ratioStyle})]),
            t("div", {staticClass: "q-responsive__content absolute-full fit"}, Ot(this, "default")),
           ]);
          },
         }),
         Sr = t.extend({
          name: "QScrollArea",
          mixins: [It],
          directives: {TouchPan: Xi},
          props: {
           barStyle: [Array, String, Object],
           thumbStyle: Object,
           contentStyle: [Array, String, Object],
           contentActiveStyle: [Array, String, Object],
           delay: {type: [String, Number], default: 1e3},
           visible: {type: Boolean, default: null},
           horizontal: Boolean,
          },
          data: function () {
           return {tempShowing: !1, panning: !1, hover: !1, containerWidth: 0, containerHeight: 0, scrollPosition: 0, scrollSize: 0};
          },
          computed: {
           classes: function () {
            return "q-scrollarea" + (!0 === this.isDark ? " q-scrollarea--dark" : "");
           },
           thumbHidden: function () {
            return (!0 !== (null === this.visible ? this.hover : this.visible) && !1 === this.tempShowing && !1 === this.panning) || this.scrollSize <= this.containerSize;
           },
           thumbSize: function () {
            return Math.round(ht((this.containerSize * this.containerSize) / this.scrollSize, 50, this.containerSize));
           },
           style: function () {
            var t = this.scrollPercentage * (this.containerSize - this.thumbSize);
            return Object.assign({}, this.thumbStyle, !0 === this.horizontal ? {left: t + "px", width: this.thumbSize + "px"} : {top: t + "px", height: this.thumbSize + "px"});
           },
           mainStyle: function () {
            return !0 === this.thumbHidden ? this.contentStyle : this.contentActiveStyle;
           },
           scrollPercentage: function () {
            var t = ht(this.scrollPosition / (this.scrollSize - this.containerSize), 0, 1);
            return Math.round(1e4 * t) / 1e4;
           },
           containerSize: function () {
            return this["container" + this.dirProps.suffix];
           },
           dirProps: function () {
            return !0 === this.horizontal
                    ? {prefix: "horizontal", suffix: "Width", scroll: "scrollLeft", classSuffix: "h absolute-bottom", dir: "right", dist: "x"}
            : {prefix: "vertical", suffix: "Height", scroll: "scrollTop", classSuffix: "v absolute-right", dir: "down", dist: "y"};
           },
           thumbClass: function () {
            return "q-scrollarea__thumb--" + this.dirProps.classSuffix + (!0 === this.thumbHidden ? " q-scrollarea__thumb--invisible" : "");
           },
           barClass: function () {
            return "q-scrollarea__bar--" + this.dirProps.classSuffix + (!0 === this.thumbHidden ? " q-scrollarea__bar--invisible" : "");
           },
           thumbDirectives: function () {
            var t;
            return [{name: "touch-pan", modifiers: ((t = {}), (t[!0 === this.horizontal ? "horizontal" : "vertical"] = !0), (t.prevent = !0), (t.mouse = !0), (t.mouseAllDir = !0), t), value: this.__panThumb}];
           },
          },
          methods: {
           getScrollTarget: function () {
            return this.$refs.target;
           },
           getScrollPosition: function () {
            return this.scrollPosition;
           },
           setScrollPosition: function (t, e) {
            (!0 === this.horizontal ? Ye : We)(this.$refs.target, t, e);
           },
           setScrollPercentage: function (t, e) {
            this.setScrollPosition(t * (this.scrollSize - this.containerSize), e);
           },
           __updateContainer: function (t) {
            var e = t.height,
                    i = t.width,
                    n = !1;
            this.containerWidth !== i && ((this.containerWidth = i), (n = !0)), this.containerHeight !== e && ((this.containerHeight = e), (n = !0)), !0 === n && this.__startTimer();
           },
           __updateScroll: function (t) {
            this.scrollPosition !== t.position && ((this.scrollPosition = t.position), this.__startTimer());
           },
           __updateScrollSize: function (t) {
            var e = t.height,
                    i = t.width;
            !0 === this.horizontal ? this.scrollSize !== i && ((this.scrollSize = i), this.__startTimer()) : this.scrollSize !== e && ((this.scrollSize = e), this.__startTimer());
           },
           __panThumb: function (t) {
            if (!0 === t.isFirst) {
             if (!0 === this.thumbHidden)
              return;
             (this.refPos = this.scrollPosition), (this.panning = !0);
            } else if (!0 !== this.panning)
             return;
            !0 === t.isFinal && (this.panning = !1);
            var e = (this.scrollSize - this.containerSize) / (this.containerSize - this.thumbSize),
                    i = t.distance[this.dirProps.dist],
                    n = this.refPos + (t.direction === this.dirProps.dir ? 1 : -1) * i * e;
            this.__setScroll(n);
           },
           __mouseDown: function (t) {
            if (!0 !== this.thumbHidden) {
             var e = t["offset" + (!0 === this.horizontal ? "X" : "Y")] - this.thumbSize / 2;
             this.__setScroll((e / this.containerSize) * this.scrollSize), void 0 !== this.$refs.thumb && this.$refs.thumb.dispatchEvent(new MouseEvent(t.type, t));
            }
           },
           __startTimer: function () {
            var t = this;
            !0 === this.tempShowing ? clearTimeout(this.timer) : (this.tempShowing = !0),
                    (this.timer = setTimeout(function () {
                     t.tempShowing = !1;
                    }, this.delay)),
                    this.__emitScroll();
           },
           __setScroll: function (t) {
            this.$refs.target[this.dirProps.scroll] = t;
           },
          },
          render: function (t) {
           var e = this;
           return t(
                   "div",
                   {
                    class: this.classes,
                    on: mt(this, "desk", {
                     mouseenter: function () {
                      e.hover = !0;
                     },
                     mouseleave: function () {
                      e.hover = !1;
                     },
                    }),
                   },
                   [
                    t("div", {ref: "target", staticClass: "scroll relative-position fit hide-scrollbar"}, [
                     t(
                             "div",
                             {staticClass: "absolute", style: this.mainStyle, class: "full-" + (!0 === this.horizontal ? "height" : "width")},
                             Et([t(sn, {on: mt(this, "resizeIn", {resize: this.__updateScrollSize})})], this, "default")
                             ),
                     t(Yo, {props: {horizontal: this.horizontal}, on: mt(this, "scroll", {scroll: this.__updateScroll})}),
                    ]),
                    t(sn, {on: mt(this, "resizeOut", {resize: this.__updateContainer})}),
                    t("div", {staticClass: "q-scrollarea__bar", style: this.barStyle, class: this.barClass, attrs: _t, on: mt(this, "bar", {mousedown: this.__mouseDown})}),
                    t("div", {ref: "thumb", staticClass: "q-scrollarea__thumb", style: this.style, class: this.thumbClass, attrs: _t, directives: this.thumbDirectives}),
                   ]
                   );
          },
          created: function () {
           var t = this;
           this.__emitScroll = M(function () {
            if (void 0 !== t.$listeners.scroll) {
             var e = {ref: t},
                     i = t.dirProps.prefix;
             (e[i + "Position"] = t.scrollPosition), (e[i + "Percentage"] = t.scrollPercentage), (e[i + "Size"] = t.scrollSize), (e[i + "ContainerSize"] = t.containerSize), t.$emit("scroll", e);
            }
           }, 0);
          },
         }),
         xr = 1e3,
         Cr = ["start", "center", "end", "start-force", "center-force", "end-force"],
         kr = Array.prototype.slice,
         qr = void 0;
 function Tr(t, e) {
  return t + e;
 }
 function Mr(t, e, i, n, s, o, r, a) {
  var l = t === window ? document.scrollingElement || document.documentElement : t,
          c = !0 === s ? "offsetWidth" : "offsetHeight",
          u = {scrollStart: 0, scrollViewSize: -r - a, scrollMaxSize: 0, offsetStart: -r, offsetEnd: -a};
  if (
          (!0 === s
                  ? (t === window ? ((u.scrollStart = window.pageXOffset || window.scrollX || document.body.scrollLeft || 0), (u.scrollViewSize += window.innerWidth)) : ((u.scrollStart = l.scrollLeft), (u.scrollViewSize += l.clientWidth)),
                          (u.scrollMaxSize = l.scrollWidth),
                          !0 === o && (u.scrollStart = (!0 === qr ? u.scrollMaxSize - u.scrollViewSize : 0) - u.scrollStart))
                  : (t === window ? ((u.scrollStart = window.pageYOffset || window.scrollY || document.body.scrollTop || 0), (u.scrollViewSize += window.innerHeight)) : ((u.scrollStart = l.scrollTop), (u.scrollViewSize += l.clientHeight)),
                          (u.scrollMaxSize = l.scrollHeight)),
                  void 0 !== i)
          )
   for (var h = i.previousElementSibling; null !== h; h = h.previousElementSibling)
    !1 === h.classList.contains("q-virtual-scroll--skip") && (u.offsetStart += h[c]);
  if (void 0 !== n)
   for (var d = n.nextElementSibling; null !== d; d = d.nextElementSibling)
    !1 === d.classList.contains("q-virtual-scroll--skip") && (u.offsetEnd += d[c]);
  if (e !== t) {
   var p = l.getBoundingClientRect(),
           f = e.getBoundingClientRect();
   !0 === s ? ((u.offsetStart += f.left - p.left), (u.offsetEnd -= f.width)) : ((u.offsetStart += f.top - p.top), (u.offsetEnd -= f.height)),
           t !== window && (u.offsetStart += u.scrollStart),
           (u.offsetEnd += u.scrollMaxSize - u.offsetStart);
  }
  return u;
 }
 function $r(t, e, i, n) {
  if (i >= n)
   return 0;
  var s = e.length,
          o = Math.floor(i / xr),
          r = Math.floor((n - 1) / xr) + 1,
          a = t.slice(o, r).reduce(Tr, 0);
  return i % xr != 0 && (a -= e.slice(o * xr, i).reduce(Tr, 0)), n % xr != 0 && n !== s && (a -= e.slice(n, r * xr).reduce(Tr, 0)), a;
 }
 var Lr = {
  virtualScrollSliceSize: {type: [Number, String], default: null},
  virtualScrollSliceRatioBefore: {type: [Number, String], default: 1},
  virtualScrollSliceRatioAfter: {type: [Number, String], default: 1},
  virtualScrollItemSize: {type: [Number, String], default: 24},
  virtualScrollStickySizeStart: {type: [Number, String], default: 0},
  virtualScrollStickySizeEnd: {type: [Number, String], default: 0},
  tableColspan: [Number, String],
 },
         Or = 1;
 var Br = Object.keys(Lr),
         Er = {
          props: Object.assign({}, {virtualScrollHorizontal: Boolean}, Lr),
          data: function () {
           return {virtualScrollSliceRange: {from: 0, to: 0}, id: "qvs_" + Or++};
          },
          watch: {
           needsSliceRecalc: function () {
            this.__setVirtualScrollSize();
           },
           needsReset: function () {
            this.reset();
           },
          },
          computed: {
           needsReset: function () {
            var t = this;
            return ["virtualScrollItemSizeComputed", "virtualScrollHorizontal"]
                    .map(function (e) {
                     return t[e];
                    })
                    .join(";");
           },
           needsSliceRecalc: function () {
            var t = this;
            return (
                    this.needsReset +
                    ";" +
                    ["virtualScrollSliceRatioBefore", "virtualScrollSliceRatioAfter"]
                    .map(function (e) {
                     return t[e];
                    })
                    .join(";")
                    );
           },
           colspanAttr: function () {
            return void 0 !== this.tableColspan ? {colspan: this.tableColspan} : {colspan: 100};
           },
           virtualScrollItemSizeComputed: function () {
            return this.virtualScrollItemSize;
           },
          },
          methods: {
           reset: function () {
            this.__resetVirtualScroll(this.prevToIndex, !0);
           },
           refresh: function (t) {
            this.__resetVirtualScroll(void 0 === t ? this.prevToIndex : t);
           },
           scrollTo: function (t, e) {
            var i = this.__getVirtualScrollTarget();
            if (void 0 !== i && null !== i && 8 !== i.nodeType) {
             var n = Mr(i, this.__getVirtualScrollEl(), this.$refs.before, this.$refs.after, this.virtualScrollHorizontal, this.$q.lang.rtl, this.virtualScrollStickySizeStart, this.virtualScrollStickySizeEnd);
             this.__scrollViewSize !== n.scrollViewSize && this.__setVirtualScrollSize(n.scrollViewSize),
                     this.__setVirtualScrollSliceRange(i, n, Math.min(this.virtualScrollLength - 1, Math.max(0, parseInt(t, 10) || 0)), 0, Cr.indexOf(e) > -1 ? e : this.prevToIndex > -1 && t > this.prevToIndex ? "end" : "start");
            }
           },
           __onVirtualScrollEvt: function () {
            var t = this.__getVirtualScrollTarget();
            if (void 0 !== t && null !== t && 8 !== t.nodeType) {
             var e = Mr(t, this.__getVirtualScrollEl(), this.$refs.before, this.$refs.after, this.virtualScrollHorizontal, this.$q.lang.rtl, this.virtualScrollStickySizeStart, this.virtualScrollStickySizeEnd),
                     i = this.virtualScrollLength - 1,
                     n = e.scrollMaxSize - e.offsetStart - e.offsetEnd - this.virtualScrollPaddingAfter;
             if (this.prevScrollStart !== e.scrollStart)
              if (e.scrollMaxSize <= 0)
               this.__setVirtualScrollSliceRange(t, e, 0, 0);
              else {
               this.__scrollViewSize !== e.scrollViewSize && this.__setVirtualScrollSize(e.scrollViewSize), this.__updateVirtualScrollSizes(this.virtualScrollSliceRange.from);
               var s = Math.floor(e.scrollMaxSize - Math.max(e.scrollViewSize, e.offsetEnd) - Math.min(this.virtualScrollSizes[i], e.scrollViewSize / 2));
               if (s > 0 && Math.ceil(e.scrollStart) >= s)
                this.__setVirtualScrollSliceRange(t, e, i, e.scrollMaxSize - e.offsetEnd - this.virtualScrollSizesAgg.reduce(Tr, 0));
               else {
                var o = 0,
                        r = e.scrollStart - e.offsetStart,
                        a = r;
                if (r <= n && r + e.scrollViewSize >= this.virtualScrollPaddingBefore)
                 (r -= this.virtualScrollPaddingBefore), (o = this.virtualScrollSliceRange.from), (a = r);
                else
                 for (var l = 0; r >= this.virtualScrollSizesAgg[l] && o < i; l++)
                  (r -= this.virtualScrollSizesAgg[l]), (o += xr);
                for (; r > 0 && o < i; )
                 (r -= this.virtualScrollSizes[o]) > -e.scrollViewSize ? (o++, (a = r)) : (a = this.virtualScrollSizes[o] + r);
                this.__setVirtualScrollSliceRange(t, e, o, a);
               }
              }
            }
           },
           __setVirtualScrollSliceRange: function (t, e, i, n, s) {
            var o = this,
                    r = "string" == typeof s && s.indexOf("-force") > -1,
                    a = !0 === r ? s.replace("-force", "") : s,
                    l = void 0 !== a ? a : "start",
                    c = Math.max(0, i - this.virtualScrollSliceSizeComputed[l]),
                    u = c + this.virtualScrollSliceSizeComputed.total;
            u > this.virtualScrollLength && ((u = this.virtualScrollLength), (c = Math.max(0, u - this.virtualScrollSliceSizeComputed.total))), (this.prevScrollStart = e.scrollStart);
            var h = c !== this.virtualScrollSliceRange.from || u !== this.virtualScrollSliceRange.to;
            if (!1 !== h || void 0 !== a) {
             var d = document.activeElement;
             if (!0 === h && void 0 !== this.$refs.content && this.$refs.content !== d && !0 === this.$refs.content.contains(d)) {
              var p = function () {
               o.$refs.content.focus();
              };
              d.addEventListener("blur", p, !0),
                      requestAnimationFrame(function () {
                       d.removeEventListener("blur", p, !0);
                      });
             }
             !(function t(e, i) {
              if ((void 0 === t.isSupported && (t.isSupported = void 0 !== window.getComputedStyle(document.body).overflowAnchor), !1 !== t.isSupported)) {
               var n = e + "_ss",
                       s = document.getElementById(n);
               null === s && (((s = document.createElement("style")).type = "text/css"), (s.id = n), document.head.appendChild(s)),
                       s.qChildIndex !== i && ((s.qChildIndex = i), (s.innerHTML = "#" + e + " > *:nth-child(" + i + ") { overflow-anchor: auto }"));
              }
             })(this.id, i - c + 1);
             var f = void 0 !== a ? this.virtualScrollSizes.slice(c, i).reduce(Tr, 0) : 0;
             if (!0 === h) {
              var m = u >= this.virtualScrollSliceRange.from && c <= this.virtualScrollSliceRange.to ? this.virtualScrollSliceRange.to : u;
              (this.virtualScrollSliceRange = {from: c, to: m}),
                      (this.virtualScrollPaddingBefore = $r(this.virtualScrollSizesAgg, this.virtualScrollSizes, 0, c)),
                      (this.virtualScrollPaddingAfter = $r(this.virtualScrollSizesAgg, this.virtualScrollSizes, this.virtualScrollSliceRange.to, this.virtualScrollLength)),
                      requestAnimationFrame(function () {
                       o.virtualScrollSliceRange.to !== u &&
                               o.prevScrollStart === e.scrollStart &&
                               ((o.virtualScrollSliceRange = {from: o.virtualScrollSliceRange.from, to: u}), (o.virtualScrollPaddingAfter = $r(o.virtualScrollSizesAgg, o.virtualScrollSizes, u, o.virtualScrollLength)));
                      });
             }
             requestAnimationFrame(function () {
              if (o.prevScrollStart === e.scrollStart) {
               !0 === h && o.__updateVirtualScrollSizes(c);
               var s,
                       l,
                       u,
                       d,
                       p = o.virtualScrollSizes.slice(c, i).reduce(Tr, 0),
                       m = p + e.offsetStart + o.virtualScrollPaddingBefore,
                       v = m + o.virtualScrollSizes[i],
                       g = m + n;
               if (void 0 !== a) {
                var _ = p - f,
                        b = e.scrollStart + _;
                g = !0 !== r && b < m && v < b + e.scrollViewSize ? b : "end" === a ? v - e.scrollViewSize : m - ("start" === a ? 0 : Math.round((e.scrollViewSize - o.virtualScrollSizes[i]) / 2));
               }
               (o.prevScrollStart = g),
                       (s = t),
                       (l = g),
                       (u = o.virtualScrollHorizontal),
                       (d = o.$q.lang.rtl),
                       s === window
                       ? !0 === u
                       ? (!0 === d && (l = (!0 === qr ? document.body.scrollWidth - window.innerWidth : 0) - l), window.scrollTo(l, window.pageYOffset || window.scrollY || document.body.scrollTop || 0))
                       : window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, l)
                       : !0 === u
                       ? (!0 === d && (l = (!0 === qr ? s.scrollWidth - s.offsetWidth : 0) - l), (s.scrollLeft = l))
                       : (s.scrollTop = l),
                       o.__emitScroll(i);
              }
             });
            } else
             this.__emitScroll(i);
           },
           __updateVirtualScrollSizes: function (t) {
            var e = this.$refs.content;
            if (void 0 !== e)
             for (
                     var i,
                     n,
                     s = kr.call(e.children).filter(function (t) {
              return !1 === t.classList.contains("q-virtual-scroll--skip");
             }),
                     o = s.length,
                     r =
                     !0 === this.virtualScrollHorizontal
                     ? function (t) {
                      return t.getBoundingClientRect().width;
                     }
             : function (t) {
              return t.offsetHeight;
             },
                     a = t,
                     l = 0;
                     l < o;
                     ) {
              for (i = r(s[l]), l++; l < o && !0 === s[l].classList.contains("q-virtual-scroll--with-prev"); )
               (i += r(s[l])), l++;
              0 !== (n = i - this.virtualScrollSizes[a]) && ((this.virtualScrollSizes[a] += n), (this.virtualScrollSizesAgg[Math.floor(a / xr)] += n)), a++;
             }
           },
           __resetVirtualScroll: function (t, e) {
            var i = this,
                    n = 1 * this.virtualScrollItemSizeComputed;
            (!0 !== e && !1 !== Array.isArray(this.virtualScrollSizes)) || (this.virtualScrollSizes = []);
            var s = this.virtualScrollSizes.length;
            this.virtualScrollSizes.length = this.virtualScrollLength;
            for (var o = this.virtualScrollLength - 1; o >= s; o--)
             this.virtualScrollSizes[o] = n;
            var r = Math.floor((this.virtualScrollLength - 1) / xr);
            this.virtualScrollSizesAgg = [];
            for (var a = 0; a <= r; a++) {
             for (var l = 0, c = Math.min((a + 1) * xr, this.virtualScrollLength), u = a * xr; u < c; u++)
              l += this.virtualScrollSizes[u];
             this.virtualScrollSizesAgg.push(l);
            }
            (this.prevToIndex = -1),
                    (this.prevScrollStart = void 0),
                    t >= 0
                    ? (this.__updateVirtualScrollSizes(this.virtualScrollSliceRange.from),
                            this.$nextTick(function () {
                             i.scrollTo(t);
                            }))
                    : ((this.virtualScrollPaddingBefore = $r(this.virtualScrollSizesAgg, this.virtualScrollSizes, 0, this.virtualScrollSliceRange.from)),
                            (this.virtualScrollPaddingAfter = $r(this.virtualScrollSizesAgg, this.virtualScrollSizes, this.virtualScrollSliceRange.to, this.virtualScrollLength)),
                            this.__onVirtualScrollEvt());
           },
           __setVirtualScrollSize: function (t) {
            if (void 0 === t && "undefined" != typeof window) {
             var e = this.__getVirtualScrollTarget();
             void 0 !== e &&
                     null !== e &&
                     8 !== e.nodeType &&
                     (t = Mr(e, this.__getVirtualScrollEl(), this.$refs.before, this.$refs.after, this.virtualScrollHorizontal, this.$q.lang.rtl, this.virtualScrollStickySizeStart, this.virtualScrollStickySizeEnd).scrollViewSize);
            }
            this.__scrollViewSize = t;
            var i = 1 + this.virtualScrollSliceRatioBefore + this.virtualScrollSliceRatioAfter,
                    n = void 0 === t || t <= 0 ? 1 : Math.ceil(t / this.virtualScrollItemSizeComputed),
                    s = Math.max(10, n, Math.ceil(this.virtualScrollSliceSize / i));
            this.virtualScrollSliceSizeComputed = {
             total: Math.ceil(s * i),
             start: Math.ceil(s * this.virtualScrollSliceRatioBefore),
             center: Math.ceil(s * (0.5 + this.virtualScrollSliceRatioBefore)),
             end: Math.ceil(s * (1 + this.virtualScrollSliceRatioBefore)),
             view: n,
            };
           },
           __padVirtualScroll: function (t, e, i) {
            var n,
                    s,
                    o,
                    r,
                    a = !0 === this.virtualScrollHorizontal ? "width" : "height",
                    l = {};
            return (
                    (l["--q-virtual-scroll-item-" + a] = this.virtualScrollItemSizeComputed + "px"),
                    [
                     "tbody" === e
                             ? t(e, {staticClass: "q-virtual-scroll__padding", key: "before", ref: "before"}, [
                              t("tr", [t("td", {style: Object.assign(((n = {}), (n[a] = this.virtualScrollPaddingBefore + "px"), n), l), attrs: this.colspanAttr})]),
                             ])
                             : t(e, {staticClass: "q-virtual-scroll__padding", key: "before", ref: "before", style: Object.assign(((s = {}), (s[a] = this.virtualScrollPaddingBefore + "px"), s), l)}),
                     t(e, {staticClass: "q-virtual-scroll__content", key: "content", ref: "content", attrs: {id: this.id, tabindex: -1}}, i),
                     "tbody" === e
                             ? t(e, {staticClass: "q-virtual-scroll__padding", key: "after", ref: "after"}, [
                              t("tr", [t("td", {style: Object.assign(((o = {}), (o[a] = this.virtualScrollPaddingAfter + "px"), o), l), attrs: this.colspanAttr})]),
                             ])
                             : t(e, {staticClass: "q-virtual-scroll__padding", key: "after", ref: "after", style: Object.assign(((r = {}), (r[a] = this.virtualScrollPaddingAfter + "px"), r), l)}),
                    ]
                    );
           },
           __emitScroll: function (t) {
            this.prevToIndex !== t &&
                    (void 0 !== this.qListeners["virtual-scroll"] &&
                            this.$emit("virtual-scroll", {index: t, from: this.virtualScrollSliceRange.from, to: this.virtualScrollSliceRange.to - 1, direction: t < this.prevToIndex ? "decrease" : "increase", ref: this}),
                            (this.prevToIndex = t));
           },
          },
          created: function () {
           this.__setVirtualScrollSize();
          },
          beforeMount: function () {
           var t, e;
           void 0 === qr &&
                   ((t = document.createElement("div")),
                           (e = document.createElement("div")),
                           t.setAttribute("dir", "rtl"),
                           (t.style.width = "1px"),
                           (t.style.height = "1px"),
                           (t.style.overflow = "auto"),
                           (e.style.width = "1000px"),
                           (e.style.height = "1px"),
                           document.body.appendChild(t),
                           t.appendChild(e),
                           (t.scrollLeft = -1e3),
                           (qr = t.scrollLeft >= 0),
                           t.remove()),
                   (this.__onVirtualScrollEvt = M(this.__onVirtualScrollEvt, !0 === this.$q.platform.is.ios ? 120 : 35)),
                   this.__setVirtualScrollSize();
          },
          beforeDestroy: function () {
           var t = document.getElementById(this.id + "_ss");
           null !== t && t.remove();
          },
         },
         Pr = function (t) {
          return ["add", "add-unique", "toggle"].includes(t);
         },
         zr = t.extend({
          name: "QSelect",
          mixins: [fo, Er, Do, ui, Lt],
          props: {
           value: {required: !0},
           multiple: Boolean,
           displayValue: [String, Number],
           displayValueSanitize: Boolean,
           dropdownIcon: String,
           options: {
            type: Array,
            default: function () {
             return [];
            },
           },
           optionValue: [Function, String],
           optionLabel: [Function, String],
           optionDisable: [Function, String],
           hideSelected: Boolean,
           hideDropdownIcon: Boolean,
           fillInput: Boolean,
           maxValues: [Number, String],
           optionsDense: Boolean,
           optionsDark: {type: Boolean, default: null},
           optionsSelectedClass: String,
           optionsSanitize: Boolean,
           optionsCover: Boolean,
           menuShrink: Boolean,
           menuAnchor: String,
           menuSelf: String,
           menuOffset: Array,
           popupContentClass: String,
           popupContentStyle: [String, Array, Object],
           useInput: Boolean,
           useChips: Boolean,
           newValueMode: {type: String, validator: Pr},
           mapOptions: Boolean,
           emitValue: Boolean,
           inputDebounce: {type: [Number, String], default: 500},
           inputClass: [Array, String, Object],
           inputStyle: [Array, String, Object],
           tabindex: {type: [String, Number], default: 0},
           autocomplete: String,
           transitionShow: String,
           transitionHide: String,
           behavior: {
            type: String,
            validator: function (t) {
             return ["default", "menu", "dialog"].includes(t);
            },
            default: "default",
           },
           virtualScrollItemSize: {type: [Number, String], default: void 0},
          },
          data: function () {
           return {menu: !1, dialog: !1, optionIndex: -1, inputValue: "", dialogFieldFocused: !1};
          },
          watch: {
           innerValue: {
            handler: function (t) {
             (this.innerValueCache = t),
                     !0 === this.useInput &&
                     !0 === this.fillInput &&
                     !0 !== this.multiple &&
                     !0 !== this.innerLoading &&
                     ((!0 !== this.dialog && !0 !== this.menu) || !0 !== this.hasValue) &&
                     (!0 !== this.userInputValue && this.__resetInputValue(), (!0 !== this.dialog && !0 !== this.menu) || this.filter(""));
            },
            immediate: !0,
           },
           fillInput: function () {
            this.__resetInputValue();
           },
           menu: function (t) {
            this.__updateMenu(t);
           },
          },
          computed: {
           isOptionsDark: function () {
            return null === this.optionsDark ? this.isDark : this.optionsDark;
           },
           virtualScrollLength: function () {
            return Array.isArray(this.options) ? this.options.length : 0;
           },
           fieldClass: function () {
            return (
                    "q-select q-field--auto-height q-select--with" +
                    (!0 !== this.useInput ? "out" : "") +
                    "-input q-select--with" +
                    (!0 !== this.useChips ? "out" : "") +
                    "-chips q-select--" +
                    (!0 === this.multiple ? "multiple" : "single")
                    );
           },
           computedInputClass: function () {
            return !0 === this.hideSelected || 0 === this.innerValue.length ? this.inputClass : void 0 === this.inputClass ? "q-field__input--padding" : [this.inputClass, "q-field__input--padding"];
           },
           menuContentClass: function () {
            return (!0 === this.virtualScrollHorizontal ? "q-virtual-scroll--horizontal" : "") + (this.popupContentClass ? " " + this.popupContentClass : "");
           },
           innerValue: function () {
            var t = this,
                    e = !0 === this.mapOptions && !0 !== this.multiple,
                    i = void 0 === this.value || (null === this.value && !0 !== e) ? [] : !0 === this.multiple && Array.isArray(this.value) ? this.value : [this.value];
            if (!0 === this.mapOptions && !0 === Array.isArray(this.options)) {
             var n = !0 === this.mapOptions && void 0 !== this.innerValueCache ? this.innerValueCache : [],
                     s = i.map(function (e) {
                      return t.__getOption(e, n);
                     });
             return null === this.value && !0 === e
                     ? s.filter(function (t) {
                      return null !== t;
                     })
                     : s;
            }
            return i;
           },
           noOptions: function () {
            return 0 === this.virtualScrollLength;
           },
           selectedString: function () {
            var t = this;
            return this.innerValue
                    .map(function (e) {
                     return t.getOptionLabel(e);
                    })
                    .join(", ");
           },
           sanitizeFn: function () {
            return !0 === this.optionsSanitize
                    ? function () {
                     return !0;
                    }
            : function (t) {
             return void 0 !== t && null !== t && !0 === t.sanitize;
            };
           },
           displayAsText: function () {
            return !0 === this.displayValueSanitize || (void 0 === this.displayValue && (!0 === this.optionsSanitize || this.innerValue.some(this.sanitizeFn)));
           },
           computedTabindex: function () {
            return !0 === this.focused ? this.tabindex : -1;
           },
           selectedScope: function () {
            var t = this;
            return this.innerValue.map(function (e, i) {
             return {index: i, opt: e, sanitize: t.sanitizeFn(e), selected: !0, removeAtIndex: t.__removeAtIndexAndFocus, toggleOption: t.toggleOption, tabindex: t.computedTabindex};
            });
           },
           optionScope: function () {
            var t = this;
            if (0 === this.virtualScrollLength)
             return [];
            var e = this.virtualScrollSliceRange,
                    i = e.from,
                    n = e.to,
                    s = this.__optionScopeCache,
                    o = s.options,
                    r = s.optionEls;
            return this.options.slice(i, n).map(function (e, n) {
             var s = !0 === t.isOptionDisabled(e),
                     a = i + n,
                     l = {clickable: !0, active: !1, activeClass: t.computedOptionsSelectedClass, manualFocus: !0, focused: !1, disable: s, tabindex: -1, dense: t.optionsDense, dark: t.isOptionsDark};
             !0 !== s && (!0 === t.isOptionSelected(e) && (l.active = !0), t.optionIndex === a && (l.focused = !0));
             var c = {
              click: function () {
               t.toggleOption(e);
              },
             };
             !0 === t.$q.platform.is.desktop &&
                     (c.mousemove = function () {
                      t.setOptionIndex(a);
                     });
             var u = {index: a, opt: e, sanitize: t.sanitizeFn(e), selected: l.active, focused: l.focused, toggleOption: t.toggleOption, setOptionIndex: t.setOptionIndex, itemProps: l};
             return (void 0 !== o[n] && !0 === ki(u, o[n])) || ((o[n] = u), (r[n] = void 0)), Object.assign({}, u, {itemEvents: c});
            });
           },
           dropdownArrowIcon: function () {
            return void 0 !== this.dropdownIcon ? this.dropdownIcon : this.$q.iconSet.arrow.dropdown;
           },
           squaredMenu: function () {
            return !1 === this.optionsCover && !0 !== this.outlined && !0 !== this.standout && !0 !== this.borderless && !0 !== this.rounded;
           },
           computedOptionsSelectedClass: function () {
            return void 0 !== this.optionsSelectedClass ? this.optionsSelectedClass : void 0 !== this.color ? "text-" + this.color : "";
           },
           innerOptionsValue: function () {
            var t = this;
            return this.innerValue.map(function (e) {
             return t.getOptionValue(e);
            });
           },
           getOptionValue: function () {
            return this.__getPropValueFn("optionValue", "value");
           },
           getOptionLabel: function () {
            return this.__getPropValueFn("optionLabel", "label");
           },
           isOptionDisabled: function () {
            return this.__getPropValueFn("optionDisable", "disable");
           },
           inputControlEvents: function () {
            var t = this,
                    e = {
                     input: this.__onInput,
                     change: this.__onChange,
                     keydown: this.__onTargetKeydown,
                     keyup: this.__onTargetAutocomplete,
                     keypress: this.__onTargetKeypress,
                     focus: this.__selectInputText,
                     click: function (e) {
                      !0 === t.hasDialog && y(e);
                     },
                    };
            return (e.compositionstart = e.compositionupdate = e.compositionend = this.__onComposition), e;
           },
           virtualScrollItemSizeComputed: function () {
            return void 0 === this.virtualScrollItemSize ? (!0 === this.dense ? 24 : 48) : this.virtualScrollItemSize;
           },
          },
          methods: {
           getEmittingOptionValue: function (t) {
            return !0 === this.emitValue ? this.getOptionValue(t) : t;
           },
           removeAtIndex: function (t) {
            if (t > -1 && t < this.innerValue.length)
             if (!0 === this.multiple) {
              var e = this.value.slice();
              this.$emit("remove", {index: t, value: e.splice(t, 1)[0]}), this.$emit("input", e);
             } else
              this.$emit("input", null);
           },
           __removeAtIndexAndFocus: function (t) {
            this.removeAtIndex(t), this.__focus();
           },
           add: function (t, e) {
            var i = this.getEmittingOptionValue(t);
            if (!0 !== this.multiple)
             return !0 === this.fillInput && this.updateInputValue(this.getOptionLabel(t), !0, !0), void this.$emit("input", i);
            if (0 === this.innerValue.length)
             return this.$emit("add", {index: 0, value: i}), void this.$emit("input", !0 === this.multiple ? [i] : i);
            if (!((!0 === e && !0 === this.isOptionSelected(t)) || (void 0 !== this.maxValues && this.value.length >= this.maxValues))) {
             var n = this.value.slice();
             this.$emit("add", {index: n.length, value: i}), n.push(i), this.$emit("input", n);
            }
           },
           toggleOption: function (t, e) {
            if (!0 === this.editable && void 0 !== t && !0 !== this.isOptionDisabled(t)) {
             var i = this.getOptionValue(t);
             if (!0 !== this.multiple)
              return (
                      !0 !== e && (this.updateInputValue(!0 === this.fillInput ? this.getOptionLabel(t) : "", !0, !0), this.hidePopup()),
                      void 0 !== this.$refs.target && this.$refs.target.focus(),
                      void (!0 !== ki(this.getOptionValue(this.innerValue[0]), i) && this.$emit("input", !0 === this.emitValue ? i : t))
                      );
             if (((!0 !== this.hasDialog || !0 === this.dialogFieldFocused) && this.__focus(), this.__selectInputText(), 0 === this.innerValue.length)) {
              var n = !0 === this.emitValue ? i : t;
              return this.$emit("add", {index: 0, value: n}), void this.$emit("input", !0 === this.multiple ? [n] : n);
             }
             var s = this.value.slice(),
                     o = this.innerOptionsValue.findIndex(function (t) {
                      return ki(t, i);
                     });
             if (o > -1)
              this.$emit("remove", {index: o, value: s.splice(o, 1)[0]});
             else {
              if (void 0 !== this.maxValues && s.length >= this.maxValues)
               return;
              var r = !0 === this.emitValue ? i : t;
              this.$emit("add", {index: s.length, value: r}), s.push(r);
             }
             this.$emit("input", s);
            }
           },
           setOptionIndex: function (t) {
            if (!0 === this.$q.platform.is.desktop) {
             var e = t > -1 && t < this.virtualScrollLength ? t : -1;
             this.optionIndex !== e && (this.optionIndex = e);
            }
           },
           moveOptionSelection: function (t, e) {
            if ((void 0 === t && (t = 1), !0 === this.menu)) {
             var i = this.optionIndex;
             do {
              i = dt(i + t, -1, this.virtualScrollLength - 1);
             } while (-1 !== i && i !== this.optionIndex && !0 === this.isOptionDisabled(this.options[i]));
             this.optionIndex !== i &&
                     (this.setOptionIndex(i), this.scrollTo(i), !0 !== e && !0 === this.useInput && !0 === this.fillInput && this.__setInputValue(i >= 0 ? this.getOptionLabel(this.options[i]) : this.defaultInputValue));
            }
           },
           __getOption: function (t, e) {
            var i = this,
                    n = function (e) {
                     return ki(i.getOptionValue(e), t);
                    };
            return this.options.find(n) || e.find(n) || t;
           },
           __getPropValueFn: function (t, e) {
            var i = void 0 !== this[t] ? this[t] : e;
            return "function" == typeof i
                    ? i
                    : function (t) {
                     return Object(t) === t && i in t ? t[i] : t;
                    };
           },
           isOptionSelected: function (t) {
            var e = this.getOptionValue(t);
            return (
                    void 0 !==
                    this.innerOptionsValue.find(function (t) {
                     return ki(t, e);
                    })
                    );
           },
           __selectInputText: function () {
            !0 === this.useInput && void 0 !== this.$refs.target && this.$refs.target.select();
           },
           __onTargetKeyup: function (t) {
            !0 === tt(t, 27) && !0 === this.menu && (y(t), this.hidePopup(), this.__resetInputValue()), this.$emit("keyup", t);
           },
           __onTargetAutocomplete: function (t) {
            var e = this,
                    i = t.target.value;
            if (void 0 === t.keyCode)
             if (((t.target.value = ""), clearTimeout(this.inputTimer), this.__resetInputValue(), "string" == typeof i && i.length > 0)) {
              var n = i.toLocaleLowerCase(),
                      s = function (t) {
                       return e.getOptionValue(t).toLocaleLowerCase() === n;
                      },
                      o = this.options.find(s);
              void 0 !== o
                      ? -1 === this.innerValue.indexOf(o)
                      ? this.toggleOption(o)
                      : this.hidePopup()
                      : ((s = function (t) {
                       return e.getOptionLabel(t).toLocaleLowerCase() === n;
                      }),
                              void 0 !== (o = this.options.find(s)) ? (-1 === this.innerValue.indexOf(o) ? this.toggleOption(o) : this.hidePopup()) : this.filter(i, !0));
             } else
              this.__clearValue(t);
            else
             this.__onTargetKeyup(t);
           },
           __onTargetKeypress: function (t) {
            this.$emit("keypress", t);
           },
           __onTargetKeydown: function (t) {
            var e = this;
            if ((this.$emit("keydown", t), !0 !== J(t))) {
             var i = this.inputValue.length > 0 && (void 0 !== this.newValueMode || void 0 !== this.qListeners["new-value"]),
                     n = !0 !== t.shiftKey && !0 !== this.multiple && (this.optionIndex > -1 || !0 === i);
             if (27 !== t.keyCode)
              if (9 !== t.keyCode || !1 !== n) {
               if (void 0 !== t.target && t.target.id === this.targetUid) {
                if (40 === t.keyCode && !0 !== this.innerLoading && !1 === this.menu)
                 return S(t), void this.showPopup();
                if (8 !== t.keyCode || !0 === this.hideSelected || 0 !== this.inputValue.length) {
                 (35 !== t.keyCode && 36 !== t.keyCode) ||
                         ("string" == typeof this.inputValue && 0 !== this.inputValue.length) ||
                         (S(t), (this.optionIndex = -1), this.moveOptionSelection(36 === t.keyCode ? 1 : -1, this.multiple)),
                         (33 !== t.keyCode && 34 !== t.keyCode) ||
                         void 0 === this.virtualScrollSliceSizeComputed ||
                         (S(t),
                                 (this.optionIndex = Math.max(-1, Math.min(this.virtualScrollLength, this.optionIndex + (33 === t.keyCode ? -1 : 1) * this.virtualScrollSliceSizeComputed.view))),
                                 this.moveOptionSelection(33 === t.keyCode ? 1 : -1, this.multiple)),
                         (38 !== t.keyCode && 40 !== t.keyCode) || (S(t), this.moveOptionSelection(38 === t.keyCode ? -1 : 1, this.multiple));
                 var s = this.virtualScrollLength;
                 if (
                         ((void 0 === this.searchBuffer || this.searchBufferExp < Date.now()) && (this.searchBuffer = ""),
                                 s > 0 && !0 !== this.useInput && void 0 !== t.key && 1 === t.key.length && t.altKey === t.ctrlKey && (32 !== t.keyCode || this.searchBuffer.length > 0))
                         ) {
                  !0 !== this.menu && this.showPopup(t);
                  var o = t.key.toLocaleLowerCase(),
                          r = 1 === this.searchBuffer.length && this.searchBuffer[0] === o;
                  (this.searchBufferExp = Date.now() + 1500), !1 === r && (S(t), (this.searchBuffer += o));
                  var a = new RegExp(
                          "^" +
                          this.searchBuffer
                          .split("")
                          .map(function (t) {
                           return ".*+?^${}()|[]\\".indexOf(t) > -1 ? "\\" + t : t;
                          })
                          .join(".*"),
                          "i"
                          ),
                          l = this.optionIndex;
                  if (!0 === r || l < 0 || !0 !== a.test(this.getOptionLabel(this.options[l])))
                   do {
                    l = dt(l + 1, -1, s - 1);
                   } while (l !== this.optionIndex && (!0 === this.isOptionDisabled(this.options[l]) || !0 !== a.test(this.getOptionLabel(this.options[l]))));
                  this.optionIndex !== l &&
                          this.$nextTick(function () {
                           e.setOptionIndex(l), e.scrollTo(l), l >= 0 && !0 === e.useInput && !0 === e.fillInput && e.__setInputValue(e.getOptionLabel(e.options[l]));
                          });
                 } else if (13 === t.keyCode || (32 === t.keyCode && !0 !== this.useInput && "" === this.searchBuffer) || (9 === t.keyCode && !1 !== n))
                  if ((9 !== t.keyCode && S(t), this.optionIndex > -1 && this.optionIndex < s))
                   this.toggleOption(this.options[this.optionIndex]);
                  else {
                   if (!0 === i) {
                    var c = function (t, i) {
                     if (i) {
                      if (!0 !== Pr(i))
                       return;
                     } else
                      i = e.newValueMode;
                     void 0 !== t &&
                             null !== t &&
                             (e.updateInputValue("", !0 !== e.multiple, !0),
                                     e["toggle" === i ? "toggleOption" : "add"](t, "add-unique" === i),
                                     !0 !== e.multiple && (void 0 !== e.$refs.target && e.$refs.target.focus(), e.hidePopup()));
                    };
                    if ((void 0 !== this.qListeners["new-value"] ? this.$emit("new-value", this.inputValue, c) : c(this.inputValue), !0 !== this.multiple))
                     return;
                   }
                   !0 === this.menu ? this.__closeMenu() : !0 !== this.innerLoading && this.showPopup();
                  }
                } else
                 !0 === this.multiple && Array.isArray(this.value) ? this.removeAtIndex(this.value.length - 1) : !0 !== this.multiple && null !== this.value && this.$emit("input", null);
               }
              } else
               this.__closeMenu();
             else
              w(t);
            }
           },
           __getVirtualScrollEl: function () {
            return !0 === this.hasDialog ? this.$refs.menuContent : void 0 !== this.$refs.menu && void 0 !== this.$refs.menu.__portal ? this.$refs.menu.__portal.$el : void 0;
           },
           __getVirtualScrollTarget: function () {
            return this.__getVirtualScrollEl();
           },
           __getSelection: function (t) {
            var e,
                    i = this;
            return !0 === this.hideSelected
                    ? []
                    : void 0 !== this.$scopedSlots["selected-item"]
                    ? this.selectedScope
                    .map(function (t) {
                     return i.$scopedSlots["selected-item"](t);
                    })
                    .slice()
                    : void 0 !== this.$scopedSlots.selected
                    ? this.$scopedSlots.selected().slice()
                    : !0 === this.useChips
                    ? this.selectedScope.map(function (e, n) {
                     var s;
                     return t(
                             Ai,
                             {
                              key: "option-" + n,
                              props: {removable: !0 === i.editable && !0 !== i.isOptionDisabled(e.opt), dense: !0, textColor: i.color, tabindex: i.computedTabindex},
                              on: mt(i, "rem#" + n, {
                               remove: function () {
                                e.removeAtIndex(n);
                               },
                              }),
                             },
                             [t("span", {staticClass: "ellipsis", domProps: ((s = {}), (s[!0 === e.sanitize ? "textContent" : "innerHTML"] = i.getOptionLabel(e.opt)), s)})]
                             );
                    })
                    : [t("span", {domProps: ((e = {}), (e[this.displayAsText ? "textContent" : "innerHTML"] = void 0 !== this.displayValue ? this.displayValue : this.selectedString), e)})];
           },
           __getControl: function (t, e) {
            var i = this.__getSelection(t),
                    n = !0 === e || !0 !== this.dialog || !0 !== this.hasDialog;
            if (
                    (!0 === this.useInput
                            ? i.push(this.__getInput(t, e, n))
                            : !0 === this.editable &&
                            !0 === n &&
                            (i.push(
                                    t("div", {
                                     ref: "target",
                                     key: "d_t",
                                     staticClass: "no-outline",
                                     attrs: {id: this.targetUid, tabindex: this.tabindex},
                                     on: mt(this, "f-tget", {keydown: this.__onTargetKeydown, keyup: this.__onTargetKeyup, keypress: this.__onTargetKeypress}),
                                    })
                                    ),
                                    "string" == typeof this.autocomplete &&
                                    this.autocomplete.length > 0 &&
                                    i.push(t("input", {staticClass: "q-select__autocomplete-input no-outline", attrs: {autocomplete: this.autocomplete}, on: mt(this, "autoinp", {keyup: this.__onTargetAutocomplete})}))),
                            void 0 !== this.nameProp && !0 !== this.disable && this.innerOptionsValue.length > 0)
                    ) {
             var s = this.innerOptionsValue.map(function (e) {
              return t("option", {attrs: {value: e, selected: !0}});
             });
             i.push(t("select", {staticClass: "hidden", attrs: {name: this.nameProp, multiple: this.multiple}}, s));
            }
            return t("div", {staticClass: "q-field__native row items-center", attrs: this.qAttrs}, i);
           },
           __getOptions: function (t) {
            var e = this;
            if (!0 === this.menu) {
             void 0 !== this.$scopedSlots.option && this.__optionScopeCache.optionSlot !== this.$scopedSlots.option && ((this.__optionScopeCache.optionSlot = this.$scopedSlots.option), (this.__optionScopeCache.optionEls = []));
             var i =
                     void 0 !== this.$scopedSlots.option
                     ? this.$scopedSlots.option
                     : function (i) {
                      var n;
                      return t(ks, {key: i.index, props: i.itemProps, on: i.itemEvents}, [t(qs, [t(Ns, {domProps: ((n = {}), (n[!0 === i.sanitize ? "textContent" : "innerHTML"] = e.getOptionLabel(i.opt)), n)})])]);
                     },
                     n = this.__optionScopeCache.optionEls,
                     s = this.__padVirtualScroll(
                             t,
                             "div",
                             this.optionScope.map(function (t, e) {
                              return void 0 === n[e] && (n[e] = i(t)), n[e];
                             })
                             );
             return void 0 !== this.$scopedSlots["before-options"] && (s = this.$scopedSlots["before-options"]().concat(s)), Et(s, this, "after-options");
            }
           },
           __getInnerAppend: function (t) {
            return !0 !== this.loading && !0 !== this.innerLoadingIndicator && !0 !== this.hideDropdownIcon
                    ? [t(zt, {staticClass: "q-select__dropdown-icon" + (!0 === this.menu ? " rotate-180" : ""), props: {name: this.dropdownArrowIcon}})]
                    : null;
           },
           __getInput: function (t, e, i) {
            var n = {
             ref: !0 === i ? "target" : void 0,
             key: "i_t",
             staticClass: "q-field__input q-placeholder col",
             style: this.inputStyle,
             class: this.computedInputClass,
             domProps: {value: void 0 !== this.inputValue ? this.inputValue : ""},
             attrs: Object.assign({}, {type: "search"}, this.qAttrs, {
              id: this.targetUid,
              maxlength: this.maxlength,
              tabindex: this.tabindex,
              autocomplete: this.autocomplete,
              "data-autofocus": !0 !== e && this.autofocus,
              disabled: !0 === this.disable,
              readonly: !0 === this.readonly,
             }),
             on: this.inputControlEvents,
            };
            return !0 !== e && !0 === this.hasDialog && (n.staticClass += " no-pointer-events"), t("input", n);
           },
           __onChange: function (t) {
            this.__onComposition(t);
           },
           __onInput: function (t) {
            var e = this;
            clearTimeout(this.inputTimer),
                    (t && t.target && !0 === t.target.composing) ||
                    (this.__setInputValue(t.target.value || ""),
                            (this.userInputValue = !0),
                            (this.defaultInputValue = this.inputValue),
                            !0 === this.focused || (!0 === this.hasDialog && !0 !== this.dialogFieldFocused) || this.__focus(),
                            void 0 !== this.qListeners.filter &&
                            (this.inputTimer = setTimeout(function () {
                             e.filter(e.inputValue);
                            }, this.inputDebounce)));
           },
           __setInputValue: function (t) {
            this.inputValue !== t && ((this.inputValue = t), this.$emit("input-value", t));
           },
           updateInputValue: function (t, e, i) {
            (this.userInputValue = !0 !== i), !0 === this.useInput && (this.__setInputValue(t), (!0 !== e && !0 === i) || (this.defaultInputValue = t), !0 !== e && this.filter(t));
           },
           filter: function (t, e) {
            var i = this;
            if (void 0 !== this.qListeners.filter && (!0 === e || !0 === this.focused)) {
             !0 === this.innerLoading ? this.$emit("filter-abort") : ((this.innerLoading = !0), (this.innerLoadingIndicator = !0)),
                     "" !== t && !0 !== this.multiple && this.innerValue.length > 0 && !0 !== this.userInputValue && t === this.getOptionLabel(this.innerValue[0]) && (t = "");
             var n = setTimeout(function () {
              !0 === i.menu && (i.menu = !1);
             }, 10);
             clearTimeout(this.filterId),
                     (this.filterId = n),
                     this.$emit(
                             "filter",
                             t,
                             function (t, s) {
                              (!0 !== e && !0 !== i.focused) ||
                                      i.filterId !== n ||
                                      (clearTimeout(i.filterId),
                                              "function" == typeof t && t(),
                                              (i.innerLoadingIndicator = !1),
                                              i.$nextTick(function () {
                                               (i.innerLoading = !1),
                                                       !0 === i.editable && (!0 === e ? !0 === i.menu && i.hidePopup() : !0 === i.menu ? i.__updateMenu(!0) : (i.menu = !0)),
                                                       "function" == typeof s &&
                                                       i.$nextTick(function () {
                                                        s(i);
                                                       });
                                              }));
                             },
                             function () {
                              !0 === i.focused && i.filterId === n && (clearTimeout(i.filterId), (i.innerLoading = !1), (i.innerLoadingIndicator = !1)), !0 === i.menu && (i.menu = !1);
                             }
                     );
            }
           },
           __getControlEvents: function () {
            var t = this,
                    e = function (e) {
                     t.__onControlFocusout(e, function () {
                      t.__resetInputValue(), t.__closeMenu();
                     });
                    };
            return {
             focusin: this.__onControlFocusin,
             focusout: e,
             "popup-show": this.__onControlPopupShow,
             "popup-hide": function (i) {
              void 0 !== i && y(i), t.$emit("popup-hide", i), (t.hasPopupOpen = !1), e(i);
             },
             click: function (e) {
              if (!0 !== t.hasDialog && (w(e), !0 === t.menu))
               return t.__closeMenu(), void (void 0 !== t.$refs.target && t.$refs.target.focus());
              t.showPopup(e);
             },
            };
           },
           __getControlChild: function (t) {
            if (!1 !== this.editable && (!0 === this.dialog || !0 !== this.noOptions || void 0 !== this.$scopedSlots["no-option"]))
             return this["__get" + (!0 === this.hasDialog ? "Dialog" : "Menu")](t);
           },
           __getMenu: function (t) {
            var e = !0 === this.noOptions ? (void 0 !== this.$scopedSlots["no-option"] ? this.$scopedSlots["no-option"]({inputValue: this.inputValue}) : null) : this.__getOptions(t);
            return t(
                    ai,
                    {
                     ref: "menu",
                     props: {
                      value: this.menu,
                      fit: !0 !== this.menuShrink,
                      cover: !0 === this.optionsCover && !0 !== this.noOptions && !0 !== this.useInput,
                      anchor: this.menuAnchor,
                      self: this.menuSelf,
                      offset: this.menuOffset,
                      contentClass: this.menuContentClass,
                      contentStyle: this.popupContentStyle,
                      dark: this.isOptionsDark,
                      noParentEvent: !0,
                      noRefocus: !0,
                      noFocus: !0,
                      square: this.squaredMenu,
                      transitionShow: this.transitionShow,
                      transitionHide: this.transitionHide,
                      separateClosePopup: !0,
                     },
                     on: mt(this, "menu", {"&scroll": this.__onVirtualScrollEvt, "before-hide": this.__closeMenu, show: this.__onMenuShow}),
                    },
                    e
                    );
           },
           __onMenuShow: function () {
            this.__setVirtualScrollSize();
           },
           __onDialogFieldFocus: function (t) {
            y(t), void 0 !== this.$refs.target && this.$refs.target.focus(), (this.dialogFieldFocused = !0), window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, 0);
           },
           __onDialogFieldBlur: function (t) {
            var e = this;
            y(t),
                    this.$nextTick(function () {
                     e.dialogFieldFocused = !1;
                    });
           },
           __getDialog: function (t) {
            var e = this,
                    i = [
                     t(fo, {
                      staticClass: "col-auto " + this.fieldClass,
                      props: Object.assign({}, this.$props, {for : this.targetUid, dark: this.isOptionsDark, square: !0, filled: !0, itemAligned: !1, loading: this.innerLoadingIndicator, stackLabel: this.inputValue.length > 0}),
                      on: Object.assign({}, this.qListeners, {focus: this.__onDialogFieldFocus, blur: this.__onDialogFieldBlur}),
                      scopedSlots: Object.assign({}, this.$scopedSlots, {
                       rawControl: function () {
                        return e.__getControl(t, !0);
                       },
                       before: void 0,
                       after: void 0,
                      }),
                     }),
                    ];
            return (
                    !0 === this.menu &&
                    i.push(
                            t(
                                    "div",
                                    {ref: "menuContent", staticClass: "scroll", class: this.menuContentClass, style: this.popupContentStyle, on: mt(this, "virtMenu", {click: w, "&scroll": this.__onVirtualScrollEvt})},
                                    !0 === this.noOptions ? (void 0 !== this.$scopedSlots["no-option"] ? this.$scopedSlots["no-option"]({inputValue: this.inputValue}) : null) : this.__getOptions(t)
                                    )
                            ),
                    t(
                            ys,
                            {
                             ref: "dialog",
                             props: {value: this.dialog, dark: this.isOptionsDark, position: !0 === this.useInput ? "top" : void 0, transitionShow: this.transitionShowComputed, transitionHide: this.transitionHide},
                             on: mt(this, "dialog", {"before-hide": this.__onDialogBeforeHide, hide: this.__onDialogHide, show: this.__onDialogShow}),
                            },
                            [t("div", {staticClass: "q-select__dialog" + (!0 === this.isOptionsDark ? " q-select__dialog--dark q-dark" : "") + (!0 === this.dialogFieldFocused ? " q-select__dialog--focused" : "")}, i)]
                            )
                    );
           },
           __onDialogBeforeHide: function () {
            (this.$refs.dialog.__refocusTarget = this.$el.querySelector(".q-field__native > [tabindex]:last-child")), (this.focused = !1);
           },
           __onDialogHide: function (t) {
            this.hidePopup(), !1 === this.focused && this.$emit("blur", t), this.__resetInputValue();
           },
           __onDialogShow: function () {
            var t = document.activeElement;
            (null !== t && t.id === this.targetUid) || this.$refs.target === t || void 0 === this.$refs.target || this.$refs.target.focus(), this.__setVirtualScrollSize();
           },
           __closeMenu: function () {
            void 0 !== this.__optionScopeCache && (this.__optionScopeCache.optionEls = []),
                    !0 !== this.dialog &&
                    ((this.optionIndex = -1),
                            !0 === this.menu && (this.menu = !1),
                            !1 === this.focused && (clearTimeout(this.filterId), (this.filterId = void 0), !0 === this.innerLoading && (this.$emit("filter-abort"), (this.innerLoading = !1), (this.innerLoadingIndicator = !1))));
           },
           showPopup: function (t) {
            var e = this;
            !0 === this.editable &&
                    (!0 === this.hasDialog
                            ? (this.__onControlFocusin(t),
                                    (this.dialog = !0),
                                    this.$nextTick(function () {
                                     e.__focus();
                                    }))
                            : this.__focus(),
                            void 0 !== this.qListeners.filter ? this.filter(this.inputValue) : (!0 === this.noOptions && void 0 === this.$scopedSlots["no-option"]) || (this.menu = !0));
           },
           hidePopup: function () {
            (this.dialog = !1), this.__closeMenu();
           },
           __resetInputValue: function () {
            !0 === this.useInput && this.updateInputValue((!0 !== this.multiple && !0 === this.fillInput && this.innerValue.length > 0 && this.getOptionLabel(this.innerValue[0])) || "", !0, !0);
           },
           __updateMenu: function (t) {
            var e = this,
                    i = -1;
            if (!0 === t) {
             if (this.innerValue.length > 0) {
              var n = this.getOptionValue(this.innerValue[0]);
              i = this.options.findIndex(function (t) {
               return ki(e.getOptionValue(t), n);
              });
             }
             this.__resetVirtualScroll(i);
            }
            this.setOptionIndex(i);
           },
           __onPreRender: function () {
            (this.hasDialog =
                    (!0 === this.$q.platform.is.mobile || "dialog" === this.behavior) &&
                    "menu" !== this.behavior &&
                    (!0 !== this.useInput || void 0 !== this.$scopedSlots["no-option"] || void 0 !== this.qListeners.filter || !1 === this.noOptions)),
                    (this.transitionShowComputed = !0 === this.hasDialog && !0 === this.useInput && !0 === this.$q.platform.is.ios ? "fade" : this.transitionShow);
           },
           __onPostRender: function () {
            !1 === this.dialog && void 0 !== this.$refs.menu && this.$refs.menu.updatePosition();
           },
           updateMenuPosition: function () {
            this.__onPostRender();
           },
          },
          beforeMount: function () {
           this.__optionScopeCache = {optionSlot: this.$scopedSlots.option, options: [], optionEls: []};
          },
          beforeDestroy: function () {
           (this.__optionScopeCache = void 0), clearTimeout(this.inputTimer);
          },
         }),
         Ar = ["text", "rect", "circle", "QBtn", "QBadge", "QChip", "QToolbar", "QCheckbox", "QRadio", "QToggle", "QSlider", "QRange", "QInput", "QAvatar"],
         Dr = ["wave", "pulse", "pulse-x", "pulse-y", "fade", "blink", "none"],
         Ir = t.extend({
          name: "QSkeleton",
          mixins: [It, $t, Lt],
          props: {
           type: {
            type: String,
            validator: function (t) {
             return Ar.includes(t);
            },
            default: "rect",
           },
           animation: {
            type: String,
            validator: function (t) {
             return Dr.includes(t);
            },
            default: "wave",
           },
           square: Boolean,
           bordered: Boolean,
           size: String,
           width: String,
           height: String,
          },
          computed: {
           style: function () {
            return void 0 !== this.size ? {width: this.size, height: this.size} : {width: this.width, height: this.height};
           },
           classes: function () {
            return (
                    "q-skeleton--" +
                    (!0 === this.isDark ? "dark" : "light") +
                    " q-skeleton--type-" +
                    this.type +
                    ("none" !== this.animation ? " q-skeleton--anim q-skeleton--anim-" + this.animation : "") +
                    (!0 === this.square ? " q-skeleton--square" : "") +
                    (!0 === this.bordered ? " q-skeleton--bordered" : "")
                    );
           },
          },
          render: function (t) {
           return t(this.tag, {staticClass: "q-skeleton", class: this.classes, style: this.style, on: Object.assign({}, this.qListeners)}, Ot(this, "default"));
          },
         }),
         Rr = [
          ["left", "center", "start", "width"],
          ["right", "center", "end", "width"],
          ["top", "start", "center", "height"],
          ["bottom", "end", "center", "height"],
         ],
         Fr = t.extend({
          name: "QSlideItem",
          mixins: [It, Lt],
          props: {leftColor: String, rightColor: String, topColor: String, bottomColor: String},
          directives: {TouchPan: Xi},
          computed: {
           langDir: function () {
            return !0 === this.$q.lang.rtl ? {left: "right", right: "left"} : {left: "left", right: "right"};
           },
          },
          methods: {
           reset: function () {
            (this.$refs.content.style.transform = "translate(0,0)"), this.__emitSlide(this.__showing, 0, !0);
           },
           __emitSlide: function (t, e, i) {
            void 0 !== this.qListeners.slide && this.$emit("slide", {side: t, ratio: e, isReset: i});
           },
           __pan: function (t) {
            var e,
                    i,
                    n,
                    s = this,
                    o = this.$refs.content;
            if (t.isFirst)
             (this.__dir = null),
                     (this.__size = {left: 0, right: 0, top: 0, bottom: 0}),
                     (this.__scale = 0),
                     o.classList.add("no-transition"),
                     Rr.forEach(function (t) {
                      if (void 0 !== s.$scopedSlots[t[0]]) {
                       var e = s.$refs[t[0] + "Content"];
                       (e.style.transform = "scale(1)"), (s.__size[t[0]] = e.getBoundingClientRect()[t[3]]);
                      }
                     }),
                     (this.__axis = "up" === t.direction || "down" === t.direction ? "Y" : "X");
            else {
             if (t.isFinal)
              return (
                      o.classList.remove("no-transition"),
                      void (1 === this.__scale
                              ? ((o.style.transform = "translate" + this.__axis + "(" + 100 * this.__dir + "%)"),
                                      (this.timer = setTimeout(function () {
                                       s.$emit(s.__showing, {reset: s.reset}), s.$emit("action", {side: s.__showing, reset: s.reset});
                                      }, 230)))
                              : ((o.style.transform = "translate(0,0)"), this.__emitSlide(this.__showing, 0, !0)))
                      );
             t.direction = "X" === this.__axis ? (t.offset.x < 0 ? "left" : "right") : t.offset.y < 0 ? "up" : "down";
            }
            (void 0 === this.$scopedSlots.left && t.direction === this.langDir.right) ||
                    (void 0 === this.$scopedSlots.right && t.direction === this.langDir.left) ||
                    (void 0 === this.$scopedSlots.top && "down" === t.direction) ||
                    (void 0 === this.$scopedSlots.bottom && "up" === t.direction)
                    ? (o.style.transform = "translate(0,0)")
                    : ("X" === this.__axis
                            ? ((i = "left" === t.direction ? -1 : 1), (e = 1 === i ? this.langDir.left : this.langDir.right), (n = t.distance.x))
                            : ((i = "up" === t.direction ? -2 : 2), (e = 2 === i ? "top" : "bottom"), (n = t.distance.y)),
                            (null !== this.__dir && Math.abs(i) !== Math.abs(this.__dir)) ||
                            (this.__dir !== i &&
                                    (["left", "right", "top", "bottom"].forEach(function (t) {
                                     void 0 !== s.$refs[t] && (s.$refs[t].style.visibility = e === t ? "visible" : "hidden");
                                    }),
                                            (this.__showing = e),
                                            (this.__dir = i)),
                                    (this.__scale = Math.max(0, Math.min(1, (n - 40) / this.__size[e]))),
                                    (o.style.transform = "translate" + this.__axis + "(" + (n * i) / Math.abs(i) + "px)"),
                                    (this.$refs[e + "Content"].style.transform = "scale(" + this.__scale + ")"),
                                    this.__emitSlide(e, this.__scale, !1)));
           },
          },
          render: function (t) {
           var e = this,
                   i = [],
                   n = {left: void 0 !== this.$scopedSlots[this.langDir.right], right: void 0 !== this.$scopedSlots[this.langDir.left], up: void 0 !== this.$scopedSlots.bottom, down: void 0 !== this.$scopedSlots.top},
                   s = Object.keys(n).filter(function (t) {
            return !0 === n[t];
           });
           return (
                   Rr.forEach(function (n) {
                    var s = n[0];
                    void 0 !== e.$scopedSlots[s] &&
                            i.push(
                                    t("div", {ref: s, class: "q-slide-item__" + s + " absolute-full row no-wrap items-" + n[1] + " justify-" + n[2] + (void 0 !== e[s + "Color"] ? " bg-" + e[s + "Color"] : "")}, [
                                     t("div", {ref: s + "Content"}, e.$scopedSlots[s]()),
                                    ])
                                    );
                   }),
                   i.push(
                           t(
                                   "div",
                                   {
                                    ref: "content",
                                    key: "content",
                                    staticClass: "q-slide-item__content",
                                    directives:
                                            s.length > 0
                                            ? vt(this, "dir#" + s.join(""), function () {
                                             var t = {prevent: !0, stop: !0, mouse: !0};
                                             return (
                                                     s.forEach(function (e) {
                                                      t[e] = !0;
                                                     }),
                                                     [{name: "touch-pan", value: e.__pan, modifiers: t}]
                                                     );
                                            })
                                            : null,
                                   },
                                   Ot(this, "default")
                                   )
                           ),
                   t("div", {staticClass: "q-slide-item q-item-type overflow-hidden", class: !0 === this.isDark ? "q-slide-item--dark q-dark" : "", on: Object.assign({}, this.qListeners)}, i)
                   );
          },
          beforeDestroy: function () {
           clearTimeout(this.timer);
          },
         }),
         jr = t.extend({
          name: "QSpace",
          mixins: [Lt],
          render: function (t) {
           return t("div", {staticClass: "q-space", on: Object.assign({}, this.qListeners)});
          },
         }),
         Vr = t.extend({
          name: "QSpinnerAudio",
          mixins: [Kt],
          render: function (t) {
           return t(
                   "svg",
                   {
                    staticClass: "q-spinner",
                    class: this.classes,
                    on: Object.assign({}, this.qListeners),
                    attrs: {focusable: "false", fill: "currentColor", width: this.cSize, height: this.cSize, viewBox: "0 0 55 80", xmlns: "http://www.w3.org/2000/svg"},
                   },
                   [
                    t("g", {attrs: {transform: "matrix(1 0 0 -1 0 80)"}}, [
                     t("rect", {attrs: {width: "10", height: "20", rx: "3"}}, [
                      t("animate", {attrs: {attributeName: "height", begin: "0s", dur: "4.3s", values: "20;45;57;80;64;32;66;45;64;23;66;13;64;56;34;34;2;23;76;79;20", calcMode: "linear", repeatCount: "indefinite"}}),
                     ]),
                     t("rect", {attrs: {x: "15", width: "10", height: "80", rx: "3"}}, [
                      t("animate", {attrs: {attributeName: "height", begin: "0s", dur: "2s", values: "80;55;33;5;75;23;73;33;12;14;60;80", calcMode: "linear", repeatCount: "indefinite"}}),
                     ]),
                     t("rect", {attrs: {x: "30", width: "10", height: "50", rx: "3"}}, [
                      t("animate", {attrs: {attributeName: "height", begin: "0s", dur: "1.4s", values: "50;34;78;23;56;23;34;76;80;54;21;50", calcMode: "linear", repeatCount: "indefinite"}}),
                     ]),
                     t("rect", {attrs: {x: "45", width: "10", height: "30", rx: "3"}}, [
                      t("animate", {attrs: {attributeName: "height", begin: "0s", dur: "2s", values: "30;45;13;80;56;72;45;76;34;23;67;30", calcMode: "linear", repeatCount: "indefinite"}}),
                     ]),
                    ]),
                   ]
                   );
          },
         }),
         Nr = t.extend({
          name: "QSpinnerBall",
          mixins: [Kt],
          render: function (t) {
           return t(
                   "svg",
                   {
                    staticClass: "q-spinner",
                    class: this.classes,
                    on: Object.assign({}, this.qListeners),
                    attrs: {focusable: "false", stroke: "currentColor", width: this.cSize, height: this.cSize, viewBox: "0 0 57 57", xmlns: "http://www.w3.org/2000/svg"},
                   },
                   [
                    t("g", {attrs: {transform: "translate(1 1)", "stroke-width": "2", fill: "none", "fill-rule": "evenodd"}}, [
                     t("circle", {attrs: {cx: "5", cy: "50", r: "5"}}, [
                      t("animate", {attrs: {attributeName: "cy", begin: "0s", dur: "2.2s", values: "50;5;50;50", calcMode: "linear", repeatCount: "indefinite"}}),
                      t("animate", {attrs: {attributeName: "cx", begin: "0s", dur: "2.2s", values: "5;27;49;5", calcMode: "linear", repeatCount: "indefinite"}}),
                     ]),
                     t("circle", {attrs: {cx: "27", cy: "5", r: "5"}}, [
                      t("animate", {attrs: {attributeName: "cy", begin: "0s", dur: "2.2s", from: "5", to: "5", values: "5;50;50;5", calcMode: "linear", repeatCount: "indefinite"}}),
                      t("animate", {attrs: {attributeName: "cx", begin: "0s", dur: "2.2s", from: "27", to: "27", values: "27;49;5;27", calcMode: "linear", repeatCount: "indefinite"}}),
                     ]),
                     t("circle", {attrs: {cx: "49", cy: "50", r: "5"}}, [
                      t("animate", {attrs: {attributeName: "cy", begin: "0s", dur: "2.2s", values: "50;50;5;50", calcMode: "linear", repeatCount: "indefinite"}}),
                      t("animate", {attrs: {attributeName: "cx", from: "49", to: "49", begin: "0s", dur: "2.2s", values: "49;5;27;49", calcMode: "linear", repeatCount: "indefinite"}}),
                     ]),
                    ]),
                   ]
                   );
          },
         }),
         Hr = t.extend({
          name: "QSpinnerBars",
          mixins: [Kt],
          render: function (t) {
           return t(
                   "svg",
                   {
                    staticClass: "q-spinner",
                    class: this.classes,
                    on: Object.assign({}, this.qListeners),
                    attrs: {focusable: "false", fill: "currentColor", width: this.cSize, height: this.cSize, viewBox: "0 0 135 140", xmlns: "http://www.w3.org/2000/svg"},
                   },
                   [
                    t("rect", {attrs: {y: "10", width: "15", height: "120", rx: "6"}}, [
                     t("animate", {attrs: {attributeName: "height", begin: "0.5s", dur: "1s", values: "120;110;100;90;80;70;60;50;40;140;120", calcMode: "linear", repeatCount: "indefinite"}}),
                     t("animate", {attrs: {attributeName: "y", begin: "0.5s", dur: "1s", values: "10;15;20;25;30;35;40;45;50;0;10", calcMode: "linear", repeatCount: "indefinite"}}),
                    ]),
                    t("rect", {attrs: {x: "30", y: "10", width: "15", height: "120", rx: "6"}}, [
                     t("animate", {attrs: {attributeName: "height", begin: "0.25s", dur: "1s", values: "120;110;100;90;80;70;60;50;40;140;120", calcMode: "linear", repeatCount: "indefinite"}}),
                     t("animate", {attrs: {attributeName: "y", begin: "0.25s", dur: "1s", values: "10;15;20;25;30;35;40;45;50;0;10", calcMode: "linear", repeatCount: "indefinite"}}),
                    ]),
                    t("rect", {attrs: {x: "60", width: "15", height: "140", rx: "6"}}, [
                     t("animate", {attrs: {attributeName: "height", begin: "0s", dur: "1s", values: "120;110;100;90;80;70;60;50;40;140;120", calcMode: "linear", repeatCount: "indefinite"}}),
                     t("animate", {attrs: {attributeName: "y", begin: "0s", dur: "1s", values: "10;15;20;25;30;35;40;45;50;0;10", calcMode: "linear", repeatCount: "indefinite"}}),
                    ]),
                    t("rect", {attrs: {x: "90", y: "10", width: "15", height: "120", rx: "6"}}, [
                     t("animate", {attrs: {attributeName: "height", begin: "0.25s", dur: "1s", values: "120;110;100;90;80;70;60;50;40;140;120", calcMode: "linear", repeatCount: "indefinite"}}),
                     t("animate", {attrs: {attributeName: "y", begin: "0.25s", dur: "1s", values: "10;15;20;25;30;35;40;45;50;0;10", calcMode: "linear", repeatCount: "indefinite"}}),
                    ]),
                    t("rect", {attrs: {x: "120", y: "10", width: "15", height: "120", rx: "6"}}, [
                     t("animate", {attrs: {attributeName: "height", begin: "0.5s", dur: "1s", values: "120;110;100;90;80;70;60;50;40;140;120", calcMode: "linear", repeatCount: "indefinite"}}),
                     t("animate", {attrs: {attributeName: "y", begin: "0.5s", dur: "1s", values: "10;15;20;25;30;35;40;45;50;0;10", calcMode: "linear", repeatCount: "indefinite"}}),
                    ]),
                   ]
                   );
          },
         }),
         Qr = t.extend({
          name: "QSpinnerBox",
          mixins: [Kt],
          render: function (t) {
           return t(
                   "svg",
                   {
                    staticClass: "q-spinner",
                    class: this.classes,
                    on: Object.assign({}, this.qListeners),
                    attrs: {focusable: "false", width: this.cSize, height: this.cSize, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid"},
                   },
                   [
                    t("rect", {attrs: {x: "25", y: "25", width: "50", height: "50", fill: "none", "stroke-width": "4", stroke: "currentColor"}}, [
                     t("animateTransform", {attrs: {id: "spinnerBox", attributeName: "transform", type: "rotate", from: "0 50 50", to: "180 50 50", dur: "0.5s", begin: "rectBox.end"}}),
                    ]),
                    t("rect", {attrs: {x: "27", y: "27", width: "46", height: "50", fill: "currentColor"}}, [
                     t("animate", {attrs: {id: "rectBox", attributeName: "height", begin: "0s;spinnerBox.end", dur: "1.3s", from: "50", to: "0", fill: "freeze"}}),
                    ]),
                   ]
                   );
          },
         }),
         Wr = t.extend({
          name: "QSpinnerClock",
          mixins: [Kt],
          render: function (t) {
           return t(
                   "svg",
                   {
                    staticClass: "q-spinner",
                    class: this.classes,
                    on: Object.assign({}, this.qListeners),
                    attrs: {focusable: "false", width: this.cSize, height: this.cSize, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid"},
                   },
                   [
                    t("circle", {attrs: {cx: "50", cy: "50", r: "48", fill: "none", "stroke-width": "4", "stroke-miterlimit": "10", stroke: "currentColor"}}),
                    t("line", {attrs: {"stroke-linecap": "round", "stroke-width": "4", "stroke-miterlimit": "10", stroke: "currentColor", x1: "50", y1: "50", x2: "85", y2: "50.5"}}, [
                     t("animateTransform", {attrs: {attributeName: "transform", type: "rotate", from: "0 50 50", to: "360 50 50", dur: "2s", repeatCount: "indefinite"}}),
                    ]),
                    t("line", {attrs: {"stroke-linecap": "round", "stroke-width": "4", "stroke-miterlimit": "10", stroke: "currentColor", x1: "50", y1: "50", x2: "49.5", y2: "74"}}, [
                     t("animateTransform", {attrs: {attributeName: "transform", type: "rotate", from: "0 50 50", to: "360 50 50", dur: "15s", repeatCount: "indefinite"}}),
                    ]),
                   ]
                   );
          },
         }),
         Yr = t.extend({
          name: "QSpinnerComment",
          mixins: [Kt],
          render: function (t) {
           return t(
                   "svg",
                   {
                    staticClass: "q-spinner",
                    class: this.classes,
                    on: Object.assign({}, this.qListeners),
                    attrs: {focusable: "false", width: this.cSize, height: this.cSize, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid"},
                   },
                   [
                    t("rect", {attrs: {x: "0", y: "0", width: "100", height: "100", fill: "none"}}),
                    t("path", {
                     attrs: {
                      d: "M78,19H22c-6.6,0-12,5.4-12,12v31c0,6.6,5.4,12,12,12h37.2c0.4,3,1.8,5.6,3.7,7.6c2.4,2.5,5.1,4.1,9.1,4 c-1.4-2.1-2-7.2-2-10.3c0-0.4,0-0.8,0-1.3h8c6.6,0,12-5.4,12-12V31C90,24.4,84.6,19,78,19z",
                      fill: "currentColor",
                     },
                    }),
                    t("circle", {attrs: {cx: "30", cy: "47", r: "5", fill: "#fff"}}, [
                     t("animate", {attrs: {attributeName: "opacity", from: "0", to: "1", values: "0;1;1", keyTimes: "0;0.2;1", dur: "1s", repeatCount: "indefinite"}}),
                    ]),
                    t("circle", {attrs: {cx: "50", cy: "47", r: "5", fill: "#fff"}}, [
                     t("animate", {attrs: {attributeName: "opacity", from: "0", to: "1", values: "0;0;1;1", keyTimes: "0;0.2;0.4;1", dur: "1s", repeatCount: "indefinite"}}),
                    ]),
                    t("circle", {attrs: {cx: "70", cy: "47", r: "5", fill: "#fff"}}, [
                     t("animate", {attrs: {attributeName: "opacity", from: "0", to: "1", values: "0;0;1;1", keyTimes: "0;0.4;0.6;1", dur: "1s", repeatCount: "indefinite"}}),
                    ]),
                   ]
                   );
          },
         }),
         Ur = t.extend({
          name: "QSpinnerCube",
          mixins: [Kt],
          render: function (t) {
           return t(
                   "svg",
                   {
                    staticClass: "q-spinner",
                    class: this.classes,
                    on: Object.assign({}, this.qListeners),
                    attrs: {focusable: "false", width: this.cSize, height: this.cSize, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid"},
                   },
                   [
                    t("rect", {attrs: {x: "0", y: "0", width: "100", height: "100", fill: "none"}}),
                    t("g", {attrs: {transform: "translate(25 25)"}}, [
                     t("rect", {attrs: {x: "-20", y: "-20", width: "40", height: "40", fill: "currentColor", opacity: "0.9"}}, [
                      t("animateTransform", {
                       attrs: {attributeName: "transform", type: "scale", from: "1.5", to: "1", repeatCount: "indefinite", begin: "0s", dur: "1s", calcMode: "spline", keySplines: "0.2 0.8 0.2 0.8", keyTimes: "0;1"},
                      }),
                     ]),
                    ]),
                    t("g", {attrs: {transform: "translate(75 25)"}}, [
                     t("rect", {attrs: {x: "-20", y: "-20", width: "40", height: "40", fill: "currentColor", opacity: "0.8"}}, [
                      t("animateTransform", {
                       attrs: {attributeName: "transform", type: "scale", from: "1.5", to: "1", repeatCount: "indefinite", begin: "0.1s", dur: "1s", calcMode: "spline", keySplines: "0.2 0.8 0.2 0.8", keyTimes: "0;1"},
                      }),
                     ]),
                    ]),
                    t("g", {attrs: {transform: "translate(25 75)"}}, [
                     t("rect", {staticClass: "cube", attrs: {x: "-20", y: "-20", width: "40", height: "40", fill: "currentColor", opacity: "0.7"}}, [
                      t("animateTransform", {
                       attrs: {attributeName: "transform", type: "scale", from: "1.5", to: "1", repeatCount: "indefinite", begin: "0.3s", dur: "1s", calcMode: "spline", keySplines: "0.2 0.8 0.2 0.8", keyTimes: "0;1"},
                      }),
                     ]),
                    ]),
                    t("g", {attrs: {transform: "translate(75 75)"}}, [
                     t("rect", {staticClass: "cube", attrs: {x: "-20", y: "-20", width: "40", height: "40", fill: "currentColor", opacity: "0.6"}}, [
                      t("animateTransform", {
                       attrs: {attributeName: "transform", type: "scale", from: "1.5", to: "1", repeatCount: "indefinite", begin: "0.2s", dur: "1s", calcMode: "spline", keySplines: "0.2 0.8 0.2 0.8", keyTimes: "0;1"},
                      }),
                     ]),
                    ]),
                   ]
                   );
          },
         }),
         Kr = t.extend({
          name: "QSpinnerDots",
          mixins: [Kt],
          render: function (t) {
           return t(
                   "svg",
                   {
                    staticClass: "q-spinner",
                    class: this.classes,
                    on: Object.assign({}, this.qListeners),
                    attrs: {focusable: "false", fill: "currentColor", width: this.cSize, height: this.cSize, viewBox: "0 0 120 30", xmlns: "http://www.w3.org/2000/svg"},
                   },
                   [
                    t("circle", {attrs: {cx: "15", cy: "15", r: "15"}}, [
                     t("animate", {attrs: {attributeName: "r", from: "15", to: "15", begin: "0s", dur: "0.8s", values: "15;9;15", calcMode: "linear", repeatCount: "indefinite"}}),
                     t("animate", {attrs: {attributeName: "fill-opacity", from: "1", to: "1", begin: "0s", dur: "0.8s", values: "1;.5;1", calcMode: "linear", repeatCount: "indefinite"}}),
                    ]),
                    t("circle", {attrs: {cx: "60", cy: "15", r: "9", "fill-opacity": ".3"}}, [
                     t("animate", {attrs: {attributeName: "r", from: "9", to: "9", begin: "0s", dur: "0.8s", values: "9;15;9", calcMode: "linear", repeatCount: "indefinite"}}),
                     t("animate", {attrs: {attributeName: "fill-opacity", from: ".5", to: ".5", begin: "0s", dur: "0.8s", values: ".5;1;.5", calcMode: "linear", repeatCount: "indefinite"}}),
                    ]),
                    t("circle", {attrs: {cx: "105", cy: "15", r: "15"}}, [
                     t("animate", {attrs: {attributeName: "r", from: "15", to: "15", begin: "0s", dur: "0.8s", values: "15;9;15", calcMode: "linear", repeatCount: "indefinite"}}),
                     t("animate", {attrs: {attributeName: "fill-opacity", from: "1", to: "1", begin: "0s", dur: "0.8s", values: "1;.5;1", calcMode: "linear", repeatCount: "indefinite"}}),
                    ]),
                   ]
                   );
          },
         }),
         Xr = t.extend({
          name: "QSpinnerFacebook",
          mixins: [Kt],
          render: function (t) {
           return t(
                   "svg",
                   {
                    staticClass: "q-spinner",
                    class: this.classes,
                    on: Object.assign({}, this.qListeners),
                    attrs: {focusable: "false", width: this.cSize, height: this.cSize, viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg", preserveAspectRatio: "xMidYMid"},
                   },
                   [
                    t("g", {attrs: {transform: "translate(20 50)"}}, [
                     t("rect", {attrs: {x: "-10", y: "-30", width: "20", height: "60", fill: "currentColor", opacity: "0.6"}}, [
                      t("animateTransform", {
                       attrs: {
                        attributeName: "transform",
                        type: "scale",
                        from: "2",
                        to: "1",
                        begin: "0s",
                        repeatCount: "indefinite",
                        dur: "1s",
                        calcMode: "spline",
                        keySplines: "0.1 0.9 0.4 1",
                        keyTimes: "0;1",
                        values: "2;1",
                       },
                      }),
                     ]),
                    ]),
                    t("g", {attrs: {transform: "translate(50 50)"}}, [
                     t("rect", {attrs: {x: "-10", y: "-30", width: "20", height: "60", fill: "currentColor", opacity: "0.8"}}, [
                      t("animateTransform", {
                       attrs: {
                        attributeName: "transform",
                        type: "scale",
                        from: "2",
                        to: "1",
                        begin: "0.1s",
                        repeatCount: "indefinite",
                        dur: "1s",
                        calcMode: "spline",
                        keySplines: "0.1 0.9 0.4 1",
                        keyTimes: "0;1",
                        values: "2;1",
                       },
                      }),
                     ]),
                    ]),
                    t("g", {attrs: {transform: "translate(80 50)"}}, [
                     t("rect", {attrs: {x: "-10", y: "-30", width: "20", height: "60", fill: "currentColor", opacity: "0.9"}}, [
                      t("animateTransform", {
                       attrs: {
                        attributeName: "transform",
                        type: "scale",
                        from: "2",
                        to: "1",
                        begin: "0.2s",
                        repeatCount: "indefinite",
                        dur: "1s",
                        calcMode: "spline",
                        keySplines: "0.1 0.9 0.4 1",
                        keyTimes: "0;1",
                        values: "2;1",
                       },
                      }),
                     ]),
                    ]),
                   ]
                   );
          },
         }),
         Gr = t.extend({
          name: "QSpinnerGears",
          mixins: [Kt],
          render: function (t) {
           return t(
                   "svg",
                   {
                    staticClass: "q-spinner",
                    class: this.classes,
                    on: Object.assign({}, this.qListeners),
                    attrs: {focusable: "false", width: this.cSize, height: this.cSize, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg"},
                   },
                   [
                    t("g", {attrs: {transform: "translate(-20,-20)"}}, [
                     t(
                             "path",
                             {
                              attrs: {
                               d:
                                       "M79.9,52.6C80,51.8,80,50.9,80,50s0-1.8-0.1-2.6l-5.1-0.4c-0.3-2.4-0.9-4.6-1.8-6.7l4.2-2.9c-0.7-1.6-1.6-3.1-2.6-4.5 L70,35c-1.4-1.9-3.1-3.5-4.9-4.9l2.2-4.6c-1.4-1-2.9-1.9-4.5-2.6L59.8,27c-2.1-0.9-4.4-1.5-6.7-1.8l-0.4-5.1C51.8,20,50.9,20,50,20 s-1.8,0-2.6,0.1l-0.4,5.1c-2.4,0.3-4.6,0.9-6.7,1.8l-2.9-4.1c-1.6,0.7-3.1,1.6-4.5,2.6l2.1,4.6c-1.9,1.4-3.5,3.1-5,4.9l-4.5-2.1 c-1,1.4-1.9,2.9-2.6,4.5l4.1,2.9c-0.9,2.1-1.5,4.4-1.8,6.8l-5,0.4C20,48.2,20,49.1,20,50s0,1.8,0.1,2.6l5,0.4 c0.3,2.4,0.9,4.7,1.8,6.8l-4.1,2.9c0.7,1.6,1.6,3.1,2.6,4.5l4.5-2.1c1.4,1.9,3.1,3.5,5,4.9l-2.1,4.6c1.4,1,2.9,1.9,4.5,2.6l2.9-4.1 c2.1,0.9,4.4,1.5,6.7,1.8l0.4,5.1C48.2,80,49.1,80,50,80s1.8,0,2.6-0.1l0.4-5.1c2.3-0.3,4.6-0.9,6.7-1.8l2.9,4.2 c1.6-0.7,3.1-1.6,4.5-2.6L65,69.9c1.9-1.4,3.5-3,4.9-4.9l4.6,2.2c1-1.4,1.9-2.9,2.6-4.5L73,59.8c0.9-2.1,1.5-4.4,1.8-6.7L79.9,52.6 z M50,65c-8.3,0-15-6.7-15-15c0-8.3,6.7-15,15-15s15,6.7,15,15C65,58.3,58.3,65,50,65z",
                               fill: "currentColor",
                              },
                             },
                             [t("animateTransform", {attrs: {attributeName: "transform", type: "rotate", from: "90 50 50", to: "0 50 50", dur: "1s", repeatCount: "indefinite"}})]
                             ),
                    ]),
                    t("g", {attrs: {transform: "translate(20,20) rotate(15 50 50)"}}, [
                     t(
                             "path",
                             {
                              attrs: {
                               d:
                                       "M79.9,52.6C80,51.8,80,50.9,80,50s0-1.8-0.1-2.6l-5.1-0.4c-0.3-2.4-0.9-4.6-1.8-6.7l4.2-2.9c-0.7-1.6-1.6-3.1-2.6-4.5 L70,35c-1.4-1.9-3.1-3.5-4.9-4.9l2.2-4.6c-1.4-1-2.9-1.9-4.5-2.6L59.8,27c-2.1-0.9-4.4-1.5-6.7-1.8l-0.4-5.1C51.8,20,50.9,20,50,20 s-1.8,0-2.6,0.1l-0.4,5.1c-2.4,0.3-4.6,0.9-6.7,1.8l-2.9-4.1c-1.6,0.7-3.1,1.6-4.5,2.6l2.1,4.6c-1.9,1.4-3.5,3.1-5,4.9l-4.5-2.1 c-1,1.4-1.9,2.9-2.6,4.5l4.1,2.9c-0.9,2.1-1.5,4.4-1.8,6.8l-5,0.4C20,48.2,20,49.1,20,50s0,1.8,0.1,2.6l5,0.4 c0.3,2.4,0.9,4.7,1.8,6.8l-4.1,2.9c0.7,1.6,1.6,3.1,2.6,4.5l4.5-2.1c1.4,1.9,3.1,3.5,5,4.9l-2.1,4.6c1.4,1,2.9,1.9,4.5,2.6l2.9-4.1 c2.1,0.9,4.4,1.5,6.7,1.8l0.4,5.1C48.2,80,49.1,80,50,80s1.8,0,2.6-0.1l0.4-5.1c2.3-0.3,4.6-0.9,6.7-1.8l2.9,4.2 c1.6-0.7,3.1-1.6,4.5-2.6L65,69.9c1.9-1.4,3.5-3,4.9-4.9l4.6,2.2c1-1.4,1.9-2.9,2.6-4.5L73,59.8c0.9-2.1,1.5-4.4,1.8-6.7L79.9,52.6 z M50,65c-8.3,0-15-6.7-15-15c0-8.3,6.7-15,15-15s15,6.7,15,15C65,58.3,58.3,65,50,65z",
                               fill: "currentColor",
                              },
                             },
                             [t("animateTransform", {attrs: {attributeName: "transform", type: "rotate", from: "0 50 50", to: "90 50 50", dur: "1s", repeatCount: "indefinite"}})]
                             ),
                    ]),
                   ]
                   );
          },
         }),
         Zr = t.extend({
          name: "QSpinnerGrid",
          mixins: [Kt],
          render: function (t) {
           return t(
                   "svg",
                   {
                    staticClass: "q-spinner",
                    class: this.classes,
                    on: Object.assign({}, this.qListeners),
                    attrs: {focusable: "false", fill: "currentColor", width: this.cSize, height: this.cSize, viewBox: "0 0 105 105", xmlns: "http://www.w3.org/2000/svg"},
                   },
                   [
                    t("circle", {attrs: {cx: "12.5", cy: "12.5", r: "12.5"}}, [t("animate", {attrs: {attributeName: "fill-opacity", begin: "0s", dur: "1s", values: "1;.2;1", calcMode: "linear", repeatCount: "indefinite"}})]),
                    t("circle", {attrs: {cx: "12.5", cy: "52.5", r: "12.5", "fill-opacity": ".5"}}, [
                     t("animate", {attrs: {attributeName: "fill-opacity", begin: "100ms", dur: "1s", values: "1;.2;1", calcMode: "linear", repeatCount: "indefinite"}}),
                    ]),
                    t("circle", {attrs: {cx: "52.5", cy: "12.5", r: "12.5"}}, [t("animate", {attrs: {attributeName: "fill-opacity", begin: "300ms", dur: "1s", values: "1;.2;1", calcMode: "linear", repeatCount: "indefinite"}})]),
                    t("circle", {attrs: {cx: "52.5", cy: "52.5", r: "12.5"}}, [t("animate", {attrs: {attributeName: "fill-opacity", begin: "600ms", dur: "1s", values: "1;.2;1", calcMode: "linear", repeatCount: "indefinite"}})]),
                    t("circle", {attrs: {cx: "92.5", cy: "12.5", r: "12.5"}}, [t("animate", {attrs: {attributeName: "fill-opacity", begin: "800ms", dur: "1s", values: "1;.2;1", calcMode: "linear", repeatCount: "indefinite"}})]),
                    t("circle", {attrs: {cx: "92.5", cy: "52.5", r: "12.5"}}, [t("animate", {attrs: {attributeName: "fill-opacity", begin: "400ms", dur: "1s", values: "1;.2;1", calcMode: "linear", repeatCount: "indefinite"}})]),
                    t("circle", {attrs: {cx: "12.5", cy: "92.5", r: "12.5"}}, [t("animate", {attrs: {attributeName: "fill-opacity", begin: "700ms", dur: "1s", values: "1;.2;1", calcMode: "linear", repeatCount: "indefinite"}})]),
                    t("circle", {attrs: {cx: "52.5", cy: "92.5", r: "12.5"}}, [t("animate", {attrs: {attributeName: "fill-opacity", begin: "500ms", dur: "1s", values: "1;.2;1", calcMode: "linear", repeatCount: "indefinite"}})]),
                    t("circle", {attrs: {cx: "92.5", cy: "92.5", r: "12.5"}}, [t("animate", {attrs: {attributeName: "fill-opacity", begin: "200ms", dur: "1s", values: "1;.2;1", calcMode: "linear", repeatCount: "indefinite"}})]),
                   ]
                   );
          },
         }),
         Jr = t.extend({
          name: "QSpinnerHearts",
          mixins: [Kt],
          render: function (t) {
           return t(
                   "svg",
                   {
                    staticClass: "q-spinner",
                    class: this.classes,
                    on: Object.assign({}, this.qListeners),
                    attrs: {focusable: "false", fill: "currentColor", width: this.cSize, height: this.cSize, viewBox: "0 0 140 64", xmlns: "http://www.w3.org/2000/svg"},
                   },
                   [
                    t(
                            "path",
                            {
                             attrs: {
                              d:
                                      "M30.262 57.02L7.195 40.723c-5.84-3.976-7.56-12.06-3.842-18.063 3.715-6 11.467-7.65 17.306-3.68l4.52 3.76 2.6-5.274c3.716-6.002 11.47-7.65 17.304-3.68 5.84 3.97 7.56 12.054 3.842 18.062L34.49 56.118c-.897 1.512-2.793 1.915-4.228.9z",
                              "fill-opacity": ".5",
                             },
                            },
                            [t("animate", {attrs: {attributeName: "fill-opacity", begin: "0s", dur: "1.4s", values: "0.5;1;0.5", calcMode: "linear", repeatCount: "indefinite"}})]
                            ),
                    t(
                            "path",
                            {
                             attrs: {
                              d:
                                      "M105.512 56.12l-14.44-24.272c-3.716-6.008-1.996-14.093 3.843-18.062 5.835-3.97 13.588-2.322 17.306 3.68l2.6 5.274 4.52-3.76c5.84-3.97 13.593-2.32 17.308 3.68 3.718 6.003 1.998 14.088-3.842 18.064L109.74 57.02c-1.434 1.014-3.33.61-4.228-.9z",
                              "fill-opacity": ".5",
                             },
                            },
                            [t("animate", {attrs: {attributeName: "fill-opacity", begin: "0.7s", dur: "1.4s", values: "0.5;1;0.5", calcMode: "linear", repeatCount: "indefinite"}})]
                            ),
                    t("path", {
                     attrs: {
                      d:
                              "M67.408 57.834l-23.01-24.98c-5.864-6.15-5.864-16.108 0-22.248 5.86-6.14 15.37-6.14 21.234 0L70 16.168l4.368-5.562c5.863-6.14 15.375-6.14 21.235 0 5.863 6.14 5.863 16.098 0 22.247l-23.007 24.98c-1.43 1.556-3.757 1.556-5.188 0z",
                     },
                    }),
                   ]
                   );
          },
         }),
         ta = t.extend({
          name: "QSpinnerHourglass",
          mixins: [Kt],
          render: function (t) {
           return t(
                   "svg",
                   {
                    staticClass: "q-spinner",
                    class: this.classes,
                    on: Object.assign({}, this.qListeners),
                    attrs: {focusable: "false", width: this.cSize, height: this.cSize, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg"},
                   },
                   [
                    t("g", [
                     t("path", {
                      staticClass: "glass",
                      attrs: {
                       fill: "none",
                       stroke: "currentColor",
                       "stroke-width": "5",
                       "stroke-miterlimit": "10",
                       d:
                               "M58.4,51.7c-0.9-0.9-1.4-2-1.4-2.3s0.5-0.4,1.4-1.4 C70.8,43.8,79.8,30.5,80,15.5H70H30H20c0.2,15,9.2,28.1,21.6,32.3c0.9,0.9,1.4,1.2,1.4,1.5s-0.5,1.6-1.4,2.5 C29.2,56.1,20.2,69.5,20,85.5h10h40h10C79.8,69.5,70.8,55.9,58.4,51.7z",
                      },
                     }),
                     t("clipPath", {attrs: {id: "uil-hourglass-clip1"}}, [
                      t("rect", {staticClass: "clip", attrs: {x: "15", y: "20", width: "70", height: "25"}}, [
                       t("animate", {attrs: {attributeName: "height", from: "25", to: "0", dur: "1s", repeatCount: "indefinite", values: "25;0;0", keyTimes: "0;0.5;1"}}),
                       t("animate", {attrs: {attributeName: "y", from: "20", to: "45", dur: "1s", repeatCount: "indefinite", values: "20;45;45", keyTimes: "0;0.5;1"}}),
                      ]),
                     ]),
                     t("clipPath", {attrs: {id: "uil-hourglass-clip2"}}, [
                      t("rect", {staticClass: "clip", attrs: {x: "15", y: "55", width: "70", height: "25"}}, [
                       t("animate", {attrs: {attributeName: "height", from: "0", to: "25", dur: "1s", repeatCount: "indefinite", values: "0;25;25", keyTimes: "0;0.5;1"}}),
                       t("animate", {attrs: {attributeName: "y", from: "80", to: "55", dur: "1s", repeatCount: "indefinite", values: "80;55;55", keyTimes: "0;0.5;1"}}),
                      ]),
                     ]),
                     t("path", {staticClass: "sand", attrs: {d: "M29,23c3.1,11.4,11.3,19.5,21,19.5S67.9,34.4,71,23H29z", "clip-path": "url(#uil-hourglass-clip1)", fill: "currentColor"}}),
                     t("path", {staticClass: "sand", attrs: {d: "M71.6,78c-3-11.6-11.5-20-21.5-20s-18.5,8.4-21.5,20H71.6z", "clip-path": "url(#uil-hourglass-clip2)", fill: "currentColor"}}),
                     t("animateTransform", {attrs: {attributeName: "transform", type: "rotate", from: "0 50 50", to: "180 50 50", repeatCount: "indefinite", dur: "1s", values: "0 50 50;0 50 50;180 50 50", keyTimes: "0;0.7;1"}}),
                    ]),
                   ]
                   );
          },
         }),
         ea = t.extend({
          name: "QSpinnerInfinity",
          mixins: [Kt],
          render: function (t) {
           return t(
                   "svg",
                   {staticClass: "q-spinner", class: this.classes, on: Object.assign({}, this.qListeners), attrs: {focusable: "false", width: this.cSize, height: this.cSize, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid"}},
                   [
                    t(
                            "path",
                            {
                             attrs: {
                              d: "M24.3,30C11.4,30,5,43.3,5,50s6.4,20,19.3,20c19.3,0,32.1-40,51.4-40C88.6,30,95,43.3,95,50s-6.4,20-19.3,20C56.4,70,43.6,30,24.3,30z",
                              fill: "none",
                              stroke: "currentColor",
                              "stroke-width": "8",
                              "stroke-dasharray": "10.691205342610678 10.691205342610678",
                              "stroke-dashoffset": "0",
                             },
                            },
                            [t("animate", {attrs: {attributeName: "stroke-dashoffset", from: "0", to: "21.382410685221355", begin: "0", dur: "2s", repeatCount: "indefinite", fill: "freeze"}})]
                            ),
                   ]
                   );
          },
         }),
         ia = t.extend({
          name: "QSpinnerIos",
          mixins: [Kt],
          render: function (t) {
           return t(
                   "svg",
                   {
                    staticClass: "q-spinner",
                    class: this.classes,
                    on: Object.assign({}, this.qListeners),
                    attrs: {focusable: "false", width: this.cSize, height: this.cSize, stroke: "currentColor", fill: "currentColor", viewBox: "0 0 64 64"},
                   },
                   [
                    t("g", {attrs: {"stroke-width": "4", "stroke-linecap": "round"}}, [
                     t("line", {attrs: {y1: "17", y2: "29", transform: "translate(32,32) rotate(180)"}}, [
                      t("animate", {attrs: {attributeName: "stroke-opacity", dur: "750ms", values: "1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1", repeatCount: "indefinite"}}),
                     ]),
                     t("line", {attrs: {y1: "17", y2: "29", transform: "translate(32,32) rotate(210)"}}, [
                      t("animate", {attrs: {attributeName: "stroke-opacity", dur: "750ms", values: "0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0", repeatCount: "indefinite"}}),
                     ]),
                     t("line", {attrs: {y1: "17", y2: "29", transform: "translate(32,32) rotate(240)"}}, [
                      t("animate", {attrs: {attributeName: "stroke-opacity", dur: "750ms", values: ".1;0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1", repeatCount: "indefinite"}}),
                     ]),
                     t("line", {attrs: {y1: "17", y2: "29", transform: "translate(32,32) rotate(270)"}}, [
                      t("animate", {attrs: {attributeName: "stroke-opacity", dur: "750ms", values: ".15;.1;0;1;.85;.7;.65;.55;.45;.35;.25;.15", repeatCount: "indefinite"}}),
                     ]),
                     t("line", {attrs: {y1: "17", y2: "29", transform: "translate(32,32) rotate(300)"}}, [
                      t("animate", {attrs: {attributeName: "stroke-opacity", dur: "750ms", values: ".25;.15;.1;0;1;.85;.7;.65;.55;.45;.35;.25", repeatCount: "indefinite"}}),
                     ]),
                     t("line", {attrs: {y1: "17", y2: "29", transform: "translate(32,32) rotate(330)"}}, [
                      t("animate", {attrs: {attributeName: "stroke-opacity", dur: "750ms", values: ".35;.25;.15;.1;0;1;.85;.7;.65;.55;.45;.35", repeatCount: "indefinite"}}),
                     ]),
                     t("line", {attrs: {y1: "17", y2: "29", transform: "translate(32,32) rotate(0)"}}, [
                      t("animate", {attrs: {attributeName: "stroke-opacity", dur: "750ms", values: ".45;.35;.25;.15;.1;0;1;.85;.7;.65;.55;.45", repeatCount: "indefinite"}}),
                     ]),
                     t("line", {attrs: {y1: "17", y2: "29", transform: "translate(32,32) rotate(30)"}}, [
                      t("animate", {attrs: {attributeName: "stroke-opacity", dur: "750ms", values: ".55;.45;.35;.25;.15;.1;0;1;.85;.7;.65;.55", repeatCount: "indefinite"}}),
                     ]),
                     t("line", {attrs: {y1: "17", y2: "29", transform: "translate(32,32) rotate(60)"}}, [
                      t("animate", {attrs: {attributeName: "stroke-opacity", dur: "750ms", values: ".65;.55;.45;.35;.25;.15;.1;0;1;.85;.7;.65", repeatCount: "indefinite"}}),
                     ]),
                     t("line", {attrs: {y1: "17", y2: "29", transform: "translate(32,32) rotate(90)"}}, [
                      t("animate", {attrs: {attributeName: "stroke-opacity", dur: "750ms", values: ".7;.65;.55;.45;.35;.25;.15;.1;0;1;.85;.7", repeatCount: "indefinite"}}),
                     ]),
                     t("line", {attrs: {y1: "17", y2: "29", transform: "translate(32,32) rotate(120)"}}, [
                      t("animate", {attrs: {attributeName: "stroke-opacity", dur: "750ms", values: ".85;.7;.65;.55;.45;.35;.25;.15;.1;0;1;.85", repeatCount: "indefinite"}}),
                     ]),
                     t("line", {attrs: {y1: "17", y2: "29", transform: "translate(32,32) rotate(150)"}}, [
                      t("animate", {attrs: {attributeName: "stroke-opacity", dur: "750ms", values: "1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1", repeatCount: "indefinite"}}),
                     ]),
                    ]),
                   ]
                   );
          },
         }),
         na = t.extend({
          name: "QSpinnerOrbit",
          mixins: [Kt],
          render: function (t) {
           return t(
                   "svg",
                   {
                    staticClass: "q-spinner",
                    class: this.classes,
                    on: Object.assign({}, this.qListeners),
                    attrs: {focusable: "false", width: this.cSize, height: this.cSize, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid"},
                   },
                   [
                    t("circle", {attrs: {cx: "50", cy: "50", r: "44", fill: "none", "stroke-width": "4", "stroke-opacity": ".5", stroke: "currentColor"}}),
                    t("circle", {attrs: {cx: "8", cy: "54", r: "6", fill: "currentColor", "stroke-width": "3", stroke: "currentColor"}}, [
                     t("animateTransform", {attrs: {attributeName: "transform", type: "rotate", from: "0 50 48", to: "360 50 52", dur: "2s", repeatCount: "indefinite"}}),
                    ]),
                   ]
                   );
          },
         }),
         sa = t.extend({
          name: "QSpinnerOval",
          mixins: [Kt],
          render: function (t) {
           return t(
                   "svg",
                   {
                    staticClass: "q-spinner",
                    class: this.classes,
                    on: Object.assign({}, this.qListeners),
                    attrs: {focusable: "false", stroke: "currentColor", width: this.cSize, height: this.cSize, viewBox: "0 0 38 38", xmlns: "http://www.w3.org/2000/svg"},
                   },
                   [
                    t("g", {attrs: {transform: "translate(1 1)", "stroke-width": "2", fill: "none", "fill-rule": "evenodd"}}, [
                     t("circle", {attrs: {"stroke-opacity": ".5", cx: "18", cy: "18", r: "18"}}),
                     t("path", {attrs: {d: "M36 18c0-9.94-8.06-18-18-18"}}, [
                      t("animateTransform", {attrs: {attributeName: "transform", type: "rotate", from: "0 18 18", to: "360 18 18", dur: "1s", repeatCount: "indefinite"}}),
                     ]),
                    ]),
                   ]
                   );
          },
         }),
         oa = t.extend({
          name: "QSpinnerPie",
          mixins: [Kt],
          render: function (t) {
           return t(
                   "svg",
                   {
                    staticClass: "q-spinner",
                    class: this.classes,
                    on: Object.assign({}, this.qListeners),
                    attrs: {focusable: "false", width: this.cSize, height: this.cSize, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg"},
                   },
                   [
                    t("path", {attrs: {d: "M0 50A50 50 0 0 1 50 0L50 50L0 50", fill: "currentColor", opacity: "0.5"}}, [
                     t("animateTransform", {attrs: {attributeName: "transform", type: "rotate", from: "0 50 50", to: "360 50 50", dur: "0.8s", repeatCount: "indefinite"}}),
                    ]),
                    t("path", {attrs: {d: "M50 0A50 50 0 0 1 100 50L50 50L50 0", fill: "currentColor", opacity: "0.5"}}, [
                     t("animateTransform", {attrs: {attributeName: "transform", type: "rotate", from: "0 50 50", to: "360 50 50", dur: "1.6s", repeatCount: "indefinite"}}),
                    ]),
                    t("path", {attrs: {d: "M100 50A50 50 0 0 1 50 100L50 50L100 50", fill: "currentColor", opacity: "0.5"}}, [
                     t("animateTransform", {attrs: {attributeName: "transform", type: "rotate", from: "0 50 50", to: "360 50 50", dur: "2.4s", repeatCount: "indefinite"}}),
                    ]),
                    t("path", {attrs: {d: "M50 100A50 50 0 0 1 0 50L50 50L50 100", fill: "currentColor", opacity: "0.5"}}, [
                     t("animateTransform", {attrs: {attributeName: "transform", type: "rotate", from: "0 50 50", to: "360 50 50", dur: "3.2s", repeatCount: "indefinite"}}),
                    ]),
                   ]
                   );
          },
         }),
         ra = t.extend({
          name: "QSpinnerPuff",
          mixins: [Kt],
          render: function (t) {
           return t(
                   "svg",
                   {
                    staticClass: "q-spinner",
                    class: this.classes,
                    on: Object.assign({}, this.qListeners),
                    attrs: {focusable: "false", stroke: "currentColor", width: this.cSize, height: this.cSize, viewBox: "0 0 44 44", xmlns: "http://www.w3.org/2000/svg"},
                   },
                   [
                    t("g", {attrs: {fill: "none", "fill-rule": "evenodd", "stroke-width": "2"}}, [
                     t("circle", {attrs: {cx: "22", cy: "22", r: "1"}}, [
                      t("animate", {attrs: {attributeName: "r", begin: "0s", dur: "1.8s", values: "1; 20", calcMode: "spline", keyTimes: "0; 1", keySplines: "0.165, 0.84, 0.44, 1", repeatCount: "indefinite"}}),
                      t("animate", {attrs: {attributeName: "stroke-opacity", begin: "0s", dur: "1.8s", values: "1; 0", calcMode: "spline", keyTimes: "0; 1", keySplines: "0.3, 0.61, 0.355, 1", repeatCount: "indefinite"}}),
                     ]),
                     t("circle", {attrs: {cx: "22", cy: "22", r: "1"}}, [
                      t("animate", {attrs: {attributeName: "r", begin: "-0.9s", dur: "1.8s", values: "1; 20", calcMode: "spline", keyTimes: "0; 1", keySplines: "0.165, 0.84, 0.44, 1", repeatCount: "indefinite"}}),
                      t("animate", {attrs: {attributeName: "stroke-opacity", begin: "-0.9s", dur: "1.8s", values: "1; 0", calcMode: "spline", keyTimes: "0; 1", keySplines: "0.3, 0.61, 0.355, 1", repeatCount: "indefinite"}}),
                     ]),
                    ]),
                   ]
                   );
          },
         }),
         aa = t.extend({
          name: "QSpinnerRadio",
          mixins: [Kt],
          render: function (t) {
           return t(
                   "svg",
                   {
                    staticClass: "q-spinner",
                    class: this.classes,
                    on: Object.assign({}, this.qListeners),
                    attrs: {focusable: "false", width: this.cSize, height: this.cSize, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg"},
                   },
                   [
                    t("g", {attrs: {transform: "scale(0.55)"}}, [
                     t("circle", {attrs: {cx: "30", cy: "150", r: "30", fill: "currentColor"}}, [
                      t("animate", {attrs: {attributeName: "opacity", from: "0", to: "1", dur: "1s", begin: "0", repeatCount: "indefinite", keyTimes: "0;0.5;1", values: "0;1;1"}}),
                     ]),
                     t("path", {attrs: {d: "M90,150h30c0-49.7-40.3-90-90-90v30C63.1,90,90,116.9,90,150z", fill: "currentColor"}}, [
                      t("animate", {attrs: {attributeName: "opacity", from: "0", to: "1", dur: "1s", begin: "0.1", repeatCount: "indefinite", keyTimes: "0;0.5;1", values: "0;1;1"}}),
                     ]),
                     t("path", {attrs: {d: "M150,150h30C180,67.2,112.8,0,30,0v30C96.3,30,150,83.7,150,150z", fill: "currentColor"}}, [
                      t("animate", {attrs: {attributeName: "opacity", from: "0", to: "1", dur: "1s", begin: "0.2", repeatCount: "indefinite", keyTimes: "0;0.5;1", values: "0;1;1"}}),
                     ]),
                    ]),
                   ]
                   );
          },
         }),
         la = t.extend({
          name: "QSpinnerRings",
          mixins: [Kt],
          render: function (t) {
           return t(
                   "svg",
                   {
                    staticClass: "q-spinner",
                    class: this.classes,
                    on: Object.assign({}, this.qListeners),
                    attrs: {focusable: "false", stroke: "currentColor", width: this.cSize, height: this.cSize, viewBox: "0 0 45 45", xmlns: "http://www.w3.org/2000/svg"},
                   },
                   [
                    t("g", {attrs: {fill: "none", "fill-rule": "evenodd", transform: "translate(1 1)", "stroke-width": "2"}}, [
                     t("circle", {attrs: {cx: "22", cy: "22", r: "6"}}, [
                      t("animate", {attrs: {attributeName: "r", begin: "1.5s", dur: "3s", values: "6;22", calcMode: "linear", repeatCount: "indefinite"}}),
                      t("animate", {attrs: {attributeName: "stroke-opacity", begin: "1.5s", dur: "3s", values: "1;0", calcMode: "linear", repeatCount: "indefinite"}}),
                      t("animate", {attrs: {attributeName: "stroke-width", begin: "1.5s", dur: "3s", values: "2;0", calcMode: "linear", repeatCount: "indefinite"}}),
                     ]),
                     t("circle", {attrs: {cx: "22", cy: "22", r: "6"}}, [
                      t("animate", {attrs: {attributeName: "r", begin: "3s", dur: "3s", values: "6;22", calcMode: "linear", repeatCount: "indefinite"}}),
                      t("animate", {attrs: {attributeName: "stroke-opacity", begin: "3s", dur: "3s", values: "1;0", calcMode: "linear", repeatCount: "indefinite"}}),
                      t("animate", {attrs: {attributeName: "stroke-width", begin: "3s", dur: "3s", values: "2;0", calcMode: "linear", repeatCount: "indefinite"}}),
                     ]),
                     t("circle", {attrs: {cx: "22", cy: "22", r: "8"}}, [t("animate", {attrs: {attributeName: "r", begin: "0s", dur: "1.5s", values: "6;1;2;3;4;5;6", calcMode: "linear", repeatCount: "indefinite"}})]),
                    ]),
                   ]
                   );
          },
         }),
         ca = t.extend({
          name: "QSpinnerTail",
          mixins: [Kt],
          render: function (t) {
           return t(
                   "svg",
                   {staticClass: "q-spinner", class: this.classes, on: Object.assign({}, this.qListeners), attrs: {focusable: "false", width: this.cSize, height: this.cSize, viewBox: "0 0 38 38", xmlns: "http://www.w3.org/2000/svg"}},
                   [
                    t("defs", [
                     t("linearGradient", {attrs: {x1: "8.042%", y1: "0%", x2: "65.682%", y2: "23.865%", id: "a"}}, [
                      t("stop", {attrs: {"stop-color": "currentColor", "stop-opacity": "0", offset: "0%"}}),
                      t("stop", {attrs: {"stop-color": "currentColor", "stop-opacity": ".631", offset: "63.146%"}}),
                      t("stop", {attrs: {"stop-color": "currentColor", offset: "100%"}}),
                     ]),
                    ]),
                    t("g", {attrs: {transform: "translate(1 1)", fill: "none", "fill-rule": "evenodd"}}, [
                     t("path", {attrs: {d: "M36 18c0-9.94-8.06-18-18-18", stroke: "url(#a)", "stroke-width": "2"}}, [
                      t("animateTransform", {attrs: {attributeName: "transform", type: "rotate", from: "0 18 18", to: "360 18 18", dur: "0.9s", repeatCount: "indefinite"}}),
                     ]),
                     t("circle", {attrs: {fill: "currentColor", cx: "36", cy: "18", r: "1"}}, [
                      t("animateTransform", {attrs: {attributeName: "transform", type: "rotate", from: "0 18 18", to: "360 18 18", dur: "0.9s", repeatCount: "indefinite"}}),
                     ]),
                    ]),
                   ]
                   );
          },
         }),
         ua = t.extend({
          name: "QSplitter",
          mixins: [It, Lt],
          directives: {TouchPan: Xi},
          props: {
           value: {type: Number, required: !0},
           reverse: Boolean,
           unit: {
            type: String,
            default: "%",
            validator: function (t) {
             return ["%", "px"].includes(t);
            },
           },
           limits: {
            type: Array,
            validator: function (t) {
             return 2 === t.length && "number" == typeof t[0] && "number" == typeof t[1] && t[0] >= 0 && t[0] <= t[1];
            },
           },
           emitImmediately: Boolean,
           horizontal: Boolean,
           disable: Boolean,
           beforeClass: [Array, String, Object],
           afterClass: [Array, String, Object],
           separatorClass: [Array, String, Object],
           separatorStyle: [Array, String, Object],
          },
          watch: {
           value: {
            immediate: !0,
            handler: function (t) {
             this.__normalize(t, this.computedLimits);
            },
           },
           limits: {
            deep: !0,
            handler: function () {
             var t = this;
             this.$nextTick(function () {
              t.__normalize(t.value, t.computedLimits);
             });
            },
           },
          },
          computed: {
           classes: function () {
            return (
                    (!0 === this.horizontal ? "column" : "row") +
                    " q-splitter--" +
                    (!0 === this.horizontal ? "horizontal" : "vertical") +
                    " q-splitter--" +
                    (!0 === this.disable ? "disabled" : "workable") +
                    (!0 === this.isDark ? " q-splitter--dark" : "")
                    );
           },
           prop: function () {
            return !0 === this.horizontal ? "height" : "width";
           },
           side: function () {
            return !0 !== this.reverse ? "before" : "after";
           },
           computedLimits: function () {
            return void 0 !== this.limits ? this.limits : "%" === this.unit ? [10, 90] : [50, 1 / 0];
           },
           styles: function () {
            var t, e;
            return ((e = {})[this.side] = (((t = {})[this.prop] = this.__getCSSValue(this.value)), t)), e;
           },
           separatorDirectives: function () {
            var t;
            if (!0 !== this.disable)
             return [{name: "touch-pan", value: this.__pan, modifiers: ((t = {}), (t[!0 === this.horizontal ? "vertical" : "horizontal"] = !0), (t.prevent = !0), (t.stop = !0), (t.mouse = !0), (t.mouseAllDir = !0), t)}];
           },
          },
          methods: {
           __pan: function (t) {
            if (!0 === t.isFirst) {
             var e = this.$el.getBoundingClientRect()[this.prop];
             return (
                     (this.__dir = !0 === this.horizontal ? "up" : "left"),
                     (this.__maxValue = "%" === this.unit ? 100 : e),
                     (this.__value = Math.min(this.__maxValue, this.computedLimits[1], Math.max(this.computedLimits[0], this.value))),
                     (this.__multiplier = (!0 !== this.reverse ? 1 : -1) * (!0 === this.horizontal ? 1 : !0 === this.$q.lang.rtl ? -1 : 1) * ("%" === this.unit ? (0 === e ? 0 : 100 / e) : 1)),
                     void this.$el.classList.add("q-splitter--active")
                     );
            }
            if (!0 === t.isFinal)
             return this.__normalized !== this.value && this.$emit("input", this.__normalized), void this.$el.classList.remove("q-splitter--active");
            var i = this.__value + this.__multiplier * (t.direction === this.__dir ? -1 : 1) * t.distance[!0 === this.horizontal ? "y" : "x"];
            (this.__normalized = Math.min(this.__maxValue, this.computedLimits[1], Math.max(this.computedLimits[0], i))),
                    (this.$refs[this.side].style[this.prop] = this.__getCSSValue(this.__normalized)),
                    !0 === this.emitImmediately && this.value !== this.__normalized && this.$emit("input", this.__normalized);
           },
           __normalize: function (t, e) {
            t < e[0] ? this.$emit("input", e[0]) : t > e[1] && this.$emit("input", e[1]);
           },
           __getCSSValue: function (t) {
            return ("%" === this.unit ? t : Math.round(t)) + this.unit;
           },
          },
          render: function (t) {
           var e = !0 === this.disable ? {"aria-disabled": "true"} : void 0,
                   i = [
                    t(
                            "div",
                            {ref: "before", staticClass: "q-splitter__panel q-splitter__before" + (!0 === this.reverse ? " col" : ""), style: this.styles.before, class: this.beforeClass, on: mt(this, "stop", {input: y})},
                            Ot(this, "before")
                            ),
                    t("div", {staticClass: "q-splitter__separator", style: this.separatorStyle, class: this.separatorClass, attrs: e}, [
                     t("div", {staticClass: "absolute-full q-splitter__separator-area", directives: this.separatorDirectives}, Ot(this, "separator")),
                    ]),
                    t(
                            "div",
                            {ref: "after", staticClass: "q-splitter__panel q-splitter__after" + (!0 === this.reverse ? "" : " col"), style: this.styles.after, class: this.afterClass, on: mt(this, "stop", {input: y})},
                            Ot(this, "after")
                            ),
                   ];
           return t("div", {staticClass: "q-splitter no-wrap", class: this.classes, on: Object.assign({}, this.qListeners)}, Et(i, this, "default"));
          },
         }),
         ha = t.extend({
          name: "StepHeader",
          mixins: [bt],
          directives: {Ripple: re},
          props: {stepper: {}, step: {}},
          computed: {
           isActive: function () {
            return this.stepper.value === this.step.name;
           },
           isDisable: function () {
            var t = this.step.disable;
            return !0 === t || "" === t;
           },
           isError: function () {
            var t = this.step.error;
            return !0 === t || "" === t;
           },
           isDone: function () {
            var t = this.step.done;
            return !1 === this.isDisable && (!0 === t || "" === t);
           },
           headerNav: function () {
            var t = this.step.headerNav,
                    e = !0 === t || "" === t || void 0 === t;
            return !1 === this.isDisable && this.stepper.headerNav && e;
           },
           hasPrefix: function () {
            return this.step.prefix && !1 === this.isActive && !1 === this.isError && !1 === this.isDone;
           },
           icon: function () {
            return !0 === this.isActive
                    ? this.step.activeIcon || this.stepper.activeIcon || this.$q.iconSet.stepper.active
                    : !0 === this.isError
                    ? this.step.errorIcon || this.stepper.errorIcon || this.$q.iconSet.stepper.error
                    : !1 === this.isDisable && !0 === this.isDone
                    ? this.step.doneIcon || this.stepper.doneIcon || this.$q.iconSet.stepper.done
                    : this.step.icon || this.stepper.inactiveIcon;
           },
           color: function () {
            var t = !0 === this.isError ? this.step.errorColor || this.stepper.errorColor : void 0;
            if (!0 === this.isActive) {
             var e = this.step.activeColor || this.stepper.activeColor || this.step.color;
             return void 0 !== e ? e : t;
            }
            return void 0 !== t ? t : !1 === this.isDisable && !0 === this.isDone ? this.step.doneColor || this.stepper.doneColor || this.step.color || this.stepper.inactiveColor : this.step.color || this.stepper.inactiveColor;
           },
           classes: function () {
            return (
                    "q-stepper__tab col-grow flex items-center no-wrap relative-position" +
                    (void 0 !== this.color ? " text-" + this.color : "") +
                    (!0 === this.isError ? " q-stepper__tab--error" : "") +
                    (!0 === this.isActive ? " q-stepper__tab--active" : "") +
                    (!0 === this.isDone ? " q-stepper__tab--done" : "") +
                    (!0 === this.headerNav ? " q-stepper__tab--navigation q-focusable q-hoverable" : "") +
                    (!0 === this.isDisable ? " q-stepper__tab--disabled" : "")
                    );
           },
          },
          methods: {
           activate: function () {
            void 0 !== this.$refs.blurTarget && this.$refs.blurTarget.focus(), !1 === this.isActive && this.stepper.goTo(this.step.name);
           },
           keyup: function (t) {
            13 === t.keyCode && !1 === this.isActive && this.stepper.goTo(this.step.name);
           },
          },
          render: function (t) {
           var e = {class: this.classes};
           !0 === this.stepper.headerNav && (e.directives = [{name: "ripple", value: this.headerNav}]),
                   !0 === this.headerNav &&
                   Object.assign(e, {on: mt(this, "headnavon", {click: this.activate, keyup: this.keyup}), attrs: !0 === this.isDisable ? {tabindex: -1, "aria-disabled": "true"} : {tabindex: this.qAttrs.tabindex || 0}});
           var i = [
            t("div", {staticClass: "q-focus-helper", attrs: {tabindex: -1}, ref: "blurTarget"}),
            t("div", {staticClass: "q-stepper__dot row flex-center q-stepper__line relative-position"}, [
             t("span", {staticClass: "row flex-center"}, [!0 === this.hasPrefix ? this.step.prefix : t(zt, {props: {name: this.icon}})]),
            ]),
           ];
           if (void 0 !== this.step.title && null !== this.step.title) {
            var n = [t("div", {staticClass: "q-stepper__title"}, [this.step.title])];
            void 0 !== this.step.caption && null !== this.step.caption && n.push(t("div", {staticClass: "q-stepper__caption"}, [this.step.caption])),
                    i.push(t("div", {staticClass: "q-stepper__label q-stepper__line relative-position"}, n));
           }
           return t("div", e, i);
          },
         }),
         da = t.extend({
          name: "QStepWrapper",
          render: function (t) {
           return t("div", {staticClass: "q-stepper__step-content"}, [t("div", {staticClass: "q-stepper__step-inner"}, Ot(this, "default"))]);
          },
         }),
         pa = t.extend({
          name: "QStep",
          inject: {
           stepper: {
            default: function () {
             console.error("QStep needs to be child of QStepper");
            },
           },
          },
          mixins: [yi],
          props: {
           icon: String,
           color: String,
           title: {type: String, required: !0},
           caption: String,
           prefix: [String, Number],
           doneIcon: String,
           doneColor: String,
           activeIcon: String,
           activeColor: String,
           errorIcon: String,
           errorColor: String,
           headerNav: {type: Boolean, default: !0},
           done: Boolean,
           error: Boolean,
          },
          computed: {
           isActive: function () {
            return this.stepper.value === this.name;
           },
          },
          watch: {
           isActive: function (t) {
            var e = this;
            !0 === t &&
                    !0 === this.stepper.vertical &&
                    this.$nextTick(function () {
                     void 0 !== e.$el && (e.$el.scrollTop = 0);
                    });
           },
          },
          render: function (t) {
           var e = this.stepper.vertical,
                   i =
                   !0 === e && !0 === this.stepper.keepAlive
                   ? t("keep-alive", !0 === this.isActive ? [t(da, {key: this.name}, Ot(this, "default"))] : void 0)
                   : !0 !== e || !0 === this.isActive
                   ? da.options.render.call(this, t)
                   : void 0;
           return t("div", {staticClass: "q-stepper__step", on: Object.assign({}, this.qListeners)}, !0 === e ? [t(ha, {props: {stepper: this.stepper, step: this}}), !0 === this.stepper.animated ? t(Hs, [i]) : i] : [i]);
          },
         }),
         fa = t.extend({
          name: "QStepper",
          provide: function () {
           return {stepper: this};
          },
          mixins: [It, bi],
          props: {
           flat: Boolean,
           bordered: Boolean,
           alternativeLabels: Boolean,
           headerNav: Boolean,
           contracted: Boolean,
           headerClass: String,
           inactiveColor: String,
           inactiveIcon: String,
           doneIcon: String,
           doneColor: String,
           activeIcon: String,
           activeColor: String,
           errorIcon: String,
           errorColor: String,
          },
          computed: {
           classes: function () {
            return (
                    "q-stepper q-stepper--" +
                    (!0 === this.vertical ? "vertical" : "horizontal") +
                    (!0 === this.flat || !0 === this.isDark ? " q-stepper--flat no-shadow" : "") +
                    (!0 === this.bordered || (!0 === this.isDark && !1 === this.flat) ? " q-stepper--bordered" : "") +
                    (!0 === this.contracted ? " q-stepper--contracted" : "") +
                    (!0 === this.isDark ? " q-stepper--dark q-dark" : "")
                    );
           },
           headerClasses: function () {
            return (
                    "q-stepper__header row items-stretch justify-between q-stepper__header--" +
                    (!0 === this.alternativeLabels ? "alternative" : "standard") +
                    "-labels" +
                    (!1 === this.flat || !0 === this.bordered ? " q-stepper__header--border" : "") +
                    (void 0 !== this.headerClass ? " " + this.headerClass : "")
                    );
           },
          },
          methods: {
           __getContent: function (t) {
            var e = this,
                    i = Ot(this, "message", []);
            if (!0 === this.vertical) {
             this.__isValidPanelName(this.value) && this.__updatePanelIndex();
             var n = t("div", {staticClass: "q-stepper__content", on: mt(this, "stop", {input: y})}, Ot(this, "default"));
             return void 0 === i ? [n] : i.concat(n);
            }
            return [
             t(
                     "div",
                     {class: this.headerClasses},
                     this.panels.map(function (i) {
                      var n = i.componentOptions.propsData;
                      return t(ha, {key: n.name, props: {stepper: e, step: n}});
                     })
                     ),
            ].concat(i, t("div", {staticClass: "q-stepper__content q-panel-parent", directives: this.panelDirectives}, this.__getPanelContent(t)));
           },
           __renderPanels: function (t) {
            return t("div", {class: this.classes, on: Object.assign({}, this.qListeners)}, Et(this.__getContent(t), this, "navigation"));
           },
          },
         }),
         ma = t.extend({
          name: "QStepperNavigation",
          mixins: [Lt],
          render: function (t) {
           return t("div", {staticClass: "q-stepper__nav", on: Object.assign({}, this.qListeners)}, Ot(this, "default"));
          },
         }),
         va = t.extend({
          name: "QTh",
          mixins: [Lt],
          props: {props: Object, autoWidth: Boolean},
          render: function (t) {
           var e,
                   i,
                   n = this,
                   s = Object.assign({}, this.qListeners);
           if (void 0 === this.props)
            return t("th", {on: s, class: !0 === this.autoWidth ? "q-table--col-auto-width" : null}, Ot(this, "default"));
           var o = this.$vnode.key;
           if (o) {
            if (void 0 === (e = this.props.colsMap[o]))
             return;
           } else
            e = this.props.col;
           if (!0 === e.sortable) {
            var r = "right" === e.align ? "unshift" : "push";
            (i = Bt(this, "default", []))[r](t(zt, {props: {name: this.$q.iconSet.table.arrowUp}, staticClass: e.__iconClass}));
           } else
            i = Ot(this, "default");
           var a =
                   !0 === e.sortable
                   ? {
                    click: function (t) {
                     n.props.sort(e), n.$emit("click", t);
                    },
                   }
           : {};
           return t("th", {on: Object.assign({}, s, a), style: e.headerStyle, class: e.__thClass + (!0 === this.autoWidth ? " q-table--col-auto-width" : "")}, i);
          },
         }),
         ga = {
          computed: {
           headerSelectedValue: function () {
            return !0 === this.someRowsSelected ? null : this.allRowsSelected;
           },
          },
          methods: {
           __getTHead: function (t) {
            var e = this.__getTHeadTR(t);
            return (
                    !0 === this.loading &&
                    void 0 === this.$scopedSlots.loading &&
                    e.push(t("tr", {staticClass: "q-table__progress"}, [t("th", {staticClass: "relative-position", attrs: {colspan: this.computedColspan}}, this.__getProgress(t))])),
                    t("thead", e)
                    );
           },
           __getTHeadTR: function (t) {
            var e = this,
                    i = this.$scopedSlots.header,
                    n = this.$scopedSlots["header-cell"];
            if (void 0 !== i)
             return i(this.__getHeaderScope({header: !0})).slice();
            var s = this.computedCols.map(function (i) {
             var s = e.$scopedSlots["header-cell-" + i.name],
                     o = void 0 !== s ? s : n,
                     r = e.__getHeaderScope({col: i});
             return void 0 !== o ? o(r) : t(va, {key: i.name, props: {props: r}}, i.label);
            });
            if (!0 === this.singleSelection && !0 !== this.grid)
             s.unshift(t("th", {staticClass: "q-table--col-auto-width"}, [" "]));
            else if (!0 === this.multipleSelection) {
             var o = this.$scopedSlots["header-selection"],
                     r =
                     void 0 !== o
                     ? o(this.__getHeaderScope({}))
                     : [t(zi, {props: {color: this.color, value: this.headerSelectedValue, dark: this.isDark, dense: this.dense}, on: mt(this, "inp", {input: this.__onMultipleSelectionSet})})];
             s.unshift(t("th", {staticClass: "q-table--col-auto-width"}, r));
            }
            return [t("tr", {style: this.tableHeaderStyle, class: this.tableHeaderClass}, s)];
           },
           __getHeaderScope: function (t) {
            var e = this;
            return (
                    Object.assign(t, {cols: this.computedCols, sort: this.sort, colsMap: this.computedColsMap, color: this.color, dark: this.isDark, dense: this.dense}),
                    !0 === this.multipleSelection &&
                    (Object.defineProperty(t, "selected", {
                     get: function () {
                      return e.headerSelectedValue;
                     },
                     set: this.__onMultipleSelectionSet,
                     configurable: !0,
                     enumerable: !0,
                    }),
                            (t.partialSelected = this.someRowsSelected),
                            (t.multipleSelect = !0)),
                    t
                    );
           },
           __onMultipleSelectionSet: function (t) {
            !0 === this.someRowsSelected && (t = !1), this.__updateSelection(this.computedRows.map(this.getRowKey), this.computedRows, t);
           },
          },
         },
         _a = {
          methods: {
           __getTBodyTR: function (t, e, i, n) {
            var s = this,
                    o = this.getRowKey(e),
                    r = this.isRowSelected(o);
            if (void 0 !== i)
             return i(this.__getBodyScope({key: o, row: e, pageIndex: n, __trClass: r ? "selected" : ""}));
            var a = this.$scopedSlots["body-cell"],
                    l = this.computedCols.map(function (i) {
                     var r = s.$scopedSlots["body-cell-" + i.name],
                             l = void 0 !== r ? r : a;
                     return void 0 !== l ? l(s.__getBodyCellScope({key: o, row: e, pageIndex: n, col: i})) : t("td", {class: i.__tdClass, style: i.style}, s.getCellValue(i, e));
                    });
            if (!0 === this.hasSelectionMode) {
             var c = this.$scopedSlots["body-selection"],
                     u =
                     void 0 !== c
                     ? c(this.__getBodySelectionScope({key: o, row: e, pageIndex: n}))
                     : [
                      t(zi, {
                       props: {value: r, color: this.color, dark: this.isDark, dense: this.dense},
                       on: {
                        input: function (t, i) {
                         s.__updateSelection([o], [e], t, i);
                        },
                       },
                      }),
                     ];
             l.unshift(t("td", {staticClass: "q-table--col-auto-width"}, u));
            }
            var h = {key: o, class: {selected: r}, on: {}};
            return (
                    void 0 !== this.qListeners["row-click"] &&
                    ((h.class["cursor-pointer"] = !0),
                            (h.on.click = function (t) {
                             s.$emit("row-click", t, e, n);
                            })),
                    void 0 !== this.qListeners["row-dblclick"] &&
                    ((h.class["cursor-pointer"] = !0),
                            (h.on.dblclick = function (t) {
                             s.$emit("row-dblclick", t, e, n);
                            })),
                    void 0 !== this.qListeners["row-contextmenu"] &&
                    ((h.class["cursor-pointer"] = !0),
                            (h.on.contextmenu = function (t) {
                             s.$emit("row-contextmenu", t, e, n);
                            })),
                    t("tr", h, l)
                    );
           },
           __getTBody: function (t) {
            var e = this,
                    i = this.$scopedSlots.body,
                    n = this.$scopedSlots["top-row"],
                    s = this.$scopedSlots["bottom-row"],
                    o = this.computedRows.map(function (n, s) {
                     return e.__getTBodyTR(t, n, i, s);
                    });
            return void 0 !== n && (o = n({cols: this.computedCols}).concat(o)), void 0 !== s && (o = o.concat(s({cols: this.computedCols}))), t("tbody", o);
           },
           __getVirtualTBodyTR: function (t) {
            var e = this,
                    i = this.$scopedSlots.body;
            return function (n) {
             return e.__getTBodyTR(t, n.item, i, n.index);
            };
           },
           __getBodyScope: function (t) {
            var e = this;
            return (
                    this.__injectBodyCommonScope(t),
                    (t.cols = t.cols.map(function (i) {
                     var n = Object.assign({}, i);
                     return (
                             Object.defineProperty(n, "value", {
                              get: function () {
                               return e.getCellValue(i, t.row);
                              },
                              configurable: !0,
                              enumerable: !0,
                             }),
                             n
                             );
                    })),
                    t
                    );
           },
           __getBodyCellScope: function (t) {
            var e = this;
            return (
                    this.__injectBodyCommonScope(t),
                    Object.defineProperty(t, "value", {
                     get: function () {
                      return e.getCellValue(t.col, t.row);
                     },
                     configurable: !0,
                     enumerable: !0,
                    }),
                    t
                    );
           },
           __getBodySelectionScope: function (t) {
            return this.__injectBodyCommonScope(t), t;
           },
           __injectBodyCommonScope: function (t) {
            var e = this;
            Object.assign(t, {cols: this.computedCols, colsMap: this.computedColsMap, sort: this.sort, rowIndex: this.firstRowIndex + t.pageIndex, color: this.color, dark: this.isDark, dense: this.dense}),
                    !0 === this.hasSelectionMode &&
                    Object.defineProperty(t, "selected", {
                     get: function () {
                      return e.isRowSelected(t.key);
                     },
                     set: function (i, n) {
                      e.__updateSelection([t.key], [t.row], i, n);
                     },
                     configurable: !0,
                     enumerable: !0,
                    }),
                    Object.defineProperty(t, "expand", {
                     get: function () {
                      return e.isRowExpanded(t.key);
                     },
                     set: function (i) {
                      e.__updateExpanded(t.key, i);
                     },
                     configurable: !0,
                     enumerable: !0,
                    });
           },
           getCellValue: function (t, e) {
            var i = "function" == typeof t.field ? t.field(e) : e[t.field];
            return void 0 !== t.format ? t.format(i, e) : i;
           },
          },
         },
         ba = "q-table__bottom row items-center",
         ya = {
          props: {hideBottom: Boolean, hideSelectedBanner: Boolean, hideNoData: Boolean, hidePagination: Boolean},
          computed: {
           navIcon: function () {
            var t = [
             this.iconFirstPage || this.$q.iconSet.table.firstPage,
             this.iconPrevPage || this.$q.iconSet.table.prevPage,
             this.iconNextPage || this.$q.iconSet.table.nextPage,
             this.iconLastPage || this.$q.iconSet.table.lastPage,
            ];
            return !0 === this.$q.lang.rtl ? t.reverse() : t;
           },
          },
          methods: {
           __getBottomDiv: function (t) {
            if (!0 !== this.hideBottom) {
             if (!0 === this.nothingToDisplay) {
              if (!0 === this.hideNoData)
               return;
              var e = !0 === this.loading ? this.loadingLabel || this.$q.lang.table.loading : this.filter ? this.noResultsLabel || this.$q.lang.table.noResults : this.noDataLabel || this.$q.lang.table.noData,
                      i = this.$scopedSlots["no-data"],
                      n = void 0 !== i ? [i({message: e, icon: this.$q.iconSet.table.warning, filter: this.filter})] : [t(zt, {staticClass: "q-table__bottom-nodata-icon", props: {name: this.$q.iconSet.table.warning}}), e];
              return t("div", {staticClass: ba + " q-table__bottom--nodata"}, n);
             }
             var s = this.$scopedSlots.bottom;
             if (void 0 !== s)
              return t("div", {staticClass: ba}, [s(this.marginalsScope)]);
             var o =
                     !0 !== this.hideSelectedBanner && !0 === this.hasSelectionMode && this.rowsSelectedNumber > 0
                     ? [t("div", {staticClass: "q-table__control"}, [t("div", [(this.selectedRowsLabel || this.$q.lang.table.selectedRecords)(this.rowsSelectedNumber)])])]
                     : [];
             return !0 !== this.hidePagination ? t("div", {staticClass: ba + " justify-end"}, this.__getPaginationDiv(t, o)) : o.length > 0 ? t("div", {staticClass: ba}, o) : void 0;
            }
           },
           __getPaginationDiv: function (t, e) {
            var i,
                    n = this,
                    s = this.computedPagination.rowsPerPage,
                    o = this.paginationLabel || this.$q.lang.table.pagination,
                    r = this.$scopedSlots.pagination,
                    a = this.rowsPerPageOptions.length > 1;
            if (
                    (e.push(t("div", {staticClass: "q-table__separator col"})),
                            !0 === a &&
                            e.push(
                                    t("div", {staticClass: "q-table__control"}, [
                                     t("span", {staticClass: "q-table__bottom-item"}, [this.rowsPerPageLabel || this.$q.lang.table.recordsPerPage]),
                                     t(zr, {
                                      staticClass: "q-table__select inline q-table__bottom-item",
                                      props: {
                                       color: this.color,
                                       value: s,
                                       options: this.computedRowsPerPageOptions,
                                       displayValue: 0 === s ? this.$q.lang.table.allRows : s,
                                       dark: this.isDark,
                                       borderless: !0,
                                       dense: !0,
                                       optionsDense: !0,
                                       optionsCover: !0,
                                      },
                                      on: mt(this, "pgSize", {
                                       input: function (t) {
                                        n.setPagination({page: 1, rowsPerPage: t.value});
                                       },
                                      }),
                                     }),
                                    ])
                                    ),
                            void 0 !== r)
                    )
             i = r(this.marginalsScope);
            else if (
                    ((i = [
                     t("span", 0 !== s ? {staticClass: "q-table__bottom-item"} : {}, [
                      s ? o(this.firstRowIndex + 1, Math.min(this.lastRowIndex, this.computedRowsNumber), this.computedRowsNumber) : o(1, this.filteredSortedRowsNumber, this.computedRowsNumber),
                     ]),
                    ]),
                            0 !== s && this.pagesNumber > 1)
                    ) {
             var l = {color: this.color, round: !0, dense: !0, flat: !0};
             !0 === this.dense && (l.size = "sm"),
                     this.pagesNumber > 2 && i.push(t(ye, {key: "pgFirst", props: Object.assign({}, l, {icon: this.navIcon[0], disable: this.isFirstPage}), on: mt(this, "pgFirst", {click: this.firstPage})})),
                     i.push(
                             t(ye, {key: "pgPrev", props: Object.assign({}, l, {icon: this.navIcon[1], disable: this.isFirstPage}), on: mt(this, "pgPrev", {click: this.prevPage})}),
                             t(ye, {key: "pgNext", props: Object.assign({}, l, {icon: this.navIcon[2], disable: this.isLastPage}), on: mt(this, "pgNext", {click: this.nextPage})})
                             ),
                     this.pagesNumber > 2 && i.push(t(ye, {key: "pgLast", props: Object.assign({}, l, {icon: this.navIcon[3], disable: this.isLastPage}), on: mt(this, "pgLast", {click: this.lastPage})}));
            }
            return e.push(t("div", {staticClass: "q-table__control"}, i)), e;
           },
          },
         },
         wa = {
          methods: {
           __getGridHeader: function (t) {
            return t(
                    "div",
                    {staticClass: "q-table__middle"},
                    !0 === this.gridHeader ? [t("table", {staticClass: "q-table"}, [this.__getTHead(t)])] : !0 === this.loading && void 0 === this.$scopedSlots.loading ? this.__getProgress(t) : void 0
                    );
           },
           __getGridBody: function (t) {
            var e = this,
                    i =
                    void 0 !== this.$scopedSlots.item
                    ? this.$scopedSlots.item
                    : function (i) {
                     var n = i.cols.map(function (e) {
                      return t("div", {staticClass: "q-table__grid-item-row"}, [t("div", {staticClass: "q-table__grid-item-title"}, [e.label]), t("div", {staticClass: "q-table__grid-item-value"}, [e.value])]);
                     });
                     if (!0 === e.hasSelectionMode) {
                      var s = e.$scopedSlots["body-selection"],
                              o =
                              void 0 !== s
                              ? s(i)
                              : [
                               t(zi, {
                                props: {value: i.selected, color: e.color, dark: e.isDark, dense: e.dense},
                                on: {
                                 input: function (t, n) {
                                  e.__updateSelection([i.key], [i.row], t, n);
                                 },
                                },
                               }),
                              ];
                      n.unshift(t("div", {staticClass: "q-table__grid-item-row"}, o), t(Ys, {props: {dark: e.isDark}}));
                     }
                     var r = {staticClass: "q-table__grid-item-card" + e.cardDefaultClass, class: e.cardClass, style: e.cardStyle, on: {}};
                     return (
                             (void 0 === e.qListeners["row-click"] && void 0 === e.qListeners["row-dblclick"]) || (r.staticClass += " cursor-pointer"),
                             void 0 !== e.qListeners["row-click"] &&
                             (r.on.click = function (t) {
                              e.$emit("row-click", t, i.row, i.pageIndex);
                             }),
                             void 0 !== e.qListeners["row-dblclick"] &&
                             (r.on.dblclick = function (t) {
                              e.$emit("row-dblclick", t, i.row, i.pageIndex);
                             }),
                             t("div", {staticClass: "q-table__grid-item col-xs-12 col-sm-6 col-md-4 col-lg-3", class: !0 === i.selected ? "q-table__grid-item--selected" : ""}, [t("div", r, n)])
                             );
                    };
            return t(
                    "div",
                    {staticClass: "q-table__grid-content row", class: this.cardContainerClass, style: this.cardContainerStyle},
                    this.computedRows.map(function (t, n) {
                     return i(e.__getBodyScope({key: e.getRowKey(t), row: t, pageIndex: n}));
                    })
                    );
           },
          },
         };
 function Sa(t, e, i) {
  return t("div", Object.assign({}, e, {staticClass: "q-table__middle" + (void 0 !== e.staticClass ? " " + e.staticClass : "")}), [t("table", {staticClass: "q-table"}, i)]);
 }
 var xa = {list: Cs, table: Ko},
         Ca = t.extend({
          name: "QVirtualScroll",
          mixins: [bt, Lt, Er],
          props: {
           type: {
            type: String,
            default: "list",
            validator: function (t) {
             return ["list", "table", "__qtable"].includes(t);
            },
           },
           items: {
            type: Array,
            default: function () {
             return [];
            },
           },
           itemsFn: Function,
           itemsSize: Number,
           scrollTarget: {default: void 0},
          },
          computed: {
           virtualScrollLength: function () {
            return this.itemsSize >= 0 && void 0 !== this.itemsFn ? parseInt(this.itemsSize, 10) : Array.isArray(this.items) ? this.items.length : 0;
           },
           virtualScrollScope: function () {
            var t = this;
            if (0 === this.virtualScrollLength)
             return [];
            var e = function (e, i) {
             return {index: t.virtualScrollSliceRange.from + i, item: e};
            };
            return void 0 === this.itemsFn
                    ? this.items.slice(this.virtualScrollSliceRange.from, this.virtualScrollSliceRange.to).map(e)
                    : this.itemsFn(this.virtualScrollSliceRange.from, this.virtualScrollSliceRange.to - this.virtualScrollSliceRange.from).map(e);
           },
           classes: function () {
            return "q-virtual-scroll q-virtual-scroll" + (!0 === this.virtualScrollHorizontal ? "--horizontal" : "--vertical") + (void 0 !== this.scrollTarget ? "" : " scroll");
           },
           attrs: function () {
            return void 0 !== this.scrollTarget ? void 0 : {tabindex: 0};
           },
          },
          watch: {
           virtualScrollLength: function () {
            this.__resetVirtualScroll();
           },
           scrollTarget: function () {
            this.__unconfigureScrollTarget(), this.__configureScrollTarget();
           },
          },
          methods: {
           __getVirtualScrollEl: function () {
            return this.$el;
           },
           __getVirtualScrollTarget: function () {
            return this.__scrollTarget;
           },
           __configureScrollTarget: function () {
            (this.__scrollTarget = Ie(this.$el, this.scrollTarget)), this.__scrollTarget.addEventListener("scroll", this.__onVirtualScrollEvt, d.passive);
           },
           __unconfigureScrollTarget: function () {
            void 0 !== this.__scrollTarget && (this.__scrollTarget.removeEventListener("scroll", this.__onVirtualScrollEvt, d.passive), (this.__scrollTarget = void 0));
           },
          },
          beforeMount: function () {
           this.__resetVirtualScroll();
          },
          mounted: function () {
           this.__configureScrollTarget();
          },
          beforeDestroy: function () {
           this.__unconfigureScrollTarget();
          },
          render: function (t) {
           if (void 0 !== this.$scopedSlots.default) {
            var e = this.__padVirtualScroll(t, "list" === this.type ? "div" : "tbody", this.virtualScrollScope.map(this.$scopedSlots.default));
            return (
                    void 0 !== this.$scopedSlots.before && (e = this.$scopedSlots.before().concat(e)),
                    (e = Et(e, this, "after")),
                    "__qtable" === this.type ? Sa(t, {staticClass: this.classes}, e) : t(xa[this.type], {class: this.classes, attrs: this.attrs, props: this.qAttrs, on: Object.assign({}, this.qListeners)}, e)
                    );
           }
           console.error("QVirtualScroll: default scoped slot is required for rendering", this);
          },
         });
 var ka = {
  props: {
   sortMethod: {
    type: Function,
    default: function (t, e, i) {
     var n = this.colList.find(function (t) {
      return t.name === e;
     });
     if (void 0 === n || void 0 === n.field)
      return t;
     var s = !0 === i ? -1 : 1,
             o =
             "function" == typeof n.field
             ? function (t) {
              return n.field(t);
             }
     : function (t) {
      return t[n.field];
     };
     return t.sort(function (t, e) {
      var i,
              r = o(t),
              a = o(e);
      return null === r || void 0 === r
              ? -1 * s
              : null === a || void 0 === a
              ? 1 * s
              : void 0 !== n.sort
              ? n.sort(r, a, t, e) * s
              : !0 === Ti(r) && !0 === Ti(a)
              ? (r - a) * s
              : !0 === qi(r) && !0 === qi(a)
              ? (function (t, e) {
               return new Date(t) - new Date(e);
              })(r, a) * s
              : "boolean" == typeof r && "boolean" == typeof a
              ? (r - a) * s
              : (r = (i = [r, a].map(function (t) {
               return (t + "").toLocaleString().toLowerCase();
              }))[0]) < (a = i[1])
              ? -1 * s
              : r === a
              ? 0
              : s;
     });
    },
   },
  },
  computed: {
   columnToSort: function () {
    var t = this.computedPagination.sortBy;
    if (t)
     return (
             this.colList.find(function (e) {
              return e.name === t;
             }) || null
             );
   },
  },
  methods: {
   sort: function (t) {
    t === Object(t) && (t = t.name);
    var e = this.computedPagination,
            i = e.sortBy,
            n = e.descending;
    i !== t ? ((i = t), (n = !1)) : !0 === this.binaryStateSort ? (n = !n) : !0 === n ? (i = null) : (n = !0), this.setPagination({sortBy: i, descending: n, page: 1});
   },
  },
 },
         qa = {
          props: {
           filter: [String, Object],
           filterMethod: {
            type: Function,
            default: function (t, e, i, n) {
             void 0 === i && (i = this.computedCols), void 0 === n && (n = this.getCellValue);
             var s = e ? e.toLowerCase() : "";
             return t.filter(function (t) {
              return i.some(function (e) {
               var i = n(e, t) + "";
               return -1 !== ("undefined" === i || "null" === i ? "" : i.toLowerCase()).indexOf(s);
              });
             });
            },
           },
          },
          watch: {
           filter: {
            handler: function () {
             var t = this;
             this.$nextTick(function () {
              t.setPagination({page: 1}, !0);
             });
            },
            deep: !0,
           },
          },
         };
 function Ta(t) {
  return t.page < 1 && (t.page = 1), void 0 !== t.rowsPerPage && t.rowsPerPage < 1 && (t.rowsPerPage = 0), t;
 }
 var Ma = {
  props: {
   pagination: Object,
   rowsPerPageOptions: {
    type: Array,
    default: function () {
     return [5, 7, 10, 15, 20, 25, 50, 0];
    },
   },
  },
  computed: {
   computedPagination: function () {
    return Ta(void 0 !== this.qListeners["update:pagination"] ? Object.assign({}, this.innerPagination, this.pagination) : this.innerPagination);
   },
   firstRowIndex: function () {
    var t = this.computedPagination;
    return (t.page - 1) * t.rowsPerPage;
   },
   lastRowIndex: function () {
    var t = this.computedPagination;
    return t.page * t.rowsPerPage;
   },
   isFirstPage: function () {
    return 1 === this.computedPagination.page;
   },
   pagesNumber: function () {
    return 0 === this.computedPagination.rowsPerPage ? 1 : Math.max(1, Math.ceil(this.computedRowsNumber / this.computedPagination.rowsPerPage));
   },
   isLastPage: function () {
    return 0 === this.lastRowIndex || this.computedPagination.page >= this.pagesNumber;
   },
   computedRowsPerPageOptions: function () {
    var t = this;
    return (this.rowsPerPageOptions.includes(this.innerPagination.rowsPerPage) ? this.rowsPerPageOptions : [this.innerPagination.rowsPerPage].concat(this.rowsPerPageOptions)).map(function (e) {
     return {label: 0 === e ? t.$q.lang.table.allRows : "" + e, value: e};
    });
   },
  },
  watch: {
   pagesNumber: function (t, e) {
    if (t !== e) {
     var i = this.computedPagination.page;
     t && !i ? this.setPagination({page: 1}) : t < i && this.setPagination({page: t});
    }
   },
  },
  methods: {
   __sendServerRequest: function (t) {
    this.requestServerInteraction({pagination: t, filter: this.filter});
   },
   setPagination: function (t, e) {
    var i = Ta(Object.assign({}, this.computedPagination, t));
    !(function (t, e) {
     for (var i in e)
      if (e[i] !== t[i])
       return !1;
     return !0;
    })(this.computedPagination, i)
            ? !0 !== this.isServerSide
            ? void 0 !== this.pagination && void 0 !== this.qListeners["update:pagination"]
            ? this.$emit("update:pagination", i)
            : (this.innerPagination = i)
            : this.__sendServerRequest(i)
            : !0 === this.isServerSide && !0 === e && this.__sendServerRequest(i);
   },
   firstPage: function () {
    this.setPagination({page: 1});
   },
   prevPage: function () {
    var t = this.computedPagination.page;
    t > 1 && this.setPagination({page: t - 1});
   },
   nextPage: function () {
    var t = this.computedPagination,
            e = t.page,
            i = t.rowsPerPage;
    this.lastRowIndex > 0 && e * i < this.computedRowsNumber && this.setPagination({page: e + 1});
   },
   lastPage: function () {
    this.setPagination({page: this.pagesNumber});
   },
  },
  created: function () {
   void 0 !== this.qListeners["update:pagination"] && this.$emit("update:pagination", Object.assign({}, this.computedPagination));
  },
 },
         $a = {
          props: {
           selection: {
            type: String,
            default: "none",
            validator: function (t) {
             return ["single", "multiple", "none"].includes(t);
            },
           },
           selected: {
            type: Array,
            default: function () {
             return [];
            },
           },
          },
          computed: {
           selectedKeys: function () {
            var t = {};
            return (
                    this.selected.map(this.getRowKey).forEach(function (e) {
             t[e] = !0;
            }),
                    t
                    );
           },
           hasSelectionMode: function () {
            return "none" !== this.selection;
           },
           singleSelection: function () {
            return "single" === this.selection;
           },
           multipleSelection: function () {
            return "multiple" === this.selection;
           },
           allRowsSelected: function () {
            var t = this;
            return (
                    this.computedRows.length > 0 &&
                    this.computedRows.every(function (e) {
                     return !0 === t.selectedKeys[t.getRowKey(e)];
                    })
                    );
           },
           someRowsSelected: function () {
            var t = this;
            return (
                    !0 !== this.allRowsSelected &&
                    this.computedRows.some(function (e) {
                     return !0 === t.selectedKeys[t.getRowKey(e)];
                    })
                    );
           },
           rowsSelectedNumber: function () {
            return this.selected.length;
           },
          },
          methods: {
           isRowSelected: function (t) {
            return !0 === this.selectedKeys[t];
           },
           clearSelection: function () {
            this.$emit("update:selected", []);
           },
           __updateSelection: function (t, e, i, n) {
            var s = this;
            this.$emit("selection", {rows: e, added: i, keys: t, evt: n});
            var o =
                    !0 === this.singleSelection
                    ? !0 === i
                    ? e
                    : []
                    : !0 === i
                    ? this.selected.concat(e)
                    : this.selected.filter(function (e) {
                     return !1 === t.includes(s.getRowKey(e));
                    });
            this.$emit("update:selected", o);
           },
          },
         };
 function La(t) {
  return Array.isArray(t) ? t.slice() : [];
 }
 var Oa = {
  props: {expanded: Array},
  data: function () {
   return {innerExpanded: La(this.expanded)};
  },
  watch: {
   expanded: function (t) {
    this.innerExpanded = La(t);
   },
  },
  methods: {
   isRowExpanded: function (t) {
    return this.innerExpanded.includes(t);
   },
   setExpanded: function (t) {
    void 0 !== this.expanded ? this.$emit("update:expanded", t) : (this.innerExpanded = t);
   },
   __updateExpanded: function (t, e) {
    var i = this.innerExpanded.slice(),
            n = i.indexOf(t);
    !0 === e ? -1 === n && (i.push(t), this.setExpanded(i)) : -1 !== n && (i.splice(n, 1), this.setExpanded(i));
   },
  },
 },
         Ba = {
          props: {visibleColumns: Array},
          computed: {
           colList: function () {
            if (void 0 !== this.columns)
             return this.columns;
            var t = this.data[0];
            return void 0 !== t
                    ? Object.keys(t).map(function (e) {
             return {name: e, label: e.toUpperCase(), field: e, align: Ti(t[e]) ? "right" : "left", sortable: !0};
            })
                    : [];
           },
           computedCols: function () {
            var t = this,
                    e = this.computedPagination,
                    i = e.sortBy,
                    n = e.descending;
            return (void 0 !== this.visibleColumns
                    ? this.colList.filter(function (e) {
                     return !0 === e.required || !0 === t.visibleColumns.includes(e.name);
                    })
                    : this.colList
                    ).map(function (t) {
             var e = t.align || "right";
             return Object.assign({}, t, {
              align: e,
              __iconClass: "q-table__sort-icon q-table__sort-icon--" + e,
              __thClass: "text-" + e + (void 0 !== t.headerClasses ? " " + t.headerClasses : "") + (!0 === t.sortable ? " sortable" : "") + (t.name === i ? " sorted " + (!0 === n ? "sort-desc" : "") : ""),
              __tdClass: "text-" + e + (void 0 !== t.classes ? " " + t.classes : ""),
             });
            });
           },
           computedColsMap: function () {
            var t = {};
            return (
                    this.computedCols.forEach(function (e) {
                     t[e.name] = e;
                    }),
                    t
                    );
           },
           computedColspan: function () {
            return void 0 !== this.tableColspan ? this.tableColspan : this.computedCols.length + (!0 === this.hasSelectionMode ? 1 : 0);
           },
          },
         },
         Ea = {};
 Br.forEach(function (t) {
  Ea[t] = {};
 });
 var Pa = t.extend({
  name: "QTable",
  mixins: [
   It,
   Lt,
   wi,
   {
    computed: {
     marginalsScope: function () {
      return {
       pagination: this.computedPagination,
       pagesNumber: this.pagesNumber,
       isFirstPage: this.isFirstPage,
       isLastPage: this.isLastPage,
       firstPage: this.firstPage,
       prevPage: this.prevPage,
       nextPage: this.nextPage,
       lastPage: this.lastPage,
       inFullscreen: this.inFullscreen,
       toggleFullscreen: this.toggleFullscreen,
      };
     },
    },
    methods: {
     __getTopDiv: function (t) {
      var e,
              i = this.$scopedSlots.top,
              n = this.$scopedSlots["top-left"],
              s = this.$scopedSlots["top-right"],
              o = this.$scopedSlots["top-selection"],
              r = !0 === this.hasSelectionMode && void 0 !== o && this.rowsSelectedNumber > 0,
              a = "q-table__top relative-position row items-center";
      return void 0 !== i
              ? t("div", {staticClass: a}, [i(this.marginalsScope)])
              : (!0 === r
                      ? (e = o(this.marginalsScope).slice())
                      : ((e = []),
                              void 0 !== n
                              ? e.push(t("div", {staticClass: "q-table-control"}, [n(this.marginalsScope)]))
                              : this.title && e.push(t("div", {staticClass: "q-table__control"}, [t("div", {staticClass: "q-table__title", class: this.titleClass}, this.title)]))),
                      void 0 !== s && (e.push(t("div", {staticClass: "q-table__separator col"})), e.push(t("div", {staticClass: "q-table__control"}, [s(this.marginalsScope)]))),
                      0 !== e.length ? t("div", {staticClass: a}, e) : void 0);
     },
    },
   },
   ga,
   _a,
   ya,
   wa,
   ka,
   qa,
   Ma,
   $a,
   Oa,
   Ba,
  ],
  props: Object.assign(
          {},
          {
           data: {
            type: Array,
            default: function () {
             return [];
            },
           },
           rowKey: {type: [String, Function], default: "id"},
           columns: Array,
           loading: Boolean,
           binaryStateSort: Boolean,
           iconFirstPage: String,
           iconPrevPage: String,
           iconNextPage: String,
           iconLastPage: String,
           title: String,
           hideHeader: Boolean,
           grid: Boolean,
           gridHeader: Boolean,
           dense: Boolean,
           flat: Boolean,
           bordered: Boolean,
           square: Boolean,
           separator: {
            type: String,
            default: "horizontal",
            validator: function (t) {
             return ["horizontal", "vertical", "cell", "none"].includes(t);
            },
           },
           wrapCells: Boolean,
           virtualScroll: Boolean,
          },
          Ea,
          {
           noDataLabel: String,
           noResultsLabel: String,
           loadingLabel: String,
           selectedRowsLabel: Function,
           rowsPerPageLabel: String,
           paginationLabel: Function,
           color: {type: String, default: "grey-8"},
           titleClass: [String, Array, Object],
           tableStyle: [String, Array, Object],
           tableClass: [String, Array, Object],
           tableHeaderStyle: [String, Array, Object],
           tableHeaderClass: [String, Array, Object],
           cardContainerClass: [String, Array, Object],
           cardContainerStyle: [String, Array, Object],
           cardStyle: [String, Array, Object],
           cardClass: [String, Array, Object],
          }
  ),
  data: function () {
   return {innerPagination: Object.assign({sortBy: null, descending: !1, page: 1, rowsPerPage: this.rowsPerPageOptions.length > 0 ? this.rowsPerPageOptions[0] : 5}, this.pagination)};
  },
  watch: {
   needsReset: function () {
    !0 === this.hasVirtScroll && void 0 !== this.$refs.virtScroll && this.$refs.virtScroll.reset();
   },
  },
  computed: {
   getRowKey: function () {
    var t = this;
    return "function" == typeof this.rowKey
            ? this.rowKey
            : function (e) {
             return e[t.rowKey];
            };
   },
   hasVirtScroll: function () {
    return !0 !== this.grid && !0 === this.virtualScroll;
   },
   needsReset: function () {
    var t = this;
    return ["tableStyle", "tableClass", "tableHeaderStyle", "tableHeaderClass", "__containerClass"]
            .map(function (e) {
             return t[e];
            })
            .join(";");
   },
   filteredSortedRows: function () {
    var t = this.data;
    if (!0 === this.isServerSide || 0 === t.length)
     return t;
    var e = this.computedPagination,
            i = e.sortBy,
            n = e.descending;
    return this.filter && (t = this.filterMethod(t, this.filter, this.computedCols, this.getCellValue)), void 0 !== this.columnToSort && (t = this.sortMethod(this.data === t ? t.slice() : t, i, n)), t;
   },
   filteredSortedRowsNumber: function () {
    return this.filteredSortedRows.length;
   },
   computedRows: function () {
    var t = this.filteredSortedRows;
    return !0 === this.isServerSide
            ? t
            : (0 !== this.computedPagination.rowsPerPage &&
                    (0 === this.firstRowIndex && this.data !== t ? t.length > this.lastRowIndex && (t = t.slice(0, this.lastRowIndex)) : (t = t.slice(this.firstRowIndex, this.lastRowIndex))),
                    t);
   },
   computedRowsNumber: function () {
    return !0 === this.isServerSide ? this.computedPagination.rowsNumber || 0 : this.filteredSortedRowsNumber;
   },
   nothingToDisplay: function () {
    return 0 === this.computedRows.length;
   },
   isServerSide: function () {
    return void 0 !== this.computedPagination.rowsNumber;
   },
   cardDefaultClass: function () {
    return (
            " q-table__card" +
            (!0 === this.isDark ? " q-table__card--dark q-dark" : "") +
            (!0 === this.square ? " q-table--square" : "") +
            (!0 === this.flat ? " q-table--flat" : "") +
            (!0 === this.bordered ? " q-table--bordered" : "")
            );
   },
   __containerClass: function () {
    return (
            "q-table__container q-table--" +
            this.separator +
            "-separator column no-wrap" +
            (!0 === this.grid ? " q-table--grid" : this.cardDefaultClass) +
            (!0 === this.isDark ? " q-table--dark" : "") +
            (!0 === this.dense ? " q-table--dense" : "") +
            (!1 === this.wrapCells ? " q-table--no-wrap" : "") +
            (!0 === this.inFullscreen ? " fullscreen scroll" : "")
            );
   },
   containerClass: function () {
    return this.__containerClass + (!0 === this.loading ? " q-table--loading" : "");
   },
   virtProps: function () {
    var t = this,
            e = {};
    return (
            Br.forEach(function (i) {
             e[i] = t[i];
            }),
            void 0 === e.virtualScrollItemSize && (e.virtualScrollItemSize = !0 === this.dense ? 28 : 48),
            e
            );
   },
  },
  render: function (t) {
   var e = [this.__getTopDiv(t)],
           i = {staticClass: this.containerClass};
   return (
           !0 === this.grid ? e.push(this.__getGridHeader(t)) : Object.assign(i, {class: this.cardClass, style: this.cardStyle}),
           e.push(this.__getBody(t), this.__getBottomDiv(t)),
           !0 === this.loading && void 0 !== this.$scopedSlots.loading && e.push(this.$scopedSlots.loading()),
           t("div", i, e)
           );
  },
  methods: {
   requestServerInteraction: function (t) {
    var e = this;
    void 0 === t && (t = {}),
            this.$nextTick(function () {
             e.$emit("request", {pagination: t.pagination || e.computedPagination, filter: t.filter || e.filter, getCellValue: e.getCellValue});
            });
   },
   resetVirtualScroll: function () {
    !0 === this.hasVirtScroll && this.$refs.virtScroll.reset();
   },
   __getBody: function (t) {
    var e = this;
    if (!0 === this.grid)
     return this.__getGridBody(t);
    var i = !0 !== this.hideHeader ? this.__getTHead(t) : null;
    if (!0 === this.hasVirtScroll) {
     var n = this.$scopedSlots["top-row"],
             s = this.$scopedSlots["bottom-row"],
             o = {default: this.__getVirtualTBodyTR(t)};
     if (void 0 !== n) {
      var r = t("tbody", n({cols: this.computedCols}));
      o.before =
              null === i
              ? function () {
               return [r];
              }
      : function () {
       return [i].concat(r);
      };
     } else
      null !== i &&
              (o.before = function () {
               return i;
              });
     return (
             void 0 !== s &&
             (o.after = function () {
              return t("tbody", s({cols: e.computedCols}));
             }),
             t(Ca, {
              ref: "virtScroll",
              props: Object.assign({}, this.virtProps, {items: this.computedRows, type: "__qtable", tableColspan: this.computedColspan}),
              on: mt(this, "vs", {"virtual-scroll": this.__onVScroll}),
              class: this.tableClass,
              style: this.tableStyle,
              scopedSlots: o,
             })
             );
    }
    return Sa(t, {staticClass: "scroll", class: this.tableClass, style: this.tableStyle}, [i, this.__getTBody(t)]);
   },
   scrollTo: function (t, e) {
    if (void 0 === this.$refs.virtScroll) {
     t = parseInt(t, 10);
     var i = this.$el.querySelector("tbody tr:nth-of-type(" + (t + 1) + ")");
     if (null !== i) {
      var n = this.$el.querySelector(".q-table__middle.scroll"),
              s = i.offsetTop,
              o = s < n.scrollTop ? "decrease" : "increase";
      (n.scrollTop = s), this.$emit("virtual-scroll", {index: t, from: 0, to: this.pagination.rowsPerPage - 1, direction: o});
     }
    } else
     this.$refs.virtScroll.scrollTo(t, e);
   },
   __onVScroll: function (t) {
    this.$emit("virtual-scroll", t);
   },
   __getProgress: function (t) {
    return [t(fr, {staticClass: "q-table__linear-progress", props: {color: this.color, dark: this.isDark, indeterminate: !0, trackColor: "transparent"}})];
   },
  },
 }),
         za = t.extend({
          name: "QTr",
          mixins: [Lt],
          props: {props: Object, noHover: Boolean},
          computed: {
           classes: function () {
            return "q-tr" + (void 0 === this.props || !0 === this.props.header ? "" : " " + this.props.__trClass) + (!0 === this.noHover ? " q-tr--no-hover" : "");
           },
          },
          render: function (t) {
           return t("tr", {on: Object.assign({}, this.qListeners), class: this.classes}, Ot(this, "default"));
          },
         }),
         Aa = t.extend({
          name: "QTd",
          mixins: [Lt],
          props: {props: Object, autoWidth: Boolean, noHover: Boolean},
          computed: {
           classes: function () {
            return "q-td" + (!0 === this.autoWidth ? " q-table--col-auto-width" : "") + (!0 === this.noHover ? " q-td--no-hover" : "");
           },
          },
          render: function (t) {
           var e = this.qListeners;
           if (void 0 === this.props)
            return t("td", {on: e, class: this.classes}, Ot(this, "default"));
           var i = this.$vnode.key,
                   n = void 0 !== this.props.colsMap && i ? this.props.colsMap[i] : this.props.col;
           return void 0 !== n ? t("td", {on: e, style: n.style, class: this.classes + " " + n.__tdClass}, Ot(this, "default")) : void 0;
          },
         }),
         Da = /\/?$/;
 function Ia(t, e) {
  if (Object.keys(t).length !== Object.keys(e).length)
   return !1;
  for (var i in e)
   if (!(i in t) || String(t[i]) !== String(e[i]))
    return !1;
  return !0;
 }
 function Ra(t, e) {
  return (
          !!e &&
          (t.path && e.path
                  ? t.path.replace(Da, "") === e.path.replace(Da, "") && t.hash === e.hash && Ia(t.query, e.query)
                  : "string" == typeof t.name && t.name === e.name && t.hash === e.hash && !0 === Ia(t.query, e.query) && !0 === Ia(t.params, e.params))
          );
 }
 function Fa(t, e) {
  return (
          0 === t.path.replace(Da, "/").indexOf(e.path.replace(Da, "/")) &&
          ("string" != typeof e.hash || e.hash.length < 2 || t.hash === e.hash) &&
          !0 ===
          (function (t, e) {
           for (var i in e)
            if (!(i in t))
             return !1;
           return !0;
          })(t.query, e.query)
          );
 }
 var ja = t.extend({
  name: "QRouteTab",
  mixins: [dn, Yt],
  props: {to: {required: !0}},
  inject: {__activateRoute: {}, __recalculateScroll: {}},
  watch: {
   $route: function () {
    this.__checkActivation();
   },
  },
  computed: {
   routerTabLinkProps: function () {
    return Object.assign({}, this.routerLinkProps, {event: []});
   },
  },
  methods: {
   __activate: function (t, e) {
    var i = this;
    if (!0 !== this.disable)
     if (void 0 === t || (!0 !== t.ctrlKey && !0 !== t.shiftKey && !0 !== t.altKey && !0 !== t.metaKey)) {
      void 0 !== t && S(t);
      var n = function (t, e, n) {
       void 0 === t && (t = i.to), void 0 === e && (e = i.append), void 0 === n && (n = i.replace);
       var s = i.$router.resolve(t, i.$route, e).route,
               o = t === i.to && e === i.append && n === i.replace ? i.__checkActivation : f;
       i.$router[!0 === n ? "replace" : "push"](
               s,
               function () {
                o(!0);
               },
               function (t) {
                t && "NavigationDuplicated" === t.name && o(!0);
               }
       );
      };
      void 0 !== this.qListeners.click && this.$emit("click", t, n), (void 0 !== t && !1 === t.navigate) || n();
     } else
      this.__checkActivation(!0);
    !0 === e ? this.$el.focus(t) : void 0 !== this.$refs.blurTarget && this.$refs.blurTarget.focus(t);
   },
   __checkActivation: function (t) {
    void 0 === t && (t = !1);
    var e = this.$route,
            i = this.$router.resolve(this.to, e, this.append),
            n = i.href,
            s = i.location,
            o = i.route,
            r = void 0 !== o.redirectedFrom,
            a = Ra(e, o),
            l = !0 === this.exact ? Ra : Fa,
            c = {name: this.name, selected: t, exact: this.exact, priorityMatched: o.matched.length, priorityHref: n.length};
    (!0 === a || (!0 !== this.exact && !0 === Fa(e, o))) && this.__activateRoute(Object.assign({}, c, {redirected: r, exact: !0 === this.exact || !0 === a})),
            !0 === r && !0 === l(e, Object.assign({}, {path: o.redirectedFrom}, s)) && this.__activateRoute(c),
            !0 === this.isActive && this.__activateRoute();
   },
  },
  mounted: function () {
   this.__recalculateScroll(), void 0 !== this.$router && this.__checkActivation();
  },
  beforeDestroy: function () {
   this.__recalculateScroll(), this.__activateRoute({remove: !0, name: this.name});
  },
  render: function (t) {
   return this.__renderTab(t, "router-link", this.routerTabLinkProps);
  },
 }),
         Va = t.extend({
          name: "QTime",
          mixins: [Mn],
          directives: {TouchPan: Xi},
          props: {
           mask: {default: null},
           format24h: {type: Boolean, default: null},
           defaultDate: {
            type: String,
            validator: function (t) {
             return /^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(t);
            },
           },
           options: Function,
           hourOptions: Array,
           minuteOptions: Array,
           secondOptions: Array,
           withSeconds: Boolean,
           nowBtn: Boolean,
          },
          data: function () {
           var t = An(this.value, this.__getMask(), this.__getLocale(), this.calendar, this.__getDefaultDateModel()),
                   e = "Hour";
           return null !== t.hour && (null === t.minute ? (e = "Minute") : !0 === this.withSeconds && null === t.second && (e = "Second")), {view: e, isAM: null === t.hour || t.hour < 12, innerModel: t};
          },
          watch: {
           value: function (t) {
            var e = An(t, this.computedMask, this.computedLocale, this.calendar, this.defaultDateModel);
            (e.dateHash === this.innerModel.dateHash && e.timeHash === this.innerModel.timeHash) || ((this.innerModel = e), null === e.hour ? (this.view = "Hour") : (this.isAM = e.hour < 12));
           },
           computedMask: function () {
            var t = this;
            this.$nextTick(function () {
             t.__updateValue();
            });
           },
           computedLocale: function () {
            var t = this;
            this.$nextTick(function () {
             t.__updateValue();
            });
           },
          },
          computed: {
           classes: function () {
            return (
                    "q-time q-time--" +
                    (!0 === this.landscape ? "landscape" : "portrait") +
                    (!0 === this.isDark ? " q-time--dark q-dark" : "") +
                    (!0 === this.disable ? " disabled" : !0 === this.readonly ? " q-time--readonly" : "") +
                    (!0 === this.bordered ? " q-time--bordered" : "") +
                    (!0 === this.square ? " q-time--square no-border-radius" : "") +
                    (!0 === this.flat ? " q-time--flat no-shadow" : "")
                    );
           },
           stringModel: function () {
            var t = this.innerModel;
            return {
             hour: null === t.hour ? "--" : !0 === this.computedFormat24h ? pt(t.hour) : String(!0 === this.isAM ? (0 === t.hour ? 12 : t.hour) : t.hour > 12 ? t.hour - 12 : t.hour),
             minute: null === t.minute ? "--" : pt(t.minute),
             second: null === t.second ? "--" : pt(t.second),
            };
           },
           defaultDateModel: function () {
            return this.__getDefaultDateModel();
           },
           computedFormat24h: function () {
            return null !== this.format24h ? this.format24h : this.$q.lang.date.format24h;
           },
           pointerStyle: function () {
            var t = "Hour" === this.view,
                    e = !0 === t ? 12 : 60,
                    i = this.innerModel[this.view.toLowerCase()],
                    n = "rotate(" + (Math.round(i * (360 / e)) - 180) + "deg) translateX(-50%)";
            return !0 === t && !0 === this.computedFormat24h && this.innerModel.hour >= 12 && (n += " scale(.7)"), {transform: n};
           },
           minLink: function () {
            return null !== this.innerModel.hour;
           },
           secLink: function () {
            return !0 === this.minLink && null !== this.innerModel.minute;
           },
           hourInSelection: function () {
            var t = this;
            return void 0 !== this.hourOptions
                    ? function (e) {
                     return t.hourOptions.includes(e);
                    }
            : void 0 !== this.options
                    ? function (e) {
                     return t.options(e, null, null);
                    }
            : void 0;
           },
           minuteInSelection: function () {
            var t = this;
            return void 0 !== this.minuteOptions
                    ? function (e) {
                     return t.minuteOptions.includes(e);
                    }
            : void 0 !== this.options
                    ? function (e) {
                     return t.options(t.innerModel.hour, e, null);
                    }
            : void 0;
           },
           secondInSelection: function () {
            var t = this;
            return void 0 !== this.secondOptions
                    ? function (e) {
                     return t.secondOptions.includes(e);
                    }
            : void 0 !== this.options
                    ? function (e) {
                     return t.options(t.innerModel.hour, t.innerModel.minute, e);
                    }
            : void 0;
           },
           validHours: function () {
            if (void 0 !== this.hourInSelection) {
             var t = this.__getValidValues(0, 11, this.hourInSelection),
                     e = this.__getValidValues(12, 11, this.hourInSelection);
             return {am: t, pm: e, values: t.values.concat(e.values)};
            }
           },
           validMinutes: function () {
            if (void 0 !== this.minuteInSelection)
             return this.__getValidValues(0, 59, this.minuteInSelection);
           },
           validSeconds: function () {
            if (void 0 !== this.secondInSelection)
             return this.__getValidValues(0, 59, this.secondInSelection);
           },
           viewValidOptions: function () {
            switch (this.view) {
             case "Hour":
              return this.validHours;
             case "Minute":
              return this.validMinutes;
             case "Second":
              return this.validSeconds;
            }
           },
           positions: function () {
            var t,
                    e,
                    i = 0,
                    n = 1,
                    s = void 0 !== this.viewValidOptions ? this.viewValidOptions.values : void 0;
            "Hour" === this.view ? (!0 === this.computedFormat24h ? ((t = 0), (e = 23)) : ((t = 0), (e = 11), !1 === this.isAM && (i = 12))) : ((t = 0), (e = 55), (n = 5));
            for (var o = [], r = t, a = t; r <= e; r += n, a++) {
             var l = r + i,
                     c = void 0 !== s && !1 === s.includes(l),
                     u = "Hour" === this.view && 0 === r ? (!0 === this.computedFormat24h ? "00" : "12") : r;
             o.push({val: l, index: a, disable: c, label: u});
            }
            return o;
           },
          },
          methods: {
           setNow: function () {
            this.__updateValue(Object.assign({}, this.__getCurrentDate(), this.__getCurrentTime())), (this.view = "Hour");
           },
           __getValidValues: function (t, e, i) {
            var n = Array.apply(null, {length: e + 1})
                    .map(function (e, n) {
                     var s = n + t;
                     return {index: s, val: !0 === i(s)};
                    })
                    .filter(function (t) {
                     return !0 === t.val;
                    })
                    .map(function (t) {
                     return t.index;
                    });
            return {min: n[0], max: n[n.length - 1], values: n, threshold: e + 1};
           },
           __getWheelDist: function (t, e, i) {
            var n = Math.abs(t - e);
            return Math.min(n, i - n);
           },
           __getNormalizedClockValue: function (t, e) {
            var i = e.min,
                    n = e.max,
                    s = e.values,
                    o = e.threshold;
            if (t === i)
             return i;
            if (t < i || t > n)
             return this.__getWheelDist(t, i, o) <= this.__getWheelDist(t, n, o) ? i : n;
            var r = s.findIndex(function (e) {
             return t <= e;
            }),
                    a = s[r - 1],
                    l = s[r];
            return t - a <= l - t ? a : l;
           },
           __getMask: function () {
            return "persian" !== this.calendar && null !== this.mask ? this.mask : "HH:mm" + (!0 === this.withSeconds ? ":ss" : "");
           },
           __getDefaultDateModel: function () {
            if ("string" != typeof this.defaultDate) {
             var t = this.__getCurrentDate(!0);
             return (t.dateHash = this.__getDayHash(t)), t;
            }
            return An(this.defaultDate, "YYYY/MM/DD", void 0, this.calendar);
           },
           __click: function (t) {
            !0 !== this.__shouldAbortInteraction() && (!0 !== this.$q.platform.is.desktop && this.__updateClock(t, this.__getClockRect()), this.__goToNextView());
           },
           __activate: function (t) {
            !0 !== this.__shouldAbortInteraction() && this.__updateClock(t, this.__getClockRect());
           },
           __shouldAbortInteraction: function () {
            return (
                    !0 === this._isBeingDestroyed ||
                    !0 === this._isDestroyed ||
                    (void 0 !== this.viewValidOptions && (0 === this.viewValidOptions.values.length || ("Hour" === this.view && !0 !== this.computedFormat24h && 0 === this.validHours[!0 === this.isAM ? "am" : "pm"].values.length)))
                    );
           },
           __getClockRect: function () {
            var t = this.$refs.clock.getBoundingClientRect(),
                    e = t.top,
                    i = t.left,
                    n = t.width / 2;
            return {top: e + n, left: i + n, dist: 0.7 * n};
           },
           __goToNextView: function () {
            "Hour" === this.view ? (this.view = "Minute") : this.withSeconds && "Minute" === this.view && (this.view = "Second");
           },
           __drag: function (t) {
            if (!0 !== this.__shouldAbortInteraction()) {
             if (!0 === t.isFirst)
              return (this.draggingClockRect = this.__getClockRect()), void (this.dragCache = this.__updateClock(t.evt, this.draggingClockRect));
             (this.dragCache = this.__updateClock(t.evt, this.draggingClockRect, this.dragCache)), !0 === t.isFinal && ((this.draggingClockRect = !1), (this.dragCache = null), this.__goToNextView());
            }
           },
           __updateClock: function (t, e, i) {
            var n,
                    s = v(t),
                    o = Math.abs(s.top - e.top),
                    r = Math.sqrt(Math.pow(Math.abs(s.top - e.top), 2) + Math.pow(Math.abs(s.left - e.left), 2)),
                    a = Math.asin(o / r) * (180 / Math.PI);
            if (((a = s.top < e.top ? (e.left < s.left ? 90 - a : 270 + a) : e.left < s.left ? a + 90 : 270 - a), "Hour" === this.view)) {
             if (((n = a / 30), void 0 !== this.validHours)) {
              var l = !0 !== this.computedFormat24h ? !0 === this.isAM : this.validHours.am.values.length > 0 && this.validHours.pm.values.length > 0 ? r >= e.dist : this.validHours.am.values.length > 0;
              n = this.__getNormalizedClockValue(n + (!0 === l ? 0 : 12), this.validHours[!0 === l ? "am" : "pm"]);
             } else
              (n = Math.round(n)), !0 === this.computedFormat24h ? (r < e.dist ? n < 12 && (n += 12) : 12 === n && (n = 0)) : !0 === this.isAM && 12 === n ? (n = 0) : !1 === this.isAM && 12 !== n && (n += 12);
             !0 === this.computedFormat24h && (this.isAM = n < 12);
            } else
             (n = Math.round(a / 6) % 60),
                     "Minute" === this.view && void 0 !== this.validMinutes
                     ? (n = this.__getNormalizedClockValue(n, this.validMinutes))
                     : "Second" === this.view && void 0 !== this.validSeconds && (n = this.__getNormalizedClockValue(n, this.validSeconds));
            return i !== n && this["__set" + this.view](n), n;
           },
           __onKeyupHour: function (t) {
            if (13 === t.keyCode)
             this.view = "Hour";
            else if ([37, 39].includes(t.keyCode)) {
             var e = 37 === t.keyCode ? -1 : 1;
             if (void 0 !== this.validHours) {
              var i = !0 === this.computedFormat24h ? this.validHours.values : this.validHours[!0 === this.isAM ? "am" : "pm"].values;
              if (0 === i.length)
               return;
              if (null === this.innerModel.hour)
               this.__setHour(i[0]);
              else {
               var n = (i.length + i.indexOf(this.innerModel.hour) + e) % i.length;
               this.__setHour(i[n]);
              }
             } else {
              var s = !0 === this.computedFormat24h ? 24 : 12,
                      o = !0 !== this.computedFormat24h && !1 === this.isAM ? 12 : 0,
                      r = null === this.innerModel.hour ? -e : this.innerModel.hour;
              this.__setHour(o + ((24 + r + e) % s));
             }
            }
           },
           __onKeyupMinute: function (t) {
            if (13 === t.keyCode)
             this.view = "Minute";
            else if ([37, 39].includes(t.keyCode)) {
             var e = 37 === t.keyCode ? -1 : 1;
             if (void 0 !== this.validMinutes) {
              var i = this.validMinutes.values;
              if (0 === i.length)
               return;
              if (null === this.innerModel.minute)
               this.__setMinute(i[0]);
              else {
               var n = (i.length + i.indexOf(this.innerModel.minute) + e) % i.length;
               this.__setMinute(i[n]);
              }
             } else {
              var s = null === this.innerModel.minute ? -e : this.innerModel.minute;
              this.__setMinute((60 + s + e) % 60);
             }
            }
           },
           __onKeyupSecond: function (t) {
            if (13 === t.keyCode)
             this.view = "Second";
            else if ([37, 39].includes(t.keyCode)) {
             var e = 37 === t.keyCode ? -1 : 1;
             if (void 0 !== this.validSeconds) {
              var i = this.validSeconds.values;
              if (0 === i.length)
               return;
              if (null === this.innerModel.seconds)
               this.__setSecond(i[0]);
              else {
               var n = (i.length + i.indexOf(this.innerModel.second) + e) % i.length;
               this.__setSecond(i[n]);
              }
             } else {
              var s = null === this.innerModel.second ? -e : this.innerModel.second;
              this.__setSecond((60 + s + e) % 60);
             }
            }
           },
           __getHeader: function (t) {
            var e = this,
                    i = [
                     t(
                             "div",
                             {
                              staticClass: "q-time__link",
                              class: "Hour" === this.view ? "q-time__link--active" : "cursor-pointer",
                              attrs: {tabindex: this.computedTabindex},
                              on: mt(this, "vH", {
                               click: function () {
                                e.view = "Hour";
                               },
                               keyup: this.__onKeyupHour,
                              }),
                             },
                             [this.stringModel.hour]
                             ),
                     t("div", [":"]),
                     t(
                             "div",
                             !0 === this.minLink
                             ? {
                              staticClass: "q-time__link",
                              class: "Minute" === this.view ? "q-time__link--active" : "cursor-pointer",
                              attrs: {tabindex: this.computedTabindex},
                              on: mt(this, "vM", {
                               click: function () {
                                e.view = "Minute";
                               },
                               keyup: this.__onKeyupMinute,
                              }),
                             }
                     : {staticClass: "q-time__link"},
                             [this.stringModel.minute]
                             ),
                    ];
            return (
                    !0 === this.withSeconds &&
                    i.push(
                            t("div", [":"]),
                            t(
                                    "div",
                                    !0 === this.secLink
                                    ? {
                                     staticClass: "q-time__link",
                                     class: "Second" === this.view ? "q-time__link--active" : "cursor-pointer",
                                     attrs: {tabindex: this.computedTabindex},
                                     on: mt(this, "vS", {
                                      click: function () {
                                       e.view = "Second";
                                      },
                                      keyup: this.__onKeyupSecond,
                                     }),
                                    }
                            : {staticClass: "q-time__link"},
                                    [this.stringModel.second]
                                    )
                            ),
                    t("div", {staticClass: "q-time__header flex flex-center no-wrap", class: this.headerClass}, [
                     t("div", {staticClass: "q-time__header-label row items-center no-wrap", attrs: {dir: "ltr"}}, i),
                     !1 === this.computedFormat24h
                             ? t("div", {staticClass: "q-time__header-ampm column items-between no-wrap"}, [
                              t(
                                      "div",
                                      {
                                       staticClass: "q-time__link",
                                       class: !0 === this.isAM ? "q-time__link--active" : "cursor-pointer",
                                       attrs: {tabindex: this.computedTabindex},
                                       on: mt(this, "AM", {
                                        click: this.__setAm,
                                        keyup: function (t) {
                                         13 === t.keyCode && e.__setAm();
                                        },
                                       }),
                                      },
                                      ["AM"]
                                      ),
                              t(
                                      "div",
                                      {
                                       staticClass: "q-time__link",
                                       class: !0 !== this.isAM ? "q-time__link--active" : "cursor-pointer",
                                       attrs: {tabindex: this.computedTabindex},
                                       on: mt(this, "PM", {
                                        click: this.__setPm,
                                        keyup: function (t) {
                                         13 === t.keyCode && e.__setPm();
                                        },
                                       }),
                                      },
                                      ["PM"]
                                      ),
                             ])
                             : null,
                    ])
                    );
           },
           __getClock: function (t) {
            var e = this,
                    i = this.view.toLowerCase(),
                    n = this.innerModel[i];
            return t("div", {staticClass: "q-time__content col relative-position"}, [
             t("transition", {props: {name: "q-transition--scale"}}, [
              t("div", {key: "clock" + this.view, staticClass: "q-time__container-parent absolute-full"}, [
               t("div", {ref: "clock", staticClass: "q-time__container-child fit overflow-hidden"}, [
                t(
                        "div",
                        {
                         staticClass: "q-time__clock cursor-pointer non-selectable",
                         on: mt(this, "click", {click: this.__click, mousedown: this.__activate}),
                         directives: mt(this, "touch", [{name: "touch-pan", value: this.__drag, modifiers: {stop: !0, prevent: !0, mouse: !0}}]),
                        },
                        [
                         t("div", {staticClass: "q-time__clock-circle fit"}, [
                          t("div", {staticClass: "q-time__clock-pointer", style: this.pointerStyle, class: null === this.innerModel[i] ? "hidden" : void 0 !== this.color ? "text-" + this.color : ""}),
                          this.positions.map(function (i) {
                           return t(
                                   "div",
                                   {
                                    staticClass: "q-time__clock-position row flex-center q-time__clock-pos-" + i.index,
                                    class: i.val === n ? e.headerClass.concat(" q-time__clock-position--active") : !0 === i.disable ? "q-time__clock-position--disable" : null,
                                   },
                                   [t("span", [i.label])]
                                   );
                          }),
                         ]),
                        ]
                        ),
               ]),
              ]),
             ]),
             !0 === this.nowBtn
                     ? t(ye, {
                      staticClass: "q-time__now-button absolute",
                      props: {icon: this.$q.iconSet.datetime.now, unelevated: !0, size: "sm", round: !0, color: this.color, textColor: this.textColor, tabindex: this.computedTabindex},
                      on: mt(this, "now", {click: this.setNow}),
                     })
                     : null,
            ]);
           },
           __setHour: function (t) {
            this.innerModel.hour !== t && ((this.innerModel.hour = t), (this.innerModel.minute = null), (this.innerModel.second = null));
           },
           __setMinute: function (t) {
            this.innerModel.minute !== t && ((this.innerModel.minute = t), (this.innerModel.second = null), !0 !== this.withSeconds && this.__updateValue({minute: t}));
           },
           __setSecond: function (t) {
            this.innerModel.second !== t && this.__updateValue({second: t});
           },
           __setAm: function () {
            !1 === this.isAM && ((this.isAM = !0), null !== this.innerModel.hour && ((this.innerModel.hour -= 12), this.__verifyAndUpdate()));
           },
           __setPm: function () {
            !0 === this.isAM && ((this.isAM = !1), null !== this.innerModel.hour && ((this.innerModel.hour += 12), this.__verifyAndUpdate()));
           },
           __verifyAndUpdate: function () {
            return void 0 !== this.hourInSelection && !0 !== this.hourInSelection(this.innerModel.hour)
                    ? ((this.innerModel = An()), void (this.view = "Hour"))
                    : void 0 !== this.minuteInSelection && !0 !== this.minuteInSelection(this.innerModel.minute)
                    ? ((this.innerModel.minute = null), (this.innerModel.second = null), void (this.view = "Minute"))
                    : !0 === this.withSeconds && void 0 !== this.secondInSelection && !0 !== this.secondInSelection(this.innerModel.second)
                    ? ((this.innerModel.second = null), void (this.view = "Second"))
                    : void (null === this.innerModel.hour || null === this.innerModel.minute || (!0 === this.withSeconds && null === this.innerModel.second) || this.__updateValue());
           },
           __updateValue: function (t) {
            var e = Object.assign(Object.assign({}, this.innerModel), t),
                    i =
                    "persian" === this.calendar
                    ? pt(e.hour) + ":" + pt(e.minute) + (!0 === this.withSeconds ? ":" + pt(e.second) : "")
                    : Xn(new Date(e.year, null === e.month ? null : e.month - 1, e.day, e.hour, e.minute, e.second, e.millisecond), this.computedMask, this.computedLocale, e.year, e.timezoneOffset);
            (e.changed = i !== this.value), this.$emit("input", i, e);
           },
          },
          render: function (t) {
           var e = [this.__getClock(t)],
                   i = Ot(this, "default");
           return (
                   void 0 !== i && e.push(t("div", {staticClass: "q-time__actions"}, i)),
                   void 0 !== this.name && !0 !== this.disable && this.__injectFormInput(e, "push"),
                   t("div", {class: this.classes, on: Object.assign({}, this.qListeners), attrs: {tabindex: -1}}, [this.__getHeader(t), t("div", {staticClass: "q-time__main col overflow-auto"}, e)])
                   );
          },
         }),
         Na = t.extend({
          name: "QTimeline",
          mixins: [It, Lt],
          provide: function () {
           return {__timeline: this};
          },
          props: {
           color: {type: String, default: "primary"},
           side: {
            type: String,
            default: "right",
            validator: function (t) {
             return ["left", "right"].includes(t);
            },
           },
           layout: {
            type: String,
            default: "dense",
            validator: function (t) {
             return ["dense", "comfortable", "loose"].includes(t);
            },
           },
          },
          computed: {
           classes: function () {
            return "q-timeline--" + this.layout + " q-timeline--" + this.layout + "--" + this.side + (!0 === this.isDark ? " q-timeline--dark" : "");
           },
          },
          render: function (t) {
           return t("ul", {staticClass: "q-timeline", class: this.classes, on: Object.assign({}, this.qListeners)}, Ot(this, "default"));
          },
         }),
         Ha = t.extend({
          name: "QTimelineEntry",
          inject: {
           __timeline: {
            default: function () {
             console.error("QTimelineEntry needs to be child of QTimeline");
            },
           },
          },
          mixins: [Lt],
          props: {
           heading: Boolean,
           tag: {type: String, default: "h3"},
           side: {
            type: String,
            default: "right",
            validator: function (t) {
             return ["left", "right"].includes(t);
            },
           },
           icon: String,
           avatar: String,
           color: String,
           title: String,
           subtitle: String,
           body: String,
          },
          computed: {
           colorClass: function () {
            return "text-" + (this.color || this.__timeline.color);
           },
           classes: function () {
            return "q-timeline__entry--" + this.side + (void 0 !== this.icon || void 0 !== this.avatar ? " q-timeline__entry--icon" : "");
           },
           reverse: function () {
            return "comfortable" === this.__timeline.layout && "left" === this.__timeline.side;
           },
          },
          render: function (t) {
           var e,
                   i = Bt(this, "default", []);
           if ((void 0 !== this.body && i.unshift(this.body), !0 === this.heading)) {
            var n = [t("div"), t("div"), t(this.tag, {staticClass: "q-timeline__heading-title"}, i)];
            return t("div", {staticClass: "q-timeline__heading", on: Object.assign({}, this.qListeners)}, !0 === this.reverse ? n.reverse() : n);
           }
           void 0 !== this.icon
                   ? (e = [t(zt, {staticClass: "row items-center justify-center", props: {name: this.icon}})])
                   : void 0 !== this.avatar && (e = [t("img", {staticClass: "q-timeline__dot-img", domProps: {src: this.avatar}})]);
           var s = [
            t("div", {staticClass: "q-timeline__subtitle"}, [t("span", Ot(this, "subtitle", [this.subtitle]))]),
            t("div", {staticClass: "q-timeline__dot", class: this.colorClass}, e),
            t("div", {staticClass: "q-timeline__content"}, [t("h6", {staticClass: "q-timeline__title"}, Ot(this, "title", [this.title]))].concat(i)),
           ];
           return t("li", {staticClass: "q-timeline__entry", class: this.classes, on: Object.assign({}, this.qListeners)}, !0 === this.reverse ? s.reverse() : s);
          },
         }),
         Qa = t.extend({
          name: "QToolbar",
          mixins: [Lt],
          props: {inset: Boolean},
          render: function (t) {
           return t("div", {staticClass: "q-toolbar row no-wrap items-center", class: this.inset ? "q-toolbar--inset" : null, on: Object.assign({}, this.qListeners)}, Ot(this, "default"));
          },
         }),
         Wa = t.extend({
          name: "QToolbarTitle",
          mixins: [Lt],
          props: {shrink: Boolean},
          computed: {
           classes: function () {
            return "q-toolbar__title ellipsis" + (!0 === this.shrink ? " col-shrink" : "");
           },
          },
          render: function (t) {
           return t("div", {class: this.classes, on: Object.assign({}, this.qListeners)}, Ot(this, "default"));
          },
         }),
         Ya = t.extend({
          name: "QTree",
          mixins: [It],
          props: {
           nodes: {type: Array, required: !0},
           nodeKey: {type: String, required: !0},
           labelKey: {type: String, default: "label"},
           childrenKey: {type: String, default: "children"},
           color: String,
           controlColor: String,
           textColor: String,
           selectedColor: String,
           icon: String,
           tickStrategy: {
            type: String,
            default: "none",
            validator: function (t) {
             return ["none", "strict", "leaf", "leaf-filtered"].includes(t);
            },
           },
           ticked: Array,
           expanded: Array,
           selected: {},
           defaultExpandAll: Boolean,
           accordion: Boolean,
           filter: String,
           filterMethod: {
            type: Function,
            default: function (t, e) {
             var i = e.toLowerCase();
             return t[this.labelKey] && t[this.labelKey].toLowerCase().indexOf(i) > -1;
            },
           },
           duration: Number,
           noConnectors: Boolean,
           noNodesLabel: String,
           noResultsLabel: String,
          },
          computed: {
           classes: function () {
            return "q-tree" + (!0 === this.noConnectors ? " q-tree--no-connectors" : "") + (!0 === this.isDark ? " q-tree--dark" : "") + (void 0 !== this.color ? " text-" + this.color : "");
           },
           hasSelection: function () {
            return void 0 !== this.selected;
           },
           computedIcon: function () {
            return this.icon || this.$q.iconSet.tree.icon;
           },
           computedControlColor: function () {
            return this.controlColor || this.color;
           },
           textColorClass: function () {
            if (void 0 !== this.textColor)
             return "text-" + this.textColor;
           },
           selectedColorClass: function () {
            var t = this.selectedColor || this.color;
            if (t)
             return "text-" + t;
           },
           meta: function () {
            var t = this,
                    e = {},
                    i = function (n, s) {
                     var o = n.tickStrategy || (s ? s.tickStrategy : t.tickStrategy),
                             r = n[t.nodeKey],
                             a = n[t.childrenKey] && n[t.childrenKey].length > 0,
                             l = !0 !== a,
                             c = !0 !== n.disabled && !0 === t.hasSelection && !1 !== n.selectable,
                             u = !0 !== n.disabled && !1 !== n.expandable,
                             h = "none" !== o,
                             d = "strict" === o,
                             p = "leaf-filtered" === o,
                             f = "leaf" === o || "leaf-filtered" === o,
                             m = !0 !== n.disabled && !1 !== n.tickable;
                     !0 === f && !0 === m && s && !0 !== s.tickable && (m = !1);
                     var v = n.lazy;
                     !0 === v && void 0 !== t.lazy[r] && !0 === Array.isArray(n[t.childrenKey]) && (v = t.lazy[r]);
                     var g = {
                      key: r,
                      parent: s,
                      isParent: a,
                      isLeaf: l,
                      lazy: v,
                      disabled: n.disabled,
                      link: !0 !== n.disabled && (!0 === c || (!0 === u && (!0 === a || !0 === v))),
                      children: [],
                      matchesFilter: !t.filter || t.filterMethod(n, t.filter),
                      selected: r === t.selected && !0 === c,
                      selectable: c,
                      expanded: !0 === a && t.innerExpanded.includes(r),
                      expandable: u,
                      noTick: !0 === n.noTick || (!0 !== d && v && "loaded" !== v),
                      tickable: m,
                      tickStrategy: o,
                      hasTicking: h,
                      strictTicking: d,
                      leafFilteredTicking: p,
                      leafTicking: f,
                      ticked: !0 === d ? t.innerTicked.includes(r) : !0 === l && t.innerTicked.includes(r),
                     };
                     if (
                             ((e[r] = g),
                                     !0 === a &&
                                     ((g.children = n[t.childrenKey].map(function (t) {
                                      return i(t, g);
                                     })),
                                             t.filter &&
                                             (!0 !== g.matchesFilter
                                                     ? (g.matchesFilter = g.children.some(function (t) {
                                                      return t.matchesFilter;
                                                     }))
                                                     : !0 !== g.noTick &&
                                                     !0 !== g.disabled &&
                                                     !0 === g.tickable &&
                                                     !0 === p &&
                                                     !0 ===
                                                     g.children.every(function (t) {
                                                      return !0 !== t.matchesFilter || !0 === t.noTick || !0 !== t.tickable;
                                                     }) &&
                                                     (g.tickable = !1)),
                                             !0 === g.matchesFilter &&
                                             (!0 !== g.noTick &&
                                                     !0 !== d &&
                                                     !0 ===
                                                     g.children.every(function (t) {
                                                      return t.noTick;
                                                     }) &&
                                                     (g.noTick = !0),
                                                     f)))
                             ) {
                      if (
                              ((g.ticked = !1),
                                      (g.indeterminate = g.children.some(function (t) {
                                       return !0 === t.indeterminate;
                                      })),
                                      (g.tickable =
                                              !0 === g.tickable &&
                                              g.children.some(function (t) {
                                               return t.tickable;
                                              })),
                                      !0 !== g.indeterminate)
                              ) {
                       var _ = g.children.reduce(function (t, e) {
                        return !0 === e.ticked ? t + 1 : t;
                       }, 0);
                       _ === g.children.length ? (g.ticked = !0) : _ > 0 && (g.indeterminate = !0);
                      }
                      !0 === g.indeterminate &&
                              (g.indeterminateNextState = g.children.every(function (t) {
                               return !0 !== t.tickable || !0 !== t.ticked;
                              }));
                     }
                     return g;
                    };
            return (
                    this.nodes.forEach(function (t) {
                     return i(t, null);
                    }),
                    e
                    );
           },
          },
          data: function () {
           return {lazy: {}, innerTicked: this.ticked || [], innerExpanded: this.expanded || []};
          },
          watch: {
           ticked: function (t) {
            this.innerTicked = t;
           },
           expanded: function (t) {
            this.innerExpanded = t;
           },
          },
          methods: {
           getNodeByKey: function (t) {
            var e = this,
                    i = [].reduce,
                    n = function (s, o) {
                     return s || !o ? s : !0 === Array.isArray(o) ? i.call(Object(o), n, s) : o[e.nodeKey] === t ? o : o[e.childrenKey] ? n(null, o[e.childrenKey]) : void 0;
                    };
            return n(null, this.nodes);
           },
           getTickedNodes: function () {
            var t = this;
            return this.innerTicked.map(function (e) {
             return t.getNodeByKey(e);
            });
           },
           getExpandedNodes: function () {
            var t = this;
            return this.innerExpanded.map(function (e) {
             return t.getNodeByKey(e);
            });
           },
           isExpanded: function (t) {
            return !(!t || !this.meta[t]) && this.meta[t].expanded;
           },
           collapseAll: function () {
            void 0 !== this.expanded ? this.$emit("update:expanded", []) : (this.innerExpanded = []);
           },
           expandAll: function () {
            var t = this,
                    e = this.innerExpanded,
                    i = function (n) {
                     n[t.childrenKey] && n[t.childrenKey].length > 0 && !1 !== n.expandable && !0 !== n.disabled && (e.push(n[t.nodeKey]), n[t.childrenKey].forEach(i));
                    };
            this.nodes.forEach(i), void 0 !== this.expanded ? this.$emit("update:expanded", e) : (this.innerExpanded = e);
           },
           setExpanded: function (t, e, i, n) {
            var s = this;
            if ((void 0 === i && (i = this.getNodeByKey(t)), void 0 === n && (n = this.meta[t]), n.lazy && "loaded" !== n.lazy)) {
             if ("loading" === n.lazy)
              return;
             this.$set(this.lazy, t, "loading"),
                     !0 !== Array.isArray(i[this.childrenKey]) && this.$set(i, this.childrenKey, []),
                     this.$emit("lazy-load", {
                      node: i,
                      key: t,
                      done: function (e) {
                       (s.lazy[t] = "loaded"),
                               s.$set(i, s.childrenKey, !0 === Array.isArray(e) ? e : []),
                               s.$nextTick(function () {
                                var e = s.meta[t];
                                e && !0 === e.isParent && s.__setExpanded(t, !0);
                               });
                      },
                      fail: function () {
                       s.$delete(s.lazy, t), 0 === i[s.childrenKey].length && s.$delete(i, s.childrenKey);
                      },
                     });
            } else
             !0 === n.isParent && !0 === n.expandable && this.__setExpanded(t, e);
           },
           __setExpanded: function (t, e) {
            var i = this,
                    n = this.innerExpanded,
                    s = void 0 !== this.expanded;
            if ((!0 === s && (n = n.slice()), e)) {
             if (this.accordion && this.meta[t]) {
              var o = [];
              this.meta[t].parent
                      ? this.meta[t].parent.children.forEach(function (e) {
               e.key !== t && !0 === e.expandable && o.push(e.key);
              })
                      : this.nodes.forEach(function (e) {
                       var n = e[i.nodeKey];
                       n !== t && o.push(n);
                      }),
                      o.length > 0 &&
                      (n = n.filter(function (t) {
                       return !1 === o.includes(t);
                      }));
             }
             n = n.concat([t]).filter(function (t, e, i) {
              return i.indexOf(t) === e;
             });
            } else
             n = n.filter(function (e) {
              return e !== t;
             });
            !0 === s ? this.$emit("update:expanded", n) : (this.innerExpanded = n);
           },
           isTicked: function (t) {
            return !(!t || !this.meta[t]) && this.meta[t].ticked;
           },
           setTicked: function (t, e) {
            var i = this.innerTicked,
                    n = void 0 !== this.ticked;
            !0 === n && (i = i.slice()),
                    (i = e
                            ? i.concat(t).filter(function (t, e, i) {
                     return i.indexOf(t) === e;
                    })
                            : i.filter(function (e) {
                             return !1 === t.includes(e);
                            })),
                    !0 === n && this.$emit("update:ticked", i);
           },
           __getSlotScope: function (t, e, i) {
            var n = this,
                    s = {tree: this, node: t, key: i, color: this.color, dark: this.isDark};
            return (
                    Object.defineProperty(s, "expanded", {
                     get: function () {
                      return e.expanded;
                     },
                     set: function (t) {
                      t !== e.expanded && n.setExpanded(i, t);
                     },
                     configurable: !0,
                     enumerable: !0,
                    }),
                    Object.defineProperty(s, "ticked", {
                     get: function () {
                      return e.ticked;
                     },
                     set: function (t) {
                      t !== e.ticked && n.setTicked([i], t);
                     },
                     configurable: !0,
                     enumerable: !0,
                    }),
                    s
                    );
           },
           __getChildren: function (t, e) {
            var i = this;
            return (this.filter
                    ? e.filter(function (t) {
                     return i.meta[t[i.nodeKey]].matchesFilter;
                    })
                    : e
                    ).map(function (e) {
             return i.__getNode(t, e);
            });
           },
           __getNodeMedia: function (t, e) {
            if (void 0 !== e.icon)
             return t(zt, {staticClass: "q-tree__icon q-mr-sm", props: {name: e.icon, color: e.iconColor}});
            var i = e.img || e.avatar;
            return i ? t("img", {staticClass: "q-tree__" + (e.img ? "img" : "avatar") + " q-mr-sm", attrs: {src: i}}) : void 0;
           },
           __getNode: function (t, e) {
            var i = this,
                    n = e[this.nodeKey],
                    s = this.meta[n],
                    o = (e.header && this.$scopedSlots["header-" + e.header]) || this.$scopedSlots["default-header"],
                    r = !0 === s.isParent ? this.__getChildren(t, e[this.childrenKey]) : [],
                    a = r.length > 0 || (s.lazy && "loaded" !== s.lazy),
                    l = (e.body && this.$scopedSlots["body-" + e.body]) || this.$scopedSlots["default-body"],
                    c = void 0 !== o || void 0 !== l ? this.__getSlotScope(e, s, n) : null;
            return (
                    void 0 !== l && (l = t("div", {staticClass: "q-tree__node-body relative-position"}, [t("div", {class: this.textColorClass}, [l(c)])])),
                    t("div", {key: n, staticClass: "q-tree__node relative-position", class: {"q-tree__node--parent": a, "q-tree__node--child": !a}}, [
                     t(
                             "div",
                             {
                              staticClass: "q-tree__node-header relative-position row no-wrap items-center",
                              class: {"q-tree__node--link q-hoverable q-focusable": s.link, "q-tree__node--selected": s.selected, "q-tree__node--disabled": s.disabled},
                              attrs: {tabindex: s.link ? 0 : -1},
                              on: {
                               click: function (t) {
                                i.__onClick(e, s, t);
                               },
                               keypress: function (t) {
                                !0 !== J(t) && (13 === t.keyCode ? i.__onClick(e, s, t, !0) : 32 === t.keyCode && i.__onExpandClick(e, s, t, !0));
                               },
                              },
                             },
                             [
                              t("div", {staticClass: "q-focus-helper", attrs: {tabindex: -1}, ref: "blurTarget_" + s.key}),
                              "loading" === s.lazy
                                      ? t(Xt, {staticClass: "q-tree__spinner q-mr-xs", props: {color: this.computedControlColor}})
                                      : !0 === a
                                      ? t(zt, {
                                       staticClass: "q-tree__arrow q-mr-xs",
                                       class: {"q-tree__arrow--rotate": s.expanded},
                                       props: {name: this.computedIcon},
                                       on: {
                                        click: function (t) {
                                         i.__onExpandClick(e, s, t);
                                        },
                                       },
                                      })
                                      : null,
                              !0 === s.hasTicking && !0 !== s.noTick
                                      ? t(zi, {
                                       staticClass: "q-mr-xs",
                                       props: {value: !0 === s.indeterminate ? null : s.ticked, color: this.computedControlColor, dark: this.isDark, dense: !0, keepColor: !0, disable: !0 !== s.tickable},
                                       on: {
                                        keydown: S,
                                        input: function (t) {
                                         i.__onTickedClick(s, t);
                                        },
                                       },
                                      })
                                      : null,
                              t("div", {staticClass: "q-tree__node-header-content col row no-wrap items-center", class: s.selected ? this.selectedColorClass : this.textColorClass}, [
                               o ? o(c) : [this.__getNodeMedia(t, e), t("div", e[this.labelKey])],
                              ]),
                             ]
                             ),
                     !0 === a
                             ? t(
                                     Hs,
                                     {
                                      props: {duration: this.duration},
                                      on: mt(this, "slide", {
                                       show: function () {
                                        i.$emit("after-show");
                                       },
                                       hide: function () {
                                        i.$emit("after-hide");
                                       },
                                      }),
                                     },
                                     [
                                      t("div", {staticClass: "q-tree__node-collapsible", class: this.textColorClass, directives: [{name: "show", value: s.expanded}]}, [
                                       l,
                                       t("div", {staticClass: "q-tree__children", class: {"q-tree__node--disabled": s.disabled}}, r),
                                      ]),
                                     ]
                                     )
                             : l,
                    ])
                    );
           },
           __blur: function (t) {
            var e = this.$refs["blurTarget_" + t];
            void 0 !== e && e.focus();
           },
           __onClick: function (t, e, i, n) {
            !0 !== n && this.__blur(e.key),
                    this.hasSelection ? e.selectable && this.$emit("update:selected", e.key !== this.selected ? e.key : null) : this.__onExpandClick(t, e, i, n),
                    "function" == typeof t.handler && t.handler(t);
           },
           __onExpandClick: function (t, e, i, n) {
            void 0 !== i && S(i), !0 !== n && this.__blur(e.key), this.setExpanded(e.key, !e.expanded, t, e);
           },
           __onTickedClick: function (t, e) {
            if ((!0 === t.indeterminate && (e = t.indeterminateNextState), t.strictTicking))
             this.setTicked([t.key], e);
            else if (t.leafTicking) {
             var i = [],
                     n = function (t) {
                      t.isParent
                              ? (!0 !== e && !0 !== t.noTick && !0 === t.tickable && i.push(t.key), !0 === t.leafTicking && t.children.forEach(n))
                              : !0 === t.noTick || !0 !== t.tickable || (!0 === t.leafFilteredTicking && !0 !== t.matchesFilter) || i.push(t.key);
                     };
             n(t), this.setTicked(i, e);
            }
           },
          },
          render: function (t) {
           var e = this.__getChildren(t, this.nodes);
           return t("div", {class: this.classes}, 0 === e.length ? (this.filter ? this.noResultsLabel || this.$q.lang.tree.noResults : this.noNodesLabel || this.$q.lang.tree.noNodes) : e);
          },
          created: function () {
           !0 === this.defaultExpandAll && this.expandAll();
          },
         }),
         Ua = t.extend({
          name: "QUploaderBase",
          mixins: [It, go],
          props: {label: String, color: String, textColor: String, square: Boolean, flat: Boolean, bordered: Boolean, noThumbnails: Boolean, autoUpload: Boolean, hideUploadBtn: Boolean, disable: Boolean, readonly: Boolean},
          provide: function () {
           return {__qUploaderGetInput: this.__getInputControl};
          },
          data: function () {
           return {files: [], queuedFiles: [], uploadedFiles: [], dnd: !1, expanded: !1, uploadSize: 0, uploadedSize: 0};
          },
          watch: {
           isUploading: function (t, e) {
            !1 === e && !0 === t ? this.$emit("start") : !0 === e && !1 === t && this.$emit("finish");
           },
          },
          computed: {
           canUpload: function () {
            return !0 === this.editable && !0 !== this.isBusy && !0 !== this.isUploading && this.queuedFiles.length > 0;
           },
           canAddFiles: function () {
            return (
                    !0 === this.editable &&
                    !0 !== this.isUploading &&
                    (!0 === this.multiple || 0 === this.queuedFiles.length) &&
                    (void 0 === this.maxFiles || this.files.length < this.maxFilesNumber) &&
                    (void 0 === this.maxTotalSize || this.uploadSize < this.maxTotalSizeNumber)
                    );
           },
           uploadProgress: function () {
            return 0 === this.uploadSize ? 0 : this.uploadedSize / this.uploadSize;
           },
           uploadProgressLabel: function () {
            return this.__getProgressLabel(this.uploadProgress);
           },
           uploadedSizeLabel: function () {
            return ct(this.uploadedSize);
           },
           uploadSizeLabel: function () {
            return ct(this.uploadSize);
           },
           colorClass: function () {
            var t = [];
            return void 0 !== this.color && t.push("bg-" + this.color), void 0 !== this.textColor && t.push("text-" + this.textColor), t.join(" ");
           },
           editable: function () {
            return !0 !== this.disable && !0 !== this.readonly;
           },
          },
          methods: {
           reset: function () {
            this.disable || (this.abort(), (this.uploadedSize = 0), (this.uploadSize = 0), this.__revokeImgURLs(), (this.files = []), (this.queuedFiles = []), (this.uploadedFiles = []));
           },
           removeUploadedFiles: function () {
            var t = this;
            this.__removeFiles(["uploaded"], function () {
             t.uploadedFiles = [];
            });
           },
           removeQueuedFiles: function () {
            var t = this;
            this.__removeFiles(["idle", "failed"], function (e) {
             var i = e.size;
             (t.uploadSize -= i), (t.queuedFiles = []);
            });
           },
           __removeFiles: function (t, e) {
            if (!0 !== this.disable) {
             var i = {files: [], size: 0},
                     n = this.files.filter(function (e) {
                      return -1 === t.indexOf(e.__status) || ((i.size += e.size), i.files.push(e), void 0 !== e._img && window.URL.revokeObjectURL(e._img.src), !1);
                     });
             i.files.length > 0 && ((this.files = n), void 0 !== e && e(i), this.$emit("removed", i.files));
            }
           },
           removeFile: function (t) {
            this.disable ||
                    ("uploaded" === t.__status
                            ? (this.uploadedFiles = this.uploadedFiles.filter(function (e) {
                             return e.name !== t.name;
                            }))
                            : "uploading" === t.__status
                            ? t.__abort()
                            : (this.uploadSize -= t.size),
                            (this.files = this.files.filter(function (e) {
                             return e.name !== t.name || (void 0 !== e._img && window.URL.revokeObjectURL(e._img.src), !1);
                            })),
                            (this.queuedFiles = this.queuedFiles.filter(function (e) {
                             return e.name !== t.name;
                            })),
                            this.$emit("removed", [t]));
           },
           __revokeImgURLs: function () {
            this.files.forEach(function (t) {
             void 0 !== t._img && window.URL.revokeObjectURL(t._img.src);
            });
           },
           __getFileInput: function () {
            return this.$refs.input || this.$el.getElementsByClassName("q-uploader__input")[0];
           },
           __getProgressLabel: function (t) {
            return (100 * t).toFixed(2) + "%";
           },
           __updateFile: function (t, e, i) {
            if (((t.__status = e), "idle" === e))
             return (t.__uploaded = 0), (t.__progress = 0), (t.__sizeLabel = ct(t.size)), void (t.__progressLabel = "0.00%");
            "failed" !== e
                    ? ((t.__uploaded = "uploaded" === e ? t.size : i), (t.__progress = "uploaded" === e ? 1 : Math.min(0.9999, t.__uploaded / t.size)), (t.__progressLabel = this.__getProgressLabel(t.__progress)), this.$forceUpdate())
                    : this.$forceUpdate();
           },
           __addFiles: function (t, e) {
            var i = this,
                    n = this.__processFiles(t, e, this.files, !0);
            if (void 0 !== n) {
             var s = n.filter(function (t) {
              return (
                      -1 ===
                      i.files.findIndex(function (e) {
                       return t.name === e.name;
                      })
                      );
             });
             if (void 0 !== s) {
              var o = this.__getFileInput();
              void 0 !== o && (o.value = ""),
                      s.forEach(function (t) {
                       if ((i.__updateFile(t, "idle"), (i.uploadSize += t.size), !0 !== i.noThumbnails && t.type.toUpperCase().startsWith("IMAGE"))) {
                        var e = new Image();
                        (e.src = window.URL.createObjectURL(t)), (t.__img = e);
                       }
                      }),
                      (this.files = this.files.concat(s)),
                      (this.queuedFiles = this.queuedFiles.concat(s)),
                      this.$emit("added", s),
                      !0 === this.autoUpload && this.upload();
             }
            }
           },
           __getBtn: function (t, e, i, n) {
            if (!0 === e)
             return t(ye, {props: {type: "a", icon: this.$q.iconSet.uploader[i], flat: !0, dense: !0}, on: "add" === i ? null : {click: n}}, "add" === i ? this.__getInputControl(t) : null);
           },
           __getInputControl: function (t) {
            return [
             t("input", {
              ref: "input",
              staticClass: "q-uploader__input overflow-hidden absolute-full",
              attrs: Object.assign({}, {tabindex: -1, type: "file", title: "", accept: this.accept, capture: this.capture}, !0 === this.multiple ? {multiple: !0} : {}),
              on: mt(this, "input", {mousedown: y, change: this.__addFiles}),
             }),
            ];
           },
           __getHeader: function (t) {
            return void 0 !== this.$scopedSlots.header
                    ? this.$scopedSlots.header(this)
                    : [
                     t("div", {staticClass: "q-uploader__header-content flex flex-center no-wrap q-gutter-xs"}, [
                      this.__getBtn(t, this.queuedFiles.length > 0, "removeQueue", this.removeQueuedFiles),
                      this.__getBtn(t, this.uploadedFiles.length > 0, "removeUploaded", this.removeUploadedFiles),
                      !0 === this.isUploading ? t(Xt, {staticClass: "q-uploader__spinner"}) : null,
                      t("div", {staticClass: "col column justify-center"}, [
                       void 0 !== this.label ? t("div", {staticClass: "q-uploader__title"}, [this.label]) : null,
                       t("div", {staticClass: "q-uploader__subtitle"}, [this.uploadSizeLabel + " / " + this.uploadProgressLabel]),
                      ]),
                      this.__getBtn(t, this.canAddFiles, "add", this.pickFiles),
                      this.__getBtn(t, !1 === this.hideUploadBtn && !0 === this.canUpload, "upload", this.upload),
                      this.__getBtn(t, this.isUploading, "clear", this.abort),
                     ]),
                    ];
           },
           __getList: function (t) {
            var e = this;
            return void 0 !== this.$scopedSlots.list
                    ? this.$scopedSlots.list(this)
                    : this.files.map(function (i) {
                     return t(
                             "div",
                             {
                              key: i.name,
                              staticClass: "q-uploader__file relative-position",
                              class: {"q-uploader__file--img": !0 !== e.noThumbnails && void 0 !== i.__img, "q-uploader__file--failed": "failed" === i.__status, "q-uploader__file--uploaded": "uploaded" === i.__status},
                              style: !0 !== e.noThumbnails && void 0 !== i.__img ? {backgroundImage: 'url("' + i.__img.src + '")'} : null,
                             },
                             [
                              t("div", {staticClass: "q-uploader__file-header row flex-center no-wrap"}, [
                               "failed" === i.__status ? t(zt, {staticClass: "q-uploader__file-status", props: {name: e.$q.iconSet.type.negative, color: "negative"}}) : null,
                               t("div", {staticClass: "q-uploader__file-header-content col"}, [
                                t("div", {staticClass: "q-uploader__title"}, [i.name]),
                                t("div", {staticClass: "q-uploader__subtitle row items-center no-wrap"}, [i.__sizeLabel + " / " + i.__progressLabel]),
                               ]),
                               "uploading" === i.__status
                                       ? t(Ri, {props: {value: i.__progress, min: 0, max: 1, indeterminate: 0 === i.__progress}})
                                       : t(ye, {
                                        props: {round: !0, dense: !0, flat: !0, icon: e.$q.iconSet.uploader["uploaded" === i.__status ? "done" : "clear"]},
                                        on: {
                                         click: function () {
                                          e.removeFile(i);
                                         },
                                        },
                                       }),
                              ]),
                             ]
                             );
                    });
           },
          },
          beforeDestroy: function () {
           !0 === this.isUploading && this.abort(), this.files.length > 0 && this.__revokeImgURLs();
          },
          render: function (t) {
           var e = [t("div", {staticClass: "q-uploader__header", class: this.colorClass}, this.__getHeader(t)), t("div", {staticClass: "q-uploader__list scroll"}, this.__getList(t)), this.__getDnd(t, "uploader")];
           return (
                   !0 === this.isBusy && e.push(t("div", {staticClass: "q-uploader__overlay absolute-full flex flex-center"}, [t(Xt)])),
                   t(
                           "div",
                           {
                            staticClass: "q-uploader column no-wrap",
                            class: {
                             "q-uploader--dark q-dark": this.isDark,
                             "q-uploader--bordered": this.bordered,
                             "q-uploader--square no-border-radius": this.square,
                             "q-uploader--flat no-shadow": this.flat,
                             "disabled q-uploader--disable": this.disable,
                            },
                            on: !0 === this.canAddFiles ? mt(this, "drag", {dragover: this.__onDragOver}) : null,
                           },
                           e
                           )
                   );
          },
         });
 function Ka(t) {
  return "function" == typeof t
          ? t
          : function () {
           return t;
          };
 }
 var Xa = {
  props: {
   url: [Function, String],
   method: {type: [Function, String], default: "POST"},
   fieldName: {
    type: [Function, String],
    default: function (t) {
     return t.name;
    },
   },
   headers: [Function, Array],
   formFields: [Function, Array],
   withCredentials: [Function, Boolean],
   sendRaw: [Function, Boolean],
   batch: [Function, Boolean],
   factory: Function,
  },
  data: function () {
   return {xhrs: [], promises: [], workingThreads: 0};
  },
  computed: {
   xhrProps: function () {
    return {
     url: Ka(this.url),
     method: Ka(this.method),
     headers: Ka(this.headers),
     formFields: Ka(this.formFields),
     fieldName: Ka(this.fieldName),
     withCredentials: Ka(this.withCredentials),
     sendRaw: Ka(this.sendRaw),
     batch: Ka(this.batch),
    };
   },
   isUploading: function () {
    return this.workingThreads > 0;
   },
   isBusy: function () {
    return this.promises.length > 0;
   },
  },
  methods: {
   abort: function () {
    this.xhrs.forEach(function (t) {
     t.abort();
    }),
            this.promises.length > 0 && (this.abortPromises = !0);
   },
   upload: function () {
    var t = this;
    if (!1 !== this.canUpload) {
     var e = this.queuedFiles.slice(0);
     (this.queuedFiles = []),
             this.xhrProps.batch(e)
             ? this.__runFactory(e)
             : e.forEach(function (e) {
              t.__runFactory([e]);
             });
    }
   },
   __runFactory: function (t) {
    var e = this;
    if ((this.workingThreads++, "function" == typeof this.factory)) {
     var i = this.factory(t);
     if (i)
      if ("function" == typeof i.catch && "function" == typeof i.then) {
       this.promises.push(i);
       var n = function (n) {
        !0 !== e._isBeingDestroyed &&
                !0 !== e._isDestroyed &&
                ((e.promises = e.promises.filter(function (t) {
                 return t !== i;
                })),
                        0 === e.promises.length && (e.abortPromises = !1),
                        (e.queuedFiles = e.queuedFiles.concat(t)),
                        t.forEach(function (t) {
                         e.__updateFile(t, "failed");
                        }),
                        e.$emit("factory-failed", n, t),
                        e.workingThreads--);
       };
       i.then(function (s) {
        !0 === e.abortPromises
                ? n(new Error("Aborted"))
                : !0 !== e._isBeingDestroyed &&
                !0 !== e._isDestroyed &&
                ((e.promises = e.promises.filter(function (t) {
                 return t !== i;
                })),
                        e.__uploadFiles(t, s));
       }).catch(n);
      } else
       this.__uploadFiles(t, i || {});
     else
      this.$emit("factory-failed", new Error("QUploader: factory() does not return properly"), t), this.workingThreads--;
    } else
     this.__uploadFiles(t, {});
   },
   __uploadFiles: function (t, e) {
    var i = this,
            n = new FormData(),
            s = new XMLHttpRequest(),
            o = function (t, n) {
             return void 0 !== e[t] ? Ka(e[t])(n) : i.xhrProps[t](n);
            },
            r = o("url", t);
    if (!r)
     return console.error("q-uploader: invalid or no URL specified"), void this.workingThreads--;
    var a = o("formFields", t);
    void 0 !== a &&
            a.forEach(function (t) {
             n.append(t.name, t.value);
            });
    var l,
            c = 0,
            u = 0,
            h = 0,
            d = 0;
    s.upload.addEventListener(
            "progress",
            function (e) {
             if (!0 !== l) {
              var n = Math.min(d, e.loaded);
              i.uploadedSize += n - h;
              for (var s = (h = n) - u, o = c; s > 0 && o < t.length; o++) {
               var r = t[o];
               if (!(s > r.size))
                return void i.__updateFile(r, "uploading", s);
               (s -= r.size), c++, (u += r.size), i.__updateFile(r, "uploading", r.size);
              }
             }
            },
            !1
            ),
            (s.onreadystatechange = function () {
             s.readyState < 4 ||
                     (s.status && s.status < 400
                             ? ((i.uploadedFiles = i.uploadedFiles.concat(t)),
                                     t.forEach(function (t) {
                                      i.__updateFile(t, "uploaded");
                                     }),
                                     i.$emit("uploaded", {files: t, xhr: s}))
                             : ((l = !0),
                                     (i.uploadedSize -= h),
                                     (i.queuedFiles = i.queuedFiles.concat(t)),
                                     t.forEach(function (t) {
                                      i.__updateFile(t, "failed");
                                     }),
                                     i.$emit("failed", {files: t, xhr: s})),
                             i.workingThreads--,
                             (i.xhrs = i.xhrs.filter(function (t) {
                              return t !== s;
                             })));
            }),
            s.open(o("method", t), r),
            !0 === o("withCredentials", t) && (s.withCredentials = !0);
    var p = o("headers", t);
    void 0 !== p &&
            p.forEach(function (t) {
             s.setRequestHeader(t.name, t.value);
            });
    var f = o("sendRaw", t);
    t.forEach(function (t) {
     i.__updateFile(t, "uploading", 0),
             !0 !== f && n.append(o("fieldName", t), t, t.name),
             (t.xhr = s),
             (t.__abort = function () {
              s.abort();
             }),
             (d += t.size);
    }),
            this.$emit("uploading", {files: t, xhr: s}),
            this.xhrs.push(s),
            !0 === f ? s.send(new Blob(t)) : s.send(n);
   },
  },
 },
         Ga = t.extend({name: "QUploader", mixins: [Ua, Xa]}),
         Za = t.extend({
          name: "QUploaderAddTrigger",
          inject: {
           __qUploaderGetInput: {
            default: function () {
             console.error("QUploaderAddTrigger needs to be child of QUploader");
            },
           },
          },
          render: function (t) {
           return this.__qUploaderGetInput(t);
          },
         }),
         Ja = t.extend({
          name: "QVideo",
          mixins: [xo, Lt],
          props: {src: {type: String, required: !0}},
          computed: {
           iframeData: function () {
            return {attrs: {src: this.src, frameborder: "0", allowfullscreen: !0}};
           },
           classes: function () {
            return "q-video" + (void 0 !== this.ratio ? " q-video--responsive" : "");
           },
          },
          render: function (t) {
           return t("div", {class: this.classes, style: this.ratioStyle, on: Object.assign({}, this.qListeners)}, [t("iframe", this.iframeData)]);
          },
         }),
         tl = Object.freeze({
          __proto__: null,
          QAjaxBar: kt,
          QAvatar: At,
          QBadge: Dt,
          QBanner: Ft,
          QBar: Vt,
          QBreadcrumbs: Wt,
          QBreadcrumbsEl: Ut,
          QBtn: ye,
          QBtnDropdown: li,
          QBtnGroup: we,
          QBtnToggle: hi,
          QCard: di,
          QCardSection: pi,
          QCardActions: fi,
          QCarousel: Mi,
          QCarouselSlide: $i,
          QCarouselControl: Li,
          QChatMessage: Oi,
          QCheckbox: zi,
          QChip: Ai,
          QCircularProgress: Ri,
          QColor: vn,
          QDate: as,
          QDialog: ys,
          QDrawer: Ss,
          QEditor: Vs,
          QExpansionItem: Ks,
          QFab: to,
          QFabAction: no,
          QField: fo,
          QFile: bo,
          QFooter: yo,
          QForm: wo,
          QHeader: So,
          QIcon: zt,
          QImg: Co,
          QInfiniteScroll: ko,
          QInnerLoading: qo,
          QInput: Io,
          QIntersection: No,
          QList: Cs,
          QItem: ks,
          QItemSection: qs,
          QItemLabel: Ns,
          QKnob: Qo,
          QLayout: Uo,
          QMarkupTable: Ko,
          QMenu: ai,
          QNoSsr: Xo,
          QOptionGroup: er,
          QPage: ir,
          QPageContainer: nr,
          QPageScroller: or,
          QPageSticky: sr,
          QPagination: rr,
          QParallax: cr,
          QPopupEdit: hr,
          QPopupProxy: dr,
          QLinearProgress: fr,
          QPullToRefresh: mr,
          QRadio: Go,
          QRange: br,
          QRating: yr,
          QResizeObserver: sn,
          QResponsive: wr,
          QScrollArea: Sr,
          QScrollObserver: Yo,
          QSelect: zr,
          QSeparator: Ys,
          QSkeleton: Ir,
          QSlideItem: Fr,
          QSlideTransition: Hs,
          QSlider: en,
          QSpace: jr,
          QSpinner: Xt,
          QSpinnerAudio: Vr,
          QSpinnerBall: Nr,
          QSpinnerBars: Hr,
          QSpinnerBox: Qr,
          QSpinnerClock: Wr,
          QSpinnerComment: Yr,
          QSpinnerCube: Ur,
          QSpinnerDots: Kr,
          QSpinnerFacebook: Xr,
          QSpinnerGears: Gr,
          QSpinnerGrid: Zr,
          QSpinnerHearts: Jr,
          QSpinnerHourglass: ta,
          QSpinnerInfinity: ea,
          QSpinnerIos: ia,
          QSpinnerOrbit: na,
          QSpinnerOval: sa,
          QSpinnerPie: oa,
          QSpinnerPuff: ra,
          QSpinnerRadio: aa,
          QSpinnerRings: la,
          QSpinnerTail: ca,
          QSplitter: ua,
          QStep: pa,
          QStepper: fa,
          QStepperNavigation: ma,
          QTabPanels: pn,
          QTabPanel: fn,
          QTable: Pa,
          QTh: va,
          QTr: za,
          QTd: Aa,
          QTabs: un,
          QTab: dn,
          QRouteTab: ja,
          QTime: Va,
          QTimeline: Na,
          QTimelineEntry: Ha,
          QToggle: Zo,
          QToolbar: Qa,
          QToolbarTitle: Wa,
          QTooltip: xs,
          QTree: Ya,
          QUploader: Ga,
          QUploaderBase: Ua,
          QUploaderAddTrigger: Za,
          QVideo: Ja,
          QVirtualScroll: Ca,
         });
 function el(t) {
  if (!1 === t)
   return 0;
  if (!0 === t || void 0 === t)
   return 1;
  var e = parseInt(t, 10);
  return isNaN(e) ? 0 : e;
 }
 function il(t) {
  var e = t.__qclosepopup;
  void 0 !== e && (t.removeEventListener("click", e.handler), t.removeEventListener("keyup", e.handlerKey), delete t.__qclosepopup);
 }
 var nl = {
  name: "close-popup",
  bind: function (t, e, i) {
   var n = e.value;
   void 0 !== t.__qclosepopup && (il(t), (t.__qclosepopup_destroyed = !0));
   var s = {
    depth: el(n),
    handler: function (t) {
     0 !== s.depth &&
             setTimeout(function () {
              !(function (t, e, i) {
               for (; 0 !== i && void 0 !== t; ) {
                if (void 0 !== t.__renderPortal) {
                 if ((i--, "QMenu" === t.$options.name)) {
                  t = qe(t, e);
                  continue;
                 }
                 t.hide(e);
                }
                t = t.$parent;
               }
              })(i.componentInstance || i.context, t, s.depth);
             });
    },
    handlerKey: function (t) {
     !0 === tt(t, 13) && s.handler(t);
    },
   };
   (t.__qclosepopup = s), t.addEventListener("click", s.handler), t.addEventListener("keyup", s.handlerKey);
  },
  update: function (t, e) {
   var i = e.value,
           n = e.oldValue;
   void 0 !== t.__qclosepopup && i !== n && (t.__qclosepopup.depth = el(i));
  },
  unbind: function (t) {
   void 0 === t.__qclosepopup_destroyed ? il(t) : delete t.__qclosepopup_destroyed;
  },
 };
 function sl(t) {
  var e = t.__qgoback;
  void 0 !== e && (t.removeEventListener("click", e.goBack), t.removeEventListener("keyup", e.goBackKey), delete t.__qgoback);
 }
 var ol = {
  name: "go-back",
  bind: function (t, e, i) {
   var n = e.value,
           s = e.modifiers;
   void 0 !== t.__qgoback && (sl(t), (t.__qgoback_destroyed = !0));
   var o = {
    value: n,
    position: window.history.length - 1,
    single: s.single,
    goBack: function () {
     var t = i.context.$router;
     !0 === o.single ? t.go(-1) : !0 === u.is.nativeMobile ? t.go(o.position - window.history.length) : t.replace(o.value);
    },
    goBackKey: function (t) {
     !0 === tt(t, 13) && o.goBack();
    },
   };
   (t.__qgoback = o), t.addEventListener("click", o.goBack), t.addEventListener("keyup", o.goBackKey);
  },
  update: function (t, e) {
   var i = e.value,
           n = e.oldValue,
           s = t.__qgoback;
   void 0 !== s && i !== n && (s.value = i);
  },
  unbind: function (t) {
   void 0 === t.__qgoback_destroyed ? sl(t) : delete t.__qgoback_destroyed;
  },
 },
         rl = 0,
         al = void 0;
 function ll(t, e) {
  void 0 === al && (((al = document.createElement("div")).style.cssText = "position: absolute; left: 0; top: 0"), document.body.appendChild(al));
  var i = t.getBoundingClientRect(),
          n = al.getBoundingClientRect(),
          s = window.getComputedStyle(t),
          o = s.marginLeft,
          r = s.marginRight,
          a = s.marginTop,
          l = s.marginBottom,
          c = parseInt(o, 10) + parseInt(r, 10),
          u = parseInt(a, 10) + parseInt(l, 10);
  return {
   left: i.left - n.left,
   top: i.top - n.top,
   width: i.right - i.left,
   height: i.bottom - i.top,
   widthM: i.right - i.left + (!0 === e ? 0 : c),
   heightM: i.bottom - i.top + (!0 === e ? 0 : u),
   marginH: !0 === e ? c : 0,
   marginV: !0 === e ? u : 0,
  };
 }
 function cl(t) {
  return {width: t.scrollWidth, height: t.scrollHeight};
 }
 var ul = ["Top", "Right", "Bottom", "Left"],
         hl = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
         dl = /-block|-inline|block-|inline-/,
         pl = /(-block|-inline|block-|inline-).*:/;
 function fl(t, e) {
  for (var i = window.getComputedStyle(t), n = {}, s = 0; s < e.length; s++) {
   var o = e[s];
   if ("" === i[o])
    if ("cssText" === o) {
     for (var r = i.length, a = "", l = 0; l < r; l++)
      !0 !== dl.test(i[l]) && (a += i[l] + ": " + i[i[l]] + "; ");
     n[o] = a;
    } else if (["borderWidth", "borderStyle", "borderColor"].indexOf(o) > -1) {
     for (var c = o.replace("border", ""), u = "", h = 0; h < ul.length; h++) {
      u += i["border" + ul[h] + c] + " ";
     }
     n[o] = u;
    } else if ("borderRadius" === o) {
     for (var d = "", p = "", f = 0; f < hl.length; f++) {
      var m = i[hl[f]].split(" ");
      (d += m[0] + " "), (p += (void 0 === m[1] ? m[0] : m[1]) + " ");
     }
     n[o] = d + "/ " + p;
    } else
     n[o] = i[o];
   else
    n[o] =
            "cssText" === o
            ? i[o]
            .split(";")
            .filter(function (t) {
             return !0 !== pl.test(t);
            })
            .join(";")
            : i[o];
  }
  return n;
 }
 var ml = ["absolute", "fixed", "relative", "sticky"];
 function vl(t) {
  for (var e = t, i = 0; null !== e && e !== document; ) {
   var n = window.getComputedStyle(e),
           s = n.position,
           o = n.zIndex,
           r = Number(o);
   r > i && (e === t || !0 === ml.includes(s)) && (i = r), (e = e.parentNode);
  }
  return i;
 }
 function gl(t) {
  var e = typeof t;
  return "function" === e ? t() : "string" === e ? document.querySelector(t) : t;
 }
 function _l(t) {
  return t && t.ownerDocument === document && null !== t.parentNode;
 }
 function bl(t) {
  var e,
          i = function () {
           return !1;
          },
          n = !1,
          s = !0,
          o = {from: (e = t).from, to: void 0 !== e.to ? e.to : e.from},
          r = (function (t) {
           return (
                   "number" == typeof t ? (t = {duration: t}) : "function" == typeof t && (t = {onEnd: t}),
                   Object.assign({}, t, {
                    waitFor: void 0 === t.waitFor ? 0 : t.waitFor,
                    duration: !0 === isNaN(t.duration) ? 300 : parseInt(t.duration, 10),
                    easing: "string" == typeof t.easing && t.easing.length > 0 ? t.easing : "ease-in-out",
                    delay: !0 === isNaN(t.delay) ? 0 : parseInt(t.delay, 10),
                    fill: "string" == typeof t.fill && t.fill.length > 0 ? t.fill : "none",
                    resize: !0 === t.resize,
                    useCSS: !0 === t.useCSS,
                    hideFromClone: !0 === t.hideFromClone,
                    keepToClone: !0 === t.keepToClone,
                    tween: !0 === t.tween,
                    tweenFromOpacity: !0 === isNaN(t.tweenFromOpacity) ? 0.6 : parseFloat(t.tweenFromOpacity),
                    tweenToOpacity: !0 === isNaN(t.tweenToOpacity) ? 0.5 : parseFloat(t.tweenToOpacity),
                   })
                   );
          })(t),
          a = gl(o.from);
  if (!0 !== _l(a))
   return i;
  "function" == typeof a.qMorphCancel && a.qMorphCancel();
  var l = void 0,
          c = void 0,
          u = void 0,
          h = void 0,
          d = a.parentNode,
          p = a.nextElementSibling,
          f = ll(a, r.resize),
          m = cl(d),
          v = m.width,
          g = m.height,
          _ = fl(a, ["borderWidth", "borderStyle", "borderColor", "borderRadius", "backgroundColor", "transform", "position", "cssText"]),
          b = _.borderWidth,
          y = _.borderStyle,
          w = _.borderColor,
          S = _.borderRadius,
          x = _.backgroundColor,
          C = _.transform,
          k = _.position,
          q = _.cssText,
          T = a.classList.toString(),
          M = a.style.cssText,
          $ = a.cloneNode(!0),
          L = !0 === r.tween ? a.cloneNode(!0) : void 0;
  void 0 !== L &&
          (L.className = L.classList
                  .toString()
                  .split(" ")
                  .filter(function (t) {
                   return !1 === /^bg-/.test(t);
                  })
                  .join(" ")),
          !0 === r.hideFromClone && $.classList.add("q-morph--internal"),
          $.setAttribute("aria-hidden", "true"),
          ($.style.transition = "none"),
          ($.style.animation = "none"),
          ($.style.pointerEvents = "none"),
          d.insertBefore($, p),
          (a.qMorphCancel = function () {
           (n = !0), $.remove(), void 0 !== L && L.remove(), !0 === r.hideFromClone && $.classList.remove("q-morph--internal"), (a.qMorphCancel = void 0);
          });
  return (
          "function" == typeof t.onToggle && t.onToggle(),
          requestAnimationFrame(function () {
           var t = gl(o.to);
           if (!0 !== n && !0 === _l(t)) {
            a !== t && "function" == typeof t.qMorphCancel && t.qMorphCancel(), !0 !== r.keepToClone && t.classList.add("q-morph--internal"), $.classList.add("q-morph--internal");
            var e = cl(d),
                    p = e.width,
                    m = e.height,
                    _ = cl(t.parentNode),
                    O = _.width,
                    B = _.height;
            !0 !== r.hideFromClone && $.classList.remove("q-morph--internal"),
                    (t.qMorphCancel = function () {
                     (n = !0),
                             $.remove(),
                             void 0 !== L && L.remove(),
                             !0 === r.hideFromClone && $.classList.remove("q-morph--internal"),
                             !0 !== r.keepToClone && t.classList.remove("q-morph--internal"),
                             (a.qMorphCancel = void 0),
                             (t.qMorphCancel = void 0);
                    });
            var E = function () {
             if (!0 !== n) {
              !0 !== r.hideFromClone && ($.classList.add("q-morph--internal"), ($.innerHTML = ""), ($.style.left = 0), ($.style.right = "unset"), ($.style.top = 0), ($.style.bottom = "unset"), ($.style.transform = "none")),
                      !0 !== r.keepToClone && t.classList.remove("q-morph--internal");
              var e = t.parentNode,
                      o = cl(e),
                      _ = o.width,
                      E = o.height,
                      P = t.cloneNode(r.keepToClone);
              P.setAttribute("aria-hidden", "true"),
                      !0 !== r.keepToClone && ((P.style.left = 0), (P.style.right = "unset"), (P.style.top = 0), (P.style.bottom = "unset"), (P.style.transform = "none"), (P.style.pointerEvents = "none")),
                      P.classList.add("q-morph--internal");
              var z = t === a && d === e ? $ : t.nextElementSibling;
              e.insertBefore(P, z);
              var A = fl(t, ["borderWidth", "borderStyle", "borderColor", "borderRadius", "backgroundColor", "transform", "position", "cssText"]),
                      D = A.borderWidth,
                      I = A.borderStyle,
                      R = A.borderColor,
                      F = A.borderRadius,
                      j = A.backgroundColor,
                      V = A.transform,
                      N = A.position,
                      H = A.cssText,
                      Q = t.classList.toString(),
                      W = t.style.cssText;
              (t.style.cssText = H),
                      (t.style.transform = "none"),
                      (t.style.animation = "none"),
                      (t.style.transition = "none"),
                      (t.className = Q.split(" ")
                              .filter(function (t) {
                               return !1 === /^bg-/.test(t);
                              })
                              .join(" "));
              for (
                      var Y = ll(t, r.resize),
                      U = f.left - Y.left,
                      K = f.top - Y.top,
                      X = f.width / (Y.width > 0 ? Y.width : 10),
                      G = f.height / (Y.height > 0 ? Y.height : 100),
                      Z = v - p,
                      J = g - m,
                      tt = _ - O,
                      et = E - B,
                      it = Math.max(f.widthM, Z),
                      nt = Math.max(f.heightM, J),
                      st = Math.max(Y.widthM, tt),
                      ot = Math.max(Y.heightM, et),
                      rt = a === t && !1 === ["absolute", "fixed"].includes(N) && !1 === ["absolute", "fixed"].includes(k),
                      at = "fixed" === N,
                      lt = e;
                      !0 !== at && lt !== document;
                      )
               (at = "fixed" === window.getComputedStyle(lt).position), (lt = lt.parentNode);
              if (
                      (!0 !== r.hideFromClone &&
                              (($.style.display = "block"),
                                      ($.style.flex = "0 0 auto"),
                                      ($.style.opacity = 0),
                                      ($.style.minWidth = "unset"),
                                      ($.style.maxWidth = "unset"),
                                      ($.style.minHeight = "unset"),
                                      ($.style.maxHeight = "unset"),
                                      $.classList.remove("q-morph--internal")),
                              !0 !== r.keepToClone &&
                              ((P.style.display = "block"), (P.style.flex = "0 0 auto"), (P.style.opacity = 0), (P.style.minWidth = "unset"), (P.style.maxWidth = "unset"), (P.style.minHeight = "unset"), (P.style.maxHeight = "unset")),
                              P.classList.remove("q-morph--internal"),
                              "string" == typeof r.classes && (t.className += " " + r.classes),
                              "string" == typeof r.style)
                      )
               t.style.cssText += " " + r.style;
              else if (r.style === Object(r.style))
               for (var ct in r.style)
                t.style[ct] = r.style[ct];
              var ut = vl($),
                      ht = vl(t),
                      dt = !0 === at ? document.documentElement : {scrollLeft: 0, scrollTop: 0};
              (t.style.position = !0 === at ? "fixed" : "absolute"),
                      (t.style.left = Y.left - dt.scrollLeft + "px"),
                      (t.style.right = "unset"),
                      (t.style.top = Y.top - dt.scrollTop + "px"),
                      (t.style.margin = 0),
                      !0 === r.resize &&
                      ((t.style.minWidth = "unset"),
                              (t.style.maxWidth = "unset"),
                              (t.style.minHeight = "unset"),
                              (t.style.maxHeight = "unset"),
                              (t.style.overflow = "hidden"),
                              (t.style.overflowX = "hidden"),
                              (t.style.overflowY = "hidden")),
                      document.body.appendChild(t),
                      void 0 !== L &&
                      ((L.style.cssText = q),
                              (L.style.transform = "none"),
                              (L.style.animation = "none"),
                              (L.style.transition = "none"),
                              (L.style.position = t.style.position),
                              (L.style.left = f.left - dt.scrollLeft + "px"),
                              (L.style.right = "unset"),
                              (L.style.top = f.top - dt.scrollTop + "px"),
                              (L.style.margin = 0),
                              (L.style.pointerEvents = "none"),
                              !0 === r.resize &&
                              ((L.style.minWidth = "unset"),
                                      (L.style.maxWidth = "unset"),
                                      (L.style.minHeight = "unset"),
                                      (L.style.maxHeight = "unset"),
                                      (L.style.overflow = "hidden"),
                                      (L.style.overflowX = "hidden"),
                                      (L.style.overflowY = "hidden")),
                              document.body.appendChild(L));
              var pt = function (n) {
               a === t && !0 !== s ? ((t.style.cssText = M), (t.className = T)) : ((t.style.cssText = W), (t.className = Q)),
                       P.parentNode === e && e.insertBefore(t, P),
                       $.remove(),
                       P.remove(),
                       void 0 !== L && L.remove(),
                       (i = function () {
                        return !1;
                       }),
                       (a.qMorphCancel = void 0),
                       (t.qMorphCancel = void 0),
                       "function" == typeof r.onEnd && r.onEnd(!0 === s ? "to" : "from", !0 === n);
              };
              if (!0 !== r.useCSS && "function" == typeof t.animate) {
               var ft = !0 === r.resize ? {transform: "translate(" + U + "px, " + K + "px)", width: it + "px", height: nt + "px"} : {transform: "translate(" + U + "px, " + K + "px) scale(" + X + ", " + G + ")"},
                       mt = !0 === r.resize ? {width: st + "px", height: ot + "px"} : {},
                       vt = !0 === r.resize ? {width: it + "px", height: nt + "px"} : {},
                       gt =
                       !0 === r.resize
                       ? {transform: "translate(" + -1 * U + "px, " + -1 * K + "px)", width: st + "px", height: ot + "px"}
               : {transform: "translate(" + -1 * U + "px, " + -1 * K + "px) scale(" + 1 / X + ", " + 1 / G + ")"},
                       _t = void 0 !== L ? {opacity: r.tweenToOpacity} : {backgroundColor: x},
                       bt = void 0 !== L ? {opacity: 1} : {backgroundColor: j};
               (h = t.animate(
                       [
                        Object.assign({}, {margin: 0, borderWidth: b, borderStyle: y, borderColor: w, borderRadius: S, zIndex: ut, transformOrigin: "0 0"}, ft, _t),
                        Object.assign({}, {margin: 0, borderWidth: D, borderStyle: I, borderColor: R, borderRadius: F, zIndex: ht, transformOrigin: "0 0", transform: V}, mt, bt),
                       ],
                       {duration: r.duration, easing: r.easing, fill: r.fill, delay: r.delay}
               )),
                       (c =
                               void 0 === L
                               ? void 0
                               : L.animate(
                                       [
                                        Object.assign({}, {opacity: r.tweenFromOpacity, margin: 0, borderWidth: b, borderStyle: y, borderColor: w, borderRadius: S, zIndex: ut, transformOrigin: "0 0", transform: C}, vt),
                                        Object.assign({}, {opacity: 0, margin: 0, borderWidth: D, borderStyle: I, borderColor: R, borderRadius: F, zIndex: ht, transformOrigin: "0 0"}, gt),
                                       ],
                                       {duration: r.duration, easing: r.easing, fill: r.fill, delay: r.delay}
                               )),
                       (l =
                               !0 === r.hideFromClone || !0 === rt
                               ? void 0
                               : $.animate(
                                       [
                                        {margin: (J < 0 ? J / 2 : 0) + "px " + (Z < 0 ? Z / 2 : 0) + "px", width: it + f.marginH + "px", height: nt + f.marginV + "px"},
                                        {margin: 0, width: 0, height: 0},
                                       ],
                                       {duration: r.duration, easing: r.easing, fill: r.fill, delay: r.delay}
                               )),
                       (u =
                               !0 === r.keepToClone
                               ? void 0
                               : P.animate(
                                       [
                                        !0 === rt ? {margin: (J < 0 ? J / 2 : 0) + "px " + (Z < 0 ? Z / 2 : 0) + "px", width: it + f.marginH + "px", height: nt + f.marginV + "px"} : {margin: 0, width: 0, height: 0},
                                        {margin: (et < 0 ? et / 2 : 0) + "px " + (tt < 0 ? tt / 2 : 0) + "px", width: st + Y.marginH + "px", height: ot + Y.marginV + "px"},
                                       ],
                                       {duration: r.duration, easing: r.easing, fill: r.fill, delay: r.delay}
                               ));
               var yt = function (t) {
                void 0 !== l && l.cancel(),
                        void 0 !== c && c.cancel(),
                        void 0 !== u && u.cancel(),
                        h.cancel(),
                        h.removeEventListener("finish", yt),
                        h.removeEventListener("cancel", yt),
                        pt(t),
                        (l = void 0),
                        (c = void 0),
                        (u = void 0),
                        (h = void 0);
               };
               (a.qMorphCancel = function () {
                (a.qMorphCancel = void 0), (n = !0), yt();
               }),
                       (t.qMorphCancel = function () {
                        (t.qMorphCancel = void 0), (n = !0), yt();
                       }),
                       h.addEventListener("finish", yt),
                       h.addEventListener("cancel", yt),
                       (i = function (t) {
                        return !0 !== n && void 0 !== h && (!0 === t ? (yt(!0), !0) : ((s = !0 !== s), void 0 !== l && l.reverse(), void 0 !== c && c.reverse(), void 0 !== u && u.reverse(), h.reverse(), !0));
                       });
              } else {
               var wt = "q-morph-anim-" + ++rl,
                       St = document.createElement("style"),
                       xt =
                       !0 === r.resize
                       ? "\n            transform: translate(" + U + "px, " + K + "px);\n            width: " + it + "px;\n            height: " + nt + "px;\n          "
                       : "transform: translate(" + U + "px, " + K + "px) scale(" + X + ", " + G + ");",
                       Ct = !0 === r.resize ? "\n            width: " + st + "px;\n            height: " + ot + "px;\n          " : "",
                       kt = !0 === r.resize ? "\n            width: " + it + "px;\n            height: " + nt + "px;\n          " : "",
                       qt =
                       !0 === r.resize
                       ? "\n            transform: translate(" + -1 * U + "px, " + -1 * K + "px);\n            width: " + st + "px;\n            height: " + ot + "px;\n          "
                       : "transform: translate(" + -1 * U + "px, " + -1 * K + "px) scale(" + 1 / X + ", " + 1 / G + ");",
                       Tt = void 0 !== L ? "opacity: " + r.tweenToOpacity + ";" : "background-color: " + x + ";",
                       Mt = void 0 !== L ? "opacity: 1;" : "background-color: " + j + ";",
                       $t =
                       void 0 === L
                       ? ""
                       : "\n            @keyframes " +
                       wt +
                       "-from-tween {\n              0% {\n                opacity: " +
                       r.tweenFromOpacity +
                       ";\n                margin: 0;\n                border-width: " +
                       b +
                       ";\n                border-style: " +
                       y +
                       ";\n                border-color: " +
                       w +
                       ";\n                border-radius: " +
                       S +
                       ";\n                z-index: " +
                       ut +
                       ";\n                transform-origin: 0 0;\n                transform: " +
                       C +
                       ";\n                " +
                       kt +
                       "\n              }\n\n              100% {\n                opacity: 0;\n                margin: 0;\n                border-width: " +
                       D +
                       ";\n                border-style: " +
                       I +
                       ";\n                border-color: " +
                       R +
                       ";\n                border-radius: " +
                       F +
                       ";\n                z-index: " +
                       ht +
                       ";\n                transform-origin: 0 0;\n                " +
                       qt +
                       "\n              }\n            }\n          ",
                       Lt =
                       !0 === r.hideFromClone || !0 === rt
                       ? ""
                       : "\n            @keyframes " +
                       wt +
                       "-from {\n              0% {\n                margin: " +
                       (J < 0 ? J / 2 : 0) +
                       "px " +
                       (Z < 0 ? Z / 2 : 0) +
                       "px;\n                width: " +
                       (it + f.marginH) +
                       "px;\n                height: " +
                       (nt + f.marginV) +
                       "px;\n              }\n\n              100% {\n                margin: 0;\n                width: 0;\n                height: 0;\n              }\n            }\n          ",
                       Ot =
                       !0 === rt
                       ? "\n            margin: " + (J < 0 ? J / 2 : 0) + "px " + (Z < 0 ? Z / 2 : 0) + "px;\n            width: " + (it + f.marginH) + "px;\n            height: " + (nt + f.marginV) + "px;\n          "
                       : "\n            margin: 0;\n            width: 0;\n            height: 0;\n          ",
                       Bt =
                       !0 === r.keepToClone
                       ? ""
                       : "\n            @keyframes " +
                       wt +
                       "-to {\n              0% {\n                " +
                       Ot +
                       "\n              }\n\n              100% {\n                margin: " +
                       (et < 0 ? et / 2 : 0) +
                       "px " +
                       (tt < 0 ? tt / 2 : 0) +
                       "px;\n                width: " +
                       (st + Y.marginH) +
                       "px;\n                height: " +
                       (ot + Y.marginV) +
                       "px;\n              }\n            }\n          ";
               (St.innerHTML =
                       "\n          @keyframes " +
                       wt +
                       " {\n            0% {\n              margin: 0;\n              border-width: " +
                       b +
                       ";\n              border-style: " +
                       y +
                       ";\n              border-color: " +
                       w +
                       ";\n              border-radius: " +
                       S +
                       ";\n              background-color: " +
                       x +
                       ";\n              z-index: " +
                       ut +
                       ";\n              transform-origin: 0 0;\n              " +
                       xt +
                       "\n              " +
                       Tt +
                       "\n            }\n\n            100% {\n              margin: 0;\n              border-width: " +
                       D +
                       ";\n              border-style: " +
                       I +
                       ";\n              border-color: " +
                       R +
                       ";\n              border-radius: " +
                       F +
                       ";\n              background-color: " +
                       j +
                       ";\n              z-index: " +
                       ht +
                       ";\n              transform-origin: 0 0;\n              transform: " +
                       V +
                       ";\n              " +
                       Ct +
                       "\n              " +
                       Mt +
                       "\n            }\n          }\n\n          " +
                       Lt +
                       "\n\n          " +
                       $t +
                       "\n\n          " +
                       Bt +
                       "\n        "),
                       document.head.appendChild(St);
               var Et = "normal";
               ($.style.animation = r.duration + "ms " + r.easing + " " + r.delay + "ms " + Et + " " + r.fill + " " + wt + "-from"),
                       void 0 !== L && (L.style.animation = r.duration + "ms " + r.easing + " " + r.delay + "ms " + Et + " " + r.fill + " " + wt + "-from-tween"),
                       (P.style.animation = r.duration + "ms " + r.easing + " " + r.delay + "ms " + Et + " " + r.fill + " " + wt + "-to"),
                       (t.style.animation = r.duration + "ms " + r.easing + " " + r.delay + "ms " + Et + " " + r.fill + " " + wt);
               var Pt = function (e) {
                (e === Object(e) && e.animationName !== wt) || (t.removeEventListener("animationend", Pt), t.removeEventListener("animationcancel", Pt), pt(), St.remove());
               };
               (a.qMorphCancel = function () {
                (a.qMorphCancel = void 0), (n = !0), Pt();
               }),
                       (t.qMorphCancel = function () {
                        (t.qMorphCancel = void 0), (n = !0), Pt();
                       }),
                       t.addEventListener("animationend", Pt),
                       t.addEventListener("animationcancel", Pt),
                       (i = function (e) {
                        return (
                                !!(!0 !== n && t && $ && P) &&
                                (!0 === e
                                        ? (Pt(), !0)
                                        : ((s = !0 !== s),
                                                (Et = "normal" === Et ? "reverse" : "normal"),
                                                ($.style.animationDirection = Et),
                                                (L.style.animationDirection = Et),
                                                (P.style.animationDirection = Et),
                                                (t.style.animationDirection = Et),
                                                !0))
                                );
                       });
              }
             } else
              "function" == typeof t.qMorphCancel && t.qMorphCancel();
            };
            r.waitFor > 0 || "transitionend" === r.waitFor || (r.waitFor === Object(r.waitFor) && "function" == typeof r.waitFor.then)
                    ? (r.waitFor > 0
                            ? new Promise(function (t) {
                             return setTimeout(t, r.waitFor);
                            })
                            : "transitionend" === r.waitFor
                            ? new Promise(function (e) {
                             var i = setTimeout(function () {
                              n();
                             }, 400),
                                     n = function (s) {
                                      clearTimeout(i), t && (t.removeEventListener("transitionend", n), t.removeEventListener("transitioncancel", n)), e();
                                     };
                             t.addEventListener("transitionend", n), t.addEventListener("transitioncancel", n);
                            })
                            : r.waitFor
                            )
                    .then(E)
                    .catch(function () {
                     "function" == typeof t.qMorphCancel && t.qMorphCancel();
                    })
                    : E();
           } else
            "function" == typeof a.qMorphCancel && a.qMorphCancel();
          }),
          function (t) {
           return i(t);
          }
  );
 }
 var yl = {},
         wl = ["duration", "delay", "easing", "fill", "classes", "style", "duration", "resize", "useCSS", "hideFromClone", "keepToClone", "tween", "tweenFromOpacity", "tweenToOpacity", "waitFor", "onEnd"],
         Sl = ["resize", "useCSS", "hideFromClone", "keepToClone", "tween"];
 function xl(t, e) {
  t.clsAction !== e && ((t.clsAction = e), t.el.classList[e]("q-morph--invisible"));
 }
 function Cl(t, e) {
  var i = e.opts;
  Sl.forEach(function (e) {
   i[e] = !0 === t[e];
  });
 }
 function kl(t, e) {
  if (e.name !== t)
   !1 === e.animating && xl(e, "add");
  else {
   var i = yl[e.group];
   void 0 === i
           ? ((yl[e.group] = {name: e.group, model: t, queue: [e], animating: !1}), xl(e, "remove"))
           : i.model !== t &&
           ((i.model = t),
                   i.queue.push(e),
                   !1 === i.animating &&
                   2 === i.queue.length &&
                   (function t(e) {
                    if (!(!0 === e.animating || e.queue.length < 2)) {
                     var i = e.queue,
                             n = i[0],
                             s = i[1];
                     (e.animating = !0), (n.animating = !0), (s.animating = !0), xl(n, "remove"), xl(s, "remove");
                     var o = bl(
                             Object.assign(
                                     {},
                                     {
                                      from: n.el,
                                      to: s.el,
                                      onToggle: function () {
                                       xl(n, "add"), xl(s, "remove");
                                      },
                                     },
                                     s.opts,
                                     {
                                      onEnd: function (i, o) {
                                       void 0 !== s.opts.onEnd && s.opts.onEnd(i, o), !0 !== o && ((n.animating = !1), (s.animating = !1), (e.animating = !1), (e.cancel = void 0), e.queue.shift(), t(e));
                                      },
                                     }
                             )
                             );
                     e.cancel = function () {
                      o(!0), (e.cancel = void 0);
                     };
                    }
                   })(i));
  }
 }
 function ql(t, e) {
  var i;
  Object(e) === e
          ? ((i = "" + e.model),
                  (function (t, e) {
                   void 0 !== t.group && (e.group = t.group), void 0 !== t.name && (e.name = t.name);
                   var i = e.opts;
                   wl.forEach(function (e) {
                    void 0 !== t[e] && (i[e] = t[e]);
                   });
                  })(e, t),
                  Cl(e, t))
          : (i = "" + e),
          i !== t.model ? ((t.model = i), kl(i, t)) : !1 === t.animating && void 0 !== t.clsAction && t.el.classList[t.clsAction]("q-morph--invisible");
 }
 function Tl(t) {
  var e = t.__qmorph;
  if (void 0 !== e) {
   var i = yl[e.group];
   if (void 0 !== i)
    -1 !== i.queue.indexOf(e) &&
            ((i.queue = i.queue.filter(function (t) {
             return t !== e;
            })),
                    0 === i.queue.length && (void 0 !== i.cancel && i.cancel(), delete yl[e.group]));
   "add" === e.clsAction && t.classList.remove("q-morph--invisible"), delete t.__qmorph;
  }
 }
 var Ml = {
  name: "morph",
  inserted: function (t, e) {
   void 0 !== t.__qmorph && (Tl(t), (t.__qmorph_destroyed = !0));
   var i = {el: t, animating: !1, opts: {}};
   Cl(e.modifiers, i),
           (function (t, e) {
            var i = "string" == typeof t && t.length > 0 ? t.split(":") : [];
            (e.name = i[0]), (e.group = i[1]), Object.assign(e.opts, {duration: !0 === isNaN(i[2]) ? 300 : parseFloat(i[2]), waitFor: i[3]});
           })(e.arg, i),
           ql(i, e.value),
           (t.__qmorph = i);
  },
  update: function (t, e) {
   var i = t.__qmorph;
   void 0 !== i && ql(i, e.value);
  },
  unbind: function (t) {
   void 0 === t.__qmorph_destroyed ? Tl(t) : delete t.__qmorph_destroyed;
  },
 };
 var $l = {childList: !0, subtree: !0, attributes: !0, characterData: !0, attributeOldValue: !0, characterDataOldValue: !0};
 function Ll(t, e, i) {
  (e.handler = i),
          void 0 !== e.observer && e.observer.disconnect(),
          (e.observer = new MutationObserver(function (i) {
           "function" == typeof e.handler && ((!1 !== e.handler(i) && !0 !== e.once) || Ol(t));
          })),
          e.observer.observe(t, e.opts);
 }
 function Ol(t) {
  var e = t.__qmutation;
  void 0 !== e && (void 0 !== e.observer && e.observer.disconnect(), delete t.__qmutation);
 }
 var Bl = {
  name: "mutation",
  inserted: function (t, e) {
   var i = e.modifiers,
           n = i.once,
           s = (function (t, e) {
            var i = {};
            for (var n in t)
             Object.prototype.hasOwnProperty.call(t, n) && -1 === e.indexOf(n) && (i[n] = t[n]);
            return i;
           })(i, ["once"]),
           o = e.value;
   void 0 !== t.__qmutation && (Ol(t), (t.__qmutation_destroyed = !0));
   var r = {once: n, opts: 0 === Object.keys(s).length ? $l : s};
   Ll(t, r, o), (t.__qmutation = r);
  },
  update: function (t, e) {
   var i = e.oldValue,
           n = e.value,
           s = t.__qmutation;
   void 0 !== s && i !== n && Ll(t, s, n);
  },
  unbind: function (t) {
   void 0 === t.__qmutation_destroyed ? Ol(t) : delete t.__qmutation_destroyed;
  },
 };
 function El(t, e) {
  var i = e.value,
          n = e.oldValue;
  "function" == typeof i ? ((t.handler = i), "function" != typeof n && (t.scrollTarget.addEventListener("scroll", t.scroll, d.passive), t.scroll())) : t.scrollTarget.removeEventListener("scroll", t.scroll, d.passive);
 }
 function Pl(t) {
  var e = t.__qscrollfire;
  void 0 !== e && (e.scrollTarget.removeEventListener("scroll", e.scroll, d.passive), delete t.__qscrollfire);
 }
 var zl = {
  name: "scroll-fire",
  inserted: function (t, e) {
   void 0 !== t.__qscrollfire && (Pl(t), (t.__qscrollfire_destroyed = !0));
   var i = {
    scrollTarget: Ie(t),
    scroll: M(function () {
     var e, n;
     i.scrollTarget === window ? ((n = t.getBoundingClientRect().bottom), (e = window.innerHeight)) : ((n = Gt(t).top + Zt(t)), (e = Gt(i.scrollTarget).top + Zt(i.scrollTarget))),
             n > 0 && n < e && (i.scrollTarget.removeEventListener("scroll", i.scroll, d.passive), i.handler(t));
    }, 25),
   };
   El(i, e), (t.__qscrollfire = i);
  },
  update: function (t, e) {
   void 0 !== t.__qscrollfire && e.value !== e.oldValue && El(t.__qscrollfire, e);
  },
  unbind: function (t) {
   void 0 === t.__qscrollfire_destroyed ? Pl(t) : delete t.__qscrollfire_destroyed;
  },
 };
 function Al(t, e) {
  var i = e.value,
          n = e.oldValue;
  "function" == typeof i ? ((t.handler = i), "function" != typeof n && t.scrollTarget.addEventListener("scroll", t.scroll, d.passive)) : t.scrollTarget.removeEventListener("scroll", t.scroll, d.passive);
 }
 function Dl(t) {
  var e = t.__qscroll;
  void 0 !== e && (e.scrollTarget.removeEventListener("scroll", e.scroll, d.passive), delete t.__qscroll);
 }
 var Il = {
  name: "scroll",
  inserted: function (t, e) {
   void 0 !== t.__qscroll && (Dl(t), (t.__qscroll_destroyed = !0));
   var i = {
    scrollTarget: Ie(t),
    scroll: function () {
     i.handler(Fe(i.scrollTarget), je(i.scrollTarget));
    },
   };
   Al(i, e), (t.__qscroll = i);
  },
  update: function (t, e) {
   void 0 !== t.__qscroll && e.oldValue !== e.value && Al(t.__qscroll, e);
  },
  unbind: function (t) {
   void 0 === t.__qscroll_destroyed ? Dl(t) : delete t.__qscroll_destroyed;
  },
 };
 function Rl(t) {
  var e = t.__qtouchhold;
  void 0 !== e && (q(e, "main"), q(e, "temp"), clearTimeout(e.timer), void 0 !== e.styleCleanup && e.styleCleanup(), delete t.__qtouchhold);
 }
 var Fl = {
  name: "touch-hold",
  bind: function (t, e) {
   var i;
   void 0 !== t.__qtouchhold && (Rl(t), (t.__qtouchhold_destroyed = !0));
   var n = e.modifiers;
   if (!0 === n.mouse || !0 === u.has.touch) {
    var s = {
     handler: e.value,
     noop: f,
     mouseStart: function (t) {
      "function" == typeof s.handler &&
              !0 === m(t) &&
              (k(s, "temp", [
               [document, "mousemove", "move", "passiveCapture"],
               [document, "click", "end", "notPassiveCapture"],
              ]),
                      s.start(t, !0));
     },
     touchStart: function (t) {
      if (void 0 !== t.target && "function" == typeof s.handler) {
       var e = pe(t.target);
       k(s, "temp", [
        [e, "touchmove", "move", "passiveCapture"],
        [e, "touchcancel", "end", "notPassiveCapture"],
        [e, "touchend", "end", "notPassiveCapture"],
       ]),
               s.start(t);
      }
     },
     start: function (t, e) {
      s.origin = v(t);
      var i = Date.now();
      !0 === u.is.mobile &&
              (document.body.classList.add("non-selectable"),
                      Se(),
                      (s.styleCleanup = function (t) {
                       s.styleCleanup = void 0;
                       var e = function () {
                        document.body.classList.remove("non-selectable");
                       };
                       !0 === t ? (Se(), setTimeout(e, 10)) : e();
                      })),
              (s.triggered = !1),
              (s.sensitivity = !0 === e ? s.mouseSensitivity : s.touchSensitivity),
              (s.timer = setTimeout(function () {
               Se(), (s.triggered = !0), s.handler({evt: t, touch: !0 !== e, mouse: !0 === e, position: s.origin, duration: Date.now() - i});
              }, s.duration));
     },
     move: function (t) {
      var e = v(t),
              i = e.top,
              n = e.left;
      (Math.abs(n - s.origin.left) >= s.sensitivity || Math.abs(i - s.origin.top) >= s.sensitivity) && clearTimeout(s.timer);
     },
     end: function (t) {
      q(s, "temp"), void 0 !== s.styleCleanup && s.styleCleanup(s.triggered), !0 === s.triggered ? void 0 !== t && S(t) : clearTimeout(s.timer);
     },
    },
            o = [600, 5, 7];
    "string" == typeof e.arg &&
            e.arg.length > 0 &&
            e.arg.split(":").forEach(function (t, e) {
     var i = parseInt(t, 10);
     i && (o[e] = i);
    }),
            (i = o),
            (s.duration = i[0]),
            (s.touchSensitivity = i[1]),
            (s.mouseSensitivity = i[2]),
            (t.__qtouchhold = s),
            !0 === n.mouse && k(s, "main", [[t, "mousedown", "mouseStart", "passive" + (!0 === n.mouseCapture ? "Capture" : "")]]),
            !0 === u.has.touch &&
            k(s, "main", [
             [t, "touchstart", "touchStart", "passive" + (!0 === n.capture ? "Capture" : "")],
             [t, "touchend", "noop", "notPassiveCapture"],
            ]);
   }
  },
  update: function (t, e) {
   var i = t.__qtouchhold;
   void 0 !== i && e.oldValue !== e.value && ("function" != typeof e.value && i.end(), (i.handler = e.value));
  },
  unbind: function (t) {
   void 0 === t.__qtouchhold_destroyed ? Rl(t) : delete t.__qtouchhold_destroyed;
  },
 },
         jl = {esc: 27, tab: 9, enter: 13, space: 32, up: 38, left: 37, right: 39, down: 40, delete: [8, 46]},
         Vl = new RegExp("^([\\d+]+|" + Object.keys(jl).join("|") + ")$", "i");
 function Nl(t) {
  var e = t.__qtouchrepeat;
  void 0 !== e && (clearTimeout(e.timer), q(e, "main"), q(e, "temp"), void 0 !== e.styleCleanup && e.styleCleanup(), delete t.__qtouchrepeat);
 }
 var Hl,
         Ql = {
          name: "touch-repeat",
          bind: function (t, e) {
           var i = e.modifiers,
                   n = e.value,
                   s = e.arg;
           void 0 !== t.__qtouchrepeat && (Nl(t), (t.__qtouchrepeat_destroyed = !0));
           var o = Object.keys(i).reduce(function (t, e) {
            if (!0 === Vl.test(e)) {
             var i = isNaN(parseInt(e, 10)) ? jl[e.toLowerCase()] : parseInt(e, 10);
             i >= 0 && t.push(i);
            }
            return t;
           }, []);
           if (!0 === i.mouse || !0 === u.has.touch || 0 !== o.length) {
            var r =
                    "string" == typeof s && s.length > 0
                    ? s.split(":").map(function (t) {
             return parseInt(t, 10);
            })
                    : [0, 600, 300],
                    a = r.length - 1,
                    l = {
                     keyboard: o,
                     handler: n,
                     noop: f,
                     mouseStart: function (t) {
                      void 0 === l.event &&
                              "function" == typeof l.handler &&
                              !0 === m(t) &&
                              (k(l, "temp", [
                               [document, "mousemove", "move", "passiveCapture"],
                               [document, "click", "end", "notPassiveCapture"],
                              ]),
                                      l.start(t, !0));
                     },
                     keyboardStart: function (e) {
                      if ("function" == typeof l.handler && !0 === tt(e, o)) {
                       if ((0 === r[0] || void 0 !== l.event) && (S(e), t.focus(), void 0 !== l.event))
                        return;
                       k(l, "temp", [
                        [document, "keyup", "end", "notPassiveCapture"],
                        [document, "click", "end", "notPassiveCapture"],
                       ]),
                               l.start(e, !1, !0);
                      }
                     },
                     touchStart: function (t) {
                      if (void 0 !== t.target && "function" == typeof l.handler) {
                       var e = pe(t.target);
                       k(l, "temp", [
                        [e, "touchmove", "move", "passiveCapture"],
                        [e, "touchcancel", "end", "notPassiveCapture"],
                        [e, "touchend", "end", "notPassiveCapture"],
                       ]),
                               l.start(t);
                      }
                     },
                     start: function (t, e, i) {
                      function n(t) {
                       (l.styleCleanup = void 0), (document.documentElement.style.cursor = "");
                       var e = function () {
                        document.body.classList.remove("non-selectable");
                       };
                       !0 === t ? (Se(), setTimeout(e, 10)) : e();
                      }
                      !0 !== i && (l.origin = v(t)),
                              !0 === u.is.mobile && (document.body.classList.add("non-selectable"), Se(), (l.styleCleanup = n)),
                              (l.event = {touch: !0 !== e && !0 !== i, mouse: !0 === e, keyboard: !0 === i, startTime: Date.now(), repeatCount: 0});
                      var s = function () {
                       if (void 0 !== l.event) {
                        0 === l.event.repeatCount &&
                                ((l.event.evt = t),
                                        !0 === i ? (l.event.keyCode = t.keyCode) : (l.event.position = v(t)),
                                        !0 !== u.is.mobile && ((document.documentElement.style.cursor = "pointer"), document.body.classList.add("non-selectable"), Se(), (l.styleCleanup = n))),
                                (l.event.duration = Date.now() - l.event.startTime),
                                (l.event.repeatCount += 1),
                                l.handler(l.event);
                        var e = a < l.event.repeatCount ? a : l.event.repeatCount;
                        l.timer = setTimeout(s, r[e]);
                       }
                      };
                      0 === r[0] ? s() : (l.timer = setTimeout(s, r[0]));
                     },
                     move: function (t) {
                      void 0 !== l.event &&
                              !0 ===
                              (function (t, e) {
                               var i = v(t),
                                       n = i.top,
                                       s = i.left;
                               return Math.abs(s - e.left) >= 7 || Math.abs(n - e.top) >= 7;
                              })(t, l.origin) &&
                              clearTimeout(l.timer);
                     },
                     end: function (t) {
                      void 0 !== l.event && (void 0 !== l.styleCleanup && l.styleCleanup(!0), void 0 !== t && l.event.repeatCount > 0 && S(t), q(l, "temp"), clearTimeout(l.timer), (l.event = void 0));
                     },
                    };
            (t.__qtouchrepeat = l),
                    !0 === i.mouse && k(l, "main", [[t, "mousedown", "mouseStart", "passive" + (!0 === i.mouseCapture ? "Capture" : "")]]),
                    !0 === u.has.touch &&
                    k(l, "main", [
                     [t, "touchstart", "touchStart", "passive" + (!0 === i.capture ? "Capture" : "")],
                     [t, "touchend", "noop", "notPassiveCapture"],
                    ]),
                    o.length > 0 && k(l, "main", [[t, "keydown", "keyboardStart", "notPassive" + (!0 === i.keyCapture ? "Capture" : "")]]);
           }
          },
          update: function (t, e) {
           var i = e.oldValue,
                   n = e.value,
                   s = t.__qtouchrepeat;
           void 0 !== s && i !== n && ("function" != typeof n && s.end(), (s.handler = n));
          },
          unbind: function (t) {
           void 0 === t.__qtouchrepeat_destroyed ? Nl(t) : delete t.__qtouchrepeat_destroyed;
          },
         },
         Wl = Object.freeze({__proto__: null, ClosePopup: nl, GoBack: ol, Intersection: Vo, Morph: Ml, Mutation: Bl, Ripple: re, ScrollFire: zl, Scroll: Il, TouchHold: Fl, TouchPan: Xi, TouchRepeat: Ql, TouchSwipe: vi});
 function Yl(t) {
  void 0 === Hl && (Hl = h.is.winphone ? "msapplication-navbutton-color" : h.is.safari ? "apple-mobile-web-app-status-bar-style" : "theme-color");
  var e = (function (t) {
   var e = document.getElementsByTagName("META");
   for (var i in e)
    if (e[i].name === t)
     return e[i];
  })(Hl),
          i = void 0 === e;
  i && (e = document.createElement("meta")).setAttribute("name", Hl), e.setAttribute("content", t), i && document.head.appendChild(e);
 }
 var Ul = {
  install: function (t) {
   var e = t.$q,
           n = t.cfg;
   (this.set =
           !1 !== i || !0 !== h.is.mobile || (!0 !== h.is.nativeMobile && !0 !== h.is.winphone && !0 !== h.is.safari && !0 !== h.is.webkit && !0 !== h.is.vivaldi)
           ? f
           : function (t) {
            var e = t || K("primary");
            !0 === h.is.nativeMobile && window.StatusBar ? window.StatusBar.backgroundColorByHexString(e) : Yl(e);
           }),
           (e.addressbarColor = this),
           n.addressbarColor && this.set(n.addressbarColor);
  },
 },
         Kl = {};
 function Xl(t, e) {
  try {
   var i = t[e]();
   return void 0 === i ? Promise.resolve() : i;
  } catch (t) {
   return Promise.reject(t);
  }
 }
 var Gl = {
  isCapable: !1,
  isActive: !1,
  activeEl: null,
  request: function (t) {
   var e = this;
   if (!0 === this.isCapable && !1 === this.isActive) {
    var i = t || document.documentElement;
    return Xl(i, Kl.request).then(function () {
     e.activeEl = i;
    });
   }
   return this.__getErr();
  },
  exit: function () {
   var t = this;
   return !0 === this.isCapable && !0 === this.isActive
           ? Xl(document, Kl.exit).then(function () {
    t.activeEl = null;
   })
           : this.__getErr();
  },
  toggle: function (t) {
   return !0 === this.isActive ? this.exit() : this.request(t);
  },
  install: function (e) {
   var n = this;
   (e.$q.fullscreen = this),
           !0 !== i &&
           ((Kl.request = ["requestFullscreen", "msRequestFullscreen", "mozRequestFullScreen", "webkitRequestFullscreen"].find(function (t) {
            return void 0 !== document.documentElement[t];
           })),
                   (this.isCapable = void 0 !== Kl.request),
                   !1 !== this.isCapable
                   ? ((this.__getErr = function () {
                    return Promise.resolve();
                   }),
                           (Kl.exit = ["exitFullscreen", "msExitFullscreen", "mozCancelFullScreen", "webkitExitFullscreen"].find(function (t) {
                            return document[t];
                           })),
                           (this.isActive = !!(document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement)),
                           ["onfullscreenchange", "onmsfullscreenchange", "onwebkitfullscreenchange"].forEach(function (t) {
                    document[t] = function () {
                     n.isActive = !1 === n.isActive;
                    };
                   }),
                           t.util.defineReactive(this, "isActive", this.isActive),
                           t.util.defineReactive(this, "activeEl", this.activeEl))
                   : (this.__getErr = function () {
                    return Promise.reject("Not capable");
                   }));
  },
 },
         Zl = {
          appVisible: !1,
          install: function (e) {
           var n = this,
                   s = e.$q;
           if (!0 !== i) {
            var o, r;
            void 0 !== document.hidden
                    ? ((o = "hidden"), (r = "visibilitychange"))
                    : void 0 !== document.msHidden
                    ? ((o = "msHidden"), (r = "msvisibilitychange"))
                    : void 0 !== document.webkitHidden && ((o = "webkitHidden"), (r = "webkitvisibilitychange"));
            var a = function () {
             n.appVisible = s.appVisible = !document[o];
            };
            a(), r && void 0 !== document[o] && (t.util.defineReactive(s, "appVisible", this.appVisible), document.addEventListener(r, a, !1));
           } else
            this.appVisible = s.appVisible = !0;
          },
         },
         Jl = t.extend({
          name: "BottomSheetPlugin",
          mixins: [It, bt],
          inheritAttrs: !1,
          props: {title: String, message: String, actions: Array, grid: Boolean, cardClass: [String, Array, Object], cardStyle: [String, Array, Object]},
          computed: {
           dialogProps: function () {
            return Object.assign({}, this.qAttrs, {position: "bottom"});
           },
          },
          methods: {
           show: function () {
            this.$refs.dialog.show();
           },
           hide: function () {
            this.$refs.dialog.hide();
           },
           onOk: function (t) {
            this.$emit("ok", t), this.hide();
           },
           __getGrid: function (t) {
            var e = this;
            return this.actions.map(function (i) {
             var n = i.avatar || i.img;
             return void 0 === i.label
                     ? t(Ys, {staticClass: "col-all", props: {dark: e.isDark}})
                     : t(
                             "div",
                             {
                              staticClass: "q-bottom-sheet__item q-hoverable q-focusable cursor-pointer relative-position",
                              class: i.classes,
                              attrs: {tabindex: 0},
                              on: {
                               click: function () {
                                return e.onOk(i);
                               },
                               keyup: function (t) {
                                13 === t.keyCode && e.onOk(i);
                               },
                              },
                             },
                             [
                              t("div", {staticClass: "q-focus-helper"}),
                              i.icon
                                      ? t(zt, {props: {name: i.icon, color: i.color}})
                                      : n
                                      ? t("img", {attrs: {src: n}, staticClass: i.avatar ? "q-bottom-sheet__avatar" : null})
                                      : t("div", {staticClass: "q-bottom-sheet__empty-icon"}),
                              t("div", [i.label]),
                             ]
                             );
            });
           },
           __getList: function (t) {
            var e = this;
            return this.actions.map(function (i) {
             var n = i.avatar || i.img;
             return void 0 === i.label
                     ? t(Ys, {props: {spaced: !0, dark: e.isDark}})
                     : t(
                             ks,
                             {
                              staticClass: "q-bottom-sheet__item",
                              class: i.classes,
                              props: {tabindex: 0, clickable: !0, dark: e.isDark},
                              on: {
                               click: function () {
                                return e.onOk(i);
                               },
                               keyup: function (t) {
                                13 === t.keyCode && e.onOk(i);
                               },
                              },
                             },
                             [
                              t(qs, {props: {avatar: !0}}, [i.icon ? t(zt, {props: {name: i.icon, color: i.color}}) : n ? t("img", {attrs: {src: n}, staticClass: i.avatar ? "q-bottom-sheet__avatar" : null}) : null]),
                              t(qs, [i.label]),
                             ]
                             );
            });
           },
          },
          render: function (t) {
           var e = this,
                   i = [];
           return (
                   this.title && i.push(t(pi, {staticClass: "q-dialog__title"}, [this.title])),
                   this.message && i.push(t(pi, {staticClass: "q-dialog__message"}, [this.message])),
                   i.push(!0 === this.grid ? t("div", {staticClass: "row items-stretch justify-start"}, this.__getGrid(t)) : t("div", this.__getList(t))),
                   t(
                           ys,
                           {
                            ref: "dialog",
                            props: this.dialogProps,
                            on: mt(this, "hide", {
                             hide: function () {
                              e.$emit("hide");
                             },
                            }),
                           },
                           [t(di, {staticClass: "q-bottom-sheet q-bottom-sheet--" + (!0 === this.grid ? "grid" : "list") + (!0 === this.isDark ? " q-bottom-sheet--dark q-dark" : ""), style: this.cardStyle, class: this.cardClass}, i)]
                           )
                   );
          },
         });
 function tc(t, e) {
  var i = {};
  for (var n in t)
   Object.prototype.hasOwnProperty.call(t, n) && -1 === e.indexOf(n) && (i[n] = t[n]);
  return i;
 }
 var ec = {
  onOk: function () {
   return ec;
  },
  okCancel: function () {
   return ec;
  },
  hide: function () {
   return ec;
  },
  update: function () {
   return ec;
  },
 };
 function ic(e) {
  return function (n) {
   n.className;
   var s = n.class,
           o = n.style,
           r = n.component,
           a = n.root,
           l = n.parent,
           c = tc(n, ["className", "class", "style", "component", "root", "parent"]);
   if (!0 === i)
    return ec;
   void 0 !== s && (c.cardClass = s), void 0 !== o && (c.cardStyle = o);
   var u,
           h,
           d = void 0 !== r;
   !0 === d ? (u = r) : ((u = e), (h = c));
   var p = [],
           f = [],
           m = {
            onOk: function (t) {
             return p.push(t), m;
            },
            onCancel: function (t) {
             return f.push(t), m;
            },
            onDismiss: function (t) {
             return p.push(t), f.push(t), m;
            },
            hide: function () {
             return b.$refs.dialog.hide(), m;
            },
            update: function (t) {
             t.className;
             var e = t.class,
                     i = t.style,
                     n = (t.component, t.root, t.parent, tc(t, ["className", "class", "style", "component", "root", "parent"]));
             return (
                     null !== b &&
                     (void 0 !== e && (n.cardClass = e),
                             void 0 !== i && (n.cardStyle = i),
                             !0 === d
                             ? Object.assign(c, n)
                             : (!(function t(e, i) {
                              for (var n in i)
                               "spinner" !== n && Object(i[n]) === i[n] ? ((e[n] = Object(e[n]) !== e[n] ? {} : Object.assign({}, e[n])), t(e[n], i[n])) : (e[n] = i[n]);
                             })(c, n),
                                     (h = Object.assign({}, c))),
                             b.$forceUpdate()),
                     m
                     );
            },
           },
           v = document.createElement("div");
   document.body.appendChild(v);
   var g = !1,
           _ = {
            ok: function (t) {
             (g = !0),
                     p.forEach(function (e) {
                      e(t);
                     });
            },
            hide: function () {
             b.$destroy(),
                     b.$el.remove(),
                     (b = null),
                     !0 !== g &&
                     f.forEach(function (t) {
                      t();
                     });
            },
           },
           b = new t({
            name: "QGlobalDialog",
            el: v,
            parent: void 0 === l ? a : l,
            render: function (t) {
             return t(u, {ref: "dialog", props: c, attrs: h, on: _});
            },
            mounted: function () {
             var t = this;
             void 0 !== this.$refs.dialog
                     ? this.$refs.dialog.show()
                     : (_["hook:mounted"] = function () {
                      void 0 !== t.$refs.dialog && t.$refs.dialog.show();
                     });
            },
           });
   return m;
  };
 }
 var nc = {
  install: function (t) {
   var e = t.$q;
   this.create = e.bottomSheet = ic(Jl);
  },
 };
 function sc(t) {
  return encodeURIComponent(t);
 }
 function oc(t) {
  return decodeURIComponent(t);
 }
 function rc(t) {
  if ("" === t)
   return t;
  0 === t.indexOf('"') && (t = t.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")), (t = oc(t.replace(/\+/g, " ")));
  try {
   t = JSON.parse(t);
  } catch (t) {
  }
  return t;
 }
 function ac(t) {
  var e = new Date();
  return e.setMilliseconds(e.getMilliseconds() + t), e.toUTCString();
 }
 function lc(t, e, i, n) {
  var s, o, r, a, l, c, u, h;
  void 0 === i && (i = {}),
          void 0 !== i.expires &&
          ("[object Date]" === Object.prototype.toString.call(i.expires)
                  ? (s = i.expires.toUTCString())
                  : "string" == typeof i.expires
                  ? ((r = i.expires),
                          (a = 0),
                          (l = r.match(/(\d+)d/)),
                          (c = r.match(/(\d+)h/)),
                          (u = r.match(/(\d+)m/)),
                          (h = r.match(/(\d+)s/)),
                          l && (a += 864e5 * l[1]),
                          c && (a += 36e5 * c[1]),
                          u && (a += 6e4 * u[1]),
                          h && (a += 1e3 * h[1]),
                          (s = 0 === a ? r : ac(a)))
                  : ((o = parseFloat(i.expires)), (s = !1 === isNaN(o) ? ac(864e5 * o) : i.expires)));
  var d,
          p = sc(t) + "=" + sc((d = e) === Object(d) ? JSON.stringify(d) : "" + d),
          f = [
           p,
           void 0 !== s ? "; Expires=" + s : "",
           i.path ? "; Path=" + i.path : "",
           i.domain ? "; Domain=" + i.domain : "",
           i.sameSite ? "; SameSite=" + i.sameSite : "",
           i.httpOnly ? "; HttpOnly" : "",
           i.secure ? "; Secure" : "",
           i.other ? "; " + i.other : "",
          ].join("");
  if (n) {
   n.req.qCookies ? n.req.qCookies.push(f) : (n.req.qCookies = [f]), n.res.setHeader("Set-Cookie", n.req.qCookies);
   var m = n.req.headers.cookie || "";
   if (void 0 !== s && o < 0) {
    var v = cc(t, n);
    void 0 !== v &&
            (m = m
                    .replace(t + "=" + v + "; ", "")
                    .replace("; " + t + "=" + v, "")
                    .replace(t + "=" + v, ""));
   } else
    m = m ? p + "; " + m : f;
   n.req.headers.cookie = m;
  } else
   document.cookie = f;
 }
 function cc(t, e) {
  for (var i, n, s, o = e ? e.req.headers : document, r = o.cookie ? o.cookie.split("; ") : [], a = r.length, l = t ? null : {}, c = 0; c < a; c++)
   if (((n = oc((i = r[c].split("=")).shift())), (s = i.join("=")), t)) {
    if (t === n) {
     l = rc(s);
     break;
    }
   } else
    l[n] = s;
  return l;
 }
 function uc(t) {
  return {
   get: function (e) {
    return cc(e, t);
   },
   set: function (e, i, n) {
    return lc(e, i, n, t);
   },
   has: function (e) {
    return (function (t, e) {
     return null !== cc(t, e);
    })(e, t);
   },
   remove: function (e, i) {
    return (function (t, e, i) {
     lc(t, "", Object.assign({}, {expires: -1}, e), i);
    })(e, i, t);
   },
   getAll: function () {
    return cc(null, t);
   },
  };
 }
 var hc,
         dc,
         pc,
         fc,
         mc = {
          parseSSR: function (t) {
           return void 0 !== t ? uc(t) : this;
          },
          install: function (t) {
           var e = t.$q,
                   n = t.queues;
           !0 === i
                   ? n.server.push(function (t, e) {
                    t.cookies = uc(e.ssr);
                   })
                   : (Object.assign(this, uc()), (e.cookies = this));
          },
         },
         vc = t.extend({
          name: "DialogPlugin",
          mixins: [It, bt],
          inheritAttrs: !1,
          props: {
           title: String,
           message: String,
           prompt: Object,
           options: Object,
           progress: [Boolean, Object],
           html: Boolean,
           ok: {type: [String, Object, Boolean], default: !0},
           cancel: [String, Object, Boolean],
           focus: {
            type: String,
            default: "ok",
            validator: function (t) {
             return ["ok", "cancel", "none"].includes(t);
            },
           },
           stackButtons: Boolean,
           color: String,
           cardClass: [String, Array, Object],
           cardStyle: [String, Array, Object],
          },
          computed: {
           classes: function () {
            return "q-dialog-plugin" + (!0 === this.isDark ? " q-dialog-plugin--dark q-dark" : "") + (!1 !== this.progress ? " q-dialog-plugin--progress" : "");
           },
           spinner: function () {
            if (!1 !== this.progress)
             return Object(this.progress) === this.progress ? {component: this.progress.spinner || Xt, props: {color: this.progress.color || this.vmColor}} : {component: Xt, props: {color: this.vmColor}};
           },
           hasForm: function () {
            return void 0 !== this.prompt || void 0 !== this.options;
           },
           okLabel: function () {
            return Object(this.ok) === this.ok ? this.$q.lang.label.ok : !0 === this.ok ? this.$q.lang.label.ok : this.ok;
           },
           cancelLabel: function () {
            return Object(this.cancel) === this.cancel ? this.$q.lang.label.cancel : !0 === this.cancel ? this.$q.lang.label.cancel : this.cancel;
           },
           vmColor: function () {
            return this.color || (!0 === this.isDark ? "amber" : "primary");
           },
           okDisabled: function () {
            return void 0 !== this.prompt
                    ? void 0 !== this.prompt.isValid && !0 !== this.prompt.isValid(this.prompt.model)
                    : void 0 !== this.options
                    ? void 0 !== this.options.isValid && !0 !== this.options.isValid(this.options.model)
                    : void 0;
           },
           okProps: function () {
            return Object.assign({}, {color: this.vmColor, label: this.okLabel, ripple: !1}, Object(this.ok) === this.ok ? this.ok : {flat: !0}, {disable: this.okDisabled});
           },
           cancelProps: function () {
            return Object.assign({}, {color: this.vmColor, label: this.cancelLabel, ripple: !1}, Object(this.cancel) === this.cancel ? this.cancel : {flat: !0});
           },
          },
          methods: {
           show: function () {
            this.$refs.dialog.show();
           },
           hide: function () {
            this.$refs.dialog.hide();
           },
           getPrompt: function (t) {
            var e = this;
            return [
             t(Io, {
              props: {
               value: this.prompt.model,
               type: this.prompt.type,
               label: this.prompt.label,
               stackLabel: this.prompt.stackLabel,
               outlined: this.prompt.outlined,
               filled: this.prompt.filled,
               standout: this.prompt.standout,
               rounded: this.prompt.rounded,
               square: this.prompt.square,
               counter: this.prompt.counter,
               maxlength: this.prompt.maxlength,
               prefix: this.prompt.prefix,
               suffix: this.prompt.suffix,
               color: this.vmColor,
               dense: !0,
               autofocus: !0,
               dark: this.isDark,
              },
              attrs: this.prompt.attrs,
              on: mt(this, "prompt", {
               input: function (t) {
                e.prompt.model = t;
               },
               keyup: function (t) {
                !0 !== e.okDisabled && "textarea" !== e.prompt.type && !0 === tt(t, 13) && e.onOk();
               },
              }),
             }),
            ];
           },
           getOptions: function (t) {
            var e = this;
            return [
             t(er, {
              props: {value: this.options.model, type: this.options.type, color: this.vmColor, inline: this.options.inline, options: this.options.items, dark: this.isDark},
              on: mt(this, "opts", {
               input: function (t) {
                e.options.model = t;
               },
              }),
             }),
            ];
           },
           getButtons: function (t) {
            var e = [];
            if (
                    (this.cancel && e.push(t(ye, {props: this.cancelProps, attrs: {"data-autofocus": "cancel" === this.focus && !0 !== this.hasForm}, on: mt(this, "cancel", {click: this.onCancel})})),
                            this.ok && e.push(t(ye, {props: this.okProps, attrs: {"data-autofocus": "ok" === this.focus && !0 !== this.hasForm}, on: mt(this, "ok", {click: this.onOk})})),
                            e.length > 0)
                    )
             return t(fi, {staticClass: !0 === this.stackButtons ? "items-end" : null, props: {vertical: this.stackButtons, align: "right"}}, e);
           },
           onOk: function () {
            this.$emit("ok", ur(this.getData())), this.hide();
           },
           onCancel: function () {
            this.hide();
           },
           getData: function () {
            return void 0 !== this.prompt ? this.prompt.model : void 0 !== this.options ? this.options.model : void 0;
           },
           getSection: function (t, e, i) {
            return !0 === this.html ? t(pi, {staticClass: e, domProps: {innerHTML: i}}) : t(pi, {staticClass: e}, [i]);
           },
          },
          render: function (t) {
           var e = this,
                   i = [];
           return (
                   this.title && i.push(this.getSection(t, "q-dialog__title", this.title)),
                   !1 !== this.progress && i.push(t(pi, {staticClass: "q-dialog__progress"}, [t(this.spinner.component, {props: this.spinner.props})])),
                   this.message && i.push(this.getSection(t, "q-dialog__message", this.message)),
                   void 0 !== this.prompt
                   ? i.push(t(pi, {staticClass: "scroll q-dialog-plugin__form"}, this.getPrompt(t)))
                   : void 0 !== this.options && i.push(t(Ys, {props: {dark: this.isDark}}), t(pi, {staticClass: "scroll q-dialog-plugin__form"}, this.getOptions(t)), t(Ys, {props: {dark: this.isDark}})),
                   (this.ok || this.cancel) && i.push(this.getButtons(t)),
                   t(
                           ys,
                           {
                            ref: "dialog",
                            props: Object.assign({}, this.qAttrs, {value: this.value}),
                            on: mt(this, "hide", {
                             hide: function () {
                              e.$emit("hide");
                             },
                            }),
                           },
                           [t(di, {staticClass: this.classes, style: this.cardStyle, class: this.cardClass, props: {dark: this.isDark}}, i)]
                           )
                   );
          },
         }),
         gc = {
          install: function (t) {
           var e = t.$q;
           this.create = e.dialog = ic(vc);
          },
         },
         _c = {
          isActive: !1,
          start: f,
          stop: f,
          increment: f,
          setDefaults: f,
          install: function (e) {
           var n = this,
                   s = e.$q,
                   o = e.cfg;
           if (!0 !== i) {
            var r = void 0 !== o.loadingBar ? Object.assign({}, o.loadingBar) : {},
                    a = (s.loadingBar = new t({
                     name: "LoadingBar",
                     render: function (t) {
                      return t(kt, {ref: "bar", props: r});
                     },
                    }).$mount().$refs.bar);
            Object.assign(this, {
             start: function (t) {
              a.start(t), (n.isActive = a.isActive = a.calls > 0);
             },
             stop: function () {
              a.stop(), (n.isActive = a.isActive = a.calls > 0);
             },
             increment: a.increment,
             setDefaults: function (t) {
              t === Object(t) && Object.assign(r, t), a.$parent.$forceUpdate();
             },
            }),
                    t.util.defineReactive(this, "isActive", this.isActive),
                    t.util.defineReactive(a, "isActive", this.isActive),
                    (a.setDefaults = this.setDefaults),
                    document.body.appendChild(a.$parent.$el);
           } else
            s.loadingBar = this;
          },
         },
         bc = 0,
         yc = {},
         wc = {delay: 0, message: !1, spinnerSize: 80, spinnerColor: "white", messageColor: "white", backgroundColor: "black", spinner: Xt, customClass: ""},
         Sc = Object.assign({}, wc),
         xc = {
          isActive: !1,
          show: function (e) {
           var n = this;
           if (!0 !== i) {
            if ((((yc = e === Object(e) && !0 === e.ignoreDefaults ? Object.assign({}, wc, e) : Object.assign({}, Sc, e)).customClass += " text-" + yc.backgroundColor), (this.isActive = !0), void 0 !== hc))
             return (yc.uid = bc), void hc.$forceUpdate();
            (yc.uid = ++bc),
                    clearTimeout(dc),
                    (dc = setTimeout(function () {
                     dc = void 0;
                     var e = document.createElement("div");
                     document.body.appendChild(e),
                             (hc = new t({
                              name: "QLoading",
                              el: e,
                              mounted: function () {
                               ms(!0);
                              },
                              render: function (t) {
                               var e;
                               return t(
                                       "transition",
                                       {
                                        props: {name: "q-transition--fade", appear: !0},
                                        on: mt(n, "tr", {
                                         "after-leave": function () {
                                          !0 !== n.isActive && void 0 !== hc && (ms(!1), hc.$destroy(), hc.$el.remove(), (hc = void 0));
                                         },
                                        }),
                                       },
                                       [
                                        !0 === n.isActive
                                                ? t("div", {staticClass: "q-loading fullscreen column flex-center z-max", key: yc.uid, class: yc.customClass.trim()}, [
                                                 t(yc.spinner, {props: {color: yc.spinnerColor, size: yc.spinnerSize}}),
                                                 (yc.message && t("div", {class: "text-" + yc.messageColor, domProps: ((e = {}), (e[!0 === yc.sanitize ? "textContent" : "innerHTML"] = yc.message), e)})) || void 0,
                                                ])
                                                : null,
                                       ]
                                       );
                              },
                             }));
                    }, yc.delay));
           }
          },
          hide: function () {
           !0 === this.isActive && (void 0 !== dc && (clearTimeout(dc), (dc = void 0)), (this.isActive = !1));
          },
          setDefaults: function (t) {
           t === Object(t) && Object.assign(Sc, t);
          },
          install: function (t) {
           var e = t.$q,
                   i = t.cfg.loading;
           this.setDefaults(i), (e.loading = this);
          },
         };
 function Cc(t) {
  t.title && ((t.title = t.titleTemplate ? t.titleTemplate(t.title) : t.title), delete t.titleTemplate),
          [
           ["meta", "content"],
           ["link", "href"],
          ].forEach(function (e) {
   var i = t[e[0]],
           n = e[1];
   for (var s in i) {
    var o = i[s];
    o.template && (1 === Object.keys(o).length ? delete i[s] : ((o[n] = o.template(o[n] || "")), delete o.template));
   }
  });
 }
 function kc(t, e) {
  if (Object.keys(t).length !== Object.keys(e).length)
   return !0;
  for (var i in t)
   if (t[i] !== e[i])
    return !0;
 }
 function qc(t) {
  return !1 === ["class", "style"].includes(t);
 }
 function Tc(t) {
  return !1 === ["lang", "dir"].includes(t);
 }
 function Mc(t, e) {
  !0 !== t._inactive &&
          ((!0 === Ec(t) && (Fs(!0, e, t.__qMeta), !0 === t.$options.meta.stopPropagation)) ||
                  t.$children.forEach(function (t) {
                   Mc(t, e);
                  }));
 }
 function $c() {
  !0 === fc && ((fc = !1), (this.$root.__currentMeta = window.__Q_META__));
  var t,
          e,
          i,
          n = {title: "", titleTemplate: null, meta: {}, link: {}, script: {}, htmlAttr: {}, bodyAttr: {}};
  Mc(this.$root, n),
          Cc(n),
          (t = (function (t, e) {
           var i = {},
                   n = {};
           return void 0 === t
                   ? {add: e, remove: n}
           : (t.title !== e.title && (i.title = e.title),
                   ["meta", "link", "script", "htmlAttr", "bodyAttr"].forEach(function (s) {
            var o = t[s],
                    r = e[s];
            if (((n[s] = []), void 0 !== o && null !== o)) {
             for (var a in ((i[s] = {}), o))
              !1 === r.hasOwnProperty(a) && n[s].push(a);
             for (var l in r)
              !1 === o.hasOwnProperty(l) ? (i[s][l] = r[l]) : !0 === kc(o[l], r[l]) && (n[s].push(l), (i[s][l] = r[l]));
            } else
             i[s] = r;
           }),
                   {add: i, remove: n});
          })(this.$root.__currentMeta, n)),
          (e = t.add),
          (i = t.remove),
          e.title && (document.title = e.title),
          Object.keys(i).length > 0 &&
          (["meta", "link", "script"].forEach(function (t) {
           i[t].forEach(function (e) {
            document.head.querySelector(t + '[data-qmeta="' + e + '"]').remove();
           });
          }),
                  i.htmlAttr.filter(Tc).forEach(function (t) {
           document.documentElement.removeAttribute(t);
          }),
                  i.bodyAttr.filter(qc).forEach(function (t) {
           document.body.removeAttribute(t);
          })),
          ["meta", "link", "script"].forEach(function (t) {
   var i = e[t];
   for (var n in i) {
    var s = document.createElement(t);
    for (var o in i[n])
     "innerHTML" !== o && s.setAttribute(o, i[n][o]);
    s.setAttribute("data-qmeta", n), "script" === t && (s.innerHTML = i[n].innerHTML || ""), document.head.appendChild(s);
   }
  }),
          Object.keys(e.htmlAttr)
          .filter(Tc)
          .forEach(function (t) {
           document.documentElement.setAttribute(t, e.htmlAttr[t] || "");
          }),
          Object.keys(e.bodyAttr)
          .filter(qc)
          .forEach(function (t) {
           document.body.setAttribute(t, e.bodyAttr[t] || "");
          }),
          (this.$root.__currentMeta = n);
 }
 function Lc(t) {
  return function (e) {
   var i = t[e];
   return e + (void 0 !== i ? '="' + i + '"' : "");
  };
 }
 function Oc(t, e, i) {
  var n = {title: "", titleTemplate: null, meta: {}, link: {}, htmlAttr: {}, bodyAttr: {}, noscript: {}};
  Mc(t, n), Cc(n);
  var s = void 0 !== i && void 0 !== i.nonce ? ' nonce="' + i.nonce + '"' : "",
          o = {
           "%%Q_HTML_ATTRS%%": Object.keys(n.htmlAttr).filter(Tc).map(Lc(n.htmlAttr)).join(" "),
           "%%Q_HEAD_TAGS%%": (function (t) {
            var e = "";
            return (
                    t.title && (e += "<title>" + t.title + "</title>"),
                    ["meta", "link", "script"].forEach(function (i) {
             var n = t[i];
             for (var s in n) {
              var o = Object.keys(n[s])
                      .filter(function (t) {
                       return "innerHTML" !== t;
                      })
                      .map(Lc(n[s]));
              (e += "<" + i + " " + o.join(" ") + ' data-qmeta="' + s + '">'), "script" === i && (e += (n[s].innerHTML || "") + "</script>");
             }
            }),
                    e
                    );
           })(n),
           "%%Q_BODY_ATTRS%%": Object.keys(n.bodyAttr).filter(qc).map(Lc(n.bodyAttr)).join(" "),
           "%%Q_BODY_TAGS%%":
                   Object.keys(n.noscript)
                   .map(function (t) {
                    return '<noscript data-qmeta="' + t + '">' + n.noscript[t] + "</noscript>";
                   })
                   .join("") +
                   "<script" +
                   s +
                   ">window.__Q_META__=" +
                   (delete n.noscript && JSON.stringify(n)) +
                   "</script>",
          };
  return (
          Object.keys(o).forEach(function (t) {
   e = e.replace(t, o[t]);
  }),
          e
          );
 }
 function Bc() {
  "function" == typeof this.$options.meta ? (void 0 === this.$options.computed && (this.$options.computed = {}), (this.$options.computed.__qMeta = this.$options.meta)) : !0 === Ec(this) && (this.__qMeta = this.$options.meta);
 }
 function Ec(t) {
  return void 0 !== t.$options.meta && null !== t.$options.meta;
 }
 function Pc() {
  !0 === Ec(this) && this.__qMetaUpdate();
 }
 !1 === i && t.util.defineReactive(xc, "isActive", xc.isActive);
 var zc = {
  install: function (e) {
   var s = e.queues;
   !0 === i
           ? ((t.prototype.$getMetaHTML = function (t) {
            return function (e, i) {
             return Oc(t, e, i);
            };
           }),
                   t.mixin({beforeCreate: Bc}),
                   s.server.push(function (t, e) {
                    (e.ssr.Q_HTML_ATTRS += " %%Q_HTML_ATTRS%%"), Object.assign(e.ssr, {Q_HEAD_TAGS: "%%Q_HEAD_TAGS%%", Q_BODY_ATTRS: "%%Q_BODY_ATTRS%%", Q_BODY_TAGS: "%%Q_BODY_TAGS%%"});
                   }))
           : ((fc = n),
                   t.mixin({
                    beforeCreate: Bc,
                    created: function () {
                     !0 === Ec(this) && (this.__qMetaUnwatch = this.$watch("__qMeta", this.__qMetaUpdate));
                    },
                    activated: Pc,
                    deactivated: Pc,
                    beforeMount: Pc,
                    destroyed: function () {
                     !0 === Ec(this) && (this.__qMetaUnwatch(), this.__qMetaUpdate());
                    },
                    methods: {
                     __qMetaUpdate: function () {
                      clearTimeout(pc), (pc = setTimeout($c.bind(this), 50));
                     },
                    },
                   }));
  },
 };
 var Ac = 0,
         Dc = {},
         Ic = ["top-left", "top-right", "bottom-left", "bottom-right", "top", "bottom", "left", "right", "center"],
         Rc = ["top-left", "top-right", "bottom-left", "bottom-right"],
         Fc = {
          positive: {
           icon: function () {
            return this.$q.iconSet.type.positive;
           },
           color: "positive",
          },
          negative: {
           icon: function () {
            return this.$q.iconSet.type.negative;
           },
           color: "negative",
          },
          warning: {
           icon: function () {
            return this.$q.iconSet.type.warning;
           },
           color: "warning",
           textColor: "dark",
          },
          info: {
           icon: function () {
            return this.$q.iconSet.type.info;
           },
           color: "info",
          },
          ongoing: {group: !1, timeout: 0, spinner: !0, color: "grey-8"},
         },
         jc = {},
         Vc = {};
 function Nc(t, e) {
  return console.error("Notify: " + t, e), !1;
 }
 var Hc = {
  name: "QNotifications",
  created: function () {
   var t = this;
   (this.notifs = {}),
           Ic.forEach(function (e) {
            t.notifs[e] = [];
            var i = !0 === ["left", "center", "right"].includes(e) ? "center" : e.indexOf("top") > -1 ? "top" : "bottom",
                    n = e.indexOf("left") > -1 ? "start" : e.indexOf("right") > -1 ? "end" : "center",
                    s = ["left", "right"].includes(e) ? "items-" + ("left" === e ? "start" : "end") + " justify-center" : "center" === e ? "flex-center" : "items-" + n;
            Vc[e] = "q-notifications__list q-notifications__list--" + i + " fixed column no-wrap " + s;
           });
  },
  methods: {
   add: function (t, e) {
    var i,
            n = this;
    if (!t)
     return Nc("parameter required");
    var s = {textColor: "white"};
    if (
            (!0 !== t.ignoreDefaults && Object.assign(s, Dc),
                    Object(t) !== t && (s.type && Object.assign(s, Fc[s.type]), (t = {message: t})),
                    Object.assign(s, Fc[t.type || s.type], t),
                    "function" == typeof s.icon && (s.icon = s.icon.call(this)),
                    void 0 === s.spinner ? (s.spinner = !1) : !0 === s.spinner && (s.spinner = Xt),
                    (s.meta = {hasMedia: Boolean(!1 !== s.spinner || s.icon || s.avatar)}),
                    s.position)
            ) {
     if (!1 === Ic.includes(s.position))
      return Nc("wrong position", t);
    } else
     s.position = "bottom";
    if (void 0 === s.timeout)
     s.timeout = 5e3;
    else {
     var o = parseInt(s.timeout, 10);
     if (isNaN(o) || o < 0)
      return Nc("wrong timeout", t);
     s.timeout = o;
    }
    0 === s.timeout ? (s.progress = !1) : !0 === s.progress && (s.meta.progressStyle = {animationDuration: s.timeout + 1e3 + "ms"});
    var r = (!0 === Array.isArray(t.actions) ? t.actions : [])
            .concat(!0 !== t.ignoreDefaults && !0 === Array.isArray(Dc.actions) ? Dc.actions : [])
            .concat(void 0 !== Fc[t.type] && !0 === Array.isArray(Fc[t.type].actions) ? Fc[t.type].actions : []);
    if (
            (s.closeBtn && r.push({label: "string" == typeof s.closeBtn ? s.closeBtn : this.$q.lang.label.close}),
                    (s.actions = r.map(function (t) {
                     var e = t.handler,
                             i = t.noDismiss,
                             n = t.style,
                             s = t.class,
                             o = t.attrs,
                             r = (function (t, e) {
                              var i = {};
                              for (var n in t)
                               Object.prototype.hasOwnProperty.call(t, n) && -1 === e.indexOf(n) && (i[n] = t[n]);
                              return i;
                             })(t, ["handler", "noDismiss", "style", "class", "attrs"]);
                     return {
                      staticClass: s,
                      style: n,
                      props: Object.assign({}, {flat: !0}, r),
                      attrs: o,
                      on: {
                       click:
                               "function" == typeof e
                               ? function () {
                                e(), !0 !== i && h();
                               }
                       : function () {
                        h();
                       },
                      },
                     };
                    })),
                    void 0 === s.multiLine && (s.multiLine = s.actions.length > 1),
                    Object.assign(s.meta, {
                     staticClass:
                             "q-notification row items-stretch q-notification--" +
                             (!0 === s.multiLine ? "multi-line" : "standard") +
                             (void 0 !== s.color ? " bg-" + s.color : "") +
                             (void 0 !== s.textColor ? " text-" + s.textColor : "") +
                             (void 0 !== s.classes ? " " + s.classes : ""),
                     wrapperClass: "q-notification__wrapper col relative-position border-radius-inherit " + (!0 === s.multiLine ? "column no-wrap justify-center" : "row items-center"),
                     contentClass: "q-notification__content row items-center" + (!0 === s.multiLine ? "" : " col"),
                     attrs: Object.assign({}, {role: "alert"}, s.attrs),
                    }),
                    !1 === s.group
                    ? ((s.group = void 0), (s.meta.group = void 0))
                    : ((void 0 !== s.group && !0 !== s.group) ||
                            (s.group = [s.message, s.caption, s.multiline]
                                    .concat(
                                            s.actions.map(function (t) {
                                             return t.props.label + "*" + t.props.icon;
                                            })
                                            )
                                    .join("|")),
                            (s.meta.group = s.group + "|" + s.position)),
                    0 === s.actions.length
                    ? (s.actions = void 0)
                    : (s.meta.actionsClass = "q-notification__actions row items-center " + (!0 === s.multiLine ? "justify-end" : "col-auto") + (!0 === s.meta.hasMedia ? " q-notification__actions--with-media" : "")),
                    void 0 !== e)
            ) {
     clearTimeout(e.notif.meta.timer), (s.meta.uid = e.notif.meta.uid);
     var a = this.notifs[s.position].indexOf(e.notif);
     this.notifs[s.position][a] = s;
    } else {
     var l = jc[s.meta.group];
     if (void 0 === l) {
      if (((s.meta.uid = Ac++), (s.meta.badge = 1), -1 !== ["left", "right", "center"].indexOf(s.position)))
       this.notifs[s.position].splice(Math.floor(this.notifs[s.position].length / 2), 0, s);
      else {
       var c = s.position.indexOf("top") > -1 ? "unshift" : "push";
       this.notifs[s.position][c](s);
      }
      void 0 !== s.group && (jc[s.meta.group] = s);
     } else {
      if ((clearTimeout(l.meta.timer), void 0 !== s.badgePosition)) {
       if (!1 === Rc.includes(s.badgePosition))
        return Nc("wrong badgePosition", t);
      } else
       s.badgePosition = "top-" + (s.position.indexOf("left") > -1 ? "right" : "left");
      (s.meta.uid = l.meta.uid),
              (s.meta.badge = l.meta.badge + 1),
              (s.meta.badgeStaticClass =
                      "q-notification__badge q-notification__badge--" + s.badgePosition + (void 0 !== s.badgeColor ? " bg-" + s.badgeColor : "") + (void 0 !== s.badgeTextColor ? " text-" + s.badgeTextColor : ""));
      var u = this.notifs[s.position].indexOf(l);
      this.notifs[s.position][u] = jc[s.meta.group] = s;
     }
    }
    var h = function () {
     n.remove(s), (i = void 0);
    };
    return (
            this.$forceUpdate(),
            s.timeout > 0 &&
            (s.meta.timer = setTimeout(function () {
             h();
            }, s.timeout + 1e3)),
            void 0 !== s.group
            ? function (e) {
             void 0 !== e ? Nc("trying to update a grouped one which is forbidden", t) : h();
            }
    : ((i = {dismiss: h, config: t, notif: s}),
            void 0 === e
            ? function (t) {
             if (void 0 !== i)
              if (void 0 === t)
               i.dismiss();
              else {
               var e = Object.assign({}, i.config, t, {group: !1, position: s.position});
               n.add(e, i);
              }
            }
    : void Object.assign(e, i))
            );
   },
   remove: function (t) {
    clearTimeout(t.meta.timer);
    var e = this.notifs[t.position].indexOf(t);
    if (-1 !== e) {
     void 0 !== t.group && delete jc[t.meta.group];
     var i = this.$refs["notif_" + t.meta.uid];
     if (i) {
      var n = getComputedStyle(i),
              s = n.width,
              o = n.height;
      (i.style.left = i.offsetLeft + "px"), (i.style.width = s), (i.style.height = o);
     }
     this.notifs[t.position].splice(e, 1), this.$forceUpdate(), "function" == typeof t.onDismiss && t.onDismiss();
    }
   },
  },
  render: function (t) {
   var e = this;
   return t(
           "div",
           {staticClass: "q-notifications"},
           Ic.map(function (i) {
            return t(
                    "transition-group",
                    {key: i, staticClass: Vc[i], tag: "div", props: {name: "q-notification--" + i, mode: "out-in"}},
                    e.notifs[i].map(function (e) {
             var i,
                     n = e.meta,
                     s = {staticClass: "q-notification__message col"};
             if (!0 === e.html)
              s.domProps = {innerHTML: e.caption ? "<div>" + e.message + '</div><div class="q-notification__caption">' + e.caption + "</div>" : e.message};
             else {
              var o = [e.message];
              i = e.caption ? [t("div", o), t("div", {staticClass: "q-notification__caption"}, [e.caption])] : o;
             }
             var r = [];
             !0 === n.hasMedia &&
                     (!1 !== e.spinner
                             ? r.push(t(e.spinner, {staticClass: "q-notification__spinner"}))
                             : e.icon
                             ? r.push(t(zt, {staticClass: "q-notification__icon", attrs: {role: "img"}, props: {name: e.icon}}))
                             : e.avatar && r.push(t(At, {staticClass: "q-notification__avatar"}, [t("img", {attrs: {src: e.avatar, "aria-hidden": "true"}})]))),
                     r.push(t("div", s, i));
             var a = [t("div", {staticClass: n.contentClass}, r)];
             return (
                     !0 === e.progress && a.push(t("div", {key: n.uid + "|p|" + n.badge, staticClass: "q-notification__progress", style: n.progressStyle, class: e.progressClass})),
                     void 0 !== e.actions &&
                     a.push(
                             t(
                                     "div",
                                     {staticClass: n.actionsClass},
                                     e.actions.map(function (e) {
                                      return t(ye, Object.assign({}, e));
                                     })
                                     )
                             ),
                     n.badge > 1 && a.push(t("div", {key: n.uid + "|" + n.badge, staticClass: n.badgeStaticClass, style: e.badgeStyle, class: e.badgeClass}, [n.badge])),
                     t("div", {ref: "notif_" + n.uid, key: n.uid, staticClass: n.staticClass, attrs: n.attrs}, [t("div", {staticClass: n.wrapperClass}, a)])
                     );
            })
                    );
           })
           );
  },
  mounted: function () {
   var t = this;
   if (void 0 !== this.$q.fullscreen && !0 === this.$q.fullscreen.isCapable) {
    var e = function (e) {
     var i = te(e, t.$q.fullscreen.activeEl);
     t.$el.parentElement !== i && i.appendChild(t.$el);
    };
    (this.unwatchFullscreen = this.$watch("$q.fullscreen.isActive", e)), !0 === this.$q.fullscreen.isActive && e(!0);
   }
  },
  beforeDestroy: function () {
   void 0 !== this.unwatchFullscreen && this.unwatchFullscreen();
  },
 },
         Qc = {
          create: function (t) {
           return !0 === i ? f : this.__vm.add(t);
          },
          setDefaults: function (t) {
           t === Object(t) && Object.assign(Dc, t);
          },
          registerType: function (t, e) {
           !0 !== i && e === Object(e) && (Fc[t] = e);
          },
          install: function (e) {
           var n = e.cfg,
                   s = e.$q;
           if (!0 === i)
            return (s.notify = f), void (s.notify.setDefaults = f);
           this.setDefaults(n.notify), (s.notify = this.create.bind(this)), (s.notify.setDefaults = this.setDefaults), (s.notify.registerType = this.registerType);
           var o = document.createElement("div");
           document.body.appendChild(o), (this.__vm = new t(Hc)), this.__vm.$mount(o);
          },
         };
 function Wc() {
  var t = function () {
   return null;
  };
  return {
   has: function () {
    return !1;
   },
   getLength: function () {
    return 0;
   },
   getItem: t,
   getIndex: t,
   getKey: t,
   getAll: function () {},
   getAllKeys: function () {
    return [];
   },
   set: f,
   remove: f,
   clear: f,
   isEmpty: function () {
    return !0;
   },
  };
 }
 function Yc(t) {
  var e = window[t + "Storage"],
          i = function (t) {
           var i = e.getItem(t);
           return i
                   ? (function (t) {
                    if (t.length < 9)
                     return t;
                    var e = t.substr(0, 8),
                            i = t.substring(9);
                    switch (e) {
                     case "__q_date":
                      return new Date(i);
                     case "__q_expr":
                      return new RegExp(i);
                     case "__q_numb":
                      return Number(i);
                     case "__q_bool":
                      return Boolean("1" === i);
                     case "__q_strn":
                      return "" + i;
                     case "__q_objt":
                      return JSON.parse(i);
                     default:
                      return t;
                    }
                   })(i)
                   : null;
          };
  return {
   has: function (t) {
    return null !== e.getItem(t);
   },
   getLength: function () {
    return e.length;
   },
   getItem: i,
   getIndex: function (t) {
    return t < e.length ? i(e.key(t)) : null;
   },
   getKey: function (t) {
    return t < e.length ? e.key(t) : null;
   },
   getAll: function () {
    for (var t, n = {}, s = e.length, o = 0; o < s; o++)
     n[(t = e.key(o))] = i(t);
    return n;
   },
   getAllKeys: function () {
    for (var t = [], i = e.length, n = 0; n < i; n++)
     t.push(e.key(n));
    return t;
   },
   set: function (t, i) {
    e.setItem(
            t,
            (function (t) {
             return "[object Date]" === Object.prototype.toString.call(t)
                     ? "__q_date|" + t.toUTCString()
                     : "[object RegExp]" === Object.prototype.toString.call(t)
                     ? "__q_expr|" + t.source
                     : "number" == typeof t
                     ? "__q_numb|" + t
                     : "boolean" == typeof t
                     ? "__q_bool|" + (t ? "1" : "0")
                     : "string" == typeof t
                     ? "__q_strn|" + t
                     : "function" == typeof t
                     ? "__q_strn|" + t.toString()
                     : t === Object(t)
                     ? "__q_objt|" + JSON.stringify(t)
                     : t;
            })(i)
            );
   },
   remove: function (t) {
    e.removeItem(t);
   },
   clear: function () {
    e.clear();
   },
   isEmpty: function () {
    return 0 === e.length;
   },
  };
 }
 var Uc = {
  install: function (t) {
   var e = t.$q,
           n = !0 === i || !1 === u.has.webStorage ? Wc() : Yc("local");
   (e.localStorage = n), Object.assign(this, n);
  },
 },
         Kc = {
          install: function (t) {
           var e = t.$q,
                   n = !0 === i || !1 === u.has.webStorage ? Wc() : Yc("session");
           (e.sessionStorage = n), Object.assign(this, n);
          },
         },
         Xc = Object.freeze({
          __proto__: null,
          AddressbarColor: Ul,
          AppFullscreen: Gl,
          AppVisibility: Zl,
          BottomSheet: nc,
          Cookies: mc,
          Dark: B,
          Dialog: gc,
          LoadingBar: _c,
          Loading: xc,
          Meta: zc,
          Notify: Qc,
          Platform: h,
          Screen: O,
          LocalStorage: Uc,
          SessionStorage: Kc,
         });
 function Gc(t) {
  setTimeout(function () {
   window.URL.revokeObjectURL(t.href);
  }, 1e4),
          t.remove();
 }
 function Zc(e, i, n) {
  var s = window.open;
  if (!0 === h.is.cordova) {
   if (void 0 !== cordova && void 0 !== cordova.InAppBrowser && void 0 !== cordova.InAppBrowser.open)
    s = cordova.InAppBrowser.open;
   else if (void 0 !== navigator && void 0 !== navigator.app)
    return navigator.app.loadUrl(e, {openExternal: !0});
  } else if (void 0 !== t.prototype.$q.electron)
   return t.prototype.$q.electron.shell.openExternal(e);
  var o,
          r,
          a,
          l = s(
                  e,
                  "_blank",
                  ((o = n),
                          (r = Object.assign({noopener: !0}, o)),
                          (a = []),
                          Object.keys(r).forEach(function (t) {
                   !0 === r[t] && a.push(t);
                  }),
                          a.join(","))
                  );
  if (l)
   return h.is.desktop && l.focus(), l;
  i && i();
 }
 var Jc = Object.freeze({
  __proto__: null,
  clone: ur,
  colors: X,
  copyToClipboard: function (t) {
   return void 0 !== navigator.clipboard
           ? navigator.clipboard.writeText(t)
           : new Promise(function (e, i) {
            var n = (function (t) {
             var e = document.createElement("textarea");
             (e.value = t), (e.contentEditable = !0), (e.style.position = "fixed"), document.body.appendChild(e), e.focus(), e.select();
             var i = document.execCommand("copy");
             return e.remove(), i;
            })(t);
            n ? e(!0) : i(n);
           });
  },
  date: ns,
  debounce: M,
  dom: ee,
  event: T,
  exportFile: function (t, e, i) {
   var n = new Blob([e], {type: i || "text/plain"});
   if (window.navigator.msSaveOrOpenBlob)
    return window.navigator.msSaveOrOpenBlob(n, t);
   var s = document.createElement("a");
   (s.download = t), (s.href = window.URL.createObjectURL(n)), s.classList.add("hidden"), (s.style.position = "fixed"), document.body.appendChild(s);
   try {
    return s.click(), Gc(s), !0;
   } catch (t) {
    return Gc(s), t;
   }
  },
  extend: Fs,
  format: ft,
  frameDebounce: ar,
  noop: f,
  openURL: function (t, e, i) {
   if (!0 !== h.is.ios || void 0 === window.SafariViewController)
    return Zc(t, e, i);
   window.SafariViewController.isAvailable(function (n) {
    n ? window.SafariViewController.show({url: t}, f, e) : Zc(t, e, i);
   });
  },
  morph: bl,
  patterns: Wi,
  scroll: Ze,
  throttle: ie,
  uid: ho,
 });
 return (
         t.use(
                 {
                  install: function (t, e) {
                   if ((void 0 === e && (e = {}), !0 !== this.__qInstalled)) {
                    this.__qInstalled = !0;
                    var n = (at.config = Object.freeze(e.config || {}));
                    if (
                            (h.install(at, rt),
                                    it.install(rt, n),
                                    B.install(at, rt, n),
                                    O.install(at, rt, n),
                                    A.install(n),
                                    R.install(at, rt, e.lang),
                                    st.install(at, rt, e.iconSet),
                                    !0 === i
                                    ? t.mixin({
                                     beforeCreate: function () {
                                      this.$q = this.$root.$options.$q;
                                     },
                                    })
                                    : (t.prototype.$q = at),
                                    e.components &&
                                    Object.keys(e.components).forEach(function (i) {
                             var n = e.components[i];
                             "function" == typeof n && t.component(n.options.name, n);
                            }),
                                    e.directives &&
                                    Object.keys(e.directives).forEach(function (i) {
                             var n = e.directives[i];
                             void 0 !== n.name && void 0 !== n.unbind && t.directive(n.name, n);
                            }),
                                    e.plugins)
                            ) {
                     var s = {$q: at, queues: rt, cfg: n};
                     Object.keys(e.plugins).forEach(function (t) {
                      var i = e.plugins[t];
                      "function" == typeof i.install && !1 === ot.includes(i) && i.install(s);
                     });
                    }
                   }
                  },
                 },
                 {components: tl, directives: Wl, plugins: Xc, config: window.quasarConfig || {}}
         ),
         Object.assign({}, {version: "1.15.8", lang: R, iconSet: st, components: tl, directives: Wl, plugins: Xc, utils: Jc}, tl, Wl, Xc, Jc)
         );
});
