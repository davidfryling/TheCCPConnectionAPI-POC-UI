import { Injectable } from '@angular/core'; // injectable decoration only necessary if you have dependencies in constructor

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor() { }

  getRequests() {
    return ["request1", "request2", "request3"]; // will have logic to consume HTTP service later
  }
}
