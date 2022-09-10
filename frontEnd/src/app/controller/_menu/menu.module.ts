/* ----------------------------------------------------------------------------
  Purpose : module of menu 
  --------------------- -------------------------------------------------------
  20220624: v_01.00 JRT: Create
  -----------------------------------------------------------------------------
*/
import { NgModule } from '@angular/core';

import { CommonShareModule } from '@appShared/common.share';
import { MenuComponent } from './menu/menu.component';
@NgModule({
  imports: [ CommonShareModule ]
, exports: [ MenuComponent]
, declarations: [ MenuComponent ]
})
export class MenuModule { }
