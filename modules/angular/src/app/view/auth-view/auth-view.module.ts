import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthViewComponent } from './component/auth-view/auth-view.component';
import {AuthComponentsModule} from '../../modules/auth-components/auth-components.module';



@NgModule({
  declarations: [
    AuthViewComponent
  ],
  imports: [
    CommonModule,
    AuthComponentsModule
  ]
})
export class AuthViewModule { }
