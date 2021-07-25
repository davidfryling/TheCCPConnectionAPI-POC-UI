// -----------------------------------
// created during tutorial

import { Component } from "@angular/core"; // import component decorator that allows us to make this class a component
import { RequestsService } from "./requests.service";

@Component({  // component decorator function - is this like an attribute in .NET?
    selector: 'requests', // <requests> element -- examples of selectors in css: <div> "div", <div class="requests"> ".requests", <div id="requests"> "#requests" -- similar in Angular, where you can name an element and then select it here
    template: `  
        <h2>{{ title }}</h2>
        <ul>
            <li *ngFor="let request of requests">
                {{ request }}
            </li>
        </ul>
    ` // template will be encapsulated in separate file later as it grows in size
    // *ngFor is like an attribute in html -- astericks needs to preface any directive 
})
export class RequestsComponent {
    title = "Dashboard";
    requests; // this will hold actual objects that are generated when consuming the .NET Core API with a service

    constructor(service: RequestsService) { // added dependency as a parameter of constructor to decouple component and service
        //let service = new RequestsService(); // need to add dependency injection here to decouple component and service
        this.requests = service.getRequests();
    }
}