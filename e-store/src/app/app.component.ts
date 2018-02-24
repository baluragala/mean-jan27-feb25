import { Component, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "super-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";
  @ViewChild("ftr") footer: ElementRef;

  ngAfterViewInit() {
    this.footer.nativeElement.innerText = "this is set from comp";
  }
}
