import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './component/chart/chart.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [ChartComponent],
  imports: [
    CommonModule,
    ChartsModule
  ],
  exports: [
    ChartComponent
  ]
})
export class ChartModule { }
