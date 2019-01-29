import {async, TestBed} from '@angular/core/testing';
import {MovieService} from './movie.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {getSearchUrl} from './url.helper';
import {SearchService} from './search.service';
import {TOP_MOVIES} from './test/top-movies.mock';

describe('MovieService', () => {
  let service: SearchService;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SearchService]
    });
    service = TestBed.get(SearchService);
    httpMock = TestBed.get(HttpTestingController);
  }));


  afterEach(async(() => {
    httpMock.verify();
  }));

  it('Should find By ID Should return a movie', async(() => {

    service.search('s').subscribe((movies) => {
      expect(movies.results.length).toBeGreaterThan(0);
      expect(movies.page).toEqual(1);
    });

    const req = httpMock.expectOne(getSearchUrl('s') + '&page=1');
    expect(req.request.method).toBe('GET');

    req.flush(TOP_MOVIES);

  }));
});
