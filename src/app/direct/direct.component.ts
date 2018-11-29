import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-direct',
  templateUrl: './direct.component.html',
  styleUrls: ['./direct.component.css']
})
export class DirectComponent implements OnInit {

  visibility = true;

  items = ['ANGULAR', 'REACT', 'VUE', '???'];

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.visibility = !this.visibility;
  }

}
