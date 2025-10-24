import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}
  login(usuario: string, password: string): Observable<any> {
    return this.http.post('/api/auth/login', { usuario, password });
  }

  guardarToken(token: string, rol: string): void {
    localStorage.setItem('token', token);
    localStorage.setItem('rol', rol);
  }

  logout(): void {
    localStorage.clear();
  }
}
