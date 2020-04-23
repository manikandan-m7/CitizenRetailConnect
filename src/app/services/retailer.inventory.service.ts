import { Injectable } from '@angular/core';
import { Grocery } from '../model/grocery.model';

@Injectable()
export class RetailerInventoryService{

    groceries : Grocery[] = [
        { itemName: 'Onions', itemPrice: 50, itemQuantity: 1, status: false },
        { itemName: 'Rice', itemPrice: 67, itemQuantity: 1, status: false  },
        { itemName: 'Wheat', itemPrice: 55, itemQuantity: 1, status: false  },
        { itemName: 'Sugar', itemPrice: 96, itemQuantity: 1, status: false  },
        { itemName: 'Salt', itemPrice: 40, itemQuantity: 1, status: false  }
    ];
    bakeryItems : Grocery[] = [
        { itemName: 'Plain Bread', itemPrice: 35, itemQuantity: 1, status: false  },
        { itemName: 'Wheat Bread', itemPrice: 45, itemQuantity: 1, status: false  },
        { itemName: 'Veg Puff', itemPrice: 14, itemQuantity: 1, status: false  },
        { itemName: 'Paneer Puff', itemPrice: 20, itemQuantity: 1, status: false  },
        { itemName: 'Cookie', itemPrice: 10, itemQuantity: 1, status: false  }
    ];
    dairyItems : Grocery[] = [
        { itemName: 'Milk', itemPrice: 25, itemQuantity: 0.5, status: false  },
        { itemName: 'Curd', itemPrice: 32, itemQuantity: 0.5, status: false  },
        { itemName: 'ButterMilk', itemPrice: 10, itemQuantity: 1, status: false  },
        { itemName: 'BadamMilk', itemPrice: 30, itemQuantity: 1, status: false  },
        { itemName: 'RoseMilk', itemPrice: 25, itemQuantity: 1, status: false  }
    ];

    constructor(){}

    getGroceries(): Grocery[]{
        return this.groceries;
    }

    getBakeryItems(): Grocery[]{
        return this.bakeryItems;
    }

    getDairyItems(): Grocery[]{
        return this.dairyItems;
    }
}