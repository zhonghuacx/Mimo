"use strict";
exports.__esModule = true;
exports.OrdersProviders = void 0;
var order_entity_1 = require("./entities/order.entity");
var constants_1 = require("../../core/constants");
exports.OrdersProviders = [
    {
        provide: constants_1.ORDERS_REPOSITORY,
        useValue: order_entity_1.Order
    },
];
