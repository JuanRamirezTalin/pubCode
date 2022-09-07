/* ----------------------------------------------------------------------------
  Purpose: interface for database's manager
  --------------------- -------------------------------------------------------
  20220610 v_01.00 JRT: Create
  -----------------------------------------------------------------------------
*/ 'use strict';
//- Define Constants
module.exports = class DbInterface 
{
  constructor( _msgError = null, _ORM = null){}

  doTestDB(){}
  doCloseDB(){ this._ORM.close(); }

//- methods is
  isConfig( db, pdialect ){ return false; }
  isError(){ return ( this._msgError == null )?false : true; }

//- methods gets
  getError(){ return this._msgError; }
  getORM(){ return this._ORM; }

//- methods sets
  setError(error){ this._msgError = error; }
}
