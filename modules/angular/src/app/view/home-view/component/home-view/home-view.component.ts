import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAccountsWithTransactions } from '../../../../app-store/selectors/accounts.selectors';
import { loadAccounts } from '../../../../app-store/actions/accounts.actions';
import {map, tap} from "rxjs/operators";

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent implements OnInit {
  public accountsWithTransactions$ = this.store.select(selectAccountsWithTransactions).pipe(
    map(accountsWithTransactions => {
      return accountsWithTransactions.map(account => {
        let transactionDates: Date[] = [
          account.outcome.map(t => t.date),
          account.income.map(t => t.date),
          // @ts-ignore
        ].flat();

        transactionDates.sort((a, b) => {
          return a.getMilliseconds() - b.getMilliseconds()
        });
        let startDateAsString = transactionDates.length > 0 ? transactionDates[0] : null

        let i = 0;
        if (startDateAsString != null) {
          let startDate = new Date(startDateAsString);
          let endDate = new Date(startDate)
          //endDate.setFullYear(endDate.getFullYear() + 1)
          endDate.setMonth(endDate.getMonth() + 3)

          let currentDate = new Date(startDate)
          // debugger

          let currentTotal = 0;
          let chartMap: Map<any, number> = new Map<any, number>();
          for (currentDate; currentDate < endDate; currentDate.setDate(currentDate.getDate() + 1)) {

            let minusSums = account.outcome.filter(t => t.date.toString() === currentDate.toString()).map(t => t.sum);
            let plusSums = account.income.filter(t => t.date.toString() === currentDate.toString()).map(t => t.sum);

            let minus = 0;
            let plus = 0;

            if (minusSums.length > 0) minus = minusSums.reduce((a, b) => a + b);
            if (plusSums.length > 0) plus = plusSums.reduce((a, b) => a + b);

            let yesterday = new Date(currentDate)
            yesterday.setDate(yesterday.getDate() - 1);

            let yesterdayValue = chartMap.get(yesterday.toString());

            if (yesterdayValue != undefined) {
              chartMap.set(currentDate.toString(), yesterdayValue + plus - minus)
            } else {
              chartMap.set(currentDate.toString(), 0)
            }
          }

          let entries = Array.from(chartMap.entries());
          let dataSet = entries.map((el, i) => {
            //debugger
            return {
              x: i,
              y: el[1]
            }
          })

          debugger

          return {
            account,
            dataSets: [{
              pointBorderWidth: 0,
              pointBorderColor: '#ff0000',
              pointBackgroundColor: '#ff0000',
              label: account.name,
              borderWidth: 3,
              borderColor: '#ff0000',
              backgroundColor: '#ffaaaa',
              showLine: true,
              //tension: 10000000,
              fill: false,
              data: dataSet,
              //label: "label"
            }]
          };
        }
        return { account, dataSets:[{
            data: [],
            label: "label"
          }]};
      })
    }),
    //tap(d => console.log(JSON.stringify(d)))
  );

  constructor(
    private store: Store
  ) {}

  ngOnInit(): void {
    this.store.dispatch(loadAccounts());
  }
}
