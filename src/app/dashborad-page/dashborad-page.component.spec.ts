import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboradPageComponent } from './dashborad-page.component';

describe('DashboradPageComponent', () => {
  let component: DashboradPageComponent;
  let fixture: ComponentFixture<DashboradPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboradPageComponent]
    });
    fixture = TestBed.createComponent(DashboradPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
