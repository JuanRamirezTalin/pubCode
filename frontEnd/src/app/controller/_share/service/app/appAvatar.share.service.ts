//-----------------------------------------------------------------------------
// Purpose : avatar service
//--------------------- -------------------------------------------------------
// 20220711: v_01.00 JRT: Create
//-----------------------------------------------------------------------------
import { Injectable } from '@angular/core';
import { UserModel, DirectoryModel, ServiceKmodel } from '@appModel/index';

@Injectable({ providedIn: 'root' })
export class AppAvatarShareService
       extends ServiceKmodel {
//- attributes
  private _user:UserModel = new UserModel();

  constructor() { super(); }

//- methods gets
 public getAvatar(){
  this._doSettingUser();
  return this.getImgAvatar( this._user.isMan, this._user.avatar );
 }

 public getImgAvatar(isMan:boolean, avatar:string):string{
  let returnAvatar:string = (isMan)?'Man':'Woman',
      directory:string= this._doNameDirectory(avatar);
  
  if( directory === '' ){ return ''; }

  returnAvatar = (avatar !== null)? avatar : returnAvatar.concat('.png');

  return directory.concat(returnAvatar);
 }

//- 
  private _doSettingUser():void{
    const dataUser:any = localStorage.getItem(this.k_USER);
    this._user = ( ( dataUser === null ) ? null : JSON.parse(dataUser) );
  }

  private _doNameDirectory(avatar:string):string{
    const CURRENT_DIRECTORY:any = localStorage.getItem(this.k_DIRECTORY),
          DATA:Array<DirectoryModel> = ( CURRENT_DIRECTORY === null ) ? [] : JSON.parse(CURRENT_DIRECTORY);
    
    if( DATA.length === 0){ return ''; }

    let currentDir = DATA.find( e => e.id === 'avatar' ),
        directory:string= '',
        url:string='';

    directory= currentDir?.directory || '';
    url=currentDir?.service_url.concat(':').concat(currentDir?.service_port) || '';

    if( directory === '' && url === '' ){ return ''; }

    if( avatar === null){ return directory.concat("/"); }
    return url.concat("/image/avatar/");
  }
}
