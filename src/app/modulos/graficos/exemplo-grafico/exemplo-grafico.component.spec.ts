import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploGraficoComponent } from './exemplo-grafico.component';

describe('ExemploGraficoComponent', () => {
  let component: ExemploGraficoComponent;
  let fixture: ComponentFixture<ExemploGraficoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExemploGraficoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExemploGraficoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
