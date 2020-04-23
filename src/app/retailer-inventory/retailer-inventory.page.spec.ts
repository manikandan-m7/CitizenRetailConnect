import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RetailerInventoryPage } from './retailer-inventory.page';

describe('RetailerInventoryPage', () => {
  let component: RetailerInventoryPage;
  let fixture: ComponentFixture<RetailerInventoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailerInventoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RetailerInventoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
