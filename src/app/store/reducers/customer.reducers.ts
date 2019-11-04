import { initialCustomerState, CustomerState, customerAdapter } from '../states/customer.state';
import { CustomerAction, CustomerActionType } from '../actions/customer.actions';

export function customerReducer(state = initialCustomerState, action: CustomerAction): CustomerState {
  switch (action.type) {
    case CustomerActionType.Loading: {
      return { ...state, loading: true };
    }
    case CustomerActionType.LoadSuccess: {
      return customerAdapter.addAll(action.payload, {
        ...state,
        error: false,
        loading: false
      });
    }
    case CustomerActionType.LoadFailure: {
      return customerAdapter.removeAll({
        ...state,
        error: true,
        loading: false
      });
    }
    default:
      return state;
  }
}
