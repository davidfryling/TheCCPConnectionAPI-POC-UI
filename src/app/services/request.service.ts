import { Injectable } from '@angular/core'; // injectable decoration only necessary if you have dependencies in constructor
import { HttpClient } from '@angular/common/http'; // import http client to access API services
import { HttpParams } from '@angular/common/http'; // THIS WILL BE USED TO PASS SPECIFIC PARAMETERS TO SERVICE SO WE ONLY GRAB DATA BASED ON SPECIFIC PARAMETER (e.g., user id for students and parents or school for counselors and advisors)
import { HttpHeaders } from '@angular/common/http'; // THIS WILL BE USED TO PASS AUTH & TOKEN INFO TO SERVICE WHEN API ENDPOINT IS SECURED IN FINAL APP
import { Request } from '../models/request'; // model of request object
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private apiUrl = environment.apiUrl;
  //private request: Request;

  constructor(private http: HttpClient) {}
  
  getAllRequests(): Observable<Request[]> {
    return this.http.get<Request[]>(`${this.apiUrl}/api/Request`);
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
