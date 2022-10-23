import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  template: `
    <h3>HTTP ERROR 404 NOT FOUND</h3>
  `,
  styles: [`
    h3{
        background:  red;
      } 
  `,]
})
export class StatusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
