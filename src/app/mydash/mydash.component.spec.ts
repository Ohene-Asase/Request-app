
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { MydashComponent } from './mydash.component';

describe('MydashComponent', () => {
  let component: MydashComponent;
  let fixture: ComponentFixture<MydashComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MydashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MydashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
