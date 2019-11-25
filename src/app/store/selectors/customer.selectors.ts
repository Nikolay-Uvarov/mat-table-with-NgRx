import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CustomerState, customerAdapter } from '../states/customer.state';

export const {
  selectIds: _selectCustomerDataIds,
  selectEntities: _selectCustomerEntities,
  selectAll: _selectAllCustomer,
  selectTotal: _selectCustomerTotal
} = customerAdapter.getSelectors();

export const selectCustomerState = createFeatureSelector<CustomerState>('customer');

export const selectCustomerIds = createSelector(
  selectCustomerState,
  _selectCustomerDataIds
);

export const selectCustomerEntities = createSelector(
  selectCustomerState,
  _selectCustomerEntities
);

export const selectAllCustomer = createSelector(
  selectCustomerState,
  _selectAllCustomer
);

export const selectCustomerError = createSelector(
  selectCustomerState,
  (state: CustomerState): boolean => state.error
);

export const selectCustomerLoading = createSelector(
  selectCustomerState,
  (state: CustomerState): boolean => state.loading
);


export const selectCustomerTotal = createSelector(
  selectCustomerState,
  (state: CustomerState): number => state.total
);
