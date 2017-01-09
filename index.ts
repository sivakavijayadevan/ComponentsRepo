import {NgModule, ModuleWithProviders} from '@angular/core';

import {MultiLangLabelComponentModule} from './MultiLangLabel/src/multi-lang-label.component.module';

export {MultiLangLabelComponentModule} from './MultiLangLabel/src/multi-lang-label.component.module';

const MLC_MODULES = [
    MultiLangLabelComponentModule
];

@NgModule({
  imports: [
    MultiLangLabelComponentModule.forRoot()
  ],
  exports: MLC_MODULES
})
export class MultiLanguageComponentRootModule {
}

@NgModule({imports: MLC_MODULES, exports: MLC_MODULES})
export class MultiLanguageComponentModule {
  static forRoot(): ModuleWithProviders { return {ngModule: MultiLanguageComponentRootModule}; }
}
