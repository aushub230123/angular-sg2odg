import { Injectable } from '@angular/core';
import { Product } from './child/child1/productsFileModule';

// @Service
// @Injectable({
//   providedIn: 'root'
//  application wide service
//  singleton
//  not necessary to add it to the providers array
// })

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];

  addToCartInService(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
/* . . . */
}
