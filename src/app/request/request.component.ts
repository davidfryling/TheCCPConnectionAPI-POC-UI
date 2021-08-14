import { Component, OnInit } from '@angular/core';
import { RequestService } from '../service/request.service'; // connects us to request service
import { Observable } from 'rxjs'; // allows us to use observable
import { Request } from '../model/request'; // model of request object
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  //title = '';
  requests: Request[]; // requests array type that http response json will bind to
  // private request: Request = {
  //     'timestamp': '2008-10-31T17:10:59',
  //     'courseName': 'CHEM 1101 Intro to Chemistry 1',
  //     'courseCreditHours': 5,
  //     'courseTerm': 'SPR22',
  //     'message': ''
  // };

  constructor(private requestService: RequestService) {} //inject request service into contstructor

  ngOnInit() {
    this.onGetAllRequests();
    //this.onAddRequest();
  } 

  onGetAllRequests(): void { // method to encapsulate service method
    this.requestService.getAllRequests().subscribe(
      (response) => {
        console.table(response);
        this.requests = response; // bind request array type to http response 
      },
      (error: any) => console.log(error),
      () => console.log('Done getting all requests')
    );
  }

  // onAddRequest(): void { //
  //   this.requestService.addRequest(this.request).subscribe(
  //     (response) => console.log(response),
  //     (error: any) => console.log(error),
  //     () => console.log('Done adding request')
  //   );
  // }

}
