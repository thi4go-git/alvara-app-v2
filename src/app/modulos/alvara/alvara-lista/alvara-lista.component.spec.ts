import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlvaraListaComponent } from './alvara-lista.component';

describe('AlvaraListaComponent', () => {
  let component: AlvaraListaComponent;
  let fixture: ComponentFixture<AlvaraListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlvaraListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlvaraListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
