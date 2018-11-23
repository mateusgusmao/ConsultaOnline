import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciarComponent } from './gerenciar.component';

describe('GerenciarComponent', () => {
  let component: GerenciarComponent;
  let fixture: ComponentFixture<GerenciarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerenciarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenciarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
