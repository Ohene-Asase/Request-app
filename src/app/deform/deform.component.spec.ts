import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeformComponent } from './deform.component';

describe('DeformComponent', () => {
  let component: DeformComponent;
  let fixture: ComponentFixture<DeformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
