import { TestBed } from '@angular/core/testing';

import { RequestService } from '@core/services/request/request.service';

import { CallsService } from './calls.service';

const RequestServiceMock = {
  getCurrentProviderType: () => 'some_value',
  setProvider: () => {},
};

describe('CallsService', () => {
  let service: CallsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: RequestService, useValue: RequestServiceMock }],
    });
    service = TestBed.inject(CallsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
