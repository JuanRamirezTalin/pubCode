//-----------------------------------------------------------------------------
// Purpose: tools shared modules
//--------------------- -------------------------------------------------------
//  20220627 v_01.00 JRT: Create
//-----------------------------------------------------------------------------
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const MODULE = [
  CommonModule
, FormsModule
, ReactiveFormsModule
, HttpClientModule
, NgbModule
];

const COMPONENT =[];

const SERVICE =[];

@NgModule({
  imports: [ MODULE ]
, exports: [ MODULE ]
, declarations: []
, providers: []
 })
 export class CommonToolShareModule {}
