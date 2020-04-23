import { Injectable } from '@angular/core';
import { Shop } from './shop.model'

@Injectable({
  providedIn: 'root'
})
export class ShopsService {
  private nearByShops: Shop[] = [
    {
      name: 'Rana Mart',
      distance: '0.5 kms',
      deliveryMode: ['Home Delivery', 'Store Pickup'],
      contactNo: "9380512567",
      openingTime: "10:00 AM",
      closingTime: "05:00 PM",
      upiId: "ranamart@oksbi",
      paymentOptions: ["Card", "Cash", "UPI"]
    },
    {
      name: 'CM Mall',
      distance: '1 km',
      deliveryMode: ['Store Pickup'],
      contactNo: "8075413644",
      openingTime: "10:00 AM",
      closingTime: "05:00 PM",
      upiId: "cmmall@oksbi",
      paymentOptions: ["Cash", "UPI"]
    },
    {
      name: 'We Mart',
      distance: '1.5 kms',
      deliveryMode: ['Home Delivery', 'Store Pickup'],
      contactNo: "9562088844",
      openingTime: "10:00 AM",
      closingTime: "05:00 PM",
      upiId: "weamart@okhdfc",
      paymentOptions: ["Card", "Cash", "UPI"]
    },
    {
      name: 'Lulu HyperMart',
      distance: '1.5 kms',
      deliveryMode: ['Home Delivery', 'Store Pickup'],
      contactNo: "9380512567",
      openingTime: "10:00 AM",
      closingTime: "05:00 PM",
      upiId: "ranamart@oksbi",
      paymentOptions: ["Card", "Cash", "UPI"]
    },
    {
      name: 'Veekay Mart',
      distance: '2 kms',
      deliveryMode: ['Home Delivery', 'Store Pickup'],
      contactNo: "9380512567",
      openingTime: "10:00 AM",
      closingTime: "05:00 PM",
      upiId: "ranamart@oksbi",
      paymentOptions: ["Card", "Cash", "UPI"]
    },
    {
      name: 'SNC sons',
      distance: '2 kms',
      deliveryMode: ['Home Delivery', 'Store Pickup'],
      contactNo: "9380512567",
      openingTime: "10:00 AM",
      closingTime: "05:00 PM",
      upiId: "ranamart@oksbi",
      paymentOptions: ["Card", "Cash", "UPI"]
    },
    {
      name: 'Mary Matha Stores',
      distance: '2 kms',
      deliveryMode: ['Home Delivery', 'Store Pickup'],
      contactNo: "9380512567",
      openingTime: "10:00 AM",
      closingTime: "05:00 PM",
      upiId: "ranamart@oksbi",
      paymentOptions: ["Card", "Cash", "UPI"]
    },
  ];
  constructor() { }

  getNearByShops() {
    return [...this.nearByShops];
  }

  getShopDetails(name: string) {
    return { ...this.nearByShops.find(o => o.name === name) };
  }
}
