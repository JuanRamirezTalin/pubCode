/* ----------------------------------------------------------------------------
  Purpose: microserve - endpoint - catalog roles
  --------------------- -------------------------------------------------------
  20220722 v_01.00 JRT: Create
  -----------------------------------------------------------------------------
*/ "use strict";
	const { instance, http, token } = require('./service'),

/* ----------
==| BIHAVIOUR
*/ doFindAllRoles = async (req=http.request,res=http.response) => {
	const NAME_METHOD = 'doFindAllRoles';
	await instance.apiExecute(NAME_METHOD, req, res);
  }
  
, doFindCtg = async (req=http.request,res=http.response) => {
	const NAME_METHOD = 'doFindCtg';
	await instance.apiExecute(NAME_METHOD, req, res);
  }

, doUpdateRecordRoles = async(req=http.request,res=http.response) => {
	const NAME_METHOD = 'doUpdateRoles';
	await instance.apiExecute(NAME_METHOD, req, res);
  }
  
, doDeleteRecordRoles = async(req=http.request,res=http.response) => {
	const NAME_METHOD = 'doDeleteRoles';
	await instance.apiExecute(NAME_METHOD, req, res);
  };

module.exports = {
  endPoint:instance
, middlewareCors:instance.getCors()
, token
, actionRol:{ doFindAllRoles
		 , doFindCtg
		 , doUpdateRecordRoles
		 , doDeleteRecordRoles
		 }
};
