import { Injectable } from '@angular/core';
import { Order } from '../model/order.model';

@Injectable()
export class OrderService {

    customerOrders: Order[] = [
        { 
          customerName : 'Shah Syed',
          orderNumber: '10000123',
          totalAmount: 220,
          status: 'new',
          storePickup: '11.30AM',
          denialReason: null,
          groceries: [
            { itemName: 'Onions', itemPrice: 50, itemQuantity: 1, status: true},
            { itemName: 'Rice', itemPrice: 67, itemQuantity: 1, status: true}
          ],
          bakeryItems: [
            { itemName: 'Plain Bread', itemPrice: 32, itemQuantity: 1, status: true},
            { itemName: 'Veg Puff', itemPrice: 14, itemQuantity: 1, status: true}
          ],
          dairyItems: [
            { itemName: 'Milk', itemPrice: 25, itemQuantity: 0.5, status: true},
            { itemName: 'Curd', itemPrice: 32, itemQuantity: 0.5, status: true}
          ]
        },
        { 
          customerName : 'Muthu S',
          orderNumber: '10000223',
          totalAmount: 976,
          status: 'new',
          storePickup: '12.30PM',
          denialReason: null,
          groceries: [
            { itemName: 'Onions', itemPrice: 100, itemQuantity: 2, status: true},
            { itemName: 'Rice', itemPrice: 670, itemQuantity: 10, status: true}
          ],
          bakeryItems: [
            { itemName: 'Plain Bread', itemPrice: 64, itemQuantity: 2, status: true},
            { itemName: 'Veg Puff', itemPrice: 28, itemQuantity: 2, status: true}
          ],
          dairyItems: [
            { itemName: 'Milk', itemPrice: 50, itemQuantity: 1, status: true},
            { itemName: 'Curd', itemPrice: 64, itemQuantity: 1, status: true}
          ]
        }
      ];
    constructor(){}
    
    getAllOrders() : Order[]{
        return this.customerOrders;
    }

    getOrderDetails(orderNumber: string): Order{
        let customerOrder: Order[] = this.customerOrders.filter((order) => {
            return order.orderNumber === orderNumber;
        });
        return customerOrder[0];
    }

    confirmOrder(orderNumber: string){
        let orderIndex = this.customerOrders.findIndex((order) => {
            return order.orderNumber === orderNumber;
        });
        this.customerOrders[orderIndex].status = 'confirmed';
    }

    denyOrder(orderNumber: string, denialReason: string){
        let orderIndex = this.customerOrders.findIndex((order) => {
            return order.orderNumber === orderNumber
        });
        this.customerOrders[orderIndex].status = 'rejected';
        this.customerOrders[orderIndex].denialReason = denialReason;
    }
}