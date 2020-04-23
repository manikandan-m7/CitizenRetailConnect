import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../order.service';
import { Order } from '../../../order.model';
import { Customer } from 'src/app/customer/customer.model';
import { CustomerService } from 'src/app/customer/customer.service';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.page.html',
  styleUrls: ['./order-details.page.scss'],
})
export class OrderDetailsPage implements OnInit {

  orders: Order[];
  orderDetails: Order;
  customer: Customer;
  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private orderService: OrderService, 
    private customerService: CustomerService) { }

  ngOnInit() {
    this.customer = this.customerService.getCustomerDetails();
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('orderId')) {
        this.navCtrl.navigateBack('/customer-activity/tabs/orderHistory');
        return;
      }
      this.orderDetails = this.orderService.getOrderDetails(paramMap.get('orderId'));
    });
  }

}
