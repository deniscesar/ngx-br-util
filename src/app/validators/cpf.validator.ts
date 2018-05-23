import { AbstractControl, ValidatorFn } from '@angular/forms';

const CPF = require('cpf_cnpj').CPF;

export function cpfValidationFn(): ValidatorFn {
  return (control: AbstractControl) => {
    const value = control.value;
    
    if (value && !CPF.isValid(value)) {
      return {
        cpf: true,
      };
    }

    return null;
  };
}