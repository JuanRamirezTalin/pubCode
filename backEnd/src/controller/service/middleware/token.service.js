/* ----------------------------------------------------------------------------
  Purpose: middleware token service
  --------------------- -------------------------------------------------------
  20220404 v_01.00 JRT: Create
  -----------------------------------------------------------------------------
*/ 'use strict';
//- Define Constants
const 
//- Implement dependencies
   { request, response } = require('express'),
       { BaseExtend } = require( '../../../model/class/baseExtendClass' );

//- =============
//- Define class
class TokenService 
      extends BaseExtend
{
//- constructor
   constructor()
   {
    super(); 
    this.doStart( 'MiddlewareService' );
   }  
}

//- ================
//- Instance
const instance = new TokenService ();

//- ==================
//- Define Middlewares
//- ==================
const midd_ValidTkApi = async (req = request, res=response, next) =>
{
   if( await instance.isTokenInValidApi( req.headers.idtkapi ) )
   {
      instance.doSendMessage(req, res);
      return;
   }
   next();
}

const midd_ValidToken = async (req = request, res=response, next) =>
{
   if( ! await instance.isValidIdToken( req.headers.idtoken ) )
   {  
      instance.doSendMessage(req, res);
      return;
   }
   next();
}

//- =======
//- Export
//- =======
module.exports = {
   middlewares:
   {
      doValidApi: midd_ValidTkApi
   ,  doValid: midd_ValidToken
   }
}
