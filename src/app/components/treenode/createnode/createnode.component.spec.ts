import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatenodeComponent } from './createnode.component';

describe('CreatenodeComponent', () => {
  let component: CreatenodeComponent;
  let fixture: ComponentFixture<CreatenodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatenodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatenodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
