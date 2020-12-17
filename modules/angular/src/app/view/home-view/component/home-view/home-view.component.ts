import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent implements OnInit {
  charts: any[] = [
    {
      chartDataSets: [
        { data: [85, 72, 78, 75, 77, 75], label: 'Crude oil prices' },
      ],

      chartLabels: ['January', 'February', 'March', 'April', 'May', 'June'],
      chartOptions: {
        responsive: true,
      },

      chartColors: [
        {
          borderColor: 'black',
          backgroundColor: 'rgba(255,255,0,0.28)',
        },
      ],
      chartLegend: true,
      chartPlugins: [],
      chartType: 'line'
    },
    {
      chartDataSets: [
        { data: [85, 72, 78, 75, 77, 75], label: 'Crude oil prices' },
      ],

      chartLabels: ['January', 'February', 'March', 'April', 'May', 'June'],
      chartOptions: {
        responsive: true,
      },

      chartColors: [
        {
          borderColor: 'black',
          backgroundColor: 'rgba(255,255,0,0.28)',
        },
      ],
      chartLegend: true,
      chartPlugins: [],
      chartType: 'line'
    }
  ];

  constructor() { }

  ngOnInit(): void {}



}
