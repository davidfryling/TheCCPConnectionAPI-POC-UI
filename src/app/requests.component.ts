import { Component } from "@angular/core"; // import component decorator that allows us to make this class a component

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
    requests = ["request1", "request2", "request3"]; // this will hold actual objects that are generated when consuming the .NET Core API with a service
}