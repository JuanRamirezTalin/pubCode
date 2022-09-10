//-----------------------------------------------------------------------------
// Purpose : component's form - roles: test
//--------------------- -------------------------------------------------------
// 20220729: v_01.00 JRT: Create
//-----------------------------------------------------------------------------
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesFormComponent } from './form.component';

xdescribe('RolesFormComponent', () => {
  let component: RolesFormComponent;
  let fixture: ComponentFixture<RolesFormComponent>;

//-Definition module  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolesFormComponent ]
    })
    .compileComponents();
  });

 //-Definition component  
  beforeEach(() => {
    fixture = TestBed.createComponent(RolesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

//-Test  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
