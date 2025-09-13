"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var dotenv_1 = require("dotenv");
var cors_1 = require("cors");
var helmet_1 = require("helmet");
var morgan_1 = require("morgan");
dotenv_1.default.config();
var app = (0, express_1.default)();
var PORT = process.env.PORT || 3000;
app.use((0, cors_1.default)());
app.use((0, helmet_1.default)());
app.use((0, morgan_1.default)("dev"));
app.get("/", function (_, res) {
    res.send("API Gateway is running");
});
app.get("/api/v1", function (_, res) {
    res.send("API Gateway v1");
});
app.listen(PORT, function () {
    console.log("API Gateway corriendo en http://localhost:".concat(PORT));
});
