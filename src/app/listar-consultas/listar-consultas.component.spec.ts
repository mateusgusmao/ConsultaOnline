import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarConsultasComponent } from './listar-consultas.component';

describe('ListarConsultasComponent', () => {
  let component: ListarConsultasComponent;
  let fixture: ComponentFixture<ListarConsultasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarConsultasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarConsultasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
