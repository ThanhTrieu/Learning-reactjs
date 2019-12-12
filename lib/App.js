"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Header = _interopRequireDefault(require("./components/Header"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App() {
  return _react.default.createElement("div", {
    className: "App"
  }, _react.default.createElement(_Header.default, null));
}

var _default = App;
exports.default = _default;