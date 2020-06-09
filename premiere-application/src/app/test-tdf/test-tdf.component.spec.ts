import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTdfComponent } from './test-tdf.component';

describe('TestTdfComponent', () => {
  let component: TestTdfComponent;
  let fixture: ComponentFixture<TestTdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestTdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
