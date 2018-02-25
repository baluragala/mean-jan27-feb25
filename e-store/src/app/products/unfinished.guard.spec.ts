import { TestBed, async, inject } from '@angular/core/testing';

import { UnfinishedGuard } from './unfinished.guard';

describe('UnfinishedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnfinishedGuard]
    });
  });

  it('should ...', inject([UnfinishedGuard], (guard: UnfinishedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
