import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './shared/header/header.component';
import {FooterComponent} from './shared/footer/footer.component';
import {BodyModule} from './body/body.module';
import {NgxSlickJsModule} from 'ngx-slickjs';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { LogosliderComponent } from './shared/logoslider/logoslider.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";
import {SecurityModule} from "./security/security.module";
import {JwtInterceptor} from "./helpers/jwt-interceptor";
import {AnimalModule} from "./animal/animal.module";
import {EmployeeModule} from "./employee/employee.module";


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        LogosliderComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BodyModule,
        SecurityModule,
        AnimalModule,
        EmployeeModule,
        NgxSlickJsModule.forRoot({
            links: {
                jquery: 'https://code.jquery.com/jquery-3.4.0.min.js',
                slickJs: 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js',
                slickCss: 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css',
                slickThemeCss: 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css'
            }
        },),
        BrowserAnimationsModule,
        ToastrModule.forRoot()
    ],
    providers: [
        {provide: APP_BASE_HREF, useValue: '/'},
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        }],
    exports: [
        LogosliderComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
