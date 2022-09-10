//-----------------------------------------------------------------------------
// Purpose : component's form - roles
//--------------------- -------------------------------------------------------
// 20220729: v_01.00 JRT: Create
//-----------------------------------------------------------------------------
import { Component, Input, OnChanges, OnDestroy, HostListener, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RoleService, RolesFormModel} from '../';
import { isActive, ActiveYN } from '@appModel/index';

@Component({
  selector: 'adm-roles-form',
  templateUrl: './form.component.html',
  styleUrls: []
})
export class RolesFormComponent
       implements OnChanges, OnDestroy {
//- attributes
  @Input ('data') aformDat:RolesFormModel = new RolesFormModel();
  @Output('btnClose') aBtnActionClose = new EventEmitter();

  public alabelTitle:string = 'ctg. roles'
  public isActive= isActive;

  constructor(private _formBuild:FormBuilder,
              public service:RoleService
             ) {}

//- ngOns
  ngOnChanges(changes: SimpleChanges): void {
    const { aformDat } = changes;
    if( !aformDat.currentValue ){ return; }

    this._doBuildForm(); 
  }

  @HostListener('unloaded')
  ngOnDestroy(){ this.aformDat=new RolesFormModel(); }

//- methods ons
 public onClose():void{   
  this.aformDat= new RolesFormModel();
  this.service.doInitial();
  this.aBtnActionClose.emit();
 }

 public onChange(id:string, domHtml:any):void{
    switch(id){
      case 'c1': this.aformDat.ROL_CVE = domHtml.value; break;
      case 'c2': this.aformDat.DESCRIPTION = domHtml.value; break;

      case 'c3': this.aformDat.CHK_CREATER = domHtml.checked; break;
      case 'c4': this.aformDat.CHK_REPORT  = domHtml.checked; break;
      case 'c5': this.aformDat.CHK_UPDATE  = domHtml.checked; break;
      case 'c6': this.aformDat.CHK_DELETE  = domHtml.checked; break;
      case 'c7': this.aformDat.CHK_DATA    = domHtml.checked; break;
      case 'c8': this.aformDat.CHK_UPLOAD  = domHtml.checked; break;
      
      case 'c11': this.aformDat.ACTIVE_YN  = (domHtml.checked?ActiveYN.Y:ActiveYN.N); break;
    };
 }

 public onSend():void{ 
  if( this.aformDat.ROL_ID ===  2 ){
    this.service.doViewMessageNotAuthorize();
    return;
  }
  this.service.doSaveCurrentRecord( this.service.endPointBrowse, this.aformDat ); 
 }

//- methods dos - private
 private _doBuildForm():void{ this.service.setSettingFieldForm( this._formBuild, this.aformDat); }

}
