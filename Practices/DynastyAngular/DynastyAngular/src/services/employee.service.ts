import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/interface/employee';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
url:string= environment.apiKey+environment.apiControllers.employee;
  constructor(private httpClient:HttpClient) { }

  getAllEmployee():Observable<Employee[]>
  {
   return this.httpClient.get<Employee[]>(this.url);
  }

  addEmployee(employee:Employee):Observable<any>
  {
    return this.httpClient.post(this.url,employee);
  }

  getEmployeeById(id:any):Observable<Employee>{
    return this.httpClient.get<Employee>(this.url+"/"+id);
  }



  updateEmployee(employee:Employee):Observable<any>
  {
    return this.httpClient.put(this.url,employee);
  }
 
  
  deleteEmployee(id:any):Observable<any>
  {
    return this.httpClient.delete(this.url+"/"+id);
  }
}