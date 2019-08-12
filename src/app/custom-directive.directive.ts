import { Directive, ElementRef, Input, HostListener, OnChanges, OnInit, Output, EventEmitter } from '@angular/core';
import { style } from '@angular/animations';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective implements OnChanges, OnInit {


  @Input() input1: number;
  @Output() update = new EventEmitter();
  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.backgroundColor = '#FFF';
   }

   ngOnInit(): void {
    console.log('input on init', this.input1);
  }
   ngOnChanges(changes: import('@angular/core').SimpleChanges): void {
    console.log('input on change', this.input1);
  }
  @HostListener('click', ['$event.target'])
  onclick(btn) {
    console.log('button', btn, 'number of clicks:');
    this.update.emit('saurabh');
  }

}
