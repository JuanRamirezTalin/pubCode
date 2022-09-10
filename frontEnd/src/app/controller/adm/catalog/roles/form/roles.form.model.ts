//-----------------------------------------------------------------------------
// Purpose : roles model
//--------------------- -------------------------------------------------------
// 20220722: v_01.00 JRT: Create
//-----------------------------------------------------------------------------
import { ModelInterface, ActiveYN } from '@appModel/index';

export class RolesFormModel
       implements ModelInterface{
    ROL_ID:number=0;
    ROL_CVE:string='';
    DESCRIPTION:string='';
    IMAGE:string='';

    CHK_CREATER:boolean= false;
    CHK_REPORT:boolean= false;
    CHK_UPDATE:boolean= false;
    CHK_DELETE:boolean= false;
    CHK_DATA:boolean= false;
    CHK_UPLOAD:boolean= false;
    CHK_RESERV:boolean= false;
    CHK_RESERVX:boolean= false;

    ACTIVE_YN:ActiveYN= ActiveYN.N;
}
