import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultThemeComponent } from './default-theme.component';

describe('DefaultThemeComponent', () => {
  let component: DefaultThemeComponent;
  let fixture: ComponentFixture<DefaultThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultThemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
