import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarConsultaComponent } from './editar-consulta.component';

describe('EditarConsultaComponent', () => {
  let component: EditarConsultaComponent;
  let fixture: ComponentFixture<EditarConsultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarConsultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
