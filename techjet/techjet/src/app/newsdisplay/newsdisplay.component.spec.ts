import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsdisplayComponent } from './newsdisplay.component';

describe('NewsdisplayComponent', () => {
  let component: NewsdisplayComponent;
  let fixture: ComponentFixture<NewsdisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewsdisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewsdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
