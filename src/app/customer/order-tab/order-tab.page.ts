import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer.model';
import { CustomerService } from '../customer.service';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ShopsService } from '../shops.service';

@Component({
  selector: 'app-order-tab',
  templateUrl: './order-tab.page.html',
  styleUrls: ['./order-tab.page.scss'],
})
export class OrderTabPage implements OnInit {
  customer: Customer;
  shopName: string;

  constructor(private shopsService: ShopsService, private route: ActivatedRoute,
    private navCtrl: NavController, private customerService: CustomerService) { }

  ngOnInit() {
    this.customer = this.customerService.getCustomerDetails();
    this.route.paramMap.subscribe(paramMap => {
      this.shopName = paramMap.get('shopName');
      console.log("order-tab.ts" + paramMap.get('shopName'));
     });
  }
}
