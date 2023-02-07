import { Component } from '@angular/core';

import { products } from '../child/child1/productsFileModule';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  productsVar = products;
  // tongueTwister = "She sells sea shells on the sea shore!";
  // tongueTwister1 = `How much wood 
  // a  wook chuck chuck
  //  if a wood chuck could chuck wood!`;

  share() {
    window.alert('The product has been shared!');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/