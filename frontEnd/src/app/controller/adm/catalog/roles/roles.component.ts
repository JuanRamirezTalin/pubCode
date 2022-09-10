//-----------------------------------------------------------------------------
// Purpose : rol's component
// Note    : don't modify, everything is defined in the service
//--------------------- -------------------------------------------------------
// 20220720: v_01.00 JRT: Create
//-----------------------------------------------------------------------------
import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { RoleService } from './roles.service';

@Component({
  selector: 'adm-roles',
  templateUrl: './roles.component.html',
  styleUrls: []
})
export class RolesComponent 
       implements OnInit, OnDestroy {
//- attributes
  public title:string = 'Catálogo de roles';
  constructor( public service:RoleService ){}

//- ngOns
  ngOnInit(): void{
   this._doSetting();
   this.onSearchApply();
  }

  @HostListener('unloaded')
  ngOnDestroy(){ this.service.doDestroy(); 
  }

//- methods privates
 private _doSetting():void{ 
  this.service.doSetting();
  this.service.setNameColTableSort(['Sec','Cod','Des'])
}
 private _doCallBrowseData():void{
   this.service.doBrowseData( this.service.endPointBrowse ); }

//- methods ons
//- ------- Search
 public onSearchApply():void{
  this.service.setSearchSetting();
  this._doCallBrowseData();
 }

 public onSearchClean():void{ this.service.doSearchSortInitial(); }

//- ------- Button Menu
 public onBtnMnuRefresh():void{ this._doCallBrowseData(); }

//- ------- Table
 public onTableSort(noCol:number):void{
  this.service.setSortColumn(noCol);
  this._doCallBrowseData();
 }

 public onTableRow(nRow:number,chk:any):void{ this.service.validCheckBoxTbodyID(nRow,chk);}

//- ------- Pagination
 public onUpdatePageCurrent(pag:number):void{
  this.service.setPageCurrent(pag);
  this._doCallBrowseData();
 }

 public onUpdatePageItems(items:number):void{
  this.service.setPageItems(items);
  this._doCallBrowseData();
 }

//- ------- Form
 public onFormClose():void{ 
  this.service.doCloseForm();
  this.onBtnMnuRefresh();
 }
}
