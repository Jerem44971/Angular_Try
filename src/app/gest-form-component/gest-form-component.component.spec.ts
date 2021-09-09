import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestFormComponentComponent } from './gest-form-component.component';

describe('GestFormComponentComponent', () => {
  let component: GestFormComponentComponent;
  let fixture: ComponentFixture<GestFormComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestFormComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
