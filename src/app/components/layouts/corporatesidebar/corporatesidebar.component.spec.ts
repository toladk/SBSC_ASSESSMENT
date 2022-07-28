import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporatesidebarComponent } from './corporatesidebar.component';

describe('CorporatesidebarComponent', () => {
  let component: CorporatesidebarComponent;
  let fixture: ComponentFixture<CorporatesidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorporatesidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporatesidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
