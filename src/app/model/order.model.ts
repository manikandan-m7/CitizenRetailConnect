import { Grocery } from './grocery.model';

export interface Order{
    customerName: string;
    status: string;
    orderNumber: string;
    totalAmount: number;
    storePickup: string;
    denialReason: string;
    groceries: Grocery[];
    bakeryItems: Grocery[];
    dairyItems: Grocery[];
}