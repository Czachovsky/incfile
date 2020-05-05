import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsNonprofitTypesComponent } from './questions-nonprofit-types.component';

describe('QuestionsNonprofitTypesComponent', () => {
  let component: QuestionsNonprofitTypesComponent;
  let fixture: ComponentFixture<QuestionsNonprofitTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionsNonprofitTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsNonprofitTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
