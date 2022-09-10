//-----------------------------------------------------------------------------
// Purpose : guard for access-test
//--------------------- -------------------------------------------------------
// 20220628: v_01.00 JRT: Create
//-----------------------------------------------------------------------------
import { TestBed } from '@angular/core/testing';

import { IsloginGuard } from './islogin.guard';

describe('IsloginGuard', () => {
  let guard: IsloginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsloginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
