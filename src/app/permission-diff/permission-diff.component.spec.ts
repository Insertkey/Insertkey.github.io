import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionDiffComponent } from './permission-diff.component';

describe('PermissionDiffComponent', () => {
  let component: PermissionDiffComponent;
  let fixture: ComponentFixture<PermissionDiffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermissionDiffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PermissionDiffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
