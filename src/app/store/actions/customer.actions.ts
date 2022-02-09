import { createAction, props } from "@ngrx/store";
import { CustomerParams } from "src/app/core/models/customer-params";
import { CustomerResponse } from "src/app/core/models/customer-response";

enum CustomerActionType {
  Loading = "[Customer] Reset",
  LoadCustomersSuccess = "[Appointment] Loaded Success",
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
