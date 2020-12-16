import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {DataAccessService} from '../../../../service/data-access.service';

@Component({
  selector: 'app-auth-view',
  templateUrl: './auth-view.component.html',
  styleUrls: ['./auth-view.component.css']
})
export class AuthViewComponent implements OnInit {

  constructor(
    public store: Store,
    public dataAccessService: DataAccessService
  ) { }

  ngOnInit(): void {}

  onSignIn(loginPassword: { login: string, password: string }): void {
    this.dataAccessService.auth(loginPassword);
  }
}
