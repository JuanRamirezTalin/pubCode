//-----------------------------------------------------------------------------
// Purpose : roles services
//--------------------- -------------------------------------------------------
// 20220722: v_01.00 JRT: Create
//-----------------------------------------------------------------------------
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from "rxjs/operators";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AppShareService, AppTemplateShareService } from '@appShared/index';
import { RolesModel, RolesFormModel } from './';
import { convertirActiveYNumeric, isActive, ServiceComponent } from '@app/model';

@Injectable({
  providedIn: 'root'
})
export class RoleService
       extends ServiceComponent {
//- attributes
  public readonly endPointBrowse:string = '/api/adm/roles';

  private _Browse:Array<RolesModel>=[];
  private _currentData:RolesFormModel = new RolesFormModel();

  constructor( protected override _template:AppTemplateShareService,
               protected override _serviceApp:AppShareService
             ){ super(); }

//- methods dos
  public doSetting():void{
  //this._serviceMnuApp.setPermSearch();
  //- Setting: Help
  //  this._template.doPermHelp();
  //  this._template.doAddMnuHelp('Requisitos');
  //  this._template.doAddMnuHelp('Soporte');

  //  let MENU_PERM = false?this._serviceApp.k_MENU_PERM_DEFAULT:'11111000';
    this._template.doBtnSetting( /*MENU_PERM*/ );
  //- Setting: Reports
  //  this._template.doAddMnuReport('Consulta x Datos');

  //- Setting: Data(Import, Export UpLoad,...)
  // this._template.doAddMnuData('Importar');
  
  const CODE_SWAL= this._serviceApp.swalService;
        CODE_SWAL.doIdTemplateDefault();
  }

  public doInitial():void{
    this._Browse = [];
    this._currentData = new RolesFormModel();
    this.doInitialFormInternal();
  }
  public doDestroy():void{
    this.doInitial();
    this.doDestroyInternal();
  }

  public doViewMessageNotAuthorize():void{
    const CODE_SWAL= this._serviceApp.swalService;
    CODE_SWAL.doViewMsgERROR( CODE_SWAL.msgNotAuthorize );
  }

//- methods gets - properties
  public get Browse  (){ return this._Browse;}
  public get FormData(){ return this._currentData;}

//- methods- FORM
  public override doDeleteForm():void{
    const CODE_SWAL= this._serviceApp.swalService;
    let template = CODE_SWAL.FormSettingAllButton;

    if( this._currentData.ROL_ID < 3){
      CODE_SWAL.doViewMsgERROR( CODE_SWAL.msgNotAuthorize );
      return;
    }

    const CODE= '<div class="infoDiv">'.concat('<table>')
        .concat('<tr><th>Id:</th><td>').concat(this._currentData.ROL_ID.toString()).concat('</td></tr>')
        .concat('<tr><th>Clave:</th><td>').concat(this._currentData.ROL_CVE).concat('</td></tr>')
        .concat('<tr><th>Descripción:</th><td>').concat(this._currentData.DESCRIPTION).concat('</td></tr>')
        .concat('</table></div>'),
      END_POINT:string = this.endPointBrowse,
      ID:number = this._currentData.ROL_ID,
      SELF=this,
      MSG = '<h5 style="color:white">'.concat(CODE_SWAL.msgRecordDeleted).concat('</h5>');
    
    Object.assign( template, {
      title: MSG,
      icon: 'question',
      html: CODE
    });
    
    CODE_SWAL.doView( template).then((result)=>{
      if( !result.isConfirmed ){ return; }

      this._currentData = new RolesFormModel();
      this.doDeleteCurrentRecord( END_POINT, ID)
          .subscribe({ next(message){
            if(message.isError === false){ CODE_SWAL.doViewMsgOK(); }
            else{ CODE_SWAL.doViewMsgERROR( CODE_SWAL.msgRecordRelation); }
            SELF.doBrowseData( SELF.endPointBrowse );
          }}) 
    });

  }

 public setSettingFieldForm(fB:FormBuilder, dat:RolesFormModel):void{ 
  this.setSettingForm( fB, {
      id:[{value:dat.ROL_ID, disabled:true},[]],
      c1:[dat.ROL_CVE,[Validators.required, Validators.minLength(5)]],
      c2:[dat.DESCRIPTION,[Validators.required,Validators.minLength(5)]],
      c3:[dat.CHK_CREATER,[]],
      c4:[dat.CHK_REPORT,[]],
      c5:[dat.CHK_UPDATE,[]],
      c6:[dat.CHK_DELETE,[]],
      c7:[dat.CHK_DATA,[]],
      c8:[dat.CHK_UPLOAD,[]],
      c9:[dat.CHK_RESERV,[]],
      c10:[dat.CHK_RESERVX,[]],
      c11:[ isActive(dat.ACTIVE_YN), []]
    });
  const C1 = this._serviceApp.getById('c1');
        C1.disabled = (dat.ROL_ID > 0);
 }

//- methods-TABLE-TBODY-list.checked
 public override validCheckBoxTbodyID(nRow:number,chk:any):void{
   this._currentData = new RolesFormModel();

  if( this._template.doValidCheckBoxTbodyID(nRow,chk) ){
    const  CURRENT_RECORD = this._Browse.find(e=> e.ROL_ID === nRow);
    if( CURRENT_RECORD){
      this._currentData.ROL_ID     = CURRENT_RECORD?.ROL_ID;
      this._currentData.ROL_CVE    = CURRENT_RECORD?.ROL_CVE;
      this._currentData.DESCRIPTION= CURRENT_RECORD?.DESCRIPTION;
      this._currentData.ACTIVE_YN  = convertirActiveYNumeric( CURRENT_RECORD.ACTIVE_YN.toString() );
      this._currentData.IMAGE      = CURRENT_RECORD.IMAGE;
      this._currentData.CHK_CREATER= CURRENT_RECORD.ROL_PERM.charAt(0) === '0' ? false:true;
      this._currentData.CHK_REPORT = CURRENT_RECORD.ROL_PERM.charAt(1) === '0' ? false:true;
      this._currentData.CHK_UPDATE = CURRENT_RECORD.ROL_PERM.charAt(2) === '0' ? false:true;
      this._currentData.CHK_DELETE = CURRENT_RECORD.ROL_PERM.charAt(3) === '0' ? false:true;
      this._currentData.CHK_DATA   = CURRENT_RECORD.ROL_PERM.charAt(4) === '0' ? false:true;
      this._currentData.CHK_UPLOAD = CURRENT_RECORD.ROL_PERM.charAt(5) === '0' ? false:true;
      this._currentData.CHK_RESERV = CURRENT_RECORD.ROL_PERM.charAt(6) === '0' ? false:true;
      this._currentData.CHK_RESERVX = CURRENT_RECORD.ROL_PERM.charAt(7) === '0' ? false:true;
    }
  }
 }

//- methods-SEARCH
 public override setSearchSetting(){
  const CODE= this._serviceApp.getById('clave').value,
        DESCRIPTION= this._serviceApp.getById('descripcion').value,
        ST=this._serviceApp.getById('status').value;

  let newSearch  = this._template.doNewSearch('ROL_CVE',CODE); 
      newSearch += this._template.doNewSearch('DESCRIPTION',DESCRIPTION,newSearch);
      newSearch += this._template.doNewSearchSt(ST,newSearch);
  this._template.setSearch(newSearch);
 }

 public override doSearchSortInitial():void{
  this._serviceApp.getById('clave').value = '';
  this._serviceApp.getById('descripcion').value = ''; 
  this._template.doSearchSortInitial(); 
 }
 
//- methods-PAGINATION
 public override setPaginationData(data:any):void{
  this._template.doPagination(data);

  this._Browse = []; 
  of(this._template.BrowseData).pipe( map<any,Array<RolesModel>>(o=>o) )
                   .subscribe(r=> this._Browse=r);
 }
}
