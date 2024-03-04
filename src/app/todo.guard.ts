import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable(
  {
    providedIn:'root'
  }
)

export class todoAuthGuard implements CanActivate{

  constructor(private route:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   
    if(localStorage.getItem("user")!=null && localStorage.getItem("user")!=undefined && localStorage.getItem("user")!= ""){
       return true;
    }
     
    this.route.navigateByUrl('/')
    return false;

    }
  
}
