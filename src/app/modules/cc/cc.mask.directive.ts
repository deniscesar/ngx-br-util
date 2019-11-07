import { Directive, ElementRef, HostListener } from '@angular/core';
import {ccMask, ccMaskAmex} from "../../commons/util";

const vanillaMasker = require('vanilla-masker');

@Directive({
  selector: '[ccMask]',
})
export class CcMaskDirective {
  public nativeElement: HTMLInputElement;

  constructor(public element: ElementRef) {
    this.nativeElement = this.element.nativeElement;
  }

  @HostListener('keyup', ['$event'])
  onKeyup(event: KeyboardEvent) {
    if(this.nativeElement.value.length <= 17){
      vanillaMasker(this.nativeElement).maskPattern(ccMaskAmex);
    }else{
      vanillaMasker(this.nativeElement).maskPattern(ccMask);
    }
  }
}