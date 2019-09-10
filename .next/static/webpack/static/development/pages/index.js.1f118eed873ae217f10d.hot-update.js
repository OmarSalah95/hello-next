webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/components/Form.jsx":
/*!***********************************!*\
  !*** ./pages/components/Form.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/tank/git/hello-next/pages/components/Form.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Form = function Form(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      userInput = _useState[0],
      setUserInput = _useState[1];

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("form", {
    onSubmit: function onSubmit(event) {
      event.preventDefault();
      props.setNotes(userInput);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("input", {
    type: "text",
    name: "note",
    placeholder: "Enter Note",
    value: userInput,
    onChange: function onChange(event) {
      return setUserInput(event.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ })

})
//# sourceMappingURL=index.js.1f118eed873ae217f10d.hot-update.js.map