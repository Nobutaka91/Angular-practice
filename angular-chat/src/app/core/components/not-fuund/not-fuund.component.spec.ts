import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFuundComponent } from './not-fuund.component';

describe('NotFuundComponent', () => {
  let component: NotFuundComponent;
  let fixture: ComponentFixture<NotFuundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotFuundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFuundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
