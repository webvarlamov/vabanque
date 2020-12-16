import {AuthState} from '../types/auth/auth-state';
import {Action, createReducer, on} from '@ngrx/store';
import {userAuthSuccess, userSignIn} from '../actions/auth.actions';

export const initialState: AuthState = {
  token: null,
  loginPassword: null
};

const reducer = createReducer<AuthState>(initialState,
    on(userSignIn, (state, acton) => {
      return {...state, loginPassword: acton.loginPassword};
    }),
    on(userAuthSuccess, (state, action) => {
      return {...state, token: action.token};
    }),
  );

export function authReducer(state: AuthState, action: Action): AuthState {
  return reducer(state, action);
}
