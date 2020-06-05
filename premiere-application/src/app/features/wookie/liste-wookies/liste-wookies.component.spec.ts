import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeWookiesComponent } from './liste-wookies.component';

describe('ListeWookiesComponent', () => {
  let component: ListeWookiesComponent;
  let fixture: ComponentFixture<ListeWookiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeWookiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeWookiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
