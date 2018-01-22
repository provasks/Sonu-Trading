import { Globals } from './../globals';
import { global } from '@angular/core/src/util';
import { Component, OnInit, ElementRef, Renderer } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(
    private global: Globals,
    private el: ElementRef,
    private renderer: Renderer
  ) { }

  ngOnInit() {
  }
  onMenuClick(event) {
    // this.renderer.setElementClass(this.el.nativeElement.querySelector('.navbar-ex1-collapse'), 'in', false);
    this.renderer.setElementClass(this.el.nativeElement.querySelector('.navbar-collapse'), 'in', false);
  }
}
