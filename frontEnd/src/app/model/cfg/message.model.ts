//-----------------------------------------------------------------------------
// Purpose : user model
//--------------------- -------------------------------------------------------
// 20220606: v_01.00 JRT: Create
//-----------------------------------------------------------------------------
import { ModelInterface } from './model.interface';

export class MessageModel
      implements ModelInterface{
   status:string = "";
   ok:boolean = false;

   id:string = "";
   cod:string = "";
   isError:boolean = false;
   typeMsg:string = "";
   description:string = "";
   message:string ="";

   data:Object = {};
   error:Object = {};
}

export class MessageInternalModel
      implements ModelInterface{
   id:string = "";
   cod:string = "";
   isError:boolean = false;
   typeMsg:string = "";
   description:string = "";
}
