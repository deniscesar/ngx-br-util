import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {CcMaskDirective} from "./cc.mask.directive";

export * from './cc.mask.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [    
    CcMaskDirective
  ],
  declarations: [
    CcMaskDirective
  ]
})
export class CcModule { }
