/* ----------------------------------------------------------------------------
  Purpose: Middleware Setup 
  --------------------- -------------------------------------------------------
  20211206 v_01.00 JRT: Create
  -----------------------------------------------------------------------------
*/ 'use strict';
//- Define Constants
    const EXPRESS = '../expressApi.model',

//- Implement dependencies
    { express, router, application, cors, mySqlConn, jwt, instanceFolder, multipart, routeName
    } = require( EXPRESS ),
    session = require( 'express-session' ),    

//- --- middleware:sesion
    apiCnf = application.get( 'api_cnf' ),
    
    ses = {
     secret: apiCnf.system.secretKeyApi,
     resave: apiCnf.system.resave,
     saveUninitialized: apiCnf.system.saveUninitialized,
    };

    application.use( session( ses ) );

//- --- middleware: Static Folders
application.use( routeName.img, express.static( instanceFolder.getFolderImage() ) );
application.use( routeName.upload, express.static( instanceFolder.getFolderDownLoad() ) );

//- Export
module.exports = { 
 express,
 router,
 application,
 cors,
 mySqlConn,
 jwt,
 multipart
}
