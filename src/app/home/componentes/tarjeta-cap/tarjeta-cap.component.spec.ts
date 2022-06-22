import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaCapComponent } from './tarjeta-cap.component';

describe('TarjetaCapComponent', () => {
  let component: TarjetaCapComponent;
  let fixture: ComponentFixture<TarjetaCapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaCapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaCapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
