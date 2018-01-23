import { Directive, HostListener,ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[menuItem]'
})
export class MenuItemDirective {

  constructor(
    private el: ElementRef,
    private renderer: Renderer

  ) { }
  @HostListener("click", ["$event"])
  public onClick(event: any): void {
    event.preventDefault();
    event.stopPropagation();
    // this.renderer.setElementClass(this.el.nativeElement.querySelector('.navbar-collapse'), 'in', false);
    // $('.navbar-collapse').addClass('collapse').removeClass('in')
    this.renderer.setElementClass(document.querySelector('.navbar-collapse'), 'in', false);
  }

}
