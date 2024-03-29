import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewActivitiesComponent } from './view-activities.component';

describe('ViewActivitiesComponent', () => {
  let component: ViewActivitiesComponent;
  let fixture: ComponentFixture<ViewActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewActivitiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
