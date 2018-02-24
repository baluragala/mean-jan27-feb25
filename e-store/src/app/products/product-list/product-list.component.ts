import { Component, OnInit } from "@angular/core";

@Component({
  selector: "est-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  constructor() {}

  p1 = { name: "prod1", price: 100, stock: 250 };
  p2 = { name: "prod2", price: 100, stock: 0 };
  p3 = { name: "prod3", price: 100, stock: 250 };
  p4 = { name: "prod4", price: 100, stock: 250 };

  products = [this.p1, this.p2, this.p3, this.p4];

  cart = [];
  ngOnInit() {}

  getName() {
    return "Product List";
  }

  getStyles() {
    return "color:red";
  }

  handleClick(e) {
    console.log(e);
    alert("clicked");
  }

  handleAddToCart(item) {
    //alert("Received add to cart event " + item.name);
    this.cart.push(item);
  }
}
