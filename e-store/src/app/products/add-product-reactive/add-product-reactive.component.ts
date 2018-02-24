import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";

@Component({
  selector: "est-add-product-reactive",
  templateUrl: "./add-product-reactive.component.html",
  styleUrls: ["./add-product-reactive.component.css"]
})
export class AddProductReactiveComponent implements OnInit {
  addProductForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
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
      title: [
        "",
        [Validators.required, Validators.minLength(4), Validators.maxLength(20)]
      ],
      price: "",
      stock: ""
    });
  }

  ngOnInit() {}
}
