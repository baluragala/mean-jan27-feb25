import { Injectable } from "@angular/core";

@Injectable()
export class ProductV2Service {
  p1 = { name: "2prod1", price: 189, stock: 250 };
  p2 = { name: "2prod2", price: 220, stock: 0 };
  p3 = { name: "2prod3", price: 165, stock: 250 };
  p4 = { name: "2prod4", price: 227, stock: 250 };

  products = [this.p1, this.p2, this.p3, this.p4];

  constructor() {}

  getProducts() {
    return this.products;
  }
}
