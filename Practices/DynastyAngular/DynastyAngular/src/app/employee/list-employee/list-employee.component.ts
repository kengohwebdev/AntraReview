import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/interface/employee';
import { EmployeeService } from 'src/services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.scss']
})

export class ListEmployeeComponent implements OnInit {

  empCollection:Employee[]=[]
  constructor(private empService:EmployeeService, private router:Router) { }

  
ngOnInit(): void {
  this.getData();
 }

 getData(){
   this.empService.getAllEmployee().subscribe((data)=>{
     this.empCollection=data;
   });
 }

 updateEmployeeById(id:any){
   this.router.navigate(['employee/edit/'+id]);
 }

 deleteEmployee(id:any){
  this.empService.deleteEmployee(id).subscribe((d:any)=>{
   this.getData();
  });
 }

}