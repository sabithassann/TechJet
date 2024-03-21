import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JetblogsComponent } from './jetblogs.component';

describe('JetblogsComponent', () => {
  let component: JetblogsComponent;
  let fixture: ComponentFixture<JetblogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JetblogsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JetblogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
