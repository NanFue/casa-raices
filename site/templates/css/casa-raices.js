var Jh = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Kh = { exports: {} };
/*! UIkit 3.16.26 | https://www.getuikit.com | (c) 2014 - 2023 YOOtheme | MIT License */
(function(Fo, Zh) {
  (function(Ps, Ai) {
    Fo.exports = Ai();
  })(Jh, function() {
    const { hasOwnProperty: Ps, toString: Ai } = Object.prototype;
    function vt(t, e) {
      return Ps.call(t, e);
    }
    const Ho = /\B([A-Z])/g, Kt = dt((t) => t.replace(Ho, "-$1").toLowerCase()), Lo = /-(\w)/g, ve = dt(
      (t) => (t.charAt(0).toLowerCase() + t.slice(1)).replace(Lo, (e, i) => i.toUpperCase())
    ), Tt = dt((t) => t.charAt(0).toUpperCase() + t.slice(1));
    function ot(t, e) {
      var i;
      return (i = t == null ? void 0 : t.startsWith) == null ? void 0 : i.call(t, e);
    }
    function Zt(t, e) {
      var i;
      return (i = t == null ? void 0 : t.endsWith) == null ? void 0 : i.call(t, e);
    }
    function m(t, e) {
      var i;
      return (i = t == null ? void 0 : t.includes) == null ? void 0 : i.call(t, e);
    }
    function xt(t, e) {
      var i;
      return (i = t == null ? void 0 : t.findIndex) == null ? void 0 : i.call(t, e);
    }
    const { isArray: Q, from: Qt } = Array, { assign: wt } = Object;
    function it(t) {
      return typeof t == "function";
    }
    function Et(t) {
      return t !== null && typeof t == "object";
    }
    function yt(t) {
      return Ai.call(t) === "[object Object]";
    }
    function te(t) {
      return Et(t) && t === t.window;
    }
    function Ve(t) {
      return Oi(t) === 9;
    }
    function Ye(t) {
      return Oi(t) >= 1;
    }
    function ee(t) {
      return Oi(t) === 1;
    }
    function Oi(t) {
      return !te(t) && Et(t) && t.nodeType;
    }
    function ie(t) {
      return typeof t == "boolean";
    }
    function D(t) {
      return typeof t == "string";
    }
    function we(t) {
      return typeof t == "number";
    }
    function bt(t) {
      return we(t) || D(t) && !isNaN(t - parseFloat(t));
    }
    function be(t) {
      return !(Q(t) ? t.length : Et(t) && Object.keys(t).length);
    }
    function Y(t) {
      return t === void 0;
    }
    function Di(t) {
      return ie(t) ? t : t === "true" || t === "1" || t === "" ? !0 : t === "false" || t === "0" ? !1 : t;
    }
    function kt(t) {
      const e = Number(t);
      return isNaN(e) ? !1 : e;
    }
    function $(t) {
      return parseFloat(t) || 0;
    }
    function H(t) {
      return k(t)[0];
    }
    function k(t) {
      return Ye(t) ? [t] : Array.from(t || []).filter(Ye);
    }
    function se(t) {
      if (te(t))
        return t;
      t = H(t);
      const e = Ve(t) ? t : t == null ? void 0 : t.ownerDocument;
      return (e == null ? void 0 : e.defaultView) || window;
    }
    function Ge(t, e) {
      return t === e || Et(t) && Et(e) && Object.keys(t).length === Object.keys(e).length && Pt(t, (i, s) => i === e[s]);
    }
    function Bi(t, e, i) {
      return t.replace(new RegExp(`${e}|${i}`, "g"), (s) => s === e ? i : e);
    }
    function ne(t) {
      return t[t.length - 1];
    }
    function Pt(t, e) {
      for (const i in t)
        if (e(t[i], i) === !1)
          return !1;
      return !0;
    }
    function Xe(t, e) {
      return t.slice().sort(
        ({ [e]: i = 0 }, { [e]: s = 0 }) => i > s ? 1 : s > i ? -1 : 0
      );
    }
    function Dt(t, e) {
      return t.reduce(
        (i, s) => i + $(it(e) ? e(s) : s[e]),
        0
      );
    }
    function _s(t, e) {
      const i = /* @__PURE__ */ new Set();
      return t.filter(({ [e]: s }) => i.has(s) ? !1 : i.add(s));
    }
    function Mi(t, e) {
      return e.reduce((i, s) => ({ ...i, [s]: t[s] }), {});
    }
    function Z(t, e = 0, i = 1) {
      return Math.min(Math.max(kt(t) || 0, e), i);
    }
    function S() {
    }
    function Ni(...t) {
      return [
        ["bottom", "top"],
        ["right", "left"]
      ].every(
        ([e, i]) => Math.min(...t.map(({ [e]: s }) => s)) - Math.max(...t.map(({ [i]: s }) => s)) > 0
      );
    }
    function Je(t, e) {
      return t.x <= e.right && t.x >= e.left && t.y <= e.bottom && t.y >= e.top;
    }
    function zi(t, e, i) {
      const s = e === "width" ? "height" : "width";
      return {
        [s]: t[e] ? Math.round(i * t[s] / t[e]) : t[s],
        [e]: i
      };
    }
    function As(t, e) {
      t = { ...t };
      for (const i in t)
        t = t[i] > e[i] ? zi(t, i, e[i]) : t;
      return t;
    }
    function Wo(t, e) {
      t = As(t, e);
      for (const i in t)
        t = t[i] < e[i] ? zi(t, i, e[i]) : t;
      return t;
    }
    const Ke = { ratio: zi, contain: As, cover: Wo };
    function rt(t, e, i = 0, s = !1) {
      e = k(e);
      const { length: n } = e;
      return n ? (t = bt(t) ? kt(t) : t === "next" ? i + 1 : t === "previous" ? i - 1 : t === "last" ? n - 1 : e.indexOf(H(t)), s ? Z(t, 0, n - 1) : (t %= n, t < 0 ? t + n : t)) : -1;
    }
    function dt(t) {
      const e = /* @__PURE__ */ Object.create(null);
      return (i) => e[i] || (e[i] = t(i));
    }
    function p(t, e, i) {
      var s;
      if (Et(e)) {
        for (const n in e)
          p(t, n, e[n]);
        return;
      }
      if (Y(i))
        return (s = H(t)) == null ? void 0 : s.getAttribute(e);
      for (const n of k(t))
        it(i) && (i = i.call(n, p(n, e))), i === null ? $e(n, e) : n.setAttribute(e, i);
    }
    function $t(t, e) {
      return k(t).some((i) => i.hasAttribute(e));
    }
    function $e(t, e) {
      k(t).forEach((i) => i.removeAttribute(e));
    }
    function tt(t, e) {
      for (const i of [e, `data-${e}`])
        if ($t(t, i))
          return p(t, i);
    }
    function y(t, ...e) {
      Os(t, e, "add");
    }
    function M(t, ...e) {
      Os(t, e, "remove");
    }
    function Fi(t, e) {
      p(
        t,
        "class",
        (i) => (i || "").replace(new RegExp(`\\b${e}\\b\\s?`, "g"), "")
      );
    }
    function Hi(t, ...e) {
      e[0] && M(t, e[0]), e[1] && y(t, e[1]);
    }
    function P(t, e) {
      return [e] = Li(e), !!e && k(t).some((i) => i.classList.contains(e));
    }
    function q(t, e, i) {
      const s = Li(e);
      Y(i) || (i = !!i);
      for (const n of k(t))
        for (const o of s)
          n.classList.toggle(o, i);
    }
    function Os(t, e, i) {
      e = e.reduce((s, n) => s.concat(Li(n)), []);
      for (const s of k(t))
        s.classList[i](...e);
    }
    function Li(t) {
      return String(t).split(/[ ,]/).filter(Boolean);
    }
    const Ro = {
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
    };
    function Wi(t) {
      return k(t).some((e) => Ro[e.tagName.toLowerCase()]);
    }
    function R(t) {
      return k(t).some(
        (e) => e.offsetWidth || e.offsetHeight || e.getClientRects().length
      );
    }
    const xe = "input,select,textarea,button";
    function Ri(t) {
      return k(t).some((e) => C(e, xe));
    }
    const ye = `${xe},a[href],[tabindex]`;
    function Ze(t) {
      return C(t, ye);
    }
    function _(t) {
      var e;
      return (e = H(t)) == null ? void 0 : e.parentElement;
    }
    function ke(t, e) {
      return k(t).filter((i) => C(i, e));
    }
    function C(t, e) {
      return k(t).some((i) => i.matches(e));
    }
    function U(t, e) {
      return ee(t) ? t.closest(ot(e, ">") ? e.slice(1) : e) : k(t).map((i) => U(i, e)).filter(Boolean);
    }
    function B(t, e) {
      return D(e) ? !!U(t, e) : H(e).contains(H(t));
    }
    function oe(t, e) {
      const i = [];
      for (; t = _(t); )
        (!e || C(t, e)) && i.push(t);
      return i;
    }
    function T(t, e) {
      t = H(t);
      const i = t ? Qt(t.children) : [];
      return e ? ke(i, e) : i;
    }
    function re(t, e) {
      return e ? k(t).indexOf(H(e)) : T(_(t)).indexOf(t);
    }
    function ae(t) {
      return t = H(t), t && ["origin", "pathname", "search"].every((e) => t[e] === location[e]);
    }
    function ji(t) {
      if (ae(t)) {
        t = H(t);
        const e = decodeURIComponent(t.hash).substring(1);
        return document.getElementById(e) || document.getElementsByName(e)[0];
      }
    }
    function at(t, e) {
      return qi(t, Bs(t, e));
    }
    function Se(t, e) {
      return Ie(t, Bs(t, e));
    }
    function qi(t, e) {
      return H(Ms(t, H(e), "querySelector"));
    }
    function Ie(t, e) {
      return k(Ms(t, H(e), "querySelectorAll"));
    }
    const jo = /(^|[^\\],)\s*[!>+~-]/, Ds = dt((t) => t.match(jo));
    function Bs(t, e = document) {
      return D(t) && Ds(t) || Ve(e) ? e : e.ownerDocument;
    }
    const qo = /([!>+~-])(?=\s+[!>+~-]|\s*$)/g, Uo = dt((t) => t.replace(qo, "$1 *"));
    function Ms(t, e = document, i) {
      if (!t || !D(t))
        return t;
      if (t = Uo(t), Ds(t)) {
        const s = Yo(t);
        t = "";
        for (let n of s) {
          let o = e;
          if (n[0] === "!") {
            const r = n.substr(1).trim().split(" ");
            if (o = U(_(e), r[0]), n = r.slice(1).join(" ").trim(), !n.length && s.length === 1)
              return o;
          }
          if (n[0] === "-") {
            const r = n.substr(1).trim().split(" "), a = (o || e).previousElementSibling;
            o = C(a, n.substr(1)) ? a : null, n = r.slice(1).join(" ");
          }
          o && (t += `${t ? "," : ""}${Go(o)} ${n}`);
        }
        e = document;
      }
      try {
        return e[i](t);
      } catch {
        return null;
      }
    }
    const Vo = /.*?[^\\](?:,|$)/g, Yo = dt(
      (t) => t.match(Vo).map((e) => e.replace(/,$/, "").trim())
    );
    function Go(t) {
      const e = [];
      for (; t.parentNode; ) {
        const i = p(t, "id");
        if (i) {
          e.unshift(`#${Ui(i)}`);
          break;
        } else {
          let { tagName: s } = t;
          s !== "HTML" && (s += `:nth-child(${re(t) + 1})`), e.unshift(s), t = t.parentNode;
        }
      }
      return e.join(" > ");
    }
    function Ui(t) {
      return D(t) ? CSS.escape(t) : "";
    }
    function x(...t) {
      let [e, i, s, n, o = !1] = Vi(t);
      n.length > 1 && (n = Jo(n)), o != null && o.self && (n = Ko(n)), s && (n = Xo(s, n));
      for (const r of i)
        for (const a of e)
          a.addEventListener(r, n, o);
      return () => Bt(e, i, n, o);
    }
    function Bt(...t) {
      let [e, i, , s, n = !1] = Vi(t);
      for (const o of i)
        for (const r of e)
          r.removeEventListener(o, s, n);
    }
    function j(...t) {
      const [e, i, s, n, o = !1, r] = Vi(t), a = x(
        e,
        i,
        s,
        (l) => {
          const h = !r || r(l);
          h && (a(), n(l, h));
        },
        o
      );
      return a;
    }
    function v(t, e, i) {
      return Yi(t).every(
        (s) => s.dispatchEvent(Mt(e, !0, !0, i))
      );
    }
    function Mt(t, e = !0, i = !1, s) {
      return D(t) && (t = new CustomEvent(t, { bubbles: e, cancelable: i, detail: s })), t;
    }
    function Vi(t) {
      return t[0] = Yi(t[0]), D(t[1]) && (t[1] = t[1].split(" ")), it(t[2]) && t.splice(2, 0, !1), t;
    }
    function Xo(t, e) {
      return (i) => {
        const s = t[0] === ">" ? Ie(t, i.currentTarget).reverse().filter((n) => B(i.target, n))[0] : U(i.target, t);
        s && (i.current = s, e.call(this, i), delete i.current);
      };
    }
    function Jo(t) {
      return (e) => Q(e.detail) ? t(e, ...e.detail) : t(e);
    }
    function Ko(t) {
      return function(e) {
        if (e.target === e.currentTarget || e.target === e.current)
          return t.call(null, e);
      };
    }
    function Ns(t) {
      return t && "addEventListener" in t;
    }
    function Zo(t) {
      return Ns(t) ? t : H(t);
    }
    function Yi(t) {
      return Q(t) ? t.map(Zo).filter(Boolean) : D(t) ? Ie(t) : Ns(t) ? [t] : k(t);
    }
    function St(t) {
      return t.pointerType === "touch" || !!t.touches;
    }
    function le(t) {
      var e, i;
      const { clientX: s, clientY: n } = ((e = t.touches) == null ? void 0 : e[0]) || ((i = t.changedTouches) == null ? void 0 : i[0]) || t;
      return { x: s, y: n };
    }
    const Qo = {
      "animation-iteration-count": !0,
      "column-count": !0,
      "fill-opacity": !0,
      "flex-grow": !0,
      "flex-shrink": !0,
      "font-weight": !0,
      "line-height": !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      "stroke-dasharray": !0,
      "stroke-dashoffset": !0,
      widows: !0,
      "z-index": !0,
      zoom: !0
    };
    function c(t, e, i, s) {
      const n = k(t);
      for (const o of n)
        if (D(e)) {
          if (e = Qe(e), Y(i))
            return getComputedStyle(o).getPropertyValue(e);
          o.style.setProperty(
            e,
            bt(i) && !Qo[e] ? `${i}px` : i || we(i) ? i : "",
            s
          );
        } else if (Q(e)) {
          const r = {};
          for (const a of e)
            r[a] = c(o, a);
          return r;
        } else
          Et(e) && (s = i, Pt(e, (r, a) => c(o, a, r, s)));
      return n[0];
    }
    const Qe = dt((t) => tr(t));
    function tr(t) {
      if (ot(t, "--"))
        return t;
      t = Kt(t);
      const { style: e } = document.documentElement;
      if (t in e)
        return t;
      for (const i of ["webkit", "moz"]) {
        const s = `-${i}-${t}`;
        if (s in e)
          return s;
      }
    }
    function er(t, e, i = 400, s = "linear") {
      return i = Math.round(i), Promise.all(
        k(t).map(
          (n) => new Promise((o, r) => {
            for (const l in e) {
              const h = c(n, l);
              h === "" && c(n, l, h);
            }
            const a = setTimeout(() => v(n, "transitionend"), i);
            j(
              n,
              "transitionend transitioncanceled",
              ({ type: l }) => {
                clearTimeout(a), M(n, "uk-transition"), c(n, {
                  transitionProperty: "",
                  transitionDuration: "",
                  transitionTimingFunction: ""
                }), l === "transitioncanceled" ? r() : o(n);
              },
              { self: !0 }
            ), y(n, "uk-transition"), c(n, {
              transitionProperty: Object.keys(e).map(Qe).join(","),
              transitionDuration: `${i}ms`,
              transitionTimingFunction: s,
              ...e
            });
          })
        )
      );
    }
    const E = {
      start: er,
      async stop(t) {
        v(t, "transitionend"), await Promise.resolve();
      },
      async cancel(t) {
        v(t, "transitioncanceled"), await Promise.resolve();
      },
      inProgress(t) {
        return P(t, "uk-transition");
      }
    }, Ce = "uk-animation-";
    function zs(t, e, i = 200, s, n) {
      return Promise.all(
        k(t).map(
          (o) => new Promise((r, a) => {
            v(o, "animationcanceled");
            const l = setTimeout(() => v(o, "animationend"), i);
            j(
              o,
              "animationend animationcanceled",
              ({ type: h }) => {
                clearTimeout(l), h === "animationcanceled" ? a() : r(o), c(o, "animationDuration", ""), Fi(o, `${Ce}\\S*`);
              },
              { self: !0 }
            ), c(o, "animationDuration", `${i}ms`), y(o, e, Ce + (n ? "leave" : "enter")), ot(e, Ce) && (s && y(o, `uk-transform-origin-${s}`), n && y(o, `${Ce}reverse`));
          })
        )
      );
    }
    const ir = new RegExp(`${Ce}(enter|leave)`), gt = {
      in: zs,
      out(t, e, i, s) {
        return zs(t, e, i, s, !0);
      },
      inProgress(t) {
        return ir.test(p(t, "class"));
      },
      cancel(t) {
        v(t, "animationcanceled");
      }
    };
    function sr(t) {
      if (document.readyState !== "loading") {
        t();
        return;
      }
      j(document, "DOMContentLoaded", t);
    }
    function G(t, ...e) {
      return e.some((i) => {
        var s;
        return ((s = t == null ? void 0 : t.tagName) == null ? void 0 : s.toLowerCase()) === i.toLowerCase();
      });
    }
    function Gi(t) {
      return t = w(t), t.innerHTML = "", t;
    }
    function Nt(t, e) {
      return Y(e) ? w(t).innerHTML : L(Gi(t), e);
    }
    const nr = ii("prepend"), L = ii("append"), ti = ii("before"), ei = ii("after");
    function ii(t) {
      return function(e, i) {
        var s;
        const n = k(D(i) ? zt(i) : i);
        return (s = w(e)) == null || s[t](...n), Fs(n);
      };
    }
    function lt(t) {
      k(t).forEach((e) => e.remove());
    }
    function si(t, e) {
      for (e = H(ti(t, e)); e.firstChild; )
        e = e.firstChild;
      return L(e, t), e;
    }
    function Xi(t, e) {
      return k(
        k(t).map(
          (i) => i.hasChildNodes() ? si(Qt(i.childNodes), e) : L(i, e)
        )
      );
    }
    function Te(t) {
      k(t).map(_).filter((e, i, s) => s.indexOf(e) === i).forEach((e) => e.replaceWith(...e.childNodes));
    }
    const or = /^\s*<(\w+|!)[^>]*>/, rr = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;
    function zt(t) {
      const e = rr.exec(t);
      if (e)
        return document.createElement(e[1]);
      const i = document.createElement("div");
      return or.test(t) ? i.insertAdjacentHTML("beforeend", t.trim()) : i.textContent = t, Fs(i.childNodes);
    }
    function Fs(t) {
      return t.length > 1 ? t : t[0];
    }
    function It(t, e) {
      if (ee(t))
        for (e(t), t = t.firstElementChild; t; ) {
          const i = t.nextElementSibling;
          It(t, e), t = i;
        }
    }
    function w(t, e) {
      return Hs(t) ? H(zt(t)) : qi(t, e);
    }
    function z(t, e) {
      return Hs(t) ? k(zt(t)) : Ie(t, e);
    }
    function Hs(t) {
      return D(t) && ot(t.trim(), "<");
    }
    const Ft = {
      width: ["left", "right"],
      height: ["top", "bottom"]
    };
    function b(t) {
      const e = ee(t) ? H(t).getBoundingClientRect() : { height: et(t), width: Ee(t), top: 0, left: 0 };
      return {
        height: e.height,
        width: e.width,
        top: e.top,
        left: e.left,
        bottom: e.top + e.height,
        right: e.left + e.width
      };
    }
    function A(t, e) {
      e && c(t, { left: 0, top: 0 });
      const i = b(t);
      if (t) {
        const { scrollY: s, scrollX: n } = se(t), o = { height: s, width: n };
        for (const r in Ft)
          for (const a of Ft[r])
            i[a] += o[r];
      }
      if (!e)
        return i;
      for (const s of ["left", "top"])
        c(t, s, e[s] - i[s]);
    }
    function Ji(t) {
      let { top: e, left: i } = A(t);
      const {
        ownerDocument: { body: s, documentElement: n },
        offsetParent: o
      } = H(t);
      let r = o || n;
      for (; r && (r === s || r === n) && c(r, "position") === "static"; )
        r = r.parentNode;
      if (ee(r)) {
        const a = A(r);
        e -= a.top + $(c(r, "borderTopWidth")), i -= a.left + $(c(r, "borderLeftWidth"));
      }
      return {
        top: e - $(c(t, "marginTop")),
        left: i - $(c(t, "marginLeft"))
      };
    }
    function Ht(t) {
      t = H(t);
      const e = [t.offsetTop, t.offsetLeft];
      for (; t = t.offsetParent; )
        if (e[0] += t.offsetTop + $(c(t, "borderTopWidth")), e[1] += t.offsetLeft + $(c(t, "borderLeftWidth")), c(t, "position") === "fixed") {
          const i = se(t);
          return e[0] += i.scrollY, e[1] += i.scrollX, e;
        }
      return e;
    }
    const et = Ls("height"), Ee = Ls("width");
    function Ls(t) {
      const e = Tt(t);
      return (i, s) => {
        if (Y(s)) {
          if (te(i))
            return i[`inner${e}`];
          if (Ve(i)) {
            const n = i.documentElement;
            return Math.max(n[`offset${e}`], n[`scroll${e}`]);
          }
          return i = H(i), s = c(i, t), s = s === "auto" ? i[`offset${e}`] : $(s) || 0, s - he(i, t);
        } else
          return c(
            i,
            t,
            !s && s !== 0 ? "" : +s + he(i, t) + "px"
          );
      };
    }
    function he(t, e, i = "border-box") {
      return c(t, "boxSizing") === i ? Dt(
        Ft[e].map(Tt),
        (s) => $(c(t, `padding${s}`)) + $(c(t, `border${s}Width`))
      ) : 0;
    }
    function ni(t) {
      for (const e in Ft)
        for (const i in Ft[e])
          if (Ft[e][i] === t)
            return Ft[e][1 - i];
      return t;
    }
    function ht(t, e = "width", i = window, s = !1) {
      return D(t) ? Dt(lr(t), (n) => {
        const o = cr(n);
        return o ? ur(
          o === "vh" ? fr() : o === "vw" ? Ee(se(i)) : s ? i[`offset${Tt(e)}`] : b(i)[e],
          n
        ) : n;
      }) : $(t);
    }
    const ar = /-?\d+(?:\.\d+)?(?:v[wh]|%|px)?/g, lr = dt((t) => t.toString().replace(/\s/g, "").match(ar) || []), hr = /(?:v[hw]|%)$/, cr = dt((t) => (t.match(hr) || [])[0]);
    function ur(t, e) {
      return t * $(e) / 100;
    }
    let Pe, ce;
    function fr() {
      return Pe || (ce || (ce = w("<div>"), c(ce, {
        height: "100vh",
        position: "fixed"
      }), x(window, "resize", () => Pe = null)), L(document.body, ce), Pe = ce.clientHeight, lt(ce), Pe);
    }
    const Lt = typeof window < "u", X = Lt && document.dir === "rtl", Wt = Lt && "ontouchstart" in window, ue = Lt && window.PointerEvent, mt = ue ? "pointerdown" : Wt ? "touchstart" : "mousedown", oi = ue ? "pointermove" : Wt ? "touchmove" : "mousemove", _t = ue ? "pointerup" : Wt ? "touchend" : "mouseup", Rt = ue ? "pointerenter" : Wt ? "" : "mouseenter", _e = ue ? "pointerleave" : Wt ? "" : "mouseleave", ri = ue ? "pointercancel" : "touchcancel", J = {
      reads: [],
      writes: [],
      read(t) {
        return this.reads.push(t), Zi(), t;
      },
      write(t) {
        return this.writes.push(t), Zi(), t;
      },
      clear(t) {
        Rs(this.reads, t), Rs(this.writes, t);
      },
      flush: Ki
    };
    function Ki(t) {
      Ws(J.reads), Ws(J.writes.splice(0)), J.scheduled = !1, (J.reads.length || J.writes.length) && Zi(t + 1);
    }
    const dr = 4;
    function Zi(t) {
      J.scheduled || (J.scheduled = !0, t && t < dr ? Promise.resolve().then(() => Ki(t)) : requestAnimationFrame(() => Ki(1)));
    }
    function Ws(t) {
      let e;
      for (; e = t.shift(); )
        try {
          e();
        } catch (i) {
          console.error(i);
        }
    }
    function Rs(t, e) {
      const i = t.indexOf(e);
      return ~i && t.splice(i, 1);
    }
    function Qi() {
    }
    Qi.prototype = {
      positions: [],
      init() {
        this.positions = [];
        let t;
        this.unbind = x(document, "mousemove", (e) => t = le(e)), this.interval = setInterval(() => {
          t && (this.positions.push(t), this.positions.length > 5 && this.positions.shift());
        }, 50);
      },
      cancel() {
        var t;
        (t = this.unbind) == null || t.call(this), clearInterval(this.interval);
      },
      movesTo(t) {
        if (this.positions.length < 2)
          return !1;
        const e = t.getBoundingClientRect(), { left: i, right: s, top: n, bottom: o } = e, [r] = this.positions, a = ne(this.positions), l = [r, a];
        return Je(a, e) ? !1 : [
          [
            { x: i, y: n },
            { x: s, y: o }
          ],
          [
            { x: i, y: o },
            { x: s, y: n }
          ]
        ].some((u) => {
          const f = pr(l, u);
          return f && Je(f, e);
        });
      }
    };
    function pr([{ x: t, y: e }, { x: i, y: s }], [{ x: n, y: o }, { x: r, y: a }]) {
      const l = (a - o) * (i - t) - (r - n) * (s - e);
      if (l === 0)
        return !1;
      const h = ((r - n) * (e - o) - (a - o) * (t - n)) / l;
      return h < 0 ? !1 : { x: t + h * (i - t), y: e + h * (s - e) };
    }
    function js(t, e, i = {}, { intersecting: s = !0 } = {}) {
      const n = new IntersectionObserver(
        s ? (o, r) => {
          o.some((a) => a.isIntersecting) && e(o, r);
        } : e,
        i
      );
      for (const o of k(t))
        n.observe(o);
      return n;
    }
    const gr = Lt && window.ResizeObserver;
    function ai(t, e, i = { box: "border-box" }) {
      if (gr)
        return Us(ResizeObserver, t, e, i);
      const s = [x(window, "load resize", e), x(document, "loadedmetadata load", e, !0)];
      return { disconnect: () => s.map((n) => n()) };
    }
    function ts(t) {
      return { disconnect: x([window, window.visualViewport], "resize", t) };
    }
    function qs(t, e, i) {
      return Us(MutationObserver, t, e, i);
    }
    function Us(t, e, i, s) {
      const n = new t(i);
      for (const o of k(e))
        n.observe(o, s);
      return n;
    }
    function Vs(t) {
      if (hi(t) && es(t, { func: "playVideo", method: "play" }), li(t))
        try {
          t.play().catch(S);
        } catch {
        }
    }
    function Ys(t) {
      hi(t) && es(t, { func: "pauseVideo", method: "pause" }), li(t) && t.pause();
    }
    function Gs(t) {
      hi(t) && es(t, { func: "mute", method: "setVolume", value: 0 }), li(t) && (t.muted = !0);
    }
    function Xs(t) {
      return li(t) || hi(t);
    }
    function li(t) {
      return G(t, "video");
    }
    function hi(t) {
      return G(t, "iframe") && (Js(t) || Ks(t));
    }
    function Js(t) {
      return !!t.src.match(
        /\/\/.*?youtube(-nocookie)?\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/
      );
    }
    function Ks(t) {
      return !!t.src.match(/vimeo\.com\/video\/.*/);
    }
    async function es(t, e) {
      await vr(t), Zs(t, e);
    }
    function Zs(t, e) {
      try {
        t.contentWindow.postMessage(JSON.stringify({ event: "command", ...e }), "*");
      } catch {
      }
    }
    const is = "_ukPlayer";
    let mr = 0;
    function vr(t) {
      if (t[is])
        return t[is];
      const e = Js(t), i = Ks(t), s = ++mr;
      let n;
      return t[is] = new Promise((o) => {
        e && j(t, "load", () => {
          const r = () => Zs(t, { event: "listening", id: s });
          n = setInterval(r, 100), r();
        }), j(window, "message", o, !1, ({ data: r }) => {
          try {
            return r = JSON.parse(r), e && (r == null ? void 0 : r.id) === s && r.event === "onReady" || i && Number(r == null ? void 0 : r.player_id) === s;
          } catch {
          }
        }), t.src = `${t.src}${m(t.src, "?") ? "&" : "?"}${e ? "enablejsapi=1" : `api=1&player_id=${s}`}`;
      }).then(() => clearInterval(n));
    }
    function ss(t, e = 0, i = 0) {
      return R(t) ? Ni(
        ...jt(t).map((s) => {
          const { top: n, left: o, bottom: r, right: a } = ct(s);
          return {
            top: n - e,
            left: o - i,
            bottom: r + e,
            right: a + i
          };
        }).concat(A(t))
      ) : !1;
    }
    function Qs(t, { offset: e = 0 } = {}) {
      const i = R(t) ? fe(t, !1, ["hidden"]) : [];
      return i.reduce(
        (r, a, l) => {
          const { scrollTop: h, scrollHeight: u, offsetHeight: f } = a, d = ct(a), g = u - d.height, { height: O, top: N } = i[l - 1] ? ct(i[l - 1]) : A(t);
          let F = Math.ceil(N - d.top - e + h);
          return e > 0 && f < O + e ? F += e : e = 0, F > g ? (e -= F - g, F = g) : F < 0 && (e -= F, F = 0), () => s(a, F - h).then(r);
        },
        () => Promise.resolve()
      )();
      function s(r, a) {
        return new Promise((l) => {
          const h = r.scrollTop, u = n(Math.abs(a)), f = Date.now();
          (function d() {
            const g = o(Z((Date.now() - f) / u));
            r.scrollTop = h + a * g, g === 1 ? l() : requestAnimationFrame(d);
          })();
        });
      }
      function n(r) {
        return 40 * Math.pow(r, 0.375);
      }
      function o(r) {
        return 0.5 * (1 - Math.cos(Math.PI * r));
      }
    }
    function ns(t, e = 0, i = 0) {
      if (!R(t))
        return 0;
      const s = Ct(t, !0), { scrollHeight: n, scrollTop: o } = s, { height: r } = ct(s), a = n - r, l = Ht(t)[0] - Ht(s)[0], h = Math.max(0, l - r + e), u = Math.min(a, l + t.offsetHeight - i);
      return Z((o - h) / (u - h));
    }
    function fe(t, e = !1, i = []) {
      const s = tn(t);
      let n = oe(t).reverse();
      n = n.slice(n.indexOf(s) + 1);
      const o = xt(n, (r) => c(r, "position") === "fixed");
      return ~o && (n = n.slice(o)), [s].concat(
        n.filter(
          (r) => c(r, "overflow").split(" ").some((a) => m(["auto", "scroll", ...i], a)) && (!e || r.scrollHeight > ct(r).height)
        )
      ).reverse();
    }
    function Ct(...t) {
      return fe(...t)[0];
    }
    function jt(t) {
      return fe(t, !1, ["hidden", "clip"]);
    }
    function ct(t) {
      const e = se(t), {
        visualViewport: i,
        document: { documentElement: s }
      } = e;
      let n = t === tn(t) ? e : t;
      if (te(n) && i) {
        let { height: r, width: a, scale: l, pageTop: h, pageLeft: u } = i;
        return r = Math.round(r * l), a = Math.round(a * l), { height: r, width: a, top: h, left: u, bottom: h + r, right: u + a };
      }
      let o = A(n);
      if (c(n, "display") === "inline")
        return o;
      for (let [r, a, l, h] of [
        ["width", "x", "left", "right"],
        ["height", "y", "top", "bottom"]
      ]) {
        te(n) ? n = s : o[l] += $(c(n, `border-${l}-width`));
        const u = o[r] % 1;
        o[r] = o[a] = n[`client${Tt(r)}`] - (u ? u < 0.5 ? -u : 1 - u : 0), o[h] = o[r] + o[l];
      }
      return o;
    }
    function tn(t) {
      return se(t).document.scrollingElement;
    }
    const ut = [
      ["width", "x", "left", "right"],
      ["height", "y", "top", "bottom"]
    ];
    function en(t, e, i) {
      i = {
        attach: {
          element: ["left", "top"],
          target: ["left", "top"],
          ...i.attach
        },
        offset: [0, 0],
        placement: [],
        ...i
      }, Q(e) || (e = [e, e]), A(t, sn(t, e, i));
    }
    function sn(t, e, i) {
      const s = nn(t, e, i), { boundary: n, viewportOffset: o = 0, placement: r } = i;
      let a = s;
      for (const [l, [h, , u, f]] of Object.entries(ut)) {
        const d = wr(t, e[l], o, n, l);
        if (ci(s, d, l))
          continue;
        let g = 0;
        if (r[l] === "flip") {
          const O = i.attach.target[l];
          if (O === f && s[f] <= d[f] || O === u && s[u] >= d[u])
            continue;
          g = $r(t, e, i, l)[u] - s[u];
          const N = br(t, e[l], o, l);
          if (!ci(os(s, g, l), N, l)) {
            if (ci(s, N, l))
              continue;
            if (i.recursion)
              return !1;
            const F = xr(t, e, i);
            if (F && ci(F, N, 1 - l))
              return F;
            continue;
          }
        } else if (r[l] === "shift") {
          const O = A(e[l]), { offset: N } = i;
          g = Z(
            Z(s[u], d[u], d[f] - s[h]),
            O[u] - s[h] + N[l],
            O[f] - N[l]
          ) - s[u];
        }
        a = os(a, g, l);
      }
      return a;
    }
    function nn(t, e, i) {
      let { attach: s, offset: n } = {
        attach: {
          element: ["left", "top"],
          target: ["left", "top"],
          ...i.attach
        },
        offset: [0, 0],
        ...i
      }, o = A(t);
      for (const [r, [a, , l, h]] of Object.entries(ut)) {
        const u = s.target[r] === s.element[r] ? ct(e[r]) : A(e[r]);
        o = os(
          o,
          u[l] - o[l] + on(s.target[r], h, u[a]) - on(s.element[r], h, o[a]) + +n[r],
          r
        );
      }
      return o;
    }
    function os(t, e, i) {
      const [, s, n, o] = ut[i], r = { ...t };
      return r[n] = t[s] = t[n] + e, r[o] += e, r;
    }
    function on(t, e, i) {
      return t === "center" ? i / 2 : t === e ? i : 0;
    }
    function wr(t, e, i, s, n) {
      let o = an(...rn(t, e).map(ct));
      return i && (o[ut[n][2]] += i, o[ut[n][3]] -= i), s && (o = an(
        o,
        A(Q(s) ? s[n] : s)
      )), o;
    }
    function br(t, e, i, s) {
      const [n, o, r, a] = ut[s], [l] = rn(t, e), h = ct(l);
      return ["auto", "scroll"].includes(c(l, `overflow-${o}`)) && (h[r] -= l[`scroll${Tt(r)}`], h[a] = h[r] + l[`scroll${Tt(n)}`]), h[r] += i, h[a] -= i, h;
    }
    function rn(t, e) {
      return jt(e).filter((i) => B(t, i));
    }
    function an(...t) {
      let e = {};
      for (const i of t)
        for (const [, , s, n] of ut)
          e[s] = Math.max(e[s] || 0, i[s]), e[n] = Math.min(...[e[n], i[n]].filter(Boolean));
      return e;
    }
    function ci(t, e, i) {
      const [, , s, n] = ut[i];
      return t[s] >= e[s] && t[n] <= e[n];
    }
    function $r(t, e, { offset: i, attach: s }, n) {
      return nn(t, e, {
        attach: {
          element: ln(s.element, n),
          target: ln(s.target, n)
        },
        offset: yr(i, n)
      });
    }
    function xr(t, e, i) {
      return sn(t, e, {
        ...i,
        attach: {
          element: i.attach.element.map(hn).reverse(),
          target: i.attach.target.map(hn).reverse()
        },
        offset: i.offset.reverse(),
        placement: i.placement.reverse(),
        recursion: !0
      });
    }
    function ln(t, e) {
      const i = [...t], s = ut[e].indexOf(t[e]);
      return ~s && (i[e] = ut[e][1 - s % 2 + 2]), i;
    }
    function hn(t) {
      for (let e = 0; e < ut.length; e++) {
        const i = ut[e].indexOf(t);
        if (~i)
          return ut[1 - e][i % 2 + 2];
      }
    }
    function yr(t, e) {
      return t = [...t], t[e] *= -1, t;
    }
    var kr = /* @__PURE__ */ Object.freeze({
      __proto__: null,
      $: w,
      $$: z,
      Animation: gt,
      Dimensions: Ke,
      MouseTracker: Qi,
      Transition: E,
      addClass: y,
      after: ei,
      append: L,
      apply: It,
      assign: wt,
      attr: p,
      before: ti,
      boxModelAdjust: he,
      camelize: ve,
      children: T,
      clamp: Z,
      closest: U,
      createEvent: Mt,
      css: c,
      data: tt,
      dimensions: b,
      each: Pt,
      empty: Gi,
      endsWith: Zt,
      escape: Ui,
      fastdom: J,
      filter: ke,
      find: qi,
      findAll: Ie,
      findIndex: xt,
      flipPosition: ni,
      fragment: zt,
      getEventPos: le,
      getIndex: rt,
      getTargetedElement: ji,
      hasAttr: $t,
      hasClass: P,
      hasOwn: vt,
      hasTouch: Wt,
      height: et,
      html: Nt,
      hyphenate: Kt,
      inBrowser: Lt,
      includes: m,
      index: re,
      intersectRect: Ni,
      isArray: Q,
      isBoolean: ie,
      isDocument: Ve,
      isElement: ee,
      isEmpty: be,
      isEqual: Ge,
      isFocusable: Ze,
      isFunction: it,
      isInView: ss,
      isInput: Ri,
      isNode: Ye,
      isNumber: we,
      isNumeric: bt,
      isObject: Et,
      isPlainObject: yt,
      isRtl: X,
      isSameSiteAnchor: ae,
      isString: D,
      isTag: G,
      isTouch: St,
      isUndefined: Y,
      isVideo: Xs,
      isVisible: R,
      isVoidElement: Wi,
      isWindow: te,
      last: ne,
      matches: C,
      memoize: dt,
      mute: Gs,
      noop: S,
      observeIntersection: js,
      observeMutation: qs,
      observeResize: ai,
      observeViewportResize: ts,
      off: Bt,
      offset: A,
      offsetPosition: Ht,
      offsetViewport: ct,
      on: x,
      once: j,
      overflowParents: jt,
      parent: _,
      parents: oe,
      pause: Ys,
      pick: Mi,
      play: Vs,
      pointInRect: Je,
      pointerCancel: ri,
      pointerDown: mt,
      pointerEnter: Rt,
      pointerLeave: _e,
      pointerMove: oi,
      pointerUp: _t,
      position: Ji,
      positionAt: en,
      prepend: nr,
      propName: Qe,
      query: at,
      queryAll: Se,
      ready: sr,
      remove: lt,
      removeAttr: $e,
      removeClass: M,
      removeClasses: Fi,
      replaceClass: Hi,
      scrollIntoView: Qs,
      scrollParent: Ct,
      scrollParents: fe,
      scrolledOver: ns,
      selFocusable: ye,
      selInput: xe,
      sortBy: Xe,
      startsWith: ot,
      sumBy: Dt,
      swap: Bi,
      toArray: Qt,
      toBoolean: Di,
      toEventTargets: Yi,
      toFloat: $,
      toNode: H,
      toNodes: k,
      toNumber: kt,
      toPx: ht,
      toWindow: se,
      toggleClass: q,
      trigger: v,
      ucfirst: Tt,
      uniqueBy: _s,
      unwrap: Te,
      width: Ee,
      within: B,
      wrapAll: si,
      wrapInner: Xi
    }), st = {
      connected() {
        y(this.$el, this.$options.id);
      }
    };
    const Sr = ["days", "hours", "minutes", "seconds"];
    var Ir = {
      mixins: [st],
      props: {
        date: String,
        clsWrapper: String,
        role: String
      },
      data: {
        date: "",
        clsWrapper: ".uk-countdown-%unit%",
        role: "timer"
      },
      connected() {
        p(this.$el, "role", this.role), this.date = $(Date.parse(this.$props.date)), this.end = !1, this.start();
      },
      disconnected() {
        this.stop();
      },
      events: {
        name: "visibilitychange",
        el() {
          return document;
        },
        handler() {
          document.hidden ? this.stop() : this.start();
        }
      },
      methods: {
        start() {
          this.stop(), this.update(), this.timer || (v(this.$el, "countdownstart"), this.timer = setInterval(this.update, 1e3));
        },
        stop() {
          this.timer && (clearInterval(this.timer), v(this.$el, "countdownstop"), this.timer = null);
        },
        update() {
          const t = Cr(this.date);
          t.total || (this.stop(), this.end || (v(this.$el, "countdownend"), this.end = !0));
          for (const e of Sr) {
            const i = w(this.clsWrapper.replace("%unit%", e), this.$el);
            if (!i)
              continue;
            let s = String(Math.trunc(t[e]));
            s = s.length < 2 ? `0${s}` : s, i.textContent !== s && (s = s.split(""), s.length !== i.children.length && Nt(i, s.map(() => "<span></span>").join("")), s.forEach((n, o) => i.children[o].textContent = n));
          }
        }
      }
    };
    function Cr(t) {
      const e = Math.max(0, t - Date.now()) / 1e3;
      return {
        total: e,
        seconds: e % 60,
        minutes: e / 60 % 60,
        hours: e / 60 / 60 % 24,
        days: e / 60 / 60 / 24
      };
    }
    const V = {};
    V.events = V.watch = V.observe = V.created = V.beforeConnect = V.connected = V.beforeDisconnect = V.disconnected = V.destroy = rs, V.args = function(t, e) {
      return e !== !1 && rs(e || t);
    }, V.update = function(t, e) {
      return Xe(
        rs(t, it(e) ? { read: e } : e),
        "order"
      );
    }, V.props = function(t, e) {
      if (Q(e)) {
        const i = {};
        for (const s of e)
          i[s] = String;
        e = i;
      }
      return V.methods(t, e);
    }, V.computed = V.methods = function(t, e) {
      return e ? t ? { ...t, ...e } : e : t;
    }, V.i18n = V.data = function(t, e, i) {
      return i ? cn(t, e, i) : e ? t ? function(s) {
        return cn(t, e, s);
      } : e : t;
    };
    function cn(t, e, i) {
      return V.computed(
        it(t) ? t.call(i, i) : t,
        it(e) ? e.call(i, i) : e
      );
    }
    function rs(t, e) {
      return t = t && !Q(t) ? [t] : t, e ? t ? t.concat(e) : Q(e) ? e : [e] : t;
    }
    function Tr(t, e) {
      return Y(e) ? t : e;
    }
    function Ae(t, e, i) {
      const s = {};
      if (it(e) && (e = e.options), e.extends && (t = Ae(t, e.extends, i)), e.mixins)
        for (const o of e.mixins)
          t = Ae(t, o, i);
      for (const o in t)
        n(o);
      for (const o in e)
        vt(t, o) || n(o);
      function n(o) {
        s[o] = (V[o] || Tr)(t[o], e[o], i);
      }
      return s;
    }
    function Oe(t, e = []) {
      try {
        return t ? ot(t, "{") ? JSON.parse(t) : e.length && !m(t, ":") ? { [e[0]]: t } : t.split(";").reduce((i, s) => {
          const [n, o] = s.split(/:(.*)/);
          return n && !Y(o) && (i[n.trim()] = o.trim()), i;
        }, {}) : {};
      } catch {
        return {};
      }
    }
    function as(t, e) {
      return t === Boolean ? Di(e) : t === Number ? kt(e) : t === "list" ? Er(e) : t === Object && D(e) ? Oe(e) : t ? t(e) : e;
    }
    function Er(t) {
      return Q(t) ? t : D(t) ? t.split(/,(?![^(]*\))/).map((e) => bt(e) ? kt(e) : Di(e.trim())) : [t];
    }
    function pt(t) {
      return Me(ai, t, "resize");
    }
    function De(t) {
      return Me(js, t);
    }
    function un(t) {
      return Me(qs, t);
    }
    function Be(t = {}) {
      return De({
        handler: function(e, i) {
          const { targets: s = this.$el, preload: n = 5 } = t;
          for (const o of k(it(s) ? s(this) : s))
            z('[loading="lazy"]', o).slice(0, n - 1).forEach((r) => $e(r, "loading"));
          for (const o of e.filter(({ isIntersecting: r }) => r).map(({ target: r }) => r))
            i.unobserve(o);
        },
        ...t
      });
    }
    function fn() {
      return Me((t, e) => ts(e));
    }
    function ui(t) {
      return Me(
        (e, i) => ({
          disconnect: x(_r(e), "scroll", i, {
            passive: !0,
            capture: !0
          })
        }),
        t,
        "scroll"
      );
    }
    function dn(t) {
      return {
        observe(e, i) {
          return {
            observe: S,
            unobserve: S,
            disconnect: x(e, mt, i, { passive: !0 })
          };
        },
        handler(e) {
          if (!St(e))
            return;
          const i = le(e), s = "tagName" in e.target ? e.target : _(e.target);
          j(document, `${_t} ${ri} scroll`, (n) => {
            const { x: o, y: r } = le(n);
            (n.type !== "scroll" && s && o && Math.abs(i.x - o) > 100 || r && Math.abs(i.y - r) > 100) && setTimeout(() => {
              v(s, "swipe"), v(s, `swipe${Pr(i.x, i.y, o, r)}`);
            });
          });
        },
        ...t
      };
    }
    function Me(t, e, i) {
      return {
        observe: t,
        handler() {
          this.$emit(i);
        },
        ...e
      };
    }
    function Pr(t, e, i, s) {
      return Math.abs(t - i) >= Math.abs(e - s) ? t - i > 0 ? "Left" : "Right" : e - s > 0 ? "Up" : "Down";
    }
    function _r(t) {
      return k(t).map((e) => {
        const { ownerDocument: i } = e, s = Ct(e, !0);
        return s === i.scrollingElement ? i : s;
      });
    }
    var pn = {
      props: {
        margin: String,
        firstColumn: Boolean
      },
      data: {
        margin: "uk-margin-small-top",
        firstColumn: "uk-first-column"
      },
      observe: [
        un({
          options: {
            childList: !0,
            attributes: !0,
            attributeFilter: ["style"]
          }
        }),
        pt({
          target: ({ $el: t }) => [t, ...T(t)]
        })
      ],
      update: {
        read() {
          const t = ls(this.$el.children);
          return {
            rows: t,
            columns: Ar(t)
          };
        },
        write({ columns: t, rows: e }) {
          for (const i of e)
            for (const s of i)
              q(s, this.margin, e[0] !== i), q(s, this.firstColumn, t[0].includes(s));
        },
        events: ["resize"]
      }
    };
    function ls(t) {
      return gn(t, "top", "bottom");
    }
    function Ar(t) {
      const e = [];
      for (const i of t) {
        const s = gn(i, "left", "right");
        for (let n = 0; n < s.length; n++)
          e[n] = e[n] ? e[n].concat(s[n]) : s[n];
      }
      return X ? e.reverse() : e;
    }
    function gn(t, e, i) {
      const s = [[]];
      for (const n of t) {
        if (!R(n))
          continue;
        let o = fi(n);
        for (let r = s.length - 1; r >= 0; r--) {
          const a = s[r];
          if (!a[0]) {
            a.push(n);
            break;
          }
          let l;
          if (a[0].offsetParent === n.offsetParent ? l = fi(a[0]) : (o = fi(n, !0), l = fi(a[0], !0)), o[e] >= l[i] - 1 && o[e] !== l[e]) {
            s.push([n]);
            break;
          }
          if (o[i] - 1 > l[e] || o[e] === l[e]) {
            a.push(n);
            break;
          }
          if (r === 0) {
            s.unshift([n]);
            break;
          }
        }
      }
      return s;
    }
    function fi(t, e = !1) {
      let { offsetTop: i, offsetLeft: s, offsetHeight: n, offsetWidth: o } = t;
      return e && ([i, s] = Ht(t)), {
        top: i,
        left: s,
        bottom: i + n,
        right: s + o
      };
    }
    const hs = "uk-transition-leave", cs = "uk-transition-enter";
    function mn(t, e, i, s = 0) {
      const n = di(e, !0), o = { opacity: 1 }, r = { opacity: 0 }, a = (u) => () => n === di(e) ? u() : Promise.reject(), l = a(async () => {
        y(e, hs), await Promise.all(
          wn(e).map(
            (u, f) => new Promise(
              (d) => setTimeout(
                () => E.start(u, r, i / 2, "ease").then(
                  d
                ),
                f * s
              )
            )
          )
        ), M(e, hs);
      }), h = a(async () => {
        const u = et(e);
        y(e, cs), t(), c(T(e), { opacity: 0 }), await Or();
        const f = T(e), d = et(e);
        c(e, "alignContent", "flex-start"), et(e, u);
        const g = wn(e);
        c(f, r);
        const O = g.map(async (N, F) => {
          await Dr(F * s), await E.start(N, o, i / 2, "ease");
        });
        u !== d && O.push(
          E.start(
            e,
            { height: d },
            i / 2 + g.length * s,
            "ease"
          )
        ), await Promise.all(O).then(() => {
          M(e, cs), n === di(e) && (c(e, { height: "", alignContent: "" }), c(f, { opacity: "" }), delete e.dataset.transition);
        });
      });
      return P(e, hs) ? vn(e).then(h) : P(e, cs) ? vn(e).then(l).then(h) : l().then(h);
    }
    function di(t, e) {
      return e && (t.dataset.transition = 1 + di(t)), kt(t.dataset.transition) || 0;
    }
    function vn(t) {
      return Promise.all(
        T(t).filter(E.inProgress).map(
          (e) => new Promise((i) => j(e, "transitionend transitioncanceled", i))
        )
      );
    }
    function wn(t) {
      return ls(T(t)).reduce(
        (e, i) => e.concat(
          Xe(
            i.filter((s) => ss(s)),
            "offsetLeft"
          )
        ),
        []
      );
    }
    function Or() {
      return new Promise((t) => requestAnimationFrame(t));
    }
    function Dr(t) {
      return new Promise((e) => setTimeout(e, t));
    }
    async function Br(t, e, i) {
      await xn();
      let s = T(e);
      const n = s.map((d) => bn(d, !0)), o = { ...c(e, ["height", "padding"]), display: "block" };
      await Promise.all(s.concat(e).map(E.cancel)), t(), s = s.concat(T(e).filter((d) => !m(s, d))), await Promise.resolve(), J.flush();
      const r = p(e, "style"), a = c(e, ["height", "padding"]), [l, h] = Mr(e, s, n), u = s.map((d) => ({ style: p(d, "style") }));
      s.forEach((d, g) => h[g] && c(d, h[g])), c(e, o), v(e, "scroll"), J.flush(), await xn();
      const f = s.map((d, g) => _(d) === e && E.start(d, l[g], i, "ease")).concat(E.start(e, a, i, "ease"));
      try {
        await Promise.all(f), s.forEach((d, g) => {
          p(d, u[g]), _(d) === e && c(d, "display", l[g].opacity === 0 ? "none" : "");
        }), p(e, "style", r);
      } catch {
        p(s, "style", ""), Nr(e, o);
      }
    }
    function bn(t, e) {
      const i = c(t, "zIndex");
      return R(t) ? {
        display: "",
        opacity: e ? c(t, "opacity") : "0",
        pointerEvents: "none",
        position: "absolute",
        zIndex: i === "auto" ? re(t) : i,
        ...$n(t)
      } : !1;
    }
    function Mr(t, e, i) {
      const s = e.map(
        (o, r) => _(o) && r in i ? i[r] ? R(o) ? $n(o) : { opacity: 0 } : { opacity: R(o) ? 1 : 0 } : !1
      ), n = s.map((o, r) => {
        const a = _(e[r]) === t && (i[r] || bn(e[r]));
        if (!a)
          return !1;
        if (!o)
          delete a.opacity;
        else if (!("opacity" in o)) {
          const { opacity: l } = a;
          l % 1 ? o.opacity = 1 : delete a.opacity;
        }
        return a;
      });
      return [s, n];
    }
    function Nr(t, e) {
      for (const i in e)
        c(t, i, "");
    }
    function $n(t) {
      const { height: e, width: i } = A(t);
      return {
        height: e,
        width: i,
        transform: "",
        ...Ji(t),
        ...c(t, ["marginTop", "marginLeft"])
      };
    }
    function xn() {
      return new Promise((t) => requestAnimationFrame(t));
    }
    var yn = {
      props: {
        duration: Number,
        animation: Boolean
      },
      data: {
        duration: 150,
        animation: "slide"
      },
      methods: {
        animate(t, e = this.$el) {
          const i = this.animation;
          return (i === "fade" ? mn : i === "delayed-fade" ? (...n) => mn(...n, 40) : i ? Br : () => (t(), Promise.resolve()))(t, e, this.duration).catch(S);
        }
      }
    };
    const I = {
      TAB: 9,
      ESC: 27,
      SPACE: 32,
      END: 35,
      HOME: 36,
      LEFT: 37,
      UP: 38,
      RIGHT: 39,
      DOWN: 40
    };
    var zr = {
      mixins: [yn],
      args: "target",
      props: {
        target: String,
        selActive: Boolean
      },
      data: {
        target: "",
        selActive: !1,
        attrItem: "uk-filter-control",
        cls: "uk-active",
        duration: 250
      },
      computed: {
        toggles({ attrItem: t }, e) {
          return z(`[${t}],[data-${t}]`, e);
        },
        children({ target: t }, e) {
          return z(`${t} > *`, e);
        }
      },
      watch: {
        toggles(t) {
          this.updateState();
          const e = z(this.selActive, this.$el);
          for (const i of t) {
            this.selActive !== !1 && q(i, this.cls, m(e, i));
            const s = jr(i);
            G(s, "a") && p(s, "role", "button");
          }
        },
        children(t, e) {
          e && this.updateState();
        }
      },
      events: {
        name: "click keydown",
        delegate() {
          return `[${this.attrItem}],[data-${this.attrItem}]`;
        },
        handler(t) {
          t.type === "keydown" && t.keyCode !== I.SPACE || U(t.target, "a,button") && (t.preventDefault(), this.apply(t.current));
        }
      },
      methods: {
        apply(t) {
          const e = this.getState(), i = Sn(t, this.attrItem, this.getState());
          Fr(e, i) || this.setState(i);
        },
        getState() {
          return this.toggles.filter((t) => P(t, this.cls)).reduce((t, e) => Sn(e, this.attrItem, t), {
            filter: { "": "" },
            sort: []
          });
        },
        async setState(t, e = !0) {
          t = { filter: { "": "" }, sort: [], ...t }, v(this.$el, "beforeFilter", [this, t]);
          for (const i of this.toggles)
            q(i, this.cls, Lr(i, this.attrItem, t));
          await Promise.all(
            z(this.target, this.$el).map((i) => {
              const s = () => {
                Hr(t, i, T(i)), this.$update(this.$el);
              };
              return e ? this.animate(s, i) : s();
            })
          ), v(this.$el, "afterFilter", [this]);
        },
        updateState() {
          J.write(() => this.setState(this.getState(), !1));
        }
      }
    };
    function kn(t, e) {
      return Oe(tt(t, e), ["filter"]);
    }
    function Fr(t, e) {
      return ["filter", "sort"].every((i) => Ge(t[i], e[i]));
    }
    function Hr(t, e, i) {
      const s = Wr(t);
      i.forEach((r) => c(r, "display", s && !C(r, s) ? "none" : ""));
      const [n, o] = t.sort;
      if (n) {
        const r = Rr(i, n, o);
        Ge(r, i) || L(e, r);
      }
    }
    function Sn(t, e, i) {
      const { filter: s, group: n, sort: o, order: r = "asc" } = kn(t, e);
      return (s || Y(o)) && (n ? s ? (delete i.filter[""], i.filter[n] = s) : (delete i.filter[n], (be(i.filter) || "" in i.filter) && (i.filter = { "": s || "" })) : i.filter = { "": s || "" }), Y(o) || (i.sort = [o, r]), i;
    }
    function Lr(t, e, { filter: i = { "": "" }, sort: [s, n] }) {
      const { filter: o = "", group: r = "", sort: a, order: l = "asc" } = kn(t, e);
      return Y(a) ? r in i && o === i[r] || !o && r && !(r in i) && !i[""] : s === a && n === l;
    }
    function Wr({ filter: t }) {
      let e = "";
      return Pt(t, (i) => e += i || ""), e;
    }
    function Rr(t, e, i) {
      return [...t].sort(
        (s, n) => tt(s, e).localeCompare(tt(n, e), void 0, { numeric: !0 }) * (i === "asc" || -1)
      );
    }
    function jr(t) {
      return w("a,button", t) || t;
    }
    var Ne = {
      props: {
        container: Boolean
      },
      data: {
        container: !0
      },
      computed: {
        container({ container: t }) {
          return t === !0 && this.$container || t && w(t);
        }
      }
    };
    let us;
    function In(t) {
      const e = x(
        t,
        "touchmove",
        (s) => {
          if (s.targetTouches.length !== 1 || C(s.target, 'input[type="range"'))
            return;
          let { scrollHeight: n, clientHeight: o } = Ct(s.target);
          o >= n && s.cancelable && s.preventDefault();
        },
        { passive: !1 }
      );
      if (us)
        return e;
      us = !0;
      const { scrollingElement: i } = document;
      return c(i, {
        overflowY: CSS.supports("overflow", "clip") ? "clip" : "hidden",
        touchAction: "none",
        paddingRight: Ee(window) - i.clientWidth || ""
      }), () => {
        us = !1, e(), c(i, { overflowY: "", touchAction: "", paddingRight: "" });
      };
    }
    var qt = {
      props: {
        cls: Boolean,
        animation: "list",
        duration: Number,
        velocity: Number,
        origin: String,
        transition: String
      },
      data: {
        cls: !1,
        animation: [!1],
        duration: 200,
        velocity: 0.2,
        origin: !1,
        transition: "ease",
        clsEnter: "uk-togglabe-enter",
        clsLeave: "uk-togglabe-leave"
      },
      computed: {
        hasAnimation({ animation: t }) {
          return !!t[0];
        },
        hasTransition({ animation: t }) {
          return ["slide", "reveal"].some((e) => ot(t[0], e));
        }
      },
      methods: {
        async toggleElement(t, e, i) {
          try {
            return await Promise.all(
              k(t).map((s) => {
                const n = ie(e) ? e : !this.isToggled(s);
                if (!v(s, `before${n ? "show" : "hide"}`, [this]))
                  return Promise.reject();
                const o = (it(i) ? i : i === !1 || !this.hasAnimation ? qr : this.hasTransition ? Ur : Vr)(s, n, this), r = n ? this.clsEnter : this.clsLeave;
                y(s, r), v(s, n ? "show" : "hide", [this]);
                const a = () => {
                  M(s, r), v(s, n ? "shown" : "hidden", [this]);
                };
                return o ? o.then(a, () => (M(s, r), Promise.reject())) : a();
              })
            ), !0;
          } catch {
            return !1;
          }
        },
        isToggled(t = this.$el) {
          return t = H(t), P(t, this.clsEnter) ? !0 : P(t, this.clsLeave) ? !1 : this.cls ? P(t, this.cls.split(" ")[0]) : R(t);
        },
        _toggle(t, e) {
          if (!t)
            return;
          e = !!e;
          let i;
          this.cls ? (i = m(this.cls, " ") || e !== P(t, this.cls), i && q(t, this.cls, m(this.cls, " ") ? void 0 : e)) : (i = e === t.hidden, i && (t.hidden = !e)), z("[autofocus]", t).some((s) => R(s) ? s.focus() || !0 : s.blur()), i && v(t, "toggled", [e, this]);
        }
      }
    };
    function qr(t, e, { _toggle: i }) {
      return gt.cancel(t), E.cancel(t), i(t, e);
    }
    async function Ur(t, e, { animation: i, duration: s, velocity: n, transition: o, _toggle: r }) {
      var a;
      const [l = "reveal", h = "top"] = ((a = i[0]) == null ? void 0 : a.split("-")) || [], u = [
        ["left", "right"],
        ["top", "bottom"]
      ], f = u[m(u[0], h) ? 0 : 1], d = f[1] === h, O = ["width", "height"][u.indexOf(f)], N = `margin-${f[0]}`, F = `margin-${h}`;
      let Ot = b(t)[O];
      const Ts = E.inProgress(t);
      await E.cancel(t), e && r(t, !0);
      const Xh = Object.fromEntries(
        [
          "padding",
          "border",
          "width",
          "height",
          "minWidth",
          "minHeight",
          "overflowY",
          "overflowX",
          N,
          F
        ].map((zo) => [zo, t.style[zo]])
      ), Ue = b(t), Es = $(c(t, N)), Bo = $(c(t, F)), Jt = Ue[O] + Bo;
      !Ts && !e && (Ot += Bo);
      const [_i] = Xi(t, "<div>");
      c(_i, {
        boxSizing: "border-box",
        height: Ue.height,
        width: Ue.width,
        ...c(t, [
          "overflow",
          "padding",
          "borderTop",
          "borderRight",
          "borderBottom",
          "borderLeft",
          "borderImage",
          F
        ])
      }), c(t, {
        padding: 0,
        border: 0,
        minWidth: 0,
        minHeight: 0,
        [F]: 0,
        width: Ue.width,
        height: Ue.height,
        overflow: "hidden",
        [O]: Ot
      });
      const Mo = Ot / Jt;
      s = (n * Jt + s) * (e ? 1 - Mo : Mo);
      const No = { [O]: e ? Jt : 0 };
      d && (c(t, N, Jt - Ot + Es), No[N] = e ? Es : Jt + Es), !d ^ l === "reveal" && (c(_i, N, -Jt + Ot), E.start(_i, { [N]: e ? 0 : -Jt }, s, o));
      try {
        await E.start(t, No, s, o);
      } finally {
        c(t, Xh), Te(_i.firstChild), e || r(t, !1);
      }
    }
    function Vr(t, e, i) {
      gt.cancel(t);
      const { animation: s, duration: n, _toggle: o } = i;
      return e ? (o(t, !0), gt.in(t, s[0], n, i.origin)) : gt.out(t, s[1] || s[0], n, i.origin).then(
        () => o(t, !1)
      );
    }
    const nt = [];
    var fs = {
      mixins: [st, Ne, qt],
      props: {
        selPanel: String,
        selClose: String,
        escClose: Boolean,
        bgClose: Boolean,
        stack: Boolean,
        role: String
      },
      data: {
        cls: "uk-open",
        escClose: !0,
        bgClose: !0,
        overlay: !0,
        stack: !1,
        role: "dialog"
      },
      computed: {
        panel({ selPanel: t }, e) {
          return w(t, e);
        },
        transitionElement() {
          return this.panel;
        },
        bgClose({ bgClose: t }) {
          return t && this.panel;
        }
      },
      connected() {
        p(this.panel || this.$el, "role", this.role), this.overlay && p(this.panel || this.$el, "aria-modal", !0);
      },
      beforeDisconnect() {
        m(nt, this) && this.toggleElement(this.$el, !1, !1);
      },
      events: [
        {
          name: "click",
          delegate() {
            return `${this.selClose},a[href*="#"]`;
          },
          handler(t) {
            const { current: e, defaultPrevented: i } = t, { hash: s } = e;
            !i && s && ae(e) && !B(s, this.$el) && w(s, document.body) ? this.hide() : C(e, this.selClose) && (t.preventDefault(), this.hide());
          }
        },
        {
          name: "toggle",
          self: !0,
          handler(t) {
            t.defaultPrevented || (t.preventDefault(), this.isToggled() === m(nt, this) && this.toggle());
          }
        },
        {
          name: "beforeshow",
          self: !0,
          handler(t) {
            if (m(nt, this))
              return !1;
            !this.stack && nt.length ? (Promise.all(nt.map((e) => e.hide())).then(this.show), t.preventDefault()) : nt.push(this);
          }
        },
        {
          name: "show",
          self: !0,
          handler() {
            this.stack && c(this.$el, "zIndex", $(c(this.$el, "zIndex")) + nt.length);
            const t = [
              this.overlay && Gr(this),
              this.overlay && In(this.$el),
              this.bgClose && Xr(this),
              this.escClose && Jr(this)
            ];
            j(
              this.$el,
              "hidden",
              () => t.forEach((e) => e && e()),
              { self: !0 }
            ), y(document.documentElement, this.clsPage);
          }
        },
        {
          name: "shown",
          self: !0,
          handler() {
            Ze(this.$el) || p(this.$el, "tabindex", "-1"), C(this.$el, ":focus-within") || this.$el.focus();
          }
        },
        {
          name: "hidden",
          self: !0,
          handler() {
            m(nt, this) && nt.splice(nt.indexOf(this), 1), c(this.$el, "zIndex", ""), nt.some((t) => t.clsPage === this.clsPage) || M(document.documentElement, this.clsPage);
          }
        }
      ],
      methods: {
        toggle() {
          return this.isToggled() ? this.hide() : this.show();
        },
        show() {
          return this.container && _(this.$el) !== this.container ? (L(this.container, this.$el), new Promise(
            (t) => requestAnimationFrame(() => this.show().then(t))
          )) : this.toggleElement(this.$el, !0, Cn);
        },
        hide() {
          return this.toggleElement(this.$el, !1, Cn);
        }
      }
    };
    function Cn(t, e, { transitionElement: i, _toggle: s }) {
      return new Promise(
        (n, o) => j(t, "show hide", () => {
          var r;
          (r = t._reject) == null || r.call(t), t._reject = o, s(t, e);
          const a = j(
            i,
            "transitionstart",
            () => {
              j(i, "transitionend transitioncancel", n, {
                self: !0
              }), clearTimeout(l);
            },
            { self: !0 }
          ), l = setTimeout(
            () => {
              a(), n();
            },
            Yr(c(i, "transitionDuration"))
          );
        })
      ).then(() => delete t._reject);
    }
    function Yr(t) {
      return t ? Zt(t, "ms") ? $(t) : $(t) * 1e3 : 0;
    }
    function Gr(t) {
      return x(document, "focusin", (e) => {
        ne(nt) === t && !B(e.target, t.$el) && t.$el.focus();
      });
    }
    function Xr(t) {
      return x(document, mt, ({ target: e }) => {
        ne(nt) !== t || t.overlay && !B(e, t.$el) || B(e, t.panel) || j(
          document,
          `${_t} ${ri} scroll`,
          ({ defaultPrevented: i, type: s, target: n }) => {
            !i && s === _t && e === n && t.hide();
          },
          !0
        );
      });
    }
    function Jr(t) {
      return x(document, "keydown", (e) => {
        e.keyCode === 27 && ne(nt) === t && t.hide();
      });
    }
    var ds = {
      slide: {
        show(t) {
          return [{ transform: W(t * -100) }, { transform: W() }];
        },
        percent(t) {
          return ze(t);
        },
        translate(t, e) {
          return [
            { transform: W(e * -100 * t) },
            { transform: W(e * 100 * (1 - t)) }
          ];
        }
      }
    };
    function ze(t) {
      return Math.abs(c(t, "transform").split(",")[4] / t.offsetWidth) || 0;
    }
    function W(t = 0, e = "%") {
      return t += t ? e : "", `translate3d(${t}, 0, 0)`;
    }
    function de(t) {
      return `scale3d(${t}, ${t}, 1)`;
    }
    function Kr(t, e, i, { animation: s, easing: n }) {
      const { percent: o, translate: r, show: a = S } = s, l = a(i);
      let h;
      return {
        dir: i,
        show(u, f = 0, d) {
          const g = d ? "linear" : n;
          return u -= Math.round(u * Z(f, -1, 1)), this.translate(f), pi(e, "itemin", { percent: f, duration: u, timing: g, dir: i }), pi(t, "itemout", { percent: 1 - f, duration: u, timing: g, dir: i }), new Promise((O) => {
            h || (h = O), Promise.all([
              E.start(e, l[1], u, g),
              E.start(t, l[0], u, g)
            ]).then(() => {
              this.reset(), h();
            }, S);
          });
        },
        cancel() {
          return E.cancel([e, t]);
        },
        reset() {
          for (const u in l[0])
            c([e, t], u, "");
        },
        async forward(u, f = this.percent()) {
          return await this.cancel(), this.show(u, f, !0);
        },
        translate(u) {
          this.reset();
          const f = r(u, i);
          c(e, f[1]), c(t, f[0]), pi(e, "itemtranslatein", { percent: u, dir: i }), pi(t, "itemtranslateout", { percent: 1 - u, dir: i });
        },
        percent() {
          return o(t || e, e, i);
        },
        getDistance() {
          return t == null ? void 0 : t.offsetWidth;
        }
      };
    }
    function pi(t, e, i) {
      v(t, Mt(e, !1, !1, i));
    }
    var gi = {
      props: {
        i18n: Object
      },
      data: {
        i18n: null
      },
      methods: {
        t(t, ...e) {
          var i, s, n;
          let o = 0;
          return ((n = ((i = this.i18n) == null ? void 0 : i[t]) || ((s = this.$options.i18n) == null ? void 0 : s[t])) == null ? void 0 : n.replace(
            /%s/g,
            () => e[o++] || ""
          )) || "";
        }
      }
    }, Zr = {
      props: {
        autoplay: Boolean,
        autoplayInterval: Number,
        pauseOnHover: Boolean
      },
      data: {
        autoplay: !1,
        autoplayInterval: 7e3,
        pauseOnHover: !0
      },
      connected() {
        p(this.list, "aria-live", this.autoplay ? "off" : "polite"), this.autoplay && this.startAutoplay();
      },
      disconnected() {
        this.stopAutoplay();
      },
      update() {
        p(this.slides, "tabindex", "-1");
      },
      events: [
        {
          name: "visibilitychange",
          el() {
            return document;
          },
          filter() {
            return this.autoplay;
          },
          handler() {
            document.hidden ? this.stopAutoplay() : this.startAutoplay();
          }
        }
      ],
      methods: {
        startAutoplay() {
          this.stopAutoplay(), this.interval = setInterval(() => {
            this.stack.length || this.draggable && C(this.$el, ":focus-within") || this.pauseOnHover && C(this.$el, ":hover") || this.show("next");
          }, this.autoplayInterval);
        },
        stopAutoplay() {
          clearInterval(this.interval);
        }
      }
    };
    const ps = { passive: !1, capture: !0 }, Tn = { passive: !0, capture: !0 }, Qr = "touchstart mousedown", gs = "touchmove mousemove", En = "touchend touchcancel mouseup click input scroll";
    var ta = {
      props: {
        draggable: Boolean
      },
      data: {
        draggable: !0,
        threshold: 10
      },
      created() {
        for (const t of ["start", "move", "end"]) {
          const e = this[t];
          this[t] = (i) => {
            const s = le(i).x * (X ? -1 : 1);
            this.prevPos = s === this.pos ? this.prevPos : this.pos, this.pos = s, e(i);
          };
        }
      },
      events: [
        {
          name: Qr,
          passive: !0,
          delegate() {
            return `${this.selList} > *`;
          },
          handler(t) {
            !this.draggable || !St(t) && ea(t.target) || U(t.target, xe) || t.button > 0 || this.length < 2 || this.start(t);
          }
        },
        {
          name: "dragstart",
          handler(t) {
            t.preventDefault();
          }
        },
        {
          // iOS workaround for slider stopping if swiping fast
          name: gs,
          el() {
            return this.list;
          },
          handler: S,
          ...ps
        }
      ],
      methods: {
        start() {
          this.drag = this.pos, this._transitioner ? (this.percent = this._transitioner.percent(), this.drag += this._transitioner.getDistance() * this.percent * this.dir, this._transitioner.cancel(), this._transitioner.translate(this.percent), this.dragging = !0, this.stack = []) : this.prevIndex = this.index, x(document, gs, this.move, ps), x(document, En, this.end, Tn), c(this.list, "userSelect", "none");
        },
        move(t) {
          const e = this.pos - this.drag;
          if (e === 0 || this.prevPos === this.pos || !this.dragging && Math.abs(e) < this.threshold)
            return;
          c(this.list, "pointerEvents", "none"), t.cancelable && t.preventDefault(), this.dragging = !0, this.dir = e < 0 ? 1 : -1;
          let { slides: i, prevIndex: s } = this, n = Math.abs(e), o = this.getIndex(s + this.dir), r = this._getDistance(s, o);
          for (; o !== s && n > r; )
            this.drag -= r * this.dir, s = o, n -= r, o = this.getIndex(s + this.dir), r = this._getDistance(s, o);
          this.percent = n / r;
          const a = i[s], l = i[o], h = this.index !== o, u = s === o;
          let f;
          for (const d of [this.index, this.prevIndex])
            m([o, s], d) || (v(i[d], "itemhidden", [this]), u && (f = !0, this.prevIndex = s));
          (this.index === s && this.prevIndex !== s || f) && v(i[this.index], "itemshown", [this]), h && (this.prevIndex = s, this.index = o, !u && v(a, "beforeitemhide", [this]), v(l, "beforeitemshow", [this])), this._transitioner = this._translate(Math.abs(this.percent), a, !u && l), h && (!u && v(a, "itemhide", [this]), v(l, "itemshow", [this]));
        },
        end() {
          if (Bt(document, gs, this.move, ps), Bt(document, En, this.end, Tn), this.dragging)
            if (this.dragging = null, this.index === this.prevIndex)
              this.percent = 1 - this.percent, this.dir *= -1, this._show(!1, this.index, !0), this._transitioner = null;
            else {
              const t = (X ? this.dir * (X ? 1 : -1) : this.dir) < 0 == this.prevPos > this.pos;
              this.index = t ? this.index : this.prevIndex, t && (this.percent = 1 - this.percent), this.show(
                this.dir > 0 && !t || this.dir < 0 && t ? "next" : "previous",
                !0
              );
            }
          c(this.list, { userSelect: "", pointerEvents: "" }), this.drag = this.percent = null;
        },
        _getDistance(t, e) {
          return this._getTransitioner(t, t !== e && e).getDistance() || this.slides[t].offsetWidth;
        }
      }
    };
    function ea(t) {
      return c(t, "userSelect") !== "none" && Qt(t.childNodes).some((e) => e.nodeType === 3 && e.textContent.trim());
    }
    function ia(t) {
      t._data = {}, t._updates = [...t.$options.update || []];
    }
    function sa(t, e) {
      t._updates.unshift(e);
    }
    function na(t) {
      delete t._data;
    }
    function mi(t, e = "update") {
      t._connected && t._updates.length && (t._queued || (t._queued = /* @__PURE__ */ new Set(), J.read(() => {
        t._connected && oa(t, t._queued), delete t._queued;
      })), t._queued.add(e.type || e));
    }
    function oa(t, e) {
      for (const { read: i, write: s, events: n = [] } of t._updates) {
        if (!e.has("update") && !n.some((r) => e.has(r)))
          continue;
        let o;
        i && (o = i.call(t, t._data, e), o && yt(o) && wt(t._data, o)), s && o !== !1 && J.write(() => {
          t._connected && s.call(t, t._data, e);
        });
      }
    }
    function ra(t) {
      t._watches = [];
      for (const e of t.$options.watch || [])
        for (const [i, s] of Object.entries(e))
          Pn(t, s, i);
      t._initial = !0;
    }
    function Pn(t, e, i) {
      t._watches.push({
        name: i,
        ...yt(e) ? e : { handler: e }
      });
    }
    function aa(t, e) {
      for (const { name: i, handler: s, immediate: n = !0 } of t._watches)
        (t._initial && n || vt(e, i) && !Ge(e[i], t[i])) && s.call(t, t[i], e[i]);
      t._initial = !1;
    }
    function la(t) {
      const { computed: e } = t.$options;
      if (t._computed = {}, e)
        for (const i in e)
          _n(t, i, e[i]);
    }
    function _n(t, e, i) {
      t._hasComputed = !0, Object.defineProperty(t, e, {
        enumerable: !0,
        get() {
          const { _computed: s, $props: n, $el: o } = t;
          return vt(s, e) || (s[e] = (i.get || i).call(t, n, o)), s[e];
        },
        set(s) {
          const { _computed: n } = t;
          n[e] = i.set ? i.set.call(t, s) : s, Y(n[e]) && delete n[e];
        }
      });
    }
    function ha(t) {
      t._hasComputed && (sa(t, {
        read: () => aa(t, An(t)),
        events: ["resize", "computed"]
      }), ua(), Fe.add(t));
    }
    function ca(t) {
      Fe == null || Fe.delete(t), An(t);
    }
    function An(t) {
      const e = { ...t._computed };
      return t._computed = {}, e;
    }
    let ms, Fe;
    function ua() {
      ms || (Fe = /* @__PURE__ */ new Set(), ms = new MutationObserver(() => {
        for (const t of Fe)
          mi(t, "computed");
      }), ms.observe(document, {
        childList: !0,
        subtree: !0
      }));
    }
    function fa(t) {
      t._events = [];
      for (const e of t.$options.events || [])
        if (vt(e, "handler"))
          vs(t, e);
        else
          for (const i in e)
            vs(t, e[i], i);
    }
    function da(t) {
      t._events.forEach((e) => e()), delete t._events;
    }
    function vs(t, e, i) {
      let { name: s, el: n, handler: o, capture: r, passive: a, delegate: l, filter: h, self: u } = yt(e) ? e : { name: i, handler: e };
      if (n = it(n) ? n.call(t, t) : n || t.$el, Q(n)) {
        n.forEach((f) => vs(t, { ...e, el: f }, i));
        return;
      }
      !n || h && !h.call(t) || t._events.push(
        x(
          n,
          s,
          l ? D(l) ? l : l.call(t, t) : null,
          D(o) ? t[o] : o.bind(t),
          { passive: a, capture: r, self: u }
        )
      );
    }
    function pa(t) {
      t._observers = [];
      for (const e of t.$options.observe || [])
        if (vt(e, "handler"))
          Dn(t, e);
        else
          for (const i of e)
            Dn(t, i);
    }
    function On(t, ...e) {
      t._observers.push(...e);
    }
    function ga(t) {
      for (const e of t._observers)
        e.disconnect();
    }
    function Dn(t, e) {
      let { observe: i, target: s = t.$el, handler: n, options: o, filter: r, args: a } = e;
      if (r && !r.call(t, t))
        return;
      const l = `_observe${t._observers.length}`;
      it(s) && !vt(t, l) && _n(t, l, () => s.call(t, t)), n = D(n) ? t[n] : n.bind(t), it(o) && (o = o.call(t, t));
      const h = vt(t, l) ? t[l] : s, u = i(h, n, o, a);
      it(s) && Q(t[l]) && u.unobserve && Pn(t, { handler: ma(u), immediate: !1 }, l), On(t, u);
    }
    function ma(t) {
      return (e, i) => {
        for (const s of i)
          !m(e, s) && t.unobserve(s);
        for (const s of e)
          !m(i, s) && t.observe(s);
      };
    }
    function va(t) {
      const e = Bn(t.$options);
      for (let s in e)
        Y(e[s]) || (t.$props[s] = e[s]);
      const i = [t.$options.computed, t.$options.methods];
      for (let s in t.$props)
        s in e && wa(i, s) && (t[s] = t.$props[s]);
    }
    function Bn(t) {
      const e = {}, { args: i = [], props: s = {}, el: n, id: o } = t;
      if (!s)
        return e;
      for (const a in s) {
        const l = Kt(a);
        let h = tt(n, l);
        Y(h) || (h = s[a] === Boolean && h === "" ? !0 : as(s[a], h), !(l === "target" && ot(h, "_")) && (e[a] = h));
      }
      const r = Oe(tt(n, o), i);
      for (const a in r) {
        const l = ve(a);
        Y(s[l]) || (e[l] = as(s[l], r[a]));
      }
      return e;
    }
    function wa(t, e) {
      return t.every((i) => !i || !vt(i, e));
    }
    function ba(t) {
      const { $options: e, $props: i } = t, { id: s, props: n, el: o } = e;
      if (!n)
        return;
      const r = Object.keys(n), a = r.map((h) => Kt(h)).concat(s), l = new MutationObserver((h) => {
        const u = Bn(e);
        h.some(({ attributeName: f }) => {
          const d = f.replace("data-", "");
          return (d === s ? r : [ve(d), ve(f)]).some(
            (g) => !Y(u[g]) && u[g] !== i[g]
          );
        }) && t.$reset();
      });
      l.observe(o, {
        attributes: !0,
        attributeFilter: a.concat(a.map((h) => `data-${h}`))
      }), On(t, l);
    }
    function pe(t, e) {
      var i;
      (i = t.$options[e]) == null || i.forEach((s) => s.call(t));
    }
    function ws(t) {
      t._connected || (va(t), pe(t, "beforeConnect"), t._connected = !0, fa(t), ia(t), ra(t), pa(t), ba(t), ha(t), pe(t, "connected"), mi(t));
    }
    function bs(t) {
      t._connected && (pe(t, "beforeDisconnect"), da(t), na(t), ga(t), ca(t), pe(t, "disconnected"), t._connected = !1);
    }
    let $a = 0;
    function Mn(t, e = {}) {
      e.data = ka(e, t.constructor.options), t.$options = Ae(t.constructor.options, e, t), t.$props = {}, t._uid = $a++, xa(t), ya(t), la(t), pe(t, "created"), e.el && t.$mount(e.el);
    }
    function xa(t) {
      const { data: e = {} } = t.$options;
      for (const i in e)
        t.$props[i] = t[i] = e[i];
    }
    function ya(t) {
      const { methods: e } = t.$options;
      if (e)
        for (const i in e)
          t[i] = e[i].bind(t);
    }
    function ka({ data: t = {} }, { args: e = [], props: i = {} }) {
      Q(t) && (t = t.slice(0, e.length).reduce((s, n, o) => (yt(n) ? wt(s, n) : s[e[o]] = n, s), {}));
      for (const s in t)
        Y(t[s]) ? delete t[s] : i[s] && (t[s] = as(i[s], t[s]));
      return t;
    }
    const ft = function(t) {
      Mn(this, t);
    };
    ft.util = kr, ft.options = {}, ft.version = "3.16.26";
    const Sa = "uk-", Ut = "__uikit__", ge = {};
    function Nn(t, e) {
      var i;
      const s = Sa + Kt(t);
      if (!e)
        return yt(ge[s]) && (ge[s] = ft.extend(ge[s])), ge[s];
      t = ve(t), ft[t] = (o, r) => He(t, o, r);
      const n = yt(e) ? { ...e } : e.options;
      return n.id = s, n.name = t, (i = n.install) == null || i.call(n, ft, n, t), ft._initialized && !n.functional && requestAnimationFrame(() => He(t, `[${s}],[data-${s}]`)), ge[s] = n;
    }
    function He(t, e, i, ...s) {
      const n = Nn(t);
      return n.options.functional ? new n({ data: yt(e) ? e : [e, i, ...s] }) : e ? z(e).map(o)[0] : o();
      function o(r) {
        const a = vi(r, t);
        if (a)
          if (i)
            a.$destroy();
          else
            return a;
        return new n({ el: r, data: i });
      }
    }
    function Vt(t) {
      return (t == null ? void 0 : t[Ut]) || {};
    }
    function vi(t, e) {
      return Vt(t)[e];
    }
    function Ia(t, e) {
      t[Ut] || (t[Ut] = {}), t[Ut][e.$options.name] = e;
    }
    function Ca(t, e) {
      var i;
      (i = t[Ut]) == null || delete i[e.$options.name], be(t[Ut]) || delete t[Ut];
    }
    function Ta(t) {
      t.component = Nn, t.getComponents = Vt, t.getComponent = vi, t.update = zn, t.use = function(i) {
        if (!i.installed)
          return i.call(null, this), i.installed = !0, this;
      }, t.mixin = function(i, s) {
        s = (D(s) ? this.component(s) : s) || this, s.options = Ae(s.options, i);
      }, t.extend = function(i) {
        i || (i = {});
        const s = this, n = function(r) {
          Mn(this, r);
        };
        return n.prototype = Object.create(s.prototype), n.prototype.constructor = n, n.options = Ae(s.options, i), n.super = s, n.extend = s.extend, n;
      };
      let e;
      Object.defineProperty(t, "container", {
        get() {
          return e || document.body;
        },
        set(i) {
          e = w(i);
        }
      });
    }
    function zn(t, e) {
      t = t ? H(t) : document.body;
      for (const i of oe(t).reverse())
        Fn(i, e);
      It(t, (i) => Fn(i, e));
    }
    function Fn(t, e) {
      const i = Vt(t);
      for (const s in i)
        mi(i[s], e);
    }
    function Ea(t) {
      t.prototype.$mount = function(e) {
        const i = this;
        Ia(e, i), i.$options.el = e, B(e, document) && ws(i);
      }, t.prototype.$destroy = function(e = !1) {
        const i = this, { el: s } = i.$options;
        s && bs(i), pe(i, "destroy"), Ca(s, i), e && lt(i.$el);
      }, t.prototype.$create = He, t.prototype.$emit = function(e) {
        mi(this, e);
      }, t.prototype.$update = function(e = this.$el, i) {
        zn(e, i);
      }, t.prototype.$reset = function() {
        bs(this), ws(this);
      }, t.prototype.$getComponent = vi, Object.defineProperties(t.prototype, {
        $el: {
          get() {
            return this.$options.el;
          }
        },
        $container: Object.getOwnPropertyDescriptor(t, "container")
      });
    }
    function At(t, e = t.$el, i = "") {
      if (e.id)
        return e.id;
      let s = `${t.$options.id}-${t._uid}${i}`;
      return w(`#${s}`) && (s = At(t, e, `${i}-2`)), s;
    }
    var Pa = {
      i18n: {
        next: "Next slide",
        previous: "Previous slide",
        slideX: "Slide %s",
        slideLabel: "%s of %s",
        role: "String"
      },
      data: {
        selNav: !1,
        role: "region"
      },
      computed: {
        nav({ selNav: t }, e) {
          return w(t, e);
        },
        navChildren() {
          return T(this.nav);
        },
        selNavItem({ attrItem: t }) {
          return `[${t}],[data-${t}]`;
        },
        navItems(t, e) {
          return z(this.selNavItem, e);
        }
      },
      watch: {
        nav(t, e) {
          p(t, "role", "tablist"), e && this.$emit();
        },
        list(t) {
          p(t, "role", "presentation");
        },
        navChildren(t) {
          p(t, "role", "presentation");
        },
        navItems(t) {
          for (const e of t) {
            const i = tt(e, this.attrItem), s = w("a,button", e) || e;
            let n, o = null;
            if (bt(i)) {
              const r = kt(i), a = this.slides[r];
              a && (a.id || (a.id = At(this, a, `-item-${i}`)), o = a.id), n = this.t("slideX", $(i) + 1), p(s, "role", "tab");
            } else
              this.list && (this.list.id || (this.list.id = At(this, this.list, "-items")), o = this.list.id), n = this.t(i);
            p(s, {
              "aria-controls": o,
              "aria-label": p(s, "aria-label") || n
            });
          }
        },
        slides(t) {
          t.forEach(
            (e, i) => p(e, {
              role: this.nav ? "tabpanel" : "group",
              "aria-label": this.t("slideLabel", i + 1, this.length),
              "aria-roledescription": this.nav ? null : "slide"
            })
          );
        },
        length(t) {
          const e = this.navChildren.length;
          if (this.nav && t !== e) {
            Gi(this.nav);
            for (let i = 0; i < t; i++)
              L(this.nav, `<li ${this.attrItem}="${i}"><a href></a></li>`);
          }
        }
      },
      connected() {
        p(this.$el, {
          role: this.role,
          "aria-roledescription": "carousel"
        });
      },
      update: [
        {
          write() {
            this.navItems.concat(this.nav).forEach((t) => t && (t.hidden = !this.maxIndex)), this.updateNav();
          },
          events: ["resize"]
        }
      ],
      events: [
        {
          name: "click keydown",
          delegate() {
            return this.selNavItem;
          },
          handler(t) {
            U(t.target, "a,button") && (t.type === "click" || t.keyCode === I.SPACE) && (t.preventDefault(), this.show(tt(t.current, this.attrItem)));
          }
        },
        {
          name: "itemshow",
          handler: "updateNav"
        },
        {
          name: "keydown",
          delegate() {
            return this.selNavItem;
          },
          handler(t) {
            const { current: e, keyCode: i } = t, s = tt(e, this.attrItem);
            if (!bt(s))
              return;
            let n = i === I.HOME ? 0 : i === I.END ? "last" : i === I.LEFT ? "previous" : i === I.RIGHT ? "next" : -1;
            ~n && (t.preventDefault(), this.show(n));
          }
        }
      ],
      methods: {
        updateNav() {
          const t = this.getValidIndex();
          for (const e of this.navItems) {
            const i = tt(e, this.attrItem), s = w("a,button", e) || e;
            if (bt(i)) {
              const o = kt(i) === t;
              q(e, this.clsActive, o), p(s, {
                "aria-selected": o,
                tabindex: o ? null : -1
              }), o && s && C(_(e), ":focus-within") && s.focus();
            } else
              q(
                e,
                "uk-invisible",
                this.finite && (i === "previous" && t === 0 || i === "next" && t >= this.maxIndex)
              );
          }
        }
      }
    }, Hn = {
      mixins: [Zr, ta, Pa, gi],
      props: {
        clsActivated: Boolean,
        easing: String,
        index: Number,
        finite: Boolean,
        velocity: Number
      },
      data: () => ({
        easing: "ease",
        finite: !1,
        velocity: 1,
        index: 0,
        prevIndex: -1,
        stack: [],
        percent: 0,
        clsActive: "uk-active",
        clsActivated: !1,
        Transitioner: !1,
        transitionOptions: {}
      }),
      connected() {
        this.prevIndex = -1, this.index = this.getValidIndex(this.$props.index), this.stack = [];
      },
      disconnected() {
        M(this.slides, this.clsActive);
      },
      computed: {
        duration({ velocity: t }, e) {
          return Ln(e.offsetWidth / t);
        },
        list({ selList: t }, e) {
          return w(t, e);
        },
        maxIndex() {
          return this.length - 1;
        },
        slides() {
          return T(this.list);
        },
        length() {
          return this.slides.length;
        }
      },
      watch: {
        slides(t, e) {
          e && this.$emit();
        }
      },
      observe: pt(),
      methods: {
        show(t, e = !1) {
          var i;
          if (this.dragging || !this.length)
            return;
          const { stack: s } = this, n = e ? 0 : s.length, o = () => {
            s.splice(n, 1), s.length && this.show(s.shift(), !0);
          };
          if (s[e ? "unshift" : "push"](t), !e && s.length > 1) {
            s.length === 2 && ((i = this._transitioner) == null || i.forward(Math.min(this.duration, 200)));
            return;
          }
          const r = this.getIndex(this.index), a = P(this.slides, this.clsActive) && this.slides[r], l = this.getIndex(t, this.index), h = this.slides[l];
          if (a === h) {
            o();
            return;
          }
          if (this.dir = _a(t, r), this.prevIndex = r, this.index = l, a && !v(a, "beforeitemhide", [this]) || !v(h, "beforeitemshow", [this, a])) {
            this.index = this.prevIndex, o();
            return;
          }
          const u = this._show(a, h, e).then(() => {
            a && v(a, "itemhidden", [this]), v(h, "itemshown", [this]), s.shift(), this._transitioner = null, requestAnimationFrame(() => s.length && this.show(s.shift(), !0));
          });
          return a && v(a, "itemhide", [this]), v(h, "itemshow", [this]), u;
        },
        getIndex(t = this.index, e = this.index) {
          return Z(
            rt(t, this.slides, e, this.finite),
            0,
            Math.max(0, this.maxIndex)
          );
        },
        getValidIndex(t = this.index, e = this.prevIndex) {
          return this.getIndex(t, e);
        },
        _show(t, e, i) {
          if (this._transitioner = this._getTransitioner(t, e, this.dir, {
            easing: i ? e.offsetWidth < 600 ? "cubic-bezier(0.25, 0.46, 0.45, 0.94)" : "cubic-bezier(0.165, 0.84, 0.44, 1)" : this.easing,
            ...this.transitionOptions
          }), !i && !t)
            return this._translate(1), Promise.resolve();
          const { length: s } = this.stack;
          return this._transitioner[s > 1 ? "forward" : "show"](
            s > 1 ? Math.min(this.duration, 75 + 75 / (s - 1)) : this.duration,
            this.percent
          );
        },
        _translate(t, e = this.prevIndex, i = this.index) {
          const s = this._getTransitioner(e === i ? !1 : e, i);
          return s.translate(t), s;
        },
        _getTransitioner(t = this.prevIndex, e = this.index, i = this.dir || 1, s = this.transitionOptions) {
          return new this.Transitioner(
            we(t) ? this.slides[t] : t,
            we(e) ? this.slides[e] : e,
            i * (X ? -1 : 1),
            s
          );
        }
      }
    };
    function _a(t, e) {
      return t === "next" ? 1 : t === "previous" || t < e ? -1 : 1;
    }
    function Ln(t) {
      return 0.5 * t + 300;
    }
    var Wn = {
      mixins: [Hn],
      props: {
        animation: String
      },
      data: {
        animation: "slide",
        clsActivated: "uk-transition-active",
        Animations: ds,
        Transitioner: Kr
      },
      computed: {
        animation({ animation: t, Animations: e }) {
          return { ...e[t] || e.slide, name: t };
        },
        transitionOptions() {
          return { animation: this.animation };
        }
      },
      events: {
        beforeitemshow({ target: t }) {
          y(t, this.clsActive);
        },
        itemshown({ target: t }) {
          y(t, this.clsActivated);
        },
        itemhidden({ target: t }) {
          M(t, this.clsActive, this.clsActivated);
        }
      }
    }, Rn = {
      ...ds,
      fade: {
        show() {
          return [{ opacity: 0 }, { opacity: 1 }];
        },
        percent(t) {
          return 1 - c(t, "opacity");
        },
        translate(t) {
          return [{ opacity: 1 - t }, { opacity: t }];
        }
      },
      scale: {
        show() {
          return [
            { opacity: 0, transform: de(1 - 0.2) },
            { opacity: 1, transform: de(1) }
          ];
        },
        percent(t) {
          return 1 - c(t, "opacity");
        },
        translate(t) {
          return [
            { opacity: 1 - t, transform: de(1 - 0.2 * t) },
            { opacity: t, transform: de(1 - 0.2 + 0.2 * t) }
          ];
        }
      }
    }, jn = {
      mixins: [fs, Wn],
      functional: !0,
      props: {
        delayControls: Number,
        preload: Number,
        videoAutoplay: Boolean,
        template: String
      },
      data: () => ({
        preload: 1,
        videoAutoplay: !1,
        delayControls: 3e3,
        items: [],
        cls: "uk-open",
        clsPage: "uk-lightbox-page",
        selList: ".uk-lightbox-items",
        attrItem: "uk-lightbox-item",
        selClose: ".uk-close-large",
        selCaption: ".uk-lightbox-caption",
        pauseOnHover: !1,
        velocity: 2,
        Animations: Rn,
        template: '<div class="uk-lightbox uk-overflow-hidden"> <ul class="uk-lightbox-items"></ul> <div class="uk-lightbox-toolbar uk-position-top uk-text-right uk-transition-slide-top uk-transition-opaque"> <button class="uk-lightbox-toolbar-icon uk-close-large" type="button" uk-close></button> </div> <a class="uk-lightbox-button uk-position-center-left uk-position-medium uk-transition-fade" href uk-slidenav-previous uk-lightbox-item="previous"></a> <a class="uk-lightbox-button uk-position-center-right uk-position-medium uk-transition-fade" href uk-slidenav-next uk-lightbox-item="next"></a> <div class="uk-lightbox-toolbar uk-lightbox-caption uk-position-bottom uk-text-center uk-transition-slide-bottom uk-transition-opaque"></div> </div>'
      }),
      created() {
        const t = w(this.template), e = w(this.selList, t);
        this.items.forEach(() => L(e, "<li>"));
        const i = w("[uk-close]", t), s = this.t("close");
        i && s && (i.dataset.i18n = JSON.stringify({ label: s })), this.$mount(L(this.container, t));
      },
      computed: {
        caption({ selCaption: t }, e) {
          return w(t, e);
        }
      },
      events: [
        {
          name: `${oi} ${mt} keydown`,
          handler: "showControls"
        },
        {
          name: "click",
          self: !0,
          delegate() {
            return `${this.selList} > *`;
          },
          handler(t) {
            t.defaultPrevented || this.hide();
          }
        },
        {
          name: "shown",
          self: !0,
          handler() {
            this.showControls();
          }
        },
        {
          name: "hide",
          self: !0,
          handler() {
            this.hideControls(), M(this.slides, this.clsActive), E.stop(this.slides);
          }
        },
        {
          name: "hidden",
          self: !0,
          handler() {
            this.$destroy(!0);
          }
        },
        {
          name: "keyup",
          el() {
            return document;
          },
          handler({ keyCode: t }) {
            if (!this.isToggled(this.$el) || !this.draggable)
              return;
            let e = -1;
            t === I.LEFT ? e = "previous" : t === I.RIGHT ? e = "next" : t === I.HOME ? e = 0 : t === I.END && (e = "last"), ~e && this.show(e);
          }
        },
        {
          name: "beforeitemshow",
          handler(t) {
            this.isToggled() || (this.draggable = !1, t.preventDefault(), this.toggleElement(this.$el, !0, !1), this.animation = Rn.scale, M(t.target, this.clsActive), this.stack.splice(1, 0, this.index));
          }
        },
        {
          name: "itemshow",
          handler() {
            Nt(this.caption, this.getItem().caption || "");
            for (let t = -this.preload; t <= this.preload; t++)
              this.loadItem(this.index + t);
          }
        },
        {
          name: "itemshown",
          handler() {
            this.draggable = this.$props.draggable;
          }
        },
        {
          name: "itemload",
          async handler(t, e) {
            const { source: i, type: s, alt: n = "", poster: o, attrs: r = {} } = e;
            if (this.setItem(e, "<span uk-spinner></span>"), !i)
              return;
            let a;
            const l = {
              allowfullscreen: "",
              style: "max-width: 100%; box-sizing: border-box;",
              "uk-responsive": "",
              "uk-video": `${this.videoAutoplay}`
            };
            if (s === "image" || i.match(/\.(avif|jpe?g|jfif|a?png|gif|svg|webp)($|\?)/i)) {
              const h = Le("img", { src: i, alt: n, ...r });
              x(h, "load", () => this.setItem(e, h)), x(h, "error", () => this.setError(e));
            } else if (s === "video" || i.match(/\.(mp4|webm|ogv)($|\?)/i)) {
              const h = Le("video", {
                src: i,
                poster: o,
                controls: "",
                playsinline: "",
                "uk-video": `${this.videoAutoplay}`,
                ...r
              });
              x(h, "loadedmetadata", () => this.setItem(e, h)), x(h, "error", () => this.setError(e));
            } else if (s === "iframe" || i.match(/\.(html|php)($|\?)/i))
              this.setItem(
                e,
                Le("iframe", {
                  src: i,
                  allowfullscreen: "",
                  class: "uk-lightbox-iframe",
                  ...r
                })
              );
            else if (a = i.match(
              /\/\/(?:.*?youtube(-nocookie)?\..*?(?:[?&]v=|\/shorts\/)|youtu\.be\/)([\w-]{11})[&?]?(.*)?/
            ))
              this.setItem(
                e,
                Le("iframe", {
                  src: `https://www.youtube${a[1] || ""}.com/embed/${a[2]}${a[3] ? `?${a[3]}` : ""}`,
                  width: 1920,
                  height: 1080,
                  ...l,
                  ...r
                })
              );
            else if (a = i.match(/\/\/.*?vimeo\.[a-z]+\/(\d+)[&?]?(.*)?/))
              try {
                const { height: h, width: u } = await (await fetch(
                  `https://vimeo.com/api/oembed.json?maxwidth=1920&url=${encodeURI(
                    i
                  )}`,
                  { credentials: "omit" }
                )).json();
                this.setItem(
                  e,
                  Le("iframe", {
                    src: `https://player.vimeo.com/video/${a[1]}${a[2] ? `?${a[2]}` : ""}`,
                    width: u,
                    height: h,
                    ...l,
                    ...r
                  })
                );
              } catch {
                this.setError(e);
              }
          }
        }
      ],
      methods: {
        loadItem(t = this.index) {
          const e = this.getItem(t);
          this.getSlide(e).childElementCount || v(this.$el, "itemload", [e]);
        },
        getItem(t = this.index) {
          return this.items[rt(t, this.slides)];
        },
        setItem(t, e) {
          v(this.$el, "itemloaded", [this, Nt(this.getSlide(t), e)]);
        },
        getSlide(t) {
          return this.slides[this.items.indexOf(t)];
        },
        setError(t) {
          this.setItem(t, '<span uk-icon="icon: bolt; ratio: 2"></span>');
        },
        showControls() {
          clearTimeout(this.controlsTimer), this.controlsTimer = setTimeout(this.hideControls, this.delayControls), y(this.$el, "uk-active", "uk-transition-active");
        },
        hideControls() {
          M(this.$el, "uk-active", "uk-transition-active");
        }
      }
    };
    function Le(t, e) {
      const i = zt(`<${t}>`);
      return p(i, e), i;
    }
    var Aa = {
      install: Oa,
      props: { toggle: String },
      data: { toggle: "a" },
      computed: {
        toggles({ toggle: t }, e) {
          return z(t, e);
        }
      },
      watch: {
        toggles(t) {
          this.hide();
          for (const e of t)
            G(e, "a") && p(e, "role", "button");
        }
      },
      disconnected() {
        this.hide();
      },
      events: {
        name: "click",
        delegate() {
          return `${this.toggle}:not(.uk-disabled)`;
        },
        handler(t) {
          t.preventDefault(), this.show(t.current);
        }
      },
      methods: {
        show(t) {
          const e = _s(this.toggles.map(qn), "source");
          if (ee(t)) {
            const { source: i } = qn(t);
            t = xt(e, ({ source: s }) => i === s);
          }
          return this.panel = this.panel || this.$create("lightboxPanel", { ...this.$props, items: e }), x(this.panel.$el, "hidden", () => this.panel = null), this.panel.show(t);
        },
        hide() {
          var t;
          return (t = this.panel) == null ? void 0 : t.hide();
        }
      }
    };
    function Oa(t, e) {
      t.lightboxPanel || t.component("lightboxPanel", jn), wt(e.props, t.component("lightboxPanel").options.props);
    }
    function qn(t) {
      const e = {};
      for (const i of ["href", "caption", "type", "poster", "alt", "attrs"])
        e[i === "href" ? "source" : i] = tt(t, i);
      return e.attrs = Oe(e.attrs), e;
    }
    var Da = {
      mixins: [Ne],
      functional: !0,
      args: ["message", "status"],
      data: {
        message: "",
        status: "",
        timeout: 5e3,
        group: null,
        pos: "top-center",
        clsContainer: "uk-notification",
        clsClose: "uk-notification-close",
        clsMsg: "uk-notification-message"
      },
      install: Ba,
      computed: {
        marginProp({ pos: t }) {
          return `margin${ot(t, "top") ? "Top" : "Bottom"}`;
        },
        startProps() {
          return { opacity: 0, [this.marginProp]: -this.$el.offsetHeight };
        }
      },
      created() {
        const t = `${this.clsContainer}-${this.pos}`;
        let e = w(`.${t}`, this.container);
        (!e || !R(e)) && (e = L(
          this.container,
          `<div class="${this.clsContainer} ${t}"></div>`
        )), this.$mount(
          L(
            e,
            `<div class="${this.clsMsg}${this.status ? ` ${this.clsMsg}-${this.status}` : ""}" role="alert"> <a href class="${this.clsClose}" data-uk-close></a> <div>${this.message}</div> </div>`
          )
        );
      },
      async connected() {
        const t = $(c(this.$el, this.marginProp));
        await E.start(c(this.$el, this.startProps), {
          opacity: 1,
          [this.marginProp]: t
        }), this.timeout && (this.timer = setTimeout(this.close, this.timeout));
      },
      events: {
        click(t) {
          U(t.target, 'a[href="#"],a[href=""]') && t.preventDefault(), this.close();
        },
        [Rt]() {
          this.timer && clearTimeout(this.timer);
        },
        [_e]() {
          this.timeout && (this.timer = setTimeout(this.close, this.timeout));
        }
      },
      methods: {
        async close(t) {
          const e = (i) => {
            const s = _(i);
            v(i, "close", [this]), lt(i), s != null && s.hasChildNodes() || lt(s);
          };
          this.timer && clearTimeout(this.timer), t || await E.start(this.$el, this.startProps), e(this.$el);
        }
      }
    };
    function Ba(t) {
      t.notification.closeAll = function(e, i) {
        It(document.body, (s) => {
          const n = t.getComponent(s, "notification");
          n && (!e || e === n.group) && n.close(i);
        });
      };
    }
    var wi = {
      props: {
        media: Boolean
      },
      data: {
        media: !1
      },
      connected() {
        const t = Ma(this.media, this.$el);
        if (this.matchMedia = !0, t) {
          this.mediaObj = window.matchMedia(t);
          const e = () => {
            this.matchMedia = this.mediaObj.matches, v(this.$el, Mt("mediachange", !1, !0, [this.mediaObj]));
          };
          this.offMediaObj = x(this.mediaObj, "change", () => {
            e(), this.$emit("resize");
          }), e();
        }
      },
      disconnected() {
        var t;
        (t = this.offMediaObj) == null || t.call(this);
      }
    };
    function Ma(t, e) {
      if (D(t)) {
        if (ot(t, "@"))
          t = $(c(e, `--uk-breakpoint-${t.substr(1)}`));
        else if (isNaN(t))
          return t;
      }
      return t && bt(t) ? `(min-width: ${t}px)` : "";
    }
    function Un(t) {
      return Math.ceil(
        Math.max(
          0,
          ...z("[stroke]", t).map((e) => {
            try {
              return e.getTotalLength();
            } catch {
              return 0;
            }
          })
        )
      );
    }
    const bi = {
      x: $i,
      y: $i,
      rotate: $i,
      scale: $i,
      color: $s,
      backgroundColor: $s,
      borderColor: $s,
      blur: Yt,
      hue: Yt,
      fopacity: Yt,
      grayscale: Yt,
      invert: Yt,
      saturate: Yt,
      sepia: Yt,
      opacity: za,
      stroke: Fa,
      bgx: Gn,
      bgy: Gn
    }, { keys: Vn } = Object;
    var Yn = {
      mixins: [wi],
      props: Zn(Vn(bi), "list"),
      data: Zn(Vn(bi), void 0),
      computed: {
        props(t, e) {
          const i = {};
          for (const n in t)
            n in bi && !Y(t[n]) && (i[n] = t[n].slice());
          const s = {};
          for (const n in i)
            s[n] = bi[n](n, e, i[n], i);
          return s;
        }
      },
      events: {
        load() {
          this.$emit();
        }
      },
      methods: {
        reset() {
          for (const t in this.getCss(0))
            c(this.$el, t, "");
        },
        getCss(t) {
          const e = { transform: "", filter: "" };
          for (const i in this.props)
            this.props[i](e, Z(t));
          return e.willChange = Object.keys(e).filter((i) => e[i] !== "").map(Qe).join(","), e;
        }
      }
    };
    function $i(t, e, i) {
      let s = yi(i) || { x: "px", y: "px", rotate: "deg" }[t] || "", n;
      return t === "x" || t === "y" ? (t = `translate${Tt(t)}`, n = (o) => $($(o).toFixed(s === "px" ? 0 : 6))) : t === "scale" && (s = "", n = (o) => yi([o]) ? ht(o, "width", e, !0) / e.offsetWidth : $(o)), i.length === 1 && i.unshift(t === "scale" ? 1 : 0), i = me(i, n), (o, r) => {
        o.transform += ` ${t}(${We(i, r)}${s})`;
      };
    }
    function $s(t, e, i) {
      return i.length === 1 && i.unshift(Re(e, t, "")), i = me(i, (s) => Na(e, s)), (s, n) => {
        const [o, r, a] = Kn(i, n), l = o.map((h, u) => (h += a * (r[u] - h), u === 3 ? $(h) : parseInt(h, 10))).join(",");
        s[t] = `rgba(${l})`;
      };
    }
    function Na(t, e) {
      return Re(t, "color", e).split(/[(),]/g).slice(1, -1).concat(1).slice(0, 4).map($);
    }
    function Yt(t, e, i) {
      i.length === 1 && i.unshift(0);
      const s = yi(i) || { blur: "px", hue: "deg" }[t] || "%";
      return t = { fopacity: "opacity", hue: "hue-rotate" }[t] || t, i = me(i), (n, o) => {
        const r = We(i, o);
        n.filter += ` ${t}(${r + s})`;
      };
    }
    function za(t, e, i) {
      return i.length === 1 && i.unshift(Re(e, t, "")), i = me(i), (s, n) => {
        s[t] = We(i, n);
      };
    }
    function Fa(t, e, i) {
      i.length === 1 && i.unshift(0);
      const s = yi(i), n = Un(e);
      return i = me(i.reverse(), (o) => (o = $(o), s === "%" ? o * n / 100 : o)), i.some(([o]) => o) ? (c(e, "strokeDasharray", n), (o, r) => {
        o.strokeDashoffset = We(i, r);
      }) : S;
    }
    function Gn(t, e, i, s) {
      i.length === 1 && i.unshift(0);
      const n = t === "bgy" ? "height" : "width";
      s[t] = me(i, (a) => ht(a, n, e));
      const o = ["bgx", "bgy"].filter((a) => a in s);
      if (o.length === 2 && t === "bgx")
        return S;
      if (Re(e, "backgroundSize", "") === "cover")
        return Ha(t, e, i, s);
      const r = {};
      for (const a of o)
        r[a] = Xn(e, a);
      return Jn(o, r, s);
    }
    function Ha(t, e, i, s) {
      const n = La(e);
      if (!n.width)
        return S;
      const o = {
        width: e.offsetWidth,
        height: e.offsetHeight
      }, r = ["bgx", "bgy"].filter((u) => u in s), a = {};
      for (const u of r) {
        const f = s[u].map(([F]) => F), d = Math.min(...f), g = Math.max(...f), O = f.indexOf(d) < f.indexOf(g), N = g - d;
        a[u] = `${(O ? -N : 0) - (O ? d : g)}px`, o[u === "bgy" ? "height" : "width"] += N;
      }
      const l = Ke.cover(n, o);
      for (const u of r) {
        const f = u === "bgy" ? "height" : "width", d = l[f] - o[f];
        a[u] = `max(${Xn(e, u)},-${d}px) + ${a[u]}`;
      }
      const h = Jn(r, a, s);
      return (u, f) => {
        h(u, f), u.backgroundSize = `${l.width}px ${l.height}px`, u.backgroundRepeat = "no-repeat";
      };
    }
    function Xn(t, e) {
      return Re(t, `background-position-${e.substr(-1)}`, "");
    }
    function Jn(t, e, i) {
      return function(s, n) {
        for (const o of t) {
          const r = We(i[o], n);
          s[`background-position-${o.substr(-1)}`] = `calc(${e[o]} + ${r}px)`;
        }
      };
    }
    const xi = {};
    function La(t) {
      const e = c(t, "backgroundImage").replace(/^none|url\(["']?(.+?)["']?\)$/, "$1");
      if (xi[e])
        return xi[e];
      const i = new Image();
      return e && (i.src = e, !i.naturalWidth) ? (i.onload = () => {
        xi[e] = xs(i), v(t, Mt("load", !1));
      }, xs(i)) : xi[e] = xs(i);
    }
    function xs(t) {
      return {
        width: t.naturalWidth,
        height: t.naturalHeight
      };
    }
    function me(t, e = $) {
      const i = [], { length: s } = t;
      let n = 0;
      for (let o = 0; o < s; o++) {
        let [r, a] = D(t[o]) ? t[o].trim().split(/ (?![^(]*\))/) : [t[o]];
        if (r = e(r), a = a ? $(a) / 100 : null, o === 0 ? a === null ? a = 0 : a && i.push([r, 0]) : o === s - 1 && (a === null ? a = 1 : a !== 1 && (i.push([r, a]), a = 1)), i.push([r, a]), a === null)
          n++;
        else if (n) {
          const l = i[o - n - 1][1], h = (a - l) / (n + 1);
          for (let u = n; u > 0; u--)
            i[o - u][1] = l + h * (n - u + 1);
          n = 0;
        }
      }
      return i;
    }
    function Kn(t, e) {
      const i = xt(t.slice(1), ([, s]) => e <= s) + 1;
      return [
        t[i - 1][0],
        t[i][0],
        (e - t[i - 1][1]) / (t[i][1] - t[i - 1][1])
      ];
    }
    function We(t, e) {
      const [i, s, n] = Kn(t, e);
      return i + Math.abs(i - s) * n * (i < s ? 1 : -1);
    }
    const Wa = /^-?\d+(?:\.\d+)?(\S+)?/;
    function yi(t, e) {
      var i;
      for (const s of t) {
        const n = (i = s.match) == null ? void 0 : i.call(s, Wa);
        if (n)
          return n[1];
      }
      return e;
    }
    function Re(t, e, i) {
      const s = t.style[e], n = c(c(t, e, i), e);
      return t.style[e] = s, n;
    }
    function Zn(t, e) {
      return t.reduce((i, s) => (i[s] = e, i), {});
    }
    var Ra = {
      mixins: [Yn],
      props: {
        target: String,
        viewport: Number,
        // Deprecated
        easing: Number,
        start: String,
        end: String
      },
      data: {
        target: !1,
        viewport: 1,
        easing: 1,
        start: 0,
        end: 0
      },
      computed: {
        target({ target: t }, e) {
          return Qn(t && at(t, e) || e);
        },
        start({ start: t }) {
          return ht(t, "height", this.target, !0);
        },
        end({ end: t, viewport: e }) {
          return ht(
            t || (e = (1 - e) * 100) && `${e}vh+${e}%`,
            "height",
            this.target,
            !0
          );
        }
      },
      observe: [
        fn(),
        ui({ target: ({ target: t }) => t }),
        pt({ target: ({ $el: t, target: e }) => [t, e, Ct(e, !0)] })
      ],
      update: {
        read({ percent: t }, e) {
          if (e.has("scroll") || (t = !1), !R(this.$el))
            return !1;
          if (!this.matchMedia)
            return;
          const i = t;
          return t = ja(ns(this.target, this.start, this.end), this.easing), {
            percent: t,
            style: i === t ? !1 : this.getCss(t)
          };
        },
        write({ style: t }) {
          if (!this.matchMedia) {
            this.reset();
            return;
          }
          t && c(this.$el, t);
        },
        events: ["scroll", "resize"]
      }
    };
    function ja(t, e) {
      return e >= 0 ? Math.pow(t, e + 1) : 1 - Math.pow(1 - t, 1 - e);
    }
    function Qn(t) {
      return t ? "offsetTop" in t ? t : Qn(_(t)) : document.documentElement;
    }
    var to = {
      update: {
        write() {
          if (this.stack.length || this.dragging)
            return;
          const t = this.getValidIndex(this.index);
          !~this.prevIndex || this.index !== t ? this.show(t) : this._translate(1, this.prevIndex, this.index);
        },
        events: ["resize"]
      }
    }, eo = {
      observe: Be({
        target: ({ slides: t }) => t,
        targets: (t) => t.getAdjacentSlides()
      })
    };
    function qa(t, e, i, { center: s, easing: n, list: o }) {
      const r = t ? je(t, o, s) : je(e, o, s) + b(e).width * i, a = e ? je(e, o, s) : r + b(t).width * i * (X ? -1 : 1);
      let l;
      return {
        dir: i,
        show(h, u = 0, f) {
          const d = f ? "linear" : n;
          return h -= Math.round(h * Z(u, -1, 1)), this.translate(u), u = t ? u : Z(u, 0, 1), ys(this.getItemIn(), "itemin", { percent: u, duration: h, timing: d, dir: i }), t && ys(this.getItemIn(!0), "itemout", {
            percent: 1 - u,
            duration: h,
            timing: d,
            dir: i
          }), new Promise((g) => {
            l || (l = g), E.start(
              o,
              { transform: W(-a * (X ? -1 : 1), "px") },
              h,
              d
            ).then(l, S);
          });
        },
        cancel() {
          return E.cancel(o);
        },
        reset() {
          c(o, "transform", "");
        },
        async forward(h, u = this.percent()) {
          return await this.cancel(), this.show(h, u, !0);
        },
        translate(h) {
          const u = this.getDistance() * i * (X ? -1 : 1);
          c(
            o,
            "transform",
            W(
              Z(
                -a + (u - u * h),
                -ki(o),
                b(o).width
              ) * (X ? -1 : 1),
              "px"
            )
          );
          const f = this.getActives(), d = this.getItemIn(), g = this.getItemIn(!0);
          h = t ? Z(h, -1, 1) : 0;
          for (const O of T(o)) {
            const N = m(f, O), F = O === d, Ot = O === g, Ts = F || !Ot && (N || i * (X ? -1 : 1) === -1 ^ Si(O, o) > Si(t || e));
            ys(O, `itemtranslate${Ts ? "in" : "out"}`, {
              dir: i,
              percent: Ot ? 1 - h : F ? h : N ? 1 : 0
            });
          }
        },
        percent() {
          return Math.abs(
            (c(o, "transform").split(",")[4] * (X ? -1 : 1) + r) / (a - r)
          );
        },
        getDistance() {
          return Math.abs(a - r);
        },
        getItemIn(h = !1) {
          let u = this.getActives(), f = so(o, je(e || t, o, s));
          if (h) {
            const d = u;
            u = f, f = d;
          }
          return f[xt(f, (d) => !m(u, d))];
        },
        getActives() {
          return so(o, je(t || e, o, s));
        }
      };
    }
    function je(t, e, i) {
      const s = Si(t, e);
      return i ? s - Ua(t, e) : Math.min(s, io(e));
    }
    function io(t) {
      return Math.max(0, ki(t) - b(t).width);
    }
    function ki(t) {
      return Dt(T(t), (e) => b(e).width);
    }
    function Ua(t, e) {
      return b(e).width / 2 - b(t).width / 2;
    }
    function Si(t, e) {
      return t && (Ji(t).left + (X ? b(t).width - b(e).width : 0)) * (X ? -1 : 1) || 0;
    }
    function so(t, e) {
      e -= 1;
      const i = b(t).width, s = e + i + 2;
      return T(t).filter((n) => {
        const o = Si(n, t), r = o + Math.min(b(n).width, i);
        return o >= e && r <= s;
      });
    }
    function ys(t, e, i) {
      v(t, Mt(e, !1, !1, i));
    }
    var Va = {
      mixins: [st, Hn, to, eo],
      props: {
        center: Boolean,
        sets: Boolean
      },
      data: {
        center: !1,
        sets: !1,
        attrItem: "uk-slider-item",
        selList: ".uk-slider-items",
        selNav: ".uk-slider-nav",
        clsContainer: "uk-slider-container",
        Transitioner: qa
      },
      computed: {
        avgWidth() {
          return ki(this.list) / this.length;
        },
        finite({ finite: t }) {
          return t || Ya(this.list, this.center);
        },
        maxIndex() {
          if (!this.finite || this.center && !this.sets)
            return this.length - 1;
          if (this.center)
            return ne(this.sets);
          let t = 0;
          const e = io(this.list), i = xt(this.slides, (s) => {
            if (t >= e)
              return !0;
            t += b(s).width;
          });
          return ~i ? i : this.length - 1;
        },
        sets({ sets: t }) {
          if (!t)
            return;
          let e = 0;
          const i = [], s = b(this.list).width;
          for (let n = 0; n < this.length; n++) {
            const o = b(this.slides[n]).width;
            e + o > s && (e = 0), this.center ? e < s / 2 && e + o + b(rt(+n + 1, this.slides)).width / 2 > s / 2 && (i.push(+n), e = s / 2 - o / 2) : e === 0 && i.push(Math.min(+n, this.maxIndex)), e += o;
          }
          if (i.length)
            return i;
        },
        transitionOptions() {
          return {
            center: this.center,
            list: this.list
          };
        },
        slides() {
          return T(this.list).filter(R);
        }
      },
      connected() {
        q(this.$el, this.clsContainer, !w(`.${this.clsContainer}`, this.$el));
      },
      observe: pt({
        target: ({ slides: t }) => t
      }),
      update: {
        write() {
          for (const t of this.navItems) {
            const e = kt(tt(t, this.attrItem));
            e !== !1 && (t.hidden = !this.maxIndex || e > this.maxIndex || this.sets && !m(this.sets, e));
          }
          this.length && !this.dragging && !this.stack.length && (this.reorder(), this._translate(1)), this.updateActiveClasses();
        },
        events: ["resize"]
      },
      events: {
        beforeitemshow(t) {
          !this.dragging && this.sets && this.stack.length < 2 && !m(this.sets, this.index) && (this.index = this.getValidIndex());
          const e = Math.abs(
            this.index - this.prevIndex + (this.dir > 0 && this.index < this.prevIndex || this.dir < 0 && this.index > this.prevIndex ? (this.maxIndex + 1) * this.dir : 0)
          );
          if (!this.dragging && e > 1) {
            for (let s = 0; s < e; s++)
              this.stack.splice(1, 0, this.dir > 0 ? "next" : "previous");
            t.preventDefault();
            return;
          }
          const i = this.dir < 0 || !this.slides[this.prevIndex] ? this.index : this.prevIndex;
          this.duration = Ln(this.avgWidth / this.velocity) * (b(this.slides[i]).width / this.avgWidth), this.reorder();
        },
        itemshow() {
          ~this.prevIndex && y(this._getTransitioner().getItemIn(), this.clsActive);
        },
        itemshown() {
          this.updateActiveClasses();
        }
      },
      methods: {
        reorder() {
          if (this.finite) {
            c(this.slides, "order", "");
            return;
          }
          const t = this.dir > 0 && this.slides[this.prevIndex] ? this.prevIndex : this.index;
          if (this.slides.forEach(
            (n, o) => c(
              n,
              "order",
              this.dir > 0 && o < t ? 1 : this.dir < 0 && o >= this.index ? -1 : ""
            )
          ), !this.center)
            return;
          const e = this.slides[t];
          let i = b(this.list).width / 2 - b(e).width / 2, s = 0;
          for (; i > 0; ) {
            const n = this.getIndex(--s + t, t), o = this.slides[n];
            c(o, "order", n > t ? -2 : -1), i -= b(o).width;
          }
        },
        updateActiveClasses() {
          const t = this._getTransitioner(this.index).getActives(), e = [
            this.clsActive,
            (!this.sets || m(this.sets, $(this.index))) && this.clsActivated || ""
          ];
          for (const i of this.slides) {
            const s = m(t, i);
            q(i, e, s), p(i, "aria-hidden", !s);
            for (const n of z(ye, i))
              vt(n, "_tabindex") || (n._tabindex = p(n, "tabindex")), p(n, "tabindex", s ? n._tabindex : -1);
          }
        },
        getValidIndex(t = this.index, e = this.prevIndex) {
          if (t = this.getIndex(t, e), !this.sets)
            return t;
          let i;
          do {
            if (m(this.sets, t))
              return t;
            i = t, t = this.getIndex(t + this.dir, e);
          } while (t !== i);
          return t;
        },
        getAdjacentSlides() {
          const { width: t } = b(this.list), e = -t, i = t * 2, s = b(this.slides[this.index]).width, n = this.center ? t / 2 - s / 2 : 0, o = /* @__PURE__ */ new Set();
          for (const r of [-1, 1]) {
            let a = n + (r > 0 ? s : 0), l = 0;
            do {
              const h = this.slides[this.getIndex(this.index + r + l++ * r)];
              a += b(h).width * r, o.add(h);
            } while (this.length > l && a > e && a < i);
          }
          return Array.from(o);
        }
      }
    };
    function Ya(t, e) {
      if (!t || t.length < 2)
        return !0;
      const { width: i } = b(t);
      if (!e)
        return Math.ceil(ki(t)) < Math.trunc(i + Ga(t));
      const s = T(t), n = Math.trunc(i / 2);
      for (const o in s) {
        const r = s[o], a = b(r).width, l = /* @__PURE__ */ new Set([r]);
        let h = 0;
        for (const u of [-1, 1]) {
          let f = a / 2, d = 0;
          for (; f < n; ) {
            const g = s[rt(+o + u + d++ * u, s)];
            if (l.has(g))
              return !0;
            f += b(g).width, l.add(g);
          }
          h = Math.max(
            h,
            a / 2 + b(s[rt(+o + u, s)]).width / 2 - (f - n)
          );
        }
        if (h > Dt(
          s.filter((u) => !l.has(u)),
          (u) => b(u).width
        ))
          return !0;
      }
      return !1;
    }
    function Ga(t) {
      return Math.max(0, ...T(t).map((e) => b(e).width));
    }
    var no = {
      mixins: [Yn],
      data: {
        selItem: "!li"
      },
      beforeConnect() {
        this.item = at(this.selItem, this.$el);
      },
      disconnected() {
        this.item = null;
      },
      events: [
        {
          name: "itemin itemout",
          self: !0,
          el() {
            return this.item;
          },
          handler({ type: t, detail: { percent: e, duration: i, timing: s, dir: n } }) {
            J.read(() => {
              if (!this.matchMedia)
                return;
              const o = this.getCss(ro(t, n, e)), r = this.getCss(oo(t) ? 0.5 : n > 0 ? 1 : 0);
              J.write(() => {
                c(this.$el, o), E.start(this.$el, r, i, s).catch(S);
              });
            });
          }
        },
        {
          name: "transitioncanceled transitionend",
          self: !0,
          el() {
            return this.item;
          },
          handler() {
            E.cancel(this.$el);
          }
        },
        {
          name: "itemtranslatein itemtranslateout",
          self: !0,
          el() {
            return this.item;
          },
          handler({ type: t, detail: { percent: e, dir: i } }) {
            J.read(() => {
              if (!this.matchMedia) {
                this.reset();
                return;
              }
              const s = this.getCss(ro(t, i, e));
              J.write(() => c(this.$el, s));
            });
          }
        }
      ]
    };
    function oo(t) {
      return Zt(t, "in");
    }
    function ro(t, e, i) {
      return i /= 2, oo(t) ^ e < 0 ? i : 1 - i;
    }
    var Xa = {
      ...ds,
      fade: {
        show() {
          return [{ opacity: 0, zIndex: 0 }, { zIndex: -1 }];
        },
        percent(t) {
          return 1 - c(t, "opacity");
        },
        translate(t) {
          return [{ opacity: 1 - t, zIndex: 0 }, { zIndex: -1 }];
        }
      },
      scale: {
        show() {
          return [{ opacity: 0, transform: de(1 + 0.5), zIndex: 0 }, { zIndex: -1 }];
        },
        percent(t) {
          return 1 - c(t, "opacity");
        },
        translate(t) {
          return [
            { opacity: 1 - t, transform: de(1 + 0.5 * t), zIndex: 0 },
            { zIndex: -1 }
          ];
        }
      },
      pull: {
        show(t) {
          return t < 0 ? [
            { transform: W(30), zIndex: -1 },
            { transform: W(), zIndex: 0 }
          ] : [
            { transform: W(-100), zIndex: 0 },
            { transform: W(), zIndex: -1 }
          ];
        },
        percent(t, e, i) {
          return i < 0 ? 1 - ze(e) : ze(t);
        },
        translate(t, e) {
          return e < 0 ? [
            { transform: W(30 * t), zIndex: -1 },
            { transform: W(-100 * (1 - t)), zIndex: 0 }
          ] : [
            { transform: W(-t * 100), zIndex: 0 },
            { transform: W(30 * (1 - t)), zIndex: -1 }
          ];
        }
      },
      push: {
        show(t) {
          return t < 0 ? [
            { transform: W(100), zIndex: 0 },
            { transform: W(), zIndex: -1 }
          ] : [
            { transform: W(-30), zIndex: -1 },
            { transform: W(), zIndex: 0 }
          ];
        },
        percent(t, e, i) {
          return i > 0 ? 1 - ze(e) : ze(t);
        },
        translate(t, e) {
          return e < 0 ? [
            { transform: W(t * 100), zIndex: 0 },
            { transform: W(-30 * (1 - t)), zIndex: -1 }
          ] : [
            { transform: W(-30 * t), zIndex: -1 },
            { transform: W(100 * (1 - t)), zIndex: 0 }
          ];
        }
      }
    }, Ja = {
      mixins: [st, Wn, to, eo],
      props: {
        ratio: String,
        minHeight: Number,
        maxHeight: Number
      },
      data: {
        ratio: "16:9",
        minHeight: !1,
        maxHeight: !1,
        selList: ".uk-slideshow-items",
        attrItem: "uk-slideshow-item",
        selNav: ".uk-slideshow-nav",
        Animations: Xa
      },
      update: {
        read() {
          if (!this.list)
            return !1;
          let [t, e] = this.ratio.split(":").map(Number);
          return e = e * this.list.offsetWidth / t || 0, this.minHeight && (e = Math.max(this.minHeight, e)), this.maxHeight && (e = Math.min(this.maxHeight, e)), { height: e - he(this.list, "height", "content-box") };
        },
        write({ height: t }) {
          t > 0 && c(this.list, "minHeight", t);
        },
        events: ["resize"]
      },
      methods: {
        getAdjacentSlides() {
          return [1, -1].map((t) => this.slides[this.getIndex(this.index + t)]);
        }
      }
    }, Ka = {
      mixins: [st, yn],
      props: {
        group: String,
        threshold: Number,
        clsItem: String,
        clsPlaceholder: String,
        clsDrag: String,
        clsDragState: String,
        clsBase: String,
        clsNoDrag: String,
        clsEmpty: String,
        clsCustom: String,
        handle: String
      },
      data: {
        group: !1,
        threshold: 5,
        clsItem: "uk-sortable-item",
        clsPlaceholder: "uk-sortable-placeholder",
        clsDrag: "uk-sortable-drag",
        clsDragState: "uk-drag",
        clsBase: "uk-sortable",
        clsNoDrag: "uk-sortable-nodrag",
        clsEmpty: "uk-sortable-empty",
        clsCustom: "",
        handle: !1,
        pos: {}
      },
      created() {
        for (const t of ["init", "start", "move", "end"]) {
          const e = this[t];
          this[t] = (i) => {
            wt(this.pos, le(i)), e(i);
          };
        }
      },
      events: {
        name: mt,
        passive: !1,
        handler: "init"
      },
      computed: {
        target() {
          return (this.$el.tBodies || [this.$el])[0];
        },
        items() {
          return T(this.target);
        },
        isEmpty() {
          return be(this.items);
        },
        handles({ handle: t }, e) {
          return t ? z(t, e) : this.items;
        }
      },
      watch: {
        isEmpty(t) {
          q(this.target, this.clsEmpty, t);
        },
        handles(t, e) {
          c(e, { touchAction: "", userSelect: "" }), c(t, { touchAction: Wt ? "none" : "", userSelect: "none" });
        }
      },
      update: {
        write(t) {
          if (!this.drag || !_(this.placeholder))
            return;
          const {
            pos: { x: e, y: i },
            origin: { offsetTop: s, offsetLeft: n },
            placeholder: o
          } = this;
          c(this.drag, {
            top: i - s,
            left: e - n
          });
          const r = this.getSortable(document.elementFromPoint(e, i));
          if (!r)
            return;
          const { items: a } = r;
          if (a.some(E.inProgress))
            return;
          const l = el(a, { x: e, y: i });
          if (a.length && (!l || l === o))
            return;
          const h = this.getSortable(o), u = il(
            r.target,
            l,
            o,
            e,
            i,
            r === h && t.moved !== l
          );
          u !== !1 && (u && o === u || (r !== h ? (h.remove(o), t.moved = l) : delete t.moved, r.insert(o, u), this.touched.add(r)));
        },
        events: ["move"]
      },
      methods: {
        init(t) {
          const { target: e, button: i, defaultPrevented: s } = t, [n] = this.items.filter((o) => B(e, o));
          !n || s || i > 0 || Ri(e) || B(e, `.${this.clsNoDrag}`) || this.handle && !B(e, this.handle) || (t.preventDefault(), this.touched = /* @__PURE__ */ new Set([this]), this.placeholder = n, this.origin = { target: e, index: re(n), ...this.pos }, x(document, oi, this.move), x(document, _t, this.end), this.threshold || this.start(t));
        },
        start(t) {
          this.drag = tl(this.$container, this.placeholder);
          const { left: e, top: i } = this.placeholder.getBoundingClientRect();
          wt(this.origin, { offsetLeft: this.pos.x - e, offsetTop: this.pos.y - i }), y(this.drag, this.clsDrag, this.clsCustom), y(this.placeholder, this.clsPlaceholder), y(this.items, this.clsItem), y(document.documentElement, this.clsDragState), v(this.$el, "start", [this, this.placeholder]), Za(this.pos), this.move(t);
        },
        move(t) {
          this.drag ? this.$emit("move") : (Math.abs(this.pos.x - this.origin.x) > this.threshold || Math.abs(this.pos.y - this.origin.y) > this.threshold) && this.start(t);
        },
        end() {
          if (Bt(document, oi, this.move), Bt(document, _t, this.end), !this.drag)
            return;
          Qa();
          const t = this.getSortable(this.placeholder);
          this === t ? this.origin.index !== re(this.placeholder) && v(this.$el, "moved", [this, this.placeholder]) : (v(t.$el, "added", [t, this.placeholder]), v(this.$el, "removed", [this, this.placeholder])), v(this.$el, "stop", [this, this.placeholder]), lt(this.drag), this.drag = null;
          for (const { clsPlaceholder: e, clsItem: i } of this.touched)
            for (const s of this.touched)
              M(s.items, e, i);
          this.touched = null, M(document.documentElement, this.clsDragState);
        },
        insert(t, e) {
          y(this.items, this.clsItem);
          const i = () => e ? ti(e, t) : L(this.target, t);
          this.animate(i);
        },
        remove(t) {
          B(t, this.target) && this.animate(() => lt(t));
        },
        getSortable(t) {
          do {
            const e = this.$getComponent(t, "sortable");
            if (e && (e === this || this.group !== !1 && e.group === this.group))
              return e;
          } while (t = _(t));
        }
      }
    };
    let ao;
    function Za(t) {
      let e = Date.now();
      ao = setInterval(() => {
        let { x: i, y: s } = t;
        s += document.scrollingElement.scrollTop;
        const n = (Date.now() - e) * 0.3;
        e = Date.now(), fe(document.elementFromPoint(i, t.y)).reverse().some((o) => {
          let { scrollTop: r, scrollHeight: a } = o;
          const { top: l, bottom: h, height: u } = ct(o);
          if (l < s && l + 35 > s)
            r -= n;
          else if (h > s && h - 35 < s)
            r += n;
          else
            return;
          if (r > 0 && r < a - u)
            return o.scrollTop = r, !0;
        });
      }, 15);
    }
    function Qa() {
      clearInterval(ao);
    }
    function tl(t, e) {
      let i;
      if (G(e, "li", "tr")) {
        i = w("<div>"), L(i, e.cloneNode(!0).children);
        for (const s of e.getAttributeNames())
          p(i, s, e.getAttribute(s));
      } else
        i = e.cloneNode(!0);
      return L(t, i), c(i, "margin", "0", "important"), c(i, {
        boxSizing: "border-box",
        width: e.offsetWidth,
        height: e.offsetHeight,
        padding: c(e, "padding")
      }), et(i.firstElementChild, et(e.firstElementChild)), i;
    }
    function el(t, e) {
      return t[xt(t, (i) => Je(e, i.getBoundingClientRect()))];
    }
    function il(t, e, i, s, n, o) {
      if (!T(t).length)
        return;
      const r = e.getBoundingClientRect();
      if (!o)
        return sl(t, i) || n < r.top + r.height / 2 ? e : e.nextElementSibling;
      const a = i.getBoundingClientRect(), l = lo(
        [r.top, r.bottom],
        [a.top, a.bottom]
      ), [h, u, f, d] = l ? [s, "width", "left", "right"] : [n, "height", "top", "bottom"], g = a[u] < r[u] ? r[u] - a[u] : 0;
      return a[f] < r[f] ? g && h < r[f] + g ? !1 : e.nextElementSibling : g && h > r[d] - g ? !1 : e;
    }
    function sl(t, e) {
      const i = T(t).length === 1;
      i && L(t, e);
      const s = T(t), n = s.some((o, r) => {
        const a = o.getBoundingClientRect();
        return s.slice(r + 1).some((l) => {
          const h = l.getBoundingClientRect();
          return !lo([a.left, a.right], [h.left, h.right]);
        });
      });
      return i && lt(e), n;
    }
    function lo(t, e) {
      return t[1] > e[0] && e[1] > t[0];
    }
    var ho = {
      props: {
        pos: String,
        offset: null,
        flip: Boolean,
        shift: Boolean,
        inset: Boolean
      },
      data: {
        pos: `bottom-${X ? "right" : "left"}`,
        offset: !1,
        flip: !0,
        shift: !0,
        inset: !1
      },
      connected() {
        this.pos = this.$props.pos.split("-").concat("center").slice(0, 2), [this.dir, this.align] = this.pos, this.axis = m(["top", "bottom"], this.dir) ? "y" : "x";
      },
      methods: {
        positionAt(t, e, i) {
          let s = [this.getPositionOffset(t), this.getShiftOffset(t)];
          const n = [this.flip && "flip", this.shift && "shift"], o = {
            element: [this.inset ? this.dir : ni(this.dir), this.align],
            target: [this.dir, this.align]
          };
          if (this.axis === "y") {
            for (const l in o)
              o[l].reverse();
            s.reverse(), n.reverse();
          }
          const r = nl(t), a = b(t);
          c(t, { top: -a.height, left: -a.width }), en(t, e, {
            attach: o,
            offset: s,
            boundary: i,
            placement: n,
            viewportOffset: this.getViewportOffset(t)
          }), r();
        },
        getPositionOffset(t) {
          return ht(
            this.offset === !1 ? c(t, "--uk-position-offset") : this.offset,
            this.axis === "x" ? "width" : "height",
            t
          ) * (m(["left", "top"], this.dir) ? -1 : 1) * (this.inset ? -1 : 1);
        },
        getShiftOffset(t) {
          return this.align === "center" ? 0 : ht(
            c(t, "--uk-position-shift-offset"),
            this.axis === "y" ? "width" : "height",
            t
          ) * (m(["left", "top"], this.align) ? 1 : -1);
        },
        getViewportOffset(t) {
          return ht(c(t, "--uk-position-viewport-offset"));
        }
      }
    };
    function nl(t) {
      const e = Ct(t), { scrollTop: i } = e;
      return () => {
        i !== e.scrollTop && (e.scrollTop = i);
      };
    }
    var ol = {
      mixins: [Ne, qt, ho],
      args: "title",
      props: {
        delay: Number,
        title: String
      },
      data: {
        pos: "top",
        title: "",
        delay: 0,
        animation: ["uk-animation-scale-up"],
        duration: 100,
        cls: "uk-active"
      },
      beforeConnect() {
        this.id = At(this, {}), this._hasTitle = $t(this.$el, "title"), p(this.$el, {
          title: "",
          "aria-describedby": this.id
        }), rl(this.$el);
      },
      disconnected() {
        this.hide(), p(this.$el, "title") || p(this.$el, "title", this._hasTitle ? this.title : null);
      },
      methods: {
        show() {
          this.isToggled(this.tooltip || null) || !this.title || (clearTimeout(this.showTimer), this.showTimer = setTimeout(this._show, this.delay));
        },
        async hide() {
          C(this.$el, "input:focus") || (clearTimeout(this.showTimer), this.isToggled(this.tooltip || null) && await this.toggleElement(this.tooltip, !1, !1), lt(this.tooltip), this.tooltip = null);
        },
        async _show() {
          this.tooltip = L(
            this.container,
            `<div id="${this.id}" class="uk-${this.$options.name}" role="tooltip"> <div class="uk-${this.$options.name}-inner">${this.title}</div> </div>`
          ), x(this.tooltip, "toggled", (t, e) => {
            if (!e)
              return;
            const i = () => this.positionAt(this.tooltip, this.$el);
            i();
            const [s, n] = al(this.tooltip, this.$el, this.pos);
            this.origin = this.axis === "y" ? `${ni(s)}-${n}` : `${n}-${ni(s)}`;
            const o = [
              j(
                document,
                `keydown ${mt}`,
                this.hide,
                !1,
                (r) => r.type === mt && !B(r.target, this.$el) || r.type === "keydown" && r.keyCode === I.ESC
              ),
              x([document, ...jt(this.$el)], "scroll", i, {
                passive: !0
              })
            ];
            j(this.tooltip, "hide", () => o.forEach((r) => r()), {
              self: !0
            });
          }), await this.toggleElement(this.tooltip, !0) || this.hide();
        }
      },
      events: {
        focus: "show",
        blur: "hide",
        [`${Rt} ${_e}`](t) {
          St(t) || this[t.type === Rt ? "show" : "hide"]();
        },
        // Clicking a button does not give it focus on all browsers and platforms
        // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#clicking_and_focus
        [mt](t) {
          St(t) && this.show();
        }
      }
    };
    function rl(t) {
      Ze(t) || p(t, "tabindex", "0");
    }
    function al(t, e, [i, s]) {
      const n = A(t), o = A(e), r = [
        ["left", "right"],
        ["top", "bottom"]
      ];
      for (const l of r) {
        if (n[l[0]] >= o[l[1]]) {
          i = l[1];
          break;
        }
        if (n[l[1]] <= o[l[0]]) {
          i = l[0];
          break;
        }
      }
      const a = m(r[0], i) ? r[1] : r[0];
      return n[a[0]] === o[a[0]] ? s = a[0] : n[a[1]] === o[a[1]] ? s = a[1] : s = "center", [i, s];
    }
    var ll = {
      mixins: [gi],
      i18n: {
        invalidMime: "Invalid File Type: %s",
        invalidName: "Invalid File Name: %s",
        invalidSize: "Invalid File Size: %s Kilobytes Max"
      },
      props: {
        allow: String,
        clsDragover: String,
        concurrent: Number,
        maxSize: Number,
        method: String,
        mime: String,
        multiple: Boolean,
        name: String,
        params: Object,
        type: String,
        url: String
      },
      data: {
        allow: !1,
        clsDragover: "uk-dragover",
        concurrent: 1,
        maxSize: 0,
        method: "POST",
        mime: !1,
        multiple: !1,
        name: "files[]",
        params: {},
        type: "",
        url: "",
        abort: S,
        beforeAll: S,
        beforeSend: S,
        complete: S,
        completeAll: S,
        error: S,
        fail: S,
        load: S,
        loadEnd: S,
        loadStart: S,
        progress: S
      },
      events: {
        change(t) {
          C(t.target, 'input[type="file"]') && (t.preventDefault(), t.target.files && this.upload(t.target.files), t.target.value = "");
        },
        drop(t) {
          Ii(t);
          const e = t.dataTransfer;
          e != null && e.files && (M(this.$el, this.clsDragover), this.upload(e.files));
        },
        dragenter(t) {
          Ii(t);
        },
        dragover(t) {
          Ii(t), y(this.$el, this.clsDragover);
        },
        dragleave(t) {
          Ii(t), M(this.$el, this.clsDragover);
        }
      },
      methods: {
        async upload(t) {
          if (t = Qt(t), !t.length)
            return;
          v(this.$el, "upload", [t]);
          for (const s of t) {
            if (this.maxSize && this.maxSize * 1e3 < s.size) {
              this.fail(this.t("invalidSize", this.maxSize));
              return;
            }
            if (this.allow && !co(this.allow, s.name)) {
              this.fail(this.t("invalidName", this.allow));
              return;
            }
            if (this.mime && !co(this.mime, s.type)) {
              this.fail(this.t("invalidMime", this.mime));
              return;
            }
          }
          this.multiple || (t = t.slice(0, 1)), this.beforeAll(this, t);
          const e = hl(t, this.concurrent), i = async (s) => {
            const n = new FormData();
            s.forEach((o) => n.append(this.name, o));
            for (const o in this.params)
              n.append(o, this.params[o]);
            try {
              const o = await cl(this.url, {
                data: n,
                method: this.method,
                responseType: this.type,
                beforeSend: (r) => {
                  const { xhr: a } = r;
                  x(a.upload, "progress", this.progress);
                  for (const l of ["loadStart", "load", "loadEnd", "abort"])
                    x(a, l.toLowerCase(), this[l]);
                  return this.beforeSend(r);
                }
              });
              this.complete(o), e.length ? await i(e.shift()) : this.completeAll(o);
            } catch (o) {
              this.error(o);
            }
          };
          await i(e.shift());
        }
      }
    };
    function co(t, e) {
      return e.match(
        new RegExp(
          `^${t.replace(/\//g, "\\/").replace(/\*\*/g, "(\\/[^\\/]+)*").replace(/\*/g, "[^\\/]+").replace(/((?!\\))\?/g, "$1.")}$`,
          "i"
        )
      );
    }
    function hl(t, e) {
      const i = [];
      for (let s = 0; s < t.length; s += e)
        i.push(t.slice(s, s + e));
      return i;
    }
    function Ii(t) {
      t.preventDefault(), t.stopPropagation();
    }
    function cl(t, e) {
      const i = {
        data: null,
        method: "GET",
        headers: {},
        xhr: new XMLHttpRequest(),
        beforeSend: S,
        responseType: "",
        ...e
      };
      return Promise.resolve().then(() => i.beforeSend(i)).then(() => ul(t, i));
    }
    function ul(t, e) {
      return new Promise((i, s) => {
        const { xhr: n } = e;
        for (const o in e)
          if (o in n)
            try {
              n[o] = e[o];
            } catch {
            }
        n.open(e.method.toUpperCase(), t);
        for (const o in e.headers)
          n.setRequestHeader(o, e.headers[o]);
        x(n, "load", () => {
          n.status === 0 || n.status >= 200 && n.status < 300 || n.status === 304 ? i(n) : s(
            wt(Error(n.statusText), {
              xhr: n,
              status: n.status
            })
          );
        }), x(n, "error", () => s(wt(Error("Network Error"), { xhr: n }))), x(n, "timeout", () => s(wt(Error("Network Timeout"), { xhr: n }))), n.send(e.data);
      });
    }
    var fl = /* @__PURE__ */ Object.freeze({
      __proto__: null,
      Countdown: Ir,
      Filter: zr,
      Lightbox: Aa,
      LightboxPanel: jn,
      Notification: Da,
      Parallax: Ra,
      Slider: Va,
      SliderParallax: no,
      Slideshow: Ja,
      SlideshowParallax: no,
      Sortable: Ka,
      Tooltip: ol,
      Upload: ll
    });
    function dl(t) {
      Lt && window.MutationObserver && (document.body ? requestAnimationFrame(() => uo(t)) : new MutationObserver((e, i) => {
        document.body && (uo(t), i.disconnect());
      }).observe(document.documentElement, { childList: !0 }));
    }
    function uo(t) {
      v(document, "uikit:init", t), document.body && It(document.body, fo), new MutationObserver((e) => e.forEach(pl)).observe(document, {
        childList: !0,
        subtree: !0
      }), new MutationObserver((e) => e.forEach(gl)).observe(document, {
        attributes: !0,
        subtree: !0
      }), t._initialized = !0;
    }
    function pl({ addedNodes: t, removedNodes: e }) {
      for (const i of t)
        It(i, fo);
      for (const i of e)
        It(i, ml);
    }
    function gl({ target: t, attributeName: e }) {
      var i;
      const s = po(e);
      if (s) {
        if ($t(t, e)) {
          He(s, t);
          return;
        }
        (i = vi(t, s)) == null || i.$destroy();
      }
    }
    function fo(t) {
      const e = Vt(t);
      for (const i in Vt(t))
        ws(e[i]);
      for (const i of t.getAttributeNames()) {
        const s = po(i);
        s && He(s, t);
      }
    }
    function ml(t) {
      const e = Vt(t);
      for (const i in Vt(t))
        bs(e[i]);
    }
    function po(t) {
      ot(t, "data-") && (t = t.slice(5));
      const e = ge[t];
      return e && (yt(e) ? e : e.options).name;
    }
    Ta(ft), Ea(ft);
    var go = {
      mixins: [st, qt],
      props: {
        animation: Boolean,
        targets: String,
        active: null,
        collapsible: Boolean,
        multiple: Boolean,
        toggle: String,
        content: String,
        offset: Number
      },
      data: {
        targets: "> *",
        active: !1,
        animation: !0,
        collapsible: !0,
        multiple: !1,
        clsOpen: "uk-open",
        toggle: "> .uk-accordion-title",
        content: "> .uk-accordion-content",
        offset: 0
      },
      computed: {
        items({ targets: t }, e) {
          return z(t, e);
        },
        toggles({ toggle: t }) {
          return this.items.map((e) => w(t, e));
        },
        contents({ content: t }) {
          return this.items.map((e) => {
            var i;
            return ((i = e._wrapper) == null ? void 0 : i.firstElementChild) || w(t, e);
          });
        }
      },
      watch: {
        items(t, e) {
          if (e || P(t, this.clsOpen))
            return;
          const i = this.active !== !1 && t[Number(this.active)] || !this.collapsible && t[0];
          i && this.toggle(i, !1);
        },
        toggles() {
          this.$emit();
        },
        contents(t) {
          for (const e of t) {
            const i = P(
              this.items.find((s) => B(e, s)),
              this.clsOpen
            );
            Ci(e, !i);
          }
          this.$emit();
        }
      },
      observe: Be(),
      events: [
        {
          name: "click keydown",
          delegate() {
            return `${this.targets} ${this.$props.toggle}`;
          },
          async handler(t) {
            var e;
            t.type === "keydown" && t.keyCode !== I.SPACE || (t.preventDefault(), (e = this._off) == null || e.call(this), this._off = wl(t.target), await this.toggle(re(this.toggles, t.current)), this._off());
          }
        },
        {
          name: "shown hidden",
          self: !0,
          delegate() {
            return this.targets;
          },
          handler() {
            this.$emit();
          }
        }
      ],
      update() {
        const t = ke(this.items, `.${this.clsOpen}`);
        for (const e in this.items) {
          const i = this.toggles[e], s = this.contents[e];
          if (!i || !s)
            continue;
          i.id = At(this, i, `-title-${e}`), s.id = At(this, s, `-content-${e}`);
          const n = m(t, this.items[e]);
          p(i, {
            role: G(i, "a") ? "button" : null,
            "aria-controls": s.id,
            "aria-expanded": n,
            "aria-disabled": !this.collapsible && t.length < 2 && n
          }), p(s, { role: "region", "aria-labelledby": i.id }), G(s, "ul") && p(T(s), "role", "presentation");
        }
      },
      methods: {
        toggle(t, e) {
          t = this.items[rt(t, this.items)];
          let i = [t];
          const s = ke(this.items, `.${this.clsOpen}`);
          if (!this.multiple && !m(s, i[0]) && (i = i.concat(s)), !(!this.collapsible && s.length < 2 && m(s, t)))
            return Promise.all(
              i.map(
                (n) => this.toggleElement(n, !m(s, n), (o, r) => {
                  if (q(o, this.clsOpen, r), e === !1 || !this.animation) {
                    Ci(w(this.content, o), !r);
                    return;
                  }
                  return vl(o, r, this);
                })
              )
            );
        }
      }
    };
    function Ci(t, e) {
      t && (t.hidden = e);
    }
    async function vl(t, e, { content: i, duration: s, velocity: n, transition: o }) {
      var r;
      i = ((r = t._wrapper) == null ? void 0 : r.firstElementChild) || w(i, t), t._wrapper || (t._wrapper = si(i, "<div>"));
      const a = t._wrapper;
      c(a, "overflow", "hidden");
      const l = $(c(a, "height"));
      await E.cancel(a), Ci(i, !1);
      const h = Dt(["marginTop", "marginBottom"], (f) => c(i, f)) + b(i).height, u = l / h;
      s = (n * h + s) * (e ? 1 - u : u), c(a, "height", l), await E.start(a, { height: e ? h : 0 }, s, o), Te(i), delete t._wrapper, e || Ci(i, !0);
    }
    function wl(t) {
      const e = Ct(t, !0);
      let i;
      return function s() {
        i = requestAnimationFrame(() => {
          const { top: n } = t.getBoundingClientRect();
          n < 0 && (e.scrollTop += n), s();
        });
      }(), () => requestAnimationFrame(() => cancelAnimationFrame(i));
    }
    var bl = {
      mixins: [st, qt],
      args: "animation",
      props: {
        animation: Boolean,
        close: String
      },
      data: {
        animation: !0,
        selClose: ".uk-alert-close",
        duration: 150
      },
      events: {
        name: "click",
        delegate() {
          return this.selClose;
        },
        handler(t) {
          t.preventDefault(), this.close();
        }
      },
      methods: {
        async close() {
          await this.toggleElement(this.$el, !1, $l), this.$destroy(!0);
        }
      }
    };
    function $l(t, e, { duration: i, transition: s, velocity: n }) {
      const o = $(c(t, "height"));
      return c(t, "height", o), E.start(
        t,
        {
          height: 0,
          marginTop: 0,
          marginBottom: 0,
          paddingTop: 0,
          paddingBottom: 0,
          borderTop: 0,
          borderBottom: 0,
          opacity: 0
        },
        n * o + i,
        s
      );
    }
    var mo = {
      args: "autoplay",
      props: {
        automute: Boolean,
        autoplay: Boolean
      },
      data: {
        automute: !1,
        autoplay: !0
      },
      connected() {
        this.inView = this.autoplay === "inview", this.inView && !$t(this.$el, "preload") && (this.$el.preload = "none"), G(this.$el, "iframe") && !$t(this.$el, "allow") && (this.$el.allow = "autoplay"), this.automute && Gs(this.$el);
      },
      observe: [De({ args: { intersecting: !1 } }), pt()],
      update: {
        read({ visible: t }) {
          return Xs(this.$el) ? {
            prev: t,
            visible: R(this.$el),
            inView: this.inView && ss(this.$el)
          } : !1;
        },
        write({ prev: t, visible: e, inView: i }) {
          !e || this.inView && !i ? Ys(this.$el) : (this.autoplay === !0 && !t || i) && Vs(this.$el);
        },
        events: ["resize"]
      }
    }, xl = {
      mixins: [mo],
      props: {
        width: Number,
        height: Number
      },
      data: {
        automute: !0
      },
      events: {
        "load loadedmetadata"() {
          this.$emit("resize");
        }
      },
      observe: pt({
        target: ({ $el: t }) => [vo(t) || _(t)]
      }),
      update: {
        read() {
          const { ratio: t, cover: e } = Ke, { $el: i, width: s, height: n } = this;
          let o = { width: s, height: n };
          if (!s || !n) {
            const h = {
              width: i.naturalWidth || i.videoWidth || i.clientWidth,
              height: i.naturalHeight || i.videoHeight || i.clientHeight
            };
            s ? o = t(h, "width", s) : n ? o = t(h, "height", n) : o = h;
          }
          const { offsetHeight: r, offsetWidth: a } = vo(i) || _(i), l = e(o, {
            width: a + (a % 2 ? 1 : 0),
            height: r + (r % 2 ? 1 : 0)
          });
          return !l.width || !l.height ? !1 : l;
        },
        write({ height: t, width: e }) {
          c(this.$el, { height: t, width: e });
        },
        events: ["resize"]
      }
    };
    function vo(t) {
      for (; t = _(t); )
        if (c(t, "position") !== "static")
          return t;
    }
    let K;
    var wo = {
      mixins: [Ne, ho, qt],
      args: "pos",
      props: {
        mode: "list",
        toggle: Boolean,
        boundary: Boolean,
        boundaryX: Boolean,
        boundaryY: Boolean,
        target: Boolean,
        targetX: Boolean,
        targetY: Boolean,
        stretch: Boolean,
        delayShow: Number,
        delayHide: Number,
        autoUpdate: Boolean,
        clsDrop: String,
        animateOut: Boolean,
        bgScroll: Boolean
      },
      data: {
        mode: ["click", "hover"],
        toggle: "- *",
        boundary: !1,
        boundaryX: !1,
        boundaryY: !1,
        target: !1,
        targetX: !1,
        targetY: !1,
        stretch: !1,
        delayShow: 0,
        delayHide: 800,
        autoUpdate: !0,
        clsDrop: !1,
        animateOut: !1,
        bgScroll: !0,
        animation: ["uk-animation-fade"],
        cls: "uk-open",
        container: !1
      },
      computed: {
        boundary({ boundary: t, boundaryX: e, boundaryY: i }, s) {
          return [
            at(e || t, s) || window,
            at(i || t, s) || window
          ];
        },
        target({ target: t, targetX: e, targetY: i }, s) {
          return e || (e = t || this.targetEl), i || (i = t || this.targetEl), [
            e === !0 ? window : at(e, s),
            i === !0 ? window : at(i, s)
          ];
        }
      },
      created() {
        this.tracker = new Qi();
      },
      beforeConnect() {
        this.clsDrop = this.$props.clsDrop || `uk-${this.$options.name}`;
      },
      connected() {
        y(this.$el, "uk-drop", this.clsDrop), this.toggle && !this.targetEl && (this.targetEl = Sl(this)), this._style = Mi(this.$el.style, ["width", "height"]);
      },
      disconnected() {
        this.isActive() && (this.hide(!1), K = null), c(this.$el, this._style);
      },
      observe: Be({
        target: ({ toggle: t, $el: e }) => at(t, e),
        targets: ({ $el: t }) => t
      }),
      events: [
        {
          name: "click",
          delegate() {
            return ".uk-drop-close";
          },
          handler(t) {
            t.preventDefault(), this.hide(!1);
          }
        },
        {
          name: "click",
          delegate() {
            return 'a[href*="#"]';
          },
          handler({ defaultPrevented: t, current: e }) {
            const { hash: i } = e;
            !t && i && ae(e) && !B(i, this.$el) && this.hide(!1);
          }
        },
        {
          name: "beforescroll",
          handler() {
            this.hide(!1);
          }
        },
        {
          name: "toggle",
          self: !0,
          handler(t, e) {
            t.preventDefault(), this.isToggled() ? this.hide(!1) : this.show(e == null ? void 0 : e.$el, !1);
          }
        },
        {
          name: "toggleshow",
          self: !0,
          handler(t, e) {
            t.preventDefault(), this.show(e == null ? void 0 : e.$el);
          }
        },
        {
          name: "togglehide",
          self: !0,
          handler(t) {
            t.preventDefault(), C(this.$el, ":focus,:hover") || this.hide();
          }
        },
        {
          name: `${Rt} focusin`,
          filter() {
            return m(this.mode, "hover");
          },
          handler(t) {
            St(t) || this.clearTimers();
          }
        },
        {
          name: `${_e} focusout`,
          filter() {
            return m(this.mode, "hover");
          },
          handler(t) {
            !St(t) && t.relatedTarget && this.hide();
          }
        },
        {
          name: "toggled",
          self: !0,
          handler(t, e) {
            p(this.targetEl, "aria-expanded", e ? !0 : null), e && (this.clearTimers(), this.position());
          }
        },
        {
          name: "show",
          self: !0,
          handler() {
            K = this, this.tracker.init();
            const t = [
              Il(this),
              Tl(this),
              El(this),
              this.autoUpdate && Cl(this),
              !this.bgScroll && In(this.$el)
            ];
            j(this.$el, "hide", () => t.forEach((e) => e && e()), {
              self: !0
            });
          }
        },
        {
          name: "beforehide",
          self: !0,
          handler() {
            this.clearTimers();
          }
        },
        {
          name: "hide",
          handler({ target: t }) {
            if (this.$el !== t) {
              K = K === null && B(t, this.$el) && this.isToggled() ? this : K;
              return;
            }
            K = this.isActive() ? null : K, this.tracker.cancel();
          }
        }
      ],
      update: {
        write() {
          this.isToggled() && !P(this.$el, this.clsEnter) && this.position();
        }
      },
      methods: {
        show(t = this.targetEl, e = !0) {
          if (this.isToggled() && t && this.targetEl && t !== this.targetEl && this.hide(!1, !1), this.targetEl = t, this.clearTimers(), !this.isActive()) {
            if (K) {
              if (e && K.isDelaying) {
                this.showTimer = setTimeout(() => C(t, ":hover") && this.show(), 10);
                return;
              }
              let i;
              for (; K && i !== K && !B(this.$el, K.$el); )
                i = K, K.hide(!1, !1);
            }
            this.container && _(this.$el) !== this.container && L(this.container, this.$el), this.showTimer = setTimeout(
              () => this.toggleElement(this.$el, !0),
              e && this.delayShow || 0
            );
          }
        },
        hide(t = !0, e = !0) {
          const i = () => this.toggleElement(this.$el, !1, this.animateOut && e);
          this.clearTimers(), this.isDelaying = yl(this.$el).some(
            (s) => this.tracker.movesTo(s)
          ), t && this.isDelaying ? this.hideTimer = setTimeout(this.hide, 50) : t && this.delayHide ? this.hideTimer = setTimeout(i, this.delayHide) : i();
        },
        clearTimers() {
          clearTimeout(this.showTimer), clearTimeout(this.hideTimer), this.showTimer = null, this.hideTimer = null, this.isDelaying = !1;
        },
        isActive() {
          return K === this;
        },
        position() {
          M(this.$el, "uk-drop-stack"), c(this.$el, this._style), this.$el.hidden = !0;
          const t = this.target.map((n) => kl(this.$el, n)), e = this.getViewportOffset(this.$el), i = [
            [0, ["x", "width", "left", "right"]],
            [1, ["y", "height", "top", "bottom"]]
          ];
          for (const [n, [o, r]] of i)
            this.axis !== o && m([o, !0], this.stretch) && c(this.$el, {
              [r]: Math.min(
                A(this.boundary[n])[r],
                t[n][r] - 2 * e
              ),
              [`overflow-${o}`]: "auto"
            });
          const s = t[0].width - 2 * e;
          this.$el.hidden = !1, c(this.$el, "maxWidth", ""), this.$el.offsetWidth > s && y(this.$el, "uk-drop-stack"), c(this.$el, "maxWidth", s), this.positionAt(this.$el, this.target, this.boundary);
          for (const [n, [o, r, a, l]] of i)
            if (this.axis === o && m([o, !0], this.stretch)) {
              const h = Math.abs(this.getPositionOffset(this.$el)), u = A(this.target[n]), f = A(this.$el);
              c(this.$el, {
                [r]: (u[a] > f[a] ? u[this.inset ? l : a] - Math.max(
                  A(this.boundary[n])[a],
                  t[n][a] + e
                ) : Math.min(
                  A(this.boundary[n])[l],
                  t[n][l] - e
                ) - u[this.inset ? a : l]) - h,
                [`overflow-${o}`]: "auto"
              }), this.positionAt(this.$el, this.target, this.boundary);
            }
        }
      }
    };
    function yl(t) {
      const e = [];
      return It(t, (i) => c(i, "position") !== "static" && e.push(i)), e;
    }
    function kl(t, e) {
      return ct(jt(e).find((i) => B(t, i)));
    }
    function Sl(t) {
      const { $el: e } = t.$create("toggle", at(t.toggle, t.$el), {
        target: t.$el,
        mode: t.mode
      });
      return p(e, "aria-haspopup", !0), e;
    }
    function Il(t) {
      const e = () => t.$emit(), i = [
        ts(e),
        ai(jt(t.$el).concat(t.target), e)
      ];
      return () => i.map((s) => s.disconnect());
    }
    function Cl(t) {
      return x([document, ...jt(t.$el)], "scroll", () => t.$emit(), {
        passive: !0
      });
    }
    function Tl(t) {
      return x(document, "keydown", (e) => {
        e.keyCode === I.ESC && t.hide(!1);
      });
    }
    function El(t) {
      return x(document, mt, ({ target: e }) => {
        B(e, t.$el) || j(
          document,
          `${_t} ${ri} scroll`,
          ({ defaultPrevented: i, type: s, target: n }) => {
            !i && s === _t && e === n && !(t.targetEl && B(e, t.targetEl)) && t.hide(!1);
          },
          !0
        );
      });
    }
    var bo = {
      mixins: [st, Ne],
      props: {
        align: String,
        clsDrop: String,
        boundary: Boolean,
        dropbar: Boolean,
        dropbarAnchor: Boolean,
        duration: Number,
        mode: Boolean,
        offset: Boolean,
        stretch: Boolean,
        delayShow: Boolean,
        delayHide: Boolean,
        target: Boolean,
        targetX: Boolean,
        targetY: Boolean,
        animation: Boolean,
        animateOut: Boolean
      },
      data: {
        align: X ? "right" : "left",
        clsDrop: "uk-dropdown",
        clsDropbar: "uk-dropnav-dropbar",
        boundary: !0,
        dropbar: !1,
        dropbarAnchor: !1,
        duration: 200,
        container: !1,
        selNavItem: "> li > a, > ul > li > a"
      },
      computed: {
        dropbarAnchor({ dropbarAnchor: t }, e) {
          return at(t, e) || e;
        },
        dropbar({ dropbar: t }) {
          return t ? (t = this._dropbar || at(t, this.$el) || w(`+ .${this.clsDropbar}`, this.$el), t || (this._dropbar = w("<div></div>"))) : null;
        },
        dropContainer(t, e) {
          return this.container || e;
        },
        dropdowns({ clsDrop: t }, e) {
          var i;
          const s = z(`.${t}`, e);
          if (this.dropContainer !== e)
            for (const n of z(`.${t}`, this.dropContainer)) {
              const o = (i = this.getDropdown(n)) == null ? void 0 : i.targetEl;
              !m(s, n) && o && B(o, this.$el) && s.push(n);
            }
          return s;
        },
        items({ selNavItem: t }, e) {
          return z(t, e);
        }
      },
      watch: {
        dropbar(t) {
          y(
            t,
            "uk-dropbar",
            "uk-dropbar-top",
            this.clsDropbar,
            `uk-${this.$options.name}-dropbar`
          );
        },
        dropdowns() {
          this.initializeDropdowns();
        }
      },
      connected() {
        this.initializeDropdowns();
      },
      disconnected() {
        lt(this._dropbar), delete this._dropbar;
      },
      events: [
        {
          name: "mouseover focusin",
          delegate() {
            return this.selNavItem;
          },
          handler({ current: t }) {
            const e = this.getActive();
            e && m(e.mode, "hover") && e.targetEl && !B(e.targetEl, t) && !e.isDelaying && e.hide(!1);
          }
        },
        {
          name: "keydown",
          self: !0,
          delegate() {
            return this.selNavItem;
          },
          handler(t) {
            var e;
            const { current: i, keyCode: s } = t, n = this.getActive();
            s === I.DOWN && (n == null ? void 0 : n.targetEl) === i && (t.preventDefault(), (e = w(ye, n.$el)) == null || e.focus()), $o(t, this.items, n);
          }
        },
        {
          name: "keydown",
          el() {
            return this.dropContainer;
          },
          delegate() {
            return `.${this.clsDrop}`;
          },
          handler(t) {
            var e;
            const { current: i, keyCode: s } = t;
            if (!m(this.dropdowns, i))
              return;
            const n = this.getActive();
            let o = -1;
            if (s === I.HOME ? o = 0 : s === I.END ? o = "last" : s === I.UP ? o = "previous" : s === I.DOWN ? o = "next" : s === I.ESC && ((e = n.targetEl) == null || e.focus()), ~o) {
              t.preventDefault();
              const r = z(ye, i);
              r[rt(
                o,
                r,
                xt(r, (a) => C(a, ":focus"))
              )].focus();
            }
            $o(t, this.items, n);
          }
        },
        {
          name: "mouseleave",
          el() {
            return this.dropbar;
          },
          filter() {
            return this.dropbar;
          },
          handler() {
            const t = this.getActive();
            t && m(t.mode, "hover") && !this.dropdowns.some((e) => C(e, ":hover")) && t.hide();
          }
        },
        {
          name: "beforeshow",
          el() {
            return this.dropContainer;
          },
          filter() {
            return this.dropbar;
          },
          handler({ target: t }) {
            this.isDropbarDrop(t) && (this.dropbar.previousElementSibling !== this.dropbarAnchor && ei(this.dropbarAnchor, this.dropbar), y(t, `${this.clsDrop}-dropbar`));
          }
        },
        {
          name: "show",
          el() {
            return this.dropContainer;
          },
          filter() {
            return this.dropbar;
          },
          handler({ target: t }) {
            if (!this.isDropbarDrop(t))
              return;
            const e = this.getDropdown(t), i = () => {
              const s = oe(t, `.${this.clsDrop}`).concat(t).map((a) => A(a)), n = Math.min(...s.map(({ top: a }) => a)), o = Math.max(...s.map(({ bottom: a }) => a)), r = A(this.dropbar);
              c(this.dropbar, "top", this.dropbar.offsetTop - (r.top - n)), this.transitionTo(
                o - n + $(c(t, "marginBottom")),
                t
              );
            };
            this._observer = ai([e.$el, ...e.target], i), i();
          }
        },
        {
          name: "beforehide",
          el() {
            return this.dropContainer;
          },
          filter() {
            return this.dropbar;
          },
          handler(t) {
            const e = this.getActive();
            C(this.dropbar, ":hover") && e.$el === t.target && !this.items.some((i) => e.targetEl !== i && C(i, ":focus")) && t.preventDefault();
          }
        },
        {
          name: "hide",
          el() {
            return this.dropContainer;
          },
          filter() {
            return this.dropbar;
          },
          handler({ target: t }) {
            var e;
            if (!this.isDropbarDrop(t))
              return;
            (e = this._observer) == null || e.disconnect();
            const i = this.getActive();
            (!i || i.$el === t) && this.transitionTo(0);
          }
        }
      ],
      methods: {
        getActive() {
          var t;
          return m(this.dropdowns, (t = K) == null ? void 0 : t.$el) && K;
        },
        async transitionTo(t, e) {
          const { dropbar: i } = this, s = et(i);
          e = s < t && e, await E.cancel([e, i]), c(e, "clipPath", `polygon(0 0,100% 0,100% ${s}px,0 ${s}px)`), et(i, s), await Promise.all([
            E.start(i, { height: t }, this.duration),
            E.start(
              e,
              {
                clipPath: `polygon(0 0,100% 0,100% ${t}px,0 ${t}px)`
              },
              this.duration
            ).finally(() => c(e, { clipPath: "" }))
          ]).catch(S);
        },
        getDropdown(t) {
          return this.$getComponent(t, "drop") || this.$getComponent(t, "dropdown");
        },
        isDropbarDrop(t) {
          return this.getDropdown(t) && P(t, this.clsDrop);
        },
        initializeDropdowns() {
          this.$create(
            "drop",
            this.dropdowns.filter((t) => !this.getDropdown(t)),
            {
              ...this.$props,
              flip: !1,
              shift: !0,
              pos: `bottom-${this.align}`,
              boundary: this.boundary === !0 ? this.$el : this.boundary
            }
          );
        }
      }
    };
    function $o(t, e, i) {
      var s, n, o;
      const { current: r, keyCode: a } = t;
      let l = -1;
      a === I.HOME ? l = 0 : a === I.END ? l = "last" : a === I.LEFT ? l = "previous" : a === I.RIGHT ? l = "next" : a === I.TAB && ((s = i.targetEl) == null || s.focus(), (n = i.hide) == null || n.call(i, !1)), ~l && (t.preventDefault(), (o = i.hide) == null || o.call(i, !1), e[rt(l, e, e.indexOf(i.targetEl || r))].focus());
    }
    var Pl = {
      mixins: [st],
      args: "target",
      props: {
        target: Boolean
      },
      data: {
        target: !1
      },
      computed: {
        input(t, e) {
          return w(xe, e);
        },
        state() {
          return this.input.nextElementSibling;
        },
        target({ target: t }, e) {
          return t && (t === !0 && _(this.input) === e && this.input.nextElementSibling || w(t, e));
        }
      },
      update() {
        var t;
        const { target: e, input: i } = this;
        if (!e)
          return;
        let s;
        const n = Ri(e) ? "value" : "textContent", o = e[n], r = (t = i.files) != null && t[0] ? i.files[0].name : C(i, "select") && (s = z("option", i).filter((a) => a.selected)[0]) ? s.textContent : i.value;
        o !== r && (e[n] = r);
      },
      events: [
        {
          name: "change",
          handler() {
            this.$emit();
          }
        },
        {
          name: "reset",
          el() {
            return U(this.$el, "form");
          },
          handler() {
            this.$emit();
          }
        }
      ]
    }, _l = {
      extends: pn,
      mixins: [st],
      name: "grid",
      props: {
        masonry: Boolean,
        parallax: Number
      },
      data: {
        margin: "uk-grid-margin",
        clsStack: "uk-grid-stack",
        masonry: !1,
        parallax: 0
      },
      connected() {
        this.masonry && y(this.$el, "uk-flex-top uk-flex-wrap-top");
      },
      observe: ui({ filter: ({ parallax: t }) => t }),
      update: [
        {
          write({ columns: t }) {
            q(this.$el, this.clsStack, t.length < 2);
          },
          events: ["resize"]
        },
        {
          read(t) {
            let { columns: e, rows: i } = t;
            if (!e.length || !this.masonry && !this.parallax || xo(this.$el))
              return t.translates = !1, !1;
            let s = !1;
            const n = T(this.$el), o = e.map((h) => Dt(h, "offsetHeight")), r = Ol(n, this.margin) * (i.length - 1), a = Math.max(...o) + r;
            this.masonry && (e = e.map((h) => Xe(h, "offsetTop")), s = Al(i, e));
            let l = Math.abs(this.parallax);
            return l && (l = o.reduce(
              (h, u, f) => Math.max(
                h,
                u + r + (f % 2 ? l : l / 8) - a
              ),
              0
            )), { padding: l, columns: e, translates: s, height: s ? a : "" };
          },
          write({ height: t, padding: e }) {
            c(this.$el, "paddingBottom", e || ""), t !== !1 && c(this.$el, "height", t);
          },
          events: ["resize"]
        },
        {
          read() {
            return this.parallax && xo(this.$el) ? !1 : {
              scrolled: this.parallax ? ns(this.$el) * Math.abs(this.parallax) : !1
            };
          },
          write({ columns: t, scrolled: e, translates: i }) {
            e === !1 && !i || t.forEach(
              (s, n) => s.forEach(
                (o, r) => c(
                  o,
                  "transform",
                  !e && !i ? "" : `translateY(${(i && -i[n][r]) + (e ? n % 2 ? e : e / 8 : 0)}px)`
                )
              )
            );
          },
          events: ["scroll", "resize"]
        }
      ]
    };
    function xo(t) {
      return T(t).some((e) => c(e, "position") === "absolute");
    }
    function Al(t, e) {
      const i = t.map((s) => Math.max(...s.map((n) => n.offsetHeight)));
      return e.map((s) => {
        let n = 0;
        return s.map(
          (o, r) => n += r ? i[r - 1] - s[r - 1].offsetHeight : 0
        );
      });
    }
    function Ol(t, e) {
      const [i] = t.filter((s) => P(s, e));
      return $(i ? c(i, "marginTop") : c(t[0], "paddingLeft"));
    }
    var Dl = {
      args: "target",
      props: {
        target: String,
        row: Boolean
      },
      data: {
        target: "> *",
        row: !0
      },
      computed: {
        elements({ target: t }, e) {
          return z(t, e);
        }
      },
      observe: pt({
        target: ({ $el: t, elements: e }) => [t, ...e]
      }),
      update: {
        read() {
          return {
            rows: (this.row ? ls(this.elements) : [this.elements]).map(Bl)
          };
        },
        write({ rows: t }) {
          for (const { heights: e, elements: i } of t)
            i.forEach((s, n) => c(s, "minHeight", e[n]));
        },
        events: ["resize"]
      }
    };
    function Bl(t) {
      if (t.length < 2)
        return { heights: [""], elements: t };
      let e = t.map(Ml);
      const i = Math.max(...e);
      return {
        heights: t.map((s, n) => e[n].toFixed(2) === i.toFixed(2) ? "" : i),
        elements: t
      };
    }
    function Ml(t) {
      const e = Mi(t.style, ["display", "minHeight"]);
      R(t) || c(t, "display", "block", "important"), c(t, "minHeight", "");
      const i = b(t).height - he(t, "height", "content-box");
      return c(t, e), i;
    }
    var Nl = {
      props: {
        expand: Boolean,
        offsetTop: Boolean,
        offsetBottom: Boolean,
        minHeight: Number
      },
      data: {
        expand: !1,
        offsetTop: !1,
        offsetBottom: !1,
        minHeight: 0
      },
      // check for offsetTop change
      observe: pt({
        target: ({ $el: t }) => [t, ...fe(t)]
      }),
      update: {
        read() {
          if (!R(this.$el))
            return !1;
          let t = "";
          const e = he(this.$el, "height", "content-box"), { body: i, scrollingElement: s } = document, n = Ct(this.$el), { height: o } = ct(
            n === i ? s : n
          );
          if (this.expand)
            t = `${o - (b(n).height - b(this.$el).height) - e}px`;
          else {
            const r = s === n || i === n;
            if (t = `calc(${r ? "100vh" : `${o}px`}`, this.offsetTop)
              if (r) {
                const a = Ht(this.$el)[0] - Ht(n)[0];
                t += a > 0 && a < o / 2 ? ` - ${a}px` : "";
              } else
                t += ` - ${c(n, "paddingTop")}`;
            this.offsetBottom === !0 ? t += ` - ${b(this.$el.nextElementSibling).height}px` : bt(this.offsetBottom) ? t += ` - ${this.offsetBottom}vh` : this.offsetBottom && Zt(this.offsetBottom, "px") ? t += ` - ${$(this.offsetBottom)}px` : D(this.offsetBottom) && (t += ` - ${b(at(this.offsetBottom, this.$el)).height}px`), t += `${e ? ` - ${e}px` : ""})`;
          }
          return { minHeight: t };
        },
        write({ minHeight: t }) {
          c(this.$el, "minHeight", `max(${this.minHeight || 0}px, ${t})`);
        },
        events: ["resize"]
      }
    }, zl = '<svg width="14" height="14" viewBox="0 0 14 14"><line fill="none" stroke="#000" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"/><line fill="none" stroke="#000" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"/></svg>', Fl = '<svg width="20" height="20" viewBox="0 0 20 20"><line fill="none" stroke="#000" stroke-width="1.4" x1="1" y1="1" x2="19" y2="19"/><line fill="none" stroke="#000" stroke-width="1.4" x1="19" y1="1" x2="1" y2="19"/></svg>', Hl = '<svg width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>', Ll = '<svg width="20" height="20" viewBox="0 0 20 20"><rect x="9" y="4" width="1" height="11"/><rect x="4" y="9" width="11" height="1"/></svg>', Wl = '<svg width="14" height="14" viewBox="0 0 14 14"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 4 7 10 13 4"/></svg>', Rl = '<svg width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>', jl = '<svg width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>', ql = '<svg width="20" height="20" viewBox="0 0 20 20"><style>.uk-navbar-toggle-animate svg&gt;[class*=&quot;line-&quot;]{transition:0.2s ease-in-out;transition-property:transform, opacity;transform-origin:center;opacity:1}.uk-navbar-toggle svg&gt;.line-3{opacity:0}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-3{opacity:1}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-2{transform:rotate(45deg)}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-3{transform:rotate(-45deg)}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-1,.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-4{opacity:0}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-1{transform:translateY(6px) scaleX(0)}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-4{transform:translateY(-6px) scaleX(0)}</style><rect class="line-1" y="3" width="20" height="2"/><rect class="line-2" y="9" width="20" height="2"/><rect class="line-3" y="9" width="20" height="2"/><rect class="line-4" y="15" width="20" height="2"/></svg>', Ul = '<svg width="40" height="40" viewBox="0 0 40 40"><rect x="19" y="0" width="1" height="40"/><rect x="0" y="19" width="40" height="1"/></svg>', Vl = '<svg width="7" height="12" viewBox="0 0 7 12"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 1 6 6 1 11"/></svg>', Yl = '<svg width="7" height="12" viewBox="0 0 7 12"><polyline fill="none" stroke="#000" stroke-width="1.2" points="6 1 1 6 6 11"/></svg>', Gl = '<svg width="20" height="20" viewBox="0 0 20 20"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"/></svg>', Xl = '<svg width="40" height="40" viewBox="0 0 40 40"><circle fill="none" stroke="#000" stroke-width="1.8" cx="17.5" cy="17.5" r="16.5"/><line fill="none" stroke="#000" stroke-width="1.8" x1="38" y1="39" x2="29" y2="30"/></svg>', Jl = '<svg width="24" height="24" viewBox="0 0 24 24"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10.5" cy="10.5" r="9.5"/><line fill="none" stroke="#000" stroke-width="1.1" x1="23" y1="23" x2="17" y2="17"/></svg>', Kl = '<svg width="25" height="40" viewBox="0 0 25 40"><polyline fill="none" stroke="#000" stroke-width="2" points="4.002,38.547 22.527,20.024 4,1.5"/></svg>', Zl = '<svg width="14" height="24" viewBox="0 0 14 24"><polyline fill="none" stroke="#000" stroke-width="1.4" points="1.225,23 12.775,12 1.225,1"/></svg>', Ql = '<svg width="25" height="40" viewBox="0 0 25 40"><polyline fill="none" stroke="#000" stroke-width="2" points="20.527,1.5 2,20.024 20.525,38.547"/></svg>', th = '<svg width="14" height="24" viewBox="0 0 14 24"><polyline fill="none" stroke="#000" stroke-width="1.4" points="12.775,1 1.225,12 12.775,23"/></svg>', eh = '<svg width="30" height="30" viewBox="0 0 30 30"><circle fill="none" stroke="#000" cx="15" cy="15" r="14"/></svg>', ih = '<svg width="18" height="10" viewBox="0 0 18 10"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 9 9 1 17 9"/></svg>', yo = {
      args: "src",
      props: {
        width: Number,
        height: Number,
        ratio: Number
      },
      data: {
        ratio: 1
      },
      connected() {
        this.svg = this.getSvg().then((t) => {
          if (!this._connected)
            return;
          const e = sh(t, this.$el);
          return this.svgEl && e !== this.svgEl && lt(this.svgEl), nh.call(this, e, t), this.svgEl = e;
        }, S);
      },
      disconnected() {
        this.svg.then((t) => {
          this._connected || (Wi(this.$el) && (this.$el.hidden = !1), lt(t), this.svgEl = null);
        }), this.svg = null;
      },
      methods: {
        async getSvg() {
        }
      }
    };
    function sh(t, e) {
      if (Wi(e) || G(e, "canvas")) {
        e.hidden = !0;
        const s = e.nextElementSibling;
        return ko(t, s) ? s : ei(e, t);
      }
      const i = e.lastElementChild;
      return ko(t, i) ? i : L(e, t);
    }
    function ko(t, e) {
      return G(t, "svg") && G(e, "svg") && t.innerHTML === e.innerHTML;
    }
    function nh(t, e) {
      const i = ["width", "height"];
      let s = i.map((o) => this[o]);
      s.some((o) => o) || (s = i.map((o) => p(e, o)));
      const n = p(e, "viewBox");
      n && !s.some((o) => o) && (s = n.split(" ").slice(2)), s.forEach((o, r) => p(t, i[r], $(o) * this.ratio || null));
    }
    const Ti = {
      spinner: eh,
      totop: ih,
      marker: Ll,
      "close-icon": zl,
      "close-large": Fl,
      "drop-parent-icon": Hl,
      "nav-parent-icon": Rl,
      "nav-parent-icon-large": Wl,
      "navbar-parent-icon": jl,
      "navbar-toggle-icon": ql,
      "overlay-icon": Ul,
      "pagination-next": Vl,
      "pagination-previous": Yl,
      "search-icon": Gl,
      "search-large": Xl,
      "search-navbar": Jl,
      "slidenav-next": Zl,
      "slidenav-next-large": Kl,
      "slidenav-previous": th,
      "slidenav-previous-large": Ql
    }, ks = {
      install: ph,
      mixins: [yo],
      args: "icon",
      props: { icon: String },
      isIcon: !0,
      beforeConnect() {
        y(this.$el, "uk-icon");
      },
      methods: {
        async getSvg() {
          const t = gh(this.icon);
          if (!t)
            throw "Icon not found.";
          return t;
        }
      }
    }, Gt = {
      args: !1,
      extends: ks,
      data: (t) => ({
        icon: Kt(t.constructor.options.name)
      }),
      beforeConnect() {
        y(this.$el, this.$options.id);
      }
    }, oh = {
      extends: Gt,
      beforeConnect() {
        const t = this.$props.icon;
        this.icon = U(this.$el, ".uk-nav-primary") ? `${t}-large` : t;
      }
    }, rh = {
      extends: Gt,
      mixins: [gi],
      i18n: { toggle: "Open Search", submit: "Submit Search" },
      beforeConnect() {
        if (this.icon = P(this.$el, "uk-search-icon") && oe(this.$el, ".uk-search-large").length ? "search-large" : oe(this.$el, ".uk-search-navbar").length ? "search-navbar" : this.$props.icon, !$t(this.$el, "aria-label"))
          if (P(this.$el, "uk-search-toggle") || P(this.$el, "uk-navbar-toggle")) {
            const t = this.t("toggle");
            p(this.$el, "aria-label", t);
          } else {
            const t = U(this.$el, "a,button");
            if (t) {
              const e = this.t("submit");
              p(t, "aria-label", e);
            }
          }
      }
    }, ah = {
      extends: Gt,
      beforeConnect() {
        p(this.$el, "role", "status");
      },
      methods: {
        async getSvg() {
          const t = await ks.methods.getSvg.call(this);
          return this.ratio !== 1 && c(w("circle", t), "strokeWidth", 1 / this.ratio), t;
        }
      }
    }, Xt = {
      extends: Gt,
      mixins: [gi],
      beforeConnect() {
        const t = U(this.$el, "a,button");
        p(t, "role", this.role !== null && G(t, "a") ? "button" : this.role);
        const e = this.t("label");
        e && !$t(t, "aria-label") && p(t, "aria-label", e);
      }
    }, So = {
      extends: Xt,
      beforeConnect() {
        y(this.$el, "uk-slidenav");
        const t = this.$props.icon;
        this.icon = P(this.$el, "uk-slidenav-large") ? `${t}-large` : t;
      }
    }, lh = {
      extends: Xt,
      i18n: { label: "Open menu" }
    }, hh = {
      extends: Xt,
      i18n: { label: "Close" },
      beforeConnect() {
        this.icon = `close-${P(this.$el, "uk-close-large") ? "large" : "icon"}`;
      }
    }, ch = {
      extends: Xt,
      i18n: { label: "Open" }
    }, uh = {
      extends: Xt,
      i18n: { label: "Back to top" }
    }, fh = {
      extends: Xt,
      i18n: { label: "Next page" },
      data: { role: null }
    }, dh = {
      extends: Xt,
      i18n: { label: "Previous page" },
      data: { role: null }
    }, Ei = {};
    function ph(t) {
      t.icon.add = (e, i) => {
        const s = D(e) ? { [e]: i } : e;
        Pt(s, (n, o) => {
          Ti[o] = n, delete Ei[o];
        }), t._initialized && It(
          document.body,
          (n) => Pt(t.getComponents(n), (o) => {
            o.$options.isIcon && o.icon in s && o.$reset();
          })
        );
      };
    }
    function gh(t) {
      return Ti[t] ? (Ei[t] || (Ei[t] = w((Ti[mh(t)] || Ti[t]).trim())), Ei[t].cloneNode(!0)) : null;
    }
    function mh(t) {
      return X ? Bi(Bi(t, "left", "right"), "previous", "next") : t;
    }
    const vh = Lt && "loading" in HTMLImageElement.prototype;
    var wh = {
      args: "dataSrc",
      props: {
        dataSrc: String,
        sources: String,
        margin: String,
        target: String,
        loading: String
      },
      data: {
        dataSrc: "",
        sources: !1,
        margin: "50%",
        target: !1,
        loading: "lazy"
      },
      connected() {
        if (this.loading !== "lazy") {
          this.load();
          return;
        }
        vh && Pi(this.$el) && (this.$el.loading = "lazy", Ss(this.$el)), kh(this.$el);
      },
      disconnected() {
        this.img && (this.img.onload = ""), delete this.img;
      },
      observe: De({
        target: ({ $el: t, $props: e }) => [t, ...Se(e.target, t)],
        handler(t, e) {
          this.load(), e.disconnect();
        },
        options: ({ margin: t }) => ({ rootMargin: t }),
        filter: ({ loading: t }) => t === "lazy"
      }),
      methods: {
        load() {
          if (this.img)
            return this.img;
          const t = Pi(this.$el) ? this.$el : $h(this.$el, this.dataSrc, this.sources);
          return $e(t, "loading"), Ss(this.$el, t.currentSrc), this.img = t;
        }
      }
    };
    function Ss(t, e) {
      if (Pi(t)) {
        const i = _(t);
        (G(i, "picture") ? T(i) : [t]).forEach((n) => Io(n, n));
      } else
        e && !m(t.style.backgroundImage, e) && (c(t, "backgroundImage", `url(${Ui(e)})`), v(t, Mt("load", !1)));
    }
    const bh = ["data-src", "data-srcset", "sizes"];
    function Io(t, e) {
      for (const i of bh) {
        const s = tt(t, i);
        s && p(e, i.replace(/^(data-)+/, ""), s);
      }
    }
    function $h(t, e, i) {
      const s = new Image();
      return xh(s, i), Io(t, s), s.onload = () => {
        Ss(t, s.currentSrc);
      }, p(s, "src", e), s;
    }
    function xh(t, e) {
      if (e = yh(e), e.length) {
        const i = zt("<picture>");
        for (const s of e) {
          const n = zt("<source>");
          p(n, s), L(i, n);
        }
        L(i, t);
      }
    }
    function yh(t) {
      if (!t)
        return [];
      if (ot(t, "["))
        try {
          t = JSON.parse(t);
        } catch {
          t = [];
        }
      else
        t = Oe(t);
      return Q(t) || (t = [t]), t.filter((e) => !be(e));
    }
    function kh(t) {
      Pi(t) && !$t(t, "src") && p(t, "src", 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"></svg>');
    }
    function Pi(t) {
      return G(t, "img");
    }
    var Sh = {
      mixins: [st, wi],
      props: {
        fill: String
      },
      data: {
        fill: "",
        clsWrapper: "uk-leader-fill",
        clsHide: "uk-leader-hide",
        attrFill: "data-fill"
      },
      computed: {
        fill({ fill: t }) {
          return t || c(this.$el, "--uk-leader-fill-content");
        }
      },
      connected() {
        [this.wrapper] = Xi(this.$el, `<span class="${this.clsWrapper}">`);
      },
      disconnected() {
        Te(this.wrapper.childNodes);
      },
      observe: pt(),
      update: {
        read() {
          return {
            width: Math.trunc(this.$el.offsetWidth / 2),
            fill: this.fill,
            hide: !this.matchMedia
          };
        },
        write({ width: t, fill: e, hide: i }) {
          q(this.wrapper, this.clsHide, i), p(this.wrapper, this.attrFill, new Array(t).join(e));
        },
        events: ["resize"]
      }
    }, Ih = {
      install: Ch,
      mixins: [fs],
      data: {
        clsPage: "uk-modal-page",
        selPanel: ".uk-modal-dialog",
        selClose: ".uk-modal-close, .uk-modal-close-default, .uk-modal-close-outside, .uk-modal-close-full"
      },
      events: [
        {
          name: "show",
          self: !0,
          handler() {
            P(this.panel, "uk-margin-auto-vertical") ? y(this.$el, "uk-flex") : c(this.$el, "display", "block"), et(this.$el);
          }
        },
        {
          name: "hidden",
          self: !0,
          handler() {
            c(this.$el, "display", ""), M(this.$el, "uk-flex");
          }
        }
      ]
    };
    function Ch({ modal: t }) {
      t.dialog = function(i, s) {
        const n = t(
          `<div class="uk-modal"> <div class="uk-modal-dialog">${i}</div> </div>`,
          { stack: !0, role: "alertdialog", ...s }
        );
        return n.show(), x(
          n.$el,
          "hidden",
          async () => {
            await Promise.resolve(), n.$destroy(!0);
          },
          { self: !0 }
        ), n;
      }, t.alert = function(i, s) {
        return e(
          ({ i18n: n }) => `<div class="uk-modal-body">${D(i) ? i : Nt(i)}</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-primary uk-modal-close" autofocus>${n.ok}</button> </div>`,
          s
        );
      }, t.confirm = function(i, s) {
        return e(
          ({ i18n: n }) => `<form> <div class="uk-modal-body">${D(i) ? i : Nt(i)}</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">${n.cancel}</button> <button class="uk-button uk-button-primary" autofocus>${n.ok}</button> </div> </form>`,
          s,
          () => Promise.reject()
        );
      }, t.prompt = function(i, s, n) {
        const o = e(
          ({ i18n: l }) => `<form class="uk-form-stacked"> <div class="uk-modal-body"> <label>${D(i) ? i : Nt(i)}</label> <input class="uk-input" value="${s || ""}" autofocus> </div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">${l.cancel}</button> <button class="uk-button uk-button-primary">${l.ok}</button> </div> </form>`,
          n,
          () => null,
          () => a.value
        ), { $el: r } = o.dialog, a = w("input", r);
        return x(r, "show", () => a.select()), o;
      }, t.i18n = {
        ok: "Ok",
        cancel: "Cancel"
      };
      function e(i, s, n = S, o = S) {
        s = {
          bgClose: !1,
          escClose: !0,
          ...s,
          i18n: { ...t.i18n, ...s == null ? void 0 : s.i18n }
        };
        const r = t.dialog(i(s), s);
        return wt(
          new Promise((a) => {
            const l = x(r.$el, "hide", () => a(n()));
            x(r.$el, "submit", "form", (h) => {
              h.preventDefault(), a(o(r)), l(), r.hide();
            });
          }),
          { dialog: r }
        );
      }
    }
    var Th = {
      extends: go,
      data: {
        targets: "> .uk-parent",
        toggle: "> a",
        content: "> ul"
      }
    }, Eh = {
      extends: bo,
      data: {
        clsDrop: "uk-navbar-dropdown",
        selNavItem: ".uk-navbar-nav > li > a,a.uk-navbar-item,button.uk-navbar-item,.uk-navbar-item a,.uk-navbar-item button,.uk-navbar-toggle"
        // Simplify with :where() selector once browser target is Safari 14+
      },
      watch: {
        items() {
          const t = P(this.$el, "uk-navbar-justify");
          for (const e of z(
            ".uk-navbar-nav, .uk-navbar-left, .uk-navbar-right",
            this.$el
          ))
            c(
              e,
              "flexGrow",
              t ? z(
                ".uk-navbar-nav > li > a, .uk-navbar-item, .uk-navbar-toggle",
                e
              ).length : ""
            );
        }
      }
    }, Ph = {
      mixins: [fs],
      args: "mode",
      props: {
        mode: String,
        flip: Boolean,
        overlay: Boolean,
        swiping: Boolean
      },
      data: {
        mode: "slide",
        flip: !1,
        overlay: !1,
        clsPage: "uk-offcanvas-page",
        clsContainer: "uk-offcanvas-container",
        selPanel: ".uk-offcanvas-bar",
        clsFlip: "uk-offcanvas-flip",
        clsContainerAnimation: "uk-offcanvas-container-animation",
        clsSidebarAnimation: "uk-offcanvas-bar-animation",
        clsMode: "uk-offcanvas",
        clsOverlay: "uk-offcanvas-overlay",
        selClose: ".uk-offcanvas-close",
        container: !1,
        swiping: !0
      },
      computed: {
        clsFlip({ flip: t, clsFlip: e }) {
          return t ? e : "";
        },
        clsOverlay({ overlay: t, clsOverlay: e }) {
          return t ? e : "";
        },
        clsMode({ mode: t, clsMode: e }) {
          return `${e}-${t}`;
        },
        clsSidebarAnimation({ mode: t, clsSidebarAnimation: e }) {
          return t === "none" || t === "reveal" ? "" : e;
        },
        clsContainerAnimation({ mode: t, clsContainerAnimation: e }) {
          return t !== "push" && t !== "reveal" ? "" : e;
        },
        transitionElement({ mode: t }) {
          return t === "reveal" ? _(this.panel) : this.panel;
        }
      },
      observe: dn({ filter: ({ swiping: t }) => t }),
      update: {
        read() {
          this.isToggled() && !R(this.$el) && this.hide();
        },
        events: ["resize"]
      },
      events: [
        {
          name: "touchmove",
          self: !0,
          passive: !1,
          filter() {
            return this.overlay;
          },
          handler(t) {
            t.cancelable && t.preventDefault();
          }
        },
        {
          name: "show",
          self: !0,
          handler() {
            this.mode === "reveal" && !P(_(this.panel), this.clsMode) && (si(this.panel, "<div>"), y(_(this.panel), this.clsMode));
            const { body: t, scrollingElement: e } = document;
            y(t, this.clsContainer, this.clsFlip), c(t, "touch-action", "pan-y pinch-zoom"), c(this.$el, "display", "block"), c(this.panel, "maxWidth", e.clientWidth), y(this.$el, this.clsOverlay), y(
              this.panel,
              this.clsSidebarAnimation,
              this.mode === "reveal" ? "" : this.clsMode
            ), et(t), y(t, this.clsContainerAnimation), this.clsContainerAnimation && _h();
          }
        },
        {
          name: "hide",
          self: !0,
          handler() {
            M(document.body, this.clsContainerAnimation), c(document.body, "touch-action", "");
          }
        },
        {
          name: "hidden",
          self: !0,
          handler() {
            this.clsContainerAnimation && Ah(), this.mode === "reveal" && Te(this.panel), M(this.panel, this.clsSidebarAnimation, this.clsMode), M(this.$el, this.clsOverlay), c(this.$el, "display", ""), c(this.panel, "maxWidth", ""), M(document.body, this.clsContainer, this.clsFlip);
          }
        },
        {
          name: "swipeLeft swipeRight",
          handler(t) {
            this.isToggled() && Zt(t.type, "Left") ^ this.flip && this.hide();
          }
        }
      ]
    };
    function _h() {
      Co().content += ",user-scalable=0";
    }
    function Ah() {
      const t = Co();
      t.content = t.content.replace(/,user-scalable=0$/, "");
    }
    function Co() {
      return w('meta[name="viewport"]', document.head) || L(document.head, '<meta name="viewport">');
    }
    var Oh = {
      mixins: [st],
      props: {
        selContainer: String,
        selContent: String,
        minHeight: Number
      },
      data: {
        selContainer: ".uk-modal",
        selContent: ".uk-modal-dialog",
        minHeight: 150
      },
      computed: {
        container({ selContainer: t }, e) {
          return U(e, t);
        },
        content({ selContent: t }, e) {
          return U(e, t);
        }
      },
      observe: pt({
        target: ({ container: t, content: e }) => [t, e]
      }),
      update: {
        read() {
          return !this.content || !this.container || !R(this.$el) ? !1 : {
            max: Math.max(
              this.minHeight,
              et(this.container) - (b(this.content).height - et(this.$el))
            )
          };
        },
        write({ max: t }) {
          c(this.$el, { minHeight: this.minHeight, maxHeight: t });
        },
        events: ["resize"]
      }
    }, Dh = {
      props: ["width", "height"],
      connected() {
        y(this.$el, "uk-responsive-width");
      },
      observe: pt({
        target: ({ $el: t }) => [t, _(t)]
      }),
      update: {
        read() {
          return R(this.$el) && this.width && this.height ? { width: Ee(_(this.$el)), height: this.height } : !1;
        },
        write(t) {
          et(
            this.$el,
            Ke.contain(
              {
                height: this.height,
                width: this.width
              },
              t
            ).height
          );
        },
        events: ["resize"]
      }
    }, Bh = {
      props: {
        offset: Number
      },
      data: {
        offset: 0
      },
      connected() {
        Mh(this);
      },
      disconnected() {
        Nh(this);
      },
      methods: {
        async scrollTo(t) {
          t = t && w(t) || document.body, v(this.$el, "beforescroll", [this, t]) && (await Qs(t, { offset: this.offset }), v(this.$el, "scrolled", [this, t]));
        }
      }
    };
    const qe = /* @__PURE__ */ new Set();
    function Mh(t) {
      qe.size || x(document, "click", To), qe.add(t);
    }
    function Nh(t) {
      qe.delete(t), qe.size || Bt(document, "click", To);
    }
    function To(t) {
      if (!t.defaultPrevented)
        for (const e of qe)
          B(t.target, e.$el) && ae(e.$el) && (t.preventDefault(), window.location.href !== e.$el.href && window.history.pushState({}, "", e.$el.href), e.scrollTo(ji(e.$el)));
    }
    var zh = {
      args: "cls",
      props: {
        cls: String,
        target: String,
        hidden: Boolean,
        margin: String,
        repeat: Boolean,
        delay: Number
      },
      data: () => ({
        cls: "",
        target: !1,
        hidden: !0,
        margin: "-1px",
        repeat: !1,
        delay: 0,
        inViewClass: "uk-scrollspy-inview"
      }),
      computed: {
        elements({ target: t }, e) {
          return t ? z(t, e) : [e];
        }
      },
      watch: {
        elements(t) {
          this.hidden && c(ke(t, `:not(.${this.inViewClass})`), "opacity", 0);
        }
      },
      connected() {
        this.elementData = /* @__PURE__ */ new Map();
      },
      disconnected() {
        for (const [t, e] of this.elementData.entries())
          M(t, this.inViewClass, (e == null ? void 0 : e.cls) || "");
        delete this.elementData;
      },
      observe: De({
        target: ({ elements: t }) => t,
        handler(t) {
          const e = this.elementData;
          for (const { target: i, isIntersecting: s } of t) {
            e.has(i) || e.set(i, {
              cls: tt(i, "uk-scrollspy-class") || this.cls
            });
            const n = e.get(i);
            !this.repeat && n.show || (n.show = s);
          }
          this.$emit();
        },
        options: (t) => ({ rootMargin: t.margin }),
        args: { intersecting: !1 }
      }),
      update: [
        {
          write(t) {
            for (const [e, i] of this.elementData.entries())
              i.show && !i.inview && !i.queued ? (i.queued = !0, t.promise = (t.promise || Promise.resolve()).then(() => new Promise((s) => setTimeout(s, this.delay))).then(() => {
                this.toggle(e, !0), setTimeout(() => {
                  i.queued = !1, this.$emit();
                }, 300);
              })) : !i.show && i.inview && !i.queued && this.repeat && this.toggle(e, !1);
          }
        }
      ],
      methods: {
        toggle(t, e) {
          var i;
          const s = this.elementData.get(t);
          if (s) {
            if ((i = s.off) == null || i.call(s), c(t, "opacity", !e && this.hidden ? 0 : ""), q(t, this.inViewClass, e), q(t, s.cls), /\buk-animation-/.test(s.cls)) {
              const n = () => Fi(t, "uk-animation-[\\w-]+");
              e ? s.off = j(t, "animationcancel animationend", n) : n();
            }
            v(t, e ? "inview" : "outview"), s.inview = e, this.$update(t);
          }
        }
      }
    }, Fh = {
      props: {
        cls: String,
        closest: String,
        scroll: Boolean,
        overflow: Boolean,
        offset: Number
      },
      data: {
        cls: "uk-active",
        closest: !1,
        scroll: !1,
        overflow: !0,
        offset: 0
      },
      computed: {
        links(t, e) {
          return z('a[href*="#"]', e).filter((i) => i.hash && ae(i));
        },
        elements({ closest: t }) {
          return U(this.links, t || "*");
        }
      },
      watch: {
        links(t) {
          this.scroll && this.$create("scroll", t, { offset: this.offset || 0 });
        }
      },
      observe: [De(), ui()],
      update: [
        {
          read() {
            const t = this.links.map(ji).filter(Boolean), { length: e } = t;
            if (!e || !R(this.$el))
              return !1;
            const i = Ct(t, !0), { scrollTop: s, scrollHeight: n } = i, o = ct(i), r = n - o.height;
            let a = !1;
            if (s === r)
              a = e - 1;
            else {
              for (let l = 0; l < t.length && !(A(t[l]).top - o.top - this.offset > 0); l++)
                a = +l;
              a === !1 && this.overflow && (a = 0);
            }
            return { active: a };
          },
          write({ active: t }) {
            const e = t !== !1 && !P(this.elements[t], this.cls);
            this.links.forEach((i) => i.blur());
            for (let i = 0; i < this.elements.length; i++)
              q(this.elements[i], this.cls, +i === t);
            e && v(this.$el, "active", [t, this.elements[t]]);
          },
          events: ["scroll", "resize"]
        }
      ]
    }, Hh = {
      mixins: [st, wi],
      props: {
        position: String,
        top: null,
        bottom: null,
        start: null,
        end: null,
        offset: String,
        overflowFlip: Boolean,
        animation: String,
        clsActive: String,
        clsInactive: String,
        clsFixed: String,
        clsBelow: String,
        selTarget: String,
        showOnUp: Boolean,
        targetOffset: Number
      },
      data: {
        position: "top",
        top: !1,
        bottom: !1,
        start: !1,
        end: !1,
        offset: 0,
        overflowFlip: !1,
        animation: "",
        clsActive: "uk-active",
        clsInactive: "",
        clsFixed: "uk-sticky-fixed",
        clsBelow: "uk-sticky-below",
        selTarget: "",
        showOnUp: !1,
        targetOffset: !1
      },
      computed: {
        selTarget({ selTarget: t }, e) {
          return t && w(t, e) || e;
        }
      },
      connected() {
        this.start = Eo(this.start || this.top), this.end = Eo(this.end || this.bottom), this.placeholder = w("+ .uk-sticky-placeholder", this.$el) || w('<div class="uk-sticky-placeholder"></div>'), this.isFixed = !1, this.setActive(!1);
      },
      beforeDisconnect() {
        this.isFixed && (this.hide(), M(this.selTarget, this.clsInactive)), Po(this.$el), lt(this.placeholder), this.placeholder = null;
      },
      observe: [
        fn(),
        ui({ target: () => document.scrollingElement }),
        pt({ target: ({ $el: t }) => [t, document.scrollingElement] })
      ],
      events: [
        {
          name: "load hashchange popstate",
          el() {
            return window;
          },
          filter() {
            return this.targetOffset !== !1;
          },
          handler() {
            const { scrollingElement: t } = document;
            !location.hash || t.scrollTop === 0 || setTimeout(() => {
              const e = A(w(location.hash)), i = A(this.$el);
              this.isFixed && Ni(e, i) && (t.scrollTop = e.top - i.height - ht(this.targetOffset, "height", this.placeholder) - ht(this.offset, "height", this.placeholder));
            });
          }
        },
        {
          name: "transitionstart",
          capture: !0,
          handler() {
            this.transitionInProgress = j(
              this.$el,
              "transitionend transitioncancel",
              () => this.transitionInProgress = null
            );
          }
        }
      ],
      update: [
        {
          read({ height: t, width: e, margin: i, sticky: s }) {
            if (this.inactive = !this.matchMedia || !R(this.$el), this.inactive)
              return;
            const n = this.isFixed && !this.transitionInProgress;
            n && (_o(this.selTarget), this.hide()), this.active || ({ height: t, width: e } = A(this.$el), i = c(this.$el, "margin")), n && this.show();
            const o = ht("100vh", "height"), r = et(window), a = document.scrollingElement.scrollHeight - o;
            let l = this.position;
            this.overflowFlip && t > o && (l = l === "top" ? "bottom" : "top");
            const h = this.isFixed ? this.placeholder : this.$el;
            let u = ht(this.offset, "height", s ? this.$el : h);
            l === "bottom" && (t < r || this.overflowFlip) && (u += r - t);
            const f = this.overflowFlip ? 0 : Math.max(0, t + u - o), d = A(h).top, g = A(this.$el).height, O = (this.start === !1 ? d : Is(this.start, this.$el, d)) - u, N = this.end === !1 ? a : Math.min(
              a,
              Is(this.end, this.$el, d + t, !0) - g - u + f
            );
            return s = a && !this.showOnUp && O + u === d && N === Math.min(
              a,
              Is("!*", this.$el, 0, !0) - g - u + f
            ) && c(_(this.$el), "overflowY") === "visible", {
              start: O,
              end: N,
              offset: u,
              overflow: f,
              topOffset: d,
              height: t,
              elHeight: g,
              width: e,
              margin: i,
              top: Ht(h)[0],
              sticky: s
            };
          },
          write({ height: t, width: e, margin: i, offset: s, sticky: n }) {
            if ((this.inactive || n || !this.isFixed) && Po(this.$el), this.inactive)
              return;
            n && (t = e = i = 0, c(this.$el, { position: "sticky", top: s }));
            const { placeholder: o } = this;
            c(o, { height: t, width: e, margin: i }), B(o, document) || (o.hidden = !0), (n ? ti : ei)(this.$el, o);
          },
          events: ["resize"]
        },
        {
          read({
            scroll: t = 0,
            dir: e = "down",
            overflow: i,
            overflowScroll: s = 0,
            start: n,
            end: o
          }) {
            const r = document.scrollingElement.scrollTop;
            return {
              dir: t <= r ? "down" : "up",
              prevDir: e,
              scroll: r,
              prevScroll: t,
              offsetParentTop: A(
                (this.isFixed ? this.placeholder : this.$el).offsetParent
              ).top,
              overflowScroll: Z(
                s + Z(r, n, o) - Z(t, n, o),
                0,
                i
              )
            };
          },
          write(t, e) {
            const i = e.has("scroll"), {
              initTimestamp: s = 0,
              dir: n,
              prevDir: o,
              scroll: r,
              prevScroll: a = 0,
              top: l,
              start: h,
              topOffset: u,
              height: f
            } = t;
            if (r < 0 || r === a && i || this.showOnUp && !i && !this.isFixed)
              return;
            const d = Date.now();
            if ((d - s > 300 || n !== o) && (t.initScroll = r, t.initTimestamp = d), !(this.showOnUp && !this.isFixed && Math.abs(t.initScroll - r) <= 30 && Math.abs(a - r) <= 10))
              if (this.inactive || r < h || this.showOnUp && (r <= h || n === "down" && i || n === "up" && !this.isFixed && r <= u + f)) {
                if (!this.isFixed) {
                  gt.inProgress(this.$el) && l > r && (gt.cancel(this.$el), this.hide());
                  return;
                }
                this.animation && r > u ? (gt.cancel(this.$el), gt.out(this.$el, this.animation).then(() => this.hide(), S)) : this.hide();
              } else
                this.isFixed ? this.update() : this.animation && r > u ? (gt.cancel(this.$el), this.show(), gt.in(this.$el, this.animation).catch(S)) : (_o(this.selTarget), this.show());
          },
          events: ["resize", "resizeViewport", "scroll"]
        }
      ],
      methods: {
        show() {
          this.isFixed = !0, this.update(), this.placeholder.hidden = !1;
        },
        hide() {
          const { offset: t, sticky: e } = this._data;
          this.setActive(!1), M(this.$el, this.clsFixed, this.clsBelow), e ? c(this.$el, "top", t) : c(this.$el, {
            position: "",
            top: "",
            width: "",
            marginTop: ""
          }), this.placeholder.hidden = !0, this.isFixed = !1;
        },
        update() {
          let {
            width: t,
            scroll: e = 0,
            overflow: i,
            overflowScroll: s = 0,
            start: n,
            end: o,
            offset: r,
            topOffset: a,
            height: l,
            elHeight: h,
            offsetParentTop: u,
            sticky: f
          } = this._data;
          const d = n !== 0 || e > n;
          if (!f) {
            let g = "fixed";
            e > o && (r += o - u, g = "absolute"), c(this.$el, { position: g, width: t, marginTop: 0 }, "important");
          }
          i && (r -= s), c(this.$el, "top", r), this.setActive(d), q(
            this.$el,
            this.clsBelow,
            e > a + (f ? Math.min(l, h) : l)
          ), y(this.$el, this.clsFixed);
        },
        setActive(t) {
          const e = this.active;
          this.active = t, t ? (Hi(this.selTarget, this.clsInactive, this.clsActive), e !== t && v(this.$el, "active")) : (Hi(this.selTarget, this.clsActive, this.clsInactive), e !== t && v(this.$el, "inactive"));
        }
      }
    };
    function Is(t, e, i, s) {
      if (!t)
        return 0;
      if (bt(t) || D(t) && t.match(/^-?\d/))
        return i + ht(t, "height", e, !0);
      {
        const n = t === !0 ? _(e) : at(t, e);
        return A(n).bottom - (s && n && B(e, n) ? $(c(n, "paddingBottom")) : 0);
      }
    }
    function Eo(t) {
      return t === "true" ? !0 : t === "false" ? !1 : t;
    }
    function Po(t) {
      c(t, { position: "", top: "", marginTop: "", width: "" });
    }
    function _o(t) {
      c(t, "transition", "0s"), requestAnimationFrame(() => c(t, "transition", ""));
    }
    var Lh = {
      mixins: [yo],
      args: "src",
      props: {
        src: String,
        icon: String,
        attributes: "list",
        strokeAnimation: Boolean
      },
      data: {
        strokeAnimation: !1
      },
      observe: [
        un({
          async handler() {
            const t = await this.svg;
            t && Ao.call(this, t);
          },
          options: {
            attributes: !0,
            attributeFilter: ["id", "class", "style"]
          }
        })
      ],
      async connected() {
        m(this.src, "#") && ([this.src, this.icon] = this.src.split("#"));
        const t = await this.svg;
        t && (Ao.call(this, t), this.strokeAnimation && qh(t));
      },
      methods: {
        async getSvg() {
          return G(this.$el, "img") && !this.$el.complete && this.$el.loading === "lazy" ? new Promise(
            (t) => j(this.$el, "load", () => t(this.getSvg()))
          ) : Rh(await Wh(this.src), this.icon) || Promise.reject("SVG not found.");
        }
      }
    };
    function Ao(t) {
      const { $el: e } = this;
      y(t, p(e, "class"), "uk-svg");
      for (let i = 0; i < e.style.length; i++) {
        const s = e.style[i];
        c(t, s, c(e, s));
      }
      for (const i in this.attributes) {
        const [s, n] = this.attributes[i].split(":", 2);
        p(t, s, n);
      }
      this.$el.id || $e(t, "id");
    }
    const Wh = dt(async (t) => t ? ot(t, "data:") ? decodeURIComponent(t.split(",")[1]) : (await fetch(t)).text() : Promise.reject());
    function Rh(t, e) {
      return e && m(t, "<symbol") && (t = jh(t)[e] || t), t = w(t.substr(t.indexOf("<svg"))), (t == null ? void 0 : t.hasChildNodes()) && t;
    }
    const Oo = /<symbol([^]*?id=(['"])(.+?)\2[^]*?<\/)symbol>/g, jh = dt(function(t) {
      const e = {};
      Oo.lastIndex = 0;
      let i;
      for (; i = Oo.exec(t); )
        e[i[3]] = `<svg ${i[1]}svg>`;
      return e;
    });
    function qh(t) {
      const e = Un(t);
      e && c(t, "--uk-animation-stroke", e);
    }
    const Cs = ".uk-disabled *, .uk-disabled, [disabled]";
    var Do = {
      mixins: [qt],
      args: "connect",
      props: {
        connect: String,
        toggle: String,
        itemNav: String,
        active: Number,
        followFocus: Boolean,
        swiping: Boolean
      },
      data: {
        connect: "~.uk-switcher",
        toggle: "> * > :first-child",
        itemNav: !1,
        active: 0,
        cls: "uk-active",
        attrItem: "uk-switcher-item",
        selVertical: ".uk-nav",
        followFocus: !1,
        swiping: !0
      },
      computed: {
        connects({ connect: t }, e) {
          return Se(t, e);
        },
        connectChildren() {
          return this.connects.map((t) => T(t)).flat();
        },
        toggles({ toggle: t }, e) {
          return z(t, e);
        },
        children() {
          return T(this.$el).filter(
            (t) => this.toggles.some((e) => B(e, t))
          );
        }
      },
      watch: {
        connects(t) {
          this.swiping && c(t, "touchAction", "pan-y pinch-zoom"), this.$emit();
        },
        connectChildren() {
          let t = Math.max(0, this.index());
          for (const e of this.connects)
            T(e).forEach((i, s) => q(i, this.cls, s === t));
          this.$emit();
        },
        toggles(t) {
          this.$emit();
          const e = this.index();
          this.show(~e ? e : t[this.active] || t[0]);
        }
      },
      connected() {
        p(this.$el, "role", "tablist");
      },
      observe: [
        Be({ targets: ({ connectChildren: t }) => t }),
        dn({ target: ({ connects: t }) => t, filter: ({ swiping: t }) => t })
      ],
      events: [
        {
          name: "click keydown",
          delegate() {
            return this.toggle;
          },
          handler(t) {
            !C(t.current, Cs) && (t.type === "click" || t.keyCode === I.SPACE) && (t.preventDefault(), this.show(t.current));
          }
        },
        {
          name: "keydown",
          delegate() {
            return this.toggle;
          },
          handler(t) {
            const { current: e, keyCode: i } = t, s = C(this.$el, this.selVertical);
            let n = i === I.HOME ? 0 : i === I.END ? "last" : i === I.LEFT && !s || i === I.UP && s ? "previous" : i === I.RIGHT && !s || i === I.DOWN && s ? "next" : -1;
            if (~n) {
              t.preventDefault();
              const o = this.toggles.filter((a) => !C(a, Cs)), r = o[rt(n, o, o.indexOf(e))];
              r.focus(), this.followFocus && this.show(r);
            }
          }
        },
        {
          name: "click",
          el() {
            return this.connects.concat(this.itemNav ? Se(this.itemNav, this.$el) : []);
          },
          delegate() {
            return `[${this.attrItem}],[data-${this.attrItem}]`;
          },
          handler(t) {
            U(t.target, "a,button") && (t.preventDefault(), this.show(tt(t.current, this.attrItem)));
          }
        },
        {
          name: "swipeRight swipeLeft",
          filter() {
            return this.swiping;
          },
          el() {
            return this.connects;
          },
          handler({ type: t }) {
            this.show(Zt(t, "Left") ? "next" : "previous");
          }
        }
      ],
      update() {
        var t;
        p(this.connects, "role", "presentation"), p(T(this.$el), "role", "presentation");
        for (const e in this.toggles) {
          const i = this.toggles[e], s = (t = this.connects[0]) == null ? void 0 : t.children[e];
          p(i, "role", "tab"), s && (i.id = At(this, i, `-tab-${e}`), s.id = At(this, s, `-tabpanel-${e}`), p(i, "aria-controls", s.id), p(s, { role: "tabpanel", "aria-labelledby": i.id }));
        }
        p(this.$el, "aria-orientation", C(this.$el, this.selVertical) ? "vertical" : null);
      },
      methods: {
        index() {
          return xt(this.children, (t) => P(t, this.cls));
        },
        show(t) {
          const e = this.toggles.filter((r) => !C(r, Cs)), i = this.index(), s = rt(
            !Ye(t) || m(e, t) ? t : 0,
            e,
            rt(this.toggles[i], e)
          ), n = rt(e[s], this.toggles);
          this.children.forEach((r, a) => {
            q(r, this.cls, n === a), p(this.toggles[a], {
              "aria-selected": n === a,
              tabindex: n === a ? null : -1
            });
          });
          const o = i >= 0 && i !== s;
          this.connects.forEach(async ({ children: r }) => {
            const a = Qt(r).filter(
              (l, h) => h !== n && P(l, this.cls)
            );
            await this.toggleElement(a, !1, o), await this.toggleElement(r[n], !0, o);
          });
        }
      }
    }, Uh = {
      mixins: [st],
      extends: Do,
      props: {
        media: Boolean
      },
      data: {
        media: 960,
        attrItem: "uk-tab-item",
        selVertical: ".uk-tab-left,.uk-tab-right"
      },
      connected() {
        const t = P(this.$el, "uk-tab-left") ? "uk-tab-left" : P(this.$el, "uk-tab-right") ? "uk-tab-right" : !1;
        t && this.$create("toggle", this.$el, { cls: t, mode: "media", media: this.media });
      }
    };
    const Vh = 32;
    var Yh = {
      mixins: [wi, qt],
      args: "target",
      props: {
        href: String,
        target: null,
        mode: "list",
        queued: Boolean
      },
      data: {
        href: !1,
        target: !1,
        mode: "click",
        queued: !0
      },
      computed: {
        target({ target: t }, e) {
          return t = Se(t || e.hash, e), t.length && t || [e];
        }
      },
      connected() {
        m(this.mode, "media") || (Ze(this.$el) || p(this.$el, "tabindex", "0"), !this.cls && G(this.$el, "a") && p(this.$el, "role", "button"));
      },
      observe: Be({ target: ({ target: t }) => t }),
      events: [
        {
          name: mt,
          filter() {
            return m(this.mode, "hover");
          },
          handler(t) {
            this._preventClick = null, !(!St(t) || ie(this._showState) || this.$el.disabled) && (v(this.$el, "focus"), j(
              document,
              mt,
              () => v(this.$el, "blur"),
              !0,
              (e) => !B(e.target, this.$el)
            ), m(this.mode, "click") && (this._preventClick = !0));
          }
        },
        {
          // mouseenter mouseleave are added because of Firefox bug,
          // where pointerleave is triggered immediately after pointerenter on scroll
          name: `mouseenter mouseleave ${Rt} ${_e} focus blur`,
          filter() {
            return m(this.mode, "hover");
          },
          handler(t) {
            if (St(t) || this.$el.disabled)
              return;
            const e = m(["mouseenter", Rt, "focus"], t.type), i = this.isToggled(this.target);
            if (!e && (!ie(this._showState) || t.type !== "blur" && C(this.$el, ":focus") || t.type === "blur" && C(this.$el, ":hover"))) {
              i === this._showState && (this._showState = null);
              return;
            }
            e && ie(this._showState) && i !== this._showState || (this._showState = e ? i : null, this.toggle(`toggle${e ? "show" : "hide"}`));
          }
        },
        {
          name: "keydown",
          filter() {
            return m(this.mode, "click") && !G(this.$el, "input");
          },
          handler(t) {
            t.keyCode === Vh && (t.preventDefault(), this.$el.click());
          }
        },
        {
          name: "click",
          filter() {
            return ["click", "hover"].some((t) => m(this.mode, t));
          },
          handler(t) {
            let e;
            (this._preventClick || U(t.target, 'a[href="#"], a[href=""]') || (e = U(t.target, "a[href]")) && (!this.isToggled(this.target) || e.hash && C(this.target, e.hash))) && t.preventDefault(), !this._preventClick && m(this.mode, "click") && this.toggle();
          }
        },
        {
          name: "mediachange",
          filter() {
            return m(this.mode, "media");
          },
          el() {
            return this.target;
          },
          handler(t, e) {
            e.matches ^ this.isToggled(this.target) && this.toggle();
          }
        }
      ],
      methods: {
        async toggle(t) {
          if (!v(this.target, t || "toggle", [this]))
            return;
          if ($t(this.$el, "aria-expanded") && p(this.$el, "aria-expanded", !this.isToggled(this.target)), !this.queued)
            return this.toggleElement(this.target);
          const e = this.target.filter((s) => P(s, this.clsLeave));
          if (e.length) {
            for (const s of this.target) {
              const n = m(e, s);
              this.toggleElement(s, n, n);
            }
            return;
          }
          const i = this.target.filter(this.isToggled);
          await this.toggleElement(i, !1) && await this.toggleElement(
            this.target.filter((s) => !m(i, s)),
            !0
          );
        }
      }
    }, Gh = /* @__PURE__ */ Object.freeze({
      __proto__: null,
      Accordion: go,
      Alert: bl,
      Close: hh,
      Cover: xl,
      Drop: wo,
      DropParentIcon: Gt,
      Dropdown: wo,
      Dropnav: bo,
      FormCustom: Pl,
      Grid: _l,
      HeightMatch: Dl,
      HeightViewport: Nl,
      Icon: ks,
      Img: wh,
      Leader: Sh,
      Margin: pn,
      Marker: ch,
      Modal: Ih,
      Nav: Th,
      NavParentIcon: oh,
      Navbar: Eh,
      NavbarParentIcon: Gt,
      NavbarToggleIcon: lh,
      Offcanvas: Ph,
      OverflowAuto: Oh,
      OverlayIcon: Gt,
      PaginationNext: fh,
      PaginationPrevious: dh,
      Responsive: Dh,
      Scroll: Bh,
      Scrollspy: zh,
      ScrollspyNav: Fh,
      SearchIcon: rh,
      SlidenavNext: So,
      SlidenavPrevious: So,
      Spinner: ah,
      Sticky: Hh,
      Svg: Lh,
      Switcher: Do,
      Tab: Uh,
      Toggle: Yh,
      Totop: uh,
      Video: mo
    });
    return Pt(Gh, (t, e) => ft.component(e, t)), dl(ft), Pt(fl, (t, e) => ft.component(e, t)), ft;
  });
})(Kh);
