(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/index.js"],{

/***/ "./components/About/About.module.scss":
/*!********************************************!*\
  !*** ./components/About/About.module.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./About.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/About/About.module.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./About.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/About/About.module.scss",
      function () {
        var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./About.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/About/About.module.scss");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./components/About/About.tsx":
/*!************************************!*\
  !*** ./components/About/About.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Personal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Personal */ "./components/Personal/index.js");
/* harmony import */ var _Career__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Career */ "./components/Career/index.js");
/* harmony import */ var _Headline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Headline */ "./components/Headline/index.js");
/* harmony import */ var _About_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./About.module.scss */ "./components/About/About.module.scss");
/* harmony import */ var _About_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_About_module_scss__WEBPACK_IMPORTED_MODULE_4__);
var _this = undefined,
    _jsxFileName = "/Users/sigrundish/personal-apps/resume/components/About/About.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var container = _About_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.container,
    headerWrapper = _About_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.headerWrapper,
    separator = _About_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.separator,
    subtitle = _About_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.subtitle;

var About = function About() {
  var subtitle = __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, "Hi there! Glad that you are showing interest to get to know me better."), "Hopefully it will lead to exiting opportunities that we can work on together.");

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx(_Headline__WEBPACK_IMPORTED_MODULE_3__["default"], {
    headline: "About me",
    subtitle: subtitle,
    noPadding: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }), __jsx(_Personal__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }), __jsx(_Career__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
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
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./Career.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/Career/Career.module.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./Career.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/Career/Career.module.scss",
      function () {
        var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./Career.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/Career/Career.module.scss");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./components/Career/Career.tsx":
/*!**************************************!*\
  !*** ./components/Career/Career.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-swipeable-views */ "./node_modules/react-swipeable-views/lib/index.js");
/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_swipeable_views__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_about__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/about */ "./data/about.ts");
/* harmony import */ var _Separator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Separator */ "./components/Separator/index.js");
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Section */ "./components/Section/index.js");
/* harmony import */ var _Career_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Career.module.scss */ "./components/Career/Career.module.scss");
/* harmony import */ var _Career_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Career_module_scss__WEBPACK_IMPORTED_MODULE_7__);


var _this = undefined,
    _jsxFileName = "/Users/sigrundish/personal-apps/resume/components/Career/Career.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







var flexWrapper = _Career_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.flexWrapper,
    item = _Career_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.item,
    image = _Career_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.image,
    rightSide = _Career_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.rightSide,
    h3 = _Career_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.h3,
    passionTitle = _Career_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.passionTitle,
    paragraphStyle = _Career_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.paragraph,
    arrows = _Career_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.arrows,
    arrow = _Career_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.arrow,
    arrowLeft = _Career_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.arrowLeft,
    arrowRight = _Career_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.arrowRight,
    arrowDisabled = _Career_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.arrowDisabled,
    fadeInAnimation = _Career_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.fadeInAnimation;

var Career = function Career() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      index = _useState[0],
      setIndex = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      fadeIn = _useState2[0],
      setFadeIn = _useState2[1];

  var isLeftDisabled = index < 1;
  var isRightDisabled = index + 1 === _data_about__WEBPACK_IMPORTED_MODULE_4__["passionList"].length;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setFadeIn(true);
  }, [index]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (fadeIn) {
      setTimeout(function () {
        setFadeIn(false);
      }, 800);
    }
  }, [fadeIn]);
  return __jsx(_Section__WEBPACK_IMPORTED_MODULE_6__["default"], {
    white: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: flexWrapper,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(image, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, fadeInAnimation, fadeIn)),
    style: {
      backgroundImage: "url(".concat(_data_about__WEBPACK_IMPORTED_MODULE_4__["passionImages"][index], ")")
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: rightSide,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, __jsx("h3", {
    className: h3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }, "My story"), __jsx(_Separator__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }), __jsx(react_swipeable_views__WEBPACK_IMPORTED_MODULE_3___default.a, {
    index: index,
    onSwitching: function onSwitching(idx) {
      if (Number.isInteger(idx)) {
        setIndex(idx);
      }
    },
    enableMouseEvents: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }, _data_about__WEBPACK_IMPORTED_MODULE_4__["passionList"].map(function (_ref) {
    var title = _ref.title,
        paragraph = _ref.paragraph;
    return __jsx("div", {
      className: item,
      key: title,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 15
      }
    }, __jsx("h3", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(passionTitle),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }
    }, title), __jsx("p", {
      className: paragraphStyle,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 17
      }
    }, paragraph));
  })), __jsx("div", {
    className: arrows,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }, __jsx("div", {
    role: "button",
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(arrow, arrowLeft, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, arrowDisabled, isLeftDisabled)),
    onClick: isLeftDisabled ? function () {} : function () {
      return setIndex(index - 1);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }), __jsx("div", {
    role: "button",
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(arrow, arrowRight, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, arrowDisabled, isRightDisabled)),
    onClick: isRightDisabled ? function () {} : function () {
      return setIndex(index + 1);
    },
    __self: _this,
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
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var use_is_in_viewport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! use-is-in-viewport */ "./node_modules/use-is-in-viewport/built/index.esm.js");
/* harmony import */ var _data_education__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/education */ "./data/education.ts");
/* harmony import */ var _EducationItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../EducationItem */ "./components/EducationItem/index.js");
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Section */ "./components/Section/index.js");
/* harmony import */ var _Headline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Headline */ "./components/Headline/index.js");


var _this = undefined,
    _jsxFileName = "/Users/sigrundish/personal-apps/resume/components/Education/Education.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







var Education = function Education() {
  var _useIsInViewport = Object(use_is_in_viewport__WEBPACK_IMPORTED_MODULE_2__["default"])(),
      _useIsInViewport2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useIsInViewport, 2),
      isInViewport = _useIsInViewport2[0],
      targetRef = _useIsInViewport2[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      animate = _useState[0],
      setAnimate = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (isInViewport) {
      setAnimate(true);
    }
  }, [isInViewport]);
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx(_Headline__WEBPACK_IMPORTED_MODULE_6__["default"], {
    headline: "Education",
    white: true,
    noPadding: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }), __jsx(_Section__WEBPACK_IMPORTED_MODULE_5__["default"], {
    ref: targetRef,
    tall: true,
    white: true,
    noPadding: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, _data_education__WEBPACK_IMPORTED_MODULE_3__["educationList"].map(function (item, idx) {
    return __jsx(_EducationItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: idx,
      item: item,
      animate: animate,
      animateDelay: idx * 0.5,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 11
      }
    });
  })));
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
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./EducationItem.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/EducationItem/EducationItem.module.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./EducationItem.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/EducationItem/EducationItem.module.scss",
      function () {
        var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./EducationItem.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/EducationItem/EducationItem.module.scss");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./components/EducationItem/EducationItem.tsx":
/*!****************************************************!*\
  !*** ./components/EducationItem/EducationItem.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ExpandWithAnimation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ExpandWithAnimation */ "./components/ExpandWithAnimation/index.js");
/* harmony import */ var _TimelineItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../TimelineItem */ "./components/TimelineItem/index.js");
/* harmony import */ var _EducationItem_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EducationItem.module.scss */ "./components/EducationItem/EducationItem.module.scss");
/* harmony import */ var _EducationItem_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_EducationItem_module_scss__WEBPACK_IMPORTED_MODULE_5__);


var _this = undefined,
    _jsxFileName = "/Users/sigrundish/personal-apps/resume/components/EducationItem/EducationItem.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var contentHeader = _EducationItem_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.contentHeader,
    subjectStyle = _EducationItem_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.subject,
    schoolStyle = _EducationItem_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.school,
    coursesTrigger = _EducationItem_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.coursesTrigger,
    arrow = _EducationItem_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.arrow,
    arrowOpen = _EducationItem_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.arrowOpen,
    coursesStyle = _EducationItem_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.courses,
    courseStyle = _EducationItem_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.course;

var EducationItem = function EducationItem(_ref) {
  var item = _ref.item,
      animate = _ref.animate,
      animateDelay = _ref.animateDelay;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      showCourses = _useState[0],
      setShowCourses = _useState[1];

  var year = item.year,
      school = item.school,
      subject = item.subject,
      courses = item.courses;
  return __jsx(_TimelineItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
    year: year,
    animate: animate,
    animateDelay: animateDelay,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: contentHeader,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: subjectStyle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, subject), __jsx("div", {
    className: schoolStyle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, school), courses && __jsx("div", {
    role: "button",
    className: coursesTrigger,
    onClick: function onClick() {
      return setShowCourses(!showCourses);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, "".concat(showCourses ? 'Hide' : 'See', " Courses"), __jsx("span", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(arrow, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, arrowOpen, showCourses)),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 15
    }
  }))), courses && __jsx(_ExpandWithAnimation__WEBPACK_IMPORTED_MODULE_3__["default"], {
    isCollapsed: !showCourses,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }, __jsx("ul", {
    className: coursesStyle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, courses.map(function (course, idx) {
    return __jsx("li", {
      key: idx,
      className: courseStyle,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 17
      }
    }, course);
  })))));
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
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./ExpandWithAnimation.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/ExpandWithAnimation/ExpandWithAnimation.module.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./ExpandWithAnimation.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/ExpandWithAnimation/ExpandWithAnimation.module.scss",
      function () {
        var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./ExpandWithAnimation.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/ExpandWithAnimation/ExpandWithAnimation.module.scss");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./components/ExpandWithAnimation/ExpandWithAnimation.tsx":
/*!****************************************************************!*\
  !*** ./components/ExpandWithAnimation/ExpandWithAnimation.tsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ExpandWithAnimation_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExpandWithAnimation.module.scss */ "./components/ExpandWithAnimation/ExpandWithAnimation.module.scss");
/* harmony import */ var _ExpandWithAnimation_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ExpandWithAnimation_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "/Users/sigrundish/personal-apps/resume/components/ExpandWithAnimation/ExpandWithAnimation.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var container = _ExpandWithAnimation_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.container;

var ExpandWithAnimation = function ExpandWithAnimation(_ref) {
  var children = _ref.children,
      isCollapsed = _ref.isCollapsed;
  var content = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (isCollapsed) {
      collapseSection();
    }
  }, []);
  /**
   * If the content changes we want to make sure the height is correct.
   */

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
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

  var collapseSection = function collapseSection() {
    if (content.current) {
      content.current.style.height = 0 + 'px';
    }
  };
  /**
   * Called when componend is expanded.
   * Updates the height to fit its content.
   */


  var expandSection = function expandSection() {
    if (content.current) {
      var sectionHeight = content.current.scrollHeight;
      content.current.style.height = sectionHeight + 'px';
    }
  };

  return __jsx("div", {
    ref: content,
    className: container,
    __self: _this,
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
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./Heading.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/Heading/Heading.module.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./Heading.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/Heading/Heading.module.scss",
      function () {
        var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./Heading.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/Heading/Heading.module.scss");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./components/Heading/Heading.tsx":
/*!****************************************!*\
  !*** ./components/Heading/Heading.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Heading_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Heading.module.scss */ "./components/Heading/Heading.module.scss");
/* harmony import */ var _Heading_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Heading_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "/Users/sigrundish/personal-apps/resume/components/Heading/Heading.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var container = _Heading_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.container,
    backgroundImage = _Heading_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.backgroundImage,
    overlay = _Heading_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.overlay,
    content = _Heading_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.content,
    h1 = _Heading_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.h1,
    h2 = _Heading_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.h2,
    h3 = _Heading_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.h3,
    flexWrapper = _Heading_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.flexWrapper,
    imageWrapper = _Heading_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.imageWrapper,
    box = _Heading_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.box,
    image = _Heading_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.image;

var Heading = function Heading() {
  return __jsx("div", {
    className: container,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: backgroundImage,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: overlay,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: flexWrapper,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: content,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: h3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, "I'm"), __jsx("h1", {
    className: h1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, "Sigr\xFAn D\xEDs Hauksd\xF3ttir"), __jsx("h2", {
    className: h2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, "Software Developer")), __jsx("div", {
    className: imageWrapper,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: box,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: image,
    __self: _this,
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
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./Headline.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/Headline/Headline.module.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./Headline.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/Headline/Headline.module.scss",
      function () {
        var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./Headline.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/Headline/Headline.module.scss");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./components/Headline/Headline.tsx":
/*!******************************************!*\
  !*** ./components/Headline/Headline.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Separator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Separator */ "./components/Separator/index.js");
/* harmony import */ var _Headline_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Headline.module.scss */ "./components/Headline/Headline.module.scss");
/* harmony import */ var _Headline_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Headline_module_scss__WEBPACK_IMPORTED_MODULE_4__);


var _this = undefined,
    _jsxFileName = "/Users/sigrundish/personal-apps/resume/components/Headline/Headline.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var container = _Headline_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.container,
    whiteContainer = _Headline_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.whiteContainer,
    noPaddingContainer = _Headline_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.noPaddingContainer,
    h2 = _Headline_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.h2,
    h3 = _Headline_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.h3;

var Headline = function Headline(_ref) {
  var _classNames;

  var headline = _ref.headline,
      subtitle = _ref.subtitle,
      white = _ref.white,
      noPadding = _ref.noPadding;
  return __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(container, (_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, whiteContainer, white), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, noPaddingContainer, noPadding), _classNames)),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 3
    }
  }, __jsx("h2", {
    className: h2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, headline), __jsx(_Separator__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }), subtitle && __jsx("h3", {
    className: h3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 18
    }
  }, subtitle));
};

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
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./Highlight.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/Highlight/Highlight.module.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./Highlight.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/Highlight/Highlight.module.scss",
      function () {
        var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./Highlight.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/Highlight/Highlight.module.scss");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./components/Highlight/Highlight.tsx":
/*!********************************************!*\
  !*** ./components/Highlight/Highlight.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Highlight_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Highlight.module.scss */ "./components/Highlight/Highlight.module.scss");
/* harmony import */ var _Highlight_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Highlight_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "/Users/sigrundish/personal-apps/resume/components/Highlight/Highlight.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var container = _Highlight_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.container,
    heading = _Highlight_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.heading,
    iconStyle = _Highlight_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.icon,
    textWrapper = _Highlight_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.textWrapper,
    titleStyle = _Highlight_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.title,
    descriptionStyle = _Highlight_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.description;

var Highlight = function Highlight(_ref) {
  var title = _ref.title,
      description = _ref.description,
      icon = _ref.icon;
  return __jsx("div", {
    className: container,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: heading,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, icon, __jsx("div", {
    className: textWrapper,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: titleStyle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, title), __jsx("div", {
    className: descriptionStyle,
    __self: _this,
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
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./Highlights.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/Highlights/Highlights.module.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./Highlights.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/Highlights/Highlights.module.scss",
      function () {
        var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./Highlights.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/Highlights/Highlights.module.scss");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./components/Highlights/Highlights.tsx":
/*!**********************************************!*\
  !*** ./components/Highlights/Highlights.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Highlight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Highlight */ "./components/Highlight/index.js");
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Section */ "./components/Section/index.js");
/* harmony import */ var _Headline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Headline */ "./components/Headline/index.js");
/* harmony import */ var _Highlights_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Highlights.module.scss */ "./components/Highlights/Highlights.module.scss");
/* harmony import */ var _Highlights_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Highlights_module_scss__WEBPACK_IMPORTED_MODULE_4__);
var _this = undefined,
    _jsxFileName = "/Users/sigrundish/personal-apps/resume/components/Highlights/Highlights.tsx";

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



var container = _Highlights_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.container,
    heading = _Highlights_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.heading,
    icon = _Highlights_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.icon,
    highlights = _Highlights_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.highlights;

var Highlights = function Highlights() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, __jsx(_Headline__WEBPACK_IMPORTED_MODULE_3__["default"], {
    white: true,
    headline: 'Highlights',
    noPadding: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }), __jsx(_Section__WEBPACK_IMPORTED_MODULE_2__["default"], {
    white: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: highlights,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx(_components_Highlight__WEBPACK_IMPORTED_MODULE_1__["default"], {
    icon: __jsx(WebDevelopment, {
      className: icon,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 19
      }
    }),
    title: "Web development",
    description: "Focusing on front-end development of web applications.",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }), __jsx(_components_Highlight__WEBPACK_IMPORTED_MODULE_1__["default"], {
    icon: __jsx(UI, {
      className: icon,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 19
      }
    }),
    title: "UI and UX",
    description: "Enjoy beautiful design, pay attention to details and set high standards for UI and UX optimisation.",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }), __jsx(_components_Highlight__WEBPACK_IMPORTED_MODULE_1__["default"], {
    icon: __jsx(Analytics, {
      className: icon,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 19
      }
    }),
    title: "Analytics and reporting",
    description: "Make conceus decisions and want to be able to visualize how new features and changes effect the product I am working on.",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }), __jsx(_components_Highlight__WEBPACK_IMPORTED_MODULE_1__["default"], {
    icon: __jsx(Management, {
      className: icon,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 19
      }
    }),
    title: "Product/project management",
    description: "Make informed decisions about project priorities based on the organization's vision, strategy and goals. Organized with a good experience using Scrum.",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }), __jsx(_components_Highlight__WEBPACK_IMPORTED_MODULE_1__["default"], {
    icon: __jsx(Innovation, {
      className: icon,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 19
      }
    }),
    title: "Entrepreneur and innovation",
    description: "Creative and encourage those I work with to express their views so we can optimize ideas together.",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }), __jsx(_components_Highlight__WEBPACK_IMPORTED_MODULE_1__["default"], {
    icon: __jsx(Team, {
      className: icon,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 19
      }
    }),
    title: "Team player",
    description: "A positive atmosphere within a team creates magic.",
    __self: _this,
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
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./ImageBanner.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/ImageBanner/ImageBanner.module.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./ImageBanner.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/ImageBanner/ImageBanner.module.scss",
      function () {
        var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./ImageBanner.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/ImageBanner/ImageBanner.module.scss");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./components/ImageBanner/ImageBanner.tsx":
/*!************************************************!*\
  !*** ./components/ImageBanner/ImageBanner.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ImageBanner_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ImageBanner.module.scss */ "./components/ImageBanner/ImageBanner.module.scss");
/* harmony import */ var _ImageBanner_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ImageBanner_module_scss__WEBPACK_IMPORTED_MODULE_3__);


var _this = undefined,
    _jsxFileName = "/Users/sigrundish/personal-apps/resume/components/ImageBanner/ImageBanner.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var container = _ImageBanner_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.container,
    tallContainer = _ImageBanner_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.tallContainer,
    image = _ImageBanner_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image;

var ImageBanner = function ImageBanner(_ref) {
  var images = _ref.images,
      tall = _ref.tall;
  return __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(container, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, tallContainer, tall)),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, images.map(function (src, idx) {
    return __jsx("div", {
      key: "image-".concat(idx),
      className: image,
      style: {
        backgroundImage: "url('".concat(src, "')"),
        width: "".concat(100 / images.length, "%")
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }
    });
  }));
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
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./Personal.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/Personal/Personal.module.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./Personal.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/Personal/Personal.module.scss",
      function () {
        var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./Personal.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/Personal/Personal.module.scss");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./components/Personal/Personal.tsx":
/*!******************************************!*\
  !*** ./components/Personal/Personal.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Separator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Separator */ "./components/Separator/index.js");
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Section */ "./components/Section/index.js");
/* harmony import */ var _Personal_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Personal.module.scss */ "./components/Personal/Personal.module.scss");
/* harmony import */ var _Personal_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Personal_module_scss__WEBPACK_IMPORTED_MODULE_3__);
var _this = undefined,
    _jsxFileName = "/Users/sigrundish/personal-apps/resume/components/Personal/Personal.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var container = _Personal_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.container,
    textWrapper = _Personal_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.textWrapper,
    imageWrapper = _Personal_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.imageWrapper,
    portrait = _Personal_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.portrait,
    background = _Personal_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.background,
    paragraph = _Personal_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.paragraph,
    h3 = _Personal_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.h3;

var Personal = function Personal() {
  return __jsx(_Section__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: container,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: textWrapper,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx("h3", {
    className: h3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, "On the personal notes"), __jsx(_Separator__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }), __jsx("p", {
    className: paragraph,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, "My name is Sigr\xFAn D\xEDs Hauksd\xF3ttir and I am from Reykjav\xEDk, the capital of Iceland. Currently I am living in Denmark studying for my master\u2019s degree at the University of Southern Denmark."), __jsx("p", {
    className: paragraph,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, "I have really diverse interests. From sitting in a relaxed environment doing something creative to attending outdoor activities which increases the adrenaline. I am adventurous person who loves to travel, practise sports and one of the most fun things I do is snowboarding."), __jsx("p", {
    className: paragraph,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, "As an extrovert person I enjoy social activities and working in a team consisting of diverse people. When it comes to planning something for social life I am often quick to volunteer because I find it really entertaining.")), __jsx("div", {
    className: imageWrapper,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: background,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: portrait,
    __self: _this,
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
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./ProgressBar.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/ProgressBar/ProgressBar.module.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./ProgressBar.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/ProgressBar/ProgressBar.module.scss",
      function () {
        var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./ProgressBar.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/ProgressBar/ProgressBar.module.scss");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./components/ProgressBar/ProgressBar.tsx":
/*!************************************************!*\
  !*** ./components/ProgressBar/ProgressBar.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ProgressBar_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProgressBar.module.scss */ "./components/ProgressBar/ProgressBar.module.scss");
/* harmony import */ var _ProgressBar_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ProgressBar_module_scss__WEBPACK_IMPORTED_MODULE_3__);


var _this = undefined,
    _jsxFileName = "/Users/sigrundish/personal-apps/resume/components/ProgressBar/ProgressBar.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var container = _ProgressBar_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.container,
    label = _ProgressBar_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.label,
    progressContainer = _ProgressBar_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.progressContainer,
    progress = _ProgressBar_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.progress,
    advancedProgress = _ProgressBar_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.advancedProgress,
    intermediateProgress = _ProgressBar_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.intermediateProgress,
    fundamentalProgress = _ProgressBar_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.fundamentalProgress;

var ProgressBar = function ProgressBar(_ref) {
  var _classNames;

  var title = _ref.title,
      finalWidth = _ref.width,
      animate = _ref.animate,
      advanced = _ref.advanced,
      intermediate = _ref.intermediate,
      fundamental = _ref.fundamental;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      width = _useState[0],
      setWidth = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (animate) {
      setWidth(finalWidth);
    } else {
      setWidth(0);
    }
  }, [animate]);
  return __jsx("div", {
    className: container,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: label,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, title), __jsx("div", {
    className: progressContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(progress, (_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, advancedProgress, advanced), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, intermediateProgress, intermediate), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, fundamentalProgress, fundamental), _classNames)),
    style: {
      width: "".concat(width, "%")
    },
    __self: _this,
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
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./Section.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/Section/Section.module.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./Section.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/Section/Section.module.scss",
      function () {
        var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./Section.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/Section/Section.module.scss");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./components/Section/Section.tsx":
/*!****************************************!*\
  !*** ./components/Section/Section.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Section_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Section.module.scss */ "./components/Section/Section.module.scss");
/* harmony import */ var _Section_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Section_module_scss__WEBPACK_IMPORTED_MODULE_3__);


var _this = undefined,
    _jsxFileName = "/Users/sigrundish/personal-apps/resume/components/Section/Section.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var container = _Section_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.container,
    whiteContainer = _Section_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.whiteContainer,
    tallContainer = _Section_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.tallContainer,
    noPaddingContainer = _Section_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.noPaddingContainer,
    inner = _Section_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.inner;
var Section = Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function (_ref, ref) {
  var _classNames;

  var children = _ref.children,
      white = _ref.white,
      tall = _ref.tall,
      noPadding = _ref.noPadding;
  return __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(container, (_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, whiteContainer, white), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, tallContainer, tall), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, noPaddingContainer, noPadding), _classNames)),
    ref: ref,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: inner,
    __self: _this,
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
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./Separator.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/Separator/Separator.module.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./Separator.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/Separator/Separator.module.scss",
      function () {
        var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./Separator.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/Separator/Separator.module.scss");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./components/Separator/Separator.tsx":
/*!********************************************!*\
  !*** ./components/Separator/Separator.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Separator_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Separator.module.scss */ "./components/Separator/Separator.module.scss");
/* harmony import */ var _Separator_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Separator_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "/Users/sigrundish/personal-apps/resume/components/Separator/Separator.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var separator = _Separator_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.separator;

var Separator = function Separator() {
  return __jsx("div", {
    className: separator,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 25
    }
  });
};

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
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./Skills.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/Skills/Skills.module.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./Skills.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/Skills/Skills.module.scss",
      function () {
        var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./Skills.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/Skills/Skills.module.scss");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./components/Skills/Skills.tsx":
/*!**************************************!*\
  !*** ./components/Skills/Skills.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var use_is_in_viewport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! use-is-in-viewport */ "./node_modules/use-is-in-viewport/built/index.esm.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_computerSkills__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/computerSkills */ "./data/computerSkills.ts");
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Section */ "./components/Section/index.js");
/* harmony import */ var _ProgressBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ProgressBar */ "./components/ProgressBar/index.js");
/* harmony import */ var _Headline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Headline */ "./components/Headline/index.js");
/* harmony import */ var _Skills_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Skills.module.scss */ "./components/Skills/Skills.module.scss");
/* harmony import */ var _Skills_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Skills_module_scss__WEBPACK_IMPORTED_MODULE_8__);


var _this = undefined,
    _jsxFileName = "/Users/sigrundish/personal-apps/resume/components/Skills/Skills.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








var subtitleStyle = _Skills_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.subtitle,
    h3 = _Skills_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.h3,
    flexWrapper = _Skills_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.flexWrapper,
    progressBars = _Skills_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.progressBars,
    bullet = _Skills_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.bullet,
    advancedBullet = _Skills_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.advancedBullet,
    intermediateBullet = _Skills_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.intermediateBullet,
    fundamentalBullet = _Skills_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.fundamentalBullet;

var Skills = function Skills() {
  var _useIsInViewport = Object(use_is_in_viewport__WEBPACK_IMPORTED_MODULE_2__["default"])(),
      _useIsInViewport2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useIsInViewport, 2),
      isInViewport = _useIsInViewport2[0],
      targetRef = _useIsInViewport2[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      animate = _useState[0],
      setAnimate = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (isInViewport) {
      setAnimate(true);
    }
  }, [isInViewport]);

  var subtitle = __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: subtitleStyle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(bullet, advancedBullet),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, "Advanced")), __jsx("div", {
    className: subtitleStyle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(bullet, intermediateBullet),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, "Intermetiate")), __jsx("div", {
    className: subtitleStyle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(bullet, fundamentalBullet),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, "Fundamental")));

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_Headline__WEBPACK_IMPORTED_MODULE_7__["default"], {
    headline: "Computer Skills",
    subtitle: subtitle,
    noPadding: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }), __jsx(_Section__WEBPACK_IMPORTED_MODULE_5__["default"], {
    ref: targetRef,
    tall: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: flexWrapper,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: progressBars,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }, __jsx("h3", {
    className: h3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, "Programming Languages"), _data_computerSkills__WEBPACK_IMPORTED_MODULE_4__["programmingLanguages"].map(function (_ref, idx) {
    var title = _ref.title,
        percentage = _ref.percentage;
    return __jsx(_ProgressBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: idx,
      title: title,
      width: percentage,
      advanced: percentage > 75,
      intermediate: percentage <= 75 && percentage > 60,
      fundamental: percentage <= 60,
      animate: animate,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }
    });
  })), __jsx("div", {
    className: progressBars,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }, __jsx("h3", {
    className: h3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, "Frameworks / Software"), _data_computerSkills__WEBPACK_IMPORTED_MODULE_4__["frameworks"].map(function (_ref2, idx) {
    var title = _ref2.title,
        percentage = _ref2.percentage;
    return __jsx(_ProgressBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: idx,
      title: title,
      width: percentage,
      advanced: percentage > 75,
      intermediate: percentage <= 75 && percentage > 60,
      fundamental: percentage <= 60,
      animate: animate,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 17
      }
    });
  })))));
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
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./TimelineItem.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/TimelineItem/TimelineItem.module.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./TimelineItem.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/TimelineItem/TimelineItem.module.scss",
      function () {
        var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./TimelineItem.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/TimelineItem/TimelineItem.module.scss");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./components/TimelineItem/TimelineItem.tsx":
/*!**************************************************!*\
  !*** ./components/TimelineItem/TimelineItem.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _TimelineItem_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TimelineItem.module.scss */ "./components/TimelineItem/TimelineItem.module.scss");
/* harmony import */ var _TimelineItem_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_TimelineItem_module_scss__WEBPACK_IMPORTED_MODULE_3__);


var _this = undefined,
    _jsxFileName = "/Users/sigrundish/personal-apps/resume/components/TimelineItem/TimelineItem.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var container = _TimelineItem_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.container,
    rightSide = _TimelineItem_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.rightSide,
    content = _TimelineItem_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.content,
    yearStyle = _TimelineItem_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.year,
    dividor = _TimelineItem_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.dividor,
    animateUp = _TimelineItem_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.animateUp,
    animateFromLeft = _TimelineItem_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.animateFromLeft,
    animateFromRight = _TimelineItem_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.animateFromRight;

var TimelineItem = function TimelineItem(_ref) {
  var year = _ref.year,
      children = _ref.children,
      animate = _ref.animate,
      animateDelay = _ref.animateDelay;
  return __jsx("div", {
    className: container,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(yearStyle, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, animateFromLeft, animate)),
    style: {
      animationDelay: "".concat(animateDelay, "s")
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, year), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(dividor, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, animateUp, animate)),
    style: {
      animationDelay: "".concat(animateDelay, "s")
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(rightSide, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, animateFromRight, animate)),
    style: {
      animationDelay: "".concat(animateDelay, "s")
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: content,
    __self: _this,
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
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var use_is_in_viewport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! use-is-in-viewport */ "./node_modules/use-is-in-viewport/built/index.esm.js");
/* harmony import */ var _data_workExperience__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/workExperience */ "./data/workExperience.ts");
/* harmony import */ var _WorkExperienceItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../WorkExperienceItem */ "./components/WorkExperienceItem/index.js");
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Section */ "./components/Section/index.js");
/* harmony import */ var _Headline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Headline */ "./components/Headline/index.js");


var _this = undefined,
    _jsxFileName = "/Users/sigrundish/personal-apps/resume/components/WorkExperience/WorkExperience.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







var WorkExperience = function WorkExperience() {
  var _useIsInViewport = Object(use_is_in_viewport__WEBPACK_IMPORTED_MODULE_2__["default"])(),
      _useIsInViewport2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useIsInViewport, 2),
      isInViewport = _useIsInViewport2[0],
      targetRef = _useIsInViewport2[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      animate = _useState[0],
      setAnimate = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (isInViewport) {
      setAnimate(true);
    }
  }, [isInViewport]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_Headline__WEBPACK_IMPORTED_MODULE_6__["default"], {
    headline: "Work Experience",
    noPadding: true,
    white: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }), __jsx(_Section__WEBPACK_IMPORTED_MODULE_5__["default"], {
    ref: targetRef,
    tall: true,
    white: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, _data_workExperience__WEBPACK_IMPORTED_MODULE_3__["workExperienceList"].map(function (item, idx) {
    return __jsx(_WorkExperienceItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: idx,
      item: item,
      animate: animate,
      animateDelay: idx * 0.5,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 11
      }
    });
  })));
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
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./WorkExperienceItem.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/WorkExperienceItem/WorkExperienceItem.module.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./WorkExperienceItem.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/WorkExperienceItem/WorkExperienceItem.module.scss",
      function () {
        var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./WorkExperienceItem.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/WorkExperienceItem/WorkExperienceItem.module.scss");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./components/WorkExperienceItem/WorkExperienceItem.tsx":
/*!**************************************************************!*\
  !*** ./components/WorkExperienceItem/WorkExperienceItem.tsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _TimelineItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../TimelineItem */ "./components/TimelineItem/index.js");
/* harmony import */ var _WorkExperienceItem_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./WorkExperienceItem.module.scss */ "./components/WorkExperienceItem/WorkExperienceItem.module.scss");
/* harmony import */ var _WorkExperienceItem_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_WorkExperienceItem_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ExpandWithAnimation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ExpandWithAnimation */ "./components/ExpandWithAnimation/index.js");


var _this = undefined,
    _jsxFileName = "/Users/sigrundish/personal-apps/resume/components/WorkExperienceItem/WorkExperienceItem.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var contentHeader = _WorkExperienceItem_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.contentHeader,
    titleStyle = _WorkExperienceItem_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.title,
    companyStyle = _WorkExperienceItem_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.company,
    descriptionTrigger = _WorkExperienceItem_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.descriptionTrigger,
    arrow = _WorkExperienceItem_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.arrow,
    arrowOpen = _WorkExperienceItem_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.arrowOpen,
    descriptionListStyle = _WorkExperienceItem_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.descriptionList,
    descriptionStyle = _WorkExperienceItem_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.description;

var WorkExperienceItem = function WorkExperienceItem(_ref) {
  var item = _ref.item,
      animate = _ref.animate,
      animateDelay = _ref.animateDelay;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      showDescription = _useState[0],
      setShowDescription = _useState[1];

  var year = item.year,
      title = item.title,
      company = item.company,
      descriptionList = item.descriptionList;
  return __jsx(_TimelineItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
    year: year,
    animate: animate,
    animateDelay: animateDelay,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: contentHeader,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: titleStyle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, title), __jsx("div", {
    className: companyStyle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, company), descriptionList && __jsx("div", {
    role: "button",
    className: descriptionTrigger,
    onClick: function onClick() {
      return setShowDescription(!showDescription);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, "".concat(showDescription ? 'Hide' : 'See', " description"), __jsx("span", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(arrow, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, arrowOpen, showDescription)),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 15
    }
  }))), descriptionList && __jsx(_ExpandWithAnimation__WEBPACK_IMPORTED_MODULE_5__["default"], {
    isCollapsed: !showDescription,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }, __jsx("ul", {
    className: descriptionListStyle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, descriptionList.map(function (description, idx) {
    return __jsx("li", {
      key: idx,
      className: descriptionStyle,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 17
      }
    }, description);
  })))));
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
var passionList = [{
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
var passionImages = ['/img/map.JPG', '/img/dohop.jpg', '/img/sdu.jpg', '/img/running.JPG'];

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
var programmingLanguages = [{
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
var frameworks = [{
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
var educationList = [{
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
var imageBanner1 = ['/img/skydive.JPG', '/img/snjobretti.JPG', '/img/studlagil.JPG', '/img/hestbak.JPG'];
var imageBanner2 = ['/img/speak.jpeg'];

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
var workExperienceList = [{
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

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/About/About.module.scss":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./components/About/About.module.scss ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".About_headerWrapper__SSuM0 {\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  text-align: center;\n  padding: 30px 0;\n}\n\n.About_separator__2xfEg {\n  height: 2px;\n  width: 100px;\n  background-color: #aec3f3;\n}\n\n.About_subtitle__115to {\n  font-weight: 200;\n  line-height: 40px;\n}", "",{"version":3,"sources":["/Users/sigrundish/personal-apps/resume/components/About/About.module.scss","/Users/sigrundish/personal-apps/resume/css/variables.scss"],"names":[],"mappings":"AAEA;EACE,aAAA;EACA,iBAAA;EACA,mBAAA;EACA,kBAAA;EACA,eAAA;AADF;;AAGA;EACE,WAAA;EACA,YAAA;EACA,yBCQI;ADRN;;AAEA;EACE,gBCSwB;EDRxB,iBAAA;AACF","file":"About.module.scss","sourcesContent":["@import '../../css/variables.scss';\n\n.headerWrapper {\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  text-align: center;\n  padding: $gutter-desktop 0;\n}\n.separator {\n  height: 2px;\n  width: 100px;\n  background-color: $sky;\n}\n.subtitle {\n  font-weight: $font-weight-extra-light;\n  line-height: 40px;\n}\n","$bright-blue-grey: #e2f0f9;\n$neutral: #efefef;\n$white: #fff;\n$border-color: #d7d7d7;\n\n$warm-grey-light: #e8dfe0;\n$warm-grey-dark: #5d5c61;\n\n$background-pink: #f8f0ed;\n\n$night-dark: #262626;\n$night: #505050;\n$night-light: #444444;\n\n$sea-dark: #268194;\n$sea-darker: #39a5bc;\n$sea: #47c9e5;\n\n$sky-dark: #6b92ea;\n$sky-darker: #98b3f0;\n$sky: #aec3f3;\n$sky-lighter: #c4d3f6;\n\n// Font weight\n$font-weight-extra-light: 200;\n$font-weight-light: 300;\n$font-weight-regular: 400;\n$font-weight-medium: 500;\n$font-weight-semiBold: 600;\n$font-weight-bold: 700;\n\n// Font size\n$font-size-xs: 12px;\n$font-size-s: 14px;\n$font-size-m: 16px;\n$font-size-l: 26px;\n$font-size-xl: 42px;\n$font-size-xxl: 56px;\n\n// Line height\n$line-height-paragraph: 30px;\n\n// Height\n$top-banner-height: 600px;\n$section-banner-height: 600px;\n\n// Width\n$base-border-width: 1px;\n\n// Padding\n$gutter-desktop: 30px;\n$padding-section: 60px 80px;\n\n// Box shadow\n$base-box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.12);\n\n// Border radius\n$base-border-radius: 4px;\n"]}]);
// Exports
exports.locals = {
	"headerWrapper": "About_headerWrapper__SSuM0",
	"separator": "About_separator__2xfEg",
	"subtitle": "About_subtitle__115to"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/Career/Career.module.scss":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./components/Career/Career.module.scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "@keyframes Career_fadein__MMShe {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes Career_expandWidth___fe1D {\n  0% {\n    width: 0;\n  }\n  100% {\n    width: auto;\n  }\n}\n@keyframes Career_slideUp__Y7i7O {\n  from {\n    transform: translateY(150px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes Career_slideFromRight__2cwvM {\n  from {\n    transform: translateX(150px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes Career_slideFromLeft__36gpI {\n  from {\n    transform: translateX(-150px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.Career_flexWrapper__3W5lC {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n}\n\n.Career_item__mUSiK {\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n\n.Career_image__2agCl {\n  height: 80%;\n  width: 50%;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n}\n\n.Career_fadeInAnimation__3Zs9N {\n  animation: Career_fadein__MMShe 0.8s;\n}\n\n.Career_rightSide__g63Ie {\n  flex-grow: 1;\n  position: relative;\n  padding-left: 60px;\n  box-sizing: border-box;\n  width: 60%;\n}\n\n.Career_passionTitle__2s3gY {\n  font-weight: 300;\n  padding: 20px 0;\n}\n\n.Career_h3__16Htz {\n  text-transform: uppercase;\n}\n\n.Career_arrows__3k9-k {\n  display: flex;\n}\n\n.Career_arrow__2NtcS {\n  cursor: pointer;\n}\n\n.Career_arrowLeft__Oca4I {\n  border: solid #aec3f3;\n  border-width: 0 2px 2px 0;\n  display: inline-block;\n  padding: 8px;\n  transform: rotate(135deg);\n}\n\n.Career_arrowRight__3c4t1 {\n  border: solid #aec3f3;\n  border-width: 0 2px 2px 0;\n  display: inline-block;\n  padding: 8px;\n  transform: rotate(-45deg);\n  margin-left: 10px;\n}\n\n.Career_arrowDisabled__11KKF {\n  border-color: #d7d7d7;\n  cursor: not-allowed;\n}\n\n.Career_paragraph__2a8jr {\n  font-size: 16px;\n  line-height: 30px;\n  text-align: justify;\n  margin-top: 0;\n}", "",{"version":3,"sources":["/Users/sigrundish/personal-apps/resume/css/keyframes.scss","/Users/sigrundish/personal-apps/resume/components/Career/Career.module.scss","/Users/sigrundish/personal-apps/resume/css/variables.scss","/Users/sigrundish/personal-apps/resume/css/mixin.scss"],"names":[],"mappings":"AAAA;EACE;IACE,UAAA;ECCF;EDCA;IACE,UAAA;ECCF;AACF;ADCA;EACE;IACE,QAAA;ECCF;EDCA;IACE,WAAA;ECCF;AACF;ADCA;EACE;IACE,4BAAA;ECCF;EDCA;IACE,UAAA;IACA,wBAAA;ECCF;AACF;ADCA;EACE;IACE,4BAAA;ECCF;EDCA;IACE,UAAA;IACA,wBAAA;ECCF;AACF;ADCA;EACE;IACE,6BAAA;ECCF;EDCA;IACE,UAAA;IACA,wBAAA;ECCF;AACF;AAtCA;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,YAAA;EACA,WAAA;AAwCF;;AAtCA;EACE,oBAAA;EAAA,YAAA;AAyCF;;AAvCA;EACE,WAAA;EACA,UAAA;EACA,4BAAA;EACA,kCAAA;EACA,sBAAA;AA0CF;;AAxCA;EACE,oCAAA;AA2CF;;AAzCA;EACE,YAAA;EACA,kBAAA;EACA,kBAAA;EACA,sBAAA;EACA,UAAA;AA4CF;;AA1CA;EACE,gBCPkB;EDQlB,eAAA;AA6CF;;AA3CA;EACE,yBAAA;AA8CF;;AA5CA;EACE,aAAA;AA+CF;;AA7CA;EACE,eAAA;AAgDF;;AA9CA;EE3CE,qBAAA;EACA,yBAAA;EACA,qBAAA;EACA,YAAA;EAWA,yBAAA;AFmFF;;AAnDA;EE9CE,qBAAA;EACA,yBAAA;EACA,qBAAA;EACA,YAAA;EAgBA,yBAAA;EF6BA,iBAAA;AA0DF;;AAxDA;EACE,qBCjDa;EDkDb,mBAAA;AA2DF;;AAzDA;EACE,eCtBY;EDuBZ,iBAAA;EACA,mBAAA;EACA,aAAA;AA4DF","file":"Career.module.scss","sourcesContent":["@keyframes fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes expandWidth {\n  0% {\n    width: 0;\n  }\n  100% {\n    width: auto;\n  }\n}\n@keyframes slideUp {\n  from {\n    transform: translateY(150px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes slideFromRight {\n  from {\n    transform: translateX(150px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes slideFromLeft {\n  from {\n    transform: translateX(-150px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n","@import '../../css/mixin.scss';\n@import '../../css/keyframes.scss';\n@import '../../css/variables.scss';\n\n.flexWrapper {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n}\n.item {\n  cursor: grab;\n}\n.image {\n  height: 80%;\n  width: 50%;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n}\n.fadeInAnimation {\n  animation: fadein 0.8s;\n}\n.rightSide {\n  flex-grow: 1;\n  position: relative;\n  padding-left: 60px;\n  box-sizing: border-box;\n  width: 60%;\n}\n.passionTitle {\n  font-weight: $font-weight-light;\n  padding: 20px 0;\n}\n.h3 {\n  text-transform: uppercase;\n}\n.arrows {\n  display: flex;\n}\n.arrow {\n  cursor: pointer;\n}\n.arrowLeft {\n  @include arrowLeft($sky);\n}\n.arrowRight {\n  @include arrowRight($sky);\n  margin-left: 10px;\n}\n.arrowDisabled {\n  border-color: $border-color;\n  cursor: not-allowed;\n}\n.paragraph {\n  font-size: $font-size-m;\n  line-height: 30px;\n  text-align: justify;\n  margin-top: 0;\n}\n","$bright-blue-grey: #e2f0f9;\n$neutral: #efefef;\n$white: #fff;\n$border-color: #d7d7d7;\n\n$warm-grey-light: #e8dfe0;\n$warm-grey-dark: #5d5c61;\n\n$background-pink: #f8f0ed;\n\n$night-dark: #262626;\n$night: #505050;\n$night-light: #444444;\n\n$sea-dark: #268194;\n$sea-darker: #39a5bc;\n$sea: #47c9e5;\n\n$sky-dark: #6b92ea;\n$sky-darker: #98b3f0;\n$sky: #aec3f3;\n$sky-lighter: #c4d3f6;\n\n// Font weight\n$font-weight-extra-light: 200;\n$font-weight-light: 300;\n$font-weight-regular: 400;\n$font-weight-medium: 500;\n$font-weight-semiBold: 600;\n$font-weight-bold: 700;\n\n// Font size\n$font-size-xs: 12px;\n$font-size-s: 14px;\n$font-size-m: 16px;\n$font-size-l: 26px;\n$font-size-xl: 42px;\n$font-size-xxl: 56px;\n\n// Line height\n$line-height-paragraph: 30px;\n\n// Height\n$top-banner-height: 600px;\n$section-banner-height: 600px;\n\n// Width\n$base-border-width: 1px;\n\n// Padding\n$gutter-desktop: 30px;\n$padding-section: 60px 80px;\n\n// Box shadow\n$base-box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.12);\n\n// Border radius\n$base-border-radius: 4px;\n","@mixin arrow($color) {\n  border: solid $color;\n  border-width: 0 2px 2px 0;\n  display: inline-block;\n  padding: 8px;\n}\n@mixin filledArrow($color) {\n  width: 0;\n  height: 0;\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-right: 10px solid $color;\n}\n@mixin arrowLeft($color) {\n  @include arrow($color);\n  transform: rotate(135deg);\n}\n\n@mixin arrowRight($color) {\n  @include arrow($color);\n  transform: rotate(-45deg);\n}\n@mixin arrowDown($color) {\n  @include arrow($color);\n  transform: rotate(45deg);\n}\n@mixin filledArrowLeft($color) {\n  @include filledArrow($color);\n}\n"]}]);
// Exports
exports.locals = {
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

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/EducationItem/EducationItem.module.scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./components/EducationItem/EducationItem.module.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".EducationItem_container__3bd5e {\n  position: relative;\n  width: 90%;\n  display: flex;\n  box-sizing: border-box;\n}\n.EducationItem_container__3bd5e:first-child::before {\n  position: absolute;\n  content: \"\";\n  height: 14px;\n  width: 2px;\n  background-color: #fff;\n  left: 50%;\n  top: 0px;\n  z-index: 1;\n}\n.EducationItem_container__3bd5e:last-child::before {\n  position: absolute;\n  content: \"\";\n  height: 14px;\n  width: 2px;\n  background-color: #fff;\n  left: 50%;\n  bottom: 0px;\n  z-index: 1;\n}\n\n.EducationItem_rightSide__1AKGu {\n  position: relative;\n  border-left: solid 1px #efefef;\n  width: 50%;\n  padding: 0 30px 30px 30px;\n  box-sizing: border-box;\n}\n.EducationItem_rightSide__1AKGu::before {\n  position: absolute;\n  content: \"\";\n  height: 8px;\n  width: 8px;\n  background-color: #98b3f0;\n  border-radius: 50%;\n  left: -5px;\n  top: 14px;\n}\n\n.EducationItem_content__jLkrU {\n  position: relative;\n  width: 100%;\n  background-color: white;\n  border-radius: 4px;\n  box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.12);\n}\n.EducationItem_content__jLkrU::before {\n  position: absolute;\n  content: \"\";\n  width: 0;\n  height: 0;\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-right: 10px solid #fff;\n  left: -10px;\n  top: 10px;\n}\n\n.EducationItem_contentHeader__1-r_l {\n  position: relative;\n  padding: 15px 15px 50px 15px;\n}\n\n.EducationItem_subject__3FnOE {\n  font-size: 18px;\n  font-weight: 500;\n  margin-bottom: 15px;\n}\n\n.EducationItem_school__2Tc6S {\n  font-style: italic;\n}\n\n.EducationItem_courses__1TTZp {\n  margin: 0;\n  padding: 15px 0 15px 40px;\n  border-top: dotted 1px #d7d7d7;\n}\n\n.EducationItem_course__25NJn {\n  font-weight: 300;\n  padding: 5px 0;\n}\n\n.EducationItem_coursesTrigger__3zM2g {\n  position: absolute;\n  right: 15px;\n  bottom: 10px;\n  color: #6b92ea;\n  cursor: pointer;\n}\n\n.EducationItem_arrow__1zCPz {\n  border: solid #98b3f0;\n  border-width: 0 2px 2px 0;\n  display: inline-block;\n  padding: 8px;\n  transform: rotate(45deg);\n  padding: 4px;\n  margin: 0 0 3px 10px;\n  transition: 0.2s;\n}\n\n.EducationItem_arrowOpen__Rlt7e {\n  margin-bottom: 0;\n  transform: rotate(-135deg);\n}", "",{"version":3,"sources":["/Users/sigrundish/personal-apps/resume/components/EducationItem/EducationItem.module.scss","/Users/sigrundish/personal-apps/resume/css/variables.scss","/Users/sigrundish/personal-apps/resume/css/mixin.scss"],"names":[],"mappings":"AAGA;EACE,kBAAA;EACA,UAAA;EACA,aAAA;EACA,sBAAA;AAFF;AAII;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;EACA,sBCZE;EDaF,SAAA;EACA,QAAA;EACA,UAAA;AAFN;AAMI;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;EACA,sBCxBE;EDyBF,SAAA;EACA,WAAA;EACA,UAAA;AAJN;;AAQA;EACE,kBAAA;EACA,8BAAA;EACA,UAAA;EACA,yBAAA;EACA,sBAAA;AALF;AAME;EACE,kBAAA;EACA,WAAA;EACA,WAAA;EACA,UAAA;EACA,yBCzBS;ED0BT,kBAAA;EACA,UAAA;EACA,SAAA;AAJJ;;AAOA;EACE,kBAAA;EACA,WAAA;EACA,uBAAA;EACA,kBCGmB;EDFnB,0CCDgB;ADHlB;AAKE;EACE,kBAAA;EACA,WAAA;EEnDF,QAAA;EACA,SAAA;EACA,kCAAA;EACA,qCAAA;EACA,6BAAA;EFiDE,WAAA;EACA,SAAA;AACJ;;AAEA;EACE,kBAAA;EACA,4BAAA;AACF;;AACA;EACE,eAAA;EACA,gBC3CmB;ED4CnB,mBAAA;AAEF;;AAAA;EACE,kBAAA;AAGF;;AADA;EACE,SAAA;EACA,yBAAA;EACA,8BAAA;AAIF;;AAFA;EACE,gBCzDkB;ED0DlB,cAAA;AAKF;;AAHA;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,cCvES;EDwET,eAAA;AAMF;;AAJA;EE3FE,qBAAA;EACA,yBAAA;EACA,qBAAA;EACA,YAAA;EAoBA,wBAAA;EFsEA,YAAA;EACA,oBAAA;EACA,gBAAA;AAWF;;AATA;EACE,gBAAA;EACA,0BAAA;AAYF","file":"EducationItem.module.scss","sourcesContent":["@import '../../css/variables.scss';\n@import '../../css/mixin.scss';\n\n.container {\n  position: relative;\n  width: 90%;\n  display: flex;\n  box-sizing: border-box;\n  &:first-child {\n    &::before {\n      position: absolute;\n      content: '';\n      height: 14px;\n      width: 2px;\n      background-color: $white;\n      left: 50%;\n      top: 0px;\n      z-index: 1;\n    }\n  }\n  &:last-child {\n    &::before {\n      position: absolute;\n      content: '';\n      height: 14px;\n      width: 2px;\n      background-color: $white;\n      left: 50%;\n      bottom: 0px;\n      z-index: 1;\n    }\n  }\n}\n.rightSide {\n  position: relative;\n  border-left: solid $base-border-width $neutral;\n  width: 50%;\n  padding: 0 30px 30px 30px;\n  box-sizing: border-box;\n  &::before {\n    position: absolute;\n    content: '';\n    height: 8px;\n    width: 8px;\n    background-color: $sky-darker;\n    border-radius: 50%;\n    left: -5px;\n    top: 14px;\n  }\n}\n.content {\n  position: relative;\n  width: 100%;\n  background-color: white;\n  border-radius: $base-border-radius;\n  box-shadow: $base-box-shadow;\n  &::before {\n    position: absolute;\n    content: '';\n    @include filledArrowLeft($white);\n    left: -10px;\n    top: 10px;\n  }\n}\n.contentHeader {\n  position: relative;\n  padding: 15px 15px 50px 15px;\n}\n.subject {\n  font-size: 18px;\n  font-weight: $font-weight-medium;\n  margin-bottom: 15px;\n}\n.school {\n  font-style: italic;\n}\n.courses {\n  margin: 0;\n  padding: 15px 0 15px 40px;\n  border-top: dotted $base-border-width $border-color;\n}\n.course {\n  font-weight: $font-weight-light;\n  padding: 5px 0;\n}\n.coursesTrigger {\n  position: absolute;\n  right: 15px;\n  bottom: 10px;\n  color: $sky-dark;\n  cursor: pointer;\n}\n.arrow {\n  @include arrowDown($sky-darker);\n  padding: 4px;\n  margin: 0 0 3px 10px;\n  transition: 0.2s;\n}\n.arrowOpen {\n  margin-bottom: 0;\n  transform: rotate(-135deg);\n}\n","$bright-blue-grey: #e2f0f9;\n$neutral: #efefef;\n$white: #fff;\n$border-color: #d7d7d7;\n\n$warm-grey-light: #e8dfe0;\n$warm-grey-dark: #5d5c61;\n\n$background-pink: #f8f0ed;\n\n$night-dark: #262626;\n$night: #505050;\n$night-light: #444444;\n\n$sea-dark: #268194;\n$sea-darker: #39a5bc;\n$sea: #47c9e5;\n\n$sky-dark: #6b92ea;\n$sky-darker: #98b3f0;\n$sky: #aec3f3;\n$sky-lighter: #c4d3f6;\n\n// Font weight\n$font-weight-extra-light: 200;\n$font-weight-light: 300;\n$font-weight-regular: 400;\n$font-weight-medium: 500;\n$font-weight-semiBold: 600;\n$font-weight-bold: 700;\n\n// Font size\n$font-size-xs: 12px;\n$font-size-s: 14px;\n$font-size-m: 16px;\n$font-size-l: 26px;\n$font-size-xl: 42px;\n$font-size-xxl: 56px;\n\n// Line height\n$line-height-paragraph: 30px;\n\n// Height\n$top-banner-height: 600px;\n$section-banner-height: 600px;\n\n// Width\n$base-border-width: 1px;\n\n// Padding\n$gutter-desktop: 30px;\n$padding-section: 60px 80px;\n\n// Box shadow\n$base-box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.12);\n\n// Border radius\n$base-border-radius: 4px;\n","@mixin arrow($color) {\n  border: solid $color;\n  border-width: 0 2px 2px 0;\n  display: inline-block;\n  padding: 8px;\n}\n@mixin filledArrow($color) {\n  width: 0;\n  height: 0;\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-right: 10px solid $color;\n}\n@mixin arrowLeft($color) {\n  @include arrow($color);\n  transform: rotate(135deg);\n}\n\n@mixin arrowRight($color) {\n  @include arrow($color);\n  transform: rotate(-45deg);\n}\n@mixin arrowDown($color) {\n  @include arrow($color);\n  transform: rotate(45deg);\n}\n@mixin filledArrowLeft($color) {\n  @include filledArrow($color);\n}\n"]}]);
// Exports
exports.locals = {
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

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/ExpandWithAnimation/ExpandWithAnimation.module.scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./components/ExpandWithAnimation/ExpandWithAnimation.module.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".ExpandWithAnimation_container__1nZhY {\n  overflow: hidden;\n  transition: height 0.3s ease-out;\n  height: auto;\n}", "",{"version":3,"sources":["/Users/sigrundish/personal-apps/resume/components/ExpandWithAnimation/ExpandWithAnimation.module.scss"],"names":[],"mappings":"AAAA;EACE,gBAAA;EACA,gCAAA;EACA,YAAA;AACF","file":"ExpandWithAnimation.module.scss","sourcesContent":[".container {\n  overflow: hidden;\n  transition: height 0.3s ease-out;\n  height: auto;\n}\n"]}]);
// Exports
exports.locals = {
	"container": "ExpandWithAnimation_container__1nZhY"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/Heading/Heading.module.scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./components/Heading/Heading.module.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".Heading_container__N_uQU {\n  display: flex;\n  justify-content: center;\n  position: relative;\n  padding: 160px;\n}\n\n.Heading_backgroundImage__1xEkE {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  background: url(\"/img/code2.jpg\") no-repeat bottom right;\n  background-size: cover;\n  -webkit-filter: blur(4px);\n          filter: blur(4px);\n}\n\n.Heading_overlay__3e-JV {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.7);\n  -webkit-filter: blur(0);\n          filter: blur(0);\n}\n\n.Heading_flexWrapper__hXIYQ {\n  flex: auto;\n  display: flex;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  max-width: 1400px;\n}\n\n.Heading_content__1jeks {\n  z-index: 1;\n  padding-right: 80px;\n  box-sizing: border-box;\n}\n\n.Heading_h1__35mgr {\n  padding: 30px 0;\n  color: #e8dfe0;\n}\n\n.Heading_h2__TKuJp {\n  position: relative;\n  font-weight: 300;\n  padding-top: 40px;\n  color: #e8dfe0;\n}\n.Heading_h2__TKuJp::before {\n  content: \"\";\n  position: absolute;\n  height: 2px;\n  width: 200px;\n  background-color: #98b3f0;\n  top: 0;\n  left: 0;\n}\n\n.Heading_h3__2w3Ps {\n  padding: 0;\n  color: #98b3f0;\n}\n\n.Heading_imageWrapper__2-b9Y {\n  position: relative;\n  height: 520px;\n  flex-basis: 430px;\n  flex-grow: 0;\n  flex-shrink: 0;\n  margin-left: auto;\n}\n\n.Heading_box__1ZrtL {\n  position: absolute;\n  width: 360px;\n  height: 460px;\n  top: 0;\n  right: 0;\n  border: solid 12px #aec3f3;\n}\n\n.Heading_image__3XmLI {\n  position: absolute;\n  background: url(\"/img/headerimage.jpeg\") no-repeat center center;\n  background-size: cover;\n  width: 350px;\n  height: 450px;\n  bottom: 0;\n  left: 0;\n  border: solid 12px #e8dfe0;\n  background-color: rgba(40, 71, 143, 0.3);\n}", "",{"version":3,"sources":["/Users/sigrundish/personal-apps/resume/components/Heading/Heading.module.scss","/Users/sigrundish/personal-apps/resume/css/variables.scss"],"names":[],"mappings":"AAEA;EACE,aAAA;EACA,uBAAA;EACA,kBAAA;EACA,cAAA;AADF;;AAGA;EACE,kBAAA;EACA,MAAA;EACA,SAAA;EACA,QAAA;EACA,OAAA;EACA,wDAAA;EACA,sBAAA;EACA,yBAAA;UAAA,iBAAA;AAAF;;AAEA;EACE,kBAAA;EACA,MAAA;EACA,SAAA;EACA,QAAA;EACA,OAAA;EACA,8BAAA;EACA,uBAAA;UAAA,eAAA;AACF;;AACA;EACE,UAAA;EACA,aAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,iBAAA;AAEF;;AAAA;EACE,UAAA;EACA,mBAAA;EACA,sBAAA;AAGF;;AADA;EACE,eAAA;EACA,cCrCgB;ADyClB;;AAFA;EACE,kBAAA;EACA,gBCrBkB;EDsBlB,iBAAA;EACA,cC3CgB;ADgDlB;AAJE;EACE,WAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,yBCnCS;EDoCT,MAAA;EACA,OAAA;AAMJ;;AAHA;EACE,UAAA;EACA,cC1CW;ADgDb;;AAJA;EACE,kBAAA;EACA,aAAA;EACA,iBAAA;EACA,YAAA;EACA,cAAA;EACA,iBAAA;AAOF;;AALA;EACE,kBAAA;EACA,YAAA;EACA,aAAA;EACA,MAAA;EACA,QAAA;EACA,0BAAA;AAQF;;AALA;EACE,kBAAA;EACA,gEAAA;EACA,sBAAA;EACA,YAAA;EACA,aAAA;EACA,SAAA;EACA,OAAA;EACA,0BAAA;EACA,wCAAA;AAQF","file":"Heading.module.scss","sourcesContent":["@import '../../css/variables.scss';\n\n.container {\n  display: flex;\n  justify-content: center;\n  position: relative;\n  padding: 160px;\n}\n.backgroundImage {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  background: url('/img/code2.jpg') no-repeat bottom right;\n  background-size: cover;\n  filter: blur(4px);\n}\n.overlay {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.7);\n  filter: blur(0);\n}\n.flexWrapper {\n  flex: auto;\n  display: flex;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  max-width: 1400px;\n}\n.content {\n  z-index: 1;\n  padding-right: 80px;\n  box-sizing: border-box;\n}\n.h1 {\n  padding: $gutter-desktop 0;\n  color: $warm-grey-light;\n}\n.h2 {\n  position: relative;\n  font-weight: $font-weight-light;\n  padding-top: 40px;\n  color: $warm-grey-light;\n  &::before {\n    content: '';\n    position: absolute;\n    height: 2px;\n    width: 200px;\n    background-color: $sky-darker;\n    top: 0;\n    left: 0;\n  }\n}\n.h3 {\n  padding: 0;\n  color: $sky-darker;\n}\n.imageWrapper {\n  position: relative;\n  height: 520px;\n  flex-basis: 430px;\n  flex-grow: 0;\n  flex-shrink: 0;\n  margin-left: auto;\n}\n.box {\n  position: absolute;\n  width: 360px;\n  height: 460px;\n  top: 0;\n  right: 0;\n  border: solid 12px $sky;\n  // background-color: rgba(174, 195, 243, 0.5);\n}\n.image {\n  position: absolute;\n  background: url('/img/headerimage.jpeg') no-repeat center center;\n  background-size: cover;\n  width: 350px;\n  height: 450px;\n  bottom: 0;\n  left: 0;\n  border: solid 12px $warm-grey-light;\n  background-color: rgba(40, 71, 143, 0.3);\n}\n","$bright-blue-grey: #e2f0f9;\n$neutral: #efefef;\n$white: #fff;\n$border-color: #d7d7d7;\n\n$warm-grey-light: #e8dfe0;\n$warm-grey-dark: #5d5c61;\n\n$background-pink: #f8f0ed;\n\n$night-dark: #262626;\n$night: #505050;\n$night-light: #444444;\n\n$sea-dark: #268194;\n$sea-darker: #39a5bc;\n$sea: #47c9e5;\n\n$sky-dark: #6b92ea;\n$sky-darker: #98b3f0;\n$sky: #aec3f3;\n$sky-lighter: #c4d3f6;\n\n// Font weight\n$font-weight-extra-light: 200;\n$font-weight-light: 300;\n$font-weight-regular: 400;\n$font-weight-medium: 500;\n$font-weight-semiBold: 600;\n$font-weight-bold: 700;\n\n// Font size\n$font-size-xs: 12px;\n$font-size-s: 14px;\n$font-size-m: 16px;\n$font-size-l: 26px;\n$font-size-xl: 42px;\n$font-size-xxl: 56px;\n\n// Line height\n$line-height-paragraph: 30px;\n\n// Height\n$top-banner-height: 600px;\n$section-banner-height: 600px;\n\n// Width\n$base-border-width: 1px;\n\n// Padding\n$gutter-desktop: 30px;\n$padding-section: 60px 80px;\n\n// Box shadow\n$base-box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.12);\n\n// Border radius\n$base-border-radius: 4px;\n"]}]);
// Exports
exports.locals = {
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

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/Headline/Headline.module.scss":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./components/Headline/Headline.module.scss ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".Headline_container__2mtZr {\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  text-align: center;\n  padding: 50px 0;\n  background-color: #efefef;\n}\n\n.Headline_whiteContainer__uqPIG {\n  background-color: #fff;\n}\n\n.Headline_noPaddingContainer__3DetB {\n  padding-bottom: 0;\n}\n\n.Headline_h2__1xKOV {\n  padding-top: 0;\n}\n\n.Headline_h3__1L3M3 {\n  font-weight: 300;\n  padding-bottom: 0;\n}", "",{"version":3,"sources":["/Users/sigrundish/personal-apps/resume/components/Headline/Headline.module.scss","/Users/sigrundish/personal-apps/resume/css/variables.scss"],"names":[],"mappings":"AAEA;EACE,aAAA;EACA,iBAAA;EACA,mBAAA;EACA,kBAAA;EACA,eAAA;EACA,yBCPQ;ADMV;;AAGA;EACE,sBCTM;ADSR;;AAEA;EACE,iBAAA;AACF;;AACA;EACE,cAAA;AAEF;;AAAA;EACE,gBCKkB;EDJlB,iBAAA;AAGF","file":"Headline.module.scss","sourcesContent":["@import '../../css/variables.scss';\n\n.container {\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  text-align: center;\n  padding: 50px 0;\n  background-color: $neutral;\n}\n.whiteContainer {\n  background-color: $white;\n}\n.noPaddingContainer {\n  padding-bottom: 0;\n}\n.h2 {\n  padding-top: 0;\n}\n.h3 {\n  font-weight: $font-weight-light;\n  padding-bottom: 0;\n}\n","$bright-blue-grey: #e2f0f9;\n$neutral: #efefef;\n$white: #fff;\n$border-color: #d7d7d7;\n\n$warm-grey-light: #e8dfe0;\n$warm-grey-dark: #5d5c61;\n\n$background-pink: #f8f0ed;\n\n$night-dark: #262626;\n$night: #505050;\n$night-light: #444444;\n\n$sea-dark: #268194;\n$sea-darker: #39a5bc;\n$sea: #47c9e5;\n\n$sky-dark: #6b92ea;\n$sky-darker: #98b3f0;\n$sky: #aec3f3;\n$sky-lighter: #c4d3f6;\n\n// Font weight\n$font-weight-extra-light: 200;\n$font-weight-light: 300;\n$font-weight-regular: 400;\n$font-weight-medium: 500;\n$font-weight-semiBold: 600;\n$font-weight-bold: 700;\n\n// Font size\n$font-size-xs: 12px;\n$font-size-s: 14px;\n$font-size-m: 16px;\n$font-size-l: 26px;\n$font-size-xl: 42px;\n$font-size-xxl: 56px;\n\n// Line height\n$line-height-paragraph: 30px;\n\n// Height\n$top-banner-height: 600px;\n$section-banner-height: 600px;\n\n// Width\n$base-border-width: 1px;\n\n// Padding\n$gutter-desktop: 30px;\n$padding-section: 60px 80px;\n\n// Box shadow\n$base-box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.12);\n\n// Border radius\n$base-border-radius: 4px;\n"]}]);
// Exports
exports.locals = {
	"container": "Headline_container__2mtZr",
	"whiteContainer": "Headline_whiteContainer__uqPIG",
	"noPaddingContainer": "Headline_noPaddingContainer__3DetB",
	"h2": "Headline_h2__1xKOV",
	"h3": "Headline_h3__1L3M3"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/Highlight/Highlight.module.scss":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./components/Highlight/Highlight.module.scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".Highlight_container__1goxo {\n  display: flex;\n  flex-flow: column;\n  padding: 30px;\n  box-sizing: border-box;\n  width: 30%;\n}\n\n.Highlight_heading__32oBX {\n  display: flex;\n}\n\n.Highlight_textWrapper__2Lcm- {\n  padding-left: 20px;\n  box-sizing: border-box;\n}\n\n.Highlight_title__2Q4Qj {\n  font-weight: 500;\n  padding-bottom: 10px;\n}\n\n.Highlight_description__17Av1 {\n  font-weight: 300;\n  line-height: 30px;\n}", "",{"version":3,"sources":["/Users/sigrundish/personal-apps/resume/components/Highlight/Highlight.module.scss","/Users/sigrundish/personal-apps/resume/css/variables.scss"],"names":[],"mappings":"AAEA;EACE,aAAA;EACA,iBAAA;EACA,aC6Ce;ED5Cf,sBAAA;EACA,UAAA;AADF;;AAGA;EACE,aAAA;AAAF;;AAEA;EACE,kBAAA;EACA,sBAAA;AACF;;AACA;EACE,gBCUmB;EDTnB,oBAAA;AAEF;;AAAA;EACE,gBCIkB;EDHlB,iBAAA;AAGF","file":"Highlight.module.scss","sourcesContent":["@import '../../css/variables.scss';\n\n.container {\n  display: flex;\n  flex-flow: column;\n  padding: $gutter-desktop;\n  box-sizing: border-box;\n  width: 30%;\n}\n.heading {\n  display: flex;\n}\n.textWrapper {\n  padding-left: 20px;\n  box-sizing: border-box;\n}\n.title {\n  font-weight: $font-weight-medium;\n  padding-bottom: 10px;\n}\n.description {\n  font-weight: $font-weight-light;\n  line-height: 30px;\n}\n","$bright-blue-grey: #e2f0f9;\n$neutral: #efefef;\n$white: #fff;\n$border-color: #d7d7d7;\n\n$warm-grey-light: #e8dfe0;\n$warm-grey-dark: #5d5c61;\n\n$background-pink: #f8f0ed;\n\n$night-dark: #262626;\n$night: #505050;\n$night-light: #444444;\n\n$sea-dark: #268194;\n$sea-darker: #39a5bc;\n$sea: #47c9e5;\n\n$sky-dark: #6b92ea;\n$sky-darker: #98b3f0;\n$sky: #aec3f3;\n$sky-lighter: #c4d3f6;\n\n// Font weight\n$font-weight-extra-light: 200;\n$font-weight-light: 300;\n$font-weight-regular: 400;\n$font-weight-medium: 500;\n$font-weight-semiBold: 600;\n$font-weight-bold: 700;\n\n// Font size\n$font-size-xs: 12px;\n$font-size-s: 14px;\n$font-size-m: 16px;\n$font-size-l: 26px;\n$font-size-xl: 42px;\n$font-size-xxl: 56px;\n\n// Line height\n$line-height-paragraph: 30px;\n\n// Height\n$top-banner-height: 600px;\n$section-banner-height: 600px;\n\n// Width\n$base-border-width: 1px;\n\n// Padding\n$gutter-desktop: 30px;\n$padding-section: 60px 80px;\n\n// Box shadow\n$base-box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.12);\n\n// Border radius\n$base-border-radius: 4px;\n"]}]);
// Exports
exports.locals = {
	"container": "Highlight_container__1goxo",
	"heading": "Highlight_heading__32oBX",
	"textWrapper": "Highlight_textWrapper__2Lcm-",
	"title": "Highlight_title__2Q4Qj",
	"description": "Highlight_description__17Av1"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/Highlights/Highlights.module.scss":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./components/Highlights/Highlights.module.scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".Highlights_heading__CNsxB {\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  text-align: center;\n  margin-bottom: 30px;\n}\n\n.Highlights_highlights__3LyI8 {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.Highlights_icon__29FKp {\n  flex-shrink: 0;\n  width: 35px;\n  height: 35px;\n  fill: #98b3f0;\n}\n.Highlights_icon__29FKp path {\n  stroke: 5px;\n}", "",{"version":3,"sources":["/Users/sigrundish/personal-apps/resume/components/Highlights/Highlights.module.scss","/Users/sigrundish/personal-apps/resume/css/variables.scss"],"names":[],"mappings":"AAEA;EACE,aAAA;EACA,iBAAA;EACA,mBAAA;EACA,kBAAA;EACA,mBC2Ce;AD5CjB;;AAGA;EACE,aAAA;EACA,eAAA;EACA,uBAAA;AAAF;;AAEA;EACE,cAAA;EACA,WAAA;EACA,YAAA;EACA,aCCW;ADAb;AAAE;EACE,WAAA;AAEJ","file":"Highlights.module.scss","sourcesContent":["@import '../../css/variables.scss';\n\n.heading {\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  text-align: center;\n  margin-bottom: $gutter-desktop;\n}\n.highlights {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.icon {\n  flex-shrink: 0;\n  width: 35px;\n  height: 35px;\n  fill: $sky-darker;\n  path {\n    stroke: 5px;\n  }\n}\n","$bright-blue-grey: #e2f0f9;\n$neutral: #efefef;\n$white: #fff;\n$border-color: #d7d7d7;\n\n$warm-grey-light: #e8dfe0;\n$warm-grey-dark: #5d5c61;\n\n$background-pink: #f8f0ed;\n\n$night-dark: #262626;\n$night: #505050;\n$night-light: #444444;\n\n$sea-dark: #268194;\n$sea-darker: #39a5bc;\n$sea: #47c9e5;\n\n$sky-dark: #6b92ea;\n$sky-darker: #98b3f0;\n$sky: #aec3f3;\n$sky-lighter: #c4d3f6;\n\n// Font weight\n$font-weight-extra-light: 200;\n$font-weight-light: 300;\n$font-weight-regular: 400;\n$font-weight-medium: 500;\n$font-weight-semiBold: 600;\n$font-weight-bold: 700;\n\n// Font size\n$font-size-xs: 12px;\n$font-size-s: 14px;\n$font-size-m: 16px;\n$font-size-l: 26px;\n$font-size-xl: 42px;\n$font-size-xxl: 56px;\n\n// Line height\n$line-height-paragraph: 30px;\n\n// Height\n$top-banner-height: 600px;\n$section-banner-height: 600px;\n\n// Width\n$base-border-width: 1px;\n\n// Padding\n$gutter-desktop: 30px;\n$padding-section: 60px 80px;\n\n// Box shadow\n$base-box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.12);\n\n// Border radius\n$base-border-radius: 4px;\n"]}]);
// Exports
exports.locals = {
	"heading": "Highlights_heading__CNsxB",
	"highlights": "Highlights_highlights__3LyI8",
	"icon": "Highlights_icon__29FKp"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/ImageBanner/ImageBanner.module.scss":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./components/ImageBanner/ImageBanner.module.scss ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".ImageBanner_container__2rij_ {\n  display: flex;\n  height: 400px;\n}\n\n.ImageBanner_tallContainer__1AdAE {\n  height: 600px;\n}\n\n.ImageBanner_image__1nFwM {\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n}", "",{"version":3,"sources":["/Users/sigrundish/personal-apps/resume/components/ImageBanner/ImageBanner.module.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,aAAA;AACF;;AACA;EACE,aAAA;AAEF;;AAAA;EACE,4BAAA;EACA,kCAAA;EACA,sBAAA;AAGF","file":"ImageBanner.module.scss","sourcesContent":[".container {\n  display: flex;\n  height: 400px;\n}\n.tallContainer {\n  height: 600px;\n}\n.image {\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n}\n"]}]);
// Exports
exports.locals = {
	"container": "ImageBanner_container__2rij_",
	"tallContainer": "ImageBanner_tallContainer__1AdAE",
	"image": "ImageBanner_image__1nFwM"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/Personal/Personal.module.scss":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./components/Personal/Personal.module.scss ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".Personal_container__32ns9 {\n  position: relative;\n  display: flex;\n  align-items: center;\n  height: 100%;\n}\n\n.Personal_h3__3pb9D {\n  text-transform: uppercase;\n}\n\n.Personal_textWrapper__-q1uT {\n  text-align: justify;\n}\n\n.Personal_paragraph__OV--3 {\n  font-size: 16px;\n  line-height: 30px;\n}\n\n.Personal_imageWrapper__2EQ1k {\n  position: relative;\n  height: 80%;\n  flex-basis: 430px;\n  flex-grow: 0;\n  flex-shrink: 0;\n  margin-left: 120px;\n}\n\n.Personal_portrait__3AFr3 {\n  position: absolute;\n  background: url(\"/img/blue.JPG\") no-repeat top center;\n  background-size: cover;\n  height: 400px;\n  width: 360px;\n  left: 0;\n  bottom: 0;\n  border: solid white 12px;\n}\n\n.Personal_background__Ii9DM {\n  position: absolute;\n  background: url(\"/img/white-bridge.JPG\") no-repeat top center;\n  background-size: cover;\n  height: 400px;\n  width: 360px;\n  top: 0;\n  right: 0;\n}", "",{"version":3,"sources":["/Users/sigrundish/personal-apps/resume/components/Personal/Personal.module.scss","/Users/sigrundish/personal-apps/resume/css/variables.scss"],"names":[],"mappings":"AAEA;EACE,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,YAAA;AADF;;AAGA;EACE,yBAAA;AAAF;;AAEA;EACE,mBAAA;AACF;;AACA;EACE,eCmBY;EDlBZ,iBCwBsB;ADtBxB;;AAAA;EACE,kBAAA;EACA,WAAA;EACA,iBAAA;EACA,YAAA;EACA,cAAA;EACA,kBAAA;AAGF;;AADA;EACE,kBAAA;EACA,qDAAA;EACA,sBAAA;EACA,aAAA;EACA,YAAA;EACA,OAAA;EACA,SAAA;EACA,wBAAA;AAIF;;AAFA;EACE,kBAAA;EACA,6DAAA;EACA,sBAAA;EACA,aAAA;EACA,YAAA;EACA,MAAA;EACA,QAAA;AAKF","file":"Personal.module.scss","sourcesContent":["@import '../../css/variables.scss';\n\n.container {\n  position: relative;\n  display: flex;\n  align-items: center;\n  height: 100%;\n}\n.h3 {\n  text-transform: uppercase;\n}\n.textWrapper {\n  text-align: justify;\n}\n.paragraph {\n  font-size: $font-size-m;\n  line-height: $line-height-paragraph;\n}\n.imageWrapper {\n  position: relative;\n  height: 80%;\n  flex-basis: 430px;\n  flex-grow: 0;\n  flex-shrink: 0;\n  margin-left: 120px;\n}\n.portrait {\n  position: absolute;\n  background: url('/img/blue.JPG') no-repeat top center;\n  background-size: cover;\n  height: 400px;\n  width: 360px;\n  left: 0;\n  bottom: 0;\n  border: solid white 12px;\n}\n.background {\n  position: absolute;\n  background: url('/img/white-bridge.JPG') no-repeat top center;\n  background-size: cover;\n  height: 400px;\n  width: 360px;\n  top: 0;\n  right: 0;\n}\n","$bright-blue-grey: #e2f0f9;\n$neutral: #efefef;\n$white: #fff;\n$border-color: #d7d7d7;\n\n$warm-grey-light: #e8dfe0;\n$warm-grey-dark: #5d5c61;\n\n$background-pink: #f8f0ed;\n\n$night-dark: #262626;\n$night: #505050;\n$night-light: #444444;\n\n$sea-dark: #268194;\n$sea-darker: #39a5bc;\n$sea: #47c9e5;\n\n$sky-dark: #6b92ea;\n$sky-darker: #98b3f0;\n$sky: #aec3f3;\n$sky-lighter: #c4d3f6;\n\n// Font weight\n$font-weight-extra-light: 200;\n$font-weight-light: 300;\n$font-weight-regular: 400;\n$font-weight-medium: 500;\n$font-weight-semiBold: 600;\n$font-weight-bold: 700;\n\n// Font size\n$font-size-xs: 12px;\n$font-size-s: 14px;\n$font-size-m: 16px;\n$font-size-l: 26px;\n$font-size-xl: 42px;\n$font-size-xxl: 56px;\n\n// Line height\n$line-height-paragraph: 30px;\n\n// Height\n$top-banner-height: 600px;\n$section-banner-height: 600px;\n\n// Width\n$base-border-width: 1px;\n\n// Padding\n$gutter-desktop: 30px;\n$padding-section: 60px 80px;\n\n// Box shadow\n$base-box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.12);\n\n// Border radius\n$base-border-radius: 4px;\n"]}]);
// Exports
exports.locals = {
	"container": "Personal_container__32ns9",
	"h3": "Personal_h3__3pb9D",
	"textWrapper": "Personal_textWrapper__-q1uT",
	"paragraph": "Personal_paragraph__OV--3",
	"imageWrapper": "Personal_imageWrapper__2EQ1k",
	"portrait": "Personal_portrait__3AFr3",
	"background": "Personal_background__Ii9DM"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/ProgressBar/ProgressBar.module.scss":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./components/ProgressBar/ProgressBar.module.scss ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "@keyframes ProgressBar_fadein__2rO8Y {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes ProgressBar_expandWidth__1VdiN {\n  0% {\n    width: 0;\n  }\n  100% {\n    width: auto;\n  }\n}\n@keyframes ProgressBar_slideUp__3gSTc {\n  from {\n    transform: translateY(150px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes ProgressBar_slideFromRight__cpb9z {\n  from {\n    transform: translateX(150px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes ProgressBar_slideFromLeft__1VsoY {\n  from {\n    transform: translateX(-150px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.ProgressBar_container__1faKc {\n  margin-top: 10px;\n}\n\n.ProgressBar_progressContainer__3rKvy {\n  display: flex;\n  align-items: center;\n  height: 2px;\n  width: 100%;\n  background-color: #d7d7d7;\n  border-radius: 50px;\n}\n\n.ProgressBar_progress__1hafr {\n  height: 6px;\n  background-color: #98b3f0;\n  border-radius: inherit;\n  text-align: right;\n  transition: width 1.2s ease-in-out;\n}\n\n.ProgressBar_advancedProgress__2PA5- {\n  background-color: #6b92ea;\n}\n\n.ProgressBar_intermediateProgress__3cYzu {\n  background-color: #98b3f0;\n}\n\n.ProgressBar_fundamentalProgress__3XVKQ {\n  background-color: #c4d3f6;\n}\n\n.ProgressBar_label__1MqgM {\n  padding: 10px 0;\n  white-space: nowrap;\n}", "",{"version":3,"sources":["/Users/sigrundish/personal-apps/resume/css/keyframes.scss","/Users/sigrundish/personal-apps/resume/components/ProgressBar/ProgressBar.module.scss","/Users/sigrundish/personal-apps/resume/css/variables.scss"],"names":[],"mappings":"AAAA;EACE;IACE,UAAA;ECCF;EDCA;IACE,UAAA;ECCF;AACF;ADCA;EACE;IACE,QAAA;ECCF;EDCA;IACE,WAAA;ECCF;AACF;ADCA;EACE;IACE,4BAAA;ECCF;EDCA;IACE,UAAA;IACA,wBAAA;ECCF;AACF;ADCA;EACE;IACE,4BAAA;ECCF;EDCA;IACE,UAAA;IACA,wBAAA;ECCF;AACF;ADCA;EACE;IACE,6BAAA;ECCF;EDCA;IACE,UAAA;IACA,wBAAA;ECCF;AACF;AAvCA;EACE,gBAAA;AAyCF;;AAvCA;EACE,aAAA;EACA,mBAAA;EACA,WAAA;EACA,WAAA;EACA,yBCRa;EDSb,mBAAA;AA0CF;;AAxCA;EACE,WAAA;EACA,yBCGW;EDFX,sBAAA;EACA,iBAAA;EACA,kCAAA;AA2CF;;AAzCA;EACE,yBCJS;ADgDX;;AA1CA;EACE,yBCNW;ADmDb;;AA3CA;EACE,yBCPY;ADqDd;;AA3CA;EACE,eAAA;EACA,mBAAA;AA8CF","file":"ProgressBar.module.scss","sourcesContent":["@keyframes fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes expandWidth {\n  0% {\n    width: 0;\n  }\n  100% {\n    width: auto;\n  }\n}\n@keyframes slideUp {\n  from {\n    transform: translateY(150px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes slideFromRight {\n  from {\n    transform: translateX(150px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes slideFromLeft {\n  from {\n    transform: translateX(-150px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n","@import '../../css/keyframes.scss';\n@import '../../css/variables.scss';\n\n.container {\n  margin-top: 10px;\n}\n.progressContainer {\n  display: flex;\n  align-items: center;\n  height: 2px;\n  width: 100%;\n  background-color: $border-color;\n  border-radius: 50px;\n}\n.progress {\n  height: 6px;\n  background-color: $sky-darker;\n  border-radius: inherit;\n  text-align: right;\n  transition: width 1.2s ease-in-out;\n}\n.advancedProgress {\n  background-color: $sky-dark;\n}\n.intermediateProgress {\n  background-color: $sky-darker;\n}\n.fundamentalProgress {\n  background-color: $sky-lighter;\n}\n\n.label {\n  padding: 10px 0;\n  white-space: nowrap;\n}\n","$bright-blue-grey: #e2f0f9;\n$neutral: #efefef;\n$white: #fff;\n$border-color: #d7d7d7;\n\n$warm-grey-light: #e8dfe0;\n$warm-grey-dark: #5d5c61;\n\n$background-pink: #f8f0ed;\n\n$night-dark: #262626;\n$night: #505050;\n$night-light: #444444;\n\n$sea-dark: #268194;\n$sea-darker: #39a5bc;\n$sea: #47c9e5;\n\n$sky-dark: #6b92ea;\n$sky-darker: #98b3f0;\n$sky: #aec3f3;\n$sky-lighter: #c4d3f6;\n\n// Font weight\n$font-weight-extra-light: 200;\n$font-weight-light: 300;\n$font-weight-regular: 400;\n$font-weight-medium: 500;\n$font-weight-semiBold: 600;\n$font-weight-bold: 700;\n\n// Font size\n$font-size-xs: 12px;\n$font-size-s: 14px;\n$font-size-m: 16px;\n$font-size-l: 26px;\n$font-size-xl: 42px;\n$font-size-xxl: 56px;\n\n// Line height\n$line-height-paragraph: 30px;\n\n// Height\n$top-banner-height: 600px;\n$section-banner-height: 600px;\n\n// Width\n$base-border-width: 1px;\n\n// Padding\n$gutter-desktop: 30px;\n$padding-section: 60px 80px;\n\n// Box shadow\n$base-box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.12);\n\n// Border radius\n$base-border-radius: 4px;\n"]}]);
// Exports
exports.locals = {
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

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/Section/Section.module.scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./components/Section/Section.module.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".Section_container__3-XG8 {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 600px;\n  padding: 60px 80px;\n  background-color: #efefef;\n}\n\n.Section_whiteContainer__28t46 {\n  background-color: #fff;\n}\n\n.Section_tallContainer__2ltIT {\n  height: auto;\n}\n\n.Section_noPaddingContainer__KbCh6 {\n  padding-bottom: 0;\n}\n\n.Section_inner__cyp2g {\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n  max-width: 1400px;\n}", "",{"version":3,"sources":["/Users/sigrundish/personal-apps/resume/components/Section/Section.module.scss","/Users/sigrundish/personal-apps/resume/css/variables.scss"],"names":[],"mappings":"AAEA;EACE,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,aCqCsB;EDpCtB,kBC2CgB;ED1ChB,yBCRQ;ADOV;;AAGA;EACE,sBCVM;ADUR;;AAEA;EACE,YAAA;AACF;;AACA;EACE,iBAAA;AAEF;;AAAA;EACE,aAAA;EACA,iBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,iBAAA;AAGF","file":"Section.module.scss","sourcesContent":["@import '../../css/variables.scss';\n\n.container {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: $section-banner-height;\n  padding: $padding-section;\n  background-color: $neutral;\n}\n.whiteContainer {\n  background-color: $white;\n}\n.tallContainer {\n  height: auto;\n}\n.noPaddingContainer {\n  padding-bottom: 0;\n}\n.inner {\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n  max-width: 1400px;\n}\n","$bright-blue-grey: #e2f0f9;\n$neutral: #efefef;\n$white: #fff;\n$border-color: #d7d7d7;\n\n$warm-grey-light: #e8dfe0;\n$warm-grey-dark: #5d5c61;\n\n$background-pink: #f8f0ed;\n\n$night-dark: #262626;\n$night: #505050;\n$night-light: #444444;\n\n$sea-dark: #268194;\n$sea-darker: #39a5bc;\n$sea: #47c9e5;\n\n$sky-dark: #6b92ea;\n$sky-darker: #98b3f0;\n$sky: #aec3f3;\n$sky-lighter: #c4d3f6;\n\n// Font weight\n$font-weight-extra-light: 200;\n$font-weight-light: 300;\n$font-weight-regular: 400;\n$font-weight-medium: 500;\n$font-weight-semiBold: 600;\n$font-weight-bold: 700;\n\n// Font size\n$font-size-xs: 12px;\n$font-size-s: 14px;\n$font-size-m: 16px;\n$font-size-l: 26px;\n$font-size-xl: 42px;\n$font-size-xxl: 56px;\n\n// Line height\n$line-height-paragraph: 30px;\n\n// Height\n$top-banner-height: 600px;\n$section-banner-height: 600px;\n\n// Width\n$base-border-width: 1px;\n\n// Padding\n$gutter-desktop: 30px;\n$padding-section: 60px 80px;\n\n// Box shadow\n$base-box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.12);\n\n// Border radius\n$base-border-radius: 4px;\n"]}]);
// Exports
exports.locals = {
	"container": "Section_container__3-XG8",
	"whiteContainer": "Section_whiteContainer__28t46",
	"tallContainer": "Section_tallContainer__2ltIT",
	"noPaddingContainer": "Section_noPaddingContainer__KbCh6",
	"inner": "Section_inner__cyp2g"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/Separator/Separator.module.scss":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./components/Separator/Separator.module.scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".Separator_separator__2wYvm {\n  height: 2px;\n  width: 160px;\n  background-color: #aec3f3;\n}", "",{"version":3,"sources":["/Users/sigrundish/personal-apps/resume/components/Separator/Separator.module.scss","/Users/sigrundish/personal-apps/resume/css/variables.scss"],"names":[],"mappings":"AAEA;EACE,WAAA;EACA,YAAA;EACA,yBCeI;ADhBN","file":"Separator.module.scss","sourcesContent":["@import '../../css/variables.scss';\n\n.separator {\n  height: 2px;\n  width: 160px;\n  background-color: $sky;\n}\n","$bright-blue-grey: #e2f0f9;\n$neutral: #efefef;\n$white: #fff;\n$border-color: #d7d7d7;\n\n$warm-grey-light: #e8dfe0;\n$warm-grey-dark: #5d5c61;\n\n$background-pink: #f8f0ed;\n\n$night-dark: #262626;\n$night: #505050;\n$night-light: #444444;\n\n$sea-dark: #268194;\n$sea-darker: #39a5bc;\n$sea: #47c9e5;\n\n$sky-dark: #6b92ea;\n$sky-darker: #98b3f0;\n$sky: #aec3f3;\n$sky-lighter: #c4d3f6;\n\n// Font weight\n$font-weight-extra-light: 200;\n$font-weight-light: 300;\n$font-weight-regular: 400;\n$font-weight-medium: 500;\n$font-weight-semiBold: 600;\n$font-weight-bold: 700;\n\n// Font size\n$font-size-xs: 12px;\n$font-size-s: 14px;\n$font-size-m: 16px;\n$font-size-l: 26px;\n$font-size-xl: 42px;\n$font-size-xxl: 56px;\n\n// Line height\n$line-height-paragraph: 30px;\n\n// Height\n$top-banner-height: 600px;\n$section-banner-height: 600px;\n\n// Width\n$base-border-width: 1px;\n\n// Padding\n$gutter-desktop: 30px;\n$padding-section: 60px 80px;\n\n// Box shadow\n$base-box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.12);\n\n// Border radius\n$base-border-radius: 4px;\n"]}]);
// Exports
exports.locals = {
	"separator": "Separator_separator__2wYvm"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/Skills/Skills.module.scss":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./components/Skills/Skills.module.scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".Skills_heading__1yV4P {\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  text-align: center;\n  margin-bottom: 30px;\n}\n\n.Skills_subtitle__Cq_7v {\n  display: flex;\n  align-items: center;\n  font-size: 18px;\n}\n\n.Skills_bullet__3gIms {\n  height: 6px;\n  width: 6px;\n  border-radius: 50%;\n  margin-right: 10px;\n}\n\n.Skills_advancedBullet__2ObYI {\n  background-color: #6b92ea;\n}\n\n.Skills_intermediateBullet__q3g06 {\n  background-color: #98b3f0;\n}\n\n.Skills_fundamentalBullet__xNzA1 {\n  background-color: #c4d3f6;\n}\n\n.Skills_h3__4E4Zj {\n  padding: 0;\n  white-space: nowrap;\n  font-weight: 300;\n}\n\n.Skills_flexWrapper__1vzdr {\n  display: flex;\n}\n\n.Skills_progressBars__1imXC {\n  width: 50%;\n  box-sizing: border-box;\n  padding: 0 140px;\n}", "",{"version":3,"sources":["/Users/sigrundish/personal-apps/resume/components/Skills/Skills.module.scss","/Users/sigrundish/personal-apps/resume/css/variables.scss"],"names":[],"mappings":"AAEA;EACE,aAAA;EACA,iBAAA;EACA,mBAAA;EACA,kBAAA;EACA,mBC2Ce;AD5CjB;;AAGA;EACE,aAAA;EACA,mBAAA;EACA,eAAA;AAAF;;AAEA;EACE,WAAA;EACA,UAAA;EACA,kBAAA;EACA,kBAAA;AACF;;AACA;EACE,yBCHS;ADKX;;AAAA;EACE,yBCLW;ADQb;;AADA;EACE,yBCNY;ADUd;;AAFA;EACE,UAAA;EACA,mBAAA;EACA,gBCPkB;ADYpB;;AAHA;EACE,aAAA;AAMF;;AAJA;EACE,UAAA;EACA,sBAAA;EACA,gBAAA;AAOF","file":"Skills.module.scss","sourcesContent":["@import '../../css/variables.scss';\n\n.heading {\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  text-align: center;\n  margin-bottom: $gutter-desktop;\n}\n.subtitle {\n  display: flex;\n  align-items: center;\n  font-size: 18px;\n}\n.bullet {\n  height: 6px;\n  width: 6px;\n  border-radius: 50%;\n  margin-right: 10px;\n}\n.advancedBullet {\n  background-color: $sky-dark;\n}\n.intermediateBullet {\n  background-color: $sky-darker;\n}\n.fundamentalBullet {\n  background-color: $sky-lighter;\n}\n.h3 {\n  padding: 0;\n  white-space: nowrap;\n  font-weight: $font-weight-light;\n}\n.flexWrapper {\n  display: flex;\n}\n.progressBars {\n  width: 50%;\n  box-sizing: border-box;\n  padding: 0 140px;\n}\n","$bright-blue-grey: #e2f0f9;\n$neutral: #efefef;\n$white: #fff;\n$border-color: #d7d7d7;\n\n$warm-grey-light: #e8dfe0;\n$warm-grey-dark: #5d5c61;\n\n$background-pink: #f8f0ed;\n\n$night-dark: #262626;\n$night: #505050;\n$night-light: #444444;\n\n$sea-dark: #268194;\n$sea-darker: #39a5bc;\n$sea: #47c9e5;\n\n$sky-dark: #6b92ea;\n$sky-darker: #98b3f0;\n$sky: #aec3f3;\n$sky-lighter: #c4d3f6;\n\n// Font weight\n$font-weight-extra-light: 200;\n$font-weight-light: 300;\n$font-weight-regular: 400;\n$font-weight-medium: 500;\n$font-weight-semiBold: 600;\n$font-weight-bold: 700;\n\n// Font size\n$font-size-xs: 12px;\n$font-size-s: 14px;\n$font-size-m: 16px;\n$font-size-l: 26px;\n$font-size-xl: 42px;\n$font-size-xxl: 56px;\n\n// Line height\n$line-height-paragraph: 30px;\n\n// Height\n$top-banner-height: 600px;\n$section-banner-height: 600px;\n\n// Width\n$base-border-width: 1px;\n\n// Padding\n$gutter-desktop: 30px;\n$padding-section: 60px 80px;\n\n// Box shadow\n$base-box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.12);\n\n// Border radius\n$base-border-radius: 4px;\n"]}]);
// Exports
exports.locals = {
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

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/TimelineItem/TimelineItem.module.scss":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./components/TimelineItem/TimelineItem.module.scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "@keyframes TimelineItem_fadein__-PVxv {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes TimelineItem_expandWidth__1PIiq {\n  0% {\n    width: 0;\n  }\n  100% {\n    width: auto;\n  }\n}\n@keyframes TimelineItem_slideUp__3slzc {\n  from {\n    transform: translateY(150px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes TimelineItem_slideFromRight__3Cw7k {\n  from {\n    transform: translateX(150px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes TimelineItem_slideFromLeft__2C1Ng {\n  from {\n    transform: translateX(-150px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.TimelineItem_container__3edbq {\n  position: relative;\n  display: flex;\n  box-sizing: border-box;\n  width: 90%;\n}\n\n.TimelineItem_dividor__2svpn {\n  position: absolute;\n  width: 1px;\n  top: 10px;\n  bottom: -10px;\n  right: 50%;\n  background-color: #efefef;\n  opacity: 0;\n}\n.TimelineItem_dividor__2svpn::after {\n  position: absolute;\n  content: \"\";\n  height: 8px;\n  width: 8px;\n  background-color: #98b3f0;\n  border-radius: 50%;\n  left: -4px;\n  top: 0;\n}\n\n.TimelineItem_container__3edbq:last-child .TimelineItem_dividor__2svpn {\n  bottom: 10px;\n}\n\n.TimelineItem_animateUp__hdhAN {\n  animation: TimelineItem_slideUp__3slzc 1s ease forwards;\n}\n\n.TimelineItem_animateFromLeft__1Wjne {\n  animation: TimelineItem_slideFromLeft__2C1Ng 1s ease forwards;\n}\n\n.TimelineItem_animateFromRight__3fnVE {\n  animation: TimelineItem_slideFromRight__3Cw7k 1s ease forwards;\n}\n\n.TimelineItem_rightSide__2g3iY {\n  position: relative;\n  width: 50%;\n  padding: 0 30px 30px 30px;\n  box-sizing: border-box;\n  opacity: 0;\n}\n\n.TimelineItem_content__1c5xE {\n  position: relative;\n  width: 100%;\n  background-color: white;\n  border-radius: 4px;\n  box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.12);\n}\n.TimelineItem_content__1c5xE::before {\n  position: absolute;\n  content: \"\";\n  width: 0;\n  height: 0;\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-right: 10px solid #fff;\n  left: -10px;\n  top: 10px;\n}\n\n.TimelineItem_year__1w_3L {\n  width: 50%;\n  text-align: right;\n  padding: 10px 30px;\n  box-sizing: border-box;\n  font-size: 18px;\n  color: #6b92ea;\n  opacity: 0;\n}", "",{"version":3,"sources":["/Users/sigrundish/personal-apps/resume/css/keyframes.scss","/Users/sigrundish/personal-apps/resume/components/TimelineItem/TimelineItem.module.scss","/Users/sigrundish/personal-apps/resume/css/variables.scss","/Users/sigrundish/personal-apps/resume/css/mixin.scss"],"names":[],"mappings":"AAAA;EACE;IACE,UAAA;ECCF;EDCA;IACE,UAAA;ECCF;AACF;ADCA;EACE;IACE,QAAA;ECCF;EDCA;IACE,WAAA;ECCF;AACF;ADCA;EACE;IACE,4BAAA;ECCF;EDCA;IACE,UAAA;IACA,wBAAA;ECCF;AACF;ADCA;EACE;IACE,4BAAA;ECCF;EDCA;IACE,UAAA;IACA,wBAAA;ECCF;AACF;ADCA;EACE;IACE,6BAAA;ECCF;EDCA;IACE,UAAA;IACA,wBAAA;ECCF;AACF;AAtCA;EACE,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,UAAA;AAwCF;;AAtCA;EACE,kBAAA;EACA,UAAA;EACA,SAAA;EACA,aAAA;EACA,UAAA;EACA,yBCfQ;EDgBR,UAAA;AAyCF;AAxCE;EACE,kBAAA;EACA,WAAA;EACA,WAAA;EACA,UAAA;EACA,yBCJS;EDKT,kBAAA;EACA,UAAA;EACA,MAAA;AA0CJ;;AArCI;EACE,YAAA;AAwCN;;AApCA;EACE,uDAAA;AAuCF;;AArCA;EACE,6DAAA;AAwCF;;AAtCA;EACE,8DAAA;AAyCF;;AAvCA;EACE,kBAAA;EACA,UAAA;EACA,yBAAA;EACA,sBAAA;EACA,UAAA;AA0CF;;AAxCA;EACE,kBAAA;EACA,WAAA;EACA,uBAAA;EACA,kBCCmB;EDAnB,0CCHgB;AD8ClB;AA1CE;EACE,kBAAA;EACA,WAAA;EErDF,QAAA;EACA,SAAA;EACA,kCAAA;EACA,qCAAA;EACA,6BAAA;EFmDE,WAAA;EACA,SAAA;AAgDJ;;AA7CA;EACE,UAAA;EACA,iBAAA;EACA,kBAAA;EACA,sBAAA;EACA,eAAA;EACA,cCtDS;EDuDT,UAAA;AAgDF","file":"TimelineItem.module.scss","sourcesContent":["@keyframes fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes expandWidth {\n  0% {\n    width: 0;\n  }\n  100% {\n    width: auto;\n  }\n}\n@keyframes slideUp {\n  from {\n    transform: translateY(150px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes slideFromRight {\n  from {\n    transform: translateX(150px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes slideFromLeft {\n  from {\n    transform: translateX(-150px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n","@import '../../css/variables.scss';\n@import '../../css/mixin.scss';\n@import '../../css/keyframes.scss';\n\n.container {\n  position: relative;\n  display: flex;\n  box-sizing: border-box;\n  width: 90%;\n}\n.dividor {\n  position: absolute;\n  width: 1px;\n  top: 10px;\n  bottom: -10px;\n  right: 50%;\n  background-color: $neutral;\n  opacity: 0;\n  &::after {\n    position: absolute;\n    content: '';\n    height: 8px;\n    width: 8px;\n    background-color: $sky-darker;\n    border-radius: 50%;\n    left: -4px;\n    top: 0;\n  }\n}\n.container {\n  &:last-child {\n    .dividor {\n      bottom: 10px;\n    }\n  }\n}\n.animateUp {\n  animation: slideUp 1s ease forwards;\n}\n.animateFromLeft {\n  animation: slideFromLeft 1s ease forwards;\n}\n.animateFromRight {\n  animation: slideFromRight 1s ease forwards;\n}\n.rightSide {\n  position: relative;\n  width: 50%;\n  padding: 0 30px 30px 30px;\n  box-sizing: border-box;\n  opacity: 0;\n}\n.content {\n  position: relative;\n  width: 100%;\n  background-color: white;\n  border-radius: $base-border-radius;\n  box-shadow: $base-box-shadow;\n  &::before {\n    position: absolute;\n    content: '';\n    @include filledArrowLeft($white);\n    left: -10px;\n    top: 10px;\n  }\n}\n.year {\n  width: 50%;\n  text-align: right;\n  padding: 10px 30px;\n  box-sizing: border-box;\n  font-size: 18px;\n  color: $sky-dark;\n  opacity: 0;\n}\n","$bright-blue-grey: #e2f0f9;\n$neutral: #efefef;\n$white: #fff;\n$border-color: #d7d7d7;\n\n$warm-grey-light: #e8dfe0;\n$warm-grey-dark: #5d5c61;\n\n$background-pink: #f8f0ed;\n\n$night-dark: #262626;\n$night: #505050;\n$night-light: #444444;\n\n$sea-dark: #268194;\n$sea-darker: #39a5bc;\n$sea: #47c9e5;\n\n$sky-dark: #6b92ea;\n$sky-darker: #98b3f0;\n$sky: #aec3f3;\n$sky-lighter: #c4d3f6;\n\n// Font weight\n$font-weight-extra-light: 200;\n$font-weight-light: 300;\n$font-weight-regular: 400;\n$font-weight-medium: 500;\n$font-weight-semiBold: 600;\n$font-weight-bold: 700;\n\n// Font size\n$font-size-xs: 12px;\n$font-size-s: 14px;\n$font-size-m: 16px;\n$font-size-l: 26px;\n$font-size-xl: 42px;\n$font-size-xxl: 56px;\n\n// Line height\n$line-height-paragraph: 30px;\n\n// Height\n$top-banner-height: 600px;\n$section-banner-height: 600px;\n\n// Width\n$base-border-width: 1px;\n\n// Padding\n$gutter-desktop: 30px;\n$padding-section: 60px 80px;\n\n// Box shadow\n$base-box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.12);\n\n// Border radius\n$base-border-radius: 4px;\n","@mixin arrow($color) {\n  border: solid $color;\n  border-width: 0 2px 2px 0;\n  display: inline-block;\n  padding: 8px;\n}\n@mixin filledArrow($color) {\n  width: 0;\n  height: 0;\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-right: 10px solid $color;\n}\n@mixin arrowLeft($color) {\n  @include arrow($color);\n  transform: rotate(135deg);\n}\n\n@mixin arrowRight($color) {\n  @include arrow($color);\n  transform: rotate(-45deg);\n}\n@mixin arrowDown($color) {\n  @include arrow($color);\n  transform: rotate(45deg);\n}\n@mixin filledArrowLeft($color) {\n  @include filledArrow($color);\n}\n"]}]);
// Exports
exports.locals = {
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

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/WorkExperienceItem/WorkExperienceItem.module.scss":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./components/WorkExperienceItem/WorkExperienceItem.module.scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".WorkExperienceItem_container__3_k7s {\n  position: relative;\n  width: 90%;\n  display: flex;\n  box-sizing: border-box;\n}\n.WorkExperienceItem_container__3_k7s:first-child::before {\n  position: absolute;\n  content: \"\";\n  height: 14px;\n  width: 2px;\n  background-color: #fff;\n  left: 50%;\n  top: 0px;\n  z-index: 1;\n}\n.WorkExperienceItem_container__3_k7s:last-child::before {\n  position: absolute;\n  content: \"\";\n  height: 14px;\n  width: 2px;\n  background-color: #fff;\n  left: 50%;\n  bottom: 0px;\n  z-index: 1;\n}\n\n.WorkExperienceItem_rightSide__3axdN {\n  position: relative;\n  border-left: solid 1px #efefef;\n  width: 50%;\n  padding: 0 30px 30px 30px;\n  box-sizing: border-box;\n}\n.WorkExperienceItem_rightSide__3axdN::before {\n  position: absolute;\n  content: \"\";\n  height: 8px;\n  width: 8px;\n  background-color: #98b3f0;\n  border-radius: 50%;\n  left: -5px;\n  top: 14px;\n}\n\n.WorkExperienceItem_content__12XnM {\n  position: relative;\n  width: 100%;\n  background-color: white;\n  border-radius: 4px;\n  box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.12);\n}\n.WorkExperienceItem_content__12XnM::before {\n  position: absolute;\n  content: \"\";\n  width: 0;\n  height: 0;\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-right: 10px solid #fff;\n  left: -10px;\n  top: 10px;\n}\n\n.WorkExperienceItem_contentHeader__1oHPV {\n  position: relative;\n  padding: 15px 15px 50px 15px;\n}\n\n.WorkExperienceItem_year__6V4v9 {\n  width: 50%;\n  text-align: right;\n  padding: 10px 30px;\n  box-sizing: border-box;\n  font-size: 18px;\n  color: #6b92ea;\n}\n\n.WorkExperienceItem_title__Pp18J {\n  font-size: 18px;\n  font-weight: 500;\n  margin-bottom: 15px;\n}\n\n.WorkExperienceItem_company__3pxbO {\n  font-style: italic;\n}\n\n.WorkExperienceItem_descriptionList__2ZTtD {\n  margin: 0;\n  padding: 15px 15px 15px 40px;\n  border-top: dotted 1px #d7d7d7;\n  line-height: 22px;\n}\n\n.WorkExperienceItem_description__EIYNl {\n  font-weight: 300;\n  padding: 5px 0;\n}\n\n.WorkExperienceItem_descriptionTrigger__ABnT- {\n  position: absolute;\n  right: 15px;\n  bottom: 10px;\n  color: #6b92ea;\n  cursor: pointer;\n}\n\n.WorkExperienceItem_arrow__23706 {\n  border: solid #98b3f0;\n  border-width: 0 2px 2px 0;\n  display: inline-block;\n  padding: 8px;\n  transform: rotate(45deg);\n  padding: 4px;\n  margin: 0 0 3px 10px;\n  transition: 0.2s;\n}\n\n.WorkExperienceItem_arrowOpen__3-0l1 {\n  margin-bottom: 0;\n  transform: rotate(-135deg);\n}", "",{"version":3,"sources":["/Users/sigrundish/personal-apps/resume/components/WorkExperienceItem/WorkExperienceItem.module.scss","/Users/sigrundish/personal-apps/resume/css/variables.scss","/Users/sigrundish/personal-apps/resume/css/mixin.scss"],"names":[],"mappings":"AAGA;EACE,kBAAA;EACA,UAAA;EACA,aAAA;EACA,sBAAA;AAFF;AAII;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;EACA,sBCZE;EDaF,SAAA;EACA,QAAA;EACA,UAAA;AAFN;AAMI;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;EACA,sBCxBE;EDyBF,SAAA;EACA,WAAA;EACA,UAAA;AAJN;;AAQA;EACE,kBAAA;EACA,8BAAA;EACA,UAAA;EACA,yBAAA;EACA,sBAAA;AALF;AAME;EACE,kBAAA;EACA,WAAA;EACA,WAAA;EACA,UAAA;EACA,yBCzBS;ED0BT,kBAAA;EACA,UAAA;EACA,SAAA;AAJJ;;AAOA;EACE,kBAAA;EACA,WAAA;EACA,uBAAA;EACA,kBCGmB;EDFnB,0CCDgB;ADHlB;AAKE;EACE,kBAAA;EACA,WAAA;EEnDF,QAAA;EACA,SAAA;EACA,kCAAA;EACA,qCAAA;EACA,6BAAA;EFiDE,WAAA;EACA,SAAA;AACJ;;AAEA;EACE,kBAAA;EACA,4BAAA;AACF;;AACA;EACE,UAAA;EACA,iBAAA;EACA,kBAAA;EACA,sBAAA;EACA,eAAA;EACA,cCxDS;AD0DX;;AAAA;EACE,eAAA;EACA,gBCnDmB;EDoDnB,mBAAA;AAGF;;AADA;EACE,kBAAA;AAIF;;AAFA;EACE,SAAA;EACA,4BAAA;EACA,8BAAA;EACA,iBAAA;AAKF;;AAHA;EACE,gBClEkB;EDmElB,cAAA;AAMF;;AAJA;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,cChFS;EDiFT,eAAA;AAOF;;AALA;EEpGE,qBAAA;EACA,yBAAA;EACA,qBAAA;EACA,YAAA;EAoBA,wBAAA;EF+EA,YAAA;EACA,oBAAA;EACA,gBAAA;AAYF;;AAVA;EACE,gBAAA;EACA,0BAAA;AAaF","file":"WorkExperienceItem.module.scss","sourcesContent":["@import '../../css/variables.scss';\n@import '../../css/mixin.scss';\n\n.container {\n  position: relative;\n  width: 90%;\n  display: flex;\n  box-sizing: border-box;\n  &:first-child {\n    &::before {\n      position: absolute;\n      content: '';\n      height: 14px;\n      width: 2px;\n      background-color: $white;\n      left: 50%;\n      top: 0px;\n      z-index: 1;\n    }\n  }\n  &:last-child {\n    &::before {\n      position: absolute;\n      content: '';\n      height: 14px;\n      width: 2px;\n      background-color: $white;\n      left: 50%;\n      bottom: 0px;\n      z-index: 1;\n    }\n  }\n}\n.rightSide {\n  position: relative;\n  border-left: solid $base-border-width $neutral;\n  width: 50%;\n  padding: 0 30px 30px 30px;\n  box-sizing: border-box;\n  &::before {\n    position: absolute;\n    content: '';\n    height: 8px;\n    width: 8px;\n    background-color: $sky-darker;\n    border-radius: 50%;\n    left: -5px;\n    top: 14px;\n  }\n}\n.content {\n  position: relative;\n  width: 100%;\n  background-color: white;\n  border-radius: $base-border-radius;\n  box-shadow: $base-box-shadow;\n  &::before {\n    position: absolute;\n    content: '';\n    @include filledArrowLeft($white);\n    left: -10px;\n    top: 10px;\n  }\n}\n.contentHeader {\n  position: relative;\n  padding: 15px 15px 50px 15px;\n}\n.year {\n  width: 50%;\n  text-align: right;\n  padding: 10px 30px;\n  box-sizing: border-box;\n  font-size: 18px;\n  color: $sky-dark;\n}\n.title {\n  font-size: 18px;\n  font-weight: $font-weight-medium;\n  margin-bottom: 15px;\n}\n.company {\n  font-style: italic;\n}\n.descriptionList {\n  margin: 0;\n  padding: 15px 15px 15px 40px;\n  border-top: dotted $base-border-width $border-color;\n  line-height: 22px;\n}\n.description {\n  font-weight: $font-weight-light;\n  padding: 5px 0;\n}\n.descriptionTrigger {\n  position: absolute;\n  right: 15px;\n  bottom: 10px;\n  color: $sky-dark;\n  cursor: pointer;\n}\n.arrow {\n  @include arrowDown($sky-darker);\n  padding: 4px;\n  margin: 0 0 3px 10px;\n  transition: 0.2s;\n}\n.arrowOpen {\n  margin-bottom: 0;\n  transform: rotate(-135deg);\n}\n","$bright-blue-grey: #e2f0f9;\n$neutral: #efefef;\n$white: #fff;\n$border-color: #d7d7d7;\n\n$warm-grey-light: #e8dfe0;\n$warm-grey-dark: #5d5c61;\n\n$background-pink: #f8f0ed;\n\n$night-dark: #262626;\n$night: #505050;\n$night-light: #444444;\n\n$sea-dark: #268194;\n$sea-darker: #39a5bc;\n$sea: #47c9e5;\n\n$sky-dark: #6b92ea;\n$sky-darker: #98b3f0;\n$sky: #aec3f3;\n$sky-lighter: #c4d3f6;\n\n// Font weight\n$font-weight-extra-light: 200;\n$font-weight-light: 300;\n$font-weight-regular: 400;\n$font-weight-medium: 500;\n$font-weight-semiBold: 600;\n$font-weight-bold: 700;\n\n// Font size\n$font-size-xs: 12px;\n$font-size-s: 14px;\n$font-size-m: 16px;\n$font-size-l: 26px;\n$font-size-xl: 42px;\n$font-size-xxl: 56px;\n\n// Line height\n$line-height-paragraph: 30px;\n\n// Height\n$top-banner-height: 600px;\n$section-banner-height: 600px;\n\n// Width\n$base-border-width: 1px;\n\n// Padding\n$gutter-desktop: 30px;\n$padding-section: 60px 80px;\n\n// Box shadow\n$base-box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.12);\n\n// Border radius\n$base-border-radius: 4px;\n","@mixin arrow($color) {\n  border: solid $color;\n  border-width: 0 2px 2px 0;\n  display: inline-block;\n  padding: 8px;\n}\n@mixin filledArrow($color) {\n  width: 0;\n  height: 0;\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-right: 10px solid $color;\n}\n@mixin arrowLeft($color) {\n  @include arrow($color);\n  transform: rotate(135deg);\n}\n\n@mixin arrowRight($color) {\n  @include arrow($color);\n  transform: rotate(-45deg);\n}\n@mixin arrowDown($color) {\n  @include arrow($color);\n  transform: rotate(45deg);\n}\n@mixin filledArrowLeft($color) {\n  @include filledArrow($color);\n}\n"]}]);
// Exports
exports.locals = {
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

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
/*!***********************************************************************************************************************!*\
  !*** delegated ./node_modules/next/dist/build/polyfills/object-assign.js from dll-reference dll_c2e10d183b950a67d9e7 ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_c2e10d183b950a67d9e7 */ "dll-reference dll_c2e10d183b950a67d9e7"))("./node_modules/next/dist/build/polyfills/object-assign.js");

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fsigrundish%2Fpersonal-apps%2Fresume%2Fpages%2Findex.js!./":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fsigrundish%2Fpersonal-apps%2Fresume%2Fpages%2Findex.js ***!
  \******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/", function() {
      var mod = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
      if(true) {
        module.hot.accept(/*! ./pages/index.js */ "./pages/index.js", function() {
          if(!next.router.components["/"]) return
          var updatedPage = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
          next.router.update("/", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/observe-element-in-viewport/dist/index.esm.js":
/*!********************************************************************!*\
  !*** ./node_modules/observe-element-in-viewport/dist/index.esm.js ***!
  \********************************************************************/
/*! exports provided: observeElementInViewport, isInViewport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observeElementInViewport", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInViewport", function() { return r; });
function o(o,r,t,e){if(void 0===t&&(t=function(){}),void 0===e&&(e={}),!o)throw new Error("Target element to observe should be a valid DOM Node");var n=Object.assign({},{viewport:null,modTop:"0px",modRight:"0px",modBottom:"0px",modLeft:"0px",threshold:[0]},e),i=n.viewport,a=n.modTop,u=n.modLeft,s=n.modBottom,f=n.modRight,d=n.threshold;if(!Array.isArray(d)&&"number"!=typeof d)throw new Error("threshold should be a number or an array of numbers");var h=Array.isArray(d)?d.map(function(o){return Math.floor(o%101)/100}):[Math.floor(d?d%101:0)/100],c=Math.min.apply(Math,h),m={root:i instanceof Node?i:null,rootMargin:a+" "+f+" "+s+" "+u,threshold:h},l=new IntersectionObserver(function(e,n){var i=e.filter(function(r){return r.target===o})[0],a=function(){return n.unobserve(o)};i&&(i.isInViewport=i.isIntersecting&&i.intersectionRatio>=c,i.isInViewport?r(i,a,o):t(i,a,o))},m);return l.observe(o),function(){return l.unobserve(o)}}var r=function(r,t){return void 0===t&&(t={}),new Promise(function(e,n){try{o(r,function(o,r){r(),e(!0)},function(o,r){r(),e(!1)},t)}catch(o){n(o)}})};
//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!*********************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/checkPropTypes.js from dll-reference dll_c2e10d183b950a67d9e7 ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_c2e10d183b950a67d9e7 */ "dll-reference dll_c2e10d183b950a67d9e7"))("./node_modules/prop-types/checkPropTypes.js");

/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*******************************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/lib/ReactPropTypesSecret.js from dll-reference dll_c2e10d183b950a67d9e7 ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_c2e10d183b950a67d9e7 */ "dll-reference dll_c2e10d183b950a67d9e7"))("./node_modules/prop-types/lib/ReactPropTypesSecret.js");

/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-swipeable-views-core/lib/checkIndexBounds.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-swipeable-views-core/lib/checkIndexBounds.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/react-swipeable-views-core/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _warning = _interopRequireDefault(__webpack_require__(/*! warning */ "./node_modules/warning/warning.js"));

var checkIndexBounds = function checkIndexBounds(props) {
  var index = props.index,
      children = props.children;

  var childrenCount = _react.default.Children.count(children);

   true ? (0, _warning.default)(index >= 0 && index <= childrenCount, "react-swipeable-view: the new index: ".concat(index, " is out of bounds: [0-").concat(childrenCount, "].")) : undefined;
};

var _default = checkIndexBounds;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-swipeable-views-core/lib/computeIndex.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-swipeable-views-core/lib/computeIndex.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/react-swipeable-views-core/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = computeIndex;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _constant = _interopRequireDefault(__webpack_require__(/*! ./constant */ "./node_modules/react-swipeable-views-core/lib/constant.js"));

function computeIndex(params) {
  var children = params.children,
      startIndex = params.startIndex,
      startX = params.startX,
      pageX = params.pageX,
      viewLength = params.viewLength,
      resistance = params.resistance;
  var indexMax = _react.default.Children.count(children) - 1;
  var index = startIndex + (startX - pageX) / viewLength;
  var newStartX;

  if (!resistance) {
    // Reset the starting point
    if (index < 0) {
      index = 0;
      newStartX = (index - startIndex) * viewLength + pageX;
    } else if (index > indexMax) {
      index = indexMax;
      newStartX = (index - startIndex) * viewLength + pageX;
    }
  } else if (index < 0) {
    index = Math.exp(index * _constant.default.RESISTANCE_COEF) - 1;
  } else if (index > indexMax) {
    index = indexMax + 1 - Math.exp((indexMax - index) * _constant.default.RESISTANCE_COEF);
  }

  return {
    index: index,
    startX: newStartX
  };
}

/***/ }),

/***/ "./node_modules/react-swipeable-views-core/lib/constant.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-swipeable-views-core/lib/constant.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  RESISTANCE_COEF: 0.6,
  // This value is closed to what browsers are using internally to
  // trigger a native scroll.
  UNCERTAINTY_THRESHOLD: 3 // px

};
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-swipeable-views-core/lib/getDisplaySameSlide.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-swipeable-views-core/lib/getDisplaySameSlide.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/react-swipeable-views-core/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var getDisplaySameSlide = function getDisplaySameSlide(props, nextProps) {
  var displaySameSlide = false;

  var getChildrenKey = function getChildrenKey(child) {
    return child ? child.key : 'empty';
  };

  if (props.children.length && nextProps.children.length) {
    var oldKeys = _react.default.Children.map(props.children, getChildrenKey);

    var oldKey = oldKeys[props.index];

    if (oldKey !== null && oldKey !== undefined) {
      var newKeys = _react.default.Children.map(nextProps.children, getChildrenKey);

      var newKey = newKeys[nextProps.index];

      if (oldKey === newKey) {
        displaySameSlide = true;
      }
    }
  }

  return displaySameSlide;
};

var _default = getDisplaySameSlide;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-swipeable-views-core/lib/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-swipeable-views-core/lib/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/react-swipeable-views-core/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "checkIndexBounds", {
  enumerable: true,
  get: function get() {
    return _checkIndexBounds.default;
  }
});
Object.defineProperty(exports, "computeIndex", {
  enumerable: true,
  get: function get() {
    return _computeIndex.default;
  }
});
Object.defineProperty(exports, "constant", {
  enumerable: true,
  get: function get() {
    return _constant.default;
  }
});
Object.defineProperty(exports, "getDisplaySameSlide", {
  enumerable: true,
  get: function get() {
    return _getDisplaySameSlide.default;
  }
});
Object.defineProperty(exports, "mod", {
  enumerable: true,
  get: function get() {
    return _mod.default;
  }
});

var _checkIndexBounds = _interopRequireDefault(__webpack_require__(/*! ./checkIndexBounds */ "./node_modules/react-swipeable-views-core/lib/checkIndexBounds.js"));

var _computeIndex = _interopRequireDefault(__webpack_require__(/*! ./computeIndex */ "./node_modules/react-swipeable-views-core/lib/computeIndex.js"));

var _constant = _interopRequireDefault(__webpack_require__(/*! ./constant */ "./node_modules/react-swipeable-views-core/lib/constant.js"));

var _getDisplaySameSlide = _interopRequireDefault(__webpack_require__(/*! ./getDisplaySameSlide */ "./node_modules/react-swipeable-views-core/lib/getDisplaySameSlide.js"));

var _mod = _interopRequireDefault(__webpack_require__(/*! ./mod */ "./node_modules/react-swipeable-views-core/lib/mod.js"));

/***/ }),

/***/ "./node_modules/react-swipeable-views-core/lib/mod.js":
/*!************************************************************!*\
  !*** ./node_modules/react-swipeable-views-core/lib/mod.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

// Extended version of % with negative integer support.
function mod(n, m) {
  var q = n % m;
  return q < 0 ? q + m : q;
}

var _default = mod;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-swipeable-views-core/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/react-swipeable-views-core/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/react-swipeable-views/lib/SwipeableViews.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-swipeable-views/lib/SwipeableViews.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDomTreeShapes = getDomTreeShapes;
exports.findNativeHandler = findNativeHandler;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/inherits.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _warning = _interopRequireDefault(__webpack_require__(/*! warning */ "./node_modules/warning/warning.js"));

var _reactSwipeableViewsCore = __webpack_require__(/*! react-swipeable-views-core */ "./node_modules/react-swipeable-views-core/lib/index.js");

function addEventListener(node, event, handler, options) {
  node.addEventListener(event, handler, options);
  return {
    remove: function remove() {
      node.removeEventListener(event, handler, options);
    }
  };
}

var styles = {
  container: {
    direction: 'ltr',
    display: 'flex',
    willChange: 'transform'
  },
  slide: {
    width: '100%',
    WebkitFlexShrink: 0,
    flexShrink: 0,
    overflow: 'auto'
  }
};
var axisProperties = {
  root: {
    x: {
      overflowX: 'hidden'
    },
    'x-reverse': {
      overflowX: 'hidden'
    },
    y: {
      overflowY: 'hidden'
    },
    'y-reverse': {
      overflowY: 'hidden'
    }
  },
  flexDirection: {
    x: 'row',
    'x-reverse': 'row-reverse',
    y: 'column',
    'y-reverse': 'column-reverse'
  },
  transform: {
    x: function x(translate) {
      return "translate(".concat(-translate, "%, 0)");
    },
    'x-reverse': function xReverse(translate) {
      return "translate(".concat(translate, "%, 0)");
    },
    y: function y(translate) {
      return "translate(0, ".concat(-translate, "%)");
    },
    'y-reverse': function yReverse(translate) {
      return "translate(0, ".concat(translate, "%)");
    }
  },
  length: {
    x: 'width',
    'x-reverse': 'width',
    y: 'height',
    'y-reverse': 'height'
  },
  rotationMatrix: {
    x: {
      x: [1, 0],
      y: [0, 1]
    },
    'x-reverse': {
      x: [-1, 0],
      y: [0, 1]
    },
    y: {
      x: [0, 1],
      y: [1, 0]
    },
    'y-reverse': {
      x: [0, -1],
      y: [1, 0]
    }
  },
  scrollPosition: {
    x: 'scrollLeft',
    'x-reverse': 'scrollLeft',
    y: 'scrollTop',
    'y-reverse': 'scrollTop'
  },
  scrollLength: {
    x: 'scrollWidth',
    'x-reverse': 'scrollWidth',
    y: 'scrollHeight',
    'y-reverse': 'scrollHeight'
  },
  clientLength: {
    x: 'clientWidth',
    'x-reverse': 'clientWidth',
    y: 'clientHeight',
    'y-reverse': 'clientHeight'
  }
};

function createTransition(property, options) {
  var duration = options.duration,
      easeFunction = options.easeFunction,
      delay = options.delay;
  return "".concat(property, " ").concat(duration, " ").concat(easeFunction, " ").concat(delay);
} // We are using a 2x2 rotation matrix.


function applyRotationMatrix(touch, axis) {
  var rotationMatrix = axisProperties.rotationMatrix[axis];
  return {
    pageX: rotationMatrix.x[0] * touch.pageX + rotationMatrix.x[1] * touch.pageY,
    pageY: rotationMatrix.y[0] * touch.pageX + rotationMatrix.y[1] * touch.pageY
  };
}

function adaptMouse(event) {
  event.touches = [{
    pageX: event.pageX,
    pageY: event.pageY
  }];
  return event;
}

function getDomTreeShapes(element, rootNode) {
  var domTreeShapes = [];

  while (element && element !== rootNode) {
    // We reach a Swipeable View, no need to look higher in the dom tree.
    if (element.hasAttribute('data-swipeable')) {
      break;
    }

    var style = window.getComputedStyle(element);

    if ( // Ignore the scroll children if the element is absolute positioned.
    style.getPropertyValue('position') === 'absolute' || // Ignore the scroll children if the element has an overflowX hidden
    style.getPropertyValue('overflow-x') === 'hidden') {
      domTreeShapes = [];
    } else if (element.clientWidth > 0 && element.scrollWidth > element.clientWidth || element.clientHeight > 0 && element.scrollHeight > element.clientHeight) {
      // Ignore the nodes that have no width.
      // Keep elements with a scroll
      domTreeShapes.push({
        element: element,
        scrollWidth: element.scrollWidth,
        scrollHeight: element.scrollHeight,
        clientWidth: element.clientWidth,
        clientHeight: element.clientHeight,
        scrollLeft: element.scrollLeft,
        scrollTop: element.scrollTop
      });
    }

    element = element.parentNode;
  }

  return domTreeShapes;
} // We can only have one node at the time claiming ownership for handling the swipe.
// Otherwise, the UX would be confusing.
// That's why we use a singleton here.


var nodeWhoClaimedTheScroll = null;

function findNativeHandler(params) {
  var domTreeShapes = params.domTreeShapes,
      pageX = params.pageX,
      startX = params.startX,
      axis = params.axis;
  return domTreeShapes.some(function (shape) {
    // Determine if we are going backward or forward.
    var goingForward = pageX >= startX;

    if (axis === 'x' || axis === 'y') {
      goingForward = !goingForward;
    }

    var scrollPosition = shape[axisProperties.scrollPosition[axis]];
    var areNotAtStart = scrollPosition > 0;
    var areNotAtEnd = scrollPosition + shape[axisProperties.clientLength[axis]] < shape[axisProperties.scrollLength[axis]];

    if (goingForward && areNotAtEnd || !goingForward && areNotAtStart) {
      nodeWhoClaimedTheScroll = shape.element;
      return true;
    }

    return false;
  });
}

var SwipeableViews =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(SwipeableViews, _React$Component);

  function SwipeableViews(props) {
    var _this;

    (0, _classCallCheck2.default)(this, SwipeableViews);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(SwipeableViews).call(this, props));
    _this.rootNode = null;
    _this.containerNode = null;
    _this.ignoreNextScrollEvents = false;
    _this.viewLength = 0;
    _this.startX = 0;
    _this.lastX = 0;
    _this.vx = 0;
    _this.startY = 0;
    _this.isSwiping = undefined;
    _this.started = false;
    _this.startIndex = 0;
    _this.transitionListener = null;
    _this.touchMoveListener = null;
    _this.activeSlide = null;
    _this.indexCurrent = null;
    _this.firstRenderTimeout = null;

    _this.setRootNode = function (node) {
      _this.rootNode = node;
    };

    _this.setContainerNode = function (node) {
      _this.containerNode = node;
    };

    _this.setActiveSlide = function (node) {
      _this.activeSlide = node;

      _this.updateHeight();
    };

    _this.handleSwipeStart = function (event) {
      var axis = _this.props.axis;
      var touch = applyRotationMatrix(event.touches[0], axis);
      _this.viewLength = _this.rootNode.getBoundingClientRect()[axisProperties.length[axis]];
      _this.startX = touch.pageX;
      _this.lastX = touch.pageX;
      _this.vx = 0;
      _this.startY = touch.pageY;
      _this.isSwiping = undefined;
      _this.started = true;
      var computedStyle = window.getComputedStyle(_this.containerNode);
      var transform = computedStyle.getPropertyValue('-webkit-transform') || computedStyle.getPropertyValue('transform');

      if (transform && transform !== 'none') {
        var transformValues = transform.split('(')[1].split(')')[0].split(',');
        var rootStyle = window.getComputedStyle(_this.rootNode);
        var tranformNormalized = applyRotationMatrix({
          pageX: parseInt(transformValues[4], 10),
          pageY: parseInt(transformValues[5], 10)
        }, axis);
        _this.startIndex = -tranformNormalized.pageX / (_this.viewLength - parseInt(rootStyle.paddingLeft, 10) - parseInt(rootStyle.paddingRight, 10)) || 0;
      }
    };

    _this.handleSwipeMove = function (event) {
      // The touch start event can be cancel.
      // Makes sure we set a starting point.
      if (!_this.started) {
        _this.handleTouchStart(event);

        return;
      } // We are not supposed to hanlde this touch move.


      if (nodeWhoClaimedTheScroll !== null && nodeWhoClaimedTheScroll !== _this.rootNode) {
        return;
      }

      var _this$props = _this.props,
          axis = _this$props.axis,
          children = _this$props.children,
          ignoreNativeScroll = _this$props.ignoreNativeScroll,
          onSwitching = _this$props.onSwitching,
          resistance = _this$props.resistance;
      var touch = applyRotationMatrix(event.touches[0], axis); // We don't know yet.

      if (_this.isSwiping === undefined) {
        var dx = Math.abs(touch.pageX - _this.startX);
        var dy = Math.abs(touch.pageY - _this.startY);
        var isSwiping = dx > dy && dx > _reactSwipeableViewsCore.constant.UNCERTAINTY_THRESHOLD; // We let the parent handle the scroll.

        if (!resistance && (axis === 'y' || axis === 'y-reverse') && (_this.indexCurrent === 0 && _this.startX < touch.pageX || _this.indexCurrent === _react.default.Children.count(_this.props.children) - 1 && _this.startX > touch.pageX)) {
          _this.isSwiping = false;
          return;
        } // We are likely to be swiping, let's prevent the scroll event.


        if (dx > dy) {
          event.preventDefault();
        }

        if (isSwiping === true || dy > _reactSwipeableViewsCore.constant.UNCERTAINTY_THRESHOLD) {
          _this.isSwiping = isSwiping;
          _this.startX = touch.pageX; // Shift the starting point.

          return; // Let's wait the next touch event to move something.
        }
      }

      if (_this.isSwiping !== true) {
        return;
      } // We are swiping, let's prevent the scroll event.


      event.preventDefault(); // Low Pass filter.

      _this.vx = _this.vx * 0.5 + (touch.pageX - _this.lastX) * 0.5;
      _this.lastX = touch.pageX;

      var _computeIndex = (0, _reactSwipeableViewsCore.computeIndex)({
        children: children,
        resistance: resistance,
        pageX: touch.pageX,
        startIndex: _this.startIndex,
        startX: _this.startX,
        viewLength: _this.viewLength
      }),
          index = _computeIndex.index,
          startX = _computeIndex.startX; // Add support for native scroll elements.


      if (nodeWhoClaimedTheScroll === null && !ignoreNativeScroll) {
        var domTreeShapes = getDomTreeShapes(event.target, _this.rootNode);
        var hasFoundNativeHandler = findNativeHandler({
          domTreeShapes: domTreeShapes,
          startX: _this.startX,
          pageX: touch.pageX,
          axis: axis
        }); // We abort the touch move handler.

        if (hasFoundNativeHandler) {
          return;
        }
      } // We are moving toward the edges.


      if (startX) {
        _this.startX = startX;
      } else if (nodeWhoClaimedTheScroll === null) {
        nodeWhoClaimedTheScroll = _this.rootNode;
      }

      _this.setIndexCurrent(index);

      var callback = function callback() {
        if (onSwitching) {
          onSwitching(index, 'move');
        }
      };

      if (_this.state.displaySameSlide || !_this.state.isDragging) {
        _this.setState({
          displaySameSlide: false,
          isDragging: true
        }, callback);
      }

      callback();
    };

    _this.handleSwipeEnd = function () {
      nodeWhoClaimedTheScroll = null; // The touch start event can be cancel.
      // Makes sure that a starting point is set.

      if (!_this.started) {
        return;
      }

      _this.started = false;

      if (_this.isSwiping !== true) {
        return;
      }

      var indexLatest = _this.state.indexLatest;
      var indexCurrent = _this.indexCurrent;
      var delta = indexLatest - indexCurrent;
      var indexNew; // Quick movement

      if (Math.abs(_this.vx) > _this.props.threshold) {
        if (_this.vx > 0) {
          indexNew = Math.floor(indexCurrent);
        } else {
          indexNew = Math.ceil(indexCurrent);
        }
      } else if (Math.abs(delta) > _this.props.hysteresis) {
        // Some hysteresis with indexLatest.
        indexNew = delta > 0 ? Math.floor(indexCurrent) : Math.ceil(indexCurrent);
      } else {
        indexNew = indexLatest;
      }

      var indexMax = _react.default.Children.count(_this.props.children) - 1;

      if (indexNew < 0) {
        indexNew = 0;
      } else if (indexNew > indexMax) {
        indexNew = indexMax;
      }

      _this.setIndexCurrent(indexNew);

      _this.setState({
        indexLatest: indexNew,
        isDragging: false
      }, function () {
        if (_this.props.onSwitching) {
          _this.props.onSwitching(indexNew, 'end');
        }

        if (_this.props.onChangeIndex && indexNew !== indexLatest) {
          _this.props.onChangeIndex(indexNew, indexLatest, {
            reason: 'swipe'
          });
        } // Manually calling handleTransitionEnd in that case as isn't otherwise.


        if (indexCurrent === indexLatest) {
          _this.handleTransitionEnd();
        }
      });
    };

    _this.handleTouchStart = function (event) {
      if (_this.props.onTouchStart) {
        _this.props.onTouchStart(event);
      }

      _this.handleSwipeStart(event);
    };

    _this.handleTouchEnd = function (event) {
      if (_this.props.onTouchEnd) {
        _this.props.onTouchEnd(event);
      }

      _this.handleSwipeEnd(event);
    };

    _this.handleMouseDown = function (event) {
      if (_this.props.onMouseDown) {
        _this.props.onMouseDown(event);
      }

      event.persist();

      _this.handleSwipeStart(adaptMouse(event));
    };

    _this.handleMouseUp = function (event) {
      if (_this.props.onMouseUp) {
        _this.props.onMouseUp(event);
      }

      _this.handleSwipeEnd(adaptMouse(event));
    };

    _this.handleMouseLeave = function (event) {
      if (_this.props.onMouseLeave) {
        _this.props.onMouseLeave(event);
      } // Filter out events


      if (_this.started) {
        _this.handleSwipeEnd(adaptMouse(event));
      }
    };

    _this.handleMouseMove = function (event) {
      if (_this.props.onMouseMove) {
        _this.props.onMouseMove(event);
      } // Filter out events


      if (_this.started) {
        _this.handleSwipeMove(adaptMouse(event));
      }
    };

    _this.handleScroll = function (event) {
      if (_this.props.onScroll) {
        _this.props.onScroll(event);
      } // Ignore events bubbling up.


      if (event.target !== _this.rootNode) {
        return;
      }

      if (_this.ignoreNextScrollEvents) {
        _this.ignoreNextScrollEvents = false;
        return;
      }

      var indexLatest = _this.state.indexLatest;
      var indexNew = Math.ceil(event.target.scrollLeft / event.target.clientWidth) + indexLatest;
      _this.ignoreNextScrollEvents = true; // Reset the scroll position.

      event.target.scrollLeft = 0;

      if (_this.props.onChangeIndex && indexNew !== indexLatest) {
        _this.props.onChangeIndex(indexNew, indexLatest, {
          reason: 'focus'
        });
      }
    };

    _this.updateHeight = function () {
      if (_this.activeSlide !== null) {
        var child = _this.activeSlide.children[0];

        if (child !== undefined && child.offsetHeight !== undefined && _this.state.heightLatest !== child.offsetHeight) {
          _this.setState({
            heightLatest: child.offsetHeight
          });
        }
      }
    };

    if (true) {
      (0, _reactSwipeableViewsCore.checkIndexBounds)(props);
    }

    _this.state = {
      indexLatest: props.index,
      // Set to true as soon as the component is swiping.
      // It's the state counter part of this.isSwiping.
      isDragging: false,
      // Help with SSR logic and lazy loading logic.
      renderOnlyActive: !props.disableLazyLoading,
      heightLatest: 0,
      // Let the render method that we are going to display the same slide than previously.
      displaySameSlide: true
    };

    _this.setIndexCurrent(props.index);

    return _this;
  }

  (0, _createClass2.default)(SwipeableViews, [{
    key: "getChildContext",
    value: function getChildContext() {
      var _this2 = this;

      return {
        swipeableViews: {
          slideUpdateHeight: function slideUpdateHeight() {
            _this2.updateHeight();
          }
        }
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      // Subscribe to transition end events.
      this.transitionListener = addEventListener(this.containerNode, 'transitionend', function (event) {
        if (event.target !== _this3.containerNode) {
          return;
        }

        _this3.handleTransitionEnd();
      }); // Block the thread to handle that event.

      this.touchMoveListener = addEventListener(this.rootNode, 'touchmove', function (event) {
        // Handling touch events is disabled.
        if (_this3.props.disabled) {
          return;
        }

        _this3.handleSwipeMove(event);
      }, {
        passive: false
      });

      if (!this.props.disableLazyLoading) {
        this.firstRenderTimeout = setTimeout(function () {
          _this3.setState({
            renderOnlyActive: false
          });
        }, 0);
      } // Send all functions in an object if action param is set.


      if (this.props.action) {
        this.props.action({
          updateHeight: this.updateHeight
        });
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var index = nextProps.index;

      if (typeof index === 'number' && index !== this.props.index) {
        if (true) {
          (0, _reactSwipeableViewsCore.checkIndexBounds)(nextProps);
        }

        this.setIndexCurrent(index);
        this.setState({
          // If true, we are going to change the children. We shoudn't animate it.
          displaySameSlide: (0, _reactSwipeableViewsCore.getDisplaySameSlide)(this.props, nextProps),
          indexLatest: index
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.transitionListener.remove();
      this.touchMoveListener.remove();
      clearTimeout(this.firstRenderTimeout);
    }
  }, {
    key: "setIndexCurrent",
    value: function setIndexCurrent(indexCurrent) {
      if (!this.props.animateTransitions && this.indexCurrent !== indexCurrent) {
        this.handleTransitionEnd();
      }

      this.indexCurrent = indexCurrent;

      if (this.containerNode) {
        var axis = this.props.axis;
        var transform = axisProperties.transform[axis](indexCurrent * 100);
        this.containerNode.style.WebkitTransform = transform;
        this.containerNode.style.transform = transform;
      }
    }
  }, {
    key: "handleTransitionEnd",
    value: function handleTransitionEnd() {
      if (!this.props.onTransitionEnd) {
        return;
      } // Filters out when changing the children


      if (this.state.displaySameSlide) {
        return;
      } // The rest callback is triggered when swiping. It's just noise.
      // We filter it out.


      if (!this.state.isDragging) {
        this.props.onTransitionEnd();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props2 = this.props,
          action = _this$props2.action,
          animateHeight = _this$props2.animateHeight,
          animateTransitions = _this$props2.animateTransitions,
          axis = _this$props2.axis,
          children = _this$props2.children,
          containerStyleProp = _this$props2.containerStyle,
          disabled = _this$props2.disabled,
          disableLazyLoading = _this$props2.disableLazyLoading,
          enableMouseEvents = _this$props2.enableMouseEvents,
          hysteresis = _this$props2.hysteresis,
          ignoreNativeScroll = _this$props2.ignoreNativeScroll,
          index = _this$props2.index,
          onChangeIndex = _this$props2.onChangeIndex,
          onSwitching = _this$props2.onSwitching,
          onTransitionEnd = _this$props2.onTransitionEnd,
          resistance = _this$props2.resistance,
          slideStyleProp = _this$props2.slideStyle,
          slideClassName = _this$props2.slideClassName,
          springConfig = _this$props2.springConfig,
          style = _this$props2.style,
          threshold = _this$props2.threshold,
          other = (0, _objectWithoutProperties2.default)(_this$props2, ["action", "animateHeight", "animateTransitions", "axis", "children", "containerStyle", "disabled", "disableLazyLoading", "enableMouseEvents", "hysteresis", "ignoreNativeScroll", "index", "onChangeIndex", "onSwitching", "onTransitionEnd", "resistance", "slideStyle", "slideClassName", "springConfig", "style", "threshold"]);
      var _this$state = this.state,
          displaySameSlide = _this$state.displaySameSlide,
          heightLatest = _this$state.heightLatest,
          indexLatest = _this$state.indexLatest,
          isDragging = _this$state.isDragging,
          renderOnlyActive = _this$state.renderOnlyActive;
      var touchEvents = !disabled ? {
        onTouchStart: this.handleTouchStart,
        onTouchEnd: this.handleTouchEnd
      } : {};
      var mouseEvents = !disabled && enableMouseEvents ? {
        onMouseDown: this.handleMouseDown,
        onMouseUp: this.handleMouseUp,
        onMouseLeave: this.handleMouseLeave,
        onMouseMove: this.handleMouseMove
      } : {}; // There is no point to animate if we are already providing a height.

       true ? (0, _warning.default)(!animateHeight || !containerStyleProp || !containerStyleProp.height, "react-swipeable-view: You are setting animateHeight to true but you are\nalso providing a custom height.\nThe custom height has a higher priority than the animateHeight property.\nSo animateHeight is most likely having no effect at all.") : undefined;
      var slideStyle = (0, _extends2.default)({}, styles.slide, slideStyleProp);
      var transition;
      var WebkitTransition;

      if (isDragging || !animateTransitions || displaySameSlide) {
        transition = 'all 0s ease 0s';
        WebkitTransition = 'all 0s ease 0s';
      } else {
        transition = createTransition('transform', springConfig);
        WebkitTransition = createTransition('-webkit-transform', springConfig);

        if (heightLatest !== 0) {
          var additionalTranstion = ", ".concat(createTransition('height', springConfig));
          transition += additionalTranstion;
          WebkitTransition += additionalTranstion;
        }
      }

      var containerStyle = {
        height: null,
        WebkitFlexDirection: axisProperties.flexDirection[axis],
        flexDirection: axisProperties.flexDirection[axis],
        WebkitTransition: WebkitTransition,
        transition: transition
      }; // Apply the styles for SSR considerations

      if (!renderOnlyActive) {
        var transform = axisProperties.transform[axis](this.indexCurrent * 100);
        containerStyle.WebkitTransform = transform;
        containerStyle.transform = transform;
      }

      if (animateHeight) {
        containerStyle.height = heightLatest;
      }

      return _react.default.createElement("div", (0, _extends2.default)({
        ref: this.setRootNode,
        style: (0, _extends2.default)({}, axisProperties.root[axis], style)
      }, other, touchEvents, mouseEvents, {
        onScroll: this.handleScroll
      }), _react.default.createElement("div", {
        ref: this.setContainerNode,
        style: (0, _extends2.default)({}, containerStyle, styles.container, containerStyleProp),
        className: "react-swipeable-view-container"
      }, _react.default.Children.map(children, function (child, indexChild) {
        if (renderOnlyActive && indexChild !== indexLatest) {
          return null;
        }

         true ? (0, _warning.default)(_react.default.isValidElement(child), "react-swipeable-view: one of the children provided is invalid: ".concat(child, ".\nWe are expecting a valid React Element")) : undefined;
        var ref;
        var hidden = true;

        if (indexChild === indexLatest) {
          hidden = false;

          if (animateHeight) {
            ref = _this4.setActiveSlide;
            slideStyle.overflowY = 'hidden';
          }
        }

        return _react.default.createElement("div", {
          ref: ref,
          style: slideStyle,
          className: slideClassName,
          "aria-hidden": hidden,
          "data-swipeable": "true"
        }, child);
      })));
    }
  }]);
  return SwipeableViews;
}(_react.default.Component); // Added as an ads for people using the React dev tools in production.
// So they know, the tool used to build the awesome UI they
// are looking at/retro engineering.


SwipeableViews.displayName = 'ReactSwipableView';
SwipeableViews.propTypes =  true ? {
  /**
   * This is callback property. It's called by the component on mount.
   * This is useful when you want to trigger an action programmatically.
   * It currently only supports updateHeight() action.
   *
   * @param {object} actions This object contains all posible actions
   * that can be triggered programmatically.
   */
  action: _propTypes.default.func,

  /**
   * If `true`, the height of the container will be animated to match the current slide height.
   * Animating another style property has a negative impact regarding performance.
   */
  animateHeight: _propTypes.default.bool,

  /**
   * If `false`, changes to the index prop will not cause an animated transition.
   */
  animateTransitions: _propTypes.default.bool,

  /**
   * The axis on which the slides will slide.
   */
  axis: _propTypes.default.oneOf(['x', 'x-reverse', 'y', 'y-reverse']),

  /**
   * Use this property to provide your slides.
   */
  children: _propTypes.default.node.isRequired,

  /**
   * This is the inlined style that will be applied
   * to each slide container.
   */
  containerStyle: _propTypes.default.object,

  /**
   * If `true`, it will disable touch events.
   * This is useful when you want to prohibit the user from changing slides.
   */
  disabled: _propTypes.default.bool,

  /**
   * This is the config used to disable lazyloding,
   * if `true` will render all the views in first rendering.
   */
  disableLazyLoading: _propTypes.default.bool,

  /**
   * If `true`, it will enable mouse events.
   * This will allow the user to perform the relevant swipe actions with a mouse.
   */
  enableMouseEvents: _propTypes.default.bool,

  /**
   * Configure hysteresis between slides. This value determines how far
   * should user swipe to switch slide.
   */
  hysteresis: _propTypes.default.number,

  /**
   * If `true`, it will ignore native scroll container.
   * It can be used to filter out false positive that blocks the swipe.
   */
  ignoreNativeScroll: _propTypes.default.bool,

  /**
   * This is the index of the slide to show.
   * This is useful when you want to change the default slide shown.
   * Or when you have tabs linked to each slide.
   */
  index: _propTypes.default.number,

  /**
   * This is callback prop. It's call by the
   * component when the shown slide change after a swipe made by the user.
   * This is useful when you have tabs linked to each slide.
   *
   * @param {integer} index This is the current index of the slide.
   * @param {integer} indexLatest This is the oldest index of the slide.
   * @param {object} meta Meta data containing more information about the event.
   */
  onChangeIndex: _propTypes.default.func,

  /**
   * @ignore
   */
  onMouseDown: _propTypes.default.func,

  /**
   * @ignore
   */
  onMouseLeave: _propTypes.default.func,

  /**
   * @ignore
   */
  onMouseMove: _propTypes.default.func,

  /**
   * @ignore
   */
  onMouseUp: _propTypes.default.func,

  /**
   * @ignore
   */
  onScroll: _propTypes.default.func,

  /**
   * This is callback prop. It's called by the
   * component when the slide switching.
   * This is useful when you want to implement something corresponding
   * to the current slide position.
   *
   * @param {integer} index This is the current index of the slide.
   * @param {string} type Can be either `move` or `end`.
   */
  onSwitching: _propTypes.default.func,

  /**
   * @ignore
   */
  onTouchEnd: _propTypes.default.func,

  /**
   * @ignore
   */
  onTouchMove: _propTypes.default.func,

  /**
   * @ignore
   */
  onTouchStart: _propTypes.default.func,

  /**
   * The callback that fires when the animation comes to a rest.
   * This is useful to defer CPU intensive task.
   */
  onTransitionEnd: _propTypes.default.func,

  /**
   * If `true`, it will add bounds effect on the edges.
   */
  resistance: _propTypes.default.bool,

  /**
   * This is the className that will be applied
   * on the slide component.
   */
  slideClassName: _propTypes.default.string,

  /**
   * This is the inlined style that will be applied
   * on the slide component.
   */
  slideStyle: _propTypes.default.object,

  /**
   * This is the config used to create CSS transitions.
   * This is useful to change the dynamic of the transition.
   */
  springConfig: _propTypes.default.shape({
    delay: _propTypes.default.string,
    duration: _propTypes.default.string,
    easeFunction: _propTypes.default.string
  }),

  /**
   * This is the inlined style that will be applied
   * on the root component.
   */
  style: _propTypes.default.object,

  /**
   * This is the threshold used for detecting a quick swipe.
   * If the computed speed is above this value, the index change.
   */
  threshold: _propTypes.default.number
} : undefined;
SwipeableViews.defaultProps = {
  animateHeight: false,
  animateTransitions: true,
  axis: 'x',
  disabled: false,
  disableLazyLoading: false,
  enableMouseEvents: false,
  hysteresis: 0.6,
  ignoreNativeScroll: false,
  index: 0,
  threshold: 5,
  springConfig: {
    duration: '0.35s',
    easeFunction: 'cubic-bezier(0.15, 0.3, 0.25, 1)',
    delay: '0s'
  },
  resistance: false
};
SwipeableViews.childContextTypes = {
  swipeableViews: _propTypes.default.shape({
    slideUpdateHeight: _propTypes.default.func
  })
};
var _default = SwipeableViews;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-swipeable-views/lib/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-swipeable-views/lib/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _SwipeableViews = _interopRequireDefault(__webpack_require__(/*! ./SwipeableViews */ "./node_modules/react-swipeable-views/lib/SwipeableViews.js"));

var _default = _SwipeableViews.default;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/createClass.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/createClass.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/extends.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/extends.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/inherits.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/inherits.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/objectWithoutProperties.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/objectWithoutProperties.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;

/***/ }),

/***/ "./node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/typeof.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/typeof.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_c2e10d183b950a67d9e7 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_c2e10d183b950a67d9e7 */ "dll-reference dll_c2e10d183b950a67d9e7"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./node_modules/use-is-in-viewport/built/index.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/use-is-in-viewport/built/index.esm.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var observe_element_in_viewport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! observe-element-in-viewport */ "./node_modules/observe-element-in-viewport/dist/index.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
function o(r){return"object"==typeof r&&"current"in r}function c(r){return"function"==typeof r&&"function"==typeof r.call}/* harmony default export */ __webpack_exports__["default"] = (function(i){void 0===i&&(i={});var f=Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),p=f[0],l=f[1],a=i.target,v=i.viewport,m=function(r,t){var n={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&-1===t.indexOf(e)&&(n[e]=r[e]);return n}(i,["target","viewport"]),w=Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null),y=Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null),b=Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function(r){w.current=r,v&&(c(v)?v(r):o(v)&&(v.current=r))},[w,v]),s=Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function(r){y.current=r,a&&(c(a)?a(r):o(a)&&(a.current=r))},[y,a]);return Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function(){if(y.current)return Object(observe_element_in_viewport__WEBPACK_IMPORTED_MODULE_0__["observeElementInViewport"])(y.current,function(){return l(!0)},function(){return l(!1)},Object.assign({},m,{viewport:w.current}))},[y.current,m,w]),[p,s,b]});
//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/warning/warning.js":
/*!*****************************************!*\
  !*** ./node_modules/warning/warning.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "development" !== 'production';

var warning = function() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 1 ? len - 1 : 0);
    for (var key = 1; key < len; key++) {
      args[key - 1] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  }

  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

module.exports = warning;


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_imageBanners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/imageBanners */ "./data/imageBanners.ts");
/* harmony import */ var _components_Heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Heading */ "./components/Heading/index.js");
/* harmony import */ var _components_About__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/About */ "./components/About/index.js");
/* harmony import */ var _components_Skills__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Skills */ "./components/Skills/index.js");
/* harmony import */ var _components_Highlights__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Highlights */ "./components/Highlights/index.js");
/* harmony import */ var _components_Education__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Education */ "./components/Education/index.js");
/* harmony import */ var _components_WorkExperience__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/WorkExperience */ "./components/WorkExperience/index.js");
/* harmony import */ var _components_ImageBanner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/ImageBanner */ "./components/ImageBanner/index.js");
var _this = undefined,
    _jsxFileName = "/Users/sigrundish/personal-apps/resume/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










var index = function index() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 3
    }
  }, __jsx(_components_Heading__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }), __jsx(_components_Highlights__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }), __jsx(_components_About__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }), __jsx(_components_ImageBanner__WEBPACK_IMPORTED_MODULE_8__["default"], {
    images: _data_imageBanners__WEBPACK_IMPORTED_MODULE_1__["imageBanner1"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }), __jsx(_components_Skills__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }), __jsx(_components_ImageBanner__WEBPACK_IMPORTED_MODULE_8__["default"], {
    images: _data_imageBanners__WEBPACK_IMPORTED_MODULE_1__["imageBanner2"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }), __jsx(_components_Education__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }), __jsx(_components_WorkExperience__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ 1:
/*!**********************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2Fsigrundish%2Fpersonal-apps%2Fresume%2Fpages%2Findex.js ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2Fsigrundish%2Fpersonal-apps%2Fresume%2Fpages%2Findex.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fsigrundish%2Fpersonal-apps%2Fresume%2Fpages%2Findex.js!./");


/***/ }),

/***/ "dll-reference dll_c2e10d183b950a67d9e7":
/*!*******************************************!*\
  !*** external "dll_c2e10d183b950a67d9e7" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_c2e10d183b950a67d9e7;

/***/ })

},[[1,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=index.js.map