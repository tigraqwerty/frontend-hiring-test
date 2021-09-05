import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MatMenuModule } from '@angular/material/menu';

import { CallsService } from '@core/services/calls/calls.service';
import { NotificationService } from '@core/services/notification/notification.service';
import { of } from 'rxjs';

import { CallsListComponent } from './calls-list.component';
import { FilterByFieldPipe } from '@shared/pipes/filter-by-field.pipe';

const CallServiceMock = {
  getCalls: () =>
    of({
      calls: [
        {
          id: '8212c66c-97e9-4a2b-8811-eae172fd33d3',
          direction: 'inbound',
          from: '+33104623173',
          to: '+33186180139',
          is_archived: false,
          call_type: 'answered',
        },
      ],
      hasNextPage: true,
    }),
};
const NotificationServiceMock = {
  setLoader: () => {},
  clearLoading: () => {},
};

describe('CallsListComponent', () => {
  let component: CallsListComponent;
  let fixture: ComponentFixture<CallsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, MatMenuModule],
      declarations: [CallsListComponent, FilterByFieldPipe],
      providers: [
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
    fixture = TestBed.createComponent(CallsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
