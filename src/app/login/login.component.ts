import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, ValidationErrors, AbstractControl } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HelpComponent } from '../component/help/help.component';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'crm-login',
  templateUrl: './login.component.html',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HelpComponent
  ],
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(private authentService: AuthenticationService, private router: Router) {
    if (this.authentService.authenticated) {
      this.authentService.disconnect();
      console.log('disconnect');
    }
    this.loginForm = new FormGroup({
      login: new FormControl('', [Validators.required, Validators.minLength(3)]),
      password: new FormControl('', [Validators.required, this.checkPassword])
    });
  }

  ngOnInit(): void {}

  protected onSubmit(): void {
    const login = this.loginForm.value['login'] ?? '';
    const password = this.loginForm.value['password'] ?? '';
    console.log('Login:', login);
    console.log('Password:', password);
    const res = this.authentService.authentUser(login, password);
    console.log('authent.authentUser', res);
    this.router.navigateByUrl('/home');
  }

  private checkPassword(c: AbstractControl): ValidationErrors | null {
    if (c.value.length < 5) {
      return { checkPassword: 'Error control password' };
    }
    return null;
  }
}
