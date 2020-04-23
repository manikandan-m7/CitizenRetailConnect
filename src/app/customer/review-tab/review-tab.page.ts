import { Component, OnInit } from '@angular/core';
import { ShopsService } from '../shops.service';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer.model';

@Component({
  selector: 'app-review-tab',
  templateUrl: './review-tab.page.html',
  styleUrls: ['./review-tab.page.scss'],
})
export class ReviewTabPage implements OnInit {
  customer: Customer;
  shopName: string;

  constructor(private shopsService: ShopsService, private route: ActivatedRoute,
    private navCtrl: NavController, private customerService: CustomerService) { }

  ngOnInit() {
    this.customer = this.customerService.getCustomerDetails();
    this.route.paramMap.subscribe(paramMap => {
      this.shopName = paramMap.get('shopName');
      console.log("review-tab.ts" + paramMap.get('shopName'));
     });
  }

}
