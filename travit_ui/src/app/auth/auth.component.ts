import { Component, Inject } from '@angular/core';

// Import the AuthService type from the SDK
import { AuthService } from '@auth0/auth0-angular'; 
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-login-button',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthButtonComponent {

  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService) {}

  ngOnInit(): void {
  }
  

}