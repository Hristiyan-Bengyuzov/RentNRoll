import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  hide: boolean = true;
  registerForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern(/^[A-Z][a-z]+$/)]],
    lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern(/^[A-Z][a-z]+$/)]],
    username: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(30)]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(50), Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*\W).+$/)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern(/^(?:0|\+359)8[7-9]\d{7}$/)]],
    egn: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
  });

  constructor(private fb: FormBuilder) { }

  // shorter access to form controls
  get f() { return this.registerForm.controls; }
}
