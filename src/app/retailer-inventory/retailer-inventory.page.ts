import { Component, OnInit } from '@angular/core';
import { RetailerRegistrationService } from '../services/retailer.registration.service';
import { RetailerInventory } from '../model/retailer.inventory.model';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { Grocery } from '../model/grocery.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-retailer-inventory',
  templateUrl: './retailer-inventory.page.html',
  styleUrls: ['./retailer-inventory.page.scss'],
})
export class RetailerInventoryPage implements OnInit {

  retailerInventory: RetailerInventory;
  groceries: Grocery[];
  bakeryItems: Grocery[];
  dairyItems: Grocery[];
  retailerInventoryForm: FormGroup;
  showGroceries: boolean;
  showBakery: boolean;
  showDairy: boolean;


  constructor(private retailerRegistrationService: RetailerRegistrationService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.retailerInventory = this.retailerRegistrationService.getRetailerInventoryDetails();
    this.groceries = this.retailerInventory.groceryItems;
    this.bakeryItems = this.retailerInventory.bakeryItems;
    this.dairyItems = this.retailerInventory.dairyItems;
    this.retailerInventoryForm = new FormGroup({
      groceryItems: this.formBuilder.array([]),
      bakeryThings: this.formBuilder.array([]),
      dairyThings: this.formBuilder.array([]),
    });
    this.addGroceryItems();
    this.addBakeryThings();
    this.addDairyThings();
  }

  get groceryItems(){
    return this.retailerInventoryForm.get('groceryItems') as FormArray;
  }

  addGroceryItems(){
    this.groceries.forEach( (grocery: Grocery, index: number) => {
      this.groceryItems.push(new FormGroup({
        grocerySelected: new FormControl(grocery.status),
        groceryName: new FormControl(grocery.itemName),
        groceryPrice: new FormControl(grocery.itemPrice)
      }));
    });
    //console.log('GroceryItems FormArray::::', this.groceryItems);
  }

  get bakeryThings(){
    return this.retailerInventoryForm.get('bakeryThings') as FormArray;
  }

  addBakeryThings(){
    this.bakeryItems.forEach( (bakery: Grocery, index: number) => {
      this.bakeryThings.push(new FormGroup({
        bakerySelected: new FormControl(bakery.status),
        bakeryName: new FormControl(bakery.itemName),
        bakeryPrice: new FormControl(bakery.itemPrice)
      }));
    });
    //console.log('BakeryThings FormArray::::', this.bakeryThings);
  }

  get dairyThings(){
    return this.retailerInventoryForm.get('dairyThings') as FormArray;
  }

  addDairyThings(){
    this.dairyItems.forEach( (dairy: Grocery, index: number) => {
      this.dairyThings.push(new FormGroup({
        dairySelected: new FormControl(dairy.status),
        dairyName: new FormControl(dairy.itemName),
        dairyPrice: new FormControl(dairy.itemPrice)
      }));
    });
    //console.log('DairyThings FormArray::::', this.dairyThings);
  }

  displayGroceries(){
    this.showGroceries = !this.showGroceries;
  }

  displayBakeryItems(){
    this.showBakery = !this.showBakery;
  }

  displayDairyItems(){
    this.showDairy = !this.showDairy;
  }

  showOrders(){
    this.router.navigate(['retailer-orders']);
  }

  updateInventory(){
    console.log('Retailer updated inventory form:::', this.retailerInventoryForm);
    this.saveInventory();
    console.log('Updated inventory pulled from service:::', this.retailerRegistrationService.getRetailerInventoryDetails());
  }

  private saveInventory(){
    let retailerInventory: RetailerInventory = new RetailerInventory();
    console.log('GroceryItem updated by retailer:::', this.retailerInventoryForm.value.groceryItems);
    let groceryItems = this.retailerInventoryForm.value.groceryItems;
    let groceries: Grocery[] = [];
    groceryItems.forEach(groceryItem => {
      if(groceryItem.grocerySelected){
        let grocery: Grocery = {
          itemName: groceryItem.groceryName,
          itemPrice: groceryItem.groceryPrice,
          itemQuantity: 1,
          status: groceryItem.grocerySelected
        };
        groceries.push(grocery);
      }
    });
    retailerInventory.groceryItems = groceries;
    console.log('BakeryItem updated by retailer:::', this.retailerInventoryForm.value.bakeryThings);
    let bakeryThings = this.retailerInventoryForm.value.bakeryThings;
    let bakeryItems: Grocery[] = [];
    bakeryThings.forEach(bakeryThing => {
      if(bakeryThing.bakerySelected){
        let bakeryItem: Grocery = {
          itemName: bakeryThing.bakeryName,
          itemPrice: bakeryThing.bakeryPrice,
          itemQuantity: 1,
          status: bakeryThing.bakerySelected
        }
        bakeryItems.push(bakeryItem);
      }
    });
    retailerInventory.bakeryItems = bakeryItems;
    console.log('DairyItem updated by retailer:::', this.retailerInventoryForm.value.dairyThings);
    let dairyThings = this.retailerInventoryForm.value.dairyThings;
    let dairyItems: Grocery[] = [];
    dairyThings.forEach(dairyThing => {
      if(dairyThing.dairySelected){
        let dairyItem: Grocery = {
          itemName: dairyThing.dairyName,
          itemPrice: dairyThing.dairyPrice,
          itemQuantity: 1,
          status: dairyThing.dairySelected
        }
        dairyItems.push(dairyItem);
      }
    });
    retailerInventory.dairyItems = dairyItems;
    this.retailerRegistrationService.storeRetailerInventory(retailerInventory);
  }
}
