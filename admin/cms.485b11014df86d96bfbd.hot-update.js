"use strict";
self["webpackHotUpdategatsby_starter_decap_cms"]("cms",{

/***/ "./src/components/NavModule/NavModule.js":
/*!***********************************************!*\
  !*** ./src/components/NavModule/NavModule.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _MenuContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../MenuContext */ "./src/components/MenuContext.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/render/dom/motion.mjs");
/* harmony import */ var _NavConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavConstants */ "./src/components/NavModule/NavConstants.js");
/* harmony import */ var _hooks_useSiteMetadata__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useSiteMetadata */ "./src/hooks/useSiteMetadata.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.mjs");
/* harmony import */ var _NavModuleStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NavModuleStyles */ "./src/components/NavModule/NavModuleStyles.js");
/* harmony import */ var _NavAnim__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NavAnim */ "./src/components/NavModule/NavAnim.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/gatsby/dist/utils/fast-refresh-module.js */ "./node_modules/gatsby/dist/utils/fast-refresh-module.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _jsxFileName = "/Users/aliu/Documents/code/pcc/pcc-nam-website-ui/src/components/NavModule/NavModule.js",
  _s = __webpack_require__.$Refresh$.signature();










const NavModule = () => {
  _s();
  const {
    0: isOpen,
    1: setNav
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_MenuContext__WEBPACK_IMPORTED_MODULE_2__["default"]);
  const {
    0: isMoreNavOpen,
    1: setMoreNav
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: subNavIndex,
    1: setSubNavIndex
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const moreDropdownRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const toggleMoreNav = () => {
    setMoreNav(isOpen => !isOpen);
  };
  const toggleSubNavIndex = index => {
    setSubNavIndex(index);
  };
  const toggleNav = () => {
    setNav(isOpen => !isOpen);
  };
  const {
    title
  } = (0,_hooks_useSiteMetadata__WEBPACK_IMPORTED_MODULE_4__.UseSiteMetadata)();
  const pathname = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    try {
      var _window, _window$location;
      return (_window = window) === null || _window === void 0 ? void 0 : (_window$location = _window.location) === null || _window$location === void 0 ? void 0 : _window$location.pathname;
    } catch (e) {
      return '/';
    }
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // Function to handle clicks outside the dropdown
    const handleClickOutside = event => {
      if (moreDropdownRef.current && !moreDropdownRef.current.contains(event.target)) {
        // Clicked outside the dropdown, close it
        setMoreNav(false);
      }
    };

    // Attach the event listener when the dropdown is shown
    if (isMoreNavOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    // Remove the event listener when the component is unmounted or the dropdown is hidden
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMoreNavOpen]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NavModuleStyles__WEBPACK_IMPORTED_MODULE_5__.NavModuleStyles, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "menu-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "nav",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }, title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NavModuleStyles__WEBPACK_IMPORTED_MODULE_5__.LogoStyles, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: 'logo-image-circle',
    src: '/img/SOCAL NAM Navy Circle Blue Logo-01.jpg',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 19
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NavModuleStyles__WEBPACK_IMPORTED_MODULE_5__.HamburgerStyles, {
    initial: "open",
    animate: isOpen ? "open" : "closed",
    onClick: toggleNav,
    onKeyDown: toggleNav,
    "aria-label": isOpen ? "Close Menu" : "Open Menu",
    className: isOpen ? " open" : "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.span, {
    className: "bar",
    variants: _NavAnim__WEBPACK_IMPORTED_MODULE_6__.barOneVariants,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 15
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.span, {
    className: "bar",
    variants: _NavAnim__WEBPACK_IMPORTED_MODULE_6__.barTwoVariants,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 15
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.span, {
    className: "bar",
    variants: _NavAnim__WEBPACK_IMPORTED_MODULE_6__.barThreeVariants,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 15
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
    initial: "closed",
    animate: isOpen ? "open" : "closed",
    variants: _NavAnim__WEBPACK_IMPORTED_MODULE_6__.menuList,
    transition: {
      type: "ease",
      stiffness: 50,
      velocity: 50
    },
    className: "menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NavModuleStyles__WEBPACK_IMPORTED_MODULE_5__.NavTopLevel, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 11
    }
  }, _NavConstants__WEBPACK_IMPORTED_MODULE_3__.menuItems.map((item, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    class: "side-nav-list-item",
    key: index,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 15
    }
  }, item.accordion ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    class: "side-nav-link " + (pathname === item.path ? 'highlighted' : null),
    type: "button",
    onClick: () => {
      if (subNavIndex === index) {
        toggleSubNavIndex(0);
      } else {
        toggleSubNavIndex(index);
      }
    },
    onKeyDown: () => {
      if (subNavIndex === index) {
        toggleSubNavIndex(0);
      } else {
        toggleSubNavIndex(index);
      }
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 21
    }
  }, item.text, subNavIndex === index ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_8__.FiChevronUp, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 48
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_8__.FiChevronDown, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 64
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NavModuleStyles__WEBPACK_IMPORTED_MODULE_5__.SubNavStyles, {
    initial: "closed",
    animate: subNavIndex === index ? "open" : "closed",
    variants: _NavAnim__WEBPACK_IMPORTED_MODULE_6__.subMenuNavVariants
    // class='no-margin'
    ,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 23
    }
  }), item.accordion.map((accordionItem, accordionIndexndex) => {
    const {
      path,
      text
    } = accordionItem;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      class: "side-nav-sublink",
      key: accordionIndexndex,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 27
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
      class: "side-nav-link " + (pathname === path ? 'highlighted' : null),
      onClick: toggleNav,
      onKeyDown: toggleNav,
      to: path,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 29
      }
    }, text));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 23
    }
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    class: "side-nav-link " + (pathname === item.path ? 'highlighted' : null),
    onClick: toggleNav,
    onKeyDown: toggleNav,
    to: item.path,
    activeClassName: "menu__item--active",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 19
    }
  }, item.text, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 21
    }
  }, "."))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "topnav-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "nav",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 11
    }
  }, title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NavModuleStyles__WEBPACK_IMPORTED_MODULE_5__.LogoStyles, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: 'logo-image-circle',
    src: '/img/SOCAL-NAM-Logo-Full-Color-01.jpg',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 19
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 13
    }
  }, (_NavConstants__WEBPACK_IMPORTED_MODULE_3__.menuItems !== null && _NavConstants__WEBPACK_IMPORTED_MODULE_3__.menuItems !== void 0 ? _NavConstants__WEBPACK_IMPORTED_MODULE_3__.menuItems : []).map((menuItem, index) => {
    if (!menuItem) {
      return null;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: index,
      class: "dropdown " + (index >= 3 ? 'show-' + (index + 1) : null),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 19
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      class: "dropbtn " + (pathname === menuItem.path ? 'highlighted' : null),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      class: "nav-title",
      href: menuItem.path,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 99
      }
    }, menuItem.text)), menuItem.accordion ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      class: "dropdown-content",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 23
      }
    }, menuItem.accordion.map((accordionItem, accordionIndex) => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
        key: accordionIndex,
        href: accordionItem.path,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207,
          columnNumber: 34
        }
      }, accordionItem.text);
    })) : null);
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    ref: moreDropdownRef,
    class: "dropdown outlined more-dropdown",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    onClick: toggleMoreNav,
    class: "dropbtn flex",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 17
    }
  }, "More", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    class: "chevron-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 19
    }
  }, isMoreNavOpen ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_8__.FiChevronUp, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 67
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_8__.FiChevronDown, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 83
    }
  }))), isMoreNavOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    class: "more-dropdown-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 36
    }
  }, (_NavConstants__WEBPACK_IMPORTED_MODULE_3__.menuItems === null || _NavConstants__WEBPACK_IMPORTED_MODULE_3__.menuItems === void 0 ? void 0 : _NavConstants__WEBPACK_IMPORTED_MODULE_3__.menuItems.length) && _NavConstants__WEBPACK_IMPORTED_MODULE_3__.menuItems.map((menuItem, index) => {
    if (index < 3) {
      return null;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      index: index,
      class: "show-more-" + (index + 1),
      href: menuItem.path,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 30
      }
    }, menuItem.text);
  }))))))));
};
_s(NavModule, "5rYT4VUmUHTm03lbLKHMH2SJ35U=");
_c = NavModule;
/* harmony default export */ __webpack_exports__["default"] = (NavModule);
var _c;
__webpack_require__.$Refresh$.register(_c, "NavModule");

var $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
var $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		var errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		var testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "fd23dc4cf950f85fb572"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=cms.485b11014df86d96bfbd.hot-update.js.map