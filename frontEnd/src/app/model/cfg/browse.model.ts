//-----------------------------------------------------------------------------
// Purpose : data's browse model
//--------------------- -------------------------------------------------------
// 20220722: v_01.00 JRT: Create
//-----------------------------------------------------------------------------
import { ModelInterface } from './model.interface';

export class BrowseModel
       implements ModelInterface{
    totalPage:number   = 0;
    currentPage:number = 0;
    totalItems:number  = 0;
    pageItems:number   = 0;
    rows:Array<{}> = [];
}
