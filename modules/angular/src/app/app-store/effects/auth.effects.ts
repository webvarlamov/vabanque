import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { userAuthReject, userAuthSuccess, userSignIn } from '../actions/auth.actions';
import { switchMap} from 'rxjs/operators';
import { DataAccessService } from '../../service/data-access.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  userSignInEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(userSignIn),
      switchMap(action => this.dataAccessService.auth(action.loginPassword)),
      switchMap(token => {
        if (token != null) {
          return [userAuthSuccess({token})];
        } else {
          return [userAuthReject];
        }
      })
    );
  });

  userAuthSuccessEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(userAuthSuccess),
      switchMap(action => {
        this.router.navigate(['home', 'dash']);
        return [];
      })
    );
  });

  constructor(
    private router: Router,
    private actions$: Actions,
    private dataAccessService: DataAccessService
  ) {}
}
