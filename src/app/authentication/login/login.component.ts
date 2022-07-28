import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as CryptoJS from 'crypto-js';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm!: FormGroup

  isSpinning = false;
  rememberMeNow!: boolean;
  loginDetails: any;

  constructor(
    private router: Router,
    private toast: HotToastService,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)]],
      password: ['', [Validators.required, Validators.pattern(/[^A-Za-z0-9]+/), Validators.minLength(8)]],
    });
  }

  signup(): void{
    this.router.navigateByUrl('register').then(() => { window.location.reload()});
  }

  async submit(): Promise<void>{
    this.isSpinning = true;
    await this.authService.login(this.loginForm.value).toPromise().then((result: any) => {
      if (result.token) {
        this.isSpinning = false;
        this.toast.success('User loggedin successfully !!', { position: 'top-right', style: { padding: '16px', color: '#000'}});
        this.router.navigateByUrl('/main/profile');
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
