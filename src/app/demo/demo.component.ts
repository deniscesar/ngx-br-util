import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'demo',
  templateUrl: './demo.component.html'
})
export class DemoComponent {

  public cep: string;
  public cpfCnpj: string;
  public cpf: string;
  public cnpj: string;
  public telefone: string;
  public dinheiro: string;
  public cartao: string;
  
  constructor() {
  }

  public enviar() {
    console.log(this.cep);
    console.log(this.cpf);
    console.log(this.telefone);
    console.log(this.dinheiro);
    console.log(this.cartao);
  }

}
