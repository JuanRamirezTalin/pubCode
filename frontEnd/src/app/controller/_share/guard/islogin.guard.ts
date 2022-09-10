//-----------------------------------------------------------------------------
// Purpose : guard for access
// Note....: Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
//--------------------- -------------------------------------------------------
// 20220628: v_01.00 JRT: Create
//-----------------------------------------------------------------------------
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

import { ServiceModel, UserModel } from '@appModel/index';

@Injectable({ providedIn: 'root' })
export class IsloginGuard 
       extends ServiceModel
       implements CanActivate {

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{

      const USER:UserModel = this.getUser();
    return USER.isLogin;
  }
  
}
