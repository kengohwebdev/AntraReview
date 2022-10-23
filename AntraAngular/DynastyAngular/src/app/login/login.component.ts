import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AccountService } from 'src/services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AccountService]
})
export class LoginComponent implements OnInit {

  loginModel = {
    userName: "",
    password: ""
  }

  respdata: any;


  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
    //localStorage.clear();
  }


  loginUser(loginForm: NgForm) {

    this.accountService.login(loginForm.value).subscribe(d => {

      localStorage.setItem("token", d["jwt"]);
      this.router.navigateByUrl('home')

    })
  }

    RedirectRegister(){
    this.router.navigate(['account/signup']);
  }
}