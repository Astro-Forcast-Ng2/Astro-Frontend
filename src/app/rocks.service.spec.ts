/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RocksService } from './rocks.service';

describe('RocksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RocksService]
    });
  });

  it('should ...', inject([RocksService], (service: RocksService) => {
    expect(service).toBeTruthy();
  }));
});
