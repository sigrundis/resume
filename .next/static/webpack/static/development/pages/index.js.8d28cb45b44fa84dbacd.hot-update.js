webpackHotUpdate("static/development/pages/index.js",{

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

/***/ })

})
//# sourceMappingURL=index.js.8d28cb45b44fa84dbacd.hot-update.js.map