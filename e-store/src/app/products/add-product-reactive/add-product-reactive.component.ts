import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";
import { ProductService, IProduct } from "../product.service";
import { Router } from "@angular/router";

@Component({
  selector: "est-add-product-reactive",
  templateUrl: "./add-product-reactive.component.html",
  styleUrls: ["./add-product-reactive.component.css"]
})
export class AddProductReactiveComponent implements OnInit {
  addProductForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private router: Router
  ) {
    // this.addProductForm = new FormGroup({
    //   title: new FormControl("", [
    //     Validators.required,
    //     Validators.minLength(4),
    //     Validators.maxLength(20)
    //   ]),
    //   price: new FormControl(),
    //   stock: new FormControl()
    // });
    this.addProductForm = this.formBuilder.group({
      name: [
        "",
        [Validators.required, Validators.minLength(4), Validators.maxLength(20)]
      ],
      price: "",
      stock: ""
    });
  }

  ngOnInit() {}

  doSubmit() {
    let product: IProduct = this.addProductForm.value;
    this.productService.addProduct(product).subscribe((p: IProduct) => {
      alert("product added successfully");
      this.router.navigate(["/products/list"]);
    });
  }
}
