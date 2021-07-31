import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotIncludedComponent } from './not-included.component';

describe('NotIncludedComponent', () => {
  let component: NotIncludedComponent;
  let fixture: ComponentFixture<NotIncludedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotIncludedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotIncludedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
