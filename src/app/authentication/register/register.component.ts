import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmedValidator } from '../validatorpassword/confirm.validator';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup

  termsCond = '';

  isVisible = false;
  isSpinning = false;
  setInfo = true;
  successInfo = false;
  beforeValidate = true;
  afterValidate = false;
  userRegistration: any;
  corporateRegistration: any;

  constructor(
    private router: Router,
    private toast: HotToastService,
    private formBuilder: FormBuilder,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)]],
      confirmPassword: ['', Validators.required],
      password: ['', [Validators.required, Validators.pattern(/[^A-Za-z0-9]+/), Validators.minLength(8)]],
    }, {
      validator: ConfirmedValidator('password', 'confirmPassword')
    });

  }

  login(): void{
    this.router.navigateByUrl('login').then(() => { window.location.reload()});
  }

  async submitSignup(): Promise<void>{
      this.isSpinning = true;
      const payload = {
        email: this.registerForm.value.email,
        password: this.registerForm.value.password,
      }
        await this.authService.signUp(payload).toPromise().then((result: any) => {
          if (result.token){
            this.isSpinning = false;
            this.toast.success('User Registered Successfully !!', { position: 'top-right', style: { padding: '16px', color: '#000'}});
            this.router.navigateByUrl('/register-success');
            localStorage.setItem('id', result.id);
            sessionStorage.setItem('token', result.token);
          } else {
            this.isSpinning = false;
            this.toast.error(result.error, { position: 'top-right', style: { padding: '16px', color: '#000'}});
          }
        }, error => {
          this.isSpinning = false;
            this.toast.error(error.error.error, { position: 'top-right', style: { padding: '16px', color: '#000'}});
        })
  }

}
