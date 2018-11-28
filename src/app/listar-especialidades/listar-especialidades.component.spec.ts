import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEspecialidadesComponent } from './listar-especialidades.component';

describe('ListarEspecialidadesComponent', () => {
  let component: ListarEspecialidadesComponent;
  let fixture: ComponentFixture<ListarEspecialidadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarEspecialidadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarEspecialidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
