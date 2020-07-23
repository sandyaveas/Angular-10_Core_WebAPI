import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  authUser(user: any): User {
    let users = [];
    if (localStorage.getItem('Users')) {
      users = JSON.parse(localStorage.getItem('Users'));
    }
    return users.find(
      (a) => a.userName === user.userName && a.password === user.password
    );
  }
}
