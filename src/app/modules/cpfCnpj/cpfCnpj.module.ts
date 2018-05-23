import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {CpfCnpjMaskDirective} from "./cpfCnpj.mask.directive";

export * from './cpfCnpj.mask.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [    
    CpfCnpjMaskDirective
  ],
  declarations: [
    CpfCnpjMaskDirective
  ]
})
export class CpfCnpjModule { }
