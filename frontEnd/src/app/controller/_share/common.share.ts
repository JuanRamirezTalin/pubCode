//-----------------------------------------------------------------------------
// Purpose: shared modules
//--------------------- -------------------------------------------------------
//  20220422 v_01.00 JRT: Create
//-----------------------------------------------------------------------------
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonToolShareModule } from './commonTools.share';
import { HeaderShareComponent
      , FooterShareComponent
      , SignInShareComponent
      , AppInitShareService
      , AppShareService
      , AppMessageShareService
       } from './';

const MODULE = [
  BrowserModule
, CommonToolShareModule
];

const COMPONENT =[
  HeaderShareComponent
, FooterShareComponent
, SignInShareComponent
];

const SERVICE =[ 
  AppInitShareService
, AppShareService
, AppMessageShareService 
];

@NgModule({
  imports: [ MODULE ]
, exports: [ MODULE, COMPONENT ]
, declarations: [ COMPONENT ]
, providers: [ SERVICE ]
 })
 export class CommonShareModule {}
