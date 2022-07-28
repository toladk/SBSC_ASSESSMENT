import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporatemainComponent } from './corporatemain.component';

describe('CorporatemainComponent', () => {
  let component: CorporatemainComponent;
  let fixture: ComponentFixture<CorporatemainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorporatemainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporatemainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
