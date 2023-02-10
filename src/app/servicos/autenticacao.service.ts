import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const API_TOKEN = 'http://cloudtecnologia.dynns.com:8081/oauth/token';
const CLI_ID = 'my-angular-app';
const CLI_SECRET = '@321';


@Injectable({ providedIn: 'root' })
export class AutenticacaoService {

  constructor(private http: HttpClient) { }


  obterToken(username: string, password: string): Observable<any> {
    const params = new HttpParams()
      .set('username', username)
      .set('password', password)
      .set('grant_type', 'password');

    const headers = {
      'Authorization': 'Basic ' + btoa(CLI_ID + ':' + CLI_SECRET),
      'Content-Type': 'application/x-www-form-urlencoded'
    };

    return this.http.post(API_TOKEN, params.toString(), { headers });
  }




}
