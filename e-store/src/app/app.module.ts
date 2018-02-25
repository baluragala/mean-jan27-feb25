import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared.module";
import { ProductsModule } from "./products/products.module";
import { RouterModule } from "@angular/router";
import { ProductListComponent } from "./products/product-list/product-list.component";
import { AddProductReactiveComponent } from "./products/add-product-reactive/add-product-reactive.component";
import { EditProductComponent } from "./products/edit-product/edit-product.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SharedModule,
    ProductsModule,
    RouterModule.forRoot([
      { path: "products", component: ProductListComponent },
      {
        path: "products/add",
        component: AddProductReactiveComponent
      },
      { path: "products/edit", component: EditProductComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
