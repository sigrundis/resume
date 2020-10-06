webpackHotUpdate("static/development/pages/index.js",{

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

/***/ })

})
//# sourceMappingURL=index.js.f7242ffba33eb1a11ce1.hot-update.js.map