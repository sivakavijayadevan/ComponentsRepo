import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MultiLangLabelComponent} from './multi-lang-label.component';

export {MultiLangLabelComponent} from './multi-lang-label.component';

@NgModule({
    declarations: [MultiLangLabelComponent],
    exports: [MultiLangLabelComponent],
    imports: [CommonModule]
})

export class MultiLangLabelComponentModule {
  static forRoot(): ModuleWithProviders { return {ngModule: MultiLangLabelComponentModule, providers: []}; }
}
