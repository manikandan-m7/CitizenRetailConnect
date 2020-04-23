import { Component, OnInit } from '@angular/core';
import { Grocery } from 'src/app/model/grocery.model';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { RetailerInventoryService } from 'src/app/services/retailer.inventory.service';
import { RetailerRegistrationService } from 'src/app/services/retailer.registration.service';
import { ShopDetails } from 'src/app/model/shop.details.model';
import { RetailerInventory } from 'src/app/model/retailer.inventory.model';

@Component({
  selector: 'app-shop-details',
  templateUrl: './shop-details.page.html',
  styleUrls: ['./shop-details.page.scss'],
})
export class ShopDetailsPage implements OnInit {

  showGroceries : boolean = false;
  showBakery : boolean = false;
  showDairy : boolean = false;
  groceries : Grocery[] = [];
  bakeryItems : Grocery[] = [];
  dairyItems : Grocery[] = [];
  shopDetailsForm: FormGroup;
  //shopDetails: ShopDetails;
  //retailerInventory: RetailerInventory;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private retailerInventoryService: RetailerInventoryService,
              private retailerRegistrationService: RetailerRegistrationService) { }

  ngOnInit() {
    this.groceries = this.retailerInventoryService.getGroceries();
    this.bakeryItems = this.retailerInventoryService.getBakeryItems();
    this.dairyItems = this.retailerInventoryService.getDairyItems();

    this.shopDetailsForm = new FormGroup({
      shopName: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      emailAddress: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.email]
      }),
      /*location : new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required]
      }),*/
      openingTime: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      closingTime: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      paymentOptions: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      upiId: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      deliveryOptions: new FormControl(null, {
          updateOn: 'change',
          validators: [Validators.required]
      }),
      groceryItems : this.formBuilder.array([]),
      bakeryThings : this.formBuilder.array([]),
      dairyThings : this.formBuilder.array([])
    });
    this.addGroceryItems();
    this.addBakeryThings();
    this.addDairyThings();
  }

  get groceryItems(){
    return this.shopDetailsForm.get('groceryItems') as FormArray;
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
    return this.shopDetailsForm.get('bakeryThings') as FormArray;
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
    return this.shopDetailsForm.get('dairyThings') as FormArray;
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

  submitRegistration(){
    console.log('Shop Details Form::::', this.shopDetailsForm);
    this.saveShopDetails();
    this.saveInventory();
    console.log('Retailer Registration Details Form::::', this.retailerRegistrationService.getRetailerRegistrationDetails());
    this.showCurrentInventory();
  }

  private saveShopDetails(){
    let shopDetails: ShopDetails = new ShopDetails();
    shopDetails.shopName = this.shopDetailsForm.value.shopName;
    shopDetails.ownerEmailId = this.shopDetailsForm.value.emailAddress;
    shopDetails.shopLocation = this.shopDetailsForm.value.location;
    shopDetails.shopOpeningTime = this.shopDetailsForm.value.openingTime;
    shopDetails.shopClosingTime = this.shopDetailsForm.value.closingTime;
    shopDetails.paymentOption = this.shopDetailsForm.value.paymentOptions;
    shopDetails.upiId = this.shopDetailsForm.value.upiId;
    shopDetails.deliveryOption = this.shopDetailsForm.value.DeliveryOptions;
    this.retailerRegistrationService.storeRetailerShopDetails(shopDetails);
  }

  private saveInventory(){
    let retailerInventory: RetailerInventory = new RetailerInventory();
    console.log('GroceryItem selected by retailer:::', this.shopDetailsForm.value.groceryItems);
    let groceryItems = this.shopDetailsForm.value.groceryItems;
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
    console.log('BakeryItem selected by retailer:::', this.shopDetailsForm.value.bakeryThings);
    let bakeryThings = this.shopDetailsForm.value.bakeryThings;
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
    console.log('DairyItem selected by retailer:::', this.shopDetailsForm.value.dairyThings);
    let dairyThings = this.shopDetailsForm.value.dairyThings;
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

  showCurrentInventory(){
    this.router.navigate(['retailer-inventory']);
  }
}
