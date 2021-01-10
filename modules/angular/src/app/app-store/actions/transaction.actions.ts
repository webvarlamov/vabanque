import { createAction, props } from '@ngrx/store';
import { Account } from '../types/cuba/entities/vabanque_Account';
import {Transaction} from "../types/cuba/entities/vabanque_Transaction";

export const loadTransactions = createAction('[Transactions] Load Transactions');
export const loadTransactionsSuccess = createAction('[Transactions] Load Transactions success', props<{transactions: Transaction[]}>());
export const loadTransactionsRejected = createAction('[Transactions] Load Transactions rejected');
