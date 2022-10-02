import { UserService } from './../../Service/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  signUpForm:FormGroup;
  constructor(private fb:FormBuilder, private userService:UserService) {
    this.signUpForm =  this.fb.group({
     "firstName": new FormControl('',[Validators.required]),
     "lastName": new FormControl('',[Validators.required]),
     "emailId": new FormControl('',[Validators.required,Validators.email]),
     "password": new FormControl('',[Validators.required]),
     "confirmPassword": new FormControl('',[Validators.required]),
    });
   }

  ngOnInit(): void {
  }
  signUp(){
    this.userService.signUp(this.signUpForm.value).subscribe(d=>{
      alert(d)
      this.signUpForm.reset();
    })
  }
}