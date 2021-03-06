import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecialidadeComponent } from './especialidade.component';

describe('EspecialidadeComponent', () => {
  let component: EspecialidadeComponent;
  let fixture: ComponentFixture<EspecialidadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspecialidadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecialidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
