import {AuthState} from './auth/auth-state';
import {AccountsState} from './accounst/accounts-state';
import {TransactionsState} from "./transactions/transactions-state";

export interface AppState {
  auth: AuthState;
  accounts: AccountsState;
  transactions: TransactionsState;
}
