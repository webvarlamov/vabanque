import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {DataAccessService} from '../../../../service/data-access.service';
import {userSignIn} from '../../../../app-store/actions/auth.actions';
import {selectAuthLoginPassword} from '../../../../app-store/selectors/auth.selectors';

@Component({
  selector: 'app-auth-view',
  templateUrl: './auth-view.component.html',
  styleUrls: ['./auth-view.component.css']
})
export class AuthViewComponent implements OnInit {
  public loginPassword$ = this.store.select(selectAuthLoginPassword);

  constructor(
    public store: Store,
  ) { }

  ngOnInit(): void {}

  onSignIn(loginPassword: { login: string, password: string }): void {
    this.store.dispatch(userSignIn({ loginPassword }));
  }
}
