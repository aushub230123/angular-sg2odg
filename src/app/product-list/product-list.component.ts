import { Component } from '@angular/core';

import { products } from '../child/child1/productsFileModule';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css','./product-list.component-newstyle.css']
})
export class ProductListComponent {
  productsVar = products;

  share() {
    alert('The product has been shared!');
  }

  handleOnNotifyInParent() {
    alert("You will be notified when product is on sale!")
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/