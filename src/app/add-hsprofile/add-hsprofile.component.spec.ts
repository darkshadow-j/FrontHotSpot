import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHSProfileComponent } from './add-hsprofile.component';

describe('AddHSProfileComponent', () => {
  let component: AddHSProfileComponent;
  let fixture: ComponentFixture<AddHSProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddHSProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHSProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
