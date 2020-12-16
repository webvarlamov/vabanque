import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeViewComponent } from './component/home-view/home-view.component';
import { RouterModule } from '@angular/router';
import { HomeCanLoadGuard } from '../../guard/home-can-load.guard';
import { DashboardViewModule } from './view/dashboard-view/dashboard-view.module';
import {TableViewModule} from './view/table-view/table-view.module';

@NgModule({
  declarations: [HomeViewComponent],
  imports: [
    RouterModule.forChild([
      { path: '', component: HomeViewComponent },
    ]),
    CommonModule,
    DashboardViewModule,
    TableViewModule
  ],
  providers: [HomeCanLoadGuard],
})
export class HomeViewModule { }
