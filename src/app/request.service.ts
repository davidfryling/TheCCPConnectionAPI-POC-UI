import { Injectable } from '@angular/core'; // injectable decoration only necessary if you have dependencies in constructor

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor() { }
}
