import { Injectable } from '@angular/core';
import { CubaApp } from '@cuba-platform/rest';
import {from, Observable} from 'rxjs';
import {Token} from '../app-store/types/auth/token';

@Injectable({
  providedIn: 'root'
})
export class DataAccessService {
  private cubaRestClientId = 'vabanque-7XLs284X';
  private cubaRestClientSecret = '7e3bf71c476bed5480a393216e2ff937003d71a7f4994a1308a0907d5ab41128';
  private cubaRestApiUrl = 'http://localhost:8080/app/rest/';
  private cubaName = 'vabanque';
  private cubaApp = new CubaApp(this.cubaName, this.cubaRestApiUrl, this.cubaRestClientId, this.cubaRestClientSecret);

  constructor() {}

  public auth(loginPassword: { login: string, password: string }): Observable<Token> {
    return from(this.cubaApp.login(
      loginPassword.login,
      loginPassword.password
    ).then(
        (success) => success,
        (reject) => null
      )
    );
  }
}
