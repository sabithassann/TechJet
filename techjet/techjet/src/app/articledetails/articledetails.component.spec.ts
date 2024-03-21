import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticledetailsComponent } from './articledetails.component';

describe('ArticledetailsComponent', () => {
  let component: ArticledetailsComponent;
  let fixture: ComponentFixture<ArticledetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArticledetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArticledetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
