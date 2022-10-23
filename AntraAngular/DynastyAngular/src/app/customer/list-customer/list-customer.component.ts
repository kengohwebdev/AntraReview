import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/interface/customer';
import { CustomerService } from 'src/services/customer.service';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.scss']
})
export class ListCustomerComponent implements OnInit {

  headername="Welcome";
  salary = 0;

  colors=['black','brown','gold','silver'];
  nums = [1, 2, 3, 4];

  isdisabled = true;
  isMenuVisible=false;
  
  colorname="skyblue";
  font = '40px';
  stylevalue={"color":"limegreen","font-size":"20px"}

  classname= 'headclass';

 

  Functionclick(name:string){
    alert(name)
  }

  customerCollection:Customer[]=[]
  constructor(private customerService:CustomerService, private router:Router) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.customerService.getAllCustomer().subscribe((data)=>{
      this.customerCollection=data;
    })
  }

  editCustomer(id:any){
    this.router.navigate(['customer/edit/'+id]);
  }
  deleteCustomer(id:any){
    this.customerService.deleteCustomer(id).subscribe((d:any)=>{
      this.getData();
    });
  }

  
  addCustomer(){
    this.router.navigate(['/customer/add']);
  }

}