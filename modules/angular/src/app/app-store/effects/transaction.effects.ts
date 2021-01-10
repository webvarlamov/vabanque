import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {loadAccounts, loadAccountsSuccess} from '../actions/accounts.actions';
import {switchMap} from 'rxjs/operators';
import {DataAccessService} from '../../service/data-access.service';
import {Router} from '@angular/router';
import {loadTransactionsSuccess} from "../actions/transaction.actions";

@Injectable()
export class TransactionEffects {
  loadTransactionsEffect = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadAccountsSuccess),
      switchMap(action => {
        return  this.dataAccessService.loadTransactions(
          action.accounts.map(account => account.id)
        );
      }),
      switchMap(transactions => {
        return [loadTransactionsSuccess({transactions})];
      })
    );
  });

    constructor(
      private router: Router,
      private actions$: Actions,
      private dataAccessService: DataAccessService
  ) {}
}
