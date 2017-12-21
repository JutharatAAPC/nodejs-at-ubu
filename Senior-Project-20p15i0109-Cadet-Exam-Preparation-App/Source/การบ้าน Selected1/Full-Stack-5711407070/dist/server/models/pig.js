"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var pigSchema = new mongoose.Schema({
    name: String,
    weight: Number,
    age: Number
});
var Pig = mongoose.model('Pig', pigSchema);
exports.default = Pig;
//# sourceMappingURL=pig.js.map