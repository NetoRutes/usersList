import { TestBed, inject, async } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { Http, HttpModule, ConnectionBackend, ResponseOptions, Response, BaseRequestOptions } from '@angular/http';

import { UsersListService } from './users-list.service';
import { MockUsersList } from './../../mocks/users-list.service.mock';

describe('UsersListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      providers: [
        UsersListService, 
        Http, 
        BaseRequestOptions, 
        MockBackend,
        {
          provide: Http,
          useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions],
        }]
    });
  });

  it('should provide the userService', 
    inject([UsersListService], (service: UsersListService) => {
      expect(service).toBeTruthy();
    })
  );

   it('should return usersList', 
    inject([UsersListService, MockBackend], (service: UsersListService, backend: MockBackend) => {
      let response = new ResponseOptions({
        body: JSON.stringify(MockUsersList)
      });

      const baseResponse = new Response(response);

      backend.connections.subscribe(
        (c: MockConnection) => c.mockRespond(baseResponse)
      );

      return service.getUsers().subscribe( response => {
        expect(response['_body']).toEqual(JSON.stringify(MockUsersList));
      });
    }));

});
