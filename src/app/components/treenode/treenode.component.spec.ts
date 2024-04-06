import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreenodeComponent } from './treenode.component';

describe('TreenodeComponent', () => {
  let component: TreenodeComponent;
  let fixture: ComponentFixture<TreenodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TreenodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TreenodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
