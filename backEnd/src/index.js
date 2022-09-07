/* ----------------------------------------------------------------------------
  Purpose: setting backEnd-express 
  --------------------- -------------------------------------------------------
  20210917 v_01.00 JRT: Create
  -----------------------------------------------------------------------------
*/ 'use strict';
//- Define Constants
const 
    CONTROLLER = './controller',
    MODEL_BASE = './model/class/baseExtendClass',

//- Implement dependencies
           Api = require( MODEL_BASE ),
        newApi = new Api.BaseExtend(),
          cors = newApi.getCors(),
  serverOrigin = newApi.getConfig().network.serverOrigin;

//- Define middleware
    if( serverOrigin )
    {
        newApi.getApplication().use(
            cors( { origin: serverOrigin[0] } )
        );
    }

//- Define rutes
    require( CONTROLLER );

//- Service start
newApi.getApplication()
      .listen( newApi.getApplication()
                     .get( 'port' ), 
                     () =>
{
    console.log( ' Service FrontEnd : ', 
                 newApi.getApplication().get( 'port' ) 
               );
});
