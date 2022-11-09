import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogosliderComponent } from './logoslider.component';

describe('LogosliderComponent', () => {
  let component: LogosliderComponent;
  let fixture: ComponentFixture<LogosliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogosliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogosliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
