import { Inject, Injectable } from '@angular/core'; // injectable decoration only necessary if you have dependencies in constructor
import { HttpClient, HttpHeaders } from '@angular/common/http'; // import http client to access API services
import { Request } from '../models/request'; // model of request object
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';

import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
//import 'rxjs/add/operator/catch'; // deprecated
//import 'rxjs/add/operator/throw'; // deprecated

//@Injectable() // created compliation error
export abstract class DataService {
  headers: HttpHeaders;

  constructor(private fullApiUrl: string, private http: HttpClient) {
    this.headers = new HttpHeaders().set('content-type', 'application/json');
  }
  
  // TODO - how to make generic when it returns an obervable with a specific type of request[]???? Rewatch switchMap operator video in routing unit
  // TODO - add retry to reattempt calls to the server
  getAll(): Observable<Request[]> { 
    return this.http.get<Request[]>(this.fullApiUrl)
      .pipe(
        catchError(this.handleError)); 
  }

  private handleError(error: Response) {
    if (error.status === 404) // handling expected 404 errors 
      return throwError(new NotFoundError());

    // create if statement to handle 400 error for http post

    else // handling unexpected errors
      return throwError(new AppError(error));
  }

  create(request: Request): Observable<Request> {
    let options = {
      headers: this.headers
    }
    
    return this.http.post<Request>(this.fullApiUrl, request, options)
      .pipe(
        catchError(this.handleError)); 
  }

  // update(resource): Observable<Request> { // how to make generic when it returns an obervable with a specific type of request????
  //   return this.http.put<Request>(`${this.apiUrl}/api/Request/${this.request.id}`); // dynamically pass in id to find request
  // }
    
  delete(request: Request) {
     return this.http.delete(this.fullApiUrl + '/' + request.id); 
  }

}
