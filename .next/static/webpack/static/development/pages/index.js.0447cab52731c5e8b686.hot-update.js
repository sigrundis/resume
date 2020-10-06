webpackHotUpdate("static/development/pages/index.js",{

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

/***/ })

})
//# sourceMappingURL=index.js.0447cab52731c5e8b686.hot-update.js.map