import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShopsService } from '../shops.service';
import { Shop } from '../shop.model';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer.model';

@Component({
  selector: 'app-customer-home',
  templateUrl: './customer-home.page.html',
  styleUrls: ['./customer-home.page.scss'],
})
export class CustomerHomePage implements OnInit {

  nearByShops: Shop[];
  customer: Customer;

  constructor(
    private shopsService: ShopsService,
    private customerService: CustomerService,
    private router: Router) { }

  ngOnInit() {
    this.nearByShops = this.shopsService.getNearByShops();
    this.customer = this.customerService.getCustomerDetails();
  }

  placeOrder(shopName: string) {
    this.router.navigate(['/order-tab/' + shopName + '/tabs/addToCart/' + shopName]);
  }

}
