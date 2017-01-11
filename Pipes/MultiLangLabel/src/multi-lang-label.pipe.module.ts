import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MultiLangLabelPipe} from './multi-lang-label.pipe';

export {MultiLangLabelPipe} from './multi-lang-label.pipe';

@NgModule({
    declarations: [MultiLangLabelPipe],
    exports: [MultiLangLabelPipe],
    imports: [CommonModule]
})

export class MultiLangLabelPipeModule {
  static forRoot(): ModuleWithProviders { return {ngModule: MultiLangLabelPipeModule, providers: []}; }
}
