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
exports.AppModule = void 0;
var common_1 = require("@nestjs/common");
var app_controller_1 = require("./app.controller");
var app_service_1 = require("./app.service");
var menu_module_1 = require("./menu/menu.module");
var user_module_1 = require("./user/user.module");
var session_module_1 = require("./session/session.module");
var menu_providers_1 = require("./menu/menu.providers");
var user_providers_1 = require("./user/user.providers");
var database_module_1 = require("./Model/database.module");
var menu_controller_1 = require("./menu/menu.controller");
var menu_service_1 = require("./menu/menu.service");
var session_controller_1 = require("./session/session.controller");
var session_service_1 = require("./session/session.service");
var user_controller_1 = require("./user/user.controller");
var user_service_1 = require("./user/user.service");
require('dotenv').config();
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        common_1.Module({
            imports: [menu_module_1.MenuModule, user_module_1.UserModule, session_module_1.SessionModule, database_module_1.DatabaseModule],
            controllers: [app_controller_1.AppController, user_controller_1.UserController, menu_controller_1.MenuController, session_controller_1.SessionController],
            providers: __spreadArrays([app_service_1.AppService, menu_service_1.MenuService, user_service_1.UserService, session_service_1.SessionService], menu_providers_1.menuProviders, user_providers_1.userProviders)
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//MongooseModule.forRoot(`mongodb://localhost:27017/foodeasedb`
