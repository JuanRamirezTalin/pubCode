//-----------------------------------------------------------------------------
// Purpose : connect model
//--------------------- -------------------------------------------------------
// 20220609: v_01.00 JRT: Create
//-----------------------------------------------------------------------------
import { ModelInterface } from './model.interface';

export class ConnectModel
       implements ModelInterface{
   id:string     = '';
   url:string    = '';
   port:number   = 0;
   token:string  = '';
   urlHeader:any = {};
}
