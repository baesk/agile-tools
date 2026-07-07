/* @ds-bundle: {"format":3,"namespace":"UniversityOfMelbourneDesignSystem_ba1c60","components":[{"name":"Identifier","sourcePath":"components/brand/Identifier.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"}],"sourceHashes":{"components/brand/Identifier.jsx":"e7896af50f4c","components/brand/Logo.jsx":"f8c26dcc29ce","components/core/Button.jsx":"6a20b80be69e","components/core/Card.jsx":"f4bf59004fc9","components/feedback/Badge.jsx":"998122760e33","components/forms/Input.jsx":"da8d8a6e410e","ui_kits/documents/BacklogTracker.jsx":"f1a3385e6276","ui_kits/documents/SprintReport.jsx":"405677239fd9"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.UniversityOfMelbourneDesignSystem_ba1c60 = window.UniversityOfMelbourneDesignSystem_ba1c60 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Identifier.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * University of Melbourne — Identifier
 * The signature brand element: names the entity a communication
 * comes from (faculty, school, department, centre). Always set in
 * Source Sans 3, left-aligned, base-aligned, sitting in a coloured
 * module — never floating without a fill. Full written form.
 */
function Identifier({
  lines = ['Faculty of', 'Science'],
  fill = 'heritage-blue',
  size = 'md',
  style = {},
  ...rest
}) {
  // resolve tone: text colour contrasts the fill
  const lightFills = ['white', 'paper', 'magpie', 'greenstone', 'yam-daisy', 'kookaburra', 'river-red-gum', 'possum'];
  const isLight = lightFills.includes(fill);
  const textColor = isLight ? 'var(--heritage-blue)' : 'var(--white)';
  const bg = fill === 'transparent' ? 'transparent' : `var(--${fill})`;
  const sizes = {
    sm: {
      fontSize: 15,
      pad: '14px 16px'
    },
    md: {
      fontSize: 20,
      pad: '20px 22px'
    },
    lg: {
      fontSize: 28,
      pad: '28px 30px'
    }
  };
  const s = sizes[size] || sizes.md;
  const arr = Array.isArray(lines) ? lines : String(lines).split('\n');
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: bg,
      color: textColor,
      padding: s.pad,
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: s.fontSize,
      lineHeight: 1.12,
      textAlign: 'left',
      display: 'inline-block',
      ...style
    }
  }, rest), arr.map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, l)));
}
Object.assign(__ds_scope, { Identifier });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Identifier.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * University of Melbourne — Logo lockup (PLACEHOLDER)
 *
 * IMPORTANT: This is a brand-safe PLACEHOLDER, not the master artwork.
 * The official Vertical/Horizontal Housed logo (crest + motto + wordmark)
 * must be obtained from the University Brand team and dropped into the
 * `crestSrc` slot. Per the guidelines, master logo artwork must never be
 * redrawn. This component reproduces only the housing + wordmark layout
 * so designs can be built to the correct proportions in the meantime.
 */
function Logo({
  orientation = 'vertical',
  crestSrc = null,
  size = 96,
  monotone = false,
  style = {},
  ...rest
}) {
  const housingBg = monotone ? 'transparent' : 'var(--heritage-blue)';
  const ink = monotone ? 'var(--heritage-blue)' : 'var(--white)';
  const isVertical = orientation === 'vertical';
  const crest = crestSrc ? /*#__PURE__*/React.createElement("img", {
    src: crestSrc,
    alt: "University of Melbourne crest",
    style: {
      width: '64%',
      display: 'block'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    "aria-label": "crest placeholder",
    style: {
      width: '56%',
      aspectRatio: '1 / 1.15',
      border: `2px solid ${ink}`,
      borderRadius: '50% 50% 50% 50% / 42% 42% 58% 58%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontSize: size * 0.26,
      color: ink,
      lineHeight: 1
    }
  }, "UoM");
  if (isVertical) {
    return /*#__PURE__*/React.createElement("div", _extends({
      style: {
        width: size,
        height: size,
        background: housingBg,
        border: monotone ? `1px solid var(--heritage-blue)` : 'none',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: size * 0.06,
        padding: size * 0.12,
        boxSizing: 'border-box',
        ...style
      }
    }, rest), crest, /*#__PURE__*/React.createElement("div", {
      style: {
        color: ink,
        fontFamily: 'var(--font-display)',
        fontWeight: 400,
        fontSize: size * 0.12,
        lineHeight: 1.04,
        textAlign: 'center',
        letterSpacing: '0.01em'
      }
    }, "The University", /*#__PURE__*/React.createElement("br", null), "of Melbourne"));
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      height: size,
      background: housingBg,
      border: monotone ? `1px solid var(--heritage-blue)` : 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: size * 0.12,
      padding: `0 ${size * 0.16}px`,
      boxSizing: 'border-box',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '64%',
      display: 'flex',
      alignItems: 'center'
    }
  }, crest), /*#__PURE__*/React.createElement("div", {
    style: {
      color: ink,
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: size * 0.16,
      lineHeight: 1.02,
      letterSpacing: '0.01em'
    }
  }, "The University", /*#__PURE__*/React.createElement("br", null), "of Melbourne"));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * University of Melbourne — Button
 * Flat colour only (no gradients/shadows on the fill, per brand).
 * Heritage Blue leads; secondary outline and ghost for support;
 * an on-hero variant for placement over the blue.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft = null,
  iconRight = null,
  fullWidth = false,
  disabled = false,
  type = 'button',
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      fontSize: 14,
      padding: '7px 14px',
      gap: 6
    },
    md: {
      fontSize: 16,
      padding: '10px 20px',
      gap: 8
    },
    lg: {
      fontSize: 18,
      padding: '14px 28px',
      gap: 10
    }
  };
  const variants = {
    primary: {
      background: 'var(--heritage-blue)',
      color: 'var(--white)',
      border: '2px solid var(--heritage-blue)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--heritage-blue)',
      border: '2px solid var(--heritage-blue)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--heritage-blue)',
      border: '2px solid transparent'
    },
    onHero: {
      background: 'var(--white)',
      color: 'var(--heritage-blue)',
      border: '2px solid var(--white)'
    }
  };
  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.primary;
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: s.gap,
    fontFamily: 'var(--font-body)',
    fontWeight: 600,
    fontSize: s.fontSize,
    lineHeight: 1.1,
    padding: s.padding,
    borderRadius: 'var(--radius-sm)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    width: fullWidth ? '100%' : 'auto',
    textDecoration: 'none',
    transition: 'background var(--dur) var(--ease), color var(--dur) var(--ease), opacity var(--dur) var(--ease)',
    whiteSpace: 'nowrap',
    ...v,
    ...style
  };
  const [hover, setHover] = React.useState(false);
  const hoverStyle = hover && !disabled ? variant === 'primary' ? {
    background: 'var(--kookaburra-shade)',
    borderColor: 'var(--kookaburra-shade)'
  } : variant === 'onHero' ? {
    background: 'transparent',
    color: 'var(--white)'
  } : {
    background: 'var(--paper-blue)'
  } : null;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...hoverStyle
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * University of Melbourne — Card
 * A flat surface container. Square or barely-rounded corners, a hairline
 * border by default; an optional Heritage Blue top rule or full-blue
 * "hero" treatment. Shadow is opt-in (digital only) — the brand is flat.
 */
function Card({
  children,
  tone = 'default',
  accent = false,
  elevated = false,
  padding = 24,
  style = {},
  ...rest
}) {
  const tones = {
    default: {
      background: 'var(--white)',
      color: 'var(--text-body)',
      border: '1px solid var(--hairline)'
    },
    sunken: {
      background: 'var(--paper-blue)',
      color: 'var(--text-body)',
      border: '1px solid var(--hairline)'
    },
    hero: {
      background: 'var(--heritage-blue)',
      color: 'var(--white)',
      border: 'none'
    }
  };
  const t = tones[tone] || tones.default;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      ...t,
      borderRadius: 'var(--radius-md)',
      padding,
      boxShadow: elevated ? 'var(--shadow-card)' : 'none',
      boxSizing: 'border-box',
      ...(accent ? {
        borderTop: '3px solid var(--heritage-blue)'
      } : {}),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * University of Melbourne — Badge / status chip
 * For backlog states, priorities and labels in product-owner tools.
 * Maps brand colours onto sprint semantics. Pill or square.
 */
function Badge({
  children,
  tone = 'neutral',
  variant = 'soft',
  shape = 'pill',
  style = {},
  ...rest
}) {
  const tones = {
    neutral: {
      soft: ['var(--paper-blue)', 'var(--ink-60)'],
      solid: ['var(--ink-60)', 'var(--white)']
    },
    blue: {
      soft: ['var(--paper-blue)', 'var(--heritage-blue)'],
      solid: ['var(--heritage-blue)', 'var(--white)']
    },
    done: {
      soft: ['#EAF0DC', 'var(--river-red-gum-shade)'],
      solid: ['var(--river-red-gum-shade)', 'var(--white)']
    },
    progress: {
      soft: ['#DDF3FB', 'var(--kookaburra-shade)'],
      solid: ['var(--kookaburra-shade)', 'var(--white)']
    },
    review: {
      soft: ['#FFF3CC', 'var(--yam-daisy-shade)'],
      solid: ['var(--yam-daisy-shade)', 'var(--white)']
    },
    blocked: {
      soft: ['#FBE0E2', 'var(--black-sheoak-shade)'],
      solid: ['var(--black-sheoak-shade)', 'var(--white)']
    },
    todo: {
      soft: ['#EEEEEE', 'var(--magpie-shade)'],
      solid: ['var(--magpie-shade)', 'var(--white)']
    }
  };
  const [bg, fg] = (tones[tone] || tones.neutral)[variant] || (tones[tone] || tones.neutral).soft;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      background: bg,
      color: fg,
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 13,
      lineHeight: 1,
      letterSpacing: '0.01em',
      padding: '5px 11px',
      borderRadius: shape === 'pill' ? 'var(--radius-pill)' : 'var(--radius-sm)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * University of Melbourne — Input
 * Text field with a clear label, hairline border and a Heritage Blue
 * focus ring. Square-ish corners. Source Sans 3 throughout.
 */
function Input({
  label,
  hint,
  error,
  id,
  type = 'text',
  prefix = null,
  style = {},
  containerStyle = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || (label ? `in-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const borderColor = error ? 'var(--black-sheoak-shade)' : focus ? 'var(--heritage-blue)' : 'var(--hairline-strong)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...containerStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--heritage-blue)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      background: 'var(--white)',
      border: `1.5px solid ${borderColor}`,
      boxShadow: focus ? '0 0 0 3px rgba(0,15,70,0.10)' : 'none',
      borderRadius: 'var(--radius-sm)',
      padding: '0 12px',
      transition: 'border-color var(--dur) var(--ease), box-shadow var(--dur) var(--ease)'
    }
  }, prefix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-40)',
      display: 'flex'
    }
  }, prefix), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      color: 'var(--heritage-blue)',
      padding: '10px 0',
      ...style
    }
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: error ? 'var(--black-sheoak-shade)' : 'var(--ink-40)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// ui_kits/documents/BacklogTracker.jsx
try { (() => {
/* University of Melbourne — Backlog Tracker (Excel-style grid) */
function BacklogTracker() {
  const {
    Badge
  } = window.UniversityOfMelbourneDesignSystem_ba1c60 || {};
  const Chip = ({
    tone,
    children
  }) => Badge ? /*#__PURE__*/React.createElement(Badge, {
    tone: tone,
    shape: "square"
  }, children) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600
    }
  }, children);
  const cols = ['ID', 'User story', 'Epic', 'Owner', 'Pts', 'Priority', 'Status', 'Sprint'];
  const rows = [['UOM-412', 'As a guest I can check out without an account', 'Checkout', 'Priya', 8, 'High', ['Done', 'done'], 'S14'], ['UOM-418', 'Save my payment method for next time', 'Checkout', 'Marcus', 5, 'High', ['Done', 'done'], 'S14'], ['UOM-421', 'See validation errors before I submit', 'Checkout', 'Priya', 5, 'Med', ['In review', 'review'], 'S14'], ['UOM-430', 'Pay with Apple Pay / Google Pay', 'Wallet', 'Sana', 13, 'High', ['In progress', 'progress'], 'S15'], ['UOM-433', 'Autofill my saved address', 'Checkout', 'Tom', 8, 'Med', ['Blocked', 'blocked'], 'S15'], ['UOM-440', 'Manage a subscription from my account', 'Subscriptions', 'Sana', 21, 'Low', ['To do', 'todo'], 'S16'], ['UOM-447', 'Request a refund without contacting support', 'Refunds', 'Marcus', 13, 'Low', ['To do', 'todo'], 'S16']];
  const prTone = {
    High: 'blocked',
    Med: 'review',
    Low: 'neutral'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: xl.frame
  }, /*#__PURE__*/React.createElement("div", {
    style: xl.toolbar
  }, /*#__PURE__*/React.createElement("span", {
    style: xl.cellRef
  }, "A1"), /*#__PURE__*/React.createElement("span", {
    style: xl.fx
  }, "\u0192x"), /*#__PURE__*/React.createElement("span", {
    style: xl.formula
  }, "Product Backlog \xB7 Checkout Squad \xB7 FY26"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      fontSize: 12.5,
      color: 'var(--ink-40)'
    }
  }, "7 stories \xB7 73 points")), /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: xl.table
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: xl.corner
  }), cols.map((c, i) => /*#__PURE__*/React.createElement("th", {
    key: c,
    style: {
      ...xl.colHead,
      textAlign: i === 1 ? 'left' : 'center'
    }
  }, c)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, ri) => /*#__PURE__*/React.createElement("tr", {
    key: r[0]
  }, /*#__PURE__*/React.createElement("td", {
    style: xl.rowHead
  }, ri + 1), /*#__PURE__*/React.createElement("td", {
    style: xl.tdId
  }, r[0]), /*#__PURE__*/React.createElement("td", {
    style: xl.td
  }, r[1]), /*#__PURE__*/React.createElement("td", {
    style: xl.tdCenter
  }, /*#__PURE__*/React.createElement("span", {
    style: xl.epic
  }, r[2])), /*#__PURE__*/React.createElement("td", {
    style: xl.tdCenter
  }, r[3]), /*#__PURE__*/React.createElement("td", {
    style: {
      ...xl.tdCenter,
      fontWeight: 700,
      color: 'var(--heritage-blue)'
    }
  }, r[4]), /*#__PURE__*/React.createElement("td", {
    style: xl.tdCenter
  }, /*#__PURE__*/React.createElement(Chip, {
    tone: prTone[r[5]]
  }, r[5])), /*#__PURE__*/React.createElement("td", {
    style: xl.tdCenter
  }, /*#__PURE__*/React.createElement(Chip, {
    tone: r[6][1]
  }, r[6][0])), /*#__PURE__*/React.createElement("td", {
    style: xl.tdCenter
  }, r[7]))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: xl.rowHead
  }), /*#__PURE__*/React.createElement("td", {
    style: xl.tdId
  }), /*#__PURE__*/React.createElement("td", {
    style: {
      ...xl.td,
      fontWeight: 700,
      color: 'var(--heritage-blue)'
    }
  }, "Total"), /*#__PURE__*/React.createElement("td", {
    style: xl.tdCenter
  }), /*#__PURE__*/React.createElement("td", {
    style: xl.tdCenter
  }), /*#__PURE__*/React.createElement("td", {
    style: {
      ...xl.tdCenter,
      fontWeight: 700,
      color: 'var(--heritage-blue)'
    }
  }, "73"), /*#__PURE__*/React.createElement("td", {
    style: xl.tdCenter
  }), /*#__PURE__*/React.createElement("td", {
    style: xl.tdCenter
  }), /*#__PURE__*/React.createElement("td", {
    style: xl.tdCenter
  }))))), /*#__PURE__*/React.createElement("div", {
    style: xl.tabs
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...xl.tab,
      ...xl.tabActive
    }
  }, "Backlog"), /*#__PURE__*/React.createElement("span", {
    style: xl.tab
  }, "Sprint 15"), /*#__PURE__*/React.createElement("span", {
    style: xl.tab
  }, "Velocity"), /*#__PURE__*/React.createElement("span", {
    style: xl.tab
  }, "+")));
}
const xl = {
  frame: {
    background: 'var(--white)',
    border: '1px solid var(--hairline-strong)',
    borderRadius: 4,
    overflow: 'hidden',
    fontFamily: 'var(--font-body)',
    boxShadow: 'var(--shadow-card)'
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    padding: '8px 14px',
    borderBottom: '1px solid var(--hairline)',
    background: 'var(--paper)'
  },
  cellRef: {
    fontSize: 12.5,
    fontWeight: 600,
    color: 'var(--heritage-blue)',
    border: '1px solid var(--hairline)',
    borderRadius: 3,
    padding: '3px 12px',
    background: '#fff',
    minWidth: 42,
    textAlign: 'center'
  },
  fx: {
    fontStyle: 'italic',
    color: 'var(--ink-40)',
    fontSize: 13
  },
  formula: {
    fontSize: 13.5,
    color: 'var(--ink-60)'
  },
  table: {
    borderCollapse: 'collapse',
    width: '100%',
    fontSize: 13.5
  },
  corner: {
    width: 36,
    background: 'var(--paper)',
    borderBottom: '1px solid var(--hairline-strong)',
    borderRight: '1px solid var(--hairline)',
    position: 'sticky',
    top: 0
  },
  colHead: {
    background: 'var(--heritage-blue)',
    color: '#fff',
    fontWeight: 600,
    fontSize: 12.5,
    padding: '9px 12px',
    borderRight: '1px solid rgba(255,255,255,0.15)',
    whiteSpace: 'nowrap',
    position: 'sticky',
    top: 0
  },
  rowHead: {
    width: 36,
    background: 'var(--paper)',
    color: 'var(--ink-40)',
    fontSize: 12,
    textAlign: 'center',
    borderRight: '1px solid var(--hairline-strong)',
    borderBottom: '1px solid var(--hairline)'
  },
  td: {
    padding: '9px 12px',
    borderRight: '1px solid var(--hairline)',
    borderBottom: '1px solid var(--hairline)',
    color: 'var(--ink-60)'
  },
  tdCenter: {
    padding: '9px 12px',
    borderRight: '1px solid var(--hairline)',
    borderBottom: '1px solid var(--hairline)',
    color: 'var(--ink-60)',
    textAlign: 'center',
    whiteSpace: 'nowrap'
  },
  tdId: {
    padding: '9px 12px',
    borderRight: '1px solid var(--hairline)',
    borderBottom: '1px solid var(--hairline)',
    fontFamily: 'ui-monospace, monospace',
    fontSize: 12.5,
    fontWeight: 600,
    color: 'var(--heritage-blue)',
    whiteSpace: 'nowrap'
  },
  epic: {
    fontSize: 12,
    fontWeight: 600,
    color: 'var(--ink-60)',
    background: 'var(--paper-blue)',
    borderRadius: 3,
    padding: '3px 8px'
  },
  tabs: {
    display: 'flex',
    gap: 2,
    padding: '6px 10px',
    borderTop: '1px solid var(--hairline)',
    background: 'var(--paper)'
  },
  tab: {
    fontSize: 13,
    fontWeight: 600,
    color: 'var(--ink-40)',
    padding: '6px 16px',
    borderRadius: '3px 3px 0 0',
    cursor: 'pointer'
  },
  tabActive: {
    background: '#fff',
    color: 'var(--heritage-blue)',
    border: '1px solid var(--hairline)',
    borderBottom: '2px solid var(--heritage-blue)'
  }
};
window.BacklogTracker = BacklogTracker;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/documents/BacklogTracker.jsx", error: String((e && e.message) || e) }); }

// ui_kits/documents/SprintReport.jsx
try { (() => {
/* University of Melbourne — Sprint Report (Word-style A4 document) */
function SprintReport() {
  const {
    Badge,
    Identifier
  } = window.UniversityOfMelbourneDesignSystem_ba1c60 || {};
  const Chip = ({
    tone,
    children
  }) => Badge ? /*#__PURE__*/React.createElement(Badge, {
    tone: tone
  }, children) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600
    }
  }, children);
  const rows = [['UOM-412', 'Guest checkout flow', 'Done', 'done', 8], ['UOM-418', 'Saved payment methods', 'Done', 'done', 5], ['UOM-421', 'Inline form validation', 'In review', 'review', 5], ['UOM-430', 'Wallet integration (Apple Pay)', 'In progress', 'progress', 13], ['UOM-433', 'Address autofill', 'Blocked', 'blocked', 8]];
  return /*#__PURE__*/React.createElement("div", {
    style: docStyles.page
  }, /*#__PURE__*/React.createElement("div", {
    style: docStyles.header
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: docStyles.wordmark
  }, "The University of Melbourne"), /*#__PURE__*/React.createElement("div", {
    style: docStyles.dept
  }, "Digital Products \xB7 Checkout Squad")), /*#__PURE__*/React.createElement("div", {
    style: docStyles.docMeta
  }, /*#__PURE__*/React.createElement("div", null, "Sprint Report"), /*#__PURE__*/React.createElement("div", {
    style: {
      opacity: 0.7
    }
  }, "Sprint 14 \xB7 24 Jun 2026"))), /*#__PURE__*/React.createElement("div", {
    style: docStyles.bodyPad
  }, /*#__PURE__*/React.createElement("p", {
    style: docStyles.eyebrow
  }, "Sprint review summary"), /*#__PURE__*/React.createElement("h1", {
    style: docStyles.h1
  }, "Checkout conversion, sprint\xA014"), /*#__PURE__*/React.createElement("p", {
    style: docStyles.lead
  }, "The squad met its sprint goal of reducing checkout drop-off. Guest checkout and saved payments shipped to all users; wallet integration carries into Sprint\xA015."), /*#__PURE__*/React.createElement("div", {
    style: docStyles.metrics
  }, [['48', 'Points completed'], ['94%', 'Goal attainment'], ['18%', 'Drop-off reduction'], ['3', 'Carry-over']].map(([v, l]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: docStyles.metric
  }, /*#__PURE__*/React.createElement("div", {
    style: docStyles.metricV
  }, v), /*#__PURE__*/React.createElement("div", {
    style: docStyles.metricL
  }, l)))), /*#__PURE__*/React.createElement("h2", {
    style: docStyles.h2
  }, "Delivered this sprint"), /*#__PURE__*/React.createElement("table", {
    style: docStyles.table
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: docStyles.th
  }, "ID"), /*#__PURE__*/React.createElement("th", {
    style: {
      ...docStyles.th,
      textAlign: 'left'
    }
  }, "Story"), /*#__PURE__*/React.createElement("th", {
    style: docStyles.th
  }, "Status"), /*#__PURE__*/React.createElement("th", {
    style: {
      ...docStyles.th,
      textAlign: 'right'
    }
  }, "Pts"))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: r[0],
    style: {
      background: i % 2 ? 'var(--paper-blue)' : 'transparent'
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: docStyles.tdMono
  }, r[0]), /*#__PURE__*/React.createElement("td", {
    style: docStyles.td
  }, r[1]), /*#__PURE__*/React.createElement("td", {
    style: {
      ...docStyles.td,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Chip, {
    tone: r[3]
  }, r[2])), /*#__PURE__*/React.createElement("td", {
    style: {
      ...docStyles.td,
      textAlign: 'right',
      fontWeight: 700
    }
  }, r[4]))))), /*#__PURE__*/React.createElement("h2", {
    style: docStyles.h2
  }, "Risks & next steps"), /*#__PURE__*/React.createElement("ul", {
    style: docStyles.ul
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, "Wallet integration is blocked"), " on the payment gateway sandbox \u2014 escalated to platform team, ETA Monday."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, "Address autofill"), " needs a privacy review before release."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, "Next sprint goal:"), " ship wallet payments to 50% of traffic and measure uplift."))), /*#__PURE__*/React.createElement("div", {
    style: docStyles.footer
  }, /*#__PURE__*/React.createElement("span", null, "Prepared by Alex Chen, Product Owner"), /*#__PURE__*/React.createElement("span", null, "CRICOS 00116K \xB7 Page 1 of 1")));
}
const docStyles = {
  page: {
    width: 794,
    minHeight: 1000,
    background: 'var(--white)',
    margin: '0 auto',
    boxShadow: 'var(--shadow-card)',
    fontFamily: 'var(--font-body)',
    color: 'var(--ink-60)',
    display: 'flex',
    flexDirection: 'column'
  },
  header: {
    background: 'var(--heritage-blue)',
    color: 'var(--white)',
    display: 'flex',
    alignItems: 'center',
    gap: 16,
    padding: '22px 48px'
  },
  crest: {
    width: 52,
    height: 52,
    border: '2px solid #fff',
    borderRadius: '50% 50% 50% 50% / 42% 42% 58% 58%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'var(--font-display)',
    fontSize: 15,
    flex: 'none'
  },
  wordmark: {
    fontFamily: 'var(--font-display)',
    fontSize: 18,
    lineHeight: 1.1
  },
  dept: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.7)',
    marginTop: 2
  },
  docMeta: {
    marginLeft: 'auto',
    textAlign: 'right',
    fontSize: 14,
    fontWeight: 600
  },
  bodyPad: {
    padding: '40px 48px',
    flex: 1
  },
  eyebrow: {
    fontSize: 13,
    fontWeight: 700,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: 'var(--ink-40)',
    margin: '0 0 10px'
  },
  h1: {
    fontFamily: 'var(--font-display)',
    fontWeight: 300,
    fontSize: 40,
    lineHeight: 1.05,
    letterSpacing: '-0.01em',
    color: 'var(--heritage-blue)',
    margin: '0 0 14px',
    fontVariationSettings: "'SOFT' 50,'WONK' 0,'opsz' 72"
  },
  lead: {
    fontSize: 17,
    lineHeight: 1.5,
    color: 'var(--ink-60)',
    margin: '0 0 28px',
    maxWidth: '62ch'
  },
  metrics: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4,1fr)',
    gap: 1,
    background: 'var(--hairline)',
    border: '1px solid var(--hairline)',
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 34
  },
  metric: {
    background: 'var(--white)',
    padding: '16px 18px'
  },
  metricV: {
    fontFamily: 'var(--font-display)',
    fontWeight: 400,
    fontSize: 30,
    color: 'var(--heritage-blue)',
    lineHeight: 1
  },
  metricL: {
    fontSize: 13,
    color: 'var(--ink-40)',
    marginTop: 6
  },
  h2: {
    fontFamily: 'var(--font-display)',
    fontWeight: 400,
    fontSize: 24,
    color: 'var(--heritage-blue)',
    margin: '0 0 14px',
    fontVariationSettings: "'SOFT' 50,'WONK' 0"
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: 32,
    fontSize: 14.5
  },
  th: {
    background: 'var(--heritage-blue)',
    color: '#fff',
    fontWeight: 600,
    fontSize: 13,
    padding: '10px 12px',
    textAlign: 'center'
  },
  td: {
    padding: '11px 12px',
    borderBottom: '1px solid var(--hairline)',
    color: 'var(--ink-60)'
  },
  tdMono: {
    padding: '11px 12px',
    borderBottom: '1px solid var(--hairline)',
    fontFamily: 'ui-monospace, monospace',
    fontSize: 13,
    color: 'var(--heritage-blue)',
    fontWeight: 600
  },
  ul: {
    margin: 0,
    paddingLeft: 20,
    fontSize: 15.5,
    lineHeight: 1.6,
    color: 'var(--ink-60)'
  },
  footer: {
    borderTop: '2px solid var(--heritage-blue)',
    padding: '14px 48px',
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: 12.5,
    color: 'var(--ink-40)'
  }
};
window.SprintReport = SprintReport;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/documents/SprintReport.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Identifier = __ds_scope.Identifier;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Input = __ds_scope.Input;

})();
