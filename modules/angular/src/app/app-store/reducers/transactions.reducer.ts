import {Action, createReducer, on} from '@ngrx/store';
import {AccountsState} from '../types/accounst/accounts-state';
import {loadAccountsSuccess} from '../actions/accounts.actions';
import {TransactionsState} from "../types/transactions/transactions-state";
import {loadTransactionsSuccess} from "../actions/transaction.actions";

export const initialState: TransactionsState = {
  transactions: []
};

const reducer = createReducer<TransactionsState>(initialState,
    on(loadTransactionsSuccess, (state, action) => {
      return {...state, transactions: action.transactions}
    })
  );

export function transactionsReducer(state: TransactionsState, action: Action): TransactionsState {
  return reducer(state, action);
}
