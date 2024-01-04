import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://api.example.com';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    const body = { username, password };
    return this.http.post<any>(`${this.apiUrl}/login`, body);
  }

  logout() {
    localStorage.removeItem('access_token');
  }

  get isAuthenticated(): boolean {
    const token = localStorage.getItem('access_token');
    return !!token;
  }
}