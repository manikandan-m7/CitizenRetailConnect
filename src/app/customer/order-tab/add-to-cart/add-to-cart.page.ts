import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../../item.model';
import { InventoryService } from '../../inventory.service';
import { Inventory } from '../../inventory.model';
import { Category } from '../../category.model';
import { Order } from '../../order.model';
import { OrderService } from '../../order.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.page.html',
  styleUrls: ['./add-to-cart.page.scss'],
})
export class AddToCartPage implements OnInit {
  private hideMe = true;
  inventory: Inventory;
  order: Order;
  items: Item[] = [];
  shopName: string;

  /* items: Item[] = [
    {
      name: "Onion",
      price: "40",
      quantity: "0",
      unit: "Kg"
    },
    {
      name: "Cabbage",
      price: "26",
      quantity: "0",
      unit: "Kg"
    },
    {
      name: "Potato",
      price: "45",
      quantity: "0",
      unit: "Kg"
    },
    {
      name: "Tomato",
      price: "26",
      quantity: "0",
      unit: "Kg"
    }
  ]; */
  constructor(
    private route: ActivatedRoute,
    private inventoryService: InventoryService,
    private orderService: OrderService,
    private router: Router
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
     console.log("add to cart.ts" + paramMap.get('shopName'));
     this.shopName = paramMap.get('shopName');
    });
    this.inventory = this.inventoryService.getInventory();
  }

  hide1() {
    this.hideMe = !this.hideMe;
  }

  addToCart(item: Item){
    this.items = this.items.filter(i => i.name !== item.name);
    this.items.push(item);
    console.log(this.items) ;
  }

  removeFromCart(item: Item){
    item.quantity = 0;
    this.items = this.items.filter(i => i.name !== item.name);
    console.log("remove from cart" + item.name + item.quantity) ;
    console.log(this.items) ;
  }

  prepareOrder(){
    this.orderService.preapreCart(this.items);
      this.router.navigate(['/review-tab/' + this.shopName + '/tabs/reviewOrder/' + this.shopName]);
  }

}
