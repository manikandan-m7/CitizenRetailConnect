import { Injectable } from '@angular/core';
import { Inventory } from './inventory.model';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  private inventory: Inventory = {
    category: [
      {
        name: "Vegetables",
        items: [
          {
            name: "Onion",
            price: 40,
            quantity: 0,
            unit: "Kg"
          },
          {
            name: "Cabbage",
            price: 26,
            quantity: 0,
            unit: "Kg"
          },
          {
            name: "Potato",
            price: 45,
            quantity: 0,
            unit: "Kg"
          },
          {
            name: "Tomato",
            price: 26,
            quantity: 0,
            unit: "Kg"
          }
        ]
      },
      {
        name: "Diary",
        items: [
          {
            name: "Milk",
            price: 52,
            quantity: 0,
            unit: "L"
          },
          {
            name: "Egg",
            price: 5,
            quantity: 0,
            unit: "N"
          }
        ]
      },
      {
        name: "Grocceries",
        items: [
          {
            name: "Rice",
            price: 45,
            quantity: 0,
            unit: "Kg"
          },
          {
            name: "Wheat",
            price: 35,
            quantity: 0,
            unit: "Kg"
          }
        ]
      },
      {
        name: "Fruits",
        items: [
          {
            name: "Apple",
            price: 120,
            quantity: 0,
            unit: "Kg"
          },
          {
            name: "Banana",
            price: 35,
            quantity: 0,
            unit: "Kg"
          },
          {
            name: "Mango",
            price: 85,
            quantity: 0,
            unit: "Kg"
          },
          {
            name: "Water Melon",
            price: 12,
            quantity: 0,
            unit: "Kg"
          }
        ]
      }
    ]
  };
  constructor() { }

  getInventory() {
    return this.inventory;
  }

}
