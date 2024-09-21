"use strict";
self["webpackHotUpdategatsby_starter_decap_cms"]("cms",{

/***/ "./src/templates/index-page.js":
/*!*************************************!*\
  !*** ./src/templates/index-page.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IndexPageTemplate: function() { return /* binding */ IndexPageTemplate; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.js");
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SEO */ "./src/components/SEO.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.mjs");
/* harmony import */ var _components_NavModule_NavModule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/NavModule/NavModule */ "./src/components/NavModule/NavModule.js");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _geo_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./geo-map */ "./src/templates/geo-map.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/render/dom/motion.mjs");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/gatsby/dist/utils/fast-refresh-module.js */ "./node_modules/gatsby/dist/utils/fast-refresh-module.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _jsxFileName = "/Users/aliu/Documents/code/pcc/pcc-nam-website-ui/src/templates/index-page.js",
  _s = __webpack_require__.$Refresh$.signature();




// import BannerModule from "../components/BannerModule/BannerModule";





// eslint-disable-next-line
const IndexPageTemplate = _ref => {
  _s();
  let {
    image,
    title,
    heading,
    subheading,
    mainpitch,
    description,
    intro
  } = _ref;
  const [startAnim, setStartAnim] = react__WEBPACK_IMPORTED_MODULE_0___default().useState('inactive');
  const observerRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);
  const scrollDownHandler = () => {
    document.getElementById('geo-map').scrollIntoView();
  };
  const variants = {
    active: {
      opacity: 0.5
    },
    inactive: {
      opacity: 1,
      transition: {
        duration: 3500
      }
    }
  };
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    observerRef.current = new IntersectionObserver(entries => {
      // We will fill in the callback later...
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // It's visible. Add the animation class here!
          setStartAnim('active');
        }
      });
    });

    // Tell the observer which elements to track
    observerRef.current.observe(document.querySelector('#geo-map'), {
      subtree: true,
      childList: true
    });
    return () => {};
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      width: '100vw',
      height: '100vh',
      backgroundPositionX: '50%',
      backgroundPositionY: '50%',
      backgroundRepeat: 'no-repeat',
      backgroundBlendMode: 'lighten',
      backgroundColor: 'rgba(100, 139, 194, 0.1)',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundImage: "url(\"" + (0,gatsby__WEBPACK_IMPORTED_MODULE_4__.withPrefix)('/img/welcome.jpeg') + "\")"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_SEO__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Home",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_NavModule_NavModule__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "purpose",
    className: 'landing-main-container',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'purpose-column',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "purpose-column-section",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "purpose-column-section",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      marginTop: '0px',
      marginBottom: '32px'
    },
    className: "purpose-column-header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }, "OUR PURPOSE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "purpose-column-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  }, "INSPIRING."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "purpose-column-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  }, "EQUIPPING."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "purpose-column-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 17
    }
  }, "SUSTAINING."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      marginTop: '32px'
    },
    className: "purpose-column-header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }, "TO REACH THE NEXT TOWN."))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'down-button-container',
    onClick: scrollDownHandler,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_6__.FiChevronDown, {
    style: {
      cursor: 'pointer',
      height: '48px',
      width: '48px',
      color: 'white'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 78
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
    variants: variants,
    animate: startAnim,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_geo_map__WEBPACK_IMPORTED_MODULE_5__.GeoMap, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }))));
};
_s(IndexPageTemplate, "lPhHAa403IeC31qigzoSNoflDy0=");
_c = IndexPageTemplate;
IndexPageTemplate.propTypes = {
  image: prop_types__WEBPACK_IMPORTED_MODULE_8___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_8___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string)]),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string),
  heading: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string),
  subheading: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string),
  mainpitch: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().object),
  description: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string),
  intro: prop_types__WEBPACK_IMPORTED_MODULE_8___default().shape({
    blurbs: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().array)
  })
};
const IndexPage = _ref2 => {
  let {
    data
  } = _ref2;
  const {
    frontmatter
  } = data.markdownRemark;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(IndexPageTemplate, {
    image: frontmatter.image,
    title: frontmatter.title,
    heading: frontmatter.heading,
    subheading: frontmatter.subheading,
    mainpitch: frontmatter.mainpitch,
    description: frontmatter.description,
    intro: frontmatter.intro,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 5
    }
  });
};
_c2 = IndexPage;
IndexPage.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_8___default().shape({
    markdownRemark: prop_types__WEBPACK_IMPORTED_MODULE_8___default().shape({
      frontmatter: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().object)
    })
  })
};
/* harmony default export */ __webpack_exports__["default"] = (IndexPage);
const pageQuery = "669772693";
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "IndexPageTemplate");
__webpack_require__.$Refresh$.register(_c2, "IndexPage");

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
/******/ 	__webpack_require__.h = function() { return "1e83176590b4e4ff91fd"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=cms.0e0d263d5c606b5f70ed.hot-update.js.map