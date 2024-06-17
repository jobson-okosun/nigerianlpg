import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoverningCouncilsComponent } from './governing-councils.component';

describe('GoverningCouncilsComponent', () => {
  let component: GoverningCouncilsComponent;
  let fixture: ComponentFixture<GoverningCouncilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoverningCouncilsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GoverningCouncilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
