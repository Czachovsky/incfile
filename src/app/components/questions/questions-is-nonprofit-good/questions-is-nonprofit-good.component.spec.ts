import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsIsNonprofitGoodComponent } from './questions-is-nonprofit-good.component';

describe('QuestionsIsNonprofitGoodComponent', () => {
  let component: QuestionsIsNonprofitGoodComponent;
  let fixture: ComponentFixture<QuestionsIsNonprofitGoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionsIsNonprofitGoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsIsNonprofitGoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
