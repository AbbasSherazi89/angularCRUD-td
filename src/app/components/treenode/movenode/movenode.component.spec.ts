import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovenodeComponent } from './movenode.component';

describe('MovenodeComponent', () => {
  let component: MovenodeComponent;
  let fixture: ComponentFixture<MovenodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovenodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovenodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
