import { Injectable } from '@angular/core';

export interface Registration {
  firstName?: string;
  lastName?: string;
  address?: string;
  telephone: string;
  email?: string;
  username?: string;
  password?: string;
  confirmPassword?: string; 
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedInUser?: Registration;

  constructor() { }

  storeRegisteredData(formData: Registration): void {
    let existingUsers = JSON.parse(sessionStorage?.getItem('registeredUsers') || '[]');
  
    existingUsers.push(formData);
  
    sessionStorage.setItem('registeredUsers', JSON.stringify(existingUsers));
  }


  getRegisteredUsers(): Array<Registration> {
    return JSON.parse(sessionStorage?.getItem('registeredUsers') || '[]');
  }

  logIn(user: Registration): boolean {
    let existingUsers = this.getRegisteredUsers();
    this.loggedInUser = existingUsers?.find(u => u.username === user?.username && u.password === user?.password);
    return this.loggedInUser !== null;
  }

  isLoggedIn(): boolean {
    return this.loggedInUser !== null;
  }



}
