import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';

import { NotificationService } from '@core/services/notification/notification.service';

import { PublicWrapperComponent } from './public-wrapper.component';

const NotificationServiceMock = {
  $loading: of(true),
};

describe('PublicWrapperComponent', () => {
  let component: PublicWrapperComponent;
  let fixture: ComponentFixture<PublicWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, NoopAnimationsModule],
      declarations: [PublicWrapperComponent],
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
    fixture = TestBed.createComponent(PublicWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
