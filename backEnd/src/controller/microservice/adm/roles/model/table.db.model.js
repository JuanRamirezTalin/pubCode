/* ----------------------------------------------------------------------------
  Purpose: model of si_adm_ctg_rol
  --------------------- -------------------------------------------------------
  20220722 v_01.00 JRT: Create
  -----------------------------------------------------------------------------
*/ "use strict";

module.exports = (sequelize,Sequelize) => 
{
 const TablaModel = sequelize.define(
  'rol'
, { ROL_ID:Sequelize.INTEGER,
	ROL_CVE:Sequelize.STRING,
	DESCRIPTION:Sequelize.STRING,
	IMAGE:Sequelize.STRING,
	ROL_PERM:Sequelize.STRING,
	ACTIVE_YN:Sequelize.ENUM('Y','N'),
	CREATE_AT:Sequelize.STRING,
	UPDATE_AT:Sequelize.STRING
  }
, { tableName: 'si_adm_ctg_rol',
	timestamps: false	
  });
  
  TablaModel.removeAttribute('id');
  return TablaModel;
}
