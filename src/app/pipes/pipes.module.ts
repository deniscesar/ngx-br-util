import {NgModule} from '@angular/core';
import {CpfPipe} from "./cpf.pipe";
import {TelefonePipe} from "./telefone.pipe";

export * from './cpf.pipe';
export * from './telefone.pipe';

@NgModule({
  imports: [],
  declarations: [
    CpfPipe,
    TelefonePipe
  ],
  exports: [
    CpfPipe,
    TelefonePipe
  ],
  providers: [
    CpfPipe,
    TelefonePipe
  ]
})
export class NgxBrUtilPipesModule { }
