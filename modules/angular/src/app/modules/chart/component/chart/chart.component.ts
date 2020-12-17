import {Component, Input, OnInit} from '@angular/core';
import {ChartDataSets} from 'chart.js';
import {Color, Label} from 'ng2-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  @Input() chartDataSets: ChartDataSets[] = [];
  @Input() chartLabels: Label[] = [];
  @Input() chartOptions = {};
  @Input() chartColors: Color[] = [];
  @Input() chartLegend = true;
  @Input() chartPlugins = [];
  @Input() chartType = 'line';

  constructor() { }

  ngOnInit(): void {
  }

}
