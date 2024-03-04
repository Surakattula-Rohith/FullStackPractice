import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  myForm!: FormGroup;
  formErrors: { [key: string]: string } = {
    name: '',
    email: ''
  };
  
  validationMessages: { [key: string]: { [key: string]: string } } = {
    name: {
      required: 'Name is required.',
      minlength: 'Name must be at least 3 characters long.',
      maxlength: 'Name cannot exceed 50 characters.'
    },
    email: {
      required: 'Email is required.',
      email: 'Invalid email format.'
    }
  };
  

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]]
    });

    this.myForm.valueChanges.subscribe(() => {
      this.onValueChanged();
    });
  }

  onValueChanged() {
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        this.formErrors[field] = '';
        const control = this.myForm.get(field);

        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

  onSubmit() {
    console.log('Form submitted!', this.myForm.value);
    // Handle form submission logic here
  }
}