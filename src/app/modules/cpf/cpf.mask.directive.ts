import { Directive, ElementRef, HostListener } from '@angular/core';
import { cpfMask } from "../../commons/util";

const vanillaMasker = require('vanilla-masker');

@Directive({
    selector: '[cpfMask]',
})
export class CpfMaskDirective {
    public nativeElement: HTMLInputElement;

    constructor(public element: ElementRef) {
        this.nativeElement = this.element.nativeElement;
        vanillaMasker(this.nativeElement).maskPattern(cpfMask);
    }
}
