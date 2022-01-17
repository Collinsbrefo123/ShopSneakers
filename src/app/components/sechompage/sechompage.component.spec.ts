import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SechompageComponent } from './sechompage.component';

describe('SechompageComponent', () => {
  let component: SechompageComponent;
  let fixture: ComponentFixture<SechompageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SechompageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SechompageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
