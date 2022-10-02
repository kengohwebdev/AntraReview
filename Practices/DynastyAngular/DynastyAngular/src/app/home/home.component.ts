import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  headername="Welcome";
  salary = 5000;

  isdisabled = false;
  
  colorname="skyblue";
  font = '40px';
  stylevalue={"color":"limegreen","font-size":"20px"}

  classname= 'headclass';

  colors=['black','brown','gold','silver'];

  ngOnInit(): void {
  }

  Functionclick(name:string){
    alert(name)
  }

}
