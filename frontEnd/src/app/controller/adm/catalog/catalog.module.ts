/* ----------------------------------------------------------------------------
  Purpose : module of catalog of application 
  --------------------- -------------------------------------------------------
  20220720: v_01.00 JRT: Create
  -----------------------------------------------------------------------------
*/
import { NgModule } from '@angular/core';

import { AppShareModule } from '@appShared/app.share';
import { CatalogRoutingModule } from './catalog-routing.module';

import { RolesComponent, RolesFormComponent } from './roles';

@NgModule({
  imports: [ AppShareModule, CatalogRoutingModule ]
, declarations: [
  RolesComponent, RolesFormComponent
  ]
})
export class CatalogModule { }
