import { Injectable } from '@angular/core';
import { UrlTree, CanLoad, Route, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectAuthToken } from '../app-store/selectors/auth.selectors';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeCanLoadGuard implements CanLoad {
  private isAuth$ = this.store.select(selectAuthToken).pipe(
    map(token => token !== null)
  );

  constructor(
    private store: Store
  ) {}

  canLoad(
    route: Route, segments: UrlSegment[],
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isAuth$;
  }
}
