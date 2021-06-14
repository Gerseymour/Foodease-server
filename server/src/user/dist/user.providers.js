"use strict";
exports.__esModule = true;
exports.userProviders = void 0;
var user_schema_1 = require("./schemas/user.schema");
exports.userProviders = [
    {
        provide: 'User_MODEL',
        useFactory: function (connection) {
            return connection.model('User', user_schema_1.UserSchema);
        },
        inject: ['DATABASE_CONNECTION']
    },
];
