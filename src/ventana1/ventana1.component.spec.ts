import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ventana1Component } from './ventana1.component';

describe('Ventana1Component', () => {
  let component: Ventana1Component;
  let fixture: ComponentFixture<Ventana1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ventana1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ventana1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
