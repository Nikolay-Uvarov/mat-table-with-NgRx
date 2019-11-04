import { ActionReducerMap } from '@ngrx/store';
import { GlobalState } from './states/global.state';
import { customerReducer } from './reducers/customer.reducers';

export const reducers: ActionReducerMap<GlobalState> = {
  customer: customerReducer
};
