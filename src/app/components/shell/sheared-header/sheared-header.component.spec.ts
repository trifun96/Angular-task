import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShearedHeaderComponent } from './sheared-header.component';

describe('ShearedHeaderComponent', () => {
  let component: ShearedHeaderComponent;
  let fixture: ComponentFixture<ShearedHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShearedHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShearedHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
