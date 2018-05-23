import {ValidatorFn} from "@angular/forms";
import {cpfValidationFn} from "./cpf.validator";

export * from './cpf.validator';

export class NgxBrUtilValidators {

    static cpf: (blockEqualNumberSequence?: boolean) => ValidatorFn = cpfValidationFn;

}