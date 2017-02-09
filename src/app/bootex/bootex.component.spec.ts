/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BootexComponent } from './bootex.component';

describe('BootexComponent', () => {
  let component: BootexComponent;
  let fixture: ComponentFixture<BootexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
