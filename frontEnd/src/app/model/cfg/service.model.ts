//-----------------------------------------------------------------------------
// Purpose : service model
//--------------------- -------------------------------------------------------
// 20220608: v_01.00 JRT: Create
//-----------------------------------------------------------------------------
import { AppModel } from './app.model';
import { UserModel } from './user.model';
import { UseRolModel } from './user_rol.model';
import { DirectoryModel } from './directory.model';
import { ConnectModel } from './connect.model';
import { ServiceKmodel } from './service.k.model';

export class ServiceModel
      extends ServiceKmodel{

//- Attibute
private _avatar:string = '';

protected eAppLanguage:string  = 'Es';
protected eAppHeader:any = {};
private _UrlService:string = 'connect_3300';

   constructor(){ super(); this.doApplyLanguage(); }

//- methods dos
//- methods gets
//- methods identifications number service
//- methods Avatar
}
