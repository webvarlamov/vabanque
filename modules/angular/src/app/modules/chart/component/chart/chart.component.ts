import {Component, Input, OnInit} from '@angular/core';
import {ChartDataSets, ChartOptions} from 'chart.js';
import {Color, Label} from 'ng2-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  @Input() chartDataSets: ChartDataSets[] = [];
  @Input() chartLabels: Label[] = [];
  @Input() chartOptions: ChartOptions = {
    scales: {
      xAxes: [{
        gridLines: {
          display: true,
          color: '#f1f1f140',
        }
      }],
      yAxes: [{
        gridLines: {
          display: true,
          color: '#f1f1f140'
        }
      }]
    },
    showLines: true
  };
  @Input() chartColors: Color[] = [];
  @Input() chartLegend = true;
  @Input() chartPlugins = [];
  @Input() chartType = 'scatter';

  constructor() { }

  ngOnInit(): void {
  }

}
