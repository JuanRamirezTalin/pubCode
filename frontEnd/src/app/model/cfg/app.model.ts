//-----------------------------------------------------------------------------
// Purpose : setting's model application
//--------------------- -------------------------------------------------------
// 20220606: v_01.00 JRT: Create
//-----------------------------------------------------------------------------
import { ModelInterface } from './model.interface';
export class AppModel
       implements ModelInterface {
   appName:string = "";
   companyName:string = "";
   expiresInFact:number = 9;
   copyright:string = "";
   version:string = "";
   language:string = "";
   uuid:string = "";
}
