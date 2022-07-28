import { AuthGuard } from './authentication/services/auth.guard';
import { UsersComponent } from './components/pages/users/users.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { RegisterSuccessComponent } from './authentication/register-success/register-success.component';
import { CorporatemainComponent } from './components/layouts/corporatemain/corporatemain.component';
import { RegisterComponent } from './authentication/register/register.component';
import { LoginComponent } from './authentication/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path : '',
    redirectTo : 'login',
    pathMatch : 'full'
  },
  {
    path : 'login',
    component : LoginComponent,
  },
  {
    path : 'register',
    component : RegisterComponent,
  },
  {
    path : 'register-success',
    component : RegisterSuccessComponent,
  },
  {
    path : 'main',
    component : CorporatemainComponent,
    children : [
      {
        path : '',
        redirectTo : 'profile',
        pathMatch : 'full'
      },
      {
        path: 'profile',
        component : ProfileComponent,
        canActivate : [AuthGuard]
      },
      {
        path: 'users',
        component : UsersComponent,
        canActivate : [AuthGuard]
      },
      {
        path : '**',
        redirectTo : ''
      }
    ]
  },
  {
    path : '**',
    redirectTo : ''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
