//-----------------------------------------------------------------------------
// Purpose : roles model
//--------------------- -------------------------------------------------------
// 20220722: v_01.00 JRT: Create
//-----------------------------------------------------------------------------
import { ModelInterface, ActiveYN } from '@appModel/index';

export class RolesModel
       implements ModelInterface{
    ROL_ID:number=0;
    ROL_CVE:string='';
    DESCRIPTION:string='';
    IMAGE:string='';
    ROL_PERM:string='00000000';
    ACTIVE_YN:ActiveYN= ActiveYN.N;
}
