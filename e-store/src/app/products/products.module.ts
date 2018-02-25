import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductListItemComponent } from "./product-list-item/product-list-item.component";
import { SharedModule } from "../shared/shared.module";
import { AddProductComponent } from "./add-product/add-product.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AddProductReactiveComponent } from "./add-product-reactive/add-product-reactive.component";
import { EditProductComponent } from "./edit-product/edit-product.component";
import { ProductService } from "./product.service";
import { ProductV2Service } from "./product-v2.service";
@NgModule({
  imports: [CommonModule, SharedModule, FormsModule, ReactiveFormsModule],
  declarations: [
    ProductListComponent,
    ProductListItemComponent,
    AddProductComponent,
    AddProductReactiveComponent,
    EditProductComponent
  ],
  exports: [
    ProductListComponent,
    AddProductComponent,
    AddProductReactiveComponent,
    EditProductComponent
  ],
  providers: [
    { provide: ProductService, useClass: ProductV2Service },
    { provide: "AK", useValue: "ed@#$%f%$%h(*G" },
    { provide: "AU", useValue: "http://localhost:4000/api" },
    {
      provide: "PS",
      useFactory: function() {
        return new ProductService();
      }
    }
  ]
})
export class ProductsModule {}
