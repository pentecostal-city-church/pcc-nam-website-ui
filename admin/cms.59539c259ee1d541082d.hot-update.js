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




const data2 = [{
  "county": "Los Angeles",
  "county_ascii": "Los Angeles",
  "name": "Los Angeles County",
  "id": "06037",
  "state_id": "CA",
  "state_name": "California",
  "lat": 34.3219,
  "lng": -118.2247,
  "population": 9936690,
  "main": 1
}, {
  "county": "San Diego",
  "county_ascii": "San Diego",
  "name": "San Diego County",
  "id": "06073",
  "state_id": "CA",
  "state_name": "California",
  "lat": 33.0343,
  "lng": -116.7351,
  "population": 3289701,
  "main": 1
}, {
  "county": "Orange",
  "county_ascii": "Orange",
  "name": "Orange County",
  "id": "06059",
  "state_id": "CA",
  "state_name": "California",
  "lat": 33.7031,
  "lng": -117.7609,
  "population": 3175227,
  "main": 1
}, {
  "county": "Riverside",
  "county_ascii": "Riverside",
  "name": "Riverside County",
  "id": "06065",
  "state_id": "CA",
  "state_name": "California",
  "lat": 33.7437,
  "lng": -115.9938,
  "population": 2429487,
  "main": 1
}, {
  "county": "Clark",
  "county_ascii": "Clark",
  "name": "Clark County",
  "id": 32003,
  "state_id": "NV",
  "state_name": "Nevada",
  "lat": 36.2152,
  "lng": -115.0135,
  "population": 2265926,
  "main": 1
}, {
  "county": "San Bernardino",
  "county_ascii": "San Bernardino",
  "name": "San Bernardino County",
  "id": "06071",
  "state_id": "CA",
  "state_name": "California",
  "lat": 34.8414,
  "lng": -116.1785,
  "population": 2180563,
  "main": 1
}, {
  "county": "Santa Clara",
  "county_ascii": "Santa Clara",
  "name": "Santa Clara County",
  "id": "06085",
  "state_id": "CA",
  "state_name": "California",
  "lat": 37.2318,
  "lng": -121.6951,
  "population": 1916831,
  "main": ""
}, {
  "county": "Alameda",
  "county_ascii": "Alameda",
  "name": "Alameda County",
  "id": "06001",
  "state_id": "CA",
  "state_name": "California",
  "lat": 37.6469,
  "lng": -121.8887,
  "population": 1663823,
  "main": ""
}, {
  "county": "Sacramento",
  "county_ascii": "Sacramento",
  "name": "Sacramento County",
  "id": "06067",
  "state_id": "CA",
  "state_name": "California",
  "lat": 38.4493,
  "lng": -121.3443,
  "population": 1579211,
  "main": ""
}, {
  "county": "Contra Costa",
  "county_ascii": "Contra Costa",
  "name": "Contra Costa County",
  "id": "06013",
  "state_id": "CA",
  "state_name": "California",
  "lat": 37.9192,
  "lng": -121.9275,
  "population": 1162648,
  "main": ""
}, {
  "county": "Fresno",
  "county_ascii": "Fresno",
  "name": "Fresno County",
  "id": "06019",
  "state_id": "CA",
  "state_name": "California",
  "lat": 36.7582,
  "lng": -119.6493,
  "population": 1008280,
  "main": ""
}, {
  "county": "Kern",
  "county_ascii": "Kern",
  "name": "Kern County",
  "id": "06029",
  "state_id": "CA",
  "state_name": "California",
  "lat": 35.3426,
  "lng": -118.7301,
  "population": 906883,
  "main": 1
}, {
  "county": "Washoe",
  "county_ascii": "Washoe",
  "name": "Washoe County",
  "id": 32031,
  "state_id": "NV",
  "state_name": "Nevada",
  "lat": 40.6655,
  "lng": -119.6643,
  "population": 486674,
  "main": ""
}, {
  "county": "Lyon",
  "county_ascii": "Lyon",
  "name": "Lyon County",
  "id": 32019,
  "state_id": "NV",
  "state_name": "Nevada",
  "lat": 39.0206,
  "lng": -119.189,
  "population": 59435,
  "main": ""
}, {
  "county": "Carson City",
  "county_ascii": "Carson City",
  "name": "Carson City",
  "id": 32510,
  "state_id": "NV",
  "state_name": "Nevada",
  "lat": 39.1511,
  "lng": -119.7476,
  "population": 58249,
  "main": ""
}, {
  "county": "San Francisco",
  "county_ascii": "San Francisco",
  "name": "San Francisco County",
  "id": "06075",
  "state_id": "CA",
  "state_name": "California",
  "lat": 37.7556,
  "lng": -122.445,
  "population": 851036,
  "main": ""
}, {
  "county": "Ventura",
  "county_ascii": "Ventura",
  "name": "Ventura County",
  "id": "06111",
  "state_id": "CA",
  "state_name": "California",
  "lat": 34.4561,
  "lng": -119.0836,
  "population": 842009,
  "main": 1
}, {
  "county": "San Joaquin",
  "county_ascii": "San Joaquin",
  "name": "San Joaquin County",
  "id": "06077",
  "state_id": "CA",
  "state_name": "California",
  "lat": 37.9348,
  "lng": -121.2714,
  "population": 779445,
  "main": ""
}, {
  "county": "San Mateo",
  "county_ascii": "San Mateo",
  "name": "San Mateo County",
  "id": "06081",
  "state_id": "CA",
  "state_name": "California",
  "lat": 37.4228,
  "lng": -122.3291,
  "population": 754250,
  "main": ""
}, {
  "county": "Stanislaus",
  "county_ascii": "Stanislaus",
  "name": "Stanislaus County",
  "id": "06099",
  "state_id": "CA",
  "state_name": "California",
  "lat": 37.5591,
  "lng": -120.9977,
  "population": 552063,
  "main": ""
}, {
  "county": "Sonoma",
  "county_ascii": "Sonoma",
  "name": "Sonoma County",
  "id": "06097",
  "state_id": "CA",
  "state_name": "California",
  "lat": 38.529,
  "lng": -122.8882,
  "population": 488436,
  "main": ""
}, {
  "county": "Tulare",
  "county_ascii": "Tulare",
  "name": "Tulare County",
  "id": "06107",
  "state_id": "CA",
  "state_name": "California",
  "lat": 36.2202,
  "lng": -118.8005,
  "population": 473446,
  "main": ""
}, {
  "county": "Solano",
  "county_ascii": "Solano",
  "name": "Solano County",
  "id": "06095",
  "state_id": "CA",
  "state_name": "California",
  "lat": 38.27,
  "lng": -121.9328,
  "population": 450995,
  "main": ""
}, {
  "county": "Santa Barbara",
  "county_ascii": "Santa Barbara",
  "name": "Santa Barbara County",
  "id": "06083",
  "state_id": "CA",
  "state_name": "California",
  "lat": 34.6729,
  "lng": -120.0169,
  "population": 445213,
  "main": 1
}, {
  "county": "Monterey",
  "county_ascii": "Monterey",
  "name": "Monterey County",
  "id": "06053",
  "state_id": "CA",
  "state_name": "California",
  "lat": 36.2171,
  "lng": -121.2388,
  "population": 437609,
  "main": ""
}, {
  "county": "Placer",
  "county_ascii": "Placer",
  "name": "Placer County",
  "id": "06061",
  "state_id": "CA",
  "state_name": "California",
  "lat": 39.0634,
  "lng": -120.7177,
  "population": 406608,
  "main": ""
}, {
  "county": "Merced",
  "county_ascii": "Merced",
  "name": "Merced County",
  "id": "06047",
  "state_id": "CA",
  "state_name": "California",
  "lat": 37.1919,
  "lng": -120.7177,
  "population": 282290,
  "main": ""
}, {
  "county": "San Luis Obispo",
  "county_ascii": "San Luis Obispo",
  "name": "San Luis Obispo County",
  "id": "06079",
  "state_id": "CA",
  "state_name": "California",
  "lat": 35.3871,
  "lng": -120.4044,
  "population": 281712,
  "main": 1
}, {
  "county": "Santa Cruz",
  "county_ascii": "Santa Cruz",
  "name": "Santa Cruz County",
  "id": "06087",
  "state_id": "CA",
  "state_name": "California",
  "lat": 37.0562,
  "lng": -122.0018,
  "population": 268571,
  "main": ""
}, {
  "county": "Marin",
  "county_ascii": "Marin",
  "name": "Marin County",
  "id": "06041",
  "state_id": "CA",
  "state_name": "California",
  "lat": 38.0734,
  "lng": -122.7234,
  "population": 260485,
  "main": ""
}, {
  "county": "Yolo",
  "county_ascii": "Yolo",
  "name": "Yolo County",
  "id": "06113",
  "state_id": "CA",
  "state_name": "California",
  "lat": 38.6866,
  "lng": -121.9011,
  "population": 217141,
  "main": ""
}, {
  "county": "Butte",
  "county_ascii": "Butte",
  "name": "Butte County",
  "id": "06007",
  "state_id": "CA",
  "state_name": "California",
  "lat": 39.6669,
  "lng": -121.6007,
  "population": 213605,
  "main": ""
}, {
  "county": "Elko",
  "county_ascii": "Elko",
  "name": "Elko County",
  "id": 32007,
  "state_id": "NV",
  "state_name": "Nevada",
  "lat": 41.1458,
  "lng": -115.3577,
  "population": 53600,
  "main": ""
}, {
  "county": "El Dorado",
  "county_ascii": "El Dorado",
  "name": "El Dorado County",
  "id": "06017",
  "state_id": "CA",
  "state_name": "California",
  "lat": 38.7787,
  "lng": -120.5247,
  "population": 191713,
  "main": ""
}, {
  "county": "Shasta",
  "county_ascii": "Shasta",
  "name": "Shasta County",
  "id": "06089",
  "state_id": "CA",
  "state_name": "California",
  "lat": 40.7637,
  "lng": -122.0405,
  "population": 181852,
  "main": ""
}, {
  "county": "Imperial",
  "county_ascii": "Imperial",
  "name": "Imperial County",
  "id": "06025",
  "state_id": "CA",
  "state_name": "California",
  "lat": 33.0395,
  "lng": -115.3654,
  "population": 179578,
  "main": 1
}, {
  "county": "Madera",
  "county_ascii": "Madera",
  "name": "Madera County",
  "id": "06039",
  "state_id": "CA",
  "state_name": "California",
  "lat": 37.218,
  "lng": -119.7627,
  "population": 157243,
  "main": ""
}, {
  "county": "Kings",
  "county_ascii": "Kings",
  "name": "Kings County",
  "id": "06031",
  "state_id": "CA",
  "state_name": "California",
  "lat": 36.0752,
  "lng": -119.8155,
  "population": 152515,
  "main": ""
}, {
  "county": "Napa",
  "county_ascii": "Napa",
  "name": "Napa County",
  "id": "06055",
  "state_id": "CA",
  "state_name": "California",
  "lat": 38.507,
  "lng": -122.3306,
  "population": 137384,
  "main": ""
}, {
  "county": "Humboldt",
  "county_ascii": "Humboldt",
  "name": "Humboldt County",
  "id": "06023",
  "state_id": "CA",
  "state_name": "California",
  "lat": 40.6993,
  "lng": -123.8756,
  "population": 136132,
  "main": ""
}, {
  "county": "Nevada",
  "county_ascii": "Nevada",
  "name": "Nevada County",
  "id": "06057",
  "state_id": "CA",
  "state_name": "California",
  "lat": 39.3013,
  "lng": -120.7689,
  "population": 102322,
  "main": ""
}, {
  "county": "Sutter",
  "county_ascii": "Sutter",
  "name": "Sutter County",
  "id": "06101",
  "state_id": "CA",
  "state_name": "California",
  "lat": 39.0346,
  "lng": -121.6948,
  "population": 99101,
  "main": ""
}, {
  "county": "Mendocino",
  "county_ascii": "Mendocino",
  "name": "Mendocino County",
  "id": "06045",
  "state_id": "CA",
  "state_name": "California",
  "lat": 39.4402,
  "lng": -123.3915,
  "population": 91145,
  "main": ""
}, {
  "county": "Yuba",
  "county_ascii": "Yuba",
  "name": "Yuba County",
  "id": "06115",
  "state_id": "CA",
  "state_name": "California",
  "lat": 39.269,
  "lng": -121.3513,
  "population": 81705,
  "main": ""
}, {
  "county": "Lake",
  "county_ascii": "Lake",
  "name": "Lake County",
  "id": "06033",
  "state_id": "CA",
  "state_name": "California",
  "lat": 39.1,
  "lng": -122.7534,
  "population": 68024,
  "main": ""
}, {
  "county": "Tehama",
  "county_ascii": "Tehama",
  "name": "Tehama County",
  "id": "06103",
  "state_id": "CA",
  "state_name": "California",
  "lat": 40.1256,
  "lng": -122.2341,
  "population": 65484,
  "main": ""
}, {
  "county": "San Benito",
  "county_ascii": "San Benito",
  "name": "San Benito County",
  "id": "06069",
  "state_id": "CA",
  "state_name": "California",
  "lat": 36.6057,
  "lng": -121.075,
  "population": 64753,
  "main": ""
}, {
  "county": "Tuolumne",
  "county_ascii": "Tuolumne",
  "name": "Tuolumne County",
  "id": "06109",
  "state_id": "CA",
  "state_name": "California",
  "lat": 38.0276,
  "lng": -119.9548,
  "population": 54993,
  "main": ""
}, {
  "county": "Calaveras",
  "county_ascii": "Calaveras",
  "name": "Calaveras County",
  "id": "06009",
  "state_id": "CA",
  "state_name": "California",
  "lat": 38.2046,
  "lng": -120.5541,
  "population": 45674,
  "main": ""
}, {
  "county": "Siskiyou",
  "county_ascii": "Siskiyou",
  "name": "Siskiyou County",
  "id": "06093",
  "state_id": "CA",
  "state_name": "California",
  "lat": 41.5927,
  "lng": -122.5404,
  "population": 44049,
  "main": ""
}, {
  "county": "Amador",
  "county_ascii": "Amador",
  "name": "Amador County",
  "id": "06005",
  "state_id": "CA",
  "state_name": "California",
  "lat": 38.4464,
  "lng": -120.6511,
  "population": 40577,
  "main": ""
}, {
  "county": "Lassen",
  "county_ascii": "Lassen",
  "name": "Lassen County",
  "id": "06035",
  "state_id": "CA",
  "state_name": "California",
  "lat": 40.6736,
  "lng": -120.5943,
  "population": 31873,
  "main": ""
}, {
  "county": "Glenn",
  "county_ascii": "Glenn",
  "name": "Glenn County",
  "id": "06021",
  "state_id": "CA",
  "state_name": "California",
  "lat": 39.5981,
  "lng": -122.3919,
  "population": 28657,
  "main": ""
}, {
  "county": "Del Norte",
  "county_ascii": "Del Norte",
  "name": "Del Norte County",
  "id": "06015",
  "state_id": "CA",
  "state_name": "California",
  "lat": 41.7431,
  "lng": -123.8972,
  "population": 27462,
  "main": ""
}, {
  "county": "Colusa",
  "county_ascii": "Colusa",
  "name": "Colusa County",
  "id": "06011",
  "state_id": "CA",
  "state_name": "California",
  "lat": 39.1775,
  "lng": -122.237,
  "population": 21811,
  "main": ""
}, {
  "county": "Plumas",
  "county_ascii": "Plumas",
  "name": "Plumas County",
  "id": "06063",
  "state_id": "CA",
  "state_name": "California",
  "lat": 40.0046,
  "lng": -120.8385,
  "population": 19650,
  "main": ""
}, {
  "county": "Inyo",
  "county_ascii": "Inyo",
  "name": "Inyo County",
  "id": "06027",
  "state_id": "CA",
  "state_name": "California",
  "lat": 36.5111,
  "lng": -117.4107,
  "population": 18829,
  "main": ""
}, {
  "county": "Mariposa",
  "county_ascii": "Mariposa",
  "name": "Mariposa County",
  "id": "06043",
  "state_id": "CA",
  "state_name": "California",
  "lat": 37.5815,
  "lng": -119.9054,
  "population": 17130,
  "main": ""
}, {
  "county": "Trinity",
  "county_ascii": "Trinity",
  "name": "Trinity County",
  "id": "06105",
  "state_id": "CA",
  "state_name": "California",
  "lat": 40.6507,
  "lng": -123.1126,
  "population": 15889,
  "main": ""
}, {
  "county": "Mono",
  "county_ascii": "Mono",
  "name": "Mono County",
  "id": "06051",
  "state_id": "CA",
  "state_name": "California",
  "lat": 37.9391,
  "lng": -118.8868,
  "population": 13219,
  "main": ""
}, {
  "county": "Modoc",
  "county_ascii": "Modoc",
  "name": "Modoc County",
  "id": "06049",
  "state_id": "CA",
  "state_name": "California",
  "lat": 41.5898,
  "lng": -120.725,
  "population": 8651,
  "main": ""
}, {
  "county": "Sierra",
  "county_ascii": "Sierra",
  "name": "Sierra County",
  "id": "06091",
  "state_id": "CA",
  "state_name": "California",
  "lat": 39.5803,
  "lng": -120.5161,
  "population": 2916,
  "main": ""
}, {
  "county": "Alpine",
  "county_ascii": "Alpine",
  "name": "Alpine County",
  "id": "06003",
  "state_id": "CA",
  "state_name": "California",
  "lat": 38.5972,
  "lng": -119.8207,
  "population": 1515,
  "main": ""
}, {
  "county": "Nye",
  "county_ascii": "Nye",
  "name": "Nye County",
  "id": 32023,
  "state_id": "NV",
  "state_name": "Nevada",
  "lat": 38.0422,
  "lng": -116.4719,
  "population": 51698,
  "main": 1
}, {
  "county": "Douglas",
  "county_ascii": "Douglas",
  "name": "Douglas County",
  "id": 32005,
  "state_id": "NV",
  "state_name": "Nevada",
  "lat": 38.9123,
  "lng": -119.6162,
  "population": 49476,
  "main": ""
}, {
  "county": "Churchill",
  "county_ascii": "Churchill",
  "name": "Churchill County",
  "id": 32001,
  "state_id": "NV",
  "state_name": "Nevada",
  "lat": 39.5809,
  "lng": -118.3358,
  "population": 25409,
  "main": ""
}, {
  "county": "Humboldt",
  "county_ascii": "Humboldt",
  "name": "Humboldt County",
  "id": 32013,
  "state_id": "NV",
  "state_name": "Nevada",
  "lat": 41.4068,
  "lng": -118.112,
  "population": 17266,
  "main": ""
}, {
  "county": "White Pine",
  "county_ascii": "White Pine",
  "name": "White Pine County",
  "id": 32033,
  "state_id": "NV",
  "state_name": "Nevada",
  "lat": 39.4421,
  "lng": -114.9017,
  "population": 8997,
  "main": ""
}, {
  "county": "Pershing",
  "county_ascii": "Pershing",
  "name": "Pershing County",
  "id": 32027,
  "state_id": "NV",
  "state_name": "Nevada",
  "lat": 40.4404,
  "lng": -118.4044,
  "population": 6587,
  "main": ""
}, {
  "county": "Lander",
  "county_ascii": "Lander",
  "name": "Lander County",
  "id": 32015,
  "state_id": "NV",
  "state_name": "Nevada",
  "lat": 39.9337,
  "lng": -117.038,
  "population": 5728,
  "main": ""
}, {
  "county": "Mineral",
  "county_ascii": "Mineral",
  "name": "Mineral County",
  "id": 32021,
  "state_id": "NV",
  "state_name": "Nevada",
  "lat": 38.5386,
  "lng": -118.4349,
  "population": 4568,
  "main": ""
}, {
  "county": "Lincoln",
  "county_ascii": "Lincoln",
  "name": "Lincoln County",
  "id": 32017,
  "state_id": "NV",
  "state_name": "Nevada",
  "lat": 37.6433,
  "lng": -114.8775,
  "population": 4507,
  "main": ""
}, {
  "county": "Storey",
  "county_ascii": "Storey",
  "name": "Storey County",
  "id": 32029,
  "state_id": "NV",
  "state_name": "Nevada",
  "lat": 39.447,
  "lng": -119.5293,
  "population": 4095,
  "main": ""
}, {
  "county": "Eureka",
  "county_ascii": "Eureka",
  "name": "Eureka County",
  "id": 32011,
  "state_id": "NV",
  "state_name": "Nevada",
  "lat": 39.9839,
  "lng": -116.2686,
  "population": 1622,
  "main": ""
}, {
  "county": "Esmeralda",
  "county_ascii": "Esmeralda",
  "name": "Esmeralda County",
  "id": 32009,
  "state_id": "NV",
  "state_name": "Nevada",
  "lat": 37.7846,
  "lng": -117.6323,
  "population": 980,
  "main": ""
}];
const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json";
const colorScale = (0,d3_scale__WEBPACK_IMPORTED_MODULE_2__["default"])([1, 10000000], ['rgb(183, 193, 204)', 'rgb(170, 185, 192)', 'rgb(163, 178, 191)', 'rgb(135, 161, 185)', 'rgb(135, 161, 185)', 'rgb(100, 135, 170)', 'rgb(100, 135, 170)', 'rgb(88, 127, 164)', 'rgb(61, 106, 149)', 'rgb(61, 106, 149)']);
const colorScaleHover = (0,d3_scale__WEBPACK_IMPORTED_MODULE_2__["default"])([1, 10000000], ['rgb(198, 208, 219)', 'rgb(185, 200, 207)', 'rgb(178, 193, 206)', 'rgb(150, 176, 200)', 'rgb(150, 176, 200)', 'rgb(115, 150, 185)', 'rgb(115, 150, 185)', 'rgb(103, 142, 179)', 'rgb(76, 121, 164)', 'rgb(76, 121, 164)']);
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
  // console.log({ data: (data ?? []).filter(county => county?.state_id === 'CA' || county?.state_id === 'NV') })
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
      lineNumber: 1022,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_simple_maps__WEBPACK_IMPORTED_MODULE_1__.Geographies, {
    geography: geoUrl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1044,
      columnNumber: 11
    }
  }, _ref => {
    let {
      geographies
    } = _ref;
    return geographies.map(geo => {
      const cur = data.find(s => s.id === geo.id);
      return (cur === null || cur === void 0 ? void 0 : cur.state_id) === 'CA' || (cur === null || cur === void 0 ? void 0 : cur.state_id) === 'NV' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_simple_maps__WEBPACK_IMPORTED_MODULE_1__.Geography, {
        stroke: "rgb(127,127,127)",
        strokeWidth: 0.25,
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
          lineNumber: 1049,
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
/******/ 	__webpack_require__.h = function() { return "3aed727c08e8db6f1385"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=cms.59539c259ee1d541082d.hot-update.js.map