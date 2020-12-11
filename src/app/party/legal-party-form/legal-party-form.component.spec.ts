import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalPartyFormComponent } from './legal-party-form.component';

describe('LegalPartyFormComponent', () => {
  let component: LegalPartyFormComponent;
  let fixture: ComponentFixture<LegalPartyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegalPartyFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalPartyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
