import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAccounts } from '../../../../app-store/selectors/accounts.selectors';
import { loadAccounts } from '../../../../app-store/actions/accounts.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent implements OnInit {
  private accounts$ = this.store.select(selectAccounts).pipe();

  constructor(
    private store: Store,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.store.dispatch(loadAccounts());}
}
