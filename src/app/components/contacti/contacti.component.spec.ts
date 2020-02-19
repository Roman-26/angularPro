import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactiComponent } from './contacti.component';

describe('ContactiComponent', () => {
  let component: ContactiComponent;
  let fixture: ComponentFixture<ContactiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
