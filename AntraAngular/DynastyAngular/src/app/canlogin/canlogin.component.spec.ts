import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanloginComponent } from './canlogin.component';

describe('CanloginComponent', () => {
  let component: CanloginComponent;
  let fixture: ComponentFixture<CanloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CanloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
