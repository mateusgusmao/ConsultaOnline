import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciarConsultasComponent } from './gerenciar-consultas.component';

describe('GerenciarConsultasComponent', () => {
  let component: GerenciarConsultasComponent;
  let fixture: ComponentFixture<GerenciarConsultasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerenciarConsultasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenciarConsultasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
