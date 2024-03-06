import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public key: any;
  loginForm: FormGroup;

  constructor(private router: Router, private authService: AuthService) {
    this.loginForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.login();
    }
  }

  login() {
    const data = this.loginForm.value;
    this.authService.authenticate(data).subscribe(
      (res: any) => {
        this.key = res;
        console.log(this.key.token);
        this.authService.storeToken(this.key.token);
        this.router.navigate(["./homepage"]);
      },
      error => {
          console.log("Register First")
          this.router.navigate(["./register"]);
        
      }
    );
  }
}
