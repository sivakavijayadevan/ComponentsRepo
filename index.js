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
var multi_lang_label_component_module_1 = require('./MultiLangLabel/src/multi-lang-label.component.module');
var multi_lang_label_component_module_2 = require('./MultiLangLabel/src/multi-lang-label.component.module');
exports.MultiLangLabelComponentModule = multi_lang_label_component_module_2.MultiLangLabelComponentModule;
var MLC_MODULES = [
    multi_lang_label_component_module_1.MultiLangLabelComponentModule
];
var MultiLanguageComponentRootModule = (function () {
    function MultiLanguageComponentRootModule() {
    }
    MultiLanguageComponentRootModule = __decorate([
        core_1.NgModule({
            imports: [
                multi_lang_label_component_module_1.MultiLangLabelComponentModule.forRoot()
            ],
            exports: MLC_MODULES
        }), 
        __metadata('design:paramtypes', [])
    ], MultiLanguageComponentRootModule);
    return MultiLanguageComponentRootModule;
}());
exports.MultiLanguageComponentRootModule = MultiLanguageComponentRootModule;
var MultiLanguageComponentModule = (function () {
    function MultiLanguageComponentModule() {
    }
    MultiLanguageComponentModule.forRoot = function () { return { ngModule: MultiLanguageComponentRootModule }; };
    MultiLanguageComponentModule = __decorate([
        core_1.NgModule({ imports: MLC_MODULES, exports: MLC_MODULES }), 
        __metadata('design:paramtypes', [])
    ], MultiLanguageComponentModule);
    return MultiLanguageComponentModule;
}());
exports.MultiLanguageComponentModule = MultiLanguageComponentModule;
//# sourceMappingURL=index.js.map