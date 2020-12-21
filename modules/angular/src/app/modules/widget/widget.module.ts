import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetBaseComponent } from './component/widget-base/widget-base.component';
import { WidgetDataChartComponent } from './component/widget-data-chart/widget-data-chart.component';



@NgModule({
  declarations: [WidgetBaseComponent, WidgetDataChartComponent],
  imports: [
    CommonModule
  ]
})
export class WidgetModule { }
