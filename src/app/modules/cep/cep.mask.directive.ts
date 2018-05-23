import {Directive, ElementRef} from '@angular/core';
import {cepMask} from "../../commons/util";

const vanillaMasker = require('vanilla-masker');

@Directive({
  selector: '[cepMask]',
})
export class CepMaskDirective {
  public nativeElement: HTMLInputElement;

  constructor(public element: ElementRef) {
    this.nativeElement = this.element.nativeElement;
    vanillaMasker(this.nativeElement).maskPattern(cepMask);
  }
}