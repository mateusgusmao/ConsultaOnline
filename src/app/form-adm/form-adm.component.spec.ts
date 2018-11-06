import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAdmComponent } from './form-adm.component';

describe('FormAdmComponent', () => {
  let component: FormAdmComponent;
  let fixture: ComponentFixture<FormAdmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAdmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
