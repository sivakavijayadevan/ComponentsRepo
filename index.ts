import {NgModule, ModuleWithProviders} from '@angular/core';

import {MultiLangLabelComponentModule} from './Components/MultiLangLabel/src/multi-lang-label.component.module';
import {MultiLangLabelPipeModule} from './Pipes/MultiLangLabel/src/multi-lang-label.pipe.module';

export {MultiLangLabelComponentModule} from './Components/MultiLangLabel/src/multi-lang-label.component.module';
export {MultiLangLabelPipeModule} from './Pipes/MultiLangLabel/src/multi-lang-label.pipe.module';

const MLC_MODULES = [
    MultiLangLabelComponentModule,
    MultiLangLabelPipeModule
];

@NgModule({
  imports: [
    MultiLangLabelComponentModule.forRoot(),
    MultiLangLabelPipeModule.forRoot()
  ],
  exports: MLC_MODULES
})
export class MultiLanguageComponentRootModule {
}

@NgModule({imports: MLC_MODULES, exports: MLC_MODULES})
export class MultiLanguageComponentModule {
  static forRoot(): ModuleWithProviders { return {ngModule: MultiLanguageComponentRootModule}; }
}
