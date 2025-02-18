import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, ValidationErrors, AbstractControl } from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'crm-login',
  templateUrl: './login.component.html',
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public loginForm = new FormGroup({
    login: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, this.checkPassword])
  });

  protected onSubmit() {
    console.log(this.loginForm.value);
  }

  private checkPassword(c: AbstractControl): ValidationErrors | null {
    if (c.value.length < 5) {
      return { checkPassword: 'Error control password' };
    }
    return null;
  }
}
