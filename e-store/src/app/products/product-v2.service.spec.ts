import { TestBed, inject } from '@angular/core/testing';

import { ProductV2Service } from './product-v2.service';

describe('ProductV2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductV2Service]
    });
  });

  it('should be created', inject([ProductV2Service], (service: ProductV2Service) => {
    expect(service).toBeTruthy();
  }));
});
