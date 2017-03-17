import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UsersListService {

  constructor(private http: Http) {

  }

  getUsers(){
     return this.http.get('https://demo5698684.mockable.io/users');
  }

}
