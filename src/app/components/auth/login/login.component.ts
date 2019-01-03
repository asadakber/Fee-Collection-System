import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../providers/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm: FormGroup
  constructor(private authservice: AuthService, private fb: FormBuilder) { }

  ngOnInit() {
    this.initform()
  }
  
  initform() {
    this.LoginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login() {
    this.authservice.signin(this.LoginForm.value);
  }

}
