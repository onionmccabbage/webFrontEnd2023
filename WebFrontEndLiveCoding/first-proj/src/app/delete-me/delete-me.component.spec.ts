import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMeComponent } from './delete-me.component';

describe('DeleteMeComponent', () => {
  let component: DeleteMeComponent;
  let fixture: ComponentFixture<DeleteMeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteMeComponent]
    });
    fixture = TestBed.createComponent(DeleteMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
