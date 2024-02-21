import { Component } from '@angular/core';
import { User } from 'src/app/model/Model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  title = 'Rohith' ;
  user: User;
  isDisabled: boolean;
  userArray: Array<User>;

  displayMessage() {
    alert("Welcome to Angular Tutorial !!");
  }

  constructor() {
    this.user = new User("Rohith", 24, true);
    this.isDisabled = true;
    this.userArray = [this.user, new User("Maya", 20, false), new User("Raj", 26, true)];

    console.log(this.userArray);

  }
}
