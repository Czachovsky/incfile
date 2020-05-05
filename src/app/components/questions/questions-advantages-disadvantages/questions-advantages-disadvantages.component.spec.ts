import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsAdvantagesDisadvantagesComponent } from './questions-advantages-disadvantages.component';

describe('QuestionsAdvantagesDisadvantagesComponent', () => {
  let component: QuestionsAdvantagesDisadvantagesComponent;
  let fixture: ComponentFixture<QuestionsAdvantagesDisadvantagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionsAdvantagesDisadvantagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsAdvantagesDisadvantagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
