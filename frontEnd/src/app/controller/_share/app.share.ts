//-----------------------------------------------------------------------------
// Purpose: shared modules
//--------------------- -------------------------------------------------------
//  20220422 v_01.00 JRT: Create
//-----------------------------------------------------------------------------
import { NgModule } from '@angular/core';
import { CommonToolShareModule } from './commonTools.share';
import { AppShareService, AppMessageShareService } from './';
import { AppBtnMenuShareComponent, AppPaginationComponent } from './component';

const MODULE = [ CommonToolShareModule ];
const COMPONENT = [ AppBtnMenuShareComponent, AppPaginationComponent ];

const SERVICE =[ 
  AppShareService
, AppMessageShareService 
];

@NgModule({
  imports: [ MODULE ]
, exports: [ MODULE, COMPONENT ]
, declarations: [ COMPONENT ]
, providers: [ SERVICE ]
 })
 export class AppShareModule {}
