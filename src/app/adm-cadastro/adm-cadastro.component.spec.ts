import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmCadastroComponent } from './adm-cadastro.component';

describe('AdmCadastroComponent', () => {
  let component: AdmCadastroComponent;
  let fixture: ComponentFixture<AdmCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
