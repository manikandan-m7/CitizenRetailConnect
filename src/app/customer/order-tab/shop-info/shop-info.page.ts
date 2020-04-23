import { Component, OnInit } from '@angular/core';
import { ShopsService } from '../../shops.service';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Shop } from '../../shop.model';

@Component({
  selector: 'app-shop-info',
  templateUrl: './shop-info.page.html',
  styleUrls: ['./shop-info.page.scss'],
})
export class ShopInfoPage implements OnInit {
  shopInfo: Shop;

  constructor(private shopsService: ShopsService, private route: ActivatedRoute,
    private navCtrl: NavController) { }

  ngOnInit() {
    
    this.route.paramMap.subscribe(paramMap => {
      console.log(paramMap.get('shopName'));
      if (!paramMap.has('shopName')) {
        this.navCtrl.navigateBack('/order-tab');
        return;
      }
      this.shopInfo = this.shopsService.getShopDetails(paramMap.get('shopName'));
    });
  }

}
