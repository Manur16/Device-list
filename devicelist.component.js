"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var devicelist_service_1 = require('../services/devicelist.service');
var panelloop_component_1 = require('../../panelloop/panelloop.component');
var DeviceListComponent = (function () {
    function DeviceListComponent(deviceService, panelloop) {
        this.deviceService = deviceService;
        this.panelloop = panelloop;
    }
    DeviceListComponent.prototype.ngOnInit = function () {
        this.getDeviceList();
    };
    DeviceListComponent.prototype.getDeviceList = function () {
        var _this = this;
        this.deviceService.getDevices().then(function (response) {
            _this.devicelist = response;
        }, function (error) {
            console.log(error);
        });
    };
    DeviceListComponent.prototype.setDevicesInfo = function (event, clkdElement) {
        var deviceInfo = clkdElement;
        this.panelloop.setDeviceInfo(deviceInfo);
    };
    DeviceListComponent.prototype.displayDeviceProp = function () {
        //siteFlag:boolean = true;
        this.panelloop.setDevicePropFlag();
    };
    DeviceListComponent = __decorate([
        core_1.Component({
            selector: 'devicelist-app',
            templateUrl: 'app/modules/shared/devicelist/devicelist.component.html',
            styleUrls: ['app/modules/shared/devicelist/devicelist.component.css'],
            providers: [devicelist_service_1.DeviceListService]
        }), 
        __metadata('design:paramtypes', [devicelist_service_1.DeviceListService, panelloop_component_1.PanelLoopComponent])
    ], DeviceListComponent);
    return DeviceListComponent;
}());
exports.DeviceListComponent = DeviceListComponent;
//# sourceMappingURL=devicelist.component.js.map