import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrderTabPage } from './order-tab.page';

describe('OrderTabPage', () => {
  let component: OrderTabPage;
  let fixture: ComponentFixture<OrderTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderTabPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrderTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
