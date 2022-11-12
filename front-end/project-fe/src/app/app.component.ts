import {Component, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {LoginComponent} from './security/login/login.component';
import {ResetPasswordComponent} from './security/reset-password/reset-password.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project-fe';
  @ViewChild(LoginComponent) login: LoginComponent;
  @ViewChild(ResetPasswordComponent) resetPassword: ResetPasswordComponent;
}
