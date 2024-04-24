(() => {
  var e,
    t,
    r,
    i = Object.create,
    n = Object.defineProperty,
    o = Object.getOwnPropertyDescriptor,
    s = Object.getOwnPropertyNames,
    a = Object.getPrototypeOf,
    l = Object.prototype.hasOwnProperty,
    c = (e) => n(e, "__esModule", { value: !0 }),
    u = (e) => {
      if ("undefined" != typeof require) return require(e);
      throw new Error('Dynamic require of "' + e + '" is not supported');
    },
    d = (e, t) => () => (e && (t = e((e = 0))), t),
    p = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
    f = (e, t) => {
      for (var r in (c(e), t)) n(e, r, { get: t[r], enumerable: !0 });
    },
    h = (e) =>
      ((e, t, r) => {
        if ((t && "object" == typeof t) || "function" == typeof t)
          for (let i of s(t))
            !l.call(e, i) &&
              "default" !== i &&
              n(e, i, {
                get: () => t[i],
                enumerable: !(r = o(t, i)) || r.enumerable,
              });
        return e;
      })(
        c(
          n(
            null != e ? i(a(e)) : {},
            "default",
            e && e.__esModule && "default" in e
              ? { get: () => e.default, enumerable: !0 }
              : { value: e, enumerable: !0 },
          ),
        ),
        e,
      ),
    m = d(() => {
      e = { platform: "", env: {}, versions: { node: "14.17.6" } };
    }),
    g = d(() => {
      m(),
        (t = 0),
        (r = {
          readFileSync: (e) => self[e] || "",
          statSync: () => ({ mtimeMs: t++ }),
        });
    }),
    b = {};
  f(b, { default: () => y });
  var y,
    w,
    v,
    x,
    k = d(() => {
      m(),
        (y = { resolve: (e) => e, extname: (e) => "." + e.split(".").pop() });
    }),
    S = d(() => {
      m(), (w = { sync: (e) => [].concat(e) });
    }),
    C = p((e, t) => {
      m();
      var r = class {
        constructor(e = {}) {
          if (!(e.maxSize && e.maxSize > 0))
            throw new TypeError("`maxSize` must be a number greater than 0");
          (this.maxSize = e.maxSize),
            (this.onEviction = e.onEviction),
            (this.cache = new Map()),
            (this.oldCache = new Map()),
            (this._size = 0);
        }
        _set(e, t) {
          if (
            (this.cache.set(e, t), this._size++, this._size >= this.maxSize)
          ) {
            if (((this._size = 0), "function" == typeof this.onEviction))
              for (let [e, t] of this.oldCache.entries()) this.onEviction(e, t);
            (this.oldCache = this.cache), (this.cache = new Map());
          }
        }
        get(e) {
          if (this.cache.has(e)) return this.cache.get(e);
          if (this.oldCache.has(e)) {
            let t = this.oldCache.get(e);
            return this.oldCache.delete(e), this._set(e, t), t;
          }
        }
        set(e, t) {
          return (
            this.cache.has(e) ? this.cache.set(e, t) : this._set(e, t), this
          );
        }
        has(e) {
          return this.cache.has(e) || this.oldCache.has(e);
        }
        peek(e) {
          return this.cache.has(e)
            ? this.cache.get(e)
            : this.oldCache.has(e)
              ? this.oldCache.get(e)
              : void 0;
        }
        delete(e) {
          let t = this.cache.delete(e);
          return t && this._size--, this.oldCache.delete(e) || t;
        }
        clear() {
          this.cache.clear(), this.oldCache.clear(), (this._size = 0);
        }
        *keys() {
          for (let [e] of this) yield e;
        }
        *values() {
          for (let [, e] of this) yield e;
        }
        *[Symbol.iterator]() {
          for (let e of this.cache) yield e;
          for (let e of this.oldCache) {
            let [t] = e;
            this.cache.has(t) || (yield e);
          }
        }
        get size() {
          let e = 0;
          for (let t of this.oldCache.keys()) this.cache.has(t) || e++;
          return Math.min(this._size + e, this.maxSize);
        }
      };
      t.exports = r;
    }),
    A = d(() => {
      m(), (v = (e) => e);
    }),
    _ = d(() => {
      m(), (x = (e) => e && e._hash);
    });
  function O(e) {
    return x(e, { ignoreUnknown: !0 });
  }
  var E,
    T = d(() => {
      m(), _();
    }),
    P = d(() => {
      m(), (E = {});
    });
  function D(e) {
    let t = r.readFileSync(e, "utf-8");
    return { file: e, requires: E(t) };
  }
  var j = d(() => {
    m(), g(), k(), P(), P();
  });
  function I(e) {
    return "0" === (e = `${e}`)
      ? "0"
      : /^[+-]?(\d+|\d*\.\d+)(e[+-]?\d+)?(%|\w+)?$/.test(e)
        ? e.replace(/^[+-]?/, (e) => ("-" === e ? "" : "-"))
        : e.includes("var(") || e.includes("calc(")
          ? `calc(${e} * -1)`
          : void 0;
  }
  var R,
    $ = d(() => {
      m();
    }),
    B = d(() => {
      m(),
        (R = [
          "preflight",
          "container",
          "accessibility",
          "pointerEvents",
          "visibility",
          "position",
          "inset",
          "isolation",
          "zIndex",
          "order",
          "gridColumn",
          "gridColumnStart",
          "gridColumnEnd",
          "gridRow",
          "gridRowStart",
          "gridRowEnd",
          "float",
          "clear",
          "margin",
          "boxSizing",
          "display",
          "aspectRatio",
          "height",
          "maxHeight",
          "minHeight",
          "width",
          "minWidth",
          "maxWidth",
          "flex",
          "flexShrink",
          "flexGrow",
          "flexBasis",
          "tableLayout",
          "borderCollapse",
          "borderSpacing",
          "transformOrigin",
          "translate",
          "rotate",
          "skew",
          "scale",
          "transform",
          "animation",
          "cursor",
          "touchAction",
          "userSelect",
          "resize",
          "scrollSnapType",
          "scrollSnapAlign",
          "scrollSnapStop",
          "scrollMargin",
          "scrollPadding",
          "listStylePosition",
          "listStyleType",
          "appearance",
          "columns",
          "breakBefore",
          "breakInside",
          "breakAfter",
          "gridAutoColumns",
          "gridAutoFlow",
          "gridAutoRows",
          "gridTemplateColumns",
          "gridTemplateRows",
          "flexDirection",
          "flexWrap",
          "placeContent",
          "placeItems",
          "alignContent",
          "alignItems",
          "justifyContent",
          "justifyItems",
          "gap",
          "space",
          "divideWidth",
          "divideStyle",
          "divideColor",
          "divideOpacity",
          "placeSelf",
          "alignSelf",
          "justifySelf",
          "overflow",
          "overscrollBehavior",
          "scrollBehavior",
          "textOverflow",
          "whitespace",
          "wordBreak",
          "borderRadius",
          "borderWidth",
          "borderStyle",
          "borderColor",
          "borderOpacity",
          "backgroundColor",
          "backgroundOpacity",
          "backgroundImage",
          "gradientColorStops",
          "boxDecorationBreak",
          "backgroundSize",
          "backgroundAttachment",
          "backgroundClip",
          "backgroundPosition",
          "backgroundRepeat",
          "backgroundOrigin",
          "fill",
          "stroke",
          "strokeWidth",
          "objectFit",
          "objectPosition",
          "padding",
          "textAlign",
          "textIndent",
          "verticalAlign",
          "fontFamily",
          "fontSize",
          "fontWeight",
          "textTransform",
          "fontStyle",
          "fontVariantNumeric",
          "lineHeight",
          "letterSpacing",
          "textColor",
          "textOpacity",
          "textDecoration",
          "textDecorationColor",
          "textDecorationStyle",
          "textDecorationThickness",
          "textUnderlineOffset",
          "fontSmoothing",
          "placeholderColor",
          "placeholderOpacity",
          "caretColor",
          "accentColor",
          "opacity",
          "backgroundBlendMode",
          "mixBlendMode",
          "boxShadow",
          "boxShadowColor",
          "outlineStyle",
          "outlineWidth",
          "outlineOffset",
          "outlineColor",
          "ringWidth",
          "ringColor",
          "ringOpacity",
          "ringOffsetWidth",
          "ringOffsetColor",
          "blur",
          "brightness",
          "contrast",
          "dropShadow",
          "grayscale",
          "hueRotate",
          "invert",
          "saturate",
          "sepia",
          "filter",
          "backdropBlur",
          "backdropBrightness",
          "backdropContrast",
          "backdropGrayscale",
          "backdropHueRotate",
          "backdropInvert",
          "backdropOpacity",
          "backdropSaturate",
          "backdropSepia",
          "backdropFilter",
          "transitionProperty",
          "transitionDelay",
          "transitionDuration",
          "transitionTimingFunction",
          "willChange",
          "content",
        ]);
    });
  var U = d(() => {
      m();
    }),
    M = p((e, t) => {
      m(),
        (t.exports = {
          content: [],
          presets: [],
          darkMode: "media",
          theme: {
            screens: {
              sm: "640px",
              md: "768px",
              lg: "1024px",
              xl: "1280px",
              "2xl": "1536px",
            },
            colors: ({ colors: e }) => ({
              inherit: e.inherit,
              current: e.current,
              transparent: e.transparent,
              black: e.black,
              white: e.white,
              slate: e.slate,
              gray: e.gray,
              zinc: e.zinc,
              neutral: e.neutral,
              stone: e.stone,
              red: e.red,
              orange: e.orange,
              amber: e.amber,
              yellow: e.yellow,
              lime: e.lime,
              green: e.green,
              emerald: e.emerald,
              teal: e.teal,
              cyan: e.cyan,
              sky: e.sky,
              blue: e.blue,
              indigo: e.indigo,
              violet: e.violet,
              purple: e.purple,
              fuchsia: e.fuchsia,
              pink: e.pink,
              rose: e.rose,
            }),
            columns: {
              auto: "auto",
              1: "1",
              2: "2",
              3: "3",
              4: "4",
              5: "5",
              6: "6",
              7: "7",
              8: "8",
              9: "9",
              10: "10",
              11: "11",
              12: "12",
              "3xs": "16rem",
              "2xs": "18rem",
              xs: "20rem",
              sm: "24rem",
              md: "28rem",
              lg: "32rem",
              xl: "36rem",
              "2xl": "42rem",
              "3xl": "48rem",
              "4xl": "56rem",
              "5xl": "64rem",
              "6xl": "72rem",
              "7xl": "80rem",
            },
            spacing: {
              px: "1px",
              0: "0px",
              0.5: "0.125rem",
              1: "0.25rem",
              1.5: "0.375rem",
              2: "0.5rem",
              2.5: "0.625rem",
              3: "0.75rem",
              3.5: "0.875rem",
              4: "1rem",
              5: "1.25rem",
              6: "1.5rem",
              7: "1.75rem",
              8: "2rem",
              9: "2.25rem",
              10: "2.5rem",
              11: "2.75rem",
              12: "3rem",
              14: "3.5rem",
              16: "4rem",
              20: "5rem",
              24: "6rem",
              28: "7rem",
              32: "8rem",
              36: "9rem",
              40: "10rem",
              44: "11rem",
              48: "12rem",
              52: "13rem",
              56: "14rem",
              60: "15rem",
              64: "16rem",
              72: "18rem",
              80: "20rem",
              96: "24rem",
            },
            animation: {
              none: "none",
              spin: "spin 1s linear infinite",
              ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
              pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
              bounce: "bounce 1s infinite",
            },
            aspectRatio: { auto: "auto", square: "1 / 1", video: "16 / 9" },
            backdropBlur: ({ theme: e }) => e("blur"),
            backdropBrightness: ({ theme: e }) => e("brightness"),
            backdropContrast: ({ theme: e }) => e("contrast"),
            backdropGrayscale: ({ theme: e }) => e("grayscale"),
            backdropHueRotate: ({ theme: e }) => e("hueRotate"),
            backdropInvert: ({ theme: e }) => e("invert"),
            backdropOpacity: ({ theme: e }) => e("opacity"),
            backdropSaturate: ({ theme: e }) => e("saturate"),
            backdropSepia: ({ theme: e }) => e("sepia"),
            backgroundColor: ({ theme: e }) => e("colors"),
            backgroundImage: {
              none: "none",
              "gradient-to-t":
                "linear-gradient(to top, var(--tw-gradient-stops))",
              "gradient-to-tr":
                "linear-gradient(to top right, var(--tw-gradient-stops))",
              "gradient-to-r":
                "linear-gradient(to right, var(--tw-gradient-stops))",
              "gradient-to-br":
                "linear-gradient(to bottom right, var(--tw-gradient-stops))",
              "gradient-to-b":
                "linear-gradient(to bottom, var(--tw-gradient-stops))",
              "gradient-to-bl":
                "linear-gradient(to bottom left, var(--tw-gradient-stops))",
              "gradient-to-l":
                "linear-gradient(to left, var(--tw-gradient-stops))",
              "gradient-to-tl":
                "linear-gradient(to top left, var(--tw-gradient-stops))",
            },
            backgroundOpacity: ({ theme: e }) => e("opacity"),
            backgroundPosition: {
              bottom: "bottom",
              center: "center",
              left: "left",
              "left-bottom": "left bottom",
              "left-top": "left top",
              right: "right",
              "right-bottom": "right bottom",
              "right-top": "right top",
              top: "top",
            },
            backgroundSize: {
              auto: "auto",
              cover: "cover",
              contain: "contain",
            },
            blur: {
              0: "0",
              none: "0",
              sm: "4px",
              DEFAULT: "8px",
              md: "12px",
              lg: "16px",
              xl: "24px",
              "2xl": "40px",
              "3xl": "64px",
            },
            brightness: {
              0: "0",
              50: ".5",
              75: ".75",
              90: ".9",
              95: ".95",
              100: "1",
              105: "1.05",
              110: "1.1",
              125: "1.25",
              150: "1.5",
              200: "2",
            },
            borderColor: ({ theme: e }) => ({
              ...e("colors"),
              DEFAULT: e("colors.gray.200", "currentColor"),
            }),
            borderOpacity: ({ theme: e }) => e("opacity"),
            borderRadius: {
              none: "0px",
              sm: "0.125rem",
              DEFAULT: "0.25rem",
              md: "0.375rem",
              lg: "0.5rem",
              xl: "0.75rem",
              "2xl": "1rem",
              "3xl": "1.5rem",
              full: "9999px",
            },
            borderSpacing: ({ theme: e }) => ({ ...e("spacing") }),
            borderWidth: {
              DEFAULT: "1px",
              0: "0px",
              2: "2px",
              4: "4px",
              8: "8px",
            },
            boxShadow: {
              sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
              DEFAULT:
                "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
              md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
              lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
              xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
              "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
              inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
              none: "none",
            },
            boxShadowColor: ({ theme: e }) => e("colors"),
            caretColor: ({ theme: e }) => e("colors"),
            accentColor: ({ theme: e }) => ({ ...e("colors"), auto: "auto" }),
            contrast: {
              0: "0",
              50: ".5",
              75: ".75",
              100: "1",
              125: "1.25",
              150: "1.5",
              200: "2",
            },
            container: {},
            content: { none: "none" },
            cursor: {
              auto: "auto",
              default: "default",
              pointer: "pointer",
              wait: "wait",
              text: "text",
              move: "move",
              help: "help",
              "not-allowed": "not-allowed",
              none: "none",
              "context-menu": "context-menu",
              progress: "progress",
              cell: "cell",
              crosshair: "crosshair",
              "vertical-text": "vertical-text",
              alias: "alias",
              copy: "copy",
              "no-drop": "no-drop",
              grab: "grab",
              grabbing: "grabbing",
              "all-scroll": "all-scroll",
              "col-resize": "col-resize",
              "row-resize": "row-resize",
              "n-resize": "n-resize",
              "e-resize": "e-resize",
              "s-resize": "s-resize",
              "w-resize": "w-resize",
              "ne-resize": "ne-resize",
              "nw-resize": "nw-resize",
              "se-resize": "se-resize",
              "sw-resize": "sw-resize",
              "ew-resize": "ew-resize",
              "ns-resize": "ns-resize",
              "nesw-resize": "nesw-resize",
              "nwse-resize": "nwse-resize",
              "zoom-in": "zoom-in",
              "zoom-out": "zoom-out",
            },
            divideColor: ({ theme: e }) => e("borderColor"),
            divideOpacity: ({ theme: e }) => e("borderOpacity"),
            divideWidth: ({ theme: e }) => e("borderWidth"),
            dropShadow: {
              sm: "0 1px 1px rgb(0 0 0 / 0.05)",
              DEFAULT: [
                "0 1px 2px rgb(0 0 0 / 0.1)",
                "0 1px 1px rgb(0 0 0 / 0.06)",
              ],
              md: [
                "0 4px 3px rgb(0 0 0 / 0.07)",
                "0 2px 2px rgb(0 0 0 / 0.06)",
              ],
              lg: [
                "0 10px 8px rgb(0 0 0 / 0.04)",
                "0 4px 3px rgb(0 0 0 / 0.1)",
              ],
              xl: [
                "0 20px 13px rgb(0 0 0 / 0.03)",
                "0 8px 5px rgb(0 0 0 / 0.08)",
              ],
              "2xl": "0 25px 25px rgb(0 0 0 / 0.15)",
              none: "0 0 #0000",
            },
            fill: ({ theme: e }) => e("colors"),
            grayscale: { 0: "0", DEFAULT: "100%" },
            hueRotate: {
              0: "0deg",
              15: "15deg",
              30: "30deg",
              60: "60deg",
              90: "90deg",
              180: "180deg",
            },
            invert: { 0: "0", DEFAULT: "100%" },
            flex: {
              1: "1 1 0%",
              auto: "1 1 auto",
              initial: "0 1 auto",
              none: "none",
            },
            flexBasis: ({ theme: e }) => ({
              auto: "auto",
              ...e("spacing"),
              "1/2": "50%",
              "1/3": "33.333333%",
              "2/3": "66.666667%",
              "1/4": "25%",
              "2/4": "50%",
              "3/4": "75%",
              "1/5": "20%",
              "2/5": "40%",
              "3/5": "60%",
              "4/5": "80%",
              "1/6": "16.666667%",
              "2/6": "33.333333%",
              "3/6": "50%",
              "4/6": "66.666667%",
              "5/6": "83.333333%",
              "1/12": "8.333333%",
              "2/12": "16.666667%",
              "3/12": "25%",
              "4/12": "33.333333%",
              "5/12": "41.666667%",
              "6/12": "50%",
              "7/12": "58.333333%",
              "8/12": "66.666667%",
              "9/12": "75%",
              "10/12": "83.333333%",
              "11/12": "91.666667%",
              full: "100%",
            }),
            flexGrow: { 0: "0", DEFAULT: "1" },
            flexShrink: { 0: "0", DEFAULT: "1" },
            fontFamily: {
              sans: [
                "ui-sans-serif",
                "system-ui",
                "-apple-system",
                "BlinkMacSystemFont",
                '"Segoe UI"',
                "Roboto",
                '"Helvetica Neue"',
                "Arial",
                '"Noto Sans"',
                "sans-serif",
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
                '"Noto Color Emoji"',
              ],
              serif: [
                "ui-serif",
                "Georgia",
                "Cambria",
                '"Times New Roman"',
                "Times",
                "serif",
              ],
              mono: [
                "ui-monospace",
                "SFMono-Regular",
                "Menlo",
                "Monaco",
                "Consolas",
                '"Liberation Mono"',
                '"Courier New"',
                "monospace",
              ],
            },
            fontSize: {
              xs: ["0.75rem", { lineHeight: "1rem" }],
              sm: ["0.875rem", { lineHeight: "1.25rem" }],
              base: ["1rem", { lineHeight: "1.5rem" }],
              lg: ["1.125rem", { lineHeight: "1.75rem" }],
              xl: ["1.25rem", { lineHeight: "1.75rem" }],
              "2xl": ["1.5rem", { lineHeight: "2rem" }],
              "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
              "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
              "5xl": ["3rem", { lineHeight: "1" }],
              "6xl": ["3.75rem", { lineHeight: "1" }],
              "7xl": ["4.5rem", { lineHeight: "1" }],
              "8xl": ["6rem", { lineHeight: "1" }],
              "9xl": ["8rem", { lineHeight: "1" }],
            },
            fontWeight: {
              thin: "100",
              extralight: "200",
              light: "300",
              normal: "400",
              medium: "500",
              semibold: "600",
              bold: "700",
              extrabold: "800",
              black: "900",
            },
            gap: ({ theme: e }) => e("spacing"),
            gradientColorStops: ({ theme: e }) => e("colors"),
            gridAutoColumns: {
              auto: "auto",
              min: "min-content",
              max: "max-content",
              fr: "minmax(0, 1fr)",
            },
            gridAutoRows: {
              auto: "auto",
              min: "min-content",
              max: "max-content",
              fr: "minmax(0, 1fr)",
            },
            gridColumn: {
              auto: "auto",
              "span-1": "span 1 / span 1",
              "span-2": "span 2 / span 2",
              "span-3": "span 3 / span 3",
              "span-4": "span 4 / span 4",
              "span-5": "span 5 / span 5",
              "span-6": "span 6 / span 6",
              "span-7": "span 7 / span 7",
              "span-8": "span 8 / span 8",
              "span-9": "span 9 / span 9",
              "span-10": "span 10 / span 10",
              "span-11": "span 11 / span 11",
              "span-12": "span 12 / span 12",
              "span-full": "1 / -1",
            },
            gridColumnEnd: {
              auto: "auto",
              1: "1",
              2: "2",
              3: "3",
              4: "4",
              5: "5",
              6: "6",
              7: "7",
              8: "8",
              9: "9",
              10: "10",
              11: "11",
              12: "12",
              13: "13",
            },
            gridColumnStart: {
              auto: "auto",
              1: "1",
              2: "2",
              3: "3",
              4: "4",
              5: "5",
              6: "6",
              7: "7",
              8: "8",
              9: "9",
              10: "10",
              11: "11",
              12: "12",
              13: "13",
            },
            gridRow: {
              auto: "auto",
              "span-1": "span 1 / span 1",
              "span-2": "span 2 / span 2",
              "span-3": "span 3 / span 3",
              "span-4": "span 4 / span 4",
              "span-5": "span 5 / span 5",
              "span-6": "span 6 / span 6",
              "span-full": "1 / -1",
            },
            gridRowStart: {
              auto: "auto",
              1: "1",
              2: "2",
              3: "3",
              4: "4",
              5: "5",
              6: "6",
              7: "7",
            },
            gridRowEnd: {
              auto: "auto",
              1: "1",
              2: "2",
              3: "3",
              4: "4",
              5: "5",
              6: "6",
              7: "7",
            },
            gridTemplateColumns: {
              none: "none",
              1: "repeat(1, minmax(0, 1fr))",
              2: "repeat(2, minmax(0, 1fr))",
              3: "repeat(3, minmax(0, 1fr))",
              4: "repeat(4, minmax(0, 1fr))",
              5: "repeat(5, minmax(0, 1fr))",
              6: "repeat(6, minmax(0, 1fr))",
              7: "repeat(7, minmax(0, 1fr))",
              8: "repeat(8, minmax(0, 1fr))",
              9: "repeat(9, minmax(0, 1fr))",
              10: "repeat(10, minmax(0, 1fr))",
              11: "repeat(11, minmax(0, 1fr))",
              12: "repeat(12, minmax(0, 1fr))",
            },
            gridTemplateRows: {
              none: "none",
              1: "repeat(1, minmax(0, 1fr))",
              2: "repeat(2, minmax(0, 1fr))",
              3: "repeat(3, minmax(0, 1fr))",
              4: "repeat(4, minmax(0, 1fr))",
              5: "repeat(5, minmax(0, 1fr))",
              6: "repeat(6, minmax(0, 1fr))",
            },
            height: ({ theme: e }) => ({
              auto: "auto",
              ...e("spacing"),
              "1/2": "50%",
              "1/3": "33.333333%",
              "2/3": "66.666667%",
              "1/4": "25%",
              "2/4": "50%",
              "3/4": "75%",
              "1/5": "20%",
              "2/5": "40%",
              "3/5": "60%",
              "4/5": "80%",
              "1/6": "16.666667%",
              "2/6": "33.333333%",
              "3/6": "50%",
              "4/6": "66.666667%",
              "5/6": "83.333333%",
              full: "100%",
              screen: "100vh",
              min: "min-content",
              max: "max-content",
              fit: "fit-content",
            }),
            inset: ({ theme: e }) => ({
              auto: "auto",
              ...e("spacing"),
              "1/2": "50%",
              "1/3": "33.333333%",
              "2/3": "66.666667%",
              "1/4": "25%",
              "2/4": "50%",
              "3/4": "75%",
              full: "100%",
            }),
            keyframes: {
              spin: { to: { transform: "rotate(360deg)" } },
              ping: { "75%, 100%": { transform: "scale(2)", opacity: "0" } },
              pulse: { "50%": { opacity: ".5" } },
              bounce: {
                "0%, 100%": {
                  transform: "translateY(-25%)",
                  animationTimingFunction: "cubic-bezier(0.8,0,1,1)",
                },
                "50%": {
                  transform: "none",
                  animationTimingFunction: "cubic-bezier(0,0,0.2,1)",
                },
              },
            },
            letterSpacing: {
              tighter: "-0.05em",
              tight: "-0.025em",
              normal: "0em",
              wide: "0.025em",
              wider: "0.05em",
              widest: "0.1em",
            },
            lineHeight: {
              none: "1",
              tight: "1.25",
              snug: "1.375",
              normal: "1.5",
              relaxed: "1.625",
              loose: "2",
              3: ".75rem",
              4: "1rem",
              5: "1.25rem",
              6: "1.5rem",
              7: "1.75rem",
              8: "2rem",
              9: "2.25rem",
              10: "2.5rem",
            },
            listStyleType: { none: "none", disc: "disc", decimal: "decimal" },
            margin: ({ theme: e }) => ({ auto: "auto", ...e("spacing") }),
            maxHeight: ({ theme: e }) => ({
              ...e("spacing"),
              full: "100%",
              screen: "100vh",
              min: "min-content",
              max: "max-content",
              fit: "fit-content",
            }),
            maxWidth: ({ theme: e, breakpoints: t }) => ({
              none: "none",
              0: "0rem",
              xs: "20rem",
              sm: "24rem",
              md: "28rem",
              lg: "32rem",
              xl: "36rem",
              "2xl": "42rem",
              "3xl": "48rem",
              "4xl": "56rem",
              "5xl": "64rem",
              "6xl": "72rem",
              "7xl": "80rem",
              full: "100%",
              min: "min-content",
              max: "max-content",
              fit: "fit-content",
              prose: "65ch",
              ...t(e("screens")),
            }),
            minHeight: {
              0: "0px",
              full: "100%",
              screen: "100vh",
              min: "min-content",
              max: "max-content",
              fit: "fit-content",
            },
            minWidth: {
              0: "0px",
              full: "100%",
              min: "min-content",
              max: "max-content",
              fit: "fit-content",
            },
            objectPosition: {
              bottom: "bottom",
              center: "center",
              left: "left",
              "left-bottom": "left bottom",
              "left-top": "left top",
              right: "right",
              "right-bottom": "right bottom",
              "right-top": "right top",
              top: "top",
            },
            opacity: {
              0: "0",
              5: "0.05",
              10: "0.1",
              20: "0.2",
              25: "0.25",
              30: "0.3",
              40: "0.4",
              50: "0.5",
              60: "0.6",
              70: "0.7",
              75: "0.75",
              80: "0.8",
              90: "0.9",
              95: "0.95",
              100: "1",
            },
            order: {
              first: "-9999",
              last: "9999",
              none: "0",
              1: "1",
              2: "2",
              3: "3",
              4: "4",
              5: "5",
              6: "6",
              7: "7",
              8: "8",
              9: "9",
              10: "10",
              11: "11",
              12: "12",
            },
            padding: ({ theme: e }) => e("spacing"),
            placeholderColor: ({ theme: e }) => e("colors"),
            placeholderOpacity: ({ theme: e }) => e("opacity"),
            outlineColor: ({ theme: e }) => e("colors"),
            outlineOffset: { 0: "0px", 1: "1px", 2: "2px", 4: "4px", 8: "8px" },
            outlineWidth: { 0: "0px", 1: "1px", 2: "2px", 4: "4px", 8: "8px" },
            ringColor: ({ theme: e }) => ({
              DEFAULT: e("colors.blue.500", "#3b82f6"),
              ...e("colors"),
            }),
            ringOffsetColor: ({ theme: e }) => e("colors"),
            ringOffsetWidth: {
              0: "0px",
              1: "1px",
              2: "2px",
              4: "4px",
              8: "8px",
            },
            ringOpacity: ({ theme: e }) => ({
              DEFAULT: "0.5",
              ...e("opacity"),
            }),
            ringWidth: {
              DEFAULT: "3px",
              0: "0px",
              1: "1px",
              2: "2px",
              4: "4px",
              8: "8px",
            },
            rotate: {
              0: "0deg",
              1: "1deg",
              2: "2deg",
              3: "3deg",
              6: "6deg",
              12: "12deg",
              45: "45deg",
              90: "90deg",
              180: "180deg",
            },
            saturate: { 0: "0", 50: ".5", 100: "1", 150: "1.5", 200: "2" },
            scale: {
              0: "0",
              50: ".5",
              75: ".75",
              90: ".9",
              95: ".95",
              100: "1",
              105: "1.05",
              110: "1.1",
              125: "1.25",
              150: "1.5",
            },
            scrollMargin: ({ theme: e }) => ({ ...e("spacing") }),
            scrollPadding: ({ theme: e }) => e("spacing"),
            sepia: { 0: "0", DEFAULT: "100%" },
            skew: {
              0: "0deg",
              1: "1deg",
              2: "2deg",
              3: "3deg",
              6: "6deg",
              12: "12deg",
            },
            space: ({ theme: e }) => ({ ...e("spacing") }),
            stroke: ({ theme: e }) => e("colors"),
            strokeWidth: { 0: "0", 1: "1", 2: "2" },
            textColor: ({ theme: e }) => e("colors"),
            textDecorationColor: ({ theme: e }) => e("colors"),
            textDecorationThickness: {
              auto: "auto",
              "from-font": "from-font",
              0: "0px",
              1: "1px",
              2: "2px",
              4: "4px",
              8: "8px",
            },
            textUnderlineOffset: {
              auto: "auto",
              0: "0px",
              1: "1px",
              2: "2px",
              4: "4px",
              8: "8px",
            },
            textIndent: ({ theme: e }) => ({ ...e("spacing") }),
            textOpacity: ({ theme: e }) => e("opacity"),
            transformOrigin: {
              center: "center",
              top: "top",
              "top-right": "top right",
              right: "right",
              "bottom-right": "bottom right",
              bottom: "bottom",
              "bottom-left": "bottom left",
              left: "left",
              "top-left": "top left",
            },
            transitionDelay: {
              75: "75ms",
              100: "100ms",
              150: "150ms",
              200: "200ms",
              300: "300ms",
              500: "500ms",
              700: "700ms",
              1e3: "1000ms",
            },
            transitionDuration: {
              DEFAULT: "150ms",
              75: "75ms",
              100: "100ms",
              150: "150ms",
              200: "200ms",
              300: "300ms",
              500: "500ms",
              700: "700ms",
              1e3: "1000ms",
            },
            transitionProperty: {
              none: "none",
              all: "all",
              DEFAULT:
                "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
              colors:
                "color, background-color, border-color, text-decoration-color, fill, stroke",
              opacity: "opacity",
              shadow: "box-shadow",
              transform: "transform",
            },
            transitionTimingFunction: {
              DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
              linear: "linear",
              in: "cubic-bezier(0.4, 0, 1, 1)",
              out: "cubic-bezier(0, 0, 0.2, 1)",
              "in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
            },
            translate: ({ theme: e }) => ({
              ...e("spacing"),
              "1/2": "50%",
              "1/3": "33.333333%",
              "2/3": "66.666667%",
              "1/4": "25%",
              "2/4": "50%",
              "3/4": "75%",
              full: "100%",
            }),
            width: ({ theme: e }) => ({
              auto: "auto",
              ...e("spacing"),
              "1/2": "50%",
              "1/3": "33.333333%",
              "2/3": "66.666667%",
              "1/4": "25%",
              "2/4": "50%",
              "3/4": "75%",
              "1/5": "20%",
              "2/5": "40%",
              "3/5": "60%",
              "4/5": "80%",
              "1/6": "16.666667%",
              "2/6": "33.333333%",
              "3/6": "50%",
              "4/6": "66.666667%",
              "5/6": "83.333333%",
              "1/12": "8.333333%",
              "2/12": "16.666667%",
              "3/12": "25%",
              "4/12": "33.333333%",
              "5/12": "41.666667%",
              "6/12": "50%",
              "7/12": "58.333333%",
              "8/12": "66.666667%",
              "9/12": "75%",
              "10/12": "83.333333%",
              "11/12": "91.666667%",
              full: "100%",
              screen: "100vw",
              min: "min-content",
              max: "max-content",
              fit: "fit-content",
            }),
            willChange: {
              auto: "auto",
              scroll: "scroll-position",
              contents: "contents",
              transform: "transform",
            },
            zIndex: {
              auto: "auto",
              0: "0",
              10: "10",
              20: "20",
              30: "30",
              40: "40",
              50: "50",
            },
          },
          variantOrder: [
            "first",
            "last",
            "odd",
            "even",
            "visited",
            "checked",
            "empty",
            "read-only",
            "group-hover",
            "group-focus",
            "focus-within",
            "hover",
            "focus",
            "focus-visible",
            "active",
            "disabled",
          ],
          plugins: [],
        });
    }),
    L = {};
  f(L, { default: () => z });
  var z,
    F = d(() => {
      m(), (z = new Proxy({}, { get: () => String }));
    });
  function N(t, r, i) {
    (void 0 !== e && e.env.JEST_WORKER_ID) ||
      (i && V.has(i)) ||
      (i && V.add(i),
      console.warn(""),
      r.forEach((e) => console.warn(t, "-", e)));
  }
  function W(e) {
    return z.dim(e);
  }
  var V,
    q,
    G = d(() => {
      m(),
        F(),
        (V = new Set()),
        (q = {
          info(e, t) {
            N(z.bold(z.cyan("info")), ...(Array.isArray(e) ? [e] : [t, e]));
          },
          warn(e, t) {
            N(z.bold(z.yellow("warn")), ...(Array.isArray(e) ? [e] : [t, e]));
          },
          risk(e, t) {
            N(z.bold(z.magenta("risk")), ...(Array.isArray(e) ? [e] : [t, e]));
          },
        });
    }),
    Y = {};
  function H({ version: e, from: t, to: r }) {
    q.warn(`${t}-color-renamed`, [
      `As of Tailwind CSS ${e}, \`${t}\` has been renamed to \`${r}\`.`,
      "Update your configuration file to silence this warning.",
    ]);
  }
  f(Y, { default: () => Q });
  var Q,
    J = d(() => {
      m(),
        G(),
        (Q = {
          inherit: "inherit",
          current: "currentColor",
          transparent: "transparent",
          black: "#000",
          white: "#fff",
          slate: {
            50: "#f8fafc",
            100: "#f1f5f9",
            200: "#e2e8f0",
            300: "#cbd5e1",
            400: "#94a3b8",
            500: "#64748b",
            600: "#475569",
            700: "#334155",
            800: "#1e293b",
            900: "#0f172a",
          },
          gray: {
            50: "#f9fafb",
            100: "#f3f4f6",
            200: "#e5e7eb",
            300: "#d1d5db",
            400: "#9ca3af",
            500: "#6b7280",
            600: "#4b5563",
            700: "#374151",
            800: "#1f2937",
            900: "#111827",
          },
          zinc: {
            50: "#fafafa",
            100: "#f4f4f5",
            200: "#e4e4e7",
            300: "#d4d4d8",
            400: "#a1a1aa",
            500: "#71717a",
            600: "#52525b",
            700: "#3f3f46",
            800: "#27272a",
            900: "#18181b",
          },
          neutral: {
            50: "#fafafa",
            100: "#f5f5f5",
            200: "#e5e5e5",
            300: "#d4d4d4",
            400: "#a3a3a3",
            500: "#737373",
            600: "#525252",
            700: "#404040",
            800: "#262626",
            900: "#171717",
          },
          stone: {
            50: "#fafaf9",
            100: "#f5f5f4",
            200: "#e7e5e4",
            300: "#d6d3d1",
            400: "#a8a29e",
            500: "#78716c",
            600: "#57534e",
            700: "#44403c",
            800: "#292524",
            900: "#1c1917",
          },
          red: {
            50: "#fef2f2",
            100: "#fee2e2",
            200: "#fecaca",
            300: "#fca5a5",
            400: "#f87171",
            500: "#ef4444",
            600: "#dc2626",
            700: "#b91c1c",
            800: "#991b1b",
            900: "#7f1d1d",
          },
          orange: {
            50: "#fff7ed",
            100: "#ffedd5",
            200: "#fed7aa",
            300: "#fdba74",
            400: "#fb923c",
            500: "#f97316",
            600: "#ea580c",
            700: "#c2410c",
            800: "#9a3412",
            900: "#7c2d12",
          },
          amber: {
            50: "#fffbeb",
            100: "#fef3c7",
            200: "#fde68a",
            300: "#fcd34d",
            400: "#fbbf24",
            500: "#f59e0b",
            600: "#d97706",
            700: "#b45309",
            800: "#92400e",
            900: "#78350f",
          },
          yellow: {
            50: "#fefce8",
            100: "#fef9c3",
            200: "#fef08a",
            300: "#fde047",
            400: "#facc15",
            500: "#eab308",
            600: "#ca8a04",
            700: "#a16207",
            800: "#854d0e",
            900: "#713f12",
          },
          lime: {
            50: "#f7fee7",
            100: "#ecfccb",
            200: "#d9f99d",
            300: "#bef264",
            400: "#a3e635",
            500: "#84cc16",
            600: "#65a30d",
            700: "#4d7c0f",
            800: "#3f6212",
            900: "#365314",
          },
          green: {
            50: "#f0fdf4",
            100: "#dcfce7",
            200: "#bbf7d0",
            300: "#86efac",
            400: "#4ade80",
            500: "#22c55e",
            600: "#16a34a",
            700: "#15803d",
            800: "#166534",
            900: "#14532d",
          },
          emerald: {
            50: "#ecfdf5",
            100: "#d1fae5",
            200: "#a7f3d0",
            300: "#6ee7b7",
            400: "#34d399",
            500: "#10b981",
            600: "#059669",
            700: "#047857",
            800: "#065f46",
            900: "#064e3b",
          },
          teal: {
            50: "#f0fdfa",
            100: "#ccfbf1",
            200: "#99f6e4",
            300: "#5eead4",
            400: "#2dd4bf",
            500: "#14b8a6",
            600: "#0d9488",
            700: "#0f766e",
            800: "#115e59",
            900: "#134e4a",
          },
          cyan: {
            50: "#ecfeff",
            100: "#cffafe",
            200: "#a5f3fc",
            300: "#67e8f9",
            400: "#22d3ee",
            500: "#06b6d4",
            600: "#0891b2",
            700: "#0e7490",
            800: "#155e75",
            900: "#164e63",
          },
          sky: {
            50: "#f0f9ff",
            100: "#e0f2fe",
            200: "#bae6fd",
            300: "#7dd3fc",
            400: "#38bdf8",
            500: "#0ea5e9",
            600: "#0284c7",
            700: "#0369a1",
            800: "#075985",
            900: "#0c4a6e",
          },
          blue: {
            50: "#eff6ff",
            100: "#dbeafe",
            200: "#bfdbfe",
            300: "#93c5fd",
            400: "#60a5fa",
            500: "#3b82f6",
            600: "#2563eb",
            700: "#1d4ed8",
            800: "#1e40af",
            900: "#1e3a8a",
          },
          indigo: {
            50: "#eef2ff",
            100: "#e0e7ff",
            200: "#c7d2fe",
            300: "#a5b4fc",
            400: "#818cf8",
            500: "#6366f1",
            600: "#4f46e5",
            700: "#4338ca",
            800: "#3730a3",
            900: "#312e81",
          },
          violet: {
            50: "#f5f3ff",
            100: "#ede9fe",
            200: "#ddd6fe",
            300: "#c4b5fd",
            400: "#a78bfa",
            500: "#8b5cf6",
            600: "#7c3aed",
            700: "#6d28d9",
            800: "#5b21b6",
            900: "#4c1d95",
          },
          purple: {
            50: "#faf5ff",
            100: "#f3e8ff",
            200: "#e9d5ff",
            300: "#d8b4fe",
            400: "#c084fc",
            500: "#a855f7",
            600: "#9333ea",
            700: "#7e22ce",
            800: "#6b21a8",
            900: "#581c87",
          },
          fuchsia: {
            50: "#fdf4ff",
            100: "#fae8ff",
            200: "#f5d0fe",
            300: "#f0abfc",
            400: "#e879f9",
            500: "#d946ef",
            600: "#c026d3",
            700: "#a21caf",
            800: "#86198f",
            900: "#701a75",
          },
          pink: {
            50: "#fdf2f8",
            100: "#fce7f3",
            200: "#fbcfe8",
            300: "#f9a8d4",
            400: "#f472b6",
            500: "#ec4899",
            600: "#db2777",
            700: "#be185d",
            800: "#9d174d",
            900: "#831843",
          },
          rose: {
            50: "#fff1f2",
            100: "#ffe4e6",
            200: "#fecdd3",
            300: "#fda4af",
            400: "#fb7185",
            500: "#f43f5e",
            600: "#e11d48",
            700: "#be123c",
            800: "#9f1239",
            900: "#881337",
          },
          get lightBlue() {
            return (
              H({ version: "v2.2", from: "lightBlue", to: "sky" }), this.sky
            );
          },
          get warmGray() {
            return (
              H({ version: "v3.0", from: "warmGray", to: "stone" }), this.stone
            );
          },
          get trueGray() {
            return (
              H({ version: "v3.0", from: "trueGray", to: "neutral" }),
              this.neutral
            );
          },
          get coolGray() {
            return (
              H({ version: "v3.0", from: "coolGray", to: "gray" }), this.gray
            );
          },
          get blueGray() {
            return (
              H({ version: "v3.0", from: "blueGray", to: "slate" }), this.slate
            );
          },
        });
    });
  function X(e, ...t) {
    for (let r of t) {
      for (let t in r) e?.hasOwnProperty?.(t) || (e[t] = r[t]);
      for (let t of Object.getOwnPropertySymbols(r))
        e?.hasOwnProperty?.(t) || (e[t] = r[t]);
    }
    return e;
  }
  var K = d(() => {
    m();
  });
  function Z(e) {
    if (Array.isArray(e)) return e;
    if (e.split("[").length - 1 !== e.split("]").length - 1)
      throw new Error(`Path is invalid. Has unbalanced brackets: ${e}`);
    return e.split(/\.(?![^\[]*\])|[\[\]]/g).filter(Boolean);
  }
  var ee = d(() => {
    m();
  });
  var te = d(() => {
    m(), G();
  });
  function re(e) {
    if ("[object Object]" !== Object.prototype.toString.call(e)) return !1;
    let t = Object.getPrototypeOf(e);
    return null === t || t === Object.prototype;
  }
  var ie = d(() => {
    m();
  });
  function ne(e) {
    return Array.isArray(e)
      ? e.map((e) => ne(e))
      : "object" == typeof e && null !== e
        ? Object.fromEntries(Object.entries(e).map(([e, t]) => [e, ne(t)]))
        : e;
  }
  var oe = d(() => {
      m();
    }),
    se = p((e, t) => {
      function r(e) {
        for (
          var t = e.toLowerCase(), r = "", i = !1, n = 0;
          n < 6 && void 0 !== t[n];
          n++
        ) {
          var o = t.charCodeAt(n);
          if (
            ((i = 32 === o), !((o >= 97 && o <= 102) || (o >= 48 && o <= 57)))
          )
            break;
          r += t[n];
        }
        if (0 !== r.length) {
          var s = parseInt(r, 16);
          return (s >= 55296 && s <= 57343) || 0 === s || s > 1114111
            ? ["�", r.length + (i ? 1 : 0)]
            : [String.fromCodePoint(s), r.length + (i ? 1 : 0)];
        }
      }
      m(),
        (e.__esModule = !0),
        (e.default = function (e) {
          if (!i.test(e)) return e;
          for (var t = "", n = 0; n < e.length; n++)
            if ("\\" !== e[n]) t += e[n];
            else {
              var o = r(e.slice(n + 1, n + 7));
              if (void 0 !== o) {
                (t += o[0]), (n += o[1]);
                continue;
              }
              if ("\\" === e[n + 1]) {
                (t += "\\"), n++;
                continue;
              }
              e.length === n + 1 && (t += e[n]);
            }
          return t;
        });
      var i = /\\/;
      t.exports = e.default;
    }),
    ae = p((e, t) => {
      m(),
        (e.__esModule = !0),
        (e.default = function (e) {
          for (
            var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1;
            i < t;
            i++
          )
            r[i - 1] = arguments[i];
          for (; r.length > 0; ) {
            var n = r.shift();
            if (!e[n]) return;
            e = e[n];
          }
          return e;
        }),
        (t.exports = e.default);
    }),
    le = p((e, t) => {
      m(),
        (e.__esModule = !0),
        (e.default = function (e) {
          for (
            var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1;
            i < t;
            i++
          )
            r[i - 1] = arguments[i];
          for (; r.length > 0; ) {
            var n = r.shift();
            e[n] || (e[n] = {}), (e = e[n]);
          }
        }),
        (t.exports = e.default);
    }),
    ce = p((e, t) => {
      m(),
        (e.__esModule = !0),
        (e.default = function (e) {
          for (var t = "", r = e.indexOf("/*"), i = 0; r >= 0; ) {
            t += e.slice(i, r);
            var n = e.indexOf("*/", r + 2);
            if (n < 0) return t;
            (i = n + 2), (r = e.indexOf("/*", i));
          }
          return (t += e.slice(i));
        }),
        (t.exports = e.default);
    }),
    ue = p((e) => {
      m(),
        (e.__esModule = !0),
        (e.stripComments = e.ensureObject = e.getProp = e.unesc = void 0);
      var t = o(se());
      e.unesc = t.default;
      var r = o(ae());
      e.getProp = r.default;
      var i = o(le());
      e.ensureObject = i.default;
      var n = o(ce());
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.stripComments = n.default;
    }),
    de = p((e, t) => {
      m(), (e.__esModule = !0), (e.default = void 0);
      var r = ue();
      function i(e, t) {
        for (var r = 0; r < t.length; r++) {
          var i = t[r];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      var n = function e(t, r) {
          if ("object" != typeof t || null === t) return t;
          var i = new t.constructor();
          for (var n in t)
            if (t.hasOwnProperty(n)) {
              var o = t[n];
              "parent" === n && "object" === typeof o
                ? r && (i[n] = r)
                : (i[n] =
                    o instanceof Array
                      ? o.map(function (t) {
                          return e(t, i);
                        })
                      : e(o, i));
            }
          return i;
        },
        o = (function () {
          function e(e) {
            void 0 === e && (e = {}),
              Object.assign(this, e),
              (this.spaces = this.spaces || {}),
              (this.spaces.before = this.spaces.before || ""),
              (this.spaces.after = this.spaces.after || "");
          }
          var t = e.prototype;
          return (
            (t.remove = function () {
              return (
                this.parent && this.parent.removeChild(this),
                (this.parent = void 0),
                this
              );
            }),
            (t.replaceWith = function () {
              if (this.parent) {
                for (var e in arguments)
                  this.parent.insertBefore(this, arguments[e]);
                this.remove();
              }
              return this;
            }),
            (t.next = function () {
              return this.parent.at(this.parent.index(this) + 1);
            }),
            (t.prev = function () {
              return this.parent.at(this.parent.index(this) - 1);
            }),
            (t.clone = function (e) {
              void 0 === e && (e = {});
              var t = n(this);
              for (var r in e) t[r] = e[r];
              return t;
            }),
            (t.appendToPropertyAndEscape = function (e, t, r) {
              this.raws || (this.raws = {});
              var i = this[e],
                n = this.raws[e];
              (this[e] = i + t),
                n || r !== t
                  ? (this.raws[e] = (n || i) + r)
                  : delete this.raws[e];
            }),
            (t.setPropertyAndEscape = function (e, t, r) {
              this.raws || (this.raws = {}), (this[e] = t), (this.raws[e] = r);
            }),
            (t.setPropertyWithoutEscape = function (e, t) {
              (this[e] = t), this.raws && delete this.raws[e];
            }),
            (t.isAtPosition = function (e, t) {
              if (this.source && this.source.start && this.source.end)
                return !(
                  this.source.start.line > e ||
                  this.source.end.line < e ||
                  (this.source.start.line === e &&
                    this.source.start.column > t) ||
                  (this.source.end.line === e && this.source.end.column < t)
                );
            }),
            (t.stringifyProperty = function (e) {
              return (this.raws && this.raws[e]) || this[e];
            }),
            (t.valueToString = function () {
              return String(this.stringifyProperty("value"));
            }),
            (t.toString = function () {
              return [
                this.rawSpaceBefore,
                this.valueToString(),
                this.rawSpaceAfter,
              ].join("");
            }),
            (function (e, t, r) {
              t && i(e.prototype, t), r && i(e, r);
            })(e, [
              {
                key: "rawSpaceBefore",
                get: function () {
                  var e =
                    this.raws && this.raws.spaces && this.raws.spaces.before;
                  return (
                    void 0 === e && (e = this.spaces && this.spaces.before),
                    e || ""
                  );
                },
                set: function (e) {
                  (0, r.ensureObject)(this, "raws", "spaces"),
                    (this.raws.spaces.before = e);
                },
              },
              {
                key: "rawSpaceAfter",
                get: function () {
                  var e =
                    this.raws && this.raws.spaces && this.raws.spaces.after;
                  return void 0 === e && (e = this.spaces.after), e || "";
                },
                set: function (e) {
                  (0, r.ensureObject)(this, "raws", "spaces"),
                    (this.raws.spaces.after = e);
                },
              },
            ]),
            e
          );
        })();
      (e.default = o), (t.exports = e.default);
    }),
    pe = p((e) => {
      m(),
        (e.__esModule = !0),
        (e.UNIVERSAL =
          e.ATTRIBUTE =
          e.CLASS =
          e.COMBINATOR =
          e.COMMENT =
          e.ID =
          e.NESTING =
          e.PSEUDO =
          e.ROOT =
          e.SELECTOR =
          e.STRING =
          e.TAG =
            void 0);
      e.TAG = "tag";
      e.STRING = "string";
      e.SELECTOR = "selector";
      e.ROOT = "root";
      e.PSEUDO = "pseudo";
      e.NESTING = "nesting";
      e.ID = "id";
      e.COMMENT = "comment";
      e.COMBINATOR = "combinator";
      e.CLASS = "class";
      e.ATTRIBUTE = "attribute";
      e.UNIVERSAL = "universal";
    }),
    fe = p((e, t) => {
      m(), (e.__esModule = !0), (e.default = void 0);
      var r,
        i = (r = de()) && r.__esModule ? r : { default: r },
        n = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var t = o();
          if (t && t.has(e)) return t.get(e);
          var r = {},
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var n in e)
            if (Object.prototype.hasOwnProperty.call(e, n)) {
              var s = i ? Object.getOwnPropertyDescriptor(e, n) : null;
              s && (s.get || s.set)
                ? Object.defineProperty(r, n, s)
                : (r[n] = e[n]);
            }
          return (r.default = e), t && t.set(e, r), r;
        })(pe());
      function o() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (o = function () {
            return e;
          }),
          e
        );
      }
      function s(e, t) {
        var r;
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
          if (
            Array.isArray(e) ||
            (r = (function (e, t) {
              if (e) {
                if ("string" == typeof e) return a(e, t);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                if (
                  ("Object" === r && e.constructor && (r = e.constructor.name),
                  "Map" === r || "Set" === r)
                )
                  return Array.from(e);
                if (
                  "Arguments" === r ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                )
                  return a(e, t);
              }
            })(e)) ||
            (t && e && "number" == typeof e.length)
          ) {
            r && (e = r);
            var i = 0;
            return function () {
              return i >= e.length ? { done: !0 } : { done: !1, value: e[i++] };
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
          );
        }
        return (r = e[Symbol.iterator]()).next.bind(r);
      }
      function a(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, i = new Array(t); r < t; r++) i[r] = e[r];
        return i;
      }
      function l(e, t) {
        for (var r = 0; r < t.length; r++) {
          var i = t[r];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function c(e, t) {
        return (c =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var u = (function (e) {
        function t(t) {
          var r;
          return (r = e.call(this, t) || this).nodes || (r.nodes = []), r;
        }
        !(function (e, t) {
          (e.prototype = Object.create(t.prototype)),
            (e.prototype.constructor = e),
            c(e, t);
        })(t, e);
        var r = t.prototype;
        return (
          (r.append = function (e) {
            return (e.parent = this), this.nodes.push(e), this;
          }),
          (r.prepend = function (e) {
            return (e.parent = this), this.nodes.unshift(e), this;
          }),
          (r.at = function (e) {
            return this.nodes[e];
          }),
          (r.index = function (e) {
            return "number" == typeof e ? e : this.nodes.indexOf(e);
          }),
          (r.removeChild = function (e) {
            var t;
            for (var r in ((e = this.index(e)),
            (this.at(e).parent = void 0),
            this.nodes.splice(e, 1),
            this.indexes))
              (t = this.indexes[r]) >= e && (this.indexes[r] = t - 1);
            return this;
          }),
          (r.removeAll = function () {
            for (var e, t = s(this.nodes); !(e = t()).done; ) {
              e.value.parent = void 0;
            }
            return (this.nodes = []), this;
          }),
          (r.empty = function () {
            return this.removeAll();
          }),
          (r.insertAfter = function (e, t) {
            t.parent = this;
            var r,
              i = this.index(e);
            for (var n in (this.nodes.splice(i + 1, 0, t),
            (t.parent = this),
            this.indexes))
              i <= (r = this.indexes[n]) && (this.indexes[n] = r + 1);
            return this;
          }),
          (r.insertBefore = function (e, t) {
            t.parent = this;
            var r,
              i = this.index(e);
            for (var n in (this.nodes.splice(i, 0, t),
            (t.parent = this),
            this.indexes))
              (r = this.indexes[n]) <= i && (this.indexes[n] = r + 1);
            return this;
          }),
          (r._findChildAtPosition = function (e, t) {
            var r = void 0;
            return (
              this.each(function (i) {
                if (i.atPosition) {
                  var n = i.atPosition(e, t);
                  if (n) return (r = n), !1;
                } else if (i.isAtPosition(e, t)) return (r = i), !1;
              }),
              r
            );
          }),
          (r.atPosition = function (e, t) {
            if (this.isAtPosition(e, t))
              return this._findChildAtPosition(e, t) || this;
          }),
          (r._inferEndPosition = function () {
            this.last &&
              this.last.source &&
              this.last.source.end &&
              ((this.source = this.source || {}),
              (this.source.end = this.source.end || {}),
              Object.assign(this.source.end, this.last.source.end));
          }),
          (r.each = function (e) {
            this.lastEach || (this.lastEach = 0),
              this.indexes || (this.indexes = {}),
              this.lastEach++;
            var t = this.lastEach;
            if (((this.indexes[t] = 0), this.length)) {
              for (
                var r, i;
                this.indexes[t] < this.length &&
                ((r = this.indexes[t]), !1 !== (i = e(this.at(r), r)));

              )
                this.indexes[t] += 1;
              if ((delete this.indexes[t], !1 === i)) return !1;
            }
          }),
          (r.walk = function (e) {
            return this.each(function (t, r) {
              var i = e(t, r);
              if ((!1 !== i && t.length && (i = t.walk(e)), !1 === i))
                return !1;
            });
          }),
          (r.walkAttributes = function (e) {
            var t = this;
            return this.walk(function (r) {
              if (r.type === n.ATTRIBUTE) return e.call(t, r);
            });
          }),
          (r.walkClasses = function (e) {
            var t = this;
            return this.walk(function (r) {
              if (r.type === n.CLASS) return e.call(t, r);
            });
          }),
          (r.walkCombinators = function (e) {
            var t = this;
            return this.walk(function (r) {
              if (r.type === n.COMBINATOR) return e.call(t, r);
            });
          }),
          (r.walkComments = function (e) {
            var t = this;
            return this.walk(function (r) {
              if (r.type === n.COMMENT) return e.call(t, r);
            });
          }),
          (r.walkIds = function (e) {
            var t = this;
            return this.walk(function (r) {
              if (r.type === n.ID) return e.call(t, r);
            });
          }),
          (r.walkNesting = function (e) {
            var t = this;
            return this.walk(function (r) {
              if (r.type === n.NESTING) return e.call(t, r);
            });
          }),
          (r.walkPseudos = function (e) {
            var t = this;
            return this.walk(function (r) {
              if (r.type === n.PSEUDO) return e.call(t, r);
            });
          }),
          (r.walkTags = function (e) {
            var t = this;
            return this.walk(function (r) {
              if (r.type === n.TAG) return e.call(t, r);
            });
          }),
          (r.walkUniversals = function (e) {
            var t = this;
            return this.walk(function (r) {
              if (r.type === n.UNIVERSAL) return e.call(t, r);
            });
          }),
          (r.split = function (e) {
            var t = this,
              r = [];
            return this.reduce(function (i, n, o) {
              var s = e.call(t, n);
              return (
                r.push(n),
                s ? (i.push(r), (r = [])) : o === t.length - 1 && i.push(r),
                i
              );
            }, []);
          }),
          (r.map = function (e) {
            return this.nodes.map(e);
          }),
          (r.reduce = function (e, t) {
            return this.nodes.reduce(e, t);
          }),
          (r.every = function (e) {
            return this.nodes.every(e);
          }),
          (r.some = function (e) {
            return this.nodes.some(e);
          }),
          (r.filter = function (e) {
            return this.nodes.filter(e);
          }),
          (r.sort = function (e) {
            return this.nodes.sort(e);
          }),
          (r.toString = function () {
            return this.map(String).join("");
          }),
          (function (e, t, r) {
            t && l(e.prototype, t), r && l(e, r);
          })(t, [
            {
              key: "first",
              get: function () {
                return this.at(0);
              },
            },
            {
              key: "last",
              get: function () {
                return this.at(this.length - 1);
              },
            },
            {
              key: "length",
              get: function () {
                return this.nodes.length;
              },
            },
          ]),
          t
        );
      })(i.default);
      (e.default = u), (t.exports = e.default);
    }),
    he = p((e, t) => {
      m(), (e.__esModule = !0), (e.default = void 0);
      var r,
        i = (r = fe()) && r.__esModule ? r : { default: r },
        n = pe();
      function o(e, t) {
        for (var r = 0; r < t.length; r++) {
          var i = t[r];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function s(e, t) {
        return (s =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var a = (function (e) {
        function t(t) {
          var r;
          return ((r = e.call(this, t) || this).type = n.ROOT), r;
        }
        !(function (e, t) {
          (e.prototype = Object.create(t.prototype)),
            (e.prototype.constructor = e),
            s(e, t);
        })(t, e);
        var r = t.prototype;
        return (
          (r.toString = function () {
            var e = this.reduce(function (e, t) {
              return e.push(String(t)), e;
            }, []).join(",");
            return this.trailingComma ? e + "," : e;
          }),
          (r.error = function (e, t) {
            return this._error ? this._error(e, t) : new Error(e);
          }),
          (function (e, t, r) {
            t && o(e.prototype, t), r && o(e, r);
          })(t, [
            {
              key: "errorGenerator",
              set: function (e) {
                this._error = e;
              },
            },
          ]),
          t
        );
      })(i.default);
      (e.default = a), (t.exports = e.default);
    }),
    me = p((e, t) => {
      m(), (e.__esModule = !0), (e.default = void 0);
      var r,
        i = (r = fe()) && r.__esModule ? r : { default: r },
        n = pe();
      function o(e, t) {
        return (o =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var s = (function (e) {
        function t(t) {
          var r;
          return ((r = e.call(this, t) || this).type = n.SELECTOR), r;
        }
        return (
          (function (e, t) {
            (e.prototype = Object.create(t.prototype)),
              (e.prototype.constructor = e),
              o(e, t);
          })(t, e),
          t
        );
      })(i.default);
      (e.default = s), (t.exports = e.default);
    }),
    ge = p((e, t) => {
      m();
      var r = {}.hasOwnProperty,
        i = /[ -,\.\/:-@\[-\^`\{-~]/,
        n = /[ -,\.\/:-@\[\]\^`\{-~]/,
        o = /(^|\\+)?(\\[A-F0-9]{1,6})\x20(?![a-fA-F0-9\x20])/g,
        s = function e(t, s) {
          (s = (function (e, t) {
            if (!e) return t;
            var i = {};
            for (var n in t) i[n] = r.call(e, n) ? e[n] : t[n];
            return i;
          })(s, e.options)),
            "single" != s.quotes &&
              "double" != s.quotes &&
              (s.quotes = "single");
          for (
            var a = "double" == s.quotes ? '"' : "'",
              l = s.isIdentifier,
              c = t.charAt(0),
              u = "",
              d = 0,
              p = t.length;
            d < p;

          ) {
            var f = t.charAt(d++),
              h = f.charCodeAt(),
              m = void 0;
            if (h < 32 || h > 126) {
              if (h >= 55296 && h <= 56319 && d < p) {
                var g = t.charCodeAt(d++);
                56320 == (64512 & g)
                  ? (h = ((1023 & h) << 10) + (1023 & g) + 65536)
                  : d--;
              }
              m = "\\" + h.toString(16).toUpperCase() + " ";
            } else
              m = s.escapeEverything
                ? i.test(f)
                  ? "\\" + f
                  : "\\" + h.toString(16).toUpperCase() + " "
                : /[\t\n\f\r\x0B]/.test(f)
                  ? "\\" + h.toString(16).toUpperCase() + " "
                  : "\\" == f ||
                      (!l && (('"' == f && a == f) || ("'" == f && a == f))) ||
                      (l && n.test(f))
                    ? "\\" + f
                    : f;
            u += m;
          }
          return (
            l &&
              (/^-[-\d]/.test(u)
                ? (u = "\\-" + u.slice(1))
                : /\d/.test(c) && (u = "\\3" + c + " " + u.slice(1))),
            (u = u.replace(o, function (e, t, r) {
              return t && t.length % 2 ? e : (t || "") + r;
            })),
            !l && s.wrap ? a + u + a : u
          );
        };
      (s.options = {
        escapeEverything: !1,
        isIdentifier: !1,
        quotes: "single",
        wrap: !1,
      }),
        (s.version = "3.0.0"),
        (t.exports = s);
    }),
    be = p((e, t) => {
      m(), (e.__esModule = !0), (e.default = void 0);
      var r = s(ge()),
        i = ue(),
        n = s(de()),
        o = pe();
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function a(e, t) {
        for (var r = 0; r < t.length; r++) {
          var i = t[r];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function l(e, t) {
        return (l =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var c = (function (e) {
        function t(t) {
          var r;
          return (
            ((r = e.call(this, t) || this).type = o.CLASS),
            (r._constructed = !0),
            r
          );
        }
        return (
          (function (e, t) {
            (e.prototype = Object.create(t.prototype)),
              (e.prototype.constructor = e),
              l(e, t);
          })(t, e),
          (t.prototype.valueToString = function () {
            return "." + e.prototype.valueToString.call(this);
          }),
          (function (e, t, r) {
            t && a(e.prototype, t), r && a(e, r);
          })(t, [
            {
              key: "value",
              get: function () {
                return this._value;
              },
              set: function (e) {
                if (this._constructed) {
                  var t = (0, r.default)(e, { isIdentifier: !0 });
                  t !== e
                    ? ((0, i.ensureObject)(this, "raws"), (this.raws.value = t))
                    : this.raws && delete this.raws.value;
                }
                this._value = e;
              },
            },
          ]),
          t
        );
      })(n.default);
      (e.default = c), (t.exports = e.default);
    }),
    ye = p((e, t) => {
      m(), (e.__esModule = !0), (e.default = void 0);
      var r,
        i = (r = de()) && r.__esModule ? r : { default: r },
        n = pe();
      function o(e, t) {
        return (o =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var s = (function (e) {
        function t(t) {
          var r;
          return ((r = e.call(this, t) || this).type = n.COMMENT), r;
        }
        return (
          (function (e, t) {
            (e.prototype = Object.create(t.prototype)),
              (e.prototype.constructor = e),
              o(e, t);
          })(t, e),
          t
        );
      })(i.default);
      (e.default = s), (t.exports = e.default);
    }),
    we = p((e, t) => {
      m(), (e.__esModule = !0), (e.default = void 0);
      var r,
        i = (r = de()) && r.__esModule ? r : { default: r },
        n = pe();
      function o(e, t) {
        return (o =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var s = (function (e) {
        function t(t) {
          var r;
          return ((r = e.call(this, t) || this).type = n.ID), r;
        }
        return (
          (function (e, t) {
            (e.prototype = Object.create(t.prototype)),
              (e.prototype.constructor = e),
              o(e, t);
          })(t, e),
          (t.prototype.valueToString = function () {
            return "#" + e.prototype.valueToString.call(this);
          }),
          t
        );
      })(i.default);
      (e.default = s), (t.exports = e.default);
    }),
    ve = p((e, t) => {
      m(), (e.__esModule = !0), (e.default = void 0);
      var r = n(ge()),
        i = ue();
      function n(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function o(e, t) {
        for (var r = 0; r < t.length; r++) {
          var i = t[r];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function s(e, t) {
        return (s =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var a = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        !(function (e, t) {
          (e.prototype = Object.create(t.prototype)),
            (e.prototype.constructor = e),
            s(e, t);
        })(t, e);
        var n = t.prototype;
        return (
          (n.qualifiedName = function (e) {
            return this.namespace ? this.namespaceString + "|" + e : e;
          }),
          (n.valueToString = function () {
            return this.qualifiedName(e.prototype.valueToString.call(this));
          }),
          (function (e, t, r) {
            t && o(e.prototype, t), r && o(e, r);
          })(t, [
            {
              key: "namespace",
              get: function () {
                return this._namespace;
              },
              set: function (e) {
                if (!0 === e || "*" === e || "&" === e)
                  return (
                    (this._namespace = e),
                    void (this.raws && delete this.raws.namespace)
                  );
                var t = (0, r.default)(e, { isIdentifier: !0 });
                (this._namespace = e),
                  t !== e
                    ? ((0, i.ensureObject)(this, "raws"),
                      (this.raws.namespace = t))
                    : this.raws && delete this.raws.namespace;
              },
            },
            {
              key: "ns",
              get: function () {
                return this._namespace;
              },
              set: function (e) {
                this.namespace = e;
              },
            },
            {
              key: "namespaceString",
              get: function () {
                if (this.namespace) {
                  var e = this.stringifyProperty("namespace");
                  return !0 === e ? "" : e;
                }
                return "";
              },
            },
          ]),
          t
        );
      })(n(de()).default);
      (e.default = a), (t.exports = e.default);
    }),
    xe = p((e, t) => {
      m(), (e.__esModule = !0), (e.default = void 0);
      var r,
        i = (r = ve()) && r.__esModule ? r : { default: r },
        n = pe();
      function o(e, t) {
        return (o =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var s = (function (e) {
        function t(t) {
          var r;
          return ((r = e.call(this, t) || this).type = n.TAG), r;
        }
        return (
          (function (e, t) {
            (e.prototype = Object.create(t.prototype)),
              (e.prototype.constructor = e),
              o(e, t);
          })(t, e),
          t
        );
      })(i.default);
      (e.default = s), (t.exports = e.default);
    }),
    ke = p((e, t) => {
      m(), (e.__esModule = !0), (e.default = void 0);
      var r,
        i = (r = de()) && r.__esModule ? r : { default: r },
        n = pe();
      function o(e, t) {
        return (o =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var s = (function (e) {
        function t(t) {
          var r;
          return ((r = e.call(this, t) || this).type = n.STRING), r;
        }
        return (
          (function (e, t) {
            (e.prototype = Object.create(t.prototype)),
              (e.prototype.constructor = e),
              o(e, t);
          })(t, e),
          t
        );
      })(i.default);
      (e.default = s), (t.exports = e.default);
    }),
    Se = p((e, t) => {
      m(), (e.__esModule = !0), (e.default = void 0);
      var r,
        i = (r = fe()) && r.__esModule ? r : { default: r },
        n = pe();
      function o(e, t) {
        return (o =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var s = (function (e) {
        function t(t) {
          var r;
          return ((r = e.call(this, t) || this).type = n.PSEUDO), r;
        }
        return (
          (function (e, t) {
            (e.prototype = Object.create(t.prototype)),
              (e.prototype.constructor = e),
              o(e, t);
          })(t, e),
          (t.prototype.toString = function () {
            var e = this.length ? "(" + this.map(String).join(",") + ")" : "";
            return [
              this.rawSpaceBefore,
              this.stringifyProperty("value"),
              e,
              this.rawSpaceAfter,
            ].join("");
          }),
          t
        );
      })(i.default);
      (e.default = s), (t.exports = e.default);
    }),
    Ce = {};
  function Ae(e) {
    return e;
  }
  f(Ce, { deprecate: () => Ae });
  var _e = d(() => {
      m();
    }),
    Oe = p((e, t) => {
      m(), (t.exports = (_e(), Ce).deprecate);
    }),
    Ee = p((e) => {
      m(), (e.__esModule = !0), (e.unescapeValue = h), (e.default = void 0);
      var t,
        r = s(ge()),
        i = s(se()),
        n = s(ve()),
        o = pe();
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function a(e, t) {
        for (var r = 0; r < t.length; r++) {
          var i = t[r];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function l(e, t) {
        return (l =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var c = Oe(),
        u = /^('|")([^]*)\1$/,
        d = c(
          function () {},
          "Assigning an attribute a value containing characters that might need to be escaped is deprecated. Call attribute.setValue() instead.",
        ),
        p = c(
          function () {},
          "Assigning attr.quoted is deprecated and has no effect. Assign to attr.quoteMark instead.",
        ),
        f = c(
          function () {},
          "Constructing an Attribute selector with a value without specifying quoteMark is deprecated. Note: The value should be unescaped now.",
        );
      function h(e) {
        var t = !1,
          r = null,
          n = e,
          o = n.match(u);
        return (
          o && ((r = o[1]), (n = o[2])),
          (n = (0, i.default)(n)) !== e && (t = !0),
          { deprecatedUsage: t, unescaped: n, quoteMark: r }
        );
      }
      var g = (function (e) {
        function t(t) {
          var r;
          return (
            void 0 === t && (t = {}),
            (r =
              e.call(
                this,
                (function (e) {
                  if (void 0 !== e.quoteMark || void 0 === e.value) return e;
                  f();
                  var t = h(e.value),
                    r = t.quoteMark,
                    i = t.unescaped;
                  return (
                    e.raws || (e.raws = {}),
                    void 0 === e.raws.value && (e.raws.value = e.value),
                    (e.value = i),
                    (e.quoteMark = r),
                    e
                  );
                })(t),
              ) || this),
            (r.type = o.ATTRIBUTE),
            (r.raws = r.raws || {}),
            Object.defineProperty(r.raws, "unquoted", {
              get: c(function () {
                return r.value;
              }, "attr.raws.unquoted is deprecated. Call attr.value instead."),
              set: c(function () {
                return r.value;
              }, "Setting attr.raws.unquoted is deprecated and has no effect. attr.value is unescaped by default now."),
            }),
            (r._constructed = !0),
            r
          );
        }
        !(function (e, t) {
          (e.prototype = Object.create(t.prototype)),
            (e.prototype.constructor = e),
            l(e, t);
        })(t, e);
        var i = t.prototype;
        return (
          (i.getQuotedValue = function (e) {
            void 0 === e && (e = {});
            var t = this._determineQuoteMark(e),
              i = b[t];
            return (0, r.default)(this._value, i);
          }),
          (i._determineQuoteMark = function (e) {
            return e.smart
              ? this.smartQuoteMark(e)
              : this.preferredQuoteMark(e);
          }),
          (i.setValue = function (e, t) {
            void 0 === t && (t = {}),
              (this._value = e),
              (this._quoteMark = this._determineQuoteMark(t)),
              this._syncRawValue();
          }),
          (i.smartQuoteMark = function (e) {
            var i = this.value,
              n = i.replace(/[^']/g, "").length,
              o = i.replace(/[^"]/g, "").length;
            if (n + o === 0) {
              var s = (0, r.default)(i, { isIdentifier: !0 });
              if (s === i) return t.NO_QUOTE;
              var a = this.preferredQuoteMark(e);
              if (a === t.NO_QUOTE) {
                var l = this.quoteMark || e.quoteMark || t.DOUBLE_QUOTE,
                  c = b[l];
                if ((0, r.default)(i, c).length < s.length) return l;
              }
              return a;
            }
            return o === n
              ? this.preferredQuoteMark(e)
              : o < n
                ? t.DOUBLE_QUOTE
                : t.SINGLE_QUOTE;
          }),
          (i.preferredQuoteMark = function (e) {
            var r = e.preferCurrentQuoteMark ? this.quoteMark : e.quoteMark;
            return (
              void 0 === r &&
                (r = e.preferCurrentQuoteMark ? e.quoteMark : this.quoteMark),
              void 0 === r && (r = t.DOUBLE_QUOTE),
              r
            );
          }),
          (i._syncRawValue = function () {
            var e = (0, r.default)(this._value, b[this.quoteMark]);
            e === this._value
              ? this.raws && delete this.raws.value
              : (this.raws.value = e);
          }),
          (i._handleEscapes = function (e, t) {
            if (this._constructed) {
              var i = (0, r.default)(t, { isIdentifier: !0 });
              i !== t ? (this.raws[e] = i) : delete this.raws[e];
            }
          }),
          (i._spacesFor = function (e) {
            var t = this.spaces[e] || {},
              r = (this.raws.spaces && this.raws.spaces[e]) || {};
            return Object.assign({ before: "", after: "" }, t, r);
          }),
          (i._stringFor = function (e, t, r) {
            void 0 === t && (t = e), void 0 === r && (r = y);
            var i = this._spacesFor(t);
            return r(this.stringifyProperty(e), i);
          }),
          (i.offsetOf = function (e) {
            var t = 1,
              r = this._spacesFor("attribute");
            if (((t += r.before.length), "namespace" === e || "ns" === e))
              return this.namespace ? t : -1;
            if (
              "attributeNS" === e ||
              ((t += this.namespaceString.length),
              this.namespace && (t += 1),
              "attribute" === e)
            )
              return t;
            (t += this.stringifyProperty("attribute").length),
              (t += r.after.length);
            var i = this._spacesFor("operator");
            t += i.before.length;
            var n = this.stringifyProperty("operator");
            if ("operator" === e) return n ? t : -1;
            (t += n.length), (t += i.after.length);
            var o = this._spacesFor("value");
            t += o.before.length;
            var s = this.stringifyProperty("value");
            return "value" === e
              ? s
                ? t
                : -1
              : ((t += s.length),
                (t += o.after.length),
                (t += this._spacesFor("insensitive").before.length),
                "insensitive" === e && this.insensitive ? t : -1);
          }),
          (i.toString = function () {
            var e = this,
              t = [this.rawSpaceBefore, "["];
            return (
              t.push(this._stringFor("qualifiedAttribute", "attribute")),
              this.operator &&
                (this.value || "" === this.value) &&
                (t.push(this._stringFor("operator")),
                t.push(this._stringFor("value")),
                t.push(
                  this._stringFor(
                    "insensitiveFlag",
                    "insensitive",
                    function (t, r) {
                      return (
                        t.length > 0 &&
                          !e.quoted &&
                          0 === r.before.length &&
                          !(e.spaces.value && e.spaces.value.after) &&
                          (r.before = " "),
                        y(t, r)
                      );
                    },
                  ),
                )),
              t.push("]"),
              t.push(this.rawSpaceAfter),
              t.join("")
            );
          }),
          (function (e, t, r) {
            t && a(e.prototype, t), r && a(e, r);
          })(t, [
            {
              key: "quoted",
              get: function () {
                var e = this.quoteMark;
                return "'" === e || '"' === e;
              },
              set: function (e) {
                p();
              },
            },
            {
              key: "quoteMark",
              get: function () {
                return this._quoteMark;
              },
              set: function (e) {
                this._constructed
                  ? this._quoteMark !== e &&
                    ((this._quoteMark = e), this._syncRawValue())
                  : (this._quoteMark = e);
              },
            },
            {
              key: "qualifiedAttribute",
              get: function () {
                return this.qualifiedName(
                  this.raws.attribute || this.attribute,
                );
              },
            },
            {
              key: "insensitiveFlag",
              get: function () {
                return this.insensitive ? "i" : "";
              },
            },
            {
              key: "value",
              get: function () {
                return this._value;
              },
              set: function (e) {
                if (this._constructed) {
                  var t = h(e),
                    r = t.deprecatedUsage,
                    i = t.unescaped,
                    n = t.quoteMark;
                  if ((r && d(), i === this._value && n === this._quoteMark))
                    return;
                  (this._value = i),
                    (this._quoteMark = n),
                    this._syncRawValue();
                } else this._value = e;
              },
            },
            {
              key: "attribute",
              get: function () {
                return this._attribute;
              },
              set: function (e) {
                this._handleEscapes("attribute", e), (this._attribute = e);
              },
            },
          ]),
          t
        );
      })(n.default);
      (e.default = g),
        (g.NO_QUOTE = null),
        (g.SINGLE_QUOTE = "'"),
        (g.DOUBLE_QUOTE = '"');
      var b =
        (((t = {
          "'": { quotes: "single", wrap: !0 },
          '"': { quotes: "double", wrap: !0 },
        }).null = { isIdentifier: !0 }),
        t);
      function y(e, t) {
        return "" + t.before + e + t.after;
      }
    }),
    Te = p((e, t) => {
      m(), (e.__esModule = !0), (e.default = void 0);
      var r,
        i = (r = ve()) && r.__esModule ? r : { default: r },
        n = pe();
      function o(e, t) {
        return (o =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var s = (function (e) {
        function t(t) {
          var r;
          return (
            ((r = e.call(this, t) || this).type = n.UNIVERSAL),
            (r.value = "*"),
            r
          );
        }
        return (
          (function (e, t) {
            (e.prototype = Object.create(t.prototype)),
              (e.prototype.constructor = e),
              o(e, t);
          })(t, e),
          t
        );
      })(i.default);
      (e.default = s), (t.exports = e.default);
    }),
    Pe = p((e, t) => {
      m(), (e.__esModule = !0), (e.default = void 0);
      var r,
        i = (r = de()) && r.__esModule ? r : { default: r },
        n = pe();
      function o(e, t) {
        return (o =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var s = (function (e) {
        function t(t) {
          var r;
          return ((r = e.call(this, t) || this).type = n.COMBINATOR), r;
        }
        return (
          (function (e, t) {
            (e.prototype = Object.create(t.prototype)),
              (e.prototype.constructor = e),
              o(e, t);
          })(t, e),
          t
        );
      })(i.default);
      (e.default = s), (t.exports = e.default);
    }),
    De = p((e, t) => {
      m(), (e.__esModule = !0), (e.default = void 0);
      var r,
        i = (r = de()) && r.__esModule ? r : { default: r },
        n = pe();
      function o(e, t) {
        return (o =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var s = (function (e) {
        function t(t) {
          var r;
          return (
            ((r = e.call(this, t) || this).type = n.NESTING), (r.value = "&"), r
          );
        }
        return (
          (function (e, t) {
            (e.prototype = Object.create(t.prototype)),
              (e.prototype.constructor = e),
              o(e, t);
          })(t, e),
          t
        );
      })(i.default);
      (e.default = s), (t.exports = e.default);
    }),
    je = p((e, t) => {
      m(),
        (e.__esModule = !0),
        (e.default = function (e) {
          return e.sort(function (e, t) {
            return e - t;
          });
        }),
        (t.exports = e.default);
    }),
    Ie = p((e) => {
      m(),
        (e.__esModule = !0),
        (e.combinator =
          e.word =
          e.comment =
          e.str =
          e.tab =
          e.newline =
          e.feed =
          e.cr =
          e.backslash =
          e.bang =
          e.slash =
          e.doubleQuote =
          e.singleQuote =
          e.space =
          e.greaterThan =
          e.pipe =
          e.equals =
          e.plus =
          e.caret =
          e.tilde =
          e.dollar =
          e.closeSquare =
          e.openSquare =
          e.closeParenthesis =
          e.openParenthesis =
          e.semicolon =
          e.colon =
          e.comma =
          e.at =
          e.asterisk =
          e.ampersand =
            void 0);
      e.ampersand = 38;
      e.asterisk = 42;
      e.at = 64;
      e.comma = 44;
      e.colon = 58;
      e.semicolon = 59;
      e.openParenthesis = 40;
      e.closeParenthesis = 41;
      e.openSquare = 91;
      e.closeSquare = 93;
      e.dollar = 36;
      e.tilde = 126;
      e.caret = 94;
      e.plus = 43;
      e.equals = 61;
      e.pipe = 124;
      e.greaterThan = 62;
      e.space = 32;
      e.singleQuote = 39;
      e.doubleQuote = 34;
      e.slash = 47;
      e.bang = 33;
      e.backslash = 92;
      e.cr = 13;
      e.feed = 12;
      e.newline = 10;
      e.tab = 9;
      e.str = 39;
      e.comment = -1;
      e.word = -2;
      e.combinator = -3;
    }),
    Re = p((e) => {
      m(),
        (e.__esModule = !0),
        (e.default = function (e) {
          var t,
            r,
            n,
            o,
            s,
            a,
            l,
            c,
            d,
            p,
            f,
            h,
            m,
            g = [],
            b = e.css.valueOf(),
            y = b.length,
            w = -1,
            v = 1,
            x = 0,
            k = 0;
          function S(t, r) {
            if (!e.safe) throw e.error("Unclosed " + t, v, x - w, x);
            d = (b += r).length - 1;
          }
          for (; x < y; ) {
            switch (
              ((t = b.charCodeAt(x)) === i.newline && ((w = x), (v += 1)), t)
            ) {
              case i.space:
              case i.tab:
              case i.newline:
              case i.cr:
              case i.feed:
                d = x;
                do {
                  (d += 1),
                    (t = b.charCodeAt(d)) === i.newline && ((w = d), (v += 1));
                } while (
                  t === i.space ||
                  t === i.newline ||
                  t === i.tab ||
                  t === i.cr ||
                  t === i.feed
                );
                (m = i.space), (o = v), (n = d - w - 1), (k = d);
                break;
              case i.plus:
              case i.greaterThan:
              case i.tilde:
              case i.pipe:
                d = x;
                do {
                  (d += 1), (t = b.charCodeAt(d));
                } while (
                  t === i.plus ||
                  t === i.greaterThan ||
                  t === i.tilde ||
                  t === i.pipe
                );
                (m = i.combinator), (o = v), (n = x - w), (k = d);
                break;
              case i.asterisk:
              case i.ampersand:
              case i.bang:
              case i.comma:
              case i.equals:
              case i.dollar:
              case i.caret:
              case i.openSquare:
              case i.closeSquare:
              case i.colon:
              case i.semicolon:
              case i.openParenthesis:
              case i.closeParenthesis:
                (m = t), (o = v), (n = x - w), (k = (d = x) + 1);
                break;
              case i.singleQuote:
              case i.doubleQuote:
                (h = t === i.singleQuote ? "'" : '"'), (d = x);
                do {
                  for (
                    s = !1,
                      -1 === (d = b.indexOf(h, d + 1)) && S("quote", h),
                      a = d;
                    b.charCodeAt(a - 1) === i.backslash;

                  )
                    (a -= 1), (s = !s);
                } while (s);
                (m = i.str), (o = v), (n = x - w), (k = d + 1);
                break;
              default:
                t === i.slash && b.charCodeAt(x + 1) === i.asterisk
                  ? (0 === (d = b.indexOf("*/", x + 2) + 1) &&
                      S("comment", "*/"),
                    (r = b.slice(x, d + 1)),
                    (c = r.split("\n")),
                    (l = c.length - 1) > 0
                      ? ((p = v + l), (f = d - c[l].length))
                      : ((p = v), (f = w)),
                    (m = i.comment),
                    (v = p),
                    (o = p),
                    (n = d - f))
                  : t === i.slash
                    ? ((m = t), (o = v), (n = x - w), (k = (d = x) + 1))
                    : ((d = u(b, x)), (m = i.word), (o = v), (n = d - w)),
                  (k = d + 1);
            }
            g.push([m, v, x - w, o, n, x, k]),
              f && ((w = f), (f = null)),
              (x = k);
          }
          return g;
        }),
        (e.FIELDS = void 0);
      var t,
        r,
        i = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var t = n();
          if (t && t.has(e)) return t.get(e);
          var r = {},
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
              var s = i ? Object.getOwnPropertyDescriptor(e, o) : null;
              s && (s.get || s.set)
                ? Object.defineProperty(r, o, s)
                : (r[o] = e[o]);
            }
          return (r.default = e), t && t.set(e, r), r;
        })(Ie());
      function n() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (n = function () {
            return e;
          }),
          e
        );
      }
      var o,
        s =
          (((t = {})[i.tab] = !0),
          (t[i.newline] = !0),
          (t[i.cr] = !0),
          (t[i.feed] = !0),
          t),
        a =
          (((r = {})[i.space] = !0),
          (r[i.tab] = !0),
          (r[i.newline] = !0),
          (r[i.cr] = !0),
          (r[i.feed] = !0),
          (r[i.ampersand] = !0),
          (r[i.asterisk] = !0),
          (r[i.bang] = !0),
          (r[i.comma] = !0),
          (r[i.colon] = !0),
          (r[i.semicolon] = !0),
          (r[i.openParenthesis] = !0),
          (r[i.closeParenthesis] = !0),
          (r[i.openSquare] = !0),
          (r[i.closeSquare] = !0),
          (r[i.singleQuote] = !0),
          (r[i.doubleQuote] = !0),
          (r[i.plus] = !0),
          (r[i.pipe] = !0),
          (r[i.tilde] = !0),
          (r[i.greaterThan] = !0),
          (r[i.equals] = !0),
          (r[i.dollar] = !0),
          (r[i.caret] = !0),
          (r[i.slash] = !0),
          r),
        l = {},
        c = "0123456789abcdefABCDEF";
      for (o = 0; o < c.length; o++) l[c.charCodeAt(o)] = !0;
      function u(e, t) {
        var r,
          n = t;
        do {
          if (((r = e.charCodeAt(n)), a[r])) return n - 1;
          r === i.backslash ? (n = d(e, n) + 1) : n++;
        } while (n < e.length);
        return n - 1;
      }
      function d(e, t) {
        var r = t,
          n = e.charCodeAt(r + 1);
        if (!s[n])
          if (l[n]) {
            var o = 0;
            do {
              r++, o++, (n = e.charCodeAt(r + 1));
            } while (l[n] && o < 6);
            o < 6 && n === i.space && r++;
          } else r++;
        return r;
      }
      e.FIELDS = {
        TYPE: 0,
        START_LINE: 1,
        START_COL: 2,
        END_LINE: 3,
        END_COL: 4,
        START_POS: 5,
        END_POS: 6,
      };
    }),
    $e = p((e, t) => {
      m(), (e.__esModule = !0), (e.default = void 0);
      var r,
        i,
        n = C(he()),
        o = C(me()),
        s = C(be()),
        a = C(ye()),
        l = C(we()),
        c = C(xe()),
        u = C(ke()),
        d = C(Se()),
        p = S(Ee()),
        f = C(Te()),
        h = C(Pe()),
        g = C(De()),
        b = C(je()),
        y = S(Re()),
        w = S(Ie()),
        v = S(pe()),
        x = ue();
      function k() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (k = function () {
            return e;
          }),
          e
        );
      }
      function S(e) {
        if (e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var t = k();
        if (t && t.has(e)) return t.get(e);
        var r = {},
          i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var n in e)
          if (Object.prototype.hasOwnProperty.call(e, n)) {
            var o = i ? Object.getOwnPropertyDescriptor(e, n) : null;
            o && (o.get || o.set)
              ? Object.defineProperty(r, n, o)
              : (r[n] = e[n]);
          }
        return (r.default = e), t && t.set(e, r), r;
      }
      function C(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function A(e, t) {
        for (var r = 0; r < t.length; r++) {
          var i = t[r];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      var _ =
          (((r = {})[w.space] = !0),
          (r[w.cr] = !0),
          (r[w.feed] = !0),
          (r[w.newline] = !0),
          (r[w.tab] = !0),
          r),
        O = Object.assign({}, _, (((i = {})[w.comment] = !0), i));
      function E(e) {
        return { line: e[y.FIELDS.START_LINE], column: e[y.FIELDS.START_COL] };
      }
      function T(e) {
        return { line: e[y.FIELDS.END_LINE], column: e[y.FIELDS.END_COL] };
      }
      function P(e, t, r, i) {
        return { start: { line: e, column: t }, end: { line: r, column: i } };
      }
      function D(e) {
        return P(
          e[y.FIELDS.START_LINE],
          e[y.FIELDS.START_COL],
          e[y.FIELDS.END_LINE],
          e[y.FIELDS.END_COL],
        );
      }
      function j(e, t) {
        if (e)
          return P(
            e[y.FIELDS.START_LINE],
            e[y.FIELDS.START_COL],
            t[y.FIELDS.END_LINE],
            t[y.FIELDS.END_COL],
          );
      }
      function I(e, t) {
        var r = e[t];
        if ("string" == typeof r)
          return (
            -1 !== r.indexOf("\\") &&
              ((0, x.ensureObject)(e, "raws"),
              (e[t] = (0, x.unesc)(r)),
              void 0 === e.raws[t] && (e.raws[t] = r)),
            e
          );
      }
      function R(e, t) {
        for (var r = -1, i = []; -1 !== (r = e.indexOf(t, r + 1)); ) i.push(r);
        return i;
      }
      var $ = (function () {
        function e(e, t) {
          void 0 === t && (t = {}),
            (this.rule = e),
            (this.options = Object.assign({ lossy: !1, safe: !1 }, t)),
            (this.position = 0),
            (this.css =
              "string" == typeof this.rule ? this.rule : this.rule.selector),
            (this.tokens = (0, y.default)({
              css: this.css,
              error: this._errorGenerator(),
              safe: this.options.safe,
            }));
          var r = j(this.tokens[0], this.tokens[this.tokens.length - 1]);
          (this.root = new n.default({ source: r })),
            (this.root.errorGenerator = this._errorGenerator());
          var i = new o.default({ source: { start: { line: 1, column: 1 } } });
          this.root.append(i), (this.current = i), this.loop();
        }
        var t = e.prototype;
        return (
          (t._errorGenerator = function () {
            var e = this;
            return function (t, r) {
              return "string" == typeof e.rule
                ? new Error(t)
                : e.rule.error(t, r);
            };
          }),
          (t.attribute = function () {
            var e = [],
              t = this.currToken;
            for (
              this.position++;
              this.position < this.tokens.length &&
              this.currToken[y.FIELDS.TYPE] !== w.closeSquare;

            )
              e.push(this.currToken), this.position++;
            if (this.currToken[y.FIELDS.TYPE] !== w.closeSquare)
              return this.expected(
                "closing square bracket",
                this.currToken[y.FIELDS.START_POS],
              );
            var r = e.length,
              i = {
                source: P(t[1], t[2], this.currToken[3], this.currToken[4]),
                sourceIndex: t[y.FIELDS.START_POS],
              };
            if (1 === r && !~[w.word].indexOf(e[0][y.FIELDS.TYPE]))
              return this.expected("attribute", e[0][y.FIELDS.START_POS]);
            for (var n = 0, o = "", s = "", a = null, l = !1; n < r; ) {
              var c = e[n],
                u = this.content(c),
                d = e[n + 1];
              switch (c[y.FIELDS.TYPE]) {
                case w.space:
                  if (((l = !0), this.options.lossy)) break;
                  if (a) {
                    (0, x.ensureObject)(i, "spaces", a);
                    var f = i.spaces[a].after || "";
                    i.spaces[a].after = f + u;
                    var h =
                      (0, x.getProp)(i, "raws", "spaces", a, "after") || null;
                    h && (i.raws.spaces[a].after = h + u);
                  } else (o += u), (s += u);
                  break;
                case w.asterisk:
                  if (d[y.FIELDS.TYPE] === w.equals)
                    (i.operator = u), (a = "operator");
                  else if ((!i.namespace || ("namespace" === a && !l)) && d) {
                    o &&
                      ((0, x.ensureObject)(i, "spaces", "attribute"),
                      (i.spaces.attribute.before = o),
                      (o = "")),
                      s &&
                        ((0, x.ensureObject)(i, "raws", "spaces", "attribute"),
                        (i.raws.spaces.attribute.before = o),
                        (s = "")),
                      (i.namespace = (i.namespace || "") + u),
                      ((0, x.getProp)(i, "raws", "namespace") || null) &&
                        (i.raws.namespace += u),
                      (a = "namespace");
                  }
                  l = !1;
                  break;
                case w.dollar:
                  if ("value" === a) {
                    var m = (0, x.getProp)(i, "raws", "value");
                    (i.value += "$"), m && (i.raws.value = m + "$");
                    break;
                  }
                case w.caret:
                  d[y.FIELDS.TYPE] === w.equals &&
                    ((i.operator = u), (a = "operator")),
                    (l = !1);
                  break;
                case w.combinator:
                  if (
                    ("~" === u &&
                      d[y.FIELDS.TYPE] === w.equals &&
                      ((i.operator = u), (a = "operator")),
                    "|" !== u)
                  ) {
                    l = !1;
                    break;
                  }
                  d[y.FIELDS.TYPE] === w.equals
                    ? ((i.operator = u), (a = "operator"))
                    : !i.namespace && !i.attribute && (i.namespace = !0),
                    (l = !1);
                  break;
                case w.word:
                  if (
                    d &&
                    "|" === this.content(d) &&
                    e[n + 2] &&
                    e[n + 2][y.FIELDS.TYPE] !== w.equals &&
                    !i.operator &&
                    !i.namespace
                  )
                    (i.namespace = u), (a = "namespace");
                  else if (!i.attribute || ("attribute" === a && !l)) {
                    o &&
                      ((0, x.ensureObject)(i, "spaces", "attribute"),
                      (i.spaces.attribute.before = o),
                      (o = "")),
                      s &&
                        ((0, x.ensureObject)(i, "raws", "spaces", "attribute"),
                        (i.raws.spaces.attribute.before = s),
                        (s = "")),
                      (i.attribute = (i.attribute || "") + u),
                      ((0, x.getProp)(i, "raws", "attribute") || null) &&
                        (i.raws.attribute += u),
                      (a = "attribute");
                  } else if (
                    (!i.value && "" !== i.value) ||
                    ("value" === a && !l)
                  ) {
                    var g = (0, x.unesc)(u),
                      b = (0, x.getProp)(i, "raws", "value") || "",
                      v = i.value || "";
                    (i.value = v + g),
                      (i.quoteMark = null),
                      (g !== u || b) &&
                        ((0, x.ensureObject)(i, "raws"),
                        (i.raws.value = (b || v) + u)),
                      (a = "value");
                  } else {
                    var k = "i" === u || "I" === u;
                    (!i.value && "" !== i.value) || (!i.quoteMark && !l)
                      ? (i.value || "" === i.value) &&
                        ((a = "value"),
                        (i.value += u),
                        i.raws.value && (i.raws.value += u))
                      : ((i.insensitive = k),
                        (!k || "I" === u) &&
                          ((0, x.ensureObject)(i, "raws"),
                          (i.raws.insensitiveFlag = u)),
                        (a = "insensitive"),
                        o &&
                          ((0, x.ensureObject)(i, "spaces", "insensitive"),
                          (i.spaces.insensitive.before = o),
                          (o = "")),
                        s &&
                          ((0, x.ensureObject)(
                            i,
                            "raws",
                            "spaces",
                            "insensitive",
                          ),
                          (i.raws.spaces.insensitive.before = s),
                          (s = "")));
                  }
                  l = !1;
                  break;
                case w.str:
                  if (!i.attribute || !i.operator)
                    return this.error(
                      "Expected an attribute followed by an operator preceding the string.",
                      { index: c[y.FIELDS.START_POS] },
                    );
                  var S = (0, p.unescapeValue)(u),
                    C = S.unescaped,
                    A = S.quoteMark;
                  (i.value = C),
                    (i.quoteMark = A),
                    (a = "value"),
                    (0, x.ensureObject)(i, "raws"),
                    (i.raws.value = u),
                    (l = !1);
                  break;
                case w.equals:
                  if (!i.attribute)
                    return this.expected("attribute", c[y.FIELDS.START_POS], u);
                  if (i.value)
                    return this.error(
                      'Unexpected "=" found; an operator was already defined.',
                      { index: c[y.FIELDS.START_POS] },
                    );
                  (i.operator = i.operator ? i.operator + u : u),
                    (a = "operator"),
                    (l = !1);
                  break;
                case w.comment:
                  if (a)
                    if (
                      l ||
                      (d && d[y.FIELDS.TYPE] === w.space) ||
                      "insensitive" === a
                    ) {
                      var _ = (0, x.getProp)(i, "spaces", a, "after") || "",
                        O =
                          (0, x.getProp)(i, "raws", "spaces", a, "after") || _;
                      (0, x.ensureObject)(i, "raws", "spaces", a),
                        (i.raws.spaces[a].after = O + u);
                    } else {
                      var E = i[a] || "",
                        T = (0, x.getProp)(i, "raws", a) || E;
                      (0, x.ensureObject)(i, "raws"), (i.raws[a] = T + u);
                    }
                  else s += u;
                  break;
                default:
                  return this.error('Unexpected "' + u + '" found.', {
                    index: c[y.FIELDS.START_POS],
                  });
              }
              n++;
            }
            I(i, "attribute"),
              I(i, "namespace"),
              this.newNode(new p.default(i)),
              this.position++;
          }),
          (t.parseWhitespaceEquivalentTokens = function (e) {
            e < 0 && (e = this.tokens.length);
            var t = this.position,
              r = [],
              i = "",
              n = void 0;
            do {
              if (_[this.currToken[y.FIELDS.TYPE]])
                this.options.lossy || (i += this.content());
              else if (this.currToken[y.FIELDS.TYPE] === w.comment) {
                var o = {};
                i && ((o.before = i), (i = "")),
                  (n = new a.default({
                    value: this.content(),
                    source: D(this.currToken),
                    sourceIndex: this.currToken[y.FIELDS.START_POS],
                    spaces: o,
                  })),
                  r.push(n);
              }
            } while (++this.position < e);
            if (i)
              if (n) n.spaces.after = i;
              else if (!this.options.lossy) {
                var s = this.tokens[t],
                  l = this.tokens[this.position - 1];
                r.push(
                  new u.default({
                    value: "",
                    source: P(
                      s[y.FIELDS.START_LINE],
                      s[y.FIELDS.START_COL],
                      l[y.FIELDS.END_LINE],
                      l[y.FIELDS.END_COL],
                    ),
                    sourceIndex: s[y.FIELDS.START_POS],
                    spaces: { before: i, after: "" },
                  }),
                );
              }
            return r;
          }),
          (t.convertWhitespaceNodesToSpace = function (e, t) {
            var r = this;
            void 0 === t && (t = !1);
            var i = "",
              n = "";
            return (
              e.forEach(function (e) {
                var o = r.lossySpace(e.spaces.before, t),
                  s = r.lossySpace(e.rawSpaceBefore, t);
                (i += o + r.lossySpace(e.spaces.after, t && 0 === o.length)),
                  (n +=
                    o +
                    e.value +
                    r.lossySpace(e.rawSpaceAfter, t && 0 === s.length));
              }),
              n === i && (n = void 0),
              { space: i, rawSpace: n }
            );
          }),
          (t.isNamedCombinator = function (e) {
            return (
              void 0 === e && (e = this.position),
              this.tokens[e + 0] &&
                this.tokens[e + 0][y.FIELDS.TYPE] === w.slash &&
                this.tokens[e + 1] &&
                this.tokens[e + 1][y.FIELDS.TYPE] === w.word &&
                this.tokens[e + 2] &&
                this.tokens[e + 2][y.FIELDS.TYPE] === w.slash
            );
          }),
          (t.namedCombinator = function () {
            if (this.isNamedCombinator()) {
              var e = this.content(this.tokens[this.position + 1]),
                t = (0, x.unesc)(e).toLowerCase(),
                r = {};
              t !== e && (r.value = "/" + e + "/");
              var i = new h.default({
                value: "/" + t + "/",
                source: P(
                  this.currToken[y.FIELDS.START_LINE],
                  this.currToken[y.FIELDS.START_COL],
                  this.tokens[this.position + 2][y.FIELDS.END_LINE],
                  this.tokens[this.position + 2][y.FIELDS.END_COL],
                ),
                sourceIndex: this.currToken[y.FIELDS.START_POS],
                raws: r,
              });
              return (this.position = this.position + 3), i;
            }
            this.unexpected();
          }),
          (t.combinator = function () {
            var e = this;
            if ("|" === this.content()) return this.namespace();
            var t = this.locateNextMeaningfulToken(this.position);
            if (!(t < 0 || this.tokens[t][y.FIELDS.TYPE] === w.comma)) {
              var r,
                i = this.currToken,
                n = void 0;
              if (
                (t > this.position &&
                  (n = this.parseWhitespaceEquivalentTokens(t)),
                this.isNamedCombinator()
                  ? (r = this.namedCombinator())
                  : this.currToken[y.FIELDS.TYPE] === w.combinator
                    ? ((r = new h.default({
                        value: this.content(),
                        source: D(this.currToken),
                        sourceIndex: this.currToken[y.FIELDS.START_POS],
                      })),
                      this.position++)
                    : _[this.currToken[y.FIELDS.TYPE]] ||
                      n ||
                      this.unexpected(),
                r)
              ) {
                if (n) {
                  var o = this.convertWhitespaceNodesToSpace(n),
                    s = o.space,
                    a = o.rawSpace;
                  (r.spaces.before = s), (r.rawSpaceBefore = a);
                }
              } else {
                var l = this.convertWhitespaceNodesToSpace(n, !0),
                  c = l.space,
                  u = l.rawSpace;
                u || (u = c);
                var d = {},
                  p = { spaces: {} };
                c.endsWith(" ") && u.endsWith(" ")
                  ? ((d.before = c.slice(0, c.length - 1)),
                    (p.spaces.before = u.slice(0, u.length - 1)))
                  : c.startsWith(" ") && u.startsWith(" ")
                    ? ((d.after = c.slice(1)), (p.spaces.after = u.slice(1)))
                    : (p.value = u),
                  (r = new h.default({
                    value: " ",
                    source: j(i, this.tokens[this.position - 1]),
                    sourceIndex: i[y.FIELDS.START_POS],
                    spaces: d,
                    raws: p,
                  }));
              }
              return (
                this.currToken &&
                  this.currToken[y.FIELDS.TYPE] === w.space &&
                  ((r.spaces.after = this.optionalSpace(this.content())),
                  this.position++),
                this.newNode(r)
              );
            }
            var f = this.parseWhitespaceEquivalentTokens(t);
            if (f.length > 0) {
              var m = this.current.last;
              if (m) {
                var g = this.convertWhitespaceNodesToSpace(f),
                  b = g.space,
                  v = g.rawSpace;
                void 0 !== v && (m.rawSpaceAfter += v), (m.spaces.after += b);
              } else
                f.forEach(function (t) {
                  return e.newNode(t);
                });
            }
          }),
          (t.comma = function () {
            if (this.position === this.tokens.length - 1)
              return (this.root.trailingComma = !0), void this.position++;
            this.current._inferEndPosition();
            var e = new o.default({
              source: { start: E(this.tokens[this.position + 1]) },
            });
            this.current.parent.append(e), (this.current = e), this.position++;
          }),
          (t.comment = function () {
            var e = this.currToken;
            this.newNode(
              new a.default({
                value: this.content(),
                source: D(e),
                sourceIndex: e[y.FIELDS.START_POS],
              }),
            ),
              this.position++;
          }),
          (t.error = function (e, t) {
            throw this.root.error(e, t);
          }),
          (t.missingBackslash = function () {
            return this.error("Expected a backslash preceding the semicolon.", {
              index: this.currToken[y.FIELDS.START_POS],
            });
          }),
          (t.missingParenthesis = function () {
            return this.expected(
              "opening parenthesis",
              this.currToken[y.FIELDS.START_POS],
            );
          }),
          (t.missingSquareBracket = function () {
            return this.expected(
              "opening square bracket",
              this.currToken[y.FIELDS.START_POS],
            );
          }),
          (t.unexpected = function () {
            return this.error(
              "Unexpected '" +
                this.content() +
                "'. Escaping special characters with \\ may help.",
              this.currToken[y.FIELDS.START_POS],
            );
          }),
          (t.namespace = function () {
            var e = (this.prevToken && this.content(this.prevToken)) || !0;
            return this.nextToken[y.FIELDS.TYPE] === w.word
              ? (this.position++, this.word(e))
              : this.nextToken[y.FIELDS.TYPE] === w.asterisk
                ? (this.position++, this.universal(e))
                : void 0;
          }),
          (t.nesting = function () {
            if (this.nextToken && "|" === this.content(this.nextToken))
              return void this.position++;
            var e = this.currToken;
            this.newNode(
              new g.default({
                value: this.content(),
                source: D(e),
                sourceIndex: e[y.FIELDS.START_POS],
              }),
            ),
              this.position++;
          }),
          (t.parentheses = function () {
            var e = this.current.last,
              t = 1;
            if ((this.position++, e && e.type === v.PSEUDO)) {
              var r = new o.default({
                  source: { start: E(this.tokens[this.position - 1]) },
                }),
                i = this.current;
              for (
                e.append(r), this.current = r;
                this.position < this.tokens.length && t;

              )
                this.currToken[y.FIELDS.TYPE] === w.openParenthesis && t++,
                  this.currToken[y.FIELDS.TYPE] === w.closeParenthesis && t--,
                  t
                    ? this.parse()
                    : ((this.current.source.end = T(this.currToken)),
                      (this.current.parent.source.end = T(this.currToken)),
                      this.position++);
              this.current = i;
            } else {
              for (
                var n, s = this.currToken, a = "(";
                this.position < this.tokens.length && t;

              )
                this.currToken[y.FIELDS.TYPE] === w.openParenthesis && t++,
                  this.currToken[y.FIELDS.TYPE] === w.closeParenthesis && t--,
                  (n = this.currToken),
                  (a += this.parseParenthesisToken(this.currToken)),
                  this.position++;
              e
                ? e.appendToPropertyAndEscape("value", a, a)
                : this.newNode(
                    new u.default({
                      value: a,
                      source: P(
                        s[y.FIELDS.START_LINE],
                        s[y.FIELDS.START_COL],
                        n[y.FIELDS.END_LINE],
                        n[y.FIELDS.END_COL],
                      ),
                      sourceIndex: s[y.FIELDS.START_POS],
                    }),
                  );
            }
            if (t)
              return this.expected(
                "closing parenthesis",
                this.currToken[y.FIELDS.START_POS],
              );
          }),
          (t.pseudo = function () {
            for (
              var e = this, t = "", r = this.currToken;
              this.currToken && this.currToken[y.FIELDS.TYPE] === w.colon;

            )
              (t += this.content()), this.position++;
            return this.currToken
              ? this.currToken[y.FIELDS.TYPE] !== w.word
                ? this.expected(
                    ["pseudo-class", "pseudo-element"],
                    this.currToken[y.FIELDS.START_POS],
                  )
                : void this.splitWord(!1, function (i, n) {
                    (t += i),
                      e.newNode(
                        new d.default({
                          value: t,
                          source: j(r, e.currToken),
                          sourceIndex: r[y.FIELDS.START_POS],
                        }),
                      ),
                      n > 1 &&
                        e.nextToken &&
                        e.nextToken[y.FIELDS.TYPE] === w.openParenthesis &&
                        e.error("Misplaced parenthesis.", {
                          index: e.nextToken[y.FIELDS.START_POS],
                        });
                  })
              : this.expected(
                  ["pseudo-class", "pseudo-element"],
                  this.position - 1,
                );
          }),
          (t.space = function () {
            var e = this.content();
            0 === this.position ||
            this.prevToken[y.FIELDS.TYPE] === w.comma ||
            this.prevToken[y.FIELDS.TYPE] === w.openParenthesis ||
            this.current.nodes.every(function (e) {
              return "comment" === e.type;
            })
              ? ((this.spaces = this.optionalSpace(e)), this.position++)
              : this.position === this.tokens.length - 1 ||
                  this.nextToken[y.FIELDS.TYPE] === w.comma ||
                  this.nextToken[y.FIELDS.TYPE] === w.closeParenthesis
                ? ((this.current.last.spaces.after = this.optionalSpace(e)),
                  this.position++)
                : this.combinator();
          }),
          (t.string = function () {
            var e = this.currToken;
            this.newNode(
              new u.default({
                value: this.content(),
                source: D(e),
                sourceIndex: e[y.FIELDS.START_POS],
              }),
            ),
              this.position++;
          }),
          (t.universal = function (e) {
            var t = this.nextToken;
            if (t && "|" === this.content(t))
              return this.position++, this.namespace();
            var r = this.currToken;
            this.newNode(
              new f.default({
                value: this.content(),
                source: D(r),
                sourceIndex: r[y.FIELDS.START_POS],
              }),
              e,
            ),
              this.position++;
          }),
          (t.splitWord = function (e, t) {
            for (
              var r = this, i = this.nextToken, n = this.content();
              i &&
              ~[w.dollar, w.caret, w.equals, w.word].indexOf(i[y.FIELDS.TYPE]);

            ) {
              this.position++;
              var o = this.content();
              if (((n += o), o.lastIndexOf("\\") === o.length - 1)) {
                var a = this.nextToken;
                a &&
                  a[y.FIELDS.TYPE] === w.space &&
                  ((n += this.requiredSpace(this.content(a))), this.position++);
              }
              i = this.nextToken;
            }
            var u = R(n, ".").filter(function (e) {
                var t = "\\" === n[e - 1],
                  r = /^\d+\.\d+%$/.test(n);
                return !t && !r;
              }),
              d = R(n, "#").filter(function (e) {
                return "\\" !== n[e - 1];
              }),
              p = R(n, "#{");
            p.length &&
              (d = d.filter(function (e) {
                return !~p.indexOf(e);
              }));
            var f = (0, b.default)(
              (function () {
                var e = Array.prototype.concat.apply([], arguments);
                return e.filter(function (t, r) {
                  return r === e.indexOf(t);
                });
              })([0].concat(u, d)),
            );
            f.forEach(function (i, o) {
              var a = f[o + 1] || n.length,
                p = n.slice(i, a);
              if (0 === o && t) return t.call(r, p, f.length);
              var h,
                m = r.currToken,
                g = m[y.FIELDS.START_POS] + f[o],
                b = P(m[1], m[2] + i, m[3], m[2] + (a - 1));
              if (~u.indexOf(i)) {
                var w = { value: p.slice(1), source: b, sourceIndex: g };
                h = new s.default(I(w, "value"));
              } else if (~d.indexOf(i)) {
                var v = { value: p.slice(1), source: b, sourceIndex: g };
                h = new l.default(I(v, "value"));
              } else {
                var x = { value: p, source: b, sourceIndex: g };
                I(x, "value"), (h = new c.default(x));
              }
              r.newNode(h, e), (e = null);
            }),
              this.position++;
          }),
          (t.word = function (e) {
            var t = this.nextToken;
            return t && "|" === this.content(t)
              ? (this.position++, this.namespace())
              : this.splitWord(e);
          }),
          (t.loop = function () {
            for (; this.position < this.tokens.length; ) this.parse(!0);
            return this.current._inferEndPosition(), this.root;
          }),
          (t.parse = function (e) {
            switch (this.currToken[y.FIELDS.TYPE]) {
              case w.space:
                this.space();
                break;
              case w.comment:
                this.comment();
                break;
              case w.openParenthesis:
                this.parentheses();
                break;
              case w.closeParenthesis:
                e && this.missingParenthesis();
                break;
              case w.openSquare:
                this.attribute();
                break;
              case w.dollar:
              case w.caret:
              case w.equals:
              case w.word:
                this.word();
                break;
              case w.colon:
                this.pseudo();
                break;
              case w.comma:
                this.comma();
                break;
              case w.asterisk:
                this.universal();
                break;
              case w.ampersand:
                this.nesting();
                break;
              case w.slash:
              case w.combinator:
                this.combinator();
                break;
              case w.str:
                this.string();
                break;
              case w.closeSquare:
                this.missingSquareBracket();
              case w.semicolon:
                this.missingBackslash();
              default:
                this.unexpected();
            }
          }),
          (t.expected = function (e, t, r) {
            if (Array.isArray(e)) {
              var i = e.pop();
              e = e.join(", ") + " or " + i;
            }
            var n = /^[aeiou]/.test(e[0]) ? "an" : "a";
            return r
              ? this.error(
                  "Expected " + n + " " + e + ', found "' + r + '" instead.',
                  { index: t },
                )
              : this.error("Expected " + n + " " + e + ".", { index: t });
          }),
          (t.requiredSpace = function (e) {
            return this.options.lossy ? " " : e;
          }),
          (t.optionalSpace = function (e) {
            return this.options.lossy ? "" : e;
          }),
          (t.lossySpace = function (e, t) {
            return this.options.lossy ? (t ? " " : "") : e;
          }),
          (t.parseParenthesisToken = function (e) {
            var t = this.content(e);
            return e[y.FIELDS.TYPE] === w.space ? this.requiredSpace(t) : t;
          }),
          (t.newNode = function (e, t) {
            return (
              t &&
                (/^ +$/.test(t) &&
                  (this.options.lossy ||
                    (this.spaces = (this.spaces || "") + t),
                  (t = !0)),
                (e.namespace = t),
                I(e, "namespace")),
              this.spaces &&
                ((e.spaces.before = this.spaces), (this.spaces = "")),
              this.current.append(e)
            );
          }),
          (t.content = function (e) {
            return (
              void 0 === e && (e = this.currToken),
              this.css.slice(e[y.FIELDS.START_POS], e[y.FIELDS.END_POS])
            );
          }),
          (t.locateNextMeaningfulToken = function (e) {
            void 0 === e && (e = this.position + 1);
            for (var t = e; t < this.tokens.length; ) {
              if (O[this.tokens[t][y.FIELDS.TYPE]]) {
                t++;
                continue;
              }
              return t;
            }
            return -1;
          }),
          (function (e, t, r) {
            t && A(e.prototype, t), r && A(e, r);
          })(e, [
            {
              key: "currToken",
              get: function () {
                return this.tokens[this.position];
              },
            },
            {
              key: "nextToken",
              get: function () {
                return this.tokens[this.position + 1];
              },
            },
            {
              key: "prevToken",
              get: function () {
                return this.tokens[this.position - 1];
              },
            },
          ]),
          e
        );
      })();
      (e.default = $), (t.exports = e.default);
    }),
    Be = p((e, t) => {
      m(), (e.__esModule = !0), (e.default = void 0);
      var r,
        i = (r = $e()) && r.__esModule ? r : { default: r };
      var n = (function () {
        function e(e, t) {
          (this.func = e || function () {}),
            (this.funcRes = null),
            (this.options = t);
        }
        var t = e.prototype;
        return (
          (t._shouldUpdateSelector = function (e, t) {
            return (
              void 0 === t && (t = {}),
              !1 !== Object.assign({}, this.options, t).updateSelector &&
                "string" != typeof e
            );
          }),
          (t._isLossy = function (e) {
            return (
              void 0 === e && (e = {}),
              !1 === Object.assign({}, this.options, e).lossless
            );
          }),
          (t._root = function (e, t) {
            return (
              void 0 === t && (t = {}),
              new i.default(e, this._parseOptions(t)).root
            );
          }),
          (t._parseOptions = function (e) {
            return { lossy: this._isLossy(e) };
          }),
          (t._run = function (e, t) {
            var r = this;
            return (
              void 0 === t && (t = {}),
              new Promise(function (i, n) {
                try {
                  var o = r._root(e, t);
                  Promise.resolve(r.func(o))
                    .then(function (i) {
                      var n = void 0;
                      return (
                        r._shouldUpdateSelector(e, t) &&
                          ((n = o.toString()), (e.selector = n)),
                        { transform: i, root: o, string: n }
                      );
                    })
                    .then(i, n);
                } catch (e) {
                  return void n(e);
                }
              })
            );
          }),
          (t._runSync = function (e, t) {
            void 0 === t && (t = {});
            var r = this._root(e, t),
              i = this.func(r);
            if (i && "function" == typeof i.then)
              throw new Error(
                "Selector processor returned a promise to a synchronous call.",
              );
            var n = void 0;
            return (
              t.updateSelector &&
                "string" != typeof e &&
                ((n = r.toString()), (e.selector = n)),
              { transform: i, root: r, string: n }
            );
          }),
          (t.ast = function (e, t) {
            return this._run(e, t).then(function (e) {
              return e.root;
            });
          }),
          (t.astSync = function (e, t) {
            return this._runSync(e, t).root;
          }),
          (t.transform = function (e, t) {
            return this._run(e, t).then(function (e) {
              return e.transform;
            });
          }),
          (t.transformSync = function (e, t) {
            return this._runSync(e, t).transform;
          }),
          (t.process = function (e, t) {
            return this._run(e, t).then(function (e) {
              return e.string || e.root.toString();
            });
          }),
          (t.processSync = function (e, t) {
            var r = this._runSync(e, t);
            return r.string || r.root.toString();
          }),
          e
        );
      })();
      (e.default = n), (t.exports = e.default);
    }),
    Ue = p((e) => {
      m(),
        (e.__esModule = !0),
        (e.universal =
          e.tag =
          e.string =
          e.selector =
          e.root =
          e.pseudo =
          e.nesting =
          e.id =
          e.comment =
          e.combinator =
          e.className =
          e.attribute =
            void 0);
      var t = f(Ee()),
        r = f(be()),
        i = f(Pe()),
        n = f(ye()),
        o = f(we()),
        s = f(De()),
        a = f(Se()),
        l = f(he()),
        c = f(me()),
        u = f(ke()),
        d = f(xe()),
        p = f(Te());
      function f(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.attribute = function (e) {
        return new t.default(e);
      };
      e.className = function (e) {
        return new r.default(e);
      };
      e.combinator = function (e) {
        return new i.default(e);
      };
      e.comment = function (e) {
        return new n.default(e);
      };
      e.id = function (e) {
        return new o.default(e);
      };
      e.nesting = function (e) {
        return new s.default(e);
      };
      e.pseudo = function (e) {
        return new a.default(e);
      };
      e.root = function (e) {
        return new l.default(e);
      };
      e.selector = function (e) {
        return new c.default(e);
      };
      e.string = function (e) {
        return new u.default(e);
      };
      e.tag = function (e) {
        return new d.default(e);
      };
      e.universal = function (e) {
        return new p.default(e);
      };
    }),
    Me = p((e) => {
      m(),
        (e.__esModule = !0),
        (e.isNode = n),
        (e.isPseudoElement = w),
        (e.isPseudoClass = function (e) {
          return p(e) && !w(e);
        }),
        (e.isContainer = function (e) {
          return !(!n(e) || !e.walk);
        }),
        (e.isNamespace = function (e) {
          return s(e) || b(e);
        }),
        (e.isUniversal =
          e.isTag =
          e.isString =
          e.isSelector =
          e.isRoot =
          e.isPseudo =
          e.isNesting =
          e.isIdentifier =
          e.isComment =
          e.isCombinator =
          e.isClassName =
          e.isAttribute =
            void 0);
      var t,
        r = pe(),
        i =
          (((t = {})[r.ATTRIBUTE] = !0),
          (t[r.CLASS] = !0),
          (t[r.COMBINATOR] = !0),
          (t[r.COMMENT] = !0),
          (t[r.ID] = !0),
          (t[r.NESTING] = !0),
          (t[r.PSEUDO] = !0),
          (t[r.ROOT] = !0),
          (t[r.SELECTOR] = !0),
          (t[r.STRING] = !0),
          (t[r.TAG] = !0),
          (t[r.UNIVERSAL] = !0),
          t);
      function n(e) {
        return "object" == typeof e && i[e.type];
      }
      function o(e, t) {
        return n(t) && t.type === e;
      }
      var s = o.bind(null, r.ATTRIBUTE);
      e.isAttribute = s;
      var a = o.bind(null, r.CLASS);
      e.isClassName = a;
      var l = o.bind(null, r.COMBINATOR);
      e.isCombinator = l;
      var c = o.bind(null, r.COMMENT);
      e.isComment = c;
      var u = o.bind(null, r.ID);
      e.isIdentifier = u;
      var d = o.bind(null, r.NESTING);
      e.isNesting = d;
      var p = o.bind(null, r.PSEUDO);
      e.isPseudo = p;
      var f = o.bind(null, r.ROOT);
      e.isRoot = f;
      var h = o.bind(null, r.SELECTOR);
      e.isSelector = h;
      var g = o.bind(null, r.STRING);
      e.isString = g;
      var b = o.bind(null, r.TAG);
      e.isTag = b;
      var y = o.bind(null, r.UNIVERSAL);
      function w(e) {
        return (
          p(e) &&
          e.value &&
          (e.value.startsWith("::") ||
            ":before" === e.value.toLowerCase() ||
            ":after" === e.value.toLowerCase() ||
            ":first-letter" === e.value.toLowerCase() ||
            ":first-line" === e.value.toLowerCase())
        );
      }
      e.isUniversal = y;
    }),
    Le = p((e) => {
      m(), (e.__esModule = !0);
      var t = pe();
      Object.keys(t).forEach(function (r) {
        "default" === r ||
          "__esModule" === r ||
          (r in e && e[r] === t[r]) ||
          (e[r] = t[r]);
      });
      var r = Ue();
      Object.keys(r).forEach(function (t) {
        "default" === t ||
          "__esModule" === t ||
          (t in e && e[t] === r[t]) ||
          (e[t] = r[t]);
      });
      var i = Me();
      Object.keys(i).forEach(function (t) {
        "default" === t ||
          "__esModule" === t ||
          (t in e && e[t] === i[t]) ||
          (e[t] = i[t]);
      });
    }),
    ze = p((e, t) => {
      m(), (e.__esModule = !0), (e.default = void 0);
      var r,
        i = (r = Be()) && r.__esModule ? r : { default: r },
        n = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var t = o();
          if (t && t.has(e)) return t.get(e);
          var r = {},
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var n in e)
            if (Object.prototype.hasOwnProperty.call(e, n)) {
              var s = i ? Object.getOwnPropertyDescriptor(e, n) : null;
              s && (s.get || s.set)
                ? Object.defineProperty(r, n, s)
                : (r[n] = e[n]);
            }
          return (r.default = e), t && t.set(e, r), r;
        })(Le());
      function o() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (o = function () {
            return e;
          }),
          e
        );
      }
      var s = function (e) {
        return new i.default(e);
      };
      Object.assign(s, n), delete s.__esModule;
      var a = s;
      (e.default = a), (t.exports = e.default);
    });
  function Fe(e) {
    return e.replace(/\\,/g, "\\2c ");
  }
  var Ne = d(() => {
      m();
    }),
    We = p((e, t) => {
      m(),
        (t.exports = {
          aliceblue: [240, 248, 255],
          antiquewhite: [250, 235, 215],
          aqua: [0, 255, 255],
          aquamarine: [127, 255, 212],
          azure: [240, 255, 255],
          beige: [245, 245, 220],
          bisque: [255, 228, 196],
          black: [0, 0, 0],
          blanchedalmond: [255, 235, 205],
          blue: [0, 0, 255],
          blueviolet: [138, 43, 226],
          brown: [165, 42, 42],
          burlywood: [222, 184, 135],
          cadetblue: [95, 158, 160],
          chartreuse: [127, 255, 0],
          chocolate: [210, 105, 30],
          coral: [255, 127, 80],
          cornflowerblue: [100, 149, 237],
          cornsilk: [255, 248, 220],
          crimson: [220, 20, 60],
          cyan: [0, 255, 255],
          darkblue: [0, 0, 139],
          darkcyan: [0, 139, 139],
          darkgoldenrod: [184, 134, 11],
          darkgray: [169, 169, 169],
          darkgreen: [0, 100, 0],
          darkgrey: [169, 169, 169],
          darkkhaki: [189, 183, 107],
          darkmagenta: [139, 0, 139],
          darkolivegreen: [85, 107, 47],
          darkorange: [255, 140, 0],
          darkorchid: [153, 50, 204],
          darkred: [139, 0, 0],
          darksalmon: [233, 150, 122],
          darkseagreen: [143, 188, 143],
          darkslateblue: [72, 61, 139],
          darkslategray: [47, 79, 79],
          darkslategrey: [47, 79, 79],
          darkturquoise: [0, 206, 209],
          darkviolet: [148, 0, 211],
          deeppink: [255, 20, 147],
          deepskyblue: [0, 191, 255],
          dimgray: [105, 105, 105],
          dimgrey: [105, 105, 105],
          dodgerblue: [30, 144, 255],
          firebrick: [178, 34, 34],
          floralwhite: [255, 250, 240],
          forestgreen: [34, 139, 34],
          fuchsia: [255, 0, 255],
          gainsboro: [220, 220, 220],
          ghostwhite: [248, 248, 255],
          gold: [255, 215, 0],
          goldenrod: [218, 165, 32],
          gray: [128, 128, 128],
          green: [0, 128, 0],
          greenyellow: [173, 255, 47],
          grey: [128, 128, 128],
          honeydew: [240, 255, 240],
          hotpink: [255, 105, 180],
          indianred: [205, 92, 92],
          indigo: [75, 0, 130],
          ivory: [255, 255, 240],
          khaki: [240, 230, 140],
          lavender: [230, 230, 250],
          lavenderblush: [255, 240, 245],
          lawngreen: [124, 252, 0],
          lemonchiffon: [255, 250, 205],
          lightblue: [173, 216, 230],
          lightcoral: [240, 128, 128],
          lightcyan: [224, 255, 255],
          lightgoldenrodyellow: [250, 250, 210],
          lightgray: [211, 211, 211],
          lightgreen: [144, 238, 144],
          lightgrey: [211, 211, 211],
          lightpink: [255, 182, 193],
          lightsalmon: [255, 160, 122],
          lightseagreen: [32, 178, 170],
          lightskyblue: [135, 206, 250],
          lightslategray: [119, 136, 153],
          lightslategrey: [119, 136, 153],
          lightsteelblue: [176, 196, 222],
          lightyellow: [255, 255, 224],
          lime: [0, 255, 0],
          limegreen: [50, 205, 50],
          linen: [250, 240, 230],
          magenta: [255, 0, 255],
          maroon: [128, 0, 0],
          mediumaquamarine: [102, 205, 170],
          mediumblue: [0, 0, 205],
          mediumorchid: [186, 85, 211],
          mediumpurple: [147, 112, 219],
          mediumseagreen: [60, 179, 113],
          mediumslateblue: [123, 104, 238],
          mediumspringgreen: [0, 250, 154],
          mediumturquoise: [72, 209, 204],
          mediumvioletred: [199, 21, 133],
          midnightblue: [25, 25, 112],
          mintcream: [245, 255, 250],
          mistyrose: [255, 228, 225],
          moccasin: [255, 228, 181],
          navajowhite: [255, 222, 173],
          navy: [0, 0, 128],
          oldlace: [253, 245, 230],
          olive: [128, 128, 0],
          olivedrab: [107, 142, 35],
          orange: [255, 165, 0],
          orangered: [255, 69, 0],
          orchid: [218, 112, 214],
          palegoldenrod: [238, 232, 170],
          palegreen: [152, 251, 152],
          paleturquoise: [175, 238, 238],
          palevioletred: [219, 112, 147],
          papayawhip: [255, 239, 213],
          peachpuff: [255, 218, 185],
          peru: [205, 133, 63],
          pink: [255, 192, 203],
          plum: [221, 160, 221],
          powderblue: [176, 224, 230],
          purple: [128, 0, 128],
          rebeccapurple: [102, 51, 153],
          red: [255, 0, 0],
          rosybrown: [188, 143, 143],
          royalblue: [65, 105, 225],
          saddlebrown: [139, 69, 19],
          salmon: [250, 128, 114],
          sandybrown: [244, 164, 96],
          seagreen: [46, 139, 87],
          seashell: [255, 245, 238],
          sienna: [160, 82, 45],
          silver: [192, 192, 192],
          skyblue: [135, 206, 235],
          slateblue: [106, 90, 205],
          slategray: [112, 128, 144],
          slategrey: [112, 128, 144],
          snow: [255, 250, 250],
          springgreen: [0, 255, 127],
          steelblue: [70, 130, 180],
          tan: [210, 180, 140],
          teal: [0, 128, 128],
          thistle: [216, 191, 216],
          tomato: [255, 99, 71],
          turquoise: [64, 224, 208],
          violet: [238, 130, 238],
          wheat: [245, 222, 179],
          white: [255, 255, 255],
          whitesmoke: [245, 245, 245],
          yellow: [255, 255, 0],
          yellowgreen: [154, 205, 50],
        });
    });
  function Ve(e, { loose: t = !1 } = {}) {
    if ("string" != typeof e) return null;
    if ("transparent" === (e = e.trim()))
      return { mode: "rgb", color: ["0", "0", "0"], alpha: "0" };
    if (e in Ge.default)
      return { mode: "rgb", color: Ge.default[e].map((e) => e.toString()) };
    let r = e
      .replace(He, (e, t, r, i, n) =>
        ["#", t, t, r, r, i, i, n ? n + n : ""].join(""),
      )
      .match(Ye);
    if (null !== r)
      return {
        mode: "rgb",
        color: [parseInt(r[1], 16), parseInt(r[2], 16), parseInt(r[3], 16)].map(
          (e) => e.toString(),
        ),
        alpha: r[4] ? (parseInt(r[4], 16) / 255).toString() : void 0,
      };
    let i = e.match(Ze) ?? e.match(et);
    if (null === i) return null;
    let n = [i[2], i[3], i[4]].filter(Boolean).map((e) => e.toString());
    return (!t && 3 !== n.length) ||
      (n.length < 3 && !n.some((e) => /^var\(.*?\)$/.test(e)))
      ? null
      : { mode: i[1], color: n, alpha: i[5]?.toString?.() };
  }
  function qe({ mode: e, color: t, alpha: r }) {
    let i = void 0 !== r;
    return `${e}(${t.join(" ")}${i ? ` / ${r}` : ""})`;
  }
  var Ge,
    Ye,
    He,
    Qe,
    Je,
    Xe,
    Ke,
    Ze,
    et,
    tt = d(() => {
      m(),
        (Ge = h(We())),
        (Ye = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i),
        (He = /^#([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i),
        (Qe = /(?:\d+|\d*\.\d+)%?/),
        (Je = /(?:\s*,\s*|\s+)/),
        (Xe = /\s*[,/]\s*/),
        (Ke = /var\(--(?:[^ )]*?)\)/),
        (Ze = new RegExp(
          `^(rgb)a?\\(\\s*(${Qe.source}|${Ke.source})(?:${Je.source}(${Qe.source}|${Ke.source}))?(?:${Je.source}(${Qe.source}|${Ke.source}))?(?:${Xe.source}(${Qe.source}|${Ke.source}))?\\s*\\)$`,
        )),
        (et = new RegExp(
          `^(hsl)a?\\(\\s*((?:${Qe.source})(?:deg|rad|grad|turn)?|${Ke.source})(?:${Je.source}(${Qe.source}|${Ke.source}))?(?:${Je.source}(${Qe.source}|${Ke.source}))?(?:${Xe.source}(${Qe.source}|${Ke.source}))?\\s*\\)$`,
        ));
    });
  function rt(e, t, r) {
    if ("function" == typeof e) return e({ opacityValue: t });
    let i = Ve(e, { loose: !0 });
    return null === i ? r : qe({ ...i, alpha: t });
  }
  function it({ color: e, property: t, variable: r }) {
    let i = [].concat(t);
    if ("function" == typeof e)
      return {
        [r]: "1",
        ...Object.fromEntries(
          i.map((t) => [
            t,
            e({ opacityVariable: r, opacityValue: `var(${r})` }),
          ]),
        ),
      };
    let n = Ve(e);
    return null === n || void 0 !== n.alpha
      ? Object.fromEntries(i.map((t) => [t, e]))
      : {
          [r]: "1",
          ...Object.fromEntries(
            i.map((e) => [e, qe({ ...n, alpha: `var(${r})` })]),
          ),
        };
  }
  var nt = d(() => {
    m(), tt();
  });
  function ot(e) {
    return (e = (e = Array.isArray(e) ? e : [e]).map((e) =>
      e instanceof RegExp ? e.source : e,
    )).join("");
  }
  function st(e) {
    return new RegExp(ot(e), "g");
  }
  function at(e) {
    return `(?:${e.map(ot).join("|")})`;
  }
  function lt(e) {
    return `(?:${ot(e)})?`;
  }
  function ct(e) {
    return `(?:${ot(e)})*`;
  }
  function ut(e) {
    return e && pt.test(e) ? e.replace(dt, "\\$&") : e || "";
  }
  var dt,
    pt,
    ft = d(() => {
      m(), (dt = /[\\^$.*+?()[\]{}|]/g), (pt = RegExp(dt.source));
    });
  function* ht(e, t) {
    let r = new RegExp(`[(){}\\[\\]${ut(t)}]`, "g"),
      i = 0,
      n = 0,
      o = !1,
      s = 0,
      a = 0,
      l = t.length;
    for (let c of e.matchAll(r)) {
      let r = c[0] === t[s],
        u = s === l - 1,
        d = r && u;
      "(" === c[0] && i++,
        ")" === c[0] && i--,
        "[" === c[0] && i++,
        "]" === c[0] && i--,
        "{" === c[0] && i++,
        "}" === c[0] && i--,
        r && 0 === i && (0 === a && (a = c.index), s++),
        d && 0 === i && ((o = !0), yield e.substring(n, a), (n = a + l)),
        s === l && ((s = 0), (a = 0));
    }
    o ? yield e.substring(n) : yield e;
  }
  var mt = d(() => {
    m(), ft();
  });
  function gt(e) {
    return Array.from(ht(e, ",")).map((e) => {
      let t = e.trim(),
        r = { raw: t },
        i = t.split(wt),
        n = new Set();
      for (let e of i)
        (vt.lastIndex = 0),
          !n.has("KEYWORD") && yt.has(e)
            ? ((r.keyword = e), n.add("KEYWORD"))
            : vt.test(e)
              ? n.has("X")
                ? n.has("Y")
                  ? n.has("BLUR")
                    ? n.has("SPREAD") || ((r.spread = e), n.add("SPREAD"))
                    : ((r.blur = e), n.add("BLUR"))
                  : ((r.y = e), n.add("Y"))
                : ((r.x = e), n.add("X"))
              : r.color
                ? (r.unknown || (r.unknown = []), r.unknown.push(e))
                : (r.color = e);
      return (r.valid = void 0 !== r.x && void 0 !== r.y), r;
    });
  }
  function bt(e) {
    return e
      .map((e) =>
        e.valid
          ? [e.keyword, e.x, e.y, e.blur, e.spread, e.color]
              .filter(Boolean)
              .join(" ")
          : e.raw,
      )
      .join(", ");
  }
  var yt,
    wt,
    vt,
    xt = d(() => {
      m(),
        mt(),
        (yt = new Set(["inset", "inherit", "initial", "revert", "unset"])),
        (wt = /\ +(?![^(]*\))/g),
        (vt = /^-?(\d+|\.\d+)(.*?)$/g);
    });
  function kt(e, t = !0) {
    return e.includes("url(")
      ? e
          .split(/(url\(.*?\))/g)
          .filter(Boolean)
          .map((e) => (/^url\(.*?\)$/.test(e) ? e : kt(e, !1)))
          .join("")
      : ((e = e
          .replace(/([^\\])_+/g, (e, t) => t + " ".repeat(e.length - 1))
          .replace(/^_/g, " ")
          .replace(/\\_/g, "_")),
        t && (e = e.trim()),
        (e = e.replace(/(calc|min|max|clamp)\(.+\)/g, (e) =>
          e.replace(
            /(-?\d*\.?\d(?!\b-.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g,
            "$1 $2 ",
          ),
        )));
  }
  function St(e) {
    return e.startsWith("url(");
  }
  function Ct(e) {
    return (
      !isNaN(Number(e)) || Bt.some((t) => new RegExp(`^${t}\\(.+?`).test(e))
    );
  }
  function At(e) {
    return e
      .split(Mt)
      .every(
        (e) =>
          /%$/g.test(e) || Bt.some((t) => new RegExp(`^${t}\\(.+?%`).test(e)),
      );
  }
  function _t(e) {
    return e
      .split(Mt)
      .every(
        (e) =>
          "0" === e ||
          new RegExp(`${Lt}$`).test(e) ||
          Bt.some((t) => new RegExp(`^${t}\\(.+?${Lt}`).test(e)),
      );
  }
  function Ot(e) {
    return zt.has(e);
  }
  function Et(e) {
    let t = gt(kt(e));
    for (let e of t) if (!e.valid) return !1;
    return !0;
  }
  function Tt(e) {
    let t = 0;
    return (
      !!e
        .split(Mt)
        .every(
          (e) =>
            !!(e = kt(e)).startsWith("var(") ||
            (null !== Ve(e, { loose: !0 }) && (t++, !0)),
        ) && t > 0
    );
  }
  function Pt(e) {
    let t = 0;
    return (
      !!e.split(Ut).every(
        (e) =>
          !!(e = kt(e)).startsWith("var(") ||
          (!!(
            St(e) ||
            (function (e) {
              e = kt(e);
              for (let t of Ft) if (e.startsWith(`${t}(`)) return !0;
              return !1;
            })(e) ||
            ["element(", "image(", "cross-fade(", "image-set("].some((t) =>
              e.startsWith(t),
            )
          ) &&
            (t++, !0)),
      ) && t > 0
    );
  }
  function Dt(e) {
    let t = 0;
    return (
      !!e
        .split(Mt)
        .every(
          (e) =>
            !!(e = kt(e)).startsWith("var(") ||
            (!!(Nt.has(e) || _t(e) || At(e)) && (t++, !0)),
        ) && t > 0
    );
  }
  function jt(e) {
    let t = 0;
    return (
      !!e
        .split(Ut)
        .every(
          (e) =>
            !!(e = kt(e)).startsWith("var(") ||
            (!(
              (e.includes(" ") && !/(['"])([^"']+)\1/g.test(e)) ||
              /^\d/g.test(e)
            ) &&
              (t++, !0)),
        ) && t > 0
    );
  }
  function It(e) {
    return Wt.has(e);
  }
  function Rt(e) {
    return Vt.has(e);
  }
  function $t(e) {
    return qt.has(e);
  }
  var Bt,
    Ut,
    Mt,
    Lt,
    zt,
    Ft,
    Nt,
    Wt,
    Vt,
    qt,
    Gt = d(() => {
      m(),
        tt(),
        xt(),
        (Bt = ["min", "max", "clamp", "calc"]),
        (Ut = /,(?![^(]*\))/g),
        (Mt = /_(?![^(]*\))/g),
        (Lt = `(?:${[
          "cm",
          "mm",
          "Q",
          "in",
          "pc",
          "pt",
          "px",
          "em",
          "ex",
          "ch",
          "rem",
          "lh",
          "vw",
          "vh",
          "vmin",
          "vmax",
        ].join("|")})`),
        (zt = new Set(["thin", "medium", "thick"])),
        (Ft = new Set([
          "linear-gradient",
          "radial-gradient",
          "repeating-linear-gradient",
          "repeating-radial-gradient",
          "conic-gradient",
        ])),
        (Nt = new Set(["center", "top", "right", "bottom", "left"])),
        (Wt = new Set([
          "serif",
          "sans-serif",
          "monospace",
          "cursive",
          "fantasy",
          "system-ui",
          "ui-serif",
          "ui-sans-serif",
          "ui-monospace",
          "ui-rounded",
          "math",
          "emoji",
          "fangsong",
        ])),
        (Vt = new Set([
          "xx-small",
          "x-small",
          "small",
          "medium",
          "large",
          "x-large",
          "x-large",
          "xxx-large",
        ])),
        (qt = new Set(["larger", "smaller"]));
    });
  function Yt(e, t) {
    return (0, rr.default)((e) => {
      e.walkClasses((e) => {
        let r = t(e.value);
        (e.value = r),
          e.raws && e.raws.value && (e.raws.value = Fe(e.raws.value));
      });
    }).processSync(e);
  }
  function Ht(e, t) {
    if (!Jt(e)) return;
    let r = e.slice(1, -1);
    return t(r) ? kt(r) : void 0;
  }
  function Qt(e, t = {}, { validate: r = () => !0 } = {}) {
    let i = t.values?.[e];
    return void 0 !== i
      ? i
      : t.supportsNegativeValues && e.startsWith("-")
        ? (function (e, t = {}, r) {
            let i = t[e];
            if (void 0 !== i) return I(i);
            if (Jt(e)) {
              let t = Ht(e, r);
              return void 0 === t ? void 0 : I(t);
            }
          })(e.slice(1), t.values, r)
        : Ht(e, r);
  }
  function Jt(e) {
    return e.startsWith("[") && e.endsWith("]");
  }
  function Xt(e) {
    if ("string" == typeof e && e.includes("<alpha-value>")) {
      let t = e;
      return ({ opacityValue: e = 1 }) => t.replace("<alpha-value>", e);
    }
    return e;
  }
  function Kt(e, t = {}, { tailwindConfig: r = {} } = {}) {
    if (void 0 !== t.values?.[e]) return Xt(t.values?.[e]);
    let [i, n] = (function (e) {
      let t = e.lastIndexOf("/");
      return -1 === t || t === e.length - 1
        ? [e]
        : [e.slice(0, t), e.slice(t + 1)];
    })(e);
    if (void 0 !== n) {
      let e = t.values?.[i] ?? (Jt(i) ? i.slice(1, -1) : void 0);
      return void 0 === e
        ? void 0
        : ((e = Xt(e)),
          Jt(n)
            ? rt(e, n.slice(1, -1))
            : void 0 === r.theme?.opacity?.[n]
              ? void 0
              : rt(e, r.theme.opacity[n]));
    }
    return Qt(e, t, { validate: Tt });
  }
  function Zt(e, t = {}) {
    return t.values?.[e];
  }
  function er(e) {
    return (t, r) => Qt(t, r, { validate: e });
  }
  function tr(e, t, r, i) {
    if (Jt(t)) {
      let e = t.slice(1, -1),
        [i, n] = (function (e, t) {
          let r = e.indexOf(t);
          return -1 === r ? [void 0, e] : [e.slice(0, r), e.slice(r + 1)];
        })(e, ":");
      if (/^[\w-_]+$/g.test(i)) {
        if (void 0 !== i && !nr.includes(i)) return [];
      } else n = e;
      if (n.length > 0 && nr.includes(i)) return [Qt(`[${n}]`, r), i];
    }
    for (let n of [].concat(e)) {
      let e = ir[n](t, r, { tailwindConfig: i });
      if (void 0 !== e) return [e, n];
    }
    return [];
  }
  var rr,
    ir,
    nr,
    or = d(() => {
      m(),
        (rr = h(ze())),
        Ne(),
        nt(),
        Gt(),
        $(),
        (ir = {
          any: Qt,
          color: Kt,
          url: er(St),
          image: er(Pt),
          length: er(_t),
          percentage: er(At),
          position: er(Dt),
          lookup: Zt,
          "generic-name": er(It),
          "family-name": er(jt),
          number: er(Ct),
          "line-width": er(Ot),
          "absolute-size": er(Rt),
          "relative-size": er($t),
          shadow: er(Et),
        }),
        (nr = Object.keys(ir));
    });
  function sr(e) {
    return "function" == typeof e ? e({}) : e;
  }
  var ar = d(() => {
    m();
  });
  function lr(e) {
    return "function" == typeof e;
  }
  function cr(e) {
    return "object" == typeof e && null !== e;
  }
  function ur(e, ...t) {
    let r = t.pop();
    for (let i of t)
      for (let t in i) {
        let n = r(e[t], i[t]);
        void 0 === n
          ? cr(e[t]) && cr(i[t])
            ? (e[t] = ur(e[t], i[t], r))
            : (e[t] = i[t])
          : (e[t] = n);
      }
    return e;
  }
  function dr(e) {
    return e.reduce(
      (e, { extend: t }) =>
        ur(e, t, (e, t) =>
          void 0 === e ? [t] : Array.isArray(e) ? [t, ...e] : [t, e],
        ),
      {},
    );
  }
  function pr(e) {
    return { ...e.reduce((e, t) => X(e, t), {}), extend: dr(e) };
  }
  function fr(e, t) {
    return Array.isArray(e) && cr(e[0])
      ? e.concat(t)
      : Array.isArray(t) && cr(t[0]) && cr(e)
        ? [e, ...t]
        : Array.isArray(t)
          ? t
          : void 0;
  }
  function hr({ extend: e, ...t }) {
    return ur(t, e, (e, t) =>
      lr(e) || t.some(lr)
        ? (r, i) =>
            ur(
              {},
              ...[e, ...t].map((e) =>
                (function (e, ...t) {
                  return lr(e) ? e(...t) : e;
                })(e, r, i),
              ),
              fr,
            )
        : ur({}, e, ...t, fr),
    );
  }
  function mr(e) {
    let t = (r, i) => {
      for (let i of (function* (e) {
        let t = Z(e);
        if (0 === t.length || (yield t, Array.isArray(e))) return;
        let r = e.match(/^(.*?)\s*\/\s*([^/]+)$/);
        if (null !== r) {
          let [, e, t] = r,
            i = Z(e);
          (i.alpha = t), yield i;
        }
      })(r)) {
        let r = 0,
          n = e;
        for (; null != n && r < i.length; )
          (n = n[i[r++]]),
            (n =
              lr(n) && (void 0 === i.alpha || r <= i.length - 1)
                ? n(t, xr)
                : n);
        if (void 0 !== n) {
          if (void 0 !== i.alpha) {
            let e = Xt(n);
            return rt(e, i.alpha, sr(e));
          }
          return re(n) ? ne(n) : n;
        }
      }
      return i;
    };
    return (
      Object.assign(t, { theme: t, ...xr }),
      Object.keys(e).reduce(
        (r, i) => ((r[i] = lr(e[i]) ? e[i](t, xr) : e[i]), r),
        {},
      )
    );
  }
  function gr(e) {
    let t = [];
    return (
      e.forEach((e) => {
        t = [...t, e];
        let r = e?.plugins ?? [];
        0 !== r.length &&
          r.forEach((e) => {
            e.__isOptionsFunction && (e = e()),
              (t = [...t, ...gr([e?.config ?? {}])]);
          });
      }),
      t
    );
  }
  function br(e) {
    return [...e].reduceRight(
      (e, t) =>
        lr(t)
          ? t({ corePlugins: e })
          : (function (e, t) {
              return void 0 === e
                ? t
                : Array.isArray(e)
                  ? e
                  : [
                      ...new Set(
                        t
                          .filter((t) => !1 !== e && !1 !== e[t])
                          .concat(Object.keys(e).filter((t) => !1 !== e[t])),
                      ),
                    ];
            })(t, e),
      R,
    );
  }
  function yr(e) {
    return [...e].reduceRight((e, t) => [...e, ...t], []);
  }
  function wr(e) {
    let t = [
      ...gr(e),
      {
        prefix: "",
        important: !1,
        separator: ":",
        variantOrder: vr.default.variantOrder,
      },
    ];
    return (function (e) {
      (() => {
        if (
          e.purge ||
          !e.content ||
          (!Array.isArray(e.content) &&
            ("object" != typeof e.content || null === e.content))
        )
          return !1;
        if (Array.isArray(e.content))
          return e.content.every(
            (e) =>
              "string" == typeof e ||
              !(
                "string" != typeof e?.raw ||
                (e?.extension && "string" != typeof e?.extension)
              ),
          );
        if ("object" == typeof e.content && null !== e.content) {
          if (
            Object.keys(e.content).some(
              (e) => !["files", "extract", "transform"].includes(e),
            )
          )
            return !1;
          if (Array.isArray(e.content.files)) {
            if (
              !e.content.files.every(
                (e) =>
                  "string" == typeof e ||
                  !(
                    "string" != typeof e?.raw ||
                    (e?.extension && "string" != typeof e?.extension)
                  ),
              )
            )
              return !1;
            if ("object" == typeof e.content.extract) {
              for (let t of Object.values(e.content.extract))
                if ("function" != typeof t) return !1;
            } else if (
              void 0 !== e.content.extract &&
              "function" != typeof e.content.extract
            )
              return !1;
            if ("object" == typeof e.content.transform) {
              for (let t of Object.values(e.content.transform))
                if ("function" != typeof t) return !1;
            } else if (
              void 0 !== e.content.transform &&
              "function" != typeof e.content.transform
            )
              return !1;
          }
          return !0;
        }
        return !1;
      })() ||
        q.warn("purge-deprecation", [
          "The `purge`/`content` options have changed in Tailwind CSS v3.0.",
          "Update your configuration file to eliminate this warning.",
          "https://tailwindcss.com/docs/upgrade-guide#configure-content-sources",
        ]),
        (e.safelist = (() => {
          let { content: t, purge: r, safelist: i } = e;
          return Array.isArray(i)
            ? i
            : Array.isArray(t?.safelist)
              ? t.safelist
              : Array.isArray(r?.safelist)
                ? r.safelist
                : Array.isArray(r?.options?.safelist)
                  ? r.options.safelist
                  : [];
        })()),
        "function" == typeof e.prefix
          ? (q.warn("prefix-function", [
              "As of Tailwind CSS v3.0, `prefix` cannot be a function.",
              "Update `prefix` in your configuration to be a string to eliminate this warning.",
              "https://tailwindcss.com/docs/upgrade-guide#prefix-cannot-be-a-function",
            ]),
            (e.prefix = ""))
          : (e.prefix = e.prefix ?? ""),
        (e.content = {
          files: (() => {
            let { content: t, purge: r } = e;
            return Array.isArray(r)
              ? r
              : Array.isArray(r?.content)
                ? r.content
                : Array.isArray(t)
                  ? t
                  : Array.isArray(t?.content)
                    ? t.content
                    : Array.isArray(t?.files)
                      ? t.files
                      : [];
          })(),
          extract: (() => {
            let t = e.purge?.extract
                ? e.purge.extract
                : e.content?.extract
                  ? e.content.extract
                  : e.purge?.extract?.DEFAULT
                    ? e.purge.extract.DEFAULT
                    : e.content?.extract?.DEFAULT
                      ? e.content.extract.DEFAULT
                      : e.purge?.options?.extractors
                        ? e.purge.options.extractors
                        : e.content?.options?.extractors
                          ? e.content.options.extractors
                          : {},
              r = {},
              i = e.purge?.options?.defaultExtractor
                ? e.purge.options.defaultExtractor
                : e.content?.options?.defaultExtractor
                  ? e.content.options.defaultExtractor
                  : void 0;
            if ((void 0 !== i && (r.DEFAULT = i), "function" == typeof t))
              r.DEFAULT = t;
            else if (Array.isArray(t))
              for (let { extensions: e, extractor: i } of t ?? [])
                for (let t of e) r[t] = i;
            else "object" == typeof t && null !== t && Object.assign(r, t);
            return r;
          })(),
          transform: (() => {
            let t = e.purge?.transform
                ? e.purge.transform
                : e.content?.transform
                  ? e.content.transform
                  : e.purge?.transform?.DEFAULT
                    ? e.purge.transform.DEFAULT
                    : e.content?.transform?.DEFAULT
                      ? e.content.transform.DEFAULT
                      : {},
              r = {};
            return (
              "function" == typeof t && (r.DEFAULT = t),
              "object" == typeof t && null !== t && Object.assign(r, t),
              r
            );
          })(),
        });
      for (let t of e.content.files)
        if ("string" == typeof t && /{([^,]*?)}/g.test(t)) {
          q.warn("invalid-glob-braces", [
            `The glob pattern ${W(
              t,
            )} in your Tailwind CSS configuration is invalid.`,
            `Update it to ${W(
              t.replace(/{([^,]*?)}/g, "$1"),
            )} to silence this warning.`,
          ]);
          break;
        }
      return e;
    })(
      X(
        {
          theme: mr(hr(pr(t.map((e) => e?.theme ?? {})))),
          corePlugins: br(t.map((e) => e.corePlugins)),
          plugins: yr(e.map((e) => e?.plugins ?? [])),
        },
        ...t,
      ),
    );
  }
  var vr,
    xr,
    kr = d(() => {
      m(),
        $(),
        B(),
        U(),
        (vr = h(M())),
        J(),
        K(),
        ee(),
        te(),
        ie(),
        oe(),
        or(),
        nt(),
        ar(),
        (xr = {
          colors: Q,
          negative: (e) =>
            Object.keys(e)
              .filter((t) => "0" !== e[t])
              .reduce((t, r) => {
                let i = I(e[r]);
                return void 0 !== i && (t[`-${r}`] = i), t;
              }, {}),
          breakpoints: (e) =>
            Object.keys(e)
              .filter((t) => "string" == typeof e[t])
              .reduce((t, r) => ({ ...t, [`screen-${r}`]: e[r] }), {}),
        });
    });
  function Sr(e, t) {
    return _r.future.includes(t)
      ? "all" === e.future || (e?.future?.[t] ?? Ar[t] ?? !1)
      : !!_r.experimental.includes(t) &&
          ("all" === e.experimental || (e?.experimental?.[t] ?? Ar[t] ?? !1));
  }
  function Cr(e) {
    return "all" === e.experimental
      ? _r.experimental
      : Object.keys(e?.experimental ?? {}).filter(
          (t) => _r.experimental.includes(t) && e.experimental[t],
        );
  }
  var Ar,
    _r,
    Or = d(() => {
      m(),
        F(),
        G(),
        (Ar = { optimizeUniversalDefaults: !1 }),
        (_r = {
          future: ["hoverOnlyWhenSupported", "respectDefaultRingColorOpacity"],
          experimental: ["optimizeUniversalDefaults", "matchVariant"],
        });
    });
  function Er(e) {
    let t = (e?.presets ?? [Tr.default])
        .slice()
        .reverse()
        .flatMap((e) => Er(e instanceof Function ? e() : e)),
      r = {
        respectDefaultRingColorOpacity: {
          theme: { ringColor: { DEFAULT: "#3b82f67f" } },
        },
      },
      i = Object.keys(r)
        .filter((t) => Sr(e, t))
        .map((e) => r[e]);
    return [e, ...i, ...t];
  }
  var Tr,
    Pr = d(() => {
      m(), (Tr = h(M())), Or();
    }),
    Dr = {};
  function jr(...e) {
    let [, ...t] = Er(e[0]);
    return wr([...e, ...t]);
  }
  f(Dr, { default: () => jr });
  var Ir = d(() => {
    m(), kr(), Pr();
  });
  function Rr(e) {
    return "object" == typeof e && null !== e;
  }
  function $r(e) {
    return "string" == typeof e || e instanceof String;
  }
  function Br(e) {
    if (
      Rr(e) &&
      void 0 === e.config &&
      !(function (e) {
        return 0 === Object.keys(e).length;
      })(e)
    )
      return null;
    if (Rr(e) && void 0 !== e.config && $r(e.config))
      return y.resolve(e.config);
    if (Rr(e) && void 0 !== e.config && Rr(e.config)) return null;
    if ($r(e)) return y.resolve(e);
    for (let e of ["./tailwind.config.js", "./tailwind.config.cjs"])
      try {
        let t = y.resolve(e);
        return r.accessSync(t), t;
      } catch (e) {}
    return null;
  }
  var Ur = d(() => {
    m(), g(), k();
  });
  function Mr(e) {
    if (void 0 === e) return !1;
    if ("true" === e || "1" === e) return !0;
    if ("false" === e || "0" === e) return !1;
    if ("*" === e) return !0;
    let t = e.split(",").map((e) => e.split(":")[0]);
    return !t.includes("-tailwindcss") && !!t.includes("tailwindcss");
  }
  var Lr,
    zr,
    Fr,
    Nr,
    Wr,
    Vr,
    qr = d(() => {
      m(),
        (Lr = { NODE_ENV: "production", DEBUG: Mr(e.env.DEBUG) }),
        (zr = new Map()),
        (Fr = new Map()),
        (Nr = new Map()),
        (Wr = new Map()),
        (Vr = new String("*"));
    }),
    Gr = {};
  f(Gr, { default: () => Yr });
  var Yr,
    Hr,
    Qr,
    Jr = d(() => {
      m(), (Yr = { parse: (e) => ({ href: e }) });
    }),
    Xr = p(() => {
      m();
    }),
    Kr = p((e, t) => {
      m();
      var r = (F(), L),
        i = Xr(),
        n = class extends Error {
          constructor(e, t, r, i, o, s) {
            super(e),
              (this.name = "CssSyntaxError"),
              (this.reason = e),
              o && (this.file = o),
              i && (this.source = i),
              s && (this.plugin = s),
              void 0 !== t &&
                void 0 !== r &&
                ("number" == typeof t
                  ? ((this.line = t), (this.column = r))
                  : ((this.line = t.line),
                    (this.column = t.column),
                    (this.endLine = r.line),
                    (this.endColumn = r.column))),
              this.setMessage(),
              Error.captureStackTrace && Error.captureStackTrace(this, n);
          }
          setMessage() {
            (this.message = this.plugin ? this.plugin + ": " : ""),
              (this.message += this.file ? this.file : "<css input>"),
              void 0 !== this.line &&
                (this.message += ":" + this.line + ":" + this.column),
              (this.message += ": " + this.reason);
          }
          showSourceCode(e) {
            if (!this.source) return "";
            let t = this.source;
            null == e && (e = r.isColorSupported), i && e && (t = i(t));
            let n,
              o,
              s = t.split(/\r?\n/),
              a = Math.max(this.line - 3, 0),
              l = Math.min(this.line + 2, s.length),
              c = String(l).length;
            if (e) {
              let { bold: e, red: t, gray: i } = r.createColors(!0);
              (n = (r) => e(t(r))), (o = (e) => i(e));
            } else n = o = (e) => e;
            return s
              .slice(a, l)
              .map((e, t) => {
                let r = a + 1 + t,
                  i = " " + (" " + r).slice(-c) + " | ";
                if (r === this.line) {
                  let t =
                    o(i.replace(/\d/g, " ")) +
                    e.slice(0, this.column - 1).replace(/[^\t]/g, " ");
                  return n(">") + o(i) + e + "\n " + t + n("^");
                }
                return " " + o(i) + e;
              })
              .join("\n");
          }
          toString() {
            let e = this.showSourceCode();
            return (
              e && (e = "\n\n" + e + "\n"), this.name + ": " + this.message + e
            );
          }
        };
      (t.exports = n), (n.default = n);
    }),
    Zr = p((e, t) => {
      m(),
        (t.exports.isClean = Symbol("isClean")),
        (t.exports.my = Symbol("my"));
    }),
    ei = p((e, t) => {
      m();
      var r = {
        colon: ": ",
        indent: "    ",
        beforeDecl: "\n",
        beforeRule: "\n",
        beforeOpen: " ",
        beforeClose: "\n",
        beforeComment: "\n",
        after: "\n",
        emptyBody: "",
        commentLeft: " ",
        commentRight: " ",
        semicolon: !1,
      };
      var i = class {
        constructor(e) {
          this.builder = e;
        }
        stringify(e, t) {
          if (!this[e.type])
            throw new Error(
              "Unknown AST node type " +
                e.type +
                ". Maybe you need to change PostCSS stringifier.",
            );
          this[e.type](e, t);
        }
        document(e) {
          this.body(e);
        }
        root(e) {
          this.body(e), e.raws.after && this.builder(e.raws.after);
        }
        comment(e) {
          let t = this.raw(e, "left", "commentLeft"),
            r = this.raw(e, "right", "commentRight");
          this.builder("/*" + t + e.text + r + "*/", e);
        }
        decl(e, t) {
          let r = this.raw(e, "between", "colon"),
            i = e.prop + r + this.rawValue(e, "value");
          e.important && (i += e.raws.important || " !important"),
            t && (i += ";"),
            this.builder(i, e);
        }
        rule(e) {
          this.block(e, this.rawValue(e, "selector")),
            e.raws.ownSemicolon && this.builder(e.raws.ownSemicolon, e, "end");
        }
        atrule(e, t) {
          let r = "@" + e.name,
            i = e.params ? this.rawValue(e, "params") : "";
          if (
            (void 0 !== e.raws.afterName
              ? (r += e.raws.afterName)
              : i && (r += " "),
            e.nodes)
          )
            this.block(e, r + i);
          else {
            let n = (e.raws.between || "") + (t ? ";" : "");
            this.builder(r + i + n, e);
          }
        }
        body(e) {
          let t = e.nodes.length - 1;
          for (; t > 0 && "comment" === e.nodes[t].type; ) t -= 1;
          let r = this.raw(e, "semicolon");
          for (let i = 0; i < e.nodes.length; i++) {
            let n = e.nodes[i],
              o = this.raw(n, "before");
            o && this.builder(o), this.stringify(n, t !== i || r);
          }
        }
        block(e, t) {
          let r,
            i = this.raw(e, "between", "beforeOpen");
          this.builder(t + i + "{", e, "start"),
            e.nodes && e.nodes.length
              ? (this.body(e), (r = this.raw(e, "after")))
              : (r = this.raw(e, "after", "emptyBody")),
            r && this.builder(r),
            this.builder("}", e, "end");
        }
        raw(e, t, i) {
          let n;
          if ((i || (i = t), t && ((n = e.raws[t]), void 0 !== n))) return n;
          let o = e.parent;
          if (
            "before" === i &&
            (!o ||
              ("root" === o.type && o.first === e) ||
              (o && "document" === o.type))
          )
            return "";
          if (!o) return r[i];
          let s = e.root();
          if ((s.rawCache || (s.rawCache = {}), void 0 !== s.rawCache[i]))
            return s.rawCache[i];
          if ("before" === i || "after" === i) return this.beforeAfter(e, i);
          {
            let r = "raw" + ((a = i)[0].toUpperCase() + a.slice(1));
            this[r]
              ? (n = this[r](s, e))
              : s.walk((e) => {
                  if (((n = e.raws[t]), void 0 !== n)) return !1;
                });
          }
          var a;
          return void 0 === n && (n = r[i]), (s.rawCache[i] = n), n;
        }
        rawSemicolon(e) {
          let t;
          return (
            e.walk((e) => {
              if (
                e.nodes &&
                e.nodes.length &&
                "decl" === e.last.type &&
                ((t = e.raws.semicolon), void 0 !== t)
              )
                return !1;
            }),
            t
          );
        }
        rawEmptyBody(e) {
          let t;
          return (
            e.walk((e) => {
              if (
                e.nodes &&
                0 === e.nodes.length &&
                ((t = e.raws.after), void 0 !== t)
              )
                return !1;
            }),
            t
          );
        }
        rawIndent(e) {
          if (e.raws.indent) return e.raws.indent;
          let t;
          return (
            e.walk((r) => {
              let i = r.parent;
              if (
                i &&
                i !== e &&
                i.parent &&
                i.parent === e &&
                void 0 !== r.raws.before
              ) {
                let e = r.raws.before.split("\n");
                return (t = e[e.length - 1]), (t = t.replace(/\S/g, "")), !1;
              }
            }),
            t
          );
        }
        rawBeforeComment(e, t) {
          let r;
          return (
            e.walkComments((e) => {
              if (void 0 !== e.raws.before)
                return (
                  (r = e.raws.before),
                  r.includes("\n") && (r = r.replace(/[^\n]+$/, "")),
                  !1
                );
            }),
            void 0 === r
              ? (r = this.raw(t, null, "beforeDecl"))
              : r && (r = r.replace(/\S/g, "")),
            r
          );
        }
        rawBeforeDecl(e, t) {
          let r;
          return (
            e.walkDecls((e) => {
              if (void 0 !== e.raws.before)
                return (
                  (r = e.raws.before),
                  r.includes("\n") && (r = r.replace(/[^\n]+$/, "")),
                  !1
                );
            }),
            void 0 === r
              ? (r = this.raw(t, null, "beforeRule"))
              : r && (r = r.replace(/\S/g, "")),
            r
          );
        }
        rawBeforeRule(e) {
          let t;
          return (
            e.walk((r) => {
              if (
                r.nodes &&
                (r.parent !== e || e.first !== r) &&
                void 0 !== r.raws.before
              )
                return (
                  (t = r.raws.before),
                  t.includes("\n") && (t = t.replace(/[^\n]+$/, "")),
                  !1
                );
            }),
            t && (t = t.replace(/\S/g, "")),
            t
          );
        }
        rawBeforeClose(e) {
          let t;
          return (
            e.walk((e) => {
              if (e.nodes && e.nodes.length > 0 && void 0 !== e.raws.after)
                return (
                  (t = e.raws.after),
                  t.includes("\n") && (t = t.replace(/[^\n]+$/, "")),
                  !1
                );
            }),
            t && (t = t.replace(/\S/g, "")),
            t
          );
        }
        rawBeforeOpen(e) {
          let t;
          return (
            e.walk((e) => {
              if ("decl" !== e.type && ((t = e.raws.between), void 0 !== t))
                return !1;
            }),
            t
          );
        }
        rawColon(e) {
          let t;
          return (
            e.walkDecls((e) => {
              if (void 0 !== e.raws.between)
                return (t = e.raws.between.replace(/[^\s:]/g, "")), !1;
            }),
            t
          );
        }
        beforeAfter(e, t) {
          let r;
          r =
            "decl" === e.type
              ? this.raw(e, null, "beforeDecl")
              : "comment" === e.type
                ? this.raw(e, null, "beforeComment")
                : "before" === t
                  ? this.raw(e, null, "beforeRule")
                  : this.raw(e, null, "beforeClose");
          let i = e.parent,
            n = 0;
          for (; i && "root" !== i.type; ) (n += 1), (i = i.parent);
          if (r.includes("\n")) {
            let t = this.raw(e, null, "indent");
            if (t.length) for (let e = 0; e < n; e++) r += t;
          }
          return r;
        }
        rawValue(e, t) {
          let r = e[t],
            i = e.raws[t];
          return i && i.value === r ? i.raw : r;
        }
      };
      (t.exports = i), (i.default = i);
    }),
    ti = p((e, t) => {
      m();
      var r = ei();
      function i(e, t) {
        new r(t).stringify(e);
      }
      (t.exports = i), (i.default = i);
    }),
    ri = p((e, t) => {
      m();
      var { isClean: r, my: i } = Zr(),
        n = Kr(),
        o = ei(),
        s = ti();
      function a(e, t) {
        let r = new e.constructor();
        for (let i in e) {
          if (!Object.prototype.hasOwnProperty.call(e, i) || "proxyCache" === i)
            continue;
          let n = e[i],
            o = typeof n;
          "parent" === i && "object" === o
            ? t && (r[i] = t)
            : "source" === i
              ? (r[i] = n)
              : Array.isArray(n)
                ? (r[i] = n.map((e) => a(e, r)))
                : ("object" === o && null !== n && (n = a(n)), (r[i] = n));
        }
        return r;
      }
      var l = class {
        constructor(e = {}) {
          (this.raws = {}), (this[r] = !1), (this[i] = !0);
          for (let t in e)
            if ("nodes" === t) {
              this.nodes = [];
              for (let r of e[t])
                "function" == typeof r.clone
                  ? this.append(r.clone())
                  : this.append(r);
            } else this[t] = e[t];
        }
        error(e, t = {}) {
          if (this.source) {
            let { start: r, end: i } = this.rangeBy(t);
            return this.source.input.error(
              e,
              { line: r.line, column: r.column },
              { line: i.line, column: i.column },
              t,
            );
          }
          return new n(e);
        }
        warn(e, t, r) {
          let i = { node: this };
          for (let e in r) i[e] = r[e];
          return e.warn(t, i);
        }
        remove() {
          return (
            this.parent && this.parent.removeChild(this),
            (this.parent = void 0),
            this
          );
        }
        toString(e = s) {
          e.stringify && (e = e.stringify);
          let t = "";
          return (
            e(this, (e) => {
              t += e;
            }),
            t
          );
        }
        assign(e = {}) {
          for (let t in e) this[t] = e[t];
          return this;
        }
        clone(e = {}) {
          let t = a(this);
          for (let r in e) t[r] = e[r];
          return t;
        }
        cloneBefore(e = {}) {
          let t = this.clone(e);
          return this.parent.insertBefore(this, t), t;
        }
        cloneAfter(e = {}) {
          let t = this.clone(e);
          return this.parent.insertAfter(this, t), t;
        }
        replaceWith(...e) {
          if (this.parent) {
            let t = this,
              r = !1;
            for (let i of e)
              i === this
                ? (r = !0)
                : r
                  ? (this.parent.insertAfter(t, i), (t = i))
                  : this.parent.insertBefore(t, i);
            r || this.remove();
          }
          return this;
        }
        next() {
          if (!this.parent) return;
          let e = this.parent.index(this);
          return this.parent.nodes[e + 1];
        }
        prev() {
          if (!this.parent) return;
          let e = this.parent.index(this);
          return this.parent.nodes[e - 1];
        }
        before(e) {
          return this.parent.insertBefore(this, e), this;
        }
        after(e) {
          return this.parent.insertAfter(this, e), this;
        }
        root() {
          let e = this;
          for (; e.parent && "document" !== e.parent.type; ) e = e.parent;
          return e;
        }
        raw(e, t) {
          return new o().raw(this, e, t);
        }
        cleanRaws(e) {
          delete this.raws.before,
            delete this.raws.after,
            e || delete this.raws.between;
        }
        toJSON(e, t) {
          let r = {},
            i = null == t;
          t = t || new Map();
          let n = 0;
          for (let e in this) {
            if (
              !Object.prototype.hasOwnProperty.call(this, e) ||
              "parent" === e ||
              "proxyCache" === e
            )
              continue;
            let i = this[e];
            if (Array.isArray(i))
              r[e] = i.map((e) =>
                "object" == typeof e && e.toJSON ? e.toJSON(null, t) : e,
              );
            else if ("object" == typeof i && i.toJSON) r[e] = i.toJSON(null, t);
            else if ("source" === e) {
              let o = t.get(i.input);
              null == o && ((o = n), t.set(i.input, n), n++),
                (r[e] = { inputId: o, start: i.start, end: i.end });
            } else r[e] = i;
          }
          return i && (r.inputs = [...t.keys()].map((e) => e.toJSON())), r;
        }
        positionInside(e) {
          let t = this.toString(),
            r = this.source.start.column,
            i = this.source.start.line;
          for (let n = 0; n < e; n++)
            "\n" === t[n] ? ((r = 1), (i += 1)) : (r += 1);
          return { line: i, column: r };
        }
        positionBy(e) {
          let t = this.source.start;
          if (e.index) t = this.positionInside(e.index);
          else if (e.word) {
            let r = this.toString().indexOf(e.word);
            -1 !== r && (t = this.positionInside(r));
          }
          return t;
        }
        rangeBy(e) {
          let t = {
              line: this.source.start.line,
              column: this.source.start.column,
            },
            r = this.source.end
              ? {
                  line: this.source.end.line,
                  column: this.source.end.column + 1,
                }
              : { line: t.line, column: t.column + 1 };
          if (e.word) {
            let i = this.toString().indexOf(e.word);
            -1 !== i &&
              ((t = this.positionInside(i)),
              (r = this.positionInside(i + e.word.length)));
          } else
            e.start
              ? (t = { line: e.start.line, column: e.start.column })
              : e.index && (t = this.positionInside(e.index)),
              e.end
                ? (r = { line: e.end.line, column: e.end.column })
                : e.endIndex
                  ? (r = this.positionInside(e.endIndex))
                  : e.index && (r = this.positionInside(e.index + 1));
          return (
            (r.line < t.line || (r.line === t.line && r.column <= t.column)) &&
              (r = { line: t.line, column: t.column + 1 }),
            { start: t, end: r }
          );
        }
        getProxyProcessor() {
          return {
            set: (e, t, r) => (
              e[t] === r ||
                ((e[t] = r),
                ("prop" === t ||
                  "value" === t ||
                  "name" === t ||
                  "params" === t ||
                  "important" === t ||
                  "text" === t) &&
                  e.markDirty()),
              !0
            ),
            get: (e, t) =>
              "proxyOf" === t
                ? e
                : "root" === t
                  ? () => e.root().toProxy()
                  : e[t],
          };
        }
        toProxy() {
          return (
            this.proxyCache ||
              (this.proxyCache = new Proxy(this, this.getProxyProcessor())),
            this.proxyCache
          );
        }
        addToError(e) {
          if (
            ((e.postcssNode = this),
            e.stack && this.source && /\n\s{4}at /.test(e.stack))
          ) {
            let t = this.source;
            e.stack = e.stack.replace(
              /\n\s{4}at /,
              `$&${t.input.from}:${t.start.line}:${t.start.column}$&`,
            );
          }
          return e;
        }
        markDirty() {
          if (this[r]) {
            this[r] = !1;
            let e = this;
            for (; (e = e.parent); ) e[r] = !1;
          }
        }
        get proxyOf() {
          return this;
        }
      };
      (t.exports = l), (l.default = l);
    }),
    ii = p((e, t) => {
      m();
      var r = ri(),
        i = class extends r {
          constructor(e) {
            e &&
              void 0 !== e.value &&
              "string" != typeof e.value &&
              (e = { ...e, value: String(e.value) }),
              super(e),
              (this.type = "decl");
          }
          get variable() {
            return this.prop.startsWith("--") || "$" === this.prop[0];
          }
        };
      (t.exports = i), (i.default = i);
    }),
    ni = p((e, t) => {
      m(),
        (t.exports = function (e, t) {
          return {
            generate: () => {
              let r = "";
              return (
                e(t, (e) => {
                  r += e;
                }),
                [r]
              );
            },
          };
        });
    }),
    oi = p((e, t) => {
      m();
      var r = ri(),
        i = class extends r {
          constructor(e) {
            super(e), (this.type = "comment");
          }
        };
      (t.exports = i), (i.default = i);
    }),
    si = p((e, t) => {
      m();
      var r,
        i,
        n,
        { isClean: o, my: s } = Zr(),
        a = ii(),
        l = oi(),
        c = ri();
      function u(e) {
        return e.map(
          (e) => (e.nodes && (e.nodes = u(e.nodes)), delete e.source, e),
        );
      }
      function d(e) {
        if (((e[o] = !1), e.proxyOf.nodes)) for (let t of e.proxyOf.nodes) d(t);
      }
      var p = class extends c {
        push(e) {
          return (e.parent = this), this.proxyOf.nodes.push(e), this;
        }
        each(e) {
          if (!this.proxyOf.nodes) return;
          let t,
            r,
            i = this.getIterator();
          for (
            ;
            this.indexes[i] < this.proxyOf.nodes.length &&
            ((t = this.indexes[i]),
            (r = e(this.proxyOf.nodes[t], t)),
            !1 !== r);

          )
            this.indexes[i] += 1;
          return delete this.indexes[i], r;
        }
        walk(e) {
          return this.each((t, r) => {
            let i;
            try {
              i = e(t, r);
            } catch (e) {
              throw t.addToError(e);
            }
            return !1 !== i && t.walk && (i = t.walk(e)), i;
          });
        }
        walkDecls(e, t) {
          return t
            ? e instanceof RegExp
              ? this.walk((r, i) => {
                  if ("decl" === r.type && e.test(r.prop)) return t(r, i);
                })
              : this.walk((r, i) => {
                  if ("decl" === r.type && r.prop === e) return t(r, i);
                })
            : ((t = e),
              this.walk((e, r) => {
                if ("decl" === e.type) return t(e, r);
              }));
        }
        walkRules(e, t) {
          return t
            ? e instanceof RegExp
              ? this.walk((r, i) => {
                  if ("rule" === r.type && e.test(r.selector)) return t(r, i);
                })
              : this.walk((r, i) => {
                  if ("rule" === r.type && r.selector === e) return t(r, i);
                })
            : ((t = e),
              this.walk((e, r) => {
                if ("rule" === e.type) return t(e, r);
              }));
        }
        walkAtRules(e, t) {
          return t
            ? e instanceof RegExp
              ? this.walk((r, i) => {
                  if ("atrule" === r.type && e.test(r.name)) return t(r, i);
                })
              : this.walk((r, i) => {
                  if ("atrule" === r.type && r.name === e) return t(r, i);
                })
            : ((t = e),
              this.walk((e, r) => {
                if ("atrule" === e.type) return t(e, r);
              }));
        }
        walkComments(e) {
          return this.walk((t, r) => {
            if ("comment" === t.type) return e(t, r);
          });
        }
        append(...e) {
          for (let t of e) {
            let e = this.normalize(t, this.last);
            for (let t of e) this.proxyOf.nodes.push(t);
          }
          return this.markDirty(), this;
        }
        prepend(...e) {
          e = e.reverse();
          for (let t of e) {
            let e = this.normalize(t, this.first, "prepend").reverse();
            for (let t of e) this.proxyOf.nodes.unshift(t);
            for (let t in this.indexes)
              this.indexes[t] = this.indexes[t] + e.length;
          }
          return this.markDirty(), this;
        }
        cleanRaws(e) {
          if ((super.cleanRaws(e), this.nodes))
            for (let t of this.nodes) t.cleanRaws(e);
        }
        insertBefore(e, t) {
          let r,
            i = 0 === (e = this.index(e)) && "prepend",
            n = this.normalize(t, this.proxyOf.nodes[e], i).reverse();
          for (let t of n) this.proxyOf.nodes.splice(e, 0, t);
          for (let t in this.indexes)
            (r = this.indexes[t]), e <= r && (this.indexes[t] = r + n.length);
          return this.markDirty(), this;
        }
        insertAfter(e, t) {
          e = this.index(e);
          let r,
            i = this.normalize(t, this.proxyOf.nodes[e]).reverse();
          for (let t of i) this.proxyOf.nodes.splice(e + 1, 0, t);
          for (let t in this.indexes)
            (r = this.indexes[t]), e < r && (this.indexes[t] = r + i.length);
          return this.markDirty(), this;
        }
        removeChild(e) {
          let t;
          (e = this.index(e)),
            (this.proxyOf.nodes[e].parent = void 0),
            this.proxyOf.nodes.splice(e, 1);
          for (let r in this.indexes)
            (t = this.indexes[r]), t >= e && (this.indexes[r] = t - 1);
          return this.markDirty(), this;
        }
        removeAll() {
          for (let e of this.proxyOf.nodes) e.parent = void 0;
          return (this.proxyOf.nodes = []), this.markDirty(), this;
        }
        replaceValues(e, t, r) {
          return (
            r || ((r = t), (t = {})),
            this.walkDecls((i) => {
              (t.props && !t.props.includes(i.prop)) ||
                (t.fast && !i.value.includes(t.fast)) ||
                (i.value = i.value.replace(e, r));
            }),
            this.markDirty(),
            this
          );
        }
        every(e) {
          return this.nodes.every(e);
        }
        some(e) {
          return this.nodes.some(e);
        }
        index(e) {
          return "number" == typeof e
            ? e
            : (e.proxyOf && (e = e.proxyOf), this.proxyOf.nodes.indexOf(e));
        }
        get first() {
          if (this.proxyOf.nodes) return this.proxyOf.nodes[0];
        }
        get last() {
          if (this.proxyOf.nodes)
            return this.proxyOf.nodes[this.proxyOf.nodes.length - 1];
        }
        normalize(e, t) {
          if ("string" == typeof e) e = u(r(e).nodes);
          else if (Array.isArray(e)) {
            e = e.slice(0);
            for (let t of e) t.parent && t.parent.removeChild(t, "ignore");
          } else if ("root" === e.type && "document" !== this.type) {
            e = e.nodes.slice(0);
            for (let t of e) t.parent && t.parent.removeChild(t, "ignore");
          } else if (e.type) e = [e];
          else if (e.prop) {
            if (void 0 === e.value)
              throw new Error("Value field is missed in node creation");
            "string" != typeof e.value && (e.value = String(e.value)),
              (e = [new a(e)]);
          } else if (e.selector) e = [new i(e)];
          else if (e.name) e = [new n(e)];
          else {
            if (!e.text) throw new Error("Unknown node type in node creation");
            e = [new l(e)];
          }
          return e.map(
            (e) => (
              e[s] || p.rebuild(e),
              (e = e.proxyOf).parent && e.parent.removeChild(e),
              e[o] && d(e),
              void 0 === e.raws.before &&
                t &&
                void 0 !== t.raws.before &&
                (e.raws.before = t.raws.before.replace(/\S/g, "")),
              (e.parent = this.proxyOf),
              e
            ),
          );
        }
        getProxyProcessor() {
          return {
            set: (e, t, r) => (
              e[t] === r ||
                ((e[t] = r),
                ("name" === t || "params" === t || "selector" === t) &&
                  e.markDirty()),
              !0
            ),
            get: (e, t) =>
              "proxyOf" === t
                ? e
                : e[t]
                  ? "each" === t ||
                    ("string" == typeof t && t.startsWith("walk"))
                    ? (...r) =>
                        e[t](
                          ...r.map((e) =>
                            "function" == typeof e
                              ? (t, r) => e(t.toProxy(), r)
                              : e,
                          ),
                        )
                    : "every" === t || "some" === t
                      ? (r) => e[t]((e, ...t) => r(e.toProxy(), ...t))
                      : "root" === t
                        ? () => e.root().toProxy()
                        : "nodes" === t
                          ? e.nodes.map((e) => e.toProxy())
                          : "first" === t || "last" === t
                            ? e[t].toProxy()
                            : e[t]
                  : e[t],
          };
        }
        getIterator() {
          this.lastEach || (this.lastEach = 0),
            this.indexes || (this.indexes = {}),
            (this.lastEach += 1);
          let e = this.lastEach;
          return (this.indexes[e] = 0), e;
        }
      };
      (p.registerParse = (e) => {
        r = e;
      }),
        (p.registerRule = (e) => {
          i = e;
        }),
        (p.registerAtRule = (e) => {
          n = e;
        }),
        (t.exports = p),
        (p.default = p),
        (p.rebuild = (e) => {
          "atrule" === e.type
            ? Object.setPrototypeOf(e, n.prototype)
            : "rule" === e.type
              ? Object.setPrototypeOf(e, i.prototype)
              : "decl" === e.type
                ? Object.setPrototypeOf(e, a.prototype)
                : "comment" === e.type && Object.setPrototypeOf(e, l.prototype),
            (e[s] = !0),
            e.nodes &&
              e.nodes.forEach((e) => {
                p.rebuild(e);
              });
        });
    }),
    ai = p((e, t) => {
      m();
      var r,
        i,
        n = si(),
        o = class extends n {
          constructor(e) {
            super({ type: "document", ...e }), this.nodes || (this.nodes = []);
          }
          toResult(e = {}) {
            return new r(new i(), this, e).stringify();
          }
        };
      (o.registerLazyResult = (e) => {
        r = e;
      }),
        (o.registerProcessor = (e) => {
          i = e;
        }),
        (t.exports = o),
        (o.default = o);
    }),
    li = p((e, t) => {
      m();
      var r = {};
      t.exports = function (e) {
        r[e] ||
          ((r[e] = !0),
          "undefined" != typeof console && console.warn && console.warn(e));
      };
    }),
    ci = p((e, t) => {
      m();
      var r = class {
        constructor(e, t = {}) {
          if (
            ((this.type = "warning"), (this.text = e), t.node && t.node.source)
          ) {
            let e = t.node.rangeBy(t);
            (this.line = e.start.line),
              (this.column = e.start.column),
              (this.endLine = e.end.line),
              (this.endColumn = e.end.column);
          }
          for (let e in t) this[e] = t[e];
        }
        toString() {
          return this.node
            ? this.node.error(this.text, {
                plugin: this.plugin,
                index: this.index,
                word: this.word,
              }).message
            : this.plugin
              ? this.plugin + ": " + this.text
              : this.text;
        }
      };
      (t.exports = r), (r.default = r);
    }),
    ui = p((e, t) => {
      m();
      var r = ci(),
        i = class {
          constructor(e, t, r) {
            (this.processor = e),
              (this.messages = []),
              (this.root = t),
              (this.opts = r),
              (this.css = void 0),
              (this.map = void 0);
          }
          toString() {
            return this.css;
          }
          warn(e, t = {}) {
            t.plugin ||
              (this.lastPlugin &&
                this.lastPlugin.postcssPlugin &&
                (t.plugin = this.lastPlugin.postcssPlugin));
            let i = new r(e, t);
            return this.messages.push(i), i;
          }
          warnings() {
            return this.messages.filter((e) => "warning" === e.type);
          }
          get content() {
            return this.css;
          }
        };
      (t.exports = i), (i.default = i);
    }),
    di = p((e, t) => {
      m();
      var r = "'".charCodeAt(0),
        i = '"'.charCodeAt(0),
        n = "\\".charCodeAt(0),
        o = "/".charCodeAt(0),
        s = "\n".charCodeAt(0),
        a = " ".charCodeAt(0),
        l = "\f".charCodeAt(0),
        c = "\t".charCodeAt(0),
        u = "\r".charCodeAt(0),
        d = "[".charCodeAt(0),
        p = "]".charCodeAt(0),
        f = "(".charCodeAt(0),
        h = ")".charCodeAt(0),
        g = "{".charCodeAt(0),
        b = "}".charCodeAt(0),
        y = ";".charCodeAt(0),
        w = "*".charCodeAt(0),
        v = ":".charCodeAt(0),
        x = "@".charCodeAt(0),
        k = /[\t\n\f\r "#'()/;[\\\]{}]/g,
        S = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g,
        C = /.[\n"'(/\\]/,
        A = /[\da-f]/i;
      t.exports = function (e, t = {}) {
        let m,
          _,
          O,
          E,
          T,
          P,
          D,
          j,
          I,
          R,
          $ = e.css.valueOf(),
          B = t.ignoreErrors,
          U = $.length,
          M = 0,
          L = [],
          z = [];
        function F(t) {
          throw e.error("Unclosed " + t, M);
        }
        return {
          back: function (e) {
            z.push(e);
          },
          nextToken: function (e) {
            if (z.length) return z.pop();
            if (M >= U) return;
            let t = !!e && e.ignoreUnclosed;
            switch (((m = $.charCodeAt(M)), m)) {
              case s:
              case a:
              case c:
              case u:
              case l:
                _ = M;
                do {
                  (_ += 1), (m = $.charCodeAt(_));
                } while (m === a || m === s || m === c || m === u || m === l);
                (R = ["space", $.slice(M, _)]), (M = _ - 1);
                break;
              case d:
              case p:
              case g:
              case b:
              case v:
              case y:
              case h: {
                let e = String.fromCharCode(m);
                R = [e, e, M];
                break;
              }
              case f:
                if (
                  ((j = L.length ? L.pop()[1] : ""),
                  (I = $.charCodeAt(M + 1)),
                  "url" === j &&
                    I !== r &&
                    I !== i &&
                    I !== a &&
                    I !== s &&
                    I !== c &&
                    I !== l &&
                    I !== u)
                ) {
                  _ = M;
                  do {
                    if (((P = !1), (_ = $.indexOf(")", _ + 1)), -1 === _)) {
                      if (B || t) {
                        _ = M;
                        break;
                      }
                      F("bracket");
                    }
                    for (D = _; $.charCodeAt(D - 1) === n; ) (D -= 1), (P = !P);
                  } while (P);
                  (R = ["brackets", $.slice(M, _ + 1), M, _]), (M = _);
                } else
                  (_ = $.indexOf(")", M + 1)),
                    (E = $.slice(M, _ + 1)),
                    -1 === _ || C.test(E)
                      ? (R = ["(", "(", M])
                      : ((R = ["brackets", E, M, _]), (M = _));
                break;
              case r:
              case i:
                (O = m === r ? "'" : '"'), (_ = M);
                do {
                  if (((P = !1), (_ = $.indexOf(O, _ + 1)), -1 === _)) {
                    if (B || t) {
                      _ = M + 1;
                      break;
                    }
                    F("string");
                  }
                  for (D = _; $.charCodeAt(D - 1) === n; ) (D -= 1), (P = !P);
                } while (P);
                (R = ["string", $.slice(M, _ + 1), M, _]), (M = _);
                break;
              case x:
                (k.lastIndex = M + 1),
                  k.test($),
                  (_ = 0 === k.lastIndex ? $.length - 1 : k.lastIndex - 2),
                  (R = ["at-word", $.slice(M, _ + 1), M, _]),
                  (M = _);
                break;
              case n:
                for (_ = M, T = !0; $.charCodeAt(_ + 1) === n; )
                  (_ += 1), (T = !T);
                if (
                  ((m = $.charCodeAt(_ + 1)),
                  T &&
                    m !== o &&
                    m !== a &&
                    m !== s &&
                    m !== c &&
                    m !== u &&
                    m !== l &&
                    ((_ += 1), A.test($.charAt(_))))
                ) {
                  for (; A.test($.charAt(_ + 1)); ) _ += 1;
                  $.charCodeAt(_ + 1) === a && (_ += 1);
                }
                (R = ["word", $.slice(M, _ + 1), M, _]), (M = _);
                break;
              default:
                m === o && $.charCodeAt(M + 1) === w
                  ? ((_ = $.indexOf("*/", M + 2) + 1),
                    0 === _ && (B || t ? (_ = $.length) : F("comment")),
                    (R = ["comment", $.slice(M, _ + 1), M, _]),
                    (M = _))
                  : ((S.lastIndex = M + 1),
                    S.test($),
                    (_ = 0 === S.lastIndex ? $.length - 1 : S.lastIndex - 2),
                    (R = ["word", $.slice(M, _ + 1), M, _]),
                    L.push(R),
                    (M = _));
            }
            return M++, R;
          },
          endOfFile: function () {
            return 0 === z.length && M >= U;
          },
          position: function () {
            return M;
          },
        };
      };
    }),
    pi = p((e, t) => {
      m();
      var r = si(),
        i = class extends r {
          constructor(e) {
            super(e), (this.type = "atrule");
          }
          append(...e) {
            return this.proxyOf.nodes || (this.nodes = []), super.append(...e);
          }
          prepend(...e) {
            return this.proxyOf.nodes || (this.nodes = []), super.prepend(...e);
          }
        };
      (t.exports = i), (i.default = i), r.registerAtRule(i);
    }),
    fi = p((e, t) => {
      m();
      var r,
        i,
        n = si(),
        o = class extends n {
          constructor(e) {
            super(e), (this.type = "root"), this.nodes || (this.nodes = []);
          }
          removeChild(e, t) {
            let r = this.index(e);
            return (
              !t &&
                0 === r &&
                this.nodes.length > 1 &&
                (this.nodes[1].raws.before = this.nodes[r].raws.before),
              super.removeChild(e)
            );
          }
          normalize(e, t, r) {
            let i = super.normalize(e);
            if (t)
              if ("prepend" === r)
                this.nodes.length > 1
                  ? (t.raws.before = this.nodes[1].raws.before)
                  : delete t.raws.before;
              else if (this.first !== t)
                for (let e of i) e.raws.before = t.raws.before;
            return i;
          }
          toResult(e = {}) {
            return new r(new i(), this, e).stringify();
          }
        };
      (o.registerLazyResult = (e) => {
        r = e;
      }),
        (o.registerProcessor = (e) => {
          i = e;
        }),
        (t.exports = o),
        (o.default = o);
    }),
    hi = p((e, t) => {
      m();
      var r = {
        split(e, t, r) {
          let i = [],
            n = "",
            o = !1,
            s = 0,
            a = !1,
            l = !1;
          for (let r of e)
            l
              ? (l = !1)
              : "\\" === r
                ? (l = !0)
                : a
                  ? r === a && (a = !1)
                  : '"' === r || "'" === r
                    ? (a = r)
                    : "(" === r
                      ? (s += 1)
                      : ")" === r
                        ? s > 0 && (s -= 1)
                        : 0 === s && t.includes(r) && (o = !0),
              o ? ("" !== n && i.push(n.trim()), (n = ""), (o = !1)) : (n += r);
          return (r || "" !== n) && i.push(n.trim()), i;
        },
        space(e) {
          let t = [" ", "\n", "\t"];
          return r.split(e, t);
        },
        comma: (e) => r.split(e, [","], !0),
      };
      (t.exports = r), (r.default = r);
    }),
    mi = p((e, t) => {
      m();
      var r = si(),
        i = hi(),
        n = class extends r {
          constructor(e) {
            super(e), (this.type = "rule"), this.nodes || (this.nodes = []);
          }
          get selectors() {
            return i.comma(this.selector);
          }
          set selectors(e) {
            let t = this.selector ? this.selector.match(/,\s*/) : null,
              r = t ? t[0] : "," + this.raw("between", "beforeOpen");
            this.selector = e.join(r);
          }
        };
      (t.exports = n), (n.default = n), r.registerRule(n);
    }),
    gi = p((e, t) => {
      m();
      var r = ii(),
        i = di(),
        n = oi(),
        o = pi(),
        s = fi(),
        a = mi(),
        l = { empty: !0, space: !0 };
      t.exports = class {
        constructor(e) {
          (this.input = e),
            (this.root = new s()),
            (this.current = this.root),
            (this.spaces = ""),
            (this.semicolon = !1),
            (this.customProperty = !1),
            this.createTokenizer(),
            (this.root.source = {
              input: e,
              start: { offset: 0, line: 1, column: 1 },
            });
        }
        createTokenizer() {
          this.tokenizer = i(this.input);
        }
        parse() {
          let e;
          for (; !this.tokenizer.endOfFile(); )
            switch (((e = this.tokenizer.nextToken()), e[0])) {
              case "space":
                this.spaces += e[1];
                break;
              case ";":
                this.freeSemicolon(e);
                break;
              case "}":
                this.end(e);
                break;
              case "comment":
                this.comment(e);
                break;
              case "at-word":
                this.atrule(e);
                break;
              case "{":
                this.emptyRule(e);
                break;
              default:
                this.other(e);
            }
          this.endFile();
        }
        comment(e) {
          let t = new n();
          this.init(t, e[2]), (t.source.end = this.getPosition(e[3] || e[2]));
          let r = e[1].slice(2, -2);
          if (/^\s*$/.test(r))
            (t.text = ""), (t.raws.left = r), (t.raws.right = "");
          else {
            let e = r.match(/^(\s*)([^]*\S)(\s*)$/);
            (t.text = e[2]), (t.raws.left = e[1]), (t.raws.right = e[3]);
          }
        }
        emptyRule(e) {
          let t = new a();
          this.init(t, e[2]),
            (t.selector = ""),
            (t.raws.between = ""),
            (this.current = t);
        }
        other(e) {
          let t = !1,
            r = null,
            i = !1,
            n = null,
            o = [],
            s = e[1].startsWith("--"),
            a = [],
            l = e;
          for (; l; ) {
            if (((r = l[0]), a.push(l), "(" === r || "[" === r))
              n || (n = l), o.push("(" === r ? ")" : "]");
            else if (s && i && "{" === r) n || (n = l), o.push("}");
            else if (0 === o.length) {
              if (";" === r) {
                if (i) return void this.decl(a, s);
                break;
              }
              if ("{" === r) return void this.rule(a);
              if ("}" === r) {
                this.tokenizer.back(a.pop()), (t = !0);
                break;
              }
              ":" === r && (i = !0);
            } else
              r === o[o.length - 1] && (o.pop(), 0 === o.length && (n = null));
            l = this.tokenizer.nextToken();
          }
          if (
            (this.tokenizer.endOfFile() && (t = !0),
            o.length > 0 && this.unclosedBracket(n),
            t && i)
          ) {
            if (!s)
              for (
                ;
                a.length &&
                ((l = a[a.length - 1][0]), "space" === l || "comment" === l);

              )
                this.tokenizer.back(a.pop());
            this.decl(a, s);
          } else this.unknownWord(a);
        }
        rule(e) {
          e.pop();
          let t = new a();
          this.init(t, e[0][2]),
            (t.raws.between = this.spacesAndCommentsFromEnd(e)),
            this.raw(t, "selector", e),
            (this.current = t);
        }
        decl(e, t) {
          let i = new r();
          this.init(i, e[0][2]);
          let n,
            o = e[e.length - 1];
          for (
            ";" === o[0] && ((this.semicolon = !0), e.pop()),
              i.source.end = this.getPosition(
                o[3] ||
                  o[2] ||
                  (function (e) {
                    for (let t = e.length - 1; t >= 0; t--) {
                      let r = e[t],
                        i = r[3] || r[2];
                      if (i) return i;
                    }
                  })(e),
              );
            "word" !== e[0][0];

          )
            1 === e.length && this.unknownWord(e),
              (i.raws.before += e.shift()[1]);
          for (
            i.source.start = this.getPosition(e[0][2]), i.prop = "";
            e.length;

          ) {
            let t = e[0][0];
            if (":" === t || "space" === t || "comment" === t) break;
            i.prop += e.shift()[1];
          }
          for (i.raws.between = ""; e.length; ) {
            if (((n = e.shift()), ":" === n[0])) {
              i.raws.between += n[1];
              break;
            }
            "word" === n[0] && /\w/.test(n[1]) && this.unknownWord([n]),
              (i.raws.between += n[1]);
          }
          ("_" === i.prop[0] || "*" === i.prop[0]) &&
            ((i.raws.before += i.prop[0]), (i.prop = i.prop.slice(1)));
          let s,
            a = [];
          for (
            ;
            e.length && ((s = e[0][0]), "space" === s || "comment" === s);

          )
            a.push(e.shift());
          this.precheckMissedSemicolon(e);
          for (let t = e.length - 1; t >= 0; t--) {
            if (((n = e[t]), "!important" === n[1].toLowerCase())) {
              i.important = !0;
              let r = this.stringFrom(e, t);
              (r = this.spacesFromEnd(e) + r),
                " !important" !== r && (i.raws.important = r);
              break;
            }
            if ("important" === n[1].toLowerCase()) {
              let r = e.slice(0),
                n = "";
              for (let e = t; e > 0; e--) {
                let t = r[e][0];
                if (0 === n.trim().indexOf("!") && "space" !== t) break;
                n = r.pop()[1] + n;
              }
              0 === n.trim().indexOf("!") &&
                ((i.important = !0), (i.raws.important = n), (e = r));
            }
            if ("space" !== n[0] && "comment" !== n[0]) break;
          }
          e.some((e) => "space" !== e[0] && "comment" !== e[0]) &&
            ((i.raws.between += a.map((e) => e[1]).join("")), (a = [])),
            this.raw(i, "value", a.concat(e), t),
            i.value.includes(":") && !t && this.checkMissedSemicolon(e);
        }
        atrule(e) {
          let t = new o();
          (t.name = e[1].slice(1)),
            "" === t.name && this.unnamedAtrule(t, e),
            this.init(t, e[2]);
          let r,
            i,
            n,
            s = !1,
            a = !1,
            l = [],
            c = [];
          for (; !this.tokenizer.endOfFile(); ) {
            if (
              ((r = (e = this.tokenizer.nextToken())[0]),
              "(" === r || "[" === r
                ? c.push("(" === r ? ")" : "]")
                : "{" === r && c.length > 0
                  ? c.push("}")
                  : r === c[c.length - 1] && c.pop(),
              0 === c.length)
            ) {
              if (";" === r) {
                (t.source.end = this.getPosition(e[2])), (this.semicolon = !0);
                break;
              }
              if ("{" === r) {
                a = !0;
                break;
              }
              if ("}" === r) {
                if (l.length > 0) {
                  for (n = l.length - 1, i = l[n]; i && "space" === i[0]; )
                    i = l[--n];
                  i && (t.source.end = this.getPosition(i[3] || i[2]));
                }
                this.end(e);
                break;
              }
              l.push(e);
            } else l.push(e);
            if (this.tokenizer.endOfFile()) {
              s = !0;
              break;
            }
          }
          (t.raws.between = this.spacesAndCommentsFromEnd(l)),
            l.length
              ? ((t.raws.afterName = this.spacesAndCommentsFromStart(l)),
                this.raw(t, "params", l),
                s &&
                  ((e = l[l.length - 1]),
                  (t.source.end = this.getPosition(e[3] || e[2])),
                  (this.spaces = t.raws.between),
                  (t.raws.between = "")))
              : ((t.raws.afterName = ""), (t.params = "")),
            a && ((t.nodes = []), (this.current = t));
        }
        end(e) {
          this.current.nodes &&
            this.current.nodes.length &&
            (this.current.raws.semicolon = this.semicolon),
            (this.semicolon = !1),
            (this.current.raws.after =
              (this.current.raws.after || "") + this.spaces),
            (this.spaces = ""),
            this.current.parent
              ? ((this.current.source.end = this.getPosition(e[2])),
                (this.current = this.current.parent))
              : this.unexpectedClose(e);
        }
        endFile() {
          this.current.parent && this.unclosedBlock(),
            this.current.nodes &&
              this.current.nodes.length &&
              (this.current.raws.semicolon = this.semicolon),
            (this.current.raws.after =
              (this.current.raws.after || "") + this.spaces);
        }
        freeSemicolon(e) {
          if (((this.spaces += e[1]), this.current.nodes)) {
            let e = this.current.nodes[this.current.nodes.length - 1];
            e &&
              "rule" === e.type &&
              !e.raws.ownSemicolon &&
              ((e.raws.ownSemicolon = this.spaces), (this.spaces = ""));
          }
        }
        getPosition(e) {
          let t = this.input.fromOffset(e);
          return { offset: e, line: t.line, column: t.col };
        }
        init(e, t) {
          this.current.push(e),
            (e.source = { start: this.getPosition(t), input: this.input }),
            (e.raws.before = this.spaces),
            (this.spaces = ""),
            "comment" !== e.type && (this.semicolon = !1);
        }
        raw(e, t, r, i) {
          let n,
            o,
            s,
            a,
            c = r.length,
            u = "",
            d = !0;
          for (let e = 0; e < c; e += 1)
            (n = r[e]),
              (o = n[0]),
              "space" !== o || e !== c - 1 || i
                ? "comment" === o
                  ? ((a = r[e - 1] ? r[e - 1][0] : "empty"),
                    (s = r[e + 1] ? r[e + 1][0] : "empty"),
                    l[a] || l[s] || "," === u.slice(-1)
                      ? (d = !1)
                      : (u += n[1]))
                  : (u += n[1])
                : (d = !1);
          if (!d) {
            let i = r.reduce((e, t) => e + t[1], "");
            e.raws[t] = { value: u, raw: i };
          }
          e[t] = u;
        }
        spacesAndCommentsFromEnd(e) {
          let t,
            r = "";
          for (
            ;
            e.length &&
            ((t = e[e.length - 1][0]), "space" === t || "comment" === t);

          )
            r = e.pop()[1] + r;
          return r;
        }
        spacesAndCommentsFromStart(e) {
          let t,
            r = "";
          for (
            ;
            e.length && ((t = e[0][0]), "space" === t || "comment" === t);

          )
            r += e.shift()[1];
          return r;
        }
        spacesFromEnd(e) {
          let t,
            r = "";
          for (; e.length && ((t = e[e.length - 1][0]), "space" === t); )
            r = e.pop()[1] + r;
          return r;
        }
        stringFrom(e, t) {
          let r = "";
          for (let i = t; i < e.length; i++) r += e[i][1];
          return e.splice(t, e.length - t), r;
        }
        colon(e) {
          let t,
            r,
            i,
            n = 0;
          for (let [o, s] of e.entries()) {
            if (
              ((t = s),
              (r = t[0]),
              "(" === r && (n += 1),
              ")" === r && (n -= 1),
              0 === n && ":" === r)
            ) {
              if (i) {
                if ("word" === i[0] && "progid" === i[1]) continue;
                return o;
              }
              this.doubleColon(t);
            }
            i = t;
          }
          return !1;
        }
        unclosedBracket(e) {
          throw this.input.error(
            "Unclosed bracket",
            { offset: e[2] },
            { offset: e[2] + 1 },
          );
        }
        unknownWord(e) {
          throw this.input.error(
            "Unknown word",
            { offset: e[0][2] },
            { offset: e[0][2] + e[0][1].length },
          );
        }
        unexpectedClose(e) {
          throw this.input.error(
            "Unexpected }",
            { offset: e[2] },
            { offset: e[2] + 1 },
          );
        }
        unclosedBlock() {
          let e = this.current.source.start;
          throw this.input.error("Unclosed block", e.line, e.column);
        }
        doubleColon(e) {
          throw this.input.error(
            "Double colon",
            { offset: e[2] },
            { offset: e[2] + e[1].length },
          );
        }
        unnamedAtrule(e, t) {
          throw this.input.error(
            "At-rule without name",
            { offset: t[2] },
            { offset: t[2] + t[1].length },
          );
        }
        precheckMissedSemicolon() {}
        checkMissedSemicolon(e) {
          let t = this.colon(e);
          if (!1 === t) return;
          let r,
            i = 0;
          for (
            let n = t - 1;
            n >= 0 && ((r = e[n]), "space" === r[0] || ((i += 1), 2 !== i));
            n--
          );
          throw this.input.error(
            "Missed semicolon",
            "word" === r[0] ? r[3] + 1 : r[2],
          );
        }
      };
    }),
    bi = p(() => {
      m();
    }),
    yi = p((e, t) => {
      m();
      t.exports = {
        nanoid: (e = 21) => {
          let t = "",
            r = e;
          for (; r--; )
            t +=
              "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict"[
                (64 * Math.random()) | 0
              ];
          return t;
        },
        customAlphabet:
          (e, t = 21) =>
          (r = t) => {
            let i = "",
              n = r;
            for (; n--; ) i += e[(Math.random() * e.length) | 0];
            return i;
          },
      };
    }),
    wi = p((e, t) => {
      m(), (t.exports = {});
    }),
    vi = p((e, t) => {
      m();
      var { SourceMapConsumer: r, SourceMapGenerator: i } = bi(),
        { fileURLToPath: n, pathToFileURL: o } = (Jr(), Gr),
        { resolve: s, isAbsolute: a } = (k(), b),
        { nanoid: l } = yi(),
        c = Xr(),
        u = Kr(),
        d = wi(),
        p = Symbol("fromOffsetCache"),
        f = Boolean(r && i),
        h = Boolean(s && a),
        g = class {
          constructor(e, t = {}) {
            if (null == e || ("object" == typeof e && !e.toString))
              throw new Error(`PostCSS received ${e} instead of CSS string`);
            if (
              ((this.css = e.toString()),
              "\ufeff" === this.css[0] || "￾" === this.css[0]
                ? ((this.hasBOM = !0), (this.css = this.css.slice(1)))
                : (this.hasBOM = !1),
              t.from &&
                (!h || /^\w+:\/\//.test(t.from) || a(t.from)
                  ? (this.file = t.from)
                  : (this.file = s(t.from))),
              h && f)
            ) {
              let e = new d(this.css, t);
              if (e.text) {
                this.map = e;
                let t = e.consumer().file;
                !this.file && t && (this.file = this.mapResolve(t));
              }
            }
            this.file || (this.id = "<input css " + l(6) + ">"),
              this.map && (this.map.file = this.from);
          }
          fromOffset(e) {
            let t, r;
            if (this[p]) r = this[p];
            else {
              let e = this.css.split("\n");
              r = new Array(e.length);
              let t = 0;
              for (let i = 0, n = e.length; i < n; i++)
                (r[i] = t), (t += e[i].length + 1);
              this[p] = r;
            }
            t = r[r.length - 1];
            let i = 0;
            if (e >= t) i = r.length - 1;
            else {
              let t,
                n = r.length - 2;
              for (; i < n; )
                if (((t = i + ((n - i) >> 1)), e < r[t])) n = t - 1;
                else {
                  if (!(e >= r[t + 1])) {
                    i = t;
                    break;
                  }
                  i = t + 1;
                }
            }
            return { line: i + 1, col: e - r[i] + 1 };
          }
          error(e, t, r, i = {}) {
            let n, s, a;
            if (t && "object" == typeof t) {
              let e = t,
                i = r;
              if ("number" == typeof t.offset) {
                let i = this.fromOffset(e.offset);
                (t = i.line), (r = i.col);
              } else (t = e.line), (r = e.column);
              if ("number" == typeof i.offset) {
                let e = this.fromOffset(i.offset);
                (s = e.line), (a = e.col);
              } else (s = i.line), (a = i.column);
            } else if (!r) {
              let e = this.fromOffset(t);
              (t = e.line), (r = e.col);
            }
            let l = this.origin(t, r, s, a);
            return (
              (n = l
                ? new u(
                    e,
                    void 0 === l.endLine
                      ? l.line
                      : { line: l.line, column: l.column },
                    void 0 === l.endLine
                      ? l.column
                      : { line: l.endLine, column: l.endColumn },
                    l.source,
                    l.file,
                    i.plugin,
                  )
                : new u(
                    e,
                    void 0 === s ? t : { line: t, column: r },
                    void 0 === s ? r : { line: s, column: a },
                    this.css,
                    this.file,
                    i.plugin,
                  )),
              (n.input = {
                line: t,
                column: r,
                endLine: s,
                endColumn: a,
                source: this.css,
              }),
              this.file &&
                (o && (n.input.url = o(this.file).toString()),
                (n.input.file = this.file)),
              n
            );
          }
          origin(e, t, r, i) {
            if (!this.map) return !1;
            let s,
              l,
              c = this.map.consumer(),
              u = c.originalPositionFor({ line: e, column: t });
            if (!u.source) return !1;
            "number" == typeof r &&
              (s = c.originalPositionFor({ line: r, column: i })),
              (l = a(u.source)
                ? o(u.source)
                : new URL(
                    u.source,
                    this.map.consumer().sourceRoot || o(this.map.mapFile),
                  ));
            let d = {
              url: l.toString(),
              line: u.line,
              column: u.column,
              endLine: s && s.line,
              endColumn: s && s.column,
            };
            if ("file:" === l.protocol) {
              if (!n)
                throw new Error(
                  "file: protocol is not available in this PostCSS build",
                );
              d.file = n(l);
            }
            let p = c.sourceContentFor(u.source);
            return p && (d.source = p), d;
          }
          mapResolve(e) {
            return /^\w+:\/\//.test(e)
              ? e
              : s(this.map.consumer().sourceRoot || this.map.root || ".", e);
          }
          get from() {
            return this.file || this.id;
          }
          toJSON() {
            let e = {};
            for (let t of ["hasBOM", "css", "file", "id"])
              null != this[t] && (e[t] = this[t]);
            return (
              this.map &&
                ((e.map = { ...this.map }),
                e.map.consumerCache && (e.map.consumerCache = void 0)),
              e
            );
          }
        };
      (t.exports = g),
        (g.default = g),
        c && c.registerInput && c.registerInput(g);
    }),
    xi = p((e, t) => {
      m();
      var r = si(),
        i = gi(),
        n = vi();
      function o(e, t) {
        let r = new n(e, t),
          o = new i(r);
        try {
          o.parse();
        } catch (e) {
          throw e;
        }
        return o.root;
      }
      (t.exports = o), (o.default = o), r.registerParse(o);
    }),
    ki = p((e, t) => {
      m();
      var { isClean: r, my: i } = Zr(),
        n = ni(),
        o = ti(),
        s = si(),
        a = ai(),
        l = (li(), ui()),
        c = xi(),
        u = fi(),
        d = {
          document: "Document",
          root: "Root",
          atrule: "AtRule",
          rule: "Rule",
          decl: "Declaration",
          comment: "Comment",
        },
        p = {
          postcssPlugin: !0,
          prepare: !0,
          Once: !0,
          Document: !0,
          Root: !0,
          Declaration: !0,
          Rule: !0,
          AtRule: !0,
          Comment: !0,
          DeclarationExit: !0,
          RuleExit: !0,
          AtRuleExit: !0,
          CommentExit: !0,
          RootExit: !0,
          DocumentExit: !0,
          OnceExit: !0,
        },
        f = { postcssPlugin: !0, prepare: !0, Once: !0 };
      function h(e) {
        return "object" == typeof e && "function" == typeof e.then;
      }
      function g(e) {
        let t = !1,
          r = d[e.type];
        return (
          "decl" === e.type
            ? (t = e.prop.toLowerCase())
            : "atrule" === e.type && (t = e.name.toLowerCase()),
          t && e.append
            ? [r, r + "-" + t, 0, r + "Exit", r + "Exit-" + t]
            : t
              ? [r, r + "-" + t, r + "Exit", r + "Exit-" + t]
              : e.append
                ? [r, 0, r + "Exit"]
                : [r, r + "Exit"]
        );
      }
      function b(e) {
        let t;
        return (
          (t =
            "document" === e.type
              ? ["Document", 0, "DocumentExit"]
              : "root" === e.type
                ? ["Root", 0, "RootExit"]
                : g(e)),
          {
            node: e,
            events: t,
            eventIndex: 0,
            visitors: [],
            visitorIndex: 0,
            iterator: 0,
          }
        );
      }
      function y(e) {
        return (e[r] = !1), e.nodes && e.nodes.forEach((e) => y(e)), e;
      }
      var w = {},
        v = class {
          constructor(e, t, r) {
            let n;
            if (
              ((this.stringified = !1),
              (this.processed = !1),
              "object" != typeof t ||
                null === t ||
                ("root" !== t.type && "document" !== t.type))
            )
              if (t instanceof v || t instanceof l)
                (n = y(t.root)),
                  t.map &&
                    (void 0 === r.map && (r.map = {}),
                    r.map.inline || (r.map.inline = !1),
                    (r.map.prev = t.map));
              else {
                let e = c;
                r.syntax && (e = r.syntax.parse),
                  r.parser && (e = r.parser),
                  e.parse && (e = e.parse);
                try {
                  n = e(t, r);
                } catch (e) {
                  (this.processed = !0), (this.error = e);
                }
                n && !n[i] && s.rebuild(n);
              }
            else n = y(t);
            (this.result = new l(e, n, r)),
              (this.helpers = { ...w, result: this.result, postcss: w }),
              (this.plugins = this.processor.plugins.map((e) =>
                "object" == typeof e && e.prepare
                  ? { ...e, ...e.prepare(this.result) }
                  : e,
              ));
          }
          get [Symbol.toStringTag]() {
            return "LazyResult";
          }
          get processor() {
            return this.result.processor;
          }
          get opts() {
            return this.result.opts;
          }
          get css() {
            return this.stringify().css;
          }
          get content() {
            return this.stringify().content;
          }
          get map() {
            return this.stringify().map;
          }
          get root() {
            return this.sync().root;
          }
          get messages() {
            return this.sync().messages;
          }
          warnings() {
            return this.sync().warnings();
          }
          toString() {
            return this.css;
          }
          then(e, t) {
            return this.async().then(e, t);
          }
          catch(e) {
            return this.async().catch(e);
          }
          finally(e) {
            return this.async().then(e, e);
          }
          async() {
            return this.error
              ? Promise.reject(this.error)
              : this.processed
                ? Promise.resolve(this.result)
                : (this.processing || (this.processing = this.runAsync()),
                  this.processing);
          }
          sync() {
            if (this.error) throw this.error;
            if (this.processed) return this.result;
            if (((this.processed = !0), this.processing))
              throw this.getAsyncError();
            for (let e of this.plugins) {
              if (h(this.runOnRoot(e))) throw this.getAsyncError();
            }
            if ((this.prepareVisitors(), this.hasListener)) {
              let e = this.result.root;
              for (; !e[r]; ) (e[r] = !0), this.walkSync(e);
              if (this.listeners.OnceExit)
                if ("document" === e.type)
                  for (let t of e.nodes)
                    this.visitSync(this.listeners.OnceExit, t);
                else this.visitSync(this.listeners.OnceExit, e);
            }
            return this.result;
          }
          stringify() {
            if (this.error) throw this.error;
            if (this.stringified) return this.result;
            (this.stringified = !0), this.sync();
            let e = this.result.opts,
              t = o;
            e.syntax && (t = e.syntax.stringify),
              e.stringifier && (t = e.stringifier),
              t.stringify && (t = t.stringify);
            let r = new n(t, this.result.root, this.result.opts).generate();
            return (
              (this.result.css = r[0]), (this.result.map = r[1]), this.result
            );
          }
          walkSync(e) {
            e[r] = !0;
            let t = g(e);
            for (let i of t)
              if (0 === i)
                e.nodes &&
                  e.each((e) => {
                    e[r] || this.walkSync(e);
                  });
              else {
                let t = this.listeners[i];
                if (t && this.visitSync(t, e.toProxy())) return;
              }
          }
          visitSync(e, t) {
            for (let [r, i] of e) {
              let e;
              this.result.lastPlugin = r;
              try {
                e = i(t, this.helpers);
              } catch (e) {
                throw this.handleError(e, t.proxyOf);
              }
              if ("root" !== t.type && "document" !== t.type && !t.parent)
                return !0;
              if (h(e)) throw this.getAsyncError();
            }
          }
          runOnRoot(e) {
            this.result.lastPlugin = e;
            try {
              if ("object" == typeof e && e.Once) {
                if ("document" === this.result.root.type) {
                  let t = this.result.root.nodes.map((t) =>
                    e.Once(t, this.helpers),
                  );
                  return h(t[0]) ? Promise.all(t) : t;
                }
                return e.Once(this.result.root, this.helpers);
              }
              if ("function" == typeof e)
                return e(this.result.root, this.result);
            } catch (e) {
              throw this.handleError(e);
            }
          }
          getAsyncError() {
            throw new Error(
              "Use process(css).then(cb) to work with async plugins",
            );
          }
          handleError(e, t) {
            let r = this.result.lastPlugin;
            try {
              t && t.addToError(e),
                (this.error = e),
                "CssSyntaxError" !== e.name || e.plugin
                  ? r.postcssVersion
                  : ((e.plugin = r.postcssPlugin), e.setMessage());
            } catch (e) {
              console && console.error && console.error(e);
            }
            return e;
          }
          async runAsync() {
            this.plugin = 0;
            for (let e = 0; e < this.plugins.length; e++) {
              let t = this.plugins[e],
                r = this.runOnRoot(t);
              if (h(r))
                try {
                  await r;
                } catch (e) {
                  throw this.handleError(e);
                }
            }
            if ((this.prepareVisitors(), this.hasListener)) {
              let e = this.result.root;
              for (; !e[r]; ) {
                e[r] = !0;
                let t = [b(e)];
                for (; t.length > 0; ) {
                  let e = this.visitTick(t);
                  if (h(e))
                    try {
                      await e;
                    } catch (e) {
                      let r = t[t.length - 1].node;
                      throw this.handleError(e, r);
                    }
                }
              }
              if (this.listeners.OnceExit)
                for (let [t, r] of this.listeners.OnceExit) {
                  this.result.lastPlugin = t;
                  try {
                    if ("document" === e.type) {
                      let t = e.nodes.map((e) => r(e, this.helpers));
                      await Promise.all(t);
                    } else await r(e, this.helpers);
                  } catch (e) {
                    throw this.handleError(e);
                  }
                }
            }
            return (this.processed = !0), this.stringify();
          }
          prepareVisitors() {
            this.listeners = {};
            let e = (e, t, r) => {
              this.listeners[t] || (this.listeners[t] = []),
                this.listeners[t].push([e, r]);
            };
            for (let t of this.plugins)
              if ("object" == typeof t)
                for (let r in t) {
                  if (!p[r] && /^[A-Z]/.test(r))
                    throw new Error(
                      `Unknown event ${r} in ${t.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`,
                    );
                  if (!f[r])
                    if ("object" == typeof t[r])
                      for (let i in t[r])
                        e(
                          t,
                          "*" === i ? r : r + "-" + i.toLowerCase(),
                          t[r][i],
                        );
                    else "function" == typeof t[r] && e(t, r, t[r]);
                }
            this.hasListener = Object.keys(this.listeners).length > 0;
          }
          visitTick(e) {
            let t = e[e.length - 1],
              { node: i, visitors: n } = t;
            if ("root" !== i.type && "document" !== i.type && !i.parent)
              return void e.pop();
            if (n.length > 0 && t.visitorIndex < n.length) {
              let [e, r] = n[t.visitorIndex];
              (t.visitorIndex += 1),
                t.visitorIndex === n.length &&
                  ((t.visitors = []), (t.visitorIndex = 0)),
                (this.result.lastPlugin = e);
              try {
                return r(i.toProxy(), this.helpers);
              } catch (e) {
                throw this.handleError(e, i);
              }
            }
            if (0 !== t.iterator) {
              let n,
                o = t.iterator;
              for (; (n = i.nodes[i.indexes[o]]); )
                if (((i.indexes[o] += 1), !n[r]))
                  return (n[r] = !0), void e.push(b(n));
              (t.iterator = 0), delete i.indexes[o];
            }
            let o = t.events;
            for (; t.eventIndex < o.length; ) {
              let e = o[t.eventIndex];
              if (((t.eventIndex += 1), 0 === e))
                return void (
                  i.nodes &&
                  i.nodes.length &&
                  ((i[r] = !0), (t.iterator = i.getIterator()))
                );
              if (this.listeners[e])
                return void (t.visitors = this.listeners[e]);
            }
            e.pop();
          }
        };
      (v.registerPostcss = (e) => {
        w = e;
      }),
        (t.exports = v),
        (v.default = v),
        u.registerLazyResult(v),
        a.registerLazyResult(v);
    }),
    Si = p((e, t) => {
      m();
      var r = ni(),
        i = ti(),
        n = (li(), xi()),
        o = ui(),
        s = class {
          constructor(e, t, n) {
            (t = t.toString()),
              (this.stringified = !1),
              (this._processor = e),
              (this._css = t),
              (this._opts = n),
              (this._map = void 0);
            let s,
              a = i;
            (this.result = new o(this._processor, s, this._opts)),
              (this.result.css = t);
            let l = this;
            Object.defineProperty(this.result, "root", { get: () => l.root });
            let c = new r(a, s, this._opts, t);
            if (c.isMap()) {
              let [e, t] = c.generate();
              e && (this.result.css = e), t && (this.result.map = t);
            }
          }
          get [Symbol.toStringTag]() {
            return "NoWorkResult";
          }
          get processor() {
            return this.result.processor;
          }
          get opts() {
            return this.result.opts;
          }
          get css() {
            return this.result.css;
          }
          get content() {
            return this.result.css;
          }
          get map() {
            return this.result.map;
          }
          get root() {
            if (this._root) return this._root;
            let e,
              t = n;
            try {
              e = t(this._css, this._opts);
            } catch (e) {
              this.error = e;
            }
            if (this.error) throw this.error;
            return (this._root = e), e;
          }
          get messages() {
            return [];
          }
          warnings() {
            return [];
          }
          toString() {
            return this._css;
          }
          then(e, t) {
            return this.async().then(e, t);
          }
          catch(e) {
            return this.async().catch(e);
          }
          finally(e) {
            return this.async().then(e, e);
          }
          async() {
            return this.error
              ? Promise.reject(this.error)
              : Promise.resolve(this.result);
          }
          sync() {
            if (this.error) throw this.error;
            return this.result;
          }
        };
      (t.exports = s), (s.default = s);
    }),
    Ci = p((e, t) => {
      m();
      var r = Si(),
        i = ki(),
        n = ai(),
        o = fi(),
        s = class {
          constructor(e = []) {
            (this.version = "8.4.14"), (this.plugins = this.normalize(e));
          }
          use(e) {
            return (
              (this.plugins = this.plugins.concat(this.normalize([e]))), this
            );
          }
          process(e, t = {}) {
            return 0 === this.plugins.length &&
              void 0 === t.parser &&
              void 0 === t.stringifier &&
              void 0 === t.syntax
              ? new r(this, e, t)
              : new i(this, e, t);
          }
          normalize(e) {
            let t = [];
            for (let r of e)
              if (
                (!0 === r.postcss ? (r = r()) : r.postcss && (r = r.postcss),
                "object" == typeof r && Array.isArray(r.plugins))
              )
                t = t.concat(r.plugins);
              else if ("object" == typeof r && r.postcssPlugin) t.push(r);
              else if ("function" == typeof r) t.push(r);
              else if ("object" != typeof r || (!r.parse && !r.stringify))
                throw new Error(r + " is not a PostCSS plugin");
            return t;
          }
        };
      (t.exports = s),
        (s.default = s),
        o.registerProcessor(s),
        n.registerProcessor(s);
    }),
    Ai = p((e, t) => {
      m();
      var r = ii(),
        i = wi(),
        n = oi(),
        o = pi(),
        s = vi(),
        a = fi(),
        l = mi();
      function c(e, t) {
        if (Array.isArray(e)) return e.map((e) => c(e));
        let { inputs: u, ...d } = e;
        if (u) {
          t = [];
          for (let e of u) {
            let r = { ...e, __proto__: s.prototype };
            r.map && (r.map = { ...r.map, __proto__: i.prototype }), t.push(r);
          }
        }
        if ((d.nodes && (d.nodes = e.nodes.map((e) => c(e, t))), d.source)) {
          let { inputId: e, ...r } = d.source;
          (d.source = r), null != e && (d.source.input = t[e]);
        }
        if ("root" === d.type) return new a(d);
        if ("decl" === d.type) return new r(d);
        if ("rule" === d.type) return new l(d);
        if ("comment" === d.type) return new n(d);
        if ("atrule" === d.type) return new o(d);
        throw new Error("Unknown node type: " + e.type);
      }
      (t.exports = c), (c.default = c);
    }),
    _i = p((t, r) => {
      m();
      var i = Kr(),
        n = ii(),
        o = ki(),
        s = si(),
        a = Ci(),
        l = ti(),
        c = Ai(),
        u = ai(),
        d = ci(),
        p = oi(),
        f = pi(),
        h = ui(),
        g = vi(),
        b = xi(),
        y = hi(),
        w = mi(),
        v = fi(),
        x = ri();
      function k(...e) {
        return 1 === e.length && Array.isArray(e[0]) && (e = e[0]), new a(e);
      }
      (k.plugin = function (t, r) {
        let i,
          n = !1;
        function o(...i) {
          console &&
            console.warn &&
            !n &&
            ((n = !0),
            console.warn(
              t +
                ": postcss.plugin was deprecated. Migration guide:\nhttps://evilmartians.com/chronicles/postcss-8-plugin-migration",
            ),
            e.env.LANG &&
              e.env.LANG.startsWith("cn") &&
              console.warn(
                t +
                  ": 里面 postcss.plugin 被弃用. 迁移指南:\nhttps://www.w3ctech.com/topic/2226",
              ));
          let o = r(...i);
          return (o.postcssPlugin = t), (o.postcssVersion = new a().version), o;
        }
        return (
          Object.defineProperty(o, "postcss", {
            get: () => (i || (i = o()), i),
          }),
          (o.process = function (e, t, r) {
            return k([o(r)]).process(e, t);
          }),
          o
        );
      }),
        (k.stringify = l),
        (k.parse = b),
        (k.fromJSON = c),
        (k.list = y),
        (k.comment = (e) => new p(e)),
        (k.atRule = (e) => new f(e)),
        (k.decl = (e) => new n(e)),
        (k.rule = (e) => new w(e)),
        (k.root = (e) => new v(e)),
        (k.document = (e) => new u(e)),
        (k.CssSyntaxError = i),
        (k.Declaration = n),
        (k.Container = s),
        (k.Processor = a),
        (k.Document = u),
        (k.Comment = p),
        (k.Warning = d),
        (k.AtRule = f),
        (k.Result = h),
        (k.Input = g),
        (k.Rule = w),
        (k.Root = v),
        (k.Node = x),
        o.registerPostcss(k),
        (r.exports = k),
        (k.default = k);
    }),
    Oi = d(() => {
      m(),
        (Hr = h(_i())),
        (Qr = Hr.default),
        Hr.default.stringify,
        Hr.default.fromJSON,
        Hr.default.plugin,
        Hr.default.parse,
        Hr.default.list,
        Hr.default.document,
        Hr.default.comment,
        Hr.default.atRule,
        Hr.default.rule,
        Hr.default.decl,
        Hr.default.root,
        Hr.default.CssSyntaxError,
        Hr.default.Declaration,
        Hr.default.Container,
        Hr.default.Processor,
        Hr.default.Document,
        Hr.default.Comment,
        Hr.default.Warning,
        Hr.default.AtRule,
        Hr.default.Result,
        Hr.default.Input,
        Hr.default.Rule,
        Hr.default.Root,
        Hr.default.Node;
    }),
    Ei = p((e, t) => {
      m(),
        (t.exports = function (e, t, r, i, n) {
          for (t = t.split ? t.split(".") : t, i = 0; i < t.length; i++)
            e = e ? e[t[i]] : n;
          return e === n ? r : e;
        });
    });
  function Ti(e) {
    return ["fontSize", "outline"].includes(e)
      ? (e) => (
          "function" == typeof e && (e = e({})),
          Array.isArray(e) && (e = e[0]),
          e
        )
      : [
            "fontFamily",
            "boxShadow",
            "transitionProperty",
            "transitionDuration",
            "transitionDelay",
            "transitionTimingFunction",
            "backgroundImage",
            "backgroundSize",
            "backgroundColor",
            "cursor",
            "animation",
          ].includes(e)
        ? (e) => (
            "function" == typeof e && (e = e({})),
            Array.isArray(e) && (e = e.join(", ")),
            e
          )
        : [
              "gridTemplateColumns",
              "gridTemplateRows",
              "objectPosition",
            ].includes(e)
          ? (e) => (
              "function" == typeof e && (e = e({})),
              "string" == typeof e && (e = Qr.list.comma(e).join(" ")),
              e
            )
          : (e, t = {}) => ("function" == typeof e && (e = e(t)), e);
  }
  var Pi,
    Di,
    ji = d(() => {
      m(), Oi();
    }),
    Ii = p((e, t) => {
      m();
      var r = ze();
      function i(e, t) {
        let i,
          n = r((e) => {
            i = e;
          });
        try {
          n.processSync(e);
        } catch (r) {
          throw e.includes(":")
            ? t
              ? t.error("Missed semicolon")
              : r
            : t
              ? t.error(r.message)
              : r;
        }
        return i.at(0);
      }
      function n(e, t) {
        let r = !1;
        return (
          e.each((e) => {
            if ("nesting" === e.type) {
              let n = t.clone();
              "&" !== e.value
                ? e.replaceWith(i(e.value.replace("&", n.toString())))
                : e.replaceWith(n),
                (r = !0);
            } else e.nodes && n(e, t) && (r = !0);
          }),
          r
        );
      }
      function o(e, t) {
        let o = [];
        return (
          e.selectors.forEach((s) => {
            let a = i(s, e);
            t.selectors.forEach((e) => {
              if (e.length) {
                let s = i(e, t);
                n(s, a) ||
                  (s.prepend(r.combinator({ value: " " })),
                  s.prepend(a.clone())),
                  o.push(s.toString());
              }
            });
          }),
          o
        );
      }
      function s(e, t) {
        return e && "comment" === e.type ? (t.after(e), e) : t;
      }
      function a(e, t, r, i) {
        let n = new i({ selector: e, nodes: [] });
        for (let e of t) n.append(e);
        return r.after(n), n;
      }
      function l(e, t) {
        let r = {};
        for (let t of e) r[t] = !0;
        if (t)
          for (let e of t) {
            r[e.replace(/^@/, "")] = !0;
          }
        return r;
      }
      (t.exports = (e = {}) => {
        let t = l(["media", "supports"], e.bubble),
          r = (function (e) {
            return function t(r, i, n) {
              let s = [];
              if (
                (i.each((i) => {
                  "comment" === i.type || "decl" === i.type
                    ? s.push(i)
                    : "rule" === i.type && n
                      ? (i.selectors = o(r, i))
                      : "atrule" === i.type &&
                        (i.nodes && e[i.name] ? t(r, i, !0) : s.push(i));
                }),
                n && s.length)
              ) {
                let e = r.clone({ nodes: [] });
                for (let t of s) e.append(t);
                i.prepend(e);
              }
            };
          })(t),
          i = l(
            [
              "document",
              "font-face",
              "keyframes",
              "-webkit-keyframes",
              "-moz-keyframes",
            ],
            e.unwrap,
          ),
          n = e.preserveEmpty;
        return {
          postcssPlugin: "postcss-nested",
          Rule(e, { Rule: l }) {
            let c = !1,
              u = e,
              d = !1,
              p = [];
            e.each((n) => {
              if ("rule" === n.type)
                p.length && ((u = a(e.selector, p, u, l)), (p = [])),
                  (d = !0),
                  (c = !0),
                  (n.selectors = o(e, n)),
                  (u = s(n.prev(), u)),
                  u.after(n),
                  (u = n);
              else if ("atrule" === n.type)
                if (
                  (p.length && ((u = a(e.selector, p, u, l)), (p = [])),
                  "at-root" === n.name)
                ) {
                  (c = !0), r(e, n, !1);
                  let t = n.nodes;
                  n.params && (t = new l({ selector: n.params, nodes: t })),
                    u.after(t),
                    (u = t),
                    n.remove();
                } else
                  t[n.name]
                    ? ((d = !0),
                      (c = !0),
                      r(e, n, !0),
                      (u = s(n.prev(), u)),
                      u.after(n),
                      (u = n))
                    : i[n.name]
                      ? ((d = !0),
                        (c = !0),
                        r(e, n, !1),
                        (u = s(n.prev(), u)),
                        u.after(n),
                        (u = n))
                      : d && p.push(n);
              else "decl" === n.type && d && p.push(n);
            }),
              p.length && (u = a(e.selector, p, u, l)),
              c &&
                !0 !== n &&
                ((e.raws.semicolon = !0), 0 === e.nodes.length && e.remove());
          },
        };
      }),
        (t.exports.postcss = !0);
    }),
    Ri = p((e, t) => {
      m();
      var r = /-(\w|$)/g,
        i = (e, t) => t.toUpperCase();
      t.exports = (e) =>
        "float" === (e = e.toLowerCase())
          ? "cssFloat"
          : e.startsWith("-ms-")
            ? e.substr(1).replace(r, i)
            : e.replace(r, i);
    }),
    $i = p((e, t) => {
      m();
      var r = Ri(),
        i = {
          boxFlex: !0,
          boxFlexGroup: !0,
          columnCount: !0,
          flex: !0,
          flexGrow: !0,
          flexPositive: !0,
          flexShrink: !0,
          flexNegative: !0,
          fontWeight: !0,
          lineClamp: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          tabSize: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
          fillOpacity: !0,
          strokeDashoffset: !0,
          strokeOpacity: !0,
          strokeWidth: !0,
        };
      function n(e) {
        return void 0 === e.nodes || o(e);
      }
      function o(e) {
        let t,
          s = {};
        return (
          e.each((e) => {
            if ("atrule" === e.type)
              (t = "@" + e.name),
                e.params && (t += " " + e.params),
                void 0 === s[t]
                  ? (s[t] = n(e))
                  : Array.isArray(s[t])
                    ? s[t].push(n(e))
                    : (s[t] = [s[t], n(e)]);
            else if ("rule" === e.type) {
              let t = o(e);
              if (s[e.selector]) for (let r in t) s[e.selector][r] = t[r];
              else s[e.selector] = t;
            } else if ("decl" === e.type) {
              t = "-" === e.prop[0] && "-" === e.prop[1] ? e.prop : r(e.prop);
              let n = e.value;
              !isNaN(e.value) && i[t] && (n = parseFloat(e.value)),
                e.important && (n += " !important"),
                void 0 === s[t]
                  ? (s[t] = n)
                  : Array.isArray(s[t])
                    ? s[t].push(n)
                    : (s[t] = [s[t], n]);
            }
          }),
          s
        );
      }
      t.exports = o;
    }),
    Bi = p((e, t) => {
      m();
      var r = _i(),
        i = /\s*!important\s*$/i,
        n = {
          "box-flex": !0,
          "box-flex-group": !0,
          "column-count": !0,
          flex: !0,
          "flex-grow": !0,
          "flex-positive": !0,
          "flex-shrink": !0,
          "flex-negative": !0,
          "font-weight": !0,
          "line-clamp": !0,
          "line-height": !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          "tab-size": !0,
          widows: !0,
          "z-index": !0,
          zoom: !0,
          "fill-opacity": !0,
          "stroke-dashoffset": !0,
          "stroke-opacity": !0,
          "stroke-width": !0,
        };
      function o(e, t, o) {
        !1 === o ||
          null === o ||
          (t.startsWith("--") ||
            (t = (function (e) {
              return e
                .replace(/([A-Z])/g, "-$1")
                .replace(/^ms-/, "-ms-")
                .toLowerCase();
            })(t)),
          "number" == typeof o &&
            (0 === o || n[t] ? (o = o.toString()) : (o += "px")),
          "css-float" === t && (t = "float"),
          i.test(o)
            ? ((o = o.replace(i, "")),
              e.push(r.decl({ prop: t, value: o, important: !0 })))
            : e.push(r.decl({ prop: t, value: o })));
      }
      function s(e, t, i) {
        let n = r.atRule({ name: t[1], params: t[3] || "" });
        "object" == typeof i && ((n.nodes = []), a(i, n)), e.push(n);
      }
      function a(e, t) {
        let i, n, l;
        for (i in e)
          if (((n = e[i]), null != n))
            if ("@" === i[0]) {
              let e = i.match(/@(\S+)(\s+([\W\w]*)\s*)?/);
              if (Array.isArray(n)) for (let r of n) s(t, e, r);
              else s(t, e, n);
            } else if (Array.isArray(n)) for (let e of n) o(t, i, e);
            else
              "object" == typeof n
                ? ((l = r.rule({ selector: i })), a(n, l), t.push(l))
                : o(t, i, n);
      }
      t.exports = function (e) {
        let t = r.root();
        return a(e, t), t;
      };
    }),
    Ui = p((e, t) => {
      m();
      var r = $i();
      t.exports = function (e) {
        return (
          console &&
            console.warn &&
            e.warnings().forEach((e) => {
              let t = e.plugin || "PostCSS";
              console.warn(t + ": " + e.text);
            }),
          r(e.root)
        );
      };
    }),
    Mi = p((e, t) => {
      m();
      var r = _i(),
        i = Ui(),
        n = Bi();
      t.exports = function (e) {
        let t = r(e);
        return async (e) => {
          let r = await t.process(e, { parser: n, from: void 0 });
          return i(r);
        };
      };
    }),
    Li = p((e, t) => {
      m();
      var r = _i(),
        i = Ui(),
        n = Bi();
      t.exports = function (e) {
        let t = r(e);
        return (e) => {
          let r = t.process(e, { parser: n, from: void 0 });
          return i(r);
        };
      };
    }),
    zi = p((e, t) => {
      m();
      var r = $i(),
        i = Bi(),
        n = Mi(),
        o = Li();
      t.exports = { objectify: r, parse: i, async: n, sync: o };
    }),
    Fi = d(() => {
      m(),
        (Pi = h(zi())),
        (Di = Pi.default),
        Pi.default.objectify,
        Pi.default.parse,
        Pi.default.async,
        Pi.default.sync;
    });
  function Ni(e) {
    return Array.isArray(e)
      ? e.flatMap(
          (e) =>
            Qr([(0, Wi.default)({ bubble: ["screen"] })]).process(e, {
              parser: Di,
            }).root.nodes,
        )
      : Ni([e]);
  }
  var Wi,
    Vi = d(() => {
      m(), Oi(), (Wi = h(Ii())), Fi();
    });
  function qi(e, t, r = !1) {
    return (0, Gi.default)((t) => {
      t.walkClasses((t) => {
        let i = t.value,
          n = r && i.startsWith("-");
        t.value = n ? `-${e}${i.slice(1)}` : `${e}${i}`;
      });
    }).processSync(t);
  }
  var Gi,
    Yi = d(() => {
      m(), (Gi = h(ze()));
    });
  function Hi(e) {
    let t = Qi.default.className();
    return (t.value = e), Fe(t?.raws?.value ?? t.value);
  }
  var Qi,
    Ji = d(() => {
      m(), (Qi = h(ze())), Ne();
    });
  function Xi(e) {
    return Fe(`.${Hi(e)}`);
  }
  function Ki(e, t) {
    return Xi(Zi(e, t));
  }
  function Zi(e, t) {
    return "DEFAULT" === t
      ? e
      : "-" === t || "-DEFAULT" === t
        ? `-${e}`
        : t.startsWith("-")
          ? `-${e}${t}`
          : `${e}-${t}`;
  }
  var en = d(() => {
    m(), Ji(), Ne();
  });
  function tn(e) {
    return (e > 0n) - (e < 0n);
  }
  var rn = d(() => {
    m();
  });
  function nn(e, t = [[e, [e]]], { filterDefault: r = !1, ...i } = {}) {
    let n = Ti(e);
    return function ({ matchUtilities: o, theme: s }) {
      for (let a of t) {
        o(
          (Array.isArray(a[0]) ? a : [a]).reduce(
            (e, [t, r]) =>
              Object.assign(e, {
                [t]: (e) =>
                  r.reduce(
                    (t, r) =>
                      Array.isArray(r)
                        ? Object.assign(t, { [r[0]]: r[1] })
                        : Object.assign(t, { [r]: n(e) }),
                    {},
                  ),
              }),
            {},
          ),
          {
            ...i,
            values: r
              ? Object.fromEntries(
                  Object.entries(s(e) ?? {}).filter(([e]) => "DEFAULT" !== e),
                )
              : s(e),
          },
        );
      }
    };
  }
  var on = d(() => {
    m(), ji();
  });
  function sn(e) {
    return (e = Array.isArray(e) ? e : [e])
      .map((e) =>
        e.values.map((e) =>
          void 0 !== e.raw
            ? e.raw
            : [
                e.min && `(min-width: ${e.min})`,
                e.max && `(max-width: ${e.max})`,
              ]
                .filter(Boolean)
                .join(" and "),
        ),
      )
      .join(", ");
  }
  var an = d(() => {
    m();
  });
  var ln,
    cn,
    un,
    dn,
    pn,
    fn,
    hn,
    mn,
    gn,
    bn,
    yn,
    wn,
    vn,
    xn = d(() => {
      m(),
        (ln = new Set(["normal", "reverse", "alternate", "alternate-reverse"])),
        (cn = new Set(["running", "paused"])),
        (un = new Set(["none", "forwards", "backwards", "both"])),
        (dn = new Set(["infinite"])),
        (pn = new Set([
          "linear",
          "ease",
          "ease-in",
          "ease-out",
          "ease-in-out",
          "step-start",
          "step-end",
        ])),
        (fn = ["cubic-bezier", "steps"]),
        (hn = /\,(?![^(]*\))/g),
        (mn = /\ +(?![^(]*\))/g),
        (gn = /^(-?[\d.]+m?s)$/),
        (bn = /^(\d+)$/);
    }),
    kn = d(() => {
      m(),
        (wn = yn =
          (e) =>
            Object.assign(
              {},
              ...Object.entries(e ?? {}).flatMap(([e, t]) =>
                "object" == typeof t
                  ? Object.entries(yn(t)).map(([t, r]) => ({
                      [e + ("DEFAULT" === t ? "" : `-${t}`)]: r,
                    }))
                  : [{ [`${e}`]: t }],
              ),
            ));
    }),
    Sn = d(() => {
      vn = "3.1.8";
    });
  function Cn(e, t = !0) {
    return Array.isArray(e)
      ? e.map((e) => {
          if (t && Array.isArray(e))
            throw new Error("The tuple syntax is not supported for `screens`.");
          if ("string" == typeof e)
            return { name: e.toString(), values: [{ min: e, max: void 0 }] };
          let [r, i] = e;
          return (
            (r = r.toString()),
            "string" == typeof i
              ? { name: r, values: [{ min: i, max: void 0 }] }
              : Array.isArray(i)
                ? { name: r, values: i.map((e) => An(e)) }
                : { name: r, values: [An(i)] }
          );
        })
      : Cn(Object.entries(e ?? {}), !1);
  }
  function An({ "min-width": e, min: t = e, max: r, raw: i } = {}) {
    return { min: t, max: r, raw: i };
  }
  var _n = d(() => {
    m();
  });
  function On(e, t) {
    e.walkDecls((e) => {
      if (t.includes(e.prop)) e.remove();
      else
        for (let r of t)
          e.value.includes(`/ var(${r})`) &&
            (e.value = e.value.replace(`/ var(${r})`, ""));
    });
  }
  var En,
    Tn,
    Pn,
    Dn,
    jn,
    In = d(() => {
      m();
    }),
    Rn = d(() => {
      m(),
        g(),
        k(),
        Oi(),
        on(),
        an(),
        Ji(),
        xn(),
        kn(),
        nt(),
        ar(),
        ie(),
        ji(),
        Sn(),
        G(),
        _n(),
        xt(),
        In(),
        Or(),
        (En = {
          pseudoElementVariants: ({ addVariant: e }) => {
            e("first-letter", "&::first-letter"),
              e("first-line", "&::first-line"),
              e("marker", [
                ({ container: e }) => (
                  On(e, ["--tw-text-opacity"]), "& *::marker"
                ),
                ({ container: e }) => (
                  On(e, ["--tw-text-opacity"]), "&::marker"
                ),
              ]),
              e("selection", ["& *::selection", "&::selection"]),
              e("file", "&::file-selector-button"),
              e("placeholder", "&::placeholder"),
              e("backdrop", "&::backdrop"),
              e(
                "before",
                ({ container: e }) => (
                  e.walkRules((e) => {
                    let t = !1;
                    e.walkDecls("content", () => {
                      t = !0;
                    }),
                      t ||
                        e.prepend(
                          Qr.decl({
                            prop: "content",
                            value: "var(--tw-content)",
                          }),
                        );
                  }),
                  "&::before"
                ),
              ),
              e(
                "after",
                ({ container: e }) => (
                  e.walkRules((e) => {
                    let t = !1;
                    e.walkDecls("content", () => {
                      t = !0;
                    }),
                      t ||
                        e.prepend(
                          Qr.decl({
                            prop: "content",
                            value: "var(--tw-content)",
                          }),
                        );
                  }),
                  "&::after"
                ),
              );
          },
          pseudoClassVariants: ({ addVariant: e, config: t }) => {
            let r = [
              ["first", "&:first-child"],
              ["last", "&:last-child"],
              ["only", "&:only-child"],
              ["odd", "&:nth-child(odd)"],
              ["even", "&:nth-child(even)"],
              "first-of-type",
              "last-of-type",
              "only-of-type",
              [
                "visited",
                ({ container: e }) => (
                  On(e, [
                    "--tw-text-opacity",
                    "--tw-border-opacity",
                    "--tw-bg-opacity",
                  ]),
                  "&:visited"
                ),
              ],
              "target",
              ["open", "&[open]"],
              "default",
              "checked",
              "indeterminate",
              "placeholder-shown",
              "autofill",
              "optional",
              "required",
              "valid",
              "invalid",
              "in-range",
              "out-of-range",
              "read-only",
              "empty",
              "focus-within",
              [
                "hover",
                Sr(t(), "hoverOnlyWhenSupported")
                  ? "@media (hover: hover) and (pointer: fine) { &:hover }"
                  : "&:hover",
              ],
              "focus",
              "focus-visible",
              "active",
              "enabled",
              "disabled",
            ].map((e) => (Array.isArray(e) ? e : [e, `&:${e}`]));
            for (let [t, i] of r)
              e(t, (e) => ("function" == typeof i ? i(e) : i));
            for (let [t, i] of r)
              e(`group-${t}`, (e) =>
                ("function" == typeof i ? i(e) : i).replace(
                  /&(\S+)/,
                  ":merge(.group)$1 &",
                ),
              );
            for (let [t, i] of r)
              e(`peer-${t}`, (e) =>
                ("function" == typeof i ? i(e) : i).replace(
                  /&(\S+)/,
                  ":merge(.peer)$1 ~ &",
                ),
              );
          },
          directionVariants: ({ addVariant: e }) => {
            e(
              "ltr",
              () => (
                q.warn("rtl-experimental", [
                  "The RTL features in Tailwind CSS are currently in preview.",
                  "Preview features are not covered by semver, and may be improved in breaking ways at any time.",
                ]),
                '[dir="ltr"] &'
              ),
            ),
              e(
                "rtl",
                () => (
                  q.warn("rtl-experimental", [
                    "The RTL features in Tailwind CSS are currently in preview.",
                    "Preview features are not covered by semver, and may be improved in breaking ways at any time.",
                  ]),
                  '[dir="rtl"] &'
                ),
              );
          },
          reducedMotionVariants: ({ addVariant: e }) => {
            e("motion-safe", "@media (prefers-reduced-motion: no-preference)"),
              e("motion-reduce", "@media (prefers-reduced-motion: reduce)");
          },
          darkVariants: ({ config: e, addVariant: t }) => {
            let [r, i = ".dark"] = [].concat(e("darkMode", "media"));
            !1 === r &&
              ((r = "media"),
              q.warn("darkmode-false", [
                "The `darkMode` option in your Tailwind CSS configuration is set to `false`, which now behaves the same as `media`.",
                "Change `darkMode` to `media` or remove it entirely.",
                "https://tailwindcss.com/docs/upgrade-guide#remove-dark-mode-configuration",
              ])),
              "class" === r
                ? t("dark", `${i} &`)
                : "media" === r &&
                  t("dark", "@media (prefers-color-scheme: dark)");
          },
          printVariant: ({ addVariant: e }) => {
            e("print", "@media print");
          },
          screenVariants: ({ theme: e, addVariant: t }) => {
            for (let r of Cn(e("screens"))) {
              let e = sn(r);
              t(r.name, `@media ${e}`);
            }
          },
          orientationVariants: ({ addVariant: e }) => {
            e("portrait", "@media (orientation: portrait)"),
              e("landscape", "@media (orientation: landscape)");
          },
          prefersContrastVariants: ({ addVariant: e }) => {
            e("contrast-more", "@media (prefers-contrast: more)"),
              e("contrast-less", "@media (prefers-contrast: less)");
          },
        }),
        (Tn = [
          "translate(var(--tw-translate-x), var(--tw-translate-y))",
          "rotate(var(--tw-rotate))",
          "skewX(var(--tw-skew-x))",
          "skewY(var(--tw-skew-y))",
          "scaleX(var(--tw-scale-x))",
          "scaleY(var(--tw-scale-y))",
        ].join(" ")),
        (Pn = [
          "var(--tw-blur)",
          "var(--tw-brightness)",
          "var(--tw-contrast)",
          "var(--tw-grayscale)",
          "var(--tw-hue-rotate)",
          "var(--tw-invert)",
          "var(--tw-saturate)",
          "var(--tw-sepia)",
          "var(--tw-drop-shadow)",
        ].join(" ")),
        (Dn = [
          "var(--tw-backdrop-blur)",
          "var(--tw-backdrop-brightness)",
          "var(--tw-backdrop-contrast)",
          "var(--tw-backdrop-grayscale)",
          "var(--tw-backdrop-hue-rotate)",
          "var(--tw-backdrop-invert)",
          "var(--tw-backdrop-opacity)",
          "var(--tw-backdrop-saturate)",
          "var(--tw-backdrop-sepia)",
        ].join(" ")),
        (jn = {
          preflight: ({ addBase: e }) => {
            let t = Qr.parse(
              '*,::after,::before{box-sizing:border-box;border-width:0;border-style:solid;border-color:theme(\'borderColor.DEFAULT\', currentColor)}::after,::before{--tw-content:\'\'}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:theme(\'fontFamily.sans\', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji")}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:theme(\'fontFamily.mono\', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{opacity:1;color:theme(\'colors.gray.4\', #9ca3af)}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}',
            );
            e([
              Qr.comment({
                text: `! tailwindcss v${vn} | MIT License | https://tailwindcss.com`,
              }),
              ...t.nodes,
            ]);
          },
          container: function ({ addComponents: e, theme: t }) {
            let r = Cn(t("container.screens", t("screens"))),
              i = (function (e = []) {
                return e
                  .flatMap((e) => e.values.map((e) => e.min))
                  .filter((e) => void 0 !== e);
              })(r),
              n = (function (e, t, r) {
                if (void 0 === r) return [];
                if ("object" != typeof r || null === r)
                  return [{ screen: "DEFAULT", minWidth: 0, padding: r }];
                let i = [];
                r.DEFAULT &&
                  i.push({
                    screen: "DEFAULT",
                    minWidth: 0,
                    padding: r.DEFAULT,
                  });
                for (let n of e)
                  for (let e of t)
                    for (let { min: t } of e.values)
                      t === n && i.push({ minWidth: n, padding: r[e.name] });
                return i;
              })(i, r, t("container.padding")),
              o = (e) => {
                let t = n.find((t) => t.minWidth === e);
                return t
                  ? { paddingRight: t.padding, paddingLeft: t.padding }
                  : {};
              },
              s = Array.from(
                new Set(i.slice().sort((e, t) => parseInt(e) - parseInt(t))),
              ).map((e) => ({
                [`@media (min-width: ${e})`]: {
                  ".container": { "max-width": e, ...o(e) },
                },
              }));
            e([
              {
                ".container": Object.assign(
                  { width: "100%" },
                  t("container.center", !1)
                    ? { marginRight: "auto", marginLeft: "auto" }
                    : {},
                  o(0),
                ),
              },
              ...s,
            ]);
          },
          accessibility: ({ addUtilities: e }) => {
            e({
              ".sr-only": {
                position: "absolute",
                width: "1px",
                height: "1px",
                padding: "0",
                margin: "-1px",
                overflow: "hidden",
                clip: "rect(0, 0, 0, 0)",
                whiteSpace: "nowrap",
                borderWidth: "0",
              },
              ".not-sr-only": {
                position: "static",
                width: "auto",
                height: "auto",
                padding: "0",
                margin: "0",
                overflow: "visible",
                clip: "auto",
                whiteSpace: "normal",
              },
            });
          },
          pointerEvents: ({ addUtilities: e }) => {
            e({
              ".pointer-events-none": { "pointer-events": "none" },
              ".pointer-events-auto": { "pointer-events": "auto" },
            });
          },
          visibility: ({ addUtilities: e }) => {
            e({
              ".visible": { visibility: "visible" },
              ".invisible": { visibility: "hidden" },
            });
          },
          position: ({ addUtilities: e }) => {
            e({
              ".static": { position: "static" },
              ".fixed": { position: "fixed" },
              ".absolute": { position: "absolute" },
              ".relative": { position: "relative" },
              ".sticky": { position: "sticky" },
            });
          },
          inset: nn(
            "inset",
            [
              ["inset", ["top", "right", "bottom", "left"]],
              [
                ["inset-x", ["left", "right"]],
                ["inset-y", ["top", "bottom"]],
              ],
              [
                ["top", ["top"]],
                ["right", ["right"]],
                ["bottom", ["bottom"]],
                ["left", ["left"]],
              ],
            ],
            { supportsNegativeValues: !0 },
          ),
          isolation: ({ addUtilities: e }) => {
            e({
              ".isolate": { isolation: "isolate" },
              ".isolation-auto": { isolation: "auto" },
            });
          },
          zIndex: nn("zIndex", [["z", ["zIndex"]]], {
            supportsNegativeValues: !0,
          }),
          order: nn("order", void 0, { supportsNegativeValues: !0 }),
          gridColumn: nn("gridColumn", [["col", ["gridColumn"]]]),
          gridColumnStart: nn("gridColumnStart", [
            ["col-start", ["gridColumnStart"]],
          ]),
          gridColumnEnd: nn("gridColumnEnd", [["col-end", ["gridColumnEnd"]]]),
          gridRow: nn("gridRow", [["row", ["gridRow"]]]),
          gridRowStart: nn("gridRowStart", [["row-start", ["gridRowStart"]]]),
          gridRowEnd: nn("gridRowEnd", [["row-end", ["gridRowEnd"]]]),
          float: ({ addUtilities: e }) => {
            e({
              ".float-right": { float: "right" },
              ".float-left": { float: "left" },
              ".float-none": { float: "none" },
            });
          },
          clear: ({ addUtilities: e }) => {
            e({
              ".clear-left": { clear: "left" },
              ".clear-right": { clear: "right" },
              ".clear-both": { clear: "both" },
              ".clear-none": { clear: "none" },
            });
          },
          margin: nn(
            "margin",
            [
              ["m", ["margin"]],
              [
                ["mx", ["margin-left", "margin-right"]],
                ["my", ["margin-top", "margin-bottom"]],
              ],
              [
                ["mt", ["margin-top"]],
                ["mr", ["margin-right"]],
                ["mb", ["margin-bottom"]],
                ["ml", ["margin-left"]],
              ],
            ],
            { supportsNegativeValues: !0 },
          ),
          boxSizing: ({ addUtilities: e }) => {
            e({
              ".box-border": { "box-sizing": "border-box" },
              ".box-content": { "box-sizing": "content-box" },
            });
          },
          display: ({ addUtilities: e }) => {
            e({
              ".block": { display: "block" },
              ".inline-block": { display: "inline-block" },
              ".inline": { display: "inline" },
              ".flex": { display: "flex" },
              ".inline-flex": { display: "inline-flex" },
              ".table": { display: "table" },
              ".inline-table": { display: "inline-table" },
              ".table-caption": { display: "table-caption" },
              ".table-cell": { display: "table-cell" },
              ".table-column": { display: "table-column" },
              ".table-column-group": { display: "table-column-group" },
              ".table-footer-group": { display: "table-footer-group" },
              ".table-header-group": { display: "table-header-group" },
              ".table-row-group": { display: "table-row-group" },
              ".table-row": { display: "table-row" },
              ".flow-root": { display: "flow-root" },
              ".grid": { display: "grid" },
              ".inline-grid": { display: "inline-grid" },
              ".contents": { display: "contents" },
              ".list-item": { display: "list-item" },
              ".hidden": { display: "none" },
            });
          },
          aspectRatio: nn("aspectRatio", [["aspect", ["aspect-ratio"]]]),
          height: nn("height", [["h", ["height"]]]),
          maxHeight: nn("maxHeight", [["max-h", ["maxHeight"]]]),
          minHeight: nn("minHeight", [["min-h", ["minHeight"]]]),
          width: nn("width", [["w", ["width"]]]),
          minWidth: nn("minWidth", [["min-w", ["minWidth"]]]),
          maxWidth: nn("maxWidth", [["max-w", ["maxWidth"]]]),
          flex: nn("flex"),
          flexShrink: nn("flexShrink", [
            ["flex-shrink", ["flex-shrink"]],
            ["shrink", ["flex-shrink"]],
          ]),
          flexGrow: nn("flexGrow", [
            ["flex-grow", ["flex-grow"]],
            ["grow", ["flex-grow"]],
          ]),
          flexBasis: nn("flexBasis", [["basis", ["flex-basis"]]]),
          tableLayout: ({ addUtilities: e }) => {
            e({
              ".table-auto": { "table-layout": "auto" },
              ".table-fixed": { "table-layout": "fixed" },
            });
          },
          borderCollapse: ({ addUtilities: e }) => {
            e({
              ".border-collapse": { "border-collapse": "collapse" },
              ".border-separate": { "border-collapse": "separate" },
            });
          },
          borderSpacing: ({ addDefaults: e, matchUtilities: t, theme: r }) => {
            e("border-spacing", {
              "--tw-border-spacing-x": 0,
              "--tw-border-spacing-y": 0,
            }),
              t(
                {
                  "border-spacing": (e) => ({
                    "--tw-border-spacing-x": e,
                    "--tw-border-spacing-y": e,
                    "@defaults border-spacing": {},
                    "border-spacing":
                      "var(--tw-border-spacing-x) var(--tw-border-spacing-y)",
                  }),
                  "border-spacing-x": (e) => ({
                    "--tw-border-spacing-x": e,
                    "@defaults border-spacing": {},
                    "border-spacing":
                      "var(--tw-border-spacing-x) var(--tw-border-spacing-y)",
                  }),
                  "border-spacing-y": (e) => ({
                    "--tw-border-spacing-y": e,
                    "@defaults border-spacing": {},
                    "border-spacing":
                      "var(--tw-border-spacing-x) var(--tw-border-spacing-y)",
                  }),
                },
                { values: r("borderSpacing") },
              );
          },
          transformOrigin: nn("transformOrigin", [
            ["origin", ["transformOrigin"]],
          ]),
          translate: nn(
            "translate",
            [
              [
                [
                  "translate-x",
                  [
                    ["@defaults transform", {}],
                    "--tw-translate-x",
                    ["transform", Tn],
                  ],
                ],
                [
                  "translate-y",
                  [
                    ["@defaults transform", {}],
                    "--tw-translate-y",
                    ["transform", Tn],
                  ],
                ],
              ],
            ],
            { supportsNegativeValues: !0 },
          ),
          rotate: nn(
            "rotate",
            [
              [
                "rotate",
                [["@defaults transform", {}], "--tw-rotate", ["transform", Tn]],
              ],
            ],
            { supportsNegativeValues: !0 },
          ),
          skew: nn(
            "skew",
            [
              [
                [
                  "skew-x",
                  [
                    ["@defaults transform", {}],
                    "--tw-skew-x",
                    ["transform", Tn],
                  ],
                ],
                [
                  "skew-y",
                  [
                    ["@defaults transform", {}],
                    "--tw-skew-y",
                    ["transform", Tn],
                  ],
                ],
              ],
            ],
            { supportsNegativeValues: !0 },
          ),
          scale: nn(
            "scale",
            [
              [
                "scale",
                [
                  ["@defaults transform", {}],
                  "--tw-scale-x",
                  "--tw-scale-y",
                  ["transform", Tn],
                ],
              ],
              [
                [
                  "scale-x",
                  [
                    ["@defaults transform", {}],
                    "--tw-scale-x",
                    ["transform", Tn],
                  ],
                ],
                [
                  "scale-y",
                  [
                    ["@defaults transform", {}],
                    "--tw-scale-y",
                    ["transform", Tn],
                  ],
                ],
              ],
            ],
            { supportsNegativeValues: !0 },
          ),
          transform: ({ addDefaults: e, addUtilities: t }) => {
            e("transform", {
              "--tw-translate-x": "0",
              "--tw-translate-y": "0",
              "--tw-rotate": "0",
              "--tw-skew-x": "0",
              "--tw-skew-y": "0",
              "--tw-scale-x": "1",
              "--tw-scale-y": "1",
            }),
              t({
                ".transform": { "@defaults transform": {}, transform: Tn },
                ".transform-cpu": { transform: Tn },
                ".transform-gpu": {
                  transform: Tn.replace(
                    "translate(var(--tw-translate-x), var(--tw-translate-y))",
                    "translate3d(var(--tw-translate-x), var(--tw-translate-y), 0)",
                  ),
                },
                ".transform-none": { transform: "none" },
              });
          },
          animation: ({ matchUtilities: e, theme: t, config: r }) => {
            let i = (e) => `${r("prefix")}${Hi(e)}`,
              n = Object.fromEntries(
                Object.entries(t("keyframes") ?? {}).map(([e, t]) => [
                  e,
                  { [`@keyframes ${i(e)}`]: t },
                ]),
              );
            e(
              {
                animate: (e) => {
                  let t = (function (e) {
                    return e.split(hn).map((e) => {
                      let t = e.trim(),
                        r = { value: t },
                        i = t.split(mn),
                        n = new Set();
                      for (let e of i)
                        !n.has("DIRECTIONS") && ln.has(e)
                          ? ((r.direction = e), n.add("DIRECTIONS"))
                          : !n.has("PLAY_STATES") && cn.has(e)
                            ? ((r.playState = e), n.add("PLAY_STATES"))
                            : !n.has("FILL_MODES") && un.has(e)
                              ? ((r.fillMode = e), n.add("FILL_MODES"))
                              : n.has("ITERATION_COUNTS") ||
                                  (!dn.has(e) && !bn.test(e))
                                ? (!n.has("TIMING_FUNCTION") && pn.has(e)) ||
                                  (!n.has("TIMING_FUNCTION") &&
                                    fn.some((t) => e.startsWith(`${t}(`)))
                                  ? ((r.timingFunction = e),
                                    n.add("TIMING_FUNCTION"))
                                  : !n.has("DURATION") && gn.test(e)
                                    ? ((r.duration = e), n.add("DURATION"))
                                    : !n.has("DELAY") && gn.test(e)
                                      ? ((r.delay = e), n.add("DELAY"))
                                      : n.has("NAME")
                                        ? (r.unknown || (r.unknown = []),
                                          r.unknown.push(e))
                                        : ((r.name = e), n.add("NAME"))
                                : ((r.iterationCount = e),
                                  n.add("ITERATION_COUNTS"));
                      return r;
                    });
                  })(e);
                  return [
                    ...t.flatMap((e) => n[e.name]),
                    {
                      animation: t
                        .map(({ name: e, value: t }) =>
                          void 0 === e || void 0 === n[e]
                            ? t
                            : t.replace(e, i(e)),
                        )
                        .join(", "),
                    },
                  ];
                },
              },
              { values: t("animation") },
            );
          },
          cursor: nn("cursor"),
          touchAction: ({ addDefaults: e, addUtilities: t }) => {
            e("touch-action", {
              "--tw-pan-x": " ",
              "--tw-pan-y": " ",
              "--tw-pinch-zoom": " ",
            });
            let r = "var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom)";
            t({
              ".touch-auto": { "touch-action": "auto" },
              ".touch-none": { "touch-action": "none" },
              ".touch-pan-x": {
                "@defaults touch-action": {},
                "--tw-pan-x": "pan-x",
                "touch-action": r,
              },
              ".touch-pan-left": {
                "@defaults touch-action": {},
                "--tw-pan-x": "pan-left",
                "touch-action": r,
              },
              ".touch-pan-right": {
                "@defaults touch-action": {},
                "--tw-pan-x": "pan-right",
                "touch-action": r,
              },
              ".touch-pan-y": {
                "@defaults touch-action": {},
                "--tw-pan-y": "pan-y",
                "touch-action": r,
              },
              ".touch-pan-up": {
                "@defaults touch-action": {},
                "--tw-pan-y": "pan-up",
                "touch-action": r,
              },
              ".touch-pan-down": {
                "@defaults touch-action": {},
                "--tw-pan-y": "pan-down",
                "touch-action": r,
              },
              ".touch-pinch-zoom": {
                "@defaults touch-action": {},
                "--tw-pinch-zoom": "pinch-zoom",
                "touch-action": r,
              },
              ".touch-manipulation": { "touch-action": "manipulation" },
            });
          },
          userSelect: ({ addUtilities: e }) => {
            e({
              ".select-none": { "user-select": "none" },
              ".select-text": { "user-select": "text" },
              ".select-all": { "user-select": "all" },
              ".select-auto": { "user-select": "auto" },
            });
          },
          resize: ({ addUtilities: e }) => {
            e({
              ".resize-none": { resize: "none" },
              ".resize-y": { resize: "vertical" },
              ".resize-x": { resize: "horizontal" },
              ".resize": { resize: "both" },
            });
          },
          scrollSnapType: ({ addDefaults: e, addUtilities: t }) => {
            e("scroll-snap-type", {
              "--tw-scroll-snap-strictness": "proximity",
            }),
              t({
                ".snap-none": { "scroll-snap-type": "none" },
                ".snap-x": {
                  "@defaults scroll-snap-type": {},
                  "scroll-snap-type": "x var(--tw-scroll-snap-strictness)",
                },
                ".snap-y": {
                  "@defaults scroll-snap-type": {},
                  "scroll-snap-type": "y var(--tw-scroll-snap-strictness)",
                },
                ".snap-both": {
                  "@defaults scroll-snap-type": {},
                  "scroll-snap-type": "both var(--tw-scroll-snap-strictness)",
                },
                ".snap-mandatory": {
                  "--tw-scroll-snap-strictness": "mandatory",
                },
                ".snap-proximity": {
                  "--tw-scroll-snap-strictness": "proximity",
                },
              });
          },
          scrollSnapAlign: ({ addUtilities: e }) => {
            e({
              ".snap-start": { "scroll-snap-align": "start" },
              ".snap-end": { "scroll-snap-align": "end" },
              ".snap-center": { "scroll-snap-align": "center" },
              ".snap-align-none": { "scroll-snap-align": "none" },
            });
          },
          scrollSnapStop: ({ addUtilities: e }) => {
            e({
              ".snap-normal": { "scroll-snap-stop": "normal" },
              ".snap-always": { "scroll-snap-stop": "always" },
            });
          },
          scrollMargin: nn(
            "scrollMargin",
            [
              ["scroll-m", ["scroll-margin"]],
              [
                ["scroll-mx", ["scroll-margin-left", "scroll-margin-right"]],
                ["scroll-my", ["scroll-margin-top", "scroll-margin-bottom"]],
              ],
              [
                ["scroll-mt", ["scroll-margin-top"]],
                ["scroll-mr", ["scroll-margin-right"]],
                ["scroll-mb", ["scroll-margin-bottom"]],
                ["scroll-ml", ["scroll-margin-left"]],
              ],
            ],
            { supportsNegativeValues: !0 },
          ),
          scrollPadding: nn("scrollPadding", [
            ["scroll-p", ["scroll-padding"]],
            [
              ["scroll-px", ["scroll-padding-left", "scroll-padding-right"]],
              ["scroll-py", ["scroll-padding-top", "scroll-padding-bottom"]],
            ],
            [
              ["scroll-pt", ["scroll-padding-top"]],
              ["scroll-pr", ["scroll-padding-right"]],
              ["scroll-pb", ["scroll-padding-bottom"]],
              ["scroll-pl", ["scroll-padding-left"]],
            ],
          ]),
          listStylePosition: ({ addUtilities: e }) => {
            e({
              ".list-inside": { "list-style-position": "inside" },
              ".list-outside": { "list-style-position": "outside" },
            });
          },
          listStyleType: nn("listStyleType", [["list", ["listStyleType"]]]),
          appearance: ({ addUtilities: e }) => {
            e({ ".appearance-none": { appearance: "none" } });
          },
          columns: nn("columns", [["columns", ["columns"]]]),
          breakBefore: ({ addUtilities: e }) => {
            e({
              ".break-before-auto": { "break-before": "auto" },
              ".break-before-avoid": { "break-before": "avoid" },
              ".break-before-all": { "break-before": "all" },
              ".break-before-avoid-page": { "break-before": "avoid-page" },
              ".break-before-page": { "break-before": "page" },
              ".break-before-left": { "break-before": "left" },
              ".break-before-right": { "break-before": "right" },
              ".break-before-column": { "break-before": "column" },
            });
          },
          breakInside: ({ addUtilities: e }) => {
            e({
              ".break-inside-auto": { "break-inside": "auto" },
              ".break-inside-avoid": { "break-inside": "avoid" },
              ".break-inside-avoid-page": { "break-inside": "avoid-page" },
              ".break-inside-avoid-column": { "break-inside": "avoid-column" },
            });
          },
          breakAfter: ({ addUtilities: e }) => {
            e({
              ".break-after-auto": { "break-after": "auto" },
              ".break-after-avoid": { "break-after": "avoid" },
              ".break-after-all": { "break-after": "all" },
              ".break-after-avoid-page": { "break-after": "avoid-page" },
              ".break-after-page": { "break-after": "page" },
              ".break-after-left": { "break-after": "left" },
              ".break-after-right": { "break-after": "right" },
              ".break-after-column": { "break-after": "column" },
            });
          },
          gridAutoColumns: nn("gridAutoColumns", [
            ["auto-cols", ["gridAutoColumns"]],
          ]),
          gridAutoFlow: ({ addUtilities: e }) => {
            e({
              ".grid-flow-row": { gridAutoFlow: "row" },
              ".grid-flow-col": { gridAutoFlow: "column" },
              ".grid-flow-dense": { gridAutoFlow: "dense" },
              ".grid-flow-row-dense": { gridAutoFlow: "row dense" },
              ".grid-flow-col-dense": { gridAutoFlow: "column dense" },
            });
          },
          gridAutoRows: nn("gridAutoRows", [["auto-rows", ["gridAutoRows"]]]),
          gridTemplateColumns: nn("gridTemplateColumns", [
            ["grid-cols", ["gridTemplateColumns"]],
          ]),
          gridTemplateRows: nn("gridTemplateRows", [
            ["grid-rows", ["gridTemplateRows"]],
          ]),
          flexDirection: ({ addUtilities: e }) => {
            e({
              ".flex-row": { "flex-direction": "row" },
              ".flex-row-reverse": { "flex-direction": "row-reverse" },
              ".flex-col": { "flex-direction": "column" },
              ".flex-col-reverse": { "flex-direction": "column-reverse" },
            });
          },
          flexWrap: ({ addUtilities: e }) => {
            e({
              ".flex-wrap": { "flex-wrap": "wrap" },
              ".flex-wrap-reverse": { "flex-wrap": "wrap-reverse" },
              ".flex-nowrap": { "flex-wrap": "nowrap" },
            });
          },
          placeContent: ({ addUtilities: e }) => {
            e({
              ".place-content-center": { "place-content": "center" },
              ".place-content-start": { "place-content": "start" },
              ".place-content-end": { "place-content": "end" },
              ".place-content-between": { "place-content": "space-between" },
              ".place-content-around": { "place-content": "space-around" },
              ".place-content-evenly": { "place-content": "space-evenly" },
              ".place-content-stretch": { "place-content": "stretch" },
            });
          },
          placeItems: ({ addUtilities: e }) => {
            e({
              ".place-items-start": { "place-items": "start" },
              ".place-items-end": { "place-items": "end" },
              ".place-items-center": { "place-items": "center" },
              ".place-items-stretch": { "place-items": "stretch" },
            });
          },
          alignContent: ({ addUtilities: e }) => {
            e({
              ".content-center": { "align-content": "center" },
              ".content-start": { "align-content": "flex-start" },
              ".content-end": { "align-content": "flex-end" },
              ".content-between": { "align-content": "space-between" },
              ".content-around": { "align-content": "space-around" },
              ".content-evenly": { "align-content": "space-evenly" },
            });
          },
          alignItems: ({ addUtilities: e }) => {
            e({
              ".items-start": { "align-items": "flex-start" },
              ".items-end": { "align-items": "flex-end" },
              ".items-center": { "align-items": "center" },
              ".items-baseline": { "align-items": "baseline" },
              ".items-stretch": { "align-items": "stretch" },
            });
          },
          justifyContent: ({ addUtilities: e }) => {
            e({
              ".justify-start": { "justify-content": "flex-start" },
              ".justify-end": { "justify-content": "flex-end" },
              ".justify-center": { "justify-content": "center" },
              ".justify-between": { "justify-content": "space-between" },
              ".justify-around": { "justify-content": "space-around" },
              ".justify-evenly": { "justify-content": "space-evenly" },
            });
          },
          justifyItems: ({ addUtilities: e }) => {
            e({
              ".justify-items-start": { "justify-items": "start" },
              ".justify-items-end": { "justify-items": "end" },
              ".justify-items-center": { "justify-items": "center" },
              ".justify-items-stretch": { "justify-items": "stretch" },
            });
          },
          gap: nn("gap", [
            ["gap", ["gap"]],
            [
              ["gap-x", ["columnGap"]],
              ["gap-y", ["rowGap"]],
            ],
          ]),
          space: ({ matchUtilities: e, addUtilities: t, theme: r }) => {
            e(
              {
                "space-x": (e) => ({
                  "& > :not([hidden]) ~ :not([hidden])": {
                    "--tw-space-x-reverse": "0",
                    "margin-right": `calc(${(e =
                      "0" === e ? "0px" : e)} * var(--tw-space-x-reverse))`,
                    "margin-left": `calc(${e} * calc(1 - var(--tw-space-x-reverse)))`,
                  },
                }),
                "space-y": (e) => ({
                  "& > :not([hidden]) ~ :not([hidden])": {
                    "--tw-space-y-reverse": "0",
                    "margin-top": `calc(${(e =
                      "0" === e
                        ? "0px"
                        : e)} * calc(1 - var(--tw-space-y-reverse)))`,
                    "margin-bottom": `calc(${e} * var(--tw-space-y-reverse))`,
                  },
                }),
              },
              { values: r("space"), supportsNegativeValues: !0 },
            ),
              t({
                ".space-y-reverse > :not([hidden]) ~ :not([hidden])": {
                  "--tw-space-y-reverse": "1",
                },
                ".space-x-reverse > :not([hidden]) ~ :not([hidden])": {
                  "--tw-space-x-reverse": "1",
                },
              });
          },
          divideWidth: ({ matchUtilities: e, addUtilities: t, theme: r }) => {
            e(
              {
                "divide-x": (e) => ({
                  "& > :not([hidden]) ~ :not([hidden])": {
                    "@defaults border-width": {},
                    "--tw-divide-x-reverse": "0",
                    "border-right-width": `calc(${(e =
                      "0" === e ? "0px" : e)} * var(--tw-divide-x-reverse))`,
                    "border-left-width": `calc(${e} * calc(1 - var(--tw-divide-x-reverse)))`,
                  },
                }),
                "divide-y": (e) => ({
                  "& > :not([hidden]) ~ :not([hidden])": {
                    "@defaults border-width": {},
                    "--tw-divide-y-reverse": "0",
                    "border-top-width": `calc(${(e =
                      "0" === e
                        ? "0px"
                        : e)} * calc(1 - var(--tw-divide-y-reverse)))`,
                    "border-bottom-width": `calc(${e} * var(--tw-divide-y-reverse))`,
                  },
                }),
              },
              { values: r("divideWidth"), type: ["line-width", "length"] },
            ),
              t({
                ".divide-y-reverse > :not([hidden]) ~ :not([hidden])": {
                  "@defaults border-width": {},
                  "--tw-divide-y-reverse": "1",
                },
                ".divide-x-reverse > :not([hidden]) ~ :not([hidden])": {
                  "@defaults border-width": {},
                  "--tw-divide-x-reverse": "1",
                },
              });
          },
          divideStyle: ({ addUtilities: e }) => {
            e({
              ".divide-solid > :not([hidden]) ~ :not([hidden])": {
                "border-style": "solid",
              },
              ".divide-dashed > :not([hidden]) ~ :not([hidden])": {
                "border-style": "dashed",
              },
              ".divide-dotted > :not([hidden]) ~ :not([hidden])": {
                "border-style": "dotted",
              },
              ".divide-double > :not([hidden]) ~ :not([hidden])": {
                "border-style": "double",
              },
              ".divide-none > :not([hidden]) ~ :not([hidden])": {
                "border-style": "none",
              },
            });
          },
          divideColor: ({ matchUtilities: e, theme: t, corePlugins: r }) => {
            e(
              {
                divide: (e) =>
                  r("divideOpacity")
                    ? {
                        "& > :not([hidden]) ~ :not([hidden])": it({
                          color: e,
                          property: "border-color",
                          variable: "--tw-divide-opacity",
                        }),
                      }
                    : {
                        "& > :not([hidden]) ~ :not([hidden])": {
                          "border-color": sr(e),
                        },
                      },
              },
              {
                values: (({ DEFAULT: e, ...t }) => t)(wn(t("divideColor"))),
                type: "color",
              },
            );
          },
          divideOpacity: ({ matchUtilities: e, theme: t }) => {
            e(
              {
                "divide-opacity": (e) => ({
                  "& > :not([hidden]) ~ :not([hidden])": {
                    "--tw-divide-opacity": e,
                  },
                }),
              },
              { values: t("divideOpacity") },
            );
          },
          placeSelf: ({ addUtilities: e }) => {
            e({
              ".place-self-auto": { "place-self": "auto" },
              ".place-self-start": { "place-self": "start" },
              ".place-self-end": { "place-self": "end" },
              ".place-self-center": { "place-self": "center" },
              ".place-self-stretch": { "place-self": "stretch" },
            });
          },
          alignSelf: ({ addUtilities: e }) => {
            e({
              ".self-auto": { "align-self": "auto" },
              ".self-start": { "align-self": "flex-start" },
              ".self-end": { "align-self": "flex-end" },
              ".self-center": { "align-self": "center" },
              ".self-stretch": { "align-self": "stretch" },
              ".self-baseline": { "align-self": "baseline" },
            });
          },
          justifySelf: ({ addUtilities: e }) => {
            e({
              ".justify-self-auto": { "justify-self": "auto" },
              ".justify-self-start": { "justify-self": "start" },
              ".justify-self-end": { "justify-self": "end" },
              ".justify-self-center": { "justify-self": "center" },
              ".justify-self-stretch": { "justify-self": "stretch" },
            });
          },
          overflow: ({ addUtilities: e }) => {
            e({
              ".overflow-auto": { overflow: "auto" },
              ".overflow-hidden": { overflow: "hidden" },
              ".overflow-clip": { overflow: "clip" },
              ".overflow-visible": { overflow: "visible" },
              ".overflow-scroll": { overflow: "scroll" },
              ".overflow-x-auto": { "overflow-x": "auto" },
              ".overflow-y-auto": { "overflow-y": "auto" },
              ".overflow-x-hidden": { "overflow-x": "hidden" },
              ".overflow-y-hidden": { "overflow-y": "hidden" },
              ".overflow-x-clip": { "overflow-x": "clip" },
              ".overflow-y-clip": { "overflow-y": "clip" },
              ".overflow-x-visible": { "overflow-x": "visible" },
              ".overflow-y-visible": { "overflow-y": "visible" },
              ".overflow-x-scroll": { "overflow-x": "scroll" },
              ".overflow-y-scroll": { "overflow-y": "scroll" },
            });
          },
          overscrollBehavior: ({ addUtilities: e }) => {
            e({
              ".overscroll-auto": { "overscroll-behavior": "auto" },
              ".overscroll-contain": { "overscroll-behavior": "contain" },
              ".overscroll-none": { "overscroll-behavior": "none" },
              ".overscroll-y-auto": { "overscroll-behavior-y": "auto" },
              ".overscroll-y-contain": { "overscroll-behavior-y": "contain" },
              ".overscroll-y-none": { "overscroll-behavior-y": "none" },
              ".overscroll-x-auto": { "overscroll-behavior-x": "auto" },
              ".overscroll-x-contain": { "overscroll-behavior-x": "contain" },
              ".overscroll-x-none": { "overscroll-behavior-x": "none" },
            });
          },
          scrollBehavior: ({ addUtilities: e }) => {
            e({
              ".scroll-auto": { "scroll-behavior": "auto" },
              ".scroll-smooth": { "scroll-behavior": "smooth" },
            });
          },
          textOverflow: ({ addUtilities: e }) => {
            e({
              ".truncate": {
                overflow: "hidden",
                "text-overflow": "ellipsis",
                "white-space": "nowrap",
              },
              ".overflow-ellipsis": { "text-overflow": "ellipsis" },
              ".text-ellipsis": { "text-overflow": "ellipsis" },
              ".text-clip": { "text-overflow": "clip" },
            });
          },
          whitespace: ({ addUtilities: e }) => {
            e({
              ".whitespace-normal": { "white-space": "normal" },
              ".whitespace-nowrap": { "white-space": "nowrap" },
              ".whitespace-pre": { "white-space": "pre" },
              ".whitespace-pre-line": { "white-space": "pre-line" },
              ".whitespace-pre-wrap": { "white-space": "pre-wrap" },
            });
          },
          wordBreak: ({ addUtilities: e }) => {
            e({
              ".break-normal": {
                "overflow-wrap": "normal",
                "word-break": "normal",
              },
              ".break-words": { "overflow-wrap": "break-word" },
              ".break-all": { "word-break": "break-all" },
            });
          },
          borderRadius: nn("borderRadius", [
            ["rounded", ["border-radius"]],
            [
              [
                "rounded-t",
                ["border-top-left-radius", "border-top-right-radius"],
              ],
              [
                "rounded-r",
                ["border-top-right-radius", "border-bottom-right-radius"],
              ],
              [
                "rounded-b",
                ["border-bottom-right-radius", "border-bottom-left-radius"],
              ],
              [
                "rounded-l",
                ["border-top-left-radius", "border-bottom-left-radius"],
              ],
            ],
            [
              ["rounded-tl", ["border-top-left-radius"]],
              ["rounded-tr", ["border-top-right-radius"]],
              ["rounded-br", ["border-bottom-right-radius"]],
              ["rounded-bl", ["border-bottom-left-radius"]],
            ],
          ]),
          borderWidth: nn(
            "borderWidth",
            [
              ["border", [["@defaults border-width", {}], "border-width"]],
              [
                [
                  "border-x",
                  [
                    ["@defaults border-width", {}],
                    "border-left-width",
                    "border-right-width",
                  ],
                ],
                [
                  "border-y",
                  [
                    ["@defaults border-width", {}],
                    "border-top-width",
                    "border-bottom-width",
                  ],
                ],
              ],
              [
                [
                  "border-t",
                  [["@defaults border-width", {}], "border-top-width"],
                ],
                [
                  "border-r",
                  [["@defaults border-width", {}], "border-right-width"],
                ],
                [
                  "border-b",
                  [["@defaults border-width", {}], "border-bottom-width"],
                ],
                [
                  "border-l",
                  [["@defaults border-width", {}], "border-left-width"],
                ],
              ],
            ],
            { type: ["line-width", "length"] },
          ),
          borderStyle: ({ addUtilities: e }) => {
            e({
              ".border-solid": { "border-style": "solid" },
              ".border-dashed": { "border-style": "dashed" },
              ".border-dotted": { "border-style": "dotted" },
              ".border-double": { "border-style": "double" },
              ".border-hidden": { "border-style": "hidden" },
              ".border-none": { "border-style": "none" },
            });
          },
          borderColor: ({ matchUtilities: e, theme: t, corePlugins: r }) => {
            e(
              {
                border: (e) =>
                  r("borderOpacity")
                    ? it({
                        color: e,
                        property: "border-color",
                        variable: "--tw-border-opacity",
                      })
                    : { "border-color": sr(e) },
              },
              {
                values: (({ DEFAULT: e, ...t }) => t)(wn(t("borderColor"))),
                type: ["color"],
              },
            ),
              e(
                {
                  "border-x": (e) =>
                    r("borderOpacity")
                      ? it({
                          color: e,
                          property: ["border-left-color", "border-right-color"],
                          variable: "--tw-border-opacity",
                        })
                      : {
                          "border-left-color": sr(e),
                          "border-right-color": sr(e),
                        },
                  "border-y": (e) =>
                    r("borderOpacity")
                      ? it({
                          color: e,
                          property: ["border-top-color", "border-bottom-color"],
                          variable: "--tw-border-opacity",
                        })
                      : {
                          "border-top-color": sr(e),
                          "border-bottom-color": sr(e),
                        },
                },
                {
                  values: (({ DEFAULT: e, ...t }) => t)(wn(t("borderColor"))),
                  type: "color",
                },
              ),
              e(
                {
                  "border-t": (e) =>
                    r("borderOpacity")
                      ? it({
                          color: e,
                          property: "border-top-color",
                          variable: "--tw-border-opacity",
                        })
                      : { "border-top-color": sr(e) },
                  "border-r": (e) =>
                    r("borderOpacity")
                      ? it({
                          color: e,
                          property: "border-right-color",
                          variable: "--tw-border-opacity",
                        })
                      : { "border-right-color": sr(e) },
                  "border-b": (e) =>
                    r("borderOpacity")
                      ? it({
                          color: e,
                          property: "border-bottom-color",
                          variable: "--tw-border-opacity",
                        })
                      : { "border-bottom-color": sr(e) },
                  "border-l": (e) =>
                    r("borderOpacity")
                      ? it({
                          color: e,
                          property: "border-left-color",
                          variable: "--tw-border-opacity",
                        })
                      : { "border-left-color": sr(e) },
                },
                {
                  values: (({ DEFAULT: e, ...t }) => t)(wn(t("borderColor"))),
                  type: "color",
                },
              );
          },
          borderOpacity: nn("borderOpacity", [
            ["border-opacity", ["--tw-border-opacity"]],
          ]),
          backgroundColor: ({
            matchUtilities: e,
            theme: t,
            corePlugins: r,
          }) => {
            e(
              {
                bg: (e) =>
                  r("backgroundOpacity")
                    ? it({
                        color: e,
                        property: "background-color",
                        variable: "--tw-bg-opacity",
                      })
                    : { "background-color": sr(e) },
              },
              { values: wn(t("backgroundColor")), type: "color" },
            );
          },
          backgroundOpacity: nn("backgroundOpacity", [
            ["bg-opacity", ["--tw-bg-opacity"]],
          ]),
          backgroundImage: nn(
            "backgroundImage",
            [["bg", ["background-image"]]],
            { type: ["lookup", "image", "url"] },
          ),
          gradientColorStops: (() => {
            function e(e) {
              return rt(e, 0, "rgb(255 255 255 / 0)");
            }
            return function ({ matchUtilities: t, theme: r }) {
              let i = {
                values: wn(r("gradientColorStops")),
                type: ["color", "any"],
              };
              t(
                {
                  from: (t) => {
                    let r = e(t);
                    return {
                      "--tw-gradient-from": sr(t),
                      "--tw-gradient-to": r,
                      "--tw-gradient-stops":
                        "var(--tw-gradient-from), var(--tw-gradient-to)",
                    };
                  },
                },
                i,
              ),
                t(
                  {
                    via: (t) => ({
                      "--tw-gradient-to": e(t),
                      "--tw-gradient-stops": `var(--tw-gradient-from), ${sr(
                        t,
                      )}, var(--tw-gradient-to)`,
                    }),
                  },
                  i,
                ),
                t({ to: (e) => ({ "--tw-gradient-to": sr(e) }) }, i);
            };
          })(),
          boxDecorationBreak: ({ addUtilities: e }) => {
            e({
              ".decoration-slice": { "box-decoration-break": "slice" },
              ".decoration-clone": { "box-decoration-break": "clone" },
              ".box-decoration-slice": { "box-decoration-break": "slice" },
              ".box-decoration-clone": { "box-decoration-break": "clone" },
            });
          },
          backgroundSize: nn("backgroundSize", [["bg", ["background-size"]]], {
            type: ["lookup", "length", "percentage"],
          }),
          backgroundAttachment: ({ addUtilities: e }) => {
            e({
              ".bg-fixed": { "background-attachment": "fixed" },
              ".bg-local": { "background-attachment": "local" },
              ".bg-scroll": { "background-attachment": "scroll" },
            });
          },
          backgroundClip: ({ addUtilities: e }) => {
            e({
              ".bg-clip-border": { "background-clip": "border-box" },
              ".bg-clip-padding": { "background-clip": "padding-box" },
              ".bg-clip-content": { "background-clip": "content-box" },
              ".bg-clip-text": { "background-clip": "text" },
            });
          },
          backgroundPosition: nn(
            "backgroundPosition",
            [["bg", ["background-position"]]],
            { type: ["lookup", "position"] },
          ),
          backgroundRepeat: ({ addUtilities: e }) => {
            e({
              ".bg-repeat": { "background-repeat": "repeat" },
              ".bg-no-repeat": { "background-repeat": "no-repeat" },
              ".bg-repeat-x": { "background-repeat": "repeat-x" },
              ".bg-repeat-y": { "background-repeat": "repeat-y" },
              ".bg-repeat-round": { "background-repeat": "round" },
              ".bg-repeat-space": { "background-repeat": "space" },
            });
          },
          backgroundOrigin: ({ addUtilities: e }) => {
            e({
              ".bg-origin-border": { "background-origin": "border-box" },
              ".bg-origin-padding": { "background-origin": "padding-box" },
              ".bg-origin-content": { "background-origin": "content-box" },
            });
          },
          fill: ({ matchUtilities: e, theme: t }) => {
            e(
              { fill: (e) => ({ fill: sr(e) }) },
              { values: wn(t("fill")), type: ["color", "any"] },
            );
          },
          stroke: ({ matchUtilities: e, theme: t }) => {
            e(
              { stroke: (e) => ({ stroke: sr(e) }) },
              { values: wn(t("stroke")), type: ["color", "url"] },
            );
          },
          strokeWidth: nn("strokeWidth", [["stroke", ["stroke-width"]]], {
            type: ["length", "number", "percentage"],
          }),
          objectFit: ({ addUtilities: e }) => {
            e({
              ".object-contain": { "object-fit": "contain" },
              ".object-cover": { "object-fit": "cover" },
              ".object-fill": { "object-fit": "fill" },
              ".object-none": { "object-fit": "none" },
              ".object-scale-down": { "object-fit": "scale-down" },
            });
          },
          objectPosition: nn("objectPosition", [
            ["object", ["object-position"]],
          ]),
          padding: nn("padding", [
            ["p", ["padding"]],
            [
              ["px", ["padding-left", "padding-right"]],
              ["py", ["padding-top", "padding-bottom"]],
            ],
            [
              ["pt", ["padding-top"]],
              ["pr", ["padding-right"]],
              ["pb", ["padding-bottom"]],
              ["pl", ["padding-left"]],
            ],
          ]),
          textAlign: ({ addUtilities: e }) => {
            e({
              ".text-left": { "text-align": "left" },
              ".text-center": { "text-align": "center" },
              ".text-right": { "text-align": "right" },
              ".text-justify": { "text-align": "justify" },
              ".text-start": { "text-align": "start" },
              ".text-end": { "text-align": "end" },
            });
          },
          textIndent: nn("textIndent", [["indent", ["text-indent"]]], {
            supportsNegativeValues: !0,
          }),
          verticalAlign: ({ addUtilities: e, matchUtilities: t }) => {
            e({
              ".align-baseline": { "vertical-align": "baseline" },
              ".align-top": { "vertical-align": "top" },
              ".align-middle": { "vertical-align": "middle" },
              ".align-bottom": { "vertical-align": "bottom" },
              ".align-text-top": { "vertical-align": "text-top" },
              ".align-text-bottom": { "vertical-align": "text-bottom" },
              ".align-sub": { "vertical-align": "sub" },
              ".align-super": { "vertical-align": "super" },
            }),
              t({ align: (e) => ({ "vertical-align": e }) });
          },
          fontFamily: nn("fontFamily", [["font", ["fontFamily"]]], {
            type: ["lookup", "generic-name", "family-name"],
          }),
          fontSize: ({ matchUtilities: e, theme: t }) => {
            e(
              {
                text: (e) => {
                  let [t, r] = Array.isArray(e) ? e : [e],
                    {
                      lineHeight: i,
                      letterSpacing: n,
                      fontWeight: o,
                    } = re(r) ? r : { lineHeight: r };
                  return {
                    "font-size": t,
                    ...(void 0 === i ? {} : { "line-height": i }),
                    ...(void 0 === n ? {} : { "letter-spacing": n }),
                    ...(void 0 === o ? {} : { "font-weight": o }),
                  };
                },
              },
              {
                values: t("fontSize"),
                type: [
                  "absolute-size",
                  "relative-size",
                  "length",
                  "percentage",
                ],
              },
            );
          },
          fontWeight: nn("fontWeight", [["font", ["fontWeight"]]], {
            type: ["lookup", "number"],
          }),
          textTransform: ({ addUtilities: e }) => {
            e({
              ".uppercase": { "text-transform": "uppercase" },
              ".lowercase": { "text-transform": "lowercase" },
              ".capitalize": { "text-transform": "capitalize" },
              ".normal-case": { "text-transform": "none" },
            });
          },
          fontStyle: ({ addUtilities: e }) => {
            e({
              ".italic": { "font-style": "italic" },
              ".not-italic": { "font-style": "normal" },
            });
          },
          fontVariantNumeric: ({ addDefaults: e, addUtilities: t }) => {
            let r =
              "var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)";
            e("font-variant-numeric", {
              "--tw-ordinal": " ",
              "--tw-slashed-zero": " ",
              "--tw-numeric-figure": " ",
              "--tw-numeric-spacing": " ",
              "--tw-numeric-fraction": " ",
            }),
              t({
                ".normal-nums": { "font-variant-numeric": "normal" },
                ".ordinal": {
                  "@defaults font-variant-numeric": {},
                  "--tw-ordinal": "ordinal",
                  "font-variant-numeric": r,
                },
                ".slashed-zero": {
                  "@defaults font-variant-numeric": {},
                  "--tw-slashed-zero": "slashed-zero",
                  "font-variant-numeric": r,
                },
                ".lining-nums": {
                  "@defaults font-variant-numeric": {},
                  "--tw-numeric-figure": "lining-nums",
                  "font-variant-numeric": r,
                },
                ".oldstyle-nums": {
                  "@defaults font-variant-numeric": {},
                  "--tw-numeric-figure": "oldstyle-nums",
                  "font-variant-numeric": r,
                },
                ".proportional-nums": {
                  "@defaults font-variant-numeric": {},
                  "--tw-numeric-spacing": "proportional-nums",
                  "font-variant-numeric": r,
                },
                ".tabular-nums": {
                  "@defaults font-variant-numeric": {},
                  "--tw-numeric-spacing": "tabular-nums",
                  "font-variant-numeric": r,
                },
                ".diagonal-fractions": {
                  "@defaults font-variant-numeric": {},
                  "--tw-numeric-fraction": "diagonal-fractions",
                  "font-variant-numeric": r,
                },
                ".stacked-fractions": {
                  "@defaults font-variant-numeric": {},
                  "--tw-numeric-fraction": "stacked-fractions",
                  "font-variant-numeric": r,
                },
              });
          },
          lineHeight: nn("lineHeight", [["leading", ["lineHeight"]]]),
          letterSpacing: nn(
            "letterSpacing",
            [["tracking", ["letterSpacing"]]],
            { supportsNegativeValues: !0 },
          ),
          textColor: ({ matchUtilities: e, theme: t, corePlugins: r }) => {
            e(
              {
                text: (e) =>
                  r("textOpacity")
                    ? it({
                        color: e,
                        property: "color",
                        variable: "--tw-text-opacity",
                      })
                    : { color: sr(e) },
              },
              { values: wn(t("textColor")), type: "color" },
            );
          },
          textOpacity: nn("textOpacity", [
            ["text-opacity", ["--tw-text-opacity"]],
          ]),
          textDecoration: ({ addUtilities: e }) => {
            e({
              ".underline": { "text-decoration-line": "underline" },
              ".overline": { "text-decoration-line": "overline" },
              ".line-through": { "text-decoration-line": "line-through" },
              ".no-underline": { "text-decoration-line": "none" },
            });
          },
          textDecorationColor: ({ matchUtilities: e, theme: t }) => {
            e(
              { decoration: (e) => ({ "text-decoration-color": sr(e) }) },
              { values: wn(t("textDecorationColor")), type: ["color"] },
            );
          },
          textDecorationStyle: ({ addUtilities: e }) => {
            e({
              ".decoration-solid": { "text-decoration-style": "solid" },
              ".decoration-double": { "text-decoration-style": "double" },
              ".decoration-dotted": { "text-decoration-style": "dotted" },
              ".decoration-dashed": { "text-decoration-style": "dashed" },
              ".decoration-wavy": { "text-decoration-style": "wavy" },
            });
          },
          textDecorationThickness: nn(
            "textDecorationThickness",
            [["decoration", ["text-decoration-thickness"]]],
            { type: ["length", "percentage"] },
          ),
          textUnderlineOffset: nn(
            "textUnderlineOffset",
            [["underline-offset", ["text-underline-offset"]]],
            { type: ["length", "percentage"] },
          ),
          fontSmoothing: ({ addUtilities: e }) => {
            e({
              ".antialiased": {
                "-webkit-font-smoothing": "antialiased",
                "-moz-osx-font-smoothing": "grayscale",
              },
              ".subpixel-antialiased": {
                "-webkit-font-smoothing": "auto",
                "-moz-osx-font-smoothing": "auto",
              },
            });
          },
          placeholderColor: ({
            matchUtilities: e,
            theme: t,
            corePlugins: r,
          }) => {
            e(
              {
                placeholder: (e) =>
                  r("placeholderOpacity")
                    ? {
                        "&::placeholder": it({
                          color: e,
                          property: "color",
                          variable: "--tw-placeholder-opacity",
                        }),
                      }
                    : { "&::placeholder": { color: sr(e) } },
              },
              { values: wn(t("placeholderColor")), type: ["color", "any"] },
            );
          },
          placeholderOpacity: ({ matchUtilities: e, theme: t }) => {
            e(
              {
                "placeholder-opacity": (e) => ({
                  "&::placeholder": { "--tw-placeholder-opacity": e },
                }),
              },
              { values: t("placeholderOpacity") },
            );
          },
          caretColor: ({ matchUtilities: e, theme: t }) => {
            e(
              { caret: (e) => ({ "caret-color": sr(e) }) },
              { values: wn(t("caretColor")), type: ["color", "any"] },
            );
          },
          accentColor: ({ matchUtilities: e, theme: t }) => {
            e(
              { accent: (e) => ({ "accent-color": sr(e) }) },
              { values: wn(t("accentColor")), type: ["color", "any"] },
            );
          },
          opacity: nn("opacity", [["opacity", ["opacity"]]]),
          backgroundBlendMode: ({ addUtilities: e }) => {
            e({
              ".bg-blend-normal": { "background-blend-mode": "normal" },
              ".bg-blend-multiply": { "background-blend-mode": "multiply" },
              ".bg-blend-screen": { "background-blend-mode": "screen" },
              ".bg-blend-overlay": { "background-blend-mode": "overlay" },
              ".bg-blend-darken": { "background-blend-mode": "darken" },
              ".bg-blend-lighten": { "background-blend-mode": "lighten" },
              ".bg-blend-color-dodge": {
                "background-blend-mode": "color-dodge",
              },
              ".bg-blend-color-burn": { "background-blend-mode": "color-burn" },
              ".bg-blend-hard-light": { "background-blend-mode": "hard-light" },
              ".bg-blend-soft-light": { "background-blend-mode": "soft-light" },
              ".bg-blend-difference": { "background-blend-mode": "difference" },
              ".bg-blend-exclusion": { "background-blend-mode": "exclusion" },
              ".bg-blend-hue": { "background-blend-mode": "hue" },
              ".bg-blend-saturation": { "background-blend-mode": "saturation" },
              ".bg-blend-color": { "background-blend-mode": "color" },
              ".bg-blend-luminosity": { "background-blend-mode": "luminosity" },
            });
          },
          mixBlendMode: ({ addUtilities: e }) => {
            e({
              ".mix-blend-normal": { "mix-blend-mode": "normal" },
              ".mix-blend-multiply": { "mix-blend-mode": "multiply" },
              ".mix-blend-screen": { "mix-blend-mode": "screen" },
              ".mix-blend-overlay": { "mix-blend-mode": "overlay" },
              ".mix-blend-darken": { "mix-blend-mode": "darken" },
              ".mix-blend-lighten": { "mix-blend-mode": "lighten" },
              ".mix-blend-color-dodge": { "mix-blend-mode": "color-dodge" },
              ".mix-blend-color-burn": { "mix-blend-mode": "color-burn" },
              ".mix-blend-hard-light": { "mix-blend-mode": "hard-light" },
              ".mix-blend-soft-light": { "mix-blend-mode": "soft-light" },
              ".mix-blend-difference": { "mix-blend-mode": "difference" },
              ".mix-blend-exclusion": { "mix-blend-mode": "exclusion" },
              ".mix-blend-hue": { "mix-blend-mode": "hue" },
              ".mix-blend-saturation": { "mix-blend-mode": "saturation" },
              ".mix-blend-color": { "mix-blend-mode": "color" },
              ".mix-blend-luminosity": { "mix-blend-mode": "luminosity" },
              ".mix-blend-plus-lighter": { "mix-blend-mode": "plus-lighter" },
            });
          },
          boxShadow: (() => {
            let e = Ti("boxShadow"),
              t = [
                "var(--tw-ring-offset-shadow, 0 0 #0000)",
                "var(--tw-ring-shadow, 0 0 #0000)",
                "var(--tw-shadow)",
              ].join(", ");
            return function ({ matchUtilities: r, addDefaults: i, theme: n }) {
              i(" box-shadow", {
                "--tw-ring-offset-shadow": "0 0 #0000",
                "--tw-ring-shadow": "0 0 #0000",
                "--tw-shadow": "0 0 #0000",
                "--tw-shadow-colored": "0 0 #0000",
              }),
                r(
                  {
                    shadow: (r) => {
                      let i = gt((r = e(r)));
                      for (let e of i)
                        !e.valid || (e.color = "var(--tw-shadow-color)");
                      return {
                        "@defaults box-shadow": {},
                        "--tw-shadow": "none" === r ? "0 0 #0000" : r,
                        "--tw-shadow-colored":
                          "none" === r ? "0 0 #0000" : bt(i),
                        "box-shadow": t,
                      };
                    },
                  },
                  { values: n("boxShadow"), type: ["shadow"] },
                );
            };
          })(),
          boxShadowColor: ({ matchUtilities: e, theme: t }) => {
            e(
              {
                shadow: (e) => ({
                  "--tw-shadow-color": sr(e),
                  "--tw-shadow": "var(--tw-shadow-colored)",
                }),
              },
              { values: wn(t("boxShadowColor")), type: ["color"] },
            );
          },
          outlineStyle: ({ addUtilities: e }) => {
            e({
              ".outline-none": {
                outline: "2px solid transparent",
                "outline-offset": "2px",
              },
              ".outline": { "outline-style": "solid" },
              ".outline-dashed": { "outline-style": "dashed" },
              ".outline-dotted": { "outline-style": "dotted" },
              ".outline-double": { "outline-style": "double" },
              ".outline-hidden": { "outline-style": "hidden" },
            });
          },
          outlineWidth: nn("outlineWidth", [["outline", ["outline-width"]]], {
            type: ["length", "number", "percentage"],
          }),
          outlineOffset: nn(
            "outlineOffset",
            [["outline-offset", ["outline-offset"]]],
            { type: ["length", "number", "percentage"] },
          ),
          outlineColor: ({ matchUtilities: e, theme: t }) => {
            e(
              { outline: (e) => ({ "outline-color": sr(e) }) },
              { values: wn(t("outlineColor")), type: ["color"] },
            );
          },
          ringWidth: ({
            matchUtilities: e,
            addDefaults: t,
            addUtilities: r,
            theme: i,
            config: n,
          }) => {
            let o = (() => {
              if (Sr(n(), "respectDefaultRingColorOpacity"))
                return i("ringColor.DEFAULT");
              let e = i("ringOpacity.DEFAULT", "0.5");
              return i("ringColor")?.DEFAULT
                ? rt(i("ringColor")?.DEFAULT, e, `rgb(147 197 253 / ${e})`)
                : `rgb(147 197 253 / ${e})`;
            })();
            t("ring-width", {
              "--tw-ring-inset": " ",
              "--tw-ring-offset-width": i("ringOffsetWidth.DEFAULT", "0px"),
              "--tw-ring-offset-color": i("ringOffsetColor.DEFAULT", "#fff"),
              "--tw-ring-color": o,
              "--tw-ring-offset-shadow": "0 0 #0000",
              "--tw-ring-shadow": "0 0 #0000",
              "--tw-shadow": "0 0 #0000",
              "--tw-shadow-colored": "0 0 #0000",
            }),
              e(
                {
                  ring: (e) => ({
                    "@defaults ring-width": {},
                    "--tw-ring-offset-shadow":
                      "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
                    "--tw-ring-shadow": `var(--tw-ring-inset) 0 0 0 calc(${e} + var(--tw-ring-offset-width)) var(--tw-ring-color)`,
                    "box-shadow": [
                      "var(--tw-ring-offset-shadow)",
                      "var(--tw-ring-shadow)",
                      "var(--tw-shadow, 0 0 #0000)",
                    ].join(", "),
                  }),
                },
                { values: i("ringWidth"), type: "length" },
              ),
              r({
                ".ring-inset": {
                  "@defaults ring-width": {},
                  "--tw-ring-inset": "inset",
                },
              });
          },
          ringColor: ({ matchUtilities: e, theme: t, corePlugins: r }) => {
            e(
              {
                ring: (e) =>
                  r("ringOpacity")
                    ? it({
                        color: e,
                        property: "--tw-ring-color",
                        variable: "--tw-ring-opacity",
                      })
                    : { "--tw-ring-color": sr(e) },
              },
              {
                values: Object.fromEntries(
                  Object.entries(wn(t("ringColor"))).filter(
                    ([e]) => "DEFAULT" !== e,
                  ),
                ),
                type: "color",
              },
            );
          },
          ringOpacity: (e) => {
            let { config: t } = e;
            return nn(
              "ringOpacity",
              [["ring-opacity", ["--tw-ring-opacity"]]],
              { filterDefault: !Sr(t(), "respectDefaultRingColorOpacity") },
            )(e);
          },
          ringOffsetWidth: nn(
            "ringOffsetWidth",
            [["ring-offset", ["--tw-ring-offset-width"]]],
            { type: "length" },
          ),
          ringOffsetColor: ({ matchUtilities: e, theme: t }) => {
            e(
              { "ring-offset": (e) => ({ "--tw-ring-offset-color": sr(e) }) },
              { values: wn(t("ringOffsetColor")), type: "color" },
            );
          },
          blur: ({ matchUtilities: e, theme: t }) => {
            e(
              {
                blur: (e) => ({
                  "--tw-blur": `blur(${e})`,
                  "@defaults filter": {},
                  filter: Pn,
                }),
              },
              { values: t("blur") },
            );
          },
          brightness: ({ matchUtilities: e, theme: t }) => {
            e(
              {
                brightness: (e) => ({
                  "--tw-brightness": `brightness(${e})`,
                  "@defaults filter": {},
                  filter: Pn,
                }),
              },
              { values: t("brightness") },
            );
          },
          contrast: ({ matchUtilities: e, theme: t }) => {
            e(
              {
                contrast: (e) => ({
                  "--tw-contrast": `contrast(${e})`,
                  "@defaults filter": {},
                  filter: Pn,
                }),
              },
              { values: t("contrast") },
            );
          },
          dropShadow: ({ matchUtilities: e, theme: t }) => {
            e(
              {
                "drop-shadow": (e) => ({
                  "--tw-drop-shadow": Array.isArray(e)
                    ? e.map((e) => `drop-shadow(${e})`).join(" ")
                    : `drop-shadow(${e})`,
                  "@defaults filter": {},
                  filter: Pn,
                }),
              },
              { values: t("dropShadow") },
            );
          },
          grayscale: ({ matchUtilities: e, theme: t }) => {
            e(
              {
                grayscale: (e) => ({
                  "--tw-grayscale": `grayscale(${e})`,
                  "@defaults filter": {},
                  filter: Pn,
                }),
              },
              { values: t("grayscale") },
            );
          },
          hueRotate: ({ matchUtilities: e, theme: t }) => {
            e(
              {
                "hue-rotate": (e) => ({
                  "--tw-hue-rotate": `hue-rotate(${e})`,
                  "@defaults filter": {},
                  filter: Pn,
                }),
              },
              { values: t("hueRotate"), supportsNegativeValues: !0 },
            );
          },
          invert: ({ matchUtilities: e, theme: t }) => {
            e(
              {
                invert: (e) => ({
                  "--tw-invert": `invert(${e})`,
                  "@defaults filter": {},
                  filter: Pn,
                }),
              },
              { values: t("invert") },
            );
          },
          saturate: ({ matchUtilities: e, theme: t }) => {
            e(
              {
                saturate: (e) => ({
                  "--tw-saturate": `saturate(${e})`,
                  "@defaults filter": {},
                  filter: Pn,
                }),
              },
              { values: t("saturate") },
            );
          },
          sepia: ({ matchUtilities: e, theme: t }) => {
            e(
              {
                sepia: (e) => ({
                  "--tw-sepia": `sepia(${e})`,
                  "@defaults filter": {},
                  filter: Pn,
                }),
              },
              { values: t("sepia") },
            );
          },
          filter: ({ addDefaults: e, addUtilities: t }) => {
            e("filter", {
              "--tw-blur": " ",
              "--tw-brightness": " ",
              "--tw-contrast": " ",
              "--tw-grayscale": " ",
              "--tw-hue-rotate": " ",
              "--tw-invert": " ",
              "--tw-saturate": " ",
              "--tw-sepia": " ",
              "--tw-drop-shadow": " ",
            }),
              t({
                ".filter": { "@defaults filter": {}, filter: Pn },
                ".filter-none": { filter: "none" },
              });
          },
          backdropBlur: ({ matchUtilities: e, theme: t }) => {
            e(
              {
                "backdrop-blur": (e) => ({
                  "--tw-backdrop-blur": `blur(${e})`,
                  "@defaults backdrop-filter": {},
                  "backdrop-filter": Dn,
                }),
              },
              { values: t("backdropBlur") },
            );
          },
          backdropBrightness: ({ matchUtilities: e, theme: t }) => {
            e(
              {
                "backdrop-brightness": (e) => ({
                  "--tw-backdrop-brightness": `brightness(${e})`,
                  "@defaults backdrop-filter": {},
                  "backdrop-filter": Dn,
                }),
              },
              { values: t("backdropBrightness") },
            );
          },
          backdropContrast: ({ matchUtilities: e, theme: t }) => {
            e(
              {
                "backdrop-contrast": (e) => ({
                  "--tw-backdrop-contrast": `contrast(${e})`,
                  "@defaults backdrop-filter": {},
                  "backdrop-filter": Dn,
                }),
              },
              { values: t("backdropContrast") },
            );
          },
          backdropGrayscale: ({ matchUtilities: e, theme: t }) => {
            e(
              {
                "backdrop-grayscale": (e) => ({
                  "--tw-backdrop-grayscale": `grayscale(${e})`,
                  "@defaults backdrop-filter": {},
                  "backdrop-filter": Dn,
                }),
              },
              { values: t("backdropGrayscale") },
            );
          },
          backdropHueRotate: ({ matchUtilities: e, theme: t }) => {
            e(
              {
                "backdrop-hue-rotate": (e) => ({
                  "--tw-backdrop-hue-rotate": `hue-rotate(${e})`,
                  "@defaults backdrop-filter": {},
                  "backdrop-filter": Dn,
                }),
              },
              { values: t("backdropHueRotate"), supportsNegativeValues: !0 },
            );
          },
          backdropInvert: ({ matchUtilities: e, theme: t }) => {
            e(
              {
                "backdrop-invert": (e) => ({
                  "--tw-backdrop-invert": `invert(${e})`,
                  "@defaults backdrop-filter": {},
                  "backdrop-filter": Dn,
                }),
              },
              { values: t("backdropInvert") },
            );
          },
          backdropOpacity: ({ matchUtilities: e, theme: t }) => {
            e(
              {
                "backdrop-opacity": (e) => ({
                  "--tw-backdrop-opacity": `opacity(${e})`,
                  "@defaults backdrop-filter": {},
                  "backdrop-filter": Dn,
                }),
              },
              { values: t("backdropOpacity") },
            );
          },
          backdropSaturate: ({ matchUtilities: e, theme: t }) => {
            e(
              {
                "backdrop-saturate": (e) => ({
                  "--tw-backdrop-saturate": `saturate(${e})`,
                  "@defaults backdrop-filter": {},
                  "backdrop-filter": Dn,
                }),
              },
              { values: t("backdropSaturate") },
            );
          },
          backdropSepia: ({ matchUtilities: e, theme: t }) => {
            e(
              {
                "backdrop-sepia": (e) => ({
                  "--tw-backdrop-sepia": `sepia(${e})`,
                  "@defaults backdrop-filter": {},
                  "backdrop-filter": Dn,
                }),
              },
              { values: t("backdropSepia") },
            );
          },
          backdropFilter: ({ addDefaults: e, addUtilities: t }) => {
            e("backdrop-filter", {
              "--tw-backdrop-blur": " ",
              "--tw-backdrop-brightness": " ",
              "--tw-backdrop-contrast": " ",
              "--tw-backdrop-grayscale": " ",
              "--tw-backdrop-hue-rotate": " ",
              "--tw-backdrop-invert": " ",
              "--tw-backdrop-opacity": " ",
              "--tw-backdrop-saturate": " ",
              "--tw-backdrop-sepia": " ",
            }),
              t({
                ".backdrop-filter": {
                  "@defaults backdrop-filter": {},
                  "backdrop-filter": Dn,
                },
                ".backdrop-filter-none": { "backdrop-filter": "none" },
              });
          },
          transitionProperty: ({ matchUtilities: e, theme: t }) => {
            let r = t("transitionTimingFunction.DEFAULT"),
              i = t("transitionDuration.DEFAULT");
            e(
              {
                transition: (e) => ({
                  "transition-property": e,
                  ...("none" === e
                    ? {}
                    : {
                        "transition-timing-function": r,
                        "transition-duration": i,
                      }),
                }),
              },
              { values: t("transitionProperty") },
            );
          },
          transitionDelay: nn("transitionDelay", [
            ["delay", ["transitionDelay"]],
          ]),
          transitionDuration: nn(
            "transitionDuration",
            [["duration", ["transitionDuration"]]],
            { filterDefault: !0 },
          ),
          transitionTimingFunction: nn(
            "transitionTimingFunction",
            [["ease", ["transitionTimingFunction"]]],
            { filterDefault: !0 },
          ),
          willChange: nn("willChange", [["will-change", ["will-change"]]]),
          content: nn("content", [
            ["content", ["--tw-content", ["content", "var(--tw-content)"]]],
          ]),
        });
    });
  function $n(e) {
    let t = [],
      r = !1;
    for (let i = 0; i < e.length; i++) {
      let n = e[i];
      if (":" === n && !r && 0 === t.length) return !1;
      if ((Mn.has(n) && "\\" !== e[i - 1] && (r = !r), !r && "\\" !== e[i - 1]))
        if (Bn.has(n)) t.push(n);
        else if (Un.has(n)) {
          let e = Un.get(n);
          if (t.length <= 0 || t.pop() !== e) return !1;
        }
    }
    return !(t.length > 0);
  }
  var Bn,
    Un,
    Mn,
    Ln = d(() => {
      m(),
        (Bn = new Map([
          ["{", "}"],
          ["[", "]"],
          ["(", ")"],
        ])),
        (Un = new Map(Array.from(Bn.entries()).map(([e, t]) => [t, e]))),
        (Mn = new Set(['"', "'", "`"]));
    });
  function zn(e, ...t) {
    for (let r of t) {
      let t = Vn(r, Yn);
      if (null === t || null === Vn(e, Yn, t)) e = r.replace(Hn, e);
      else {
        let i = `${Yn}(${t})`,
          n = r.indexOf(i),
          o = r.slice(n + i.length).split(" ")[0];
        e = e.replace(i, i + o);
      }
    }
    return e;
  }
  function Fn(
    e,
    {
      selector: t,
      candidate: r,
      context: i,
      isArbitraryVariant: n,
      base: o = r
        .split(
          new RegExp(`\\${i?.tailwindConfig?.separator ?? ":"}(?![^[]*\\])`),
        )
        .pop(),
    },
  ) {
    let s = (0, qn.default)().astSync(t);
    i?.tailwindConfig?.prefix && !n && (e = qi(i.tailwindConfig.prefix, e)),
      (e = e.replace(Hn, `.${Hi(r)}`));
    let a = (0, qn.default)().astSync(e);
    function l(e) {
      let t = [];
      for (let r of e.nodes)
        Wn(r) && (t.push(r), e.removeChild(r)), r?.nodes && t.push(...l(r));
      return t;
    }
    return (
      s.each((e) => {
        e.some((e) => "class" === e.type && e.value === o) || e.remove();
      }),
      s.walkClasses((e) => {
        e.raws &&
          e.value.includes(o) &&
          (e.raws.value = Hi((0, Gn.default)(e.raws.value)));
      }),
      s.walkClasses((e) => {
        e.value === o && e.replaceWith(...a.nodes);
      }),
      s.each((e) => {
        e.walkPseudos((e) => {
          Qn.has(e.value) && e.replaceWith(e.nodes);
        });
        let t = l(e);
        t.length > 0 && e.nodes.push(t.sort(Nn));
      }),
      s.toString()
    );
  }
  function Nn(e, t) {
    return ("pseudo" !== e.type && "pseudo" !== t.type) ||
      ("combinator" === e.type) ^ ("combinator" === t.type)
      ? 0
      : ("pseudo" === e.type) ^ ("pseudo" === t.type)
        ? ("pseudo" === e.type) - ("pseudo" === t.type)
        : Wn(e) - Wn(t);
  }
  function Wn(e) {
    return (
      "pseudo" === e.type &&
      !Xn.includes(e.value) &&
      (e.value.startsWith("::") || Jn.includes(e.value))
    );
  }
  function Vn(e, t, r) {
    let i = e.indexOf(r ? `${t}(${r})` : t);
    if (-1 === i) return null;
    i += t.length + 1;
    let n = "",
      o = 0;
    for (let t of e.slice(i))
      if ("(" !== t && ")" !== t) n += t;
      else if ("(" === t) (n += t), o++;
      else if (")" === t) {
        if (--o < 0) break;
        n += t;
      }
    return n;
  }
  var qn,
    Gn,
    Yn,
    Hn,
    Qn,
    Jn,
    Xn,
    Kn = d(() => {
      m(),
        (qn = h(ze())),
        (Gn = h(se())),
        Ji(),
        Yi(),
        (Yn = ":merge"),
        (Hn = "&"),
        (Qn = new Set([Yn])),
        (Jn = [":before", ":after", ":first-line", ":first-letter"]),
        (Xn = ["::file-selector-button"]);
    });
  function Zn(e) {
    return ho.transformSync(e);
  }
  function eo(e, t) {
    if (0 === e.length || "" === t.tailwindConfig.prefix) return e;
    for (let r of e) {
      let [e] = r;
      if (e.options.respectPrefix) {
        let e = Qr.root({ nodes: [r[1].clone()] }),
          i = r[1].raws.tailwind.classCandidate;
        e.walkRules((e) => {
          let r = i.startsWith("-");
          e.selector = qi(t.tailwindConfig.prefix, e.selector, r);
        }),
          (r[1] = e.nodes[0]);
      }
    }
    return e;
  }
  function to(e, t) {
    if (0 === e.length) return e;
    let r = [];
    for (let [i, n] of e) {
      let e = Qr.root({ nodes: [n.clone()] });
      e.walkRules((e) => {
        (e.selector = Yt(e.selector, (e) => (e === t ? `!${e}` : e))),
          e.walkDecls((e) => (e.important = !0));
      }),
        r.push([{ ...i, important: !0 }, e.nodes[0]]);
    }
    return r;
  }
  function ro(e, t, r) {
    if (0 === t.length) return t;
    let i;
    if (
      (e.endsWith("]") &&
        !e.startsWith("[") &&
        ((i = e.slice(e.lastIndexOf("[") + 1, -1)),
        (e = e.slice(0, e.indexOf(i) - 1 - 1))),
      po(e) && !r.variantMap.has(e))
    ) {
      let t = kt(e.slice(1, -1));
      if (!Co(t)) return [];
      let i = Ao(t),
        n = Array.from(r.variantOrder.values()).pop() << 1n;
      r.variantMap.set(e, [[n, i]]), r.variantOrder.set(e, n);
    }
    if (r.variantMap.has(e)) {
      let n = r.variantMap.get(e).slice(),
        o = [];
      for (let [s, a] of t) {
        if ("user" === s.layer) continue;
        let t = Qr.root({ nodes: [a.clone()] });
        for (let [a, l, c] of n) {
          let u = function () {
              p.raws.neededBackup ||
                ((p.raws.neededBackup = !0),
                p.walkRules((e) => (e.raws.originalSelector = e.selector)));
            },
            d = function (e) {
              return (
                u(),
                p.each((t) => {
                  "rule" === t.type &&
                    (t.selectors = t.selectors.map((t) =>
                      e({
                        get className() {
                          return Zn(t);
                        },
                        selector: t,
                      }),
                    ));
                }),
                p
              );
            },
            p = c ?? t.clone(),
            f = [],
            h = l({
              get container() {
                return u(), p;
              },
              separator: r.tailwindConfig.separator,
              modifySelectors: d,
              wrap(e) {
                let t = p.nodes;
                p.removeAll(), e.append(t), p.append(e);
              },
              format(e) {
                f.push(e);
              },
              args: i,
            });
          if (Array.isArray(h)) {
            for (let [e, t] of h.entries())
              n.push([a | BigInt(e << h.length), t, p.clone()]);
            continue;
          }
          if (("string" == typeof h && f.push(h), null === h)) continue;
          p.raws.neededBackup &&
            (delete p.raws.neededBackup,
            p.walkRules((t) => {
              let i = t.raws.originalSelector;
              if (!i || (delete t.raws.originalSelector, i === t.selector))
                return;
              let n = t.selector,
                o = (0, fo.default)((t) => {
                  t.walkClasses((t) => {
                    t.value = `${e}${r.tailwindConfig.separator}${t.value}`;
                  });
                }).processSync(i);
              f.push(n.replace(o, "&")), (t.selector = i);
            })),
            (p.nodes[0].raws.tailwind = {
              ...p.nodes[0].raws.tailwind,
              parentLayer: s.layer,
            });
          let m = [
            {
              ...s,
              sort: a | s.sort,
              collectedFormats: (s.collectedFormats ?? []).concat(f),
              isArbitraryVariant: po(e),
            },
            p.nodes[0],
          ];
          o.push(m);
        }
      }
      return o;
    }
    return [];
  }
  function io(e, t, r = {}) {
    return re(e) || Array.isArray(e)
      ? Array.isArray(e)
        ? io(e[0], t, e[1])
        : (t.has(e) || t.set(e, Ni(e)), [t.get(e), r])
      : [[e], r];
  }
  function no(e) {
    let t = !0;
    return (
      e.walkDecls((e) => {
        if (!oo(e.name, e.value)) return (t = !1), !1;
      }),
      t
    );
  }
  function oo(e, t) {
    if (
      (function (e) {
        if (!e.includes("://")) return !1;
        try {
          let t = new URL(e);
          return "" !== t.scheme && "" !== t.host;
        } catch (e) {
          return !1;
        }
      })(`${e}:${t}`)
    )
      return !1;
    try {
      return Qr.parse(`a{${e}:${t}}`).toResult(), !0;
    } catch (e) {
      return !1;
    }
  }
  function so(e, t) {
    let [, r, i] = e.match(/^\[([a-zA-Z0-9-_]+):(\S+)\]$/) ?? [];
    if (
      void 0 === i ||
      !(function (e) {
        return mo.test(e);
      })(r) ||
      !$n(i)
    )
      return null;
    let n = kt(i);
    return oo(r, n)
      ? [
          [
            { sort: t.arbitraryPropertiesSort, layer: "utilities" },
            () => ({ [Xi(e)]: { [r]: n } }),
          ],
        ]
      : null;
  }
  function* ao(e, t) {
    for (let r of e)
      (r[1].raws.tailwind = {
        ...r[1].raws.tailwind,
        classCandidate: t,
        preserveSource: r[0].options?.preserveSource ?? !1,
      }),
        yield r;
  }
  function* lo(e, t, r = e) {
    let i = t.tailwindConfig.separator,
      [n, ...o] = (function (e, t) {
        return e === Vr ? [Vr] : Array.from(ht(e, t));
      })(e, i).reverse(),
      s = !1;
    if (
      (n.startsWith("!") && ((s = !0), (n = n.slice(1))),
      Sr(t.tailwindConfig, "variantGrouping") &&
        n.startsWith("(") &&
        n.endsWith(")"))
    ) {
      let e = o.slice().reverse().join(i);
      for (let o of ht(n.slice(1, -1), ",")) yield* lo(e + i + o, t, r);
    }
    for (let i of (function* (e, t) {
      t.candidateRuleMap.has(e) &&
        (yield [t.candidateRuleMap.get(e), "DEFAULT"]),
        yield* (function* (e) {
          null !== e && (yield [e, "DEFAULT"]);
        })(so(e, t));
      let r = e,
        i = !1,
        n = t.tailwindConfig.prefix,
        o = n.length,
        s = r.startsWith(n) || r.startsWith(`-${n}`);
      "-" === r[o] && s && ((i = !0), (r = n + r.slice(o + 1))),
        i &&
          t.candidateRuleMap.has(r) &&
          (yield [t.candidateRuleMap.get(r), "-DEFAULT"]);
      for (let [e, n] of (function* (e) {
        let t = 1 / 0;
        for (; t >= 0; ) {
          let r;
          if (t === 1 / 0 && e.endsWith("]")) {
            let t = e.indexOf("[");
            r = ["-", "/"].includes(e[t - 1]) ? t - 1 : -1;
          } else r = e.lastIndexOf("-", t);
          if (r < 0) break;
          let i = e.slice(0, r),
            n = e.slice(r + 1);
          yield [i, n], (t = r - 1);
        }
      })(r))
        t.candidateRuleMap.has(e) &&
          (yield [t.candidateRuleMap.get(e), i ? `-${n}` : n]);
    })(n, t)) {
      let a = [],
        l = new Map(),
        [c, u] = i,
        d = 1 === c.length;
      for (let [e, r] of c) {
        let i = [];
        if ("function" == typeof r)
          for (let n of [].concat(r(u, { isOnlyPlugin: d }))) {
            let [r, o] = io(n, t.postCssNodeCache);
            for (let t of r)
              i.push([{ ...e, options: { ...e.options, ...o } }, t]);
          }
        else if ("DEFAULT" === u || "-DEFAULT" === u) {
          let n = r,
            [o, s] = io(n, t.postCssNodeCache);
          for (let t of o)
            i.push([{ ...e, options: { ...e.options, ...s } }, t]);
        }
        i.length > 0 && (l.set(i, e.options?.type), a.push(i));
      }
      if (po(u)) {
        if (a.length > 1) {
          let t = a.map((e) => new Set([...(l.get(e) ?? [])]));
          for (let e of t)
            for (let r of e) {
              let i = !1;
              for (let n of t) e !== n && n.has(r) && (n.delete(r), (i = !0));
              i && e.delete(r);
            }
          let r = [];
          for (let [i, n] of t.entries())
            for (let t of n) {
              let n = a[i]
                .map(([, e]) => e)
                .flat()
                .map((e) =>
                  e
                    .toString()
                    .split("\n")
                    .slice(1, -1)
                    .map((e) => e.trim())
                    .map((e) => `      ${e}`)
                    .join("\n"),
                )
                .join("\n\n");
              r.push(
                `  Use \`${e.replace("[", `[${t}:`)}\` for \`${n.trim()}\``,
              );
              break;
            }
          q.warn([
            `The class \`${e}\` is ambiguous and matches multiple utilities.`,
            ...r,
            `If this is content and not a class, replace it with \`${e
              .replace("[", "&lsqb;")
              .replace("]", "&rsqb;")}\` to silence this warning.`,
          ]);
          continue;
        }
        a = a.map((e) => e.filter((e) => no(e[1])));
      }
      (a = a.flat()),
        (a = Array.from(ao(a, n))),
        (a = eo(a, t)),
        s && (a = to(a, n));
      for (let e of o) a = ro(e, a, t);
      for (let i of a) {
        if (
          ((i[1].raws.tailwind = { ...i[1].raws.tailwind, candidate: e }),
          i[0].collectedFormats)
        ) {
          let n = zn("&", ...i[0].collectedFormats),
            o = Qr.root({ nodes: [i[1].clone()] });
          o.walkRules((o) => {
            co(o) ||
              (o.selector = Fn(n, {
                selector: o.selector,
                candidate: r,
                base: e
                  .split(
                    new RegExp(
                      `\\${t?.tailwindConfig?.separator ?? ":"}(?![^[]*\\])`,
                    ),
                  )
                  .pop(),
                isArbitraryVariant: i[0].isArbitraryVariant,
                context: t,
              }));
          }),
            (i[1] = o.nodes[0]);
        }
        yield i;
      }
    }
  }
  function co(e) {
    return (
      e.parent && "atrule" === e.parent.type && "keyframes" === e.parent.name
    );
  }
  function uo(e, t) {
    let r = [];
    for (let i of e) {
      if (t.notClassCache.has(i)) continue;
      if (t.classCache.has(i)) {
        r.push(t.classCache.get(i));
        continue;
      }
      let e = Array.from(lo(i, t));
      0 !== e.length
        ? (t.classCache.set(i, e), r.push(e))
        : t.notClassCache.add(i);
    }
    let i =
      !0 === (n = t.tailwindConfig.important)
        ? (e) => {
            e.walkDecls((e) => {
              "rule" === e.parent.type && !co(e.parent) && (e.important = !0);
            });
          }
        : "string" == typeof n
          ? (e) => {
              e.selectors = e.selectors.map((e) => `${n} ${e}`);
            }
          : void 0;
    var n;
    return r.flat(1).map(([{ sort: e, layer: r, options: n }, o]) => {
      if (n.respectImportant && i) {
        let e = Qr.root({ nodes: [o.clone()] });
        e.walkRules((e) => {
          co(e) || i(e);
        }),
          (o = e.nodes[0]);
      }
      return [e | t.layerOrder[r], o];
    });
  }
  function po(e) {
    return e.startsWith("[") && e.endsWith("]");
  }
  var fo,
    ho,
    mo,
    go = d(() => {
      m(),
        Oi(),
        (fo = h(ze())),
        Vi(),
        ie(),
        Yi(),
        or(),
        G(),
        qr(),
        Kn(),
        en(),
        Gt(),
        Fo(),
        Ln(),
        mt(),
        Or(),
        (ho = (0, fo.default)(
          (e) => e.first.filter(({ type: e }) => "class" === e).pop().value,
        )),
        (mo = /^[a-z_-]/);
    });
  function bo(e, t) {
    let r = t.toString();
    if (!r.includes("@tailwind")) return !1;
    let i = Wr.get(e),
      n = (function (e) {
        try {
          return E.createHash("md5").update(e, "utf-8").digest("binary");
        } catch (e) {
          return "";
        }
      })(r),
      o = i !== n;
    return Wr.set(e, n), o;
  }
  var yo = d(() => {
    m(), P(), qr();
  });
  function wo(e, t) {
    let r = e.tailwindConfig.prefix;
    return "function" == typeof r ? r(t) : r + t;
  }
  function vo(e) {
    if (e.includes("{")) {
      if (
        !(function (e) {
          let t = 0;
          for (let r of e)
            if ("{" === r) t++;
            else if ("}" === r && --t < 0) return !1;
          return 0 === t;
        })(e)
      )
        throw new Error("Your { and } are unbalanced.");
      return e
        .split(/{(.*)}/gim)
        .flatMap((e) => vo(e))
        .filter(Boolean);
    }
    return [e.trim()];
  }
  function xo(e) {
    return Array.isArray(e)
      ? e.flatMap((e) => (Array.isArray(e) || re(e) ? Ni(e) : e))
      : xo([e]);
  }
  function ko(e, t) {
    return (0, Io.default)((e) => {
      let r = [];
      return (
        t && t(e),
        e.walkClasses((e) => {
          r.push(e.value);
        }),
        r
      );
    }).transformSync(e);
  }
  function So(e) {
    return xo(e).flatMap((e) => {
      let t = new Map(),
        [r, i] = (function (e, t = { containsNonOnDemandable: !1 }, r = 0) {
          let i = [];
          if ("rule" === e.type) {
            let r = function (e) {
              e.walkPseudos((e) => {
                ":not" === e.value && e.remove();
              });
            };
            for (let n of e.selectors) {
              let e = ko(n, r);
              0 === e.length && (t.containsNonOnDemandable = !0);
              for (let t of e) i.push(t);
            }
          } else
            "atrule" === e.type &&
              e.walkRules((e) => {
                for (let t of e.selectors.flatMap((e) => ko(e))) i.push(t);
              });
          return 0 === r ? [t.containsNonOnDemandable || 0 === i.length, i] : i;
        })(e);
      return (
        r && i.unshift(Vr),
        i.map((r) => (t.has(e) || t.set(e, e), [r, t.get(e)]))
      );
    });
  }
  function Co(e) {
    return e.startsWith("@") || e.includes("&");
  }
  function Ao(e) {
    let t = vo(
      (e = e
        .replace(/\n+/g, "")
        .replace(/\s{1,}/g, " ")
        .trim()),
    )
      .map((e) => {
        if (!e.startsWith("@")) return ({ format: t }) => t(e);
        let [, t, r] = /@(.*?)( .+|[({].*)/g.exec(e);
        return ({ wrap: e }) => e(Qr.atRule({ name: t, params: r.trim() }));
      })
      .reverse();
    return (e) => {
      for (let r of t) r(e);
    };
  }
  function _o(
    e,
    t,
    { variantList: r, variantMap: i, offsets: n, classList: o },
  ) {
    function s(t, r) {
      return t ? (0, jo.default)(e, t, r) : e;
    }
    function a(e, r) {
      return e === Vr ? Vr : r.respectPrefix ? t.tailwindConfig.prefix + e : e;
    }
    function l(e, t, r = {}) {
      let [i, ...n] = Z(e),
        o = s(["theme", i, ...n], t);
      return Ti(i)(o, r);
    }
    let c = Object.assign((e, t) => l(e, t), {
        withAlpha: (e, t) => l(e, void 0, { opacityValue: t }),
      }),
      u = {
        postcss: Qr,
        prefix: function (t) {
          return qi(e.prefix, t);
        },
        e: Hi,
        config: s,
        theme: c,
        corePlugins: (t) =>
          Array.isArray(e.corePlugins)
            ? e.corePlugins.includes(t)
            : s(["corePlugins", t], !0),
        variants: () => [],
        addBase(e) {
          for (let [r, i] of So(e)) {
            let e = a(r, {}),
              o = n.base++;
            t.candidateRuleMap.has(e) || t.candidateRuleMap.set(e, []),
              t.candidateRuleMap.get(e).push([{ sort: o, layer: "base" }, i]);
          }
        },
        addDefaults(e, r) {
          let i = { [`@defaults ${e}`]: r };
          for (let [e, r] of So(i)) {
            let i = a(e, {});
            t.candidateRuleMap.has(i) || t.candidateRuleMap.set(i, []),
              t.candidateRuleMap
                .get(i)
                .push([{ sort: n.base++, layer: "defaults" }, r]);
          }
        },
        addComponents(e, r) {
          r = Object.assign(
            {},
            { preserveSource: !1, respectPrefix: !0, respectImportant: !1 },
            Array.isArray(r) ? {} : r,
          );
          for (let [i, s] of So(e)) {
            let e = a(i, r);
            o.add(e),
              t.candidateRuleMap.has(e) || t.candidateRuleMap.set(e, []),
              t.candidateRuleMap
                .get(e)
                .push([
                  { sort: n.components++, layer: "components", options: r },
                  s,
                ]);
          }
        },
        addUtilities(e, r) {
          r = Object.assign(
            {},
            { preserveSource: !1, respectPrefix: !0, respectImportant: !0 },
            Array.isArray(r) ? {} : r,
          );
          for (let [i, s] of So(e)) {
            let e = a(i, r);
            o.add(e),
              t.candidateRuleMap.has(e) || t.candidateRuleMap.set(e, []),
              t.candidateRuleMap
                .get(e)
                .push([
                  { sort: n.utilities++, layer: "utilities", options: r },
                  s,
                ]);
          }
        },
        matchUtilities: function (r, i) {
          i = { respectPrefix: !0, respectImportant: !0, ...i };
          let s = n.utilities++;
          for (let n in r) {
            let l = function (t, { isOnlyPlugin: r }) {
                let { type: o = "any" } = i;
                o = [].concat(o);
                let [s, a] = tr(o, t, i, e);
                return void 0 === s
                  ? []
                  : (o.includes(a) || r) && $n(s)
                    ? []
                        .concat(u(s))
                        .filter(Boolean)
                        .map((e) => ({ [Ki(n, t)]: e }))
                    : [];
              },
              c = a(n, i),
              u = r[n];
            o.add([c, i]);
            let d = [{ sort: s, layer: "utilities", options: i }, l];
            t.candidateRuleMap.has(c) || t.candidateRuleMap.set(c, []),
              t.candidateRuleMap.get(c).push(d);
          }
        },
        matchComponents: function (r, i) {
          i = { respectPrefix: !0, respectImportant: !1, ...i };
          let s = n.components++;
          for (let n in r) {
            let l = function (t, { isOnlyPlugin: r }) {
                let { type: o = "any" } = i;
                o = [].concat(o);
                let [s, a] = tr(o, t, i, e);
                if (void 0 === s) return [];
                if (!o.includes(a)) {
                  if (!r) return [];
                  q.warn([
                    `Unnecessary typehint \`${a}\` in \`${n}-${t}\`.`,
                    `You can safely update it to \`${n}-${t.replace(
                      a + ":",
                      "",
                    )}\`.`,
                  ]);
                }
                return $n(s)
                  ? []
                      .concat(u(s))
                      .filter(Boolean)
                      .map((e) => ({ [Ki(n, t)]: e }))
                  : [];
              },
              c = a(n, i),
              u = r[n];
            o.add([c, i]);
            let d = [{ sort: s, layer: "components", options: i }, l];
            t.candidateRuleMap.has(c) || t.candidateRuleMap.set(c, []),
              t.candidateRuleMap.get(c).push(d);
          }
        },
        addVariant(e, t, n = {}) {
          (t = [].concat(t).map((t) => {
            if ("string" != typeof t)
              return (r) => {
                let {
                    args: i,
                    modifySelectors: n,
                    container: o,
                    separator: s,
                    wrap: a,
                    format: l,
                  } = r,
                  c = t(
                    Object.assign(
                      { modifySelectors: n, container: o, separator: s },
                      t[Ro] && { args: i, wrap: a, format: l },
                    ),
                  );
                if ("string" == typeof c && !Co(c))
                  throw new Error(
                    `Your custom variant \`${e}\` has an invalid format string. Make sure it's an at-rule or contains a \`&\` placeholder.`,
                  );
                return Array.isArray(c)
                  ? c.filter((e) => "string" == typeof e).map((e) => Ao(e))
                  : c && "string" == typeof c && Ao(c)(r);
              };
            if (!Co(t))
              throw new Error(
                `Your custom variant \`${e}\` has an invalid format string. Make sure it's an at-rule or contains a \`&\` placeholder.`,
              );
            return Ao(t);
          })),
            (function (e, t, { before: r = [] } = {}) {
              if ((r = [].concat(r)).length <= 0) return void e.push(t);
              let i = e.length - 1;
              for (let t of r) {
                let r = e.indexOf(t);
                -1 !== r && (i = Math.min(i, r));
              }
              e.splice(i, 0, t);
            })(r, e, n),
            i.set(e, t);
        },
      };
    return (
      Sr(e, "matchVariant") &&
        (u.matchVariant = function (e, t) {
          for (let r in e) {
            for (let [i, n] of Object.entries(t?.values ?? {}))
              u.addVariant(`${r}-${i}`, e[r](n));
            u.addVariant(
              r,
              Object.assign(({ args: t }) => e[r](t), { [Ro]: !0 }),
              t,
            );
          }
        }),
      u
    );
  }
  function Oo(e) {
    return $o.has(e) || $o.set(e, new Map()), $o.get(e);
  }
  function Eo(e, t) {
    let i = !1;
    for (let n of e) {
      if (!n) continue;
      let e = Yr.parse(n),
        o = e.hash ? e.href.replace(e.hash, "") : e.href;
      o = e.search ? o.replace(e.search, "") : o;
      let s = r.statSync(decodeURIComponent(o), {
        throwIfNoEntry: !1,
      })?.mtimeMs;
      !s || ((!t.has(n) || s > t.get(n)) && (i = !0), t.set(n, s));
    }
    return i;
  }
  function To(e) {
    e.walkAtRules((e) => {
      ["responsive", "variants"].includes(e.name) &&
        (To(e), e.before(e.nodes), e.remove());
    });
  }
  function Po(e) {
    let t = [];
    return (
      e.each((e) => {
        "atrule" === e.type &&
          ["responsive", "variants"].includes(e.name) &&
          ((e.name = "layer"), (e.params = "utilities"));
      }),
      e.walkAtRules("layer", (e) => {
        if ((To(e), "base" === e.params)) {
          for (let r of e.nodes)
            t.push(function ({ addBase: e }) {
              e(r, { respectPrefix: !1 });
            });
          e.remove();
        } else if ("components" === e.params) {
          for (let r of e.nodes)
            t.push(function ({ addComponents: e }) {
              e(r, { respectPrefix: !1, preserveSource: !0 });
            });
          e.remove();
        } else if ("utilities" === e.params) {
          for (let r of e.nodes)
            t.push(function ({ addUtilities: e }) {
              e(r, { respectPrefix: !1, preserveSource: !0 });
            });
          e.remove();
        }
      }),
      t
    );
  }
  function Do(e, t = [], r = Qr.root()) {
    let i = {
        disposables: [],
        ruleCache: new Set(),
        classCache: new Map(),
        applyClassCache: new Map(),
        notClassCache: new Set(),
        postCssNodeCache: new Map(),
        candidateRuleMap: new Map(),
        tailwindConfig: e,
        changedContent: t,
        variantMap: new Map(),
        stylesheetCache: null,
      },
      n = (function (e, t) {
        let r = Object.entries({ ...En, ...jn })
            .map(([t, r]) =>
              e.tailwindConfig.corePlugins.includes(t) ? r : null,
            )
            .filter(Boolean),
          i = e.tailwindConfig.plugins.map(
            (e) => (
              e.__isOptionsFunction && (e = e()),
              "function" == typeof e ? e : e.handler
            ),
          ),
          n = Po(t);
        return [
          ...r,
          En.pseudoElementVariants,
          En.pseudoClassVariants,
          ...i,
          En.directionVariants,
          En.reducedMotionVariants,
          En.prefersContrastVariants,
          En.darkVariants,
          En.printVariant,
          En.screenVariants,
          En.orientationVariants,
          ...n,
        ];
      })(i, r);
    return (
      (function (e, t) {
        let r = [],
          i = new Map(),
          n = {
            defaults: 0n,
            base: 0n,
            components: 0n,
            utilities: 0n,
            user: 0n,
          },
          o = new Set(),
          s = _o(t.tailwindConfig, t, {
            variantList: r,
            variantMap: i,
            offsets: n,
            classList: o,
          });
        for (let t of e)
          if (Array.isArray(t)) for (let e of t) e(s);
          else t?.(s);
        let a = [n.base, n.defaults, n.components, n.utilities, n.user].reduce(
            (e, t) => (t > e ? t : e),
          ),
          l = BigInt(a.toString(2).length);
        (t.arbitraryPropertiesSort = ((1n << l) << 0n) - 1n),
          (t.layerOrder = {
            defaults: (1n << l) << 0n,
            base: (1n << l) << 1n,
            components: (1n << l) << 2n,
            utilities: (1n << l) << 3n,
            user: (1n << l) << 4n,
          }),
          (l += 5n);
        let c = 0;
        (t.variantOrder = new Map(
          r
            .map((e, t) => {
              let r = i.get(e).length,
                n = (1n << BigInt(t + c)) << l;
              return (c += r - 1), [e, n];
            })
            .sort(([, e], [, t]) => tn(e - t)),
        )),
          (t.minimumScreen = [...t.variantOrder.values()].shift());
        for (let [e, r] of i.entries()) {
          let i = t.variantOrder.get(e);
          t.variantMap.set(
            e,
            r.map((e, t) => [i << BigInt(t), e]),
          );
        }
        let u = (t.tailwindConfig.safelist ?? []).filter(Boolean);
        if (u.length > 0) {
          let e = [];
          for (let r of u)
            "string" != typeof r
              ? r instanceof RegExp
                ? q.warn("root-regex", [
                    "Regular expressions in `safelist` work differently in Tailwind CSS v3.0.",
                    "Update your `safelist` configuration to eliminate this warning.",
                    "https://tailwindcss.com/docs/content-configuration#safelisting-classes",
                  ])
                : e.push(r)
              : t.changedContent.push({ content: r, extension: "html" });
          if (e.length > 0) {
            let r = new Map(),
              i = t.tailwindConfig.prefix.length;
            for (let n of o) {
              let o = Array.isArray(n)
                ? (() => {
                    let [e, r] = n,
                      o = Object.keys(r?.values ?? {}).map((t) => Zi(e, t));
                    return (
                      r?.supportsNegativeValues &&
                        ((o = [...o, ...o.map((e) => "-" + e)]),
                        (o = [
                          ...o,
                          ...o.map((e) => e.slice(0, i) + "-" + e.slice(i)),
                        ])),
                      [].concat(r?.type).includes("color") &&
                        (o = [
                          ...o,
                          ...o.flatMap((e) =>
                            Object.keys(t.tailwindConfig.theme.opacity).map(
                              (t) => `${e}/${t}`,
                            ),
                          ),
                        ]),
                      o
                    );
                  })()
                : [n];
              for (let i of o)
                for (let { pattern: n, variants: o = [] } of e)
                  if (((n.lastIndex = 0), r.has(n) || r.set(n, 0), n.test(i))) {
                    r.set(n, r.get(n) + 1),
                      t.changedContent.push({ content: i, extension: "html" });
                    for (let e of o)
                      t.changedContent.push({
                        content: e + t.tailwindConfig.separator + i,
                        extension: "html",
                      });
                  }
            }
            for (let [e, t] of r.entries())
              0 === t &&
                q.warn([
                  `The safelist pattern \`${e}\` doesn't match any Tailwind CSS classes.`,
                  "Fix this pattern or remove it from your `safelist` configuration.",
                  "https://tailwindcss.com/docs/content-configuration#safelisting-classes",
                ]);
          }
        }
        let d = new Set([wo(t, "group"), wo(t, "peer")]);
        (t.getClassOrder = function (e) {
          let r = new Map();
          for (let [i, n] of uo(new Set(e), t))
            r.has(n.raws.tailwind.candidate) ||
              r.set(n.raws.tailwind.candidate, i);
          return e.map((e) => {
            let i = r.get(e) ?? null;
            return (
              null === i && d.has(e) && (i = t.layerOrder.components), [e, i]
            );
          });
        }),
          (t.getClassList = function () {
            let e = [];
            for (let t of o)
              if (Array.isArray(t)) {
                let [r, i] = t,
                  n = [];
                for (let [t, o] of Object.entries(i?.values ?? {}))
                  e.push(Zi(r, t)),
                    i?.supportsNegativeValues && I(o) && n.push(Zi(r, `-${t}`));
                e.push(...n);
              } else e.push(t);
            return e;
          });
      })(n, i),
      i
    );
  }
  var jo,
    Io,
    Ro,
    $o,
    Bo,
    Uo,
    Mo,
    Lo,
    zo,
    Fo = d(() => {
      m(),
        g(),
        Jr(),
        Oi(),
        (jo = h(Ei())),
        (Io = h(ze())),
        Or(),
        ji(),
        Vi(),
        Yi(),
        ie(),
        Ji(),
        en(),
        or(),
        rn(),
        Rn(),
        qr(),
        qr(),
        ee(),
        G(),
        $(),
        Ln(),
        go(),
        yo(),
        (Ro = Symbol()),
        ($o = new WeakMap()),
        (Bo = zr),
        (Uo = Fr),
        (Mo = Nr);
    }),
    No = d(() => {
      m(), (Lo = () => !1);
    }),
    Wo = d(() => {
      m(), (zo = () => "");
    });
  function Vo(t) {
    if (t.startsWith("!")) return null;
    let r;
    if (Lo(t)) {
      let { base: e, glob: i } = (function (e) {
        let t = e,
          r = zo(e);
        return (
          "." !== r &&
            ((t = e.substr(r.length)),
            "/" === t.charAt(0) && (t = t.substr(1))),
          "./" === t.substr(0, 2) && (t = t.substr(2)),
          "/" === t.charAt(0) && (t = t.substr(1)),
          { base: r, glob: t }
        );
      })(t);
      r = { type: "dir-dependency", dir: y.resolve(e), glob: i };
    } else r = { type: "dependency", file: y.resolve(t) };
    return (
      "dir-dependency" === r.type &&
        "true" === e.env.ROLLUP_WATCH &&
        (r = { type: "dependency", file: r.dir }),
      r
    );
  }
  var qo = d(() => {
    m(), No(), Wo(), k();
  });
  function Go(e) {
    return (
      0 === e.content.files.length &&
        q.warn("content-problems", [
          "The `content` option in your Tailwind CSS configuration is missing or empty.",
          "Configure your content sources or your generated CSS will be missing styles.",
          "https://tailwindcss.com/docs/content-configuration",
        ]),
      e
    );
  }
  var Yo = d(() => {
    m(), G();
  });
  function Ho(e) {
    let t = Br(e);
    if (null !== t) {
      let [e, i, n, o] = Ko.get(t) || [],
        s = (function (e) {
          let t = [D(e)];
          for (let e of t)
            e.requires
              .filter((e) => e.startsWith("./") || e.startsWith("../"))
              .forEach((r) => {
                try {
                  let i = y.dirname(e.file),
                    n = D(E.sync(r, { basedir: i }));
                  t.push(n);
                } catch (e) {}
              });
          return t;
        })(t).map((e) => e.file),
        a = !1,
        l = new Map();
      for (let e of s) {
        let t = r.statSync(e).mtimeMs;
        l.set(e, t), (!o || !o.has(e) || t > o.get(e)) && (a = !0);
      }
      if (!a) return [e, t, i, n];
      for (let e of s) delete u.cache[e];
      let c = jr(u(t));
      c = Go(c);
      let d = O(c);
      return Ko.set(t, [c, d, s, l]), [c, t, d, s];
    }
    let i = jr(void 0 === e.config ? e : e.config);
    return (i = Go(i)), [i, null, O(i), []];
  }
  function Qo(e, t, i) {
    let n = e.tailwindConfig.content.files
      .filter((e) => "string" == typeof e.raw)
      .map(({ raw: e, extension: t = "html" }) => ({
        content: e,
        extension: t,
      }));
    for (let e of (function (e, t) {
      let i = new Set();
      Lr.DEBUG && console.time("Finding changed files");
      let n = w.sync(e);
      for (let e of n) {
        let n = t.has(e) ? t.get(e) : -1 / 0,
          o = r.statSync(e).mtimeMs;
        o > n && (i.add(e), t.set(e, o));
      }
      return Lr.DEBUG && console.timeEnd("Finding changed files"), i;
    })(t, i)) {
      let t = r.readFileSync(e, "utf8"),
        i = y.extname(e).slice(1);
      n.push({ content: t, extension: i });
    }
    return n;
  }
  function Jo(e) {
    return ({ tailwindDirectives: t, registerDependency: r }) =>
      (i, n) => {
        let [o, s, a, l] = Ho(e),
          c = new Set(l);
        if (t.size > 0) {
          c.add(n.opts.from);
          for (let e of n.messages) "dependency" === e.type && c.add(e.file);
        }
        let [u] = (function (e, t, r, i, n, o) {
            let s,
              a = t.opts.from,
              l = null !== i;
            if ((Lr.DEBUG && console.log("Source path:", a), l && Bo.has(a)))
              s = Bo.get(a);
            else if (Uo.has(n)) {
              let e = Uo.get(n);
              Mo.get(e).add(a), Bo.set(a, e), (s = e);
            }
            let c = bo(a, e);
            if (s && !Eo([...o], Oo(s)) && !c) return [s, !1];
            if (Bo.has(a)) {
              let e = Bo.get(a);
              if (Mo.has(e) && (Mo.get(e).delete(a), 0 === Mo.get(e).size)) {
                Mo.delete(e);
                for (let [t, r] of Uo) r === e && Uo.delete(t);
                for (let t of e.disposables.splice(0)) t(e);
              }
            }
            Lr.DEBUG && console.log("Setting up new context...");
            let u = Do(r, [], e);
            return (
              Eo([...o], Oo(u)),
              Uo.set(n, u),
              Bo.set(a, u),
              Mo.has(u) || Mo.set(u, new Set()),
              Mo.get(u).add(a),
              [u, !0]
            );
          })(i, n, o, s, a, c),
          d = (function (e, t) {
            if (Zo.has(e)) return Zo.get(e);
            let r = t.content.files
              .filter((e) => "string" == typeof e)
              .map((e) => v(e));
            return Zo.set(e, r).get(e);
          })(u, o);
        if (t.size > 0) {
          let e = Oo(u);
          for (let e of d) {
            let t = Vo(e);
            t && r(t);
          }
          for (let t of Qo(u, d, e)) u.changedContent.push(t);
        }
        for (let e of l) r({ type: "dependency", file: e });
        return u;
      };
  }
  var Xo,
    Ko,
    Zo,
    es = d(() => {
      m(),
        g(),
        k(),
        S(),
        (Xo = h(C())),
        A(),
        T(),
        j(),
        Ir(),
        Ur(),
        qr(),
        Fo(),
        qo(),
        Yo(),
        (Ko = new Xo.default({ maxSize: 100 })),
        (Zo = new WeakMap());
    });
  var ts = d(() => {
    m(), G();
  });
  function rs(e, t, r) {
    return e.map((e) => {
      let i = e.clone(),
        n = !0 !== e.raws.tailwind?.preserveSource || !i.source;
      return (
        void 0 !== t &&
          n &&
          ((i.source = t),
          "walk" in i &&
            i.walk((e) => {
              e.source = t;
            })),
        void 0 !== r && (i.raws.tailwind = { ...i.raws.tailwind, ...r }),
        i
      );
    });
  }
  var is = d(() => {
    m();
  });
  function ns(e) {
    let t = Array.from(
      (function* (e) {
        let t = e.tailwindConfig.separator,
          r = Sr(e.tailwindConfig, "variantGrouping"),
          i =
            "" !== e.tailwindConfig.prefix
              ? lt(st([/-?/, ut(e.tailwindConfig.prefix)]))
              : "",
          n = at([
            /\[[^\s:'"`]+:[^\s\]]+\]/,
            st([
              /-?(?:\w+)/,
              lt(
                at([
                  st([
                    /-(?:\w+-)*\[[^\s:]+\]/,
                    /(?![{([]])/,
                    /(?:\/[^\s'"`\\><$]*)?/,
                  ]),
                  st([
                    /-(?:\w+-)*\[[^\s]+\]/,
                    /(?![{([]])/,
                    /(?:\/[^\s'"`\\$]*)?/,
                  ]),
                  /[-\/][^\s'"`\\$={><]*/,
                ]),
              ),
            ]),
          ]),
          o = [
            at([
              st([/([^\s"'`\[\\]+-)?\[[^\s"'`]+\]/, t]),
              st([/[^\s"'`\[\\]+/, t]),
            ]),
            at([
              st([/([^\s"'`\[\\]+-)?\[[^\s`]+\]/, t]),
              st([/[^\s`\[\\]+/, t]),
            ]),
          ];
        for (let e of o)
          yield st([
            "((?=((",
            e,
            ")+))\\2)?",
            /!?/,
            i,
            r ? at([st([/\(/, n, ct([/,/, n]), /\)/]), n]) : n,
          ]);
        yield /[^<>"'`\s.(){}[\]#=%$]*[^<>"'`\s.(){}[\]#=%:$]/g;
      })(e),
    );
    return (e) => {
      let r = [];
      for (let i of t) r = [...r, ...(e.match(i) ?? [])];
      return r.filter((e) => void 0 !== e).map(os);
    };
  }
  function os(e) {
    if (!e.includes("-[")) return e;
    let t = 0,
      r = [],
      i = e.matchAll(ss);
    i = Array.from(i).flatMap((e) => {
      let [, ...t] = e;
      return t.map((t, r) =>
        Object.assign([], e, { index: e.index + r, 0: t }),
      );
    });
    for (let n of i) {
      let i = n[0],
        o = r[r.length - 1];
      if (
        (i === o ? r.pop() : ("'" === i || '"' === i || "`" === i) && r.push(i),
        !o)
      ) {
        if ("[" === i) {
          t++;
          continue;
        }
        if ("]" === i) {
          t--;
          continue;
        }
        if (t < 0 || (0 === t && !as.test(i))) return e.substring(0, n.index);
      }
    }
    return e;
  }
  var ss,
    as,
    ls = d(() => {
      m(),
        Or(),
        ft(),
        (ss = /([\[\]'"`])([^\[\]'"`])?/g),
        (as = /[^"'`\s<>\]]+/);
    });
  function cs(e, t) {
    let r = e.tailwindConfig.content.extract;
    return r[t] || r.DEFAULT || ms[t] || ms.DEFAULT(e);
  }
  function us(e, t) {
    let r = e.content.transform;
    return r[t] || r.DEFAULT || gs[t] || gs.DEFAULT;
  }
  function ds(e, t, r, i) {
    bs.has(t) || bs.set(t, new fs.default({ maxSize: 25e3 }));
    for (let n of e.split("\n"))
      if (((n = n.trim()), !i.has(n)))
        if ((i.add(n), bs.get(t).has(n)))
          for (let e of bs.get(t).get(n)) r.add(e);
        else {
          let e = t(n).filter((e) => "!*" !== e),
            i = new Set(e);
          for (let e of i) r.add(e);
          bs.get(t).set(n, i);
        }
  }
  function ps(e) {
    return (t) => {
      let r = { base: null, components: null, utilities: null, variants: null };
      if (
        (t.walkAtRules((e) => {
          "tailwind" === e.name &&
            Object.keys(r).includes(e.params) &&
            (r[e.params] = e);
        }),
        Object.values(r).every((e) => null === e))
      )
        return t;
      let i = new Set([Vr]),
        n = new Set();
      hs.DEBUG && console.time("Reading changed files");
      for (let { content: t, extension: r } of e.changedContent) {
        let o = us(e.tailwindConfig, r),
          s = cs(e, r);
        ds(o(t), s, i, n);
      }
      hs.DEBUG && console.timeEnd("Reading changed files");
      let o = e.classCache.size;
      hs.DEBUG && console.time("Generate rules");
      let s = uo(i, e);
      if (
        (hs.DEBUG && console.timeEnd("Generate rules"),
        hs.DEBUG && console.time("Build stylesheet"),
        null === e.stylesheetCache || e.classCache.size !== o)
      ) {
        for (let t of s) e.ruleCache.add(t);
        e.stylesheetCache = (function (e, t) {
          let r = e.sort(([e], [t]) => tn(e - t)),
            i = {
              base: new Set(),
              defaults: new Set(),
              components: new Set(),
              utilities: new Set(),
              variants: new Set(),
              user: new Set(),
            };
          for (let [e, n] of r)
            e >= t.minimumScreen
              ? i.variants.add(n)
              : e & t.layerOrder.base
                ? i.base.add(n)
                : e & t.layerOrder.defaults
                  ? i.defaults.add(n)
                  : e & t.layerOrder.components
                    ? i.components.add(n)
                    : e & t.layerOrder.utilities
                      ? i.utilities.add(n)
                      : e & t.layerOrder.user && i.user.add(n);
          return i;
        })([...e.ruleCache], e);
      }
      hs.DEBUG && console.timeEnd("Build stylesheet");
      let {
        defaults: a,
        base: l,
        components: c,
        utilities: u,
        variants: d,
      } = e.stylesheetCache;
      r.base &&
        (r.base.before(rs([...l, ...a], r.base.source, { layer: "base" })),
        r.base.remove()),
        r.components &&
          (r.components.before(
            rs([...c], r.components.source, { layer: "components" }),
          ),
          r.components.remove()),
        r.utilities &&
          (r.utilities.before(
            rs([...u], r.utilities.source, { layer: "utilities" }),
          ),
          r.utilities.remove());
      let p = Array.from(d).filter((e) => {
        let t = e.raws.tailwind?.parentLayer;
        return "components" === t
          ? null !== r.components
          : "utilities" !== t || null !== r.utilities;
      });
      r.variants
        ? (r.variants.before(rs(p, r.variants.source, { layer: "variants" })),
          r.variants.remove())
        : p.length > 0 && t.append(rs(p, t.source, { layer: "variants" }));
      let f = p.some((e) => "utilities" === e.raws.tailwind?.parentLayer);
      r.utilities &&
        0 === u.size &&
        !f &&
        q.warn("content-problems", [
          "No utility classes were detected in your source files. If this is unexpected, double-check the `content` option in your Tailwind CSS configuration.",
          "https://tailwindcss.com/docs/content-configuration",
        ]),
        hs.DEBUG &&
          (console.log("Potential classes: ", i.size),
          console.log("Active contexts: ", Nr.size)),
        (e.changedContent = []),
        t.walkAtRules("layer", (e) => {
          Object.keys(r).includes(e.params) && e.remove();
        });
    };
  }
  var fs,
    hs,
    ms,
    gs,
    bs,
    ys = d(() => {
      m(),
        (fs = h(C())),
        qr(),
        go(),
        rn(),
        G(),
        is(),
        ls(),
        (hs = Lr),
        (ms = { DEFAULT: ns }),
        (gs = {
          DEFAULT: (e) => e,
          svelte: (e) => e.replace(/(?:^|\s)class:/g, " "),
        }),
        (bs = new WeakMap());
    });
  function ws(e) {
    let t = new Map();
    Qr.root({ nodes: [e.clone()] }).walkRules((e) => {
      (0, Ps.default)((e) => {
        e.walkClasses((e) => {
          let r = e.parent.toString(),
            i = t.get(r);
          i || t.set(r, (i = new Set())), i.add(e.value);
        });
      }).processSync(e.selector);
    });
    let r = Array.from(t.values(), (e) => Array.from(e)),
      i = r.flat();
    return Object.assign(i, { groups: r });
  }
  function vs(e) {
    return Ds.transformSync(e);
  }
  function xs(e, t) {
    let r = new Set();
    for (let i of e) r.add(i.split(t).pop());
    return Array.from(r);
  }
  function ks(e, t) {
    let r = e.tailwindConfig.prefix;
    return "function" == typeof r ? r(t) : r + t;
  }
  function* Ss(e) {
    for (yield e; e.parent; ) yield e.parent, (e = e.parent);
  }
  function Cs(e, t = {}) {
    let r = e.nodes;
    e.nodes = [];
    let i = e.clone(t);
    return (e.nodes = r), i;
  }
  function As(e, t) {
    let r = new Map(),
      i = t.layerOrder.user >> 4n;
    return (
      e.walkRules((e, t) => {
        for (let t of Ss(e)) if (void 0 !== t.raws.tailwind?.layer) return;
        let n = (function (e) {
          for (let t of Ss(e))
            if (e !== t) {
              if ("root" === t.type) break;
              e = Cs(t, { nodes: [e] });
            }
          return e;
        })(e);
        for (let o of ws(e)) {
          let e = r.get(o) || [];
          r.set(o, e),
            e.push([{ layer: "user", sort: BigInt(t) + i, important: !1 }, n]);
        }
      }),
      r
    );
  }
  function _s(e, t) {
    for (let r of e) {
      if (t.notClassCache.has(r) || t.applyClassCache.has(r)) continue;
      if (t.classCache.has(r)) {
        t.applyClassCache.set(
          r,
          t.classCache.get(r).map(([e, t]) => [e, t.clone()]),
        );
        continue;
      }
      let e = Array.from(lo(r, t));
      0 !== e.length ? t.applyClassCache.set(r, e) : t.notClassCache.add(r);
    }
    return t.applyClassCache;
  }
  function Os(e) {
    let t = e.split(/[\s\t\n]+/g);
    return "!important" === t[t.length - 1] ? [t.slice(0, -1), !0] : [t, !1];
  }
  function Es(e, t, r) {
    let i = new Set(),
      n = [];
    if (
      (e.walkAtRules("apply", (e) => {
        let [t] = Os(e.params);
        for (let e of t) i.add(e);
        n.push(e);
      }),
      0 === n.length)
    )
      return;
    let o = (function (e) {
      return {
        get: (t) => e.flatMap((e) => e.get(t) || []),
        has: (t) => e.some((e) => e.has(t)),
      };
    })([r, _s(i, t)]);
    function s(e, t, r) {
      let i = `.${Hi(r)}`,
        n = [...new Set([i, i.replace(/\\2c /g, "\\,")])],
        o = vs(t);
      return vs(e)
        .map((e) => {
          let t = [];
          for (let r of o) {
            let i = r;
            for (let t of n) i = i.replace(t, e);
            i !== r && t.push(i);
          }
          return t.join(", ");
        })
        .join(", ");
    }
    let a = new Map();
    for (let e of n) {
      let [r] = a.get(e.parent) || [[], e.source];
      a.set(e.parent, [r, e.source]);
      let [i, n] = Os(e.params);
      if ("atrule" === e.parent.type) {
        if ("screen" === e.parent.name) {
          let t = e.parent.params;
          throw e.error(
            `@apply is not supported within nested at-rules like @screen. We suggest you write this as @apply ${i
              .map((e) => `${t}:${e}`)
              .join(" ")} instead.`,
          );
        }
        throw e.error(
          `@apply is not supported within nested at-rules like @${e.parent.name}. You can fix this by un-nesting @${e.parent.name}.`,
        );
      }
      for (let s of i) {
        if ([ks(t, "group"), ks(t, "peer")].includes(s))
          throw e.error(`@apply should not be used with the '${s}' utility`);
        if (!o.has(s))
          throw e.error(
            `The \`${s}\` class does not exist. If \`${s}\` is a custom class, make sure it is defined within a \`@layer\` directive.`,
          );
        let i = o.get(s);
        r.push([s, n, i]);
      }
    }
    for (let [e, [r, i]] of a) {
      let n = [];
      for (let [o, a, l] of r) {
        let r = [o, ...xs([o], t.tailwindConfig.separator)];
        for (let [c, u] of l) {
          let l = ws(e),
            d = ws(u);
          if (
            ((d = d.groups.filter((e) => e.some((e) => r.includes(e))).flat()),
            (d = d.concat(xs(d, t.tailwindConfig.separator))),
            l.some((e) => d.includes(e)))
          )
            throw u.error(
              `You cannot \`@apply\` the \`${o}\` utility here because it creates a circular dependency.`,
            );
          let p = Qr.root({ nodes: [u.clone()] });
          p.walk((e) => {
            e.source = i;
          }),
            ("atrule" !== u.type ||
              ("atrule" === u.type && "keyframes" !== u.name)) &&
              p.walkRules((r) => {
                if (!ws(r).some((e) => e === o)) return void r.remove();
                let i =
                    "string" == typeof t.tailwindConfig.important
                      ? t.tailwindConfig.important
                      : null,
                  n =
                    void 0 !== e.raws.tailwind &&
                    i &&
                    0 === e.selector.indexOf(i)
                      ? e.selector.slice(i.length)
                      : e.selector;
                (r.selector = s(n, r.selector, o)),
                  i && n !== e.selector && (r.selector = `${i} ${r.selector}`),
                  r.walkDecls((e) => {
                    e.important = c.important || a;
                  });
              }),
            p.nodes[0] &&
              n.push([
                { ...c, sort: c.sort | t.layerOrder[c.layer] },
                p.nodes[0],
              ]);
        }
      }
      let o = n.sort(([e], [t]) => tn(e.sort - t.sort)).map((e) => e[1]);
      e.after(o);
    }
    for (let e of n) e.parent.nodes.length > 1 ? e.remove() : e.parent.remove();
    Es(e, t, r);
  }
  function Ts(e) {
    return (t) => {
      let r = (function (e) {
        let t = null;
        return {
          get: (r) => ((t = t || e()), t.get(r)),
          has: (r) => ((t = t || e()), t.has(r)),
        };
      })(() => As(t, e));
      Es(t, e, r);
    };
  }
  var Ps,
    Ds,
    js = d(() => {
      m(),
        Oi(),
        (Ps = h(ze())),
        go(),
        rn(),
        Ji(),
        (Ds = (0, Ps.default)((e) => e.nodes.map((e) => e.toString())));
    }),
    Is = p((e, t) => {
      m(),
        (function () {
          "use strict";
          function e(t, r, n) {
            if (!t) return null;
            e.caseSensitive || (t = t.toLowerCase());
            var o,
              s = null === e.threshold ? null : e.threshold * t.length,
              a = e.thresholdAbsolute;
            o =
              null !== s && null !== a
                ? Math.min(s, a)
                : null !== s
                  ? s
                  : null !== a
                    ? a
                    : null;
            var l,
              c,
              u,
              d,
              p = r.length;
            for (d = 0; d < p; d++)
              if (
                ((c = r[d]),
                n && (c = c[n]),
                c &&
                  ((u = i(t, e.caseSensitive ? c : c.toLowerCase(), o)),
                  (null === o || u < o) &&
                    ((o = u),
                    (l = n && e.returnWinningObject ? r[d] : c),
                    e.returnFirstMatch)))
              )
                return l;
            return l || e.nullResultValue;
          }
          (e.threshold = 0.4),
            (e.thresholdAbsolute = 20),
            (e.caseSensitive = !1),
            (e.nullResultValue = null),
            (e.returnWinningObject = null),
            (e.returnFirstMatch = !1),
            void 0 !== t && t.exports
              ? (t.exports = e)
              : (window.didYouMean = e);
          var r = Math.pow(2, 32) - 1;
          function i(e, t, i) {
            i = i || 0 === i ? i : r;
            var n = e.length,
              o = t.length;
            if (0 === n) return Math.min(i + 1, o);
            if (0 === o) return Math.min(i + 1, n);
            if (Math.abs(n - o) > i) return i + 1;
            var s,
              a,
              l,
              c,
              u,
              d = [];
            for (s = 0; s <= o; s++) d[s] = [s];
            for (a = 0; a <= n; a++) d[0][a] = a;
            for (s = 1; s <= o; s++) {
              for (
                l = r,
                  c = 1,
                  s > i && (c = s - i),
                  (u = o + 1) > i + s && (u = i + s),
                  a = 1;
                a <= n;
                a++
              )
                a < c || a > u
                  ? (d[s][a] = i + 1)
                  : t.charAt(s - 1) === e.charAt(a - 1)
                    ? (d[s][a] = d[s - 1][a - 1])
                    : (d[s][a] = Math.min(
                        d[s - 1][a - 1] + 1,
                        Math.min(d[s][a - 1] + 1, d[s - 1][a] + 1),
                      )),
                  d[s][a] < l && (l = d[s][a]);
              if (l > i) return i + 1;
            }
            return d[o][n];
          }
        })();
    }),
    Rs = p((e, t) => {
      m();
      var r = "(".charCodeAt(0),
        i = ")".charCodeAt(0),
        n = "'".charCodeAt(0),
        o = '"'.charCodeAt(0),
        s = "\\".charCodeAt(0),
        a = "/".charCodeAt(0),
        l = ",".charCodeAt(0),
        c = ":".charCodeAt(0),
        u = "*".charCodeAt(0),
        d = "u".charCodeAt(0),
        p = "U".charCodeAt(0),
        f = "+".charCodeAt(0),
        h = /^[a-f0-9?-]+$/i;
      t.exports = function (e) {
        for (
          var t,
            m,
            g,
            b,
            y,
            w,
            v,
            x,
            k,
            S = [],
            C = e,
            A = 0,
            _ = C.charCodeAt(A),
            O = C.length,
            E = [{ nodes: S }],
            T = 0,
            P = "",
            D = "",
            j = "";
          A < O;

        )
          if (_ <= 32) {
            t = A;
            do {
              (t += 1), (_ = C.charCodeAt(t));
            } while (_ <= 32);
            (b = C.slice(A, t)),
              (g = S[S.length - 1]),
              _ === i && T
                ? (j = b)
                : g && "div" === g.type
                  ? ((g.after = b), (g.sourceEndIndex += b.length))
                  : _ === l ||
                      _ === c ||
                      (_ === a &&
                        C.charCodeAt(t + 1) !== u &&
                        (!k ||
                          (k && "function" === k.type && "calc" !== k.value)))
                    ? (D = b)
                    : S.push({
                        type: "space",
                        sourceIndex: A,
                        sourceEndIndex: t,
                        value: b,
                      }),
              (A = t);
          } else if (_ === n || _ === o) {
            (t = A),
              (b = {
                type: "string",
                sourceIndex: A,
                quote: (m = _ === n ? "'" : '"'),
              });
            do {
              if (((y = !1), ~(t = C.indexOf(m, t + 1))))
                for (w = t; C.charCodeAt(w - 1) === s; ) (w -= 1), (y = !y);
              else (t = (C += m).length - 1), (b.unclosed = !0);
            } while (y);
            (b.value = C.slice(A + 1, t)),
              (b.sourceEndIndex = b.unclosed ? t : t + 1),
              S.push(b),
              (A = t + 1),
              (_ = C.charCodeAt(A));
          } else if (_ === a && C.charCodeAt(A + 1) === u)
            (b = {
              type: "comment",
              sourceIndex: A,
              sourceEndIndex: (t = C.indexOf("*/", A)) + 2,
            }),
              -1 === t &&
                ((b.unclosed = !0), (t = C.length), (b.sourceEndIndex = t)),
              (b.value = C.slice(A + 2, t)),
              S.push(b),
              (A = t + 2),
              (_ = C.charCodeAt(A));
          else if (
            (_ !== a && _ !== u) ||
            !k ||
            "function" !== k.type ||
            "calc" !== k.value
          )
            if (_ === a || _ === l || _ === c)
              (b = C[A]),
                S.push({
                  type: "div",
                  sourceIndex: A - D.length,
                  sourceEndIndex: A + b.length,
                  value: b,
                  before: D,
                  after: "",
                }),
                (D = ""),
                (A += 1),
                (_ = C.charCodeAt(A));
            else if (r === _) {
              t = A;
              do {
                (t += 1), (_ = C.charCodeAt(t));
              } while (_ <= 32);
              if (
                ((x = A),
                (b = {
                  type: "function",
                  sourceIndex: A - P.length,
                  value: P,
                  before: C.slice(x + 1, t),
                }),
                (A = t),
                "url" === P && _ !== n && _ !== o)
              ) {
                t -= 1;
                do {
                  if (((y = !1), ~(t = C.indexOf(")", t + 1))))
                    for (w = t; C.charCodeAt(w - 1) === s; ) (w -= 1), (y = !y);
                  else (t = (C += ")").length - 1), (b.unclosed = !0);
                } while (y);
                v = t;
                do {
                  (v -= 1), (_ = C.charCodeAt(v));
                } while (_ <= 32);
                x < v
                  ? ((b.nodes =
                      A !== v + 1
                        ? [
                            {
                              type: "word",
                              sourceIndex: A,
                              sourceEndIndex: v + 1,
                              value: C.slice(A, v + 1),
                            },
                          ]
                        : []),
                    b.unclosed && v + 1 !== t
                      ? ((b.after = ""),
                        b.nodes.push({
                          type: "space",
                          sourceIndex: v + 1,
                          sourceEndIndex: t,
                          value: C.slice(v + 1, t),
                        }))
                      : ((b.after = C.slice(v + 1, t)), (b.sourceEndIndex = t)))
                  : ((b.after = ""), (b.nodes = [])),
                  (A = t + 1),
                  (b.sourceEndIndex = b.unclosed ? t : A),
                  (_ = C.charCodeAt(A)),
                  S.push(b);
              } else
                (T += 1),
                  (b.after = ""),
                  (b.sourceEndIndex = A + 1),
                  S.push(b),
                  E.push(b),
                  (S = b.nodes = []),
                  (k = b);
              P = "";
            } else if (i === _ && T)
              (A += 1),
                (_ = C.charCodeAt(A)),
                (k.after = j),
                (k.sourceEndIndex += j.length),
                (j = ""),
                (T -= 1),
                (E[E.length - 1].sourceEndIndex = A),
                E.pop(),
                (S = (k = E[T]).nodes);
            else {
              t = A;
              do {
                _ === s && (t += 1), (t += 1), (_ = C.charCodeAt(t));
              } while (
                t < O &&
                !(
                  _ <= 32 ||
                  _ === n ||
                  _ === o ||
                  _ === l ||
                  _ === c ||
                  _ === a ||
                  _ === r ||
                  (_ === u &&
                    k &&
                    "function" === k.type &&
                    "calc" === k.value) ||
                  (_ === a && "function" === k.type && "calc" === k.value) ||
                  (_ === i && T)
                )
              );
              (b = C.slice(A, t)),
                r === _
                  ? (P = b)
                  : (d !== b.charCodeAt(0) && p !== b.charCodeAt(0)) ||
                      f !== b.charCodeAt(1) ||
                      !h.test(b.slice(2))
                    ? S.push({
                        type: "word",
                        sourceIndex: A,
                        sourceEndIndex: t,
                        value: b,
                      })
                    : S.push({
                        type: "unicode-range",
                        sourceIndex: A,
                        sourceEndIndex: t,
                        value: b,
                      }),
                (A = t);
            }
          else
            (b = C[A]),
              S.push({
                type: "word",
                sourceIndex: A - D.length,
                sourceEndIndex: A + b.length,
                value: b,
              }),
              (A += 1),
              (_ = C.charCodeAt(A));
        for (A = E.length - 1; A; A -= 1)
          (E[A].unclosed = !0), (E[A].sourceEndIndex = C.length);
        return E[0].nodes;
      };
    }),
    $s = p((e, t) => {
      m(),
        (t.exports = function e(t, r, i) {
          var n, o, s, a;
          for (n = 0, o = t.length; n < o; n += 1)
            (s = t[n]),
              i || (a = r(s, n, t)),
              !1 !== a &&
                "function" === s.type &&
                Array.isArray(s.nodes) &&
                e(s.nodes, r, i),
              i && r(s, n, t);
        });
    }),
    Bs = p((e, t) => {
      function r(e, t) {
        var r,
          n,
          o = e.type,
          s = e.value;
        return t && void 0 !== (n = t(e))
          ? n
          : "word" === o || "space" === o
            ? s
            : "string" === o
              ? (r = e.quote || "") + s + (e.unclosed ? "" : r)
              : "comment" === o
                ? "/*" + s + (e.unclosed ? "" : "*/")
                : "div" === o
                  ? (e.before || "") + s + (e.after || "")
                  : Array.isArray(e.nodes)
                    ? ((r = i(e.nodes, t)),
                      "function" !== o
                        ? r
                        : s +
                          "(" +
                          (e.before || "") +
                          r +
                          (e.after || "") +
                          (e.unclosed ? "" : ")"))
                    : s;
      }
      function i(e, t) {
        var i, n;
        if (Array.isArray(e)) {
          for (i = "", n = e.length - 1; ~n; n -= 1) i = r(e[n], t) + i;
          return i;
        }
        return r(e, t);
      }
      m(), (t.exports = i);
    }),
    Us = p((e, t) => {
      m();
      var r = "-".charCodeAt(0),
        i = "+".charCodeAt(0),
        n = ".".charCodeAt(0),
        o = "e".charCodeAt(0),
        s = "E".charCodeAt(0);
      t.exports = function (e) {
        var t,
          a,
          l,
          c = 0,
          u = e.length;
        if (
          0 === u ||
          !(function (e) {
            var t,
              o = e.charCodeAt(0);
            if (o === i || o === r) {
              if ((t = e.charCodeAt(1)) >= 48 && t <= 57) return !0;
              var s = e.charCodeAt(2);
              return t === n && s >= 48 && s <= 57;
            }
            return o === n
              ? (t = e.charCodeAt(1)) >= 48 && t <= 57
              : o >= 48 && o <= 57;
          })(e)
        )
          return !1;
        for (
          ((t = e.charCodeAt(c)) === i || t === r) && c++;
          c < u && !((t = e.charCodeAt(c)) < 48 || t > 57);

        )
          c += 1;
        if (
          ((t = e.charCodeAt(c)),
          (a = e.charCodeAt(c + 1)),
          t === n && a >= 48 && a <= 57)
        )
          for (c += 2; c < u && !((t = e.charCodeAt(c)) < 48 || t > 57); )
            c += 1;
        if (
          ((t = e.charCodeAt(c)),
          (a = e.charCodeAt(c + 1)),
          (l = e.charCodeAt(c + 2)),
          (t === o || t === s) &&
            ((a >= 48 && a <= 57) ||
              ((a === i || a === r) && l >= 48 && l <= 57)))
        )
          for (
            c += a === i || a === r ? 3 : 2;
            c < u && !((t = e.charCodeAt(c)) < 48 || t > 57);

          )
            c += 1;
        return { number: e.slice(0, c), unit: e.slice(c) };
      };
    }),
    Ms = p((e, t) => {
      m();
      var r = Rs(),
        i = $s(),
        n = Bs();
      function o(e) {
        return this instanceof o ? ((this.nodes = r(e)), this) : new o(e);
      }
      (o.prototype.toString = function () {
        return Array.isArray(this.nodes) ? n(this.nodes) : "";
      }),
        (o.prototype.walk = function (e, t) {
          return i(this.nodes, e, t), this;
        }),
        (o.unit = Us()),
        (o.walk = i),
        (o.stringify = n),
        (t.exports = o);
    });
  function Ls(e) {
    return "object" == typeof e && null !== e;
  }
  function zs(e) {
    return "string" == typeof e
      ? e
      : e.reduce(
          (e, t, r) =>
            t.includes(".") ? `${e}[${t}]` : 0 === r ? t : `${e}.${t}`,
          "",
        );
  }
  function Fs(e) {
    return e.map((e) => `'${e}'`).join(", ");
  }
  function Ns(e) {
    return Fs(Object.keys(e));
  }
  function Ws(e, t, r, i = {}) {
    let n = Array.isArray(t) ? zs(t) : t.replace(/^['"]+|['"]+$/g, ""),
      o = Array.isArray(t) ? t : Z(n),
      s = (0, Gs.default)(e.theme, o, r);
    if (void 0 === s) {
      let t = `'${n}' does not exist in your theme config.`,
        r = o.slice(0, -1),
        i = (0, Gs.default)(e.theme, r);
      if (Ls(i)) {
        let n = Object.keys(i).filter((t) => Ws(e, [...r, t]).isValid),
          s = (0, Ys.default)(o[o.length - 1], n);
        s
          ? (t += ` Did you mean '${zs([...r, s])}'?`)
          : n.length > 0 &&
            (t += ` '${zs(r)}' has the following valid keys: ${Fs(n)}`);
      } else {
        let r = (function (e, t) {
          let r = Z(t);
          do {
            if ((r.pop(), void 0 !== (0, Gs.default)(e, r))) break;
          } while (r.length);
          return r.length ? r : void 0;
        })(e.theme, n);
        if (r) {
          let i = (0, Gs.default)(e.theme, r);
          Ls(i)
            ? (t += ` '${zs(r)}' has the following keys: ${Ns(i)}`)
            : (t += ` '${zs(r)}' is not an object.`);
        } else
          t += ` Your theme has the following top-level keys: ${Ns(e.theme)}`;
      }
      return { isValid: !1, error: t };
    }
    if (
      !(
        "string" == typeof s ||
        "number" == typeof s ||
        "function" == typeof s ||
        s instanceof String ||
        s instanceof Number ||
        Array.isArray(s)
      )
    ) {
      let t = `'${n}' was found but does not resolve to a string.`;
      if (Ls(s)) {
        let r = Object.keys(s).filter((t) => Ws(e, [...o, t]).isValid);
        r.length &&
          (t += ` Did you mean something like '${zs([...o, r[0]])}'?`);
      }
      return { isValid: !1, error: t };
    }
    let [a] = o;
    return { isValid: !0, value: Ti(a)(s, i) };
  }
  function Vs(e, t, r) {
    if ("function" === t.type && void 0 !== r[t.value]) {
      let i = (function (e, t, r) {
        t = t.map((t) => Vs(e, t, r));
        let i = [""];
        for (let e of t)
          "div" === e.type && "," === e.value
            ? i.push("")
            : (i[i.length - 1] += Hs.default.stringify(e));
        return i;
      })(e, t.nodes, r);
      (t.type = "word"), (t.value = r[t.value](e, ...i));
    }
    return t;
  }
  function qs({ tailwindConfig: e }) {
    let t = {
      theme: (t, r, ...i) => {
        let {
          isValid: n,
          value: o,
          error: s,
          alpha: a,
        } = (function (e, t, r) {
          let i = Array.from(
            (function* (e) {
              let t,
                r = (e = e.replace(/^['"]+|['"]+$/g, "")).match(
                  /^([^\s]+)(?![^\[]*\])(?:\s*\/\s*([^\/\s]+))$/,
                );
              yield [e, void 0], r && ((e = r[1]), (t = r[2]), yield [e, t]);
            })(t),
          ).map(([t, i]) =>
            Object.assign(Ws(e, t, r, { opacityValue: i }), {
              resolvedPath: t,
              alpha: i,
            }),
          );
          return i.find((e) => e.isValid) ?? i[0];
        })(e, r, i.length ? i : void 0);
        if (!n) throw t.error(s);
        let l = Xt(o);
        return (
          (void 0 !== a || (void 0 !== l && "function" == typeof l)) &&
            (void 0 === a && (a = 1), (o = rt(l, a, l))),
          o
        );
      },
      screen: (t, r) => {
        r = r.replace(/^['"]+/g, "").replace(/['"]+$/g, "");
        let i = Cn(e.theme.screens).find(({ name: e }) => e === r);
        if (!i)
          throw t.error(`The '${r}' screen does not exist in your theme.`);
        return sn(i);
      },
    };
    return (e) => {
      e.walk((e) => {
        let r = Qs[e.type];
        void 0 !== r &&
          (e[r] = (function (e, t, r) {
            return (0, Hs.default)(t)
              .walk((t) => {
                Vs(e, t, r);
              })
              .toString();
          })(e, e[r], t));
      });
    };
  }
  var Gs,
    Ys,
    Hs,
    Qs,
    Js = d(() => {
      m(),
        (Gs = h(Ei())),
        (Ys = h(Is())),
        ji(),
        (Hs = h(Ms())),
        _n(),
        an(),
        ee(),
        nt(),
        or(),
        (Qs = { atrule: "params", decl: "value" });
    });
  var Xs = d(() => {
    m(), _n(), an();
  });
  function Ks(e) {
    return ra.has(e) || ra.set(e, ta.transformSync(e)), ra.get(e);
  }
  var Zs,
    ea,
    ta,
    ra,
    ia = d(() => {
      m(),
        Oi(),
        (Zs = h(ze())),
        Or(),
        (ea = {
          id: (e) =>
            Zs.default.attribute({
              attribute: "id",
              operator: "=",
              value: e.value,
              quoteMark: '"',
            }),
        }),
        (ta = (0, Zs.default)((e) =>
          e.map((e) =>
            (function (e) {
              let t = e
                  .filter(
                    (e) =>
                      "pseudo" !== e.type ||
                      e.nodes.length > 0 ||
                      e.value.startsWith("::") ||
                      [
                        ":before",
                        ":after",
                        ":first-line",
                        ":first-letter",
                      ].includes(e.value),
                  )
                  .reverse(),
                r = new Set(["tag", "class", "id", "attribute"]),
                i = t.findIndex((e) => r.has(e.type));
              if (-1 === i) return t.reverse().join("").trim();
              let n = t[i],
                o = ea[n.type] ? ea[n.type](n) : n;
              t = t.slice(0, i);
              let s = t.findIndex(
                (e) => "combinator" === e.type && ">" === e.value,
              );
              return (
                -1 !== s && (t.splice(0, s), t.unshift(Zs.default.universal())),
                [o, ...t.reverse()].join("").trim()
              );
            })(
              e.split((e) => "combinator" === e.type && " " === e.value).pop(),
            ),
          ),
        )),
        (ra = new Map());
    });
  function na() {
    function e(t) {
      let r = null;
      t.each((e) => {
        if (!sa.has(e.type)) return void (r = null);
        if (null === r) return void (r = e);
        let t = oa[e.type];
        "atrule" === e.type && "font-face" === e.name
          ? (r = e)
          : t.every(
                (t) =>
                  (e[t] ?? "").replace(/\s+/g, " ") ===
                  (r[t] ?? "").replace(/\s+/g, " "),
              )
            ? (e.nodes && r.append(e.nodes), e.remove())
            : (r = e);
      }),
        t.each((t) => {
          "atrule" === t.type && e(t);
        });
    }
    return (t) => {
      e(t);
    };
  }
  var oa,
    sa,
    aa = d(() => {
      m(),
        (oa = { atrule: ["name", "params"], rule: ["selector"] }),
        (sa = new Set(Object.keys(oa)));
    });
  function la(e) {
    let t = /^-?\d*.?\d+([\w%]+)?$/g.exec(e);
    return t ? t[1] ?? ca : null;
  }
  var ca,
    ua = d(() => {
      m(), (ca = Symbol("unitless-number"));
    });
  function da() {
    return (e) => {
      !(function (e) {
        if (!e.walkAtRules) return;
        let t = new Set();
        if (
          (e.walkAtRules("apply", (e) => {
            t.add(e.parent);
          }),
          0 !== t.size)
        )
          for (let e of t) {
            let t = [],
              r = [];
            for (let i of e.nodes)
              "atrule" === i.type && "apply" === i.name
                ? (r.length > 0 && (t.push(r), (r = [])), t.push([i]))
                : r.push(i);
            if ((r.length > 0 && t.push(r), 1 !== t.length)) {
              for (let r of [...t].reverse()) {
                let t = e.clone({ nodes: [] });
                t.append(r), e.after(t);
              }
              e.remove();
            }
          }
      })(e);
    };
  }
  var pa = d(() => {
    m();
  });
  var fa = d(() => {
    m();
  });
  function ha(t) {
    return function (r, i) {
      let { tailwindDirectives: n, applyDirectives: o } = (function (e) {
        let t = new Set(),
          r = new Set(),
          i = new Set();
        if (
          (e.walkAtRules((e) => {
            "apply" === e.name && i.add(e),
              "import" === e.name &&
                ('"tailwindcss/base"' === e.params ||
                "'tailwindcss/base'" === e.params
                  ? ((e.name = "tailwind"), (e.params = "base"))
                  : '"tailwindcss/components"' === e.params ||
                      "'tailwindcss/components'" === e.params
                    ? ((e.name = "tailwind"), (e.params = "components"))
                    : '"tailwindcss/utilities"' === e.params ||
                        "'tailwindcss/utilities'" === e.params
                      ? ((e.name = "tailwind"), (e.params = "utilities"))
                      : ('"tailwindcss/screens"' === e.params ||
                          "'tailwindcss/screens'" === e.params ||
                          '"tailwindcss/variants"' === e.params ||
                          "'tailwindcss/variants'" === e.params) &&
                        ((e.name = "tailwind"), (e.params = "variants"))),
              "tailwind" === e.name &&
                ("screens" === e.params && (e.params = "variants"),
                t.add(e.params)),
              ["layer", "responsive", "variants"].includes(e.name) &&
                (["responsive", "variants"].includes(e.name) &&
                  q.warn(`${e.name}-at-rule-deprecated`, [
                    `The \`@${e.name}\` directive has been deprecated in Tailwind CSS v3.0.`,
                    "Use `@layer utilities` or `@layer components` instead.",
                    "https://tailwindcss.com/docs/upgrade-guide#replace-variants-with-layer",
                  ]),
                r.add(e));
          }),
          !t.has("base") || !t.has("components") || !t.has("utilities"))
        )
          for (let e of r)
            if (
              "layer" === e.name &&
              ["base", "components", "utilities"].includes(e.params)
            ) {
              if (!t.has(e.params))
                throw e.error(
                  `\`@layer ${e.params}\` is used but no matching \`@tailwind ${e.params}\` directive is present.`,
                );
            } else if ("responsive" === e.name) {
              if (!t.has("utilities"))
                throw e.error(
                  "`@responsive` is used but `@tailwind utilities` is missing.",
                );
            } else if ("variants" === e.name && !t.has("utilities"))
              throw e.error(
                "`@variants` is used but `@tailwind utilities` is missing.",
              );
        return { tailwindDirectives: t, applyDirectives: i };
      })(r);
      ((e, t) => {
        let r = !1;
        e.walkAtRules(
          "tailwind",
          (e) =>
            !r &&
            (e.parent && "root" !== e.parent.type
              ? ((r = !0),
                e.warn(
                  t,
                  [
                    "Nested @tailwind rules were detected, but are not supported.",
                    "Consider using a prefix to scope Tailwind's classes: https://tailwindcss.com/docs/configuration#prefix",
                    "Alternatively, use the important selector strategy: https://tailwindcss.com/docs/configuration#selector-strategy",
                  ].join("\n"),
                ),
                !1)
              : void 0),
        ),
          e.walkRules((e) => {
            if (r) return !1;
            e.walkRules(
              (e) => (
                (r = !0),
                e.warn(
                  t,
                  [
                    "Nested CSS was detected, but CSS nesting has not been configured correctly.",
                    "Please enable a CSS nesting plugin *before* Tailwind in your configuration.",
                    "See how here: https://tailwindcss.com/docs/using-with-preprocessors#nesting",
                  ].join("\n"),
                ),
                !1
              ),
            );
          });
      })(r, i),
        da()(r, i);
      let s = t({
        tailwindDirectives: n,
        applyDirectives: o,
        registerDependency(e) {
          i.messages.push({ plugin: "tailwindcss", parent: i.opts.from, ...e });
        },
        createContext: (e, t) => Do(e, t, r),
      })(r, i);
      if ("-" === s.tailwindConfig.separator)
        throw new Error(
          "The '-' character cannot be used as a custom separator in JIT mode due to parsing ambiguity. Please use another character like '_' instead.",
        );
      (function (t) {
        if (void 0 === e.env.JEST_WORKER_ID && Cr(t).length > 0) {
          let e = Cr(t)
            .map((e) => z.yellow(e))
            .join(", ");
          q.warn("experimental-flags-enabled", [
            `You have enabled experimental features: ${e}`,
            "Experimental features in Tailwind CSS are not covered by semver, may introduce breaking changes, and can change at any time.",
          ]);
        }
      })(s.tailwindConfig),
        ps(s)(r, i),
        da()(r, i),
        Ts(s)(r, i),
        qs(s)(r, i),
        (function ({ tailwindConfig: { theme: e } }) {
          return function (t) {
            t.walkAtRules("screen", (t) => {
              let r = t.params,
                i = Cn(e.screens).find(({ name: e }) => e === r);
              if (!i) throw t.error(`No \`${r}\` screen found.`);
              (t.name = "media"), (t.params = sn(i));
            });
          };
        })(s)(r, i),
        (function ({ tailwindConfig: e }) {
          return (t) => {
            let r = new Map(),
              i = new Set();
            if (
              (t.walkAtRules("defaults", (e) => {
                if (e.nodes && e.nodes.length > 0) return void i.add(e);
                let t = e.params;
                r.has(t) || r.set(t, new Set()),
                  r.get(t).add(e.parent),
                  e.remove();
              }),
              Sr(e, "optimizeUniversalDefaults"))
            )
              for (let t of i) {
                let i = new Map(),
                  n = r.get(t.params) ?? [];
                for (let e of n)
                  for (let t of Ks(e.selector)) {
                    let e =
                        t.includes(":-") || t.includes("::-")
                          ? t
                          : "__DEFAULT__",
                      r = i.get(e) ?? new Set();
                    i.set(e, r), r.add(t);
                  }
                if (Sr(e, "optimizeUniversalDefaults")) {
                  if (0 === i.size) {
                    t.remove();
                    continue;
                  }
                  for (let [, e] of i) {
                    let r = Qr.rule({ source: t.source });
                    (r.selectors = [...e]),
                      r.append(t.nodes.map((e) => e.clone())),
                      t.before(r);
                  }
                }
                t.remove();
              }
            else if (i.size) {
              let e = Qr.rule({ selectors: ["*", "::before", "::after"] });
              for (let t of i)
                e.append(t.nodes),
                  e.parent || t.before(e),
                  e.source || (e.source = t.source),
                  t.remove();
              let t = e.clone({ selectors: ["::backdrop"] });
              e.after(t);
            }
          };
        })(s)(r, i),
        na()(r, i),
        ((e) => {
          e.walkRules((e) => {
            let t = new Map(),
              r = new Set([]),
              i = new Map();
            e.walkDecls((n) => {
              if (n.parent === e) {
                if (t.has(n.prop)) {
                  if (t.get(n.prop).value === n.value)
                    return r.add(t.get(n.prop)), void t.set(n.prop, n);
                  i.has(n.prop) || i.set(n.prop, new Set()),
                    i.get(n.prop).add(t.get(n.prop)),
                    i.get(n.prop).add(n);
                }
                t.set(n.prop, n);
              }
            });
            for (let e of r) e.remove();
            for (let e of i.values()) {
              let t = new Map();
              for (let r of e) {
                let e = la(r.value);
                null !== e &&
                  (t.has(e) || t.set(e, new Set()), t.get(e).add(r));
              }
              for (let e of t.values()) {
                let t = Array.from(e).slice(0, -1);
                for (let e of t) e.remove();
              }
            }
          });
        })(r);
    };
  }
  var ma = d(() => {
      m(),
        ts(),
        ys(),
        js(),
        Js(),
        Xs(),
        ia(),
        aa(),
        ua(),
        pa(),
        fa(),
        Fo(),
        Or();
    }),
    ga = p((e, t) => {
      m(),
        es(),
        ma(),
        qr(),
        (t.exports = function (e) {
          return {
            postcssPlugin: "tailwindcss",
            plugins: [
              Lr.DEBUG &&
                function (e) {
                  return console.log("\n"), console.time("JIT TOTAL"), e;
                },
              function (t, r) {
                let i = Jo(e);
                if ("document" !== t.type) ha(i)(t, r);
                else {
                  let e = t.nodes.filter((e) => "root" === e.type);
                  for (let t of e) "root" === t.type && ha(i)(t, r);
                }
              },
              Lr.DEBUG &&
                function (e) {
                  return console.timeEnd("JIT TOTAL"), console.log("\n"), e;
                },
            ].filter(Boolean),
          };
        }),
        (t.exports.postcss = !0);
    }),
    ba = p((e, t) => {
      m(),
        (t.exports = () => [
          "and_chr 92",
          "and_uc 12.12",
          "chrome 92",
          "chrome 91",
          "edge 91",
          "firefox 89",
          "ios_saf 14.5-14.7",
          "ios_saf 14.0-14.4",
          "safari 14.1",
          "samsung 14.0",
        ]);
    }),
    ya = {};
  function wa() {
    return {
      status: "cr",
      title: "CSS Feature Queries",
      stats: {
        ie: { 6: "n", 7: "n", 8: "n", 9: "n", 10: "n", 11: "n", 5.5: "n" },
        edge: {
          12: "y",
          13: "y",
          14: "y",
          15: "y",
          16: "y",
          17: "y",
          18: "y",
          79: "y",
          80: "y",
          81: "y",
          83: "y",
          84: "y",
          85: "y",
          86: "y",
          87: "y",
          88: "y",
          89: "y",
          90: "y",
          91: "y",
          92: "y",
        },
        firefox: {
          2: "n",
          3: "n",
          4: "n",
          5: "n",
          6: "n",
          7: "n",
          8: "n",
          9: "n",
          10: "n",
          11: "n",
          12: "n",
          13: "n",
          14: "n",
          15: "n",
          16: "n",
          17: "n",
          18: "n",
          19: "n",
          20: "n",
          21: "n",
          22: "y",
          23: "y",
          24: "y",
          25: "y",
          26: "y",
          27: "y",
          28: "y",
          29: "y",
          30: "y",
          31: "y",
          32: "y",
          33: "y",
          34: "y",
          35: "y",
          36: "y",
          37: "y",
          38: "y",
          39: "y",
          40: "y",
          41: "y",
          42: "y",
          43: "y",
          44: "y",
          45: "y",
          46: "y",
          47: "y",
          48: "y",
          49: "y",
          50: "y",
          51: "y",
          52: "y",
          53: "y",
          54: "y",
          55: "y",
          56: "y",
          57: "y",
          58: "y",
          59: "y",
          60: "y",
          61: "y",
          62: "y",
          63: "y",
          64: "y",
          65: "y",
          66: "y",
          67: "y",
          68: "y",
          69: "y",
          70: "y",
          71: "y",
          72: "y",
          73: "y",
          74: "y",
          75: "y",
          76: "y",
          77: "y",
          78: "y",
          79: "y",
          80: "y",
          81: "y",
          82: "y",
          83: "y",
          84: "y",
          85: "y",
          86: "y",
          87: "y",
          88: "y",
          89: "y",
          90: "y",
          91: "y",
          92: "y",
          93: "y",
          3.5: "n",
          3.6: "n",
        },
        chrome: {
          4: "n",
          5: "n",
          6: "n",
          7: "n",
          8: "n",
          9: "n",
          10: "n",
          11: "n",
          12: "n",
          13: "n",
          14: "n",
          15: "n",
          16: "n",
          17: "n",
          18: "n",
          19: "n",
          20: "n",
          21: "n",
          22: "n",
          23: "n",
          24: "n",
          25: "n",
          26: "n",
          27: "n",
          28: "y",
          29: "y",
          30: "y",
          31: "y",
          32: "y",
          33: "y",
          34: "y",
          35: "y",
          36: "y",
          37: "y",
          38: "y",
          39: "y",
          40: "y",
          41: "y",
          42: "y",
          43: "y",
          44: "y",
          45: "y",
          46: "y",
          47: "y",
          48: "y",
          49: "y",
          50: "y",
          51: "y",
          52: "y",
          53: "y",
          54: "y",
          55: "y",
          56: "y",
          57: "y",
          58: "y",
          59: "y",
          60: "y",
          61: "y",
          62: "y",
          63: "y",
          64: "y",
          65: "y",
          66: "y",
          67: "y",
          68: "y",
          69: "y",
          70: "y",
          71: "y",
          72: "y",
          73: "y",
          74: "y",
          75: "y",
          76: "y",
          77: "y",
          78: "y",
          79: "y",
          80: "y",
          81: "y",
          83: "y",
          84: "y",
          85: "y",
          86: "y",
          87: "y",
          88: "y",
          89: "y",
          90: "y",
          91: "y",
          92: "y",
          93: "y",
          94: "y",
          95: "y",
        },
        safari: {
          4: "n",
          5: "n",
          6: "n",
          7: "n",
          8: "n",
          9: "y",
          10: "y",
          11: "y",
          12: "y",
          13: "y",
          14: "y",
          15: "y",
          9.1: "y",
          10.1: "y",
          11.1: "y",
          12.1: "y",
          13.1: "y",
          14.1: "y",
          TP: "y",
          3.1: "n",
          3.2: "n",
          5.1: "n",
          6.1: "n",
          7.1: "n",
        },
        opera: {
          9: "n",
          11: "n",
          12: "n",
          15: "y",
          16: "y",
          17: "y",
          18: "y",
          19: "y",
          20: "y",
          21: "y",
          22: "y",
          23: "y",
          24: "y",
          25: "y",
          26: "y",
          27: "y",
          28: "y",
          29: "y",
          30: "y",
          31: "y",
          32: "y",
          33: "y",
          34: "y",
          35: "y",
          36: "y",
          37: "y",
          38: "y",
          39: "y",
          40: "y",
          41: "y",
          42: "y",
          43: "y",
          44: "y",
          45: "y",
          46: "y",
          47: "y",
          48: "y",
          49: "y",
          50: "y",
          51: "y",
          52: "y",
          53: "y",
          54: "y",
          55: "y",
          56: "y",
          57: "y",
          58: "y",
          60: "y",
          62: "y",
          63: "y",
          64: "y",
          65: "y",
          66: "y",
          67: "y",
          68: "y",
          69: "y",
          70: "y",
          71: "y",
          72: "y",
          73: "y",
          74: "y",
          75: "y",
          76: "y",
          77: "y",
          78: "y",
          12.1: "y",
          "9.5-9.6": "n",
          "10.0-10.1": "n",
          10.5: "n",
          10.6: "n",
          11.1: "n",
          11.5: "n",
          11.6: "n",
        },
        ios_saf: {
          8: "n",
          "9.0-9.2": "y",
          9.3: "y",
          "10.0-10.2": "y",
          10.3: "y",
          "11.0-11.2": "y",
          "11.3-11.4": "y",
          "12.0-12.1": "y",
          "12.2-12.4": "y",
          "13.0-13.1": "y",
          13.2: "y",
          13.3: "y",
          "13.4-13.7": "y",
          "14.0-14.4": "y",
          "14.5-14.7": "y",
          3.2: "n",
          "4.0-4.1": "n",
          "4.2-4.3": "n",
          "5.0-5.1": "n",
          "6.0-6.1": "n",
          "7.0-7.1": "n",
          "8.1-8.4": "n",
        },
        op_mini: { all: "y" },
        android: {
          3: "n",
          4: "n",
          92: "y",
          4.4: "y",
          "4.4.3-4.4.4": "y",
          2.1: "n",
          2.2: "n",
          2.3: "n",
          4.1: "n",
          "4.2-4.3": "n",
        },
        bb: { 7: "n", 10: "n" },
        op_mob: {
          10: "n",
          11: "n",
          12: "n",
          64: "y",
          11.1: "n",
          11.5: "n",
          12.1: "n",
        },
        and_chr: { 92: "y" },
        and_ff: { 90: "y" },
        ie_mob: { 10: "n", 11: "n" },
        and_uc: { 12.12: "y" },
        samsung: {
          4: "y",
          "5.0-5.4": "y",
          "6.2-6.4": "y",
          "7.2-7.4": "y",
          8.2: "y",
          9.2: "y",
          10.1: "y",
          "11.1-11.2": "y",
          "12.0": "y",
          "13.0": "y",
          "14.0": "y",
        },
        and_qq: { 10.4: "y" },
        baidu: { 7.12: "y" },
        kaios: { 2.5: "y" },
      },
    };
  }
  f(ya, { agents: () => va, feature: () => wa });
  var va,
    xa = d(() => {
      m(),
        (va = {
          ie: { prefix: "ms" },
          edge: {
            prefix: "webkit",
            prefix_exceptions: {
              12: "ms",
              13: "ms",
              14: "ms",
              15: "ms",
              16: "ms",
              17: "ms",
              18: "ms",
            },
          },
          firefox: { prefix: "moz" },
          chrome: { prefix: "webkit" },
          safari: { prefix: "webkit" },
          opera: {
            prefix: "webkit",
            prefix_exceptions: {
              9: "o",
              11: "o",
              12: "o",
              "9.5-9.6": "o",
              "10.0-10.1": "o",
              10.5: "o",
              10.6: "o",
              11.1: "o",
              11.5: "o",
              11.6: "o",
              12.1: "o",
            },
          },
          ios_saf: { prefix: "webkit" },
          op_mini: { prefix: "o" },
          android: { prefix: "webkit" },
          bb: { prefix: "webkit" },
          op_mob: { prefix: "o", prefix_exceptions: { 64: "webkit" } },
          and_chr: { prefix: "webkit" },
          and_ff: { prefix: "moz" },
          ie_mob: { prefix: "ms" },
          and_uc: { prefix: "webkit", prefix_exceptions: { 12.12: "webkit" } },
          samsung: { prefix: "webkit" },
          and_qq: { prefix: "webkit" },
          baidu: { prefix: "webkit" },
          kaios: { prefix: "moz" },
        });
    }),
    ka = p(() => {
      m();
    }),
    Sa = p((e, t) => {
      m();
      var { list: r } = _i();
      (t.exports.error = function (e) {
        let t = new Error(e);
        throw ((t.autoprefixer = !0), t);
      }),
        (t.exports.uniq = function (e) {
          return [...new Set(e)];
        }),
        (t.exports.removeNote = function (e) {
          return e.includes(" ") ? e.split(" ")[0] : e;
        }),
        (t.exports.escapeRegexp = function (e) {
          return e.replace(/[$()*+-.?[\\\]^{|}]/g, "\\$&");
        }),
        (t.exports.regexp = function (e, t = !0) {
          return (
            t && (e = this.escapeRegexp(e)),
            new RegExp(`(^|[\\s,(])(${e}($|[\\s(,]))`, "gi")
          );
        }),
        (t.exports.editList = function (e, t) {
          let i = r.comma(e),
            n = t(i, []);
          if (i === n) return e;
          let o = e.match(/,\s*/);
          return (o = o ? o[0] : ", "), n.join(o);
        }),
        (t.exports.splitSelector = function (e) {
          return r
            .comma(e)
            .map((e) => r.space(e).map((e) => e.split(/(?=\.|#)/g)));
        });
    }),
    Ca = p((e, t) => {
      m();
      var r = ba(),
        i = (xa(), ya).agents,
        n = Sa();
      t.exports = class {
        static prefixes() {
          if (this.prefixesCache) return this.prefixesCache;
          this.prefixesCache = [];
          for (let e in i) this.prefixesCache.push(`-${i[e].prefix}-`);
          return (
            (this.prefixesCache = n
              .uniq(this.prefixesCache)
              .sort((e, t) => t.length - e.length)),
            this.prefixesCache
          );
        }
        static withPrefix(e) {
          return (
            this.prefixesRegexp ||
              (this.prefixesRegexp = new RegExp(this.prefixes().join("|"))),
            this.prefixesRegexp.test(e)
          );
        }
        constructor(e, t, r, i) {
          (this.data = e),
            (this.options = r || {}),
            (this.browserslistOpts = i || {}),
            (this.selected = this.parse(t));
        }
        parse(e) {
          let t = {};
          for (let e in this.browserslistOpts) t[e] = this.browserslistOpts[e];
          return (t.path = this.options.from), r(e, t);
        }
        prefix(e) {
          let [t, r] = e.split(" "),
            i = this.data[t],
            n = i.prefix_exceptions && i.prefix_exceptions[r];
          return n || (n = i.prefix), `-${n}-`;
        }
        isSelected(e) {
          return this.selected.includes(e);
        }
      };
    }),
    Aa = p((e, t) => {
      m(),
        (t.exports = {
          prefix(e) {
            let t = e.match(/^(-\w+-)/);
            return t ? t[0] : "";
          },
          unprefixed: (e) => e.replace(/^-\w+-/, ""),
        });
    }),
    _a = p((e, t) => {
      m();
      var r = Ca(),
        i = Aa(),
        n = Sa();
      function o(e, t) {
        let r = new e.constructor();
        for (let i of Object.keys(e || {})) {
          let n = e[i];
          "parent" === i && "object" == typeof n
            ? t && (r[i] = t)
            : "source" === i || null === i
              ? (r[i] = n)
              : Array.isArray(n)
                ? (r[i] = n.map((e) => o(e, r)))
                : "_autoprefixerPrefix" !== i &&
                  "_autoprefixerValues" !== i &&
                  "proxyCache" !== i &&
                  ("object" == typeof n && null !== n && (n = o(n, r)),
                  (r[i] = n));
        }
        return r;
      }
      var s = class {
        static hack(e) {
          return (
            this.hacks || (this.hacks = {}),
            e.names.map((t) => ((this.hacks[t] = e), this.hacks[t]))
          );
        }
        static load(e, t, r) {
          let i = this.hacks && this.hacks[e];
          return i ? new i(e, t, r) : new this(e, t, r);
        }
        static clone(e, t) {
          let r = o(e);
          for (let e in t) r[e] = t[e];
          return r;
        }
        constructor(e, t, r) {
          (this.prefixes = t), (this.name = e), (this.all = r);
        }
        parentPrefix(e) {
          let t;
          return (
            (t =
              void 0 !== e._autoprefixerPrefix
                ? e._autoprefixerPrefix
                : "decl" === e.type && "-" === e.prop[0]
                  ? i.prefix(e.prop)
                  : "root" !== e.type &&
                    ("rule" === e.type &&
                    e.selector.includes(":-") &&
                    /:(-\w+-)/.test(e.selector)
                      ? e.selector.match(/:(-\w+-)/)[1]
                      : "atrule" === e.type && "-" === e.name[0]
                        ? i.prefix(e.name)
                        : this.parentPrefix(e.parent))),
            r.prefixes().includes(t) || (t = !1),
            (e._autoprefixerPrefix = t),
            e._autoprefixerPrefix
          );
        }
        process(e, t) {
          if (!this.check(e)) return;
          let r = this.parentPrefix(e),
            i = this.prefixes.filter((e) => !r || r === n.removeNote(e)),
            o = [];
          for (let r of i) this.add(e, r, o.concat([r]), t) && o.push(r);
          return o;
        }
        clone(e, t) {
          return s.clone(e, t);
        }
      };
      t.exports = s;
    }),
    Oa = p((e, t) => {
      m();
      var r = _a(),
        i = Ca(),
        n = Sa();
      t.exports = class extends r {
        check() {
          return !0;
        }
        prefixed(e, t) {
          return t + e;
        }
        normalize(e) {
          return e;
        }
        otherPrefixes(e, t) {
          for (let r of i.prefixes()) if (r !== t && e.includes(r)) return !0;
          return !1;
        }
        set(e, t) {
          return (e.prop = this.prefixed(e.prop, t)), e;
        }
        needCascade(e) {
          return (
            e._autoprefixerCascade ||
              (e._autoprefixerCascade =
                !1 !== this.all.options.cascade &&
                e.raw("before").includes("\n")),
            e._autoprefixerCascade
          );
        }
        maxPrefixed(e, t) {
          if (t._autoprefixerMax) return t._autoprefixerMax;
          let r = 0;
          for (let t of e)
            (t = n.removeNote(t)), t.length > r && (r = t.length);
          return (t._autoprefixerMax = r), t._autoprefixerMax;
        }
        calcBefore(e, t, r = "") {
          let i = this.maxPrefixed(e, t) - n.removeNote(r).length,
            o = t.raw("before");
          return i > 0 && (o += Array(i).fill(" ").join("")), o;
        }
        restoreBefore(e) {
          let t = e.raw("before").split("\n"),
            r = t[t.length - 1];
          this.all.group(e).up((e) => {
            let t = e.raw("before").split("\n"),
              i = t[t.length - 1];
            i.length < r.length && (r = i);
          }),
            (t[t.length - 1] = r),
            (e.raws.before = t.join("\n"));
        }
        insert(e, t, r) {
          let i = this.set(this.clone(e), t);
          if (
            i &&
            !e.parent.some((e) => e.prop === i.prop && e.value === i.value)
          )
            return (
              this.needCascade(e) && (i.raws.before = this.calcBefore(r, e, t)),
              e.parent.insertBefore(e, i)
            );
        }
        isAlready(e, t) {
          let r = this.all.group(e).up((e) => e.prop === t);
          return r || (r = this.all.group(e).down((e) => e.prop === t)), r;
        }
        add(e, t, r, i) {
          let n = this.prefixed(e.prop, t);
          if (!this.isAlready(e, n) && !this.otherPrefixes(e.value, t))
            return this.insert(e, t, r, i);
        }
        process(e, t) {
          if (!this.needCascade(e)) return void super.process(e, t);
          let r = super.process(e, t);
          !r ||
            !r.length ||
            (this.restoreBefore(e), (e.raws.before = this.calcBefore(r, e)));
        }
        old(e, t) {
          return [this.prefixed(e, t)];
        }
      };
    }),
    Ea = p((e, t) => {
      m(),
        (t.exports = function e(t) {
          return {
            mul: (r) => new e(t * r),
            div: (r) => new e(t / r),
            simplify: () => new e(t),
            toString: () => t.toString(),
          };
        });
    }),
    Ta = p((e, t) => {
      m();
      var r = Ea(),
        i = _a(),
        n = Sa(),
        o = /(min|max)-resolution\s*:\s*\d*\.?\d+(dppx|dpcm|dpi|x)/gi,
        s = /(min|max)-resolution(\s*:\s*)(\d*\.?\d+)(dppx|dpcm|dpi|x)/i;
      t.exports = class extends i {
        prefixName(e, t) {
          return "-moz-" === e
            ? t + "--moz-device-pixel-ratio"
            : e + t + "-device-pixel-ratio";
        }
        prefixQuery(e, t, i, n, o) {
          return (
            (n = new r(n)),
            "dpi" === o
              ? (n = n.div(96))
              : "dpcm" === o && (n = n.mul(2.54).div(96)),
            (n = n.simplify()),
            "-o-" === e && (n = n.n + "/" + n.d),
            this.prefixName(e, t) + i + n
          );
        }
        clean(e) {
          if (!this.bad) {
            this.bad = [];
            for (let e of this.prefixes)
              this.bad.push(this.prefixName(e, "min")),
                this.bad.push(this.prefixName(e, "max"));
          }
          e.params = n.editList(e.params, (e) =>
            e.filter((e) => this.bad.every((t) => !e.includes(t))),
          );
        }
        process(e) {
          let t = this.parentPrefix(e),
            r = t ? [t] : this.prefixes;
          e.params = n.editList(e.params, (e, t) => {
            for (let i of e)
              if (
                i.includes("min-resolution") ||
                i.includes("max-resolution")
              ) {
                for (let e of r) {
                  let r = i.replace(o, (t) => {
                    let r = t.match(s);
                    return this.prefixQuery(e, r[1], r[2], r[3], r[4]);
                  });
                  t.push(r);
                }
                t.push(i);
              } else t.push(i);
            return n.uniq(t);
          });
        }
      };
    }),
    Pa = p((e, t) => {
      m();
      var { list: r } = _i(),
        i = Ms(),
        n = Ca(),
        o = Aa();
      t.exports = class {
        constructor(e) {
          (this.props = ["transition", "transition-property"]),
            (this.prefixes = e);
        }
        add(e, t) {
          let r,
            i,
            n = this.prefixes.add[e.prop],
            o = this.ruleVendorPrefixes(e),
            s = o || (n && n.prefixes) || [],
            a = this.parse(e.value),
            l = a.map((e) => this.findProp(e)),
            c = [];
          if (l.some((e) => "-" === e[0])) return;
          for (let e of a) {
            if (((i = this.findProp(e)), "-" === i[0])) continue;
            let t = this.prefixes.add[i];
            if (t && t.prefixes)
              for (r of t.prefixes) {
                if (o && !o.some((e) => r.includes(e))) continue;
                let t = this.prefixes.prefixed(i, r);
                "-ms-transform" !== t &&
                  !l.includes(t) &&
                  (this.disabled(i, r) || c.push(this.clone(i, t, e)));
              }
          }
          a = a.concat(c);
          let u = this.stringify(a),
            d = this.stringify(this.cleanFromUnprefixed(a, "-webkit-"));
          if (
            (s.includes("-webkit-") &&
              this.cloneBefore(e, `-webkit-${e.prop}`, d),
            this.cloneBefore(e, e.prop, d),
            s.includes("-o-"))
          ) {
            let t = this.stringify(this.cleanFromUnprefixed(a, "-o-"));
            this.cloneBefore(e, `-o-${e.prop}`, t);
          }
          for (r of s)
            if ("-webkit-" !== r && "-o-" !== r) {
              let t = this.stringify(this.cleanOtherPrefixes(a, r));
              this.cloneBefore(e, r + e.prop, t);
            }
          u !== e.value &&
            !this.already(e, e.prop, u) &&
            (this.checkForWarning(t, e), e.cloneBefore(), (e.value = u));
        }
        findProp(e) {
          let t = e[0].value;
          if (/^\d/.test(t))
            for (let [t, r] of e.entries())
              if (0 !== t && "word" === r.type) return r.value;
          return t;
        }
        already(e, t, r) {
          return e.parent.some((e) => e.prop === t && e.value === r);
        }
        cloneBefore(e, t, r) {
          this.already(e, t, r) || e.cloneBefore({ prop: t, value: r });
        }
        checkForWarning(e, t) {
          if ("transition-property" !== t.prop) return;
          let i = !1,
            n = !1;
          t.parent.each((e) => {
            if ("decl" !== e.type || 0 !== e.prop.indexOf("transition-"))
              return;
            let t = r.comma(e.value);
            if ("transition-property" !== e.prop)
              return (n = n || t.length > 1), !1;
            t.forEach((e) => {
              let t = this.prefixes.add[e];
              t && t.prefixes && t.prefixes.length > 0 && (i = !0);
            });
          }),
            i &&
              n &&
              t.warn(
                e,
                "Replace transition-property to transition, because Autoprefixer could not support any cases of transition-property and other transition-*",
              );
        }
        remove(e) {
          let t = this.parse(e.value);
          t = t.filter((e) => {
            let t = this.prefixes.remove[this.findProp(e)];
            return !t || !t.remove;
          });
          let r = this.stringify(t);
          if (e.value === r) return;
          if (0 === t.length) return void e.remove();
          let i = e.parent.some((t) => t.prop === e.prop && t.value === r),
            n = e.parent.some(
              (t) => t !== e && t.prop === e.prop && t.value.length > r.length,
            );
          i || n ? e.remove() : (e.value = r);
        }
        parse(e) {
          let t = i(e),
            r = [],
            n = [];
          for (let e of t.nodes)
            n.push(e),
              "div" === e.type && "," === e.value && (r.push(n), (n = []));
          return r.push(n), r.filter((e) => e.length > 0);
        }
        stringify(e) {
          if (0 === e.length) return "";
          let t = [];
          for (let r of e)
            "div" !== r[r.length - 1].type && r.push(this.div(e)),
              (t = t.concat(r));
          return (
            "div" === t[0].type && (t = t.slice(1)),
            "div" === t[t.length - 1].type && (t = t.slice(0, -1)),
            i.stringify({ nodes: t })
          );
        }
        clone(e, t, r) {
          let i = [],
            n = !1;
          for (let o of r)
            n || "word" !== o.type || o.value !== e
              ? i.push(o)
              : (i.push({ type: "word", value: t }), (n = !0));
          return i;
        }
        div(e) {
          for (let t of e)
            for (let e of t) if ("div" === e.type && "," === e.value) return e;
          return { type: "div", value: ",", after: " " };
        }
        cleanOtherPrefixes(e, t) {
          return e.filter((e) => {
            let r = o.prefix(this.findProp(e));
            return "" === r || r === t;
          });
        }
        cleanFromUnprefixed(e, t) {
          let r = e
              .map((e) => this.findProp(e))
              .filter((e) => e.slice(0, t.length) === t)
              .map((e) => this.prefixes.unprefixed(e)),
            i = [];
          for (let n of e) {
            let e = this.findProp(n),
              s = o.prefix(e);
            !r.includes(e) && (s === t || "" === s) && i.push(n);
          }
          return i;
        }
        disabled(e, t) {
          if (
            e.includes("flex") ||
            [
              "order",
              "justify-content",
              "align-self",
              "align-content",
            ].includes(e)
          ) {
            if (!1 === this.prefixes.options.flexbox) return !0;
            if ("no-2009" === this.prefixes.options.flexbox)
              return t.includes("2009");
          }
        }
        ruleVendorPrefixes(e) {
          let { parent: t } = e;
          if ("rule" !== t.type) return !1;
          if (!t.selector.includes(":-")) return !1;
          let r = n.prefixes().filter((e) => t.selector.includes(":" + e));
          return r.length > 0 && r;
        }
      };
    }),
    Da = p((e, t) => {
      m();
      var r = Sa();
      t.exports = class {
        constructor(e, t, i, n) {
          (this.unprefixed = e),
            (this.prefixed = t),
            (this.string = i || t),
            (this.regexp = n || r.regexp(t));
        }
        check(e) {
          return !!e.includes(this.string) && !!e.match(this.regexp);
        }
      };
    }),
    ja = p((e, t) => {
      m();
      var r = _a(),
        i = Da(),
        n = Aa(),
        o = Sa();
      t.exports = class extends r {
        static save(e, t) {
          let r = t.prop,
            i = [];
          for (let o in t._autoprefixerValues) {
            let s = t._autoprefixerValues[o];
            if (s === t.value) continue;
            let a,
              l = n.prefix(r);
            if ("-pie-" === l) continue;
            if (l === o) {
              (a = t.value = s), i.push(a);
              continue;
            }
            let c = e.prefixed(r, o),
              u = t.parent;
            if (!u.every((e) => e.prop !== c)) {
              i.push(a);
              continue;
            }
            let d = s.replace(/\s+/, " ");
            if (
              u.some(
                (e) => e.prop === t.prop && e.value.replace(/\s+/, " ") === d,
              )
            ) {
              i.push(a);
              continue;
            }
            let p = this.clone(t, { value: s });
            (a = t.parent.insertBefore(t, p)), i.push(a);
          }
          return i;
        }
        check(e) {
          let t = e.value;
          return !!t.includes(this.name) && !!t.match(this.regexp());
        }
        regexp() {
          return this.regexpCache || (this.regexpCache = o.regexp(this.name));
        }
        replace(e, t) {
          return e.replace(this.regexp(), `$1${t}$2`);
        }
        value(e) {
          return e.raws.value && e.raws.value.value === e.value
            ? e.raws.value.raw
            : e.value;
        }
        add(e, t) {
          e._autoprefixerValues || (e._autoprefixerValues = {});
          let r,
            i = e._autoprefixerValues[t] || this.value(e);
          do {
            if (((r = i), (i = this.replace(i, t)), !1 === i)) return;
          } while (i !== r);
          e._autoprefixerValues[t] = i;
        }
        old(e) {
          return new i(this.name, e + this.name);
        }
      };
    }),
    Ia = p((e, t) => {
      m(), (t.exports = {});
    }),
    Ra = p((t, r) => {
      m();
      var i = Ms(),
        n = ja(),
        o = Ia().insertAreas,
        s = /(^|[^-])linear-gradient\(\s*(top|left|right|bottom)/i,
        a = /(^|[^-])radial-gradient\(\s*\d+(\w*|%)\s+\d+(\w*|%)\s*,/i,
        l = /(!\s*)?autoprefixer:\s*ignore\s+next/i,
        c = /(!\s*)?autoprefixer\s*grid:\s*(on|off|(no-)?autoplace)/i,
        u = [
          "width",
          "height",
          "min-width",
          "max-width",
          "min-height",
          "max-height",
          "inline-size",
          "min-inline-size",
          "max-inline-size",
          "block-size",
          "min-block-size",
          "max-block-size",
        ];
      function d(e) {
        return e.parent.some(
          (e) => "grid-template" === e.prop || "grid-template-areas" === e.prop,
        );
      }
      r.exports = class {
        constructor(e) {
          this.prefixes = e;
        }
        add(e, t) {
          let r = this.prefixes.add["@resolution"],
            l = this.prefixes.add["@keyframes"],
            c = this.prefixes.add["@viewport"],
            p = this.prefixes.add["@supports"];
          function f(e) {
            return e.parent.nodes.some((e) => {
              if ("decl" !== e.type) return !1;
              let t = "display" === e.prop && /(inline-)?grid/.test(e.value),
                r = e.prop.startsWith("grid-template"),
                i = /^grid-([A-z]+-)?gap/.test(e.prop);
              return t || r || i;
            });
          }
          e.walkAtRules((e) => {
            if ("keyframes" === e.name) {
              if (!this.disabled(e, t)) return l && l.process(e);
            } else if ("viewport" === e.name) {
              if (!this.disabled(e, t)) return c && c.process(e);
            } else if ("supports" === e.name) {
              if (!1 !== this.prefixes.options.supports && !this.disabled(e, t))
                return p.process(e);
            } else if (
              "media" === e.name &&
              e.params.includes("-resolution") &&
              !this.disabled(e, t)
            )
              return r && r.process(e);
          }),
            e.walkRules((e) => {
              if (!this.disabled(e, t))
                return this.prefixes.add.selectors.map((r) => r.process(e, t));
            });
          let h =
            this.gridStatus(e, t) &&
            this.prefixes.add["grid-area"] &&
            this.prefixes.add["grid-area"].prefixes;
          return (
            e.walkDecls((e) => {
              if (this.disabledDecl(e, t)) return;
              let r,
                n = e.parent,
                o = e.prop,
                l = e.value;
              if ("grid-row-span" !== o)
                if ("grid-column-span" !== o)
                  if ("display" !== o || "box" !== l) {
                    if ("text-emphasis-position" === o)
                      ("under" === l || "over" === l) &&
                        t.warn(
                          "You should use 2 values for text-emphasis-position For example, `under left` instead of just `under`.",
                          { node: e },
                        );
                    else if (
                      /^(align|justify|place)-(items|content)$/.test(o) &&
                      (function (e) {
                        return e.parent.some(
                          (e) =>
                            "display" === e.prop &&
                            /(inline-)?flex/.test(e.value),
                        );
                      })(e)
                    )
                      ("start" === l || "end" === l) &&
                        t.warn(
                          `${l} value has mixed support, consider using flex-${l} instead`,
                          { node: e },
                        );
                    else if ("text-decoration-skip" === o && "ink" === l)
                      t.warn(
                        "Replace text-decoration-skip: ink to text-decoration-skip-ink: auto, because spec had been changed",
                        { node: e },
                      );
                    else {
                      if (h && this.gridStatus(e, t))
                        if (
                          ("subgrid" === e.value &&
                            t.warn("IE does not support subgrid", { node: e }),
                          /^(align|justify|place)-items$/.test(o) && f(e))
                        ) {
                          let r = o.replace("-items", "-self");
                          t.warn(
                            `IE does not support ${o} on grid containers. Try using ${r} on child elements instead: ${e.parent.selector} > * { ${r}: ${e.value} }`,
                            { node: e },
                          );
                        } else if (
                          /^(align|justify|place)-content$/.test(o) &&
                          f(e)
                        )
                          t.warn(
                            `IE does not support ${e.prop} on grid containers`,
                            { node: e },
                          );
                        else {
                          if ("display" === o && "contents" === e.value)
                            return void t.warn(
                              "Please do not use display: contents; if you have grid setting enabled",
                              { node: e },
                            );
                          if ("grid-gap" === e.prop) {
                            let r = this.gridStatus(e, t);
                            "autoplace" !== r ||
                            (function (e) {
                              let t = e.parent.some(
                                  (e) => "grid-template-rows" === e.prop,
                                ),
                                r = e.parent.some(
                                  (e) => "grid-template-columns" === e.prop,
                                );
                              return t && r;
                            })(e) ||
                            d(e)
                              ? (!0 === r || "no-autoplace" === r) &&
                                !d(e) &&
                                t.warn(
                                  "grid-gap only works if grid-template(-areas) is being used",
                                  { node: e },
                                )
                              : t.warn(
                                  "grid-gap only works if grid-template(-areas) is being used or both rows and columns have been declared and cells have not been manually placed inside the explicit grid",
                                  { node: e },
                                );
                          } else {
                            if ("grid-auto-columns" === o)
                              return void t.warn(
                                "grid-auto-columns is not supported by IE",
                                { node: e },
                              );
                            if ("grid-auto-rows" === o)
                              return void t.warn(
                                "grid-auto-rows is not supported by IE",
                                { node: e },
                              );
                            if ("grid-auto-flow" === o) {
                              let r = n.some(
                                  (e) => "grid-template-rows" === e.prop,
                                ),
                                i = n.some(
                                  (e) => "grid-template-columns" === e.prop,
                                );
                              return void (d(e)
                                ? t.warn(
                                    "grid-auto-flow is not supported by IE",
                                    { node: e },
                                  )
                                : l.includes("dense")
                                  ? t.warn(
                                      "grid-auto-flow: dense is not supported by IE",
                                      { node: e },
                                    )
                                  : !r &&
                                    !i &&
                                    t.warn(
                                      "grid-auto-flow works only if grid-template-rows and grid-template-columns are present in the same rule",
                                      { node: e },
                                    ));
                            }
                            if (l.includes("auto-fit"))
                              return void t.warn(
                                "auto-fit value is not supported by IE",
                                { node: e, word: "auto-fit" },
                              );
                            if (l.includes("auto-fill"))
                              return void t.warn(
                                "auto-fill value is not supported by IE",
                                { node: e, word: "auto-fill" },
                              );
                            o.startsWith("grid-template") &&
                              l.includes("[") &&
                              t.warn(
                                "Autoprefixer currently does not support line names. Try using grid-template-areas instead.",
                                { node: e, word: "[" },
                              );
                          }
                        }
                      if (l.includes("radial-gradient"))
                        if (a.test(e.value))
                          t.warn(
                            "Gradient has outdated direction syntax. New syntax is like `closest-side at 0 0` instead of `0 0, closest-side`.",
                            { node: e },
                          );
                        else {
                          let r = i(l);
                          for (let i of r.nodes)
                            if (
                              "function" === i.type &&
                              "radial-gradient" === i.value
                            )
                              for (let r of i.nodes)
                                "word" === r.type &&
                                  ("cover" === r.value
                                    ? t.warn(
                                        "Gradient has outdated direction syntax. Replace `cover` to `farthest-corner`.",
                                        { node: e },
                                      )
                                    : "contain" === r.value &&
                                      t.warn(
                                        "Gradient has outdated direction syntax. Replace `contain` to `closest-side`.",
                                        { node: e },
                                      ));
                        }
                      l.includes("linear-gradient") &&
                        s.test(l) &&
                        t.warn(
                          "Gradient has outdated direction syntax. New syntax is like `to left` instead of `right`.",
                          { node: e },
                        );
                    }
                    if (
                      (u.includes(e.prop) &&
                        (e.value.includes("-fill-available") ||
                          (e.value.includes("fill-available")
                            ? t.warn(
                                "Replace fill-available to stretch, because spec had been changed",
                                { node: e },
                              )
                            : e.value.includes("fill") &&
                              i(l).nodes.some(
                                (e) => "word" === e.type && "fill" === e.value,
                              ) &&
                              t.warn(
                                "Replace fill to stretch, because spec had been changed",
                                { node: e },
                              ))),
                      "transition" === e.prop ||
                        "transition-property" === e.prop)
                    )
                      return this.prefixes.transition.add(e, t);
                    if ("align-self" === e.prop) {
                      if (
                        ("grid" !== this.displayType(e) &&
                          !1 !== this.prefixes.options.flexbox &&
                          ((r = this.prefixes.add["align-self"]),
                          r && r.prefixes && r.process(e)),
                        !1 !== this.gridStatus(e, t) &&
                          ((r = this.prefixes.add["grid-row-align"]),
                          r && r.prefixes))
                      )
                        return r.process(e, t);
                    } else if ("justify-self" === e.prop) {
                      if (
                        !1 !== this.gridStatus(e, t) &&
                        ((r = this.prefixes.add["grid-column-align"]),
                        r && r.prefixes)
                      )
                        return r.process(e, t);
                    } else if ("place-self" === e.prop) {
                      if (
                        ((r = this.prefixes.add["place-self"]),
                        r && r.prefixes && !1 !== this.gridStatus(e, t))
                      )
                        return r.process(e, t);
                    } else if (
                      ((r = this.prefixes.add[e.prop]), r && r.prefixes)
                    )
                      return r.process(e, t);
                  } else
                    t.warn(
                      "You should write display: flex by final spec instead of display: box",
                      { node: e },
                    );
                else
                  t.warn(
                    "grid-column-span is not part of final Grid Layout. Use grid-column.",
                    { node: e },
                  );
              else
                t.warn(
                  "grid-row-span is not part of final Grid Layout. Use grid-row.",
                  { node: e },
                );
            }),
            this.gridStatus(e, t) && o(e, this.disabled),
            e.walkDecls((e) => {
              if (this.disabledValue(e, t)) return;
              let r = this.prefixes.unprefixed(e.prop),
                i = this.prefixes.values("add", r);
              if (Array.isArray(i))
                for (let r of i) r.process && r.process(e, t);
              n.save(this.prefixes, e);
            })
          );
        }
        remove(e, t) {
          let r = this.prefixes.remove["@resolution"];
          e.walkAtRules((e, i) => {
            this.prefixes.remove[`@${e.name}`]
              ? this.disabled(e, t) || e.parent.removeChild(i)
              : "media" === e.name &&
                e.params.includes("-resolution") &&
                r &&
                r.clean(e);
          });
          for (let r of this.prefixes.remove.selectors)
            e.walkRules((e, i) => {
              r.check(e) && (this.disabled(e, t) || e.parent.removeChild(i));
            });
          return e.walkDecls((e, r) => {
            if (this.disabled(e, t)) return;
            let i = e.parent,
              n = this.prefixes.unprefixed(e.prop);
            if (
              (("transition" === e.prop || "transition-property" === e.prop) &&
                this.prefixes.transition.remove(e),
              this.prefixes.remove[e.prop] &&
                this.prefixes.remove[e.prop].remove)
            ) {
              let t = this.prefixes
                .group(e)
                .down((e) => this.prefixes.normalize(e.prop) === n);
              if (
                ("flex-flow" === n && (t = !0), "-webkit-box-orient" === e.prop)
              ) {
                let t = { "flex-direction": !0, "flex-flow": !0 };
                if (!e.parent.some((e) => t[e.prop])) return;
              }
              if (t && !this.withHackValue(e))
                return (
                  e.raw("before").includes("\n") && this.reduceSpaces(e),
                  void i.removeChild(r)
                );
            }
            for (let t of this.prefixes.values("remove", n))
              if (
                t.check &&
                t.check(e.value) &&
                ((n = t.unprefixed),
                this.prefixes.group(e).down((e) => e.value.includes(n)))
              )
                return void i.removeChild(r);
          });
        }
        withHackValue(e) {
          return "-webkit-background-clip" === e.prop && "text" === e.value;
        }
        disabledValue(e, t) {
          return (
            !!(
              (!1 === this.gridStatus(e, t) &&
                "decl" === e.type &&
                "display" === e.prop &&
                e.value.includes("grid")) ||
              (!1 === this.prefixes.options.flexbox &&
                "decl" === e.type &&
                "display" === e.prop &&
                e.value.includes("flex")) ||
              ("decl" === e.type && "content" === e.prop)
            ) || this.disabled(e, t)
          );
        }
        disabledDecl(e, t) {
          if (
            !1 === this.gridStatus(e, t) &&
            "decl" === e.type &&
            (e.prop.includes("grid") || "justify-items" === e.prop)
          )
            return !0;
          if (!1 === this.prefixes.options.flexbox && "decl" === e.type) {
            let t = [
              "order",
              "justify-content",
              "align-items",
              "align-content",
            ];
            if (e.prop.includes("flex") || t.includes(e.prop)) return !0;
          }
          return this.disabled(e, t);
        }
        disabled(e, t) {
          if (!e) return !1;
          if (void 0 !== e._autoprefixerDisabled)
            return e._autoprefixerDisabled;
          if (e.parent) {
            let t = e.prev();
            if (t && "comment" === t.type && l.test(t.text))
              return (
                (e._autoprefixerDisabled = !0),
                (e._autoprefixerSelfDisabled = !0),
                !0
              );
          }
          let r = null;
          if (e.nodes) {
            let i;
            e.each((e) => {
              "comment" === e.type &&
                /(!\s*)?autoprefixer:\s*(off|on)/i.test(e.text) &&
                (void 0 !== i
                  ? t.warn(
                      "Second Autoprefixer control comment was ignored. Autoprefixer applies control comment to whole block, not to next rules.",
                      { node: e },
                    )
                  : (i = /on/i.test(e.text)));
            }),
              void 0 !== i && (r = !i);
          }
          if (!e.nodes || null === r)
            if (e.parent) {
              let i = this.disabled(e.parent, t);
              r = !0 !== e.parent._autoprefixerSelfDisabled && i;
            } else r = !1;
          return (e._autoprefixerDisabled = r), r;
        }
        reduceSpaces(e) {
          let t = !1;
          if ((this.prefixes.group(e).up(() => ((t = !0), !0)), t)) return;
          let r = e.raw("before").split("\n"),
            i = r[r.length - 1].length,
            n = !1;
          this.prefixes.group(e).down((e) => {
            r = e.raw("before").split("\n");
            let t = r.length - 1;
            r[t].length > i &&
              (!1 === n && (n = r[t].length - i),
              (r[t] = r[t].slice(0, -n)),
              (e.raws.before = r.join("\n")));
          });
        }
        displayType(e) {
          for (let t of e.parent.nodes)
            if ("display" === t.prop) {
              if (t.value.includes("flex")) return "flex";
              if (t.value.includes("grid")) return "grid";
            }
          return !1;
        }
        gridStatus(t, r) {
          if (!t) return !1;
          if (void 0 !== t._autoprefixerGridStatus)
            return t._autoprefixerGridStatus;
          let i = null;
          if (t.nodes) {
            let e;
            t.each((t) => {
              if ("comment" === t.type && c.test(t.text)) {
                let i = /:\s*autoplace/i.test(t.text),
                  n = /no-autoplace/i.test(t.text);
                void 0 !== e
                  ? r.warn(
                      "Second Autoprefixer grid control comment was ignored. Autoprefixer applies control comments to the whole block, not to the next rules.",
                      { node: t },
                    )
                  : (e = i ? "autoplace" : !!n || /on/i.test(t.text));
              }
            }),
              void 0 !== e && (i = e);
          }
          if ("atrule" === t.type && "supports" === t.name) {
            let e = t.params;
            e.includes("grid") && e.includes("auto") && (i = !1);
          }
          if (!t.nodes || null === i)
            if (t.parent) {
              let e = this.gridStatus(t.parent, r);
              i = !0 !== t.parent._autoprefixerSelfDisabled && e;
            } else
              i =
                void 0 !== this.prefixes.options.grid
                  ? this.prefixes.options.grid
                  : void 0 !== e.env.AUTOPREFIXER_GRID &&
                    ("autoplace" !== e.env.AUTOPREFIXER_GRID || "autoplace");
          return (t._autoprefixerGridStatus = i), i;
        }
      };
    }),
    $a = p((e, t) => {
      m(),
        (t.exports = {
          A: {
            A: { 2: "J D E F A B iB" },
            B: { 1: "C K L G M N O R S T U V W X Y Z a P b H" },
            C: {
              1: "0 1 2 3 4 5 6 7 8 9 g h i j k l m n o p q r s t u v w x y z AB BB CB DB EB FB GB bB HB cB IB JB Q KB LB MB NB OB PB QB RB SB TB UB VB WB XB R S T kB U V W X Y Z a P b H dB",
              2: "jB aB I c J D E F A B C K L G M N O d e f lB mB",
            },
            D: {
              1: "0 1 2 3 4 5 6 7 8 9 m n o p q r s t u v w x y z AB BB CB DB EB FB GB bB HB cB IB JB Q KB LB MB NB OB PB QB RB SB TB UB VB WB XB R S T U V W X Y Z a P b H dB nB oB",
              2: "I c J D E F A B C K L G M N O d e f g h i j k l",
            },
            E: {
              1: "F A B C K L G tB fB YB ZB uB vB wB",
              2: "I c J D E pB eB qB rB sB",
            },
            F: {
              1: "0 1 2 3 4 5 6 7 8 9 G M N O d e f g h i j k l m n o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB Q KB LB MB NB OB PB QB RB SB TB UB VB WB XB ZB",
              2: "F B C xB yB zB 0B YB gB 1B",
            },
            G: {
              1: "7B 8B 9B AC BC CC DC EC FC GC HC IC JC KC",
              2: "E eB 2B hB 3B 4B 5B 6B",
            },
            H: { 1: "LC" },
            I: { 1: "H QC RC", 2: "aB I MC NC OC PC hB" },
            J: { 2: "D A" },
            K: { 1: "Q", 2: "A B C YB gB ZB" },
            L: { 1: "H" },
            M: { 1: "P" },
            N: { 2: "A B" },
            O: { 1: "SC" },
            P: { 1: "I TC UC VC WC XC fB YC ZC aC bC" },
            Q: { 1: "cC" },
            R: { 1: "dC" },
            S: { 1: "eC" },
          },
          B: 4,
          C: "CSS Feature Queries",
        });
    }),
    Ba = p((e, t) => {
      function r(e) {
        return e[e.length - 1];
      }
      m();
      var i = {
        parse(e) {
          let t = [""],
            i = [t];
          for (let n of e)
            "(" !== n
              ? ")" !== n
                ? (t[t.length - 1] += n)
                : (i.pop(), (t = r(i)), t.push(""))
              : ((t = [""]), r(i).push(t), i.push(t));
          return i[0];
        },
        stringify(e) {
          let t = "";
          for (let r of e)
            t += "object" != typeof r ? r : `(${i.stringify(r)})`;
          return t;
        },
      };
      t.exports = i;
    }),
    Ua = p((e, t) => {
      m();
      var r = $a(),
        { feature: i } = (xa(), ya),
        { parse: n } = _i(),
        o = Ca(),
        s = Ba(),
        a = ja(),
        l = Sa(),
        c = i(r),
        u = [];
      for (let e in c.stats) {
        let t = c.stats[e];
        for (let r in t) {
          let i = t[r];
          /y/.test(i) && u.push(e + " " + r);
        }
      }
      t.exports = class {
        constructor(e, t) {
          (this.Prefixes = e), (this.all = t);
        }
        prefixer() {
          if (this.prefixerCache) return this.prefixerCache;
          let e = this.all.browsers.selected.filter((e) => u.includes(e)),
            t = new o(this.all.browsers.data, e, this.all.options);
          return (
            (this.prefixerCache = new this.Prefixes(
              this.all.data,
              t,
              this.all.options,
            )),
            this.prefixerCache
          );
        }
        parse(e) {
          let t = e.split(":"),
            r = t[0],
            i = t[1];
          return i || (i = ""), [r.trim(), i.trim()];
        }
        virtual(e) {
          let [t, r] = this.parse(e),
            i = n("a{}").first;
          return i.append({ prop: t, value: r, raws: { before: "" } }), i;
        }
        prefixed(e) {
          let t = this.virtual(e);
          if (this.disabled(t.first)) return t.nodes;
          let r = this.prefixer().add[t.first.prop];
          r && r.process && r.process(t.first, { warn: () => null });
          for (let e of t.nodes) {
            for (let r of this.prefixer().values("add", t.first.prop))
              r.process(e);
            a.save(this.all, e);
          }
          return t.nodes;
        }
        isNot(e) {
          return "string" == typeof e && /not\s*/i.test(e);
        }
        isOr(e) {
          return "string" == typeof e && /\s*or\s*/i.test(e);
        }
        isProp(e) {
          return (
            "object" == typeof e && 1 === e.length && "string" == typeof e[0]
          );
        }
        isHack(e, t) {
          return !new RegExp(`(\\(|\\s)${l.escapeRegexp(t)}:`).test(e);
        }
        toRemove(e, t) {
          let [r, i] = this.parse(e),
            n = this.all.unprefixed(r),
            o = this.all.cleaner();
          if (o.remove[r] && o.remove[r].remove && !this.isHack(t, n))
            return !0;
          for (let e of o.values("remove", n)) if (e.check(i)) return !0;
          return !1;
        }
        remove(e, t) {
          let r = 0;
          for (; r < e.length; )
            if (
              !this.isNot(e[r - 1]) &&
              this.isProp(e[r]) &&
              this.isOr(e[r + 1])
            ) {
              if (this.toRemove(e[r][0], t)) {
                e.splice(r, 2);
                continue;
              }
              r += 2;
            } else
              "object" == typeof e[r] && (e[r] = this.remove(e[r], t)),
                (r += 1);
          return e;
        }
        cleanBrackets(e) {
          return e.map((e) =>
            "object" != typeof e
              ? e
              : 1 === e.length && "object" == typeof e[0]
                ? this.cleanBrackets(e[0])
                : this.cleanBrackets(e),
          );
        }
        convert(e) {
          let t = [""];
          for (let r of e) t.push([`${r.prop}: ${r.value}`]), t.push(" or ");
          return (t[t.length - 1] = ""), t;
        }
        normalize(e) {
          if ("object" != typeof e) return e;
          if ("string" == typeof (e = e.filter((e) => "" !== e))[0]) {
            let t = e[0].trim();
            if (t.includes(":") || "selector" === t || "not selector" === t)
              return [s.stringify(e)];
          }
          return e.map((e) => this.normalize(e));
        }
        add(e, t) {
          return e.map((e) => {
            if (this.isProp(e)) {
              let t = this.prefixed(e[0]);
              return t.length > 1 ? this.convert(t) : e;
            }
            return "object" == typeof e ? this.add(e, t) : e;
          });
        }
        process(e) {
          let t = s.parse(e.params);
          (t = this.normalize(t)),
            (t = this.remove(t, e.params)),
            (t = this.add(t, e.params)),
            (t = this.cleanBrackets(t)),
            (e.params = s.stringify(t));
        }
        disabled(e) {
          if (
            !this.all.options.grid &&
            (("display" === e.prop && e.value.includes("grid")) ||
              e.prop.includes("grid") ||
              "justify-items" === e.prop)
          )
            return !0;
          if (!1 === this.all.options.flexbox) {
            if ("display" === e.prop && e.value.includes("flex")) return !0;
            let t = [
              "order",
              "justify-content",
              "align-items",
              "align-content",
            ];
            if (e.prop.includes("flex") || t.includes(e.prop)) return !0;
          }
          return !1;
        }
      };
    }),
    Ma = p((e, t) => {
      m();
      t.exports = class {
        constructor(e, t) {
          (this.prefix = t),
            (this.prefixed = e.prefixed(this.prefix)),
            (this.regexp = e.regexp(this.prefix)),
            (this.prefixeds = e
              .possible()
              .map((t) => [e.prefixed(t), e.regexp(t)])),
            (this.unprefixed = e.name),
            (this.nameRegexp = e.regexp());
        }
        isHack(e) {
          let t = e.parent.index(e) + 1,
            r = e.parent.nodes;
          for (; t < r.length; ) {
            let e = r[t].selector;
            if (!e) return !0;
            if (e.includes(this.unprefixed) && e.match(this.nameRegexp))
              return !1;
            let i = !1;
            for (let [t, r] of this.prefixeds)
              if (e.includes(t) && e.match(r)) {
                i = !0;
                break;
              }
            if (!i) return !0;
            t += 1;
          }
          return !0;
        }
        check(e) {
          return !(
            !e.selector.includes(this.prefixed) ||
            !e.selector.match(this.regexp) ||
            this.isHack(e)
          );
        }
      };
    }),
    La = p((e, t) => {
      m();
      var { list: r } = _i(),
        i = Ma(),
        n = _a(),
        o = Ca(),
        s = Sa();
      t.exports = class extends n {
        constructor(e, t, r) {
          super(e, t, r), (this.regexpCache = new Map());
        }
        check(e) {
          return (
            !!e.selector.includes(this.name) &&
            !!e.selector.match(this.regexp())
          );
        }
        prefixed(e) {
          return this.name.replace(/^(\W*)/, `$1${e}`);
        }
        regexp(e) {
          if (!this.regexpCache.has(e)) {
            let t = e ? this.prefixed(e) : this.name;
            this.regexpCache.set(
              e,
              new RegExp(`(^|[^:"'=])${s.escapeRegexp(t)}`, "gi"),
            );
          }
          return this.regexpCache.get(e);
        }
        possible() {
          return o.prefixes();
        }
        prefixeds(e) {
          if (e._autoprefixerPrefixeds) {
            if (e._autoprefixerPrefixeds[this.name])
              return e._autoprefixerPrefixeds;
          } else e._autoprefixerPrefixeds = {};
          let t = {};
          if (e.selector.includes(",")) {
            let i = r.comma(e.selector).filter((e) => e.includes(this.name));
            for (let e of this.possible())
              t[e] = i.map((t) => this.replace(t, e)).join(", ");
          } else
            for (let r of this.possible()) t[r] = this.replace(e.selector, r);
          return (
            (e._autoprefixerPrefixeds[this.name] = t), e._autoprefixerPrefixeds
          );
        }
        already(e, t, r) {
          let i = e.parent.index(e) - 1;
          for (; i >= 0; ) {
            let n = e.parent.nodes[i];
            if ("rule" !== n.type) return !1;
            let o = !1;
            for (let e in t[this.name]) {
              let i = t[this.name][e];
              if (n.selector === i) {
                if (r === e) return !0;
                o = !0;
                break;
              }
            }
            if (!o) return !1;
            i -= 1;
          }
          return !1;
        }
        replace(e, t) {
          return e.replace(this.regexp(), `$1${this.prefixed(t)}`);
        }
        add(e, t) {
          let r = this.prefixeds(e);
          if (this.already(e, r, t)) return;
          let i = this.clone(e, { selector: r[this.name][t] });
          e.parent.insertBefore(e, i);
        }
        old(e) {
          return new i(this, e);
        }
      };
    }),
    za = p((e, t) => {
      m();
      var r = _a();
      t.exports = class extends r {
        add(e, t) {
          let r = t + e.name;
          if (e.parent.some((t) => t.name === r && t.params === e.params))
            return;
          let i = this.clone(e, { name: r });
          return e.parent.insertBefore(e, i);
        }
        process(e) {
          let t = this.parentPrefix(e);
          for (let r of this.prefixes) (!t || t === r) && this.add(e, r);
        }
      };
    }),
    Fa = p((e, t) => {
      m();
      var r = La(),
        i = class extends r {
          prefixed(e) {
            return "-webkit-" === e
              ? ":-webkit-full-screen"
              : "-moz-" === e
                ? ":-moz-full-screen"
                : `:${e}fullscreen`;
          }
        };
      (i.names = [":fullscreen"]), (t.exports = i);
    }),
    Na = p((e, t) => {
      m();
      var r = La(),
        i = class extends r {
          possible() {
            return super.possible().concat(["-moz- old", "-ms- old"]);
          }
          prefixed(e) {
            return "-webkit-" === e
              ? "::-webkit-input-placeholder"
              : "-ms-" === e
                ? "::-ms-input-placeholder"
                : "-ms- old" === e
                  ? ":-ms-input-placeholder"
                  : "-moz- old" === e
                    ? ":-moz-placeholder"
                    : `::${e}placeholder`;
          }
        };
      (i.names = ["::placeholder"]), (t.exports = i);
    }),
    Wa = p((e, t) => {
      m();
      var r = La(),
        i = class extends r {
          prefixed(e) {
            return "-ms-" === e
              ? ":-ms-input-placeholder"
              : `:${e}placeholder-shown`;
          }
        };
      (i.names = [":placeholder-shown"]), (t.exports = i);
    }),
    Va = p((e, t) => {
      m();
      var r = La(),
        i = Sa(),
        n = class extends r {
          constructor(e, t, r) {
            super(e, t, r),
              this.prefixes &&
                (this.prefixes = i.uniq(this.prefixes.map((e) => "-webkit-")));
          }
          prefixed(e) {
            return "-webkit-" === e
              ? "::-webkit-file-upload-button"
              : `::${e}file-selector-button`;
          }
        };
      (n.names = ["::file-selector-button"]), (t.exports = n);
    }),
    qa = p((e, t) => {
      m(),
        (t.exports = function (e) {
          let t;
          return (
            "-webkit- 2009" === e || "-moz-" === e
              ? (t = 2009)
              : "-ms-" === e
                ? (t = 2012)
                : "-webkit-" === e && (t = "final"),
            "-webkit- 2009" === e && (e = "-webkit-"),
            [t, e]
          );
        });
    }),
    Ga = p((e, t) => {
      m();
      var r = _i().list,
        i = qa(),
        n = Oa(),
        o = class extends n {
          prefixed(e, t) {
            let r;
            return (
              ([r, t] = i(t)),
              2009 === r ? t + "box-flex" : super.prefixed(e, t)
            );
          }
          normalize() {
            return "flex";
          }
          set(e, t) {
            let n = i(t)[0];
            if (2009 === n)
              return (
                (e.value = r.space(e.value)[0]),
                (e.value = o.oldValues[e.value] || e.value),
                super.set(e, t)
              );
            if (2012 === n) {
              let t = r.space(e.value);
              3 === t.length &&
                "0" === t[2] &&
                (e.value = t.slice(0, 2).concat("0px").join(" "));
            }
            return super.set(e, t);
          }
        };
      (o.names = ["flex", "box-flex"]),
        (o.oldValues = { auto: "1", none: "0" }),
        (t.exports = o);
    }),
    Ya = p((e, t) => {
      m();
      var r = qa(),
        i = Oa(),
        n = class extends i {
          prefixed(e, t) {
            let i;
            return (
              ([i, t] = r(t)),
              2009 === i
                ? t + "box-ordinal-group"
                : 2012 === i
                  ? t + "flex-order"
                  : super.prefixed(e, t)
            );
          }
          normalize() {
            return "order";
          }
          set(e, t) {
            return 2009 === r(t)[0] && /\d/.test(e.value)
              ? ((e.value = (parseInt(e.value) + 1).toString()),
                super.set(e, t))
              : super.set(e, t);
          }
        };
      (n.names = ["order", "flex-order", "box-ordinal-group"]), (t.exports = n);
    }),
    Ha = p((e, t) => {
      m();
      var r = Oa(),
        i = class extends r {
          check(e) {
            let t = e.value;
            return (
              !t.toLowerCase().includes("alpha(") &&
              !t.includes("DXImageTransform.Microsoft") &&
              !t.includes("data:image/svg+xml")
            );
          }
        };
      (i.names = ["filter"]), (t.exports = i);
    }),
    Qa = p((e, t) => {
      m();
      var r = Oa(),
        i = class extends r {
          insert(e, t, r, i) {
            if ("-ms-" !== t) return super.insert(e, t, r);
            let n = this.clone(e),
              o = e.prop.replace(/end$/, "start"),
              s = t + e.prop.replace(/end$/, "span");
            if (!e.parent.some((e) => e.prop === s)) {
              if (((n.prop = s), e.value.includes("span")))
                n.value = e.value.replace(/span\s/i, "");
              else {
                let t;
                if (
                  (e.parent.walkDecls(o, (e) => {
                    t = e;
                  }),
                  t)
                ) {
                  let r = Number(e.value) - Number(t.value) + "";
                  n.value = r;
                } else
                  e.warn(i, `Can not prefix ${e.prop} (${o} is not found)`);
              }
              e.cloneBefore(n);
            }
          }
        };
      (i.names = ["grid-row-end", "grid-column-end"]), (t.exports = i);
    }),
    Ja = p((e, t) => {
      m();
      var r = Oa(),
        i = class extends r {
          check(e) {
            return !e.value.split(/\s+/).some((e) => {
              let t = e.toLowerCase();
              return "reverse" === t || "alternate-reverse" === t;
            });
          }
        };
      (i.names = ["animation", "animation-direction"]), (t.exports = i);
    }),
    Xa = p((e, t) => {
      m();
      var r = qa(),
        i = Oa(),
        n = class extends i {
          insert(e, t, i) {
            let n;
            if ((([n, t] = r(t)), 2009 !== n)) return super.insert(e, t, i);
            let o = e.value
              .split(/\s+/)
              .filter((e) => "wrap" !== e && "nowrap" !== e && "wrap-reverse");
            if (
              0 === o.length ||
              e.parent.some(
                (e) =>
                  e.prop === t + "box-orient" || e.prop === t + "box-direction",
              )
            )
              return;
            let s = o[0],
              a = s.includes("row") ? "horizontal" : "vertical",
              l = s.includes("reverse") ? "reverse" : "normal",
              c = this.clone(e);
            return (
              (c.prop = t + "box-orient"),
              (c.value = a),
              this.needCascade(e) && (c.raws.before = this.calcBefore(i, e, t)),
              e.parent.insertBefore(e, c),
              (c = this.clone(e)),
              (c.prop = t + "box-direction"),
              (c.value = l),
              this.needCascade(e) && (c.raws.before = this.calcBefore(i, e, t)),
              e.parent.insertBefore(e, c)
            );
          }
        };
      (n.names = ["flex-flow", "box-direction", "box-orient"]), (t.exports = n);
    }),
    Ka = p((e, t) => {
      m();
      var r = qa(),
        i = Oa(),
        n = class extends i {
          normalize() {
            return "flex";
          }
          prefixed(e, t) {
            let i;
            return (
              ([i, t] = r(t)),
              2009 === i
                ? t + "box-flex"
                : 2012 === i
                  ? t + "flex-positive"
                  : super.prefixed(e, t)
            );
          }
        };
      (n.names = ["flex-grow", "flex-positive"]), (t.exports = n);
    }),
    Za = p((e, t) => {
      m();
      var r = qa(),
        i = Oa(),
        n = class extends i {
          set(e, t) {
            if (2009 !== r(t)[0]) return super.set(e, t);
          }
        };
      (n.names = ["flex-wrap"]), (t.exports = n);
    }),
    el = p((e, t) => {
      m();
      var r = Oa(),
        i = Ia(),
        n = class extends r {
          insert(e, t, r, n) {
            if ("-ms-" !== t) return super.insert(e, t, r);
            let o = i.parse(e),
              [s, a] = i.translate(o, 0, 2),
              [l, c] = i.translate(o, 1, 3);
            [
              ["grid-row", s],
              ["grid-row-span", a],
              ["grid-column", l],
              ["grid-column-span", c],
            ].forEach(([t, r]) => {
              i.insertDecl(e, t, r);
            }),
              i.warnTemplateSelectorNotFound(e, n),
              i.warnIfGridRowColumnExists(e, n);
          }
        };
      (n.names = ["grid-area"]), (t.exports = n);
    }),
    tl = p((e, t) => {
      m();
      var r = Oa(),
        i = Ia(),
        n = class extends r {
          insert(e, t, r) {
            if ("-ms-" !== t) return super.insert(e, t, r);
            if (e.parent.some((e) => "-ms-grid-row-align" === e.prop)) return;
            let [[n, o]] = i.parse(e);
            o
              ? (i.insertDecl(e, "grid-row-align", n),
                i.insertDecl(e, "grid-column-align", o))
              : (i.insertDecl(e, "grid-row-align", n),
                i.insertDecl(e, "grid-column-align", n));
          }
        };
      (n.names = ["place-self"]), (t.exports = n);
    }),
    rl = p((e, t) => {
      m();
      var r = Oa(),
        i = class extends r {
          check(e) {
            let t = e.value;
            return !t.includes("/") || t.includes("span");
          }
          normalize(e) {
            return e.replace("-start", "");
          }
          prefixed(e, t) {
            let r = super.prefixed(e, t);
            return "-ms-" === t && (r = r.replace("-start", "")), r;
          }
        };
      (i.names = ["grid-row-start", "grid-column-start"]), (t.exports = i);
    }),
    il = p((e, t) => {
      m();
      var r = qa(),
        i = Oa(),
        n = class extends i {
          check(e) {
            return (
              e.parent &&
              !e.parent.some((e) => e.prop && e.prop.startsWith("grid-"))
            );
          }
          prefixed(e, t) {
            let i;
            return (
              ([i, t] = r(t)),
              2012 === i ? t + "flex-item-align" : super.prefixed(e, t)
            );
          }
          normalize() {
            return "align-self";
          }
          set(e, t) {
            let i = r(t)[0];
            return 2012 === i
              ? ((e.value = n.oldValues[e.value] || e.value), super.set(e, t))
              : "final" === i
                ? super.set(e, t)
                : void 0;
          }
        };
      (n.names = ["align-self", "flex-item-align"]),
        (n.oldValues = { "flex-end": "end", "flex-start": "start" }),
        (t.exports = n);
    }),
    nl = p((e, t) => {
      m();
      var r = Oa(),
        i = Sa(),
        n = class extends r {
          constructor(e, t, r) {
            super(e, t, r),
              this.prefixes &&
                (this.prefixes = i.uniq(
                  this.prefixes.map((e) => ("-ms-" === e ? "-webkit-" : e)),
                ));
          }
        };
      (n.names = ["appearance"]), (t.exports = n);
    }),
    ol = p((e, t) => {
      m();
      var r = qa(),
        i = Oa(),
        n = class extends i {
          normalize() {
            return "flex-basis";
          }
          prefixed(e, t) {
            let i;
            return (
              ([i, t] = r(t)),
              2012 === i ? t + "flex-preferred-size" : super.prefixed(e, t)
            );
          }
          set(e, t) {
            let i;
            if ((([i, t] = r(t)), 2012 === i || "final" === i))
              return super.set(e, t);
          }
        };
      (n.names = ["flex-basis", "flex-preferred-size"]), (t.exports = n);
    }),
    sl = p((e, t) => {
      m();
      var r = Oa(),
        i = class extends r {
          normalize() {
            return this.name.replace("box-image", "border");
          }
          prefixed(e, t) {
            let r = super.prefixed(e, t);
            return (
              "-webkit-" === t && (r = r.replace("border", "box-image")), r
            );
          }
        };
      (i.names = [
        "mask-border",
        "mask-border-source",
        "mask-border-slice",
        "mask-border-width",
        "mask-border-outset",
        "mask-border-repeat",
        "mask-box-image",
        "mask-box-image-source",
        "mask-box-image-slice",
        "mask-box-image-width",
        "mask-box-image-outset",
        "mask-box-image-repeat",
      ]),
        (t.exports = i);
    }),
    al = p((e, t) => {
      m();
      var r = Oa(),
        i = class extends r {
          insert(e, t, r) {
            let n,
              o = "mask-composite" === e.prop;
            (n = o ? e.value.split(",") : e.value.match(i.regexp) || []),
              (n = n.map((e) => e.trim()).filter((e) => e));
            let s,
              a = n.length;
            if (
              (a &&
                ((s = this.clone(e)),
                (s.value = n.map((e) => i.oldValues[e] || e).join(", ")),
                n.includes("intersect") && (s.value += ", xor"),
                (s.prop = t + "mask-composite")),
              o)
            )
              return a
                ? (this.needCascade(e) &&
                    (s.raws.before = this.calcBefore(r, e, t)),
                  e.parent.insertBefore(e, s))
                : void 0;
            let l = this.clone(e);
            return (
              (l.prop = t + l.prop),
              a && (l.value = l.value.replace(i.regexp, "")),
              this.needCascade(e) && (l.raws.before = this.calcBefore(r, e, t)),
              e.parent.insertBefore(e, l),
              a
                ? (this.needCascade(e) &&
                    (s.raws.before = this.calcBefore(r, e, t)),
                  e.parent.insertBefore(e, s))
                : e
            );
          }
        };
      (i.names = ["mask", "mask-composite"]),
        (i.oldValues = {
          add: "source-over",
          subtract: "source-out",
          intersect: "source-in",
          exclude: "xor",
        }),
        (i.regexp = new RegExp(
          `\\s+(${Object.keys(i.oldValues).join("|")})\\b(?!\\))\\s*(?=[,])`,
          "ig",
        )),
        (t.exports = i);
    }),
    ll = p((e, t) => {
      m();
      var r = qa(),
        i = Oa(),
        n = class extends i {
          prefixed(e, t) {
            let i;
            return (
              ([i, t] = r(t)),
              2009 === i
                ? t + "box-align"
                : 2012 === i
                  ? t + "flex-align"
                  : super.prefixed(e, t)
            );
          }
          normalize() {
            return "align-items";
          }
          set(e, t) {
            let i = r(t)[0];
            return (
              (2009 === i || 2012 === i) &&
                (e.value = n.oldValues[e.value] || e.value),
              super.set(e, t)
            );
          }
        };
      (n.names = ["align-items", "flex-align", "box-align"]),
        (n.oldValues = { "flex-end": "end", "flex-start": "start" }),
        (t.exports = n);
    }),
    cl = p((e, t) => {
      m();
      var r = Oa(),
        i = class extends r {
          set(e, t) {
            return (
              "-ms-" === t && "contain" === e.value && (e.value = "element"),
              super.set(e, t)
            );
          }
          insert(e, t, r) {
            if ("all" !== e.value || "-ms-" !== t) return super.insert(e, t, r);
          }
        };
      (i.names = ["user-select"]), (t.exports = i);
    }),
    ul = p((e, t) => {
      m();
      var r = qa(),
        i = Oa(),
        n = class extends i {
          normalize() {
            return "flex-shrink";
          }
          prefixed(e, t) {
            let i;
            return (
              ([i, t] = r(t)),
              2012 === i ? t + "flex-negative" : super.prefixed(e, t)
            );
          }
          set(e, t) {
            let i;
            if ((([i, t] = r(t)), 2012 === i || "final" === i))
              return super.set(e, t);
          }
        };
      (n.names = ["flex-shrink", "flex-negative"]), (t.exports = n);
    }),
    dl = p((e, t) => {
      m();
      var r = Oa(),
        i = class extends r {
          prefixed(e, t) {
            return `${t}column-${e}`;
          }
          normalize(e) {
            return e.includes("inside")
              ? "break-inside"
              : e.includes("before")
                ? "break-before"
                : "break-after";
          }
          set(e, t) {
            return (
              (("break-inside" === e.prop && "avoid-column" === e.value) ||
                "avoid-page" === e.value) &&
                (e.value = "avoid"),
              super.set(e, t)
            );
          }
          insert(e, t, r) {
            return "break-inside" !== e.prop
              ? super.insert(e, t, r)
              : /region/i.test(e.value) || /page/i.test(e.value)
                ? void 0
                : super.insert(e, t, r);
          }
        };
      (i.names = [
        "break-inside",
        "page-break-inside",
        "column-break-inside",
        "break-before",
        "page-break-before",
        "column-break-before",
        "break-after",
        "page-break-after",
        "column-break-after",
      ]),
        (t.exports = i);
    }),
    pl = p((e, t) => {
      m();
      var r = Oa(),
        i = class extends r {
          prefixed(e, t) {
            return t + "print-color-adjust";
          }
          normalize() {
            return "color-adjust";
          }
        };
      (i.names = ["color-adjust", "print-color-adjust"]), (t.exports = i);
    }),
    fl = p((e, t) => {
      m();
      var r = Oa(),
        i = class extends r {
          insert(e, t, r) {
            if ("-ms-" === t) {
              let n = this.set(this.clone(e), t);
              this.needCascade(e) && (n.raws.before = this.calcBefore(r, e, t));
              let o = "ltr";
              return (
                e.parent.nodes.forEach((e) => {
                  "direction" === e.prop &&
                    ("rtl" === e.value || "ltr" === e.value) &&
                    (o = e.value);
                }),
                (n.value = i.msValues[o][e.value] || e.value),
                e.parent.insertBefore(e, n)
              );
            }
            return super.insert(e, t, r);
          }
        };
      (i.names = ["writing-mode"]),
        (i.msValues = {
          ltr: {
            "horizontal-tb": "lr-tb",
            "vertical-rl": "tb-rl",
            "vertical-lr": "tb-lr",
          },
          rtl: {
            "horizontal-tb": "rl-tb",
            "vertical-rl": "bt-rl",
            "vertical-lr": "bt-lr",
          },
        }),
        (t.exports = i);
    }),
    hl = p((e, t) => {
      m();
      var r = Oa(),
        i = class extends r {
          set(e, t) {
            return (
              (e.value = e.value.replace(/\s+fill(\s)/, "$1")), super.set(e, t)
            );
          }
        };
      (i.names = ["border-image"]), (t.exports = i);
    }),
    ml = p((e, t) => {
      m();
      var r = qa(),
        i = Oa(),
        n = class extends i {
          prefixed(e, t) {
            let i;
            return (
              ([i, t] = r(t)),
              2012 === i ? t + "flex-line-pack" : super.prefixed(e, t)
            );
          }
          normalize() {
            return "align-content";
          }
          set(e, t) {
            let i = r(t)[0];
            return 2012 === i
              ? ((e.value = n.oldValues[e.value] || e.value), super.set(e, t))
              : "final" === i
                ? super.set(e, t)
                : void 0;
          }
        };
      (n.names = ["align-content", "flex-line-pack"]),
        (n.oldValues = {
          "flex-end": "end",
          "flex-start": "start",
          "space-between": "justify",
          "space-around": "distribute",
        }),
        (t.exports = n);
    }),
    gl = p((e, t) => {
      m();
      var r = Oa(),
        i = class extends r {
          prefixed(e, t) {
            return "-moz-" === t
              ? t + (i.toMozilla[e] || e)
              : super.prefixed(e, t);
          }
          normalize(e) {
            return i.toNormal[e] || e;
          }
        };
      (i.names = ["border-radius"]), (i.toMozilla = {}), (i.toNormal = {});
      for (let e of ["top", "bottom"])
        for (let t of ["left", "right"]) {
          let r = `border-${e}-${t}-radius`,
            n = `border-radius-${e}${t}`;
          i.names.push(r),
            i.names.push(n),
            (i.toMozilla[r] = n),
            (i.toNormal[n] = r);
        }
      t.exports = i;
    }),
    bl = p((e, t) => {
      m();
      var r = Oa(),
        i = class extends r {
          prefixed(e, t) {
            return e.includes("-start")
              ? t + e.replace("-block-start", "-before")
              : t + e.replace("-block-end", "-after");
          }
          normalize(e) {
            return e.includes("-before")
              ? e.replace("-before", "-block-start")
              : e.replace("-after", "-block-end");
          }
        };
      (i.names = [
        "border-block-start",
        "border-block-end",
        "margin-block-start",
        "margin-block-end",
        "padding-block-start",
        "padding-block-end",
        "border-before",
        "border-after",
        "margin-before",
        "margin-after",
        "padding-before",
        "padding-after",
      ]),
        (t.exports = i);
    }),
    yl = p((e, t) => {
      m();
      var r = Oa(),
        {
          parseTemplate: i,
          warnMissedAreas: n,
          getGridGap: o,
          warnGridGap: s,
          inheritGridGap: a,
        } = Ia(),
        l = class extends r {
          insert(e, t, r, l) {
            if ("-ms-" !== t) return super.insert(e, t, r);
            if (e.parent.some((e) => "-ms-grid-rows" === e.prop)) return;
            let c = o(e),
              u = a(e, c),
              { rows: d, columns: p, areas: f } = i({ decl: e, gap: u || c }),
              h = Object.keys(f).length > 0,
              m = Boolean(d),
              g = Boolean(p);
            return (
              s({ gap: c, hasColumns: g, decl: e, result: l }),
              n(f, e, l),
              ((m && g) || h) &&
                e.cloneBefore({ prop: "-ms-grid-rows", value: d, raws: {} }),
              g &&
                e.cloneBefore({ prop: "-ms-grid-columns", value: p, raws: {} }),
              e
            );
          }
        };
      (l.names = ["grid-template"]), (t.exports = l);
    }),
    wl = p((e, t) => {
      m();
      var r = Oa(),
        i = class extends r {
          prefixed(e, t) {
            return t + e.replace("-inline", "");
          }
          normalize(e) {
            return e.replace(
              /(margin|padding|border)-(start|end)/,
              "$1-inline-$2",
            );
          }
        };
      (i.names = [
        "border-inline-start",
        "border-inline-end",
        "margin-inline-start",
        "margin-inline-end",
        "padding-inline-start",
        "padding-inline-end",
        "border-start",
        "border-end",
        "margin-start",
        "margin-end",
        "padding-start",
        "padding-end",
      ]),
        (t.exports = i);
    }),
    vl = p((e, t) => {
      m();
      var r = Oa(),
        i = class extends r {
          check(e) {
            return !e.value.includes("flex-") && "baseline" !== e.value;
          }
          prefixed(e, t) {
            return t + "grid-row-align";
          }
          normalize() {
            return "align-self";
          }
        };
      (i.names = ["grid-row-align"]), (t.exports = i);
    }),
    xl = p((e, t) => {
      m();
      var r = Oa(),
        i = class extends r {
          keyframeParents(e) {
            let { parent: t } = e;
            for (; t; ) {
              if ("atrule" === t.type && "keyframes" === t.name) return !0;
              ({ parent: t } = t);
            }
            return !1;
          }
          contain3d(e) {
            if ("transform-origin" === e.prop) return !1;
            for (let t of i.functions3d)
              if (e.value.includes(`${t}(`)) return !0;
            return !1;
          }
          set(e, t) {
            return (
              (e = super.set(e, t)),
              "-ms-" === t &&
                (e.value = e.value.replace(/rotatez/gi, "rotate")),
              e
            );
          }
          insert(e, t, r) {
            if ("-ms-" === t) {
              if (!this.contain3d(e) && !this.keyframeParents(e))
                return super.insert(e, t, r);
            } else {
              if ("-o-" !== t) return super.insert(e, t, r);
              if (!this.contain3d(e)) return super.insert(e, t, r);
            }
          }
        };
      (i.names = ["transform", "transform-origin"]),
        (i.functions3d = [
          "matrix3d",
          "translate3d",
          "translateZ",
          "scale3d",
          "scaleZ",
          "rotate3d",
          "rotateX",
          "rotateY",
          "perspective",
        ]),
        (t.exports = i);
    }),
    kl = p((e, t) => {
      m();
      var r = qa(),
        i = Oa(),
        n = class extends i {
          normalize() {
            return "flex-direction";
          }
          insert(e, t, i) {
            let n;
            if ((([n, t] = r(t)), 2009 !== n)) return super.insert(e, t, i);
            if (
              e.parent.some(
                (e) =>
                  e.prop === t + "box-orient" || e.prop === t + "box-direction",
              )
            )
              return;
            let o,
              s,
              a = e.value;
            "inherit" === a || "initial" === a || "unset" === a
              ? ((o = a), (s = a))
              : ((o = a.includes("row") ? "horizontal" : "vertical"),
                (s = a.includes("reverse") ? "reverse" : "normal"));
            let l = this.clone(e);
            return (
              (l.prop = t + "box-orient"),
              (l.value = o),
              this.needCascade(e) && (l.raws.before = this.calcBefore(i, e, t)),
              e.parent.insertBefore(e, l),
              (l = this.clone(e)),
              (l.prop = t + "box-direction"),
              (l.value = s),
              this.needCascade(e) && (l.raws.before = this.calcBefore(i, e, t)),
              e.parent.insertBefore(e, l)
            );
          }
          old(e, t) {
            let i;
            return (
              ([i, t] = r(t)),
              2009 === i
                ? [t + "box-orient", t + "box-direction"]
                : super.old(e, t)
            );
          }
        };
      (n.names = ["flex-direction", "box-direction", "box-orient"]),
        (t.exports = n);
    }),
    Sl = p((e, t) => {
      m();
      var r = Oa(),
        i = class extends r {
          check(e) {
            return "pixelated" === e.value;
          }
          prefixed(e, t) {
            return "-ms-" === t
              ? "-ms-interpolation-mode"
              : super.prefixed(e, t);
          }
          set(e, t) {
            return "-ms-" !== t
              ? super.set(e, t)
              : ((e.prop = "-ms-interpolation-mode"),
                (e.value = "nearest-neighbor"),
                e);
          }
          normalize() {
            return "image-rendering";
          }
          process(e, t) {
            return super.process(e, t);
          }
        };
      (i.names = ["image-rendering", "interpolation-mode"]), (t.exports = i);
    }),
    Cl = p((e, t) => {
      m();
      var r = Oa(),
        i = Sa(),
        n = class extends r {
          constructor(e, t, r) {
            super(e, t, r),
              this.prefixes &&
                (this.prefixes = i.uniq(
                  this.prefixes.map((e) => ("-ms-" === e ? "-webkit-" : e)),
                ));
          }
        };
      (n.names = ["backdrop-filter"]), (t.exports = n);
    }),
    Al = p((e, t) => {
      m();
      var r = Oa(),
        i = Sa(),
        n = class extends r {
          constructor(e, t, r) {
            super(e, t, r),
              this.prefixes &&
                (this.prefixes = i.uniq(
                  this.prefixes.map((e) => ("-ms-" === e ? "-webkit-" : e)),
                ));
          }
          check(e) {
            return "text" === e.value.toLowerCase();
          }
        };
      (n.names = ["background-clip"]), (t.exports = n);
    }),
    _l = p((e, t) => {
      m();
      var r = Oa(),
        i = [
          "none",
          "underline",
          "overline",
          "line-through",
          "blink",
          "inherit",
          "initial",
          "unset",
        ],
        n = class extends r {
          check(e) {
            return e.value.split(/\s+/).some((e) => !i.includes(e));
          }
        };
      (n.names = ["text-decoration"]), (t.exports = n);
    }),
    Ol = p((e, t) => {
      m();
      var r = qa(),
        i = Oa(),
        n = class extends i {
          prefixed(e, t) {
            let i;
            return (
              ([i, t] = r(t)),
              2009 === i
                ? t + "box-pack"
                : 2012 === i
                  ? t + "flex-pack"
                  : super.prefixed(e, t)
            );
          }
          normalize() {
            return "justify-content";
          }
          set(e, t) {
            let i = r(t)[0];
            if (2009 === i || 2012 === i) {
              let r = n.oldValues[e.value] || e.value;
              if (((e.value = r), 2009 !== i || "distribute" !== r))
                return super.set(e, t);
            } else if ("final" === i) return super.set(e, t);
          }
        };
      (n.names = ["justify-content", "flex-pack", "box-pack"]),
        (n.oldValues = {
          "flex-end": "end",
          "flex-start": "start",
          "space-between": "justify",
          "space-around": "distribute",
        }),
        (t.exports = n);
    }),
    El = p((e, t) => {
      m();
      var r = Oa(),
        i = class extends r {
          set(e, t) {
            let r = e.value.toLowerCase();
            return (
              "-webkit-" === t &&
                !r.includes(" ") &&
                "contain" !== r &&
                "cover" !== r &&
                (e.value = e.value + " " + e.value),
              super.set(e, t)
            );
          }
        };
      (i.names = ["background-size"]), (t.exports = i);
    }),
    Tl = p((e, t) => {
      m();
      var r = Oa(),
        i = Ia(),
        n = class extends r {
          insert(e, t, r) {
            if ("-ms-" !== t) return super.insert(e, t, r);
            let n = i.parse(e),
              [o, s] = i.translate(n, 0, 1);
            n[0] &&
              n[0].includes("span") &&
              (s = n[0].join("").replace(/\D/g, "")),
              [
                [e.prop, o],
                [`${e.prop}-span`, s],
              ].forEach(([t, r]) => {
                i.insertDecl(e, t, r);
              });
          }
        };
      (n.names = ["grid-row", "grid-column"]), (t.exports = n);
    }),
    Pl = p((e, t) => {
      m();
      var r = Oa(),
        {
          prefixTrackProp: i,
          prefixTrackValue: n,
          autoplaceGridItems: o,
          getGridGap: s,
          inheritGridGap: a,
        } = Ia(),
        l = Ra(),
        c = class extends r {
          prefixed(e, t) {
            return "-ms-" === t
              ? i({ prop: e, prefix: t })
              : super.prefixed(e, t);
          }
          normalize(e) {
            return e.replace(/^grid-(rows|columns)/, "grid-template-$1");
          }
          insert(e, t, r, c) {
            if ("-ms-" !== t) return super.insert(e, t, r);
            let { parent: u, prop: d, value: p } = e,
              f = d.includes("rows"),
              h = d.includes("columns"),
              m = u.some(
                (e) =>
                  "grid-template" === e.prop ||
                  "grid-template-areas" === e.prop,
              );
            if (m && f) return !1;
            let g = new l({ options: {} }),
              b = g.gridStatus(u, c),
              y = s(e);
            y = a(e, y) || y;
            let w = f ? y.row : y.column;
            ("no-autoplace" === b || !0 === b) && !m && (w = null);
            let v = n({ value: p, gap: w });
            e.cloneBefore({ prop: i({ prop: d, prefix: t }), value: v });
            let x = u.nodes.find((e) => "grid-auto-flow" === e.prop),
              k = "row";
            if (
              (x && !g.disabled(x, c) && (k = x.value.trim()),
              "autoplace" === b)
            ) {
              let t = u.nodes.find((e) => "grid-template-rows" === e.prop);
              if (!t && m) return;
              if (!t && !m)
                return void e.warn(
                  c,
                  "Autoplacement does not work without grid-template-rows property",
                );
              !u.nodes.find((e) => "grid-template-columns" === e.prop) &&
                !m &&
                e.warn(
                  c,
                  "Autoplacement does not work without grid-template-columns property",
                ),
                h && !m && o(e, c, y, k);
            }
          }
        };
      (c.names = [
        "grid-template-rows",
        "grid-template-columns",
        "grid-rows",
        "grid-columns",
      ]),
        (t.exports = c);
    }),
    Dl = p((e, t) => {
      m();
      var r = Oa(),
        i = class extends r {
          check(e) {
            return !e.value.includes("flex-") && "baseline" !== e.value;
          }
          prefixed(e, t) {
            return t + "grid-column-align";
          }
          normalize() {
            return "justify-self";
          }
        };
      (i.names = ["grid-column-align"]), (t.exports = i);
    }),
    jl = p((e, t) => {
      m();
      var r = Oa(),
        i = class extends r {
          prefixed(e, t) {
            return t + "scroll-chaining";
          }
          normalize() {
            return "overscroll-behavior";
          }
          set(e, t) {
            return (
              "auto" === e.value
                ? (e.value = "chained")
                : ("none" === e.value || "contain" === e.value) &&
                  (e.value = "none"),
              super.set(e, t)
            );
          }
        };
      (i.names = ["overscroll-behavior", "scroll-chaining"]), (t.exports = i);
    }),
    Il = p((e, t) => {
      m();
      var r = Oa(),
        {
          parseGridAreas: i,
          warnMissedAreas: n,
          prefixTrackProp: o,
          prefixTrackValue: s,
          getGridGap: a,
          warnGridGap: l,
          inheritGridGap: c,
        } = Ia();
      var u = class extends r {
        insert(e, t, r, u) {
          if ("-ms-" !== t) return super.insert(e, t, r);
          let d = !1,
            p = !1,
            f = e.parent,
            h = a(e);
          (h = c(e, h) || h),
            f.walkDecls(/-ms-grid-rows/, (e) => e.remove()),
            f.walkDecls(/grid-template-(rows|columns)/, (e) => {
              if ("grid-template-rows" === e.prop) {
                p = !0;
                let { prop: r, value: i } = e;
                e.cloneBefore({
                  prop: o({ prop: r, prefix: t }),
                  value: s({ value: i, gap: h.row }),
                });
              } else d = !0;
            });
          let m = e.value
            .trim()
            .slice(1, -1)
            .split(/["']\s*["']?/g);
          d &&
            !p &&
            h.row &&
            m.length > 1 &&
            e.cloneBefore({
              prop: "-ms-grid-rows",
              value: s({ value: `repeat(${m.length}, auto)`, gap: h.row }),
              raws: {},
            }),
            l({ gap: h, hasColumns: d, decl: e, result: u });
          let g = i({ rows: m, gap: h });
          return n(g, e, u), e;
        }
      };
      (u.names = ["grid-template-areas"]), (t.exports = u);
    }),
    Rl = p((e, t) => {
      m();
      var r = Oa(),
        i = class extends r {
          set(e, t) {
            return (
              "-webkit-" === t &&
                (e.value = e.value.replace(/\s*(right|left)\s*/i, "")),
              super.set(e, t)
            );
          }
        };
      (i.names = ["text-emphasis-position"]), (t.exports = i);
    }),
    $l = p((e, t) => {
      m();
      var r = Oa(),
        i = class extends r {
          set(e, t) {
            return "text-decoration-skip-ink" === e.prop && "auto" === e.value
              ? ((e.prop = t + "text-decoration-skip"), (e.value = "ink"), e)
              : super.set(e, t);
          }
        };
      (i.names = ["text-decoration-skip-ink", "text-decoration-skip"]),
        (t.exports = i);
    }),
    Bl = p((e, t) => {
      function r(e, t, r) {
        var i = t - e;
        return ((((r - e) % i) + i) % i) + e;
      }
      function i(e, t, r) {
        return Math.max(e, Math.min(t, r));
      }
      function n(e, t, r, i, n) {
        if (!o(e, t, r, i, n))
          throw new Error(r + " is outside of range [" + e + "," + t + ")");
        return r;
      }
      function o(e, t, r, i, n) {
        return !(r < e || r > t || (n && r === t) || (i && r === e));
      }
      function s(e, t, r, i) {
        return (r ? "(" : "[") + e + "," + t + (i ? ")" : "]");
      }
      m(),
        (t.exports = {
          wrap: r,
          limit: i,
          validate: n,
          test: o,
          curry: function (e, t, a, l) {
            var c = s.bind(null, e, t, a, l);
            return {
              wrap: r.bind(null, e, t),
              limit: i.bind(null, e, t),
              validate: function (r) {
                return n(e, t, r, a, l);
              },
              test: function (r) {
                return o(e, t, r, a, l);
              },
              toString: c,
              name: c,
            };
          },
          name: s,
        });
    }),
    Ul = p((e, t) => {
      m();
      var r = Ms(),
        i = Bl(),
        n = Da(),
        o = ja(),
        s = Sa(),
        a = /top|left|right|bottom/gi,
        l = class extends o {
          replace(e, t) {
            let i = r(e);
            for (let e of i.nodes)
              if ("function" === e.type && e.value === this.name)
                if (
                  ((e.nodes = this.newDirection(e.nodes)),
                  (e.nodes = this.normalize(e.nodes)),
                  "-webkit- old" === t)
                ) {
                  if (!this.oldWebkit(e)) return !1;
                } else
                  (e.nodes = this.convertDirection(e.nodes)),
                    (e.value = t + e.value);
            return i.toString();
          }
          replaceFirst(e, ...t) {
            return t
              .map((e) =>
                " " === e
                  ? { type: "space", value: e }
                  : { type: "word", value: e },
              )
              .concat(e.slice(1));
          }
          normalizeUnit(e, t) {
            return (parseFloat(e) / t) * 360 + "deg";
          }
          normalize(e) {
            if (!e[0]) return e;
            if (/-?\d+(.\d+)?grad/.test(e[0].value))
              e[0].value = this.normalizeUnit(e[0].value, 400);
            else if (/-?\d+(.\d+)?rad/.test(e[0].value))
              e[0].value = this.normalizeUnit(e[0].value, 2 * Math.PI);
            else if (/-?\d+(.\d+)?turn/.test(e[0].value))
              e[0].value = this.normalizeUnit(e[0].value, 1);
            else if (e[0].value.includes("deg")) {
              let t = parseFloat(e[0].value);
              (t = i.wrap(0, 360, t)), (e[0].value = `${t}deg`);
            }
            return (
              "0deg" === e[0].value
                ? (e = this.replaceFirst(e, "to", " ", "top"))
                : "90deg" === e[0].value
                  ? (e = this.replaceFirst(e, "to", " ", "right"))
                  : "180deg" === e[0].value
                    ? (e = this.replaceFirst(e, "to", " ", "bottom"))
                    : "270deg" === e[0].value &&
                      (e = this.replaceFirst(e, "to", " ", "left")),
              e
            );
          }
          newDirection(e) {
            if ("to" === e[0].value || ((a.lastIndex = 0), !a.test(e[0].value)))
              return e;
            e.unshift(
              { type: "word", value: "to" },
              { type: "space", value: " " },
            );
            for (let t = 2; t < e.length && "div" !== e[t].type; t++)
              "word" === e[t].type &&
                (e[t].value = this.revertDirection(e[t].value));
            return e;
          }
          isRadial(e) {
            let t = "before";
            for (let r of e)
              if ("before" === t && "space" === r.type) t = "at";
              else if ("at" === t && "at" === r.value) t = "after";
              else {
                if ("after" === t && "space" === r.type) return !0;
                if ("div" === r.type) break;
                t = "before";
              }
            return !1;
          }
          convertDirection(e) {
            return (
              e.length > 0 &&
                ("to" === e[0].value
                  ? this.fixDirection(e)
                  : e[0].value.includes("deg")
                    ? this.fixAngle(e)
                    : this.isRadial(e) && this.fixRadial(e)),
              e
            );
          }
          fixDirection(e) {
            e.splice(0, 2);
            for (let t of e) {
              if ("div" === t.type) break;
              "word" === t.type && (t.value = this.revertDirection(t.value));
            }
          }
          fixAngle(e) {
            let t = e[0].value;
            (t = parseFloat(t)),
              (t = Math.abs(450 - t) % 360),
              (t = this.roundFloat(t, 3)),
              (e[0].value = `${t}deg`);
          }
          fixRadial(e) {
            let t,
              r,
              i,
              n,
              o,
              s,
              a = [],
              l = [];
            for (n = 0; n < e.length - 2; n++) {
              if (
                ((t = e[n]),
                (r = e[n + 1]),
                (i = e[n + 2]),
                "space" === t.type && "at" === r.value && "space" === i.type)
              ) {
                o = n + 3;
                break;
              }
              a.push(t);
            }
            for (n = o; n < e.length; n++) {
              if ("div" === e[n].type) {
                s = e[n];
                break;
              }
              l.push(e[n]);
            }
            e.splice(0, n, ...l, s, ...a);
          }
          revertDirection(e) {
            return l.directions[e.toLowerCase()] || e;
          }
          roundFloat(e, t) {
            return parseFloat(e.toFixed(t));
          }
          oldWebkit(e) {
            let { nodes: t } = e,
              i = r.stringify(e.nodes);
            if (
              "linear-gradient" !== this.name ||
              (t[0] && t[0].value.includes("deg")) ||
              i.includes("px") ||
              i.includes("-corner") ||
              i.includes("-side")
            )
              return !1;
            let n = [[]];
            for (let e of t)
              n[n.length - 1].push(e),
                "div" === e.type && "," === e.value && n.push([]);
            this.oldDirection(n), this.colorStops(n), (e.nodes = []);
            for (let t of n) e.nodes = e.nodes.concat(t);
            return (
              e.nodes.unshift(
                { type: "word", value: "linear" },
                this.cloneDiv(e.nodes),
              ),
              (e.value = "-webkit-gradient"),
              !0
            );
          }
          oldDirection(e) {
            let t = this.cloneDiv(e[0]);
            if ("to" !== e[0][0].value)
              return e.unshift([
                { type: "word", value: l.oldDirections.bottom },
                t,
              ]);
            {
              let r = [];
              for (let t of e[0].slice(2))
                "word" === t.type && r.push(t.value.toLowerCase());
              r = r.join(" ");
              let i = l.oldDirections[r] || r;
              return (e[0] = [{ type: "word", value: i }, t]), e[0];
            }
          }
          cloneDiv(e) {
            for (let t of e) if ("div" === t.type && "," === t.value) return t;
            return { type: "div", value: ",", after: " " };
          }
          colorStops(e) {
            let t = [];
            for (let i = 0; i < e.length; i++) {
              let n,
                o,
                s = e[i];
              if (0 === i) continue;
              let a,
                l = r.stringify(s[0]);
              s[1] && "word" === s[1].type
                ? (n = s[1].value)
                : s[2] && "word" === s[2].type && (n = s[2].value),
                (a =
                  1 !== i || (n && "0%" !== n)
                    ? i !== e.length - 1 || (n && "100%" !== n)
                      ? n
                        ? `color-stop(${n}, ${l})`
                        : `color-stop(${l})`
                      : `to(${l})`
                    : `from(${l})`);
              let c = s[s.length - 1];
              (e[i] = [{ type: "word", value: a }]),
                "div" === c.type && "," === c.value && (o = e[i].push(c)),
                t.push(o);
            }
            return t;
          }
          old(e) {
            if ("-webkit-" === e) {
              let t = "linear-gradient" === this.name ? "linear" : "radial",
                r = "-gradient",
                i = s.regexp(`-webkit-(${t}-gradient|gradient\\(\\s*${t})`, !1);
              return new n(this.name, e + this.name, r, i);
            }
            return super.old(e);
          }
          add(e, t) {
            let r = e.prop;
            if (r.includes("mask")) {
              if ("-webkit-" === t || "-webkit- old" === t)
                return super.add(e, t);
            } else {
              if (
                "list-style" !== r &&
                "list-style-image" !== r &&
                "content" !== r
              )
                return super.add(e, t);
              if ("-webkit-" === t || "-webkit- old" === t)
                return super.add(e, t);
            }
          }
        };
      (l.names = [
        "linear-gradient",
        "repeating-linear-gradient",
        "radial-gradient",
        "repeating-radial-gradient",
      ]),
        (l.directions = {
          top: "bottom",
          left: "right",
          bottom: "top",
          right: "left",
        }),
        (l.oldDirections = {
          top: "left bottom, left top",
          left: "right top, left top",
          bottom: "left top, left bottom",
          right: "left top, right top",
          "top right": "left bottom, right top",
          "top left": "right bottom, left top",
          "right top": "left bottom, right top",
          "right bottom": "left top, right bottom",
          "bottom right": "left top, right bottom",
          "bottom left": "right top, left bottom",
          "left top": "right bottom, left top",
          "left bottom": "right top, left bottom",
        }),
        (t.exports = l);
    }),
    Ml = p((e, t) => {
      m();
      var r = Da(),
        i = ja();
      function n(e) {
        return new RegExp(`(^|[\\s,(])(${e}($|[\\s),]))`, "gi");
      }
      var o = class extends i {
        regexp() {
          return (
            this.regexpCache || (this.regexpCache = n(this.name)),
            this.regexpCache
          );
        }
        isStretch() {
          return (
            "stretch" === this.name ||
            "fill" === this.name ||
            "fill-available" === this.name
          );
        }
        replace(e, t) {
          return "-moz-" === t && this.isStretch()
            ? e.replace(this.regexp(), "$1-moz-available$3")
            : "-webkit-" === t && this.isStretch()
              ? e.replace(this.regexp(), "$1-webkit-fill-available$3")
              : super.replace(e, t);
        }
        old(e) {
          let t = e + this.name;
          return (
            this.isStretch() &&
              ("-moz-" === e
                ? (t = "-moz-available")
                : "-webkit-" === e && (t = "-webkit-fill-available")),
            new r(this.name, t, t, n(t))
          );
        }
        add(e, t) {
          if (!e.prop.includes("grid") || "-webkit-" === t)
            return super.add(e, t);
        }
      };
      (o.names = [
        "max-content",
        "min-content",
        "fit-content",
        "fill",
        "fill-available",
        "stretch",
      ]),
        (t.exports = o);
    }),
    Ll = p((e, t) => {
      m();
      var r = Da(),
        i = ja(),
        n = class extends i {
          replace(e, t) {
            return "-webkit-" === t
              ? e.replace(this.regexp(), "$1-webkit-optimize-contrast")
              : "-moz-" === t
                ? e.replace(this.regexp(), "$1-moz-crisp-edges")
                : super.replace(e, t);
          }
          old(e) {
            return "-webkit-" === e
              ? new r(this.name, "-webkit-optimize-contrast")
              : "-moz-" === e
                ? new r(this.name, "-moz-crisp-edges")
                : super.old(e);
          }
        };
      (n.names = ["pixelated"]), (t.exports = n);
    }),
    zl = p((e, t) => {
      m();
      var r = ja(),
        i = class extends r {
          replace(e, t) {
            let r = super.replace(e, t);
            return (
              "-webkit-" === t &&
                (r = r.replace(/("[^"]+"|'[^']+')(\s+\d+\w)/gi, "url($1)$2")),
              r
            );
          }
        };
      (i.names = ["image-set"]), (t.exports = i);
    }),
    Fl = p((e, t) => {
      m();
      var r = _i().list,
        i = ja(),
        n = class extends i {
          replace(e, t) {
            return r
              .space(e)
              .map((e) => {
                if (e.slice(0, +this.name.length + 1) !== this.name + "(")
                  return e;
                let r = e.lastIndexOf(")"),
                  i = e.slice(r + 1),
                  n = e.slice(this.name.length + 1, r);
                if ("-webkit-" === t) {
                  let e = n.match(/\d*.?\d+%?/);
                  e
                    ? ((n = n.slice(e[0].length).trim()), (n += `, ${e[0]}`))
                    : (n += ", 0.5");
                }
                return t + this.name + "(" + n + ")" + i;
              })
              .join(" ");
          }
        };
      (n.names = ["cross-fade"]), (t.exports = n);
    }),
    Nl = p((e, t) => {
      m();
      var r = qa(),
        i = Da(),
        n = ja(),
        o = class extends n {
          constructor(e, t) {
            super(e, t), "display-flex" === e && (this.name = "flex");
          }
          check(e) {
            return "display" === e.prop && e.value === this.name;
          }
          prefixed(e) {
            let t, i;
            return (
              ([t, e] = r(e)),
              2009 === t
                ? (i = "flex" === this.name ? "box" : "inline-box")
                : 2012 === t
                  ? (i = "flex" === this.name ? "flexbox" : "inline-flexbox")
                  : "final" === t && (i = this.name),
              e + i
            );
          }
          replace(e, t) {
            return this.prefixed(t);
          }
          old(e) {
            let t = this.prefixed(e);
            if (t) return new i(this.name, t);
          }
        };
      (o.names = ["display-flex", "inline-flex"]), (t.exports = o);
    }),
    Wl = p((e, t) => {
      m();
      var r = ja(),
        i = class extends r {
          constructor(e, t) {
            super(e, t), "display-grid" === e && (this.name = "grid");
          }
          check(e) {
            return "display" === e.prop && e.value === this.name;
          }
        };
      (i.names = ["display-grid", "inline-grid"]), (t.exports = i);
    }),
    Vl = p((e, t) => {
      m();
      var r = ja(),
        i = class extends r {
          constructor(e, t) {
            super(e, t), "filter-function" === e && (this.name = "filter");
          }
        };
      (i.names = ["filter", "filter-function"]), (t.exports = i);
    }),
    ql = p((e, t) => {
      m();
      var r = Aa(),
        i = Oa(),
        n = Ta(),
        o = Pa(),
        s = Ra(),
        a = Ua(),
        l = Ca(),
        c = La(),
        u = za(),
        d = ja(),
        p = Sa(),
        f = Fa(),
        h = Na(),
        g = Wa(),
        b = Va(),
        y = Ga(),
        w = Ya(),
        v = Ha(),
        x = Qa(),
        k = Ja(),
        S = Xa(),
        C = Ka(),
        A = Za(),
        _ = el(),
        O = tl(),
        E = rl(),
        T = il(),
        P = nl(),
        D = ol(),
        j = sl(),
        I = al(),
        R = ll(),
        $ = cl(),
        B = ul(),
        U = dl(),
        M = pl(),
        L = fl(),
        z = hl(),
        F = ml(),
        N = gl(),
        W = bl(),
        V = yl(),
        q = wl(),
        G = vl(),
        Y = xl(),
        H = kl(),
        Q = Sl(),
        J = Cl(),
        X = Al(),
        K = _l(),
        Z = Ol(),
        ee = El(),
        te = Tl(),
        re = Pl(),
        ie = Dl(),
        ne = jl(),
        oe = Il(),
        se = Rl(),
        ae = $l(),
        le = Ul(),
        ce = Ml(),
        ue = Ll(),
        de = zl(),
        pe = Fl(),
        fe = Nl(),
        he = Wl(),
        me = Vl();
      c.hack(f),
        c.hack(h),
        c.hack(g),
        c.hack(b),
        i.hack(y),
        i.hack(w),
        i.hack(v),
        i.hack(x),
        i.hack(k),
        i.hack(S),
        i.hack(C),
        i.hack(A),
        i.hack(_),
        i.hack(O),
        i.hack(E),
        i.hack(T),
        i.hack(P),
        i.hack(D),
        i.hack(j),
        i.hack(I),
        i.hack(R),
        i.hack($),
        i.hack(B),
        i.hack(U),
        i.hack(M),
        i.hack(L),
        i.hack(z),
        i.hack(F),
        i.hack(N),
        i.hack(W),
        i.hack(V),
        i.hack(q),
        i.hack(G),
        i.hack(Y),
        i.hack(H),
        i.hack(Q),
        i.hack(J),
        i.hack(X),
        i.hack(K),
        i.hack(Z),
        i.hack(ee),
        i.hack(te),
        i.hack(re),
        i.hack(ie),
        i.hack(ne),
        i.hack(oe),
        i.hack(se),
        i.hack(ae),
        d.hack(le),
        d.hack(ce),
        d.hack(ue),
        d.hack(de),
        d.hack(pe),
        d.hack(fe),
        d.hack(he),
        d.hack(me);
      var ge = new Map(),
        be = class {
          constructor(e, t, r = {}) {
            (this.data = e),
              (this.browsers = t),
              (this.options = r),
              ([this.add, this.remove] = this.preprocess(
                this.select(this.data),
              )),
              (this.transition = new o(this)),
              (this.processor = new s(this));
          }
          cleaner() {
            if (this.cleanerCache) return this.cleanerCache;
            if (!this.browsers.selected.length) return this;
            {
              let e = new l(this.browsers.data, []);
              this.cleanerCache = new be(this.data, e, this.options);
            }
            return this.cleanerCache;
          }
          select(e) {
            let t = { add: {}, remove: {} };
            for (let r in e) {
              let i = e[r],
                n = i.browsers.map((e) => {
                  let t = e.split(" ");
                  return { browser: `${t[0]} ${t[1]}`, note: t[2] };
                }),
                o = n
                  .filter((e) => e.note)
                  .map((e) => `${this.browsers.prefix(e.browser)} ${e.note}`);
              (o = p.uniq(o)),
                (n = n
                  .filter((e) => this.browsers.isSelected(e.browser))
                  .map((e) => {
                    let t = this.browsers.prefix(e.browser);
                    return e.note ? `${t} ${e.note}` : t;
                  })),
                (n = this.sort(p.uniq(n))),
                "no-2009" === this.options.flexbox &&
                  (n = n.filter((e) => !e.includes("2009")));
              let s = i.browsers.map((e) => this.browsers.prefix(e));
              i.mistakes && (s = s.concat(i.mistakes)),
                (s = s.concat(o)),
                (s = p.uniq(s)),
                n.length
                  ? ((t.add[r] = n),
                    n.length < s.length &&
                      (t.remove[r] = s.filter((e) => !n.includes(e))))
                  : (t.remove[r] = s);
            }
            return t;
          }
          sort(e) {
            return e.sort((e, t) => {
              let r = p.removeNote(e).length,
                i = p.removeNote(t).length;
              return r === i ? t.length - e.length : i - r;
            });
          }
          preprocess(e) {
            let t = { selectors: [], "@supports": new a(be, this) };
            for (let r in e.add) {
              let o = e.add[r];
              if ("@keyframes" === r || "@viewport" === r)
                t[r] = new u(r, o, this);
              else if ("@resolution" === r) t[r] = new n(r, o, this);
              else if (this.data[r].selector)
                t.selectors.push(c.load(r, o, this));
              else {
                let e = this.data[r].props;
                if (e) {
                  let i = d.load(r, o, this);
                  for (let r of e)
                    t[r] || (t[r] = { values: [] }), t[r].values.push(i);
                } else {
                  let e = (t[r] && t[r].values) || [];
                  (t[r] = i.load(r, o, this)), (t[r].values = e);
                }
              }
            }
            let r = { selectors: [] };
            for (let i in e.remove) {
              let o = e.remove[i];
              if (this.data[i].selector) {
                let e = c.load(i, o);
                for (let t of o) r.selectors.push(e.old(t));
              } else if ("@keyframes" === i || "@viewport" === i)
                for (let e of o) {
                  r[`@${e}${i.slice(1)}`] = { remove: !0 };
                }
              else if ("@resolution" === i) r[i] = new n(i, o, this);
              else {
                let e = this.data[i].props;
                if (e) {
                  let t = d.load(i, [], this);
                  for (let i of o) {
                    let n = t.old(i);
                    if (n)
                      for (let t of e)
                        r[t] || (r[t] = {}),
                          r[t].values || (r[t].values = []),
                          r[t].values.push(n);
                  }
                } else
                  for (let e of o) {
                    let n = this.decl(i).old(i, e);
                    if ("align-self" === i) {
                      let r = t[i] && t[i].prefixes;
                      if (r) {
                        if ("-webkit- 2009" === e && r.includes("-webkit-"))
                          continue;
                        if ("-webkit-" === e && r.includes("-webkit- 2009"))
                          continue;
                      }
                    }
                    for (let e of n) r[e] || (r[e] = {}), (r[e].remove = !0);
                  }
              }
            }
            return [t, r];
          }
          decl(e) {
            return ge.has(e) || ge.set(e, i.load(e)), ge.get(e);
          }
          unprefixed(e) {
            let t = this.normalize(r.unprefixed(e));
            return "flex-direction" === t && (t = "flex-flow"), t;
          }
          normalize(e) {
            return this.decl(e).normalize(e);
          }
          prefixed(e, t) {
            return (e = r.unprefixed(e)), this.decl(e).prefixed(e, t);
          }
          values(e, t) {
            let r = this[e],
              i = r["*"] && r["*"].values,
              n = r[t] && r[t].values;
            return i && n ? p.uniq(i.concat(n)) : i || n || [];
          }
          group(e) {
            let t = e.parent,
              r = t.index(e),
              { length: i } = t.nodes,
              n = this.unprefixed(e.prop),
              o = (e, o) => {
                for (r += e; r >= 0 && r < i; ) {
                  let i = t.nodes[r];
                  if ("decl" === i.type) {
                    if (
                      (-1 === e && i.prop === n && !l.withPrefix(i.value)) ||
                      this.unprefixed(i.prop) !== n
                    )
                      break;
                    if (!0 === o(i)) return !0;
                    if (1 === e && i.prop === n && !l.withPrefix(i.value))
                      break;
                  }
                  r += e;
                }
                return !1;
              };
            return { up: (e) => o(-1, e), down: (e) => o(1, e) };
          }
        };
      t.exports = be;
    }),
    Gl = p((e, t) => {
      m(),
        (t.exports = {
          "backface-visibility": {
            mistakes: ["-ms-", "-o-"],
            feature: "transforms3d",
            browsers: ["ios_saf 14.0-14.4", "ios_saf 14.5-14.7", "safari 14.1"],
          },
          "backdrop-filter": {
            feature: "css-backdrop-filter",
            browsers: ["ios_saf 14.0-14.4", "ios_saf 14.5-14.7", "safari 14.1"],
          },
          element: {
            props: [
              "background",
              "background-image",
              "border-image",
              "mask",
              "list-style",
              "list-style-image",
              "content",
              "mask-image",
            ],
            feature: "css-element-function",
            browsers: ["firefox 89"],
          },
          "user-select": {
            mistakes: ["-khtml-"],
            feature: "user-select-none",
            browsers: ["ios_saf 14.0-14.4", "ios_saf 14.5-14.7", "safari 14.1"],
          },
          "background-clip": {
            feature: "background-clip-text",
            browsers: [
              "and_chr 92",
              "and_uc 12.12",
              "chrome 91",
              "chrome 92",
              "edge 91",
              "ios_saf 14.0-14.4",
              "ios_saf 14.5-14.7",
              "safari 14.1",
              "samsung 14.0",
            ],
          },
          hyphens: {
            feature: "css-hyphens",
            browsers: ["ios_saf 14.0-14.4", "ios_saf 14.5-14.7", "safari 14.1"],
          },
          ":fullscreen": {
            selector: !0,
            feature: "fullscreen",
            browsers: ["and_chr 92", "and_uc 12.12", "safari 14.1"],
          },
          "::backdrop": {
            selector: !0,
            feature: "fullscreen",
            browsers: ["and_chr 92", "and_uc 12.12", "safari 14.1"],
          },
          "::file-selector-button": {
            selector: !0,
            feature: "fullscreen",
            browsers: ["safari 14.1"],
          },
          "tab-size": { feature: "css3-tabsize", browsers: ["firefox 89"] },
          fill: {
            props: [
              "width",
              "min-width",
              "max-width",
              "height",
              "min-height",
              "max-height",
              "inline-size",
              "min-inline-size",
              "max-inline-size",
              "block-size",
              "min-block-size",
              "max-block-size",
              "grid",
              "grid-template",
              "grid-template-rows",
              "grid-template-columns",
              "grid-auto-columns",
              "grid-auto-rows",
            ],
            feature: "intrinsic-width",
            browsers: [
              "and_chr 92",
              "chrome 91",
              "chrome 92",
              "edge 91",
              "samsung 14.0",
            ],
          },
          "fill-available": {
            props: [
              "width",
              "min-width",
              "max-width",
              "height",
              "min-height",
              "max-height",
              "inline-size",
              "min-inline-size",
              "max-inline-size",
              "block-size",
              "min-block-size",
              "max-block-size",
              "grid",
              "grid-template",
              "grid-template-rows",
              "grid-template-columns",
              "grid-auto-columns",
              "grid-auto-rows",
            ],
            feature: "intrinsic-width",
            browsers: [
              "and_chr 92",
              "chrome 91",
              "chrome 92",
              "edge 91",
              "samsung 14.0",
            ],
          },
          stretch: {
            props: [
              "width",
              "min-width",
              "max-width",
              "height",
              "min-height",
              "max-height",
              "inline-size",
              "min-inline-size",
              "max-inline-size",
              "block-size",
              "min-block-size",
              "max-block-size",
              "grid",
              "grid-template",
              "grid-template-rows",
              "grid-template-columns",
              "grid-auto-columns",
              "grid-auto-rows",
            ],
            feature: "intrinsic-width",
            browsers: ["firefox 89"],
          },
          "fit-content": {
            props: [
              "width",
              "min-width",
              "max-width",
              "height",
              "min-height",
              "max-height",
              "inline-size",
              "min-inline-size",
              "max-inline-size",
              "block-size",
              "min-block-size",
              "max-block-size",
              "grid",
              "grid-template",
              "grid-template-rows",
              "grid-template-columns",
              "grid-auto-columns",
              "grid-auto-rows",
            ],
            feature: "intrinsic-width",
            browsers: ["firefox 89"],
          },
          "text-decoration-style": {
            feature: "text-decoration",
            browsers: ["ios_saf 14.0-14.4", "ios_saf 14.5-14.7"],
          },
          "text-decoration-color": {
            feature: "text-decoration",
            browsers: ["ios_saf 14.0-14.4", "ios_saf 14.5-14.7"],
          },
          "text-decoration-line": {
            feature: "text-decoration",
            browsers: ["ios_saf 14.0-14.4", "ios_saf 14.5-14.7"],
          },
          "text-decoration": {
            feature: "text-decoration",
            browsers: ["ios_saf 14.0-14.4", "ios_saf 14.5-14.7"],
          },
          "text-decoration-skip": {
            feature: "text-decoration",
            browsers: ["ios_saf 14.0-14.4", "ios_saf 14.5-14.7"],
          },
          "text-decoration-skip-ink": {
            feature: "text-decoration",
            browsers: ["ios_saf 14.0-14.4", "ios_saf 14.5-14.7"],
          },
          "text-size-adjust": {
            feature: "text-size-adjust",
            browsers: ["ios_saf 14.0-14.4", "ios_saf 14.5-14.7"],
          },
          "mask-clip": {
            feature: "css-masks",
            browsers: [
              "and_chr 92",
              "and_uc 12.12",
              "chrome 91",
              "chrome 92",
              "edge 91",
              "ios_saf 14.0-14.4",
              "ios_saf 14.5-14.7",
              "safari 14.1",
              "samsung 14.0",
            ],
          },
          "mask-composite": {
            feature: "css-masks",
            browsers: [
              "and_chr 92",
              "and_uc 12.12",
              "chrome 91",
              "chrome 92",
              "edge 91",
              "ios_saf 14.0-14.4",
              "ios_saf 14.5-14.7",
              "safari 14.1",
              "samsung 14.0",
            ],
          },
          "mask-image": {
            feature: "css-masks",
            browsers: [
              "and_chr 92",
              "and_uc 12.12",
              "chrome 91",
              "chrome 92",
              "edge 91",
              "ios_saf 14.0-14.4",
              "ios_saf 14.5-14.7",
              "safari 14.1",
              "samsung 14.0",
            ],
          },
          "mask-origin": {
            feature: "css-masks",
            browsers: [
              "and_chr 92",
              "and_uc 12.12",
              "chrome 91",
              "chrome 92",
              "edge 91",
              "ios_saf 14.0-14.4",
              "ios_saf 14.5-14.7",
              "safari 14.1",
              "samsung 14.0",
            ],
          },
          "mask-repeat": {
            feature: "css-masks",
            browsers: [
              "and_chr 92",
              "and_uc 12.12",
              "chrome 91",
              "chrome 92",
              "edge 91",
              "ios_saf 14.0-14.4",
              "ios_saf 14.5-14.7",
              "safari 14.1",
              "samsung 14.0",
            ],
          },
          "mask-border-repeat": {
            feature: "css-masks",
            browsers: [
              "and_chr 92",
              "and_uc 12.12",
              "chrome 91",
              "chrome 92",
              "edge 91",
              "ios_saf 14.0-14.4",
              "ios_saf 14.5-14.7",
              "safari 14.1",
              "samsung 14.0",
            ],
          },
          "mask-border-source": {
            feature: "css-masks",
            browsers: [
              "and_chr 92",
              "and_uc 12.12",
              "chrome 91",
              "chrome 92",
              "edge 91",
              "ios_saf 14.0-14.4",
              "ios_saf 14.5-14.7",
              "safari 14.1",
              "samsung 14.0",
            ],
          },
          mask: {
            feature: "css-masks",
            browsers: [
              "and_chr 92",
              "and_uc 12.12",
              "chrome 91",
              "chrome 92",
              "edge 91",
              "ios_saf 14.0-14.4",
              "ios_saf 14.5-14.7",
              "safari 14.1",
              "samsung 14.0",
            ],
          },
          "mask-position": {
            feature: "css-masks",
            browsers: [
              "and_chr 92",
              "and_uc 12.12",
              "chrome 91",
              "chrome 92",
              "edge 91",
              "ios_saf 14.0-14.4",
              "ios_saf 14.5-14.7",
              "safari 14.1",
              "samsung 14.0",
            ],
          },
          "mask-size": {
            feature: "css-masks",
            browsers: [
              "and_chr 92",
              "and_uc 12.12",
              "chrome 91",
              "chrome 92",
              "edge 91",
              "ios_saf 14.0-14.4",
              "ios_saf 14.5-14.7",
              "safari 14.1",
              "samsung 14.0",
            ],
          },
          "mask-border": {
            feature: "css-masks",
            browsers: [
              "and_chr 92",
              "and_uc 12.12",
              "chrome 91",
              "chrome 92",
              "edge 91",
              "ios_saf 14.0-14.4",
              "ios_saf 14.5-14.7",
              "safari 14.1",
              "samsung 14.0",
            ],
          },
          "mask-border-outset": {
            feature: "css-masks",
            browsers: [
              "and_chr 92",
              "and_uc 12.12",
              "chrome 91",
              "chrome 92",
              "edge 91",
              "ios_saf 14.0-14.4",
              "ios_saf 14.5-14.7",
              "safari 14.1",
              "samsung 14.0",
            ],
          },
          "mask-border-width": {
            feature: "css-masks",
            browsers: [
              "and_chr 92",
              "and_uc 12.12",
              "chrome 91",
              "chrome 92",
              "edge 91",
              "ios_saf 14.0-14.4",
              "ios_saf 14.5-14.7",
              "safari 14.1",
              "samsung 14.0",
            ],
          },
          "mask-border-slice": {
            feature: "css-masks",
            browsers: [
              "and_chr 92",
              "and_uc 12.12",
              "chrome 91",
              "chrome 92",
              "edge 91",
              "ios_saf 14.0-14.4",
              "ios_saf 14.5-14.7",
              "safari 14.1",
              "samsung 14.0",
            ],
          },
          "clip-path": {
            feature: "css-clip-path",
            browsers: [
              "and_uc 12.12",
              "ios_saf 14.0-14.4",
              "ios_saf 14.5-14.7",
              "safari 14.1",
              "samsung 14.0",
            ],
          },
          "box-decoration-break": {
            feature: "css-boxdecorationbreak",
            browsers: [
              "and_chr 92",
              "chrome 91",
              "chrome 92",
              "edge 91",
              "ios_saf 14.0-14.4",
              "ios_saf 14.5-14.7",
              "safari 14.1",
              "samsung 14.0",
            ],
          },
          "@resolution": {
            feature: "css-media-resolution",
            browsers: ["ios_saf 14.0-14.4", "ios_saf 14.5-14.7", "safari 14.1"],
          },
          "border-inline-start": {
            feature: "css-logical-props",
            browsers: ["and_uc 12.12"],
          },
          "border-inline-end": {
            feature: "css-logical-props",
            browsers: ["and_uc 12.12"],
          },
          "margin-inline-start": {
            feature: "css-logical-props",
            browsers: ["and_uc 12.12"],
          },
          "margin-inline-end": {
            feature: "css-logical-props",
            browsers: ["and_uc 12.12"],
          },
          "padding-inline-start": {
            feature: "css-logical-props",
            browsers: ["and_uc 12.12"],
          },
          "padding-inline-end": {
            feature: "css-logical-props",
            browsers: ["and_uc 12.12"],
          },
          "border-block-start": {
            feature: "css-logical-props",
            browsers: ["and_uc 12.12"],
          },
          "border-block-end": {
            feature: "css-logical-props",
            browsers: ["and_uc 12.12"],
          },
          "margin-block-start": {
            feature: "css-logical-props",
            browsers: ["and_uc 12.12"],
          },
          "margin-block-end": {
            feature: "css-logical-props",
            browsers: ["and_uc 12.12"],
          },
          "padding-block-start": {
            feature: "css-logical-props",
            browsers: ["and_uc 12.12"],
          },
          "padding-block-end": {
            feature: "css-logical-props",
            browsers: ["and_uc 12.12"],
          },
          appearance: {
            feature: "css-appearance",
            browsers: [
              "and_uc 12.12",
              "ios_saf 14.0-14.4",
              "ios_saf 14.5-14.7",
              "safari 14.1",
              "samsung 14.0",
            ],
          },
          "image-set": {
            props: [
              "background",
              "background-image",
              "border-image",
              "cursor",
              "mask",
              "mask-image",
              "list-style",
              "list-style-image",
              "content",
            ],
            feature: "css-image-set",
            browsers: [
              "and_chr 92",
              "and_uc 12.12",
              "chrome 91",
              "chrome 92",
              "edge 91",
              "samsung 14.0",
            ],
          },
          "cross-fade": {
            props: [
              "background",
              "background-image",
              "border-image",
              "mask",
              "list-style",
              "list-style-image",
              "content",
              "mask-image",
            ],
            feature: "css-cross-fade",
            browsers: [
              "and_chr 92",
              "and_uc 12.12",
              "chrome 91",
              "chrome 92",
              "edge 91",
              "samsung 14.0",
            ],
          },
          "text-emphasis": {
            feature: "text-emphasis",
            browsers: [
              "and_chr 92",
              "and_uc 12.12",
              "chrome 91",
              "chrome 92",
              "edge 91",
              "samsung 14.0",
            ],
          },
          "text-emphasis-position": {
            feature: "text-emphasis",
            browsers: [
              "and_chr 92",
              "and_uc 12.12",
              "chrome 91",
              "chrome 92",
              "edge 91",
              "samsung 14.0",
            ],
          },
          "text-emphasis-style": {
            feature: "text-emphasis",
            browsers: [
              "and_chr 92",
              "and_uc 12.12",
              "chrome 91",
              "chrome 92",
              "edge 91",
              "samsung 14.0",
            ],
          },
          "text-emphasis-color": {
            feature: "text-emphasis",
            browsers: [
              "and_chr 92",
              "and_uc 12.12",
              "chrome 91",
              "chrome 92",
              "edge 91",
              "samsung 14.0",
            ],
          },
          ":any-link": {
            selector: !0,
            feature: "css-any-link",
            browsers: ["and_uc 12.12"],
          },
          isolate: {
            props: ["unicode-bidi"],
            feature: "css-unicode-bidi",
            browsers: ["ios_saf 14.0-14.4", "ios_saf 14.5-14.7", "safari 14.1"],
          },
          "color-adjust": {
            feature: "css-color-adjust",
            browsers: ["chrome 91", "chrome 92", "edge 91", "safari 14.1"],
          },
        });
    }),
    Yl = p((e, t) => {
      m(), (t.exports = {});
    }),
    Hl = p((t, r) => {
      m();
      var i = ba(),
        { agents: n } = (xa(), ya),
        o = ka(),
        s = Ca(),
        a = ql(),
        l = Gl(),
        c = Yl(),
        u = { browsers: n, prefixes: l },
        d =
          "\n  Replace Autoprefixer `browsers` option to Browserslist config.\n  Use `browserslist` key in `package.json` or `.browserslistrc` file.\n\n  Using `browsers` option can cause errors. Browserslist config can\n  be used for Babel, Autoprefixer, postcss-normalize and other tools.\n\n  If you really need to use option, rename it to `overrideBrowserslist`.\n\n  Learn more at:\n  https://github.com/browserslist/browserslist#readme\n  https://twitter.com/browserslist\n\n";
      var p = new Map();
      function f(...t) {
        let r;
        if (
          (1 === t.length &&
          (function (e) {
            return "[object Object]" === Object.prototype.toString.apply(e);
          })(t[0])
            ? ((r = t[0]), (t = void 0))
            : 0 === t.length || (1 === t.length && !t[0])
              ? (t = void 0)
              : t.length <= 2 && (Array.isArray(t[0]) || !t[0])
                ? ((r = t[1]), (t = t[0]))
                : "object" == typeof t[t.length - 1] && (r = t.pop()),
          r || (r = {}),
          r.browser)
        )
          throw new Error(
            "Change `browser` option to `overrideBrowserslist` in Autoprefixer",
          );
        if (r.browserslist)
          throw new Error(
            "Change `browserslist` option to `overrideBrowserslist` in Autoprefixer",
          );
        r.overrideBrowserslist
          ? (t = r.overrideBrowserslist)
          : r.browsers &&
            ("undefined" != typeof console &&
              console.warn &&
              (o.red
                ? console.warn(
                    o.red(
                      d.replace(/`[^`]+`/g, (e) => o.yellow(e.slice(1, -1))),
                    ),
                  )
                : console.warn(d)),
            (t = r.browsers));
        let i = {
          ignoreUnknownVersions: r.ignoreUnknownVersions,
          stats: r.stats,
          env: r.env,
        };
        function n(e) {
          let n = u,
            o = new s(n.browsers, t, e, i),
            l = o.selected.join(", ") + JSON.stringify(r);
          return p.has(l) || p.set(l, new a(n.prefixes, o, r)), p.get(l);
        }
        return {
          postcssPlugin: "autoprefixer",
          prepare(e) {
            let t = n({ from: e.opts.from, env: r.env });
            return {
              OnceExit(i) {
                (function (e, t) {
                  0 !== t.browsers.selected.length &&
                    (t.add.selectors.length > 0 ||
                      Object.keys(t.add).length > 2 ||
                      e.warn(
                        "Autoprefixer target browsers do not need any prefixes.You do not need Autoprefixer anymore.\nCheck your Browserslist config to be sure that your targets are set up correctly.\n\n  Learn more at:\n  https://github.com/postcss/autoprefixer#readme\n  https://github.com/browserslist/browserslist#readme\n\n",
                      ));
                })(e, t),
                  !1 !== r.remove && t.processor.remove(i, e),
                  !1 !== r.add && t.processor.add(i, e);
              },
            };
          },
          info: (t) => (((t = t || {}).from = t.from || e.cwd()), c(n(t))),
          options: r,
          browsers: t,
        };
      }
      (r.exports = f),
        (f.postcss = !0),
        (f.data = u),
        (f.defaults = i.defaults),
        (f.info = () => f().info());
    }),
    Ql = {};
  f(Ql, { default: () => Jl });
  var Jl,
    Xl = d(() => {
      m(), (Jl = []);
    }),
    Kl = {};
  f(Kl, { default: () => ec });
  var Zl,
    ec,
    tc = d(() => {
      m(), oe(), (Zl = h(M())), (ec = ne(Zl.default.theme));
    }),
    rc = {};
  f(rc, { default: () => nc });
  var ic,
    nc,
    oc = d(() => {
      m(), oe(), (ic = h(M())), (nc = ne(ic.default));
    });
  function sc(e, t) {
    return { handler: e, config: t };
  }
  var ac,
    lc = d(() => {
      m(),
        (sc.withOptions = function (e, t = () => ({})) {
          let r = function (r) {
            return { __options: r, handler: e(r), config: t(r) };
          };
          return (
            (r.__isOptionsFunction = !0),
            (r.__pluginFunction = e),
            (r.__configFunction = t),
            r
          );
        }),
        (ac = sc);
    }),
    cc = {};
  f(cc, { default: () => uc });
  var uc,
    dc = d(() => {
      m(), lc(), (uc = ac);
    });
  m();
  var pc = xc(ga()),
    fc = xc(_i()),
    hc = xc(Hl()),
    mc = xc((Xl(), Ql)),
    gc = xc((tc(), Kl)),
    bc = xc((oc(), rc)),
    yc = xc((J(), Y)),
    wc = xc((dc(), cc)),
    vc = xc((Ir(), Dr));
  function xc(e) {
    return e && e.__esModule ? e : { default: e };
  }
  console.warn(
    "cdn.tailwindcss.com should not be used in production. To use Tailwind CSS in production, install it as a PostCSS plugin or use the Tailwind CLI: https://tailwindcss.com/docs/installation",
  );
  var kc,
    Sc,
    Cc = "tailwind",
    Ac = "text/tailwindcss",
    _c = "/template.html",
    Oc = !0,
    Ec = 0,
    Tc = new Set(),
    Pc = "",
    Dc = (e = !1) => ({
      get: (t, r) =>
        (e && "config" !== r) || "object" != typeof t[r] || null === t[r]
          ? t[r]
          : new Proxy(t[r], Dc()),
      set: (t, r, i) => ((t[r] = i), (!e || "config" === r) && Ic(!0), !0),
    });
  function jc(e) {
    Sc.observe(e, {
      attributes: !0,
      attributeFilter: ["type"],
      characterData: !0,
      subtree: !0,
      childList: !0,
    });
  }
  async function Ic(e = !1) {
    e && (Ec++, Tc.clear());
    let t = "";
    for (let e of document.querySelectorAll(`style[type="${Ac}"]`))
      t += e.textContent;
    let r = new Set();
    for (let e of document.querySelectorAll("[class]"))
      for (let t of e.classList) Tc.has(t) || r.add(t);
    if (
      document.body &&
      (Oc || r.size > 0 || t !== Pc || !kc || !kc.isConnected)
    ) {
      for (let e of r) Tc.add(e);
      (Oc = !1), (Pc = t), (self[_c] = Array.from(r).join(" "));
      let e = (0, fc.default)([
        (0, pc.default)({
          ...window[Cc].config,
          _hash: Ec,
          content: [_c],
          plugins: [
            ...mc.default,
            ...(Array.isArray(window[Cc].config.plugins)
              ? window[Cc].config.plugins
              : []),
          ],
        }),
        (0, hc.default)({ remove: !1 }),
      ]).process(
        `@tailwind base;@tailwind components;@tailwind utilities;${t}`,
      ).css;
      (!kc || !kc.isConnected) &&
        ((kc = document.createElement("style")), document.head.append(kc)),
        (kc.textContent = e);
    }
  }
  (window[Cc] = new Proxy(
    {
      config: {},
      defaultTheme: gc.default,
      defaultConfig: bc.default,
      colors: yc.default,
      plugin: wc.default,
      resolveConfig: vc.default,
    },
    Dc(!0),
  )),
    new MutationObserver(async (e) => {
      let t = !1;
      if (!Sc) {
        Sc = new MutationObserver(async () => await Ic(!0));
        for (let e of document.querySelectorAll(`style[type="${Ac}"]`)) jc(e);
      }
      for (let r of e)
        for (let e of r.addedNodes)
          1 === e.nodeType &&
            "STYLE" === e.tagName &&
            e.getAttribute("type") === Ac &&
            (jc(e), (t = !0));
      await Ic(t);
    }).observe(document.documentElement, {
      attributes: !0,
      attributeFilter: ["class"],
      childList: !0,
      subtree: !0,
    });
})();
/*! https://mths.be/cssesc v3.0.0 by @mathias */
