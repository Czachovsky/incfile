import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsStatusComponent } from './questions-status.component';

describe('QuestionsStatusComponent', () => {
  let component: QuestionsStatusComponent;
  let fixture: ComponentFixture<QuestionsStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionsStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
