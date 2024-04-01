import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveNodeComponent } from './move-node.component';

describe('MoveNodeComponent', () => {
  let component: MoveNodeComponent;
  let fixture: ComponentFixture<MoveNodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoveNodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoveNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
