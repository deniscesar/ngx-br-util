import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DinheiroMaskDirective } from "./dinheiro.mask.directive";

export * from "./dinheiro.mask.directive";

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    DinheiroMaskDirective
  ],
  declarations: [
    DinheiroMaskDirective
  ]
})
export class DinheiroModule { }
