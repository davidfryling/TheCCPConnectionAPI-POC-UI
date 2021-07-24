import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service'; // connects us to request service
import { Observable, of } from 'rxjs'; // allows us to use observable
import { Request } from '../model/request'; // model of request object

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  title = "Dashboard";
  requests = new Array<Request>(); // observable that holds arrays of request type

  constructor(service: RequestService) { // below subscribes to observable and maps request properties to json response
    service.getAllRequests().subscribe(response =>
      {
        this.requests = response.map(request => 
          {
            return new Request(
              request.id,
              request.timestamp,
              request.courseName,
              request.courseCreditHours,
              request.courseTerm,
              request.message
            );
          })
      });
    
  }

  ngOnInit(): void {
  }

}
