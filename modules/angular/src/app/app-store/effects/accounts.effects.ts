import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {loadAccounts, loadAccountsSuccess} from '../actions/accounts.actions';
import {switchMap} from 'rxjs/operators';
import {DataAccessService} from '../../service/data-access.service';
import {Router} from '@angular/router';

@Injectable()
export class AccountsEffects {
  loadAccountsEffect = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadAccounts),
      switchMap(action => {
        return  this.dataAccessService.loadAccounts();
      }),
      switchMap(accounts => {
        return [loadAccountsSuccess({ accounts })];
      })
    );
  });

    constructor(
      private router: Router,
      private actions$: Actions,
      private dataAccessService: DataAccessService
  ) {}
}
