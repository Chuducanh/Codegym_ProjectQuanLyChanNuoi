import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import {ToastrModule} from 'ngx-toastr';
import {HttpClientModule} from '@angular/common/http';
import {ListComponent} from './list/list.component';


@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ToastrModule.forRoot(),
    HttpClientModule,
  ]
})
export class EmployeeModule { }
