import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/app/services/orders.service';
import { Order } from 'src/app/model/order.model';

@Component({
  selector: 'app-deny-order',
  templateUrl: './deny-order.page.html',
  styleUrls: ['./deny-order.page.scss'],
})
export class DenyOrderPage implements OnInit {

  customerOrder: Order = null;
  orderNumber: string = null;

  constructor(private route: ActivatedRoute,
              private orderService: OrderService,
              private router: Router) { }

  ngOnInit() {
    this.orderNumber = this.route.snapshot.params['id'];
    console.log('OrderNo from route parameter::::', this.orderNumber);
    this.customerOrder = this.orderService.getOrderDetails(this.orderNumber);
  }

  denyOrder(denialReason: any){
    //console.log('Denial Reason::::', denialReason.el.textContent);
    this.orderService.denyOrder(this.orderNumber, denialReason.el.textContent);
    this.router.navigate(['retailer-orders']);
  }

}
