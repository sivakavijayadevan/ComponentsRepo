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
var common_1 = require('@angular/common');
var multi_lang_label_pipe_1 = require('./multi-lang-label.pipe');
var multi_lang_label_pipe_2 = require('./multi-lang-label.pipe');
exports.MultiLangLabelPipe = multi_lang_label_pipe_2.MultiLangLabelPipe;
var MultiLangLabelPipeModule = (function () {
    function MultiLangLabelPipeModule() {
    }
    MultiLangLabelPipeModule.forRoot = function () { return { ngModule: MultiLangLabelPipeModule, providers: [] }; };
    MultiLangLabelPipeModule = __decorate([
        core_1.NgModule({
            declarations: [multi_lang_label_pipe_1.MultiLangLabelPipe],
            exports: [multi_lang_label_pipe_1.MultiLangLabelPipe],
            imports: [common_1.CommonModule]
        }), 
        __metadata('design:paramtypes', [])
    ], MultiLangLabelPipeModule);
    return MultiLangLabelPipeModule;
}());
exports.MultiLangLabelPipeModule = MultiLangLabelPipeModule;
//# sourceMappingURL=multi-lang-label.pipe.module.js.map