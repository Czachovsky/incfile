import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsStartNonprofitComponent } from './questions-start-nonprofit.component';

describe('QuestionsStartNonprofitComponent', () => {
  let component: QuestionsStartNonprofitComponent;
  let fixture: ComponentFixture<QuestionsStartNonprofitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionsStartNonprofitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsStartNonprofitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
