import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {selectAccounts} from '../../../../app-store/selectors/accounts.selectors';
import {loadAccounts} from '../../../../app-store/actions/accounts.actions';
import {map} from 'rxjs/operators';

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
  private accounts$ = this.store.select(selectAccounts).pipe();
  private charts$ = this.accounts$.pipe(
    map(accounts => {
      accounts.map(account => {

      });
    })
  );

  constructor(
    private store: Store
  ) {}

  ngOnInit(): void {
    this.store.dispatch(loadAccounts());
  }
}
