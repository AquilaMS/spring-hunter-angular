import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FightButtonComponent } from './fight-button.component';

describe('FightButtonComponent', () => {
  let component: FightButtonComponent;
  let fixture: ComponentFixture<FightButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FightButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FightButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
