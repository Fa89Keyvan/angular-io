import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NatualPartyFormComponent } from './natual-party-form.component';

describe('NatualPartyFormComponent', () => {
  let component: NatualPartyFormComponent;
  let fixture: ComponentFixture<NatualPartyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NatualPartyFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NatualPartyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
