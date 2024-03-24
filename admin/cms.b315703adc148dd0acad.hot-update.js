"use strict";
self["webpackHotUpdategatsby_starter_decap_cms"]("cms",{

/***/ "./src/components/NavModule/NavModuleStyles.js":
/*!*****************************************************!*\
  !*** ./src/components/NavModule/NavModuleStyles.js ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HamburgerStyles: function() { return /* binding */ HamburgerStyles; },
/* harmony export */   LogoStyles: function() { return /* binding */ LogoStyles; },
/* harmony export */   NavModuleStyles: function() { return /* binding */ NavModuleStyles; },
/* harmony export */   NavTopLevel: function() { return /* binding */ NavTopLevel; },
/* harmony export */   SubNavStyles: function() { return /* binding */ SubNavStyles; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteralLoose */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteralLoose.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/render/dom/motion.mjs");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/gatsby/dist/utils/fast-refresh-module.js */ "./node_modules/gatsby/dist/utils/fast-refresh-module.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");


var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;


const NavModuleStyles = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].nav(_templateObject || (_templateObject = (0,_babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  .nav {\n    background-color: rgba(0,0,0,1);\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    z-index: 100;\n    padding: 12px var(--borderSpacing) 12px var(--borderSpacing);\n  }\n\n  .container {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    height: 100%;\n  }\n\n  .menu {\n    background-color: #000;\n    width: var(--menuWidth);\n    transform: translateX(calc(var(--menuWidth) * -1));\n    height: 100%;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    position: fixed;\n    z-index: 99;\n    padding: 30px var(--borderSpacing);\n    display: flex;\n    align-items: center;\n  }\n\n  .menu-container {\n    @media only screen and (min-width: 861px) {\n      display: none;\n    }\n  }\n\n  .logo-image {\n    height: 64px;\n  }\n\n  .logo-image-circle {\n    height: 64px;\n  }\n\n  .topnav-container {\n    @media only screen and (max-width: 860px) {\n      display: none;\n    }\n  }\n\n  .dropbtn {\n    color: white;\n    padding: 12px;\n    font-size: 13px;\n    font-weight: 600;\n    font-family: 'Heebo', sans-serif;\n    opacity: 0.85;\n    margin: 0px 16px;\n    border: none;\n    text-transform: uppercase;\n    cursor: pointer;\n  }\n  \n  .outlined {\n    z-index: 1000;\n    border: 1px solid white;\n  }\n\n  .dropdown {\n    position: relative;\n    display: inline-block;\n  }\n  \n  .dropdown-content {\n    display: none;\n    position: absolute;\n    background-color: black;\n    min-width: 105px;\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n    z-index: 1;\n  }\n\n  .dropdown-content:hover {\n    display: block;\n  }\n  \n  .dropdown-content a {\n    color: white;\n    opacity: 0.85;\n    text-transform: uppercase;\n    padding: 6px 16px;\n    text-decoration: none;\n    display: flex;\n    justify-content: center;\n    font-size: 12px;\n    font-family: 'Heebo', sans-serif;\n  }\n\n  .highlighted {\n    opacity: 1;\n  }\n  \n  .dropdown-content a:hover {\n    opacity: 1;\n  }\n  \n  .dropdown:hover .dropdown-content {\n    display: block;\n  }\n  \n  .dropdown:hover .dropbtn {\n    opacity: 1;\n  }\n\n  .nav-title {\n    color: white;\n    text-decoration: none;\n  }\n\n  .show-4 {\n    @media only screen and (max-width: 867px) {\n      display: none;\n    }\n  }\n\n  .show-5 {\n    @media only screen and (max-width: 1008px) {\n      display: none;\n    }\n  }\n\n  .show-6 {\n    @media only screen and (max-width: 1117px) {\n      display: none;\n    }\n  }\n\n  .show-7 {\n    @media only screen and (max-width: 1182px) {\n      display: none;\n    }\n  }\n\n  .more-dropdown .more-dropdown-content .show-more-4 {\n    @media only screen and (min-width: 868px) {\n      display: none;\n    }\n  }\n\n  .more-dropdown .more-dropdown-content .show-more-5 {\n    @media only screen and (min-width: 1009px) {\n      display: none;\n    }\n  }\n\n  .more-dropdown .more-dropdown-content .show-more-6 {\n    @media only screen and (min-width: 1118px) {\n      display: none;\n    }\n  }\n\n  .more-dropdown .more-dropdown-content .show-more-7 {\n    @media only screen and (min-width: 1183px) {\n      display: none;\n    }\n  }\n\n  .more-dropdown {\n    width: 96px;\n    @media only screen and (min-width: 1183px) {\n      display: none;\n    }\n  }\n\n  .more-dropdown:hover {\n    opacity: 1;\n  }\n\n  .flex {\n    display: flex;\n  }\n\n  .chevron-container {\n    margin-left: 4px;\n    display: flex;\n    align-items: center;\n    color: white;\n    opacity: 0.85;\n  }\n\n  .more-dropdown-content {\n    margin-top: 8px;\n    position: absolute;\n    background-color: black;\n    min-width: 105px;\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n    z-index: 1;\n  }\n\n  .more-dropdown-content a {\n    color: white;\n    opacity: 0.85;\n    text-transform: uppercase;\n    padding: 6px 16px;\n    text-decoration: none;\n    display: flex;\n    justify-content: center;\n    font-size: 12px;\n    font-family: 'Heebo', sans-serif;\n  }\n\n  .hidden {\n    display: none;\n  }\n\n  .highlighted {\n    opacity: 1;\n  }\n  \n  .more-dropdown-content a:hover {\n    opacity: 1;\n  }\n\n  .side-nav-link {\n    opacity: 0.85;\n  }\n\n  .side-nav-list-item {\n    min-height: 64px;\n  }\n\n  .side-nav-list-item ul {\n    padding-left: 0px;\n  }\n\n  .side-nav-sublink {\n    padding-left: 20px;\n  }\n\n  .no-margin {\n    margin: 0;\n  }\n\n  .side-nav-link.highlighted {\n    opacity: 1;\n  }\n"])));
const NavTopLevel = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].ul(_templateObject2 || (_templateObject2 = (0,_babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  list-style: none;\n  padding: 0;\n  margin: 0;\n\n  > li,\n  > li > button {\n    text-transform: capitalize;\n    font-size: var(--h2);\n    font-weight: 700;\n    cursor: pointer;\n    transition: color 0.3s ease;\n\n    a {\n      text-decoration: none;\n      color: #fff;\n    }\n\n    span {\n      color: var(--primary);\n    }\n\n    &:hover {\n      color: var(--primary);\n      > a {\n        color: var(--primary);\n      }\n    }\n  }\n\n  > li {\n    &.open {\n      > button > svg {\n        transform: rotate(180deg);\n      }\n    }\n  }\n\n  > li > button {\n    background-color: transparent;\n    padding: 0;\n    color: #fff;\n    border: none;\n    font-family: 'Heebo', sans-serif;\n    display: flex;\n    align-items: center;\n  }\n\n  > li > button > svg {\n    font-size: 22px;\n    margin-left: 6px;\n    color: var(--primary);\n    transition: transform 0.3s ease;\n\n    @media (min-width: 768px) {\n      font-size: 26px;\n    }\n\n    @media (min-width: 1024px) {\n      font-size: 30px;\n    }\n  }\n"])));
const SubNavStyles = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.ul)(_templateObject3 || (_templateObject3 = (0,_babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding-left: calc(var(--gap) / 2);\n  list-style: none;\n  margin: 0;\n\n  > li {\n    font-size: var(--h4);\n    font-weight: 700;\n\n    &:hover {\n      > a {\n        color: var(--primary);\n      }\n    }\n  }\n\n  @media (min-width: 1024px) {\n    padding-left: var(--gap);\n  }\n\n  hr {\n    margin-top: 10px;\n    margin-bottom: 10px;\n  }\n"])));
const HamburgerStyles = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.button)(_templateObject4 || (_templateObject4 = (0,_babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background-color: transparent;\n  border: none;\n  width: 30px;\n  height: 30px;\n  padding: 0;\n  cursor: pointer;\n  outline: none;\n\n  &:focus {\n    border: none;\n    outline: none;\n  }\n\n  .bar {\n    display: block;\n    background-color: #fff;\n    height: 2px;\n    border-radius: 2px;\n\n    &:nth-of-type(2) {\n      margin-top: 8px;\n      margin-bottom: 8px;\n    }\n  }\n"])));
const LogoStyles = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject5 || (_templateObject5 = (0,_babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-weight: 700;\n  font-size: 20px;\n  letter-spacing: -0.5px;\n\n  a {\n    color: #fff;\n    text-decoration: none;\n    transition: color 0.3s ease;\n  }\n\n  @media (min-width: 1024px) {\n    font-size: 25px;\n  }\n\n  span {\n    color: var(--primary);\n  }\n\n  &:hover,\n  &:focus {\n    a {\n      color: var(--primary);\n    }\n  }\n"])));

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
/******/ 	__webpack_require__.h = function() { return "880c0b93b19ed33f407c"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=cms.b315703adc148dd0acad.hot-update.js.map