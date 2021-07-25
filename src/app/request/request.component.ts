import { Component, OnInit } from '@angular/core';
import { RequestService } from '../service/request.service'; // connects us to request service
import { Observable, of } from 'rxjs'; // allows us to use observable
import { Request } from '../model/request'; // model of request object
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  title = "Dashboard";
  requests: Observable<Request[]> | undefined; /*= new Observable<Request[]>()*/; // observable that holds arrays of request type

  constructor(private service: RequestService) {}// below subscribes to observable and maps request properties to json response

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
    

  // ngOnInit() {
  //   this.requests = this.service.getAllRequests()
  //   .pipe(map((data: Request[]) => {
  //         return data
  //             .map((item: Request) => {
  //                 return {
  //               id: item.id,
  //               timestamp: item.timestamp,
  //               courseName: item.courseName,
  //               courseCreditHours: item.courseCreditHours,
  //               courseTerm: item.courseTerm,
  //               message: item.message
  //             };
  //       });
  //     }))
  // }

  ngOnInit() {
    this.service.getAllRequests().subscribe((response: Observable<Request[]>)=>{
      this.requests= response;
    }) 

}
