import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: () => import('./body/body.module').then(m => m.BodyModule) },
  { path: '', loadChildren: () => import('./security/security.module').then(m => m.SecurityModule)},
  { path: '', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule)},
  { path: '', loadChildren: () => import('./animal/animal.module').then(m => m.AnimalModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
