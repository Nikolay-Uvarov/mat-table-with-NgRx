import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Customer } from '../../core/models/customer';

export interface CustomerState extends EntityState<Customer> {
  error: boolean;
  loading: boolean;
  total: number;
}

export const customerAdapter: EntityAdapter<Customer> = createEntityAdapter<Customer>({
  selectId: (customer: Customer) => customer.id
});

export const initialCustomerState: CustomerState = customerAdapter.getInitialState({
  error: false,
  loading: true,
  total: 0
});
