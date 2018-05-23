import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CnpjMaskDirective} from "./cnpj.mask.directive";

export * from './cnpj.mask.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CnpjMaskDirective
  ],
  declarations: [
    CnpjMaskDirective
  ]
})
export class CnpjModule { }
