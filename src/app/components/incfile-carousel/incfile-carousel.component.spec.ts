import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncfileCarouselComponent } from './incfile-carousel.component';

describe('IncfileCarouselComponent', () => {
  let component: IncfileCarouselComponent;
  let fixture: ComponentFixture<IncfileCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncfileCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncfileCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
