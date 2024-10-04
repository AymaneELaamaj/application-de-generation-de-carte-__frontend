import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../Model/user.model';

@Injectable({
  providedIn: 'root'
})
export class RedalService {

  constructor(private http: HttpClient) {}

  Registre(user: Users): Observable<Users[]> {
    return this.http.post<Users[]>('http://localhost:8082/registre', user);
  }

  Login(email: string): Observable<any> {
    return this.http.get(`http://localhost:8082/${email}`);
  }

  getCurrentUser(): Users | null {
    if (typeof localStorage !== 'undefined') {
      const user = localStorage.getItem('currentUser');
      return user ? JSON.parse(user) : null;
    }
    return null;
  }

  setCurrentUser(user: Users): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('currentUser', JSON.stringify(user));
    }
  }

  logout(): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem('currentUser');
    }
  }
  removeCurrentUser() {
    localStorage.removeItem('currentUser');
  }

  getCommunes(): Observable<any> {
    return this.http.get<any>("http://localhost:8082/carte");
  }
  getSale(): Observable<any> {
    return this.http.get<any>("http://localhost:8082/sale");
  }
  gettemara(): Observable<any> {
    return this.http.get<any>("http://localhost:8082/temara");
  }
  getsidi_yahya_Zair(): Observable<any> {
    return this.http.get<any>("http://localhost:8082/sidi_yahya_Zair");
  }getAin_Atig(): Observable<any> {
    return this.http.get<any>("http://localhost:8082/Ain_Atig");
  }getMunicipalité_de_Temara(): Observable<any> {
    return this.http.get<any>("http://localhost:8082/Municipalité_de_Temara");
  }getskhirat(): Observable<any> {
    return this.http.get<any>("http://localhost:8082/skhirat");
  }

  getHassan(): Observable<any> {
    return this.http.get<any>('http://localhost:8082/Hassan');
  }

  getTouarga(): Observable<any> {
    return this.http.get<any>('http://localhost:8082/Touarga');
  }

  getYoussoufia(): Observable<any> {
    return this.http.get<any>('http://localhost:8082/youssoufia');
  }

  getYaacoub(): Observable<any> {
    return this.http.get<any>('http://localhost:8082/yaacoub');
  }

  getAgdal(): Observable<any> {
    return this.http.get<any>('http://localhost:8082/agdal');
  }
  gettabriqet(): Observable<any> {
    return this.http.get<any>('http://localhost:8082/tabriqet');
  }
  gethsaine(): Observable<any> {
    return this.http.get<any>('http://localhost:8082/hsaine');
  }
  getlaayayda(): Observable<any> {
    return this.http.get<any>('http://localhost:8082/Laayayda');
  }getbettana(): Observable<any> {
    return this.http.get<any>('http://localhost:8082/bettana');
  }getmrissa(): Observable<any> {
    return this.http.get<any>('http://localhost:8082/Mrissa');
  }getbouknadel(): Observable<any> {
    return this.http.get<any>('http://localhost:8082/bouknadel');
  }

  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('file', file);

    const req = new HttpRequest('POST', 'http://localhost:8082/upload-excel', formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }


  getFiles(): Observable<any> {
    return this.http.get('http://localhost:8082/files');
  }
  uploadsale(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('file', file);

    const req = new HttpRequest('POST', 'http://localhost:8082/upload-excel-sale', formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  uploadtemara(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('file', file);

    const req = new HttpRequest('POST', 'http://localhost:8082/upload-excel-temara', formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

}
