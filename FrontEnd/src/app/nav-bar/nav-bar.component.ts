import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  loggedinUser: string;
  constructor(
    private router: Router,
    private alertifyService: AlertifyService
  ) {}

  ngOnInit(): void {}

  loggedIn(): string {
    this.loggedinUser = localStorage.getItem('token');
    return this.loggedinUser;
  }

  onLogOut(): void {
    localStorage.removeItem('token');
    this.alertifyService.success('Logged out successfully');
    this.router.navigate(['user/login']);
  }
}
