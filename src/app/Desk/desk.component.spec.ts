import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DeskComponent } from './desk.component';

describe('DeskComponent', () => {
  let component: DeskComponent;
  let fixture: ComponentFixture<DeskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should have a app-nav directive', () => {
    const appNav = fixture.nativeElement.querySelector('app-nav');
      expect(appNav).not.toBeNull();
  });
});
