module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/About/About.module.scss":
/*!********************************************!*\
  !*** ./components/About/About.module.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"headerWrapper": "About_headerWrapper__SSuM0",
	"separator": "About_separator__2xfEg",
	"subtitle": "About_subtitle__115to"
};

/***/ }),

/***/ "./components/About/About.tsx":
/*!************************************!*\
  !*** ./components/About/About.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Personal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Personal */ "./components/Personal/index.js");
/* harmony import */ var _Career__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Career */ "./components/Career/index.js");
/* harmony import */ var _Headline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Headline */ "./components/Headline/index.js");
/* harmony import */ var _About_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./About.module.scss */ "./components/About/About.module.scss");
/* harmony import */ var _About_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_About_module_scss__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/sigrundish/personal-apps/resume/components/About/About.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const {
  container,
  headerWrapper,
  separator,
  subtitle
} = _About_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a;

const About = () => {
  const subtitle = __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, "Hi there! Glad that you are showing interest to get to know me better."), "Hopefully it will lead to exiting opportunities that we can work on together.");

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx(_Headline__WEBPACK_IMPORTED_MODULE_3__["default"], {
    headline: "About me",
    subtitle: subtitle,
    noPadding: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }), __jsx(_Personal__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }), __jsx(_Career__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./components/About/index.js":
/*!***********************************!*\
  !*** ./components/About/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _About__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./About */ "./components/About/About.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _About__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/Career/Career.module.scss":
/*!**********************************************!*\
  !*** ./components/Career/Career.module.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"flexWrapper": "Career_flexWrapper__3W5lC",
	"item": "Career_item__mUSiK",
	"image": "Career_image__2agCl",
	"fadeInAnimation": "Career_fadeInAnimation__3Zs9N",
	"fadein": "Career_fadein__MMShe",
	"rightSide": "Career_rightSide__g63Ie",
	"passionTitle": "Career_passionTitle__2s3gY",
	"h3": "Career_h3__16Htz",
	"arrows": "Career_arrows__3k9-k",
	"arrow": "Career_arrow__2NtcS",
	"arrowLeft": "Career_arrowLeft__Oca4I",
	"arrowRight": "Career_arrowRight__3c4t1",
	"arrowDisabled": "Career_arrowDisabled__11KKF",
	"paragraph": "Career_paragraph__2a8jr",
	"expandWidth": "Career_expandWidth___fe1D",
	"slideUp": "Career_slideUp__Y7i7O",
	"slideFromRight": "Career_slideFromRight__2cwvM",
	"slideFromLeft": "Career_slideFromLeft__36gpI"
};

/***/ }),

/***/ "./components/Career/Career.tsx":
/*!**************************************!*\
  !*** ./components/Career/Career.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-swipeable-views */ "react-swipeable-views");
/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_swipeable_views__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/about */ "./data/about.ts");
/* harmony import */ var _Separator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Separator */ "./components/Separator/index.js");
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Section */ "./components/Section/index.js");
/* harmony import */ var _Career_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Career.module.scss */ "./components/Career/Career.module.scss");
/* harmony import */ var _Career_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Career_module_scss__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/sigrundish/personal-apps/resume/components/Career/Career.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const {
  flexWrapper,
  item,
  image,
  rightSide,
  h3,
  passionTitle,
  paragraph: paragraphStyle,
  arrows,
  arrow,
  arrowLeft,
  arrowRight,
  arrowDisabled,
  fadeInAnimation
} = _Career_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a;

const Career = () => {
  const {
    0: index,
    1: setIndex
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: fadeIn,
    1: setFadeIn
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const isLeftDisabled = index < 1;
  const isRightDisabled = index + 1 === _data_about__WEBPACK_IMPORTED_MODULE_3__["passionList"].length;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setFadeIn(true);
  }, [index]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (fadeIn) {
      setTimeout(() => {
        setFadeIn(false);
      }, 800);
    }
  }, [fadeIn]);
  return __jsx(_Section__WEBPACK_IMPORTED_MODULE_5__["default"], {
    white: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: flexWrapper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(image, {
      [fadeInAnimation]: fadeIn
    }),
    style: {
      backgroundImage: `url(${_data_about__WEBPACK_IMPORTED_MODULE_3__["passionImages"][index]})`
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: rightSide,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, __jsx("h3", {
    className: h3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }, "My story"), __jsx(_Separator__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }), __jsx(react_swipeable_views__WEBPACK_IMPORTED_MODULE_2___default.a, {
    index: index,
    onSwitching: idx => {
      if (Number.isInteger(idx)) {
        setIndex(idx);
      }
    },
    enableMouseEvents: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }, _data_about__WEBPACK_IMPORTED_MODULE_3__["passionList"].map(({
    title,
    paragraph
  }) => __jsx("div", {
    className: item,
    key: title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 15
    }
  }, __jsx("h3", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(passionTitle),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }, title), __jsx("p", {
    className: paragraphStyle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  }, paragraph)))), __jsx("div", {
    className: arrows,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }, __jsx("div", {
    role: "button",
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(arrow, arrowLeft, {
      [arrowDisabled]: isLeftDisabled
    }),
    onClick: isLeftDisabled ? () => {} : () => setIndex(index - 1),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }), __jsx("div", {
    role: "button",
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(arrow, arrowRight, {
      [arrowDisabled]: isRightDisabled
    }),
    onClick: isRightDisabled ? () => {} : () => setIndex(index + 1),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Career);

/***/ }),

/***/ "./components/Career/index.js":
/*!************************************!*\
  !*** ./components/Career/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Career__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Career */ "./components/Career/Career.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Career__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/Education/Education.tsx":
/*!********************************************!*\
  !*** ./components/Education/Education.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var use_is_in_viewport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! use-is-in-viewport */ "use-is-in-viewport");
/* harmony import */ var use_is_in_viewport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(use_is_in_viewport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_education__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/education */ "./data/education.ts");
/* harmony import */ var _EducationItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../EducationItem */ "./components/EducationItem/index.js");
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Section */ "./components/Section/index.js");
/* harmony import */ var _Headline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Headline */ "./components/Headline/index.js");
var _jsxFileName = "/Users/sigrundish/personal-apps/resume/components/Education/Education.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const Education = () => {
  const [isInViewport, targetRef] = use_is_in_viewport__WEBPACK_IMPORTED_MODULE_1___default()();
  const {
    0: animate,
    1: setAnimate
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (isInViewport) {
      setAnimate(true);
    }
  }, [isInViewport]);
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx(_Headline__WEBPACK_IMPORTED_MODULE_5__["default"], {
    headline: "Education",
    white: true,
    noPadding: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }), __jsx(_Section__WEBPACK_IMPORTED_MODULE_4__["default"], {
    ref: targetRef,
    tall: true,
    white: true,
    noPadding: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, _data_education__WEBPACK_IMPORTED_MODULE_2__["educationList"].map((item, idx) => __jsx(_EducationItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: idx,
    item: item,
    animate: animate,
    animateDelay: idx * 0.5,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Education);

/***/ }),

/***/ "./components/Education/index.js":
/*!***************************************!*\
  !*** ./components/Education/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Education__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Education */ "./components/Education/Education.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Education__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/EducationItem/EducationItem.module.scss":
/*!************************************************************!*\
  !*** ./components/EducationItem/EducationItem.module.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "EducationItem_container__3bd5e",
	"rightSide": "EducationItem_rightSide__1AKGu",
	"content": "EducationItem_content__jLkrU",
	"contentHeader": "EducationItem_contentHeader__1-r_l",
	"subject": "EducationItem_subject__3FnOE",
	"school": "EducationItem_school__2Tc6S",
	"courses": "EducationItem_courses__1TTZp",
	"course": "EducationItem_course__25NJn",
	"coursesTrigger": "EducationItem_coursesTrigger__3zM2g",
	"arrow": "EducationItem_arrow__1zCPz",
	"arrowOpen": "EducationItem_arrowOpen__Rlt7e"
};

/***/ }),

/***/ "./components/EducationItem/EducationItem.tsx":
/*!****************************************************!*\
  !*** ./components/EducationItem/EducationItem.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ExpandWithAnimation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ExpandWithAnimation */ "./components/ExpandWithAnimation/index.js");
/* harmony import */ var _TimelineItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../TimelineItem */ "./components/TimelineItem/index.js");
/* harmony import */ var _EducationItem_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EducationItem.module.scss */ "./components/EducationItem/EducationItem.module.scss");
/* harmony import */ var _EducationItem_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_EducationItem_module_scss__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/sigrundish/personal-apps/resume/components/EducationItem/EducationItem.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const {
  contentHeader,
  subject: subjectStyle,
  school: schoolStyle,
  coursesTrigger,
  arrow,
  arrowOpen,
  courses: coursesStyle,
  course: courseStyle
} = _EducationItem_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a;

const EducationItem = ({
  item,
  animate,
  animateDelay
}) => {
  const {
    0: showCourses,
    1: setShowCourses
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    year,
    school,
    subject,
    courses
  } = item;
  return __jsx(_TimelineItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
    year: year,
    animate: animate,
    animateDelay: animateDelay,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: contentHeader,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: subjectStyle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, subject), __jsx("div", {
    className: schoolStyle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, school), courses && __jsx("div", {
    role: "button",
    className: coursesTrigger,
    onClick: () => setShowCourses(!showCourses),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, `${showCourses ? 'Hide' : 'See'} Courses`, __jsx("span", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(arrow, {
      [arrowOpen]: showCourses
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 15
    }
  }))), courses && __jsx(_ExpandWithAnimation__WEBPACK_IMPORTED_MODULE_2__["default"], {
    isCollapsed: !showCourses,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }, __jsx("ul", {
    className: coursesStyle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, courses.map((course, idx) => __jsx("li", {
    key: idx,
    className: courseStyle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }, course))))));
};

/* harmony default export */ __webpack_exports__["default"] = (EducationItem);

/***/ }),

/***/ "./components/EducationItem/index.js":
/*!*******************************************!*\
  !*** ./components/EducationItem/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EducationItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EducationItem */ "./components/EducationItem/EducationItem.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _EducationItem__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/ExpandWithAnimation/ExpandWithAnimation.module.scss":
/*!************************************************************************!*\
  !*** ./components/ExpandWithAnimation/ExpandWithAnimation.module.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "ExpandWithAnimation_container__1nZhY"
};

/***/ }),

/***/ "./components/ExpandWithAnimation/ExpandWithAnimation.tsx":
/*!****************************************************************!*\
  !*** ./components/ExpandWithAnimation/ExpandWithAnimation.tsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ExpandWithAnimation_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExpandWithAnimation.module.scss */ "./components/ExpandWithAnimation/ExpandWithAnimation.module.scss");
/* harmony import */ var _ExpandWithAnimation_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ExpandWithAnimation_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/sigrundish/personal-apps/resume/components/ExpandWithAnimation/ExpandWithAnimation.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const {
  container
} = _ExpandWithAnimation_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a;

const ExpandWithAnimation = ({
  children,
  isCollapsed
}) => {
  const content = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (isCollapsed) {
      collapseSection();
    }
  }, []);
  /**
   * If the content changes we want to make sure the height is correct.
   */

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (isCollapsed) {
      collapseSection();
    } else {
      expandSection();
    }
  });
  /**
   * Called when componend is collapsed.
   * Updates the height to 0.
   */

  const collapseSection = () => {
    if (content.current) {
      content.current.style.height = 0 + 'px';
    }
  };
  /**
   * Called when componend is expanded.
   * Updates the height to fit its content.
   */


  const expandSection = () => {
    if (content.current) {
      const sectionHeight = content.current.scrollHeight;
      content.current.style.height = sectionHeight + 'px';
    }
  };

  return __jsx("div", {
    ref: content,
    className: container,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 5
    }
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (ExpandWithAnimation);

/***/ }),

/***/ "./components/ExpandWithAnimation/index.js":
/*!*************************************************!*\
  !*** ./components/ExpandWithAnimation/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ExpandWithAnimation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExpandWithAnimation */ "./components/ExpandWithAnimation/ExpandWithAnimation.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ExpandWithAnimation__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/Heading/Heading.module.scss":
/*!************************************************!*\
  !*** ./components/Heading/Heading.module.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "Heading_container__N_uQU",
	"backgroundImage": "Heading_backgroundImage__1xEkE",
	"overlay": "Heading_overlay__3e-JV",
	"flexWrapper": "Heading_flexWrapper__hXIYQ",
	"content": "Heading_content__1jeks",
	"h1": "Heading_h1__35mgr",
	"h2": "Heading_h2__TKuJp",
	"h3": "Heading_h3__2w3Ps",
	"imageWrapper": "Heading_imageWrapper__2-b9Y",
	"box": "Heading_box__1ZrtL",
	"image": "Heading_image__3XmLI"
};

/***/ }),

/***/ "./components/Heading/Heading.tsx":
/*!****************************************!*\
  !*** ./components/Heading/Heading.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Heading_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Heading.module.scss */ "./components/Heading/Heading.module.scss");
/* harmony import */ var _Heading_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Heading_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/sigrundish/personal-apps/resume/components/Heading/Heading.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const {
  container,
  backgroundImage,
  overlay,
  content,
  h1,
  h2,
  h3,
  flexWrapper,
  imageWrapper,
  box,
  image
} = _Heading_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a;

const Heading = () => {
  return __jsx("div", {
    className: container,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: backgroundImage,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: overlay,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: flexWrapper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: h3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, "I'm"), __jsx("h1", {
    className: h1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, "Sigr\xFAn D\xEDs Hauksd\xF3ttir"), __jsx("h2", {
    className: h2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, "Software Developer")), __jsx("div", {
    className: imageWrapper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: box,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: image,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Heading);

/***/ }),

/***/ "./components/Heading/index.js":
/*!*************************************!*\
  !*** ./components/Heading/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Heading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Heading */ "./components/Heading/Heading.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Heading__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/Headline/Headline.module.scss":
/*!**************************************************!*\
  !*** ./components/Headline/Headline.module.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "Headline_container__2mtZr",
	"whiteContainer": "Headline_whiteContainer__uqPIG",
	"noPaddingContainer": "Headline_noPaddingContainer__3DetB",
	"h2": "Headline_h2__1xKOV",
	"h3": "Headline_h3__1L3M3"
};

/***/ }),

/***/ "./components/Headline/Headline.tsx":
/*!******************************************!*\
  !*** ./components/Headline/Headline.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Separator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Separator */ "./components/Separator/index.js");
/* harmony import */ var _Headline_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Headline.module.scss */ "./components/Headline/Headline.module.scss");
/* harmony import */ var _Headline_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Headline_module_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/sigrundish/personal-apps/resume/components/Headline/Headline.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const {
  container,
  whiteContainer,
  noPaddingContainer,
  h2,
  h3
} = _Headline_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a;

const Headline = ({
  headline,
  subtitle,
  white,
  noPadding
}) => __jsx("div", {
  className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(container, {
    [whiteContainer]: white,
    [noPaddingContainer]: noPadding
  }),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 3
  }
}, __jsx("h2", {
  className: h2,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }
}, headline), __jsx(_Separator__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }
}), subtitle && __jsx("h3", {
  className: h3,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 18
  }
}, subtitle));

/* harmony default export */ __webpack_exports__["default"] = (Headline);

/***/ }),

/***/ "./components/Headline/index.js":
/*!**************************************!*\
  !*** ./components/Headline/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Headline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Headline */ "./components/Headline/Headline.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Headline__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/Highlight/Highlight.module.scss":
/*!****************************************************!*\
  !*** ./components/Highlight/Highlight.module.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "Highlight_container__1goxo",
	"heading": "Highlight_heading__32oBX",
	"textWrapper": "Highlight_textWrapper__2Lcm-",
	"title": "Highlight_title__2Q4Qj",
	"description": "Highlight_description__17Av1"
};

/***/ }),

/***/ "./components/Highlight/Highlight.tsx":
/*!********************************************!*\
  !*** ./components/Highlight/Highlight.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Highlight_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Highlight.module.scss */ "./components/Highlight/Highlight.module.scss");
/* harmony import */ var _Highlight_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Highlight_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/sigrundish/personal-apps/resume/components/Highlight/Highlight.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const {
  container,
  heading,
  icon: iconStyle,
  textWrapper,
  title: titleStyle,
  description: descriptionStyle
} = _Highlight_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a;

const Highlight = ({
  title,
  description,
  icon
}) => {
  return __jsx("div", {
    className: container,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: heading,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, icon, __jsx("div", {
    className: textWrapper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: titleStyle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, title), __jsx("div", {
    className: descriptionStyle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, description))));
};

/* harmony default export */ __webpack_exports__["default"] = (Highlight);

/***/ }),

/***/ "./components/Highlight/index.js":
/*!***************************************!*\
  !*** ./components/Highlight/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Highlight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Highlight */ "./components/Highlight/Highlight.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Highlight__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/Highlights/Highlights.module.scss":
/*!******************************************************!*\
  !*** ./components/Highlights/Highlights.module.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"heading": "Highlights_heading__CNsxB",
	"highlights": "Highlights_highlights__3LyI8",
	"icon": "Highlights_icon__29FKp"
};

/***/ }),

/***/ "./components/Highlights/Highlights.tsx":
/*!**********************************************!*\
  !*** ./components/Highlights/Highlights.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Highlight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Highlight */ "./components/Highlight/index.js");
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Section */ "./components/Section/index.js");
/* harmony import */ var _Headline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Headline */ "./components/Headline/index.js");
/* harmony import */ var _Highlights_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Highlights.module.scss */ "./components/Highlights/Highlights.module.scss");
/* harmony import */ var _Highlights_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Highlights_module_scss__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/sigrundish/personal-apps/resume/components/Highlights/Highlights.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var WebDevelopment = function WebDevelopment(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M467 1H45C20.187 1 0 21.187 0 46v420c0 24.813 20.187 45 45 45h422c24.813 0 45-20.187 45-45V46c0-24.813-20.187-45-45-45zM45 31h422c8.271 0 15 6.729 15 15v75H30V46c0-8.271 6.729-15 15-15zm422 450H45c-8.271 0-15-6.729-15-15V151h452v315c0 8.271-6.729 15-15 15z"
  }), __jsx("path", {
    d: "M306.909 197.213c-7.614-3.263-16.433.264-19.696 7.878l-90 210c-3.264 7.614.264 16.433 7.878 19.696 7.617 3.264 16.434-.266 19.696-7.878l90-210c3.264-7.615-.264-16.433-7.878-19.696zM177.713 246.629c-5.176-6.469-14.617-7.517-21.083-2.342l-75 60c-7.499 5.997-7.504 17.424 0 23.426l75 60c6.469 5.176 15.91 4.126 21.083-2.342 5.175-6.469 4.127-15.909-2.343-21.083L115.012 316l60.358-48.287c6.47-5.175 7.518-14.614 2.343-21.084zM430.37 304.287l-75-60c-6.469-5.176-15.909-4.127-21.083 2.342-5.175 6.469-4.127 15.909 2.343 21.083L396.988 316l-60.358 48.287c-6.47 5.175-7.518 14.614-2.343 21.083 5.182 6.476 14.623 7.512 21.083 2.342l75-60c7.499-5.997 7.504-17.423 0-23.425z"
  }), __jsx("circle", {
    cx: "76",
    cy: "76",
    r: "15"
  }), __jsx("circle", {
    cx: "136",
    cy: "76",
    r: "15"
  }), __jsx("circle", {
    cx: "196",
    cy: "76",
    r: "15"
  }), __jsx("path", {
    d: "M346 91h90c8.284 0 15-6.716 15-15s-6.716-15-15-15h-90c-8.284 0-15 6.716-15 15s6.716 15 15 15z"
  }));
};

WebDevelopment.defaultProps = {
  height: "512",
  viewBox: "0 0 512 512",
  width: "512",
  xmlns: "http://www.w3.org/2000/svg"
};

var UI = function UI(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M467 1H45C20.187 1 0 21.187 0 46v420c0 24.813 20.187 45 45 45h422c24.813 0 45-20.187 45-45V46c0-24.813-20.187-45-45-45zM45 31h422c8.271 0 15 6.729 15 15v75H30V46c0-8.271 6.729-15 15-15zm422 450H45c-8.271 0-15-6.729-15-15V151h452v315c0 8.271-6.729 15-15 15z"
  }), __jsx("path", {
    d: "M436 181H76c-8.284 0-15 6.716-15 15v90c0 8.284 6.716 15 15 15h360c8.284 0 15-6.716 15-15v-90c0-8.284-6.716-15-15-15zm-15 90H91v-60h330zM226 331H76c-8.284 0-15 6.716-15 15v90c0 8.284 6.716 15 15 15h150c8.284 0 15-6.716 15-15v-90c0-8.284-6.716-15-15-15zm-15 90H91v-60h120z"
  }), __jsx("circle", {
    cx: "76",
    cy: "76",
    r: "15"
  }), __jsx("circle", {
    cx: "136",
    cy: "76",
    r: "15"
  }), __jsx("circle", {
    cx: "196",
    cy: "76",
    r: "15"
  }), __jsx("path", {
    d: "M346 91h90c8.284 0 15-6.716 15-15s-6.716-15-15-15h-90c-8.284 0-15 6.716-15 15s6.716 15 15 15zM436 331H286c-8.284 0-15 6.716-15 15v90c0 8.284 6.716 15 15 15h150c8.284 0 15-6.716 15-15v-90c0-8.284-6.716-15-15-15zm-15 90H301v-60h120z"
  }));
};

UI.defaultProps = {
  height: "512",
  viewBox: "0 0 512 512",
  width: "512",
  xmlns: "http://www.w3.org/2000/svg"
};

var Analytics = function Analytics(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M436 0c-24.813 0-45 20.187-45 45a44.769 44.769 0 0 0 8.94 26.892l-73.193 79.415A44.914 44.914 0 0 0 316 150a44.734 44.734 0 0 0-24.925 7.556l-52.132-39.099A44.842 44.842 0 0 0 241 105c0-24.813-20.187-45-45-45s-45 20.187-45 45c0 4.686.722 9.206 2.057 13.457l-52.132 39.099A44.734 44.734 0 0 0 76 150c-24.813 0-45 20.187-45 45s20.187 45 45 45 45-20.187 45-45c0-4.686-.722-9.206-2.057-13.457l52.132-39.099C178.216 147.213 186.787 150 196 150s17.784-2.787 24.925-7.556l52.132 39.099A44.842 44.842 0 0 0 271 195c0 24.813 20.187 45 45 45s45-20.187 45-45a44.769 44.769 0 0 0-8.94-26.892l73.193-79.415A44.914 44.914 0 0 0 436 90c24.813 0 45-20.187 45-45S460.813 0 436 0zM76 210c-8.271 0-15-6.729-15-15s6.729-15 15-15 15 6.729 15 15-6.729 15-15 15zm120-90c-8.271 0-15-6.729-15-15s6.729-15 15-15 15 6.729 15 15-6.729 15-15 15zm120 90c-8.271 0-15-6.729-15-15s6.729-15 15-15 15 6.729 15 15-6.729 15-15 15zM436 60c-8.271 0-15-6.729-15-15s6.729-15 15-15 15 6.729 15 15-6.729 15-15 15z"
  }), __jsx("path", {
    d: "M497 482h-15V195c0-8.284-6.716-15-15-15h-61c-8.284 0-15 6.716-15 15v287h-30V315c0-8.284-6.716-15-15-15h-60c-8.284 0-15 6.716-15 15v167h-30V255c0-8.284-6.716-15-15-15h-60c-8.284 0-15 6.716-15 15v227h-30V345c0-8.284-6.716-15-15-15H45c-8.284 0-15 6.716-15 15v137H15c-8.284 0-15 6.716-15 15s6.716 15 15 15h482c8.284 0 15-6.716 15-15s-6.716-15-15-15zm-406 0H60V360h31v122zm120 0h-30V270h30v212zm120 0h-30V330h30v152zm121 0h-31V210h31v272z"
  }));
};

Analytics.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
};

var Management = function Management(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M496.709 199.298h-47.39a201.315 201.315 0 0 0-12.356-30.994l37.176-37.177a15 15 0 0 0 0-21.212L407.99 43.766c-5.857-5.858-15.355-5.858-21.213 0l-36.002 36.001a201.259 201.259 0 0 0-31.574-13.501V15.164c0-8.284-6.716-15-15-15h-93.548c-8.284 0-15 6.716-15 15v50.013a201.146 201.146 0 0 0-33.096 13.605l-32.405-32.405c-5.857-5.858-15.355-5.857-21.213 0l-66.148 66.148c-5.858 5.857-5.858 15.355 0 21.213l32.654 32.655a201.193 201.193 0 0 0-13.341 32.905H15c-8.284 0-15 6.716-15 15v93.548c0 8.284 6.716 15 15 15h48.738a201.284 201.284 0 0 0 13.223 30.737l-34.823 34.822a15 15 0 0 0 0 21.213l66.148 66.148c5.857 5.858 15.355 5.858 21.213 0l35.996-35.996a201.369 201.369 0 0 0 28.259 11.51v45.265c0 8.284 6.716 15 15 15h93.548c8.284 0 15-6.716 15-15v-45.15a201.215 201.215 0 0 0 30.543-12.603l37.301 37.3c5.856 5.857 15.354 5.858 21.213 0l66.149-66.148a15 15 0 0 0 0-21.213l-37.053-37.053a201.626 201.626 0 0 0 12.228-28.833h49.026c8.284 0 15-6.716 15-15v-93.548c0-8.283-6.716-14.999-15-14.999zm-15 93.548h-45.146a15 15 0 0 0-14.474 11.061 171.403 171.403 0 0 1-18.133 42.699 15 15 0 0 0 2.281 18.282l34.45 34.45-44.937 44.935-34.649-34.649a14.998 14.998 0 0 0-18.203-2.328 171.3 171.3 0 0 1-44.315 18.276 15 15 0 0 0-11.282 14.532v41.44h-63.548v-41.533a15 15 0 0 0-11.253-14.524 171.394 171.394 0 0 1-42.298-17.207 14.998 14.998 0 0 0-18.057 2.413l-33.254 33.253-44.936-44.935 32.312-32.31a14.998 14.998 0 0 0 2.193-18.427 171.4 171.4 0 0 1-19.13-44.367 15 15 0 0 0-14.474-11.062H30v-63.548h43.546a15.001 15.001 0 0 0 14.58-11.474 171.196 171.196 0 0 1 18.815-46.485 14.999 14.999 0 0 0-2.327-18.203L74.61 123.131l44.936-44.935 29.803 29.802a14.998 14.998 0 0 0 18.282 2.281 171.178 171.178 0 0 1 46.617-19.151 15 15 0 0 0 11.405-14.563V30.164h63.548V77.44a15 15 0 0 0 11.129 14.492 171.399 171.399 0 0 1 45.137 19.338 15.001 15.001 0 0 0 18.427-2.194l33.49-33.49 44.936 44.935-34.434 34.434a14.999 14.999 0 0 0-2.412 18.057 171.312 171.312 0 0 1 17.823 44.813 15 15 0 0 0 14.579 11.473h43.833z"
  }), __jsx("path", {
    d: "M142.404 236.42c3.081 4.825 9.663 8.186 16.273 6.409l26.568-6.712c8.032-2.029 12.898-10.185 10.869-18.217-1.742-6.896-8.005-11.446-14.823-11.313 16.242-24.174 43.84-39.583 74.093-39.583 38.881 0 72.994 24.844 84.888 61.82 2.537 7.886 10.982 12.225 18.872 9.687 7.887-2.537 12.224-10.986 9.687-18.872-15.897-49.426-61.488-82.635-113.446-82.635-43.021 0-82.044 23.314-103.021 59.266-4.705-5.953-13.242-7.507-19.793-3.352-6.996 4.437-9.07 13.706-4.633 20.701l14.398 22.701.068.1zM369.514 275.613c-3.065-4.894-9.498-8.594-16.483-6.733l-26.568 6.711c-8.032 2.029-12.898 10.185-10.869 18.217 1.718 6.799 7.825 11.33 14.532 11.33.095 0 .191-.007.286-.009-16.243 24.17-43.839 39.575-74.088 39.575-38.88 0-72.993-24.844-84.888-61.82-2.537-7.886-10.987-12.225-18.873-9.686-7.886 2.537-12.223 10.986-9.686 18.873 15.898 49.426 61.489 82.634 113.446 82.634 43.021 0 82.044-23.314 103.021-59.265 4.705 5.953 13.243 7.506 19.793 3.352 6.996-4.438 9.07-13.706 4.633-20.701z"
  }));
};

Management.defaultProps = {
  height: "512",
  viewBox: "0 0 511.709 511.709",
  width: "512",
  xmlns: "http://www.w3.org/2000/svg"
};

var Innovation = function Innovation(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M255.985 59.99c-8.284 0-15 6.716-15 15s6.716 15 15 15c49.634 0 90.015 40.374 90.015 90 0 8.284 6.716 15 15 15s15-6.716 15-15c0-66.168-53.838-120-120.015-120z"
  }), __jsx("path", {
    d: "M217.335 4.03c-67.77 14.161-122.72 68.585-137.179 136.776-12.209 57.582 2.836 115.392 41.277 158.607C140.224 320.536 151 348.419 151 375.99v30c0 19.96 13.067 36.917 31.093 42.79 5.928 35.025 36.328 63.209 73.907 63.209 37.569 0 67.977-28.175 73.907-63.209C347.933 442.907 361 425.95 361 405.989v-30c0-27.625 10.812-55.173 30.442-77.569A179.6 179.6 0 0 0 436 179.99C436 66.425 332.051-19.936 217.335 4.03zM256 481.99c-19.282 0-36.188-13.268-42.431-31.1h84.861c-6.242 17.832-23.148 31.1-42.43 31.1zm75-76c0 8.271-6.729 15-15 15H196c-8.271 0-15-6.729-15-15v-15h150v15zm37.882-127.343c-20.92 23.867-33.791 52.647-37.057 82.343H180.178c-3.262-29.712-16.1-58.775-36.328-81.516-32.038-36.016-44.557-84.291-34.346-132.445C121.423 90.815 167.223 45.15 223.472 33.397 319.496 13.33 406 85.442 406 179.99a149.619 149.619 0 0 1-37.118 98.657zM45 179.99H15c-8.284 0-15 6.716-15 15s6.716 15 15 15h30c8.284 0 15-6.716 15-15s-6.716-15-15-15zM51.213 104.99L30 83.777c-5.857-5.858-15.355-5.858-21.213 0-5.858 5.858-5.858 15.355 0 21.213L30 126.203c5.857 5.858 15.355 5.859 21.213 0 5.858-5.858 5.858-15.355 0-21.213zM51.213 263.777c-5.858-5.858-15.356-5.858-21.213 0L8.787 284.99c-5.858 5.858-5.858 15.355 0 21.213 5.857 5.858 15.355 5.859 21.213 0l21.213-21.213c5.858-5.858 5.858-15.355 0-21.213zM497 179.99h-30c-8.284 0-15 6.716-15 15s6.716 15 15 15h30c8.284 0 15-6.716 15-15s-6.716-15-15-15zM503.213 83.777c-5.857-5.858-15.355-5.858-21.213 0l-21.213 21.213c-5.858 5.858-5.858 15.355 0 21.213 5.857 5.857 15.355 5.858 21.213 0l21.213-21.213c5.858-5.858 5.858-15.355 0-21.213zM503.213 284.99L482 263.777c-5.857-5.858-15.355-5.858-21.213 0-5.858 5.858-5.858 15.355 0 21.213L482 306.203c5.857 5.857 15.355 5.858 21.213 0 5.858-5.858 5.858-15.355 0-21.213z"
  }));
};

Innovation.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
};

var Team = function Team(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M507.607 351.689l-28.283-28.284c6.221-33.829-4.471-68.932-28.933-93.394l-5.781-5.781 61.993-61.943c5.86-5.855 5.864-15.353.008-21.213s-15.353-5.864-21.213-.009l-62.002 61.952-96.711-96.489 80.922-80.922c5.858-5.858 5.858-15.355 0-21.213-5.857-5.858-15.355-5.858-21.213 0l-87.75 87.75a45.947 45.947 0 0 0-5.343-.323c-12.043 0-23.344 4.668-31.819 13.144a44.743 44.743 0 0 0-8.651 12.153L140.106 4.394c-5.857-5.858-15.355-5.858-21.213 0s-5.858 15.355 0 21.213l81.401 81.401a44.802 44.802 0 0 0-12.707 8.917 44.574 44.574 0 0 0-8.999 12.922c-7.596-5.483-16.713-8.442-26.302-8.442-12.043 0-23.343 4.668-31.819 13.144-15.728 15.727-17.357 40.296-4.89 57.855a44.823 44.823 0 0 0-12.082 8.613 44.818 44.818 0 0 0-8.759 12.36l-69.131-69.131c-5.858-5.858-15.355-5.858-21.213 0s-5.858 15.355 0 21.213l110.92 111.015L4.394 386.394c-5.858 5.858-5.858 15.355 0 21.213C7.322 410.536 11.161 412 15 412s7.678-1.464 10.606-4.394l110.92-110.92 14.049 14.049a44.795 44.795 0 0 0-12.431 8.782c-8.476 8.476-13.145 19.777-13.145 31.82s4.668 23.344 13.144 31.82l52.534 52.534-50.803 50.618c-5.868 5.847-5.886 15.345-.039 21.213a14.951 14.951 0 0 0 10.626 4.413c3.83 0 7.66-1.458 10.587-4.374l50.842-50.657 21.713 21.712c14.426 14.426 33.374 21.639 52.324 21.639 15.477 0 30.953-4.818 43.968-14.442l21.793 21.792c2.929 2.929 6.768 4.394 10.606 4.394s7.678-1.464 10.606-4.394c5.858-5.858 5.858-15.355 0-21.213l-31.37-31.37a15.085 15.085 0 0 0-11.641-4.357c-4.906.338-9.458 3.348-12.848 6.737-17.156 17.155-45.07 17.155-62.226 0l-95.46-95.459c-2.81-2.81-4.357-6.577-4.357-10.607s1.547-7.797 4.357-10.607c5.847-5.846 15.359-5.848 21.208-.005l28.289 28.289c2.929 2.929 6.768 4.394 10.606 4.394s7.678-1.464 10.606-4.394c5.858-5.858 5.858-15.355 0-21.213L124.71 242.444c-2.81-2.81-4.357-6.577-4.357-10.607s1.547-7.796 4.357-10.606c4.594-4.595 11.635-5.662 17.403-2.745.498.714 63.208 63.555 63.208 63.555 2.929 2.929 6.768 4.394 10.606 4.394s7.678-1.464 10.606-4.394c5.858-5.858 5.858-15.355 0-21.213l-84.854-84.853c-2.81-2.81-4.357-6.577-4.357-10.606 0-4.03 1.547-7.797 4.357-10.607s6.577-4.357 10.606-4.357c4.03 0 7.797 1.547 10.607 4.357l84.853 84.853a14.952 14.952 0 0 0 10.606 4.394c3.838 0 7.678-1.465 10.606-4.394 5.858-5.857 5.858-15.355 0-21.213l-61.078-61.078c-4.92-5.917-4.546-14.719.92-20.185 5.85-5.849 15.366-5.848 21.214 0l60.159 60.05c2.929 2.929 6.768 4.394 10.606 4.394s7.678-1.464 10.606-4.394c5.858-5.858 5.858-15.355 0-21.213l-29.696-29.696c-4.82-5.886-4.486-14.611 1.005-20.101 2.81-2.81 6.577-4.357 10.606-4.357s7.796 1.547 10.606 4.357l125.27 125.047c18.972 18.973 26.336 46.938 19.22 72.983a15 15 0 0 0 3.863 14.561l34.133 34.134a14.952 14.952 0 0 0 10.606 4.394c3.838 0 7.678-1.465 10.606-4.394 5.861-5.859 5.861-15.357.004-21.215z"
  }));
};

Team.defaultProps = {
  height: "512",
  viewBox: "0 0 512 512",
  width: "512",
  xmlns: "http://www.w3.org/2000/svg"
};



const {
  container,
  heading,
  icon,
  highlights
} = _Highlights_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a;

const Highlights = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, __jsx(_Headline__WEBPACK_IMPORTED_MODULE_3__["default"], {
    white: true,
    headline: 'Highlights',
    noPadding: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }), __jsx(_Section__WEBPACK_IMPORTED_MODULE_2__["default"], {
    white: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: highlights,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx(_components_Highlight__WEBPACK_IMPORTED_MODULE_1__["default"], {
    icon: __jsx(WebDevelopment, {
      className: icon,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 19
      }
    }),
    title: "Web development",
    description: "Focusing on front-end development of web applications.",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }), __jsx(_components_Highlight__WEBPACK_IMPORTED_MODULE_1__["default"], {
    icon: __jsx(UI, {
      className: icon,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 19
      }
    }),
    title: "UI and UX",
    description: "Enjoy beautiful design, pay attention to details and set high standards for UI and UX optimisation.",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }), __jsx(_components_Highlight__WEBPACK_IMPORTED_MODULE_1__["default"], {
    icon: __jsx(Analytics, {
      className: icon,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 19
      }
    }),
    title: "Analytics and reporting",
    description: "Make conceus decisions and want to be able to visualize how new features and changes effect the product I am working on.",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }), __jsx(_components_Highlight__WEBPACK_IMPORTED_MODULE_1__["default"], {
    icon: __jsx(Management, {
      className: icon,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 19
      }
    }),
    title: "Product/project management",
    description: "Make informed decisions about project priorities based on the organization's vision, strategy and goals. Organized with a good experience using Scrum.",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }), __jsx(_components_Highlight__WEBPACK_IMPORTED_MODULE_1__["default"], {
    icon: __jsx(Innovation, {
      className: icon,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 19
      }
    }),
    title: "Entrepreneur and innovation",
    description: "Creative and encourage those I work with to express their views so we can optimize ideas together.",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }), __jsx(_components_Highlight__WEBPACK_IMPORTED_MODULE_1__["default"], {
    icon: __jsx(Team, {
      className: icon,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 19
      }
    }),
    title: "Team player",
    description: "A positive atmosphere within a team creates magic.",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Highlights);

/***/ }),

/***/ "./components/Highlights/index.js":
/*!****************************************!*\
  !*** ./components/Highlights/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Highlights__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Highlights */ "./components/Highlights/Highlights.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Highlights__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/ImageBanner/ImageBanner.module.scss":
/*!********************************************************!*\
  !*** ./components/ImageBanner/ImageBanner.module.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "ImageBanner_container__2rij_",
	"tallContainer": "ImageBanner_tallContainer__1AdAE",
	"image": "ImageBanner_image__1nFwM"
};

/***/ }),

/***/ "./components/ImageBanner/ImageBanner.tsx":
/*!************************************************!*\
  !*** ./components/ImageBanner/ImageBanner.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ImageBanner_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ImageBanner.module.scss */ "./components/ImageBanner/ImageBanner.module.scss");
/* harmony import */ var _ImageBanner_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ImageBanner_module_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/sigrundish/personal-apps/resume/components/ImageBanner/ImageBanner.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const {
  container,
  tallContainer,
  image
} = _ImageBanner_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a;

const ImageBanner = ({
  images,
  tall
}) => {
  return __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(container, {
      [tallContainer]: tall
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, images.map((src, idx) => __jsx("div", {
    key: `image-${idx}`,
    className: image,
    style: {
      backgroundImage: `url('${src}')`,
      width: `${100 / images.length}%`
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ImageBanner);

/***/ }),

/***/ "./components/ImageBanner/index.js":
/*!*****************************************!*\
  !*** ./components/ImageBanner/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ImageBanner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageBanner */ "./components/ImageBanner/ImageBanner.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ImageBanner__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/Personal/Personal.module.scss":
/*!**************************************************!*\
  !*** ./components/Personal/Personal.module.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "Personal_container__32ns9",
	"h3": "Personal_h3__3pb9D",
	"textWrapper": "Personal_textWrapper__-q1uT",
	"paragraph": "Personal_paragraph__OV--3",
	"imageWrapper": "Personal_imageWrapper__2EQ1k",
	"portrait": "Personal_portrait__3AFr3",
	"background": "Personal_background__Ii9DM"
};

/***/ }),

/***/ "./components/Personal/Personal.tsx":
/*!******************************************!*\
  !*** ./components/Personal/Personal.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Separator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Separator */ "./components/Separator/index.js");
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Section */ "./components/Section/index.js");
/* harmony import */ var _Personal_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Personal.module.scss */ "./components/Personal/Personal.module.scss");
/* harmony import */ var _Personal_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Personal_module_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/sigrundish/personal-apps/resume/components/Personal/Personal.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const {
  container,
  textWrapper,
  imageWrapper,
  portrait,
  background,
  paragraph,
  h3
} = _Personal_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a;

const Personal = () => {
  return __jsx(_Section__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: container,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: textWrapper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx("h3", {
    className: h3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, "On the personal notes"), __jsx(_Separator__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }), __jsx("p", {
    className: paragraph,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, "My name is Sigr\xFAn D\xEDs Hauksd\xF3ttir and I am from Reykjav\xEDk, the capital of Iceland. Currently I am living in Denmark studying for my master\u2019s degree at the University of Southern Denmark."), __jsx("p", {
    className: paragraph,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, "I have really diverse interests. From sitting in a relaxed environment doing something creative to attending outdoor activities which increases the adrenaline. I am adventurous person who loves to travel, practise sports and one of the most fun things I do is snowboarding."), __jsx("p", {
    className: paragraph,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, "As an extrovert person I enjoy social activities and working in a team consisting of diverse people. When it comes to planning something for social life I am often quick to volunteer because I find it really entertaining.")), __jsx("div", {
    className: imageWrapper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: background,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: portrait,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Personal);

/***/ }),

/***/ "./components/Personal/index.js":
/*!**************************************!*\
  !*** ./components/Personal/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Personal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Personal */ "./components/Personal/Personal.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Personal__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/ProgressBar/ProgressBar.module.scss":
/*!********************************************************!*\
  !*** ./components/ProgressBar/ProgressBar.module.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "ProgressBar_container__1faKc",
	"progressContainer": "ProgressBar_progressContainer__3rKvy",
	"progress": "ProgressBar_progress__1hafr",
	"advancedProgress": "ProgressBar_advancedProgress__2PA5-",
	"intermediateProgress": "ProgressBar_intermediateProgress__3cYzu",
	"fundamentalProgress": "ProgressBar_fundamentalProgress__3XVKQ",
	"label": "ProgressBar_label__1MqgM",
	"fadein": "ProgressBar_fadein__2rO8Y",
	"expandWidth": "ProgressBar_expandWidth__1VdiN",
	"slideUp": "ProgressBar_slideUp__3gSTc",
	"slideFromRight": "ProgressBar_slideFromRight__cpb9z",
	"slideFromLeft": "ProgressBar_slideFromLeft__1VsoY"
};

/***/ }),

/***/ "./components/ProgressBar/ProgressBar.tsx":
/*!************************************************!*\
  !*** ./components/ProgressBar/ProgressBar.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ProgressBar_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProgressBar.module.scss */ "./components/ProgressBar/ProgressBar.module.scss");
/* harmony import */ var _ProgressBar_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ProgressBar_module_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/sigrundish/personal-apps/resume/components/ProgressBar/ProgressBar.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const {
  container,
  label,
  progressContainer,
  progress,
  advancedProgress,
  intermediateProgress,
  fundamentalProgress
} = _ProgressBar_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a;

const ProgressBar = ({
  title,
  width: finalWidth,
  animate,
  advanced,
  intermediate,
  fundamental
}) => {
  const {
    0: width,
    1: setWidth
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (animate) {
      setWidth(finalWidth);
    } else {
      setWidth(0);
    }
  }, [animate]);
  return __jsx("div", {
    className: container,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: label,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, title), __jsx("div", {
    className: progressContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(progress, {
      [advancedProgress]: advanced,
      [intermediateProgress]: intermediate,
      [fundamentalProgress]: fundamental
    }),
    style: {
      width: `${width}%`
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ProgressBar);

/***/ }),

/***/ "./components/ProgressBar/index.js":
/*!*****************************************!*\
  !*** ./components/ProgressBar/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProgressBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProgressBar */ "./components/ProgressBar/ProgressBar.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ProgressBar__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/Section/Section.module.scss":
/*!************************************************!*\
  !*** ./components/Section/Section.module.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "Section_container__3-XG8",
	"whiteContainer": "Section_whiteContainer__28t46",
	"tallContainer": "Section_tallContainer__2ltIT",
	"noPaddingContainer": "Section_noPaddingContainer__KbCh6",
	"inner": "Section_inner__cyp2g"
};

/***/ }),

/***/ "./components/Section/Section.tsx":
/*!****************************************!*\
  !*** ./components/Section/Section.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Section_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Section.module.scss */ "./components/Section/Section.module.scss");
/* harmony import */ var _Section_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Section_module_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/sigrundish/personal-apps/resume/components/Section/Section.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const {
  container,
  whiteContainer,
  tallContainer,
  noPaddingContainer,
  inner
} = _Section_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a;
const Section = Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(({
  children,
  white,
  tall,
  noPadding
}, ref) => {
  return __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(container, {
      [whiteContainer]: white,
      [tallContainer]: tall,
      [noPaddingContainer]: noPadding
    }),
    ref: ref,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: inner,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, children));
});
/* harmony default export */ __webpack_exports__["default"] = (Section);

/***/ }),

/***/ "./components/Section/index.js":
/*!*************************************!*\
  !*** ./components/Section/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Section */ "./components/Section/Section.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Section__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/Separator/Separator.module.scss":
/*!****************************************************!*\
  !*** ./components/Separator/Separator.module.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"separator": "Separator_separator__2wYvm"
};

/***/ }),

/***/ "./components/Separator/Separator.tsx":
/*!********************************************!*\
  !*** ./components/Separator/Separator.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Separator_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Separator.module.scss */ "./components/Separator/Separator.module.scss");
/* harmony import */ var _Separator_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Separator_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/sigrundish/personal-apps/resume/components/Separator/Separator.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const {
  separator
} = _Separator_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a;

const Separator = () => __jsx("div", {
  className: separator,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 25
  }
});

/* harmony default export */ __webpack_exports__["default"] = (Separator);

/***/ }),

/***/ "./components/Separator/index.js":
/*!***************************************!*\
  !*** ./components/Separator/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Separator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Separator */ "./components/Separator/Separator.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Separator__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/Skills/Skills.module.scss":
/*!**********************************************!*\
  !*** ./components/Skills/Skills.module.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"heading": "Skills_heading__1yV4P",
	"subtitle": "Skills_subtitle__Cq_7v",
	"bullet": "Skills_bullet__3gIms",
	"advancedBullet": "Skills_advancedBullet__2ObYI",
	"intermediateBullet": "Skills_intermediateBullet__q3g06",
	"fundamentalBullet": "Skills_fundamentalBullet__xNzA1",
	"h3": "Skills_h3__4E4Zj",
	"flexWrapper": "Skills_flexWrapper__1vzdr",
	"progressBars": "Skills_progressBars__1imXC"
};

/***/ }),

/***/ "./components/Skills/Skills.tsx":
/*!**************************************!*\
  !*** ./components/Skills/Skills.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var use_is_in_viewport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! use-is-in-viewport */ "use-is-in-viewport");
/* harmony import */ var use_is_in_viewport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(use_is_in_viewport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_computerSkills__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/computerSkills */ "./data/computerSkills.ts");
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Section */ "./components/Section/index.js");
/* harmony import */ var _ProgressBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ProgressBar */ "./components/ProgressBar/index.js");
/* harmony import */ var _Headline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Headline */ "./components/Headline/index.js");
/* harmony import */ var _Skills_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Skills.module.scss */ "./components/Skills/Skills.module.scss");
/* harmony import */ var _Skills_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Skills_module_scss__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/sigrundish/personal-apps/resume/components/Skills/Skills.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const {
  subtitle: subtitleStyle,
  h3,
  flexWrapper,
  progressBars,
  bullet,
  advancedBullet,
  intermediateBullet,
  fundamentalBullet
} = _Skills_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a;

const Skills = () => {
  const [isInViewport, targetRef] = use_is_in_viewport__WEBPACK_IMPORTED_MODULE_1___default()();
  const {
    0: animate,
    1: setAnimate
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (isInViewport) {
      setAnimate(true);
    }
  }, [isInViewport]);

  const subtitle = __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: subtitleStyle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(bullet, advancedBullet),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, "Advanced")), __jsx("div", {
    className: subtitleStyle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(bullet, intermediateBullet),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, "Intermetiate")), __jsx("div", {
    className: subtitleStyle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(bullet, fundamentalBullet),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, "Fundamental")));

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_Headline__WEBPACK_IMPORTED_MODULE_6__["default"], {
    headline: "Computer Skills",
    subtitle: subtitle,
    noPadding: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }), __jsx(_Section__WEBPACK_IMPORTED_MODULE_4__["default"], {
    ref: targetRef,
    tall: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: flexWrapper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: progressBars,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }, __jsx("h3", {
    className: h3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, "Programming Languages"), _data_computerSkills__WEBPACK_IMPORTED_MODULE_3__["programmingLanguages"].map(({
    title,
    percentage
  }, idx) => __jsx(_ProgressBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    key: idx,
    title: title,
    width: percentage,
    advanced: percentage > 75,
    intermediate: percentage <= 75 && percentage > 60,
    fundamental: percentage <= 60,
    animate: animate,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: progressBars,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }, __jsx("h3", {
    className: h3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, "Frameworks / Software"), _data_computerSkills__WEBPACK_IMPORTED_MODULE_3__["frameworks"].map(({
    title,
    percentage
  }, idx) => __jsx(_ProgressBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    key: idx,
    title: title,
    width: percentage,
    advanced: percentage > 75,
    intermediate: percentage <= 75 && percentage > 60,
    fundamental: percentage <= 60,
    animate: animate,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Skills);

/***/ }),

/***/ "./components/Skills/index.js":
/*!************************************!*\
  !*** ./components/Skills/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Skills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Skills */ "./components/Skills/Skills.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Skills__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/TimelineItem/TimelineItem.module.scss":
/*!**********************************************************!*\
  !*** ./components/TimelineItem/TimelineItem.module.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "TimelineItem_container__3edbq",
	"dividor": "TimelineItem_dividor__2svpn",
	"animateUp": "TimelineItem_animateUp__hdhAN",
	"slideUp": "TimelineItem_slideUp__3slzc",
	"animateFromLeft": "TimelineItem_animateFromLeft__1Wjne",
	"slideFromLeft": "TimelineItem_slideFromLeft__2C1Ng",
	"animateFromRight": "TimelineItem_animateFromRight__3fnVE",
	"slideFromRight": "TimelineItem_slideFromRight__3Cw7k",
	"rightSide": "TimelineItem_rightSide__2g3iY",
	"content": "TimelineItem_content__1c5xE",
	"year": "TimelineItem_year__1w_3L",
	"fadein": "TimelineItem_fadein__-PVxv",
	"expandWidth": "TimelineItem_expandWidth__1PIiq"
};

/***/ }),

/***/ "./components/TimelineItem/TimelineItem.tsx":
/*!**************************************************!*\
  !*** ./components/TimelineItem/TimelineItem.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TimelineItem_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TimelineItem.module.scss */ "./components/TimelineItem/TimelineItem.module.scss");
/* harmony import */ var _TimelineItem_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_TimelineItem_module_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/sigrundish/personal-apps/resume/components/TimelineItem/TimelineItem.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const {
  container,
  rightSide,
  content,
  year: yearStyle,
  dividor,
  animateUp,
  animateFromLeft,
  animateFromRight
} = _TimelineItem_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a;

const TimelineItem = ({
  year,
  children,
  animate,
  animateDelay
}) => {
  return __jsx("div", {
    className: container,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(yearStyle, {
      [animateFromLeft]: animate
    }),
    style: {
      animationDelay: `${animateDelay}s`
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, year), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(dividor, {
      [animateUp]: animate
    }),
    style: {
      animationDelay: `${animateDelay}s`
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(rightSide, {
      [animateFromRight]: animate
    }),
    style: {
      animationDelay: `${animateDelay}s`
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, children)));
};

/* harmony default export */ __webpack_exports__["default"] = (TimelineItem);

/***/ }),

/***/ "./components/TimelineItem/index.js":
/*!******************************************!*\
  !*** ./components/TimelineItem/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TimelineItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TimelineItem */ "./components/TimelineItem/TimelineItem.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _TimelineItem__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/WorkExperience/WorkExperience.tsx":
/*!******************************************************!*\
  !*** ./components/WorkExperience/WorkExperience.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var use_is_in_viewport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! use-is-in-viewport */ "use-is-in-viewport");
/* harmony import */ var use_is_in_viewport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(use_is_in_viewport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_workExperience__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/workExperience */ "./data/workExperience.ts");
/* harmony import */ var _WorkExperienceItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../WorkExperienceItem */ "./components/WorkExperienceItem/index.js");
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Section */ "./components/Section/index.js");
/* harmony import */ var _Headline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Headline */ "./components/Headline/index.js");
var _jsxFileName = "/Users/sigrundish/personal-apps/resume/components/WorkExperience/WorkExperience.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const WorkExperience = () => {
  const [isInViewport, targetRef] = use_is_in_viewport__WEBPACK_IMPORTED_MODULE_1___default()();
  const {
    0: animate,
    1: setAnimate
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (isInViewport) {
      setAnimate(true);
    }
  }, [isInViewport]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_Headline__WEBPACK_IMPORTED_MODULE_5__["default"], {
    headline: "Work Experience",
    noPadding: true,
    white: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }), __jsx(_Section__WEBPACK_IMPORTED_MODULE_4__["default"], {
    ref: targetRef,
    tall: true,
    white: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, _data_workExperience__WEBPACK_IMPORTED_MODULE_2__["workExperienceList"].map((item, idx) => __jsx(_WorkExperienceItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: idx,
    item: item,
    animate: animate,
    animateDelay: idx * 0.5,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (WorkExperience);

/***/ }),

/***/ "./components/WorkExperience/index.js":
/*!********************************************!*\
  !*** ./components/WorkExperience/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WorkExperience__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WorkExperience */ "./components/WorkExperience/WorkExperience.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _WorkExperience__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/WorkExperienceItem/WorkExperienceItem.module.scss":
/*!**********************************************************************!*\
  !*** ./components/WorkExperienceItem/WorkExperienceItem.module.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "WorkExperienceItem_container__3_k7s",
	"rightSide": "WorkExperienceItem_rightSide__3axdN",
	"content": "WorkExperienceItem_content__12XnM",
	"contentHeader": "WorkExperienceItem_contentHeader__1oHPV",
	"year": "WorkExperienceItem_year__6V4v9",
	"title": "WorkExperienceItem_title__Pp18J",
	"company": "WorkExperienceItem_company__3pxbO",
	"descriptionList": "WorkExperienceItem_descriptionList__2ZTtD",
	"description": "WorkExperienceItem_description__EIYNl",
	"descriptionTrigger": "WorkExperienceItem_descriptionTrigger__ABnT-",
	"arrow": "WorkExperienceItem_arrow__23706",
	"arrowOpen": "WorkExperienceItem_arrowOpen__3-0l1"
};

/***/ }),

/***/ "./components/WorkExperienceItem/WorkExperienceItem.tsx":
/*!**************************************************************!*\
  !*** ./components/WorkExperienceItem/WorkExperienceItem.tsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TimelineItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../TimelineItem */ "./components/TimelineItem/index.js");
/* harmony import */ var _WorkExperienceItem_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WorkExperienceItem.module.scss */ "./components/WorkExperienceItem/WorkExperienceItem.module.scss");
/* harmony import */ var _WorkExperienceItem_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_WorkExperienceItem_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ExpandWithAnimation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ExpandWithAnimation */ "./components/ExpandWithAnimation/index.js");
var _jsxFileName = "/Users/sigrundish/personal-apps/resume/components/WorkExperienceItem/WorkExperienceItem.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const {
  contentHeader,
  title: titleStyle,
  company: companyStyle,
  descriptionTrigger,
  arrow,
  arrowOpen,
  descriptionList: descriptionListStyle,
  description: descriptionStyle
} = _WorkExperienceItem_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a;

const WorkExperienceItem = ({
  item,
  animate,
  animateDelay
}) => {
  const {
    0: showDescription,
    1: setShowDescription
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    year,
    title,
    company,
    descriptionList
  } = item;
  return __jsx(_TimelineItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    year: year,
    animate: animate,
    animateDelay: animateDelay,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: contentHeader,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: titleStyle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, title), __jsx("div", {
    className: companyStyle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, company), descriptionList && __jsx("div", {
    role: "button",
    className: descriptionTrigger,
    onClick: () => setShowDescription(!showDescription),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, `${showDescription ? 'Hide' : 'See'} description`, __jsx("span", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(arrow, {
      [arrowOpen]: showDescription
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 15
    }
  }))), descriptionList && __jsx(_ExpandWithAnimation__WEBPACK_IMPORTED_MODULE_4__["default"], {
    isCollapsed: !showDescription,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }, __jsx("ul", {
    className: descriptionListStyle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, descriptionList.map((description, idx) => __jsx("li", {
    key: idx,
    className: descriptionStyle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }, description))))));
};

/* harmony default export */ __webpack_exports__["default"] = (WorkExperienceItem);

/***/ }),

/***/ "./components/WorkExperienceItem/index.js":
/*!************************************************!*\
  !*** ./components/WorkExperienceItem/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WorkExperienceItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WorkExperienceItem */ "./components/WorkExperienceItem/WorkExperienceItem.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _WorkExperienceItem__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./data/about.ts":
/*!***********************!*\
  !*** ./data/about.ts ***!
  \***********************/
/*! exports provided: passionList, passionImages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passionList", function() { return passionList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passionImages", function() { return passionImages; });
const passionList = [{
  title: 'Endless directions to choose from',
  paragraph: 'When I was studying for my BSc degree in Software Engineering, ' + 'I realized that the career opportunities with this background are endless. ' + 'Knowing I’m an adventurous person with broad interests, ' + 'I wanted to gain experience in the labor market before deciding what areas I want to specialize in with further education.'
}, {
  title: 'My specialties',
  paragraph: 'Since 2017 I have been working as a software developer for a company ' + "called Dohop. I've spent the last three years helping to build " + 'flight search engines that connect itineraries and allows customers ' + 'to book them in one place easily. My main focus there is developing web applications ' + 'where my strengths lies in the front-end implementation besides working with data analytics and reporting. '
}, {
  title: 'Future goals',
  paragraph: 'Working in the technical industry, I gained a personal passion for ' + 'discovering not only how to solve complicated challenges, but what ' + 'challenges to solve. I love having an impact by sharing my technical ' + 'knowledge when creating software solutions, however I have also ' + 'realized the incredible importance of seeing the bigger picture, and ' + 'it is a skill I want to specialize in. Currently, I’m chasing that ' + 'goal by studying for a MSc degree in PDI engineering, product ' + 'development and innovation. I want to be confident in the decision ' + 'making at every step of the progress to make an idea become reality. '
}, {
  title: ' Team player',
  paragraph: 'I have variety experience in group work of all kinds, ' + 'both as a leader and as a member. In me, you will find someone who thinks it is ' + 'crucial to create a positive atmosphere along with the group of people I work with, ' + 'who wants to know how the projects I work on relate to the organization’s vision and goals, ' + 'and has the passion to chase big ideas until they become reality.'
}];
const passionImages = ['/img/map.JPG', '/img/dohop.jpg', '/img/sdu.jpg', '/img/running.JPG'];

/***/ }),

/***/ "./data/computerSkills.ts":
/*!********************************!*\
  !*** ./data/computerSkills.ts ***!
  \********************************/
/*! exports provided: programmingLanguages, frameworks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "programmingLanguages", function() { return programmingLanguages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frameworks", function() { return frameworks; });
const programmingLanguages = [{
  title: 'HTML',
  percentage: 90
}, {
  title: 'CSS, SCSS, LESS, CSS Modules',
  percentage: 90
}, {
  title: 'JavaScript',
  percentage: 90
}, {
  title: 'TypeScript',
  percentage: 80
}, {
  title: 'Java',
  percentage: 75
}, {
  title: 'Python',
  percentage: 60
}, {
  title: 'C/C++',
  percentage: 50
}, {
  title: 'SQL/PostgreSQL',
  percentage: 50
}];
const frameworks = [{
  title: 'React.js with Redux',
  percentage: 90
}, {
  title: 'Next.js',
  percentage: 80
}, {
  title: 'React Native',
  percentage: 75
}, {
  title: 'Express',
  percentage: 75
}, {
  title: 'Google Analytics and Tag Manager',
  percentage: 75
}, {
  title: 'Bugsnag',
  percentage: 70
}, {
  title: 'Contentful',
  percentage: 70
}, {
  title: 'Cypress',
  percentage: 60
}];

/***/ }),

/***/ "./data/education.ts":
/*!***************************!*\
  !*** ./data/education.ts ***!
  \***************************/
/*! exports provided: educationList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "educationList", function() { return educationList; });
const educationList = [{
  year: '2020 - Present',
  subject: 'MSc program in Engineering - Product Development and Innovation',
  school: 'SDU - University of Southern Denmark',
  courses: ['New Business Establishment', 'Project Portfolio Management', 'Consumer Product Testing and Optimization', 'Experience Based Design', 'System Analysis - Life Cycle Assessment']
}, {
  year: '2016 - 2018',
  subject: 'BSc degree in Software Engineering',
  school: 'University of Iceland',
  courses: ['Operation Management', 'Software Development', 'Project Management', 'Software Project I', 'Software Project II', 'Final Project', 'Computer Science ', 'Mathematical Structures for Computer Science', 'Data Base Theory and Practic', 'Web Programming', 'Graphical User Interface Programming', 'Physics 1', 'Physics 2', 'Mathematical Analysis I', 'Mathematical Analysis II', 'Probability and Statistic', 'Engineering Economic', 'Programming Language', 'Operating System', 'Formal Languages and Computabilit', 'Computational Intelligence', 'Linear Algebra']
}, {
  year: '2015 - 2016',
  subject: 'BSc program in Computer Engineering',
  school: 'NTNU - Norwegian University of Science and Technology',
  courses: ['Microcontrollers', 'Introduction to engineering', 'Mathematics 1', 'Object oriented programming', 'Webtechnologies', 'Physics and chemistry']
}, {
  year: '2011-2015',
  subject: 'Matriculation, physics track (May 2015) and Commercial Diploma (May 2013)',
  school: 'Commercial College of Iceland, Reykjavík, Iceland'
}];

/***/ }),

/***/ "./data/imageBanners.ts":
/*!******************************!*\
  !*** ./data/imageBanners.ts ***!
  \******************************/
/*! exports provided: imageBanner1, imageBanner2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imageBanner1", function() { return imageBanner1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imageBanner2", function() { return imageBanner2; });
const imageBanner1 = ['/img/skydive.JPG', '/img/snjobretti.JPG', '/img/studlagil.JPG', '/img/hestbak.JPG'];
const imageBanner2 = ['/img/speak.jpeg'];

/***/ }),

/***/ "./data/workExperience.ts":
/*!********************************!*\
  !*** ./data/workExperience.ts ***!
  \********************************/
/*! exports provided: workExperienceList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "workExperienceList", function() { return workExperienceList; });
const workExperienceList = [{
  year: '2017 - Present',
  title: 'Software Developer',
  company: 'Dohop',
  descriptionList: ['Building flight search engines that connect itineraries and allows customers to book them in one place easily.', 'Implementing web applications and internal systems from concept through deployment, where my focus lies in the front-end development and UI/UX experiment.', 'Visualizing how new features and changes effect the products with user and bug tracking, data analytics and reporting.', 'Having a significant impact on deciding OKRs for each upcoming quarter, sprint planning- and retrospective.']
}, {
  year: '2016 - 2018',
  title: 'Supervisor of Young People’s Council',
  company: 'Samfés',
  descriptionList: ['Samfés is the association for all social community centers in Iceland, two teenagers from every part of the country form the council.', 'Their work includes projects that allow the voice of young people in the country to be heard.']
}, {
  year: '2016 - 2017',
  title: 'Instructor',
  company: 'Miðberg youth center'
}, {
  year: '2009 - 2015',
  title: 'Sales Assistant',
  company: 'Garðs Apótek, pharmacy'
}, {
  year: '2014',
  title: 'Talent Show Supervisor',
  company: 'Seljaskóli Elementary School',
  descriptionList: ['For participation in Skrekkur, the annual talent show for elementary schools in Reykjavík, broadcasted on national TV.']
}, {
  year: '2012',
  title: 'Programming Instructor',
  company: 'Ad Astra',
  descriptionList: ['Offering courses for gifted children. Taught a course in computer game creation.']
}, {
  year: '2009 - 2010',
  title: 'Gymnastics Coach',
  company: 'Gerpla Gymnastics Team'
}];

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_imageBanners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/imageBanners */ "./data/imageBanners.ts");
/* harmony import */ var _components_Heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Heading */ "./components/Heading/index.js");
/* harmony import */ var _components_About__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/About */ "./components/About/index.js");
/* harmony import */ var _components_Skills__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Skills */ "./components/Skills/index.js");
/* harmony import */ var _components_Highlights__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Highlights */ "./components/Highlights/index.js");
/* harmony import */ var _components_Education__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Education */ "./components/Education/index.js");
/* harmony import */ var _components_WorkExperience__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/WorkExperience */ "./components/WorkExperience/index.js");
/* harmony import */ var _components_ImageBanner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/ImageBanner */ "./components/ImageBanner/index.js");
var _jsxFileName = "/Users/sigrundish/personal-apps/resume/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










const index = () => __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 3
  }
}, __jsx(_components_Heading__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }
}), __jsx(_components_Highlights__WEBPACK_IMPORTED_MODULE_5__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }
}), __jsx(_components_About__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }
}), __jsx(_components_ImageBanner__WEBPACK_IMPORTED_MODULE_8__["default"], {
  images: _data_imageBanners__WEBPACK_IMPORTED_MODULE_1__["imageBanner1"],
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }
}), __jsx(_components_Skills__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }
}), __jsx(_components_ImageBanner__WEBPACK_IMPORTED_MODULE_8__["default"], {
  images: _data_imageBanners__WEBPACK_IMPORTED_MODULE_1__["imageBanner2"],
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }
}), __jsx(_components_Education__WEBPACK_IMPORTED_MODULE_6__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }
}), __jsx(_components_WorkExperience__WEBPACK_IMPORTED_MODULE_7__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }
}));

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sigrundish/personal-apps/resume/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-swipeable-views":
/*!****************************************!*\
  !*** external "react-swipeable-views" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-swipeable-views");

/***/ }),

/***/ "use-is-in-viewport":
/*!*************************************!*\
  !*** external "use-is-in-viewport" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("use-is-in-viewport");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map