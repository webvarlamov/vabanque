import {Action, createReducer, on} from '@ngrx/store';
import {AccountsState} from '../types/accounst/accounts-state';
import {loadAccountsSuccess} from '../actions/accounts.actions';

export const initialState: AccountsState = {
  accounts: []
};

const reducer = createReducer<AccountsState>(initialState,
    on(loadAccountsSuccess, (state, acton) => {
      return {...state, accounts: acton.accounts};
    }),
  );

export function accountsReducer(state: AccountsState, action: Action): AccountsState {
  return reducer(state, action);
}
