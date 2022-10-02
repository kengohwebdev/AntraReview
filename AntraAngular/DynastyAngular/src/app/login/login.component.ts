import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenInterceptor } from 'src/interceptors/token.interceptor';
import { MaterialModule } from 'src/Material.Module';
import { AccountService } from 'src/services/account.service';
import { UserService } from 'src/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [UserService,  
    {provide:HTTP_INTERCEPTORS, useClass:TokenInterceptor,multi:true}]
})
export class LoginComponent implements OnInit {

  // loginModel = {
  //   userName: "",
  //   password: ""
  // }
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    localStorage.clear();
  }

  respdata: any;

  ProdceedLogin(logindata: any) {
    //console.log(logindata);
    if (logindata.valid) {
      this.userService.ProceedLogin(logindata.value).subscribe(item => {
        this.respdata = item;
        console.log(this.respdata);
        // if (this.respdata != null) {
        //   localStorage.setItem('token', this.respdata.jwt);
        //   this.router.navigate(["dashboard"])
        // } else {
        //   alert("Login Failed");
        // }
      });
    }
  }


  // loginUser(loginForm: NgForm) {

  //   this.accountService.login(loginForm.value).subscribe(d => {

  //     localStorage.setItem("token", d["jwt"]);
  //     this.router.navigateByUrl("dashboard")

  //   })
  // }
}
