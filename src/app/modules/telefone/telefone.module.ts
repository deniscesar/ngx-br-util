import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelefoneMaskDirective } from "./telefone.mask.directive";

export * from "./telefone.mask.directive";

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    TelefoneMaskDirective
  ],
  declarations: [
    TelefoneMaskDirective
  ]
})
export class TelefoneModule { }
