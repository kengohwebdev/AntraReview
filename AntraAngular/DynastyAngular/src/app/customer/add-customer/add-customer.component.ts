
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/interface/customer';
import { Region } from 'src/interface/region';
import { CustomerService } from 'src/services/customer.service';
import { RegionService } from 'src/services/region.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {

  addCustomerForm: FormGroup;


  customer: Customer = {
    id: 0,
    name: '',
    title: '',
    address: '',
    city: '',
    regionId: 0,
    postalCode: 0,
    country: '',
    phone: '',
    regionName:''
  }
  isSuccessful: boolean = false;


    regionCollection:Region[]=[]

  constructor(private builder: FormBuilder, private customerService: CustomerService, private regionService: RegionService, private router:Router
    // , private activatedRoute:ActivatedRoute
    ) {
    
    // activatedRoute.params.subscribe(d=>{
    //   this.customer.id=d["id"]      
    // })
    
    this.addCustomerForm = builder.group({
      "customerName": new FormControl('', []),
      "customerTitle": new FormControl('', []),
      "customerPhone": new FormControl('', []),
      "customerAddress": new FormControl('', []),
      "customerRegionId": new FormControl('', []),
      "customerPostalCode": new FormControl('', []),
      "customerCity": new FormControl('', []),
      "customerCountry": new FormControl('', []),
      // "customerRegionName": new FormControl('', []),
    });
  }

  ngOnInit(): void {
    this.getData();

  }

  saveCustomer() {

    this.customer.name = this.addCustomerForm.value["customerName"];
    this.customer.title = this.addCustomerForm.value["customerTitle"];
    this.customer.phone = this.addCustomerForm.value["customerPhone"];
    this.customer.address = this.addCustomerForm.value["customerAddress"];
    this.customer.regionId = this.addCustomerForm.value["customerRegionId"].id;
    // this.customer.regionName = this.addCustomerForm.value["customerRegionName"];
    this.customer.postalCode = this.addCustomerForm.value["customerPostalCode"];
    this.customer.city = this.addCustomerForm.value["customerCity"];
    this.customer.country = this.addCustomerForm.value["customerCountry"];
    this.customerService.addCustomer(this.customer).subscribe((data: any) => {
      this.isSuccessful = true;
    });

    console.log("Form Submitted")
    console.log(this.addCustomerForm.value)
  }

  getData(){
    this.regionService.getAllRegion().subscribe((data)=>{
      this.regionCollection=data;
    })
  }

}
