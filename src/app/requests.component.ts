import { Component } from "@angular/core"; // import component decorator that allows us to make this class a component

@Component({  // component decorator function - is this like an attribute in .NET?
    selector: 'requests', // <requests> element -- examples of selectors in css: <div> "div", <div class="requests"> ".requests", <div id="requests"> "#requests" -- similar in Angular, where you can name an element and then select it here
    template: '<h2>Requests</h2>' // template will be encapsulated in separate file later as it grows in size 
})
export class RequestsComponent {

}