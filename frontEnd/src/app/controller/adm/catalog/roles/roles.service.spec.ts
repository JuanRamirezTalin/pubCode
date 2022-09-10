//-----------------------------------------------------------------------------
// Purpose : roles services-test
//--------------------- -------------------------------------------------------
// 20220602: v_01.00 JRT: Create
//-----------------------------------------------------------------------------
import { TestBed } from '@angular/core/testing';

import { RoleService } from './roles.service';

xdescribe('RoleService', () => {
  let service: RoleService;

//-Definition Service
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoleService);
  });

//-Test  
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
