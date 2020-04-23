import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomerActivityPage } from './customer-activity.page';

describe('CustomerActivityPage', () => {
  let component: CustomerActivityPage;
  let fixture: ComponentFixture<CustomerActivityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerActivityPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerActivityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
