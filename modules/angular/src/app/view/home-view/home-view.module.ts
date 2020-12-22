import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeViewComponent } from './component/home-view/home-view.component';
import { RouterModule } from '@angular/router';
import { HomeCanLoadGuard } from '../../guard/home-can-load.guard';
import { ChartModule } from '../../modules/chart/chart.module';
import { DashboardViewComponent } from './view/dashboard-view/component/dashboard-view/dashboard-view.component';
import { HomeMenuComponent } from './component/home-menu/home-menu.component';
import {DashboardViewModule} from './view/dashboard-view/dashboard-view.module';

@NgModule({
  declarations: [HomeViewComponent, HomeMenuComponent],
  imports: [
    RouterModule.forChild([
      { path: '',  component: HomeViewComponent, children: [
          { path: 'dash', component: DashboardViewComponent }
        ]}
    ]),
    DashboardViewModule,
    CommonModule,
    ChartModule,
  ],
  providers: [HomeCanLoadGuard],
})
export class HomeViewModule { }
