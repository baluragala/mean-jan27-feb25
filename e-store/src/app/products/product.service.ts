import { Injectable } from "@angular/core";

@Injectable()
export class ProductService {
  p1 = { name: "prod1", price: 189, stock: 250 };
  p2 = { name: "prod2", price: 220, stock: 0 };
  p3 = { name: "prod3", price: 165, stock: 250 };
  p4 = { name: "prod4", price: 227, stock: 250 };

  products = [this.p1, this.p2, this.p3, this.p4];

  constructor() {}

  getProducts() {
    return this.products;
  }

  getProduct(name: string) {
    return this.products.find(p => p.name == name);
  }
}
