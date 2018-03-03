import { Component, OnInit, Inject } from "@angular/core";
import { ProductService, IProduct } from "../product.service";
import { ProductV2Service } from "../product-v2.service";

@Component({
  selector: "est-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  constructor(
    private productService: ProductService,
    @Inject("AU") apiKey: string
  ) {
    console.log(productService);
    console.log(apiKey);
  }

  products: Array<IProduct> = [];

  // function next(products: Array<IProduct>) {
  //   console.log(products);
  //   this.products = products;
  // },
  // function errorHandler(err) {
  //   alert("Something went wrong, please try later");
  // }

  cart = [];
  ngOnInit() {
    this.productService
      .getProducts()
      .subscribe(
        (products: Array<IProduct>) => (this.products = products),
        err => alert("something went wrong")
      );
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
