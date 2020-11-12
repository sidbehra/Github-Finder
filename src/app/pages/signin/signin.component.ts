import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private toastrService : ToastrService,private authService : AuthService,private router : Router) { }

  ngOnInit() {
  }

  onSubmit( f : NgForm)
  {
    const {email, password} = f.form.value;

    //Todo : do your checking here

    this.authService.signIn(email,password)
    .then((res) => {
      this.router.navigateByUrl("/");
      this.toastrService.success("Logged In");
    })
    .catch((err)=>{
      console.log(err);
      this.toastrService.error("Sign In Failed");
      
    })
  }
}
