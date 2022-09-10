//-----------------------------------------------------------------------------
// Purpose : extend service for component
//--------------------- -------------------------------------------------------
// 20220811: v_01.00 JRT: Create
//-----------------------------------------------------------------------------
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ServiceInterface } from './service.interface';
import { AppShareService, AppTemplateShareService } from '@appShared/index';

@Injectable({
  providedIn: 'root'
})
export class ServiceComponent 
       implements ServiceInterface{
//- attributes
  private _itemHtmlAnt:any=undefined;
  private _nameColTableSort:Array<string>=[];

  private _formIsRefresh:boolean = false;
  private _formResultDB:string ='';
  private _formIsProcess:boolean = false;

  protected nameDOM_Id:Array<string> =[];
  protected nameFieldDb:Array<string>=[];

  protected _formGrp!:FormGroup;
  protected _template!:AppTemplateShareService;
  protected _serviceApp!:AppShareService;
  
  constructor() {}

//- propeties
  public get BtnMenu    (){ return this._template.aBtnMenuApp;}
  public get PageCurrent():number { return this._template.aCurrentPage;}
  public get PageItems  ():number { return this._template.aPageItems;}
  public get PageTotal  ():number { return this._template.aTotalPage;}
  public get TotalItems ():number { return this._template.aTotalItems;}
  public get ImgRefresh ():boolean{ return this._template.aImgRefresh;}

  public get isRefresh  ():boolean{ return this._formIsRefresh;}
  public get resultDB   ():string { return this._formResultDB;}
  public get isProcess  ():boolean{ return this._formIsProcess;}
  public get formGrp    ():FormGroup{ return this._formGrp; }

//- methods dos
  protected doInitialFormInternal():void{
    this._formResultDB = '';
    this._formIsRefresh= false;
    this._formIsProcess= false;
    this._formGrp.reset();
  }

  protected doDestroyInternal():void{
    this._template.aBtnMenuApp = { button:[] };
    this._itemHtmlAnt  = undefined;
    this._nameColTableSort = [];
    this._formGrp.clearValidators;
  }
//- methods gets
//- methods sets
  public setNameColTableSort(nameCol:Array<string>){ this._nameColTableSort=nameCol;}

//- methods-Data's Browse
  public doBrowseData( router:string ):void{
    this._template.doInitialCheckBoxTbodyID();

    this.setImgRefresh(true);
    const SELF = this,
          END_POINT= router.concat( this._template.PaginationSearchSort );
    this._serviceApp.doSend('get',END_POINT,'')
        .subscribe({ next(data){ SELF._applyMsgData(data)} });
  }

  public doSaveCurrentRecord( endPoint:string, data:any ){

    if( this._formIsProcess ){ return; }

    const SELF = this;
    this._formIsProcess = true;
    this._formIsRefresh = true;
    this._formResultDB  = '';
    this._serviceApp.doSend( 'post', endPoint, data )
        .subscribe({ next(data){ 
          SELF._applyMsgData(data, false);
          SELF._formIsRefresh = false;
       
          if(SELF._serviceApp.CodeMessage !== 'OK'){
            SELF._formResultDB = 'NO Registrado';
          }else{ SELF._formResultDB = 'Registrado'; }
        } });
   }
  
  public doDeleteCurrentRecord( endPoint:string, id:any){
    const END_POINT= endPoint.concat( '/' ).concat(id);
    return this._serviceApp.doSend('delete',END_POINT, null);
  }

  private _applyMsgData(msg_data:any, isBrowse:boolean=true):void{
    this._serviceApp.doDelay(3000);

    if( isBrowse ){ this.setImgRefresh(false); }

    this._serviceApp.setMessage( msg_data );

    if( this._serviceApp.isMessagError() ){ return; }

    if( !isBrowse ){ return; }
    this.setPaginationData( this._serviceApp.Data );  
  }

//- methods- FORM
  public doCloseForm ():void{ this._template.doInitialCheckBoxTbodyID(); }
  public doDeleteForm():void{ console.log('overwrite functionality');}
  public doValidForm(controlName:string):boolean{ return this._serviceApp.doValidForm(this._formGrp,'form-message', controlName);}

  protected setSettingForm(fB:FormBuilder, setting:any):void{ this._formGrp = this._serviceApp.setSettingForm(fB, setting); }
  public setResultDB(msg:string):void { this._formResultDB = msg;}

//- methods-TABLE-TBODY-list.checked
  public validCheckBoxTbodyID( nRow:number, chk:any ):void{ console.log('overwrite functionality');}

//- methods-SEARCH
  public setSearchSetting():void{ 
    let result = '',
      next:number = 0;

    for( let elem of this.nameDOM_Id){
      const newValue = this._serviceApp.getById(elem).value;
      result += this._template.doNewSearch(this.nameFieldDb[next++], newValue, result); 
    }

    const ST=this._serviceApp.getById('status').value;
    result += this._template.doNewSearchSt(ST,result);

    this._template.setSearch(result);  
  }

  public doSearchSortInitial():void{
    for( let elem of this.nameDOM_Id){ this._serviceApp.getById(elem).value = ''; }
      this._template.doSearchSortInitial();
  }

//- methods-PAGINATION
  public setPaginationData(data:any):void{
    console.log('overwrite functionality & include at first row: this._template.doPagination(data);'); 
    this._template.doPagination(data);
  }

  public setPageCurrent(pag:number):void{ this._template.aCurrentPage = pag;}
  public setPageItems(items:number):void{ this._template.aPageItems = items;}

//- methods SORT
  public setSortColumn(noCol:number):void{
    const ORDER:string = this._template.setSortColumn(noCol),
          itemSpan = document.createElement('span');
          itemSpan!.innerHTML = ORDER;

    let labelArrow = '';
    if( this._nameColTableSort.length > noCol ){
      labelArrow = this._nameColTableSort[noCol];
    }else{ return; }

    const itemHtml = document.getElementById('idTh'.concat(labelArrow));
    if( this._itemHtmlAnt ){
      this._template.doRemoveArrowTh(this._itemHtmlAnt); 
    }
    this._itemHtmlAnt = itemHtml;
    itemHtml?.append( itemSpan);    
  }

//- methods ImageRefresh
  public setImgRefresh(view:boolean):void{ this._template.aImgRefresh = view;}

//- methods ACTION MENU
  public doActionRDH(menu:string):void{ console.log("accion menu: ", menu); }
}
