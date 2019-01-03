import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../providers/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  RegisterForm: FormGroup

  constructor(private authservice: AuthService, private fb: FormBuilder) { }

  ngOnInit() {
    this.initform();
  }

  initform() {
    this.RegisterForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['' ,Validators.required],
      usertype: ['', Validators.required]
    })
  }

  register() {
    this.authservice.signup(this.RegisterForm.value);
  }
}
