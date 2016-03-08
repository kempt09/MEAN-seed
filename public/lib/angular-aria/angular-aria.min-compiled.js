/*
 AngularJS v1.5.0
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function (s, q, t) {
  'use strict';
  var f = "BUTTON A INPUT TEXTAREA SELECT DETAILS SUMMARY".split(" "),
      l = function (a, c) {
    if (-1 !== c.indexOf(a[0].nodeName)) return !0;
  };q.module("ngAria", ["ng"]).provider("$aria", function () {
    function a(a, h, p, n) {
      return function (d, e, b) {
        var g = b.$normalize(h);!c[g] || l(e, p) || b[g] || d.$watch(b[a], function (b) {
          b = n ? !b : !!b;e.attr(h, b);
        });
      };
    }var c = { ariaHidden: !0, ariaChecked: !0, ariaDisabled: !0, ariaRequired: !0, ariaInvalid: !0, ariaValue: !0, tabindex: !0, bindKeypress: !0, bindRoleForClick: !0 };this.config = function (a) {
      c = q.extend(c, a);
    };this.$get = function () {
      return { config: function (a) {
          return c[a];
        }, $$watchExpr: a };
    };
  }).directive("ngShow", ["$aria", function (a) {
    return a.$$watchExpr("ngShow", "aria-hidden", [], !0);
  }]).directive("ngHide", ["$aria", function (a) {
    return a.$$watchExpr("ngHide", "aria-hidden", [], !1);
  }]).directive("ngValue", ["$aria", function (a) {
    return a.$$watchExpr("ngValue", "aria-checked", f, !1);
  }]).directive("ngChecked", ["$aria", function (a) {
    return a.$$watchExpr("ngChecked", "aria-checked", f, !1);
  }]).directive("ngRequired", ["$aria", function (a) {
    return a.$$watchExpr("ngRequired", "aria-required", f, !1);
  }]).directive("ngModel", ["$aria", function (a) {
    function c(c, n, d, e) {
      return a.config(n) && !d.attr(c) && (e || !l(d, f));
    }function m(a, c) {
      return !c.attr("role") && c.attr("type") === a && "INPUT" !== c[0].nodeName;
    }function h(a, c) {
      var d = a.type,
          e = a.role;return "checkbox" === (d || e) || "menuitemcheckbox" === e ? "checkbox" : "radio" === (d || e) || "menuitemradio" === e ? "radio" : "range" === d || "progressbar" === e || "slider" === e ? "range" : "";
    }return { restrict: "A", require: "ngModel",
      priority: 200, compile: function (f, n) {
        var d = h(n, f);return { pre: function (a, b, c, k) {
            "checkbox" === d && (k.$isEmpty = function (a) {
              return !1 === a;
            });
          }, post: function (e, b, g, k) {
            function f() {
              return k.$modelValue;
            }function h(a) {
              b.attr("aria-checked", g.value == k.$viewValue);
            }function n() {
              b.attr("aria-checked", !k.$isEmpty(k.$viewValue));
            }var l = c("tabindex", "tabindex", b, !1);switch (d) {case "radio":case "checkbox":
                m(d, b) && b.attr("role", d);c("aria-checked", "ariaChecked", b, !1) && e.$watch(f, "radio" === d ? h : n);l && b.attr("tabindex", 0);
                break;case "range":
                m(d, b) && b.attr("role", "slider");if (a.config("ariaValue")) {
                  var p = !b.attr("aria-valuemin") && (g.hasOwnProperty("min") || g.hasOwnProperty("ngMin")),
                      q = !b.attr("aria-valuemax") && (g.hasOwnProperty("max") || g.hasOwnProperty("ngMax")),
                      r = !b.attr("aria-valuenow");p && g.$observe("min", function (a) {
                    b.attr("aria-valuemin", a);
                  });q && g.$observe("max", function (a) {
                    b.attr("aria-valuemax", a);
                  });r && e.$watch(f, function (a) {
                    b.attr("aria-valuenow", a);
                  });
                }l && b.attr("tabindex", 0);}!g.hasOwnProperty("ngRequired") && k.$validators.required && c("aria-required", "ariaRequired", b, !1) && g.$observe("required", function () {
              b.attr("aria-required", !!g.required);
            });c("aria-invalid", "ariaInvalid", b, !0) && e.$watch(function () {
              return k.$invalid;
            }, function (a) {
              b.attr("aria-invalid", !!a);
            });
          } };
      } };
  }]).directive("ngDisabled", ["$aria", function (a) {
    return a.$$watchExpr("ngDisabled", "aria-disabled", f, !1);
  }]).directive("ngMessages", function () {
    return { restrict: "A", require: "?ngMessages", link: function (a, c, f, h) {
        c.attr("aria-live") || c.attr("aria-live", "assertive");
      } };
  }).directive("ngClick", ["$aria", "$parse", function (a, c) {
    return { restrict: "A", compile: function (m, h) {
        var p = c(h.ngClick, null, !0);return function (c, d, e) {
          if (!l(d, f) && (a.config("bindRoleForClick") && !d.attr("role") && d.attr("role", "button"), a.config("tabindex") && !d.attr("tabindex") && d.attr("tabindex", 0), a.config("bindKeypress") && !e.ngKeypress)) d.on("keypress", function (a) {
            function d() {
              p(c, { $event: a });
            }var e = a.which || a.keyCode;32 !== e && 13 !== e || c.$apply(d);
          });
        };
      } };
  }]).directive("ngDblclick", ["$aria", function (a) {
    return function (c, m, h) {
      !a.config("tabindex") || m.attr("tabindex") || l(m, f) || m.attr("tabindex", 0);
    };
  }]);
})(window, window.angular);
//# sourceMappingURL=angular-aria.min.js.map

//# sourceMappingURL=angular-aria.min-compiled.js.map