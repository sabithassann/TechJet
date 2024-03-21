import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsdisplayComponent } from './blogsdisplay.component';

describe('BlogsdisplayComponent', () => {
  let component: BlogsdisplayComponent;
  let fixture: ComponentFixture<BlogsdisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlogsdisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogsdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
