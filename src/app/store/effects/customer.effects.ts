import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { switchMap, map, catchError, of, Observable } from "rxjs";
import { CustomerParams } from "../../../app/core/models/customer-params";
import { CustomerResponse } from "../../../app/core/models/customer-response";
import { CustomerService } from "../../../app/services/customer.service";
import { loadCustomersFailure, loadCustomersSuccess, loadingCustomers } from "../actions/customer.actions";

@Injectable()
export class CustomerEffects {
  constructor(private actions$: Actions, private service: CustomerService) {}

  public appointmentLoading$ = createEffect(
    (): Observable<Action> =>
      this.actions$.pipe(
        ofType(loadingCustomers),
        switchMap((payload: { params: CustomerParams  }) =>
          this.service.getCustomers(payload.params).pipe(
            map((response: CustomerResponse) =>
              loadCustomersSuccess({ response })
            ),
            catchError((error: HttpErrorResponse) =>
              of(loadCustomersFailure({ error }))
            )
          )
        )
      )
  );
}
