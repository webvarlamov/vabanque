import {AppState} from '../types/app-state';
import {createSelector} from '@ngrx/store';

export const selectAccountsState = (state: AppState) => {
  return state.accounts;
};

export const selectAccounts = createSelector(
  selectAccountsState,
  state => state.accounts
);
