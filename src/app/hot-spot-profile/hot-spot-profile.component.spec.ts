import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotSpotProfileComponent } from './hot-spot-profile.component';

describe('HotSpotProfileComponent', () => {
  let component: HotSpotProfileComponent;
  let fixture: ComponentFixture<HotSpotProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotSpotProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotSpotProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
