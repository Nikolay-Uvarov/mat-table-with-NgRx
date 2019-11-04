import { CustomerState, initialCustomerState } from './customer.state';

export interface GlobalState {
  customer: CustomerState;
}

export const initialGlobalState: GlobalState = {
  customer: initialCustomerState
};
