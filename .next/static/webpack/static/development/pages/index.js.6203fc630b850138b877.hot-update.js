webpackHotUpdate("static/development/pages/index.js",{

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

/***/ })

})
//# sourceMappingURL=index.js.6203fc630b850138b877.hot-update.js.map