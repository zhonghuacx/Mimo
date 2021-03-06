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
exports.ActivitesController = void 0;
var common_1 = require("@nestjs/common");
var ActivitesController = /** @class */ (function () {
    function ActivitesController(activitesService) {
        this.activitesService = activitesService;
    }
    ActivitesController.prototype.create = function (Activity) {
        return this.activitesService.create(Activity);
    };
    ActivitesController.prototype.findAll = function () {
        return this.activitesService.findAll();
    };
    ActivitesController.prototype.findOne = function (id) {
        return this.activitesService.findOne(+id);
    };
    ActivitesController.prototype.update = function (id, updateActiviteDto) {
        return this.activitesService.update(+id, updateActiviteDto);
    };
    ActivitesController.prototype.remove = function (id) {
        return this.activitesService.remove(+id);
    };
    __decorate([
        common_1.Post(),
        __param(0, common_1.Body())
    ], ActivitesController.prototype, "create");
    __decorate([
        common_1.Get()
    ], ActivitesController.prototype, "findAll");
    __decorate([
        common_1.Get(':id'),
        __param(0, common_1.Param('id'))
    ], ActivitesController.prototype, "findOne");
    __decorate([
        common_1.Patch(':id'),
        __param(0, common_1.Param('id')),
        __param(1, common_1.Body())
    ], ActivitesController.prototype, "update");
    __decorate([
        common_1.Delete(':id'),
        __param(0, common_1.Param('id'))
    ], ActivitesController.prototype, "remove");
    ActivitesController = __decorate([
        common_1.Controller('activites')
    ], ActivitesController);
    return ActivitesController;
}());
exports.ActivitesController = ActivitesController;
