import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanDeactivate
} from "@angular/router";
import { Observable } from "rxjs/Observable";
import { AddProductReactiveComponent } from "./add-product-reactive/add-product-reactive.component";

@Injectable()
export class UnfinishedGuard
  implements CanDeactivate<AddProductReactiveComponent> {
  canDeactivate(
    component: AddProductReactiveComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    let response = confirm("Would you like to leave?");
    if (response == true) {
      return true;
    } else {
      return false;
    }
  }
}
