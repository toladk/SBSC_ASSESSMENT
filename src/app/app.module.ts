import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import {NgxPaginationModule} from 'ngx-pagination';
import { UseErrorInterceptor } from './authentication/services/error.interceptor';
import { CorporateheaderComponent } from './components/layouts/corporateheader/corporateheader.component';
import { CorporatesidebarComponent } from './components/layouts/corporatesidebar/corporatesidebar.component';
import { CorporatemainComponent } from './components/layouts/corporatemain/corporatemain.component';
import { RegisterSuccessComponent } from './authentication/register-success/register-success.component';

import { NgChartsModule } from 'ng2-charts';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { UsersComponent } from './components/pages/users/users.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CorporateheaderComponent,
    CorporatesidebarComponent,
    CorporatemainComponent,
    RegisterSuccessComponent,
    ProfileComponent,
    UsersComponent,
  ],
  imports: [
    NgChartsModule,
    CarouselModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzIconModule,
    NzNotificationModule,
    NzPopconfirmModule,
    NzSpinModule,
    NzToolTipModule,
    NgxPaginationModule,
    NgApexchartsModule
  ],
  providers: [UseErrorInterceptor,{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
