//-----------------------------------------------------------------------------
// Purpose : menu model
//--------------------- -------------------------------------------------------
// 20220717: v_01.00 JRT: Create
//-----------------------------------------------------------------------------
import { ModelInterface } from './model.interface';

export class OpcionModel
       implements ModelInterface{
    ICON='';
    DESCRIPTION='';
    END_POINT='';
    constructor( icon='', description='',end_point =''){
     this.ICON = icon;
     this.DESCRIPTION= description;
     this.END_POINT = end_point;
    }
};

export class MenuModel
       implements ModelInterface{
    ICON='';
    DESCRIPTION='';
    END_POINT='';
    ID_REF_DOM='';
    OPTION:Array<OpcionModel>=[];

    constructor( icon='', description='',end_point =''){
     this.ICON = icon;
     this.DESCRIPTION= description;
     this.END_POINT = end_point;
    }
}
