import { Globals } from './../globals';
import { global } from '@angular/core/src/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(
    private global:Globals
  ) { }

  ngOnInit() {
  }

}
