import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeViewComponent } from './component/home-view/home-view.component';
import { RouterModule } from '@angular/router';
import { HomeCanLoadGuard } from '../../guard/home-can-load.guard';


@NgModule({
  declarations: [HomeViewComponent],
  imports: [
    RouterModule.forChild([
      { path: '', component: HomeViewComponent }
    ]),
    CommonModule,
  ],
  providers: [HomeCanLoadGuard],
})
export class HomeViewModule { }
