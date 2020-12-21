import {Action, createReducer, on} from '@ngrx/store';
import {AccountsState} from '../types/accounst/accounts-state';
import {loadAccountsSuccess} from '../actions/accounts.actions';
import {DashState} from '../types/dash-widget/dash-state';

export const initialState: DashState = {
  dashWidgets: []
};

const reducer = createReducer<DashState>(initialState);

export function dashReducer(state: DashState, action: Action): DashState {
  return reducer(state, action);
}
