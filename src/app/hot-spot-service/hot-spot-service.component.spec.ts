import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotSpotServiceComponent } from './hot-spot-service.component';

describe('HotSpotServiceComponent', () => {
  let component: HotSpotServiceComponent;
  let fixture: ComponentFixture<HotSpotServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotSpotServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotSpotServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
