import { createAction, props } from "@ngrx/store";
import { CustomerParams } from "../../../app/core/models/customer-params";
import { CustomerResponse } from "../../../app/core/models/customer-response";

enum CustomerActionType {
  Loading = "[Customer] Loading",
  LoadCustomersSuccess = "[Customer] Loaded Success",
  loadCustomersFailure = "[Customer] Loaded Failure",
}

export const loadingCustomers = createAction(
  CustomerActionType.Loading,
  props<{ params: CustomerParams }>()
);

export const loadCustomersSuccess = createAction(
  CustomerActionType.LoadCustomersSuccess,
  props<{ response: CustomerResponse }>()
);

export const loadCustomersFailure = createAction(
  CustomerActionType.loadCustomersFailure,
  props<{ error: any }>()
);
