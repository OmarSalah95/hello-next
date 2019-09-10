webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/components/Form.jsx":
/*!***********************************!*\
  !*** ./pages/components/Form.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/Users/tank/git/hello-next/pages/components/Form.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

var Form = function Form(props) {
  var _useState = useState(""),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      userInput = _useState2[0],
      setUserInput = _useState2[1];

  var handleChange = function handleChange(event) {
    return setUserInput(event.target.value);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("form", {
    onSubmit: function onSubmit() {
      return props.setNote(userInput);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("input", {
    type: "text",
    name: "note",
    value: function value() {
      return userInput;
    },
    onChange: function onChange() {
      return handleChange;
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ })

})
//# sourceMappingURL=index.js.a6b177b6cf9c730c4b7e.hot-update.js.map