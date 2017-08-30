import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsListItemComponent } from './questions-list-item.component';

describe('QuestionsListItemComponent', () => {
  let component: QuestionsListItemComponent;
  let fixture: ComponentFixture<QuestionsListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionsListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
