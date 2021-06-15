"use strict";
exports.__esModule = true;
exports.sessionProviders = void 0;
var session_schema_1 = require("./schemas/session.schema");
exports.sessionProviders = [
    {
        provide: 'Session_MODEL',
        useFactory: function (connection) { return connection.model('Session', session_schema_1.SessionSchema); },
        inject: ['DATABASE_CONNECTION']
    },
];
