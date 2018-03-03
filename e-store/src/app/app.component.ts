import { Component, ViewChild, ElementRef } from "@angular/core";
import { ProductService } from "./products/product.service";
import { Observable } from "rxjs";

@Component({
  selector: "super-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [{ provide: ProductService, useClass: ProductService }]
})
export class AppComponent {
  title = "app";
  //   @ViewChild("ftr") footer: ElementRef;

  //   ngAfterViewInit() {
  //     this.footer.nativeElement.innerText = "this is set from comp";
  //   }
  // }

  fromArrayResult = "";
  fromObjectResult;
  fromRangeResult = "";
  fromIntervalResult = "";
  fromPromiseResult = "";
  mapOperatorResult = "";
  filterOperatorResult = "";
  flatMapOperatorResult = "";
  forkJoinOperatorResult;

  constructor() {
    // var source$ = Observable.create(function(observer) {
    //   observer.next(20);
    //   observer.complete();
    // });
    // source$.subscribe(
    //   function next(d) {
    //     console.log(d);
    //   },
    //   function error(e) {
    //     console.error(e);
    //   },
    //   function complete() {
    //     console.log("completed");
    //   }
    // );

    let s$ = Observable.interval(1000)
      .map(v => v * 20)
      .filter(v => v % 30 === 0)
      .subscribe(v => console.log(v));
  }
}
