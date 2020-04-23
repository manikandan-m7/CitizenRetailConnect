import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RetailerOrdersPage } from './retailer-orders.page';

describe('RetailerOrdersPage', () => {
  let component: RetailerOrdersPage;
  let fixture: ComponentFixture<RetailerOrdersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailerOrdersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RetailerOrdersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
