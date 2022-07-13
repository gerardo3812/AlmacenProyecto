import { TestBed } from '@angular/core/testing';

import { ConsultaServiciosService } from './consulta-servicios.service';

describe('ConsultaServiciosService', () => {
  let service: ConsultaServiciosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultaServiciosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
