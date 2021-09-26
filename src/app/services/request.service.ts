import { Injectable } from '@angular/core'; // injectable decoration only necessary if you have dependencies in constructor
import { HttpClient } from '@angular/common/http'; // import http client to access API services
import { HttpParams } from '@angular/common/http'; // THIS WILL BE USED TO PASS SPECIFIC PARAMETERS TO SERVICE SO WE ONLY GRAB DATA BASED ON SPECIFIC PARAMETER (e.g., user id for students and parents or school for counselors and advisors)
import { HttpHeaders } from '@angular/common/http'; // THIS WILL BE USED TO PASS AUTH & TOKEN INFO TO SERVICE WHEN API ENDPOINT IS SECURED IN FINAL APP
import { Request } from '../models/request'; // model of request object
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';

import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import 'rxjs/add/operator/catch'; // deprecated
import { NotFoundComponent } from '../not-found/not-found.component';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private apiUrl = environment.apiUrl;
  //private request: Request;

  constructor(private http: HttpClient) {}
  
  getAllRequests(): Observable<Request[]> {
    return this.http.get<Request[]>(`${this.apiUrl}/api/Request`)
      .pipe(
        catchError((error: Response) => {
          if (error.status === 404) // specifically handling a 404 error response
            return throwError(new NotFoundError());
          else
            return throwError(new AppError(error)); // DOES THIS WORK???
        })
      ); 
  }

  //Example of using the tap rxjs operator, which returns the http response in the exact same form (i.e., json -> json) -- mostly for debugging
  // getAllRequests(): Observable<Request[]> { // use .pipe method to use any rxjs operator 
  //   return this.http.get<Request[]>(`${this.apiUrl}/api/Request`)
  //   .pipe(
  //     tap(requests => console.log(requests))
  //   );
  // }

  // addRequest(request: Request): Observable<Request> {
  //   return this.http.post<Request>(`${this.apiUrl}/api/Request`, request);
  // }
    
  // future method to get single request
  //getOneRequest(): Observable<Request> {
    //return this.http.get<Request>(`${this.apiUrl}/api/Request/${this.request.id}`); // dynamically pass in id to find request
  //}

}
