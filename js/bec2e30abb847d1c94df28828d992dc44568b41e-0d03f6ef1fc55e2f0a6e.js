(window.webpackJsonp = window.webpackJsonp || []).push([
    [2], {
        "9eSz": function(e, t, a) {
            "use strict";
            var r = a("TqRt");
            t.__esModule = !0, t.default = void 0;
            var i, n = r(a("PJYZ")),
                s = r(a("VbXa")),
                o = r(a("8OQS")),
                l = r(a("pVnL")),
                d = r(a("q1tI")),
                c = r(a("17x9")),
                f = function(e) {
                    var t = (0, l.default)({}, e),
                        a = t.resolutions,
                        r = t.sizes,
                        i = t.critical;
                    return a && (t.fixed = a, delete t.resolutions), r && (t.fluid = r, delete t.sizes), i && (t.loading = "eager"), t.fluid && (t.fluid = C([].concat(t.fluid))), t.fixed && (t.fixed = C([].concat(t.fixed))), t
                },
                u = function(e) {
                    var t = e.media;
                    return !!t && b && !!window.matchMedia(t).matches
                },
                p = function(e) {
                    var t = e.fluid,
                        a = e.fixed,
                        r = m(t || a || []);
                    return r && r.src
                },
                m = function(e) {
                    if (b && function(e) {
                            return !!e && Array.isArray(e) && e.some((function(e) {
                                return void 0 !== e.media
                            }))
                        }(e)) {
                        var t = e.findIndex(u);
                        if (-1 !== t) return e[t];
                        var a = e.findIndex((function(e) {
                            return void 0 === e.media
                        }));
                        if (-1 !== a) return e[a]
                    }
                    return e[0]
                },
                h = Object.create({}),
                g = function(e) {
                    var t = f(e),
                        a = p(t);
                    return h[a] || !1
                },
                E = "undefined" != typeof HTMLImageElement && "loading" in HTMLImageElement.prototype,
                b = "undefined" != typeof window,
                H = b && window.IntersectionObserver,
                v = new WeakMap;

            function y(e) {
                return e.map((function(e) {
                    var t = e.src,
                        a = e.srcSet,
                        r = e.srcSetWebp,
                        i = e.media,
                        n = e.sizes;
                    return d.default.createElement(d.default.Fragment, {
                        key: t
                    }, r && d.default.createElement("source", {
                        type: "image/webp",
                        media: i,
                        srcSet: r,
                        sizes: n
                    }), a && d.default.createElement("source", {
                        media: i,
                        srcSet: a,
                        sizes: n
                    }))
                }))
            }

            function C(e) {
                var t = [],
                    a = [];
                return e.forEach((function(e) {
                    return (e.media ? t : a).push(e)
                })), [].concat(t, a)
            }

            function S(e) {
                return e.map((function(e) {
                    var t = e.src,
                        a = e.media,
                        r = e.tracedSVG;
                    return d.default.createElement("source", {
                        key: t,
                        media: a,
                        srcSet: r
                    })
                }))
            }

            function L(e) {
                return e.map((function(e) {
                    var t = e.src,
                        a = e.media,
                        r = e.base64;
                    return d.default.createElement("source", {
                        key: t,
                        media: a,
                        srcSet: r
                    })
                }))
            }

            function w(e, t) {
                var a = e.srcSet,
                    r = e.srcSetWebp,
                    i = e.media,
                    n = e.sizes;
                return "<source " + (t ? "type='image/webp' " : "") + (i ? 'media="' + i + '" ' : "") + 'srcset="' + (t ? r : a) + '" ' + (n ? 'sizes="' + n + '" ' : "") + "/>"
            }
            var V = function(e) {
                    var t = e.src ? 'src="' + e.src + '" ' : 'src="" ',
                        a = e.sizes ? 'sizes="' + e.sizes + '" ' : "",
                        r = e.srcSet ? 'srcset="' + e.srcSet + '" ' : "",
                        i = e.title ? 'title="' + e.title + '" ' : "",
                        n = e.alt ? 'alt="' + e.alt + '" ' : 'alt="" ',
                        s = e.width ? 'width="' + e.width + '" ' : "",
                        o = e.height ? 'height="' + e.height + '" ' : "",
                        l = e.crossOrigin ? 'crossorigin="' + e.crossOrigin + '" ' : "",
                        d = e.loading ? 'loading="' + e.loading + '" ' : "",
                        c = e.draggable ? 'draggable="' + e.draggable + '" ' : "";
                    return "<picture>" + e.imageVariants.map((function(e) {
                        return (e.srcSetWebp ? w(e, !0) : "") + w(e)
                    })).join("") + "<img " + d + s + o + a + r + t + n + i + l + c + 'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'
                },
                R = d.default.forwardRef((function(e, t) {
                    var a = e.src,
                        r = e.imageVariants,
                        i = e.generateSources,
                        n = e.spreadProps,
                        s = e.ariaHidden,
                        o = d.default.createElement(F, (0, l.default)({
                            ref: t,
                            src: a
                        }, n, {
                            ariaHidden: s
                        }));
                    return r.length > 1 ? d.default.createElement("picture", null, i(r), o) : o
                })),
                F = d.default.forwardRef((function(e, t) {
                    var a = e.sizes,
                        r = e.srcSet,
                        i = e.src,
                        n = e.style,
                        s = e.onLoad,
                        c = e.onError,
                        f = e.loading,
                        u = e.draggable,
                        p = e.ariaHidden,
                        m = (0, o.default)(e, ["sizes", "srcSet", "src", "style", "onLoad", "onError", "loading", "draggable", "ariaHidden"]);
                    return d.default.createElement("img", (0, l.default)({
                        "aria-hidden": p,
                        sizes: a,
                        srcSet: r,
                        src: i
                    }, m, {
                        onLoad: s,
                        onError: c,
                        ref: t,
                        loading: f,
                        draggable: u,
                        style: (0, l.default)({
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "center"
                        }, n)
                    }))
                }));
            F.propTypes = {
                style: c.default.object,
                onError: c.default.func,
                onLoad: c.default.func
            };
            var I = function(e) {
                function t(t) {
                    var a;
                    (a = e.call(this, t) || this).seenBefore = b && g(t), a.isCritical = "eager" === t.loading || t.critical, a.addNoScript = !(a.isCritical && !t.fadeIn), a.useIOSupport = !E && H && !a.isCritical && !a.seenBefore;
                    var r = a.isCritical || b && (E || !a.useIOSupport);
                    return a.state = {
                        isVisible: r,
                        imgLoaded: !1,
                        imgCached: !1,
                        fadeIn: !a.seenBefore && t.fadeIn,
                        isHydrated: !1
                    }, a.imageRef = d.default.createRef(), a.placeholderRef = t.placeholderRef || d.default.createRef(), a.handleImageLoaded = a.handleImageLoaded.bind((0, n.default)(a)), a.handleRef = a.handleRef.bind((0, n.default)(a)), a
                }(0, s.default)(t, e);
                var a = t.prototype;
                return a.componentDidMount = function() {
                    if (this.setState({
                            isHydrated: b
                        }), this.state.isVisible && "function" == typeof this.props.onStartLoad && this.props.onStartLoad({
                            wasCached: g(this.props)
                        }), this.isCritical) {
                        var e = this.imageRef.current;
                        e && e.complete && this.handleImageLoaded()
                    }
                }, a.componentWillUnmount = function() {
                    this.cleanUpListeners && this.cleanUpListeners()
                }, a.handleRef = function(e) {
                    var t = this;
                    this.useIOSupport && e && (this.cleanUpListeners = function(e, t) {
                        var a = (void 0 === i && "undefined" != typeof window && window.IntersectionObserver && (i = new window.IntersectionObserver((function(e) {
                            e.forEach((function(e) {
                                if (v.has(e.target)) {
                                    var t = v.get(e.target);
                                    (e.isIntersecting || e.intersectionRatio > 0) && (i.unobserve(e.target), v.delete(e.target), t())
                                }
                            }))
                        }), {
                            rootMargin: "200px"
                        })), i);
                        return a && (a.observe(e), v.set(e, t)),
                            function() {
                                a.unobserve(e), v.delete(e)
                            }
                    }(e, (function() {
                        var e = g(t.props);
                        t.state.isVisible || "function" != typeof t.props.onStartLoad || t.props.onStartLoad({
                            wasCached: e
                        }), t.setState({
                            isVisible: !0
                        }, (function() {
                            t.setState({
                                imgLoaded: e,
                                imgCached: !(!t.imageRef.current || !t.imageRef.current.currentSrc)
                            })
                        }))
                    })))
                }, a.handleImageLoaded = function() {
                    var e, t, a;
                    e = this.props, t = f(e), (a = p(t)) && (h[a] = !0), this.setState({
                        imgLoaded: !0
                    }), this.props.onLoad && this.props.onLoad()
                }, a.render = function() {
                    var e = f(this.props),
                        t = e.title,
                        a = e.alt,
                        r = e.className,
                        i = e.style,
                        n = void 0 === i ? {} : i,
                        s = e.imgStyle,
                        o = void 0 === s ? {} : s,
                        c = e.placeholderStyle,
                        u = void 0 === c ? {} : c,
                        p = e.placeholderClassName,
                        h = e.fluid,
                        g = e.fixed,
                        E = e.backgroundColor,
                        b = e.durationFadeIn,
                        H = e.Tag,
                        v = e.itemProp,
                        C = e.loading,
                        w = e.draggable,
                        I = h || g;
                    if (!I) return null;
                    var _ = !1 === this.state.fadeIn || this.state.imgLoaded,
                        O = !0 === this.state.fadeIn && !this.state.imgCached,
                        M = (0, l.default)({
                            opacity: _ ? 1 : 0,
                            transition: O ? "opacity " + b + "ms" : "none"
                        }, o),
                        x = "boolean" == typeof E ? "lightgray" : E,
                        z = {
                            transitionDelay: b + "ms"
                        },
                        T = (0, l.default)({
                            opacity: this.state.imgLoaded ? 0 : 1
                        }, O && z, o, u),
                        N = {
                            title: t,
                            alt: this.state.isVisible ? "" : a,
                            style: T,
                            className: p,
                            itemProp: v
                        },
                        A = this.state.isHydrated ? m(I) : I[0];
                    if (h) return d.default.createElement(H, {
                        className: (r || "") + " gatsby-image-wrapper",
                        style: (0, l.default)({
                            position: "relative",
                            overflow: "hidden",
                            maxWidth: A.maxWidth ? A.maxWidth + "px" : null,
                            maxHeight: A.maxHeight ? A.maxHeight + "px" : null
                        }, n),
                        ref: this.handleRef,
                        key: "fluid-" + JSON.stringify(A.srcSet)
                    }, d.default.createElement(H, {
                        "aria-hidden": !0,
                        style: {
                            width: "100%",
                            paddingBottom: 100 / A.aspectRatio + "%"
                        }
                    }), x && d.default.createElement(H, {
                        "aria-hidden": !0,
                        title: t,
                        style: (0, l.default)({
                            backgroundColor: x,
                            position: "absolute",
                            top: 0,
                            bottom: 0,
                            opacity: this.state.imgLoaded ? 0 : 1,
                            right: 0,
                            left: 0
                        }, O && z)
                    }), A.base64 && d.default.createElement(R, {
                        ariaHidden: !0,
                        ref: this.placeholderRef,
                        src: A.base64,
                        spreadProps: N,
                        imageVariants: I,
                        generateSources: L
                    }), A.tracedSVG && d.default.createElement(R, {
                        ariaHidden: !0,
                        ref: this.placeholderRef,
                        src: A.tracedSVG,
                        spreadProps: N,
                        imageVariants: I,
                        generateSources: S
                    }), this.state.isVisible && d.default.createElement("picture", null, y(I), d.default.createElement(F, {
                        alt: a,
                        title: t,
                        sizes: A.sizes,
                        src: A.src,
                        crossOrigin: this.props.crossOrigin,
                        srcSet: A.srcSet,
                        style: M,
                        ref: this.imageRef,
                        onLoad: this.handleImageLoaded,
                        onError: this.props.onError,
                        itemProp: v,
                        loading: C,
                        draggable: w
                    })), this.addNoScript && d.default.createElement("noscript", {
                        dangerouslySetInnerHTML: {
                            __html: V((0, l.default)({
                                alt: a,
                                title: t,
                                loading: C
                            }, A, {
                                imageVariants: I
                            }))
                        }
                    }));
                    if (g) {
                        var Z = (0, l.default)({
                            position: "relative",
                            overflow: "hidden",
                            display: "inline-block",
                            width: A.width,
                            height: A.height
                        }, n);
                        return "inherit" === n.display && delete Z.display, d.default.createElement(H, {
                            className: (r || "") + " gatsby-image-wrapper",
                            style: Z,
                            ref: this.handleRef,
                            key: "fixed-" + JSON.stringify(A.srcSet)
                        }, x && d.default.createElement(H, {
                            "aria-hidden": !0,
                            title: t,
                            style: (0, l.default)({
                                backgroundColor: x,
                                width: A.width,
                                opacity: this.state.imgLoaded ? 0 : 1,
                                height: A.height
                            }, O && z)
                        }), A.base64 && d.default.createElement(R, {
                            ariaHidden: !0,
                            ref: this.placeholderRef,
                            src: A.base64,
                            spreadProps: N,
                            imageVariants: I,
                            generateSources: L
                        }), A.tracedSVG && d.default.createElement(R, {
                            ariaHidden: !0,
                            ref: this.placeholderRef,
                            src: A.tracedSVG,
                            spreadProps: N,
                            imageVariants: I,
                            generateSources: S
                        }), this.state.isVisible && d.default.createElement("picture", null, y(I), d.default.createElement(F, {
                            alt: a,
                            title: t,
                            width: A.width,
                            height: A.height,
                            sizes: A.sizes,
                            src: A.src,
                            crossOrigin: this.props.crossOrigin,
                            srcSet: A.srcSet,
                            style: M,
                            ref: this.imageRef,
                            onLoad: this.handleImageLoaded,
                            onError: this.props.onError,
                            itemProp: v,
                            loading: C,
                            draggable: w
                        })), this.addNoScript && d.default.createElement("noscript", {
                            dangerouslySetInnerHTML: {
                                __html: V((0, l.default)({
                                    alt: a,
                                    title: t,
                                    loading: C
                                }, A, {
                                    imageVariants: I
                                }))
                            }
                        }))
                    }
                    return null
                }, t
            }(d.default.Component);
            I.defaultProps = {
                fadeIn: !0,
                durationFadeIn: 500,
                alt: "",
                Tag: "div",
                loading: "lazy"
            };
            var _ = c.default.shape({
                    width: c.default.number.isRequired,
                    height: c.default.number.isRequired,
                    src: c.default.string.isRequired,
                    srcSet: c.default.string.isRequired,
                    base64: c.default.string,
                    tracedSVG: c.default.string,
                    srcWebp: c.default.string,
                    srcSetWebp: c.default.string,
                    media: c.default.string
                }),
                O = c.default.shape({
                    aspectRatio: c.default.number.isRequired,
                    src: c.default.string.isRequired,
                    srcSet: c.default.string.isRequired,
                    sizes: c.default.string.isRequired,
                    base64: c.default.string,
                    tracedSVG: c.default.string,
                    srcWebp: c.default.string,
                    srcSetWebp: c.default.string,
                    media: c.default.string,
                    maxWidth: c.default.number,
                    maxHeight: c.default.number
                });

            function M(e) {
                return function(t, a, r) {
                    var i;
                    if (!t.fixed && !t.fluid) throw new Error("The prop `fluid` or `fixed` is marked as required in `" + r + "`, but their values are both `undefined`.");
                    c.default.checkPropTypes(((i = {})[a] = e, i), t, "prop", r)
                }
            }
            I.propTypes = {
                resolutions: _,
                sizes: O,
                fixed: M(c.default.oneOfType([_, c.default.arrayOf(_)])),
                fluid: M(c.default.oneOfType([O, c.default.arrayOf(O)])),
                fadeIn: c.default.bool,
                durationFadeIn: c.default.number,
                title: c.default.string,
                alt: c.default.string,
                className: c.default.oneOfType([c.default.string, c.default.object]),
                critical: c.default.bool,
                crossOrigin: c.default.oneOfType([c.default.string, c.default.bool]),
                style: c.default.object,
                imgStyle: c.default.object,
                placeholderStyle: c.default.object,
                placeholderClassName: c.default.string,
                backgroundColor: c.default.oneOfType([c.default.string, c.default.bool]),
                onLoad: c.default.func,
                onError: c.default.func,
                onStartLoad: c.default.func,
                Tag: c.default.string,
                itemProp: c.default.string,
                loading: c.default.oneOf(["auto", "lazy", "eager"]),
                draggable: c.default.bool
            };
            var x = I;
            t.default = x
        },
        I4A6: function(e, t, a) {
            "use strict";
            var r = a("q1tI"),
                i = a.n(r),
                n = a("Wbzz");
            a("9eSz"), t.a = function() {
                return i.a.createElement(n.Link, {
                    to: "/",
                    className: "brand"
                }, i.a.createElement("img", {
                    width: "86",
                    height: "17",
                    src: "images/realvjy-white.png"
                }))
            }
        },
        N8DM: function(e, t, a) {
            "use strict";
            var r = a("TqRt");
            t.__esModule = !0;
            var i = r(a("QL1J"));
            t.ThemeToggler = i.default
        },
        QL1J: function(e, t, a) {
            "use strict";
            var r = a("TqRt");
            t.__esModule = !0, t.default = void 0;
            var i = r(a("PJYZ")),
                n = r(a("VbXa")),
                s = r(a("lSNA")),
                o = r(a("q1tI")),
                l = r(a("17x9")),
                d = function(e) {
                    function t() {
                        for (var t, a = arguments.length, r = new Array(a), n = 0; n < a; n++) r[n] = arguments[n];
                        return t = e.call.apply(e, [this].concat(r)) || this, (0, s.default)((0, i.default)(t), "state", {
                            theme: "undefined" != typeof window ? window.__theme : null
                        }), t
                    }(0, n.default)(t, e);
                    var a = t.prototype;
                    return a.componentDidMount = function() {
                        var e = this;
                        window.__onThemeChange = function() {
                            e.setState({
                                theme: window.__theme
                            })
                        }
                    }, a.toggleTheme = function(e) {
                        window.__setPreferredTheme(e)
                    }, a.render = function() {
                        return o.default.createElement(this.props.children, {
                            theme: this.state.theme,
                            toggleTheme: this.toggleTheme
                        })
                    }, t
                }(o.default.Component);
            d.propTypes = {
                children: l.default.func.isRequired
            };
            var c = d;
            t.default = c
        },
        "W/9C": function(e, t, a) {
            "use strict";
            var r = a("q1tI"),
                i = a.n(r);
            a("Wbzz"), a("9eSz"), t.a = function() {
                return i.a.createElement("section", {
                    className: "footer"
                }, i.a.createElement("div", {
                    className: "container"
                }, i.a.createElement("div", {
                    className: "footer-wrap"
                }, i.a.createElement("div", {
                    className: "credit"
                }, i.a.createElement("h4", null, "© vijay verma, ", (new Date).getFullYear(), " ", i.a.createElement("a", {
                    href: "/version/v3"
                }, "..."))), i.a.createElement("div", {
                    className: "quote"
                }, i.a.createElement("h4", null, "stay hungry, stay foolish")))))
            }
        },
        lSNA: function(e, t) {
            e.exports = function(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }, e.exports.__esModule = !0, e.exports.default = e.exports
        }
    }
]);