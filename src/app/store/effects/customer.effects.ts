import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { CustomerActionType, CustomerLoadAction, CustomerLoadSuccessAction, CustomerLoadFailAction } from '../actions/customer.actions';
import { CustomerService } from '../../services/customer.service';
import { CustomerParams } from '../../core/models/customer-params';
import { CustomerResponse } from '../../core/models/customer-response';

@Injectable()
export class CustomerEffects {
  constructor(private service: CustomerService, private actions$: Actions) { }

  @Effect()
  public loadCustomers$ = this.actions$
    .pipe(ofType<CustomerLoadAction>(CustomerActionType.Loading),
      map(action => action.payload),
      switchMap((params: CustomerParams) =>
        this.service.getCustomers(params).pipe(
          map((response: CustomerResponse) => new CustomerLoadSuccessAction(response)),
          catchError((error) => of(new CustomerLoadFailAction(error)))
        )
      )
    );
}
