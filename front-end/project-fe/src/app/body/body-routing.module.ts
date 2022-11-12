import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomepageComponent} from './homepage/homepage.component';
import {NewsdetailComponent} from './newsdetail/newsdetail.component';

const routes: Routes = [
  {
    path: '', component: HomepageComponent
  },
  {
    path: 'news/:id', component: NewsdetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BodyRoutingModule {
}
