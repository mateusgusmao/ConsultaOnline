import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCadastroComponent } from './formulario-cadastro.component';

describe('FormularioCadastroComponent', () => {
  let component: FormularioCadastroComponent;
  let fixture: ComponentFixture<FormularioCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
