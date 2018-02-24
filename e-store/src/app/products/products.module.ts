import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductListItemComponent } from "./product-list-item/product-list-item.component";
import { SharedModule } from "../shared/shared.module";
import { AddProductComponent } from "./add-product/add-product.component";
import { FormsModule } from "@angular/forms";
@NgModule({
  imports: [CommonModule, SharedModule, FormsModule],
  declarations: [
    ProductListComponent,
    ProductListItemComponent,
    AddProductComponent
  ],
  exports: [ProductListComponent, AddProductComponent]
})
export class ProductsModule {}
