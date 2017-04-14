import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DapodiComponent } from './dapodi.component';

describe('DapodiComponent', () => {
  let component: DapodiComponent;
  let fixture: ComponentFixture<DapodiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DapodiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DapodiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
