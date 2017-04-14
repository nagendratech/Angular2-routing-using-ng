import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KirkeeComponent } from './kirkee.component';

describe('KirkeeComponent', () => {
  let component: KirkeeComponent;
  let fixture: ComponentFixture<KirkeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KirkeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KirkeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
