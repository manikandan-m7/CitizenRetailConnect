import { Injectable } from '@angular/core';
import { Customer } from './customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private customer: Customer = {
    name: 'Test Customer',
    emailId: 'test@gmail.com'
  }
  constructor() { }

  getCustomerDetails() {
    return this.customer;
  }
}
