import { Component, EventEmitter, Input, Output } from "@angular/core";
import {Product} from "../child/child1/productsFileModule";
// The component decorator
@Component({
  selector:'app-product-alerts',
  templateUrl:'./product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']

})
export class ProductAlertsComponent {
@Input() product!:Product;
@Output() notifyEventEmitterFromChild = new EventEmitter();
}