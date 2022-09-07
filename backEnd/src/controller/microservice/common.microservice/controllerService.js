/* ----------------------------------------------------------------------------
  Purpose: general service
  --------------------- -------------------------------------------------------
  20220906 v_01.00 JRT: Create
  -----------------------------------------------------------------------------
*/ "use strict";const{token,ServiceInterface}=require("./serviceSequelize.interface");class Service extends ServiceInterface{constructor(){super(),this.doStartMS("Service"),this.msSet_Path(__dirname)}}module.exports={ServiceInterface:ServiceInterface,token:token,instance:new Service};
