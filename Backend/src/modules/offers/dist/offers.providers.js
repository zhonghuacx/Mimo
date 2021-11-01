"use strict";
exports.__esModule = true;
exports.OffersProviders = void 0;
var offer_entity_1 = require("./entities/offer.entity");
var constants_1 = require("../../core/constants");
exports.OffersProviders = [
    {
        provide: constants_1.OFFERS_REPOSITORY,
        useValue: offer_entity_1.Offer
    },
];
