"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _routes = require("./routes");

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

// for parsing application/json
app.use(_express2.default.json());
// for parsing application/x-www-form-urlencoded
app.use(_express2.default.urlencoded({ extended: true }));

app.use("/", _express2.default.static(__dirname + "/build"));
app.use("/api", _routes2.default);

exports.default = app;