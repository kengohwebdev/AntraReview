import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http:HttpClient) { }
  productinfo = [{ "product": "Protein Bar", "price": 5 }]
  apiurl="https://localhist:44888/Employee";
  emplist: any;

  GetProductData() {
    return this.productinfo;
  }
  GetEmpData(){
    return this.http.get(this.apiurl);
  }

}

