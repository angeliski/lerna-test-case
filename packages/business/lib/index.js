"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _api = _interopRequireDefault(require("api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default() {
  return (0, _api.default)().then(function (data) {
    return data.filter(function (item) {
      return item.completed;
    });
  });
};

exports.default = _default;