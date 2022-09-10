//-----------------------------------------------------------------------------
// Purpose : service K model
//--------------------- -------------------------------------------------------
// 20220824: v_01.00 JRT: Create
//-----------------------------------------------------------------------------
import { ServiceInterface } from './service.interface';

export class ServiceKmodel
       implements ServiceInterface {
/*APP-SETTING  */ public readonly k_SETTING:string = '108203305'; 
/*APP-USER     */ public readonly k_USER:string = '205302501';
/*APP-CONNECT  */ public readonly k_CONNECT:string = '303501802';
/*APP-DIRECTORY*/ public readonly k_DIRECTORY:string = '502808103';
/*APP-MENU     */ public readonly k_MENU:string = '801105203';

public readonly k_MENU_PERM_DEFAULT:string = '10110000';
public readonly k_LANGUAGE_DEFAULT:string = 'ES';

// SWAL:
public readonly BUTTON_COLOR_CANCEL:string= '#D33';
public readonly BUTTON_COLOR_CONFIRMATION:string= '#28C628';

public readonly BACKGROND_COLOR_GREEN:string= '#1D8B2EBF';
public readonly BACKGROND_COLOR_BLUE:string= '#03347CBF';
public readonly BACKGROND_COLOR_BROWN:string= "#B45405BF";
public readonly BACKGROND_COLOR_VINE:string= "#AC150ABF";

public readonly BUTTON_COLOR_CONFIRMATION_GREEN:string= '#268A2E';
public readonly BUTTON_COLOR_CONFIRMATION_BLUE:string = '#03347C';
public readonly BUTTON_COLOR_CONFIRMATION_BROWN:string= '#B45405';
public readonly BUTTON_COLOR_CONFIRMATION_VINE:string = '#AC150A';

public readonly COLOR_ERROR= '#DF0303';
   constructor(){}

//- methods dos
   public doDelay(ms:number){ return new Promise(resolve=>setTimeout(resolve, ms));}

//- methods gets
   public getSelector( select:string ):any{ return document.querySelector(select); }
   public getById( select:string ):any{ return document.getElementById(select);}
   public isEmpty(o:any):boolean{ return (Object.keys(o).length === 0); }

//- methods convert
   public convertToBoolean(s:string):boolean{ 
      switch(s.toLowerCase().trim()){
       case 'true':
       case 'yes':
       case 'y':
       case '1': return true;
      }
      return false;
   }

   public get UUID():string{
      const newDATE = new Date(),
          newMES= (newDATE.getMonth()+1) < 10? '0'.concat( (newDATE.getMonth()+1).toString()) : (newDATE.getMonth()+1).toString(),
          newDAY= newDATE.getDate() < 10? '0'.concat(newDATE.getDate().toString()): newDATE.getDate().toString(),
          newWEE= newDATE.getDay().toString();

      let newNumber = ''.concat(newDATE.getFullYear().toString()).concat(newWEE).concat(newMES).concat(newDAY)
                    .concat(newDATE.getHours().toString())
                    .concat(newDATE.getMinutes().toString()).concat(newDATE.getSeconds().toString())
                    .concat(newDATE.getMilliseconds().toString()).concat((1 + Math.random()).toString() );
      newNumber = newNumber.replace('.','');
      return newNumber;
   }

}
