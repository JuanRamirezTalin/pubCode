//-----------------------------------------------------------------------------
// Purpose : route lazy -> component's administration
//--------------------- -------------------------------------------------------
// 20220720: v_01.00 JRT: Create
//-----------------------------------------------------------------------------
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

 import { RolesComponent } from './roles/roles.component';

const routes: Routes = [
  { path:'',
    children:[
      { path:'rol', component: RolesComponent  }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule { }
