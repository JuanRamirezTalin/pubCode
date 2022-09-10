//-----------------------------------------------------------------------------
// Purpose :avatar service-test
//--------------------- -------------------------------------------------------
// 20220711: v_01.00 JRT: Create
//-----------------------------------------------------------------------------
import { TestBed } from '@angular/core/testing';

import { AppAvatarShareService } from './appAvatar.share.service';

xdescribe('AvatarService', () => {
  let service: AppAvatarShareService;

//-Definition Service
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppAvatarShareService);
  });

//-Test  
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
