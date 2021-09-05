import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { CallsService } from '@core/services/calls/calls.service';
import { NotificationService } from '@core/services/notification/notification.service';
import { of } from 'rxjs';

import { CallDetailsComponent } from './call-details.component';

const CallServiceMock = {
  getCallById: () =>
    of({
      id: '8212c66c-97e9-4a2b-8811-eae172fd33d6',
      direction: 'inbound',
      from: '+33104623173',
      to: '+33186180139',
      is_archived: false,
      call_type: 'answered',
    }),
};
const NotificationServiceMock = {
  setLoader: () => {},
  clearLoading: () => {},
};

describe('CallDetailsComponent', () => {
  let component: CallDetailsComponent;
  let fixture: ComponentFixture<CallDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [CallDetailsComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: 'test-id' }),
          },
        },
        {
          provide: CallsService,
          useValue: CallServiceMock,
        },
        {
          provide: NotificationService,
          useValue: NotificationServiceMock,
        },
      ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
