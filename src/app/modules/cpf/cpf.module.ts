import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CpfMaskDirective} from "./cpf.mask.directive";

export * from './cpf.mask.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    CpfMaskDirective
  ],
  declarations: [
    CpfMaskDirective
  ]
})
export class CpfModule { }
