import { Component, ViewChild, ElementRef } from "@angular/core";
import { ProductService } from "./products/product.service";

@Component({
  selector: "super-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [{ provide: ProductService, useClass: ProductService }]
})
export class AppComponent {
  title = "app";
  @ViewChild("ftr") footer: ElementRef;

  ngAfterViewInit() {
    this.footer.nativeElement.innerText = "this is set from comp";
  }
}
