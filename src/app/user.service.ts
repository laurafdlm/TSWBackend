import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = 'https://alarcosj.esi.uclm.es/fakeAccountsBE/users';

  constructor(private http: HttpClient) {}

  // Registro de usuario (ya implementado)
  register1(email: string, pwd1: string, pwd2: string): Observable<any> {
    const info = { email, pwd1, pwd2 };
    return this.http.post<any>(`${this.baseUrl}/registrar1`, info);
  }

  // Inicio de sesión
  login(email: string, password: string): Observable<any> {
    const credentials = { email, password };
    return this.http.post<any>(`${this.baseUrl}/login`, credentials);
  }

  // Eliminar usuario
  deleteUser(userId: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${userId}`);
  }

  // Listar usuarios
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }
}
