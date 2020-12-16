import { Injectable } from '@angular/core';
import { CubaApp } from '@cuba-platform/rest';

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

  public auth(loginPassword: { login: string, password: string }): void {
    this.cubaApp.login(
      loginPassword.login,
      loginPassword.password
    ).then(res => {
      console.log(res);
    }, res => {
      console.log(res);
    });
  }
}
