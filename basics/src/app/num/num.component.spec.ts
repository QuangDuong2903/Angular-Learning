import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumComponent } from './num.component';

describe('NumComponent', () => {
  let component: NumComponent;
  let fixture: ComponentFixture<NumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NumComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
