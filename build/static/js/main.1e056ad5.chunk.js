(this.webpackJsonpdolio = this.webpackJsonpdolio || []).push([
    [0],
    {
        25: function (e, s, t) {},
        34: function (e, s, t) {
            "use strict";
            t.r(s);
            var a = t(0),
                c = t(2),
                i = t(18),
                n = t.n(i),
                l = t(1),
                r = (t(25), t(7)),
                d = t(3),
                o = t(4),
                j = t(6),
                b = t(5),
                m = [
                    { id: 1, tolink: "/", namelink: "Home 01" },
                    { id: 2, tolink: "/home-02", namelink: "Home 02" },
                    { id: 3, tolink: "/home-03", namelink: "Home 03" },
                    { id: 4, tolink: "/home-04", namelink: "Home 04" },
                ],
                h = [
                    { id: 1, tomenu: "#about", namemenu: "About" },
                    { id: 2, tomenu: "#services", namemenu: "services" },
                    { id: 3, tomenu: "#portfolio", namemenu: "Portfolio" },
                    { id: 4, tomenu: "#testimonial", namemenu: "Testimonial" },
                    { id: 5, tomenu: "#resume", namemenu: "Resume" },
                ],
                x = [
                    { id: 1, toblog: "/blog", nameblog: "Blog" },
                    { id: 2, toblog: "/blog-single", nameblog: "Blog Single" },
                ],
                O = (function (e) {
                    Object(j.a)(t, e);
                    var s = Object(b.a)(t);
                    function t(e) {
                        var a;
                        return Object(d.a)(this, t), ((a = s.call(this, e)).state = {}), a;
                    }
                    return (
                        Object(o.a)(t, [
                            {
                                key: "render",
                                value: function () {
                                    return Object(a.jsx)("header", {
                                        id: "header",
                                        className: "header header-style1",
                                        children: Object(a.jsx)("div", {
                                            className: "container",
                                            children: Object(a.jsxs)("div", {
                                                className: "flex-header d-flex justify-content-between align-items-center",
                                                children: [
                                                    Object(a.jsxs)("div", {
                                                        className: "socials-list-hd s1 hv1",
                                                        children: [
                                                            Object(a.jsx)(l.b, { to: "#", children: Object(a.jsx)("i", { className: "fa fa-facebook", "aria-hidden": "true" }) }),
                                                            Object(a.jsx)(l.b, { to: "#", children: Object(a.jsx)("i", { className: "fa fa-twitter", "aria-hidden": "true" }) }),
                                                            Object(a.jsx)(l.b, { to: "#", children: Object(a.jsx)("i", { className: "fa fa-instagram", "aria-hidden": "true" }) }),
                                                        ],
                                                    }),
                                                    Object(a.jsxs)("div", {
                                                        className: "content-menu d-lg-flex",
                                                        children: [
                                                            Object(a.jsx)("div", {
                                                                className: "nav-wrap",
                                                                children: Object(a.jsx)("nav", {
                                                                    id: "mainnav",
                                                                    className: "mainnav",
                                                                    children: Object(a.jsxs)("ul", {
                                                                        className: "menu ace-responsive-menu",
                                                                        "data-menu-style": "horizontal",
                                                                        children: [
                                                                            Object(a.jsxs)("li", {
                                                                                children: [
                                                                                    Object(a.jsx)(l.b, { to: "/", className: "active", children: "Home" }),
                                                                                    Object(a.jsx)("ul", {
                                                                                        className: "sub-menu",
                                                                                        children: m.map(function (e) {
                                                                                            return Object(a.jsx)(
                                                                                                "li",
                                                                                                {
                                                                                                    children: Object(a.jsx)(l.b, {
                                                                                                        to: e.tolink,
                                                                                                        onClick: function () {
                                                                                                            window.location.href = e.tolink;
                                                                                                        },
                                                                                                        className: 1 === e.id ? "active" : "",
                                                                                                        children: e.namelink,
                                                                                                    }),
                                                                                                },
                                                                                                e.id
                                                                                            );
                                                                                        }),
                                                                                    }),
                                                                                ],
                                                                            }),
                                                                            h.map(function (e) {
                                                                                return Object(a.jsx)("li", { children: Object(a.jsx)(l.b, { to: e.tomenu, className: "click-model", children: e.namemenu }) }, e.id);
                                                                            }),
                                                                            Object(a.jsxs)("li", {
                                                                                children: [
                                                                                    Object(a.jsx)(l.b, { to: "#", children: "Blog" }),
                                                                                    Object(a.jsx)("ul", {
                                                                                        className: "sub-menu",
                                                                                        children: x.map(function (e) {
                                                                                            return Object(a.jsx)(
                                                                                                "li",
                                                                                                {
                                                                                                    children: Object(a.jsx)(l.b, {
                                                                                                        to: e.toblog,
                                                                                                        onClick: function () {
                                                                                                            window.location.href = e.toblog;
                                                                                                        },
                                                                                                        children: e.nameblog,
                                                                                                    }),
                                                                                                },
                                                                                                e.id
                                                                                            );
                                                                                        }),
                                                                                    }),
                                                                                ],
                                                                            }),
                                                                        ],
                                                                    }),
                                                                }),
                                                            }),
                                                            Object(a.jsx)("div", {
                                                                className: "hire-me-s1 btn-general btn-hv-common d-lg-flex align-items-center",
                                                                children: Object(a.jsx)(l.b, { to: "#", className: "btn-inner border-corner2 lt-sp08 text-white", children: "Hire Me" }),
                                                            }),
                                                        ],
                                                    }),
                                                    Object(a.jsxs)("div", {
                                                        dir: "rtl",
                                                        className: "btn-menu mobile-header__menu-button",
                                                        children: [
                                                            Object(a.jsx)("div", { className: "line line-1" }),
                                                            Object(a.jsx)("div", { className: "line line-2" }),
                                                            Object(a.jsx)("div", { className: "line line-3" }),
                                                            Object(a.jsx)("div", { className: "line line-4" }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        }),
                                    });
                                },
                            },
                        ]),
                        t
                    );
                })(c.Component),
                u = (function (e) {
                    Object(j.a)(t, e);
                    var s = Object(b.a)(t);
                    function t() {
                        return Object(d.a)(this, t), s.apply(this, arguments);
                    }
                    return (
                        Object(o.a)(t, [
                            {
                                key: "render",
                                value: function () {
                                    return Object(a.jsx)("div", {
                                        className: "section slide-personal-Intro-first",
                                        children: Object(a.jsx)("section", {
                                            className: "banner-section s1",
                                            id: "home",
                                            children: Object(a.jsx)("div", {
                                                className: "container",
                                                children: Object(a.jsxs)("div", {
                                                    className: "content-text position-relative",
                                                    children: [
                                                        Object(a.jsxs)("div", {
                                                            className: "animate-element wow delay5 fadeInDown",
                                                            "data-wow-delay": "0.3s",
                                                            children: [
                                                                Object(a.jsxs)("h1", {
                                                                    className: "cd-headline clip is-full-width title mg-b29 text-white",
                                                                    children: [
                                                                        Object(a.jsx)("span", { children: "Create " }),
                                                                        Object(a.jsxs)("span", {
                                                                            className: "cd-words-wrapper color-d4",
                                                                            children: [Object(a.jsx)("b", { className: "is-visible", children: "Design!" }), Object(a.jsx)("b", { children: "Template!" })],
                                                                        }),
                                                                    ],
                                                                }),
                                                                Object(a.jsxs)("p", {
                                                                    className: "lt-sp03 mg-b60 text-white",
                                                                    children: [
                                                                        "Hi, Do you need  PSD template, landing page or Website design within a day? I will deliver Web",
                                                                        Object(a.jsx)("br", {}),
                                                                        "template with fully layered PSD file, easily converted into HTML templates, WordPress, etc.",
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                        Object(a.jsx)("div", {
                                                            className: "animate-element wow delay5 fadeInUp",
                                                            "data-wow-delay": "0.5s",
                                                            children: Object(a.jsx)("div", {
                                                                className: "fl-btn btn-general btn-hv-border",
                                                                children: Object(a.jsx)(l.b, { to: "#", className: "border-corner5 f-w500 lt-sp095 text-white ", children: "Download Resume" }),
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                            }),
                                        }),
                                    });
                                },
                            },
                        ]),
                        t
                    );
                })(c.Component),
                f = (function (e) {
                    Object(j.a)(t, e);
                    var s = Object(b.a)(t);
                    function t(e) {
                        var a;
                        return (
                            Object(d.a)(this, t),
                            ((a = s.call(this, e)).state = {
                                testimonial: [
                                    {
                                        id: 1,
                                        img: "./images/testimonial/07.jpg",
                                        alt: "images",
                                        text01: "Excellent design, great communication, fast turnaround of revisions. I had a ",
                                        text02: "clear vision of what I wanted. Ranaroy did not just deliver it he",
                                        text03: "aimproved upon it substantially. Recommended!",
                                        name: "Yacapaca",
                                        classname: "testimonial-t1 text-center",
                                    },
                                    {
                                        id: 2,
                                        img: "./images/testimonial/07.jpg",
                                        alt: "images",
                                        text01: "Excellent design, great communication, fast turnaround of revisions. I had a ",
                                        text02: "clear vision of what I wanted. Ranaroy did not just deliver it he",
                                        text03: "aimproved upon it substantially. Recommended!",
                                        name: "Yacapaca",
                                        classname: "testimonial-t1 text-center",
                                    },
                                    {
                                        id: 3,
                                        img: "./images/testimonial/07.jpg",
                                        alt: "images",
                                        text01: "Excellent design, great communication, fast turnaround of revisions. I had a ",
                                        text02: "clear vision of what I wanted. Ranaroy did not just deliver it he",
                                        text03: "aimproved upon it substantially. Recommended!",
                                        name: "Yacapaca",
                                        classname: "testimonial-t1 text-center",
                                    },
                                ],
                            }),
                            a
                        );
                    }
                    return (
                        Object(o.a)(t, [
                            {
                                key: "render",
                                value: function () {
                                    return Object(a.jsx)("div", {
                                        className: "container",
                                        children: Object(a.jsx)("div", {
                                            className: "custom-dot dot-t1 dot-s1 none-nav-default mg-dots-s1",
                                            children: Object(a.jsx)("div", {
                                                className: "flat-carousel-box data-effect clearfix",
                                                "data-gap": 0,
                                                "data-column": 1,
                                                "data-column2": 1,
                                                "data-column3": 1,
                                                "data-column4": 1,
                                                "data-column5": 1,
                                                "data-dots": "true",
                                                "data-auto": "false",
                                                "data-nav": "false",
                                                "data-loop": "true",
                                                children: Object(a.jsx)("div", {
                                                    className: "owl-carousel",
                                                    children: this.state.testimonial.map(function (e) {
                                                        return Object(a.jsxs)(
                                                            "div",
                                                            {
                                                                className: e.classname,
                                                                children: [
                                                                    Object(a.jsx)("div", { className: "avatar mg-b29", children: Object(a.jsx)("img", { src: e.img, alt: e.alt }) }),
                                                                    Object(a.jsxs)("p", { className: "lt-sp03 mg-b25", children: [e.text01, Object(a.jsx)("br", {}), " ", e.text02, " ", Object(a.jsx)("br", {}), e.text03] }),
                                                                    Object(a.jsx)("h3", { className: "name f-w600", children: e.name }),
                                                                ],
                                                            },
                                                            e.id
                                                        );
                                                    }),
                                                }),
                                            }),
                                        }),
                                    });
                                },
                            },
                        ]),
                        t
                    );
                })(c.Component),
                p = (function (e) {
                    Object(j.a)(t, e);
                    var s = Object(b.a)(t);
                    function t() {
                        return Object(d.a)(this, t), s.apply(this, arguments);
                    }
                    return (
                        Object(o.a)(t, [
                            {
                                key: "render",
                                value: function () {
                                    return Object(a.jsx)("div", {
                                        className: "section-icons",
                                        children: Object(a.jsx)("div", { className: this.props.data.classname, children: Object(a.jsx)("img", { src: this.props.data.images, alt: this.props.data.alt }) }),
                                    });
                                },
                            },
                        ]),
                        t
                    );
                })(c.Component),
                g = (function (e) {
                    Object(j.a)(t, e);
                    var s = Object(b.a)(t);
                    function t(e) {
                        var a;
                        return (
                            Object(d.a)(this, t),
                            ((a = s.call(this, e)).state = {
                                profile: [
                                    { id: 1, classname: "profile-link border-corner2 d-flex align-items-center", images: "./images/section/05.png", alt: "images", name: "Dribbble", normal: "Follow Me" },
                                    { id: 2, classname: "profile-link border-corner2 d-flex align-items-center", images: "./images/section/06.png", alt: "images", name: "Behance", normal: "See My Design" },
                                    { id: 3, classname: "profile-link border-corner2 d-flex align-items-center", images: "./images/section/07.png", alt: "images", name: "Uplabs", normal: "Download Here" },
                                    { id: 4, classname: "profile-link border-corner2 d-flex align-items-center", images: "./images/section/08.png", alt: "images", name: "Skype", normal: "Connect with me" },
                                ],
                            }),
                            a
                        );
                    }
                    return (
                        Object(o.a)(t, [
                            {
                                key: "render",
                                value: function () {
                                    return Object(a.jsxs)("div", {
                                        className: "background-white",
                                        children: [
                                            Object(a.jsxs)("div", {
                                                className: "d-lg-flex",
                                                children: [
                                                    Object(a.jsx)("div", {
                                                        className: "col-left",
                                                        children: Object(a.jsx)("div", {
                                                            className: "featured-post animate-element wow delay5 fadeInUp",
                                                            "data-wow-delay": "0.5s",
                                                            children: Object(a.jsx)("img", { src: "images/section/03.png", alt: "images" }),
                                                        }),
                                                    }),
                                                    Object(a.jsxs)("div", {
                                                        className: "col-right",
                                                        children: [
                                                            Object(a.jsx)("div", { className: "flat-spacer", "data-desktop": "105", "data-mobile": "50", "data-smobile": "50" }),
                                                            Object(a.jsxs)("div", {
                                                                className: "flat-title t1",
                                                                children: [
                                                                    Object(a.jsxs)("div", {
                                                                        className: "animate-element wow delay5 fadeInDown",
                                                                        "data-wow-delay": "0.5s",
                                                                        children: [
                                                                            Object(a.jsx)("h4", { className: "sub-title mg-b22", children: "About Me" }),
                                                                            Object(a.jsxs)("h2", {
                                                                                className: "title-section mg-b26 color-d12",
                                                                                children: ["Hi, I am here to ", Object(a.jsx)("span", { className: "color-d4", children: "help you." })],
                                                                            }),
                                                                            Object(a.jsx)("p", {
                                                                                children:
                                                                                    "Hi, if you need  PSD template, landing page or Website design within a day? then you can tell me, I'm here to help you. I can design any kind of PSD template. Check my portfolio.",
                                                                            }),
                                                                        ],
                                                                    }),
                                                                    Object(a.jsx)("div", {
                                                                        className: "animate-element wow delay5 fadeInUp",
                                                                        "data-wow-delay": "0.5s",
                                                                        children: Object(a.jsx)("div", {
                                                                            className: "fl-btn btn-general",
                                                                            children: Object(a.jsx)(l.b, { to: "#", className: "f-w500 color-1 lt-sp07", children: "Hire Me" }),
                                                                        }),
                                                                    }),
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            Object(a.jsx)("div", {
                                                className: "profile-list",
                                                children: Object(a.jsx)("div", {
                                                    className: "flat-carousel-box data-effect clearfix",
                                                    "data-gap": "30",
                                                    "data-column": "4",
                                                    "data-column2": "3",
                                                    "data-column3": "2",
                                                    "data-column4": "1",
                                                    "data-column5": "1",
                                                    "data-dots": "false",
                                                    "data-auto": "false",
                                                    "data-nav": "false",
                                                    "data-loop": "true",
                                                    children: Object(a.jsx)("div", {
                                                        className: "owl-carousel",
                                                        children: this.state.profile.map(function (e) {
                                                            return Object(a.jsxs)(
                                                                "div",
                                                                {
                                                                    className: e.classname,
                                                                    children: [
                                                                        Object(a.jsx)("div", { className: "featured-post", children: Object(a.jsx)("img", { src: e.images, alt: e.alt }) }),
                                                                        Object(a.jsxs)("div", {
                                                                            className: "content-inside",
                                                                            children: [
                                                                                Object(a.jsx)("h3", { className: "name", children: Object(a.jsx)(l.b, { to: "#", children: e.name }) }),
                                                                                Object(a.jsx)("span", { className: "t-normal", children: e.normal }),
                                                                            ],
                                                                        }),
                                                                    ],
                                                                },
                                                                e.id
                                                            );
                                                        }),
                                                    }),
                                                }),
                                            }),
                                        ],
                                    });
                                },
                            },
                        ]),
                        t
                    );
                })(c.Component),
                N = (function (e) {
                    Object(j.a)(t, e);
                    var s = Object(b.a)(t);
                    function t() {
                        return Object(d.a)(this, t), s.apply(this, arguments);
                    }
                    return (
                        Object(o.a)(t, [
                            {
                                key: "render",
                                value: function () {
                                    return Object(a.jsx)("div", {
                                        className: "col-lg-9 animate-element wow delay5 fadeInUp",
                                        "data-wow-delay": "0.5s",
                                        children: Object(a.jsxs)("div", {
                                            className: this.props.data.iconbox,
                                            children: [
                                                Object(a.jsx)("div", { className: this.props.data.iconcolor, children: Object(a.jsx)("span", { className: this.props.data.spanicon }) }),
                                                Object(a.jsxs)("div", {
                                                    className: "ct-is",
                                                    children: [
                                                        Object(a.jsx)("h3", { className: "title mg-b21", children: Object(a.jsx)(l.b, { to: "#", children: this.props.data.title }) }),
                                                        Object(a.jsxs)("p", { className: "lt-sp01", children: [this.props.data.text01, Object(a.jsx)("br", {}), this.props.data.text02] }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    });
                                },
                            },
                        ]),
                        t
                    );
                })(c.Component),
                v = (function (e) {
                    Object(j.a)(t, e);
                    var s = Object(b.a)(t);
                    function t(e) {
                        var a;
                        return (
                            Object(d.a)(this, t),
                            ((a = s.call(this, e)).state = {
                                colleft: [
                                    { id: 1, item: "f-item color-s1 counter mg-f-item1", datato: "284", text: "Hapy Client" },
                                    { id: 2, item: "f-item color-s1 counter mg-f-item2", datato: "165", text: "Review" },
                                ],
                                colright: [{ id: 1, item: "f-item color-s1 counter mg-f-item3", datato: "379", text: "Project Complate" }],
                            }),
                            a
                        );
                    }
                    return (
                        Object(o.a)(t, [
                            {
                                key: "render",
                                value: function () {
                                    return Object(a.jsxs)("div", {
                                        className: "d-md-flex mg-b40",
                                        children: [
                                            Object(a.jsx)("div", {
                                                className: "col-left",
                                                children: this.state.colleft.map(function (e) {
                                                    return Object(a.jsx)(
                                                        "div",
                                                        {
                                                            className: e.item,
                                                            children: Object(a.jsx)("div", {
                                                                className: "counter-box bg-s1 d-flex justify-content-center align-items-center",
                                                                children: Object(a.jsxs)("div", {
                                                                    className: "inner",
                                                                    children: [
                                                                        Object(a.jsx)("span", { className: "numb-count", "data-from": 0, "data-to": e.datato, "data-speed": 2e3, "data-inviewport": "yes", children: e.datato }),
                                                                        Object(a.jsx)("p", { children: e.text }),
                                                                    ],
                                                                }),
                                                            }),
                                                        },
                                                        e.id
                                                    );
                                                }),
                                            }),
                                            Object(a.jsx)("div", {
                                                className: "col-right",
                                                children: this.state.colright.map(function (e) {
                                                    return Object(a.jsx)(
                                                        "div",
                                                        {
                                                            className: e.item,
                                                            children: Object(a.jsx)("div", {
                                                                className: "counter-box bg-s1 d-flex justify-content-center align-items-center",
                                                                children: Object(a.jsxs)("div", {
                                                                    className: "inner",
                                                                    children: [
                                                                        Object(a.jsx)("span", { className: "numb-count", "data-from": 0, "data-to": e.datato, "data-speed": 2e3, "data-inviewport": "yes", children: e.datato }),
                                                                        Object(a.jsx)("p", { children: e.text }),
                                                                    ],
                                                                }),
                                                            }),
                                                        },
                                                        e.id
                                                    );
                                                }),
                                            }),
                                        ],
                                    });
                                },
                            },
                        ]),
                        t
                    );
                })(c.Component),
                w = (function (e) {
                    Object(j.a)(t, e);
                    var s = Object(b.a)(t);
                    function t(e) {
                        var a;
                        return (
                            Object(d.a)(this, t),
                            ((a = s.call(this, e)).state = {
                                design: [
                                    {
                                        id: 1,
                                        iconbox: "iconbox-s1 d-sm-flex align-items-center",
                                        iconcolor: "iconbox-icon color1",
                                        spanicon: "icon-designer",
                                        title: "Web Ui Design",
                                        text01: "I'm a professional UX designer with 4 years of",
                                        text02: "experience. My main focus is on listening.",
                                    },
                                    {
                                        id: 2,
                                        iconbox: "iconbox-s1 d-sm-flex justify-content-lg-center align-items-center mgl-iconbox-s1",
                                        iconcolor: "iconbox-icon color2 color1",
                                        spanicon: "icon-designer",
                                        title: "Mobile Ui Design",
                                        text01: "I'm a professional UX designer with 4 years of",
                                        text02: "experience. My main focus is on listening.",
                                    },
                                    {
                                        id: 3,
                                        iconbox: "iconbox-s1 d-sm-flex justify-content-lg-end align-items-center mgr-iconbox-s1",
                                        iconcolor: "iconbox-icon color3",
                                        spanicon: "icon-brand",
                                        title: "Branding Design",
                                        text01: "I'm a professional UX designer with 4 years of",
                                        text02: "experience. My main focus is on listening.",
                                    },
                                ],
                            }),
                            a
                        );
                    }
                    return (
                        Object(o.a)(t, [
                            {
                                key: "render",
                                value: function () {
                                    return Object(a.jsx)("div", {
                                        className: "section slide-personal-Intro-third slide-dark bg-white",
                                        children: Object(a.jsxs)("section", {
                                            className: "specilizing-in s1",
                                            id: "services",
                                            children: [
                                                Object(a.jsxs)("div", {
                                                    className: "container",
                                                    children: [
                                                        Object(a.jsx)("div", {
                                                            className: "flat-title",
                                                            children: Object(a.jsx)("h2", { className: "title-section color-d12 animate-element wow delay5 fadeInDown", "data-wow-delay": "0.5s", children: "I am Specialized in" }),
                                                        }),
                                                        Object(a.jsxs)("div", {
                                                            className: "row position-relative z-index1",
                                                            children: [
                                                                this.state.design.map(function (e) {
                                                                    return Object(a.jsx)(N, { data: e }, e.id);
                                                                }),
                                                                Object(a.jsx)("div", { className: "flat-spacer", "data-desktop": "0", "data-mobile": "0", "data-smobile": "0" }),
                                                                Object(a.jsxs)("div", {
                                                                    className: "fact",
                                                                    children: [
                                                                        Object(a.jsx)(v, {}),
                                                                        Object(a.jsxs)("div", {
                                                                            className: "btn-contact bg-s1 text-center",
                                                                            children: [
                                                                                Object(a.jsx)("h4", { className: "title color-d12", children: "Get a project? Let\u2019s talk." }),
                                                                                Object(a.jsx)(l.b, { to: "#", className: "email color-s1 color-d14", children: "yourmail@email.com" }),
                                                                            ],
                                                                        }),
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                                Object(a.jsx)("div", {
                                                    className: "featured-post animate-element wow delay5 fadeInRight",
                                                    "data-wow-delay": "0.5s",
                                                    children: Object(a.jsx)("img", { src: "images/section/09.png", alt: "images" }),
                                                }),
                                            ],
                                        }),
                                    });
                                },
                            },
                        ]),
                        t
                    );
                })(c.Component),
                y = (function (e) {
                    Object(j.a)(t, e);
                    var s = Object(b.a)(t);
                    function t() {
                        return Object(d.a)(this, t), s.apply(this, arguments);
                    }
                    return (
                        Object(o.a)(t, [
                            {
                                key: "render",
                                value: function () {
                                    return Object(a.jsx)("div", {
                                        className: "col-left animate-element wow delay5 fadeInDown",
                                        "data-wow-delay": "0.5s",
                                        children: Object(a.jsxs)("div", {
                                            className: "flat-title t1",
                                            children: [
                                                Object(a.jsx)("h4", { className: "sub-title mb-2", children: "Web Ui Design" }),
                                                Object(a.jsx)("h2", { className: "title-section color-d12 mg-b34", children: "Instagram growth landing page" }),
                                                Object(a.jsxs)("div", {
                                                    className: "description",
                                                    children: [
                                                        Object(a.jsx)("p", { className: "lt-sp01", children: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs." }),
                                                        Object(a.jsx)("p", { className: "lt-sp01", children: "The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled." }),
                                                    ],
                                                }),
                                                Object(a.jsx)("div", {
                                                    className: "fl-btn btn-general btn-hv-border",
                                                    children: Object(a.jsx)(l.b, { to: "#", className: "f-w500 text-one color-1 lt-sp1 border-corner2", children: "View Case Study" }),
                                                }),
                                            ],
                                        }),
                                    });
                                },
                            },
                        ]),
                        t
                    );
                })(c.Component),
                k = (function (e) {
                    Object(j.a)(t, e);
                    var s = Object(b.a)(t);
                    function t(e) {
                        var a;
                        return (
                            Object(d.a)(this, t),
                            ((a = s.call(this, e)).state = {
                                slider: [
                                    { id: 1, image: "./images/section/10.jpg", alt: "images" },
                                    { id: 2, image: "./images/section/10.jpg", alt: "images" },
                                    { id: 3, image: "./images/section/10.jpg", alt: "images" },
                                ],
                            }),
                            a
                        );
                    }
                    return (
                        Object(o.a)(t, [
                            {
                                key: "render",
                                value: function () {
                                    return Object(a.jsxs)("div", {
                                        className: "col-right animate-element wow delay5 fadeInUp",
                                        "data-wow-delay": "0.5s",
                                        children: [
                                            Object(a.jsx)("div", { className: "flat-spacer", "data-desktop": "4", "data-mobile": "70", "data-smobile": "70" }),
                                            Object(a.jsx)("div", {
                                                className: "slider-drop-apps custom-dot dot-t2 dot-s2 number-pages none-nav-default mg-dots-s2",
                                                children: Object(a.jsx)("div", {
                                                    className: "flat-carousel-box data-effect clearfix",
                                                    "data-gap": "0",
                                                    "data-column": "1",
                                                    "data-column2": "1",
                                                    "data-column3": "1",
                                                    "data-column4": "1",
                                                    "data-column5": "1",
                                                    "data-dots": "true",
                                                    "data-auto": "false",
                                                    "data-nav": "false",
                                                    "data-loop": "true",
                                                    children: Object(a.jsx)("div", {
                                                        className: "owl-carousel",
                                                        children: this.state.slider.map(function (e) {
                                                            return Object(a.jsx)("div", { className: "featured-post", children: Object(a.jsx)("img", { src: e.image, alt: e.alt }) }, e.id);
                                                        }),
                                                    }),
                                                }),
                                            }),
                                        ],
                                    });
                                },
                            },
                        ]),
                        t
                    );
                })(c.Component),
                I = (function (e) {
                    Object(j.a)(t, e);
                    var s = Object(b.a)(t);
                    function t() {
                        return Object(d.a)(this, t), s.apply(this, arguments);
                    }
                    return (
                        Object(o.a)(t, [
                            {
                                key: "render",
                                value: function () {
                                    return Object(a.jsx)("div", {
                                        className: "section slide-personal-Intro-fourth slide-dark",
                                        children: Object(a.jsxs)("section", {
                                            className: "flat-case-study flex s1 position-relative",
                                            id: "portfolio",
                                            children: [
                                                Object(a.jsx)("div", { className: "background-left", children: Object(a.jsx)("div", { className: "text-portfolio", children: "Portfolio" }) }),
                                                Object(a.jsxs)("div", { className: "container d-lg-flex", children: [Object(a.jsx)(y, {}), Object(a.jsx)(k, {})] }),
                                            ],
                                        }),
                                    });
                                },
                            },
                        ]),
                        t
                    );
                })(c.Component),
                U = (function (e) {
                    Object(j.a)(t, e);
                    var s = Object(b.a)(t);
                    function t() {
                        return Object(d.a)(this, t), s.apply(this, arguments);
                    }
                    return (
                        Object(o.a)(t, [
                            {
                                key: "render",
                                value: function () {
                                    return Object(a.jsxs)("div", {
                                        className: "col-left",
                                        children: [
                                            Object(a.jsx)("div", { className: "flat-spacer", "data-desktop": 97, "data-mobile": 0, "data-smobile": 0 }),
                                            Object(a.jsxs)("div", {
                                                className: "featured-post position-relative animate-element wow delay5 fadeInUp",
                                                "data-wow-delay": "0.5s",
                                                children: [
                                                    Object(a.jsx)("img", { src: "images/section/11.png", alt: "images" }),
                                                    Object(a.jsx)("div", { className: "flat-spacer", "data-desktop": 0, "data-mobile": 0, "data-smobile": 30 }),
                                                    Object(a.jsxs)("div", {
                                                        className: "",
                                                        children: [
                                                            Object(a.jsx)(l.b, { to: "#", className: "color-s1", children: Object(a.jsx)("i", { className: "fa fa-facebook", "aria-hidden": "true" }) }),
                                                            Object(a.jsx)(l.b, { to: "#", className: "color-s2", children: Object(a.jsx)("i", { className: "fa fa-twitter", "aria-hidden": "true" }) }),
                                                            Object(a.jsx)(l.b, { to: "#", className: "color-s3", children: Object(a.jsx)("i", { className: "fa fa-instagram", "aria-hidden": "true" }) }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        ],
                                    });
                                },
                            },
                        ]),
                        t
                    );
                })(c.Component),
                C = (function (e) {
                    Object(j.a)(t, e);
                    var s = Object(b.a)(t);
                    function t(e) {
                        var a;
                        return (
                            Object(d.a)(this, t),
                            ((a = s.call(this, e)).state = {
                                skill: [
                                    { id: 1, timeline: "timeline-inverted color1", info: "Universite of Udacity", title: "User Experience Design", text: "User experience (UX) design is the process design teams use to create products. " },
                                    { id: 2, timeline: "timeline-inverted color2", info: "Udemy", title: "Interaction Design", text: "User experience (UX) design is the process design teams use to create products. " },
                                    { id: 3, timeline: "timeline-inverted color3", info: "Skill Share", title: "Interaction Design", text: "User experience (UX) design is the process design teams use to create products. " },
                                ],
                            }),
                            a
                        );
                    }
                    return (
                        Object(o.a)(t, [
                            {
                                key: "render",
                                value: function () {
                                    return Object(a.jsxs)("div", {
                                        className: "col-right",
                                        children: [
                                            Object(a.jsx)("div", { className: "flat-spacer", "data-desktop": 0, "data-mobile": 70, "data-smobile": 70 }),
                                            Object(a.jsxs)("div", {
                                                className: "flat-title t1 animate-element wow delay5 fadeInDown",
                                                children: [
                                                    Object(a.jsx)("h4", { className: "sub-title mg-b13", children: "Educational qualification" }),
                                                    Object(a.jsx)("h2", { className: "title-section color-d12", children: "My Education" }),
                                                ],
                                            }),
                                            Object(a.jsxs)("div", {
                                                className: "timelines position-relative animate-element wow delay5 fadeInUp",
                                                "data-wow-delay": "0.5s",
                                                children: [
                                                    Object(a.jsx)("ul", {
                                                        className: "timeline",
                                                        children: this.state.skill.map(function (e) {
                                                            return Object(a.jsxs)(
                                                                "li",
                                                                {
                                                                    className: e.timeline,
                                                                    children: [
                                                                        Object(a.jsx)("div", { className: "timeline-badge" }),
                                                                        Object(a.jsxs)("div", {
                                                                            className: "timeline-panel",
                                                                            children: [
                                                                                Object(a.jsx)("h3", { className: "f-info", children: e.info }),
                                                                                Object(a.jsx)("div", { className: "s-info", children: e.title }),
                                                                                Object(a.jsx)("p", { children: e.text }),
                                                                            ],
                                                                        }),
                                                                    ],
                                                                },
                                                                e.id
                                                            );
                                                        }),
                                                    }),
                                                    Object(a.jsx)("div", {
                                                        className: "fl-btn btn-general btn-hv-border",
                                                        children: Object(a.jsx)(l.b, { to: "#", className: "f-w500 lt-sp1 border-corner2 text-one", children: "Download Resume" }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    });
                                },
                            },
                        ]),
                        t
                    );
                })(c.Component),
                D = (function (e) {
                    Object(j.a)(t, e);
                    var s = Object(b.a)(t);
                    function t() {
                        return Object(d.a)(this, t), s.apply(this, arguments);
                    }
                    return (
                        Object(o.a)(t, [
                            {
                                key: "render",
                                value: function () {
                                    return Object(a.jsx)("div", {
                                        className: "section slide-personal-Intro-fifth slide-dark bg-white",
                                        children: Object(a.jsxs)("section", {
                                            className: "flat-education flex s1 position-relative",
                                            id: "resume",
                                            children: [
                                                Object(a.jsx)("div", { className: "shape-right", children: Object(a.jsx)("img", { src: "images/section/16.png", alt: "images" }) }),
                                                Object(a.jsx)("div", { className: "container", children: Object(a.jsxs)("div", { className: "d-lg-flex", children: [Object(a.jsx)(U, {}), Object(a.jsx)(C, {})] }) }),
                                            ],
                                        }),
                                    });
                                },
                            },
                        ]),
                        t
                    );
                })(c.Component),
                H = (function (e) {
                    Object(j.a)(t, e);
                    var s = Object(b.a)(t);
                    function t() {
                        return Object(d.a)(this, t), s.apply(this, arguments);
                    }
                    return (
                        Object(o.a)(t, [
                            {
                                key: "render",
                                value: function () {
                                    return Object(a.jsx)("div", {
                                        className: "section slide-personal-Intro-sixth slide-dark",
                                        id: "contact",
                                        children: Object(a.jsxs)("footer", {
                                            id: "footer",
                                            className: "footer footer-s1 footer-s1-home1",
                                            children: [
                                                Object(a.jsx)("div", {
                                                    id: "footer-widget",
                                                    className: "footer-widget-s1 footer-widget-line bg-s1 position-relative",
                                                    children: Object(a.jsx)("div", {
                                                        className: "container",
                                                        children: Object(a.jsxs)("div", {
                                                            className: "row d-lg-flex align-items-center text-center",
                                                            children: [
                                                                Object(a.jsx)("div", { className: "col-lg-12", children: Object(a.jsx)("h3", { className: "widget-title larger lt-sp06", children: "Stay Connected" }) }),
                                                                Object(a.jsx)("div", {
                                                                    className: "col-lg-12",
                                                                    children: Object(a.jsxs)("div", {
                                                                        className: "widget-info",
                                                                        children: [
                                                                            Object(a.jsx)("p", { className: "address", children: "Sydney, Austrlia" }),
                                                                            Object(a.jsx)("p", { className: "mail", children: "hello@dolio.com" }),
                                                                            Object(a.jsx)("p", { className: "phone", children: "+91 254 787 878" }),
                                                                        ],
                                                                    }),
                                                                }),
                                                                Object(a.jsx)("div", {
                                                                    className: "col-lg-12",
                                                                    children: Object(a.jsxs)("div", {
                                                                        className: "site-list site-list-pdl text-center",
                                                                        children: [
                                                                            Object(a.jsx)(l.b, { to: "#", className: "bg-s1", children: Object(a.jsx)("i", { className: "fa fa-twitter", "aria-hidden": "true" }) }),
                                                                            Object(a.jsx)(l.b, { to: "#", className: "bg-s2", children: Object(a.jsx)("i", { className: "fa fa-behance", "aria-hidden": "true" }) }),
                                                                            Object(a.jsx)(l.b, { to: "#", className: "bg-s3", children: Object(a.jsx)("span", { className: "icon-dribble" }) }),
                                                                        ],
                                                                    }),
                                                                }),
                                                            ],
                                                        }),
                                                    }),
                                                }),
                                                Object(a.jsx)("div", {
                                                    id: "bottom",
                                                    className: "bottom-s1",
                                                    children: Object(a.jsxs)("div", {
                                                        className: "container d-lg-flex justify-content-between",
                                                        children: [
                                                            Object(a.jsx)("div", { className: "copyright lt-sp02", children: "\xa9 Roy Design, 2020 All rights reserved." }),
                                                            Object(a.jsxs)("div", {
                                                                className: "socials-list color-s1",
                                                                children: [
                                                                    Object(a.jsx)(l.b, { to: "#", children: Object(a.jsx)("i", { className: "fa fa-facebook", "aria-hidden": "true" }) }),
                                                                    Object(a.jsx)(l.b, { to: "#", children: Object(a.jsx)("i", { className: "fa fa-twitter", "aria-hidden": "true" }) }),
                                                                    Object(a.jsx)(l.b, { to: "#", children: Object(a.jsx)("i", { className: "fa fa-instagram", "aria-hidden": "true" }) }),
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                }),
                                            ],
                                        }),
                                    });
                                },
                            },
                        ]),
                        t
                    );
                })(c.Component),
                X = (function (e) {
                    Object(j.a)(t, e);
                    var s = Object(b.a)(t);
                    function t(e) {
                        var a;
                        return (
                            Object(d.a)(this, t),
                            ((a = s.call(this, e)).state = {
                                shapeicon: [
                                    { id: 1, classname: "shape-one", images: "./images/testimonial/01.png", alt: "images" },
                                    { id: 2, classname: "shape-two", images: "./images/testimonial/02.png", alt: "images" },
                                    { id: 3, classname: "shape-three", images: "./images/testimonial/03.png", alt: "images" },
                                    { id: 4, classname: "shape-four", images: "./images/testimonial/04.png", alt: "images" },
                                    { id: 5, classname: "shape-five", images: "./images/testimonial/05.png", alt: "images" },
                                    { id: 6, classname: "shape-six", images: "./images/testimonial/06.png", alt: "images" },
                                ],
                            }),
                            a
                        );
                    }
                    return (
                        Object(o.a)(t, [
                            {
                                key: "render",
                                value: function () {
                                    return Object(a.jsxs)("div", {
                                        className: "counter-scroll bg-home1 has-one-page",
                                        children: [
                                            Object(a.jsx)("div", { id: "mobile-menu-overlay", children: Object(a.jsx)("span", { className: "tf-close" }) }),
                                            Object(a.jsx)(O, {}),
                                            Object(a.jsx)("div", {
                                                id: "content",
                                                className: "content",
                                                children: Object(a.jsxs)("div", {
                                                    className: "homepage-personal",
                                                    children: [
                                                        Object(a.jsx)(u, {}),
                                                        Object(a.jsx)("div", {
                                                            className: "section slide-personal-Intro-second slide-dark",
                                                            children: Object(a.jsxs)("section", {
                                                                className: "testimonial s1 shape-am",
                                                                id: "testimonial",
                                                                children: [
                                                                    this.state.shapeicon.map(function (e) {
                                                                        return Object(a.jsx)(p, { data: e }, e.id);
                                                                    }),
                                                                    Object(a.jsx)("div", {
                                                                        className: "animate-element wow delay5 fadeZooming",
                                                                        "data-wow-delay": "0.5s",
                                                                        children: Object(a.jsx)("h2", { className: "text-client-love", children: "Clients Love" }),
                                                                    }),
                                                                    Object(a.jsx)(f, {}),
                                                                ],
                                                            }),
                                                        }),
                                                        Object(a.jsx)("div", {
                                                            className: "section slide-personal-Intro-second slide-dark bg-white",
                                                            children: Object(a.jsx)("section", { className: "profile s1", children: Object(a.jsx)("div", { className: "container", id: "about", children: Object(a.jsx)(g, {}) }) }),
                                                        }),
                                                        Object(a.jsx)(w, {}),
                                                        Object(a.jsx)(I, {}),
                                                        Object(a.jsx)(D, {}),
                                                    ],
                                                }),
                                            }),
                                            Object(a.jsx)(H, {}),
                                        ],
                                    });
                                },
                            },
                        ]),
                        t
                    );
                })(c.Component),
                P = (function (e) {
                    Object(j.a)(t, e);
                    var s = Object(b.a)(t);
                    function t(e) {
                        var a;
                        return Object(d.a)(this, t), ((a = s.call(this, e)).state = {}), a;
                    }
                    return (
                        Object(o.a)(t, [
                            {
                                key: "render",
                                value: function () {
                                    return Object(a.jsx)("header", {
                                        id: "header",
                                        className: "header header-style2 has-menu-model",
                                        children: Object(a.jsx)("div", {
                                            className: "container",
                                            children: Object(a.jsxs)("div", {
                                                className: "flex-header d-flex justify-content-between align-items-center",
                                                children: [
                                                    Object(a.jsxs)("div", {
                                                        className: "socials-list-hd s1 hv1",
                                                        children: [
                                                            Object(a.jsx)(l.b, { to: "#", children: Object(a.jsx)("i", { className: "fa fa-facebook", "aria-hidden": "true" }) }),
                                                            Object(a.jsx)(l.b, { to: "#", children: Object(a.jsx)("i", { className: "fa fa-twitter", "aria-hidden": "true" }) }),
                                                            Object(a.jsx)(l.b, { to: "#", children: Object(a.jsx)("i", { className: "fa fa-instagram", "aria-hidden": "true" }) }),
                                                        ],
                                                    }),
                                                    Object(a.jsxs)("div", {
                                                        dir: "rtl",
                                                        className: "btn-menu mobile-header__menu-button",
                                                        children: [
                                                            Object(a.jsx)("div", { className: "line line-1" }),
                                                            Object(a.jsx)("div", { className: "line line-2" }),
                                                            Object(a.jsx)("div", { className: "line line-3" }),
                                                            Object(a.jsx)("div", { className: "line line-4" }),
                                                        ],
                                                    }),
                                                    Object(a.jsx)("div", {
                                                        className: "content-menu d-lg-flex",
                                                        children: Object(a.jsx)("div", {
                                                            className: "nav-wrap",
                                                            children: Object(a.jsx)("nav", {
                                                                id: "mainnav",
                                                                className: "mainnav",
                                                                children: Object(a.jsxs)("ul", {
                                                                    className: "menu ace-responsive-menu",
                                                                    "data-menu-style": "horizontal",
                                                                    children: [
                                                                        Object(a.jsxs)("li", {
                                                                            children: [
                                                                                Object(a.jsx)(l.b, { to: "/", className: "active", children: "Home" }),
                                                                                Object(a.jsx)("ul", {
                                                                                    className: "sub-menu",
                                                                                    children: m.map(function (e) {
                                                                                        return Object(a.jsx)(
                                                                                            "li",
                                                                                            {
                                                                                                children: Object(a.jsx)(l.b, {
                                                                                                    to: e.tolink,
                                                                                                    onClick: function () {
                                                                                                        window.location.href = e.tolink;
                                                                                                    },
                                                                                                    className: 2 === e.id ? "active" : "",
                                                                                                    children: e.namelink,
                                                                                                }),
                                                                                            },
                                                                                            e.id
                                                                                        );
                                                                                    }),
                                                                                }),
                                                                            ],
                                                                        }),
                                                                        h.map(function (e) {
                                                                            return Object(a.jsx)("li", { children: Object(a.jsx)(l.b, { to: e.tomenu, className: "click-model", children: e.namemenu }) }, e.id);
                                                                        }),
                                                                        Object(a.jsxs)("li", {
                                                                            children: [
                                                                                Object(a.jsx)(l.b, { to: "#", children: "Blog" }),
                                                                                Object(a.jsx)("ul", {
                                                                                    className: "sub-menu",
                                                                                    children: x.map(function (e) {
                                                                                        return Object(a.jsx)(
                                                                                            "li",
                                                                                            {
                                                                                                children: Object(a.jsx)(l.b, {
                                                                                                    to: e.toblog,
                                                                                                    onClick: function () {
                                                                                                        window.location.href = e.toblog;
                                                                                                    },
                                                                                                    children: e.nameblog,
                                                                                                }),
                                                                                            },
                                                                                            e.id
                                                                                        );
                                                                                    }),
                                                                                }),
                                                                            ],
                                                                        }),
                                                                    ],
                                                                }),
                                                            }),
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        }),
                                    });
                                },
                            },
                        ]),
                        t
                    );
                })(c.Component),
                S = (function (e) {
                    Object(j.a)(t, e);
                    var s = Object(b.a)(t);
                    function t() {
                        return Object(d.a)(this, t), s.apply(this, arguments);
                    }
                    return (
                        Object(o.a)(t, [
                            {
                                key: "render",
                                value: function () {
                                    return Object(a.jsx)("section", {
                                        className: "banner-section s2",
                                        id: "home",
                                        children: Object(a.jsxs)("div", {
                                            className: "custom-container d-flex",
                                            children: [
                                                Object(a.jsx)("div", {
                                                    className: "featured-post-left",
                                                    children: Object(a.jsx)("div", {
                                                        className: "fl-btn btn-general btn-download-resume animate-element wow delay5 fadeZooming",
                                                        "data-wow-delay": "0.3s",
                                                        children: Object(a.jsxs)(l.b, { to: "#", className: "bg-white f-w500", children: [Object(a.jsx)("i", { className: "fa fa-download", "aria-hidden": "true" }), "Download Resume"] }),
                                                    }),
                                                }),
                                                Object(a.jsxs)("div", {
                                                    className: "featured-post-right",
                                                    children: [
                                                        Object(a.jsxs)("div", {
                                                            className: "content-text",
                                                            children: [
                                                                Object(a.jsxs)("div", {
                                                                    className: "animate-element wow delay5 fadeInDown",
                                                                    "data-wow-delay": "0.3s",
                                                                    children: [
                                                                        Object(a.jsx)("div", { className: "tag lt-sp53 mg-b24 text-white", children: "Product Designer" }),
                                                                        Object(a.jsxs)("h1", {
                                                                            className: "cd-headline clip is-full-width title mg-b29 text-white",
                                                                            children: [
                                                                                Object(a.jsx)("span", { children: "Hello, " }),
                                                                                Object(a.jsxs)("span", {
                                                                                    className: "cd-words-wrapper color-d4",
                                                                                    children: [
                                                                                        Object(a.jsx)("b", { className: "is-visible", children: "I\u2019m Perry!" }),
                                                                                        Object(a.jsx)("b", { children: "I\u2019m Olivia!" }),
                                                                                        Object(a.jsx)("b", { children: "I\u2019m Amelia!" }),
                                                                                    ],
                                                                                }),
                                                                            ],
                                                                        }),
                                                                        Object(a.jsxs)("p", {
                                                                            className: "mg-b53 text-white",
                                                                            children: [
                                                                                "Hi, Do you need  PSD template, landing page or Website design within a day? I will deliver Web ",
                                                                                Object(a.jsx)("br", {}),
                                                                                "template with fully layered PSD file, easily converted into HTML templates, WordPress, etc.",
                                                                            ],
                                                                        }),
                                                                    ],
                                                                }),
                                                                Object(a.jsx)("div", {
                                                                    className: "animate-element wow delay5 fadeInUp",
                                                                    "data-wow-delay": "0.3s",
                                                                    children: Object(a.jsxs)("div", {
                                                                        className: "site-list has-border",
                                                                        children: [
                                                                            Object(a.jsx)(l.b, { to: "#", className: "bg-s1", children: Object(a.jsx)("i", { className: "fa fa-twitter", "aria-hidden": "true" }) }),
                                                                            Object(a.jsx)(l.b, { to: "#", className: "bg-s2", children: Object(a.jsx)("i", { className: "fa fa-behance", "aria-hidden": "true" }) }),
                                                                            Object(a.jsx)(l.b, { to: "#", className: "bg-s3", children: Object(a.jsx)("span", { className: "icon-dribble" }) }),
                                                                        ],
                                                                    }),
                                                                }),
                                                            ],
                                                        }),
                                                        Object(a.jsxs)("div", {
                                                            className: "iconbox-s4 t2 color-s1 border-corner5",
                                                            children: [
                                                                Object(a.jsx)("div", { className: "avatar position-relative", children: Object(a.jsx)("img", { src: "images/footer/01.jpg", alt: "images" }) }),
                                                                Object(a.jsxs)("div", {
                                                                    className: "content-inner",
                                                                    children: [
                                                                        Object(a.jsx)("h4", { className: "name lt-sp04 mg-b16 text-white position-relative", children: "Available for Project" }),
                                                                        Object(a.jsx)("div", { className: "fl-btn btn-general", children: Object(a.jsx)(l.b, { to: "#", className: "text-white border-corner2", children: "Hire Me" }) }),
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    });
                                },
                            },
                        ]),
                        t
                    );
                })(c.Component),
                M = (function (e) {
                    Object(j.a)(t, e);
                    var s = Object(b.a)(t);
                    function t(e) {
                        var a;
                        return (
                            Object(d.a)(this, t),
                            ((a = s.call(this, e)).state = {
                                shape: [
                                    { id: 1, classname: "shape-one", images: "./images/testimonial/01.png", alt: "images" },
                                    { id: 2, classname: "shape-two", images: "./images/testimonial/02.png", alt: "images" },
                                    { id: 3, classname: "shape-three", images: "./images/testimonial/03.png", alt: "images" },
                                    { id: 4, classname: "shape-four", images: "./images/testimonial/04.png", alt: "images" },
                                    { id: 5, classname: "shape-five", images: "./images/testimonial/05.png", alt: "images" },
                                    { id: 6, classname: "shape-six", images: "./images/testimonial/06.png", alt: "images" },
                                ],
                            }),
                            a
                        );
                    }
                    return (
                        Object(o.a)(t, [
                            {
                                key: "render",
                                value: function () {
                                    return Object(a.jsx)("div", {
                                        className: "section-icons",
                                        children: this.state.shape.map(function (e) {
                                            return Object(a.jsx)("div", { className: e.classname, children: Object(a.jsx)("img", { src: e.images, alt: e.alt }) }, e.id);
                                        }),
                                    });
                                },
                            },
                        ]),
                        t
                    );
                })(c.Component),
                E = (function (e) {
                    Object(j.a)(t, e);
                    var s = Object(b.a)(t);
                    function t() {
                        return Object(d.a)(this, t), s.apply(this, arguments);
                    }
                    return (
                        Object(o.a)(t, [
                            {
                                key: "render",
                                value: function () {
                                    return Object(a.jsx)("div", {
                                        className: "col-lg-7 animate-element wow delay5 fadeInDown",
                                        "data-wow-delay": "0.5s",
                                        children: Object(a.jsxs)("div", {
                                            className: "flat-title t1",
                                            children: [
                                                Object(a.jsx)("h4", { className: "sub-title mg-b22", children: "About Me" }),
                                                Object(a.jsx)("h2", { className: "title-section color-d12 mg-b41", children: "Hi, I am here to help your next project!" }),
                                                Object(a.jsxs)("div", {
                                                    className: "description",
                                                    children: [
                                                        Object(a.jsx)("p", {
                                                            className: "lt-sp01",
                                                            children:
                                                                "Hi, if you need  PSD template, landing page or Website design within a day? then you can tell me, I'm here to help you. I can design any kind of PSD template. Check my portfolio.",
                                                        }),
                                                        Object(a.jsx)("p", {
                                                            className: "lt-sp01",
                                                            children:
                                                                "If you need  PSD template, landing page or Website design within a day? then you can tell me, I'm here to help you. I can design any kind of PSD template. Check my portfolio.",
                                                        }),
                                                    ],
                                                }),
                                                Object(a.jsx)("h3", { className: "email position-relative", children: "yourmail@email.com" }),
                                            ],
                                        }),
                                    });
                                },
                            },
                        ]),
                        t
                    );
                })(c.Component),
                R = (function (e) {
                    Object(j.a)(t, e);
                    var s = Object(b.a)(t);
                    function t(e) {
                        var a;
                        return (
                            Object(d.a)(this, t),
                            ((a = s.call(this, e)).state = {
                                colleft: [
                                    { id: 1, item: "f-item color-s2 counter mg-f-item1", datato: "284", text: "Hapy Client" },
                                    { id: 2, item: "f-item color-s3 counter mg-f-item2", datato: "165", text: "Review" },
                                ],
                                colright: [{ id: 1, item: "f-item color-s4 counter mg-f-item3", datato: "379", text: "Project Complate" }],
                            }),
                            a
                        );
                    }
                    return (
                        Object(o.a)(t, [
                            {
                                key: "render",
                                value: function () {
                                    return Object(a.jsxs)("div", {
                                        className: "d-md-flex mg-b40",
                                        children: [
                                            Object(a.jsx)("div", {
                                                className: "col-left",
                                                children: this.state.colleft.map(function (e) {
                                                    return Object(a.jsx)(
                                                        "div",
                                                        {
                                                            className: e.item,
                                                            children: Object(a.jsx)("div", {
                                                                className: "counter-box bg-s1 d-flex justify-content-center align-items-center",
                                                                children: Object(a.jsxs)("div", {
                                                                    className: "inner",
                                                                    children: [
                                                                        Object(a.jsx)("span", { className: "numb-count", "data-from": 0, "data-to": e.datato, "data-speed": 2e3, "data-inviewport": "yes", children: e.datato }),
                                                                        Object(a.jsx)("p", { children: e.text }),
                                                                    ],
                                                                }),
                                                            }),
                                                        },
                                                        e.id
                                                    );
                                                }),
                                            }),
                                            Object(a.jsx)("div", {
                                                className: "col-right",
                                                children: this.state.colright.map(function (e) {
                                                    return Object(a.jsx)(
                                                        "div",
                                                        {
                                                            className: e.item,
                                                            children: Object(a.jsx)("div", {
                                                                className: "counter-box bg-s1 d-flex justify-content-center align-items-center",
                                                                children: Object(a.jsxs)("div", {
                                                                    className: "inner",
                                                                    children: [
                                                                        Object(a.jsx)("span", { className: "numb-count", "data-from": 0, "data-to": e.datato, "data-speed": 2e3, "data-inviewport": "yes", children: e.datato }),
                                                                        Object(a.jsx)("p", { children: e.text }),
                                                                    ],
                                                                }),
                                                            }),
                                                        },
                                                        e.id
                                                    );
                                                }),
                                            }),
                                        ],
                                    });
                                },
                            },
                        ]),
                        t
                    );
                })(c.Component),
                A = (function (e) {
                    Object(j.a)(t, e);
                    var s = Object(b.a)(t);
                    function t() {
                        return Object(d.a)(this, t), s.apply(this, arguments);
                    }
                    return (
                        Object(o.a)(t, [
                            {
                                key: "render",
                                value: function () {
                                    return Object(a.jsx)("div", {
                                        id: "c_about",
                                        className: "tf-modalbox-wrapper",
                                        children: Object(a.jsx)("div", {
                                            className: "tf-modal-content",
                                            children: Object(a.jsxs)("section", {
                                                className: "about-me t2 s2 shape-am position-relative",
                                                id: "about",
                                                children: [
                                                    Object(a.jsx)(M, {}),
                                                    Object(a.jsx)("div", {
                                                        className: "container",
                                                        children: Object(a.jsxs)("div", {
                                                            className: "row position-relative",
                                                            children: [
                                                                Object(a.jsx)(E, {}),
                                                                Object(a.jsx)("div", { className: "flat-spacer", "data-desktop": "0", "data-mobile": "50", "data-smobile": "50" }),
                                                                Object(a.jsxs)("div", {
                                                                    className: "fact",
                                                                    children: [
                                                                        Object(a.jsx)(R, {}),
                                                                        Object(a.jsxs)("div", {
                                                                            className: "btn-contact bg-s1 text-center",
                                                                            children: [
                                                                                Object(a.jsx)("h4", { className: "title color-d12", children: "Get a project? Let\u2019s talk." }),
                                                                                Object(a.jsx)(l.b, { to: "#", className: "email color-s1 color-d14", children: "yourmail@email.com" }),
                                                                            ],
                                                                        }),
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                    }),
                                                    Object(a.jsx)("div", {
                                                        className: "featured-post animate-element wow delay5 fadeInRight",
                                                        "data-wow-delay": "0.5s",
                                                        children: Object(a.jsx)("img", { src: "images/section/09.png", alt: "images" }),
                                                    }),
                                                ],
                                            }),
                                        }),
                                    });
                                },
                            },
                        ]),
                        t
                    );
                })(c.Component),
                B = (function (e) {
                    Object(j.a)(t, e);
                    var s = Object(b.a)(t);
                    function t() {
                        return Object(d.a)(this, t), s.apply(this, arguments);
                    }
                    return (
                        Object(o.a)(t, [
                            {
                                key: "render",
                                value: function () {
                                    return Object(a.jsx)("div", {
                                        className: "col-lg-4 col-12 animate-element wow delay5 fadeInUp",
                                        "data-wow-delay": this.props.data.wowdelay,
                                        children: Object(a.jsxs)("div", {
                                            className: this.props.data.classcard,
                                            children: [
                                                Object(a.jsx)("div", { className: "featured-post mg-b43", children: Object(a.jsx)("img", { src: this.props.data.image, alt: this.props.data.alt }) }),
                                                Object(a.jsx)("h3", { className: "title mg-b21", children: Object(a.jsx)(l.b, { to: "#", children: this.props.data.title }) }),
                                                Object(a.jsx)("p", { children: this.props.data.text }),
                                            ],
                                        }),
                                    });
                                },
                            },
                        ]),
                        t
                    );
                })(c.Component),
                L = (function (e) {
                    Object(j.a)(t, e);
                    var s = Object(b.a)(t);
                    function t() {
                        return Object(d.a)(this, t), s.apply(this, arguments);
                    }
                    return (
                        Object(o.a)(t, [
                            {
                                key: "render",
                                value: function () {
                                    return Object(a.jsxs)("div", {
                                        className: "row d-lg-flex align-items-center",
                                        children: [
                                            Object(a.jsx)("div", {
                                                className: "col-lg-8",
                                                children: Object(a.jsxs)("div", {
                                                    className: "flat-title t1 animate-element wow delay5 fadeInLeft",
                                                    "data-wow-delay": "0.5s",
                                                    children: [
                                                        Object(a.jsx)("h4", { className: "sub-title mg-b13", children: "Educational qualification" }),
                                                        Object(a.jsx)("h2", { className: "title-section color-d12", children: "Education & Experience" }),
                                                    ],
                                                }),
                                            }),
                                            Object(a.jsxs)("div", {
                                                className: "col-lg-4",
                                                children: [
                                                    Object(a.jsx)("div", { className: "flat-spacer", "data-desktop": 0, "data-mobile": 50, "data-smobile": 50 }),
                                                    Object(a.jsx)("div", {
                                                        className: "fl-btn btn-general btn-hv-common animate-element wow delay5 fadeInRight",
                                                        "data-wow-delay": "0.5s",
                                                        children: Object(a.jsx)(l.b, { to: "#", className: "btn-inner f-w500 lt-sp1 border-corner2", children: "Download Resume" }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    });
                                },
                            },
                        ]),
                        t
                    );
                })(c.Component),
                F = (function (e) {
                    Object(j.a)(t, e);
                    var s = Object(b.a)(t);
                    function t() {
                        return Object(d.a)(this, t), s.apply(this, arguments);
                    }
                    return (
                        Object(o.a)(t, [
                            {
                                key: "render",
                                value: function () {
                                    return Object(a.jsxs)("div", {
                                        className: "row content-inside",
                                        children: [
                                            Object(a.jsx)("div", {
                                                className: "col-lg-5 col-md-6 col-12 animate-element wow delay5 fadeInUp",
                                                "data-wow-delay": "0.5s",
                                                children: Object(a.jsx)("div", {
                                                    className: "experience-box t2 border-corner5 color-s1",
                                                    children: Object(a.jsxs)("div", {
                                                        className: "box-inner",
                                                        children: [
                                                            Object(a.jsx)("h3", { className: "f-info color-d3", children: "Universite of Udacity" }),
                                                            Object(a.jsx)("div", { className: "s-info", children: "User Experience Design" }),
                                                            Object(a.jsx)("p", { children: "User experience (UX) design is the process design teams use to create products." }),
                                                        ],
                                                    }),
                                                }),
                                            }),
                                            Object(a.jsx)("div", {
                                                className: "col-lg-7 col-md-6 col-12 animate-element wow delay5 fadeInUp",
                                                "data-wow-delay": "0.6s",
                                                children: Object(a.jsx)("div", {
                                                    className: "col-right",
                                                    children: Object(a.jsx)("div", {
                                                        className: "experience-box t2 border-corner5 color-s1",
                                                        children: Object(a.jsxs)("div", {
                                                            className: "box-inner",
                                                            children: [
                                                                Object(a.jsx)("h3", { className: "f-info color-d3", children: "2013-2015" }),
                                                                Object(a.jsx)("div", { className: "s-info", children: "UI Designer at Microsoft" }),
                                                                Object(a.jsx)("p", { children: "User experience (UX) design is the process design teams use to create products." }),
                                                            ],
                                                        }),
                                                    }),
                                                }),
                                            }),
                                            Object(a.jsx)("div", {
                                                className: "col-lg-5 col-md-6 col-12 animate-element wow delay5 fadeInUp",
                                                "data-wow-delay": "0.7s",
                                                children: Object(a.jsx)("div", {
                                                    className: "experience-box t2 border-corner5 color-s2",
                                                    children: Object(a.jsxs)("div", {
                                                        className: "box-inner",
                                                        children: [
                                                            Object(a.jsx)("h3", { className: "f-info color-d4", children: "Udemy" }),
                                                            Object(a.jsx)("div", { className: "s-info", children: "Interaction Design" }),
                                                            Object(a.jsx)("p", { children: "User experience (UX) design is the process design teams use to create products." }),
                                                        ],
                                                    }),
                                                }),
                                            }),
                                            Object(a.jsx)("div", {
                                                className: "col-lg-7 col-md-6 col-12 animate-element wow delay5 fadeInUp",
                                                "data-wow-delay": "0.5s",
                                                children: Object(a.jsx)("div", {
                                                    className: "col-right",
                                                    children: Object(a.jsx)("div", {
                                                        className: "experience-box t2 border-corner5 color-s2",
                                                        children: Object(a.jsxs)("div", {
                                                            className: "box-inner",
                                                            children: [
                                                                Object(a.jsx)("h3", { className: "f-info color-d4", children: "2015-2017" }),
                                                                Object(a.jsx)("div", { className: "s-info", children: "UX Designer at Apple" }),
                                                                Object(a.jsx)("p", { children: "User experience (UX) design is the process design teams use to create products." }),
                                                            ],
                                                        }),
                                                    }),
                                                }),
                                            }),
                                            Object(a.jsx)("div", {
                                                className: "col-lg-5 col-md-6 col-12 animate-element wow delay5 fadeInUp",
                                                "data-wow-delay": "0.6s",
                                                children: Object(a.jsx)("div", {
                                                    className: "experience-box t2 border-corner5 color-s3",
                                                    children: Object(a.jsxs)("div", {
                                                        className: "box-inner",
                                                        children: [
                                                            Object(a.jsx)("h3", { className: "f-info color-d5", children: "Skill Share" }),
                                                            Object(a.jsx)("div", { className: "s-info", children: "Interaction Design" }),
                                                            Object(a.jsx)("p", { children: "User experience (UX) design is the process design teams use to create products." }),
                                                        ],
                                                    }),
                                                }),
                                            }),
                                            Object(a.jsx)("div", {
                                                className: "col-lg-7 col-md-6 col-12 animate-element wow delay5 fadeInUp",
                                                "data-wow-delay": "0.7s",
                                                children: Object(a.jsx)("div", {
                                                    className: "col-right",
                                                    children: Object(a.jsx)("div", {
                                                        className: "experience-box t2 border-corner5 color-s3",
                                                        children: Object(a.jsxs)("div", {
                                                            className: "box-inner",
                                                            children: [
                                                                Object(a.jsx)("h3", { className: "f-info color-d5", children: "2017-2019" }),
                                                                Object(a.jsx)("div", { className: "s-info", children: "Product Designer at Earth" }),
                                                                Object(a.jsx)("p", { children: "User experience (UX) design is the process design teams use to create products." }),
                                                            ],
                                                        }),
                                                    }),
                                                }),
                                            }),
                                        ],
                                    });
                                },
                            },
                        ]),
                        t
                    );
                })(c.Component),
                W = (function (e) {
                    Object(j.a)(t, e);
                    var s = Object(b.a)(t);
                    function t() {
                        return Object(d.a)(this, t), s.apply(this, arguments);
                    }
                    return (
                        Object(o.a)(t, [
                            {
                                key: "render",
                                value: function () {
                                    return Object(a.jsx)("section", {
                                        className: "get-project s2",
                                        children: Object(a.jsx)("div", {
                                            className: "container",
                                            children: Object(a.jsxs)("div", {
                                                className: "row",
                                                children: [
                                                    Object(a.jsx)("div", {
                                                        className: "col-lg-4 col-12",
                                                        children: Object(a.jsx)("div", {
                                                            className: "featured-post animate-element wow delay5 fadeZooming",
                                                            "data-wow-delay": "0.5s",
                                                            children: Object(a.jsx)("img", { src: "images/section/23.png", alt: "images" }),
                                                        }),
                                                    }),
                                                    Object(a.jsx)("div", {
                                                        className: "col-lg-8 col-12",
                                                        children: Object(a.jsxs)("div", {
                                                            className: "content-inner d-lg-flex",
                                                            children: [
                                                                Object(a.jsx)("div", {
                                                                    className: "col-left",
                                                                    children: Object(a.jsxs)("div", {
                                                                        className: "animate-element wow delay5 fadeInDown",
                                                                        "data-wow-delay": "0.5s",
                                                                        children: [
                                                                            Object(a.jsx)("h2", { className: "title mg-b14 text-white", children: "Say Hello!" }),
                                                                            Object(a.jsxs)("div", {
                                                                                className: "site-list has-border",
                                                                                children: [
                                                                                    Object(a.jsx)(l.b, { to: "#", className: "bg-s1", children: Object(a.jsx)("i", { className: "fa fa-twitter", "aria-hidden": "true" }) }),
                                                                                    Object(a.jsx)(l.b, { to: "#", className: "bg-s2", children: Object(a.jsx)("i", { className: "fa fa-behance", "aria-hidden": "true" }) }),
                                                                                    Object(a.jsx)(l.b, { to: "#", className: "bg-s3", children: Object(a.jsx)("span", { className: "icon-dribble" }) }),
                                                                                ],
                                                                            }),
                                                                        ],
                                                                    }),
                                                                }),
                                                                Object(a.jsxs)("div", {
                                                                    className: "col-right animate-element wow delay5 fadeInUp",
                                                                    "data-wow-delay": "0.5s",
                                                                    children: [
                                                                        Object(a.jsx)("div", { className: "flat-spacer", "data-desktop": 69, "data-mobile": 50, "data-smobile": 50 }),
                                                                        Object(a.jsxs)("form", {
                                                                            action: "#",
                                                                            className: "get-project-f2 position-relative",
                                                                            children: [
                                                                                Object(a.jsx)("input", { type: "email", placeholder: "Enter your email" }),
                                                                                Object(a.jsx)("button", { className: "btn-submit", children: Object(a.jsx)("i", { className: "fa fa-paper-plane-o", "aria-hidden": "true" }) }),
                                                                            ],
                                                                        }),
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        }),
                                    });
                                },
                            },
                        ]),
                        t
                    );
                })(c.Component),
                T = (function (e) {
                    Object(j.a)(t, e);
                    var s = Object(b.a)(t);
                    function t() {
                        return Object(d.a)(this, t), s.apply(this, arguments);
                    }
                    return (
                        Object(o.a)(t, [
                            {
                                key: "render",
                                value: function () {
                                    return Object(a.jsx)("div", {
                                        id: "c_education",
                                        className: "tf-modalbox-wrapper",
                                        children: Object(a.jsxs)("div", {
                                            className: "tf-modal-content",
                                            children: [
                                                Object(a.jsx)("section", {
                                                    className: "flat-education s2",
                                                    id: "resume",
                                                    children: Object(a.jsxs)("div", {
                                                        className: "container",
                                                        children: [Object(a.jsx)(L, {}), Object(a.jsx)("div", { className: "flat-spacer", "data-desktop": "99", "data-mobile": "50", "data-smobile": "50" }), Object(a.jsx)(F, {})],
                                                    }),
                                                }),
                                                Object(a.jsx)(W, {}),
                                            ],
                                        }),
                                    });
                                },
                            },
                        ]),
                        t
                    );
                })(c.Component),
                q = (function (e) {
                    Object(j.a)(t, e);
                    var s = Object(b.a)(t);
                    function t() {
                        return Object(d.a)(this, t), s.apply(this, arguments);
                    }
                    return (
                        Object(o.a)(t, [
                            {
                                key: "render",
                                value: function () {
                                    return Object(a.jsx)("div", {
                                        className: "container",
                                        children: Object(a.jsxs)("div", {
                                            className: "row d-lg-flex align-items-center animate-element wow delay5 fadeInDown",
                                            "data-wow-delay": "0.5s",
                                            children: [
                                                Object(a.jsx)("div", {
                                                    className: "col-lg-8",
                                                    children: Object(a.jsxs)("div", {
                                                        className: "flat-title t1",
                                                        children: [
                                                            Object(a.jsx)("h4", { className: "sub-title mg-b13", children: "Portfolio" }),
                                                            Object(a.jsx)("h2", { className: "title-section color-d12 mg-b20", children: "Few selected works." }),
                                                            Object(a.jsxs)("p", {
                                                                children: ["I'm a professional UX designer with 4 years of experience. My main focus ", Object(a.jsx)("br", {}), "is on listening and understanding your users."],
                                                            }),
                                                        ],
                                                    }),
                                                }),
                                                Object(a.jsxs)("div", {
                                                    className: "col-lg-4",
                                                    children: [
                                                        Object(a.jsx)("div", { className: "flat-spacer", "data-desktop": 0, "data-mobile": 50, "data-smobile": 50 }),
                                                        Object(a.jsx)("div", { className: "fl-btn btn-general", children: Object(a.jsx)(l.b, { to: "#", className: "f-w500 lt-sp1 border-corner2", children: "Explore More" }) }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    });
                                },
                            },
                        ]),
                        t
                    );
                })(c.Component),
                _ = (function (e) {
                    Object(j.a)(t, e);
                    var s = Object(b.a)(t);
                    function t(e) {
                        var a;
                        return (
                            Object(d.a)(this, t),
                            ((a = s.call(this, e)).state = {
                                slider: [
                                    { id: 1, image: "./images/section/45.jpg", alt: "images", title: "Portfolio", view: "Full view" },
                                    { id: 2, image: "./images/section/27.jpg", alt: "images", title: "Portfolio", view: "Full view" },
                                    { id: 3, image: "./images/section/28.jpg", alt: "images", title: "Drop", view: "Full view" },
                                    { id: 4, image: "./images/section/46.jpg", alt: "images", title: "Design dive", view: "Full view" },
                                ],
                            }),
                            a
                        );
                    }
                    return (
                        Object(o.a)(t, [
                            {
                                key: "render",
                                value: function () {
                                    return Object(a.jsx)("div", {
                                        className: "animate-element wow delay5 fadeInDown",
                                        "data-wow-delay": "0.5s",
                                        children: Object(a.jsx)("div", {
                                            className: "flat-carousel-box data-effect clearfix",
                                            "data-gap": 67,
                                            "data-column": 4,
                                            "data-column2": 3,
                                            "data-column3": 2,
                                            "data-column4": 1,
                                            "data-column5": 1,
                                            "data-dots": "true",
                                            "data-auto": "false",
                                            "data-nav": "false",
                                            "data-loop": "true",
                                            children: Object(a.jsx)("div", {
                                                className: "owl-carousel",
                                                children: this.state.slider.map(function (e) {
                                                    return Object(a.jsxs)(
                                                        "div",
                                                        {
                                                            className: "image-box-t1",
                                                            children: [
                                                                Object(a.jsx)("div", { className: "featured-post", children: Object(a.jsx)("img", { src: e.image, alt: e.alt }) }),
                                                                Object(a.jsx)("h3", { className: "name", children: e.title }),
                                                                Object(a.jsx)("div", { className: "full-view", children: Object(a.jsx)(l.b, { to: "#", children: e.view }) }),
                                                            ],
                                                        },
                                                        e.id
                                                    );
                                                }),
                                            }),
                                        }),
                                    });
                                },
                            },
                        ]),
                        t
                    );
                })(c.Component),
                z = (function (e) {
                    Object(j.a)(t, e);
                    var s = Object(b.a)(t);
                    function t() {
                        return Object(d.a)(this, t), s.apply(this, arguments);
                    }
                    return (
                        Object(o.a)(t, [
                            {
                                key: "render",
                                value: function () {
                                    return Object(a.jsx)("div", {
                                        id: "c_portfolio",
                                        className: "tf-modalbox-wrapper",
                                        children: Object(a.jsx)("div", {
                                            className: "tf-modal-content",
                                            children: Object(a.jsxs)("section", {
                                                className: "flat-case-study s2 animation",
                                                id: "portfolio",
                                                children: [Object(a.jsx)(q, {}), Object(a.jsx)("div", { className: "flat-spacer", "data-desktop": "97", "data-mobile": "50", "data-smobile": "50" }), Object(a.jsx)(_, {})],
                                            }),
                                        }),
                                    });
                                },
                            },
                        ]),
                        t
                    );
                })(c.Component),
                G = (function (e) {
                    Object(j.a)(t, e);
                    var s = Object(b.a)(t);
                    function t(e) {
                        var a;
                        return (
                            Object(d.a)(this, t),
                            ((a = s.call(this, e)).state = {
                                images: [
                                    { id: 1, image: "./images/blog/04.jpg", alt: "images" },
                                    { id: 2, image: "./images/blog/09.jpg", alt: "images" },
                                    { id: 3, image: "./images/blog/10.jpg", alt: "images" },
                                ],
                                testimonial: [
                                    {
                                        id: 1,
                                        text:
                                            "\u201cExcellent design, great communication, fast turnaround of revisions. I had a clear vision of what I wanted. Ranaroy did not just deliver it he a improved upon it substantially. Recommended!\u201d",
                                        name: "Davin Heily",
                                        office: "at CEO Brisben",
                                    },
                                    {
                                        id: 2,
                                        text:
                                            "\u201cExcellent design, great communication, fast turnaround of revisions. I had a clear vision of what I wanted. Ranaroy did not just deliver it he a improved upon it substantially. Recommended!\u201d",
                                        name: "Davin Heily",
                                        office: "at CEO Brisben",
                                    },
                                    {
                                        id: 3,
                                        text:
                                            "\u201cExcellent design, great communication, fast turnaround of revisions. I had a clear vision of what I wanted. Ranaroy did not just deliver it he a improved upon it substantially. Recommended!\u201d",
                                        name: "Davin Heily",
                                        office: "at CEO Brisben",
                                    },
                                ],
                            }),
                            a
                        );
                    }
                    return (
                        Object(o.a)(t, [
                            {
                                key: "render",
                                value: function () {
                                    return Object(a.jsx)("div", {
                                        id: "c_clients",
                                        className: "tf-modalbox-wrapper",
                                        children: Object(a.jsx)("div", {
                                            className: "tf-modal-content",
                                            children: Object(a.jsxs)("section", {
                                                className: "testimonial t2 s2 bg-s1 position-relative",
                                                id: "testimonial",
                                                children: [
                                                    Object(a.jsx)("div", { className: "background-right bg-cl2", children: Object(a.jsx)("div", { className: "text-testimonial color-d17", children: "Testimonial" }) }),
                                                    Object(a.jsx)("div", { className: "background-transparent bg-cl4" }),
                                                    Object(a.jsxs)("div", {
                                                        className: "container d-lg-flex",
                                                        children: [
                                                            Object(a.jsxs)("div", {
                                                                className: "col-left animate-element wow delay5 fadeInDown",
                                                                "data-wow-delay": "0.5s",
                                                                children: [
                                                                    Object(a.jsx)("div", { className: "flat-spacer", "data-desktop": 4, "data-mobile": 0, "data-smobile": 0 }),
                                                                    Object(a.jsxs)("div", {
                                                                        className: "wrap-box bg-white position-relative",
                                                                        children: [
                                                                            Object(a.jsx)("div", { className: "featured-post mg-b27", children: Object(a.jsx)("img", { src: "images/blog/11.jpg", alt: "images" }) }),
                                                                            Object(a.jsx)("div", {
                                                                                className: "images-list d-flex justify-content-between",
                                                                                children: this.state.images.map(function (e) {
                                                                                    return Object(a.jsx)("img", { src: e.image, alt: e.alt }, e.id);
                                                                                }),
                                                                            }),
                                                                            Object(a.jsx)("div", { className: "quote", children: Object(a.jsx)("img", { src: "images/testimonial/09.png", alt: "images" }) }),
                                                                        ],
                                                                    }),
                                                                ],
                                                            }),
                                                            Object(a.jsxs)("div", {
                                                                className: "col-right animate-element wow delay5 fadeInUp",
                                                                "data-wow-delay": "0.5s",
                                                                children: [
                                                                    Object(a.jsx)("div", { className: "flat-spacer", "data-desktop": 0, "data-mobile": 100, "data-smobile": 100 }),
                                                                    Object(a.jsxs)("div", {
                                                                        className: "flat-title t1",
                                                                        children: [
                                                                            Object(a.jsx)("h4", { className: "sub-title mg-b13", children: "Testimonial" }),
                                                                            Object(a.jsx)("h2", { className: "title-section color-d12", children: "Client Brief" }),
                                                                        ],
                                                                    }),
                                                                    Object(a.jsx)("div", {
                                                                        className: "slider-drop-apps custom-dot dot-s1 none-nav-default mg-dots-s3",
                                                                        children: Object(a.jsx)("div", {
                                                                            className: "flat-carousel-box data-effect clearfix",
                                                                            "data-gap": 0,
                                                                            "data-column": 1,
                                                                            "data-column2": 1,
                                                                            "data-column3": 1,
                                                                            "data-column4": 1,
                                                                            "data-column5": 1,
                                                                            "data-dots": "true",
                                                                            "data-auto": "false",
                                                                            "data-nav": "false",
                                                                            "data-loop": "true",
                                                                            children: Object(a.jsx)("div", {
                                                                                className: "owl-carousel",
                                                                                children: this.state.testimonial.map(function (e) {
                                                                                    return Object(a.jsxs)(
                                                                                        "div",
                                                                                        {
                                                                                            className: "client-info",
                                                                                            children: [
                                                                                                Object(a.jsx)("p", { className: "color-d16", children: e.text }),
                                                                                                Object(a.jsxs)("div", {
                                                                                                    className: "client-detail",
                                                                                                    children: [Object(a.jsx)("span", { className: "color-d6 f-w500", children: e.name }), " ", e.office],
                                                                                                }),
                                                                                            ],
                                                                                        },
                                                                                        e.id
                                                                                    );
                                                                                }),
                                                                            }),
                                                                        }),
                                                                    }),
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        }),
                                    });
                                },
                            },
                        ]),
                        t
                    );
                })(c.Component),
                Z = (function (e) {
                    Object(j.a)(t, e);
                    var s = Object(b.a)(t);
                    function t(e) {
                        var a;
                        return (
                            Object(d.a)(this, t),
                            ((a = s.call(this, e)).state = {
                                image: [
                                    { id: 1, image: "./images/section/29.png", alt: "images" },
                                    { id: 2, image: "./images/section/30.png", alt: "images" },
                                    { id: 3, image: "./images/section/31.png", alt: "images" },
                                    { id: 4, image: "./images/section/32.png", alt: "images" },
                                    { id: 5, image: "./images/section/33.png", alt: "images" },
                                    { id: 6, image: "./images/section/29.png", alt: "images" },
                                ],
                            }),
                            a
                        );
                    }
                    return (
                        Object(o.a)(t, [
                            {
                                key: "render",
                                value: function () {
                                    return Object(a.jsx)("section", {
                                        className: "sponsor s2",
                                        children: Object(a.jsx)("div", {
                                            className: "container",
                                            children: Object(a.jsx)("div", {
                                                className: "flat-carousel-box data-effect clearfix",
                                                "data-gap": 68,
                                                "data-column": 6,
                                                "data-column2": 4,
                                                "data-column3": 4,
                                                "data-column4": 2,
                                                "data-column5": 2,
                                                "data-dots": "false",
                                                "data-auto": "false",
                                                "data-nav": "false",
                                                "data-loop": "true",
                                                children: Object(a.jsx)("div", {
                                                    className: "owl-carousel",
                                                    children: this.state.image.map(function (e) {
                                                        return Object(a.jsx)("img", { src: e.image, alt: e.alt }, e.id);
                                                    }),
                                                }),
                                            }),
                                        }),
                                    });
                                },
                            },
                        ]),
                        t
                    );
                })(c.Component),
                J = (function (e) {
                    Object(j.a)(t, e);
                    var s = Object(b.a)(t);
                    function t() {
                        return Object(d.a)(this, t), s.apply(this, arguments);
                    }
                    return (
                        Object(o.a)(t, [
                            {
                                key: "render",
                                value: function () {
                                    return Object(a.jsxs)("footer", {
                                        id: "footer",
                                        className: "footer footer-s1",
                                        children: [
                                            Object(a.jsx)("div", {
                                                id: "footer-widget",
                                                className: "footer-widget-s2 footer-widget-line bg-s1 position-relative",
                                                children: Object(a.jsxs)("div", {
                                                    className: "container",
                                                    children: [
                                                        Object(a.jsxs)("div", {
                                                            className: "iconbox-s4 t1 color-s1 border-corner5 d-flex",
                                                            children: [
                                                                Object(a.jsx)("div", { className: "avatar position-relative", children: Object(a.jsx)("img", { src: "images/footer/01.jpg", alt: "images" }) }),
                                                                Object(a.jsxs)("div", {
                                                                    className: "content-inner",
                                                                    children: [
                                                                        Object(a.jsx)("h4", { className: "name lt-sp04 mg-b16 text-white position-relative", children: "Available for Project" }),
                                                                        Object(a.jsx)("div", {
                                                                            className: "fl-btn btn-general btn-hv-common",
                                                                            children: Object(a.jsx)(l.b, { to: "#", className: "btn-inner text-white border-corner2", children: "Hire Me" }),
                                                                        }),
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                        Object(a.jsxs)("div", {
                                                            className: "site-list site-list-center text-center",
                                                            children: [
                                                                Object(a.jsx)(l.b, { to: "#", className: "bg-s1", children: Object(a.jsx)("i", { className: "fa fa-twitter", "aria-hidden": "true" }) }),
                                                                Object(a.jsx)(l.b, { to: "#", className: "bg-s2", children: Object(a.jsx)("i", { className: "fa fa-behance", "aria-hidden": "true" }) }),
                                                                Object(a.jsx)(l.b, { to: "#", className: "bg-s3", children: Object(a.jsx)("span", { className: "icon-dribble" }) }),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                            }),
                                            Object(a.jsx)("div", {
                                                id: "bottom",
                                                className: "bottom-s2",
                                                children: Object(a.jsx)("div", {
                                                    className: "container",
                                                    children: Object(a.jsxs)("div", {
                                                        className: "row",
                                                        children: [
                                                            Object(a.jsx)("div", { className: "col-lg-4", children: Object(a.jsx)("div", { className: "copyright lt-sp02", children: "\xa9 Roy Design, 2020 All rights reserved." }) }),
                                                            Object(a.jsx)("div", {
                                                                className: "col-lg-6",
                                                                children: Object(a.jsxs)("ul", {
                                                                    className: "widget-nav-menu color-s1",
                                                                    children: [
                                                                        Object(a.jsx)("li", { children: Object(a.jsx)(l.b, { to: "#", children: "Home" }) }),
                                                                        Object(a.jsx)("li", { children: Object(a.jsx)(l.b, { to: "#", children: "Portfolio" }) }),
                                                                        Object(a.jsx)("li", { children: Object(a.jsx)(l.b, { to: "#", children: "About" }) }),
                                                                        Object(a.jsx)("li", { children: Object(a.jsx)(l.b, { to: "#", children: "Contact" }) }),
                                                                    ],
                                                                }),
                                                            }),
                                                            Object(a.jsx)("div", {
                                                                className: "col-lg-2",
                                                                children: Object(a.jsxs)("div", {
                                                                    className: "socials-list color-s1",
                                                                    children: [
                                                                        Object(a.jsx)(l.b, { to: "#", children: Object(a.jsx)("i", { className: "fa fa-facebook", "aria-hidden": "true" }) }),
                                                                        Object(a.jsx)(l.b, { to: "#", children: Object(a.jsx)("i", { className: "fa fa-twitter", "aria-hidden": "true" }) }),
                                                                        Object(a.jsx)(l.b, { to: "#", children: Object(a.jsx)("i", { className: "fa fa-instagram", "aria-hidden": "true" }) }),
                                                                    ],
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                                }),
                                            }),
                                        ],
                                    });
                                },
                            },
                        ]),
                        t
                    );
                })(c.Component),
                Y = (function (e) {
                    Object(j.a)(t, e);
                    var s = Object(b.a)(t);
                    function t(e) {
                        var a;
                        return (
                            Object(d.a)(this, t),
                            ((a = s.call(this, e)).state = {
                                card: [
                                    {
                                        id: 1,
                                        classcard: "iconbox-s2 iconbox-s2-t1 bg-white",
                                        wowdelay: "0.5s",
                                        image: "./images/section/20.png",
                                        alt: "images",
                                        title: "Web UI Design",
                                        text: "I'm a professional UX designer with 4 years of experience. My main focus is on listening.",
                                    },
                                    {
                                        id: 2,
                                        classcard: "iconbox-s2 iconbox-s2-t1 bg-white active",
                                        wowdelay: "0.8s",
                                        image: "./images/section/21.png",
                                        alt: "images",
                                        title: "Mobile UI Design",
                                        text: "I'm a professional UX designer with 4 years of experience. My main focus is on listening.",
                                    },
                                    {
                                        id: 3,
                                        classcard: "iconbox-s2 iconbox-s2-t1 bg-white",
                                        wowdelay: "1.1s",
                                        image: "./images/section/22.png",
                                        alt: "images",
                                        title: "Branding Design",
                                        text: "I'm a professional UX designer with 4 years of experience. My main focus is on listening.",
                                    },
                                ],
                            }),
                            a
                        );
                    }
                    return (
                        Object(o.a)(t, [
                            {
                                key: "render",
                                value: function () {
                                    return Object(a.jsxs)("div", {
                                        className: "body-copyright-light fixed counter-scroll has-one-page",
                                        children: [
                                            Object(a.jsx)("div", { id: "mobile-menu-overlay", children: Object(a.jsx)("span", { className: "tf-close" }) }),
                                            Object(a.jsx)(P, {}),
                                            Object(a.jsx)("div", {
                                                id: "content",
                                                className: "content",
                                                children: Object(a.jsxs)("div", {
                                                    className: "homepage-personal",
                                                    children: [
                                                        Object(a.jsx)(S, {}),
                                                        Object(a.jsx)(A, {}),
                                                        Object(a.jsx)("div", {
                                                            id: "c_specialization",
                                                            className: "tf-modalbox-wrapper",
                                                            children: Object(a.jsx)("div", {
                                                                className: "tf-modal-content",
                                                                children: Object(a.jsx)("section", {
                                                                    className: "experienced s2",
                                                                    id: "services",
                                                                    children: Object(a.jsxs)("div", {
                                                                        className: "container",
                                                                        children: [
                                                                            Object(a.jsx)("div", {
                                                                                className: "flat-title mg-b98 animate-element wow delay5 fadeInDown",
                                                                                "data-wow-delay": "0.5s",
                                                                                children: Object(a.jsx)("h2", { className: "title-section color-d12 mg-b41 text-center", children: "I am Specialized in" }),
                                                                            }),
                                                                            Object(a.jsx)("div", {
                                                                                className: "row",
                                                                                children: this.state.card.map(function (e) {
                                                                                    return Object(a.jsx)(B, { data: e }, e.id);
                                                                                }),
                                                                            }),
                                                                        ],
                                                                    }),
                                                                }),
                                                            }),
                                                        }),
                                                        Object(a.jsx)(T, {}),
                                                        Object(a.jsx)(z, {}),
                                                        Object(a.jsx)(G, {}),
                                                        Object(a.jsx)("div", {
                                                            id: "c_contact",
                                                            className: "tf-modalbox-wrapper",
                                                            children: Object(a.jsxs)("div", { className: "tf-modal-content modal-content-footer justify-content-end", children: [Object(a.jsx)(Z, {}), Object(a.jsx)(J, {})] }),
                                                        }),
                                                    ],
                                                }),
                                            }),
                                        ],
                                    });
                                },
                            },
                        ]),
                        t
                    );
                })(c.Component),
                $ = (function (e) {
                    Object(j.a)(t, e);
                    var s = Object(b.a)(t);
                    function t(e) {
                        var a;
                        return Object(d.a)(this, t), ((a = s.call(this, e)).state = {}), a;
                    }
                    return (
                        Object(o.a)(t, [
                            {
                                key: "render",
                                value: function () {
                                    return Object(a.jsx)("header", {
                                        id: "header",
                                        className: "header header-style3 has-menu-model",
                                        children: Object(a.jsx)("div", {
                                            className: "container",
                                            children: Object(a.jsxs)("div", {
                                                className: "flex-header d-flex justify-content-between align-items-center",
                                                children: [
                                                    Object(a.jsx)("div", {
                                                        id: "logo",
                                                        className: "logo",
                                                        children: Object(a.jsx)(l.b, {
                                                            to: "/",
                                                            onClick: function () {
                                                                window.location.href = "/";
                                                            },
                                                            title: "Logo",
                                                            children: Object(a.jsx)("img", { src: "images/logo/01.png", alt: "images", "data-width": 122, "data-height": 34, "data-retina": "images/logo/01@2x.png" }),
                                                        }),
                                                    }),
                                                    Object(a.jsxs)("div", {
                                                        dir: "rtl",
                                                        className: "btn-menu mobile-header__menu-button",
                                                        children: [
                                                            Object(a.jsx)("div", { className: "line line-1" }),
                                                            Object(a.jsx)("div", { className: "line line-2" }),
                                                            Object(a.jsx)("div", { className: "line line-3" }),
                                                            Object(a.jsx)("div", { className: "line line-4" }),
                                                        ],
                                                    }),
                                                    Object(a.jsx)("div", {
                                                        className: "content-menu d-lg-flex",
                                                        children: Object(a.jsx)("div", {
                                                            className: "nav-wrap",
                                                            children: Object(a.jsx)("nav", {
                                                                id: "mainnav",
                                                                className: "mainnav",
                                                                children: Object(a.jsxs)("ul", {
                                                                    className: "menu ace-responsive-menu",
                                                                    "data-menu-style": "horizontal",
                                                                    children: [
                                                                        Object(a.jsxs)("li", {
                                                                            children: [
                                                                                Object(a.jsx)(l.b, { to: "/", className: "active", children: "Home" }),
                                                                                Object(a.jsx)("ul", {
                                                                                    className: "sub-menu",
                                                                                    children: m.map(function (e) {
                                                                                        return Object(a.jsx)(
                                                                                            "li",
                                                                                            {
                                                                                                children: Object(a.jsx)(l.b, {
                                                                                                    to: e.tolink,
                                                                                                    onClick: function () {
                                                                                                        window.location.href = e.tolink;
                                                                                                    },
                                                                                                    className: 3 === e.id ? "active" : "",
                                                                                                    children: e.namelink,
                                                                                                }),
                                                                                            },
                                                                                            e.id
                                                                                        );
                                                                                    }),
                                                                                }),
                                                                            ],
                                                                        }),
                                                                        h.map(function (e) {
                                                                            return Object(a.jsx)("li", { children: Object(a.jsx)(l.b, { to: e.tomenu, className: "click-model", children: e.namemenu }) }, e.id);
                                                                        }),
                                                                        Object(a.jsxs)("li", {
                                                                            children: [
                                                                                Object(a.jsx)(l.b, { to: "#", children: "Blog" }),
                                                                                Object(a.jsx)("ul", {
                                                                                    className: "sub-menu",
                                                                                    children: x.map(function (e) {
                                                                                        return Object(a.jsx)(
                                                                                            "li",
                                                                                            {
                                                                                                children: Object(a.jsx)(l.b, {
                                                                                                    to: e.toblog,
                                                                                                    onClick: function () {
                                                                                                        window.location.href = e.toblog;
                                                                                                    },
                                                                                                    children: e.nameblog,
                                                                                                }),
                                                                                            },
                                                                                            e.id
                                                                                        );
                                                                                    }),
                                                                                }),
                                                                            ],
                                                                        }),
                                                                    ],
                                                                }),
                                                            }),
                                                        }),
                                                    }),
                                                    Object(a.jsxs)("div", {
                                                        className: "socials-list-hd s2 hv2",
                                                        children: [
                                                            Object(a.jsx)(l.b, { to: "#", children: Object(a.jsx)("i", { className: "fa fa-facebook", "aria-hidden": "true" }) }),
                                                            Object(a.jsx)(l.b, { to: "#", children: Object(a.jsx)("i", { className: "fa fa-instagram", "aria-hidden": "true" }) }),
                                                            Object(a.jsx)(l.b, { to: "#", children: Object(a.jsx)("i", { className: "fa fa-twitter", "aria-hidden": "true" }) }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        }),
                                    });
                                },
                            },
                        ]),
                        t
                    );
                })(c.Component),
                V = (function (e) {
                    Object(j.a)(t, e);
                    var s = Object(b.a)(t);
                    function t() {
                        return Object(d.a)(this, t), s.apply(this, arguments);
                    }
                    return (
                        Object(o.a)(t, [
                            {
                                key: "render",
                                value: function () {
                                    return Object(a.jsxs)("section", {
                                        className: "banner-section s3 two-home",
                                        id: "home",
                                        children: [
                                            Object(a.jsxs)("div", {
                                                className: "container",
                                                children: [
                                                    Object(a.jsxs)("div", {
                                                        className: "content-text position-relative",
                                                        children: [
                                                            Object(a.jsxs)("div", {
                                                                className: "animate-element wow delay5 fadeInDown",
                                                                "data-wow-delay": "0.3s",
                                                                children: [
                                                                    Object(a.jsx)("div", { className: "tag color-d1 lt-sp53 mg-b24", children: "Product Designer" }),
                                                                    Object(a.jsxs)("h1", {
                                                                        className: "cd-headline clip is-full-width title color-d2 mg-b31",
                                                                        children: [
                                                                            Object(a.jsx)("span", { children: "Hello, " }),
                                                                            Object(a.jsxs)("span", {
                                                                                className: "cd-words-wrapper color-d6",
                                                                                children: [
                                                                                    Object(a.jsx)("b", { className: "is-visible", children: "I\u2019m Perry!" }),
                                                                                    Object(a.jsx)("b", { children: "I\u2019m Olivia!" }),
                                                                                    Object(a.jsx)("b", { children: "I\u2019m Amelia!" }),
                                                                                ],
                                                                            }),
                                                                        ],
                                                                    }),
                                                                    Object(a.jsxs)("p", {
                                                                        className: "lt-sp02 mg-b51",
                                                                        children: ["Hi, i m perry, professional ux designer with 4 years ", Object(a.jsx)("br", {}), "of experience. Need any help?"],
                                                                    }),
                                                                ],
                                                            }),
                                                            Object(a.jsx)("div", {
                                                                className: "animate-element wow delay5 fadeInUp",
                                                                "data-wow-delay": "0.3s",
                                                                children: Object(a.jsx)("div", {
                                                                    className: "fl-btn btn-general btn-hv-common color-s1",
                                                                    children: Object(a.jsx)(l.b, { to: "#", className: "btn-inner f-w500 color-d6 border-corner5 lt-sp01", children: "Download Resume" }),
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                                    Object(a.jsxs)("div", {
                                                        className: "featured-post border-corner-bl",
                                                        children: [
                                                            Object(a.jsx)("img", { src: "images/section/35.jpg", alt: "images" }),
                                                            Object(a.jsxs)("div", {
                                                                className: "site-list has-border text-center animate-element wow delay5 fadeInUp",
                                                                "data-wow-delay": "0.3s",
                                                                children: [
                                                                    Object(a.jsx)(l.b, { to: "#", className: "bg-s1", children: Object(a.jsx)("i", { className: "fa fa-twitter", "aria-hidden": "true" }) }),
                                                                    Object(a.jsx)(l.b, { to: "#", className: "bg-s2", children: Object(a.jsx)("i", { className: "fa fa-behance", "aria-hidden": "true" }) }),
                                                                    Object(a.jsx)(l.b, { to: "#", className: "bg-s3", children: Object(a.jsx)("span", { className: "icon-dribble" }) }),
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            Object(a.jsxs)("div", {
                                                className: "iconbox-s4 t2 color-s2 border-corner5 animate-element wow delay5 fadeZooming",
                                                "data-wow-delay": "0.3s",
                                                children: [
                                                    Object(a.jsx)("div", { className: "avatar position-relative", children: Object(a.jsx)("img", { src: "images/footer/01.jpg", alt: "images" }) }),
                                                    Object(a.jsxs)("div", {
                                                        className: "content-inner",
                                                        children: [
                                                            Object(a.jsx)("h4", { className: "name lt-sp04 mg-b16 text-white position-relative", children: "Available for Project" }),
                                                            Object(a.jsx)("div", { className: "fl-btn btn-general", children: Object(a.jsx)(l.b, { to: "#", className: "text-white border-corner2", children: "Hire Me" }) }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        ],
                                    });
                                },
                            },
                        ]),
                        t
                    );
                })(c.Component),
                K = (function (e) {
                    Object(j.a)(t, e);
                    var s = Object(b.a)(t);
                    function t() {
                        return Object(d.a)(this, t), s.apply(this, arguments);
                    }
                    return (
                        Object(o.a)(t, [
                            {
                                key: "render",
                                value: function () {
                                    return Object(a.jsx)("div", {
                                        className: "tf-modal-content",
                                        children: Object(a.jsxs)("section", {
                                            className: "about-me t2 s3 shape-am position-relative",
                                            id: "about",
                                            children: [
                                                Object(a.jsx)(M, {}),
                                                Object(a.jsx)("div", {
                                                    className: "container",
                                                    children: Object(a.jsxs)("div", {
                                                        className: "row position-relative",
                                                        children: [
                                                            Object(a.jsx)("div", {
                                                                className: "col-lg-7 animate-element wow delay5 fadeInDown",
                                                                "data-wow-delay": "0.5s",
                                                                children: Object(a.jsxs)("div", {
                                                                    className: "flat-title t2",
                                                                    children: [
                                                                        Object(a.jsx)("h4", { className: "sub-title mg-b22", children: "About Me" }),
                                                                        Object(a.jsx)("h2", { className: "title-section color-d12 mg-b41", children: "Hi, I am here to help your next project!" }),
                                                                        Object(a.jsxs)("div", {
                                                                            className: "description",
                                                                            children: [
                                                                                Object(a.jsx)("p", {
                                                                                    className: "lt-sp01",
                                                                                    children:
                                                                                        "Hi, if you need  PSD template, landing page or Website design within a day? then you can tell me, I'm here to help you. I can design any kind of PSD template. Check my portfolio.",
                                                                                }),
                                                                                Object(a.jsx)("p", {
                                                                                    className: "lt-sp01",
                                                                                    children:
                                                                                        "If you need  PSD template, landing page or Website design within a day? then you can tell me, I'm here to help you. I can design any kind of PSD template. Check my portfolio.",
                                                                                }),
                                                                            ],
                                                                        }),
                                                                    ],
                                                                }),
                                                            }),
                                                            Object(a.jsxs)("div", {
                                                                className: "fact",
                                                                children: [
                                                                    Object(a.jsx)(R, {}),
                                                                    Object(a.jsxs)("div", {
                                                                        className: "btn-contact bg-s1 text-center",
                                                                        children: [
                                                                            Object(a.jsx)("h4", { className: "title color-d12", children: "Get a project? Let\u2019s talk." }),
                                                                            Object(a.jsx)(l.b, { to: "#", className: "email color-s1 color-d14", children: "yourmail@email.com" }),
                                                                        ],
                                                                    }),
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                }),
                                            ],
                                        }),
                                    });
                                },
                            },
                        ]),
                        t
                    );
                })(c.Component),
                Q = (function (e) {
                    Object(j.a)(t, e);
                    var s = Object(b.a)(t);
                    function t(e) {
                        var a;
                        return (
                            Object(d.a)(this, t),
                            ((a = s.call(this, e)).state = {
                                card: [
                                    { id: 1, classimg: "featured-post mg-b43", srcimg: "./images/section/20.png", altimg: "images", title: "Web UI Design", text01: "I'm a professional UX designer with", text02: "4 years of experience." },
                                    {
                                        id: 2,
                                        classimg: "featured-post mg-b42",
                                        srcimg: "./images/section/21.png",
                                        altimg: "images",
                                        title: "Mobile UI Design",
                                        text01: "I'm a professional UX designer with",
                                        text02: "4 years of experience.",
                                    },
                                    { id: 3, classimg: "featured-post mg-b40", srcimg: "./images/section/22.png", altimg: "images", title: "Branding Design", text01: "I'm a professional UX designer with", text02: "4 years of experience." },
                                ],
                            }),
                            a
                        );
                    }
                    return (
                        Object(o.a)(t, [
                            {
                                key: "render",
                                value: function () {
                                    return Object(a.jsxs)("div", {
                                        className: "tf-modal-content",
                                        children: [
                                            Object(a.jsx)("section", {
                                                className: "experienced s3 banner-section",
                                                id: "services",
                                                children: Object(a.jsx)("div", {
                                                    className: "container",
                                                    children: Object(a.jsxs)("div", {
                                                        className: "background-inner bg-s1",
                                                        children: [
                                                            Object(a.jsx)("div", {
                                                                className: "flat-title animate-element wow delay5 fadeInDown",
                                                                "data-wow-delay": "0.5s",
                                                                children: Object(a.jsx)("h2", { className: "title-section color-d19 mg-b44 text-center", children: "SPECILIZING IN" }),
                                                            }),
                                                            Object(a.jsx)("div", {
                                                                className: "row animate-element wow delay5 fadeInUp",
                                                                "data-wow-delay": "0.5s",
                                                                children: this.state.card.map(function (e) {
                                                                    return Object(a.jsx)(
                                                                        "div",
                                                                        {
                                                                            className: "col-lg-4",
                                                                            children: Object(a.jsxs)("div", {
                                                                                className: "iconbox-s2",
                                                                                children: [
                                                                                    Object(a.jsx)("div", { className: e.classimg, children: Object(a.jsx)("img", { src: e.srcimg, alt: e.altimg }) }),
                                                                                    Object(a.jsx)("h3", { className: "title mg-b21", children: Object(a.jsx)(l.b, { to: "#", children: e.title }) }),
                                                                                    Object(a.jsxs)("p", { children: [e.text01, " ", Object(a.jsx)("br", {}), e.text02] }),
                                                                                ],
                                                                            }),
                                                                        },
                                                                        e.id
                                                                    );
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                                }),
                                            }),
                                            Object(a.jsx)("section", {
                                                className: "get-project s3 position-relative",
                                                children: Object(a.jsx)("div", {
                                                    className: "container",
                                                    children: Object(a.jsxs)("div", {
                                                        className: "row",
                                                        children: [
                                                            Object(a.jsx)("div", {
                                                                className: "col-lg-6 col-12",
                                                                children: Object(a.jsx)("div", {
                                                                    className: "featured-post animate-element wow delay5 fadeZooming",
                                                                    "data-wow-delay": "0.5s",
                                                                    children: Object(a.jsx)("img", { src: "images/section/38.png", alt: "images" }),
                                                                }),
                                                            }),
                                                            Object(a.jsx)("div", {
                                                                className: "col-lg-6 col-12",
                                                                children: Object(a.jsxs)("div", {
                                                                    className: "content-inner animate-element wow delay5 fadeInDown",
                                                                    "data-wow-delay": "0.5s",
                                                                    children: [
                                                                        Object(a.jsx)("h2", { className: "title mg-b14 text-white", children: "Say Hello!" }),
                                                                        Object(a.jsxs)("div", {
                                                                            className: "site-list has-border",
                                                                            children: [
                                                                                Object(a.jsx)(l.b, { to: "#", className: "bg-s1", children: Object(a.jsx)("i", { className: "fa fa-twitter", "aria-hidden": "true" }) }),
                                                                                Object(a.jsx)(l.b, { to: "#", className: "bg-s2", children: Object(a.jsx)("i", { className: "fa fa-behance", "aria-hidden": "true" }) }),
                                                                                Object(a.jsx)(l.b, { to: "#", className: "bg-s3", children: Object(a.jsx)("span", { className: "icon-dribble" }) }),
                                                                            ],
                                                                        }),
                                                                    ],
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                                }),
                                            }),
                                        ],
                                    });
                                },
                            },
                        ]),
                        t
                    );
                })(c.Component),
                ee = (function (e) {
                    Object(j.a)(t, e);
                    var s = Object(b.a)(t);
                    function t(e) {
                        var a;
                        return (
                            Object(d.a)(this, t),
                            ((a = s.call(this, e)).state = {
                                contenttop: [
                                    {
                                        id: 1,
                                        classname: "experience-box experience-box-line t3",
                                        datawow: "0.3s",
                                        year: "Universite of Udacity",
                                        title: "User Experience Design",
                                        text: "User experience (UX) design is the process design teams use to create products.",
                                    },
                                    {
                                        id: 2,
                                        classname: "experience-box experience-box-line t3",
                                        datawow: "0.5s",
                                        year: "Udemy",
                                        title: "User Centered Design",
                                        text: "User experience (UX) design is the process design teams use to create products.",
                                    },
                                    { id: 3, classname: "experience-box t3", datawow: "0.7s", year: "Skil Share", title: "Interaction Design", text: "User experience (UX) design is the process design teams use to create products." },
                                ],
                                contentbot: [
                                    {
                                        id: 1,
                                        classname: "experience-box experience-box-line t3",
                                        datawow: "0.8s",
                                        year: "2013 - 2015",
                                        title: "Designer at",
                                        office: "Microsoft",
                                        text: "User experience (UX) design is the process design teams use to create products.",
                                    },
                                    {
                                        id: 2,
                                        classname: "experience-box experience-box-line t3",
                                        datawow: "1s",
                                        year: "2013 - 2017",
                                        title: "User Researcher at",
                                        office: "Apple",
                                        text: "User experience (UX) design is the process design teams use to create products.",
                                    },
                                    {
                                        id: 3,
                                        classname: "experience-box t3",
                                        datawow: "1.2s",
                                        year: "2017 - 2020",
                                        title: "Lead Designer at",
                                        office: "Dripple",
                                        text: "User experience (UX) design is the process design teams use to create products.",
                                    },
                                ],
                            }),
                            a
                        );
                    }
                    return (
                        Object(o.a)(t, [
                            {
                                key: "render",
                                value: function () {
                                    return Object(a.jsxs)("div", {
                                        className: "animate-element delay5 fadeInUp",
                                        children: [
                                            Object(a.jsx)("div", {
                                                className: "padding-bottom",
                                                children: Object(a.jsx)("div", {
                                                    className: "row",
                                                    children: this.state.contenttop.map(function (e) {
                                                        return Object(a.jsx)(
                                                            "div",
                                                            {
                                                                className: "col-lg-4 col-12 last-col animate-element wow delay5 fadeIn",
                                                                "data-wow-delay": e.datawow,
                                                                children: Object(a.jsx)("div", {
                                                                    className: e.classname,
                                                                    children: Object(a.jsxs)("div", {
                                                                        className: "box-inner",
                                                                        children: [
                                                                            Object(a.jsx)("h3", { className: "f-info bg-s1 color-d6", children: e.year }),
                                                                            Object(a.jsxs)("div", {
                                                                                className: "exp-wrap",
                                                                                children: [Object(a.jsx)("div", { className: "s-info mg-b11", children: e.title }), Object(a.jsx)("p", { children: e.text })],
                                                                            }),
                                                                        ],
                                                                    }),
                                                                }),
                                                            },
                                                            e.id
                                                        );
                                                    }),
                                                }),
                                            }),
                                            Object(a.jsx)("div", {
                                                className: "row",
                                                children: this.state.contentbot.map(function (e) {
                                                    return Object(a.jsx)(
                                                        "div",
                                                        {
                                                            className: "col-lg-4 col-12 last-col animate-element wow delay5 fadeIn",
                                                            "data-wow-delay": e.datawow,
                                                            children: Object(a.jsx)("div", {
                                                                className: e.classname,
                                                                children: Object(a.jsxs)("div", {
                                                                    className: "box-inner",
                                                                    children: [
                                                                        Object(a.jsx)("h3", { className: "f-info bg-s1 color-d6", children: e.year }),
                                                                        Object(a.jsxs)("div", {
                                                                            className: "exp-wrap",
                                                                            children: [
                                                                                Object(a.jsxs)("div", { className: "s-info mg-b11", children: [e.title, " ", Object(a.jsx)(l.b, { to: "#", children: e.office })] }),
                                                                                Object(a.jsx)("p", { children: e.text }),
                                                                            ],
                                                                        }),
                                                                    ],
                                                                }),
                                                            }),
                                                        },
                                                        e.id
                                                    );
                                                }),
                                            }),
                                        ],
                                    });
                                },
                            },
                        ]),
                        t
                    );
                })(c.Component),
                se = (function (e) {
                    Object(j.a)(t, e);
                    var s = Object(b.a)(t);
                    function t() {
                        return Object(d.a)(this, t), s.apply(this, arguments);
                    }
                    return (
                        Object(o.a)(t, [
                            {
                                key: "render",
                                value: function () {
                                    return Object(a.jsx)("div", {
                                        className: "tf-modal-content",
                                        children: Object(a.jsx)("section", {
                                            className: "flat-education s3 position-relative banner-section",
                                            id: "resume",
                                            children: Object(a.jsxs)("div", {
                                                className: "container",
                                                children: [
                                                    Object(a.jsxs)("div", {
                                                        className: "flat-title t2 animate-element wow delay5 fadeInDown",
                                                        "data-wow-delay": "0.5s",
                                                        children: [
                                                            Object(a.jsx)("h4", { className: "sub-title mg-b13", children: "Educational qualification" }),
                                                            Object(a.jsx)("h2", { className: "title-section color-d12", children: "Education & Experience" }),
                                                        ],
                                                    }),
                                                    Object(a.jsx)(ee, {}),
                                                ],
                                            }),
                                        }),
                                    });
                                },
                            },
                        ]),
                        t
                    );
                })(c.Component),
                te = (function (e) {
                    Object(j.a)(t, e);
                    var s = Object(b.a)(t);
                    function t() {
                        return Object(d.a)(this, t), s.apply(this, arguments);
                    }
                    return (
                        Object(o.a)(t, [
                            {
                                key: "render",
                                value: function () {
                                    return Object(a.jsx)("div", {
                                        className: "tf-modal-content",
                                        children: Object(a.jsx)("section", {
                                            className: "flat-case-study s3",
                                            id: "portfolio",
                                            children: Object(a.jsx)("div", {
                                                className: "container",
                                                children: Object(a.jsxs)("div", {
                                                    className: "d-md-flex",
                                                    children: [
                                                        Object(a.jsxs)("div", {
                                                            className: "col-left animate-element wow delay5 fadeInDown",
                                                            "data-wow-delay": "0.5s",
                                                            children: [
                                                                Object(a.jsxs)("div", {
                                                                    className: "image-link t1",
                                                                    children: [
                                                                        Object(a.jsx)("div", {
                                                                            className: "featured-post",
                                                                            children: Object(a.jsx)(l.b, { to: "#", children: Object(a.jsx)("img", { src: "images/section/40.jpg", alt: "images" }) }),
                                                                        }),
                                                                        Object(a.jsx)("div", { className: "portfolio-template-link text-center", children: Object(a.jsx)(l.b, { to: "#", children: "Portfolio Template" }) }),
                                                                    ],
                                                                }),
                                                                Object(a.jsx)("div", {
                                                                    className: "image-link t1",
                                                                    children: Object(a.jsx)("div", {
                                                                        className: "featured-post",
                                                                        children: Object(a.jsx)(l.b, { to: "#", children: Object(a.jsx)("img", { src: "images/section/41.jpg", alt: "images" }) }),
                                                                    }),
                                                                }),
                                                                Object(a.jsx)("div", { className: "fl-btn text-center", children: Object(a.jsx)(l.b, { to: "#", className: "f-w500", children: "Explore More" }) }),
                                                            ],
                                                        }),
                                                        Object(a.jsx)("div", { className: "flat-spacer", "data-desktop": 0, "data-mobile": 100, "data-smobile": 100 }),
                                                        Object(a.jsxs)("div", {
                                                            className: "col-right animate-element wow delay5 fadeInUp",
                                                            "data-wow-delay": "0.5s",
                                                            children: [
                                                                Object(a.jsxs)("div", {
                                                                    className: "flat-title t2 mg-b60",
                                                                    children: [
                                                                        Object(a.jsx)("h4", { className: "sub-title mg-b13", children: "Portfolio" }),
                                                                        Object(a.jsx)("h2", { className: "title-section color-d12 mg-b20", children: "Few selected works." }),
                                                                        Object(a.jsx)("p", { children: "I'm a professional UX designer with 4 years of experience. My main focus is on listening and understanding your users." }),
                                                                    ],
                                                                }),
                                                                Object(a.jsxs)("div", {
                                                                    className: "pd-right",
                                                                    children: [
                                                                        Object(a.jsx)("div", {
                                                                            className: "image-link t1",
                                                                            children: Object(a.jsx)("div", {
                                                                                className: "featured-post",
                                                                                children: Object(a.jsx)(l.b, { to: "#", children: Object(a.jsx)("img", { src: "images/section/42.jpg", alt: "images" }) }),
                                                                            }),
                                                                        }),
                                                                        Object(a.jsx)("div", {
                                                                            className: "image-link t1",
                                                                            children: Object(a.jsx)("div", {
                                                                                className: "featured-post",
                                                                                children: Object(a.jsx)(l.b, { to: "#", children: Object(a.jsx)("img", { src: "images/section/43.jpg", alt: "images" }) }),
                                                                            }),
                                                                        }),
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                            }),
                                        }),
                                    });
                                },
                            },
                        ]),
                        t
                    );
                })(c.Component),
                ae = (function (e) {
                    Object(j.a)(t, e);
                    var s = Object(b.a)(t);
                    function t() {
                        return Object(d.a)(this, t), s.apply(this, arguments);
                    }
                    return (
                        Object(o.a)(t, [
                            {
                                key: "render",
                                value: function () {
                                    return Object(a.jsx)("div", {
                                        className: "tf-modal-content justify-content-end",
                                        children: Object(a.jsxs)("footer", {
                                            id: "footer",
                                            className: "footer footer-s2",
                                            children: [
                                                Object(a.jsx)("div", {
                                                    className: "container",
                                                    children: Object(a.jsxs)("div", {
                                                        id: "footer-widget",
                                                        className: "footer-widget-s3 border-bottom-s1 position-relative",
                                                        children: [
                                                            Object(a.jsx)("h3", { className: "widget-title larger color-d10 lt-sp06 text-center", children: "Let\u2019s try me!" }),
                                                            Object(a.jsxs)("div", {
                                                                className: "site-list site-list-center text-center",
                                                                children: [
                                                                    Object(a.jsx)(l.b, { to: "#", className: "bg-s1", children: Object(a.jsx)("i", { className: "fa fa-twitter", "aria-hidden": "true" }) }),
                                                                    Object(a.jsx)(l.b, { to: "#", className: "bg-s2", children: Object(a.jsx)("i", { className: "fa fa-behance", "aria-hidden": "true" }) }),
                                                                    Object(a.jsx)(l.b, { to: "#", className: "bg-s3", children: Object(a.jsx)("span", { className: "icon-dribble" }) }),
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                }),
                                                Object(a.jsx)("div", {
                                                    id: "bottom",
                                                    className: "bottom-s3",
                                                    children: Object(a.jsx)("div", {
                                                        className: "container",
                                                        children: Object(a.jsxs)("div", {
                                                            className: "row",
                                                            children: [
                                                                Object(a.jsx)("div", { className: "col-lg-4", children: Object(a.jsx)("div", { className: "copyright lt-sp02", children: "\xa9 Roy Design, 2020 All rights reserved." }) }),
                                                                Object(a.jsx)("div", {
                                                                    className: "col-lg-6",
                                                                    children: Object(a.jsxs)("ul", {
                                                                        className: "widget-nav-menu color-s2",
                                                                        children: [
                                                                            Object(a.jsx)("li", { children: Object(a.jsx)(l.b, { to: "#", children: "Home" }) }),
                                                                            Object(a.jsx)("li", { children: Object(a.jsx)(l.b, { to: "#", children: "Portfolio" }) }),
                                                                            Object(a.jsx)("li", { children: Object(a.jsx)(l.b, { to: "#", children: "About" }) }),
                                                                            Object(a.jsx)("li", { children: Object(a.jsx)(l.b, { to: "#", children: "Contact" }) }),
                                                                        ],
                                                                    }),
                                                                }),
                                                                Object(a.jsx)("div", {
                                                                    className: "col-lg-2",
                                                                    children: Object(a.jsxs)("div", {
                                                                        className: "socials-list color-s2",
                                                                        children: [
                                                                            Object(a.jsx)(l.b, { to: "#", children: Object(a.jsx)("i", { className: "fa fa-facebook", "aria-hidden": "true" }) }),
                                                                            Object(a.jsx)(l.b, { to: "#", children: Object(a.jsx)("i", { className: "fa fa-twitter", "aria-hidden": "true" }) }),
                                                                            Object(a.jsx)(l.b, { to: "#", children: Object(a.jsx)("i", { className: "fa fa-instagram", "aria-hidden": "true" }) }),
                                                                        ],
                                                                    }),
                                                                }),
                                                            ],
                                                        }),
                                                    }),
                                                }),
                                            ],
                                        }),
                                    });
                                },
                            },
                        ]),
                        t
                    );
                })(c.Component),
                ce = (function (e) {
                    Object(j.a)(t, e);
                    var s = Object(b.a)(t);
                    function t() {
                        return Object(d.a)(this, t), s.apply(this, arguments);
                    }
                    return (
                        Object(o.a)(t, [
                            {
                                key: "render",
                                value: function () {
                                    return Object(a.jsxs)("div", {
                                        className: "body-copyright-light fixed counter-scroll has-one-page home3",
                                        children: [
                                            Object(a.jsx)("div", { id: "mobile-menu-overlay", children: Object(a.jsx)("span", { className: "tf-close" }) }),
                                            Object(a.jsx)($, {}),
                                            Object(a.jsx)("div", {
                                                id: "content",
                                                className: "content",
                                                children: Object(a.jsxs)("div", {
                                                    className: "homepage-personal",
                                                    children: [Object(a.jsx)(V, {}), Object(a.jsx)(K, {}), Object(a.jsx)(Q, {}), Object(a.jsx)(se, {}), Object(a.jsx)(te, {}), Object(a.jsx)(G, {}), Object(a.jsx)(ae, {})],
                                                }),
                                            }),
                                        ],
                                    });
                                },
                            },
                        ]),
                        t
                    );
                })(c.Component),
                ie = (function (e) {
                    Object(j.a)(t, e);
                    var s = Object(b.a)(t);
                    function t(e) {
                        var a;
                        return Object(d.a)(this, t), ((a = s.call(this, e)).state = {}), a;
                    }
                    return (
                        Object(o.a)(t, [
                            {
                                key: "render",
                                value: function () {
                                    return Object(a.jsx)("header", {
                                        id: "header",
                                        className: "header header-style4 has-menu-model",
                                        children: Object(a.jsx)("div", {
                                            className: "container",
                                            children: Object(a.jsxs)("div", {
                                                className: "flex-header d-flex justify-content-between align-items-center",
                                                children: [
                                                    Object(a.jsx)("div", {
                                                        id: "logo",
                                                        className: "logo",
                                                        children: Object(a.jsx)(l.b, {
                                                            to: "/",
                                                            onClick: function () {
                                                                window.location.href = "/";
                                                            },
                                                            title: "Logo",
                                                            children: Object(a.jsx)("img", { src: "images/logo/02.png", alt: "images", "data-width": 122, "data-height": 34, "data-retina": "images/logo/02@2x.png" }),
                                                        }),
                                                    }),
                                                    Object(a.jsxs)("div", {
                                                        dir: "rtl",
                                                        className: "btn-menu mobile-header__menu-button",
                                                        children: [
                                                            Object(a.jsx)("div", { className: "line line-1" }),
                                                            Object(a.jsx)("div", { className: "line line-2" }),
                                                            Object(a.jsx)("div", { className: "line line-3" }),
                                                            Object(a.jsx)("div", { className: "line line-4" }),
                                                        ],
                                                    }),
                                                    Object(a.jsx)("div", {
                                                        className: "content-menu d-lg-flex",
                                                        children: Object(a.jsx)("div", {
                                                            className: "nav-wrap",
                                                            children: Object(a.jsx)("nav", {
                                                                id: "mainnav",
                                                                className: "mainnav",
                                                                children: Object(a.jsxs)("ul", {
                                                                    className: "menu ace-responsive-menu",
                                                                    "data-menu-style": "horizontal",
                                                                    children: [
                                                                        Object(a.jsxs)("li", {
                                                                            children: [
                                                                                Object(a.jsx)(l.b, { to: "/", className: "active", children: "Home" }),
                                                                                Object(a.jsx)("ul", {
                                                                                    className: "sub-menu",
                                                                                    children: m.map(function (e) {
                                                                                        return Object(a.jsx)(
                                                                                            "li",
                                                                                            {
                                                                                                children: Object(a.jsx)(l.b, {
                                                                                                    to: e.tolink,
                                                                                                    onClick: function () {
                                                                                                        window.location.href = e.tolink;
                                                                                                    },
                                                                                                    className: 4 === e.id ? "active" : "",
                                                                                                    children: e.namelink,
                                                                                                }),
                                                                                            },
                                                                                            e.id
                                                                                        );
                                                                                    }),
                                                                                }),
                                                                            ],
                                                                        }),
                                                                        h.map(function (e) {
                                                                            return Object(a.jsx)("li", { children: Object(a.jsx)(l.b, { to: e.tomenu, className: "click-model", children: e.namemenu }) }, e.id);
                                                                        }),
                                                                        Object(a.jsxs)("li", {
                                                                            children: [
                                                                                Object(a.jsx)(l.b, { to: "#", children: "Blog" }),
                                                                                Object(a.jsx)("ul", {
                                                                                    className: "sub-menu",
                                                                                    children: x.map(function (e) {
                                                                                        return Object(a.jsx)(
                                                                                            "li",
                                                                                            {
                                                                                                children: Object(a.jsx)(l.b, {
                                                                                                    to: e.toblog,
                                                                                                    onClick: function () {
                                                                                                        window.location.href = e.toblog;
                                                                                                    },
                                                                                                    children: e.nameblog,
                                                                                                }),
                                                                                            },
                                                                                            e.id
                                                                                        );
                                                                                    }),
                                                                                }),
                                                                            ],
                                                                        }),
                                                                    ],
                                                                }),
                                                            }),
                                                        }),
                                                    }),
                                                    Object(a.jsxs)("div", {
                                                        className: "socials-list-hd s3 hv2",
                                                        children: [
                                                            Object(a.jsx)(l.b, { to: "#", children: Object(a.jsx)("i", { className: "fa fa-facebook", "aria-hidden": "true" }) }),
                                                            Object(a.jsx)(l.b, { to: "#", children: Object(a.jsx)("i", { className: "fa fa-instagram", "aria-hidden": "true" }) }),
                                                            Object(a.jsx)(l.b, { to: "#", children: Object(a.jsx)("i", { className: "fa fa-twitter", "aria-hidden": "true" }) }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        }),
                                    });
                                },
                            },
                        ]),
                        t
                    );
                })(c.Component),
                ne = (function (e) {
                    Object(j.a)(t, e);
                    var s = Object(b.a)(t);
                    function t() {
                        return Object(d.a)(this, t), s.apply(this, arguments);
                    }
                    return (
                        Object(o.a)(t, [
                            {
                                key: "render",
                                value: function () {
                                    return Object(a.jsxs)("section", {
                                        className: "banner-section s4 two-home",
                                        id: "home",
                                        children: [
                                            Object(a.jsxs)("div", {
                                                className: "container",
                                                children: [
                                                    Object(a.jsxs)("div", {
                                                        className: "content-text position-relative",
                                                        children: [
                                                            Object(a.jsxs)("div", {
                                                                className: "animate-element wow delay5 fadeInDown",
                                                                "data-wow-delay": "0.3s",
                                                                children: [
                                                                    Object(a.jsx)("div", { className: "tag color-d1 lt-sp53 mg-b34", children: "Product Designer" }),
                                                                    Object(a.jsxs)("h1", {
                                                                        className: "cd-headline clip is-full-width title color-d11 mg-b41",
                                                                        children: [
                                                                            Object(a.jsx)("span", { children: "Hello, " }),
                                                                            Object(a.jsxs)("span", {
                                                                                className: "cd-words-wrapper color-d6",
                                                                                children: [
                                                                                    Object(a.jsx)("b", { className: "is-visible", children: "I\u2019m PAL!" }),
                                                                                    Object(a.jsx)("b", { children: "I\u2019m Olivia!" }),
                                                                                    Object(a.jsx)("b", { children: "I\u2019m Amelia!" }),
                                                                                ],
                                                                            }),
                                                                        ],
                                                                    }),
                                                                    Object(a.jsxs)("p", {
                                                                        className: "color-d13 lt-sp02 mg-b51",
                                                                        children: ["Hi, i m perry, professional ux designer with 4 years ", Object(a.jsx)("br", {}), "of experience. Need any help?"],
                                                                    }),
                                                                ],
                                                            }),
                                                            Object(a.jsx)("div", {
                                                                className: "animate-element wow delay5 fadeInUp",
                                                                "data-wow-delay": "0.3s",
                                                                children: Object(a.jsx)("div", {
                                                                    className: "fl-btn btn-general color-s2 btn-hv-border",
                                                                    children: Object(a.jsx)(l.b, { to: "#", className: "f-w500 color-d6 border-corner5 lt-sp01 text-two", children: "Download Resume" }),
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                                    Object(a.jsxs)("div", {
                                                        className: "featured-post border-corner-bl",
                                                        children: [
                                                            Object(a.jsx)("img", { src: "images/section/47.jpg", alt: "images" }),
                                                            Object(a.jsxs)("div", {
                                                                className: "site-list has-border text-center animate-element wow delay5 fadeInUp",
                                                                "data-wow-delay": "0.3s",
                                                                children: [
                                                                    Object(a.jsx)(l.b, { to: "#", className: "bg-s1", children: Object(a.jsx)("i", { className: "fa fa-twitter", "aria-hidden": "true" }) }),
                                                                    Object(a.jsx)(l.b, { to: "#", className: "bg-s2", children: Object(a.jsx)("i", { className: "fa fa-behance", "aria-hidden": "true" }) }),
                                                                    Object(a.jsx)(l.b, { to: "#", className: "bg-s3", children: Object(a.jsx)("span", { className: "icon-dribble" }) }),
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            Object(a.jsxs)("div", {
                                                className: "iconbox-s4 t2 color-s2 border-corner5 animate-element wow delay5 fadeZooming",
                                                "data-wow-delay": "0.3s",
                                                children: [
                                                    Object(a.jsx)("div", { className: "avatar position-relative", children: Object(a.jsx)("img", { src: "images/footer/01.jpg", alt: "images" }) }),
                                                    Object(a.jsxs)("div", {
                                                        className: "content-inner",
                                                        children: [
                                                            Object(a.jsx)("h4", { className: "name lt-sp04 mg-b16 text-white position-relative", children: "Available for Project" }),
                                                            Object(a.jsx)("div", { className: "fl-btn btn-general", children: Object(a.jsx)(l.b, { to: "#", className: "text-white border-corner2", children: "Hire Me" }) }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        ],
                                    });
                                },
                            },
                        ]),
                        t
                    );
                })(c.Component),
                le = (function (e) {
                    Object(j.a)(t, e);
                    var s = Object(b.a)(t);
                    function t(e) {
                        var a;
                        return (
                            Object(d.a)(this, t),
                            ((a = s.call(this, e)).state = {
                                colleft: [
                                    { id: 1, item: "f-item color-s2 counter mg-f-item1", datato: "284", text: "Hapy Client" },
                                    { id: 2, item: "f-item color-s3 counter mg-f-item2", datato: "165", text: "Review" },
                                ],
                                colright: [{ id: 1, item: "f-item color-s4 counter mg-f-item3", datato: "379", text: "Project Complate" }],
                            }),
                            a
                        );
                    }
                    return (
                        Object(o.a)(t, [
                            {
                                key: "render",
                                value: function () {
                                    return Object(a.jsxs)("div", {
                                        className: "d-md-flex mg-b40",
                                        children: [
                                            Object(a.jsx)("div", {
                                                className: "col-left",
                                                children: this.state.colleft.map(function (e) {
                                                    return Object(a.jsx)(
                                                        "div",
                                                        {
                                                            className: e.item,
                                                            children: Object(a.jsx)("div", {
                                                                className: "counter-box bg-s2 d-flex justify-content-center align-items-center",
                                                                children: Object(a.jsxs)("div", {
                                                                    className: "inner",
                                                                    children: [
                                                                        Object(a.jsx)("span", { className: "numb-count", "data-from": 0, "data-to": e.datato, "data-speed": 2e3, "data-inviewport": "yes", children: e.datato }),
                                                                        Object(a.jsx)("p", { children: e.text }),
                                                                    ],
                                                                }),
                                                            }),
                                                        },
                                                        e.id
                                                    );
                                                }),
                                            }),
                                            Object(a.jsx)("div", {
                                                className: "col-right",
                                                children: this.state.colright.map(function (e) {
                                                    return Object(a.jsx)(
                                                        "div",
                                                        {
                                                            className: e.item,
                                                            children: Object(a.jsx)("div", {
                                                                className: "counter-box bg-s2 d-flex justify-content-center align-items-center",
                                                                children: Object(a.jsxs)("div", {
                                                                    className: "inner",
                                                                    children: [
                                                                        Object(a.jsx)("span", { className: "numb-count", "data-from": 0, "data-to": e.datato, "data-speed": 2e3, "data-inviewport": "yes", children: e.datato }),
                                                                        Object(a.jsx)("p", { children: e.text }),
                                                                    ],
                                                                }),
                                                            }),
                                                        },
                                                        e.id
                                                    );
                                                }),
                                            }),
                                        ],
                                    });
                                },
                            },
                        ]),
                        t
                    );
                })(c.Component),
                re = (function (e) {
                    Object(j.a)(t, e);
                    var s = Object(b.a)(t);
                    function t() {
                        return Object(d.a)(this, t), s.apply(this, arguments);
                    }
                    return (
                        Object(o.a)(t, [
                            {
                                key: "render",
                                value: function () {
                                    return Object(a.jsxs)("section", {
                                        className: "about-me t2 s3 shape-am position-relative",
                                        id: "about",
                                        children: [
                                            Object(a.jsx)("div", { className: "section-icons", children: Object(a.jsx)(M, {}) }),
                                            Object(a.jsx)("div", {
                                                className: "container",
                                                children: Object(a.jsxs)("div", {
                                                    className: "row position-relative",
                                                    children: [
                                                        Object(a.jsx)("div", {
                                                            className: "col-lg-7 animate-element wow delay5 fadeInDown",
                                                            children: Object(a.jsxs)("div", {
                                                                className: "flat-title t2",
                                                                children: [
                                                                    Object(a.jsx)("h4", { className: "sub-title mg-b22", children: "About Me" }),
                                                                    Object(a.jsx)("h2", { className: "title-section color-d11 mg-b41", children: "Hi, I am here to help your next project!" }),
                                                                    Object(a.jsxs)("div", {
                                                                        className: "description",
                                                                        children: [
                                                                            Object(a.jsx)("p", {
                                                                                className: "color-d13 lt-sp01",
                                                                                children:
                                                                                    "Hi, if you need  PSD template, landing page or Website design within a day? then you can tell me, I'm here to help you. I can design any kind of PSD template. Check my portfolio.",
                                                                            }),
                                                                            Object(a.jsx)("p", {
                                                                                className: "color-d13 lt-sp01",
                                                                                children:
                                                                                    "If you need  PSD template, landing page or Website design within a day? then you can tell me, I'm here to help you. I can design any kind of PSD template. Check my portfolio.",
                                                                            }),
                                                                        ],
                                                                    }),
                                                                ],
                                                            }),
                                                        }),
                                                        Object(a.jsxs)("div", {
                                                            className: "fact",
                                                            children: [
                                                                Object(a.jsx)(le, {}),
                                                                Object(a.jsxs)("div", {
                                                                    className: "btn-contact bg-s2 text-center",
                                                                    children: [
                                                                        Object(a.jsx)("h4", { className: "title color-d11", children: "Get a project? Let\u2019s talk." }),
                                                                        Object(a.jsx)(l.b, { to: "#", className: "email color-s2 color-d15", children: "yourmail@email.com" }),
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                            }),
                                            Object(a.jsx)("div", { className: "featured-post animate-element wow delay5 fadeInUp", "data-wow-delay": "0.5s", children: Object(a.jsx)("img", { src: "images/section/51.png", alt: "images" }) }),
                                        ],
                                    });
                                },
                            },
                        ]),
                        t
                    );
                })(c.Component),
                de = (function (e) {
                    Object(j.a)(t, e);
                    var s = Object(b.a)(t);
                    function t(e) {
                        var a;
                        return (
                            Object(d.a)(this, t),
                            ((a = s.call(this, e)).state = {
                                card: [
                                    { id: 1, classimg: "featured-post mg-b43", srcimg: "./images/section/20.png", altimg: "images", title: "Web UI Design", text01: "I'm a professional UX designer with", text02: "4 years of experience." },
                                    {
                                        id: 2,
                                        classimg: "featured-post mg-b42",
                                        srcimg: "./images/section/21.png",
                                        altimg: "images",
                                        title: "Mobile UI Design",
                                        text01: "I'm a professional UX designer with",
                                        text02: "4 years of experience.",
                                    },
                                    { id: 3, classimg: "featured-post mg-b40", srcimg: "./images/section/22.png", altimg: "images", title: "Branding Design", text01: "I'm a professional UX designer with", text02: "4 years of experience." },
                                ],
                            }),
                            a
                        );
                    }
                    return (
                        Object(o.a)(t, [
                            {
                                key: "render",
                                value: function () {
                                    return Object(a.jsx)("section", {
                                        className: "experienced s3",
                                        id: "services",
                                        children: Object(a.jsx)("div", {
                                            className: "container",
                                            children: Object(a.jsxs)("div", {
                                                className: "background-inner bg-s2",
                                                children: [
                                                    Object(a.jsx)("div", {
                                                        className: "flat-title animate-element wow delay5 fadeInDown",
                                                        "data-wow-delay": "0.5s",
                                                        children: Object(a.jsx)("h2", { className: "title-section color-d11 mg-b44 text-center", children: "SPECILIZING IN" }),
                                                    }),
                                                    Object(a.jsx)("div", {
                                                        className: "row animate-element wow delay5 fadeInUp",
                                                        "data-wow-delay": "0.5s",
                                                        children: this.state.card.map(function (e) {
                                                            return Object(a.jsx)(
                                                                "div",
                                                                {
                                                                    className: "col-lg-4",
                                                                    children: Object(a.jsxs)("div", {
                                                                        className: "iconbox-s2",
                                                                        children: [
                                                                            Object(a.jsx)("div", { className: e.classimg, children: Object(a.jsx)("img", { src: e.srcimg, alt: e.altimg }) }),
                                                                            Object(a.jsx)("h3", { className: "title mg-b21", children: Object(a.jsx)(l.b, { to: "#", className: "color-d11", children: e.title }) }),
                                                                            Object(a.jsxs)("p", { className: "color-d13", children: [e.text01, " ", Object(a.jsx)("br", {}), e.text02] }),
                                                                        ],
                                                                    }),
                                                                },
                                                                e.id
                                                            );
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        }),
                                    });
                                },
                            },
                        ]),
                        t
                    );
                })(c.Component),
                oe = (function (e) {
                    Object(j.a)(t, e);
                    var s = Object(b.a)(t);
                    function t() {
                        return Object(d.a)(this, t), s.apply(this, arguments);
                    }
                    return (
                        Object(o.a)(t, [
                            {
                                key: "render",
                                value: function () {
                                    return Object(a.jsx)("section", {
                                        className: "get-project s4",
                                        children: Object(a.jsx)("div", {
                                            className: "container",
                                            children: Object(a.jsxs)("div", {
                                                className: "row",
                                                children: [
                                                    Object(a.jsx)("div", {
                                                        className: "col-lg-6",
                                                        children: Object(a.jsx)("div", {
                                                            className: "featured-post animate-element wow delay5 fadeZooming",
                                                            "data-wow-delay": "0.5s",
                                                            children: Object(a.jsx)("img", { src: "images/section/38.png", alt: "images" }),
                                                        }),
                                                    }),
                                                    Object(a.jsx)("div", {
                                                        className: "col-lg-6",
                                                        children: Object(a.jsxs)("div", {
                                                            className: "content-inner animate-element wow delay5 fadeInUp",
                                                            "data-wow-delay": "0.5s",
                                                            children: [
                                                                Object(a.jsx)("h2", { className: "title mg-b14 color-d11", children: "Say Hello!" }),
                                                                Object(a.jsxs)("div", {
                                                                    className: "site-list has-border",
                                                                    children: [
                                                                        Object(a.jsx)(l.b, { to: "#", className: "bg-s1", children: Object(a.jsx)("i", { className: "fa fa-twitter", "aria-hidden": "true" }) }),
                                                                        Object(a.jsx)(l.b, { to: "#", className: "bg-s2", children: Object(a.jsx)("i", { className: "fa fa-behance", "aria-hidden": "true" }) }),
                                                                        Object(a.jsx)(l.b, { to: "#", className: "bg-s3", children: Object(a.jsx)("i", { className: "fa fa-twitter", "aria-hidden": "true" }) }),
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        }),
                                    });
                                },
                            },
                        ]),
                        t
                    );
                })(c.Component),
                je = (function (e) {
                    Object(j.a)(t, e);
                    var s = Object(b.a)(t);
                    function t(e) {
                        var a;
                        return (
                            Object(d.a)(this, t),
                            ((a = s.call(this, e)).state = {
                                contenttop: [
                                    {
                                        id: 1,
                                        classname: "experience-box experience-box-line t3",
                                        datawow: "0.3s",
                                        year: "Universite of Udacity",
                                        title: "User Experience Design",
                                        text: "User experience (UX) design is the process design teams use to create products.",
                                    },
                                    {
                                        id: 2,
                                        classname: "experience-box experience-box-line t3",
                                        datawow: "0.5s",
                                        year: "Udemy",
                                        title: "User Centered Design",
                                        text: "User experience (UX) design is the process design teams use to create products.",
                                    },
                                    { id: 3, classname: "experience-box t3", datawow: "0.7s", year: "Skil Share", title: "Interaction Design", text: "User experience (UX) design is the process design teams use to create products." },
                                ],
                                contentbot: [
                                    {
                                        id: 1,
                                        classname: "experience-box experience-box-line t3",
                                        datawow: "0.8s",
                                        year: "2013 - 2015",
                                        title: "Designer at",
                                        office: "Microsoft",
                                        text: "User experience (UX) design is the process design teams use to create products.",
                                    },
                                    {
                                        id: 2,
                                        classname: "experience-box experience-box-line t3",
                                        datawow: "1s",
                                        year: "2013 - 2017",
                                        title: "User Researcher at",
                                        office: "Apple",
                                        text: "User experience (UX) design is the process design teams use to create products.",
                                    },
                                    {
                                        id: 3,
                                        classname: "experience-box t3",
                                        datawow: "1.2s",
                                        year: "2017 - 2020",
                                        title: "Lead Designer at",
                                        office: "Dripple",
                                        text: "User experience (UX) design is the process design teams use to create products.",
                                    },
                                ],
                            }),
                            a
                        );
                    }
                    return (
                        Object(o.a)(t, [
                            {
                                key: "render",
                                value: function () {
                                    return Object(a.jsxs)("div", {
                                        className: "animate-element delay5 fadeInUp",
                                        children: [
                                            Object(a.jsx)("div", {
                                                className: "padding-bottom",
                                                children: Object(a.jsx)("div", {
                                                    className: "row",
                                                    children: this.state.contenttop.map(function (e) {
                                                        return Object(a.jsx)(
                                                            "div",
                                                            {
                                                                className: "col-lg-4 col-12 last-col animate-element wow delay5 fadeIn",
                                                                "data-wow-delay": e.datawow,
                                                                children: Object(a.jsx)("div", {
                                                                    className: e.classname,
                                                                    children: Object(a.jsxs)("div", {
                                                                        className: "box-inner",
                                                                        children: [
                                                                            Object(a.jsx)("h3", { className: "f-info bg-s2 color-d6", children: e.year }),
                                                                            Object(a.jsxs)("div", {
                                                                                className: "exp-wrap",
                                                                                children: [Object(a.jsx)("div", { className: "s-info color-d11 mg-b11", children: e.title }), Object(a.jsx)("p", { className: "color-d13", children: e.text })],
                                                                            }),
                                                                        ],
                                                                    }),
                                                                }),
                                                            },
                                                            e.id
                                                        );
                                                    }),
                                                }),
                                            }),
                                            Object(a.jsx)("div", {
                                                className: "row",
                                                children: this.state.contentbot.map(function (e) {
                                                    return Object(a.jsx)(
                                                        "div",
                                                        {
                                                            className: "col-lg-4 col-12 last-col animate-element wow delay5 fadeIn",
                                                            "data-wow-delay": e.datawow,
                                                            children: Object(a.jsx)("div", {
                                                                className: e.classname,
                                                                children: Object(a.jsxs)("div", {
                                                                    className: "box-inner",
                                                                    children: [
                                                                        Object(a.jsx)("h3", { className: "f-info bg-s2 color-d6", children: e.year }),
                                                                        Object(a.jsxs)("div", {
                                                                            className: "exp-wrap",
                                                                            children: [
                                                                                Object(a.jsxs)("div", { className: "s-info color-d11 mg-b11", children: [e.title, " ", Object(a.jsx)(l.b, { to: "#", children: e.office })] }),
                                                                                Object(a.jsx)("p", { className: "color-d13", children: e.text }),
                                                                            ],
                                                                        }),
                                                                    ],
                                                                }),
                                                            }),
                                                        },
                                                        e.id
                                                    );
                                                }),
                                            }),
                                        ],
                                    });
                                },
                            },
                        ]),
                        t
                    );
                })(c.Component),
                be = (function (e) {
                    Object(j.a)(t, e);
                    var s = Object(b.a)(t);
                    function t() {
                        return Object(d.a)(this, t), s.apply(this, arguments);
                    }
                    return (
                        Object(o.a)(t, [
                            {
                                key: "render",
                                value: function () {
                                    return Object(a.jsx)("section", {
                                        className: "flat-education s3 position-relative",
                                        id: "resume",
                                        children: Object(a.jsxs)("div", {
                                            className: "container",
                                            children: [
                                                Object(a.jsxs)("div", {
                                                    className: "flat-title t2 animate-element wow delay5 fadeInDown",
                                                    "data-wow-delay": "0.5s",
                                                    children: [
                                                        Object(a.jsx)("h4", { className: "sub-title mg-b13", children: "Educational qualification" }),
                                                        Object(a.jsx)("h2", { className: "title-section color-d11", children: "Education & Experience" }),
                                                    ],
                                                }),
                                                Object(a.jsx)(je, {}),
                                            ],
                                        }),
                                    });
                                },
                            },
                        ]),
                        t
                    );
                })(c.Component),
                me = (function (e) {
                    Object(j.a)(t, e);
                    var s = Object(b.a)(t);
                    function t() {
                        return Object(d.a)(this, t), s.apply(this, arguments);
                    }
                    return (
                        Object(o.a)(t, [
                            {
                                key: "render",
                                value: function () {
                                    return Object(a.jsx)("section", {
                                        className: "flat-case-study s3",
                                        id: "portfolio",
                                        children: Object(a.jsx)("div", {
                                            className: "container",
                                            children: Object(a.jsxs)("div", {
                                                className: "d-md-flex",
                                                children: [
                                                    Object(a.jsxs)("div", {
                                                        className: "col-left animate-element wow delay5 fadeInDown",
                                                        "data-wow-delay": "0.5s",
                                                        children: [
                                                            Object(a.jsxs)("div", {
                                                                className: "image-link t2",
                                                                children: [
                                                                    Object(a.jsx)("div", {
                                                                        className: "featured-post",
                                                                        children: Object(a.jsx)(l.b, { to: "#", children: Object(a.jsx)("img", { src: "images/section/52.jpg", alt: "images" }) }),
                                                                    }),
                                                                    Object(a.jsx)("div", {
                                                                        className: "portfolio-template-link text-center",
                                                                        children: Object(a.jsx)(l.b, { to: "#", className: "text-white", children: "Portfolio Template" }),
                                                                    }),
                                                                ],
                                                            }),
                                                            Object(a.jsx)("div", {
                                                                className: "image-link t2",
                                                                children: Object(a.jsx)("div", {
                                                                    className: "featured-post",
                                                                    children: Object(a.jsx)(l.b, { to: "#", children: Object(a.jsx)("img", { src: "images/section/53.jpg", alt: "images" }) }),
                                                                }),
                                                            }),
                                                            Object(a.jsx)("div", { className: "fl-btn text-center", children: Object(a.jsx)(l.b, { to: "#", className: "f-w500", children: "Explore More" }) }),
                                                        ],
                                                    }),
                                                    Object(a.jsx)("div", { className: "flat-spacer", "data-desktop": 0, "data-mobile": 100, "data-smobile": 100 }),
                                                    Object(a.jsxs)("div", {
                                                        className: "col-right animate-element wow delay5 fadeInUp",
                                                        "data-wow-delay": "0.5s",
                                                        children: [
                                                            Object(a.jsxs)("div", {
                                                                className: "flat-title t2 mg-b60",
                                                                children: [
                                                                    Object(a.jsx)("h4", { className: "sub-title mg-b13", children: "Portfolio" }),
                                                                    Object(a.jsx)("h2", { className: "title-section color-d11 mg-b20", children: "Few selected works." }),
                                                                    Object(a.jsx)("p", {
                                                                        className: "color-d13",
                                                                        children: "I'm a professional UX designer with 4 years of experience. My main focus is on listening and understanding your users.",
                                                                    }),
                                                                ],
                                                            }),
                                                            Object(a.jsxs)("div", {
                                                                className: "pd-right",
                                                                children: [
                                                                    Object(a.jsx)("div", {
                                                                        className: "image-link t2",
                                                                        children: Object(a.jsx)("div", {
                                                                            className: "featured-post",
                                                                            children: Object(a.jsx)(l.b, { to: "#", children: Object(a.jsx)("img", { src: "images/section/54.jpg", alt: "images" }) }),
                                                                        }),
                                                                    }),
                                                                    Object(a.jsx)("div", {
                                                                        className: "image-link t2",
                                                                        children: Object(a.jsx)("div", {
                                                                            className: "featured-post",
                                                                            children: Object(a.jsx)(l.b, { to: "#", children: Object(a.jsx)("img", { src: "images/section/55.jpg", alt: "images" }) }),
                                                                        }),
                                                                    }),
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        }),
                                    });
                                },
                            },
                        ]),
                        t
                    );
                })(c.Component),
                he = (function (e) {
                    Object(j.a)(t, e);
                    var s = Object(b.a)(t);
                    function t(e) {
                        var a;
                        return (
                            Object(d.a)(this, t),
                            ((a = s.call(this, e)).state = {
                                images: [
                                    { id: 1, image: "./images/blog/04.jpg", alt: "images" },
                                    { id: 2, image: "./images/blog/09.jpg", alt: "images" },
                                    { id: 3, image: "./images/blog/10.jpg", alt: "images" },
                                ],
                                testimonial: [
                                    {
                                        id: 1,
                                        text:
                                            "\u201cExcellent design, great communication, fast turnaround of revisions. I had a clear vision of what I wanted. Ranaroy did not just deliver it he a improved upon it substantially. Recommended!\u201d",
                                        name: "Davin Heily",
                                        office: "at CEO Brisben",
                                    },
                                    {
                                        id: 2,
                                        text:
                                            "\u201cExcellent design, great communication, fast turnaround of revisions. I had a clear vision of what I wanted. Ranaroy did not just deliver it he a improved upon it substantially. Recommended!\u201d",
                                        name: "Davin Heily",
                                        office: "at CEO Brisben",
                                    },
                                    {
                                        id: 3,
                                        text:
                                            "\u201cExcellent design, great communication, fast turnaround of revisions. I had a clear vision of what I wanted. Ranaroy did not just deliver it he a improved upon it substantially. Recommended!\u201d",
                                        name: "Davin Heily",
                                        office: "at CEO Brisben",
                                    },
                                ],
                            }),
                            a
                        );
                    }
                    return (
                        Object(o.a)(t, [
                            {
                                key: "render",
                                value: function () {
                                    return Object(a.jsxs)("section", {
                                        className: "testimonial t2 s2 bg-s2 position-relative",
                                        id: "testimonial",
                                        children: [
                                            Object(a.jsx)("div", { className: "background-right bg-cl3", children: Object(a.jsx)("div", { className: "text-testimonial color-d18", children: "Testimonial" }) }),
                                            Object(a.jsx)("div", { className: "background-transparent bg-cl5" }),
                                            Object(a.jsxs)("div", {
                                                className: "container d-lg-flex",
                                                children: [
                                                    Object(a.jsxs)("div", {
                                                        className: "col-left animate-element wow delay5 fadeInDown",
                                                        "data-wow-delay": "0.5s",
                                                        children: [
                                                            Object(a.jsx)("div", { className: "flat-spacer", "data-desktop": 4, "data-mobile": 0, "data-smobile": 0 }),
                                                            Object(a.jsxs)("div", {
                                                                className: "wrap-box bg-white position-relative",
                                                                children: [
                                                                    Object(a.jsx)("div", { className: "featured-post mg-b27", children: Object(a.jsx)("img", { src: "images/blog/11.jpg", alt: "images" }) }),
                                                                    Object(a.jsx)("div", {
                                                                        className: "images-list d-flex justify-content-between",
                                                                        children: this.state.images.map(function (e) {
                                                                            return Object(a.jsx)("img", { src: e.image, alt: e.alt }, e.id);
                                                                        }),
                                                                    }),
                                                                    Object(a.jsx)("div", { className: "quote", children: Object(a.jsx)("img", { src: "images/testimonial/09.png", alt: "images" }) }),
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                    Object(a.jsxs)("div", {
                                                        className: "col-right animate-element wow delay5 fadeInUp",
                                                        "data-wow-delay": "0.5s",
                                                        children: [
                                                            Object(a.jsx)("div", { className: "flat-spacer", "data-desktop": 0, "data-mobile": 100, "data-smobile": 100 }),
                                                            Object(a.jsxs)("div", {
                                                                className: "flat-title t2",
                                                                children: [
                                                                    Object(a.jsx)("h4", { className: "sub-title mg-b13", children: "Testimonial" }),
                                                                    Object(a.jsx)("h2", { className: "title-section color-d11 mg-b20", children: "Client Brief" }),
                                                                ],
                                                            }),
                                                            Object(a.jsx)("div", {
                                                                className: "slider-drop-apps custom-dot dot-s1 none-nav-default mg-dots-s3",
                                                                children: Object(a.jsx)("div", {
                                                                    className: "flat-carousel-box data-effect clearfix",
                                                                    "data-gap": 0,
                                                                    "data-column": 1,
                                                                    "data-column2": 1,
                                                                    "data-column3": 1,
                                                                    "data-column4": 1,
                                                                    "data-column5": 1,
                                                                    "data-dots": "true",
                                                                    "data-auto": "false",
                                                                    "data-nav": "false",
                                                                    "data-loop": "true",
                                                                    children: Object(a.jsx)("div", {
                                                                        className: "owl-carousel",
                                                                        children: this.state.testimonial.map(function (e) {
                                                                            return Object(a.jsxs)(
                                                                                "div",
                                                                                {
                                                                                    className: "client-info",
                                                                                    children: [
                                                                                        Object(a.jsx)("p", { className: "color-d13", children: e.text }),
                                                                                        Object(a.jsxs)("div", {
                                                                                            className: "client-detail color-d13",
                                                                                            children: [Object(a.jsx)("span", { className: "color-d6 f-w500", children: e.name }), " ", e.office],
                                                                                        }),
                                                                                    ],
                                                                                },
                                                                                e.id
                                                                            );
                                                                        }),
                                                                    }),
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        ],
                                    });
                                },
                            },
                        ]),
                        t
                    );
                })(c.Component),
                xe = (function (e) {
                    Object(j.a)(t, e);
                    var s = Object(b.a)(t);
                    function t() {
                        return Object(d.a)(this, t), s.apply(this, arguments);
                    }
                    return (
                        Object(o.a)(t, [
                            {
                                key: "render",
                                value: function () {
                                    return Object(a.jsx)("div", {
                                        className: "tf-modal-content justify-content-end",
                                        children: Object(a.jsxs)("footer", {
                                            id: "footer",
                                            className: "footer footer-s4",
                                            children: [
                                                Object(a.jsx)("div", {
                                                    className: "container",
                                                    children: Object(a.jsxs)("div", {
                                                        id: "footer-widget",
                                                        className: "footer-widget-s3 border-bottom-s2 position-relative",
                                                        children: [
                                                            Object(a.jsx)("h3", { className: "widget-title larger lt-sp06 text-white text-center", children: "Let\u2019s try me!" }),
                                                            Object(a.jsxs)("div", {
                                                                className: "site-list site-list-center text-center",
                                                                children: [
                                                                    Object(a.jsx)(l.b, { to: "#", className: "bg-s1", children: Object(a.jsx)("i", { className: "fa fa-twitter", "aria-hidden": "true" }) }),
                                                                    Object(a.jsx)(l.b, { to: "#", className: "bg-s2", children: Object(a.jsx)("i", { className: "fa fa-behance", "aria-hidden": "true" }) }),
                                                                    Object(a.jsx)(l.b, { to: "#", className: "bg-s3", children: Object(a.jsx)("span", { className: "icon-dribble" }) }),
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                }),
                                                Object(a.jsx)("div", {
                                                    id: "bottom",
                                                    className: "bottom-s3",
                                                    children: Object(a.jsx)("div", {
                                                        className: "container",
                                                        children: Object(a.jsxs)("div", {
                                                            className: "row",
                                                            children: [
                                                                Object(a.jsx)("div", { className: "col-lg-4", children: Object(a.jsx)("div", { className: "copyright lt-sp02", children: "\xa9 Roy Design, 2020 All rights reserved." }) }),
                                                                Object(a.jsx)("div", {
                                                                    className: "col-lg-6",
                                                                    children: Object(a.jsxs)("ul", {
                                                                        className: "widget-nav-menu color-s2",
                                                                        children: [
                                                                            Object(a.jsx)("li", { children: Object(a.jsx)(l.b, { to: "#", children: "Home" }) }),
                                                                            Object(a.jsx)("li", { children: Object(a.jsx)(l.b, { to: "#", children: "Portfolio" }) }),
                                                                            Object(a.jsx)("li", { children: Object(a.jsx)(l.b, { to: "#", children: "About" }) }),
                                                                            Object(a.jsx)("li", { children: Object(a.jsx)(l.b, { to: "#", children: "Contact" }) }),
                                                                        ],
                                                                    }),
                                                                }),
                                                                Object(a.jsx)("div", {
                                                                    className: "col-lg-2",
                                                                    children: Object(a.jsxs)("div", {
                                                                        className: "socials-list color-s2",
                                                                        children: [
                                                                            Object(a.jsx)(l.b, { to: "#", children: Object(a.jsx)("i", { className: "fa fa-facebook", "aria-hidden": "true" }) }),
                                                                            Object(a.jsx)(l.b, { to: "#", children: Object(a.jsx)("i", { className: "fa fa-twitter", "aria-hidden": "true" }) }),
                                                                            Object(a.jsx)(l.b, { to: "#", children: Object(a.jsx)("i", { className: "fa fa-instagram", "aria-hidden": "true" }) }),
                                                                        ],
                                                                    }),
                                                                }),
                                                            ],
                                                        }),
                                                    }),
                                                }),
                                            ],
                                        }),
                                    });
                                },
                            },
                        ]),
                        t
                    );
                })(c.Component),
                Oe = (function (e) {
                    Object(j.a)(t, e);
                    var s = Object(b.a)(t);
                    function t() {
                        return Object(d.a)(this, t), s.apply(this, arguments);
                    }
                    return (
                        Object(o.a)(t, [
                            {
                                key: "render",
                                value: function () {
                                    return Object(a.jsxs)("div", {
                                        className: "counter-scroll background-wrap-home4 fixed counter-scroll home4 has-one-page",
                                        children: [
                                            Object(a.jsx)("div", { id: "mobile-menu-overlay" }),
                                            Object(a.jsx)(ie, {}),
                                            Object(a.jsx)("div", {
                                                id: "content",
                                                className: "content",
                                                children: Object(a.jsxs)("div", {
                                                    className: "homepage-personal",
                                                    children: [
                                                        Object(a.jsx)(ne, {}),
                                                        Object(a.jsx)(re, {}),
                                                        Object(a.jsx)(de, {}),
                                                        Object(a.jsx)(oe, {}),
                                                        Object(a.jsx)(be, {}),
                                                        Object(a.jsx)(me, {}),
                                                        Object(a.jsx)(he, {}),
                                                        Object(a.jsx)(xe, {}),
                                                    ],
                                                }),
                                            }),
                                        ],
                                    });
                                },
                            },
                        ]),
                        t
                    );
                })(c.Component),
                ue = (function (e) {
                    Object(j.a)(t, e);
                    var s = Object(b.a)(t);
                    function t(e) {
                        var a;
                        return Object(d.a)(this, t), ((a = s.call(this, e)).state = {}), a;
                    }
                    return (
                        Object(o.a)(t, [
                            {
                                key: "render",
                                value: function () {
                                    return Object(a.jsx)("header", {
                                        id: "header",
                                        className: "header header-style1",
                                        children: Object(a.jsx)("div", {
                                            className: "container",
                                            children: Object(a.jsxs)("div", {
                                                className: "flex-header d-flex justify-content-between align-items-center",
                                                children: [
                                                    Object(a.jsxs)("div", {
                                                        className: "socials-list-hd s1 hv1",
                                                        children: [
                                                            Object(a.jsx)(l.b, { to: "#", children: Object(a.jsx)("i", { className: "fa fa-facebook", "aria-hidden": "true" }) }),
                                                            Object(a.jsx)(l.b, { to: "#", children: Object(a.jsx)("i", { className: "fa fa-twitter", "aria-hidden": "true" }) }),
                                                            Object(a.jsx)(l.b, { to: "#", children: Object(a.jsx)("i", { className: "fa fa-instagram", "aria-hidden": "true" }) }),
                                                        ],
                                                    }),
                                                    Object(a.jsxs)("div", {
                                                        className: "content-menu d-lg-flex",
                                                        children: [
                                                            Object(a.jsx)("div", {
                                                                className: "nav-wrap",
                                                                children: Object(a.jsx)("nav", {
                                                                    id: "mainnav",
                                                                    className: "mainnav",
                                                                    children: Object(a.jsxs)("ul", {
                                                                        className: "menu ace-responsive-menu",
                                                                        "data-menu-style": "horizontal",
                                                                        children: [
                                                                            Object(a.jsxs)("li", {
                                                                                children: [
                                                                                    Object(a.jsx)(l.b, { to: "/", children: "Home" }),
                                                                                    Object(a.jsx)("ul", {
                                                                                        className: "sub-menu",
                                                                                        children: m.map(function (e) {
                                                                                            return Object(a.jsx)(
                                                                                                "li",
                                                                                                {
                                                                                                    children: Object(a.jsx)(l.b, {
                                                                                                        to: e.tolink,
                                                                                                        onClick: function () {
                                                                                                            window.location.href = e.tolink;
                                                                                                        },
                                                                                                        children: e.namelink,
                                                                                                    }),
                                                                                                },
                                                                                                e.id
                                                                                            );
                                                                                        }),
                                                                                    }),
                                                                                ],
                                                                            }),
                                                                            h.map(function (e) {
                                                                                return Object(a.jsx)("li", { children: Object(a.jsx)(l.b, { to: e.tomenu, className: "click-model", children: e.namemenu }) }, e.id);
                                                                            }),
                                                                            Object(a.jsxs)("li", {
                                                                                children: [
                                                                                    Object(a.jsx)(l.b, { to: "#", className: "active", children: "Blog" }),
                                                                                    Object(a.jsx)("ul", {
                                                                                        className: "sub-menu",
                                                                                        children: x.map(function (e) {
                                                                                            return Object(a.jsx)(
                                                                                                "li",
                                                                                                {
                                                                                                    children: Object(a.jsx)(l.b, {
                                                                                                        to: e.toblog,
                                                                                                        onClick: function () {
                                                                                                            window.location.href = e.toblog;
                                                                                                        },
                                                                                                        children: e.nameblog,
                                                                                                    }),
                                                                                                },
                                                                                                e.id
                                                                                            );
                                                                                        }),
                                                                                    }),
                                                                                ],
                                                                            }),
                                                                        ],
                                                                    }),
                                                                }),
                                                            }),
                                                            Object(a.jsx)("div", {
                                                                className: "hire-me-s1 btn-general btn-hv-common d-lg-flex align-items-center",
                                                                children: Object(a.jsx)(l.b, { to: "#", className: "btn-inner border-corner2 lt-sp08 text-white", children: "Hire Me" }),
                                                            }),
                                                        ],
                                                    }),
                                                    Object(a.jsxs)("div", {
                                                        dir: "rtl",
                                                        className: "btn-menu mobile-header__menu-button",
                                                        children: [
                                                            Object(a.jsx)("div", { className: "line line-1" }),
                                                            Object(a.jsx)("div", { className: "line line-2" }),
                                                            Object(a.jsx)("div", { className: "line line-3" }),
                                                            Object(a.jsx)("div", { className: "line line-4" }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        }),
                                    });
                                },
                            },
                        ]),
                        t
                    );
                })(c.Component),
                fe = (function (e) {
                    Object(j.a)(t, e);
                    var s = Object(b.a)(t);
                    function t() {
                        return Object(d.a)(this, t), s.apply(this, arguments);
                    }
                    return (
                        Object(o.a)(t, [
                            {
                                key: "render",
                                value: function () {
                                    return Object(a.jsxs)("div", {
                                        className: "sidebar",
                                        children: [
                                            Object(a.jsx)("div", {
                                                className: "widget widget-search",
                                                children: Object(a.jsxs)("form", {
                                                    action: "#",
                                                    className: "form-search position-relative",
                                                    children: [
                                                        Object(a.jsx)("input", { type: "text", className: "search", placeholder: "What are you looking for?" }),
                                                        Object(a.jsx)("button", { className: "btn-search", children: Object(a.jsx)("i", { className: "fa fa-search", "aria-hidden": "true" }) }),
                                                    ],
                                                }),
                                            }),
                                            Object(a.jsxs)("div", {
                                                className: "widget widget-follow-me",
                                                children: [
                                                    Object(a.jsx)("h3", { className: "widget-title", children: "Follow me" }),
                                                    Object(a.jsxs)("div", {
                                                        className: "social-network",
                                                        children: [
                                                            Object(a.jsxs)("div", {
                                                                className: "d-flex justify-content-between",
                                                                children: [
                                                                    Object(a.jsxs)("div", {
                                                                        className: "iconbox-s3 color-s1",
                                                                        children: [
                                                                            Object(a.jsx)("div", { className: "iconbox-icon", children: Object(a.jsx)("i", { className: "fa fa-behance", "aria-hidden": "true" }) }),
                                                                            Object(a.jsx)("span", { className: "likes lt-sp16 f-w500 color-d9", children: "2.5k" }),
                                                                        ],
                                                                    }),
                                                                    Object(a.jsxs)("div", {
                                                                        className: "iconbox-s3 color-s2",
                                                                        children: [
                                                                            Object(a.jsx)("div", { className: "iconbox-icon", children: Object(a.jsx)("i", { className: "fa fa-behance", "aria-hidden": "true" }) }),
                                                                            Object(a.jsx)("span", { className: "likes lt-sp16 f-w500 color-d9", children: "3.2k" }),
                                                                        ],
                                                                    }),
                                                                    Object(a.jsxs)("div", {
                                                                        className: "iconbox-s3 color-s3",
                                                                        children: [
                                                                            Object(a.jsx)("div", { className: "iconbox-icon", children: Object(a.jsx)("i", { className: "fa fa-twitter", "aria-hidden": "true" }) }),
                                                                            Object(a.jsx)("span", { className: "likes lt-sp16 f-w500 color-d9", children: "10k" }),
                                                                        ],
                                                                    }),
                                                                ],
                                                            }),
                                                            Object(a.jsxs)("div", {
                                                                className: "d-flex justify-content-between",
                                                                children: [
                                                                    Object(a.jsxs)("div", {
                                                                        className: "iconbox-s3 color-s4",
                                                                        children: [
                                                                            Object(a.jsx)("div", { className: "iconbox-icon", children: Object(a.jsx)("i", { className: "fa fa-facebook", "aria-hidden": "true" }) }),
                                                                            Object(a.jsx)("span", { className: "likes lt-sp16 f-w500 color-d9", children: "2.5k" }),
                                                                        ],
                                                                    }),
                                                                    Object(a.jsxs)("div", {
                                                                        className: "iconbox-s3 color-s5",
                                                                        children: [
                                                                            Object(a.jsx)("div", { className: "iconbox-icon", children: Object(a.jsx)("i", { className: "fa fa-instagram", "aria-hidden": "true" }) }),
                                                                            Object(a.jsx)("span", { className: "likes lt-sp16 f-w500 color-d9", children: "3.2k" }),
                                                                        ],
                                                                    }),
                                                                    Object(a.jsxs)("div", {
                                                                        className: "iconbox-s3 color-s1",
                                                                        children: [
                                                                            Object(a.jsx)("div", { className: "iconbox-icon", children: Object(a.jsx)("i", { className: "fa fa-instagram", "aria-hidden": "true" }) }),
                                                                            Object(a.jsx)("span", { className: "likes lt-sp16 f-w500 color-d9", children: "10k" }),
                                                                        ],
                                                                    }),
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            Object(a.jsxs)("div", {
                                                className: "widget widget-popular-post",
                                                children: [
                                                    Object(a.jsx)("h3", { className: "widget-title", children: "Popular Post" }),
                                                    Object(a.jsxs)("ul", {
                                                        className: "popular-post-list",
                                                        children: [
                                                            Object(a.jsx)("li", {
                                                                children: Object(a.jsxs)("div", {
                                                                    className: "d-flex",
                                                                    children: [Object(a.jsx)("span", { className: "order-number", children: "1" }), Object(a.jsx)(l.b, { to: "#", children: "How to improve your color sense" })],
                                                                }),
                                                            }),
                                                            Object(a.jsx)("li", {
                                                                children: Object(a.jsxs)("div", {
                                                                    className: "d-flex",
                                                                    children: [
                                                                        Object(a.jsx)("span", { className: "order-number", children: "2" }),
                                                                        Object(a.jsx)(l.b, { to: "#", className: "active", children: "Most beautiful thing on our design platfrom." }),
                                                                    ],
                                                                }),
                                                            }),
                                                            Object(a.jsx)("li", {
                                                                children: Object(a.jsxs)("div", {
                                                                    className: "d-flex",
                                                                    children: [Object(a.jsx)("span", { className: "order-number", children: "3" }), Object(a.jsx)(l.b, { to: "#", children: "Typography tips" })],
                                                                }),
                                                            }),
                                                            Object(a.jsx)("li", {
                                                                children: Object(a.jsxs)("div", {
                                                                    className: "d-flex",
                                                                    children: [
                                                                        Object(a.jsx)("span", { className: "order-number", children: "4" }),
                                                                        Object(a.jsx)(l.b, { to: "#", children: "UX Design practices: how to make web interface!" }),
                                                                    ],
                                                                }),
                                                            }),
                                                            Object(a.jsx)("li", {
                                                                children: Object(a.jsxs)("div", {
                                                                    className: "d-flex",
                                                                    children: [Object(a.jsx)("span", { className: "order-number", children: "5" }), Object(a.jsx)(l.b, { to: "#", children: "Death of Graphic Design" })],
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            Object(a.jsxs)("div", {
                                                className: "widget widget-categories",
                                                children: [
                                                    Object(a.jsx)("h3", { className: "widget-title", children: "Categories" }),
                                                    Object(a.jsxs)("ul", {
                                                        className: "categories-list",
                                                        children: [
                                                            Object(a.jsxs)("li", { children: [Object(a.jsx)(l.b, { to: "#", children: "All" }), Object(a.jsx)("span", { children: "(53)" })] }),
                                                            Object(a.jsxs)("li", { children: [Object(a.jsx)(l.b, { to: "#", children: "Design" }), Object(a.jsx)("span", { children: "(10)" })] }),
                                                            Object(a.jsxs)("li", { children: [Object(a.jsx)(l.b, { to: "#", children: "User experience" }), Object(a.jsx)("span", { children: "(7)" })] }),
                                                            Object(a.jsxs)("li", { children: [Object(a.jsx)(l.b, { to: "#", children: "Typography" }), Object(a.jsx)("span", { children: "(6)" })] }),
                                                            Object(a.jsxs)("li", { children: [Object(a.jsx)(l.b, { to: "#", children: "Color" }), Object(a.jsx)("span", { children: "(5)" })] }),
                                                            Object(a.jsxs)("li", { children: [Object(a.jsx)(l.b, { to: "#", children: "Freelancing" }), Object(a.jsx)("span", { children: "(9)" })] }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            Object(a.jsx)("div", {
                                                className: "widget widget-download text-center",
                                                children: Object(a.jsx)("div", {
                                                    className: "fl-btn btn-hv-common",
                                                    children: Object(a.jsxs)(l.b, { to: "#", className: "btn-inner text-white", children: ["Download ", Object(a.jsx)("br", {}), "Free Mockup"] }),
                                                }),
                                            }),
                                        ],
                                    });
                                },
                            },
                        ]),
                        t
                    );
                })(c.Component),
                pe = (function (e) {
                    Object(j.a)(t, e);
                    var s = Object(b.a)(t);
                    function t(e) {
                        var a;
                        return (
                            Object(d.a)(this, t),
                            ((a = s.call(this, e)).state = {
                                blog: [
                                    { id: 1, image: "./images/blog/01.jpg", alt: "images", author: "Design", date: "May 12, 2020", title: "Creating a UI Component design system (step-by-step)..." },
                                    { id: 2, image: "./images/blog/07.jpg", alt: "images", author: "Design", date: "May 12, 2020", title: "Developing your eye for design" },
                                    { id: 3, image: "./images/blog/08.jpg", alt: "images", author: "Design", date: "May 12, 2020", title: "Creating a UI Component design system (step-by-step)..." },
                                ],
                            }),
                            a
                        );
                    }
                    return (
                        Object(o.a)(t, [
                            {
                                key: "render",
                                value: function () {
                                    return Object(a.jsxs)("div", {
                                        className: "col-left",
                                        children: [
                                            this.state.blog.map(function (e) {
                                                return Object(a.jsxs)(
                                                    "article",
                                                    {
                                                        className: "blog-grid",
                                                        children: [
                                                            Object(a.jsx)("div", { className: "featured-post", children: Object(a.jsx)("img", { src: e.image, alt: "images" }) }),
                                                            Object(a.jsx)("div", {
                                                                className: "content-blog",
                                                                children: Object(a.jsxs)("div", {
                                                                    className: "post-meta d-flex justify-content-between",
                                                                    children: [
                                                                        Object(a.jsxs)("div", {
                                                                            className: "meta-inner",
                                                                            children: [Object(a.jsx)("span", { className: "author lt-sp03", children: e.author }), Object(a.jsx)("span", { className: "date lt-sp01", children: e.date })],
                                                                        }),
                                                                        Object(a.jsx)(l.b, {
                                                                            to: "#",
                                                                            children: Object(a.jsx)("svg", {
                                                                                focusable: "false",
                                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                                viewBox: "0 0 24 24",
                                                                                children: Object(a.jsx)("path", {
                                                                                    d:
                                                                                        "M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z",
                                                                                }),
                                                                            }),
                                                                        }),
                                                                    ],
                                                                }),
                                                            }),
                                                            Object(a.jsx)("h2", { className: "title", children: Object(a.jsx)(l.b, { to: "#", children: e.title }) }),
                                                        ],
                                                    },
                                                    e.id
                                                );
                                            }),
                                            Object(a.jsx)("div", {
                                                className: "flat-pagination blog-pagination",
                                                children: Object(a.jsxs)("ul", {
                                                    children: [
                                                        Object(a.jsx)("li", { children: Object(a.jsx)(l.b, { to: "#", className: "page-numbers current", children: "1" }) }),
                                                        Object(a.jsx)("li", { children: Object(a.jsx)(l.b, { to: "#", className: "page-numbers", children: "2" }) }),
                                                        Object(a.jsx)("li", { children: Object(a.jsx)(l.b, { to: "#", className: "page-numbers", children: "3" }) }),
                                                        Object(a.jsx)("li", { children: Object(a.jsx)(l.b, { to: "#", className: "page-numbers", children: "4" }) }),
                                                        Object(a.jsx)("li", { children: Object(a.jsx)(l.b, { to: "#", className: "page-numbers", children: "..." }) }),
                                                        Object(a.jsx)("li", { children: Object(a.jsx)(l.b, { to: "#", className: "page-numbers", children: "9" }) }),
                                                        Object(a.jsx)("li", { children: Object(a.jsx)(l.b, { to: "#", className: "page-numbers", children: Object(a.jsx)("i", { className: "fa fa-angle-right", "aria-hidden": "true" }) }) }),
                                                    ],
                                                }),
                                            }),
                                        ],
                                    });
                                },
                            },
                        ]),
                        t
                    );
                })(c.Component),
                ge = (function (e) {
                    Object(j.a)(t, e);
                    var s = Object(b.a)(t);
                    function t() {
                        return Object(d.a)(this, t), s.apply(this, arguments);
                    }
                    return (
                        Object(o.a)(t, [
                            {
                                key: "render",
                                value: function () {
                                    return Object(a.jsxs)("div", {
                                        className: "page-title position-relative d-flex",
                                        children: [
                                            Object(a.jsx)("div", { className: "overlay-left" }),
                                            Object(a.jsx)("div", { className: "overlay-right" }),
                                            Object(a.jsx)("div", {
                                                className: "container position-relative",
                                                children: Object(a.jsx)("div", {
                                                    className: "breadcrumbs",
                                                    children: Object(a.jsxs)("div", {
                                                        className: "breadcrumbs-wrap",
                                                        children: [
                                                            Object(a.jsx)("h1", { className: "title mg-b29 text-white", children: Object(a.jsx)("span", { className: "img-inner", children: "Blog" }) }),
                                                            Object(a.jsxs)("ul", {
                                                                className: "breadcrumbs-inner",
                                                                children: [
                                                                    Object(a.jsx)("li", { children: Object(a.jsx)(l.b, { to: "/", children: "Home" }) }),
                                                                    Object(a.jsx)("li", { children: Object(a.jsx)(l.b, { to: "/blog", children: "Blog" }) }),
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                }),
                                            }),
                                        ],
                                    });
                                },
                            },
                        ]),
                        t
                    );
                })(c.Component),
                Ne = (function (e) {
                    Object(j.a)(t, e);
                    var s = Object(b.a)(t);
                    function t() {
                        return Object(d.a)(this, t), s.apply(this, arguments);
                    }
                    return (
                        Object(o.a)(t, [
                            {
                                key: "render",
                                value: function () {
                                    return Object(a.jsxs)("footer", {
                                        id: "footer",
                                        className: "footer footer-s1",
                                        children: [
                                            Object(a.jsx)("div", {
                                                id: "footer-widget",
                                                className: "footer-widget-s4 footer-widget-line bg-s1 position-relative",
                                                children: Object(a.jsx)("div", {
                                                    className: "container",
                                                    children: Object(a.jsxs)("div", {
                                                        className: "widget-text text-center",
                                                        children: [
                                                            Object(a.jsx)("h3", { className: "widget-title small lt-sp06 mg-b63 text-white", children: "Stay Connected" }),
                                                            Object(a.jsx)("p", { className: "address mg-b2 text-white", children: "Sydney, Austrlia" }),
                                                            Object(a.jsx)("p", { className: "email mg-b5 text-white", children: "hello@dolio.com" }),
                                                            Object(a.jsx)("p", { className: "phone mg-b53 text-white", children: "+91 254 787 878" }),
                                                            Object(a.jsxs)("div", {
                                                                className: "site-list site-list-center",
                                                                children: [
                                                                    Object(a.jsx)(l.b, { to: "#", className: "bg-s1", children: Object(a.jsx)("i", { className: "fa fa-twitter", "aria-hidden": "true" }) }),
                                                                    Object(a.jsx)(l.b, { to: "#", className: "bg-s2", children: Object(a.jsx)("i", { className: "fa fa-behance", "aria-hidden": "true" }) }),
                                                                    Object(a.jsx)(l.b, { to: "#", className: "bg-s3", children: Object(a.jsx)("span", { className: "icon-dribble" }) }),
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                }),
                                            }),
                                            Object(a.jsx)("div", {
                                                id: "bottom",
                                                className: "bottom-s4",
                                                children: Object(a.jsx)("div", {
                                                    className: "container",
                                                    children: Object(a.jsxs)("div", {
                                                        className: "row",
                                                        children: [
                                                            Object(a.jsx)("div", { className: "col-lg-4 col-12", children: Object(a.jsx)("div", { className: "copyright lt-sp02", children: "\xa9 Roy Design, 2020 All rights reserved." }) }),
                                                            Object(a.jsx)("div", {
                                                                className: "col-lg-6 col-12",
                                                                children: Object(a.jsxs)("ul", {
                                                                    className: "widget-nav-menu color-s1",
                                                                    children: [
                                                                        Object(a.jsx)("li", { children: Object(a.jsx)(l.b, { to: "#", children: "Home" }) }),
                                                                        Object(a.jsx)("li", { children: Object(a.jsx)(l.b, { to: "#", children: "Portfolio" }) }),
                                                                        Object(a.jsx)("li", { children: Object(a.jsx)(l.b, { to: "#", children: "About" }) }),
                                                                        Object(a.jsx)("li", { children: Object(a.jsx)(l.b, { to: "#", children: "Contact" }) }),
                                                                    ],
                                                                }),
                                                            }),
                                                            Object(a.jsx)("div", {
                                                                className: "col-lg-2 col-12",
                                                                children: Object(a.jsxs)("div", {
                                                                    className: "socials-list color-s1",
                                                                    children: [
                                                                        Object(a.jsx)(l.b, { to: "#", children: Object(a.jsx)("i", { className: "fa fa-facebook", "aria-hidden": "true" }) }),
                                                                        Object(a.jsx)(l.b, { to: "#", children: Object(a.jsx)("i", { className: "fa fa-twitter", "aria-hidden": "true" }) }),
                                                                        Object(a.jsx)(l.b, { to: "#", children: Object(a.jsx)("i", { className: "fa fa-instagram", "aria-hidden": "true" }) }),
                                                                    ],
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                                }),
                                            }),
                                        ],
                                    });
                                },
                            },
                        ]),
                        t
                    );
                })(c.Component),
                ve = (function (e) {
                    Object(j.a)(t, e);
                    var s = Object(b.a)(t);
                    function t() {
                        return Object(d.a)(this, t), s.apply(this, arguments);
                    }
                    return (
                        Object(o.a)(t, [
                            {
                                key: "render",
                                value: function () {
                                    return Object(a.jsxs)("div", {
                                        className: "main-post",
                                        children: [
                                            Object(a.jsx)("div", { className: "featured-post", children: Object(a.jsx)("img", { src: "images/blog/01.jpg", alt: "images" }) }),
                                            Object(a.jsxs)("div", {
                                                className: "content-blog",
                                                children: [
                                                    Object(a.jsxs)("div", {
                                                        className: "post-meta d-flex justify-content-between",
                                                        children: [
                                                            Object(a.jsxs)("div", {
                                                                className: "meta-inner",
                                                                children: [Object(a.jsx)("span", { className: "author lt-sp03", children: "Design" }), Object(a.jsx)("span", { className: "date lt-sp01", children: "May 12, 2020" })],
                                                            }),
                                                            Object(a.jsx)(l.b, {
                                                                to: "#",
                                                                children: Object(a.jsx)("svg", {
                                                                    focusable: "false",
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    viewBox: "0 0 24 24",
                                                                    children: Object(a.jsx)("path", {
                                                                        d:
                                                                            "M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z",
                                                                    }),
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                                    Object(a.jsx)("h2", { className: "title", children: Object(a.jsx)(l.b, { to: "#", children: "Basic terms you should know in UX design." }) }),
                                                    Object(a.jsxs)("div", {
                                                        className: "mg-b60 d-sm-flex justify-content-between",
                                                        children: [
                                                            Object(a.jsxs)("div", {
                                                                className: "author-info-bls t1 d-flex",
                                                                children: [
                                                                    Object(a.jsxs)("div", {
                                                                        className: "avatar",
                                                                        children: [
                                                                            Object(a.jsx)("img", { src: "images/blog/02.jpg", alt: "images" }),
                                                                            Object(a.jsxs)("div", {
                                                                                className: "socials-list",
                                                                                children: [
                                                                                    Object(a.jsx)(l.b, { to: "#", children: Object(a.jsx)("i", { className: "fa fa-facebook", "aria-hidden": "true" }) }),
                                                                                    Object(a.jsx)(l.b, { to: "#", children: Object(a.jsx)("i", { className: "fa fa-twitter", "aria-hidden": "true" }) }),
                                                                                    Object(a.jsx)(l.b, { to: "#", children: Object(a.jsx)("i", { className: "fa fa-instagram", "aria-hidden": "true" }) }),
                                                                                ],
                                                                            }),
                                                                        ],
                                                                    }),
                                                                    Object(a.jsxs)("div", {
                                                                        className: "author-details",
                                                                        children: [
                                                                            Object(a.jsx)("h3", { className: "name color-d3 lt-sp09", children: "Perry Smith" }),
                                                                            Object(a.jsxs)("div", {
                                                                                className: "inner",
                                                                                children: [
                                                                                    Object(a.jsx)("span", { className: "post-date lt-sp02", children: "July 8, 2018" }),
                                                                                    Object(a.jsxs)("span", { className: "view", children: [Object(a.jsx)("i", { className: "fa fa-eye", "aria-hidden": "true" }), " 3.6k"] }),
                                                                                ],
                                                                            }),
                                                                            Object(a.jsx)("div", { className: "c-follow", children: Object(a.jsx)(l.b, { to: "#", className: "color-d3 lt-sp02", children: "Follow" }) }),
                                                                        ],
                                                                    }),
                                                                ],
                                                            }),
                                                            Object(a.jsx)("div", {
                                                                className: "circle-box",
                                                                children: Object(a.jsx)("div", {
                                                                    className: "chart text-center",
                                                                    "data-percent": 50,
                                                                    children: Object(a.jsxs)("div", {
                                                                        className: "circle-inner",
                                                                        children: [Object(a.jsx)("span", { className: "post-number color-d3", children: "15" }), Object(a.jsx)("p", { className: "color-d7", children: "Post" })],
                                                                    }),
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                                    Object(a.jsxs)("div", {
                                                        className: "description",
                                                        children: [
                                                            Object(a.jsx)("p", {
                                                                children:
                                                                    "Generally, a UX designers conduct user research, design, write UX copy, validate/test with user and sell/present the design solution to the business. It's the UX designer's role to be the voice of the user and advocate for the users needs while balancing the business goals",
                                                            }),
                                                            Object(a.jsx)("p", {
                                                                children: "Learn to think like a great designer. One common mistake designers make when they want to improve their design skills is trying to create trendy.",
                                                            }),
                                                            Object(a.jsx)("p", {
                                                                children:
                                                                    "Even at the entry level, UX salaries are impressive: According to Sullivan, Glassdoor's data currently has UX designer salary averages sitting at $80,928 per year for entry level jobs (0-1 years of experience), $104,580 per year for mid-level (7-9 years of experience), and $113,368 per year for senior positions.",
                                                            }),
                                                            Object(a.jsx)("p", {
                                                                children:
                                                                    "It's a very creative fast-paced role that holds a lot of weight and companies to understand enough to hire someone to do it. ... UX gives me a path to understand my user and build a design (and consequently a software) which will enrich/make easy his life in some way. This prospect is very fulfilling and interesting to me.",
                                                            }),
                                                        ],
                                                    }),
                                                    Object(a.jsxs)("div", {
                                                        className: "bottom-details d-sm-flex justify-content-between",
                                                        children: [
                                                            Object(a.jsx)("div", {
                                                                className: "comment-likes",
                                                                children: Object(a.jsxs)("div", {
                                                                    className: "d-flex",
                                                                    children: [
                                                                        Object(a.jsxs)("div", {
                                                                            className: "iconbox-s5 color-s1",
                                                                            children: [
                                                                                Object(a.jsx)("span", { className: "box-inner border-corner2", children: Object(a.jsx)("i", { className: "fa fa-comment", "aria-hidden": "true" }) }),
                                                                                Object(a.jsx)("span", { className: "number f-w500 color-d10", children: "150" }),
                                                                            ],
                                                                        }),
                                                                        Object(a.jsxs)("div", {
                                                                            className: "iconbox-s5 color-s2",
                                                                            children: [
                                                                                Object(a.jsx)("span", { className: "box-inner border-corner2", children: Object(a.jsx)("i", { className: "fa fa-thumbs-up", "aria-hidden": "true" }) }),
                                                                                Object(a.jsx)("span", { className: "number f-w500 color-d3", children: "1.2k" }),
                                                                            ],
                                                                        }),
                                                                    ],
                                                                }),
                                                            }),
                                                            Object(a.jsxs)("div", {
                                                                className: "review",
                                                                children: [
                                                                    Object(a.jsx)("i", { className: "fa fa-star", "aria-hidden": "true" }),
                                                                    Object(a.jsx)("i", { className: "fa fa-star", "aria-hidden": "true" }),
                                                                    Object(a.jsx)("i", { className: "fa fa-star", "aria-hidden": "true" }),
                                                                    Object(a.jsx)("i", { className: "fa fa-star", "aria-hidden": "true" }),
                                                                    Object(a.jsx)("i", { className: "fa fa-star", "aria-hidden": "true" }),
                                                                    Object(a.jsx)("span", { className: "number-of-reviewers", children: "(36)" }),
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                    Object(a.jsxs)("div", {
                                                        className: "reviews",
                                                        children: [
                                                            Object(a.jsxs)("div", {
                                                                className: "mg-b21 d-sm-flex justify-content-between",
                                                                children: [
                                                                    Object(a.jsx)("h3", { className: "title", children: "How Helpful It was? Please Make community Stronger." }),
                                                                    Object(a.jsxs)("div", {
                                                                        className: "comment-by-stars",
                                                                        children: [
                                                                            Object(a.jsx)("i", { className: "fa fa-star-o", "aria-hidden": "true" }),
                                                                            Object(a.jsx)("i", { className: "fa fa-star-o", "aria-hidden": "true" }),
                                                                            Object(a.jsx)("i", { className: "fa fa-star-o", "aria-hidden": "true" }),
                                                                            Object(a.jsx)("i", { className: "fa fa-star-o", "aria-hidden": "true" }),
                                                                            Object(a.jsx)("i", { className: "fa fa-star-o", "aria-hidden": "true" }),
                                                                        ],
                                                                    }),
                                                                ],
                                                            }),
                                                            Object(a.jsxs)("form", {
                                                                className: "review-form",
                                                                children: [
                                                                    Object(a.jsx)("textarea", { name: "message", placeholder: "Type your comment here", defaultValue: "" }),
                                                                    Object(a.jsx)("div", {
                                                                        className: "fl-btn btn-general btn-hv-common",
                                                                        children: Object(a.jsx)(l.b, { to: "#", className: "btn-inner border-corner2 text-white", children: "Add Comment" }),
                                                                    }),
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                    Object(a.jsx)("div", {
                                                        className: "comments-area",
                                                        children: Object(a.jsx)("div", {
                                                            className: "comments",
                                                            children: Object(a.jsxs)("ul", {
                                                                className: "comments-list",
                                                                children: [
                                                                    Object(a.jsx)("li", {
                                                                        children: Object(a.jsxs)("div", {
                                                                            className: "comment-wrap",
                                                                            children: [
                                                                                Object(a.jsxs)("div", {
                                                                                    className: "author-info-bls t2 position-relative d-flex",
                                                                                    children: [
                                                                                        Object(a.jsx)("div", { className: "avatar", children: Object(a.jsx)("img", { src: "images/blog/03.jpg", alt: "images" }) }),
                                                                                        Object(a.jsxs)("div", {
                                                                                            className: "author-details",
                                                                                            children: [
                                                                                                Object(a.jsx)("h3", { className: "name f-w500 color-d3 lt-sp09", children: "Danial Tim" }),
                                                                                                Object(a.jsxs)("div", {
                                                                                                    className: "inner",
                                                                                                    children: [
                                                                                                        Object(a.jsx)("span", { className: "post-date lt-sp02", children: "Comment" }),
                                                                                                        Object(a.jsx)("span", { className: "view", children: "July 8, 2018" }),
                                                                                                    ],
                                                                                                }),
                                                                                                Object(a.jsx)("div", { className: "c-follow", children: Object(a.jsx)(l.b, { to: "#", className: "color-d3 lt-sp02", children: "Follow" }) }),
                                                                                            ],
                                                                                        }),
                                                                                        Object(a.jsx)("div", {
                                                                                            className: "reply",
                                                                                            children: Object(a.jsx)(l.b, { to: "#", children: Object(a.jsx)("i", { className: "fa fa-reply", "aria-hidden": "true" }) }),
                                                                                        }),
                                                                                    ],
                                                                                }),
                                                                                Object(a.jsx)("p", {
                                                                                    children:
                                                                                        "Generally, a UX designers conduct user research, design, write UX copy, validate/test with user and sell/present the design solution to the business. UX designers conduct user research, design, write UX copy,",
                                                                                }),
                                                                                Object(a.jsxs)("div", {
                                                                                    className: "d-lg-flex justify-content-between",
                                                                                    children: [
                                                                                        Object(a.jsxs)("div", {
                                                                                            className: "comment-by-stars",
                                                                                            children: [
                                                                                                Object(a.jsx)("i", { className: "fa fa-star", "aria-hidden": "true" }),
                                                                                                Object(a.jsx)("i", { className: "fa fa-star", "aria-hidden": "true" }),
                                                                                                Object(a.jsx)("i", { className: "fa fa-star", "aria-hidden": "true" }),
                                                                                                Object(a.jsx)("i", { className: "fa fa-star", "aria-hidden": "true" }),
                                                                                                Object(a.jsx)("i", { className: "fa fa-star", "aria-hidden": "true" }),
                                                                                            ],
                                                                                        }),
                                                                                        Object(a.jsxs)("div", {
                                                                                            className: "answer-question",
                                                                                            children: [
                                                                                                Object(a.jsx)("span", { className: "question f-w500 color-d7", children: "Helpful ?" }),
                                                                                                Object(a.jsx)(l.b, { to: "#", className: "border-corner2 f-w500 color-d8", children: "Yes(3)" }),
                                                                                                Object(a.jsx)(l.b, { to: "#", className: "border-corner2 f-w500 color-d8", children: "No" }),
                                                                                            ],
                                                                                        }),
                                                                                    ],
                                                                                }),
                                                                            ],
                                                                        }),
                                                                    }),
                                                                    Object(a.jsxs)("li", {
                                                                        children: [
                                                                            Object(a.jsxs)("div", {
                                                                                className: "comment-wrap",
                                                                                children: [
                                                                                    Object(a.jsxs)("div", {
                                                                                        className: "author-info-bls t2 position-relative d-flex",
                                                                                        children: [
                                                                                            Object(a.jsx)("div", { className: "avatar", children: Object(a.jsx)("img", { src: "images/blog/04.jpg", alt: "images" }) }),
                                                                                            Object(a.jsxs)("div", {
                                                                                                className: "author-details",
                                                                                                children: [
                                                                                                    Object(a.jsx)("h3", { className: "name f-w500 color-d3 lt-sp09", children: "Martin Simons" }),
                                                                                                    Object(a.jsxs)("div", {
                                                                                                        className: "inner",
                                                                                                        children: [
                                                                                                            Object(a.jsx)("span", { className: "post-date lt-sp02", children: "Comment" }),
                                                                                                            Object(a.jsx)("span", { className: "view", children: "July 8, 2018" }),
                                                                                                        ],
                                                                                                    }),
                                                                                                    Object(a.jsx)("div", {
                                                                                                        className: "c-follow",
                                                                                                        children: Object(a.jsx)(l.b, { to: "#", className: "color-d3 lt-sp02", children: "Follow" }),
                                                                                                    }),
                                                                                                ],
                                                                                            }),
                                                                                            Object(a.jsx)("div", {
                                                                                                className: "reply",
                                                                                                children: Object(a.jsx)(l.b, { to: "#", children: Object(a.jsx)("i", { className: "fa fa-reply", "aria-hidden": "true" }) }),
                                                                                            }),
                                                                                        ],
                                                                                    }),
                                                                                    Object(a.jsx)("p", {
                                                                                        children: "UX designers conduct user research, design, write UX validate with user & sell/present the design solution to the business.",
                                                                                    }),
                                                                                    Object(a.jsxs)("div", {
                                                                                        className: "d-lg-flex justify-content-between",
                                                                                        children: [
                                                                                            Object(a.jsxs)("div", {
                                                                                                className: "comment-by-stars",
                                                                                                children: [
                                                                                                    Object(a.jsx)("i", { className: "fa fa-star", "aria-hidden": "true" }),
                                                                                                    Object(a.jsx)("i", { className: "fa fa-star", "aria-hidden": "true" }),
                                                                                                    Object(a.jsx)("i", { className: "fa fa-star", "aria-hidden": "true" }),
                                                                                                    Object(a.jsx)("i", { className: "fa fa-star", "aria-hidden": "true" }),
                                                                                                    Object(a.jsx)("i", { className: "fa fa-star", "aria-hidden": "true" }),
                                                                                                ],
                                                                                            }),
                                                                                            Object(a.jsxs)("div", {
                                                                                                className: "answer-question",
                                                                                                children: [
                                                                                                    Object(a.jsx)("span", { className: "question f-w500 color-d7", children: "Helpful ?" }),
                                                                                                    Object(a.jsx)(l.b, { to: "#", className: "border-corner2 f-w500 color-d8", children: "Yes(3)" }),
                                                                                                    Object(a.jsx)(l.b, { to: "#", className: "border-corner2 f-w500 color-d8", children: "No" }),
                                                                                                ],
                                                                                            }),
                                                                                        ],
                                                                                    }),
                                                                                ],
                                                                            }),
                                                                            Object(a.jsxs)("ul", {
                                                                                className: "sub-comment",
                                                                                children: [
                                                                                    Object(a.jsx)("li", {
                                                                                        children: Object(a.jsxs)("div", {
                                                                                            className: "comment-wrap",
                                                                                            children: [
                                                                                                Object(a.jsxs)("div", {
                                                                                                    className: "author-info-bls t2 position-relative d-flex",
                                                                                                    children: [
                                                                                                        Object(a.jsx)("div", { className: "avatar", children: Object(a.jsx)("img", { src: "images/blog/03.jpg", alt: "images" }) }),
                                                                                                        Object(a.jsxs)("div", {
                                                                                                            className: "author-details",
                                                                                                            children: [
                                                                                                                Object(a.jsx)("h3", { className: "name f-w500 color-d3 lt-sp09", children: "Danial Tim" }),
                                                                                                                Object(a.jsxs)("div", {
                                                                                                                    className: "inner",
                                                                                                                    children: [
                                                                                                                        Object(a.jsx)("span", { className: "post-date lt-sp02", children: "Comment" }),
                                                                                                                        Object(a.jsx)("span", { className: "view", children: "July 8, 2018" }),
                                                                                                                    ],
                                                                                                                }),
                                                                                                                Object(a.jsx)("div", {
                                                                                                                    className: "c-follow",
                                                                                                                    children: Object(a.jsx)(l.b, { to: "#", className: "color-d3 lt-sp02", children: "Follow" }),
                                                                                                                }),
                                                                                                            ],
                                                                                                        }),
                                                                                                        Object(a.jsx)("div", {
                                                                                                            className: "reply",
                                                                                                            children: Object(a.jsx)(l.b, { to: "#", children: Object(a.jsx)("i", { className: "fa fa-reply", "aria-hidden": "true" }) }),
                                                                                                        }),
                                                                                                    ],
                                                                                                }),
                                                                                                Object(a.jsx)("p", { children: "Designers conduct user research, design, UX validate/test with user and the design solution to business." }),
                                                                                                Object(a.jsx)("div", {
                                                                                                    className: "d-lg-flex justify-content-end",
                                                                                                    children: Object(a.jsxs)("div", {
                                                                                                        className: "answer-question",
                                                                                                        children: [
                                                                                                            Object(a.jsx)("span", { className: "question f-w500 color-d7", children: "Helpful ?" }),
                                                                                                            Object(a.jsx)(l.b, { to: "#", className: "border-corner2 f-w500 color-d8", children: "Yes(3)" }),
                                                                                                            Object(a.jsx)(l.b, { to: "#", className: "border-corner2 f-w500 color-d8", children: "No" }),
                                                                                                        ],
                                                                                                    }),
                                                                                                }),
                                                                                            ],
                                                                                        }),
                                                                                    }),
                                                                                    Object(a.jsx)("li", {
                                                                                        children: Object(a.jsxs)("div", {
                                                                                            className: "comment-wrap",
                                                                                            children: [
                                                                                                Object(a.jsxs)("div", {
                                                                                                    className: "author-info-bls t2 position-relative d-flex",
                                                                                                    children: [
                                                                                                        Object(a.jsx)("div", { className: "avatar", children: Object(a.jsx)("img", { src: "images/blog/04.jpg", alt: "images" }) }),
                                                                                                        Object(a.jsxs)("div", {
                                                                                                            className: "author-details",
                                                                                                            children: [
                                                                                                                Object(a.jsx)("h3", { className: "name f-w500 color-d3 lt-sp09", children: "Martin Simons" }),
                                                                                                                Object(a.jsxs)("div", {
                                                                                                                    className: "inner",
                                                                                                                    children: [
                                                                                                                        Object(a.jsx)("span", { className: "post-date lt-sp02", children: "Comment" }),
                                                                                                                        Object(a.jsx)("span", { className: "view", children: "July 8, 2018" }),
                                                                                                                    ],
                                                                                                                }),
                                                                                                                Object(a.jsx)("div", {
                                                                                                                    className: "c-follow",
                                                                                                                    children: Object(a.jsx)(l.b, { to: "#", className: "color-d3 lt-sp02", children: "Follow" }),
                                                                                                                }),
                                                                                                            ],
                                                                                                        }),
                                                                                                        Object(a.jsx)("div", {
                                                                                                            className: "reply",
                                                                                                            children: Object(a.jsx)(l.b, { to: "#", children: Object(a.jsx)("i", { className: "fa fa-reply", "aria-hidden": "true" }) }),
                                                                                                        }),
                                                                                                    ],
                                                                                                }),
                                                                                                Object(a.jsx)("p", {
                                                                                                    children:
                                                                                                        "Design refers to the term User Experience Design, while Design stands for User Interface Design. Both elements are crucial to a product and work closely together. But their professionals relationship, the roles themselves are quite different, referring to very different parts of the process and the design discipline.it makes the user feel easy.",
                                                                                                }),
                                                                                                Object(a.jsx)("div", {
                                                                                                    className: "d-lg-flex justify-content-end",
                                                                                                    children: Object(a.jsxs)("div", {
                                                                                                        className: "answer-question",
                                                                                                        children: [
                                                                                                            Object(a.jsx)("span", { className: "question f-w500 color-d7", children: "Helpful ?" }),
                                                                                                            Object(a.jsx)(l.b, { to: "#", className: "border-corner2 f-w500 color-d8", children: "Yes(3)" }),
                                                                                                            Object(a.jsx)(l.b, { to: "#", className: "border-corner2 f-w500 color-d8", children: "No" }),
                                                                                                        ],
                                                                                                    }),
                                                                                                }),
                                                                                            ],
                                                                                        }),
                                                                                    }),
                                                                                ],
                                                                            }),
                                                                        ],
                                                                    }),
                                                                    Object(a.jsx)("li", {
                                                                        children: Object(a.jsxs)("div", {
                                                                            className: "comment-wrap",
                                                                            children: [
                                                                                Object(a.jsxs)("div", {
                                                                                    className: "author-info-bls t2 position-relative d-flex",
                                                                                    children: [
                                                                                        Object(a.jsx)("div", { className: "avatar", children: Object(a.jsx)("img", { src: "images/blog/05.jpg", alt: "images" }) }),
                                                                                        Object(a.jsxs)("div", {
                                                                                            className: "author-details",
                                                                                            children: [
                                                                                                Object(a.jsx)("h3", { className: "name f-w500 color-d3 lt-sp09", children: "Sam White" }),
                                                                                                Object(a.jsxs)("div", {
                                                                                                    className: "inner",
                                                                                                    children: [
                                                                                                        Object(a.jsx)("span", { className: "post-date lt-sp02", children: "Comment" }),
                                                                                                        Object(a.jsx)("span", { className: "view", children: "July 8, 2018" }),
                                                                                                    ],
                                                                                                }),
                                                                                                Object(a.jsx)("div", { className: "c-follow", children: Object(a.jsx)(l.b, { to: "#", className: "color-d3 lt-sp02", children: "Follow" }) }),
                                                                                            ],
                                                                                        }),
                                                                                        Object(a.jsx)("div", {
                                                                                            className: "reply",
                                                                                            children: Object(a.jsx)(l.b, { to: "#", children: Object(a.jsx)("i", { className: "fa fa-reply", "aria-hidden": "true" }) }),
                                                                                        }),
                                                                                    ],
                                                                                }),
                                                                                Object(a.jsx)("p", {
                                                                                    children:
                                                                                        "Generally, a UX designers conduct user research, design, write UX copy, validate/test with user and sell/present the design solution to the business. UX designers conduct user research, design, write UX copy,",
                                                                                }),
                                                                                Object(a.jsxs)("div", {
                                                                                    className: "d-lg-flex justify-content-between",
                                                                                    children: [
                                                                                        Object(a.jsxs)("div", {
                                                                                            className: "comment-by-stars",
                                                                                            children: [
                                                                                                Object(a.jsx)("i", { className: "fa fa-star", "aria-hidden": "true" }),
                                                                                                Object(a.jsx)("i", { className: "fa fa-star", "aria-hidden": "true" }),
                                                                                                Object(a.jsx)("i", { className: "fa fa-star", "aria-hidden": "true" }),
                                                                                                Object(a.jsx)("i", { className: "fa fa-star", "aria-hidden": "true" }),
                                                                                                Object(a.jsx)("i", { className: "fa fa-star", "aria-hidden": "true" }),
                                                                                            ],
                                                                                        }),
                                                                                        Object(a.jsxs)("div", {
                                                                                            className: "answer-question",
                                                                                            children: [
                                                                                                Object(a.jsx)("span", { className: "question f-w500 color-d7", children: "Helpful ?" }),
                                                                                                Object(a.jsx)(l.b, { to: "#", className: "border-corner2 f-w500 color-d8", children: "Yes(3)" }),
                                                                                                Object(a.jsx)(l.b, { to: "#", className: "border-corner2 f-w500 color-d8", children: "No" }),
                                                                                            ],
                                                                                        }),
                                                                                    ],
                                                                                }),
                                                                            ],
                                                                        }),
                                                                    }),
                                                                ],
                                                            }),
                                                        }),
                                                    }),
                                                    Object(a.jsxs)("div", {
                                                        className: "tags-list",
                                                        children: [
                                                            Object(a.jsx)(l.b, { to: "#", children: "Design" }),
                                                            Object(a.jsx)(l.b, { to: "#", children: "UX Design" }),
                                                            Object(a.jsx)(l.b, { to: "#", children: "Work" }),
                                                            Object(a.jsx)(l.b, { to: "#", children: "Design Thinking" }),
                                                            Object(a.jsx)(l.b, { to: "#", children: "UI Design" }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        ],
                                    });
                                },
                            },
                        ]),
                        t
                    );
                })(c.Component),
                we = [
                    { path: "/", component: X },
                    { path: "/home-02", component: Y },
                    { path: "/home-03", component: ce },
                    { path: "/home-04", component: Oe },
                    {
                        path: "/blog",
                        component: (function (e) {
                            Object(j.a)(t, e);
                            var s = Object(b.a)(t);
                            function t() {
                                return Object(d.a)(this, t), s.apply(this, arguments);
                            }
                            return (
                                Object(o.a)(t, [
                                    {
                                        key: "render",
                                        value: function () {
                                            return Object(a.jsxs)("div", {
                                                className: "counter-scroll",
                                                children: [
                                                    Object(a.jsx)("div", { id: "mobile-menu-overlay", children: Object(a.jsx)("span", { className: "tf-close" }) }),
                                                    Object(a.jsx)(ue, {}),
                                                    Object(a.jsx)(ge, {}),
                                                    Object(a.jsx)("div", {
                                                        className: "blog col-blog",
                                                        children: Object(a.jsxs)("div", {
                                                            className: "container d-lg-flex",
                                                            children: [Object(a.jsx)(pe, {}), Object(a.jsx)("div", { className: "col-right", children: Object(a.jsx)(fe, {}) })],
                                                        }),
                                                    }),
                                                    Object(a.jsx)(Ne, {}),
                                                ],
                                            });
                                        },
                                    },
                                ]),
                                t
                            );
                        })(c.Component),
                    },
                    {
                        path: "/blog-single",
                        component: (function (e) {
                            Object(j.a)(t, e);
                            var s = Object(b.a)(t);
                            function t() {
                                return Object(d.a)(this, t), s.apply(this, arguments);
                            }
                            return (
                                Object(o.a)(t, [
                                    {
                                        key: "render",
                                        value: function () {
                                            return Object(a.jsxs)("div", {
                                                className: "counter-scroll",
                                                children: [
                                                    Object(a.jsx)("div", { id: "mobile-menu-overlay", children: Object(a.jsx)("span", { className: "tf-close" }) }),
                                                    Object(a.jsx)(ue, {}),
                                                    Object(a.jsx)(ge, {}),
                                                    Object(a.jsx)("div", {
                                                        className: "blog-single col-blog",
                                                        children: Object(a.jsxs)("div", {
                                                            className: "container d-lg-flex",
                                                            children: [Object(a.jsx)("div", { className: "col-left", children: Object(a.jsx)(ve, {}) }), Object(a.jsx)("div", { className: "col-right", children: Object(a.jsx)(fe, {}) })],
                                                        }),
                                                    }),
                                                    Object(a.jsx)(H, {}),
                                                ],
                                            });
                                        },
                                    },
                                ]),
                                t
                            );
                        })(c.Component),
                    },
                ];
            var ye = function () {
                    return Object(a.jsx)(l.a, {
                        children: we.map(function (e, s) {
                            return Object(a.jsx)(r.a, { exact: !0, path: e.path, component: e.component }, s);
                        }),
                    });
                },
                ke = function (e) {
                    e &&
                        e instanceof Function &&
                        t
                            .e(3)
                            .then(t.bind(null, 35))
                            .then(function (s) {
                                var t = s.getCLS,
                                    a = s.getFID,
                                    c = s.getFCP,
                                    i = s.getLCP,
                                    n = s.getTTFB;
                                t(e), a(e), c(e), i(e), n(e);
                            });
                };
            n.a.render(Object(a.jsx)(l.a, { children: Object(a.jsx)(ye, {}) }), document.getElementById("root")), ke();
        },
    },
    [[34, 1, 2]],
]);
//# sourceMappingURL=main.1e056ad5.chunk.js.map
