"use strict";
exports.__esModule = true;
exports.UserSchema = void 0;
var mongoose = require("mongoose");
exports.UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    passwordHash: String,
    verified: Boolean,
    menuList: [String],
    friendsList: [String],
    sessionList: [String]
});
