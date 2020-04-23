import { Component, OnInit } from '@angular/core';
import { Order } from '../model/order.model';
import { OrderService } from '../services/orders.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-retailer-orders',
  templateUrl: './retailer-orders.page.html',
  styleUrls: ['./retailer-orders.page.scss'],
})
export class RetailerOrdersPage implements OnInit {

  searchedOrders: Order[] = null;
  customerOrders: Order[] = [];
  
  constructor(private orderService: OrderService,
              private router: Router) { }

  ngOnInit() {
    this.customerOrders = this.orderService.getAllOrders();
    this.searchedOrders = this.customerOrders;
  }

  searchByOrderNo(event: any){
    const orderNo = event.target.value.toLowerCase();
    //console.log('OrderNumber from search bar:::', orderNo);
    this.matchOrders(orderNo);
  }

  private matchOrders(orderNo: string){
    this.searchedOrders = this.customerOrders.filter((order) => {
      return order.orderNumber.includes(orderNo);
    });
  }

  displayOrderDetails(orderNo: string){
    this.router.navigate(['retailer-orders/order-details', orderNo]);
  }
}
