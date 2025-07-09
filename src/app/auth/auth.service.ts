import { stringify } from './../../../node_modules/postcss/lib/postcss.d';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/authentication';
  constructor(private http: HttpClient) { }

  register(data: {email: string; password: string, username: string}){
    return this.http.post(`${this.apiUrl}/register`, data);
  }

  login(data: {email: string, password: string}){
    return this.http.post(`${this.apiUrl}/login`, data);
  }
}
