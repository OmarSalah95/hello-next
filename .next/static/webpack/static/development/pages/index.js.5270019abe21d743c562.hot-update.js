webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/components/Note.jsx":
/*!***********************************!*\
  !*** ./pages/components/Note.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.registry.npmjs.org/react/16.9.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\elper\\Desktop\\work\\NextJs\\hello-next\\pages\\components\\Note.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var Note = function Note(props) {
  return __jsx("div", {
    onClick: function onClick(event) {
      props.noteObject.isCompleted = !props.noteObject.isCompleted;
      props.noteObject.isCompleted ? event.target.className = "done" : event.target.className = "";
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, props.noteObject.note), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), props.noteObject.isCompleted);
};

/* harmony default export */ __webpack_exports__["default"] = (Note);

/***/ })

})
//# sourceMappingURL=index.js.5270019abe21d743c562.hot-update.js.map