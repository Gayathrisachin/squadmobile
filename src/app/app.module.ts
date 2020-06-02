import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { MarkAttendanceComponent } from './mark-attendance/mark-attendance.component';
import { ScheduleComponent } from './mark-attendance/schedule/schedule.component';
import { ApplyLeaveComponent } from './mark-attendance/apply-leave/apply-leave.component';
import { LogInfoComponent } from './mark-attendance/log-info/log-info.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component'


import { LoginComponent } from './modules/shared/login/login.component';
import { ToggleButtonComponent } from './toggle-button/toggle-button.component';
import { OtpVerificationComponent } from './auth/otp-verification/otp-verification.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    MarkAttendanceComponent,
    ScheduleComponent,
    ApplyLeaveComponent,
    LogInfoComponent,
    ForgotPasswordComponent,
    ToggleButtonComponent,
    OtpVerificationComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
   
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
