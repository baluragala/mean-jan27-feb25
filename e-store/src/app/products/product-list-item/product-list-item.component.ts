import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "est-product-list-item",
  templateUrl: "./product-list-item.component.html",
  styleUrls: ["./product-list-item.component.css"]
})
export class ProductListItemComponent implements OnInit {
  productStyle = { border: "1px solid purple", margin: "2px", padding: "10px" };
  @Input() item;
  @Output() addToCartEvent: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  getItemName() {
    return "item";
  }

  onAddToCart(e, item) {
    console.log(e);
    alert(JSON.stringify(item));
    this.addToCartEvent.emit(item);
  }
}
