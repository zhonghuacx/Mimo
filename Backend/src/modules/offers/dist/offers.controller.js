"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.OffersController = void 0;
var common_1 = require("@nestjs/common");
var OffersController = /** @class */ (function () {
    function OffersController(offersService) {
        this.offersService = offersService;
    }
    OffersController.prototype.create = function (offer) {
        return this.offersService.create(offer);
    };
    OffersController.prototype.findAll = function () {
        return this.offersService.findAll();
    };
    OffersController.prototype.findOne = function (id) {
        return this.offersService.findOne(+id);
    };
    OffersController.prototype.update = function (id, updateOrderDto) {
        return this.offersService.update(+id, updateOrderDto);
    };
    OffersController.prototype.remove = function (id) {
        return this.offersService.remove(+id);
    };
    __decorate([
        common_1.Post(),
        __param(0, common_1.Body())
    ], OffersController.prototype, "create");
    __decorate([
        common_1.Get()
    ], OffersController.prototype, "findAll");
    __decorate([
        common_1.Get(':id'),
        __param(0, common_1.Param('id'))
    ], OffersController.prototype, "findOne");
    __decorate([
        common_1.Patch(':id'),
        __param(0, common_1.Param('id')), __param(1, common_1.Body())
    ], OffersController.prototype, "update");
    __decorate([
        common_1.Delete(':id'),
        __param(0, common_1.Param('id'))
    ], OffersController.prototype, "remove");
    OffersController = __decorate([
        common_1.Controller('offers')
    ], OffersController);
    return OffersController;
}());
exports.OffersController = OffersController;
