import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private toastrService : ToastrService,private authService : AuthService,private router : Router) { }

  ngOnInit() {
  }

  onSubmit( f : NgForm)
  {
    const {email, password} = f.form.value;

    //Todo : do your checking here

    this.authService.signUp(email,password)
    .then((res) => {
      this.router.navigateByUrl("/");
      this.toastrService.success("Signup Success");
    })
    .catch((err)=>{
      console.log(err);
      this.toastrService.error("Signup Failed");
      
    })
  }

}
