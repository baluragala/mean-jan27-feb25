import { Component, OnInit, Inject } from "@angular/core";
import { ProductService } from "../product.service";
import { ProductV2Service } from "../product-v2.service";

@Component({
  selector: "est-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  constructor(
    @Inject("PS") private productService: ProductService,
    @Inject("AU") apiKey: string
  ) {
    console.log(productService);
    console.log(apiKey);
  }

  products;

  cart = [];
  ngOnInit() {
    this.products = this.productService.getProducts();
  }

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
