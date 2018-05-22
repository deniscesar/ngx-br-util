# NgxBrUtil

## Modules

### Mask Directives
 - Cpf - cpfMask
 - Cnpj - cnpjMask
 - Cpf/Cnpj - cpfCnpjMask
 - Telefone - telefoneMask
 - Cep - cepMask
 - Dinheiro - dinheiroMask
### Pipes
 - Cpf - cpf
 - Telefone - telefone


## Usage

Install as a dependency:
```
$ npm install --save ngx-br-util
```

Then, you need to include NgxBrUtilModule in your app:
```typescript
import { NgxBrUtilModule } from "ngx-br-util";

@NgModule({
  imports: [
    NgxBrUtilModule.forRoot()
  ]
})
export class MyModule {}
```
