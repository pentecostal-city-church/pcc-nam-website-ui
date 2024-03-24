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
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-scale */ "./node_modules/d3-scale/src/quantize.js");
/* harmony import */ var d3_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-fetch */ "./node_modules/d3-fetch/src/dsv.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/gatsby/dist/utils/fast-refresh-module.js */ "./node_modules/gatsby/dist/utils/fast-refresh-module.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _jsxFileName = "/Users/aliu/Documents/code/pcc/pcc-nam-website-ui/src/components/MapChart.js",
  _s = __webpack_require__.$Refresh$.signature();




const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json";
const colorScale = (0,d3_scale__WEBPACK_IMPORTED_MODULE_2__["default"])().domain([1, 10]).range(["#ffedea", "#ffcec5", "#ffad9f", "#ff8a75", "#ff5533", "#e2492d", "#be3d26", "#9a311f", "#782618"]);
const MapChart = _ref => {
  _s();
  let {
    setTooltipContent
  } = _ref;
  const {
    0: data,
    1: setData
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // https://www.bls.gov/lau/
    const csvFilePath = '/data/unemployment-by-county-2017.csv';
    try {
      (0,d3_fetch__WEBPACK_IMPORTED_MODULE_3__.csv)(csvFilePath).then(counties => {
        setData(counties);
      });
    } catch (e) {
      console.log('csv error', e);
    }
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_simple_maps__WEBPACK_IMPORTED_MODULE_1__.ComposableMap, {
    "data-tip": "",
    projection: "geoAlbersUsa",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_simple_maps__WEBPACK_IMPORTED_MODULE_1__.ZoomableGroup, {
    zoom: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_simple_maps__WEBPACK_IMPORTED_MODULE_1__.Geographies, {
    geography: geoUrl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }, _ref2 => {
    let {
      geographies
    } = _ref2;
    return geographies.map(geo => {
      const cur = data.find(s => s.id === geo.id);
      return cur !== null && cur !== void 0 && cur.id ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_simple_maps__WEBPACK_IMPORTED_MODULE_1__.Geography, {
        "data-tooltip-id": 'county-geo',
        "data-tooltip-content": (cur ? cur.name : null) + " \u2014 " + (cur ? cur.unemployment_rate : null)
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
            fill: "#D6D6DA",
            outline: "none"
          },
          hover: {
            fill: colorScale(cur ? cur.unemployment_rate : "#EEE"),
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
          lineNumber: 50,
          columnNumber: 25
        }
      })) : null;
    });
  }))));
};
_s(MapChart, "IEMTtLVFIuToo7X/raQbJAxzNQU=");
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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "423a5aabf1a92949d90e"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=cms.a4a196ede9e14c73a7b1.hot-update.js.map