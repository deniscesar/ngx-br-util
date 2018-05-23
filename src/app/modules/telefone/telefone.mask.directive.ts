import {Directive, ElementRef, HostListener} from '@angular/core';
import { telefoneCelularMask, telefoneFixoMask } from "../../commons/util";

const vanillaMasker = require('vanilla-masker');

@Directive({
  selector: '[telefoneMask]',
})
export class TelefoneMaskDirective {
  public nativeElement: HTMLInputElement;

  constructor(public element: ElementRef) {
    this.nativeElement = this.element.nativeElement;
  }

  private removeNonoDigito(value: string): string{
    return value ? value.replace(/[^\d]/g, '').trim() : value;
  }

  @HostListener('keyup', ['$event'])
  onKeyup(event: KeyboardEvent) {
    const telefonePattern: string = this.removeNonoDigito(this.nativeElement.value).length === 11 ? telefoneCelularMask : telefoneFixoMask;
    this.nativeElement.value = vanillaMasker.toPattern(this.nativeElement.value, telefonePattern);
  }

}