import {AppState} from '../types/app-state';
import {createSelector} from '@ngrx/store';

export const selectDashState = (state: AppState) => {
  return state.dash;
};

export const selectDashWidgets = createSelector(
  selectDashState,
  state => state.dashWidgets
);
