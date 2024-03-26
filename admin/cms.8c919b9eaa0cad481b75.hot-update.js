"use strict";
self["webpackHotUpdategatsby_starter_decap_cms"]("cms",{

/***/ "./src/components/MapChart.js":
/*!************************************!*\
  !*** ./src/components/MapChart.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_simple_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-simple-maps */ "./node_modules/react-simple-maps/dist/index.umd.js");
/* harmony import */ var react_simple_maps__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_simple_maps__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-scale */ "./node_modules/d3-scale/src/quantize.js");
/* harmony import */ var _cms_census__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cms/census */ "./src/cms/census.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/gatsby/dist/utils/fast-refresh-module.js */ "./node_modules/gatsby/dist/utils/fast-refresh-module.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _jsxFileName = "/Users/aliu/Documents/code/pcc/pcc-nam-website-ui/src/components/MapChart.js",
  _s = __webpack_require__.$Refresh$.signature();





const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json";
const colorScale = (0,d3_scale__WEBPACK_IMPORTED_MODULE_3__["default"])([1, 10000000], ['rgb(183, 193, 204)', 'rgb(170, 185, 192)', 'rgb(163, 178, 191)', 'rgb(135, 161, 185)', 'rgb(135, 161, 185)', 'rgb(100, 135, 170)', 'rgb(100, 135, 170)', 'rgb(88, 127, 164)', 'rgb(61, 106, 149)', 'rgb(61, 106, 149)']);
const colorScaleHover = (0,d3_scale__WEBPACK_IMPORTED_MODULE_3__["default"])([1, 10000000], ['rgb(198, 208, 219)', 'rgb(185, 200, 207)', 'rgb(178, 193, 206)', 'rgb(150, 176, 200)', 'rgb(150, 176, 200)', 'rgb(115, 150, 185)', 'rgb(115, 150, 185)', 'rgb(103, 142, 179)', 'rgb(76, 121, 164)', 'rgb(76, 121, 164)']);
const sizeScale = width => {
  if (width > 3000) {
    return {
      // height: 400,
      // width: 300,
      // scale: 1000,
      center: [-21, 35]
    };
  } else if (width > 2000) {
    return {
      // height: 400,
      // width: 300,
      // scale: 500,
      center: [-21, 33]
    };
  } else if (width > 1000) {
    return {
      // height: 400,
      // width: 300,
      // scale: 1000,
      center: [-21, 40]
    };
  } else if (width > 800) {
    return {
      // height: 400,
      // width: 300,
      // scale: 1500,
      center: [-21, 38]
    };
  } else if (width > 600) {
    return {
      // height: 400,
      // width: 300,
      // scale: 1000,
      center: [-21, 40]
    };
  } else {
    return {
      // height: 400,
      // width: 300,
      // scale: 1000,
      center: [-22, 41]
    };
  }
};
const MapChart = () => {
  _s();
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     // https://www.bls.gov/lau/
  //     const csvFilePath = '/data/uscounties.csv';
  //     try {
  //         csv(csvFilePath).then((counties) => {
  //             setData(counties);
  //           });
  //     } catch (e) {
  //         console.log('csv error', e);
  //     }
  //   }, []);

  const scaleParameters = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    try {
      return sizeScale(window.screen.width);
    } catch (e) {
      return sizeScale(1000);
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_simple_maps__WEBPACK_IMPORTED_MODULE_1__.ComposableMap, {
    "data-tip": "",
    width: 240,
    height: 240
    // projectionConfig={{
    //   center: [-20, 34.9],
    //   scale: 3800
    // }}
    ,
    projectionConfig: {
      // rotate: [0, 0, 0],
      center: scaleParameters.center
      // scale: 750
      // scale: 1500
    },
    projection: "geoAlbers",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_simple_maps__WEBPACK_IMPORTED_MODULE_1__.Geographies, {
    geography: geoUrl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 11
    }
  }, _ref => {
    let {
      geographies
    } = _ref;
    return geographies.map(geo => {
      const cur = _cms_census__WEBPACK_IMPORTED_MODULE_2__.censusData[geo.id];
      // const cur = data.find((s) => s.id === geo.id);
      // if (cur?.state_id) {
      //     console.log({ cur })
      // }
      return (cur === null || cur === void 0 ? void 0 : cur.state_id) === 'CA' || (cur === null || cur === void 0 ? void 0 : cur.state_id) === 'NV' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_simple_maps__WEBPACK_IMPORTED_MODULE_1__.Geography, {
        stroke: "rgb(127,127,127)",
        strokeWidth: 0.25,
        "data-tooltip-id": 'county-geo',
        "data-tooltip-content": (cur ? cur.name : '') + ", " + (cur ? cur.state_id : '') + " \u2014 pop. " + (cur ? cur.population : '')
        // data-tooltip-id={cur.id}
        ,
        key: geo.rsmKey,
        geography: geo,
        onMouseEnter: () => {
          // setTooltipContent(
          //     {
          //         id: cur.id,
          //         label: `${cur ? cur.name : null} — ${
          //         cur ? cur.unemployment_rate : null
          //         }`
          //     }
          // );
        },
        onMouseLeave: () => {
          // setTooltipContent({
          //     id: '',
          //     label: ''
          // });
        },
        style: {
          default: {
            fill: cur && cur.main ? colorScale(cur ? cur.population : "#EEE") : cur && (cur.state_id === 'CA' || cur.state_id === 'NV') ? 'rgb(235,235,235)' : "#D6D6DA",
            outline: "none"
          },
          hover: {
            fill: cur && cur.main ? colorScaleHover(cur ? cur.population : "#EEE") : cur && (cur.state_id === 'CA' || cur.state_id === 'NV') ? 'rgb(247,247,247)' : '#EEE',
            outline: "none"
          },
          pressed: {
            fill: "#00a4b7",
            outline: "none"
          }
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 21
        }
      }) : null;
    });
  }));
};
_s(MapChart, "2kv2gYPhzfLY5c/ZUS38A2XnQwE=");
_c = MapChart;
/* harmony default export */ __webpack_exports__["default"] = (MapChart);
var _c;
__webpack_require__.$Refresh$.register(_c, "MapChart");

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

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/2369379629.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/2369379629.json ***!
  \***********************************************************/
/***/ (function(module) {

module.exports = /*#__PURE__*/JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/pcc-nam-website-ui/static/dbce5b508efe45797bf7c8980efc9961/fdd84/contentful-logo.svg","srcSet":"/pcc-nam-website-ui/static/dbce5b508efe45797bf7c8980efc9961/04410/contentful-logo.svg 188w,\\n/pcc-nam-website-ui/static/dbce5b508efe45797bf7c8980efc9961/a161f/contentful-logo.svg 375w,\\n/pcc-nam-website-ui/static/dbce5b508efe45797bf7c8980efc9961/fdd84/contentful-logo.svg 750w","sizes":"(min-width: 750px) 750px, 100vw"},"sources":[{"srcSet":"/pcc-nam-website-ui/static/dbce5b508efe45797bf7c8980efc9961/42f3c/contentful-logo.webp 188w,\\n/pcc-nam-website-ui/static/dbce5b508efe45797bf7c8980efc9961/4d73f/contentful-logo.webp 375w,\\n/pcc-nam-website-ui/static/dbce5b508efe45797bf7c8980efc9961/6dc4f/contentful-logo.webp 750w","type":"image/webp","sizes":"(min-width: 750px) 750px, 100vw"}]},"width":750,"height":153}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/2922020879.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/2922020879.json ***!
  \***********************************************************/
/***/ (function(module) {

module.exports = /*#__PURE__*/JSON.parse('{"layout":"fullWidth","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAOABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAMBAgQF/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAB4LKNM5If/8QAGRABAQADAQAAAAAAAAAAAAAAAQACAxES/9oACAEBAAEFAg7Za/JCk7ckv//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABcQAAMBAAAAAAAAAAAAAAAAAAAQEQH/2gAIAQEABj8CLccX/8QAGRABAAMBAQAAAAAAAAAAAAAAAQAQESFh/9oACAEBAAE/IWWROg87TujNia//2gAMAwEAAgADAAAAEEsP/8QAFhEAAwAAAAAAAAAAAAAAAAAAARBh/9oACAEDAQE/EBV//8QAFREBAQAAAAAAAAAAAAAAAAAAEEH/2gAIAQIBAT8Qh//EABwQAQACAQUAAAAAAAAAAAAAAAEAESEQMUFRkf/aAAgBAQABPxAWBpasFqPaU4AfENBChOouwHeo5n//2Q=="},"images":{"fallback":{"src":"/pcc-nam-website-ui/static/2247c39f145df7505f72ce04ceaeef39/71357/macbook-color.jpg","srcSet":"/pcc-nam-website-ui/static/2247c39f145df7505f72ce04ceaeef39/982db/macbook-color.jpg 750w,\\n/pcc-nam-website-ui/static/2247c39f145df7505f72ce04ceaeef39/e4f86/macbook-color.jpg 1080w,\\n/pcc-nam-website-ui/static/2247c39f145df7505f72ce04ceaeef39/c255e/macbook-color.jpg 1366w,\\n/pcc-nam-website-ui/static/2247c39f145df7505f72ce04ceaeef39/71357/macbook-color.jpg 1920w","sizes":"100vw"},"sources":[{"srcSet":"/pcc-nam-website-ui/static/2247c39f145df7505f72ce04ceaeef39/b99ea/macbook-color.webp 750w,\\n/pcc-nam-website-ui/static/2247c39f145df7505f72ce04ceaeef39/acf6c/macbook-color.webp 1080w,\\n/pcc-nam-website-ui/static/2247c39f145df7505f72ce04ceaeef39/8245d/macbook-color.webp 1366w,\\n/pcc-nam-website-ui/static/2247c39f145df7505f72ce04ceaeef39/74526/macbook-color.webp 1920w","type":"image/webp","sizes":"100vw"}]},"width":1,"height":0.7078125}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/3700448002.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/3700448002.json ***!
  \***********************************************************/
/***/ (function(module) {

module.exports = /*#__PURE__*/JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/pcc-nam-website-ui/static/7c28e5696eb27affae765b6d60f487d9/b15f1/abstract-building.jpg","srcSet":"/pcc-nam-website-ui/static/7c28e5696eb27affae765b6d60f487d9/4f7c9/abstract-building.jpg 625w,\\n/pcc-nam-website-ui/static/7c28e5696eb27affae765b6d60f487d9/1b704/abstract-building.jpg 1250w,\\n/pcc-nam-website-ui/static/7c28e5696eb27affae765b6d60f487d9/b15f1/abstract-building.jpg 2500w","sizes":"(min-width: 2500px) 2500px, 100vw"},"sources":[{"srcSet":"/pcc-nam-website-ui/static/7c28e5696eb27affae765b6d60f487d9/dc158/abstract-building.webp 625w,\\n/pcc-nam-website-ui/static/7c28e5696eb27affae765b6d60f487d9/c47c6/abstract-building.webp 1250w,\\n/pcc-nam-website-ui/static/7c28e5696eb27affae765b6d60f487d9/6946a/abstract-building.webp 2500w","type":"image/webp","sizes":"(min-width: 2500px) 2500px, 100vw"}]},"width":2500,"height":1670}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/4091309336.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/4091309336.json ***!
  \***********************************************************/
/***/ (function(module) {

module.exports = /*#__PURE__*/JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/pcc-nam-website-ui/static/4f45c8182ffee0d628877a8209c95902/e714e/gatsby-logo.svg","srcSet":"/pcc-nam-website-ui/static/4f45c8182ffee0d628877a8209c95902/1480f/gatsby-logo.svg 298w,\\n/pcc-nam-website-ui/static/4f45c8182ffee0d628877a8209c95902/49b20/gatsby-logo.svg 596w,\\n/pcc-nam-website-ui/static/4f45c8182ffee0d628877a8209c95902/e714e/gatsby-logo.svg 1192w","sizes":"(min-width: 1192px) 1192px, 100vw"},"sources":[{"srcSet":"/pcc-nam-website-ui/static/4f45c8182ffee0d628877a8209c95902/e38e2/gatsby-logo.webp 298w,\\n/pcc-nam-website-ui/static/4f45c8182ffee0d628877a8209c95902/07ccc/gatsby-logo.webp 596w,\\n/pcc-nam-website-ui/static/4f45c8182ffee0d628877a8209c95902/9ba3b/gatsby-logo.webp 1192w","type":"image/webp","sizes":"(min-width: 1192px) 1192px, 100vw"}]},"width":1192,"height":314}');

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "b23087efa3e45943a939"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=cms.8c919b9eaa0cad481b75.hot-update.js.map