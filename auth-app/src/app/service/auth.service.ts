import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  private token: string | null = null;

  authenticate(credentials: { username: string, password: string }): Observable<any> {
    return this.http.post<{ token: string }>('/api/login', credentials).pipe(
      tap(response => this.token = response.token)
    );
  }
  register(user: { username: string, password: string, email: string }): Observable<any> {
    return this.http.post('/api/register', user);
  }

  storeToken(token: any) {
    localStorage.setItem("token_key", token);
  }

  getToken(): any {
    return localStorage.getItem("token_key");
  }

  get isAuthenticated(): boolean {
      return !!this.token;
    }
}
