import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReviewTabPage } from './review-tab.page';

describe('ReviewTabPage', () => {
  let component: ReviewTabPage;
  let fixture: ComponentFixture<ReviewTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewTabPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReviewTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
