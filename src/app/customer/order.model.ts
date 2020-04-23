import { Item } from './item.model';

export interface Order{
    shopName: string;
    orderStatus: string;
    deliveryMode: string;
    deliveryTime: string;
    id: string;
    orderDate: string;
    totalAmount: string;
    items: Item[];
    shopContactNo: string;
}