/* ----------------------------------------------------------------------------
  Purpose: contents of directory 
  --------------------- -------------------------------------------------------
  20210708 v_01.00 JRT: Create
  -----------------------------------------------------------------------------
*/ "use strict"; 
const{ServiceInterface,token,instance}=require("./common.microservice/controllerService");
module.exports={
	ms:{
	  token,
	  ServiceInterface
	},
	endPoint:instance,
	middlewareCors:instance.getCors()
};
