import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthViewComponent } from './component/auth-view/auth-view.component';
import {AuthComponentsModule} from '../../modules/auth-components/auth-components.module';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    AuthViewComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: '', component: AuthViewComponent }
    ]),
    CommonModule,
    AuthComponentsModule
  ]
})
export class AuthViewModule { }
