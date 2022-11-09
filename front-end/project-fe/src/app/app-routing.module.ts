import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  // { path: '', loadChildren: () => import('./body/body.module').then(m => m.BodyModule) }
];

@NgModule({
  // imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
