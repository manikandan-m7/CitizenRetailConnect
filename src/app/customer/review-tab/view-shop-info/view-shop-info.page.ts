import { Component, OnInit } from '@angular/core';
import { Shop } from '../../shop.model';
import { ShopsService } from '../../shops.service';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-view-shop-info',
  templateUrl: './view-shop-info.page.html',
  styleUrls: ['./view-shop-info.page.scss'],
})
export class ViewShopInfoPage implements OnInit {
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
