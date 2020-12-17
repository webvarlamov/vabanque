import { createAction, props } from '@ngrx/store';
import { Account } from '../types/cuba/entities/vabanque_Account';

export const loadAccounts = createAction('[Accounts] Load accounts');
export const loadAccountsSuccess = createAction('[Accounts] Load user success', props<{accounts: Account[]}>());
export const loadAccountsRejected = createAction('[Accounts] Load user rejected');
