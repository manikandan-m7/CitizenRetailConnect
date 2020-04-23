import { Component, OnInit } from '@angular/core';
import { Customer } from '../../../customer/customer.model';
import { CustomerService } from '../../customer.service';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.page.html',
  styleUrls: ['./customer-profile.page.scss'],
})
export class CustomerProfilePage implements OnInit {

  customer: Customer;
  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customer = this.customerService.getCustomerDetails();
  }

}
