import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
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
  constructor(private accountService: AccountService , private router: Router) { }

  ngOnInit(): void {
  }
  loginUser(loginForm: NgForm) {

    this.accountService.login(loginForm.value).subscribe(d => {

      localStorage.setItem("token", d["jwt"]);
      this.router.navigateByUrl("dashboard")

    })
  }
}