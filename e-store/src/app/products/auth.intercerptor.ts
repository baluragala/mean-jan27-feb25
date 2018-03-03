import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEventType,
  HttpResponse,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/do";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const authReq = req.clone({
      headers: req.headers.set("X-API-TOKEN", "21swd33#4d5^&&dhs@")
    });

    return next.handle(authReq).do(
      (event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
        }
      },
      err => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 404) {
            alert("Not found");
          }
        }
      }
    );
  }
}
