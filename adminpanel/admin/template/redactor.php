 <div id="Dtext2" hidden><?php echo $x ?></div>
 <div id="Dredactor2" class="subcontent" name="test"></div>
 <div id="Dtext" hidden><?php echo $x2 ?></div>
 <div id="Dredactor" class="content" name="test"></div>
 <script>
     ! function(c) {
         function e(e) {
             for (var r, t, n = e[0], o = e[1], u = e[2], a = 0, l = []; a < n.length; a++) t = n[a], Object.prototype.hasOwnProperty.call(i, t) && i[t] && l.push(i[t][0]), i[t] = 0;
             for (r in o) Object.prototype.hasOwnProperty.call(o, r) && (c[r] = o[r]);
             for (s && s(e); l.length;) l.shift()();
             return p.push.apply(p, u || []), f()
         }

         function f() {
             for (var e, r = 0; r < p.length; r++) {
                 for (var t = p[r], n = !0, o = 1; o < t.length; o++) {
                     var u = t[o];
                     0 !== i[u] && (n = !1)
                 }
                 n && (p.splice(r--, 1), e = a(a.s = t[0]))
             }
             return e
         }
         var t = {},
             i = {
                 1: 0
             },
             p = [];

         function a(e) {
             if (t[e]) return t[e].exports;
             var r = t[e] = {
                 i: e,
                 l: !1,
                 exports: {}
             };
             return c[e].call(r.exports, r, r.exports, a), r.l = !0, r.exports
         }
         a.m = c, a.c = t, a.d = function(e, r, t) {
             a.o(e, r) || Object.defineProperty(e, r, {
                 enumerable: !0,
                 get: t
             })
         }, a.r = function(e) {
             "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                 value: "Module"
             }), Object.defineProperty(e, "__esModule", {
                 value: !0
             })
         }, a.t = function(r, e) {
             if (1 & e && (r = a(r)), 8 & e) return r;
             if (4 & e && "object" == typeof r && r && r.__esModule) return r;
             var t = Object.create(null);
             if (a.r(t), Object.defineProperty(t, "default", {
                     enumerable: !0,
                     value: r
                 }), 2 & e && "string" != typeof r)
                 for (var n in r) a.d(t, n, function(e) {
                     return r[e]
                 }.bind(null, n));
             return t
         }, a.n = function(e) {
             var r = e && e.__esModule ? function() {
                 return e.default
             } : function() {
                 return e
             };
             return a.d(r, "a", r), r
         }, a.o = function(e, r) {
             return Object.prototype.hasOwnProperty.call(e, r)
         }, a.p = "/";
         var r = this["webpackJsonpreact-redactor"] = this["webpackJsonpreact-redactor"] || [],
             n = r.push.bind(r);
         r.push = e, r = r.slice();
         for (var o = 0; o < r.length; o++) e(r[o]);
         var s = n;
         f()
     }([])
 </script>

 <?php
    foreach ($controller->dirFileName($controller->dirExt('./static/js')) as $key => $value) : ?>
     <script src="/adminpanel/static/js/<?php echo $value ?>"></script>
 <?php endforeach; ?>