/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RocksComponent } from './rocks.component';

describe('RocksComponent', () => {
  let component: RocksComponent;
  let fixture: ComponentFixture<RocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
