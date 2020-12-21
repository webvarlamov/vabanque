import { Component, OnInit } from '@angular/core';
import {WidgetBaseComponent} from '../widget-base/widget-base.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-widget-data-chart',
  templateUrl: './widget-data-chart.component.html',
  styleUrls: ['./widget-data-chart.component.css']
})
export class WidgetDataChartComponent extends WidgetBaseComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
