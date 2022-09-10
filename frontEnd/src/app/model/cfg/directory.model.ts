//-----------------------------------------------------------------------------
// Purpose : directory model
// Note    : privilege = read,write | read | write
//--------------------- -------------------------------------------------------
// 20220623: v_01.00 JRT: Create
//-----------------------------------------------------------------------------
import { ModelInterface } from './model.interface';

export class DirectoryModel
       implements ModelInterface{
   id:string = '';
   directory:string = '';
   service_url:string='';
   service_port:string='';
   privilege:string = '';
   feature:string = '';
}
