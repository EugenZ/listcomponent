import { Component, OnInit } from '@angular/core';
import {Product} from "./products";

@Component({
  selector: 'app-cola',
  templateUrl: './cola.component.html',
  styleUrls: ['./cola.component.css']
})
export class ColaComponent implements OnInit {

  products = [
    new Product(1, "Cola", 3),
    new Product(2, "Whiskey", 7)
  ];

  constructor() { }

  ngOnInit() {
  }

}
