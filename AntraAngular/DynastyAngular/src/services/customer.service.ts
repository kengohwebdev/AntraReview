import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from 'src/interface/customer';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  url:string= environment.apiKey+environment.apiControllers.customer;
  constructor(private httpClient:HttpClient) { }

  getAllCustomer():Observable<Customer[]>
  {
   return this.httpClient.get<Customer[]>(this.url);
  }

  addCustomer(customer:Customer):Observable<any>
  {
    return this.httpClient.post(this.url,customer);
  }

  getCustomerById(id:any):Observable<Customer>{
    return this.httpClient.get<Customer>(this.url+"/"+id);
  }

  updateCustomer(customer:Customer):Observable<any>
  {
    return this.httpClient.put(this.url,customer);
  }
 
  
  deleteCustomer(id:any):Observable<any>
  {
    return this.httpClient.delete(this.url+"/"+id);
  }
}