import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { StoreModule } from '@ngrx/store'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ReportComponent } from './components/report/report.component';

import { AuthService } from './services/auth.service'
import { AuthGuard } from './guards/auth.guard';
import { HeaderComponent } from './components/header/header.component'
import { NotAuthGuard } from './guards/notAuthGuard';
import { MessageComponent } from './components/message/message.component';
import { InfoComponent } from './components/info/info.component';
import { TimesService } from './services/times.service'

import { timesReducer } from '../app/state/times.reducer';
import { SessionComponent } from './components/session/session.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ActionComponent } from './components/action/action.component';
import { TimerComponent } from './components/timer/timer.component';
import { DeleteComponent } from './components/delete/delete.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    ReportComponent,
    HeaderComponent,
    MessageComponent,
    InfoComponent,
    SessionComponent,
    NotfoundComponent,
    ActionComponent,
    TimerComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({times: timesReducer})
  ],
  providers: [AuthService, AuthGuard, NotAuthGuard, TimesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
