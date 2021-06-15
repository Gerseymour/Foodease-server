"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.SessionModule = void 0;
var common_1 = require("@nestjs/common");
var session_controller_1 = require("./session.controller");
var session_service_1 = require("./session.service");
var session_providers_1 = require("./session.providers");
var database_module_1 = require("src/Model/database.module");
var user_providers_1 = require("src/user/user.providers");
var SessionModule = /** @class */ (function () {
    function SessionModule() {
    }
    SessionModule = __decorate([
        common_1.Module({
            imports: [database_module_1.DatabaseModule],
            controllers: [session_controller_1.SessionController],
            providers: __spreadArrays([session_service_1.SessionService], session_providers_1.sessionProviders, user_providers_1.userProviders)
        })
    ], SessionModule);
    return SessionModule;
}());
exports.SessionModule = SessionModule;
