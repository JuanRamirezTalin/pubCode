//-----------------------------------------------------------------------------
// Purpose : component of menu test
//--------------------- -------------------------------------------------------
// 20220624: v_01.00 JRT: Create
//-----------------------------------------------------------------------------
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';

xdescribe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

//-Definition module  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuComponent ]
    })
    .compileComponents();
  });

 //-Definition component  
  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

//-Test  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
