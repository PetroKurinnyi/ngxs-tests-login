import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Injectable()
export class AuthApiService {
  constructor(private http: HttpClient) {}

  loginReq(body: { email: string; password: string }): Observable<{ accessToken: string }> {
    return this.http.post('https://handy-dev-core.handy.ai/auth/login', body).pipe(pluck('data'));
  }
}
