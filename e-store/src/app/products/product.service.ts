import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

export interface IProduct {
  id?: number;
  name: string;
  price: number;
  stock: number;
}

@Injectable()
export class ProductService {
  // p1 = { name: "prod1", price: 189, stock: 250 };
  // p2 = { name: "prod2", price: 220, stock: 0 };
  // p3 = { name: "prod3", price: 165, stock: 250 };
  // p4 = { name: "prod4", price: 227, stock: 250 };

  // products = [this.p1, this.p2, this.p3, this.p4];

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Array<IProduct>> {
    return this.http.get<Array<IProduct>>("https://localhost:3000/products");
  }

  getProduct(name: string) {
    //return this.products.find(p => p.name == name);
  }
}
