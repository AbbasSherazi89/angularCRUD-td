import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChildNodeComponent } from './add-child-node.component';

describe('AddChildNodeComponent', () => {
  let component: AddChildNodeComponent;
  let fixture: ComponentFixture<AddChildNodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddChildNodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddChildNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
