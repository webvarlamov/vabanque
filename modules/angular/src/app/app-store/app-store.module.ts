import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule as NgrxStoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../../environments/environment';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgrxStoreModule.forRoot({}, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
    EffectsModule.forRoot([]),
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
