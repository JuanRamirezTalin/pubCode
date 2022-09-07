/* ----------------------------------------------------------------------------
  Purpose: factory of orm (object relational map)
  --------------------- -------------------------------------------------------
  20220610 v_01.00 JRT: Create
  -----------------------------------------------------------------------------
*/ 'use strict';
//- Implement dependencies
const
 DbInterface = require( './orm/db.interface' ),
 SequelizeDb = require( './orm/sequelize.db' );

class ORM_Factory
{
  doConexion( typeOrm='sequelize' )
  {
	  switch(typeOrm)
    {
	   case 'sequelize': return new SequelizeDb();
	  }

	  return new DbInterface();
  }
}

const instance = new ORM_Factory();

module.exports = {
  orm:instance
}
