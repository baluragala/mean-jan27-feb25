import { Component, ViewEncapsulation } from "@angular/core";

/*
1. class 
2. metadata
3. UI or template
*/

@Component({
  selector: "est-header",
  //   template: `
  //     <h1>{{mainHeading}}</h1>
  //     <h3>{{subHeading}}</h3>
  //   `
  templateUrl: "./header.component.html",
  //   styles: [
  //     `
  //   .app-head {
  //       color:purple;
  //       text-align:center
  //   }
  //   `,
  //     `
  //   .app-subhead{
  //       color:orange;
  //       text-align:center
  //   }
  //   `
  //   ]
  styleUrls: ["./header.component.css"],
  encapsulation: ViewEncapsulation.Emulated
})
export class HeaderComponent {
  mainHeading = "E-STORE";
  subHeading = "An online store for your electronic gadgets";
}
