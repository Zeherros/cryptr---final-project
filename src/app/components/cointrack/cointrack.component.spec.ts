import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CointrackComponent } from './cointrack.component';

describe('CointrackComponent', () => {
  let component: CointrackComponent;
  let fixture: ComponentFixture<CointrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CointrackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CointrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
