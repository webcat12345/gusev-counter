import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterSlotComponent } from './counter-slot.component';

describe('CounterSlotComponent', () => {
  let component: CounterSlotComponent;
  let fixture: ComponentFixture<CounterSlotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CounterSlotComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
