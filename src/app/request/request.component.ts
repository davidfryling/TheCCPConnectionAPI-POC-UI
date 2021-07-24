import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service'; // connects us to request service
import { Observable } from 'rxjs'; // allows us to use observable
import { Request } from './request'; // model of request object

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  title = "Dashboard";
  requests: Observable<Request[]>;

  constructor(service: RequestService) {
      this.requests = service.getAllRequests();
  }

  ngOnInit(): void {
  }

}
