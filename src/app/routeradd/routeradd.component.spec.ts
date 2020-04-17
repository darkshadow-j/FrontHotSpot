import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteraddComponent } from './routeradd.component';

describe('RouteraddComponent', () => {
  let component: RouteraddComponent;
  let fixture: ComponentFixture<RouteraddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteraddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteraddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
