import { Injectable } from '@angular/core';
import { User } from './model/User.model';

const USER_STORAGE_KEY = 'angular-crm.user';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private currentUser?: User;

  constructor() {
    // Vérifier si un utilisateur est connecté
    const storedUser = sessionStorage.getItem(USER_STORAGE_KEY);
    if (storedUser !== null) {
      this.currentUser = JSON.parse(storedUser);
    }
  }

  public get authenticated(): boolean {
    return !!this.currentUser;
  }

  public authentUser(login: string, password: string): User {
    this.currentUser = {
      id: 1,
      login: login,
      lastname: 'Doe',
      firstname: 'John',
    };
    sessionStorage.setItem(USER_STORAGE_KEY, JSON.stringify(this.currentUser));
    return this.currentUser;
  }

  public disconnect(): void {
    delete this.currentUser;
    sessionStorage.removeItem(USER_STORAGE_KEY);
  }
}
