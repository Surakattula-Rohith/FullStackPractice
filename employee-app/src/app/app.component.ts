import { Component } from '@angular/core';
import { Employee } from './model/Employe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'employee-app';
  employe : Employee ;
  decimalNum : number = 0.24352 ;
  today : number ;

  constructor(){
    this.today = Date.now() ;
    this.employe = new Employee(100 , "Rohith" , "rohith@gmail.com", 25) ;

  }
}
