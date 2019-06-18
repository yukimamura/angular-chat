import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HogehogeComponent } from './hogehoge.component';

describe('HogehogeComponent', () => {
  let component: HogehogeComponent;
  let fixture: ComponentFixture<HogehogeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HogehogeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HogehogeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
