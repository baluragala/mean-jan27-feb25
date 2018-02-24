import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header.component";
import { FooterComponent } from "./footer/footer.component";
import { ToPowerPipe } from "./to-power.pipe";

@NgModule({
  imports: [CommonModule],
  declarations: [HeaderComponent, FooterComponent, ToPowerPipe],
  exports: [HeaderComponent, FooterComponent, ToPowerPipe]
})
export class SharedModule {}
