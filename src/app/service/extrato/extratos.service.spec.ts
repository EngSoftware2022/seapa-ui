import { TestBed } from '@angular/core/testing';

import { ExtratosService } from './extratos.service';

describe('ExtratosService', () => {
  let service: ExtratosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExtratosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
