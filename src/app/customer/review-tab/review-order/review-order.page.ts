import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../../order.service';
import { Item } from '../../item.model';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-review-order',
  templateUrl: './review-order.page.html',
  styleUrls: ['./review-order.page.scss'],
})
export class ReviewOrderPage implements OnInit {

  cartItems: Item[] = [];
  shopName: string;
  totalAmount: number = 0;

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService,
    private router: Router,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      console.log("add to cart.ts" + paramMap.get('shopName'));
      this.shopName = paramMap.get('shopName');
    });
    this.cartItems = this.orderService.getCartItems();
    for (let i = 0; i < this.cartItems.length; i++) {
      console.log("price" + this.cartItems[i].price );
      console.log("qty" + this.cartItems[i].quantity );
      this.totalAmount += (this.cartItems[i].price * this.cartItems[i].quantity);
      console.log(this.totalAmount);
    }
  }


  completeOrder() {
    console.log("review-order.ts");
  }

  goBack(){
    this.navCtrl.back();
  }

}


