import {Pipe, PipeTransform} from '@angular/core';
import {telefoneCelularMask, telefoneFixoMask} from "../commons/util";

const vanillaMasker = require('vanilla-masker');

@Pipe({
  name: 'telefone',
})
export class TelefonePipe implements PipeTransform {
  transform(value: any) {
    if (!value) {
      return '';
    }
    const telefonePattern: string = value.toString().length === 11 ? telefoneCelularMask : telefoneFixoMask;
    return vanillaMasker.toPattern(value, telefonePattern);
  }
}