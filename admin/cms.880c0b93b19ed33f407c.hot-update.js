"use strict";
self["webpackHotUpdategatsby_starter_decap_cms"]("cms",{

/***/ "./src/styles/GlobalStyles.js":
/*!************************************!*\
  !*** ./src/styles/GlobalStyles.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalStyle: function() { return /* binding */ GlobalStyle; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteralLoose */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteralLoose.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/gatsby/dist/utils/fast-refresh-module.js */ "./node_modules/gatsby/dist/utils/fast-refresh-module.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");


var _templateObject;

const GlobalStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.createGlobalStyle)(_templateObject || (_templateObject = (0,_babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\n:root {  \n  --bannerTitle: 34px;\n  --borderSpacing: 30px;\n  --menuWidth: 100vw;\n  --blockquote: 20px;\n  --background: rgb(0,0,0);\n  --primary: #ffc400;\n  --bodyColor: #afc2cb;\n  --inActive: #555;\n  --letterSpacing: -0.075rem;\n  --boxShadow: 0px 15px 22px 3px rgba(0, 0, 0, 0.55);\n  --textShadow: 0px 0px 5px rgba(0, 0, 0, 1);\n  --p: 14px;\n  --h2: 20px;\n  --h3: 19px;\n  --h4: 18px;\n  --h5: 17px;\n  --h6: 16px;\n  --gap: 40px;\n  --sectionMargin: 60px;\n\n  @media(min-width:375px) {\n    --bannerTitle: 36px;    \n    --h2: 22px;\n    --h3: 21px;\n    --h4: 20px;\n    --h5: 19px;\n    --h6: 18px;\n    --sectionMargin: 80px;\n  }\n\n  @media(min-width:414px) {\n    --bannerTitle: 40px;    \n    --h2: 27px;\n    --h3: 25px;\n    --h4: 23px;\n    --h5: 21px;\n    --h6: 20px;\n  }\n\n  @media(min-width:768px) {\n    --bannerTitle: 46px;    \n    --blockquote: 26px;\n    --p: 15px;\n    --h2: 30px;\n    --h3: 28px;\n    --h4: 26px;\n    --h5: 24px;\n    --h6: 22px;\n    --sectionMargin: 100px;\n  }\n\n  @media(min-width:1024px) {\n    --borderSpacing: 75px;\n    --p: 16px;\n    --h2: 36px;\n    --h3: 32px;\n    --h4: 29px;\n    --h5: 27px;\n    --h6: 25px;\n    --sectionMargin: 180px;\n  }\n\n  @media(min-width:1200px) {\n    --p: 17px;\n  }\n}\n\n* {\n    box-sizing: border-box;\n    scroll-behavior: smooth;\n}  \n\n\nbody {\n    font-family: 'Heebo', sans-serif;\n    margin: 0;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    background-color: var(--background);\n    color: #fff;\n    overflow-x: hidden;\n    font-size: var(--p);\n}\n\nh1,\nh2 {\n    margin-top: 0.5rem;\n    margin-bottom: 1rem;\n    line-height: 1.25em;\n    font-weight: 700;\n    letter-spacing: var(--letterSpacing);\n\n    @media(min-width: 1200px) {\n        margin-bottom: 1.5rem;\n    }\n}\n\nh3,\nh4,\nh5,\nh6 {\n  margin-top: 0.5rem;\n  margin-bottom: 1rem;\n}\n\nh1 {\n    font-size: var(--bannerTitle);\n}\n\nh2 {\n    font-size: var(--h2);\n}\n\nh3 {\n  font-size: var(--h3);\n}\n\nh4 {\n  font-size: var(--h4);\n}\n\nh5 {\n  font-size: var(--h5);\n}\n\nh6 {\n  font-size: var(--h6);\n}\n\np {\n    margin-top: 0.5rem;\n    margin-bottom: 1rem;\n    color: var(--bodyColor);\n}\n\nb,\nstrong {\n  font-weight: 700;\n}\n\ni {\n  font-style: italic;\n}\n\n.underline {\n  text-decoration: underline;\n  text-underline-position: under;\n  text-decoration-color: rgba(175, 194, 203, 0.25);\n  text-decoration-thickness: 0.125rem;\n}\n\nhr,\nol,\nul,\nblockquote {\n  margin-top: calc(var(--sectionMargin) / 2);\n  margin-bottom: calc(var(--sectionMargin) / 2);\n}\n\nhr {\n  border: none; \n  height: 2px;\n  background-color: #333;\n}\n\na {\n  color: var(--primary);\n  transition: color 0.3s ease;\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    text-decoration: none;\n  }\n}\n\nblockquote {\n  font-size: var(--blockquote);\n  font-family: 'Times New Roman', Times, serif;\n  font-style: italic;\n  margin-left: 0;\n  border-left: 2px solid var(--primary);\n  padding-left: var(--gap);\n}\n\n.container {\n  margin-left: auto;\n  margin-right: auto;\n\n  &__tight {\n    max-width: 1400px;\n  }\n\n  &__scroll {\n    overflow-x: scroll;\n    display: flex;\n    scroll-snap-type: x mandatory;\n\n    &::-webkit-scrollbar {\n      width: 14px;\n      height: 4px;\n    }\n    &::-webkit-scrollbar-thumb {\n      background: var(--primary);\n      border-radius: 0px;\n    }\n    &::-webkit-scrollbar-thumb:hover {\n      background: var(--primary);\n    }\n    &::-webkit-scrollbar-track {\n      background: #000;\n      border-radius: 0px;\n    }\n\n    @media (min-width: 1200px) {\n      overflow-x: visible;\n    }\n  }\n}\n\n.section {\n    margin-top: var(--sectionMargin);\n    margin-bottom: var(--sectionMargin);\n    padding: 0 var(--borderSpacing);\n\n    &.section__padding {\n        padding-top: var(--sectionMargin);\n        padding-bottom: var(--sectionMargin);\n    }\n}\n\n.intro__area {\n  margin-bottom: calc(var(--gap) * 2);\n  max-width: 700px;\n\n  h2 {\n    display: inline-block;\n    border-bottom: 2px solid rgba(255,255,255,0.15);\n  }\n}\n\n.rsm-svg {\n  height: 550px;\n  width: 325px;\n  @media(min-width:500px) {\n    height: 625px;\n    width: 500px;\n  }\n  @media(min-width:1000px) {\n    height: 550px;\n    width: 700px;\n  }\n  @media(min-width:1500px) {\n    height: 700px;\n    width: 850px;\n  }\n  @media(min-width:2000px) {\n    height: 700px;\n    width: 1000px;\n  }\n  @media(min-width:2500px) {\n    height: 750px;\n    width: 1500px;\n  }\n}\n\n.rsm-geographies {\n  transform: rotate(-13deg);\n}\n\n.learn__more {\n  margin-top: calc(var(--gap) * 2);\n}\n\n.feed {\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--gap);\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 1400px;\n\n  >* {\n    flex: 0 0 100%;\n\n    @media(min-width:414px) {\n      flex-basis: calc(50% - (calc(var(--gap) / 2)));\n    }\n\n    @media(min-width:1024px) {\n      flex-basis: calc(33.333% - 27px);\n    }\n  }\n}\n\n.contentimg {\n  margin-top: var(--gap);\n  margin-bottom: var(--gap);\n}\n\n.contentdescription {\n  color: var(--bodyColor);\n  font-style: italic;\n  font-size: 0.813rem;\n  text-align: center;\n  margin-top: calc(var(--gap) / 2);\n}\n"])));

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
/******/ 	__webpack_require__.h = function() { return "ee1caa93db423a52db22"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=cms.880c0b93b19ed33f407c.hot-update.js.map