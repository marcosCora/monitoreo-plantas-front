import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalReadingsComponent } from './global-readings.component';

describe('GlobalReadingsComponent', () => {
  let component: GlobalReadingsComponent;
  let fixture: ComponentFixture<GlobalReadingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GlobalReadingsComponent]
    });
    fixture = TestBed.createComponent(GlobalReadingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
