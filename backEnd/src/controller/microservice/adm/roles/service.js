/* ----------------------------------------------------------------------------
  Purpose: catalog roles - service
  --------------------- -------------------------------------------------------
  20220715 v_01.00 JRT: Create
  -----------------------------------------------------------------------------
*/ "use strict";
const { request, response } = require( 'express' ),
	  { ms } = require( '../..' );

class RolesService 
	  extends ms.ServiceInterface
{
	LST_MSG_REQUEST=[
		['No hay Registro', 'Not Records' ],
		['Ctg.Roles','Ctg.Roles']
	];
	  
	constructor(){ 
		super(),
		this.doStartMS( "RolesService" );
		this.msSet_Path(__dirname);
	}

//- method setting
	msSettingApp(){
	/* call by: this._msSettingConnectForm()
	*/ this.MODEL_FILE = 'model/table.db.model';
	   this.MODEL_ATTRIBUTES = [ 'ROL_ID','ROL_CVE','DESCRIPTION','IMAGE','ROL_PERM','ACTIVE_YN' ];
	   this.WHERE = {};
	   this.MODEL_CTG_QUERY = {attributes:['ROL_ID', 'ROL_CVE', 'DESCRIPTION', 'ACTIVE_YN']};
	}
	
//- methods dos : CRUD
/*** Query with pagination and sort, to apply method: msSettingAppSearchOrder
	async msSettingFindAll(req); 
***/
	async doViewCtg(req=request){
	/* Proposite: to view catalog of roles general
	*/ const NAME_METHOD = 'doViewCtg';
	   if( ! await this._msSettingConnectForm() ){ return; }
	   await this.msFindAllModelCtg();
	}

	async doUpdate(req=request){
	/* Proposite: to apply at create and update record in database
	*/  const NAME_METHOD = 'doUpdate';
		
		if( ! await this._msSettingConnectForm() ){ return; }
		
		const { ROL_ID, ROL_CVE, DESCRIPTION, IMAGE,
                CHK_CREATER,CHK_REPORT,CHK_UPDATE,
                CHK_DELETE, CHK_DATA,  CHK_UPLOAD,
                CHK_RESERV, CHK_RESERVX, ACTIVE_YN
			  } = req.body;
				
		let CREATE_AT = null,
		    UPDATE_AT = null,
			DATA  = '',
			WHERE = {ROL_ID};
			
		const ROL_PERM = ''.concat( CHK_CREATER?'1':'0').concat( CHK_REPORT?'1':'0')
		                   .concat( CHK_UPDATE?'1':'0' ).concat( CHK_DELETE?'1':'0')
						   .concat( CHK_DATA?'1':'0'   ).concat( CHK_UPLOAD?'1':'0')
						   .concat( CHK_RESERV?'1':'0' ).concat( CHK_RESERVX?'1':'0');

		if( ROL_ID === 0 ){ 
		    CREATE_AT = await this.msGetLogDate();
		    DATA = { ROL_ID, ROL_CVE, DESCRIPTION, IMAGE, ROL_PERM, ACTIVE_YN, CREATE_AT };
			await this.doCreateMS( DATA );
			return;
		}
		
		UPDATE_AT = await this.msGetLogDate();
		DATA = { ROL_ID, ROL_CVE, DESCRIPTION, IMAGE, ROL_PERM, ACTIVE_YN, UPDATE_AT };
		await this.doUpdateMS( DATA, WHERE );
	}

	async doDelete(req=request){
	/* Proposite: to apply delete record in database
	*/  const NAME_METHOD = 'doDelete',
			  {id} = req.params;
		
		if( ! await this._msSettingConnectForm() ){ return; }
			this.WHERE = {ROL_ID: id};
			await this.doDeleteMS();
	}

//- methods setting: SEARCH AND ORDER 
//  -------------------------------------
	msSettingAppSearchOrder(req=request){
	  this.setMethod( 'doSettingSearchOrder' );
	  const { ROL_CVE, DESCRIPTION, ST, SORT } = req.query;

	  let whrRolCve = '',
	      whrDescrip= '',
		  whrSt= '';

	//- setting - where  
	  this.WHERE = {};
	  
	  if(ROL_CVE){
		whrRolCve = this.doSettingWhere( ROL_CVE);
		whrRolCve = (whrRolCve === '')?{ ROL_CVE }:{ ROL_CVE : whrRolCve};		
	  }
	  
	  if(DESCRIPTION){
		whrDescrip = this.doSettingWhere(DESCRIPTION);
		whrDescrip = (whrDescrip === '')?{ DESCRIPTION }:{ DESCRIPTION : whrDescrip};
	  }
	  	  
	  if(whrRolCve === '' && whrDescrip !== ''){ whrRolCve = whrDescrip; }
	  else { Object.assign(whrRolCve,whrDescrip); }
	  
	  if(ST){
	    whrSt = {ACTIVE_YN : ST};
				
		if(whrRolCve === ''){ whrRolCve = whrSt; }
		else{ Object.assign(whrRolCve,whrSt); }
	  }
	  this.WHERE = whrRolCve;

	//- setting - order
	  this.ORDER = [];
	  if(!SORT){ return; }
	  const SORT_Order = this.doSettingOrder(['ROL_ID','ROL_CVE','DESCRIPTION'],SORT);
	  this.ORDER = [ SORT_Order ];
	}

//  -----------------------------------------------------
//- methods API-execute
//  -----------------------------------------------------
	async apiExecute( method, req=request, res=response ){
		try{
			this.setMethod( method );
			
			await this.msDoInitial();
			await this.msSettingGlobal(req);

			switch( method ){
			case 'doFindAllRoles': await this.msSettingFindAll(req); break;
			case 'doUpdateRoles' : await this.doUpdate(req); break;
			case 'doDeleteRoles' : await this.doDelete(req); break;
			case 'doFindCtg'     : await this.doViewCtg(req); break;
			default:
				this.msSet_ErrorOcurrent('apiExecute','Method Is Not Implementation...');
			}

		}catch(error){
			do{
				if( this.msIsError() ){ break; }
				await this.msSet_ErrorOcurrent( method, error );
			}while(false);
		}finally{ this.doSendMessage(req, res); }
	}
}

module.exports = {
  instance:new RolesService()
, http:{request,response}
, model:{}
,token:ms.token
};
