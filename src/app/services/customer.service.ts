import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Customer } from '../core/models/customer';
import { CustomerParams } from '../core/models/customer-params';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { CustomerResponse } from '../core/models/customer-response';

@Injectable()
export class CustomerService {

  constructor(private httpClient: HttpClient) { }

  public getCustomers(params: CustomerParams): Observable<CustomerResponse> {
    // return this.httpClient.post<Customer[]>("localhost:4200/customers", params);
    return of(this.getFakeCustomers(params)).pipe(delay(3000));
  }

  private getFakeCustomers(params: CustomerParams): CustomerResponse {
    let data = <Customer[]>[];

    data = customers.filter(c => ~(c.role.toLocaleLowerCase()).indexOf(params.filter)
      || ~(c.firstName.toLocaleLowerCase()).indexOf(params.filter)
      || ~(c.lastName.toLocaleLowerCase()).indexOf(params.filter));  

    data.sort((a, b) => (a[params.sortField] > b[params.sortField] ? 1 : -1) * (params.sortDirection === "asc" ? 1 : -1));    
    
    return {
      total: data.length,
      customers: data.slice((params.pageIndex) * params.pageSize, (params.pageIndex + 1) * params.pageSize)
    };
  }
}

const customers = <Customer[]>[
  <Customer>{
    id: "1",
    amount: 100,
    firstName: "Nikolai",
    lastName: "Uvarov",
    role: "Admin"
  },
  <Customer>{
    id: "2",
    amount: 140,
    firstName: "John",
    lastName: "Conor",
    role: "Admin"
  },
  <Customer>{
    id: "3",
    amount: 80,
    firstName: "Olya",
    lastName: "Bytsenko",
    role: "User"
  },
  <Customer>{
    id: "4",
    amount: 100,
    firstName: "Vasya",
    lastName: "Pupkin",
    role: "Partner"
  },
  <Customer>{
    id: "5",
    amount: 140,
    firstName: "Ivan",
    lastName: "Grozniy",
    role: "Admin"
  },
  <Customer>{
    id: "6",
    amount: 80,
    firstName: "Svet",
    lastName: "Svetoslav",
    role: "User"
  },
  ,
  <Customer>{
    id: "7",
    amount: 200,
    firstName: "Alex",
    lastName: "Great",
    role: "Partner"
  },
  <Customer>{
    id: "8",
    amount: 40,
    firstName: "Kolya",
    lastName: "Smith",
    role: "User"
  },
  <Customer>{
    id: "9",
    amount: 160,
    firstName: "Tolya",
    lastName: "Alikov",
    role: "User"
  }
];