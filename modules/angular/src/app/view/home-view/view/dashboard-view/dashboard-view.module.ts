import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardViewComponent } from './component/dashboard-view/dashboard-view.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [DashboardViewComponent],
  imports: [
    BrowserModule,
    CommonModule
  ],
  exports: [DashboardViewComponent]
})
export class DashboardViewModule { }
