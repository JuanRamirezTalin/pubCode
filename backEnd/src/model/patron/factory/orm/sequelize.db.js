/* ----------------------------------------------------------------------------
  Purpose: setting of sequelize
  --------------------- -------------------------------------------------------
  20220610 v_01.00 JRT: Create
  -----------------------------------------------------------------------------
*/ 'use strict';
//- Implement dependencies
const 
	{ Sequelize } = require( 'sequelize' ),
	  DbInterface = require( './db.interface' );

module.exports = class SequelizeDb
		extends DbInterface
{
//- methods is	
	async isConfig( db, pdialect='mysql',plogging=false )
	{
		const newDialect = ( db.dialect ) ? db.dialect : pdialect; 
		  let isConfig = true;
		this.setError( null );
		
		try{
			this._ORM = new Sequelize( db.database, db.user, db.password,
			{
				host: db.host,
				port: db.port,
				dialect: newDialect,
				query:{raw:true},
				logging: plogging
			});
			
		}catch( error ){ this.setError( error ); isConfig = false; }
		return isConfig
	}

//- methods dos
	async doTestDB(){
		let result = false;
		this.setError(null);

		try{
			result = await this._ORM.authenticate()
								   .then( ()=>{ return true; })
								   .catch(err=>{ this.setError(err); });
		}catch(error){ this.setError( error ); }

		if( result === undefined ){ 
			this.setError( "check of configuration database" );
			result = false; 
		}
		return result;
	}
}
