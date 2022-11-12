import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './auth.component';
import { AuthModule} from '@auth0/auth0-angular'; 


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent],
      imports: [
        AuthModule.forRoot({
          domain: 'test.auth0.com',
          clientId: 'TeStCliEnT'
        }),
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the login component', () => {
    expect(component).toBeTruthy();
  });
  
  it(`should display login form with input fields`, () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const form = fixture.nativeElement.querySelector(`form`);
    const emailField = fixture.nativeElement.querySelector(".login-email");
    const passWordField = fixture.nativeElement.querySelector(".login-password");
    expect(form).toBeTruthy();
    expect (emailField?.type).toEqual('text');
    expect (emailField?.placeholder).toEqual('Email')
    expect (passWordField?.type).toEqual('password');
    expect (passWordField?.placeholder).toEqual('Password')
  })
});
