import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it (`should contain header and welcome message`, () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const component = fixture.nativeElement as HTMLElement;
    const header = component.querySelector('.display-welcome-title');
    const message = component.querySelector('.display-welcome-message');
    expect (header?.textContent).toEqual('Welcome to Travit');
    expect (message?.textContent).toContain(`travel`)

  })
});
