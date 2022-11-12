import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BodyRoutingModule} from './body-routing.module';
import {HomepageComponent} from './homepage/homepage.component';
import {NgxSlickJsModule} from 'ngx-slickjs';
import {NewsdetailComponent} from './newsdetail/newsdetail.component';

@NgModule({
  declarations: [
    HomepageComponent,
    NewsdetailComponent,
  ],
  exports: [],
  imports: [
    CommonModule,
    BodyRoutingModule,
    NgxSlickJsModule,
  ]
})
export class BodyModule {
}
