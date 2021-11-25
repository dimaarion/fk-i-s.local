<?php
if (is_array(json_decode($x))) {
    $content = json_decode($x);
    $content = $controller->parseStdClass($content);
}

?>
<div class="container-fluid ">
    <div id = "subCntentPanel">
    <div class = "text-right" id = "addPanel">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus-square" viewBox="0 0 16 16">
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
        </svg>
    </div>
    <?php
    if (is_array(json_decode($x))) :
        foreach ($content as $key => $value) :
            $label = $value['name'];
            $input = $value['content'];
    ?>
            <label class="form-label subLabelJson"><?php echo $label; ?></label>
            <textarea class="form-control subInputJson" ><?php echo $input; ?></textarea>
        <?php
        endforeach;
    else :
        ?>
        <label class="form-label subLabelJson">Изображение</label>
        <textarea class="form-control subInputJson" ><?php echo $input; ?></textarea>
        <label class="form-label subLabelJson">Содержание</label>
        <textarea class="form-control subInputJson" ><?php echo $input; ?></textarea>
    <?php endif; ?>
    </div>
    <textarea readonly class="form-control" id="sub_art_content_json" name="subartJson"></textarea>
    <div id="Dtext2" hidden="true"><?php echo $x2 ?></div>
    <div id="Dredactor2" class="content" name="test" data-text=""></div>
</div>
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
<script src="/adminpanel/static/js/2.e86ac358.chunk.js"></script>
<script src="/adminpanel/static/js/main.06ee0873.chunk.js"></script>