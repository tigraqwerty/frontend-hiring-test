import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';

import { NotificationService } from '@core/services/notification/notification.service';

import { PrivateWrapperComponent } from './private-wrapper.component';

const NotificationServiceMock = {
  $loading: of(true),
};

describe('PrivateWrapperComponent', () => {
  let component: PrivateWrapperComponent;
  let fixture: ComponentFixture<PrivateWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, NoopAnimationsModule],
      declarations: [PrivateWrapperComponent],
      providers: [
        {
          provide: NotificationService,
          useValue: NotificationServiceMock,
        },
      ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
