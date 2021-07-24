import { Injectable } from '@angular/core'; // injectable decoration only necessary if you have dependencies in constructor
import { HttpClient } from '@angular/common/http'; // import http client to access API services
import { HttpParams } from '@angular/common/http'; // THIS WILL BE USED TO PASS SPECIFIC PARAMETERS TO SERVICE SO WE ONLY GRAB DATA BASED ON SPECIFIC PARAMETER (e.g., user id for students and parents or school for counselors and advisors)
import { HttpHeaders } from '@angular/common/http'; // THIS WILL BE USED TO PASS AUTH & TOKEN INFO TO SERVICE WHEN API ENDPOINT IS SECURED IN FINAL APP
import { requestApiUrl } from './common/global-contants'; // url stored in separate file as constant
import { Request } from './model/request'; // model of request object
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  
  constructor(private http: HttpClient) {}
  
  public getAllRequests(): Observable<Request[]> {
    return this.http.get<Request[]>(requestApiUrl); // <Request[]> converts response of the http request to and an array of requets
  }
}
