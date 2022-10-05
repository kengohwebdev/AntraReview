import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  respdata: any;
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }

  RedirectLogin() {
    this.router.navigate(['canlogin']);
  }

  reactiveform = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    emailId: new FormControl('', Validators.compose([Validators.required, Validators.email])),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),

  });


  SaveUser() {
    if (this.reactiveform.valid) {
      this.userService.Registeration(this.reactiveform.value).subscribe(item => {
        this.respdata = item;
        //console.log(this.respdata);
        if (this.respdata != null) {
          alert("Registered succesffully");
          this.RedirectLogin();
        } else {
          alert("Try again");
        }
      });
    }
  }
}
