import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';

import { CountriesService } from './countries.service';

describe('CountriesService', () => {
  let service: CountriesService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let URL = environment.URL_API;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController)
    service = TestBed.inject(CountriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Tests for CountriesService', () => {

    it( 'Should', () => {
      
    });
  });
});
