webpackHotUpdate("static/development/pages/index.js",{

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

/***/ })

})
//# sourceMappingURL=index.js.6c454d9eb0de134c91b8.hot-update.js.map