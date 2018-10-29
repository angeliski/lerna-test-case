"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _axios = require("axios");

var _default = function _default() {
  return (0, _axios.get)('https://jsonplaceholder.typicode.com/todos');
};

exports.default = _default;