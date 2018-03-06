import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalBlockComponent } from './external-block.component';

describe('ExternalBlockComponent', () => {
  let component: ExternalBlockComponent;
  let fixture: ComponentFixture<ExternalBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternalBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
