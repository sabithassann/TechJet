import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBrandsComponent } from './top-brands.component';

describe('TopBrandsComponent', () => {
  let component: TopBrandsComponent;
  let fixture: ComponentFixture<TopBrandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopBrandsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
