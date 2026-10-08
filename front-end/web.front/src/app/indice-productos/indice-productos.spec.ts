import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiceProductos } from './indice-productos';

describe('IndiceProductos', () => {
  let component: IndiceProductos;
  let fixture: ComponentFixture<IndiceProductos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndiceProductos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndiceProductos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
