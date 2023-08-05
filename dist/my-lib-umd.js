!(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? t(exports, require('react'))
    : 'function' == typeof define && define.amd
    ? define(['exports', 'react'], t)
    : t(
        (((e = 'undefined' != typeof globalThis ? globalThis : e || self)['my-lib-umd'] =
          e['my-lib-umd'] || {}),
        (e['my-lib-umd'].js = {})),
        e.React,
      );
})(this, function (e, t) {
  'use strict';
  const n = t.memo((e) => {
    const {
        type: n,
        width: o,
        height: r,
        disabled: i,
        circle: s,
        dashed: l,
        loading: a,
        onClick: d,
        children: c,
      } = e,
      p = t.useMemo(
        () =>
          n || 'danger' === n || 'warning' === n || 'warning' === n || 'text' === n ? n : 'primary',
        [n],
      ),
      u = t.useMemo(() => {
        var e = { width: '100px', height: '40px' };
        return (
          o && (e.width = o + 'px'),
          r && (e.height = r + 'px'),
          s && (e = { ...e, borderRadius: '50%' }),
          l && 'text' === n && (e = { ...e, border: '1px dashed #ccc' }),
          i && (e = { ...e, cursor: 'not-allowed' }),
          e
        );
      }, [o, r, s, l]);
    return t.createElement(
      'div',
      { className: 'button' },
      t.createElement(
        'button',
        { className: p, style: u, disabled: !!i, onClick: d },
        a && t.createElement('div', { className: 'loading1' }),
        c,
      ),
    );
  });
  var o = t.memo((e) => {
    const {
        children: n,
        affixType: o,
        offsetTop: r,
        offsetLeft: i,
        offsetBottom: s,
        offsetRight: l,
        style: a,
      } = e,
      [d, c] = t.useState({});
    let p;
    t.useEffect(() => {
      const e = document.querySelector('.affix');
      return (
        (p = new IntersectionObserver((e) => f(e))),
        p.observe(e),
        'scroll' == o
          ? (window.addEventListener('scroll', u),
            c(
              (e) => (
                (e.position = 'relative'),
                r && !e.bottom && (e.top = 0),
                s && !e.top && (e.bottom = 0),
                i && !e.right && (e.left = 0),
                l && !e.left && (e.right = 0),
                JSON.parse(JSON.stringify(e))
              ),
            ))
          : c(
              (e) => (
                (e.position = 'fixed'),
                r && !e.bottom && (e.top = r),
                s && !e.top && (e.bottom = s),
                i && !e.right && (e.left = i),
                l && !e.left && (e.right = l),
                JSON.parse(JSON.stringify(e))
              ),
            ),
        () => {
          p.unobserve(e);
        }
      );
    }, []);
    const u = () => {
        document.querySelector('.affix'),
          window.scrollY < 200 &&
            c((e) => {
              for (const t in e)
                'position' == t
                  ? (e[t] = 'relative')
                  : ('right' != t && 'left' != t && 'top' != t && 'bottom' != t) || (e[t] = '0');
              return JSON.parse(JSON.stringify(e));
            });
      },
      f = (e) => {
        e.forEach((e) => {
          e.isIntersecting ||
            ('relative' == d.position &&
              c(
                (e) => (
                  (e.position = 'fixed'),
                  r && r !== e.top && (e.top = `${r}px`),
                  s && s !== e.bottom && (e.bottom = `${s}px`),
                  i && i !== e.left && (e.left = `${i}px`),
                  l && l !== e.right && (e.right = `${l}px`),
                  JSON.parse(JSON.stringify(e))
                ),
              ));
        });
      };
    return t.createElement('div', { className: 'affix', style: { ...d, ...a } }, n);
  });
  const r = (e) => {
    const { showUnder: n, style: o, ...r } = e,
      [i, s] = t.useState(!1),
      l = () => {
        const e = window.pageYOffset || document.documentElement.scrollTop;
        s(e > (void 0 !== n ? n : 300));
      };
    return (
      t.useEffect(
        () => (
          window.addEventListener('scroll', l),
          () => {
            window.removeEventListener('scroll', l);
          }
        ),
        [],
      ),
      t.createElement(
        'div',
        null,
        i &&
          t.createElement(
            'button',
            {
              style: o,
              onClick: () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              },
            },
            'UP',
          ),
      )
    );
  };
  r.defaultProps = {
    showUnder: 100,
    style: { position: 'fixed', bottom: '20px', right: '20px', cursor: 'pointer' },
  };
  var i =
    '.input input {\n  padding: 3px 3px 3px 10px;\n  font-size: 16px;\n  border: 1px solid transparent;\n  border-radius: 5px;\n  outline-style: none;\n  cursor: pointer;\n}\n.input .bordered {\n  border: 1px solid #b1b3b8;\n}\n.input .inputBorder:focus {\n  border: 1px solid #1890ff;\n}\n.input .disabled {\n  cursor: not-allowed;\n}\n';
  const s = t.memo(
      ({
        type: e,
        width: n,
        height: o,
        bordered: r,
        defaultValue: s,
        value: l,
        disabled: a,
        inputBorder: d,
        handleChange: c,
      }) => {
        let p = { width: '120px', height: '34px' };
        n &&
          ('string' == typeof n
            ? (n.includes('%') || n.includes('px')) && (p.width = n)
            : 1 * n && (p.width = n + 'px')),
          o &&
            ('string' == typeof o
              ? (o.includes('%') || o.includes('px')) && (p.height = o)
              : 1 * o && (p.height = o + 'px'));
        let u = [r ? '' : i.bordered, d ? '' : i.inputBorder, a ? i.disabled : ''].join(' ');
        return t.createElement(
          'div',
          { className: i.input },
          t.createElement('input', {
            type: e || 'text',
            placeholder: s || '请输入内容',
            disabled: a,
            className: u,
            style: p,
            value: l,
            onChange: (e) => (c ? c({ value: e.currentTarget.value }) : null),
          }),
        );
      },
    ),
    l = t.memo((e) => {
      const { text: n, children: o, mask: r, loading: i, all: s, type: l, className: a } = e,
        d = [a].join('');
      return t.createElement(
        'div',
        { className: d },
        t.createElement('div', null, o ? o[0] : t.createElement('div', { className: 'icon' })),
      );
    }),
    a = ({ maxStars: e, initialRating: n = 0, onChange: o }) => {
      const [r, i] = t.useState(n);
      return t.createElement(
        'div',
        { className: 'start' },
        Array.from({ length: e }, (e, t) => t + 1).map((e) =>
          t.createElement(d, {
            key: e,
            filled: e <= r,
            onMouseOver: () => {
              return i((t = e)), void (o && o(t));
              var t;
            },
          }),
        ),
      );
    },
    d = ({ filled: e, onMouseOver: n }) =>
      t.createElement(
        'span',
        {
          style: {
            cursor: 'pointer',
            color: e ? 'gold' : 'gray',
            fontSize: '25px',
            marginRight: '10px',
          },
          onMouseOver: n,
        },
        '★',
      );
  (a.defaultProps = { maxStars: 6, initialRating: 1 }),
    (e.Affix = o),
    (e.BackToTop = r),
    (e.Button = n),
    (e.Input = s),
    (e.Rating = a),
    (e.loading = l);
});
