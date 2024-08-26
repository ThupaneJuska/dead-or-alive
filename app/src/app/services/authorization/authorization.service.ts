/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from'@angular/router';

@Injectable({ providedIn: 'root' })
export class authorizationService implements CanActivate {
    canActivate():boolean
     {
       let data = sessionStorage.getItem("user");
       let _data = data ? JSON.parse(data) : {};

       console.log("Data", _data)

        if(_data.name){
            return true;
        }
        else{
            return false
        }  
     }
}
