import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './blog.service';

describe('BlogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlogService]
    });
  });

  it('should be created', inject([BlogService], (service: BlogService) => {
    expect(service).toBeTruthy();
  }));
});
