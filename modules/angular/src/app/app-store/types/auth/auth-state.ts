import { Token } from './token';
import { LoginPassword } from './login-password';

export interface AuthState {
  token: Token;
  loginPassword: LoginPassword;
}
