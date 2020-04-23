import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DenyOrderPage } from './deny-order.page';

describe('DenyOrderPage', () => {
  let component: DenyOrderPage;
  let fixture: ComponentFixture<DenyOrderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DenyOrderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DenyOrderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
