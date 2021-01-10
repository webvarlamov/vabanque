import {AppState} from '../types/app-state';
import {createSelector} from '@ngrx/store';
import {selectTransactions} from "./transactions.selectors";

export const selectAccountsState = (state: AppState) => {
  return state.accounts;
};

export const selectAccounts = createSelector(
  selectAccountsState,
  state => state.accounts
);

export const selectAccountsWithTransactions = createSelector(
  selectAccounts, selectTransactions, (accounts, transactions) => {
    return accounts.map(account => {
      return {
        ...account,
        income: transactions.filter(t => t.to.id === account.id),
        outcome: transactions.filter(t => t.from.id === account.id)
      }
    });
  }
)


