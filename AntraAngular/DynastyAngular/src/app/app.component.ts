import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck {
  
  constructor(private accountService:AccountService,private router: Router) { }

  isMenuVisible=true;
  ngDoCheck(): void {
    const currentroute = this.router.url;
    // console.log(currentroute);
    // if(currentroute == '')
    // {
    //   this.router.navigateByUrl("")
    // }


    if(currentroute == '/login' || currentroute == '/account/signup' )
    {
      this.isMenuVisible=false
    } else {
      this.isMenuVisible=true
    }
    
  }

  isLoggedIn = localStorage.hasOwnProperty("token");
  title = 'DynastyAngular';
  logout() {
    localStorage.removeItem("token")
    localStorage.clear();
    this.router.navigateByUrl("login")
  }

}