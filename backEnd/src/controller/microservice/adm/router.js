/* ----------------------------------------------------------------------------
  Purpose: microservice - endpoint - manager application
  --------------------- -------------------------------------------------------
  20220820 v_01.05 JRT: Update-Api ctg. roles
  20220816 v_01.04 JRT: Update-Ctg.Users
  20220722 v_01.03 JRT: Update-Ctg.Roles
  20220716 v_01.02 JRT: Update-Menu
  20220629 v_01.01 JRT: Setting-Perfil user
  20220609 v_01.00 JRT: Create-Auth
  -----------------------------------------------------------------------------
*/ "use strict";
   const { endPoint, middlewareCors, token, actionAuth }=require("./auth/controller");
   const { uploadFile, actionSet } = require( "./setting/controller" );
   const { actionMnu } = require( "./menu/controller" );
   const { actionRol } = require( "./roles/controller" );
   const { actionUser } = require( "./users/controller" );

//- 20220609: authentification
endPoint.getRouter()
	    .post( "/api/auth"
,[ middlewareCors(), token.doValidApi ]
,  actionAuth.doAuthentication ),

//- 20220629: Setting-Perfil user
endPoint.getRouter()
        .post( "/api/setting"
, [ middlewareCors(), token.doValidApi, uploadFile().single('formFileSm') ]
, actionSet.doSetting ),

//- 20220716: Update-Menu
endPoint.getRouter()
	    .post( "/api/menu"
, [ middlewareCors(), token.doValidApi, token.doValid ]
, actionMnu.doMenu ),

//- 20220722: Ctg.Roles
endPoint.getRouter()
	    .get( "/api/adm/roles"
, [ middlewareCors(), token.doValidApi, token.doValid ]
, actionRol.doFindAllRoles ),

endPoint.getRouter()
//- 20220820: api ctg. roles
	    .get( "/api/adm/roles/ctg"
, [ middlewareCors(), token.doValidApi, token.doValid ]
, actionRol.doFindCtg ),

endPoint.getRouter()
		.post( "/api/adm/roles"
, [ middlewareCors(), token.doValidApi, token.doValid ]
, actionRol.doUpdateRecordRoles ),

endPoint.getRouter()
		.delete( "/api/adm/roles/:id"
, [ middlewareCors(), token.doValidApi, token.doValid ]
, actionRol.doDeleteRecordRoles ),

//- 20220816: Ctg.Users
endPoint.getRouter()
		.get( "/api/adm/users"
, [ middlewareCors(), token.doValidApi, token.doValid ]
, actionUser.doFindAllUsers),

endPoint.getRouter()
		.post( "/api/adm/users"
, [ middlewareCors(), token.doValidApi, token.doValid ]
, actionUser.doUpdateRecordUsers),

endPoint.getRouter()
		.delete( "/api/adm/users/:id"
, [ middlewareCors(), token.doValidApi, token.doValid ]
, actionUser.doDeleteRecordUsers)

//- EXPORTS
,module.exports=endPoint.getRouter();
