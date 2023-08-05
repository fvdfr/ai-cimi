import e, { memo as t, useMemo as n, useState as o, useEffect as r } from 'react';
const i = t((t) => {
  const {
      type: o,
      width: r,
      height: i,
      disabled: l,
      circle: s,
      dashed: a,
      loading: d,
      onClick: p,
      children: c,
    } = t,
    u = n(
      () =>
        o || 'danger' === o || 'warning' === o || 'warning' === o || 'text' === o ? o : 'primary',
      [o],
    ),
    f = n(() => {
      var e = { width: '100px', height: '40px' };
      return (
        r && (e.width = r + 'px'),
        i && (e.height = i + 'px'),
        s && (e = { ...e, borderRadius: '50%' }),
        a && 'text' === o && (e = { ...e, border: '1px dashed #ccc' }),
        l && (e = { ...e, cursor: 'not-allowed' }),
        e
      );
    }, [r, i, s, a]);
  return e.createElement(
    'div',
    { className: 'button' },
    e.createElement(
      'button',
      { className: u, style: f, disabled: !!l, onClick: p },
      d && e.createElement('div', { className: 'loading1' }),
      c,
    ),
  );
});
var l = t((t) => {
  const {
      children: n,
      affixType: i,
      offsetTop: l,
      offsetLeft: s,
      offsetBottom: a,
      offsetRight: d,
      style: p,
    } = t,
    [c, u] = o({});
  let f;
  r(() => {
    const e = document.querySelector('.affix');
    return (
      (f = new IntersectionObserver((e) => h(e))),
      f.observe(e),
      'scroll' == i
        ? (window.addEventListener('scroll', m),
          u(
            (e) => (
              (e.position = 'relative'),
              l && !e.bottom && (e.top = 0),
              a && !e.top && (e.bottom = 0),
              s && !e.right && (e.left = 0),
              d && !e.left && (e.right = 0),
              JSON.parse(JSON.stringify(e))
            ),
          ))
        : u(
            (e) => (
              (e.position = 'fixed'),
              l && !e.bottom && (e.top = l),
              a && !e.top && (e.bottom = a),
              s && !e.right && (e.left = s),
              d && !e.left && (e.right = d),
              JSON.parse(JSON.stringify(e))
            ),
          ),
      () => {
        f.unobserve(e);
      }
    );
  }, []);
  const m = () => {
      document.querySelector('.affix'),
        window.scrollY < 200 &&
          u((e) => {
            for (const t in e)
              'position' == t
                ? (e[t] = 'relative')
                : ('right' != t && 'left' != t && 'top' != t && 'bottom' != t) || (e[t] = '0');
            return JSON.parse(JSON.stringify(e));
          });
    },
    h = (e) => {
      e.forEach((e) => {
        e.isIntersecting ||
          ('relative' == c.position &&
            u(
              (e) => (
                (e.position = 'fixed'),
                l && l !== e.top && (e.top = `${l}px`),
                a && a !== e.bottom && (e.bottom = `${a}px`),
                s && s !== e.left && (e.left = `${s}px`),
                d && d !== e.right && (e.right = `${d}px`),
                JSON.parse(JSON.stringify(e))
              ),
            ));
      });
    };
  return e.createElement('div', { className: 'affix', style: { ...c, ...p } }, n);
});
const s = (t) => {
  const { showUnder: n, style: i, ...l } = t,
    [s, a] = o(!1),
    d = () => {
      const e = window.pageYOffset || document.documentElement.scrollTop;
      a(e > (void 0 !== n ? n : 300));
    };
  return (
    r(
      () => (
        window.addEventListener('scroll', d),
        () => {
          window.removeEventListener('scroll', d);
        }
      ),
      [],
    ),
    e.createElement(
      'div',
      null,
      s &&
        e.createElement(
          'button',
          {
            style: i,
            onClick: () => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            },
          },
          'UP',
        ),
    )
  );
};
s.defaultProps = {
  showUnder: 100,
  style: { position: 'fixed', bottom: '20px', right: '20px', cursor: 'pointer' },
};
var a =
  '.input input {\n  padding: 3px 3px 3px 10px;\n  font-size: 16px;\n  border: 1px solid transparent;\n  border-radius: 5px;\n  outline-style: none;\n  cursor: pointer;\n}\n.input .bordered {\n  border: 1px solid #b1b3b8;\n}\n.input .inputBorder:focus {\n  border: 1px solid #1890ff;\n}\n.input .disabled {\n  cursor: not-allowed;\n}\n';
const d = t(
    ({
      type: t,
      width: n,
      height: o,
      bordered: r,
      defaultValue: i,
      value: l,
      disabled: s,
      inputBorder: d,
      handleChange: p,
    }) => {
      let c = { width: '120px', height: '34px' };
      n &&
        ('string' == typeof n
          ? (n.includes('%') || n.includes('px')) && (c.width = n)
          : 1 * n && (c.width = n + 'px')),
        o &&
          ('string' == typeof o
            ? (o.includes('%') || o.includes('px')) && (c.height = o)
            : 1 * o && (c.height = o + 'px'));
      let u = [r ? '' : a.bordered, d ? '' : a.inputBorder, s ? a.disabled : ''].join(' ');
      return e.createElement(
        'div',
        { className: a.input },
        e.createElement('input', {
          type: t || 'text',
          placeholder: i || '请输入内容',
          disabled: s,
          className: u,
          style: c,
          value: l,
          onChange: (e) => (p ? p({ value: e.currentTarget.value }) : null),
        }),
      );
    },
  ),
  p = t((t) => {
    const { text: n, children: o, mask: r, loading: i, all: l, type: s, className: a } = t,
      d = [a].join('');
    return e.createElement(
      'div',
      { className: d },
      e.createElement('div', null, o ? o[0] : e.createElement('div', { className: 'icon' })),
    );
  }),
  c = ({ maxStars: t, initialRating: n = 0, onChange: r }) => {
    const [i, l] = o(n);
    return e.createElement(
      'div',
      { className: 'start' },
      Array.from({ length: t }, (e, t) => t + 1).map((t) =>
        e.createElement(u, {
          key: t,
          filled: t <= i,
          onMouseOver: () => {
            return l((e = t)), void (r && r(e));
            var e;
          },
        }),
      ),
    );
  },
  u = ({ filled: t, onMouseOver: n }) =>
    e.createElement(
      'span',
      {
        style: {
          cursor: 'pointer',
          color: t ? 'gold' : 'gray',
          fontSize: '25px',
          marginRight: '10px',
        },
        onMouseOver: n,
      },
      '★',
    );
c.defaultProps = { maxStars: 6, initialRating: 1 };
export { l as Affix, s as BackToTop, i as Button, d as Input, c as Rating, p as loading };
