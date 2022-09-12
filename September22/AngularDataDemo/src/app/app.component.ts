import { Component } from '@angular/core';
import { MasterService } from './service/master.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularDataDemo';
  productlist: any;
  emplist : any;
  

  constructor(private service: MasterService) {
    this.productlist = this.service.GetProductData();
    console.log(this.productlist);

    this.service.GetEmpData().subscribe(result =>{
      this.emplist = result;

      console.log(this.emplist);
    });
  
  }
}
