import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarUserComponent } from './visualizar-user.component';

describe('VisualizarUserComponent', () => {
  let component: VisualizarUserComponent;
  let fixture: ComponentFixture<VisualizarUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizarUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizarUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
