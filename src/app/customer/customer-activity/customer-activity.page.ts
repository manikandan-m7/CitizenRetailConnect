import { Component, OnInit } from '@angular/core';
import { Customer } from '../../customer/customer.model';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-activity',
  templateUrl: './customer-activity.page.html',
  styleUrls: ['./customer-activity.page.scss'],
})
export class CustomerActivityPage implements OnInit {

  customer: Customer;
  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customer = this.customerService.getCustomerDetails();
  }

}
