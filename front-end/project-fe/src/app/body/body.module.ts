import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BodyRoutingModule } from './body-routing.module';
import { BodyComponent } from './body.component';
import { HomepageComponent } from './homepage/homepage.component';


@NgModule({
    declarations: [BodyComponent, HomepageComponent],
    exports: [
        BodyComponent
    ],
    imports: [
        CommonModule,
        BodyRoutingModule
    ]
})
export class BodyModule { }
