import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth-guard.service';
import { AdminComponent } from './admin/admin.component';
import { MarkAttendanceComponent } from './mark-attendance/mark-attendance.component';
import { ScheduleComponent } from './mark-attendance/schedule/schedule.component';
import { ApplyLeaveComponent } from './mark-attendance/apply-leave/apply-leave.component';
import { LogInfoComponent } from './mark-attendance/log-info/log-info.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';

import { LoginComponent } from './modules/shared/login/login.component';
import { OtpVerificationComponent } from './auth/otp-verification/otp-verification.component';



const routes: Routes = [ 
  { path: '', pathMatch: 'full', redirectTo: 'login'},
  { path: 'login', component: LoginComponent },
  { path: 'mark-attendance', component: MarkAttendanceComponent},
  { path: 'schedule', component: ScheduleComponent },
  { path: 'leave', component: ApplyLeaveComponent },
  { path: 'log', component: LogInfoComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'otp', component: OtpVerificationComponent },
 
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
