"use strict";
exports.__esModule = true;
exports.UserSchema = void 0;
var mongoose = require("mongoose");
exports.UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    passwordHash: String,
    verified: Boolean,
    menuList: {
        type: [String],
        "default": ['60c75bd354ae1a0a680561c3', '60c761a927bd572dec04bdea']
    },
    friendsList: [String],
    sessionList: [String]
});
