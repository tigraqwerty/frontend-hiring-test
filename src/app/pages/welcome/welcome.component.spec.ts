import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { RequestService } from '@core/services/request/request.service';

import { WelcomeComponent } from './welcome.component';
import { REQUEST_PROVIDER_TYPE } from '@core/models/request-provider.enum';

const RequestServiceMock = {
  getCurrentProviderType: () => null,
  setProvider: jasmine.createSpy(),
};

class ExampleComponent {}

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'login', component: ExampleComponent },
        ]),
      ],
      declarations: [WelcomeComponent],
      providers: [{ provide: RequestService, useValue: RequestServiceMock }],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should take default value for provider', async () => {
    expect(component.selectedProvider).toEqual(REQUEST_PROVIDER_TYPE.GraphQL);
  });

  it('should call to setProvider method of _requestService on call to start', () => {
    component.start();

    expect(RequestServiceMock.setProvider).toHaveBeenCalled();
  });
});
