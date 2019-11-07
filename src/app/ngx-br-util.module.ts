import { NgModule, ModuleWithProviders } from '@angular/core';
import {NgxBrUtilPipesModule} from "./pipes/pipes.module";

import { TelefoneModule } from "./modules/telefone/telefone.module";
import { DinheiroModule } from "./modules/dinheiro/dinheiro.module";
import { CepModule } from "./modules/cep/cep.module";

import { CpfCnpjModule } from "./modules/cpfCnpj/cpfCnpj.module";
import { CnpjModule } from './modules/cnpj/cnpj.module';
import { CpfModule } from './modules/cpf/cpf.module';
import { CcModule } from './modules/cc/cc.module';

export * from './pipes/pipes.module';

export * from "./modules/cpfCnpj/cpfCnpj.module";
export * from "./modules/cpf/cpf.module";
export * from "./modules/cnpj/cnpj.module";

export * from "./modules/telefone/telefone.module";
export * from "./modules/cep/cep.module";
export * from "./modules/dinheiro/dinheiro.module";

export * from './validators/ngx-br-util-validators'


@NgModule({
  imports: [
    CpfCnpjModule,
    CpfModule,
    CnpjModule,
    TelefoneModule,
    CepModule,   
    DinheiroModule,
    CcModule,
    NgxBrUtilPipesModule
  ],
  exports: [
    CpfCnpjModule,
    CpfModule,
    CnpjModule,
    TelefoneModule,
    CepModule,
    DinheiroModule,
    CcModule,
    NgxBrUtilPipesModule
  ]
})
export class NgxBrUtilModule { 
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxBrUtilModule,
      providers: []
    };
  }
 }
