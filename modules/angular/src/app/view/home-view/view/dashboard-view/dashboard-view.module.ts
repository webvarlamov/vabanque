import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardViewComponent } from './component/dashboard-view/dashboard-view.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [DashboardViewComponent],
  imports: [
    CommonModule,
    ChartsModule
  ],
  exports : [
    DashboardViewComponent
  ]
})
export class DashboardViewModule { }
