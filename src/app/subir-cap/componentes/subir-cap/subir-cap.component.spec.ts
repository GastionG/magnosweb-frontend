import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubirCapComponent } from './subir-cap.component';

describe('SubirCapComponent', () => {
  let component: SubirCapComponent;
  let fixture: ComponentFixture<SubirCapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubirCapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubirCapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
