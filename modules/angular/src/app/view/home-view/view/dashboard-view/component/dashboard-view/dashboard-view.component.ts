import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectDashWidgets } from '../../../../../../app-store/selectors/dash.selectors';

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.css']
})
export class DashboardViewComponent implements OnInit {
  public dashWidgets$ = this.store.select(selectDashWidgets);

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
  }

}
