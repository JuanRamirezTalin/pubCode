//-----------------------------------------------------------------------------
// Purpose : Test for initial template of application
//--------------------- -------------------------------------------------------
// 20220602: v_01.00 JRT: Create
//-----------------------------------------------------------------------------
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

xdescribe('AppComponent', () => {

//-Definition module
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ AppComponent ],
    }).compileComponents();
  });

//-Test  
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
