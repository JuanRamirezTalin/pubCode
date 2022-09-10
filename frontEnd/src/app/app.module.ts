//-----------------------------------------------------------------------------
//Purpose: module main of application
//--------------------- -------------------------------------------------------
//  20220602 v_01.00 JRT: Create
//-----------------------------------------------------------------------------
import { NgModule } from '@angular/core';
import { CommonShareModule } from '@appShared/common.share';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app_component/app.component';
import { MenuModule } from './controller/_menu/menu.module';

@NgModule({
  imports: [
    AppRoutingModule
  , CommonShareModule
  , MenuModule
  ]
, providers: []
, declarations: [ AppComponent ]
, bootstrap: [AppComponent]
})
export class AppModule { }
