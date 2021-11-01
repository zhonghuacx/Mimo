"use strict";
exports.__esModule = true;
exports.ActivitesProviders = void 0;
var activite_entity_1 = require("./entities/activite.entity");
var constants_1 = require("../../core/constants");
exports.ActivitesProviders = [
    {
        provide: constants_1.ACTIVITY_REPOSITORY,
        useValue: activite_entity_1.Activite
    },
];
