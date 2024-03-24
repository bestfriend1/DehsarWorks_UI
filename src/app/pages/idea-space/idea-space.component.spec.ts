import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaSpaceComponent } from './idea-space.component';

describe('IdeaSpaceComponent', () => {
  let component: IdeaSpaceComponent;
  let fixture: ComponentFixture<IdeaSpaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IdeaSpaceComponent]
    });
    fixture = TestBed.createComponent(IdeaSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
