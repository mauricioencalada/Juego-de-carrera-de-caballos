import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TresPage } from './tres.page';

describe('TresPage', () => {
  let component: TresPage;
  let fixture: ComponentFixture<TresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TresPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
