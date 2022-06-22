import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnetenosComponent } from './unetenos.component';

describe('UnetenosComponent', () => {
  let component: UnetenosComponent;
  let fixture: ComponentFixture<UnetenosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnetenosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnetenosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
