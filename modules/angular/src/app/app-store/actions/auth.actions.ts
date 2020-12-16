import { createAction, props } from '@ngrx/store';
import { LoginPassword } from '../types/auth/login-password';
import { Token } from '../types/auth/token';

export const userSignIn = createAction('[Auth] User sign in', props<{ loginPassword: LoginPassword }>());
export const userAuthSuccess = createAction('[Auth] User auth success', props<{ token: Token }>());
export const userAuthReject = createAction('[Auth] User auth reject');
