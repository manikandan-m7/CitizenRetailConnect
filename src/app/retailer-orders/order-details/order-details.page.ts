import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/model/order.model';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.page.html',
  styleUrls: ['./order-details.page.scss'],
})
export class OrderDetailsPage implements OnInit {

  customerOrder: Order = null;

  constructor(private route : ActivatedRoute,
              private orderService: OrderService,
              private router: Router) { }

  ngOnInit() {
    let orderNo = this.route.snapshot.params['id'];
    console.log('OrderNo from route parameter::::', orderNo);
    this.customerOrder = this.orderService.getOrderDetails(orderNo);
  }

  denyOrder(orderNo: string){
    this.router.navigate(['retailer-orders/deny-order', orderNo]);
  }

  confirmOrder(orderNo: string){
    this.orderService.confirmOrder(orderNo);
    this.router.navigate(['retailer-orders']);
  }
}
