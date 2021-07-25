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
  requests: Observable<Request[]> | undefined; /*= new Observable<Request[]>()*/; // observable that holds arrays of request type

  constructor(private service: RequestService) { // below subscribes to observable and maps request properties to json response
    this.requests = this.service.getAllRequests();
      //.subscribe((data: Request) => this.request = { ...data });
    
    // .subscribe(data => this.request = {
    //         id: data.id,
    //         timestamp: data.timestamp,
    //         courseName: data.courseName,
    //         courseCreditHours: data.courseCreditHours,
    //         courseTerm: data.courseTerm,
    //         message: data.message
    //   });
      
      
      // response =>
      // {
      //   this.requests = response.map(request => 
      //     {
      //       return new Request(
      //         request.id,
      //         request.timestamp,
      //         request.courseName,
      //         request.courseCreditHours,
      //         request.courseTerm,
      //         request.message
      //       );
      //     })
      // });
    
  }

  ngOnInit(): void {
  }

}
