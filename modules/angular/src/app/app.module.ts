import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppStoreModule } from './app-store/app-store.module';
import { AppRoutingModuleModule } from './app-routing-module.module';
import { AuthViewModule } from './view/auth-view/auth-view.module';
import { HomeViewModule } from './view/home-view/home-view.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppStoreModule,
    AppRoutingModuleModule,
    AuthViewModule,
    HomeViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
