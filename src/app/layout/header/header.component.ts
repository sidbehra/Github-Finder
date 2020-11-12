import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  email = null;

  constructor(private auth:AuthService,private toast: ToastrService,private router: Router,private ref : ChangeDetectorRef) { 
    
    auth.getUser().subscribe((user) => {
      if(user)
     this.email = user.email;
     this.ref.detectChanges();

    })

  }

  ngOnInit() {

  }

  async handleSignout()
  {
    try{
      const res = await this.auth.signOut();
      this.router.navigateByUrl("/signin");
      this.toast.info("Login to continue");
      this.email = null;
    }
    catch(error)
    {
      this.toast.error("Something is wrong")
    }
  }

}
