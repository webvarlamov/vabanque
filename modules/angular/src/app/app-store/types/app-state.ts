import {AuthState} from './auth/auth-state';
import {AccountsState} from './accounst/accounts-state';
import {DashState} from './dash-widget/dash-state';

export interface AppState {
  auth: AuthState;
  accounts: AccountsState;
  dash: DashState;
}
