import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/interface/customer';
import { Region } from 'src/interface/region';
import { CustomerService } from 'src/services/customer.service';
import { RegionService } from 'src/services/region.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent implements OnInit {

  editCustomerForm: FormGroup;


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
    , private activatedRoute:ActivatedRoute
    ) {
    
    activatedRoute.params.subscribe(d=>{
      this.customer.id=d["id"]      
    })
    
    this.editCustomerForm = builder.group({
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

  updateCustomer() {

    this.customer.name = this.editCustomerForm.value["customerName"];
    this.customer.title = this.editCustomerForm.value["customerTitle"];
    this.customer.phone = this.editCustomerForm.value["customerPhone"];
    this.customer.address = this.editCustomerForm.value["customerAddress"];
    this.customer.regionId = this.editCustomerForm.value["customerRegionId"].id;
    // this.customer.regionName = this.addCustomerForm.value["customerRegionName"];
    this.customer.postalCode = this.editCustomerForm.value["customerPostalCode"];
    this.customer.city = this.editCustomerForm.value["customerCity"];
    this.customer.country = this.editCustomerForm.value["customerCountry"];
    this.customerService.updateCustomer(this.customer).subscribe((data: any) => {
      this.isSuccessful = true;
    });

    console.log("Form Submitted")
    console.log(this.editCustomerForm.value)
  }

  getData(){
    this.regionService.getAllRegion().subscribe((data)=>{
      this.regionCollection=data;
    })
  }

}
