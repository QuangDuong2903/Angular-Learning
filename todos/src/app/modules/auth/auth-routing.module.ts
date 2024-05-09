import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { authGuard } from '../../core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'sign-in',
    component: SigninComponent,
    canActivate: [authGuard],
  },
  {
    path: 'sign-up',
    component: SignupComponent,
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
