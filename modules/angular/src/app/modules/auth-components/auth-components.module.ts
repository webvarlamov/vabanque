import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthFormComponent } from './component/auth-form/auth-form.component';
@NgModule({
  declarations: [AuthFormComponent],
  imports: [
    CommonModule
  ],
  exports: [AuthFormComponent]
})
export class AuthComponentsModule { }
