//-----------------------------------------------------------------------------
// Purpose : component of menu
//--------------------- -------------------------------------------------------
// 20220624: v_01.00 JRT: Create
//-----------------------------------------------------------------------------
import { Component, OnInit } from '@angular/core';
import { AppShareService } from '@appShared/index';
import { MenuModel } from '@appModel/index';

@Component({
  selector: 'csh-menu'
, templateUrl: './menu.component.html'
, styleUrls: []
})
export class MenuComponent 
       implements OnInit {
//- attributes
  public aMnuPerfilSetting:string = '*Conf';
  public aMnuExit:string = '*Salir';
  public aMnuTitle = '*Menu';

  public aMnuModule:Array<MenuModel> = [];
  public aMnuDirImg:string = '';

  private _IntervalCheck:any;

  constructor(private _service:AppShareService){}

//- methods ngOns
  ngOnInit(): void {
    this._doTranslate();
    this._IntervalChecks();
    this._doMenu();
  }

//- methods dos
  private _doMenu(){
    const SELF = this,
    MNU_INTERVAL= setInterval(()=>{
      const MNU_DATA= localStorage.getItem(SELF._service.k_MENU);

      SELF.aMnuDirImg = '';
      SELF.aMnuModule = (MNU_DATA === null) ? [] : JSON.parse(MNU_DATA);
      if(SELF.aMnuModule.length === 0){ return; }

      clearInterval( MNU_INTERVAL);
      SELF.aMnuDirImg = this._service.getDirectoryName('menu');
      let num:number=0;

      SELF.aMnuModule.forEach(e=>{
        e.ID_REF_DOM = 'mnu_'.concat(num.toString());
        num++;
      });
    },2000);
  }

  private _doTranslate(){
    let labelClose = this._service.doTranslate('Cerrar'),
        qs = this._service.getSelector('#canvasClose');
        qs.setAttribute('data-ToolTipTitle', labelClose);

    this.aMnuPerfilSetting= this._service.doTranslate(this.aMnuPerfilSetting);
    this.aMnuExit= this._service.doTranslate(this.aMnuExit);
    this.aMnuTitle= this._service.doTranslate(this.aMnuTitle);
  }

  private _doSetting():void{ this._service.getById('avatarImg2').src = this._service.getAvatar(); }

  private _IntervalChecks():void{
    this._IntervalCheck = setInterval(()=>{
      const avatar = this._service.getAvatar();
      if( avatar !== '' ){
        this._doSetting();
      }
    },1000)
  }
//- methods ons
  public onLogout():void{ this._service.doLogout(); }
  public onSetting():void{
    this._service.getById('Btnprofile').click();
    this._service.getById('canvasClose').click();
    this._service.doRouter('setting');
  }
  public onSelectOption( idModule:number, idOption:number):void{
    const ID_MENU= this._service.getById('canvasClose'), 
          END_POINT = this.aMnuModule[idModule].END_POINT.concat(this.aMnuModule[idModule].OPTION[idOption].END_POINT);

    ID_MENU.click();
    
    if(END_POINT.length === 0 ){ return; }
    this._service.doRouter( END_POINT ); 
  }
}
