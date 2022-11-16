import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AnimalListComponent} from './animal-list/animal-list.component';
import {AuthGuardService as AuthGuard} from '../service/auth/auth-guard.service';


const routes: Routes = [
  {
    path: 'animal/list',
    component: AnimalListComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimalRoutingModule { }
