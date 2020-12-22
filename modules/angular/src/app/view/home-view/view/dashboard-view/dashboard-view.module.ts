import { NgModule } from '@angular/core';
import { DashboardViewComponent } from './component/dashboard-view/dashboard-view.component';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [DashboardViewComponent],
  imports: [
    CommonModule
  ],
  exports: [DashboardViewComponent]
})
export class DashboardViewModule { }
