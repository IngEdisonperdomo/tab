import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  constructor() {}

  ngOnInit() {
    const numero = 10;
    const numero2 = 20;
    //debugger;
    const suma = numero + numero2;
    console.log(suma);
  }
}
