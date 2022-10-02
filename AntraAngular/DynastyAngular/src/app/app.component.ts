import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(private router: Router) {

  }
  isLoggedIn = localStorage.hasOwnProperty("token");
  title = 'DynastyAngular';
  logout() {
    localStorage.removeItem("token")
    localStorage.clear();
    this.router.navigateByUrl("login")
  }

}