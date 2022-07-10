import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShearedFooterComponent } from './sheared-footer.component';

describe('ShearedFooterComponent', () => {
  let component: ShearedFooterComponent;
  let fixture: ComponentFixture<ShearedFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShearedFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShearedFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
