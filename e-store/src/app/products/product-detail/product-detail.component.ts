import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductService, IProduct } from "../product.service";

@Component({
  selector: "est-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.css"]
})
export class ProductDetailComponent implements OnInit {
  name;
  qparams;
  product;

  constructor(private route: ActivatedRoute, private service: ProductService) {}

  ngOnInit() {
    this.name = this.route.snapshot.params["pname"];
    this.qparams = this.route.snapshot.queryParams;
    this.service
      .getProduct(this.name)
      .subscribe((product: IProduct) => (this.product = product));
  }
}
