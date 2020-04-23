import { Injectable } from '@angular/core';
import { Order } from './order.model';
import { Item } from './item.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private cartItems: Item[] = [];

  private orderHisotry: Order[] = [
    {
      shopName: "WeMart",
      orderStatus: "Processing",
      deliveryMode: "Store-Pickup",
      deliveryTime: "09:30:00",
      id: "123456",
      orderDate: "26-Mar-2020",
      totalAmount: "136.00",
      items: [
        {
          name: "Onion",
          quantity: 1,
          price: 50.00,
          unit: "Kg"
        },
        {
          name: "Tomato",
          quantity: 1,
          price: 36.00,
          unit: "Kg"
        },
        {
          name: "Banana",
          quantity: 1,
          price: 50.00,
          unit: "Kg"
        },
      ],
      shopContactNo: "9380512567"
    },
    {
      shopName: "Rana Mart",
      orderStatus: "Delivered",
      deliveryMode: "Home Delivery",
      deliveryTime: "14:30:00",
      id: "189256",
      orderDate: "20-Apr-2020",
      totalAmount: "231.00",
      items: [
        {
          name: "Coconut Oil",
          quantity: 1,
          price: 45.00,
          unit: "Kg"
        },
        {
          name: "Mango",
          quantity: 1,
          price: 150.00,
          unit: "Kg"
        },
        {
          name: "Cabbage",
          quantity: 1,
          price: 36.00,
          unit: "Kg"
        },
      ],
      shopContactNo: "9562051522"
    },
    {
      shopName: "CM Mall",
      orderStatus: "Completed",
      deliveryMode: "Home Delivery",
      deliveryTime: "14:00:00",
      id: "890784",
      orderDate: "03-Apr-2020",
      totalAmount: "167.00",
      items: [
        {
          name: "Rice",
          quantity: 1,
          price: 42.00,
          unit: "Kg"
        },
        {
          name: "Dal",
          quantity: 1,
          price: 75.00,
          unit: "Kg"
        },
        {
          name: "Banana",
          quantity: 1,
          price: 50.00,
          unit: "Kg"
        },
      ],
      shopContactNo: "8075413644"
    },
    {
      shopName: "WeMart",
      orderStatus: "Cancelled",
      deliveryMode: "Store-Pickup",
      deliveryTime: "11:24:00",
      id: "587465",
      orderDate: "07-Apr-2020",
      totalAmount: "131.00",
      items: [
        {
          name: "Milk",
          quantity: 1,
          price: 45.00,
          unit: "L"
        },
        {
          name: "Potato",
          quantity: 1,
          price: 36.00,
          unit: "Kg"
        },
        {
          name: "Banana",
          quantity: 1,
          price: 50.00,
          unit: "Kg"
        },
      ],
      shopContactNo: "9380512567"
    },
    {
      shopName: "Veekay Mart",
      orderStatus: "Completed",
      deliveryMode: "Store-Pickup",
      deliveryTime: "11:24:00",
      id: "587465",
      orderDate: "07-Apr-2020",
      totalAmount: "131.00",
      items: [
        {
          name: "Milk",
          quantity: 1,
          price: 45.00,
          unit: "L"
        },
        {
          name: "Potato",
          quantity: 1,
          price: 36.00,
          unit: "Kg"
        },
        {
          name: "Banana",
          quantity: 1,
          price: 50.00,
          unit: "Kg"
        },
      ],
      shopContactNo: "9380512567"
    }, 
    {
      shopName: "Lulu Mart",
      orderStatus: "Delivered",
      deliveryMode: "Store-Pickup",
      deliveryTime: "11:24:00",
      id: "587465",
      orderDate: "07-Apr-2020",
      totalAmount: "131.00",
      items: [
        {
          name: "Milk",
          quantity: 1,
          price: 45.00,
          unit: "L"
        },
        {
          name: "Potato",
          quantity: 1,
          price: 36.00,
          unit: "Kg"
        },
        {
          name: "Banana",
          quantity: 1,
          price: 50.00,
          unit: "Kg"
        },
      ],
      shopContactNo: "9380512567"
    }
  ];

  constructor() { }

  getOrderHistory() {
    return [...this.orderHisotry];
  }

  getOrderDetails(id: string) {
    return {...this.orderHisotry.find(o => o.id === id)};
  }

  preapreCart(items: Item[]){
    this.cartItems = items;
  }

  getCartItems(){
    return this.cartItems;
  }
}
