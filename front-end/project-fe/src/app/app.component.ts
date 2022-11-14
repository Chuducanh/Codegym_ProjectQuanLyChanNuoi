import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {LoginComponent} from './security/login/login.component';
import {ResetPasswordComponent} from './security/reset-password/reset-password.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'project-fe';
  @ViewChild(LoginComponent) login: LoginComponent;
  @ViewChild(ResetPasswordComponent) resetPassword: ResetPasswordComponent;

  ngAfterViewInit(): void {
    console.log(this.login.url);
  }
}
