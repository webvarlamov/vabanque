import { createAction, props } from '@ngrx/store';
import { Account } from '../types/cuba/entities/vabanque_Account';

export const loadAccounts = createAction('[Accounts] Load Accounts');
export const loadAccountsSuccess = createAction('[Accounts] Load Accounts success', props<{accounts: Account[]}>());
export const loadAccountsRejected = createAction('[Accounts] Load Accounts rejected');
