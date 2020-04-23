import { ShopDetails } from './shop.details.model';
import { RetailerInventory } from './retailer.inventory.model';
import { RetailerCredentials } from './retailer.credentials.model';

export class RetailerRegistration {
    retailerCredentials: RetailerCredentials;
    shopDetails: ShopDetails;
    retailerInventory: RetailerInventory;
}