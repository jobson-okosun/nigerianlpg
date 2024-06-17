import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastPresidentsComponent } from './past-presidents.component';

describe('PastPresidentsComponent', () => {
  let component: PastPresidentsComponent;
  let fixture: ComponentFixture<PastPresidentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PastPresidentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PastPresidentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
