import {AuthState} from './auth/auth-state';
import {AccountsState} from './accounst/accounts-state';

export interface AppState {
  auth: AuthState;
  accounts: AccountsState;
}
