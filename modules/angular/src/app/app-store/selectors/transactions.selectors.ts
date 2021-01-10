import {AppState} from '../types/app-state';
import {createSelector} from '@ngrx/store';

export const selectTransactionsState = (state: AppState) => {
  return state.transactions;
};

export const selectTransactions = createSelector(
  selectTransactionsState,
  state => state.transactions
);
