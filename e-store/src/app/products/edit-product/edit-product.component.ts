import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "est-edit-product",
  templateUrl: "./edit-product.component.html",
  styleUrls: ["./edit-product.component.css"]
})
export class EditProductComponent implements OnInit {
  editProductForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.editProductForm = this.formBuilder.group({
      title: [
        "",
        [Validators.required, Validators.minLength(4), Validators.maxLength(20)]
      ],
      price: "",
      stock: ""
    });
  }

  ngOnInit() {
    this.editProductForm.patchValue({ title: "note", prce: 400, stock: 20 });
  }
}
