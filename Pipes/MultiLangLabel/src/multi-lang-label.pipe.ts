import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'multiLangLabel'})

export class MultiLangLabelPipe implements PipeTransform {
    transform(value: any, keyValue: string): any {
        console.log(value);
        console.log(keyValue);
        return value[keyValue];
    }
}
