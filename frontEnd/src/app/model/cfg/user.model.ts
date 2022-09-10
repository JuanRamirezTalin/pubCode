//-----------------------------------------------------------------------------
// Purpose : user model
//--------------------- -------------------------------------------------------
// 20220606: v_01.00 JRT: Create
//-----------------------------------------------------------------------------
import { ModelInterface } from './model.interface';

export class UserModel
      implements ModelInterface{
   id:string ='';

   idusr:number = 0;
   avatar:string = '';
   userName:string = '';
   userPerm:string ='';
   isEmployee:boolean = false;
   idEmployee:number = 0;
   isMan:boolean = true;
   rolId:number = 0;
   rolImg:string = '';
   rolPerm:string = '';
   email:string = '';
   isLogin:boolean = false;
   isRolAdmin:boolean = false;
   isRolAdminSys:boolean = false;
   hasMultiRol:boolean = false;
   isUpdated:boolean = false;
}
