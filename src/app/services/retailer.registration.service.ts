import { Injectable } from '@angular/core';
import { RetailerRegistration } from '../model/retailer.registration.model';
import { RetailerCredentials } from '../model/retailer.credentials.model';
import { ShopDetails } from '../model/shop.details.model';
import { RetailerInventory } from '../model/retailer.inventory.model';

@Injectable()
export class RetailerRegistrationService{

    retailerRegistration: RetailerRegistration;

    constructor(){
        this.retailerRegistration = new RetailerRegistration();
    }

    storeRetailerCredentials(retailerCredentials: RetailerCredentials){
        this.retailerRegistration.retailerCredentials = retailerCredentials;
    }

    storeRetailerShopDetails(shopDetails: ShopDetails){
        this.retailerRegistration.shopDetails = shopDetails;
    }

    storeRetailerInventory(retailerInventory: RetailerInventory){
        this.retailerRegistration.retailerInventory = retailerInventory;
    }

    getRetailerRegistrationDetails(): RetailerRegistration{
        return this.retailerRegistration;
    }

    getRetailerInventoryDetails(): RetailerInventory{
        return this.retailerRegistration.retailerInventory;
    }

    saveRetailerRegistrationDetails(){
        
    }
}