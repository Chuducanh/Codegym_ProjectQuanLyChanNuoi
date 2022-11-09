import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  formResetPass: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.formResetPass = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  get email() {
    return this.formResetPass.get('email');
  }
}
