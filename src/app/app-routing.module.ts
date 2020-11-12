import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { canActivate } from '@angular/fire/auth-guard';

import { AngularFireAuthGuard,redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['signin']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['']);

const routes: Routes = [

  { path: 'signin', 
    component: SigninComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInToHome }},

  { path: '', 
    component: HomeComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin }},

    { path: 'signup', 
    component: SignupComponent},

  { path: '**', 
  component: PageNotFoundComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
