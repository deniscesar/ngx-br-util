import {Pipe, PipeTransform} from '@angular/core';
import {cpfMask} from "../commons/util";

const vanillaMasker = require('vanilla-masker');

@Pipe({
  name: 'cpf',
})
export class CpfPipe implements PipeTransform {
  transform(value: any) {
    if (!value) {
      return '';
    }

    return vanillaMasker.toPattern(value, cpfMask);
  }
}