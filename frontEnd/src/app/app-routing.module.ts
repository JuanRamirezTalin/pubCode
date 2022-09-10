//-----------------------------------------------------------------------------
// Purpose : routes of application
//--------------------- -------------------------------------------------------
// 20220627: v_01.00 JRT: Create
//-----------------------------------------------------------------------------
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IsloginGuard } from './controller/_share/guard/islogin.guard';
import { HomeComponent } from './controller/adm'

const routes: Routes = [
  { path:'', component: HomeComponent}
, { path:'home', component: HomeComponent}

, { path:'setting', 
   loadChildren:()=> import('./controller/adm/setting/setting.module').then(m=>m.SettingModule),canActivate:[IsloginGuard] }
, { path:'admin', 
   loadChildren:()=> import('./controller/adm/catalog/catalog.module').then(m=>m.CatalogModule) }
  
, { path:'', redirectTo:'/', pathMatch:'full' }
, { path:'**', redirectTo:'/', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
