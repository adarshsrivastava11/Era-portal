import { AppComponent } from './app.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';





const routes: Routes = [
  {path: '' , redirectTo: 'landingpage',pathMatch:'full'},
  {path:'landingpage',component:LandingpageComponent},
  {path: 'login', component: LoginComponent },
  {path: 'signup', component: SignupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
