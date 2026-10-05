import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { DetailsLayoutComponent } from './details-layout.component';

describe('DetailsLayoutComponent', () => {
  let component: DetailsLayoutComponent;
  let fixture: ComponentFixture<DetailsLayoutComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsLayoutComponent ]
    })
    schemas: [NO_ERRORS_SCHEMA]
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
