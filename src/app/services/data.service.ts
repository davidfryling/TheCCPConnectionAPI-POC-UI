import { Injectable } from '@angular/core'; // injectable decoration only necessary if you have dependencies in constructor
import { HttpClient } from '@angular/common/http'; // import http client to access API services
import { Request } from '../models/request'; // model of request object
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';

import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import 'rxjs/add/operator/catch'; // deprecated
import 'rxjs/add/operator/throw'; // deprecated

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private apiUrl: string, private http: HttpClient) {}
  
  // TODO - how to make generic when it returns an obervable with a specific type of request[]????
  // TODO - add retry to reattempt calls to the server
  getAll(): Observable<Request[]> { 
    return this.http.get<Request[]>(`${this.apiUrl}/api/Request`)
        //.map(response => response) // map operator???
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

  // create(resource): Observable<Request> { // how to make generic when it returns an obervable with a specific type of request????
  //   return this.http.post<Request>(`${this.apiUrl}/api/Request`, request);
  // }

  // update(resource): Observable<Request> { // how to make generic when it returns an obervable with a specific type of request????
  //   return this.http.put<Request>(`${this.apiUrl}/api/Request/${this.request.id}`); // dynamically pass in id to find request
  // }
    
  // future method to get single request
  // getOne(): Observable<Request> { // how to make generic when it returns an obervable with a specific type of request????
  //    return this.http.get<Request>(`${this.apiUrl}/api/Request/${this.request.id}`); // dynamically pass in id to find request
  //}

}
