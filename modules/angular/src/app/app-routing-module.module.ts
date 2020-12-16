import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeCanLoadGuard } from './guard/home-can-load.guard';
import {AuthCanLoadGuard} from './guard/auth-can-load.guard';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('./view/auth-view/auth-view.module').then(m => m.AuthViewModule), canLoad: [AuthCanLoadGuard]},
  { path: 'home', loadChildren: () => import('./view/home-view/home-view.module').then(m => m.HomeViewModule), canLoad: [HomeCanLoadGuard]},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModuleModule { }
