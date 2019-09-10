webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/components/Note.jsx":
/*!***********************************!*\
  !*** ./pages/components/Note.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/tank/git/hello-next/pages/components/Note.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var Note = function Note(props) {
  return __jsx("div", {
    onClick: function onClick(event) {
      return props.noteObject.isCompleted = !props.noteObject.isCompleted;
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("span", {
    className: "".concat(props.noteObject.isCompleted ? "done" : null),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, props.noteObject.note), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), props.noteObject.isCompleted);
};

/* harmony default export */ __webpack_exports__["default"] = (Note);

/***/ })

})
//# sourceMappingURL=index.js.9e34ac40f13b4c1e2e53.hot-update.js.map