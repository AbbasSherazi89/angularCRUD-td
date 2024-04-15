import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrapiTableComponent } from './strapi-table.component';

describe('StrapiTableComponent', () => {
  let component: StrapiTableComponent;
  let fixture: ComponentFixture<StrapiTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StrapiTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StrapiTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
