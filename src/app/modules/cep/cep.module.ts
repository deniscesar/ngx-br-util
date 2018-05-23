import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CepMaskDirective } from "./cep.mask.directive";

export * from "./cep.mask.directive";

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    CepMaskDirective
  ],
  exports: [
    CepMaskDirective
  ]
})
export class CepModule { }
