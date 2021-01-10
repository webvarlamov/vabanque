import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule as NgrxStoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../../environments/environment';
import {authReducer} from './reducers/auth.reducer';
import {AuthEffects} from './effects/auth.effects';
import {AccountsEffects} from './effects/accounts.effects';
import {accountsReducer} from './reducers/accounts.reducer';
import {transactionsReducer} from "./reducers/transactions.reducer";
import {TransactionEffects} from "./effects/transaction.effects";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgrxStoreModule.forRoot({
      auth: authReducer,
      accounts: accountsReducer,
      transactions: transactionsReducer
    }, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
    EffectsModule.forRoot([
      AuthEffects,
      AccountsEffects,
      TransactionEffects
    ]),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  exports: [
    NgrxStoreModule,
    EffectsModule,
    StoreRouterConnectingModule,
    StoreDevtoolsModule,
  ],
})
export class AppStoreModule { }
