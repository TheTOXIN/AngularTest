import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[toBold]',
  host: {
    '(mouseleave)': 'onMouseLeave()'
  }
})
export class BoldDirective implements OnInit {

  @Input('toBold') newColor = 'red';
  @Input() defColor = 'black';

  private color;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'font-weight', 'bold');
  }

  ngOnInit(): void {
    this.color = this.defColor;
  }

  @HostBinding('style.color') get getColor() {
    return this.color;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.color = this.newColor;
  }

  onMouseLeave() {
    this.color = this.defColor;
  }

}
