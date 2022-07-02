import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavednewsComponent } from './savednews.component';

describe('SavednewsComponent', () => {
  let component: SavednewsComponent;
  let fixture: ComponentFixture<SavednewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavednewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavednewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
