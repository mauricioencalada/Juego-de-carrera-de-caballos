import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VariosPage } from './varios.page';

describe('VariosPage', () => {
  let component: VariosPage;
  let fixture: ComponentFixture<VariosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VariosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
