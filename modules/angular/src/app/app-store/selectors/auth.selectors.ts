import {AppState} from '../types/app-state';
import {createSelector} from '@ngrx/store';

export const selectAuthState = (state: AppState) => {
  return state.auth;
};

export const selectAuthToken = createSelector(
  selectAuthState,
  state => state.token
);

export const selectAuthLoginPassword = createSelector(
  selectAuthState,
  state => state.loginPassword
);
