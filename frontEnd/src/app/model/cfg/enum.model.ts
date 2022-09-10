//-----------------------------------------------------------------------------
// Purpose : enum model
//--------------------- -------------------------------------------------------
// 20220722: v_01.00 JRT: Create
//-----------------------------------------------------------------------------
export enum ActiveYN{ Y=1, N=2 }
export function isActive(yn:number):boolean{ return(yn === ActiveYN.Y?true:false); }
export function convertirActiveYNumeric(active:string):number{ return( active.toUpperCase() === 'Y' ? ActiveYN.Y : ActiveYN.N); }

export enum EvaluateYN{ Y=1, N=2 }
export function isYes(yn:number):boolean{ return(yn === EvaluateYN.Y?true:false); }
export function convertirEvaluateYNumeric(yn:string):number{ return( yn.toUpperCase() === 'Y' ? EvaluateYN.Y : EvaluateYN.N); }
