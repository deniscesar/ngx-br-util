import { Directive, ElementRef, HostListener } from '@angular/core';
import {cnpjMask} from "../../commons/util";

const vanillaMasker = require('vanilla-masker');

@Directive({
  selector: '[cnpjMask]',
})
export class CnpjMaskDirective {
  public nativeElement: HTMLInputElement;

  constructor(public element: ElementRef) {
    this.nativeElement = this.element.nativeElement;
    vanillaMasker(this.nativeElement).maskPattern(cnpjMask);
  }

}