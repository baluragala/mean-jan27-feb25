import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductListItemComponent } from "./product-list-item/product-list-item.component";
import { SharedModule } from "../shared/shared.module";
import { AddProductComponent } from "./add-product/add-product.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AddProductReactiveComponent } from "./add-product-reactive/add-product-reactive.component";
@NgModule({
  imports: [CommonModule, SharedModule, FormsModule, ReactiveFormsModule],
  declarations: [
    ProductListComponent,
    ProductListItemComponent,
    AddProductComponent,
    AddProductReactiveComponent
  ],
  exports: [
    ProductListComponent,
    AddProductComponent,
    AddProductReactiveComponent
  ]
})
export class ProductsModule {}
