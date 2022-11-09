import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";


const routes: Routes = [
  {
    path: "authen/login",
    component: LoginComponent
  },
  {
    path: "authen/reset-password/:token",
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }
