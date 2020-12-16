import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableViewComponent } from './component/table-view/table-view.component';



@NgModule({
  declarations: [TableViewComponent],
  imports: [
    CommonModule
  ], exports: [
    TableViewComponent
  ]
})
export class TableViewModule { }
