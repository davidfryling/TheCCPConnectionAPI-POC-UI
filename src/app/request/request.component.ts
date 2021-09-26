import { Component, OnInit } from '@angular/core';
import { RequestService } from '../services/request.service'; // connects us to request service
import { Observable } from 'rxjs'; // allows us to use observable
import { Request } from '../models/request'; // model of request object
import { map } from 'rxjs/operators';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';

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
  } 

  onGetAllRequests(): void { // method to encapsulate service method
    this.requestService.getAllRequests()  
      .subscribe(
        (response) => { // method to handle http response
          console.table(response);
          this.requests = response; // bind request array type to http response 
        },
        (error: AppError) => { // method to handle error response
          if (error instanceof NotFoundError) // specifically handling a 404 error response
            alert('The page you are looking for does not exist');
          else
            throw error; // rethrow error so that it can be handled by our global error handler (i.e., app-error-handler)
        },
        () => console.log('Done getting all requests') // method to run after responses are complete??
    );
  }

  // onAddRequest(): void {

  // }

}
