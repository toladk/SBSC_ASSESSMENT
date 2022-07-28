import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateheaderComponent } from './corporateheader.component';

describe('CorporateheaderComponent', () => {
  let component: CorporateheaderComponent;
  let fixture: ComponentFixture<CorporateheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorporateheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporateheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
