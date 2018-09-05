import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {
  
  static readonly LOGIN_URL = 'https://smkconnect.web.id/oauth/token';
  static readonly CLIENT_SECRET = '18xRm9iRhtZuGDU1iQPuCAyRAPyGUZ2tDDzYkAQg';
  static readonly CLIENT_ID = '2';
  access: boolean;
  token: string;

  constructor(public http: Http) {}

  // Login
  public login(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials.");
    } else {
      var LoginCredentials = { grant_type: 'password', client_id: AuthServiceProvider.CLIENT_ID, 
                               client_secret: AuthServiceProvider.CLIENT_SECRET,
                               username: credentials.username, password: credentials.password };
      return Observable.create(observer => {
        this.http.post(AuthServiceProvider.LOGIN_URL, LoginCredentials)
        .map(res => res.json())
        .subscribe( data => {
          if (data.access_token) {
            this.token = data.token_type + ' ' + data.access_token;
            this.access = true;
          } else {
            this.access = false;
          }
        });

        setTimeout(() => {
              observer.next(this.access);
          }, 15000);

        setTimeout(() => {
              observer.complete();
          }, 20000);

      }, err => console.error(err));
    }
  }

  // Get Token
  public getToken() {
    return this.token;
  }

  // Logout
  public logout() {
    return Observable.create(observer => {
      observer.next(true);
      observer.complete();
    });
  }

}