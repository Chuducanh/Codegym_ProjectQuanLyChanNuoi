import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from "./body/homepage/homepage.component";


const routes: Routes = [{ path: 'news', loadChildren: () => import('./body/body.module').then(m => m.BodyModule) },
  {path:'',component:HomepageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
