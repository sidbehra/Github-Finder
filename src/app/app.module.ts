import { environment } from "../environments/environment"
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ReposComponent } from './component/repos/repos.component';
import { UserCardComponent } from './component/user-card/user-card.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';


//form and http client
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http"

//firebase related imports
import { AngularFireAuthModule } from "@angular/fire/auth"
import { AngularFireModule } from "@angular/fire"

//for toast
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { ToastrModule } from "ngx-toastr"
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ReposComponent,
    UserCardComponent,
    HomeComponent,
    PageNotFoundComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [AngularFireAuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
