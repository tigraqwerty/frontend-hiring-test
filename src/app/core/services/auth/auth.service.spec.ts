import { TestBed } from '@angular/core/testing';

import { RequestService } from '@core/services/request/request.service';

import { AuthService } from './auth.service';

const RequestServiceMock = {
  getCurrentProviderType: () => 'some_value',
  setProvider: () => {},
};

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: RequestService, useValue: RequestServiceMock }],
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
