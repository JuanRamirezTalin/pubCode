//-----------------------------------------------------------------------------
// Purpose: initial template of application
//--------------------- -------------------------------------------------------
// 20220602 v_01.00 JRT: Create
//-----------------------------------------------------------------------------
  import { Component } from '@angular/core';
  import { AppInitShareService } from '@appShared/index'
  
@Component({
  selector: 'app-root'
, templateUrl:'./app.component.html'
, providers: []
})
export class AppComponent
{
  constructor( private _service:AppInitShareService ){
   this._service.doSettingStart();
  }
}
