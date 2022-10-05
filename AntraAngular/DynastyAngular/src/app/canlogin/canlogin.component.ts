import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from 'src/services/user.service';
import { Router } from '@angular/router';
import { MaterialModule } from 'src/Material.Module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-canlogin',
  standalone: true,
  imports: [CommonModule,MaterialModule,FormsModule],
  templateUrl: './canlogin.component.html',
  styleUrls: ['./canlogin.component.scss'],
  providers: [UserService]
})
export class CanLoginComponent implements OnInit {

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
        //console.log(this.respdata);
        if (this.respdata != null) {
          localStorage.setItem('token', this.respdata.jwt);
          this.router.navigate(["dashboard"])
        } else {
          alert("Login Failed");
        }
      });
    }
  }
  RedirectRegister(){
    this.router.navigate(["access/register"]);
  }

}
