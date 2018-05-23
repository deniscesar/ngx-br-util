import { Directive, ElementRef, HostListener } from '@angular/core';
import {cpfMask, cnpjMask} from "../../commons/util";

const vanillaMasker = require('vanilla-masker');

@Directive({
  selector: '[cpfCnpjMask]',
})
export class CpfCnpjMaskDirective {
  public nativeElement: HTMLInputElement;

  constructor(public element: ElementRef) {
    this.nativeElement = this.element.nativeElement;
  }

  @HostListener('keyup', ['$event'])
  onKeyup(event: KeyboardEvent) {
    if(this.nativeElement.value.length <= 14){
      vanillaMasker(this.nativeElement).maskPattern(cpfMask);
    }else{
      vanillaMasker(this.nativeElement).maskPattern(cnpjMask);
    }
  }
}