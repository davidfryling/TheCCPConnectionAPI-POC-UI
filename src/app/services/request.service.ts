import { Injectable } from '@angular/core'; // injectable decoration only necessary if you have dependencies in constructor
import { HttpClient } from '@angular/common/http'; // import http client to access API services
import { DataService } from './data.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestService extends DataService {

  constructor(http: HttpClient) {
    super(environment.apiUrl, http); // pass url and http to base class (i.e., data service)
  }

}
