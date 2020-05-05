import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsWhatIsNonprofitComponent } from './questions-what-is-nonprofit.component';

describe('QuestionsWhatIsNonprofitComponent', () => {
  let component: QuestionsWhatIsNonprofitComponent;
  let fixture: ComponentFixture<QuestionsWhatIsNonprofitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionsWhatIsNonprofitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsWhatIsNonprofitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
