import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApoyanosComponent } from './apoyanos.component';

describe('ApoyanosComponent', () => {
  let component: ApoyanosComponent;
  let fixture: ComponentFixture<ApoyanosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApoyanosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApoyanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
