import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "est-add-product",
  templateUrl: "./add-product.component.html",
  styleUrls: ["./add-product.component.css"]
})
export class AddProductComponent implements OnInit {
  title = "";
  price = "";
  stock = "";
  constructor() {}

  handleInput(e) {
    this.title = e.target.value;
    console.log(this);
  }
  ngOnInit() {}
  doSubmit(f: NgForm) {
    console.log(f.value);
  }
}
