import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent } from './simple.component';
import { By } from '@angular/platform-browser';

describe('SimpleComponent', () => {
  let component: SimpleComponent;
  let fixture: ComponentFixture<SimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have string message with intial value Testing', () => {
    const actualValue = component.message;
    expect(actualValue).toBe('Testing Example');
  });
  it('should change message to Understood Testing on click event', () => {
    const button = fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('clicl', null);
  });
});
