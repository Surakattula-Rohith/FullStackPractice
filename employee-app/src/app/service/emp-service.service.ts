import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/Employe';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpServiceService {

  constructor(private http : HttpClient) {

    
  }

  getAllEmployeeData() : Observable<any>{
     return this.http.get('http://localhost:3000/employee') ;
  }

  addEmployee(employee : Employee) : Observable<Employee>{
   return this.http.post('http://localhost:3000/employee',employee) ;

  }
}
