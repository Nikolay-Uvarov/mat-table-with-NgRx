import { Customer } from './customer';

export interface CustomerResponse {
  total: number,
  customers: Customer[]
}
