import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  title = "Dashboard";
  requests; // this will hold actual objects that are generated when consuming the .NET Core API with a service

  constructor(service: RequestService) { // added dependency as a parameter of constructor to decouple component and service
      //let service = new RequestsService(); // need to add dependency injection here to decouple component and service
      this.requests = service.getRequests();
  }

  ngOnInit(): void {
  }

}
