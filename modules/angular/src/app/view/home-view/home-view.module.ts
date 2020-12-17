import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeViewComponent } from './component/home-view/home-view.component';
import { RouterModule } from '@angular/router';
import { HomeCanLoadGuard } from '../../guard/home-can-load.guard';
import { ChartModule } from '../../modules/chart/chart.module';

@NgModule({
  declarations: [HomeViewComponent],
  imports: [
    RouterModule.forChild([
      { path: '', component: HomeViewComponent },
    ]),
    CommonModule,
    ChartModule
  ],
  providers: [HomeCanLoadGuard],
})
export class HomeViewModule { }
