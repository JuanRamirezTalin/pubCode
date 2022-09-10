//-----------------------------------------------------------------------------
// Purpose : user & rol model
// Note....: use for update's register in data base
//--------------------- -------------------------------------------------------
// 20220628: v_01.00 JRT: Create
//-----------------------------------------------------------------------------
import { ModelInterface } from './model.interface';

export class UseRolModel
      implements ModelInterface{
   USER_ID:number = 0;
   ROL_ID:number = 0;
   language:string ='';
}
