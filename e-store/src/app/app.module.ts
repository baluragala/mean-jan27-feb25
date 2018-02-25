import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared.module";
import { ProductsModule } from "./products/products.module";
import { RouterModule } from "@angular/router";
import { ProductListComponent } from "./products/product-list/product-list.component";
import { AddProductReactiveComponent } from "./products/add-product-reactive/add-product-reactive.component";
import { EditProductComponent } from "./products/edit-product/edit-product.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    ProductsModule,
    RouterModule.forRoot([
      { path: "home", component: HomeComponent },
      { path: "contact", component: ContactComponent },
      { path: "", redirectTo: "products", pathMatch: "full" },

      {
        path: "**",
        component: PageNotFoundComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
