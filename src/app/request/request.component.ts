import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RequestService } from '../services/request.service'; // connects us to request service
import { Request } from '../models/request'; // model of request object
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit, OnChanges {
  
  @Input() newRequestResponse: Request;
  requests: Request[];
  request: Request;
  requestDeleted: boolean;

  constructor(private requestService: RequestService) {} //inject request service into contstructor

  ngOnInit() {
    this.getAllRequests();
  } 

  ngOnChanges(changes: SimpleChanges): void {
    let newRequestChanges = changes['newRequestResponse'];
    let newRequestObject = newRequestChanges.currentValue;
    if (newRequestObject != undefined && !this.requests.includes(newRequestObject)) this.requests.push(newRequestObject);
  }

  getAllRequests(): void { // method to encapsulate service method
    this.requestService.getAll().subscribe(
    (response) => this.requests = response, // method to handle http response by bindingrequest array type to http response
      (error: AppError) => { // method to handle error response
        if (error instanceof NotFoundError) // specifically handling a 404 error response
          alert('The page you are looking for does not exist');
        else
          throw error; // rethrow error so that it can be handled by our global error handler (i.e., app-error-handler)
      },
      () => console.log('Done getting all requests') // method to run after responses are complete??
    );
  }

  deleteRequest(request: Request) : void { 
    this.requestService.delete(request).subscribe(
    (response) => {
      let index = this.requests.indexOf(request);
      this.requests.splice(index, 1);
    },
      (error: AppError) => { // method to handle error response
        if (error instanceof NotFoundError) // specifically handling a 404 error response
          alert('The page you are looking for does not exist');
        else
          throw error; // rethrow error so that it can be handled by our global error handler (i.e., app-error-handler)
      },
      () => console.log('Request deleted') // method to run after responses are complete??
    );
  }

}
