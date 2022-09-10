//-----------------------------------------------------------------------------
// Purpose : rol's component-test
//--------------------- -------------------------------------------------------
// 20220602: v_01.00 JRT: Create
//-----------------------------------------------------------------------------
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesComponent } from './roles.component';

xdescribe('RolesComponent', () => {
  let component: RolesComponent;
  let fixture: ComponentFixture<RolesComponent>;

//-Definition module  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolesComponent ]
    })
    .compileComponents();
  });

 //-Definition component  
  beforeEach(() => {
    fixture = TestBed.createComponent(RolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

//-Test  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
