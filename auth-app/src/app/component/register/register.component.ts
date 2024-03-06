import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public key: any;
  registerForm: FormGroup;

  constructor(private router: Router, private authService: AuthService) {
    this.registerForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.register();
    }
  }

  register() {
    if (this.registerForm.valid) {
      const user = this.registerForm.value;
      this.authService.register(user).subscribe(
        (res: any) => {
          console.log(res);
          console.log("Succsfully registered.")
          this.router.navigate(['/login']);
        },
        error => {
          console.error(error);
          console.log("Unable to register.")
        }
      );
    }
  }
}

