import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AlertifyService } from 'src/app/services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private alertifyService: AlertifyService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onLogin(loginForm: NgForm): void {
    console.log(loginForm);

    const token = this.authService.authUser(loginForm.value);
    if (token) {
      localStorage.setItem('token', token.userName);
      this.alertifyService.success('Logged in successfully');
      this.router.navigate(['/']);
    } else {
      this.alertifyService.error('Invalid UserName and Password');
    }
  }
}
