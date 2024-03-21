import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsarticledetailsComponent } from './blogsarticledetails.component';

describe('BlogsarticledetailsComponent', () => {
  let component: BlogsarticledetailsComponent;
  let fixture: ComponentFixture<BlogsarticledetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlogsarticledetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogsarticledetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
