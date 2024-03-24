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
const colorScale = (0,d3_scale__WEBPACK_IMPORTED_MODULE_2__["default"])([1, 10000000], ["#CBCFD3", "#BCC5CE", "#ADBCC9", "#87A1B9", "#87A1B9", '#6487AA', '#6487AA', '#587FA4', '#3D6A95', '#3D6A95']);
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
  const {
    0: data,
    1: setData
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // https://www.bls.gov/lau/
    const csvFilePath = '/data/uscounties.csv';
    try {
      (0,d3_fetch__WEBPACK_IMPORTED_MODULE_3__.csv)(csvFilePath).then(counties => {
        setData(counties);
      });
    } catch (e) {
      console.log('csv error', e);
    }
  }, []);
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
      lineNumber: 102,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_simple_maps__WEBPACK_IMPORTED_MODULE_1__.Geographies, {
    geography: geoUrl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 11
    }
  }, _ref => {
    let {
      geographies
    } = _ref;
    return geographies.map(geo => {
      const cur = data.find(s => s.id === geo.id);
      return (cur === null || cur === void 0 ? void 0 : cur.state_id) === 'CA' || (cur === null || cur === void 0 ? void 0 : cur.state_id) === 'NV' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_simple_maps__WEBPACK_IMPORTED_MODULE_1__.Geography, {
        "data-tooltip-id": 'county-geo',
        "data-tooltip-content": (cur ? cur.name : '') + ", " + (cur ? cur.state_id : '') + " \u2014 " + (cur ? cur.population : '')
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
            fill: cur && cur.main ? colorScale(cur ? cur.population : "#EEE") : cur && (cur.state_id === 'CA' || cur.state_id === 'NV') ? 'rgb(247,247,247)' : '#EEE',
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
          lineNumber: 129,
          columnNumber: 21
        }
      }) : null;
    });
  }));
};
_s(MapChart, "wy65mJ2+ZPlZ7jnS9g16eCQ6BAs=");
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
/******/ 	__webpack_require__.h = function() { return "8cf9175c7bec616e16d0"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=cms.fc49a5da78330b1362d9.hot-update.js.map