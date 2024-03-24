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
/* harmony import */ var d3_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-fetch */ "./node_modules/d3-fetch/src/dsv.js");
/* harmony import */ var react_papaparse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-papaparse */ "./node_modules/react-papaparse/dist/react-papaparse.es.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/gatsby/dist/utils/fast-refresh-module.js */ "./node_modules/gatsby/dist/utils/fast-refresh-module.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _jsxFileName = "/Users/aliu/Documents/code/pcc/pcc-nam-website-ui/src/components/MapChart.js",
  _s = __webpack_require__.$Refresh$.signature();





const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json";
const colorScale = (0,d3_scale__WEBPACK_IMPORTED_MODULE_3__["default"])().domain([1, 10]).range(["#ffedea", "#ffcec5", "#ffad9f", "#ff8a75", "#ff5533", "#e2492d", "#be3d26", "#9a311f", "#782618"]);
const MapChart = _ref => {
  _s();
  let {
    setTooltipContent
  } = _ref;
  const {
    0: data,
    1: setData
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    readRemoteFile
  } = (0,react_papaparse__WEBPACK_IMPORTED_MODULE_2__.usePapaParse)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(async () => {
    // https://www.bls.gov/lau/
    const csvFilePath = 'https://hxib9w.csb.app/unemployment-by-county-2017.csv';
    (0,d3_fetch__WEBPACK_IMPORTED_MODULE_4__.csv)(csvFilePath).then(counties => {
      setData(counties);
    });
    // readRemoteFile(csvFilePath, {
    //     complete: (results) => {
    //       console.log('---------------------------');
    //       console.log('Results:', results);
    //       console.log('---------------------------');
    //     },
    //   });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_simple_maps__WEBPACK_IMPORTED_MODULE_1__.ComposableMap, {
    "data-tip": "",
    projection: "geoAlbersUsa",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_simple_maps__WEBPACK_IMPORTED_MODULE_1__.ZoomableGroup, {
    zoom: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_simple_maps__WEBPACK_IMPORTED_MODULE_1__.Geographies, {
    geography: geoUrl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }, _ref2 => {
    let {
      geographies
    } = _ref2;
    return geographies.map(geo => {
      const cur = data.find(s => s.id === geo.id);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_simple_maps__WEBPACK_IMPORTED_MODULE_1__.Geography, {
        key: geo.rsmKey,
        geography: geo,
        onMouseEnter: () => {
          setTooltipContent((cur ? cur.name : null) + " \u2014 " + (cur ? cur.unemployment_rate : null));
        },
        onMouseLeave: () => {
          setTooltipContent("");
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
          lineNumber: 54,
          columnNumber: 19
        }
      });
    });
  }))));
};
_s(MapChart, "QKwkmXuAMZ0ufLbik/fIqOyikKw=", false, function () {
  return [react_papaparse__WEBPACK_IMPORTED_MODULE_2__.usePapaParse];
});
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

/***/ "./node_modules/d3-dsv/src/csv.js":
/*!****************************************!*\
  !*** ./node_modules/d3-dsv/src/csv.js ***!
  \****************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   csvFormat: function() { return /* binding */ csvFormat; },
/* harmony export */   csvFormatBody: function() { return /* binding */ csvFormatBody; },
/* harmony export */   csvFormatRow: function() { return /* binding */ csvFormatRow; },
/* harmony export */   csvFormatRows: function() { return /* binding */ csvFormatRows; },
/* harmony export */   csvFormatValue: function() { return /* binding */ csvFormatValue; },
/* harmony export */   csvParse: function() { return /* binding */ csvParse; },
/* harmony export */   csvParseRows: function() { return /* binding */ csvParseRows; }
/* harmony export */ });
/* harmony import */ var _dsv_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dsv.js */ "./node_modules/d3-dsv/src/dsv.js");


var csv = (0,_dsv_js__WEBPACK_IMPORTED_MODULE_0__["default"])(",");

var csvParse = csv.parse;
var csvParseRows = csv.parseRows;
var csvFormat = csv.format;
var csvFormatBody = csv.formatBody;
var csvFormatRows = csv.formatRows;
var csvFormatRow = csv.formatRow;
var csvFormatValue = csv.formatValue;


/***/ }),

/***/ "./node_modules/d3-dsv/src/dsv.js":
/*!****************************************!*\
  !*** ./node_modules/d3-dsv/src/dsv.js ***!
  \****************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
var EOL = {},
    EOF = {},
    QUOTE = 34,
    NEWLINE = 10,
    RETURN = 13;

function objectConverter(columns) {
  return new Function("d", "return {" + columns.map(function(name, i) {
    return JSON.stringify(name) + ": d[" + i + "] || \"\"";
  }).join(",") + "}");
}

function customConverter(columns, f) {
  var object = objectConverter(columns);
  return function(row, i) {
    return f(object(row), i, columns);
  };
}

// Compute unique columns in order of discovery.
function inferColumns(rows) {
  var columnSet = Object.create(null),
      columns = [];

  rows.forEach(function(row) {
    for (var column in row) {
      if (!(column in columnSet)) {
        columns.push(columnSet[column] = column);
      }
    }
  });

  return columns;
}

function pad(value, width) {
  var s = value + "", length = s.length;
  return length < width ? new Array(width - length + 1).join(0) + s : s;
}

function formatYear(year) {
  return year < 0 ? "-" + pad(-year, 6)
    : year > 9999 ? "+" + pad(year, 6)
    : pad(year, 4);
}

function formatDate(date) {
  var hours = date.getUTCHours(),
      minutes = date.getUTCMinutes(),
      seconds = date.getUTCSeconds(),
      milliseconds = date.getUTCMilliseconds();
  return isNaN(date) ? "Invalid Date"
      : formatYear(date.getUTCFullYear(), 4) + "-" + pad(date.getUTCMonth() + 1, 2) + "-" + pad(date.getUTCDate(), 2)
      + (milliseconds ? "T" + pad(hours, 2) + ":" + pad(minutes, 2) + ":" + pad(seconds, 2) + "." + pad(milliseconds, 3) + "Z"
      : seconds ? "T" + pad(hours, 2) + ":" + pad(minutes, 2) + ":" + pad(seconds, 2) + "Z"
      : minutes || hours ? "T" + pad(hours, 2) + ":" + pad(minutes, 2) + "Z"
      : "");
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(delimiter) {
  var reFormat = new RegExp("[\"" + delimiter + "\n\r]"),
      DELIMITER = delimiter.charCodeAt(0);

  function parse(text, f) {
    var convert, columns, rows = parseRows(text, function(row, i) {
      if (convert) return convert(row, i - 1);
      columns = row, convert = f ? customConverter(row, f) : objectConverter(row);
    });
    rows.columns = columns || [];
    return rows;
  }

  function parseRows(text, f) {
    var rows = [], // output rows
        N = text.length,
        I = 0, // current character index
        n = 0, // current line number
        t, // current token
        eof = N <= 0, // current token followed by EOF?
        eol = false; // current token followed by EOL?

    // Strip the trailing newline.
    if (text.charCodeAt(N - 1) === NEWLINE) --N;
    if (text.charCodeAt(N - 1) === RETURN) --N;

    function token() {
      if (eof) return EOF;
      if (eol) return eol = false, EOL;

      // Unescape quotes.
      var i, j = I, c;
      if (text.charCodeAt(j) === QUOTE) {
        while (I++ < N && text.charCodeAt(I) !== QUOTE || text.charCodeAt(++I) === QUOTE);
        if ((i = I) >= N) eof = true;
        else if ((c = text.charCodeAt(I++)) === NEWLINE) eol = true;
        else if (c === RETURN) { eol = true; if (text.charCodeAt(I) === NEWLINE) ++I; }
        return text.slice(j + 1, i - 1).replace(/""/g, "\"");
      }

      // Find next delimiter or newline.
      while (I < N) {
        if ((c = text.charCodeAt(i = I++)) === NEWLINE) eol = true;
        else if (c === RETURN) { eol = true; if (text.charCodeAt(I) === NEWLINE) ++I; }
        else if (c !== DELIMITER) continue;
        return text.slice(j, i);
      }

      // Return last token before EOF.
      return eof = true, text.slice(j, N);
    }

    while ((t = token()) !== EOF) {
      var row = [];
      while (t !== EOL && t !== EOF) row.push(t), t = token();
      if (f && (row = f(row, n++)) == null) continue;
      rows.push(row);
    }

    return rows;
  }

  function preformatBody(rows, columns) {
    return rows.map(function(row) {
      return columns.map(function(column) {
        return formatValue(row[column]);
      }).join(delimiter);
    });
  }

  function format(rows, columns) {
    if (columns == null) columns = inferColumns(rows);
    return [columns.map(formatValue).join(delimiter)].concat(preformatBody(rows, columns)).join("\n");
  }

  function formatBody(rows, columns) {
    if (columns == null) columns = inferColumns(rows);
    return preformatBody(rows, columns).join("\n");
  }

  function formatRows(rows) {
    return rows.map(formatRow).join("\n");
  }

  function formatRow(row) {
    return row.map(formatValue).join(delimiter);
  }

  function formatValue(value) {
    return value == null ? ""
        : value instanceof Date ? formatDate(value)
        : reFormat.test(value += "") ? "\"" + value.replace(/"/g, "\"\"") + "\""
        : value;
  }

  return {
    parse: parse,
    parseRows: parseRows,
    format: format,
    formatBody: formatBody,
    formatRows: formatRows,
    formatRow: formatRow,
    formatValue: formatValue
  };
}


/***/ }),

/***/ "./node_modules/d3-dsv/src/tsv.js":
/*!****************************************!*\
  !*** ./node_modules/d3-dsv/src/tsv.js ***!
  \****************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   tsvFormat: function() { return /* binding */ tsvFormat; },
/* harmony export */   tsvFormatBody: function() { return /* binding */ tsvFormatBody; },
/* harmony export */   tsvFormatRow: function() { return /* binding */ tsvFormatRow; },
/* harmony export */   tsvFormatRows: function() { return /* binding */ tsvFormatRows; },
/* harmony export */   tsvFormatValue: function() { return /* binding */ tsvFormatValue; },
/* harmony export */   tsvParse: function() { return /* binding */ tsvParse; },
/* harmony export */   tsvParseRows: function() { return /* binding */ tsvParseRows; }
/* harmony export */ });
/* harmony import */ var _dsv_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dsv.js */ "./node_modules/d3-dsv/src/dsv.js");


var tsv = (0,_dsv_js__WEBPACK_IMPORTED_MODULE_0__["default"])("\t");

var tsvParse = tsv.parse;
var tsvParseRows = tsv.parseRows;
var tsvFormat = tsv.format;
var tsvFormatBody = tsv.formatBody;
var tsvFormatRows = tsv.formatRows;
var tsvFormatRow = tsv.formatRow;
var tsvFormatValue = tsv.formatValue;


/***/ }),

/***/ "./node_modules/d3-fetch/src/dsv.js":
/*!******************************************!*\
  !*** ./node_modules/d3-fetch/src/dsv.js ***!
  \******************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   csv: function() { return /* binding */ csv; },
/* harmony export */   "default": function() { return /* binding */ dsv; },
/* harmony export */   tsv: function() { return /* binding */ tsv; }
/* harmony export */ });
/* harmony import */ var d3_dsv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-dsv */ "./node_modules/d3-dsv/src/dsv.js");
/* harmony import */ var d3_dsv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-dsv */ "./node_modules/d3-dsv/src/csv.js");
/* harmony import */ var d3_dsv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-dsv */ "./node_modules/d3-dsv/src/tsv.js");
/* harmony import */ var _text_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text.js */ "./node_modules/d3-fetch/src/text.js");



function dsvParse(parse) {
  return function(input, init, row) {
    if (arguments.length === 2 && typeof init === "function") row = init, init = undefined;
    return (0,_text_js__WEBPACK_IMPORTED_MODULE_0__["default"])(input, init).then(function(response) {
      return parse(response, row);
    });
  };
}

function dsv(delimiter, input, init, row) {
  if (arguments.length === 3 && typeof init === "function") row = init, init = undefined;
  var format = (0,d3_dsv__WEBPACK_IMPORTED_MODULE_1__["default"])(delimiter);
  return (0,_text_js__WEBPACK_IMPORTED_MODULE_0__["default"])(input, init).then(function(response) {
    return format.parse(response, row);
  });
}

var csv = dsvParse(d3_dsv__WEBPACK_IMPORTED_MODULE_2__.csvParse);
var tsv = dsvParse(d3_dsv__WEBPACK_IMPORTED_MODULE_3__.tsvParse);


/***/ }),

/***/ "./node_modules/d3-fetch/src/text.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-fetch/src/text.js ***!
  \*******************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
function responseText(response) {
  if (!response.ok) throw new Error(response.status + " " + response.statusText);
  return response.text();
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(input, init) {
  return fetch(input, init).then(responseText);
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "bc5ccf028397ef61e3b4"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=cms.6ce4075f1da2d3449ff0.hot-update.js.map