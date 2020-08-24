import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignupComponent } from './components/signup/signup.component';
import { ReportComponent } from './components/report/report.component';
import { AuthGuard } from './guards/auth.guard';
import { NotAuthGuard } from './guards/notAuthGuard';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { DeleteComponent } from './components/delete/delete.component'


const routes: Routes = [
  { path: '', component: LoginComponent, canActivate:[NotAuthGuard] },
  { path: 'signup', component: SignupComponent, canActivate:[NotAuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard] },
  { path: 'report', component: ReportComponent, canActivate:[AuthGuard] },
  { path: 'delete/:id', component: DeleteComponent, canActivate:[AuthGuard] },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
