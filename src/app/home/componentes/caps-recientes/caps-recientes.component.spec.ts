import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapsRecientesComponent } from './caps-recientes.component';

describe('CapsRecientesComponent', () => {
  let component: CapsRecientesComponent;
  let fixture: ComponentFixture<CapsRecientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapsRecientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CapsRecientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
