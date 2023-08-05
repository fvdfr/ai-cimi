'use strict';
var e = require('react');
const t = e.memo((t) => {
  const {
      type: o,
      width: r,
      height: n,
      disabled: i,
      circle: s,
      dashed: l,
      loading: a,
      onClick: d,
      children: p,
    } = t,
    c = e.useMemo(
      () =>
        o || 'danger' === o || 'warning' === o || 'warning' === o || 'text' === o ? o : 'primary',
      [o],
    ),
    u = e.useMemo(() => {
      var e = { width: '100px', height: '40px' };
      return (
        r && (e.width = r + 'px'),
        n && (e.height = n + 'px'),
        s && (e = { ...e, borderRadius: '50%' }),
        l && 'text' === o && (e = { ...e, border: '1px dashed #ccc' }),
        i && (e = { ...e, cursor: 'not-allowed' }),
        e
      );
    }, [r, n, s, l]);
  return e.createElement(
    'div',
    { className: 'button' },
    e.createElement(
      'button',
      { className: c, style: u, disabled: !!i, onClick: d },
      a && e.createElement('div', { className: 'loading1' }),
      p,
    ),
  );
});
var o = e.memo((t) => {
  const {
      children: o,
      affixType: r,
      offsetTop: n,
      offsetLeft: i,
      offsetBottom: s,
      offsetRight: l,
      style: a,
    } = t,
    [d, p] = e.useState({});
  let c;
  e.useEffect(() => {
    const e = document.querySelector('.affix');
    return (
      (c = new IntersectionObserver((e) => m(e))),
      c.observe(e),
      'scroll' == r
        ? (window.addEventListener('scroll', u),
          p(
            (e) => (
              (e.position = 'relative'),
              n && !e.bottom && (e.top = 0),
              s && !e.top && (e.bottom = 0),
              i && !e.right && (e.left = 0),
              l && !e.left && (e.right = 0),
              JSON.parse(JSON.stringify(e))
            ),
          ))
        : p(
            (e) => (
              (e.position = 'fixed'),
              n && !e.bottom && (e.top = n),
              s && !e.top && (e.bottom = s),
              i && !e.right && (e.left = i),
              l && !e.left && (e.right = l),
              JSON.parse(JSON.stringify(e))
            ),
          ),
      () => {
        c.unobserve(e);
      }
    );
  }, []);
  const u = () => {
      document.querySelector('.affix'),
        window.scrollY < 200 &&
          p((e) => {
            for (const t in e)
              'position' == t
                ? (e[t] = 'relative')
                : ('right' != t && 'left' != t && 'top' != t && 'bottom' != t) || (e[t] = '0');
            return JSON.parse(JSON.stringify(e));
          });
    },
    m = (e) => {
      e.forEach((e) => {
        e.isIntersecting ||
          ('relative' == d.position &&
            p(
              (e) => (
                (e.position = 'fixed'),
                n && n !== e.top && (e.top = `${n}px`),
                s && s !== e.bottom && (e.bottom = `${s}px`),
                i && i !== e.left && (e.left = `${i}px`),
                l && l !== e.right && (e.right = `${l}px`),
                JSON.parse(JSON.stringify(e))
              ),
            ));
      });
    };
  return e.createElement('div', { className: 'affix', style: { ...d, ...a } }, o);
});
const r = (t) => {
  const { showUnder: o, style: r, ...n } = t,
    [i, s] = e.useState(!1),
    l = () => {
      const e = window.pageYOffset || document.documentElement.scrollTop;
      s(e > (void 0 !== o ? o : 300));
    };
  return (
    e.useEffect(
      () => (
        window.addEventListener('scroll', l),
        () => {
          window.removeEventListener('scroll', l);
        }
      ),
      [],
    ),
    e.createElement(
      'div',
      null,
      i &&
        e.createElement(
          'button',
          {
            style: r,
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
var n =
  '.input input {\n  padding: 3px 3px 3px 10px;\n  font-size: 16px;\n  border: 1px solid transparent;\n  border-radius: 5px;\n  outline-style: none;\n  cursor: pointer;\n}\n.input .bordered {\n  border: 1px solid #b1b3b8;\n}\n.input .inputBorder:focus {\n  border: 1px solid #1890ff;\n}\n.input .disabled {\n  cursor: not-allowed;\n}\n';
const i = e.memo(
    ({
      type: t,
      width: o,
      height: r,
      bordered: i,
      defaultValue: s,
      value: l,
      disabled: a,
      inputBorder: d,
      handleChange: p,
    }) => {
      let c = { width: '120px', height: '34px' };
      o &&
        ('string' == typeof o
          ? (o.includes('%') || o.includes('px')) && (c.width = o)
          : 1 * o && (c.width = o + 'px')),
        r &&
          ('string' == typeof r
            ? (r.includes('%') || r.includes('px')) && (c.height = r)
            : 1 * r && (c.height = r + 'px'));
      let u = [i ? '' : n.bordered, d ? '' : n.inputBorder, a ? n.disabled : ''].join(' ');
      return e.createElement(
        'div',
        { className: n.input },
        e.createElement('input', {
          type: t || 'text',
          placeholder: s || '请输入内容',
          disabled: a,
          className: u,
          style: c,
          value: l,
          onChange: (e) => (p ? p({ value: e.currentTarget.value }) : null),
        }),
      );
    },
  ),
  s = e.memo((t) => {
    const { text: o, children: r, mask: n, loading: i, all: s, type: l, className: a } = t,
      d = [a].join('');
    return e.createElement(
      'div',
      { className: d },
      e.createElement('div', null, r ? r[0] : e.createElement('div', { className: 'icon' })),
    );
  }),
  l = ({ maxStars: t, initialRating: o = 0, onChange: r }) => {
    const [n, i] = e.useState(o);
    return e.createElement(
      'div',
      { className: 'start' },
      Array.from({ length: t }, (e, t) => t + 1).map((t) =>
        e.createElement(a, {
          key: t,
          filled: t <= n,
          onMouseOver: () => {
            return i((e = t)), void (r && r(e));
            var e;
          },
        }),
      ),
    );
  },
  a = ({ filled: t, onMouseOver: o }) =>
    e.createElement(
      'span',
      {
        style: {
          cursor: 'pointer',
          color: t ? 'gold' : 'gray',
          fontSize: '25px',
          marginRight: '10px',
        },
        onMouseOver: o,
      },
      '★',
    );
(l.defaultProps = { maxStars: 6, initialRating: 1 }),
  (exports.Affix = o),
  (exports.BackToTop = r),
  (exports.Button = t),
  (exports.Input = i),
  (exports.Rating = l),
  (exports.loading = s);
