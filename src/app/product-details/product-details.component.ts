import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../child/child1/productsFileModule';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product : Product | undefined;
 constructor(private route : ActivatedRoute){
// CALLED FIRST 
console.log("cons");
 }
//  LIFE-CYCLE HOOK
 ngOnInit() {
  //  CALLED NEXT
  console.log("ngOnInit")
  const routeParams = this.route.snapshot.paramMap;
  const productIdFromRoute = Number(routeParams.get('productId'));
  this.product = products.find(product => product.id === productIdFromRoute );
}
}


